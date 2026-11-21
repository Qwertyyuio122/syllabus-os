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

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E6E6E4] bg-[#FBFBFA] px-4 py-2.5 dark:border-[#2E2E2E] dark:bg-[#202020]">
        <div className="relative flex min-w-[200px] flex-1 items-center sm:max-w-xs">
          <Search
            className="pointer-events-none absolute left-2.5 h-3.5 w-3.5 text-[#787774] dark:text-[#9B9A97]"
            aria-hidden="true"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter criteria or cells..."
            aria-label="Filter comparison matrix"
            className="h-7 w-full rounded border border-[#E6E6E4] bg-white pr-7 pl-8 text-xs text-[#37352F] placeholder:text-[#787774] focus:border-[#37352F] focus:outline-none dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB] dark:placeholder:text-[#9B9A97] dark:focus:border-[#EBEBEB]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              className="absolute right-1.5 flex h-5 w-5 cursor-pointer items-center justify-center rounded text-[#787774] hover:bg-[#F1F1EF] hover:text-[#37352F] dark:text-[#9B9A97] dark:hover:bg-[#2A2A2A] dark:hover:text-[#EBEBEB]"
            >
              <X className="h-3 w-3" aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {blurMode && (
            <span className="rounded border border-[#E6E6E4] bg-white px-2 py-0.5 font-mono text-[11px] font-medium text-[#37352F] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB]">
              {revealedCells.size} / {totalTestableCells} revealed
            </span>
          )}

          {rowsWithTips.length > 0 && (
            <button
              type="button"
              aria-expanded={allTipsExpanded}
              onClick={toggleAllTips}
              className="inline-flex h-7 cursor-pointer items-center gap-1.5 rounded border border-[#E6E6E4] bg-white px-2.5 text-xs font-medium text-[#787774] transition-colors hover:bg-[#F1F1EF] hover:text-[#37352F] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#9B9A97] dark:hover:bg-[#2A2A2A] dark:hover:text-[#EBEBEB]"
            >
              <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" />
              {allTipsExpanded ? 'Hide IB Tips' : 'Show IB Tips'}
            </button>
          )}

          <button
            type="button"
            aria-pressed={blurMode}
            onClick={toggleBlurMode}
            className={`inline-flex h-7 cursor-pointer items-center gap-1.5 rounded border px-2.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37352F]/30 dark:focus-visible:ring-[#EBEBEB]/30 ${
              blurMode
                ? 'border-[#37352F] bg-[#37352F] text-white dark:border-[#EBEBEB] dark:bg-[#EBEBEB] dark:text-[#191919]'
                : 'border-[#E6E6E4] bg-white text-[#37352F] hover:bg-[#F1F1EF] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB] dark:hover:bg-[#2A2A2A]'
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

      {/* Responsive Table */}
      <div className="overflow-x-auto bg-white dark:bg-[#191919]">
        {filteredRows.length === 0 ? (
          <div className="px-4 py-8 text-center text-xs text-[#787774] dark:text-[#9B9A97]">
            No rows match &ldquo;{searchQuery}&rdquo;.
          </div>
        ) : (
          <table className="w-full min-w-[540px] border-collapse text-left text-[13px]">
            <thead>
              <tr className="border-b border-[#E6E6E4] bg-[#FBFBFA] dark:border-[#2E2E2E] dark:bg-[#202020]">
                <th className="w-[24%] border-r border-[#E6E6E4] px-3.5 py-2.5 text-xs font-semibold text-[#787774] dark:border-[#2E2E2E] dark:text-[#9B9A97]">
                  {criterionHeader}
                </th>
                {Array.from({ length: valueColCount }).map((_, colIdx) => (
                  <th
                    key={`col-${colIdx}`}
                    className="border-r border-[#E6E6E4] px-3.5 py-2.5 text-xs font-semibold text-[#37352F] last:border-r-0 dark:border-[#2E2E2E] dark:text-[#EBEBEB]"
                  >
                    {valueHeaders[colIdx] ?? `Column ${colIdx + 1}`}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredRows.map(({ row, originalIdx }) => {
                const isTipOpen = expandedTips.has(originalIdx);
                return (
                  <React.Fragment key={`row-${originalIdx}`}>
                    <tr className="border-b border-[#E6E6E4] transition-colors last:border-b-0 hover:bg-[#FBFBFA] dark:border-[#2E2E2E] dark:hover:bg-[#202020]/60">
                      <td className="border-r border-[#E6E6E4] px-3.5 py-2.5 align-top font-medium text-[#37352F] dark:border-[#2E2E2E] dark:text-[#EBEBEB]">
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
                              className="inline-flex cursor-pointer items-center gap-1 rounded border border-[#E6E6E4] bg-[#FBFBFA] px-1.5 py-0.5 font-mono text-[10px] font-medium text-[#787774] transition-colors hover:bg-[#F1F1EF] hover:text-[#37352F] dark:border-[#2E2E2E] dark:bg-[#202020] dark:text-[#9B9A97] dark:hover:bg-[#2A2A2A] dark:hover:text-[#EBEBEB]"
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
                            className="border-r border-[#E6E6E4] px-3.5 py-2.5 align-top last:border-r-0 dark:border-[#2E2E2E]"
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
                                className={`group relative block w-full cursor-pointer rounded px-1.5 py-1 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37352F]/30 dark:focus-visible:ring-[#EBEBEB]/30 ${
                                  isMasked
                                    ? 'bg-[#FBFBFA] hover:bg-[#F1F1EF] dark:bg-[#202020] dark:hover:bg-[#2A2A2A]'
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
                                  <span className="mt-1 inline-block font-mono text-[10px] font-medium text-[#787774] opacity-90 group-hover:text-[#37352F] dark:text-[#9B9A97] dark:group-hover:text-[#EBEBEB]">
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
                      <tr className="border-b border-[#E6E6E4] bg-[#FBFBFA] dark:border-[#2E2E2E] dark:bg-[#202020]">
                        <td
                          colSpan={valueColCount + 1}
                          className="px-4 py-2.5 text-xs text-[#37352F] dark:text-[#EBEBEB]"
                        >
                          <div className="flex items-start gap-2">
                            <Lightbulb
                              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#787774] dark:text-[#9B9A97]"
                              aria-hidden="true"
                            />
                            <div className="min-w-0 flex-1">
                              <span className="mr-2 font-mono text-[10px] font-semibold tracking-wider text-[#787774] uppercase dark:text-[#9B9A97]">
                                IB Examiner Tip
                              </span>
                              <MarkdownMath
                                content={row.ibExamTip}
                                className="mt-0.5 text-xs leading-relaxed text-[#37352F] dark:text-[#EBEBEB]"
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
