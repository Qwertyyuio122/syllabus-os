import type { ClassroomSeedQuestion } from '../types';

export const HISTORY_QUESTIONS: ClassroomSeedQuestion[] = [
  // =========================================================================
  // P3.1 — LIBERAL ITALY & MUSSOLINI'S DICTATORSHIP (Q1–Q10)
  // =========================================================================
  {
    topicCode: 'P3.1',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'To what extent',
    difficulty: 'HL Extension',
    maxMarks: 15,
    questionMarkdown:
      'To what extent were the structural weaknesses of Liberal Italy before 1915 responsible for Mussolini’s rise to power in 1922?',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Thesis establishing a clear causal balance between pre-1915 structural flaws (North–South dualism, trasformismo, Roman Question) and post-1915 war/post-war catalysts.',
          marks: 3,
          keywords: ['trasformismo', 'dualism', 'preconditions', 'catalyst'],
        },
        {
          code: 'K1',
          criterion:
            'Detailed pre-1915 evidence: restricted franchise (2% 1871 -> 1912 universal male suffrage), Giolitti’s Gentiloni Pact (1913), Southern latifondi/emigration, 1914 Red Week.',
          marks: 4,
          keywords: ['Giolitti', 'Gentiloni Pact', 'Red Week', 'Mezzogiorno'],
        },
        {
          code: 'K2',
          criterion:
            'Weighing 1915–1922 disruption: 650,000 war dead, Mutilated Victory/Fiume, 1919 PR electoral deadlock (PSI/PPI), Biennio Rosso factory occupations and agrari-backed squadrismo.',
          marks: 4,
          keywords: ['Mutilated Victory', 'Biennio Rosso', 'squadrismo', 'March on Rome'],
        },
        {
          code: 'E1',
          criterion:
            'Explicit historiographical evaluation contrasting Benedetto Croce ("liberal parenthesis" destroyed by WWI) against Antonio Gramsci / Denis Mack Smith (incomplete Risorgimento & systemic crisis).',
          marks: 4,
          keywords: ['Croce', 'Gramsci', 'Mack Smith', 'historiography'],
        },
      ],
      model_answer:
        'A Band 13–15 response argues that pre-1915 structural fractures created a brittle parliamentary order ("making Italians" unfinished, trasformismo patronage, Catholic alienation under Non Expedit, and deep North–South inequality), yet shows that these alone did not render Fascism inevitable until First World War polarization and the 1919–1922 Biennio Rosso collapsed liberal elite confidence. Integrates Croce’s war-parenthesis argument against Gramscian/Mack Smith structural continuity before reaching a balanced causal judgment.',
      examiner_notes:
        'Avoid merely narrating events after 1919; at least half the analysis must weigh pre-1915 weaknesses explicitly against post-1915 shocks.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf', 'IB 11 Italy 1890-1939.pptx'],
  },
  {
    topicCode: 'P3.1',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Discuss',
    difficulty: 'HL Extension',
    maxMarks: 15,
    questionMarkdown:
      'Discuss the view that the First World War, rather than pre-war political instability, destroyed Italian liberal democracy between 1915 and 1922.',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Evaluative thesis weighing WWI’s transformative shock (Treaty of London 1915, Caporetto, debt, veterans) against pre-1914 parliamentary corrosion.',
          marks: 3,
          keywords: ['Treaty of London', 'Caporetto', 'causal weight'],
        },
        {
          code: 'K1',
          criterion:
            'WWI political and socioeconomic impacts: 650,000 deaths, wartime inflation, bitter interventisti-neutralist split, D’Annunzio’s Fiume seizure and Mutilated Victory myth.',
          marks: 4,
          keywords: ['Fiume', 'D’Annunzio', 'vittoria mutilata', 'inflation'],
        },
        {
          code: 'K2',
          criterion:
            'Post-war democratic breakdown: 1919 PR empowering antagonistic mass PSI (156) and PPI (100) blocs, Giolitti’s 1921 National Bloc miscalculation, Victor Emmanuel III refusing martial law.',
          marks: 4,
          keywords: ['proportional representation', 'National Bloc', 'Victor Emmanuel III'],
        },
        {
          code: 'E1',
          criterion:
            'Historiographical evaluation contrasting Croce’s war-trauma thesis with Seton-Watson / Bosworth / Mack Smith views on pre-war elite failures.',
          marks: 4,
          keywords: ['Croce', 'Bosworth', 'Mack Smith', 'continuity'],
        },
      ],
      model_answer:
        'Evaluates WWI as the decisive accelerator that introduced mass politics, violent veteran expectations, and fiscal ruin onto a parliamentary system already crippled by trasformismo, Red Week (1914), and elite willingness to bypass parliament (1915 Treaty of London).',
      examiner_notes:
        'Connect postwar PR voting dynamics explicitly to pre-war lack of mass liberal party organization.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf', 'IB 11 Italy 1890-1939.pptx'],
  },
  {
    topicCode: 'P3.1',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'To what extent',
    difficulty: 'HL Extension',
    maxMarks: 15,
    questionMarkdown:
      '"Mussolini’s appointment in October 1922 was the result of elite concessions rather than Fascist revolutionary strength." To what extent do you agree?',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Balanced thesis testing the "March on Rome" seizure myth against King Victor Emmanuel III’s constitutional invitation and liberal/agrari collusion.',
          marks: 3,
          keywords: ['March on Rome', 'elite collusion', 'myth'],
        },
        {
          code: 'K1',
          criterion:
            'Evidence of elite concessions: Giolitti’s 1921 National Bloc (35 seats), agrarian and Confindustria subsidies, Facta resignation, King’s refusal to sign martial law fearing civil war or Duke of Aosta.',
          marks: 5,
          keywords: ['Facta', 'martial law', 'agrari', 'National Bloc'],
        },
        {
          code: 'K2',
          criterion:
            'Evidence of Fascist agency/coercion: 250,000–300,000 PNF members by late 1922, systematic destruction of Socialist/Catholic Chambers of Labour and municipal councils, seizing prefectures across northern Italy.',
          marks: 4,
          keywords: ['squadrismo', 'PNF', 'ras', 'municipal coups'],
        },
        {
          code: 'E1',
          criterion:
            'Sustained evaluation synthesizing Lyttelton / Gentile (coercive street dual-track) with Mack Smith / Pollard (King’s miscalculation & 30,000 poorly armed Marchers easily stoppable by army).',
          marks: 3,
          keywords: ['Mack Smith', 'Gentile', 'dual-track strategy'],
        },
      ],
      model_answer:
        'Argues that militarily the March on Rome could have been dispersed by General Pugliese’s Rome garrison, proving elite capitulation (Victor Emmanuel III, Giolitti, Salandra) was the immediate trigger—yet emphasizes that sustained Po Valley squadristi violence had already destroyed local state authority and coerced elites into bargaining with Mussolini.',
      examiner_notes:
        'High-band scripts explain WHY the King rejected martial law (fear of army split, Savoyard succession fears, illusion of "taming" Mussolini in cabinet).',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf', 'IB 11 Italy 1890-1939.pptx'],
  },
  {
    topicCode: 'P3.1',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Evaluate',
    difficulty: 'Standard IB',
    maxMarks: 15,
    questionMarkdown:
      'Evaluate the significance of the Matteotti Crisis (1924–1925) in the consolidation of Mussolini’s dictatorship.',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Thesis assessing Matteotti’s murder as the critical hinge converting Mussolini’s 1922–1924 coalition ministry into an explicit one-party dictatorship.',
          marks: 3,
          keywords: ['hinge point', 'Aventine Secession', 'Leggi Fascistissime'],
        },
        {
          code: 'K1',
          criterion:
            'Pre-crisis dual-track setup (1922–1924): Grand Council, MVSN, 1923 Acerbo Law (2/3 majority on 25% threshold), April 1924 fraudulent election & Matteotti’s 30 May denunciation.',
          marks: 4,
          keywords: ['Acerbo Law', 'MVSN', 'Grand Council', '30 May 1924'],
        },
        {
          code: 'K2',
          criterion:
            'Crisis dynamics & outcome: Aventine Secession boycott failing to move Victor Emmanuel III, Dec 1924 Consuls’ Revolt by Farinacci/ras, 3 Jan 1925 speech, and 1925–1926 Leggi Fascistissime / OVRA.',
          marks: 4,
          keywords: ['Farinacci', '3 January 1925', 'OVRA', 'Leggi Fascistissime'],
        },
        {
          code: 'E1',
          criterion:
            'Evaluative perspective (De Felice vs. Lyttelton / Mack Smith): weighing whether the crisis genuinely threatened collapse in summer 1924 vs. accelerated an already authoritarian trajectory.',
          marks: 4,
          keywords: ['De Felice', 'Lyttelton', 'contingency'],
        },
      ],
      model_answer:
        'Shows how the 1924 murder briefly isolated Mussolini internationally and internally, yet opposition withdrawal into the powerless Aventine Secession plus the King’s passivity enabled Farinacci’s hardline pressure to force Mussolini’s 3 January 1925 coup d’état from within—removing remaining constitutional checks via Alfredo Rocco’s 1925–1926 laws.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf', 'IB 11 Italy 1890-1939.pptx'],
  },
  {
    topicCode: 'P3.1',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Examine',
    difficulty: 'Standard IB',
    maxMarks: 15,
    questionMarkdown:
      'Examine the extent to which Mussolini succeeded in establishing a totalitarian state in Italy between 1925 and 1939.',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Thesis defining "totalitarianism" (Gentile/Arendt) and concluding Mussolini constructed an aspiring or "imperfect" totalitarianism rather than total control.',
          marks: 3,
          keywords: ['imperfect totalitarianism', 'definition', 'extent'],
        },
        {
          code: 'K1',
          criterion:
            'Totalitarian achievements: Leggi Fascistissime, suppression of parties/press, OVRA & Special Tribunal, OND/ONB/GIL youth/leisure indoctrination, 1938 Racial Laws, cult of Il Duce.',
          marks: 4,
          keywords: ['OVRA', 'ONB', 'GIL', 'Racial Laws', 'cult of Il Duce'],
        },
        {
          code: 'K2',
          criterion:
            'Institutional and social limits: Victor Emmanuel III remaining head of state/military; 1929 Lateran Accords empowering Catholic Action; Confindustria economic autonomy; modest OVRA death tolls.',
          marks: 4,
          keywords: ['Victor Emmanuel III', 'Lateran Accords', 'Catholic Action', 'Confindustria'],
        },
        {
          code: 'E1',
          criterion:
            'Historiographical balance pitting Emilio Gentile (political religion & dynamic totalization) against Hannah Arendt / Martin Blinkhorn / R.J.B. Bosworth (structural compromises) and Renzo De Felice (consensus vs terror).',
          marks: 4,
          keywords: ['Emilio Gentile', 'Arendt', 'Blinkhorn', 'De Felice'],
        },
      ],
      model_answer:
        'Tests Mussolini’s 1925 ideological formula against institutional reality: despite banning rivals, centralizing prefects, and regimenting youth through GIL, Italy retained a constitutional monarch who dismissed Mussolini in July 1943 and a Vatican whose Catholic Action resisted total ideological monopoly.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf', 'IB 11 Italy 1890-1939.pptx'],
  },
  {
    topicCode: 'P3.1',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Evaluate',
    difficulty: 'Standard IB',
    maxMarks: 15,
    questionMarkdown:
      'Evaluate the successes and failures of Mussolini’s economic and social policies in Italy between 1922 and 1939.',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Nuanced thesis separating propaganda claims (Corporatism, Autarky) from uneven sector-by-sector outcomes across heavy industry, agriculture, living standards, and welfare.',
          marks: 3,
          keywords: ['autarky', 'propaganda vs reality', 'living standards'],
        },
        {
          code: 'K1',
          criterion:
            'Economic Battles & Corporatism: Battle for Grain (+50% wheat vs southern olive/livestock collapse), Quota 90/Lira (heavy cartels favored over export textiles & wages cut 10–20%), Battle for Land (Pontine Marshes), 1926 Vidoni/1934 Corporations.',
          marks: 5,
          keywords: ['Battle for Grain', 'Quota 90', 'Pontine Marshes', 'Corporate State'],
        },
        {
          code: 'K2',
          criterion:
            'Social policies: IRI state bailouts (1933), OND leisure/OMNI welfare, 1929 Lateran social peace vs Battle for Births failure (falling fertility, exclusion of women from white-collar quotas) & 1938 Racial Laws.',
          marks: 4,
          keywords: ['IRI', 'OND', 'Battle for Births', 'Lateran'],
        },
        {
          code: 'E1',
          criterion:
            'Historiographical weighing (Roland Sarti / Victoria de Grazia / Denis Mack Smith / De Felice): economic modernization myth vs conservative class stabilization and autarkic war unpreparedness.',
          marks: 3,
          keywords: ['Sarti', 'De Grazia', 'Mack Smith'],
        },
      ],
      model_answer:
        'Demonstrates that IRI successfully stabilized banks during the Great Depression and OND welfare mitigated worker discontent, yet Quota 90 depressed real wages, Corporatism suppressed genuine labor representation while leaving industrialists untouched, and the Battle for Births failed completely.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf', 'IB 11 Italy 1890-1939.pptx'],
  },
  {
    topicCode: 'P3.1',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Analyze',
    difficulty: 'Standard IB',
    maxMarks: 6,
    stimulusMarkdown:
      '> *"Italy wants peace, she wants tranquility, she wants calm work. We shall give it to her with love if possible, or with force if necessary... I declare before this assembly and before the entire Italian people that I assume, alone, the political, moral, and historical responsibility for everything that has happened."* — Benito Mussolini, speech to the Chamber of Deputies, 3 January 1925.',
    questionMarkdown:
      'Explain the historical context and political consequences of Mussolini’s 3 January 1925 speech, contrasting how Renzo De Felice and Denis Mack Smith interpret its significance.',
    markscheme: {
      marking_points: [
        {
          code: 'C1',
          criterion:
            'Immediate context: June 1924 Matteotti murder, ineffective Aventine Secession, and December 1924 Consuls’ Revolt by Farinacci’s squadristi demanding decisive dictatorship.',
          marks: 2,
          keywords: ['Matteotti', 'Aventine Secession', 'Farinacci'],
        },
        {
          code: 'C2',
          criterion:
            'Institutional consequences: enabled the 1925–1926 Leggi Fascistissime (dissolving rival parties/unions, ending parliamentary accountability, establishing OVRA and Special Tribunal).',
          marks: 2,
          keywords: ['Leggi Fascistissime', 'OVRA', 'dictatorship'],
        },
        {
          code: 'E1',
          criterion:
            'Historiographical contrast: De Felice emphasizes tactical containment of radical squadristi behind state dictatorship vs. Mack Smith emphasizing opportunistic survival after near-collapse.',
          marks: 2,
          keywords: ['De Felice', 'Mack Smith', 'historiography'],
        },
      ],
      model_answer:
        'Cornered by both the moral fallout of Matteotti’s murder and Farinacci’s threatened squadristi mutiny, Mussolini gambled on asserting personal responsibility. When the King declined to dismiss him, the speech inaugurated the Leggi Fascistissime. De Felice saw this as a pivotal step taming party anarchy into state order, whereas Mack Smith viewed it as improvisational bluff enabled by weak opposition.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf', 'IB 11 Italy 1890-1939.pptx'],
  },
  {
    topicCode: 'P3.1',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Explain',
    difficulty: 'Foundation',
    maxMarks: 6,
    stimulusMarkdown:
      '> *"Italy recognizes the sovereignty of the Holy See in the international field... Catholic, Apostolic and Roman religion is the sole religion of the State."* — Condensed provisions of the Lateran Treaty and Concordat, 11 February 1929.',
    questionMarkdown:
      'Explain why the 1929 Lateran Accords strengthened Mussolini domestically while creating lasting limits on Fascist totalitarianism.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Ending the Roman Question (since 1870) won Catholic peasant/middle-class legitimacy and Pius XI’s "man sent by Providence" praise, boosting the March 1929 plebiscite.',
          marks: 3,
          keywords: ['Roman Question', '1929 plebiscite', 'Pius XI'],
        },
        {
          code: 'A2',
          criterion:
            'Structural limit: protected the autonomy of Catholic Action (*Azione Cattolica*) and religious education, triggering 1931 youth clashes and limiting state totalization.',
          marks: 3,
          keywords: ['Catholic Action', 'youth autonomy', 'limit on totalitarianism'],
        },
      ],
      model_answer:
        'By healing the 59-year church–state breach, Mussolini secured genuine popularity (De Felice’s "years of consensus" opening) and diplomatic prestige. Yet preserving Catholic Action created an independent organizational rival outside PNF control, later reinforced by Catholic opposition to the 1938 Racial Laws.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf', 'IB 11 Italy 1890-1939.pptx'],
  },
  {
    topicCode: 'P3.1',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 2,
    questionMarkdown:
      'Which combination best explains why Liberal Italy struggled to build broad civic loyalty before 1914?',
    mcqOptions: [
      {
        label: 'A',
        text: 'Universal female suffrage after 1882 polarized southern rural landlords against northern Catholic trade unions.',
      },
      {
        label: 'B',
        text: 'Elitist trasformismo patronage, severe North–South dualism, and the papal Non Expedit excluding devout Catholics.',
      },
      {
        label: 'C',
        text: 'Immediate constitutional abolition of the Savoyard monarchy and early adoption of corporatist tariffs in 1895.',
      },
      {
        label: 'D',
        text: 'Complete absence of socialist organization or labor unrest in industrial Milan and Turin before 1915.',
      },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [
        {
          code: 'K1',
          criterion:
            'Identifies trasformismo patronage, acute North–South disparity (questione meridionale), and papal Non Expedit.',
          marks: 2,
          keywords: ['trasformismo', 'Non Expedit', 'North-South dualism'],
        },
      ],
      model_answer:
        'B is correct: Liberal Italy remained dominated by shifting northern notables (trasformismo), failed to integrate the agrarian South, and alienated practicing Catholics via Non Expedit until the 1913 Gentiloni Pact.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.1',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Identify',
    difficulty: 'Standard IB',
    maxMarks: 2,
    questionMarkdown:
      'What central historiographical challenge did Renzo De Felice’s argument about *gli anni del consenso* (1929–1936) pose to older post-war interpretations of Italian Fascism?',
    mcqOptions: [
      {
        label: 'A',
        text: 'He claimed Fascism had never employed squadristi terror or OVRA surveillance during the 1920s.',
      },
      {
        label: 'B',
        text: 'He argued Mussolini enjoyed genuine mass popular support between the Lateran Pacts and Ethiopian victory rather than ruling solely by coercion and capitalist backing.',
      },
      {
        label: 'C',
        text: 'He proved Fascist Italy constructed a more lethal extermination camp apparatus than Nazi Germany.',
      },
      {
        label: 'D',
        text: 'He insisted Mussolini secretly opposed Italian colonial expansion in Africa.',
      },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [
        {
          code: 'E1',
          criterion:
            'Recognizes De Felice’s thesis of genuine mass consensus (1929–1936) challenging Marxist/anti-fascist coercion-only interpretations.',
          marks: 2,
          keywords: ['De Felice', 'consensus', 'Lateran', 'Ethiopia'],
        },
      ],
      model_answer:
        'B is correct: De Felice argued that domestic Concordat peace, welfare outreach, and imperial triumph in Ethiopia generated real mass approval before Axis alignment and 1938 Racial Laws eroded it—provoking debate with Mack Smith and Bosworth over whether silence under dictatorship equals true consent.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf', 'IB 11 Italy 1890-1939.pptx'],
  },

  // =========================================================================
  // P3.2 — COMPARATIVE TOTALITARIANISM & BAND 13–15 ESSAYS (Q11–Q18)
  // =========================================================================
  {
    topicCode: 'P3.2',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Compare and contrast',
    difficulty: 'HL Extension',
    maxMarks: 15,
    questionMarkdown:
      'Compare and contrast the methods used by Mussolini (1922–1926) and Hitler (1933–1934) to consolidate authoritarian dictatorships.',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Point-by-point comparative thesis evaluating speed, legal-constitutional tactics, paramilitary purges, and survival of traditional elites.',
          marks: 3,
          keywords: ['thematic comparison', 'speed', 'legalism', 'elites'],
        },
        {
          code: 'C1',
          criterion:
            'Similarities: both entered coalition cabinets legally before using dual-track intimidation (Acerbo Law/Blackshirts vs Reichstag Fire Decree/Enabling Act/SA), banning rival parties and unions.',
          marks: 4,
          keywords: ['Acerbo Law', 'Enabling Act', 'union suppression'],
        },
        {
          code: 'C2',
          criterion:
            'Contrasts: Hitler’s rapid 18-month Gleichschaltung culminating in fusing President + Chancellor (Aug 1934) and murdering Röhm (Night of Long Knives) vs Mussolini’s slower 3-year shift, assimilation of MVSN, and lasting coexistence with King and Church.',
          marks: 4,
          keywords: ['Gleichschaltung', 'Night of the Long Knives', 'Victor Emmanuel III'],
        },
        {
          code: 'E1',
          criterion:
            'Historiographical evaluation comparing Kershaw/Bracher on Hitler’s boundless Führer authority against Payne/Blinkhorn on Mussolini’s constrained, incomplete consolidation.',
          marks: 4,
          keywords: ['Kershaw', 'Blinkhorn', 'Payne', 'totalitarian limits'],
        },
      ],
      model_answer:
        'Organizes every body paragraph thematically (Constitutional Manipulation, Paramilitary Discipline, Traditional Elites). Shows both exploited parliamentary crisis decrees to abolish democracy, yet Hitler crushed SA autonomy violently and abolished the presidency inside 19 months whereas Mussolini took over two years and never displaced the Savoyard Crown.',
      examiner_notes:
        'Reject "split-half" essays writing 3 paragraphs on Italy followed by 3 paragraphs on Germany.',
    },
    sourceFileNames: [
      'Paper 3  - Europe - Pearson 2026.pdf',
      'IB 11 European Totalitarianism.pptx',
    ],
  },
  {
    topicCode: 'P3.2',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Compare and contrast',
    difficulty: 'HL Extension',
    maxMarks: 15,
    questionMarkdown:
      'Compare and contrast the role of terror and propaganda in maintaining power in Nazi Germany and Stalin’s Soviet Union up to 1941.',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Thematic thesis evaluating how both states paired mass media/personality cults with lethal secret police while differing sharply in target groups (biological race vs class/Party loyalty) and domestic denunciation dynamics.',
          marks: 3,
          keywords: ['race vs class', 'coercion and consent', 'cult'],
        },
        {
          code: 'C1',
          criterion:
            'Terror mechanisms compared: SS/Gestapo targeted political left (1933) and defined biological minorities/Jews while relying on citizen denunciations (Gellately) vs NKVD/Gulag/Order 00447 purges devouring Old Bolsheviks, Red Army officers, and Soviet citizens indiscriminately (~700,000+ executed in 1937–1938).',
          marks: 5,
          keywords: ['Gestapo', 'NKVD', 'Order 00447', 'Gellately', 'Conquest'],
        },
        {
          code: 'C2',
          criterion:
            'Propaganda and consensus compared: Goebbels’ RMVP/Riefenstahl/KdF Volksgemeinschaft vs Agitprop/Socialist Realism (1934)/Stakhanovites/Cult of Stalin, both harnessing film, radio, and youth.',
          marks: 4,
          keywords: ['Goebbels', 'Socialist Realism', 'Stakhanovite', 'KdF'],
        },
        {
          code: 'E1',
          criterion:
            'Evaluates Arendt/Friedrich-Brzezinski symmetry against revisionists (Fitzpatrick, Peukert, Kershaw) showing propaganda was less effective without material concessions and fear.',
          marks: 3,
          keywords: ['Arendt', 'Fitzpatrick', 'Peukert', 'historiography'],
        },
      ],
      model_answer:
        'Demonstrates that while Arendt’s model rightly links both regimes through single-party propaganda monopolies and extrajudicial camps, terror operated asymmetrically: Stalin purged his own party and officer corps via NKVD quotas, whereas Hitler kept the civil service intact and turned SS-Gestapo violence primarily outward and against racialized minorities with high majority acquiescence.',
    },
    sourceFileNames: [
      'Paper 3  - Europe - Pearson 2026.pdf',
      'IB 11 European Totalitarianism.pptx',
    ],
  },
  {
    topicCode: 'P3.2',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Discuss',
    difficulty: 'HL Extension',
    maxMarks: 15,
    questionMarkdown:
      '"Economic policies in interwar European dictatorships prioritized ideological and strategic power rather than living standards." Discuss with reference to two European states.',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Clear evaluative stance comparing state strategic drives (rearmament, autarky, heavy industry) against selective material concessions or harsh austerity.',
          marks: 3,
          keywords: ['strategic priority', 'autarky', 'living standards'],
        },
        {
          code: 'K1',
          criterion:
            'Case 1 (e.g., Stalin’s USSR): Five-Year Plans tripling steel/coal for defense ("make good 50–100 years") vs consumer housing collapse, collectivization livestock slaughter, and 1932–1933 famine.',
          marks: 4,
          keywords: ['Five-Year Plans', 'collectivization', 'Nove', 'famine'],
        },
        {
          code: 'K2',
          criterion:
            'Case 2 (e.g., Hitler’s Germany or Mussolini’s Italy): Schacht New Plan / Göring Four-Year Plan ("guns before butter") cutting unemployment via rearmament vs DAF wage freezes; OR Quota 90 / Battle for Grain autarky depressing real wages.',
          marks: 4,
          keywords: ['Four-Year Plan', 'guns before butter', 'Quota 90', 'Battle for Grain'],
        },
        {
          code: 'E1',
          criterion:
            'Evaluation incorporating Tooze/Overy/Mason (Nazi rearmament vs consumer illusion) and Fitzpatrick/Nove (Stalinist upward worker promotion despite consumer scarcity).',
          marks: 4,
          keywords: ['Overy', 'Tooze', 'Fitzpatrick', 'Nove'],
        },
      ],
      model_answer:
        'Uses Stalin’s USSR and Hitler’s Germany (or Mussolini’s Italy) to prove that military-industrial capability and autarky took systemic precedence over household consumption—while qualifying that Nazi regime survival depended heavily on eliminating mass unemployment (1933–1936) and protecting minimal consumer stability until 1939.',
    },
    sourceFileNames: [
      'Paper 3  - Europe - Pearson 2026.pdf',
      'IB 11 European Totalitarianism.pptx',
    ],
  },
  {
    topicCode: 'P3.2',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Compare and contrast',
    difficulty: 'Standard IB',
    maxMarks: 15,
    questionMarkdown:
      'Compare and contrast the youth and gender policies of Mussolini’s Italy and Hitler’s Germany between 1925 and 1939.',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Thematic framework balancing shared pronatalist/militarist mobilization against racialization and Catholic pushback.',
          marks: 3,
          keywords: ['pronatalism', 'youth mobilization', 'racial ideology'],
        },
        {
          code: 'C1',
          criterion:
            'Youth mobilization compared: ONB/GIL vs Hitler Youth (HJ) and BDM—paramilitary drills, ideological textbooks, sports—contrasting Catholic Action resilience in Italy vs near-total compulsion (1936/1939) in Germany (with Swing Kids/Edelweiss Pirates limits).',
          marks: 5,
          keywords: ['ONB', 'GIL', 'Hitler Youth', 'Catholic Action'],
        },
        {
          code: 'C2',
          criterion:
            'Gender/women compared: Battle for Births vs Kinder, Küche, Kirche / Mother’s Cross / marriage loans; both failed to sustain rising birthrates and both faced pragmatic wartime/rearmament pressures pulling women back into offices and munitions.',
          marks: 4,
          keywords: ['Battle for Births', 'Kinder Kuche Kirche', 'De Grazia', 'Koonz'],
        },
        {
          code: 'E1',
          criterion:
            'Historiographical evaluation citing Victoria de Grazia (Fascist patriarchy contradictions) and Claudia Koonz / Jill Stephenson (women’s complicity and labor pragmatism under Nazism).',
          marks: 3,
          keywords: ['De Grazia', 'Koonz', 'Stephenson'],
        },
      ],
      model_answer:
        'Contrasts shared patriarchal-demographic obsession (both regimes taxed bachelors and idealized motherhood while failing to reverse declining birthrates) with sharper German biological eugenics (*Lebensborn*, forced sterilization) and Italian compromise with Catholic parish youth.',
    },
    sourceFileNames: [
      'Paper 3  - Europe - Pearson 2026.pdf',
      'IB 11 European Totalitarianism.pptx',
    ],
  },
  {
    topicCode: 'P3.2',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Evaluate',
    difficulty: 'Standard IB',
    maxMarks: 8,
    stimulusMarkdown:
      '> **Benchmark Excerpt A (`Sample Paper 3-1`, 5/15):** *"The 1905 Revolution permanently weakened Tsarism. On Bloody Sunday troops fired on Father Gapon’s marchers, sparking strikes and mutinies across Russia until Nicholas issued the October Manifesto..."* (continues chronologically to 1914).\n\n' +
      '> **Benchmark Excerpt B (`Sample Paper 3-4`, 14/15):** *"While pre-war socio-political fissures exposed Romanov fragility, the First World War acted as the decisive catalyst transforming manageable autocratic strain into systemic collapse—through military defeats under Nicholas II at Stavka, wartime hyperinflation, and Progressive Bloc alienation—as Structuralists (Pipes) and Revisionists (Acton) debate..."*',
    questionMarkdown:
      'Using the May 2028 Paper 3 Markscheme criteria, diagnose why Excerpt A remained capped at 5/15 while Excerpt B achieved Band 13–15 (14/15).',
    markscheme: {
      marking_points: [
        {
          code: 'M1',
          criterion:
            'Excerpt A diagnosis (5/15): chronological narrative rather than thematic argument, uncritical acceptance of prompt ("permanently weakened"), ignores 1906–1914 Stolypin recovery/counter-evidence, zero historiography.',
          marks: 4,
          keywords: ['chronological narrative', 'ignores counter-evidence', 'no historiography'],
        },
        {
          code: 'M2',
          criterion:
            'Excerpt B diagnosis (14/15): immediate calibrated thesis establishing causal weight ("decisive catalyst" vs preconditions), structured thematic analytical pillars, embedded historiographical evaluation.',
          marks: 4,
          keywords: ['causal hierarchy', 'thematic synthesis', 'perspectives evaluation'],
        },
      ],
      model_answer:
        'Excerpt A falls into descriptive narration and single-track agreement, missing post-1905 recovery evidence and competing interpretations. Excerpt B establishes an analytical causal hierarchy upfront ("catalyst" vs "precondition"), anchors claims in concrete wartime mechanisms, and evaluates Structuralist vs Revisionist perspectives consistently.',
    },
    sourceFileNames: [
      'Paper 3 MarkScheme 2028 Extract.pdf',
      'Sample Paper 3-1 2028.pdf',
      'Sample Paper 3-4 2028.pdf',
    ],
  },
  {
    topicCode: 'P3.2',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Evaluate',
    difficulty: 'HL Extension',
    maxMarks: 6,
    stimulusMarkdown:
      '> *"Totalitarianism possesses six mutually supportive traits: an elaborate guiding ideology, a single mass party led by one man, a system of terroristic police control, monopoly of mass communication, monopoly of weapons, and central control of the economy."* — Carl Friedrich and Zbigniew Brzezinski (1956).',
    questionMarkdown:
      'Evaluate the usefulness and limitations of Friedrich and Brzezinski’s 1956 model for historians analyzing interwar Europe.',
    markscheme: {
      marking_points: [
        {
          code: 'V1',
          criterion:
            'Usefulness: identifies shared structural ambitions across Fascism, Nazism, and Stalinism—single-party monopoly, Agitprop/RMVP propaganda, youth leagues, and police surveillance.',
          marks: 3,
          keywords: ['single-party monopoly', 'propaganda', 'comparative baseline'],
        },
        {
          code: 'L1',
          criterion:
            'Limitations: Cold War political bias masking radical racial vs class differences; ignores chaotic Nazi polycracy (Mommsen), Stalinist center–periphery chaos (Getty/Fitzpatrick), and Italian Church/Crown compromises (Bosworth).',
          marks: 3,
          keywords: ['Cold War bias', 'polycracy', 'Church/Crown compromise'],
        },
      ],
      model_answer:
        'Friedrich-Brzezinski offers a sharp comparative checklist highlighting mass mobilization and anti-pluralist coercion. However, Cold War structural symmetry obscures how Nazi polycracy operated alongside private capitalism, why Stalin purged his own party rather than preserving elite unity, and why Mussolini’s monarchy-and-Concordat state never exercised total control.',
    },
    sourceFileNames: [
      'IB 11 European Totalitarianism.pptx',
      'Paper 3  - Europe - Pearson 2026.pdf',
    ],
  },
  {
    topicCode: 'P3.2',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Identify',
    difficulty: 'Standard IB',
    maxMarks: 2,
    questionMarkdown:
      'Under the May 2028 IB Paper 3 Markscheme, which hallmark explicitly distinguishes a Band 13–15 essay from a Band 10–12 essay?',
    mcqOptions: [
      {
        label: 'A',
        text: 'Providing a chronological blow-by-blow summary exceeding 2,000 words with no historiographical names.',
      },
      {
        label: 'B',
        text: 'Consistent, command-term-focused analysis featuring well-developed evaluation of different perspectives and a substantiated judgment.',
      },
      {
        label: 'C',
        text: 'Adding a standalone 4-mark reflection paragraph at the end evaluating archival biases.',
      },
      {
        label: 'D',
        text: 'Answering three 15-mark prompts from the same regional option inside 90 minutes.',
      },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [
        {
          code: 'M1',
          criterion:
            'Identifies Band 13–15 criteria: sustained focus on command term, specific integrated evidence, and well-developed evaluation of different perspectives.',
          marks: 2,
          keywords: ['Band 13-15', 'different perspectives', 'substantiated argument'],
        },
      ],
      model_answer:
        'B is correct: HL Paper 3 candidates answer two 15-mark essays from two different regional studies in 2 hours; Band 13–15 requires sustained evaluation of contrasting historical perspectives integrated directly into the argument.',
    },
    sourceFileNames: ['Paper 3 MarkScheme 2028 Extract.pdf', 'Sample Paper 3-4 2028.pdf'],
  },
  {
    topicCode: 'P3.2',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Identify',
    difficulty: 'HL Extension',
    maxMarks: 2,
    questionMarkdown:
      'Which economic contrast most accurately challenges the Cold War claim that Nazi Germany and Stalin’s USSR operated identical "totalitarian command economies"?',
    mcqOptions: [
      {
        label: 'A',
        text: 'Stalin retained independent trade unions and strikes while Hitler nationalized every private bank and steel mill.',
      },
      {
        label: 'B',
        text: 'Stalin abolished private enterprise wholesale via Gosplan Five-Year Plans and collectivization, whereas Hitler preserved private corporate ownership (e.g., Krupp, IG Farben) under strategic state direction.',
      },
      {
        label: 'C',
        text: 'Neither regime prioritized heavy industry or military rearmament before 1939.',
      },
      {
        label: 'D',
        text: 'Both economies eliminated unemployment exclusively through free-market austerity and reduced tariff barriers.',
      },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [
        {
          code: 'E1',
          criterion:
            'Accurately distinguishes Soviet abolition of private ownership/kolkhozy from Nazi retention of private big business inside Schacht/Göring strategic plans.',
          marks: 2,
          keywords: ['private ownership', 'Gosplan', 'IG Farben'],
        },
      ],
      model_answer:
        'B is correct: Soviet collectivization and Five-Year Plans abolished private capital and agrarian markets, whereas Nazi rearmament subordinated private cartels to state procurement and MEFO/Four-Year quotas without wholesale nationalization.',
    },
    sourceFileNames: ['IB 11 European Totalitarianism.pptx', 'Paper 3  - Europe - Pearson 2026.pdf'],
  },

  // =========================================================================
  // P3.3 — WEIMAR COLLAPSE, HITLER'S RISE & NAZI DICTATORSHIP (Q19–Q28)
  // =========================================================================
  {
    topicCode: 'P3.3',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'To what extent',
    difficulty: 'Standard IB',
    maxMarks: 15,
    questionMarkdown:
      '"The Weimar Republic was doomed from its birth in 1918–1919." To what extent do you agree with this judgment?',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Calibrated thesis avoiding hindsight determinism: distinguishes congenital 1918–1919 vulnerabilities from genuine 1924–1928 stabilization and the contingent 1929–1933 Great Depression shock.',
          marks: 3,
          keywords: ['birth defects', 'contingency', 'Great Depression'],
        },
        {
          code: 'K1',
          criterion:
            'Evidence supporting structural doom: Ebert–Groener Pact preserving imperial army/judiciary, Treaty of Versailles & Dolchstoßlegende, Proportional Representation fragmentation, Article 48 authoritarian temptation.',
          marks: 4,
          keywords: ['Ebert-Groener', 'Versailles', 'Article 48', 'Dolchstosslegende'],
        },
        {
          code: 'K2',
          criterion:
            'Counter-evidence against inevitability: Republic defeated Spartacists, Kapp Putsch (1920), 1923 hyperinflation/Beer Hall Putsch; Dawes/Locarno recovery drove NSDAP down to 2.6% in May 1928.',
          marks: 4,
          keywords: ['Kapp Putsch', 'Dawes Plan', 'Locarno', '2.6% 1928'],
        },
        {
          code: 'E1',
          criterion:
            'Historiographical evaluation: Bracher/Eyck (constitutional flaws) vs. Peukert/Kolb/Layton (republic survived early trauma and required catastrophic 1929 global crash + elite intrigue to fall).',
          marks: 4,
          keywords: ['Bracher', 'Peukert', 'Kolb', 'historiography'],
        },
      ],
      model_answer:
        'Rejects pure hindsight determinism: while the 1919 Constitution (Article 48, PR) and unreformed imperial elites left Weimar structurally exposed, survival through 1923 crises and NSDAP’s collapse to 2.6% in 1928 prove democracy was not inevitably doomed until the Wall Street Crash wrecked coalition consensus.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.3',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Evaluate',
    difficulty: 'HL Extension',
    maxMarks: 15,
    questionMarkdown:
      'Evaluate the claim that the years 1924 to 1929 represented a "Golden Era" of stability for the Weimar Republic.',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Explicit analytical verdict ("illusory" or "conditional" stability): contrasts visible diplomatic/cultural recovery against unresolved economic, agricultural, and political fractures ("dancing on a volcano").',
          marks: 3,
          keywords: ['illusory stability', 'conditional recovery', 'volcano'],
        },
        {
          code: 'K1',
          criterion:
            'Evidence of genuine recovery: Rentenmark stability, Dawes Plan ($800m+ US loans) & Young Plan, Locarno (1925), League entry (1926), Weimar Bauhaus/cinema vitality, extremist decline (NSDAP 12 seats in 1928).',
          marks: 4,
          keywords: ['Stresemann', 'Dawes Plan', 'Locarno', '1928 election'],
        },
        {
          code: 'K2',
          criterion:
            'Underlying fractures: dependence on short-term US loans, post-1927 rural/agrarian price slump radicalizing farmers, chronic 1.3M+ unemployment, Hindenburg’s 1925 election & anti-republican nationalist right (Hugenberg DNVP).',
          marks: 4,
          keywords: ['short-term US loans', 'agrarian crisis', 'Hindenburg 1925', 'Hugenberg'],
        },
        {
          code: 'E1',
          criterion:
            'Evaluates Stresemann’s own warning ("dancing on a volcano") alongside Mommsen / Eberhard Kolb / Detlev Peukert debate on whether middle-class resentment remained latent.',
          marks: 4,
          keywords: ['Mommsen', 'Peukert', 'Kolb', 'Stresemann'],
        },
      ],
      model_answer:
        'Models the Band 13–15 strategy exemplified in CRHS Sample Paper 3-3: demonstrates that economic stabilization and Locarno détente genuinely marginalized extremists while leaving structural fault lines—short-term Wall Street debt, Junker/peasant alienation from 1927, and a monarchist President—ready to shatter once foreign credit vanished.',
      examiner_notes:
        'Anchor cultural/economic evaluation tightly to political legitimacy rather than turning the essay into an art-history survey.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf', 'Sample Paper 3-3 2028.pdf'],
  },
  {
    topicCode: 'P3.3',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Assess',
    difficulty: 'Standard IB',
    maxMarks: 15,
    questionMarkdown:
      'Assess the relative importance of the Great Depression and elite political miscalculation in Hitler’s appointment as Chancellor in January 1933.',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Causal hierarchy: Great Depression functioned as the essential mass-electoral condition breaking Weimar democracy, whereas elite backstairs intrigue served as the decisive immediate trigger.',
          marks: 3,
          keywords: ['essential precondition', 'immediate trigger', 'causal hierarchy'],
        },
        {
          code: 'K1',
          criterion:
            'Great Depression mechanics: 6M+ unemployed, March 1930 Grand Coalition collapse, Brüning’s Article 48 deflation deepening misery, NSDAP surge from 2.6% (1928) -> 18.3% (1930) -> 37.3% (July 1932), KPD growth polarizing elites.',
          marks: 5,
          keywords: ['6 million unemployed', 'Brüning', '37.3%', 'KPD threat'],
        },
        {
          code: 'K2',
          criterion:
            'Elite intrigue & limits of electoral rise: NSDAP dropped to 33.1% in Nov 1932; Hitler refused Vice-Chancellorship; Papen, Hugenberg, and Oskar/Paul von Hindenburg brokered 30 Jan 1933 cabinet believing they had "boxed him in."',
          marks: 4,
          keywords: ['November 1932 decline', 'Papen', 'Hindenburg', 'backstairs intrigue'],
        },
        {
          code: 'E1',
          criterion:
            'Historiographical evaluation: Ian Kershaw / Richard Evans / Henry Ashby Turner (no inevitability without Papen–Hindenburg conspiracy) vs Marxist/structural emphasis on monopoly-capitalist crisis.',
          marks: 3,
          keywords: ['Kershaw', 'Turner', 'Evans'],
        },
      ],
      model_answer:
        'Explains why neither factor suffices alone: without the Depression shattering middle-class faith and paralyzing the Reichstag after 1930, Hitler remained a fringe 2.6% agitator; yet with Nazi votes ebbing in Nov 1932, Hitler could not seize the Chancellery without Papen and Hindenburg fatally handing him state power in January 1933.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.3',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Examine',
    difficulty: 'HL Extension',
    maxMarks: 15,
    questionMarkdown:
      'Examine the methods by which Hitler consolidated absolute political power in Germany between January 1933 and August 1934.',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Thesis capturing the fusion of pseudo-constitutional legality (*Legalitätstaktik*), grassroots SA terror, and strategic deals with conservative elites/Reichswehr.',
          marks: 3,
          keywords: ['pseudo-legality', 'Gleichschaltung', 'Reichswehr'],
        },
        {
          code: 'K1',
          criterion:
            'Constitutional dismantlement: Reichstag Fire Decree (28 Feb 1933) suspending civil rights, KPD bans, Enabling Act (23 Mar 1933, 444–94), DAF replacing unions (May), single-party law (July 1933), Länder abolition (Jan 1934).',
          marks: 5,
          keywords: ['Reichstag Fire Decree', 'Enabling Act', 'DAF', 'July 1933'],
        },
        {
          code: 'K2',
          criterion:
            'Resolving internal/elite threats: 1933 Reichskonkordat neutralizing Catholic Centre opposition; Night of the Long Knives (30 June 1934) eliminating Röhm/SA "second revolution" and Schleicher; Hindenburg’s death (2 Aug 1934) creating Führer office + army personal oath.',
          marks: 4,
          keywords: ['Night of the Long Knives', 'Röhm', 'Hindenburg', 'army oath'],
        },
        {
          code: 'E1',
          criterion:
            'Historiographical evaluation (Karl Dietrich Bracher’s "legal revolution" vs Martin Broszat / Ian Kershaw on improvised opportunism and conservative complicity).',
          marks: 3,
          keywords: ['Bracher', 'Broszat', 'Kershaw'],
        },
      ],
      model_answer:
        'Traces how Hitler executed an astonishingly rapid "legal revolution": harnessing Göring’s Prussian police and SA street violence to terrorize voters while using Article 48 decrees and the Enabling Act to persuade Hindenburg, Centre deputies, and generals that chaos had been contained—before ruthlessly sacrificing Röhm’s SA in June 1934 to secure unconditional Reichswehr loyalty.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf', 'IB 11 European Totalitarianism.pptx'],
  },
  {
    topicCode: 'P3.3',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'To what extent',
    difficulty: 'Standard IB',
    maxMarks: 15,
    questionMarkdown:
      'To what extent did Nazi economic and social policies (1933–1939) succeed in achieving Hitler’s aims of war readiness and a unified *Volksgemeinschaft*?',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Calibrated evaluation distinguishing rapid employment recovery and outward mass enthusiasm from economic bottlenecks by 1939 and persistent class/youth/religious friction.',
          marks: 3,
          keywords: ['Volksgemeinschaft', 'rearmament', 'bottlenecks'],
        },
        {
          code: 'K1',
          criterion:
            'Economy: unemployment fell 6M -> <300k via Autobahns/Schacht’s New Plan & MEFO bills; 1936 Four-Year Plan (Göring) ramped steel/synthetics but created labor, food, and foreign-exchange strains ("guns before butter").',
          marks: 4,
          keywords: ['Schacht', 'MEFO bills', 'Four-Year Plan', 'guns before butter'],
        },
        {
          code: 'K2',
          criterion:
            'Social policies: KdF/DAF leisure and HJ/BDM indoctrination vs wage stagnation, longer hours, post-1937 contradiction drawing women back into factories, Edelweiss Pirates, Confessing Church, and brutal exclusion of Jews/disabled.',
          marks: 4,
          keywords: ['KdF', 'Kinder Kuche Kirche', 'Edelweiss Pirates', 'exclusion'],
        },
        {
          code: 'E1',
          criterion:
            'Historiography: Timothy Mason ("crisis driving war") vs Richard Overy / Adam Tooze (calculated rearmament buildup) and Detlev Peukert / Ian Kershaw on partial, coercive Volksgemeinschaft.',
          marks: 4,
          keywords: ['Mason', 'Overy', 'Tooze', 'Peukert'],
        },
      ],
      model_answer:
        'Demonstrates partial success paired with acute contradictions: dropping unemployment restored regime prestige and Hitler Youth forged real generational loyalty, yet Four-Year Plan rearmament strained raw materials and worker living standards while class divisions persisted beneath *Volksgemeinschaft* propaganda and violent racial exclusion.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.3',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Evaluate',
    difficulty: 'HL Extension',
    maxMarks: 15,
    questionMarkdown:
      'Evaluate the view that Hitler’s Germany between 1933 and 1939 was a chaotic polycracy presided over by a "weak dictator" rather than an efficiently controlled totalitarian state.',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Engages directly with the Intentionalist vs. Structuralist debate, steering toward Kershaw’s synthesis rather than uncritically endorsing "weak dictator."',
          marks: 3,
          keywords: ['polycracy', 'weak dictator', 'synthesis'],
        },
        {
          code: 'K1',
          criterion:
            'Evidence for polycracy/Structuralism (Mommsen, Broszat): overlapping party/state jurisdictions (Gauleiter, SS, Four-Year Plan vs Economics Ministry), Hitler’s erratic work habits/avoidance of written decrees, competitive escalation (*cumulative radicalization*).',
          marks: 4,
          keywords: ['Mommsen', 'Broszat', 'Gauleiter', 'cumulative radicalization'],
        },
        {
          code: 'K2',
          criterion:
            'Evidence for overarching Hitler supremacy/Intentionalism (Bracher, Bullock, Hildebrand): zero collective cabinet meetings after 1938, supreme ideological authority over *Lebensraum*/anti-Semitism, purging Blomberg-Fritsch (1938) & Neurath.',
          marks: 4,
          keywords: ['Bracher', 'Blomberg-Fritsch', 'Mein Kampf', 'cabinet decline'],
        },
        {
          code: 'E1',
          criterion:
            'Evaluative reconciliation via Ian Kershaw ("Working Towards the Führer"): administrative chaos did not mean Hitler was "weak"—it empowered subordinates to radicalize policy precisely to win his favor.',
          marks: 4,
          keywords: ['Kershaw', 'Working Towards the Fuhrer', 'charismatic rule'],
        },
      ],
      model_answer:
        'Tests Hans Mommsen’s provocative "weak dictator" label against administrative evidence and finds it half-true structurally yet misleading politically: overlapping ministries and Gauleiter turf wars certainly disproved clockwork totalitarianism, yet Hitler retained unquestioned ultimate veto and set the ideological direction everyone competed to fulfill (*Working Towards the Führer*).',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf', 'IB 11 European Totalitarianism.pptx'],
  },
  {
    topicCode: 'P3.3',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Explain',
    difficulty: 'Standard IB',
    maxMarks: 6,
    stimulusMarkdown:
      '> *"Restrictions on personal liberty, on the right of free expression of opinion, including freedom of the press, on the right of assembly and the right of association... are permissible beyond the legal limits otherwise prescribed."* — Decree of the Reich President for the Protection of People and State (Reichstag Fire Decree), 28 February 1933.',
    questionMarkdown:
      'Explain how the 28 February 1933 Reichstag Fire Decree bridged Weimar Article 48 precedent and the Nazi Enabling Act of 23 March 1933.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Weimar continuity/abuse: invoked Article 48 emergency powers via Hindenburg, bypassing judicial review and normalizing indefinite detention (*protective custody*) of KPD/SPD opponents.',
          marks: 3,
          keywords: ['Article 48', 'Hindenburg', 'protective custody'],
        },
        {
          code: 'A2',
          criterion:
            'Bridge to Enabling Act: eliminated 81 KPD seats and intimidated Centre/moderate Reichstag delegates inside the Kroll Opera House, delivering the two-thirds vote (444–94) that ended constitutional checks permanently.',
          marks: 3,
          keywords: ['KPD seats', 'Enabling Act', 'Kroll Opera House'],
        },
      ],
      model_answer:
        'Using Article 48 emergency precedent, the 28 February Decree suspended fundamental Weimar liberties indefinitely, allowing police and SA auxiliaries to jail Communist deputies and crush opposition campaigning before the 5 March election. Excluding KPD deputies then assured Hitler the two-thirds majority needed to pass the 23 March Enabling Act legally.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.3',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Analyze',
    difficulty: 'Standard IB',
    maxMarks: 6,
    stimulusMarkdown:
      '> *"In 1933–1934, Nazi marriage loans required brides to vacate wage labor; by 1937–1939, Four-Year Plan labor shortages pushed total female wage employment in Germany higher than in 1929."* — Summary of German Reich Labour Ministry statistics.',
    questionMarkdown:
      'Account for the apparent contradiction between early Nazi gender ideology and female employment trends by 1939.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Early ideological drive (1933–1936): *Kinder, Küche, Kirche*, marriage loans (dropped work condition in 1937), barring women from senior civil/legal/medical posts to cut male unemployment and raise Aryan birthrates.',
          marks: 3,
          keywords: ['Kinder Kuche Kirche', 'marriage loans', 'male unemployment'],
        },
        {
          code: 'A2',
          criterion:
            'Pragmatic rearmament shift (1937–1939): Four-Year Plan and military conscription exhausted male labor, forcing Nazi planners to recall women into agriculture and munitions (*Duty Year* 1938), proving war readiness overrode domestic dogma (Stephenson/Koonz).',
          marks: 3,
          keywords: ['Four-Year Plan', 'labor shortage', 'Stephenson', 'Duty Year'],
        },
      ],
      model_answer:
        'Initially, marriage loans and bans on female professionals aligned ideological maternalism with cutting male unemployment. Once Göring’s 1936 Four-Year Plan and army expansion caused acute industrial labor shortages, pragmatism forced the regime to lift the work-ban loan restriction (1937) and expand female factory/clerical employment.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.3',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 2,
    questionMarkdown:
      'What crucial electoral trend between July and November 1932 underscores the importance of Papen and Hindenburg’s backstairs intrigue in January 1933?',
    mcqOptions: [
      {
        label: 'A',
        text: 'The NSDAP won 58% of the popular vote in November 1932, leaving Hindenburg no constitutional option.',
      },
      {
        label: 'B',
        text: 'Nazi vote share actually fell from 37.3% (230 seats) in July 1932 to 33.1% (196 seats) in November 1932, exposing financial and strategic crisis before Papen brokered Hitler’s appointment.',
      },
      {
        label: 'C',
        text: 'The SPD and KPD formed an unbreakable united Popular Front government controlling the Reichswehr.',
      },
      {
        label: 'D',
        text: 'Hitler seized Berlin militarily during a renewed Munich Beer Hall insurrection in November 1932.',
      },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [
        {
          code: 'K1',
          criterion:
            'Identifies NSDAP’s November 1932 drop (37.3% -> 33.1%) showing electoral stalling prior to conservative elite appointment.',
          marks: 2,
          keywords: ['37.3%', '33.1%', 'November 1932', 'Papen'],
        },
      ],
      model_answer:
        'B is correct: By late 1932 the NSDAP was losing momentum, bankrupt, and riven by Gregor Strasser’s crisis—demonstrating that elite miscalculation (Papen/Hindenburg) rescued Hitler at the eleventh hour.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.3',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Identify',
    difficulty: 'HL Extension',
    maxMarks: 2,
    questionMarkdown:
      'How does Ian Kershaw’s concept of *"Working Towards the Führer"* resolve the debate between Bracher’s Intentionalism and Mommsen’s Structuralism?',
    mcqOptions: [
      {
        label: 'A',
        text: 'It argues Hitler drafted precise daily cabinet timetables dictating every local decree in writing.',
      },
      {
        label: 'B',
        text: 'It argues bureaucratic chaos was real, yet subordinates competed aggressively to anticipate and radicalize Hitler’s broad ideological wishes in order to win power and favor.',
      },
      {
        label: 'C',
        text: 'It denies Hitler held coherent anti-Semitic or *Lebensraum* beliefs prior to 1941.',
      },
      {
        label: 'D',
        text: 'It argues the Reichstag judiciary silently overruled SS and Gestapo initiatives throughout the 1930s.',
      },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [
        {
          code: 'E1',
          criterion:
            'Accurately explains Kershaw’s synthesis linking chaotic institutional rivalry to Hitler’s supreme charismatic directional authority.',
          marks: 2,
          keywords: ['Kershaw', 'subordinate initiative', 'charismatic authority'],
        },
      ],
      model_answer:
        'B is correct: Kershaw shows Hitler rarely gave explicit micro-orders, instead setting an overarching ideological vision (*Lebensraum*, racial purification) that ambitious officials anticipated and escalated.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },

  // =========================================================================
  // P3.4 — STALIN'S RISE, ECONOMIC TRANSFORMATION & TERROR (Q29–Q32 here; Q33–Q38 appended next)
  // =========================================================================
  {
    topicCode: 'P3.4',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Evaluate',
    difficulty: 'Standard IB',
    maxMarks: 15,
    questionMarkdown:
      'Evaluate the relative importance of ideological appeal and control over the Party apparatus in Stalin’s rise to power between 1924 and 1929.',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Thesis weighing bureaucratic patronage (General Secretary, nomenklatura, Lenin Enrolment) against ideological agility (*Socialism in One Country*, tactical Left/Right shifts) and rivals’ errors.',
          marks: 3,
          keywords: ['patronage', 'Socialism in One Country', 'rivals’ errors'],
        },
        {
          code: 'K1',
          criterion:
            'Institutional control: Stalin as General Secretary (1922), Rabkrin, Orgburo, nomenklatura appointment lists, 1924 Lenin Enrolment flooding 500k compliant recruits into Congresses, exploiting 1921 Ban on Factions.',
          marks: 4,
          keywords: ['General Secretary', 'nomenklatura', 'Lenin Enrolment', 'Ban on Factions'],
        },
        {
          code: 'K2',
          criterion:
            'Ideology & tactical skill: *Socialism in One Country* appealing to war-weary bureaucrats vs Trotsky’s *Permanent Revolution*; burying Lenin’s Testament; allying with Triumvirate vs Trotsky, Bukharin vs United Opposition (1927), then leftward pivot over 1927–1928 grain crisis.',
          marks: 4,
          keywords: ['Lenin’s Testament', 'Permanent Revolution', 'Bukharin', 'grain crisis'],
        },
        {
          code: 'E1',
          criterion:
            'Historiography: Leonard Schapiro / Robert Conquest (ruthless bureaucratic machine) vs. Isaac Deutscher / Sheila Fitzpatrick / E.H. Carr (Socialism in One Country & industrialization matched real Bolshevik/worker aspirations).',
          marks: 4,
          keywords: ['Schapiro', 'Carr', 'Deutscher', 'Fitzpatrick'],
        },
      ],
      model_answer:
        'Argues that bureaucratic control as General Secretary supplied the decisive institutional mechanism (controlling Congress delegates and invoking factional bans), yet Stalin would not have prevailed so smoothly had *Socialism in One Country* not resonated deeply with party cadres exhausted by civil war while Trotsky’s arrogance alienated fellow Politburo members.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf', 'IB 11 European Totalitarianism.pptx'],
  },
  {
    topicCode: 'P3.4',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Discuss',
    difficulty: 'HL Extension',
    maxMarks: 15,
    questionMarkdown:
      '"Trotsky, Zinoviev, Kamenev, and Bukharin lost the succession struggle primarily through their own political miscalculations rather than Stalin’s political brilliance." Discuss.',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Balanced thesis testing rivals’ strategic blunders against Stalin’s patient patronage, coalition-building, and ideological timing.',
          marks: 3,
          keywords: ['rivals’ blunders', 'Stalin’s agency', 'structural advantage'],
        },
        {
          code: 'K1',
          criterion:
            'Rivals’ errors: Zinoviev/Kamenev blocking release of Lenin’s Testament (May 1924); Trotsky missing Lenin’s funeral, failing to attack Stalin over Georgian Affair, dismissing bureaucratic "mediocrity"; Bukharin defending slow NEP amid 1927–1928 grain crisis.',
          marks: 5,
          keywords: ['Lenin’s funeral', 'Georgian Affair', 'Testament suppression', 'NEP crisis'],
        },
        {
          code: 'K2',
          criterion:
            'Stalin’s active agency: cultivating "moderate center" image early, Lenin Enrolment, framing debates cleanly around party unity and defense against foreign war scare (1927), shifting against Bukharin once Trotsky was expelled.',
          marks: 4,
          keywords: ['1927 War Scare', 'party unity', 'moderate image'],
        },
        {
          code: 'E1',
          criterion:
            'Evaluates Stephen Cohen (Bukharin as viable NEP alternative crushed by Stalin’s power apparatus) vs Robert Service / Oleg Khlevniuk (Stalin’s superior political instincts inside Bolshevik hierarchy).',
          marks: 3,
          keywords: ['Cohen', 'Service', 'Khlevniuk'],
        },
      ],
      model_answer:
        'Demonstrates that every rival made catastrophic errors—chiefly underestimating Stalin as an uncharismatic clerk and refusing to mobilize against him while Lenin’s Testament remained explosive—yet stresses that Stalin’s mastery of party committees (*Orgburo/Secretariat*) continuously cornered them with impossible tactical choices.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.4',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Evaluate',
    difficulty: 'Standard IB',
    maxMarks: 15,
    questionMarkdown:
      'Evaluate the economic achievements and human costs of Stalin’s First and Second Five-Year Plans and collectivization between 1928 and 1937.',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Thesis assessing a stark paradox: heavy industrial transformation capable of surviving 1941 invasion achieved at catastrophic agrarian, consumer, and human cost.',
          marks: 3,
          keywords: ['industrialization', 'human cost', 'paradox'],
        },
        {
          code: 'K1',
          criterion:
            'Industrial achievements: Magnitogorsk, Dnieprostroi, coal (35M -> 166M tons to 1940) and steel (4.3M -> 18.3M tons) breakthroughs, Urals base, 2nd Plan transport/Metro & Stakhanovite literacy/technical education.',
          marks: 4,
          keywords: ['Magnitogorsk', 'Dnieprostroi', 'steel output', 'Urals'],
        },
        {
          code: 'K2',
          criterion:
            'Costs & collectivization devastation: dekulakization deportations (~1.8M+), peasant livestock slaughter (~50% lost), 1932–1933 famine/Holodomor (5–7M dead), internal passports (Dec 1932), White Sea Canal Gulag labor, housing/consumer crash.',
          marks: 4,
          keywords: ['dekulakization', 'Holodomor', 'Gulag', 'livestock slaughter'],
        },
        {
          code: 'E1',
          criterion:
            'Historiography: Alec Nove ("Was Stalin Really Necessary?") & Robert Allen (structural capital squeeze) vs. R.W. Davies & Stephen Wheatcroft (famine responsibility & wasted output) and Fitzpatrick (upward social mobility).',
          marks: 4,
          keywords: ['Nove', 'Davies & Wheatcroft', 'Fitzpatrick', 'necessity debate'],
        },
      ],
      model_answer:
        'Balances heavy-industrial triumphs (electric power, steel, Urals plants critical to defeating Hitler) against chaotic planning waste, collapsed real wages, and the human devastation of dekulakization and the 1932–1933 famine—engaging Alec Nove’s necessity debate with archival findings from Davies & Wheatcroft.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf', 'IB 11 European Totalitarianism.pptx'],
  },
  {
    topicCode: 'P3.4',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Examine',
    difficulty: 'HL Extension',
    maxMarks: 15,
    questionMarkdown:
      'Examine the causes and consequences of the Great Terror (1934–1938) in the Soviet Union, evaluating contrasting historiographical interpretations.',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Analytical thesis weighing Stalin’s preemptive political/geopolitical paranoia against center–periphery party tensions and assessing consequences across state, military, and society.',
          marks: 3,
          keywords: ['Yezhovshchina', 'preemptive terror', 'center-periphery'],
        },
        {
          code: 'K1',
          criterion:
            'Causes & escalation: Ryutin Platform (1932) backlash, Kirov murder (Dec 1934) emergency decrees, fear of "fifth column" ahead of Nazi/Japanese war, Moscow Show Trials (1936–1938) eliminating Old Bolsheviks.',
          marks: 4,
          keywords: ['Kirov', 'Show Trials', 'fifth column', 'Ryutin'],
        },
        {
          code: 'K2',
          criterion:
            'Scale & consequences: Order 00447 & national operations (~1.5M arrests, ~680k–750k executions 1937–1938), Gulag expansion, Red Army purge (Tukhachevsky & ~35,000 officers) weakening 1941 readiness, atomized civil society & Stalin Cult consolidation.',
          marks: 4,
          keywords: ['Order 00447', 'Tukhachevsky', 'Gulag', '1941 readiness'],
        },
        {
          code: 'E1',
          criterion:
            'Historiographical evaluation: Robert Conquest (Orthodox: long-planned totalitarian elimination) vs J. Arch Getty (Revisionist: center–periphery loss of control) vs Oleg Khlevniuk / Stephen Kotkin (post-1991 archival confirmation of Stalin’s signed quotas + regional chaos).',
          marks: 4,
          keywords: ['Conquest', 'Getty', 'Khlevniuk', 'Kotkin'],
        },
      ],
      model_answer:
        'Explains how Kirov’s 1934 murder unlocked sweeping police powers later expanded from Old Bolshevik Show Trials into mass NKVD Order 00447 quotas and the Red Army purge. Reconciles Conquest’s top-down model and Getty’s bureaucratic-chaos findings through post-1991 archives (Khlevniuk, Kotkin) proving both Stalin’s personal execution approvals and frantic local over-fulfillment.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf', 'IB 11 European Totalitarianism.pptx'],
  },
  {
    topicCode: 'P3.4',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'To what extent',
    difficulty: 'Standard IB',
    maxMarks: 15,
    questionMarkdown:
      'To what extent did Stalin’s domestic policies by 1939 preserve the social and cultural ideals of the 1917 Bolshevik Revolution?',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Calibrated thesis arguing that while Stalin abolished private industry/land (fulfilling anti-capitalist property goals), social, cultural, and family policies marked a dramatic conservative "Great Retreat" from early Bolshevik egalitarianism.',
          marks: 3,
          keywords: ['Great Retreat', 'property vs hierarchy', 'continuity and change'],
        },
        {
          code: 'K1',
          criterion:
            'Break with early 1917–1920s radicalism: 1936 Family Code banning abortion and restricting divorce, Stakhanovite wage differentials replacing wage equality, restoration of school discipline/military ranks, Cult of Stalin, Russian nationalism (*Alexander Nevsky*).',
          marks: 5,
          keywords: ['1936 Family Code', 'wage differentials', 'Stalin Cult', 'Russian nationalism'],
        },
        {
          code: 'K2',
          criterion:
            'Continuities with Bolshevik aims: wholesale elimination of private landlords/bourgeoisie, mass literacy campaigns, rapid expansion of female technical/industrial participation (~40%+ industrial labor by 1939), Atheist/Komsomol antireligious drives.',
          marks: 4,
          keywords: ['mass literacy', 'female employment', 'anti-capitalism'],
        },
        {
          code: 'E1',
          criterion:
            'Historiography: Leon Trotsky (*The Revolution Betrayed* — Thermidorian bureaucratic betrayal), Nicholas Timasheff (*The Great Retreat*), Sheila Fitzpatrick (cultural/technical promotion of working-class *vydvizhentsy*).',
          marks: 3,
          keywords: ['Trotsky', 'Timasheff', 'Fitzpatrick'],
        },
      ],
      model_answer:
        'Evaluates Stalinism through Continuity and Change: economically Stalin liquidated capitalist markets far beyond Lenin’s NEP, yet culturally (1936 Family Code, Socialist Realism, tsarist military titles, stark wage hierarchy) he executed what Timasheff termed "The Great Retreat" into authoritarian hierarchy.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.4',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Compare and contrast',
    difficulty: 'HL Extension',
    maxMarks: 6,
    stimulusMarkdown:
      '> *"Operational Order No. 00447 (July 1937) assigned initial quotas of 72,950 executions and 186,500 arrests across Soviet regions—quotas regional party bosses repeatedly petitioned Moscow to double."* — Summarized post-1991 archival data cited by Oleg Khlevniuk and J. Arch Getty.',
    questionMarkdown:
      'Contrast how Orthodox (*Robert Conquest*) and Revisionist (*J. Arch Getty / Sheila Fitzpatrick*) historians interpret this archival finding regarding the Great Terror.',
    markscheme: {
      marking_points: [
        {
          code: 'O1',
          criterion:
            'Orthodox/Archival synthesis (Conquest, Khlevniuk, Kotkin): points directly to centrally issued Politburo/NKVD quotas (Order 00447) signed by Stalin/Yezhov as proof of premeditated state-directed mass murder.',
          marks: 3,
          keywords: ['Conquest', 'Khlevniuk', 'central quotas', 'Stalin agency'],
        },
        {
          code: 'R1',
          criterion:
            'Revisionist view (Getty, Fitzpatrick): highlights local party secretaries petitioning to raise quotas as evidence of center–periphery panic, denunciation from below, and administrative chaos rather than frictionless top-down execution.',
          marks: 3,
          keywords: ['Getty', 'Fitzpatrick', 'center-periphery', 'local pressure'],
        },
      ],
      model_answer:
        'Orthodox scholars view centralized Order 00447 death quotas as decisive confirmation that Moscow planned and authorized mass slaughter from above; Revisionists emphasize regional secretaries escalating those quotas and local citizens weaponizing denunciations to explain why terror metastasized chaotically.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.4',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Analyze',
    difficulty: 'Standard IB',
    maxMarks: 6,
    stimulusMarkdown:
      '> *"To slacken the tempo would mean falling behind. And those who fall behind get beaten... We are fifty or a hundred years behind the advanced countries. We must make good this distance in ten years. Either we do it, or we shall be crushed."* — Joseph Stalin, Speech to Industrial Managers, February 1931.',
    questionMarkdown:
      'Analyze how Stalin’s February 1931 argument justified coercive Five-Year Plan targets and collectivization in geopolitical terms.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Geopolitical imperative: frames forced industrialization as national existential survival against "capitalist encirclement" (echoing the 1927 War Scare) rather than optional welfare policy.',
          marks: 3,
          keywords: ['capitalist encirclement', '1927 War Scare', 'survival'],
        },
        {
          code: 'A2',
          criterion:
            'Domestic economic justification: demands impossible output tempos ("make good in ten years") used to rationalize grain requisitioning for machinery imports, strict factory discipline, and purging "wreckers."',
          marks: 3,
          keywords: ['tempo', 'grain exports', 'wreckers', 'heavy industry'],
        },
      ],
      model_answer:
        'Delivered amid collectivization upheaval, Stalin’s "crushed in ten years" warning merged Marxist encirclement theory with Russian nationalist memory of foreign defeats—retrospectively prescient before Barbarossa (1941), yet invoked in 1931 to justify violent grain extraction and punishing factory quotas.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.4',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 2,
    questionMarkdown:
      'Which sequence accurately traces Stalin’s shifting Politburo alliances during the 1924–1929 succession struggle?',
    mcqOptions: [
      {
        label: 'A',
        text: 'Allied with Trotsky against Bukharin first (1924), then teamed with Zinoviev to revive the NEP (1928).',
      },
      {
        label: 'B',
        text: 'Formed the Triumvirate with Zinoviev & Kamenev to sideline Trotsky (1924–1925), allied with Bukharin to crush the Left/United Opposition (1926–1927), then broke with Bukharin’s Right Deviation over forced industrialization (1928–1929).',
      },
      {
        label: 'C',
        text: 'Expelled Bukharin in January 1924 while adopting Trotsky’s Permanent Revolution as state policy.',
      },
      {
        label: 'D',
        text: 'Published Lenin’s Testament voluntarily in 1924 to secure a popular referendum victory.',
      },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [
        {
          code: 'K1',
          criterion:
            'Correctly traces Triumvirate (vs Trotsky) -> Right alliance with Bukharin (vs United Opposition) -> Great Turn defeating Bukharin.',
          marks: 2,
          keywords: ['Triumvirate', 'United Opposition', 'Bukharin'],
        },
      ],
      model_answer:
        'B is correct: Stalin eliminated rivals sequentially, moving from the Triumvirate (1924) to a center-right bloc with Bukharin (1926–1927) before launching rapid collectivization and condemning Bukharin’s Right Deviation in 1928–1929.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.4',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Identify',
    difficulty: 'Standard IB',
    maxMarks: 2,
    questionMarkdown:
      'Why was the 1 December 1934 assassination of Leningrad Party chief Sergei Kirov a pivotal turning point in Soviet political repression?',
    mcqOptions: [
      {
        label: 'A',
        text: 'It prompted Stalin to abolish the NKVD and restore multi-party Duma elections in 1935.',
      },
      {
        label: 'B',
        text: 'Stalin immediately enacted the 1 December anti-terrorist decree abolishing defense counsel and appeals, using the investigation to launch purges culminating in the Moscow Show Trials.',
      },
      {
        label: 'C',
        text: 'It ended forced collectivization and dismantled the Gulag camp administration.',
      },
      {
        label: 'D',
        text: 'Kirov had demanded immediate German invasion and was replaced by Leon Trotsky.',
      },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [
        {
          code: 'K1',
          criterion:
            'Identifies immediate Dec 1934 legal acceleration (no appeal/counsel) linking Kirov’s death to Show Trials against Zinoviev/Kamenev.',
          marks: 2,
          keywords: ['Kirov', 'Dec 1934 decree', 'Show Trials'],
        },
      ],
      model_answer:
        'B is correct: Regardless of whether Stalin ordered Kirov’s murder or opportunistically exploited Nikolayev’s act, the 1 December decree legalized rapid execution without appeal and linked supposed conspirators to Zinoviev and Kamenev.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.4',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Identify',
    difficulty: 'HL Extension',
    maxMarks: 2,
    questionMarkdown:
      'What was a major strategic consequence of the 1937–1938 Red Army purge (including Marshal Mikhail Tukhachevsky) documented by historians such as John Erickson and Evan Mawdsley?',
    mcqOptions: [
      {
        label: 'A',
        text: 'It strengthened tactical deep-battle command cohesion before the 1939–1940 Winter War.',
      },
      {
        label: 'B',
        text: 'By arresting or executing ~35,000 officers including most corps/army commanders, it decapitated experienced leadership, induced paralysis in June 1941, and convinced Hitler the USSR was a "rotten structure."',
      },
      {
        label: 'C',
        text: 'It forced the USSR to abandon all tank production prior to 1943.',
      },
      {
        label: 'D',
        text: 'It preserved independent aristocratic Tsarist regiments inside the Red Army.',
      },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [
        {
          code: 'C1',
          criterion:
            'Links ~35,000 purged officers and Tukhachevsky’s execution directly to Winter War bungling, fearful junior replacements in 1941, and Nazi strategic overconfidence.',
          marks: 2,
          keywords: ['Tukhachevsky', '1941 readiness', 'Winter War'],
        },
      ],
      model_answer:
        'B is correct: Eliminating veteran commanders left inexperienced, terrified replacements afraid of tactical initiative during the Finnish Winter War (1939–1940) and early Operation Barbarossa.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },

  // =========================================================================
  // P3.6 & P3.5 — EUROPE AND THE SECOND WORLD WAR (1918–1949) (Q39–Q49)
  // =========================================================================
  {
    topicCode: 'P3.6',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'To what extent',
    difficulty: 'Standard IB',
    maxMarks: 15,
    questionMarkdown:
      '"The failure of the League of Nations in the 1930s was primarily caused by its structural weaknesses established in 1919." To what extent do you agree?',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Balanced causal thesis weighing congenital 1919 flaws (US absence, unanimity, no army) against the Great Depression shock and British/French national self-interest in the 1930s.',
          marks: 3,
          keywords: ['structural flaws', 'national self-interest', 'Great Depression'],
        },
        {
          code: 'K1',
          criterion:
            '1919 structural defects: US Senate rejection removing economic enforcement weight, initial exclusion of Germany/USSR, Article 5 unanimity rule, lack of standing armed forces, link to "unjust" Versailles status quo.',
          marks: 4,
          keywords: ['US absence', 'unanimity', 'Article 16', 'no standing army'],
        },
        {
          code: 'K2',
          criterion:
            '1930s decisive agency & external crisis: Great Depression fueling protectionism/aggressive expansion; Manchuria (1931–1933) Lytton inaction; Abyssinia (1935–1936) oil-sanction refusal & Hoare–Laval Pact; Rhineland/Munich bypassed Geneva altogether.',
          marks: 4,
          keywords: ['Manchuria', 'Abyssinia', 'Hoare-Laval', 'Great Depression'],
        },
        {
          code: 'E1',
          criterion:
            'Evaluates E.H. Carr (*The Twenty Years’ Crisis*: utopian idealism colliding with power politics) vs. Ruth Henig / Zara Steiner (League succeeded in minor 1920s disputes like Aaland Islands/Greco-Bulgarian crisis—Great Powers abandoned it in the 1930s).',
          marks: 4,
          keywords: ['E.H. Carr', 'Zara Steiner', 'Ruth Henig', 'realpolitik'],
        },
      ],
      model_answer:
        'Shows that while US non-membership and unanimity crippled League deterrence from 1919, 1920s successes prove structural defects were not immediately fatal; rather, Great Depression radicalization and Anglo-French preference for bilateral appeasement (Hoare-Laval, Munich) killed collective security.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.6',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Evaluate',
    difficulty: 'HL Extension',
    maxMarks: 15,
    questionMarkdown:
      'Evaluate the view that Anglo-French Appeasement, rather than Nazi ideological expansionism, was primarily responsible for the outbreak of war in Europe in 1939.',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Clear causal hierarchy: identifies Nazi *Lebensraum* revisionism and aggressive escalation as the primary driver while assessing Appeasement as an enabling miscalculation that altered Hitler’s risk calculus.',
          marks: 3,
          keywords: ['primary driver', 'enabling factor', 'Lebensraum'],
        },
        {
          code: 'K1',
          criterion:
            'Nazi agency & aggression: *Mein Kampf* racial space goals, 1933 League exit, 1935 conscription, Rhineland (1936), Hossbach Memorandum (Nov 1937), Anschluss (Mar 1938), Prague breach of Munich (Mar 1939), Molotov-Ribbentrop Pact (Aug 1939), Poland (1 Sept).',
          marks: 4,
          keywords: ['Hossbach Memorandum', 'Anschluss', 'Prague 1939', 'Nazi-Soviet Pact'],
        },
        {
          code: 'K2',
          criterion:
            'Appeasement rationale & impact: Britain’s 1937 Inskip defense constraints, French domestic division/Maginot mindset, Versailles guilt, anti-Bolshevism delaying USSR talks, Munich (Sept 1938) convincing Hitler Britain/France lacked resolve over Poland.',
          marks: 4,
          keywords: ['Munich 1938', 'Inskip Report', 'Chamberlain', 'Soviet exclusion'],
        },
        {
          code: 'E1',
          criterion:
            'Historiographical evaluation: Orthodoxy ("Guilty Men"/Churchill) vs. A.J.P. Taylor (opportunistic Hitler responding to Western weakness) vs. Revisionist defense of Chamberlain (Parker/Dilks/1939 Spitfire rearmament time) & Weinberg (Hitler wanted war regardless).',
          marks: 4,
          keywords: ['A.J.P. Taylor', 'Weinberg', 'Parker', 'Churchill'],
        },
      ],
      model_answer:
        'Weighs structural British imperial overstretch against Hitler’s relentless ideological escalation: while Chamberlain’s Munich concessions dismantled Czechoslovakia’s defenses and undermined Soviet trust (pushing Stalin toward the August 1939 Pact), Hitler’s consistent pursuit of *Lebensraum* and 1939 invasion of Prague prove Nazi aggression—not appeasement alone—initiated war.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.6',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Assess',
    difficulty: 'Standard IB',
    maxMarks: 15,
    questionMarkdown:
      'Assess the significance of the Abyssinian Crisis (1935–1936) and the Spanish Civil War (1936–1939) in shattering European collective security.',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Thesis assessing how both Mediterranean/peripheral crises shattered the Stresa Front, revealed Anglo-French paralysis, and welded the Rome–Berlin Axis.',
          marks: 3,
          keywords: ['Stresa Front', 'Rome-Berlin Axis', 'collective security'],
        },
        {
          code: 'K1',
          criterion:
            'Abyssinia (1935–1936): followed April 1935 Stresa Front; League oil-sanction omission & leaked Dec 1935 Hoare–Laval Pact alienated Italy and humiliated Geneva; let Hitler exploit distraction to remilitarize Rhineland (Mar 1936).',
          marks: 5,
          keywords: ['Abyssinia', 'Hoare-Laval', 'Rhineland March 1936', 'oil embargo'],
        },
        {
          code: 'K2',
          criterion:
            'Spanish Civil War (1936–1939): Non-Intervention Committee hypocrisy let Mussolini commit ~70k troops and Hitler test Luftwaffe Condor Legion (Guernica) while USSR aided Republic—forging Axis combat alliance and cementing distrust between democracies and Moscow.',
          marks: 4,
          keywords: ['Condor Legion', 'Non-Intervention', 'Guernica', 'Rome-Berlin Axis'],
        },
        {
          code: 'E1',
          criterion:
            'Evaluates A.J.P. Taylor / Zara Steiner / Paul Preston on whether Abyssinia dealt the lethal fatal blow to the League while Spain transformed Axis ideology into military alignment.',
          marks: 3,
          keywords: ['Steiner', 'Preston', 'Taylor'],
        },
      ],
      model_answer:
        'Argues Abyssinia killed the League’s credibility outright—sacrificing Ethiopia in vain while still pushing Mussolini into Hitler’s orbit and enabling the 1936 Rhineland gamble—while the Spanish Civil War tested German/Italian air coordination and convinced Stalin the Western powers would never jointly resist fascism.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.6',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Analyze',
    difficulty: 'HL Extension',
    maxMarks: 15,
    questionMarkdown:
      'Analyze the reasons for Allied victory and Axis defeat in the European theatre between 1941 and 1945.',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Multi-causal thesis weighing Soviet military-industrial resilience and Allied economic superiority against German strategic overstretch and Nazi ideological irrationality.',
          marks: 3,
          keywords: ['industrial attrition', 'Eastern Front', 'strategic overstretch'],
        },
        {
          code: 'K1',
          criterion:
            'Axis strategic errors (1940–1942): failing to knock Britain out in 1940, launching Barbarossa (June 1941) without winter logistics, unforced war declaration on USA (Dec 1941), Hitler’s "no retreat" micromanagement at Stalingrad/Kursk.',
          marks: 4,
          keywords: ['Battle of Britain', 'Barbarossa', 'US war declaration', 'Stalingrad'],
        },
        {
          code: 'K2',
          criterion:
            'Allied military, industrial & intelligence superiority: Soviet Urals evacuation & human/tank production (~80% German losses on Eastern Front), US Lend-Lease logistics, Atlantic convoy victory (1943), Ultra codebreaking, Strategic Bombing & D-Day/Bagration 1944.',
          marks: 4,
          keywords: ['Urals evacuation', 'Lend-Lease', 'Ultra', 'Bagration'],
        },
        {
          code: 'E1',
          criterion:
            'Historiographical evaluation engaging Richard Overy (*Why the Allies Won*: battle effectiveness + economic endurance, not brute GDP alone) and Mark Harrison / Adam Tooze (German war-economy limits vs Allied mobilization).',
          marks: 4,
          keywords: ['Overy', 'Tooze', 'Harrison', 'war economy'],
        },
      ],
      model_answer:
        'Demonstrates that once Britain survived 1940 and Germany locked itself into multi-front attrition against both the USSR and US industrial capacity in 1941, Axis prospects crumbled—yet emphasizes Overy’s insight that Allied material weight had to be converted into operational mastery (Red Army transformation at Stalingrad/Kursk, Ultra, Atlantic air cover).',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.6',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Examine',
    difficulty: 'HL Extension',
    maxMarks: 15,
    questionMarkdown:
      'Examine how Nazi anti-Jewish persecution escalated into the Final Solution between 1933 and 1945, evaluating Intentionalist and Functionalist historical interpretations.',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Chronological-conceptual thesis identifying progressive escalatory thresholds (exclusion -> forced emigration -> ghettos/T4 -> Barbarossa shootings -> industrial camps) framed through Intentionalist vs Functionalist lenses.',
          marks: 3,
          keywords: ['escalation', 'thresholds', 'Intentionalist vs Functionalist'],
        },
        {
          code: 'K1',
          criterion:
            'Escalatory stages: 1933–1939 Boycott/Nuremberg Laws/Kristallnacht; 1939–1941 Polish ghettoization & failed Madagascar Plan alongside Aktion T4 gas-chamber training.',
          marks: 4,
          keywords: ['Nuremberg Laws', 'Kristallnacht', 'Madagascar Plan', 'Aktion T4'],
        },
        {
          code: 'K2',
          criterion:
            'Barbarossa watershed (1941–1945): Vernichtungskrieg, Einsatzgruppen shootings (Babi Yar), autumn 1941 Chelmno/Belzec construction, Jan 1942 Wannsee Conference, Operation Reinhard & Auschwitz-Birkenau murdering ~6 million Jews.',
          marks: 4,
          keywords: ['Einsatzgruppen', 'Babi Yar', 'Wannsee', 'Operation Reinhard'],
        },
        {
          code: 'E1',
          criterion:
            'Historiography evaluated cleanly: Lucy Dawidowicz / Gerald Fleming (Intentionalist blueprint) vs. Hans Mommsen / Christopher Browning (Functionalist *cumulative radicalization* & *Ordinary Men*) vs. Ian Kershaw / Peter Longerich (mid-1941 Hitler authorization + bureaucratic improvisation).',
          marks: 4,
          keywords: ['Dawidowicz', 'Mommsen', 'Browning', 'Longerich'],
        },
      ],
      model_answer:
        'Traces a non-linear escalation from pre-war forced emigration to systematic continental genocide triggered by Operation Barbarossa’s ideological war of annihilation in 1941. Synthesizes Dawidowicz’s focus on Hitler’s unwavering obsession with Browning and Mommsen’s demonstration that local SS/civil administrators improvised ghetto liquidation and death camps through cumulative radicalization.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.6',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Evaluate',
    difficulty: 'Standard IB',
    maxMarks: 15,
    questionMarkdown:
      'Evaluate the political, economic, and territorial impact of the Second World War on Germany between 1945 and 1949.',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion:
            'Thesis tracing Germany’s rapid transformation from shattered *Stunde Null* occupied ruin into two rival sovereign Cold War states (FRG & GDR) by late 1949.',
          marks: 3,
          keywords: ['Stunde Null', 'occupation zones', 'partition 1949'],
        },
        {
          code: 'K1',
          criterion:
            'Territorial & human shock (1945–1946): ~5.3M German military dead, Oder-Neisse border losses, 12–14M *Vertriebene* expellees, four Allied occupation zones + Berlin sector division (Yalta/Potsdam), Nuremberg IMT (1945–1946).',
          marks: 4,
          keywords: ['Oder-Neisse', 'Vertriebene', 'Potsdam', 'Nuremberg'],
        },
        {
          code: 'K2',
          criterion:
            'Economic & political divergence (1946–1949): reparations clash, uneven Denazification (*Persilscheine* in West vs SED nationalization in East), Bizone & Marshall Plan (1947), Deutsche Mark reform (June 1948), Berlin Blockade/Airlift (1948–1949), FRG (May) & GDR (Oct 1949).',
          marks: 4,
          keywords: ['Marshall Plan', 'Deutsche Mark', 'Berlin Airlift', 'FRG and GDR'],
        },
        {
          code: 'E1',
          criterion:
            'Historiography: Tony Judt (*Postwar*: Western Adenauer pragmatic stability vs moral amnesia of incomplete denazification) & Carolyn Eisenberg / John Lewis Gaddis (Cold War mutual responsibility for permanent partition).',
          marks: 4,
          keywords: ['Tony Judt', 'Eisenberg', 'Gaddis', 'Denazification limits'],
        },
      ],
      model_answer:
        'Covers both immediate physical/territorial catastrophe (1945–1946) and Cold War structural bifurcation (1947–1949): while Nuremberg anchored international criminal law, geopolitical rivalry caused Western Allies to pivot rapidly from punitive denazification toward West German currency reform and economic reconstruction inside the Marshall Plan, locking in Cold War division.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.6',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Explain',
    difficulty: 'Standard IB',
    maxMarks: 6,
    stimulusMarkdown:
      '> *"Under appropriate leadership, the Jews are to be put to labor in the East in the course of the Final Solution... A large proportion will doubtless drop out through natural diminution; the remainder must be treated accordingly."* — Protokoll of the Wannsee Conference, 20 January 1942.',
    questionMarkdown:
      'Explain why historians regard Operation Barbarossa (June 1941) and the Wannsee Conference (January 1942) as distinct operational phases rather than evidence of a single static 1933 blueprint.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Pre-1941 policies targeted forced emigration (Nuremberg Laws, Kristallnacht) and failed territorial expulsion schemes (Madagascar Plan) while Poland’s ghettos faced worsening mortality.',
          marks: 2,
          keywords: ['emigration', 'Madagascar Plan', 'ghettos'],
        },
        {
          code: 'A2',
          criterion:
            'June 1941 Barbarossa threshold: ideological *Vernichtungskrieg* launched systematic mass *Einsatzgruppen* shootings of Jewish civilians before death camps opened in late 1941.',
          marks: 2,
          keywords: ['Barbarossa', 'Einsatzgruppen', 'Vernichtungskrieg'],
        },
        {
          code: 'A3',
          criterion:
            'January 1942 Wannsee role: Heydrich did not *decide* the Final Solution there—he coordinated state ministries, railways, and SS bureaucrats to execute an ongoing continental industrial killing program.',
          marks: 2,
          keywords: ['Wannsee', 'Heydrich', 'bureaucratic coordination'],
        },
      ],
      model_answer:
        'Mass murder did not begin with a 1933 blueprint: only when Barbarossa fused war with anti-Bolshevik annihilation in June 1941 did *Einsatzgruppen* move from expulsion to systematic shooting. By January 1942, Chelmno and Belzec were already built/underway, so Wannsee coordinated state-wide ministry logistics across occupied and allied Europe.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.6',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Assess',
    difficulty: 'HL Extension',
    maxMarks: 6,
    stimulusMarkdown:
      '> *"Crimes against international law are committed by men, not by abstract entities, and only by punishing individuals who commit such crimes can the provisions of international law be enforced."* — Judgment of the Nuremberg International Military Tribunal (1946).',
    questionMarkdown:
      'Assess the historical significance and practical limitations of the Nuremberg Trials (1945–1946) and post-war Denazification in Germany to 1949.',
    markscheme: {
      marking_points: [
        {
          code: 'S1',
          criterion:
            'Legal significance: prosecuted individuals for Crimes Against Peace, War Crimes, and Crimes Against Humanity; rejected "superior orders" immunity; created archival record of Nazi atrocities.',
          marks: 3,
          keywords: ['Crimes Against Humanity', 'individual accountability', 'legal precedent'],
        },
        {
          code: 'L1',
          criterion:
            'Limitations: critiques of "victors’ justice" (omitting Soviet Katyn / Allied area bombing); rapid Cold War softening of grassroots Denazification (*Persilscheine*, reintegration of judges/industrialists into West Germany) after 1947.',
          marks: 3,
          keywords: ['victors justice', 'Persilscheine', 'Cold War shift'],
        },
      ],
      model_answer:
        'Nuremberg pioneered individual legal accountability under international humanitarian law and documented Nazi war crimes irrefutably, yet failed to deliver sweeping social purges: Allied double standards silenced discussion of Soviet Katyn killings, and Cold War urgency halted Western Denazification after 1947.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.5',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 2,
    questionMarkdown:
      'What did the secret additional protocol of the 23 August 1939 Nazi–Soviet (Molotov–Ribbentrop) Pact authorize?',
    mcqOptions: [
      {
        label: 'A',
        text: 'Immediate joint British–Soviet naval defense of Danzig against German aggression.',
      },
      {
        label: 'B',
        text: 'Division of Poland and Eastern European spheres of influence (Baltic states, Finland, Bessarabia) between Nazi Germany and the USSR, clearing Hitler’s 1 September invasion without fear of immediate two-front war.',
      },
      {
        label: 'C',
        text: 'German evacuation of Austria and the Sudetenland under League supervision.',
      },
      {
        label: 'D',
        text: 'Unconditional US entry into a defensive alliance with France and the Soviet Union.',
      },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [
        {
          code: 'K1',
          criterion:
            'Identifies secret territorial partition of Poland/Baltic spheres removing Germany’s immediate two-front deterrence.',
          marks: 2,
          keywords: ['secret protocol', 'Poland partition', 'two-front war'],
        },
      ],
      model_answer:
        'B is correct: By trading spheres of influence in Eastern Europe and buying Soviet breathing space after Anglo-French talks stalled, Stalin removed Hitler’s dread of immediate simultaneous war in East and West.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.6',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Identify',
    difficulty: 'Standard IB',
    maxMarks: 2,
    questionMarkdown:
      'Why does A.J.P. Taylor’s 1961 book *The Origins of the Second World War* remain controversial in Paper 3 historiography?',
    mcqOptions: [
      {
        label: 'A',
        text: 'He claimed Mussolini rather than Hitler instigated the 1939 invasion of Poland.',
      },
      {
        label: 'B',
        text: 'He portrayed Hitler as an opportunistic traditional German statesman exploiting Anglo-French missteps rather than a systematic ideological planner executing a fixed war timetable.',
      },
      {
        label: 'C',
        text: 'He relied solely on Soviet NKVD files released in 1995 to blame Britain exclusively.',
      },
      {
        label: 'D',
        text: 'He defended the Treaty of Versailles as completely fair and free of German resentment.',
      },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [
        {
          code: 'E1',
          criterion:
            'Accurately summarizes Taylor’s revisionist "opportunistic statesman" thesis against Weinberg/Trevor-Roper intentionalist critiques.',
          marks: 2,
          keywords: ['A.J.P. Taylor', 'opportunism', 'Revisionist'],
        },
      ],
      model_answer:
        'B is correct: Taylor sparked fierce debate by treating Hitler as an extreme nationalist diplomat seizing chances offered by Western hesitation—prompting Gerhard Weinberg and Hugh Trevor-Roper to counter with *Mein Kampf* and Second Book evidence of ideological *Lebensraum* planning.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P3.6',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Identify',
    difficulty: 'Standard IB',
    maxMarks: 2,
    questionMarkdown:
      'Which pairing of Eastern Front statistics and Allied logistic factors best supports Richard Overy’s argument in *Why the Allies Won*?',
    mcqOptions: [
      {
        label: 'A',
        text: 'Germany fought exclusively on the Western Front after 1941 while refusing US-bound Lend-Lease routes.',
      },
      {
        label: 'B',
        text: 'Over 75% of German military casualties occurred on the Eastern Front (Moscow, Stalingrad, Kursk) where relocated Soviet Urals industry and ~400,000 US Lend-Lease trucks sustained decisive operational recovery.',
      },
      {
        label: 'C',
        text: 'Strategic bombing single-handedly ended German armaments production in 1942 without land battles.',
      },
      {
        label: 'D',
        text: 'Soviet grain harvests doubled in 1942 while Germany conquered Baku and Moscow.',
      },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [
        {
          code: 'K1',
          criterion:
            'Identifies decisive Eastern Front attrition combined with Urals industrial mobilization and Lend-Lease mobility.',
          marks: 2,
          keywords: ['Eastern Front', 'Urals', 'Lend-Lease', 'Overy'],
        },
      ],
      model_answer:
        'B is correct: Red Army attrition (~75–80% of Wehrmacht casualties) combined with Urals production and Lend-Lease trucks/radios gave Soviet deep operations decisive mobility from Stalingrad/Kursk through Bagration.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf'],
  },

  // =========================================================================
  // CONCEPTS & C.1–C.4 — MAY 2028 IA (24 MARKS), CHICAGO NB & CONCEPTS (Q50–Q58)
  // =========================================================================
  {
    topicCode: 'CONCEPTS',
    paperType: 'Internal Assessment (2028 History IA)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 2,
    questionMarkdown:
      'Which specification accurately describes the active **May 2028 IB History Internal Assessment (IA)** format?',
    mcqOptions: [
      {
        label: 'A',
        text: '25 marks across Identification & OPCVL (6m), Investigation (15m), and Reflection (4m); unlimited sources.',
      },
      {
        label: 'B',
        text: '24 marks across Section 1 Inquiry Question (6m), Section 2 Sources & Perspectives (6m, max 7 sources), and Section 3 Synthesis & Evaluation (12m); max 2,200 words; standalone Reflection removed.',
      },
      {
        label: 'C',
        text: '20 marks with a 1,500-word limit, requiring 15 primary sources cited in MLA parenthetical format.',
      },
      {
        label: 'D',
        text: '30 marks consisting purely of two Paper 3 essays graded internally without citations.',
      },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [
        {
          code: 'I1',
          criterion:
            'Accurately identifies May 2028 IA parameters: 24 marks (6/6/12), max 7 sources, <=2,200 words, Reflection removed.',
          marks: 2,
          keywords: ['24 marks', '7 sources', '2,200 words', 'no Reflection'],
        },
      ],
      model_answer:
        'B is correct: Pre-2028 25-mark IA formats with standalone Reflection and mechanical two-source OPCVL checklists are obsolete for the Class of 2028.',
    },
    sourceFileNames: ['IB HISTORY 11 INTRODUCTION.pptx', 'Sample 1.pdf'],
  },
  {
    topicCode: 'CONCEPTS',
    paperType: 'Internal Assessment (2028 History IA)',
    commandTerm: 'Identify',
    difficulty: 'Standard IB',
    maxMarks: 2,
    questionMarkdown:
      'Which citation pair correctly follows **Chicago Manual of Style — Notes & Bibliography (CMOS NB)** rules for a first footnote and matching Bibliography entry?',
    mcqOptions: [
      {
        label: 'A',
        text: 'Footnote: `Kershaw, Ian. Hitler, 1998, p. 412.` | Bib: `1. Ian Kershaw (1998) Hitler.`',
      },
      {
        label: 'B',
        text: 'Footnote: `1. Ian Kershaw, *Hitler, 1889–1936: Hubris* (New York: W. W. Norton, 1998), 412.` | Bib: `Kershaw, Ian. *Hitler, 1889–1936: Hubris*. New York: W. W. Norton, 1998.`',
      },
      {
        label: 'C',
        text: 'Footnote: `(Kershaw 1998, 412)` | Bib: `Ian Kershaw. W. W. Norton. 1998.`',
      },
      {
        label: 'D',
        text: 'Footnote: `1. *Hitler*, Ian Kershaw [412].` | Bib: `Kershaw, I., "Hitler", 412.`',
      },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [
        {
          code: 'C1',
          criterion:
            'Matches CMOS NB syntax: Footnote uses First Last + commas + parentheses around publisher/year + page number; Bibliography uses Last, First + periods + no parentheses.',
          marks: 2,
          keywords: ['Chicago NB', 'footnote syntax', 'bibliography syntax'],
        },
      ],
      model_answer:
        'B is correct: Remember the inverse grammar between Notes (First Last, commas, `(Place: Publisher, Year), page.`) and Bibliography (`Last, First. *Title*. Place: Publisher, Year.`). Subsequent notes use shortened `Last, *Short Title*, page.` rather than *Ibid.*',
    },
    sourceFileNames: ['cmos-nb-sample-paper-purdue-owl-2-publish-20260312.pdf', 'Sample 2.pdf'],
  },
  {
    topicCode: 'C.1',
    paperType: 'Internal Assessment (2028 History IA)',
    commandTerm: 'Evaluate',
    difficulty: 'Standard IB',
    maxMarks: 6,
    stimulusMarkdown:
      '> **Draft IA Question:** *"Did Mussolini ruin Italy’s economy between 1922 and 1940, and what happened to Italian workers?"*',
    questionMarkdown:
      'Diagnose three weaknesses in this Draft IA Inquiry Question under **May 2028 IA Section 1 (6 Marks)** and rewrite it into a focused, conceptually sharp inquiry question.',
    markscheme: {
      marking_points: [
        {
          code: 'D1',
          criterion:
            'Diagnoses weaknesses: (1) binary yes/no framing ("Did Mussolini ruin..."), (2) anachronistic value judgment ("ruin") & bloated 18-year double-barreled scope, (3) missing explicit 2028 historical concept anchor (Cause & Consequence / Continuity & Change / Significance).',
          marks: 3,
          keywords: ['yes/no trap', 'overbroad scope', 'missing concept'],
        },
        {
          code: 'R1',
          criterion:
            'Produces a crisp revised question (e.g., *"To what extent were Mussolini’s Quota 90 currency revaluation and the Battle for Grain (1925–1934) shaped more by political prestige than economic modernization?"*) with clear scope and conceptual tension.',
          marks: 3,
          keywords: ['To what extent', 'bounded dates', 'analytical tension'],
        },
      ],
      model_answer:
        'Weaknesses: binary yes/no wording invites polarized summary; "ruin" is vague and judgmental; spanning 1922–1940 while adding a second worker sub-question exceeds 1,300 words of Section 3. Revision focuses tightly on specific 1925–1934 autarkic policies anchored in *Cause & Consequence* (*political prestige vs. economic modernization*).',
    },
    sourceFileNames: ['IB HISTORY 11 INTRODUCTION.pptx', 'Sample 1.pdf'],
  },
  {
    topicCode: 'C.3',
    paperType: 'Internal Assessment (2028 History IA)',
    commandTerm: 'Evaluate',
    difficulty: 'HL Extension',
    maxMarks: 6,
    stimulusMarkdown:
      '> **Source A:** *Speech by Benito Mussolini inaugurating the Battle for Grain, Rome, 1925.*\n' +
      '> **Source B:** *Vera Zamagni, The Economic History of Italy 1860–1990 (Oxford University Press, 1993), analyzing regional wheat vs. livestock output using post-war ISTAT series.*',
    questionMarkdown:
      'Model a May 2028 **Section 2 (Sources & Perspectives)** evaluation comparing how Source A and Source B illuminate—and limit—an investigation into Fascist agrarian policy (without using isolated mechanical OPCVL lists).',
    markscheme: {
      marking_points: [
        {
          code: 'P1',
          criterion:
            'Source A evaluation: locates value in unveiling official regime propaganda rationale (autarky, self-sufficiency, nationalist prestige) while linking limits directly to public exhortation omitting southern peasant poverty and citrus export losses.',
          marks: 3,
          keywords: ['regime rationale', 'propaganda omissions', 'provenance'],
        },
        {
          code: 'P2',
          criterion:
            'Source B evaluation & synthesis: contrasts Zamagni’s post-war quantitative economic methodology (capturing macro productivity and regional divergence) with limits of aggregate statistics concealing lived peasant coercion, showing how pairing both inside the 7-source cap tests rhetoric against reality.',
          marks: 3,
          keywords: ['quantitative synthesis', 'perspective contrast', 'triangulation'],
        },
      ],
      model_answer:
        'Rather than ticking isolated OPCVL headings, strong Section 2 writing explains *why* Mussolini’s 1925 public address proves intentional political framing despite hiding southern dislocation, and *how* Zamagni’s macroeconomic dataset corrects official wheat propaganda while lacking qualitative voices of peasant hardship—justifying how both fit a balanced 7-source corpus.',
    },
    sourceFileNames: ['IB HISTORY 11 INTRODUCTION.pptx', 'Sample 2.pdf', 'Sample 3.pdf'],
  },
  {
    topicCode: 'CONCEPTS',
    paperType: 'Internal Assessment (2028 History IA)',
    commandTerm: 'Evaluate',
    difficulty: 'HL Extension',
    maxMarks: 12,
    questionMarkdown:
      'Explain and demonstrate how a May 2028 IA **Section 3 (Synthesis, Analysis, and Evaluation — 12 Marks)** achieves Band 10–12 when investigating a European totalitarian crisis (<=1,300 words within the 2,200-word total).',
    markscheme: {
      marking_points: [
        {
          code: 'S1',
          criterion:
            'Thesis & structural control: states a direct, conceptually framed answer to Section 1’s question immediately and structures subsections analytically rather than narratively.',
          marks: 3,
          keywords: ['conceptual thesis', 'thematic structure', 'word discipline'],
        },
        {
          code: 'E1',
          criterion:
            'Multi-perspective & primary triangulation: weaves quoted primary evidence from the curated <=7 sources directly alongside contrasting secondary schools (e.g., Intentionalist vs Structuralist, De Felice vs Mack Smith, Orthodox vs Revisionist).',
          marks: 4,
          keywords: ['triangulation', 'primary quotes', 'historiography'],
        },
        {
          code: 'E2',
          criterion:
            'Critical evaluation of Section 2 limits: explicitly recalls provenance limits identified in Section 2 while weighing counter-evidence instead of ignoring conflicting facts.',
          marks: 3,
          keywords: ['counter-evidence', 'Section 2 link', 'sustained evaluation'],
        },
        {
          code: 'C1',
          criterion:
            'Technical compliance: clean Chicago NB superscript footnotes linked to the <=7 sources without stuffing extra analytical text into footnotes to evade the 2,200-word ceiling.',
          marks: 2,
          keywords: ['Chicago NB', '2,200 words', 'no footnote padding'],
        },
      ],
      model_answer:
        'High-band Section 3 writing operates like a compressed, ultra-focused Band 14 Paper 3 argument grounded in your max-7-source corpus: opening with a calibrated thesis, cross-examining primary testimony against competing historical interpretations in every paragraph, carrying Section 2’s source caveats directly into evidentiary weighting, and resolving into a substantiated conclusion without a detached Reflection section.',
    },
    sourceFileNames: ['IB HISTORY 11 INTRODUCTION.pptx', 'Sample 2.pdf', 'Sample 3.pdf'],
  },
  {
    topicCode: 'C.1',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Analyze',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Apply the 2028 IB concept **Cause and Consequence (`C.1`)** to distinguish a *long-term structural precondition*, a *medium-term catalyst*, a *short-term trigger*, and an *unintended consequence* in either Italy (1890–1925) or Germany (1918–1933).',
    markscheme: {
      marking_points: [
        {
          code: 'C1',
          criterion:
            'Accurately categorizes all three causal tiers (e.g., Germany: Versailles/Article 48/elites -> 1929 Depression/Brüning deflation -> Papen–Hindenburg Jan 1933 intrigue; or Italy: trasformismo/dualism -> WWI/Biennio Rosso -> Victor Emmanuel III refusing martial law).',
          marks: 3,
          keywords: ['precondition', 'catalyst', 'trigger'],
        },
        {
          code: 'C2',
          criterion:
            'Identifies an unintended consequence (e.g., Papen believing he "boxed Hitler in" only to face Enabling Act & Night of Long Knives; OR Giolitti’s 1921 National Bloc destroying Liberal Party autonomy).',
          marks: 1,
          keywords: ['unintended consequence'],
        },
      ],
      model_answer:
        'Using Germany: Imperial institutional continuity and Article 48 were structural preconditions; the 1929 Wall Street Crash and 6M unemployment catalyzed mass polarization; Papen and Hindenburg’s January 1933 deal served as the immediate trigger—producing the profound unintended consequence for conservatives of being sidelined and purged in 1934.',
    },
    sourceFileNames: ['IB HISTORY 11 INTRODUCTION.pptx', 'Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'C.2',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Evaluate',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Using the 2028 concepts **Continuity and Change (`C.2`)** and **Significance (`C.4` — Counsell’s 5 Rs)**, explain why the 1929 Lateran Accords or the 1936 Soviet Family Code matters analytically.',
    markscheme: {
      marking_points: [
        {
          code: 'C1',
          criterion:
            'Demonstrates *Continuity and Change*: Lateran ended the 1870 Roman Question (major diplomatic change) while preserving Church social authority and limiting total state power (continuity); OR 1936 Family Code kept anti-capitalism (continuity) while reversing early Bolshevik gender freedom (retreat/change).',
          marks: 2,
          keywords: ['continuity and change'],
        },
        {
          code: 'S1',
          criterion:
            'Applies *Significance* criteria (Remarkable, Resulting in change, Revealing, Resonant): explains what the event *reveals* about regime limits/ideology and how deeply it altered everyday institutions.',
          marks: 2,
          keywords: ['Resulting in change', 'Revealing', 'significance'],
        },
      ],
      model_answer:
        'For the 1929 Lateran Accords: dramatically ended the 59-year Roman Question (*Resulting in change*), boosted Mussolini’s mass popularity, yet crucially **revealed** (*Revealing*) Fascism’s willingness to compromise with traditional institutions (*Continuity*) in ways Hitler or Stalin avoided.',
    },
    sourceFileNames: ['IB HISTORY 11 INTRODUCTION.pptx', 'Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'C.4',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Explain',
    difficulty: 'HL Extension',
    maxMarks: 4,
    questionMarkdown:
      'Explain why **Perspectives (`C.3`)** in IB History operates on *two distinct analytical levels*, illustrating both levels with concrete examples from interwar Europe.',
    markscheme: {
      marking_points: [
        {
          code: 'P1',
          criterion:
            'Level 1 (Contemporary actors): contrasts contrasting lived viewpoints of the same event (e.g., Northern industrialist vs Po Valley bracciante in 1921 Italy; German woman under Four-Year Plan vs Jewish family under Nuremberg Laws).',
          marks: 2,
          keywords: ['contemporary vantage points', 'lived experience'],
        },
        {
          code: 'P2',
          criterion:
            'Level 2 (Historiographical interpretations): contrasts rival scholarly frameworks interpreting identical archives (e.g., De Felice vs Mack Smith; Bracher vs Mommsen; Conquest vs Getty).',
          marks: 2,
          keywords: ['historiographical schools', 'methodology'],
        },
      ],
      model_answer:
        'First, contemporary perspectives capture how class, geography, gender, and ideology fractured lived reality (e.g., Pius XI celebrating 1929 Lateran harmony vs anti-fascist exiles). Second, historiographical perspectives trace how historians across eras (Liberal, Marxist, Structuralist, Archival Revisionist) reach conflicting conclusions from the same evidence.',
    },
    sourceFileNames: ['IB HISTORY 11 INTRODUCTION.pptx', 'Paper 3 MarkScheme 2028 Extract.pdf'],
  },
  {
    topicCode: 'CONCEPTS',
    paperType: 'Paper 3 (Regional Study — Europe)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 2,
    questionMarkdown:
      'Which pairing correctly matches two European historians with their contrasting interpretations of Stalin’s USSR?',
    mcqOptions: [
      {
        label: 'A',
        text: 'Benedetto Croce (Fascist consensus) vs. Carl Friedrich (Weimar Golden Era).',
      },
      {
        label: 'B',
        text: 'Robert Conquest (Orthodox: intentional top-down totalitarian terror) vs. Sheila Fitzpatrick (Revisionist social history: rapid worker upward mobility and local chaos).',
      },
      {
        label: 'C',
        text: 'Hans Mommsen (Soviet five-year plan efficiency) vs. A.J.P. Taylor (Lateran Pacts theology).',
      },
      {
        label: 'D',
        text: 'Lucy Dawidowicz (Italian Corporatism) vs. Denis Mack Smith (Manchurian railway economics).',
      },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [
        {
          code: 'E1',
          criterion:
            'Correctly aligns Robert Conquest (Orthodox Totalitarian) with Sheila Fitzpatrick (Revisionist Social History) on Stalinism.',
          marks: 2,
          keywords: ['Conquest', 'Fitzpatrick', 'Orthodox vs Revisionist'],
        },
      ],
      model_answer:
        'B is correct: Conquest pioneered the top-down Orthodox totalitarian narrative of the Great Terror, whereas Fitzpatrick reshaped Soviet social history by emphasizing upward worker mobility (*vydvizhentsy*), social support, and bureaucratic limits.',
    },
    sourceFileNames: ['Paper 3  - Europe - Pearson 2026.pdf', 'IB 11 European Totalitarianism.pptx'],
  },

  // =========================================================================
  // P1.1 & P2.1 — PAPER 1 FOCUSED STUDIES & PAPER 2 THEMATIC ESSAYS (Q59–Q64)
  // =========================================================================
  {
    topicCode: 'P1.1',
    paperType: 'Paper 1 (Focused Study)',
    commandTerm: 'Compare and contrast',
    difficulty: 'Standard IB',
    maxMarks: 6,
    stimulusMarkdown:
      '> **Source A (Neville Chamberlain radio broadcast, 27 September 1938):** *"How horrible, fantastic, incredible it is that we should be digging trenches and trying on gas masks here because of a quarrel in a faraway country between people of whom we know nothing... I would not hesitate to pay even a third visit to Germany if I thought it would save peace."*\n\n' +
      '> **Source B (Winston Churchill speech to the House of Commons, 5 October 1938):** *"We have sustained a total and unmitigated defeat... All is over. Silent, mournful, abandoned, broken, Czechoslovakia recedes into the darkness... Do not suppose that this is the end. This is only the beginning of the reckoning."*',
    questionMarkdown:
      'Compare and contrast the views expressed in Source A and Source B regarding the Munich Agreement and British security in autumn 1938.',
    markscheme: {
      marking_points: [
        {
          code: 'S1',
          criterion:
            'Points of similarity (explicitly linked): both acknowledge the gravity of the Czechoslovak crisis, the high domestic anxiety/prospect of European war in autumn 1938, and direct British political entanglement in the outcome.',
          marks: 2,
          keywords: ['shared urgency', 'war prospect', 'British stake'],
        },
        {
          code: 'D1',
          criterion:
            'Points of contrast (running point-by-point): Source A minimizes Czechoslovakia as a peripheral "faraway" quarrel worth sacrificing to avert war via diplomacy, whereas Source B treats Munich as an existential strategic defeat foreshadowing further aggression ("beginning of the reckoning").',
          marks: 4,
          keywords: ['appeasement vs deterrence', 'faraway quarrel vs defeat', 'point-by-point'],
        },
      ],
      model_answer:
        'Running comparison: Both Chamberlain (Source A) and Churchill (Source B) recognize that Europe stood on the brink of war in September–October 1938. However, whereas Chamberlain portrays Czechoslovakia as a distant, non-vital dispute justifying repeated concessions to save peace, Churchill condemns Munich as a catastrophic strategic capitulation that guarantees a harsher future confrontation.',
      examiner_notes:
        'Penalize detached summaries of Source A followed by Source B without explicit comparative connectives.',
    },
    sourceFileNames: ['IB HISTORY 11 INTRODUCTION.pptx', 'Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P1.1',
    paperType: 'Paper 1 (Focused Study)',
    commandTerm: 'Assess',
    difficulty: 'HL Extension',
    maxMarks: 6,
    stimulusMarkdown:
      '> **Source C:** *1936 Nazi Kraft durch Freude (KdF) propaganda poster depicting smiling factory workers boarding a Baltic cruise ship.*\n' +
      '> **Source D:** *Confidential Gestapo morale report from Bavaria (1937) noting persistent worker complaints over rising butter prices, 60-hour shifts, and skepticism toward DAF wage freezes.*',
    questionMarkdown:
      'Applying **May 2028 Paper 1** source criticism (provenance, audience, perspective, and limits—without mechanical OPCVL labels), assess how Sources C and D together aid a historian studying German workers under Nazi rule.',
    markscheme: {
      marking_points: [
        {
          code: 'V1',
          criterion:
            'Evaluates Source C’s provenance & perspective: created by Goebbels/DAF for public consumption, valuable for documenting *Volksgemeinschaft* aspiration and leisure incentives, yet severely limited by concealing coercion and wage freezes.',
          marks: 3,
          keywords: ['propaganda audience', 'Volksgemeinschaft', 'selective omission'],
        },
        {
          code: 'V2',
          criterion:
            'Evaluates Source D’s provenance & complementarity: internal secret police surveillance intended for regime eyes makes D candid on material discontent, though police informants may filter or over-emphasize localized grumbling—demonstrating why pairing propaganda and internal reports reveals consent–coercion complexity.',
          marks: 3,
          keywords: ['internal intelligence', 'material discontent', 'triangulation'],
        },
      ],
      model_answer:
        'Rather than isolating Source C as "biased," assess how its public promotional purpose accurately reveals the regime’s welfare imagery while masking austerity. Pairing it with Source D—confidential Bavarian police reporting unconstrained by public propaganda rules—uncovers wage and food grievances, even as historians remain mindful of regional police sampling limits.',
    },
    sourceFileNames: ['IB HISTORY 11 INTRODUCTION.pptx', 'Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P1.1',
    paperType: 'Paper 1 (Focused Study)',
    commandTerm: 'Evaluate',
    difficulty: 'HL Extension',
    maxMarks: 9,
    stimulusMarkdown:
      '> **Sources A & B (1938):** Chamberlain defending peace vs. Churchill warning of impending reckoning.\n' +
      '> **Source E (1937 British Chiefs of Staff Memorandum, secret):** *Warns Britain cannot simultaneously fight Germany, Italy, and Japan until RAF radar, Hurricane/Spitfire production, and Imperial forces mature in 1939–1940.*',
    questionMarkdown:
      'Using Sources A, B, and E together with your own contextual knowledge, evaluate the claim that British foreign policy in 1938 rested primarily on short-sighted moral cowardice.',
    markscheme: {
      marking_points: [
        {
          code: 'S1',
          criterion:
            'Effective synthesis of all three sources: cites Churchill (B) on moral/strategic surrender at Munich, balanced against Chamberlain’s anti-war public mandate (A) and Chiefs of Staff military unreadiness (E).',
          marks: 4,
          keywords: ['all sources used', 'Chiefs of Staff', 'Churchill vs Chamberlain'],
        },
        {
          code: 'K1',
          criterion:
            'Contextual own knowledge integrated smoothly: 1937 Inskip Report, Great Depression defense cuts, public terror of strategic bombing (*"the bomber will always get through"*), loss of 35 Czech Skoda divisions & alienation of USSR ahead of Aug 1939 Pact.',
          marks: 3,
          keywords: ['Inskip Report', 'Skoda works', 'USSR alienation'],
        },
        {
          code: 'E1',
          criterion:
            'Substantiated judgment directly answering the prompt: rejects simplistic "moral cowardice" in favor of structural imperial overstretch coupled with tragic diplomatic misjudgment of Hitler’s insatiability.',
          marks: 2,
          keywords: ['imperial overstretch', 'substantiated judgment'],
        },
      ],
      model_answer:
        'A top-band Paper 1 synthesis rejects reducing Munich solely to personal cowardice: Source E corroborates contextual Inskip defense reports proving Britain feared simultaneous Japanese, Italian, and German conflict until radar and Spitfire production matured in 1939. Yet as Source B warns—and Hitler’s March 1939 seizure of Prague proved—buying time forfeited Czech armaments and convinced Moscow Britain would not resist fascism.',
    },
    sourceFileNames: ['IB HISTORY 11 INTRODUCTION.pptx', 'Paper 3  - Europe - Pearson 2026.pdf'],
  },
  {
    topicCode: 'P2.1',
    paperType: 'Paper 2 (Thematic Essay)',
    commandTerm: 'Compare and contrast',
    difficulty: 'Standard IB',
    maxMarks: 15,
    questionMarkdown:
      'Compare and contrast the conditions and methods by which authoritarian rulers rose to power in **two** states, each chosen from a **different IB region** (e.g., Hitler’s Germany in Europe and Mao Zedong’s China in Asia & Oceania).',
    markscheme: {
      marking_points: [
        {
          code: 'R1',
          criterion:
            'Strict compliance with Paper 2 two-region mandate (e.g., Europe: Hitler/Mussolini + Asia & Oceania: Mao Zedong OR Americas: Castro/Perón).',
          marks: 2,
          keywords: ['two distinct regions', 'cross-regional'],
        },
        {
          code: 'C1',
          criterion:
            'Structural conditions compared: both exploited weak post-imperial political orders, foreign humiliation (Versailles vs Century of Humiliation/Japanese invasion), and economic devastation (1929 Depression vs hyperinflation/GMD corruption).',
          marks: 4,
          keywords: ['Versailles vs Japanese invasion', 'economic collapse', 'elite failure'],
        },
        {
          code: 'C2',
          criterion:
            'Methods contrasted point-by-point: Hitler’s urban electoral *Legalitätstaktik* and backstairs Chancellery deal (1933) inside an intact industrial bureaucracy vs. Mao’s rural peasant guerrilla insurgency, Long March/Yan’an base, and Civil War military victory (1949).',
          marks: 5,
          keywords: ['Legalitatstaktik', 'guerrilla war', 'peasant mobilization', '1949 victory'],
        },
        {
          code: 'E1',
          criterion:
            'Evaluates contrasting perspectives: Kershaw/Bracher on elite collusion + Depression in Germany vs. Edgar Snow / Jonathan Spence / Jung Chang on Nationalist exhaustion and CCP land-reform appeal in China.',
          marks: 4,
          keywords: ['Kershaw', 'Spence', 'perspectives'],
        },
      ],
      model_answer:
        'Organizes the essay strictly by analytical themes across two IB regions (Europe + Asia): Structural Crisis, Social Coalition, Ideology & Propaganda, and Mechanism of Power Transfer—showing how acute national crisis enabled both leaders while urban coalition manipulation (Berlin 1933) differed fundamentally from rural revolutionary warfare (China 1927–1949).',
      examiner_notes:
        'Pairing Hitler and Mussolini violates the "each chosen from a different region" Paper 2 rule!',
    },
    sourceFileNames: ['IB HISTORY 11 INTRODUCTION.pptx', 'Paper 3 MarkScheme 2028 Extract.pdf'],
  },
  {
    topicCode: 'P2.1',
    paperType: 'Paper 2 (Thematic Essay)',
    commandTerm: 'Evaluate',
    difficulty: 'HL Extension',
    maxMarks: 15,
    questionMarkdown:
      'Evaluate the extent to which economic policies consolidated domestic authority in **two** authoritarian states, each chosen from a **different IB region** (e.g., Stalin’s USSR and Mao’s China or Castro’s Cuba).',
    markscheme: {
      marking_points: [
        {
          code: 'R1',
          criterion:
            'Valid two-region comparative selection (e.g., Europe: Stalin’s USSR + Asia & Oceania: Mao’s PRC; or Americas: Castro’s Cuba) analyzed thematically across every paragraph.',
          marks: 2,
          keywords: ['two distinct regions', 'thematic balance'],
        },
        {
          code: 'K1',
          criterion:
            'Soviet analysis: Five-Year Plans & collectivization smashed kulak independence, tied urban workers to state promotions/rations, and built industrial defense power despite the 1932–1933 famine.',
          marks: 4,
          keywords: ['Five-Year Plans', 'collectivization', 'state dependency'],
        },
        {
          code: 'K2',
          criterion:
            'Non-European comparison (e.g., Mao’s PRC): 1950 Land Reform & 1st Five-Year Plan won early peasant/urban loyalty, whereas the Great Leap Forward (1958–1961) triggered catastrophic famine weakening Mao’s Politburo grip until the Cultural Revolution.',
          marks: 5,
          keywords: ['Land Reform', 'Great Leap Forward', 'famine contrast'],
        },
        {
          code: 'E1',
          criterion:
            'Evaluates contrasting historical interpretations (Fitzpatrick/Nove on Stalinist survival & state control vs MacFarquhar/Dikötter on Great Leap collapse destabilizing Mao’s economic authority).',
          marks: 4,
          keywords: ['Nove', 'Fitzpatrick', 'MacFarquhar', 'evaluation'],
        },
      ],
      model_answer:
        'Demonstrates a sharp cross-regional contrast: whereas Stalin’s coercive collectivization and Five-Year Plans locked peasants onto kolkhozy and permanently entrenched Gosplan personal dictatorship through 1941, Mao’s Great Leap Forward famine initially discredited his economic leadership inside the CCP, pushing him toward mass ideological mobilization in the 1966 Cultural Revolution.',
    },
    sourceFileNames: ['IB HISTORY 11 INTRODUCTION.pptx', 'Paper 3 MarkScheme 2028 Extract.pdf'],
  },
  {
    topicCode: 'P2.1',
    paperType: 'Paper 2 (Thematic Essay)',
    commandTerm: 'Identify',
    difficulty: 'Standard IB',
    maxMarks: 2,
    questionMarkdown:
      'Which combination would **fail** the mandatory cross-regional Paper 2 instruction requiring examples *"from two different regions"*?',
    mcqOptions: [
      {
        label: 'A',
        text: 'Mussolini’s Italy and Mao Zedong’s China.',
      },
      {
        label: 'B',
        text: 'Stalin’s Soviet Union and Fidel Castro’s Cuba.',
      },
      {
        label: 'C',
        text: 'Hitler’s Germany and Mussolini’s Italy.',
      },
      {
        label: 'D',
        text: 'Hitler’s Germany and Juan Perón’s Argentina.',
      },
    ],
    correctMcqOption: 'C',
    markscheme: {
      marking_points: [
        {
          code: 'R1',
          criterion:
            'Correctly flags Hitler’s Germany and Mussolini’s Italy as both belonging to the single IB region of Europe.',
          marks: 2,
          keywords: ['same region', 'Europe only'],
        },
      ],
      model_answer:
        'C is invalid for cross-regional Paper 2 essays because Germany and Italy (and the USSR) all fall within the IB Europe region. Pair one European leader with Asia & Oceania (Mao), the Americas (Castro/Perón), or Africa & Middle East (Nasser).',
    },
    sourceFileNames: ['IB HISTORY 11 INTRODUCTION.pptx'],
  },
];

