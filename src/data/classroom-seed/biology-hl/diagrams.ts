import type {
  ConceptComparisonMatrixSpec,
  LabeledExplorerSpec,
  PlayableDiagramSpec,
  ScientificSimulationSpec,
  StepMechanismSpec,
  WorkedExampleSpec,
} from '@/types/diagrams';
import {
  CELL_ULTRASTRUCTURE_LAB,
  DNA_NUCLEOSOME_EXPLORER,
  ENHANCED_COMPARTMENT_EXPLORER,
  ENHANCED_WATER_EXPLORER,
  MACROMOLECULES_EXPLORER,
  MICROSCOPE_EXPLORER,
  ORIGIN_APPARATUS_EXPLORER,
  PROTEIN_STRUCTURE_EXPLORER,
} from '../enhanced-diagrams';

type DiagramHotspot = LabeledExplorerSpec['hotspots'][number];
type DiagramShape = LabeledExplorerSpec['shapes'][number];
type DiagramView = NonNullable<LabeledExplorerSpec['views']>[number];
type StepNode = StepMechanismSpec['nodes'][number];
type StepEdge = StepMechanismSpec['edges'][number];
type StepFrame = StepMechanismSpec['steps'][number];
type StepMetric = StepFrame['metrics'][number];
type MatrixRow = ConceptComparisonMatrixSpec['rows'][number];
type WorkedStep = WorkedExampleSpec['steps'][number];

function hs(
  id: string,
  label: string,
  x: number,
  y: number,
  category: string,
  examKeyword: string,
  detailMarkdown: string
): DiagramHotspot {
  return { id, label, x, y, category, examKeyword, detailMarkdown };
}

function plateBg(title: string, subtitle: string): DiagramShape[] {
  return [
    { kind: 'rect', x: 0, y: 0, width: 800, height: 440, rx: 18, fill: '#0b1220' },
    { kind: 'line', x1: 0, y1: 110, x2: 800, y2: 110, stroke: '#1e293b', strokeWidth: 1 },
    { kind: 'line', x1: 0, y1: 220, x2: 800, y2: 220, stroke: '#1e293b', strokeWidth: 1 },
    { kind: 'line', x1: 0, y1: 330, x2: 800, y2: 330, stroke: '#1e293b', strokeWidth: 1 },
    { kind: 'line', x1: 200, y1: 0, x2: 200, y2: 440, stroke: '#1e293b', strokeWidth: 1 },
    { kind: 'line', x1: 400, y1: 0, x2: 400, y2: 440, stroke: '#1e293b', strokeWidth: 1 },
    { kind: 'line', x1: 600, y1: 0, x2: 600, y2: 440, stroke: '#1e293b', strokeWidth: 1 },
    { kind: 'text', x: 24, y: 34, text: title, fontSize: 16, fontWeight: '700', fill: '#f8fafc', textAnchor: 'start' },
    { kind: 'text', x: 24, y: 54, text: subtitle, fontSize: 12, fontWeight: '500', fill: '#94a3b8', textAnchor: 'start' },
  ];
}

function makeView(
  id: string,
  label: string,
  subtitle: string,
  title: string,
  bodyShapes: DiagramShape[],
  hotspots: DiagramHotspot[]
): DiagramView {
  return {
    id,
    label,
    subtitle,
    shapes: [...plateBg(title, subtitle), ...bodyShapes],
    hotspots,
  };
}

function n(id: string, label: string, x: number, y: number, sublabel?: string): StepNode {
  return { id, label, x, y, sublabel };
}

function e(id: string, from: string, to: string, label?: string): StepEdge {
  return { id, from, to, label };
}

function sf(
  stepNumber: number,
  title: string,
  descriptionMarkdown: string,
  activeNodeIds: string[],
  activeEdgeIds: string[],
  metrics: StepMetric[]
): StepFrame {
  return { stepNumber, title, descriptionMarkdown, activeNodeIds, activeEdgeIds, metrics };
}

function row(criterion: string, cells: string[], ibExamTip?: string): MatrixRow {
  return { criterion, cells, ...(ibExamTip ? { ibExamTip } : {}) };
}

function wstep(
  stepNumber: number,
  title: string,
  workingMarkdown: string,
  rationale: string,
  formulaLatex?: string,
  markCode?: string
): WorkedStep {
  return { stepNumber, title, workingMarkdown, rationale, formulaLatex, markCode };
}

// ============================================================================
// THEME A DIAGRAMS (Guides 1–7 -> 21 diagrams)
// ============================================================================

export const BIO_V3_A_COMMAND_TERMS_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'bio-v3-a-command-terms-matrix',
  title: 'IB Biology Command Terms (AO1–AO3) & Markscheme Architecture',
  caption:
    'Map every IB Biology command term directly to its assessment objective, expected response granularity, and high-frequency markscheme trap.',
  columns: ['Command Term (AO)', 'Cognitive Operation', 'Expected Response Architecture', 'Examiner Trap to Avoid'],
  rows: [
    row(
      'State / Identify / Name (AO1)',
      [
        'Precision recall without justification',
        'Give one exact biological term, value with unit, or named structure.',
        'Do not write bare A/T/C/G letters—BioK 2.6 requires full base names (Adenine, Thymine, Cytosine, Guanine).',
      ],
      '1 mark = 1 concise factual unit.'
    ),
    row(
      'Draw / Label / Annotate (AO1/AO2)',
      [
        'Spatial biological representation',
        'Draw: crisp pencil/ink with ruler; Label: pointer lines touching structures; Annotate: labels + brief functional notes.',
        'Drawings with floating pointer lines, sketchy double lines, or missing 80S/70S labels lose marks.',
      ],
      'Check if Annotate demands short notes rather than bare nouns.'
    ),
    row(
      'Outline / Describe (AO2)',
      [
        'Sequential summary or visible trend report',
        'Outline: brief sequential summary; Describe: state trends, turning points, and numerical data ranges with units.',
        'In graph-based Describe items, omitting actual axis values and units costs the quantitative mark.',
      ],
      'Never insert causation into a pure Describe prompt unless Explain follows.'
    ),
    row(
      'Distinguish / Compare and Contrast (AO2/AO3)',
      [
        'Point-by-point paired feature analysis',
        'Compare: similarities; Contrast: differences; Compare and contrast: BOTH paired similarities AND differences.',
        'Writing one block on X and a separate block on Y without explicit "whereas" pairings fails.',
      ],
      'Pair every comparative sentence with "whereas" or "both".'
    ),
    row(
      'Explain / Discuss (AO3)',
      [
        'Mechanistic causation or balanced evaluation',
        'Explain: cause -> molecular mechanism -> biological outcome; Discuss: balanced evidence for and against.',
        'Restating "temperature increases rate" without kinetic energy, collision frequency, or H-bond disruption scores zero.',
      ],
      'Match number of causal links to mark allocation.'
    ),
    row(
      'Suggest / Evaluate / Deduce (AO3)',
      [
        'Novel synthesis or hypothesis testing',
        'Suggest: apply known mechanism to unfamiliar organism; Evaluate: weigh strengths, limitations, and confounding errors; Deduce: extract strict conclusion from DBQ data.',
        'Generic "human error" never earns Evaluation marks—name specific systematic errors and direction of bias.',
      ],
      'Anchor every claim in data values or named experimental controls.'
    ),
  ],
};

export const BIO_V3_A_IA_WORKFLOW_STEPS: StepMechanismSpec = {
  type: 'step_mechanism',
  id: 'bio-v3-a-ia-workflow-steps',
  title: 'May 2028 IB Biology IA Pipeline (24 Marks · 4 × 6-Mark Criteria)',
  caption:
    'Step through the reformed Class of 2028 Internal Assessment workflow: 3,000 words max, 20% of final HL grade, and equal 6-mark weighting across four criteria.',
  palette: 'scientific',
  nodes: [
    n('rq', '1. Research Design (6)', 130, 110, 'Focused RQ · >=5 IV x >=5 reps'),
    n('pilot', 'Pilot Trial & Sensors', 370, 95, 'Range calibration & safety check'),
    n('da', '2. Data Analysis (6)', 640, 110, 'Uncertainties · SD/SE · Inferential test'),
    n('conc', '3. Conclusion (6)', 600, 300, 'Stats-backed RQ + Literature fit'),
    n('eval', '4. Evaluation (6)', 210, 300, 'Directional systematic errors & fixes'),
  ],
  edges: [
    e('e1', 'rq', 'pilot', 'Pre-test'),
    e('e2', 'pilot', 'da', 'Raw + Processed Data'),
    e('e3', 'da', 'conc', 'Evidence Synthesis'),
    e('e4', 'conc', 'eval', 'Error & Improvement'),
    e('e5', 'eval', 'rq', 'Iterative Refinement'),
  ],
  steps: [
    sf(
      1,
      'Research Design (Max 6 Marks · Reformed May 2028 Rubric)',
      'Formulate a quantitative Research Question stating binomial organism name, independent variable (at least 5 intervals), and dependent variable. Justify controlled variables and ethical animal/environmental care (Allott p.796 goldfish example: >=5 replicates per density, non-harmful observation).',
      ['rq', 'pilot'],
      ['e1'],
      [
        { label: 'Max Score', value: '6 / 24 marks (25%)' },
        { label: 'Report Cap', value: '3,000 words strict' },
        { label: 'Design Matrix', value: '>= 5 IV levels x >= 5 reps' },
      ]
    ),
    sf(
      2,
      'Data Analysis & Uncertainty Propagation (Max 6 Marks)',
      'Record qualitative observations alongside quantitative raw data carrying instrument uncertainty (e.g., ±0.1 s, ±0.01 g, ±0.5 °C). Compute means, standard deviation (SD), and run an inferential test (t-test, ANOVA, Pearson/Spearman, or Chi-squared) matching variable structure.',
      ['pilot', 'da'],
      ['e2'],
      [
        { label: 'Max Score', value: '6 / 24 marks (25%)' },
        { label: 'Error Bars', value: 'Specify SD vs SE vs 95% CI' },
        { label: 'Significance', value: 'α = 0.05 threshold' },
      ]
    ),
    sf(
      3,
      'Literature-Anchored Conclusion (Max 6 Marks)',
      'Answer the Research Question directly by citing processed summary means, R² values, and p-values or t-statistics, then compare trend direction and magnitude against Allott & Mindorff mechanisms or published studies.',
      ['da', 'conc'],
      ['e3'],
      [
        { label: 'Max Score', value: '6 / 24 marks (25%)' },
        { label: 'Verb Rule', value: '"Supports", never "proves"' },
        { label: 'Scope', value: 'Quote processed values + uncertainties' },
      ]
    ),
    sf(
      4,
      'Specific Evaluation & Realistic Extensions (Max 6 Marks)',
      'Diagnose concrete systematic biases (e.g., water warming raising poikilothermic goldfish metabolism over 30 min, dissolved O2 depletion confounding density) rather than vague "human error", specifying realistic apparatus improvements.',
      ['conc', 'eval', 'rq'],
      ['e4', 'e5'],
      [
        { label: 'Max Score', value: '6 / 24 marks (25%)' },
        { label: 'Forbidden Term', value: 'Never write "human error"' },
        { label: 'Criteria Removed', value: 'Personal Engagement & 6–12 p. cap gone' },
      ]
    ),
  ],
};

export const BIO_V3_A_IA_GOLDFISH_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'bio-v3-a-ia-goldfish-worked',
  title: 'Worked IA Data Analysis: Goldfish Density & Opercular Beats (Allott p.796)',
  caption:
    'Calculate processed opercular ventilation rates, sample standard deviation, and evaluate ethical and methodological validity from the Allott IA case study.',
  sourceLabel: 'Allott & Mindorff (2023) IA Chapter p.796',
  commandTerm: 'Calculate & Evaluate',
  marks: 5,
  problemMarkdown:
    'A student investigated the effect of tank crowding (`1` vs `5` goldfish *Carassius auratus* per `10 dm³` tank) on opercular beat frequency (`beats min⁻¹`) over five `1-minute` trials at `20.0 ± 0.5 °C`. Single-fish trial counts were `[82, 85, 80, 84, 84]`, while five-fish tank individual rates were `[114, 118, 121, 116, 121]`. Calculate means, sample standard deviations, percentage rise, and evaluate dissolved-O2 confounding.',
  givenData: [
    'Control (1 fish / 10 dm³): 82, 85, 80, 84, 84 beats min⁻¹ (n = 5)',
    'High density (5 fish / 10 dm³): 114, 118, 121, 116, 121 beats min⁻¹ (n = 5)',
    'Thermometer uncertainty: ±0.5 °C; no dissolved-O2 logger active',
  ],
  steps: [
    wstep(
      1,
      'Calculate Mean Opercular Beat Frequency for Both Densities',
      'Sum the five replicate trials and divide by n = 5 so processed means retain one extra decimal place beyond integer raw counts.',
      'Mean gives central tendency across biological/temporal replicates.',
      '\\bar{x}_{1} = \\frac{82+85+80+84+84}{5} = 83.0\\text{ beats min}^{-1},\\quad \\bar{x}_{5} = \\frac{114+118+121+116+121}{5} = 118.0\\text{ beats min}^{-1}',
      'M1'
    ),
    wstep(
      2,
      'Compute Sample Standard Deviation (n - 1) for Control vs Crowded Tank',
      'Square deviations from each mean, divide by degrees of freedom (n - 1 = 4), and take the square root.',
      'Quantifies trial-to-trial variability; non-overlapping ±1 SD ranges indicate clear separation.',
      's_1 = \\sqrt{\\frac{(-1)^2+2^2+(-3)^2+1^2+1^2}{4}} = \\sqrt{4.0} = 2.00;\\quad s_5 = \\sqrt{\\frac{(-4)^2+0^2+3^2+(-2)^2+3^2}{4}} = \\sqrt{9.5} \\approx 3.08',
      'M2'
    ),
    wstep(
      3,
      'Calculate Percentage Increase & Biological Deduction',
      'Crowding increased mean ventilation rate by +42.2% (+35.0 beats min⁻¹) with non-overlapping SD intervals ([81.0, 85.0] vs [114.9, 121.1]).',
      'Higher density elevates stress/swimming activity AND accelerates shared O2 depletion.',
      '\\%\\Delta = \\frac{118.0 - 83.0}{83.0} \\times 100\\% = +42.2\\%',
      'A1'
    ),
    wstep(
      4,
      'IA Evaluation & Ethical Governance Point',
      'Non-invasive counting respects animal welfare, whereas lacking continuous dissolved-O2 probe readings confounds behavioral crowding stress with hypoxia—fix by adding an optical DO sensor and full aeration between runs.',
      'Directional systematic error identification + realistic targeted apparatus upgrade scores Evaluation Criterion 4.',
      undefined,
      'E1'
    ),
  ],
  finalAnswerMarkdown:
    'Control: **83.0 ± 2.00 beats min⁻¹**; 5-fish tank: **118.0 ± 3.08 beats min⁻¹** (**+42.2%** increase). Non-invasive video tracking keeps animal stress minimal; continuous dissolved-O2 logging separates hypoxia from behavioral crowding.',
  commonTrapMarkdown:
    'On IA Data Analysis and Paper 1B questions, clearly distinguish **SD** (spread of raw sample) from **SE = SD/√n** (precision of the mean), and NEVER label an error simply as "human error".',
};

export const BIO_V3_A11_WATER_EXPLORER: LabeledExplorerSpec = {
  ...ENHANCED_WATER_EXPLORER,
  id: 'bio-v3-a11-water-explorer',
  title: 'Water Polarity, Hydrogen Bonding & Aquatic Life Adaptations (A1.1)',
  caption:
    'Inspect tetrahedral δ-/δ+ covalent polarity and H-bonding geometry alongside emergent biological transport (xylem cohesion–adhesion, surface tension, specific heat, buoyancy).',
};

export const BIO_V3_A11_AQUATIC_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'bio-v3-a11-aquatic-matrix',
  title: 'Water vs Methane & Aquatic Organism Adaptations (Allott pp.11–13)',
  caption:
    'Contrast physical properties driven by H-bonding (water vs methane) and adaptations of the black-throated diver (Gavia arctica) vs ringed seal (Pusa hispida).',
  columns: ['Physical / Biological Metric', 'Water (H2O, Polar)', 'Methane (CH4, Non-polar)', 'Biological Significance'],
  rows: [
    row('Molar Mass & Bond Polarity', ['18.0 g mol⁻¹ · Polar O–H', '16.0 g mol⁻¹ · Non-polar C–H', 'Near-identical molecular mass isolates H-bonding as the causal variable.']),
    row('Boiling Point (1 atm)', ['+100 °C (Liquid across biosphere)', '−161 °C (Gas at ambient T)', 'Enables liquid oceans, cytoplasmic diffusion, and xylem sap transport.']),
    row('Specific Heat Capacity', ['4.18 J g⁻¹ °C⁻¹', '2.20 J g⁻¹ °C⁻¹', 'Stabilizes aquatic habitats and core body temperatures against sudden spikes.']),
    row('Latent Heat of Vaporization', ['2,257 J g⁻¹', '760 J g⁻¹', 'Sweating and leaf transpiration remove massive thermal energy per gram evaporated.']),
    row('Density & Buoyancy (vs Air)', ['1,000 kg m⁻³ (High upthrust)', 'Air: ~1.2 kg m⁻³ (Low upthrust)', 'Ringed seal (Pusa hispida) achieves neutral buoyancy via thick lipid blubber; diver (Gavia arctica) uses denser bones to submerge.']),
    row('Thermal Conductivity & Viscosity', ['Conductivity 0.61 W m⁻¹ K⁻¹ (~24× air); ~50× more viscous', 'Low conductivity & low drag in air', 'Seals retain heat with blubber; divers trap insulating air under oiled feathers and both evolve streamlined fusiform bodies against viscous drag.']),
  ],
};

export const BIO_V3_A11_REDWOOD_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'bio-v3-a11-redwood-worked',
  title: 'Worked DBQ: Tall Trees, Xylem Tension & Maximum Canopy Height (Allott p.7)',
  caption:
    'Evaluate mesophyll water potential gradients, hydrostatic gravity limits, and foliar fog uptake in Sequoia sempervirens (>110 m canopy).',
  sourceLabel: 'Allott & Mindorff (2023) A1.1 DBQ p.7',
  commandTerm: 'Calculate & Explain',
  marks: 5,
  problemMarkdown:
    'Coastal redwoods (*Sequoia sempervirens*) reach over `110 m` tall. Moving up the trunk adds gravitational water potential drop of `−0.010 MPa m⁻¹` plus approximately `−0.65 MPa` frictional resistance through narrow xylem tracheids. Cavitation air-seeding embolisms form around `−2.0 MPa`. Calculate total apical tension at `110 m` and explain how water properties sustain survival.',
  givenData: [
    'Hydrostatic gravity gradient: −0.010 MPa m⁻¹',
    'Canopy height: 110 m',
    'Tracheid flow friction drop: −0.65 MPa',
    'Xylem cavitation threshold: −2.0 MPa',
  ],
  steps: [
    wstep(
      1,
      'Calculate Gravitational Hydrostatic Drop Across 110 m',
      'Even at zero transpiration flow rate, Earth gravity imposes a 0.010 MPa tension penalty per meter of height.',
      'Vertical column weight pulls downward continuously.',
      '\\Delta \\Psi_{\\text{grav}} = -0.010\\text{ MPa m}^{-1} \\times 110\\text{ m} = -1.10\\text{ MPa}',
      'M1'
    ),
    wstep(
      2,
      'Add Tracheid Frictional Resistance & Check Cavitation Ceiling',
      'Adding −0.65 MPa viscous drag gives −1.75 MPa total apical tension—leaving only a slim ~0.25 MPa safety margin above the −2.0 MPa cavitation limit.',
      'Explains why physical maximum tree height caps near ~120–130 m globally.',
      '\\Psi_{\\text{crown}} \\approx -1.10 - 0.65 = -1.75\\text{ MPa} \\; (> -2.0\\text{ MPa cavitation})',
      'M1+A1'
    ),
    wstep(
      3,
      'Link Cohesion–Adhesion & Coastal Fog Adaptations',
      'Hydrogen bonds create continuous cohesive water columns stabilized by adhesion to polar cellulose/lignin walls; at extreme crown height, smaller thicker-cuticle leaves reduce stomatal water loss while direct foliar fog uptake bypasses soil-to-crown drag.',
      'Connects molecular A1.1 physics to macroscopic vascular anatomy.',
      undefined,
      'E2'
    ),
  ],
  finalAnswerMarkdown:
    'Gravity requires **−1.10 MPa** and total crown tension reaches **−1.75 MPa**, dangerously near **−2.0 MPa** cavitation. Cohesion, adhesion, stunted crown leaves, and coastal fog absorption extend viable growth.',
  commonTrapMarkdown:
    'Always define cohesion (water–water H-bonds) and adhesion (water–xylem cellulose/lignin H-bonds) separately.',
};

export const BIO_V3_A12_DNA_NUCLEOSOME: LabeledExplorerSpec = {
  ...DNA_NUCLEOSOME_EXPLORER,
  id: 'bio-v3-a12-dna-nucleosome',
  title: 'Nucleic Acids: Antiparallel DNA Double Helix & HL Nucleosome Octamer (A1.2)',
  caption:
    'Explore sugar–phosphate 5\'->3\' phosphodiester backbones, purine–pyrimidine H-bonding (A=T 2 H-bonds, G≡C 3 H-bonds), and HL histone octamer + H1 packaging.',
};

