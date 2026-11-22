import type { SubjectClassroomSeed } from '../types';
import { CHEMISTRY_SL_MATERIALS, CHEMISTRY_SL_TOPIC_GUIDANCE } from './materials';
import { CHEMISTRY_SL_NOTES_S12 } from './notes-s12';
import { CHEMISTRY_SL_NOTES_S3R } from './notes-s3r';
import { CHEMISTRY_SL_QUESTIONS } from './questions';
import { CHEMISTRY_SL_FLASHCARDS } from './flashcards';

export const CHEMISTRY_SL_SEED: SubjectClassroomSeed = {
  slug: 'chemistry-sl',
  materials: CHEMISTRY_SL_MATERIALS,
  notes: [...CHEMISTRY_SL_NOTES_S12, ...CHEMISTRY_SL_NOTES_S3R],
  questions: CHEMISTRY_SL_QUESTIONS,
  flashcards: CHEMISTRY_SL_FLASHCARDS,
  topicGuidanceNotes: CHEMISTRY_SL_TOPIC_GUIDANCE,
};
