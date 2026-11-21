import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import {
  GeminiConfigError,
  GeminiGenerationError,
  generateStructuredJson,
  getGeminiErrorStatus,
  ThinkingLevel,
} from '@/lib/gemini/client';
import { buildGradeQuestionPrompts } from '@/lib/gemini/prompts';
import {
  GradeQuestionRequestSchema,
  QUESTION_GRADE_JSON_SCHEMA,
  QuestionGradeOutputZodSchema,
} from '@/lib/gemini/schemas';
import type {
  GradingBreakdown,
  QuestionMarkscheme,
  QuestionRow,
} from '@/types/database';

export const maxDuration = 60;

function normalizeSelectedMcqLetter(rawAnswer: string): string {
  const trimmed = rawAnswer.trim().toUpperCase();
  const match = /^([A-D])(?:\b|[:.)\s]|$)/.exec(trimmed);
  return match ? match[1] : trimmed;
}

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

    const parsed = GradeQuestionRequestSchema.safeParse(rawBody);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Invalid grade request.' },
        { status: 400 },
      );
    }

    const { questionId, userAnswer } = parsed.data;

    const { data: questionRow, error: questionError } = await supabase
      .from('questions')
      .select('*')
      .eq('id', questionId)
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
        { error: 'Question not found.' },
        { status: 404 },
      );
    }

    const question = questionRow as QuestionRow;
    const markscheme = question.markscheme as QuestionMarkscheme;

    const { data: subject } = await supabase
      .from('subjects')
      .select('name, level')
      .eq('id', question.subject_id)
      .eq('user_id', user.id)
      .maybeSingle();

    const { systemInstruction, userPrompt } = buildGradeQuestionPrompts({
      subjectName: subject?.name ?? 'IB Diploma Subject',
      level: (subject?.level as 'HL' | 'SL') ?? 'HL',
      question: {
        paper_type: question.paper_type,
        command_term: question.command_term,
        difficulty: question.difficulty,
        max_marks: question.max_marks,
        stimulus_markdown: question.stimulus_markdown,
        question_markdown: question.question_markdown,
        mcq_options: question.mcq_options,
        correct_mcq_option: question.correct_mcq_option,
        markscheme,
      },
      userAnswer,
    });

    const aiResult = await generateStructuredJson({
      systemInstruction,
      contents: userPrompt,
      thinkingLevel: ThinkingLevel.HIGH,
      responseJsonSchema: QUESTION_GRADE_JSON_SCHEMA,
      zodSchema: QuestionGradeOutputZodSchema,
      temperature: 0.1,
    });

    // Align and clamp marks cleanly against official markscheme bounds
    const maxByCode = new Map<string, number>();
    for (const mp of markscheme.marking_points ?? []) {
      maxByCode.set(mp.code.trim().toUpperCase(), mp.marks);
    }

    let normalizedPoints = aiResult.grading_breakdown.point_results.map(
      (point) => {
        const expectedMax =
          maxByCode.get(point.code.trim().toUpperCase()) ??
          point.max_marks ??
          question.max_marks;
        const clampedAwarded = Math.max(
          0,
          Math.min(expectedMax, Math.round(point.awarded)),
        );
        return {
          code: point.code,
          criterion: point.criterion,
          awarded: clampedAwarded,
          max_marks: expectedMax,
          feedback: point.feedback,
        };
      },
    );

    let finalAwardedMarks = Math.max(
      0,
      Math.min(
        question.max_marks,
        normalizedPoints.reduce((sum, p) => sum + p.awarded, 0),
      ),
    );

    // Deterministic verification for MCQ questions
    if (question.correct_mcq_option) {
      const expected = question.correct_mcq_option.trim().toUpperCase();
      const chosen = normalizeSelectedMcqLetter(userAnswer);
      const isCorrect = chosen === expected;
      finalAwardedMarks = isCorrect ? question.max_marks : 0;
      if (normalizedPoints.length === 1) {
        normalizedPoints = [
          {
            ...normalizedPoints[0],
            awarded: finalAwardedMarks,
            max_marks: question.max_marks,
          },
        ];
      }
    }

    const gradingBreakdown: GradingBreakdown = {
      point_results: normalizedPoints,
      command_term_feedback: aiResult.grading_breakdown.command_term_feedback,
      missing_keywords: aiResult.grading_breakdown.missing_keywords,
      model_answer:
        aiResult.grading_breakdown.model_answer || markscheme.model_answer,
    };

    const { data: attempt, error: insertError } = await supabase
      .from('question_attempts')
      .insert({
        user_id: user.id,
        question_id: question.id,
        user_answer: userAnswer,
        awarded_marks: finalAwardedMarks,
        max_marks: question.max_marks,
        grading_breakdown: gradingBreakdown,
        tutor_messages: [],
      })
      .select('*')
      .single();

    if (insertError || !attempt) {
      return NextResponse.json(
        { error: insertError?.message ?? 'Failed to save question attempt.' },
        { status: 500 },
      );
    }

    return NextResponse.json({ attempt });
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
