import type {
  ConceptComparisonMatrixSpec,
  InteractiveFunctionGraphSpec,
  LabeledExplorerSpec,
  StepMechanismSpec,
  TimelineCausalitySpec,
} from '@/types/diagrams';

// ---------------------------------------------------------------------------
// Math AA SL Interactive Function Graphs (evaluated strictly via safe-eval.ts)
// ---------------------------------------------------------------------------

export const MATH_CH2_FUNCTIONS_INVERSE_GRAPH: InteractiveFunctionGraphSpec = {
  type: 'function_graph',
  id: 'math-ch2-functions-inverse-graph',
  title: 'Functions & Inverse Reflection Across y = x (Oxford Ch. 2)',
  caption:
    'Adjust vertex-shifted half-parabola f(x) = a*(x − h)^2 + k or linear/reciprocal behavior, then toggle "Reflect y = x (f⁻¹)" to verify Domain(f) = Range(f⁻¹).',
  xMin: -6,
  xMax: 8,
  yMin: -6,
  yMax: 8,
  xLabel: 'x (Domain of f)',
  yLabel: 'y (Range of f)',
  sliders: [
    { key: 'a', label: 'Scale a', min: 0.25, max: 2, step: 0.25, defaultValue: 0.5 },
    { key: 'h', label: 'Horizontal Shift h', min: -3, max: 3, step: 0.5, defaultValue: 1 },
    { key: 'k', label: 'Vertical Shift k', min: -3, max: 3, step: 0.5, defaultValue: -1 },
  ],
  curves: [
    {
      id: 'f-quad',
      label: 'f(x) = a(x-h)² + k (x ≥ h one-to-one branch)',
      expression: 'a*(x-h)^2+k',
    },
    {
      id: 'f-lin',
      label: 'g(x) = a*x + k',
      expression: 'a*x+k',
      dashed: true,
    },
  ],
  inverseReflection: {
    enabled: true,
    defaultVisible: true,
    sourceCurveId: 'f-quad',
    label: 'f⁻¹ reflection across y = x',
  },
  readouts: [
    {
      label: 'Vertex / Restriction x ≥ h',
      expression: 'h',
      format: 'coordinate',
      yExpression: 'k',
    },
    {
      label: 'Slope at x = h + 1',
      expression: '2*a',
      format: 'number',
    },
  ],
};

export const MATH_CH3_QUADRATICS_DISCRIMINANT_GRAPH: InteractiveFunctionGraphSpec = {
  type: 'function_graph',
  id: 'math-ch3-quadratics-discriminant-graph',
  title: 'Quadratics & Discriminant Parameter k Explorer (Ch. 3 + Oct 13 Drill)',
  caption:
    'Explores f(x) = a*x² + b*x + c and models the classroom Oct 13 discriminant condition Δ = b² − 4ac dynamically. Beware the k = 0 degenerate-line trap!',
  xMin: -8,
  xMax: 8,
  yMin: -8,
  yMax: 10,
  xLabel: 'x',
  yLabel: 'f(x)',
  sliders: [
    { key: 'a', label: 'Leading Coefficient a (or k)', min: -2, max: 3, step: 0.25, defaultValue: 1 },
    { key: 'b', label: 'Linear Coefficient b', min: -6, max: 6, step: 0.5, defaultValue: -4 },
    { key: 'c', label: 'Constant c (y-intercept)', min: -6, max: 6, step: 0.5, defaultValue: 1 },
  ],
  curves: [
    {
      id: 'quad-std',
      label: 'f(x) = ax² + bx + c',
      expression: 'a*x^2+b*x+c',
    },
  ],
  tangentX: 2,
  readouts: [
    { label: 'Discriminant Δ = b²−4ac', expression: 'b^2-4*a*c', format: 'number' },
    { label: 'Vertex (-b/2a, f)', expression: '-b/(2*a)', format: 'coordinate', yExpression: 'c-(b^2)/(4*a)' },
  ],
};

export const MATH_CH3_TRANSFORMATIONS_GRAPH: InteractiveFunctionGraphSpec = {
  type: 'function_graph',
  id: 'math-ch3-transformations-graph',
  title: 'Function Transformations g(x) = a·f(b(x − h)) + k (Sec 3.3)',
  caption:
    'Compare parent base parabola x² against g(x) = a*(b*(x − h))² + k. Remember IB Sec 3.3 order: inside x-changes act INVERSELY (horizontal stretch 1/b, shift +h).',
  xMin: -8,
  xMax: 8,
  yMin: -6,
  yMax: 10,
  xLabel: 'x',
  yLabel: 'y',
  sliders: [
    { key: 'a', label: 'Vertical Stretch a', min: -2, max: 3, step: 0.5, defaultValue: -1 },
    { key: 'b', label: 'Horizontal Dilate b (factor 1/b)', min: 0.5, max: 2, step: 0.5, defaultValue: 1 },
    { key: 'h', label: 'Horizontal Shift h (+right)', min: -4, max: 4, step: 0.5, defaultValue: 2 },
    { key: 'k', label: 'Vertical Shift k (+up)', min: -4, max: 4, step: 0.5, defaultValue: 3 },
  ],
  curves: [
    { id: 'transformed', label: 'g(x) = a*(b*(x-h))^2 + k', expression: 'a*(b*(x-h))^2+k' },
    { id: 'parent', label: 'Parent f(x) = x^2', expression: 'x^2', dashed: true },
  ],
  readouts: [
    { label: 'Transformed Vertex (h, k)', expression: 'h', format: 'coordinate', yExpression: 'k' },
    { label: 'Horizontal Scale Factor (1/b)', expression: '1/b', format: 'number' },
  ],
};

