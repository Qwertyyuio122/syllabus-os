'use client';

import React, { useMemo } from 'react';
import {
  getNumParam,
  getStrParam,
  SimModeButtonGroup,
  SimReadoutCard,
  SimSlider,
  type SimParamMap,
} from './simulation-shared';

interface SimProps {
  specId: string;
  params: SimParamMap;
  setParam: (key: string, value: number | string | boolean) => void;
}

// ---------------------------------------------------------------------------
// 1. Enzyme Kinetics (Michaelis-Menten + Temperature/pH + Inhibition)
// ---------------------------------------------------------------------------

export function EnzymeKineticsSim({ specId, params, setParam }: SimProps) {
  const substrate = getNumParam(params, 'substrate', 12, 0, 50);
  const temp = getNumParam(params, 'temp', 37, 5, 80);
  const ph = getNumParam(params, 'ph', 7.0, 1.5, 12.0);
  const inhibitorType = getStrParam(params, 'inhibitor', 'none') as
    | 'none'
    | 'competitive'
    | 'non_competitive';
  const inhibitorConc = getNumParam(params, 'inhibitorConc', 6, 0, 20);
  const optimumTemp = getNumParam(params, 'optimumTemp', 37, 20, 75);
  const optimumPh = getNumParam(params, 'optimumPh', 7.0, 2.0, 11.0);
  const viewTab = getStrParam(params, 'curveView', 'mm') as 'mm' | 'env';

  const VMAX_BASE = 100;
  const KM_BASE = 8;
  const KI = 5;

  const computeEnvFactor = (t: number, p: number) => {
    const tFactor =
      t <= optimumTemp
        ? Math.exp(-Math.pow((t - optimumTemp) / 18, 2))
        : Math.exp(-Math.pow((t - optimumTemp) / 7.5, 2));
    const phFactor = Math.exp(-Math.pow((p - optimumPh) / 1.9, 2));
    return Math.max(0.01, Math.min(1, tFactor * phFactor));
  };

  const envFactor = computeEnvFactor(temp, ph);
  const activePct = Math.round(envFactor * 100);
  const isDenatured = temp > optimumTemp + 14 || Math.abs(ph - optimumPh) > 3.2;

  const vmaxEff =
    inhibitorType === 'non_competitive'
      ? (VMAX_BASE * envFactor) / (1 + inhibitorConc / KI)
      : VMAX_BASE * envFactor;

  const kmEff =
    inhibitorType === 'competitive'
      ? KM_BASE * (1 + inhibitorConc / KI)
      : KM_BASE;

  const currentRate =
    substrate <= 0 ? 0 : (vmaxEff * substrate) / (kmEff + substrate);

  // Build Michaelis-Menten curves (SVG 480x255)
  const { baselinePath, activePath, curX, curY, halfVmaxY, vmaxY, kmX } = useMemo(() => {
    const W = 480;
    const H = 255;
    const PL = 50;
    const PR = 20;
    const PT = 34;
    const PB = 38;
    const PW = W - PL - PR;
    const PH = H - PT - PB;
    const maxS = 50;
    const maxV = 112;

    const sx = (s: number) => PL + (s / maxS) * PW;
    const sy = (v: number) => PT + PH - (v / maxV) * PH;

    const ptsBase: string[] = [];
    const ptsActive: string[] = [];
    for (let i = 0; i <= 80; i += 1) {
      const s = (i / 80) * maxS;
      const vBase = (VMAX_BASE * s) / (KM_BASE + s);
      const vAct = (vmaxEff * s) / (kmEff + s);
      ptsBase.push(`${i === 0 ? 'M' : 'L'} ${sx(s).toFixed(1)} ${sy(vBase).toFixed(1)}`);
      ptsActive.push(`${i === 0 ? 'M' : 'L'} ${sx(s).toFixed(1)} ${sy(vAct).toFixed(1)}`);
    }

    return {
      baselinePath: ptsBase.join(' '),
      activePath: ptsActive.join(' '),
      curX: sx(substrate),
      curY: sy(currentRate),
      halfVmaxY: sy(vmaxEff / 2),
      vmaxY: sy(vmaxEff),
      kmX: sx(Math.min(maxS, kmEff)),
    };
  }, [vmaxEff, kmEff, substrate, currentRate]);

  // Temperature & pH bell curve path when curveView === 'env'
  const envCurve = useMemo(() => {
    const W = 480;
    const H = 250;
    const PL = 50;
    const PR = 20;
    const PT = 20;
    const PB = 38;
    const PW = W - PL - PR;
    const PH = H - PT - PB;
    const pts: string[] = [];
    for (let i = 0; i <= 75; i += 1) {
      const t = 5 + i;
      const tf =
        t <= optimumTemp
          ? Math.exp(-Math.pow((t - optimumTemp) / 18, 2))
          : Math.exp(-Math.pow((t - optimumTemp) / 7.5, 2));
      const x = PL + ((t - 5) / 75) * PW;
      const y = PT + PH - tf * 95 * (PH / 105);
      pts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
    }
    const markerX = PL + ((temp - 5) / 75) * PW;
    const tFactor =
      temp <= optimumTemp
        ? Math.exp(-Math.pow((temp - optimumTemp) / 18, 2))
        : Math.exp(-Math.pow((temp - optimumTemp) / 7.5, 2));
    const markerY = PT + PH - tFactor * 95 * (PH / 105);
    return { path: pts.join(' '), markerX, markerY };
  }, [optimumTemp, temp]);

  const cleftGap = isDenatured
    ? 14
    : inhibitorType === 'non_competitive'
      ? 6
      : 0;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1.45fr_1fr]">
      <div className="space-y-3 border-b border-black/[0.06] p-4 dark:border-white/[0.08] xl:border-r xl:border-b-0">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <SimModeButtonGroup
            value={viewTab}
            options={[
              { value: 'mm', label: 'Michaelis–Menten Plot' },
              { value: 'env', label: 'Thermal Denaturation Curve' },
            ]}
            onChange={(v) => setParam('curveView', v)}
          />
          <span
            className={`glass-pill rounded-full px-2.5 py-0.5 font-mono text-[10.5px] font-semibold ${
              isDenatured
                ? 'text-rose-600 dark:text-rose-400'
                : 'text-emerald-700 dark:text-emerald-300'
            }`}
          >
            {isDenatured ? 'Tertiary Bonds Disrupted (Denatured)' : `${activePct}% Native Active Sites`}
          </span>
        </div>

        {/* Main Kinetics SVG */}
        <div className="glass-surface overflow-hidden rounded-2xl p-2">
          <svg
            viewBox="0 0 480 255"
            className="block h-auto w-full select-none text-[#1D1D1F] dark:text-[#F5F5F7]"
            role="img"
            aria-label="Enzyme kinetics simulation graph"
          >
            {/* Axes */}
            <line x1={50} y1={217} x2={460} y2={217} stroke="currentColor" strokeOpacity={0.35} />
            <line x1={50} y1={34} x2={50} y2={217} stroke="currentColor" strokeOpacity={0.35} />

            {viewTab === 'mm' ? (
              <>
                {/* Reference Uninhibited Optimum Curve */}
                <path
                  d={baselinePath}
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth={1.6}
                  strokeDasharray="5 4"
                />
                {/* Vmax & 0.5 Vmax guidelines */}
                <line
                  x1={50}
                  y1={vmaxY}
                  x2={460}
                  y2={vmaxY}
                  stroke="#10B981"
                  strokeOpacity={0.45}
                  strokeDasharray="3 3"
                />
                <line
                  x1={50}
                  y1={halfVmaxY}
                  x2={kmX}
                  y2={halfVmaxY}
                  stroke="#F59E0B"
                  strokeOpacity={0.65}
                  strokeDasharray="3 3"
                />
                <line
                  x1={kmX}
                  y1={halfVmaxY}
                  x2={kmX}
                  y2={217}
                  stroke="#F59E0B"
                  strokeOpacity={0.65}
                  strokeDasharray="3 3"
                />
                {/* Active Kinetics Curve */}
                <path
                  d={activePath}
                  fill="none"
                  stroke={isDenatured ? '#E11D48' : '#2563EB'}
                  strokeWidth={2.8}
                  strokeLinecap="round"
                />
                {/* Live Probe Point */}
                <line
                  x1={curX}
                  y1={curY}
                  x2={curX}
                  y2={217}
                  stroke="#2563EB"
                  strokeOpacity={0.35}
                  strokeDasharray="2 2"
                />
                <circle
                  cx={curX}
                  cy={curY}
                  r={5.5}
                  fill={isDenatured ? '#E11D48' : '#2563EB'}
                  stroke="#FFFFFF"
                  strokeWidth={2}
                />
                {/* Labels cleanly above Vmax */}
                <text x={456} y={20} textAnchor="end" fontSize={9.5} fill="#64748B" style={{ fontFamily: 'var(--font-mono)' }}>
                  -- Optimal Uninhibited (Vmax=100, Km=8)
                </text>
                <text x={kmX + 4} y={211} fontSize={9.5} fontWeight={600} fill="#D97706" style={{ fontFamily: 'var(--font-mono)' }}>
                  Km={kmEff.toFixed(1)}
                </text>
                <text x={255} y={244} textAnchor="middle" fontSize={10.5} fill="currentColor" opacity={0.75} style={{ fontFamily: 'var(--font-mono)' }}>
                  Substrate Concentration [S] (mmol dm⁻³)
                </text>
              </>
            ) : (
              <>
                <path
                  d={envCurve.path}
                  fill="none"
                  stroke="#10B981"
                  strokeWidth={2.6}
                />
                <line
                  x1={50 + ((optimumTemp - 5) / 75) * 410}
                  y1={34}
                  x2={50 + ((optimumTemp - 5) / 75) * 410}
                  y2={217}
                  stroke="#10B981"
                  strokeDasharray="4 3"
                  strokeOpacity={0.55}
                />
                <circle
                  cx={envCurve.markerX}
                  cy={envCurve.markerY}
                  r={5.5}
                  fill={isDenatured ? '#E11D48' : '#10B981'}
                  stroke="#FFFFFF"
                  strokeWidth={2}
                />
                <text x={255} y={244} textAnchor="middle" fontSize={10.5} fill="currentColor" opacity={0.75} style={{ fontFamily: 'var(--font-mono)' }}>
                  Temperature (°C) · Optimum = {optimumTemp}°C
                </text>
              </>
            )}

            <text
              x={16}
              y={124}
              textAnchor="middle"
              fontSize={10.5}
              fill="currentColor"
              opacity={0.75}
              transform="rotate(-90 16 124)"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Rate v (μmol min⁻¹)
            </text>
          </svg>
        </div>

        {/* Animated Active-Site Molecular Mechanism Strip */}
        <div className="glass-surface overflow-hidden rounded-2xl p-2">
          <svg
            viewBox="0 0 540 124"
            className="block h-auto w-full select-none text-[#1D1D1F] dark:text-[#F5F5F7]"
            role="img"
            aria-label="Active site binding mechanism"
          >
            {/* Enzyme Body with Dynamic Cleft (shifted left to leave clean explanation space on right) */}
            <path
              d={`M 36 32 L 122 32 L 122 ${54 - cleftGap * 0.4} L 152 ${70 + cleftGap * 0.6} L 182 ${54 - cleftGap * 0.4} L 182 32 L 246 32 C 264 32, 274 50, 274 68 C 274 90, 256 106, 234 106 L 64 106 C 40 106, 26 90, 26 68 C 26 48, 30 32, 36 32 Z`}
              fill={isDenatured ? 'rgba(225,29,72,0.14)' : 'rgba(16,185,129,0.16)'}
              stroke={isDenatured ? '#E11D48' : '#059669'}
              strokeWidth={2}
            />
            {/* Allosteric Site Notch */}
            <circle
              cx={232}
              cy={88}
              r={11}
              fill="rgba(245,158,11,0.18)"
              stroke="#D97706"
              strokeWidth={1.3}
              strokeDasharray="3 2"
            />
            {/* Substrate Triangle (displaced left when blocked/denatured so label never collides!) */}
            <polygon
              points={
                inhibitorType === 'competitive' && inhibitorConc > 0
                  ? '72,2 104,2 88,24'
                  : isDenatured
                    ? '72,4 104,4 88,26'
                    : '130,30 174,30 152,63'
              }
              fill="#3B82F6"
              stroke="#1D4ED8"
              strokeWidth={1.5}
            />
            <text
              x={inhibitorType === 'competitive' && inhibitorConc > 0 || isDenatured ? 112 : 152}
              y={18}
              textAnchor={inhibitorType === 'competitive' && inhibitorConc > 0 || isDenatured ? 'start' : 'middle'}
              fontSize={9.5}
              fontWeight={700}
              fill="#2563EB"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Substrate [S]
            </text>

            {/* Inhibitor Shape + Wrapped Non-Clipping Annotation */}
            {inhibitorType === 'competitive' && inhibitorConc > 0 && (
              <g>
                <polygon
                  points="132,30 172,30 152,62"
                  fill="#F59E0B"
                  stroke="#B45309"
                  strokeWidth={1.6}
                />
                <text x={286} y={46} fontSize={10.5} fontWeight={700} fill="#D97706" style={{ fontFamily: 'var(--font-mono)' }}>
                  Competitive Inhibitor
                </text>
                <text x={286} y={64} fontSize={10} fill="currentColor" opacity={0.82} style={{ fontFamily: 'var(--font-sans)' }}>
                  Blocks active site cleft
                </text>
                <text x={286} y={80} fontSize={10} fill="currentColor" opacity={0.82} style={{ fontFamily: 'var(--font-sans)' }}>
                  ↑ Apparent Km · Vmax unchanged
                </text>
              </g>
            )}
            {inhibitorType === 'non_competitive' && inhibitorConc > 0 && (
              <g>
                <circle cx={232} cy={88} r={9} fill="#E11D48" stroke="#9F1239" strokeWidth={1.5} />
                <text x={286} y={46} fontSize={10.5} fontWeight={700} fill="#E11D48" style={{ fontFamily: 'var(--font-mono)' }}>
                  Non-Competitive Inhibitor
                </text>
                <text x={286} y={64} fontSize={10} fill="currentColor" opacity={0.82} style={{ fontFamily: 'var(--font-sans)' }}>
                  Binds allosteric site → warps cleft
                </text>
                <text x={286} y={80} fontSize={10} fill="currentColor" opacity={0.82} style={{ fontFamily: 'var(--font-sans)' }}>
                  ↓ Vmax · Apparent Km unchanged
                </text>
              </g>
            )}
            {(inhibitorType === 'none' || inhibitorConc === 0) && (
              <g>
                <text x={286} y={48} fontSize={10.5} fontWeight={700} fill={isDenatured ? '#E11D48' : '#059669'} style={{ fontFamily: 'var(--font-mono)' }}>
                  {isDenatured ? 'Active site denatured' : 'Induced-fit ES complex'}
                </text>
                <text x={286} y={66} fontSize={10} fill="currentColor" opacity={0.82} style={{ fontFamily: 'var(--font-sans)' }}>
                  {isDenatured
                    ? 'H- & ionic bonds broken; [S] blocked'
                    : 'Stabilizes transition state'}
                </text>
                <text x={286} y={82} fontSize={10} fill="currentColor" opacity={0.82} style={{ fontFamily: 'var(--font-sans)' }}>
                  {isDenatured ? 'Primary peptide chain stays intact' : 'Lowers activation energy Ea'}
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>

      {/* Controls & Quantitative Readouts */}
      <div className="space-y-3 bg-white/25 p-4 dark:bg-white/[0.015]">
        <SimModeButtonGroup
          label="Inhibitor:"
          value={inhibitorType}
          options={[
            { value: 'none', label: 'None' },
            { value: 'competitive', label: 'Competitive' },
            { value: 'non_competitive', label: 'Non-Competitive' },
          ]}
          onChange={(v) => {
            setParam('inhibitor', v);
            if (v !== 'none' && inhibitorConc <= 0) {
              setParam('inhibitorConc', 12);
            }
          }}
        />

        <div className="space-y-2.5">
          <SimSlider
            id={`${specId}-substrate`}
            label="Substrate [S]"
            value={substrate}
            min={0}
            max={50}
            step={1}
            unit="mM"
            onChange={(v) => setParam('substrate', v)}
          />
          <SimSlider
            id={`${specId}-temp`}
            label="Temperature"
            value={temp}
            min={5}
            max={80}
            step={1}
            unit="°C"
            onChange={(v) => setParam('temp', v)}
          />
          <SimSlider
            id={`${specId}-ph`}
            label="Solution pH"
            value={ph}
            min={1.5}
            max={12.0}
            step={0.1}
            decimals={1}
            onChange={(v) => setParam('ph', v)}
          />
          {inhibitorType !== 'none' && (
            <SimSlider
              id={`${specId}-inh`}
              label="Inhibitor [I]"
              value={inhibitorConc}
              min={0}
              max={20}
              step={1}
              unit="mM"
              onChange={(v) => setParam('inhibitorConc', v)}
            />
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <SimReadoutCard
            label="Reaction Rate v"
            value={`${currentRate.toFixed(1)} μmol/min`}
            tone={isDenatured ? 'rose' : 'blue'}
          />
          <SimReadoutCard
            label="Effective Vmax"
            value={`${vmaxEff.toFixed(1)} μmol/min`}
            tone="emerald"
          />
          <SimReadoutCard
            label="Apparent Km"
            value={`${kmEff.toFixed(1)} mmol dm⁻³`}
            tone="amber"
          />
          <SimReadoutCard
            label="Saturation"
            value={`${Math.round((currentRate / Math.max(1, vmaxEff)) * 100)}% of Vmax`}
            tone="indigo"
          />
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 2. Water Potential & Osmosis Simulator (Ψ = Ψs + Ψp)
// ---------------------------------------------------------------------------

export function WaterPotentialOsmosisSim({ specId, params, setParam }: SimProps) {
  const cellType = getStrParam(params, 'cellType', 'plant') as 'plant' | 'animal';
  const psiSExt = getNumParam(params, 'psiSExt', -0.4, -1.2, 0.0);
  const psiSCell = getNumParam(params, 'psiSCell', -0.6, -1.2, -0.1);
  const rawPsiP = getNumParam(params, 'psiP', 0.2, 0.0, 0.8);

  const psiP = cellType === 'animal' ? 0 : rawPsiP;
  const psiCell = Number((psiSCell + psiP).toFixed(2));
  const psiExt = Number(psiSExt.toFixed(2));
  const deltaPsi = Number((psiExt - psiCell).toFixed(2)); // >0 water enters cell; <0 water leaves

  let tonicity = 'Isotonic (Dynamic Equilibrium)';
  let outcome =
    cellType === 'plant'
      ? psiP <= 0.01
        ? 'Incipient Plasmolysis (Flaccid)'
        : 'Turgid Equilibrium'
      : 'Normal Biconcave Disc';
  let tone: 'emerald' | 'blue' | 'amber' | 'rose' = 'emerald';

  if (deltaPsi > 0.03) {
    tonicity = 'Hypotonic External Solution';
    if (cellType === 'animal') {
      outcome = deltaPsi > 0.35 ? 'Cytolysis (Membrane Bursts!)' : 'Swelling (No Cell Wall)';
      tone = deltaPsi > 0.35 ? 'rose' : 'blue';
    } else {
      outcome = 'Net Osmosis IN → Turgid (Wall resists lysis via +Ψp)';
      tone = 'blue';
    }
  } else if (deltaPsi < -0.03) {
    tonicity = 'Hypertonic External Solution';
    if (cellType === 'animal') {
      outcome = 'Crenation (Shriveled Membrane)';
      tone = 'amber';
    } else {
      outcome = deltaPsi < -0.25 ? 'Plasmolysed (Membrane pulls off wall)' : 'Flaccid (Losing turgor)';
      tone = 'rose';
    }
  }

  // Visual membrane scaling factor
  const shrinkFactor =
    cellType === 'plant'
      ? Math.max(0.62, Math.min(1.0, 0.96 + deltaPsi * 0.28))
      : Math.max(0.7, Math.min(1.24, 1.0 + deltaPsi * 0.38));
  const isLysed = cellType === 'animal' && deltaPsi > 0.35;
  const isCrenated = cellType === 'animal' && deltaPsi < -0.08;

  const autoEquilibrateTurgor = () => {
    if (cellType !== 'plant') return;
    const eqP = Math.max(0, Math.min(0.8, Number((psiExt - psiSCell).toFixed(2))));
    setParam('psiP', eqP);
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1.45fr_1fr]">
      <div className="space-y-3 border-b border-black/[0.06] p-4 dark:border-white/[0.08] xl:border-r xl:border-b-0">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <SimModeButtonGroup
            value={cellType}
            options={[
              { value: 'plant', label: 'Plant Cell (Cellulose Wall)' },
              { value: 'animal', label: 'Animal Cell (No Wall)' },
            ]}
            onChange={(v) => setParam('cellType', v)}
          />
          {cellType === 'plant' && (
            <button
              type="button"
              onClick={autoEquilibrateTurgor}
              className="glass-pill inline-flex h-7 cursor-pointer items-center rounded-full px-3 text-xs font-medium text-[#1D1D1F] hover:bg-white/95 dark:text-[#F5F5F7]"
            >
              Auto-Equilibrate Ψp
            </button>
          )}
        </div>

        {/* Interactive Osmosis SVG Chamber */}
        <div className="glass-surface overflow-hidden rounded-2xl p-2">
          <svg
            viewBox="0 0 480 280"
            className="block h-auto w-full select-none text-[#1D1D1F] dark:text-[#F5F5F7]"
            role="img"
            aria-label={`Osmosis simulation: ${outcome}`}
          >
            {/* External Bath */}
            <rect
              x={16}
              y={16}
              width={448}
              height={248}
              rx={20}
              fill="rgba(59, 130, 246, 0.08)"
              stroke="#3B82F6"
              strokeOpacity={0.35}
              strokeWidth={1.5}
            />
            <text
              x={32}
              y={38}
              fontSize={11}
              fontWeight={600}
              className="fill-blue-700 dark:fill-blue-300"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              External Solution: Ψext = {psiExt.toFixed(2)} MPa
            </text>

            {cellType === 'plant' ? (
              <g>
                {/* Rigid Cellulose Cell Wall */}
                <rect
                  x={110}
                  y={58}
                  width={260}
                  height={176}
                  rx={24}
                  fill="rgba(16, 185, 129, 0.14)"
                  stroke="#059669"
                  strokeWidth={6}
                />
                {/* Shrinking / Turgid Plasma Membrane */}
                <g
                  transform={`translate(240, 146) scale(${shrinkFactor}, ${
                    0.85 + shrinkFactor * 0.15
                  }) translate(-240, -146)`}
                  className="transition-transform duration-300"
                >
                  <rect
                    x={118}
                    y={66}
                    width={244}
                    height={160}
                    rx={20}
                    fill="rgba(250, 204, 21, 0.16)"
                    stroke="#D97706"
                    strokeWidth={2.5}
                  />
                  {/* Central Vacuole */}
                  <ellipse
                    cx={240}
                    cy={146}
                    rx={82 * shrinkFactor}
                    ry={48 * shrinkFactor}
                    fill="rgba(14, 165, 233, 0.28)"
                    stroke="#0284C7"
                    strokeWidth={2}
                  />
                  <text
                    x={240}
                    y={150}
                    textAnchor="middle"
                    fontSize={11}
                    fontWeight={700}
                    className="fill-sky-900 dark:fill-sky-100"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    Vacuole · Ψcell = {psiCell.toFixed(2)} MPa
                  </text>
                  {/* Chloroplasts */}
                  {[
                    [150, 96],
                    [324, 96],
                    [154, 194],
                    [320, 194],
                  ].map(([cx, cy], idx) => (
                    <ellipse
                      key={idx}
                      cx={cx}
                      cy={cy}
                      rx={14}
                      ry={7}
                      fill="#10B981"
                      stroke="#047857"
                      strokeWidth={1.2}
                    />
                  ))}
                </g>
              </g>
            ) : (
              <g
                transform={`translate(240, 146) scale(${shrinkFactor}) translate(-240, -146)`}
                className="transition-transform duration-300"
              >
                {isCrenated ? (
                  <path
                    d="M 240 80 L 258 92 L 284 84 L 290 108 L 314 114 L 304 138 L 320 158 L 298 172 L 302 196 L 276 196 L 262 214 L 240 202 L 218 214 L 204 196 L 178 196 L 182 172 L 160 158 L 176 138 L 166 114 L 190 108 L 196 84 L 222 92 Z"
                    fill="rgba(225, 29, 72, 0.24)"
                    stroke="#E11D48"
                    strokeWidth={2.6}
                  />
                ) : (
                  <circle
                    cx={240}
                    cy={146}
                    r={68}
                    fill="rgba(225, 29, 72, 0.22)"
                    stroke="#E11D48"
                    strokeWidth={2.8}
                    strokeDasharray={isLysed ? '8 5' : undefined}
                  />
                )}
                <text
                  x={240}
                  y={150}
                  textAnchor="middle"
                  fontSize={11}
                  fontWeight={700}
                  fill="#BE123C"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {isLysed ? 'LYSIS (Burst!)' : `Ψcell = ${psiCell.toFixed(2)} MPa`}
                </text>
              </g>
            )}

            {/* Directional H2O Osmosis Arrows */}
            {Math.abs(deltaPsi) > 0.03 ? (
              <g>
                {[-1, 1].map((side) => {
                  const goingIn = deltaPsi > 0;
                  const xOuter = side === -1 ? 46 : 434;
                  const xInner = side === -1 ? 104 : 376;
                  const x1 = goingIn ? xOuter : xInner;
                  const x2 = goingIn ? xInner : xOuter;
                  return (
                    <g key={side}>
                      <line
                        x1={x1}
                        y1={146}
                        x2={x2}
                        y2={146}
                        stroke="#2563EB"
                        strokeWidth={3}
                        strokeDasharray="6 4"
                        className="animate-diagram-flow"
                      />
                      <text
                        x={(x1 + x2) / 2}
                        y={135}
                        textAnchor="middle"
                        fontSize={10}
                        fontWeight={700}
                        fill="#2563EB"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        H₂O {goingIn ? 'IN' : 'OUT'}
                      </text>
                    </g>
                  );
                })}
              </g>
            ) : (
              <text
                x={240}
                y={254}
                textAnchor="middle"
                fontSize={10.5}
                fontWeight={600}
                fill="#059669"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Equal water influx &amp; efflux (Net ΔΨ = 0 MPa)
              </text>
            )}
          </svg>
        </div>
      </div>

      {/* Sliders & Quantitative Output */}
      <div className="space-y-3 bg-white/25 p-4 dark:bg-white/[0.015]">
        <div className="space-y-2.5">
          <SimSlider
            id={`${specId}-psi-ext`}
            label="External Solute Ψs,ext"
            value={psiSExt}
            min={-1.2}
            max={0.0}
            step={0.05}
            unit="MPa"
            decimals={2}
            onChange={(v) => setParam('psiSExt', v)}
          />
          <SimSlider
            id={`${specId}-psi-cell`}
            label="Cell Solute Ψs,cell"
            value={psiSCell}
            min={-1.2}
            max={-0.1}
            step={0.05}
            unit="MPa"
            decimals={2}
            onChange={(v) => setParam('psiSCell', v)}
          />
          {cellType === 'plant' && (
            <SimSlider
              id={`${specId}-psi-p`}
              label="Turgor Pressure Ψp"
              value={psiP}
              min={0.0}
              max={0.8}
              step={0.05}
              unit="MPa"
              decimals={2}
              onChange={(v) => setParam('psiP', v)}
            />
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <SimReadoutCard
            label="Cell Ψ = Ψs + Ψp"
            value={`${psiCell.toFixed(2)} MPa`}
            tone="emerald"
          />
          <SimReadoutCard
            label="Gradient (Ψext − Ψcell)"
            value={`${deltaPsi >= 0 ? '+' : ''}${deltaPsi.toFixed(2)} MPa`}
            tone={deltaPsi > 0 ? 'blue' : deltaPsi < 0 ? 'rose' : 'neutral'}
          />
        </div>
        <SimReadoutCard label="Tonicity" value={tonicity} tone={tone} />
        <SimReadoutCard label="Cytological State" value={outcome} tone={tone} />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 3. Microscopy Magnification & Resolution Lab (M = I / A)
// ---------------------------------------------------------------------------

interface SpecimenPreset {
  id: string;
  label: string;
  actualUm: number;
  detailUm: number;
  note: string;
}

const SPECIMENS: SpecimenPreset[] = [
  { id: 'euk_cell', label: 'Palisade Cell (40 µm)', actualUm: 40, detailUm: 2.0, note: 'Chloroplasts & nucleus visible under Light & EM' },
  { id: 'mito', label: 'Mitochondrion (2.5 µm)', actualUm: 2.5, detailUm: 0.02, note: 'Outer oval visible in LM; cristae (20 nm) require TEM' },
  { id: 'bacterium', label: 'E. coli Bacterium (1.5 µm)', actualUm: 1.5, detailUm: 0.05, note: 'Cell shape visible at 1000× LM; pili/ribosomes need EM' },
  { id: 'virion', label: 'Virion Capsid (100 nm)', actualUm: 0.1, detailUm: 0.015, note: '0.1 µm < 0.2 µm Abbe diffraction limit — invisible in LM!' },
  { id: 'ribosome', label: '80S Ribosome (25 nm)', actualUm: 0.025, detailUm: 0.005, note: 'Requires TEM (0.2 nm resolution) to resolve subunits' },
  { id: 'membrane', label: 'Phospholipid Bilayer (7.5 nm)', actualUm: 0.0075, detailUm: 0.002, note: 'Classic Davson-Danielli / Singer-Nicolson TEM trilaminar view' },
];

export function MicroscopyMagnificationSim({ specId, params, setParam }: SimProps) {
  const scope = getStrParam(params, 'scope', 'light') as 'light' | 'tem' | 'sem';
  const specimenId = getStrParam(params, 'specimen', 'mito');
  const imageMm = getNumParam(params, 'imageMm', 45, 5, 140);
  const specimen = SPECIMENS.find((s) => s.id === specimenId) ?? SPECIMENS[1];

  const resLimitUm = scope === 'light' ? 0.2 : scope === 'sem' ? 0.003 : 0.0002;
  const isResolved = specimen.actualUm >= resLimitUm;
  const detailResolved = specimen.detailUm >= resLimitUm;

  const imageUm = imageMm * 1000;
  const magnification = imageUm / specimen.actualUm;
  const scaleBarMm = 20;
  const scaleActualUm = (scaleBarMm * 1000) / magnification;

  const formatActual = (um: number) =>
    um >= 1 ? `${Number(um.toFixed(2))} µm` : `${Math.round(um * 1000)} nm`;

  const formatMag = (m: number) =>
    m >= 10000 ? `${Math.round(m).toLocaleString()}×` : `${Number(m.toFixed(0))}×`;

  const bgFill =
    scope === 'light'
      ? '#F8FAFC'
      : scope === 'tem'
        ? '#18181B'
        : '#1E293B';

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1.45fr_1fr]">
      <div className="space-y-3 border-b border-black/[0.06] p-4 dark:border-white/[0.08] xl:border-r xl:border-b-0">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <SimModeButtonGroup
            value={scope}
            options={[
              { value: 'light', label: 'Light (200 nm)' },
              { value: 'tem', label: 'TEM (0.2 nm · 2D)' },
              { value: 'sem', label: 'SEM (3 nm · 3D)' },
            ]}
            onChange={(v) => setParam('scope', v)}
          />
          <span
            className={`glass-pill rounded-full px-2.5 py-0.5 font-mono text-[10.5px] font-semibold ${
              isResolved
                ? 'text-emerald-700 dark:text-emerald-300'
                : 'text-rose-600 dark:text-rose-400'
            }`}
          >
            {isResolved ? 'Resolved Clearly' : 'Below Diffraction Limit!'}
          </span>
        </div>

        {/* Specimen Quick Chips */}
        <div className="flex flex-wrap gap-1.5">
          {SPECIMENS.map((sp) => (
            <button
              key={sp.id}
              type="button"
              onClick={() => setParam('specimen', sp.id)}
              className={`inline-flex h-6 cursor-pointer items-center rounded-full px-2.5 text-[11px] font-medium transition-all ${
                sp.id === specimen.id
                  ? 'bg-[#1D1D1F] text-white dark:bg-[#F5F5F7] dark:text-[#111113]'
                  : 'glass-pill text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D]'
              }`}
            >
              {sp.label}
            </button>
          ))}
        </div>

        {/* Simulated Micrograph Viewport */}
        <div className="glass-surface overflow-hidden rounded-2xl p-2">
          <svg
            viewBox="0 0 480 240"
            className="block h-auto w-full select-none"
            role="img"
            aria-label={`${scope.toUpperCase()} micrograph of ${specimen.label}`}
          >
            <defs>
              <filter id={`blur-${specId}`}>
                <feGaussianBlur stdDeviation={isResolved ? (detailResolved ? 0 : 1.4) : 6.5} />
              </filter>
              <radialGradient id={`sem-grad-${specId}`} cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#E2E8F0" />
                <stop offset="65%" stopColor="#64748B" />
                <stop offset="100%" stopColor="#1E293B" />
              </radialGradient>
            </defs>

            <rect x={10} y={10} width={460} height={220} rx={18} fill={bgFill} />

            {/* Specimen Graphic scaled smoothly by imageMm */}
            <g
              transform={`translate(240, 114) scale(${0.55 + (imageMm / 140) * 0.9}) translate(-240, -114)`}
              filter={`url(#blur-${specId})`}
            >
              {scope === 'sem' ? (
                <ellipse
                  cx={240}
                  cy={114}
                  rx={68}
                  ry={40}
                  fill={`url(#sem-grad-${specId})`}
                  stroke="#94A3B8"
                  strokeWidth={1.5}
                />
              ) : (
                <>
                  <ellipse
                    cx={240}
                    cy={114}
                    rx={68}
                    ry={40}
                    fill={scope === 'light' ? 'rgba(219, 39, 119, 0.2)' : 'rgba(226, 232, 240, 0.14)'}
                    stroke={scope === 'light' ? '#BE185D' : '#E2E8F0'}
                    strokeWidth={2.5}
                  />
                  {/* Cristae / Internal Ultrastructure (visible when detailResolved!) */}
                  {detailResolved && (
                    <path
                      d="M 186 114 C 196 90, 210 138, 222 114 C 234 90, 246 138, 258 114 C 270 90, 282 138, 294 114"
                      fill="none"
                      stroke={scope === 'light' ? '#9D174D' : '#F8FAFC'}
                      strokeWidth={2}
                    />
                  )}
                </>
              )}
            </g>

            {/* Scale Bar Overlay */}
            <rect
              x={28}
              y={186}
              width={118}
              height={30}
              rx={8}
              fill="rgba(15, 23, 42, 0.72)"
            />
            <line x1={40} y1={206} x2={132} y2={206} stroke="#FFFFFF" strokeWidth={2.5} />
            <text
              x={86}
              y={199}
              textAnchor="middle"
              fontSize={10}
              fontWeight={700}
              fill="#FFFFFF"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Scale: {formatActual(scaleActualUm)}
            </text>

            <text
              x={452}
              y={32}
              textAnchor="end"
              fontSize={10.5}
              fontWeight={600}
              fill={scope === 'light' ? '#334155' : '#E2E8F0'}
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {scope === 'light'
                ? 'Living or stained · 200 nm limit'
                : scope === 'tem'
                  ? 'Vacuum · Ultrathin section · 0.2 nm'
                  : 'Vacuum · Gold-coated 3D · 3 nm'}
            </text>
          </svg>
        </div>
      </div>

      <div className="space-y-3 bg-white/25 p-4 dark:bg-white/[0.015]">
        <SimSlider
          id={`${specId}-img-mm`}
          label="Measured Image Size (I)"
          value={imageMm}
          min={5}
          max={140}
          step={1}
          unit="mm"
          onChange={(v) => setParam('imageMm', v)}
        />

        <div className="grid grid-cols-2 gap-2">
          <SimReadoutCard label="Actual Size (A)" value={formatActual(specimen.actualUm)} tone="indigo" />
          <SimReadoutCard label="Image Size (I)" value={`${imageMm} mm = ${(imageMm * 1000).toLocaleString()} µm`} tone="blue" />
          <SimReadoutCard label="Magnification (M = I/A)" value={formatMag(magnification)} tone="emerald" />
          <SimReadoutCard label="Resolution Limit" value={formatActual(resLimitUm)} tone={isResolved ? 'emerald' : 'rose'} />
        </div>

        <SimReadoutCard label="Ultrastructure Diagnostic" value={specimen.note} tone={detailResolved ? 'neutral' : 'amber'} />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 4. Respiration & Photosynthesis Metabolic Flux Simulator
// ---------------------------------------------------------------------------

export function RespirationPhotosynthesisFluxSim({ specId, params, setParam }: SimProps) {
  const mode = getStrParam(params, 'pathway', 'photosynthesis') as
    | 'photosynthesis'
    | 'respiration';

  // Photosynthesis parameters
  const light = getNumParam(params, 'light', 65, 0, 100);
  const co2 = getNumParam(params, 'co2', 420, 0, 1200);
  const temp = getNumParam(params, 'temp', 25, 5, 45);

  // Respiration parameters
  const o2Pct = getNumParam(params, 'o2', 80, 0, 100);
  const glucose = getNumParam(params, 'glucose', 80, 10, 100);
  const organism = getStrParam(params, 'organism', 'mammalian_muscle') as
    | 'mammalian_muscle'
    | 'yeast';

  // Photosynthesis math (Blackman's limiting factors)
  const rLight = 100 * (1 - Math.exp(-0.055 * light));
  const rCo2 = 100 * (1 - Math.exp(-0.0045 * co2));
  const rTemp =
    100 *
    Math.exp(-Math.pow((temp - 28) / 14, 2)) *
    (temp > 34 ? Math.exp(-Math.pow((temp - 34) / 5, 2)) : 1);
  const photoRate = Math.min(rLight, rCo2, rTemp);
  const limitingFactor =
    photoRate === rLight
      ? 'Light Intensity (ATP/NADPH supply)'
      : photoRate === rCo2
        ? 'CO₂ Concentration (RuBisCO carboxylation)'
        : temp > 34
          ? 'High Temp (RuBisCO/enzyme denaturation)'
          : 'Low Temp (kinetic enzyme collisions)';

  // Respiration math
  const aeroFraction = o2Pct / 100;
  const scaleG = glucose / 100;
  const atpTotal = (2 + aeroFraction * 30) * scaleG;
  const nadPlusViaFermentation = (1 - aeroFraction) * 100;

  const photoCurve = useMemo(() => {
    const pts: string[] = [];
    const ceiling = Math.min(rCo2, rTemp);
    for (let i = 0; i <= 50; i += 1) {
      const l = i * 2;
      const rl = 100 * (1 - Math.exp(-0.055 * l));
      const r = Math.min(rl, ceiling);
      const x = 48 + (l / 100) * 404;
      const y = 198 - (r / 105) * 168;
      pts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
    }
    return {
      path: pts.join(' '),
      cx: 48 + (light / 100) * 404,
      cy: 198 - (photoRate / 105) * 168,
      ceilingY: 198 - (ceiling / 105) * 168,
    };
  }, [rCo2, rTemp, light, photoRate]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1.45fr_1fr]">
      <div className="space-y-3 border-b border-black/[0.06] p-4 dark:border-white/[0.08] xl:border-r xl:border-b-0">
        <SimModeButtonGroup
          value={mode}
          options={[
            { value: 'photosynthesis', label: 'Photosynthesis Limiting Factors (C1.3)' },
            { value: 'respiration', label: 'Aerobic vs Anaerobic Respiration (C1.2)' },
          ]}
          onChange={(v) => setParam('pathway', v)}
        />

        <div className="glass-surface overflow-hidden rounded-2xl p-2">
          {mode === 'photosynthesis' ? (
            <svg
              viewBox="0 0 480 236"
              className="block h-auto w-full select-none text-[#1D1D1F] dark:text-[#F5F5F7]"
              role="img"
              aria-label="Photosynthesis limiting factors plateau curve"
            >
              <line x1={48} y1={198} x2={452} y2={198} stroke="currentColor" strokeOpacity={0.35} />
              <line x1={48} y1={24} x2={48} y2={198} stroke="currentColor" strokeOpacity={0.35} />
              <line
                x1={48}
                y1={photoCurve.ceilingY}
                x2={452}
                y2={photoCurve.ceilingY}
                stroke="#F59E0B"
                strokeDasharray="5 4"
                strokeOpacity={0.7}
              />
              <path
                d={photoCurve.path}
                fill="none"
                stroke="#10B981"
                strokeWidth={2.8}
                strokeLinecap="round"
              />
              <circle
                cx={photoCurve.cx}
                cy={photoCurve.cy}
                r={5.5}
                fill="#10B981"
                stroke="#FFFFFF"
                strokeWidth={2}
              />
              <text x={448} y={Math.max(36, photoCurve.ceilingY - 6)} textAnchor="end" fontSize={10} fontWeight={600} fill="#D97706" style={{ fontFamily: 'var(--font-mono)' }}>
                Plateau capped by CO₂ / Temp
              </text>
              <text x={250} y={224} textAnchor="middle" fontSize={10.5} fill="currentColor" opacity={0.75} style={{ fontFamily: 'var(--font-mono)' }}>
                Light Intensity (% Saturation)
              </text>
              <text
                x={16}
                y={112}
                textAnchor="middle"
                fontSize={10.5}
                fill="currentColor"
                opacity={0.75}
                transform="rotate(-90 16 112)"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                CO₂ Fixation Rate
              </text>
            </svg>
          ) : (
            <svg
              viewBox="0 0 480 236"
              className="block h-auto w-full select-none text-[#1D1D1F] dark:text-[#F5F5F7]"
              role="img"
              aria-label="Aerobic vs anaerobic cellular respiration flux"
            >
              {/* Cytosol Glycolysis */}
              <rect x={20} y={76} width={114} height={82} rx={14} fill="rgba(59,130,246,0.14)" stroke="#2563EB" strokeWidth={2} />
              <text x={77} y={102} textAnchor="middle" fontSize={11} fontWeight={700} fill="#2563EB" style={{ fontFamily: 'var(--font-sans)' }}>
                Glycolysis
              </text>
              <text x={77} y={120} textAnchor="middle" fontSize={9.5} fill="currentColor" style={{ fontFamily: 'var(--font-mono)' }}>
                Glucose → 2 Pyruvate
              </text>
              <text x={77} y={138} textAnchor="middle" fontSize={9.5} fontWeight={600} fill="#059669" style={{ fontFamily: 'var(--font-mono)' }}>
                Net +{(2 * scaleG).toFixed(1)} ATP
              </text>

              {/* Aerobic Branch */}
              <path
                d="M 134 100 C 175 100, 185 58, 224 58"
                fill="none"
                stroke="#10B981"
                strokeWidth={Math.max(1.2, 4 * aeroFraction)}
                strokeDasharray={aeroFraction > 0.05 ? '6 4' : undefined}
                className={aeroFraction > 0.05 ? 'animate-diagram-flow' : undefined}
                opacity={0.3 + 0.7 * aeroFraction}
              />
              <rect
                x={224}
                y={22}
                width={232}
                height={76}
                rx={14}
                fill="rgba(16,185,129,0.14)"
                stroke="#059669"
                strokeWidth={2}
                opacity={0.35 + 0.65 * aeroFraction}
              />
              <text x={340} y={46} textAnchor="middle" fontSize={11} fontWeight={700} fill="#059669">
                Mitochondria: Link + Krebs + ETC
              </text>
              <text x={340} y={64} textAnchor="middle" fontSize={9.5} fill="currentColor" style={{ fontFamily: 'var(--font-mono)' }}>
                O₂ final e⁻ acceptor → +{(30 * aeroFraction * scaleG).toFixed(1)} ATP
              </text>
              <text x={340} y={82} textAnchor="middle" fontSize={9.5} fill="#059669" style={{ fontFamily: 'var(--font-mono)' }}>
                Products: CO₂ + H₂O
              </text>

              {/* Anaerobic Fermentation Branch */}
              <path
                d="M 134 134 C 175 134, 185 174, 224 174"
                fill="none"
                stroke="#F59E0B"
                strokeWidth={Math.max(1.2, 4 * (1 - aeroFraction))}
                strokeDasharray={aeroFraction < 0.95 ? '6 4' : undefined}
                className={aeroFraction < 0.95 ? 'animate-diagram-flow' : undefined}
                opacity={0.3 + 0.7 * (1 - aeroFraction)}
              />
              <rect
                x={224}
                y={136}
                width={232}
                height={76}
                rx={14}
                fill="rgba(245,158,11,0.14)"
                stroke="#D97706"
                strokeWidth={2}
                opacity={0.35 + 0.65 * (1 - aeroFraction)}
              />
              <text x={340} y={160} textAnchor="middle" fontSize={11} fontWeight={700} fill="#D97706">
                {organism === 'mammalian_muscle'
                  ? 'Lactate Fermentation (Muscle)'
                  : 'Ethanol Fermentation (Yeast)'}
              </text>
              <text x={340} y={178} textAnchor="middle" fontSize={9.5} fill="currentColor" style={{ fontFamily: 'var(--font-mono)' }}>
                Regenerates NAD⁺ for glycolysis ({Math.round(nadPlusViaFermentation)}%)
              </text>
              <text x={340} y={196} textAnchor="middle" fontSize={9.5} fill="#D97706" style={{ fontFamily: 'var(--font-mono)' }}>
                {organism === 'mammalian_muscle'
                  ? 'Product: Lactate (0 extra ATP, no CO₂)'
                  : 'Products: Ethanol + CO₂ (decarboxylation)'}
              </text>
            </svg>
          )}
        </div>
      </div>

      {/* Controls & Readouts */}
      <div className="space-y-3 bg-white/25 p-4 dark:bg-white/[0.015]">
        {mode === 'photosynthesis' ? (
          <>
            <SimSlider
              id={`${specId}-light`}
              label="Light Intensity"
              value={light}
              min={0}
              max={100}
              step={2}
              unit="%"
              onChange={(v) => setParam('light', v)}
            />
            <SimSlider
              id={`${specId}-co2`}
              label="CO₂ Concentration"
              value={co2}
              min={0}
              max={1200}
              step={20}
              unit="ppm"
              onChange={(v) => setParam('co2', v)}
            />
            <SimSlider
              id={`${specId}-ptemp`}
              label="Temperature"
              value={temp}
              min={5}
              max={45}
              step={1}
              unit="°C"
              onChange={(v) => setParam('temp', v)}
            />
            <div className="grid grid-cols-2 gap-2">
              <SimReadoutCard label="Net Rate" value={`${photoRate.toFixed(1)} % max`} tone="emerald" />
              <SimReadoutCard label="Limiting Factor" value={limitingFactor} tone="amber" />
            </div>
          </>
        ) : (
          <>
            <SimModeButtonGroup
              label="System:"
              value={organism}
              options={[
                { value: 'mammalian_muscle', label: 'Mammalian Muscle' },
                { value: 'yeast', label: 'Yeast' },
              ]}
              onChange={(v) => setParam('organism', v)}
            />
            <SimSlider
              id={`${specId}-o2`}
              label="O₂ Availability"
              value={o2Pct}
              min={0}
              max={100}
              step={5}
              unit="%"
              onChange={(v) => setParam('o2', v)}
            />
            <SimSlider
              id={`${specId}-glu`}
              label="Glucose Flux"
              value={glucose}
              min={10}
              max={100}
              step={5}
              unit="%"
              onChange={(v) => setParam('glucose', v)}
            />
            <div className="grid grid-cols-2 gap-2">
              <SimReadoutCard label="ATP Yield / Glucose" value={`${atpTotal.toFixed(1)} ATP`} tone="emerald" />
              <SimReadoutCard
                label="Dominant Pathway"
                value={o2Pct >= 50 ? 'Aerobic (Oxidative Phos.)' : 'Anaerobic Fermentation'}
                tone={o2Pct >= 50 ? 'blue' : 'amber'}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
