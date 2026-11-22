import type { SupabaseClient } from '@supabase/supabase-js';
import { CLASSROOM_SEED_BY_SUBJECT, CORE_STARTER_OVERRIDES } from '@/data/classroom-seed';
import type {
  CoreStarterProjectOverride,
  SubjectClassroomSeed,
} from '@/data/classroom-seed/types';
import { IB_SUBJECTS_CONFIG } from '@/data/ib-syllabi';
import type { CoreMilestone, CoreProjectType, SubjectSlug } from '@/types/database';

export const CLASSROOM_SEED_PACK_VERSION = 3;

export interface ClassroomSyncSummary {
  version: number;
  addedMaterials: number;
  upgradedNotes: number;
  addedQuestions: number;
  addedFlashcards: number;
  updatedTopics: number;
  updatedCoreProjects: number;
}

export interface SyncClassroomOptions {
  /** Bypass the fast-path count check and run a full non-destructive reconciliation. */
  force?: boolean;
}

const V1_TO_V2_NOTE_TITLE_MAP: Record<string, string> = {
  'Liberal Italy & Mussolini’s Rise to Dictatorship (1890–1929)':
    'Paper 3 Spotlight — Liberal Italy & Mussolini’s Dictatorship (1890–1940)',
  'European Totalitarianism Compared & May 2028 Paper 3 Method (P3.5)':
    'Paper 3 Spotlight — Comparative European Totalitarianism (1918–1941) & Band 13–15 Essays',
  'Emission Spectra, Orbitals & Electron Configurations (S1.3)':
    'Emission Spectra, Orbital Boxes & Electron Configurations (S1.3)',
  'Covalent Bonding, VSEPR Shapes, Network Solids & IMFs (S2.2)':
    'Covalent Bonding, Bond Order & Interactive 3D VSEPR Polarity Lab (S2.2.1–S2.2.6)',
  'Bonding Continuum, Alloys & Addition Polymerization (S2.4)':
    'Bonding Continuum (van Arkel–Ketelaar), Alloys & Addition Polymers (S2.4)',
  'Periodic Trends: Radii, Ionization Energy & Electronegativity (S3.1)':
    'Periodic Trends: Radii, IE1 Anomalies, Pauling χ & Period 3 Oxides (S3.1)',
  'Quadratics: Three Forms, Discriminant & Inequalities (2.6–2.7)':
    'Quadratics: Three Forms, Discriminant Δ, Inequalities & Mock Tests (2.6–2.7)',
  'Things Fall Apart: Cultural Cosmology, Family Power & IO Global Issues (AoE2)':
    'Things Fall Apart: Family Power, Food Rituals, Cosmology & IO Global Issues (AoE2)',
  'Paper 1 & Paper 2 HL Analytical Craft: Extract-to-Concept Architecture':
    'English A Literature HL Craft: Paper 1, Paper 2, HL Essay & Mandatory IO Rules',
  'Français B NM : 5 Thèmes prescrits & Stratégie Épreuve 1 / Oral individuel':
    'Français B NM : 5 Thèmes prescrits (*Le monde en français*) & Oral individuel',
  'Microscopy ($M=I/A$), Prokaryote vs Eukaryote & Endosymbiosis (A2.2)':
    'Interactive Cell Ultrastructure Lab: Animal, Plant & Prokaryote (A2.2.4–A2.2.10)',
  'Amino Acids, Peptide Bonds & Protein Folding Levels (B1.2)':
    'Amino Acids, Peptide Bonds & HL 1°–4° Protein Folding (B1.2)',
  'Organelles, Eukaryotic Compartmentalization & Clathrin Vesicles (B2.2)':
    'Organelles, Compartmentalization, Clathrin & Ultracentrifugation (B2.2)',
  'Nucleic Acids, Base Pairing, Hershey–Chase & Nucleosomes (A1.2)':
    'Nucleic Acids, Base-Pairing, Hershey–Chase & Nucleosomes (A1.2)',
  'Origin of Cells, Miller–Urey, RNA World & LUCA (A2.1 HL)':
    'Origin of Cells, Miller–Urey Apparatus, RNA World & LUCA (A2.1 HL)',
  'Carbohydrates, Polysaccharides & Cis/Trans Lipids (B1.1)':
    'Carbohydrates, Glycogen vs Cellulose & Cis/Trans Lipids (B1.1)',
};

