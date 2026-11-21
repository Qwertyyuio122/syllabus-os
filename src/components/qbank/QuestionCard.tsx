'use client';

import * as React from 'react';
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Loader2,
  XCircle,
} from 'lucide-react';
import { MarkdownMath } from '@/components/notes/MarkdownMath';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { QuestionAttemptRow, QuestionRow } from '@/types/database';
import { EmbeddedTutorChat } from './EmbeddedTutorChat';

interface QuestionCardProps {
  question: QuestionRow;
  topicLabel?: string;
  initialAttempt?: QuestionAttemptRow | null;
  onAttemptSaved?: (attempt: QuestionAttemptRow) => void;
}

const MATH_INSERT_SNIPPETS: {
  label: string;
  title: string;
  insert: string;
  wrap?: [string, string];
}[] = [
  {
    label: '$...$',
    title: 'Wrap or insert inline LaTeX',
    insert: '$x$',
    wrap: ['$', '$'],
  },
  {
    label: '\\rightarrow',
    title: 'Insert reaction/implication arrow',
    insert: '$\\rightarrow$',
  },
  {
    label: '\\Delta H^\\circ',
    title: 'Insert standard enthalpy change',
    insert: '$\\Delta H^\\circ$',
  },
  {
    label: '\\frac{}{}',
    title: 'Insert fraction',
    insert: '$\\frac{}{}$',
  },
  {
    label: '\\ce{}',
    title: 'Insert chemical formula via mhchem',
    insert: '$\\ce{}$',
    wrap: ['$\\ce{', '}$'],
  },
];

