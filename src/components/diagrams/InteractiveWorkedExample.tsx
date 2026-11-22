'use client';

import React, { useMemo, useState } from 'react';
import {
  AlertTriangle,
  Award,
  CheckCircle2,
  ChevronRight,
  Eye,
  RotateCcw,
} from 'lucide-react';
import type { WorkedExampleSpec } from '@/types/diagrams';
import { InlineKaTeX, MarkdownMath } from '@/components/notes/MarkdownMath';

export interface InteractiveWorkedExampleProps {
  spec: WorkedExampleSpec;
}

export function InteractiveWorkedExample({
  spec,
}: InteractiveWorkedExampleProps) {
  const sortedSteps = useMemo(
    () => [...spec.steps].sort((a, b) => a.stepNumber - b.stepNumber),
    [spec.steps],
  );

  // Start with Step 1 visible so students immediately see structure, or allow stepping up to N
  const [revealedCount, setRevealedCount] = useState<number>(1);
  const [showCommonTrap, setShowCommonTrap] = useState<boolean>(false);

  const allRevealed = revealedCount >= sortedSteps.length;
  const progressPct =
    sortedSteps.length > 0
      ? Math.round((Math.min(revealedCount, sortedSteps.length) / sortedSteps.length) * 100)
      : 100;

  return (
    <div>
      {/* Header Strip: Source + Command Term + Marks + Reveal Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] bg-white/30 px-4 py-2.5 dark:border-white/[0.08] dark:bg-white/[0.02]">
        <div className="flex flex-wrap items-center gap-1.5">
          {spec.sourceLabel && (
            <span className="glass-pill rounded-full px-2.5 py-0.5 text-[11px] font-medium text-[#6E6E73] dark:text-[#98989D]">
              {spec.sourceLabel}
            </span>
          )}
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/12 px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-indigo-700 dark:text-indigo-300">
            Command: {spec.commandTerm}
          </span>
          <span className="glass-pill rounded-full px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
            [{spec.marks} {spec.marks === 1 ? 'mark' : 'marks'}]
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {!allRevealed && (
            <button
              type="button"
              onClick={() =>
                setRevealedCount((c) => Math.min(sortedSteps.length, c + 1))
              }
              className="inline-flex h-7 cursor-pointer items-center gap-1 rounded-full bg-[#1D1D1F] px-3 text-xs font-medium text-white shadow-sm transition-all hover:opacity-90 dark:bg-[#F5F5F7] dark:text-[#111113]"
            >
              <span>Reveal Next Step</span>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          )}
          <button
            type="button"
            onClick={() =>
              setRevealedCount(allRevealed ? 1 : sortedSteps.length)
            }
            className="glass-pill inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-3 text-xs font-medium text-[#1D1D1F] hover:bg-white/95 dark:text-[#F5F5F7]"
          >
            {allRevealed ? (
              <>
                <RotateCcw className="h-3 w-3" aria-hidden="true" />
                <span>Reset to Step 1</span>
              </>
            ) : (
              <>
                <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Show All Steps</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Progress Hairline */}
      <div className="h-1 w-full bg-black/[0.04] dark:bg-white/[0.05]">
        <div
          className="h-full bg-indigo-600 transition-all duration-300 dark:bg-indigo-400"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <div className="space-y-4 p-4 sm:p-5">
        {/* Problem Statement & Given Data */}
        <div className="glass-surface rounded-2xl p-4">
          <div className="mb-1.5 font-mono text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
            Problem Statement
          </div>
          <MarkdownMath
            content={spec.problemMarkdown}
            className="text-[14px] leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
          />

          {spec.givenData && spec.givenData.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5 border-t border-black/[0.06] pt-3 dark:border-white/[0.08]">
              {spec.givenData.map((item, idx) => (
                <span
                  key={idx}
                  className="glass-pill rounded-full px-2.5 py-1 font-mono text-[11px] text-[#1D1D1F] dark:text-[#F5F5F7]"
                >
                  {typeof item === 'string' ? (
                    item
                  ) : (
                    <>
                      <span className="text-[#6E6E73] dark:text-[#98989D]">
                        {item.label}:{' '}
                      </span>
                      <span className="font-semibold">{item.value}</span>
                    </>
                  )}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Revealed Markscheme Steps */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10.5px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
              Markscheme Solution Steps ({Math.min(revealedCount, sortedSteps.length)} /{' '}
              {sortedSteps.length})
            </span>
          </div>

          {sortedSteps.slice(0, revealedCount).map((step) => (
            <div
              key={step.stepNumber}
              className="glass-surface rounded-2xl border-l-[3px] border-l-indigo-600 p-4 dark:border-l-indigo-400"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-indigo-600 px-2 font-mono text-[11px] font-bold text-white dark:bg-indigo-400 dark:text-[#0F172A]">
                    {step.stepNumber}
                  </span>
                  <h4 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                    {step.title}
                  </h4>
                </div>
                {step.markCode && (
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/12 px-2.5 py-0.5 font-mono text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
                    [{step.markCode}]
                  </span>
                )}
              </div>

              <MarkdownMath
                content={step.workingMarkdown}
                className="mt-2.5 text-[13.5px] leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
              />

              {step.formulaLatex && (
                <div className="mt-2.5 rounded-xl border border-black/[0.06] bg-white/55 px-3 py-2 text-center dark:border-white/[0.08] dark:bg-white/[0.03]">
                  <InlineKaTeX latex={step.formulaLatex} displayMode />
                </div>
              )}

              <div className="mt-2.5 border-t border-black/[0.06] pt-2 text-xs text-[#6E6E73] dark:border-white/[0.08] dark:text-[#98989D]">
                <strong className="text-[#1D1D1F] dark:text-[#F5F5F7]">
                  Examiner Rationale:
                </strong>{' '}
                {step.rationale}
              </div>
            </div>
          ))}
        </div>

        {/* Final Answer & Common Examiner Trap */}
        {allRevealed && (
          <div className="space-y-3">
            <div className="glass-surface rounded-2xl border-l-[3px] border-l-emerald-600 bg-emerald-500/[0.06] p-4 dark:border-l-emerald-400 dark:bg-emerald-400/[0.08]">
              <div className="flex items-center gap-1.5 font-mono text-[10.5px] font-semibold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                Final IB Markscheme Answer
              </div>
              <MarkdownMath
                content={spec.finalAnswerMarkdown}
                className="mt-1.5 text-[14px] leading-relaxed font-medium text-[#1D1D1F] dark:text-[#F5F5F7]"
              />
            </div>

            {spec.commonTrapMarkdown && (
              <div className="glass-surface rounded-2xl border-l-[3px] border-l-amber-600 p-4 dark:border-l-amber-400">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 font-mono text-[10.5px] font-semibold tracking-wider text-amber-700 uppercase dark:text-amber-300">
                    <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
                    Common Examiner Trap
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowCommonTrap((p) => !p)}
                    className="glass-pill cursor-pointer rounded-full px-2.5 py-0.5 font-mono text-[10px] font-medium text-[#1D1D1F] dark:text-[#F5F5F7]"
                  >
                    {showCommonTrap ? 'Hide Trap' : 'Inspect Trap'}
                  </button>
                </div>
                {showCommonTrap ? (
                  <MarkdownMath
                    content={spec.commonTrapMarkdown}
                    className="mt-2 text-xs leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
                  />
                ) : (
                  <p className="mt-1 text-xs text-[#6E6E73] dark:text-[#98989D]">
                    Click &ldquo;Inspect Trap&rdquo; to see the top mistake candidates lose marks on for this problem.
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {!allRevealed && (
          <div className="flex items-center justify-between rounded-2xl border border-dashed border-black/15 px-4 py-3 text-xs text-[#6E6E73] dark:border-white/15 dark:text-[#98989D]">
            <span className="inline-flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5" aria-hidden="true" />
              Try solving the next step before revealing the markscheme line.
            </span>
            <button
              type="button"
              onClick={() =>
                setRevealedCount((c) => Math.min(sortedSteps.length, c + 1))
              }
              className="font-semibold text-indigo-700 underline-offset-2 hover:underline cursor-pointer dark:text-indigo-300"
            >
              Reveal Step {revealedCount + 1}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default InteractiveWorkedExample;