export const MATH_CH4_RATIONAL_ASYMPTOTES_GRAPH: InteractiveFunctionGraphSpec = {
  type: 'function_graph',
  id: 'math-ch4-rational-asymptotes-graph',
  title: 'Rational Functions & Dynamic Asymptotes Explorer (Oxford Ch. 4)',
  caption:
    'Explore f(x) = (a*x + b)/(c*x + d) with live AST-evaluated Vertical Asymptote x = −d/c and Horizontal Asymptote y = a/c (fixing Ch 4 Ex 1 VA x = 3 & Ex 2 sign-flip!).',
  xMin: -8,
  xMax: 10,
  yMin: -8,
  yMax: 8,
  xLabel: 'x',
  yLabel: 'y',
  sliders: [
    { key: 'a', label: 'Numerator x coeff a', min: -3, max: 4, step: 0.5, defaultValue: 2 },
    { key: 'b', label: 'Numerator const b', min: -6, max: 6, step: 0.5, defaultValue: -5 },
    { key: 'c', label: 'Denominator x coeff c', min: 1, max: 2, step: 0.5, defaultValue: 1 },
    { key: 'd', label: 'Denominator const d', min: -6, max: 4, step: 0.5, defaultValue: -3 },
  ],
  curves: [
    { id: 'rat-main', label: 'f(x) = (ax+b)/(cx+d)', expression: '(a*x+b)/(c*x+d)' },
  ],
  asymptotes: [
    { kind: 'vertical', expression: '-d/c' },
    { kind: 'horizontal', expression: 'a/c' },
  ],
  inverseReflection: {
    enabled: true,
    defaultVisible: false,
    sourceCurveId: 'rat-main',
    label: 'Reflect y = x (f⁻¹)',
  },
  readouts: [
    { label: 'Vertical Asymptote x = -d/c', expression: '-d/c', format: 'number' },
    { label: 'Horizontal Asymptote y = a/c', expression: 'a/c', format: 'number' },
    { label: 'x-intercept (-b/a)', expression: '-b/a', format: 'number' },
    { label: 'y-intercept (b/d)', expression: 'b/d', format: 'number' },
  ],
};

// ---------------------------------------------------------------------------
// History HL (May 2028 IA & Paper 3 Active Focus — Pearson 2026 Aligned)
// ---------------------------------------------------------------------------

export const HIST_INTRO_CONCEPTS_EXPLORER: LabeledExplorerSpec = {
  type: 'labeled_explorer',
  id: 'hist-intro-philosophy-concepts',
  title: 'May 2028 IB History Framework: 4 Concepts, 4 Skills & Assessment Focus',
  caption:
    'Built from IB HISTORY 11 INTRODUCTION.pptx & Pearson 2026 pp. 6–12. OPCVL is replaced in 2028 by integrated Perspectives & Source Context.',
  viewBox: '0 0 800 440',
  palette: 'scientific',
  shapes: [
    { kind: 'rect', x: 40, y: 44, width: 344, height: 162, rx: 18, fill: '#E3E7F1', stroke: '#4A5D8F', strokeWidth: 2, hotspotId: 'cause', focusTags: ['cause'] },
    { kind: 'text', x: 212, y: 82, text: '1. Cause & Consequence', fontSize: 13.5, fontWeight: 700, textAnchor: 'middle', fill: '#2E3A59' },
    { kind: 'text', x: 212, y: 112, text: 'Structural conditions vs catalyst triggers', fontSize: 11, textAnchor: 'middle', fill: '#2E3A59' },

    { kind: 'rect', x: 416, y: 44, width: 344, height: 162, rx: 18, fill: '#E2ECE2', stroke: '#386641', strokeWidth: 2, hotspotId: 'continuity', focusTags: ['continuity'] },
    { kind: 'text', x: 588, y: 82, text: '2. Continuity & Change', fontSize: 13.5, fontWeight: 700, textAnchor: 'middle', fill: '#234229' },
    { kind: 'text', x: 588, y: 112, text: 'Rupture vs persistence across regimes', fontSize: 11, textAnchor: 'middle', fill: '#234229' },

    { kind: 'rect', x: 40, y: 232, width: 344, height: 162, rx: 18, fill: '#F2DFD3', stroke: '#A8583B', strokeWidth: 2, hotspotId: 'perspectives', focusTags: ['perspectives'] },
    { kind: 'text', x: 212, y: 270, text: '3. Perspectives (Actors & Historians)', fontSize: 13.5, fontWeight: 700, textAnchor: 'middle', fill: '#5E271C' },
    { kind: 'text', x: 212, y: 300, text: 'Evaluating historical arguments & bias', fontSize: 11, textAnchor: 'middle', fill: '#5E271C' },

    { kind: 'rect', x: 416, y: 232, width: 344, height: 162, rx: 18, fill: '#EFE4C8', stroke: '#8A6C26', strokeWidth: 2, hotspotId: 'significance', focusTags: ['significance'] },
    { kind: 'text', x: 588, y: 270, text: '4. Significance (Depth & Duration)', fontSize: 13.5, fontWeight: 700, textAnchor: 'middle', fill: '#5E4713' },
    { kind: 'text', x: 588, y: 300, text: 'Turning points & comparative weight', fontSize: 11, textAnchor: 'middle', fill: '#5E4713' },
  ],
  hotspots: [
    { id: 'cause', x: 212, y: 148, label: 'Cause and Consequence', category: 'May 2028 Concept 1', examKeyword: 'multi-causality (long-term structural vs immediate triggers)', detailMarkdown: 'Explains *why* events happened by weighing structural preconditions (e.g., *trasformismo*, Versailles, Great Depression) against triggers (Matteotti, Reichstag Fire) and unintended outcomes.' },
    { id: 'continuity', x: 588, y: 148, label: 'Continuity and Change', category: 'May 2028 Concept 2', examKeyword: 'degree of transformation vs institutional survival', detailMarkdown: 'Probes how revolutionary a regime truly was: e.g., did Mussolini establish genuine totalitarian transformation or compromise with the King, Army, industrialists, and Vatican (1929 Lateran)?' },
    { id: 'perspectives', x: 212, y: 336, label: 'Perspectives & Historiography', category: 'May 2028 Concept 3', examKeyword: '2028 Paper 3 tests evaluating arguments across perspectives', detailMarkdown: 'Pearson 2026 p. 8: "For Paper 3, the assessment is focused on evaluating arguments." Contrast primary actor perspectives and competing schools (e.g. De Felice vs Gentile vs Mack Smith).' },
    { id: 'significance', x: 588, y: 336, label: 'Significance & Historical Skills', category: 'May 2028 Concept 4', examKeyword: '4 Skills: Using sources · Making connections · Evaluating arguments · Asking questions', detailMarkdown: 'Measures impact by scale, duration, and consequence while integrating the 4 Pearson 2026 Historical Skills across IA (24m) and Paper 3 (30m).' },
  ],
};

