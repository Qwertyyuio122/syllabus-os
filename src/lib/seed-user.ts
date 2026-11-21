import type { SupabaseClient } from '@supabase/supabase-js';
import { CLASSROOM_SEED_BY_SUBJECT, CORE_STARTER_OVERRIDES } from '@/data/classroom-seed';
import type {
  CoreStarterProjectOverride,
  SubjectClassroomSeed,
} from '@/data/classroom-seed/types';
import { IB_SUBJECTS_CONFIG } from '@/data/ib-syllabi';
import type { CoreMilestone, CoreProjectType, SubjectSlug } from '@/types/database';

function mergeGuidanceNotes(base: string, classroomNote?: string): string {
  const trimmedBase = base.trim();
  const trimmedExtra = classroomNote?.trim();
  if (!trimmedExtra) {
    return trimmedBase;
  }
  if (!trimmedBase) {
    return trimmedExtra;
  }
  if (trimmedBase.includes(trimmedExtra)) {
    return trimmedBase;
  }
  return `${trimmedBase}\n\nClassroom Pacing & Course Outline:\n${trimmedExtra}`;
}

function findGuidanceOverride(
  guidanceMap: Record<string, string> | undefined,
  code: string,
): string | undefined {
  if (!guidanceMap) {
    return undefined;
  }
  if (guidanceMap[code]) {
    return guidanceMap[code];
  }
  const normalized = code.replace(/^(SL|HL)\s+/i, '').trim();
  return (
    guidanceMap[normalized] ??
    guidanceMap[`SL ${normalized}`] ??
    guidanceMap[`HL ${normalized}`] ??
    guidanceMap[code.toUpperCase()]
  );
}

function registerTopicLookupKeys(
  lookup: Map<string, string>,
  subjectId: string,
  code: string,
  topicId: string,
): void {
  const trimmed = code.trim();
  lookup.set(`${subjectId}::${trimmed}`, topicId);
  lookup.set(`${subjectId}::${trimmed.toUpperCase()}`, topicId);
  const stripped = trimmed.replace(/^(SL|HL)\s+/i, '').trim();
  if (stripped && stripped !== trimmed) {
    lookup.set(`${subjectId}::${stripped}`, topicId);
    lookup.set(`${subjectId}::${stripped.toUpperCase()}`, topicId);
  }
}

function resolveTopicId(
  lookup: Map<string, string>,
  subjectId: string,
  topicCode: string | null | undefined,
): string | null {
  if (!topicCode) {
    return null;
  }
  const trimmed = topicCode.trim();
  if (!trimmed) {
    return null;
  }
  const direct =
    lookup.get(`${subjectId}::${trimmed}`) ??
    lookup.get(`${subjectId}::${trimmed.toUpperCase()}`);
  if (direct) {
    return direct;
  }
  const stripped = trimmed.replace(/^(SL|HL)\s+/i, '').trim();
  return (
    lookup.get(`${subjectId}::${stripped}`) ??
    lookup.get(`${subjectId}::${stripped.toUpperCase()}`) ??
    null
  );
}

function countWords(text: string | null | undefined): number {
  if (!text) {
    return 0;
  }
  const matches = text.trim().match(/\S+/g);
  return matches ? matches.length : 0;
}

async function insertInChunks(
  supabase: SupabaseClient,
  table: string,
  rows: Record<string, unknown>[],
  chunkSize = 40,
): Promise<void> {
  if (rows.length === 0) {
    return;
  }
  for (let i = 0; i < rows.length; i += chunkSize) {
    const chunk = rows.slice(i, i + chunkSize);
    const { error } = await supabase.from(table).insert(chunk);
    if (error) {
      throw new Error(`Failed inserting into ${table}: ${error.message}`);
    }
  }
}

interface DefaultCoreProjectSpec {
  projectType: CoreProjectType;
  subjectSlug: SubjectSlug | null;
  title: string;
  researchQuestionOrPrompt: string;
  wordCountTarget: number;
  milestones: CoreMilestone[];
  draftExcerpt: string;
}

