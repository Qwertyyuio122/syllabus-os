'use client';

import React, { useMemo, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  MapPin,
  Minus,
  Plus,
  RotateCcw,
} from 'lucide-react';
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

interface ShapeFocusContext {
  activeFocusId: string | null;
  hasAnyFocusTags: boolean;
}

function getShapeFocusStyle(shape: SvgShape, focus: ShapeFocusContext) {
  const baseOpacity =
    shape.opacity ?? (shape.kind === 'text' ? 0.88 : 1);
  const tags = shape.focusTags;
  const hasTags = Array.isArray(tags) && tags.length > 0;
  const isMatched =
    Boolean(focus.activeFocusId) &&
    hasTags &&
    tags.includes(focus.activeFocusId as string);

  if (shape.onlyWhenFocused) {
    return {
      opacity: isMatched ? baseOpacity : 0,
      strokeBoost: isMatched ? 0.2 : 0,
      shouldAnimate: isMatched,
      transitionClass:
        'transition-opacity duration-300 motion-reduce:transition-none',
    };
  }

  if (!focus.hasAnyFocusTags || !focus.activeFocusId) {
    return {
      opacity: baseOpacity,
      strokeBoost: 0,
      shouldAnimate: Boolean(
        (shape.kind === 'line' || shape.kind === 'path') && shape.animatedFlow,
      ),
      transitionClass:
        'transition-opacity duration-300 motion-reduce:transition-none',
    };
  }

  if (hasTags) {
    return {
      opacity: isMatched ? Math.max(baseOpacity, 0.92) : Math.min(baseOpacity, 0.22),
      strokeBoost: isMatched ? 0.55 : 0,
      shouldAnimate: isMatched,
      transitionClass:
        'transition-opacity duration-300 motion-reduce:transition-none',
    };
  }

  // Untagged structural backdrop (axes, intermediate energy lines, cell border)
  return {
    opacity: shape.kind === 'text' ? baseOpacity * 0.78 : baseOpacity * 0.82,
    strokeBoost: 0,
    shouldAnimate: false,
    transitionClass:
      'transition-opacity duration-300 motion-reduce:transition-none',
  };
}

