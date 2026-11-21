'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  BookMarked,
  Check,
  ChevronRight,
  ExternalLink,
  FileText,
  Loader2,
  Plus,
  Save,
  Sparkles,
} from 'lucide-react';
import { getRubricForProject } from '@/data/ib-rubrics';
import { createClient } from '@/lib/supabase/client';
import { MarkdownMath } from '@/components/notes/MarkdownMath';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { ClassroomSeedCoreResource } from '@/data/classroom-seed/types';
import type {
  CoreMilestone,
  CoreProjectRow,
  CoreProjectType,
} from '@/types/database';

interface CoreWorkspaceClientProps {
  userId: string;
  initialProjects: CoreProjectRow[];
  coreResources: ClassroomSeedCoreResource[];
}

function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

const PROJECT_ORDER: {
  projectType: CoreProjectType;
  subjectSlug: string | null;
  label: string;
  shortTag: string;
}[] = [
  { projectType: 'EE', subjectSlug: null, label: 'Extended Essay', shortTag: 'EE' },
  {
    projectType: 'TOK_ESSAY',
    subjectSlug: null,
    label: 'TOK Essay',
    shortTag: 'TOK',
  },
  {
    projectType: 'TOK_EXHIBITION',
    subjectSlug: null,
    label: 'TOK Exhibition',
    shortTag: 'TOK',
  },
  { projectType: 'CAS', subjectSlug: null, label: 'CAS 2028', shortTag: 'CAS' },
  {
    projectType: 'IA',
    subjectSlug: 'biology-hl',
    label: 'Biology HL IA',
    shortTag: 'Bio',
  },
  {
    projectType: 'IA',
    subjectSlug: 'chemistry-sl',
    label: 'Chemistry SL IA',
    shortTag: 'Chem',
  },
  {
    projectType: 'IA',
    subjectSlug: 'history-hl',
    label: 'History HL IA',
    shortTag: 'Hist',
  },
  {
    projectType: 'IA',
    subjectSlug: 'math-aa-sl',
    label: 'Math AA SL IA',
    shortTag: 'Math',
  },
  {
    projectType: 'IA',
    subjectSlug: 'english-lit-hl',
    label: 'English Lit HL Essay / IO',
    shortTag: 'Eng',
  },
  {
    projectType: 'IA',
    subjectSlug: 'french-b-sl',
    label: 'French B SL IO',
    shortTag: 'Fr',
  },
];

