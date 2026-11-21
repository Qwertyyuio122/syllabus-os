import type { PlayableDiagramSpec } from '@/types/diagrams';
import {
  BONDING_CONTINUUM_LAB_SPEC,
  CELL_ULTRASTRUCTURE_LAB,
  CHEM_IMF_BOILING_EXPLORER,
  CHEM_LAB_APPARATUS_EXPLORER,
  CHEM_ORBITAL_BOXES_EXPLORER,
  CHEM_PERIODICITY_EXPLORER,
  COMMAND_TERMS_MATRIX,
  DNA_NUCLEOSOME_EXPLORER,
  ENG_TFA_EVIDENCE_EXPLORER,
  ENHANCED_COMPARTMENT_EXPLORER,
  ENHANCED_HYDROGEN_SPECTRUM,
  ENHANCED_WATER_EXPLORER,
  FRENCH_TEXT_TYPES_MATRIX,
  FRENCH_THEMES_IO_EXPLORER,
  HIST_IA_2028_BLUEPRINT,
  HIST_INTRO_CONCEPTS_EXPLORER,
  HIST_P3_ITALY_TIMELINE,
  HIST_P3_TOTALITARIANISM_MATRIX,
  MACROMOLECULES_EXPLORER,
  MATH_CH2_FUNCTIONS_INVERSE_GRAPH,
  MATH_CH3_QUADRATICS_DISCRIMINANT_GRAPH,
  MATH_CH3_TRANSFORMATIONS_GRAPH,
  MATH_CH4_RATIONAL_ASYMPTOTES_GRAPH,
  MICROSCOPE_EXPLORER,
  ORIGIN_APPARATUS_EXPLORER,
  PROTEIN_STRUCTURE_EXPLORER,
  ULTRACENTRIFUGATION_STEPS,
  VSEPR_POLARITY_LAB_SPEC,
} from '@/data/classroom-seed/enhanced-diagrams';

const ENHANCED_DIAGRAMS_BY_ID: Record<string, PlayableDiagramSpec> = {
  'bio-a1-1-water-explorer': ENHANCED_WATER_EXPLORER,
  'bio-a1-2-dna-nucleosome-explorer': DNA_NUCLEOSOME_EXPLORER,
  'bio-a2-1-origin-apparatus-explorer': ORIGIN_APPARATUS_EXPLORER,
  'bio-a2-2-cell-ultrastructure-lab': CELL_ULTRASTRUCTURE_LAB,
  'bio-a2-2-microscope-explorer': MICROSCOPE_EXPLORER,
  'bio-b1-1-macromolecules-explorer': MACROMOLECULES_EXPLORER,
  'bio-b1-2-protein-explorer': PROTEIN_STRUCTURE_EXPLORER,
  'bio-b2-2-compartment-explorer': ENHANCED_COMPARTMENT_EXPLORER,
  'bio-b2-2-ultracentrifugation-steps': ULTRACENTRIFUGATION_STEPS,
  'bio-command-terms-explorer': COMMAND_TERMS_MATRIX,
  'chem-s1-3-hydrogen-spectrum': ENHANCED_HYDROGEN_SPECTRUM,
  'chem-s1-3-orbital-boxes-explorer': CHEM_ORBITAL_BOXES_EXPLORER,
  'chem-s2-2-vsepr-polarity-lab': VSEPR_POLARITY_LAB_SPEC,
  'chem-s2-2-imf-boiling-points-explorer': CHEM_IMF_BOILING_EXPLORER,
  'chem-s2-4-bonding-continuum-lab': BONDING_CONTINUUM_LAB_SPEC,
  'chem-s3-1-periodicity-shielding-explorer': CHEM_PERIODICITY_EXPLORER,
  'chem-lab-apparatus-techniques-explorer': CHEM_LAB_APPARATUS_EXPLORER,
  'math-ch2-functions-inverse-graph': MATH_CH2_FUNCTIONS_INVERSE_GRAPH,
  'math-ch3-quadratics-discriminant-graph': MATH_CH3_QUADRATICS_DISCRIMINANT_GRAPH,
  'math-ch3-transformations-graph': MATH_CH3_TRANSFORMATIONS_GRAPH,
  'math-ch4-rational-asymptotes-graph': MATH_CH4_RATIONAL_ASYMPTOTES_GRAPH,
  'hist-intro-philosophy-concepts': HIST_INTRO_CONCEPTS_EXPLORER,
  'hist-p3-italy-timeline': HIST_P3_ITALY_TIMELINE,
  'hist-p3-totalitarianism-matrix': HIST_P3_TOTALITARIANISM_MATRIX,
  'hist-ia-2028-blueprint': HIST_IA_2028_BLUEPRINT,
  'eng-tfa-evidence-web': ENG_TFA_EVIDENCE_EXPLORER,
  'fr-p1-text-types-matrix': FRENCH_TEXT_TYPES_MATRIX,
  'fr-themes-io-explorer': FRENCH_THEMES_IO_EXPLORER,
};

/**
 * Upgrades known seeded diagram specs with high-craft, scientifically accurate
 * vector geometry so both existing user records and fresh seeds render crisply.
 */
export function enhanceDiagramSpec(
  spec: PlayableDiagramSpec,
): PlayableDiagramSpec {
  const preset = ENHANCED_DIAGRAMS_BY_ID[spec.id];
  if (preset) {
    return preset;
  }
  return spec;
}
