'use client';

import React, { useMemo, useState } from 'react';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Columns2,
  Compass,
  Filter,
  ScrollText,
} from 'lucide-react';
import type {
  PrimarySourceAnalyzerSpec,
  PrimarySourceAnnotation,
  PrimarySourceItem,
} from '@/types/diagrams';
import { MarkdownMath } from '@/components/notes/MarkdownMath';

export interface PrimarySourceAnalyzerProps {
  spec: PrimarySourceAnalyzerSpec;
}

type AnnotationCategory = PrimarySourceAnnotation['category'];

const CATEGORY_STYLES: Record<
  AnnotationCategory,
  { badge: string; highlight: string; activeHighlight: string }
> = {
  Origin: {
    badge:
      'bg-sky-500/12 text-sky-700 border-sky-500/30 dark:bg-sky-400/15 dark:text-sky-300 dark:border-sky-400/30',
    highlight:
      'bg-sky-500/12 border-b-2 border-sky-500/60 hover:bg-sky-500/20 dark:bg-sky-400/15',
    activeHighlight:
      'bg-sky-500/26 border-b-2 border-sky-600 ring-2 ring-sky-500/35 dark:bg-sky-400/30',
  },
  Purpose: {
    badge:
      'bg-indigo-500/12 text-indigo-700 border-indigo-500/30 dark:bg-indigo-400/15 dark:text-indigo-300 dark:border-indigo-400/30',
    highlight:
      'bg-indigo-500/12 border-b-2 border-indigo-500/60 hover:bg-indigo-500/20 dark:bg-indigo-400/15',
    activeHighlight:
      'bg-indigo-500/26 border-b-2 border-indigo-600 ring-2 ring-indigo-500/35 dark:bg-indigo-400/30',
  },
  Content: {
    badge:
      'bg-emerald-500/12 text-emerald-700 border-emerald-500/30 dark:bg-emerald-400/15 dark:text-emerald-300 dark:border-emerald-400/30',
    highlight:
      'bg-emerald-500/12 border-b-2 border-emerald-500/60 hover:bg-emerald-500/20 dark:bg-emerald-400/15',
    activeHighlight:
      'bg-emerald-500/26 border-b-2 border-emerald-600 ring-2 ring-emerald-500/35 dark:bg-emerald-400/30',
  },
  Value: {
    badge:
      'bg-teal-500/12 text-teal-700 border-teal-500/30 dark:bg-teal-400/15 dark:text-teal-300 dark:border-teal-400/30',
    highlight:
      'bg-teal-500/12 border-b-2 border-teal-500/60 hover:bg-teal-500/20 dark:bg-teal-400/15',
    activeHighlight:
      'bg-teal-500/26 border-b-2 border-teal-600 ring-2 ring-teal-500/35 dark:bg-teal-400/30',
  },
  Limitation: {
    badge:
      'bg-rose-500/12 text-rose-700 border-rose-500/30 dark:bg-rose-400/15 dark:text-rose-300 dark:border-rose-400/30',
    highlight:
      'bg-rose-500/12 border-b-2 border-rose-500/60 hover:bg-rose-500/20 dark:bg-rose-400/15',
    activeHighlight:
      'bg-rose-500/26 border-b-2 border-rose-600 ring-2 ring-rose-500/35 dark:bg-rose-400/30',
  },
  Perspective: {
    badge:
      'bg-amber-500/14 text-amber-800 border-amber-500/35 dark:bg-amber-400/15 dark:text-amber-300 dark:border-amber-400/30',
    highlight:
      'bg-amber-500/14 border-b-2 border-amber-500/65 hover:bg-amber-500/24 dark:bg-amber-400/15',
    activeHighlight:
      'bg-amber-500/28 border-b-2 border-amber-600 ring-2 ring-amber-500/35 dark:bg-amber-400/30',
  },
  Historiography: {
    badge:
      'bg-purple-500/12 text-purple-700 border-purple-500/30 dark:bg-purple-400/15 dark:text-purple-300 dark:border-purple-400/30',
    highlight:
      'bg-purple-500/12 border-b-2 border-purple-500/60 hover:bg-purple-500/20 dark:bg-purple-400/15',
    activeHighlight:
      'bg-purple-500/26 border-b-2 border-purple-600 ring-2 ring-purple-500/35 dark:bg-purple-400/30',
  },
};

