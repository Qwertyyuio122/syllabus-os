import type { CoreProjectType, SubjectSlug } from '@/types/database';

export interface RubricDescriptorBand {
  marks: string;
  levelLabel: string;
  descriptor: string;
}

export interface RubricCriterion {
  code: string;
  name: string;
  maxMarks: number;
  weightDescription?: string;
  summary: string;
  descriptors: RubricDescriptorBand[];
  examinerTips: string[];
}

export interface CasLearningOutcome {
  code: string;
  title: string;
  description: string;
}

export interface CasStrand {
  name: 'Creativity' | 'Activity' | 'Service';
  description: string;
  examples: string[];
}

export interface IBAssessmentRubric {
  id: string;
  projectType: CoreProjectType;
  subjectSlug?: SubjectSlug | null;
  variantKey: string;
  title: string;
  cohortSession: string;
  totalMaxMarks: number;
  wordLimit: string;
  weightingNote: string;
  overview: string;
  examinerNotes: string[];
  criteria: RubricCriterion[];
  casLearningOutcomes?: CasLearningOutcome[];
  casStrands?: CasStrand[];
}

export const EE_FA2027_RUBRIC: IBAssessmentRubric = {
  id: 'ee-fa2027-30',
  projectType: 'EE',
  subjectSlug: null,
  variantKey: 'EE_FA2027_30',
  title: 'Extended Essay (First Assessment 2027 — Class of 2028)',
  cohortSession: 'May 2027+ / Class of 2028',
  totalMaxMarks: 30,
  wordLimit: '4,000 words max + 500-word RPF (3 reflection sessions)',
  weightingNote: 'Combined with TOK on the 3-point IB Diploma Core Matrix',
  overview:
    'Redesigned 30-mark Extended Essay rubric (First Assessment 2027 / applies to Class of 2028). Streamlines assessment into 5 criteria: Framework (6), Knowledge & Understanding (6), Analysis & Line of Argument (6), Discussion & Evaluation (8), and Reflection (4).',
  examinerNotes: [
    'Formal academic presentation and referencing are now integrated directly into Criterion D (Discussion and evaluation) rather than scored in a standalone Presentation criterion.',
    'The 500-word Reflections on Planning and Progress Form (RPF) across three mandatory supervisor sessions accounts for 4 marks under Criterion E.',
    'All essays strictly cap at 4,000 words; examiners stop reading beyond 4,000 words.',
  ],
  criteria: [
    {
      code: 'A',
      name: 'Framework for the essay',
      maxMarks: 6,
      summary:
        'Clarity and focus of the research question, disciplinary appropriateness, and justification/application of methodology, sources, or research framework.',
      descriptors: [
        {
          marks: '0',
          levelLabel: 'Not achieved',
          descriptor: 'The work does not reach a standard outlined by the descriptors below.',
        },
        {
          marks: '1-2',
          levelLabel: 'Limited',
          descriptor:
            'The topic and research question are broad, unfocused, or poorly formulated for the chosen subject. There is little explanation or appropriateness of the methodological framework or source selection.',
        },
        {
          marks: '3-4',
          levelLabel: 'Satisfactory to Good',
          descriptor:
            'The topic and research question are identifiable and relevant to the subject, with a generally appropriate framework/methodology and source base, though justification or focus could be sharper.',
        },
        {
          marks: '5-6',
          levelLabel: 'Excellent',
          descriptor:
            'The research question is sharply focused, analytical, and firmly situated within the subject. The methodological framework, experimental design, or source selection is clearly justified, comprehensive, and effectively applied throughout.',
        },
      ],
      examinerTips: [
        'Anchor the Research Question in exact parameters (time period, variables, works, or system) in the Introduction.',
        'Justify why your chosen primary sources, literary pairing, or experimental protocol are valid for answering the RQ.',
      ],
    },
    {
      code: 'B',
      name: 'Knowledge and understanding',
      maxMarks: 6,
      summary:
        'Accurate command of subject-specific concepts, theories, and terminology applied to credible, relevant source material.',
      descriptors: [
        {
          marks: '0',
          levelLabel: 'Not achieved',
          descriptor: 'The work does not reach a standard outlined by the descriptors below.',
        },
        {
          marks: '1-2',
          levelLabel: 'Limited',
          descriptor:
            'Source material has limited relevance or reliability. Knowledge of the topic is superficial, with frequent inaccuracies or everyday rather than subject-specific terminology.',
        },
        {
          marks: '3-4',
          levelLabel: 'Satisfactory to Good',
          descriptor:
            'Relevant source material is applied with sound subject knowledge and generally accurate disciplinary terminology, though depth or nuance is uneven.',
        },
        {
          marks: '5-6',
          levelLabel: 'Excellent',
          descriptor:
            'Authoritative, nuanced knowledge and understanding of the academic context are sustained throughout. Subject-specific concepts, models, and terminology are deployed with consistent precision.',
        },
      ],
      examinerTips: [
        'Avoid textbook summary dumps; weave disciplinary theory directly into evidence tied to your RQ.',
        'Use peer-reviewed or primary scholarly sources rather than general encyclopedias.',
      ],
    },
    {
      code: 'C',
      name: 'Analysis and line of argument',
      maxMarks: 6,
      summary:
        'Coherent, evidence-backed analytical reasoning that builds a sustained line of argument directly answering the research question.',
      descriptors: [
        {
          marks: '0',
          levelLabel: 'Not achieved',
          descriptor: 'The work does not reach a standard outlined by the descriptors below.',
        },
        {
          marks: '1-2',
          levelLabel: 'Limited',
          descriptor:
            'The essay is largely descriptive or narrative. Claims are weakly supported by evidence, and the line of argument is fragmented or loses sight of the research question.',
        },
        {
          marks: '3-4',
          levelLabel: 'Satisfactory to Good',
          descriptor:
            'Analytical points are made and supported by relevant evidence, establishing a discernible line of argument addressing the research question, though transitions or analytical rigor occasionally lapse into description.',
        },
        {
          marks: '5-6',
          levelLabel: 'Excellent',
          descriptor:
            'Analysis is incisive, sustained, and thoroughly integrated with evidence. A clear, logical line of argument progresses purposefully from section to section to answer the research question.',
        },
      ],
      examinerTips: [
        'End every section by explicitly linking findings back to the central claim of your Research Question.',
        'Avoid unanalyzed block quotes or raw data tables without immediate interpretation.',
      ],
    },
    {
      code: 'D',
      name: 'Discussion and evaluation',
      maxMarks: 8,
      summary:
        'Critical evaluation of findings, methodological/source limitations, counter-perspectives, justified conclusion, and academic presentation/referencing.',
      descriptors: [
        {
          marks: '0',
          levelLabel: 'Not achieved',
          descriptor: 'The work does not reach a standard outlined by the descriptors below.',
        },
        {
          marks: '1-2',
          levelLabel: 'Limited',
          descriptor:
            'Evaluation of sources, data, or counter-arguments is minimal or purely assertive. The conclusion is weakly linked to the analysis, and formatting/citation inconsistencies obscure clarity.',
        },
        {
          marks: '3-4',
          levelLabel: 'Satisfactory',
          descriptor:
            'Some discussion of limitations and alternative interpretations is present, with a conclusion consistent with the evidence. Academic structure and referencing are adequate with minor lapses.',
        },
        {
          marks: '5-6',
          levelLabel: 'Good',
          descriptor:
            'Findings are weighed thoughtfully against limitations and counter-arguments; the conclusion is clear and substantiated. Academic presentation, figures, and citations are consistent and clear.',
        },
        {
          marks: '7-8',
          levelLabel: 'Excellent',
          descriptor:
            'Critically evaluates the credibility, scope, and limitations of findings and competing perspectives. Reaches a nuanced, compelling conclusion fully grounded in the investigation, communicated through polished academic structure, prose, and consistent referencing.',
        },
      ],
      examinerTips: [
        'Address counter-arguments, experimental uncertainties, or historiographical disagreements explicitly before concluding.',
        'Verify consistent citation formatting (e.g., Chicago NB, MLA, or APA), numbered figures/tables, and clean layout throughout.',
      ],
    },
    {
      code: 'E',
      name: 'Reflection',
      maxMarks: 4,
      summary:
        'Critical reflection across the 500-word RPF (initial, interim, viva voce) on intellectual growth, research decisions, and obstacles overcome.',
      descriptors: [
        {
          marks: '0',
          levelLabel: 'Not achieved',
          descriptor: 'The work does not reach a standard outlined by the descriptors below.',
        },
        {
          marks: '1-2',
          levelLabel: 'Limited to Satisfactory',
          descriptor:
            'Reflections are mostly descriptive logs of tasks completed, showing limited evaluation of how choices or setbacks shaped the research.',
        },
        {
          marks: '3-4',
          levelLabel: 'Good to Excellent',
          descriptor:
            'Reflections demonstrate genuine metacognitive insight, articulating why research questions, methods, or interpretations evolved and evaluating personal intellectual development.',
        },
      ],
      examinerTips: [
        'Explain *why* you pivoted your RQ, rejected a source, or refined your method—do not merely list meeting dates.',
        'Respect the strict 500-word total limit across the three RPF reflections.',
      ],
    },
  ],
};

