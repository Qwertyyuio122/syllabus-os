import { NextResponse } from 'next/server';
import { getSubjectConfig } from '@/data/ib-syllabi';
import { createClient } from '@/lib/supabase/server';
import {
  GeminiConfigError,
  GeminiGenerationError,
  generateStructuredJson,
  getGeminiErrorStatus,
  ThinkingLevel,
} from '@/lib/gemini/client';
import { buildGenerateSuitePrompts } from '@/lib/gemini/prompts';
import {
  GenerateSuiteRequestSchema,
  GeneratedSuiteZodSchema,
  STUDY_SUITE_JSON_SCHEMA,
} from '@/lib/gemini/schemas';
import type { SyllabusTopicRow } from '@/types/database';

export const maxDuration = 60;

export async function POST(request: Request) {
  let activeMaterialIds: string[] = [];
  let activeUserId: string | null = null;
  let supabaseClient: Awaited<ReturnType<typeof createClient>> | null = null;

  const markMaterialsFailed = async () => {
    if (!supabaseClient || !activeUserId || activeMaterialIds.length === 0) {
      return;
    }
    try {
      await supabaseClient
        .from('course_materials')
        .update({ generation_status: 'failed' })
        .in('id', activeMaterialIds)
        .eq('user_id', activeUserId);
    } catch {
      // Best-effort status recovery
    }
  };

  try {
    const supabase = await createClient();
    supabaseClient = supabase;

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    activeUserId = user.id;

    let rawBody: unknown;
    try {
      rawBody = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON request body.' },
        { status: 400 },
      );
    }

    const parsed = GenerateSuiteRequestSchema.safeParse(rawBody);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error:
            parsed.error.issues[0]?.message ?? 'Invalid suite generation input.',
        },
        { status: 400 },
      );
    }

    const { subjectId, topicId, materialIds, mode } = parsed.data;
    const uniqueMaterialIds = Array.from(new Set(materialIds));

    const { data: subject, error: subjectError } = await supabase
      .from('subjects')
      .select('id, slug, name, level')
      .eq('id', subjectId)
      .eq('user_id', user.id)
      .maybeSingle();

    if (subjectError) {
      return NextResponse.json(
        { error: `Failed to verify subject: ${subjectError.message}` },
        { status: 500 },
      );
    }
    if (!subject) {
      return NextResponse.json(
        { error: 'Subject not found.' },
        { status: 404 },
      );
    }

    const validTopicId = topicId ?? null;

    const [{ data: topicRows, error: topicsError }, { data: materials, error: materialsError }] =
      await Promise.all([
        supabase
          .from('syllabus_topics')
          .select('id, parent_id, code, title, guidance_notes, sort_order')
          .eq('subject_id', subject.id)
          .eq('user_id', user.id)
          .order('sort_order', { ascending: true }),
        supabase
          .from('course_materials')
          .select('id, file_name, file_type, extracted_text')
          .in('id', uniqueMaterialIds)
          .eq('subject_id', subject.id)
          .eq('user_id', user.id),
      ]);

    if (topicsError) {
      return NextResponse.json(
        { error: `Failed to load syllabus topics: ${topicsError.message}` },
        { status: 500 },
      );
    }
    if (materialsError) {
      return NextResponse.json(
        { error: `Failed to load classroom materials: ${materialsError.message}` },
        { status: 500 },
      );
    }

    if (!materials || materials.length !== uniqueMaterialIds.length) {
      return NextResponse.json(
        {
          error:
            'One or more selected classroom materials were not found for this subject.',
        },
        { status: 404 },
      );
    }

    const typedTopics = (topicRows ?? []) as Pick<
      SyllabusTopicRow,
      'id' | 'parent_id' | 'code' | 'title' | 'guidance_notes' | 'sort_order'
    >[];

    let targetTopic: {
      code: string;
      title: string;
      guidance_notes: string | null;
    } | null = null;

    if (validTopicId) {
      const matched = typedTopics.find((t) => t.id === validTopicId);
      if (!matched) {
        return NextResponse.json(
          { error: 'Selected syllabus topic was not found for this subject.' },
          { status: 404 },
        );
      }
      targetTopic = {
        code: matched.code,
        title: matched.title,
        guidance_notes: matched.guidance_notes,
      };
    }

    // Mark selected materials as processing before calling Gemini
    activeMaterialIds = uniqueMaterialIds;
    const { error: statusUpdateError } = await supabase
      .from('course_materials')
      .update({ generation_status: 'processing' })
      .in('id', uniqueMaterialIds)
      .eq('user_id', user.id);

    if (statusUpdateError) {
      return NextResponse.json(
        { error: `Failed to update material status: ${statusUpdateError.message}` },
        { status: 500 },
      );
    }

    const subjectConfig = getSubjectConfig(subject.slug);
    const paperTypes = subjectConfig?.examPaperTypes ?? [
      'Paper 1',
      'Paper 2',
    ];

    const syllabusTopicsSummary = typedTopics
      .slice(0, 80)
      .map((t) => `${t.parent_id ? '  - ' : ''}${t.code}: ${t.title}`)
      .join('\n');

    const { systemInstruction, userPrompt } = buildGenerateSuitePrompts({
      subjectName: subject.name,
      subjectSlug: subject.slug,
      level: subject.level as 'HL' | 'SL',
      paperTypes,
      targetTopic,
      syllabusTopicsSummary:
        syllabusTopicsSummary || '(No syllabus topics listed)',
      materials: materials.map((m) => ({
        id: m.id,
        fileName: m.file_name,
        fileType: m.file_type,
        extractedText: m.extracted_text,
      })),
    });

    const generated = await generateStructuredJson({
      systemInstruction,
      contents: userPrompt,
      thinkingLevel: ThinkingLevel.HIGH,
      responseJsonSchema: STUDY_SUITE_JSON_SCHEMA,
      zodSchema: GeneratedSuiteZodSchema,
      temperature: 0.25,
    });

    let nextVersion = 1;
    if (mode === 'replace_topic' && validTopicId) {
      const [delNotes, delQuestions, delFlashcards] = await Promise.all([
        supabase
          .from('study_notes')
          .delete()
          .eq('user_id', user.id)
          .eq('subject_id', subject.id)
          .eq('topic_id', validTopicId),
        supabase
          .from('questions')
          .delete()
          .eq('user_id', user.id)
          .eq('subject_id', subject.id)
          .eq('topic_id', validTopicId),
        supabase
          .from('flashcards')
          .delete()
          .eq('user_id', user.id)
          .eq('subject_id', subject.id)
          .eq('topic_id', validTopicId),
      ]);

      if (delNotes.error || delQuestions.error || delFlashcards.error) {
        await markMaterialsFailed();
        const errMsg =
          delNotes.error?.message ||
          delQuestions.error?.message ||
          delFlashcards.error?.message ||
          'Failed to clear existing topic content.';
        return NextResponse.json({ error: errMsg }, { status: 500 });
      }
    } else {
      let versionQuery = supabase
        .from('study_notes')
        .select('version')
        .eq('user_id', user.id)
        .eq('subject_id', subject.id)
        .order('version', { ascending: false })
        .limit(1);

      versionQuery = validTopicId
        ? versionQuery.eq('topic_id', validTopicId)
        : versionQuery.is('topic_id', null);

      const { data: latestNotes } = await versionQuery;
      const maxPrev = latestNotes?.[0]?.version ?? 0;
      nextVersion = maxPrev + 1;
    }

    const { data: insertedNote, error: noteInsertError } = await supabase
      .from('study_notes')
      .insert({
        user_id: user.id,
        subject_id: subject.id,
        topic_id: validTopicId,
        title: generated.studyNote.title,
        summary: generated.studyNote.summary,
        blocks: generated.studyNote.blocks,
        source_material_ids: uniqueMaterialIds,
        version: nextVersion,
      })
      .select('*')
      .single();

    if (noteInsertError || !insertedNote) {
      await markMaterialsFailed();
      return NextResponse.json(
        {
          error:
            noteInsertError?.message ?? 'Failed to insert generated study note.',
        },
        { status: 500 },
      );
    }

    const questionRowsToInsert = generated.questions.map((q) => {
      const hasMcqOptions =
        Array.isArray(q.mcq_options) && q.mcq_options.length > 0;
      const cleanCorrectOption =
        hasMcqOptions && q.correct_mcq_option?.trim()
          ? q.correct_mcq_option.trim().toUpperCase()
          : null;
      const cleanStimulus =
        q.stimulus_markdown && q.stimulus_markdown.trim()
          ? q.stimulus_markdown.trim()
          : null;

      return {
        user_id: user.id,
        subject_id: subject.id,
        topic_id: validTopicId,
        paper_type: q.paper_type,
        command_term: q.command_term,
        difficulty: q.difficulty,
        max_marks: q.max_marks,
        stimulus_markdown: cleanStimulus,
        question_markdown: q.question_markdown,
        mcq_options: hasMcqOptions ? q.mcq_options : null,
        correct_mcq_option: cleanCorrectOption,
        markscheme: q.markscheme,
        source_material_ids: uniqueMaterialIds,
      };
    });

    const flashcardRowsToInsert = generated.flashcards.map((fc) => ({
      user_id: user.id,
      subject_id: subject.id,
      topic_id: validTopicId,
      front_markdown: fc.front_markdown,
      back_markdown: fc.back_markdown,
      mastered: false,
    }));

    const [
      { data: insertedQuestions, error: qInsertError },
      { data: insertedFlashcards, error: fcInsertError },
    ] = await Promise.all([
      supabase.from('questions').insert(questionRowsToInsert).select('*'),
      supabase.from('flashcards').insert(flashcardRowsToInsert).select('*'),
    ]);

    if (qInsertError || fcInsertError) {
      await markMaterialsFailed();
      return NextResponse.json(
        {
          error:
            qInsertError?.message ||
            fcInsertError?.message ||
            'Failed to insert generated questions or flashcards.',
        },
        { status: 500 },
      );
    }

    const { error: finalStatusError } = await supabase
      .from('course_materials')
      .update({
        generation_status: 'generated',
        last_generated_at: new Date().toISOString(),
      })
      .in('id', uniqueMaterialIds)
      .eq('user_id', user.id);

    if (finalStatusError) {
      return NextResponse.json(
        {
          error: `Generated suite saved, but failed to mark materials generated: ${finalStatusError.message}`,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      note: insertedNote,
      studyNote: insertedNote,
      questions: insertedQuestions ?? [],
      flashcards: insertedFlashcards ?? [],
    });
  } catch (error) {
    await markMaterialsFailed();

    if (
      error instanceof GeminiConfigError ||
      error instanceof GeminiGenerationError
    ) {
      return NextResponse.json(
        { error: error.message },
        { status: getGeminiErrorStatus(error) },
      );
    }
    const message =
      error instanceof Error ? error.message : 'Unexpected server error.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