export const BIO_V3_A12_HERSHEY_STEPS: StepMechanismSpec = {
  type: 'step_mechanism',
  id: 'bio-v3-a12-hershey-steps',
  title: 'Hershey–Chase (1952) ³²P / ³⁵S Experiment Proving DNA Is Genetic Material (A1.2.11 HL)',
  caption:
    'Trace how differential radioisotope labelling of T2 bacteriophage proteins vs DNA decoupled viral genetic inheritance from capsid protein ghosts.',
  palette: 'scientific',
  nodes: [
    n('label', '1. Selective ³⁵S vs ³²P Labelling', 120, 105, '³⁵S protein · ³²P DNA'),
    n('infect', '2. T2 Infection of E. coli', 385, 105, 'Adsorption & genome injection'),
    n('blend', '3. Waring Blender Shearing', 655, 105, 'Detaches extracellular capsids'),
    n('centrifuge', '4. Centrifugation Separation', 520, 295, 'Cells -> pellet · coats -> supernatant'),
    n('verdict', '5. ³²P in Pellet -> DNA Proved', 195, 295, 'Heritable phage progeny carry ³²P'),
  ],
  edges: [
    e('e1', 'label', 'infect', 'Mix with E. coli'),
    e('e2', 'infect', 'blend', 'Shear coats'),
    e('e3', 'blend', 'centrifuge', 'Spin down cells'),
    e('e4', 'centrifuge', 'verdict', 'Measure radioactivity'),
  ],
  steps: [
    sf(
      1,
      'Selective Radioactive Tagging (³⁵S vs ³²P)',
      'Grow separate T2 phage cultures with **³⁵S** (sulfur exists in methionine/cysteine capsid proteins, NEVER DNA) or **³²P** (phosphorus exists in DNA sugar–phosphate backbones, NEVER capsid protein).',
      ['label'],
      [],
      [
        { label: 'Protein Tag', value: '³⁵S (Cys / Met only)' },
        { label: 'DNA Tag', value: '³²P (Phosphate backbone)' },
      ]
    ),
    sf(
      2,
      'Adsorption & Injection into Host Bacteria',
      'Tagged T2 bacteriophages attach to *E. coli* surface receptors via tail fibres and inject genetic material across the cell envelope while leaving hollow protein shells outside.',
      ['label', 'infect'],
      ['e1'],
      [{ label: 'Host Species', value: 'Escherichia coli' }]
    ),
    sf(
      3,
      'Blender Agitation & Centrifugal Fractionation',
      'A high-speed Waring blender shears extracellular protein coats off bacterial walls without lysing bacteria; centrifugation sediments heavy bacteria into the **pellet** and lighter empty phage coats stay in the **supernatant**.',
      ['infect', 'blend', 'centrifuge'],
      ['e2', 'e3'],
      [
        { label: 'Pellet', value: 'Dense infected E. coli' },
        { label: 'Supernatant', value: 'Light empty protein capsids' },
      ]
    ),
    sf(
      4,
      'Radioactivity Assay & Genetic Deduction',
      '**³⁵S** concentrates in the discarded supernatant, whereas **³²P** concentrates inside the bacterial pellet and transfers into progeny phages—proving DNA, not protein, directs viral inheritance.',
      ['centrifuge', 'verdict'],
      ['e4'],
      [
        { label: 'Pellet Signal', value: '³²P high (DNA entered!)' },
        { label: 'Supernatant Signal', value: '³⁵S high (Protein stayed out)' },
      ]
    ),
  ],
};

export const BIO_V3_A12_DNA_RNA_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'bio-v3-a12-dna-rna-matrix',
  title: 'DNA vs RNA vs Prokaryotic/Eukaryotic Genomes (A1.2)',
  caption:
    'High-yield IB Paper 2 comparison of pentose chemistry, nitrogenous bases, strand geometry, nucleosome packaging, and Chargaff parity.',
  columns: ['Structural / Functional Criterion', 'DNA (Deoxyribonucleic Acid)', 'RNA (Ribonucleic Acid)', 'Exam Distinction'],
  rows: [
    row('Pentose Sugar (C2\')', ['Deoxyribose (2\'-H lacking oxygen)', 'Ribose (2\'-OH reactive hydroxyl)', 'Mention C2\' chemistry for higher stability of DNA vs RNA turnover.']),
    row('Nitrogenous Bases', ['Adenine, Guanine, Cytosine, Thymine', 'Adenine, Guanine, Cytosine, Uracil', 'Write FULL names (no bare A/T/C/G shortcuts—BioK 2.6 Quiz rule!).']),
    row('Strand Architecture', ['Double-stranded antiparallel helix', 'Single-stranded (folds into tRNA/rRNA stems)', 'Chargaff parity (%A = %T, %G = %C) applies ONLY to dsDNA.']),
    row('Genome Packaging', ['Linear DNA on 8-histone nucleosomes + H1 (euk); circular naked (prok)', 'Transient mRNA, stable rRNA/tRNA in cytoplasm', 'Mitochondria & chloroplasts retain bacterial-style circular naked DNA.']),
    row('Genetic Code Universality', ['64 triplet codons across nearly all domains', 'Codons read 5\' -> 3\' on mRNA', 'Supports common descent from LUCA (enabling recombinant human insulin in E. coli).']),
  ],
};

export const BIO_V3_A21_ORIGIN_EXPLORER: LabeledExplorerSpec = {
  ...ORIGIN_APPARATUS_EXPLORER,
  id: 'bio-v3-a21-origin-explorer',
  title: 'Origin of Cells: Miller–Urey Apparatus, Protocells & LUCA (A2.1 HL)',
  caption:
    'Explore Oparin–Haldane reducing prebiotic chemistry, spontaneous fatty-acid vesicles, catalytic ribozymes, and alkaline hydrothermal vent LUCA.',
};

export const BIO_V3_A21_ABIOGENESIS_STEPS: StepMechanismSpec = {
  type: 'step_mechanism',
  id: 'bio-v3-a21-abiogenesis-steps',
  title: 'Chemical Evolution to LUCA: 4-Stage Abiogenesis Sequence (A2.1 HL)',
  caption:
    'Trace the empirically grounded steps from inorganic early Earth (~4.5 Ga) to cellular reproduction at LUCA (~3.8–4.0 Ga).',
  palette: 'scientific',
  nodes: [
    n('monomers', '1. Abiotic Monomers', 110, 115, 'Miller–Urey / Vent CH4, NH3, H2'),
    n('polymers', '2. Clay Polymerization', 350, 115, 'Montmorillonite & wet–dry cycles'),
    n('vesicles', '3. Fatty-Acid Protocells', 625, 115, 'Self-assembled amphipathic bilayers'),
    n('dna', '4. RNA World -> DNA/Protein', 500, 295, 'Ribozymes yield to stable dsDNA'),
    n('luca', '5. LUCA (~3.8 Ga)', 175, 295, 'Alkaline vent chemiosmosis · 355 genes'),
  ],
  edges: [
    e('e1', 'monomers', 'polymers', 'Condensation'),
    e('e2', 'polymers', 'vesicles', 'Encapsulation'),
    e('e3', 'vesicles', 'dna', 'Natural Selection'),
    e('e4', 'dna', 'luca', 'Divergence'),
  ],
  steps: [
    sf(
      1,
      'Non-Living Synthesis of Simple Carbon Compounds',
      'Lightning sparks in reducing gas mixtures (Miller–Urey 1953) and alkaline hydrothermal vents generate abiotic amino acids, fatty acids, and nucleobase precursors without oxygen.',
      ['monomers'],
      [],
      [{ label: 'Critical Condition', value: 'Free O2 absent (reducing)' }]
    ),
    sf(
      2,
      'Polymerization on Mineral Surfaces & Tidal Wet–Dry Cycles',
      'Negatively charged montmorillonite clay lattices and evaporative geothermal cycles drive condensation joining nucleotides into short catalytic RNA oligomers.',
      ['monomers', 'polymers'],
      ['e1'],
      [{ label: 'Catalyst', value: 'Montmorillonite clay / mineral Fe-S' }]
    ),
    sf(
      3,
      'Self-Assembled Protocell Vesicles Enclose Ribozymes',
      'Amphipathic fatty acids spontaneously assemble leaky bilayers trapping self-replicating RNA catalysts (ribozymes); faster-replicating vesicles outgrow and divide first.',
      ['polymers', 'vesicles'],
      ['e2'],
      [{ label: 'Modern Ribozyme Proof', value: 'Peptidyl transferase rRNA in ribosomes' }]
    ),
    sf(
      4,
      'Takeover by Stable dsDNA & Emergence of LUCA',
      'Deoxyribose DNA (more chemically stable) took over heredity while protein enzymes took over catalysis, culminating in **LUCA** (~3.8–4.0 Ga) near H2/CO2 alkaline deep-sea vents—conserving 355 universal protein families and the universal genetic code (Pasteur\'s spontaneous-generation disproof holds only under modern oxidizing, microbe-filled conditions).',
      ['vesicles', 'dna', 'luca'],
      ['e3', 'e4'],
      [
        { label: 'Conserved Core', value: '355 LUCA gene families' },
        { label: 'Exam Caveat', value: 'LUCA ≠ very first cell' },
      ]
    ),
  ],
};

export const BIO_V3_A21_CLOCK_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'bio-v3-a21-clock-worked',
  title: 'Worked Molecular Clock & Deep-Time Biosignature Analysis (A2.1 HL)',
  caption:
    'Quantify lineage divergence from neutral sequence substitutions and cross-check against ¹³C zircon and Pilbara stromatolite evidence.',
  sourceLabel: 'Allott & Mindorff (2023) A2.1 HL Dating',
  commandTerm: 'Calculate & Discuss',
  marks: 4,
  problemMarkdown:
    'Two conserved prokaryotic clades accumulated `48` neutral base substitutions across a `2,000 bp` marker locus whose fossil-calibrated combined divergence rate is `0.008 substitutions site⁻¹ (100 Myr)⁻¹`. Calculate divergence time (`Ga`) and reconcile molecular LUCA estimates (`~3.8–4.0 Ga`) with early fossil records.',
  givenData: [
    'Observed differences = 48 / 2,000 bp',
    'Calibrated rate = 0.008 substitutions site⁻¹ per 100 Myr',
    'Earliest confirmed stromatolites ≈ 3.48 Ga; Isua / Jack Hills ¹³C depleted carbon ≈ 3.7–4.1 Ga',
  ],
  steps: [
    wstep(
      1,
      'Compute Genetic Distance K (Substitutions per Site)',
      'Divide observed substitutions by aligned base-pair length L = 2,000 bp.',
      'Normalizes raw differences to sequence length.',
      'K = \\frac{48}{2000} = 0.024\\text{ substitutions site}^{-1}',
      'M1'
    ),
    wstep(
      2,
      'Convert Distance to Divergence Age',
      'Divide genetic distance K by the combined divergence clock rate.',
      'Each 0.008 distance corresponds to 100 Myr.',
      't = \\frac{0.024}{0.008} \\times 100\\text{ Myr} = 300\\text{ Myr} = 0.30\\text{ Ga}',
      'A1'
    ),
    wstep(
      3,
      'Reconcile With Ancient Isotopic & Fossil Record',
      'Depleted ¹³C:¹²C ratios (preferential enzymatic Rubisco/RuBisCO-like carbon fixation of lighter ¹²C) appear by ~3.7–4.1 Ga and Pilbara stromatolites by ~3.48 Ga—corroborating a pre-3.8 Ga LUCA (~355 shared core genes) alongside lost extinct sister lineages.',
      'Independent geochemical + genomic convergence strengthens deep-time dating despite missing soft-bodied microfossils.',
      undefined,
      'E2'
    ),
  ],
  finalAnswerMarkdown:
    'Lineage divergence age = **300 Myr (0.30 Ga)**; LUCA dates to **~3.8–4.0 Ga**, supported independently by ¹²C-enriched biosignatures, stromatolites, and 355 conserved genes.',
  commonTrapMarkdown:
    'Never equate LUCA with "the first cell ever formed"—earlier independent origins simply left no living descendants.',
};

export const BIO_V3_A22_MICROSCOPY_SIM: ScientificSimulationSpec = {
  type: 'scientific_simulation',
  id: 'bio-v3-a22-microscopy-sim',
  title: 'Interactive Microscopy, Resolution & Scale Bar Lab (A2.2.1–A2.2.3)',
  caption:
    'Compare compound light, TEM, and SEM resolving limits across biological structures while practicing live M = I / A metric scaling.',
  simulationKind: 'microscopy_magnification',
  initialParams: {
    scope: 'light',
    specimen: 'euk_cell',
    imageMm: 48,
  },
  formulaLatex: 'M = \\frac{I}{A} \\qquad 1\\text{ mm} = 10^3\\text{ }\\mu\\text{m} = 10^6\\text{ nm}',
  examTakeaways: [
    'Visible-light diffraction caps light microscopy resolution near ~200 nm (0.2 µm), leaving 80S ribosomes (25 nm = 0.025 µm) and phospholipid bilayers (~7.5 nm) completely unresolvable.',
    'Always convert Image size (I) and Actual size (A) to identical units BEFORE calculating magnification M.',
    'Slide 25 Erratum: eukaryotic 80S ribosomes are ~0.025 µm (25 nm), NOT 20 µm!',
  ],
};

export const BIO_V3_A22_MICROSCOPE_EXPLORER: LabeledExplorerSpec = {
  ...MICROSCOPE_EXPLORER,
  id: 'bio-v3-a22-microscope-explorer',
  title: 'Compound Light, Fluorescent Confocal, TEM, SEM & Cryo-EM (A2.2)',
  caption:
    'Compare glass-lens visible light vs electromagnetic vacuum beams, fluorescent antibody tagging, freeze-fracture, and vitreous Cryo-EM.',
};

export const BIO_V3_A22_MAGNIFICATION_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'bio-v3-a22-magnification-worked',
  title: 'Worked Scale Bar, Magnification (M = I / A) & Unit Conversion Lab (A2.2)',
  caption:
    'Convert between mm, µm, and nm reliably from TEM micrographs and correct the classic ribosome scale-order mistake.',
  sourceLabel: 'Classroom A2.2 Microscope Notes (Slide 25 Erratum)',
  commandTerm: 'Calculate',
  marks: 4,
  problemMarkdown:
    'A TEM micrograph carries a `1.0 µm` scale bar measuring `24 mm` on paper. On the same print, a mitochondrion measures `60 mm` long and a nearby 80S ribosome measures `0.60 mm` wide. Calculate `(a)` micrograph magnification, `(b)` actual mitochondrial length (`µm`), and `(c)` actual 80S ribosome diameter (`nm`), proving why classroom Slide 25 `"20 µm"` is erroneous.',
  givenData: [
    'Scale bar printed length I_bar = 24 mm (= 24,000 µm)',
    'Scale bar actual size A_bar = 1.0 µm',
    'Mitochondrion I = 60 mm; 80S ribosome I = 0.60 mm',
  ],
  steps: [
    wstep(
      1,
      'Convert Scale Bar Length to µm & Solve Magnification M',
      'Convert 24 mm x 1,000 = 24,000 µm so I and A share identical µm units.',
      'Mixing mm and µm causes 1,000x calculation errors.',
      'M = \\frac{I_{\\text{bar}}}{A_{\\text{bar}}} = \\frac{24{,}000\\text{ }\\mu\\text{m}}{1.0\\text{ }\\mu\\text{m}} = 24{,}000\\times',
      'M1'
    ),
    wstep(
      2,
      'Calculate Actual Mitochondrial Length (µm)',
      'Divide printed length 60,000 µm by magnification 24,000x.',
      'Mitochondria sit consistently around 1–3 µm long.',
      'A_{\\text{mito}} = \\frac{60{,}000\\text{ }\\mu\\text{m}}{24{,}000} = 2.5\\text{ }\\mu\\text{m}',
      'A1'
    ),
    wstep(
      3,
      'Calculate Actual 80S Ribosome Diameter & Flag Slide 25 Typo',
      '0.60 mm = 600 µm -> 600 / 24,000 = 0.025 µm = 25 nm. Writing "20 µm" (Slide 25 misprint) would make one ribosome 8x wider than a mitochondrion and visible under a school light microscope!',
      'Reality check against typical biological scale hierarchy saves easy marks.',
      'A_{\\text{ribo}} = \\frac{600\\text{ }\\mu\\text{m}}{24{,}000} = 0.025\\text{ }\\mu\\text{m} = 25\\text{ nm}',
      'A1+E1'
    ),
  ],
  finalAnswerMarkdown:
    'Magnification = **24,000×**; Mitochondrion = **2.5 µm**; 80S Ribosome = **25 nm (0.025 µm)** (800–1,000× smaller than a 20 µm typo).',
  commonTrapMarkdown:
    'Memorize order-of-magnitude benchmarks: bilayer `~7–8 nm`, ribosome `20–30 nm`, virus `20–300 nm`, bacterium `1–5 µm`, mitochondrion `1–3 µm`, eukaryotic cell `10–100 µm`.',
};

export const BIO_V3_A22_CELL_ULTRASTRUCTURE_LAB: LabeledExplorerSpec = {
  ...CELL_ULTRASTRUCTURE_LAB,
  id: 'bio-v3-a22-cell-ultrastructure-lab',
  title: 'Interactive Cell Ultrastructure Lab: Animal, Plant & Prokaryote (A2.2.4–A2.2.10)',
  caption:
    'Switch between Animal Eukaryote, Plant Eukaryote, and Prokaryote schematics to inspect organelles, 80S vs 70S ribosomes, and atypical cellular exceptions.',
};

export const BIO_V3_A22_CELL_KINGDOMS_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'bio-v3-a22-cell-kingdoms-matrix',
  title: 'Prokaryote vs Animal vs Plant + Atypical Cell Theory Exceptions (A2.2)',
  caption:
    'Master unified cellular structures, kingdom-specific specializations, and classic exceptions to textbook "one cell = one nucleus".',
  columns: ['Diagnostic Feature', 'Prokaryote (Bacteria)', 'Animal Eukaryote', 'Plant Eukaryote', 'Atypical Exception / Markscheme Note'],
  rows: [
    row('Genetic Material', ['Naked circular DNA in nucleoid + plasmids', 'Linear DNA + histones inside nuclear envelope', 'Linear DNA + histones inside nuclear envelope', 'Mature mammalian RBCs anucleate; skeletal muscle multinucleate.']),
    row('Ribosomes', ['70S (~20 nm)', '80S cytosolic/rER + 70S in mitochondria', '80S cytosolic/rER + 70S in mito/chloroplasts', '70S inside organelles supports Endosymbiotic Theory.']),
    row('Cell Wall', ['Peptidoglycan (murein)', 'Absent (extracellular matrix only)', 'Cellulose microfibrils', 'Fungi use chitin; giant alga Acetabularia is 1–10 cm unicellular.']),
    row('Centrioles, Plastids & Vacuoles', ['None', 'Centrioles present; small transient vacuoles', 'No centrioles; chloroplasts + large tonoplast vacuole', 'Aseptate fungal hyphae share continuous multinucleate cytoplasm.']),
    row('Division Mechanism', ['Binary fission', 'Mitosis + contractile-ring cytokinesis', 'Mitosis + phragmoplast cell plate', 'Phloem sieve-tube elements lose nuclei yet live via companion cells.']),
  ],
};

export const BIO_V3_A22_ENDOSYMBIOSIS_STEPS: StepMechanismSpec = {
  type: 'step_mechanism',
  id: 'bio-v3-a22-endosymbiosis-steps',
  title: 'Serial Endosymbiosis Theory & 8 Lines of Evidence (A2.2.10 HL)',
  caption:
    'Step through how an ancestral anaerobic host engulfed aerobic α-proteobacteria and photosynthetic cyanobacteria to establish eukaryotic organelles.',
  palette: 'scientific',
  nodes: [
    n('host', '1. Anaerobic Host Cell', 110, 195, 'Large phagocytic pre-eukaryote'),
    n('aero', '2. Engulfs α-Proteobacterium', 330, 105, 'Aerobic respiration symbiosis'),
    n('mito', '3. Proto-Mitochondrion', 330, 295, 'Double membrane · 70S · circular DNA'),
    n('cyano', '4. Engulfs Cyanobacterium', 560, 115, 'Oxygenic photosynthesis'),
    n('euk', '5. Plant vs Animal Eukaryotes', 705, 250, 'All keep mito · plants add plastid'),
  ],
  edges: [
    e('e1', 'host', 'aero', 'Phagocytosis'),
    e('e2', 'aero', 'mito', 'Mutualism'),
    e('e3', 'mito', 'cyano', '2nd Engulfment'),
    e('e4', 'cyano', 'euk', 'Algae / Plants'),
    e('e5', 'mito', 'euk', 'Animals / Fungi'),
  ],
  steps: [
    sf(
      1,
      'Ancestral Membrane Infolding Creates Proto-Nucleus & rER',
      'Plasma membrane invagination creates an internal nuclear envelope and endomembrane compartments in a large anaerobic host limited to 2 ATP/glucose.',
      ['host'],
      [],
      [{ label: 'Host Energy Yield', value: '2 ATP / glucose (anaerobic)' }]
    ),
    sf(
      2,
      'Primary Endosymbiosis Gives Rise to Mitochondria',
      'Host engulfs an aerobic α-proteobacterium without digesting it; mutualism provides shelter/pyruvate for ~30+ aerobic ATP. Evidence: **double membranes**, **70S ribosomes**, **circular naked DNA**, **binary fission**, and susceptibility to antibacterial antibiotics.',
      ['host', 'aero', 'mito'],
      ['e1', 'e2'],
      [
        { label: 'Inner Membrane', value: 'Bacterial origin (cristae/ETC)' },
        { label: 'Outer Membrane', value: 'Host phagocytic vesicle' },
      ]
    ),
    sf(
      3,
      'Photosynthetic Cyanobacterium Engulfed in Algal Ancestor',
      'A mitochondriate descendant engulfs a photosynthetic cyanobacterium, founding red/green algae and land plants with double-membrane chloroplasts carrying 70S ribosomes and circular DNA.',
      ['mito', 'cyano'],
      ['e3'],
      [{ label: 'Order Deduction', value: 'Mitochondria evolved FIRST' }]
    ),
    sf(
      4,
      'Divergence into Modern Eukaryotic Kingdoms',
      'Because essentially all eukaryotes possess mitochondria (or mitosome remnants) while only photosynthetic lineages carry chloroplasts, mitochondria unquestionably arrived before plastids.',
      ['mito', 'cyano', 'euk'],
      ['e4', 'e5'],
      [{ label: 'Paper 2 Evidence Count', value: 'Cite >=4 structural features' }]
    ),
  ],
};

