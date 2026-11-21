'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  CheckSquare,
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

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-8 sm:py-8">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mb-4 flex items-center gap-1.5 text-xs text-[#787774] dark:text-[#9B9A97]"
      >
        <Link
          href="/dashboard"
          className="transition-colors hover:text-[#37352F] dark:hover:text-[#EBEBEB]"
        >
          Dashboard
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-[#37352F] dark:text-[#EBEBEB]">
          {subject.name}
        </span>
      </nav>

      {/* Subject Header & Progress Bar */}
      <div className="mb-6 flex flex-col gap-4 border-b border-[#E6E6E4] pb-5 lg:flex-row lg:items-end lg:justify-between dark:border-[#2E2E2E]">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight text-[#37352F] sm:text-3xl dark:text-[#EBEBEB]">
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
            <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-[#787774] dark:text-[#9B9A97]">
              {subject.description}
            </p>
          )}
        </div>

        <div className="w-full shrink-0 rounded-lg border border-[#E6E6E4] bg-[#FBFBFA] px-4 py-3 lg:w-72 dark:border-[#2E2E2E] dark:bg-[#202020]">
          <div className="mb-1.5 flex items-center justify-between text-xs">
            <span className="text-[#787774] dark:text-[#9B9A97]">
              Syllabus Checklist
            </span>
            <span className="font-mono font-semibold text-[#37352F] dark:text-[#EBEBEB]">
              {completedSubtopics} / {totalSubtopics} ({completionPct}%)
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#F1F1EF] dark:bg-[#2A2A2A]">
            <div
              className="h-full rounded-full bg-[#37352F] transition-all duration-300 dark:bg-[#EBEBEB]"
              style={{ width: `${completionPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* 5 Notion Workspace Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={(v) => setActiveTab(v as SubjectWorkspaceTab)}
      >
        <TabsList aria-label={`${subject.name} workspace sections`}>
          <TabsTrigger value="checklist">
            <CheckSquare className="h-3.5 w-3.5" />
            <span>Syllabus Checklist</span>
            <span className="font-mono text-[11px] text-[#787774] dark:text-[#9B9A97]">
              {completedSubtopics}/{totalSubtopics}
            </span>
          </TabsTrigger>

          <TabsTrigger value="notes">
            <FileText className="h-3.5 w-3.5" />
            <span>Study Notes</span>
            <span className="font-mono text-[11px] text-[#787774] dark:text-[#9B9A97]">
              {notes.length}
            </span>
          </TabsTrigger>

          <TabsTrigger value="qbank">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Question Bank</span>
            <span className="font-mono text-[11px] text-[#787774] dark:text-[#9B9A97]">
              {questions.length}
            </span>
          </TabsTrigger>

          <TabsTrigger value="materials">
            <FolderOpen className="h-3.5 w-3.5" />
            <span>Classroom Materials</span>
            <span className="font-mono text-[11px] text-[#787774] dark:text-[#9B9A97]">
              {materials.length}
            </span>
          </TabsTrigger>

          <TabsTrigger value="flashcards">
            <Layers className="h-3.5 w-3.5" />
            <span>Flashcards</span>
            <span className="font-mono text-[11px] text-[#787774] dark:text-[#9B9A97]">
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
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
              {/* Topic / Note Selector Sidebar */}
              <aside className="w-full shrink-0 lg:sticky lg:top-6 lg:w-64">
                <div className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-wider text-[#787774] dark:text-[#9B9A97]">
                  Study Guides ({notes.length})
                </div>
                <div className="flex gap-1.5 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
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
                        className={`shrink-0 rounded-md border px-3 py-2 text-left transition-colors cursor-pointer lg:w-full ${
                          active
                            ? 'border-[#37352F] bg-[#F1F1EF] text-[#37352F] dark:border-[#EBEBEB] dark:bg-[#2A2A2A] dark:text-[#EBEBEB]'
                            : 'border-[#E6E6E4] bg-white text-[#787774] hover:bg-[#FBFBFA] hover:text-[#37352F] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#9B9A97] dark:hover:bg-[#202020] dark:hover:text-[#EBEBEB]'
                        }`}
                      >
                        {topic && (
                          <div className="font-mono text-[10px] uppercase tracking-wider text-[#787774] dark:text-[#9B9A97]">
                            {topic.code}
                          </div>
                        )}
                        <div className="line-clamp-2 text-xs font-medium leading-snug text-[#37352F] dark:text-[#EBEBEB]">
                          {note.title}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </aside>

              {/* Read-Only Notion Study Note Viewer */}
              <div className="min-w-0 flex-1">
                <NotionNoteViewer
                  note={selectedNote}
                  topicLabel={selectedNoteTopicLabel}
                />
              </div>
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-[#E6E6E4] px-6 py-12 text-center dark:border-[#2E2E2E]">
              <BookOpen className="mx-auto mb-2.5 h-6 w-6 text-[#787774] dark:text-[#9B9A97]" />
              <p className="text-sm font-medium text-[#37352F] dark:text-[#EBEBEB]">
                No study notes yet for {subject.name}.
              </p>
              <p className="mt-1 text-xs text-[#787774] dark:text-[#9B9A97]">
                Select classroom materials or paste lecture notes to generate a
                Notion study guide with interactive diagrams.
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