// All 30 v2 note titles were preserved verbatim in v3; keep this map explicit for future title migrations.
const V2_TO_V3_NOTE_TITLE_MAP: Record<string, string> = {};

function getExpectedSeedTotals(): {
  notes: number;
  questions: number;
  flashcards: number;
  coreProjects: number;
} {
  let notes = 0;
  let questions = 0;
  let flashcards = 0;
  for (const subject of IB_SUBJECTS_CONFIG) {
    const seed = CLASSROOM_SEED_BY_SUBJECT[subject.slug] as
      | SubjectClassroomSeed
      | undefined;
    if (!seed) continue;
    notes += seed.notes.length;
    questions += seed.questions.length;
    flashcards += seed.flashcards.length;
  }

  const coreKeys = new Set<string>();
  for (const spec of DEFAULT_CORE_PROJECTS) {
    coreKeys.add(`${spec.projectType}::${spec.subjectSlug ?? ''}`);
  }
  for (const override of CORE_STARTER_OVERRIDES) {
    coreKeys.add(`${override.projectType}::${override.subjectSlug ?? ''}`);
  }

  return {
    notes,
    questions,
    flashcards,
    coreProjects: coreKeys.size,
  };
}

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
      { id: 'hist-ia-1', title: 'Section 1: Bounded Historical Inquiry Question & Scope Rationale (6 marks)', completed: false },
      { id: 'hist-ia-2', title: 'Section 2: Sources & Perspectives Comparison (Max 7 Sources, 6 marks)', completed: false },
      { id: 'hist-ia-3', title: 'Section 3: Synthesis, Historiography & Evaluation w/ Chicago NB (12 marks)', completed: false },
      { id: 'hist-ia-4', title: 'Final 2,200-Word IA Submission (Sections 1–3 = 24 Marks; No Standalone Reflection)', completed: false },
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

