'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Layers,
  MapPin,
  Minus,
  Palette,
  Pause,
  Play,
  Plus,
  RotateCcw,
} from 'lucide-react';
import type {
  LabeledExplorerHotspot,
  LabeledExplorerLayer,
  LabeledExplorerSpec,
  SvgShape,
} from '@/types/diagrams';
import { MarkdownMath } from '@/components/notes/MarkdownMath';

export interface LabeledAnatomyExplorerProps {
  spec: LabeledExplorerSpec;
}

function parseHexRgb(color: string): [number, number, number] | null {
  const hex = color.trim().toLowerCase();
  if (hex === 'black') return [0, 0, 0];
  if (hex === 'white') return [255, 255, 255];
  const match = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(hex);
  if (!match) return null;
  const digits = match[1];
  const r = parseInt(digits.length === 3 ? digits[0] + digits[0] : digits.slice(0, 2), 16);
  const g = parseInt(digits.length === 3 ? digits[1] + digits[1] : digits.slice(2, 4), 16);
  const b = parseInt(digits.length === 3 ? digits[2] + digits[2] : digits.slice(4, 6), 16);
  return [r, g, b];
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === rn) h = (gn - bn) / d + (gn < bn ? 6 : 0);
  else if (max === gn) h = (bn - rn) / d + 2;
  else h = (rn - gn) / d + 4;
  return [h / 6, s, l];
}

