-- SyllabusOS Initial Schema, Indexes, RLS Policies, and Private Storage Setup
-- Class of 2028 IB Diploma Workspace

create extension if not exists "pgcrypto";

-- Keep updated_at columns synchronized on row updates
create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ---------------------------------------------------------------------------
-- 1. profiles
-- ---------------------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  full_name text,
  avatar_url text,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- 2. subjects
-- ---------------------------------------------------------------------------
create table if not exists public.subjects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  slug text not null,
  name text not null,
  level text not null check (level in ('HL', 'SL')),
  group_number integer not null check (group_number between 1 and 6),
  description text,
  created_at timestamptz not null default now(),
  unique (user_id, slug)
);

-- ---------------------------------------------------------------------------
-- 3. syllabus_topics
-- ---------------------------------------------------------------------------
create table if not exists public.syllabus_topics (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  subject_id uuid not null references public.subjects (id) on delete cascade,
  parent_id uuid references public.syllabus_topics (id) on delete cascade,
  code text not null,
  title text not null,
  guidance_notes text,
  sort_order integer not null default 0,
  is_completed boolean not null default false,
  confidence_level text not null default 'unstarted' check (confidence_level in ('unstarted', 'reviewing', 'confident')),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- 4. course_materials
-- ---------------------------------------------------------------------------
create table if not exists public.course_materials (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  subject_id uuid not null references public.subjects (id) on delete cascade,
  topic_id uuid references public.syllabus_topics (id) on delete set null,
  file_name text not null,
  file_type text not null,
  storage_path text,
  external_url text,
  extracted_text text not null,
  generation_status text not null default 'uploaded' check (generation_status in ('uploaded', 'processing', 'generated', 'failed')),
  last_generated_at timestamptz,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- 5. study_notes
-- ---------------------------------------------------------------------------
create table if not exists public.study_notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  subject_id uuid not null references public.subjects (id) on delete cascade,
  topic_id uuid references public.syllabus_topics (id) on delete set null,
  title text not null,
  summary text,
  blocks jsonb not null default '[]'::jsonb,
  source_material_ids uuid[] not null default '{}',
  version integer not null default 1 check (version >= 1),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- 6. questions
-- ---------------------------------------------------------------------------
create table if not exists public.questions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  subject_id uuid not null references public.subjects (id) on delete cascade,
  topic_id uuid references public.syllabus_topics (id) on delete set null,
  paper_type text not null,
  command_term text not null,
  difficulty text not null default 'Standard IB' check (difficulty in ('Foundation', 'Standard IB', 'HL Extension')),
  max_marks integer not null check (max_marks > 0),
  stimulus_markdown text,
  question_markdown text not null,
  mcq_options jsonb,
  correct_mcq_option text,
  markscheme jsonb not null,
  source_material_ids uuid[] not null default '{}',
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- 7. question_attempts
-- ---------------------------------------------------------------------------
create table if not exists public.question_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  question_id uuid not null references public.questions (id) on delete cascade,
  user_answer text not null,
  awarded_marks integer not null check (awarded_marks >= 0),
  max_marks integer not null check (max_marks > 0),
  grading_breakdown jsonb not null,
  tutor_messages jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- 8. flashcards
-- ---------------------------------------------------------------------------
create table if not exists public.flashcards (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  subject_id uuid not null references public.subjects (id) on delete cascade,
  topic_id uuid references public.syllabus_topics (id) on delete set null,
  front_markdown text not null,
  back_markdown text not null,
  mastered boolean not null default false,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- 9. core_projects
-- ---------------------------------------------------------------------------
create table if not exists public.core_projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  project_type text not null check (project_type in ('EE', 'TOK_ESSAY', 'TOK_EXHIBITION', 'IA', 'CAS')),
  subject_slug text,
  title text not null,
  research_question_or_prompt text,
  word_count_target integer not null default 0 check (word_count_target >= 0),
  current_word_count integer not null default 0 check (current_word_count >= 0),
  milestones jsonb not null default '[]'::jsonb,
  draft_excerpt text,
  latest_ai_review jsonb,
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Indexes
-- ---------------------------------------------------------------------------
create index if not exists idx_subjects_user_slug
  on public.subjects (user_id, slug);

create index if not exists idx_syllabus_topics_user_subject_sort
  on public.syllabus_topics (user_id, subject_id, sort_order);

create index if not exists idx_syllabus_topics_parent_id
  on public.syllabus_topics (parent_id);

create index if not exists idx_course_materials_user_subject_topic
  on public.course_materials (user_id, subject_id, topic_id, created_at desc);

create index if not exists idx_study_notes_user_subject_topic
  on public.study_notes (user_id, subject_id, topic_id, updated_at desc);

create index if not exists idx_questions_user_subject_topic
  on public.questions (user_id, subject_id, topic_id, created_at desc);

create index if not exists idx_question_attempts_user_question_created
  on public.question_attempts (user_id, question_id, created_at desc);

create index if not exists idx_flashcards_user_subject_topic
  on public.flashcards (user_id, subject_id, topic_id, created_at desc);

create index if not exists idx_core_projects_user_type
  on public.core_projects (user_id, project_type);

-- ---------------------------------------------------------------------------
-- updated_at Triggers
-- ---------------------------------------------------------------------------
drop trigger if exists trg_syllabus_topics_updated_at on public.syllabus_topics;
create trigger trg_syllabus_topics_updated_at
  before update on public.syllabus_topics
  for each row
  execute function public.set_updated_at();

drop trigger if exists trg_study_notes_updated_at on public.study_notes;
create trigger trg_study_notes_updated_at
  before update on public.study_notes
  for each row
  execute function public.set_updated_at();

drop trigger if exists trg_core_projects_updated_at on public.core_projects;
create trigger trg_core_projects_updated_at
  before update on public.core_projects
  for each row
  execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- Row Level Security (initPlan-optimized (select auth.uid()))
-- ---------------------------------------------------------------------------
alter table public.profiles enable row level security;
drop policy if exists "Authenticated users manage own profile" on public.profiles;
create policy "Authenticated users manage own profile"
  on public.profiles
  for all
  to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

alter table public.subjects enable row level security;
drop policy if exists "Authenticated users manage own subjects" on public.subjects;
create policy "Authenticated users manage own subjects"
  on public.subjects
  for all
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

alter table public.syllabus_topics enable row level security;
drop policy if exists "Authenticated users manage own syllabus_topics" on public.syllabus_topics;
create policy "Authenticated users manage own syllabus_topics"
  on public.syllabus_topics
  for all
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

alter table public.course_materials enable row level security;
drop policy if exists "Authenticated users manage own course_materials" on public.course_materials;
create policy "Authenticated users manage own course_materials"
  on public.course_materials
  for all
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

alter table public.study_notes enable row level security;
drop policy if exists "Authenticated users manage own study_notes" on public.study_notes;
create policy "Authenticated users manage own study_notes"
  on public.study_notes
  for all
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

alter table public.questions enable row level security;
drop policy if exists "Authenticated users manage own questions" on public.questions;
create policy "Authenticated users manage own questions"
  on public.questions
  for all
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

alter table public.question_attempts enable row level security;
drop policy if exists "Authenticated users manage own question_attempts" on public.question_attempts;
create policy "Authenticated users manage own question_attempts"
  on public.question_attempts
  for all
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

alter table public.flashcards enable row level security;
drop policy if exists "Authenticated users manage own flashcards" on public.flashcards;
create policy "Authenticated users manage own flashcards"
  on public.flashcards
  for all
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

alter table public.core_projects enable row level security;
drop policy if exists "Authenticated users manage own core_projects" on public.core_projects;
create policy "Authenticated users manage own core_projects"
  on public.core_projects
  for all
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

-- ---------------------------------------------------------------------------
-- Private Storage Bucket: course-materials
-- ---------------------------------------------------------------------------
insert into storage.buckets (id, name, public)
values ('course-materials', 'course-materials', false)
on conflict (id) do update set public = excluded.public;

drop policy if exists "Authenticated users manage own course materials" on storage.objects;
create policy "Authenticated users manage own course materials"
  on storage.objects
  for all
  to authenticated
  using (
    bucket_id = 'course-materials'
    and (select auth.uid())::text = (storage.foldername(name))[1]
  )
  with check (
    bucket_id = 'course-materials'
    and (select auth.uid())::text = (storage.foldername(name))[1]
  );