const DEFAULT_CORE_PROJECTS: DefaultCoreProjectSpec[] = [
  {
    projectType: 'EE',
    subjectSlug: null,
    title: 'Extended Essay (FA2027 30-Mark Rubric)',
    researchQuestionOrPrompt:
      'To what extent did [specific causal factor / variable / literary mechanism] shape [focused IB subject investigation]?',
    wordCountTarget: 4000,
    milestones: [
      { id: 'ee-1', title: 'Subject Selection & Proposal Form', completed: false },
      { id: 'ee-2', title: 'First Formal Reflection Session (RPF Session 1)', completed: false },
      { id: 'ee-3', title: 'Annotated Bibliography & Research Plan', completed: false },
      { id: 'ee-4', title: 'First Full Draft (up to 4,000 words)', completed: false },
      { id: 'ee-5', title: 'Interim Reflection Session (RPF Session 2)', completed: false },
      { id: 'ee-6', title: 'Final Essay Submission & Viva Voce (RPF Session 3)', completed: false },
    ],
    draftExcerpt: '',
  },
  {
    projectType: 'TOK_ESSAY',
    subjectSlug: null,
    title: 'TOK Essay (1,600 Words · 10 Marks)',
    researchQuestionOrPrompt:
      'Select an IB TOK Prescribed Title and explore knowledge claims across two Areas of Knowledge.',
    wordCountTarget: 1600,
    milestones: [
      { id: 'tok-e-1', title: 'Unpack Prescribed Title & Key Terms', completed: false },
      { id: 'tok-e-2', title: 'Select 2 Areas of Knowledge & Real-Life Examples', completed: false },
      { id: 'tok-e-3', title: 'Essay Outline (Claims, Counterclaims, Implications)', completed: false },
      { id: 'tok-e-4', title: 'Draft 1 & Teacher Interaction Form (TK/PPF)', completed: false },
      { id: 'tok-e-5', title: 'Final 1,600-Word TOK Essay', completed: false },
    ],
    draftExcerpt: '',
  },
  {
    projectType: 'TOK_EXHIBITION',
    subjectSlug: null,
    title: 'TOK Exhibition (950 Words · 3 Real-World Objects)',
    researchQuestionOrPrompt:
      'IA Prompt: Choose one of the 35 IB TOK IA prompts and link three specific real-world objects with concrete context.',
    wordCountTarget: 950,
    milestones: [
      { id: 'tok-ex-1', title: 'Choose IA Prompt & Core/Optional Theme', completed: false },
      { id: 'tok-ex-2', title: 'Identify 3 Specific Real-World Objects & Contexts', completed: false },
      { id: 'tok-ex-3', title: 'Draft Object Commentaries (~300 words each)', completed: false },
      { id: 'tok-ex-4', title: 'Final 950-Word Exhibition & Showcase', completed: false },
    ],
    draftExcerpt: '',
  },
  {
    projectType: 'CAS',
    subjectSlug: null,
    title: 'CAS Portfolio (7 Learning Outcomes)',
    researchQuestionOrPrompt:
      'Maintain balanced Creativity, Activity, and Service engagement across 18 months, complete a ≥1-month collaborative CAS Project, and document reflections addressing LO1–LO7.',
    wordCountTarget: 0,
    milestones: [
      { id: 'cas-1', title: 'CAS Initial Interview & Strand Plan', completed: false },
      { id: 'cas-2', title: 'Launch Balanced C, A & S Experiences (with Pre-Approval)', completed: false },
      { id: 'cas-3', title: 'Initiate Collaborative CAS Project (5 Stages, ≥1 Month)', completed: false },
      { id: 'cas-4', title: 'Interim Interview & Mid-Year Reflection Check (LO1–LO7)', completed: false },
      { id: 'cas-5', title: 'Final CAS Portfolio Completion & Exit Interview', completed: false },
    ],
    draftExcerpt: '',
  },
  {
    projectType: 'IA',
    subjectSlug: 'biology-hl',
    title: 'Biology HL — Scientific Investigation (2025+ IA)',
    researchQuestionOrPrompt:
      'How does [independent variable across ≥5 levels] affect [quantitative biological dependent variable] in [organism/enzyme/tissue system]?',
    wordCountTarget: 3000,
    milestones: [
      { id: 'bio-ia-1', title: 'Research Question & Preliminary Trials', completed: false },
      { id: 'bio-ia-2', title: 'Criterion A: Methodology, Controls & Ethics/Safety', completed: false },
      { id: 'bio-ia-3', title: 'Data Collection & Criterion B Processing/Statistics', completed: false },
      { id: 'bio-ia-4', title: 'Criteria C–D: Literature Comparison & Evaluation (≤3,000w)', completed: false },
    ],
    draftExcerpt: '',
  },
  {
    projectType: 'IA',
    subjectSlug: 'chemistry-sl',
    title: 'Chemistry SL — Scientific Investigation (2025+ IA)',
    researchQuestionOrPrompt:
      'How does [independent chemical variable] affect [quantitative dependent variable] determined via [titration/calorimetry/spectrophotometry]?',
    wordCountTarget: 3000,
    milestones: [
      { id: 'chem-ia-1', title: 'Research Question & Lab INFO Preliminary Check', completed: false },
      { id: 'chem-ia-2', title: 'Criterion A: Experimental Design & SDS/Safety Plan', completed: false },
      { id: 'chem-ia-3', title: 'Criterion B: Data Processing & Uncertainty Propagation', completed: false },
      { id: 'chem-ia-4', title: 'Criteria C–D: Literature % Error & Systematic Error Evaluation', completed: false },
    ],
    draftExcerpt: '',
  },
  {
    projectType: 'IA',
    subjectSlug: 'math-aa-sl',
    title: 'Math AA SL — Mathematical Exploration (IA)',
    researchQuestionOrPrompt:
      'How can [SL calculus / functions / probability / trigonometry model] be used to analyze [personal mathematical inquiry]?',
    wordCountTarget: 2500,
    milestones: [
      { id: 'math-ia-1', title: 'Topic Proposal & Statement of Aim', completed: false },
      { id: 'math-ia-2', title: 'Data / Mathematical Derivation Draft (Criteria B & E)', completed: false },
      { id: 'math-ia-3', title: 'Embedded Reflection & Error Residual Analysis (Criterion D)', completed: false },
      { id: 'math-ia-4', title: 'Final Typesetting & Notation Audit (12–20 pages)', completed: false },
    ],
    draftExcerpt: '',
  },
  {
    projectType: 'IA',
    subjectSlug: 'history-hl',
    title: 'History HL — Historical Investigation (May 2028 24-Mark IA)',
    researchQuestionOrPrompt:
      'To what extent did [specific historical factor/actor] cause [bounded event/shift] between [start year] and [end year]?',
    wordCountTarget: 2200,
    milestones: [
      { id: 'hist-ia-1', title: 'Bounded RQ & Source Audit (Max 7 Sources for 2028 Guide)', completed: false },
      { id: 'hist-ia-2', title: 'Criterion A: OPCVL Evaluation of 2 Sources (6 marks)', completed: false },
      { id: 'hist-ia-3', title: 'Criterion B: Analytical Investigation & Chicago NB Footnotes (12 marks)', completed: false },
      { id: 'hist-ia-4', title: 'Criterion C: Conclusion & Historical Judgment (6 marks, ≤2,200w)', completed: false },
    ],
    draftExcerpt: '',
  },
  {
    projectType: 'IA',
    subjectSlug: 'english-lit-hl',
    title: 'English A: Literature HL — HL Essay (20m) & IO (40m)',
    researchQuestionOrPrompt:
      'How does [Author] deploy [specific literary/formal strategy] to explore [one of the 7 IB Concepts] in [Work]?',
    wordCountTarget: 1500,
    milestones: [
      { id: 'eng-ia-1', title: 'Select Non-IO Work & IB Concept for HL Essay', completed: false },
      { id: 'eng-ia-2', title: 'Draft Line of Inquiry & Close-Reading Outline', completed: false },
      { id: 'eng-ia-3', title: 'HL Essay Complete Draft (1,200–1,500 words)', completed: false },
      { id: 'eng-ia-4', title: 'Individual Oral (IO): Global Issue + 2 Extracts (10m/5m)', completed: false },
    ],
    draftExcerpt: '',
  },
  {
    projectType: 'IA',
    subjectSlug: 'french-b-sl',
    title: 'French B SL — Oral individuel (Individual Oral)',
    researchQuestionOrPrompt:
      'Thème prescrit & stimulus visuel : Analyser l’image, expliquer le lien avec la culture francophone et préparer la conversation spontanée.',
    wordCountTarget: 400,
    milestones: [
      { id: 'fr-ia-1', title: 'Réviser les 5 thèmes prescrits et le lexique idiomatique', completed: false },
      { id: 'fr-ia-2', title: 'Pratiquer l’analyse de stimuli visuels (3–4 min + lien culturel)', completed: false },
      { id: 'fr-ia-3', title: 'Simuler les parties 2 et 3 (interaction spontanée)', completed: false },
      { id: 'fr-ia-4', title: 'Oral individuel officiel (15 min prép · 12–15 min oral)', completed: false },
    ],
    draftExcerpt: '',
  },
];