export const EE_LEGACY_34: IBAssessmentRubric = {
  id: 'ee-legacy-34',
  projectType: 'EE',
  subjectSlug: null,
  variantKey: 'EE_LEGACY_34',
  title: 'Extended Essay (Legacy 34-Mark Reference Variant — Pre-2027)',
  cohortSession: 'Legacy Reference (Pre-May 2027)',
  totalMaxMarks: 34,
  wordLimit: '4,000 words max + 500-word RPPF',
  weightingNote: 'Legacy 34-mark reference scale for older exemplars',
  overview:
    'Legacy 34-mark Extended Essay rubric retained strictly for benchmarking pre-2027 exemplar essays: A Focus & Method (6), B Knowledge & Understanding (6), C Critical Thinking (12), D Presentation (4), E Engagement (6).',
  examinerNotes: [
    'Class of 2028 students are assessed on the new 30-mark FA2027 rubric; use this 34-mark variant only when reviewing archived teacher exemplars.',
  ],
  criteria: [
    {
      code: 'A',
      name: 'Focus and method',
      maxMarks: 6,
      summary: 'Topic, Research Question, and Methodology.',
      descriptors: [
        { marks: '0', levelLabel: 'Not achieved', descriptor: 'Standard not reached.' },
        { marks: '1-2', levelLabel: 'Limited', descriptor: 'Topic/RQ broad; methodology poorly explained.' },
        { marks: '3-4', levelLabel: 'Good', descriptor: 'Clear RQ and generally suitable methodology.' },
        { marks: '5-6', levelLabel: 'Excellent', descriptor: 'Sharply focused RQ and thorough, reasoned methodology.' },
      ],
      examinerTips: ['State RQ verbatim in the introduction and justify sources/methods.'],
    },
    {
      code: 'B',
      name: 'Knowledge and understanding',
      maxMarks: 6,
      summary: 'Context and subject-specific terminology and concepts.',
      descriptors: [
        { marks: '0', levelLabel: 'Not achieved', descriptor: 'Standard not reached.' },
        { marks: '1-2', levelLabel: 'Limited', descriptor: 'Descriptive, uneven accuracy, weak terminology.' },
        { marks: '3-4', levelLabel: 'Good', descriptor: 'Sound contextual knowledge and appropriate terminology.' },
        { marks: '5-6', levelLabel: 'Excellent', descriptor: 'Comprehensive, precise disciplinary command.' },
      ],
      examinerTips: ['Integrate subject terminology organically into analysis.'],
    },
    {
      code: 'C',
      name: 'Critical thinking',
      maxMarks: 12,
      summary: 'Research, Analysis, and Discussion/Evaluation.',
      descriptors: [
        { marks: '0', levelLabel: 'Not achieved', descriptor: 'Standard not reached.' },
        { marks: '1-3', levelLabel: 'Limited', descriptor: 'Mostly narrative; unsupported claims.' },
        { marks: '4-6', levelLabel: 'Satisfactory', descriptor: 'Some analysis; limited evaluation of limitations.' },
        { marks: '7-9', levelLabel: 'Good', descriptor: 'Sustained analysis with reasoned evaluation and conclusion.' },
        { marks: '10-12', levelLabel: 'Excellent', descriptor: 'Incisive, focused analysis with rigorous evaluation of evidence and counter-arguments.' },
      ],
      examinerTips: ['Criterion C carries 12/34 marks; maintain relentless analytical focus on the RQ.'],
    },
    {
      code: 'D',
      name: 'Presentation',
      maxMarks: 4,
      summary: 'Structure and Layout.',
      descriptors: [
        { marks: '0', levelLabel: 'Not achieved', descriptor: 'Standard not reached.' },
        { marks: '1-2', levelLabel: 'Acceptable', descriptor: 'Basic structure with referencing or formatting lapses.' },
        { marks: '3-4', levelLabel: 'Good to Excellent', descriptor: 'Clear academic layout, TOC, consistent citations, and bibliography.' },
      ],
      examinerTips: ['Ensure title page, table of contents, page numbers, and complete bibliography.'],
    },
    {
      code: 'E',
      name: 'Engagement',
      maxMarks: 6,
      summary: 'RPPF reflections across planning, progress, and viva voce.',
      descriptors: [
        { marks: '0', levelLabel: 'Not achieved', descriptor: 'Standard not reached.' },
        { marks: '1-2', levelLabel: 'Limited', descriptor: 'Descriptive summary of actions without reflection.' },
        { marks: '3-4', levelLabel: 'Good', descriptor: 'Clear reflection on decisions and challenges.' },
        { marks: '5-6', levelLabel: 'Excellent', descriptor: 'Insightful intellectual and personal engagement across all 3 sessions.' },
      ],
      examinerTips: ['Show active decision-making and analytical growth on the RPPF.'],
    },
  ],
};

export const TOK_ESSAY_RUBRIC: IBAssessmentRubric = {
  id: 'tok-essay-10',
  projectType: 'TOK_ESSAY',
  subjectSlug: null,
  variantKey: 'TOK_ESSAY',
  title: 'Theory of Knowledge (TOK) Essay',
  cohortSession: 'May 2022–2028 Curriculum',
  totalMaxMarks: 10,
  wordLimit: '1,600 words maximum',
  weightingNote: '67% of final TOK grade (combined with Exhibition 33%)',
  overview:
    'External 1,600-word essay responding to one of six IB prescribed titles, evaluated holistically on a 0–10 global impression scale ("Does the student provide a clear, coherent and critical exploration of the essay title?").',
  examinerNotes: [
    'Explore exactly two Areas of Knowledge (AoKs) unless the prescribed title specifies otherwise.',
    'Every knowledge claim must be grounded in specific, real-world examples—avoid hypothetical or cliché scenarios.',
    'Engage thoughtfully with counterclaims, alternative perspectives, and wider implications of your argument.',
  ],
  criteria: [
    {
      code: 'GLOBAL',
      name: 'TOK Essay Holistic Exploration (0–10)',
      maxMarks: 10,
      weightDescription: '67% of TOK score',
      summary:
        'Evaluates sustained focus on the prescribed title, conceptual precision across two Areas of Knowledge, evaluation of counterclaims, and authentic real-world evidence.',
      descriptors: [
        {
          marks: '0',
          levelLabel: 'Not achieved',
          descriptor: 'The essay does not reach a standard described by the levels below or does not address a prescribed title.',
        },
        {
          marks: '1-2',
          levelLabel: 'Basic / Descriptive',
          descriptor:
            'The essay has very limited relevance to the prescribed title. Assertions are unsupported, descriptive, or anecdotal with minimal connection to knowledge questions or Areas of Knowledge.',
        },
        {
          marks: '3-4',
          levelLabel: 'Limited / Partial',
          descriptor:
            'The essay is connected to the title in a superficial or descriptive manner. Links to Areas of Knowledge are weak or unsubstantiated; counterclaims are missing or merely asserted without analysis.',
        },
        {
          marks: '5-6',
          levelLabel: 'Satisfactory / Acceptable',
          descriptor:
            'The essay shows a clear connection to the prescribed title and explores knowledge claims within Areas of Knowledge using relevant examples. Arguments are coherent, though evaluation of different perspectives and implications remains somewhat limited.',
        },
        {
          marks: '7-8',
          levelLabel: 'Good / Analytical',
          descriptor:
            'The essay provides a clear, coherent, and critical exploration of the title. Claims and counterclaims are supported by well-chosen examples across Areas of Knowledge, with explicit evaluation of implications and differing perspectives.',
        },
        {
          marks: '9-10',
          levelLabel: 'Excellent / Insightful',
          descriptor:
            'The essay offers an insightful, cogent, and accomplished exploration of the prescribed title. Arguments are tightly sustained, nuanced, and compellingly linked to specific real-world examples across Areas of Knowledge, weighing counterclaims, assumptions, and implications with precision.',
        },
      ],
      examinerTips: [
        'Define key terms from the prescribed title operationally rather than copying dictionary definitions.',
        'Compare how methods and standards of evidence differ between your two chosen AoKs (e.g., Natural Sciences vs History or the Arts).',
        'Include explicit implications ("so what?") at the end of each AoK analysis and in the conclusion.',
      ],
    },
  ],
};