function hslToHex(h: number, s: number, l: number): string {
  const hue2rgb = (p: number, q: number, t: number) => {
    let tt = t;
    if (tt < 0) tt += 1;
    if (tt > 1) tt -= 1;
    if (tt < 1 / 6) return p + (q - p) * 6 * tt;
    if (tt < 1 / 2) return q;
    if (tt < 2 / 3) return p + (q - p) * (2 / 3 - tt) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = s === 0 ? l : hue2rgb(p, q, h + 1 / 3);
  const g = s === 0 ? l : hue2rgb(p, q, h);
  const b = s === 0 ? l : hue2rgb(p, q, h - 1 / 3);
  const toHex = (x: number) => Math.round(x * 255).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function parseHexLuminance(color: string): number | null {
  const rgb = parseHexRgb(color);
  if (!rgb) return null;
  return 0.2126 * (rgb[0] / 255) + 0.7152 * (rgb[1] / 255) + 0.0722 * (rgb[2] / 255);
}

function adaptHexForDarkMode(
  color: string,
  role: 'stroke' | 'fill',
  shapeKind: SvgShape['kind'],
): string {
  const rgb = parseHexRgb(color);
  if (!rgb) return color;
  const [h, s, l] = rgbToHsl(rgb[0], rgb[1], rgb[2]);

  if (shapeKind === 'text' && role === 'fill') {
    // Lift dark ink labels to high-contrast bright pastel/silver in Dark Mode
    if (l < 0.55) {
      return hslToHex(h, Math.min(s, 0.55), 0.82 + (0.55 - l) * 0.22);
    }
    return color;
  }

  if (role === 'stroke') {
    // Lift dark strokes to luminous mid-light tones so outlines pop in Dark Mode
    if (l < 0.52) {
      return hslToHex(h, Math.min(s, 0.6), 0.66 + (0.52 - l) * 0.32);
    }
    return color;
  }

  // Fill on geometric shapes: transform bright off-white/cream/pastel fills to deep jewel/slate tones
  if (l > 0.58) {
    const darkL = 0.14 + (1 - l) * 0.35;
    return hslToHex(h, Math.min(0.42, s * 0.78), darkL);
  }
  return color;
}

function normalizeSvgPaint(
  rawColor: string | undefined,
  role: 'stroke' | 'fill',
  shapeKind: SvgShape['kind'],
  monochromeMode: boolean,
  isDarkMode: boolean,
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

  if (
    lower === 'none' ||
    lower === 'transparent' ||
    lower === 'currentcolor' ||
    lower.startsWith('var(')
  ) {
    return trimmed;
  }

  if (!monochromeMode) {
    if (isDarkMode) {
      return adaptHexForDarkMode(trimmed, role, shapeKind);
    }
    const lum = parseHexLuminance(trimmed);
    if (lum !== null && lum < 0.08 && role === 'stroke') {
      return 'currentColor';
    }
    return trimmed;
  }

  // Strict Notion monochrome ink normalization
  const lum = parseHexLuminance(trimmed);
  if (lum !== null) {
    if (lum < 0.22) {
      return 'currentColor';
    }
    if (lum > 0.91) {
      return 'var(--diagram-surface, #ffffff)';
    }
    if (lum > 0.74) {
      return 'var(--diagram-subtle, #f1f1ef)';
    }
    return role === 'stroke' ? 'currentColor' : 'rgba(120, 119, 116, 0.14)';
  }

  if (lower.startsWith('rgb')) {
    return role === 'stroke' ? 'currentColor' : 'rgba(120, 119, 116, 0.14)';
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
  activeFocusIds: Set<string>;
  activeFlowTags: Set<string>;
  hasAnyFocusTags: boolean;
  monochromeMode: boolean;
  isDarkMode: boolean;
  hotspotIdSet: Set<string>;
  visibleLayers: Set<string> | null;
  onSelectTarget: (targetId: string) => void;
  onHoverTarget: (targetId: string | null) => void;
}

function resolveShapeTargetHotspot(
  shape: SvgShape,
  hotspotIdSet: Set<string>,
): string | null {
  if (shape.hotspotId && hotspotIdSet.has(shape.hotspotId)) {
    return shape.hotspotId;
  }
  if (Array.isArray(shape.focusTags)) {
    const match = shape.focusTags.find((tag) => hotspotIdSet.has(tag));
    if (match) return match;
  }
  return null;
}

function getShapeFocusStyle(shape: SvgShape, focus: ShapeFocusContext) {
  const baseOpacity = shape.opacity ?? (shape.kind === 'text' ? 0.88 : 1);
  const tags = shape.focusTags;
  const hasTags = Array.isArray(tags) && tags.length > 0;
  const isMatched =
    focus.activeFocusIds.size > 0 &&
    ((shape.hotspotId && focus.activeFocusIds.has(shape.hotspotId)) ||
      (hasTags && tags.some((t) => focus.activeFocusIds.has(t))));

  const isFlowActive =
    hasTags && tags.some((t) => focus.activeFlowTags.has(t));

  if (shape.onlyWhenFocused) {
    return {
      opacity: isMatched || isFlowActive ? baseOpacity : 0,
      strokeBoost: isMatched || isFlowActive ? 0.35 : 0,
      shouldAnimate: isMatched || isFlowActive,
      transitionClass:
        'transition-opacity duration-300 motion-reduce:transition-none',
    };
  }

  if (!focus.hasAnyFocusTags || (focus.activeFocusIds.size === 0 && focus.activeFlowTags.size === 0)) {
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

  if (hasTags || shape.hotspotId) {
    const emphasized = isMatched || isFlowActive;
    if (shape.kind === 'text') {
      return {
        opacity: emphasized ? 1 : 0.78,
        strokeBoost: 0,
        shouldAnimate: false,
        transitionClass:
          'transition-opacity duration-300 motion-reduce:transition-none',
      };
    }
    return {
      opacity: emphasized
        ? Math.max(baseOpacity, 0.94)
        : Math.min(baseOpacity, 0.3),
      strokeBoost: emphasized ? 0.65 : 0,
      shouldAnimate: emphasized,
      transitionClass:
        'transition-opacity duration-300 motion-reduce:transition-none',
    };
  }

  return {
    opacity: shape.kind === 'text' ? baseOpacity * 0.78 : baseOpacity * 0.85,
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
): React.ReactElement | null {
  if (
    focus.visibleLayers &&
    Array.isArray(shape.layers) &&
    shape.layers.length > 0 &&
    !shape.layers.some((layerId) => focus.visibleLayers?.has(layerId))
  ) {
    return null;
  }

  const { opacity, strokeBoost, shouldAnimate, transitionClass } =
    getShapeFocusStyle(shape, focus);

  const targetId =
    shape.kind === 'text'
      ? null
      : resolveShapeTargetHotspot(shape, focus.hotspotIdSet);

  const interactiveProps = targetId
    ? {
        'data-hotspot-target': targetId,
        onClick: (e: React.MouseEvent<SVGElement>) => {
          e.stopPropagation();
          focus.onSelectTarget(targetId);
        },
        onMouseEnter: () => focus.onHoverTarget(targetId),
        onMouseLeave: () => focus.onHoverTarget(null),
      }
    : shape.kind === 'text'
      ? { style: { fontFamily: 'var(--font-sans)', pointerEvents: 'none' as const } }
      : undefined;

  const cursorClass = targetId ? ' cursor-pointer' : '';
  const mono = focus.monochromeMode;
  const dark = focus.isDarkMode;

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
          fill={normalizeSvgPaint(shape.fill, 'fill', 'rect', mono, dark)}
          stroke={normalizeSvgPaint(shape.stroke, 'stroke', 'rect', mono, dark)}
          strokeWidth={
            shape.stroke === 'none'
              ? 0
              : (shape.strokeWidth ?? 1.6) + strokeBoost
          }
          strokeDasharray={shape.strokeDasharray}
          opacity={opacity}
          className={`${transitionClass}${cursorClass}`}
          {...interactiveProps}
        />
      );
    case 'circle':
      return (
        <circle
          key={`shape-${index}`}
          cx={shape.cx}
          cy={shape.cy}
          r={shape.r}
          fill={normalizeSvgPaint(shape.fill, 'fill', 'circle', mono, dark)}
          stroke={normalizeSvgPaint(shape.stroke, 'stroke', 'circle', mono, dark)}
          strokeWidth={
            shape.stroke === 'none'
              ? 0
              : (shape.strokeWidth ?? 1.6) + strokeBoost
          }
          strokeDasharray={shape.strokeDasharray}
          opacity={opacity}
          className={`${transitionClass}${cursorClass}`}
          {...interactiveProps}
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
          fill={normalizeSvgPaint(shape.fill, 'fill', 'ellipse', mono, dark)}
          stroke={normalizeSvgPaint(shape.stroke, 'stroke', 'ellipse', mono, dark)}
          strokeWidth={
            shape.stroke === 'none'
              ? 0
              : (shape.strokeWidth ?? 1.6) + strokeBoost
          }
          strokeDasharray={shape.strokeDasharray}
          opacity={opacity}
          className={`${transitionClass}${cursorClass}`}
          {...interactiveProps}
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
          stroke={normalizeSvgPaint(shape.stroke, 'stroke', 'line', mono, dark)}
          strokeWidth={(shape.strokeWidth ?? 1.6) + strokeBoost}
          strokeDasharray={shape.strokeDasharray}
          strokeLinecap="round"
          opacity={opacity}
          className={`${transitionClass}${cursorClass}${
            shape.animatedFlow && shouldAnimate ? ' animate-diagram-flow' : ''
          }`}
          {...interactiveProps}
        />
      );
    case 'path':
      return (
        <path
          key={`shape-${index}`}
          d={shape.d}
          fill={normalizeSvgPaint(shape.fill, 'fill', 'path', mono, dark)}
          stroke={normalizeSvgPaint(shape.stroke, 'stroke', 'path', mono, dark)}
          strokeWidth={
            shape.stroke === 'none'
              ? 0
              : (shape.strokeWidth ?? 1.6) + strokeBoost
          }
          strokeDasharray={shape.strokeDasharray}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={opacity}
          className={`${transitionClass}${cursorClass}${
            shape.animatedFlow && shouldAnimate ? ' animate-diagram-flow' : ''
          }`}
          {...interactiveProps}
        />
      );
    case 'polygon':
      return (
        <polygon
          key={`shape-${index}`}
          points={shape.points}
          fill={normalizeSvgPaint(shape.fill, 'fill', 'polygon', mono, dark)}
          stroke={normalizeSvgPaint(shape.stroke, 'stroke', 'polygon', mono, dark)}
          strokeWidth={
            shape.stroke === 'none'
              ? 0
              : (shape.strokeWidth ?? 1.6) + strokeBoost
          }
          opacity={opacity}
          className={`${transitionClass}${cursorClass}`}
          {...interactiveProps}
        />
      );
    case 'text': {
      const resolvedFill = normalizeSvgPaint(shape.fill, 'fill', 'text', mono, dark);
      return (
        <text
          key={`shape-${index}`}
          x={shape.x}
          y={shape.y}
          fontSize={shape.fontSize ?? 13}
          fontWeight={shape.fontWeight ?? 500}
          textAnchor={shape.textAnchor ?? 'start'}
          fill={resolvedFill}
          stroke={!mono ? 'var(--diagram-surface, #ffffff)' : undefined}
          strokeWidth={!mono ? 2.8 : undefined}
          strokeOpacity={!mono ? 0.72 : undefined}
          strokeLinejoin="round"
          opacity={opacity}
          className={transitionClass}
          style={{
            fontFamily: 'var(--font-sans)',
            pointerEvents: 'none',
            paintOrder: !mono ? 'stroke' : undefined,
          }}
        >
          {shape.text}
        </text>
      );
    }
  }
}

function resolveNonOverlappingPins(
  hotspots: LabeledExplorerHotspot[],
  shapes: SvgShape[],
  vbWidth: number,
  vbHeight: number,
  pinRadius: number,
): Array<{ hotspot: LabeledExplorerHotspot; dx: number; dy: number; moved: boolean }> {
  const minDist = pinRadius * 2 + 8;
  const pad = pinRadius + 6;
  const positions = hotspots.map((h) => ({
    hotspot: h,
    dx: Math.max(pad, Math.min(vbWidth - pad, h.x)),
    dy: Math.max(pad, Math.min(vbHeight - pad, h.y)),
  }));

  const textBoxes = shapes
    .filter((s): s is Extract<SvgShape, { kind: 'text' }> => s.kind === 'text')
    .map((t) => {
      const fs = t.fontSize ?? 13;
      const w = Math.max(24, t.text.length * fs * 0.56);
      const anchor = t.textAnchor ?? 'start';
      const left = anchor === 'middle' ? t.x - w / 2 : anchor === 'end' ? t.x - w : t.x;
      return {
        left: left - 4,
        right: left + w + 4,
        top: t.y - fs - 2,
        bottom: t.y + fs * 0.28 + 2,
      };
    });

  for (let pass = 0; pass < 20; pass += 1) {
    let anyMoved = false;
    // Pin-to-pin separation
    for (let i = 0; i < positions.length; i += 1) {
      for (let j = i + 1; j < positions.length; j += 1) {
        const a = positions[i];
        const b = positions[j];
        let vx = b.dx - a.dx;
        let vy = b.dy - a.dy;
        let dist = Math.hypot(vx, vy);
        if (dist < 0.01) {
          vx = 1;
          vy = -0.6;
          dist = Math.hypot(vx, vy);
        }
        if (dist < minDist) {
          const push = (minDist - dist) / 2 + 0.5;
          const nx = vx / dist;
          const ny = vy / dist;
          a.dx = Math.max(pad, Math.min(vbWidth - pad, a.dx - nx * push));
          a.dy = Math.max(pad, Math.min(vbHeight - pad, a.dy - ny * push));
          b.dx = Math.max(pad, Math.min(vbWidth - pad, b.dx + nx * push));
          b.dy = Math.max(pad, Math.min(vbHeight - pad, b.dy + ny * push));
          anyMoved = true;
        }
      }
    }
    // Pin-to-text-label separation
    for (const p of positions) {
      for (const box of textBoxes) {
        const closestX = Math.max(box.left, Math.min(p.dx, box.right));
        const closestY = Math.max(box.top, Math.min(p.dy, box.bottom));
        const dx = p.dx - closestX;
        const dy = p.dy - closestY;
        const dist = Math.hypot(dx, dy);
        const clearR = pinRadius + 10;
        if (dist < clearR) {
          // Push vertically clear of text line (preferring downward when near top edge)
          const pushDownY = box.bottom + clearR;
          const pushUpY = box.top - clearR;
          const useDown = pushDownY <= vbHeight - pad && (p.dy >= (box.top + box.bottom) / 2 || pushUpY < pad);
          p.dy = Math.max(pad, Math.min(vbHeight - pad, useDown ? pushDownY : pushUpY));
          anyMoved = true;
        }
      }
    }
    if (!anyMoved) break;
  }

  return positions.map((p) => ({
    ...p,
    moved: Math.hypot(p.dx - p.hotspot.x, p.dy - p.hotspot.y) > 4,
  }));
}

export function LabeledAnatomyExplorer({ spec }: LabeledAnatomyExplorerProps) {
  const views = useMemo(() => spec.views ?? [], [spec.views]);
  const [activeViewId, setActiveViewId] = useState<string>(
    views[0]?.id ?? 'default',
  );

  const activeView = useMemo(() => {
    if (views.length === 0) return null;
    return views.find((v) => v.id === activeViewId) ?? views[0];
  }, [views, activeViewId]);

  const activeShapes = activeView?.shapes ?? spec.shapes;
  const activeHotspots: LabeledExplorerHotspot[] =
    activeView?.hotspots ?? spec.hotspots;
  const activeViewBox = activeView?.viewBox ?? spec.viewBox;
  const activeLayers: LabeledExplorerLayer[] = useMemo(
    () => activeView?.layers ?? spec.layers ?? [],
    [activeView?.layers, spec.layers],
  );

  const [monochromeMode, setMonochromeMode] = useState<boolean>(
    () => spec.palette === 'monochrome',
  );
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDark = () =>
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);
  const [selfTestMode, setSelfTestMode] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(
    activeHotspots[0]?.id ?? null,
  );
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [revealedIds, setRevealedIds] = useState<Set<string>>(() => new Set());

  // Layer Filter State
  const [visibleLayerIds, setVisibleLayerIds] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    for (const layer of activeLayers) {
      if (layer.defaultVisible !== false) {
        initial.add(layer.id);
      }
    }
    return initial;
  });

  // Animation Playback State
  const animations = useMemo(() => spec.animations ?? [], [spec.animations]);
  const [activeAnimId, setActiveAnimId] = useState<string | null>(null);
  const [animStepIdx, setAnimStepIdx] = useState(0);
  const [isAnimPlaying, setIsAnimPlaying] = useState(false);

  const activeAnimation = useMemo(
    () =>
      activeAnimId
        ? animations.find((a) => a.id === activeAnimId) ?? null
        : null,
    [animations, activeAnimId],
  );
  const activeAnimStep =
    activeAnimation && activeAnimation.steps[animStepIdx]
      ? activeAnimation.steps[animStepIdx]
      : null;

  useEffect(() => {
    if (!isAnimPlaying || !activeAnimation || activeAnimation.steps.length <= 1) {
      return;
    }
    const timer = window.setInterval(() => {
      setAnimStepIdx((prev) => (prev + 1) % activeAnimation.steps.length);
    }, 2400);
    return () => window.clearInterval(timer);
  }, [isAnimPlaying, activeAnimation]);

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

  const vb = useMemo(
    () => parseViewBoxDimensions(activeViewBox),
    [activeViewBox],
  );

  const pinRadius = Math.max(11, Math.min(14, vb.width * 0.016));
  const resolvedPins = useMemo(
    () =>
      resolveNonOverlappingPins(
        activeHotspots,
        activeShapes,
        vb.width,
        vb.height,
        pinRadius,
      ),
    [activeHotspots, activeShapes, vb.width, vb.height, pinRadius],
  );

  const hotspotIdSet = useMemo(
    () => new Set(activeHotspots.map((h) => h.id)),
    [activeHotspots],
  );

  const hasAnyFocusTags = useMemo(
    () =>
      activeShapes.some(
        (shape) =>
          Boolean(shape.hotspotId) ||
          (Array.isArray(shape.focusTags) && shape.focusTags.length > 0),
      ),
    [activeShapes],
  );

  const handleSelectHotspot = React.useCallback(
    (hotspotId: string, reveal = true) => {
      setSelectedId(hotspotId);
      if (selfTestMode && reveal) {
        setRevealedIds((prev) => {
          if (prev.has(hotspotId)) return prev;
          const next = new Set(prev);
          next.add(hotspotId);
          return next;
        });
      }
    },
    [selfTestMode],
  );

  const focusContext: ShapeFocusContext = useMemo(() => {
    const ids = new Set<string>();
    const flowTags = new Set<string>();
    if (!selfTestMode) {
      if (activeAnimStep) {
        for (const id of activeAnimStep.highlightHotspotIds) ids.add(id);
        for (const tag of activeAnimStep.activeFlowTags) flowTags.add(tag);
      } else {
        const focusTarget = hoveredId ?? selectedId;
        if (focusTarget) ids.add(focusTarget);
      }
    }
    return {
      activeFocusIds: ids,
      activeFlowTags: flowTags,
      hasAnyFocusTags,
      monochromeMode,
      isDarkMode,
      hotspotIdSet,
      visibleLayers: activeLayers.length > 0 ? visibleLayerIds : null,
      onSelectTarget: (id: string) => handleSelectHotspot(id, true),
      onHoverTarget: (id: string | null) => {
        setHoveredId(id);
        if (id && !selfTestMode) {
          setSelectedId(id);
        }
      },
    };
  }, [
    selfTestMode,
    activeAnimStep,
    hoveredId,
    selectedId,
    hasAnyFocusTags,
    monochromeMode,
    isDarkMode,
    hotspotIdSet,
    activeLayers.length,
    visibleLayerIds,
    handleSelectHotspot,
  ]);

  const activeIndex = useMemo(() => {
    if (!selectedId) return -1;
    return activeHotspots.findIndex((h) => h.id === selectedId);
  }, [activeHotspots, selectedId]);

  const activeHotspot =
    activeIndex >= 0 ? activeHotspots[activeIndex] : undefined;

  const isInspectorVisible =
    Boolean(activeHotspot) &&
    (!selfTestMode || (activeHotspot ? revealedIds.has(activeHotspot.id) : false));

  const switchView = (viewId: string) => {
    setActiveViewId(viewId);
    const nextView = views.find((v) => v.id === viewId);
    const nextHotspots = nextView?.hotspots ?? spec.hotspots;
    const nextLayers = nextView?.layers ?? spec.layers ?? [];
    setSelectedId(selfTestMode ? null : (nextHotspots[0]?.id ?? null));
    setHoveredId(null);
    setRevealedIds(new Set());
    setActiveAnimId(null);
    setIsAnimPlaying(false);
    setAnimStepIdx(0);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setVisibleLayerIds(
      new Set(
        nextLayers
          .filter((l) => l.defaultVisible !== false)
          .map((l) => l.id),
      ),
    );
  };

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

  const toggleSelfTest = () => {
    setSelfTestMode((prev) => {
      const next = !prev;
      if (next) {
        setRevealedIds(new Set());
        setSelectedId(null);
        setActiveAnimId(null);
        setIsAnimPlaying(false);
      } else {
        setSelectedId(activeHotspots[0]?.id ?? null);
      }
      return next;
    });
  };

  const resetSelfTestPins = () => {
    setRevealedIds(new Set());
    setSelectedId(null);
  };

  const startOrToggleAnimation = (animId: string) => {
    setSelfTestMode(false);
    if (activeAnimId === animId) {
      setIsAnimPlaying((prev) => !prev);
      return;
    }
    const targetAnim = animations.find((a) => a.id === animId);
    setActiveAnimId(animId);
    setAnimStepIdx(0);
    setIsAnimPlaying(true);
    const firstHighlight = targetAnim?.steps[0]?.highlightHotspotIds[0];
    if (firstHighlight) {
      setSelectedId(firstHighlight);
    }
  };

  const stepAnimation = (delta: number) => {
    if (!activeAnimation) return;
    setIsAnimPlaying(false);
    const len = activeAnimation.steps.length;
    const nextIdx = (animStepIdx + delta + len) % len;
    setAnimStepIdx(nextIdx);
    const firstHighlight = activeAnimation.steps[nextIdx]?.highlightHotspotIds[0];
    if (firstHighlight) {
      setSelectedId(firstHighlight);
    }
  };

  const handleStep = (delta: number) => {
    if (activeHotspots.length === 0) return;
    const baseIndex = activeIndex >= 0 ? activeIndex : 0;
    const nextIndex =
      (baseIndex + delta + activeHotspots.length) % activeHotspots.length;
    const nextHotspot = activeHotspots[nextIndex];
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
      ? activeHotspots.find((h) => h.id === hoveredId)
      : undefined;

  return (
    <div className="[--diagram-surface:#FFFFFF] dark:[--diagram-surface:#1A1A1D] [--diagram-subtle:#F1F1EF] dark:[--diagram-subtle:#2A2A2E]">
      {/* Multi-View Switcher (e.g. Animal / Plant / Fungal / Prokaryote / Atypical) */}
      {views.length > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] bg-white/40 px-4 py-2 dark:border-white/[0.08] dark:bg-white/[0.03]">
          <div
            role="tablist"
            aria-label="Diagram perspectives"
            className="flex flex-wrap items-center gap-1.5"
          >
            {views.map((view) => {
              const isCurrent = view.id === (activeView?.id ?? '');
              return (
                <button
                  key={view.id}
                  type="button"
                  role="tab"
                  aria-selected={isCurrent}
                  onClick={() => switchView(view.id)}
                  className={`inline-flex h-7 cursor-pointer items-center rounded-full px-3 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:focus-visible:ring-[#F5F5F7]/25 ${
                    isCurrent
                      ? 'bg-[#1D1D1F] text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                      : 'glass-pill text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D] dark:hover:text-[#F5F5F7]'
                  }`}
                >
                  {view.label}
                </button>
              );
            })}
          </div>
          {activeView?.subtitle && (
            <span className="font-mono text-[11px] text-[#6E6E73] dark:text-[#98989D]">
              {activeView.subtitle}
            </span>
          )}
        </div>
      )}

      {/* Main Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] bg-white/30 px-4 py-2.5 dark:border-white/[0.08] dark:bg-white/[0.02]">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#6E6E73] dark:text-[#98989D]">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          <span>
            {activeHotspots.length} interactive{' '}
            {activeHotspots.length === 1 ? 'structure' : 'structures'}
          </span>
          {!selfTestMode && hasAnyFocusTags && activeHotspot && !activeAnimation && (
            <span className="glass-pill max-w-[210px] truncate rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
              Focus: {activeHotspot.category}
            </span>
          )}
          {selfTestMode && (
            <span className="glass-pill rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
              Revealed {revealedIds.size} / {activeHotspots.length}
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

          {/* Monochrome Ink / Scientific Color Toggle */}
          <button
            type="button"
            aria-pressed={monochromeMode}
            onClick={() => setMonochromeMode((prev) => !prev)}
            className={`inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-2.5 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:focus-visible:ring-[#F5F5F7]/25 ${
              monochromeMode
                ? 'bg-[#1D1D1F] text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                : 'glass-pill text-[#1D1D1F] hover:bg-white/95 dark:text-[#F5F5F7] dark:hover:bg-white/[0.12]'
            }`}
          >
            <Palette className="h-3.5 w-3.5" aria-hidden="true" />
            Monochrome Ink
          </button>

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

      {/* Layer Filters + Animated Process Playback Strip */}
      {(activeLayers.length > 0 || animations.length > 0) && (
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] bg-white/20 px-4 py-2 dark:border-white/[0.08] dark:bg-white/[0.015]">
          {activeLayers.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
                <Layers className="h-3 w-3" aria-hidden="true" />
                Layers:
              </span>
              {activeLayers.map((layer) => {
                const active = visibleLayerIds.has(layer.id);
                return (
                  <button
                    key={layer.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggleLayer(layer.id)}
                    className={`inline-flex h-6 cursor-pointer items-center rounded-full px-2.5 text-[11px] font-medium transition-all ${
                      active
                        ? 'glass-pill border border-[#1D1D1F]/35 text-[#1D1D1F] dark:border-[#F5F5F7]/35 dark:text-[#F5F5F7]'
                        : 'border border-dashed border-black/15 text-[#6E6E73] opacity-60 hover:opacity-90 dark:border-white/15 dark:text-[#98989D]'
                    }`}
                  >
                    {layer.label}
                  </button>
                );
              })}
            </div>
          )}

          {animations.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              {animations.map((anim) => {
                const isSelectedAnim = activeAnimId === anim.id;
                return (
                  <button
                    key={anim.id}
                    type="button"
                    aria-pressed={isSelectedAnim}
                    onClick={() => startOrToggleAnimation(anim.id)}
                    className={`inline-flex h-6 cursor-pointer items-center gap-1 rounded-full px-2.5 text-[11px] font-medium transition-all ${
                      isSelectedAnim
                        ? 'bg-[#1D1D1F] text-white dark:bg-[#F5F5F7] dark:text-[#111113]'
                        : 'glass-pill text-[#1D1D1F] hover:bg-white/95 dark:text-[#F5F5F7]'
                    }`}
                  >
                    {isSelectedAnim && isAnimPlaying ? (
                      <Pause className="h-3 w-3" aria-hidden="true" />
                    ) : (
                      <Play className="h-3 w-3" aria-hidden="true" />
                    )}
                    {anim.label}
                  </button>
                );
              })}
              {activeAnimation && (
                <>
                  <button
                    type="button"
                    aria-label="Previous animation step"
                    onClick={() => stepAnimation(-1)}
                    className="glass-pill inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-[#1D1D1F] dark:text-[#F5F5F7]"
                  >
                    <ChevronLeft className="h-3 w-3" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next animation step"
                    onClick={() => stepAnimation(1)}
                    className="glass-pill inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-[#1D1D1F] dark:text-[#F5F5F7]"
                  >
                    <ChevronRight className="h-3 w-3" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveAnimId(null);
                      setIsAnimPlaying(false);
                    }}
                    className="glass-pill inline-flex h-6 cursor-pointer items-center rounded-full px-2 font-mono text-[10px] text-[#6E6E73] dark:text-[#98989D]"
                  >
                    Stop
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      )}

      {/* Active Animation Step Banner */}
      {activeAnimation && activeAnimStep && (
        <div className="border-b border-black/[0.06] bg-white/35 px-4 py-2.5 dark:border-white/[0.08] dark:bg-white/[0.03]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              {activeAnimation.label} — Step {animStepIdx + 1}/
              {activeAnimation.steps.length}: {activeAnimStep.title}
            </div>
            <span className="font-mono text-[10px] text-[#6E6E73] dark:text-[#98989D]">
              Animated Pathway Active
            </span>
          </div>
          <MarkdownMath
            content={activeAnimStep.detailMarkdown}
            className="mt-1 text-xs leading-relaxed text-[#6E6E73] dark:text-[#98989D]"
          />
        </div>
      )}

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
              const el = e.target as HTMLElement;
              if (el.closest('[role="button"]') || el.closest('[data-hotspot-target]')) {
                return;
              }
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
                x: Math.max(
                  -maxPanX,
                  Math.min(maxPanX, dragStartRef.current.panX + dx),
                ),
                y: Math.max(
                  -maxPanY,
                  Math.min(maxPanY, dragStartRef.current.panY + dy),
                ),
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
              aria-label={activeView ? `${spec.title} — ${activeView.label}` : spec.title}
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
                {/* Rendered Diagram Geometry (directly clickable organelles/structures!) */}
                <g>
                  {activeShapes.map((shape, idx) =>
                    renderSvgShape(shape, idx, focusContext),
                  )}
                </g>

                {/* Hotspot Pins */}
                <g>
                  {resolvedPins.map(({ hotspot, dx, dy, moved }, idx) => {
                    const isSelected = hotspot.id === selectedId;
                    const isHovered = hotspot.id === hoveredId;
                    const isAnimHighlighted = Boolean(
                      activeAnimStep?.highlightHotspotIds.includes(hotspot.id),
                    );
                    const isRevealed =
                      !selfTestMode || revealedIds.has(hotspot.id);
                    const pinAccent = !monochromeMode
                      ? '#2563EB'
                      : 'currentColor';

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
                          selectedId &&
                          !isSelected &&
                          !isHovered &&
                          !isAnimHighlighted
                            ? 0.78
                            : 1
                        }
                      >
                        {moved && (
                          <>
                            <line
                              x1={hotspot.x}
                              y1={hotspot.y}
                              x2={dx}
                              y2={dy}
                              stroke={pinAccent}
                              strokeWidth={1.3}
                              strokeDasharray="2.5 2.5"
                              opacity={0.75}
                            />
                            <circle
                              cx={hotspot.x}
                              cy={hotspot.y}
                              r={2.8}
                              fill={pinAccent}
                            />
                          </>
                        )}
                        {(isSelected || isAnimHighlighted) && (
                          <circle
                            cx={dx}
                            cy={dy}
                            r={pinRadius + 5.5}
                            fill="none"
                            stroke={pinAccent}
                            strokeWidth={1.7}
                            className="animate-pin-ripple"
                          />
                        )}
                        <circle
                          cx={dx}
                          cy={dy}
                          r={pinRadius + 1.5}
                          fill="var(--diagram-surface, #ffffff)"
                          opacity={0.86}
                        />
                        <circle
                          cx={dx}
                          cy={dy}
                          r={pinRadius}
                          fill={
                            isSelected || isAnimHighlighted
                              ? pinAccent
                              : 'var(--diagram-surface, #ffffff)'
                          }
                          stroke={pinAccent}
                          strokeWidth={isSelected ? 2.1 : 1.65}
                        />
                        <text
                          x={dx}
                          y={dy + 4}
                          textAnchor="middle"
                          fontSize={10.5}
                          fontWeight={700}
                          fill={
                            isSelected || isAnimHighlighted
                              ? monochromeMode
                                ? 'var(--diagram-surface, #ffffff)'
                                : '#FFFFFF'
                              : pinAccent
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
            {activeHotspots.map((hotspot, idx) => {
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
                Click any organelle directly on the plate, any numbered pin, or
                strip button below to reveal its label and IB markscheme keyword.
              </p>
            </div>
          )}

          {/* Inspector Footer Stepper */}
          {activeHotspots.length > 1 && (
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
                {activeHotspots.length}
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
