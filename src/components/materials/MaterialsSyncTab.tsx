'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import {
  CheckSquare,
  ExternalLink,
  FileText,
  Loader2,
  Plus,
  RefreshCw,
  Sparkles,
  Square,
  Trash2,
  Upload,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type {
  CourseMaterialRow,
  FlashcardRow,
  QuestionRow,
  StudyNoteRow,
  SyllabusTopicRow,
} from '@/types/database';

interface MaterialsSyncTabProps {
  subjectId: string;
  topics: SyllabusTopicRow[];
  materials: CourseMaterialRow[];
  onMaterialsChange: (nextMaterials: CourseMaterialRow[]) => void;
  onSuiteGenerated: (result: {
    note: StudyNoteRow;
    questions: QuestionRow[];
    flashcards: FlashcardRow[];
    mode: 'append' | 'replace_topic';
    topicId: string | null;
    materialIds: string[];
  }) => void;
}

const MAX_DIRECT_UPLOAD_BYTES = 4 * 1024 * 1024;
const ACCEPTED_EXTENSIONS =
  '.pdf,.pptx,.docx,.txt,.md,.png,.jpg,.jpeg,.webp';

export function MaterialsSyncTab({
  subjectId,
  topics,
  materials,
  onMaterialsChange,
  onSuiteGenerated,
}: MaterialsSyncTabProps) {
  const router = useRouter();
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const [syncingPack, setSyncingPack] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const [uploadTopicId, setUploadTopicId] = React.useState<string>('unassigned');
  const [uploading, setUploading] = React.useState(false);
  const [uploadStatusText, setUploadStatusText] = React.useState<string | null>(
    null,
  );
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
  const [successMsg, setSuccessMsg] = React.useState<string | null>(null);

  // Paste modal state
  const [pasteOpen, setPasteOpen] = React.useState(false);
  const [pastedTitle, setPastedTitle] = React.useState('');
  const [pastedTopicId, setPastedTopicId] = React.useState('unassigned');
  const [pastedText, setPastedText] = React.useState('');
  const [pasting, setPasting] = React.useState(false);

  // Preview extracted text modal
  const [previewMaterial, setPreviewMaterial] =
    React.useState<CourseMaterialRow | null>(null);

  // Selection & Generation state
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
  const [generationMode, setGenerationMode] = React.useState<
    'append' | 'replace_topic'
  >('append');
  const [targetTopicId, setTargetTopicId] = React.useState<string>('auto');
  const [generating, setGenerating] = React.useState(false);
  const [busyMaterialIds, setBusyMaterialIds] = React.useState<
    Record<string, boolean>
  >({});

  const selectableTopics = React.useMemo(() => {
    const parentIds = new Set(
      topics.map((t) => t.parent_id).filter(Boolean) as string[],
    );
    return [...topics]
      .filter((t) => !parentIds.has(t.id))
      .sort((a, b) => a.sort_order - b.sort_order);
  }, [topics]);

  const topicMap = React.useMemo(() => {
    const map: Record<string, SyllabusTopicRow> = {};
    for (const t of topics) map[t.id] = t;
    return map;
  }, [topics]);

  // Keep selectedIds pruned to existing materials
  React.useEffect(() => {
    const existing = new Set(materials.map((m) => m.id));
    setSelectedIds((prev) => prev.filter((id) => existing.has(id)));
  }, [materials]);

  const uploadSingleFile = async (file: File): Promise<CourseMaterialRow> => {
    const topicIdPayload =
      uploadTopicId !== 'unassigned' ? uploadTopicId : undefined;

    if (file.size > MAX_DIRECT_UPLOAD_BYTES) {
      setUploadStatusText(`Preparing direct upload for ${file.name}…`);
      const signedRes = await fetch('/api/materials/signed-upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fileName: file.name,
          subjectId,
          mimeType: file.type || 'application/octet-stream',
        }),
      });
      const signedJson = (await signedRes.json()) as {
        error?: string;
        signedUrl?: string;
        storagePath?: string;
      };
      if (!signedRes.ok || !signedJson.signedUrl || !signedJson.storagePath) {
        throw new Error(
          signedJson.error || `Failed to initialize upload for ${file.name}`,
        );
      }

      setUploadStatusText(`Uploading ${file.name} to secure storage…`);
      const putRes = await fetch(signedJson.signedUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': file.type || 'application/octet-stream',
        },
        body: file,
      });
      if (!putRes.ok) {
        throw new Error(`Storage upload failed for ${file.name}`);
      }

      setUploadStatusText(`Extracting text from ${file.name}…`);
      const completeRes = await fetch('/api/materials/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          storagePath: signedJson.storagePath,
          fileName: file.name,
          mimeType: file.type || undefined,
          subjectId,
          topicId: topicIdPayload,
        }),
      });
      const completeJson = (await completeRes.json()) as {
        error?: string;
        material?: CourseMaterialRow;
      };
      if (!completeRes.ok || !completeJson.material) {
        throw new Error(
          completeJson.error || `Failed to process ${file.name}`,
        );
      }
      return completeJson.material;
    }

    setUploadStatusText(`Uploading & extracting ${file.name}…`);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('subjectId', subjectId);
    if (topicIdPayload) {
      formData.append('topicId', topicIdPayload);
    }

    const res = await fetch('/api/materials/upload', {
      method: 'POST',
      body: formData,
    });
    const json = (await res.json()) as {
      error?: string;
      material?: CourseMaterialRow;
    };
    if (!res.ok || !json.material) {
      throw new Error(json.error || `Upload failed for ${file.name}`);
    }
    return json.material;
  };

  const handleFilesSelected = async (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0 || uploading) return;
    setErrorMsg(null);
    setSuccessMsg(null);
    setUploading(true);

    const files = Array.from(fileList);
    const added: CourseMaterialRow[] = [];

    try {
      for (const file of files) {
        const mat = await uploadSingleFile(file);
        added.push(mat);
      }
      onMaterialsChange([...added, ...materials]);
      setSelectedIds((prev) => [
        ...added.map((m) => m.id),
        ...prev.filter((id) => !added.some((a) => a.id === id)),
      ]);
      setSuccessMsg(
        `Uploaded ${added.length} classroom ${added.length === 1 ? 'material' : 'materials'}.`,
      );
    } catch (err) {
      if (added.length > 0) {
        onMaterialsChange([...added, ...materials]);
      }
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Upload failed. Check file format and try again.',
      );
    } finally {
      setUploading(false);
      setUploadStatusText(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handlePasteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pastedTitle.trim() || !pastedText.trim() || pasting) return;

    setPasting(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const res = await fetch('/api/materials/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pastedTitle: pastedTitle.trim(),
          pastedText: pastedText.trim(),
          subjectId,
          topicId:
            pastedTopicId !== 'unassigned' ? pastedTopicId : undefined,
        }),
      });
      const json = (await res.json()) as {
        error?: string;
        material?: CourseMaterialRow;
      };
      if (!res.ok || !json.material) {
        throw new Error(json.error || 'Failed to save pasted notes');
      }

      onMaterialsChange([json.material, ...materials]);
      setSelectedIds((prev) => [json.material!.id, ...prev]);
      setPastedTitle('');
      setPastedText('');
      setPastedTopicId('unassigned');
      setPasteOpen(false);
      setSuccessMsg(`Saved "${json.material.file_name}".`);
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : 'Failed to save pasted notes.',
      );
    } finally {
      setPasting(false);
    }
  };

  const handleTopicAssign = async (materialId: string, nextValue: string) => {
    const nextTopicId = nextValue === 'unassigned' ? null : nextValue;
    setErrorMsg(null);
    setBusyMaterialIds((prev) => ({ ...prev, [materialId]: true }));

    try {
      const res = await fetch(`/api/materials/${materialId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topicId: nextTopicId }),
      });
      const json = (await res.json()) as {
        error?: string;
        material?: CourseMaterialRow;
      };
      if (!res.ok || !json.material) {
        throw new Error(json.error || 'Failed to update syllabus topic');
      }
      onMaterialsChange(
        materials.map((m) => (m.id === materialId ? json.material! : m)),
      );
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Could not update material topic.',
      );
    } finally {
      setBusyMaterialIds((prev) => {
        const copy = { ...prev };
        delete copy[materialId];
        return copy;
      });
    }
  };

  const handleDelete = async (materialId: string) => {
    setErrorMsg(null);
    setBusyMaterialIds((prev) => ({ ...prev, [materialId]: true }));

    try {
      const res = await fetch(`/api/materials/${materialId}`, {
        method: 'DELETE',
      });
      const json = (await res.json()) as {
        error?: string;
        success?: boolean;
      };
      if (!res.ok) {
        throw new Error(json.error || 'Failed to delete material');
      }
      onMaterialsChange(materials.filter((m) => m.id !== materialId));
      setSelectedIds((prev) => prev.filter((id) => id !== materialId));
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : 'Could not delete material.',
      );
    } finally {
      setBusyMaterialIds((prev) => {
        const copy = { ...prev };
        delete copy[materialId];
        return copy;
      });
    }
  };

  const handleSyncPack = async () => {
    if (syncingPack) return;
    setSyncingPack(true);
    setErrorMsg(null);
    setSuccessMsg(null);
    try {
      const res = await fetch('/api/seed/sync', { method: 'POST' });
      const json = (await res.json()) as {
        error?: string;
        synced?: boolean;
        version?: number;
        addedMaterials?: number;
        upgradedNotes?: number;
      };
      if (!res.ok || !json.synced) {
        throw new Error(json.error || 'Failed to sync Classroom Pack v2.');
      }
      setSuccessMsg(
        `Classroom Pack v${json.version ?? 2} synced (${json.addedMaterials ?? 0} materials added, ${json.upgradedNotes ?? 0} notes updated; user progress preserved).`,
      );
      router.refresh();
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Failed to sync Classroom Pack v2.',
      );
    } finally {
      setSyncingPack(false);
    }
  };

  const resolvedTargetTopicId = React.useMemo(() => {
    if (targetTopicId !== 'auto') return targetTopicId;
    const selectedMats = materials.filter((m) => selectedIds.includes(m.id));
    const firstWithTopic = selectedMats.find((m) => Boolean(m.topic_id));
    return firstWithTopic?.topic_id ?? null;
  }, [targetTopicId, materials, selectedIds]);

  const handleGenerateSuite = async () => {
    if (selectedIds.length === 0 || generating) return;
    setErrorMsg(null);
    setSuccessMsg(null);

    if (generationMode === 'replace_topic' && !resolvedTargetTopicId) {
      setErrorMsg(
        'Select a specific target syllabus topic when using "Regenerate / Update Selected Topic".',
      );
      return;
    }

    setGenerating(true);
    try {
      const res = await fetch('/api/generate/suite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subjectId,
          topicId: resolvedTargetTopicId || undefined,
          materialIds: selectedIds,
          mode: generationMode,
        }),
      });

      const json = (await res.json()) as {
        error?: string;
        note?: StudyNoteRow;
        studyNote?: StudyNoteRow;
        questions?: QuestionRow[];
        flashcards?: FlashcardRow[];
      };

      const generatedNote = json.note ?? json.studyNote;
      if (!res.ok || !generatedNote) {
        throw new Error(json.error || 'Study suite generation failed');
      }

      onMaterialsChange(
        materials.map((m) =>
          selectedIds.includes(m.id)
            ? {
                ...m,
                generation_status: 'generated',
                last_generated_at: new Date().toISOString(),
              }
            : m,
        ),
      );

      onSuiteGenerated({
        note: generatedNote,
        questions: json.questions ?? [],
        flashcards: json.flashcards ?? [],
        mode: generationMode,
        topicId: resolvedTargetTopicId,
        materialIds: selectedIds,
      });

      setSuccessMsg(
        `Generated 1 study guide, ${json.questions?.length ?? 0} IB questions, and ${json.flashcards?.length ?? 0} flashcards.`,
      );
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Generation failed. Please check selected materials and try again.',
      );
    } finally {
      setGenerating(false);
    }
  };

  const allSelected =
    materials.length > 0 && selectedIds.length === materials.length;

  return (
    <div className="space-y-5">
      {/* Upload & Paste Bar */}
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            void handleFilesSelected(e.dataTransfer.files);
          }}
          className={`lg:col-span-2 flex flex-col justify-between gap-3 rounded-2xl border border-dashed p-5 transition-all ${
            isDragging
              ? 'glass-panel border-[#1D1D1F] dark:border-[#F5F5F7]'
              : 'glass-surface border-black/15 dark:border-white/15'
          }`}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="glass-pill mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[#1D1D1F] dark:text-[#F5F5F7]">
                {uploading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Upload className="h-4 w-4" />
                )}
              </div>
              <div>
                <div className="text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
                  {uploadStatusText ||
                    'Drop teacher slides, worksheets, or board photos here'}
                </div>
                <p className="mt-0.5 text-xs text-[#6E6E73] dark:text-[#98989D]">
                  Supports PDF, PPTX, DOCX, TXT/MD, and PNG/JPG/WEBP (files
                  &gt; 4 MB upload directly to encrypted Storage).
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <input
                ref={fileInputRef}
                type="file"
                accept={ACCEPTED_EXTENSIONS}
                multiple
                className="hidden"
                onChange={(e) => void handleFilesSelected(e.target.files)}
              />
              <Button
                size="sm"
                variant="outline"
                disabled={uploading}
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="h-3.5 w-3.5" />
                <span>Choose Files</span>
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 border-t border-black/[0.06] pt-3 dark:border-white/[0.08]">
            <span className="text-xs text-[#6E6E73] dark:text-[#98989D]">
              Tag new uploads to topic:
            </span>
            <div className="w-60">
              <Select value={uploadTopicId} onValueChange={setUploadTopicId}>
                <SelectTrigger aria-label="Tag uploads to syllabus topic">
                  <SelectValue placeholder="Unassigned" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unassigned">Unassigned</SelectItem>
                  {selectableTopics.map((t) => (
                    <SelectItem key={t.id} value={t.id}>
                      {t.code} · {t.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Paste Lecture / Drive Notes Card */}
        <div className="glass-panel flex flex-col justify-between gap-3 rounded-2xl p-5">
          <div>
            <div className="text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
              Paste Lecture / Drive Notes
            </div>
            <p className="mt-1 text-xs leading-relaxed text-[#6E6E73] dark:text-[#98989D]">
              Paste Google Docs outlines, teacher announcements, or copied
              problem sets directly into this subject.
            </p>
          </div>
          <div className="space-y-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setPasteOpen(true)}
              className="w-full justify-center"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Paste Lecture / Drive Notes</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={syncingPack}
              onClick={() => void handleSyncPack()}
              className="w-full justify-center"
            >
              {syncingPack ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <RefreshCw className="h-3.5 w-3.5" />
              )}
              <span>
                {syncingPack
                  ? 'Syncing Classroom Pack…'
                  : 'Sync Classroom Pack v2'}
              </span>
            </Button>
          </div>
        </div>
      </div>

      {errorMsg && (
        <div
          role="alert"
          className="rounded-md border border-[#E6D0D0] bg-[#FAF2F2] px-3 py-2 text-xs text-[#9B3B3B] dark:border-[#4A2E2E] dark:bg-[#291F1F] dark:text-[#E59898]"
        >
          {errorMsg}
        </div>
      )}

      {successMsg && (
        <div
          role="status"
          className="rounded-md border border-[#DCE5DF] bg-[#F3F6F4] px-3 py-2 text-xs text-[#2F5E44] dark:border-[#2D3B32] dark:bg-[#1E2621] dark:text-[#9FC3AD]"
        >
          {successMsg}
        </div>
      )}

      {/* AI Generation Controls Bar */}
      <div className="glass-surface flex flex-col gap-3 rounded-2xl p-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-2.5">
          <Badge variant="outline" className="font-mono">
            {selectedIds.length} selected
          </Badge>

          <div className="w-60">
            <Select
              value={generationMode}
              onValueChange={(v) =>
                setGenerationMode(v as 'append' | 'replace_topic')
              }
            >
              <SelectTrigger aria-label="Generation mode">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="append">
                  Append New Notes &amp; Questions
                </SelectItem>
                <SelectItem value="replace_topic">
                  Regenerate / Update Selected Topic
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-56">
            <Select value={targetTopicId} onValueChange={setTargetTopicId}>
              <SelectTrigger aria-label="Target syllabus topic">
                <SelectValue placeholder="Auto from selected file" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="auto">
                  Auto-detect from selected file
                </SelectItem>
                {selectableTopics.map((t) => (
                  <SelectItem key={t.id} value={t.id}>
                    {t.code} · {t.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          variant="primary"
          size="md"
          disabled={selectedIds.length === 0 || generating}
          onClick={() => void handleGenerateSuite()}
        >
          {generating ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="h-4 w-4" />
          )}
          <span>
            {generating
              ? 'Generating Study Suite…'
              : 'Generate / Update Study Suite'}
          </span>
        </Button>
      </div>

      {/* Materials Table */}
      <div className="glass-panel overflow-hidden rounded-2xl">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-black/[0.06] bg-black/[0.025] text-[11px] font-medium uppercase tracking-wider text-[#6E6E73] dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-[#98989D]">
                <th className="w-10 px-3 py-2.5">
                  <button
                    type="button"
                    aria-label={
                      allSelected
                        ? 'Deselect all materials'
                        : 'Select all materials'
                    }
                    onClick={() =>
                      setSelectedIds(
                        allSelected ? [] : materials.map((m) => m.id),
                      )
                    }
                    className="flex items-center justify-center text-[#787774] hover:text-[#37352F] cursor-pointer dark:text-[#9B9A97] dark:hover:text-[#EBEBEB]"
                  >
                    {allSelected ? (
                      <CheckSquare className="h-4 w-4" />
                    ) : (
                      <Square className="h-4 w-4" />
                    )}
                  </button>
                </th>
                <th className="px-3 py-2.5">Material</th>
                <th className="px-3 py-2.5">Syllabus Topic</th>
                <th className="px-3 py-2.5">Status</th>
                <th className="px-3 py-2.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E6E6E4] dark:divide-[#2E2E2E]">
              {materials.map((mat) => {
                const isSelected = selectedIds.includes(mat.id);
                const isBusy = Boolean(busyMaterialIds[mat.id]);
                const topic = mat.topic_id ? topicMap[mat.topic_id] : undefined;

                return (
                  <tr
                    key={mat.id}
                    className={`transition-colors hover:bg-[#FBFBFA] dark:hover:bg-[#202020] ${
                      isSelected ? 'bg-[#FBFBFA] dark:bg-[#202020]' : ''
                    }`}
                  >
                    <td className="px-3 py-2.5">
                      <button
                        type="button"
                        aria-label={`Select ${mat.file_name}`}
                        onClick={() =>
                          setSelectedIds((prev) =>
                            prev.includes(mat.id)
                              ? prev.filter((id) => id !== mat.id)
                              : [...prev, mat.id],
                          )
                        }
                        className="flex items-center justify-center text-[#37352F] cursor-pointer dark:text-[#EBEBEB]"
                      >
                        {isSelected ? (
                          <CheckSquare className="h-4 w-4" />
                        ) : (
                          <Square className="h-4 w-4 text-[#787774] dark:text-[#9B9A97]" />
                        )}
                      </button>
                    </td>

                    <td className="min-w-[220px] px-3 py-2.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <FileText className="h-3.5 w-3.5 shrink-0 text-[#787774] dark:text-[#9B9A97]" />
                        <button
                          type="button"
                          onClick={() => setPreviewMaterial(mat)}
                          className="text-left font-medium text-[#37352F] hover:underline cursor-pointer dark:text-[#EBEBEB]"
                        >
                          {mat.file_name}
                        </button>
                        <Badge variant="outline" className="font-mono uppercase">
                          {mat.file_type}
                        </Badge>
                        {mat.external_url && (
                          <a
                            href={mat.external_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded border border-[#E6E6E4] bg-[#FBFBFA] px-1.5 py-0.5 text-[11px] font-medium text-[#37352F] transition-colors hover:bg-[#F1F1EF] dark:border-[#2E2E2E] dark:bg-[#202020] dark:text-[#EBEBEB] dark:hover:bg-[#2A2A2A]"
                          >
                            <span>Drive</span>
                            <ExternalLink className="h-2.5 w-2.5" />
                          </a>
                        )}
                      </div>
                    </td>

                    <td className="w-56 px-3 py-2.5">
                      <Select
                        value={mat.topic_id ?? 'unassigned'}
                        disabled={isBusy}
                        onValueChange={(val) =>
                          void handleTopicAssign(mat.id, val)
                        }
                      >
                        <SelectTrigger
                          aria-label={`Assign syllabus topic for ${mat.file_name}`}
                        >
                          <SelectValue>
                            {topic
                              ? `${topic.code} · ${topic.title}`
                              : 'Unassigned'}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="unassigned">Unassigned</SelectItem>
                          {selectableTopics.map((t) => (
                            <SelectItem key={t.id} value={t.id}>
                              {t.code} · {t.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </td>

                    <td className="px-3 py-2.5">
                      <Badge
                        variant={
                          mat.generation_status === 'generated'
                            ? 'success'
                            : mat.generation_status === 'failed'
                              ? 'warning'
                              : 'subtle'
                        }
                        className="font-mono capitalize"
                      >
                        {mat.generation_status}
                      </Badge>
                    </td>

                    <td className="px-3 py-2.5 text-right">
                      <button
                        type="button"
                        disabled={isBusy}
                        aria-label={`Delete ${mat.file_name}`}
                        onClick={() => void handleDelete(mat.id)}
                        className="inline-flex h-7 w-7 items-center justify-center rounded text-[#787774] transition-colors hover:bg-[#FAF2F2] hover:text-[#9B3B3B] cursor-pointer disabled:opacity-50 dark:text-[#9B9A97] dark:hover:bg-[#291F1F] dark:hover:text-[#E59898]"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}

              {materials.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-10 text-center text-xs text-[#787774] dark:text-[#9B9A97]"
                  >
                    No classroom materials uploaded yet. Drop a file above or
                    paste lecture notes.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Paste Lecture / Drive Notes Modal */}
      <Dialog open={pasteOpen} onOpenChange={setPasteOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Paste Lecture / Drive Notes</DialogTitle>
            <DialogDescription>
              Save copied Google Docs notes, board summaries, or reading
              excerpts to generate study guides and IB markscheme questions.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={(e) => void handlePasteSubmit(e)} className="space-y-3">
            <div>
              <label
                htmlFor="paste-note-title"
                className="mb-1 block text-xs font-medium text-[#37352F] dark:text-[#EBEBEB]"
              >
                Title
              </label>
              <input
                id="paste-note-title"
                type="text"
                required
                value={pastedTitle}
                onChange={(e) => setPastedTitle(e.target.value)}
                placeholder="e.g., Unit 3.2 Gas Laws Lecture Notes"
                className="h-9 w-full rounded-md border border-[#E6E6E4] bg-white px-3 text-sm text-[#37352F] placeholder:text-[#787774] focus:border-[#37352F] focus:outline-none dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB] dark:placeholder:text-[#9B9A97] dark:focus:border-[#EBEBEB]"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-[#37352F] dark:text-[#EBEBEB]">
                Syllabus Topic (optional)
              </label>
              <Select value={pastedTopicId} onValueChange={setPastedTopicId}>
                <SelectTrigger aria-label="Select topic for pasted notes">
                  <SelectValue placeholder="Unassigned" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unassigned">Unassigned</SelectItem>
                  {selectableTopics.map((t) => (
                    <SelectItem key={t.id} value={t.id}>
                      {t.code} · {t.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label
                htmlFor="paste-note-content"
                className="mb-1 block text-xs font-medium text-[#37352F] dark:text-[#EBEBEB]"
              >
                Notes Content
              </label>
              <textarea
                id="paste-note-content"
                required
                rows={7}
                value={pastedText}
                onChange={(e) => setPastedText(e.target.value)}
                placeholder="Paste raw lecture text, formulas, definitions, or questions…"
                className="w-full resize-y rounded-md border border-[#E6E6E4] bg-white p-3 text-sm text-[#37352F] placeholder:text-[#787774] focus:border-[#37352F] focus:outline-none dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB] dark:placeholder:text-[#9B9A97] dark:focus:border-[#EBEBEB]"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPasteOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="sm"
                disabled={pasting || !pastedTitle.trim() || !pastedText.trim()}
              >
                {pasting && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                <span>{pasting ? 'Saving…' : 'Save Material'}</span>
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Extracted Text Preview Modal */}
      <Dialog
        open={Boolean(previewMaterial)}
        onOpenChange={(open) => {
          if (!open) setPreviewMaterial(null);
        }}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{previewMaterial?.file_name}</DialogTitle>
            <DialogDescription>
              Extracted classroom source text used for AI study guide and
              question generation.
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-[60vh] overflow-y-auto rounded-md border border-[#E6E6E4] bg-[#FBFBFA] p-3.5 font-mono text-xs whitespace-pre-wrap leading-relaxed text-[#37352F] dark:border-[#2E2E2E] dark:bg-[#202020] dark:text-[#EBEBEB]">
            {previewMaterial?.extracted_text || 'No extracted text available.'}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