function buildCoreProjectPayloads(
  userId: string,
  overrides: CoreStarterProjectOverride[],
): Array<Record<string, unknown>> {
  const overrideMap = new Map<string, CoreStarterProjectOverride>();
  for (const override of overrides) {
    const key = `${override.projectType}::${override.subjectSlug ?? ''}`;
    overrideMap.set(key, override);
  }

  const seenKeys = new Set<string>();
  const rows: Array<Record<string, unknown>> = [];

  for (const spec of DEFAULT_CORE_PROJECTS) {
    const key = `${spec.projectType}::${spec.subjectSlug ?? ''}`;
    seenKeys.add(key);
    const override = overrideMap.get(key);
    const draftExcerpt = override?.draftExcerpt ?? spec.draftExcerpt;
    rows.push({
      user_id: userId,
      project_type: spec.projectType,
      subject_slug: spec.subjectSlug,
      title: override?.title ?? spec.title,
      research_question_or_prompt:
        override?.researchQuestionOrPrompt ?? spec.researchQuestionOrPrompt,
      word_count_target: override?.wordCountTarget ?? spec.wordCountTarget,
      current_word_count: countWords(draftExcerpt),
      milestones: override?.milestones ?? spec.milestones,
      draft_excerpt: draftExcerpt || null,
      latest_ai_review: null,
    });
  }

  for (const override of overrides) {
    const key = `${override.projectType}::${override.subjectSlug ?? ''}`;
    if (seenKeys.has(key)) {
      continue;
    }
    seenKeys.add(key);
    rows.push({
      user_id: userId,
      project_type: override.projectType,
      subject_slug: override.subjectSlug ?? null,
      title: override.title,
      research_question_or_prompt: override.researchQuestionOrPrompt,
      word_count_target: override.wordCountTarget,
      current_word_count: countWords(override.draftExcerpt),
      milestones: override.milestones,
      draft_excerpt: override.draftExcerpt || null,
      latest_ai_review: null,
    });
  }

  return rows;
}

