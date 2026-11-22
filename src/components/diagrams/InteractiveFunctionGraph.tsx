'use client';

import React, { useMemo, useRef, useState } from 'react';
import {
  Activity,
  AreaChart,
  Crosshair,
  FlipHorizontal2,
  SlidersHorizontal,
  TrendingUp,
} from 'lucide-react';
import type { InteractiveFunctionGraphSpec } from '@/types/diagrams';
import {
  compileMathExpression,
  evaluateMathExpression,
  type CompiledMathFn,
} from '@/lib/math/safe-eval';

export interface InteractiveFunctionGraphProps {
  spec: InteractiveFunctionGraphSpec;
}

const SVG_W = 640;
const SVG_H = 380;
const PAD_LEFT = 54;
const PAD_RIGHT = 24;
const PAD_TOP = 22;
const PAD_BOTTOM = 42;
const PLOT_W = SVG_W - PAD_LEFT - PAD_RIGHT;
const PLOT_H = SVG_H - PAD_TOP - PAD_BOTTOM;

function normalizeExpression(expr: string): string {
  return expr.replace(/^\s*(?:y|[a-zA-Z]\s*\(\s*x\s*\))\s*=\s*/i, '');
}

function formatTickValue(val: number): string {
  if (Math.abs(val) < 1e-9) return '0';
  const rounded = Number(val.toFixed(4));
  return String(rounded);
}

function computeNiceTicks(min: number, max: number, targetCount = 7): number[] {
  const span = max - min;
  if (!Number.isFinite(span) || span <= 0) return [];
  const rawStep = span / targetCount;
  const pow10 = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const frac = rawStep / pow10;
  let niceFrac = 1;
  if (frac > 5) niceFrac = 10;
  else if (frac > 2.5) niceFrac = 5;
  else if (frac > 2) niceFrac = 2.5;
  else if (frac > 1) niceFrac = 2;

  const step = niceFrac * pow10;
  const start = Math.ceil(min / step - 1e-9) * step;
  const ticks: number[] = [];
  for (let t = start; t <= max + step * 1e-6; t += step) {
    const clean = Math.abs(t) < step * 1e-6 ? 0 : t;
    ticks.push(Number(clean.toFixed(8)));
    if (ticks.length > 40) break;
  }
  return ticks;
}

function mapToSvgX(x: number, xMin: number, xMax: number): number {
  return PAD_LEFT + ((x - xMin) / (xMax - xMin)) * PLOT_W;
}

function mapToSvgY(y: number, yMin: number, yMax: number): number {
  return PAD_TOP + ((yMax - y) / (yMax - yMin)) * PLOT_H;
}

function buildCurvePath(
  fn: CompiledMathFn,
  vars: Record<string, number>,
  xMin: number,
  xMax: number,
  yMin: number,
  yMax: number,
): string {
  const samples = 360;
  const dx = (xMax - xMin) / samples;
  const ySpan = yMax - yMin;
  const boundLow = yMin - ySpan * 2;
  const boundHigh = yMax + ySpan * 2;

  const toSvgX = (x: number) => PAD_LEFT + ((x - xMin) / (xMax - xMin)) * PLOT_W;
  const toSvgY = (y: number) => PAD_TOP + ((yMax - y) / (yMax - yMin)) * PLOT_H;

  const parts: string[] = [];
  let prevX: number | null = null;
  let prevY: number | null = null;
  let segmentOpen = false;

  for (let i = 0; i <= samples; i += 1) {
    const x = xMin + i * dx;
    const y = fn({ ...vars, x });

    const valid =
      Number.isFinite(y) && y >= boundLow && y <= boundHigh;

    if (!valid) {
      segmentOpen = false;
      prevX = null;
      prevY = null;
      continue;
    }

    let shouldBreak = false;
    if (segmentOpen && prevX !== null && prevY !== null) {
      const jump = Math.abs(y - prevY);
      const oppositeOutside =
        (prevY < yMin && y > yMax) || (prevY > yMax && y < yMin);

      if (oppositeOutside && jump > ySpan * 0.9) {
        shouldBreak = true;
      } else if (jump > ySpan * 0.65) {
        const midX = (prevX + x) / 2;
        const midY = fn({ ...vars, x: midX });
        const minY = Math.min(prevY, y);
        const maxY = Math.max(prevY, y);
        if (!Number.isFinite(midY) || midY < minY - 1e-6 || midY > maxY + 1e-6) {
          shouldBreak = true;
        }
      }
    }

    const sx = toSvgX(x).toFixed(2);
    const sy = toSvgY(y).toFixed(2);

    if (!segmentOpen || shouldBreak) {
      parts.push(`M ${sx} ${sy}`);
      segmentOpen = true;
    } else {
      parts.push(`L ${sx} ${sy}`);
    }

    prevX = x;
    prevY = y;
  }

  return parts.join(' ');
}

const CURVE_DASH_PATTERNS = [undefined, '6 4', '2 3', '10 4 2 4'] as const;
const CURVE_COLORS = ['#4F46E5', '#059669', '#0891B2', '#E11D48', '#7C3AED'] as const;