function renderSvgShape(
  shape: SvgShape,
  index: number,
  focus: ShapeFocusContext,
): React.ReactElement {
  const { opacity, strokeBoost, shouldAnimate, transitionClass } =
    getShapeFocusStyle(shape, focus);

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
          strokeWidth={
            shape.stroke === 'none' ? 0 : (shape.strokeWidth ?? 1.6) + strokeBoost
          }
          opacity={opacity}
          className={transitionClass}
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
          strokeWidth={
            shape.stroke === 'none'
              ? 0
              : (shape.strokeWidth ?? 1.6) + strokeBoost
          }
          opacity={opacity}
          className={transitionClass}
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
          strokeWidth={
            shape.stroke === 'none'
              ? 0
              : (shape.strokeWidth ?? 1.6) + strokeBoost
          }
          opacity={opacity}
          className={transitionClass}
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
          strokeWidth={(shape.strokeWidth ?? 1.6) + strokeBoost}
          strokeDasharray={shape.strokeDasharray}
          strokeLinecap="round"
          opacity={opacity}
          className={`${transitionClass}${
            shape.animatedFlow && shouldAnimate ? ' animate-diagram-flow' : ''
          }`}
        />
      );
    case 'path':
      return (
        <path
          key={`shape-${index}`}
          d={shape.d}
          fill={normalizeSvgPaint(shape.fill, 'fill', 'path')}
          stroke={normalizeSvgPaint(shape.stroke, 'stroke', 'path')}
          strokeWidth={
            shape.stroke === 'none'
              ? 0
              : (shape.strokeWidth ?? 1.6) + strokeBoost
          }
          strokeDasharray={shape.strokeDasharray}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={opacity}
          className={`${transitionClass}${
            shape.animatedFlow && shouldAnimate ? ' animate-diagram-flow' : ''
          }`}
        />
      );
    case 'polygon':
      return (
        <polygon
          key={`shape-${index}`}
          points={shape.points}
          fill={normalizeSvgPaint(shape.fill, 'fill', 'polygon')}
          stroke={normalizeSvgPaint(shape.stroke, 'stroke', 'polygon')}
          strokeWidth={
            shape.stroke === 'none'
              ? 0
              : (shape.strokeWidth ?? 1.6) + strokeBoost
          }
          opacity={opacity}
          className={transitionClass}
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
          opacity={opacity}
          className={transitionClass}
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
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [revealedIds, setRevealedIds] = useState<Set<string>>(() => new Set());

  // Interactive Zoom & Pan state
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const dragStartRef = useRef<{
    clientX: number;
    clientY: number;
    panX: number;
    panY: number;
  } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const safeSpecId = spec.id.replace(/[^a-zA-Z0-9_-]/g, '') || 'explorer';
  const gridPatternId = `plate-dots-${safeSpecId}`;

  const vb = useMemo(() => parseViewBoxDimensions(spec.viewBox), [spec.viewBox]);

  const hasAnyFocusTags = useMemo(
    () =>
      spec.shapes.some(
        (shape) => Array.isArray(shape.focusTags) && shape.focusTags.length > 0,
      ),
    [spec.shapes],
  );

  const focusContext: ShapeFocusContext = useMemo(
    () => ({
      activeFocusId: selfTestMode ? null : (hoveredId ?? selectedId),
      hasAnyFocusTags,
    }),
    [hasAnyFocusTags, hoveredId, selectedId, selfTestMode],
  );

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

  const updateZoom = (nextZoom: number) => {
    const clamped = Math.max(1, Math.min(2.25, Number(nextZoom.toFixed(2))));
    setZoom(clamped);
    if (clamped === 1) {
      setPan({ x: 0, y: 0 });
    }
  };

  const resetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const hoveredHotspot =
    !selfTestMode && hoveredId
      ? spec.hotspots.find((h) => h.id === hoveredId)
      : undefined;

  return (
    <div className="[--diagram-surface:#FFFFFF] dark:[--diagram-surface:#1A1A1D] [--diagram-subtle:#F1F1EF] dark:[--diagram-subtle:#2A2A2E]">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] bg-white/30 px-4 py-2.5 dark:border-white/[0.08] dark:bg-white/[0.02]">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#6E6E73] dark:text-[#98989D]">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          <span>
            {spec.hotspots.length} interactive{' '}
            {spec.hotspots.length === 1 ? 'pin' : 'pins'}
          </span>
          {!selfTestMode && hasAnyFocusTags && activeHotspot && (
            <span className="glass-pill max-w-[210px] truncate rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
              Focus: {activeHotspot.category}
            </span>
          )}
          {selfTestMode && (
            <span className="glass-pill rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
              Revealed {revealedIds.size} / {spec.hotspots.length}
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Zoom Controls */}
          <div
            role="group"
            aria-label="Diagram zoom controls"
            className="glass-pill inline-flex items-center rounded-full p-0.5"
          >
            <button
              type="button"
              onClick={() => updateZoom(zoom - 0.25)}
              disabled={zoom <= 1}
              aria-label="Zoom out"
              className="inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-[#6E6E73] transition-colors hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:cursor-not-allowed disabled:opacity-35 dark:text-[#98989D] dark:hover:bg-white/[0.1] dark:hover:text-[#F5F5F7]"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="min-w-[42px] text-center font-mono text-[10.5px] font-medium tabular-nums text-[#1D1D1F] dark:text-[#F5F5F7]">
              {Math.round(zoom * 100)}%
            </span>
            <button
              type="button"
              onClick={() => updateZoom(zoom + 0.25)}
              disabled={zoom >= 2.25}
              aria-label="Zoom in"
              className="inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-[#6E6E73] transition-colors hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:cursor-not-allowed disabled:opacity-35 dark:text-[#98989D] dark:hover:bg-white/[0.1] dark:hover:text-[#F5F5F7]"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>

          {(zoom > 1 || pan.x !== 0 || pan.y !== 0) && (
            <button
              type="button"
              onClick={resetView}
              className="glass-pill inline-flex h-7 cursor-pointer items-center gap-1 rounded-full px-2.5 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D] dark:hover:text-[#F5F5F7]"
            >
              Reset View
            </button>
          )}

          {selfTestMode && revealedIds.size > 0 && (
            <button
              type="button"
              onClick={resetSelfTestPins}
              className="glass-pill inline-flex h-7 cursor-pointer items-center gap-1 rounded-full px-2.5 text-xs font-medium text-[#6E6E73] transition-colors hover:text-[#1D1D1F] dark:text-[#98989D] dark:hover:text-[#F5F5F7]"
            >
              <RotateCcw className="h-3 w-3" aria-hidden="true" />
              Mask All
            </button>
          )}
          <button
            type="button"
            aria-pressed={selfTestMode}
            onClick={toggleSelfTest}
            className={`inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:focus-visible:ring-[#F5F5F7]/25 ${
              selfTestMode
                ? 'bg-[#1D1D1F] text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                : 'glass-pill text-[#1D1D1F] hover:bg-white/95 dark:text-[#F5F5F7] dark:hover:bg-white/[0.12]'
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
      <div className="grid grid-cols-1 xl:grid-cols-[1.6fr_1fr]">
        {/* SVG Stage */}
        <div className="flex flex-col border-b border-black/[0.06] p-4 dark:border-white/[0.08] xl:border-r xl:border-b-0">
          <div
            className={`glass-surface relative w-full overflow-hidden rounded-2xl ${
              zoom > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : ''
            }`}
            onPointerDown={(e) => {
              if (zoom <= 1) return;
              if ((e.target as HTMLElement).closest('[role="button"]')) return;
              setIsDragging(true);
              dragStartRef.current = {
                clientX: e.clientX,
                clientY: e.clientY,
                panX: pan.x,
                panY: pan.y,
              };
            }}
            onPointerMove={(e) => {
              if (!isDragging || !dragStartRef.current) return;
              const dx = e.clientX - dragStartRef.current.clientX;
              const dy = e.clientY - dragStartRef.current.clientY;
              const maxPanX = ((zoom - 1) * vb.width) / 2;
              const maxPanY = ((zoom - 1) * vb.height) / 2;
              setPan({
                x: Math.max(-maxPanX, Math.min(maxPanX, dragStartRef.current.panX + dx)),
                y: Math.max(-maxPanY, Math.min(maxPanY, dragStartRef.current.panY + dy)),
              });
            }}
            onPointerUp={() => {
              setIsDragging(false);
              dragStartRef.current = null;
            }}
            onPointerLeave={() => {
              setIsDragging(false);
              dragStartRef.current = null;
            }}
          >
            <svg
              viewBox={vb.raw}
              className="block h-auto w-full select-none text-[#1D1D1F] dark:text-[#F5F5F7]"
              role="img"
              aria-label={spec.title}
            >
              <defs>
                <pattern
                  id={gridPatternId}
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    cx="2"
                    cy="2"
                    r="0.85"
                    fill="currentColor"
                    opacity="0.12"
                  />
                </pattern>
              </defs>

              <rect
                x="0"
                y="0"
                width={vb.width}
                height={vb.height}
                fill={`url(#${gridPatternId})`}
              />

              <g
                transform={`translate(${vb.width / 2 + pan.x}, ${vb.height / 2 + pan.y}) scale(${zoom}) translate(${-vb.width / 2}, ${-vb.height / 2})`}
              >
                {/* Rendered Diagram Geometry */}
                <g>
                  {spec.shapes.map((shape, idx) =>
                    renderSvgShape(shape, idx, focusContext),
                  )}
                </g>

                {/* Hotspot Pins */}
                <g>
                  {spec.hotspots.map((hotspot, idx) => {
                    const isSelected = hotspot.id === selectedId;
                    const isHovered = hotspot.id === hoveredId;
                    const isRevealed =
                      !selfTestMode || revealedIds.has(hotspot.id);
                    const pinRadius = Math.max(
                      12,
                      Math.min(15, vb.width * 0.017),
                    );

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
                          setHoveredId(hotspot.id);
                          if (!selfTestMode) {
                            handleSelectHotspot(hotspot.id, false);
                          }
                        }}
                        onMouseLeave={() => setHoveredId(null)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleSelectHotspot(hotspot.id, true);
                          }
                        }}
                        className="cursor-pointer outline-none"
                        opacity={
                          selectedId && !isSelected && !isHovered ? 0.72 : 1
                        }
                      >
                        {isSelected && (
                          <circle
                            cx={hotspot.x}
                            cy={hotspot.y}
                            r={pinRadius + 5.5}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.6}
                            className="animate-pin-ripple"
                          />
                        )}
                        <circle
                          cx={hotspot.x}
                          cy={hotspot.y}
                          r={pinRadius + 1.5}
                          fill="var(--diagram-surface, #ffffff)"
                          opacity={0.75}
                        />
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
                          strokeWidth={isSelected ? 2.1 : 1.6}
                        />
                        <text
                          x={hotspot.x}
                          y={hotspot.y + 4}
                          textAnchor="middle"
                          fontSize={11}
                          fontWeight={700}
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
              </g>
            </svg>

            {hoveredHotspot && (
              <div className="glass-panel pointer-events-none absolute bottom-3 left-3 rounded-full px-3 py-1 text-[11px] font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
                {hoveredHotspot.label}
              </div>
            )}
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
                  className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1 text-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:focus-visible:ring-[#F5F5F7]/25 ${
                    isSelected
                      ? 'bg-[#1D1D1F] text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                      : 'glass-pill text-[#1D1D1F] hover:bg-white/95 dark:text-[#F5F5F7] dark:hover:bg-white/[0.12]'
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
        <div className="flex flex-col justify-between bg-white/25 p-5 dark:bg-white/[0.015]">
          {isInspectorVisible && activeHotspot ? (
            <div className="space-y-3.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="glass-pill inline-flex h-6 min-w-6 items-center justify-center rounded-full px-2 font-mono text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                    #{activeIndex + 1}
                  </span>
                  <span className="glass-pill rounded-full px-2.5 py-0.5 text-[11px] font-medium text-[#6E6E73] dark:text-[#98989D]">
                    {activeHotspot.category}
                  </span>
                </div>
              </div>

              <h4 className="text-base font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                {activeHotspot.label}
              </h4>

              <div className="glass-surface rounded-2xl px-3.5 py-2.5">
                <div className="text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
                  IB Markscheme Keyword
                </div>
                <div className="mt-1 font-mono text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
                  {activeHotspot.examKeyword}
                </div>
              </div>

              <div className="pt-0.5">
                <MarkdownMath
                  content={activeHotspot.detailMarkdown}
                  className="text-[13.5px] leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
                />
              </div>
            </div>
          ) : (
            <div className="glass-surface flex flex-1 flex-col items-center justify-center rounded-2xl border-dashed px-4 py-8 text-center">
              <EyeOff
                className="mb-2 h-5 w-5 text-[#6E6E73] dark:text-[#98989D]"
                aria-hidden="true"
              />
              <p className="text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
                Self-Test Pins Active
              </p>
              <p className="mt-1 max-w-xs text-xs leading-relaxed text-[#6E6E73] dark:text-[#98989D]">
                Click any numbered pin on the diagram or strip below to reveal
                its anatomical/structural label and IB markscheme keyword.
              </p>
            </div>
          )}

          {/* Inspector Footer Stepper */}
          {spec.hotspots.length > 1 && (
            <div className="mt-5 flex items-center justify-between border-t border-black/[0.06] pt-3.5 dark:border-white/[0.08]">
              <button
                type="button"
                onClick={() => handleStep(-1)}
                className="glass-pill inline-flex h-7 cursor-pointer items-center gap-1 rounded-full px-3 text-xs font-medium text-[#1D1D1F] transition-colors hover:bg-white/95 dark:text-[#F5F5F7] dark:hover:bg-white/[0.12]"
              >
                <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                Prev Pin
              </button>
              <span className="font-mono text-[11px] tabular-nums text-[#6E6E73] dark:text-[#98989D]">
                {activeIndex >= 0 ? activeIndex + 1 : '—'} /{' '}
                {spec.hotspots.length}
              </span>
              <button
                type="button"
                onClick={() => handleStep(1)}
                className="glass-pill inline-flex h-7 cursor-pointer items-center gap-1 rounded-full px-3 text-xs font-medium text-[#1D1D1F] transition-colors hover:bg-white/95 dark:text-[#F5F5F7] dark:hover:bg-white/[0.12]"
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
