import type { SubjectClassroomSeed } from '../types';
import { MATH_AA_SL_MATERIALS, MATH_TOPIC_GUIDANCE_NOTES } from './materials';
import { MATH_NOTES_T12 } from './notes-t12';
import { MATH_NOTES_T345 } from './notes-t345';
import { MATH_AA_SL_QUESTIONS } from './questions';
import { MATH_AA_SL_FLASHCARDS } from './flashcards';

export const MATH_AA_SL_SEED: SubjectClassroomSeed = {
  slug: 'math-aa-sl',
  materials: MATH_AA_SL_MATERIALS,
  notes: [...MATH_NOTES_T12, ...MATH_NOTES_T345],
  questions: MATH_AA_SL_QUESTIONS,
  flashcards: MATH_AA_SL_FLASHCARDS,
  topicGuidanceNotes: MATH_TOPIC_GUIDANCE_NOTES,
};