export const TOK_EXHIBITION_RUBRIC: IBAssessmentRubric = {
  id: 'tok-exhibition-10',
  projectType: 'TOK_EXHIBITION',
  subjectSlug: null,
  variantKey: 'TOK_EXHIBITION',
  title: 'Theory of Knowledge (TOK) Exhibition',
  cohortSession: 'May 2022–2028 Curriculum',
  totalMaxMarks: 10,
  wordLimit: '950 words maximum (across 3 object commentaries)',
  weightingNote: '33% of final TOK grade (internally assessed, externally moderated)',
  overview:
    'Internal assessment consisting of three specific real-world objects (with real-world context, time, and place) linked to one of the 35 IB Internal Assessment (IA) prompts, evaluated on a 0–10 holistic scale.',
  examinerNotes: [
    'All three objects MUST be specific real-world objects with concrete context—never generic concepts or stock clip-art.',
    'Do not exceed 950 words total across the three commentaries (excluding image captions and bibliography).',
    'Anchor the exhibition in the Core Theme or one Optional Theme (e.g., Knowledge and Technology, Knowledge and Politics, Knowledge and Language).',
  ],
  criteria: [
    {
      code: 'GLOBAL',
      name: 'TOK Exhibition Holistic Assessment (0–10)',
      maxMarks: 10,
      weightDescription: '33% of TOK score',
      summary:
        'Evaluates specificity of the three real-world objects, explicit justification for inclusion, and depth of link to the chosen IA prompt.',
      descriptors: [
        {
          marks: '0',
          levelLabel: 'Not achieved',
          descriptor: 'The exhibition does not reach a standard described by the levels below.',
        },
        {
          marks: '1-2',
          levelLabel: 'Basic',
          descriptor:
            'Objects are generic or poorly identified, and commentaries provide little or no coherent connection to the chosen IA prompt.',
        },
        {
          marks: '3-4',
          levelLabel: 'Limited',
          descriptor:
            'Objects are identified, though real-world contexts are vague. Links between the objects and the IA prompt are descriptive or unconvincing.',
        },
        {
          marks: '5-6',
          levelLabel: 'Satisfactory',
          descriptor:
            'Three specific objects and their real-world contexts are identified. Links to the IA prompt are explained, and some justification for each object’s inclusion is offered, though uneven across objects.',
        },
        {
          marks: '7-8',
          levelLabel: 'Good',
          descriptor:
            'Three specific objects with clear real-world contexts are analyzed thoughtfully. All links to the chosen IA prompt are well-explained, and each object’s unique contribution to answering the prompt is clearly justified.',
        },
        {
          marks: '9-10',
          levelLabel: 'Excellent / Lucid',
          descriptor:
            'Three specific, richly contextualized real-world objects clearly demonstrate how TOK manifests in the world. Links to the IA prompt are lucid, insightful, and strongly justified, showing distinct, complementary angles on the prompt.',
        },
      ],
      examinerTips: [
        'Spend ~300 words per object: ~50 words establishing exact real-world identity/context + ~250 words analyzing how it answers the IA prompt.',
        'Ensure each object illuminates a genuinely distinct facet of the IA prompt rather than repeating the same argument three times.',
      ],
    },
  ],
};

export const CAS_2028_RUBRIC: IBAssessmentRubric = {
  id: 'cas-2028',
  projectType: 'CAS',
  subjectSlug: null,
  variantKey: 'CAS_2028',
  title: 'Creativity, Activity, Service (CAS) — Class of 2028 Cohort',
  cohortSession: 'Class of 2028 (18-Month Core Requirement)',
  totalMaxMarks: 0,
  wordLimit: 'Portfolio Reflections + 3 Formal Interviews + 1-Month Collaborative Project',
  weightingNote: 'Mandatory ungraded IB Diploma Core requirement (Complete / Incomplete)',
  overview:
    'CAS requires continuous, balanced engagement across Creativity, Activity, and Service over 18 months, demonstrating all 7 IB CAS Learning Outcomes (LO1–LO7), completing at least one collaborative CAS Project (minimum 1 month using the 5 CAS Stages), and recording purposeful personal reflections.',
  examinerNotes: [
    'Class of 2028 cohort guidance: focus on quality and meaningfulness of engagement and reflection rather than simply accumulating hours.',
    'Every CAS Project must last at least 1 month, involve collaboration, and explicitly document the 5 CAS Stages (Investigation, Preparation, Action, Reflection, Demonstration).',
    'Reflections must go beyond "what I did" to capture feelings, surprises, ethical questions, challenges overcome, and explicit evidence for targeted Learning Outcomes.',
  ],
  casStrands: [
    {
      name: 'Creativity',
      description: 'Exploring and extending ideas leading to an original or interpretive product or performance.',
      examples: ['School magazine editorial design', 'Chamber ensemble or theatre production', 'Coding a community web tool', 'Culinary heritage workshop'],
    },
    {
      name: 'Activity',
      description: 'Physical exertion contributing to a healthy lifestyle and personal physical challenge.',
      examples: ['Varsity or recreational athletics training', '5K/10K running progression', 'Martial arts or dance choreography', 'Outdoor hiking/orienteering'],
    },
    {
      name: 'Service',
      description: 'Collaborative, reciprocal, unpaid engagement with the community in response to an authentic need.',
      examples: ['Peer math/science tutoring', 'Food bank logistics & outreach', 'Senior tech-literacy workshops', 'Environmental river clean-up & stewardship'],
    },
  ],
  casLearningOutcomes: [
    {
      code: 'LO1',
      title: 'Identify own strengths and develop areas for growth',
      description: 'Demonstrate realistic self-awareness of personal abilities, talents, and areas needing growth before and after experiences.',
    },
    {
      code: 'LO2',
      title: 'Demonstrate that challenges have been undertaken, developing new skills',
      description: 'Step outside familiar comfort zones to tackle new tasks or build unfamiliar skills through sustained practice.',
    },
    {
      code: 'LO3',
      title: 'Demonstrate how to initiate and plan a CAS experience',
      description: 'Articulate goals, timelines, logistics, and collaborative stages from initial proposal through execution.',
    },
    {
      code: 'LO4',
      title: 'Show commitment to and perseverance in CAS experiences',
      description: 'Maintain regular attendance, follow-through, and resilience when encountering obstacles or setbacks.',
    },
    {
      code: 'LO5',
      title: 'Demonstrate the skills and recognize the benefits of working collaboratively',
      description: 'Share responsibility, listen actively, delegate, and value diverse perspectives in group initiatives (mandatory for CAS Project).',
    },
    {
      code: 'LO6',
      title: 'Demonstrate engagement with issues of global significance',
      description: 'Connect local action to broader global challenges (sustainability, education equity, public health, cultural preservation).',
    },
    {
      code: 'LO7',
      title: 'Recognize and consider the ethics of choices and actions',
      description: 'Identify ethical implications of decisions—reciprocity, respect, privacy, safety, or environmental impact—and act responsibly.',
    },
  ],
  criteria: [
    {
      code: 'STRANDS',
      name: 'Three Strands Balance (Creativity, Activity, Service)',
      maxMarks: 1,
      summary: 'Sustained, balanced portfolio across Creativity, Activity, and Service over 18 months without prolonged gaps.',
      descriptors: [
        { marks: '0', levelLabel: 'Incomplete', descriptor: 'One or more strands missing or engagement is sporadic/short-term only.' },
        { marks: '1', levelLabel: 'On Track / Complete', descriptor: 'Ongoing, balanced experiences across Creativity, Activity, and Service aligned with CAS guidelines.' },
      ],
      examinerTips: ['Verify Supervisor pre-approval before starting new experiences and maintain continuity across all 3 semesters.'],
    },
    {
      code: 'OUTCOMES',
      name: 'Evidence Across All 7 IB CAS Learning Outcomes',
      maxMarks: 1,
      summary: 'Concrete reflective evidence demonstrating every one of LO1–LO7 by completion of Grade 12.',
      descriptors: [
        { marks: '0', levelLabel: 'Incomplete', descriptor: 'One or more of LO1–LO7 lack genuine reflective evidence.' },
        { marks: '1', levelLabel: 'Complete', descriptor: 'All 7 Learning Outcomes (LO1–LO7) clearly substantiated by authentic reflections and evidence.' },
      ],
      examinerTips: ['Target 2–3 specific Learning Outcomes per major experience rather than checking all 7 superficially.'],
    },
    {
      code: 'PROJECT',
      name: 'Collaborative CAS Project (5 CAS Stages, ≥ 1 Month)',
      maxMarks: 1,
      summary: 'At least one collaborative project lasting a minimum of 1 month following Investigation, Preparation, Action, Reflection, Demonstration.',
      descriptors: [
        { marks: '0', levelLabel: 'Incomplete', descriptor: 'Solo effort, under 1 month, or missing collaborative planning/stages.' },
        { marks: '1', levelLabel: 'Complete', descriptor: 'Collaborative ≥1 month initiative explicitly documenting all 5 CAS Stages.' },
      ],
      examinerTips: ['Document team role division, partner communication, and post-project Demonstration evidence.'],
    },
    {
      code: 'REFLECTION',
      name: 'Reflection Quality & Formal CAS Interviews',
      maxMarks: 1,
      summary: 'Purposeful, honest reflections capturing growth, feelings, ethical insights, and learning rather than mere hour logs.',
      descriptors: [
        { marks: '0', levelLabel: 'Superficial', descriptor: 'Descriptive activity logs ("Today we met for 2 hours") without personal reflection.' },
        { marks: '1', levelLabel: 'Purposeful', descriptor: 'Rich, personal reflections linking concrete moments, challenges, and ethical considerations to LO1–LO7.' },
      ],
      examinerTips: ['Ask: What surprised me? What would I change next time? How did this affect the community or my own assumptions?'],
    },
  ],
};