export const BIO_V3_A23_VIRUS_EXPLORER: LabeledExplorerSpec = {
  type: 'labeled_explorer',
  id: 'bio-v3-a23-virus-explorer',
  title: 'Viral Structural Diversity: Phage λ, SARS-CoV-2 & HIV-1 (A2.3 HL)',
  caption:
    'Inspect the three core Allott & Mindorff viruses (Table 1 p.85): dsDNA Bacteriophage λ, +ssRNA Coronavirus SARS-CoV-2, and diploid retrovirus HIV-1.',
  palette: 'scientific',
  viewBox: '0 0 800 440',
  shapes: [
    ...plateBg('Bacteriophage λ — Complex Polyhedral-Helical Architecture', 'A2.3.1–A2.3.3 HL · Non-enveloped dsDNA bacterial virus (Allott Table 1 p.85).'),
    { kind: 'polygon', points: '400,72 478,118 478,194 400,240 322,194 322,118', fill: '#1e1b4b', stroke: '#818cf8', strokeWidth: 4, hotspotId: 'phage-capsid' },
    { kind: 'path', d: 'M 358 135 Q 400 108 442 135 Q 375 162 435 186 Q 375 206 410 218', fill: 'none', stroke: '#38bdf8', strokeWidth: 5, hotspotId: 'phage-capsid' },
    { kind: 'rect', x: 385, y: 240, width: 30, height: 92, rx: 4, fill: '#6366f1', stroke: '#c7d2fe', strokeWidth: 2, hotspotId: 'phage-tail' },
    { kind: 'polygon', points: '365,332 435,332 415,350 385,350', fill: '#a78bfa', hotspotId: 'phage-tail' },
    { kind: 'line', x1: 385, y1: 342, x2: 290, y2: 375, stroke: '#cbd5e1', strokeWidth: 5, hotspotId: 'phage-fibres' },
    { kind: 'line', x1: 290, y1: 375, x2: 255, y2: 410, stroke: '#cbd5e1', strokeWidth: 5, hotspotId: 'phage-fibres' },
    { kind: 'line', x1: 415, y1: 342, x2: 510, y2: 375, stroke: '#cbd5e1', strokeWidth: 5, hotspotId: 'phage-fibres' },
    { kind: 'line', x1: 510, y1: 375, x2: 545, y2: 410, stroke: '#cbd5e1', strokeWidth: 5, hotspotId: 'phage-fibres' },
    { kind: 'rect', x: 36, y: 95, width: 225, height: 105, rx: 10, fill: '#0f172a', stroke: '#334155', strokeWidth: 1.5 },
    { kind: 'text', x: 52, y: 122, text: 'OBLIGATE PARASITE', fontSize: 12, fontWeight: '700', fill: '#818cf8', textAnchor: 'start' },
    { kind: 'text', x: 52, y: 144, text: '• No ribosomes or cytoplasm', fontSize: 11, fill: '#cbd5e1', textAnchor: 'start' },
    { kind: 'text', x: 52, y: 164, text: '• No autonomous ATP/enzymes', fontSize: 11, fill: '#cbd5e1', textAnchor: 'start' },
    { kind: 'text', x: 52, y: 184, text: '• Linear dsDNA (~48.5 kb)', fontSize: 11, fill: '#cbd5e1', textAnchor: 'start' },
  ],
  hotspots: [
    hs(
      'phage-capsid',
      'Icosahedral Capsid & Linear dsDNA (~48.5 kb)',
      400,
      155,
      'Capsid & Genome',
      'capsomere genetic economy',
      'Polyhedral head assembled from repeating capsomere protein subunits encloses ~48.5 kb linear dsDNA. Repeating one tiny coat-protein gene maximizes genetic economy across minuscule viral genomes.'
    ),
    hs(
      'phage-tail',
      'Hollow Tail Tube & Baseplate (No Lipid Envelope)',
      400,
      288,
      'Entry Mechanism',
      'DNA injection across bacterial wall',
      'Delivers phage DNA directly across E. coli outer membrane and peptidoglycan wall while leaving the empty protein shell outside (Hershey–Chase proof!). Note Phage λ has NO lipid envelope.'
    ),
    hs(
      'phage-fibres',
      'Host-Specific Tail Fibres (E. coli LamB)',
      290,
      375,
      'Receptor Tropism',
      'lock-and-key host specificity',
      'Recognize specific E. coli maltoporin (LamB) surface receptors; receptor specificity restricts host range tightly to specific bacterial strains.'
    ),
  ],
  views: [
    makeView(
      'sars-cov-2',
      'SARS-CoV-2 (+ssRNA)',
      'A2.3.1–A2.3.5 HL · Enveloped positive-sense ssRNA coronavirus (Allott p.85).',
      'SARS-CoV-2 Coronavirus — Enveloped +ssRNA Virion',
      [
        { kind: 'circle', cx: 380, cy: 235, r: 105, fill: '#1e293b', stroke: '#38bdf8', strokeWidth: 9, hotspotId: 'cov-env' },
        { kind: 'circle', cx: 380, cy: 112, r: 16, fill: '#f43f5e', hotspotId: 'cov-spike' },
        { kind: 'circle', cx: 492, cy: 175, r: 16, fill: '#f43f5e', hotspotId: 'cov-spike' },
        { kind: 'circle', cx: 492, cy: 295, r: 16, fill: '#f43f5e', hotspotId: 'cov-spike' },
        { kind: 'circle', cx: 380, cy: 358, r: 16, fill: '#f43f5e', hotspotId: 'cov-spike' },
        { kind: 'circle', cx: 268, cy: 175, r: 16, fill: '#f43f5e', hotspotId: 'cov-spike' },
        { kind: 'circle', cx: 268, cy: 295, r: 16, fill: '#f43f5e', hotspotId: 'cov-spike' },
        { kind: 'path', d: 'M 322 222 C 345 182, 395 182, 418 220 C 440 258, 355 292, 325 256', fill: 'none', stroke: '#fbbf24', strokeWidth: 6, hotspotId: 'cov-rna' },
        { kind: 'circle', cx: 355, cy: 198, r: 8, fill: '#a78bfa', hotspotId: 'cov-rna' },
        { kind: 'circle', cx: 416, cy: 222, r: 8, fill: '#a78bfa', hotspotId: 'cov-rna' },
        { kind: 'rect', x: 540, y: 120, width: 225, height: 150, rx: 12, fill: '#0f172a', stroke: '#334155', strokeWidth: 1.5 },
        { kind: 'text', x: 556, y: 150, text: 'Spike (S) -> Human ACE2', fontSize: 12, fontWeight: '700', fill: '#fda4af', textAnchor: 'start' },
        { kind: 'text', x: 556, y: 180, text: '+ssRNA acts directly as mRNA', fontSize: 11, fill: '#fde68a', textAnchor: 'start' },
        { kind: 'text', x: 556, y: 204, text: 'on host 80S ribosomes!', fontSize: 11, fill: '#cbd5e1', textAnchor: 'start' },
        { kind: 'text', x: 556, y: 236, text: 'Soap disrupts host envelope', fontSize: 11, fill: '#7dd3fc', textAnchor: 'start' },
      ],
      [
        hs('cov-spike', 'Spike (S) Glycoprotein & ACE2 Entry', 380, 112, 'Tropism', 'ACE2 receptor binding', 'Trimeric surface spikes bind ACE2 receptors on airway Type II pneumocytes; mutations in the spike receptor-binding domain produce immune-evading variants.'),
        hs('cov-env', 'Host-Derived Phospholipid Envelope', 278, 235, 'Envelope', 'soap susceptibility', 'Stolen from host ER/Golgi membranes during budding; detergents (soap) and 70% alcohol dissolve this lipid envelope cleanly.'),
        hs('cov-rna', 'Positive-Sense +ssRNA & Nucleocapsid (~30 kb)', 378, 228, 'Genome', 'direct translation + RdRp', 'Coated by helical N proteins; enters host cytoplasm and translates directly as mRNA on host 80S ribosomes to build viral RNA-dependent RNA polymerase (RdRp)—zero reverse transcriptase needed.'),
      ]
    ),
    makeView(
      'hiv-1',
      'HIV-1 Retrovirus',
      'A2.3.5 HL · Enveloped diploid +ssRNA lentivirus carrying reverse transcriptase.',
      'HIV-1 Retrovirus — Conical Capsid, Reverse Transcriptase & gp120',
      [
        { kind: 'circle', cx: 380, cy: 232, r: 108, fill: '#1e293b', stroke: '#f59e0b', strokeWidth: 9, hotspotId: 'hiv-gp' },
        { kind: 'polygon', points: '345,166 415,166 396,304 364,304', fill: '#312e81', stroke: '#a78bfa', strokeWidth: 3, hotspotId: 'hiv-core' },
        { kind: 'path', d: 'M 364 195 Q 380 220 368 245 Q 358 270 372 290', fill: 'none', stroke: '#34d399', strokeWidth: 4, hotspotId: 'hiv-core' },
        { kind: 'path', d: 'M 396 195 Q 380 220 392 245 Q 402 270 388 290', fill: 'none', stroke: '#34d399', strokeWidth: 4, hotspotId: 'hiv-core' },
        { kind: 'circle', cx: 380, cy: 224, r: 12, fill: '#ec4899', hotspotId: 'hiv-rt' },
        { kind: 'circle', cx: 380, cy: 264, r: 10, fill: '#38bdf8', hotspotId: 'hiv-core' },
        { kind: 'circle', cx: 380, cy: 112, r: 14, fill: '#ef4444', hotspotId: 'hiv-gp' },
        { kind: 'circle', cx: 488, cy: 185, r: 14, fill: '#ef4444', hotspotId: 'hiv-gp' },
        { kind: 'circle', cx: 272, cy: 185, r: 14, fill: '#ef4444', hotspotId: 'hiv-gp' },
        { kind: 'rect', x: 540, y: 120, width: 230, height: 155, rx: 12, fill: '#0f172a', stroke: '#334155', strokeWidth: 1.5 },
        { kind: 'text', x: 556, y: 150, text: 'gp120/gp41 -> CD4+ Helper T', fontSize: 12, fontWeight: '700', fill: '#fca5a5', textAnchor: 'start' },
        { kind: 'text', x: 556, y: 180, text: '2x identical +ssRNA strands', fontSize: 11, fill: '#6ee7b7', textAnchor: 'start' },
        { kind: 'text', x: 556, y: 206, text: 'Packaged Reverse Transcriptase', fontSize: 11, fill: '#f9a8d4', textAnchor: 'start' },
        { kind: 'text', x: 556, y: 232, text: 'Integrase -> latent provirus', fontSize: 11, fill: '#7dd3fc', textAnchor: 'start' },
      ],
      [
        hs('hiv-gp', 'gp120 / gp41 Spikes -> CD4+ & CCR5/CXCR4', 380, 112, 'Cell Tropism', 'T-helper cell depletion', 'Binds CD4 and CCR5/CXCR4 co-receptors specifically on helper T lymphocytes, triggering envelope fusion and gradual adaptive immunodeficiency (AIDS).'),
        hs('hiv-rt', 'Packaged Reverse Transcriptase (RNA -> cDNA)', 380, 224, 'Enzyme', 'RNA-dependent DNA polymerase', 'Must be carried INSIDE the virion because host cells lack reverse transcriptase. Lacks proofreading, generating rapid intra-patient HIV mutation and drug escape unless combination ART is used.'),
        hs('hiv-core', 'Conical Capsid, Diploid RNA & Integrase', 380, 264, 'Integration', 'provirus persistence', 'Houses two identical +ssRNA molecules alongside integrase (inserts dsDNA provirus permanently into host chromosomes) and protease.'),
      ]
    ),
  ],
};

export const BIO_V3_A23_PHAGE_CYCLES_STEPS: StepMechanismSpec = {
  type: 'step_mechanism',
  id: 'bio-v3-a23-phage-cycles-steps',
  title: 'Bacteriophage λ Lytic vs Lysogenic Cycles (A2.3.4 HL)',
  caption:
    'Trace how temperate bacteriophage λ either lyses E. coli immediately (lytic) or integrates silently as a heritable prophage (lysogenic).',
  palette: 'scientific',
  nodes: [
    n('adsorb', '1. Adsorption & Injection', 120, 195, 'dsDNA enters & circularizes'),
    n('decision', '2. CI vs Cro Switch', 325, 195, 'Host physiological stress sensor'),
    n('lysogenic', '3A. Lysogenic Prophage', 540, 95, 'Integrates passively in chromosome'),
    n('lytic', '3B. Lytic Biosynthesis', 540, 295, 'Host 70S ribosomes make capsids'),
    n('burst', '4. Lysozyme Host Lysis', 715, 295, 'Releases ~100–200 progeny'),
  ],
  edges: [
    e('e1', 'adsorb', 'decision', 'Circular dsDNA'),
    e('e2', 'decision', 'lysogenic', 'Healthy host'),
    e('e3', 'lysogenic', 'lytic', 'UV / starvation induction'),
    e('e4', 'decision', 'lytic', 'Damaged host'),
    e('e5', 'lytic', 'burst', 'Assembly & lysis'),
  ],
  steps: [
    sf(
      1,
      'Attachment & Genome Circularization',
      'Tail fibres bind *E. coli* LamB proteins and inject 48.5 kb linear dsDNA; host DNA ligase seals sticky *cos* ends into a circular phage chromosome.',
      ['adsorb'],
      [],
      [{ label: 'Capsid Fate', value: 'Stays extracellular' }]
    ),
    sf(
      2,
      'Lysogenic Integration as Dormant Prophage',
      'In nutrient-rich, unstressed bacteria, viral **CI repressor** silences lytic genes and phage integrase inserts viral DNA into the bacterial chromosome—copying silently across binary fissions without harming the host.',
      ['adsorb', 'decision', 'lysogenic'],
      ['e1', 'e2'],
      [
        { label: 'Host Survival', value: 'Intact & dividing' },
        { label: 'New Virions', value: 'Zero produced yet' },
      ]
    ),
    sf(
      3,
      'Stress Induction & Excision into Lytic Takeover',
      'UV exposure or nutrient starvation triggers host DNA-damage protease RecA to cleave CI repressor; the prophage excises cleanly and hijacks bacterial RNA polymerase and 70S ribosomes.',
      ['lysogenic', 'decision', 'lytic'],
      ['e3', 'e4'],
      [{ label: 'Switch Trigger', value: 'Host RecA cleaves CI' }]
    ),
    sf(
      4,
      'Self-Assembly & Peptidoglycan Wall Lysis',
      'Capsomeres, tails, and packaged dsDNA self-assemble; phage holins and **lysozyme** rupture the cell wall, bursting ~100–200 infectious phages outward.',
      ['lytic', 'burst'],
      ['e5'],
      [{ label: 'Contrast HIV/COVID', value: 'Budding preserves host temporarily' }]
    ),
  ],
};

export const BIO_V3_A23_VIRUS_COMPARISON: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'bio-v3-a23-virus-comparison',
  title: 'Allott Table 1 Virus Comparison + Evolutionary Origin Hypotheses (A2.3 HL)',
  caption:
    'Synthesize viral morphology, host range, replication strategies, and why progressive vs regressive vs virus-first origins imply polyphyletic ancestry.',
  columns: ['Trait / Criterion', 'Bacteriophage λ', 'SARS-CoV-2 (Coronavirus)', 'HIV-1 (Retrovirus)'],
  rows: [
    row('Genetic Material', ['Linear dsDNA (~48.5 kb)', 'Positive-sense +ssRNA (~30 kb)', 'Two identical +ssRNA copies (diploid retrovirus)']),
    row('Capsid & Envelope', ['Non-enveloped icosahedral head + helical tail', 'Enveloped spherical + helical nucleocapsid', 'Enveloped spherical + conical capsid']),
    row('Host & Entry', ['E. coli · DNA injection across wall', 'Human ACE2+ respiratory/epithelial · fusion/endocytosis', 'Human CD4+ T-helper cells via gp120 + CCR5']),
    row('Key Enzymes / Cycle', ['Host RNAP + optional lysogenic prophage', 'Viral RdRp translated directly on 80S ribosomes', 'Packaged Reverse Transcriptase + Integrase (provirus)']),
    row('Rapid Evolution Driver', ['Horizontal gene exchange & excision', 'RdRp mutation + Spike antigenic drift/recombination', 'Reverse transcriptase lack of proofreading (~10⁻⁴/bp) + high turnover'], 'Cite progressive (escaped transposons), regressive (reduced intracellular parasites), and virus-first origins.'),
  ],
};

// ============================================================================
// THEME B DIAGRAMS (Guides 8–12 -> 15 diagrams)
// ============================================================================

export const BIO_V3_B11_MACROMOLECULES_EXPLORER: LabeledExplorerSpec = {
  ...MACROMOLECULES_EXPLORER,
  id: 'bio-v3-b11-macromolecules-explorer',
  title: 'Carbohydrate Rings, Glycosidic Branches & Cis/Trans Fatty Acids (B1.1)',
  caption:
    'Inspect α- vs β-D-glucose rings, glycogen branching, triglyceride esterification, phospholipid bilayers, and cis vs trans unsaturated fatty-acid geometry.',
};

export const BIO_V3_B11_POLYSACCHARIDES_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'bio-v3-b11-polysaccharides-matrix',
  title: 'Polysaccharides & Glycoprotein Matrix (Allott B1.1.4–B1.1.6 & B1.1.11)',
  caption:
    'Distinguish α-glucose storage polymers from β-glucose cellulose and membrane glycoprotein cell–cell recognition.',
  columns: ['Polymer / Complex', 'Monomer & Bond(s)', '3D Architecture & Solubility', 'Primary Biological Role'],
  rows: [
    row('Amylose (Plant Starch)', ['α-D-Glucose · α(1->4) only', 'Unbranched compact helix; insoluble', 'Slow-release plant chloroplast/amyloplast storage']),
    row('Amylopectin (Plant Starch)', ['α-D-Glucose · α(1->4) + α(1->6) every ~20–30 units', 'Moderately branched compact helix; insoluble', 'Faster plant glucose mobilization than amylose']),
    row('Glycogen (Animal/Fungal)', ['α-D-Glucose · α(1->4) + frequent α(1->6) every ~8–12 units', 'Highly branched; many exposed ends', 'Rapid ATP fuel release in liver and skeletal muscle']),
    row('Cellulose (Plant Cell Wall)', ['β-D-Glucose · β(1->4) with 180° alternating flips', 'Straight unbranched H-bonded microfibrils', 'Withstands osmotic turgor pressure (tensile strength)']),
    row('Glycoproteins (Surface Membrane)', ['Polypeptide + covalently linked oligosaccharide', 'Anchored in outer phospholipid leaflet', 'ABO blood-group antigens & immune self/non-self recognition'], 'Slide 16 Erratum: Fructose (C6H12O6) is a HEXOSE despite forming a 5-membered furanose ring!'),
  ],
};

export const BIO_V3_B11_ENERGY_MASS_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'bio-v3-b11-energy-mass-worked',
  title: 'Worked Energy-to-Mass Analysis: Migratory Birds & Glycogen vs Lipid Fuel (Allott p.209)',
  caption:
    'Quantify why migrating birds rely primarily on triglycerides rather than hydrated glycogen for sustained trans-oceanic flight.',
  sourceLabel: 'Allott & Mindorff (2023) End-of-Chapter B1 p.209',
  commandTerm: 'Calculate & Explain',
  marks: 4,
  problemMarkdown:
    'A migratory bar-tailed godwit needs `2,280 kJ` for a non-stop flight. Compare total carry mass if stored purely as dry triglyceride (`38.0 kJ g⁻¹`, zero bound water) vs hydrated glycogen (`17.0 kJ g⁻¹` dry carbohydrate plus `~2.0 g` hydration water per `1.0 g` glycogen). Calculate mass saved by lipids.',
  givenData: [
    'Flight energy demand = 2,280 kJ',
    'Triglyceride energy density = 38.0 kJ g⁻¹ (anhydrous)',
    'Glycogen energy density = 17.0 kJ g⁻¹ dry (+2 g H2O per g dry = 3x hydrated mass)',
  ],
  steps: [
    wstep(
      1,
      'Calculate Triglyceride Mass Required',
      'Divide 2,280 kJ by 38.0 kJ g⁻¹; hydrophobic triglycerides store without water shells.',
      'Non-polar hydrocarbons pack compactly with zero osmotic drag.',
      'm_{\\text{lipid}} = \\frac{2280\\text{ kJ}}{38.0\\text{ kJ g}^{-1}} = 60.0\\text{ g}',
      'M1'
    ),
    wstep(
      2,
      'Calculate Dry + Hydrated Glycogen Mass Required',
      'Divide 2,280 by 17.0 to obtain dry glycogen mass (134.1 g), then multiply by 3 (1 g glycogen + 2 g bound water).',
      'Polar hydroxyl (-OH) groups attract heavy hydration shells.',
      'm_{\\text{dry}} = \\frac{2280}{17.0} = 134.1\\text{ g};\\quad m_{\\text{hydrated}} = 134.1 \\times 3 = 402.4\\text{ g}',
      'M1+A1'
    ),
    wstep(
      3,
      'Compute Mass Saved & Contrast Rapid Muscle Function',
      'Storing lipid saves 342.4 g (~85% payload mass reduction!), whereas polar glycogen stays essential in skeletal muscle for rapid anaerobic bursts where lipid β-oxidation cannot run without O2.',
      'Directly links molecular polarity (B1.1) to organismal biomechanics.',
      '\\Delta m = 402.4 - 60.0 = 342.4\\text{ g saved}',
      'E1'
    ),
  ],
  finalAnswerMarkdown:
    'Lipid fuel = **60.0 g** vs hydrated glycogen = **402.4 g** (**342.4 g saved**); birds use fats for endurance flight while retaining glycogen for immediate anaerobic bursts.',
  commonTrapMarkdown:
    'Cite ALL THREE IB reasons why lipids beat carbs long-term: ~2x energy/g, hydrophobic anhydrous packing (no osmotic swelling/water weight), and thermal/buoyancy benefits.',
};