export function QuestionCard({
  question,
  topicLabel,
  initialAttempt = null,
  onAttemptSaved,
}: QuestionCardProps) {
  const isMcq =
    Array.isArray(question.mcq_options) && question.mcq_options.length > 0;

  const [attempt, setAttempt] = React.useState<QuestionAttemptRow | null>(
    initialAttempt,
  );
  const [selectedMcq, setSelectedMcq] = React.useState<string>(() => {
    if (!initialAttempt?.user_answer || !isMcq) return '';
    return initialAttempt.user_answer.split(':')[0]?.trim() || '';
  });
  const [openResponse, setOpenResponse] = React.useState<string>(
    !isMcq ? (initialAttempt?.user_answer ?? '') : '',
  );
  const [submitting, setSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [showModelAnswer, setShowModelAnswer] = React.useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);

  React.useEffect(() => {
    setAttempt(initialAttempt);
  }, [initialAttempt]);

  const insertLatexSnippet = (snippet: (typeof MATH_INSERT_SNIPPETS)[number]) => {
    const textarea = textareaRef.current;
    if (!textarea) {
      setOpenResponse((prev) => `${prev}${prev ? ' ' : ''}${snippet.insert}`);
      return;
    }

    const start = textarea.selectionStart ?? openResponse.length;
    const end = textarea.selectionEnd ?? openResponse.length;
    const selected = openResponse.slice(start, end);

    const replacement =
      selected && snippet.wrap
        ? `${snippet.wrap[0]}${selected}${snippet.wrap[1]}`
        : snippet.insert;

    const nextText =
      openResponse.slice(0, start) + replacement + openResponse.slice(end);
    setOpenResponse(nextText);

    requestAnimationFrame(() => {
      textarea.focus();
      const cursorPos = start + replacement.length;
      textarea.setSelectionRange(cursorPos, cursorPos);
    });
  };

  const handleSubmit = async () => {
    const answerToSubmit = isMcq
      ? (() => {
          const opt = question.mcq_options?.find(
            (o) => o.label === selectedMcq,
          );
          return opt ? `${opt.label}: ${opt.text}` : selectedMcq;
        })()
      : openResponse.trim();

    if (!answerToSubmit || submitting) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch('/api/grade/question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionId: question.id,
          userAnswer: answerToSubmit,
        }),
      });

      const payload = (await res.json()) as {
        error?: string;
        attempt?: QuestionAttemptRow;
      };

      if (!res.ok || !payload.attempt) {
        throw new Error(payload.error || 'Failed to grade response');
      }

      setAttempt(payload.attempt);
      onAttemptSaved?.(payload.attempt);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Could not grade response. Please try again.',
      );
    } finally {
      setSubmitting(false);
    }
  };

  const modelAnswerText =
    attempt?.grading_breakdown?.model_answer ||
    question.markscheme.model_answer;

  return (
    <Card className="overflow-hidden">
      <CardContent className="space-y-4 p-4 sm:p-5">
        {/* Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E6E6E4] pb-3 dark:border-[#2E2E2E]">
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge variant="default">{question.paper_type}</Badge>
            <Badge variant="outline" className="font-mono">
              {question.command_term}
            </Badge>
            <Badge variant="subtle">{question.difficulty}</Badge>
            {topicLabel && (
              <Badge variant="subtle" className="font-mono">
                {topicLabel}
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2">
            {attempt && (
              <Badge
                variant={
                  attempt.awarded_marks === attempt.max_marks
                    ? 'success'
                    : 'warning'
                }
                className="font-mono"
              >
                Scored {attempt.awarded_marks} / {attempt.max_marks}
              </Badge>
            )}
            <Badge variant="outline" className="font-mono">
              [{question.max_marks}{' '}
              {question.max_marks === 1 ? 'mark' : 'marks'}]
            </Badge>
          </div>
        </div>

        {/* Stimulus */}
        {question.stimulus_markdown && (
          <div className="rounded-md border border-[#E6E6E4] bg-[#FBFBFA] p-3.5 text-sm leading-relaxed text-[#37352F] dark:border-[#2E2E2E] dark:bg-[#202020] dark:text-[#EBEBEB]">
            <div className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-[#787774] dark:text-[#9B9A97]">
              Stimulus / Data
            </div>
            <MarkdownMath content={question.stimulus_markdown} />
          </div>
        )}

        {/* Question Prompt */}
        <div className="text-sm leading-relaxed text-[#37352F] dark:text-[#EBEBEB]">
          <MarkdownMath content={question.question_markdown} />
        </div>

        {/* Student Response Area */}
        {isMcq && question.mcq_options ? (
          <fieldset className="space-y-2">
            <legend className="sr-only">Select one option</legend>
            {question.mcq_options.map((opt) => {
              const checked = selectedMcq === opt.label;
              return (
                <label
                  key={opt.label}
                  className={`flex cursor-pointer items-start gap-3 rounded-md border px-3.5 py-2.5 text-sm transition-colors ${
                    checked
                      ? 'border-[#37352F] bg-[#F1F1EF] dark:border-[#EBEBEB] dark:bg-[#2A2A2A]'
                      : 'border-[#E6E6E4] bg-white hover:bg-[#FBFBFA] dark:border-[#2E2E2E] dark:bg-[#191919] dark:hover:bg-[#202020]'
                  }`}
                >
                  <input
                    type="radio"
                    name={`mcq-${question.id}`}
                    value={opt.label}
                    checked={checked}
                    onChange={() => setSelectedMcq(opt.label)}
                    className="mt-1 h-4 w-4 accent-[#37352F] dark:accent-[#EBEBEB]"
                  />
                  <span className="font-mono text-xs font-semibold text-[#787774] dark:text-[#9B9A97] mt-0.5">
                    {opt.label}.
                  </span>
                  <div className="min-w-0 flex-1 text-[#37352F] dark:text-[#EBEBEB]">
                    <MarkdownMath content={opt.text} />
                  </div>
                </label>
              );
            })}
          </fieldset>
        ) : (
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-medium text-[#787774] dark:text-[#9B9A97]">
                Your response
              </span>
              <div className="flex flex-wrap items-center gap-1">
                {MATH_INSERT_SNIPPETS.map((snippet) => (
                  <button
                    key={snippet.label}
                    type="button"
                    title={snippet.title}
                    onClick={() => insertLatexSnippet(snippet)}
                    className="rounded border border-[#E6E6E4] bg-[#FBFBFA] px-1.5 py-0.5 font-mono text-[11px] text-[#37352F] transition-colors hover:bg-[#F1F1EF] cursor-pointer dark:border-[#2E2E2E] dark:bg-[#202020] dark:text-[#EBEBEB] dark:hover:bg-[#2A2A2A]"
                  >
                    {snippet.label}
                  </button>
                ))}
              </div>
            </div>
            <textarea
              ref={textareaRef}
              value={openResponse}
              onChange={(e) => setOpenResponse(e.target.value)}
              rows={5}
              placeholder={`Write your IB response addressing the command term "${question.command_term}"…`}
              aria-label="Your answer"
              className="w-full resize-y rounded-md border border-[#E6E6E4] bg-white p-3 text-sm leading-relaxed text-[#37352F] placeholder:text-[#787774] focus:border-[#37352F] focus:outline-none dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB] dark:placeholder:text-[#9B9A97] dark:focus:border-[#EBEBEB]"
            />
          </div>
        )}

        {/* Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="primary"
              size="md"
              disabled={
                submitting ||
                (isMcq ? !selectedMcq : openResponse.trim().length === 0)
              }
              onClick={() => void handleSubmit()}
            >
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              <span>
                {submitting ? 'Grading…' : 'Submit to IB Examiner'}
              </span>
            </Button>

            <Button
              variant="outline"
              size="md"
              onClick={() => setShowModelAnswer((v) => !v)}
            >
              {showModelAnswer ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
              <span>
                {showModelAnswer ? 'Hide Model Answer' : 'Model Answer'}
              </span>
            </Button>
          </div>
        </div>

        {submitError && (
          <div
            role="alert"
            className="rounded-md border border-[#E6D0D0] bg-[#FAF2F2] px-3 py-2 text-xs text-[#9B3B3B] dark:border-[#4A2E2E] dark:bg-[#291F1F] dark:text-[#E59898]"
          >
            {submitError}
          </div>
        )}

        {/* IB Markscheme Grading Breakdown */}
        {attempt && attempt.grading_breakdown && (
          <div
            data-testid={`grading-breakdown-${question.id}`}
            className="space-y-3 rounded-md border border-[#E6E6E4] bg-[#FBFBFA] p-3.5 dark:border-[#2E2E2E] dark:bg-[#202020]"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#37352F] dark:text-[#EBEBEB]">
                IB Markscheme Breakdown
              </h4>
              <span className="font-mono text-xs font-semibold text-[#37352F] dark:text-[#EBEBEB]">
                {attempt.awarded_marks} / {attempt.max_marks} marks awarded
              </span>
            </div>

            {attempt.grading_breakdown.point_results?.length > 0 && (
              <ul className="space-y-2">
                {attempt.grading_breakdown.point_results.map((pt, idx) => {
                  const awardedFull = pt.awarded > 0;
                  return (
                    <li
                      key={`${pt.code}-${idx}`}
                      className="rounded border border-[#E6E6E4] bg-white px-3 py-2 text-xs dark:border-[#2E2E2E] dark:bg-[#191919]"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2">
                          {awardedFull ? (
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2F5E44] dark:text-[#9FC3AD]" />
                          ) : (
                            <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9B3B3B] dark:text-[#E59898]" />
                          )}
                          <div>
                            <span className="mr-1.5 font-mono font-semibold text-[#37352F] dark:text-[#EBEBEB]">
                              [{pt.code}]
                            </span>
                            <span className="text-[#37352F] dark:text-[#EBEBEB]">
                              {pt.criterion}
                            </span>
                          </div>
                        </div>
                        <span className="shrink-0 font-mono text-[11px] text-[#787774] dark:text-[#9B9A97]">
                          {pt.awarded}
                          {pt.max_marks !== undefined ? `/${pt.max_marks}` : ''}{' '}
                          m
                        </span>
                      </div>
                      {pt.feedback && (
                        <p className="mt-1 pl-5.5 text-[#787774] dark:text-[#9B9A97]">
                          {pt.feedback}
                        </p>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}

            {attempt.grading_breakdown.command_term_feedback && (
              <div className="rounded border border-[#E6E6E4] bg-white px-3 py-2 text-xs text-[#37352F] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB]">
                <span className="font-semibold">Command term ({question.command_term}): </span>
                <span className="text-[#787774] dark:text-[#9B9A97]">
                  {attempt.grading_breakdown.command_term_feedback}
                </span>
              </div>
            )}

            {attempt.grading_breakdown.missing_keywords?.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-medium text-[#787774] dark:text-[#9B9A97]">
                  Missing markscheme terms:
                </span>
                {attempt.grading_breakdown.missing_keywords.map((kw) => (
                  <Badge key={kw} variant="warning" className="font-mono">
                    {kw}
                  </Badge>
                ))}
              </div>
            )}

            <EmbeddedTutorChat
              attempt={attempt}
              onAttemptUpdated={(nextAttempt) => {
                setAttempt(nextAttempt);
                onAttemptSaved?.(nextAttempt);
              }}
            />
          </div>
        )}

        {/* Toggleable Full-Mark Model Answer */}
        {showModelAnswer && (
          <div className="rounded-md border border-[#E6E6E4] bg-[#FBFBFA] p-3.5 text-sm dark:border-[#2E2E2E] dark:bg-[#202020]">
            <div className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-[#787774] dark:text-[#9B9A97]">
              Full-Mark Model Answer
            </div>
            <MarkdownMath content={modelAnswerText} />
            {question.markscheme.examiner_notes && (
              <div className="mt-3 border-t border-[#E6E6E4] pt-2.5 text-xs text-[#787774] dark:border-[#2E2E2E] dark:text-[#9B9A97]">
                <span className="font-semibold text-[#37352F] dark:text-[#EBEBEB]">
                  Examiner notes:{' '}
                </span>
                {question.markscheme.examiner_notes}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