export const SCIENCE_IA_2025_RUBRIC: IBAssessmentRubric = {
  id: 'science-ia-2025-24',
  projectType: 'IA',
  subjectSlug: 'biology-hl',
  variantKey: 'SCIENCE_IA_2025',
  title: 'Scientific Investigation (2025+ Biology HL & Chemistry SL IA)',
  cohortSession: 'May 2025+ / Class of 2028',
  totalMaxMarks: 24,
  wordLimit: '3,000 words maximum',
  weightingNote: '20% of final Science grade (equally weighted across 4 criteria × 6 marks)',
  overview:
    '2025+ Science Internal Assessment rubric shared by IB Biology HL and IB Chemistry SL: 24 marks total divided equally into Research Design (6), Data Analysis (6), Conclusion (6), and Evaluation (6), capped strictly at 3,000 words.',
  examinerNotes: [
    'Personal Engagement is no longer scored separately in the 2025+ Science IA; methodology rigor and analytical depth govern the full 24 marks.',
    'Note the 2025 emphasis on Data Analysis (6 marks) and Evaluation (6 marks)—uncertainty propagation, statistical/graphical rigor, and quantifying relative error impact are essential for 5–6 bands.',
    'Strict 3,000-word ceiling (covers body text, analysis, tables of prose; excludes raw data tables, citations, and bibliography).',
  ],
  criteria: [
    {
      code: 'A',
      name: 'Research Design',
      maxMarks: 6,
      weightDescription: '25% of IA',
      summary:
        'Focused research question (IV, DV, organism/chemical system), scientific context, reproducible methodology controlling variables with sufficient data, and safety/ethics/environmental precautions.',
      descriptors: [
        {
          marks: '0',
          levelLabel: 'Not achieved',
          descriptor: 'The report does not reach a standard described by the descriptors below.',
        },
        {
          marks: '1-2',
          levelLabel: 'Limited',
          descriptor:
            'The research question is stated without full context. Methodological steps lack control of key variables or sufficient repeats, and safety/ethical/environmental considerations are minimal.',
        },
        {
          marks: '3-4',
          levelLabel: 'Good',
          descriptor:
            'The research question is situated within relevant scientific context. The methodology enables collection of relevant data with major variables controlled, though justification for sample size/range or safety/ethics could be more thorough.',
        },
        {
          marks: '5-6',
          levelLabel: 'Excellent',
          descriptor:
            'The research question is clearly defined and grounded in pertinent scientific theory. The methodology is fully detailed, reproducible, justified (range, increments, ≥5 trials/conditions), controls all relevant variables, and thoroughly addresses safety, ethical, and environmental issues.',
        },
      ],
      examinerTips: [
        'Explicitly state IV (at least 5 levels/conditions), DV (with measurement instrument & uncertainty), and a table of Controlled Variables explaining *why* and *how* each is controlled.',
        'Include preliminary trial rationale explaining why your chosen range/concentrations avoid floor/ceiling effects.',
      ],
    },
    {
      code: 'B',
      name: 'Data Analysis',
      maxMarks: 6,
      weightDescription: '25% of IA',
      summary:
        'Recording clear raw quantitative/qualitative data with instrument precision/uncertainties, accurate mathematical processing, uncertainty propagation, and clear visual graphing.',
      descriptors: [
        {
          marks: '0',
          levelLabel: 'Not achieved',
          descriptor: 'The report does not reach a standard described by the descriptors below.',
        },
        {
          marks: '1-2',
          levelLabel: 'Limited',
          descriptor:
            'Raw data is incomplete, poorly organized, or missing units/uncertainties. Processing contains significant arithmetic errors or lacks error/uncertainty treatment.',
        },
        {
          marks: '3-4',
          levelLabel: 'Good',
          descriptor:
            'Raw and processed data are recorded clearly with appropriate units and mostly consistent precision. Graphs and calculations are generally accurate, though uncertainty propagation or statistical validation has minor omissions.',
        },
        {
          marks: '5-6',
          levelLabel: 'Excellent',
          descriptor:
            'Communication of raw quantitative and qualitative observations is clear and precise (consistent decimal places and instrument uncertainties). Data processing, uncertainty propagation (or error bars / statistical tests like t-test/ANOVA/R²), and graphs are accurate, complete, and directly address the RQ.',
        },
      ],
      examinerTips: [
        'Show one complete worked sample calculation (including percentage/absolute uncertainty propagation) and keep decimal precision consistent with uncertainties.',
        'Plot graphs with labeled axes + units, error bars, trendlines, and R² or min/max gradient lines where relevant.',
      ],
    },
    {
      code: 'C',
      name: 'Conclusion',
      maxMarks: 6,
      weightDescription: '25% of IA',
      summary:
        'Stating a justified conclusion directly answering the RQ, interpreting trends/uncertainties, and comparing experimental outcomes against accepted scientific literature.',
      descriptors: [
        {
          marks: '0',
          levelLabel: 'Not achieved',
          descriptor: 'The report does not reach a standard described by the descriptors below.',
        },
        {
          marks: '1-2',
          levelLabel: 'Limited',
          descriptor:
            'A conclusion is stated that is only loosely consistent with the data, with minimal scientific justification or comparison to accepted scientific context.',
        },
        {
          marks: '3-4',
          levelLabel: 'Good',
          descriptor:
            'A relevant conclusion consistent with the processed data is described and linked to scientific concepts, with some comparison to accepted literature values or theories.',
        },
        {
          marks: '5-6',
          levelLabel: 'Excellent',
          descriptor:
            'A fully justified conclusion directly answers the research question, rigorously incorporates measurement uncertainties/statistical significance, and thoughtfully compares findings with cited accepted scientific literature or theoretical models.',
        },
      ],
      examinerTips: [
        'Compare your experimental value or trend explicitly with a cited literature value (compute % error vs % experimental uncertainty!).',
        'Do not claim "proven" — state whether data supports or refutes the hypothesis within uncertainty bounds.',
      ],
    },
    {
      code: 'D',
      name: 'Evaluation',
      maxMarks: 6,
      weightDescription: '25% of IA',
      summary:
        'Identifying specific methodological weaknesses/limitations (random vs systematic error, directional impact on results) and proposing realistic, targeted improvements.',
      descriptors: [
        {
          marks: '0',
          levelLabel: 'Not achieved',
          descriptor: 'The report does not reach a standard described by the descriptors below.',
        },
        {
          marks: '1-2',
          levelLabel: 'Limited',
          descriptor:
            'Generic weaknesses (e.g., "human error", "more trials") are listed without explaining their impact on results or offering realistic improvements.',
        },
        {
          marks: '3-4',
          levelLabel: 'Good',
          descriptor:
            'Specific methodological weaknesses and limitations are identified with some explanation of how they affected the data, accompanied by relevant improvements.',
        },
        {
          marks: '5-6',
          levelLabel: 'Excellent',
          descriptor:
            'Methodological weaknesses and limitations (distinguishing random vs systematic errors and their relative significance/directional impact on the outcome) are critically evaluated, paired with realistic, specific, and feasible improvements and meaningful extensions.',
        },
      ],
      examinerTips: [
        'Ban the phrase "human error". For every limitation, state: (1) Specific flaw, (2) Systematic or random? (3) Direction of bias (overestimates/underestimates DV?), and (4) Concrete apparatus/protocol fix.',
      ],
    },
  ],
};

