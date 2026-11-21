import type { IBSubjectConfig } from './index';

export const HISTORY_HL_CONFIG: IBSubjectConfig = {
  slug: 'history-hl',
  name: 'History',
  shortName: 'History HL',
  level: 'HL',
  groupNumber: 3,
  firstAssessment: 'May 2028 (Redesigned 2028 Guide)',
  description:
    'IB Diploma History Higher Level aligned strictly to the redesigned May 2028 First Assessment curriculum: built on the 4 Historical Concepts (Cause & consequence, Continuity & change, Perspectives, Significance), Paper 1 Focused Studies, Paper 2 Thematic Studies, Paper 3 Regional Study — Europe (highlighting European Totalitarianism 1918–1941 and Liberal/Fascist Italy 1890–1939), and the 24-mark 2028 History IA.',
  examPaperTypes: [
    'Paper 1 (Focused Study)',
    'Paper 2 (Thematic Essay)',
    'Paper 3 (Regional Study — Europe)',
  ],
  paper_types: [
    'Paper 1 (Focused Study)',
    'Paper 2 (Thematic Essay)',
    'Paper 3 (Regional Study — Europe)',
  ],
  assessmentComponents: [
    {
      name: 'Paper 1 — Focused Study (Source-Based Paper)',
      paperType: 'Paper 1 (Focused Study)',
      duration: '1 hour',
      marks: 20,
      weightingPercent: 20,
      description:
        'Four structured source-analysis questions on a single Focused Study testing comprehension, Origin/Purpose/Content evaluation, cross-source synthesis, and contextual judgment.',
      isExternal: true,
    },
    {
      name: 'Paper 2 — Thematic Study (Comparative Cross-Regional Essays)',
      paperType: 'Paper 2 (Thematic Essay)',
      duration: '1 hour 30 minutes',
      marks: 30,
      weightingPercent: 25,
      description:
        'Two analytical essays (15 marks each) selected from Thematic Studies (e.g., Authoritarian Rule, Conflict & War), requiring explicit cross-regional comparison across two world regions.',
      isExternal: true,
    },
    {
      name: 'Paper 3 — Regional Study: Europe (HL Only)',
      paperType: 'Paper 3 (Regional Study — Europe)',
      duration: '1 hour 45 minutes',
      marks: 30,
      weightingPercent: 35,
      description:
        'Two in-depth HL essays (15 marks each) on European regional topics including European Totalitarianism (1918–1941), Liberal & Fascist Italy (1890–1939), Weimar/Nazi Germany, and Stalinist USSR, assessed under the May 2028 markband rubric.',
      isExternal: true,
    },
    {
      name: 'Historical Investigation (2028 History IA)',
      paperType: 'Internal Assessment',
      duration: '20 hours',
      marks: 24,
      weightingPercent: 20,
      description:
        '2,200-word maximum investigation using up to 7 sources, assessed on Criterion A Identification & Evaluation of Sources (6), B Investigation (12), and C Conclusion & Historical Judgment (6). Standalone Reflection section removed in 2028.',
      isExternal: false,
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
    'Four Core Historical Concepts (May 2028 Guide): Cause and consequence, Continuity and change, Perspectives, and Significance.',
    'May 2028 Paper 3 Essays are graded out of 15 marks per essay (30 marks total across two essays), prioritizing clear argument, multi-perspective historiography, and exact empirical evidence.',
    'May 2028 History IA totals 24 marks (6 + 12 + 6), enforces a 2,200-word cap and maximum of 7 sources, and removes the old Section 3 Reflection.',
    'Citation standards follow Chicago Manual of Style Notes and Bibliography (footnotes + alphabetized bibliography).',
  ],
  iaOverview: {
    title: 'Historical Investigation (May 2028 History IA)',
    maxMarks: 24,
    wordLimit: '2,200 words maximum · max 7 sources',
    weightingPercent: 20,
    summary:
      'Redesigned May 2028 IA: Criterion A Identification & Evaluation of Sources (6), Criterion B Investigation (12), Criterion C Conclusion & Historical Judgment (6). No standalone Section 3 Reflection.',
  },
  units: [
    {
      code: 'CONCEPTS',
      title: '2028 Core Framework: The Four Historical Concepts',
      guidanceNotes:
        'Every May 2028 essay and source response anchors analysis around the four overarching IB History concepts.',
      subtopics: [
        {
          code: 'C.1',
          title: 'Cause and consequence',
          guidanceNotes:
            'Distinguish structural long-term conditions (e.g., Mezzogiorno divide, Versailles resentment) from short-term triggers (Matteotti crisis, Wall Street Crash) and unintended consequences.',
          keyConcepts: ['Long-term vs trigger causes', 'Multi-causality', 'Intended vs unintended outcomes'],
        },
        {
          code: 'C.2',
          title: 'Continuity and change',
          guidanceNotes:
            'Evaluate the degree of transformation vs persistence across regimes (e.g., how far Mussolini altered Liberal Italy’s monarchy, Church, and industrial elites versus radical totalitarian rupture).',
          keyConcepts: ['Rupture vs persistence', 'Turning points', 'Periodization'],
        },
        {
          code: 'C.3',
          title: 'Perspectives',
          guidanceNotes:
            'Interrogate primary actor viewpoints (propaganda, memoirs, state decrees) alongside competing historiographical schools (e.g., De Felice vs Emilio Gentile vs Denis Mack Smith; intentionalist vs structuralist).',
          keyConcepts: ['Primary perspectives', 'Historiographical debate', 'OPCVL / source context'],
        },
        {
          code: 'C.4',
          title: 'Significance',
          guidanceNotes:
            'Assess historical weight by breadth, durability, and impact on subsequent events (e.g., Abyssinia 1935–36 shattering Stresa and collective security).',
          keyConcepts: ['Depth & duration of impact', 'Turning-point weight', 'Comparative significance'],
        },
      ],
    },
    {
      code: 'P1',
      title: 'Paper 1: Focused Studies & Source Inquiry',
      guidanceNotes:
        'Trains Paper 1 source comprehension, Origin–Purpose–Content Value & Limitation analysis, cross-referencing, and synthetic mini-essays.',
      subtopics: [
        {
          code: 'P1.1',
          title: 'Source Analysis: Origin, Purpose, Content, Value & Limitations',
          guidanceNotes:
            'Structured source evaluation linking explicit Origin and Purpose (not vague "bias") directly to analytical Value and Limitations for a specific historical inquiry.',
          keyConcepts: ['Origin & Purpose', 'Content evidence', 'Targeted Value & Limitation'],
        },
        {
          code: 'P1.2',
          title: 'Focused Studies: Source Synthesis & Mini-Essay Technique',
          guidanceNotes:
            'Cross-referencing multiple primary and secondary extracts with own historical knowledge within the 1-hour Paper 1 timing budget (20 marks).',
          keyConcepts: ['Cross-source corroboration', 'Own knowledge integration', '2028 Focused Study format'],
        },
      ],
    },
    {
      code: 'P2',
      title: 'Paper 2: Thematic Studies (Cross-Regional Synthesis)',
      guidanceNotes:
        'Cross-regional comparative essays examining authoritarian rule, conflict, diplomacy, and socio-political transformation across at least two distinct world regions.',
      subtopics: [
        {
          code: 'P2.1',
          title: 'Thematic Study: Authoritarian Rule (Emergence, Consolidation & Control)',
          guidanceNotes:
            'Comparative cross-regional analysis of emergence conditions (war, depression, weak democracy), legal vs coercive consolidation, propaganda, and domestic policy across Europe (Italy/Germany/USSR) and a second region (e.g., Mao’s China or Castro’s Cuba).',
          keyConcepts: ['Cross-regional comparison', 'Coercion vs consent', 'Economic & social control'],
        },
        {
          code: 'P2.2',
          title: 'Thematic Study: Conflict, War & Interwar Diplomacy',
          guidanceNotes:
            'Causes, practices, and impact of 20th-century wars; failure of collective security (Corfu, Manchuria, Abyssinia, Munich) and escalation to global conflict.',
          keyConcepts: ['Causes of conflict', 'Failure of collective security', 'Total war impact'],
        },
        {
          code: 'P2.3',
          title: 'Paper 2 Comparative Essay Structure & Thesis Architecture',
          guidanceNotes:
            'Thematic comparative paragraph architecture (avoiding split half-and-half narratives), weaving the 4 concepts into 15-mark Paper 2 essays.',
          keyConcepts: ['Thematic synthesis', 'Counter-arguments', '15-mark rubric calibration'],
        },
      ],
    },
    {
      code: 'P3',
      title: 'Paper 3: Regional Study — Europe (European Totalitarianism 1918–1941 & Italy 1890–1939)',
      guidanceNotes:
        'Core HL coursework focus grounded in European Totalitarianism (1918–1941) and Liberal/Fascist Italy (1890–1939) alongside May 2028 Paper 3 sample essays and markschemes.',
      subtopics: [
        {
          code: 'P3.1',
          title: 'Liberal Italy & Crisis of Parliamentary Democracy (1890–1922) [HL]',
          isHlOnly: true,
          guidanceNotes:
            'Post-Risorgimento North–South (Mezzogiorno) structural divide; trasformismo coalition instability under Depretis, Crispi (Adowa 1896), and Giolitti (Libya War, universal male suffrage, June 1914 Red Week); WWI intervention crisis (1915 Treaty of London), "Mutilated Victory", D’Annunzio’s Fiume seizure (1919), Biennio Rosso (1919–1920), squadre d’azione paramilitary violence, and the October 1922 March on Rome.',
          keyConcepts: ['Mezzogiorno & trasformismo', 'Mutilated Victory', 'Biennio Rosso', 'March on Rome 1922'],
        },
        {
          code: 'P3.2',
          title: 'Mussolini’s Fascist State, Society & Foreign Policy (1922–1941) [HL]',
          isHlOnly: true,
          guidanceNotes:
            'Domestic consolidation: Acerbo Law (1923), Matteotti murder (1924), Aventine Secession, 1925–26 Leggi Fascistissime, OVRA & Special Tribunal, Miniculpop, ONB/GIL youth, Opera Nazionale Dopolavoro, 1929 Lateran Accords, Battles for Grain/Lira/Births, 22 Corporations, IRI (1933), and 1938 Racial Laws. Foreign policy pivot: Corfu (1923), Locarno (1925), Brenner Pass deterrence (1934), Stresa Front (1935) → Abyssinia (1935–36), Spanish Civil War, Rome–Berlin Axis, and Pact of Steel (1939). Historiography: Renzo De Felice vs Emilio Gentile vs Denis Mack Smith.',
          keyConcepts: ['Leggi Fascistissime', 'Lateran Accords 1929', 'Abyssinia & Pact of Steel', 'De Felice vs Gentile vs Mack Smith'],
        },
        {
          code: 'P3.3',
          title: 'European Totalitarianism: Weimar Collapse & Nazi Germany (1918–1941) [HL]',
          isHlOnly: true,
          guidanceNotes:
            'Weimar constitutional flaws (Article 48, proportional representation), Versailles, 1923 Ruhr/hyperinflation, Stresemann recovery vs Great Depression dependence on US loans; NSDAP electoral breakthrough and backroom intrigue (Papen/Hindenburg, Jan 1933); Gleichschaltung (Reichstag Fire, Enabling Act, Night of the Long Knives 1934); SS/Gestapo terror vs Goebbels propaganda, Schacht/Göring Four-Year Plan, Volksgemeinschaft & Nuremberg Laws (1935); foreign policy escalation from Rhineland/Anschluss/Munich to Poland (1939) & Barbarossa (1941).',
          keyConcepts: ['Weimar crisis', 'Gleichschaltung', 'Volksgemeinschaft & terror', 'Intentionalist vs structuralist'],
        },
        {
          code: 'P3.4',
          title: 'European Totalitarianism: Lenin to Stalinist USSR (1917–1941) [HL]',
          isHlOnly: true,
          guidanceNotes:
            'Bolshevik consolidation (Treaty of Brest-Litovsk, Civil War, War Communism, Kronstadt & NEP 1921); post-Lenin succession struggle (Trotsky vs Bukharin vs Stalin, Socialism in One Country); Great Turn (1928): Five-Year Plans rapid industrialization and forced collectivization (dekulakization, 1932–33 Holodomor famine); Great Terror (Kirov 1934, Moscow Show Trials, NKVD/Yezhovshchina, Gulag); Cultural Revolution, Cult of Personality, and 1939 Nazi–Soviet Non-Aggression Pact.',
          keyConcepts: ['War Communism to NEP', 'Five-Year Plans & Collectivization', 'Great Terror & Show Trials', 'Nazi–Soviet Pact 1939'],
        },
        {
          code: 'P3.5',
          title: 'Comparative European Totalitarianism & 2028 Paper 3 Essay Craft [HL]',
          isHlOnly: true,
          guidanceNotes:
            'Synthesizing interwar European totalitarian regimes (1918–1941) across political control, terror vs mass consent, economic dirigible planning, youth/women/culture, and Church/traditional elite compromises; mastering the 15-mark May 2028 Paper 3 rubric (Band 13–15 depth, precision, and historiography) plus Purdue OWL Chicago NB citation formatting.',
          keyConcepts: ['Totalitarian vs authoritarian debate', 'Consent vs coercion', '2028 Paper 3 15-mark rubric', 'Chicago NB citations'],
        },
      ],
    },
  ],
};
