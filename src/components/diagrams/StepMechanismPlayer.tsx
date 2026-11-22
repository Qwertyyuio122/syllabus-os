'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Palette, Pause, Play } from 'lucide-react';
import type { StepMechanismNode, StepMechanismSpec } from '@/types/diagrams';
import { InlineKaTeX, MarkdownMath } from '@/components/notes/MarkdownMath';

const GROUP_COLORS = [
  { fill: '#2563EB', tint: 'rgba(37, 99, 235, 0.11)', border: '#3B82F6' },
  { fill: '#059669', tint: 'rgba(5, 150, 105, 0.11)', border: '#10B981' },
  { fill: '#D97706', tint: 'rgba(217, 119, 6, 0.12)', border: '#F59E0B' },
  { fill: '#7C3AED', tint: 'rgba(124, 58, 237, 0.11)', border: '#8B5CF6' },
  { fill: '#0D9488', tint: 'rgba(13, 148, 136, 0.11)', border: '#14B8A6' },
  { fill: '#E11D48', tint: 'rgba(225, 29, 72, 0.11)', border: '#F43F5E' },
] as const;

export interface StepMechanismPlayerProps {
  spec: StepMechanismSpec;
}

interface NodeBox {
  node: StepMechanismNode;
  cx: number;
  cy: number;
  w: number;
  h: number;
  labelLines: string[];
  sublabelLines: string[];
}

const CANVAS_W = 920;
const CANVAS_H = 420;

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

function wrapLines(text: string, maxCharsPerLine: number, maxLines = 2): string[] {
  const words = text.trim().split(/\s+/);
  if (words.length === 0) return [''];
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    if (!current) {
      current = word;
    } else if (current.length + 1 + word.length <= maxCharsPerLine) {
      current = `${current} ${word}`;
    } else {
      lines.push(current);
      current = word;
      if (lines.length === maxLines) break;
    }
  }
  if (lines.length < maxLines && current) {
    lines.push(current);
  }
  // If text still overflowed maxLines, gently trim last line
  const joinedLen = lines.join(' ').length;
  if (joinedLen < text.trim().length && lines.length === maxLines) {
    const last = lines[maxLines - 1];
    lines[maxLines - 1] =
      last.length > 2 ? `${last.slice(0, Math.max(1, maxCharsPerLine - 1))}…` : last;
  }
  return lines;
}

function buildNodeBoxes(nodes: StepMechanismNode[]): Map<string, NodeBox> {
  // Scale original 800x400 coordinates into wider 920x420 breathing room
  const boxes: NodeBox[] = nodes.map((node) => {
    const labelLines = wrapLines(node.label, 20, 2);
    const sublabelLines = node.sublabel ? wrapLines(node.sublabel, 24, 2) : [];

    const maxLabelLen = Math.max(...labelLines.map((l) => l.length), 10);
    const maxSubLen = sublabelLines.length
      ? Math.max(...sublabelLines.map((l) => l.length))
      : 0;

    const w = clamp(
      Math.max(maxLabelLen * 7.6 + 34, maxSubLen * 6.5 + 30),
      144,
      212,
    );
    const h =
      26 +
      labelLines.length * 15 +
      (sublabelLines.length > 0 ? 6 + sublabelLines.length * 13 : 0);

    const scaledX = (node.x / 800) * CANVAS_W;
    const scaledY = (node.y / 400) * CANVAS_H;

    return {
      node,
      cx: clamp(scaledX, w / 2 + 16, CANVAS_W - w / 2 - 16),
      cy: clamp(scaledY, h / 2 + 16, CANVAS_H - h / 2 - 16),
      w,
      h,
      labelLines,
      sublabelLines,
    };
  });

  // Gentle iterative collision-separation pass so boxes never overlap each other
  for (let iter = 0; iter < 10; iter += 1) {
    for (let i = 0; i < boxes.length; i += 1) {
      for (let j = i + 1; j < boxes.length; j += 1) {
        const a = boxes[i];
        const b = boxes[j];
        const overlapX = (a.w + b.w) / 2 + 18 - Math.abs(b.cx - a.cx);
        const overlapY = (a.h + b.h) / 2 + 16 - Math.abs(b.cy - a.cy);

        if (overlapX > 0 && overlapY > 0) {
          if (overlapX <= overlapY) {
            const dir = b.cx >= a.cx ? 1 : -1;
            const shift = overlapX / 2 + 1;
            a.cx = clamp(a.cx - dir * shift, a.w / 2 + 14, CANVAS_W - a.w / 2 - 14);
            b.cx = clamp(b.cx + dir * shift, b.w / 2 + 14, CANVAS_W - b.w / 2 - 14);
          } else {
            const dir = b.cy >= a.cy ? 1 : -1;
            const shift = overlapY / 2 + 1;
            a.cy = clamp(a.cy - dir * shift, a.h / 2 + 14, CANVAS_H - a.h / 2 - 14);
            b.cy = clamp(b.cy + dir * shift, b.h / 2 + 14, CANVAS_H - b.h / 2 - 14);
          }
        }
      }
    }
  }

  const map = new Map<string, NodeBox>();
  for (const box of boxes) {
    map.set(box.node.id, box);
  }
  return map;
}