export const BIO_V3_B12_PROTEIN_EXPLORER: LabeledExplorerSpec = {
  ...PROTEIN_STRUCTURE_EXPLORER,
  id: 'bio-v3-b12-protein-explorer',
  title: 'Amino Acid Zwitterions, Peptide Bonds & HL 1°–4° Protein Folding (B1.2)',
  caption:
    'Explore universal amino acid Cα geometry, condensation peptide bonds, polar vs hydrophobic R-groups, and HL 1°–4° haemoglobin quaternary folding.',
};

export const BIO_V3_B12_PROTEIN_CLASSES_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'bio-v3-b12-protein-classes-matrix',
  title: 'Globular vs Fibrous Proteins & Denaturation Agents (B1.2 HL)',
  caption:
    'Contrast water solubility, R-group distribution, 3D architecture, and real IB examples (Insulin, Rubisco, Haemoglobin vs Collagen and α-Keratin).',
  columns: ['Diagnostic Property', 'Globular Proteins (Insulin, Rubisco, Haemoglobin)', 'Fibrous Proteins (Collagen, α-Keratin, Silk)'],
  rows: [
    row('Overall 3D Geometry', ['Spherical/compact folded coils (3°/4°)', 'Elongated parallel rods/fibres; repeating 2° helices']),
    row('Surface R-Groups & Solubility', ['Hydrophilic outside, hydrophobic core -> SOLUBLE in cytosol/plasma', 'Many hydrophobic R-groups exposed -> INSOLUBLE in water']),
    row('Sequence Regularity', ['Non-repetitive precise sequence sculpting active/binding sites', 'Highly repetitive structural motifs (e.g., Collagen Gly–X–Y triple helix)']),
    row('Sensitivity to Heat & pH', ['High sensitivity; weak H-bonds/ionic bonds break -> active-site denaturation', 'Higher mechanical & thermal resistance across broad ranges']),
    row('Key IB Examples', ['Rubisco (Calvin CO2 fixation), Insulin (blood glucose), Haemoglobin (O2 + Fe²⁺ haem)', 'Collagen (tendons/bone/skin tensile strength), Spider silk, Keratin']),
  ],
};

export const BIO_V3_B12_PEPTIDE_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'bio-v3-b12-peptide-worked',
  title: 'Worked Polypeptide Stoichiometry & Sequence Combinatorics (B1.2)',
  caption:
    'Calculate peptide bond count in multi-chain quaternary proteins (insulin), water released, titin molar mass, and theoretical sequence combinatorics.',
  sourceLabel: 'Allott & Mindorff (2023) B1.2 Proteome & Titin',
  commandTerm: 'Calculate',
  marks: 4,
  problemMarkdown:
    'Human muscle titin contains `34,350` amino acids (`~110 Da` net average polymerized residue mass). Meanwhile, active human insulin consists of an A-chain (`21 aa`) and B-chain (`30 aa`) joined by two interchain disulfide bridges. Calculate `(a)` total possible 10-amino-acid decapeptide sequences (`20^10`), `(b)` total peptide bonds and H2O released to synthesize 1 insulin molecule, and `(c)` titin molecular mass (`MDa`).',
  givenData: [
    'Genetically encoded amino acids = 20',
    'Insulin chains: A = 21 aa, B = 30 aa (two separate chains)',
    'Titin = 34,350 aa (~110 Da net average residue)',
  ],
  steps: [
    wstep(
      1,
      'Compute Combinatorial Space of a 10-Residue Decapeptide',
      'Each of the 10 positions independently chooses among 20 amino acids.',
      'Explains why just 20 monomers encode virtually limitless proteomes.',
      'N = 20^{10} = 1.024 \\times 10^{13}\\text{ unique sequences}',
      'M1'
    ),
    wstep(
      2,
      'Count Peptide Bonds in Multi-Chain Insulin',
      'Because mature insulin has TWO separate chains joined by Cys–Cys disulfide bonds (not a continuous peptide link), subtract 1 from EACH chain separately.',
      'Treating 51 total residues as one chain gives 50 bonds instead of the correct 49.',
      '\\text{Peptide bonds} = (21 - 1) + (30 - 1) = 49\\text{ peptide bonds } (49\\text{ H}_2\\text{O released})',
      'M1+A1'
    ),
    wstep(
      3,
      'Estimate Titin Polypeptide Molecular Mass',
      'Multiply 34,350 polymerized residues by 110 Da (already accounting for 18 Da condensation H2O lost per bond).',
      'Titin acts as a passive sarcomere molecular spring.',
      'M_{\\text{titin}} \\approx 34{,}350 \\times 110\\text{ Da} \\approx 3.78 \\times 10^6\\text{ Da } (3.78\\text{ MDa})',
      'A1'
    ),
  ],
  finalAnswerMarkdown:
    'Decapeptide combinations = **1.024 × 10¹³**; Insulin = **49 peptide bonds (49 H2O)**; Titin ≈ **3.78 MDa**.',
  commonTrapMarkdown:
    'For quaternary multi-chain proteins (e.g., insulin 2 chains, haemoglobin 4 chains), subtract 1 peptide bond per chain, NOT 1 overall.',
};

export const BIO_V3_B21_MEMBRANE_EXPLORER: LabeledExplorerSpec = {
  type: 'labeled_explorer',
  id: 'bio-v3-b21-membrane-explorer',
  title: 'Fluid Mosaic Membrane, Cholesterol & Gated HL Transporters (B2.1)',
  caption:
    'Explore integral vs peripheral proteins, bidirectional cholesterol fluidity buffering, aquaporins, voltage-gated K⁺ channels, nicotinic AChR, and SGLT1.',
  palette: 'scientific',
  viewBox: '0 0 800 440',
  shapes: [
    ...plateBg('Singer–Nicolson Fluid Mosaic Model + Cholesterol Modulator', 'B2.1.1–B2.1.8 · Selective hydrophobic bilayer embedded with amphipathic proteins and rigid sterol rings.'),
    { kind: 'rect', x: 38, y: 140, width: 724, height: 184, rx: 16, fill: '#0f172a', stroke: '#1e293b', strokeWidth: 2 },
    { kind: 'circle', cx: 80, cy: 164, r: 14, fill: '#38bdf8', stroke: '#bae6fd', strokeWidth: 1.5, hotspotId: 'bilayer-tails' },
    { kind: 'circle', cx: 112, cy: 164, r: 14, fill: '#38bdf8', stroke: '#bae6fd', strokeWidth: 1.5, hotspotId: 'bilayer-tails' },
    { kind: 'circle', cx: 144, cy: 164, r: 14, fill: '#38bdf8', stroke: '#bae6fd', strokeWidth: 1.5, hotspotId: 'bilayer-tails' },
    { kind: 'circle', cx: 300, cy: 164, r: 14, fill: '#38bdf8', stroke: '#bae6fd', strokeWidth: 1.5, hotspotId: 'bilayer-tails' },
    { kind: 'circle', cx: 440, cy: 164, r: 14, fill: '#38bdf8', stroke: '#bae6fd', strokeWidth: 1.5, hotspotId: 'bilayer-tails' },
    { kind: 'circle', cx: 640, cy: 164, r: 14, fill: '#38bdf8', stroke: '#bae6fd', strokeWidth: 1.5, hotspotId: 'bilayer-tails' },
    { kind: 'circle', cx: 672, cy: 164, r: 14, fill: '#38bdf8', stroke: '#bae6fd', strokeWidth: 1.5, hotspotId: 'bilayer-tails' },
    { kind: 'circle', cx: 80, cy: 300, r: 14, fill: '#38bdf8', stroke: '#bae6fd', strokeWidth: 1.5, hotspotId: 'bilayer-tails' },
    { kind: 'circle', cx: 112, cy: 300, r: 14, fill: '#38bdf8', stroke: '#bae6fd', strokeWidth: 1.5, hotspotId: 'bilayer-tails' },
    { kind: 'circle', cx: 144, cy: 300, r: 14, fill: '#38bdf8', stroke: '#bae6fd', strokeWidth: 1.5, hotspotId: 'bilayer-tails' },
    { kind: 'circle', cx: 300, cy: 300, r: 14, fill: '#38bdf8', stroke: '#bae6fd', strokeWidth: 1.5, hotspotId: 'bilayer-tails' },
    { kind: 'circle', cx: 440, cy: 300, r: 14, fill: '#38bdf8', stroke: '#bae6fd', strokeWidth: 1.5, hotspotId: 'bilayer-tails' },
    { kind: 'circle', cx: 640, cy: 300, r: 14, fill: '#38bdf8', stroke: '#bae6fd', strokeWidth: 1.5, hotspotId: 'bilayer-tails' },
    { kind: 'circle', cx: 672, cy: 300, r: 14, fill: '#38bdf8', stroke: '#bae6fd', strokeWidth: 1.5, hotspotId: 'bilayer-tails' },
    { kind: 'line', x1: 75, y1: 178, x2: 75, y2: 222, stroke: '#fbbf24', strokeWidth: 3, hotspotId: 'bilayer-tails' },
    { kind: 'line', x1: 85, y1: 178, x2: 85, y2: 222, stroke: '#fbbf24', strokeWidth: 3, hotspotId: 'bilayer-tails' },
    { kind: 'line', x1: 107, y1: 178, x2: 107, y2: 222, stroke: '#fbbf24', strokeWidth: 3, hotspotId: 'bilayer-tails' },
    { kind: 'line', x1: 117, y1: 178, x2: 117, y2: 222, stroke: '#fbbf24', strokeWidth: 3, hotspotId: 'bilayer-tails' },
    { kind: 'line', x1: 75, y1: 242, x2: 75, y2: 286, stroke: '#fbbf24', strokeWidth: 3, hotspotId: 'bilayer-tails' },
    { kind: 'line', x1: 85, y1: 242, x2: 85, y2: 286, stroke: '#fbbf24', strokeWidth: 3, hotspotId: 'bilayer-tails' },
    { kind: 'rect', x: 190, y: 132, width: 68, height: 196, rx: 16, fill: '#8b5cf6', stroke: '#ddd6fe', strokeWidth: 2, hotspotId: 'aquaporin' },
    { kind: 'line', x1: 224, y1: 132, x2: 224, y2: 328, stroke: '#c4b5fd', strokeWidth: 7, strokeDasharray: '8,4', hotspotId: 'aquaporin' },
    { kind: 'text', x: 224, y: 115, text: 'Aquaporin', fontSize: 12, fontWeight: '700', fill: '#ddd6fe', textAnchor: 'middle' },
    { kind: 'polygon', points: '345,155 370,155 376,225 339,225', fill: '#ef4444', stroke: '#fca5a5', strokeWidth: 2, hotspotId: 'cholesterol' },
    { kind: 'text', x: 358, y: 142, text: 'Cholesterol', fontSize: 12, fontWeight: '700', fill: '#fca5a5', textAnchor: 'middle' },
    { kind: 'rect', x: 505, y: 132, width: 82, height: 196, rx: 16, fill: '#10b981', stroke: '#6ee7b7', strokeWidth: 2, hotspotId: 'glycoprotein' },
    { kind: 'path', d: 'M 546 132 L 534 102 L 560 86 L 585 72', fill: 'none', stroke: '#f472b6', strokeWidth: 4, hotspotId: 'glycoprotein' },
    { kind: 'circle', cx: 585, cy: 72, r: 7, fill: '#f472b6', hotspotId: 'glycoprotein' },
    { kind: 'text', x: 642, y: 92, text: 'Glycoprotein / CAM', fontSize: 12, fontWeight: '700', fill: '#f9a8d4', textAnchor: 'middle' },
    { kind: 'rect', x: 610, y: 332, width: 118, height: 32, rx: 8, fill: '#f59e0b', hotspotId: 'glycoprotein' },
    { kind: 'text', x: 669, y: 352, text: 'Peripheral Protein', fontSize: 11, fontWeight: '700', fill: '#451a03', textAnchor: 'middle' },
  ],
  hotspots: [
    hs(
      'bilayer-tails',
      'Amphipathic Phospholipid Bilayer & Cis Tail Fluidity',
      112,
      215,
      'Lipid Core',
      'selective hydrophobic barrier',
      'Polar phosphate heads face aqueous fluids while non-polar hydrocarbon tails exclude ions and hydrophilic solutes. Kinked cis unsaturated tails raise fluidity in cold-adapted fish/plants.'
    ),
    hs(
      'aquaporin',
      'Integral Channel Protein (Aquaporin)',
      224,
      230,
      'Transmembrane',
      'facilitated bulk osmosis',
      'Non-polar R-groups anchor the protein inside the fatty core while its narrow polar lumen lets water rush across kidney collecting ducts and RBCs at ~10⁹ H2O s⁻¹ without leaking H+.'
    ),
    hs(
      'cholesterol',
      'Cholesterol: Bidirectional Fluidity Buffer (Animal Membranes)',
      358,
      190,
      'Fluidity Buffer',
      'stabilizes high T + prevents freezing at low T',
      'Amphipathic steroid: hydroxyl head aligns near phosphate heads while rigid steroid rings pack between tails—restraining excessive melting at high temperature AND preventing rigid phospholipid crystallization at low temperature.'
    ),
    hs(
      'glycoprotein',
      'Glycoproteins, CAMs & Peripheral Proteins',
      546,
      135,
      'Cell Recognition',
      'cell adhesion molecules (CAMs) + ABO self-ID',
      'Oligosaccharide chains on integral proteins/lipids identify cell types (ABO blood group, immune self) and mediate tissue sorting via CAMs; peripheral proteins dock reversibly on inner/outer surfaces.'
    ),
  ],
  views: [
    makeView(
      'transporters-hl',
      'HL Gated Channels & SGLT1',
      'B2.1.10–B2.1.16 HL · Voltage-gated K+, nicotinic AChR, and secondary active SGLT1.',
      'HL Membrane Transporters: Voltage/Ligand Channels & SGLT1 Symporter',
      [
        { kind: 'rect', x: 40, y: 125, width: 215, height: 225, rx: 14, fill: '#0f172a', stroke: '#38bdf8', strokeWidth: 2, hotspotId: 'kv-channel' },
        { kind: 'text', x: 147, y: 156, text: 'Voltage-Gated K+ Channel', fontSize: 13, fontWeight: '700', fill: '#38bdf8', textAnchor: 'middle' },
        { kind: 'rect', x: 108, y: 182, width: 78, height: 92, rx: 10, fill: '#1e293b', stroke: '#7dd3fc', strokeWidth: 2, hotspotId: 'kv-channel' },
        { kind: 'line', x1: 147, y1: 282, x2: 147, y2: 176, stroke: '#34d399', strokeWidth: 5, hotspotId: 'kv-channel' },
        { kind: 'text', x: 147, y: 306, text: 'Axon repolarization (+30 -> -70mV)', fontSize: 11, fill: '#cbd5e1', textAnchor: 'middle' },

        { kind: 'rect', x: 292, y: 125, width: 215, height: 225, rx: 14, fill: '#0f172a', stroke: '#f472b6', strokeWidth: 2, hotspotId: 'nachr' },
        { kind: 'text', x: 400, y: 156, text: 'Ligand-Gated Nicotinic AChR', fontSize: 13, fontWeight: '700', fill: '#f9a8d4', textAnchor: 'middle' },
        { kind: 'circle', cx: 352, cy: 192, r: 10, fill: '#fbbf24', hotspotId: 'nachr' },
        { kind: 'circle', cx: 448, cy: 192, r: 10, fill: '#fbbf24', hotspotId: 'nachr' },
        { kind: 'line', x1: 400, y1: 185, x2: 400, y2: 282, stroke: '#f9a8d4', strokeWidth: 5, hotspotId: 'nachr' },
        { kind: 'text', x: 400, y: 306, text: '2 ACh bind -> Na+ influx (EPSP)', fontSize: 11, fill: '#cbd5e1', textAnchor: 'middle' },

        { kind: 'rect', x: 545, y: 125, width: 215, height: 225, rx: 14, fill: '#0f172a', stroke: '#10b981', strokeWidth: 2, hotspotId: 'sglt1' },
        { kind: 'text', x: 652, y: 156, text: 'SGLT1 Symporter (Indirect)', fontSize: 13, fontWeight: '700', fill: '#34d399', textAnchor: 'middle' },
        { kind: 'line', x1: 632, y1: 185, x2: 632, y2: 280, stroke: '#38bdf8', strokeWidth: 5, hotspotId: 'sglt1' },
        { kind: 'line', x1: 672, y1: 185, x2: 672, y2: 280, stroke: '#fbbf24', strokeWidth: 5, hotspotId: 'sglt1' },
        { kind: 'text', x: 652, y: 306, text: '2 Na+ down + 1 Glucose UP', fontSize: 11, fill: '#fde68a', textAnchor: 'middle' },
      ],
      [
        hs('kv-channel', 'Voltage-Gated K+ Channel (Passive Diffusion)', 147, 228, 'HL Gated Channel', 'voltage-dependent axon repolarization', 'Opens transiently when depolarization triggers S4 voltage sensors; K+ flows outward down its electrochemical gradient without ATP before a ball-and-chain domain plugs the pore.'),
        hs('nachr', 'Nicotinic Acetylcholine Receptor (Ligand-Gated)', 400, 228, 'HL Synapse', '2 ACh ligand triggers Na+ influx', 'Five-subunit receptor opens only when two acetylcholine molecules bind extracellular sites, allowing rapid Na+ influx to depolarize postsynaptic neurons or muscle fibres.'),
        hs('sglt1', 'SGLT1 Na+-Glucose Cotransporter (Secondary Active)', 652, 228, 'HL Symporter', 'coupled uphill glucose import', 'Absorbs glucose uphill in intestinal villi and kidney proximal convoluted tubules using the Na+ electrochemical gradient actively maintained by basolateral Na+/K+-ATPase.'),
      ]
    ),
  ],
};

export const BIO_V3_B21_NAK_PUMP_STEPS: StepMechanismSpec = {
  type: 'step_mechanism',
  id: 'bio-v3-b21-nak-pump-steps',
  title: 'Na⁺/K⁺-ATPase Alternating Conformation Pump Cycle (B2.1.12 HL)',
  caption:
    'Trace how 1 ATP powers antiporter export of 3 Na⁺ against import of 2 K⁺, establishing resting membrane potential and secondary active transport.',
  palette: 'scientific',
  nodes: [
    n('e1open', '1. E1 Inward-Open', 120, 195, 'High Na+ affinity · Binds 3 Na+'),
    n('phos', '2. ATP Phosphorylation', 350, 95, 'ATP -> ADP + Asp-P · Closes inside'),
    n('e2release', '3. E2 Outward-Open', 625, 130, 'Drops 3 Na+ out · Binds 2 K+'),
    n('dephos', '4. Dephosphorylation', 475, 300, 'Releases Pi · Delivers 2 K+ in'),
  ],
  edges: [
    e('e1', 'e1open', 'phos', '+1 ATP -> ADP'),
    e('e2', 'phos', 'e2release', 'Flip E1 -> E2'),
    e('e3', 'e2release', 'dephos', 'Release Pi'),
    e('e4', 'dephos', 'e1open', 'Reset E1 (+2 K+)'),
  ],
  steps: [
    sf(
      1,
      'Cytoplasmic 3 Na⁺ Loading (E1 State)',
      'Inward-facing pump conformation has high affinity for cytoplasmic Na⁺; three intracellular Na⁺ ions dock inside binding pockets.',
      ['e1open'],
      [],
      [{ label: 'E1 Affinity', value: 'High Na+ / Low K+' }]
    ),
    sf(
      2,
      'ATP Hydrolysis & Conformational Inversion (Never Open Both Sides!)',
      'Terminal phosphate transfers from ATP to an aspartate residue, driving E1 -> E2 structural inversion so the carrier protein is NEVER simultaneously open to both extracellular fluid and cytoplasm.',
      ['e1open', 'phos'],
      ['e1'],
      [{ label: 'Energy Cost', value: '1 ATP phosphorylated' }]
    ),
    sf(
      3,
      'Extracellular 3 Na⁺ Release & 2 K⁺ Binding (E2 State)',
      'E2 affinity for Na⁺ collapses (releasing 3 Na⁺ outside) while high-affinity K⁺ sites open extracellularly and bind 2 K⁺ ions.',
      ['phos', 'e2release'],
      ['e2'],
      [{ label: 'Exported', value: '3 Na+ out' }]
    ),
    sf(
      4,
      'Dephosphorylation Delivers 2 K⁺ Inside (Electrogenic 3:2)',
      'Inorganic phosphate (Pi) release snaps the protein back to E1, releasing 2 K⁺ into the cytoplasm. Net export of +1 charge per cycle maintains negative resting potential (~−70 mV) and fuels SGLT1 glucose uptake.',
      ['e2release', 'dephos', 'e1open'],
      ['e3', 'e4'],
      [
        { label: 'Stoichiometry', value: '3 Na+ OUT : 2 K+ IN : 1 ATP' },
        { label: 'Net Charge', value: 'Electrogenic (−70 mV driver)' },
      ]
    ),
  ],
};