export const HISTORY_IA_2028_RUBRIC: IBAssessmentRubric = {
  id: 'history-ia-2028-24',
  projectType: 'IA',
  subjectSlug: 'history-hl',
  variantKey: 'HISTORY_IA_2028',
  title: 'Historical Investigation (May 2028 Redesigned History IA)',
  cohortSession: 'May 2028 First Assessment',
  totalMaxMarks: 24,
  wordLimit: '2,200 words maximum · maximum 7 sources',
  weightingNote: '20% of History HL grade (Criterion A: 6, Criterion B: 12, Criterion C: 6)',
  overview:
    'Redesigned May 2028 IB History Internal Assessment: totals 24 marks across Criterion A Identification & Evaluation of Sources (6), Criterion B Investigation (12), and Criterion C Conclusion & Historical Judgment (6), capped at 2,200 words and a maximum of 7 total sources. Note: The standalone Section 3 Reflection from the 2017/2020 guide has been REMOVED in the 2028 specification.',
  examinerNotes: [
    'May 2028 Guide Change: The standalone Reflection section (previously 4 marks / Section 3 out of 25) has been REMOVED. Do NOT write a separate Reflection section.',
    'Total word limit remains 2,200 words, and total sources cited in the investigation are strictly capped at a maximum of 7 sources.',
    'Follow Chicago Manual of Style Notes & Bibliography (superscript footnotes + alphabetized bibliography) per classroom Purdue OWL guidelines.',
  ],
  criteria: [
    {
      code: 'A',
      name: 'Identification and evaluation of sources',
      maxMarks: 6,
      weightDescription: '25% of IA',
      summary:
        'Formulate a clearly stated, sharply bounded research question; select relevant sources (≤7 total); and evaluate TWO sources explicitly for Value and Limitations via Origin, Purpose, and Content.',
      descriptors: [
        {
          marks: '0',
          levelLabel: 'Not achieved',
          descriptor: 'The work does not reach a standard described by the descriptors below.',
        },
        {
          marks: '1-2',
          levelLabel: 'Limited',
          descriptor:
            'A question for investigation has been stated, though it may lack clarity or focus. Two sources are identified, but evaluation of their value and limitations is superficial, assertive, or disconnected from origin, purpose, and content.',
        },
        {
          marks: '3-4',
          levelLabel: 'Good',
          descriptor:
            'A clear and relevant research question is stated. Two appropriate sources are selected and evaluated with explicit reference to origin, purpose, and content, establishing valid values and limitations, though balance or depth may vary.',
        },
        {
          marks: '5-6',
          levelLabel: 'Excellent',
          descriptor:
            'An appropriate, sharply focused research question is clearly stated and justified. Two contrasting, highly pertinent sources are evaluated in thorough depth, explicitly linking Origin, Purpose, and Content to specific analytical Values and Limitations for this exact investigation.',
        },
      ],
      examinerTips: [
        'Pair one primary source and one secondary scholarly work (or two contrasting perspectives) and stay within the 7-source maximum across the entire IA.',
        'Never write generic statements like "it is biased because it is secondary"; tie Origin (who/when/archives) and Purpose (audience/aim) directly to what it illuminates and distorts.',
      ],
    },
    {
      code: 'B',
      name: 'Investigation',
      maxMarks: 12,
      weightDescription: '50% of IA',
      summary:
        'Coherent, analytical historical investigation evaluating multiple causal factors, evidence from up to 7 sources, and competing historiographical perspectives.',
      descriptors: [
        {
          marks: '0',
          levelLabel: 'Not achieved',
          descriptor: 'The work does not reach a standard described by the descriptors below.',
        },
        {
          marks: '1-3',
          levelLabel: 'Limited',
          descriptor:
            'The investigation lacks organization and coherence. It relies heavily on narrative or descriptive summary with minimal critical analysis or awareness of different perspectives.',
        },
        {
          marks: '4-6',
          levelLabel: 'Satisfactory',
          descriptor:
            'The investigation is organized and includes some analytical commentary, though narrative description often dominates. Evidence is used unevenly and multiple perspectives are insufficiently explored.',
        },
        {
          marks: '7-9',
          levelLabel: 'Good',
          descriptor:
            'The investigation is clear, coherent, and effectively structured around analytical themes focused on the question. Specific evidence from relevant sources supports the argument, and differing perspectives are evaluated.',
        },
        {
          marks: '10-12',
          levelLabel: 'Excellent',
          descriptor:
            'The investigation is consistently analytical, incisive, and tightly organized around the research question. A balanced range of exact empirical evidence and competing historiographical perspectives are critically synthesized and weighed throughout.',
        },
      ],
      examinerTips: [
        'Organize thematically rather than chronologically; weigh competing factors explicitly ("While X accelerated..., structural Y proved decisive...").',
        'Cite precisely using Chicago NB footnotes and engage historians’ actual evidence rather than merely name-dropping.',
      ],
    },
    {
      code: 'C',
      name: 'Conclusion and historical judgment',
      maxMarks: 6,
      weightDescription: '25% of IA',
      summary:
        'Formulating a well-substantiated conclusion directly answering the research question and demonstrating mature historical judgment grounded in the investigation.',
      descriptors: [
        {
          marks: '0',
          levelLabel: 'Not achieved',
          descriptor: 'The work does not reach a standard described by the descriptors below.',
        },
        {
          marks: '1-2',
          levelLabel: 'Limited',
          descriptor:
            'A conclusion is present but appears disconnected from the body evidence or merely repeats points without offering reasoned historical judgment.',
        },
        {
          marks: '3-4',
          levelLabel: 'Good',
          descriptor:
            'A clear conclusion consistent with the evidence is presented, addressing the research question with reasonable historical judgment.',
        },
        {
          marks: '5-6',
          levelLabel: 'Excellent',
          descriptor:
            'A compelling, nuanced conclusion follows organically from the investigation’s evidence, directly resolving the research question while demonstrating sophisticated historical judgment on causation, perspective, and limits of historical certainty.',
        },
      ],
      examinerTips: [
        'Note the 2028 shift: instead of a separate reflection section, embed your critical awareness of historical evidence, perspective limits, and causal weight directly into your Criterion C historical judgment.',
      ],
    },
  ],
};

