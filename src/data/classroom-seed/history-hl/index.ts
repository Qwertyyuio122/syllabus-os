import type { SubjectClassroomSeed } from '../types';
import { HISTORY_FLASHCARDS } from './flashcards';
import { HISTORY_MATERIALS, HISTORY_TOPIC_GUIDANCE_NOTES } from './materials';
import { HISTORY_NOTES } from './notes';
import { HISTORY_QUESTIONS } from './questions';

export const HISTORY_HL_SEED: SubjectClassroomSeed = {
  slug: 'history-hl',
  materials: HISTORY_MATERIALS,
  notes: HISTORY_NOTES,
  questions: HISTORY_QUESTIONS,
  flashcards: HISTORY_FLASHCARDS,
  topicGuidanceNotes: HISTORY_TOPIC_GUIDANCE_NOTES,
};
