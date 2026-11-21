import type {
  CoreProjectRow,
  QuestionAttemptRow,
  QuestionRow,
} from '@/types/database';

export interface PromptPair {
  systemInstruction: string;
  userPrompt: string;
}

export interface SuiteMaterialInput {
  id: string;
  fileName: string;
  fileType: string;
  extractedText: string;
}

export interface GenerateSuitePromptInput {
  subjectName: string;
  subjectSlug: string;
  level: 'HL' | 'SL';
  paperTypes: string[];
  targetTopic?: {
    code: string;
    title: string;
    guidance_notes: string | null;
  } | null;
  syllabusTopicsSummary: string;
  materials: SuiteMaterialInput[];
}

const MAX_COMBINED_MATERIAL_CHARS = 85_000;

function formatMaterialsWithBudget(materials: SuiteMaterialInput[]): string {
  if (materials.length === 0) return '(No source materials provided)';
  const perMaterialCap = Math.max(
    4_000,
    Math.floor(MAX_COMBINED_MATERIAL_CHARS / materials.length),
  );

  return materials
    .map((m, idx) => {
      const text = m.extractedText.trim();
      const clipped =
        text.length > perMaterialCap
          ? `${text.slice(0, perMaterialCap)}\n\n[Material truncated at ${perMaterialCap.toLocaleString()} chars]`
          : text;
      return [
        `--- SOURCE MATERIAL ${idx + 1}: ${m.fileName} (${m.fileType}) ---`,
        clipped || '(No text extracted)',
      ].join('\n');
    })
    .join('\n\n');
}

function getSubjectSpecificInstructions(subjectSlug: string): string {
  switch (subjectSlug) {
    case 'biology-hl':
      return [
        'Subject-specific IB 2025+ Biology HL rules:',
        '- Official exam papers ONLY: "Paper 1A (MCQ)", "Paper 1B (Data-Based)", "Paper 2 (Structured & Extended)". NEVER emit Paper 3.',
        '- Include exact IB markscheme biological terminology (e.g., hydrogen bonds, hydrophilic/hydrophobic, active site complementarity, chemiosmosis, concentration gradient).',
        '- Prefer 1–3 diagrams from: labeled_explorer (monochrome SVG anatomy/structure using strokes "#37352F", "#787774", "#E6E6E4", fills "none" or "#FBFBFA" within viewBox "0 0 800 440"), step_mechanism (molecular/physiological process), or comparison_matrix.',
      ].join('\n');
    case 'chemistry-sl':
      return [
        'Subject-specific IB 2025+ Chemistry SL rules:',
        '- Official exam papers ONLY: "Paper 1A (MCQ)", "Paper 1B (Data-Based)", "Paper 2 (Structured & Extended)". NEVER emit Paper 3.',
        '- STRICT SL BOUNDARY: NEVER include HL-only R1.4 Entropy and spontaneity (ΔG, ΔS) or HL-only Transition Metals / NMR splitting.',
        '- Use official IB STP molar volume: 22.7 dm^3 mol^-1 at 273.15 K and 100 kPa (NEVER 22.4 dm^3 mol^-1).',
        '- Format chemical equations with KaTeX/mhchem ($\\ce{...}$) and IUPAC nomenclature.',
        '- Prefer 1–3 diagrams from: step_mechanism, comparison_matrix, or labeled_explorer (clean monochrome SVG apparatus/energy diagram).',
      ].join('\n');
    case 'math-aa-sl':
      return [
        'Subject-specific IB Math AA SL rules:',
        '- Official exam papers ONLY: "Paper 1 (Non-GDC)", "Paper 2 (GDC)".',
        '- Ensure Paper 1 questions are solvable analytically without a graphing calculator, and Paper 2 questions appropriately leverage GDC methods.',
        '- Include a "function_graph" playable_diagram whenever functions, transformations, calculus, or equations apply:',
        '  * curves[].expression MUST be plain evaluable math syntax using x and slider keys (e.g., "a*(x-h)^2+k", "a/(x-h)+k", "a*sin(b*x)+c", "exp(k*x)", "ln(x)"), NEVER LaTeX ($ or \\frac) inside expression.',
        '  * slider keys MUST be valid identifiers (letters/digits/underscore starting with letter, e.g., "a", "h", "k"), with min < max and step > 0.',
        '  * xMin < xMax and yMin < yMax.',
      ].join('\n');
    case 'history-hl':
      return [
        'Subject-specific IB History HL (May 2028 First Assessment) rules:',
        '- Current Year 1 Classroom Focus: May 2028 History IA (24 marks, 3 sections: Inquiry Question 6m, Sources & Perspectives 6m, Synthesis & Evaluation 12m, ≤7 sources, ≤2,200w, Chicago NB — standalone Reflection & old OPCVL removed) AND Paper 3 Regional Study — Europe (2 hours, 30 marks, two 15-mark essays from Pearson 2026 regional studies like European Totalitarianism 1918–41).',
        '- Official exam papers ONLY: "Paper 3 (Regional Study — Europe)", "Internal Assessment (2028 History IA)", "Paper 1 (Focused Study)", "Paper 2 (Thematic Essay)".',
        '- Explicitly integrate the 4 redesigned 2028 History concepts (Cause & consequence, Continuity & change, Perspectives, Significance) and 4 Skills (Using sources, Making connections, Evaluating arguments, Asking questions).',
        '- Prefer "timeline_causality" (with conceptTags, primarySourceQuote, and historiographyNotes) and "comparison_matrix".',
      ].join('\n');
    case 'english-lit-hl':
      return [
        'Subject-specific IB English A: Literature HL rules:',
        '- Official exam papers ONLY: "Paper 1 (Guided Literary Analysis)", "Paper 2 (Comparative Essay)", plus HL Essay (1,200–1,500w) & Individual Oral (1 English-original literary work + 1 translated work — NEVER non-literary bodies of work).',
        '- Ground questions and study notes in authorial choices, literary/stylistic devices, Global Issues, and close textual analysis.',
        '- Prefer "comparison_matrix", "labeled_explorer", and "step_mechanism".',
      ].join('\n');
    case 'french-b-sl':
      return [
        'Subject-specific IB French B SL rules:',
        '- Official exam papers ONLY: "Paper 1 (Production écrite · 250–400 mots)", "Paper 2 (Compréhension écrite & orale)".',
        '- Reference the 5 Prescribed Themes (*Identités, Expériences, Ingéniosité humaine, Organisation sociale, Partage de la planète*) per *Le Monde en Français* (Cambridge 2018) Chapitre 6 text types.',
        '- Write French B SL prompts, reading passages, and flashcards in authentic French with clear English/French examiner markscheme criteria.',
        '- Prefer "comparison_matrix" (text types / register / grammar) and "step_mechanism".',
      ].join('\n');
    default:
      return '';
  }
}