export const MATH_AA_SL_IA_RUBRIC: IBAssessmentRubric = {
  id: 'math-aa-sl-ia-20',
  projectType: 'IA',
  subjectSlug: 'math-aa-sl',
  variantKey: 'MATH_AA_SL_IA',
  title: 'Mathematical Exploration (Math AA SL IA)',
  cohortSession: 'May 2021–2028 Curriculum',
  totalMaxMarks: 20,
  wordLimit: '12–20 pages (concise mathematical prose & derivations)',
  weightingNote: '20% of final Math AA SL grade',
  overview:
    '20-mark Mathematical Exploration assessed across Presentation (4), Mathematical Communication (4), Personal Engagement (3), Reflection (3), and Use of Mathematics (6).',
  examinerNotes: [
    'Replace spreadsheet/calculator notation (`^`, `*`, `E-4`) with proper mathematical typesetting (`x^2`, `× 10^-4`).',
    'Mathematics should be commensurate with IB Math AA SL (avoid trivial arithmetic-only stats or copied university proofs you cannot explain).',
    'Embed Reflection throughout the exploration—not solely in a concluding paragraph.',
  ],
  criteria: [
    {
      code: 'A',
      name: 'Presentation',
      maxMarks: 4,
      weightDescription: '20% of IA',
      summary: 'Coherence, logical structure, conciseness, and completeness.',
      descriptors: [
        { marks: '0', levelLabel: 'Not achieved', descriptor: 'The exploration does not reach the standard described below.' },
        { marks: '1', levelLabel: 'Basic', descriptor: 'Some organization, though lacking coherence or missing clear aim/conclusion.' },
        { marks: '2', levelLabel: 'Acceptable', descriptor: 'Some coherence and organization, though repetitive or overly long in places.' },
        { marks: '3', levelLabel: 'Good', descriptor: 'Coherent and well organized; flows logically with clear introduction and conclusion.' },
        { marks: '4', levelLabel: 'Excellent', descriptor: 'Coherent, well organized, and concise—every graph, derivation, and paragraph directly advances the aim.' },
      ],
      examinerTips: ['Include a clear statement of aim, avoid giant raw-data appendix dumps in the main flow, and stay concise (12–20 pages).'],
    },
    {
      code: 'B',
      name: 'Mathematical Communication',
      maxMarks: 4,
      weightDescription: '20% of IA',
      summary: 'Appropriate mathematical notation, terminology, definitions of variables, and multiple representations.',
      descriptors: [
        { marks: '0', levelLabel: 'Not achieved', descriptor: 'Standard not reached.' },
        { marks: '1', levelLabel: 'Basic', descriptor: 'Frequent notation errors, undefined variables, or computer syntax (`*`, `^`).' },
        { marks: '2', levelLabel: 'Acceptable', descriptor: 'Some appropriate mathematical language and representations, with occasional notation inconsistencies.' },
        { marks: '3', levelLabel: 'Good', descriptor: 'Clear mathematical language, properly defined variables, and effective graphs/tables/formulas.' },
        { marks: '4', levelLabel: 'Excellent', descriptor: 'Consistently accurate, precise mathematical notation and terminology across multiple seamlessly linked representations.' },
      ],
      examinerTips: ['Define every variable with units on first use, use `≈` for rounded answers, and label graph axes & keys cleanly.'],
    },
    {
      code: 'C',
      name: 'Personal Engagement',
      maxMarks: 3,
      weightDescription: '15% of IA',
      summary: 'Independent mathematical thinking, curiosity, creativity, and authentic personal ownership.',
      descriptors: [
        { marks: '0', levelLabel: 'Not achieved', descriptor: 'Standard not reached.' },
        { marks: '1', levelLabel: 'Limited', descriptor: 'Abundant superficial interest or standard textbook recipe with little independent exploration.' },
        { marks: '2', levelLabel: 'Good', descriptor: 'Genuine personal engagement shown through independent data collection, testing variations, or modeling.' },
        { marks: '3', levelLabel: 'Outstanding', descriptor: 'Abundant evidence of independent, creative, and insightful personal mathematical investigation.' },
      ],
      examinerTips: ['Show active agency: ask "what if?", modify models when initial fits fail, or derive relationships from your own measurements.'],
    },
    {
      code: 'D',
      name: 'Reflection',
      maxMarks: 3,
      weightDescription: '15% of IA',
      summary: 'Critical reflection on mathematical results, model assumptions, limitations, validity, and extensions.',
      descriptors: [
        { marks: '0', levelLabel: 'Not achieved', descriptor: 'Standard not reached.' },
        { marks: '1', levelLabel: 'Limited', descriptor: 'Superficial or descriptive reflection ("it was interesting") without mathematical scrutiny.' },
        { marks: '2', levelLabel: 'Meaningful', descriptor: 'Meaningful reflection on results, assumptions, and limitations of the mathematical model.' },
        { marks: '3', levelLabel: 'Critical', descriptor: 'Substantial, critical mathematical reflection examining accuracy, sensitivity, broader implications, and logical extensions.' },
      ],
      examinerTips: ['Check reasonableness of your model at extreme bounds ($t \\to 0$ or $t \\to \\infty$) and quantify error residuals.'],
    },
    {
      code: 'E',
      name: 'Use of Mathematics',
      maxMarks: 6,
      weightDescription: '30% of IA',
      summary: 'Relevance, SL-commensurate mathematical sophistication, thoroughness, and correctness.',
      descriptors: [
        { marks: '0', levelLabel: 'Not achieved', descriptor: 'Standard not reached.' },
        { marks: '1-2', levelLabel: 'Limited', descriptor: 'Mathematics is elementary (below SL level) or contains major conceptual errors.' },
        { marks: '3-4', levelLabel: 'Good', descriptor: 'Relevant SL-level mathematics used with mostly correct derivations and reasonable understanding.' },
        { marks: '5-6', levelLabel: 'Excellent', descriptor: 'Thorough, rigorous, completely accurate SL-level (or subtly extended) mathematics demonstrating clear conceptual mastery.' },
      ],
      examinerTips: ['Explain *why* each step works (e.g., differentiating to optimize, justifying domain bounds) rather than dropping black-box calculator outputs.'],
    },
  ],
};

export const ENGLISH_LIT_HL_ESSAY_RUBRIC: IBAssessmentRubric = {
  id: 'english-lit-hl-essay-20',
  projectType: 'IA',
  subjectSlug: 'english-lit-hl',
  variantKey: 'HL_ESSAY',
  title: 'English A: Literature HL — Higher Level (HL) Essay',
  cohortSession: 'May 2021–2028 Curriculum',
  totalMaxMarks: 20,
  wordLimit: '1,200–1,500 words',
  weightingNote: '20% of English A: Literature HL grade (4 criteria × 5 marks)',
  overview:
    '1,200–1,500 word formal literary investigation developing a sustained line of inquiry on a single studied literary work (distinct from IO and Paper 2 works), anchored in one of the 7 IB Language A concepts.',
  examinerNotes: [
    'Strictly stay within 1,200–1,500 words (citations included in body; bibliography excluded).',
    'Anchor your line of inquiry explicitly in one of the 7 IB concepts: Identity, Culture, Creativity, Communication, Perspective, Transformation, or Representation.',
    'Do not select a work used in your Individual Oral (IO) or planned for Paper 2.',
  ],
  criteria: [
    {
      code: 'A',
      name: 'Knowledge, understanding and interpretation',
      maxMarks: 5,
      weightDescription: '25% of HL Essay',
      summary: 'Depth of literary knowledge, conceptual understanding, and well-supported textual interpretation.',
      descriptors: [
        { marks: '0', levelLabel: 'Not achieved', descriptor: 'Work does not reach the standard described below.' },
        { marks: '1', levelLabel: 'Basic', descriptor: 'Little knowledge/understanding; mostly plot summary with minimal textual support.' },
        { marks: '2', levelLabel: 'Some', descriptor: 'Some knowledge and basic interpretation, though literal or unsubstantiated at points.' },
        { marks: '3', levelLabel: 'Satisfactory', descriptor: 'Adequate knowledge and sound interpretation supported by relevant references to the work.' },
        { marks: '4', levelLabel: 'Good', descriptor: 'Good knowledge and convincing interpretation consistently justified by well-chosen textual references.' },
        { marks: '5', levelLabel: 'Perceptive', descriptor: 'Perceptive, nuanced understanding and insightful interpretation richly substantiated across the whole work.' },
      ],
      examinerTips: ['Treat the whole text rather than only one isolated scene, weaving embedded quotations smoothly into analytical claims.'],
    },
    {
      code: 'B',
      name: 'Analysis and evaluation',
      maxMarks: 5,
      weightDescription: '25% of HL Essay',
      summary: 'Evaluation of how authorial choices (form, structure, language, style) construct meaning in relation to the line of inquiry.',
      descriptors: [
        { marks: '0', levelLabel: 'Not achieved', descriptor: 'Standard not reached.' },
        { marks: '1', levelLabel: 'Basic', descriptor: 'Descriptive rather than analytical; identifies few literary features without explaining effect.' },
        { marks: '2', levelLabel: 'Some', descriptor: 'Some analysis of features, though often mechanical feature-spotting.' },
        { marks: '3', levelLabel: 'Satisfactory', descriptor: 'Adequate analysis of authorial choices and how they shape meaning.' },
        { marks: '4', levelLabel: 'Good', descriptor: 'Consistent, insightful analysis and evaluation of authorial choices tied directly to the line of inquiry.' },
        { marks: '5', levelLabel: 'Persuasive', descriptor: 'Consistently perceptive evaluation of how subtle authorial choices across form and language construct complex meaning.' },
      ],
      examinerTips: ['Move beyond naming devices: always analyze *how* and *why* a choice shapes reader response and your conceptual inquiry.'],
    },
    {
      code: 'C',
      name: 'Focus, organization and development',
      maxMarks: 5,
      weightDescription: '25% of HL Essay',
      summary: 'Coherence, sustained conceptual line of inquiry, balanced paragraphing, and logical progression.',
      descriptors: [
        { marks: '0', levelLabel: 'Not achieved', descriptor: 'Standard not reached.' },
        { marks: '1', levelLabel: 'Little focus', descriptor: 'Weak organization; loses sight of line of inquiry.' },
        { marks: '2', levelLabel: 'Some focus', descriptor: 'Basic structure, though progression is uneven or loosely linked.' },
        { marks: '3', levelLabel: 'Focused', descriptor: 'Generally focused and organized around a clear line of inquiry.' },
        { marks: '4', levelLabel: 'Well organized', descriptor: 'Well organized, tightly focused, and logically developed throughout.' },
        { marks: '5', levelLabel: 'Effectively developed', descriptor: 'Persuasively organized and cohesively developed; every paragraph advances a refined thesis.' },
      ],
      examinerTips: ['Keep topic sentences conceptual and argumentative rather than chronological plot markers.'],
    },
    {
      code: 'D',
      name: 'Language',
      maxMarks: 5,
      weightDescription: '25% of HL Essay',
      summary: 'Clarity, precision, register, literary terminology, and grammatical accuracy.',
      descriptors: [
        { marks: '0', levelLabel: 'Not achieved', descriptor: 'Standard not reached.' },
        { marks: '1', levelLabel: 'Limited', descriptor: 'Frequent errors impede clarity; inappropriate register.' },
        { marks: '2', levelLabel: 'Basic', descriptor: 'Clear overall, though repetitive vocabulary or occasional errors.' },
        { marks: '3', levelLabel: 'Clear', descriptor: 'Clear, accurate, and appropriate academic register.' },
        { marks: '4', levelLabel: 'Very clear', descriptor: 'Clear, varied, and precise prose with apt literary terminology.' },
        { marks: '5', levelLabel: 'Compelling', descriptor: 'Consistently precise, concise, sophisticated academic prose with seamless literary vocabulary.' },
      ],
      examinerTips: ['Use literary present tense, precise analytical verbs, and proper MLA/academic citation formatting.'],
    },
  ],
};

