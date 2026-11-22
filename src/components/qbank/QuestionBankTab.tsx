'use client';

import * as React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Search,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type {
  QuestionAttemptRow,
  QuestionRow,
  SyllabusTopicRow,
} from '@/types/database';
import { QuestionCard } from './QuestionCard';

const PAGE_SIZE = 20;

interface QuestionBankTabProps {
  questions: QuestionRow[];
  topics: SyllabusTopicRow[];
  paperTypes: string[];
  attemptsByQuestionId: Record<string, QuestionAttemptRow>;
  initialTopicId?: string | null;
  onAttemptSaved: (attempt: QuestionAttemptRow) => void;
}

export function QuestionBankTab({
  questions,
  topics,
  paperTypes,
  attemptsByQuestionId,
  initialTopicId = null,
  onAttemptSaved,
}: QuestionBankTabProps) {
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [topicFilter, setTopicFilter] = React.useState<string>(
    initialTopicId || 'all',
  );
  const [paperFilter, setPaperFilter] = React.useState<string>('all');
  const [commandTermFilter, setCommandTermFilter] =
    React.useState<string>('all');
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [showAll, setShowAll] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (initialTopicId) {
      setTopicFilter(initialTopicId);
    }
  }, [initialTopicId]);

  const topicMap = React.useMemo(() => {
    const map: Record<string, SyllabusTopicRow> = {};
    for (const t of topics) {
      map[t.id] = t;
    }
    return map;
  }, [topics]);

  const availableTopics = React.useMemo(() => {
    const usedIds = new Set(
      questions.map((q) => q.topic_id).filter(Boolean) as string[],
    );
    return topics
      .filter((t) => usedIds.has(t.id))
      .sort((a, b) => a.sort_order - b.sort_order);
  }, [questions, topics]);

  const availablePaperTypes = React.useMemo(() => {
    const set = new Set<string>(paperTypes);
    for (const q of questions) {
      if (q.paper_type) set.add(q.paper_type);
    }
    return Array.from(set);
  }, [paperTypes, questions]);

  const availableCommandTerms = React.useMemo(() => {
    const set = new Set<string>();
    for (const q of questions) {
      if (q.command_term) set.add(q.command_term);
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [questions]);

  const filteredQuestions = React.useMemo(() => {
    const trimmed = searchQuery.trim().toLowerCase();
    const tokens = trimmed ? trimmed.split(/\s+/).filter(Boolean) : [];

    return questions.filter((q) => {
      if (topicFilter !== 'all' && q.topic_id !== topicFilter) return false;
      if (paperFilter !== 'all' && q.paper_type !== paperFilter) return false;
      if (
        commandTermFilter !== 'all' &&
        q.command_term !== commandTermFilter
      ) {
        return false;
      }

      if (tokens.length > 0) {
        const topic = q.topic_id ? topicMap[q.topic_id] : undefined;
        const markschemeKeywords = q.markscheme.marking_points
          .map((pt) => `${pt.code} ${pt.criterion} ${(pt.keywords ?? []).join(' ')}`)
          .join(' ');
        const haystack = [
          q.question_markdown,
          q.stimulus_markdown ?? '',
          q.command_term,
          q.paper_type,
          q.difficulty,
          topic ? `${topic.code} ${topic.title}` : '',
          markschemeKeywords,
          q.markscheme.model_answer,
        ]
          .join(' ')
          .toLowerCase();

        if (!tokens.every((token) => haystack.includes(token))) {
          return false;
        }
      }

      return true;
    });
  }, [
    questions,
    searchQuery,
    topicFilter,
    paperFilter,
    commandTermFilter,
    topicMap,
  ]);

  // Reset to page 1 when filters or search change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, topicFilter, paperFilter, commandTermFilter]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredQuestions.length / PAGE_SIZE),
  );
  const safePage = Math.min(currentPage, totalPages);

  const visibleQuestions = React.useMemo(() => {
    if (showAll || filteredQuestions.length <= PAGE_SIZE) {
      return filteredQuestions;
    }
    const start = (safePage - 1) * PAGE_SIZE;
    return filteredQuestions.slice(start, start + PAGE_SIZE);
  }, [filteredQuestions, safePage, showAll]);

  const hasFilters =
    searchQuery.trim().length > 0 ||
    topicFilter !== 'all' ||
    paperFilter !== 'all' ||
    commandTermFilter !== 'all';

  const rangeStart =
    filteredQuestions.length === 0
      ? 0
      : showAll
        ? 1
        : (safePage - 1) * PAGE_SIZE + 1;
  const rangeEnd = showAll
    ? filteredQuestions.length
    : Math.min(safePage * PAGE_SIZE, filteredQuestions.length);

  return (
    <div className="space-y-5">
      {/* Search & Filter Bar */}
      <div className="glass-surface flex flex-col gap-3 rounded-2xl p-3.5">
        <div className="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
          {/* Keyword Search Input */}
          <div className="glass-pill flex h-8.5 w-full items-center gap-2 rounded-xl px-3 lg:max-w-sm">
            <Search
              className="h-3.5 w-3.5 shrink-0 text-[#525866] dark:text-[#9AA3B2]"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions, topics, or markscheme terms…"
              aria-label="Search questions"
              className="w-full bg-transparent text-xs text-[#111318] placeholder:text-[#525866] focus:outline-none dark:text-[#F5F7FA] dark:placeholder:text-[#9AA3B2]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear question search"
                className="inline-flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#525866] hover:bg-black/[0.06] hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:bg-white/[0.1] dark:hover:text-[#F5F7FA]"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-[#525866] dark:text-[#9AA3B2]">
            <span className="tabular-nums">
              {filteredQuestions.length} of {questions.length} questions
              {!showAll && filteredQuestions.length > PAGE_SIZE
                ? ` · showing ${rangeStart}–${rangeEnd}`
                : ''}
            </span>
            {filteredQuestions.length > PAGE_SIZE && (
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="glass-pill cursor-pointer rounded-full px-2.5 py-0.5 font-sans text-[11px] font-medium text-[#111318] transition-colors hover:bg-white/95 dark:text-[#F5F7FA] dark:hover:bg-white/[0.14]"
              >
                {showAll
                  ? `Paginate (${PAGE_SIZE}/page)`
                  : `Show All (${filteredQuestions.length})`}
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:flex sm:flex-wrap sm:items-center">
          <div className="sm:w-52">
            <Select value={topicFilter} onValueChange={setTopicFilter}>
              <SelectTrigger aria-label="Filter by topic">
                <SelectValue placeholder="All topics" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All topics</SelectItem>
                {availableTopics.map((t) => (
                  <SelectItem key={t.id} value={t.id}>
                    {t.code} · {t.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="sm:w-52">
            <Select value={paperFilter} onValueChange={setPaperFilter}>
              <SelectTrigger aria-label="Filter by paper type">
                <SelectValue placeholder="All paper types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All paper types</SelectItem>
                {availablePaperTypes.map((paper) => (
                  <SelectItem key={paper} value={paper}>
                    {paper}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="sm:w-44">
            <Select
              value={commandTermFilter}
              onValueChange={setCommandTermFilter}
            >
              <SelectTrigger aria-label="Filter by command term">
                <SelectValue placeholder="All command terms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All command terms</SelectItem>
                {availableCommandTerms.map((term) => (
                  <SelectItem key={term} value={term}>
                    {term}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {hasFilters && (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                setSearchQuery('');
                setTopicFilter('all');
                setPaperFilter('all');
                setCommandTermFilter('all');
              }}
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset</span>
            </Button>
          )}
        </div>
      </div>

      {/* Question Cards */}
      {visibleQuestions.length > 0 ? (
        <>
          <div className="space-y-4">
            {visibleQuestions.map((question) => {
              const topic = question.topic_id
                ? topicMap[question.topic_id]
                : undefined;
              const topicLabel = topic ? `${topic.code}` : undefined;
              return (
                <QuestionCard
                  key={question.id}
                  question={question}
                  topicLabel={topicLabel}
                  initialAttempt={attemptsByQuestionId[question.id] ?? null}
                  onAttemptSaved={onAttemptSaved}
                />
              );
            })}
          </div>

          {/* Smooth Client-Side Pagination Footer */}
          {!showAll && filteredQuestions.length > PAGE_SIZE && (
            <nav
              aria-label="Question bank pagination"
              className="glass-surface flex flex-wrap items-center justify-between gap-3 rounded-2xl px-4 py-3"
            >
              <span className="font-mono text-xs tabular-nums text-[#525866] dark:text-[#9AA3B2]">
                Page {safePage} of {totalPages} ({rangeStart}–{rangeEnd} of{' '}
                {filteredQuestions.length})
              </span>

              <div className="flex flex-wrap items-center gap-1.5">
                <Button
                  size="sm"
                  variant="outline"
                  disabled={safePage <= 1}
                  onClick={() => {
                    setCurrentPage((p) => Math.max(1, p - 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  <span>Prev</span>
                </Button>

                {Array.from({ length: totalPages }, (_, idx) => idx + 1)
                  .filter(
                    (p) =>
                      p === 1 ||
                      p === totalPages ||
                      Math.abs(p - safePage) <= 1,
                  )
                  .map((pageNum, idx, arr) => {
                    const prevNum = arr[idx - 1];
                    const showEllipsis = prevNum && pageNum - prevNum > 1;
                    return (
                      <React.Fragment key={pageNum}>
                        {showEllipsis && (
                          <span className="px-1 font-mono text-xs text-[#525866] dark:text-[#9AA3B2]">
                            …
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={() => {
                            setCurrentPage(pageNum);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          aria-current={
                            pageNum === safePage ? 'page' : undefined
                          }
                          className={`inline-flex h-8 min-w-8 cursor-pointer items-center justify-center rounded-xl px-2 font-mono text-xs font-medium transition-all ${
                            pageNum === safePage
                              ? 'bg-[#111318] text-white shadow-sm dark:bg-[#F5F7FA] dark:text-[#0B0D12]'
                              : 'glass-pill text-[#525866] hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:text-[#F5F7FA]'
                          }`}
                        >
                          {pageNum}
                        </button>
                      </React.Fragment>
                    );
                  })}

                <Button
                  size="sm"
                  variant="outline"
                  disabled={safePage >= totalPages}
                  onClick={() => {
                    setCurrentPage((p) => Math.min(totalPages, p + 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <span>Next</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Button>

                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setShowAll(true)}
                >
                  Show All
                </Button>
              </div>
            </nav>
          )}
        </>
      ) : (
        <div className="glass-surface rounded-2xl border-dashed px-6 py-10 text-center">
          <p className="text-sm font-medium text-[#111318] dark:text-[#F5F7FA]">
            No questions match the current filters.
          </p>
          <p className="mt-1 text-xs text-[#525866] dark:text-[#9AA3B2]">
            Reset the filters above or generate new IB questions from Classroom
            Materials.
          </p>
        </div>
      )}
    </div>
  );
}
