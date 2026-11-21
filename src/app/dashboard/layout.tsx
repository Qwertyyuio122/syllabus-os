import * as React from 'react';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { ensureUserSeeded } from '@/lib/seed-user';
import { Sidebar, type SidebarSubjectSummary } from '@/components/layout/Sidebar';
import type { ProfileRow, SubjectRow } from '@/types/database';

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

  const [profileRes, subjectsRes, topicsRes] = await Promise.all([
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
      .select('id, subject_id, parent_id, is_completed')
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
          is_completed: boolean;
        }[]
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

  return (
    <div className="min-h-screen bg-white text-[#37352F] lg:flex dark:bg-[#191919] dark:text-[#EBEBEB]">
      <Sidebar
        profile={profile}
        userEmail={user.email ?? 'student@syllabus.os'}
        subjects={sidebarSubjects}
      />
      <main className="min-w-0 flex-1 bg-white dark:bg-[#191919]">
        {children}
      </main>
    </div>
  );
}