function intersectRectBoundary(
  cx: number,
  cy: number,
  w: number,
  h: number,
  dx: number,
  dy: number,
  pad = 0,
): { x: number; y: number } {
  const halfW = w / 2 + pad;
  const halfH = h / 2 + pad;
  if (Math.abs(dx) < 1e-6 && Math.abs(dy) < 1e-6) {
    return { x: cx, y: cy };
  }
  const scaleX = Math.abs(dx) > 1e-6 ? halfW / Math.abs(dx) : Infinity;
  const scaleY = Math.abs(dy) > 1e-6 ? halfH / Math.abs(dy) : Infinity;
  const t = Math.min(scaleX, scaleY);
  return { x: cx + dx * t, y: cy + dy * t };
}

function truncateText(text: string, maxChars: number): string {
  if (text.length <= maxChars) return text;
  return `${text.slice(0, maxChars - 1)}…`;
}

export function StepMechanismPlayer({ spec }: StepMechanismPlayerProps) {
  const sortedSteps = useMemo(
    () => [...spec.steps].sort((a, b) => a.stepNumber - b.stepNumber),
    [spec.steps],
  );

  const [stepIndex, setStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [monochromeMode, setMonochromeMode] = useState<boolean>(
    () => spec.palette === 'monochrome',
  );

  const safeId = spec.id.replace(/[^a-zA-Z0-9_-]/g, '') || 'mechanism';
  const activeMarkerId = `arrow-active-${safeId}`;
  const mutedMarkerId = `arrow-muted-${safeId}`;
  const gridPatternId = `mech-grid-${safeId}`;

  const groupColorMap = useMemo(() => {
    const map = new Map<string, (typeof GROUP_COLORS)[number]>();
    let idx = 0;
    for (const node of spec.nodes) {
      const key = node.group?.trim() || node.id;
      if (!map.has(key)) {
        map.set(key, GROUP_COLORS[idx % GROUP_COLORS.length]);
        idx += 1;
      }
    }
    return map;
  }, [spec.nodes]);

  useEffect(() => {
    if (!isPlaying || sortedSteps.length <= 1) return;
    const timer = window.setInterval(() => {
      setStepIndex((prev) => (prev + 1) % sortedSteps.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [isPlaying, sortedSteps.length]);

  const safeIndex = clamp(stepIndex, 0, Math.max(0, sortedSteps.length - 1));
  const currentStep = sortedSteps[safeIndex];

  const activeNodeSet = useMemo(
    () => new Set(currentStep?.activeNodeIds ?? []),
    [currentStep],
  );
  const activeEdgeSet = useMemo(
    () => new Set(currentStep?.activeEdgeIds ?? []),
    [currentStep],
  );

  const nodeBoxes = useMemo(() => buildNodeBoxes(spec.nodes), [spec.nodes]);

  const edgePairs = useMemo(() => {
    const pairCounts = new Map<string, number>();
    for (const edge of spec.edges) {
      const key = `${edge.from}->${edge.to}`;
      pairCounts.set(key, (pairCounts.get(key) ?? 0) + 1);
    }
    return pairCounts;
  }, [spec.edges]);

  const handleSelectStep = (idx: number) => {
    setIsPlaying(false);
    setStepIndex(clamp(idx, 0, Math.max(0, sortedSteps.length - 1)));
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setStepIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setIsPlaying(false);
    setStepIndex((prev) => Math.min(sortedSteps.length - 1, prev + 1));
  };

  const handleNodeClick = (nodeId: string) => {
    const matchIdx = sortedSteps.findIndex((s) =>
      s.activeNodeIds.includes(nodeId),
    );
    if (matchIdx >= 0) {
      handleSelectStep(matchIdx);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const tag = (e.target as HTMLElement | null)?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  if (!currentStep) {
    return null;
  }

  const progressPct =
    sortedSteps.length > 0
      ? Math.round(((safeIndex + 1) / sortedSteps.length) * 100)
      : 0;

  return (
    <div
      onKeyDown={handleKeyDown}
      className="[--diagram-surface:#FFFFFF] dark:[--diagram-surface:#1A1A1D] [--diagram-node:#FBFBFA] dark:[--diagram-node:#222226]"
    >
      {/* Playback Controls & Step Pills */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.06] bg-white/30 px-4 py-2.5 dark:border-white/[0.08] dark:bg-white/[0.02]">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setIsPlaying((p) => !p)}
            disabled={sortedSteps.length <= 1}
            aria-label={isPlaying ? 'Pause mechanism' : 'Play mechanism'}
            className={`inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-all disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:focus-visible:ring-[#F5F5F7]/25 ${
              isPlaying
                ? 'bg-[#1D1D1F] text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                : 'glass-pill text-[#1D1D1F] hover:bg-white/95 dark:text-[#F5F5F7] dark:hover:bg-white/[0.12]'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="h-3 w-3" aria-hidden="true" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="h-3 w-3" aria-hidden="true" />
                <span>Play</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handlePrev}
            disabled={safeIndex === 0}
            aria-label="Previous step"
            className="glass-pill inline-flex h-7 cursor-pointer items-center gap-1 rounded-full px-2.5 text-xs font-medium text-[#1D1D1F] transition-colors hover:bg-white/95 disabled:cursor-not-allowed disabled:opacity-40 dark:text-[#F5F5F7] dark:hover:bg-white/[0.12]"
          >
            <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">Prev</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={safeIndex === sortedSteps.length - 1}
            aria-label="Next step"
            className="glass-pill inline-flex h-7 cursor-pointer items-center gap-1 rounded-full px-2.5 text-xs font-medium text-[#1D1D1F] transition-colors hover:bg-white/95 disabled:cursor-not-allowed disabled:opacity-40 dark:text-[#F5F5F7] dark:hover:bg-white/[0.12]"
          >
            <span>Next</span>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>

        {/* Clickable Step Pills 1..N + Monochrome Toggle */}
        <div className="flex flex-wrap items-center gap-2">
          <div
            className="flex flex-wrap items-center gap-1"
            role="group"
            aria-label="Mechanism steps"
          >
            {sortedSteps.map((step, idx) => {
              const isCurrent = idx === safeIndex;
              return (
                <button
                  key={`${step.stepNumber}-${idx}`}
                  type="button"
                  onClick={() => handleSelectStep(idx)}
                  title={step.title}
                  aria-label={`Step ${step.stepNumber}: ${step.title}`}
                  aria-current={isCurrent ? 'step' : undefined}
                  className={`inline-flex h-7 min-w-7 cursor-pointer items-center justify-center rounded-full px-2.5 font-mono text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:focus-visible:ring-[#F5F5F7]/25 ${
                    isCurrent
                      ? 'bg-[#1D1D1F] text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                      : 'glass-pill text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D] dark:hover:text-[#F5F5F7]'
                  }`}
                >
                  {step.stepNumber}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            aria-pressed={monochromeMode}
            onClick={() => setMonochromeMode((p) => !p)}
            className={`inline-flex h-7 cursor-pointer items-center gap-1 rounded-full px-2.5 text-xs font-medium transition-all ${
              monochromeMode
                ? 'bg-[#1D1D1F] text-white dark:bg-[#F5F5F7] dark:text-[#111113]'
                : 'glass-pill text-[#1D1D1F] dark:text-[#F5F5F7]'
            }`}
          >
            <Palette className="h-3 w-3" aria-hidden="true" />
            <span className="hidden sm:inline">Monochrome</span>
          </button>
        </div>
      </div>

      {/* Interactive Node-Edge SVG Canvas */}
      <div className="border-b border-black/[0.06] p-4 dark:border-white/[0.08]">
        <div className="glass-surface overflow-hidden rounded-2xl">
          <svg
            viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
            className="block h-auto w-full select-none text-[#1D1D1F] dark:text-[#F5F5F7]"
            role="img"
            aria-label={`${spec.title} — Step ${currentStep.stepNumber}: ${currentStep.title}`}
          >
            <defs>
              <pattern
                id={gridPatternId}
                width="22"
                height="22"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="2"
                  cy="2"
                  r="0.85"
                  fill="currentColor"
                  opacity="0.11"
                />
              </pattern>
              <marker
                id={activeMarkerId}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="6.5"
                markerHeight="6.5"
                orient="auto-start-reverse"
              >
                <path
                  d="M 0 1.5 L 9 5 L 0 8.5 z"
                  fill={monochromeMode ? 'currentColor' : '#2563EB'}
                />
              </marker>
              <marker
                id={mutedMarkerId}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path
                  d="M 0 1.5 L 9 5 L 0 8.5 z"
                  fill="currentColor"
                  opacity="0.32"
                />
              </marker>
            </defs>

            <rect
              x="0"
              y="0"
              width={CANVAS_W}
              height={CANVAS_H}
              fill={`url(#${gridPatternId})`}
            />

            {/* Edges */}
            <g>
              {spec.edges.map((edge) => {
                const fromBox = nodeBoxes.get(edge.from);
                const toBox = nodeBoxes.get(edge.to);
                if (!fromBox || !toBox) return null;

                const isActive = activeEdgeSet.has(edge.id);
                const markerEnd = `url(#${isActive ? activeMarkerId : mutedMarkerId})`;

                // Self-loop
                if (edge.from === edge.to) {
                  const loopPath = `M ${fromBox.cx - 18} ${fromBox.cy - fromBox.h / 2} C ${fromBox.cx - 32} ${fromBox.cy - fromBox.h / 2 - 42}, ${fromBox.cx + 32} ${fromBox.cy - fromBox.h / 2 - 42}, ${fromBox.cx + 18} ${fromBox.cy - fromBox.h / 2 - 3}`;
                  return (
                    <g key={edge.id}>
                      <path
                        d={loopPath}
                        fill="none"
                        stroke={
                          isActive && !monochromeMode ? '#2563EB' : 'currentColor'
                        }
                        strokeWidth={isActive ? 2.6 : 1.3}
                        strokeDasharray={
                          isActive ? '6 4' : edge.dashed ? '5 4' : undefined
                        }
                        className={isActive ? 'animate-diagram-flow' : undefined}
                        opacity={isActive ? 1 : 0.34}
                        markerEnd={markerEnd}
                      />
                      {edge.label && (
                        <g
                          transform={`translate(${fromBox.cx}, ${fromBox.cy - fromBox.h / 2 - 36})`}
                        >
                          <rect
                            x={-Math.min(76, edge.label.length * 3.6 + 10)}
                            y={-10}
                            width={Math.min(152, edge.label.length * 7.2 + 20)}
                            height={20}
                            rx={10}
                            fill="var(--diagram-surface, #ffffff)"
                            stroke="currentColor"
                            strokeOpacity={isActive ? 0.45 : 0.2}
                            strokeWidth={0.8}
                          />
                          <text
                            y={3.5}
                            textAnchor="middle"
                            fontSize={10.5}
                            fontWeight={isActive ? 600 : 400}
                            fill="currentColor"
                            opacity={isActive ? 1 : 0.7}
                          >
                            {truncateText(edge.label, 22)}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                }

                const dx = toBox.cx - fromBox.cx;
                const dy = toBox.cy - fromBox.cy;
                const dist = Math.hypot(dx, dy) || 1;
                const hasReverse = edgePairs.has(`${edge.to}->${edge.from}`);

                const start = intersectRectBoundary(
                  fromBox.cx,
                  fromBox.cy,
                  fromBox.w,
                  fromBox.h,
                  dx,
                  dy,
                  2,
                );
                const end = intersectRectBoundary(
                  toBox.cx,
                  toBox.cy,
                  toBox.w,
                  toBox.h,
                  -dx,
                  -dy,
                  5,
                );

                const midX = (start.x + end.x) / 2;
                const midY = (start.y + end.y) / 2;
                const perpX = -dy / dist;
                const perpY = dx / dist;
                const curveOffset = hasReverse ? 28 : 0;
                const ctrlX = midX + perpX * curveOffset;
                const ctrlY = midY + perpY * curveOffset;
                const labelX = hasReverse ? midX + perpX * 16 : midX;
                const labelY = hasReverse ? midY + perpY * 16 : midY;

                const d = hasReverse
                  ? `M ${start.x} ${start.y} Q ${ctrlX} ${ctrlY} ${end.x} ${end.y}`
                  : Math.abs(dy) > 35 && Math.abs(dx) > 45
                    ? `M ${start.x} ${start.y} C ${(start.x + end.x) / 2} ${start.y}, ${(start.x + end.x) / 2} ${end.y}, ${end.x} ${end.y}`
                    : `M ${start.x} ${start.y} L ${end.x} ${end.y}`;

                return (
                  <g key={edge.id}>
                    <path
                      d={d}
                      fill="none"
                      stroke={
                        isActive && !monochromeMode ? '#2563EB' : 'currentColor'
                      }
                      strokeWidth={isActive ? 2.7 : 1.3}
                      strokeDasharray={
                        isActive
                          ? '8 5'
                          : edge.dashed
                            ? '5 4'
                            : undefined
                      }
                      className={isActive ? 'animate-diagram-flow' : undefined}
                      opacity={isActive ? 1 : 0.32}
                      markerEnd={markerEnd}
                    />
                    {edge.label && (
                      <g transform={`translate(${labelX}, ${labelY})`}>
                        <rect
                          x={-Math.min(82, edge.label.length * 3.5 + 10)}
                          y={-10}
                          width={Math.min(164, edge.label.length * 7 + 20)}
                          height={20}
                          rx={10}
                          fill="var(--diagram-surface, #ffffff)"
                          stroke="currentColor"
                          strokeOpacity={isActive ? 0.5 : 0.18}
                          strokeWidth={0.85}
                        />
                        <text
                          y={3.5}
                          textAnchor="middle"
                          fontSize={10.5}
                          fontWeight={isActive ? 600 : 400}
                          fill="currentColor"
                          opacity={isActive ? 1 : 0.7}
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          {truncateText(edge.label, 24)}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </g>

            {/* Nodes */}
            <g>
              {spec.nodes.map((node) => {
                const box = nodeBoxes.get(node.id);
                if (!box) return null;
                const isActive = activeNodeSet.has(node.id);
                const topTextY = box.cy - box.h / 2 + 19;
                const palette =
                  groupColorMap.get(node.group?.trim() || node.id) ??
                  GROUP_COLORS[0];
                const nodeFill = monochromeMode
                  ? isActive
                    ? 'currentColor'
                    : 'var(--diagram-surface, #ffffff)'
                  : isActive
                    ? palette.fill
                    : palette.tint;
                const nodeStroke = monochromeMode
                  ? 'currentColor'
                  : palette.border;
                const textFill = monochromeMode
                  ? isActive
                    ? 'var(--diagram-surface, #ffffff)'
                    : 'currentColor'
                  : isActive
                    ? '#FFFFFF'
                    : 'currentColor';

                return (
                  <g
                    key={node.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`Node ${node.label}`}
                    onClick={() => handleNodeClick(node.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleNodeClick(node.id);
                      }
                    }}
                    className="cursor-pointer outline-none"
                  >
                    {isActive && (
                      <rect
                        x={box.cx - box.w / 2 - 5}
                        y={box.cy - box.h / 2 - 5}
                        width={box.w + 10}
                        height={box.h + 10}
                        rx={16}
                        fill="none"
                        stroke={nodeStroke}
                        strokeWidth={1.8}
                        opacity={0.48}
                      />
                    )}
                    <rect
                      x={box.cx - box.w / 2}
                      y={box.cy - box.h / 2}
                      width={box.w}
                      height={box.h}
                      rx={12}
                      fill={nodeFill}
                      stroke={nodeStroke}
                      strokeWidth={isActive ? 2.2 : 1.5}
                      strokeOpacity={monochromeMode ? (isActive ? 1 : 0.3) : isActive ? 1 : 0.65}
                    />
                    {box.labelLines.map((line, lineIdx) => (
                      <text
                        key={`lbl-${lineIdx}`}
                        x={box.cx}
                        y={topTextY + lineIdx * 15}
                        textAnchor="middle"
                        fontSize={12}
                        fontWeight={600}
                        fill={textFill}
                        opacity={isActive ? 1 : 0.88}
                        style={{
                          fontFamily: 'var(--font-sans)',
                          pointerEvents: 'none',
                        }}
                      >
                        {line}
                      </text>
                    ))}
                    {box.sublabelLines.map((line, subIdx) => (
                      <text
                        key={`sub-${subIdx}`}
                        x={box.cx}
                        y={
                          topTextY +
                          box.labelLines.length * 15 +
                          3 +
                          subIdx * 13
                        }
                        textAnchor="middle"
                        fontSize={10}
                        fontWeight={400}
                        fill={textFill}
                        opacity={isActive ? 0.9 : 0.68}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          pointerEvents: 'none',
                        }}
                      >
                        {line}
                      </text>
                    ))}
                  </g>
                );
              })}
            </g>
          </svg>
        </div>
      </div>

      {/* Step Description, Formula, and Live Metrics */}
      <div className="space-y-3.5 bg-white/25 p-5 dark:bg-white/[0.015]">
        <div className="h-1 w-full overflow-hidden rounded-full bg-black/[0.06] dark:bg-white/[0.08]">
          <div
            className="h-full rounded-full bg-[#1D1D1F] transition-all duration-300 dark:bg-[#F5F5F7]"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="glass-pill rounded-full px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              Step {currentStep.stepNumber} / {sortedSteps.length}
            </span>
            <h4 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              {currentStep.title}
            </h4>
          </div>
          <span className="hidden font-mono text-[10.5px] text-[#6E6E73] sm:inline dark:text-[#98989D]">
            Use ← / → or click any node
          </span>
        </div>

            {currentStep.formulaLatex && (
              <div className="glass-surface rounded-2xl px-4 py-3 text-center">
                <InlineKaTeX latex={currentStep.formulaLatex} displayMode />
              </div>
            )}

            {currentStep.stepIllustration &&
              currentStep.stepIllustration.length > 0 && (
                <div className="glass-surface overflow-hidden rounded-2xl p-2">
                  <svg
                    viewBox="0 0 800 220"
                    className="block h-auto max-h-44 w-full select-none text-[#1D1D1F] dark:text-[#F5F5F7]"
                    role="img"
                    aria-label={`${currentStep.title} illustration`}
                  >
                    {currentStep.stepIllustration.map((s, sIdx) => {
                      if (s.kind === 'rect') {
                        return (
                          <rect
                            key={sIdx}
                            x={s.x}
                            y={s.y}
                            width={s.width}
                            height={s.height}
                            rx={s.rx ?? 0}
                            fill={s.fill ?? 'rgba(120,119,116,0.12)'}
                            stroke={s.stroke ?? 'currentColor'}
                            strokeWidth={s.strokeWidth ?? 1.5}
                            opacity={s.opacity ?? 1}
                          />
                        );
                      }
                      if (s.kind === 'circle') {
                        return (
                          <circle
                            key={sIdx}
                            cx={s.cx}
                            cy={s.cy}
                            r={s.r}
                            fill={s.fill ?? 'rgba(120,119,116,0.16)'}
                            stroke={s.stroke ?? 'currentColor'}
                            strokeWidth={s.strokeWidth ?? 1.5}
                            opacity={s.opacity ?? 1}
                          />
                        );
                      }
                      if (s.kind === 'line') {
                        return (
                          <line
                            key={sIdx}
                            x1={s.x1}
                            y1={s.y1}
                            x2={s.x2}
                            y2={s.y2}
                            stroke={s.stroke ?? 'currentColor'}
                            strokeWidth={s.strokeWidth ?? 1.6}
                            strokeDasharray={s.strokeDasharray}
                            opacity={s.opacity ?? 1}
                          />
                        );
                      }
                      if (s.kind === 'ellipse') {
                        return (
                          <ellipse
                            key={sIdx}
                            cx={s.cx}
                            cy={s.cy}
                            rx={s.rx}
                            ry={s.ry}
                            fill={s.fill ?? 'rgba(120,119,116,0.14)'}
                            stroke={s.stroke ?? 'currentColor'}
                            strokeWidth={s.strokeWidth ?? 1.5}
                            opacity={s.opacity ?? 1}
                          />
                        );
                      }
                      if (s.kind === 'path') {
                        return (
                          <path
                            key={sIdx}
                            d={s.d}
                            fill={s.fill ?? 'none'}
                            stroke={s.stroke ?? 'currentColor'}
                            strokeWidth={s.strokeWidth ?? 1.6}
                            strokeDasharray={s.strokeDasharray}
                            opacity={s.opacity ?? 1}
                          />
                        );
                      }
                      if (s.kind === 'polygon') {
                        return (
                          <polygon
                            key={sIdx}
                            points={s.points}
                            fill={s.fill ?? 'currentColor'}
                            stroke={s.stroke ?? 'none'}
                            strokeWidth={s.strokeWidth ?? 1.2}
                            opacity={s.opacity ?? 1}
                          />
                        );
                      }
                      if (s.kind === 'text') {
                        return (
                          <text
                            key={sIdx}
                            x={s.x}
                            y={s.y}
                            fontSize={s.fontSize ?? 12}
                            fontWeight={s.fontWeight ?? 600}
                            textAnchor={s.textAnchor ?? 'start'}
                            fill={s.fill ?? 'currentColor'}
                            opacity={s.opacity ?? 1}
                            style={{ fontFamily: 'var(--font-mono)' }}
                          >
                            {s.text}
                          </text>
                        );
                      }
                      return null;
                    })}
                  </svg>
                </div>
              )}

        <MarkdownMath
          content={currentStep.descriptionMarkdown}
          className="text-[13.5px] leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
        />

        {currentStep.metrics.length > 0 && (
          <div className="grid grid-cols-1 gap-2.5 pt-1 sm:grid-cols-2 md:grid-cols-3">
            {currentStep.metrics.map((metric, idx) => (
              <div
                key={`${metric.label}-${idx}`}
                className="glass-surface rounded-2xl px-3.5 py-2.5"
              >
                <div className="font-mono text-[10px] font-medium tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
                  {metric.label}
                </div>
                <div className="mt-0.5 font-mono text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default StepMechanismPlayer;
