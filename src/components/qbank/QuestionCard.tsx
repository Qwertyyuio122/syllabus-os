'use client';

import * as React from 'react';
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Eye,
  Loader2,
  Sigma,
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

interface MathSymbolSnippet {
  id: string;
  display: string;
  name: string;
  title: string;
  insert: string;
  wrap?: [string, string];
  cursorOffsetFromEnd?: number;
}

const MATH_SYMBOL_SNIPPETS: MathSymbolSnippet[] = [
  {
    id: 'arrow',
    display: '→',
    name: 'Reaction arrow',
    title: 'Insert reaction / implication arrow',
    insert: '$\\rightarrow$',
  },
  {
    id: 'eq',
    display: '⇌',
    name: 'Equilibrium',
    title: 'Insert reversible equilibrium arrow',
    insert: '$\\rightleftharpoons$',
  },
  {
    id: 'enthalpy',
    display: 'ΔH°',
    name: 'Enthalpy',
    title: 'Insert standard enthalpy change',
    insert: '$\\Delta H^\\circ$',
  },
  {
    id: 'fraction',
    display: 'a/b',
    name: 'Fraction',
    title: 'Insert formatted fraction',
    insert: '$\\frac{}{}$',
    cursorOffsetFromEnd: 3,
  },
  {
    id: 'chem',
    display: 'H₂O',
    name: 'Formula',
    title: 'Insert chemical formula',
    insert: '$\\ce{}$',
    wrap: ['$\\ce{', '}$'],
    cursorOffsetFromEnd: 2,
  },
  {
    id: 'pm',
    display: '±',
    name: 'Uncertainty',
    title: 'Insert plus-minus symbol',
    insert: '$\\pm$',
  },
  {
    id: 'inline-math',
    display: 'x²',
    name: 'Math',
    title: 'Wrap selection or insert inline math',
    insert: '$x$',
    wrap: ['$', '$'],
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
  const [symbolsOpen, setSymbolsOpen] = React.useState(false);
  const [previewOpen, setPreviewOpen] = React.useState(false);

  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
  const symbolsPopoverRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    setAttempt(initialAttempt);
  }, [initialAttempt]);

  React.useEffect(() => {
    if (!symbolsOpen) return;
    const handlePointerDown = (e: MouseEvent) => {
      if (
        symbolsPopoverRef.current &&
        !symbolsPopoverRef.current.contains(e.target as Node)
      ) {
        setSymbolsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSymbolsOpen(false);
      }
    };
    document.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [symbolsOpen]);

  const insertSymbolSnippet = (snippet: MathSymbolSnippet) => {
    setSymbolsOpen(false);
    const textarea = textareaRef.current;
    if (!textarea) {
      setOpenResponse((prev) => `${prev}${prev ? ' ' : ''}${snippet.insert}`);
      return;
    }

    const start = textarea.selectionStart ?? openResponse.length;
    const end = textarea.selectionEnd ?? openResponse.length;
    const selected = openResponse.slice(start, end);

    const wrappedSelection = Boolean(selected && snippet.wrap);
    const replacement =
      wrappedSelection && snippet.wrap
        ? `${snippet.wrap[0]}${selected}${snippet.wrap[1]}`
        : snippet.insert;

    const nextText =
      openResponse.slice(0, start) + replacement + openResponse.slice(end);
    setOpenResponse(nextText);

    requestAnimationFrame(() => {
      textarea.focus();
      const offsetFromEnd = wrappedSelection
        ? 0
        : (snippet.cursorOffsetFromEnd ?? 0);
      const cursorPos = start + replacement.length - offsetFromEnd;
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
    <Card className="overflow-visible">
      <CardContent className="space-y-4 p-5 sm:p-6">
        {/* Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] pb-3.5 dark:border-white/[0.08]">
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
          <div className="glass-surface rounded-2xl p-4 text-sm leading-relaxed text-[#111318] dark:text-[#F5F7FA]">
            <div className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-[#525866] dark:text-[#9AA3B2]">
              Stimulus / Data
            </div>
            <MarkdownMath content={question.stimulus_markdown} />
          </div>
        )}

        {/* Question Prompt */}
        <div className="text-[15px] leading-relaxed text-[#111318] dark:text-[#F5F7FA]">
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
                  className={`flex cursor-pointer items-start gap-3 rounded-2xl px-4 py-3 text-sm transition-all ${
                    checked
                      ? 'glass-panel border-[#111318]/35 bg-white/95 dark:border-white/30 dark:bg-white/[0.13]'
                      : 'glass-surface glass-interactive'
                  }`}
                >
                  <input
                    type="radio"
                    name={`mcq-${question.id}`}
                    value={opt.label}
                    checked={checked}
                    onChange={() => setSelectedMcq(opt.label)}
                    className="mt-1 h-4 w-4 accent-[#111318] dark:accent-[#F5F7FA]"
                  />
                  <span className="mt-0.5 font-mono text-xs font-semibold text-[#525866] dark:text-[#9AA3B2]">
                    {opt.label}.
                  </span>
                  <div className="min-w-0 flex-1 text-[#111318] dark:text-[#F5F7FA]">
                    <MarkdownMath content={opt.text} />
                  </div>
                </label>
              );
            })}
          </fieldset>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-medium text-[#525866] dark:text-[#9AA3B2]">
                Your response
              </span>
            </div>

            <div className="glass-surface relative rounded-2xl transition-colors focus-within:border-[#111318]/35 dark:focus-within:border-white/25">
              <textarea
                ref={textareaRef}
                value={openResponse}
                onChange={(e) => setOpenResponse(e.target.value)}
                rows={5}
                placeholder={`Write your IB response addressing the command term "${question.command_term}"…`}
                aria-label="Your answer"
                className="w-full resize-y rounded-t-2xl bg-transparent p-3.5 text-sm leading-relaxed text-[#111318] placeholder:text-[#525866] focus:outline-none dark:text-[#F5F7FA] dark:placeholder:text-[#9AA3B2]"
              />

              {/* Clean Editor Footer: Symbol Popover & Preview Toggle */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-black/[0.06] px-3 py-2 dark:border-white/[0.08]">
                <div className="relative" ref={symbolsPopoverRef}>
                  <button
                    type="button"
                    aria-expanded={symbolsOpen}
                    onClick={() => setSymbolsOpen((v) => !v)}
                    className="glass-pill inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-2.5 text-xs font-medium text-[#525866] transition-colors hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:text-[#F5F7FA]"
                  >
                    <Sigma className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>fx Symbols</span>
                  </button>

                  {symbolsOpen && (
                    <div
                      role="dialog"
                      aria-label="Insert mathematical or chemical symbol"
                      className="glass-panel absolute bottom-full left-0 z-30 mb-2 w-72 rounded-2xl p-2"
                    >
                      <div className="px-2 pb-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#525866] dark:text-[#9AA3B2]">
                        Insert formatted notation
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        {MATH_SYMBOL_SNIPPETS.map((snippet) => (
                          <button
                            key={snippet.id}
                            type="button"
                            title={snippet.title}
                            onClick={() => insertSymbolSnippet(snippet)}
                            className="flex cursor-pointer items-center gap-2 rounded-xl px-2.5 py-1.5 text-left text-xs text-[#111318] transition-colors hover:bg-black/[0.05] dark:text-[#F5F7FA] dark:hover:bg-white/[0.08]"
                          >
                            <span className="glass-pill inline-flex h-6 min-w-6 items-center justify-center rounded-lg px-1.5 font-medium">
                              {snippet.display}
                            </span>
                            <span className="truncate text-[11px] text-[#525866] dark:text-[#9AA3B2]">
                              {snippet.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  aria-pressed={previewOpen}
                  onClick={() => setPreviewOpen((v) => !v)}
                  className={`inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-2.5 text-xs font-medium transition-all ${
                    previewOpen
                      ? 'bg-[#111318] text-white dark:bg-[#F5F7FA] dark:text-[#0B0D12]'
                      : 'glass-pill text-[#525866] hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:text-[#F5F7FA]'
                  }`}
                >
                  <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{previewOpen ? 'Hide Preview' : 'Preview'}</span>
                </button>
              </div>
            </div>

            {previewOpen && (
              <div className="glass-surface rounded-2xl p-3.5 text-sm leading-relaxed text-[#111318] dark:text-[#F5F7FA]">
                <div className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-[#525866] dark:text-[#9AA3B2]">
                  Formatted Preview
                </div>
                {openResponse.trim() ? (
                  <MarkdownMath content={openResponse} />
                ) : (
                  <p className="text-xs italic text-[#525866] dark:text-[#9AA3B2]">
                    Start typing above to preview rendered equations and
                    formulas.
                  </p>
                )}
              </div>
            )}
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
            className="rounded-xl border border-red-700/20 bg-red-50/90 px-3.5 py-2.5 text-xs text-[#991B1B] dark:border-red-400/25 dark:bg-red-950/60 dark:text-[#FCA5A5]"
          >
            {submitError}
          </div>
        )}

        {/* IB Markscheme Grading Breakdown */}
        {attempt && attempt.grading_breakdown && (
          <div
            data-testid={`grading-breakdown-${question.id}`}
            className="glass-surface space-y-3 rounded-2xl p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#111318] dark:text-[#F5F7FA]">
                IB Markscheme Breakdown
              </h4>
              <span className="glass-pill rounded-full px-2.5 py-0.5 font-mono text-xs font-semibold text-[#111318] dark:text-[#F5F7FA]">
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
                      className="glass-pill rounded-xl px-3.5 py-2.5 text-xs"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2">
                          {awardedFull ? (
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#065F46] dark:text-[#6EE7B7]" />
                          ) : (
                            <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#991B1B] dark:text-[#FCA5A5]" />
                          )}
                          <div>
                            <span className="mr-1.5 font-mono font-semibold text-[#111318] dark:text-[#F5F7FA]">
                              [{pt.code}]
                            </span>
                            <span className="text-[#111318] dark:text-[#F5F7FA]">
                              {pt.criterion}
                            </span>
                          </div>
                        </div>
                        <span className="shrink-0 font-mono text-[11px] text-[#525866] dark:text-[#9AA3B2]">
                          {pt.awarded}
                          {pt.max_marks !== undefined ? `/${pt.max_marks}` : ''}{' '}
                          m
                        </span>
                      </div>
                      {pt.feedback && (
                        <p className="mt-1 pl-5.5 text-[#525866] dark:text-[#9AA3B2]">
                          {pt.feedback}
                        </p>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}

            {attempt.grading_breakdown.command_term_feedback && (
              <div className="glass-pill rounded-xl px-3.5 py-2.5 text-xs text-[#111318] dark:text-[#F5F7FA]">
                <span className="font-semibold">
                  Command term ({question.command_term}):{' '}
                </span>
                <span className="text-[#525866] dark:text-[#9AA3B2]">
                  {attempt.grading_breakdown.command_term_feedback}
                </span>
              </div>
            )}

            {attempt.grading_breakdown.missing_keywords?.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-medium text-[#525866] dark:text-[#9AA3B2]">
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
          <div className="glass-surface rounded-2xl p-4 text-sm">
            <div className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-[#525866] dark:text-[#9AA3B2]">
              Full-Mark Model Answer
            </div>
            <MarkdownMath content={modelAnswerText} />
            {question.markscheme.examiner_notes && (
              <div className="mt-3 border-t border-black/[0.06] pt-2.5 text-xs text-[#525866] dark:border-white/[0.08] dark:text-[#9AA3B2]">
                <span className="font-semibold text-[#111318] dark:text-[#F5F7FA]">
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
