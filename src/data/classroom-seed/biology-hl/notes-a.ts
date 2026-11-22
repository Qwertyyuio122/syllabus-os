import type { StudyNoteBlock, PlayableDiagramSpec } from '@/types/diagrams';
import type { ClassroomSeedNote } from '../types';
import {
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
} from './diagrams';

type CalloutVariant = Extract<StudyNoteBlock, { type: 'callout' }>['variant'];
type TermItem = Extract<StudyNoteBlock, { type: 'key_terms' }>['items'][number];
type EqLegend = NonNullable<Extract<StudyNoteBlock, { type: 'equation' }>['variableLegend']>;

const h2 = (text: string): StudyNoteBlock => ({ type: 'heading', level: 2, text });
const p = (markdown: string): StudyNoteBlock => ({ type: 'paragraph', markdown });
const callout = (variant: CalloutVariant, title: string, markdown: string): StudyNoteBlock => ({
  type: 'callout',
  variant,
  title,
  markdown,
});
const eq = (latex: string, caption: string, variableLegend?: EqLegend): StudyNoteBlock => ({
  type: 'equation',
  latex,
  caption,
  variableLegend,
});
const terms = (items: TermItem[]): StudyNoteBlock => ({ type: 'key_terms', items });
const diag = (spec: PlayableDiagramSpec): StudyNoteBlock => ({ type: 'playable_diagram', spec });

