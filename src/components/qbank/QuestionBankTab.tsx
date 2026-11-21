'use client';

import * as React from 'react';
import { RotateCcw } from 'lucide-react';
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
  const [topicFilter, setTopicFilter] = React.useState<string>(
    initialTopicId || 'all',
  );
  const [paperFilter, setPaperFilter] = React.useState<string>('all');
  const [commandTermFilter, setCommandTermFilter] =
    React.useState<string>('all');

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
    return questions.filter((q) => {
      if (topicFilter !== 'all' && q.topic_id !== topicFilter) return false;
      if (paperFilter !== 'all' && q.paper_type !== paperFilter) return false;
      if (
        commandTermFilter !== 'all' &&
        q.command_term !== commandTermFilter
      ) {
        return false;
      }
      return true;
    });
  }, [questions, topicFilter, paperFilter, commandTermFilter]);

  const hasFilters =
    topicFilter !== 'all' ||
    paperFilter !== 'all' ||
    commandTermFilter !== 'all';

  return (
    <div className="space-y-5">
      {/* Filter Bar */}
      <div className="glass-surface flex flex-col gap-3 rounded-2xl p-3.5 sm:flex-row sm:items-center sm:justify-between">
        <div className="grid grid-cols-1 gap-2 sm:flex sm:flex-1 sm:flex-wrap sm:items-center">
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

        <div className="shrink-0 font-mono text-xs text-[#787774] dark:text-[#9B9A97]">
          {filteredQuestions.length} of {questions.length} questions
        </div>
      </div>

      {/* Question Cards */}
      {filteredQuestions.length > 0 ? (
        <div className="space-y-4">
          {filteredQuestions.map((question) => {
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
      ) : (
        <div className="glass-surface rounded-2xl border-dashed px-6 py-10 text-center">
          <p className="text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
            No questions match the current filters.
          </p>
          <p className="mt-1 text-xs text-[#6E6E73] dark:text-[#98989D]">
            Reset the filters above or generate new IB questions from Classroom
            Materials.
          </p>
        </div>
      )}
    </div>
  );
}
