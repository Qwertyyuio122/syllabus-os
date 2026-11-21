'use client';

import React, { useEffect, useId, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import type { StepMechanismNode, StepMechanismSpec } from '@/types/diagrams';
import { InlineKaTeX, MarkdownMath } from '@/components/notes/MarkdownMath';

export interface StepMechanismPlayerProps {
  spec: StepMechanismSpec;
}

interface NodeBox {
  node: StepMechanismNode;
  cx: number;
  cy: number;
  w: number;
  h: number;
}

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

function buildNodeBox(node: StepMechanismNode): NodeBox {
  const labelLen = node.label.length;
  const subLen = node.sublabel ? node.sublabel.length : 0;
  const w = clamp(Math.max(labelLen * 7.8 + 30, subLen * 6.5 + 26), 116, 210);
  const h = node.sublabel ? 54 : 40;
  const cx = clamp(node.x, w / 2 + 10, 800 - w / 2 - 10);
  const cy = clamp(node.y, h / 2 + 10, 400 - h / 2 - 10);
  return { node, cx, cy, w, h };
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

  const rawId = useId();
  const safeId = rawId.replace(/[^a-zA-Z0-9_-]/g, '');
  const activeMarkerId = `arrow-active-${safeId}`;
  const mutedMarkerId = `arrow-muted-${safeId}`;

  useEffect(() => {
    if (!isPlaying || sortedSteps.length <= 1) return;
    const timer = window.setInterval(() => {
      setStepIndex((prev) => (prev + 1) % sortedSteps.length);
    }, 2500);
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

  const nodeBoxes = useMemo(() => {
    const map = new Map<string, NodeBox>();
    for (const node of spec.nodes) {
      map.set(node.id, buildNodeBox(node));
    }
    return map;
  }, [spec.nodes]);

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

  if (!currentStep) {
    return null;
  }

  return (
    <div className="[--diagram-surface:#FFFFFF] dark:[--diagram-surface:#191919] [--diagram-node:#FBFBFA] dark:[--diagram-node:#202020]">
      {/* Playback Controls & Step Pills */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E6E6E4] bg-[#FBFBFA] px-4 py-2.5 dark:border-[#2E2E2E] dark:bg-[#202020]">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setIsPlaying((p) => !p)}
            disabled={sortedSteps.length <= 1}
            aria-label={isPlaying ? 'Pause mechanism' : 'Play mechanism'}
            className={`inline-flex h-7 cursor-pointer items-center gap-1.5 rounded border px-2.5 text-xs font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37352F]/30 dark:focus-visible:ring-[#EBEBEB]/30 ${
              isPlaying
                ? 'border-[#37352F] bg-[#37352F] text-white dark:border-[#EBEBEB] dark:bg-[#EBEBEB] dark:text-[#191919]'
                : 'border-[#E6E6E4] bg-white text-[#37352F] hover:bg-[#F1F1EF] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB] dark:hover:bg-[#2A2A2A]'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="h-3 w-3" aria-hidden="true" />
                Pause
              </>
            ) : (
              <>
                <Play className="h-3 w-3" aria-hidden="true" />
                Play
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handlePrev}
            disabled={safeIndex === 0}
            aria-label="Previous step"
            className="inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded border border-[#E6E6E4] bg-white text-[#37352F] transition-colors hover:bg-[#F1F1EF] disabled:cursor-not-allowed disabled:opacity-40 dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB] dark:hover:bg-[#2A2A2A]"
          >
            <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={safeIndex === sortedSteps.length - 1}
            aria-label="Next step"
            className="inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded border border-[#E6E6E4] bg-white text-[#37352F] transition-colors hover:bg-[#F1F1EF] disabled:cursor-not-allowed disabled:opacity-40 dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB] dark:hover:bg-[#2A2A2A]"
          >
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>

        {/* Clickable Step Pills 1..N */}
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
                className={`inline-flex h-7 min-w-7 cursor-pointer items-center justify-center rounded border px-2 font-mono text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37352F]/30 dark:focus-visible:ring-[#EBEBEB]/30 ${
                  isCurrent
                    ? 'border-[#37352F] bg-[#37352F] text-white dark:border-[#EBEBEB] dark:bg-[#EBEBEB] dark:text-[#191919]'
                    : 'border-[#E6E6E4] bg-white text-[#787774] hover:bg-[#F1F1EF] hover:text-[#37352F] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#9B9A97] dark:hover:bg-[#2A2A2A] dark:hover:text-[#EBEBEB]'
                }`}
              >
                {step.stepNumber}
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Node-Edge SVG Canvas */}
      <div className="border-b border-[#E6E6E4] bg-white p-4 dark:border-[#2E2E2E] dark:bg-[#191919]">
        <div className="overflow-hidden rounded-md border border-[#E6E6E4] bg-[#FBFBFA] dark:border-[#2E2E2E] dark:bg-[#202020]">
          <svg
            viewBox="0 0 800 400"
            className="block h-auto w-full select-none text-[#37352F] dark:text-[#EBEBEB]"
            role="img"
            aria-label={`${spec.title} — Step ${currentStep.stepNumber}: ${currentStep.title}`}
          >
            <defs>
              <marker
                id={activeMarkerId}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="6.5"
                markerHeight="6.5"
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="currentColor" />
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
                  opacity="0.35"
                />
              </marker>
            </defs>

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
                        stroke="currentColor"
                        strokeWidth={isActive ? 2.2 : 1.3}
                        strokeDasharray={edge.dashed ? '5 4' : undefined}
                        opacity={isActive ? 1 : 0.3}
                        markerEnd={markerEnd}
                      />
                      {edge.label && (
                        <g
                          transform={`translate(${fromBox.cx}, ${fromBox.cy - fromBox.h / 2 - 36})`}
                        >
                          <rect
                            x={-Math.min(72, edge.label.length * 3.6 + 8)}
                            y={-10}
                            width={Math.min(144, edge.label.length * 7.2 + 16)}
                            height={18}
                            rx={4}
                            fill="var(--diagram-surface, #ffffff)"
                            stroke="currentColor"
                            strokeWidth={0.75}
                            opacity={isActive ? 0.95 : 0.6}
                          />
                          <text
                            y={3}
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
                  1,
                );
                const end = intersectRectBoundary(
                  toBox.cx,
                  toBox.cy,
                  toBox.w,
                  toBox.h,
                  -dx,
                  -dy,
                  4,
                );

                const midX = (start.x + end.x) / 2;
                const midY = (start.y + end.y) / 2;
                const perpX = -dy / dist;
                const perpY = dx / dist;
                const curveOffset = hasReverse ? 24 : 0;
                const ctrlX = midX + perpX * curveOffset;
                const ctrlY = midY + perpY * curveOffset;
                const labelX = hasReverse ? midX + perpX * 14 : midX;
                const labelY = hasReverse ? midY + perpY * 14 : midY;

                const d = hasReverse
                  ? `M ${start.x} ${start.y} Q ${ctrlX} ${ctrlY} ${end.x} ${end.y}`
                  : `M ${start.x} ${start.y} L ${end.x} ${end.y}`;

                return (
                  <g key={edge.id}>
                    <path
                      d={d}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={isActive ? 2.2 : 1.3}
                      strokeDasharray={edge.dashed ? '5 4' : undefined}
                      opacity={isActive ? 1 : 0.3}
                      markerEnd={markerEnd}
                    />
                    {edge.label && (
                      <g transform={`translate(${labelX}, ${labelY})`}>
                        <rect
                          x={-Math.min(82, edge.label.length * 3.5 + 8)}
                          y={-9}
                          width={Math.min(164, edge.label.length * 7 + 16)}
                          height={18}
                          rx={4}
                          fill="var(--diagram-surface, #ffffff)"
                          stroke="currentColor"
                          strokeOpacity={isActive ? 0.45 : 0.18}
                          strokeWidth={0.8}
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
                        x={box.cx - box.w / 2 - 4}
                        y={box.cy - box.h / 2 - 4}
                        width={box.w + 8}
                        height={box.h + 8}
                        rx={10}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.25}
                        opacity={0.35}
                      />
                    )}
                    <rect
                      x={box.cx - box.w / 2}
                      y={box.cy - box.h / 2}
                      width={box.w}
                      height={box.h}
                      rx={7}
                      fill={
                        isActive
                          ? 'currentColor'
                          : 'var(--diagram-surface, #ffffff)'
                      }
                      stroke="currentColor"
                      strokeWidth={isActive ? 2 : 1.2}
                      strokeOpacity={isActive ? 1 : 0.32}
                    />
                    <text
                      x={box.cx}
                      y={node.sublabel ? box.cy - 4 : box.cy + 4}
                      textAnchor="middle"
                      fontSize={12}
                      fontWeight={600}
                      fill={
                        isActive
                          ? 'var(--diagram-surface, #ffffff)'
                          : 'currentColor'
                      }
                      opacity={isActive ? 1 : 0.72}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        pointerEvents: 'none',
                      }}
                    >
                      {truncateText(node.label, 24)}
                    </text>
                    {node.sublabel && (
                      <text
                        x={box.cx}
                        y={box.cy + 13}
                        textAnchor="middle"
                        fontSize={10}
                        fontWeight={400}
                        fill={
                          isActive
                            ? 'var(--diagram-surface, #ffffff)'
                            : 'currentColor'
                        }
                        opacity={isActive ? 0.85 : 0.52}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          pointerEvents: 'none',
                        }}
                      >
                        {truncateText(node.sublabel, 26)}
                      </text>
                    )}
                  </g>
                );
              })}
            </g>
          </svg>
        </div>
      </div>

      {/* Step Description, Formula, and Live Metrics */}
      <div className="space-y-3 bg-[#FBFBFA] p-4 dark:bg-[#202020]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="rounded border border-[#E6E6E4] bg-white px-2 py-0.5 font-mono text-[11px] font-semibold text-[#37352F] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB]">
              Step {currentStep.stepNumber} / {sortedSteps.length}
            </span>
            <h4 className="text-sm font-semibold text-[#37352F] dark:text-[#EBEBEB]">
              {currentStep.title}
            </h4>
          </div>
        </div>

        {currentStep.formulaLatex && (
          <div className="rounded-md border border-[#E6E6E4] bg-white px-4 py-2.5 text-center dark:border-[#2E2E2E] dark:bg-[#191919]">
            <InlineKaTeX latex={currentStep.formulaLatex} displayMode />
          </div>
        )}

        <MarkdownMath
          content={currentStep.descriptionMarkdown}
          className="text-[13.5px] leading-relaxed text-[#37352F] dark:text-[#EBEBEB]"
        />

        {currentStep.metrics.length > 0 && (
          <div className="grid grid-cols-1 gap-2 pt-1 sm:grid-cols-2 md:grid-cols-3">
            {currentStep.metrics.map((metric, idx) => (
              <div
                key={`${metric.label}-${idx}`}
                className="rounded-md border border-[#E6E6E4] bg-white px-3 py-2 dark:border-[#2E2E2E] dark:bg-[#191919]"
              >
                <div className="font-mono text-[10px] font-medium tracking-wider text-[#787774] uppercase dark:text-[#9B9A97]">
                  {metric.label}
                </div>
                <div className="mt-0.5 font-mono text-xs font-semibold text-[#37352F] dark:text-[#EBEBEB]">
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