export const BIOLOGY_HL_NOTES_A: ClassroomSeedNote[] = [
  // ==========================================================================
  // 1. TOPIC A — COMMAND TERMS & MAY 2028 IA FRAMEWORK (UPGRADED)
  // ==========================================================================
  {
    topicCode: 'A',
    title: 'IB Biology HL Command Terms (AO1–AO3) & May 2028 IA Framework',
    summary:
      'Complete Class of 2028 HL exam architecture (Paper 1A, Paper 1B, Paper 2; zero Paper 3), AO1–AO3 command-term triggers, markscheme mechanics, and the 24-mark 4-criterion Internal Assessment rubric anchored in Allott & Mindorff (2023).',
    sourceFileNames: ['Command Terms IB BIO.pdf', '2026 Bio 5HL Course Outline.docx'],
    blocks: [
      callout(
        'guiding_questions',
        'Course Guiding Questions (Allott & Mindorff Introductory & IA Chapters, pp. 1, 795–801)',
        '- How do IB Biology Assessment Objectives (`AO1`, `AO2`, `AO3`) map directly onto exact command terms and markscheme depth?\n- How does the reformed Class of 2028 Internal Assessment (`24 marks`, max `3,000 words`) evaluate experimental design, uncertainty handling, statistical conclusions, and directional error evaluation?\n- Why did the May 2025+ curriculum eliminate Options and Paper 3 in favor of integrated `Paper 1B` data-based and experimental-methods questions?'
      ),
      callout(
        'syllabus_link',
        'Class of 2028 HL External & Internal Weighting (First Assessment 2025 · 2026 Bio 5HL Course Outline)',
        '- **Paper 1 (36% · 2 h · 75 marks total):** **Paper 1A** (`40` HL multiple-choice questions, `40 marks`, no penalty for guessing) + **Paper 1B** (`35` marks of unseen experimental data-based, apparatus, and graphing questions in one continuous sitting).\n- **Paper 2 (44% · 2 h 30 min · 80 marks total):** Section A (`~44 marks` unseen DBQs + short structured SL/HL items) + Section B (`36 marks` — choose **2 of 3** extended-response questions worth `16 marks` each plus reading time planning; verify exact Paper 2 rubric on cover).\n- **Scientific Investigation IA (20% · 10 h · 24 marks):** Equal `4 × 6` criteria (`Research Design`, `Data Analysis`, `Conclusion`, `Evaluation`), hard cap `3,000 words`. **Paper 3 NO LONGER EXISTS.**'
      ),
      h2('1. Assessment Objective Architecture (AO1–AO3) & Exact Command Term Decoding'),
      p(
        'Most students who know cellular biochemistry lose `15–25%` of available marks not from factual gaps, but from mismatching **cognitive depth** to the IB command term opening each prompt. The International Baccalaureate organizes every Biology HL question under three Assessment Objectives (**AO1**, **AO2**, and **AO3**), and examiners literally allocate markscheme boxes to the action requested by that bold verb (`Command Terms IB BIO.pdf`). Answering an AO3 **Explain** prompt with an AO2 **Describe** sentence—or appending unsolicited paragraphs to an AO1 **State** line—wastes minutes on Paper 2 without raising your score.'
      ),
      p(
        '**AO1 (Demonstrate knowledge and understanding)** triggers verbs such as *Define*, *Draw*, *Label*, *List*, *Measure*, and *State*. An AO1 **State** requires one exact biological noun, figure with SI unit, or named molecule with zero explanation (`1 mark = 1 terse fact`). Even on pure AO1 items, classroom quizzes like `BioK 2.6 Quiz Answers.docx` show how strict IB markschemes are: writing `"A pairs with T"` loses marks when the prompt asks to state base names in full (`Adenine`, `Thymine`, `Cytosine`, `Guanine`). **Draw** requires crisp single continuous dark lines (no hairy sketching, no shaded filling), open cytoplasm interior unless stippling organelles explicitly, and straight ruler-drawn label lines touching exact boundaries without arrowheads.'
      ),
      p(
        '**AO2 (Apply knowledge and skills)** covers *Annotate*, *Apply*, *Calculate*, *Describe*, *Distinguish*, *Estimate*, *Formulate*, *Identify*, and *Outline*. Here precision phrasing determines full credit. **Describe** demands a faithful qualitative and quantitative summary of visible patterns—turning points, peaks, plateaus, overlaps, and exact coordinate values with units—strictly avoiding biological causation unless asked alongside *Explain*. **Distinguish** and **Compare and contrast** require paired feature-by-feature contrasts (`"Prokaryotes possess 70S cytosolic ribosomes whereas eukaryotes possess 80S cytosolic ribosomes"`), because writing two isolated paragraphs describing Term A then Term B without explicit contrastive connectors leaves examiners unable to award paired-point marks.'
      ),
      callout(
        'examiner_warning',
        'High-Frequency Markscheme Trap: Describe vs Explain & Full Base Names',
        'In graph-based Paper 1B and Paper 2 Section A questions (`Describe the trend shown in Figure 2`), **you earn ZERO marks for mechanism** (such as hydrogen bonds breaking or enzyme active-site denaturation) unless the question explicitly asks *Explain*. Conversely, on an *Explain* prompt (`Explain the effect of temperature above 45 °C`), merely restating `"rate falls"` earns zero—you must trace kinetic energy -> weakened hydrogen/ionic R-group bonds -> conformational tertiary active-site shift -> failed enzyme–substrate complex assembly.'
      ),
      diag(BIO_V3_A_COMMAND_TERMS_MATRIX),
      h2('2. AO3 Synthesis, Extended Responses & Paper 1B Experimental Literacy'),
      p(
        '**AO3 (Synthesize, analyse and evaluate)** governs the highest-value marks on Paper 1B and Paper 2 Section B (`Analyse`, *Comment*, *Compare and contrast*, *Construct*, *Deduce*, *Design*, *Determine*, *Discuss*, *Evaluate*, *Explain*, *Justify*, *Predict*, *Show*, *Sketch*, *Suggest*). An IB **Explain** asks for the causal chain linking molecular mechanism to physiological or ecological phenotype; keep the number of causal steps proportional to the mark allocation (`4 marks = 4 distinct mechanistic steps`, not four synonyms for one step). **Discuss** requires balanced evaluation—weighing supporting empirical evidence, evolutionary trade-offs, and counter-arguments or experimental caveats equally—while **Suggest** asks you to transfer a textbook principle onto an unfamiliar organism or clinical assay you have never memorized.'
      ),
      p(
        'Two AO3 verbs—**Deduce** and **Evaluate**—anchor the newly created **Paper 1B (Data-Based Questions)**. *Deduce* prohibits speculative storytelling; you must draw a logically tight conclusion justified solely by provided table values, standard deviation (`SD`) overlaps, or experimental controls. *Evaluate* requires explicit positive strengths (large `n`, automated data-logging sensors, authentic control baseline, species relevance) balanced against specific methodological limitations and the **direction of systematic bias** (`"Leaving water baths uncovered allowed evaporation, progressively concentrating NaCl solution over 20 min and exaggerating plasmolysis rates"`). Simply writing `"human error"` or `"equipment might be contaminated"` receives automatic zero credit across IB Biology.'
      ),
      p(
        'When tackling Paper 2 Section B extended-response prompts (`6–8 mark` sub-parts), spend 60 seconds sketching a numbered bullet outline mapped directly to syllabus command terms before writing prose. IB examiners award up to `+1` **Quality of Construction** or coherent-link clarity indirectly when biochemical pathways proceed chronologically (`glycolysis -> link reaction -> Krebs -> ETC`), when named examples anchor abstract concepts (`Type II pneumocyte surfactant`, `TNNT2 alternative splicing`, `Na+/K+-ATPase 3:2 stoichiometry`), and when negative-control data are distinguished cleanly from causation.'
      ),
      diag(BIO_V3_A_IA_WORKFLOW_STEPS),
      h2('3. Reformed Class of 2028 Internal Assessment (24 Marks · 4 × 6 Criteria)'),
      p(
        'As summarized in `2026 Bio 5HL Course Outline.docx` and Allott & Mindorff\'s IA chapter (pp. 795–801), the May 2025 syllabus overhaul modernized the Biology Internal Assessment substantially. Previously assessed across five unevenly weighted criteria (`Personal Engagement 2`, `Exploration 6`, `Analysis 6`, `Evaluation 6`, `Communication 4`) with an ambiguous `6–12 page` rule, the Class of 2028 IA is evaluated across **four equally weighted 6-mark criteria (`24 marks total`)** governed by a strict **`3,000-word` ceiling**. Every word in tables, labels, citations, and conclusions stays under scrutiny—concise biological writing replaces narrative fluff.'
      ),
      callout(
        'textbook_excerpt',
        'Allott & Mindorff (2023) IA Design Standard: Goldfish Ventilation & Quantitative Replicates (p. 796)',
        'Allott contrasts weak exploratory biology projects against high-scoring investigations using a classic classroom animal-behavior design: varying goldfish (*Carassius auratus*) density (`1, 2, 3, 4, 5` fish per `10 dm³` tank) while measuring opercular beat frequency (`beats min⁻¹`) at constant `20.0 ± 0.5 °C` across five `1-minute` replicates per condition. Crucially, the IA text highlights two non-negotiable rules: **(1) Ethical minimization of stress** (non-invasive external observation, brief trials, zero harm, rapid return to home aquaria) and **(2) Confounding control** (crowded tanks consume dissolved oxygen faster, so unless dissolved O2 is logged and buffered, behavioral stress is confounded with hypoxia).'
      ),
      p(
        'Across **Criterion 1: Research Design (`6 marks`)**, high-band investigations specify exact Latin binomial names, clear directional biological hypotheses grounded in cited textbook/journal physiology, at least **5 independent-variable increments** spanning a biologically meaningful range, and **at least 5 independent replicates per level** (`5 × 5 = 25` minimum trials—ideally `30+` where variance is noisy). Explicitly quantify how each controlled variable was stabilized (`±0.2 °C` thermostatic bath rather than vague `"room temperature"`), verify sensor limits via pilot runs (such as avoiding saturated pCO2 or CO2 gas probes on aquatic moss, Allott p. 798), and include risk/environmental disposal protocols.'
      ),
      p(
        'Across **Criterion 2: Data Analysis (`6 marks`)**, record raw measurements to decimal precision matching the least-precise analog or digital instrument uncertainty (`±0.01 g`, `±0.5 mm`, `±0.1 s`), record qualitative color/turbidity notes alongside numbers, propagate percentage uncertainties cleanly, calculate appropriate descriptive statistics (**mean + standard deviation SD** for normal parametric spreads, or **median + IQR** for skewed ecological counts), and apply an inferential statistic matched to your Research Question (`Pearson r` or linear regression `R²` for continuous correlation, `Student\'s t-test` for 2 groups, `one-way ANOVA + post-hoc` for 3+ categories, `Chi-squared` for discrete contingency frequencies). Always state explicitly in every graph legend whether error bars display `±1 SD`, `±1 SE`, or `95% CI`.'
      ),
      eq(
        '\\bar{x} = \\frac{1}{n}\\sum_{i=1}^{n} x_i \\qquad s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}} \\qquad SE_{\\bar{x}} = \\frac{s}{\\sqrt{n}}',
        'Core IA descriptive and inferential precision estimators: mean, Bessel-corrected sample standard deviation (s), and standard error of the mean (SE).',
        [
          { symbol: '\\bar{x}', meaning: 'Arithmetic mean across n independent replicates' },
          { symbol: 's', meaning: 'Sample standard deviation measuring dispersion around the mean' },
          { symbol: 'SE_{\\bar{x}}', meaning: 'Standard error estimating precision of the sample mean' },
        ]
      ),
      diag(BIO_V3_A_IA_GOLDFISH_WORKED),
      h2('4. Nature of Science, Statistical Honesty & Paper 1B Preparation'),
      p(
        'Across **Criterion 3: Conclusion (`6 marks`)** and **Criterion 4: Evaluation (`6 marks`)**, IB Biology tests scientific epistemic humility. Even with `p < 0.01`, data *support* or *are consistent with* a mechanistic hypothesis rather than `"proving it 100%"`—recognizing Karl Popper\'s falsificationism and biological stochastic variability. Compare both the **direction and quantitative magnitude** of your effect against published benchmark values (`Vmax`, `Km`, leaf stomatal conductance, or Allott Table datasets) and explicitly inspect overlapping `SD`/`95% CI` error bars before claiming difference.'
      ),
      callout(
        'tok_nos',
        'Nature of Science (NOS) & TOK Link: Inductive Correlation vs Causal Mechanism',
        'Modern biology relies on Popperian **falsification** and inferential statistics (`p < 0.05` rejecting null hypotheses `H₀` at 95% confidence), yet statistical significance alone never establishes biological importance or causation. Small `p`-values can emerge from huge sample sizes measuring trivial noise, while confounding environmental variables (`temperature drift`, `pH shift`, `dissolved gas depletion`) mimic true effects unless controlled experimentally.'
      ),
      p(
        'Every time you study a new cellular or metabolic unit in Theme A–D below, inspect how textbook **Data-Based Questions (DBQs)** test these exact analytical tools: reading logarithmic axes (`proteomics / viral load`), calculating percentage mass change (`(final - initial)/initial × 100`), applying `M = I/A` scale bars, and spotting control variables in classical experiments (`Hershey–Chase`, `Meselson–Stahl`, `Jagendorf acid bath`, `Bassham ¹⁴C lollipop`). Mastering command terms and experimental statistics here multiplies your score across every subsequent biology topic.'
      ),
      h2('5. Exam Markscheme Lexicon (Topic A)'),
      terms([
        {
          term: 'Distinguish / Compare and contrast',
          definitionMarkdown: 'Paired point-by-point similarity and/or difference statements linking two biological concepts in the same sentence (`X has ..., whereas Y has ...`).',
          markschemeKeyword: 'explicit paired comparison using whereas/both',
        },
        {
          term: 'Evaluate',
          definitionMarkdown: 'Balanced appraisal weighing strengths/support against named methodological limitations, sample bias, and direction of systematic error.',
          markschemeKeyword: 'strengths + specific limitations + bias direction',
        },
        {
          term: 'Standard Deviation (s) vs Standard Error (SE)',
          definitionMarkdown: 'SD measures raw spread/variability around the mean (`s`); SE (`s/√n`) measures precision of the estimated population mean.',
          markschemeKeyword: 'spread of sample (SD) vs precision of mean (SE)',
        },
        {
          term: 'Systematic vs Random Error',
          definitionMarkdown: 'Systematic error skews measurements consistently in one direction (e.g., uncalibrated probe, evaporation); random error scatters equally around true value and shrinks via larger `n`.',
          markschemeKeyword: 'directional bias (systematic) vs scatter reduced by repeats (random)',
        },
        {
          term: 'Criterion 1–4 May 2028 IA Cap',
          definitionMarkdown: 'Four 6-mark criteria (`Research Design`, `Data Analysis`, `Conclusion`, `Evaluation`) totaling `24 marks` (20% of HL grade), max `3,000 words`.',
          markschemeKeyword: '24 marks · 4 x 6 criteria · 3,000 words max',
        },
        {
          term: 'Paper 1B Data-Based Section',
          definitionMarkdown: 'Combined with Paper 1A MCQs into a 2 h Paper 1 (`36%` HL grade); assesses experimental design, uncertainties, graphs, and microscopy without Paper 3.',
          markschemeKeyword: 'unseen data analysis + apparatus without Paper 3',
        },
      ]),
    ],
  },

  // ==========================================================================
  // 2. TOPIC A1.1 — WATER (UPGRADED)
  // ==========================================================================
  {
    topicCode: 'A1.1',
    title: 'Water Polarity, Hydrogen Bonding & Aquatic Life Adaptations (A1.1)',
    summary:
      'Comprehensive A1.1 SL+HL guide grounded in Allott & Mindorff (2023, pp. 2–16): polar covalent O–H dipoles, intermolecular hydrogen bonding, cohesion/adhesion in tall redwoods, solvent hydration vs lipid transport, thermal physics in Arctic wildlife, and Goldilocks planetary water origins.',
    sourceFileNames: ['A 1.1 Water Notes.pdf', '2026 Bio 5HL Course Outline.docx'],
    blocks: [
      callout(
        'guiding_questions',
        'Allott & Mindorff Chapter A1.1 Guiding Questions (pp. 2–16)',
        '- What physical and chemical properties of water make it uniquely essential to life on Earth?\n- What structural challenges and evolutionary opportunities does water create as both an intracellular medium and an aquatic habitat?'
      ),
      callout(
        'syllabus_link',
        'IB Syllabus Alignment (A1.1.1–A1.1.8 SL + HL · Allott pp. 2–16 · A 1.1 Water Notes.pdf)',
        '- **SL Core (`A1.1.1–A1.1.6`):** Medium of life (`A1.1.1`), hydrogen bonding via polar covalent O–H bonds (`A1.1.2`), cohesion & surface tension (`A1.1.3`), adhesion & capillary action (`A1.1.4`), solvent properties for hydrophilic vs hydrophobic substances (`A1.1.5`), and physical properties (`buoyancy`, `viscosity`, `thermal conductivity`, `specific heat capacity`) in black-throated diver vs ringed seal (`A1.1.6`).\n- **HL Extension (`A1.1.7–A1.1.8`):** Extraplanetary asteroid/comet water delivery (`deuterium:hydrogen` isotopic ratios) and temperature-gravity retention in the Goldilocks habitable zone.'
      ),
      h2('1. Polar Covalent O–H Bonding & Intermolecular Hydrogen Bonds (A1.1.1–A1.1.2)'),
      p(
        'Life emerged in water (`~3.8–4.0 billion years ago`), and modern cells remain `70–95%` water by mass because every metabolic pathway—from cytoplasmic glycolysis to extracellular plasma flow—requires an aqueous medium (`A1.1.1`). Water\'s extraordinary emergent properties stem from its asymmetric molecular geometry (`Allott pp. 2–4`; `A 1.1 Water Notes.pdf`). Inside a single `H₂O` molecule, oxygen forms two **polar covalent bonds** with two hydrogens at a bent `104.5°` bond angle (`2` bonding pairs + `2` lone electron pairs on oxygen).'
      ),
      p(
        'Because oxygen carries eight protons in its nucleus compared with one proton in hydrogen, oxygen has far higher **electronegativity** and pulls shared covalent electron pairs strongly toward itself. Consequently, the oxygen vertex retains a permanent partial negative charge (`2δ−`), while each peripheral hydrogen atom carries a permanent partial positive charge (`δ+`). Importantly, the overall `H₂O` molecule stays electrically neutral while functioning as a permanent **electric dipole**.'
      ),
      p(
        'When liquid or frozen water molecules approach each other, an electrostatic attraction—called a **hydrogen bond**—forms between the `δ+` hydrogen of one molecule and a `δ−` lone-pair region on the oxygen of an adjacent molecule (`Allott p. 4`). Each individual hydrogen bond has only `~5%` of the strength of an intramolecular `O–H` covalent bond (`~20 kJ mol⁻¹` vs `~464 kJ mol⁻¹`), continually breaking and reforming over picoseconds in liquid water. However, because each water molecule can coordinate tetrahedrally with up to **four** neighbors simultaneously, billions of transient H-bonds create collective cohesion, surface tension, and thermal inertia unrivaled by any non-polar hydride of comparable molar mass (such as methane, `CH₄`, `16 g mol⁻¹`, which boils at `−161 °C`).'
      ),
      callout(
        'definition',
        'IB Precision Distinction: Intramolecular Covalent vs Intermolecular Hydrogen Bond',
        '- **Polar covalent bond:** Strong shared-electron bond *within* a single `H₂O` molecule holding O and H nuclei together (`104.5°`). Shown with solid lines.\n- **Hydrogen bond:** Weak electrostatic dipole attraction *between* separate molecules (`δ+ H ··· δ− O`). Always drawn in IB diagrams with **dashed/dotted lines** pointing strictly from `δ+ H` to `δ− O`—NEVER O-to-O or H-to-H!'
      ),
      diag(BIO_V3_A11_WATER_EXPLORER),
      h2('2. Cohesion, Adhesion, Surface Tension & Xylem Ascent (A1.1.3–A1.1.4)'),
      p(
        '**Cohesion** is the attraction between molecules of the **same substance** (water attracting neighboring water via intermolecular H-bonds; `Allott pp. 5–7`). In terrestrial plants, evaporation of water vapour out through leaf stomata generates negative hydrostatic pressure tension inside spongy mesophyll cell walls. That negative tension pulls upward along continuous xylem vessel columns reaching `115 m` canopies in coastal redwoods (*Sequoia sempervirens*), where H-bonded water columns sustain tensile stress down to roughly `−1.8` to `−2.0 MPa` before **cavitation** (air-seeding embolism) snaps the water column (`Allott Tall Trees DBQ, p. 7`).'
      ),
      p(
        'At any air–water interface (`Allott p. 6`), surface water molecules cannot form upward hydrogen bonds with hydrophobic air (`N₂/O₂`), so they experience net inward and lateral H-bonding forces pulling tighter than bulk interior water. This emergent **surface tension** resists mechanical penetration: small pond skaters/water striders (*Gavia* vs *Gerris*, `Allott p. 6`) skate safely across ponds on hydrophobic waxed tarsal hairs without breaking H-bonds, and paradoxically human pulmonary alveoli require amphipathic phospholipid **surfactant** from Type II pneumocytes so water surface tension does not collapse tiny wet air sacs on exhalation!'
      ),
      p(
        '**Adhesion** is the attraction of polar water molecules to **different polar or charged surfaces**, such as hydroxyl (`-OH`) groups on plant cellulose and lignin xylem walls, glass laboratory burettes (forming a concave meniscus), and mineral soil clay particles (`Allott pp. 7–8`). Together, **cohesion + adhesion** drive **capillary action**: water creeps spontaneously upward inside microscopic xylem tracheids (`20–200 µm` diameter) and narrow soil pores, wetting exposed mesophyll cell walls continuously and supplying soil moisture against gravity even when stomata close overnight.'
      ),
      h2('3. Water as the Universal Solvent vs Hydrophobic Transport (A1.1.5)'),
      p(
        'Water dissolves ionic compounds and polar molecules rapidly because oriented `H₂O` dipoles cluster around exposed charges or polar functional groups, forming electrostatic **hydration shells** that outcompete crystal lattices or intramolecular clumping (`Allott pp. 9–10`; `A 1.1 Water Notes.pdf`). Negatively charged `δ−` oxygen faces cations like `Na⁺` and `Ca²⁺`, whereas `δ+` hydrogens orient inward toward anions like `Cl⁻`, `HCO₃⁻`, and negatively charged `-COO⁻` or `-OH` groups on monosaccharides (glucose), amino acids, and small proteins. Hydrophilic solutes diffuse rapidly through aqueous cytoplasm, vacuolar sap, plant phloem, and human blood plasma to participate in enzymatic collisions (`metabolic reactions in aqueous solution`).'
      ),
      p(
        'Conversely, **hydrophobic** molecules (`lipids`, triacylglycerols, steroid sex hormones, cholesterol) carry long non-polar hydrocarbon `C–H` chains unable to form favorable hydrogen bonds with water. Rather than repelling water actively, non-polar molecules cluster together via the **hydrophobic effect** because minimizing water exposure lets surrounding `H₂O` molecules maximize entropy-favorable H-bonding with one another. Consequently, hydrophobic blood lipids (triglycerides and cholesterol esters) cannot circulate dissolved freely in plasma; liver/intestinal cells package them inside amphipathic **lipoprotein particles** (`chylomicrons`, `VLDL`, `LDL`, `HDL` coated with outer phospholipid monolayers and apolipoproteins), while lipid-soluble steroid hormones travel bound to carrier plasma proteins.'
      ),
      eq(
        'c_p = 4.184\\text{ J g}^{-1}\\text{ K}^{-1} \\qquad \\Delta \\Psi_{\\text{gravity}} = -0.010\\text{ MPa m}^{-1} \\times h',
        'Thermal buffering capacity of liquid water (high specific heat capacity) and vertical gravitational hydrostatic gradient opposing redwood sap flow.',
        [
          { symbol: 'c_p', meaning: 'Specific heat energy needed to warm 1 g of liquid water by 1 °C' },
          { symbol: '\\Delta \\Psi_{\\text{gravity}}', meaning: 'Water potential drop with canopy height h (m)' },
        ]
      ),
      diag(BIO_V3_A11_AQUATIC_MATRIX),
      h2('4. Aquatic Physics (A1.1.6) & HL Planetary Origins of Water (A1.1.7–A1.1.8)'),
      p(
        'Allott & Mindorff (`pp. 11–13`) compares water against air using four physical benchmarks experienced acutely by the **ringed seal (*Pusa hispida*)** and **black-throated diver (*Gavia arctica*)** across Arctic waters:'
      ),
      p(
        '1. **Buoyancy (`~1,000 kg m⁻³` vs air `~1.2 kg m⁻³`):** Water exerts high Archimedes upthrust nearly equal to body tissue density (`~1,020–1,060 kg m⁻³`), letting seals float effortlessly while aquatic divers evolved unusually dense solid leg/wing bones and expel plumage air to overcome buoyancy when diving deep.\n2. **Viscosity (`~50×` higher internal resistance than air):** Moving through viscous water demands streamlined **fusiform** hydrodynamics, webbed hind feet, and seal flippers, whereas divers burst explosively into low-viscosity air via powerful wing strokes.\n3. **Thermal Conductivity (`0.61 W m⁻¹ K⁻¹`, `~24×` faster heat conduction than still air):** Sub-zero water strips heat dangerously fast from endotherms—ringed seals rely on thick subcutaneous **blubber** insulation (`adipose triglyceride`), whereas black-throated divers preen **hydrophobic uropygial oil** onto interlocking feathers to trap warm stagnant air layers next to skin.\n4. **Specific Heat Capacity (`4.18 J g⁻¹ °C⁻¹`):** Absorbing or releasing substantial thermal energy breaks/forms H-bonds with tiny temperature swings, keeping oceans and polar water bodies thermally buffered (`0–4 °C`) beneath floating `0 °C` ice sheets (`0.917 g cm⁻³`) even during Arctic winter.'
      ),
      callout(
        'textbook_excerpt',
        'HL Extension (A1.1.7–A1.1.8): Extraplanetary Water Origin & Goldilocks Zone (Allott pp. 13–15)',
        'Hadean Earth (`~4.5 Ga`) formed too close to the scorching young Sun inside the solar nebula frost line to condense surface oceans directly. Geological **deuterium-to-hydrogen (`D/H`, `²H/¹H`)** isotopic fingerprints in carbonaceous chondrite **asteroids** match Earth\'s ocean `D/H ≈ 1.56 × 10⁻⁴` far better than most Oort-cloud comets, indicating heavy Late Bombardment asteroid impacts delivered much of Earth\'s surface water. Once delivered, Earth\'s **orbital distance from the Sun** (keeping surface `0–100 °C` liquid water—the **Goldilocks habitable zone**) combined with sufficient **planetary mass/gravity** and a protective magnetosphere prevented atmospheric hydrogen escape and ocean boil-off like Venus or freezing like Mars.'
      ),
      diag(BIO_V3_A11_REDWOOD_WORKED),
      callout(
        'tok_nos',
        'Nature of Science (NOS) & Scientific Reasoning: Methane vs Water Control Argument',
        'Notice how biochemists establish causation without being able to "switch off H-bonds" directly in water: they select **methane (`CH₄`, `16 g mol⁻¹`)** as a structural control of nearly identical molecular mass (`18` vs `16`) lacking bond polarity. Observing a `+261 °C` boiling-point jump from `−161 °C` (`CH₄`) to `+100 °C` (`H₂O`) isolates intermolecular **hydrogen bonding** rigorously.'
      ),
      p(
        'Extending **Allott\'s Tall Trees DBQ (`p. 7`)** directly links physical `A1.1` chemistry to botanical ecology: comparing *Sequoia sempervirens* leaves harvested from `20 m` shaded understory branches versus `110 m` sun-exposed treetops demonstrates dramatic intraspecific phenotypic plasticity. Upper-crown needles suffer permanent gravitational tension (`−1.10 MPa` hydrostatic column weight alone before transpiration flow resistance pushes xylem potential near `−1.8 MPa`) and intense evaporative vapour-pressure deficits; consequently, top-canopy shoots grow stubbier leaves with thicker hydrophobic waxy cuticles, narrower denser tracheids resisting **air-seeding cavitation embolisms**, reduced photosynthetic surface area, and stomatal closure kinetics tuned carefully alongside nocturnal **foliar coastal fog absorption** directly across leaf epidermis. Meanwhile, inside mammalian circulation (`A1.1.5`), balancing **hydrophilic** vs **hydrophobic** transport determines clinical health: soluble hexose glucose and `Na⁺/Cl⁻` electrolytes travel freely inside watery plasma (`maintaining blood osmolarity ~300 mOsm`), whereas insoluble **triglycerides** and **cholesterol esters** require hydrophilic **apolipoprotein shells + phospholipid monolayers** (`chylomicrons, LDL, HDL`) so lipid droplets stay suspended cleanly without coalescing into fatal vascular fat emboli.'
      ),
      h2('5. Exam Markscheme Lexicon (A1.1)'),
      terms([
        {
          term: 'Polar Covalent Bond & Dipole',
          definitionMarkdown: 'Unequal electron sharing due to oxygen\'s higher electronegativity than hydrogen, generating `2δ−` on oxygen and `δ+` on hydrogens at `104.5°`.',
          markschemeKeyword: 'unequal sharing · oxygen more electronegative · δ− O / δ+ H',
        },
        {
          term: 'Hydrogen Bond',
          definitionMarkdown: 'Weak intermolecular electrostatic attraction between `δ+ H` of one water molecule and `δ− O` lone pair of another (dashed lines).',
          markschemeKeyword: 'intermolecular electrostatic attraction δ+ H to δ− O',
        },
        {
          term: 'Cohesion vs Adhesion',
          definitionMarkdown: 'Cohesion = water-to-water H-bonding (xylem column tension, surface tension); Adhesion = water-to-polar-wall H-bonding (capillarity, meniscus).',
          markschemeKeyword: 'like molecules (cohesion) vs polar wall surfaces (adhesion)',
        },
        {
          term: 'Hydrophilic vs Hydrophobic',
          definitionMarkdown: 'Hydrophilic polar/ionic solutes form hydration shells in water (`glucose, Na+`); hydrophobic non-polar lipids aggregate and travel via lipoproteins.',
          markschemeKeyword: 'polar/charged hydration shells vs non-polar lipoprotein transport',
        },
        {
          term: 'Thermal Conductivity vs Specific Heat',
          definitionMarkdown: 'Water transfers heat rapidly (`~24x` air -> demands seal blubber/feathers) yet resists internal temperature jumps (`4.18 J/g°C` buffering habitats).',
          markschemeKeyword: 'fast heat transfer away from body vs heat absorbed per °C rise',
        },
        {
          term: 'Goldilocks Zone & Asteroid D/H Ratio (HL)',
          definitionMarkdown: 'Habitable orbital zone sustaining `0–100 °C` liquid water held by gravity; ocean `²H/¹H` matches carbonaceous chondrite asteroids.',
          markschemeKeyword: 'temperature-gravity liquid retention · asteroid D/H match',
        },
      ]),
    ],
  },

  // ==========================================================================
  // 3. TOPIC A1.2 — NUCLEIC ACIDS (UPGRADED)
  // ==========================================================================
  {
    topicCode: 'A1.2',
    title: 'Nucleic Acids, Base-Pairing, Hershey–Chase & Nucleosomes (A1.2)',
    summary:
      'Complete A1.2 SL+HL treatise from Allott & Mindorff (pp. 17–35), Classroom Notes, and BioK 2.6 Quiz: nucleotide condensation, 5\'->3\' sugar–phosphate directionality, DNA vs RNA chemical stability, Chargaff parity DBQs, genetic code universality, Hershey–Chase ³²P/³⁵S proof, and HL octamer nucleosomes.',
    sourceFileNames: ['2024 A1 1.2 Nucleic Acids Notes.pdf', 'BioK 2.6 Quiz Answers.docx'],
    blocks: [
      callout(
        'guiding_questions',
        'Allott & Mindorff Chapter A1.2 Guiding Questions (pp. 17–35)',
        '- How does the chemical structure of DNA allow exact storage and semi-conservative copying of biological information?\n- How is `~2 meters` of chromosomal DNA packaged into a `~5 µm` eukaryotic nucleus while keeping active genes accessible to transcription?'
      ),
      callout(
        'syllabus_link',
        'IB Syllabus Alignment (A1.2.1–A1.2.15 SL + HL · Allott pp. 17–35 · Nucleic Acids Deck)',
        '- **SL Core (`A1.2.1–A1.2.10`):** Genetic material universality (`A1.2.1`), nucleotide components (`A1.2.2`), condensation phosphodiester backbone (`A1.2.3`), RNA vs DNA differences (`A1.2.4–A1.2.5`), complementary base-pairing & antiparallel helix (`A1.2.6`), conserved universal triplet code (`A1.2.9`), and `5\' -> 3\'` synthesis directionality (`A1.2.10`).\n- **HL Extension (`A1.2.11–A1.2.15`):** Hershey–Chase `³²P/³⁵S` proof (`A1.2.11`), Chargaff DBQ parity rules (`A1.2.12`), histone octamer + H1 nucleosomes (`A1.2.13`), eukaryotic linear chromosome packing & euchromatin/heterochromatin (`A1.2.14`).'
      ),
      h2('1. Nucleotide Architecture & Phosphodiester Condensation (A1.2.1–A1.2.5)'),
      p(
        'Every **nucleic acid**—deoxyribonucleic acid (**DNA**) and ribonucleic acid (**RNA**)—is an unbranched polymer built from covalently linked **nucleotides** (`Allott pp. 18–22`; `2024 A1 1.2 Nucleic Acids Notes.pdf`). Each monomer contains three sub-components bound covalently: **(1) a negatively charged phosphate group** (`PO₄³⁻`) attached to the **5\' carbon (`C5\'`)** of the pentose sugar, **(2) a five-carbon pentose sugar** (`2-deoxyribose` in DNA vs `ribose` in RNA), and **(3) an organic nitrogenous base** attached to the **1\' carbon (`C1\'`)**.'
      ),
      p(
        'Polynucleotide chains elongate exclusively by **condensation reactions** removing one `H₂O` molecule (`Allott p. 20`): the `5\'-phosphate` group of an incoming nucleotide reacts covalently with the `3\'-hydroxyl (-OH)` group on the pentose of the existing chain, building a strong **phosphodiester covalent bond** (`sugar–phosphate backbone`). Because chemical linkage runs between `C5\'` of one pentose and `C3\'` of the previous pentose, every single strand carries chemical polarity—an exposed `5\'-phosphate` at one end and a free `3\'-OH` at the opposite end (`5\' -> 3\'` directionality).'
      ),
      p(
        'Chemical distinction between DNA and RNA governs evolutionary function (`Allott pp. 21–22`). First, at pentose **C2\'**, DNA contains a hydrogen (`2\'-H`, **deoxyribose**), whereas RNA retains a reactive hydroxyl (`2\'-OH`, **ribose**) prone to spontaneous alkaline self-cleavage—making DNA dramatically more stable for permanent chromosomal storage and RNA ideal for transient `mRNA` turnover and flexible folding (`tRNA`, `rRNA` ribozymes). Second, DNA uses **Thymine** (methylated pyrimidine resisting accidental oxidative repair errors when Cytosine spontaneously deaminates to Uracil!), whereas RNA uses **Uracil**. Third, cellular DNA is double-stranded antiparallel (`5\'->3\'` paired opposite `3\'->5\'`), whereas RNA stays single-stranded and folds locally into hairpins.'
      ),
      callout(
        'examiner_warning',
        'BioK 2.6 Quiz Markscheme Rule: Spell Nitrogenous Base Names in FULL!',
        'On `BioK 2.6 Quiz Answers.docx` (Question 5) and official IB Paper 2 markschemes, writing bare single letters (`"A pairs with T"`) loses the factual recall mark! Always spell out **Adenine, Thymine, Cytosine, Guanine**, and **Uracil** in full, and distinguish the **two-ring purines** (`Adenine`, `Guanine` — "Pure As Gold") from **single-ring pyrimidines** (`Cytosine`, `Thymine`, `Uracil`).'
      ),
      diag(BIO_V3_A12_DNA_NUCLEOSOME),
      h2('2. Antiparallel Complementary Base Pairing, Chargaff Parity & Genetic Code (A1.2.6–A1.2.12 HL)'),
      p(
        'Inside Watson–Crick–Franklin B-DNA (`Allott pp. 23–26`), two sugar–phosphate strands coil in a right-handed double helix (`2.0 nm` uniform diameter, `0.34 nm` per base pair, `10 bp = 3.4 nm` per full turn) oriented **antiparallel** (`5\' -> 3\'` against `3\' -> 5\'`) so planar bases align horizontally for hydrogen bonding. **Adenine (`2 rings`) pairs solely with Thymine (`1 ring`) via 2 hydrogen bonds (`A = T`)**, while **Guanine (`2 rings`) pairs solely with Cytosine (`1 ring`) via 3 hydrogen bonds (`G ≡ C`)**. Notice why purine-to-pyrimidine pairing is geometrically mandatory: two purines (`4 rings`) would bulge the helix outward, whereas two pyrimidines (`2 rings`) would pinch inward, snapping H-bond geometry.'
      ),
      p(
        'This geometric constraint underpins **Chargaff\'s Rules** (`Allott DBQ p. 31` & End-of-Chapter Polio Qs `pp. 34–35`): in any double-stranded DNA genome, molar percentages satisfy **`%A = %T`** and **`%G = %C`**, though `%G+C` (`e.g., ~40% in humans vs ~72% in thermophilic Streptomyces`) varies freely by species. Crucially, single-stranded viral RNA (`such as Poliovirus, Allott p. 34: 30.4% A, 25.0% U, 19.5% C, 25.1% G`) violates `%A = %U` and `%G = %C`—providing an instant forensic test on Paper 1B/2 to diagnose whether an isolated viral genome is **single-stranded or double-stranded**!'
      ),
      p(
        'During molecular copying and gene expression (`A1.2.9–A1.2.10`), **5\' -> 3\' directionality** governs all polymerases: DNA polymerases (`D1.1`) and RNA polymerases (`D1.2`) synthesize ONLY by adding triphosphates onto an exposed `3\'-OH` (so templates are read `3\' -> 5\'`), while 80S ribosomes translate mRNA codons from `5\' -> 3\'`. Because the `64` triplet mRNA codons encode nearly identical amino acids across Archaea, Bacteria, and Eukarya (`universal genetic code` with rare minor mitochondrial exceptions), recombinant bacteria like *E. coli* accurately translate inserted human insulin genes—overwhelming evidence for single **common ancestry at LUCA** (`A1.2.9`).'
      ),
      diag(BIO_V3_A12_HERSHEY_STEPS),
      h2('3. Hershey–Chase (1952) Proof & HL Nucleosome Supercoiling (A1.2.11–A1.2.15)'),
      p(
        'Before 1952, most biochemists assumed proteins—with `20` chemically diverse amino acids compared against `4` monotonous DNA bases—must store heredity (`Allott pp. 27–28`). **Alfred Hershey and Martha Chase** settled this brilliantly using **T2 bacteriophage** infecting *Escherichia coli*. T2 consists solely of a protein coat and an inner DNA core. They grew one phage batch in **³⁵S** (radioactive sulfur incorporates solely into methionine and cysteine capsid proteins; DNA lacks sulfur) and a parallel batch in **³²P** (radioactive phosphorus incorporates solely into DNA phosphodiester backbones; coat proteins lack phosphorus). After allowing infection, shearing empty phage coats off bacteria in a **Waring blender**, and **centrifuging** heavy infected bacteria into a pellet away from suspended protein coats in the supernatant, **³⁵S stayed in the supernatant** while **³²P pelleted inside living bacteria and entered new phage progeny**—confirming DNA alone carries genetic instructions.'
      ),
      callout(
        'textbook_excerpt',
        'HL Packaging Architecture: Nucleosome Octamer, H1 Linker & Gene Accessibility (Allott pp. 29–31)',
        'A single diploid human cell contains `~2 meters` (`~6.4 × 10⁹ bp`) of negatively charged DNA packed inside a `~6 µm` nucleus. Eukaryotes solve this via **nucleosomes (`10 nm beads-on-a-string`)**: eight positively charged basic **histone core proteins** (`two copies each of H2A, H2B, H3, H4`, rich in positively charged lysine/arginine R-groups) bind electrostatically to negatively charged DNA phosphate groups, wrapping **`146–147 bp` (~1.65 left-handed superhelical turns)** around each octamer core. Outside each core, a ninth **H1 linker histone** locks DNA entry/exit strands together, folding `~20–60 bp` linker bridges into compact `30 nm` chromatin fibres and dense mitotic metaphase chromosomes. Conversely, bacteria retain **"naked" circular DNA** without histone octamers.'
      ),
      p(
        'Crucially, nucleosome compaction regulates gene expression (`epigenetics`, `Allott p. 30`): chemical acetylation of lysine tails neutralizes positive histone charges, loosening DNA into open **euchromatin** so transcription factors and RNA polymerase access promoters, whereas tight histone methylation compacts regions into silent **heterochromatin** (`such as inactive Barr bodies`).'
      ),
      eq(
        '\\%\\text{A} = \\%\\text{T},\\quad \\%\\text{G} = \\%\\text{C} \\implies \\%\\text{G} = \\frac{100\\% - 2(\\%\\text{A})}{2}',
        'Chargaff base parity equation for double-stranded DNA (violated in single-stranded genomes such as Poliovirus, Allott p. 34).',
        [
          { symbol: '\\%\\text{A}, \\%\\text{T}', meaning: 'Equal molar percentages of complementary Adenine and Thymine' },
          { symbol: '\\%\\text{G}, \\%\\text{C}', meaning: 'Equal molar percentages of triple-H-bonded Guanine and Cytosine' },
        ]
      ),
      diag(BIO_V3_A12_DNA_RNA_MATRIX),
      h2('4. Nature of Science, Rosalind Franklin X-Ray Photo 51 & Epistemology (Allott pp. 32–33)'),
      callout(
        'tok_nos',
        'NOS & TOK: Model Building, Falsification & Attribution (Pauling vs Watson–Crick–Franklin)',
        'Allott (`pp. 32–33`) contrasts two scientific styles: Linus Pauling erroneously published a three-strand DNA model with inward phosphate groups based on flawed hydration assumptions, whereas Watson and Crick falsified wrong geometry iteratively once guided by **Rosalind Franklin and Raymond Gosling\'s X-ray diffraction Photo 51 (`3.4 nm` pitch, `0.34 nm` stacking, cross X pattern)** and Chargaff\'s 1:1 base ratios. Notice also how competitive credit disputes highlight social and ethical dimensions inside scientific collaboration.'
      ),
      p(
        'Synthesizing Topic A1.2 connects molecular structure directly to cellular compartmentalization (`B2.2`) and molecular genetics (`D1.1–D1.2`): covalent `3\'->5\'` phosphodiester bonds guard sequence integrity across generations, weak `A=T` (`2 H-bonds`) vs `G≡C` (`3 H-bonds`) pairs unzip cleanly via helicase at replication origins, and `H2A–H4` octamer + `H1` packaging protects fragile DNA from mechanical shearing during mitosis while orchestrating tissue-specific transcription.'
      ),
      p(
        'Practicing **Chargaff & Poliovirus Base-Composition DBQs (`Allott pp. 31, 34–35`)** sharpens Paper 1B deduction immediately. Suppose a purified cellular extract yields `31.2% Adenine`, `31.1% Thymine`, `18.9% Guanine`, and `18.8% Cytosine`: because `%A ≈ %T` and `%G ≈ %C` within measurement uncertainty (`and Thymine appears instead of Uracil`), you deduce **double-stranded DNA (`A=T` has 2 H-bonds; total `%A+T = 62.3%`, lowering thermal melting point `Tm` below GC-rich genomes!)**. By contrast, when Allott\'s End-of-Chapter dataset (`p. 34`) lists **Poliovirus RNA** as `30.4% Adenine`, `25.0% Uracil`, `19.5% Cytosine`, and `25.1% Guanine`, `%A != %U` (`30.4%` vs `25.0%`) and `%G != %C` (`25.1%` vs `19.5%`) prove instantaneously that Poliovirus carries a **single-stranded RNA genome** with no obligatory complementary pairing strand! Meanwhile, in **HL nucleosome epigenetics (`p. 30`)**, acetyltransferase enzymes transfer negative acetyl groups onto positive **lysine tails** protruding from H2A–H4 octamers; neutralizing electrostatic attraction loosens octamer grip into active **euchromatin** so transcription factors reach TATA promoters (`D1.2`), whereas histone deacetylases (HDACs) + DNA methylation re-lock silent genes in compact heterochromatin. Furthermore, compare RNA\'s vulnerable `2\'-OH` nucleophilic attack (hydrolyzing RNA rapidly in mild alkali—useful when cells must destroy obsolete mRNAs quickly after translation finishes!) against DNA\'s inert `2\'-H` deoxyribose and methylated **Thymine** tag (`distinguishing deliberate Thymine from accidental Cytosine -> Uracil deamination during DNA repair`).'
      ),
      h2('5. Exam Markscheme Lexicon (A1.2)'),
      terms([
        {
          term: 'Phosphodiester Bond',
          definitionMarkdown: 'Covalent bond formed via condensation between a `5\'-phosphate` of one nucleotide and `3\'-OH` pentose of the adjacent nucleotide.',
          markschemeKeyword: 'covalent sugar-phosphate linkage 5\' to 3\' via condensation',
        },
        {
          term: 'Antiparallel Strands',
          definitionMarkdown: 'Two complementary DNA strands run in opposite directions (`5\'->3\'` paired with `3\'->5\'`) so purines and pyrimidines align for H-bonding.',
          markschemeKeyword: 'opposite 5\'->3\' / 3\'->5\' strand orientation',
        },
        {
          term: 'Purine vs Pyrimidine',
          definitionMarkdown: 'Double-ring nitrogenous bases (`Adenine`, `Guanine`) pair solely with single-ring bases (`Thymine`/`Uracil`, `Cytosine`) maintaining uniform `2 nm` width.',
          markschemeKeyword: 'two-ring purine + single-ring pyrimidine = uniform diameter',
        },
        {
          term: 'Chargaff Ratio Parity (HL)',
          definitionMarkdown: 'Double-stranded DNA satisfies `%A = %T` and `%G = %C`; non-parity (`%A != %T` or `%G != %C`) diagnoses single-stranded nucleic acids.',
          markschemeKeyword: '%A=%T and %G=%C confirms dsDNA; deviation indicates ssRNA/ssDNA',
        },
        {
          term: 'Hershey–Chase Supernatant vs Pellet (HL)',
          definitionMarkdown: '`³⁵S`-capsid proteins remain in blender supernatant while `³²P`-DNA enters bacterial pellet and progeny phages.',
          markschemeKeyword: '32P DNA in bacterial pellet · 35S protein in supernatant',
        },
        {
          term: 'Nucleosome + H1 Linker (HL)',
          definitionMarkdown: '`146–147 bp` (`~1.65` turns) of negatively charged DNA wrapped electrostatically around an 8-histone positive octamer (`2x H2A, H2B, H3, H4`) sealed by external H1.',
          markschemeKeyword: '8 core histones + ~146 bp DNA + outside H1 linker',
        },
      ]),
    ],
  },

  // ==========================================================================
  // 4. TOPIC A2.1 — ORIGIN OF CELLS [HL] (UPGRADED)
  // ==========================================================================
  {
    topicCode: 'A2.1',
    title: 'Origin of Cells, Miller–Urey Apparatus, RNA World & LUCA (A2.1 HL)',
    summary:
      'Complete HL A2.1 Origin of Cells guide (Allott pp. 36–52; Classroom Notes): early prebiotic reducing Earth, Pasteur\'s swan-neck caveats, 4 chemical-evolution steps, Miller–Urey apparatus critique, fatty-acid vesicles, catalytic ribozymes, Lost City hydrothermal vents, and LUCA dating.',
    sourceFileNames: ['A 2.1 Origin of Cells Notes.pdf'],
    blocks: [
      callout(
        'guiding_questions',
        'Allott & Mindorff Chapter A2.1 HL Guiding Questions (pp. 36–52)',
        '- What plausible chemical and physical steps formed Earth\'s first self-sustaining cells from non-living molecules?\n- What geological, biochemical, and phylogenetic evidence reconstructs the Last Universal Common Ancestor (`LUCA`) despite the impossibility of observing abiogenesis directly?'
      ),
      callout(
        'syllabus_link',
        'HL-Only Syllabus Scope (A2.1.1–A2.1.9 HL · Allott pp. 36–52 · Origin Notes Deck)',
        '- **Prebiotic Earth (`A2.1.1`):** Hot, volcanic, UV-bathed anoxic atmosphere lacking free `O₂` or ozone (`O₃`).\n- **Spontaneous Generation Caveats (`A2.1.2`):** Why cells arise solely from pre-existing cells *today* (`Pasteur`), yet had to arise abiotically *once*.\n- **Four Required Stages (`A2.1.3–A2.1.6`):** Abiotic carbon monomer synthesis (`Miller–Urey`), polymerization (`clay/wet-dry`), membrane vesicles (`fatty acids`), and **RNA World** (`ribozymes`).\n- **Phylogeny & Vents (`A2.1.7–A2.1.9`):** `LUCA` (`~3.8–4.0 Ga`, `355` conserved genes), hydrothermal alkaline vents (`Lost City`), and Stromatolite / `¹³C` evidence.'
      ),
      h2('1. Prebiotic Earth & Why Pasteur Disproved Spontaneous Generation Only Today (A2.1.1–A2.1.2)'),
      p(
        'In modern biology (`Allott pp. 37–39`; `A 2.1 Origin of Cells Notes.pdf`), cell theory states **"all living cells arise solely from pre-existing cells"** via division, verified rigorously by **Louis Pasteur\'s (1859) swan-neck flask experiment**. Boiling nutrient broth sterilized any latent spores inside S-curved flasks open to ambient air; dust-borne bacteria trapped in the dipped U-bend so broth stayed sterile indefinitely until tilted to contact trapped dust or neck-snapped. Yet an apparent paradox arises: if cells originate *only* from existing cells, how did the **very first cell** ever appear on sterile Earth `~4.0 billion years ago`?'
      ),
      p(
        'The paradox dissolves once you recognize **modern Earth is utterly hostile to abiotic genesis**, whereas **Hadean/Archean Earth (~4.2–3.8 Ga)** offered entirely different physical chemistry (`Allott p. 38`). Four contrasts prevented abiogenesis from repeating after life spread: **(1)** prebiotic Earth had virtually **zero free `O₂`**, preventing immediate oxidation of delicate organic monomers (today\'s `21% O₂` rapidly oxidizes bare organics and builds an `O₃` UV shield); **(2)** ancient shallow pools received intense solar **UV light**, hydrothermal heat, and lightning sparks driving endergonic synthesis; **(3)** ancient oceans had zero hungry heterotrophic bacteria waiting to devour organic molecules the instant they formed; and **(4)** early chemical evolution had **hundreds of millions of years** to accumulate concentrates in localized vents and evaporating lagoons.'
      ),
      callout(
        'definition',
        'Four Mandatory Chemical Milestones Required to Build a Minimal Protocell (Allott p. 40)',
        '1. **Non-living synthesis of simple carbon molecules** (amino acids, sugars, fatty acids, nitrogenous bases).\n2. **Polymerization of monomers into macromolecules** (RNA oligomers, short peptides).\n3. **Self-assembly of amphipathic membranes** creating an internal micro-environment separated from open seawater (**protocells/vesicles**).\n4. **Evolution of heritable, self-replicating, catalytic molecules** (**RNA World ribozymes**) prior to DNA and protein takeover.'
      ),
      diag(BIO_V3_A21_ORIGIN_EXPLORER),
      h2('2. Miller–Urey Simulation, Polymerization & Fatty-Acid Protocells (A2.1.3–A2.1.5)'),
      p(
        'In **1953, Stanley Miller and Harold Urey** tested Oparin and Haldane\'s reducing-atmosphere hypothesis inside a closed glass loop (`Allott pp. 40–42`). Boiling seawater evaporated upward into an upper reaction flask filled with reducing gases—**methane (`CH₄`), ammonia (`NH₃`), hydrogen (`H₂`), and water vapour (`H₂O`)**—zapped continuously by `60 kV` electrodes simulating primordial lightning, then cooled through a water-jacketed condenser into a sampling U-trap. Within one week, chemical chromatography detected **`11+` proteinogenic amino acids (`glycine, alanine, aspartic acid`)**, simple carboxylic acids, and organic bases—demonstrating abiotic synthesis of biological monomers without enzymes.'
      ),
      p(
        'IB examiners routinely expect two nuanced **critiques** of Miller–Urey alongside its triumph (`Allott p. 42`). First, planetary geochemistry now indicates Earth\'s bulk primitive atmosphere held mostly **`CO₂`, `N₂`, and `H₂O` (weakly neutral)** rather than strongly reducing `CH₄/NH₃`, lowering bulk spark yields—though local volcanic hydrothermal plumes and meteorite shocks (`e.g., Murchison chondrite containing >90 amino acids`) still provide reducing micro-niches! Second, Miller–Urey yielded simple monomers only, **not** functional long polymers or dividing cells.'
      ),
      p(
        'How did aqueous monomers polymerize when water normally favors **hydrolysis** over **condensation**? Two prebiotic catalysts bridge this gap (`Allott pp. 43–44`): **(a) Tidal/Geothermal wet–dry cycles** concentrate dissolved nucleotides and amino acids on warm porous rock while drying removes `H₂O` thermodynamically to drive condensation, and **(b) negatively charged montmorillonite clay lattices** align incoming nucleotides cleanly so `3\'->5\'` RNA chains up to `50+ nt` assemble abiotically. Meanwhile, short **amphipathic fatty acids** (`8–12 carbons`) spontaneously cluster into hollow bilayer **vesicles** in saline water (`no enzymes required!`). Unlike modern tight phospholipid bilayers, single-chain fatty-acid bilayers stay permeable enough for small nucleotides to diffuse inward while retaining longer folded RNA polymers inside (`Allott p. 45`), letting protocells swell osmotically and split into daughter vesicles under mechanical shear.'
      ),
      diag(BIO_V3_A21_ABIOGENESIS_STEPS),
      h2('3. The RNA World Hypothesis & Deep-Sea Alkaline Vents (A2.1.6–A2.1.9)'),
      p(
        'Early molecular biologists faced a chicken-and-egg dilemma: modern DNA encodes protein enzymes, yet DNA replication itself requires protein DNA polymerases (`D1.1`), while translation requires protein-rich pathways (`D1.2`). **RNA solves this paradox cleanly** (`Allott pp. 46–48`) because single-stranded RNA molecules can BOTH **(1) store complementary base-paired genetic sequences** (`A=U`, `G≡C`) AND **(2) fold into 3D active sites acting as catalytic enzymes called ribozymes** (`Thomas Cech & Sidney Altman`). Over evolutionary generations, catalytic ribozymes likely accelerated proto-replication inside vesicles until more chemically stable double-stranded DNA replaced RNA for archive storage and 20-amino-acid folded proteins took over rapid catalysis.'
      ),
      callout(
        'textbook_excerpt',
        'Three Pieces of Living Molecular Evidence Supporting the RNA World Hypothesis (Allott p. 47)',
        '- **Ribosomal Peptidyl Transferase Is a Ribozyme:** High-resolution X-ray crystallography proves **rRNA**, NOT ribosomal protein, catalyzes peptide-bond formation inside every bacterial (`70S`) and eukaryotic (`80S`) ribosome on Earth.\n- **Universal Ribonucleotide Energy & Redox Cofactors:** Cells run metabolism exclusively on ribose-based carriers—**`ATP`, `GTP`, `NADH`, `FADH₂`, and `Coenzyme A`**—even where deoxyribose would work equally well.\n- **Reverse Transcription & Primer Dependence:** Retroviruses convert RNA back into DNA (`A2.3`), and modern DNA replication STILL cannot start without a short **RNA primer** laid by Primase (`D1.1`)!'
      ),
      p(
        'Where on Archean Earth did chemical gradients continually power proto-metabolism before photosynthesis evolved? Deep-sea **alkaline hydrothermal vents** (`such as modern Lost City white smokers`, `Allott pp. 48–50`) offer a compelling cradle. Unlike toxic `400 °C` acidic black smokers, Lost City serpentine reactions slowly seep warm (`~40–90 °C`), **alkaline (`pH 9–11`), `H₂`-rich fluids** through porous iron–nickel–sulfur (`FeS/NiS`) mineral chimneys directly into slightly **acidic (`pH 5–6`) `CO₂`-rich ocean water**. Remarkably, that natural rocky `pH` gradient across thin mineral pores mirrors modern mitochondrial and chloroplast **chemiosmotic proton gradients** (`H⁺ gradients`), driving abiotic acetyl-thioester synthesis without sunlight or UV damage.'
      ),
      h2('4. Convergent Evidence for LUCA & Earliest Life Timelines (A2.1.7–A2.1.9)'),
      p(
        'Phylogenomic comparisons across Bacteria, Archaea, and Eukarya reconstruct **LUCA** (`Last Universal Common Ancestor`, `Allott pp. 49–51`): an anaerobic, thermophilic chemolithoautotroph living `~3.8–4.0 billion years ago` (possibly inside deep-sea alkaline vents) that left **~355 shared core genes**, universal L-amino acids, universal `64`-codon genetic translation (`A1.2`), `ATP synthase` chemiosmosis, and iron–sulfur enzymes. Remember one vital exam rule: **LUCA was NOT necessarily the very first living cell!** Multiple simpler protocells and competing early lineages almost certainly arose and went extinct during Hadean meteorite bombardments; LUCA represents solely the single ancestral node from which all *surviving* cellular domains diverged.'
      ),
      eq(
        'K = \\frac{\\text{substitutions}}{L} \\qquad t_{\\text{divergence}} = \\frac{K}{r_{\\text{combined}}} \\qquad \\delta^{13}\\text{C} < -25\\text{‰ (Biogenic } ^{12}\\text{C preference)}',
        'Molecular clock substitution rate estimation alongside biogenic carbon isotope fractionation favoring light ¹²C over heavy ¹³C.',
        [
          { symbol: 'K', meaning: 'Genetic sequence divergence (neutral substitutions per nucleotide site)' },
          { symbol: 'r_{\\text{combined}}', meaning: 'Calibrated divergence rate summed across both daughter branches' },
          { symbol: '\\delta^{13}\\text{C}', meaning: 'Carbon isotope depletion ratio diagnostic of enzymatic carbon fixation' },
        ]
      ),
      diag(BIO_V3_A21_CLOCK_WORKED),
      callout(
        'tok_nos',
        'NOS & TOK: Why Historical Sciences Rely on Convergent Indirect Lines of Evidence',
        'Because primordial abiogenesis leaves zero intact soft-bodied cellular fossils from `4.0 Ga`, scientists cannot run a single randomized controlled experiment repeating `500 million years` of ocean chemistry. Instead, historical origin-of-life research gains epistemic warrant via **consilience of independent evidence lines**: Miller–Urey + meteorite chemistry (`carbon monomers`), montmorillonite/vesicle experiments (`self-assembly`), Pilbara **stromatolite** domes (`~3.48 Ga`), Greenland Isua / Jack Hills **¹³C-depleted graphite** (`~3.7–4.1 Ga`), and `355` universally conserved **LUCA** genes.'
      ),
      p(
        'Look closely at how examiners grade **Pasteur\'s Swan-Neck Flasks (`A2.1.2`)** and **Archean Biosignature Critique (`A2.1.9`)** (`Allott pp. 37–39, 50–51`). Pasteur designed three matched experimental treatments isolating airborne microbial dust from hypothetical "vital force" air: **(1)** boiled broth sealed hermetically (`control for sterile nutrient medium`); **(2)** boiled broth open to atmospheric oxygen through a curved S-neck trapping dust by gravity (`staying sterile for months, disproving spontaneous bacterial birth despite continuous fresh O₂ entry!`); and **(3)** identical sterile S-neck flasks either snapped open at the stem or tilted gently so broth washed trapped bend dust backward—both erupting with dense microbial turbidity within days! Similarly, evaluating putative `4.1 Ga` Jack Hills zircon carbon or `3.48 Ga` Australian **Strelley Pool stromatolites** demands ruling out abiotic mineral artifacts: pure hydrothermal Fischer–Tropsch chemistry can mimic dome lamination or subtle carbon isotopes unless coupled with **depleted `δ¹³C < −25‰` enrichment** (`enzymatic Rubisco/acetyl-CoA pathway preference for kinetically faster ¹²C over heavy ¹³C`) alongside preserved layered filamentous micro-mats—making historical origin reconstruction a triumph of **convergent multi-proxy falsification**! Even prebiotic carbonaceous chondrite meteorites such as the `1969 Murchison` fall bolster chemical feasibility cleanly by carrying abiotic racemic amino acids (`equal D- and L-enantiomers`, proving cosmic non-biological provenance unlike pure homochiral L-amino acids inside Earth\'s LUCA descendants!).'
      ),
      h2('5. Exam Markscheme Lexicon (A2.1 HL)'),
      terms([
        {
          term: 'Spontaneous Generation Caveats',
          definitionMarkdown: 'Pasteur proved cells do not arise spontaneously *now* because modern `O₂` oxidizes monomers and microbes consume prebiotic broth.',
          markschemeKeyword: 'modern O2 oxidizes organics + microbes consume broth',
        },
        {
          term: 'Miller–Urey Reducing Apparatus',
          definitionMarkdown: '`CH₄, NH₃, H₂, H₂O` + electrical sparks + condenser trapped amino acids abiotically; critiqued since early bulk atmosphere likely held more `CO₂/N₂`.',
          markschemeKeyword: 'CH4/NH3/H2/H2O sparks -> abiotic amino acids · modern CO2/N2 critique',
        },
        {
          term: 'Amphipathic Protocell Vesicle',
          definitionMarkdown: 'Single-chain fatty acids self-assemble spontaneously into leaky bilayers trapping replicating RNA while letting small monomers enter.',
          markschemeKeyword: 'self-assembly in water · internal compartment · permeable to monomers',
        },
        {
          term: 'RNA World & Ribozymes',
          definitionMarkdown: 'RNA both stored sequence info and catalyzed reactions (`rRNA peptidyl transferase` in ribosomes) prior to DNA + protein specialization.',
          markschemeKeyword: 'information storage + ribozyme catalysis (rRNA evidence)',
        },
        {
          term: 'Alkaline Hydrothermal Vent (Lost City)',
          definitionMarkdown: '`H₂`-rich alkaline fluid meeting acidic `CO₂` seawater across porous `FeS` walls creates natural chemiosmotic proton gradients fueling LUCA.',
          markschemeKeyword: 'natural pH/H+ gradient across porous mineral walls + H2/CO2 fuel',
        },
        {
          term: 'LUCA (Last Universal Common Ancestor)',
          definitionMarkdown: 'Sole ancestral population (`~3.8–4.0 Ga`, `~355` conserved genes, universal genetic code) shared by all living Bacteria, Archaea, and Eukarya—not the very first cell.',
          markschemeKeyword: 'universal genetic code + ~355 shared genes · NOT necessarily first cell',
        },
      ]),
    ],
  },

  // ==========================================================================
  // 5. TOPIC A2.2 PART 1 — MICROSCOPY & MAGNIFICATION (UPGRADED)
  // ==========================================================================
  {
    topicCode: 'A2.2',
    title: 'Microscopy Resolution, Magnification (M = I/A) & Cryo-EM (A2.2.1–A2.2.3)',
    summary:
      'Complete A2.2 microscopy manual (Allott pp. 53–64; A 2.2 Microscope Notes.pdf): compound light vs fluorescent confocal vs TEM vs SEM vs freeze-fracture vs Cryo-EM vitreous imaging, diffraction resolution physics (~200 nm vs 0.2 nm), M = I/A unit math, and Slide 25 80S ribosome correction.',
    sourceFileNames: ['A 2.2 Microscope Notes.pdf', 'B 2.2 Learning Goals.docx'],
    blocks: [
      callout(
        'guiding_questions',
        'Allott & Mindorff Chapter A2.2 Part 1 Guiding Questions (pp. 53–64)',
        '- What physical laws limit the resolution of compound optical light microscopes versus electron microscopes?\n- How do immunofluorescence, freeze-fracture, and vitreous Cryo-EM reveal native molecular complexes inside living or unstained cells?'
      ),
      callout(
        'syllabus_link',
        'IB Syllabus Alignment (A2.2.1–A2.2.3 SL + HL Developments · Allott pp. 53–64 · A 2.2 Microscope Notes.pdf)',
        '- **Cell Theory Micro-evidence (`A2.2.1`):** Light and electron microscopy foundations (`Robert Hooke`, `Antonie van Leeuwenhoek`, `Schleiden/Schwann/Virchow`).\n- **Quantitative Scaling (`A2.2.2`):** Linear magnification (`M = I / A`), scale-bar determination, unit conversion hierarchy (`mm -> µm -> nm`), and biological scale benchmarks.\n- **Advanced Imaging (`A2.2.3`):** Fluorescent stains & confocal laser scanning, freeze-fracture electron microscopy (`bivalve membrane E/P faces`), and **Cryo-EM** (`vitreous liquid-ethane flash-freezing`).'
      ),
      h2('1. Magnification vs Resolution: Why Wavelength Sets the Limit (A2.2.1–A2.2.2)'),
      p(
        'Every microscope question starts by separating **magnification** from **resolution** (`Allott pp. 53–56`; `A 2.2 Microscope Notes.pdf`). **Magnification (`M`)** is strictly how many times larger an image (`I`) appears than the actual biological specimen (`A`): `M = I / A`. You can enlarge a blurry photograph infinitely on a projector screen, raising magnification without uncovering a single new structural detail! By contrast, **resolution** (`resolving power`) is the minimum spatial separation required between two distinct adjacent points so an optical system still distinguishes them as **two separate objects** rather than one smeared blob.'
      ),
      p(
        'Physically, resolving power cannot beat roughly **half the wavelength (`λ / 2`)** of the illuminating radiation (`Abbe diffraction limit`). Compound **light microscopes** shine visible light (`λ = 400–700 nm`, `glass condenser/objective/ocular lenses`), fixing maximum useful resolution near **`~200 nm` (`0.2 µm`)** and practical magnification around `1,000×–1,500×`. That suffices beautifully for red blood cells (`7 µm`), whole bacteria (`1–5 µm`), nuclei (`5–10 µm`), chloroplasts (`5 µm`), and even watching **living cells** divide or stream cytoplasm in wet mounts—yet completely fails to resolve **80S ribosomes (`~25 nm`)**, phospholipid bilayers (`~7.5 nm`), or SARS-CoV-2 virions (`~100 nm`).'
      ),
      p(
        '**Electron microscopes (`TEM` & `SEM`)** replace photons with accelerated electron beams carrying sub-nanometre de Broglie wavelengths (`λ < 0.01 nm`), focused cleanly in a high vacuum by concentric **electromagnetic coils** instead of glass (`Allott pp. 56–59`). High-vacuum beams push resolving power down to **`~0.2–0.5 nm` (`TEM`)** and **`~2–10 nm` (`SEM`)**, exposing mitochondrial cristae, thylakoid grana, nuclear pores, and macromolecular virions. The major trade-off is biological death plus preparation **artefacts**: air/water would scatter electrons wildly, so conventional TEM/SEM specimens must be chemically fixed, dehydrated, coated or heavy-metal stained (`osmium tetroxide`, `lead citrate`, `gold sputter`), and sealed inside a vacuum—killing every living process and producing monochrome images later false-coloured artificially for textbook clarity.'
      ),
      callout(
        'examiner_warning',
        'Classroom Slide 25 Erratum & Order-of-Magnitude Sanity Check',
        '`A 2.2 Microscope Notes.pdf` Slide 25 misprints eukaryotic ribosome size as `~20 µm`. **CORRECTION:** eukaryotic **80S ribosomes measure `20–30 nm` (`0.020–0.030 µm`)** (`prokaryotic 70S ≈ 20 nm`)—a `1,000×` unit typo! If a ribosome were `20 µm`, it would exceed an entire bacterium (`2 µm`), surpass a mitochondrion (`2 µm`), and stand blatantly visible under a low-power school light microscope. Always perform biological order-of-magnitude sanity checks on IB `M = I / A` problems!'
      ),
      diag(BIO_V3_A22_MICROSCOPY_SIM),
      h2('2. TEM vs SEM + Confocal Fluorescence, Freeze-Fracture & Cryo-EM (A2.2.3)'),
      p(
        'Within electron microscopy, contrast **Transmission (`TEM`)** against **Scanning (`SEM`)** cleanly (`Allott pp. 57–58`). **TEM** shoots high-voltage electrons *straight through* ultrathin (`~50 nm`) heavy-metal-stained tissue slices onto a phosphor screen or CCD camera; electron-dense stained regions scatter electrons and appear dark, revealing crisp **2D internal organelle cross-sections** (`cristae`, `rER membranes`, `ribosomes`). **SEM**, conversely, raster-scans a narrow beam across the unbroken outer surface of a specimen sputter-coated in a thin film of gold or platinum; ejected secondary electrons build astonishing **3D surface topography** with deep depth of field (`pollen coats`, `microvilli`, `ciliated tracheal carpets`), though SEM cannot see inside intact cells.'
      ),
      p(
        'Modern cell biology (`A2.2.3`, `Allott pp. 59–62`) bridges optical life-imaging and atomic structural detail using three breakthroughs frequently tested in Paper 1B and Paper 2:'
      ),
      p(
        '1. **Fluorescent Staining & Confocal Laser Scanning Microscopy:** Researchers fuse green fluorescent protein (**GFP**) genetically onto target proteins or attach fluorescent dyes onto monoclonal **antibodies** (`immunofluorescence`) that bind exclusively one antigen (`e.g., tubulin spindle fibres vs actin rings`). A confocal microscope sweeps an excitation laser across one focal plane and passes emitted fluorescence through a tight **confocal pinhole** blocking out-of-focus light from above or below, assembling crystal-clear **3D optical z-stacks inside living cells**.\n2. **Freeze-Fracture Electron Microscopy:** Rapidly frozen cells are cleaved with a cooled blade in vacuum (`Allott p. 61`). Because the fracture follows the plane of least resistance—straight down the hydrophobic hydrocarbon midplane between outer and inner phospholipid leaflets—freeze-fracture exposed transmembrane protein **bumps embedded directly inside the bilayer**, furnishing decisive visual proof for Singer and Nicolson\'s fluid mosaic model (`B2.1`)!\n3. **Cryogenic Electron Microscopy (`Cryo-EM`):** Rather than chemically fixing or staining proteins (`which warps fragile conformations`), aqueous protein suspensions (`ribosomes`, `ATP synthase`, `SARS-CoV-2 Spike`) are plunged millisecond-fast into liquid ethane (`−180 °C`), locking water into crystal-free **vitreous glass-like ice**. Averaging tens of thousands of native frozen particles reconstructs **atomic-level (`~0.2–0.3 nm`) 3D protein structures** in biologically functional states (`2017 Nobel Prize in Chemistry`).'
      ),
      diag(BIO_V3_A22_MICROSCOPE_EXPLORER),
      h2('3. Quantitative Mastery of Scale Bars & Unit Conversions (A2.2.2)'),
      p(
        'Every `M = I / A` problem reduces to one non-negotiable habit: **convert Image size (`I`) and Actual size (`A`) into identical units BEFORE dividing** (`A 2.2 Microscope Notes.pdf`). Biology operates across four powers of `1,000`: meters (`m`), millimetres (`10⁻³ m`), micrometres (`10⁻⁶ m`), and nanometres (`10⁻⁹ m`). Printed textbook or exam micrographs always come measured in millimetres (`mm`) via a physical ruler (`e.g., scale bar measures 24 mm` representing `1.0 µm` actual size). Multiplying `mm × 1,000` instantly puts your ruler number in `µm`, matching cellular dimensions cleanly without power-of-ten errors.'
      ),
      eq(
        'M = \\frac{I}{A} \\qquad A = \\frac{I}{M} \\qquad 1\\text{ mm} = 10^3\\text{ }\\mu\\text{m} = 10^6\\text{ nm}',
        'Core microscopy magnification triangle and metric power-of-thousand scale chain (all variables must share identical units prior to division).',
        [
          { symbol: 'M', meaning: 'Dimensionless linear magnification (written e.g. 24,000x)' },
          { symbol: 'I', meaning: 'Measured printed image or scale-bar length (convert mm to µm or nm)' },
          { symbol: 'A', meaning: 'Actual biological dimension of the cell, organelle, or scale bar value' },
        ]
      ),
      diag(BIO_V3_A22_MAGNIFICATION_WORKED),
      h2('4. Nature of Science: Instrumentation Driving Discovery (Allott pp. 62–64)'),
      callout(
        'tok_nos',
        'NOS & TOK: Observation, Artefacts & Paradigm Shifts via New Apparatus',
        'Notice how scientific paradigms track engineering breakthroughs (`Allott p. 62`): Hooke\'s 1665 compound microscope coined *"cellulae"* in cork walls, Brown\'s 1831 optics revealed nuclei, 1950s TEM exploded early models of a "bag of cytoplasm" by exposing cristae and rER, 1970s freeze-fracture toppled the rigid Davson–Danielli protein sandwich (`B2.1`), and modern **Cryo-EM** watches viral spikes and ATP synthase switch conformations in native vitreous hydration without chemical artefacts.'
      ),
      p(
        'As you carry these imaging skills into the cell ultrastructure lab (`next guide, A2.2.4–A2.2.10`), remember how examiners grade micrograph identification: **prokaryotic vs eukaryotic TEM questions** ask you to justify kingdom assignment using *visible* membrane boundaries (`presence/absence of nuclear envelope`, `70S vs 80S density`, `cristae/grana stacks`), never unseeable textbook facts like circular DNA plasmids unless visible or deduced.'
      ),
      p(
        'Practical laboratory mastery (`A 2.2 Microscope Notes.pdf`, `Allott pp. 54–60`) separates rapid **wet-mount bright-field observation** from heavy-metal **electron microscopy preparation**. In school light microscopy (`C` and `A2.2` practicals), mounting onion *Allium* epidermal peels or *Elodea* leaves in a drop of **distilled water or graded sucrose**, lowering a coverslip at a **`45°` bevel** (`preventing trapped refractive air bubbles`), and irrigating dilute **iodine (`amyloplasts/nuclei`)** or **methylene blue (`cheeks/bacteria`)** leaves organelles hydrated without severe distortion while scanning first under low `4×` (`total 40×`) -> `10×` (`100×`) -> high `40×` (`400×`) objectives using fine focus only (`protecting slides from crushing!`). To convert field-of-view (`FOV`) estimates, calibrate an **eyepiece graticule (`ocular micrometer`)** directly against a **`0.01 mm` (`10 µm` divisions) stage micrometer** BEFORE measuring cells—because changing magnification shrinks actual FOV field area geometrically! Conversely, diagnosing **TEM/SEM preparation artefacts** earns easy Evaluation points on Paper 1B: glutaraldehyde crosslinking and ethanol dehydration extract soluble cytoplasmic components or shrink fragile vacuoles away from walls (`false plasmolysis-like gaps`), osmium tetroxide precipitation leaves opaque spurious droplets mimicking ribosomes unless confirmed across replicate biological sections, and sputtered gold coatings (`~5–10 nm` thick on SEM) obscure the finest sub-`5 nm` membrane pores (`making vitreous Cryo-EM essential whenever atomic protein topology matters!`). Finally, follow strict **IB Biological Drawing Rules (`Command Terms`):** draw observed outlines ONLY with a sharp HB pencil (`zero sketchy shading`), enforce true relative proportions (`e.g., nucleus < 1/4 onion cell width`), finish pointer lines squarely ON structures without crossing, and always write magnification + actual scale (`scale bar = 20 µm`) cleanly beneath every diagram.'
      ),
      h2('5. Exam Markscheme Lexicon (A2.2 Microscopy)'),
      terms([
        {
          term: 'Magnification vs Resolution',
          definitionMarkdown: 'Magnification = `I / A` image enlargement ratio; Resolution = minimum distance distinguishing two close points (`~200 nm` light vs `~0.2 nm` TEM).',
          markschemeKeyword: 'image enlargement (M=I/A) vs separating two close points',
        },
        {
          term: 'Light Microscope Advantage',
          definitionMarkdown: 'Can observe living wet-mounted cells, natural colours, and dynamic processes (mitosis, cyclosis) without vacuum or lethal heavy-metal stains.',
          markschemeKeyword: 'views living specimens + natural colour',
        },
        {
          term: 'TEM vs SEM Output',
          definitionMarkdown: 'TEM transmits electrons through ultrathin sections for 2D internal ultrastructure (`0.5 nm`); SEM scans gold-coated surfaces for 3D external topography (`~2–10 nm`).',
          markschemeKeyword: 'TEM 2D internal sections vs SEM 3D surface scan',
        },
        {
          term: 'Cryo-EM Vitreous Advantage',
          definitionMarkdown: 'Flash-freezing in liquid ethane preserves hydrated native protein conformations without ice crystals, chemical stains, or fixative distortion.',
          markschemeKeyword: 'vitreous ice · native state · zero stains/fixatives',
        },
        {
          term: 'Freeze-Fracture Evidence',
          definitionMarkdown: 'Splits frozen membranes down the hydrophobic bilayer midplane, directly revealing integral transmembrane protein bumps inside lipid sheets.',
          markschemeKeyword: 'cleaves hydrophobic bilayer core -> integral proteins visible',
        },
        {
          term: '80S Ribosome Scale Check',
          definitionMarkdown: 'Eukaryotic 80S ribosomes are `20–30 nm` (`~0.025 µm`)—resolvable ONLY under EM (`Slide 25 typo = 20 µm`).',
          markschemeKeyword: '25 nm (0.025 µm) — requires EM, invisible under light',
        },
      ]),
    ],
  },

  // ==========================================================================
  // 6. TOPIC A2.2 PART 2 — CELL ULTRASTRUCTURE & ENDOSYMBIOSIS (UPGRADED)
  // ==========================================================================
  {
    topicCode: 'A2.2',
    title: 'Interactive Cell Ultrastructure Lab: Animal, Plant & Prokaryote (A2.2.4–A2.2.10)',
    summary:
      'Complete A2.2.4–A2.2.10 cellular ultrastructure treatise (Allott pp. 64–81; A2.2 Cell Structure Notes.pdf): universal cell motifs, prokaryotic vs plant vs animal vs fungal structures, atypical Cell Theory exceptions, binary fission vs mitosis, and HL serial endosymbiosis.',
    sourceFileNames: ['A2.2 Cell Structure Notes.pdf', 'A 2.2 Microscope Notes.pdf'],
    blocks: [
      callout(
        'guiding_questions',
        'Allott & Mindorff Chapter A2.2 Part 2 Guiding Questions (pp. 64–81)',
        '- Which structural features unite every living cell on Earth, and how do prokaryotes differ fundamentally from compartmentalized eukaryotes?\n- How does cellular differentiation, atypical multinucleate anatomy, and endosymbiotic ancestry explain the evolutionary transition from bacteria to complex multicellular organisms?'
      ),
      callout(
        'syllabus_link',
        'IB Syllabus Alignment (A2.2.4–A2.2.10 SL + HL · Allott pp. 64–81 · A2.2 Cell Structure Notes.pdf)',
        '- **SL Core (`A2.2.4–A2.2.7`):** Unified plasma membrane, cytoplasm, DNA, and ribosomes (`A2.2.4`); prokaryotic ultrastructure (`A2.2.5`); eukaryotic animal, plant, and fungal organellar structure + TEM identification (`A2.2.6–A2.2.7`).\n- **HL Extension (`A2.2.8–A2.2.10`):** Atypical cellular exceptions (`muscle syncytia, hyphae, RBCs, sieve tubes`), origin of eukaryotic compartmentalization via **serial endosymbiosis (`A2.2.10`)**, and emergence of multicellularity.'
      ),
      h2('1. Unity Across All Cells & Prokaryotic Architecture (A2.2.4–A2.2.5)'),
      p(
        'Despite dizzying diversity from *Mycoplasma* (`0.3 µm`) to ostrich egg cells (`150 mm`), **four non-negotiable molecular components** appear inside every living cell (`A2.2.4`, `Allott pp. 64–66`): **(1) a selectively permeable plasma membrane** built from an amphipathic phospholipid bilayer maintaining internal chemical homeostasis, **(2) aqueous cytoplasm** hosting enzymatic glycolysis and solutes, **(3) double-stranded DNA** encoding hereditary blueprints, and **(4) ribosomes** catalyzing translation of mRNA into polypeptides using conserved `rRNA` active sites (`A2.1`).'
      ),
      p(
        '**Prokaryotes (`Bacteria` and `Archaea`)** perform every function of life—metabolism, growth, response, homeostasis, nutrition, excretion, reproduction—within a single uncompartmentalized cytoplasm (`A2.2.5`, `Allott pp. 66–69`; `A2.2 Cell Structure Notes.pdf`). Key diagnostic features include: **70S ribosomes (`~20 nm`)** suspended freely beside coupled transcription–translation (`mRNA` starts translating before transcription ends!); **naked circular double-stranded chromosome** localized inside an unbound **nucleoid region** (zero nuclear membrane, zero histone octamers in bacteria); extrachromosomal **plasmids** transferring antibiotic-resistance genes horizontally; a rigid bacterial **peptidoglycan (`murein`) cell wall** outside the plasma membrane resisting osmotic lysis; protective outer polysaccharide **capsule/slime layer** shielding pathogens from phagocytosis; hair-like **pili** anchoring adhesion and bacterial **conjugation** DNA transfer; and a rotating proton-driven **flagellum** lacking `9+2` eukaryotic microtubules.'
      ),
      callout(
        'definition',
        'Prokaryotic Division: Binary Fission (NEVER Call It "Mitosis"!)',
        'Prokaryotes replicate circular DNA at `oriC`, anchor both daughter chromosomes onto elongating plasma membrane points, grow cell-wall septa inward, and split into two genetically identical daughter cells via **binary fission**. Bacteria possess zero mitotic spindles, zero centromeres, and zero centrioles—writing *"bacteria divide by mitosis"* is an instant zero-mark IB penalty!'
      ),
      diag(BIO_V3_A22_CELL_ULTRASTRUCTURE_LAB),
      h2('2. Eukaryotic Animal, Plant & Fungal Ultrastructure + TEM Diagnostics (A2.2.6–A2.2.7)'),
      p(
        '**Eukaryotic cells (`10–100 µm`)** compartmentalize biochemistry behind internal lipid membranes (`Allott pp. 69–75`, expanded further in `B2.2`). The **double nuclear envelope** perforated by `nuclear pores` houses linear histone-bound **chromatin** plus a dense **nucleolus** synthesizing ribosomal `rRNA`. Outside the nucleus, **80S ribosomes (`~25 nm`)** either float freely (`making cytosolic proteins`) or stud cisternae of **rough endoplasmic reticulum (`rER`)** (`synthesizing secretory, lysosomal, or membrane proteins`). Adjacent **smooth ER (`sER`)** manufactures membrane phospholipids, steroids, and detoxifies drugs, shipping cargo onward to the **Golgi apparatus** (`cis -> medial -> trans` stacks) where glycoproteins are glycosylated, trimmed, and packed into exocytic vesicles.'
      ),
      p(
        'Energy transformation divides cleanly between **mitochondria** (`double membrane, infolded inner cristae expanding ETC surface area, 70S matrix ribosomes, circular mtDNA`) across plants, animals, and fungi, and **chloroplasts** (`double outer envelope, stacked thylakoid grana containing chlorophyll, Calvin-rich stroma with 70S ribosomes`) exclusively in photoautotrophic plants and algae (`Allott pp. 71–73`). On Paper 1B and Paper 2 TEM identification tasks, compare kingdom diagnostics sharply: **Animal cells** lack cell walls and chloroplasts, possess **centrioles** organizing microtubule spindles plus small transient phagocytic vesicles/lysosomes; **Plant cells** possess **cellulose cell walls**, **plasmodesmata** cytoplasmic bridges, a large central **tonoplast vacuole** maintaining turgor (`~80%` cell volume), and chloroplasts/amyloplasts while lacking centrioles; **Fungal cells** possess **chitin (`N-acetylglucosamine`) cell walls** without chloroplasts and often form multinucleate filaments.'
      ),
      callout(
        'examiner_warning',
        'Micrograph Identification Protocol: Observe Visible Features First',
        'When an IB exam prints an actual grey-scale TEM micrograph asking you to *Identify* structure X and *Deduce* cell type, NEVER claim *"circular naked DNA proves it is prokaryotic"* unless DNA loops are visible (`usually they are not!`). Instead cite visible traits: absence of nuclear envelope/mitochondria/ER + peptidoglycan coat + small `~1–2 µm` size (`prokaryote`); cellulose polygonal cell wall + large vacuole + grana-stacked chloroplasts (`plant palisade mesophyll`); dense stacked rER + dark zymogen secretory vesicles + microvilli (`pancreatic exocrine acinar animal cell`).'
      ),
      diag(BIO_V3_A22_CELL_KINGDOMS_MATRIX),
      h2('3. Atypical Cell Theory Exceptions & HL Endosymbiosis (A2.2.8–A2.2.10)'),
      p(
        'While classic biology simplifies tissue into discrete `"one cell = one central nucleus"` blocks, Allott (`pp. 75–77`, `A2.2.8`) emphasizes four celebrated organisms and tissues testing the boundaries of traditional Cell Theory:'
      ),
      p(
        '1. **Striated Skeletal Muscle Fibres:** Individual myofibres reach `30+ mm` long with **hundreds of peripheral nuclei** inside one continuous sarcolemma, formed developmentally via fusion of embryonic myoblasts (`multinucleate syncytium`).\n2. **Aseptate Fungal Hyphae:** Fungal filaments lack cross-walls (`septa`), streaming continuous cytoplasm and dozens of mitotic nuclei along uninterrupted mycelial tubes (`coenocytic organization`).\n3. **Giant Unicellular Algae (*Acetabularia*):** Single-celled marine *Acetabularia* grow `1–10 cm` tall with distinct foot, stalk, and umbrella cap—sustained by a **single giant basal nucleus**, challenging assumptions that large macroscopic complexity demands multicellularity.\n4. **Anucleate Mammalian Erythrocytes & Phloem Sieve Tubes:** Mature mammalian red blood cells eject nuclei and mitochondria to maximize haemoglobin oxygen volume (dying after `~120 days`), while plant **phloem sieve-tube elements** dissolve nuclei and vacuoles to clear sugar flow channels, relying metabolically on nucleated **companion cells** via plasmodesmata (`plus non-cellular viruses, A2.3!`).'
      ),
      callout(
        'textbook_excerpt',
        'HL Proof of Serial Endosymbiosis: Seven Structural Matches to Free-Living Bacteria (Allott pp. 78–80)',
        'Lynn Margulis revived the **Endosymbiotic Theory** (`A2.2.10 HL`): an anaerobic ancestral proto-eukaryote engulfed an **aerobic α-proteobacterium** (`becoming the mitochondrion`), and one mitochondriate lineage later engulfed a photosynthetic **cyanobacterium** (`becoming the chloroplast`). Remember **MAD-CRAB** evidence:\n- **M**embranes: Double boundary (inner = bacterial plasma membrane with cardiolipin; outer = host phagocytic vesicle).\n- **A**ntibiotic sensitivity: Chloramphenicol and streptomycin inhibit organellar `70S` translation just like bacteria.\n- **D**NA: Naked circular DNA lacking eukaryotic histones, sequencing phylogenetically closest to α-proteobacteria & cyanobacteria.\n- **C**ristae/Electron carriers: Respiratory complexes embedded directly in inner membrane like bacteria.\n- **R**ibosomes: **`70S` size (`~20 nm`)** matching prokaryotes rather than cytosolic `80S`.\n- **A**utonomous division: Both organelles divide independently inside cytoplasm via **binary fission** before mitosis.'
      ),
      diag(BIO_V3_A22_ENDOSYMBIOSIS_STEPS),
      h2('4. Evolution of Multicellularity, Cell Differentiation & NOS (A2.2.9–A2.2.10)'),
      p(
        'How did single eukaryotic cells (`such as colonial Volvox spheroids`) transition into complex multicellular animals and plants? Evolution favored **clonal cell clustering** (`cells staying stuck after mitosis via extracellular polysaccharides or CAMs`), followed by **division of labor** (`somatic motility/nutrition cells vs sheltered germline gametes`) and **differential gene expression** (`Allott pp. 80–81`). Crucially, virtually every cell in your body—from beating cardiomyocyte to insulin-secreting pancreatic β-cell—retains the **exact same complete diploid DNA sequence**; tissue specialization results purely from transcription factors and epigenetic histone modifications (`A1.2`) switching subsets of genes ON or OFF (`explored further in B2.3`).'
      ),
      p(
        'On IB Paper 1B and Paper 2 **micrograph interpretation (`A2.2.7`, `Allott pp. 70–75`, `A2.2 Cell Structure Notes.pdf`)**, connect visible ultrastructural richness straight onto metabolic workload: **(1) Exocrine Pancreatic Acinar Cell (Animal)** exhibits prominent basal nuclei, sweeping whorls of **rough ER studded with 80S ribosomes** (`mass-synthesizing trypsinogen/amylase`), extensive cis/trans **Golgi stacks**, plentiful mitochondria supplying translation/exocytosis ATP, and dense dark apical **zymogen secretory vesicles** poised beside plasma-membrane ducts; **(2) Leaf Palisade Mesophyll Cell (Plant)** presents a rigid polygonal **cellulose cell wall**, wide central **tonoplast vacuole** pushing cytoplasm peripherally (`maximizing light capture and minimizing gas-diffusion path!`), abundant **grana-stacked chloroplasts** (`containing white refractive starch grains`), and thin **plasmodesmata** channels linking neighboring cells; and **(3) *Escherichia coli* (Prokaryote)** exhibits a compact `~2 µm` capsule/peptidoglycan rod lacking nuclear envelopes or membrane-bound organelles, displaying pale **nucleoid fibrillar DNA**, tiny uniform `70S` ribosomal granularity, and occasional inward **binary-fission septa**. Finally, compare **giant acellular *Caulerpa* seaweeds (`multi-nucleate coenocytic fronds reaching 1 m without internal cell membranes!`)** against multicellular clonal **_Volvox_ spheres (`2,000+` walled cells sharing cytoplasmic bridges and segregating sterile somatic flagellates from protected interior gonidia)**—while remembering why modern isolated mitochondria cannot survive independently on bacterial agar plates despite their `70S` ribosomes: over ~1.5 billion years of symbiosis, **endosymbiotic gene transfer (`EGT`)** relocated ~98% of ancestral α-proteobacterial genes cleanly into the host nucleus (`only ~37 human mitochondrial genes remain inside mtDNA!`).'
      ),
      callout(
        'tok_nos',
        'NOS & TOK: Exceptions Driving Theory Refinement Rather Than Abandonment',
        'When biological anomalies (*Acetabularia*, syncytial skeletal muscle, aseptate hyphae, viruses) violate simple textbook rules (`"all living organisms are made of tiny uninucleate cells"`), science rarely scraps productive frameworks overnight. Instead, cell biologists treat **discrete cellularity** as a deeply useful explanatory model with clearly articulated biological boundaries—distinguishing **discrepancies** that test evolutionary transitions (`coenocytic syncytia`) from true falsification.'
      ),
      eq(
        '\\text{Endosymbiotic Order: } \\text{Proto-Eukaryote} + \\alpha\\text{-Proteobacterium} \\longrightarrow \\text{Mitochondria (ALL)} \\xrightarrow{+\\text{Cyanobacterium}} \\text{Chloroplasts (Plants/Algae)}',
        'Chronological sequence deduced from phylogenetic distribution: mitochondria appear across virtually all eukaryotes, whereas plastids remain restricted to plants and algae.',
        [
          { symbol: '\\alpha\\text{-Proteobacterium}', meaning: 'Aerobic bacterial ancestor engulfed first -> Mitochondrion' },
          { symbol: '\\text{Cyanobacterium}', meaning: 'Oxygenic photosynthetic ancestor engulfed second -> Chloroplast' },
        ]
      ),
      h2('5. Exam Markscheme Lexicon (A2.2 Cell Ultrastructure)'),
      terms([
        {
          term: '70S vs 80S Ribosomes',
          definitionMarkdown: 'Prokaryotes, mitochondria, and chloroplasts use smaller `70S` (`~20 nm`) ribosomes; eukaryotic cytosol & rER use larger `80S` (`~25 nm`) ribosomes.',
          markschemeKeyword: 'prokaryotes/organelles = 70S vs eukaryotic cytosol/rER = 80S',
        },
        {
          term: 'Nucleoid Region',
          definitionMarkdown: 'Unbounded cytosolic zone in prokaryotes containing one circular naked dsDNA chromosome lacking a nuclear envelope or histones.',
          markschemeKeyword: 'unbound region · naked circular DNA · no nuclear envelope',
        },
        {
          term: 'Binary Fission',
          definitionMarkdown: 'Asexual prokaryotic reproduction splitting replicated circular DNA equally via inward membrane/cell-wall growth (never mitosis).',
          markschemeKeyword: 'circular DNA replication + cytoplasmic division (NOT mitosis)',
        },
        {
          term: 'Rough ER -> Golgi Secretory Route',
          definitionMarkdown: 'rER 80S ribosomes synthesize polypeptides -> luminal folding -> transport vesicles -> cis-to-trans Golgi modification -> exocytosis.',
          markschemeKeyword: 'rER translation -> vesicle -> Golgi processing -> exocytic secretion',
        },
        {
          term: 'Atypical Cell Exceptions (HL)',
          definitionMarkdown: 'Striated muscle (multinucleate), aseptate fungal hyphae (continuous cytoplasm), *Acetabularia* (`1–10 cm` single cell), mature RBCs (anucleate).',
          markschemeKeyword: 'multinucleate muscle/hyphae or giant single Acetabularia',
        },
        {
          term: 'Endosymbiotic Evidence (HL)',
          definitionMarkdown: 'Double membrane, circular naked DNA, `70S` ribosomes, independent binary fission, inner ETC localization, and antibacterial sensitivity.',
          markschemeKeyword: 'double membrane + 70S ribosomes + circular naked DNA + binary fission',
        },
      ]),
    ],
  },

  // ==========================================================================
  // 7. TOPIC A2.3 — VIRUSES [HL] (BRAND NEW GUIDE)
  // ==========================================================================
  {
    topicCode: 'A2.3',
    title: 'Viruses: Capsid Diversity, Lytic/Lysogenic Phage λ, HIV-1 & SARS-CoV-2 (A2.3 HL)',
    summary:
      'Brand-new HL-only A2.3 Viruses deep guide grounded directly in Allott & Mindorff (2023, pp. 82–95): acellular obligate parasitism, Table 1 structural comparison (Bacteriophage λ, SARS-CoV-2, HIV-1), lytic vs lysogenic CI/Cro cycles, rapid RNA evolution DBQs (pp. 86, 90–91), and polyphyletic evolutionary origins.',
    sourceFileNames: ['2026 Bio 5HL Course Outline.docx'],
    blocks: [
      callout(
        'guiding_questions',
        'Allott & Mindorff Chapter A2.3 HL Guiding Questions (pp. 82–95)',
        '- What structural features do all viruses share despite possessing enormous genetic and morphological diversity?\n- How do obligate intracellular viruses hijack host translation, execute lytic vs lysogenic cycles, evolve rapidly under immune/drug pressure, and defy single-tree common ancestry?'
      ),
      callout(
        'syllabus_link',
        'HL-Only Syllabus Scope (A2.3.1–A2.3.6 HL · Allott pp. 82–95 · New May 2025+ Core Unit)',
        '- **Shared Viral Architecture (`A2.3.1`):** Nucleic acid core inside protein **capsid** built from repeating **capsomeres**; obligate intracellular parasites outside cellular trees.\n- **Structural Diversity Table 1 (`A2.3.2–A2.3.3`):** **Bacteriophage λ** (`dsDNA`, non-enveloped), **SARS-CoV-2** (`+ssRNA`, enveloped), and **HIV-1** (`diploid +ssRNA retrovirus`, enveloped).\n- **Replication Cycles (`A2.3.4–A2.3.5`):** Temperate phage **lytic vs lysogenic** prophage switching, plus **retroviral reverse transcriptase -> integrase -> provirus**.\n- **Rapid Evolution & Multiple Origins (`A2.3.6`):** Marine virus DBQ (`p. 86`), HIV resistance DBQ (`p. 90`), COVID mutation DBQ (`p. 91`), and progressive/regressive/virus-first origins.'
      ),
      h2('1. Shared Viral Architecture & Obligate Intracellular Parasitism (A2.3.1–A2.3.2)'),
      p(
        '**Viruses are NOT cells** (`Allott pp. 82–84`), lacking plasma-membrane cytoplasm, autonomous ATP metabolism, ribosomes (`70S` or `80S`), and self-directed growth outside living hosts. Instead, an extracellular infectious particle—a **virion**—is a compact genetic delivery capsule (`20–300 nm`, visible ONLY under electron microscopy) consisting unconditionally of just two core structures: **(1) an internal nucleic acid genome** and **(2) an enclosing protein capsid** assembled symmetrically (`icosahedral`, `helical`, or `complex`) from identical repeating polypeptide subunits called **capsomeres**. Encoding a tiny repeating capsomere monomer allows small viral genomes (`e.g., HIV ~9.7 kb, Phage λ ~48.5 kb`) to assemble enormous geometric shields cleanly—an evolutionary principle known as **genetic economy**.'
      ),
      p(
        'Surrounding the capsid, many animal viruses (`SARS-CoV-2`, `HIV-1`, `Influenza`) acquire an outer **phospholipid bilayer envelope** by budding through host endoplasmic reticulum, Golgi, or plasma membranes (`exocytosis`). Viral glycoproteins (`Spike` on SARS-CoV-2, `gp120/gp41` on HIV) project through this envelope like molecular keys. Crucially, phospholipid envelopes confer two opposite consequences: they camouflage viral capsids behind host lipids while presenting specific **host-receptor binding keys**, YET render enveloped viruses fatally fragile to household **detergents/soaps and `70%` ethanol**, which strip lipid envelopes cleanly (non-enveloped phages and poliovirus resist soap far better!).'
      ),
      callout(
        'definition',
        'Four Dimensions of Viral Genome Diversity (Allott p. 84 · Unlike All Cellular Organisms!)',
        'Every free-living cellular organism stores heredity exclusively in **double-stranded DNA**. Viruses alone exploit **every biochemical permutation**:\n- **Nucleic Acid Sugar:** `DNA` or `RNA` (never both inside one virion).\n- **Strandedness:** Double-stranded (`dsDNA`, `dsRNA`) OR single-stranded (`ssDNA`, `ssRNA`).\n- **RNA Polarity:** Positive-sense **`+ssRNA`** (`directly readable as mRNA by host ribosomes, e.g., SARS-CoV-2`) vs negative-sense **`−ssRNA`** (`must pack viral RdRp to transcribe readable +mRNA first, e.g., Influenza/Rabies`) vs **retroviral `+ssRNA`** (`reverse-transcribed to cDNA, e.g., HIV-1`).'
      ),
      diag(BIO_V3_A23_VIRUS_EXPLORER),
      h2('2. Temperate Bacteriophage λ: Lytic Hijack vs Lysogenic Prophage (A2.3.3–A2.3.4)'),
      p(
        '**Bacteriophage λ** (`Allott Table 1 p. 85 & pp. 87–88`) illustrates complex non-enveloped phage symmetry: a `60 nm` icosahedral head holding `48.5 kb` linear **dsDNA**, joined via a collar onto a hollow non-contractile helical tail terminating in receptor-binding tail fibres. Upon recognizing maltoporin (`LamB`) channels on *Escherichia coli*, tail fibres lock onto the bacterial wall and inject linear dsDNA down the hollow tail—leaving the hollow protein shell completely outside (`A1.2 Hershey–Chase`)—where host DNA ligase circularizes sticky *cos* ends immediately.'
      ),
      p(
        'Inside the infected bacterium, Phage λ enters a genetic bistable switch (**`CI` vs `Cro` repressors**, `Allott pp. 87–88`) deciding between **lytic** and **lysogenic** life cycles:'
      ),
      p(
        '- **Lytic Cycle (Immediate Virion Production & Cell Death):** When host cells are metabolically stressed or UV-damaged, viral early genes hijack host RNA polymerase, shut down bacterial gene expression, replicate phage dsDNA dozens of times, synthesize capsomeres and tails on host `70S` ribosomes, package DNA into proheads, and secrete viral **holins + lysozyme**. Lysozyme hydrolyzes peptidoglycan crosslinks, **lysing** the bacterium explosively to scatter `~100–200` new phages.\n- **Lysogenic Cycle (Silent Vertical Dormancy):** When bacteria divide happily in rich medium, viral **`CI` repressor** silences all lytic genes and phage **integrase** splices circular λ DNA covalently into the *E. coli* chromosome as a **dormant prophage**. Every bacterial binary fission copies the prophage faithfully into both daughter cells—zero lysis, zero host death—until future UV light or starvation activates host `RecA` protease, cleaving `CI` and triggering prophage excision directly into the lytic cycle (`induction`).'
      ),
      diag(BIO_V3_A23_PHAGE_CYCLES_STEPS),
      h2('3. Coronaviruses (SARS-CoV-2), HIV Retroviruses & Rapid Evolution DBQs (A2.3.5–A2.3.6)'),
      p(
        '**SARS-CoV-2** (`Allott Table 1 p. 85 & COVID DBQ p. 91`) carries a large `~30 kb` linear **`+ssRNA`** genome wrapped by helical **nucleocapsid (`N`) proteins** inside a spherical host-derived lipid envelope studded with trimeric **Spike (`S`) glycoproteins**. Spike binds human **ACE2 receptors** on Type II pneumocytes (`B2.3`) and upper airway mucosa. Once fused/endocytosed, viral `+ssRNA` acts immediately as functional mRNA on host **80S ribosomes** (`plus ER translocation`) to translate an **RNA-dependent RNA polymerase (`RdRp`)** complex that copies negative-sense templates back into thousands of new `+ssRNA` genomes before budding out by exocytosis. Note **zero reverse transcriptase** operates in coronaviruses—unlike HIV!'
      ),
      p(
        '**HIV-1** (`Human Immunodeficiency Virus`, `Allott pp. 89–90`) is an enveloped **retrovirus** bearing two identical **`+ssRNA`** molecules inside a distinctive **conical capsid** alongside pre-packaged **reverse transcriptase**, **integrase**, and **protease**. Outer `gp120/gp41` envelope knobs lock onto **CD4 receptors** plus `CCR5/CXCR4` co-receptors on human **helper T lymphocytes (`TH`)** and macrophages, triggering direct envelope fusion. Because human cells lack enzymes capable of copying RNA into DNA, HIV MUST deliver pre-packaged **reverse transcriptase** (`RNA -> cDNA -> dsDNA`), followed by **integrase** inserting viral DNA permanently into a host chromosome as a **latent provirus** (mirrored lysogenically!). Transcription by host RNA Polymerase II later produces viral mRNAs and cleaved polyproteins (via HIV **protease**) yielding progressive CD4⁺ lymphocyte depletion and AIDS.'
      ),
      callout(
        'textbook_excerpt',
        'Why Viruses Evolve Dramatically Faster Than Cellular Organisms (Allott pp. 86, 90–92 DBQs)',
        '- **High Polymerase Error Rates Without Proofreading:** Unlike cellular DNA Pol III (`~1 error in 10⁹–10¹⁰ bp` via `3\'->5\'` exonuclease proofreading, `D1.1`), viral **reverse transcriptase** (`HIV`, `~10⁻⁴/bp`) and **RdRp** (`Influenza/SARS-CoV-2`) lack robust proofreading—explaining why one untreated HIV patient generates swarm variants evading single-drug monotherapy (`Allott HIV DBQ p. 90`, requiring multi-target **combination ART** blocking RT + integrase + protease simultaneously!). Note: SARS-CoV-2 encodes a rare `nsp14` partial exonuclease lowering rate relative to flu yet still evolves Omicron Spike escape variants via enormous global population turnover (`Allott COVID DBQ p. 91`).\n- **Tiny Generation Times & Segmented Reassortment:** Thousands of virions bud per infected cell within hours; segmented viruses (`Influenza` `8` RNA segments) undergo abrupt **antigenic shift** when human and avian flu co-infect one pig cell (`vs gradual mutation antigenic drift`).'
      ),
      diag(BIO_V3_A23_VIRUS_COMPARISON),
      h2('4. Polyphyletic Viral Origins & Nature of Science (A2.3.6)'),
      p(
        'Why do viruses lack a single universal phylogenetic tree rooted in `LUCA` (`Allott pp. 93–94`)? Unlike every cellular organism sharing homologous `16S/18S rRNA` genes, **viruses share zero universal hallmark gene** across all phage, coronavirus, and retrovirus families! Accordingly, virologists favor **polyphyletic (multiple independent) origins** combining three hypotheses: **(1) Progressive / Escape Hypothesis** (`mobile transposons/plasmids escaping host cells after stealing capsid coat proteins` — fits retroviruses closely), **(2) Regressive / Reduction Hypothesis** (`degenerate parasitic bacteria shedding ribosomes and metabolism until reduced to dsDNA cores` — fits giant amoeba **Mimivirus/Pandoravirus** encoding partial tRNA synthetases!), and **(3) Virus-First Hypothesis** (`pre-cellular RNA-World replicators parasitizing protocells prior to LUCA`). Convergent evolution explains why unrelated viral lineages independently share efficient **icosahedral capsids** (`genetic economy`) and stolen host lipid envelopes.'
      ),
      callout(
        'tok_nos',
        'NOS & TOK: Biological Classification & Defining "Living" Beyond Rigid Dichotomies',
        'Are viruses alive? Inside a host cell, HIV and Phage λ reproduce, mutate, evolve under natural selection (`immune escape`, `drug resistance`), and show exquisite molecular order; outside a host, a crystallized virion exhibits zero metabolism, growth, homeostasis, or response (`Allott p. 83`). Notice how `2025–2028` IB Biology treats "life" not as a brittle checkbox dogma, but as a continuum requiring precise operational definitions (`free-living cellular life` vs `obligate acellular genetic parasites`)—directly paralleling `Marine Viruses DBQ (Allott p. 86)` showing phages regulate oceanic carbon cycling by lysing `~20%` of marine microbes daily!'
      ),
      p(
        'Look closely at two data-based insights emphasized in Allott (`pp. 86, 90–91`). In the **Marine Viral Shunt DBQ (`p. 86`)**, coastal seawater harbors `~10⁷–10⁸` bacteriophages per millilitre (`outnumbering host bacteria ~10:1`!); daily phage lysis bursts marine heterotrophic bacteria and cyanobacteria into dissolved organic matter (`DOM`) recycled locally by surviving bacteria rather than sinking to deep ocean sediments or climbing into copepod/fish food chains—quantifying how acellular viruses steer global marine carbon budgets. Similarly, in the **HIV Antiretroviral DBQ (`p. 90`)**, monotherapy with a single reverse-transcriptase nucleoside inhibitor (`AZT`) drops patient plasma viral RNA sharply for weeks, YET within months viral load rebounds back near baseline carrying `RT` active-site resistance mutations (`since error-prone reverse transcriptase generates ~1 mutation per replicated ~9.7 kb HIV genome!`); combining **three distinct targets simultaneously** (`2 RT inhibitors + 1 integrase or protease inhibitor` = **combination ART**) drops the statistical probability of three simultaneous resistance mutations on one virion near zero (`(~10⁻⁴)³ = 10⁻¹²`), suppressing HIV to undetectable plasma counts indefinitely unless adherence breaks.'
      ),
      eq(
        '\\text{HIV Retroviral Flow: } (+\\text{ssRNA})_2 \\xrightarrow{\\text{Rev. Transcriptase}} \\text{dsDNA} \\xrightarrow{\\text{Integrase}} \\text{Host Provirus} \\xrightarrow{\\text{Host RNAP II}} \\text{mRNA} + \\text{Protease} \\to \\text{Virions}',
        'Reverse Central Dogma pathway inside HIV-1-infected CD4+ helper T lymphocytes, targeted simultaneously by combination antiretroviral therapy (cART).',
        [
          { symbol: '\\text{Rev. Transcriptase}', meaning: 'Virion-packaged RNA-dependent DNA polymerase (error-prone -> rapid drug resistance)' },
          { symbol: '\\text{Integrase}', meaning: 'Inserts viral cDNA into host chromosome creating incurable latent provirus' },
          { symbol: '\\text{Protease}', meaning: 'Cleaves long viral polyprotein precursors into mature structural/enzyme units' },
        ]
      ),
      h2('5. Exam Markscheme Lexicon (A2.3 HL)'),
      terms([
        {
          term: 'Capsomere & Genetic Economy',
          definitionMarkdown: 'Identical repeating protein monomers assembling symmetrical capsids so minuscule viral genomes need only one tiny structural gene.',
          markschemeKeyword: 'repeating capsid subunits -> small genome builds full coat',
        },
        {
          term: 'Lysogenic Prophage vs Provirus',
          definitionMarkdown: 'Phage λ dsDNA integrated silently into bacterial host chromosome (`prophage`); retroviral HIV cDNA integrated into eukaryotic chromosome (`provirus`).',
          markschemeKeyword: 'dormant integrated phage DNA (prophage) vs HIV cDNA (provirus)',
        },
        {
          term: 'Positive-Sense +ssRNA (SARS-CoV-2)',
          definitionMarkdown: 'Viral RNA readable directly as functional mRNA by host `80S` ribosomes immediately upon entry to translate viral RdRp (NO reverse transcriptase).',
          markschemeKeyword: 'acts directly as mRNA · translates viral RdRp · no RT',
        },
        {
          term: 'Reverse Transcriptase (HIV-1)',
          definitionMarkdown: 'Virion-packaged enzyme synthesizing complementary dsDNA from RNA template; error-prone without proofreading, driving rapid mutation.',
          markschemeKeyword: 'RNA -> DNA reverse central dogma · error-prone -> drug escape',
        },
        {
          term: 'Antigenic Drift vs Shift',
          definitionMarkdown: 'Drift = gradual point mutations in surface glycoproteins (`Spike/HA`) via error-prone RdRp/RT; Shift = abrupt reassortment of segmented RNA co-infecting one cell.',
          markschemeKeyword: 'point mutation (drift) vs segmented co-infection swap (shift)',
        },
        {
          term: 'Three Viral Origin Hypotheses',
          definitionMarkdown: 'Progressive (escaped transposons), Regressive (reduced intracellular bacteria, e.g., Mimivirus), and Virus-First (pre-cellular RNA replicators) -> polyphyletic.',
          markschemeKeyword: 'progressive escape + regressive reduction + virus-first = polyphyletic',
        },
      ]),
    ],
  },
];
