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
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E6E6E4] bg-[#FBFBFA] px-4 py-2.5 dark:border-[#2E2E2E] dark:bg-[#202020]">
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
                className={`inline-flex h-6 cursor-pointer items-center rounded border px-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37352F]/30 dark:focus-visible:ring-[#EBEBEB]/30 ${
                  isSelected
                    ? 'border-[#37352F] bg-[#37352F] text-white dark:border-[#EBEBEB] dark:bg-[#EBEBEB] dark:text-[#191919]'
                    : 'border-[#E6E6E4] bg-white text-[#787774] hover:bg-[#F1F1EF] hover:text-[#37352F] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#9B9A97] dark:hover:bg-[#2A2A2A] dark:hover:text-[#EBEBEB]'
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
            className="inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded border border-[#E6E6E4] bg-white text-[#37352F] transition-colors hover:bg-[#F1F1EF] disabled:cursor-not-allowed disabled:opacity-40 dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB] dark:hover:bg-[#2A2A2A]"
          >
            <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
          <span className="min-w-[48px] text-center font-mono text-[11px] text-[#787774] dark:text-[#9B9A97]">
            {filteredEvents.length > 0
              ? `${activeIndex + 1} / ${filteredEvents.length}`
              : '0 / 0'}
          </span>
          <button
            type="button"
            onClick={() => handleStep(1)}
            disabled={activeIndex < 0 || activeIndex >= filteredEvents.length - 1}
            aria-label="Next timeline event"
            className="inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded border border-[#E6E6E4] bg-white text-[#37352F] transition-colors hover:bg-[#F1F1EF] disabled:cursor-not-allowed disabled:opacity-40 dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB] dark:hover:bg-[#2A2A2A]"
          >
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Horizontal Timeline Nodes + Scrubber */}
      {filteredEvents.length > 0 && (
        <div className="border-b border-[#E6E6E4] bg-white px-4 py-3.5 dark:border-[#2E2E2E] dark:bg-[#191919]">
          <div className="relative overflow-x-auto pb-2">
            <div className="relative inline-flex min-w-full items-start gap-3">
              {/* Horizontal Connecting Hairline */}
              <div
                className="pointer-events-none absolute top-[23px] right-8 left-8 h-px bg-[#E6E6E4] dark:bg-[#2E2E2E]"
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
                    className="group relative z-10 flex min-w-[120px] flex-1 cursor-pointer flex-col items-center rounded px-2 py-1 text-center transition-colors hover:bg-[#FBFBFA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37352F]/30 dark:hover:bg-[#202020] dark:focus-visible:ring-[#EBEBEB]/30"
                  >
                    <span
                      className={`font-mono text-[10px] font-medium ${
                        isActive
                          ? 'text-[#37352F] dark:text-[#EBEBEB]'
                          : 'text-[#787774] dark:text-[#9B9A97]'
                      }`}
                    >
                      {ev.dateLabel}
                    </span>

                    <span
                      className={`my-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border transition-all ${
                        isActive
                          ? 'scale-110 border-[#37352F] bg-[#37352F] ring-4 ring-[#37352F]/10 dark:border-[#EBEBEB] dark:bg-[#EBEBEB] dark:ring-[#EBEBEB]/15'
                          : 'border-[#787774]/60 bg-white group-hover:border-[#37352F] dark:border-[#9B9A97]/60 dark:bg-[#191919] dark:group-hover:border-[#EBEBEB]'
                      }`}
                    >
                      <span className="sr-only">{idx + 1}</span>
                    </span>

                    <span
                      className={`line-clamp-2 text-[11px] leading-tight ${
                        isActive
                          ? 'font-semibold text-[#37352F] dark:text-[#EBEBEB]'
                          : 'text-[#787774] dark:text-[#9B9A97]'
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
            <div className="mt-1 flex items-center gap-3 px-1">
              <span className="font-mono text-[10px] text-[#787774] uppercase dark:text-[#9B9A97]">
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
                className="h-1.5 flex-1 cursor-pointer accent-[#37352F] dark:accent-[#EBEBEB]"
              />
            </div>
          )}
        </div>
      )}

      {/* Selected Event Card */}
      <div className="bg-[#FBFBFA] p-4 dark:bg-[#202020]">
        {activeEvent ? (
          <div className="space-y-3.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded border border-[#E6E6E4] bg-white px-2 py-0.5 font-mono text-[11px] font-semibold text-[#37352F] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB]">
                <Calendar className="h-3 w-3" aria-hidden="true" />
                {activeEvent.dateLabel}
              </span>
              <span className="rounded border border-[#E6E6E4] bg-white px-2 py-0.5 text-[11px] font-medium text-[#787774] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#9B9A97]">
                {activeEvent.category}
              </span>
            </div>

            <h4 className="text-base font-semibold tracking-tight text-[#37352F] dark:text-[#EBEBEB]">
              {activeEvent.title}
            </h4>

            <MarkdownMath
              content={activeEvent.summaryMarkdown}
              className="text-[13.5px] leading-relaxed text-[#37352F] dark:text-[#EBEBEB]"
            />

            {activeEvent.primarySourceQuote && (
              <blockquote className="rounded-r-md border border-[#E6E6E4] border-l-[3px] border-l-[#37352F] bg-white px-4 py-3 dark:border-[#2E2E2E] dark:border-l-[#EBEBEB] dark:bg-[#191919]">
                <div className="mb-1 flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-wider text-[#787774] uppercase dark:text-[#9B9A97]">
                  <Quote className="h-3 w-3" aria-hidden="true" />
                  Primary Source
                </div>
                <p className="text-[13.5px] leading-relaxed text-[#37352F] italic dark:text-[#EBEBEB]">
                  {activeEvent.primarySourceQuote}
                </p>
              </blockquote>
            )}

            <div className="rounded-md border border-[#E6E6E4] bg-white p-3.5 dark:border-[#2E2E2E] dark:bg-[#191919]">
              <div className="mb-1 font-mono text-[10px] font-semibold tracking-wider text-[#787774] uppercase dark:text-[#9B9A97]">
                Causality &amp; Historical Significance
              </div>
              <MarkdownMath
                content={activeEvent.significanceMarkdown}
                className="text-[13px] leading-relaxed text-[#37352F] dark:text-[#EBEBEB]"
              />
            </div>
          </div>
        ) : (
          <div className="py-6 text-center text-xs text-[#787774] dark:text-[#9B9A97]">
            No events match this category filter.
          </div>
        )}
      </div>
    </div>
  );
}

export default TimelineCausalityExplorer;
