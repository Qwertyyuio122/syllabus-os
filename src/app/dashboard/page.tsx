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
import { SubjectMotif } from '@/components/subjects/SubjectMotif';
import { GlassSpotlight } from '@/components/ui/GlassSpotlight';
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
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-8 sm:py-7">
      {/* Compact Editorial Liquid Glass Hero + Inline Telemetry Strip */}
      <GlassSpotlight className="glass-panel mb-7 rounded-3xl p-6 sm:p-7">
        <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-serif text-3xl font-medium tracking-[-0.02em] text-balance text-[#1D1D1F] sm:text-[36px] sm:leading-[1.12] dark:text-[#F5F5F7]">
              Welcome back, {firstName}
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6E6E73] dark:text-[#98989D]">
              Track syllabus coverage, classroom materials, interactive study
              guides, and IB rubric drafts across your Diploma workspace.
            </p>
          </div>

          <div className="glass-surface shrink-0 rounded-2xl px-4 py-3 sm:min-w-[240px]">
            <div className="flex items-center justify-between gap-4 text-[11px] font-medium text-[#6E6E73] dark:text-[#98989D]">
              <span>Syllabus Progress</span>
              <span className="font-mono font-semibold tabular-nums text-[#1D1D1F] dark:text-[#F5F5F7]">
                {overallPct}%
              </span>
            </div>
            <div className="mt-1 font-mono text-sm font-semibold tabular-nums text-[#1D1D1F] dark:text-[#F5F5F7]">
              {completedSubtopics} / {totalSubtopics} sub-topics
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-black/[0.06] dark:bg-white/[0.08]">
              <div
                className="h-full rounded-full bg-[#1D1D1F] transition-all duration-300 dark:bg-[#F5F5F7]"
                style={{ width: `${overallPct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Integrated Inline Telemetry Bar */}
        <div className="relative z-10 mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-black/[0.06] pt-4 dark:border-white/[0.08]">
          <div className="grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:gap-6">
            <div className="flex items-center gap-2 text-xs text-[#6E6E73] dark:text-[#98989D]">
              <Paperclip className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>Materials</span>
              <span className="font-mono text-sm font-semibold tabular-nums text-[#1D1D1F] dark:text-[#F5F5F7]">
                {materials.length}
              </span>
            </div>

            <div className="hidden h-3.5 w-px bg-black/[0.08] sm:block dark:bg-white/[0.1]" />

            <div className="flex items-center gap-2 text-xs text-[#6E6E73] dark:text-[#98989D]">
              <FileText className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>Study Notes</span>
              <span className="font-mono text-sm font-semibold tabular-nums text-[#1D1D1F] dark:text-[#F5F5F7]">
                {notes.length}
              </span>
            </div>

            <div className="hidden h-3.5 w-px bg-black/[0.08] sm:block dark:bg-white/[0.1]" />

            <div className="flex items-center gap-2 text-xs text-[#6E6E73] dark:text-[#98989D]">
              <HelpCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>IB Questions</span>
              <span className="font-mono text-sm font-semibold tabular-nums text-[#1D1D1F] dark:text-[#F5F5F7]">
                {questions.length}
              </span>
            </div>

            <div className="hidden h-3.5 w-px bg-black/[0.08] sm:block dark:bg-white/[0.1]" />

            <div className="flex items-center gap-2 text-xs text-[#6E6E73] dark:text-[#98989D]">
              <FolderKanban className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>Core Milestones</span>
              <span className="font-mono text-sm font-semibold tabular-nums text-[#1D1D1F] dark:text-[#F5F5F7]">
                {completedMilestones} / {totalMilestones}
              </span>
            </div>
          </div>

          <span className="glass-pill hidden rounded-full px-2.5 py-0.5 font-mono text-[11px] text-[#6E6E73] md:inline-flex dark:text-[#98989D]">
            {APP_COHORT}
          </span>
        </div>
      </GlassSpotlight>

      {/* 6 IB Subjects Grid */}
      <section aria-labelledby="subjects-heading">
        <div className="mb-3.5 flex items-center justify-between px-1">
          <h2
            id="subjects-heading"
            className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73] dark:text-[#98989D]"
          >
            Diploma Programme Subjects
          </h2>
          <span className="glass-pill rounded-full px-2.5 py-0.5 font-mono text-[11px] tabular-nums text-[#6E6E73] dark:text-[#98989D]">
            {subjects.length} subjects
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => {
            const stats = topicStats[subject.id] ?? { completed: 0, total: 0 };
            const pct =
              stats.total > 0
                ? Math.round((stats.completed / stats.total) * 100)
                : 0;
            const matCount = materialCounts[subject.id] ?? 0;
            const noteCount = noteCounts[subject.id] ?? 0;
            const qCount = questionCounts[subject.id] ?? 0;
            const subjectHref = `/dashboard/subjects/${subject.slug}`;

            return (
              <GlassSpotlight
                key={subject.id}
                className="group relative rounded-2xl"
              >
                <Card className="glass-interactive relative h-full overflow-hidden group-hover:-translate-y-0.5">
                  <SubjectMotif slug={subject.slug} />

                  <CardContent className="relative z-10 flex h-full flex-col justify-between gap-4 p-5">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <Badge variant="subtle" className="font-mono">
                          Group {subject.group_number} · {subject.level}
                        </Badge>
                        <span
                          aria-hidden="true"
                          className="glass-pill flex h-7 w-7 items-center justify-center rounded-full text-[#6E6E73] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#1D1D1F] dark:text-[#98989D] dark:group-hover:text-[#F5F5F7]"
                        >
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                      <h3 className="mt-3 text-base font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                        <Link
                          href={subjectHref}
                          className="after:absolute after:inset-0 after:z-0 focus-visible:outline-none"
                        >
                          {subject.name}
                        </Link>
                      </h3>
                      {subject.description && (
                        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[#6E6E73] dark:text-[#98989D]">
                          {subject.description}
                        </p>
                      )}
                    </div>

                    <div className="space-y-3 border-t border-black/[0.06] pt-3.5 dark:border-white/[0.08]">
                      <div>
                        <div className="mb-1.5 flex items-center justify-between text-xs">
                          <span className="text-[#6E6E73] dark:text-[#98989D]">
                            Syllabus checklist
                          </span>
                          <span className="font-mono tabular-nums text-[#1D1D1F] dark:text-[#F5F5F7]">
                            {stats.completed} / {stats.total} sub-topics
                          </span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/[0.06] dark:bg-white/[0.08]">
                          <div
                            className="h-full rounded-full bg-[#1D1D1F] transition-all duration-300 dark:bg-[#F5F5F7]"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-[#6E6E73] dark:text-[#98989D]">
                        <span className="tabular-nums">
                          {matCount} mat · {noteCount} notes · {qCount} q
                        </span>

                        <div className="relative z-10 flex items-center gap-1.5">
                          <Link
                            href={`${subjectHref}?tab=notes`}
                            className="glass-pill rounded-full px-2 py-0.5 font-sans text-[10.5px] font-medium text-[#1D1D1F] transition-colors hover:bg-white/95 dark:text-[#F5F5F7] dark:hover:bg-white/[0.14]"
                          >
                            Notes
                          </Link>
                          <Link
                            href={`${subjectHref}?tab=qbank`}
                            className="glass-pill rounded-full px-2 py-0.5 font-sans text-[10.5px] font-medium text-[#1D1D1F] transition-colors hover:bg-white/95 dark:text-[#F5F5F7] dark:hover:bg-white/[0.14]"
                          >
                            Q-Bank
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </GlassSpotlight>
            );
          })}
        </div>
      </section>

      {/* Core & Internal Assessments Quick Link */}
      <section aria-labelledby="core-heading" className="mt-8">
        <h2
          id="core-heading"
          className="mb-3.5 px-1 text-xs font-semibold uppercase tracking-wider text-[#6E6E73] dark:text-[#98989D]"
        >
          DP Core &amp; Internal Assessments
        </h2>
        <GlassSpotlight className="group rounded-2xl">
          <Link
            href="/dashboard/core"
            className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:focus-visible:ring-[#F5F5F7]/25"
          >
            <Card className="glass-interactive group-hover:-translate-y-0.5">
              <CardContent className="relative z-10 flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
                <div className="flex items-start gap-3.5">
                  <div className="glass-pill mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-[#1D1D1F] dark:text-[#F5F5F7]">
                    <BookOpen className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                        EE · TOK · CAS · Subject IAs Workspace
                      </h3>
                      <Badge variant="outline" className="font-mono tabular-nums">
                        {coreProjects.length} projects
                      </Badge>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-[#6E6E73] dark:text-[#98989D]">
                      Review official IB Diploma rubrics (FA2027 EE 30m,
                      TOK 10m, CAS learning outcomes, Science/History/Math/English/French
                      IAs), classroom lab &amp; citation guides, milestone trackers,
                      and rubric draft feedback.
                    </p>
                  </div>
                </div>
                <span className="glass-pill inline-flex shrink-0 items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-medium text-[#1D1D1F] transition-colors group-hover:bg-white/95 dark:text-[#F5F5F7] dark:group-hover:bg-white/[0.12]">
                  <span>Open Core Workspace</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </CardContent>
            </Card>
          </Link>
        </GlassSpotlight>
      </section>
    </div>
  );
}
