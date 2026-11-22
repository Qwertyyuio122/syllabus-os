import * as React from 'react';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { ensureUserSeeded } from '@/lib/seed-user';
import type { CommandPaletteItem } from '@/components/layout/CommandPalette';
import { DashboardChrome } from '@/components/layout/DashboardChrome';
import type { SidebarSubjectSummary } from '@/components/layout/Sidebar';
import type { CoreProjectRow, ProfileRow, SubjectRow } from '@/types/database';

export const dynamic = 'force-dynamic';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect('/login');
  }

  await ensureUserSeeded(supabase, user.id);

  const [profileRes, subjectsRes, topicsRes, notesRes, coreRes] =
    await Promise.all([
      supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .maybeSingle(),
      supabase
        .from('subjects')
        .select('*')
        .eq('user_id', user.id)
        .order('group_number', { ascending: true }),
      supabase
        .from('syllabus_topics')
        .select('id, subject_id, parent_id, code, title, is_completed')
        .eq('user_id', user.id),
      supabase
        .from('study_notes')
        .select('id, subject_id, topic_id, title')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false }),
      supabase
        .from('core_projects')
        .select('id, project_type, subject_slug, title')
        .eq('user_id', user.id),
    ]);

  const profile = (profileRes.data as ProfileRow | null) ?? null;
  const subjects = (subjectsRes.data as SubjectRow[] | null) ?? [];
  const topics =
    (topicsRes.data as
      | {
          id: string;
          subject_id: string;
          parent_id: string | null;
          code: string;
          title: string;
          is_completed: boolean;
        }[]
      | null) ?? [];
  const notes =
    (notesRes.data as
      | {
          id: string;
          subject_id: string;
          topic_id: string | null;
          title: string;
        }[]
      | null) ?? [];
  const coreProjects =
    (coreRes.data as
      | Pick<CoreProjectRow, 'id' | 'project_type' | 'subject_slug' | 'title'>[]
      | null) ?? [];

  const parentIdsWithChildren = new Set<string>();
  for (const t of topics) {
    if (t.parent_id) {
      parentIdsWithChildren.add(t.parent_id);
    }
  }

  const countsBySubject: Record<string, { completed: number; total: number }> =
    {};
  for (const t of topics) {
    if (parentIdsWithChildren.has(t.id)) continue;
    if (!countsBySubject[t.subject_id]) {
      countsBySubject[t.subject_id] = { completed: 0, total: 0 };
    }
    countsBySubject[t.subject_id].total += 1;
    if (t.is_completed) {
      countsBySubject[t.subject_id].completed += 1;
    }
  }

  const sidebarSubjects: SidebarSubjectSummary[] = subjects.map((subject) => {
    const counts = countsBySubject[subject.id] ?? { completed: 0, total: 0 };
    return {
      ...subject,
      completedCount: counts.completed,
      totalCount: counts.total,
    };
  });

  const subjectById = new Map<string, SubjectRow>();
  for (const subject of subjects) {
    subjectById.set(subject.id, subject);
  }

  const topicById = new Map(topics.map((t) => [t.id, t]));

  const commandItems: CommandPaletteItem[] = [
    {
      id: 'action-overview',
      kind: 'action',
      title: 'Workspace Overview',
      subtitle: 'All 6 Diploma Programme subjects & telemetry',
      href: '/dashboard',
      keywords: 'home overview dashboard ib diploma',
    },
    {
      id: 'action-core',
      kind: 'action',
      title: 'DP Core & Internal Assessments',
      subtitle: 'Extended Essay, TOK Essay & Exhibition, CAS, Subject IAs',
      href: '/dashboard/core',
      keywords: 'ee tok cas ia internal assessment rubric',
    },
    ...subjects.map<CommandPaletteItem>((subject) => ({
      id: `subject-${subject.id}`,
      kind: 'subject',
      title: subject.name,
      subtitle:
        subject.description ?? `Group ${subject.group_number} · ${subject.level}`,
      badge: subject.level,
      href: `/dashboard/subjects/${subject.slug}`,
      keywords: `${subject.slug} group ${subject.group_number} ${subject.level}`,
    })),
    ...notes.map<CommandPaletteItem>((note) => {
      const subject = subjectById.get(note.subject_id);
      const topic = note.topic_id ? topicById.get(note.topic_id) : undefined;
      return {
        id: `note-${note.id}`,
        kind: 'note',
        title: note.title,
        subtitle: subject
          ? `${subject.name}${topic ? ` · ${topic.title}` : ''}`
          : 'Study Guide',
        badge: topic?.code ?? subject?.level,
        href: subject
          ? `/dashboard/subjects/${subject.slug}?tab=notes&note=${encodeURIComponent(note.id)}`
          : '/dashboard',
        keywords: `${subject?.name ?? ''} ${topic?.code ?? ''} ${topic?.title ?? ''} notes diagram`,
      };
    }),
    ...coreProjects.map<CommandPaletteItem>((project) => ({
      id: `core-${project.id}`,
      kind: 'core',
      title: project.title,
      subtitle: project.subject_slug
        ? `${project.project_type} · ${project.subject_slug}`
        : `${project.project_type} · Official IB Rubric`,
      badge: project.project_type.replace('_', ' '),
      href: `/dashboard/core?project=${encodeURIComponent(project.id)}`,
      keywords: `${project.project_type} ${project.subject_slug ?? ''} rubric draft`,
    })),
    ...topics
      .filter((t) => !parentIdsWithChildren.has(t.id))
      .map<CommandPaletteItem>((topic) => {
        const subject = subjectById.get(topic.subject_id);
        return {
          id: `topic-${topic.id}`,
          kind: 'topic',
          title: topic.title,
          subtitle: subject
            ? `${subject.name} · Syllabus Checklist`
            : 'Syllabus Sub-topic',
          badge: topic.code,
          href: subject
            ? `/dashboard/subjects/${subject.slug}?tab=checklist`
            : '/dashboard',
          keywords: `${subject?.name ?? ''} ${topic.code} checklist syllabus`,
        };
      }),
  ];

  return (
    <div className="min-h-screen overflow-x-clip text-[#111318] lg:flex dark:text-[#F5F7FA]">
      <DashboardChrome
        profile={profile}
        userEmail={user.email ?? 'student@syllabus.os'}
        subjects={sidebarSubjects}
        commandItems={commandItems}
      />
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
