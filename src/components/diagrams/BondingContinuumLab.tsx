'use client';

import React, { useMemo, useState } from 'react';
import { Droplets, Hammer, Layers, Palette, Triangle } from 'lucide-react';
import type {
  BondingCompoundPoint,
  BondingContinuumLabSpec,
  BondingStructureModel,
} from '@/types/diagrams';
import { MarkdownMath } from '@/components/notes/MarkdownMath';

export interface BondingContinuumLabProps {
  spec: BondingContinuumLabSpec;
}

const SVG_W = 540;
const SVG_H = 380;
const PAD_L = 56;
const PAD_R = 24;
const PAD_T = 26;
const PAD_B = 46;
const PLOT_W = SVG_W - PAD_L - PAD_R;
const PLOT_H = SVG_H - PAD_T - PAD_B;

function mapAvgEn(avgEn: number): number {
  const clamped = Math.max(0.6, Math.min(4.1, avgEn));
  return PAD_L + ((clamped - 0.6) / 3.5) * PLOT_W;
}

function mapDeltaEn(deltaEn: number): number {
  const clamped = Math.max(0, Math.min(3.5, deltaEn));
  return PAD_T + PLOT_H - (clamped / 3.5) * PLOT_H;
}

function classifyBonding(avgEn: number, deltaEn: number): {
  label: string;
  explanation: string;
} {
  if (deltaEn >= 1.8) {
    return {
      label: 'Predominantly Ionic',
      explanation:
        'Large electronegativity difference transfers valence electrons into discrete cations/anions in a 3D electrostatic lattice.',
    };
  }
  if (avgEn < 1.8 && deltaEn < 0.8) {
    return {
      label: 'Metallic Continuum',
      explanation:
        'Both elements have low electronegativity (low effective pull on valence electrons), forming cations in a delocalized electron sea.',
    };
  }
  if (deltaEn < 0.45 && avgEn >= 2.0) {
    return {
      label: 'Non-Polar / Weakly Polar Covalent',
      explanation:
        'High average electronegativity with small Δχ yields shared bonding electron pairs (simple molecular or giant covalent network depending on valency).',
    };
  }
  if (deltaEn >= 0.9 && deltaEn < 1.8) {
    return {
      label: 'Polar Covalent / Intermediate Ionic-Covalent Character',
      explanation:
        'In the van Arkel–Ketelaar triangle, transition-zone compounds like AlCl₃ or SiO₂ exhibit polarized covalent bonds with significant partial ionic character.',
    };
  }
  return {
    label: 'Polar Covalent',
    explanation:
      'High average electronegativity with moderate Δχ (0.45–1.79) produces unequal sharing of bonding electron pairs (δ+ / δ−).',
  };
}

