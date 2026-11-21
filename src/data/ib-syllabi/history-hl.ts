import type { IBSubjectConfig } from './index';

export const HISTORY_HL_CONFIG: IBSubjectConfig = {
  slug: 'history-hl',
  name: 'History',
  shortName: 'History HL',
  level: 'HL',
  groupNumber: 3,
  firstAssessment: 'May 2028 (Redesigned 2028 Guide · Focus: IA & Paper 3)',
  description:
    'IB Diploma History Higher Level aligned strictly to the redesigned May 2028 First Assessment curriculum and Pearson 2026 Paper 3 Europe. Active Year 1 Classroom Focus: May 2028 Historical Investigation (24-mark 3-section IA) and Paper 3 Regional Study — Europe (European Totalitarianism 1918–1941 & Italy 1890–1939).',
  examPaperTypes: [
    'Paper 3 (Regional Study — Europe)',
    'Internal Assessment (2028 History IA)',
    'Paper 1 (Focused Study)',
    'Paper 2 (Thematic Essay)',
  ],
  paper_types: [
    'Paper 3 (Regional Study — Europe)',
    'Internal Assessment (2028 History IA)',
    'Paper 1 (Focused Study)',
    'Paper 2 (Thematic Essay)',
  ],
  assessmentComponents: [
    {
      name: 'Paper 3 — Regional Study: Europe (HL Only · ACTIVE YEAR 1 FOCUS)',
      paperType: 'Paper 3 (Regional Study — Europe)',
      duration: '2 hours',
      marks: 30,
      weightingPercent: 35,
      description:
        'Exam consists of 24 essay questions (2 on each of 12 European regional studies). Students answer TWO 15-mark evaluative essays from two different regional studies (e.g., European Totalitarianism 1918–1941 & Europe and WWII 1918–1949 per Pearson 2026), evaluating competing perspectives with a substantiated judgment.',
      isExternal: true,
    },
    {
      name: 'Historical Investigation (May 2028 History IA · ACTIVE YEAR 1 FOCUS)',
      paperType: 'Internal Assessment',
      duration: '20 hours',
      marks: 24,
      weightingPercent: 20,
      description:
        '2,200-word maximum investigation using up to 7 sources across 3 sections: Section 1 Historical Inquiry Question (6m), Section 2 Sources and Perspectives (6m — replaces isolated OPCVL), and Section 3 Synthesis and Evaluation (12m). Standalone Reflection removed in 2028.',
      isExternal: false,
    },
    {
      name: 'Paper 1 — Focused Study (Source-Based Paper · Year 2 Reference)',
      paperType: 'Paper 1 (Focused Study)',
      duration: '1 hour 15 minutes',
      marks: 24,
      weightingPercent: 20,
      description:
        'Three primary/secondary sources on a Focused Study assessing Content, Historical Context, and integrated Perspectives (24 marks total; standalone mechanical OPCVL removed in the 2028 guide).',
      isExternal: true,
    },
    {
      name: 'Paper 2 — Thematic Study (Cross-Regional · Year 2 Reference)',
      paperType: 'Paper 2 (Thematic Essay)',
      duration: '1 hour 45 minutes',
      marks: 25,
      weightingPercent: 20,
      description:
        'Concept-driven thematic paper (25 marks total): structured concept mini-essay, explanatory response, and cross-regional comparative essay across two world regions.',
      isExternal: true,
    },
  ],
  commandTerms: [
    'Compare',
    'Compare and contrast',
    'Contrast',
    'Discuss',
    'Evaluate',
    'Examine',
    'To what extent',
  ],
  guidingPrinciples: [
    'Current Year 1 Focus (CRHS 2026–27): Paper 3 Regional Study — Europe (European Totalitarianism 1918–1941 & Italy 1890–1939 per Pearson 2026) AND the 24-mark May 2028 Historical Investigation (Grade 11 Mock IA checkpoints Jan & May 2027).',
    'Four Core Historical Concepts (May 2028 Guide): Cause and consequence, Continuity and change, Perspectives, and Significance + Four Historical Skills (Using sources, Making connections, Evaluating arguments, Asking questions).',
    'May 2028 Paper 3 (2 hours, 30 marks, 35% HL): two 15-mark essays from two different regional studies (6 Inquiry Topics × 4 specified content points per study per Pearson 2026). Band 13–15 requires thorough, well-balanced evaluation of perspectives on the argument.',
    'May 2028 History IA totals 24 marks across 3 sections: Inquiry Question (6) + Sources & Perspectives (6) + Synthesis & Evaluation (12), capped strictly at 2,200 words and max 7 sources, cited using Chicago Notes & Bibliography.',
  ],
  iaOverview: {
    title: 'Historical Investigation (May 2028 History IA — 3 Sections · Active Year 1 Focus)',
    maxMarks: 24,
    wordLimit: '2,200 words maximum · max 7 sources · Chicago NB',
    weightingPercent: 20,
    summary:
      'Redesigned May 2028 IA: Section 1 Historical Inquiry Question (6), Section 2 Sources and Perspectives (6 — replaces standalone OPCVL), and Section 3 Synthesis and Evaluation (12). Standalone Reflection removed.',
  },
  units: [
    {
      code: 'P3',
      title: 'ACTIVE FOCUS · Paper 3: Regional Study — Europe (Totalitarianism 1918–41 & WWII)',
      guidanceNotes:
        'Primary Grade 11 classroom focus grounded in Pearson 2026 Paper 3 Europe, IB 11 Italy 1890–1939, IB 11 European Totalitarianism, and 2028 15-mark sample essays.',
      subtopics: [
        {
          code: 'P3.1',
          title: 'Liberal Italy & Mussolini’s Rise to Power (1890–1926) [HL]',
          isHlOnly: true,
          guidanceNotes:
            'Pearson 2026 Ch. 1.1: Post-1861 Risorgimento North–South (Mezzogiorno) divide, trasformismo under Depretis, Crispi (Adowa 1896), Giolitti (Libya War, universal male suffrage, June 1914 Red Week); WWI intervention (1915 Treaty of London), "Mutilated Victory", D’Annunzio’s Fiume seizure (1919), Biennio Rosso (1919–20), PNF & squadre violence, March on Rome (Oct 1922), Acerbo Law (1923), Matteotti crisis & Aventine Secession (1924), and Leggi Fascistissime consolidation (1925–26).',
          keyConcepts: ['Trasformismo & Mezzogiorno', 'Mutilated Victory & Fiume', 'March on Rome 1922', 'Leggi Fascistissime 1925–26'],
        },
        {
          code: 'P3.2',
          title: 'Domestic Impact & Foreign Policy of Fascist Italy (to 1940) [HL]',
          isHlOnly: true,
          guidanceNotes:
            'Pearson 2026 Ch. 1.2: OVRA & Special Tribunal, Miniculpop, Cult of Il Duce, ONB/GIL youth, Opera Nazionale Dopolavoro, 1929 Lateran Accords (Pope Pius XI), Battles for Grain/Lira/Land/Births, 22 Corporations, IRI (1933), and 1938 Charter of Race/Racial Laws. Foreign pivot: Corfu (1923), Locarno (1925), Stresa Front (1935) -> Abyssinia (1935–36), Spanish Civil War, Rome–Berlin Axis, Pact of Steel (1939). Historiography: De Felice vs Emilio Gentile vs Denis Mack Smith.',
          keyConcepts: ['Corporate State & IRI', 'Lateran Accords 1929', 'Abyssinia & Pact of Steel', 'De Felice vs Gentile vs Mack Smith'],
        },
        {
          code: 'P3.3',
          title: 'Weimar Collapse, Hitler’s Rise & Nazi Germany (1918–1939) [HL]',
          isHlOnly: true,
          guidanceNotes:
            'Pearson 2026 Ch. 1.3–1.4: Weimar constitutional flaws (Article 48, PR), Versailles, 1923 Ruhr crisis & hyperinflation, Stresemann era vs Great Depression; Chancellorship & Gleichschaltung (Reichstag Fire, Enabling Act, Night of the Long Knives 1934, Army Oath); SS/Gestapo terror vs Goebbels propaganda, Schacht New Plan & Göring Four-Year Plan, Volksgemeinschaft, Nuremberg Laws (1935), Confessing Church/youth opposition, intentionalist vs structuralist debate.',
          keyConcepts: ['Weimar crisis & Depression', 'Gleichschaltung 1933–34', 'Four-Year Plan & SS Terror', 'Intentionalist vs Structuralist'],
        },
        {
          code: 'P3.4',
          title: 'Stalin’s Rise, Great Terror & USSR Domestic Impact (to 1941) [HL]',
          isHlOnly: true,
          guidanceNotes:
            'Pearson 2026 Ch. 1.5–1.6: General Secretaryship patronage, Ban on Factions (1921), NEP vs Great Turn, defeat of Trotsky/Left & Bukharin/Right ("Socialism in One Country"); 1928–41 Five-Year Plans & forced collectivization (dekulakization, 1932–33 famine/Holodomor); Ryutin Platform, Kirov assassination (1934), Moscow Show Trials & NKVD Great Terror (Yezhovshchina, Gulag), Cult of Personality & Soviet constitution/social policy.',
          keyConcepts: ['General Secretaryship', 'Collectivization & 5-Year Plans', 'Kirov & Great Terror 1936–38', 'Cult of Personality'],
        },
        {
          code: 'P3.5',
          title: 'Paper 3 Argument Craft, Historiography & Chicago NB [HL]',
          isHlOnly: true,
          guidanceNotes:
            'Mastering Pearson 2026 p. 8 & Paper 3 MarkScheme 2028 Extract: unpacking argumentative essay prompts, achieving Band 13–15 balanced evaluation of perspectives, comparative interwar totalitarian synthesis (1918–1941), and Purdue OWL Chicago Notes & Bibliography citation precision.',
          keyConcepts: ['Evaluating arguments (Band 13–15)', 'Totalitarian vs authoritarian limits', '2028 History IA (6+6+12)', 'Chicago NB footnotes'],
        },
        {
          code: 'P3.6',
          title: 'Europe and the Second World War (1918–1949) [HL Second Regional Study]',
          isHlOnly: true,
          guidanceNotes:
            'Pearson 2026 Ch. 2 (pairable second regional study alongside Ch. 1 on Paper 3!): League of Nations successes & crises, causes of WWII in Europe (1933–39), reasons for Axis defeat & Allied victory (to 1945), war impact on Germany (to 1949), persecution/mass murder of marginalized groups & Nuremberg justice.',
          keyConcepts: ['League of Nations crises', 'Origins of WWII in Europe', 'Axis defeat vs Allied victory', 'Holocaust & Nuremberg'],
        },
      ],
    },
    {
      code: 'CONCEPTS',
      title: '2028 Core Framework: The 4 Historical Concepts & IA Structure (24 Marks)',
      guidanceNotes:
        'Drives every May 2028 Paper 3 argument and the 3-section May 2028 History IA (Historical Inquiry Question 6m, Sources & Perspectives 6m, Synthesis & Evaluation 12m).',
      subtopics: [
        {
          code: 'C.1',
          title: 'Cause and consequence',
          guidanceNotes:
            'Distinguish structural long-term conditions (e.g., Mezzogiorno divide, Versailles resentment) from catalyst triggers (Matteotti crisis, Wall Street Crash) and unintended consequences.',
          keyConcepts: ['Long-term vs trigger causes', 'Multi-causality', 'Intended vs unintended outcomes'],
        },
        {
          code: 'C.2',
          title: 'Continuity and change',
          guidanceNotes:
            'Evaluate degree of transformation vs institutional persistence across regimes (e.g., how far Mussolini altered Liberal Italy’s monarchy, Church, and elites versus genuine totalitarian rupture).',
          keyConcepts: ['Rupture vs persistence', 'Turning points', 'Periodization'],
        },
        {
          code: 'C.3',
          title: 'Perspectives (Sources & Historiography · 2028 IA Sec 2)',
          guidanceNotes:
            'Replaces isolated OPCVL: interrogate primary actor viewpoints (origin, purpose, historical context) alongside competing historiographical schools across up to 7 curated sources.',
          keyConcepts: ['Context-grounded source evaluation', 'Historiographical debate', 'Perspective synthesis'],
        },
        {
          code: 'C.4',
          title: 'Significance & Historical Judgment (2028 IA Sec 1 & 3)',
          guidanceNotes:
            'Justify an explicit, concept-driven Historical Inquiry Question (Sec 1: 6m) and synthesize evidence across perspectives to render reasoned historical judgment (Sec 3: 12m).',
          keyConcepts: ['2,200w / 7-source IA cap', 'Thematic synthesis', 'Substantiated judgment'],
        },
      ],
    },
    {
      code: 'P1',
      title: 'Year 2 Reference · Paper 1: Focused Studies (1h 15m · 24 Marks · 20%)',
      guidanceNotes:
        'Covered primarily after Paper 3 & IA groundwork: 3 sources evaluating Content, Historical Context, and Perspectives (24 marks; old OPCVL format removed in 2028).',
      subtopics: [
        {
          code: 'P1.1',
          title: '2028 Focused Study Source Comprehension & Perspective Synthesis',
          guidanceNotes:
            'Analyze 3 unseen primary/secondary extracts across Content, Historical Context, and Perspectives within the 1h 15m Paper 1 budget (24 marks).',
          keyConcepts: ['3-source corroboration', 'Context & perspective analysis', 'OPCVL removed'],
        },
      ],
    },
    {
      code: 'P2',
      title: 'Year 2 Reference · Paper 2: Thematic Studies (1h 45m · 25 Marks · 20%)',
      guidanceNotes:
        'Cross-regional Thematic Studies (1h 45m, 25 marks): concept mini-essay, explain question, and cross-regional comparative essay across two world regions.',
      subtopics: [
        {
          code: 'P2.1',
          title: 'Cross-Regional Thematic Essays (Authoritarian Rule & Conflict)',
          guidanceNotes:
            'Thematic comparative synthesis pairing European authoritarian case studies (Italy/Germany/USSR) with a non-European region (e.g., Mao’s China or Castro’s Cuba).',
          keyConcepts: ['25-mark Paper 2 format', 'Cross-regional synthesis', 'Concept-anchored arguments'],
        },
      ],
    },
  ],
};
