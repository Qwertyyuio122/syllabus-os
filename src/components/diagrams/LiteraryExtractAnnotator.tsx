'use client';

import React, { useMemo, useState } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, Feather, Layers, Sparkles } from 'lucide-react';
import type {
  LiteraryAnnotation,
  LiteraryExtractAnnotatorSpec,
  LiteraryLayer,
} from '@/types/diagrams';
import { MarkdownMath } from '@/components/notes/MarkdownMath';

export interface LiteraryExtractAnnotatorProps {
  spec: LiteraryExtractAnnotatorSpec;
}

const FALLBACK_COLORS = ['#7C3AED', '#0D9488', '#D97706', '#2563EB', '#E11D48'];

function hexToRgba(hex: string, alpha: number): string {
  const match = /^#([0-9a-f]{6})$/i.exec(hex.trim());
  if (!match) return `rgba(124, 58, 237, ${alpha})`;
  const r = parseInt(match[1].slice(0, 2), 16);
  const g = parseInt(match[1].slice(2, 4), 16);
  const b = parseInt(match[1].slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function LiteraryExtractAnnotator({
  spec,
}: LiteraryExtractAnnotatorProps) {
  const [visibleLayerIds, setVisibleLayerIds] = useState<Set<string>>(
    () => new Set(spec.layers.map((l) => l.id)),
  );
  const [selectedAnnotationId, setSelectedAnnotationId] = useState<string>(
    spec.annotations[0]?.id ?? '',
  );

  const layerMap = useMemo(() => {
    const map = new Map<string, LiteraryLayer & { resolvedColor: string }>();
    spec.layers.forEach((layer, idx) => {
      map.set(layer.id, {
        ...layer,
        resolvedColor:
          /^#[0-9a-f]{6}$/i.test(layer.color.trim())
            ? layer.color.trim()
            : FALLBACK_COLORS[idx % FALLBACK_COLORS.length],
      });
    });
    return map;
  }, [spec.layers]);

  const annotationMap = useMemo(() => {
    const map = new Map<string, LiteraryAnnotation>();
    for (const ann of spec.annotations) {
      map.set(ann.id, ann);
    }
    return map;
  }, [spec.annotations]);

  const activeAnnotations = useMemo(
    () => spec.annotations.filter((a) => visibleLayerIds.has(a.layerId)),
    [spec.annotations, visibleLayerIds],
  );

  const selectedAnnotation =
    activeAnnotations.find((a) => a.id === selectedAnnotationId) ??
    annotationMap.get(selectedAnnotationId) ??
    activeAnnotations[0] ??
    spec.annotations[0];

  const selectedIndex = activeAnnotations.findIndex(
    (a) => a.id === selectedAnnotation?.id,
  );

  const toggleLayer = (layerId: string) => {
    setVisibleLayerIds((prev) => {
      const next = new Set(prev);
      if (next.has(layerId)) {
        next.delete(layerId);
      } else {
        next.add(layerId);
      }
      return next;
    });
  };

  const stepAnnotation = (delta: number) => {
    if (activeAnnotations.length === 0) return;
    const base = selectedIndex >= 0 ? selectedIndex : 0;
    const nextIdx =
      (base + delta + activeAnnotations.length) % activeAnnotations.length;
    setSelectedAnnotationId(activeAnnotations[nextIdx].id);
  };

  const selectedLayer = selectedAnnotation
    ? layerMap.get(selectedAnnotation.layerId)
    : undefined;

  return (
    <div>
      {/* Literary Metadata Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] bg-white/30 px-4 py-2.5 dark:border-white/[0.08] dark:bg-white/[0.02]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="glass-pill inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
            <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
            {spec.workTitle}
          </span>
          <span className="text-xs text-[#6E6E73] dark:text-[#98989D]">
            {spec.author} · {spec.genre}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {spec.ibConcept && (
            <span className="glass-pill rounded-full px-2.5 py-0.5 font-mono text-[10.5px] font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
              Concept: {spec.ibConcept}
            </span>
          )}
          {spec.globalIssue && (
            <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 font-mono text-[10.5px] font-medium text-purple-700 dark:text-purple-300">
              GI: {spec.globalIssue}
            </span>
          )}
        </div>
      </div>

      {/* Color-Coded Literary Device Layers */}
      <div className="flex flex-wrap items-center gap-1.5 border-b border-black/[0.06] bg-white/20 px-4 py-2 dark:border-white/[0.08] dark:bg-white/[0.015]">
        <span className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
          <Layers className="h-3 w-3" aria-hidden="true" />
          Device Layers:
        </span>
        {spec.layers.map((layer) => {
          const meta = layerMap.get(layer.id);
          const color = meta?.resolvedColor ?? '#7C3AED';
          const isVisible = visibleLayerIds.has(layer.id);
          return (
            <button
              key={layer.id}
              type="button"
              aria-pressed={isVisible}
              onClick={() => toggleLayer(layer.id)}
              className={`inline-flex h-6 cursor-pointer items-center gap-1.5 rounded-full px-2.5 text-[11px] font-medium transition-all ${
                isVisible
                  ? 'glass-pill text-[#1D1D1F] dark:text-[#F5F5F7]'
                  : 'border border-dashed border-black/15 text-[#6E6E73] opacity-55 dark:border-white/15'
              }`}
              style={
                isVisible
                  ? {
                      borderColor: hexToRgba(color, 0.55),
                      backgroundColor: hexToRgba(color, 0.12),
                    }
                  : undefined
              }
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: color }}
                aria-hidden="true"
              />
              {layer.label}
            </button>
          );
        })}
      </div>

      {/* Split Close Reading Extract + Band 7 Analysis */}
      <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_1fr]">
        <div className="border-b border-black/[0.06] p-4 dark:border-white/[0.08] xl:border-r xl:border-b-0">
          <div className="glass-surface rounded-2xl p-4 sm:p-5">
            <div className="space-y-2.5 font-serif text-[15.5px] leading-[1.85] text-[#1D1D1F] dark:text-[#F5F5F7]">
              {spec.passages.map((line, lineIdx) => (
                <div key={lineIdx} className="flex items-baseline gap-3">
                  {line.lineNumber !== undefined && (
                    <span className="w-7 shrink-0 select-none text-right font-mono text-[11px] tabular-nums text-[#6E6E73] dark:text-[#98989D]">
                      {line.lineNumber}
                    </span>
                  )}
                  <p className="min-w-0 flex-1">
                    {line.segments.map((seg, segIdx) => {
                      const ann = seg.annotationId
                        ? annotationMap.get(seg.annotationId)
                        : undefined;
                      const isLayerVisible = ann
                        ? visibleLayerIds.has(ann.layerId)
                        : false;

                      if (!ann || !isLayerVisible) {
                        return <span key={segIdx}>{seg.text}</span>;
                      }

                      const color =
                        layerMap.get(ann.layerId)?.resolvedColor ?? '#7C3AED';
                      const isSelected = ann.id === selectedAnnotation?.id;

                      return (
                        <button
                          key={segIdx}
                          type="button"
                          onClick={() => setSelectedAnnotationId(ann.id)}
                          title={`${ann.deviceName}`}
                          className="mx-0.5 inline cursor-pointer rounded px-1 py-0.5 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25"
                          style={{
                            backgroundColor: hexToRgba(
                              color,
                              isSelected ? 0.28 : 0.13,
                            ),
                            borderBottom: `2px solid ${hexToRgba(
                              color,
                              isSelected ? 0.95 : 0.6,
                            )}`,
                            boxShadow: isSelected
                              ? `0 0 0 2px ${hexToRgba(color, 0.25)}`
                              : undefined,
                          }}
                        >
                          {seg.text}
                        </button>
                      );
                    })}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Close-Reading Commentary & Band 7 Sentence Card */}
        <div className="flex flex-col justify-between bg-white/25 p-5 dark:bg-white/[0.015]">
          {selectedAnnotation ? (
            <div className="space-y-3.5">
              <div className="flex flex-wrap items-center gap-2">
                {selectedLayer && (
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]"
                    style={{
                      borderColor: hexToRgba(selectedLayer.resolvedColor, 0.5),
                      backgroundColor: hexToRgba(
                        selectedLayer.resolvedColor,
                        0.12,
                      ),
                    }}
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: selectedLayer.resolvedColor }}
                    />
                    {selectedLayer.label}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Feather
                  className="h-4 w-4 shrink-0 text-[#6E6E73] dark:text-[#98989D]"
                  aria-hidden="true"
                />
                <h4 className="text-base font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                  {selectedAnnotation.deviceName}
                </h4>
              </div>

              <div className="glass-surface rounded-2xl p-3.5">
                <div className="mb-1 font-mono text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
                  Authorial Choice &amp; Reader Effect
                </div>
                <MarkdownMath
                  content={selectedAnnotation.effectMarkdown}
                  className="text-[13.5px] leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
                />
              </div>

              <div
                className="glass-surface rounded-2xl border-l-[3px] p-3.5"
                style={{
                  borderLeftColor: selectedLayer?.resolvedColor ?? '#7C3AED',
                }}
              >
                <div className="mb-1 flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
                  <Sparkles className="h-3 w-3" aria-hidden="true" />
                  Band 7 Analytical Sentence (Paper 1 / IO Model)
                </div>
                <p className="font-serif text-[14px] leading-relaxed text-[#1D1D1F] italic dark:text-[#F5F5F7]">
                  {selectedAnnotation.band7Sentence}
                </p>
              </div>
            </div>
          ) : (
            <div className="py-8 text-center text-xs text-[#6E6E73] dark:text-[#98989D]">
              Toggle on a literary layer or click a highlighted span to view analysis.
            </div>
          )}

          {activeAnnotations.length > 1 && (
            <div className="mt-5 flex items-center justify-between border-t border-black/[0.06] pt-3.5 dark:border-white/[0.08]">
              <button
                type="button"
                onClick={() => stepAnnotation(-1)}
                className="glass-pill inline-flex h-7 cursor-pointer items-center gap-1 rounded-full px-3 text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7]"
              >
                <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                Prev Choice
              </button>
              <span className="font-mono text-[11px] tabular-nums text-[#6E6E73] dark:text-[#98989D]">
                {selectedIndex >= 0 ? selectedIndex + 1 : 1} / {activeAnnotations.length}
              </span>
              <button
                type="button"
                onClick={() => stepAnnotation(1)}
                className="glass-pill inline-flex h-7 cursor-pointer items-center gap-1 rounded-full px-3 text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7]"
              >
                Next Choice
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LiteraryExtractAnnotator;