export async function syncClassroomPackUpgrades(
  supabase: SupabaseClient,
  userId: string,
  options?: SyncClassroomOptions,
): Promise<ClassroomSyncSummary> {
  if (!options?.force) {
    const expectedTotals = getExpectedSeedTotals();
    const [
      v3NotesCountRes,
      questionsCountRes,
      flashcardsCountRes,
      coreCountRes,
    ] = await Promise.all([
      supabase
        .from('study_notes')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', userId)
        .gte('version', CLASSROOM_SEED_PACK_VERSION),
      supabase
        .from('questions')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', userId),
      supabase
        .from('flashcards')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', userId),
      supabase
        .from('core_projects')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', userId),
    ]);

    if (
      !v3NotesCountRes.error &&
      !questionsCountRes.error &&
      !flashcardsCountRes.error &&
      !coreCountRes.error &&
      (v3NotesCountRes.count ?? 0) >= expectedTotals.notes &&
      (questionsCountRes.count ?? 0) >= expectedTotals.questions &&
      (flashcardsCountRes.count ?? 0) >= expectedTotals.flashcards &&
      (coreCountRes.count ?? 0) >= expectedTotals.coreProjects
    ) {
      return {
        version: CLASSROOM_SEED_PACK_VERSION,
        addedMaterials: 0,
        upgradedNotes: 0,
        addedQuestions: 0,
        addedFlashcards: 0,
        updatedTopics: 0,
        updatedCoreProjects: 0,
      };
    }
  }

  const [
    subjectsRes,
    topicsRes,
    materialsRes,
    notesRes,
    questionsRes,
    flashcardsRes,
    coreRes,
  ] = await Promise.all([
    supabase.from('subjects').select('id, slug').eq('user_id', userId),
    supabase
      .from('syllabus_topics')
      .select('id, subject_id, parent_id, code, title, guidance_notes')
      .eq('user_id', userId),
    supabase
      .from('course_materials')
      .select('id, subject_id, topic_id, file_name, storage_path, external_url, extracted_text')
      .eq('user_id', userId),
    supabase
      .from('study_notes')
      .select('id, subject_id, topic_id, title, version')
      .eq('user_id', userId),
    supabase
      .from('questions')
      .select('id, subject_id, question_markdown')
      .eq('user_id', userId),
    supabase
      .from('flashcards')
      .select('id, subject_id, front_markdown')
      .eq('user_id', userId),
    supabase
      .from('core_projects')
      .select('id, project_type, subject_slug, milestones, draft_excerpt')
      .eq('user_id', userId),
  ]);

  const subjectIdBySlug = new Map<string, string>();
  for (const row of subjectsRes.data ?? []) {
    subjectIdBySlug.set(String(row.slug), String(row.id));
  }

  const topicIdLookup = new Map<string, string>();
  const existingTopicBySubAndCode = new Map<
    string,
    { id: string; parent_id: string | null; guidance_notes: string | null; title: string }
  >();

  for (const row of topicsRes.data ?? []) {
    const subId = String(row.subject_id);
    const code = String(row.code);
    const id = String(row.id);
    registerTopicLookupKeys(topicIdLookup, subId, code, id);
    existingTopicBySubAndCode.set(`${subId}::${code}`, {
      id,
      parent_id: row.parent_id ? String(row.parent_id) : null,
      guidance_notes: typeof row.guidance_notes === 'string' ? row.guidance_notes : null,
      title: String(row.title),
    });
  }

  // 1) Non-destructively insert missing syllabus_topics & refresh stale guidance_notes
  let updatedTopics = 0;
  const missingParentTopics: Array<Record<string, unknown>> = [];

  for (const subject of IB_SUBJECTS_CONFIG) {
    const subjectId = subjectIdBySlug.get(subject.slug);
    if (!subjectId) continue;
    const seed = CLASSROOM_SEED_BY_SUBJECT[subject.slug] as SubjectClassroomSeed | undefined;
    let sortOrder = 0;

    for (const unit of subject.units) {
      const classroomNote = findGuidanceOverride(seed?.topicGuidanceNotes, unit.code);
      const nextGuidance = mergeGuidanceNotes(unit.guidanceNotes, classroomNote);
      const existing = existingTopicBySubAndCode.get(`${subjectId}::${unit.code}`);
      if (!existing) {
        missingParentTopics.push({
          user_id: userId,
          subject_id: subjectId,
          parent_id: null,
          code: unit.code,
          title: unit.title,
          guidance_notes: nextGuidance,
          sort_order: sortOrder,
          is_completed: false,
          confidence_level: 'unstarted',
        });
      } else if (
        existing.guidance_notes !== nextGuidance ||
        existing.title !== unit.title
      ) {
        await supabase
          .from('syllabus_topics')
          .update({ title: unit.title, guidance_notes: nextGuidance })
          .eq('id', existing.id)
          .eq('user_id', userId);
        updatedTopics++;
      }
      sortOrder += 1 + unit.subtopics.length;
    }
  }

  if (missingParentTopics.length > 0) {
    const { data: insertedParents } = await supabase
      .from('syllabus_topics')
      .insert(missingParentTopics)
      .select('id, subject_id, code');
    for (const row of insertedParents ?? []) {
      registerTopicLookupKeys(
        topicIdLookup,
        String(row.subject_id),
        String(row.code),
        String(row.id),
      );
      updatedTopics++;
    }
  }

  const missingChildTopics: Array<Record<string, unknown>> = [];
  for (const subject of IB_SUBJECTS_CONFIG) {
    const subjectId = subjectIdBySlug.get(subject.slug);
    if (!subjectId) continue;
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
        const nextGuidance = mergeGuidanceNotes(subtopic.guidanceNotes, classroomNote);
        const existing = existingTopicBySubAndCode.get(`${subjectId}::${subtopic.code}`);
        if (!existing) {
          missingChildTopics.push({
            user_id: userId,
            subject_id: subjectId,
            parent_id: parentId,
            code: subtopic.code,
            title: subtopic.title,
            guidance_notes: nextGuidance,
            sort_order: sortOrder,
            is_completed: false,
            confidence_level: 'unstarted',
          });
        } else if (
          existing.guidance_notes !== nextGuidance ||
          existing.title !== subtopic.title
        ) {
          await supabase
            .from('syllabus_topics')
            .update({ title: subtopic.title, guidance_notes: nextGuidance })
            .eq('id', existing.id)
            .eq('user_id', userId);
          updatedTopics++;
        }
        sortOrder += 1;
      }
    }
  }

  if (missingChildTopics.length > 0) {
    const { data: insertedChildren } = await supabase
      .from('syllabus_topics')
      .insert(missingChildTopics)
      .select('id, subject_id, code');
    for (const row of insertedChildren ?? []) {
      registerTopicLookupKeys(
        topicIdLookup,
        String(row.subject_id),
        String(row.code),
        String(row.id),
      );
      updatedTopics++;
    }
  }

  // 2) Non-destructively insert missing seed materials (textbooks/cheatsheets); preserve all user uploads (storage_path !== null)
  const nowIso = new Date().toISOString();
  const materialIdBySubjectAndFile = new Map<string, string>();
  const existingMaterialByKey = new Map<
    string,
    { id: string; storage_path: string | null; extracted_text: string; external_url: string | null }
  >();

  for (const row of materialsRes.data ?? []) {
    const key = `${String(row.subject_id)}::${String(row.file_name)}`;
    materialIdBySubjectAndFile.set(key, String(row.id));
    existingMaterialByKey.set(key, {
      id: String(row.id),
      storage_path: row.storage_path ? String(row.storage_path) : null,
      extracted_text: String(row.extracted_text ?? ''),
      external_url: row.external_url ? String(row.external_url) : null,
    });
  }

  const missingMaterials: Array<Record<string, unknown>> = [];
  for (const subject of IB_SUBJECTS_CONFIG) {
    const subjectId = subjectIdBySlug.get(subject.slug);
    const seed = CLASSROOM_SEED_BY_SUBJECT[subject.slug] as SubjectClassroomSeed | undefined;
    if (!subjectId || !seed) continue;

    for (const mat of seed.materials) {
      const key = `${subjectId}::${mat.fileName}`;
      const existing = existingMaterialByKey.get(key);
      const nextTopicId = resolveTopicId(topicIdLookup, subjectId, mat.topicCode);
      if (!existing) {
        missingMaterials.push({
          user_id: userId,
          subject_id: subjectId,
          topic_id: nextTopicId,
          file_name: mat.fileName,
          file_type: mat.fileType,
          storage_path: null,
          external_url: mat.externalUrl ?? null,
          extracted_text: mat.extractedText,
          generation_status: 'generated',
          last_generated_at: nowIso,
        });
      } else if (
        existing.storage_path === null &&
        existing.extracted_text !== mat.extractedText
      ) {
        await supabase
          .from('course_materials')
          .update({
            extracted_text: mat.extractedText,
            topic_id: nextTopicId,
            external_url: mat.externalUrl ?? existing.external_url ?? null,
          })
          .eq('id', existing.id)
          .eq('user_id', userId);
      }
    }
  }

  for (let i = 0; i < missingMaterials.length; i += 40) {
    const chunk = missingMaterials.slice(i, i + 40);
    const { data: inserted } = await supabase
      .from('course_materials')
      .insert(chunk)
      .select('id, subject_id, file_name');
    for (const row of inserted ?? []) {
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
      if (id) ids.add(id);
    }
    return Array.from(ids);
  };

  // 3) Upgrade v1/v2 seed notes (version < 3) and add missing v3 seed notes without touching user/AI notes
  const existingNoteBySubAndTitle = new Map<
    string,
    { id: string; version: number }
  >();
  for (const row of notesRes.data ?? []) {
    existingNoteBySubAndTitle.set(
      `${String(row.subject_id)}::${String(row.title)}`,
      { id: String(row.id), version: Number(row.version ?? 1) },
    );
  }

  const legacyAliasesByTitle = new Map<string, string[]>();
  const registerAlias = (legacyTitle: string, currentTitle: string) => {
    const list = legacyAliasesByTitle.get(currentTitle) ?? [];
    if (!list.includes(legacyTitle)) {
      list.push(legacyTitle);
    }
    legacyAliasesByTitle.set(currentTitle, list);
  };
  for (const [v1Title, v2Title] of Object.entries(V1_TO_V2_NOTE_TITLE_MAP)) {
    const v3Title = V2_TO_V3_NOTE_TITLE_MAP[v2Title] ?? v2Title;
    registerAlias(v1Title, v3Title);
  }
  for (const [v2Title, v3Title] of Object.entries(V2_TO_V3_NOTE_TITLE_MAP)) {
    registerAlias(v2Title, v3Title);
  }

  let upgradedNotes = 0;
  const missingNotes: Array<Record<string, unknown>> = [];

  for (const subject of IB_SUBJECTS_CONFIG) {
    const subjectId = subjectIdBySlug.get(subject.slug);
    const seed = CLASSROOM_SEED_BY_SUBJECT[subject.slug] as SubjectClassroomSeed | undefined;
    if (!subjectId || !seed) continue;

    for (const note of seed.notes) {
      const directKey = `${subjectId}::${note.title}`;
      const directMatch = existingNoteBySubAndTitle.get(directKey);
      let match: { id: string; version: number } | undefined = directMatch;

      if (!match) {
        const legacyTitles = legacyAliasesByTitle.get(note.title) ?? [];
        for (const legacyTitle of legacyTitles) {
          const found = existingNoteBySubAndTitle.get(`${subjectId}::${legacyTitle}`);
          if (found) {
            match = found;
            break;
          }
        }
      }

      const resolvedTopicId = resolveTopicId(topicIdLookup, subjectId, note.topicCode);
      const sourceMaterialIds = resolveSourceIds(subjectId, note.sourceFileNames);

      if (match) {
        if (match.version < CLASSROOM_SEED_PACK_VERSION) {
          await supabase
            .from('study_notes')
            .update({
              topic_id: resolvedTopicId,
              title: note.title,
              summary: note.summary,
              blocks: note.blocks,
              source_material_ids: sourceMaterialIds,
              version: CLASSROOM_SEED_PACK_VERSION,
            })
            .eq('id', match.id)
            .eq('user_id', userId);
          upgradedNotes++;
        }
      } else {
        missingNotes.push({
          user_id: userId,
          subject_id: subjectId,
          topic_id: resolvedTopicId,
          title: note.title,
          summary: note.summary,
          blocks: note.blocks,
          source_material_ids: sourceMaterialIds,
          version: CLASSROOM_SEED_PACK_VERSION,
        });
        upgradedNotes++;
      }
    }
  }

  if (missingNotes.length > 0) {
    await insertInChunks(supabase, 'study_notes', missingNotes, 8);
  }

  // 4) Append missing questions and flashcards without deleting or resetting attempts/mastery
  const existingQuestionKeys = new Set<string>(
    (questionsRes.data ?? []).map(
      (q) => `${String(q.subject_id)}::${String(q.question_markdown)}`,
    ),
  );
  const existingFlashcardKeys = new Set<string>(
    (flashcardsRes.data ?? []).map(
      (f) => `${String(f.subject_id)}::${String(f.front_markdown)}`,
    ),
  );

  const missingQuestions: Array<Record<string, unknown>> = [];
  const missingFlashcards: Array<Record<string, unknown>> = [];

  for (const subject of IB_SUBJECTS_CONFIG) {
    const subjectId = subjectIdBySlug.get(subject.slug);
    const seed = CLASSROOM_SEED_BY_SUBJECT[subject.slug] as SubjectClassroomSeed | undefined;
    if (!subjectId || !seed) continue;

    for (const q of seed.questions) {
      const qKey = `${subjectId}::${q.questionMarkdown}`;
      if (!existingQuestionKeys.has(qKey)) {
        missingQuestions.push({
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
    }

    for (const card of seed.flashcards) {
      const fKey = `${subjectId}::${card.frontMarkdown}`;
      if (!existingFlashcardKeys.has(fKey)) {
        missingFlashcards.push({
          user_id: userId,
          subject_id: subjectId,
          topic_id: resolveTopicId(topicIdLookup, subjectId, card.topicCode),
          front_markdown: card.frontMarkdown,
          back_markdown: card.backMarkdown,
          mastered: false,
        });
      }
    }
  }

  if (missingQuestions.length > 0) {
    await insertInChunks(supabase, 'questions', missingQuestions, 30);
  }
  if (missingFlashcards.length > 0) {
    await insertInChunks(supabase, 'flashcards', missingFlashcards, 60);
  }

  // 5) Refresh History IA starter milestones ONLY when user has not edited draft or completed milestones
  let updatedCoreProjects = 0;
  const historyIaOverride = CORE_STARTER_OVERRIDES.find(
    (o) => o.projectType === 'IA' && o.subjectSlug === 'history-hl',
  );
  if (historyIaOverride) {
    for (const proj of coreRes.data ?? []) {
      if (
        proj.project_type === 'IA' &&
        proj.subject_slug === 'history-hl' &&
        !String(proj.draft_excerpt ?? '').trim()
      ) {
        const milestones = Array.isArray(proj.milestones)
          ? (proj.milestones as CoreMilestone[])
          : [];
        const hasCompleted = milestones.some((m) => m.completed);
        const hasLegacyWording = milestones.some(
          (m) =>
            m.title.includes('OPCVL') ||
            m.title.includes('Criteria A–C') ||
            m.title.includes('Criterion A'),
        );
        if (!hasCompleted && hasLegacyWording) {
          await supabase
            .from('core_projects')
            .update({ milestones: historyIaOverride.milestones })
            .eq('id', String(proj.id))
            .eq('user_id', userId);
          updatedCoreProjects++;
        }
      }
    }
  }

  return {
    version: CLASSROOM_SEED_PACK_VERSION,
    addedMaterials: missingMaterials.length,
    upgradedNotes,
    addedQuestions: missingQuestions.length,
    addedFlashcards: missingFlashcards.length,
    updatedTopics,
    updatedCoreProjects,
  };
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
    await syncClassroomPackUpgrades(supabase, userId);
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
        version: CLASSROOM_SEED_PACK_VERSION,
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

  await insertInChunks(supabase, 'study_notes', studyNotePayloads, 8);
  await insertInChunks(supabase, 'questions', questionPayloads, 30);
  await insertInChunks(supabase, 'flashcards', flashcardPayloads, 60);

  // d) Insert starter core_projects (EE, TOK_ESSAY, TOK_EXHIBITION, CAS, and all 6 subject IAs)
  const corePayloads = buildCoreProjectPayloads(userId, CORE_STARTER_OVERRIDES);
  await insertInChunks(supabase, 'core_projects', corePayloads, 20);
}
