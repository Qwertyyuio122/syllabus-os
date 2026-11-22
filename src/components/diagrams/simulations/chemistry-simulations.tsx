'use client';

import React, { useMemo } from 'react';
import {
  getBoolParam,
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
// 5. Bohr Hydrogen Emission Spectra & Convergence Limit (S1.3)
// ---------------------------------------------------------------------------

function wavelengthToVisibleCss(nm: number): {
  color: string;
  region: string;
} {
  if (nm < 380) {
    return { color: '#8B5CF6', region: 'Ultraviolet (UV)' };
  }
  if (nm > 750) {
    return { color: '#F97316', region: 'Infrared (IR)' };
  }
  let r = 0;
  let g = 0;
  let b = 0;
  if (nm >= 380 && nm < 440) {
    r = -(nm - 440) / (440 - 380);
    g = 0;
    b = 1;
  } else if (nm >= 440 && nm < 490) {
    r = 0;
    g = (nm - 440) / (490 - 440);
    b = 1;
  } else if (nm >= 490 && nm < 510) {
    r = 0;
    g = 1;
    b = -(nm - 510) / (510 - 490);
  } else if (nm >= 510 && nm < 580) {
    r = (nm - 510) / (580 - 510);
    g = 1;
    b = 0;
  } else if (nm >= 580 && nm < 645) {
    r = 1;
    g = -(nm - 645) / (645 - 580);
    b = 0;
  } else {
    r = 1;
    g = 0;
    b = 0;
  }
  const rgb = `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
  const region =
    nm < 425
      ? 'Visible — Violet'
      : nm < 470
        ? 'Visible — Blue'
        : nm < 500
          ? 'Visible — Cyan-Blue'
          : nm < 570
            ? 'Visible — Green'
            : nm < 620
              ? 'Visible — Orange'
              : 'Visible — Red (Hα)';
  return { color: rgb, region };
}

export function BohrEmissionSpectraSim({ params, setParam }: SimProps) {
  const nLower = Math.round(getNumParam(params, 'nLower', 2, 1, 3));
  const rawUpper = Math.round(getNumParam(params, 'nUpper', 3, 2, 8));
  const nUpper = Math.max(nLower + 1, rawUpper);
  const showConvergence = getBoolParam(params, 'showConvergence', true);

  const RH = 1.0967758e7; // m^-1
  const C_LIGHT = 2.99792e8; // m s^-1

  const calcTransition = (nl: number, nu: number) => {
    const upperTerm = nu >= 8 ? 0 : 1 / (nu * nu);
    const invLambda = RH * (1 / (nl * nl) - upperTerm);
    const lambdaNm = (1 / invLambda) * 1e9;
    const freqThz = (C_LIGHT / (lambdaNm * 1e-9)) / 1e12;
    const deltaEkj = 1312 * (1 / (nl * nl) - upperTerm);
    return { lambdaNm, freqThz, deltaEkj, ev: deltaEkj / 96.485 };
  };

  const active = calcTransition(nLower, nUpper);
  const spectral = wavelengthToVisibleCss(active.lambdaNm);
  const seriesName =
    nLower === 1 ? 'Lyman Series (UV)' : nLower === 2 ? 'Balmer Series (Visible)' : 'Paschen Series (IR)';

  const levels = [1, 2, 3, 4, 5, 6, 7];
  // Energy level Y-coordinate mapped faithfully so spacing converges as n -> infinity!
  const levelToY = (n: number) => {
    const frac = 1 - 1 / (n * n); // 0 at n=1, 1 at n=inf
    return 225 - frac * 185;
  };
  const infY = 225 - 185;

  const seriesLines = [nLower + 1, nLower + 2, nLower + 3, nLower + 4, nLower + 5].map(
    (nu) => {
      const t = calcTransition(nLower, nu);
      const vis = wavelengthToVisibleCss(t.lambdaNm);
      return { nu, ...t, ...vis };
    },
  );

  // Map wavelength to x on spectroscope strip (convergence at higher energy/frequency on right)
  const maxLam = seriesLines[0].lambdaNm * 1.08;
  const minLam = (1 / (RH * (1 / (nLower * nLower)))) * 1e9 * 0.94;
  const lamToX = (lam: number) =>
    28 + ((maxLam - lam) / Math.max(1, maxLam - minLam)) * 424;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1.45fr_1fr]">
      <div className="space-y-3 border-b border-black/[0.06] p-4 dark:border-white/[0.08] xl:border-r xl:border-b-0">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <SimModeButtonGroup
            label="Series:"
            value={String(nLower)}
            options={[
              { value: '1', label: 'Lyman (n→1, UV)' },
              { value: '2', label: 'Balmer (n→2, Vis)' },
              { value: '3', label: 'Paschen (n→3, IR)' },
            ]}
            onChange={(v) => {
              const nl = Number(v);
              setParam('nLower', nl);
              if (nUpper <= nl) setParam('nUpper', nl + 1);
            }}
          />
          <button
            type="button"
            aria-pressed={showConvergence}
            onClick={() => setParam('showConvergence', !showConvergence)}
            className={`inline-flex h-7 cursor-pointer items-center rounded-full px-3 text-xs font-medium transition-all ${
              showConvergence
                ? 'bg-[#1D1D1F] text-white dark:bg-[#F5F5F7] dark:text-[#111113]'
                : 'glass-pill text-[#6E6E73]'
            }`}
          >
            Convergence (n = ∞)
          </button>
        </div>

        {/* Energy Levels Converging Diagram */}
        <div className="glass-surface overflow-hidden rounded-2xl p-2">
          <svg
            viewBox="0 0 480 254"
            className="block h-auto w-full select-none text-[#1D1D1F] dark:text-[#F5F5F7]"
            role="img"
            aria-label="Hydrogen Bohr energy level diagram with converging transitions"
          >
            {showConvergence && (
              <g>
                <line
                  x1={56}
                  y1={infY}
                  x2={358}
                  y2={infY}
                  stroke="#E11D48"
                  strokeWidth={1.5}
                  strokeDasharray="5 3"
                />
                <text
                  x={366}
                  y={infY - 4}
                  fontSize={9.5}
                  fontWeight={700}
                  fill="#E11D48"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  n=∞ (0 kJ/mol)
                </text>
              </g>
            )}

            {levels.map((lv) => {
              const y = levelToY(lv);
              const isLower = lv === nLower;
              const isUpper = lv === nUpper;
              // Prevent n=4..7 labels from colliding in the tight convergence cluster
              const showLeftLabel =
                lv <= 3 ||
                (nUpper >= 4 && nUpper <= 7 ? lv === nUpper : lv === 4);
              return (
                <g
                  key={lv}
                  className={lv > nLower ? 'cursor-pointer' : ''}
                  onClick={() => {
                    if (lv > nLower) setParam('nUpper', lv);
                  }}
                >
                  <line
                    x1={56}
                    y1={y}
                    x2={358}
                    y2={y}
                    stroke={isUpper || isLower ? spectral.color : 'currentColor'}
                    strokeWidth={isUpper || isLower ? 2.4 : 1.2}
                    strokeOpacity={isUpper || isLower ? 1 : 0.45}
                  />
                  {showLeftLabel && (
                    <text
                      x={48}
                      y={y + 3.5}
                      textAnchor="end"
                      fontSize={10}
                      fontWeight={isUpper || isLower ? 700 : 500}
                      fill={isUpper || isLower ? spectral.color : 'currentColor'}
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      n={lv}
                    </text>
                  )}
                  {lv <= 3 && (
                    <text
                      x={366}
                      y={y + 3.5}
                      fontSize={9.5}
                      fill="currentColor"
                      opacity={0.75}
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      -{Math.round(1312 / (lv * lv))} kJ/mol
                    </text>
                  )}
                </g>
              );
            })}

            {/* Photon Emission Arrow */}
            {(() => {
              const yTop = nUpper === 8 ? infY : levelToY(nUpper);
              const yBot = levelToY(nLower);
              const arrowX = 148 + Math.min(4, nUpper - nLower) * 26;
              return (
                <g>
                  <line
                    x1={arrowX}
                    y1={yTop}
                    x2={arrowX}
                    y2={yBot - 6}
                    stroke={spectral.color}
                    strokeWidth={3}
                  />
                  <polygon
                    points={`${arrowX - 5},${yBot - 8} ${arrowX + 5},${yBot - 8} ${arrowX},${yBot}`}
                    fill={spectral.color}
                  />
                  <rect
                    x={arrowX + 10}
                    y={(yTop + yBot) / 2 - 12}
                    width={126}
                    height={24}
                    rx={12}
                    fill="var(--diagram-surface, #ffffff)"
                    stroke={spectral.color}
                    strokeWidth={1.4}
                  />
                  <text
                    x={arrowX + 73}
                    y={(yTop + yBot) / 2 + 4}
                    textAnchor="middle"
                    fontSize={10}
                    fontWeight={700}
                    fill={spectral.color}
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    hν · {active.lambdaNm.toFixed(1)} nm
                  </text>
                </g>
              );
            })()}
          </svg>
        </div>

        {/* Live Emission Line Spectroscope Strip */}
        <div className="glass-surface overflow-hidden rounded-2xl p-2">
          <svg
            viewBox="0 0 480 96"
            className="block h-auto w-full select-none"
            role="img"
            aria-label="Hydrogen line emission spectrum strip"
          >
            <rect x={10} y={6} width={460} height={84} rx={12} fill="#0F172A" />
            <text x={24} y={21} fontSize={9.5} fill="#94A3B8" style={{ fontFamily: 'var(--font-mono)' }}>
              ← Lower ν / Longer λ
            </text>
            <text x={456} y={21} textAnchor="end" fontSize={9.5} fill="#F43F5E" style={{ fontFamily: 'var(--font-mono)' }}>
              Convergence (n=∞) →
            </text>
            {seriesLines.map((line, idx) => {
              const x = lamToX(line.lambdaNm);
              const isSelected = line.nu === nUpper;
              const prevX = idx > 0 ? lamToX(seriesLines[idx - 1].lambdaNm) : -999;
              const nextX =
                idx < seriesLines.length - 1
                  ? lamToX(seriesLines[idx + 1].lambdaNm)
                  : 999;
              const collidesWithSelectedNext =
                !isSelected &&
                seriesLines[idx + 1]?.nu === nUpper &&
                Math.abs(nextX - x) < 24;
              const tooCloseToPrev =
                !isSelected && idx > 0 && Math.abs(x - prevX) < 24;
              const showLabel = isSelected || (!tooCloseToPrev && !collidesWithSelectedNext);
              return (
                <g
                  key={line.nu}
                  className="cursor-pointer"
                  onClick={() => setParam('nUpper', line.nu)}
                >
                  <line
                    x1={x}
                    y1={30}
                    x2={x}
                    y2={66}
                    stroke={line.color}
                    strokeWidth={isSelected ? 4.2 : 2.3}
                    opacity={isSelected ? 1 : 0.78}
                  />
                  {showLabel && (
                    <text
                      x={x}
                      y={81}
                      textAnchor="middle"
                      fontSize={9}
                      fontWeight={isSelected ? 700 : 400}
                      fill={isSelected ? '#FFFFFF' : '#94A3B8'}
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {Math.round(line.lambdaNm)}
                    </text>
                  )}
                </g>
              );
            })}
            {/* Convergence limit marker */}
            <line
              x1={lamToX((1 / (RH * (1 / (nLower * nLower)))) * 1e9)}
              y1={28}
              x2={lamToX((1 / (RH * (1 / (nLower * nLower)))) * 1e9)}
              y2={66}
              stroke="#E11D48"
              strokeWidth={1.5}
              strokeDasharray="3 2"
            />
          </svg>
        </div>
      </div>

      <div className="space-y-3 bg-white/25 p-4 dark:bg-white/[0.015]">
        <div className="space-y-2">
          <div className="font-mono text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
            Select Excited State (n_upper)
          </div>
          <div className="flex flex-wrap gap-1.5">
            {[2, 3, 4, 5, 6, 7, 8]
              .filter((n) => n > nLower)
              .map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setParam('nUpper', n)}
                  className={`inline-flex h-7 cursor-pointer items-center rounded-full px-3 font-mono text-xs font-medium transition-all ${
                    nUpper === n
                      ? 'bg-[#1D1D1F] text-white dark:bg-[#F5F5F7] dark:text-[#111113]'
                      : 'glass-pill text-[#1D1D1F] dark:text-[#F5F5F7]'
                  }`}
                >
                  {n === 8 ? 'n = ∞' : `n = ${n}`}
                </button>
              ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <SimReadoutCard label="Series" value={seriesName} tone="indigo" />
          <SimReadoutCard label="Spectral Band" value={spectral.region} tone="blue" />
          <SimReadoutCard label="Wavelength λ" value={`${active.lambdaNm.toFixed(1)} nm`} tone="emerald" />
          <SimReadoutCard label="Frequency ν" value={`${active.freqThz.toFixed(1)} × 10¹² Hz`} tone="amber" />
          <SimReadoutCard label="Photon ΔE (kJ/mol)" value={`${active.deltaEkj.toFixed(1)} kJ mol⁻¹`} tone="rose" />
          <SimReadoutCard label="Photon ΔE (eV)" value={`${active.ev.toFixed(2)} eV`} tone="neutral" />
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 6. Enthalpy Energy Profile + Catalyst + Maxwell-Boltzmann (R1.1 / R2.2)
// ---------------------------------------------------------------------------

export function EnthalpyEnergyProfileSim({ specId, params, setParam }: SimProps) {
  const deltaH = getNumParam(params, 'deltaH', -92, -180, 180);
  const ea = getNumParam(params, 'ea', 110, 35, 220);
  const catalyzed = getBoolParam(params, 'catalyzed', false);
  const tempK = getNumParam(params, 'tempK', 350, 250, 700);

  const effectiveEa = Math.max(
    deltaH > 0 ? deltaH + 10 : 15,
    catalyzed ? Math.round(ea * 0.62) : ea,
  );
  const reverseEa = effectiveEa - deltaH;
  const isExo = deltaH < 0;

  // Compute smooth profile curve in SVG (240x180)
  const profilePaths = useMemo(() => {
    const startY = isExo ? 78 : 138;
    const endY = startY - deltaH * 0.34;
    const clampedEndY = Math.max(28, Math.min(168, endY));
    const peakBaseY = Math.max(16, startY - ea * 0.48);
    const peakCatY = Math.max(22, startY - effectiveEa * 0.48);

    const buildPath = (peakY: number) =>
      `M 36 ${startY} L 76 ${startY} C 110 ${startY}, 115 ${peakY}, 145 ${peakY} C 175 ${peakY}, 182 ${clampedEndY}, 212 ${clampedEndY} L 246 ${clampedEndY}`;

    return {
      startY,
      endY: clampedEndY,
      peakBaseY,
      peakCatY,
      uncatPath: buildPath(peakBaseY),
      catPath: buildPath(peakCatY),
    };
  }, [deltaH, ea, effectiveEa, isExo]);

  // Maxwell-Boltzmann distribution curves (T1=300K reference vs live tempK)
  const mbData = useMemo(() => {
    const calcCurve = (T: number, eaThresh: number) => {
      const kT = T / 100; // scaled kinetic energy unit
      const pts: string[] = [];
      const fillPts: string[] = [];
      let totalArea = 0;
      let aboveArea = 0;
      const eaX = 24 + (eaThresh / 240) * 206;
      let startedFill = false;

      for (let i = 0; i <= 80; i += 1) {
        const E = (i / 80) * 24;
        const val = Math.sqrt(E) * Math.exp(-E / (kT * 0.95));
        const normY = 160 - val * 96;
        const x = 24 + (i / 80) * 206;
        pts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${normY.toFixed(1)}`);
        totalArea += val;
        if (E * 10 >= eaThresh) {
          aboveArea += val;
          if (!startedFill) {
            fillPts.push(`M ${eaX.toFixed(1)} 160 L ${x.toFixed(1)} ${normY.toFixed(1)}`);
            startedFill = true;
          } else {
            fillPts.push(`L ${x.toFixed(1)} ${normY.toFixed(1)}`);
          }
        }
      }
      if (startedFill) {
        fillPts.push(`L 230 160 Z`);
      }
      const pct = totalArea > 0 ? (aboveArea / totalArea) * 100 : 0;
      return { path: pts.join(' '), fillPath: fillPts.join(' '), pct, eaX };
    };

    const baseline = calcCurve(300, ea);
    const live = calcCurve(tempK, effectiveEa);
    return { baseline, live };
  }, [ea, effectiveEa, tempK]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1.45fr_1fr]">
      <div className="space-y-3 border-b border-black/[0.06] p-4 dark:border-white/[0.08] xl:border-r xl:border-b-0">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => {
                setParam('deltaH', -92);
                setParam('ea', 110);
              }}
              className="glass-pill h-7 cursor-pointer rounded-full px-3 text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7]"
            >
              Exothermic (ΔH &lt; 0)
            </button>
            <button
              type="button"
              onClick={() => {
                setParam('deltaH', 88);
                setParam('ea', 145);
              }}
              className="glass-pill h-7 cursor-pointer rounded-full px-3 text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7]"
            >
              Endothermic (ΔH &gt; 0)
            </button>
          </div>

          <button
            type="button"
            aria-pressed={catalyzed}
            onClick={() => setParam('catalyzed', !catalyzed)}
            className={`inline-flex h-7 cursor-pointer items-center rounded-full px-3 text-xs font-medium transition-all ${
              catalyzed
                ? 'bg-teal-600 text-white shadow-sm'
                : 'glass-pill text-[#1D1D1F] dark:text-[#F5F5F7]'
            }`}
          >
            {catalyzed ? 'Catalyst Active (↓ Ea)' : 'Add Catalyst'}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {/* Enthalpy Profile */}
          <div className="glass-surface overflow-hidden rounded-2xl p-2">
            <svg
              viewBox="0 0 264 196"
              className="block h-auto w-full select-none text-[#1D1D1F] dark:text-[#F5F5F7]"
              role="img"
              aria-label="Enthalpy reaction profile"
            >
              <line x1={28} y1={174} x2={250} y2={174} stroke="currentColor" strokeOpacity={0.35} />
              <line x1={28} y1={14} x2={28} y2={174} stroke="currentColor" strokeOpacity={0.35} />
              <text x={140} y={190} textAnchor="middle" fontSize={9.5} fill="currentColor" opacity={0.7} style={{ fontFamily: 'var(--font-mono)' }}>
                Reaction Coordinate
              </text>

              {/* Uncatalyzed Curve */}
              <path
                d={profilePaths.uncatPath}
                fill="none"
                stroke={catalyzed ? '#94A3B8' : '#2563EB'}
                strokeWidth={catalyzed ? 1.8 : 2.6}
                strokeDasharray={catalyzed ? '4 4' : undefined}
              />

              {/* Catalyzed Curve */}
              {catalyzed && (
                <path
                  d={profilePaths.catPath}
                  fill="none"
                  stroke="#0D9488"
                  strokeWidth={2.6}
                />
              )}

              {/* Delta H Arrow */}
              <line
                x1={226}
                y1={profilePaths.startY}
                x2={226}
                y2={profilePaths.endY}
                stroke={isExo ? '#10B981' : '#E11D48'}
                strokeWidth={2}
              />
              <line
                x1={76}
                y1={profilePaths.startY}
                x2={232}
                y2={profilePaths.startY}
                stroke="currentColor"
                strokeOpacity={0.28}
                strokeDasharray="3 3"
              />
              <text
                x={230}
                y={(profilePaths.startY + profilePaths.endY) / 2 + 3}
                fontSize={9}
                fontWeight={700}
                fill={isExo ? '#059669' : '#E11D48'}
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                ΔH
              </text>

              {/* Ea Arrow */}
              <line
                x1={145}
                y1={profilePaths.startY}
                x2={145}
                y2={catalyzed ? profilePaths.peakCatY : profilePaths.peakBaseY}
                stroke="#D97706"
                strokeWidth={1.8}
                strokeDasharray="3 2"
              />
              <text x={149} y={profilePaths.startY - 8} fontSize={9} fontWeight={700} fill="#D97706" style={{ fontFamily: 'var(--font-mono)' }}>
                Ea={effectiveEa}
              </text>
            </svg>
          </div>

          {/* Maxwell-Boltzmann Distribution */}
          <div className="glass-surface overflow-hidden rounded-2xl p-2">
            <svg
              viewBox="0 0 250 196"
              className="block h-auto w-full select-none text-[#1D1D1F] dark:text-[#F5F5F7]"
              role="img"
              aria-label="Maxwell-Boltzmann kinetic energy distribution"
            >
              <line x1={24} y1={160} x2={236} y2={160} stroke="currentColor" strokeOpacity={0.35} />
              <line x1={24} y1={16} x2={24} y2={160} stroke="currentColor" strokeOpacity={0.35} />
              {mbData.live.fillPath && (
                <path d={mbData.live.fillPath} fill="rgba(16, 185, 129, 0.28)" />
              )}
              <path
                d={mbData.baseline.path}
                fill="none"
                stroke="#94A3B8"
                strokeWidth={1.5}
                strokeDasharray="4 3"
              />
              <path d={mbData.live.path} fill="none" stroke="#E11D48" strokeWidth={2.4} />
              <line
                x1={mbData.live.eaX}
                y1={20}
                x2={mbData.live.eaX}
                y2={160}
                stroke="#D97706"
                strokeWidth={1.8}
                strokeDasharray="4 3"
              />
              <text
                x={mbData.live.eaX}
                y={174}
                textAnchor="middle"
                fontSize={9}
                fontWeight={700}
                fill="#D97706"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {catalyzed ? 'Ea(cat)' : 'Ea'}
              </text>
              <text x={130} y={190} textAnchor="middle" fontSize={9.5} fill="currentColor" opacity={0.7} style={{ fontFamily: 'var(--font-mono)' }}>
                Kinetic Energy E ({tempK} K vs 300 K)
              </text>
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-3 bg-white/25 p-4 dark:bg-white/[0.015]">
        <SimSlider
          id={`${specId}-dh`}
          label="Enthalpy Change ΔH"
          value={deltaH}
          min={-180}
          max={180}
          step={4}
          unit="kJ/mol"
          onChange={(v) => setParam('deltaH', v)}
        />
        <SimSlider
          id={`${specId}-ea`}
          label="Uncatalyzed Ea"
          value={ea}
          min={35}
          max={220}
          step={5}
          unit="kJ/mol"
          onChange={(v) => setParam('ea', v)}
        />
        <SimSlider
          id={`${specId}-tk`}
          label="Maxwell–Boltzmann Temp"
          value={tempK}
          min={250}
          max={700}
          step={10}
          unit="K"
          onChange={(v) => setParam('tempK', v)}
        />

        <div className="grid grid-cols-2 gap-2">
          <SimReadoutCard
            label="Reaction Type"
            value={isExo ? 'Exothermic (ΔH < 0)' : 'Endothermic (ΔH > 0)'}
            tone={isExo ? 'emerald' : 'rose'}
          />
          <SimReadoutCard label="Forward Ea" value={`${effectiveEa} kJ mol⁻¹`} tone="amber" />
          <SimReadoutCard label="Reverse Ea" value={`${Math.round(reverseEa)} kJ mol⁻¹`} tone="blue" />
          <SimReadoutCard
            label="Particles E ≥ Ea"
            value={`${mbData.live.pct.toFixed(1)}%`}
            tone="indigo"
          />
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 7. Acid-Base Titration pH Curve & Indicator Lab (R3.1)
// ---------------------------------------------------------------------------