export const BIO_V3_B21_TRANSPORT_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'bio-v3-b21-transport-matrix',
  title: 'Membrane Transport Modes Comparison (Allott B2.1.3–B2.1.16)',
  caption:
    'Compare energy requirements, saturation kinetics, direction relative to gradient, and classic IB examples.',
  columns: ['Transport Mode', 'Gradient Direction & Energy', 'Protein Requirement & Saturation', 'Key IB Examples'],
  rows: [
    row('Simple Diffusion', ['High -> Low · Passive (thermal KE)', 'None (crosses phospholipid core); non-saturating', 'O2, CO2, steroid hormones, ethanol']),
    row('Osmosis', ['High -> Low free water potential (Ψw) · Passive', 'Bilayer (slow) or Aquaporin channels (fast)', 'Root hair uptake, renal collecting duct (ADH)']),
    row('Facilitated Diffusion (Channels/Carriers)', ['High -> Low · Passive', 'Specific channels (gated) or carriers (saturates at Vmax)', 'Voltage-gated K+, nAChR (Na+), GLUT1 glucose']),
    row('Primary Active Transport', ['Low -> High · Direct ATP hydrolysis', 'Antiporter/uniporter pump protein (saturates)', 'Na+/K+-ATPase (3 Na+ out : 2 K+ in), root-hair H+-ATPase']),
    row('Secondary Active Co-transport', ['Low -> High coupled to ion gradient · Indirect ATP', 'Symporter/antiporter carrier', 'SGLT1 (2 Na+ in + 1 glucose in) in gut/nephron']),
    row('Vesicle Transport (Endo/Exocytosis)', ['Bulk cargo · Direct ATP + cytoskeleton', 'Clathrin coats, SNAREs, membrane fluidity', 'Neurotransmitter exocytosis, macrophage phagocytosis']),
  ],
};

export const BIO_V3_B22_COMPARTMENT_EXPLORER: LabeledExplorerSpec = {
  ...ENHANCED_COMPARTMENT_EXPLORER,
  id: 'bio-v3-b22-compartment-explorer',
  title: 'Organelles, Clathrin Vesicles & Double-Membrane Bioenergetics (B2.2)',
  caption:
    'Inspect nuclear transcriptional separation, rER->cis/trans Golgi secretory sorting, clathrin endocytosis, acidic phagolysosomes (Slide 21), and cristae/thylakoid proton compartments.',
};

export const BIO_V3_B22_ULTRACENTRIFUGE_STEPS: StepMechanismSpec = {
  type: 'step_mechanism',
  id: 'bio-v3-b22-ultracentrifuge-steps',
  title: 'Cell Fractionation by Differential Ultracentrifugation (B2.2)',
  caption:
    'Isolate intact nuclei, mitochondria/chloroplasts, ER microsomes, and ribosomes sequentially in ice-cold isotonic buffered sucrose.',
  palette: 'scientific',
  nodes: [
    n('buffer', '1. Homogenize in Buffer', 110, 195, 'Ice-cold · Isotonic · pH-buffered'),
    n('lowspin', '2. ~1,000 g (10 min)', 305, 105, 'Pellet 1: Nuclei'),
    n('medspin', '3. ~10,000 g (20 min)', 495, 105, 'Pellet 2: Mitochondria / Plastids'),
    n('highspin', '4. ~100,000 g+ (60 min)', 680, 195, 'Pellet 3: ER Microsomes -> 80S Ribo'),
  ],
  edges: [
    e('e1', 'buffer', 'lowspin', 'Filter debris -> spin'),
    e('e2', 'lowspin', 'medspin', 'Spin Supernatant 1'),
    e('e3', 'medspin', 'highspin', 'Spin Supernatant 2'),
  ],
  steps: [
    sf(
      1,
      'Three Mandatory Homogenization Buffer Conditions',
      'Blend tissue in **(1) Ice-cold** (inhibits autodigestive lysosomal hydrolases), **(2) Isotonic sucrose** (prevents osmotic bursting or shriveling of fragile organelles), and **(3) pH-buffered** (prevents enzyme active-site denaturation) solution.',
      ['buffer'],
      [],
      [
        { label: 'Temperature', value: '0–4 °C (slows hydrolases)' },
        { label: 'Water Potential', value: 'Isotonic (stops osmotic lysis)' },
      ]
    ),
    sf(
      2,
      'Low-Speed Sedimentation (~1,000 g) Pellets Nuclei',
      'Filtering through muslin removes unbroken walls/fibres; low-speed centrifugation sediments largest, densest nuclei into Pellet 1 while smaller organelles remain in Supernatant 1.',
      ['buffer', 'lowspin'],
      ['e1'],
      [{ label: 'Pellet 1', value: 'Nuclei (largest & densest)' }]
    ),
    sf(
      3,
      'Medium-Speed Spin (~10,000 g) Pellets Bioenergetic Organelles',
      'Decanting Supernatant 1 and spinning at 10,000 g sediments mitochondria, chloroplasts (in plants), and lysosomes into Pellet 2.',
      ['lowspin', 'medspin'],
      ['e2'],
      [{ label: 'Pellet 2', value: 'Mitochondria / Chloroplasts / Lysosomes' }]
    ),
    sf(
      4,
      'Ultracentrifugation (~100,000 g+) Isolates Microsomes & Free Ribosomes',
      'High-speed spins isolate fragmented rER/Golgi membrane vesicles (microsomes) first, followed at ~150,000 g by non-membranous 80S/70S ribosomes.',
      ['medspin', 'highspin'],
      ['e3'],
      [{ label: 'Pellet 3–4', value: 'ER microsomes -> Ribosomes' }]
    ),
  ],
};

export const BIO_V3_B22_ORGANELLE_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'bio-v3-b22-organelle-matrix',
  title: 'Membrane Boundary Architecture & Eukaryotic Compartmentalization (B2.2)',
  caption:
    'Categorize organelles by double membrane, single membrane, or non-membranous complexes and relate membranes directly to biochemical efficiency.',
  columns: ['Organelle / Structure', 'Membrane Class', 'Core Specialization', 'Key Compartment Advantage'],
  rows: [
    row('Nucleus', ['Double membrane (with nuclear pores)', 'Chromatin, nucleolus, RNA transcription', 'Separates transcription from translation -> allows pre-mRNA splicing']),
    row('Mitochondrion & Chloroplast', ['Double membrane (inner cristae / thylakoids)', 'Aerobic ATP synthesis / Photosynthesis', 'Small intermembrane/thylakoid volumes build rapid H+ gradients']),
    row('Rough ER, Smooth ER & Golgi', ['Single membrane cisternae', 'Secretory translation, lipids, glycosylation', 'Maintains oxidizing ER lumen for disulfide bonds + cis/trans sorting']),
    row('Lysosome & Phagolysosome', ['Single membrane', 'Acid hydrolases (pH ~4.8)', 'Clarification (Slide 21): lysosome + phagosome = phagolysosome; acid core protects pH 7.2 cytosol']),
    row('80S/70S Ribosome, Centriole, Cytoskeleton', ['Non-membranous complexes', 'Polypeptide synthesis, spindle poles, motility', 'Operates directly inside cytosolic or organellar matrix aqueous phase']),
  ],
};

export const BIO_V3_B23_SPECIALIZED_CELLS_EXPLORER: LabeledExplorerSpec = {
  type: 'labeled_explorer',
  id: 'bio-v3-b23-specialized-cells-explorer',
  title: 'Cell Specialization: Pneumocytes, Muscle Syncytia & Gametes (B2.3)',
  caption:
    'Inspect specialized form-to-function adaptations across Allott Table 1 examples: Type I & II pneumocytes, cardiac vs striated muscle, and sperm/ovum.',
  palette: 'scientific',
  viewBox: '0 0 800 440',
  shapes: [
    ...plateBg('Alveolar Gas Exchange Barrier: Type I & Type II Pneumocytes', 'B2.3.7 · Squamous Type I minimizes Fick diffusion distance (<0.5 µm); cuboidal Type II secretes surfactant.'),
    { kind: 'path', d: 'M 110 220 A 190 135 0 1 1 490 220', fill: 'none', stroke: '#38bdf8', strokeWidth: 9, hotspotId: 'type1' },
    { kind: 'rect', x: 255, y: 92, width: 90, height: 54, rx: 14, fill: '#10b981', stroke: '#6ee7b7', strokeWidth: 2, hotspotId: 'type2' },
    { kind: 'circle', cx: 288, cy: 114, r: 7, fill: '#fde68a', hotspotId: 'type2' },
    { kind: 'circle', cx: 314, cy: 122, r: 7, fill: '#fde68a', hotspotId: 'type2' },
    { kind: 'text', x: 300, y: 78, text: 'Type II Pneumocyte (Lamellar Bodies)', fontSize: 12, fontWeight: '700', fill: '#6ee7b7', textAnchor: 'middle' },
    { kind: 'path', d: 'M 130 226 Q 300 242 475 226', fill: 'none', stroke: '#f472b6', strokeWidth: 4, strokeDasharray: '6,3', hotspotId: 'type2' },
    { kind: 'text', x: 300, y: 266, text: 'Pulmonary Surfactant Monolayer', fontSize: 12, fontWeight: '700', fill: '#f9a8d4', textAnchor: 'middle' },
    { kind: 'ellipse', cx: 148, cy: 145, rx: 40, ry: 9, fill: '#fbbf24', hotspotId: 'type1' },
    { kind: 'text', x: 116, y: 116, text: 'Type I (~0.15 µm)', fontSize: 12, fontWeight: '700', fill: '#fde68a', textAnchor: 'middle' },
    { kind: 'rect', x: 530, y: 110, width: 228, height: 245, rx: 12, fill: '#0f172a', stroke: '#ef4444', strokeWidth: 2, hotspotId: 'capillary' },
    { kind: 'circle', cx: 644, cy: 215, r: 34, fill: '#dc2626', hotspotId: 'capillary' },
    { kind: 'text', x: 644, y: 219, text: 'RBC (~7 µm)', fontSize: 12, fontWeight: '700', fill: '#fff', textAnchor: 'middle' },
    { kind: 'text', x: 644, y: 145, text: 'Single-Cell Capillary', fontSize: 12, fontWeight: '700', fill: '#fca5a5', textAnchor: 'middle' },
    { kind: 'text', x: 644, y: 288, text: 'Fused basement membrane', fontSize: 11, fill: '#cbd5e1', textAnchor: 'middle' },
    { kind: 'text', x: 644, y: 306, text: 'Total barrier < 0.5 µm', fontSize: 11, fill: '#cbd5e1', textAnchor: 'middle' },
  ],
  hotspots: [
    hs('type1', 'Type I Pneumocyte (~0.15 µm Squamous Sheet)', 148, 145, 'Gas Diffusion', 'shortens diffusion distance', 'Flattened squamous epithelial cells cover ~95% of alveolar inner wall, fused tightly to capillary endothelium so O2 and CO2 diffuse passively across <0.5 µm.'),
    hs('type2', 'Type II Pneumocyte & Amphipathic Surfactant', 300, 118, 'Surfactant Secretion', 'reduces alveolar surface tension', 'Cuboidal secretory cells packed with rER, Golgi, and lamellar vesicles exocytose phospholipid-protein surfactant, disrupting water H-bond surface tension so wet alveoli inflate easily without collapsing.'),
    hs('capillary', 'Biconcave Erythrocyte & Capillary Endothelium', 644, 215, 'Perfusion', 'single-file Hb saturation', 'RBCs squeeze singly along ~7 µm alveolar capillaries; anucleate biconcave geometry maximizes Hb capacity and surface-area-to-volume O2 uptake.'),
  ],
  views: [
    makeView(
      'muscle-hl',
      'Striated vs Cardiac Muscle',
      'B2.3.8 · Multinucleate skeletal syncytium (~30 mm) vs branched cardiac intercalated discs.',
      'Skeletal Muscle Syncytium vs Branched Cardiac Cardiomyocytes',
      [
        { kind: 'rect', x: 48, y: 100, width: 704, height: 118, rx: 16, fill: '#31102f', stroke: '#ec4899', strokeWidth: 3, hotspotId: 'skeletal' },
        { kind: 'ellipse', cx: 148, cy: 118, rx: 18, ry: 8, fill: '#38bdf8', hotspotId: 'skeletal' },
        { kind: 'ellipse', cx: 365, cy: 118, rx: 18, ry: 8, fill: '#38bdf8', hotspotId: 'skeletal' },
        { kind: 'ellipse', cx: 615, cy: 118, rx: 18, ry: 8, fill: '#38bdf8', hotspotId: 'skeletal' },
        { kind: 'rect', x: 80, y: 142, width: 640, height: 58, fill: '#831843', stroke: '#f9a8d4', strokeWidth: 2, strokeDasharray: '12,8', hotspotId: 'skeletal' },
        { kind: 'text', x: 400, y: 176, text: 'SKELETAL MUSCLE SYNCYTIUM: Many peripheral nuclei + sarcomere myofibrils', fontSize: 13, fontWeight: '700', fill: '#fce7f3', textAnchor: 'middle' },

        { kind: 'rect', x: 48, y: 256, width: 320, height: 96, rx: 14, fill: '#1e1b4b', stroke: '#38bdf8', strokeWidth: 3, hotspotId: 'cardiac' },
        { kind: 'rect', x: 382, y: 256, width: 370, height: 96, rx: 14, fill: '#1e1b4b', stroke: '#38bdf8', strokeWidth: 3, hotspotId: 'cardiac' },
        { kind: 'line', x1: 375, y1: 254, x2: 375, y2: 354, stroke: '#fbbf24', strokeWidth: 9, hotspotId: 'cardiac' },
        { kind: 'ellipse', cx: 210, cy: 304, rx: 22, ry: 12, fill: '#a78bfa', hotspotId: 'cardiac' },
        { kind: 'text', x: 565, y: 296, text: 'CARDIAC MUSCLE: Branched + Intercalated Disc', fontSize: 12, fontWeight: '700', fill: '#fde68a', textAnchor: 'middle' },
        { kind: 'text', x: 565, y: 318, text: 'Gap junctions synchronize depolarization wave', fontSize: 11, fill: '#cbd5e1', textAnchor: 'middle' },
      ],
      [
        hs('skeletal', 'Skeletal Striated Fibre: Multinucleate Syncytium', 365, 165, 'Cell Theory Exception', 'embryonic myoblast fusion', 'Long unbranched fibres up to centimetres long packed with parallel myofibrils; embryonic fusion leaves hundreds of nuclei pushed to the sarcolemma periphery.'),
        hs('cardiac', 'Cardiac Intercalated Discs & Gap Junctions', 375, 304, 'Heart Syncytium', 'desmosomes + electrical gap junctions', 'Branched uninucleate cells locked end-to-end by intercalated discs containing desmosomes (preventing tearing under pressure) and cytoplasmic gap junctions (spreading action potentials rapidly).'),
      ]
    ),
    makeView(
      'gametes',
      'Spermatozoon & Ovum',
      'B2.3.9–B2.3.10 · Extreme morphological specialization for fertilization.',
      'Mammalian Spermatozoon vs Secondary Oocyte Adaptations',
      [
        { kind: 'ellipse', cx: 195, cy: 220, rx: 52, ry: 30, fill: '#1e1b4b', stroke: '#38bdf8', strokeWidth: 3, hotspotId: 'sperm' },
        { kind: 'rect', x: 143, y: 198, width: 28, height: 44, rx: 12, fill: '#f59e0b', hotspotId: 'sperm' },
        { kind: 'rect', x: 247, y: 204, width: 64, height: 32, rx: 8, fill: '#064e3b', stroke: '#34d399', strokeWidth: 2, hotspotId: 'sperm' },
        { kind: 'path', d: 'M 311 220 Q 375 182 435 220 T 515 220', fill: 'none', stroke: '#e2e8f0', strokeWidth: 6, hotspotId: 'sperm' },
        { kind: 'text', x: 158, y: 174, text: 'Acrosome', fontSize: 11, fontWeight: '700', fill: '#fde68a', textAnchor: 'middle' },
        { kind: 'text', x: 279, y: 188, text: 'Spiral Mito', fontSize: 11, fontWeight: '700', fill: '#6ee7b7', textAnchor: 'middle' },

        { kind: 'circle', cx: 650, cy: 225, r: 92, fill: '#1e293b', stroke: '#ec4899', strokeWidth: 10, hotspotId: 'ovum' },
        { kind: 'circle', cx: 650, cy: 225, r: 76, fill: '#31102f', hotspotId: 'ovum' },
        { kind: 'circle', cx: 650, cy: 225, r: 22, fill: '#a78bfa', hotspotId: 'ovum' },
        { kind: 'circle', cx: 598, cy: 182, r: 5, fill: '#34d399', hotspotId: 'ovum' },
        { kind: 'circle', cx: 698, cy: 185, r: 5, fill: '#34d399', hotspotId: 'ovum' },
        { kind: 'text', x: 650, y: 110, text: 'Ovum + Zona Pellucida', fontSize: 12, fontWeight: '700', fill: '#f9a8d4', textAnchor: 'middle' },
        { kind: 'text', x: 650, y: 344, text: 'Cortical granules block polyspermy', fontSize: 11, fill: '#6ee7b7', textAnchor: 'middle' },
      ],
      [
        hs('sperm', 'Sperm Acrosome, Spiral Mitochondria & 9+2 Flagellum', 235, 220, 'Male Gamete', 'minimal cytoplasm hydrodynamic motility', 'Sheds excess cytosol for streamlined propulsion; acrosome hydrolases digest the egg zona pellucida while spiral mitochondria in the midpiece supply ATP for flagellar dynein.'),
        hs('ovum', 'Ovum Yolk Reservoir & Cortical Granules', 650, 225, 'Female Gamete', 'cortical reaction blocks polyspermy', 'Enormous nutrient-rich cytoplasm fuels early embryonic cleavage; upon sperm fusion, cortical granules harden the zona pellucida chemically to prevent lethal polyspermy.'),
      ]
    ),
  ],
};

export const BIO_V3_B23_POTENCY_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'bio-v3-b23-potency-matrix',
  title: 'Stem Cell Potency Spectrum & Cell Sizes (Allott B2.3 Table 1 p.244)',
  caption:
    'Contrast totipotent, pluripotent, and multipotent stem cell niches alongside differential gene expression without DNA sequence deletion.',
  columns: ['Stem Cell Tier / Metric', 'Totipotent', 'Pluripotent', 'Multipotent'],
  rows: [
    row('Developmental Potential', ['Forms EVERY embryonic tissue + extraembryonic placenta', 'Forms all 3 germ layers (ectoderm, mesoderm, endoderm) inside embryo', 'Restricted to one lineage (e.g., hematopoietic -> RBC, WBC, platelets)']),
    row('Biological Location', ['Zygote through ~8-cell morula stage', 'Inner cell mass of blastocyst + reprogrammed iPSCs', 'Adult niches: bone marrow, hair follicle, intestinal crypts']),
    row('Molecular Differentiation Mechanism', ['Differential gene expression via transcription factors & epigenetics (NOT DNA loss!)', 'Identical genome retained in neurons, liver, and skin cells', 'Chromatin compaction silences irrelevant lineage enhancers']),
    row('Clinical & Ethical Trade-Offs', ['Highest potency; embryo destruction ethics', 'Risk of teratoma tumor growth if undifferentiated', 'Autologous adult marrow transplant avoids immune rejection']),
  ],
};

export const BIO_V3_B23_SAV_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'bio-v3-b23-sav-worked',
  title: 'Worked Geometric Scaling: Why Cells Stay Microscopic (SA:V Ratio, B2.3)',
  caption:
    'Demonstrate why metabolic demand (volume L³) outpaces membrane exchange area (L²) and how microvilli/alveoli amplify exchange area without bloating volume.',
  sourceLabel: 'Allott & Mindorff (2023) B2.3 Surface-Area-to-Volume Lab',
  commandTerm: 'Calculate & Explain',
  marks: 5,
  problemMarkdown:
    'Compare a cubic prokaryote of side `L1 = 2.0 µm` against a hypothetical giant cubic cell of side `L2 = 20.0 µm`. `(a)` Calculate `SA`, `V`, and `SA:V` ratio for both cubes. `(b)` Calculate fold exchange-area amplification if a `10 µm x 10 µm` (`100 µm²`) intestinal brush-border apex carries `2,000` cylindrical microvilli (`r = 0.05 µm`, `h = 1.0 µm`).',
  givenData: [
    'Cube 1 side L1 = 2.0 µm; Cube 2 side L2 = 20.0 µm',
    '2,000 cylindrical microvilli (r = 0.05 µm, h = 1.0 µm) across 100 µm² apical base',
  ],
  steps: [
    wstep(
      1,
      'Compute SA, Volume & SA:V Ratio for L1 = 2.0 µm vs L2 = 20.0 µm',
      'As length rises 10x, surface area grows 100x while cytoplasmic demand (volume) explodes 1,000x—cutting SA:V tenfold.',
      'Explains why growing cells reach a nutrient/heat-exchange bottleneck and divide.',
      '\\frac{\\text{SA}_1}{V_1} = \\frac{24}{8} = 3.0\\text{ }\\mu\\text{m}^{-1};\\quad \\frac{\\text{SA}_2}{V_2} = \\frac{2400}{8000} = 0.30\\text{ }\\mu\\text{m}^{-1}',
      'M1+A1'
    ),
    wstep(
      2,
      'Calculate Lateral Microvilli Surface Area Contribution',
      'Each cylindrical microvillus adds lateral cylinder wall area 2πrh across 2,000 projections.',
      'Cylindrical folding expands membrane area upward with minimal added cytosol.',
      '\\Delta \\text{SA} = 2000 \\times 2\\pi(0.05)(1.0) \\approx 628\\text{ }\\mu\\text{m}^2',
      'M1'
    ),
    wstep(
      3,
      'Determine Total Fold Amplification',
      'Original flat 100 µm² expands to 728 µm² (7.28×!)—demonstrating how brush-border enterocytes, biconcave RBCs, and folded alveoli bypass raw SA:V bottlenecks.',
      'Links epithelial anatomy directly to Fick diffusion efficiency.',
      '\\text{Fold increase} = \\frac{100 + 628}{100} = 7.28\\times',
      'A1+E1'
    ),
  ],
  finalAnswerMarkdown:
    'Increasing cell width 10× cuts SA:V 10× (**3.0 -> 0.30 µm⁻¹**); apical microvilli amplify absorption area **7.28×** without inflating cell volume.',
  commonTrapMarkdown:
    'Mention BOTH import insufficiency (O2, glucose) AND waste/heat removal backlog in SA:V explanations.',
};

// ============================================================================
// THEME C & D DIAGRAMS (Guides 13–17 -> 15 diagrams; total = 51 bio-v3-... IDs)
// ============================================================================

