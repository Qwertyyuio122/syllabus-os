import type { LabeledExplorerSpec, PlayableDiagramSpec } from '@/types/diagrams';
import {
  ENHANCED_COMPARTMENT_EXPLORER,
  ENHANCED_HYDROGEN_SPECTRUM,
  ENHANCED_WATER_EXPLORER,
} from '@/data/classroom-seed/enhanced-diagrams';

const ENHANCED_LABELED_EXPLORERS: Record<string, LabeledExplorerSpec> = {
  'bio-a1-1-water-explorer': ENHANCED_WATER_EXPLORER,
  'bio-b2-2-compartment-explorer': ENHANCED_COMPARTMENT_EXPLORER,
  'chem-s1-3-hydrogen-spectrum': ENHANCED_HYDROGEN_SPECTRUM,
};

/**
 * Upgrades known seeded diagram specs with high-craft, scientifically accurate
 * vector geometry so both existing user records and fresh seeds render crisply.
 */
export function enhanceDiagramSpec(
  spec: PlayableDiagramSpec,
): PlayableDiagramSpec {
  if (spec.type === 'labeled_explorer') {
    const preset = ENHANCED_LABELED_EXPLORERS[spec.id];
    if (preset) {
      return preset;
    }
  }
  return spec;
}
