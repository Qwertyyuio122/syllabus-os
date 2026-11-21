import type { StudyNoteBlock } from './diagrams';

export type SubjectSlug =
  | 'biology-hl'
  | 'chemistry-sl'
  | 'math-aa-sl'
  | 'history-hl'
  | 'english-lit-hl'
  | 'french-b-sl';

export type SubjectLevel = 'HL' | 'SL';
export type ConfidenceLevel = 'unstarted' | 'reviewing' | 'confident';
export type GenerationStatus = 'uploaded' | 'processing' | 'generated' | 'failed';
export type QuestionDifficulty = 'Foundation' | 'Standard IB' | 'HL Extension';
export type CoreProjectType =
  | 'EE'
  | 'TOK_ESSAY'
  | 'TOK_EXHIBITION'
  | 'IA'
  | 'CAS';

export interface ProfileRow {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
}

export interface SubjectRow {
  id: string;
  user_id: string;
  slug: SubjectSlug | string;
  name: string;
  level: SubjectLevel;
  group_number: number;
  description: string | null;
  created_at: string;
}

export interface SyllabusTopicRow {
  id: string;
  user_id: string;
  subject_id: string;
  parent_id: string | null;
  code: string;
  title: string;
  guidance_notes: string | null;
  sort_order: number;
  is_completed: boolean;
  confidence_level: ConfidenceLevel;
  updated_at: string;
}

export interface CourseMaterialRow {
  id: string;
  user_id: string;
  subject_id: string;
  topic_id: string | null;
  file_name: string;
  file_type: string;
  storage_path: string | null;
  external_url: string | null;
  extracted_text: string;
  generation_status: GenerationStatus;
  last_generated_at: string | null;
  created_at: string;
}

export interface StudyNoteRow {
  id: string;
  user_id: string;
  subject_id: string;
  topic_id: string | null;
  title: string;
  summary: string | null;
  blocks: StudyNoteBlock[];
  source_material_ids: string[];
  version: number;
  created_at: string;
  updated_at: string;
}

export interface McqOption {
  label: string;
  text: string;
}

export interface MarkingPoint {
  code: string;
  criterion: string;
  marks: number;
  keywords?: string[];
}

export interface QuestionMarkscheme {
  marking_points: MarkingPoint[];
  model_answer: string;
  examiner_notes?: string;
}

export interface QuestionRow {
  id: string;
  user_id: string;
  subject_id: string;
  topic_id: string | null;
  paper_type: string;
  command_term: string;
  difficulty: QuestionDifficulty;
  max_marks: number;
  stimulus_markdown: string | null;
  question_markdown: string;
  mcq_options: McqOption[] | null;
  correct_mcq_option: string | null;
  markscheme: QuestionMarkscheme;
  source_material_ids: string[];
  created_at: string;
}

export interface PointResult {
  code: string;
  criterion: string;
  awarded: number;
  max_marks?: number;
  feedback: string;
}

export interface GradingBreakdown {
  point_results: PointResult[];
  command_term_feedback: string;
  missing_keywords: string[];
  model_answer: string;
}

export interface TutorMessage {
  role: 'user' | 'assistant';
  content: string;
  created_at: string;
}

export interface QuestionAttemptRow {
  id: string;
  user_id: string;
  question_id: string;
  user_answer: string;
  awarded_marks: number;
  max_marks: number;
  grading_breakdown: GradingBreakdown;
  tutor_messages: TutorMessage[];
  created_at: string;
}

export interface FlashcardRow {
  id: string;
  user_id: string;
  subject_id: string;
  topic_id: string | null;
  front_markdown: string;
  back_markdown: string;
  mastered: boolean;
  created_at: string;
}

export interface CoreMilestone {
  id: string;
  title: string;
  dueDate?: string;
  completed: boolean;
}

export interface CoreCriterionResult {
  criterion: string;
  awarded: number;
  max_marks: number;
  justification: string;
  improvements: string[];
}

export interface CoreAiReview {
  total_awarded: number;
  total_max: number;
  overall_summary: string;
  criterion_results: CoreCriterionResult[];
  priority_actions: string[];
  reviewed_at: string;
}

export interface CoreProjectRow {
  id: string;
  user_id: string;
  project_type: CoreProjectType;
  subject_slug: string | null;
  title: string;
  research_question_or_prompt: string | null;
  word_count_target: number;
  current_word_count: number;
  milestones: CoreMilestone[];
  draft_excerpt: string | null;
  latest_ai_review: CoreAiReview | null;
  updated_at: string;
}
