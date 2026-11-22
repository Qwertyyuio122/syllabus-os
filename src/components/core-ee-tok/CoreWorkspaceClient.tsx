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
import { getSubjectTheme } from '@/config/subject-themes';
import { getRubricForProject } from '@/data/ib-rubrics';
import { CRHS_2026_2028_MILESTONES } from '@/data/classroom-seed/core-ee-cas';
import { createClient } from '@/lib/supabase/client';
import { MarkdownMath } from '@/components/notes/MarkdownMath';
import { LiquidArtwork } from '@/components/subjects/SubjectMotif';
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
import { GlassSpotlight } from '@/components/ui/GlassSpotlight';
import { GlassReveal, ProgressRing } from '@/components/ui/MotionPrimitives';
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
  initialProjectId?: string | null;
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
  { projectType: 'CAS', subjectSlug: null, label: 'CAS Portfolio', shortTag: 'CAS' },
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
  initialProjectId = null,
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
    initialProjectId ??
      orderedProjects[0]?.project.id ??
      initialProjects[0]?.id ??
      '',
  );

  React.useEffect(() => {
    if (initialProjectId) {
      setSelectedProjectId(initialProjectId);
    }
  }, [initialProjectId]);

  const [subTab, setSubTab] = React.useState<'draft' | 'rubric' | 'toolkit'>(
    'draft',
  );

  // Rubric variants (EE FA2027 30m vs legacy 34m; English HL Essay vs IO)
  const [eeVariant, setEeVariant] = React.useState<
    'EE_FA2027_30' | 'EE_LEGACY_34'
  >('EE_FA2027_30');
  const [englishVariant, setEnglishVariant] = React.useState<
    'ENGLISH_HL_ESSAY' | 'IO'
  >('ENGLISH_HL_ESSAY');

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
  const [calendarStage, setCalendarStage] = React.useState<'all' | 'g11' | 'g12'>('all');
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
        <p className="text-sm text-[#525866] dark:text-[#9AA3B2]">
          No DP Core or IA projects initialized yet.
        </p>
      </div>
    );
  }

  const completedMilestones = selectedProject.milestones.filter(
    (m) => m.completed,
  ).length;
  const totalAllMilestones = projects.reduce(
    (sum, p) => sum + (p.milestones?.length ?? 0),
    0,
  );
  const completedAllMilestones = projects.reduce(
    (sum, p) =>
      sum + (p.milestones?.filter((m) => m.completed).length ?? 0),
    0,
  );
  const overallMilestonePct =
    totalAllMilestones > 0
      ? Math.round((completedAllMilestones / totalAllMilestones) * 100)
      : 0;
  const activeProjectTheme = getSubjectTheme(
    selectedProject.subject_slug ?? 'core',
  );

  const wordTarget = selectedProject.word_count_target || 0;
  const overTarget = wordTarget > 0 && liveWordCount > wordTarget;

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-8 sm:py-8">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mb-4 flex items-center gap-1.5 text-xs text-[#525866] dark:text-[#9AA3B2]"
      >
        <Link
          href="/dashboard"
          className="transition-colors hover:text-[#111318] dark:hover:text-[#F5F7FA]"
        >
          Dashboard
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-[#111318] dark:text-[#F5F7FA]">
          EE · TOK · CAS · Subject IAs
        </span>
      </nav>

      {/* Page Title Hero */}
      <GlassReveal>
        <GlassSpotlight className="glass-panel relative mb-6 flex flex-col gap-4 rounded-3xl p-6 sm:flex-row sm:items-end sm:justify-between">
          <LiquidArtwork
            src="/images/hero-glass.png"
            className="absolute -top-6 right-8 hidden h-48 w-80 sm:block"
            imgClassName="opacity-70 dark:opacity-75"
          />

          <div className="relative z-10 min-w-0">
            <h1 className="font-serif text-3xl font-medium tracking-[-0.02em] text-balance text-[#111318] sm:text-[34px] sm:leading-[1.12] dark:text-[#F5F7FA]">
              DP Core &amp; Internal Assessments
            </h1>
            <p className="mt-1.5 max-w-2xl text-sm text-[#525866] dark:text-[#9AA3B2]">
              Official IB Diploma criteria, classroom reference toolkits,
              milestone tracking, and examiner-calibrated rubric evaluation.
            </p>
          </div>

          <div className="glass-surface relative z-10 flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3">
            <ProgressRing
              value={overallMilestonePct}
              size={44}
              strokeWidth={3.5}
              accentClassName="text-[#1E3A5F] dark:text-[#93C5FD]"
              centerLabel={`${overallMilestonePct}%`}
              ariaLabel={`Core milestone readiness ${overallMilestonePct}%`}
            />
            <div>
              <div className="text-[11px] font-medium text-[#525866] dark:text-[#9AA3B2]">
                All Core &amp; IA Milestones
              </div>
              <div className="font-mono text-sm font-semibold tabular-nums text-[#111318] dark:text-[#F5F7FA]">
                {completedAllMilestones} / {totalAllMilestones} done
              </div>
            </div>
          </div>
        </GlassSpotlight>
      </GlassReveal>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        {/* Left Project Selector */}
        <aside className="w-full shrink-0 lg:sticky lg:top-6 lg:w-64">
          <div className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-wider text-[#525866] dark:text-[#9AA3B2]">
            Core &amp; Subject IAs
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
            {orderedProjects.map(({ project, label, shortTag }) => {
              const liveProj =
                projects.find((p) => p.id === project.id) ?? project;
              const isSelected = liveProj.id === selectedProject.id;
              const doneCount = liveProj.milestones.filter(
                (m) => m.completed,
              ).length;
              const projTheme = getSubjectTheme(liveProj.subject_slug ?? 'core');

              return (
                <button
                  key={liveProj.id}
                  type="button"
                  onClick={() => setSelectedProjectId(liveProj.id)}
                  className={`flex shrink-0 cursor-pointer items-center justify-between gap-2 rounded-2xl px-3.5 py-2.5 text-left transition-all lg:w-full ${
                    isSelected
                      ? `glass-panel border-[#111318]/25 text-[#111318] dark:border-white/25 dark:text-[#F5F7FA] ${projTheme.tintBg}`
                      : 'glass-surface glass-interactive text-[#525866] hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:text-[#F5F7FA]'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="truncate text-xs font-medium text-[#111318] dark:text-[#F5F7FA]">
                      {label}
                    </div>
                    <div className="mt-0.5 font-mono text-[10px] text-[#525866] dark:text-[#9AA3B2]">
                      {doneCount}/{liveProj.milestones.length} milestones
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={`shrink-0 font-mono ${
                      isSelected ? `${projTheme.borderTint} ${projTheme.textAccent}` : ''
                    }`}
                  >
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
          <Card className={activeProjectTheme.borderTint}>
            <CardContent className="space-y-3 p-4 sm:p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-semibold tracking-tight text-[#111318] dark:text-[#F5F7FA]">
                      {activeRubric.title}
                    </h2>
                    {activeRubric.totalMaxMarks > 0 && (
                      <Badge
                        variant="default"
                        className={`font-mono ${activeProjectTheme.tintBg} ${activeProjectTheme.borderTint} ${activeProjectTheme.textAccent}`}
                      >
                        {activeRubric.totalMaxMarks} marks
                      </Badge>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-[#525866] dark:text-[#9AA3B2]">
                    {activeRubric.cohortSession} · {activeRubric.wordLimit} ·{' '}
                    {activeRubric.weightingNote}
                  </p>
                </div>

                {/* Variant Switchers (EE FA2027 30m vs Legacy 34m; English HL Essay vs IO) */}
                {selectedProject.project_type === 'EE' && (
                  <div className="glass-surface inline-flex items-center gap-1 rounded-full p-1">
                    <button
                      type="button"
                      onClick={() => setEeVariant('EE_FA2027_30')}
                      className={`cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-all ${
                        eeVariant === 'EE_FA2027_30'
                          ? 'bg-[#111318] text-white shadow-sm dark:bg-[#F5F7FA] dark:text-[#0B0D12]'
                          : 'text-[#525866] hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:text-[#F5F7FA]'
                      }`}
                    >
                      FA2027 (30m)
                    </button>
                    <button
                      type="button"
                      onClick={() => setEeVariant('EE_LEGACY_34')}
                      className={`cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-all ${
                        eeVariant === 'EE_LEGACY_34'
                          ? 'bg-[#111318] text-white shadow-sm dark:bg-[#F5F7FA] dark:text-[#0B0D12]'
                          : 'text-[#525866] hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:text-[#F5F7FA]'
                      }`}
                    >
                      Legacy (34m)
                    </button>
                  </div>
                )}

                {selectedProject.project_type === 'IA' &&
                  selectedProject.subject_slug === 'english-lit-hl' && (
                    <div className="glass-surface inline-flex items-center gap-1 rounded-full p-1">
                      <button
                        type="button"
                        onClick={() => setEnglishVariant('ENGLISH_HL_ESSAY')}
                        className={`cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-all ${
                          englishVariant === 'ENGLISH_HL_ESSAY'
                            ? 'bg-[#111318] text-white shadow-sm dark:bg-[#F5F7FA] dark:text-[#0B0D12]'
                            : 'text-[#525866] hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:text-[#F5F7FA]'
                        }`}
                      >
                        HL Essay (20m)
                      </button>
                      <button
                        type="button"
                        onClick={() => setEnglishVariant('IO')}
                        className={`cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-all ${
                          englishVariant === 'IO'
                            ? 'bg-[#111318] text-white shadow-sm dark:bg-[#F5F7FA] dark:text-[#0B0D12]'
                            : 'text-[#525866] hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:text-[#F5F7FA]'
                        }`}
                      >
                        Individual Oral (40m)
                      </button>
                    </div>
                  )}
              </div>

              <p className="text-xs leading-relaxed text-[#525866] dark:text-[#9AA3B2]">
                {activeRubric.overview}
              </p>
            </CardContent>
          </Card>

          {errorMsg && (
            <div
              role="alert"
              className="rounded-xl border border-red-700/20 bg-red-50/90 px-3.5 py-2.5 text-xs text-[#991B1B] dark:border-red-400/25 dark:bg-red-950/60 dark:text-[#FCA5A5]"
            >
              {errorMsg}
            </div>
          )}

          {statusMsg && (
            <div
              role="status"
              className="rounded-xl border border-emerald-700/20 bg-emerald-50/90 px-3.5 py-2.5 text-xs text-[#065F46] dark:border-emerald-400/25 dark:bg-emerald-950/60 dark:text-[#6EE7B7]"
            >
              {statusMsg}
            </div>
          )}

          {/* Core Workspace Sub-Tabs */}
          <Tabs
            idPrefix="core-workspace-tabs"
            value={subTab}
            onValueChange={(v) =>
              setSubTab(v as 'draft' | 'rubric' | 'toolkit')
            }
          >
            <div className="sticky top-[52px] z-20 -mx-2 bg-gradient-to-b from-[#E9EFF7]/95 via-[#E9EFF7]/70 to-transparent px-2 pt-2 pb-1.5 backdrop-blur-[2px] lg:top-0 lg:pt-2.5 dark:from-[#0B0D12]/95 dark:via-[#0B0D12]/70 dark:to-transparent">
              <TabsList className="glass-floating-bar">
                <TabsTrigger value="draft">
                  <FileText className="h-3.5 w-3.5" />
                  <span>Draft &amp; Milestones</span>
                </TabsTrigger>
                <TabsTrigger value="rubric">
                  <Check className="h-3.5 w-3.5" />
                  <span>Official IB Rubric</span>
                  <span className="font-mono text-[11px] tabular-nums text-[#525866] dark:text-[#9AA3B2]">
                    {activeRubric.criteria.length}
                  </span>
                </TabsTrigger>
                <TabsTrigger value="toolkit">
                  <BookMarked className="h-3.5 w-3.5" />
                  <span>Classroom Reference Toolkit</span>
                  <span className="font-mono text-[11px] tabular-nums text-[#525866] dark:text-[#9AA3B2]">
                    {filteredResources.length}
                  </span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tab 1: Draft, RQ, Milestones & AI Rubric Evaluation */}
            <TabsContent value="draft" className="space-y-5">
              {/* Research Question / Prompt */}
              <Card>
                <CardContent className="space-y-3 p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <label
                      htmlFor="core-rq-input"
                      className="text-xs font-semibold uppercase tracking-wider text-[#525866] dark:text-[#9AA3B2]"
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
                    className="glass-surface h-9.5 w-full rounded-xl px-3 text-sm text-[#111318] placeholder:text-[#525866] focus:border-[#111318]/40 focus:outline-none dark:text-[#F5F7FA] dark:placeholder:text-[#9AA3B2] dark:focus:border-white/35"
                  />

                  <div className="space-y-1.5 pt-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <label
                        htmlFor="core-draft-textarea"
                        className="text-xs font-semibold uppercase tracking-wider text-[#525866] dark:text-[#9AA3B2]"
                      >
                        Draft Excerpt / Outline / Reflections
                      </label>
                      <span
                        className={`font-mono text-xs ${
                          overTarget
                            ? 'font-semibold text-[#991B1B] dark:text-[#FCA5A5]'
                            : 'text-[#525866] dark:text-[#9AA3B2]'
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
                      className="glass-surface w-full resize-y rounded-2xl p-3.5 text-sm leading-relaxed text-[#111318] placeholder:text-[#525866] focus:border-[#111318]/40 focus:outline-none dark:text-[#F5F7FA] dark:placeholder:text-[#9AA3B2] dark:focus:border-white/35"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <span className="text-xs text-[#525866] dark:text-[#9AA3B2]">
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
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] pb-3 dark:border-white/[0.08]">
                      <div>
                        <h3 className="text-sm font-semibold text-[#111318] dark:text-[#F5F7FA]">
                          IB Examiner Rubric Evaluation
                        </h3>
                        <p className="mt-0.5 text-[11px] text-[#525866] dark:text-[#9AA3B2]">
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

                    <p className="text-xs leading-relaxed text-[#111318] dark:text-[#F5F7FA]">
                      {selectedProject.latest_ai_review.overall_summary}
                    </p>

                    <div className="space-y-2.5">
                      {selectedProject.latest_ai_review.criterion_results.map(
                        (crit, idx) => (
                          <div
                            key={`${crit.criterion}-${idx}`}
                            className="glass-surface rounded-2xl p-3.5 text-xs"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-semibold text-[#111318] dark:text-[#F5F7FA]">
                                {crit.criterion}
                              </span>
                              <span className="font-mono font-semibold text-[#111318] dark:text-[#F5F7FA]">
                                {crit.awarded} / {crit.max_marks}
                              </span>
                            </div>
                            <p className="mt-1 leading-relaxed text-[#525866] dark:text-[#9AA3B2]">
                              {crit.justification}
                            </p>
                            {crit.improvements.length > 0 && (
                              <ul className="mt-2 list-disc space-y-1 pl-4 text-[#111318] dark:text-[#F5F7FA]">
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
                      <div className="glass-pill rounded-2xl p-3.5 text-xs">
                        <div className="mb-1.5 font-semibold text-[#111318] dark:text-[#F5F7FA]">
                          Priority Next Revisions
                        </div>
                        <ul className="list-disc space-y-1 pl-4 text-[#525866] dark:text-[#9AA3B2]">
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
                <CardContent className="space-y-3 p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#525866] dark:text-[#9AA3B2]">
                      Milestone Checklist
                    </h3>
                    <Badge variant="outline" className="font-mono">
                      {completedMilestones} / {selectedProject.milestones.length}
                    </Badge>
                  </div>

                  <div className="glass-surface divide-y divide-black/[0.06] overflow-hidden rounded-2xl dark:divide-white/[0.08]">
                    {selectedProject.milestones.map((m) => (
                      <div
                        key={m.id}
                        className="flex items-center justify-between gap-3 px-3.5 py-2.5 text-xs"
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
                                ? 'text-[#525866] line-through dark:text-[#9AA3B2]'
                                : 'text-[#111318] dark:text-[#F5F7FA]'
                            }`}
                          >
                            {m.title}
                          </label>
                        </div>
                        {m.dueDate && (
                          <span className="shrink-0 font-mono text-[11px] text-[#525866] dark:text-[#9AA3B2]">
                            {m.dueDate}
                          </span>
                        )}
                      </div>
                    ))}
                    {selectedProject.milestones.length === 0 && (
                      <div className="px-3 py-4 text-center text-xs text-[#525866] dark:text-[#9AA3B2]">
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
                      className="glass-surface h-8.5 flex-1 rounded-xl px-3 text-xs text-[#111318] placeholder:text-[#525866] focus:border-[#111318]/40 focus:outline-none dark:text-[#F5F7FA] dark:placeholder:text-[#9AA3B2] dark:focus:border-white/35"
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
                <div className="glass-surface rounded-2xl p-4 sm:p-5">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#525866] dark:text-[#9AA3B2]">
                    Official IB Examiner Notes
                  </div>
                  <ul className="list-disc space-y-1.5 pl-4 text-xs leading-relaxed text-[#111318] dark:text-[#F5F7FA]">
                    {activeRubric.examinerNotes.map((note, idx) => (
                      <li key={idx}>{note}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeRubric.criteria.length > 0 && (
                <div className="glass-panel overflow-hidden rounded-2xl">
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
                              <span className="font-mono text-xs text-[#525866] dark:text-[#9AA3B2]">
                                ({criterion.maxMarks} marks)
                              </span>
                            )}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="space-y-3">
                          <p className="text-xs leading-relaxed text-[#525866] dark:text-[#9AA3B2]">
                            {criterion.summary}
                          </p>

                          <div className="glass-surface divide-y divide-black/[0.06] overflow-hidden rounded-xl dark:divide-white/[0.08]">
                            {criterion.descriptors.map((band) => (
                              <div
                                key={`${criterion.code}-${band.marks}`}
                                className="flex flex-col gap-1 px-3.5 py-2.5 text-xs sm:flex-row sm:items-start sm:gap-3"
                              >
                                <div className="flex shrink-0 items-center gap-2 sm:w-36">
                                  <Badge
                                    variant="default"
                                    className="font-mono"
                                  >
                                    {band.marks}
                                  </Badge>
                                  <span className="font-medium text-[#111318] dark:text-[#F5F7FA]">
                                    {band.levelLabel}
                                  </span>
                                </div>
                                <p className="leading-relaxed text-[#525866] dark:text-[#9AA3B2]">
                                  {band.descriptor}
                                </p>
                              </div>
                            ))}
                          </div>

                          {criterion.examinerTips.length > 0 && (
                            <div className="glass-pill rounded-xl px-3.5 py-2.5 text-xs">
                              <span className="font-semibold text-[#111318] dark:text-[#F5F7FA]">
                                Examiner tips:{' '}
                              </span>
                              <span className="text-[#525866] dark:text-[#9AA3B2]">
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
                        <div className="font-semibold text-[#111318] dark:text-[#F5F7FA]">
                          {strand.name}
                        </div>
                        <p className="text-[#525866] dark:text-[#9AA3B2]">
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
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#525866] dark:text-[#9AA3B2]">
                        7 IB CAS Learning Outcomes
                      </div>
                      <div className="divide-y divide-black/[0.06] dark:divide-white/[0.08]">
                        {activeRubric.casLearningOutcomes.map((lo) => (
                          <div key={lo.code} className="py-2 text-xs">
                            <span className="mr-2 font-mono font-semibold text-[#111318] dark:text-[#F5F7FA]">
                              {lo.code}
                            </span>
                            <span className="font-medium text-[#111318] dark:text-[#F5F7FA]">
                              {lo.title}
                            </span>
                            <p className="mt-0.5 text-[#525866] dark:text-[#9AA3B2]">
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
                <p className="text-xs text-[#525866] dark:text-[#9AA3B2]">
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
                      ? 'Showing All Reference Guides'
                      : 'Show All Reference Guides'}
                  </span>
                </Button>
              </div>

              {filteredResources.length > 0 && selectedResource ? (
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                  <div className="space-y-2">
                    {filteredResources.map((res) => {
                      const active = res.id === selectedResource.id;
                      return (
                        <button
                          key={res.id}
                          type="button"
                          onClick={() => setActiveResourceId(res.id)}
                          className={`w-full cursor-pointer rounded-2xl px-3.5 py-3 text-left transition-all ${
                            active
                              ? 'glass-panel border-[#111318]/25 text-[#111318] dark:border-white/25 dark:text-[#F5F7FA]'
                              : 'glass-surface glass-interactive text-[#525866] hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:text-[#F5F7FA]'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-[#525866] dark:text-[#9AA3B2]">
                              {res.category}
                            </span>
                          </div>
                          <div className="mt-0.5 text-xs font-medium text-[#111318] dark:text-[#F5F7FA]">
                            {res.title}
                          </div>
                          <div className="mt-0.5 line-clamp-2 text-[11px] text-[#525866] dark:text-[#9AA3B2]">
                            {res.summary}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <Card className="lg:col-span-2">
                    <CardContent className="space-y-3 p-4 sm:p-5">
                      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-black/[0.06] pb-3 dark:border-white/[0.08]">
                        <div>
                          <Badge variant="subtle" className="font-mono">
                            {selectedResource.sourceFileName}
                          </Badge>
                          <h3 className="mt-1.5 text-base font-semibold text-[#111318] dark:text-[#F5F7FA]">
                            {selectedResource.title}
                          </h3>
                        </div>
                        {selectedResource.externalUrl && (
                          <a
                            href={selectedResource.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-pill inline-flex items-center gap-1 rounded-xl px-2.5 py-1 text-xs font-medium text-[#111318] hover:bg-white/95 dark:text-[#F5F7FA] dark:hover:bg-white/[0.12]"
                          >
                            <span>Open in Drive</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>

                      <div className="text-sm leading-relaxed text-[#111318] dark:text-[#F5F7FA]">
                        <MarkdownMath
                          content={selectedResource.contentMarkdown}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="glass-surface rounded-2xl border-dashed px-6 py-10 text-center">
                  <p className="text-xs text-[#525866] dark:text-[#9AA3B2]">
                    No classroom reference guide is scoped exclusively to this
                    item. Click &ldquo;Show All Reference Guides&rdquo; above to
                    browse Extended Essay, CAS Portfolio, Chemistry Lab Info,
                    History Chicago Style, and English Assessment Calendar
                    guides.
                  </p>
                </div>
              )}

              {/* CRHS Class of 2028 Full Assessment Calendar */}
              <Card>
                <CardContent className="space-y-3 p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] pb-3 dark:border-white/[0.08]">
                    <div>
                      <h3 className="text-sm font-semibold text-[#111318] dark:text-[#F5F7FA]">
                        CRHS Class of 2028 — Master IB Assessment Calendar
                      </h3>
                      <p className="mt-0.5 text-xs text-[#525866] dark:text-[#9AA3B2]">
                        Verified from IB Assessment Calendar 2026–2027.pdf &amp;
                        Timeline 2028 cohort.docx.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {(
                        [
                          { id: 'all', label: 'All (33)' },
                          { id: 'g11', label: 'Grade 11 (2026–27)' },
                          { id: 'g12', label: 'Grade 12 (2027–28)' },
                        ] as const
                      ).map((tab) => (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setCalendarStage(tab.id)}
                          className={`cursor-pointer rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors ${
                            calendarStage === tab.id
                              ? 'bg-[#111318] text-white dark:bg-[#F5F7FA] dark:text-[#0B0D12]'
                              : 'glass-pill text-[#525866] hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:text-[#F5F7FA]'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    {CRHS_2026_2028_MILESTONES.filter((item) => {
                      if (calendarStage === 'g11') {
                        return item.cohortStage === 'Grade 11 (2026–2027)';
                      }
                      if (calendarStage === 'g12') {
                        return item.cohortStage === 'Grade 12 (2027–2028)';
                      }
                      return true;
                    }).map((item) => (
                      <div
                        key={item.id}
                        className="glass-surface flex items-start justify-between gap-3 rounded-xl px-3 py-2.5"
                      >
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="font-mono text-[11px] font-semibold text-[#111318] dark:text-[#F5F7FA]">
                              {item.dateLabel}
                            </span>
                            <Badge
                              variant="outline"
                              className="font-mono text-[10px]"
                            >
                              {item.subjectOrCore}
                            </Badge>
                          </div>
                          <div className="mt-1 text-xs font-medium text-[#111318] dark:text-[#F5F7FA]">
                            {item.title}
                          </div>
                          <div className="mt-0.5 font-mono text-[10px] text-[#525866] dark:text-[#9AA3B2]">
                            {item.cohortStage} · {item.sourceRef}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