export const ENGLISH_LIT_IO_RUBRIC: IBAssessmentRubric = {
  id: 'english-lit-io-40',
  projectType: 'IA',
  subjectSlug: 'english-lit-hl',
  variantKey: 'IO',
  title: 'English A: Literature HL — Individual Oral (IO)',
  cohortSession: 'May 2021–2028 Curriculum',
  totalMaxMarks: 40,
  wordLimit: '15 min (10m prepared presentation + 5m discussion) · max 10 bullet-point outline',
  weightingNote: '20% of English A: Literature HL grade (4 criteria × 10 marks)',
  overview:
    '40-mark Individual Oral examining how a single narrow, transnational Global Issue is presented across two ~40-line extracts: one work originally written in English and one work studied in translation.',
  examinerNotes: [
    'Balance time evenly: ~5 minutes per work, balancing close reading of the 40-line extract with wider significance in the whole work.',
    'Frame the Global Issue within one of the 5 Fields of Inquiry (e.g., Culture/Identity/Community or Beliefs/Values/Education—such as classroom Family, Food, or Religion & Culture prompts).',
  ],
  criteria: [
    {
      code: 'A',
      name: 'Knowledge, understanding and interpretation',
      maxMarks: 10,
      weightDescription: '25% of IO',
      summary: 'Understanding of both extracts and whole works in relation to the chosen Global Issue.',
      descriptors: [
        { marks: '0', levelLabel: 'Not achieved', descriptor: 'Standard not reached.' },
        { marks: '1-2', levelLabel: 'Limited', descriptor: 'Superficial understanding of texts or weak link to the Global Issue.' },
        { marks: '3-4', levelLabel: 'Basic', descriptor: 'Some understanding of extracts; limited integration of whole works.' },
        { marks: '5-6', levelLabel: 'Satisfactory', descriptor: 'Adequate understanding of extracts and whole works relative to the Global Issue.' },
        { marks: '7-8', levelLabel: 'Good', descriptor: 'Good, well-supported understanding balancing extract detail and whole-work context.' },
        { marks: '9-10', levelLabel: 'Perceptive', descriptor: 'Perceptive, persuasive interpretation of both extracts and whole works illuminated through the Global Issue.' },
      ],
      examinerTips: ['Explicitly connect specific lines in each 40-line extract to patterns across the rest of the work.'],
    },
    {
      code: 'B',
      name: 'Analysis and evaluation',
      maxMarks: 10,
      weightDescription: '25% of IO',
      summary: 'Evaluation of how authorial choices in both texts present the Global Issue.',
      descriptors: [
        { marks: '0', levelLabel: 'Not achieved', descriptor: 'Standard not reached.' },
        { marks: '1-2', levelLabel: 'Limited', descriptor: 'Descriptive summary with minimal attention to authorial technique.' },
        { marks: '3-4', levelLabel: 'Basic', descriptor: 'Occasional identification of features without analyzing effects.' },
        { marks: '5-6', levelLabel: 'Satisfactory', descriptor: 'Adequate analysis of authorial choices in relation to the Global Issue.' },
        { marks: '7-8', levelLabel: 'Good', descriptor: 'Good, sustained analysis and evaluation of how authorial choices shape the Global Issue.' },
        { marks: '9-10', levelLabel: 'Perceptive', descriptor: 'Insightful, balanced evaluation of subtle literary craft across both extracts and whole works.' },
      ],
      examinerTips: ['Compare *how* each author’s distinct medium/form constructs the Global Issue.'],
    },
    {
      code: 'C',
      name: 'Focus and organization',
      maxMarks: 10,
      weightDescription: '25% of IO',
      summary: 'Coherent structure, balanced coverage of both texts, and purposeful transitions.',
      descriptors: [
        { marks: '0', levelLabel: 'Not achieved', descriptor: 'Standard not reached.' },
        { marks: '1-2', levelLabel: 'Unfocused', descriptor: 'Disorganized delivery or lopsided focus.' },
        { marks: '3-4', levelLabel: 'Basic', descriptor: 'Some structure, though unbalanced between extract and whole work or between texts.' },
        { marks: '5-6', levelLabel: 'Satisfactory', descriptor: 'Clear structure with generally balanced treatment.' },
        { marks: '7-8', levelLabel: 'Well organized', descriptor: 'Well-organized, focused delivery balancing extracts and whole works smoothly.' },
        { marks: '9-10', levelLabel: 'Cohesive & Effective', descriptor: 'Seamless, well-paced 10-minute presentation with organic synthesis and responsive 5-minute discussion.' },
      ],
      examinerTips: ['Time-box 1 min intro, ~4 min Work 1, ~4 min Work 2, ~1 min synthesis so you never run out of time on Work 2.'],
    },
    {
      code: 'D',
      name: 'Language',
      maxMarks: 10,
      weightDescription: '25% of IO',
      summary: 'Clear, accurate, persuasive spoken academic register and literary vocabulary.',
      descriptors: [
        { marks: '0', levelLabel: 'Not achieved', descriptor: 'Standard not reached.' },
        { marks: '1-2', levelLabel: 'Limited', descriptor: 'Unclear expression or frequent errors impeding communication.' },
        { marks: '3-4', levelLabel: 'Basic', descriptor: 'Understandable, though informal or imprecise vocabulary.' },
        { marks: '5-6', levelLabel: 'Clear', descriptor: 'Clear, accurate spoken English suitable for literary discussion.' },
        { marks: '7-8', levelLabel: 'Effective', descriptor: 'Clear, varied, and precise literary vocabulary throughout.' },
        { marks: '9-10', levelLabel: 'Compelling', descriptor: 'Articulate, nuanced, persuasive oral register seamlessly integrating literary terms.' },
      ],
      examinerTips: ['Speak from your 10-bullet outline naturally rather than reading a memorized script.'],
    },
  ],
};