export const BIO_V3_C11_ENZYME_KINETICS_SIM: ScientificSimulationSpec = {
  type: 'scientific_simulation',
  id: 'bio-v3-c11-enzyme-kinetics-sim',
  title: 'Interactive Enzyme Kinetics, Denaturation & Inhibition Lab (C1.1)',
  caption:
    'Explore Michaelis–Menten [S] saturation, thermal kinetic gain vs denaturation collapse, pH ionization curves, and competitive vs non-competitive inhibition.',
  simulationKind: 'enzyme_kinetics',
  initialParams: {
    substrate: 18,
    temp: 37,
    ph: 7.4,
    inhibitor: 'none',
    inhibitorConc: 0,
    optimumTemp: 37,
    optimumPh: 7.4,
    curveView: 'mm',
  },
  formulaLatex: 'v_0 = \\frac{V_{\\max}[S]}{K_m + [S]}',
  examTakeaways: [
    'Competitive inhibition binds reversibly to the active site: high [S] outcompetes inhibitor so true Vmax is still reached while apparent Km rises.',
    'Non-competitive allosteric inhibition alters 3D active-site geometry: Vmax plunges permanently regardless of high [S], while apparent Km remains unchanged.',
    'Beyond optimum temperature or extreme pH, disrupted H-bonds and ionic bonds denature the active site irreversibly (primary peptide bonds remain intact).',
  ],
};

export const BIO_V3_C11_REGULATION_STEPS: StepMechanismSpec = {
  type: 'step_mechanism',
  id: 'bio-v3-c11-regulation-steps',
  title: 'HL Allosteric End-Product Feedback (Isoleucine) & Penicillin Inhibition (C1.1.14–C1.1.17)',
  caption:
    'Contrast reversible allosteric metabolic control (Threonine Deaminase) against irreversible mechanism-based suicide inhibition (Penicillin).',
  palette: 'scientific',
  nodes: [
    n('thr', '1. L-Threonine Substrate', 110, 110, 'Committed biosynthetic precursor'),
    n('e1', '2. Allosteric Enzyme 1', 355, 110, 'Active site + separate regulatory site'),
    n('ile', '3. L-Isoleucine Product', 635, 110, 'Final pathway amino acid'),
    n('conformation', '4. Allosteric Shape Shift', 535, 295, 'Lowers active-site affinity safely'),
    n('penicillin', 'Contrast: Penicillin Block', 195, 295, 'Irreversible covalent transpeptidase inactivation'),
  ],
  edges: [
    e('e1', 'thr', 'e1', '5-enzyme pathway'),
    e('e2', 'e1', 'ile', 'Synthesizes isoleucine'),
    e('e3', 'ile', 'conformation', 'Excess binds allosteric pocket'),
    e('e4', 'conformation', 'e1', 'Reversible feedback shutdown'),
  ],
  steps: [
    sf(
      1,
      'Uninhibited Multi-Step Biosynthetic Pathway',
      'L-Threonine enters Enzyme 1 (threonine deaminase) and converts across four intermediates (E2–E5) into L-Isoleucine.',
      ['thr', 'e1', 'ile'],
      ['e1', 'e2'],
      [{ label: 'Committed Step', value: 'Enzyme 1 (Threonine deaminase)' }]
    ),
    sf(
      2,
      'Excess L-Isoleucine Triggers Non-Competitive Allosteric Feedback',
      'Once isoleucine accumulates above translation demand, end-product molecules bind reversibly to Enzyme 1\'s **allosteric site** (distinct from its catalytic site), altering tertiary conformation and halting step 1 so zero wasteful intermediates accumulate.',
      ['ile', 'conformation'],
      ['e3'],
      [{ label: 'Binding Site', value: 'Allosteric pocket (away from active site)' }]
    ),
    sf(
      3,
      'Homeostatic Relief When Isoleucine Concentration Falls',
      'When protein synthesis consumes cytoplasmic isoleucine, bound effector dissociates from the allosteric pocket, restoring active-site geometry and pathway flux smoothly.',
      ['conformation', 'e1'],
      ['e4'],
      [{ label: 'Reversibility', value: 'Fully reversible non-covalent binding' }]
    ),
    sf(
      4,
      'HL Contrast: Mechanism-Based Irreversible Inhibition (Penicillin vs Statins)',
      'Whereas statins act as reversible competitive inhibitors of HMG-CoA reductase, **penicillin** acts as an irreversible covalent inhibitor whose strained β-lactam ring acylates bacterial **DD-transpeptidase**, weakening peptidoglycan crosslinks until bacteria burst osmotically.',
      ['penicillin'],
      [],
      [{ label: 'Penicillin Mechanism', value: 'Irreversible covalent active-site bond' }]
    ),
  ],
};

export const BIO_V3_C11_RATE_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'bio-v3-c11-rate-worked',
  title: 'Worked Kinetics & Adenylate Kinase DBQ (Allott pp.351–355, Km & Slope)',
  caption:
    'Extract initial reaction rate (v0) from linear tangents, distinguish competitive vs non-competitive inhibition via Vmax/Km, and explain thermophilic adenylate kinase profiles.',
  sourceLabel: 'Allott & Mindorff (2023) C1.1 DBQ pp.351–355',
  commandTerm: 'Calculate & Deduce',
  marks: 5,
  problemMarkdown:
    'Catalase releases `4.2 cm³` O2 over the linear initial `0–10 s` phase at `[H2O2] = 0.050 mol dm⁻³`. Kinetic titration yields `Vmax = 1.20 cm³ s⁻¹` and `Km = 0.032 mol dm⁻³`. With Inhibitor X, `Vmax` remains `1.20 cm³ s⁻¹` while apparent `Km` rises to `0.064 mol dm⁻³`. With Inhibitor Y, `Vmax` falls to `0.60 cm³ s⁻¹` while `Km` stays `0.032 mol dm⁻³`. Calculate `v0`, diagnose X & Y, and link to Allott p.351 adenylate kinase temperature curves.',
  givenData: [
    '0–10 s O2 volume = 4.2 cm³ (initial tangent)',
    'Control: Vmax = 1.20 cm³ s⁻¹, Km = 0.032 mol dm⁻³',
    'Inhibitor X: Vmax = 1.20 cm³ s⁻¹, Km = 0.064 mol dm⁻³',
    'Inhibitor Y: Vmax = 0.60 cm³ s⁻¹, Km = 0.032 mol dm⁻³',
  ],
  steps: [
    wstep(
      1,
      'Calculate Initial Rate v0 Over the 0–10 s Linear Interval',
      'Divide change in O2 volume by elapsed initial time before H2O2 depletion curves the trace.',
      'Initial slope equals true velocity unaffected by substrate exhaustion or reverse reactions.',
      'v_0 = \\frac{4.2\\text{ cm}^3}{10\\text{ s}} = 0.42\\text{ cm}^3\\text{ s}^{-1}',
      'M1'
    ),
    wstep(
      2,
      'Diagnose Inhibitor X (Competitive) vs Inhibitor Y (Non-Competitive)',
      'Inhibitor X leaves Vmax untouched (saturating [S] outcompetes X) while doubling apparent Km -> competitive. Inhibitor Y cuts Vmax 50% regardless of [S] while leaving Km 0.032 -> non-competitive.',
      'Km measures half-maximal saturation concentration; Vmax reflects active enzyme pool.',
      'X:\\; V_{\\max}\'=V_{\\max},\\;K_m\'>K_m \\;(\\text{Comp.})\\quad Y:\\; V_{\\max}\'=0.5V_{\\max},\\;K_m\'=K_m \\;(\\text{Non-Comp.})',
      'A2'
    ),
    wstep(
      3,
      'Explain Thermophilic vs Psychrophilic Adenylate Kinase Curves (Allott p.351)',
      'Arctic/psychrophilic adenylate kinase peaks early (~25–35 °C) with loose flexible loops enabling cold catalysis, whereas thermophilic archaeal variants resist unfolding beyond 75 °C due to dense internal salt bridges, disulfide bonds, and hydrophobic cores.',
      'Structure determines thermal stability threshold across habitats.',
      undefined,
      'E2'
    ),
  ],
  finalAnswerMarkdown:
    '**v0 = 0.42 cm³ s⁻¹**; Inhibitor X = **competitive** (Km doubled, Vmax preserved); Inhibitor Y = **non-competitive** (Vmax halved, Km unchanged).',
  commonTrapMarkdown:
    'Never calculate enzyme rate from the plateau height at t = 60 s—always take ΔProduct / Δt over the initial straight-line segment.',
};

export const BIO_V3_C12_RESPIRATION_SIM: ScientificSimulationSpec = {
  type: 'scientific_simulation',
  id: 'bio-v3-c12-respiration-sim',
  title: 'Interactive Cellular Respiration Flux & Fermentation Lab (C1.2)',
  caption:
    'Modulate O2 %, glucose supply, temperature, and organism (mammalian skeletal muscle vs Saccharomyces yeast) to track aerobic ATP vs lactate/ethanol fermentation.',
  simulationKind: 'respiration_photosynthesis_flux',
  initialParams: {
    pathway: 'respiration',
    light: 50,
    co2: 400,
    temp: 37,
    o2: 85,
    glucose: 70,
    organism: 'mammalian_muscle',
  },
  formulaLatex: '\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\longrightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + 30\\text{–}32\\text{ ATP}',
  examTakeaways: [
    'Anaerobic glycolysis generates only +2 net ATP per glucose solely to keep NAD+ recycled cleanly for triose phosphate oxidation.',
    'Mammalian lactate fermentation produces ZERO CO2, whereas yeast alcoholic fermentation converts pyruvate -> ethanal + CO2 -> ethanol.',
    'Lipids yield ~2x energy via β-oxidation (acetyl-CoA) + cristae ETC, but CANNOT yield ATP anaerobically.',
  ],
};

export const BIO_V3_C12_MITOCHONDRION_ETC_EXPLORER: LabeledExplorerSpec = {
  type: 'labeled_explorer',
  id: 'bio-v3-c12-mitochondrion-etc-explorer',
  title: 'Cell Respiration Architecture: Matrix Pathways & Cristae Chemiosmosis (C1.2)',
  caption:
    'Trace glycolysis, link decarboxylation, Krebs cycle redox yields, and HL Complex I–IV chemiosmosis (2.5 ATP/NADH, 1.5 ATP/FADH2).',
  palette: 'scientific',
  viewBox: '0 0 800 440',
  shapes: [
    ...plateBg('Cytosolic Glycolysis + Matrix Link & Krebs Cycle', 'C1.2.1–C1.2.8 · Substrate phosphorylation makes 4 net ATP alongside 10 NADH + 2 FADH2 per glucose.'),
    { kind: 'rect', x: 40, y: 95, width: 215, height: 290, rx: 14, fill: '#0f172a', stroke: '#38bdf8', strokeWidth: 2, hotspotId: 'glycolysis' },
    { kind: 'text', x: 147, y: 126, text: 'CYTOSOL: Glycolysis', fontSize: 13, fontWeight: '700', fill: '#38bdf8', textAnchor: 'middle' },
    { kind: 'text', x: 147, y: 162, text: 'Glucose (6C) + 2 ATP', fontSize: 11, fill: '#cbd5e1', textAnchor: 'middle' },
    { kind: 'text', x: 147, y: 192, text: '-> Hexose bisphosphate -> 2 TP', fontSize: 11, fill: '#fde68a', textAnchor: 'middle' },
    { kind: 'text', x: 147, y: 232, text: 'Oxidation -> 2 NADH', fontSize: 12, fontWeight: '700', fill: '#6ee7b7', textAnchor: 'middle' },
    { kind: 'text', x: 147, y: 262, text: '+ 4 ATP (Net +2 ATP)', fontSize: 12, fontWeight: '700', fill: '#6ee7b7', textAnchor: 'middle' },
    { kind: 'text', x: 147, y: 300, text: '-> 2x Pyruvate (3C)', fontSize: 12, fontWeight: '700', fill: '#f9a8d4', textAnchor: 'middle' },
    { kind: 'text', x: 147, y: 344, text: 'No O2 -> Lactate / Yeast EtOH+CO2', fontSize: 10, fill: '#94a3b8', textAnchor: 'middle' },

    { kind: 'rect', x: 280, y: 95, width: 210, height: 290, rx: 14, fill: '#0f172a', stroke: '#f59e0b', strokeWidth: 2, hotspotId: 'link' },
    { kind: 'text', x: 385, y: 126, text: 'LINK REACTION (x2)', fontSize: 13, fontWeight: '700', fill: '#fbbf24', textAnchor: 'middle' },
    { kind: 'text', x: 385, y: 175, text: 'Pyruvate (3C) + CoA', fontSize: 12, fill: '#e2e8f0', textAnchor: 'middle' },
    { kind: 'text', x: 385, y: 210, text: 'Decarboxylation -> CO2', fontSize: 12, fontWeight: '700', fill: '#fca5a5', textAnchor: 'middle' },
    { kind: 'text', x: 385, y: 242, text: 'Oxidation -> NADH', fontSize: 12, fontWeight: '700', fill: '#6ee7b7', textAnchor: 'middle' },
    { kind: 'text', x: 385, y: 278, text: '-> Acetyl-CoA (2C)', fontSize: 12, fontWeight: '700', fill: '#fde68a', textAnchor: 'middle' },
    { kind: 'text', x: 385, y: 332, text: 'Fatty acid β-oxidation enters here!', fontSize: 10, fill: '#94a3b8', textAnchor: 'middle' },

    { kind: 'rect', x: 515, y: 95, width: 245, height: 290, rx: 14, fill: '#0f172a', stroke: '#10b981', strokeWidth: 2, hotspotId: 'krebs' },
    { kind: 'text', x: 637, y: 126, text: 'KREBS CYCLE (x2 / glucose)', fontSize: 13, fontWeight: '700', fill: '#34d399', textAnchor: 'middle' },
    { kind: 'circle', cx: 637, cy: 222, r: 62, fill: 'none', stroke: '#34d399', strokeWidth: 4, hotspotId: 'krebs' },
    { kind: 'text', x: 637, y: 178, text: 'Citrate (6C)', fontSize: 11, fontWeight: '700', fill: '#fde68a', textAnchor: 'middle' },
    { kind: 'text', x: 637, y: 218, text: '2CO2 + 3NADH', fontSize: 11, fill: '#e2e8f0', textAnchor: 'middle' },
    { kind: 'text', x: 637, y: 236, text: '+ 1FADH2 + 1ATP', fontSize: 11, fill: '#e2e8f0', textAnchor: 'middle' },
    { kind: 'text', x: 637, y: 272, text: 'Oxaloacetate (4C)', fontSize: 11, fontWeight: '700', fill: '#7dd3fc', textAnchor: 'middle' },
    { kind: 'text', x: 637, y: 344, text: 'Per glucose: 4CO2, 6NADH, 2FADH2, 2ATP', fontSize: 10, fill: '#cbd5e1', textAnchor: 'middle' },
  ],
  hotspots: [
    hs('glycolysis', 'Glycolysis: Phosphorylation, Lysis & NAD+ Reduction', 147, 225, 'Cytosol', 'net +2 ATP without oxygen', 'Two ATP phosphorylate glucose before cleavage into two 3C triose phosphates, oxidized to 2 pyruvate with net +2 ATP and 2 NADH. Anaerobically, pyruvate accepts H to regenerate NAD+ as lactate (zero CO2) or ethanol + CO2.'),
    hs('link', 'Link Reaction & Acetyl-CoA Lipid Entry Hub', 385, 225, 'Matrix Link', 'oxidative decarboxylation -> CO2', 'Pyruvate loses CO2 and transfers H to NAD+, forming 2C acetyl-CoA in the mitochondrial matrix. Fatty acids also enter metabolism here via β-oxidation to acetyl-CoA + NADH + FADH2.'),
    hs('krebs', 'Krebs Citric Acid Cycle (4C + 2C -> 6C -> 4C)', 637, 222, 'Matrix Cycle', 'substrate-level ATP + redox carriers', 'Acetyl-CoA joins 4C oxaloacetate to make 6C citrate; two decarboxylations and four oxidations regenerate oxaloacetate while charging 6 NADH, 2 FADH2, 2 ATP, and 4 CO2 per glucose.'),
  ],
  views: [
    makeView(
      'cristae-etc',
      'HL Cristae ETC & ATP Synthase',
      'C1.2.9–C1.2.15 HL · Complexes I–IV proton pumping, O2 terminal acceptor, and rotary FoF1 ATP synthase.',
      'Mitochondrial Cristae ETC, Chemiosmosis & Terminal Oxygen Reduction',
      [
        { kind: 'rect', x: 45, y: 170, width: 710, height: 74, rx: 14, fill: '#1e293b', stroke: '#fbbf24', strokeWidth: 3 },
        { kind: 'text', x: 400, y: 98, text: 'INTERMEMBRANE SPACE (Tiny volume · High [H+] proton reservoir)', fontSize: 13, fontWeight: '700', fill: '#fda4af', textAnchor: 'middle' },
        { kind: 'text', x: 400, y: 348, text: 'MITOCHONDRIAL MATRIX (Low [H+])', fontSize: 13, fontWeight: '700', fill: '#7dd3fc', textAnchor: 'middle' },
        { kind: 'rect', x: 85, y: 154, width: 84, height: 106, rx: 10, fill: '#38bdf8', hotspotId: 'c12' },
        { kind: 'text', x: 127, y: 212, text: 'Complex I', fontSize: 12, fontWeight: '700', fill: '#082f49', textAnchor: 'middle' },
        { kind: 'rect', x: 215, y: 178, width: 78, height: 74, rx: 10, fill: '#64748b', hotspotId: 'c12' },
        { kind: 'text', x: 254, y: 220, text: 'II (FADH2)', fontSize: 11, fontWeight: '700', fill: '#f8fafc', textAnchor: 'middle' },
        { kind: 'rect', x: 335, y: 154, width: 84, height: 106, rx: 10, fill: '#a78bfa', hotspotId: 'c12' },
        { kind: 'text', x: 377, y: 212, text: 'Complex III', fontSize: 12, fontWeight: '700', fill: '#1e1b4b', textAnchor: 'middle' },
        { kind: 'rect', x: 465, y: 154, width: 84, height: 106, rx: 10, fill: '#ec4899', hotspotId: 'o2' },
        { kind: 'text', x: 507, y: 212, text: 'Complex IV', fontSize: 12, fontWeight: '700', fill: '#fdf2f8', textAnchor: 'middle' },
        { kind: 'text', x: 507, y: 300, text: '½O2 + 2e⁻ + 2H+ -> H2O', fontSize: 11, fontWeight: '700', fill: '#fca5a5', textAnchor: 'middle' },
        { kind: 'rect', x: 615, y: 146, width: 98, height: 122, rx: 16, fill: '#10b981', stroke: '#6ee7b7', strokeWidth: 3, hotspotId: 'fof1' },
        { kind: 'text', x: 664, y: 204, text: 'ATP Synthase', fontSize: 12, fontWeight: '700', fill: '#022c22', textAnchor: 'middle' },
        { kind: 'text', x: 664, y: 224, text: '(FoF1 Rotor)', fontSize: 11, fontWeight: '700', fill: '#022c22', textAnchor: 'middle' },
        { kind: 'line', x1: 664, y1: 124, x2: 664, y2: 298, stroke: '#34d399', strokeWidth: 5, hotspotId: 'fof1' },
        { kind: 'text', x: 664, y: 320, text: 'ADP + Pi -> 30–32 ATP', fontSize: 12, fontWeight: '700', fill: '#6ee7b7', textAnchor: 'middle' },
      ],
      [
        hs('c12', 'Complex I (NADH · 2.5 ATP) vs Complex II (FADH2 · 1.5 ATP)', 185, 210, 'Redox Pumping', '2.5 vs 1.5 ATP yield', 'NADH enters at Complex I pumping H+ via Complexes I, III, and IV (~2.5 ATP). FADH2 bypasses I via Complex II, pumping fewer H+ via III & IV (~1.5 ATP).'),
        hs('o2', 'Complex IV & Oxygen Terminal Electron Acceptor', 507, 212, 'Oxidative Phosphorylation', 'terminal electron + proton acceptor', 'Oxygen accepts low-energy electrons at Complex IV and binds 2 matrix H+ to form metabolic water—without O2 (or under cyanide block), the entire ETC and Krebs cycle jam.'),
        hs('fof1', 'Chemiosmosis & Rotary FoF1 ATP Synthase', 664, 212, 'Chemiosmosis', 'proton-motive force drives ADP+Pi', 'H+ ions rush down the steep electrochemical gradient through the transmembrane Fo turbine, rotating the catalytic F1 headpiece to condense ADP + Pi into ~30–32 net ATP per glucose.'),
      ]
    ),
  ],
};

