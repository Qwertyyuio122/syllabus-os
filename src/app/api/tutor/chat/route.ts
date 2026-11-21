import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import {
  GeminiConfigError,
  GeminiGenerationError,
  generateStructuredJson,
  getGeminiErrorStatus,
  ThinkingLevel,
} from '@/lib/gemini/client';
import { buildTutorChatPrompts } from '@/lib/gemini/prompts';
import {
  TUTOR_REPLY_JSON_SCHEMA,
  TutorChatRequestSchema,
  TutorReplyOutputZodSchema,
} from '@/lib/gemini/schemas';
import type {
  GradingBreakdown,
  QuestionAttemptRow,
  QuestionMarkscheme,
  QuestionRow,
  TutorMessage,
} from '@/types/database';

export const maxDuration = 60;

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let rawBody: unknown;
    try {
      rawBody = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON request body.' },
        { status: 400 },
      );
    }

    const parsed = TutorChatRequestSchema.safeParse(rawBody);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Invalid tutor request.' },
        { status: 400 },
      );
    }

    const { attemptId, message } = parsed.data;

    const { data: attemptRow, error: attemptError } = await supabase
      .from('question_attempts')
      .select('*')
      .eq('id', attemptId)
      .eq('user_id', user.id)
      .maybeSingle();

    if (attemptError) {
      return NextResponse.json(
        { error: `Failed to fetch question attempt: ${attemptError.message}` },
        { status: 500 },
      );
    }
    if (!attemptRow) {
      return NextResponse.json(
        { error: 'Question attempt not found.' },
        { status: 404 },
      );
    }

    const attempt = attemptRow as QuestionAttemptRow;

    const { data: questionRow, error: questionError } = await supabase
      .from('questions')
      .select('*')
      .eq('id', attempt.question_id)
      .eq('user_id', user.id)
      .maybeSingle();

    if (questionError) {
      return NextResponse.json(
        { error: `Failed to fetch question: ${questionError.message}` },
        { status: 500 },
      );
    }
    if (!questionRow) {
      return NextResponse.json(
        { error: 'Linked question not found.' },
        { status: 404 },
      );
    }

    const question = questionRow as QuestionRow;

    const [{ data: subject }, topicRes] = await Promise.all([
      supabase
        .from('subjects')
        .select('name, level')
        .eq('id', question.subject_id)
        .eq('user_id', user.id)
        .maybeSingle(),
      question.topic_id
        ? supabase
            .from('syllabus_topics')
            .select('code, title')
            .eq('id', question.topic_id)
            .eq('user_id', user.id)
            .maybeSingle()
        : Promise.resolve({ data: null }),
    ]);

    const existingMessages: TutorMessage[] = Array.isArray(attempt.tutor_messages)
      ? attempt.tutor_messages
      : [];

    const { systemInstruction, userPrompt } = buildTutorChatPrompts({
      subjectName: subject?.name ?? 'IB Diploma Subject',
      level: (subject?.level as 'HL' | 'SL') ?? 'HL',
      topicLabel: topicRes.data
        ? `${topicRes.data.code} ${topicRes.data.title}`
        : null,
      question: {
        paper_type: question.paper_type,
        command_term: question.command_term,
        max_marks: question.max_marks,
        stimulus_markdown: question.stimulus_markdown,
        question_markdown: question.question_markdown,
        mcq_options: question.mcq_options,
        correct_mcq_option: question.correct_mcq_option,
        markscheme: question.markscheme as QuestionMarkscheme,
      },
      attempt: {
        user_answer: attempt.user_answer,
        awarded_marks: attempt.awarded_marks,
        max_marks: attempt.max_marks,
        grading_breakdown: attempt.grading_breakdown as GradingBreakdown,
        tutor_messages: existingMessages,
      },
      userMessage: message,
    });

    const aiResult = await generateStructuredJson({
      systemInstruction,
      contents: userPrompt,
      thinkingLevel: ThinkingLevel.MEDIUM,
      responseJsonSchema: TUTOR_REPLY_JSON_SCHEMA,
      zodSchema: TutorReplyOutputZodSchema,
      temperature: 0.3,
    });

    const now = Date.now();
    const userMsg: TutorMessage = {
      role: 'user',
      content: message,
      created_at: new Date(now).toISOString(),
    };
    const assistantMsg: TutorMessage = {
      role: 'assistant',
      content: aiResult.reply,
      created_at: new Date(now + 1).toISOString(),
    };

    const updatedMessages: TutorMessage[] = [
      ...existingMessages,
      userMsg,
      assistantMsg,
    ];

    const { data: updatedAttempt, error: updateError } = await supabase
      .from('question_attempts')
      .update({ tutor_messages: updatedMessages })
      .eq('id', attempt.id)
      .eq('user_id', user.id)
      .select('*')
      .single();

    if (updateError || !updatedAttempt) {
      return NextResponse.json(
        { error: updateError?.message ?? 'Failed to save tutor reply.' },
        { status: 500 },
      );
    }

    return NextResponse.json({
      reply: aiResult.reply,
      message: assistantMsg,
      tutor_messages: updatedMessages,
      attempt: updatedAttempt,
    });
  } catch (error) {
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