export const FRENCH_B_SL_IO_RUBRIC: IBAssessmentRubric = {
  id: 'french-b-sl-io-30',
  projectType: 'IA',
  subjectSlug: 'french-b-sl',
  variantKey: 'FRENCH_B_SL_IO',
  title: 'French B SL — Oral individuel (Individual Oral)',
  cohortSession: 'May 2020–2028 Curriculum',
  totalMaxMarks: 30,
  wordLimit: '15 min preparation (max 10 bullet notes) · 12–15 min oral',
  weightingNote: '25% of final French B SL grade',
  overview:
    '30-mark French B SL Individual Oral evaluated across Criterion A Language (12), Criterion B1 Message — Visual Stimulus (6), Criterion B2 Message — Conversation (6), and Criterion C Interactive Skills (6).',
  examinerNotes: [
    'Part 1 (3–4 min): Present the visual stimulus, identify the Prescribed Theme, and make an explicit cultural connection to the Francophone world.',
    'Part 2 (4–5 min): Follow-up discussion with the teacher exploring deeper implications of the stimulus and theme.',
    'Part 3 (5–6 min): General conversation transitioning to at least one OTHER Prescribed Theme.',
  ],
  criteria: [
    {
      code: 'A',
      name: 'Language (Langue)',
      maxMarks: 12,
      weightDescription: '40% of IO',
      summary: 'Range and accuracy of French vocabulary, complex grammatical structures, idiomatic expressions, and pronunciation/intonation.',
      descriptors: [
        { marks: '0', levelLabel: 'Not achieved', descriptor: 'The work does not reach a standard described by the descriptors below.' },
        { marks: '1-3', levelLabel: 'Limited', descriptor: 'Basic vocabulary and simple structures; frequent grammatical/pronunciation errors often impede communication.' },
        { marks: '4-6', levelLabel: 'Satisfactory', descriptor: 'Adequate theme vocabulary and basic tenses used fairly accurately; some attempts at complex structures with errors that rarely obscure meaning.' },
        { marks: '7-9', levelLabel: 'Good', descriptor: 'Varied, idiomatic vocabulary and good control of basic and complex structures (subjonctif, conditionnel, pronoms relatifs); clear pronunciation and intonation.' },
        { marks: '10-12', levelLabel: 'Excellent', descriptor: 'Rich, idiomatic, precise French across registers with sustained accuracy in complex grammatical structures; natural pronunciation and fluency.' },
      ],
      examinerTips: ['Use varied logical connectors (*néanmoins, d’ailleurs, en revanche*) and trigger at least 2–3 subjunctive and conditional clauses naturally.'],
    },
    {
      code: 'B1',
      name: 'Message — Visual Stimulus (Présentation)',
      maxMarks: 6,
      weightDescription: '20% of IO',
      summary: 'Relevance to the image, concise description, personal interpretation, and explicit connection to a Francophone target culture and Prescribed Theme.',
      descriptors: [
        { marks: '0', levelLabel: 'Not achieved', descriptor: 'Standard not reached.' },
        { marks: '1-2', levelLabel: 'Limited', descriptor: 'Superficial or literal listing of image details; weak or missing link to the theme or Francophone culture.' },
        { marks: '3-4', levelLabel: 'Good', descriptor: 'Relevant description and clear link to the theme, with some reference to target Francophone culture.' },
        { marks: '5-6', levelLabel: 'Excellent', descriptor: 'Concise description quickly moving into insightful personal interpretation explicitly anchored in Francophone cultural context and the Prescribed Theme.' },
      ],
      examinerTips: ['Spend at most 45–60 seconds describing *what is in the photo*; devote the remaining 2.5 minutes to cultural interpretation and Francophone examples!'],
    },
    {
      code: 'B2',
      name: 'Message — Conversation (Discussion et conversation)',
      maxMarks: 6,
      weightDescription: '20% of IO',
      summary: 'Relevance, depth, and reasoned development of ideas during Parts 2 and 3.',
      descriptors: [
        { marks: '0', levelLabel: 'Not achieved', descriptor: 'Standard not reached.' },
        { marks: '1-2', levelLabel: 'Limited', descriptor: 'Brief, underdeveloped answers often off-topic or hesitant.' },
        { marks: '3-4', levelLabel: 'Good', descriptor: 'Relevant, clearly explained responses with supporting examples across themes.' },
        { marks: '5-6', levelLabel: 'Excellent', descriptor: 'Nuanced, well-developed, persuasive responses offering thoughtful cultural comparisons and personal viewpoints.' },
      ],
      examinerTips: ['Answer every question with Opinion + Justification + Concrete Example (*À mon avis... parce que... par exemple...*).'],
    },
    {
      code: 'C',
      name: 'Interactive Skills — Communication (Compétences interactives)',
      maxMarks: 6,
      weightDescription: '20% of IO',
      summary: 'Comprehension of questions and ability to sustain spontaneous, natural interaction in French.',
      descriptors: [
        { marks: '0', levelLabel: 'Not achieved', descriptor: 'Standard not reached.' },
        { marks: '1-2', levelLabel: 'Limited', descriptor: 'Frequent hesitation or difficulty understanding prompts; struggles to sustain dialogue.' },
        { marks: '3-4', levelLabel: 'Good', descriptor: 'Understands prompts well and responds appropriately, maintaining conversation with occasional hesitation.' },
        { marks: '5-6', levelLabel: 'Excellent', descriptor: 'Spontaneous, engaged, fluid interaction—listens attentively, clarifies naturally if needed, and sustains dialogue effortlessly.' },
      ],
      examinerTips: ['Never answer with bare "Oui/Non"; pick up the teacher’s nuance and ask/extend the idea naturally in French.'],
    },
  ],
};

export const IB_RUBRICS = {
  EE_FA2027: EE_FA2027_RUBRIC,
  EE_LEGACY_34,
  TOK_ESSAY: TOK_ESSAY_RUBRIC,
  TOK_EXHIBITION: TOK_EXHIBITION_RUBRIC,
  CAS_2028: CAS_2028_RUBRIC,
  SCIENCE_IA_2025: SCIENCE_IA_2025_RUBRIC,
  HISTORY_IA_2028: HISTORY_IA_2028_RUBRIC,
  MATH_AA_SL_IA: MATH_AA_SL_IA_RUBRIC,
  ENGLISH_HL_ESSAY: ENGLISH_LIT_HL_ESSAY_RUBRIC,
  ENGLISH_IO: ENGLISH_LIT_IO_RUBRIC,
  FRENCH_B_SL_IO: FRENCH_B_SL_IO_RUBRIC,
} as const;

export const IB_RUBRICS_LIST: IBAssessmentRubric[] = Object.values(IB_RUBRICS);

export function getRubricForProject(
  projectType: CoreProjectType | string,
  subjectSlug?: string | null,
  variantKey?: string | null,
): IBAssessmentRubric {
  const normalizedType = String(projectType).toUpperCase();
  const normalizedVariant = variantKey ? String(variantKey).toUpperCase() : '';

  if (normalizedType === 'EE') {
    if (normalizedVariant === 'EE_LEGACY_34' || normalizedVariant === 'LEGACY' || normalizedVariant === '34') {
      return EE_LEGACY_34;
    }
    return EE_FA2027_RUBRIC;
  }

  if (normalizedType === 'TOK_ESSAY') {
    return TOK_ESSAY_RUBRIC;
  }

  if (normalizedType === 'TOK_EXHIBITION') {
    return TOK_EXHIBITION_RUBRIC;
  }

  if (normalizedType === 'CAS') {
    return CAS_2028_RUBRIC;
  }

  if (normalizedType === 'IA') {
    switch (subjectSlug) {
      case 'biology-hl':
        return {
          ...SCIENCE_IA_2025_RUBRIC,
          id: 'biology-hl-ia-2025',
          subjectSlug: 'biology-hl',
          title: 'Biology HL — Scientific Investigation (2025+ Science IA)',
        };
      case 'chemistry-sl':
        return {
          ...SCIENCE_IA_2025_RUBRIC,
          id: 'chemistry-sl-ia-2025',
          subjectSlug: 'chemistry-sl',
          title: 'Chemistry SL — Scientific Investigation (2025+ Science IA)',
        };
      case 'history-hl':
        return HISTORY_IA_2028_RUBRIC;
      case 'math-aa-sl':
        return MATH_AA_SL_IA_RUBRIC;
      case 'english-lit-hl':
        if (normalizedVariant === 'IO' || normalizedVariant === 'ENGLISH_IO') {
          return ENGLISH_LIT_IO_RUBRIC;
        }
        return ENGLISH_LIT_HL_ESSAY_RUBRIC;
      case 'french-b-sl':
        return FRENCH_B_SL_IO_RUBRIC;
      default:
        return SCIENCE_IA_2025_RUBRIC;
    }
  }

  return EE_FA2027_RUBRIC;
}