const GLOBAL_SEED_LOCK_KEY = '__syllabusOsInFlightSeeds';

function getInFlightSeedsMap(): Map<string, Promise<void>> {
  const globalRecord = globalThis as typeof globalThis & {
    [GLOBAL_SEED_LOCK_KEY]?: Map<string, Promise<void>>;
  };
  if (!globalRecord[GLOBAL_SEED_LOCK_KEY]) {
    globalRecord[GLOBAL_SEED_LOCK_KEY] = new Map<string, Promise<void>>();
  }
  return globalRecord[GLOBAL_SEED_LOCK_KEY];
}

async function waitForCoreProjects(
  supabase: SupabaseClient,
  userId: string,
  maxWaitMs = 5000,
  pollIntervalMs = 100,
): Promise<void> {
  const deadline = Date.now() + maxWaitMs;
  while (Date.now() < deadline) {
    const { data, error } = await supabase
      .from('core_projects')
      .select('id')
      .eq('user_id', userId)
      .limit(1);

    if (!error && data && data.length > 0) {
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, pollIntervalMs));
  }
}

/**
 * Idempotently provisions all 6 IB Diploma subjects, hierarchical syllabus
 * topics, pre-ingested classroom materials/notes/questions/flashcards, and starter
 * Core (EE/TOK/CAS/6×IA) projects for a newly authenticated user.
 *
 * Uses a per-userId in-process promise mutex plus cross-process core_projects
 * completion polling so parallel Next.js Server Component renders (e.g. layout.tsx
 * and page.tsx) never return early with partial seed data.
 */