export function CoreWorkspaceClient({
  userId,
  initialProjects,
  coreResources,
}: CoreWorkspaceClientProps) {
  const orderedProjects = React.useMemo(() => {
    const used = new Set<string>();
    const list: { project: CoreProjectRow; label: string; shortTag: string }[] = [];

    for (const slot of PROJECT_ORDER) {
      const match = initialProjects.find(
        (p) =>
          p.project_type === slot.projectType &&
          (p.subject_slug ?? null) === slot.subjectSlug,
      );
      if (match) {
        used.add(match.id);
        list.push({
          project: match,
          label: slot.label,
          shortTag: slot.shortTag,
        });
      }
    }

    for (const p of initialProjects) {
      if (!used.has(p.id)) {
        list.push({
          project: p,
          label: p.title,
          shortTag: p.project_type,
        });
      }
    }
    return list;
  }, [initialProjects]);

  const [projects, setProjects] =
    React.useState<CoreProjectRow[]>(initialProjects);
  const [selectedProjectId, setSelectedProjectId] = React.useState<string>(
    orderedProjects[0]?.project.id ?? initialProjects[0]?.id ?? '',
  );
  const [subTab, setSubTab] = React.useState<'draft' | 'rubric' | 'toolkit'>(
    'draft',
  );

  // Rubric variants (EE FA2027 30m vs legacy 34m; English HL Essay vs IO)
  const [eeVariant, setEeVariant] = React.useState<'EE_FA2027_30' | 'EE_LEGACY_34'>(
    'EE_FA2027_30',
  );
  const [englishVariant, setEnglishVariant] = React.useState<
    'ENGLISH_HL_ESSAY' | 'IO'
  >('ENGLISH_HL_ESSAY');

  // Form drafts synced to selected project
  const selectedProject = React.useMemo(
    () => projects.find((p) => p.id === selectedProjectId) ?? projects[0] ?? null,
    [projects, selectedProjectId],
  );

  const [rqInput, setRqInput] = React.useState(
    selectedProject?.research_question_or_prompt ?? '',
  );
  const [draftExcerpt, setDraftExcerpt] = React.useState(
    selectedProject?.draft_excerpt ?? '',
  );
  const [newMilestoneTitle, setNewMilestoneTitle] = React.useState('');
  const [saving, setSaving] = React.useState(false);
  const [evaluating, setEvaluating] = React.useState(false);
  const [showAllResources, setShowAllResources] = React.useState(false);
  const [activeResourceId, setActiveResourceId] = React.useState<string | null>(
    null,
  );
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
  const [statusMsg, setStatusMsg] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!selectedProject) return;
    setRqInput(selectedProject.research_question_or_prompt ?? '');
    setDraftExcerpt(selectedProject.draft_excerpt ?? '');
    setErrorMsg(null);
    setStatusMsg(null);
    setActiveResourceId(null);
  }, [selectedProject?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const activeVariantKey = React.useMemo(() => {
    if (!selectedProject) return undefined;
    if (selectedProject.project_type === 'EE') {
      return eeVariant;
    }
    if (
      selectedProject.project_type === 'IA' &&
      selectedProject.subject_slug === 'english-lit-hl'
    ) {
      return englishVariant;
    }
    return undefined;
  }, [selectedProject, eeVariant, englishVariant]);

  const activeRubric = React.useMemo(() => {
    if (!selectedProject) return getRubricForProject('EE');
    return getRubricForProject(
      selectedProject.project_type,
      selectedProject.subject_slug,
      activeVariantKey,
    );
  }, [selectedProject, activeVariantKey]);

  const filteredResources = React.useMemo(() => {
    if (!selectedProject) return coreResources;
    if (showAllResources) return coreResources;

    const matching = coreResources.filter((r) => {
      if (selectedProject.project_type === 'IA') {
        return (
          r.projectType === 'IA' &&
          r.subjectSlug === selectedProject.subject_slug
        );
      }
      if (
        selectedProject.project_type === 'TOK_ESSAY' ||
        selectedProject.project_type === 'TOK_EXHIBITION'
      ) {
        return (
          r.projectType === selectedProject.project_type ||
          r.projectType === 'TOK_ESSAY' ||
          r.projectType === 'TOK_EXHIBITION'
        );
      }
      return r.projectType === selectedProject.project_type;
    });

    return matching;
  }, [coreResources, selectedProject, showAllResources]);

  const selectedResource = React.useMemo(() => {
    if (filteredResources.length === 0) return null;
    return (
      filteredResources.find((r) => r.id === activeResourceId) ??
      filteredResources[0]
    );
  }, [filteredResources, activeResourceId]);

  const liveWordCount = React.useMemo(
    () => countWords(draftExcerpt),
    [draftExcerpt],
  );

  const persistProjectPatch = async (
    projectId: string,
    patch: Partial<CoreProjectRow>,
    quiet = false,
  ): Promise<boolean> => {
    setErrorMsg(null);
    if (!quiet) setStatusMsg(null);
    setSaving(true);

    const updatedAt = new Date().toISOString();
    const previous = projects;
    setProjects((prev) =>
      prev.map((p) =>
        p.id === projectId ? { ...p, ...patch, updated_at: updatedAt } : p,
      ),
    );

    try {
      const supabase = createClient();
      const { error } = await supabase
        .from('core_projects')
        .update({ ...patch, updated_at: updatedAt })
        .eq('id', projectId)
        .eq('user_id', userId);

      if (error) {
        throw error;
      }

      if (!quiet) {
        setStatusMsg('Saved project updates.');
      }
      return true;
    } catch (err) {
      setProjects(previous);
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Could not save changes. Please try again.',
      );
      return false;
    } finally {
      setSaving(false);
    }
  };

  const handleToggleMilestone = (milestoneId: string, checked: boolean) => {
    if (!selectedProject) return;
    const nextMilestones: CoreMilestone[] = selectedProject.milestones.map(
      (m) => (m.id === milestoneId ? { ...m, completed: checked } : m),
    );
    void persistProjectPatch(
      selectedProject.id,
      { milestones: nextMilestones },
      true,
    );
  };

  const handleAddMilestone = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProject || !newMilestoneTitle.trim()) return;
    const nextMilestones: CoreMilestone[] = [
      ...selectedProject.milestones,
      {
        id: `m-${Date.now()}`,
        title: newMilestoneTitle.trim(),
        completed: false,
      },
    ];
    setNewMilestoneTitle('');
    void persistProjectPatch(selectedProject.id, {
      milestones: nextMilestones,
    });
  };

  const handleSaveDraft = async () => {
    if (!selectedProject) return true;
    return persistProjectPatch(selectedProject.id, {
      research_question_or_prompt: rqInput.trim() || null,
      draft_excerpt: draftExcerpt,
      current_word_count: liveWordCount,
    });
  };

  const handleEvaluate = async () => {
    if (!selectedProject || evaluating) return;
    setErrorMsg(null);
    setStatusMsg(null);
    setEvaluating(true);

    try {
      // Ensure latest RQ and draft excerpt are persisted before evaluation
      const savedOk = await persistProjectPatch(
        selectedProject.id,
        {
          research_question_or_prompt: rqInput.trim() || null,
          draft_excerpt: draftExcerpt,
          current_word_count: liveWordCount,
        },
        true,
      );
      if (!savedOk) {
        setEvaluating(false);
        return;
      }

      const res = await fetch('/api/grade/core-project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectId: selectedProject.id,
          rubricVariant: activeVariantKey,
        }),
      });

      const json = (await res.json()) as {
        error?: string;
        project?: CoreProjectRow;
        review?: CoreProjectRow['latest_ai_review'];
      };

      if (!res.ok || (!json.project && !json.review)) {
        throw new Error(json.error || 'Rubric evaluation failed');
      }

      setProjects((prev) =>
        prev.map((p) => {
          if (p.id !== selectedProject.id) return p;
          if (json.project) return json.project;
          return {
            ...p,
            latest_ai_review: json.review ?? p.latest_ai_review,
          };
        }),
      );
      setStatusMsg('Evaluation completed against official IB rubric.');
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Could not evaluate draft. Please try again.',
      );
    } finally {
      setEvaluating(false);
    }
  };

  if (!selectedProject) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-12 text-center">
        <p className="text-sm text-[#787774] dark:text-[#9B9A97]">
          No DP Core or IA projects initialized yet.
        </p>
      </div>
    );
  }

  const completedMilestones = selectedProject.milestones.filter(
    (m) => m.completed,
  ).length;
  const wordTarget = selectedProject.word_count_target || 0;
  const overTarget = wordTarget > 0 && liveWordCount > wordTarget;

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-8 sm:py-8">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mb-4 flex items-center gap-1.5 text-xs text-[#787774] dark:text-[#9B9A97]"
      >
        <Link
          href="/dashboard"
          className="transition-colors hover:text-[#37352F] dark:hover:text-[#EBEBEB]"
        >
          Dashboard
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-[#37352F] dark:text-[#EBEBEB]">
          EE · TOK · CAS · Subject IAs
        </span>
      </nav>

      {/* Page Title */}
      <div className="mb-6 border-b border-[#E6E6E4] pb-5 dark:border-[#2E2E2E]">
        <h1 className="text-2xl font-semibold tracking-tight text-[#37352F] sm:text-3xl dark:text-[#EBEBEB]">
          DP Core &amp; Internal Assessments
        </h1>
        <p className="mt-1 text-sm text-[#787774] dark:text-[#9B9A97]">
          Official Class of 2028 IB criteria, classroom reference toolkits,
          milestone tracking, and examiner-calibrated rubric evaluation.
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        {/* Left Project Selector */}
        <aside className="w-full shrink-0 lg:sticky lg:top-6 lg:w-64">
          <div className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-wider text-[#787774] dark:text-[#9B9A97]">
            Core &amp; Subject IAs
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
            {orderedProjects.map(({ project, label, shortTag }) => {
              const liveProj =
                projects.find((p) => p.id === project.id) ?? project;
              const isSelected = liveProj.id === selectedProject.id;
              const doneCount = liveProj.milestones.filter(
                (m) => m.completed,
              ).length;

              return (
                <button
                  key={liveProj.id}
                  type="button"
                  onClick={() => setSelectedProjectId(liveProj.id)}
                  className={`flex shrink-0 items-center justify-between gap-2 rounded-md border px-3 py-2 text-left transition-colors cursor-pointer lg:w-full ${
                    isSelected
                      ? 'border-[#37352F] bg-[#F1F1EF] text-[#37352F] dark:border-[#EBEBEB] dark:bg-[#2A2A2A] dark:text-[#EBEBEB]'
                      : 'border-[#E6E6E4] bg-white text-[#787774] hover:bg-[#FBFBFA] hover:text-[#37352F] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#9B9A97] dark:hover:bg-[#202020] dark:hover:text-[#EBEBEB]'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="truncate text-xs font-medium text-[#37352F] dark:text-[#EBEBEB]">
                      {label}
                    </div>
                    <div className="mt-0.5 font-mono text-[10px] text-[#787774] dark:text-[#9B9A97]">
                      {doneCount}/{liveProj.milestones.length} milestones
                    </div>
                  </div>
                  <Badge variant="outline" className="shrink-0 font-mono">
                    {shortTag}
                  </Badge>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Main Workspace Column */}
        <div className="min-w-0 flex-1 space-y-5">
          {/* Selected Project Summary Header */}
          <Card>
            <CardContent className="space-y-3 p-4 sm:p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-semibold tracking-tight text-[#37352F] dark:text-[#EBEBEB]">
                      {activeRubric.title}
                    </h2>
                    {activeRubric.totalMaxMarks > 0 && (
                      <Badge variant="default" className="font-mono">
                        {activeRubric.totalMaxMarks} marks
                      </Badge>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-[#787774] dark:text-[#9B9A97]">
                    {activeRubric.cohortSession} · {activeRubric.wordLimit} ·{' '}
                    {activeRubric.weightingNote}
                  </p>
                </div>

                {/* Variant Switchers (EE FA2027 30m vs Legacy 34m; English HL Essay vs IO) */}
                {selectedProject.project_type === 'EE' && (
                  <div className="flex items-center gap-1 rounded-md border border-[#E6E6E4] bg-[#FBFBFA] p-0.5 dark:border-[#2E2E2E] dark:bg-[#202020]">
                    <button
                      type="button"
                      onClick={() => setEeVariant('EE_FA2027_30')}
                      className={`rounded px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                        eeVariant === 'EE_FA2027_30'
                          ? 'bg-[#37352F] text-white dark:bg-[#EBEBEB] dark:text-[#191919]'
                          : 'text-[#787774] hover:text-[#37352F] dark:text-[#9B9A97] dark:hover:text-[#EBEBEB]'
                      }`}
                    >
                      FA2027 (30m)
                    </button>
                    <button
                      type="button"
                      onClick={() => setEeVariant('EE_LEGACY_34')}
                      className={`rounded px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                        eeVariant === 'EE_LEGACY_34'
                          ? 'bg-[#37352F] text-white dark:bg-[#EBEBEB] dark:text-[#191919]'
                          : 'text-[#787774] hover:text-[#37352F] dark:text-[#9B9A97] dark:hover:text-[#EBEBEB]'
                      }`}
                    >
                      Legacy (34m)
                    </button>
                  </div>
                )}

                {selectedProject.project_type === 'IA' &&
                  selectedProject.subject_slug === 'english-lit-hl' && (
                    <div className="flex items-center gap-1 rounded-md border border-[#E6E6E4] bg-[#FBFBFA] p-0.5 dark:border-[#2E2E2E] dark:bg-[#202020]">
                      <button
                        type="button"
                        onClick={() => setEnglishVariant('ENGLISH_HL_ESSAY')}
                        className={`rounded px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                          englishVariant === 'ENGLISH_HL_ESSAY'
                            ? 'bg-[#37352F] text-white dark:bg-[#EBEBEB] dark:text-[#191919]'
                            : 'text-[#787774] hover:text-[#37352F] dark:text-[#9B9A97] dark:hover:text-[#EBEBEB]'
                        }`}
                      >
                        HL Essay (20m)
                      </button>
                      <button
                        type="button"
                        onClick={() => setEnglishVariant('IO')}
                        className={`rounded px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                          englishVariant === 'IO'
                            ? 'bg-[#37352F] text-white dark:bg-[#EBEBEB] dark:text-[#191919]'
                            : 'text-[#787774] hover:text-[#37352F] dark:text-[#9B9A97] dark:hover:text-[#EBEBEB]'
                        }`}
                      >
                        Individual Oral (40m)
                      </button>
                    </div>
                  )}
              </div>

              <p className="text-xs leading-relaxed text-[#787774] dark:text-[#9B9A97]">
                {activeRubric.overview}
              </p>
            </CardContent>
          </Card>

          {errorMsg && (
            <div
              role="alert"
              className="rounded-md border border-[#E6D0D0] bg-[#FAF2F2] px-3 py-2 text-xs text-[#9B3B3B] dark:border-[#4A2E2E] dark:bg-[#291F1F] dark:text-[#E59898]"
            >
              {errorMsg}
            </div>
          )}

          {statusMsg && (
            <div
              role="status"
              className="rounded-md border border-[#DCE5DF] bg-[#F3F6F4] px-3 py-2 text-xs text-[#2F5E44] dark:border-[#2D3B32] dark:bg-[#1E2621] dark:text-[#9FC3AD]"
            >
              {statusMsg}
            </div>
          )}

          {/* Core Workspace Sub-Tabs */}
          <Tabs
            value={subTab}
            onValueChange={(v) =>
              setSubTab(v as 'draft' | 'rubric' | 'toolkit')
            }
          >
            <TabsList>
              <TabsTrigger value="draft">
                <FileText className="h-3.5 w-3.5" />
                <span>Draft &amp; Milestones</span>
              </TabsTrigger>
              <TabsTrigger value="rubric">
                <Check className="h-3.5 w-3.5" />
                <span>Official IB Rubric</span>
                <span className="font-mono text-[11px] text-[#787774] dark:text-[#9B9A97]">
                  {activeRubric.criteria.length}
                </span>
              </TabsTrigger>
              <TabsTrigger value="toolkit">
                <BookMarked className="h-3.5 w-3.5" />
                <span>Classroom Reference Toolkit</span>
                <span className="font-mono text-[11px] text-[#787774] dark:text-[#9B9A97]">
                  {filteredResources.length}
                </span>
              </TabsTrigger>
            </TabsList>

            {/* Tab 1: Draft, RQ, Milestones & AI Rubric Evaluation */}
            <TabsContent value="draft" className="space-y-5">
              {/* Research Question / Prompt */}
              <Card>
                <CardContent className="space-y-3 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <label
                      htmlFor="core-rq-input"
                      className="text-xs font-semibold uppercase tracking-wider text-[#787774] dark:text-[#9B9A97]"
                    >
                      {selectedProject.project_type === 'CAS'
                        ? 'CAS Programme Focus & Goals'
                        : 'Research Question / Prescribed Prompt'}
                    </label>
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={saving}
                      onClick={() => void handleSaveDraft()}
                    >
                      <Save className="h-3.5 w-3.5" />
                      <span>{saving ? 'Saving…' : 'Save Draft'}</span>
                    </Button>
                  </div>

                  <input
                    id="core-rq-input"
                    type="text"
                    value={rqInput}
                    onChange={(e) => setRqInput(e.target.value)}
                    placeholder="Enter your exact IB Research Question, TOK Prescribed Title, or Global Issue…"
                    className="h-9 w-full rounded-md border border-[#E6E6E4] bg-white px-3 text-sm text-[#37352F] placeholder:text-[#787774] focus:border-[#37352F] focus:outline-none dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB] dark:placeholder:text-[#9B9A97] dark:focus:border-[#EBEBEB]"
                  />

                  <div className="space-y-1.5 pt-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <label
                        htmlFor="core-draft-textarea"
                        className="text-xs font-semibold uppercase tracking-wider text-[#787774] dark:text-[#9B9A97]"
                      >
                        Draft Excerpt / Outline / Reflections
                      </label>
                      <span
                        className={`font-mono text-xs ${
                          overTarget
                            ? 'font-semibold text-[#9B3B3B] dark:text-[#E59898]'
                            : 'text-[#787774] dark:text-[#9B9A97]'
                        }`}
                      >
                        {liveWordCount.toLocaleString()}
                        {wordTarget > 0
                          ? ` / ${wordTarget.toLocaleString()} words`
                          : ' words'}
                      </span>
                    </div>

                    <textarea
                      id="core-draft-textarea"
                      rows={9}
                      value={draftExcerpt}
                      onChange={(e) => setDraftExcerpt(e.target.value)}
                      placeholder="Paste or draft your introduction, methodology, analytical paragraph, or CAS reflection here for rubric evaluation…"
                      className="w-full resize-y rounded-md border border-[#E6E6E4] bg-white p-3 text-sm leading-relaxed text-[#37352F] placeholder:text-[#787774] focus:border-[#37352F] focus:outline-none dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB] dark:placeholder:text-[#9B9A97] dark:focus:border-[#EBEBEB]"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <span className="text-xs text-[#787774] dark:text-[#9B9A97]">
                      Evaluates strictly against {activeRubric.title}.
                    </span>
                    <Button
                      variant="primary"
                      size="md"
                      disabled={evaluating || saving}
                      onClick={() => void handleEvaluate()}
                    >
                      {evaluating ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Sparkles className="h-4 w-4" />
                      )}
                      <span>
                        {evaluating
                          ? 'Evaluating Against Rubric…'
                          : 'Evaluate Against Official IB Rubric'}
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Latest AI Rubric Review */}
              {selectedProject.latest_ai_review && (
                <Card>
                  <CardContent className="space-y-4 p-4 sm:p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E6E6E4] pb-3 dark:border-[#2E2E2E]">
                      <div>
                        <h3 className="text-sm font-semibold text-[#37352F] dark:text-[#EBEBEB]">
                          IB Examiner Rubric Evaluation
                        </h3>
                        <p className="mt-0.5 text-[11px] text-[#787774] dark:text-[#9B9A97]">
                          Reviewed{' '}
                          {new Date(
                            selectedProject.latest_ai_review.reviewed_at,
                          ).toLocaleString()}
                        </p>
                      </div>
                      <Badge variant="solid" className="font-mono text-xs">
                        {selectedProject.latest_ai_review.total_awarded} /{' '}
                        {selectedProject.latest_ai_review.total_max} marks
                      </Badge>
                    </div>

                    <p className="text-xs leading-relaxed text-[#37352F] dark:text-[#EBEBEB]">
                      {selectedProject.latest_ai_review.overall_summary}
                    </p>

                    <div className="space-y-2.5">
                      {selectedProject.latest_ai_review.criterion_results.map(
                        (crit, idx) => (
                          <div
                            key={`${crit.criterion}-${idx}`}
                            className="rounded-md border border-[#E6E6E4] bg-[#FBFBFA] p-3 text-xs dark:border-[#2E2E2E] dark:bg-[#202020]"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-semibold text-[#37352F] dark:text-[#EBEBEB]">
                                {crit.criterion}
                              </span>
                              <span className="font-mono font-semibold text-[#37352F] dark:text-[#EBEBEB]">
                                {crit.awarded} / {crit.max_marks}
                              </span>
                            </div>
                            <p className="mt-1 leading-relaxed text-[#787774] dark:text-[#9B9A97]">
                              {crit.justification}
                            </p>
                            {crit.improvements.length > 0 && (
                              <ul className="mt-2 list-disc space-y-1 pl-4 text-[#37352F] dark:text-[#EBEBEB]">
                                {crit.improvements.map((imp, i) => (
                                  <li key={i}>{imp}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ),
                      )}
                    </div>

                    {selectedProject.latest_ai_review.priority_actions.length >
                      0 && (
                      <div className="rounded-md border border-[#E6E6E4] bg-white p-3 text-xs dark:border-[#2E2E2E] dark:bg-[#191919]">
                        <div className="mb-1.5 font-semibold text-[#37352F] dark:text-[#EBEBEB]">
                          Priority Next Revisions
                        </div>
                        <ul className="list-disc space-y-1 pl-4 text-[#787774] dark:text-[#9B9A97]">
                          {selectedProject.latest_ai_review.priority_actions.map(
                            (act, idx) => (
                              <li key={idx}>{act}</li>
                            ),
                          )}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Interactive Milestone Checklist */}
              <Card>
                <CardContent className="space-y-3 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#787774] dark:text-[#9B9A97]">
                      Milestone Checklist
                    </h3>
                    <Badge variant="outline" className="font-mono">
                      {completedMilestones} / {selectedProject.milestones.length}
                    </Badge>
                  </div>

                  <div className="divide-y divide-[#E6E6E4] rounded-md border border-[#E6E6E4] dark:divide-[#2E2E2E] dark:border-[#2E2E2E]">
                    {selectedProject.milestones.map((m) => (
                      <div
                        key={m.id}
                        className="flex items-center justify-between gap-3 px-3 py-2.5 text-xs"
                      >
                        <div className="flex min-w-0 items-center gap-2.5">
                          <Checkbox
                            id={`milestone-${m.id}`}
                            checked={m.completed}
                            onCheckedChange={(checked) =>
                              handleToggleMilestone(m.id, checked === true)
                            }
                          />
                          <label
                            htmlFor={`milestone-${m.id}`}
                            className={`cursor-pointer select-none ${
                              m.completed
                                ? 'text-[#787774] line-through dark:text-[#9B9A97]'
                                : 'text-[#37352F] dark:text-[#EBEBEB]'
                            }`}
                          >
                            {m.title}
                          </label>
                        </div>
                        {m.dueDate && (
                          <span className="shrink-0 font-mono text-[11px] text-[#787774] dark:text-[#9B9A97]">
                            {m.dueDate}
                          </span>
                        )}
                      </div>
                    ))}
                    {selectedProject.milestones.length === 0 && (
                      <div className="px-3 py-4 text-center text-xs text-[#787774] dark:text-[#9B9A97]">
                        No milestones added yet.
                      </div>
                    )}
                  </div>

                  <form
                    onSubmit={handleAddMilestone}
                    className="flex items-center gap-2 pt-1"
                  >
                    <input
                      type="text"
                      value={newMilestoneTitle}
                      onChange={(e) => setNewMilestoneTitle(e.target.value)}
                      placeholder="Add a milestone (e.g., RPF Session 2 check-in)…"
                      aria-label="Add milestone"
                      className="h-8 flex-1 rounded-md border border-[#E6E6E4] bg-white px-2.5 text-xs text-[#37352F] placeholder:text-[#787774] focus:border-[#37352F] focus:outline-none dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB] dark:placeholder:text-[#9B9A97] dark:focus:border-[#EBEBEB]"
                    />
                    <Button
                      type="submit"
                      size="sm"
                      variant="outline"
                      disabled={saving || !newMilestoneTitle.trim()}
                    >
                      <Plus className="h-3.5 w-3.5" />
                      <span>Add</span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 2: Official IB Criteria & Descriptors Accordion */}
            <TabsContent value="rubric" className="space-y-4">
              {activeRubric.examinerNotes.length > 0 && (
                <div className="rounded-lg border border-[#E6E6E4] bg-[#FBFBFA] p-4 dark:border-[#2E2E2E] dark:bg-[#202020]">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#787774] dark:text-[#9B9A97]">
                    Official IB Examiner Notes
                  </div>
                  <ul className="list-disc space-y-1.5 pl-4 text-xs leading-relaxed text-[#37352F] dark:text-[#EBEBEB]">
                    {activeRubric.examinerNotes.map((note, idx) => (
                      <li key={idx}>{note}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeRubric.criteria.length > 0 && (
                <div className="overflow-hidden rounded-lg border border-[#E6E6E4] bg-white dark:border-[#2E2E2E] dark:bg-[#191919]">
                  <Accordion
                    type="multiple"
                    defaultValue={
                      activeRubric.criteria[0]
                        ? [activeRubric.criteria[0].code]
                        : []
                    }
                  >
                    {activeRubric.criteria.map((criterion) => (
                      <AccordionItem
                        key={criterion.code}
                        value={criterion.code}
                      >
                        <AccordionTrigger>
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge variant="outline" className="font-mono">
                              Criterion {criterion.code}
                            </Badge>
                            <span>{criterion.name}</span>
                            {criterion.maxMarks > 0 && (
                              <span className="font-mono text-xs text-[#787774] dark:text-[#9B9A97]">
                                ({criterion.maxMarks} marks)
                              </span>
                            )}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="space-y-3">
                          <p className="text-xs leading-relaxed text-[#787774] dark:text-[#9B9A97]">
                            {criterion.summary}
                          </p>

                          <div className="divide-y divide-[#E6E6E4] rounded-md border border-[#E6E6E4] dark:divide-[#2E2E2E] dark:border-[#2E2E2E]">
                            {criterion.descriptors.map((band) => (
                              <div
                                key={`${criterion.code}-${band.marks}`}
                                className="flex flex-col gap-1 bg-[#FBFBFA] px-3 py-2 text-xs sm:flex-row sm:items-start sm:gap-3 dark:bg-[#202020]"
                              >
                                <div className="flex shrink-0 items-center gap-2 sm:w-36">
                                  <Badge
                                    variant="default"
                                    className="font-mono"
                                  >
                                    {band.marks}
                                  </Badge>
                                  <span className="font-medium text-[#37352F] dark:text-[#EBEBEB]">
                                    {band.levelLabel}
                                  </span>
                                </div>
                                <p className="leading-relaxed text-[#787774] dark:text-[#9B9A97]">
                                  {band.descriptor}
                                </p>
                              </div>
                            ))}
                          </div>

                          {criterion.examinerTips.length > 0 && (
                            <div className="rounded-md border border-[#E6E6E4] bg-white px-3 py-2 text-xs dark:border-[#2E2E2E] dark:bg-[#191919]">
                              <span className="font-semibold text-[#37352F] dark:text-[#EBEBEB]">
                                Examiner tips:{' '}
                              </span>
                              <span className="text-[#787774] dark:text-[#9B9A97]">
                                {criterion.examinerTips.join(' · ')}
                              </span>
                            </div>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}

              {/* CAS Strands & Learning Outcomes */}
              {activeRubric.casStrands && activeRubric.casStrands.length > 0 && (
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {activeRubric.casStrands.map((strand) => (
                    <Card key={strand.name}>
                      <CardContent className="space-y-2 p-4 text-xs">
                        <div className="font-semibold text-[#37352F] dark:text-[#EBEBEB]">
                          {strand.name}
                        </div>
                        <p className="text-[#787774] dark:text-[#9B9A97]">
                          {strand.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {activeRubric.casLearningOutcomes &&
                activeRubric.casLearningOutcomes.length > 0 && (
                  <Card>
                    <CardContent className="space-y-2 p-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#787774] dark:text-[#9B9A97]">
                        7 IB CAS Learning Outcomes
                      </div>
                      <div className="divide-y divide-[#E6E6E4] dark:divide-[#2E2E2E]">
                        {activeRubric.casLearningOutcomes.map((lo) => (
                          <div key={lo.code} className="py-2 text-xs">
                            <span className="mr-2 font-mono font-semibold text-[#37352F] dark:text-[#EBEBEB]">
                              {lo.code}
                            </span>
                            <span className="font-medium text-[#37352F] dark:text-[#EBEBEB]">
                              {lo.title}
                            </span>
                            <p className="mt-0.5 text-[#787774] dark:text-[#9B9A97]">
                              {lo.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
            </TabsContent>

            {/* Tab 3: Classroom Reference Toolkit */}
            <TabsContent value="toolkit" className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs text-[#787774] dark:text-[#9B9A97]">
                  Teacher-provided IB guides, lab formatting manuals, timelines,
                  and citation standards.
                </p>
                <Button
                  size="sm"
                  variant={showAllResources ? 'primary' : 'outline'}
                  onClick={() => setShowAllResources((v) => !v)}
                >
                  <span>
                    {showAllResources
                      ? 'Showing All Cohort Guides'
                      : 'Show All Cohort Guides'}
                  </span>
                </Button>
              </div>

              {filteredResources.length > 0 && selectedResource ? (
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                  <div className="space-y-1.5">
                    {filteredResources.map((res) => {
                      const active = res.id === selectedResource.id;
                      return (
                        <button
                          key={res.id}
                          type="button"
                          onClick={() => setActiveResourceId(res.id)}
                          className={`w-full rounded-md border px-3 py-2.5 text-left transition-colors cursor-pointer ${
                            active
                              ? 'border-[#37352F] bg-[#F1F1EF] text-[#37352F] dark:border-[#EBEBEB] dark:bg-[#2A2A2A] dark:text-[#EBEBEB]'
                              : 'border-[#E6E6E4] bg-white text-[#787774] hover:bg-[#FBFBFA] hover:text-[#37352F] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#9B9A97] dark:hover:bg-[#202020] dark:hover:text-[#EBEBEB]'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-[#787774] dark:text-[#9B9A97]">
                              {res.category}
                            </span>
                          </div>
                          <div className="mt-0.5 text-xs font-medium text-[#37352F] dark:text-[#EBEBEB]">
                            {res.title}
                          </div>
                          <div className="mt-0.5 line-clamp-2 text-[11px] text-[#787774] dark:text-[#9B9A97]">
                            {res.summary}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <Card className="lg:col-span-2">
                    <CardContent className="space-y-3 p-4 sm:p-5">
                      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-[#E6E6E4] pb-3 dark:border-[#2E2E2E]">
                        <div>
                          <Badge variant="subtle" className="font-mono">
                            {selectedResource.sourceFileName}
                          </Badge>
                          <h3 className="mt-1.5 text-base font-semibold text-[#37352F] dark:text-[#EBEBEB]">
                            {selectedResource.title}
                          </h3>
                        </div>
                        {selectedResource.externalUrl && (
                          <a
                            href={selectedResource.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-md border border-[#E6E6E4] px-2.5 py-1 text-xs font-medium text-[#37352F] hover:bg-[#F1F1EF] dark:border-[#2E2E2E] dark:text-[#EBEBEB] dark:hover:bg-[#2A2A2A]"
                          >
                            <span>Open in Drive</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>

                      <div className="text-sm leading-relaxed text-[#37352F] dark:text-[#EBEBEB]">
                        <MarkdownMath
                          content={selectedResource.contentMarkdown}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="rounded-lg border border-dashed border-[#E6E6E4] px-6 py-10 text-center dark:border-[#2E2E2E]">
                  <p className="text-xs text-[#787774] dark:text-[#9B9A97]">
                    No classroom reference guide is scoped exclusively to this
                    item. Click &ldquo;Show All Cohort Guides&rdquo; above to
                    browse EE 2028, CAS 2028, Chemistry Lab Info, History
                    Chicago Style, and English Assessment Calendar guides.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
