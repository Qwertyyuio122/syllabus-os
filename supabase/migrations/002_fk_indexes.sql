-- Single-column foreign key indexes for ON DELETE CASCADE / SET NULL
-- and Supabase Performance Advisor compliance (unindexed_foreign_keys).

create index if not exists idx_syllabus_topics_subject_id
  on public.syllabus_topics (subject_id);

create index if not exists idx_course_materials_subject_id
  on public.course_materials (subject_id);

create index if not exists idx_course_materials_topic_id
  on public.course_materials (topic_id);

create index if not exists idx_study_notes_subject_id
  on public.study_notes (subject_id);

create index if not exists idx_study_notes_topic_id
  on public.study_notes (topic_id);

create index if not exists idx_questions_subject_id
  on public.questions (subject_id);

create index if not exists idx_questions_topic_id
  on public.questions (topic_id);

create index if not exists idx_question_attempts_question_id
  on public.question_attempts (question_id);

create index if not exists idx_flashcards_subject_id
  on public.flashcards (subject_id);

create index if not exists idx_flashcards_topic_id
  on public.flashcards (topic_id);
