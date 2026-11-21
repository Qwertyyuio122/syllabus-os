'use client';

import React, { useMemo, useRef, useState } from 'react';
import {
  Atom,
  Eye,
  EyeOff,
  Palette,
  RotateCcw,
} from 'lucide-react';
import type { VseprMolecule, VseprPolarityLabSpec } from '@/types/diagrams';
import { MarkdownMath } from '@/components/notes/MarkdownMath';

export interface VseprPolarityLabProps {
  spec: VseprPolarityLabSpec;
}

const SVG_W = 540;
const SVG_H = 380;
const CX = SVG_W / 2;
const CY = SVG_H / 2 - 6;
const SCALE = 92;

interface Point3 {
  x: number;
  y: number;
  z: number;
}

function rotatePoint(p: Point3, yawDeg: number, pitchDeg: number): Point3 {
  const yaw = (yawDeg * Math.PI) / 180;
  const pitch = (pitchDeg * Math.PI) / 180;

  // Rotate around Y axis (yaw)
  const cosY = Math.cos(yaw);
  const sinY = Math.sin(yaw);
  const x1 = p.x * cosY + p.z * sinY;
  const z1 = -p.x * sinY + p.z * cosY;

  // Rotate around X axis (pitch)
  const cosP = Math.cos(pitch);
  const sinP = Math.sin(pitch);
  const y2 = p.y * cosP - z1 * sinP;
  const z2 = p.y * sinP + z1 * cosP;

  return { x: x1, y: y2, z: z2 };
}

function getElementStyle(
  element: string,
  monochrome: boolean,
): { fill: string; text: string; radius: number } {
  const clean = element.replace(/[^A-Za-z]/g, '');
  const baseRadius =
    clean === 'H' ? 16 : clean === 'Cl' || clean === 'S' || clean === 'P' ? 24 : 22;

  if (monochrome) {
    if (clean === 'H') {
      return {
        fill: 'var(--diagram-surface, #ffffff)',
        text: 'currentColor',
        radius: baseRadius,
      };
    }
    return {
      fill: 'var(--diagram-subtle, #f1f1ef)',
      text: 'currentColor',
      radius: baseRadius,
    };
  }

  // Muted scientific CPK illustration palette
  switch (clean) {
    case 'C':
      return { fill: '#4A4D52', text: '#FFFFFF', radius: baseRadius };
    case 'O':
      return { fill: '#C85A53', text: '#FFFFFF', radius: baseRadius };
    case 'N':
      return { fill: '#4B6FA5', text: '#FFFFFF', radius: baseRadius };
    case 'H':
      return { fill: '#F4F4F0', text: '#1D1D1F', radius: baseRadius };
    case 'Cl':
    case 'F':
      return { fill: '#5B8C6E', text: '#FFFFFF', radius: baseRadius };
    case 'S':
      return { fill: '#C29A49', text: '#1D1D1F', radius: baseRadius };
    case 'B':
      return { fill: '#B77B82', text: '#FFFFFF', radius: baseRadius };
    case 'P':
      return { fill: '#C67B48', text: '#FFFFFF', radius: baseRadius };
    default:
      return { fill: '#787774', text: '#FFFFFF', radius: baseRadius };
  }
}

