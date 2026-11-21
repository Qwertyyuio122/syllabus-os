'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  FileText,
  FolderOpen,
  HelpCircle,
  Layers,
} from 'lucide-react';
import { NotionNoteViewer } from '@/components/notes/NotionNoteViewer';
import { FlashcardsTab } from '@/components/flashcards/FlashcardsTab';
import { MaterialsSyncTab } from '@/components/materials/MaterialsSyncTab';
import { QuestionBankTab } from '@/components/qbank/QuestionBankTab';
import { SyllabusChecklistTree } from '@/components/syllabus/SyllabusChecklistTree';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type {
  CourseMaterialRow,
  FlashcardRow,
  QuestionAttemptRow,
  QuestionRow,
  StudyNoteRow,
  SubjectRow,
  SyllabusTopicRow,
} from '@/types/database';

export type SubjectWorkspaceTab =
  | 'checklist'
  | 'notes'
  | 'qbank'
  | 'materials'
  | 'flashcards';

interface SubjectWorkspaceClientProps {
  userId: string;
  subject: SubjectRow;
  paperTypes: string[];
  initialTopics: SyllabusTopicRow[];
  initialNotes: StudyNoteRow[];
  initialQuestions: QuestionRow[];
  initialAttempts: QuestionAttemptRow[];
  initialMaterials: CourseMaterialRow[];
  initialFlashcards: FlashcardRow[];
  initialTab?: SubjectWorkspaceTab;
}