export const HIST_P3_ITALY_TIMELINE: TimelineCausalitySpec = {
  type: 'timeline_causality',
  id: 'hist-p3-italy-timeline',
  title: 'Paper 3 Europe: Liberal Italy to Mussolini’s Dictatorship (1890–1940)',
  caption:
    'Aligned to Pearson 2026 Ch. 1 Inquiry Topics 1–2 & IB 11 Italy 1890–1939. Filter by regime phase OR by May 2028 Historical Concepts.',
  categories: ['Liberal Crisis', 'Rise to Power', 'Domestic Dictatorship', 'Foreign Policy'],
  concepts: ['Cause & Consequence', 'Continuity & Change', 'Perspectives', 'Significance'],
  events: [
    {
      id: 'trasformismo-mezzogiorno',
      dateLabel: '1890–1914',
      title: 'Liberal State Fragility: Trasformismo, Mezzogiorno & Adowa (1896)',
      category: 'Liberal Crisis',
      conceptTags: ['Cause & Consequence', 'Continuity & Change'],
      summaryMarkdown:
        'Post-1861 Risorgimento Italy suffered a deep industrial North vs agrarian **Mezzogiorno (South)** divide and exclusion of the Catholic Church (`Non Expedit`). Centrist coalitions under Depretis, Crispi (humiliated at **Adowa 1896**), and **Giovanni Giolitti** relied on **trasformismo** bargaining rather than stable programmatic parties, despite 1911–12 Libya expansion and universal male suffrage.',
      significanceMarkdown:
        'Exposed chronic parliamentary corruption and weak legitimacy long before Mussolini — fueling June 1914 *Red Week* unrest and radical nationalist contempt for liberal democracy.',
      historiographyNotes: [
        { historian: 'Benedetto Croce', school: 'Liberal-Idealist', argument: 'Saw Italian Fascism as an external "parenthesis" or moral illness caused by WWI interrupting progressive Giolittian liberalism.' },
        { historian: 'Denis Mack Smith', school: 'Critical Revisionist', argument: 'Argued structural flaws of trasformismo, elite manipulation, and imperial vanity in Liberal Italy directly paved the road to Mussolini.' },
      ],
    },
    {
      id: 'mutilated-victory-fiume',
      dateLabel: '1915–1920',
      title: 'WWI, "Mutilated Victory", Fiume & Biennio Rosso',
      category: 'Rise to Power',
      conceptTags: ['Cause & Consequence', 'Significance'],
      summaryMarkdown:
        'The secret 1915 **Treaty of London** split neutralists from interventionists. Though victorious in 1918 (600,000+ dead, soaring inflation), Italy was denied Dalmatia and Fiume at Paris — branded *vittoria mutilata* (*Mutilated Victory*). **Gabriele D’Annunzio’s 1919 seizure of Fiume** pioneered Fascist blackshirt choreography, while strikes and factory occupations of **Biennio Rosso (1919–20)** terrified industrialists and *agrari* landowners.',
      significanceMarkdown:
        'Created both the nationalist mythology and the antisocialist fear that drove middle-class elites and conservative liberals to bankroll Mussolini’s *squadre d’azione*.',
    },
    {
      id: 'march-on-rome-acerbo',
      dateLabel: '1922–1923',
      title: 'March on Rome (Oct 1922) & Acerbo Electoral Law (1923)',
      category: 'Rise to Power',
      conceptTags: ['Cause & Consequence', 'Continuity & Change'],
      summaryMarkdown:
        'Uniting paramilitary squads into the PNF (1921), Mussolini leveraged King Victor Emmanuel III’s refusal to sign Prime Minister Facta’s martial law decree in **October 1922**, winning legal appointment as PM without defeating the army. The **1923 Acerbo Law** awarded two-thirds of Chamber seats to the plurality list above 25%, delivering 65% of seats to Mussolini’s *Lista Nazionale* in April 1924.',
      significanceMarkdown:
        'Demonstrates how Mussolini combined extra-legal *squadristi* intimidation with legal constitutional co-optation by timid conservative elites.',
    },
    {
      id: 'matteotti-leggi',
      dateLabel: '1924–1926',
      title: 'Matteotti Crisis, Aventine Secession & Leggi Fascistissime',
      category: 'Domestic Dictatorship',
      conceptTags: ['Continuity & Change', 'Significance'],
      summaryMarkdown:
        'After Socialist deputy **Giacomo Matteotti** exposed 1924 election fraud and was murdered by Fascist thugs, opposition deputies walked out (**Aventine Secession**). On **3 January 1925**, Mussolini accepted "political, moral, and historical responsibility," unleashing the **1925–26 Leggi Fascistissime**: banning opposition parties and free unions, censoring press, abolishing elected mayors (*podestà*), founding **OVRA** secret police, and empowering **rule by decree**.',
      primarySourceQuote:
        '"If Fascism has been a criminal association, I am the chief of this criminal association." — Mussolini to the Chamber of Deputies, 3 January 1925.',
      significanceMarkdown:
        'Marking the true transition from conservative coalition government to single-party dictatorship.',
      historiographyNotes: [
        { historian: 'Emilio Gentile', school: 'Sacralization / Totalitarianism', argument: 'Argues Italian Fascism constructed a genuine "political religion" mobilizing mass youth (ONB/GIL) and leisure (OND) toward a totalitarian experiment.' },
        { historian: 'Renzo De Felice', school: 'Consensus School', argument: 'Contends Mussolini achieved broad middle-class *consensus* (1929–35) while distinguishing authoritarian Italian compromise from Nazi biological extermination.' },
      ],
    },
    {
      id: 'lateran-corporations',
      dateLabel: '1927–1934',
      title: 'Lateran Accords (1929), Battles & Corporate State / IRI',
      category: 'Domestic Dictatorship',
      conceptTags: ['Continuity & Change', 'Perspectives'],
      summaryMarkdown:
        'Economic nationalism launched propaganda **Battles for Grain, Lira (Quota 90), Land, and Births**, culminating in 22 Corporations and **IRI (1933)** rescuing Depression-hit banks. Crucially, the **1929 Lateran Accords** ended the 59-year rift with Pope Pius XI, recognizing Vatican sovereignty and Catholicism as state religion.',
      significanceMarkdown:
        'Lateran Accords won huge domestic prestige while revealing clear limits to Italian totalitarianism: Monarchy, Church, and big business retained institutional autonomy.',
    },
    {
      id: 'abyssinia-pact-of-steel',
      dateLabel: '1935–1940',
      title: 'Abyssinia (1935–36), Racial Laws (1938) & Pact of Steel',
      category: 'Foreign Policy',
      conceptTags: ['Cause & Consequence', 'Significance'],
      summaryMarkdown:
        'Following early Brenner Pass deterrence of Hitler (1934) and the **Stresa Front (1935)**, Mussolini invaded **Abyssinia (Oct 1935)** — shattering League of Nations credibility when Britain/France passed weak sanctions and leaked the **Hoare–Laval Pact**. Isolated from London/Paris, Italy intervened in Spain (1936), signed the **Rome–Berlin Axis**, enacted **1938 antisemitic Racial Laws**, seized Albania, signed the **Pact of Steel (May 1939)**, and entered WWII in June 1940.',
      significanceMarkdown:
        'Pivoted Italy from an opportunistic revisionist balancer into subordinate Axis alignment — exposing military and economic hollowness that shattered domestic consensus.',
    },
  ],
};