function buildSampledCurvePath(
  sampleY: (x: number) => number,
  xMin: number,
  xMax: number,
  yMin: number,
  yMax: number,
): string {
  const samples = 360;
  const dx = (xMax - xMin) / samples;
  const ySpan = yMax - yMin;
  const boundLow = yMin - ySpan * 2;
  const boundHigh = yMax + ySpan * 2;

  const toSvgX = (x: number) => PAD_LEFT + ((x - xMin) / (xMax - xMin)) * PLOT_W;
  const toSvgY = (y: number) => PAD_TOP + ((yMax - y) / (yMax - yMin)) * PLOT_H;

  const parts: string[] = [];
  let prevX: number | null = null;
  let prevY: number | null = null;
  let segmentOpen = false;

  for (let i = 0; i <= samples; i += 1) {
    const x = xMin + i * dx;
    const y = sampleY(x);
    const valid = Number.isFinite(y) && y >= boundLow && y <= boundHigh;

    if (!valid) {
      segmentOpen = false;
      prevX = null;
      prevY = null;
      continue;
    }

    let shouldBreak = false;
    if (segmentOpen && prevX !== null && prevY !== null) {
      const jump = Math.abs(y - prevY);
      const oppositeOutside =
        (prevY < yMin && y > yMax) || (prevY > yMax && y < yMin);

      if (oppositeOutside && jump > ySpan * 0.9) {
        shouldBreak = true;
      } else if (jump > ySpan * 0.65) {
        const midX = (prevX + x) / 2;
        const midY = sampleY(midX);
        const minY = Math.min(prevY, y);
        const maxY = Math.max(prevY, y);
        if (!Number.isFinite(midY) || midY < minY - 1e-6 || midY > maxY + 1e-6) {
          shouldBreak = true;
        }
      }
    }

    const sx = toSvgX(x).toFixed(2);
    const sy = toSvgY(y).toFixed(2);

    if (!segmentOpen || shouldBreak) {
      parts.push(`M ${sx} ${sy}`);
      segmentOpen = true;
    } else {
      parts.push(`L ${sx} ${sy}`);
    }

    prevX = x;
    prevY = y;
  }

  return parts.join(' ');
}

function computeSimpsonIntegral(
  fn: CompiledMathFn,
  vars: Record<string, number>,
  rawA: number,
  rawB: number,
): { signed: number; totalArea: number; valid: boolean } {
  const a = Math.min(rawA, rawB);
  const b = Math.max(rawA, rawB);
  const signDir = rawB >= rawA ? 1 : -1;
  if (Math.abs(b - a) < 1e-9) {
    return { signed: 0, totalArea: 0, valid: true };
  }
  const N = 200; // even subintervals for Simpson's Rule
  const h = (b - a) / N;
  let sumSigned = 0;
  let sumAbs = 0;

  for (let i = 0; i <= N; i += 1) {
    const x = a + i * h;
    const y = fn({ ...vars, x });
    if (!Number.isFinite(y)) {
      return { signed: NaN, totalArea: NaN, valid: false };
    }
    const weight = i === 0 || i === N ? 1 : i % 2 === 1 ? 4 : 2;
    sumSigned += weight * y;
    sumAbs += weight * Math.abs(y);
  }

  return {
    signed: signDir * (h / 3) * sumSigned,
    totalArea: (h / 3) * sumAbs,
    valid: true,
  };
}

