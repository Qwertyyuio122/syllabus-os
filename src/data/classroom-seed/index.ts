import type { SubjectSlug } from '@/types/database';
import { BIOLOGY_HL_SEED } from './biology-hl';
import { CHEMISTRY_SL_SEED } from './chemistry-sl';
import { CORE_CLASSROOM_RESOURCES, CORE_STARTER_OVERRIDES } from './core-ee-cas';
import { ENGLISH_LIT_HL_SEED } from './english-lit-hl';
import { FRENCH_B_SL_SEED } from './french-b-sl';
import { HISTORY_HL_SEED } from './history-hl';
import { MATH_AA_SL_SEED } from './math-aa-sl';
import type { SubjectClassroomSeed } from './types';

export const CLASSROOM_SEED_BY_SUBJECT: Record<SubjectSlug, SubjectClassroomSeed> = {
  'biology-hl': BIOLOGY_HL_SEED,
  'chemistry-sl': CHEMISTRY_SL_SEED,
  'math-aa-sl': MATH_AA_SL_SEED,
  'history-hl': HISTORY_HL_SEED,
  'english-lit-hl': ENGLISH_LIT_HL_SEED,
  'french-b-sl': FRENCH_B_SL_SEED,
};

export {
  BIOLOGY_HL_SEED,
  CHEMISTRY_SL_SEED,
  MATH_AA_SL_SEED,
  HISTORY_HL_SEED,
  ENGLISH_LIT_HL_SEED,
  FRENCH_B_SL_SEED,
  CORE_CLASSROOM_RESOURCES,
  CORE_STARTER_OVERRIDES,
};

export * from './types';