export function VseprPolarityLab({ spec }: VseprPolarityLabProps) {
  const [selectedMolId, setSelectedMolId] = useState<string>(
    spec.defaultMoleculeId ?? spec.molecules[0]?.id ?? '',
  );
  const [domainFilter, setDomainFilter] = useState<'all' | 2 | 3 | 4>('all');
  const [yaw, setYaw] = useState(22);
  const [pitch, setPitch] = useState(-16);
  const [showLonePairs, setShowLonePairs] = useState(true);
  const [showBondDipoles, setShowBondDipoles] = useState(true);
  const [showNetDipole, setShowNetDipole] = useState(true);
  const [lewisMode, setLewisMode] = useState(false);
  const [monochromeMode, setMonochromeMode] = useState(false);
  const [selfTestMode, setSelfTestMode] = useState(false);
  const [revealedQuiz, setRevealedQuiz] = useState<Set<string>>(() => new Set());

  const dragRef = useRef<{ x: number; y: number; yaw: number; pitch: number } | null>(
    null,
  );

  const visibleMolecules = useMemo(() => {
    if (domainFilter === 'all') return spec.molecules;
    return spec.molecules.filter((m) => m.electronDomains === domainFilter);
  }, [spec.molecules, domainFilter]);

  const activeMol: VseprMolecule | undefined = useMemo(
    () =>
      spec.molecules.find((m) => m.id === selectedMolId) ??
      visibleMolecules[0] ??
      spec.molecules[0],
    [spec.molecules, visibleMolecules, selectedMolId],
  );

  const isAnswerHidden =
    selfTestMode && activeMol ? !revealedQuiz.has(activeMol.id) : false;

  const projected = useMemo(() => {
    if (!activeMol) return null;
    const effectiveYaw = lewisMode ? 0 : yaw;
    const effectivePitch = lewisMode ? 0 : pitch;

    const atomMap = new Map<
      string,
      {
        raw: VseprMolecule['atoms3d'][number];
        rot: Point3;
        sx: number;
        sy: number;
      }
    >();

    for (const atom of activeMol.atoms3d) {
      const rot = rotatePoint(atom, effectiveYaw, effectivePitch);
      const sx = CX + rot.x * SCALE;
      const sy = CY - rot.y * SCALE;
      atomMap.set(atom.id, { raw: atom, rot, sx, sy });
    }

    const sortedAtoms = Array.from(atomMap.values()).sort(
      (a, b) => a.rot.z - b.rot.z,
    );

    const central = atomMap.get(activeMol.atoms3d[0]?.id ?? '') ?? sortedAtoms[0];

    // Calculate approximate net dipole direction from δ+ / δ- or polar outer vectors
    let netX = 0;
    let netY = 0;
    let netZ = 0;
    if (activeMol.molecularPolarity === 'polar' && central) {
      for (const atom of activeMol.atoms3d.slice(1)) {
        const dx = atom.x - central.raw.x;
        const dy = atom.y - central.raw.y;
        const dz = atom.z - central.raw.z;
        const sign = atom.delta === 'delta-' ? 1 : -1;
        netX += dx * sign;
        netY += dy * sign;
        netZ += dz * sign;
      }
    }
    const netMag = Math.hypot(netX, netY, netZ);
    const netDipoleRot =
      netMag > 1e-4
        ? rotatePoint(
            { x: netX / netMag, y: netY / netMag, z: netZ / netMag },
            effectiveYaw,
            effectivePitch,
          )
        : null;

    const lonePairs = (activeMol.lonePairDirs ?? []).map((dir, i) => {
      const len = Math.hypot(dir.x, dir.y, dir.z) || 1;
      const unit = { x: dir.x / len, y: dir.y / len, z: dir.z / len };
      const rot = rotatePoint(unit, effectiveYaw, effectivePitch);
      return {
        id: `lp-${i}`,
        rot,
        lx: CX + rot.x * (SCALE * 0.88),
        ly: CY - rot.y * (SCALE * 0.88),
      };
    });

    return {
      atomMap,
      sortedAtoms,
      central,
      lonePairs,
      netDipoleRot,
    };
  }, [activeMol, yaw, pitch, lewisMode]);

  if (!activeMol || !projected) return null;

  const markerId = `vsepr-arrow-${spec.id.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  return (
    <div className="[--diagram-surface:#FFFFFF] dark:[--diagram-surface:#1A1A1D] [--diagram-subtle:#F1F1EF] dark:[--diagram-subtle:#2A2A2E]">
      {/* Electron Domain Filter + Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] bg-white/35 px-4 py-2.5 dark:border-white/[0.08] dark:bg-white/[0.02]">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
            <Atom className="h-3.5 w-3.5" aria-hidden="true" />
            Domains:
          </span>
          {(['all', 2, 3, 4] as const).map((dom) => {
            const active = domainFilter === dom;
            return (
              <button
                key={String(dom)}
                type="button"
                aria-pressed={active}
                onClick={() => setDomainFilter(dom)}
                className={`inline-flex h-6 cursor-pointer items-center rounded-full px-2.5 text-[11px] font-medium transition-all ${
                  active
                    ? 'bg-[#1D1D1F] text-white dark:bg-[#F5F5F7] dark:text-[#111113]'
                    : 'glass-pill text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D]'
                }`}
              >
                {dom === 'all' ? 'All (16)' : `${dom} Domains`}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            aria-pressed={lewisMode}
            onClick={() => setLewisMode((p) => !p)}
            className={`inline-flex h-7 cursor-pointer items-center rounded-full px-2.5 text-xs font-medium transition-all ${
              lewisMode
                ? 'bg-[#1D1D1F] text-white dark:bg-[#F5F5F7] dark:text-[#111113]'
                : 'glass-pill text-[#1D1D1F] dark:text-[#F5F5F7]'
            }`}
          >
            {lewisMode ? '2D Lewis View' : '3D VSEPR View'}
          </button>

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
            Monochrome Ink
          </button>

          <button
            type="button"
            aria-pressed={selfTestMode}
            onClick={() => {
              setSelfTestMode((p) => !p);
              setRevealedQuiz(new Set());
            }}
            className={`inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-all ${
              selfTestMode
                ? 'bg-[#1D1D1F] text-white dark:bg-[#F5F5F7] dark:text-[#111113]'
                : 'glass-pill text-[#1D1D1F] dark:text-[#F5F5F7]'
            }`}
          >
            {selfTestMode ? (
              <EyeOff className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <Eye className="h-3.5 w-3.5" aria-hidden="true" />
            )}
            Self-Test Mode
          </button>
        </div>
      </div>

      {/* Molecule Selector Pills */}
      <div className="flex flex-wrap gap-1.5 border-b border-black/[0.06] bg-white/20 px-4 py-2 dark:border-white/[0.08] dark:bg-white/[0.015]">
        {visibleMolecules.map((mol) => {
          const isCurrent = mol.id === activeMol.id;
          return (
            <button
              key={mol.id}
              type="button"
              aria-pressed={isCurrent}
              onClick={() => setSelectedMolId(mol.id)}
              className={`inline-flex h-7 cursor-pointer items-center gap-1 rounded-full px-2.5 font-mono text-xs transition-all ${
                isCurrent
                  ? 'bg-[#1D1D1F] font-semibold text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                  : 'glass-pill text-[#1D1D1F] hover:bg-white/95 dark:text-[#F5F5F7]'
              }`}
            >
              {mol.formula}
            </button>
          );
        })}
      </div>

      {/* Vector Overlays Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] px-4 py-2 dark:border-white/[0.08]">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            aria-pressed={showLonePairs}
            onClick={() => setShowLonePairs((p) => !p)}
            className={`inline-flex h-6 cursor-pointer items-center rounded-full px-2.5 text-[11px] font-medium transition-all ${
              showLonePairs
                ? 'glass-pill border border-[#1D1D1F]/35 text-[#1D1D1F] dark:border-[#F5F5F7]/35 dark:text-[#F5F5F7]'
                : 'border border-dashed border-black/15 text-[#6E6E73] opacity-60 dark:border-white/15'
            }`}
          >
            Lone-Pair Repulsion ({activeMol.lonePairs})
          </button>
          <button
            type="button"
            aria-pressed={showBondDipoles}
            onClick={() => setShowBondDipoles((p) => !p)}
            className={`inline-flex h-6 cursor-pointer items-center rounded-full px-2.5 text-[11px] font-medium transition-all ${
              showBondDipoles
                ? 'glass-pill border border-[#1D1D1F]/35 text-[#1D1D1F] dark:border-[#F5F5F7]/35 dark:text-[#F5F5F7]'
                : 'border border-dashed border-black/15 text-[#6E6E73] opacity-60 dark:border-white/15'
            }`}
          >
            Bond Dipoles (δ+ → δ−)
          </button>
          <button
            type="button"
            aria-pressed={showNetDipole}
            onClick={() => setShowNetDipole((p) => !p)}
            className={`inline-flex h-6 cursor-pointer items-center rounded-full px-2.5 text-[11px] font-medium transition-all ${
              showNetDipole
                ? 'glass-pill border border-[#1D1D1F]/35 text-[#1D1D1F] dark:border-[#F5F5F7]/35 dark:text-[#F5F5F7]'
                : 'border border-dashed border-black/15 text-[#6E6E73] opacity-60 dark:border-white/15'
            }`}
          >
            Net Molecular Dipole
          </button>
        </div>

        {!lewisMode && (
          <button
            type="button"
            onClick={() => {
              setYaw(22);
              setPitch(-16);
            }}
            className="glass-pill inline-flex h-6 cursor-pointer items-center gap-1 rounded-full px-2 text-[11px] text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D]"
          >
            <RotateCcw className="h-3 w-3" aria-hidden="true" />
            Reset Angle
          </button>
        )}
      </div>

      {/* Main Stage + Inspector */}
      <div className="grid grid-cols-1 xl:grid-cols-[1.45fr_1fr]">
        {/* Interactive 3D SVG Canvas */}
        <div className="border-b border-black/[0.06] p-4 dark:border-white/[0.08] xl:border-r xl:border-b-0">
          <div
            className={`glass-surface relative overflow-hidden rounded-2xl ${
              lewisMode ? '' : 'cursor-grab active:cursor-grabbing'
            }`}
            onPointerDown={(e) => {
              if (lewisMode) return;
              dragRef.current = { x: e.clientX, y: e.clientY, yaw, pitch };
              e.currentTarget.setPointerCapture(e.pointerId);
            }}
            onPointerMove={(e) => {
              if (!dragRef.current || lewisMode) return;
              const dx = e.clientX - dragRef.current.x;
              const dy = e.clientY - dragRef.current.y;
              setYaw(dragRef.current.yaw + dx * 0.65);
              setPitch(
                Math.max(-85, Math.min(85, dragRef.current.pitch + dy * 0.55)),
              );
            }}
            onPointerUp={(e) => {
              dragRef.current = null;
              if (e.currentTarget.hasPointerCapture(e.pointerId)) {
                e.currentTarget.releasePointerCapture(e.pointerId);
              }
            }}
          >
            <svg
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              className="block h-auto w-full select-none text-[#1D1D1F] dark:text-[#F5F5F7]"
              role="img"
              aria-label={`3D VSEPR model of ${activeMol.name} (${activeMol.formula})`}
            >
              <defs>
                <marker
                  id={markerId}
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path
                    d="M 0 1.5 L 9 5 L 0 8.5 z"
                    fill={monochromeMode ? 'currentColor' : '#C85A53'}
                  />
                </marker>
              </defs>

              {/* Subtle Orbit Reference Ring */}
              <circle
                cx={CX}
                cy={CY}
                r={SCALE * 1.18}
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.07}
                strokeDasharray="4 4"
              />

              {/* Lone Pair Repulsion Lobes (Behind or front depending on depth) */}
              {showLonePairs &&
                projected.lonePairs.map((lp) => {
                  const angleDeg =
                    (Math.atan2(lp.ly - CY, lp.lx - CX) * 180) / Math.PI;
                  return (
                    <g
                      key={lp.id}
                      transform={`translate(${(CX + lp.lx) / 2}, ${(CY + lp.ly) / 2}) rotate(${angleDeg})`}
                      opacity={0.72}
                    >
                      <ellipse
                        cx={0}
                        cy={0}
                        rx={34}
                        ry={18}
                        fill={
                          monochromeMode
                            ? 'rgba(120,119,116,0.14)'
                            : 'rgba(194,154,73,0.18)'
                        }
                        stroke={monochromeMode ? 'currentColor' : '#B58934'}
                        strokeWidth={1.3}
                        strokeDasharray="4 3"
                      />
                      <circle
                        cx={8}
                        cy={-4}
                        r={2.5}
                        fill={monochromeMode ? 'currentColor' : '#8B6520'}
                      />
                      <circle
                        cx={8}
                        cy={4}
                        r={2.5}
                        fill={monochromeMode ? 'currentColor' : '#8B6520'}
                      />
                    </g>
                  );
                })}

              {/* Bonds (single, double, triple, dative) */}
              {activeMol.bonds.map((bond, bIdx) => {
                const a = projected.atomMap.get(bond.from);
                const b = projected.atomMap.get(bond.to);
                if (!a || !b) return null;
                const dx = b.sx - a.sx;
                const dy = b.sy - a.sy;
                const dist = Math.hypot(dx, dy) || 1;
                const nx = -dy / dist;
                const ny = dx / dist;

                const offsets =
                  bond.order === 1
                    ? [0]
                    : bond.order === 2
                      ? [-3.5, 3.5]
                      : [-5, 0, 5];

                return (
                  <g key={`bond-${bIdx}`}>
                    {offsets.map((off, oIdx) => (
                      <line
                        key={`line-${oIdx}`}
                        x1={a.sx + nx * off}
                        y1={a.sy + ny * off}
                        x2={b.sx + nx * off}
                        y2={b.sy + ny * off}
                        stroke="currentColor"
                        strokeWidth={bond.order === 1 ? 3 : 2}
                        strokeDasharray={bond.isDative ? '5 3' : undefined}
                        strokeOpacity={0.78}
                      />
                    ))}

                    {/* Bond Dipole Overlay */}
                    {showBondDipoles &&
                      activeMol.bondPolarity === 'polar' &&
                      a.raw.delta &&
                      b.raw.delta &&
                      a.raw.delta !== b.raw.delta && (
                        (() => {
                          const fromPt =
                            a.raw.delta === 'delta+' ? a : b;
                          const toPt =
                            a.raw.delta === 'delta+' ? b : a;
                          const mx1 = fromPt.sx + (toPt.sx - fromPt.sx) * 0.28;
                          const my1 = fromPt.sy + (toPt.sy - fromPt.sy) * 0.28;
                          const mx2 = fromPt.sx + (toPt.sx - fromPt.sx) * 0.72;
                          const my2 = fromPt.sy + (toPt.sy - fromPt.sy) * 0.72;
                          return (
                            <line
                              x1={mx1 + nx * 11}
                              y1={my1 + ny * 11}
                              x2={mx2 + nx * 11}
                              y2={my2 + ny * 11}
                              stroke={monochromeMode ? 'currentColor' : '#C85A53'}
                              strokeWidth={1.7}
                              markerEnd={`url(#${markerId})`}
                            />
                          );
                        })()
                      )}
                  </g>
                );
              })}

              {/* Depth-sorted Atoms */}
              {projected.sortedAtoms.map(({ raw, sx, sy }) => {
                const style = getElementStyle(raw.element, monochromeMode);
                return (
                  <g key={raw.id}>
                    <circle
                      cx={sx}
                      cy={sy}
                      r={style.radius}
                      fill={style.fill}
                      stroke="currentColor"
                      strokeWidth={1.6}
                      strokeOpacity={0.75}
                    />
                    <text
                      x={sx}
                      y={sy + 4.5}
                      textAnchor="middle"
                      fontSize={12.5}
                      fontWeight={700}
                      fill={style.text}
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {raw.element}
                    </text>
                    {showBondDipoles && raw.delta && raw.delta !== 'none' && (
                      <text
                        x={sx + style.radius - 2}
                        y={sy - style.radius + 8}
                        fontSize={10}
                        fontWeight={600}
                        fill={monochromeMode ? 'currentColor' : '#C85A53'}
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {raw.delta === 'delta+' ? 'δ+' : 'δ−'}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Net Molecular Dipole Overlay */}
              {showNetDipole && !isAnswerHidden && (
                <g transform="translate(18, 22)">
                  <rect
                    x={0}
                    y={0}
                    width={196}
                    height={36}
                    rx={12}
                    fill="var(--diagram-surface, #ffffff)"
                    fillOpacity={0.9}
                    stroke="currentColor"
                    strokeOpacity={0.2}
                  />
                  <text
                    x={12}
                    y={22}
                    fontSize={11}
                    fontWeight={600}
                    fill="currentColor"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {activeMol.molecularPolarity === 'polar'
                      ? 'Net Dipole: μ ≠ 0 (Polar)'
                      : 'Dipoles Cancel: μ = 0 (Non-polar)'}
                  </text>
                </g>
              )}

              {/* Bottom Angle & Lewis Annotation */}
              <text
                x={SVG_W / 2}
                y={SVG_H - 14}
                textAnchor="middle"
                fontSize={11}
                fill="currentColor"
                opacity={0.7}
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {lewisMode
                  ? activeMol.lewisSummary
                  : isAnswerHidden
                    ? 'Drag molecule to inspect 3D geometry — Self-Test Active'
                    : `Drag to rotate · Bond Angle: ${activeMol.actualAngleLabel}`}
              </text>
            </svg>
          </div>
        </div>

        {/* Quantitative VSEPR & Polarity Readout Card */}
        <div className="flex flex-col justify-between bg-white/25 p-5 dark:bg-white/[0.015]">
          <div className="space-y-3.5">
            <div className="flex items-center justify-between gap-2">
              <span className="glass-pill rounded-full px-2.5 py-0.5 font-mono text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                {activeMol.formula}
              </span>
              <span className="glass-pill rounded-full px-2.5 py-0.5 font-mono text-[11px] text-[#6E6E73] dark:text-[#98989D]">
                {activeMol.electronDomains} Domains ({activeMol.bondingPairs} BP /{' '}
                {activeMol.lonePairs} LP)
              </span>
            </div>

            <h4 className="text-base font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
              {activeMol.name}
            </h4>

            {isAnswerHidden ? (
              <div className="glass-surface rounded-2xl border-dashed p-5 text-center">
                <p className="text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
                  Predict Molecular Geometry, Bond Angle, and Net Polarity for{' '}
                  <span className="font-mono font-semibold">{activeMol.formula}</span>.
                </p>
                <p className="mt-1 font-mono text-[11px] text-[#6E6E73] dark:text-[#98989D]">
                  Lewis check: {activeMol.lewisSummary}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    setRevealedQuiz((prev) => new Set(prev).add(activeMol.id))
                  }
                  className="mt-3 inline-flex h-8 cursor-pointer items-center rounded-full bg-[#1D1D1F] px-4 text-xs font-medium text-white dark:bg-[#F5F5F7] dark:text-[#111113]"
                >
                  Reveal VSEPR &amp; Polarity Answer
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-2">
                  <div className="glass-surface rounded-2xl px-3 py-2.5">
                    <div className="font-mono text-[10px] text-[#6E6E73] uppercase dark:text-[#98989D]">
                      Electron Domain Geom.
                    </div>
                    <div className="mt-0.5 text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                      {activeMol.electronGeometry}
                    </div>
                  </div>
                  <div className="glass-surface rounded-2xl px-3 py-2.5">
                    <div className="font-mono text-[10px] text-[#6E6E73] uppercase dark:text-[#98989D]">
                      Molecular Geometry
                    </div>
                    <div className="mt-0.5 text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                      {activeMol.molecularGeometry}
                    </div>
                  </div>
                  <div className="glass-surface rounded-2xl px-3 py-2.5">
                    <div className="font-mono text-[10px] text-[#6E6E73] uppercase dark:text-[#98989D]">
                      Bond Angle
                    </div>
                    <div className="mt-0.5 font-mono text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                      {activeMol.actualAngleLabel}
                    </div>
                  </div>
                  <div className="glass-surface rounded-2xl px-3 py-2.5">
                    <div className="font-mono text-[10px] text-[#6E6E73] uppercase dark:text-[#98989D]">
                      Bond Δχ / Net Polarity
                    </div>
                    <div className="mt-0.5 font-mono text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                      Δχ {activeMol.bondDeltaEn.toFixed(1)} · {activeMol.molecularPolarity}
                    </div>
                  </div>
                </div>

                <div className="glass-surface rounded-2xl px-3.5 py-2.5">
                  <div className="font-mono text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
                    Symmetry &amp; Dipole Vector Proof
                  </div>
                  <MarkdownMath
                    content={activeMol.symmetrySummary}
                    className="mt-1 text-xs leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
                  />
                </div>

                <div className="glass-surface rounded-2xl px-3.5 py-2.5">
                  <div className="font-mono text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
                    IB Examiner Markscheme Note
                  </div>
                  <MarkdownMath
                    content={activeMol.ibExamTip}
                    className="mt-1 text-xs leading-relaxed text-[#6E6E73] dark:text-[#98989D]"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VseprPolarityLab;
