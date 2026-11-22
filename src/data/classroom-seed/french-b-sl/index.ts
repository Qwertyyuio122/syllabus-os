import type { SubjectClassroomSeed } from '../types';
import { FRENCH_FLASHCARDS } from './flashcards';
import { FRENCH_MATERIALS, FRENCH_TOPIC_GUIDANCE_NOTES } from './materials';
import { FRENCH_NOTES } from './notes';
import { FRENCH_QUESTIONS } from './questions';

export const FRENCH_B_SL_SEED: SubjectClassroomSeed = {
  slug: 'french-b-sl',
  materials: FRENCH_MATERIALS,
  notes: FRENCH_NOTES,
  questions: FRENCH_QUESTIONS,
  flashcards: FRENCH_FLASHCARDS,
  topicGuidanceNotes: FRENCH_TOPIC_GUIDANCE_NOTES,
};
