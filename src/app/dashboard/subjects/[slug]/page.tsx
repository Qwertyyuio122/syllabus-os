import { notFound, redirect } from 'next/navigation';
import { getSubjectConfig } from '@/data/ib-syllabi';
import { ensureUserSeeded } from '@/lib/seed-user';
import { createClient } from '@/lib/supabase/server';
import {
  SubjectWorkspaceClient,
  type SubjectWorkspaceTab,
} from '@/components/subjects/SubjectWorkspaceClient';
import type {
  CourseMaterialRow,
  FlashcardRow,
  QuestionAttemptRow,
  QuestionRow,
  StudyNoteRow,
  SubjectRow,
  SyllabusTopicRow,
} from '@/types/database';

export const dynamic = 'force-dynamic';

const VALID_TABS = new Set<SubjectWorkspaceTab>([
  'checklist',
  'notes',
  'qbank',
  'materials',
  'flashcards',
]);

export default async function SubjectWorkspacePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ tab?: string }>;
}) {
  const [{ slug }, { tab }] = await Promise.all([params, searchParams]);

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  await ensureUserSeeded(supabase, user.id);

  const { data: subjectData } = await supabase
    .from('subjects')
    .select('*')
    .eq('user_id', user.id)
    .eq('slug', slug)
    .maybeSingle();

  const subject = subjectData as SubjectRow | null;
  if (!subject) {
    notFound();
  }

  const [topicsRes, notesRes, questionsRes, materialsRes, flashcardsRes] =
    await Promise.all([
      supabase
        .from('syllabus_topics')
        .select('*')
        .eq('user_id', user.id)
        .eq('subject_id', subject.id)
        .order('sort_order', { ascending: true }),
      supabase
        .from('study_notes')
        .select('*')
        .eq('user_id', user.id)
        .eq('subject_id', subject.id)
        .order('updated_at', { ascending: false }),
      supabase
        .from('questions')
        .select('*')
        .eq('user_id', user.id)
        .eq('subject_id', subject.id)
        .order('created_at', { ascending: false }),
      supabase
        .from('course_materials')
        .select('*')
        .eq('user_id', user.id)
        .eq('subject_id', subject.id)
        .order('created_at', { ascending: false }),
      supabase
        .from('flashcards')
        .select('*')
        .eq('user_id', user.id)
        .eq('subject_id', subject.id)
        .order('created_at', { ascending: false }),
    ]);

  const topics = (topicsRes.data as SyllabusTopicRow[] | null) ?? [];
  const notes = (notesRes.data as StudyNoteRow[] | null) ?? [];
  const questions = (questionsRes.data as QuestionRow[] | null) ?? [];
  const materials = (materialsRes.data as CourseMaterialRow[] | null) ?? [];
  const flashcards = (flashcardsRes.data as FlashcardRow[] | null) ?? [];

  let attempts: QuestionAttemptRow[] = [];
  if (questions.length > 0) {
    const questionIds = questions.map((q) => q.id);
    const { data: attemptsData } = await supabase
      .from('question_attempts')
      .select('*')
      .eq('user_id', user.id)
      .in('question_id', questionIds)
      .order('created_at', { ascending: false });

    attempts = (attemptsData as QuestionAttemptRow[] | null) ?? [];
  }

  const subjectConfig = getSubjectConfig(subject.slug);
  const paperTypes = subjectConfig?.paper_types ?? subjectConfig?.examPaperTypes ?? [];

  const initialTab: SubjectWorkspaceTab =
    tab && VALID_TABS.has(tab as SubjectWorkspaceTab)
      ? (tab as SubjectWorkspaceTab)
      : 'checklist';

  return (
    <SubjectWorkspaceClient
      userId={user.id}
      subject={subject}
      paperTypes={paperTypes}
      initialTopics={topics}
      initialNotes={notes}
      initialQuestions={questions}
      initialAttempts={attempts}
      initialMaterials={materials}
      initialFlashcards={flashcards}
      initialTab={initialTab}
    />
  );
}
