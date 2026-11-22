'use client';

import React, { useMemo, useState } from 'react';
import { BookOpen, Calendar, ChevronLeft, ChevronRight, Quote, Search, X } from 'lucide-react';
import type { TimelineCausalitySpec } from '@/types/diagrams';
import { MarkdownMath } from '@/components/notes/MarkdownMath';

const CATEGORY_DOT_COLORS = [
  '#D97706',
  '#2563EB',
  '#059669',
  '#7C3AED',
  '#E11D48',
  '#0D9488',
] as const;

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

  const conceptFilters = useMemo(() => {
    const seen = new Set<string>();
    const list: string[] = [];
    for (const c of spec.concepts ?? []) {
      const trimmed = c.trim();
      if (trimmed && !seen.has(trimmed)) {
        seen.add(trimmed);
        list.push(trimmed);
      }
    }
    for (const ev of spec.events) {
      for (const tag of ev.conceptTags ?? []) {
        const trimmed = tag.trim();
        if (trimmed && !seen.has(trimmed)) {
          seen.add(trimmed);
          list.push(trimmed);
        }
      }
    }
    return list;
  }, [spec.concepts, spec.events]);

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedConcept, setSelectedConcept] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedEventId, setSelectedEventId] = useState<string>(
    spec.events[0]?.id ?? '',
  );

  const categoryColorMap = useMemo(() => {
    const map = new Map<string, string>();
    let idx = 0;
    for (const cat of categories) {
      if (cat === 'All') continue;
      map.set(cat, CATEGORY_DOT_COLORS[idx % CATEGORY_DOT_COLORS.length]);
      idx += 1;
    }
    return map;
  }, [categories]);

  const filteredEvents = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return spec.events.filter((ev) => {
      const matchCategory =
        selectedCategory === 'All' || ev.category.trim() === selectedCategory;
      const matchConcept =
        selectedConcept === 'All' ||
        (ev.conceptTags ?? []).some((t) => t.trim() === selectedConcept);
      const matchSearch =
        !q ||
        ev.title.toLowerCase().includes(q) ||
        ev.dateLabel.toLowerCase().includes(q) ||
        ev.summaryMarkdown.toLowerCase().includes(q) ||
        ev.significanceMarkdown.toLowerCase().includes(q) ||
        (ev.historiographyNotes ?? []).some(
          (h) =>
            h.historian.toLowerCase().includes(q) ||
            h.school.toLowerCase().includes(q) ||
            h.argument.toLowerCase().includes(q),
        );
      return matchCategory && matchConcept && matchSearch;
    });
  }, [spec.events, selectedCategory, selectedConcept, searchQuery]);

  const activeIndex = useMemo(() => {
    if (filteredEvents.length === 0) return -1;
    const found = filteredEvents.findIndex((ev) => ev.id === selectedEventId);
    return found >= 0 ? found : 0;
  }, [filteredEvents, selectedEventId]);

  const activeEvent =
    activeIndex >= 0 ? filteredEvents[activeIndex] : undefined;

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    const nextList = spec.events.filter((ev) => {
      const matchCat = cat === 'All' || ev.category.trim() === cat;
      const matchCon =
        selectedConcept === 'All' ||
        (ev.conceptTags ?? []).some((t) => t.trim() === selectedConcept);
      return matchCat && matchCon;
    });
    if (nextList.length > 0 && !nextList.some((ev) => ev.id === selectedEventId)) {
      setSelectedEventId(nextList[0].id);
    }
  };

  const handleSelectConcept = (concept: string) => {
    setSelectedConcept(concept);
    const nextList = spec.events.filter((ev) => {
      const matchCat =
        selectedCategory === 'All' || ev.category.trim() === selectedCategory;
      const matchCon =
        concept === 'All' ||
        (ev.conceptTags ?? []).some((t) => t.trim() === concept);
      return matchCat && matchCon;
    });
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

        <div className="flex flex-wrap items-center gap-2">
          <div className="relative flex items-center">
            <Search
              className="pointer-events-none absolute left-2.5 h-3 w-3 text-[#6E6E73] dark:text-[#98989D]"
              aria-hidden="true"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search events..."
              aria-label="Search timeline events"
              className="glass-pill h-7 w-36 rounded-full pr-6 pl-7 text-xs text-[#1D1D1F] placeholder:text-[#6E6E73] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F]/20 sm:w-44 dark:text-[#F5F5F7] dark:placeholder:text-[#98989D]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear timeline search"
                className="absolute right-1.5 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full text-[#6E6E73] hover:text-[#1D1D1F]"
              >
                <X className="h-2.5 w-2.5" aria-hidden="true" />
              </button>
            )}
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
      </div>

      {/* Optional May 2028 Historical Concept Filter Row */}
      {conceptFilters.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 border-b border-black/[0.06] bg-white/20 px-4 py-2 dark:border-white/[0.08] dark:bg-white/[0.015]">
          <span className="font-mono text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
            2028 Concepts:
          </span>
          {['All', ...conceptFilters].map((concept) => {
            const isSelected = concept === selectedConcept;
            return (
              <button
                key={`concept-${concept}`}
                type="button"
                aria-pressed={isSelected}
                onClick={() => handleSelectConcept(concept)}
                className={`inline-flex h-6 cursor-pointer items-center rounded-full px-2.5 text-[11px] font-medium transition-all ${
                  isSelected
                    ? 'glass-pill border border-[#1D1D1F]/40 font-semibold text-[#1D1D1F] dark:border-[#F5F5F7]/40 dark:text-[#F5F5F7]'
                    : 'text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D]'
                }`}
              >
                {concept}
              </button>
            );
          })}
        </div>
      )}

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
                const dotColor = categoryColorMap.get(ev.category.trim()) ?? '#D97706';
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
                      className={`my-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 transition-all ${
                        isActive ? 'scale-125' : ''
                      }`}
                      style={{
                        borderColor: dotColor,
                        backgroundColor: isActive
                          ? dotColor
                          : 'var(--diagram-surface, #ffffff)',
                        boxShadow: isActive ? `0 0 0 4px ${dotColor}28` : undefined,
                      }}
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
              {activeEvent.conceptTags?.map((tag) => (
                <span
                  key={tag}
                  className="glass-pill rounded-full border border-black/10 px-2.5 py-0.5 font-mono text-[10.5px] font-medium text-[#1D1D1F] dark:border-white/15 dark:text-[#F5F5F7]"
                >
                  {tag}
                </span>
              ))}
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
                <p className="font-serif text-[15px] leading-relaxed text-[#1D1D1F] italic dark:text-[#F5F5F7]">
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

            {activeEvent.historiographyNotes &&
              activeEvent.historiographyNotes.length > 0 && (
                <div className="glass-surface rounded-2xl p-4">
                  <div className="mb-2 flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
                    <BookOpen className="h-3 w-3" aria-hidden="true" />
                    Historiographical Perspectives (Paper 3 Argument Evaluation)
                  </div>
                  <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
                    {activeEvent.historiographyNotes.map((h) => (
                      <div
                        key={h.historian}
                        className="rounded-xl border border-black/[0.06] bg-white/40 px-3 py-2.5 dark:border-white/[0.08] dark:bg-white/[0.03]"
                      >
                        <div className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                          {h.historian}
                        </div>
                        <div className="font-mono text-[10px] text-[#6E6E73] dark:text-[#98989D]">
                          {h.school}
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]">
                          {h.argument}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
