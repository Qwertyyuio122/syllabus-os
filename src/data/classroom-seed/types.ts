import type {
  CoreProjectType,
  McqOption,
  QuestionDifficulty,
  QuestionMarkscheme,
  SubjectSlug,
} from '@/types/database';
import type { StudyNoteBlock } from '@/types/diagrams';

export interface ClassroomSeedMaterial {
  fileName: string;
  fileType: string;
  topicCode: string | null;
  externalUrl?: string | null;
  extractedText: string;
}

export interface ClassroomSeedNote {
  topicCode: string | null;
  title: string;
  summary: string;
  blocks: StudyNoteBlock[];
  sourceFileNames: string[];
}

export interface ClassroomSeedQuestion {
  topicCode: string | null;
  paperType: string;
  commandTerm: string;
  difficulty: QuestionDifficulty;
  maxMarks: number;
  stimulusMarkdown?: string | null;
  questionMarkdown: string;
  mcqOptions?: McqOption[] | null;
  correctMcqOption?: string | null;
  markscheme: QuestionMarkscheme;
  sourceFileNames: string[];
}

export interface ClassroomSeedFlashcard {
  topicCode: string | null;
  frontMarkdown: string;
  backMarkdown: string;
}

export interface SubjectClassroomSeed {
  slug: SubjectSlug;
  materials: ClassroomSeedMaterial[];
  notes: ClassroomSeedNote[];
  questions: ClassroomSeedQuestion[];
  flashcards: ClassroomSeedFlashcard[];
  topicGuidanceNotes: Record<string, string>;
}

export interface ClassroomSeedCoreResource {
  id: string;
  projectType: CoreProjectType;
  subjectSlug?: SubjectSlug | null;
  title: string;
  category: string;
  summary: string;
  contentMarkdown: string;
  sourceFileName: string;
  externalUrl?: string | null;
}

export interface CoreStarterProjectOverride {
  projectType: CoreProjectType;
  subjectSlug?: SubjectSlug | null;
  title: string;
  researchQuestionOrPrompt: string;
  wordCountTarget: number;
  milestones: {
    id: string;
    title: string;
    dueDate?: string;
    completed: boolean;
  }[];
  draftExcerpt: string;
}
