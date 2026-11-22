'use client';

import React, { useMemo, useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Eye,
  EyeOff,
  Lightbulb,
  Search,
  X,
} from 'lucide-react';
import type { ConceptComparisonMatrixSpec } from '@/types/diagrams';
import { MarkdownMath } from '@/components/notes/MarkdownMath';

export interface ConceptComparisonMatrixProps {
  spec: ConceptComparisonMatrixSpec;
}

export function ConceptComparisonMatrix({
  spec,
}: ConceptComparisonMatrixProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [blurMode, setBlurMode] = useState(false);
  const [revealedCells, setRevealedCells] = useState<Set<string>>(
    () => new Set(),
  );
  const [expandedTips, setExpandedTips] = useState<Set<number>>(
    () => new Set(),
  );

  const { criterionHeader, valueHeaders, valueColCount } = useMemo(() => {
    const maxCells = Math.max(
      1,
      ...spec.rows.map((r) => (Array.isArray(r.cells) ? r.cells.length : 0)),
    );
    if (spec.columns.length === maxCells + 1) {
      return {
        criterionHeader: spec.columns[0],
        valueHeaders: spec.columns.slice(1),
        valueColCount: maxCells,
      };
    }
    return {
      criterionHeader: 'Criterion',
      valueHeaders: spec.columns,
      valueColCount: Math.max(spec.columns.length, maxCells),
    };
  }, [spec.columns, spec.rows]);

  const indexedRows = useMemo(
    () => spec.rows.map((row, idx) => ({ row, originalIdx: idx })),
    [spec.rows],
  );

  const filteredRows = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return indexedRows;
    return indexedRows.filter(({ row }) => {
      if (row.criterion.toLowerCase().includes(q)) return true;
      if (row.ibExamTip && row.ibExamTip.toLowerCase().includes(q)) return true;
      return row.cells.some((c) => c.toLowerCase().includes(q));
    });
  }, [indexedRows, searchQuery]);

  const rowsWithTips = useMemo(
    () => indexedRows.filter(({ row }) => Boolean(row.ibExamTip)),
    [indexedRows],
  );

  const totalTestableCells = spec.rows.length * valueColCount;

  const toggleBlurMode = () => {
    setBlurMode((prev) => {
      const next = !prev;
      if (next) {
        setRevealedCells(new Set());
      }
      return next;
    });
  };

  const toggleRevealCell = (cellKey: string) => {
    if (!blurMode) return;
    setRevealedCells((prev) => {
      const next = new Set(prev);
      if (next.has(cellKey)) {
        next.delete(cellKey);
      } else {
        next.add(cellKey);
      }
      return next;
    });
  };

  const toggleRowTip = (originalIdx: number) => {
    setExpandedTips((prev) => {
      const next = new Set(prev);
      if (next.has(originalIdx)) {
        next.delete(originalIdx);
      } else {
        next.add(originalIdx);
      }
      return next;
    });
  };

  const allTipsExpanded =
    rowsWithTips.length > 0 &&
    rowsWithTips.every(({ originalIdx }) => expandedTips.has(originalIdx));

  const toggleAllTips = () => {
    if (allTipsExpanded) {
      setExpandedTips(new Set());
    } else {
      setExpandedTips(new Set(rowsWithTips.map((r) => r.originalIdx)));
    }
  };

  const revealPct =
    totalTestableCells > 0
      ? Math.round((revealedCells.size / totalTestableCells) * 100)
      : 0;

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] bg-white/30 px-4 py-2.5 dark:border-white/[0.08] dark:bg-white/[0.02]">
        <div className="relative flex min-w-[200px] flex-1 items-center sm:max-w-xs">
          <Search
            className="pointer-events-none absolute left-3 h-3.5 w-3.5 text-[#6E6E73] dark:text-[#98989D]"
            aria-hidden="true"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter criteria or cells..."
            aria-label="Filter comparison matrix"
            className="glass-pill h-7 w-full rounded-full pr-7 pl-8 text-xs text-[#1D1D1F] placeholder:text-[#6E6E73] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20 dark:text-[#F5F5F7] dark:placeholder:text-[#98989D] dark:focus:ring-[#F5F5F7]/20"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              className="absolute right-1.5 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] dark:text-[#98989D] dark:hover:bg-white/[0.1] dark:hover:text-[#F5F5F7]"
            >
              <X className="h-3 w-3" aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {searchQuery.trim() && (
            <span className="glass-pill rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-indigo-700 dark:text-indigo-300">
              {filteredRows.length} / {spec.rows.length} rows
            </span>
          )}
          {blurMode && (
            <span className="glass-pill rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
              {revealedCells.size} / {totalTestableCells} revealed ({revealPct}%)
            </span>
          )}

          {rowsWithTips.length > 0 && (
            <button
              type="button"
              aria-expanded={allTipsExpanded}
              onClick={toggleAllTips}
              className="glass-pill inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-3 text-xs font-medium text-[#6E6E73] transition-colors hover:bg-white/95 hover:text-[#1D1D1F] dark:text-[#98989D] dark:hover:bg-white/[0.12] dark:hover:text-[#F5F5F7]"
            >
              <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" />
              {allTipsExpanded ? 'Hide IB Tips' : 'Show IB Tips'}
            </button>
          )}

          <button
            type="button"
            aria-pressed={blurMode}
            onClick={toggleBlurMode}
            className={`inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:focus-visible:ring-[#F5F5F7]/25 ${
              blurMode
                ? 'bg-[#1D1D1F] text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                : 'glass-pill text-[#1D1D1F] hover:bg-white/95 dark:text-[#F5F5F7] dark:hover:bg-white/[0.12]'
            }`}
          >
            {blurMode ? (
              <EyeOff className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <Eye className="h-3.5 w-3.5" aria-hidden="true" />
            )}
            Blur Cells to Self-Test
          </button>
        </div>
      </div>

      {blurMode && (
        <div className="h-1 w-full bg-black/[0.04] dark:bg-white/[0.05]">
          <div
            className="h-full bg-[#1D1D1F] transition-all duration-300 dark:bg-[#F5F5F7]"
            style={{ width: `${revealPct}%` }}
          />
        </div>
      )}

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        {filteredRows.length === 0 ? (
          <div className="px-4 py-8 text-center text-xs text-[#6E6E73] dark:text-[#98989D]">
            No rows match &ldquo;{searchQuery}&rdquo;.
          </div>
        ) : (
          <table className="w-full min-w-[540px] border-collapse text-left text-[13px]">
            <thead>
              <tr className="border-b border-black/[0.06] bg-black/[0.02] dark:border-white/[0.08] dark:bg-white/[0.03]">
                <th className="w-[24%] border-r border-black/[0.06] px-4 py-3 text-xs font-semibold text-[#6E6E73] dark:border-white/[0.08] dark:text-[#98989D]">
                  {criterionHeader}
                </th>
                {Array.from({ length: valueColCount }).map((_, colIdx) => (
                  <th
                    key={`col-${colIdx}`}
                    className="border-r border-black/[0.06] px-4 py-3 text-xs font-semibold text-[#1D1D1F] last:border-r-0 dark:border-white/[0.08] dark:text-[#F5F5F7]"
                  >
                    {valueHeaders[colIdx] ?? `Column ${colIdx + 1}`}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredRows.map(({ row, originalIdx }) => {
                const isTipOpen = expandedTips.has(originalIdx);
                const isSearchHighlighted = Boolean(searchQuery.trim());
                return (
                  <React.Fragment key={`row-${originalIdx}`}>
                    <tr
                      className={`border-b border-black/[0.06] transition-colors last:border-b-0 hover:bg-black/[0.025] dark:border-white/[0.08] dark:hover:bg-white/[0.03] ${
                        isSearchHighlighted
                          ? 'border-l-[3px] border-l-indigo-600 bg-indigo-500/[0.04] dark:border-l-indigo-400 dark:bg-indigo-400/[0.06]'
                          : ''
                      }`}
                    >
                      <td className="border-r border-black/[0.06] px-4 py-3 align-top font-medium text-[#1D1D1F] dark:border-white/[0.08] dark:text-[#F5F5F7]">
                        <div className="flex flex-col items-start gap-1.5">
                          <MarkdownMath
                            content={row.criterion}
                            className="text-[13px] leading-snug font-medium"
                          />
                          {row.ibExamTip && (
                            <button
                              type="button"
                              aria-expanded={isTipOpen}
                              onClick={() => toggleRowTip(originalIdx)}
                              className="glass-pill inline-flex cursor-pointer items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[10px] font-medium text-[#6E6E73] transition-colors hover:text-[#1D1D1F] dark:text-[#98989D] dark:hover:text-[#F5F5F7]"
                            >
                              {isTipOpen ? (
                                <ChevronDown className="h-2.5 w-2.5" aria-hidden="true" />
                              ) : (
                                <ChevronRight className="h-2.5 w-2.5" aria-hidden="true" />
                              )}
                              IB Tip
                            </button>
                          )}
                        </div>
                      </td>

                      {Array.from({ length: valueColCount }).map((_, colIdx) => {
                        const cellText = row.cells[colIdx] ?? '—';
                        const cellKey = `${originalIdx}-${colIdx}`;
                        const isMasked =
                          blurMode && !revealedCells.has(cellKey);

                        return (
                          <td
                            key={cellKey}
                            className="border-r border-black/[0.06] px-4 py-3 align-top last:border-r-0 dark:border-white/[0.08]"
                          >
                            {blurMode ? (
                              <button
                                type="button"
                                onClick={() => toggleRevealCell(cellKey)}
                                aria-label={
                                  isMasked
                                    ? `Reveal ${row.criterion} cell ${colIdx + 1}`
                                    : `Hide ${row.criterion} cell ${colIdx + 1}`
                                }
                                className={`group relative block w-full cursor-pointer rounded-xl px-2 py-1.5 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:focus-visible:ring-[#F5F5F7]/25 ${
                                  isMasked
                                    ? 'glass-surface'
                                    : ''
                                }`}
                              >
                                <div
                                  className={`transition-all duration-150 ${
                                    isMasked
                                      ? 'pointer-events-none select-none opacity-40 blur-[5px]'
                                      : ''
                                  }`}
                                >
                                  <MarkdownMath
                                    content={cellText}
                                    className="text-[13px] leading-snug"
                                  />
                                </div>
                                {isMasked && (
                                  <span className="mt-1 inline-block font-mono text-[10px] font-medium text-[#6E6E73] opacity-90 group-hover:text-[#1D1D1F] dark:text-[#98989D] dark:group-hover:text-[#F5F5F7]">
                                    Click to reveal
                                  </span>
                                )}
                              </button>
                            ) : (
                              <MarkdownMath
                                content={cellText}
                                className="text-[13px] leading-snug"
                              />
                            )}
                          </td>
                        );
                      })}
                    </tr>

                    {row.ibExamTip && isTipOpen && (
                      <tr className="border-b border-black/[0.06] bg-black/[0.025] dark:border-white/[0.08] dark:bg-white/[0.03]">
                        <td
                          colSpan={valueColCount + 1}
                          className="px-4 py-3 text-xs text-[#1D1D1F] dark:text-[#F5F5F7]"
                        >
                          <div className="flex items-start gap-2">
                            <Lightbulb
                              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#6E6E73] dark:text-[#98989D]"
                              aria-hidden="true"
                            />
                            <div className="min-w-0 flex-1">
                              <span className="mr-2 font-mono text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
                                IB Examiner Tip
                              </span>
                              <MarkdownMath
                                content={row.ibExamTip}
                                className="mt-0.5 text-xs leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ConceptComparisonMatrix;