export const BIO_V3_C12_ATP_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'bio-v3-c12-atp-worked',
  title: 'Worked ATP Stoichiometry & Kangaroo Rat / Respirometer RQ DBQ (C1.2)',
  caption:
    'Reconcile modern 30–32 net ATP per glucose accounting alongside Respiratory Quotient (RQ) and metabolic water production in desert mammals.',
  sourceLabel: 'Allott & Mindorff (2023) C1.2 pp.375–383',
  commandTerm: 'Calculate & Explain',
  marks: 5,
  problemMarkdown:
    'Desert kangaroo rats (*Dipodomys*) oxidize dry seed lipids (`palmitate C16H32O2 + 23 O2 -> 16 CO2 + 16 H2O`, `M = 256 g mol⁻¹`) and glucose (`C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O`, `M = 180 g mol⁻¹`). `(a)` Compute modern HL net ATP per glucose using `2.5 ATP/matrix NADH`, `1.5 ATP/FADH2`, and `1.5–2.5 ATP/cytosolic NADH`. `(b)` Compute `RQ` and metabolic water yield (`g H2O / g fuel`) for both.',
  givenData: [
    'Per glucose: 4 substrate ATP + 8 matrix NADH + 2 cytosolic NADH + 2 FADH2',
    'Palmitate (256 g mol⁻¹): +23 O2 -> 16 CO2 + 16 H2O',
    'Glucose (180 g mol⁻¹): +6 O2 -> 6 CO2 + 6 H2O',
  ],
  steps: [
    wstep(
      1,
      'Sum Modern Aerobic ATP Accounting (30–32 Net ATP / Glucose)',
      '4 substrate ATP + (8 x 2.5 = 20) + (2 x 1.5 = 3) + 2 cytosolic NADH shuttles (3 to 5 ATP depending on glycerol-3-phosphate vs malate-aspartate shuttle).',
      'Matches 2023 IB syllabus stoichiometry (replaces legacy 36–38 ATP textbook numbers).',
      '\\text{Net ATP} = 4 + 20 + 3 + [3\\text{ to }5] = 30\\text{ to }32\\text{ ATP}',
      'M1+A1'
    ),
    wstep(
      2,
      'Calculate Respiratory Quotient (RQ = CO2 / O2) for Carbohydrate vs Lipid',
      'Divide stoichiometric CO2 released by O2 consumed.',
      'Lipids are more reduced, requiring extra O2 to form water -> lower RQ (~0.70).',
      '\\text{RQ}_{\\text{glucose}} = \\frac{6}{6} = 1.00;\\quad \\text{RQ}_{\\text{palmitate}} = \\frac{16}{23} \\approx 0.70',
      'A1'
    ),
    wstep(
      3,
      'Compare Metabolic Water Yield per Gram Oxidized',
      'Fat oxidation generates nearly double the Complex IV metabolic water per gram compared with carbohydrates, explaining how non-drinking desert kangaroo rats stay hydrated.',
      'Links Terminal O2 acceptance directly to desert survival.',
      '\\text{H}_2\\text{O}_{\\text{fat}} = \\frac{16\\times 18}{256} = 1.13\\text{ g g}^{-1}\\text{ vs }\\frac{6\\times 18}{180} = 0.60\\text{ g g}^{-1}\\text{ glucose}',
      'A1+E1'
    ),
  ],
  finalAnswerMarkdown:
    'Net ATP = **30–32 ATP/glucose**; RQ = **1.00** (carb) vs **0.70** (lipid); Lipid produces **1.13 g H2O/g** vs **0.60 g H2O/g** for glucose.',
  commonTrapMarkdown:
    'Note that KOH / soda lime absorbs CO2 inside respirometers so piston movement measures net O2 uptake directly.',
};

export const BIO_V3_C13_PHOTOSYNTHESIS_SIM: ScientificSimulationSpec = {
  type: 'scientific_simulation',
  id: 'bio-v3-c13-photosynthesis-sim',
  title: 'Interactive Photosynthesis Limiting-Factors Lab (Blackman Light, CO2 & Temp, C1.3)',
  caption:
    'Vary light intensity (%), CO2 ppm, and temperature (°C) to spot Blackman limiting-factor transitions, compensation points, and thermal enzyme decline.',
  simulationKind: 'respiration_photosynthesis_flux',
  initialParams: {
    pathway: 'photosynthesis',
    light: 60,
    co2: 400,
    temp: 25,
    o2: 21,
    glucose: 50,
    organism: 'mammalian_muscle',
  },
  formulaLatex: '6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light, Chl}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2',
  examTakeaways: [
    'On the ascending slope, light limits PSII/PSI ATP + NADPH production; on the plateau, either CO2 concentration or Rubisco thermal kinetics is limiting.',
    'At the light compensation point, gross photosynthetic CO2 uptake exactly equals cellular respiratory CO2 release (zero net gas exchange).',
    'Above ~35–40 °C, Rubisco photorespiration and Calvin enzyme denaturation pull photosynthetic rate sharply downward even at bright light and high CO2.',
  ],
};

export const BIO_V3_C13_THYLAKOID_ZSCHEME_EXPLORER: LabeledExplorerSpec = {
  type: 'labeled_explorer',
  id: 'bio-v3-c13-thylakoid-zscheme-explorer',
  title: 'Photosystems (Z-Scheme), Jagendorf Acid Bath & Calvin Cycle (C1.3)',
  caption:
    'Explore chlorophyll absorption vs action spectra, thylakoid photolysis -> PQ -> Cyt b6f -> PSI -> NADP+ reductase, and Calvin carbon fixation.',
  palette: 'scientific',
  viewBox: '0 0 800 440',
  shapes: [
    ...plateBg('Light-Dependent Z-Scheme & Jagendorf Acid Bath Proof (C1.3 HL)', 'PSII splits H2O in thylakoid lumen; PQ pumps H+ via Cyt b6f; PSI reduces NADP+ into stromal NADPH + ATP.'),
    { kind: 'rect', x: 42, y: 168, width: 716, height: 76, rx: 14, fill: '#064e3b', stroke: '#34d399', strokeWidth: 3 },
    { kind: 'text', x: 400, y: 98, text: 'STROMA (pH ~8.0 · Low [H+] · Calvin Cycle Site)', fontSize: 13, fontWeight: '700', fill: '#6ee7b7', textAnchor: 'middle' },
    { kind: 'text', x: 400, y: 348, text: 'THYLAKOID LUMEN (pH ~5.0 · High [H+] · Jagendorf pH 4->8 Bath Proof)', fontSize: 13, fontWeight: '700', fill: '#fbbf24', textAnchor: 'middle' },
    { kind: 'rect', x: 85, y: 150, width: 90, height: 112, rx: 12, fill: '#10b981', hotspotId: 'ps2' },
    { kind: 'text', x: 130, y: 210, text: 'PSII (P680)', fontSize: 12, fontWeight: '700', fill: '#022c22', textAnchor: 'middle' },
    { kind: 'text', x: 130, y: 294, text: '2H2O -> O2 + 4H+ + 4e⁻', fontSize: 11, fontWeight: '700', fill: '#7dd3fc', textAnchor: 'middle' },
    { kind: 'circle', cx: 245, cy: 206, r: 22, fill: '#fbbf24', hotspotId: 'pq' },
    { kind: 'text', x: 245, y: 211, text: 'PQ', fontSize: 12, fontWeight: '700', fill: '#451a03', textAnchor: 'middle' },
    { kind: 'rect', x: 315, y: 152, width: 84, height: 108, rx: 10, fill: '#0284c7', hotspotId: 'pq' },
    { kind: 'text', x: 357, y: 210, text: 'Cyt b6f (H+)', fontSize: 11, fontWeight: '700', fill: '#f0f9ff', textAnchor: 'middle' },
    { kind: 'rect', x: 445, y: 150, width: 90, height: 112, rx: 12, fill: '#34d399', hotspotId: 'psi' },
    { kind: 'text', x: 490, y: 210, text: 'PSI (P700)', fontSize: 12, fontWeight: '700', fill: '#022c22', textAnchor: 'middle' },
    { kind: 'rect', x: 570, y: 152, width: 80, height: 62, rx: 10, fill: '#a78bfa', hotspotId: 'psi' },
    { kind: 'text', x: 610, y: 186, text: 'NADP+ Red.', fontSize: 11, fontWeight: '700', fill: '#1e1b4b', textAnchor: 'middle' },
    { kind: 'text', x: 610, y: 136, text: 'NADPH (Stroma)', fontSize: 11, fontWeight: '700', fill: '#ddd6fe', textAnchor: 'middle' },
    { kind: 'rect', x: 670, y: 148, width: 74, height: 116, rx: 14, fill: '#f59e0b', hotspotId: 'pq' },
    { kind: 'text', x: 707, y: 208, text: 'ATP Synth.', fontSize: 11, fontWeight: '700', fill: '#451a03', textAnchor: 'middle' },
    { kind: 'text', x: 707, y: 136, text: 'ATP (Stroma)', fontSize: 11, fontWeight: '700', fill: '#fde68a', textAnchor: 'middle' },
  ],
  hotspots: [
    hs('ps2', 'Photosystem II (P680) & Lumen Photolysis', 130, 206, 'Photolysis', 'splits water in lumen', 'Photoactivation excites P680 electrons; oxygen-evolving complex splits H2O inside the lumen to replace lost electrons, releasing O2 gas and depositing H+ directly to build ΔpH.'),
    hs('pq', 'Plastoquinone, Cyt b6f & Jagendorf Acid Bath Proof', 357, 206, 'HL Chemiosmosis', 'proton gradient drives dark ATP', 'PQ transfers e⁻ and protons via Cyt b6f into the narrow thylakoid lumen. Jagendorf (1966) proved ΔpH alone drives chloroplast ATP synthase by shifting dark pH 4 thylakoids abruptly into pH 8 buffer + ADP + Pi—making ATP in zero light!'),
    hs('psi', 'Photosystem I (P700), Stroma NADPH & Cyclic Flow', 545, 195, 'Reduction Output', 'cyclic vs non-cyclic ATP', 'P700 boosts electrons via ferredoxin to NADP+ reductase on the stromal side. Cyclic photophosphorylation routes electrons back from ferredoxin to PQ/Cyt b6f to produce bonus ATP without NADPH or O2.'),
  ],
  views: [
    makeView(
      'calvin-spectra',
      'Calvin Cycle & Spectra',
      'C1.3 · Carbon fixation (Rubisco), GP->TP reduction, RuBP regeneration & absorption/action curves.',
      'Calvin Cycle Stoichiometry + Pigment Absorption vs Action Spectra',
      [
        { kind: 'circle', cx: 235, cy: 235, r: 124, fill: '#0f172a', stroke: '#10b981', strokeWidth: 5, hotspotId: 'rubisco' },
        { kind: 'text', x: 235, y: 142, text: '1. Rubisco: 3 CO2 + 3 RuBP (5C)', fontSize: 12, fontWeight: '700', fill: '#6ee7b7', textAnchor: 'middle' },
        { kind: 'text', x: 235, y: 162, text: '-> 6 Glycerate-3-Phosphate (GP, 3C)', fontSize: 11, fill: '#e2e8f0', textAnchor: 'middle' },
        { kind: 'text', x: 235, y: 228, text: '2. Reduction (+6 ATP, +6 NADPH)', fontSize: 12, fontWeight: '700', fill: '#fde68a', textAnchor: 'middle' },
        { kind: 'text', x: 235, y: 248, text: '-> 6 Triose Phosphate (TP, 3C)', fontSize: 11, fill: '#e2e8f0', textAnchor: 'middle' },
        { kind: 'text', x: 235, y: 310, text: '1 TP -> Glucose/Lipid/AA · 5 TP -> 3 RuBP', fontSize: 11, fontWeight: '700', fill: '#7dd3fc', textAnchor: 'middle' },

        { kind: 'rect', x: 425, y: 102, width: 335, height: 270, rx: 14, fill: '#0f172a', stroke: '#38bdf8', strokeWidth: 2, hotspotId: 'spectra' },
        { kind: 'text', x: 592, y: 132, text: 'Absorption vs Engelmann Action Spectrum', fontSize: 13, fontWeight: '700', fill: '#38bdf8', textAnchor: 'middle' },
        { kind: 'path', d: 'M 455 322 Q 485 170 505 265 Q 545 318 625 315 Q 675 215 705 322', fill: 'none', stroke: '#34d399', strokeWidth: 4, hotspotId: 'spectra' },
        { kind: 'path', d: 'M 455 310 Q 492 195 520 278 Q 575 292 640 295 Q 685 200 715 315', fill: 'none', stroke: '#fbbf24', strokeWidth: 3, hotspotId: 'spectra' },
        { kind: 'text', x: 500, y: 162, text: 'Blue 450nm', fontSize: 11, fontWeight: '700', fill: '#93c5fd', textAnchor: 'middle' },
        { kind: 'text', x: 690, y: 188, text: 'Red 670nm', fontSize: 11, fontWeight: '700', fill: '#fca5a5', textAnchor: 'middle' },
        { kind: 'text', x: 592, y: 292, text: 'Green ~550nm valley (reflected!)', fontSize: 11, fill: '#86efac', textAnchor: 'middle' },
      ],
      [
        hs('rubisco', 'Rubisco Carbon Fixation, GP Reduction & RuBP Regeneration', 235, 225, 'Stroma Calvin Cycle', '6 CO2 + 18 ATP + 12 NADPH -> C6H12O6', 'Rubisco fixes CO2 onto 5C RuBP yielding 3C GP, reduced by stromal ATP + NADPH into triose phosphate (TP); 5 of every 6 TP molecules regenerate RuBP using 3 extra ATP.'),
        hs('spectra', 'Chlorophyll a/b Absorption vs Action Spectrum & Rf', 592, 240, 'Photobiology', 'red/blue peaks vs green reflection', 'Chlorophylls absorb violet-blue (~430–470 nm) and orange-red (~640–680 nm), reflecting green (~550 nm). Carotenoids broaden green-blue action efficiency and protect against photo-oxidative damage; paper chromatography calculates Rf = pigment / solvent distance.'),
      ]
    ),
  ],
};

export const BIO_V3_C13_CALVIN_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'bio-v3-c13-calvin-worked',
  title: 'Worked Calvin Stoichiometry & Bassham ³²P/¹⁴C Radiotracer DBQ (Allott pp.407–409)',
  caption:
    'Balance ATP/NADPH requirements per net hexose (1.5:1 bridging via cyclic PSI) and deduce Bassham [GP] and [RuBP] shifts when light or CO2 drops.',
  sourceLabel: 'Allott & Mindorff (2023) C1.3 pp.407–409 (Bassham DBQ)',
  commandTerm: 'Calculate & Deduce',
  marks: 5,
  problemMarkdown:
    'Using Calvin–Benson stoichiometry: `(a)` Calculate CO2, ATP, and NADPH needed for `1` net hexose (`C6H12O6`) and explain why chloroplasts run cyclic photophosphorylation. `(b)` Predict `[GP]` and `[RuBP]` trajectories in Bassham\'s ¹⁴CO2 lollipop experiment immediately when `(i)` light turns OFF and `(ii)` CO2 falls to `0.003%` under constant light.',
  givenData: [
    'Per 3 CO2 fixed: 6 ATP + 6 NADPH reduction, +3 ATP RuBP regeneration, exporting 1 net 3C TP',
    'Linear Z-scheme supply ≈ 1.28 ATP : 1.00 NADPH',
  ],
  steps: [
    wstep(
      1,
      'Calculate Total Inputs for 1 Net Hexose (2 Triose Phosphates)',
      'Double the 3-CO2 cycle: 6 CO2 require 18 ATP and 12 NADPH (1.50 ATP : 1.00 NADPH).',
      'Exporting two 3C TP molecules yields one 6C glucose.',
      '\\text{Net: }6\\text{ CO}_2 + 18\\text{ ATP} + 12\\text{ NADPH} \\longrightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6;\\quad \\frac{\\text{ATP}}{\\text{NADPH}} = \\frac{18}{12} = 1.50',
      'M1+A1'
    ),
    wstep(
      2,
      'Explain Cyclic PSI Compensation for the 1.50 ATP : NADPH Demand',
      'Non-cyclic Z-scheme electron flow produces ~1.28 ATP per NADPH—too little ATP—so PSI diverts reduced ferredoxin back into PQ/Cyt b6f to pump additional H+ and synthesize pure ATP without generating excess NADPH.',
      'Prevents NADPH buildup from stalling light reactions.',
      undefined,
      'E1'
    ),
    wstep(
      3,
      'Deduce Bassham Metabolite Pool Shifts (Allott p.408)',
      '(i) Light OFF -> ATP/NADPH stop -> GP cannot convert to TP so [GP] SPIKES transiently while RuBP regeneration halts so [RuBP] PLUNGES. (ii) Low CO2 in bright light -> Rubisco stalls so [RuBP] ACCUMULATES while existing GP continues converting into TP -> [GP] PLUNGES.',
      'Track BOTH synthesis and consumption fluxes around each metabolite.',
      undefined,
      'A2'
    ),
  ],
  finalAnswerMarkdown:
    '1 hexose = **6 CO2 + 18 ATP + 12 NADPH** (cyclic PSI covers 1.50:1 ATP deficit); Light OFF: **[GP] rises, [RuBP] drops**; Low CO2: **[RuBP] rises, [GP] drops**.',
  commonTrapMarkdown:
    'State BOTH reasons why a pool rises or falls: continued synthesis from upstream + blocked downstream enzyme consumption.',
};

export const BIO_V3_D23_WATER_POTENTIAL_SIM: ScientificSimulationSpec = {
  type: 'scientific_simulation',
  id: 'bio-v3-d23-water-potential-sim',
  title: 'Interactive Water Potential (Ψw = Ψs + Ψp) & Osmosis Lab (D2.3 HL)',
  caption:
    'Simulate walled plant vs wall-less animal cells across hypotonic, isotonic, and hypertonic solute baths, tracking turgor equilibrium and plasmolysis.',
  simulationKind: 'water_potential_osmosis',
  initialParams: {
    cellType: 'plant',
    psiSExt: -0.2,
    psiSCell: -0.65,
    psiP: 0.25,
  },
  formulaLatex: '\\Psi_w = \\Psi_s + \\Psi_p \\qquad (\\Psi_s \\le 0,\\; \\text{pure water }\\Psi_w = 0\\text{ MPa})',
  examTakeaways: [
    'Water ALWAYS flows passively by osmosis from HIGHER (less negative) Ψw toward LOWER (more negative) Ψw until Ψw_cell = Ψw_ext.',
    'Solute potential Ψs is ALWAYS <= 0 MPa; cell wall turgor Ψp >= 0 offsets negative Ψs in turgid plants while Ψp ≈ 0 in animal cells (causing lysis in pure water).',
    'Isotonic medical saline = 0.154 mol dm⁻³ NaCl (≈ −0.74 MPa) prevents fatal erythrocyte haemolysis.',
  ],
};

export const BIO_V3_D23_TONICITY_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'bio-v3-d23-tonicity-matrix',
  title: 'Water Potential Equilibrium, Tonicity & Clinical Saline (Allott D2.3 pp.651–662)',
  caption:
    'Compare plant vs animal responses, 0.154 M isotonic medical saline, and compatible-solute drought osmoregulation in oak and maize.',
  columns: ['Bathing Solution Condition', 'Animal Cell (No Wall, Ψp = 0)', 'Plant Cell (Cellulose Wall, Ψp >= 0)', 'Quantitative Ψw Criterion'],
  rows: [
    row('Hypotonic (High external Ψw ≈ 0 MPa)', ['Water enters -> swells and bursts (CYTOLYSIS / haemolysis)', 'Water enters -> vacuole swells against cellulose wall until Ψp rises so Ψw_cell = Ψw_ext (TURGID)', 'Ψw_ext > Ψw_cell -> net inward ΔΨw']),
    row('Isotonic (Medical Saline = 0.154 mol dm⁻³ NaCl)', ['Zero net water movement; biconcave RBC shape preserved', 'Flaccid / incipient balance (Ψp = 0 if bath equals Ψs_cell)', 'Ψw_ext = Ψw_cell']),
    row('Hypertonic (Low negative external Ψw)', ['Water exits -> volume drops & membrane puckers (CRENATION)', 'Protoplast shrinks pulling membrane away from wall (PLASMOLYSIS, Ψp = 0)', 'Ψw_ext < Ψw_cell -> net outward ΔΨw']),
    row('Drought & Freshwater Osmoregulation', ['Kidneys + Paramecium contractile vacuole expel excess water', 'Oak/maize accumulate compatible osmolytes (proline, sugars, K+) to keep Ψw below dry soil', 'More negative Ψs pulls soil moisture safely without enzyme denaturation']),
  ],
};

export const BIO_V3_D23_WATER_POTENTIAL_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'bio-v3-d23-water-potential-worked',
  title: 'Worked Water Potential (Ψw = Ψs + Ψp), Carrot Osmometer & Drought DBQ (Allott pp.655–661)',
  caption:
    'Solve equilibrium turgor pressure Ψp, determine isotonic bath Ψs from 0% mass change, and identify incipient plasmolysis thresholds.',
  sourceLabel: 'Allott & Mindorff (2023) D2.3 Tables 3–5 & pp.655–661',
  commandTerm: 'Calculate & Deduce',
  marks: 4,
  problemMarkdown:
    'Potato cylinders equilibrated in sucrose reach `0.0%` mass change at `0.34 mol dm⁻³` (`Ψs = −0.83 MPa` at `20 °C`). An adjacent plant cell with internal `Ψs = −0.78 MPa` sits `(a)` at full turgor in pure water (`Ψw_ext = 0.00 MPa`) and `(b)` equilibrated in an open sucrose bath at `Ψw_ext = −0.42 MPa`. Calculate equilibrium `Ψp` in `(a)` and `(b)`, and state external `Ψs` causing incipient plasmolysis.',
  givenData: [
    'Intracellular Ψs_cell = −0.78 MPa',
    'Pure water bath Ψw_ext = 0.00 MPa',
    'Open sucrose bath Ψw_ext = −0.42 MPa (Ψp_ext = 0)',
  ],
  steps: [
    wstep(
      1,
      'Solve Full Turgor Pressure Ψp in Pure Water',
      'At dynamic equilibrium in pure water, Ψw_cell equals Ψw_ext = 0.00 MPa.',
      'Rigid cellulose wall pushes back positively against vacuolar expansion.',
      '0.00 = -0.78 + \\Psi_p \\implies \\Psi_p = +0.78\\text{ MPa}',
      'M1'
    ),
    wstep(
      2,
      'Solve Equilibrated Turgor Pressure in −0.42 MPa Bath',
      'Set Ψw_cell = Ψw_ext = −0.42 MPa and rearrange for Ψp.',
      'Lower external water potential reduces inward osmotic drive, lowering wall turgor.',
      '-0.42 = -0.78 + \\Psi_p \\implies \\Psi_p = +0.36\\text{ MPa}',
      'M1+A1'
    ),
    wstep(
      3,
      'State Incipient Plasmolysis Point & Osmometer Calibration Note',
      'Just as the plasma membrane detaches from the cell wall, turgor pressure reaches Ψp = 0.00 MPa, so external bath equals intracellular Ψs = −0.78 MPa (and in Allott Tables 4–5 drought experiments, oak/maize osmoregulate downward via extra solutes so cells stay turgid at lower soil Ψw).',
      'Incipient plasmolysis = exact boundary where Ψp vanishes to zero.',
      '\\Psi_{s,\\text{ext}} = \\Psi_{w,\\text{cell}} = -0.78 + 0.00 = -0.78\\text{ MPa}',
      'A1'
    ),
  ],
  finalAnswerMarkdown:
    'Full-turgor **Ψp = +0.78 MPa**; Bath **−0.42 MPa** turgor **Ψp = +0.36 MPa**; Incipient plasmolysis occurs at **−0.78 MPa**.',
  commonTrapMarkdown:
    'Always preserve negative signs on Ψs (always <= 0) and remember water flows toward the MORE NEGATIVE Ψw.',
};

