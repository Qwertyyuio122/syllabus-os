import Link from 'next/link';
import { redirect } from 'next/navigation';
import {
  ArrowUpRight,
  BookOpen,
  Calendar,
  FileText,
  FolderKanban,
  HelpCircle,
  Paperclip,
} from 'lucide-react';
import { APP_COHORT } from '@/config/brand';
import { getSubjectTheme } from '@/config/subject-themes';
import { CRHS_2026_2028_MILESTONES } from '@/data/classroom-seed/core-ee-cas';
import { createClient } from '@/lib/supabase/server';
import { ensureUserSeeded } from '@/lib/seed-user';
import { LiquidArtwork } from '@/components/subjects/SubjectMotif';
import { GlassSpotlight } from '@/components/ui/GlassSpotlight';
import {
  AnimatedCounter,
  GlassReveal,
  ProgressRing,
} from '@/components/ui/MotionPrimitives';
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
  const milestonePct =
    totalMilestones > 0
      ? Math.round((completedMilestones / totalMilestones) * 100)
      : 0;

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-8 sm:py-7">
      {/* Compact Editorial Liquid Glass Hero + Crystal Refraction + Telemetry Strip */}
      <GlassReveal>
        <GlassSpotlight className="glass-panel relative mb-7 rounded-3xl p-6 sm:p-7">
          <LiquidArtwork
            src="/images/hero-glass.webp"
            className="absolute -top-6 right-0 hidden h-56 w-96 sm:block lg:w-[440px]"
            imgClassName="opacity-75 dark:opacity-75"
            priority
            width={1280}
            height={720}
          />

          <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="font-serif text-3xl font-medium tracking-[-0.02em] text-balance text-[#111318] sm:text-[36px] sm:leading-[1.12] dark:text-[#F5F7FA]">
                Welcome back, {firstName}
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#525866] dark:text-[#9AA3B2]">
                Track syllabus coverage, classroom materials, interactive study
                guides, and IB rubric drafts across your Diploma workspace.
              </p>
            </div>

            <div className="glass-surface flex shrink-0 items-center gap-3.5 rounded-2xl px-4 py-3 sm:min-w-[260px]">
              <ProgressRing
                value={overallPct}
                size={48}
                strokeWidth={3.75}
                accentClassName="text-[#1E3A5F] dark:text-[#93C5FD]"
                centerLabel={`${overallPct}%`}
                ariaLabel={`Overall syllabus progress ${overallPct}%`}
              />
              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-medium text-[#525866] dark:text-[#9AA3B2]">
                  Syllabus Progress
                </div>
                <div className="mt-0.5 font-mono text-sm font-semibold tabular-nums text-[#111318] dark:text-[#F5F7FA]">
                  {completedSubtopics} / {totalSubtopics} sub-topics
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-black/[0.06] dark:bg-white/[0.09]">
                  <div
                    className="h-full rounded-full bg-[#111318] transition-all duration-300 dark:bg-[#F5F7FA]"
                    style={{ width: `${overallPct}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Integrated Inline Telemetry Bar */}
          <div className="relative z-10 mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-black/[0.06] pt-4 dark:border-white/[0.08]">
            <div className="grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:gap-6">
              <div className="flex items-center gap-2 text-xs text-[#525866] dark:text-[#9AA3B2]">
                <Paperclip className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>Materials</span>
                <AnimatedCounter
                  value={materials.length}
                  className="font-mono text-sm font-semibold text-[#111318] dark:text-[#F5F7FA]"
                />
              </div>

              <div className="hidden h-3.5 w-px bg-black/[0.08] sm:block dark:bg-white/[0.1]" />

              <div className="flex items-center gap-2 text-xs text-[#525866] dark:text-[#9AA3B2]">
                <FileText className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>Study Notes</span>
                <AnimatedCounter
                  value={notes.length}
                  className="font-mono text-sm font-semibold text-[#111318] dark:text-[#F5F7FA]"
                />
              </div>

              <div className="hidden h-3.5 w-px bg-black/[0.08] sm:block dark:bg-white/[0.1]" />

              <div className="flex items-center gap-2 text-xs text-[#525866] dark:text-[#9AA3B2]">
                <HelpCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>IB Questions</span>
                <AnimatedCounter
                  value={questions.length}
                  className="font-mono text-sm font-semibold text-[#111318] dark:text-[#F5F7FA]"
                />
              </div>

              <div className="hidden h-3.5 w-px bg-black/[0.08] sm:block dark:bg-white/[0.1]" />

              <div className="flex items-center gap-2 text-xs text-[#525866] dark:text-[#9AA3B2]">
                <FolderKanban
                  className="h-3.5 w-3.5 shrink-0"
                  aria-hidden="true"
                />
                <span className="whitespace-nowrap">Core Milestones</span>
                <span className="whitespace-nowrap font-mono text-sm font-semibold tabular-nums text-[#111318] dark:text-[#F5F7FA]">
                  {completedMilestones} / {totalMilestones}
                </span>
              </div>
            </div>

            <span className="glass-pill hidden rounded-full px-2.5 py-0.5 font-mono text-[11px] text-[#525866] md:inline-flex dark:text-[#9AA3B2]">
              {APP_COHORT}
            </span>
          </div>
        </GlassSpotlight>
      </GlassReveal>

      {/* 6 IB Subjects Grid */}
      <GlassReveal delayMs={40}>
        <section aria-labelledby="subjects-heading">
          <div className="mb-3.5 flex items-center justify-between px-1">
            <h2
              id="subjects-heading"
              className="text-xs font-semibold uppercase tracking-wider text-[#525866] dark:text-[#9AA3B2]"
            >
              Diploma Programme Subjects
            </h2>
            <span className="glass-pill rounded-full px-2.5 py-0.5 font-mono text-[11px] tabular-nums text-[#525866] dark:text-[#9AA3B2]">
              {subjects.length} subjects
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => {
              const stats = topicStats[subject.id] ?? {
                completed: 0,
                total: 0,
              };
              const pct =
                stats.total > 0
                  ? Math.round((stats.completed / stats.total) * 100)
                  : 0;
              const matCount = materialCounts[subject.id] ?? 0;
              const noteCount = noteCounts[subject.id] ?? 0;
              const qCount = questionCounts[subject.id] ?? 0;
              const subjectHref = `/dashboard/subjects/${subject.slug}`;
              const theme = getSubjectTheme(subject.slug);

              return (
                <GlassSpotlight
                  key={subject.id}
                  className="group relative rounded-2xl"
                >
                  <Card
                    className={`glass-interactive relative h-full overflow-hidden group-hover:-translate-y-0.5 ${theme.borderTint}`}
                  >
                    <LiquidArtwork
                      src={theme.heroImage}
                      className="absolute -top-3 -right-3 h-32 w-32"
                      imgClassName="opacity-75 group-hover:scale-105 group-hover:opacity-95 dark:opacity-75 dark:group-hover:opacity-95"
                    />

                    <CardContent className="relative z-10 flex h-full flex-col justify-between gap-4 p-5">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex min-w-0 flex-wrap items-center gap-1.5">
                            <Badge
                              variant="subtle"
                              className={`font-mono ${theme.tintBg} ${theme.borderTint} ${theme.textAccent}`}
                            >
                              Group {subject.group_number} · {subject.level}
                            </Badge>
                            {subject.slug === 'history-hl' && (
                              <Badge
                                variant="outline"
                                className="font-mono text-[10px]"
                              >
                                Active Focus · IA &amp; Paper 3
                              </Badge>
                            )}
                          </div>
                          <span
                            aria-hidden="true"
                            className="glass-pill flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[#525866] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#111318] dark:text-[#9AA3B2] dark:group-hover:text-[#F5F7FA]"
                          >
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </span>
                        </div>

                        <h3 className="mt-3 pr-10 text-base font-semibold tracking-tight text-[#111318] dark:text-[#F5F7FA]">
                          <Link
                            href={subjectHref}
                            className="after:absolute after:inset-0 after:z-0 focus-visible:outline-none"
                          >
                            {subject.name}
                          </Link>
                        </h3>

                        <p className="mt-1 font-mono text-[10.5px] text-[#525866] dark:text-[#9AA3B2]">
                          {theme.textbookBadge}
                        </p>

                        {subject.description && (
                          <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[#525866] dark:text-[#9AA3B2]">
                            {subject.description}
                          </p>
                        )}
                      </div>

                      <div className="space-y-3 border-t border-black/[0.06] pt-3.5 dark:border-white/[0.08]">
                        <div className="flex items-center gap-3">
                          <ProgressRing
                            value={pct}
                            size={34}
                            strokeWidth={3}
                            accentClassName={theme.textAccent}
                            centerLabel={`${pct}`}
                          />
                          <div className="min-w-0 flex-1">
                            <div className="mb-1 flex items-center justify-between text-xs">
                              <span className="text-[#525866] dark:text-[#9AA3B2]">
                                Syllabus checklist
                              </span>
                              <span className="font-mono tabular-nums text-[#111318] dark:text-[#F5F7FA]">
                                {stats.completed} / {stats.total} sub-topics
                              </span>
                            </div>
                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/[0.06] dark:bg-white/[0.08]">
                              <div
                                className={`h-full rounded-full transition-all duration-300 ${theme.progressBarClass}`}
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-[#525866] dark:text-[#9AA3B2]">
                          <span className="tabular-nums">
                            {matCount} mat · {noteCount} notes · {qCount} q
                          </span>

                          <div className="relative z-10 flex items-center gap-1.5">
                            <Link
                              href={`${subjectHref}?tab=notes`}
                              className="glass-pill rounded-full px-2.5 py-0.5 font-sans text-[10.5px] font-medium text-[#111318] transition-colors hover:bg-white/95 dark:text-[#F5F7FA] dark:hover:bg-white/[0.14]"
                            >
                              Notes
                            </Link>
                            <Link
                              href={`${subjectHref}?tab=qbank`}
                              className="glass-pill rounded-full px-2.5 py-0.5 font-sans text-[10.5px] font-medium text-[#111318] transition-colors hover:bg-white/95 dark:text-[#F5F7FA] dark:hover:bg-white/[0.14]"
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
      </GlassReveal>

      {/* CRHS Class of 2028 Upcoming IB Milestones */}
      <GlassReveal delayMs={80}>
        <section aria-labelledby="milestones-heading" className="mt-8">
          <div className="mb-3.5 flex items-center justify-between gap-2 px-1">
            <h2
              id="milestones-heading"
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#525866] dark:text-[#9AA3B2]"
            >
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              <span>CRHS Class of 2028 — Upcoming IB Milestones</span>
            </h2>
            <Link
              href="/dashboard/core"
              className="text-xs font-medium text-[#525866] transition-colors hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:text-[#F5F7FA]"
            >
              Full 2026–2028 Calendar →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {CRHS_2026_2028_MILESTONES.filter((m) =>
              [
                'crhs-hist-mock-1',
                'crhs-ee-bib',
                'crhs-eng-mock-io',
                'crhs-hist-mock-2',
                'crhs-eng-final-io',
                'crhs-tok-exh',
              ].includes(m.id),
            ).map((item) => (
              <div
                key={item.id}
                className="glass-surface glass-interactive flex items-start justify-between gap-3 rounded-2xl px-4 py-3"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <Badge variant="outline" className="font-mono text-[10px]">
                      {item.dateLabel}
                    </Badge>
                    <span className="font-mono text-[10px] text-[#525866] dark:text-[#9AA3B2]">
                      {item.subjectOrCore}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs font-medium leading-snug text-[#111318] dark:text-[#F5F7FA]">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </GlassReveal>

      {/* Core & Internal Assessments Quick Link */}
      <GlassReveal delayMs={120}>
        <section aria-labelledby="core-heading" className="mt-8">
          <h2
            id="core-heading"
            className="mb-3.5 px-1 text-xs font-semibold uppercase tracking-wider text-[#525866] dark:text-[#9AA3B2]"
          >
            DP Core &amp; Internal Assessments
          </h2>
          <GlassSpotlight className="group rounded-2xl">
            <Link
              href="/dashboard/core"
              className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111318]/25 dark:focus-visible:ring-[#F5F7FA]/25"
            >
              <Card className="glass-interactive group-hover:-translate-y-0.5">
                <CardContent className="relative z-10 flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
                  <div className="flex items-start gap-3.5">
                    <div className="glass-pill mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-[#111318] dark:text-[#F5F7FA]">
                      <BookOpen className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-semibold text-[#111318] dark:text-[#F5F7FA]">
                          EE · TOK · CAS · Subject IAs Workspace
                        </h3>
                        <Badge
                          variant="outline"
                          className="font-mono tabular-nums"
                        >
                          {coreProjects.length} projects
                        </Badge>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-[#525866] dark:text-[#9AA3B2]">
                        Review official IB Diploma rubrics (FA2027 EE 30m, TOK
                        10m, CAS learning outcomes,
                        Science/History/Math/English/French IAs), classroom lab
                        &amp; citation guides, milestone trackers, and rubric
                        draft feedback.
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <ProgressRing
                      value={milestonePct}
                      size={38}
                      strokeWidth={3}
                      accentClassName="text-[#1E3A5F] dark:text-[#93C5FD]"
                      centerLabel={`${milestonePct}%`}
                      ariaLabel={`Core milestone readiness ${milestonePct}%`}
                    />
                    <span className="glass-pill inline-flex shrink-0 items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-medium text-[#111318] transition-colors group-hover:bg-white/95 dark:text-[#F5F7FA] dark:group-hover:bg-white/[0.12]">
                      <span>Open Core Workspace</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </GlassSpotlight>
        </section>
      </GlassReveal>
    </div>
  );
}
