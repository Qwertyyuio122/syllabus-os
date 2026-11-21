import { NextResponse } from 'next/server';
import {
  getRubricForProject,
  type IBAssessmentRubric,
} from '@/data/ib-rubrics';
import { createClient } from '@/lib/supabase/server';
import {
  GeminiConfigError,
  GeminiGenerationError,
  generateStructuredJson,
  getGeminiErrorStatus,
  ThinkingLevel,
} from '@/lib/gemini/client';
import { buildCoreProjectReviewPrompts } from '@/lib/gemini/prompts';
import {
  CORE_REVIEW_JSON_SCHEMA,
  CoreReviewOutputZodSchema,
  GradeCoreProjectRequestSchema,
} from '@/lib/gemini/schemas';
import type {
  CoreAiReview,
  CoreMilestone,
  CoreProjectRow,
} from '@/types/database';

export const maxDuration = 60;

function formatRubricCriteria(rubric: IBAssessmentRubric): string {
  const sections: string[] = [];

  if (rubric.examinerNotes.length > 0) {
    sections.push(
      'Official IB Examiner Notes:\n' +
        rubric.examinerNotes.map((n) => `- ${n}`).join('\n'),
    );
  }

  for (const criterion of rubric.criteria) {
    const bands = criterion.descriptors
      .map((d) => `  * [${d.marks}] ${d.levelLabel}: ${d.descriptor}`)
      .join('\n');
    const tips =
      criterion.examinerTips.length > 0
        ? `  Tips: ${criterion.examinerTips.join(' | ')}`
        : '';

    sections.push(
      [
        `Criterion ${criterion.code}: ${criterion.name} (Max ${criterion.maxMarks} marks)`,
        `Summary: ${criterion.summary}`,
        bands,
        tips,
      ]
        .filter(Boolean)
        .join('\n'),
    );
  }

  if (rubric.casLearningOutcomes && rubric.casLearningOutcomes.length > 0) {
    sections.push(
      'IB CAS Learning Outcomes:\n' +
        rubric.casLearningOutcomes
          .map((lo) => `- ${lo.code} (${lo.title}): ${lo.description}`)
          .join('\n'),
    );
  }

  if (rubric.casStrands && rubric.casStrands.length > 0) {
    sections.push(
      'IB CAS Strands:\n' +
        rubric.casStrands.map((s) => `- ${s.name}: ${s.description}`).join('\n'),
    );
  }

  return sections.join('\n\n');
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

    const parsed = GradeCoreProjectRequestSchema.safeParse(rawBody);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error:
            parsed.error.issues[0]?.message ??
            'Invalid core project review request.',
        },
        { status: 400 },
      );
    }

    const { projectId, rubricVariant } = parsed.data;

    const { data: projectRow, error: projectError } = await supabase
      .from('core_projects')
      .select('*')
      .eq('id', projectId)
      .eq('user_id', user.id)
      .maybeSingle();

    if (projectError) {
      return NextResponse.json(
        { error: `Failed to fetch core project: ${projectError.message}` },
        { status: 500 },
      );
    }
    if (!projectRow) {
      return NextResponse.json(
        { error: 'Core project not found.' },
        { status: 404 },
      );
    }

    const project = projectRow as CoreProjectRow;
    const rubric = getRubricForProject(
      project.project_type,
      project.subject_slug,
      rubricVariant,
    );

    const rubricCriteriaSum = rubric.criteria.reduce(
      (sum, c) => sum + c.maxMarks,
      0,
    );
    const effectiveTotalMax =
      rubric.totalMaxMarks > 0
        ? rubric.totalMaxMarks
        : Math.max(1, rubricCriteriaSum);

    const milestones: CoreMilestone[] = Array.isArray(project.milestones)
      ? project.milestones
      : [];

    const { systemInstruction, userPrompt } = buildCoreProjectReviewPrompts({
      project: {
        project_type: project.project_type,
        subject_slug: project.subject_slug,
        title: project.title,
        research_question_or_prompt: project.research_question_or_prompt,
        word_count_target: project.word_count_target,
        current_word_count: project.current_word_count,
        milestones,
        draft_excerpt: project.draft_excerpt,
      },
      rubricTitle: rubric.title,
      rubricTotalMarks: effectiveTotalMax,
      rubricSummary: `${rubric.overview} (${rubric.wordLimit}; ${rubric.weightingNote})`,
      rubricCriteriaText: formatRubricCriteria(rubric),
    });

    const aiResult = await generateStructuredJson({
      systemInstruction,
      contents: userPrompt,
      thinkingLevel: ThinkingLevel.HIGH,
      responseJsonSchema: CORE_REVIEW_JSON_SCHEMA,
      zodSchema: CoreReviewOutputZodSchema,
      temperature: 0.15,
    });

    // Align criterion bounds against the official rubric
    const clampedCriteria = aiResult.criterion_results.map((item, idx) => {
      const matched =
        rubric.criteria.find(
          (c) =>
            item.criterion.toLowerCase().includes(c.name.toLowerCase()) ||
            item.criterion.toLowerCase().startsWith(`criterion ${c.code.toLowerCase()}`) ||
            item.criterion.toLowerCase().startsWith(`${c.code.toLowerCase()}:`),
        ) ?? rubric.criteria[idx];

      const officialMax = matched ? matched.maxMarks : item.max_marks;
      const officialLabel = matched
        ? `Criterion ${matched.code}: ${matched.name}`
        : item.criterion;
      const clampedAwarded = Math.max(
        0,
        Math.min(officialMax, Math.round(item.awarded)),
      );

      return {
        criterion: officialLabel,
        awarded: clampedAwarded,
        max_marks: officialMax,
        justification: item.justification,
        improvements: item.improvements,
      };
    });

    const totalAwarded = Math.max(
      0,
      Math.min(
        effectiveTotalMax,
        clampedCriteria.reduce((sum, c) => sum + c.awarded, 0),
      ),
    );

    const review: CoreAiReview = {
      total_awarded: totalAwarded,
      total_max: effectiveTotalMax,
      overall_summary: aiResult.overall_summary,
      criterion_results: clampedCriteria,
      priority_actions: aiResult.priority_actions,
      reviewed_at: new Date().toISOString(),
    };

    const { data: updatedProject, error: updateError } = await supabase
      .from('core_projects')
      .update({ latest_ai_review: review })
      .eq('id', project.id)
      .eq('user_id', user.id)
      .select('*')
      .single();

    if (updateError || !updatedProject) {
      return NextResponse.json(
        {
          error:
            updateError?.message ??
            'Failed to save core project AI review.',
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      review,
      project: updatedProject,
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