function renderStructureSvg(
  modelId: BondingStructureModel['id'],
  options: {
    hammerStress: boolean;
    addWater: boolean;
    addAlloy: boolean;
    monochrome: boolean;
  },
): React.ReactElement {
  const { hammerStress, addWater, addAlloy, monochrome } = options;
  const shift = hammerStress ? 32 : 0;

  const posFill = monochrome ? 'var(--diagram-surface, #ffffff)' : '#D96B5E';
  const negFill = monochrome ? 'var(--diagram-subtle, #f1f1ef)' : '#5B8C6E';
  const metalFill = monochrome ? 'var(--diagram-subtle, #f1f1ef)' : '#6C84A6';
  const alloyFill = monochrome ? '#37352F' : '#C29A49';
  const carbonFill = monochrome ? 'var(--diagram-subtle, #f1f1ef)' : '#4A4D52';
  const oxygenFill = monochrome ? 'var(--diagram-surface, #ffffff)' : '#C85A53';

  switch (modelId) {
    case 'ionic_lattice': {
      const cols = [0, 1, 2, 3, 4];
      const rows = [0, 1, 2, 3];
      return (
        <svg viewBox="0 0 540 340" className="block h-auto w-full text-[#1D1D1F] dark:text-[#F5F5F7]">
          {/* Hammer force indicator */}
          {hammerStress && (
            <g>
              <line x1={55} y1={98} x2={122} y2={98} stroke={monochrome ? 'currentColor' : '#C85A53'} strokeWidth={3} />
              <polygon points="122,92 135,98 122,104" fill={monochrome ? 'currentColor' : '#C85A53'} />
              <text x={52} y={78} fontSize={11} fontWeight={700} fill={monochrome ? 'currentColor' : '#C85A53'} style={{ fontFamily: 'var(--font-mono)' }}>
                Hammer Shear →
              </text>
            </g>
          )}

          {/* Lattice Ions */}
          {rows.map((r) =>
            cols.map((c) => {
              const isCation = (r + c) % 2 === 0;
              const topRow = r < 2;
              const xOffset = topRow ? shift : 0;
              const yRepel = hammerStress && topRow ? -14 : 0;
              const spreadX = addWater ? (c - 2) * 18 : 0;
              const spreadY = addWater ? (r - 1.5) * 16 : 0;
              const cx = 175 + c * 52 + xOffset + spreadX;
              const cy = 92 + r * 52 + yRepel + spreadY;

              return (
                <g key={`ion-${r}-${c}`} className="transition-all duration-300">
                  {addWater && (
                    <circle
                      cx={cx}
                      cy={cy}
                      r={27}
                      fill="none"
                      stroke={monochrome ? 'currentColor' : '#4B6FA5'}
                      strokeDasharray="3 3"
                      strokeOpacity={0.65}
                    />
                  )}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isCation ? 15 : 19}
                    fill={isCation ? posFill : negFill}
                    stroke="currentColor"
                    strokeWidth={1.6}
                  />
                  <text
                    x={cx}
                    y={cy + 4}
                    textAnchor="middle"
                    fontSize={12}
                    fontWeight={700}
                    fill={monochrome ? 'currentColor' : '#FFFFFF'}
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {isCation ? '+' : '−'}
                  </text>
                </g>
              );
            }),
          )}

          {/* Repulsion Markers when Hammer shifts one column */}
          {hammerStress &&
            cols.slice(0, 4).map((c) => {
              const cx = 207 + c * 52;
              return (
                <g key={`repel-${c}`}>
                  <line
                    x1={cx - 8}
                    y1={155}
                    x2={cx + 8}
                    y2={155}
                    stroke={monochrome ? 'currentColor' : '#C85A53'}
                    strokeWidth={2}
                    strokeDasharray="2 2"
                  />
                  <text
                    x={cx}
                    y={152}
                    textAnchor="middle"
                    fontSize={9.5}
                    fontWeight={700}
                    fill={monochrome ? 'currentColor' : '#C85A53'}
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    REPEL!
                  </text>
                </g>
              );
            })}

          <text
            x={270}
            y={318}
            textAnchor="middle"
            fontSize={11.5}
            fontWeight={600}
            fill="currentColor"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {hammerStress
              ? 'Plane shifts -> LIKE charges (+/+ and −/−) align & repel -> Brittle Shatter!'
              : addWater
                ? 'Polar H₂O hydration shells overcome lattice energy -> mobile aqueous ions conduct!'
                : '3D Giant Ionic Lattice: alternating cations (+) & anions (−) held by strong electrostatic attraction'}
          </text>
        </svg>
      );
    }

    case 'metallic_sea': {
      const cols = [0, 1, 2, 3, 4, 5];
      const rows = [0, 1, 2, 3];
      const electrons = [
        [152, 82], [218, 92], [292, 76], [358, 94], [412, 80],
        [176, 134], [248, 142], [312, 128], [392, 138], [138, 190],
        [204, 184], [278, 198], [344, 182], [414, 194], [190, 238],
        [262, 246], [332, 234], [386, 248],
      ];
      const slipX = hammerStress ? (addAlloy ? 8 : 34) : 0;

      return (
        <svg viewBox="0 0 540 340" className="block h-auto w-full text-[#1D1D1F] dark:text-[#F5F5F7]">
          <rect
            x={108}
            y={64}
            width={344}
            height={212}
            rx={22}
            fill={monochrome ? 'rgba(120,119,116,0.08)' : 'rgba(108,132,166,0.12)'}
            stroke="currentColor"
            strokeOpacity={0.25}
          />

          {/* Delocalized Electron Sea */}
          {electrons.map(([ex, ey], i) => (
            <g key={`e-${i}`}>
              <circle
                cx={ex}
                cy={ey}
                r={5.5}
                fill={monochrome ? 'currentColor' : '#C29A49'}
                opacity={0.85}
              />
              <text
                x={ex}
                y={ey + 3}
                textAnchor="middle"
                fontSize={8}
                fontWeight={700}
                fill="#FFFFFF"
              >
                −
              </text>
            </g>
          ))}

          {/* Metal Cations + Optional Alloy Disrupters */}
          {rows.map((r) =>
            cols.map((c) => {
              const isAlloy = addAlloy && ((r === 1 && c === 2) || (r === 2 && c === 4));
              const xOff = r < 2 ? slipX : 0;
              const cx = 148 + c * 50 + xOff;
              const cy = 96 + r * 48;
              return (
                <g key={`cat-${r}-${c}`} className="transition-all duration-300">
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isAlloy ? 21 : 15}
                    fill={isAlloy ? alloyFill : metalFill}
                    stroke="currentColor"
                    strokeWidth={1.6}
                  />
                  <text
                    x={cx}
                    y={cy + 4}
                    textAnchor="middle"
                    fontSize={11}
                    fontWeight={700}
                    fill={monochrome ? 'currentColor' : '#FFFFFF'}
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {isAlloy ? 'Sn' : 'M+'}
                  </text>
                </g>
              );
            }),
          )}

          <text
            x={270}
            y={316}
            textAnchor="middle"
            fontSize={11.5}
            fontWeight={600}
            fill="currentColor"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {addAlloy
              ? 'Alloy dopants distort regular planes -> block slip -> stronger & less malleable!'
              : hammerStress
                ? 'Layers slide without breaking non-directional e⁻ sea -> Malleable & Ductile!'
                : 'Positive metal cations in a sea of mobile delocalized valence electrons'}
          </text>
        </svg>
      );
    }

    case 'diamond': {
      const nodes = [
        [270, 90], [190, 145], [350, 145], [270, 185],
        [140, 225], [235, 235], [315, 235], [405, 225],
      ];
      const links = [
        [0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [2, 6], [2, 7], [3, 5], [3, 6],
      ];
      return (
        <svg viewBox="0 0 540 340" className="block h-auto w-full text-[#1D1D1F] dark:text-[#F5F5F7]">
          {links.map(([i, j], idx) => (
            <line
              key={`dl-${idx}`}
              x1={nodes[i][0]}
              y1={nodes[i][1]}
              x2={nodes[j][0]}
              y2={nodes[j][1]}
              stroke="currentColor"
              strokeWidth={3}
              strokeOpacity={0.75}
            />
          ))}
          {nodes.map(([nx, ny], idx) => (
            <g key={`dn-${idx}`}>
              <circle cx={nx} cy={ny} r={16} fill={carbonFill} stroke="currentColor" strokeWidth={1.6} />
              <text x={nx} y={ny + 4} textAnchor="middle" fontSize={11} fontWeight={700} fill={monochrome ? 'currentColor' : '#FFFFFF'} style={{ fontFamily: 'var(--font-mono)' }}>
                C
              </text>
            </g>
          ))}
          <text x={270} y={295} textAnchor="middle" fontSize={11.5} fontWeight={600} fill="currentColor" style={{ fontFamily: 'var(--font-mono)' }}>
            Diamond: sp³ · 4 bonds per C · 109.5° tetrahedral · 0 delocalized e⁻ (Insulator)
          </text>
        </svg>
      );
    }

    case 'graphite':
    case 'graphene': {
      const layers = modelId === 'graphene' ? [145] : [108, 222];
      return (
        <svg viewBox="0 0 540 340" className="block h-auto w-full text-[#1D1D1F] dark:text-[#F5F5F7]">
          {layers.map((ly, li) => (
            <g key={`layer-${li}`}>
              <polygon
                points={`140,${ly} 180,${ly - 24} 225,${ly - 24} 265,${ly} 225,${ly + 24} 180,${ly + 24}`}
                fill={monochrome ? 'rgba(120,119,116,0.1)' : 'rgba(74,77,82,0.12)'}
                stroke="currentColor"
                strokeWidth={2.5}
              />
              <polygon
                points={`265,${ly} 305,${ly - 24} 350,${ly - 24} 390,${ly} 350,${ly + 24} 305,${ly + 24}`}
                fill={monochrome ? 'rgba(120,119,116,0.1)' : 'rgba(74,77,82,0.12)'}
                stroke="currentColor"
                strokeWidth={2.5}
              />
              {[140, 180, 225, 265, 305, 350, 390].map((cx, ci) => (
                <circle
                  key={`c-${li}-${ci}`}
                  cx={cx}
                  cy={ci % 3 === 0 ? ly : ly - 24}
                  r={7}
                  fill={carbonFill}
                  stroke="currentColor"
                />
              ))}
            </g>
          ))}
          {modelId === 'graphite' && (
            <>
              {[180, 265, 350].map((lx, i) => (
                <line
                  key={`ldf-${i}`}
                  x1={lx}
                  y1={134}
                  x2={lx}
                  y2={196}
                  stroke={monochrome ? 'currentColor' : '#C85A53'}
                  strokeWidth={2}
                  strokeDasharray="4 4"
                />
              ))}
              <text x={270} y={172} textAnchor="middle" fontSize={11} fontWeight={700} fill={monochrome ? 'currentColor' : '#C85A53'} style={{ fontFamily: 'var(--font-mono)' }}>
                Weak LDFs between planes -&gt; slippery lubricant
              </text>
            </>
          )}
          <text x={270} y={306} textAnchor="middle" fontSize={11.5} fontWeight={600} fill="currentColor" style={{ fontFamily: 'var(--font-mono)' }}>
            {modelId === 'graphene'
              ? 'Graphene: single 2D sp² sheet · 3 bonds/C (120°) · 1 delocalized π e⁻ per C'
              : 'Graphite: stacked sp² hexagonal sheets · conducts electricity ALONG layers'}
          </text>
        </svg>
      );
    }

    case 'sio2': {
      const siCoords = [
        [270, 150], [160, 150], [380, 150], [270, 66], [270, 234],
      ];
      return (
        <svg viewBox="0 0 540 340" className="block h-auto w-full text-[#1D1D1F] dark:text-[#F5F5F7]">
          {siCoords.slice(1).map(([ox, oy], i) => {
            const mx = (270 + ox) / 2;
            const my = (150 + oy) / 2;
            return (
              <g key={`si-o-${i}`}>
                <line x1={270} y1={150} x2={ox} y2={oy} stroke="currentColor" strokeWidth={3} />
                <circle cx={mx} cy={my} r={14} fill={oxygenFill} stroke="currentColor" strokeWidth={1.5} />
                <text x={mx} y={my + 4} textAnchor="middle" fontSize={10} fontWeight={700} fill={monochrome ? 'currentColor' : '#FFFFFF'} style={{ fontFamily: 'var(--font-mono)' }}>
                  O
                </text>
              </g>
            );
          })}
          {siCoords.map(([sx, sy], i) => (
            <g key={`si-${i}`}>
              <circle cx={sx} cy={sy} r={17} fill={alloyFill} stroke="currentColor" strokeWidth={1.6} />
              <text x={sx} y={sy + 4} textAnchor="middle" fontSize={10.5} fontWeight={700} fill={monochrome ? 'currentColor' : '#1D1D1F'} style={{ fontFamily: 'var(--font-mono)' }}>
                Si
              </text>
            </g>
          ))}
          <text x={270} y={306} textAnchor="middle" fontSize={11.5} fontWeight={600} fill="currentColor" style={{ fontFamily: 'var(--font-mono)' }}>
            SiO₂ Quartz: Giant Covalent Network (each Si bonded to 4 O; each O bridges 2 Si)
          </text>
        </svg>
      );
    }

    case 'c60_fullerene': {
      return (
        <svg viewBox="0 0 540 340" className="block h-auto w-full text-[#1D1D1F] dark:text-[#F5F5F7]">
          {[175, 365].map((cx, i) => (
            <g key={`bucky-${i}`}>
              <circle
                cx={cx}
                cy={150}
                r={58}
                fill={monochrome ? 'rgba(120,119,116,0.1)' : 'rgba(74,77,82,0.12)'}
                stroke="currentColor"
                strokeWidth={2}
              />
              <polygon
                points={`${cx},${122} ${cx + 26},${140} ${cx + 16},${170} ${cx - 16},${170} ${cx - 26},${140}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
              />
              <text x={cx} y={154} textAnchor="middle" fontSize={12} fontWeight={700} fill="currentColor" style={{ fontFamily: 'var(--font-mono)' }}>
                C₆₀
              </text>
            </g>
          ))}
          <line x1={236} y1={150} x2={304} y2={150} stroke={monochrome ? 'currentColor' : '#C85A53'} strokeWidth={2.2} strokeDasharray="5 4" />
          <text x={270} y={136} textAnchor="middle" fontSize={10.5} fontWeight={700} fill={monochrome ? 'currentColor' : '#C85A53'} style={{ fontFamily: 'var(--font-mono)' }}>
            LDFs
          </text>
          <text x={270} y={295} textAnchor="middle" fontSize={11.5} fontWeight={600} fill="currentColor" style={{ fontFamily: 'var(--font-mono)' }}>
            C₆₀ Buckminsterfullerene = SIMPLE MOLECULAR (LDFs between cages, NOT network solid!)
          </text>
        </svg>
      );
    }
  }
}

export function BondingContinuumLab({ spec }: BondingContinuumLabProps) {
  const [activeTab, setActiveTab] = useState<'triangle' | 'models'>(
    spec.defaultTab ?? 'triangle',
  );
  const [monochromeMode, setMonochromeMode] = useState(false);

  // Triangle explorer state
  const [selectedCompoundId, setSelectedCompoundId] = useState<string>(
    spec.compounds[0]?.id ?? '',
  );
  const [enA, setEnA] = useState<number>(spec.compounds[0]?.enA ?? 0.9);
  const [enB, setEnB] = useState<number>(spec.compounds[0]?.enB ?? 3.2);

  // Models simulator state
  const [selectedModelId, setSelectedModelId] = useState<
    BondingStructureModel['id']
  >(spec.models[0]?.id ?? 'ionic_lattice');
  const [hammerStress, setHammerStress] = useState(false);
  const [addWater, setAddWater] = useState(false);
  const [addAlloy, setAddAlloy] = useState(false);

  const activeCompound: BondingCompoundPoint | undefined = useMemo(
    () => spec.compounds.find((c) => c.id === selectedCompoundId) ?? spec.compounds[0],
    [spec.compounds, selectedCompoundId],
  );

  const activeModel: BondingStructureModel | undefined = useMemo(
    () => spec.models.find((m) => m.id === selectedModelId) ?? spec.models[0],
    [spec.models, selectedModelId],
  );

  const customAvgEn = Number(((enA + enB) / 2).toFixed(2));
  const customDeltaEn = Number(Math.abs(enA - enB).toFixed(2));
  const customClass = classifyBonding(customAvgEn, customDeltaEn);

  const selectCompound = (c: BondingCompoundPoint) => {
    setSelectedCompoundId(c.id);
    setEnA(c.enA);
    setEnB(c.enB);
  };

  return (
    <div className="[--diagram-surface:#FFFFFF] dark:[--diagram-surface:#1A1A1D] [--diagram-subtle:#F1F1EF] dark:[--diagram-subtle:#2A2A2E]">
      {/* Tab Switcher + Monochrome Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] bg-white/35 px-4 py-2.5 dark:border-white/[0.08] dark:bg-white/[0.02]">
        <div role="tablist" aria-label="Bonding lab tabs" className="flex flex-wrap gap-1.5">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'triangle'}
            onClick={() => setActiveTab('triangle')}
            className={`inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-all ${
              activeTab === 'triangle'
                ? 'bg-[#1D1D1F] text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                : 'glass-pill text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D]'
            }`}
          >
            <Triangle className="h-3.5 w-3.5" aria-hidden="true" />
            van Arkel–Ketelaar Triangle
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'models'}
            onClick={() => setActiveTab('models')}
            className={`inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-all ${
              activeTab === 'models'
                ? 'bg-[#1D1D1F] text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                : 'glass-pill text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D]'
            }`}
          >
            <Layers className="h-3.5 w-3.5" aria-hidden="true" />
            Lattices &amp; Allotropes Simulator
          </button>
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
          Monochrome Ink
        </button>
      </div>

      {activeTab === 'triangle' ? (
        <div className="grid grid-cols-1 xl:grid-cols-[1.45fr_1fr]">
          {/* Bonding Triangle Canvas */}
          <div className="border-b border-black/[0.06] p-4 dark:border-white/[0.08] xl:border-r xl:border-b-0">
            <div className="glass-surface overflow-hidden rounded-2xl">
              <svg
                viewBox={`0 0 ${SVG_W} ${SVG_H}`}
                className="block h-auto w-full select-none text-[#1D1D1F] dark:text-[#F5F5F7]"
                role="img"
                aria-label="Interactive van Arkel-Ketelaar Bonding Continuum Triangle"
              >
                {/* Triangle Polygon (Cs -> F2 -> CsF) */}
                <polygon
                  points={`${mapAvgEn(0.79)},${mapDeltaEn(0)} ${mapAvgEn(3.98)},${mapDeltaEn(0)} ${mapAvgEn(2.39)},${mapDeltaEn(3.19)}`}
                  fill={monochromeMode ? 'rgba(120,119,116,0.06)' : 'rgba(91,140,110,0.06)'}
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeOpacity={0.65}
                />

                {/* Region Divider Guidelines */}
                <line
                  x1={mapAvgEn(1.4)}
                  y1={mapDeltaEn(1.8)}
                  x2={mapAvgEn(3.1)}
                  y2={mapDeltaEn(1.8)}
                  stroke="currentColor"
                  strokeDasharray="5 4"
                  strokeOpacity={0.38}
                />
                <line
                  x1={mapAvgEn(1.85)}
                  y1={mapDeltaEn(0)}
                  x2={mapAvgEn(2.3)}
                  y2={mapDeltaEn(1.8)}
                  stroke="currentColor"
                  strokeDasharray="5 4"
                  strokeOpacity={0.38}
                />

                {/* Zone Labels */}
                <text x={mapAvgEn(2.39)} y={mapDeltaEn(2.55)} textAnchor="middle" fontSize={12} fontWeight={700} fill="currentColor" style={{ fontFamily: 'var(--font-sans)' }}>
                  IONIC
                </text>
                <text x={mapAvgEn(1.25)} y={mapDeltaEn(0.55)} textAnchor="middle" fontSize={11.5} fontWeight={700} fill="currentColor" style={{ fontFamily: 'var(--font-sans)' }}>
                  METALLIC
                </text>
                <text x={mapAvgEn(3.22)} y={mapDeltaEn(0.55)} textAnchor="middle" fontSize={11.5} fontWeight={700} fill="currentColor" style={{ fontFamily: 'var(--font-sans)' }}>
                  COVALENT
                </text>
                <text x={mapAvgEn(2.5)} y={mapDeltaEn(1.3)} textAnchor="middle" fontSize={10} opacity={0.65} fill="currentColor" style={{ fontFamily: 'var(--font-mono)' }}>
                  Polar Covalent / Intermediate
                </text>

                {/* Axes */}
                <line x1={PAD_L} y1={PAD_T + PLOT_H} x2={PAD_L + PLOT_W} y2={PAD_T + PLOT_H} stroke="currentColor" strokeOpacity={0.45} />
                <line x1={PAD_L} y1={PAD_T} x2={PAD_L} y2={PAD_T + PLOT_H} stroke="currentColor" strokeOpacity={0.45} />
                <text x={PAD_L + PLOT_W / 2} y={SVG_H - 10} textAnchor="middle" fontSize={11} fill="currentColor" opacity={0.75} style={{ fontFamily: 'var(--font-mono)' }}>
                  Average Electronegativity: χ_avg = (χA + χB) / 2
                </text>
                <text x={15} y={PAD_T + PLOT_H / 2} textAnchor="middle" fontSize={11} fill="currentColor" opacity={0.75} transform={`rotate(-90 15 ${PAD_T + PLOT_H / 2})`} style={{ fontFamily: 'var(--font-mono)' }}>
                  Δχ = |χA − χB|
                </text>

                {/* Plotted Real Compounds */}
                {spec.compounds.map((comp) => {
                  const px = mapAvgEn(comp.avgEn);
                  const py = mapDeltaEn(comp.deltaEn);
                  const selected = comp.id === activeCompound?.id;
                  return (
                    <g
                      key={comp.id}
                      role="button"
                      tabIndex={0}
                      aria-label={`Select compound ${comp.formula}`}
                      onClick={() => selectCompound(comp)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          selectCompound(comp);
                        }
                      }}
                      className="cursor-pointer outline-none"
                    >
                      <circle
                        cx={px}
                        cy={py}
                        r={selected ? 7 : 5}
                        fill={selected ? 'currentColor' : 'var(--diagram-surface, #ffffff)'}
                        stroke="currentColor"
                        strokeWidth={1.8}
                      />
                      <text
                        x={px + 8}
                        y={py + 3}
                        fontSize={10}
                        fontWeight={selected ? 700 : 500}
                        fill="currentColor"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {comp.formula}
                      </text>
                    </g>
                  );
                })}

                {/* Custom Live Probe Point */}
                <circle
                  cx={mapAvgEn(customAvgEn)}
                  cy={mapDeltaEn(customDeltaEn)}
                  r={10}
                  fill="none"
                  stroke={monochromeMode ? 'currentColor' : '#C85A53'}
                  strokeWidth={1.8}
                  className="animate-pin-ripple"
                />
                <circle
                  cx={mapAvgEn(customAvgEn)}
                  cy={mapDeltaEn(customDeltaEn)}
                  r={4}
                  fill={monochromeMode ? 'currentColor' : '#C85A53'}
                />
              </svg>
            </div>

            {/* Compound Quick Select */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {spec.compounds.map((c) => {
                const active = c.id === activeCompound?.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => selectCompound(c)}
                    className={`inline-flex cursor-pointer items-center rounded-full px-2.5 py-1 font-mono text-xs transition-all ${
                      active
                        ? 'bg-[#1D1D1F] font-semibold text-white dark:bg-[#F5F5F7] dark:text-[#111113]'
                        : 'glass-pill text-[#1D1D1F] dark:text-[#F5F5F7]'
                    }`}
                  >
                    {c.formula}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Live Sliders + Compound Inspector */}
          <div className="flex flex-col justify-between gap-4 bg-white/25 p-5 dark:bg-white/[0.015]">
            <div className="space-y-3">
              <div className="glass-surface rounded-2xl px-3.5 py-3">
                <div className="font-mono text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
                  Live Custom Electronegativity Probe
                </div>
                <div className="mt-2 space-y-2">
                  <div>
                    <div className="flex justify-between font-mono text-xs">
                      <span>Element A (χₐ)</span>
                      <span className="font-semibold">{enA.toFixed(1)}</span>
                    </div>
                    <input
                      type="range"
                      aria-label="Electronegativity of Element A"
                      min={0.7}
                      max={4.0}
                      step={0.1}
                      value={enA}
                      onChange={(e) => setEnA(Number(e.target.value))}
                      className="h-1.5 w-full cursor-pointer accent-[#1D1D1F] dark:accent-[#F5F5F7]"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between font-mono text-xs">
                      <span>Element B (χᵦ)</span>
                      <span className="font-semibold">{enB.toFixed(1)}</span>
                    </div>
                    <input
                      type="range"
                      aria-label="Electronegativity of Element B"
                      min={0.7}
                      max={4.0}
                      step={0.1}
                      value={enB}
                      onChange={(e) => setEnB(Number(e.target.value))}
                      className="h-1.5 w-full cursor-pointer accent-[#1D1D1F] dark:accent-[#F5F5F7]"
                    />
                  </div>
                </div>
                <div className="mt-2.5 border-t border-black/[0.06] pt-2 dark:border-white/[0.08]">
                  <div className="font-mono text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                    χ_avg = {customAvgEn.toFixed(2)} · Δχ = {customDeltaEn.toFixed(2)} →{' '}
                    {customClass.label}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-[#6E6E73] dark:text-[#98989D]">
                    {customClass.explanation}
                  </p>
                </div>
              </div>

              {activeCompound && (
                <div className="glass-surface rounded-2xl px-3.5 py-3">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                      {activeCompound.formula} — {activeCompound.name}
                    </h4>
                    <span className="glass-pill rounded-full px-2 py-0.5 font-mono text-[10px]">
                      {activeCompound.stateAtStp}
                    </span>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 font-mono text-[11px]">
                    <div>
                      <span className="text-[#6E6E73] dark:text-[#98989D]">Melting Pt: </span>
                      <span className="font-semibold">{activeCompound.meltingPointC}</span>
                    </div>
                    <div>
                      <span className="text-[#6E6E73] dark:text-[#98989D]">Conductivity: </span>
                      <span className="font-semibold">{activeCompound.conductivity}</span>
                    </div>
                  </div>
                  <MarkdownMath
                    content={activeCompound.explanationMarkdown}
                    className="mt-2 text-xs leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-[1.45fr_1fr]">
          {/* Playable Structure Simulator Stage */}
          <div className="border-b border-black/[0.06] p-4 dark:border-white/[0.08] xl:border-r xl:border-b-0">
            <div className="mb-3 flex flex-wrap gap-1.5">
              {spec.models.map((model) => {
                const active = model.id === selectedModelId;
                return (
                  <button
                    key={model.id}
                    type="button"
                    onClick={() => {
                      setSelectedModelId(model.id);
                      setHammerStress(false);
                      setAddWater(false);
                      setAddAlloy(false);
                    }}
                    className={`inline-flex h-7 cursor-pointer items-center rounded-full px-3 text-xs font-medium transition-all ${
                      active
                        ? 'bg-[#1D1D1F] text-white dark:bg-[#F5F5F7] dark:text-[#111113]'
                        : 'glass-pill text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D]'
                    }`}
                  >
                    {model.title}
                  </button>
                );
              })}
            </div>

            <div className="glass-surface overflow-hidden rounded-2xl">
              {renderStructureSvg(selectedModelId, {
                hammerStress,
                addWater,
                addAlloy,
                monochrome: monochromeMode,
              })}
            </div>

            {/* Interactive Mechanical / Solvent / Alloy Actions */}
            {(selectedModelId === 'ionic_lattice' ||
              selectedModelId === 'metallic_sea') && (
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  aria-pressed={hammerStress}
                  onClick={() => {
                    setHammerStress((p) => !p);
                    setAddWater(false);
                  }}
                  className={`inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-all ${
                    hammerStress
                      ? 'bg-[#1D1D1F] text-white dark:bg-[#F5F5F7] dark:text-[#111113]'
                      : 'glass-pill text-[#1D1D1F] dark:text-[#F5F5F7]'
                  }`}
                >
                  <Hammer className="h-3.5 w-3.5" aria-hidden="true" />
                  Apply Hammer Stress
                </button>
                {selectedModelId === 'ionic_lattice' && (
                  <button
                    type="button"
                    aria-pressed={addWater}
                    onClick={() => {
                      setAddWater((p) => !p);
                      setHammerStress(false);
                    }}
                    className={`inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-all ${
                      addWater
                        ? 'bg-[#1D1D1F] text-white dark:bg-[#F5F5F7] dark:text-[#111113]'
                        : 'glass-pill text-[#1D1D1F] dark:text-[#F5F5F7]'
                    }`}
                  >
                    <Droplets className="h-3.5 w-3.5" aria-hidden="true" />
                    Add Water (Dissolve &amp; Conduct)
                  </button>
                )}
                {selectedModelId === 'metallic_sea' && (
                  <button
                    type="button"
                    aria-pressed={addAlloy}
                    onClick={() => setAddAlloy((p) => !p)}
                    className={`inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-all ${
                      addAlloy
                        ? 'bg-[#1D1D1F] text-white dark:bg-[#F5F5F7] dark:text-[#111113]'
                        : 'glass-pill text-[#1D1D1F] dark:text-[#F5F5F7]'
                    }`}
                  >
                    Add Alloy Atoms (Sn/C)
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Structure Model Details */}
          <div className="flex flex-col justify-between bg-white/25 p-5 dark:bg-white/[0.015]">
            {activeModel && (
              <div className="space-y-3.5">
                <span className="glass-pill inline-flex rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#6E6E73] dark:text-[#98989D]">
                  {activeModel.bondingType}
                </span>
                <h4 className="text-base font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                  {activeModel.title}
                </h4>
                <MarkdownMath
                  content={activeModel.summaryMarkdown}
                  className="text-xs leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
                />
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {activeModel.keyProperties.map((prop) => (
                    <div key={prop.label} className="glass-surface rounded-2xl px-3 py-2">
                      <div className="font-mono text-[10px] text-[#6E6E73] uppercase dark:text-[#98989D]">
                        {prop.label}
                      </div>
                      <div className="mt-0.5 text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                        {prop.value}
                      </div>
                    </div>
                  ))}
                </div>
                {activeModel.examTrapNote && (
                  <div className="glass-surface rounded-2xl border-l-[3px] border-l-[#1D1D1F] px-3.5 py-2.5 dark:border-l-[#F5F5F7]">
                    <div className="font-mono text-[10px] font-semibold text-[#6E6E73] uppercase dark:text-[#98989D]">
                      IB Exam Accuracy Alert
                    </div>
                    <MarkdownMath
                      content={activeModel.examTrapNote}
                      className="mt-1 text-xs leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default BondingContinuumLab;
