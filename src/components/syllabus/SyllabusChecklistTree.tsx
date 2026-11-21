'use client';

import * as React from 'react';
import {
  ChevronDown,
  ChevronRight,
  FileText,
  HelpCircle,
  Info,
  Search,
} from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import type { ConfidenceLevel, SyllabusTopicRow } from '@/types/database';

interface SyllabusChecklistTreeProps {
  userId: string;
  topics: SyllabusTopicRow[];
  noteCountsByTopic: Record<string, number>;
  questionCountsByTopic: Record<string, number>;
  onTopicsChange: (nextTopics: SyllabusTopicRow[]) => void;
  onSelectTopicNotes?: (topicId: string) => void;
  onSelectTopicQuestions?: (topicId: string) => void;
}

const CONFIDENCE_ORDER: ConfidenceLevel[] = [
  'unstarted',
  'reviewing',
  'confident',
];

const CONFIDENCE_LABELS: Record<ConfidenceLevel, string> = {
  unstarted: 'Unstarted',
  reviewing: 'Reviewing',
  confident: 'Confident',
};

const CONFIDENCE_CLASSES: Record<ConfidenceLevel, string> = {
  unstarted:
    'border-[#E6E6E4] bg-[#FBFBFA] text-[#787774] hover:bg-[#F1F1EF] dark:border-[#2E2E2E] dark:bg-[#202020] dark:text-[#9B9A97] dark:hover:bg-[#2A2A2A]',
  reviewing:
    'border-[#EAE2CE] bg-[#FAF7F0] text-[#785E2B] hover:bg-[#F4EEE0] dark:border-[#3A3325] dark:bg-[#26221A] dark:text-[#D5BD88] dark:hover:bg-[#2F2A20]',
  confident:
    'border-[#DCE5DF] bg-[#F3F6F4] text-[#2F5E44] hover:bg-[#E7EFEA] dark:border-[#2D3B32] dark:bg-[#1E2621] dark:text-[#9FC3AD] dark:hover:bg-[#253029]',
};