export function buildGenerateSuitePrompts(
  input: GenerateSuitePromptInput,
): PromptPair {
  const topicContext = input.targetTopic
    ? `Target Syllabus Topic: ${input.targetTopic.code} — ${input.targetTopic.title}${
        input.targetTopic.guidance_notes
          ? `\nTeacher/Syllabus Guidance:\n${input.targetTopic.guidance_notes}`
          : ''
      }`
    : 'Target Scope: General Subject Synthesis across the selected classroom materials.';

  const systemInstruction = [
    'You are a Principal IB Diploma Curriculum Architect & Senior Examiner designing high-precision IB Diploma Programme study packages aligned to the latest official IB assessment guides.',
    'Respond strictly with valid JSON matching the provided responseJsonSchema.',
    'Core Academic Rules:',
    '1. Ground EVERY note section, equation, diagram, question, and flashcard in the uploaded classroom materials AND the official IB syllabus context.',
    '2. Visual Aesthetic & Spatial Accuracy for Diagrams: Monochrome-first ONLY. For labeled_explorer SVG shapes, use monochrome strokes/fills ("#1D1D1F", "#6E6E73", "#E5E5EA", "none", "currentColor") — NEVER neon colors or gradients. Use rich <path> curves, <polygon> arrowheads, and complete molecular/organelle/apparatus geometry instead of bare plain boxes. Keep hotspot coordinates inside x: 0..800, y: 0..440 and place hotspot pins BESIDE target structures (never directly over text labels). Keep step_mechanism nodes inside x: 40..760, y: 40..360 spaced at least 180px apart horizontally.',
    '3. Keep comparison_matrix row.cells lengths equal to columns.length.',
    '4. For MCQ questions (paper_type containing MCQ or Paper 1A), set max_marks = 1, provide 4 mcq_options labeled A-D, and set correct_mcq_option ("A"-"D"). For non-MCQ questions, omit mcq_options and correct_mcq_option.',
    '5. Every question markscheme must specify concrete IB marking_points (M1, M2, A1, C1, etc.) whose marks sum to max_marks, plus required markscheme keywords and a full-mark model_answer.',
    '6. Format math and chemistry expressions cleanly with KaTeX ($...$ inline, $$...$$ display) inside Markdown fields, and plain un-delimited LaTeX inside equation.latex and step_mechanism.formulaLatex.',
  ].join('\n');

  const userPrompt = [
    `Subject: ${input.subjectName} (${input.level}) [slug: ${input.subjectSlug}]`,
    `Allowed Paper Types: ${input.paperTypes.join(' | ')}`,
    topicContext,
    '',
    'Subject Syllabus Structure:',
    input.syllabusTopicsSummary,
    '',
    getSubjectSpecificInstructions(input.subjectSlug),
    '',
    'Required Deliverables in JSON:',
    '1. studyNote: 1 comprehensive Read-Only Notion study guide containing headings (level 2/3), crisp paragraphs, callouts (definition, examiner_warning, key_formula, syllabus_link), key_terms with markschemeKeyword badges, equations where relevant, and 1 to 3 schema-valid playable_diagram blocks.',
    '2. questions: Exactly 8 authentic IB exam questions distributed across the allowed paper_types and difficulties (Foundation, Standard IB, HL Extension for HL subjects), each with full M1/M2/A1 markscheme and model_answer.',
    '3. flashcards: Exactly 12 crisp active-recall flashcards targeting markscheme keywords, formulas, mechanisms, or primary evidence from the materials.',
    '',
    'Selected Classroom Materials:',
    formatMaterialsWithBudget(input.materials),
  ].join('\n');

  return { systemInstruction, userPrompt };
}