function solveTitrationPh(
  system: 'strong_strong' | 'weak_strong' | 'strong_weak',
  vAddMl: number,
  ca: number,
  pka: number,
): number {
  const va = 25.0; // mL analyte
  const cb = 0.1; // M titrant
  const totalV = va + vAddMl;
  const kw = 1e-14;

  // Bisection on pH in [0, 14] via exact charge balance equation!
  let lo = 0.0;
  let hi = 14.0;
  const cAcidTotal = (ca * va) / totalV;
  const cBaseTotal = (cb * vAddMl) / totalV;

  for (let iter = 0; iter < 55; iter += 1) {
    const mid = (lo + hi) / 2;
    const h = Math.pow(10, -mid);
    const oh = kw / h;
    let chargeBalance = 0;

    if (system === 'strong_strong') {
      // HCl (analyte) + NaOH (titrant): [H+] + [Na+] - [OH-] - [Cl-] = 0
      chargeBalance = h + cBaseTotal - oh - cAcidTotal;
    } else if (system === 'weak_strong') {
      // CH3COOH (analyte) + NaOH (titrant): [H+] + [Na+] - [OH-] - [A-] = 0
      const ka = Math.pow(10, -pka);
      const aMinus = cAcidTotal * (ka / (h + ka));
      chargeBalance = h + cBaseTotal - oh - aMinus;
    } else {
      // Strong acid (HCl titrant, cb) added into Weak base (NH3 analyte, ca, pKb = pka param)
      const kb = Math.pow(10, -pka);
      const bhPlus = cAcidTotal * (kb / (oh + kb));
      // Analyte is weak base (cAcidTotal), titrant is strong acid HCl (cBaseTotal = [Cl-])
      chargeBalance = h + bhPlus - oh - cBaseTotal;
    }

    if (chargeBalance > 0) {
      // Too much H+ -> raise pH
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return (lo + hi) / 2;
}

function getIndicatorAppearance(
  indicator: 'phenolphthalein' | 'methyl_orange' | 'bromothymol_blue',
  ph: number,
): { color: string; range: [number, number]; label: string } {
  if (indicator === 'phenolphthalein') {
    const color =
      ph < 8.2
        ? 'rgba(226, 232, 240, 0.35)'
        : ph > 10.0
          ? 'rgba(219, 39, 119, 0.72)'
          : 'rgba(244, 114, 182, 0.45)';
    return { color, range: [8.2, 10.0], label: 'Phenolphthalein (8.2–10.0)' };
  }
  if (indicator === 'methyl_orange') {
    const color =
      ph < 3.1
        ? 'rgba(225, 29, 72, 0.65)'
        : ph > 4.4
          ? 'rgba(250, 204, 21, 0.68)'
          : 'rgba(249, 115, 22, 0.68)';
    return { color, range: [3.1, 4.4], label: 'Methyl Orange (3.1–4.4)' };
  }
  const color =
    ph < 6.0
      ? 'rgba(250, 204, 21, 0.68)'
      : ph > 7.6
        ? 'rgba(37, 99, 235, 0.68)'
        : 'rgba(16, 185, 129, 0.65)';
  return { color, range: [6.0, 7.6], label: 'Bromothymol Blue (6.0–7.6)' };
}

export function TitrationPhCurveSim({ specId, params, setParam }: SimProps) {
  const system = getStrParam(params, 'system', 'weak_strong') as
    | 'strong_strong'
    | 'weak_strong'
    | 'strong_weak';
  const analyteConc = getNumParam(params, 'analyteConc', 0.1, 0.05, 0.16);
  const pka = getNumParam(params, 'pka', 4.76, 3.0, 7.0);
  const vAdd = getNumParam(params, 'vAdd', 12.5, 0, 50);
  const indicator = getStrParam(params, 'indicator', 'phenolphthalein') as
    | 'phenolphthalein'
    | 'methyl_orange'
    | 'bromothymol_blue';

  const vEq = (analyteConc * 25.0) / 0.1;
  const vHalfEq = vEq / 2;
  const currentPh = solveTitrationPh(system, vAdd, analyteConc, pka);
  const eqPh = solveTitrationPh(system, vEq, analyteConc, pka);
  const indInfo = getIndicatorAppearance(indicator, currentPh);

  // Steep vertical jump check: compare pH just before and after equivalence
  const phBeforeEq = solveTitrationPh(system, Math.max(0.1, vEq - 0.5), analyteConc, pka);
  const phAfterEq = solveTitrationPh(system, Math.min(50, vEq + 0.5), analyteConc, pka);
  const steepMin = Math.min(phBeforeEq, phAfterEq);
  const steepMax = Math.max(phBeforeEq, phAfterEq);
  const isIndicatorSuitable =
    indInfo.range[0] <= steepMax && indInfo.range[1] >= steepMin;

  const curveData = useMemo(() => {
    const pts: string[] = [];
    for (let i = 0; i <= 100; i += 1) {
      const v = (i / 100) * 50;
      const ph = solveTitrationPh(system, v, analyteConc, pka);
      const x = 44 + (v / 50) * 336;
      const y = 210 - (ph / 14) * 184;
      pts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
    }
    return {
      path: pts.join(' '),
      curX: 44 + (vAdd / 50) * 336,
      curY: 210 - (currentPh / 14) * 184,
      eqX: 44 + (vEq / 50) * 336,
      eqY: 210 - (eqPh / 14) * 184,
      halfX: 44 + (vHalfEq / 50) * 336,
      halfY: 210 - (solveTitrationPh(system, vHalfEq, analyteConc, pka) / 14) * 184,
    };
  }, [system, analyteConc, pka, vAdd, currentPh, vEq, eqPh, vHalfEq]);

  const zoneNote =
    system === 'weak_strong' && vAdd > 0 && vAdd < vEq * 0.92
      ? Math.abs(vAdd - vHalfEq) < 1.2
        ? 'Half-Equivalence Point: [HA] = [A⁻] → pH = pKa (Max Buffer Capacity!)'
        : 'Buffer Region: Weak acid HA + conjugate base A⁻ resist pH change'
      : Math.abs(vAdd - vEq) < 0.8
        ? `Equivalence Point (pH ${eqPh.toFixed(2)})`
        : vAdd > vEq
          ? 'Excess titrant dominates pH'
          : 'Initial analyte solution';

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1.45fr_1fr]">
      <div className="space-y-3 border-b border-black/[0.06] p-4 dark:border-white/[0.08] xl:border-r xl:border-b-0">
        <SimModeButtonGroup
          value={system}
          options={[
            { value: 'weak_strong', label: 'Weak Acid + NaOH' },
            { value: 'strong_strong', label: 'HCl + NaOH' },
            { value: 'strong_weak', label: 'NH₃ + HCl' },
          ]}
          onChange={(v) => setParam('system', v)}
        />

        <div className="glass-surface overflow-hidden rounded-2xl p-2">
          <svg
            viewBox="0 0 480 245"
            className="block h-auto w-full select-none text-[#1D1D1F] dark:text-[#F5F5F7]"
            role="img"
            aria-label="Acid-base titration pH curve and flask color"
          >
            {/* Indicator Band */}
            <rect
              x={44}
              y={210 - (indInfo.range[1] / 14) * 184}
              width={336}
              height={((indInfo.range[1] - indInfo.range[0]) / 14) * 184}
              fill={indInfo.color}
              opacity={0.32}
            />

            {/* Grid & Axes */}
            {[0, 7, 14].map((phTick) => {
              const ty = 210 - (phTick / 14) * 184;
              return (
                <g key={phTick}>
                  <line x1={44} y1={ty} x2={380} y2={ty} stroke="currentColor" strokeOpacity={phTick === 7 ? 0.25 : 0.12} strokeDasharray="3 3" />
                  <text x={38} y={ty + 3.5} textAnchor="end" fontSize={9.5} fill="currentColor" opacity={0.7} style={{ fontFamily: 'var(--font-mono)' }}>
                    {phTick}
                  </text>
                </g>
              );
            })}
            <line x1={44} y1={26} x2={44} y2={210} stroke="currentColor" strokeOpacity={0.4} />
            <line x1={44} y1={210} x2={380} y2={210} stroke="currentColor" strokeOpacity={0.4} />

            {/* Titration Curve */}
            <path d={curveData.path} fill="none" stroke="#2563EB" strokeWidth={2.7} />

            {/* Equivalence & Half-Equivalence Markers */}
            {system !== 'strong_strong' && (
              <g>
                <circle cx={curveData.halfX} cy={curveData.halfY} r={4} fill="#F59E0B" />
                <text x={curveData.halfX} y={curveData.halfY - 8} textAnchor="middle" fontSize={8.5} fontWeight={700} fill="#D97706" style={{ fontFamily: 'var(--font-mono)' }}>
                  ½ Veq
                </text>
              </g>
            )}
            <circle cx={curveData.eqX} cy={curveData.eqY} r={4.5} fill="#10B981" />
            <text x={curveData.eqX + 6} y={curveData.eqY + 3} fontSize={8.5} fontWeight={700} fill="#059669" style={{ fontFamily: 'var(--font-mono)' }}>
              Veq ({vEq.toFixed(1)})
            </text>

            {/* Current Volume Marker */}
            <circle cx={curveData.curX} cy={curveData.curY} r={5.5} fill="#E11D48" stroke="#FFFFFF" strokeWidth={2} />

            {/* Conical Flask Swatch (Right side) */}
            <g transform="translate(396, 56)">
              <path
                d="M 22 10 L 42 10 L 42 38 L 62 110 C 64 118, 58 124, 50 124 L 14 124 C 6 124, 0 118, 2 110 L 22 38 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              />
              <path
                d="M 10 88 L 54 88 L 60 110 C 62 116, 57 121, 50 121 L 14 121 C 7 121, 2 116, 4 110 Z"
                fill={indInfo.color}
              />
              <text x={32} y={142} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="currentColor" style={{ fontFamily: 'var(--font-mono)' }}>
                pH {currentPh.toFixed(2)}
              </text>
            </g>

            <text x={212} y={236} textAnchor="middle" fontSize={10} fill="currentColor" opacity={0.75} style={{ fontFamily: 'var(--font-mono)' }}>
              Titrant Added (cm³) · 0.100 mol dm⁻³
            </text>
          </svg>
        </div>
      </div>

      <div className="space-y-3 bg-white/25 p-4 dark:bg-white/[0.015]">
        <SimModeButtonGroup
          label="Indicator:"
          value={indicator}
          options={[
            { value: 'phenolphthalein', label: 'Phenolphthalein' },
            { value: 'bromothymol_blue', label: 'Bromothymol' },
            { value: 'methyl_orange', label: 'Methyl Orange' },
          ]}
          onChange={(v) => setParam('indicator', v)}
        />

        <SimSlider
          id={`${specId}-vadd`}
          label="Titrant Volume Added"
          value={vAdd}
          min={0}
          max={50}
          step={0.25}
          unit="cm³"
          decimals={2}
          onChange={(v) => setParam('vAdd', v)}
        />
        <SimSlider
          id={`${specId}-conc`}
          label="Analyte Concentration"
          value={analyteConc}
          min={0.05}
          max={0.16}
          step={0.01}
          unit="M"
          decimals={2}
          onChange={(v) => setParam('analyteConc', v)}
        />
        {system !== 'strong_strong' && (
          <SimSlider
            id={`${specId}-pka`}
            label={system === 'weak_strong' ? 'Weak Acid pKa' : 'Weak Base pKb'}
            value={pka}
            min={3.0}
            max={7.0}
            step={0.05}
            decimals={2}
            onChange={(v) => setParam('pka', v)}
          />
        )}

        <div className="grid grid-cols-2 gap-2">
          <SimReadoutCard label="Current pH" value={currentPh.toFixed(2)} tone="rose" />
          <SimReadoutCard label="Equivalence pH" value={`${eqPh.toFixed(2)} @ ${vEq.toFixed(1)} cm³`} tone="emerald" />
        </div>
        <SimReadoutCard
          label="Indicator Suitability"
          value={isIndicatorSuitable ? `Suitable (${indInfo.label})` : `Unsuitable (${indInfo.label} outside steep jump)`}
          tone={isIndicatorSuitable ? 'emerald' : 'rose'}
        />
        <SimReadoutCard label="Titration Zone" value={zoneNote} tone="blue" />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 8. IB Periodicity Explorer (Period 2/3 & Group 1/17 + IE Anomalies)
// ---------------------------------------------------------------------------

interface PeriodicDatum {
  symbol: string;
  z: number;
  name: string;
  config: string;
  firstIe: number;
  radiusPm: number;
  en: number | null;
  mpK: number;
  anomalyNote?: string;
}

const PERIODIC_DATA: Record<'period_2' | 'period_3' | 'group_1' | 'group_17', PeriodicDatum[]> = {
  period_2: [
    { symbol: 'Li', z: 3, name: 'Lithium', config: '1s² 2s¹', firstIe: 520, radiusPm: 134, en: 1.0, mpK: 454 },
    { symbol: 'Be', z: 4, name: 'Beryllium', config: '1s² 2s²', firstIe: 900, radiusPm: 90, en: 1.6, mpK: 1560 },
    { symbol: 'B', z: 5, name: 'Boron', config: '1s² 2s² 2p¹', firstIe: 801, radiusPm: 82, en: 2.0, mpK: 2348, anomalyNote: 'Be → B IE drop: 2p electron is higher energy & further shielded by filled 2s² subshell.' },
    { symbol: 'C', z: 6, name: 'Carbon', config: '1s² 2s² 2p²', firstIe: 1086, radiusPm: 77, en: 2.6, mpK: 3800 },
    { symbol: 'N', z: 7, name: 'Nitrogen', config: '1s² 2s² 2p³', firstIe: 1402, radiusPm: 75, en: 3.0, mpK: 63 },
    { symbol: 'O', z: 8, name: 'Oxygen', config: '1s² 2s² 2p⁴', firstIe: 1314, radiusPm: 73, en: 3.4, mpK: 54, anomalyNote: 'N → O IE drop: 4th 2p electron pairs in an already occupied p orbital, increasing electron-electron repulsion.' },
    { symbol: 'F', z: 9, name: 'Fluorine', config: '1s² 2s² 2p⁵', firstIe: 1681, radiusPm: 71, en: 4.0, mpK: 53 },
    { symbol: 'Ne', z: 10, name: 'Neon', config: '1s² 2s² 2p⁶', firstIe: 2081, radiusPm: 69, en: null, mpK: 24 },
  ],
  period_3: [
    { symbol: 'Na', z: 11, name: 'Sodium', config: '[Ne] 3s¹', firstIe: 496, radiusPm: 154, en: 0.9, mpK: 371 },
    { symbol: 'Mg', z: 12, name: 'Magnesium', config: '[Ne] 3s²', firstIe: 738, radiusPm: 130, en: 1.3, mpK: 923 },
    { symbol: 'Al', z: 13, name: 'Aluminium', config: '[Ne] 3s² 3p¹', firstIe: 578, radiusPm: 118, en: 1.6, mpK: 933, anomalyNote: 'Mg → Al IE drop: valence electron enters higher-energy 3p subshell shielded by 3s².' },
    { symbol: 'Si', z: 14, name: 'Silicon', config: '[Ne] 3s² 3p²', firstIe: 787, radiusPm: 111, en: 1.9, mpK: 1687 },
    { symbol: 'P', z: 15, name: 'Phosphorus', config: '[Ne] 3s² 3p³', firstIe: 1012, radiusPm: 106, en: 2.2, mpK: 317 },
    { symbol: 'S', z: 16, name: 'Sulfur', config: '[Ne] 3s² 3p⁴', firstIe: 1000, radiusPm: 102, en: 2.6, mpK: 388, anomalyNote: 'P → S IE drop: spin-pairing e⁻–e⁻ repulsion in doubly occupied 3p orbital lowers removal energy.' },
    { symbol: 'Cl', z: 17, name: 'Chlorine', config: '[Ne] 3s² 3p⁵', firstIe: 1251, radiusPm: 99, en: 3.2, mpK: 172 },
    { symbol: 'Ar', z: 18, name: 'Argon', config: '[Ne] 3s² 3p⁶', firstIe: 1521, radiusPm: 97, en: null, mpK: 84 },
  ],
  group_1: [
    { symbol: 'Li', z: 3, name: 'Lithium', config: '2s¹', firstIe: 520, radiusPm: 134, en: 1.0, mpK: 454 },
    { symbol: 'Na', z: 11, name: 'Sodium', config: '3s¹', firstIe: 496, radiusPm: 154, en: 0.9, mpK: 371 },
    { symbol: 'K', z: 19, name: 'Potassium', config: '4s¹', firstIe: 419, radiusPm: 196, en: 0.8, mpK: 337 },
    { symbol: 'Rb', z: 37, name: 'Rubidium', config: '5s¹', firstIe: 403, radiusPm: 211, en: 0.8, mpK: 312 },
    { symbol: 'Cs', z: 55, name: 'Caesium', config: '6s¹', firstIe: 376, radiusPm: 225, en: 0.8, mpK: 302 },
  ],
  group_17: [
    { symbol: 'F', z: 9, name: 'Fluorine', config: '2s² 2p⁵', firstIe: 1681, radiusPm: 71, en: 4.0, mpK: 53 },
    { symbol: 'Cl', z: 17, name: 'Chlorine', config: '3s² 3p⁵', firstIe: 1251, radiusPm: 99, en: 3.2, mpK: 172 },
    { symbol: 'Br', z: 35, name: 'Bromine', config: '4s² 4p⁵', firstIe: 1140, radiusPm: 114, en: 3.0, mpK: 266 },
    { symbol: 'I', z: 53, name: 'Iodine', config: '5s² 5p⁵', firstIe: 1008, radiusPm: 133, en: 2.7, mpK: 387 },
  ],
};

export function PeriodicityExplorerSim({ params, setParam }: SimProps) {
  const scope = getStrParam(params, 'scope', 'period_2') as
    | 'period_2'
    | 'period_3'
    | 'group_1'
    | 'group_17';
  const property = getStrParam(params, 'property', 'first_ie') as
    | 'first_ie'
    | 'radius'
    | 'en'
    | 'mp';
  const selectedSym = getStrParam(params, 'element', '');

  const dataset = PERIODIC_DATA[scope];
  const activeEl = dataset.find((d) => d.symbol === selectedSym) ?? dataset[2] ?? dataset[0];

  const getValue = (d: PeriodicDatum): number | null => {
    if (property === 'first_ie') return d.firstIe;
    if (property === 'radius') return d.radiusPm;
    if (property === 'en') return d.en;
    return d.mpK;
  };

  const values = dataset.map(getValue).filter((v): v is number => v !== null);
  const maxVal = Math.max(...values, 1);

  const unitLabel =
    property === 'first_ie'
      ? 'kJ mol⁻¹'
      : property === 'radius'
        ? 'pm'
        : property === 'en'
          ? 'Pauling χ'
          : 'K';

  const polylinePoints = dataset
    .map((d, idx) => {
      const val = getValue(d);
      if (val === null) return null;
      const x = 48 + (idx / Math.max(1, dataset.length - 1)) * 392;
      const y = 200 - (val / (maxVal * 1.12)) * 165;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .filter((p): p is string => p !== null)
    .join(' ');

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1.45fr_1fr]">
      <div className="space-y-3 border-b border-black/[0.06] p-4 dark:border-white/[0.08] xl:border-r xl:border-b-0">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <SimModeButtonGroup
            value={scope}
            options={[
              { value: 'period_2', label: 'Period 2 (Li–Ne)' },
              { value: 'period_3', label: 'Period 3 (Na–Ar)' },
              { value: 'group_1', label: 'Group 1' },
              { value: 'group_17', label: 'Group 17' },
            ]}
            onChange={(v) => setParam('scope', v)}
          />
          <SimModeButtonGroup
            value={property}
            options={[
              { value: 'first_ie', label: '1st IE' },
              { value: 'radius', label: 'Radius' },
              { value: 'en', label: 'χ (EN)' },
              { value: 'mp', label: 'Melting Pt' },
            ]}
            onChange={(v) => setParam('property', v)}
          />
        </div>

        <div className="glass-surface overflow-hidden rounded-2xl p-2">
          <svg
            viewBox="0 0 480 240"
            className="block h-auto w-full select-none text-[#1D1D1F] dark:text-[#F5F5F7]"
            role="img"
            aria-label="Periodic trend chart"
          >
            <line x1={48} y1={200} x2={444} y2={200} stroke="currentColor" strokeOpacity={0.35} />
            <line x1={48} y1={24} x2={48} y2={200} stroke="currentColor" strokeOpacity={0.35} />

            {polylinePoints && (
              <polyline
                points={polylinePoints}
                fill="none"
                stroke="#4F46E5"
                strokeWidth={2.5}
              />
            )}

            {dataset.map((d, idx) => {
              const val = getValue(d);
              const x = 48 + (idx / Math.max(1, dataset.length - 1)) * 392;
              const y = val !== null ? 200 - (val / (maxVal * 1.12)) * 165 : 196;
              const isSelected = d.symbol === activeEl.symbol;
              const isAnomaly = property === 'first_ie' && Boolean(d.anomalyNote);
              return (
                <g
                  key={d.symbol}
                  className="cursor-pointer"
                  onClick={() => setParam('element', d.symbol)}
                >
                  {val !== null ? (
                    <circle
                      cx={x}
                      cy={y}
                      r={isSelected ? 7.5 : isAnomaly ? 6 : 5}
                      fill={isAnomaly ? '#F59E0B' : isSelected ? '#4F46E5' : '#FFFFFF'}
                      stroke={isAnomaly ? '#B45309' : '#4F46E5'}
                      strokeWidth={2}
                    />
                  ) : (
                    <text x={x} y={192} textAnchor="middle" fontSize={9} fill="#94A3B8">
                      n/a
                    </text>
                  )}
                  <text
                    x={x}
                    y={218}
                    textAnchor="middle"
                    fontSize={11}
                    fontWeight={isSelected ? 700 : 500}
                    fill={isSelected ? '#4F46E5' : 'currentColor'}
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {d.symbol}
                  </text>
                  {val !== null && (
                    <text
                      x={x}
                      y={y - 10}
                      textAnchor="middle"
                      fontSize={9}
                      fontWeight={isSelected ? 700 : 400}
                      fill={isAnomaly ? '#D97706' : 'currentColor'}
                      opacity={isSelected || isAnomaly ? 1 : 0.72}
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {val}
                    </text>
                  )}
                </g>
              );
            })}
            <text x={246} y={235} textAnchor="middle" fontSize={9.5} fill="currentColor" opacity={0.68} style={{ fontFamily: 'var(--font-mono)' }}>
              Click any element node · Unit: {unitLabel}
            </text>
          </svg>
        </div>
      </div>

      <div className="space-y-3 bg-white/25 p-4 dark:bg-white/[0.015]">
        <div className="glass-surface rounded-2xl p-3.5">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              {activeEl.symbol} — {activeEl.name} (Z = {activeEl.z})
            </h4>
            <span className="glass-pill rounded-full px-2.5 py-0.5 font-mono text-[11px] font-semibold">
              {activeEl.config}
            </span>
          </div>
          <div className="mt-2.5 grid grid-cols-2 gap-2">
            <SimReadoutCard label="1st Ionization E" value={`${activeEl.firstIe} kJ mol⁻¹`} tone="indigo" />
            <SimReadoutCard label="Atomic Radius" value={`${activeEl.radiusPm} pm`} tone="blue" />
            <SimReadoutCard label="Electronegativity" value={activeEl.en !== null ? String(activeEl.en) : 'Noble gas (—)'} tone="emerald" />
            <SimReadoutCard label="Melting Point" value={`${activeEl.mpK} K`} tone="amber" />
          </div>
        </div>

        {activeEl.anomalyNote ? (
          <SimReadoutCard
            label="IB Subshell / Pairing Anomaly"
            value={activeEl.anomalyNote}
            tone="amber"
          />
        ) : (
          <SimReadoutCard
            label="Periodic Trend Mechanism"
            value={
              scope.startsWith('period')
                ? 'Across a period: nuclear charge (Z) increases while shielding by inner shells stays roughly constant → greater Zeff pulls valence e⁻ closer.'
                : 'Down a group: extra occupied main energy levels increase atomic radius & shielding, outweighing higher nuclear charge.'
            }
            tone="neutral"
          />
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 9. Le Chatelier Equilibrium Perturbation Lab (R2.3)
// ---------------------------------------------------------------------------

type PerturbationKind =
  | 'initial'
  | 'add_reactant'
  | 'add_product'
  | 'high_pressure'
  | 'high_temp'
  | 'catalyst';

export function EquilibriumLeChatelierSim({ params, setParam }: SimProps) {
  const rxn = getStrParam(params, 'reaction', 'haber') as
    | 'haber'
    | 'contact'
    | 'no2_n2o4';
  const perturb = getStrParam(params, 'perturb', 'initial') as PerturbationKind;

  // Reaction stoichiometry: aA + bB <-> cC (for N2O4: b=0)
  const rxnConfig =
    rxn === 'haber'
      ? {
          eqLabel: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g)',
          dh: -92,
          aName: 'N₂',
          bName: 'H₂',
          cName: 'NH₃',
          aCoeff: 1,
          bCoeff: 3,
          cCoeff: 2,
          initA: 1.0,
          initB: 1.5,
          initC: 1.2,
        }
      : rxn === 'contact'
        ? {
            eqLabel: '2SO₂(g) + O₂(g) ⇌ 2SO₃(g)',
            dh: -197,
            aName: 'SO₂',
            bName: 'O₂',
            cName: 'SO₃',
            aCoeff: 2,
            bCoeff: 1,
            cCoeff: 2,
            initA: 1.1,
            initB: 0.9,
            initC: 1.4,
          }
        : {
            eqLabel: '2NO₂(g, brown) ⇌ N₂O₄(g, colorless)',
            dh: -57,
            aName: 'NO₂',
            bName: '',
            cName: 'N₂O₄',
            aCoeff: 2,
            bCoeff: 0,
            cCoeff: 1,
            initA: 1.2,
            initB: 0,
            initC: 1.1,
          };

  const calcQ = (a: number, b: number, c: number) => {
    const denom =
      Math.pow(Math.max(1e-6, a), rxnConfig.aCoeff) *
      (rxnConfig.bCoeff > 0 ? Math.pow(Math.max(1e-6, b), rxnConfig.bCoeff) : 1);
    return Math.pow(Math.max(1e-6, c), rxnConfig.cCoeff) / denom;
  };

  const KcBase = calcQ(rxnConfig.initA, rxnConfig.initB, rxnConfig.initC);
  const KcNew = perturb === 'high_temp' ? KcBase * 0.35 : KcBase; // All 3 presets are exothermic -> higher T lowers Kc!

  // Immediate concentrations right after perturbation (t = t_p)
  let pA = rxnConfig.initA;
  let pB = rxnConfig.initB;
  let pC = rxnConfig.initC;
  if (perturb === 'add_reactant') pA += 0.9;
  else if (perturb === 'add_product') pC += 0.9;
  else if (perturb === 'high_pressure') {
    pA *= 1.8;
    pB *= 1.8;
    pC *= 1.8;
  }

  const QImmediate = calcQ(pA, pB, pC);

  // Solve extent xi so Q(pA - a*xi, pB - b*xi, pC + c*xi) = KcNew
  let xiMin = -pC / rxnConfig.cCoeff + 1e-4;
  let xiMax = Math.min(
    pA / rxnConfig.aCoeff,
    rxnConfig.bCoeff > 0 ? pB / rxnConfig.bCoeff : Infinity,
  ) - 1e-4;

  let xi = 0;
  if (perturb !== 'initial' && perturb !== 'catalyst') {
    for (let i = 0; i < 45; i += 1) {
      const mid = (xiMin + xiMax) / 2;
      const qMid = calcQ(
        pA - rxnConfig.aCoeff * mid,
        pB - rxnConfig.bCoeff * mid,
        pC + rxnConfig.cCoeff * mid,
      );
      if (qMid < KcNew) {
        xiMin = mid;
      } else {
        xiMax = mid;
      }
      xi = mid;
    }
  }

  const eqA = pA - rxnConfig.aCoeff * xi;
  const eqB = rxnConfig.bCoeff > 0 ? pB - rxnConfig.bCoeff * xi : 0;
  const eqC = pC + rxnConfig.cCoeff * xi;

  const maxConc = Math.max(2.8, pA, pB, pC, eqA, eqB, eqC) * 1.1;

  // Build time series (t: 0..100, perturb at t=35, new eq settled by t=90)
  const buildTimeSeries = (initVal: number, postVal: number, finalVal: number) => {
    const pts: string[] = [];
    for (let t = 0; t <= 100; t += 2) {
      let c = initVal;
      if (t >= 35) {
        const dt = (t - 35) / 55;
        const relax = 1 - Math.exp(-dt * (perturb === 'catalyst' ? 7 : 4.2));
        c = postVal + (finalVal - postVal) * relax;
      }
      const x = 44 + (t / 100) * 408;
      const y = 198 - (c / maxConc) * 164;
      pts.push(`${t === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
    }
    return pts.join(' ');
  };

  const pathA = buildTimeSeries(rxnConfig.initA, pA, eqA);
  const pathB =
    rxnConfig.bCoeff > 0 ? buildTimeSeries(rxnConfig.initB, pB, eqB) : null;
  const pathC = buildTimeSeries(rxnConfig.initC, pC, eqC);

  const shiftLabel =
    perturb === 'initial'
      ? 'System at Equilibrium (Q = Kc)'
      : perturb === 'catalyst'
        ? 'No Shift — Catalyst speeds fwd & rev equally (Q = Kc)'
        : QImmediate < KcNew
          ? 'Q < Kc → Shifts RIGHT (Forward) to consume reactants'
          : 'Q > Kc → Shifts LEFT (Reverse) to restore Kc';

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1.45fr_1fr]">
      <div className="space-y-3 border-b border-black/[0.06] p-4 dark:border-white/[0.08] xl:border-r xl:border-b-0">
        <SimModeButtonGroup
          value={rxn}
          options={[
            { value: 'haber', label: 'Haber: N₂ + 3H₂ ⇌ 2NH₃' },
            { value: 'contact', label: 'Contact: 2SO₂ + O₂ ⇌ 2SO₃' },
            { value: 'no2_n2o4', label: '2NO₂ ⇌ N₂O₄' },
          ]}
          onChange={(v) => {
            setParam('reaction', v);
            setParam('perturb', 'initial');
          }}
        />

        {/* Perturbation Buttons */}
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              ['add_reactant', `Inject ${rxnConfig.aName} (+)`],
              ['add_product', `Inject ${rxnConfig.cName} (+)`],
              ['high_pressure', '↑ Pressure (↓ Volume)'],
              ['high_temp', '↑ Temperature'],
              ['catalyst', 'Add Catalyst'],
              ['initial', 'Reset Eq'],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              aria-pressed={perturb === id}
              onClick={() => setParam('perturb', id)}
              className={`inline-flex h-7 cursor-pointer items-center rounded-full px-3 text-xs font-medium transition-all ${
                perturb === id
                  ? 'bg-[#1D1D1F] text-white dark:bg-[#F5F5F7] dark:text-[#111113]'
                  : 'glass-pill text-[#1D1D1F] hover:bg-white/95 dark:text-[#F5F5F7]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Concentration vs Time Plot */}
        <div className="glass-surface overflow-hidden rounded-2xl p-2">
          <svg
            viewBox="0 0 480 236"
            className="block h-auto w-full select-none text-[#1D1D1F] dark:text-[#F5F5F7]"
            role="img"
            aria-label="Concentration vs time equilibrium response"
          >
            <line x1={44} y1={198} x2={452} y2={198} stroke="currentColor" strokeOpacity={0.35} />
            <line x1={44} y1={24} x2={44} y2={198} stroke="currentColor" strokeOpacity={0.35} />

            {/* Perturbation Time Line */}
            <line x1={44 + 0.35 * 408} y1={24} x2={44 + 0.35 * 408} y2={198} stroke="#64748B" strokeDasharray="4 3" />
            <text x={44 + 0.35 * 408 + 5} y={36} fontSize={9.5} fontWeight={600} fill="#64748B" style={{ fontFamily: 'var(--font-mono)' }}>
              Stress Applied
            </text>

            <path d={pathA} fill="none" stroke="#2563EB" strokeWidth={2.5} />
            {pathB && <path d={pathB} fill="none" stroke="#0D9488" strokeWidth={2.5} strokeDasharray="5 3" />}
            <path d={pathC} fill="none" stroke="#E11D48" strokeWidth={2.7} />

            {/* Legend */}
            <g transform="translate(56, 20)">
              <text x={0} y={10} fontSize={10} fontWeight={700} fill="#2563EB" style={{ fontFamily: 'var(--font-mono)' }}>
                — [{rxnConfig.aName}]
              </text>
              {rxnConfig.bCoeff > 0 && (
                <text x={68} y={10} fontSize={10} fontWeight={700} fill="#0D9488" style={{ fontFamily: 'var(--font-mono)' }}>
                  -- [{rxnConfig.bName}]
                </text>
              )}
              <text x={144} y={10} fontSize={10} fontWeight={700} fill="#E11D48" style={{ fontFamily: 'var(--font-mono)' }}>
                — [{rxnConfig.cName}]
              </text>
            </g>

            <text x={248} y={222} textAnchor="middle" fontSize={10} fill="currentColor" opacity={0.75} style={{ fontFamily: 'var(--font-mono)' }}>
              Time (Arbitrary Units) · {rxnConfig.eqLabel} (ΔH = {rxnConfig.dh} kJ mol⁻¹)
            </text>
          </svg>
        </div>
      </div>

      <div className="space-y-3 bg-white/25 p-4 dark:bg-white/[0.015]">
        <div className="grid grid-cols-2 gap-2">
          <SimReadoutCard label="Reaction Quotient Q" value={QImmediate.toFixed(2)} tone={Math.abs(QImmediate - KcNew) < 0.02 ? 'emerald' : 'amber'} />
          <SimReadoutCard label="Equilibrium Constant Kc" value={KcNew.toFixed(2)} tone={perturb === 'high_temp' ? 'rose' : 'blue'} subtext={perturb === 'high_temp' ? 'Kc changed (only T alters Kc!)' : 'Kc constant at constant T'} />
        </div>
        <SimReadoutCard
          label="Le Chatelier Shift"
          value={shiftLabel}
          tone={perturb === 'initial' || perturb === 'catalyst' ? 'neutral' : QImmediate < KcNew ? 'emerald' : 'rose'}
        />
        <div className="glass-surface rounded-2xl px-3.5 py-2.5 font-mono text-[11px]">
          <div className="text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
            New Equilibrium Concentrations (mol dm⁻³)
          </div>
          <div className="mt-1.5 flex flex-wrap gap-3">
            <span className="text-blue-600 dark:text-blue-400">
              [{rxnConfig.aName}] = {eqA.toFixed(2)}
            </span>
            {rxnConfig.bCoeff > 0 && (
              <span className="text-teal-600 dark:text-teal-400">
                [{rxnConfig.bName}] = {eqB.toFixed(2)}
              </span>
            )}
            <span className="text-rose-600 dark:text-rose-400">
              [{rxnConfig.cName}] = {eqC.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
