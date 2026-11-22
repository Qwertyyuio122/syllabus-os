import type { ClassroomSeedQuestion } from '../types';

export const CHEMISTRY_SL_QUESTIONS: ClassroomSeedQuestion[] = [
  // =========================================================================
  // S1 LAB & UNCERTAINTIES (6 questions)
  // =========================================================================
  {
    topicCode: 'S1',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Select',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      'Under the 2025–2028 IB Chemistry Data Booklet, what is the official molar volume of an ideal gas at **STP** ($273.15\\text{ K}$ and $100\\text{ kPa}$)?',
    mcqOptions: [
      { label: 'A', text: '$22.4\\text{ dm}^3\\text{ mol}^{-1}$' },
      { label: 'B', text: '$22.7\\text{ dm}^3\\text{ mol}^{-1}$' },
      { label: 'C', text: '$24.0\\text{ dm}^3\\text{ mol}^{-1}$' },
      { label: 'D', text: '$24.8\\text{ dm}^3\\text{ mol}^{-1}$' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select B ($22.7\\text{ dm}^3\\text{ mol}^{-1}$).', marks: 1 }],
      model_answer: '**B.** IUPAC and IB STP uses $100\\text{ kPa}$ and $273.15\\text{ K}$, yielding $V_m = RT/P = 22.7\\text{ dm}^3\\text{ mol}^{-1}$ (never the obsolete $101.3\\text{ kPa}$ value $22.4$).',
    },
    sourceFileNames: [
      'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      'Lab INFO  measurement-and-data-processing.pdf',
    ],
  },
  {
    topicCode: 'S1',
    paperType: 'Paper 1B (Data-Based)',
    commandTerm: 'Determine',
    difficulty: 'Standard IB',
    maxMarks: 3,
    stimulusMarkdown:
      '| Burette Reading | Volume / $\\text{cm}^3$ ($\\pm 0.05$) |\n| :--- | :---: |\n| Initial reading ($V_i$) | $1.20$ |\n| Final reading ($V_f$) | $26.20$ |',
    questionMarkdown:
      'A $50.00\\text{ cm}^3$ analogue burette ($\\pm 0.05\\text{ cm}^3$ per reading) records $V_i = 1.20\\text{ cm}^3$ and $V_f = 26.20\\text{ cm}^3$ during an acid–base titration. **Determine** the delivered titre volume $\\Delta V$, its absolute uncertainty, and its percentage uncertainty.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Delivered volume $\\Delta V = 26.20 - 1.20 = 25.00\\text{ cm}^3$ (retained to 2 d.p.).', marks: 1, keywords: ['25.00 cm³'] },
        { code: 'M1', criterion: 'Add absolute uncertainties across two meniscus readings: $0.05 + 0.05 = \\pm 0.10\\text{ cm}^3$.', marks: 1, keywords: ['±0.10', 'two readings'] },
        { code: 'A1', criterion: 'Percentage uncertainty $= \\frac{0.10}{25.00}\\times 100\\% = 0.40\\%$.', marks: 1, keywords: ['0.40%'] },
      ],
      model_answer:
        '$\\Delta V = 26.20 - 1.20 = \\mathbf{25.00\\text{ cm}^3}$. Because subtraction requires two readings, absolute uncertainties add: $\\delta(\\Delta V) = \\pm 0.05 + \\pm 0.05 = \\mathbf{\\pm 0.10\\text{ cm}^3}$. Relative uncertainty $= \\frac{0.10}{25.00}\\times 100\\% = \\mathbf{0.40\\%}$.',
      examiner_notes: 'Reporting ±0.05 cm³ for a delivered burette volume loses M1 even if percentage arithmetic follows correctly.',
    },
    sourceFileNames: [
      'Lab INFO  measurement-and-data-processing.pdf',
      'Lab INFO propagation-of-uncertainties.pdf',
    ],
  },
  {
    topicCode: 'S1',
    paperType: 'Paper 1B (Data-Based)',
    commandTerm: 'Evaluate',
    difficulty: 'Standard IB',
    maxMarks: 3,
    stimulusMarkdown:
      '- Literature $\\Delta H_{\\text{neut}}^\\circ = -57.3\\text{ kJ mol}^{-1}$\n- Experimental coffee-cup mean $\\Delta H = -48.6\\text{ kJ mol}^{-1}$\n- Total propagated random uncertainty $= \\pm 4.2\\%$',
    questionMarkdown:
      '**Evaluate** whether the discrepancy between the experimental enthalpy value and literature value is explained by random measurement uncertainties, and suggest ONE targeted modification to improve accuracy.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Calculate percentage error $= \\frac{|-48.6 - (-57.3)|}{|-57.3|}\\times 100\\% = 15.2\\%$.', marks: 1, keywords: ['15.2%'] },
        { code: 'A1', criterion: 'Identify dominant systematic heat loss because $\\%\\text{ error } (15.2\\%) > \\%\\text{ random uncertainty } (4.2\\%)$.', marks: 1, keywords: ['systematic error', 'heat loss'] },
        { code: 'A1', criterion: 'Valid procedural fix: polystyrene lid, insulation, or cooling-curve extrapolation to $t_0$.', marks: 1, keywords: ['lid', 'cooling curve', 'extrapolat'] },
      ],
      model_answer:
        '$\\%\\text{ error} = \\frac{8.7}{57.3}\\times 100\\% = \\mathbf{15.2\\%}$, which substantially exceeds the total random uncertainty of $\\pm 4.2\\%$. Therefore **systematic error**—principally thermal heat loss to the calorimeter/surroundings making experimental $|\\Delta H|$ smaller—dominates over random instrument precision. Adding an insulated lid and applying **cooling-curve temperature extrapolation** back to the time of mixing reduces this systematic bias.',
    },
    sourceFileNames: [
      'Lab INFO experimental-errors-summary.pdf',
      'Lab INFO propagation-of-uncertainties.pdf',
    ],
  },
  {
    topicCode: 'S1',
    paperType: 'Paper 1B (Data-Based)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 3,
    questionMarkdown:
      'According to *Lab INFO: Propagation of Uncertainties*, calculate $X = A \\times B$ with properly rounded uncertainty where $A = 123.0 \\pm 0.5$ and $B = 8.4 \\pm 0.3$.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Compute percentage uncertainties: $\\frac{0.5}{123.0}\\times 100 = 0.407\\%$; $\\frac{0.3}{8.4}\\times 100 = 3.571\\%$; sum $= 3.98\\%$.', marks: 1 },
        { code: 'M1', criterion: '$X = 123.0 \\times 8.4 = 1033.2$ and $\\delta X = 1033.2 \\times 0.0398 = 41.1$.', marks: 1 },
        { code: 'A1', criterion: 'Since $\\%\\delta X > 2\\%$, round uncertainty to 1 s.f. ($\\pm 40$) and match value place value: **$1030 \\pm 40$**.', marks: 1, keywords: ['1030 ± 40'] },
      ],
      model_answer:
        '$\\%\\delta A = 0.407\\%$, $\\%\\delta B = 3.571\\%$, so total $\\%\\delta X = 3.98\\%$. Raw product $X = 1033.2$ and absolute uncertainty $= 41.1$. Rounding $\\delta X$ to 1 s.f. gives $\\pm 40$ (tens place), so $X$ rounds to the tens place: **$1030 \\pm 40$**.',
    },
    sourceFileNames: ['Lab INFO propagation-of-uncertainties.pdf'],
  },
  {
    topicCode: 'S1',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      'Before performing an acid–base titration, a student rinses each piece of glassware. Which rinsing protocol introduces **zero systematic error** into the determined analyte concentration?',
    mcqOptions: [
      { label: 'A', text: 'Rinse burette, pipette, and conical flask all with deionized water only' },
      { label: 'B', text: 'Rinse burette with titrant, pipette with analyte, and conical flask with deionized water only' },
      { label: 'C', text: 'Rinse burette, pipette, and conical flask all with analyte solution' },
      { label: 'D', text: 'Rinse burette with deionized water only and conical flask with analyte' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select B.', marks: 1 }],
      model_answer: '**B.** Burette and pipette must finish with the exact solution they deliver (avoiding dilution), whereas the conical flask must only be rinsed with deionized water so extra analyte moles are not added.',
    },
    sourceFileNames: ['Lab INFO selected-laboratory-techniques.pdf', 'Lab INFO making-measurements-in-the-lab.pdf'],
  },
  {
    topicCode: 'S1',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Compare',
    difficulty: 'Standard IB',
    maxMarks: 3,
    stimulusMarkdown:
      'Three replicate titrations give concordant titres: $22.40\\text{ cm}^3$, $22.50\\text{ cm}^3$, $22.45\\text{ cm}^3$ (after rejecting a rough trial of $23.10\\text{ cm}^3$).',
    questionMarkdown:
      '(a) State why the rough trial is excluded. [1] (b) Distinguish between **random** and **systematic** errors in terms of their effect on precision/accuracy and whether additional repeat trials reduce each error. [2]',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Rough run intentionally overshoots endpoint to locate approximate equivalence and is non-concordant ($>0.10\\text{ cm}^3$ away).', marks: 1 },
        { code: 'A1', criterion: 'Random errors cause bilateral scatter lowering precision and ARE reduced by averaging repeat trials.', marks: 1, keywords: ['precision', 'reduced by repeating'] },
        { code: 'A1', criterion: 'Systematic errors bias all values in one direction lowering accuracy and are NOT reduced by repeating.', marks: 1, keywords: ['accuracy', 'same direction', 'not reduced'] },
      ],
      model_answer:
        '(a) The rough titration is a fast range-finder that overshoots the endpoint ($>0.10\\text{ cm}^3$ outside concordant runs), so including it skews the mean. (b) Random errors fluctuate equally above/below the mean, reducing **precision**, and are minimized by taking repeat trials. Systematic errors shift every trial consistently in one direction, reducing **accuracy**, and are **not reduced** by repeating.',
    },
    sourceFileNames: ['Lab INFO experimental-errors-summary.pdf', 'Lab INFO  measurement-and-data-processing.pdf'],
  },

  // =========================================================================
  // S1.1 PARTICULATE NATURE OF MATTER (5 questions)
  // =========================================================================
  {
    topicCode: 'S1.1',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin S1.1 EOT Q2)* Which of the following are examples of **homogeneous mixtures**?\n\nI. Air\nII. Steel\nIII. Aqueous potassium manganate(VII), $\\text{KMnO}_4(aq)$',
    mcqOptions: [
      { label: 'A', text: 'II only' },
      { label: 'B', text: 'III only' },
      { label: 'C', text: 'I and II only' },
      { label: 'D', text: 'I, II and III' },
    ],
    correctMcqOption: 'D',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select D (I, II and III).', marks: 1 }],
      model_answer: '**D.** Air (gaseous solution), steel (interstitial solid-solution alloy), and dissolved $\\text{KMnO}_4(aq)$ all exhibit uniform composition throughout a single phase.',
    },
    sourceFileNames: [
      'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      'Textbook - S1.1-S1.3 End of Topic Review Answers .pdf',
    ],
  },
  {
    topicCode: 'S1.1',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin S1.1 EOT Q3)* Which row correctly describes the sublimation of dry ice (solid carbon dioxide)?',
    mcqOptions: [
      { label: 'A', text: 'Exothermic | $\\text{CO}_2(s) \\to \\text{CO}_2(g)$' },
      { label: 'B', text: 'Exothermic | $\\text{CO}_2(s) \\to \\text{C}(g) + \\text{O}_2(g)$' },
      { label: 'C', text: 'Endothermic | $\\text{CO}_2(s) \\to \\text{CO}_2(g)$' },
      { label: 'D', text: 'Endothermic | $\\text{CO}_2(s) \\to \\text{C}(g) + \\text{O}_2(g)$' },
    ],
    correctMcqOption: 'C',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select C.', marks: 1 }],
      model_answer: '**C.** Sublimation converts solid directly to gas without breaking intramolecular $\\text{C=O}$ covalent bonds; energy must be absorbed to overcome intermolecular forces (endothermic).',
    },
    sourceFileNames: [
      'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      'Textbook - S1.1-S1.3 End of Topic Review Answers .pdf',
    ],
  },
  {
    topicCode: 'S1.1',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin S1.1 EOT Q8)* Which change in temperature on the Celsius scale is equivalent to an increase in temperature by $20\\text{ K}$?',
    mcqOptions: [
      { label: 'A', text: 'Decrease by $20^\\circ\\text{C}$' },
      { label: 'B', text: 'Increase by $20^\\circ\\text{C}$' },
      { label: 'C', text: 'Decrease by $293.15^\\circ\\text{C}$' },
      { label: 'D', text: 'Increase by $293.15^\\circ\\text{C}$' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select B (increase by 20 °C).', marks: 1 }],
      model_answer: '**B.** Because Kelvin and Celsius share identical unit step size ($1\\text{ K} = 1^\\circ\\text{C}$), any temperature **change** $\\Delta T$ has the exact same value on both scales.',
    },
    sourceFileNames: [
      'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      'Textbook - S1.1-S1.3 End of Topic Review Answers .pdf',
    ],
  },
  {
    topicCode: 'S1.1',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Explain',
    difficulty: 'Standard IB',
    maxMarks: 3,
    questionMarkdown:
      '*(Bylikin S1.1 EOT Q9 & Q14)* (a) **Explain** why the temperature of pure ice stays constant at $0^\\circ\\text{C}$ during melting despite continuous heat input. [2] (b) **Explain** why Kelvin temperature is directly proportional to average kinetic energy while Celsius is not. [1]',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'During melting, absorbed thermal energy overcomes intermolecular hydrogen bonds (increasing potential energy),', marks: 1, keywords: ['overcome intermolecular forces', 'potential energy'] },
        { code: 'A1', criterion: 'so average translational/kinetic energy of particles stays constant ($T$ invariant).', marks: 1, keywords: ['average kinetic energy remains constant'] },
        { code: 'A1', criterion: '$0^\\circ\\text{C}$ is an arbitrary melting-point reference ($273.15\\text{ K}$) where kinetic energy is non-zero; only $0\\text{ K}$ corresponds to minimal/zero kinetic energy.', marks: 1, keywords: ['absolute zero', '0 K'] },
      ],
      model_answer:
        '(a) At $0^\\circ\\text{C}$, supplied energy increases **potential energy** by overcoming hydrogen bonds holding the crystal lattice rigid; **average kinetic energy** (and thus temperature) remains constant until melting finishes. (b) $0^\\circ\\text{C}$ corresponds to nonzero particle motion ($273.15\\text{ K}$), whereas $0\\text{ K}$ represents minimum particle energy, making $\\bar{E}_k \\propto T(\\text{K})$.',
    },
    sourceFileNames: [
      'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      'Textbook - S1.1-S1.3 End of Topic Review Answers .pdf',
    ],
  },
  {
    topicCode: 'S1.1',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Describe',
    difficulty: 'Foundation',
    maxMarks: 3,
    questionMarkdown:
      '*(Bylikin S1.1 EOT Q13)* A student prepares aqueous copper(II) sulfate crystals by reacting excess insoluble $\\text{CuO}(s)$ with warm dilute $\\text{H}_2\\text{SO}_4(aq)$. Outline the three physical separation steps needed to isolate pure dry hydrated $\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}$ crystals (do not decompose the hydrate).',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '**Filter** the hot mixture to remove unreacted excess insoluble $\\text{CuO}(s)$ residue and keep the blue filtrate.', marks: 1, keywords: ['filter', 'excess CuO'] },
        { code: 'A1', criterion: 'Partially **evaporate / heat** the filtrate until crystallization point (saturated solution), then **cool** to crystallize.', marks: 1, keywords: ['evaporate', 'crystallization', 'cool'] },
        { code: 'A1', criterion: 'Filter/decant crystals, wash briefly with cold deionized water, and dry gently with filter paper (not strong heating/boiling dry).', marks: 1, keywords: ['dry', 'filter paper'] },
      ],
      model_answer:
        '1. **Filter** off the excess solid $\\text{CuO}(s)$, collecting the clear blue $\\text{CuSO}_4(aq)$ filtrate. 2. Gently heat to partially **evaporate** water to reach saturation, then allow to **cool slowly** for crystallization. 3. Filter the crystals and blot dry gently between filter papers (avoid heating to dryness, which drives off crystallization water).',
    },
    sourceFileNames: [
      'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      'Day 1 - Classification of matter and intro to periodic trends.pdf',
    ],
  },

  // =========================================================================
  // S1.2 THE NUCLEAR ATOM & MASS SPEC (5 questions)
  // =========================================================================
  {
    topicCode: 'S1.2',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Deduce',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown: '*(Bylikin S1.2 EOT Q2)* What is the subatomic composition of $^{63}_{29}\\text{Cu}^{2+}$?',
    mcqOptions: [
      { label: 'A', text: '29 protons, 34 neutrons, 27 electrons' },
      { label: 'B', text: '29 protons, 34 neutrons, 31 electrons' },
      { label: 'C', text: '34 protons, 63 neutrons, 31 electrons' },
      { label: 'D', text: '34 protons, 29 neutrons, 27 electrons' },
    ],
    correctMcqOption: 'A',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select A (29 p⁺, 34 n⁰, 27 e⁻).', marks: 1 }],
      model_answer: '**A.** $Z = 29$ protons; $N = 63 - 29 = 34$ neutrons; $+2$ charge means $29 - 2 = 27$ electrons.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'S1.2',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Standard IB',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin S1.2 EOT Q3)* Which properties are the **same** for both $^1\\text{H}_2$ and $^2\\text{H}_2$ (deuterium gas)?\n\nI. Boiling point\nII. Chemical reactions with oxygen\nIII. Number of protons per molecule\nIV. Density at STP',
    mcqOptions: [
      { label: 'A', text: 'I and III only' },
      { label: 'B', text: 'I and IV only' },
      { label: 'C', text: 'II and III only' },
      { label: 'D', text: 'I, II and III only' },
    ],
    correctMcqOption: 'C',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select C (II and III only).', marks: 1 }],
      model_answer: '**C.** Isotopes share identical proton counts ($Z$) and valence electron configurations (giving identical chemical reactivity), whereas different nuclear masses alter physical properties such as boiling point ($20.3\\text{ K}$ vs $23.7\\text{ K}$) and gas density ($2\\times$ heavier for $^2\\text{H}_2$).',
    },
    sourceFileNames: [
      'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      'Textbook - S1.1-S1.3 End of Topic Review Answers .pdf',
    ],
  },
  {
    topicCode: 'S1.2',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 3,
    questionMarkdown:
      '*(Worksheet 1.2)* Bromine has a relative atomic mass **$A_r = 79.90$**. Mass spectrometry shows two stable isotopes: $^{79}\\text{Br}$ (isotopic mass $78.92$) and $^{81}\\text{Br}$ (isotopic mass $80.92$). **Calculate** the percentage natural abundance of $^{79}\\text{Br}$ and **predict** the $m/z$ values of the molecular ions $\\text{Br}_2^+$ formed.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Weighted average equation $78.92x + 80.92(1-x) = 79.90$.', marks: 1, keywords: ['78.92x'] },
        { code: 'A1', criterion: 'Solve $x = 0.510 \\implies 51.0\\%\\ ^{79}\\text{Br}$ ($49.0\\%\\ ^{81}\\text{Br}$).', marks: 1, keywords: ['51.0%'] },
        { code: 'A1', criterion: 'Molecular ions $\\text{Br}_2^+$ appear at **$m/z = 158,\\ 160,\\ 162$** (approx. $1:2:1$).', marks: 1, keywords: ['158', '160', '162'] },
      ],
      model_answer:
        'Let $x$ be the fraction of $^{79}\\text{Br}$: $78.92x + 80.92(1 - x) = 79.90 \\implies -2.00x = -1.02 \\implies x = 0.510$, so **$^{79}\\text{Br} = 51.0\\%$** and **$^{81}\\text{Br} = 49.0\\%$**. Combining two Br isotopes yields molecular $\\text{Br}_2^+$ peaks at **$m/z \\approx 158\\ (^{79}\\text{Br}_2^+),\\ 160\\ (^{79}\\text{Br}^{81}\\text{Br}^+),\\ 162\\ (^{81}\\text{Br}_2^+)$** in roughly a $1:2:1$ height ratio.',
    },
    sourceFileNames: [
      'worksheet-1-2-calculation-of-relative-masse-no-molar-mass.pdf',
      'worksheet-1-2-calculation-of-relative-masses-no-molar-mass-ans.pdf',
    ],
  },
  {
    topicCode: 'S1.2',
    paperType: 'Paper 1B (Data-Based)',
    commandTerm: 'Determine',
    difficulty: 'Standard IB',
    maxMarks: 3,
    stimulusMarkdown:
      '| $m/z$ | Relative Abundance / % |\n| :---: | :---: |\n| $24$ | $78.99$ |\n| $25$ | $10.00$ |\n| $26$ | $11.01$ |',
    questionMarkdown:
      'From the magnesium mass spectrum data above, (a) **calculate** $A_r(\\text{Mg})$ to two decimal places [2], and (b) **state** the $m/z$ of the peak formed if a small fraction of $^{24}\\text{Mg}$ atoms undergo double ionization ($\\text{Mg}^{2+}$). [1]',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Set up weighted sum $\\frac{(24\\times 78.99) + (25\\times 10.00) + (26\\times 11.01)}{100}$.', marks: 1 },
        { code: 'A1', criterion: 'Evaluate $18.9576 + 2.5000 + 2.8626 = \\mathbf{24.32}$.', marks: 1, keywords: ['24.32'] },
        { code: 'A1', criterion: '$^{24}\\text{Mg}^{2+}$ has $m/z = 24 / 2 = \\mathbf{12}$.', marks: 1, keywords: ['12'] },
      ],
      model_answer:
        '(a) $A_r(\\text{Mg}) = \\frac{24(78.99) + 25(10.00) + 26(11.01)}{100} = 24.3202 \\approx \\mathbf{24.32}$. (b) A doubly charged $^{24}\\text{Mg}^{2+}$ ion has mass $24$ and charge $+2$, giving **$m/z = 12$**.',
    },
    sourceFileNames: [
      'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      'worksheet-1-2-calculation-of-relative-masse-no-molar-mass.pdf',
    ],
  },
  {
    topicCode: 'S1.2',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Explain',
    difficulty: 'Foundation',
    maxMarks: 2,
    questionMarkdown:
      'State why relative atomic mass ($A_r$) is defined relative to $^{12}\\text{C}$ and outline how ions of different mass are separated inside a magnetic sector mass spectrometer.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Carbon-12 is assigned an exact mass of $12$ units ($1\\text{ u} = \\frac{1}{12}$ mass of one unbound $^{12}\\text{C}$ atom), giving convenient dimensionless ratios.', marks: 1, keywords: ['1/12', 'carbon-12'] },
        { code: 'A1', criterion: 'Magnetic field deflects positively charged ions inversely with $m/z$ (lighter or higher-charge ions deflect through tighter curves).', marks: 1, keywords: ['magnetic field', 'm/z', 'lighter deflect more'] },
      ],
      model_answer:
        'An unbound $^{12}\\text{C}$ atom serves as an exact mass standard of $12$ units so atomic masses stay simple ratios near mass numbers. Inside the mass spectrometer, gaseous cations are accelerated electrically and deflected in a uniform magnetic field; lighter $m/z$ ions bend more sharply than heavier $m/z$ ions onto the detector.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },

  // =========================================================================
  // S1.3 ELECTRON CONFIGURATIONS & EMISSION SPECTRA (6 questions)
  // =========================================================================
  {
    topicCode: 'S1.3',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      '*(Day 1.3.3 Slide 25 & Slide 35 Audit)* What are the correct SI units for Planck’s constant **$h$** in $\\Delta E = hf$, and what does each emission line represent?',
    mcqOptions: [
      { label: 'A', text: '$\\text{J}\\cdot\\text{s}^{-1}$ and the absolute energy of a single shell' },
      { label: 'B', text: '$\\text{J}\\cdot\\text{s}$ and the energy difference $\\Delta E$ between two quantized energy levels' },
      { label: 'C', text: '$\\text{J}\\cdot\\text{s}^{-1}$ and the ionization energy of one atom' },
      { label: 'D', text: '$\\text{J}\\cdot\\text{m}$ and nuclear binding energy' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select B ($\\text{J}\\cdot\\text{s}$ and $\\Delta E$).', marks: 1 }],
      model_answer: '**B.** $h = \\Delta E / f$ carries units $\\text{J}/\\text{s}^{-1} = \\text{J}\\cdot\\text{s}$ (never $\\text{J/s}$), and each discrete line marks a photon released when an electron drops between two quantized shells ($\\Delta E = E_{\\text{upper}} - E_{\\text{lower}}$).',
    },
    sourceFileNames: ['Day 1.3.3 hydrogen emission spectrum.pdf', 'Day 1.3.1 - Emission Spectrum.pdf'],
  },
  {
    topicCode: 'S1.3',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      'Which principle dictates that nitrogen’s ($Z=7$) three $2p$ electrons occupy $2p_x^1\\ 2p_y^1\\ 2p_z^1$ singly with parallel spins rather than pairing inside $2p_x^2\\ 2p_y^1$?',
    mcqOptions: [
      { label: 'A', text: 'Aufbau principle' },
      { label: 'B', text: 'Pauli exclusion principle' },
      { label: 'C', text: 'Hund’s rule' },
      { label: 'D', text: 'Heisenberg uncertainty principle' },
    ],
    correctMcqOption: 'C',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select C (Hund’s rule).', marks: 1 }],
      model_answer: '**C.** Hund’s rule minimizes inter-electronic repulsion by placing electrons singly with parallel spins across degenerate orbitals before pairing.',
    },
    sourceFileNames: ['Day - electron configurations.pdf', '8 Electron-Configuration.pdf'],
  },
  {
    topicCode: 'S1.3',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin S1.3 EOT Q4)* An electron transition from $n=4$ to $n=2$ in hydrogen emits visible light. Which transition emits a photon in the **ultraviolet (UV)** region?',
    mcqOptions: [
      { label: 'A', text: '$n = 4 \\to n = 1$' },
      { label: 'B', text: '$n = 4 \\to n = 3$' },
      { label: 'C', text: '$n = 3 \\to n = 2$' },
      { label: 'D', text: '$n = 5 \\to n = 3$' },
    ],
    correctMcqOption: 'A',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select A ($n=4 \\to n=1$, Lyman series).', marks: 1 }],
      model_answer: '**A.** Falling to the ground state $n=1$ (Lyman series) produces the largest energy gaps $\\Delta E$, emitting short-wavelength UV photons; transitions ending at $n=3$ lie in the infrared.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf', 'worksheet-1-3-emission-spectra.pdf'],
  },
  {
    topicCode: 'S1.3',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Explain',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      '*(Worksheet 1.3 + Bylikin S1.3)* Explain how the **Lyman** (UV) and **Balmer** (visible) emission series form in atomic hydrogen and why spectral lines **converge at higher frequency**.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Excited electrons fall from higher energy levels $n_{\\text{high}}$ to $n=1$ (Lyman UV) or $n=2$ (Balmer visible), emitting discrete photons $\\Delta E = hf$.', marks: 1, keywords: ['n=1', 'n=2', 'photon'] },
        { code: 'A1', criterion: 'Lyman jumps span larger energy gaps $\\Delta E$, yielding higher frequency UV radiation.', marks: 1, keywords: ['larger ΔE', 'higher frequency'] },
        { code: 'A1', criterion: 'Main energy levels ($n=1,2,3\\dots\\infty$) get progressively closer in energy as $n$ increases,', marks: 1, keywords: ['energy levels get closer', 'converge'] },
        { code: 'A1', criterion: 'so differences $\\Delta E$ shrink together toward the high-frequency/short-wavelength convergence limit ($n=\\infty$, ionization).', marks: 1, keywords: ['high frequency', 'ionization'] },
      ],
      model_answer:
        'When excited electrons drop from upper quantized levels back to **$n=1$** (**Lyman series**, largest $\\Delta E \\implies$ UV photons) or **$n=2$** (**Balmer series**, intermediate $\\Delta E \\implies$ visible photons), they emit discrete photons of frequency $f = \\Delta E / h$. Because adjacent main shells pack closer together in energy as $n$ rises toward $n=\\infty$, successive emission lines **converge** at the **high-frequency (short-wavelength) end**, terminating at the ionization threshold.',
    },
    sourceFileNames: [
      'Day 1.3.1 - Emission Spectrum.pdf',
      'worksheet-1-3-emission-spectra.pdf',
      'worksheet-1-3-emission-spectra Answers.pdf',
    ],
  },
  {
    topicCode: 'S1.3',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Deduce',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      '*(Worksheet 8 & Practice Key Audit)* Write condensed electron configurations for neutral **chromium ($\\text{Cr}, Z=24$)**, **copper ($\\text{Cu}, Z=29$)**, **phosphorus ($\\text{P}, Z=15$)**, and the **iron(III) ion ($\\text{Fe}^{3+}, Z=26$)**.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '$\\text{Cr} = [\\text{Ar}]4s^1 3d^5$ (half-filled $3d^5$ stabilization).', marks: 1, keywords: ['[Ar]4s1 3d5'] },
        { code: 'A1', criterion: '$\\text{Cu} = [\\text{Ar}]4s^1 3d^{10}$ (filled $3d^{10}$ stabilization).', marks: 1, keywords: ['[Ar]4s1 3d10'] },
        { code: 'A1', criterion: '$\\text{P} = [\\text{Ne}]3s^2 3p^3$.', marks: 1, keywords: ['[Ne]3s2 3p3'] },
        { code: 'A1', criterion: '$\\text{Fe}^{3+} = [\\text{Ar}]3d^5$ (both $4s^2$ electrons removed BEFORE one $3d$ electron).', marks: 1, keywords: ['[Ar]3d5', '4s removed first'] },
      ],
      model_answer:
        '- **$\\text{Cr}$:** $[\\text{Ar}]4s^1 3d^5$ (or $[\\text{Ar}]3d^5 4s^1$)\n- **$\\text{Cu}$:** $[\\text{Ar}]4s^1 3d^{10}$\n- **$\\text{P}$:** $[\\text{Ne}]3s^2 3p^3$ (fixing handwritten worksheet typo)\n- **$\\text{Fe}^{3+}$:** $[\\text{Ar}]3d^5$ ($4s$ electrons ionize prior to $3d$ because occupied $3d$ drops lower in energy than $4s$).',
    },
    sourceFileNames: ['Day - electron configurations.pdf', '8 Electron-Configuration.pdf', '8 Electron-Configuration Answers.pdf'],
  },
  {
    topicCode: 'S1.3',
    paperType: 'Paper 1B (Data-Based)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 3,
    questionMarkdown:
      'A prominent red Balmer line in the hydrogen emission spectrum appears at $\\lambda = 656.3\\text{ nm}$. **Calculate** its photon energy in $\\text{J}$ and the corresponding energy transition in $\\text{kJ mol}^{-1}$ ($h = 6.63\\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $c = 3.00\\times 10^8\\text{ m s}^{-1}$, $N_A = 6.02\\times 10^{23}\\text{ mol}^{-1}$).',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Convert $\\lambda = 656.3 \\times 10^{-9}\\text{ m}$ and compute $f = \\frac{3.00\\times 10^8}{656.3\\times 10^{-9}} = 4.571\\times 10^{14}\\text{ Hz}$.', marks: 1 },
        { code: 'A1', criterion: '$\\Delta E_{\\text{photon}} = (6.63\\times 10^{-34})(4.571\\times 10^{14}) = \\mathbf{3.03\\times 10^{-19}\\text{ J}}$.', marks: 1, keywords: ['3.03 × 10⁻¹⁹'] },
        { code: 'A1', criterion: 'Multiply by $N_A / 1000$: $\\frac{3.031\\times 10^{-19}\\times 6.02\\times 10^{23}}{1000} = \\mathbf{182\\text{ kJ mol}^{-1}}$.', marks: 1, keywords: ['182 kJ mol⁻¹'] },
      ],
      model_answer:
        '$f = \\frac{3.00\\times 10^8}{656.3\\times 10^{-9}} = 4.571\\times 10^{14}\\text{ s}^{-1}$. Photon energy $= hf = \\mathbf{3.03 \\times 10^{-19}\\text{ J}}$. Multiplying by $N_A / 1000$ gives $\\mathbf{182\\text{ kJ mol}^{-1}}$.',
    },
    sourceFileNames: ['Day 1.3.3 hydrogen emission spectrum.pdf', 'worksheet-1-3-emission-spectra.pdf'],
  },

  // =========================================================================
  // S1.4 THE MOLE CONCEPT (6 questions)
  // =========================================================================
  {
    topicCode: 'S1.4',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Calculate',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin S1.4 EOT Q2)* What is the total number of oxygen atoms in $0.400\\text{ mol}$ of copper(II) sulfate pentahydrate, $\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}$?',
    mcqOptions: [
      { label: 'A', text: '$3.60$' },
      { label: 'B', text: '$9.63 \\times 10^{23}$' },
      { label: 'C', text: '$2.17 \\times 10^{24}$' },
      { label: 'D', text: '$5.42 \\times 10^{24}$' },
    ],
    correctMcqOption: 'C',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select C ($2.17\\times 10^{24}$).', marks: 1 }],
      model_answer:
        '**C.** One formula unit contains $4 + 5 = 9$ oxygen atoms. Thus $n(\\text{O}) = 9 \\times 0.400 = 3.60\\text{ mol}$, giving $N = 3.60 \\times 6.02 \\times 10^{23} = 2.17 \\times 10^{24}$ oxygen atoms.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'S1.4',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin S1.4 EOT Q3)* A sample containing $0.70\\text{ g}$ of calcium nitrate, $\\text{Ca(NO}_3)_2$ ($M = 164.10\\text{ g mol}^{-1}$), is dissolved in water to a final volume of $200\\text{ cm}^3$. What is the molar concentration of $\\text{NO}_3^-$ ions?',
    mcqOptions: [
      { label: 'A', text: '$0.021\\text{ mol dm}^{-3}$' },
      { label: 'B', text: '$0.043\\text{ mol dm}^{-3}$' },
      { label: 'C', text: '$0.085\\text{ mol dm}^{-3}$' },
      { label: 'D', text: '$3.5\\text{ mol dm}^{-3}$' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select B ($0.043\\text{ mol dm}^{-3}$).', marks: 1 }],
      model_answer:
        '**B.** $n(\\text{Ca(NO}_3)_2) = 0.70 / 164.10 = 4.27\\times 10^{-3}\\text{ mol}$. Each mole releases $2\\text{ mol NO}_3^-$, so $n(\\text{NO}_3^-) = 8.53\\times 10^{-3}\\text{ mol}$ in $0.200\\text{ dm}^3 \\implies [\\text{NO}_3^-] = 0.043\\text{ mol dm}^{-3}$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'S1.4',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin S1.4 EOT Q4)* For which organic molecule is the **empirical formula identical to the molecular formula**?',
    mcqOptions: [
      { label: 'A', text: '$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{OH}$' },
      { label: 'B', text: '$\\text{CH}_3\\text{COOCH}_2\\text{CH}_3$' },
      { label: 'C', text: '$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_3$' },
      { label: 'D', text: '$\\text{CH}_3\\text{COOH}$' },
    ],
    correctMcqOption: 'A',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select A (propan-1-ol, $\\text{C}_3\\text{H}_8\\text{O}$).', marks: 1 }],
      model_answer:
        '**A.** $\\text{C}_3\\text{H}_8\\text{O}$ contains $1\\text{ O}$ atom and cannot simplify further; whereas B is $\\text{C}_4\\text{H}_8\\text{O}_2 \\to \\text{C}_2\\text{H}_4\\text{O}$, C is $\\text{C}_4\\text{H}_{10} \\to \\text{C}_2\\text{H}_5$, and D is $\\text{C}_2\\text{H}_4\\text{O}_2 \\to \\text{CH}_2\\text{O}$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'S1.4',
    paperType: 'Paper 1B (Data-Based)',
    commandTerm: 'Deduce',
    difficulty: 'Standard IB',
    maxMarks: 3,
    stimulusMarkdown:
      '- Crucible + tin before heating: $m(\\text{Sn}) = 1.78\\text{ g}$ ($A_r(\\text{Sn}) = 118.71$)\n- Oxide of tin after heating to constant mass: $2.26\\text{ g}$',
    questionMarkdown:
      '*(Bylikin S1.4 EOT Q6)* A student oxidizes tin metal in a crucible to constant mass. **Deduce** the empirical formula of the tin oxide formed and explain why the sample must be heated to **constant mass**.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Oxygen combined $= 2.26 - 1.78 = 0.48\\text{ g}$; $n(\\text{Sn}) = \\frac{1.78}{118.71} = 0.0150\\text{ mol}$, $n(\\text{O}) = \\frac{0.48}{16.00} = 0.0300\\text{ mol}$.', marks: 1 },
        { code: 'A1', criterion: 'Mole ratio $0.0150 : 0.0300 = 1 : 2 \\implies$ empirical formula **$\\text{SnO}_2$**.', marks: 1, keywords: ['SnO2'] },
        { code: 'A1', criterion: 'Heating to constant mass ensures reaction with oxygen is complete (no unreacted Sn remaining).', marks: 1, keywords: ['complete reaction', 'constant mass'] },
      ],
      model_answer:
        '$m(\\text{O}) = 2.26 - 1.78 = 0.48\\text{ g}$. $n(\\text{Sn}) = 1.78 / 118.71 = 0.0150\\text{ mol}$ and $n(\\text{O}) = 0.48 / 16.00 = 0.0300\\text{ mol}$, a $1:2$ ratio giving **$\\text{SnO}_2$** (tin(IV) oxide). Heating, cooling in a desiccator, and reweighing to **constant mass** verifies complete oxidation.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf', 'Lab INFO making-measurements-in-the-lab.pdf'],
  },
  {
    topicCode: 'S1.4',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Deduce',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      '*(Bylikin S1.4 Practice Q1b & Q2)* Complete combustion of an unknown hydrocarbon yields $5.501\\text{ g}$ of $\\text{CO}_2$ and $2.253\\text{ g}$ of $\\text{H}_2\\text{O}$. (a) **Deduce** its empirical formula. [3] (b) If its molar mass is $42.09\\text{ g mol}^{-1}$, **determine** its molecular formula. [1]',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: '$n(\\text{C}) = \\frac{5.501}{44.01} = 0.1250\\text{ mol}$.', marks: 1 },
        { code: 'M1', criterion: '$n(\\text{H}) = 2 \\times \\frac{2.253}{18.02} = 0.2501\\text{ mol}$.', marks: 1 },
        { code: 'A1', criterion: 'Ratio $0.1250 : 0.2501 = 1 : 2 \\implies$ empirical formula **$\\text{CH}_2$** ($M_{\\text{emp}} = 14.03\\text{ g mol}^{-1}$).', marks: 1, keywords: ['CH2'] },
        { code: 'A1', criterion: '$42.09 / 14.03 = 3 \\implies$ molecular formula **$\\text{C}_3\\text{H}_6$**.', marks: 1, keywords: ['C3H6'] },
      ],
      model_answer:
        '(a) $n(\\text{C}) = 5.501 / 44.01 = 0.1250\\text{ mol}$; $n(\\text{H}) = 2 \\times (2.253 / 18.02) = 0.2501\\text{ mol}$, giving empirical formula **$\\text{CH}_2$**. (b) Since $M(\\text{CH}_2) = 14.03$, $42.09 / 14.03 = 3 \\implies$ **$\\text{C}_3\\text{H}_6$**.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },

  // =========================================================================
  // S1.5 IDEAL GASES (5 questions)
  // =========================================================================
  {
    topicCode: 'S1.5',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin S1.5 EOT Q2)* Which statements are assumptions of the **ideal gas model**?\n\nI. The volume occupied by the gas particles themselves is negligible.\nII. Intermolecular attractive forces between particles are negligible.\nIII. Particles stop colliding at $273\\text{ K}$.',
    mcqOptions: [
      { label: 'A', text: 'I and II only' },
      { label: 'B', text: 'I and III only' },
      { label: 'C', text: 'II and III only' },
      { label: 'D', text: 'I, II and III' },
    ],
    correctMcqOption: 'A',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select A (I and II only).', marks: 1 }],
      model_answer: '**A.** Ideal gas theory assumes point-mass particles of negligible volume and zero intermolecular attractions colliding elastically.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'S1.5',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin S1.5 EOT Q3)* A fixed sample of ideal gas at $27^\\circ\\text{C}$ has its pressure doubled and its volume tripled. What is its final Celsius temperature?',
    mcqOptions: [
      { label: 'A', text: '$162^\\circ\\text{C}$' },
      { label: 'B', text: '$450^\\circ\\text{C}$' },
      { label: 'C', text: '$1527^\\circ\\text{C}$' },
      { label: 'D', text: '$1800^\\circ\\text{C}$' },
    ],
    correctMcqOption: 'C',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select C ($1527^\\circ\\text{C}$).', marks: 1 }],
      model_answer:
        '**C.** Convert to Kelvin first: $T_1 = 27 + 273 = 300\\text{ K}$. By $\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}$, $T_2 = 2 \\times 3 \\times 300 = 1800\\text{ K} = 1800 - 273 = 1527^\\circ\\text{C}$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'S1.5',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Calculate',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin S1.5 EOT Q4)* A gas syringe holds $40\\text{ cm}^3$ of an ideal gas at $27^\\circ\\text{C}$. What will its volume be after warming to $57^\\circ\\text{C}$ at constant pressure?',
    mcqOptions: [
      { label: 'A', text: '$1.9\\text{ cm}^3$' },
      { label: 'B', text: '$40\\text{ cm}^3$' },
      { label: 'C', text: '$44\\text{ cm}^3$' },
      { label: 'D', text: '$84\\text{ cm}^3$' },
    ],
    correctMcqOption: 'C',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select C ($44\\text{ cm}^3$).', marks: 1 }],
      model_answer: '**C.** $V_2 = V_1 \\frac{T_2}{T_1} = 40 \\times \\frac{57+273.15}{27+273.15} = 40 \\times \\frac{330.15}{300.15} = 44\\text{ cm}^3$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'S1.5',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Determine',
    difficulty: 'Standard IB',
    maxMarks: 3,
    questionMarkdown:
      '*(Bylikin S1.5 Practice Q2)* An elemental diatomic gas has a density of $3.12\\text{ g dm}^{-3}$ at official IB **STP** ($273.15\\text{ K},\\ 100\\text{ kPa}$). **Determine** its molar mass and **identify** the gas.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Use official IB STP molar volume $V_m = 22.7\\text{ dm}^3\\text{ mol}^{-1}$ (reject $22.4$).', marks: 1, keywords: ['22.7'] },
        { code: 'A1', criterion: '$M = \\rho V_m = 3.12\\text{ g dm}^{-3} \\times 22.7\\text{ dm}^3\\text{ mol}^{-1} = \\mathbf{70.8\\text{ g mol}^{-1}}$.', marks: 1, keywords: ['70.8'] },
        { code: 'A1', criterion: 'For diatomic $X_2$, $A_r \\approx 35.4 \\implies$ **chlorine, $\\text{Cl}_2$** ($M = 70.90\\text{ g mol}^{-1}$).', marks: 1, keywords: ['Cl2', 'chlorine'] },
      ],
      model_answer:
        'At IB STP ($273.15\\text{ K},\\ 100\\text{ kPa}$), $1\\text{ mol}$ occupies **$22.7\\text{ dm}^3$**. Therefore $M = 3.12\\text{ g dm}^{-3} \\times 22.7\\text{ dm}^3\\text{ mol}^{-1} = \\mathbf{70.8\\text{ g mol}^{-1}}$. Dividing by $2$ gives $A_r \\approx 35.4$, identifying the diatomic gas as **chlorine ($\\text{Cl}_2$)**.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'S1.5',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Explain',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      '*(Bylikin S1.5 Practice Q1 & Theory)* (a) A weather balloon of volume $0.250\\text{ m}^3$ at $-35.0^\\circ\\text{C}$ contains $16.0\\text{ g}$ of helium ($M = 4.00\\text{ g mol}^{-1}$). **Calculate** the internal pressure in $\\text{kPa}$. [2] (b) **Explain** why real ammonia gas ($\\text{NH}_3$) deviates much more from ideal behaviour than helium ($\\text{He}$) at low temperature and high pressure. [2]',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: '$n = 16.0 / 4.00 = 4.00\\text{ mol}$; $T = -35.0 + 273.15 = 238.15\\text{ K}$.', marks: 1 },
        { code: 'A1', criterion: '$P = \\frac{nRT}{V} = \\frac{4.00 \\times 8.31 \\times 238.15}{0.250} = 31664\\text{ Pa} = \\mathbf{31.7\\text{ kPa}}$.', marks: 1, keywords: ['31.7 kPa'] },
        { code: 'A1', criterion: 'At high $P$, finite particle volume is no longer negligible; at low $T$, slower particles experience significant attractions.', marks: 1, keywords: ['finite volume', 'intermolecular forces'] },
        { code: 'A1', criterion: '$\\text{NH}_3$ is polar with strong **hydrogen bonding** and larger size vs tiny non-polar $\\text{He}$ with very weak LDFs.', marks: 1, keywords: ['hydrogen bonding', 'weak LDF'] },
      ],
      model_answer:
        '(a) $n = 4.00\\text{ mol}$, $T = 238.15\\text{ K}$; $P = \\frac{4.00 \\times 8.31 \\times 238.15}{0.250} = 31.7\\text{ kPa}$. (b) At high pressure, particle volume becomes significant compared with container volume, and at low temperature, attractions slow particles before wall collisions. Polar **$\\text{NH}_3$ forms strong hydrogen bonds** and occupies greater volume than monatomic non-polar **$\\text{He}$**, which exhibits only very weak London dispersion forces.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },

  // =========================================================================
  // S2.1 THE IONIC MODEL (5 questions)
  // =========================================================================
  {
    topicCode: 'S2.1',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Explain',
    difficulty: 'Standard IB',
    maxMarks: 3,
    questionMarkdown:
      'Account for why **$\\text{MgO}$** melts at **$2852^\\circ\\text{C}$** compared with **$\\text{NaCl}$ ($801^\\circ\\text{C}$)** in terms of ionic crystal lattice interactions.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Both are 3D giant ionic crystal lattices governed by electrostatic attraction between oppositely charged ions.', marks: 1, keywords: ['electrostatic attraction', 'lattice'] },
        { code: 'A1', criterion: '$\\text{Mg}^{2+}$ and $\\text{O}^{2-}$ carry double ionic charges ($+2/-2$) vs $\\text{Na}^+/\\text{Cl}^-$ ($+1/-1$), giving much higher charge density.', marks: 1, keywords: ['higher charge', '+2', '-2'] },
        { code: 'A1', criterion: '$\\text{Mg}^{2+}$ and $\\text{O}^{2-}$ also have smaller ionic radii, shrinking inter-ionic distance and requiring vastly more thermal energy to overcome.', marks: 1, keywords: ['smaller ionic radius', 'more energy'] },
      ],
      model_answer:
        'Both form giant 3D ionic lattices, but $\\text{Mg}^{2+}$ and $\\text{O}^{2-}$ carry **twice the ionic charge** ($+2/-2$ vs $+1/-1$) and have **smaller ionic radii** than $\\text{Na}^+$ and $\\text{Cl}^-$. Consequently electrostatic attraction (lattice enthalpy) in $\\text{MgO}$ is roughly $4\\text{–}5\\times$ stronger, requiring much greater thermal energy to break the lattice.',
    },
    sourceFileNames: ['Day 1 - 2.1 Ionic Bonding.pdf', 'Textbook - IB_CHEMISTRY_ANSWERS_S2.pdf'],
  },
  {
    topicCode: 'S2.1',
    paperType: 'Paper 1B (Data-Based)',
    commandTerm: 'Explain',
    difficulty: 'Foundation',
    maxMarks: 3,
    questionMarkdown:
      '*(Day 2 Slide 5 Audit)* Explain why ionic crystals like $\\text{NaCl}(s)$ are **brittle** under hammer impact and why $\\text{NaCl}$ conducts electricity when molten or aqueous but **not** as a dry solid.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Mechanical stress shifts lattice layers by half a unit step so **LIKE charges ($+/+$ and $-/-$) align** adjacent to one another.', marks: 1, keywords: ['like charges align'] },
        { code: 'A1', criterion: 'Strong electrostatic **repulsion between like-charged ions** cleaves/shatters the crystal.', marks: 1, keywords: ['repulsion', 'shatter'] },
        { code: 'A1', criterion: 'Solid has ions locked in fixed positions; melting or aqueous hydration frees **mobile ions** (NOT free electrons!) to carry current.', marks: 1, keywords: ['fixed ions', 'mobile ions'] },
      ],
      model_answer:
        'Shear displacement shifts crystal planes so **like-charged ions ($+/+$ and $-/-$) face one another**, causing strong electrostatic repulsion that fractures the crystal cleanly. Solid $\\text{NaCl}$ cannot conduct because ions are locked at fixed lattice sites, whereas molten or aqueous $\\text{NaCl}$ contains **mobile ions** free to migrate toward electrodes.',
    },
    sourceFileNames: ['Day 2 2.2 Ionic Bonding Properties.pdf', 'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'S2.1',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Deduce',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      '*(Worksheet 2.1)* Which set correctly gives the empirical chemical formulas for **ammonium carbonate**, **aluminium sulfate**, and **iron(III) nitrate**?',
    mcqOptions: [
      { label: 'A', text: '$\\text{NH}_4\\text{CO}_3$, $\\text{AlSO}_4$, $\\text{FeNO}_3$' },
      { label: 'B', text: '$(\\text{NH}_4)_2\\text{CO}_3$, $\\text{Al}_2(\\text{SO}_4)_3$, $\\text{Fe(NO}_3)_3$' },
      { label: 'C', text: '$(\\text{NH}_4)_2\\text{CO}_3$, $\\text{Al}_3(\\text{SO}_4)_2$, $\\text{Fe}_3\\text{NO}_3$' },
      { label: 'D', text: '$\\text{NH}_4(\\text{CO}_3)_2$, $\\text{Al}_2(\\text{SO}_4)_3$, $\\text{Fe(NO}_3)_2$' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select B.', marks: 1 }],
      model_answer: '**B.** Balancing ion charges to zero: $2(\\text{NH}_4^+) + \\text{CO}_3^{2-}$; $2(\\text{Al}^{3+}) + 3(\\text{SO}_4^{2-})$; $\\text{Fe}^{3+} + 3(\\text{NO}_3^-)$.',
    },
    sourceFileNames: ['worksheet-2.1-fomation-of-ionic-compounds.pdf', 'worksheet-2.1-fomation-of-ionic-compounds-ans.pdf'],
  },
  {
    topicCode: 'S2.1',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Predict',
    difficulty: 'Standard IB',
    maxMarks: 1,
    questionMarkdown:
      'Which ionic compound has the **lowest** melting point based on ionic charge and ionic radius?',
    mcqOptions: [
      { label: 'A', text: '$\\text{LiF}$' },
      { label: 'B', text: '$\\text{NaCl}$' },
      { label: 'C', text: '$\\text{KBr}$' },
      { label: 'D', text: '$\\text{CsI}$' },
    ],
    correctMcqOption: 'D',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select D ($\\text{CsI}$).', marks: 1 }],
      model_answer: '**D.** All four salts hold $\\pm 1$ charges, yet $\\text{Cs}^+$ and $\\text{I}^-$ possess the largest ionic radii ($r_+ + r_-$ greatest), producing the weakest electrostatic lattice attraction.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf', 'Textbook - IB_CHEMISTRY_ANSWERS_S2.pdf'],
  },
  {
    topicCode: 'S2.1',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Explain',
    difficulty: 'Standard IB',
    maxMarks: 2,
    questionMarkdown:
      'Explain why potassium nitrate, $\\text{KNO}_3(s)$, dissolves readily in water ($\\text{H}_2\\text{O}$) at $298\\text{ K}$ yet is practically insoluble in non-polar hexane ($\\text{C}_6\\text{H}_{14}$).',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Polar water molecules form strong **ion–dipole hydration attractions** ($\\delta^-\\text{O}$ to $\\text{K}^+$, $\\delta^+\\text{H}$ to $\\text{NO}_3^-$) releasing enough hydration energy to overcome the lattice.', marks: 1, keywords: ['ion-dipole', 'hydration'] },
        { code: 'A1', criterion: 'Non-polar hexane engages only weak London dispersion interactions with ions, insufficient to overcome ionic lattice enthalpy.', marks: 1, keywords: ['London dispersion', 'insufficient'] },
      ],
      model_answer:
        'Polar $\\text{H}_2\\text{O}$ molecules surround $\\text{K}^+$ and $\\text{NO}_3^-$ via stabilizing **ion–dipole hydration interactions** that compensate for breaking the ionic lattice. Non-polar hexane can only offer weak induced-dipole (LDF) attractions, which cannot overcome the electrostatic lattice enthalpy.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },

  // =========================================================================
  // S2.2 THE COVALENT MODEL (7 questions — strictly SL 2–4 VSEPR domains)
  // =========================================================================
  {
    topicCode: 'S2.2',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Standard IB',
    maxMarks: 1,
    questionMarkdown:
      'Which pair of molecules **BOTH** contain polar covalent bonds yet possess **zero net molecular dipole moment** (overall non-polar)?',
    mcqOptions: [
      { label: 'A', text: '$\\text{H}_2\\text{O}$ and $\\text{NH}_3$' },
      { label: 'B', text: '$\\text{CO}_2$ and $\\text{CCl}_4$' },
      { label: 'C', text: '$\\text{SO}_2$ and $\\text{BF}_3$' },
      { label: 'D', text: '$\\text{CHCl}_3$ and $\\text{HCN}$' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select B ($\\text{CO}_2$ linear and $\\text{CCl}_4$ tetrahedral).', marks: 1 }],
      model_answer: '**B.** Both $\\text{C=O}$ and $\\text{C–Cl}$ bonds are polar ($\\Delta\\chi > 0$), yet symmetric $180^\\circ$ linear ($\\text{CO}_2$) and $109.5^\\circ$ tetrahedral ($\\text{CCl}_4$) geometries cause bond dipoles to cancel identically in 3D space.',
    },
    sourceFileNames: ['Day - VSEPR and Bond Polarity.pdf', 'Day 2.2 Molecular Polarity and Network Solids.pdf'],
  },
  {
    topicCode: 'S2.2',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Compare',
    difficulty: 'Foundation',
    maxMarks: 3,
    questionMarkdown:
      'Compare carbon–carbon **bond lengths** and **average bond enthalpies** across ethane ($\\text{C–C}$), ethene ($\\text{C=C}$), and ethyne ($\\text{C}\\equiv\\text{C}$), and account for the trend electrostatically.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Bond length shortens cleanly with bond order: $\\text{C–C}\\ (154\\text{ pm}) > \\text{C=C}\\ (134\\text{ pm}) > \\text{C}\\equiv\\text{C}\\ (120\\text{ pm})$.', marks: 1, keywords: ['shorter', 'bond order'] },
        { code: 'A1', criterion: 'Bond enthalpy rises sharply: $\\text{C–C}\\ (346) < \\text{C=C}\\ (614) < \\text{C}\\equiv\\text{C}\\ (839\\text{ kJ mol}^{-1})$.', marks: 1, keywords: ['stronger', '346', '614', '839'] },
        { code: 'A1', criterion: 'More shared bonding electron pairs ($1\\to 2\\to 3$) increase electrostatic attraction with both carbon nuclei, pulling them closer.', marks: 1, keywords: ['shared electron pairs', 'nuclei'] },
      ],
      model_answer:
        'As bond order rises from single ($1$) to double ($2$) to triple ($3$), **bond length shrinks** ($154 \\to 134 \\to 120\\text{ pm}$) while **bond strength increases** ($346 \\to 614 \\to 839\\text{ kJ mol}^{-1}$) because a greater density of shared electrons between the two carbon nuclei pulls them tighter electrostatically.',
    },
    sourceFileNames: ['Day 2.2-1.pdf', 'Textbook - IB_CHEMISTRY_ANSWERS_S2.pdf'],
  },
  {
    topicCode: 'S2.2',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Deduce',
    difficulty: 'Standard IB',
    maxMarks: 5,
    questionMarkdown:
      'Using VSEPR theory, deduce the **number of electron domains**, **molecular geometry**, **approximate bond angle**, and **overall molecular polarity** of **$\\text{SO}_2$** and **$\\text{NH}_3$**, and explain why both deviate from their ideal electron-domain angles.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '$\\text{SO}_2$: $3$ electron domains (two S–O double/bond domains + $1$ lone pair) $\\implies$ **bent / V-shaped** ($\\sim 117^\\circ < 120^\\circ$).', marks: 1, keywords: ['3 domains', 'bent', '117'] },
        { code: 'A1', criterion: '$\\text{NH}_3$: $4$ electron domains ($3$ BP + $1$ LP) $\\implies$ **trigonal pyramidal** ($\\sim 107^\\circ < 109.5^\\circ$).', marks: 1, keywords: ['4 domains', 'trigonal pyramidal', '107'] },
        { code: 'A1', criterion: 'Both are **polar** molecules because asymmetric shapes prevent bond dipoles from cancelling.', marks: 1, keywords: ['polar', 'asymmetrical'] },
        { code: 'A1', criterion: 'Lone-pair–bonding-pair repulsion exceeds bonding-pair–bonding-pair repulsion,', marks: 1, keywords: ['lone pair repulsion'] },
        { code: 'A1', criterion: 'because lone pairs spread wider near the single central nucleus, compressing bonding angles.', marks: 1, keywords: ['compress'] },
      ],
      model_answer:
        '$\\text{SO}_2$ has **3 electron domains** ($2$ bonding, $1$ lone pair), adopting a **bent** geometry ($\\sim 117^\\circ$), while $\\text{NH}_3$ has **4 electron domains** ($3$ bonding, $1$ lone pair), adopting **trigonal pyramidal** geometry ($\\sim 107^\\circ$). Both are **polar** due to asymmetric dipole vectors. Both angles compress below $120^\\circ$ and $109.5^\\circ$ because non-bonding lone pairs sit closer and wider around the central atom, exerting stronger **LP–BP repulsion** than BP–BP repulsion.',
    },
    sourceFileNames: ['Day 2.2 VSEPR Intro.pdf', 'Day - VSEPR and Bond Polarity.pdf'],
  },
  {
    topicCode: 'S2.2',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Explain',
    difficulty: 'Standard IB',
    maxMarks: 3,
    questionMarkdown:
      'Explain why **water ($\\text{H}_2\\text{O}$, b.p. $100^\\circ\\text{C}$)** boils higher than both **hydrogen sulfide ($\\text{H}_2\\text{S}$, b.p. $-60^\\circ\\text{C}$)** AND **hydrogen fluoride ($\\text{HF}$, b.p. $19.5^\\circ\\text{C}$)**.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '$\\text{H}_2\\text{O}$ forms strong intermolecular **hydrogen bonds** whereas $\\text{H}_2\\text{S}$ only exhibits weaker dipole–dipole and LDF attractions.', marks: 1, keywords: ['hydrogen bonding', 'H2S dipole-dipole'] },
        { code: 'A1', criterion: 'Each $\\text{H}_2\\text{O}$ has two $\\delta^+\\text{H}$ donors and two O lone-pair acceptors, averaging **two H-bonds per molecule**,', marks: 1, keywords: ['two hydrogen bonds per molecule'] },
        { code: 'A1', criterion: 'vs on average only **one H-bond per molecule** in $\\text{HF}$ ($1$ H per molecule), so more thermal energy is needed to vaporize water.', marks: 1, keywords: ['HF one H-bond', 'more energy'] },
      ],
      model_answer:
        '$\\text{H}_2\\text{O}$ boils far above $\\text{H}_2\\text{S}$ because $\\text{O}$ is small and strongly electronegative, enabling strong **hydrogen bonding** rather than weaker dipole–dipole forces. Although individual $\\text{H–F}$ bonds are more polar, each $\\text{H}_2\\text{O}$ molecule forms an average of **two hydrogen bonds** (two H donors + two O lone pairs) versus **one** in $\\text{HF}$, creating an extensive 3D H-bonded network requiring greater thermal energy to break.',
    },
    sourceFileNames: ['Day 2.2.8 - Intermolecular Forces.pdf', 'Day 2.2.8 - Strength of H bond.pdf'],
  },
  {
    topicCode: 'S2.2',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Distinguish',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      '*(worksheet-2.2.4 & Day 2.2.9 p.5 Audit)* Contrast the structure, bonding, electrical conductivity, and melting/sublimation point of **diamond**, **graphite**, **$\\text{SiO}_2$**, and **$\\text{C}_{60}$ fullerene**.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Diamond: 3D giant covalent ($4$ bonds/C, $109.5^\\circ$); all $e^-$ localized $\\implies$ insulator, ultra-high m.p.', marks: 1, keywords: ['giant covalent', '4 bonds', 'insulator'] },
        { code: 'A1', criterion: 'Graphite: 2D covalent sheets ($3$ bonds/C, $120^\\circ$); $1$ delocalized $e^-$/C conducts parallel to planes; weak interlayer LDFs enable sliding.', marks: 1, keywords: ['sheets', 'delocalized', 'interlayer LDF'] },
        { code: 'A1', criterion: '$\\text{SiO}_2$: giant covalent 3D tetrahedral lattice (Si to 4 O, O to 2 Si); insulator, m.p. $\\sim 1710^\\circ\\text{C}$.', marks: 1, keywords: ['SiO2 giant covalent', 'insulator'] },
        { code: 'A1', criterion: '$\\text{C}_{60}$ fullerene: **simple molecular** discrete spheres (NOT giant network!); low sublimation point and non-polar solubility due to weak **intermolecular LDFs** between cages.', marks: 1, keywords: ['simple molecular', 'weak LDF between molecules'] },
      ],
      model_answer:
        'Diamond and $\\text{SiO}_2$ are 3D **giant covalent networks** with localized electrons (electrical insulators, very high melting points). Graphite consists of 2D giant covalent sheets where $3$-coordinate carbon frees one delocalized $e^-$ per C for **electrical conduction** while weak LDFs between layers give lubricity. Crucially, **$\\text{C}_{60}$ fullerene is simple molecular**, not giant covalent: weak LDFs between discrete $\\text{C}_{60}$ balls yield a far lower sublimation temperature and solubility in toluene.',
    },
    sourceFileNames: ['Day 2.2 Molecular Polarity and Network Solids.pdf', 'Day 2.2.9 Strength of IMF.pdf', 'worksheet-2.2.4-network-covalent-ans (1).pdf'],
  },
  {
    topicCode: 'S2.2',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Explain',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      '*(Day 2.2.8 Slide 1 & S2.2.9)* Why does unbranched **pentane** ($\\text{C}_5\\text{H}_{12}$, b.p. $36.1^\\circ\\text{C}$) boil higher than its structural isomer **2,2-dimethylpropane** (b.p. $9.5^\\circ\\text{C}$), and where do London dispersion forces operate?',
    mcqOptions: [
      { label: 'A', text: 'Pentane has stronger H-bonds; LDFs occur only in non-polar molecules' },
      { label: 'B', text: 'Pentane has larger surface contact area increasing LDFs; LDFs occur between ALL molecules' },
      { label: 'C', text: 'Pentane has a larger molar mass; LDFs occur only in non-polar alkanes' },
      { label: 'D', text: 'Pentane has permanent dipole–dipole forces along its linear chain' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select B.', marks: 1 }],
      model_answer: '**B.** Both isomers have identical formula $\\text{C}_5\\text{H}_{12}$ ($M_r = 72.17$), yet elongated pentane packs with greater surface contact area, boosting universal London dispersion forces (which act between **ALL** atoms and molecules).',
    },
    sourceFileNames: ['Day 2.2.8 - Intermolecular Forces.pdf', 'Day 2.2.9 Strength of IMF.pdf'],
  },
  {
    topicCode: 'S2.2',
    paperType: 'Paper 1B (Data-Based)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 3,
    stimulusMarkdown:
      'TLC experiment on polar silica gel ($\\text{SiO}_2$) using non-polar hexane/ethyl ethanoate eluent:\n- Solvent front travelled: **$8.00\\text{ cm}$** from pencil baseline\n- Compound **X** travelled **$2.40\\text{ cm}$** | Compound **Y** travelled **$6.00\\text{ cm}$**',
    questionMarkdown: '**Calculate** $R_f$ values for compounds **X** and **Y**, and **deduce** which compound is more polar.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '$R_f(\\text{X}) = 2.40 / 8.00 = \\mathbf{0.30}$.', marks: 1, keywords: ['0.30'] },
        { code: 'A1', criterion: '$R_f(\\text{Y}) = 6.00 / 8.00 = \\mathbf{0.75}$.', marks: 1, keywords: ['0.75'] },
        { code: 'A1', criterion: '**X is more polar** because it adsorbs more strongly to the polar silica stationary phase rather than partitioning into the less polar eluent.', marks: 1, keywords: ['X', 'stationary phase'] },
      ],
      model_answer:
        '$R_f(\\text{X}) = 2.40 / 8.00 = \\mathbf{0.30}$ and $R_f(\\text{Y}) = 6.00 / 8.00 = \\mathbf{0.75}$. **Compound X** is more polar because stronger dipole/H-bonding attraction to the polar $\\text{SiO}_2$ stationary phase retards its upward movement.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },

  // =========================================================================
  // S2.3 THE METALLIC MODEL (4 questions — strictly SL s/p-block)
  // =========================================================================
  {
    topicCode: 'S2.3',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Explain',
    difficulty: 'Standard IB',
    maxMarks: 3,
    questionMarkdown:
      '*(2.3 Textbook Answers & Day 2.3)* Explain why melting points rise sharply across Period 3 from **$\\text{Na}$ ($98^\\circ\\text{C}$)** to **$\\text{Mg}$ ($650^\\circ\\text{C}$)** to **$\\text{Al}$ ($660^\\circ\\text{C}$)** while falling down Group 1 from **$\\text{Li}$ ($181^\\circ\\text{C}$)** to **$\\text{Cs}$ ($29^\\circ\\text{C}$)**.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Across Period 3, cation charge increases ($+1 \\to +2 \\to +3$) releasing more delocalized valence electrons per atom ($1 \\to 2 \\to 3$).', marks: 1, keywords: ['cation charge', 'more delocalized electrons'] },
        { code: 'A1', criterion: 'Cation ionic radius simultaneously decreases ($\\text{Na}^+ > \\text{Mg}^{2+} > \\text{Al}^{3+}$), strengthening attraction between cations and electron sea.', marks: 1, keywords: ['smaller ionic radius', 'stronger metallic bond'] },
        { code: 'A1', criterion: 'Down Group 1, charge stays $+1$ while ionic radius increases down shells, decreasing charge density and weakening metallic bonds.', marks: 1, keywords: ['down Group 1', 'larger radius'] },
      ],
      model_answer:
        'From $\\text{Na}$ to $\\text{Mg}$ to $\\text{Al}$, cations gain higher positive charge ($+1 \\to +2 \\to +3$), contribute more delocalized electrons per atom, and shrink in ionic radius—intensifying electrostatic attraction in the metallic lattice and raising melting points. Down Group 1, cation charge remains constant at $+1$ while radius expands across extra shells, lowering charge density and melting points.',
    },
    sourceFileNames: ['Day 2.3.pdf', '2.3 - Textbook answers.pdf', 'Textbook - IB_CHEMISTRY_ANSWERS_S2.pdf'],
  },
  {
    topicCode: 'S2.3',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      '*(Day 2.3 Slide 2 Fix)* Which statement accurately describes **delocalized electrons** and **malleability** in a pure solid metal?',
    mcqOptions: [
      { label: 'A', text: 'Valence electrons stay fixed to individual metal atoms until voltage is applied; metals shatter along slip planes' },
      { label: 'B', text: 'Valence electrons move freely throughout the entire lattice (not fixed to any single atom); non-directional bonding persists when cation layers slide' },
      { label: 'C', text: 'Positive cations flow along a metal wire to carry electric current when connected to a battery' },
      { label: 'D', text: 'Covalent bonds break and reform rapidly when hammered' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select B.', marks: 1 }],
      model_answer: '**B.** Delocalized electrons belong to the whole crystal lattice (never fixed to one atom), allowing both electrical conduction and non-directional slip without brittle fracture.',
    },
    sourceFileNames: ['Day 2.3.pdf', '2.3 - Textbook answers.pdf'],
  },
  {
    topicCode: 'S2.3',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Explain',
    difficulty: 'Standard IB',
    maxMarks: 2,
    questionMarkdown:
      '*(Bylikin S2.3 p. 191)* Explain why the **boiling point** of sodium ($883^\\circ\\text{C}$) is almost nine times higher in Celsius than its **melting point** ($98^\\circ\\text{C}$), and why magnesium’s boiling point ($1091^\\circ\\text{C}$) exceeds sodium’s.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Melting only weakens/disrupts ordered lattice packing (metallic bonds largely persist in liquid), whereas **boiling requires completely breaking all metallic bonds** into separated gaseous atoms.', marks: 1, keywords: ['completely break metallic bonds', 'gaseous atoms'] },
        { code: 'A1', criterion: '$\\text{Mg}^{2+}$ ($2$ delocalized $e^-$/atom, smaller radius) forms stronger metallic attraction than $\\text{Na}^+$ ($1$ $e^-$/atom), demanding more energy to vaporize.', marks: 1, keywords: ['Mg2+', 'smaller radius', 'more delocalized'] },
      ],
      model_answer:
        'At melting, cations merely gain mobility within the electron sea so metallic bonding largely persists; boiling must overcome **all** metallic attraction to release isolated gaseous atoms. $\\text{Mg}$ boils higher than $\\text{Na}$ because $\\text{Mg}^{2+}$ ions have higher charge, smaller radius, and double the delocalized electrons per atom.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf', '2.3 - Textbook answers.pdf'],
  },

  // =========================================================================
  // S2.4 FROM MODELS TO MATERIALS (5 questions — strictly SL: no condensation polymers!)
  // =========================================================================
  {
    topicCode: 'S2.4',
    paperType: 'Paper 1B (Data-Based)',
    commandTerm: 'Determine',
    difficulty: 'Standard IB',
    maxMarks: 3,
    stimulusMarkdown:
      'Pauling electronegativity values: $\\chi(\\text{Tl}) = 1.8$, $\\chi(\\text{Br}) = 3.0$, $\\chi(\\text{Cs}) = 0.8$, $\\chi(\\text{F}) = 4.0$, $\\chi(\\text{Al}) = 1.6$, $\\chi(\\text{Cl}) = 3.2$.',
    questionMarkdown:
      '*(Day 2.4 Slides)* Compute $(\\bar{\\chi},\\ \\Delta\\chi)$ coordinates on the van Arkel–Ketelaar triangle for **$\\text{TlBr}$** and **$\\text{CsF}$**, and explain why **$\\text{AlCl}_3$** ($\\Delta\\chi = 1.6$) exhibits molecular dimer behaviour rather than a high-melting ionic lattice.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '$\\text{TlBr}$: $\\bar{\\chi} = 2.40,\\ \\Delta\\chi = 1.20$ (mixed polar covalent–ionic transition zone).', marks: 1, keywords: ['2.4', '1.2'] },
        { code: 'A1', criterion: '$\\text{CsF}$: $\\bar{\\chi} = 2.40,\\ \\Delta\\chi = 3.20$ (extreme ionic apex).', marks: 1, keywords: ['2.4', '3.2'] },
        { code: 'A1', criterion: '$\\text{AlCl}_3$ lies near the covalent–ionic border: small high-charge $\\text{Al}^{3+}$ polarizes $\\text{Cl}^-$, producing significant covalent character ($\\text{Al}_2\\text{Cl}_6$ dimers, low sublimation point).', marks: 1, keywords: ['covalent character', 'Al2Cl6', 'polariz'] },
      ],
      model_answer:
        '$\\text{TlBr}$ maps to **($\\bar{\\chi}=2.40,\\ \\Delta\\chi=1.20$)** in the mixed covalent–ionic boundary zone, while $\\text{CsF}$ sits at the top ionic apex **$(2.40,\\ 3.20)$**. $\\text{AlCl}_3$ ($\\Delta\\chi = 1.6$) occupies the polar-covalent borderline where tiny high-charge $\\text{Al}^{3+}$ pulls electron density back from $\\text{Cl}^-$, generating substantial covalent character ($\\text{Al}_2\\text{Cl}_6$ gas/liquid, poor molten conduction).',
    },
    sourceFileNames: ['Day 2.4 - From Structure to Models.pdf', 'day S 2.4 review questions.pdf'],
  },
  {
    topicCode: 'S2.4',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Distinguish',
    difficulty: 'Foundation',
    maxMarks: 3,
    questionMarkdown:
      '*(Bylikin S2.4)* Explain why **alloys** are classified as **mixtures** rather than compounds, distinguish **substitutional** (brass) from **interstitial** (high-carbon steel) alloys, and explain why alloys are harder than pure metals.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Alloys lack fixed stoichiometry (variable composition) and retain metallic bonding rather than forming a discrete compound.', marks: 1, keywords: ['mixture', 'variable composition'] },
        { code: 'A1', criterion: 'Substitutional replaces host cations with similar-sized atoms (Zn in Cu); interstitial packs tiny atoms (C) into voids between Fe atoms.', marks: 1, keywords: ['substitutional', 'interstitial voids'] },
        { code: 'A1', criterion: 'Different atomic radii distort regular cation planes, obstructing **layer sliding / slip** and increasing hardness.', marks: 1, keywords: ['disrupt layers', 'prevent sliding'] },
      ],
      model_answer:
        'Alloys have variable, non-stoichiometric compositions with metallic bonding preserved, making them **solid-solution mixtures**. In **substitutional alloys** (brass), similar-sized $\\text{Zn}$ replaces $\\text{Cu}$; in **interstitial alloys** (steel), small $\\text{C}$ occupies gaps between $\\text{Fe}$ atoms. In both, mismatched atomic sizes distort lattice planes so layers cannot easily slide over each other, increasing hardness and tensile strength.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf', 'Day 2.4 - From Structure to Models.pdf'],
  },
  {
    topicCode: 'S2.4',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Deduce',
    difficulty: 'Foundation',
    maxMarks: 3,
    questionMarkdown:
      '(a) Write the structural repeating unit of **poly(chloroethene) (PVC)** formed from chloroethene ($\\text{CH}_2=\\text{CHCl}$). [1] (b) Explain why this addition polymerization has **$100\\%$ atom economy**, yet creates a long-term environmental persistence problem. [2]',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Correct repeat unit $-[\\text{CH}_2-\\text{CHCl}]-_n$ showing open trailing bonds through brackets.', marks: 1, keywords: ['-[CH2-CHCl]-n', 'trailing bonds'] },
        { code: 'A1', criterion: 'Every monomer atom enters the polymer chain as the $\\text{C=C}$ double bond opens with **no byproduct lost** ($100\\%$ atom economy).', marks: 1, keywords: ['100% atom economy', 'no byproduct'] },
        { code: 'A1', criterion: 'Saturated $\\text{C–C}$ and $\\text{C–H}$ backbone bonds are strong, non-polar, and chemically inert, resisting biological degradation.', marks: 1, keywords: ['non-biodegradable', 'unreactive C-C'] },
      ],
      model_answer:
        '(a) Repeating unit: **$-\\![\\text{CH}_2-\\text{CHCl}]_n\\!-$** (trailing bonds extending through brackets). (b) Breaking the $\\text{C=C}$ bond links monomers cleanly with zero waste molecules eliminated ($100\\%$ atom economy), but the resulting saturated non-polar $\\text{C–C}$ carbon skeleton resists hydrolysis and enzymatic breakdown, causing non-biodegradable accumulation.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf', 'Day 2.4 - From Structure to Models.pdf'],
  },
  {
    topicCode: 'S2.4',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Deduce',
    difficulty: 'Standard IB',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin S2.4 EOT)* A polymer has the repeating unit $-[\\text{CH(CH}_3)-\\text{CH}_2]-_n$. What is the IUPAC name of its monomer?',
    mcqOptions: [
      { label: 'A', text: 'Ethane' },
      { label: 'B', text: 'Propene' },
      { label: 'C', text: 'But-1-ene' },
      { label: 'D', text: 'But-2-ene' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select B (Propene).', marks: 1 }],
      model_answer: '**B.** Removing trailing bonds across the two backbone carbons and restoring the double bond yields $\\text{CH}_3\\text{CH=CH}_2$, **propene**.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },

  // =========================================================================
  // S3.1 THE PERIODIC TABLE (6 questions — STRICT SL: no crystal field / AHL d-block!)
  // =========================================================================
  {
    topicCode: 'S3.1',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Compare',
    difficulty: 'Standard IB',
    maxMarks: 1,
    questionMarkdown:
      'Order the isoelectronic $10\\ e^-$ species **$\\text{Al}^{3+},\\ \\text{F}^-,\\ \\text{Mg}^{2+},\\ \\text{Na}^+,\\ \\text{O}^{2-}$** from **SMALLEST** to **LARGEST** ionic radius.',
    mcqOptions: [
      { label: 'A', text: '$\\text{O}^{2-} < \\text{F}^- < \\text{Na}^+ < \\text{Mg}^{2+} < \\text{Al}^{3+}$' },
      { label: 'B', text: '$\\text{Al}^{3+} < \\text{Mg}^{2+} < \\text{Na}^+ < \\text{F}^- < \\text{O}^{2-}$' },
      { label: 'C', text: '$\\text{Al}^{3+} < \\text{Mg}^{2+} < \\text{Na}^+ < \\text{O}^{2-} < \\text{F}^-$' },
      { label: 'D', text: '$\\text{Na}^+ < \\text{Mg}^{2+} < \\text{Al}^{3+} < \\text{F}^- < \\text{O}^{2-}$' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select B.', marks: 1 }],
      model_answer: '**B.** All five ions hold $10$ electrons ($1s^2 2s^2 2p^6$), so increasing proton count ($Z = 8 \\to 13$) pulls the identical electron shell progressively closer: $\\text{Al}^{3+}$ ($13\\ p^+$) smallest, $\\text{O}^{2-}$ ($8\\ p^+$) largest.',
    },
    sourceFileNames: ['Day 3 - 3.1.3 Trends.pdf', 'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'S3.1',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Standard IB',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin S3.1 EOT Q3 & Q8)* Which statement about **Group 17 halogens** and **Period 3 oxides** is correct?',
    mcqOptions: [
      { label: 'A', text: '$\\text{SiO}_2$ dissolves in water to form a strongly acidic solution, and $\\text{I}_2$ oxidizes $\\text{Br}^-$' },
      { label: 'B', text: '$\\text{SO}_2$ forms an acidic solution in water, and $\\text{Cl}_2$ oxidizes $\\text{Br}^-$ to orange-brown $\\text{Br}_2$' },
      { label: 'C', text: '$\\text{Na}_2\\text{O}$ reacts with water to give $\\text{pH} < 7$, and $\\text{Br}_2$ oxidizes $\\text{Cl}^-$' },
      { label: 'D', text: '$\\text{I}_2$ has a greater tendency to gain electrons than $\\text{Cl}_2$' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select B.', marks: 1 }],
      model_answer: '**B.** Non-metal $\\text{SO}_2(g) + \\text{H}_2\\text{O}(l) \\to \\text{H}_2\\text{SO}_3(aq)$ is acidic (unlike insoluble $\\text{SiO}_2$ and basic $\\text{Na}_2\\text{O}$), and oxidizing power falls down Group 17 so $\\text{Cl}_2$ displaces $\\text{Br}^-$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'S3.1',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin S3.1 EOT Q6)* Given $\\Delta H_{\\text{EA1}}(\\text{O}) = -141\\text{ kJ mol}^{-1}$ and $\\Delta H_{\\text{EA2}}(\\text{O}^-) = +753\\text{ kJ mol}^{-1}$, what is the total enthalpy change for $\\text{O}(g) + 2e^- \\to \\text{O}^{2-}(g)$?',
    mcqOptions: [
      { label: 'A', text: '$-894\\text{ kJ mol}^{-1}$' },
      { label: 'B', text: '$-612\\text{ kJ mol}^{-1}$' },
      { label: 'C', text: '$+612\\text{ kJ mol}^{-1}$' },
      { label: 'D', text: '$+894\\text{ kJ mol}^{-1}$' },
    ],
    correctMcqOption: 'C',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select C ($+612\\text{ kJ mol}^{-1}$).', marks: 1 }],
      model_answer: '**C.** Summing $EA_1 + EA_2 = -141 + 753 = +612\\text{ kJ mol}^{-1}$; adding the second electron into negatively charged $\\text{O}^-$ requires energy to overcome electrostatic repulsion.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'S3.1',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Explain',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      '*(Day 3.1.3 & R 3.1.3)* Explain the **overall increase** in first ionization energy ($IE_1$) and **electronegativity** across Period 3 ($\\text{Na} \\to \\text{Ar}$), plus the **two small drops** at $\\text{Mg} \\to \\text{Al}$ and $\\text{P} \\to \\text{S}$.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Across Period 3, proton number $Z$ increases while outer electrons occupy the **same $n=3$ shell** with roughly constant shielding ($Z_{\\text{eff}}$ rises).', marks: 1, keywords: ['nuclear charge increases', 'same shell', 'constant shielding'] },
        { code: 'A1', criterion: 'Atomic radius contracts and stronger nuclear pull raises $IE_1$ and electronegativity.', marks: 1, keywords: ['smaller radius', 'stronger attraction'] },
        { code: 'A1', criterion: '$\\text{Mg}\\to\\text{Al}$ dip: outer $3p^1$ electron occupies a higher-energy subshell shielded by filled $3s^2$.', marks: 1, keywords: ['3p higher energy', 'shielded by 3s'] },
        { code: 'A1', criterion: '$\\text{P}\\to\\text{S}$ dip: $3p^4$ forces two electrons to **pair in one $3p$ orbital**, increasing **electron–electron repulsion**.', marks: 1, keywords: ['paired', 'electron-electron repulsion'] },
      ],
      model_answer:
        'Across Period 3, rising nuclear charge pulls on electrons within the **same $n=3$ shell** with nearly constant core shielding, shrinking radii and raising both $IE_1$ and $\\chi$. **$\\text{Mg}\\to\\text{Al}$** dips because the $3p^1$ electron sits higher in energy and is shielded by $3s^2$. **$\\text{P}\\to\\text{S}$** dips because the fourth $3p$ electron must pair in a single $3p$ orbital, creating **spin-pairing repulsion** that eases removal.',
    },
    sourceFileNames: ['Day 3 - 3.1.3 Trends.pdf', 'R 3.1.3 Electronegativity.pdf'],
  },
  {
    topicCode: 'S3.1',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Formulate',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'Write balanced chemical equations for the reaction of (a) **$\\text{Na}_2\\text{O}(s)$** with water [1], (b) **$\\text{SO}_3(g)$** with water [1], and **two equations** demonstrating the **amphoteric** nature of **$\\text{Al}_2\\text{O}_3(s)$** with hydrochloric acid and hot aqueous sodium hydroxide [2].',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '$\\text{Na}_2\\text{O}(s) + \\text{H}_2\\text{O}(l) \\to 2\\text{NaOH}(aq)$ (alkaline, $\\text{pH } 13\\text{–}14$).', marks: 1 },
        { code: 'A1', criterion: '$\\text{SO}_3(g) + \\text{H}_2\\text{O}(l) \\to \\text{H}_2\\text{SO}_4(aq)$ (strongly acidic, $\\text{pH } 1\\text{–}2$).', marks: 1 },
        { code: 'A1', criterion: 'Basic action: $\\text{Al}_2\\text{O}_3(s) + 6\\text{HCl}(aq) \\to 2\\text{AlCl}_3(aq) + 3\\text{H}_2\\text{O}(l)$.', marks: 1 },
        { code: 'A1', criterion: 'Acidic action: $\\text{Al}_2\\text{O}_3(s) + 2\\text{NaOH}(aq) + 3\\text{H}_2\\text{O}(l) \\to 2\\text{Na}[\\text{Al(OH)}_4](aq)$ (or ionic $\\text{Al(OH)}_4^-$).', marks: 1 },
      ],
      model_answer:
        '(a) $\\text{Na}_2\\text{O}(s) + \\text{H}_2\\text{O}(l) \\to 2\\text{NaOH}(aq)$\n(b) $\\text{SO}_3(g) + \\text{H}_2\\text{O}(l) \\to \\text{H}_2\\text{SO}_4(aq)$\n(c) Amphoteric $\\text{Al}_2\\text{O}_3$: $\\text{Al}_2\\text{O}_3 + 6\\text{H}^+ \\to 2\\text{Al}^{3+} + 3\\text{H}_2\\text{O}$ and $\\text{Al}_2\\text{O}_3 + 2\\text{OH}^- + 3\\text{H}_2\\text{O} \\to 2[\\text{Al(OH)}_4]^-$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'S3.1',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Deduce',
    difficulty: 'Foundation',
    maxMarks: 3,
    questionMarkdown:
      '*(Bylikin S3.1 Practice Q4)* Deduce the oxidation state of the underlined element in (a) $\\text{K}_2\\underline{\\text{Cr}}_2\\text{O}_7$, (b) $\\text{Na}\\underline{\\text{H}}$, and (c) $\\text{Na}_2\\underline{\\text{O}}_2$ (sodium peroxide), and state the systematic Stock name of $\\text{NO}_2^-$.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '$\\text{Cr} = \\mathbf{+6}$ in $\\text{K}_2\\text{Cr}_2\\text{O}_7$ ($2(+1) + 2x + 7(-2) = 0$).', marks: 1, keywords: ['+6'] },
        { code: 'A1', criterion: '$\\text{H} = \\mathbf{-1}$ in metal hydride $\\text{NaH}$, and $\\text{O} = \\mathbf{-1}$ in peroxide $\\text{Na}_2\\text{O}_2$.', marks: 1, keywords: ['-1'] },
        { code: 'A1', criterion: '$\\text{NO}_2^-$ is **nitrate(III)** (generic name nitrite).', marks: 1, keywords: ['nitrate(III)'] },
      ],
      model_answer:
        '(a) $\\text{Cr} = +6$; (b) $\\text{H} = -1$ (hydride exception); (c) $\\text{O} = -1$ (peroxide exception). In $\\text{NO}_2^-$, N has oxidation state $+3$, giving Stock name **nitrate(III)**.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },

  // =========================================================================
  // S3.2 FUNCTIONAL GROUPS & ORGANIC NOMENCLATURE (5 questions — STRICT SL!)
  // =========================================================================
  {
    topicCode: 'S3.2',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Deduce',
    difficulty: 'Standard IB',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin S3.2 EOT Q2)* What is the correct IUPAC name of $\\text{CH}_3\\text{CH=CHCH(CH}_3)\\text{CH}_2\\text{CH}_3$?',
    mcqOptions: [
      { label: 'A', text: '4-methylhex-2-ene' },
      { label: 'B', text: '3-methylhex-4-ene' },
      { label: 'C', text: '4-ethylpent-2-ene' },
      { label: 'D', text: '2-ethylpent-3-ene' },
    ],
    correctMcqOption: 'A',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select A (4-methylhex-2-ene).', marks: 1 }],
      model_answer: '**A.** The longest chain containing the $\\text{C=C}$ double bond is $6$ carbons (`hex-`); numbering from the end nearest the $\\text{C=C}$ gives `hex-2-ene` with a methyl substituent at C4: **4-methylhex-2-ene**.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'S3.2',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin S3.2 EOT Q3)* Which compound belongs to the **same homologous series** as methoxymethane, $\\text{CH}_3\\text{OCH}_3$?',
    mcqOptions: [
      { label: 'A', text: '$\\text{CH}_3\\text{COCH}_3$' },
      { label: 'B', text: '$\\text{CH}_3\\text{COOCH}_3$' },
      { label: 'C', text: '$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{OH}$' },
      { label: 'D', text: '$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{OCH}_3$' },
    ],
    correctMcqOption: 'D',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select D (1-methoxypropane, an ether).', marks: 1 }],
      model_answer: '**D.** $\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{OCH}_3$ contains the identical ether linkage ($\\text{R–O–R}\'$) differing from $\\text{CH}_3\\text{OCH}_3$ by two $-\\text{CH}_2-$ units; A is a ketone, B is an ester, C is an alcohol.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'S3.2',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Standard IB',
    maxMarks: 1,
    questionMarkdown:
      'What is the IUPAC name of the ester $\\text{HCOOCH}_2\\text{CH}_2\\text{CH}_3$, and which pair of molecules are its **functional group isomers**?',
    mcqOptions: [
      { label: 'A', text: 'Propyl methanoate; isomer of butanoic acid ($\\text{C}_4\\text{H}_8\\text{O}_2$)' },
      { label: 'B', text: 'Methyl propanoate; isomer of butanoic acid ($\\text{C}_4\\text{H}_8\\text{O}_2$)' },
      { label: 'C', text: 'Propyl ethanoate; isomer of pentanoic acid ($\\text{C}_5\\text{H}_{10}\\text{O}_2$)' },
      { label: 'D', text: 'Ethyl propanoate; isomer of butanal ($\\text{C}_4\\text{H}_8\\text{O}$)' },
    ],
    correctMcqOption: 'A',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select A.', marks: 1 }],
      model_answer: '**A.** The propyl group attaches to the single-bonded oxygen (from propan-1-ol) while the single carbonyl carbon derives from methanoic acid (`methanoate`), giving molecular formula $\\text{C}_4\\text{H}_8\\text{O}_2$—a functional group isomer of butanoic acid.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'S3.2',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Deduce',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      '*(Bylikin S3.2 Worked Ex. p. 280)* Write the condensed structural formulas and **IUPAC names** for **all four structural isomers** of **$\\text{C}_4\\text{H}_9\\text{F}$**, and classify **each** as a primary ($1^\\circ$), secondary ($2^\\circ$), or tertiary ($3^\\circ$) halogenoalkane.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '$\\text{CH}_2\\text{FCH}_2\\text{CH}_2\\text{CH}_3$: **1-fluorobutane** ($1^\\circ$).', marks: 1 },
        { code: 'A1', criterion: '$\\text{CH}_3\\text{CHFCH}_2\\text{CH}_3$: **2-fluorobutane** ($2^\\circ$).', marks: 1 },
        { code: 'A1', criterion: '$\\text{CH}_2\\text{FCH(CH}_3)\\text{CH}_3$: **1-fluoro-2-methylpropane** ($1^\\circ$).', marks: 1 },
        { code: 'A1', criterion: '$\\text{(CH}_3)_3\\text{CF}$: **2-fluoro-2-methylpropane** ($3^\\circ$).', marks: 1 },
      ],
      model_answer:
        '1. $\\text{CH}_2\\text{FCH}_2\\text{CH}_2\\text{CH}_3$ — **1-fluorobutane** ($1^\\circ$)\n2. $\\text{CH}_3\\text{CHFCH}_2\\text{CH}_3$ — **2-fluorobutane** ($2^\\circ$)\n3. $\\text{CH}_2\\text{FCH(CH}_3)_2$ — **1-fluoro-2-methylpropane** ($1^\\circ$)\n4. $\\text{(CH}_3)_3\\text{CF}$ — **2-fluoro-2-methylpropane** ($3^\\circ$).',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'S3.2',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Compare',
    difficulty: 'Foundation',
    maxMarks: 3,
    questionMarkdown:
      'Compare the **boiling points** and **aqueous solubilities** of **propan-1-ol** ($\\text{C}_3\\text{H}_7\\text{OH}$, $M = 60.11$), **propanal** ($\\text{C}_2\\text{H}_5\\text{CHO}$, $M = 58.09$), and **hexan-1-ol** ($\\text{C}_6\\text{H}_{13}\\text{OH}$) in terms of structure and intermolecular forces.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Propan-1-ol ($97^\\circ\\text{C}$) boils higher than propanal ($49^\\circ\\text{C}$) because propan-1-ol forms **intermolecular hydrogen bonds** via $-\\text{OH}$ vs dipole–dipole only in propanal.', marks: 1, keywords: ['hydrogen bonding', 'dipole-dipole'] },
        { code: 'A1', criterion: 'Hexan-1-ol boils higher than propan-1-ol because its longer alkyl chain has more electrons and **stronger London dispersion forces**.', marks: 1, keywords: ['larger molar mass', 'stronger LDF'] },
        { code: 'A1', criterion: 'Propan-1-ol is miscible in water (forms H-bonds), whereas hexan-1-ol has a large non-polar hydrophobic tail that disrupts water’s H-bond network, making it poorly soluble.', marks: 1, keywords: ['miscible', 'non-polar chain'] },
      ],
      model_answer:
        'At comparable molar mass, **propan-1-ol** boils higher than propanal because $-\\text{OH}$ forms **hydrogen bonds** rather than weaker aldehyde dipole–dipole forces. **Hexan-1-ol** boils higher still due to stronger **LDFs** from its longer $6$-carbon chain, yet becomes far less water-soluble because its bulky non-polar tail cannot form stabilizing H-bonds with water.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },

  // =========================================================================
  // R1.1 MEASURING ENTHALPY CHANGES (5 questions)
  // =========================================================================
  {
    topicCode: 'R1.1',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Deduce',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin R1.1 Practice Q1)* Solid barium hydroxide reacts with ammonium chloride:\n$$\\text{Ba(OH)}_2(s) + 2\\text{NH}_4\\text{Cl}(s) \\to \\text{BaCl}_2(aq) + 2\\text{NH}_3(g) + 2\\text{H}_2\\text{O}(l),\\quad \\Delta H = +164\\text{ kJ mol}^{-1}$$\nWhich row correctly describes the surroundings temperature and relative product stability?',
    mcqOptions: [
      { label: 'A', text: 'Temperature increases | Products have lower enthalpy and are more stable' },
      { label: 'B', text: 'Temperature decreases | Products have higher enthalpy and are less stable' },
      { label: 'C', text: 'Temperature increases | Products have higher enthalpy and are less stable' },
      { label: 'D', text: 'Temperature decreases | Products have lower enthalpy and are more stable' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select B.', marks: 1 }],
      model_answer: '**B.** Because $\\Delta H > 0$ (endothermic), energy moves from surroundings into the system, cooling the surroundings while products reside at higher enthalpy (energetically less stable).',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R1.1',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Calculate',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin R1.1 EOT Q4)* Consider the thermochemical equation: $\\text{Fe}_2\\text{O}_3(s) + 3\\text{CO}(g) \\to 2\\text{Fe}(s) + 3\\text{CO}_2(g),\\ \\Delta H = -26.6\\text{ kJ mol}^{-1}$. Which statement is correct?',
    mcqOptions: [
      { label: 'A', text: '$13.3\\text{ kJ}$ of heat are released for every mole of $\\text{Fe}$ produced' },
      { label: 'B', text: '$26.6\\text{ kJ}$ of heat are absorbed for every mole of $\\text{Fe}_2\\text{O}_3$ reacted' },
      { label: 'C', text: '$53.2\\text{ kJ}$ of heat are released for every mole of $\\text{Fe}$ produced' },
      { label: 'D', text: 'Activation energy of the forward reaction exceeds that of the reverse reaction' },
    ],
    correctMcqOption: 'A',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select A ($13.3\\text{ kJ}$ per mole Fe).', marks: 1 }],
      model_answer: '**A.** Exothermic $\\Delta H = -26.6\\text{ kJ}$ corresponds to $2\\text{ mol}$ of $\\text{Fe}$ formed, so $1\\text{ mol Fe}$ releases $26.6 / 2 = 13.3\\text{ kJ}$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R1.1',
    paperType: 'Paper 1B (Data-Based)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 4,
    stimulusMarkdown:
      '| Calorimetry Measurement (Copper Can + Water) | Value |\n| :--- | :---: |\n| Mass of water heated | $31.2\\text{ g}$ |\n| Mass of methanol ($\\text{CH}_3\\text{OH}$, $M=32.05\\text{ g mol}^{-1}$) burned | $0.348\\text{ g}$ |\n| Temperature change $\\Delta T$ | $+30.0^\\circ\\text{C}$ |\n| Literature $\\Delta H_c^\\circ(\\text{CH}_3\\text{OH})$ | $-726\\text{ kJ mol}^{-1}$ |',
    questionMarkdown:
      '*(Bylikin R1.1 Worked Ex., Book p. 399)* **Calculate** the experimental molar enthalpy of combustion $\\Delta H_c$ of methanol [3] and state ONE physical reason why $|\\Delta H_{c,\\text{exp}}|$ is much smaller than $726\\text{ kJ mol}^{-1}$ [1].',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Heat absorbed by water $q = 31.2 \\times 4.18 \\times 30.0 = 3912\\text{ J} = 3.912\\text{ kJ}$.', marks: 1 },
        { code: 'M1', criterion: 'Moles methanol $n = 0.348 / 32.05 = 0.01086\\text{ mol}$.', marks: 1 },
        { code: 'A1', criterion: '$\\Delta H_c = -3.912 / 0.01086 = \\mathbf{-360\\text{ kJ mol}^{-1}}$ (negative exothermic sign required!).', marks: 1, keywords: ['-360 kJ mol⁻¹'] },
        { code: 'A1', criterion: 'Large systematic **heat loss to the surroundings / calorimeter vessel** and/or **incomplete combustion** (soot formation).', marks: 1, keywords: ['heat loss', 'incomplete combustion'] },
      ],
      model_answer:
        '$q = 31.2 \\times 4.18 \\times 30.0 = 3.912\\text{ kJ}$; $n(\\text{CH}_3\\text{OH}) = 0.348 / 32.05 = 0.01086\\text{ mol}$. Since combustion warms the water, $\\Delta H_c = -\\frac{3.912}{0.01086} = \\mathbf{-360\\text{ kJ mol}^{-1}}$. The magnitude is far less exothermic than $-726\\text{ kJ mol}^{-1}$ due to uninsulated **heat loss to air and metal calorimeter** plus **incomplete combustion** and wick evaporation.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R1.1',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 3,
    questionMarkdown:
      '*(Bylikin R1.1 Practice, Book p. 395)* Dissolving $1.15\\text{ g}$ of anhydrous lithium chloride ($\\text{LiCl},\\ M = 42.39\\text{ g mol}^{-1}$) in $25.0\\text{ g}$ of water in a coffee-cup calorimeter raised temperature by $3.80\\text{ K}$. **Calculate** the molar enthalpy of dissolution $\\Delta H_{\\text{sol}}$ in $\\text{kJ mol}^{-1}$ and state ONE simplifying assumption used.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: '$q = 25.0 \\times 4.18 \\times 3.80 = 397.1\\text{ J} = 0.3971\\text{ kJ}$.', marks: 1 },
        { code: 'A1', criterion: '$n(\\text{LiCl}) = 1.15 / 42.39 = 0.02713\\text{ mol} \\implies \\Delta H_{\\text{sol}} = -0.3971 / 0.02713 = \\mathbf{-14.6\\text{ kJ mol}^{-1}}$.', marks: 1, keywords: ['-14.6'] },
        { code: 'A1', criterion: 'Assumption: solution specific heat capacity equals pure water ($4.18\\text{ J g}^{-1}\\text{ K}^{-1}$) and/or zero heat absorbed by cup/LiCl.', marks: 1, keywords: ['specific heat', 'water', 'negligible heat loss'] },
      ],
      model_answer:
        '$q = 25.0 \\times 4.18 \\times 3.80 = 0.3971\\text{ kJ}$ and $n = 0.02713\\text{ mol}$, yielding $\\Delta H_{\\text{sol}} = \\mathbf{-14.6\\text{ kJ mol}^{-1}}$. Assumes specific heat capacity of the solution equals pure water ($4.18\\text{ J g}^{-1}\\text{ K}^{-1}$) and zero heat loss to surroundings.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },

  // =========================================================================
  // R1.2 ENERGY CYCLES & BOND ENTHALPIES (5 questions — SL ONLY: NO Born-Haber!)
  // =========================================================================
  {
    topicCode: 'R1.2',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 3,
    questionMarkdown:
      '*(Bylikin R1.2 Practice Q1)* Hydrogen reacts with chlorine: $\\text{H}_2(g) + \\text{Cl}_2(g) \\to 2\\text{HCl}(g),\\ \\Delta H^\\circ = -185\\text{ kJ mol}^{-1}$. Given average bond enthalpies $E(\\text{H–H}) = 436\\text{ kJ mol}^{-1}$ and $E(\\text{Cl–Cl}) = 242\\text{ kJ mol}^{-1}$, **calculate** the bond enthalpy of $\\text{H–Cl}$ in $\\text{kJ mol}^{-1}$.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Set $\\Delta H = \\sum E(\\text{broken}) - \\sum E(\\text{formed}) = (436 + 242) - 2\\,E(\\text{H–Cl})$.', marks: 1 },
        { code: 'M1', criterion: '$-185 = 678 - 2\\,E(\\text{H–Cl}) \\implies 2\\,E(\\text{H–Cl}) = 863\\text{ kJ mol}^{-1}$.', marks: 1 },
        { code: 'A1', criterion: '$E(\\text{H–Cl}) = \\mathbf{431.5}$ (or $432$) $\\text{kJ mol}^{-1}$.', marks: 1, keywords: ['431.5', '432'] },
      ],
      model_answer:
        '$\\Delta H = (436 + 242) - 2\\,E(\\text{H–Cl}) = -185 \\implies 2\\,E(\\text{H–Cl}) = 863 \\implies E(\\text{H–Cl}) = \\mathbf{431.5\\text{ kJ mol}^{-1}}$ ($432\\text{ kJ mol}^{-1}$ to 3 s.f.).',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R1.2',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 3,
    stimulusMarkdown:
      '1. $\\text{C}_2\\text{H}_5\\text{OH}(l) + 3\\text{O}_2(g) \\to 2\\text{CO}_2(g) + 3\\text{H}_2\\text{O}(l),\\ \\Delta H_1 = -1367\\text{ kJ mol}^{-1}$\n2. $\\text{C}(s) + \\text{O}_2(g) \\to \\text{CO}_2(g),\\ \\Delta H_2 = -394\\text{ kJ mol}^{-1}$\n3. $\\text{H}_2(g) + \\tfrac{1}{2}\\text{O}_2(g) \\to \\text{H}_2\\text{O}(l),\\ \\Delta H_3 = -286\\text{ kJ mol}^{-1}$',
    questionMarkdown:
      '*(Bylikin R1.2 Practice Q4, Book p. 410)* Using Hess’s law and equations 1–3, **calculate** the standard enthalpy of formation of liquid ethanol:\n$$2\\text{C}(s) + 3\\text{H}_2(g) + \\tfrac{1}{2}\\text{O}_2(g) \\to \\text{C}_2\\text{H}_5\\text{OH}(l)$$',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Double Eq 2 ($-788$), triple Eq 3 ($-858$), and reverse Eq 1 ($+1367$).', marks: 1 },
        { code: 'M1', criterion: 'Check cancellation of $2\\text{CO}_2$, $3\\text{H}_2\\text{O}$, and $3\\text{O}_2$ leaving $\\tfrac{1}{2}\\text{O}_2$ on LHS.', marks: 1 },
        { code: 'A1', criterion: '$\\Delta H_f^\\circ = -788 - 858 + 1367 = \\mathbf{-279\\text{ kJ mol}^{-1}}$.', marks: 1, keywords: ['-279'] },
      ],
      model_answer:
        'Combining $2\\times(\\text{Eq }2) + 3\\times(\\text{Eq }3) - (\\text{Eq }1)$ gives $\\Delta H_f^\\circ(\\text{C}_2\\text{H}_5\\text{OH}) = 2(-394) + 3(-286) + 1367 = \\mathbf{-279\\text{ kJ mol}^{-1}}$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R1.2',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Explain',
    difficulty: 'Standard IB',
    maxMarks: 2,
    questionMarkdown:
      '*(Bylikin R1.2 Practice Q6)* Explain two reasons why the enthalpy change of a reaction involving liquid methanol or ethanol calculated from **average bond enthalpies** differs from the value obtained via **Hess’s law** using $\\Delta H_f^\\circ$ data.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Average bond enthalpies are **mean values averaged across many compounds** rather than exact bonds in these specific molecules.', marks: 1, keywords: ['average', 'different molecules'] },
        { code: 'A1', criterion: 'Bond enthalpies apply **only to gaseous states**, whereas standard $\\Delta H_f^\\circ$ includes liquid/solid states (ignoring enthalpy of vaporization/IMFs).', marks: 1, keywords: ['gaseous', 'state', 'vaporization'] },
      ],
      model_answer:
        'First, bond enthalpy tables provide **mean averages** across many chemical environments rather than exact local bond strengths. Second, bond enthalpies apply exclusively to **gaseous species**, whereas standard enthalpy cycles reflect **liquid ethanol/water** without accounting for enthalpies of vaporization.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R1.2',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin R1.2 Worked Ex. p. 409)* Using $\\Delta H_c^\\circ(\\text{C}(s)) = -394$, $\\Delta H_c^\\circ(\\text{H}_2(g)) = -286$, and $\\Delta H_c^\\circ(\\text{CH}_3\\text{OH}(l)) = -726\\text{ kJ mol}^{-1}$, what is $\\Delta H_f^\\circ(\\text{CH}_3\\text{OH}(l))$?',
    mcqOptions: [
      { label: 'A', text: '$-1406\\text{ kJ mol}^{-1}$' },
      { label: 'B', text: '$-240\\text{ kJ mol}^{-1}$' },
      { label: 'C', text: '$+46\\text{ kJ mol}^{-1}$' },
      { label: 'D', text: '$+240\\text{ kJ mol}^{-1}$' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select B ($-240\\text{ kJ mol}^{-1}$).', marks: 1 }],
      model_answer:
        '**B.** For $\\text{C}(s) + 2\\text{H}_2(g) + \\tfrac{1}{2}\\text{O}_2(g) \\to \\text{CH}_3\\text{OH}(l)$, $\\Delta H_f^\\circ = \\Delta H_c^\\circ(\\text{C}) + 2\\Delta H_c^\\circ(\\text{H}_2) - \\Delta H_c^\\circ(\\text{CH}_3\\text{OH}) = -394 + 2(-286) - (-726) = -240\\text{ kJ mol}^{-1}$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },

  // =========================================================================
  // R1.3 ENERGY FROM FUELS (4 questions)
  // =========================================================================
  {
    topicCode: 'R1.3',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin R1.3 EOT Q3)* Which balanced equations represent **incomplete combustion** of methane?\n\nI. $\\text{CH}_4(g) + 2\\text{O}_2(g) \\to \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(g)$\nII. $2\\text{CH}_4(g) + 3\\text{O}_2(g) \\to 2\\text{CO}(g) + 4\\text{H}_2\\text{O}(g)$\nIII. $\\text{CH}_4(g) + \\text{O}_2(g) \\to \\text{C}(s) + 2\\text{H}_2\\text{O}(g)$',
    mcqOptions: [
      { label: 'A', text: 'I, II and III' },
      { label: 'B', text: 'II and III only' },
      { label: 'C', text: 'II only' },
      { label: 'D', text: 'III only' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select B (II and III only).', marks: 1 }],
      model_answer: '**B.** Equation I represents complete combustion to $\\text{CO}_2$, whereas insufficient oxygen produces toxic $\\text{CO}(g)$ (II) or carbon soot $\\text{C}(s)$ (III).',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R1.3',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Compare',
    difficulty: 'Standard IB',
    maxMarks: 1,
    questionMarkdown:
      'Why does **methane ($\\text{CH}_4$, $55.5\\text{ kJ g}^{-1}$)** have a significantly higher **specific energy** than **ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$, $29.7\\text{ kJ g}^{-1}$)**?',
    mcqOptions: [
      { label: 'A', text: 'Ethanol is already partially oxidized by its oxygen atom, lowering heat released per gram' },
      { label: 'B', text: 'Methane has stronger intermolecular hydrogen bonds' },
      { label: 'C', text: 'Combustion of methane is endothermic' },
      { label: 'D', text: 'Ethanol has a higher percentage of hydrogen by mass' },
    ],
    correctMcqOption: 'A',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select A.', marks: 1 }],
      model_answer: '**A.** Ethanol contains an oxygen atom (higher carbon oxidation state), adding dead mass that is already partially oxidized relative to saturated hydrocarbon $\\text{CH}_4$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R1.3',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Evaluate',
    difficulty: 'Standard IB',
    maxMarks: 3,
    questionMarkdown:
      '*(Bylikin R1.3 EOT Q5)* Bioethanol produced by fermenting sugarcane glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$) is promoted as a "carbon-neutral" fuel. Write the balanced **complete combustion equation** of ethanol [1] and evaluate ONE argument supporting and ONE limiting its **carbon-neutrality** [2].',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '$\\text{C}_2\\text{H}_5\\text{OH}(l) + 3\\text{O}_2(g) \\to 2\\text{CO}_2(g) + 3\\text{H}_2\\text{O}(l)$.', marks: 1 },
        { code: 'A1', criterion: 'Supporting: $\\text{CO}_2$ released during fermentation ($2\\text{CO}_2$) + combustion ($4\\text{CO}_2$) balances the $6\\text{CO}_2$ absorbed recently by plant photosynthesis.', marks: 1, keywords: ['photosynthesis', 'short-term carbon cycle'] },
        { code: 'A1', criterion: 'Limitation: fossil fuels power farm machinery, fertilizer synthesis, transport, and energy-intensive ethanol distillation (plus arable land competition).', marks: 1, keywords: ['fossil fuels', 'fertilizer', 'distillation'] },
      ],
      model_answer:
        '$\\text{C}_2\\text{H}_5\\text{OH}(l) + 3\\text{O}_2(g) \\to 2\\text{CO}_2(g) + 3\\text{H}_2\\text{O}(l)$. **Pro:** Photosynthesis recently fixed the exact $6\\text{CO}_2$ per glucose released during fermentation and burning ($2 + 4 = 6$). **Con:** True net $\\text{CO}_2$ rises because fossil energy is burned for fertilizers, harvesting, distillation, and transport.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R1.3',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Formulate',
    difficulty: 'Standard IB',
    maxMarks: 3,
    questionMarkdown:
      '*(Bylikin R1.3 EOT Q6)* A proton exchange membrane (PEM) **hydrogen fuel cell** uses $\\text{H}_2(g)$ and $\\text{O}_2(g)$ in an acidic electrolyte. Write the **anode** and **cathode** half-equations [2] and explain ONE advantage of fuel cells over internal combustion engines [1].',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Anode (oxidation): $\\text{H}_2(g) \\to 2\\text{H}^+(aq) + 2e^-$.', marks: 1 },
        { code: 'A1', criterion: 'Cathode (reduction): $\\text{O}_2(g) + 4\\text{H}^+(aq) + 4e^- \\to 2\\text{H}_2\\text{O}(l)$.', marks: 1 },
        { code: 'A1', criterion: 'Direct chemical-to-electrical conversion achieves higher efficiency ($\\sim 60\\%$) and zero tailpipe $\\text{CO}_2$/$\\text{NO}_x$ (water is sole point-of-use product).', marks: 1, keywords: ['higher efficiency', 'only water'] },
      ],
      model_answer:
        'Anode: $\\text{H}_2 \\to 2\\text{H}^+ + 2e^-$; Cathode: $\\text{O}_2 + 4\\text{H}^+ + 4e^- \\to 2\\text{H}_2\\text{O}$. Direct electrochemical conversion bypasses thermal Carnot heat losses for superior efficiency and emits only water vapour at point of use.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },

  // =========================================================================
  // R2.1 HOW MUCH? STOICHIOMETRY, YIELD & ATOM ECONOMY (5 questions)
  // =========================================================================
  {
    topicCode: 'R2.1',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Calculate',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin R2.1 EOT Q2)* Pyrite burns in oxygen: $4\\text{FeS}_2(s) + 11\\text{O}_2(g) \\to 2\\text{Fe}_2\\text{O}_3(s) + 8\\text{SO}_2(g)$. What mass of $\\text{SO}_2$ ($M = 64.07\\text{ g mol}^{-1}$) forms from $0.25\\text{ mol}$ of $\\text{FeS}_2$?',
    mcqOptions: [
      { label: 'A', text: '$16\\text{ g}$' },
      { label: 'B', text: '$32\\text{ g}$' },
      { label: 'C', text: '$64\\text{ g}$' },
      { label: 'D', text: '$128\\text{ g}$' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select B ($32\\text{ g}$).', marks: 1 }],
      model_answer: '**B.** $n(\\text{SO}_2) = 0.25\\times \\frac{8}{4} = 0.50\\text{ mol} \\implies m = 0.50\\times 64.07 = 32\\text{ g}$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R2.1',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Deduce',
    difficulty: 'Standard IB',
    maxMarks: 1,
    questionMarkdown: '*(Bylikin R2.1 EOT Q3)* In which reaction mixture is **sulfuric acid ($\\text{H}_2\\text{SO}_4$)** the **limiting reactant**?',
    mcqOptions: [
      { label: 'A', text: '$0.10\\text{ mol H}_2\\text{SO}_4 + 0.20\\text{ mol KOH}$' },
      { label: 'B', text: '$0.20\\text{ mol H}_2\\text{SO}_4 + 0.10\\text{ mol KOH}$' },
      { label: 'C', text: '$0.10\\text{ mol H}_2\\text{SO}_4 + 0.20\\text{ mol Ca(OH)}_2$' },
      { label: 'D', text: '$0.20\\text{ mol H}_2\\text{SO}_4 + 0.10\\text{ mol Ca(OH)}_2$' },
    ],
    correctMcqOption: 'C',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select C.', marks: 1 }],
      model_answer: '**C.** $\\text{H}_2\\text{SO}_4 + \\text{Ca(OH)}_2 \\to \\text{CaSO}_4 + 2\\text{H}_2\\text{O}$ reacts $1:1$, so $0.10\\text{ mol H}_2\\text{SO}_4$ runs out before $0.20\\text{ mol Ca(OH)}_2$. (In A, $1:2$ stoichiometry consumes both identically.)',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R2.1',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Calculate',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin R2.1 EOT Q4)* What is the percentage yield when $18.0\\text{ dm}^3$ of ethane, $\\text{C}_2\\text{H}_6(g)$, is produced from $20.0\\text{ dm}^3$ of ethene, $\\text{C}_2\\text{H}_4(g)$, with excess $\\text{H}_2(g)$ all measured at STP ($22.7\\text{ dm}^3\\text{ mol}^{-1}$)?',
    mcqOptions: [
      { label: 'A', text: '$10\\%$' },
      { label: 'B', text: '$20\\%$' },
      { label: 'C', text: '$80\\%$' },
      { label: 'D', text: '$90\\%$' },
    ],
    correctMcqOption: 'D',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select D ($90\\%$).', marks: 1 }],
      model_answer: '**D.** For $\\text{C}_2\\text{H}_4 + \\text{H}_2 \\to \\text{C}_2\\text{H}_6$, $1:1$ gas volume ratio predicts $20.0\\text{ dm}^3$ theoretical $\\text{C}_2\\text{H}_6$; yield $= (18.0 / 20.0)\\times 100\\% = 90\\%$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R2.1',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      '*(Bylikin R2.1 Practice Q6)* Aluminium burns in oxygen: $4\\text{Al}(s) + 3\\text{O}_2(g) \\to 2\\text{Al}_2\\text{O}_3(s)$. Reacting $9.443\\text{ g}$ of aluminium ($M = 26.98$) with $7.945\\text{ dm}^3$ of $\\text{O}_2$ at IB **STP ($22.7\\text{ dm}^3\\text{ mol}^{-1}$)** isolated $17.13\\text{ g}$ of $\\text{Al}_2\\text{O}_3$ ($M = 101.96$). **Calculate** the limiting reactant, theoretical yield, and percentage yield.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: '$n(\\text{Al}) = 9.443 / 26.98 = 0.3500\\text{ mol}$; $n(\\text{O}_2) = 7.945 / 22.7 = 0.3500\\text{ mol}$.', marks: 1 },
        { code: 'A1', criterion: 'Since $4\\text{Al}:3\\text{O}_2$ needs $0.2625\\text{ mol O}_2$, **$\\text{Al}$ is limiting** ($\\text{O}_2$ in excess).', marks: 1, keywords: ['Al limiting'] },
        { code: 'A1', criterion: '$n(\\text{Al}_2\\text{O}_3) = 0.3500 / 2 = 0.1750\\text{ mol} \\implies m_{\\text{theo}} = 0.1750\\times 101.96 = \\mathbf{17.84\\text{ g}}$.', marks: 1, keywords: ['17.84'] },
        { code: 'A1', criterion: '$\\%\\text{ yield} = \\frac{17.13}{17.84}\\times 100\\% = \\mathbf{96.0\\%}$.', marks: 1, keywords: ['96.0%'] },
      ],
      model_answer:
        '$n(\\text{Al}) = 0.3500\\text{ mol}$ and $n(\\text{O}_2) = 7.945 / 22.7 = 0.3500\\text{ mol}$. Because $0.3500\\text{ mol Al}$ needs only $0.2625\\text{ mol O}_2$, **$\\text{Al}$ is limiting**. Theoretical yield $= (0.3500 / 2) \\times 101.96 = \\mathbf{17.84\\text{ g}}$; $\\%\\text{ yield} = (17.13 / 17.84)\\times 100\\% = \\mathbf{96.0\\%}$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R2.1',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 3,
    questionMarkdown:
      '*(Bylikin R2.1 EOT Q5 & Practice)* Consider the catalytic synthesis of methanal from methanol: $\\text{CH}_3\\text{OH}(l) + \\tfrac{1}{2}\\text{O}_2(g) \\to \\text{HCHO}(g) + \\text{H}_2\\text{O}(l)$ ($M(\\text{CH}_3\\text{OH})=32.05,\\ M(\\text{O}_2)=32.00,\\ M(\\text{HCHO})=30.03,\\ M(\\text{H}_2\\text{O})=18.02$). **Calculate** the percentage **atom economy** for methanal and explain why high % yield does not guarantee high atom economy.',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: 'Total reactant mass $= 32.05 + 0.5(32.00) = 48.05\\text{ g}$ (matches $30.03 + 18.02 = 48.05\\text{ g}$).', marks: 1 },
        { code: 'A1', criterion: '$\\%\\text{ atom economy} = \\frac{30.03}{48.05}\\times 100\\% = \\mathbf{62.5\\%}$.', marks: 1, keywords: ['62.5%'] },
        { code: 'A1', criterion: 'Yield reflects experimental product recovery, whereas atom economy reflects unavoidable stoichiometric byproduct waste ($\\text{H}_2\\text{O}$) even at $100\\%$ yield.', marks: 1, keywords: ['byproduct', 'stoichiometric'] },
      ],
      model_answer:
        'Atom economy $= \\frac{30.03}{32.05 + 16.00}\\times 100\\% = \\mathbf{62.5\\%}$. Even at $100\\%$ experimental yield, stoichiometric $\\text{H}_2\\text{O}$ accounts for $37.5\\%$ non-desired product mass, limiting green-chemistry efficiency.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },

  // =========================================================================
  // R2.2 HOW FAST? RATES & COLLISION THEORY (5 questions — STRICT SL!)
  // =========================================================================
  {
    topicCode: 'R2.2',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin R2.2 Practice Q1)* Ammonia oxidizes according to $4\\text{NH}_3(g) + 5\\text{O}_2(g) \\to 4\\text{NO}(g) + 6\\text{H}_2\\text{O}(g)$. Over $5.0\\text{ s}$, $[\\text{NO}]$ rises from $0$ to $6.0 \\times 10^{-3}\\text{ mol dm}^{-3}$. What is the average rate of **consumption of $\\text{O}_2$** in $\\text{mol dm}^{-3}\\text{ s}^{-1}$?',
    mcqOptions: [
      { label: 'A', text: '$9.6 \\times 10^{-4}$' },
      { label: 'B', text: '$1.2 \\times 10^{-3}$' },
      { label: 'C', text: '$1.5 \\times 10^{-3}$' },
      { label: 'D', text: '$1.8 \\times 10^{-3}$' },
    ],
    correctMcqOption: 'C',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select C ($1.5\\times 10^{-3}$).', marks: 1 }],
      model_answer: '**C.** Rate of $\\text{NO}$ formation $= \\frac{6.0\\times 10^{-3}}{5.0} = 1.2\\times 10^{-3}\\text{ mol dm}^{-3}\\text{ s}^{-1}$. From $5:4$ ratio, rate of $\\text{O}_2$ consumption $= \\frac{5}{4}(1.2\\times 10^{-3}) = 1.5\\times 10^{-3}\\text{ mol dm}^{-3}\\text{ s}^{-1}$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R2.2',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Explain',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown: 'How does adding a suitable **catalyst** increase the rate of a chemical reaction according to collision theory and the Maxwell–Boltzmann distribution?',
    mcqOptions: [
      { label: 'A', text: 'It shifts the Maxwell–Boltzmann distribution curve toward higher kinetic energies' },
      { label: 'B', text: 'It provides an alternative reaction pathway with a lower activation energy $E_a$' },
      { label: 'C', text: 'It makes $\\Delta H$ more negative so more collisions occur' },
      { label: 'D', text: 'It lowers kinetic energy of reactant molecules so they collide longer' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select B.', marks: 1 }],
      model_answer: '**B.** A catalyst leaves the Boltzmann curve and $\\Delta H$ unchanged; it lowers $E_a$ via an alternative pathway, increasing the fraction of particles exceeding $E_a$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R2.2',
    paperType: 'Paper 1B (Data-Based)',
    commandTerm: 'Explain',
    difficulty: 'Standard IB',
    maxMarks: 4,
    stimulusMarkdown:
      '| Time / s | $0$ | $10$ | $20$ | $30$ | $50$ | $80$ | $100$ |\n| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |\n| $V(\\text{H}_2) / \\text{cm}^3$ | $0$ | $111$ | $164$ | $192$ | $223$ | $246$ | $250$ |',
    questionMarkdown:
      '*(Bylikin R2.2 Worked Ex. 2, Book p. 483)* Magnesium ribbon reacts with excess $0.250\\text{ mol dm}^{-3}\\ \\text{HCl}(aq)$ in a gas syringe. (a) **Calculate** the average rate of $\\text{H}_2$ evolution over the first $20\\text{ s}$ in $\\text{cm}^3\\text{ s}^{-1}$. [1] (b) **Explain** using collision theory why the rate decreases to zero by $t = 100\\text{ s}$ [2], and state how to find instantaneous rate at $t = 30\\text{ s}$ [1].',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Average rate $= 164 / 20 = \\mathbf{8.20\\text{ cm}^3\\text{ s}^{-1}}$.', marks: 1, keywords: ['8.20', '8.2'] },
        { code: 'A1', criterion: 'As reactants ($\\text{H}^+$ and $\\text{Mg}$ surface area) are consumed, $[\\text{HCl}]$ falls,', marks: 1, keywords: ['concentration decreases'] },
        { code: 'A1', criterion: 'lowering the frequency of successful collisions until limiting $\\text{Mg}$ runs out ($r=0$).', marks: 1, keywords: ['collision frequency decreases'] },
        { code: 'A1', criterion: 'Draw a tangent line touching the smooth curve at $t=30\\text{ s}$ and compute its gradient $\\Delta V / \\Delta t$.', marks: 1, keywords: ['tangent', 'gradient'] },
      ],
      model_answer:
        '(a) $\\frac{164 - 0}{20 - 0} = \\mathbf{8.20\\text{ cm}^3\\text{ s}^{-1}}$. (b) Over time, $[\\text{HCl}]$ falls and magnesium ribbon shrinks, reducing collision frequency per second until the limiting reagent is completely consumed. Instantaneous rate at $t=30\\text{ s}$ equals the gradient of a **tangent** drawn to the curve at $30\\text{ s}$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R2.2',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Explain',
    difficulty: 'Standard IB',
    maxMarks: 3,
    questionMarkdown:
      'Explain, with explicit reference to the **Maxwell–Boltzmann distribution curve**, why raising temperature by only $10\\text{ K}$ causes a dramatic increase in reaction rate.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Higher $T$ shifts and flattens/broadens the Boltzmann curve to higher average kinetic energies (total area constant).', marks: 1, keywords: ['flattens', 'shifts right'] },
        { code: 'A1', criterion: 'A significantly larger **proportion/fraction of molecules now possess energy $E \\ge E_a$** (primary factor!).', marks: 1, keywords: ['larger fraction', 'E ≥ Ea'] },
        { code: 'A1', criterion: 'Collision frequency also increases slightly due to faster molecular speeds, multiplying successful collisions per unit time.', marks: 1, keywords: ['successful collision frequency'] },
      ],
      model_answer:
        'At higher temperature, the Maxwell–Boltzmann distribution lowers in peak height and shifts toward higher kinetic energies while conserving total area, **sharply increasing the fraction of particles with $E \\ge E_a$**. Combined with a modest rise in total collision frequency, the frequency of successful collisions jumps dramatically.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R2.2',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Sketch',
    difficulty: 'Foundation',
    maxMarks: 2,
    questionMarkdown:
      '*(Bylikin R2.2 Practice Q3)* A single-step reaction $\\text{A} + \\text{B} \\to \\text{C} + \\text{D}$ has $\\Delta H = -10\\text{ kJ mol}^{-1}$ and forward activation energy $E_a = +20\\text{ kJ mol}^{-1}$. Calculate the activation energy of the **reverse reaction** and identify whether reactants or products sit lower on the enthalpy profile.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '$E_{a,\\text{rev}} = E_{a,\\text{fwd}} + |\\Delta H| = 20 + 10 = \\mathbf{30\\text{ kJ mol}^{-1}}$.', marks: 1, keywords: ['30 kJ mol⁻¹'] },
        { code: 'A1', criterion: 'Products ($\\text{C} + \\text{D}$) lie $10\\text{ kJ mol}^{-1}$ **lower** in enthalpy than reactants (exothermic).', marks: 1, keywords: ['products lower'] },
      ],
      model_answer:
        'Products $\\text{C} + \\text{D}$ sit $10\\text{ kJ mol}^{-1}$ lower than reactants, so returning from products over the same transition-state peak requires $E_{a,\\text{rev}} = 20 + 10 = \\mathbf{30\\text{ kJ mol}^{-1}}$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },

  // =========================================================================
  // R2.3 HOW FAR? EQUILIBRIUM & LE CHATELIER (5 questions — SL ONLY!)
  // =========================================================================
  {
    topicCode: 'R2.3',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown: '*(Bylikin R2.3 EOT Q2)* Which statement is true for **every** reversible chemical system at **dynamic equilibrium**?',
    mcqOptions: [
      { label: 'A', text: 'Concentrations of reactants and products are strictly equal' },
      { label: 'B', text: 'Forward and reverse reactions have completely stopped' },
      { label: 'C', text: 'The rates of the forward and reverse reactions are equal, and macroscopic concentrations stay constant' },
      { label: 'D', text: 'Adding a catalyst increases the equilibrium constant $K_c$' },
    ],
    correctMcqOption: 'C',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select C.', marks: 1 }],
      model_answer: '**C.** Equilibrium means equal opposing rates ($r_f = r_r > 0$) and unchanging concentrations (not necessarily equal concentrations).',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R2.3',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Standard IB',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin R2.3 EOT Q3)* Which changes increase the **rates** of BOTH forward and reverse reactions in a gaseous equilibrium system?\n\nI. Increasing temperature\nII. Increasing pressure (by compressing container)\nIII. Adding a catalyst',
    mcqOptions: [
      { label: 'A', text: 'I and II only' },
      { label: 'B', text: 'I and III only' },
      { label: 'C', text: 'II and III only' },
      { label: 'D', text: 'I, II and III' },
    ],
    correctMcqOption: 'D',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select D (I, II and III).', marks: 1 }],
      model_answer: '**D.** Higher $T$, higher gas pressure (higher concentrations), and catalysts (lowering both $E_{a,\\text{fwd}}$ and $E_{a,\\text{rev}}$) all speed both opposing reactions.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R2.3',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Predict',
    difficulty: 'Standard IB',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin R2.3 EOT Q6)* For a homogeneous reversible reaction at constant temperature, the instantaneous reaction quotient exceeds the equilibrium constant ($Q > K_c$). What occurs as the system approaches equilibrium?',
    mcqOptions: [
      { label: 'A', text: 'Equilibrium shifts right, decreasing $K_c$' },
      { label: 'B', text: 'Net reverse reaction proceeds until $Q$ decreases to equal constant $K_c$' },
      { label: 'C', text: 'Product concentrations continue increasing' },
      { label: 'D', text: 'The value of $K_c$ increases to match $Q$' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select B.', marks: 1 }],
      model_answer: '**B.** $Q > K_c$ signals excess products relative to equilibrium; the reverse reaction dominates to convert products back to reactants until $Q = K_c$ ($K_c$ stays constant at fixed $T$).',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R2.3',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 3,
    questionMarkdown:
      '*(Bylikin R2.3 Worked Ex. 1–2, Book pp. 517–518)* At $475\\text{ K}$, equilibrium concentrations for $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ are $[\\text{N}_2] = 0.50$, $[\\text{H}_2] = 1.50$, and $[\\text{NH}_3] = 1.00\\text{ mol dm}^{-3}$. (a) Write the $K_c$ expression and calculate $K_c$ [2]. (b) Calculate $K_c\'$ at $475\\text{ K}$ for $\\text{NH}_3(g) \\rightleftharpoons \\tfrac{1}{2}\\text{N}_2(g) + \\tfrac{3}{2}\\text{H}_2(g)$ [1].',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '$K_c = \\dfrac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3}$.', marks: 1 },
        { code: 'A1', criterion: '$K_c = \\frac{1.00^2}{0.50 \\times 1.50^3} = \\frac{1}{1.6875} = \\mathbf{0.59}$.', marks: 1, keywords: ['0.59'] },
        { code: 'A1', criterion: 'Reversed and halved $\\implies K_c\' = 1/\\sqrt{0.5926} = \\mathbf{1.3}$.', marks: 1, keywords: ['1.3'] },
      ],
      model_answer:
        '(a) $K_c = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3} = \\frac{1.00^2}{0.50 \\times 3.375} = \\mathbf{0.59}$. (b) Reversing inverts $K_c$ and halving takes its square root: $K_c\' = \\frac{1}{\\sqrt{0.59}} = \\mathbf{1.3}$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R2.3',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Explain',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      'For the Contact Process reaction $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g),\\ \\Delta H = -197\\text{ kJ mol}^{-1}$, predict and explain the effect on **equilibrium yield of $\\text{SO}_3$** and the numerical value of **$K_c$** when (a) **pressure is increased** [2] and (b) **temperature is raised** [2].',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Higher $P$ shifts equilibrium **right** toward fewer moles of gas ($3\\text{ mol} \\to 2\\text{ mol}$), increasing $\\text{SO}_3$ yield.', marks: 1, keywords: ['fewer gas moles', 'shifts right'] },
        { code: 'A1', criterion: 'Pressure change leaves **$K_c$ unchanged** at constant $T$.', marks: 1, keywords: ['Kc unchanged'] },
        { code: 'A1', criterion: 'Higher $T$ favours the **endothermic reverse reaction** to absorb added heat, decreasing $\\text{SO}_3$ yield.', marks: 1, keywords: ['endothermic reverse', 'yield decreases'] },
        { code: 'A1', criterion: 'Because products decrease relative to reactants, **$K_c$ decreases**.', marks: 1, keywords: ['Kc decreases'] },
      ],
      model_answer:
        '(a) Increasing pressure shifts right toward **fewer gas molecules** ($3\\text{ mol} \\to 2\\text{ mol}$), boosting $\\text{SO}_3$ yield while leaving **$K_c$ unchanged**. (b) Raising temperature favours the **endothermic reverse direction** ($\\Delta H_{\\text{rev}} = +197\\text{ kJ}$), lowering $\\text{SO}_3$ yield and **decreasing $K_c$**.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },

  // =========================================================================
  // R3.1 PROTON TRANSFER ACIDS & BASES (5 questions — STRICT SL: R3.1.1–3.1.8!)
  // =========================================================================
  {
    topicCode: 'R3.1',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown: '*(Bylikin R3.1 EOT Q3)* Which pair of species forms a **Brønsted–Lowry conjugate acid–base pair**?',
    mcqOptions: [
      { label: 'A', text: '$\\text{H}_3\\text{O}^+$ and $\\text{OH}^-$' },
      { label: 'B', text: '$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$' },
      { label: 'C', text: '$\\text{H}_3\\text{O}^+$ and $\\text{H}_2\\text{O}$' },
      { label: 'D', text: '$\\text{HCl}$ and $\\text{NaOH}$' },
    ],
    correctMcqOption: 'C',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select C ($\\text{H}_3\\text{O}^+/\\text{H}_2\\text{O}$ differ by one $\\text{H}^+$).', marks: 1 }],
      model_answer: '**C.** Conjugate pairs differ by **exactly one $\\text{H}^+$**; options A and B differ by $2\\text{H}^+$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R3.1',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Compare',
    difficulty: 'Standard IB',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin R3.1 EOT Q2 adapted)* Aqueous solution **X** has $\\text{pH} = 1.0$ and aqueous solution **Y** has $\\text{pH} = 4.0$ at $298\\text{ K}$. Which statement is definitely correct?',
    mcqOptions: [
      { label: 'A', text: '$[\\text{H}^+]$ in X is $3\\times$ higher than in Y' },
      { label: 'B', text: '$[\\text{H}^+]$ in X is $1000\\times$ higher and $[\\text{OH}^-]$ in X is $1000\\times$ lower than in Y' },
      { label: 'C', text: 'Acid X must be a strong acid and acid Y must be a weak acid' },
      { label: 'D', text: 'Neutralizing $25\\text{ cm}^3$ of X uses $3\\times$ more $\\text{NaOH}$ than $25\\text{ cm}^3$ of Y' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select B.', marks: 1 }],
      model_answer: '**B.** A $3$-unit pH drop multiplies $[\\text{H}^+]$ by $10^3 = 1000\\times$ while dividing $[\\text{OH}^-] = K_w / [\\text{H}^+]$ by $1000\\times$. (Concentrations or acid strengths cannot be concluded without molarity.)',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R3.1',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Explain',
    difficulty: 'Standard IB',
    maxMarks: 1,
    questionMarkdown:
      'At $323\\text{ K}$ ($50^\\circ\\text{C}$), the ionic product constant of water increases to $K_w = 5.48 \\times 10^{-14}$ giving pure water $\\text{pH} = 6.63$. Which conclusion is correct?',
    mcqOptions: [
      { label: 'A', text: 'Pure water becomes acidic at $50^\\circ\\text{C}$' },
      { label: 'B', text: 'Auto-ionization of water is exothermic' },
      { label: 'C', text: 'Pure water remains **neutral** because $[\\text{H}^+] = [\\text{OH}^-]$' },
      { label: 'D', text: 'Pure water has $[\\text{H}^+] > [\\text{OH}^-]$ at $50^\\circ\\text{C}$' },
    ],
    correctMcqOption: 'C',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select C.', marks: 1 }],
      model_answer: '**C.** Endothermic $\\text{H}_2\\text{O} \\rightleftharpoons \\text{H}^+ + \\text{OH}^-$ shifts right with temperature, raising both $[\\text{H}^+]$ and $[\\text{OH}^-]$ equally ($[\\text{H}^+] = [\\text{OH}^-]$), so water remains strictly neutral despite $\\text{pH} < 7$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R3.1',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Calculate',
    difficulty: 'Standard IB',
    maxMarks: 3,
    questionMarkdown:
      'At $298\\text{ K}$ ($K_w = 1.00 \\times 10^{-14}$), **calculate** the pH of (a) $0.0050\\text{ mol dm}^{-3}$ nitric acid, $\\text{HNO}_3(aq)$ [1], (b) $0.0250\\text{ mol dm}^{-3}$ barium hydroxide, $\\text{Ba(OH)}_2(aq)$ [2].',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '$\\text{HNO}_3$ strong monoprotic: $\\text{pH} = -\\log_{10}(0.0050) = \\mathbf{2.30}$.', marks: 1, keywords: ['2.30'] },
        { code: 'M1', criterion: '$[\\text{OH}^-] = 2 \\times 0.0250 = 0.0500\\text{ mol dm}^{-3} \\implies [\\text{H}^+] = \\frac{1.00\\times 10^{-14}}{0.0500} = 2.00\\times 10^{-13}\\text{ mol dm}^{-3}$.', marks: 1 },
        { code: 'A1', criterion: '$\\text{pH} = -\\log_{10}(2.00\\times 10^{-13}) = \\mathbf{12.70}$.', marks: 1, keywords: ['12.70'] },
      ],
      model_answer:
        '(a) $\\text{pH} = -\\log_{10}(0.0050) = \\mathbf{2.30}$. (b) Dibasic $\\text{Ba(OH)}_2$ yields $[\\text{OH}^-] = 0.0500\\text{ mol dm}^{-3}$, giving $[\\text{H}^+] = 1.00\\times 10^{-14} / 0.0500 = 2.00\\times 10^{-13}\\text{ mol dm}^{-3}$ and $\\text{pH} = \\mathbf{12.70}$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R3.1',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Describe',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      '*(Bylikin R3.1 EOT Q7)* Two unlabelled bottles contain equimolar ($0.10\\text{ mol dm}^{-3}$) **$\\text{HCl}(aq)$** and **$\\text{CH}_3\\text{COOH}(aq)$**. (a) Write equations showing both acting as Brønsted–Lowry acids with water and distinguish strong vs weak ionization [2]. (b) State **two distinct experimental observations** distinguishing them using solid $\\text{CaCO}_3$ and a conductivity meter [2].',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '$\\text{HCl} + \\text{H}_2\\text{O} \\to \\text{H}_3\\text{O}^+ + \\text{Cl}^-$ (complete $\\to$); $\\text{CH}_3\\text{COOH} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_3\\text{O}^+ + \\text{CH}_3\\text{COO}^-$ (partial $\\rightleftharpoons$).', marks: 1 },
        { code: 'A1', criterion: '$\\text{HCl}$ dissociates $100\\%$ leaving much higher $[\\text{H}^+]$ than partially ionized $\\text{CH}_3\\text{COOH}$.', marks: 1 },
        { code: 'A1', criterion: '$\\text{HCl}$ shows **much faster initial $\\text{CO}_2$ effervescence** with $\\text{CaCO}_3$ (same total gas if excess carbonate/equal acid moles!).', marks: 1, keywords: ['faster effervescence'] },
        { code: 'A1', criterion: '$\\text{HCl}$ displays **higher electrical conductivity** (and lower pH: $1.0$ vs $\\sim 2.9$).', marks: 1, keywords: ['higher conductivity'] },
      ],
      model_answer:
        '(a) $\\text{HCl}(aq) + \\text{H}_2\\text{O}(l) \\to \\text{H}_3\\text{O}^+(aq) + \\text{Cl}^-(aq)$ (full dissociation) vs $\\text{CH}_3\\text{COOH} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_3\\text{O}^+ + \\text{CH}_3\\text{COO}^-$ (partial equilibrium). (b) $\\text{HCl}$ bubbles much faster with $\\text{CaCO}_3$ and exhibits much higher electrical conductivity due to greater $[\\text{H}^+]$ and total mobile ion density.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },

  // =========================================================================
  // R3.2 ELECTRON TRANSFER, CELLS & ORGANIC REDOX (6 questions — STRICT SL!)
  // =========================================================================
  {
    topicCode: 'R3.2',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown: '*(Bylikin R3.2 EOT Q4)* Which chemical equation is **NOT** a redox reaction?',
    mcqOptions: [
      { label: 'A', text: '$2\\text{H}_2\\text{O}_2(aq) \\to 2\\text{H}_2\\text{O}(l) + \\text{O}_2(g)$' },
      { label: 'B', text: '$\\text{CH}_3\\text{COOH}(aq) + \\text{LiOH}(aq) \\to \\text{CH}_3\\text{COOLi}(aq) + \\text{H}_2\\text{O}(l)$' },
      { label: 'C', text: '$\\text{C}_3\\text{H}_6(g) + \\text{Br}_2(l) \\to \\text{C}_3\\text{H}_6\\text{Br}_2(l)$' },
      { label: 'D', text: '$2\\text{Na}(s) + \\text{Cl}_2(g) \\to 2\\text{NaCl}(s)$' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select B (acid–base neutralization).', marks: 1 }],
      model_answer: '**B.** Proton transfer neutralization keeps every atom’s oxidation state completely unchanged ($\\text{H}=+1,\\ \\text{O}=-2,\\ \\text{Li}=+1$).',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R3.2',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Deduce',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown: '*(Bylikin R3.2 EOT Q6)* What are the products at the electrodes during the electrolysis of **molten lead(II) bromide, $\\text{PbBr}_2(l)$**, using inert graphite electrodes?',
    mcqOptions: [
      { label: 'A', text: 'Cathode ($-$): lead metal ($\\text{Pb}$) | Anode ($+$): bromine ($\\text{Br}_2$)' },
      { label: 'B', text: 'Cathode ($+$): bromine ($\\text{Br}_2$) | Anode ($-$): lead metal ($\\text{Pb}$)' },
      { label: 'C', text: 'Cathode ($-$): hydrogen ($\\text{H}_2$) | Anode ($+$): oxygen ($\\text{O}_2$)' },
      { label: 'D', text: 'Cathode ($-$): bromide ions | Anode ($+$): lead(II) ions' },
    ],
    correctMcqOption: 'A',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select A.', marks: 1 }],
      model_answer: '**A.** In electrolytic cells, the negative cathode reduces $\\text{Pb}^{2+} + 2e^- \\to \\text{Pb}(l)$ while the positive anode oxidizes $2\\text{Br}^- \\to \\text{Br}_2(g) + 2e^-$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R3.2',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Predict',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin R3.2 EOT Q9)* Which organic product forms when **butan-2-ol** is heated under reflux with acidified potassium dichromate(VI), $\\text{K}_2\\text{Cr}_2\\text{O}_7(aq)/\\text{H}_2\\text{SO}_4(aq)$, and what colour change occurs?',
    mcqOptions: [
      { label: 'A', text: 'Butanal; green to orange' },
      { label: 'B', text: 'Butanoic acid; orange to colourless' },
      { label: 'C', text: 'Butanone; orange to green' },
      { label: 'D', text: 'No reaction; stays orange' },
    ],
    correctMcqOption: 'C',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select C (butanone; orange to green).', marks: 1 }],
      model_answer: '**C.** Secondary alcohol butan-2-ol oxidizes cleanly to a ketone (**butanone**) while $\\text{Cr}_2\\text{O}_7^{2-}$ (orange, $+6$) reduces to $\\text{Cr}^{3+}$ (green, $+3$).',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R3.2',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Formulate',
    difficulty: 'Standard IB',
    maxMarks: 3,
    questionMarkdown:
      '*(Bylikin R3.2 Worked Ex. 4, Book p. 588)* Balance the ionic redox equation between aqueous iron(II) ions and dichromate(VI) ions in **acidic solution**: $\\text{Cr}_2\\text{O}_7^{2-}(aq) + \\text{Fe}^{2+}(aq) \\to \\text{Cr}^{3+}(aq) + \\text{Fe}^{3+}(aq)$, and identify the **oxidizing agent**.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Reduction half-equation: $\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6e^- \\to 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$.', marks: 1 },
        { code: 'A1', criterion: 'Oxidation $\\times 6$ and sum: $\\text{Cr}_2\\text{O}_7^{2-}(aq) + 14\\text{H}^+(aq) + 6\\text{Fe}^{2+}(aq) \\to 2\\text{Cr}^{3+}(aq) + 7\\text{H}_2\\text{O}(l) + 6\\text{Fe}^{3+}(aq)$.', marks: 1 },
        { code: 'A1', criterion: 'Oxidizing agent is **$\\text{Cr}_2\\text{O}_7^{2-}$** (causes oxidation of $\\text{Fe}^{2+}$ and is itself reduced $+6 \\to +3$).', marks: 1, keywords: ['Cr2O7^2-'] },
      ],
      model_answer:
        'Reduction: $\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6e^- \\to 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$; Oxidation: $6\\text{Fe}^{2+} \\to 6\\text{Fe}^{3+} + 6e^-$. Overall: $\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6\\text{Fe}^{2+} \\to 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O} + 6\\text{Fe}^{3+}$. **$\\text{Cr}_2\\text{O}_7^{2-}$** is the oxidizing agent.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R3.2',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Describe',
    difficulty: 'Standard IB',
    maxMarks: 3,
    questionMarkdown:
      '*(Bylikin R3.2 Worked Ex. 8, Book p. 606)* Contrast the experimental setups and conditions needed to convert **ethanol ($1^\\circ$ alcohol)** selectively into (a) **ethanal** versus (b) **ethanoic acid** using acidified potassium dichromate(VI), and state why ethanal boils lower than ethanol.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'To isolate **ethanal**: heat gently with **excess ethanol** and **distill** ethanal off immediately as it forms.', marks: 1, keywords: ['excess ethanol', 'distillation'] },
        { code: 'A1', criterion: 'To obtain **ethanoic acid**: heat under **reflux** with **excess oxidizing agent** ($\\text{K}_2\\text{Cr}_2\\text{O}_7/\\text{H}^+$).', marks: 1, keywords: ['excess oxidant', 'reflux'] },
        { code: 'A1', criterion: 'Ethanal lacks $-\\text{OH}$ so cannot form intermolecular **hydrogen bonds** (dipole–dipole only), giving a much lower boiling point ($20^\\circ\\text{C}$) than H-bonded ethanol ($78^\\circ\\text{C}$).', marks: 1, keywords: ['no hydrogen bonding', 'lower boiling point'] },
      ],
      model_answer:
        '(a) Use **excess ethanol** and **distill off** ethanal immediately (preventing further oxidation). (b) Heat under **reflux** with **excess acidified $\\text{K}_2\\text{Cr}_2\\text{O}_7$**. Distillation works because ethanal lacks hydrogen bonding ($\\text{b.p. } 20^\\circ\\text{C}$ vs ethanol $78^\\circ\\text{C}$).',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R3.2',
    paperType: 'Paper 1B (Data-Based)',
    commandTerm: 'Deduce',
    difficulty: 'Standard IB',
    maxMarks: 3,
    stimulusMarkdown:
      'Unknown metals **X**, **Y**, **Z** react in metal nitrate solutions:\n- $\\text{Y} + \\text{Z}^{2+} \\to$ blue $\\text{Z}^{2+}$ fades; $\\text{Z}(s)$ deposits.\n- $\\text{X} + \\text{Y}^{2+} \\to$ no visible change.\n- $\\text{Z} + \\text{HCl}(aq) \\to$ no reaction.',
    questionMarkdown:
      '*(Bylikin R3.2 EOT Q17 adapted)* **Rank** $\\text{X},\\ \\text{Y},\\ \\text{Z}$ from strongest to weakest reducing agent [1], and write half-equations for a **voltaic cell** constructed from **Y** and **Z**, stating electron flow direction and **anode polarity** [2].',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '$\\text{Y}$ reduces $\\text{Z}^{2+}$ (so $\\text{Y} > \\text{Z}$), while $\\text{X}$ cannot reduce $\\text{Y}^{2+}$ ($\\text{Y} > \\text{X}$); strongest reducing agent is **$\\text{Y}$** ($\\text{Y} > \\text{Z},\\ \\text{Y} > \\text{X}$).', marks: 1, keywords: ['Y strongest'] },
        { code: 'A1', criterion: 'Voltaic anode ($-$): $\\text{Y} \\to \\text{Y}^{2+} + 2e^-$; cathode ($+$): $\\text{Z}^{2+} + 2e^- \\to \\text{Z}$.', marks: 1, keywords: ['anode Y', 'cathode Z'] },
        { code: 'A1', criterion: 'Electrons travel through the external wire from the **negative $\\text{Y}$ anode to positive $\\text{Z}$ cathode**.', marks: 1, keywords: ['Y to Z', 'anode negative'] },
      ],
      model_answer:
        '$\\text{Y}$ reduces $\\text{Z}^{2+}$ and $\\text{X}$ cannot displace $\\text{Y}$, making **$\\text{Y}$ the strongest reducing agent** ($\\text{Z}$ is also below H in activity series). In a Y–Z voltaic cell: **negative anode** oxidizes $\\text{Y} \\to \\text{Y}^{2+} + 2e^-$, **positive cathode** reduces $\\text{Z}^{2+} + 2e^- \\to \\text{Z}$, and electrons flow externally from **$\\text{Y}$ to $\\text{Z}$**.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },

  // =========================================================================
  // R3.3 ELECTRON SHARING / FREE RADICAL SUBSTITUTION (3 questions)
  // =========================================================================
  {
    topicCode: 'R3.3',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown: '*(Bylikin R3.3 EOT Q2)* Which step is a valid **propagation** step in the free-radical substitution of ethane with chlorine under UV light?',
    mcqOptions: [
      { label: 'A', text: '$\\text{Cl}_2 \\to 2\\text{Cl}\\bullet$' },
      { label: 'B', text: '$\\bullet\\text{C}_2\\text{H}_5 + \\text{Cl}_2 \\to \\text{C}_2\\text{H}_5\\text{Cl} + \\text{Cl}\\bullet$' },
      { label: 'C', text: '$\\bullet\\text{C}_2\\text{H}_5 + \\text{Cl}\\bullet \\to \\text{C}_2\\text{H}_5\\text{Cl}$' },
      { label: 'D', text: '$\\text{C}_2\\text{H}_6 + \\text{Cl}\\bullet \\to \\text{C}_2\\text{H}_5\\text{Cl} + \\text{H}\\bullet$' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select B.', marks: 1 }],
      model_answer: '**B.** Propagation steps have **one radical reactant and one radical product** (A is initiation, C is termination, D erroneously forms an unstable $\\text{H}\\bullet$ radical instead of $\\text{HCl} + \\bullet\\text{C}_2\\text{H}_5$).',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R3.3',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Explain',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      '*(Bylikin R3.3 EOT Q5–Q6)* Write equations for the **initiation**, **two propagation**, and **trace butane termination** steps in the UV-initiated chlorination of ethane ($\\text{C}_2\\text{H}_6$) to form chloroethane.',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: 'Initiation (homolytic fission under UV light): $\\text{Cl}_2 \\xrightarrow{\\text{UV}} 2\\text{Cl}\\bullet$.', marks: 1, keywords: ['UV', '2Cl•'] },
        { code: 'A1', criterion: 'Propagation 1: $\\text{C}_2\\text{H}_6 + \\text{Cl}\\bullet \\to \\bullet\\text{C}_2\\text{H}_5 + \\text{HCl}$.', marks: 1 },
        { code: 'A1', criterion: 'Propagation 2: $\\bullet\\text{C}_2\\text{H}_5 + \\text{Cl}_2 \\to \\text{C}_2\\text{H}_5\\text{Cl} + \\text{Cl}\\bullet$.', marks: 1 },
        { code: 'A1', criterion: 'Butane termination: $\\bullet\\text{C}_2\\text{H}_5 + \\bullet\\text{C}_2\\text{H}_5 \\to \\text{C}_4\\text{H}_{10}$.', marks: 1, keywords: ['C4H10'] },
      ],
      model_answer:
        '1. **Initiation:** $\\text{Cl}_2 \\xrightarrow{\\text{UV}} 2\\text{Cl}\\bullet$ (homolytic cleavage).\n2. **Propagation:** $\\text{C}_2\\text{H}_6 + \\text{Cl}\\bullet \\to \\bullet\\text{C}_2\\text{H}_5 + \\text{HCl}$; then $\\bullet\\text{C}_2\\text{H}_5 + \\text{Cl}_2 \\to \\text{C}_2\\text{H}_5\\text{Cl} + \\text{Cl}\\bullet$.\n3. **Termination (producing trace butane):** $\\bullet\\text{C}_2\\text{H}_5 + \\bullet\\text{C}_2\\text{H}_5 \\to \\text{C}_4\\text{H}_{10}$.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R3.3',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown: '*(Bylikin R3.3 EOT Q3)* Methane reacts with chlorine in sunlight: $\\text{CH}_4(g) + \\text{Cl}_2(g) \\to \\text{CH}_3\\text{Cl}(g) + \\text{HCl}(g)$. How is this reaction classified?',
    mcqOptions: [
      { label: 'A', text: 'Radical substitution' },
      { label: 'B', text: 'Electrophilic substitution' },
      { label: 'C', text: 'Nucleophilic substitution' },
      { label: 'D', text: 'Electrophilic addition' },
    ],
    correctMcqOption: 'A',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select A (Radical substitution).', marks: 1 }],
      model_answer: '**A.** Photochemical UV/sunlight cleaves $\\text{Cl}_2$ homolytically into $\\text{Cl}\\bullet$ radicals that substitute H atoms on saturated alkanes.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },

  // =========================================================================
  // R3.4 ELECTRON-PAIR SHARING / NUCLEOPHILES & ELECTROPHILES (3 questions — SL ONLY!)
  // =========================================================================
  {
    topicCode: 'R3.4',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown: '*(Bylikin R3.4 Practice Q2, Book p. 629)* Which species **CANNOT** act as a **nucleophile**?',
    mcqOptions: [
      { label: 'A', text: '$\\text{CH}_3\\text{NH}_2$' },
      { label: 'B', text: '$(\\text{CH}_3)_2\\text{NH}$' },
      { label: 'C', text: '$(\\text{CH}_3)_3\\text{N}$' },
      { label: 'D', text: '$(\\text{CH}_3)_4\\text{N}^+$' },
    ],
    correctMcqOption: 'D',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select D ($(\\text{CH}_3)_4\\text{N}^+$).', marks: 1 }],
      model_answer: '**D.** A nucleophile requires an available **lone pair of electrons** to donate; quaternary ammonium $(\\text{CH}_3)_4\\text{N}^+$ uses all four nitrogen bonding pairs and carries zero lone pairs.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R3.4',
    paperType: 'Paper 1A (MCQ)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 1,
    questionMarkdown:
      '*(Bylikin R3.4 EOT Q3)* Ethene reacts with steam: $\\text{C}_2\\text{H}_4(g) + \\text{H}_2\\text{O}(g) \\to \\text{C}_2\\text{H}_5\\text{OH}(g)$. What type of reaction occurs?',
    mcqOptions: [
      { label: 'A', text: 'Nucleophilic substitution' },
      { label: 'B', text: 'Radical substitution' },
      { label: 'C', text: 'Neutralization' },
      { label: 'D', text: 'Electrophilic addition' },
    ],
    correctMcqOption: 'D',
    markscheme: {
      marking_points: [{ code: 'A1', criterion: 'Select D (Electrophilic addition).', marks: 1 }],
      model_answer: '**D.** Alkenes possess an electron-rich $\\text{C=C}$ double bond susceptible to attack by electron-pair-accepting electrophiles across the double bond.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
  {
    topicCode: 'R3.4',
    paperType: 'Paper 2 (Structured & Extended)',
    commandTerm: 'Deduce',
    difficulty: 'Standard IB',
    maxMarks: 4,
    questionMarkdown:
      '*(Bylikin R3.4 Practice Q3–Q4)* (a) Write the equation for the reaction between **bromopentane ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{Br}$)** and **cyanide ion ($\\text{CN}^-$)**, identifying the **nucleophile** and **leaving group** [2]. (b) State the reagent and visible observation used to distinguish **propene** from **propane** in the dark [2].',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '$\\text{CH}_3(\\text{CH}_2)_3\\text{CH}_2\\text{Br} + \\text{CN}^- \\to \\text{CH}_3(\\text{CH}_2)_3\\text{CH}_2\\text{CN} + \\text{Br}^-$ (hexanenitrile).', marks: 1 },
        { code: 'A1', criterion: 'Nucleophile = **$\\text{CN}^-$** (cyanide ion); leaving group = **$\\text{Br}^-$** (bromide ion via heterolytic fission).', marks: 1, keywords: ['CN-', 'Br-'] },
        { code: 'A1', criterion: 'Shake each with **bromine water ($\\text{Br}_2(aq)$)** in the absence of UV light.', marks: 1, keywords: ['bromine water'] },
        { code: 'A1', criterion: 'Unsaturated **propene decolourizes orange-brown $\\text{Br}_2(aq)$ rapidly** via electrophilic addition; propane stays orange.', marks: 1, keywords: ['decolourizes', 'orange to colourless'] },
      ],
      model_answer:
        '(a) $\\text{C}_5\\text{H}_{11}\\text{Br} + \\text{CN}^- \\to \\text{C}_5\\text{H}_{11}\\text{CN} + \\text{Br}^-$ (nucleophilic substitution; **nucleophile = $\\text{CN}^-$**, **leaving group = $\\text{Br}^-$**). (b) Add **bromine water ($\\text{Br}_2(aq)$)** in the dark: propene rapidly **decolourizes** the orange-brown solution via electrophilic addition ($\\text{C}_3\\text{H}_6 + \\text{Br}_2 \\to \\text{CH}_2\\text{BrCHBrCH}_3$), whereas propane shows no reaction.',
    },
    sourceFileNames: ['Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf'],
  },
];