export interface GradeQuestionPromptInput {
  subjectName: string;
  level: 'HL' | 'SL';
  question: Pick<
    QuestionRow,
    | 'paper_type'
    | 'command_term'
    | 'difficulty'
    | 'max_marks'
    | 'stimulus_markdown'
    | 'question_markdown'
    | 'mcq_options'
    | 'correct_mcq_option'
    | 'markscheme'
  >;
  userAnswer: string;
}

export function buildGradeQuestionPrompts(
  input: GradeQuestionPromptInput,
): PromptPair {
  const { question } = input;
  const systemInstruction = [
    'You are a Senior IB Diploma Examiner grading a student response strictly against the official IB markscheme and command term.',
    'Rules:',
    '1. Evaluate every marking_point in the markscheme individually. Never invent bonus marks outside the markscheme.',
    '2. Check whether the student fulfilled the exact IB command term (e.g., "Explain" requires mechanism/reason, "Compare and contrast" requires explicit similarities AND differences, "Evaluate" requires weighed judgment).',
    '3. Ensure awarded_marks equals the sum of point_results[].awarded and stays within 0..max_marks.',
    '4. For MCQ questions, award max_marks only if the selected option matches correct_mcq_option, and explain the exact concept and why distractors fail.',
    '5. List exact missing markscheme keywords in missing_keywords and provide the full-mark model_answer.',
    '6. Output valid JSON matching the schema.',
  ].join('\n');

  const mcqContext =
    question.mcq_options && question.mcq_options.length > 0
      ? [
          'MCQ Options:',
          ...question.mcq_options.map((opt) => `- ${opt.label}: ${opt.text}`),
          `Correct Option: ${question.correct_mcq_option ?? 'N/A'}`,
        ].join('\n')
      : '';

  const userPrompt = [
    `Subject: ${input.subjectName} (${input.level})`,
    `Paper Type: ${question.paper_type}`,
    `Command Term: ${question.command_term}`,
    `Difficulty: ${question.difficulty}`,
    `Maximum Marks: ${question.max_marks}`,
    question.stimulus_markdown ? `Stimulus:\n${question.stimulus_markdown}\n` : '',
    `Question:\n${question.question_markdown}`,
    mcqContext,
    '',
    'Official Markscheme Marking Points:',
    JSON.stringify(question.markscheme.marking_points, null, 2),
    `Official Model Answer:\n${question.markscheme.model_answer}`,
    question.markscheme.examiner_notes
      ? `Examiner Notes:\n${question.markscheme.examiner_notes}`
      : '',
    '',
    'Student Submitted Answer:',
    input.userAnswer,
  ]
    .filter(Boolean)
    .join('\n');

  return { systemInstruction, userPrompt };
}

export interface TutorChatPromptInput {
  subjectName: string;
  level: 'HL' | 'SL';
  topicLabel?: string | null;
  question: Pick<
    QuestionRow,
    | 'paper_type'
    | 'command_term'
    | 'max_marks'
    | 'stimulus_markdown'
    | 'question_markdown'
    | 'mcq_options'
    | 'correct_mcq_option'
    | 'markscheme'
  >;
  attempt: Pick<
    QuestionAttemptRow,
    'user_answer' | 'awarded_marks' | 'max_marks' | 'grading_breakdown' | 'tutor_messages'
  >;
  userMessage: string;
}

