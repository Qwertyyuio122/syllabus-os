'use client';

import React, { useState } from 'react';
import { Lightbulb, RotateCcw, Sparkles } from 'lucide-react';
import type {
  ScientificSimulationSpec,
  SimulationParamValue,
} from '@/types/diagrams';
import { InlineKaTeX, MarkdownMath } from '@/components/notes/MarkdownMath';
import type { SimParamMap } from './simulations/simulation-shared';
import {
  EnzymeKineticsSim,
  MicroscopyMagnificationSim,
  RespirationPhotosynthesisFluxSim,
  WaterPotentialOsmosisSim,
} from './simulations/biology-simulations';
import {
  BohrEmissionSpectraSim,
  EnthalpyEnergyProfileSim,
  EquilibriumLeChatelierSim,
  PeriodicityExplorerSim,
  TitrationPhCurveSim,
} from './simulations/chemistry-simulations';

export interface ScientificSimulationLabProps {
  spec: ScientificSimulationSpec;
}

export function ScientificSimulationLab({
  spec,
}: ScientificSimulationLabProps) {
  const [params, setParams] = useState<SimParamMap>(() => ({
    ...(spec.initialParams ?? {}),
  }));
  const [activePresetId, setActivePresetId] = useState<string | null>(null);

  const setParam = (key: string, value: SimulationParamValue) => {
    setActivePresetId(null);
    setParams((prev) => ({ ...prev, [key]: value }));
  };

  const applyPreset = (
    presetId: string,
    presetParams: Record<string, SimulationParamValue>,
  ) => {
    setActivePresetId(presetId);
    setParams({ ...(spec.initialParams ?? {}), ...presetParams });
  };

  const resetParams = () => {
    setActivePresetId(null);
    setParams({ ...(spec.initialParams ?? {}) });
  };

  const renderSimulation = () => {
    const props = { specId: spec.id, params, setParam };
    switch (spec.simulationKind) {
      case 'enzyme_kinetics':
        return <EnzymeKineticsSim {...props} />;
      case 'water_potential_osmosis':
        return <WaterPotentialOsmosisSim {...props} />;
      case 'microscopy_magnification':
        return <MicroscopyMagnificationSim {...props} />;
      case 'respiration_photosynthesis_flux':
        return <RespirationPhotosynthesisFluxSim {...props} />;
      case 'bohr_emission_spectra':
        return <BohrEmissionSpectraSim {...props} />;
      case 'enthalpy_energy_profile':
        return <EnthalpyEnergyProfileSim {...props} />;
      case 'titration_ph_curve':
        return <TitrationPhCurveSim {...props} />;
      case 'periodicity_explorer':
        return <PeriodicityExplorerSim {...props} />;
      case 'equilibrium_le_chatelier':
        return <EquilibriumLeChatelierSim {...props} />;
    }
  };

  const activePreset = spec.presets?.find((p) => p.id === activePresetId);

  return (
    <div className="[--diagram-surface:#FFFFFF] dark:[--diagram-surface:#1A1A1D]">
      {/* Presets & Formula Top Strip */}
      {(spec.presets && spec.presets.length > 0) || spec.formulaLatex ? (
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.06] bg-white/30 px-4 py-2.5 dark:border-white/[0.08] dark:bg-white/[0.02]">
          {spec.presets && spec.presets.length > 0 ? (
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
                <Sparkles className="h-3 w-3" aria-hidden="true" />
                Scenarios:
              </span>
              {spec.presets.map((preset) => {
                const isSelected = preset.id === activePresetId;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => applyPreset(preset.id, preset.params)}
                    className={`inline-flex h-6 cursor-pointer items-center rounded-full px-2.5 text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-[#1D1D1F] text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                        : 'glass-pill text-[#1D1D1F] hover:bg-white/95 dark:text-[#F5F5F7]'
                    }`}
                  >
                    {preset.label}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={resetParams}
                className="glass-pill inline-flex h-6 cursor-pointer items-center gap-1 rounded-full px-2 font-mono text-[10.5px] text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D]"
              >
                <RotateCcw className="h-2.5 w-2.5" aria-hidden="true" />
                Defaults
              </button>
            </div>
          ) : (
            <div />
          )}

          {spec.formulaLatex && (
            <div className="glass-pill max-w-full overflow-x-auto rounded-full px-3 py-1 text-xs">
              <InlineKaTeX latex={spec.formulaLatex} />
            </div>
          )}
        </div>
      ) : null}

      {activePreset?.description && (
        <div className="border-b border-black/[0.06] bg-white/20 px-4 py-2 text-xs text-[#6E6E73] dark:border-white/[0.08] dark:bg-white/[0.015] dark:text-[#98989D]">
          <strong className="text-[#1D1D1F] dark:text-[#F5F5F7]">
            {activePreset.label}:
          </strong>{' '}
          {activePreset.description}
        </div>
      )}

      {/* Active Interactive Simulation Stage */}
      {renderSimulation()}

      {/* IB Exam Takeaways Footer */}
      {spec.examTakeaways.length > 0 && (
        <div className="border-t border-black/[0.06] bg-white/30 px-4 py-3 dark:border-white/[0.08] dark:bg-white/[0.02]">
          <div className="mb-1.5 flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
            <Lightbulb className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
            IB Exam Takeaways
          </div>
          <ul className="grid grid-cols-1 gap-1.5 md:grid-cols-2">
            {spec.examTakeaways.map((takeaway, idx) => (
              <li
                key={idx}
                className="glass-surface rounded-xl px-3 py-2 text-xs leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
              >
                <MarkdownMath content={takeaway} className="text-xs leading-relaxed" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ScientificSimulationLab;