export const HIST_P3_TOTALITARIANISM_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'hist-p3-totalitarianism-matrix',
  title: 'Paper 3 Europe Ch. 1: Comparative European Totalitarianism (1918–1941)',
  caption:
    'Aligned directly to Pearson 2026 Ch. 1 (Mussolini’s Italy, Hitler’s Germany & Stalin’s USSR) across every IB Paper 3 Inquiry Topic.',
  columns: ['Mussolini’s Italy (1918–40)', 'Hitler’s Germany (1918–39)', 'Stalin’s USSR (to 1941)'],
  rows: [
    {
      criterion: 'Structural Rise & Preconditions',
      cells: [
        'Mutilated Victory, Biennio Rosso fear of socialism, weak trasformismo cabinets, King refuses martial law (Oct 1922).',
        'Weimar Art. 48 & PR instability, Versailles grievance, 1929 Wall Street Crash mass unemployment, elite Hindenburg/Papen miscalculation (Jan 1933).',
        '1917 Bolshevik Civil War centralization, Ban on Factions (1921), NEP vs Great Turn crisis; General Secretary patronage control over Party apparatus.',
      ],
      ibExamTip: 'Compare elite backroom invitations (Italy 1922, Germany 1933) against Stalin’s bureaucratic party machine maneuvering.',
    },
    {
      criterion: 'Legal & Coercive Consolidation',
      cells: [
        'Acerbo Law (1923) → Matteotti crisis (1924) → Jan 1925 speech → Leggi Fascistissime (1925–26) banning parties/unions.',
        'Feb 1933 Reichstag Fire Decree → March 1933 Enabling Act → Gleichschaltung → June 1934 Night of the Long Knives → Army Oath (Aug 1934).',
        'Defeat of Trotsky/Left & Bukharin/Right → Ryutin Platform (1932) → Kirov murder (Dec 1934) → 1936–38 Moscow Show Trials & Great Terror.',
      ],
      ibExamTip: 'Paper 3 band 13–15 essays specify exact legal decrees & turning points rather than saying "became a dictator."',
    },
    {
      criterion: 'Terror, Policing & Repression',
      cells: [
        'OVRA secret police & Special Tribunal; ~30 political executions pre-1940, confino internal exile — noticeably milder than Germany/USSR.',
        'Himmler’s SS, Gestapo, SD & early Dachau concentration camps targeting communists, social democrats, and racial/marginalized minorities.',
        'NKVD (*Yezhovshchina*), Gulag forced-labor empire, Order 00447 mass arrests, military officer purge leaving Red Army weakened.',
      ],
      ibExamTip: 'Cite Hannah Arendt / Carl Friedrich or De Felice to evaluate whether Italy’s milder terror invalidates "totalitarianism."',
    },
    {
      criterion: 'Economic Transformation',
      cells: [
        'Corporate State (22 Corporations), Battle for Grain/Lira/Births, IRI (1933) state shareholding, autarky push post-1935.',
        'Schacht’s New Plan (Mefo bills, Autarky revival) → Göring’s 1936 Four-Year Plan rearmament ("Guns before Butter").',
        '1928–41 Five-Year Plans (heavy industry: Magnitogorsk) + violent Forced Collectivization (dekulakization, 1932–33 Ukraine/Kazakh famine).',
      ],
      ibExamTip: 'Pearson 2026 highlights **economic control vs living standards**: USSR transformed GDP at immense human cost; Italy’s Corporatism largely favored industrialists.',
    },
    {
      criterion: 'Propaganda, Youth & Traditional Elites',
      cells: [
        'Miniculpop, Cult of *Il Duce*, ONB/GIL youth, OND leisure; YET shared power with King Victor Emmanuel III & 1929 Vatican Lateran Accords.',
        'Goebbels RMVP, *Volksgemeinschaft*, Hitler Youth/BDM compulsory 1936, Nuremberg Rallies, 1933 Reichskonkordat followed by Confessing Church resistance.',
        'Cult of Personality ("Father of Nations"), Socialist Realism, Komsomol/Pioneers, militant state atheism & Orthodox Church suppression.',
      ],
      ibExamTip: 'Essential Paper 3 judgement: Stalin achieved deepest elimination of rival institutions; Hitler fused terror + racial state; Mussolini faced strongest monarchical/Church constraints.',
    },
  ],
};