export function buildTutorChatPrompts(input: TutorChatPromptInput): PromptPair {
  const { question, attempt } = input;
  const systemInstruction = [
    `You are a calm, rigorous IB Diploma ${input.subjectName} (${input.level}) Examiner-Tutor helping a student understand why they earned ${attempt.awarded_marks}/${attempt.max_marks} and how to reach full marks.`,
    'Guidelines:',
    '1. Reference the specific markscheme points (e.g., M1, M2, A1) and missing keywords directly.',
    '2. Use KaTeX ($...$ inline, $$...$$ display, \\ce{...} for chemistry) for all formulas and equations.',
    '3. Keep responses concise, structured, and Notion-clear (bullet points where helpful, zero fluff or emojis).',
    '4. For Chemistry SL, always enforce STP = 22.7 dm^3 mol^-1 and SL syllabus boundaries.',
    '5. Output JSON: { "reply": "..." }.',
  ].join('\n');

  const historyLines =
    attempt.tutor_messages.length > 0
      ? attempt.tutor_messages
          .slice(-12)
          .map((m) => `${m.role === 'user' ? 'Student' : 'Tutor'}: ${m.content}`)
          .join('\n\n')
      : '(No prior tutor messages in this thread)';

  const userPrompt = [
    `Subject: ${input.subjectName} (${input.level})${input.topicLabel ? ` · Topic: ${input.topicLabel}` : ''}`,
    `Paper: ${question.paper_type} | Command Term: ${question.command_term} | Score: ${attempt.awarded_marks}/${attempt.max_marks}`,
    question.stimulus_markdown ? `Stimulus:\n${question.stimulus_markdown}` : '',
    `Question:\n${question.question_markdown}`,
    `Markscheme Points:\n${JSON.stringify(question.markscheme.marking_points)}`,
    `Model Answer:\n${question.markscheme.model_answer}`,
    `Student Answer:\n${attempt.user_answer}`,
    `Examiner Breakdown:\n${JSON.stringify(attempt.grading_breakdown)}`,
    '',
    'Conversation History:',
    historyLines,
    '',
    `Student's New Question:\n${input.userMessage}`,
  ]
    .filter(Boolean)
    .join('\n\n');

  return { systemInstruction, userPrompt };
}

export interface CoreProjectReviewPromptInput {
  project: Pick<
    CoreProjectRow,
    | 'project_type'
    | 'subject_slug'
    | 'title'
    | 'research_question_or_prompt'
    | 'word_count_target'
    | 'current_word_count'
    | 'milestones'
    | 'draft_excerpt'
  >;
  rubricTitle: string;
  rubricTotalMarks: number;
  rubricSummary: string;
  rubricCriteriaText: string;
}

export function buildCoreProjectReviewPrompts(
  input: CoreProjectReviewPromptInput,
): PromptPair {
  const { project } = input;
  const systemInstruction = [
    'You are a Senior IB Diploma Core Moderator & Principal Examiner reviewing an IB EE, TOK, CAS, or IA draft against official IB assessment criteria.',
    'Rules:',
    '1. Evaluate strictly against EVERY criterion provided in the official rubric using the exact criterion names and max_marks.',
    '2. Never fabricate evidence that is not present in the student research question or draft excerpt. If the draft is brief or incomplete, award an honest baseline band mark and specify exact next drafting steps.',
    '3. Ensure total_awarded equals the sum of criterion_results[].awarded and total_max equals the rubric total marks.',
    '4. Give specific, concrete, actionable IB-level improvements (including command-term precision, methodology, source evaluation, or analytical depth).',
    '5. Output valid JSON matching the schema.',
  ].join('\n');

  const completedMilestones = project.milestones.filter((m) => m.completed).length;

  const userPrompt = [
    `Official Rubric: ${input.rubricTitle} (Total Max: ${input.rubricTotalMarks} marks)`,
    `Rubric Overview: ${input.rubricSummary}`,
    '',
    'Rubric Criteria & Level Descriptors:',
    input.rubricCriteriaText,
    '',
    'Student Project Submission:',
    `- Project Type: ${project.project_type}${project.subject_slug ? ` (${project.subject_slug})` : ''}`,
    `- Title: ${project.title}`,
    `- Research Question / Prompt: ${project.research_question_or_prompt || '(Not provided yet)'}`,
    `- Word Count: ${project.current_word_count} / ${project.word_count_target} target`,
    `- Milestones Completed: ${completedMilestones} / ${project.milestones.length}`,
    '',
    'Draft Excerpt / Work Provided:',
    project.draft_excerpt?.trim() || '(No draft excerpt provided yet — evaluate RQ/prompt & milestone readiness.)',
  ].join('\n');

  return { systemInstruction, userPrompt };
}