export function SyllabusChecklistTree({
  userId,
  topics,
  noteCountsByTopic,
  questionCountsByTopic,
  onTopicsChange,
  onSelectTopicNotes,
  onSelectTopicQuestions,
}: SyllabusChecklistTreeProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState<
    'all' | ConfidenceLevel | 'incomplete'
  >('all');
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
  const [savingIds, setSavingIds] = React.useState<Record<string, boolean>>({});
  const [expandedGuidance, setExpandedGuidance] = React.useState<
    Record<string, boolean>
  >({});

  const sortedTopics = React.useMemo(
    () => [...topics].sort((a, b) => a.sort_order - b.sort_order),
    [topics],
  );

  const parentTopics = React.useMemo(
    () => sortedTopics.filter((t) => !t.parent_id),
    [sortedTopics],
  );

  const childrenByParent = React.useMemo(() => {
    const map: Record<string, SyllabusTopicRow[]> = {};
    for (const topic of sortedTopics) {
      if (topic.parent_id) {
        if (!map[topic.parent_id]) map[topic.parent_id] = [];
        map[topic.parent_id].push(topic);
      }
    }
    return map;
  }, [sortedTopics]);

  const [expandedParents, setExpandedParents] = React.useState<
    Record<string, boolean>
  >(() => {
    const initial: Record<string, boolean> = {};
    for (const parent of parentTopics) {
      initial[parent.id] = true;
    }
    return initial;
  });

  // Ensure newly loaded parents default to expanded
  React.useEffect(() => {
    setExpandedParents((prev) => {
      const next = { ...prev };
      let changed = false;
      for (const parent of parentTopics) {
        if (next[parent.id] === undefined) {
          next[parent.id] = true;
          changed = true;
        }
      }
      return changed ? next : prev;
    });
  }, [parentTopics]);

  const persistUpdate = async (
    topicId: string,
    patch: Partial<Pick<SyllabusTopicRow, 'is_completed' | 'confidence_level'>>,
  ) => {
    setErrorMsg(null);
    const previous = topics;
    const updatedAt = new Date().toISOString();

    const optimistic = topics.map((t) =>
      t.id === topicId ? { ...t, ...patch, updated_at: updatedAt } : t,
    );
    onTopicsChange(optimistic);
    setSavingIds((prev) => ({ ...prev, [topicId]: true }));

    try {
      const supabase = createClient();
      const { error } = await supabase
        .from('syllabus_topics')
        .update({ ...patch, updated_at: updatedAt })
        .eq('id', topicId)
        .eq('user_id', userId);

      if (error) {
        throw error;
      }
    } catch (err) {
      onTopicsChange(previous);
      setErrorMsg(
        err instanceof Error
          ? `Could not save checklist change: ${err.message}`
          : 'Could not save checklist change. Please try again.',
      );
    } finally {
      setSavingIds((prev) => {
        const copy = { ...prev };
        delete copy[topicId];
        return copy;
      });
    }
  };

  const handleToggleCompleted = (topic: SyllabusTopicRow, checked: boolean) => {
    const nextConfidence: ConfidenceLevel =
      checked && topic.confidence_level === 'unstarted'
        ? 'confident'
        : !checked && topic.confidence_level === 'confident'
          ? 'reviewing'
          : topic.confidence_level;

    void persistUpdate(topic.id, {
      is_completed: checked,
      confidence_level: nextConfidence,
    });
  };

  const handleCycleConfidence = (topic: SyllabusTopicRow) => {
    const idx = CONFIDENCE_ORDER.indexOf(topic.confidence_level);
    const nextConfidence = CONFIDENCE_ORDER[(idx + 1) % CONFIDENCE_ORDER.length];
    const nextCompleted =
      nextConfidence === 'confident'
        ? true
        : nextConfidence === 'unstarted'
          ? false
          : topic.is_completed;

    void persistUpdate(topic.id, {
      confidence_level: nextConfidence,
      is_completed: nextCompleted,
    });
  };

  const matchesFilter = (topic: SyllabusTopicRow) => {
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      topic.code.toLowerCase().includes(q) ||
      topic.title.toLowerCase().includes(q) ||
      (topic.guidance_notes?.toLowerCase().includes(q) ?? false);

    if (!matchesSearch) return false;
    if (statusFilter === 'all') return true;
    if (statusFilter === 'incomplete') return !topic.is_completed;
    return topic.confidence_level === statusFilter;
  };

  const toggleAllParents = (open: boolean) => {
    const next: Record<string, boolean> = {};
    for (const parent of parentTopics) {
      next[parent.id] = open;
    }
    setExpandedParents(next);
  };

  const renderTopicRow = (topic: SyllabusTopicRow, isChild: boolean) => {
    const notesCount = noteCountsByTopic[topic.id] ?? 0;
    const questionsCount = questionCountsByTopic[topic.id] ?? 0;
    const isSaving = Boolean(savingIds[topic.id]);
    const showGuidance = Boolean(expandedGuidance[topic.id]);

    return (
      <div
        key={topic.id}
        data-testid={`syllabus-topic-${topic.code}`}
        className={`flex flex-col gap-2 border-t border-[#E6E6E4] px-3.5 py-2.5 transition-colors hover:bg-[#FBFBFA] dark:border-[#2E2E2E] dark:hover:bg-[#202020] ${
          isChild ? 'pl-8 sm:pl-10' : ''
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-2.5 sm:flex-nowrap sm:items-center">
          <div className="flex min-w-0 flex-1 items-start gap-2.5">
            <Checkbox
              id={`topic-check-${topic.id}`}
              checked={topic.is_completed}
              disabled={isSaving}
              onCheckedChange={(checked) =>
                handleToggleCompleted(topic, checked === true)
              }
              aria-label={`Mark ${topic.code} ${topic.title} completed`}
              className="mt-0.5"
            />
            <label
              htmlFor={`topic-check-${topic.id}`}
              className="min-w-0 flex-1 cursor-pointer select-none"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-mono text-xs font-medium text-[#787774] dark:text-[#9B9A97]">
                  {topic.code}
                </span>
                <span
                  className={`text-sm leading-snug ${
                    topic.is_completed
                      ? 'text-[#787774] line-through dark:text-[#9B9A97]'
                      : 'text-[#37352F] dark:text-[#EBEBEB]'
                  }`}
                >
                  {topic.title}
                </span>
              </div>
            </label>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 pl-6 sm:pl-0">
            {notesCount > 0 && (
              <button
                type="button"
                onClick={() => onSelectTopicNotes?.(topic.id)}
                className="inline-flex items-center gap-1 rounded border border-[#E6E6E4] bg-[#FBFBFA] px-1.5 py-0.5 text-[11px] text-[#787774] transition-colors hover:bg-[#F1F1EF] hover:text-[#37352F] cursor-pointer dark:border-[#2E2E2E] dark:bg-[#202020] dark:text-[#9B9A97] dark:hover:bg-[#2A2A2A] dark:hover:text-[#EBEBEB]"
                title="Open study notes for this topic"
              >
                <FileText className="h-3 w-3" />
                <span>{notesCount}</span>
              </button>
            )}

            {questionsCount > 0 && (
              <button
                type="button"
                onClick={() => onSelectTopicQuestions?.(topic.id)}
                className="inline-flex items-center gap-1 rounded border border-[#E6E6E4] bg-[#FBFBFA] px-1.5 py-0.5 text-[11px] text-[#787774] transition-colors hover:bg-[#F1F1EF] hover:text-[#37352F] cursor-pointer dark:border-[#2E2E2E] dark:bg-[#202020] dark:text-[#9B9A97] dark:hover:bg-[#2A2A2A] dark:hover:text-[#EBEBEB]"
                title="Practice questions for this topic"
              >
                <HelpCircle className="h-3 w-3" />
                <span>{questionsCount}</span>
              </button>
            )}

            {topic.guidance_notes && (
              <button
                type="button"
                onClick={() =>
                  setExpandedGuidance((prev) => ({
                    ...prev,
                    [topic.id]: !prev[topic.id],
                  }))
                }
                aria-expanded={showGuidance}
                aria-label={`Toggle guidance notes for ${topic.code}`}
                className={`inline-flex h-6 w-6 items-center justify-center rounded border text-[#787774] transition-colors cursor-pointer dark:text-[#9B9A97] ${
                  showGuidance
                    ? 'border-[#37352F] bg-[#F1F1EF] text-[#37352F] dark:border-[#EBEBEB] dark:bg-[#2A2A2A] dark:text-[#EBEBEB]'
                    : 'border-transparent hover:border-[#E6E6E4] hover:bg-[#F1F1EF] dark:hover:border-[#2E2E2E] dark:hover:bg-[#2A2A2A]'
                }`}
              >
                <Info className="h-3.5 w-3.5" />
              </button>
            )}

            <button
              type="button"
              disabled={isSaving}
              onClick={() => handleCycleConfidence(topic)}
              title="Click to cycle confidence level"
              className={`inline-flex items-center rounded border px-2 py-0.5 text-[11px] font-medium transition-colors cursor-pointer disabled:opacity-50 ${
                CONFIDENCE_CLASSES[topic.confidence_level]
              }`}
            >
              {CONFIDENCE_LABELS[topic.confidence_level]}
            </button>
          </div>
        </div>

        {showGuidance && topic.guidance_notes && (
          <div className="ml-6.5 rounded-md border border-[#E6E6E4] bg-[#FBFBFA] px-3 py-2 text-xs leading-relaxed text-[#787774] dark:border-[#2E2E2E] dark:bg-[#202020] dark:text-[#9B9A97]">
            {topic.guidance_notes}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="glass-surface flex flex-col gap-2.5 rounded-2xl p-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-xs">
          <Search className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-[#6E6E73] dark:text-[#98989D]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter by code, topic, or guidance…"
            aria-label="Filter syllabus topics"
            className="glass-pill h-8 w-full rounded-xl pr-3 pl-8 text-xs text-[#1D1D1F] placeholder:text-[#6E6E73] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20 dark:text-[#F5F5F7] dark:placeholder:text-[#98989D] dark:focus:ring-[#F5F5F7]/20"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {(
            [
              ['all', 'All'],
              ['incomplete', 'Incomplete'],
              ['unstarted', 'Unstarted'],
              ['reviewing', 'Reviewing'],
              ['confident', 'Confident'],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setStatusFilter(value)}
              className={`rounded-full px-2.5 py-1 text-xs transition-all cursor-pointer ${
                statusFilter === value
                  ? 'bg-[#1D1D1F] font-medium text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                  : 'glass-pill text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D] dark:hover:text-[#F5F5F7]'
              }`}
            >
              {label}
            </button>
          ))}

          <div className="ml-1 flex items-center gap-1">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => toggleAllParents(true)}
            >
              Expand all
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => toggleAllParents(false)}
            >
              Collapse all
            </Button>
          </div>
        </div>
      </div>

      {errorMsg && (
        <div
          role="alert"
          className="rounded-xl border border-[#E6D0D0] bg-[#FAF2F2]/90 px-3.5 py-2.5 text-xs text-[#9B3B3B] dark:border-[#4A2E2E] dark:bg-[#291F1F]/90 dark:text-[#E59898]"
        >
          {errorMsg}
        </div>
      )}

      {/* Parent Units & Subtopics */}
      <div className="space-y-3">
        {parentTopics.map((parent) => {
          const allChildren = childrenByParent[parent.id] ?? [];
          const hasChildren = allChildren.length > 0;
          const visibleChildren = allChildren.filter(matchesFilter);
          const parentSelfMatches = matchesFilter(parent);

          if (hasChildren && visibleChildren.length === 0 && !parentSelfMatches) {
            return null;
          }
          if (!hasChildren && !parentSelfMatches) {
            return null;
          }

          const childrenToRender =
            visibleChildren.length > 0 ? visibleChildren : allChildren;
          const completedChildren = allChildren.filter(
            (c) => c.is_completed,
          ).length;
          const isExpanded = Boolean(expandedParents[parent.id]);

          if (!hasChildren) {
            return (
              <div
                key={parent.id}
                className="glass-panel overflow-hidden rounded-2xl"
              >
                {renderTopicRow(parent, false)}
              </div>
            );
          }

          return (
            <div
              key={parent.id}
              className="glass-panel overflow-hidden rounded-2xl"
            >
              <button
                type="button"
                onClick={() =>
                  setExpandedParents((prev) => ({
                    ...prev,
                    [parent.id]: !prev[parent.id],
                  }))
                }
                aria-expanded={isExpanded}
                className="flex w-full items-center justify-between gap-3 bg-black/[0.02] px-4 py-3 text-left transition-colors hover:bg-black/[0.045] cursor-pointer dark:bg-white/[0.02] dark:hover:bg-white/[0.05]"
              >
                <div className="flex min-w-0 items-center gap-2.5">
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4 shrink-0 text-[#6E6E73] dark:text-[#98989D]" />
                  ) : (
                    <ChevronRight className="h-4 w-4 shrink-0 text-[#6E6E73] dark:text-[#98989D]" />
                  )}
                  <span className="font-mono text-xs font-medium text-[#6E6E73] dark:text-[#98989D]">
                    {parent.code}
                  </span>
                  <span className="truncate text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                    {parent.title}
                  </span>
                </div>
                <Badge variant="outline" className="shrink-0 font-mono">
                  {completedChildren} / {allChildren.length}
                </Badge>
              </button>

              {parent.guidance_notes && isExpanded && (
                <div className="border-t border-black/[0.06] bg-black/[0.02] px-4 py-2.5 text-xs text-[#6E6E73] dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-[#98989D]">
                  {parent.guidance_notes}
                </div>
              )}

              {isExpanded && (
                <div>
                  {childrenToRender.map((child) => renderTopicRow(child, true))}
                </div>
              )}
            </div>
          );
        })}

        {parentTopics.length === 0 && (
          <div className="glass-surface rounded-2xl border-dashed px-4 py-8 text-center text-sm text-[#6E6E73] dark:text-[#98989D]">
            No syllabus topics found for this subject yet.
          </div>
        )}
      </div>
    </div>
  );
}
