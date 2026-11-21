import type { SubjectLevel, SubjectSlug } from '@/types/database';
import { BIOLOGY_HL_CONFIG } from './biology-hl';
import { CHEMISTRY_SL_CONFIG } from './chemistry-sl';
import { ENGLISH_LIT_HL_CONFIG } from './english-lit-hl';
import { FRENCH_B_SL_CONFIG } from './french-b-sl';
import { HISTORY_HL_CONFIG } from './history-hl';
import { MATH_AA_SL_CONFIG } from './math-aa-sl';

export interface IBSyllabusSubtopic {
  code: string;
  title: string;
  isHlOnly?: boolean;
  guidanceNotes: string;
  teachingHours?: number;
  keyConcepts?: string[];
}

export interface IBSyllabusUnit {
  code: string;
  title: string;
  guidanceNotes: string;
  subtopics: IBSyllabusSubtopic[];
}

export interface IBAssessmentComponent {
  name: string;
  paperType: string;
  duration: string;
  marks: number;
  weightingPercent: number;
  description: string;
  isExternal: boolean;
}

export interface IBSubjectConfig {
  slug: SubjectSlug;
  name: string;
  shortName: string;
  level: SubjectLevel;
  groupNumber: number;
  firstAssessment: string;
  description: string;
  examPaperTypes: string[];
  /** Snake-case alias matching UI Filter components */
  paper_types: string[];
  assessmentComponents: IBAssessmentComponent[];
  commandTerms: string[];
  guidingPrinciples: string[];
  units: IBSyllabusUnit[];
  iaOverview: {
    title: string;
    maxMarks: number;
    wordLimit: string;
    weightingPercent: number;
    summary: string;
  };
}

export const IB_SUBJECTS_CONFIG: IBSubjectConfig[] = [
  BIOLOGY_HL_CONFIG,
  CHEMISTRY_SL_CONFIG,
  MATH_AA_SL_CONFIG,
  HISTORY_HL_CONFIG,
  ENGLISH_LIT_HL_CONFIG,
  FRENCH_B_SL_CONFIG,
];

export const IB_SUBJECTS_BY_SLUG: Record<SubjectSlug, IBSubjectConfig> = {
  'biology-hl': BIOLOGY_HL_CONFIG,
  'chemistry-sl': CHEMISTRY_SL_CONFIG,
  'math-aa-sl': MATH_AA_SL_CONFIG,
  'history-hl': HISTORY_HL_CONFIG,
  'english-lit-hl': ENGLISH_LIT_HL_CONFIG,
  'french-b-sl': FRENCH_B_SL_CONFIG,
};

export function getSubjectConfig(slug: SubjectSlug): IBSubjectConfig;
export function getSubjectConfig(slug: string): IBSubjectConfig | undefined;
export function getSubjectConfig(slug: string): IBSubjectConfig | undefined {
  return IB_SUBJECTS_CONFIG.find((subject) => subject.slug === slug);
}

export function getFlattenedSubtopics(slug: SubjectSlug | string): IBSyllabusSubtopic[] {
  const config = getSubjectConfig(slug);
  if (!config) return [];
  return config.units.flatMap((unit) => unit.subtopics);
}

export {
  BIOLOGY_HL_CONFIG,
  CHEMISTRY_SL_CONFIG,
  MATH_AA_SL_CONFIG,
  HISTORY_HL_CONFIG,
  ENGLISH_LIT_HL_CONFIG,
  FRENCH_B_SL_CONFIG,
};
