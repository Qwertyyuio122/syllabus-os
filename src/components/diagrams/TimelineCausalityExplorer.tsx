'use client';

import React, { useMemo, useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import type { TimelineCausalitySpec } from '@/types/diagrams';
import { MarkdownMath } from '@/components/notes/MarkdownMath';

export interface TimelineCausalityExplorerProps {
  spec: TimelineCausalitySpec;
}

export function TimelineCausalityExplorer({
  spec,
}: TimelineCausalityExplorerProps) {
  const categories = useMemo(() => {
    const seen = new Set<string>();
    const list: string[] = [];
    for (const c of spec.categories ?? []) {
      const trimmed = c.trim();
      if (trimmed && !seen.has(trimmed)) {
        seen.add(trimmed);
        list.push(trimmed);
      }
    }
    for (const ev of spec.events) {
      const trimmed = ev.category.trim();
      if (trimmed && !seen.has(trimmed)) {
        seen.add(trimmed);
        list.push(trimmed);
      }
    }
    return ['All', ...list];
  }, [spec.categories, spec.events]);

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedEventId, setSelectedEventId] = useState<string>(
    spec.events[0]?.id ?? '',
  );

  const filteredEvents = useMemo(() => {
    if (selectedCategory === 'All') return spec.events;
    return spec.events.filter(
      (ev) => ev.category.trim() === selectedCategory,
    );
  }, [spec.events, selectedCategory]);

  const activeIndex = useMemo(() => {
    if (filteredEvents.length === 0) return -1;
    const found = filteredEvents.findIndex((ev) => ev.id === selectedEventId);
    return found >= 0 ? found : 0;
  }, [filteredEvents, selectedEventId]);

  const activeEvent =
    activeIndex >= 0 ? filteredEvents[activeIndex] : undefined;

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    const nextList =
      cat === 'All'
        ? spec.events
        : spec.events.filter((ev) => ev.category.trim() === cat);
    if (nextList.length > 0 && !nextList.some((ev) => ev.id === selectedEventId)) {
      setSelectedEventId(nextList[0].id);
    }
  };

  const handleStep = (delta: number) => {
    if (filteredEvents.length === 0 || activeIndex < 0) return;
    const nextIdx = Math.max(
      0,
      Math.min(filteredEvents.length - 1, activeIndex + delta),
    );
    const nextEv = filteredEvents[nextIdx];
    if (nextEv) setSelectedEventId(nextEv.id);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const tag = (e.target as HTMLElement | null)?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handleStep(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleStep(1);
    }
  };

  return (
    <div onKeyDown={handleKeyDown}>
      {/* Category Pills & Step Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] bg-white/30 px-4 py-2.5 dark:border-white/[0.08] dark:bg-white/[0.02]">
        <div
          className="flex flex-wrap items-center gap-1.5"
          role="group"
          aria-label="Filter timeline by category"
        >
          {categories.map((cat) => {
            const isSelected = cat === selectedCategory;
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={isSelected}
                onClick={() => handleSelectCategory(cat)}
                className={`inline-flex h-6 cursor-pointer items-center rounded-full px-2.5 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:focus-visible:ring-[#F5F5F7]/25 ${
                  isSelected
                    ? 'bg-[#1D1D1F] text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                    : 'glass-pill text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D] dark:hover:text-[#F5F5F7]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => handleStep(-1)}
            disabled={activeIndex <= 0}
            aria-label="Previous timeline event"
            className="glass-pill inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-[#1D1D1F] transition-colors hover:bg-white/95 disabled:cursor-not-allowed disabled:opacity-40 dark:text-[#F5F5F7] dark:hover:bg-white/[0.12]"
          >
            <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
          <span className="min-w-[48px] text-center font-mono text-[11px] text-[#6E6E73] dark:text-[#98989D]">
            {filteredEvents.length > 0
              ? `${activeIndex + 1} / ${filteredEvents.length}`
              : '0 / 0'}
          </span>
          <button
            type="button"
            onClick={() => handleStep(1)}
            disabled={activeIndex < 0 || activeIndex >= filteredEvents.length - 1}
            aria-label="Next timeline event"
            className="glass-pill inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-[#1D1D1F] transition-colors hover:bg-white/95 disabled:cursor-not-allowed disabled:opacity-40 dark:text-[#F5F5F7] dark:hover:bg-white/[0.12]"
          >
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Horizontal Timeline Nodes + Scrubber */}
      {filteredEvents.length > 0 && (
        <div className="border-b border-black/[0.06] px-4 py-4 dark:border-white/[0.08]">
          <div className="relative overflow-x-auto pb-2">
            <div className="relative inline-flex min-w-full items-start gap-3">
              {/* Horizontal Connecting Hairline */}
              <div
                className="pointer-events-none absolute top-[23px] right-8 left-8 h-px bg-black/[0.1] dark:bg-white/[0.12]"
                aria-hidden="true"
              />

              {filteredEvents.map((ev, idx) => {
                const isActive = ev.id === activeEvent?.id;
                return (
                  <button
                    key={ev.id}
                    type="button"
                    onClick={() => setSelectedEventId(ev.id)}
                    aria-current={isActive ? 'step' : undefined}
                    className={`group relative z-10 flex min-w-[126px] flex-1 cursor-pointer flex-col items-center rounded-2xl px-2.5 py-1.5 text-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:focus-visible:ring-[#F5F5F7]/25 ${
                      isActive
                        ? 'glass-surface'
                        : 'hover:bg-black/[0.03] dark:hover:bg-white/[0.04]'
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] font-medium ${
                        isActive
                          ? 'text-[#1D1D1F] dark:text-[#F5F5F7]'
                          : 'text-[#6E6E73] dark:text-[#98989D]'
                      }`}
                    >
                      {ev.dateLabel}
                    </span>

                    <span
                      className={`my-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border transition-all ${
                        isActive
                          ? 'scale-110 border-[#1D1D1F] bg-[#1D1D1F] ring-4 ring-[#1D1D1F]/12 dark:border-[#F5F5F7] dark:bg-[#F5F5F7] dark:ring-[#F5F5F7]/15'
                          : 'border-[#6E6E73]/60 bg-white group-hover:border-[#1D1D1F] dark:border-[#98989D]/60 dark:bg-[#1A1A1D] dark:group-hover:border-[#F5F5F7]'
                      }`}
                    >
                      <span className="sr-only">{idx + 1}</span>
                    </span>

                    <span
                      className={`line-clamp-2 text-[11px] leading-tight ${
                        isActive
                          ? 'font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]'
                          : 'text-[#6E6E73] dark:text-[#98989D]'
                      }`}
                    >
                      {ev.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {filteredEvents.length > 1 && (
            <div className="mt-1.5 flex items-center gap-3 px-1">
              <span className="font-mono text-[10px] text-[#6E6E73] uppercase dark:text-[#98989D]">
                Scrub
              </span>
              <input
                type="range"
                aria-label="Scrub timeline events"
                min={0}
                max={filteredEvents.length - 1}
                step={1}
                value={Math.max(0, activeIndex)}
                onChange={(e) => {
                  const idx = Number(e.target.value);
                  const target = filteredEvents[idx];
                  if (target) setSelectedEventId(target.id);
                }}
                className="h-1.5 flex-1 cursor-pointer accent-[#1D1D1F] dark:accent-[#F5F5F7]"
              />
            </div>
          )}
        </div>
      )}

      {/* Selected Event Card */}
      <div className="bg-white/25 p-5 dark:bg-white/[0.015]">
        {activeEvent ? (
          <div className="space-y-3.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="glass-pill inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                <Calendar className="h-3 w-3" aria-hidden="true" />
                {activeEvent.dateLabel}
              </span>
              <span className="glass-pill rounded-full px-2.5 py-0.5 text-[11px] font-medium text-[#6E6E73] dark:text-[#98989D]">
                {activeEvent.category}
              </span>
            </div>

            <h4 className="text-base font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
              {activeEvent.title}
            </h4>

            <MarkdownMath
              content={activeEvent.summaryMarkdown}
              className="text-[13.5px] leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
            />

            {activeEvent.primarySourceQuote && (
              <blockquote className="glass-surface rounded-2xl border-l-[3px] border-l-[#1D1D1F] px-4 py-3 dark:border-l-[#F5F5F7]">
                <div className="mb-1 flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
                  <Quote className="h-3 w-3" aria-hidden="true" />
                  Primary Source
                </div>
                <p className="text-[13.5px] leading-relaxed text-[#1D1D1F] italic dark:text-[#F5F5F7]">
                  {activeEvent.primarySourceQuote}
                </p>
              </blockquote>
            )}

            <div className="glass-surface rounded-2xl p-4">
              <div className="mb-1 font-mono text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
                Causality &amp; Historical Significance
              </div>
              <MarkdownMath
                content={activeEvent.significanceMarkdown}
                className="text-[13px] leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
              />
            </div>
          </div>
        ) : (
          <div className="py-6 text-center text-xs text-[#6E6E73] dark:text-[#98989D]">
            No events match this category filter.
          </div>
        )}
      </div>
    </div>
  );
}

export default TimelineCausalityExplorer;