export function InteractiveFunctionGraph({
  spec,
}: InteractiveFunctionGraphProps) {
  const xMin = Number.isFinite(spec.xMin) ? spec.xMin : -10;
  const xMax =
    Number.isFinite(spec.xMax) && spec.xMax > xMin ? spec.xMax : xMin + 10;
  const yMin = Number.isFinite(spec.yMin) ? spec.yMin : -10;
  const yMax =
    Number.isFinite(spec.yMax) && spec.yMax > yMin ? spec.yMax : yMin + 10;

  const [sliderValues, setSliderValues] = useState<Record<string, number>>(() =>
    Object.fromEntries(spec.sliders.map((s) => [s.key, s.defaultValue])),
  );

  const hasInitialTangent = typeof spec.tangentX === 'number' && Number.isFinite(spec.tangentX);
  const [tangentEnabled, setTangentEnabled] = useState<boolean>(hasInitialTangent);
  const [showDerivativeCurve, setShowDerivativeCurve] = useState<boolean>(
    Boolean(spec.defaultShowDerivative),
  );
  const hasInitialIntegral = Boolean(spec.integralBounds);
  const [integralEnabled, setIntegralEnabled] = useState<boolean>(hasInitialIntegral);
  const [intA, setIntA] = useState<number>(
    spec.integralBounds?.a ?? Number((xMin + (xMax - xMin) * 0.25).toFixed(2)),
  );
  const [intB, setIntB] = useState<number>(
    spec.integralBounds?.b ?? Number((xMin + (xMax - xMin) * 0.65).toFixed(2)),
  );
  const [inverseVisible, setInverseVisible] = useState<boolean>(
    Boolean(spec.inverseReflection?.enabled && spec.inverseReflection?.defaultVisible),
  );
  const [tangentX, setTangentX] = useState<number>(
    hasInitialTangent ? (spec.tangentX as number) : Number(((xMin + xMax) / 2).toFixed(2)),
  );
  const [isDraggingProbe, setIsDraggingProbe] = useState(false);
  const [hoverX, setHoverX] = useState<number | null>(null);

  const svgRef = useRef<SVGSVGElement | null>(null);
  const clipId = `graph-clip-${spec.id.replace(/[^a-zA-Z0-9_-]/g, '') || 'graph'}`;

  const compiledCurves = useMemo(
    () =>
      spec.curves.map((curve) => ({
        curve,
        fn: compileMathExpression(normalizeExpression(curve.expression)),
      })),
    [spec.curves],
  );

  const xTicks = useMemo(() => computeNiceTicks(xMin, xMax, 7), [xMin, xMax]);
  const yTicks = useMemo(() => computeNiceTicks(yMin, yMax, 6), [yMin, yMax]);

  const toSvgX = (x: number) => mapToSvgX(x, xMin, xMax);
  const toSvgY = (y: number) => mapToSvgY(y, yMin, yMax);

  const zeroXInRange = xMin <= 0 && xMax >= 0;
  const zeroYInRange = yMin <= 0 && yMax >= 0;
  const axisXPos = zeroXInRange ? toSvgX(0) : PAD_LEFT;
  const axisYPos = zeroYInRange ? toSvgY(0) : PAD_TOP + PLOT_H;

  const curvePaths = useMemo(
    () =>
      compiledCurves.map(({ curve, fn }, idx) => ({
        curve,
        idx,
        color: curve.color || CURVE_COLORS[idx % CURVE_COLORS.length],
        d: buildCurvePath(fn, sliderValues, xMin, xMax, yMin, yMax),
      })),
    [compiledCurves, sliderValues, xMin, xMax, yMin, yMax],
  );

  const derivativePath = useMemo(() => {
    if (!showDerivativeCurve || compiledCurves.length === 0) return '';
    const primaryFn = compiledCurves[0].fn;
    const h = Math.max(1e-4, (xMax - xMin) * 1e-4);
    return buildSampledCurvePath(
      (x) => {
        const fPlus = primaryFn({ ...sliderValues, x: x + h });
        const fMinus = primaryFn({ ...sliderValues, x: x - h });
        if (!Number.isFinite(fPlus) || !Number.isFinite(fMinus)) return NaN;
        return (fPlus - fMinus) / (2 * h);
      },
      xMin,
      xMax,
      yMin,
      yMax,
    );
  }, [showDerivativeCurve, compiledCurves, sliderValues, xMin, xMax, yMin, yMax]);

  const integralOverlay = useMemo(() => {
    if (!integralEnabled || compiledCurves.length === 0) return null;
    const primaryFn = compiledCurves[0].fn;
    const simpson = computeSimpsonIntegral(primaryFn, sliderValues, intA, intB);
    const lo = Math.max(xMin, Math.min(intA, intB));
    const hi = Math.min(xMax, Math.max(intA, intB));
    if (hi <= lo) {
      return { simpson, posPath: '', negPath: '', ax: mapToSvgX(lo, xMin, xMax), bx: mapToSvgX(hi, xMin, xMax) };
    }

    const N = 120;
    const dx = (hi - lo) / N;
    const zeroY = mapToSvgY(Math.max(yMin, Math.min(yMax, 0)), yMin, yMax);
    const posSegs: string[] = [];
    const negSegs: string[] = [];
    let curPos: string[] = [];
    let curNeg: string[] = [];

    const closePos = () => {
      if (curPos.length > 0) {
        const firstX = curPos[0].split(' ')[1];
        const lastX = curPos[curPos.length - 1].split(' ')[1];
        posSegs.push(`M ${firstX} ${zeroY.toFixed(1)} ${curPos.join(' ')} L ${lastX} ${zeroY.toFixed(1)} Z`);
        curPos = [];
      }
    };
    const closeNeg = () => {
      if (curNeg.length > 0) {
        const firstX = curNeg[0].split(' ')[1];
        const lastX = curNeg[curNeg.length - 1].split(' ')[1];
        negSegs.push(`M ${firstX} ${zeroY.toFixed(1)} ${curNeg.join(' ')} L ${lastX} ${zeroY.toFixed(1)} Z`);
        curNeg = [];
      }
    };

    for (let i = 0; i <= N; i += 1) {
      const x = lo + i * dx;
      const y = primaryFn({ ...sliderValues, x });
      if (!Number.isFinite(y)) {
        closePos();
        closeNeg();
        continue;
      }
      const clampedY = Math.max(yMin, Math.min(yMax, y));
      const sx = mapToSvgX(x, xMin, xMax).toFixed(1);
      const sy = mapToSvgY(clampedY, yMin, yMax).toFixed(1);
      if (y >= 0) {
        closeNeg();
        curPos.push(`L ${sx} ${sy}`);
      } else {
        closePos();
        curNeg.push(`L ${sx} ${sy}`);
      }
    }
    closePos();
    closeNeg();

    return {
      simpson,
      posPath: posSegs.join(' '),
      negPath: negSegs.join(' '),
      ax: mapToSvgX(intA, xMin, xMax),
      bx: mapToSvgX(intB, xMin, xMax),
    };
  }, [integralEnabled, compiledCurves, sliderValues, intA, intB, xMin, xMax, yMin, yMax]);

  const hoverCrosshair = useMemo(() => {
    if (hoverX === null || compiledCurves.length === 0) return null;
    const primaryFn = compiledCurves[0].fn;
    const y = primaryFn({ ...sliderValues, x: hoverX });
    if (!Number.isFinite(y)) return null;
    const h = Math.max(1e-4, (xMax - xMin) * 1e-4);
    const dy = (primaryFn({ ...sliderValues, x: hoverX + h }) - primaryFn({ ...sliderValues, x: hoverX - h })) / (2 * h);
    return {
      x: hoverX,
      y,
      dy: Number.isFinite(dy) ? dy : null,
      sx: mapToSvgX(hoverX, xMin, xMax),
      sy: mapToSvgY(y, yMin, yMax),
    };
  }, [hoverX, compiledCurves, sliderValues, xMin, xMax, yMin, yMax]);

  const resolvedAsymptotes = useMemo(() => {
    if (!spec.asymptotes || spec.asymptotes.length === 0) return [];
    return spec.asymptotes
      .map((asym, idx) => {
        const val = evaluateMathExpression(asym.expression, sliderValues);
        if (!Number.isFinite(val)) return null;
        return {
          idx,
          kind: asym.kind,
          value: val,
          label:
            asym.label ??
            `${asym.kind === 'vertical' ? 'x' : 'y'} = ${Number(val.toFixed(2))}`,
        };
      })
      .filter((a): a is NonNullable<typeof a> => a !== null);
  }, [spec.asymptotes, sliderValues]);

  const inversePathData = useMemo(() => {
    if (!spec.inverseReflection?.enabled || !inverseVisible) return null;
    const source = compiledCurves.find(
      (c) => c.curve.id === spec.inverseReflection?.sourceCurveId,
    ) ?? compiledCurves[0];
    if (!source) return null;

    const samples = 280;
    const dx = (xMax - xMin) / samples;
    const parts: string[] = [];
    let open = false;
    let prevXInv: number | null = null;
    let prevYInv: number | null = null;

    for (let i = 0; i <= samples; i += 1) {
      const origX = xMin + i * dx;
      const origY = source.fn({ ...sliderValues, x: origX });
      if (!Number.isFinite(origY)) {
        open = false;
        prevXInv = null;
        prevYInv = null;
        continue;
      }
      // Reflect across y = x -> plotted point is (origY, origX)
      const px = origY;
      const py = origX;
      if (px < xMin || px > xMax || py < yMin || py > yMax) {
        open = false;
        prevXInv = null;
        prevYInv = null;
        continue;
      }
      const jump =
        prevXInv !== null && prevYInv !== null
          ? Math.hypot(px - prevXInv, py - prevYInv)
          : 0;
      const sx = mapToSvgX(px, xMin, xMax).toFixed(2);
      const sy = mapToSvgY(py, yMin, yMax).toFixed(2);
      if (!open || jump > (xMax - xMin) * 0.45) {
        parts.push(`M ${sx} ${sy}`);
        open = true;
      } else {
        parts.push(`L ${sx} ${sy}`);
      }
      prevXInv = px;
      prevYInv = py;
    }

    const diagStart = Math.max(xMin, yMin);
    const diagEnd = Math.min(xMax, yMax);
    return {
      pathD: parts.join(' '),
      label: spec.inverseReflection.label ?? 'f⁻¹(x) reflection across y = x',
      diag:
        diagStart < diagEnd
          ? {
              x1: mapToSvgX(diagStart, xMin, xMax),
              y1: mapToSvgY(diagStart, yMin, yMax),
              x2: mapToSvgX(diagEnd, xMin, xMax),
              y2: mapToSvgY(diagEnd, yMin, yMax),
            }
          : null,
    };
  }, [
    spec.inverseReflection,
    inverseVisible,
    compiledCurves,
    sliderValues,
    xMin,
    xMax,
    yMin,
    yMax,
  ]);

  const liveReadouts = useMemo(() => {
    if (!spec.readouts || spec.readouts.length === 0) return [];
    return spec.readouts.map((r) => {
      const val = evaluateMathExpression(r.expression, sliderValues);
      if (r.format === 'coordinate' && r.yExpression) {
        const yVal = evaluateMathExpression(r.yExpression, sliderValues);
        return {
          label: r.label,
          value:
            Number.isFinite(val) && Number.isFinite(yVal)
              ? `(${Number(val.toFixed(2))}, ${Number(yVal.toFixed(2))})`
              : 'Undefined',
        };
      }
      return {
        label: r.label,
        value: Number.isFinite(val) ? String(Number(val.toFixed(3))) : 'Undefined',
      };
    });
  }, [spec.readouts, sliderValues]);

  const tangentStats = useMemo(() => {
    if (!tangentEnabled || compiledCurves.length === 0) return null;
    const primaryFn = compiledCurves[0].fn;
    const h = Math.max(1e-5, (xMax - xMin) * 1e-5);
    const fx = primaryFn({ ...sliderValues, x: tangentX });
    const fPlus = primaryFn({ ...sliderValues, x: tangentX + h });
    const fMinus = primaryFn({ ...sliderValues, x: tangentX - h });
    const slope = (fPlus - fMinus) / (2 * h);

    if (!Number.isFinite(fx) || !Number.isFinite(slope)) {
      return { valid: false as const, x0: tangentX, fx: NaN, slope: NaN, line: null };
    }

    const yAtMin = fx + slope * (xMin - tangentX);
    const yAtMax = fx + slope * (xMax - tangentX);

    return {
      valid: true as const,
      x0: tangentX,
      fx,
      slope,
      line: {
        x1: mapToSvgX(xMin, xMin, xMax),
        y1: mapToSvgY(yAtMin, yMin, yMax),
        x2: mapToSvgX(xMax, xMin, xMax),
        y2: mapToSvgY(yAtMax, yMin, yMax),
        px: mapToSvgX(tangentX, xMin, xMax),
        py: mapToSvgY(fx, yMin, yMax),
      },
    };
  }, [tangentEnabled, compiledCurves, sliderValues, tangentX, xMin, xMax, yMin, yMax]);

  const clientXToMathX = (clientX: number): number | null => {
    if (!svgRef.current) return null;
    const rect = svgRef.current.getBoundingClientRect();
    if (rect.width <= 0) return null;
    const svgX = ((clientX - rect.left) / rect.width) * SVG_W;
    const clampedSvgX = Math.max(PAD_LEFT, Math.min(PAD_LEFT + PLOT_W, svgX));
    return xMin + ((clampedSvgX - PAD_LEFT) / PLOT_W) * (xMax - xMin);
  };

  const updateProbeFromPointer = (clientX: number) => {
    const mathX = clientXToMathX(clientX);
    if (mathX === null) return;
    setTangentX(Number(mathX.toFixed(3)));
  };

  const tangentStep = Math.max(
    0.01,
    Number(((xMax - xMin) / 200).toPrecision(2)),
  );

  return (
    <div className="[--diagram-surface:#FFFFFF] dark:[--diagram-surface:#1A1A1D]">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] bg-white/30 px-4 py-2.5 dark:border-white/[0.08] dark:bg-white/[0.02]">
        <div className="flex flex-wrap items-center gap-3">
          {spec.curves.map((curve, idx) => {
            const dash = curve.dashed
              ? '6 4'
              : CURVE_DASH_PATTERNS[idx % CURVE_DASH_PATTERNS.length];
            const color = curve.color || CURVE_COLORS[idx % CURVE_COLORS.length];
            return (
              <div
                key={curve.id}
                className="glass-pill inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs text-[#1D1D1F] dark:text-[#F5F5F7]"
              >
                <svg width="20" height="8" aria-hidden="true">
                  <line
                    x1="0"
                    y1="4"
                    x2="20"
                    y2="4"
                    stroke={color}
                    strokeWidth="2.5"
                    strokeDasharray={dash}
                  />
                </svg>
                <span className="font-medium">{curve.label}</span>
              </div>
            );
          })}
          {showDerivativeCurve && (
            <div className="glass-pill inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs text-amber-700 dark:text-amber-300">
              <svg width="20" height="8" aria-hidden="true">
                <line
                  x1="0"
                  y1="4"
                  x2="20"
                  y2="4"
                  stroke="#F59E0B"
                  strokeWidth="2.2"
                  strokeDasharray="5 3"
                />
              </svg>
              <span className="font-mono font-semibold">f&apos;(x)</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {spec.inverseReflection?.enabled && (
            <button
              type="button"
              aria-pressed={inverseVisible}
              onClick={() => setInverseVisible((prev) => !prev)}
              className={`inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:focus-visible:ring-[#F5F5F7]/25 ${
                inverseVisible
                  ? 'bg-[#1D1D1F] text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                  : 'glass-pill text-[#1D1D1F] hover:bg-white/95 dark:text-[#F5F5F7] dark:hover:bg-white/[0.12]'
              }`}
            >
              <FlipHorizontal2 className="h-3.5 w-3.5" aria-hidden="true" />
              Reflect y = x (f⁻¹)
            </button>
          )}

          {spec.showDerivative !== false && (
            <button
              type="button"
              aria-pressed={showDerivativeCurve}
              onClick={() => setShowDerivativeCurve((prev) => !prev)}
              className={`inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:focus-visible:ring-[#F5F5F7]/25 ${
                showDerivativeCurve
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'glass-pill text-[#1D1D1F] hover:bg-white/95 dark:text-[#F5F5F7] dark:hover:bg-white/[0.12]'
              }`}
            >
              <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
              f&apos;(x) Curve
            </button>
          )}

          <button
            type="button"
            aria-pressed={integralEnabled}
            onClick={() => setIntegralEnabled((prev) => !prev)}
            className={`inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:focus-visible:ring-[#F5F5F7]/25 ${
              integralEnabled
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'glass-pill text-[#1D1D1F] hover:bg-white/95 dark:text-[#F5F5F7] dark:hover:bg-white/[0.12]'
            }`}
          >
            <AreaChart className="h-3.5 w-3.5" aria-hidden="true" />
            ∫ₐᵇ Area
          </button>

          <button
            type="button"
            aria-pressed={tangentEnabled}
            onClick={() => setTangentEnabled((prev) => !prev)}
            className={`inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:focus-visible:ring-[#F5F5F7]/25 ${
              tangentEnabled
                ? 'bg-[#1D1D1F] text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                : 'glass-pill text-[#1D1D1F] hover:bg-white/95 dark:text-[#F5F5F7] dark:hover:bg-white/[0.12]'
            }`}
          >
            <Crosshair className="h-3.5 w-3.5" aria-hidden="true" />
            Tangent &amp; f&apos;(x)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1.55fr_1fr]">
        {/* SVG Coordinate Grid */}
        <div className="border-b border-black/[0.06] p-4 dark:border-white/[0.08] xl:border-r xl:border-b-0">
          <div className="glass-surface overflow-hidden rounded-2xl">
            <svg
              ref={svgRef}
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              className="block h-auto w-full cursor-crosshair select-none text-[#1D1D1F] dark:text-[#F5F5F7]"
              role="img"
              aria-label={spec.title}
              onPointerDown={(e) => {
                if (!tangentEnabled) return;
                setIsDraggingProbe(true);
                e.currentTarget.setPointerCapture(e.pointerId);
                updateProbeFromPointer(e.clientX);
              }}
              onPointerMove={(e) => {
                const mathX = clientXToMathX(e.clientX);
                if (mathX !== null) {
                  setHoverX(Number(mathX.toFixed(3)));
                }
                if (tangentEnabled && isDraggingProbe) {
                  updateProbeFromPointer(e.clientX);
                }
              }}
              onPointerLeave={() => {
                setHoverX(null);
              }}
              onPointerUp={(e) => {
                if (!isDraggingProbe) return;
                setIsDraggingProbe(false);
                if (e.currentTarget.hasPointerCapture(e.pointerId)) {
                  e.currentTarget.releasePointerCapture(e.pointerId);
                }
              }}
            >
              <defs>
                <clipPath id={clipId}>
                  <rect x={PAD_LEFT} y={PAD_TOP} width={PLOT_W} height={PLOT_H} />
                </clipPath>
              </defs>

              {/* Plot Frame */}
              <rect
                x={PAD_LEFT}
                y={PAD_TOP}
                width={PLOT_W}
                height={PLOT_H}
                fill="var(--diagram-surface, #ffffff)"
                stroke="currentColor"
                strokeOpacity={0.14}
                strokeWidth={1}
              />

              {/* Gridlines */}
              <g>
                {xTicks.map((tick) => {
                  const sx = toSvgX(tick);
                  return (
                    <g key={`x-${tick}`}>
                      <line
                        x1={sx}
                        y1={PAD_TOP}
                        x2={sx}
                        y2={PAD_TOP + PLOT_H}
                        stroke="currentColor"
                        strokeOpacity={Math.abs(tick) < 1e-9 ? 0.35 : 0.08}
                        strokeWidth={Math.abs(tick) < 1e-9 ? 1.3 : 1}
                      />
                      <text
                        x={sx}
                        y={PAD_TOP + PLOT_H + 16}
                        textAnchor="middle"
                        fontSize={10}
                        fill="currentColor"
                        opacity={0.62}
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {formatTickValue(tick)}
                      </text>
                    </g>
                  );
                })}
                {yTicks.map((tick) => {
                  const sy = toSvgY(tick);
                  return (
                    <g key={`y-${tick}`}>
                      <line
                        x1={PAD_LEFT}
                        y1={sy}
                        x2={PAD_LEFT + PLOT_W}
                        y2={sy}
                        stroke="currentColor"
                        strokeOpacity={Math.abs(tick) < 1e-9 ? 0.35 : 0.08}
                        strokeWidth={Math.abs(tick) < 1e-9 ? 1.3 : 1}
                      />
                      <text
                        x={PAD_LEFT - 8}
                        y={sy + 3.5}
                        textAnchor="end"
                        fontSize={10}
                        fill="currentColor"
                        opacity={0.62}
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {formatTickValue(tick)}
                      </text>
                    </g>
                  );
                })}
              </g>

              {/* Axis origin reference if zero isn't already on ticks */}
              {zeroXInRange && (
                <line
                  x1={axisXPos}
                  y1={PAD_TOP}
                  x2={axisXPos}
                  y2={PAD_TOP + PLOT_H}
                  stroke="currentColor"
                  strokeOpacity={0.38}
                  strokeWidth={1.3}
                />
              )}
              {zeroYInRange && (
                <line
                  x1={PAD_LEFT}
                  y1={axisYPos}
                  x2={PAD_LEFT + PLOT_W}
                  y2={axisYPos}
                  stroke="currentColor"
                  strokeOpacity={0.38}
                  strokeWidth={1.3}
                />
              )}

              {/* Axis Labels */}
              <text
                x={PAD_LEFT + PLOT_W / 2}
                y={SVG_H - 8}
                textAnchor="middle"
                fontSize={11}
                fontWeight={500}
                fill="currentColor"
                opacity={0.75}
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {spec.xLabel}
              </text>
              <text
                x={14}
                y={PAD_TOP + PLOT_H / 2}
                textAnchor="middle"
                fontSize={11}
                fontWeight={500}
                fill="currentColor"
                opacity={0.75}
                transform={`rotate(-90 14 ${PAD_TOP + PLOT_H / 2})`}
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {spec.yLabel}
              </text>

              {/* Sampled Curves (clipped cleanly to plot box) */}
              <g clipPath={`url(#${clipId})`}>
                {/* Dynamic Asymptotes (Vertical & Horizontal) */}
                {resolvedAsymptotes.map((asym) => {
                  if (asym.kind === 'vertical') {
                    if (asym.value < xMin || asym.value > xMax) return null;
                    const ax = toSvgX(asym.value);
                    return (
                      <g key={`asym-${asym.idx}`}>
                        <line
                          x1={ax}
                          y1={PAD_TOP}
                          x2={ax}
                          y2={PAD_TOP + PLOT_H}
                          stroke="currentColor"
                          strokeWidth={1.5}
                          strokeDasharray="6 4"
                          opacity={0.62}
                        />
                        <text
                          x={ax + 6}
                          y={PAD_TOP + 16}
                          fontSize={10.5}
                          fontWeight={600}
                          fill="currentColor"
                          opacity={0.82}
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          {asym.label}
                        </text>
                      </g>
                    );
                  }
                  if (asym.value < yMin || asym.value > yMax) return null;
                  const ay = toSvgY(asym.value);
                  return (
                    <g key={`asym-${asym.idx}`}>
                      <line
                        x1={PAD_LEFT}
                        y1={ay}
                        x2={PAD_LEFT + PLOT_W}
                        y2={ay}
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeDasharray="6 4"
                        opacity={0.62}
                      />
                      <text
                        x={PAD_LEFT + PLOT_W - 8}
                        y={ay - 6}
                        textAnchor="end"
                        fontSize={10.5}
                        fontWeight={600}
                        fill="currentColor"
                        opacity={0.82}
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {asym.label}
                      </text>
                    </g>
                  );
                })}

                {/* y = x Reflection Line & Reflected Inverse f⁻¹(x) */}
                {inversePathData && (
                  <g>
                    {inversePathData.diag && (
                      <line
                        x1={inversePathData.diag.x1}
                        y1={inversePathData.diag.y1}
                        x2={inversePathData.diag.x2}
                        y2={inversePathData.diag.y2}
                        stroke="currentColor"
                        strokeWidth={1.25}
                        strokeDasharray="4 4"
                        opacity={0.5}
                      />
                    )}
                    {inversePathData.pathD && (
                      <path
                        d={inversePathData.pathD}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeDasharray="3 3"
                        opacity={0.78}
                        strokeLinecap="round"
                      />
                    )}
                  </g>
                )}

                {/* Definite Integral Shaded Region */}
                {integralOverlay && (
                  <g>
                    {integralOverlay.posPath && (
                      <path
                        d={integralOverlay.posPath}
                        fill="rgba(79, 70, 229, 0.22)"
                      />
                    )}
                    {integralOverlay.negPath && (
                      <path
                        d={integralOverlay.negPath}
                        fill="rgba(225, 29, 72, 0.22)"
                      />
                    )}
                    <line
                      x1={integralOverlay.ax}
                      y1={PAD_TOP}
                      x2={integralOverlay.ax}
                      y2={PAD_TOP + PLOT_H}
                      stroke="#4F46E5"
                      strokeWidth={1.3}
                      strokeDasharray="4 3"
                    />
                    <line
                      x1={integralOverlay.bx}
                      y1={PAD_TOP}
                      x2={integralOverlay.bx}
                      y2={PAD_TOP + PLOT_H}
                      stroke="#4F46E5"
                      strokeWidth={1.3}
                      strokeDasharray="4 3"
                    />
                  </g>
                )}

                {curvePaths.map(({ curve, idx, color, d }) =>
                  d ? (
                    <path
                      key={curve.id}
                      d={d}
                      fill="none"
                      stroke={color}
                      strokeWidth={idx === 0 ? 2.6 : 2}
                      strokeDasharray={
                        curve.dashed
                          ? '6 4'
                          : CURVE_DASH_PATTERNS[idx % CURVE_DASH_PATTERNS.length]
                      }
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ) : null,
                )}

                {/* Numerical Derivative Curve f'(x) */}
                {showDerivativeCurve && derivativePath && (
                  <path
                    d={derivativePath}
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth={2.2}
                    strokeDasharray="5 3"
                    strokeLinecap="round"
                  />
                )}

                {/* Interactive Hover Coordinate Crosshair */}
                {hoverCrosshair &&
                  hoverCrosshair.sy >= PAD_TOP &&
                  hoverCrosshair.sy <= PAD_TOP + PLOT_H && (
                    <g pointerEvents="none">
                      <line
                        x1={hoverCrosshair.sx}
                        y1={PAD_TOP}
                        x2={hoverCrosshair.sx}
                        y2={PAD_TOP + PLOT_H}
                        stroke="currentColor"
                        strokeOpacity={0.25}
                        strokeDasharray="3 3"
                      />
                      <line
                        x1={PAD_LEFT}
                        y1={hoverCrosshair.sy}
                        x2={PAD_LEFT + PLOT_W}
                        y2={hoverCrosshair.sy}
                        stroke="currentColor"
                        strokeOpacity={0.25}
                        strokeDasharray="3 3"
                      />
                      <circle
                        cx={hoverCrosshair.sx}
                        cy={hoverCrosshair.sy}
                        r={4.2}
                        fill="#4F46E5"
                        stroke="#FFFFFF"
                        strokeWidth={1.6}
                      />
                    </g>
                  )}

                {/* Tangent Line */}
                {tangentStats?.valid && tangentStats.line && (
                  <g>
                    <line
                      x1={tangentStats.line.x1}
                      y1={tangentStats.line.y1}
                      x2={tangentStats.line.x2}
                      y2={tangentStats.line.y2}
                      stroke="currentColor"
                      strokeWidth={1.6}
                      strokeDasharray="5 3"
                      opacity={0.75}
                    />
                    <circle
                      cx={tangentStats.line.px}
                      cy={tangentStats.line.py}
                      r={9.5}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.2}
                      className="animate-pin-ripple"
                    />
                    <circle
                      cx={tangentStats.line.px}
                      cy={tangentStats.line.py}
                      r={5}
                      fill="var(--diagram-surface, #ffffff)"
                      stroke="currentColor"
                      strokeWidth={2.2}
                    />
                  </g>
                )}

                {/* Markers */}
                {spec.markers?.map((marker, idx) => {
                  const mx = toSvgX(marker.x);
                  const my = toSvgY(marker.y);
                  const anchorRight = mx > PAD_LEFT + PLOT_W - 95;
                  const labelX = anchorRight ? mx - 9 : mx + 9;
                  const labelY = my < PAD_TOP + 22 ? my + 16 : my - 8;
                  return (
                    <g key={`${marker.label}-${idx}`}>
                      <circle
                        cx={mx}
                        cy={my}
                        r={4.2}
                        fill="currentColor"
                        stroke="var(--diagram-surface, #ffffff)"
                        strokeWidth={1.5}
                      />
                      <text
                        x={labelX}
                        y={labelY}
                        textAnchor={anchorRight ? 'end' : 'start'}
                        fontSize={10.5}
                        fontWeight={600}
                        fill="currentColor"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {marker.label}
                      </text>
                    </g>
                  );
                })}
              </g>
            </svg>
            <div className="flex min-h-[32px] flex-wrap items-center justify-between gap-2 border-t border-black/[0.06] bg-white/40 px-3 py-1.5 font-mono text-[11px] text-[#1D1D1F] dark:border-white/[0.08] dark:bg-white/[0.025] dark:text-[#F5F5F7]">
              {hoverCrosshair ? (
                <>
                  <span>
                    Crosshair: ({hoverCrosshair.x.toFixed(2)},{' '}
                    {hoverCrosshair.y.toFixed(2)})
                  </span>
                  {hoverCrosshair.dy !== null && (
                    <span className="text-amber-700 dark:text-amber-300">
                      f&apos;(x) = {hoverCrosshair.dy.toFixed(2)}
                    </span>
                  )}
                </>
              ) : (
                <span className="text-[#6E6E73] dark:text-[#98989D]">
                  Hover graph for live (x, f(x)) crosshair
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Sliders & Live Readout Panel */}
        <div className="flex flex-col justify-between gap-4 bg-white/25 p-5 dark:bg-white/[0.015]">
          <div className="space-y-4">
            {/* Parameter Sliders */}
            {spec.sliders.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                  <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
                  Parameters
                </div>

                <div className="space-y-2.5">
                  {spec.sliders.map((slider) => {
                    const currentVal =
                      sliderValues[slider.key] ?? slider.defaultValue;
                    return (
                      <div
                        key={slider.key}
                        className="glass-surface rounded-2xl px-3.5 py-2.5"
                      >
                        <div className="flex items-center justify-between gap-2 text-xs">
                          <label
                            htmlFor={`slider-${spec.id}-${slider.key}`}
                            className="font-medium text-[#1D1D1F] dark:text-[#F5F5F7]"
                          >
                            {slider.label}
                          </label>
                          <span className="glass-pill rounded-full px-2 py-0.5 font-mono text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                            {Number(currentVal.toFixed(3))}
                          </span>
                        </div>
                        <input
                          id={`slider-${spec.id}-${slider.key}`}
                          type="range"
                          aria-label={slider.label}
                          min={slider.min}
                          max={slider.max}
                          step={slider.step}
                          value={currentVal}
                          onChange={(e) => {
                            const nextVal = Number(e.target.value);
                            setSliderValues((prev) => ({
                              ...prev,
                              [slider.key]: nextVal,
                            }));
                          }}
                          className="mt-2 h-1.5 w-full cursor-pointer accent-[#1D1D1F] dark:accent-[#F5F5F7]"
                        />
                        <div className="mt-0.5 flex justify-between font-mono text-[10px] text-[#6E6E73] dark:text-[#98989D]">
                          <span>{slider.min}</span>
                          <span>{slider.max}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tangent & Derivative Readout */}
            {tangentEnabled && (
              <div className="space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                  <Activity className="h-3.5 w-3.5" aria-hidden="true" />
                  Tangent Probe (Primary Curve)
                </div>

                <div className="glass-surface rounded-2xl px-3.5 py-3">
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <label
                      htmlFor={`tangent-x-${spec.id}`}
                      className="font-medium text-[#1D1D1F] dark:text-[#F5F5F7]"
                    >
                      Tangent x₀
                    </label>
                    <span className="glass-pill rounded-full px-2 py-0.5 font-mono text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                      {tangentX.toFixed(2)}
                    </span>
                  </div>
                  <input
                    id={`tangent-x-${spec.id}`}
                    type="range"
                    aria-label="Tangent X probe"
                    min={xMin}
                    max={xMax}
                    step={tangentStep}
                    value={Math.max(xMin, Math.min(xMax, tangentX))}
                    onChange={(e) => setTangentX(Number(e.target.value))}
                    className="mt-2 h-1.5 w-full cursor-pointer accent-[#1D1D1F] dark:accent-[#F5F5F7]"
                  />
                  <div className="mt-2.5 grid grid-cols-2 gap-2 border-t border-black/[0.06] pt-2.5 dark:border-white/[0.08]">
                    <div>
                      <div className="font-mono text-[10px] text-[#6E6E73] uppercase dark:text-[#98989D]">
                        f(x₀)
                      </div>
                      <div className="font-mono text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                        {tangentStats?.valid
                          ? tangentStats.fx.toFixed(3)
                          : 'Undefined'}
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-[#6E6E73] uppercase dark:text-[#98989D]">
                        Slope f&apos;(x₀)
                      </div>
                      <div className="font-mono text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                        {tangentStats?.valid
                          ? tangentStats.slope.toFixed(3)
                          : 'Undefined'}
                      </div>
                    </div>
                  </div>
                  {tangentStats?.valid && (
                    <div className="mt-2 border-t border-black/[0.06] pt-2 font-mono text-[11px] text-[#6E6E73] dark:border-white/[0.08] dark:text-[#98989D]">
                      Tangent: y = {tangentStats.slope.toFixed(2)}x{' '}
                      {tangentStats.fx - tangentStats.slope * tangentStats.x0 >= 0
                        ? '+'
                        : '−'}{' '}
                      {Math.abs(
                        tangentStats.fx - tangentStats.slope * tangentStats.x0,
                      ).toFixed(2)}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Definite Integral Simpson Calculator */}
            {integralEnabled && (
              <div className="space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                  <AreaChart className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                  {spec.integralBounds?.label ?? 'Definite Integral ∫ₐᵇ f(x) dx (Simpson)'}
                </div>
                <div className="glass-surface space-y-2.5 rounded-2xl px-3.5 py-3">
                  <div>
                    <div className="flex justify-between font-mono text-xs">
                      <span>Lower bound a</span>
                      <span className="font-semibold">{intA.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      aria-label="Integral lower bound a"
                      min={xMin}
                      max={xMax}
                      step={tangentStep}
                      value={Math.max(xMin, Math.min(xMax, intA))}
                      onChange={(e) => setIntA(Number(e.target.value))}
                      className="mt-1 h-1.5 w-full cursor-pointer accent-indigo-600"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between font-mono text-xs">
                      <span>Upper bound b</span>
                      <span className="font-semibold">{intB.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      aria-label="Integral upper bound b"
                      min={xMin}
                      max={xMax}
                      step={tangentStep}
                      value={Math.max(xMin, Math.min(xMax, intB))}
                      onChange={(e) => setIntB(Number(e.target.value))}
                      className="mt-1 h-1.5 w-full cursor-pointer accent-indigo-600"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-t border-black/[0.06] pt-2 dark:border-white/[0.08]">
                    <div>
                      <div className="font-mono text-[10px] text-[#6E6E73] uppercase dark:text-[#98989D]">
                        Signed ∫ₐᵇ f(x) dx
                      </div>
                      <div className="font-mono text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                        {integralOverlay?.simpson.valid
                          ? integralOverlay.simpson.signed.toFixed(3)
                          : 'Undefined'}
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-[#6E6E73] uppercase dark:text-[#98989D]">
                        Total Area ∫ₐᵇ |f(x)| dx
                      </div>
                      <div className="font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                        {integralOverlay?.simpson.valid
                          ? integralOverlay.simpson.totalArea.toFixed(3)
                          : 'Undefined'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Live Dynamic Algebraic Readouts */}
            {liveReadouts.length > 0 && (
              <div className="grid grid-cols-2 gap-2">
                {liveReadouts.map((ro) => (
                  <div
                    key={ro.label}
                    className="glass-surface rounded-2xl px-3 py-2"
                  >
                    <div className="font-mono text-[10px] font-medium tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
                      {ro.label}
                    </div>
                    <div className="mt-0.5 font-mono text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                      {ro.value}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Equations Reference */}
            <div className="glass-surface rounded-2xl px-3.5 py-2.5">
              <div className="font-mono text-[10px] font-medium tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
                Expressions
              </div>
              <ul className="mt-1 space-y-1">
                {spec.curves.map((curve) => (
                  <li
                    key={curve.id}
                    className="truncate font-mono text-[11px] text-[#1D1D1F] dark:text-[#F5F5F7]"
                    title={`${curve.label}: ${curve.expression}`}
                  >
                    <span className="text-[#6E6E73] dark:text-[#98989D]">
                      {curve.label}:{' '}
                    </span>
                    {curve.expression}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {tangentEnabled && (
            <p className="text-[11px] text-[#6E6E73] dark:text-[#98989D]">
              Tip: drag directly across the graph or scrub the Tangent x₀ slider
              to inspect instantaneous gradient.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default InteractiveFunctionGraph;