export const HIST_IA_2028_BLUEPRINT: StepMechanismSpec = {
  type: 'step_mechanism',
  id: 'hist-ia-2028-blueprint',
  title: 'May 2028 History IA (24 Marks · 3 Sections) & Paper 3 Argument Craft',
  caption:
    'Recreated directly from Sample 1–3.pdf, Paper 3 MarkScheme 2028 Extract.pdf, Purdue OWL Chicago NB, and Pearson 2026.',
  nodes: [
    { id: 'sec1', x: 130, y: 185, label: 'Sec 1: Inquiry Q', sublabel: '6 Marks · Concept' },
    { id: 'sec2', x: 340, y: 185, label: 'Sec 2: Sources', sublabel: '6m · Persp (≤7 src)' },
    { id: 'sec3', x: 540, y: 185, label: 'Sec 3: Synthesis', sublabel: '12m · Evaluation' },
    { id: 'chicago', x: 700, y: 185, label: 'Chicago NB + ≤2,200w', sublabel: 'No Reflection!' },
  ],
  edges: [
    { id: 'h1', from: 'sec1', to: 'sec2', label: 'Justify ≤7 sources' },
    { id: 'h2', from: 'sec2', to: 'sec3', label: 'Corroborate' },
    { id: 'h3', from: 'sec3', to: 'chicago', label: 'Substantiate' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Section 1: Historical Inquiry Question (6 Marks)',
      descriptionMarkdown:
        'Formulate a tightly bounded historical inquiry question anchored in dates, actors/events, and one of the **4 May 2028 Historical Concepts** (e.g., *To what extent did X cause Y between 1922 and 1926?*). Explain the origin/rationale of the question and **justify your selection of up to 7 sources** (`Sample 1.pdf`).',
      activeNodeIds: ['sec1'],
      activeEdgeIds: [],
      metrics: [
        { label: 'Criterion A', value: '6 / 24 Marks (25%)' },
        { label: 'Source Cap', value: 'Maximum 7 Total Sources' },
        { label: 'Target Length', value: '~250–350 words' },
      ],
    },
    {
      stepNumber: 2,
      title: 'Section 2: Sources and Perspectives (6 Marks — OPCVL Removed!)',
      descriptionMarkdown:
        '**2028 Paradigm Shift:** Standalone mechanical OPCVL ("Origin, Purpose, Value, Limitation") is **replaced**. Analyze context, origin, and purpose *together* across your selected primary and scholarly sources to explain **competing perspectives** and how sources corroborate or contradict one another.',
      activeNodeIds: ['sec2'],
      activeEdgeIds: ['h1'],
      metrics: [
        { label: 'Criterion B', value: '6 / 24 Marks (25%)' },
        { label: 'Legacy Change', value: 'Old OPCVL checklist REMOVED' },
        { label: 'Target Length', value: '~500–600 words' },
      ],
    },
    {
      stepNumber: 3,
      title: 'Section 3: Synthesis and Evaluation (12 Marks — Core Weighting)',
      descriptionMarkdown:
        'Build a thematic analytical argument directly answering the inquiry question by **weighing causal evidence, evaluating diverse historiographical perspectives**, and assessing how effectively your source base resolves the question (`Sample 1–3`). Applies equally to Paper 3 (15-mark evaluative essays)!',
      activeNodeIds: ['sec3'],
      activeEdgeIds: ['h2'],
      metrics: [
        { label: 'Criterion C', value: '12 / 24 Marks (50%)' },
        { label: 'Paper 3 Parallel', value: 'Band 13–15 Balanced Argument' },
        { label: 'Target Length', value: '~1,150–1,350 words' },
      ],
    },
    {
      stepNumber: 4,
      title: 'Chicago Notes & Bibliography + No Standalone Reflection',
      descriptionMarkdown:
        '**Verify May 2028 rules:** **(1)** Total IA capped strictly at **2,200 words** (footnotes and bibliography excluded), **(2)** Standalone Section 3 Reflection from 2017/2020 guide is **REMOVED**, and **(3)** Cite every source cleanly with **Chicago Manual of Style (Notes & Bibliography)** superscript footnotes + alphabetized Bibliography (`Purdue OWL`).',
      activeNodeIds: ['chicago'],
      activeEdgeIds: ['h3'],
      metrics: [
        { label: 'Word Limit', value: '2,200 words max' },
        { label: 'Reflection?', value: 'REMOVED in May 2028' },
        { label: 'Citation Style', value: 'Chicago NB Footnotes' },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// English A: Literature HL & French B SL Diagrams
// ---------------------------------------------------------------------------

export const ENG_TFA_EVIDENCE_EXPLORER: LabeledExplorerSpec = {
  type: 'labeled_explorer',
  id: 'eng-tfa-evidence-web',
  title: 'Things Fall Apart: Classroom Evidence Boards & Literature HL Mapping',
  caption:
    'Interactive synthesis of all 3 CRHS English Lit HL classroom photo boards (Family.jpg, Food.jpg, ReligionCulture.jpg) with exact page citations + Lit HL IO rule.',
  viewBox: '0 0 800 440',
  palette: 'scientific',
  shapes: [
    { kind: 'rect', x: 40, y: 44, width: 344, height: 162, rx: 18, fill: '#F2DFD3', stroke: '#A8583B', strokeWidth: 2, hotspotId: 'tfa-family', focusTags: ['tfa-family'] },
    { kind: 'text', x: 212, y: 80, text: 'Board 1: Family & Patriarchy (Family.jpg)', fontSize: 12.5, fontWeight: 700, textAnchor: 'middle', fill: '#5E271C' },
    { kind: 'text', x: 212, y: 108, text: 'Unoka’s debt (p.4–7) → Okonkwo’s fear of weakness', fontSize: 10.5, textAnchor: 'middle', fill: '#5E271C' },
    { kind: 'text', x: 212, y: 132, text: 'Nwoye vs Ikemefuna (p.52–61) · Ezinma ("boy" p.66)', fontSize: 10.5, textAnchor: 'middle', fill: '#5E271C' },

    { kind: 'rect', x: 416, y: 44, width: 344, height: 162, rx: 18, fill: '#EFE4C8', stroke: '#8A6C26', strokeWidth: 2, hotspotId: 'tfa-food', focusTags: ['tfa-food'] },
    { kind: 'text', x: 588, y: 80, text: 'Board 2: Food, Masculinity & Hospitality (Food.jpg)', fontSize: 12.5, fontWeight: 700, textAnchor: 'middle', fill: '#5E4713' },
    { kind: 'text', x: 588, y: 108, text: 'Yam = "king of crops / manliness" (p.33, 36)', fontSize: 10.5, textAnchor: 'middle', fill: '#5E4713' },
    { kind: 'text', x: 588, y: 132, text: 'Kola nut ritual ("he who brings kola brings life" p.6)', fontSize: 10.5, textAnchor: 'middle', fill: '#5E4713' },

    { kind: 'rect', x: 40, y: 232, width: 344, height: 162, rx: 18, fill: '#E2ECE2', stroke: '#386641', strokeWidth: 2, hotspotId: 'tfa-religion', focusTags: ['tfa-religion'] },
    { kind: 'text', x: 212, y: 268, text: 'Board 3: Religion & Culture (ReligionCulture.jpg)', fontSize: 12.5, fontWeight: 700, textAnchor: 'middle', fill: '#234229' },
    { kind: 'text', x: 212, y: 296, text: 'Chi / Chukwu · Week of Peace violation (p.29–31)', fontSize: 10.5, textAnchor: 'middle', fill: '#234229' },
    { kind: 'text', x: 212, y: 320, text: 'Egwugwu masked justice (p.89–93) · Brown vs Smith', fontSize: 10.5, textAnchor: 'middle', fill: '#234229' },

    { kind: 'rect', x: 416, y: 232, width: 344, height: 162, rx: 18, fill: '#E3E7F1', stroke: '#4A5D8F', strokeWidth: 2, hotspotId: 'lit-hl-io', focusTags: ['lit-hl-io'] },
    { kind: 'text', x: 588, y: 268, text: 'English A: LITERATURE HL Distinction', fontSize: 12.5, fontWeight: 700, textAnchor: 'middle', fill: '#2E3A59' },
    { kind: 'text', x: 588, y: 296, text: 'IO = 1 English Literary Work + 1 Translated Work', fontSize: 10.5, fontWeight: 700, textAnchor: 'middle', fill: '#9E3830' },
    { kind: 'text', x: 588, y: 320, text: 'Paper 2 (25%) · HL Essay 1,200–1,500w (20%)', fontSize: 10.5, textAnchor: 'middle', fill: '#2E3A59' },
  ],
  hotspots: [
    { id: 'tfa-family', x: 212, y: 158, label: 'Family Board: Patrilineal Honor, Gender & Fear', category: 'Family.jpg Exact Quotes', examKeyword: '"ruled by one passion — to hate everything his father Unoka loved" (p.13)', detailMarkdown: '**Exact board citations (`Family.jpg`):** **Unoka** dismissed as *agbala* ("woman"/untitled, p. 13); Okonkwo beats **Ojiugo** in the Week of Peace (p. 29–31); strikes **Ikemefuna** out of fear of being thought weak (p. 61), fracturing **Nwoye**; famously wishes **Ezinma** "were a boy" (p. 66).' },
    { id: 'tfa-food', x: 588, y: 158, label: 'Food Board: Yam Economics & Kola Nut Diplomacy', category: 'Food.jpg Exact Quotes', examKeyword: '"Yam stood for manliness" (p.33) · New Yam Feast (Ch.5)', detailMarkdown: '**Exact board citations (`Food.jpg`):** Opening **kola nut + alligator pepper** ritual ("He who brings kola brings life", p. 6–7); **yam** as "the king of crops... a very exacting king" (p. 33–34) vs women’s coco-yams/cassava; **palm wine & goat stew** sealing Obierika’s daughter’s *uri* bride-price (Ch. 12).' },
    { id: 'tfa-religion', x: 212, y: 346, label: 'Religion/Culture Board: Igbo Cosmology & Colonial Rupture', category: 'ReligionCulture.jpg Citations', examKeyword: 'Chukwu / personal chi (p.27, 131) / egwugwu unmasking (Ch.22)', detailMarkdown: '**Exact board citations (`ReligionCulture.jpg`):** **Ani** earth goddess demands peace before planting; **Oracle of Agbala** & **Chielo** (Ch. 11); **Evil Forest** claims twins and rejects early missionaries — until churches survive! Dialogue (**Mr. Brown** + Akunna, Ch. 21) collapses under **Rev. James Smith** and **Enoch** unmasking an *egwugwu* (Ch. 22).' },
    { id: 'lit-hl-io', x: 588, y: 346, label: 'Literature HL IO & Assessment Guardrail', category: 'IB Exam Reality', examKeyword: 'NO non-literary texts (unlike Lang & Lit!)', detailMarkdown: '**Critical IB Subject Distinction:** **English A: Literature HL** tests **literary works exclusively**! Your Individual Oral (10m presentation + 5m Q&A) MUST pair **1 work originally in English** (e.g., *Things Fall Apart*) with **1 work studied in translation** around a single Global Issue, plus a **1,200–1,500w HL Essay** on a third separate work.' },
  ],
};

export const FRENCH_TEXT_TYPES_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'fr-p1-text-types-matrix',
  title: 'French B SL Paper 1: Types de textes (Le Monde en Français Ch. 6)',
  caption:
    'Built directly from Chapitre 6 (pp. 330–364) of Abrioux, Chrétien & Fayaud (Cambridge 2018). Selecting the exact text type & register governs Criterion C!',
  columns: ['Public / Audience & Registre', 'Éléments structurels obligatoires', 'Formules clés & Pièges IB'],
  rows: [
    {
      criterion: 'Article / Éditorial (1A / 8A)',
      cells: ['Public large ou lecteurs d’un journal · Registre courant à soutenu.', 'Titre accrocheur + chapeau (lead) + intertitres + nom de l’auteur/chroniqueur.', 'Ne jamais écrire « Cher lecteur » comme dans une lettre; l’éditorial défend la position du journal (« nous »).'],
      ibExamTip: 'Cite facts briefly in lead, then analyze causes/consequences across subheaded sections.',
    },
    {
      criterion: 'Blog / Journal intime (2A / 11A)',
      cells: ['Blog: lecteurs en ligne (tutoiement/vous) · Journal: personnel/intime (« Cher journal », passé composé).', 'Blog: titre, date/heure, pseudo, appel aux commentaires. Journal: date du jour, salut intime, bilan émotionnel.', 'Trap: a blog invites public reader interaction at the end; a diary (*journal intime*) does NOT!'],
      ibExamTip: 'Use vivid subjective connectors (« Franchement », « Ce qui m’a marqué… », subjonctif d’émotion).',
    },
    {
      criterion: 'Courriel / Lettre officielle (4A / 13A)',
      cells: ['Courriel amical (« tu », salut décontracté) OU Lettre officielle (« vous » strict, registre soutenu).', 'Objet, lieu + date (officielle), formule d’appel (« Monsieur le Directeur, »), paragraphes clairs, formule de politesse.', 'Lettre officielle MUST end cleanly: « Veuillez agréer, Madame/Monsieur, l’expression de mes salutations distinguées. »'],
      ibExamTip: 'Mismatching tu/vous across a formal email or letter immediately caps Criterion C!',
    },
    {
      criterion: 'Discours / Conférence (6A)',
      cells: ['Auditoire en direct (camarades, assemblée) · « Vous », questions rhétoriques, rythme oratoire.', 'Salutation d’ouverture (« Mesdames et Messieurs, chers camarades ») + anaphores + appel à l’action final (« Merci de votre attention »).', 'Write as *spoken persuasion*: use direct address (« Imaginez un instant… », « Agissons ensemble »).'],
      ibExamTip: 'Do NOT write a silent essay when the prompt gives a *discours*; address listeners explicitly.',
    },
    {
      criterion: 'Brochure / Guide / Tract (3A / 9A / 16A)',
      cells: ['Grand public, touristes, citoyens · Impératif présent / inf. (« Agissez ! », « Il faut que nous… »).', 'Titre fort, slogan, rubriques à puces courtes, informations pratiques (qui/quoi/où/quand) ou appel militant (tract).', 'Do not write long dense narrative paragraphs — structure scannably with clear section headers.'],
      ibExamTip: 'Tract requires urgency & mobilization; Brochure informs/persuades symmetrically.',
    },
    {
      criterion: 'Rapport / Proposition (14A / 15A)',
      cells: ['Direction, conseil scolaire, municipalité · Ton objectif, analytique, registre soutenu (« Il convient de… »).', 'À / De / Objet / Date · Introduction du constat · Analyse organisée · Recommandations concrètes.', 'Use passive/impersonal constructions (« On constate que… », « Il est indispensable que + subjonctif »).'],
      ibExamTip: '250–400 mots SL exact word window — balance concise headings with rich idiomatic French!',
    },
  ],
};

export const FRENCH_THEMES_IO_EXPLORER: StepMechanismSpec = {
  type: 'step_mechanism',
  id: 'fr-themes-io-explorer',
  title: 'French B SL: 5 Thèmes prescrits & Protocole de l’Oral individuel (IO)',
  caption:
    'Recreated from plan du cours IB 11e 2026.pdf (Mme MacQuarrie) & Le Monde en Français (Cambridge 2018 TOC Units 1–5).',
  nodes: [
    { id: 'prep', x: 120, y: 185, label: '1. Prép (15 min)', sublabel: 'Choisir 1 / 2 images' },
    { id: 'part1', x: 310, y: 120, label: '2. Partie 1 (3–4m)', sublabel: 'Image + Francophonie' },
    { id: 'part2', x: 500, y: 120, label: '3. Partie 2 (4–5m)', sublabel: 'Suivi sur le thème' },
    { id: 'part3', x: 670, y: 240, label: '4. Partie 3 (5–6m)', sublabel: 'Conversation générale' },
  ],
  edges: [
    { id: 'f1', from: 'prep', to: 'part1', label: 'Max 10 notes' },
    { id: 'f2', from: 'part1', to: 'part2', label: 'Relance' },
    { id: 'f3', from: 'part2', to: 'part3', label: 'Autre thème' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Préparation supervisée (15 minutes) — Stimulus visuel',
      descriptionMarkdown:
        'Choisissez **1 des 2 stimuli visuels** liés aux **5 thèmes du cours** (*Le Monde en Français*): **1. Identités** (`Je suis, tu es`, `Vivre autrement`), **2. Expériences** (`Voyages`, `Migrer`), **3. Ingéniosité humaine** (`Science & technologie`, `Arts`, `Médias`), **4. Organisation sociale** (`Études/emploi`, `L’ordre public`), **5. Partage de la planète** (`Environnement`, `Droits`, `Éthique`). Prenez brièvement **max 10 notes**.',
      activeNodeIds: ['prep'],
      activeEdgeIds: [],
      metrics: [
        { label: 'Durée prép', value: '15 minutes' },
        { label: 'Pondération IO', value: '25% note finale SL' },
        { label: 'Notes permises', value: 'Court plan (≤10 pts)' },
      ],
    },
    {
      stepNumber: 2,
      title: 'Partie 1 : Présentation du stimulus (3–4 minutes sans interruption)',
      descriptionMarkdown:
        'Décrivez brièvement l’image (*au premier plan, à l’arrière-plan*), identifiez explicitement le **thème prescrit**, et surtout faites le **lien culturel avec la francophonie** (*Pourquoi cette image reflète-t-elle un enjeu dans le monde francophone — ex. la laïcité, l’environnement au Québec/Acadie, la diversité culturelle ?*).',
      activeNodeIds: ['part1'],
      activeEdgeIds: ['f1'],
      metrics: [
        { label: 'Temps', value: '3–4 minutes' },
        { label: 'Piège #1', value: 'Trop décrire sans analyser' },
        { label: 'Obligatoire', value: 'Lien culture francophone' },
      ],
    },
    {
      stepNumber: 3,
      title: 'Partie 2 : Discussion de suivi (4–5 minutes)',
      descriptionMarkdown:
        'L’enseignante (Mme MacQuarrie) pose des questions approfondies sur les perspectives évoquées par le stimulus. Justifiez vos opinions avec des **expressions nuancées** (*« Bien que + subjonctif »*, *« En revanche »*, *« Il convient de souligner »*) et des exemples concrets.',
      activeNodeIds: ['part2'],
      activeEdgeIds: ['f2'],
      metrics: [
        { label: 'Temps', value: '4–5 minutes' },
        { label: 'Critère B2', value: 'Interaction & pertinence' },
      ],
    },
    {
      stepNumber: 4,
      title: 'Partie 3 : Conversation générale sur un AUTRE thème (5–6 minutes)',
      descriptionMarkdown:
        'Transition spontanée vers au moins **un autre des 5 thèmes** étudiés (*Partage de la planète*, *Organisation sociale*, *Identités*, etc.). Utilisez le conditionnel (*« On devrait »*), le subjonctif et les temps variés (*passé composé, imparfait, futur simple*) naturellement.',
      activeNodeIds: ['part3'],
      activeEdgeIds: ['f3'],
      metrics: [
        { label: 'Temps', value: '5–6 minutes (Total ~15m)' },
        { label: 'Objectif', value: 'Spontanéité & fluidité' },
      ],
    },
  ],
};