export function SubjectWorkspaceClient({
  userId,
  subject,
  paperTypes,
  initialTopics,
  initialNotes,
  initialQuestions,
  initialAttempts,
  initialMaterials,
  initialFlashcards,
  initialTab = 'checklist',
}: SubjectWorkspaceClientProps) {
  const [activeTab, setActiveTab] =
    React.useState<SubjectWorkspaceTab>(initialTab);
  const [topics, setTopics] = React.useState<SyllabusTopicRow[]>(initialTopics);
  const [notes, setNotes] = React.useState<StudyNoteRow[]>(initialNotes);
  const [questions, setQuestions] =
    React.useState<QuestionRow[]>(initialQuestions);
  const [materials, setMaterials] =
    React.useState<CourseMaterialRow[]>(initialMaterials);
  const [flashcards, setFlashcards] =
    React.useState<FlashcardRow[]>(initialFlashcards);

  const [selectedNoteId, setSelectedNoteId] = React.useState<string | null>(
    initialNotes[0]?.id ?? null,
  );
  const [qbankTopicId, setQbankTopicId] = React.useState<string | null>(null);

  const [attemptsByQuestionId, setAttemptsByQuestionId] = React.useState<
    Record<string, QuestionAttemptRow>
  >(() => {
    const map: Record<string, QuestionAttemptRow> = {};
    // Keep the most recent attempt per question
    const sorted = [...initialAttempts].sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );
    for (const att of sorted) {
      if (!map[att.question_id]) {
        map[att.question_id] = att;
      }
    }
    return map;
  });

  const topicMap = React.useMemo(() => {
    const map: Record<string, SyllabusTopicRow> = {};
    for (const t of topics) map[t.id] = t;
    return map;
  }, [topics]);

  const { completedSubtopics, totalSubtopics, completionPct } =
    React.useMemo(() => {
      const parentIdsWithChildren = new Set<string>();
      for (const t of topics) {
        if (t.parent_id) parentIdsWithChildren.add(t.parent_id);
      }
      const leafTopics = topics.filter(
        (t) => !parentIdsWithChildren.has(t.id),
      );
      const completed = leafTopics.filter((t) => t.is_completed).length;
      const total = leafTopics.length;
      const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
      return {
        completedSubtopics: completed,
        totalSubtopics: total,
        completionPct: pct,
      };
    }, [topics]);

  const noteCountsByTopic = React.useMemo(() => {
    const map: Record<string, number> = {};
    for (const n of notes) {
      if (n.topic_id) map[n.topic_id] = (map[n.topic_id] ?? 0) + 1;
    }
    return map;
  }, [notes]);

  const questionCountsByTopic = React.useMemo(() => {
    const map: Record<string, number> = {};
    for (const q of questions) {
      if (q.topic_id) map[q.topic_id] = (map[q.topic_id] ?? 0) + 1;
    }
    return map;
  }, [questions]);

  const selectedNote = React.useMemo(() => {
    if (notes.length === 0) return null;
    return notes.find((n) => n.id === selectedNoteId) ?? notes[0];
  }, [notes, selectedNoteId]);

  const selectedNoteTopicLabel = React.useMemo(() => {
    if (!selectedNote?.topic_id) return undefined;
    const t = topicMap[selectedNote.topic_id];
    return t ? `${t.code} · ${t.title}` : undefined;
  }, [selectedNote, topicMap]);

  const handleOpenTopicNotes = (topicId: string) => {
    const matching = notes.find((n) => n.topic_id === topicId);
    if (matching) {
      setSelectedNoteId(matching.id);
    }
    setActiveTab('notes');
  };

  const handleOpenTopicQuestions = (topicId: string) => {
    setQbankTopicId(topicId);
    setActiveTab('qbank');
  };

  const handleAttemptSaved = (attempt: QuestionAttemptRow) => {
    setAttemptsByQuestionId((prev) => ({
      ...prev,
      [attempt.question_id]: attempt,
    }));
  };

  const handleSuiteGenerated = (result: {
    note: StudyNoteRow;
    questions: QuestionRow[];
    flashcards: FlashcardRow[];
    mode: 'append' | 'replace_topic';
    topicId: string | null;
  }) => {
    if (result.mode === 'replace_topic' && result.topicId) {
      setNotes((prev) => [
        result.note,
        ...prev.filter((n) => n.topic_id !== result.topicId),
      ]);
      setQuestions((prev) => [
        ...result.questions,
        ...prev.filter((q) => q.topic_id !== result.topicId),
      ]);
      setFlashcards((prev) => [
        ...result.flashcards,
        ...prev.filter((f) => f.topic_id !== result.topicId),
      ]);
    } else {
      setNotes((prev) => [result.note, ...prev]);
      setQuestions((prev) => [...result.questions, ...prev]);
      setFlashcards((prev) => [...result.flashcards, ...prev]);
    }

    setSelectedNoteId(result.note.id);
  };

  const selectedNoteIndex = React.useMemo(() => {
    if (!selectedNote) return -1;
    return notes.findIndex((n) => n.id === selectedNote.id);
  }, [notes, selectedNote]);

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mb-4 flex items-center gap-1.5 text-xs text-[#6E6E73] dark:text-[#98989D]"
      >
        <Link
          href="/dashboard"
          className="transition-colors hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]"
        >
          Dashboard
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
          {subject.name}
        </span>
      </nav>

      {/* Subject Header & Progress Bar */}
      <div className="glass-panel mb-6 flex flex-col gap-4 rounded-3xl p-5 sm:p-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight text-[#1D1D1F] sm:text-3xl dark:text-[#F5F5F7]">
              {subject.name}
            </h1>
            <Badge variant="default" className="font-mono">
              {subject.level}
            </Badge>
            <Badge variant="outline" className="font-mono">
              Group {subject.group_number}
            </Badge>
          </div>
          {subject.description && (
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#6E6E73] dark:text-[#98989D]">
              {subject.description}
            </p>
          )}
        </div>

        <div className="glass-surface w-full shrink-0 rounded-2xl px-4 py-3 lg:w-72">
          <div className="mb-1.5 flex items-center justify-between text-xs">
            <span className="text-[#6E6E73] dark:text-[#98989D]">
              Syllabus Checklist
            </span>
            <span className="font-mono font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              {completedSubtopics} / {totalSubtopics} ({completionPct}%)
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/[0.06] dark:bg-white/[0.08]">
            <div
              className="h-full rounded-full bg-[#1D1D1F] transition-all duration-300 dark:bg-[#F5F5F7]"
              style={{ width: `${completionPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* 5 Notion Workspace Tabs */}
      <Tabs
        idPrefix={`subject-tabs-${subject.slug}`}
        value={activeTab}
        onValueChange={(v) => setActiveTab(v as SubjectWorkspaceTab)}
      >
        <TabsList aria-label={`${subject.name} workspace sections`}>
          <TabsTrigger value="checklist">
            <CheckSquare className="h-3.5 w-3.5" />
            <span>Syllabus Checklist</span>
            <span className="font-mono text-[11px] text-[#6E6E73] dark:text-[#98989D]">
              {completedSubtopics}/{totalSubtopics}
            </span>
          </TabsTrigger>

          <TabsTrigger value="notes">
            <FileText className="h-3.5 w-3.5" />
            <span>Study Notes</span>
            <span className="font-mono text-[11px] text-[#6E6E73] dark:text-[#98989D]">
              {notes.length}
            </span>
          </TabsTrigger>

          <TabsTrigger value="qbank">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Question Bank</span>
            <span className="font-mono text-[11px] text-[#6E6E73] dark:text-[#98989D]">
              {questions.length}
            </span>
          </TabsTrigger>

          <TabsTrigger value="materials">
            <FolderOpen className="h-3.5 w-3.5" />
            <span>Classroom Materials</span>
            <span className="font-mono text-[11px] text-[#6E6E73] dark:text-[#98989D]">
              {materials.length}
            </span>
          </TabsTrigger>

          <TabsTrigger value="flashcards">
            <Layers className="h-3.5 w-3.5" />
            <span>Flashcards</span>
            <span className="font-mono text-[11px] text-[#6E6E73] dark:text-[#98989D]">
              {flashcards.length}
            </span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="checklist">
          <SyllabusChecklistTree
            userId={userId}
            topics={topics}
            noteCountsByTopic={noteCountsByTopic}
            questionCountsByTopic={questionCountsByTopic}
            onTopicsChange={setTopics}
            onSelectTopicNotes={handleOpenTopicNotes}
            onSelectTopicQuestions={handleOpenTopicQuestions}
          />
        </TabsContent>

        <TabsContent value="notes">
          {notes.length > 0 && selectedNote ? (
            <div className="space-y-4">
              {/* Sleek Top Frosted Study Guide Switcher Bar (frees full horizontal width for notes & diagrams) */}
              <div className="glass-surface flex flex-col gap-2.5 rounded-2xl p-3">
                <div className="flex flex-wrap items-center justify-between gap-2 px-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6E6E73] dark:text-[#98989D]">
                      Study Guides
                    </span>
                    <span className="glass-pill rounded-full px-2 py-0.5 font-mono text-[10.5px] font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
                      {selectedNoteIndex >= 0 ? selectedNoteIndex + 1 : 1} of{' '}
                      {notes.length}
                    </span>
                  </div>

                  {notes.length > 1 && (
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        disabled={selectedNoteIndex <= 0}
                        onClick={() => {
                          if (selectedNoteIndex > 0) {
                            setSelectedNoteId(notes[selectedNoteIndex - 1].id);
                          }
                        }}
                        aria-label="Previous study guide"
                        className="glass-pill inline-flex h-7 items-center gap-1 rounded-full px-2.5 text-xs font-medium text-[#1D1D1F] transition-all hover:bg-white/95 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 dark:text-[#F5F5F7] dark:hover:bg-white/[0.12]"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <span>Prev</span>
                      </button>
                      <button
                        type="button"
                        disabled={
                          selectedNoteIndex < 0 ||
                          selectedNoteIndex >= notes.length - 1
                        }
                        onClick={() => {
                          if (
                            selectedNoteIndex >= 0 &&
                            selectedNoteIndex < notes.length - 1
                          ) {
                            setSelectedNoteId(notes[selectedNoteIndex + 1].id);
                          }
                        }}
                        aria-label="Next study guide"
                        className="glass-pill inline-flex h-7 items-center gap-1 rounded-full px-2.5 text-xs font-medium text-[#1D1D1F] transition-all hover:bg-white/95 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 dark:text-[#F5F5F7] dark:hover:bg-white/[0.12]"
                      >
                        <span>Next</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex max-w-full items-center gap-2 overflow-x-auto pb-1">
                  {notes.map((note) => {
                    const topic = note.topic_id
                      ? topicMap[note.topic_id]
                      : undefined;
                    const active = note.id === selectedNote.id;

                    return (
                      <button
                        key={note.id}
                        type="button"
                        onClick={() => setSelectedNoteId(note.id)}
                        className={`flex max-w-[260px] shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-left transition-all cursor-pointer ${
                          active
                            ? 'bg-[#1D1D1F] text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                            : 'glass-pill text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D] dark:hover:text-[#F5F5F7]'
                        }`}
                      >
                        {topic && (
                          <span
                            className={`shrink-0 rounded-full px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase ${
                              active
                                ? 'bg-white/15 text-white dark:bg-black/15 dark:text-[#111113]'
                                : 'bg-black/[0.05] text-[#6E6E73] dark:bg-white/[0.08] dark:text-[#98989D]'
                            }`}
                          >
                            {topic.code}
                          </span>
                        )}
                        <span className="truncate text-xs font-medium">
                          {note.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Screen-Fitting Read-Only Notion Study Note Viewer */}
              <NotionNoteViewer
                note={selectedNote}
                topicLabel={selectedNoteTopicLabel}
              />
            </div>
          ) : (
            <div className="glass-surface rounded-2xl border-dashed px-6 py-12 text-center">
              <BookOpen className="mx-auto mb-2.5 h-6 w-6 text-[#6E6E73] dark:text-[#98989D]" />
              <p className="text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
                No study notes yet for {subject.name}.
              </p>
              <p className="mt-1 text-xs text-[#6E6E73] dark:text-[#98989D]">
                Select classroom materials or paste lecture notes to generate a
                study guide with interactive diagrams.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={() => setActiveTab('materials')}
              >
                Open Classroom Materials
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="qbank">
          <QuestionBankTab
            questions={questions}
            topics={topics}
            paperTypes={paperTypes}
            attemptsByQuestionId={attemptsByQuestionId}
            initialTopicId={qbankTopicId}
            onAttemptSaved={handleAttemptSaved}
          />
        </TabsContent>

        <TabsContent value="materials">
          <MaterialsSyncTab
            subjectId={subject.id}
            topics={topics}
            materials={materials}
            onMaterialsChange={setMaterials}
            onSuiteGenerated={handleSuiteGenerated}
          />
        </TabsContent>

        <TabsContent value="flashcards">
          <FlashcardsTab
            userId={userId}
            flashcards={flashcards}
            topics={topics}
            onFlashcardsChange={setFlashcards}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