export async function ensureUserSeeded(
  supabase: SupabaseClient,
  userId: string,
): Promise<void> {
  const inFlight = getInFlightSeedsMap();
  const existingPromise = inFlight.get(userId);
  if (existingPromise) {
    return existingPromise;
  }

  const runPromise = runEnsureUserSeeded(supabase, userId).finally(() => {
    if (inFlight.get(userId) === runPromise) {
      inFlight.delete(userId);
    }
  });

  inFlight.set(userId, runPromise);
  return runPromise;
}

async function runEnsureUserSeeded(
  supabase: SupabaseClient,
  userId: string,
): Promise<void> {
  const [subjectsCheck, coreCheck] = await Promise.all([
    supabase.from('subjects').select('id').eq('user_id', userId).limit(1),
    supabase.from('core_projects').select('id').eq('user_id', userId).limit(1),
  ]);

  if (subjectsCheck.error) {
    throw new Error(`Failed checking user subjects: ${subjectsCheck.error.message}`);
  }
  if (coreCheck.error) {
    throw new Error(`Failed checking user core projects: ${coreCheck.error.message}`);
  }

  const hasSubjects = (subjectsCheck.data?.length ?? 0) > 0;
  const hasCoreProjects = (coreCheck.data?.length ?? 0) > 0;

  if (hasSubjects && hasCoreProjects) {
    return;
  }

  if (hasSubjects && !hasCoreProjects) {
    await waitForCoreProjects(supabase, userId);
    return;
  }

  // a) Insert all 6 IB Diploma subjects
  const subjectPayloads = IB_SUBJECTS_CONFIG.map((subject) => ({
    user_id: userId,
    slug: subject.slug,
    name: subject.name,
    level: subject.level,
    group_number: subject.groupNumber,
    description: subject.description,
  }));

  const { data: insertedSubjects, error: insertSubjectsError } = await supabase
    .from('subjects')
    .insert(subjectPayloads)
    .select('id, slug');

  if (insertSubjectsError) {
    // Handle cross-process concurrent first-login race cleanly by awaiting final table
    if (insertSubjectsError.code === '23505') {
      await waitForCoreProjects(supabase, userId);
      return;
    }
    throw new Error(`Failed inserting IB subjects: ${insertSubjectsError.message}`);
  }

  if (!insertedSubjects || insertedSubjects.length === 0) {
    return;
  }

  const subjectIdBySlug = new Map<string, string>();
  for (const row of insertedSubjects) {
    subjectIdBySlug.set(String(row.slug), String(row.id));
  }

  // b) Insert parent unit/theme syllabus_topics first, map IDs, then insert subtopics
  const parentTopicPayloads: Array<Record<string, unknown>> = [];

  for (const subject of IB_SUBJECTS_CONFIG) {
    const subjectId = subjectIdBySlug.get(subject.slug);
    if (!subjectId) {
      continue;
    }
    const seed = CLASSROOM_SEED_BY_SUBJECT[subject.slug] as SubjectClassroomSeed | undefined;
    let sortOrder = 0;

    for (const unit of subject.units) {
      const classroomNote = findGuidanceOverride(seed?.topicGuidanceNotes, unit.code);
      parentTopicPayloads.push({
        user_id: userId,
        subject_id: subjectId,
        parent_id: null,
        code: unit.code,
        title: unit.title,
        guidance_notes: mergeGuidanceNotes(unit.guidanceNotes, classroomNote),
        sort_order: sortOrder,
        is_completed: false,
        confidence_level: 'unstarted',
      });
      sortOrder += 1 + unit.subtopics.length;
    }
  }

  const { data: insertedParents, error: parentTopicError } = await supabase
    .from('syllabus_topics')
    .insert(parentTopicPayloads)
    .select('id, subject_id, code');

  if (parentTopicError) {
    throw new Error(`Failed inserting parent syllabus topics: ${parentTopicError.message}`);
  }

  const topicIdLookup = new Map<string, string>();
  for (const row of insertedParents ?? []) {
    registerTopicLookupKeys(
      topicIdLookup,
      String(row.subject_id),
      String(row.code),
      String(row.id),
    );
  }

  const childTopicPayloads: Array<Record<string, unknown>> = [];
  for (const subject of IB_SUBJECTS_CONFIG) {
    const subjectId = subjectIdBySlug.get(subject.slug);
    if (!subjectId) {
      continue;
    }
    const seed = CLASSROOM_SEED_BY_SUBJECT[subject.slug] as SubjectClassroomSeed | undefined;
    let sortOrder = 0;

    for (const unit of subject.units) {
      const parentId =
        topicIdLookup.get(`${subjectId}::${unit.code}`) ??
        topicIdLookup.get(`${subjectId}::${unit.code.toUpperCase()}`) ??
        null;
      sortOrder += 1;

      for (const subtopic of unit.subtopics) {
        const classroomNote = findGuidanceOverride(seed?.topicGuidanceNotes, subtopic.code);
        childTopicPayloads.push({
          user_id: userId,
          subject_id: subjectId,
          parent_id: parentId,
          code: subtopic.code,
          title: subtopic.title,
          guidance_notes: mergeGuidanceNotes(subtopic.guidanceNotes, classroomNote),
          sort_order: sortOrder,
          is_completed: false,
          confidence_level: 'unstarted',
        });
        sortOrder += 1;
      }
    }
  }

  if (childTopicPayloads.length > 0) {
    const { data: insertedChildren, error: childTopicError } = await supabase
      .from('syllabus_topics')
      .insert(childTopicPayloads)
      .select('id, subject_id, code');

    if (childTopicError) {
      throw new Error(`Failed inserting child syllabus topics: ${childTopicError.message}`);
    }

    for (const row of insertedChildren ?? []) {
      registerTopicLookupKeys(
        topicIdLookup,
        String(row.subject_id),
        String(row.code),
        String(row.id),
      );
    }
  }

  // c) Hydrate course_materials, study_notes, questions, and flashcards per subject
  const nowIso = new Date().toISOString();
  const materialPayloads: Array<Record<string, unknown>> = [];

  for (const subject of IB_SUBJECTS_CONFIG) {
    const subjectId = subjectIdBySlug.get(subject.slug);
    const seed = CLASSROOM_SEED_BY_SUBJECT[subject.slug] as SubjectClassroomSeed | undefined;
    if (!subjectId || !seed) {
      continue;
    }

    for (const mat of seed.materials) {
      materialPayloads.push({
        user_id: userId,
        subject_id: subjectId,
        topic_id: resolveTopicId(topicIdLookup, subjectId, mat.topicCode),
        file_name: mat.fileName,
        file_type: mat.fileType,
        storage_path: null,
        external_url: mat.externalUrl ?? null,
        extracted_text: mat.extractedText,
        generation_status: 'generated',
        last_generated_at: nowIso,
      });
    }
  }

  const materialIdBySubjectAndFile = new Map<string, string>();
  const materialChunkSize = 40;
  for (let i = 0; i < materialPayloads.length; i += materialChunkSize) {
    const chunk = materialPayloads.slice(i, i + materialChunkSize);
    const { data: insertedMaterials, error: materialsError } = await supabase
      .from('course_materials')
      .insert(chunk)
      .select('id, subject_id, file_name');

    if (materialsError) {
      throw new Error(`Failed inserting course_materials: ${materialsError.message}`);
    }

    for (const row of insertedMaterials ?? []) {
      materialIdBySubjectAndFile.set(
        `${String(row.subject_id)}::${String(row.file_name)}`,
        String(row.id),
      );
    }
  }

  const resolveSourceIds = (subjectId: string, fileNames: string[]): string[] => {
    const ids = new Set<string>();
    for (const fileName of fileNames) {
      const id = materialIdBySubjectAndFile.get(`${subjectId}::${fileName}`);
      if (id) {
        ids.add(id);
      }
    }
    return Array.from(ids);
  };

  const studyNotePayloads: Array<Record<string, unknown>> = [];
  const questionPayloads: Array<Record<string, unknown>> = [];
  const flashcardPayloads: Array<Record<string, unknown>> = [];

  for (const subject of IB_SUBJECTS_CONFIG) {
    const subjectId = subjectIdBySlug.get(subject.slug);
    const seed = CLASSROOM_SEED_BY_SUBJECT[subject.slug] as SubjectClassroomSeed | undefined;
    if (!subjectId || !seed) {
      continue;
    }

    for (const note of seed.notes) {
      studyNotePayloads.push({
        user_id: userId,
        subject_id: subjectId,
        topic_id: resolveTopicId(topicIdLookup, subjectId, note.topicCode),
        title: note.title,
        summary: note.summary,
        blocks: note.blocks,
        source_material_ids: resolveSourceIds(subjectId, note.sourceFileNames),
        version: 1,
      });
    }

    for (const q of seed.questions) {
      questionPayloads.push({
        user_id: userId,
        subject_id: subjectId,
        topic_id: resolveTopicId(topicIdLookup, subjectId, q.topicCode),
        paper_type: q.paperType,
        command_term: q.commandTerm,
        difficulty: q.difficulty,
        max_marks: q.maxMarks,
        stimulus_markdown: q.stimulusMarkdown ?? null,
        question_markdown: q.questionMarkdown,
        mcq_options: q.mcqOptions ?? null,
        correct_mcq_option: q.correctMcqOption ?? null,
        markscheme: q.markscheme,
        source_material_ids: resolveSourceIds(subjectId, q.sourceFileNames),
      });
    }

    for (const card of seed.flashcards) {
      flashcardPayloads.push({
        user_id: userId,
        subject_id: subjectId,
        topic_id: resolveTopicId(topicIdLookup, subjectId, card.topicCode),
        front_markdown: card.frontMarkdown,
        back_markdown: card.backMarkdown,
        mastered: false,
      });
    }
  }

  await insertInChunks(supabase, 'study_notes', studyNotePayloads, 20);
  await insertInChunks(supabase, 'questions', questionPayloads, 35);
  await insertInChunks(supabase, 'flashcards', flashcardPayloads, 60);

  // d) Insert starter core_projects (EE, TOK_ESSAY, TOK_EXHIBITION, CAS, and all 6 subject IAs)
  const corePayloads = buildCoreProjectPayloads(userId, CORE_STARTER_OVERRIDES);
  await insertInChunks(supabase, 'core_projects', corePayloads, 20);
}