export const BIO_V3_D11_REPLISOME_EXPLORER: LabeledExplorerSpec = {
  type: 'labeled_explorer',
  id: 'bio-v3-d11-replisome-explorer',
  title: 'D1.1–D1.2 DNA Replisome Fork, Eukaryotic Splicing & Translation',
  caption:
    'Inspect leading vs Okazaki lagging-strand DNA replication alongside eukaryotic promoters, 5\' cap, poly-A tail, TNNT2 alternative splicing, and 80S A/P/E sites.',
  palette: 'scientific',
  viewBox: '0 0 800 440',
  shapes: [
    ...plateBg('Semi-Conservative Replisome Fork: Leading vs Okazaki Strands (D1.1 HL)', 'DNA Pol III builds strictly 5\'->3\'; DNA Pol I excises RNA primers; DNA ligase seals backbone nicks.'),
    { kind: 'path', d: 'M 90 220 H 265 L 430 120 H 715', fill: 'none', stroke: '#38bdf8', strokeWidth: 8, hotspotId: 'helicase' },
    { kind: 'path', d: 'M 90 236 H 265 L 430 336 H 715', fill: 'none', stroke: '#818cf8', strokeWidth: 8, hotspotId: 'helicase' },
    { kind: 'polygon', points: '245,228 315,184 315,272', fill: '#fbbf24', hotspotId: 'helicase' },
    { kind: 'text', x: 290, y: 298, text: 'Helicase (breaks H-bonds)', fontSize: 11, fontWeight: '700', fill: '#fde68a', textAnchor: 'middle' },
    { kind: 'text', x: 155, y: 196, text: 'Gyrase relieves supercoiling', fontSize: 11, fill: '#cbd5e1', textAnchor: 'middle' },
    { kind: 'line', x1: 685, y1: 144, x2: 360, y2: 144, stroke: '#10b981', strokeWidth: 7, hotspotId: 'pol3' },
    { kind: 'circle', cx: 385, cy: 144, r: 15, fill: '#059669', stroke: '#6ee7b7', strokeWidth: 2, hotspotId: 'pol3' },
    { kind: 'text', x: 530, y: 102, text: 'Leading Strand (Continuous 5\'->3\' by DNA Pol III)', fontSize: 12, fontWeight: '700', fill: '#6ee7b7', textAnchor: 'middle' },
    { kind: 'rect', x: 440, y: 302, width: 32, height: 10, fill: '#ec4899', hotspotId: 'okazaki' },
    { kind: 'line', x1: 472, y1: 307, x2: 565, y2: 307, stroke: '#34d399', strokeWidth: 6, hotspotId: 'okazaki' },
    { kind: 'rect', x: 580, y: 302, width: 32, height: 10, fill: '#ec4899', hotspotId: 'okazaki' },
    { kind: 'line', x1: 612, y1: 307, x2: 700, y2: 307, stroke: '#34d399', strokeWidth: 6, hotspotId: 'okazaki' },
    { kind: 'text', x: 568, y: 366, text: 'Lagging Strand: Primase RNA Primer + Okazaki Fragments', fontSize: 12, fontWeight: '700', fill: '#f9a8d4', textAnchor: 'middle' },
    { kind: 'text', x: 568, y: 386, text: 'DNA Pol I replaces RNA primer -> DNA Ligase seals nicks', fontSize: 11, fill: '#cbd5e1', textAnchor: 'middle' },
  ],
  hotspots: [
    hs('helicase', 'DNA Helicase, Topoisomerase (Gyrase) & SSB Proteins', 285, 228, 'Fork Unwinding', 'breaks H-bonds + relieves supercoil', 'Helicase hydrolyzes ATP to break complementary hydrogen bonds ahead of the fork; Gyrase relieves upstream supercoiling torsion while single-strand binding proteins hold templates open.'),
    hs('pol3', 'DNA Polymerase III (Strict 5\'->3\' + 3\'->5\' Proofreading)', 385, 144, 'Leading Synthesis', 'dNTP -> dNMP + PPi + exonuclease', 'Adds dNTPs solely to exposed 3\'-OH ends (releasing energetic pyrophosphate PPi). Leading strand synthesizes continuously toward the fork while 3\'->5\' exonuclease activity immediately proofreads mismatches.'),
    hs('okazaki', 'Primase, Okazaki Fragments, DNA Pol I & DNA Ligase', 565, 310, 'Lagging Maturation', 'discontinuous fragments sealed', 'Primase lays short ~10 nt RNA primers on the lagging template; DNA Pol III extends Okazaki fragments away from the fork, DNA Pol I replaces RNA primers with DNA, and DNA ligase covalently joins phosphate nicks.'),
  ],
  views: [
    makeView(
      'expression-d12',
      'HL Splicing (TNNT2) & 80S Translation',
      'D1.2 HL · Promoters, 5\' cap, poly-A tail, alternative splicing & ribosome A/P/E sites.',
      'D1.2 Gene Expression: Alternative Splicing (TNNT2) & 80S Translation',
      [
        { kind: 'rect', x: 48, y: 88, width: 704, height: 118, rx: 12, fill: '#0f172a', stroke: '#a78bfa', strokeWidth: 2, hotspotId: 'splicing' },
        { kind: 'text', x: 400, y: 114, text: 'EUKARYOTIC PRE-mRNA PROCESSING (Allott pp.585–587)', fontSize: 12, fontWeight: '700', fill: '#c4b5fd', textAnchor: 'middle' },
        { kind: 'rect', x: 70, y: 135, width: 70, height: 32, rx: 6, fill: '#f59e0b', hotspotId: 'cap-poly' },
        { kind: 'text', x: 105, y: 156, text: '5\' G-Cap', fontSize: 11, fontWeight: '700', fill: '#451a03', textAnchor: 'middle' },
        { kind: 'rect', x: 148, y: 135, width: 95, height: 32, rx: 4, fill: '#10b981', hotspotId: 'splicing' },
        { kind: 'text', x: 195, y: 156, text: 'Exon 1', fontSize: 11, fontWeight: '700', fill: '#022c22', textAnchor: 'middle' },
        { kind: 'rect', x: 250, y: 141, width: 90, height: 20, rx: 4, fill: '#475569', stroke: '#94a3b8', strokeDasharray: '4,3', hotspotId: 'splicing' },
        { kind: 'text', x: 295, y: 155, text: 'Intron (Cut)', fontSize: 10, fill: '#e2e8f0', textAnchor: 'middle' },
        { kind: 'rect', x: 348, y: 135, width: 95, height: 32, rx: 4, fill: '#38bdf8', hotspotId: 'splicing' },
        { kind: 'text', x: 395, y: 156, text: 'Exon 5 (TNNT2)', fontSize: 10, fontWeight: '700', fill: '#082f49', textAnchor: 'middle' },
        { kind: 'rect', x: 450, y: 135, width: 95, height: 32, rx: 4, fill: '#10b981', hotspotId: 'splicing' },
        { kind: 'text', x: 497, y: 156, text: 'Exon 6', fontSize: 11, fontWeight: '700', fill: '#022c22', textAnchor: 'middle' },
        { kind: 'rect', x: 554, y: 135, width: 150, height: 32, rx: 6, fill: '#ec4899', hotspotId: 'cap-poly' },
        { kind: 'text', x: 629, y: 156, text: '3\' Poly-A Tail', fontSize: 11, fontWeight: '700', fill: '#fdf2f8', textAnchor: 'middle' },

        { kind: 'rect', x: 48, y: 226, width: 704, height: 175, rx: 12, fill: '#0f172a', stroke: '#38bdf8', strokeWidth: 2 },
        { kind: 'ellipse', cx: 380, cy: 312, rx: 165, ry: 62, fill: '#1e293b', stroke: '#38bdf8', strokeWidth: 3, hotspotId: 'ribosome' },
        { kind: 'rect', x: 275, y: 286, width: 54, height: 58, rx: 8, fill: '#475569', hotspotId: 'ribosome' },
        { kind: 'text', x: 302, y: 320, text: 'E', fontSize: 14, fontWeight: '700', fill: '#f8fafc', textAnchor: 'middle' },
        { kind: 'rect', x: 352, y: 286, width: 56, height: 58, rx: 8, fill: '#10b981', hotspotId: 'ribosome' },
        { kind: 'text', x: 380, y: 320, text: 'P', fontSize: 14, fontWeight: '700', fill: '#022c22', textAnchor: 'middle' },
        { kind: 'rect', x: 430, y: 286, width: 56, height: 58, rx: 8, fill: '#f59e0b', hotspotId: 'ribosome' },
        { kind: 'text', x: 458, y: 320, text: 'A', fontSize: 14, fontWeight: '700', fill: '#451a03', textAnchor: 'middle' },
        { kind: 'text', x: 642, y: 302, text: 'A: Aminoacyl-tRNA binds', fontSize: 11, fontWeight: '700', fill: '#fde68a', textAnchor: 'middle' },
        { kind: 'text', x: 642, y: 326, text: 'P: rRNA ribozyme peptide bond', fontSize: 11, fontWeight: '700', fill: '#6ee7b7', textAnchor: 'middle' },
        { kind: 'text', x: 642, y: 350, text: 'E: Discharged tRNA exits', fontSize: 11, fill: '#cbd5e1', textAnchor: 'middle' },
      ],
      [
        hs('cap-poly', 'Promoter Binding, 5\' G-Cap & 3\' Poly-A Tail', 105, 151, 'D1.2 HL Modification', 'exonuclease protection + ribosome export', 'Non-coding promoters recruit transcription factors and RNA Pol II. Eukaryotic pre-mRNAs add a methylated 5\' G-cap (ribosome docking) and 3\' poly-A tail (stability against cytoplasmic degradation).'),
        hs('splicing', 'Alternative Splicing (TNNT2 Cardiac Isoforms)', 395, 151, 'Proteome Diversity', '>100,000 proteins from ~20,000 genes', 'Spliceosomes excise introns and selectively retain/skip exons—e.g., fetal vs adult Troponin T (TNNT2 Exon 5), letting one gene build tissue-specific protein variants.'),
        hs('ribosome', '80S Ribosome E/P/A Sites, rRNA Ribozyme & Preproinsulin', 380, 315, 'Translation', '5\'->3\' codon scan + post-translational cleavage', 'Initiator Met-tRNA enters P-site at AUG; incoming charged tRNAs dock at A-site where rRNA ribozyme transfers the peptide. Post-translational cleavage converts preproinsulin -> proinsulin -> active 2-chain insulin.'),
      ]
    ),
  ],
};

export const BIO_V3_D11_PCR_EXPRESSION_STEPS: StepMechanismSpec = {
  type: 'step_mechanism',
  id: 'bio-v3-d11-pcr-expression-steps',
  title: 'Meselson–Stahl Proof (1958) & Thermocycler PCR Amplification (D1.1)',
  caption:
    'Trace semi-conservative ¹⁵N/¹⁴N CsCl density equilibrium bands and exponential Taq polymerase thermocycling (95 °C -> 55 °C -> 72 °C).',
  palette: 'scientific',
  nodes: [
    n('ms', '1. Meselson–Stahl ¹⁵N -> ¹⁴N', 125, 110, 'Gen 1 single hybrid · Gen 2 50:50'),
    n('denat', '2. Denaturation (95 °C)', 395, 100, 'Melts H-bonds · Taq stays intact'),
    n('anneal', '3. Primer Annealing (55 °C)', 655, 110, 'Synthetic flanking DNA primers bind'),
    n('extend', '4. Taq Elongation (72 °C)', 525, 295, '5\'->3\' dNTP synthesis -> 2ⁿ copies'),
    n('dogma', '5. Forensic STR / RT-PCR', 195, 295, 'D1S80 gel bands · viral cDNA'),
  ],
  edges: [
    e('e1', 'ms', 'denat', 'Semi-conservative template'),
    e('e2', 'denat', 'anneal', 'Cool to 55 °C'),
    e('e3', 'anneal', 'extend', 'Heat to 72 °C'),
    e('e4', 'extend', 'denat', 'Cycle 25–35x (2^n)'),
    e('e5', 'extend', 'dogma', 'Gel electrophoresis'),
  ],
  steps: [
    sf(
      1,
      'Meselson–Stahl Proves Semi-Conservative Replication',
      'Heavy ¹⁵N E. coli transferred to light ¹⁴N yield a **single intermediate ¹⁵N/¹⁴N band in Gen 1** (disproving Conservative) and **equal 50% intermediate + 50% light ¹⁴N/¹⁴N bands in Gen 2** (disproving Dispersive).',
      ['ms'],
      [],
      [{ label: 'Gen 2 CsCl Bands', value: '50% ¹⁵N/¹⁴N + 50% ¹⁴N/¹⁴N' }]
    ),
    sf(
      2,
      'PCR Step 1 — Thermal Denaturation (94–95 °C)',
      'Heat breaks H-bonds separating complementary dsDNA strands; thermostable **Taq polymerase** (*Thermus aquaticus*) avoids denaturation during heating.',
      ['ms', 'denat'],
      ['e1'],
      [{ label: 'Temp 1', value: '95 °C (breaks H-bonds)' }]
    ),
    sf(
      3,
      'PCR Step 2 — Primer Annealing (50–60 °C)',
      'Cooling allows excess short synthetic DNA primers to anneal at 3\' boundaries flanking the target locus, stopping long strands from re-hybridizing.',
      ['denat', 'anneal'],
      ['e2'],
      [{ label: 'Temp 2', value: '55 °C (primer binding)' }]
    ),
    sf(
      4,
      'PCR Step 3 — Taq Extension (72 °C) & 2ⁿ Amplification',
      'At optimal 72 °C, Taq extends primers 5\'->3\' with free dNTPs, doubling target amplicons every cycle (~10⁹ copies in 30 cycles) for VNTR DNA profiling or RT-PCR viral cDNA testing.',
      ['anneal', 'extend', 'dogma'],
      ['e3', 'e4', 'e5'],
      [
        { label: 'Temp 3', value: '72 °C (Taq optimum)' },
        { label: '30 Cycles', value: '2^30 ≈ 1.07 × 10⁹ copies' },
      ]
    ),
  ],
};

export const BIO_V3_D11_GEL_ORF_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'bio-v3-d11-gel-orf-worked',
  title: 'Worked Electrophoresis Profiling (D1S80) & ORF/Insulin Processing DBQs (Allott pp.565, 583, 590)',
  caption:
    'Interpret VNTR paternity/forensic gel lanes, convert mRNA ORF bases to primary and cleaved mature amino-acid counts, and summarize ubiquitin–proteasome turnover.',
  sourceLabel: 'Allott & Mindorff (2023) D1.1–D1.2 pp.565, 583, 590–591',
  commandTerm: 'Deduce & Calculate',
  marks: 5,
  problemMarkdown:
    'A forensic `D1S80` VNTR gel resolves Mother (`520 bp, 720 bp`), Child (`520 bp, 640 bp`), Alleged Father A (`480 bp, 640 bp`), and Alleged Father B (`520 bp, 600 bp`). Separately, an mRNA transcript has a `540-nt` coding ORF (including `1` AUG start + `1` UGA stop) producing preproinsulin (`24-aa` signal + `35-aa` C-peptide removed post-translationally). Identify biological father, compute mature insulin amino acids, and explain proteasome recycling.',
  givenData: [
    'Mother: 520 bp, 720 bp · Child: 520 bp, 640 bp',
    'Suspect A: 480 bp, 640 bp · Suspect B: 520 bp, 600 bp',
    'Coding ORF = 540 nt (1 start, 1 stop); cleaved regions = 24 + 35 aa',
  ],
  steps: [
    wstep(
      1,
      'Resolve Paternity by Obligate Paternal Allele Matching',
      'Child inherited 520 bp from Mother, so Child\'s 640 bp VNTR allele MUST come from the biological father. Father A possesses 640 bp (Father B lacks it); shorter fragments (480 bp) migrate farthest toward the positive anode.',
      'Every child band must match either mother or biological father.',
      '\\text{Child }640\\text{ bp} \\notin \\text{Mother} \\implies \\text{Must match Suspect A}',
      'M1+A1'
    ),
    wstep(
      2,
      'Calculate Primary vs Mature Cleaved Polypeptide Length',
      '540 nt / 3 = 180 codons, minus 1 non-coding stop codon = 179 amino acids; subtracting excised 24-aa signal peptide and 35-aa C-peptide leaves 120 mature residues.',
      'Stop codons (UAA, UAG, UGA) terminate translation without inserting an amino acid.',
      'n_{\\text{primary}} = \\frac{540}{3} - 1 = 179\\text{ aa};\\quad n_{\\text{mature}} = 179 - 24 - 35 = 120\\text{ aa}',
      'M1+A1'
    ),
    wstep(
      3,
      'Explain Ubiquitin–Proteasome Protein Turnover (Allott p.591)',
      'Misfolded or timed regulatory proteins receive poly-ubiquitin tags targeting them into barrel-shaped cytosolic proteasomes, hydrolyzing peptides back into reusable amino-acid pools.',
      'Maintains proteome quality alongside autophagy/lysosomal clearance.',
      undefined,
      'E1'
    ),
  ],
  finalAnswerMarkdown:
    'Biological father = **Suspect A** (`640 bp` obligate match); ORF = **179 primary aa** -> **120 mature aa**; poly-ubiquitin targets cytosolic proteins to **proteasomes**.',
  commonTrapMarkdown:
    'Do NOT forget to subtract 1 stop codon from ORF codon count, and remember DNA migrates from negative cathode wells toward the positive anode.',
};

export const ALL_BIO_V3_DIAGRAMS: PlayableDiagramSpec[] = [
  BIO_V3_A_COMMAND_TERMS_MATRIX,
  BIO_V3_A_IA_WORKFLOW_STEPS,
  BIO_V3_A_IA_GOLDFISH_WORKED,
  BIO_V3_A11_WATER_EXPLORER,
  BIO_V3_A11_AQUATIC_MATRIX,
  BIO_V3_A11_REDWOOD_WORKED,
  BIO_V3_A12_DNA_NUCLEOSOME,
  BIO_V3_A12_HERSHEY_STEPS,
  BIO_V3_A12_DNA_RNA_MATRIX,
  BIO_V3_A21_ORIGIN_EXPLORER,
  BIO_V3_A21_ABIOGENESIS_STEPS,
  BIO_V3_A21_CLOCK_WORKED,
  BIO_V3_A22_MICROSCOPY_SIM,
  BIO_V3_A22_MICROSCOPE_EXPLORER,
  BIO_V3_A22_MAGNIFICATION_WORKED,
  BIO_V3_A22_CELL_ULTRASTRUCTURE_LAB,
  BIO_V3_A22_CELL_KINGDOMS_MATRIX,
  BIO_V3_A22_ENDOSYMBIOSIS_STEPS,
  BIO_V3_A23_VIRUS_EXPLORER,
  BIO_V3_A23_PHAGE_CYCLES_STEPS,
  BIO_V3_A23_VIRUS_COMPARISON,
  BIO_V3_B11_MACROMOLECULES_EXPLORER,
  BIO_V3_B11_POLYSACCHARIDES_MATRIX,
  BIO_V3_B11_ENERGY_MASS_WORKED,
  BIO_V3_B12_PROTEIN_EXPLORER,
  BIO_V3_B12_PROTEIN_CLASSES_MATRIX,
  BIO_V3_B12_PEPTIDE_WORKED,
  BIO_V3_B21_MEMBRANE_EXPLORER,
  BIO_V3_B21_NAK_PUMP_STEPS,
  BIO_V3_B21_TRANSPORT_MATRIX,
  BIO_V3_B22_COMPARTMENT_EXPLORER,
  BIO_V3_B22_ULTRACENTRIFUGE_STEPS,
  BIO_V3_B22_ORGANELLE_MATRIX,
  BIO_V3_B23_SPECIALIZED_CELLS_EXPLORER,
  BIO_V3_B23_POTENCY_MATRIX,
  BIO_V3_B23_SAV_WORKED,
  BIO_V3_C11_ENZYME_KINETICS_SIM,
  BIO_V3_C11_REGULATION_STEPS,
  BIO_V3_C11_RATE_WORKED,
  BIO_V3_C12_RESPIRATION_SIM,
  BIO_V3_C12_MITOCHONDRION_ETC_EXPLORER,
  BIO_V3_C12_ATP_WORKED,
  BIO_V3_C13_PHOTOSYNTHESIS_SIM,
  BIO_V3_C13_THYLAKOID_ZSCHEME_EXPLORER,
  BIO_V3_C13_CALVIN_WORKED,
  BIO_V3_D23_WATER_POTENTIAL_SIM,
  BIO_V3_D23_TONICITY_MATRIX,
  BIO_V3_D23_WATER_POTENTIAL_WORKED,
  BIO_V3_D11_REPLISOME_EXPLORER,
  BIO_V3_D11_PCR_EXPRESSION_STEPS,
  BIO_V3_D11_GEL_ORF_WORKED,
];

export const BIO_V3_DIAGRAMS_BY_ID: Record<string, PlayableDiagramSpec> = Object.fromEntries(
  ALL_BIO_V3_DIAGRAMS.map((d) => [d.id, d])
);
