import Link from 'next/link';
import { redirect } from 'next/navigation';
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  FolderKanban,
  HelpCircle,
  Paperclip,
} from 'lucide-react';
import { APP_COHORT } from '@/config/brand';
import { createClient } from '@/lib/supabase/server';
import { ensureUserSeeded } from '@/lib/seed-user';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { CoreProjectRow, ProfileRow, SubjectRow } from '@/types/database';

export const dynamic = 'force-dynamic';

export default async function DashboardOverviewPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  await ensureUserSeeded(supabase, user.id);

  const [
    profileRes,
    subjectsRes,
    topicsRes,
    materialsRes,
    notesRes,
    questionsRes,
    coreRes,
  ] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user.id).maybeSingle(),
    supabase
      .from('subjects')
      .select('*')
      .eq('user_id', user.id)
      .order('group_number', { ascending: true }),
    supabase
      .from('syllabus_topics')
      .select('id, subject_id, parent_id, is_completed')
      .eq('user_id', user.id),
    supabase
      .from('course_materials')
      .select('id, subject_id')
      .eq('user_id', user.id),
    supabase
      .from('study_notes')
      .select('id, subject_id')
      .eq('user_id', user.id),
    supabase
      .from('questions')
      .select('id, subject_id')
      .eq('user_id', user.id),
    supabase
      .from('core_projects')
      .select('id, project_type, title, milestones')
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
  const materials =
    (materialsRes.data as { id: string; subject_id: string }[] | null) ?? [];
  const notes =
    (notesRes.data as { id: string; subject_id: string }[] | null) ?? [];
  const questions =
    (questionsRes.data as { id: string; subject_id: string }[] | null) ?? [];
  const coreProjects =
    (coreRes.data as Pick<
      CoreProjectRow,
      'id' | 'project_type' | 'title' | 'milestones'
    >[] | null) ?? [];

  const firstName =
    profile?.full_name?.trim().split(/\s+/)[0] ||
    user.email?.split('@')[0] ||
    'Student';

  const parentIdsWithChildren = new Set<string>();
  for (const t of topics) {
    if (t.parent_id) parentIdsWithChildren.add(t.parent_id);
  }

  const topicStats: Record<string, { completed: number; total: number }> = {};
  let totalSubtopics = 0;
  let completedSubtopics = 0;

  for (const t of topics) {
    if (parentIdsWithChildren.has(t.id)) continue;
    totalSubtopics += 1;
    if (t.is_completed) completedSubtopics += 1;
    if (!topicStats[t.subject_id]) {
      topicStats[t.subject_id] = { completed: 0, total: 0 };
    }
    topicStats[t.subject_id].total += 1;
    if (t.is_completed) topicStats[t.subject_id].completed += 1;
  }

  const countBySubject = (rows: { subject_id: string }[]) => {
    const map: Record<string, number> = {};
    for (const r of rows) {
      map[r.subject_id] = (map[r.subject_id] ?? 0) + 1;
    }
    return map;
  };

  const materialCounts = countBySubject(materials);
  const noteCounts = countBySubject(notes);
  const questionCounts = countBySubject(questions);

  const totalMilestones = coreProjects.reduce(
    (sum, p) => sum + (p.milestones?.length ?? 0),
    0,
  );
  const completedMilestones = coreProjects.reduce(
    (sum, p) =>
      sum + (p.milestones?.filter((m) => m.completed).length ?? 0),
    0,
  );

  const overallPct =
    totalSubtopics > 0
      ? Math.round((completedSubtopics / totalSubtopics) * 100)
      : 0;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-8 sm:py-10">
      {/* Page Header */}
      <div className="mb-8 flex flex-col gap-4 border-b border-[#E6E6E4] pb-6 sm:flex-row sm:items-end sm:justify-between dark:border-[#2E2E2E]">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-[#787774] dark:text-[#9B9A97]">
            {APP_COHORT}
          </p>
          <h1 className="mt-1.5 text-2xl font-semibold tracking-tight text-[#37352F] sm:text-3xl dark:text-[#EBEBEB]">
            Welcome back, {firstName}
          </h1>
          <p className="mt-1 text-sm text-[#787774] dark:text-[#9B9A97]">
            Track syllabus coverage, classroom materials, study guides, and IB
            rubric drafts across your Diploma subjects.
          </p>
        </div>

        <div className="flex items-center gap-4 rounded-lg border border-[#E6E6E4] bg-[#FBFBFA] px-4 py-2.5 dark:border-[#2E2E2E] dark:bg-[#202020]">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-[#787774] dark:text-[#9B9A97]">
              Syllabus Progress
            </div>
            <div className="mt-0.5 font-mono text-sm font-semibold text-[#37352F] dark:text-[#EBEBEB]">
              {completedSubtopics} / {totalSubtopics} sub-topics ({overallPct}%)
            </div>
          </div>
        </div>
      </div>

      {/* Summary Metrics Strip */}
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-lg border border-[#E6E6E4] bg-[#FBFBFA] px-4 py-3 dark:border-[#2E2E2E] dark:bg-[#202020]">
          <div className="flex items-center gap-1.5 text-xs text-[#787774] dark:text-[#9B9A97]">
            <Paperclip className="h-3.5 w-3.5" />
            <span>Materials</span>
          </div>
          <div className="mt-1 font-mono text-lg font-semibold text-[#37352F] dark:text-[#EBEBEB]">
            {materials.length}
          </div>
        </div>
        <div className="rounded-lg border border-[#E6E6E4] bg-[#FBFBFA] px-4 py-3 dark:border-[#2E2E2E] dark:bg-[#202020]">
          <div className="flex items-center gap-1.5 text-xs text-[#787774] dark:text-[#9B9A97]">
            <FileText className="h-3.5 w-3.5" />
            <span>Study Notes</span>
          </div>
          <div className="mt-1 font-mono text-lg font-semibold text-[#37352F] dark:text-[#EBEBEB]">
            {notes.length}
          </div>
        </div>
        <div className="rounded-lg border border-[#E6E6E4] bg-[#FBFBFA] px-4 py-3 dark:border-[#2E2E2E] dark:bg-[#202020]">
          <div className="flex items-center gap-1.5 text-xs text-[#787774] dark:text-[#9B9A97]">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>IB Questions</span>
          </div>
          <div className="mt-1 font-mono text-lg font-semibold text-[#37352F] dark:text-[#EBEBEB]">
            {questions.length}
          </div>
        </div>
        <div className="rounded-lg border border-[#E6E6E4] bg-[#FBFBFA] px-4 py-3 dark:border-[#2E2E2E] dark:bg-[#202020]">
          <div className="flex items-center gap-1.5 text-xs text-[#787774] dark:text-[#9B9A97]">
            <FolderKanban className="h-3.5 w-3.5" />
            <span>Core Milestones</span>
          </div>
          <div className="mt-1 font-mono text-lg font-semibold text-[#37352F] dark:text-[#EBEBEB]">
            {completedMilestones} / {totalMilestones}
          </div>
        </div>
      </div>

      {/* 6 IB Subjects Grid */}
      <section aria-labelledby="subjects-heading">
        <div className="mb-3 flex items-center justify-between">
          <h2
            id="subjects-heading"
            className="text-sm font-semibold uppercase tracking-wider text-[#787774] dark:text-[#9B9A97]"
          >
            Diploma Programme Subjects
          </h2>
          <span className="font-mono text-xs text-[#787774] dark:text-[#9B9A97]">
            {subjects.length} subjects
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => {
            const stats = topicStats[subject.id] ?? { completed: 0, total: 0 };
            const pct =
              stats.total > 0
                ? Math.round((stats.completed / stats.total) * 100)
                : 0;
            const matCount = materialCounts[subject.id] ?? 0;
            const noteCount = noteCounts[subject.id] ?? 0;
            const qCount = questionCounts[subject.id] ?? 0;

            return (
              <Link
                key={subject.id}
                href={`/dashboard/subjects/${subject.slug}`}
                className="group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37352F]/30 dark:focus-visible:ring-[#EBEBEB]/30"
              >
                <Card className="h-full transition-colors duration-150 group-hover:bg-[#FBFBFA] dark:group-hover:bg-[#202020]">
                  <CardContent className="flex h-full flex-col justify-between gap-4 p-4">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <Badge variant="subtle" className="font-mono">
                          Group {subject.group_number} · {subject.level}
                        </Badge>
                        <ArrowUpRight className="h-4 w-4 text-[#787774] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#37352F] dark:text-[#9B9A97] dark:group-hover:text-[#EBEBEB]" />
                      </div>
                      <h3 className="mt-2.5 text-base font-semibold tracking-tight text-[#37352F] dark:text-[#EBEBEB]">
                        {subject.name}
                      </h3>
                      {subject.description && (
                        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#787774] dark:text-[#9B9A97]">
                          {subject.description}
                        </p>
                      )}
                    </div>

                    <div className="space-y-3 border-t border-[#E6E6E4] pt-3 dark:border-[#2E2E2E]">
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span className="text-[#787774] dark:text-[#9B9A97]">
                            Syllabus checklist
                          </span>
                          <span className="font-mono text-[#37352F] dark:text-[#EBEBEB]">
                            {stats.completed} / {stats.total} sub-topics
                          </span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#F1F1EF] dark:bg-[#2A2A2A]">
                          <div
                            className="h-full rounded-full bg-[#37352F] transition-all duration-300 dark:bg-[#EBEBEB]"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-[#787774] dark:text-[#9B9A97]">
                        <span>{matCount} materials</span>
                        <span>{noteCount} notes</span>
                        <span>{qCount} questions</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Core & Internal Assessments Quick Link */}
      <section aria-labelledby="core-heading" className="mt-8">
        <h2
          id="core-heading"
          className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#787774] dark:text-[#9B9A97]"
        >
          DP Core &amp; Internal Assessments
        </h2>
        <Link
          href="/dashboard/core"
          className="group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37352F]/30 dark:focus-visible:ring-[#EBEBEB]/30"
        >
          <Card className="transition-colors duration-150 group-hover:bg-[#FBFBFA] dark:group-hover:bg-[#202020]">
            <CardContent className="flex flex-col justify-between gap-4 p-4 sm:flex-row sm:items-center">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#E6E6E4] bg-[#FBFBFA] text-[#37352F] dark:border-[#2E2E2E] dark:bg-[#202020] dark:text-[#EBEBEB]">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm font-semibold text-[#37352F] dark:text-[#EBEBEB]">
                      EE · TOK · CAS · Subject IAs Workspace
                    </h3>
                    <Badge variant="outline" className="font-mono">
                      {coreProjects.length} projects
                    </Badge>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-[#787774] dark:text-[#9B9A97]">
                    Review official Class of 2028 IB rubrics (FA2027 EE 30m,
                    TOK 10m, CAS learning outcomes, Science/History/Math/English/French
                    IAs), classroom lab &amp; citation guides, milestone trackers,
                    and rubric draft feedback.
                  </p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[#E6E6E4] bg-white px-3 py-1.5 text-xs font-medium text-[#37352F] transition-colors group-hover:bg-[#F1F1EF] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB] dark:group-hover:bg-[#2A2A2A]">
                <span>Open Core Workspace</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </CardContent>
          </Card>
        </Link>
      </section>
    </div>
  );
}