export function PrimarySourceAnalyzer({ spec }: PrimarySourceAnalyzerProps) {
  const [selectedSourceId, setSelectedSourceId] = useState<string>(
    spec.sources[0]?.id ?? '',
  );
  const [compareMode, setCompareMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'All' | AnnotationCategory>('All');
  const [selectedAnnotationId, setSelectedAnnotationId] = useState<string>(
    spec.annotations[0]?.id ?? '',
  );

  const annotationMap = useMemo(() => {
    const map = new Map<string, PrimarySourceAnnotation>();
    for (const ann of spec.annotations) {
      map.set(ann.id, ann);
    }
    return map;
  }, [spec.annotations]);

  const categories = useMemo(() => {
    const seen = new Set<AnnotationCategory>();
    for (const ann of spec.annotations) {
      seen.add(ann.category);
    }
    return ['All', ...Array.from(seen)] as Array<'All' | AnnotationCategory>;
  }, [spec.annotations]);

  const filteredAnnotations = useMemo(() => {
    if (selectedCategory === 'All') return spec.annotations;
    return spec.annotations.filter((a) => a.category === selectedCategory);
  }, [spec.annotations, selectedCategory]);

  const activeSource: PrimarySourceItem | undefined =
    spec.sources.find((s) => s.id === selectedSourceId) ?? spec.sources[0];

  const activeAnnotation: PrimarySourceAnnotation | undefined =
    filteredAnnotations.find((a) => a.id === selectedAnnotationId) ??
    annotationMap.get(selectedAnnotationId) ??
    filteredAnnotations[0] ??
    spec.annotations[0];

  const activeAnnIndex = filteredAnnotations.findIndex(
    (a) => a.id === activeAnnotation?.id,
  );

  const handleSelectSource = (src: PrimarySourceItem) => {
    setSelectedSourceId(src.id);
    const firstSegmentAnn = src.segments.find((seg) => seg.annotationId)?.annotationId;
    if (firstSegmentAnn && annotationMap.has(firstSegmentAnn)) {
      setSelectedAnnotationId(firstSegmentAnn);
    }
  };

  const stepAnnotation = (delta: number) => {
    if (filteredAnnotations.length === 0) return;
    const base = activeAnnIndex >= 0 ? activeAnnIndex : 0;
    const nextIdx =
      (base + delta + filteredAnnotations.length) % filteredAnnotations.length;
    setSelectedAnnotationId(filteredAnnotations[nextIdx].id);
  };

  const renderSourceCard = (source: PrimarySourceItem) => (
    <div
      key={source.id}
      className="glass-surface flex flex-col justify-between rounded-2xl p-4"
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] pb-2.5 dark:border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="glass-pill rounded-full px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              {source.sourceType}
            </span>
            {source.perspectiveSchool && (
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[10px] font-medium text-amber-800 dark:text-amber-300">
                {source.perspectiveSchool}
              </span>
            )}
          </div>
          <span className="font-mono text-[11px] text-[#6E6E73] dark:text-[#98989D]">
            {source.date}
          </span>
        </div>

        <div className="mt-2.5">
          <div className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
            {source.label} — {source.author}
          </div>
          <MarkdownMath
            content={source.provenance}
            className="mt-0.5 text-[11px] leading-snug text-[#6E6E73] dark:text-[#98989D]"
          />
        </div>

        {/* Clickable Annotated Extract */}
        <blockquote className="mt-3 rounded-xl border border-black/[0.06] bg-white/55 px-4 py-3.5 font-serif text-[15px] leading-[1.75] text-[#1D1D1F] dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-[#F5F5F7]">
          {source.segments.map((seg, idx) => {
            const ann = seg.annotationId ? annotationMap.get(seg.annotationId) : undefined;
            const matchesCategory =
              !ann || selectedCategory === 'All' || ann.category === selectedCategory;

            if (!ann || !matchesCategory) {
              return <span key={idx}>{seg.text}</span>;
            }

            const styles = CATEGORY_STYLES[ann.category];
            const isSelected = ann.id === activeAnnotation?.id;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedAnnotationId(ann.id)}
                title={`${ann.category}: ${ann.title}`}
                className={`mx-0.5 inline cursor-pointer rounded px-1 py-0.5 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/30 ${
                  isSelected ? styles.activeHighlight : styles.highlight
                }`}
              >
                {seg.text}
              </button>
            );
          })}
        </blockquote>
      </div>

      {/* Chicago NB Citation Footer */}
      <footer className="mt-3 border-t border-black/[0.06] pt-2.5 dark:border-white/[0.08]">
        <div className="font-mono text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
          Chicago Notes &amp; Bibliography Citation
        </div>
        <MarkdownMath
          content={source.citationChicago}
          className="mt-0.5 font-serif text-xs leading-relaxed text-[#6E6E73] dark:text-[#98989D]"
        />
      </footer>
    </div>
  );

  const visibleSources = compareMode
    ? spec.sources.slice(0, 2)
    : activeSource
      ? [activeSource]
      : [];

  return (
    <div>
      {/* Toolbar: Source Tabs + Category Filter Pills + Compare Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] bg-white/30 px-4 py-2.5 dark:border-white/[0.08] dark:bg-white/[0.02]">
        <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Historical sources">
          {!compareMode &&
            spec.sources.map((src) => {
              const active = src.id === activeSource?.id;
              return (
                <button
                  key={src.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => handleSelectSource(src)}
                  className={`inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-all ${
                    active
                      ? 'bg-[#1D1D1F] text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                      : 'glass-pill text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D]'
                  }`}
                >
                  <ScrollText className="h-3 w-3" aria-hidden="true" />
                  {src.label}
                </button>
              );
            })}
          {compareMode && (
            <span className="glass-pill inline-flex h-7 items-center gap-1.5 rounded-full px-3 text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              <Columns2 className="h-3.5 w-3.5" aria-hidden="true" />
              Comparing {visibleSources.length} Perspectives Side-by-Side
            </span>
          )}
        </div>

        {spec.sources.length >= 2 && (
          <button
            type="button"
            aria-pressed={compareMode}
            onClick={() => setCompareMode((p) => !p)}
            className={`inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-all ${
              compareMode
                ? 'bg-[#1D1D1F] text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                : 'glass-pill text-[#1D1D1F] hover:bg-white/95 dark:text-[#F5F5F7]'
            }`}
          >
            <Columns2 className="h-3.5 w-3.5" aria-hidden="true" />
            Compare Perspectives
          </button>
        )}
      </div>

      {/* Category Filter Strip */}
      <div className="flex flex-wrap items-center gap-1.5 border-b border-black/[0.06] bg-white/20 px-4 py-2 dark:border-white/[0.08] dark:bg-white/[0.015]">
        <span className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
          <Filter className="h-3 w-3" aria-hidden="true" />
          Analysis Lens:
        </span>
        {categories.map((cat) => {
          const active = cat === selectedCategory;
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={active}
              onClick={() => setSelectedCategory(cat)}
              className={`inline-flex h-6 cursor-pointer items-center rounded-full px-2.5 text-[11px] font-medium transition-all ${
                active
                  ? 'bg-[#1D1D1F] text-white dark:bg-[#F5F5F7] dark:text-[#111113]'
                  : cat === 'All'
                    ? 'glass-pill text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D]'
                    : `border ${CATEGORY_STYLES[cat].badge}`
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Main Split: Sources & Annotation Inspector */}
      <div className="grid grid-cols-1 xl:grid-cols-[1.45fr_1fr]">
        <div
          className={`grid gap-3 border-b border-black/[0.06] p-4 dark:border-white/[0.08] xl:border-r xl:border-b-0 ${
            compareMode && visibleSources.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
          }`}
        >
          {visibleSources.map(renderSourceCard)}
        </div>

        {/* Annotation Analysis Panel */}
        <div className="flex flex-col justify-between bg-white/25 p-5 dark:bg-white/[0.015]">
          {activeAnnotation ? (
            <div className="space-y-3.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span
                  className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[10.5px] font-semibold ${
                    CATEGORY_STYLES[activeAnnotation.category].badge
                  }`}
                >
                  {activeAnnotation.category}
                </span>
                {activeAnnotation.conceptTag && (
                  <span className="glass-pill inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[10.5px] font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
                    <Compass className="h-3 w-3 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                    {activeAnnotation.conceptTag}
                  </span>
                )}
              </div>

              <h4 className="text-base font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                {activeAnnotation.title}
              </h4>

              <div className="glass-surface rounded-2xl p-3.5">
                <MarkdownMath
                  content={activeAnnotation.analysisMarkdown}
                  className="text-[13.5px] leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
                />
              </div>

              {spec.comparisonPrompt && (
                <div className="glass-surface rounded-2xl border-l-[3px] border-l-amber-600 px-3.5 py-2.5 dark:border-l-amber-400">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-wider text-amber-700 uppercase dark:text-amber-300">
                    <BookOpen className="h-3 w-3" aria-hidden="true" />
                    IB 2028 Evaluation Prompt
                  </div>
                  <MarkdownMath
                    content={spec.comparisonPrompt}
                    className="mt-1 text-xs leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="py-8 text-center text-xs text-[#6E6E73] dark:text-[#98989D]">
              Click any highlighted phrase in the source extract to inspect its IB historical analysis.
            </div>
          )}

          {filteredAnnotations.length > 1 && (
            <div className="mt-5 flex items-center justify-between border-t border-black/[0.06] pt-3.5 dark:border-white/[0.08]">
              <button
                type="button"
                onClick={() => stepAnnotation(-1)}
                className="glass-pill inline-flex h-7 cursor-pointer items-center gap-1 rounded-full px-3 text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7]"
              >
                <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                Prev Note
              </button>
              <span className="font-mono text-[11px] tabular-nums text-[#6E6E73] dark:text-[#98989D]">
                {activeAnnIndex >= 0 ? activeAnnIndex + 1 : 1} / {filteredAnnotations.length}
              </span>
              <button
                type="button"
                onClick={() => stepAnnotation(1)}
                className="glass-pill inline-flex h-7 cursor-pointer items-center gap-1 rounded-full px-3 text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7]"
              >
                Next Note
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PrimarySourceAnalyzer;
