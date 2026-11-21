import type { IBSubjectConfig } from './index';

export const ENGLISH_LIT_HL_CONFIG: IBSubjectConfig = {
  slug: 'english-lit-hl',
  name: 'English A: Literature',
  shortName: 'English Lit HL',
  level: 'HL',
  groupNumber: 1,
  firstAssessment: 'May 2021 (Current through Class of 2028)',
  description:
    'IB Diploma Studies in Language and Literature — English A: Literature Higher Level, organized across the 3 Areas of Exploration (Readers, Writers and Texts; Time and Space; Intertextuality: Connecting Texts), 7 Key Concepts, Global Issues, and HL Assessment Components (Paper 1 both unseen texts / 40 marks, Paper 2 Comparative Essay, HL Essay, and Individual Oral).',
  examPaperTypes: [
    'Paper 1 (Guided Literary Analysis)',
    'Paper 2 (Comparative Essay)',
  ],
  paper_types: [
    'Paper 1 (Guided Literary Analysis)',
    'Paper 2 (Comparative Essay)',
  ],
  assessmentComponents: [
    {
      name: 'Paper 1 — Guided Literary Analysis (Both Unseen Texts)',
      paperType: 'Paper 1 (Guided Literary Analysis)',
      duration: '2 hours 15 minutes',
      marks: 40,
      weightingPercent: 35,
      description:
        'HL students write two separate guided literary analyses (20 marks each = 40 marks total) on two unseen literary passages from different literary forms (prose fiction, prose non-fiction, poetry, or drama), each accompanied by a guiding question.',
      isExternal: true,
    },
    {
      name: 'Paper 2 — Comparative Essay',
      paperType: 'Paper 2 (Comparative Essay)',
      duration: '1 hour 45 minutes',
      marks: 30,
      weightingPercent: 25,
      description:
        'Write one comparative essay analyzing two studied literary works (neither used for the IO or HL Essay) in response to one of four unseen general essay prompts.',
      isExternal: true,
    },
    {
      name: 'Higher Level (HL) Essay',
      paperType: 'HL Essay',
      duration: 'Coursework',
      marks: 20,
      weightingPercent: 20,
      description:
        '1,200–1,500 word formal literary essay developing an independent line of inquiry on a single non-IO studied work, anchored in one of the 7 IB concepts.',
      isExternal: false,
    },
    {
      name: 'Individual Oral (IO)',
      paperType: 'Internal Assessment',
      duration: '15 minutes (10m presentation + 5m discussion)',
      marks: 40,
      weightingPercent: 20,
      description:
        'Oral examination examining how a chosen Global Issue is presented in two 40-line extracts: one work originally written in English and one work studied in translation.',
      isExternal: false,
    },
  ],
  commandTerms: [
    'Analyse',
    'Compare',
    'Compare and contrast',
    'Contrast',
    'Discuss',
    'Evaluate',
    'Examine',
    'Explore',
    'Justify',
    'To what extent',
  ],
  guidingPrinciples: [
    'Seven Central Concepts: Identity, Culture, Creativity, Communication, Perspective, Transformation, Representation.',
    'Five Global Issue Fields of Inquiry (for the Individual Oral): (1) Culture, identity and community; (2) Beliefs, values and education; (3) Politics, power and justice; (4) Art, creativity and the imagination; (5) Science, technology and the environment.',
    'HL Literature requires studying 13 literary works across all 3 Areas of Exploration, 4 literary forms, 3 periods, and 2 continents (including works in translation).',
    'At HL Paper 1, students must analyze BOTH unseen passages (40 marks total), demonstrating command of form-specific literary devices and analytical thesis framing.',
  ],
  iaOverview: {
    title: 'HL Essay (20m) & Individual Oral (40m)',
    maxMarks: 20,
    wordLimit: 'HL Essay: 1,200–1,500 words · IO: 15 min',
    weightingPercent: 40,
    summary:
      'HL coursework splits evenly between the external 1,200–1,500 word HL Essay (20 marks, 20%) and the internal 15-minute Individual Oral (40 marks, 20%).',
  },
  units: [
    {
      code: 'AoE1',
      title: 'Area of Exploration 1: Readers, Writers and Texts',
      guidanceNotes:
        'Focuses on close reading, how authorial choices construct meaning, and how readers engage with form, style, and ambiguity.',
      subtopics: [
        {
          code: 'AoE1.1',
          title: 'Close Reading, Authorial Choices & Literary Craft',
          guidanceNotes:
            'Analyzing how diction, syntax, figurative language, narrative perspective (free indirect discourse, unreliable narrators), poetic meter/enjambment, and dramatic stagecraft generate tone, tension, and thematic depth.',
          keyConcepts: ['Diction & imagery', 'Narrative voice', 'Poetic & dramatic form', 'Authorial technique'],
        },
        {
          code: 'AoE1.2',
          title: 'Reader Response, Ambiguity & Meaning Construction',
          guidanceNotes:
            'Investigating why different readers generate competing interpretations of textual gaps, irony, and symbols; evaluating the relationship between authorial intention and reader reception.',
          keyConcepts: ['Reader reception', 'Irony & ambiguity', 'Textual evidence'],
        },
      ],
    },
    {
      code: 'AoE2',
      title: 'Area of Exploration 2: Time and Space',
      guidanceNotes:
        'Explores how cultural, historical, and geographical contexts shape both the production of literature and how modern audiences interpret works across time and translation.',
      subtopics: [
        {
          code: 'AoE2.1',
          title: 'Historical, Cultural & Sociopolitical Contexts',
          guidanceNotes:
            'Examining how texts reflect, critique, or subvert historical values (family structures, food/hospitality rituals, religion and cultural norms, gender/class hierarchies) without reducing literature to mere historical summary.',
          keyConcepts: ['Context of production', 'Context of reception', 'Cultural values'],
        },
        {
          code: 'AoE2.2',
          title: 'Works in Translation & Cross-Cultural Perspectives',
          guidanceNotes:
            'Reading translated literature critically: recognizing culturally embedded idioms, religious/social structures, and how translation choices affect register, cadence, and worldview.',
          keyConcepts: ['Literature in translation', 'Cross-cultural reading', 'Representation & perspective'],
        },
      ],
    },
    {
      code: 'AoE3',
      title: 'Area of Exploration 3: Intertextuality: Connecting Texts',
      guidanceNotes:
        'Examines how texts speak to literary traditions, genres, and one another around shared motifs and transnational Global Issues.',
      subtopics: [
        {
          code: 'AoE3.1',
          title: 'Literary Traditions, Genres & Intertextual Dialogue',
          guidanceNotes:
            'Comparing how authors echo, transform, or subvert canonical conventions, myths, tragic arcs, or structural motifs across distinct periods and places.',
          keyConcepts: ['Intertextuality', 'Genre conventions', 'Allusion & subversion'],
        },
        {
          code: 'AoE3.2',
          title: 'Comparative Synthesis & Global Issue Formulation',
          guidanceNotes:
            'Formulating narrow, transnational, significant Global Issues (e.g., around Family, Food, Religion & Culture within Culture/Identity/Community or Beliefs/Values/Education) and synthesizing two works coherently.',
          keyConcepts: ['Global Issues', '5 Fields of Inquiry', 'Comparative thesis'],
        },
      ],
    },
    {
      code: 'COMP',
      title: 'Assessment Components & IB Concepts',
      guidanceNotes:
        'Structured preparation for Paper 1 (40m), Paper 2 (30m), HL Essay (20m), and Individual Oral (40m) across the 2026–2027/2028 assessment timeline.',
      subtopics: [
        {
          code: 'COMP.1',
          title: 'Paper 1: Guided Literary Analysis (Both Unseen Texts — 40 marks)',
          guidanceNotes:
            'At HL, students must write TWO full essays (2h 15m total, ~65 min each): one per unseen literary text from two different forms. Build a clear conceptual thesis answering the guiding question, organized analytically (not line-by-line summary).',
          keyConcepts: ['Both unseen texts (HL)', 'Guiding question thesis', 'Analytical organization'],
        },
        {
          code: 'COMP.2',
          title: 'Paper 2: Comparative Essay (30 marks)',
          guidanceNotes:
            '1h 45m comparative essay on 2 studied works (different from IO & HL Essay). Compare similarities AND differences in authorial technique and thematic effect point-by-point rather than in two disconnected halves.',
          keyConcepts: ['Point-by-point comparison', 'Authorial choices', 'Prompt interrogation'],
        },
        {
          code: 'COMP.3',
          title: 'HL Essay (1,200–1,500 words — 20 marks)',
          isHlOnly: true,
          guidanceNotes:
            'Independent formal literary essay examining one studied work through a sharply framed line of inquiry anchored in one of the 7 concepts (Identity, Culture, Creativity, Communication, Perspective, Transformation, Representation).',
          keyConcepts: ['7 IB Concepts', 'Sustained line of inquiry', '1,200–1,500 words'],
        },
        {
          code: 'COMP.4',
          title: 'Individual Oral (IO — 15 min — 40 marks)',
          guidanceNotes:
            '10-minute prepared analysis + 5-minute teacher follow-up examining one narrow Global Issue across 40-line extracts from 1 English original work and 1 work in translation, balancing extract close reading with whole-work significance (50/50 split).',
          keyConcepts: ['Extract + whole work balance', 'Original + translation pairing', '10m + 5m structure'],
        },
      ],
    },
  ],
};
