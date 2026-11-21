'use client';

import React, { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, EyeOff, MapPin, RotateCcw } from 'lucide-react';
import type { LabeledExplorerSpec, SvgShape } from '@/types/diagrams';
import { MarkdownMath } from '@/components/notes/MarkdownMath';

export interface LabeledAnatomyExplorerProps {
  spec: LabeledExplorerSpec;
}

function parseHexLuminance(color: string): number | null {
  const hex = color.trim().toLowerCase();
  if (hex === 'black') return 0;
  if (hex === 'white') return 1;
  const match = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(hex);
  if (!match) return null;

  const digits = match[1];
  const rHex = digits.length === 3 ? digits[0] + digits[0] : digits.slice(0, 2);
  const gHex = digits.length === 3 ? digits[1] + digits[1] : digits.slice(2, 4);
  const bHex = digits.length === 3 ? digits[2] + digits[2] : digits.slice(4, 6);

  const r = parseInt(rHex, 16) / 255;
  const g = parseInt(gHex, 16) / 255;
  const b = parseInt(bHex, 16) / 255;

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function normalizeSvgPaint(
  rawColor: string | undefined,
  role: 'stroke' | 'fill',
  shapeKind: SvgShape['kind'],
): string {
  if (!rawColor) {
    if (role === 'stroke') {
      return shapeKind === 'text' ? 'none' : 'currentColor';
    }
    if (shapeKind === 'text') return 'currentColor';
    if (shapeKind === 'line' || shapeKind === 'path') return 'none';
    return 'rgba(120, 119, 116, 0.08)';
  }

  const trimmed = rawColor.trim();
  const lower = trimmed.toLowerCase();

  if (lower === 'none' || lower === 'transparent' || lower === 'currentcolor') {
    return trimmed;
  }

  const lum = parseHexLuminance(trimmed);
  if (lum !== null) {
    if (lum < 0.16) {
      return 'currentColor';
    }
    if (lum > 0.91) {
      return 'var(--diagram-surface, #ffffff)';
    }
    if (lum > 0.74) {
      return 'var(--diagram-subtle, #f1f1ef)';
    }
  }

  return trimmed;
}

function parseViewBoxDimensions(viewBox?: string): {
  raw: string;
  width: number;
  height: number;
} {
  const fallback = { raw: '0 0 800 440', width: 800, height: 440 };
  if (!viewBox) return fallback;
  const parts = viewBox
    .trim()
    .split(/[\s,]+/)
    .map((p) => Number(p));
  if (
    parts.length === 4 &&
    parts.every((n) => Number.isFinite(n)) &&
    parts[2] > 0 &&
    parts[3] > 0
  ) {
    return { raw: parts.join(' '), width: parts[2], height: parts[3] };
  }
  return fallback;
}

function renderSvgShape(shape: SvgShape, index: number): React.ReactElement {
  switch (shape.kind) {
    case 'rect':
      return (
        <rect
          key={`shape-${index}`}
          x={shape.x}
          y={shape.y}
          width={shape.width}
          height={shape.height}
          rx={shape.rx ?? 0}
          fill={normalizeSvgPaint(shape.fill, 'fill', 'rect')}
          stroke={normalizeSvgPaint(shape.stroke, 'stroke', 'rect')}
          strokeWidth={shape.stroke === 'none' ? 0 : (shape.strokeWidth ?? 1.6)}
          opacity={shape.opacity ?? 1}
        />
      );
    case 'circle':
      return (
        <circle
          key={`shape-${index}`}
          cx={shape.cx}
          cy={shape.cy}
          r={shape.r}
          fill={normalizeSvgPaint(shape.fill, 'fill', 'circle')}
          stroke={normalizeSvgPaint(shape.stroke, 'stroke', 'circle')}
          strokeWidth={shape.stroke === 'none' ? 0 : (shape.strokeWidth ?? 1.6)}
          opacity={shape.opacity ?? 1}
        />
      );
    case 'ellipse':
      return (
        <ellipse
          key={`shape-${index}`}
          cx={shape.cx}
          cy={shape.cy}
          rx={shape.rx}
          ry={shape.ry}
          fill={normalizeSvgPaint(shape.fill, 'fill', 'ellipse')}
          stroke={normalizeSvgPaint(shape.stroke, 'stroke', 'ellipse')}
          strokeWidth={shape.stroke === 'none' ? 0 : (shape.strokeWidth ?? 1.6)}
          opacity={shape.opacity ?? 1}
        />
      );
    case 'line':
      return (
        <line
          key={`shape-${index}`}
          x1={shape.x1}
          y1={shape.y1}
          x2={shape.x2}
          y2={shape.y2}
          stroke={normalizeSvgPaint(shape.stroke, 'stroke', 'line')}
          strokeWidth={shape.strokeWidth ?? 1.6}
          strokeDasharray={shape.strokeDasharray}
          opacity={shape.opacity ?? 1}
        />
      );
    case 'path':
      return (
        <path
          key={`shape-${index}`}
          d={shape.d}
          fill={normalizeSvgPaint(shape.fill, 'fill', 'path')}
          stroke={normalizeSvgPaint(shape.stroke, 'stroke', 'path')}
          strokeWidth={shape.stroke === 'none' ? 0 : (shape.strokeWidth ?? 1.6)}
          strokeDasharray={shape.strokeDasharray}
          opacity={shape.opacity ?? 1}
        />
      );
    case 'polygon':
      return (
        <polygon
          key={`shape-${index}`}
          points={shape.points}
          fill={normalizeSvgPaint(shape.fill, 'fill', 'polygon')}
          stroke={normalizeSvgPaint(shape.stroke, 'stroke', 'polygon')}
          strokeWidth={shape.stroke === 'none' ? 0 : (shape.strokeWidth ?? 1.6)}
          opacity={shape.opacity ?? 1}
        />
      );
    case 'text':
      return (
        <text
          key={`shape-${index}`}
          x={shape.x}
          y={shape.y}
          fontSize={shape.fontSize ?? 13}
          fontWeight={shape.fontWeight ?? 500}
          textAnchor={shape.textAnchor ?? 'start'}
          fill={normalizeSvgPaint(shape.fill, 'fill', 'text')}
          opacity={shape.opacity ?? 0.85}
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {shape.text}
        </text>
      );
  }
}

export function LabeledAnatomyExplorer({ spec }: LabeledAnatomyExplorerProps) {
  const [selfTestMode, setSelfTestMode] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(
    spec.hotspots[0]?.id ?? null,
  );
  const [revealedIds, setRevealedIds] = useState<Set<string>>(() => new Set());

  const vb = useMemo(() => parseViewBoxDimensions(spec.viewBox), [spec.viewBox]);

  const activeIndex = useMemo(() => {
    if (!selectedId) return -1;
    return spec.hotspots.findIndex((h) => h.id === selectedId);
  }, [spec.hotspots, selectedId]);

  const activeHotspot =
    activeIndex >= 0 ? spec.hotspots[activeIndex] : undefined;

  const isInspectorVisible =
    Boolean(activeHotspot) &&
    (!selfTestMode || (activeHotspot ? revealedIds.has(activeHotspot.id) : false));

  const toggleSelfTest = () => {
    setSelfTestMode((prev) => {
      const next = !prev;
      if (next) {
        setRevealedIds(new Set());
        setSelectedId(null);
      } else {
        setSelectedId(spec.hotspots[0]?.id ?? null);
      }
      return next;
    });
  };

  const resetSelfTestPins = () => {
    setRevealedIds(new Set());
    setSelectedId(null);
  };

  const handleSelectHotspot = (hotspotId: string, reveal = true) => {
    setSelectedId(hotspotId);
    if (selfTestMode && reveal) {
      setRevealedIds((prev) => {
        if (prev.has(hotspotId)) return prev;
        const next = new Set(prev);
        next.add(hotspotId);
        return next;
      });
    }
  };

  const handleStep = (delta: number) => {
    if (spec.hotspots.length === 0) return;
    const baseIndex = activeIndex >= 0 ? activeIndex : 0;
    const nextIndex =
      (baseIndex + delta + spec.hotspots.length) % spec.hotspots.length;
    const nextHotspot = spec.hotspots[nextIndex];
    if (nextHotspot) {
      handleSelectHotspot(nextHotspot.id, true);
    }
  };

  return (
    <div className="[--diagram-surface:#FFFFFF] dark:[--diagram-surface:#191919] [--diagram-subtle:#F1F1EF] dark:[--diagram-subtle:#2A2A2A]">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E6E6E4] bg-[#FBFBFA] px-4 py-2.5 dark:border-[#2E2E2E] dark:bg-[#202020]">
        <div className="flex items-center gap-2 text-xs text-[#787774] dark:text-[#9B9A97]">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          <span>
            {spec.hotspots.length} interactive{' '}
            {spec.hotspots.length === 1 ? 'pin' : 'pins'}
          </span>
          {selfTestMode && (
            <span className="rounded border border-[#E6E6E4] bg-white px-2 py-0.5 font-mono text-[11px] font-medium text-[#37352F] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB]">
              Revealed {revealedIds.size} / {spec.hotspots.length}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {selfTestMode && revealedIds.size > 0 && (
            <button
              type="button"
              onClick={resetSelfTestPins}
              className="inline-flex h-7 cursor-pointer items-center gap-1 rounded border border-[#E6E6E4] bg-white px-2.5 text-xs font-medium text-[#787774] transition-colors hover:bg-[#F1F1EF] hover:text-[#37352F] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#9B9A97] dark:hover:bg-[#2A2A2A] dark:hover:text-[#EBEBEB]"
            >
              <RotateCcw className="h-3 w-3" aria-hidden="true" />
              Mask All
            </button>
          )}
          <button
            type="button"
            aria-pressed={selfTestMode}
            onClick={toggleSelfTest}
            className={`inline-flex h-7 cursor-pointer items-center gap-1.5 rounded border px-2.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37352F]/30 dark:focus-visible:ring-[#EBEBEB]/30 ${
              selfTestMode
                ? 'border-[#37352F] bg-[#37352F] text-white dark:border-[#EBEBEB] dark:bg-[#EBEBEB] dark:text-[#191919]'
                : 'border-[#E6E6E4] bg-white text-[#37352F] hover:bg-[#F1F1EF] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB] dark:hover:bg-[#2A2A2A]'
            }`}
          >
            {selfTestMode ? (
              <EyeOff className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <Eye className="h-3.5 w-3.5" aria-hidden="true" />
            )}
            Self-Test Pins
          </button>
        </div>
      </div>

      {/* Main Split Body */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_1fr]">
        {/* SVG Stage */}
        <div className="flex flex-col border-b border-[#E6E6E4] bg-white p-4 dark:border-[#2E2E2E] dark:bg-[#191919] lg:border-r lg:border-b-0">
          <div className="relative w-full overflow-hidden rounded-md border border-[#E6E6E4] bg-[#FBFBFA] dark:border-[#2E2E2E] dark:bg-[#202020]">
            <svg
              viewBox={vb.raw}
              className="block h-auto w-full select-none text-[#37352F] dark:text-[#EBEBEB]"
              role="img"
              aria-label={spec.title}
            >
              {/* Rendered Diagram Geometry */}
              <g>{spec.shapes.map((shape, idx) => renderSvgShape(shape, idx))}</g>

              {/* Hotspot Pins */}
              <g>
                {spec.hotspots.map((hotspot, idx) => {
                  const isSelected = hotspot.id === selectedId;
                  const isRevealed =
                    !selfTestMode || revealedIds.has(hotspot.id);
                  const pinRadius = Math.max(12, Math.min(16, vb.width * 0.018));

                  return (
                    <g
                      key={hotspot.id}
                      role="button"
                      tabIndex={0}
                      aria-label={
                        isRevealed
                          ? `Pin ${idx + 1}: ${hotspot.label}`
                          : `Pin ${idx + 1} (hidden — activate to reveal)`
                      }
                      aria-pressed={isSelected}
                      onClick={() => handleSelectHotspot(hotspot.id, true)}
                      onMouseEnter={() => {
                        if (!selfTestMode) {
                          handleSelectHotspot(hotspot.id, false);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleSelectHotspot(hotspot.id, true);
                        }
                      }}
                      className="cursor-pointer outline-none"
                    >
                      {isSelected && (
                        <circle
                          cx={hotspot.x}
                          cy={hotspot.y}
                          r={pinRadius + 4.5}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          opacity={0.4}
                        />
                      )}
                      <circle
                        cx={hotspot.x}
                        cy={hotspot.y}
                        r={pinRadius}
                        fill={
                          isSelected
                            ? 'currentColor'
                            : 'var(--diagram-surface, #ffffff)'
                        }
                        stroke="currentColor"
                        strokeWidth={isSelected ? 2 : 1.6}
                      />
                      <text
                        x={hotspot.x}
                        y={hotspot.y + 4}
                        textAnchor="middle"
                        fontSize={11}
                        fontWeight={600}
                        fill={
                          isSelected
                            ? 'var(--diagram-surface, #ffffff)'
                            : 'currentColor'
                        }
                        style={{
                          fontFamily: 'var(--font-mono)',
                          pointerEvents: 'none',
                        }}
                      >
                        {idx + 1}
                      </text>
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>

          {/* Quick-Jump Pin Strip */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {spec.hotspots.map((hotspot, idx) => {
              const isSelected = hotspot.id === selectedId;
              const isMasked = selfTestMode && !revealedIds.has(hotspot.id);
              return (
                <button
                  key={hotspot.id}
                  type="button"
                  onClick={() => handleSelectHotspot(hotspot.id, true)}
                  aria-pressed={isSelected}
                  className={`inline-flex cursor-pointer items-center gap-1.5 rounded border px-2 py-1 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37352F]/30 dark:focus-visible:ring-[#EBEBEB]/30 ${
                    isSelected
                      ? 'border-[#37352F] bg-[#37352F] text-white dark:border-[#EBEBEB] dark:bg-[#EBEBEB] dark:text-[#191919]'
                      : 'border-[#E6E6E4] bg-[#FBFBFA] text-[#37352F] hover:bg-[#F1F1EF] dark:border-[#2E2E2E] dark:bg-[#202020] dark:text-[#EBEBEB] dark:hover:bg-[#2A2A2A]'
                  }`}
                >
                  <span className="font-mono text-[11px] font-semibold">
                    {idx + 1}
                  </span>
                  <span className={isMasked ? 'italic opacity-75' : ''}>
                    {isMasked ? 'Hidden' : hotspot.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Side Inspector Card */}
        <div className="flex flex-col justify-between bg-[#FBFBFA] p-4 dark:bg-[#202020]">
          {isInspectorVisible && activeHotspot ? (
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 min-w-6 items-center justify-center rounded border border-[#E6E6E4] bg-white px-1.5 font-mono text-xs font-semibold text-[#37352F] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB]">
                    #{activeIndex + 1}
                  </span>
                  <span className="rounded border border-[#E6E6E4] bg-white px-2 py-0.5 text-[11px] font-medium text-[#787774] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#9B9A97]">
                    {activeHotspot.category}
                  </span>
                </div>
              </div>

              <h4 className="text-base font-semibold tracking-tight text-[#37352F] dark:text-[#EBEBEB]">
                {activeHotspot.label}
              </h4>

              <div className="rounded-md border border-[#E6E6E4] bg-white px-3 py-2 dark:border-[#2E2E2E] dark:bg-[#191919]">
                <div className="text-[10px] font-medium tracking-wider text-[#787774] uppercase dark:text-[#9B9A97]">
                  IB Markscheme Keyword
                </div>
                <div className="mt-0.5 font-mono text-xs font-medium text-[#37352F] dark:text-[#EBEBEB]">
                  {activeHotspot.examKeyword}
                </div>
              </div>

              <div className="pt-0.5">
                <MarkdownMath
                  content={activeHotspot.detailMarkdown}
                  className="text-[13.5px] leading-relaxed text-[#37352F] dark:text-[#EBEBEB]"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center rounded-md border border-dashed border-[#E6E6E4] bg-white px-4 py-8 text-center dark:border-[#2E2E2E] dark:bg-[#191919]">
              <EyeOff
                className="mb-2 h-5 w-5 text-[#787774] dark:text-[#9B9A97]"
                aria-hidden="true"
              />
              <p className="text-sm font-medium text-[#37352F] dark:text-[#EBEBEB]">
                Self-Test Pins Active
              </p>
              <p className="mt-1 max-w-xs text-xs leading-relaxed text-[#787774] dark:text-[#9B9A97]">
                Click any numbered pin on the diagram or strip below to reveal
                its anatomical/structural label and IB markscheme keyword.
              </p>
            </div>
          )}

          {/* Inspector Footer Stepper */}
          {spec.hotspots.length > 1 && (
            <div className="mt-4 flex items-center justify-between border-t border-[#E6E6E4] pt-3 dark:border-[#2E2E2E]">
              <button
                type="button"
                onClick={() => handleStep(-1)}
                className="inline-flex h-7 cursor-pointer items-center gap-1 rounded border border-[#E6E6E4] bg-white px-2.5 text-xs font-medium text-[#37352F] transition-colors hover:bg-[#F1F1EF] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB] dark:hover:bg-[#2A2A2A]"
              >
                <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                Prev Pin
              </button>
              <span className="font-mono text-[11px] text-[#787774] dark:text-[#9B9A97]">
                {activeIndex >= 0 ? activeIndex + 1 : '—'} /{' '}
                {spec.hotspots.length}
              </span>
              <button
                type="button"
                onClick={() => handleStep(1)}
                className="inline-flex h-7 cursor-pointer items-center gap-1 rounded border border-[#E6E6E4] bg-white px-2.5 text-xs font-medium text-[#37352F] transition-colors hover:bg-[#F1F1EF] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB] dark:hover:bg-[#2A2A2A]"
              >
                Next Pin
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LabeledAnatomyExplorer;
