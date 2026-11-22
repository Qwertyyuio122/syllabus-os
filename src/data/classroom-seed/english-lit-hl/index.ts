import type { SubjectClassroomSeed } from '../types';
import { ENGLISH_LIT_HL_FLASHCARDS } from './flashcards';
import {
  ENGLISH_LIT_HL_MATERIALS,
  ENGLISH_LIT_HL_TOPIC_GUIDANCE,
} from './materials';
import { ENGLISH_LIT_HL_NOTES } from './notes';
import { ENGLISH_LIT_HL_QUESTIONS } from './questions';

export const ENGLISH_LIT_HL_SEED: SubjectClassroomSeed = {
  slug: 'english-lit-hl',
  materials: ENGLISH_LIT_HL_MATERIALS,
  notes: ENGLISH_LIT_HL_NOTES,
  questions: ENGLISH_LIT_HL_QUESTIONS,
  flashcards: ENGLISH_LIT_HL_FLASHCARDS,
  topicGuidanceNotes: ENGLISH_LIT_HL_TOPIC_GUIDANCE,
};
