import type { ClassroomSeedQuestion } from '../types';
import type { MarkingPoint, McqOption, QuestionDifficulty } from '@/types/database';

function mp(code: string, criterion: string, marks = 1, keywords?: string[]): MarkingPoint {
  return { code, criterion, marks, ...(keywords ? { keywords } : {}) };
}

function opts(a: string, b: string, c: string, d: string): McqOption[] {
  return [
    { label: 'A', text: a },
    { label: 'B', text: b },
    { label: 'C', text: c },
    { label: 'D', text: d },
  ];
}

function mcq(
  topicCode: string,
  difficulty: QuestionDifficulty,
  questionMarkdown: string,
  mcqOptions: McqOption[],
  correctMcqOption: 'A' | 'B' | 'C' | 'D',
  criterion: string,
  modelAnswer: string,
  examinerNotes: string,
  sourceFileNames: string[],
  commandTerm = 'Identify',
  stimulusMarkdown?: string
): ClassroomSeedQuestion {
  return {
    topicCode,
    paperType: 'Paper 1A (MCQ)',
    commandTerm,
    difficulty,
    maxMarks: 1,
    ...(stimulusMarkdown ? { stimulusMarkdown } : {}),
    questionMarkdown,
    mcqOptions,
    correctMcqOption,
    markscheme: {
      marking_points: [mp('A1', criterion, 1)],
      model_answer: modelAnswer,
      examiner_notes: examinerNotes,
    },
    sourceFileNames,
  };
}

function structured(
  paperType: 'Paper 1B (Data-Based)' | 'Paper 2 (Structured & Extended)',
  topicCode: string,
  commandTerm: string,
  difficulty: QuestionDifficulty,
  questionMarkdown: string,
  markingPoints: MarkingPoint[],
  modelAnswer: string,
  sourceFileNames: string[],
  examinerNotes?: string,
  stimulusMarkdown?: string
): ClassroomSeedQuestion {
  const maxMarks = markingPoints.reduce((acc, p) => acc + p.marks, 0);
  return {
    topicCode,
    paperType,
    commandTerm,
    difficulty,
    maxMarks,
    ...(stimulusMarkdown ? { stimulusMarkdown } : {}),
    questionMarkdown,
    markscheme: {
      marking_points: markingPoints,
      model_answer: modelAnswer,
      ...(examinerNotes ? { examiner_notes: examinerNotes } : {}),
    },
    sourceFileNames,
  };
}

export const BIOLOGY_HL_QUESTIONS: ClassroomSeedQuestion[] = [
  // ==========================================================================
  // PART A — PAPER 1A (MCQ) · Q1 MUST REMAIN MCQ FOR E2E SMOKE TEST
  // ==========================================================================
  // Q1 (BioK 2.6 Q1 + A1.1)
  mcq(
    'A1.1',
    'Foundation',
    'Which interaction accounts for the cohesion, high specific heat capacity, and surface tension of liquid water?',
    opts(
      'Polar covalent bonds between two hydrogen atoms inside the same molecule',
      'Non-polar dispersion attractions between neighboring oxygen lone pairs',
      'Ionic attraction between dissolved Na+ ions and oxygen atoms',
      'Intermolecular hydrogen bonds between partial-positive H and partial-negative O of neighboring water molecules'
    ),
    'D',
    'Hydrogen bond between δ+ H on one water molecule and δ− O on a neighboring water molecule.',
    'Correct answer: D. Cohesive and thermal properties arise from intermolecular hydrogen bonds bridging δ+ H to δ− O of adjacent water molecules.',
    'BioK 2.6 Quiz Q1: Distinguish intramolecular O–H polar covalent bonds (option A trap) from intermolecular hydrogen bonds (D).',
    ['BioK 2.6 Quiz Answers.docx', 'A 1.1 Water Notes.pdf']
  ),
  // Q2 (BioK 2.6 Q2)
  mcq(
    'A1.2',
    'Foundation',
    'In a double-stranded DNA molecule extracted from calf thymus, `30%` of nitrogenous bases are Thymine. What percentage of the bases in this DNA sample are Guanine?',
    opts('30%', '60%', '40%', '20%'),
    'D',
    'A = T = 30%, leaving 40% for G + C, so G = 20%.',
    'Correct answer: D (20%). Because %T = %A = 30%, A + T = 60%, leaving 40% shared equally between Guanine (20%) and Cytosine (20%).',
    'BioK 2.6 Quiz Q2 & Chargaff rule.',
    ['BioK 2.6 Quiz Answers.docx', '2024 A1 1.2 Nucleic Acids Notes.pdf'],
    'Calculate'
  ),
  // Q3 (BioK 2.6 Q3)
  mcq(
    'A1.2',
    'Foundation',
    'Which chemical subunit is present identically in both DNA and RNA nucleotides?',
    opts('Deoxyribose pentose', 'Thymine', 'Phosphate group', 'Uracil'),
    'C',
    'Phosphate group bonded at C5\' is identical in DNA and RNA.',
    'Correct answer: C (Phosphate group). DNA contains deoxyribose + Thymine whereas RNA contains ribose + Uracil.',
    'BioK 2.6 Quiz Q3.',
    ['BioK 2.6 Quiz Answers.docx']
  ),
  // Q4 (BioK 2.6 Q4)
  mcq(
    'A1.2',
    'Foundation',
    'Which class of nitrogenous bases consists strictly of single-ring pyrimidines?',
    opts('Adenine and Guanine', 'Guanine and Cytosine', 'Adenine and Thymine', 'Cytosine, Thymine, and Uracil'),
    'D',
    'Pyrimidines (C, T, U) are single-ring bases; purines (A, G) are double-ring bases.',
    'Correct answer: D. Cytosine, Thymine, and Uracil are single-ring pyrimidines ("CUT the Py").',
    'BioK 2.6 Quiz Q4 & Allott A1.2.',
    ['BioK 2.6 Quiz Answers.docx', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q5 (A Command Terms & IA)
  mcq(
    'A',
    'Standard IB',
    'Under the IB Biology Class of 2028 May 2028 HL curriculum, how is the Internal Assessment (Scientific Investigation) weighted and graded?',
    opts(
      '4 criteria x 6 marks each (24 marks total), strict 3,000-word limit, 20% of final grade',
      '5 criteria totaling 24 marks, 6–12 page cap, supplemented by Paper 3 Option essays',
      'Purely pass/fail practical logbook worth 0% alongside 50% Paper 1 and 50% Paper 2',
      '4 criteria x 10 marks each (40 marks total), no word limit'
    ),
    'A',
    'Reformed 2025+ IA has 4 x 6 = 24 marks (Research Design, Data Analysis, Conclusion, Evaluation), 3,000 words max, 20%.',
    'Correct answer: A. May 2028 IB Biology eliminates Paper 3 and legacy Personal Engagement/Communication scores in favor of 4 x 6 criteria (3,000 words max).',
    '2026 Bio 5HL Course Outline.',
    ['2026 Bio 5HL Course Outline.docx', 'Command Terms IB BIO.pdf']
  ),
  // Q6 (A Command Terms)
  mcq(
    'A',
    'Foundation',
    'A Paper 1B question asks students solely to `Describe` the trend shown in an oxygen-uptake graph between 10 °C and 40 °C. Which response element earns ZERO credit under this command term?',
    opts(
      'Quoting initial uptake at 10 °C and peak uptake at 35 °C with correct units',
      'Identifying the plateau slope reversal above 35 °C',
      'Explaining that hydrogen bonds inside active sites break above 35 °C causing denaturation',
      'Reporting the numerical difference between 10 °C and 35 °C'
    ),
    'C',
    'Describe requests only observed quantitative/qualitative features, NOT mechanistic explanations (reserved for Explain).',
    'Correct answer: C. Including causal denaturation mechanism does not answer a pure Describe prompt and risks leaving data values unstated.',
    'Command Terms IB BIO.',
    ['Command Terms IB BIO.pdf', 'CommandTermsVisualized.pdf']
  ),
  // Q7 (A1.1)
  mcq(
    'A1.1',
    'Standard IB',
    'Why do hydrophobic triglycerides and cholesterol travel through human blood plasma packaged inside apolipoprotein–phospholipid complexes (`chylomicrons`, `LDL`, `HDL`) rather than dissolving directly like glucose?',
    opts(
      'Glucose requires ATP active transport to remain dissolved in blood plasma',
      'Triglycerides contain long non-polar C–H chains unable to form hydration H-bonds with polar water',
      'Cholesterol forms covalent ester crosslinks with fibrinogen unless coated',
      'Blood plasma contains high ethanol concentrations that precipitate glucose otherwise'
    ),
    'B',
    'Non-polar hydrocarbon chains cannot form favorable H-bonds with water, requiring amphipathic lipoprotein shells.',
    'Correct answer: B. Amphipathic apolipoprotein/phospholipid exteriors stabilize hydrophobic lipid cores inside aqueous plasma.',
    'Allott A1.1 p. 10.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf', 'A 1.1 Water Notes.pdf'],
    'Explain'
  ),
  // Q8 (A1.1 HL)
  mcq(
    'A1.1',
    'HL Extension',
    'Which isotopic measurement best supports carbonaceous chondrite asteroids as a primary source of Earth\'s surface oceans (`A1.1.7 HL`)?',
    opts(
      'Matching ¹⁴C:¹²C half-lives inside deep oceanic limestone',
      'Matching deuterium-to-hydrogen (²H/¹H) ratios between Earth seawater and chondrite meteorites',
      'Equal ³⁵S:³²P ratios in hydrothermal vents and lunar basalt',
      'Identical atmospheric oxygen percentages inside asteroid ice pockets'
    ),
    'B',
    'Ocean D/H (²H/¹H) matches carbonaceous chondrite asteroids cleanly.',
    'Correct answer: B. Carbonaceous chondrite D/H isotopic signatures match terrestrial seawater closely (~1.56 × 10⁻⁴).',
    'Allott A1.1.7 HL pp. 13–15.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q9 (A1.2 HL)
  mcq(
    'A1.2',
    'HL Extension',
    'In Hershey and Chase\'s (1952) bacteriophage T2 experiment, why did radioactivity appear in the centrifuged bacterial pellet exclusively in the `³²P`-labelled culture?',
    opts(
      '³⁵S denatured inside the Waring blender and evaporated before centrifugation',
      '³²P tagged phage capsid proteins that dissolved into bacterial phospholipids',
      '³²P labelled DNA sugar–phosphate backbones injected into E. coli, whereas ³⁵S capsid shells were sheared into supernatant',
      'Bacteria synthesized new radioactive phosphorus spontaneously from glucose'
    ),
    'C',
    '³²P labels DNA phosphates injected into host cells; ³⁵S labels Cys/Met protein coats left in supernatant.',
    'Correct answer: C.',
    'Allott A1.2.11 HL p. 27.',
    ['2024 A1 1.2 Nucleic Acids Notes.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q10 (A1.2 HL)
  mcq(
    'A1.2',
    'HL Extension',
    'Which description accurately summarizes eukaryotic nucleosome architecture (`A1.2.13 HL`)?',
    opts(
      'Positively charged DNA coiled ~1.65 turns around an octamer of negatively charged acidic histones',
      '~146–147 bp of negatively charged DNA wrapped ~1.65 turns around an 8-histone positive core octamer, secured externally by H1',
      'Circular bacterial plasmids wrapped around peptidoglycan rings',
      'A single H1 histone surrounded by eight linear DNA strands'
    ),
    'B',
    'Negatively charged DNA phosphate backbone wraps electrostatically around positive basic histone octamer + external H1 linker.',
    'Correct answer: B.',
    'Common sign reversal trap: DNA is NEGATIVE (phosphates), histones are POSITIVE (Lys/Arg).',
    ['2024 A1 1.2 Nucleic Acids Notes.pdf']
  ),
  // Q11 (A2.1 HL)
  mcq(
    'A2.1',
    'HL Extension',
    'Which living intracellular observation provides the strongest biochemical evidence supporting the **RNA World hypothesis** (`A2.1.6`)?',
    opts(
      'DNA polymerases can initiate synthesis cleanly without RNA primers',
      'All free-living prokaryotes replicate RNA viruses inside nucleoids',
      'Ribosomal RNA (rRNA)—not protein—catalyzes peptide bond formation as a ribozyme inside all ribosomes',
      'Triglycerides spontaneously convert into ribose sugars inside acidic black smokers'
    ),
    'C',
    'rRNA peptidyl transferase ribozyme activity proves catalytic + informational dual capacity.',
    'Correct answer: C. Both rRNA ribozyme activity and universal ribonucleotide cofactors (ATP, NADH) support RNA-first origins.',
    'Allott A2.1 p. 47.',
    ['A 2.1 Origin of Cells Notes.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q12 (A2.1 HL)
  mcq(
    'A2.1',
    'HL Extension',
    'Why do modern phylogeneticists emphasize that **LUCA (`Last Universal Common Ancestor`)** was almost certainly NOT the very first cell to arise on Earth?',
    opts(
      'LUCA lacked ribosomes and used silicon backbones instead of carbon',
      'LUCA already possessed complex ~355 shared core genes, DNA/RNA genetic code, and ATP synthase—indicating prior extinct lineages came earlier',
      'Miller–Urey proved LUCA evolved inside oxygen-rich 21% O₂ oceans',
      'LUCA arose less than 500 million years ago during the Cambrian explosion'
    ),
    'B',
    'LUCA already carried universal transcription/translation and chemiosmotic machinery evolved over earlier extinct protocells.',
    'Correct answer: B.',
    'A 2.1 Origin of Cells Notes.',
    ['A 2.1 Origin of Cells Notes.pdf']
  ),
  // Q13 (A2.2 Slide 25 Erratum)
  mcq(
    'A2.2',
    'Standard IB',
    'A student sees a classroom handout misprint stating *"80S ribosomes measure 20 µm"*. What is the true physical diameter of a eukaryotic 80S ribosome and which instrument resolves it?',
    opts(
      '20 µm; resolved clearly under a 400x compound light microscope',
      '25 nm (0.025 µm); requires transmission electron microscopy (TEM) or Cryo-EM',
      '250 nm (0.25 µm); resolved cleanly under standard light optics',
      '2.5 µm; identical size to a whole mitochondrion'
    ),
    'B',
    '80S ribosomes are ~20–30 nm (0.025 µm), far below the 200 nm light diffraction limit.',
    'Correct answer: B. Correcting the Slide 25 1,000x unit typo confirms TEM (~0.5 nm) or Cryo-EM is required.',
    'A2.2 Slide 25 Erratum.',
    ['A2.2 Cell Structure Notes.pdf', 'A 2.2 Microscope Notes.pdf']
  ),
  // Q14 (A2.2 Microscopy)
  mcq(
    'A2.2',
    'Standard IB',
    'Why does flash-freezing proteins in liquid ethane (`Cryo-EM`) overcome a major limitation of conventional TEM (`A2.2.3`)?',
    opts(
      'Cryo-EM keeps multi-cellular tissues alive and metabolizing at 37 °C',
      'Cryo-EM embeds proteins in vitreous glass-like ice without heavy-metal stains or chemical fixatives that distort native conformations',
      'Cryo-EM uses visible blue photons to avoid vacuum conditions entirely',
      'Cryo-EM eliminates diffraction limits by coating samples in thick gold sputter'
    ),
    'B',
    'Vitreous freezing captures hydrated proteins in native states free of fixative/stain artefacts.',
    'Correct answer: B.',
    'Allott A2.2.3 pp. 60–62.',
    ['A 2.2 Microscope Notes.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q15 (A2.2 Endosymbiosis HL)
  mcq(
    'A2.2',
    'HL Extension',
    'Which observation strongly indicates that **mitochondria evolved via primary endosymbiosis BEFORE chloroplasts** (`A2.2.10 HL`)?',
    opts(
      'Chloroplasts possess triple outer envelopes whereas mitochondria possess single membranes',
      'Virtually all eukaryotes carry mitochondria (or mitosome remnants), whereas chloroplasts occur solely in plants and photosynthetic algae',
      'Chloroplasts divide by mitosis while mitochondria divide by binary fission',
      'Mitochondria lack 70S ribosomes and circular DNA'
    ),
    'B',
    'Universal distribution of mitochondria across Animalia, Fungi, Plantae, and Protista confirms earlier acquisition.',
    'Correct answer: B.',
    'A2.2 Cell Structure Notes & Allott p. 79.',
    ['A2.2 Cell Structure Notes.pdf']
  ),
  // Q16 (A2.3 HL)
  mcq(
    'A2.3',
    'HL Extension',
    'Why do ordinary hand soap and `70%` ethanol rapidly destroy infectious **SARS-CoV-2** and **HIV-1** virions, whereas non-enveloped **Bacteriophage λ** survives far better?',
    opts(
      'SARS-CoV-2 and HIV-1 rely on peptidoglycan walls dissolved by ethanol',
      'Soap amphiphiles and alcohol disrupt the host-derived phospholipid envelope carrying Spike / gp120 glycoproteins',
      'Phage λ lacks nucleic acids and uses only resistant collagen capsids',
      'Soap directly denatures linear dsDNA faster than single-stranded RNA'
    ),
    'B',
    'SARS-CoV-2 and HIV-1 are enveloped viruses dependent on intact lipid bilayers for receptor attachment/fusion.',
    'Correct answer: B.',
    'Allott A2.3 Table 1 p. 85.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q17 (A2.3 HL)
  mcq(
    'A2.3',
    'HL Extension',
    'How does **SARS-CoV-2 (`+ssRNA`)** differ fundamentally from **HIV-1 (`retrovirus`)** immediately after entering a host human cell (`A2.3.5 HL`)?',
    opts(
      'SARS-CoV-2 enters as dsDNA and splices into host chromosomes as a prophage',
      'SARS-CoV-2 +ssRNA serves directly as mRNA on host 80S ribosomes to translate RdRp, whereas HIV-1 uses packaged reverse transcriptase to copy RNA into DNA',
      'HIV-1 translates directly on bacterial 70S ribosomes without DNA intermediates',
      'SARS-CoV-2 carries its own reverse transcriptase inside a conical capsid'
    ),
    'B',
    '+ssRNA acts immediately as readable mRNA for viral RdRp; retroviral HIV converts RNA -> cDNA via packaged RT + integrates.',
    'Correct answer: B.',
    'Allott A2.3 pp. 85–91.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q18 (B1.1 Slide 16 Erratum)
  mcq(
    'B1.1',
    'Standard IB',
    'Inspecting cyclic fructose (`C₆H₁₂O₆`), a student observes a five-membered furanose ring and classifies fructose as a pentose sugar. Why is that classification incorrect (`Slide 16 Erratum`)?',
    opts(
      'Fructose is a pentose structurally because five atoms close the ring',
      'Fructose contains 6 carbon atoms (`two external -CH₂OH side groups` on the furanose ring), making it a hexose isomer of glucose',
      'Fructose is actually a fatty acid containing one ester bond',
      'Pentoses such as ribose contain six carbons plus a phosphate'
    ),
    'B',
    'Fructose formula C₆H₁₂O₆ has 6 carbons -> hexose (ribose C₅H₁₀O₅ is a true pentose).',
    'Correct answer: B. Fructose has 6 carbons despite closing into a five-membered furanose ring.',
    'B1 1.1 Slide 16 Erratum.',
    ['B1 1.1 Carbs and Lipids.pdf']
  ),
  // Q19 (B1.1 Slide 36 Erratum + Cis/Trans)
  mcq(
    'B1.1',
    'Standard IB',
    'Adding one `cis C=C` double bond to a saturated fatty acid (`Slide 36 Erratum`) changes its molecular composition and melting point by:',
    opts(
      'Removing 1 H atom and locking straight chains tighter to raise melting point',
      'Removing 2 H atoms and creating a ~30° kink that disrupts London packing and lowers melting point',
      'Adding 2 H atoms and converting triglycerides into amphipathic steroids',
      'Forming a trans rod that keeps plant olive oils frozen solid at 25 °C'
    ),
    'B',
    'Each C=C removes 2 H atoms; cis puts both H on same side, creating a bend that lowers packing & melting point.',
    'Correct answer: B.',
    'B1 1.1 Carbs and Lipids Slide 36 fix.',
    ['B1 1.1 Carbs and Lipids.pdf']
  ),
  // Q20 (B1.1 Cellulose vs Glycogen)
  mcq(
    'B1.1',
    'Foundation',
    'Why do plant **cellulose** chains build tough structural microfibrils rather than coiled energy granules like **glycogen**?',
    opts(
      'Cellulose polymerizes β-D-glucose with alternating 180° flips, forming straight unbranched H-bonded chains',
      'Cellulose consists of α-D-glucose with frequent α(1->6) branching every 8 residues',
      'Cellulose uses hydrophobic ester bonds linking glycerol and glucose',
      'Cellulose forms disulfide bridges between adjacent ring oxygens'
    ),
    'A',
    'β(1->4) alternating 180° flipped glucose monomers remain straight and form cross-chain H-bonds into microfibrils.',
    'Correct answer: A.',
    'Allott B1.1 pp. 185–187.',
    ['B1 1.1 Carbs and Lipids.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q21 (B1.2 HL)
  mcq(
    'B1.2',
    'HL Extension',
    'Which interaction stabilizes the **secondary (`2°`) α-helices and β-pleated sheets** of a globular enzyme without involving amino-acid R-groups (`B1.2.7 HL`)?',
    opts(
      'Covalent disulfide bridges between cysteine side chains',
      'Hydrophobic R-group clustering away from cytoplasm',
      'Hydrogen bonds exclusively between repeating polypeptide backbone `C=O` and `N–H` groups',
      'Ionic salt bridges between lysine and glutamate side chains'
    ),
    'C',
    'Secondary structure relies solely on backbone C=O ··· H-N hydrogen bonds; A, B, D stabilize tertiary structure.',
    'Correct answer: C.',
    'Classic Paper 1A HL trap: 2° = backbone only; 3° = R-groups.',
    ['B1.2 Protein Notes.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q22 (B1.2 HL)
  mcq(
    'B1.2',
    'HL Extension',
    'How does **haemoglobin** differ structurally from **collagen** (`B1.2.10–B1.2.12 HL`)?',
    opts(
      'Haemoglobin is an insoluble fibrous triple helix lacking prosthetic groups; collagen is conjugated with haem',
      'Haemoglobin is a soluble globular conjugated quaternary protein (2α + 2β + 4 Fe²⁺ haem); collagen is an insoluble fibrous triple-helix lacking prosthetic groups',
      'Both haemoglobin and collagen rely exclusively on primary structure without quaternary subunit assembly',
      'Collagen circulates dissolved in plasma transporting CO₂ while haemoglobin strengthens tendons'
    ),
    'B',
    'Haemoglobin = soluble globular conjugated (haem); Collagen = insoluble fibrous triple-helix non-conjugated.',
    'Correct answer: B.',
    'Allott B1.2 pp. 206–208.',
    ['B1.2 Protein Notes.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q23 (B2.1 HL)
  mcq(
    'B2.1',
    'HL Extension',
    'How does **cholesterol** regulate mammalian plasma-membrane fluidity across fluctuating temperatures (`B2.1.12 HL`)?',
    opts(
      'It increases fluidity at both 0 °C and 45 °C by breaking phospholipids with lipase',
      'It restricts excessive phospholipid motion at high temperature AND prevents rigid crystallization of saturated tails at low temperature',
      'It spans the entire bilayer with transmembrane channels exporting Na⁺ using ATP',
      'It occurs exclusively in plant cellulose cell walls and bacterial membranes'
    ),
    'B',
    'Bidirectional fluidity buffer: dampens melting at high T, disrupts tight packing at low T.',
    'Correct answer: B. Cholesterol restricts melting at high temperature and disrupts crystallization at low temperature.',
    'Plants use phytosterols; bacteria lack sterols.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q24 (B2.1 HL)
  mcq(
    'B2.1',
    'HL Extension',
    'During intestinal glucose absorption by **SGLT1** (`B2.1.16 HL`), why is glucose uptake halted indirectly by **ouabain** (a toxin blocking basolateral **`Na⁺/K⁺-ATPase`**)?',
    opts(
      'Ouabain binds competitively to glucose inside the gut lumen',
      'Blocking Na⁺/K⁺-ATPase collapses the inward Na⁺ electrochemical gradient needed to drive SGLT1 secondary active co-transport',
      'SGLT1 itself uses Na⁺/K⁺-ATPase subunits directly as aquaporin channels',
      'Ouabain breaks cholesterol rings inside apical brush-border microvilli'
    ),
    'B',
    'SGLT1 harvests the Na+ gradient generated actively by basolateral 3 Na+ out : 2 K+ in ATPase pumps.',
    'Correct answer: B.',
    'Allott B2.1.16 p. 226.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q25 (B2.2)
  mcq(
    'B2.2',
    'Standard IB',
    'During tissue homogenization for **differential ultracentrifugation**, why must leaf tissue be blended in an **ice-cold, isotonic, pH-buffered sucrose solution** (`B2.2`)?',
    opts(
      'Ice prevents photosynthesis; isotonic swells lysosomes open; buffer dissolves nuclear chromatin',
      'Cold slows autodigestive hydrolases; isotonic halts osmotic organelle lysis/shrinking; buffer prevents enzyme denaturation',
      'Cold accelerates 100,000 g sedimentation; sucrose binds ribosomes into pellets; buffer breaks cell walls',
      'Isotonic dissolves phospholipid bilayers cleanly while pH buffer digests chloroplasts'
    ),
    'B',
    'Three-part justification: Cold (hydrolases), Isotonic (osmosis), Buffered (pH denaturation).',
    'Correct answer: B.',
    'B 2.2 Learning Goals & Classroom Slides.',
    ['B2.2 Organelles and Compartmentalization.pdf', 'B 2.2 Learning Goals.docx']
  ),
  // Q26 (B2.2 Slide 21 + HL)
  mcq(
    'B2.2',
    'HL Extension',
    'During macrophage engulfment of bacteria, which vesicle fusion event and cytoplasmic coat protein operate correctly (`B2.2 HL & Slide 21 Clarification`)?',
    opts(
      'Phagosome + primary lysosome -> **phagolysosome** (`pH ~4.8`); **clathrin** triskelions curve receptor-mediated endocytosis pits before uncoating',
      'Phagosome + Golgi cisterna -> **peroxisome**; **aquaporin** cages pull membrane buds inward',
      'rER + ribosome -> **phagosome**; **histone H1** uncoats vesicles during exocytosis',
      'Secretory vesicle + nucleus -> **ribosome**; **peptidoglycan** pinches plasma membranes'
    ),
    'A',
    'Lysosome + phagosome = phagolysosome (Slide 21); clathrin triskelions drive receptor-mediated endocytosis.',
    'Correct answer: A.',
    'B2.2 Organelles and Compartmentalization Slide 21.',
    ['B2.2 Organelles and Compartmentalization.pdf', 'B 2.2 Learning Goals.docx']
  ),
  // Q27 (B2.3 HL)
  mcq(
    'B2.3',
    'HL Extension',
    'How do **Type II alveolar pneumocytes** protect narrow wet human lung alveoli (`B2.3.7 HL`)?',
    opts(
      'They flatten to ~0.15 µm squamous sheets covering 95% of gas-exchange surface area',
      'They differentiate permanently into erythrocytes carrying haemoglobin',
      'They secrete phospholipid pulmonary surfactant via lamellar bodies, breaking water surface tension to prevent alveolar collapse',
      'They contract striated sarcomeres synchronously using intercalated gap junctions'
    ),
    'C',
    'Type II cuboidal cells secrete surfactant lowering H-bond surface tension; Type I (~0.15 µm) perform gas diffusion.',
    'Correct answer: C.',
    'Allott B2.3.7 p. 248.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q28 (C1.1 HL)
  mcq(
    'C1.1',
    'HL Extension',
    'An enzyme assay shows `Vmax` remains strictly unchanged at high `[S]` while apparent `Km` rises cleanly from `4.0 mmol dm⁻³` to `12.0 mmol dm⁻³` upon adding Drug X. What describes Drug X (`C1.1.12 HL`)?',
    opts(
      'Irreversible mechanism-based suicide inhibitor covalently plugging active-site serine (like penicillin)',
      'Non-competitive allosteric inhibitor lowering functional enzyme pool permanently',
      'Reversible competitive inhibitor mimicking substrate geometry at the active site (like statins on HMG-CoA reductase)',
      'Thermal denaturant disrupting primary peptide bonds'
    ),
    'C',
    'Competitive inhibitors keep Vmax equal at high [S] while increasing apparent Km.',
    'Correct answer: C.',
    'Allott C1.1.12 pp. 354–356.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q29 (C1.2 HL)
  mcq(
    'C1.2',
    'HL Extension',
    'Why does one mitochondrial matrix `FADH₂` generate only **`~1.5 ATP`** via oxidative phosphorylation compared with **`~2.5 ATP`** from one matrix `NADH` (`C1.2.14 HL`)?',
    opts(
      'FADH₂ is oxidized outside the cell inside glycolysis',
      'FADH₂ donates electrons at Complex II bypassing Complex I proton pumping (~6 H+ pumped vs ~10 H+ for NADH)',
      'FADH₂ directly inhibits Complex IV cytochrome oxidase with cyanide',
      'NADH drives substrate-level phosphorylation inside the intermembrane space'
    ),
    'B',
    'FADH₂ enters Complex II downstream of Complex I, pumping fewer H+ across the inner crista membrane.',
    'Correct answer: B. FADH₂ enters Complex II downstream of Complex I (~6 H+ pumped vs ~10 H+ for NADH).',
    'Updated 2023 Allott yield: ~30–32 net ATP/glucose.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q30 (C1.2 SL)
  mcq(
    'C1.2',
    'Foundation',
    'Which net chemical products form during **anaerobic fermentation in mammalian sprinter skeletal muscle** (`vs brewer\'s yeast`)?',
    opts(
      'Lactate + 2 CO₂ + 30 ATP in muscle; Ethanol alone (0 CO₂) in yeast',
      'Lactate + ZERO CO₂ + net 2 glycolysis ATP in muscle; Ethanol + 2 CO₂ + net 2 ATP in yeast',
      'Acetyl-CoA + 4 CO₂ + 6 NADH in muscle; Pyruvate + O₂ in yeast',
      'Lactate + H₂O via Complex IV without NADH oxidation'
    ),
    'B',
    'Mammalian lactate fermentation clears NADH -> NAD+ emitting ZERO CO₂; yeast decarboxylates pyruvate -> ethanal + CO₂ -> ethanol.',
    'Correct answer: B.',
    'Allott C1.2 pp. 365–366.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q31 (C1.3 HL)
  mcq(
    'C1.3',
    'HL Extension',
    'What did **Andre Jagendorf\'s (1966) dark spinach thylakoid acid-bath experiment** prove conclusively (`C1.3.12 HL`)?',
    opts(
      'Carbon dioxide splits directly inside PSII to release atmospheric O₂ gas',
      'A transmembrane H⁺ electrochemical gradient alone—without photons or electron transport—drives thylakoid ATP synthase directly',
      'Chlorophyll b absorbs exclusively green 550 nm wavelengths',
      'Rubisco activates only inside acidic pH 4.0 stroma compartments'
    ),
    'B',
    'Shifting pH 4 lumen -> pH 8 stroma + ADP + Pi in total darkness synthesized ATP directly via proton-motive force.',
    'Correct answer: B.',
    'Allott C1.3 p. 401.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q32 (C1.3 HL)
  mcq(
    'C1.3',
    'HL Extension',
    'Why must illuminated chloroplasts supplement linear Z-scheme electron transport with **cyclic photophosphorylation around PSI (`P700`)** (`C1.3.13 HL`)?',
    opts(
      'Cyclic flow splits extra water to double oxygen release inside grana',
      'Linear flow outputs ~1.28 ATP : 1.00 NADPH, whereas the Calvin cycle consumes 1.50 ATP : 1.00 NADPH (18 ATP : 12 NADPH per hexose)',
      'Cyclic flow exports excess Rubisco directly into mitochondrial cristae',
      'Cyclic flow reduces NADP+ twice as fast without using ferredoxin'
    ),
    'B',
    'Cyclic PSI recycles ferredoxin -> PQ -> Cyt b6f to pump extra lumen H+ and produce bonus ATP with zero extra NADPH.',
    'Correct answer: B.',
    'Allott C1.3 pp. 402, 407.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q33 (D2.3 HL)
  mcq(
    'D2.3',
    'HL Extension',
    'Plant Cell X has intracellular solute potential `Ψs = −0.85 MPa` and pressure potential `Ψp = +0.35 MPa`. Adjacent Cell Y has `Ψs = −0.60 MPa` and `Ψp = +0.20 MPa`. What is the net osmotic water direction between X and Y?',
    opts(
      'Water flows from Cell X (−0.50 MPa) into Cell Y (−0.40 MPa)',
      'Water flows from Cell Y (−0.40 MPa) into Cell X (−0.50 MPa)',
      'Zero net flow occurs because both cells have positive pressure potential',
      'Solutes diffuse actively through aquaporins from X to Y until both Ψp equal zero'
    ),
    'B',
    'Ψw_X = -0.85 + 0.35 = -0.50 MPa; Ψw_Y = -0.60 + 0.20 = -0.40 MPa -> higher (-0.40) moves to lower (-0.50).',
    'Correct answer: B. Always compute Ψw = Ψs + Ψp first, then route water from less negative toward more negative Ψw.',
    'Allott D2.3 p. 659.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q34 (D1.1 HL)
  mcq(
    'D1.1',
    'HL Extension',
    'During **DNA replication (`D1.1.7 HL`)**, which enzyme removes temporary `~10 nt` RNA primers from Okazaki fragments and fills the gap with DNA deoxynucleotides?',
    opts('DNA Helicase', 'DNA Polymerase I', 'DNA Polymerase III', 'DNA Gyrase (Topoisomerase)'),
    'B',
    'DNA Pol I removes RNA primers (5\'->3\' exonuclease) and replaces with dNTPs before DNA ligase seals nicks.',
    'Correct answer: B.',
    'Allott D1.1 p. 569.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q35 (D1.2 HL)
  mcq(
    'D1.2',
    'HL Extension',
    'An intronless eukaryotic mature mRNA open reading frame contains **`630 nucleotides`** spanning precisely from the first base of its `AUG` start codon through the final base of its `UAG` stop codon. How many amino acids form the primary nascent polypeptide BEFORE signal cleavage?',
    opts('210 amino acids', '209 amino acids', '629 amino acids', '180 amino acids'),
    'B',
    '(630 / 3) - 1 stop codon = 210 - 1 = 209 amino acids.',
    'Correct answer: B (209 aa). Terminal UAA/UAG/UGA stop codons terminate translation without coding an amino acid.',
    'Allott D1.2 p. 583 ORF math.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
    'Calculate'
  ),
  // Q36 (D3.2 / D3.3 Year 2 Foundation Check)
  mcq(
    'D3.3',
    'Standard IB',
    'When dehydration increases human blood plasma osmolarity above `300 mOsm`, how does **antidiuretic hormone (`ADH / vasopressin`)** restore homeostasis along renal collecting ducts (`D3.3`)?',
    opts(
      'ADH stimulates pancreatic α-cells to secrete glucagon into Bowman\'s capsule',
      'ADH binds collecting-duct receptors triggering exocytic insertion of **aquaporin-2** water channels into apical membranes so more water reabsorbs into hypertonic medulla',
      'ADH inhibits Na+/K+-ATPase in loop of Henle descending limbs, excreting dilute urine',
      'ADH degrades glomerular basement membranes to raise ultrafiltration rate'
    ),
    'B',
    'ADH inserts aquaporin-2 channels in collecting duct -> osmotic water reabsorption -> smaller concentrated urine volume.',
    'Correct answer: B. ADH inserts apical aquaporin-2 channels in renal collecting ducts so water reabsorbs osmotically.',
    'Bridges B2.1 aquaporins + D2.3 water potential + D3.3 osmoregulation.',
    ['2026 Bio 5HL Course Outline.docx', 'IB_Biology_Study Guide_Answers.txt']
  ),

  // ==========================================================================
  // PART B — PAPER 1B (DATA-BASED QUESTIONS) · Q37–Q66 (30 DBQs)
  // ==========================================================================
  // Q37 (A — IA Goldfish DBQ, Allott p. 796)
  structured(
    'Paper 1B (Data-Based)',
    'A',
    'Analyse & Evaluate',
    'Standard IB',
    '1. Calculate the percentage increase in mean opercular beats per minute between `1 fish` and `5 fish` per tank (`1` mark).\n2. Compare whether standard deviation bars suggest a meaningful dispersion difference between densities (`1` mark).\n3. Evaluate one biological confounding factor in this design and state a targeted instrumental improvement matching the May 2028 IA rubric (`2` marks).',
    [
      mp('M1', 'Percentage increase = ((118.0 - 83.0) / 83.0) × 100 = +42.2% (35.0 beats min⁻¹ higher).', 1),
      mp('A1', 'Both groups show narrow non-overlapping ±1 SD ranges (81.0–85.0 vs 114.9–121.1), supporting distinct distribution separation while slightly higher SD at 5 fish reflects fish-to-fish interaction variability.', 1),
      mp('E1', 'Confounding factor: 5 respiring fish deplete dissolved O₂ inside shared 10 dm³ water faster than 1 fish, conflating behavioral crowding stress with hypoxia.', 1),
      mp('E2', 'Improvement: monitor dissolved O₂ continuously with an optical DO probe and bubble continuous gentle aeration / measure individually partitioned water with visual crowding cues.', 1),
    ],
    'Mean opercular beat rate rose by **+42.2%** (`83.0` to `118.0 beats min⁻¹`) with non-overlapping ±1 SD intervals (`±2.00` vs `±3.08`). However, five goldfish consume dissolved O₂ five times faster than one isolated fish inside `10 dm³`, systematically elevating ventilation via **hypoxia confounding**; inserting an optical dissolved-O₂ sensor and visual clear-glass dividers (`equal water oxygenation`) isolates behavioral crowding rigorously.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf', '2026 Bio 5HL Course Outline.docx'],
    'Allott p. 796 IA Case Study.',
    '| Tank Density (`fish / 10 dm³`) | Mean Opercular Rate (`beats min⁻¹`) | Sample `s` (`SD`, `n = 5`) |\n|---|---|---|\n| 1 fish (Control) | 83.0 | 2.00 |\n| 5 fish (Crowded) | 118.0 | 3.08 |\n*Water temperature held at `20.0 ± 0.5 °C`; no dissolved-O₂ monitoring probe deployed.*'
  ),
  // Q38 (A1.1 — Tall Trees DBQ, Allott p. 7)
  structured(
    'Paper 1B (Data-Based)',
    'A1.1',
    'Deduce & Explain',
    'Standard IB',
    '1. Using gravitational hydrostatic gradient `-0.010 MPa m⁻¹`, calculate pure gravitational tension (`MPa`) at `110 m` height (`1` mark).\n2. Deduce why *Sequoia* canopy height stalls near `~115–130 m` when xylem tracheids cavitate near `-2.0 MPa` (`2` marks).\n3. Explain how water cohesion and leaf morphology at `110 m` mitigate embolism (`2` marks).',
    [
      mp('M1', '-0.010 MPa m⁻¹ × 110 m = -1.10 MPa gravitational drop alone.', 1),
      mp('A1', 'During daytime transpiration, tracheid wall friction adds further negative tension (~ -0.6 to -0.8 MPa), pushing total apical Ψp near -1.8 to -1.9 MPa right beside the -2.0 MPa cavitation failure threshold.', 2),
      mp('E1', 'Continuous intermolecular H-bonds (cohesion) + cellulose wall adhesion sustain intact columns, while top-crown shoots evolve narrower tracheids, thicker cuticles, stunted dense foliage, and absorb coastal fog directly across leaf epidermis.', 2),
    ],
    'Gravity imposes **−1.10 MPa** at `110 m`; combined with xylem frictional drag, apical leaf potential reaches **~−1.8 MPa**, hovering right above the **−2.0 MPa** air-seeding cavitation ceiling (`explaining the ~120–130 m biological canopy cap`). Water cohesion/adhesion plus narrow high-crown tracheids, thick cuticles, and direct **coastal fog absorption** preserve unbroken water continuity.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf', 'A 1.1 Water Notes.pdf'],
    'Allott p. 7 Tall Trees DBQ.',
    'Coastal redwood (*Sequoia sempervirens*) crowns exceed `110 m`. Gravity lowers water column potential by `-0.010 MPa m⁻¹` upward; flowing sap adds `-0.70 MPa` frictional drag; air-seeding **cavitation embolisms** break xylem water columns at `-2.0 MPa`.'
  ),
  // Q39 (A1.1 — Seal vs Loon Table 1 DBQ, Allott p. 11 & p. 34)
  structured(
    'Paper 1B (Data-Based)',
    'A1.1',
    'Compare & Explain',
    'Standard IB',
    '1. Calculate how many times greater the **thermal conductivity** and **viscosity** of liquid water are than air (`2` marks).\n2. Compare how the Arctic ringed seal (*Pusa hispida*) and black-throated diver (*Gavia arctica*) overcome water\'s thermal conductivity and high buoyancy (`2` marks).',
    [
      mp('M1', 'Thermal conductivity ratio = 0.60 / 0.028 ≈ 21.4× (accept 21–24×); Viscosity ratio = (7.98 × 10⁻⁴) / (1.86 × 10⁻⁵) ≈ 42.9× (~43–50×).', 2),
      mp('A1', 'Thermal: Ringed seal insulates with thick subcutaneous hydrophobic adipose blubber, whereas black-throated diver traps warm air beneath oiled interlocking feathers.', 1),
      mp('A2', 'Buoyancy & drag: Both evolve streamlined fusiform bodies + flippers/webbed feet against ~43× viscosity; seals float easily with blubber while divers compress plumage air and possess dense bones to dive.', 1),
    ],
    'Water conducts heat **~21.4× faster** than air and has **~42.9× higher viscosity**. Ringed seals prevent sub-zero hypothermia with thick **lipid blubber** (`also providing near-neutral buoyancy`), whereas divers preen **hydrophobic oil** onto feathers trapping insulating air layers and expel air + use dense leg bones to overcome upthrust (`both streamline fusiform bodies to cut viscous drag`).',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf', 'A 1.1 Water Notes.pdf'],
    'Allott p. 34 Table 1 exact ratios.',
    '| Physical Property | Air (`20 °C`) | Seawater (`0–20 °C`) |\n|---|---|---|\n| Specific Heat Capacity (`J g⁻¹ K⁻¹`) | 1.01 | 4.18 |\n| Thermal Conductivity (`W m⁻¹ K⁻¹`) | 0.028 | 0.60 |\n| Density (`kg m⁻³`) | 1.225 | 1,000 |\n| Dynamic Viscosity (`Pa·s`) | 1.86 × 10⁻⁵ | 7.98 × 10⁻⁴ |'
  ),
  // Q40 (A1.2 — Poliovirus RNA vs Calf DNA DBQ, Allott pp. 31, 34)
  structured(
    'Paper 1B (Data-Based)',
    'A1.2',
    'Deduce & Explain',
    'Standard IB',
    '1. Deduce which organism (`Sample X` or `Sample Y`) carries **single-stranded RNA** versus **double-stranded DNA**, justifying strictly from numerical base percentages (`2` marks).\n2. Predict which organism exhibits a higher double-helix thermal melting temperature (`Tm`) if an unrelated archaeon has `%G = 34.0%` compared with Sample X (`2` marks).',
    [
      mp('A1', 'Sample X is dsDNA: contains Thymine (no Uracil) AND follows Chargaff parity cleanly (%A ≈ %T = 28.0%, %G ≈ %C = 22.0%).', 1),
      mp('A2', 'Sample Y is ssRNA: contains Uracil (no Thymine) AND violates Chargaff pairing (%A 30.4% != %U 25.0%; %C 19.5% != %G 25.1%), proving no complementary strand exists.', 1),
      mp('E1', 'The archaeon (%G = %C = 34% -> 68% G≡C content) has far higher Tm than Sample X (44% G≡C) because G≡C pairs lock together with THREE hydrogen bonds vs TWO in A=T.', 2),
    ],
    'Sample X is **double-stranded DNA** (`Thymine present; %A = %T = 28.0% and %G = %C = 22.0%`), whereas Sample Y (`Poliovirus`, *Allott p. 34*) is **single-stranded RNA** (`Uracil present; %A 30.4% != %U 25.0% and %C 19.5% != %G 25.1%`). An archaeon with `34.0% G` carries `68.0% G≡C` triple-H-bonded pairs (`vs 44.0% in X`), demanding higher kinetic heat (`higher Tm`) to separate strands.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf', '2024 A1 1.2 Nucleic Acids Notes.pdf'],
    'Allott p. 34 Poliovirus DBQ.',
    '| Organism | Adenine (%) | Thymine (%) | Uracil (%) | Guanine (%) | Cytosine (%) |\n|---|---|---|---|---|---|\n| Sample X (Mammal) | 28.1 | 27.9 | 0.0 | 21.9 | 22.1 |\n| Sample Y (Poliovirus) | 30.4 | 0.0 | 25.0 | 25.1 | 19.5 |'
  ),
  // Q41 (A2.1 HL — Molecular Clock & Isua/Jack Hills DBQ)
  structured(
    'Paper 1B (Data-Based)',
    'A2.1',
    'Calculate & Evaluate',
    'HL Extension',
    '1. Calculate genetic distance `K` (substitutions per site) and estimated divergence time (`Ma` / `Ga`) between Lineages 1 and 2 (`2` marks).\n2. Evaluate two reasons why molecular clocks (`constant substitution assumptions`) can disagree with `~3.48 Ga` Pilbara stromatolite fossils (`2` marks).',
    [
      mp('M1', 'K = 48 / 2,000 = 0.024 substitutions site⁻¹.', 1),
      mp('A1', 't = (0.024 / 0.008) × 100 Myr = 300 Myr (0.30 Ga).', 1),
      mp('E1', 'Limitations: mutation rates vary significantly across generation times/metabolic rates/DNA repair efficiency AND back/multiple reverse mutations at the same nucleotide site saturate older deep-time estimates (>1 Ga).', 2),
    ],
    'Genetic distance **`K = 0.024` site⁻¹**, yielding divergence **`300 Myr` (`0.30 Ga`)**. Across multi-billion-year LUCA timescales, clocks lose precision because substitution speeds accelerate in short-generation prokaryotes or high-UV eras, while **multiple back-mutations** (`saturation`) at single nucleotide sites mask cumulative divergence.',
    ['A 2.1 Origin of Cells Notes.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
    undefined,
    'Two conserved prokaryotic clades differ by `48` neutral substitutions across `2,000 bp`. Calibrated divergence clock rate = `0.008 substitutions site⁻¹ (100 Myr)⁻¹`. Pilbara Strelley Pool stromatolites date radiometrically to `~3.48 Ga`.'
  ),
  // Q42 (A2.2 — Scale Bar & Magnification DBQ, Classroom Slide 25)
  structured(
    'Paper 1B (Data-Based)',
    'A2.2',
    'Calculate & Deduce',
    'Standard IB',
    '1. Calculate the TEM micrograph magnification (`1` mark).\n2. Calculate true mitochondrial length (`µm`) and actual 80S ribosome diameter (`nm`) (`2` marks).\n3. Deduce whether an intact living dividing yeast cell showing this mitochondrion could have its **80S ribosomes** resolved under a `1,500x` light microscope, justifying optically (`1` mark).',
    [
      mp('M1', 'M = I / A = (24 mm × 1000) / 1.0 µm = 24,000x.', 1),
      mp('A1', 'Mitochondrion = 60,000 µm / 24,000 = 2.5 µm; 80S Ribosome = 600 µm / 24,000 = 0.025 µm = 25 nm.', 2),
      mp('E1', 'No—25 nm falls nearly 8x below visible-light resolution (~200 nm Abbe diffraction limit), so ribosomes cannot be resolved in light microscopy regardless of magnification.', 1),
    ],
    'Magnification = **`24,000×`**; Mitochondrion = **`2.5 µm`**; 80S Ribosome = **`25 nm`** (`0.025 µm`, proving Slide 25 `"20 µm"` is a 1,000x unit error!). Because light microscopes hit an optical `~200 nm` wavelength diffraction floor, `25 nm` ribosomes remain unresolved.',
    ['A 2.2 Microscope Notes.pdf', 'A2.2 Cell Structure Notes.pdf'],
    undefined,
    'In a TEM image, a `1.0 µm` scale bar measures `24 mm` wide. On the same print, a mitochondrion measures `60 mm` long and an adjacent 80S ribosome measures `0.60 mm` across.'
  ),
  // Q43 (A2.3 HL — Marine Viral Shunt DBQ, Allott p. 86)
  structured(
    'Paper 1B (Data-Based)',
    'A2.3',
    'Analyse & Suggest',
    'HL Extension',
    '1. Calculate daily viral carbon shunting if oceanic phytoplankton & bacteria fix `50 Gt C yr⁻¹` and phage lysis diverts `20%` of bacterial production back to dissolved organic matter (`DOM`) (`1` mark).\n2. Suggest why viral lysis simultaneously boosts surface bacterial nutrient recycling while *reducing* carbon export down into deep-ocean fish food webs (`2` marks).',
    [
      mp('M1', 'Daily/annual diversion proportional: 20% of 50 Gt C yr⁻¹ = 10 Gt C yr⁻¹ cycled through the viral shunt (accept 27.4 Mt C day⁻¹).', 1),
      mp('E1', 'Lysis releases cellular N/P/C monomers immediately as DOM, fertilizing surviving heterotrophic bacteria and surface plankton rapidly.', 1),
      mp('E2', 'However, converting particulate bacterial cells into microscopic DOM prevents zooplankton grazing and dense fecal-pellet sinking—retaining carbon in surface respiration loops rather than deep-ocean biological pump burial.', 1),
    ],
    'Phages divert **`10 Gt C yr⁻¹`** (`~27.4 Mt C day⁻¹`) into **dissolved organic matter (`DOM`)**, accelerating rapid surface N/P/C remineralization for neighboring microbes while starving filter-feeding zooplankton and preventing heavy particulate sinking into deep-sea carbon reservoirs.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
    'Allott p. 86 Marine Viruses DBQ.',
    'Pelagic coastal water contains `~10⁸` bacteriophages per `cm³` (`~10×` bacterial abundance). Assuming global marine microbial primary productivity fixes `50 Gt C yr⁻¹` and lytic phages rupture `~20%` of bacterial biomass into non-sinking **DOM** before zooplankton grazing.'
  ),
  // Q44 (A2.3 HL — HIV Monotherapy vs cART DBQ, Allott p. 90)
  structured(
    'Paper 1B (Data-Based)',
    'A2.3',
    'Describe & Explain',
    'HL Extension',
    '1. Describe changes in patient plasma HIV-1 RNA viral load during `AZT monotherapy` (`Weeks 0–24`) versus `Triple-Drug cART` (`Weeks 0–24`) (`2` marks).\n2. Explain biologically why viral rebound emerges rapidly under single-drug AZT yet stays suppressed under combination ART targeting reverse transcriptase, integrase, and protease together (`3` marks).',
    [
      mp('A1', 'AZT monotherapy drops viral load sharply from 10⁵ to ~10³ copies mL⁻¹ by Week 4, then rebounds completely back to ~10⁵ copies mL⁻¹ by Week 24.', 1),
      mp('A2', 'Triple cART drops viral load steeply from 10⁵ down below detection (<50 copies mL⁻¹) by Week 12 and maintains suppression through Week 24.', 1),
      mp('E1', 'HIV reverse transcriptase lacks proofreading (~10⁻⁴ error/bp across ~9.7 kb), continually generating spontaneous pre-existing point mutations conferring AZT resistance that sweep to fixation under single-drug selection.', 2),
      mp('E2', 'Triple cART forces any surviving virion to acquire three independent simultaneous resistance mutations on one particle (~(10⁻⁴)³ = 10⁻¹² probability), blocking viral escape cleanly unless adherence stops.', 1),
    ],
    'Monotherapy (`AZT`) depresses HIV transiently by `100×` (`10⁵ -> 10³`) before rebounding to `10⁵ copies mL⁻¹` by Week 24, whereas **triple-drug cART** drives viral RNA cleanly under detection (`<50 copies mL⁻¹`). Because **error-prone HIV reverse transcriptase** mutates `~1 nt` per replication, single-drug resistance mutants pre-exist and sweep; simultaneous blockade of RT + integrase + protease drops viable triple-mutant probability near zero.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
    'Allott p. 90 HIV Antiretroviral DBQ.',
    '| Treatment Regimen | Week 0 (`copies mL⁻¹`) | Week 4 (`copies mL⁻¹`) | Week 12 (`copies mL⁻¹`) | Week 24 (`copies mL⁻¹`) |\n|---|---|---|---|---|\n| Monotherapy (AZT only) | 100,000 | 1,200 | 28,000 | 95,000 |\n| Combination ART (3 drugs) | 100,000 | 450 | <50 | <50 |'
  ),
  // Q45 (B1.1 — Migratory Godwit Energy-Mass DBQ, Allott p. 209)
  structured(
    'Paper 1B (Data-Based)',
    'B1.1',
    'Calculate & Explain',
    'Standard IB',
    '1. Calculate total flight fuel mass required to supply `2,280 kJ` if stored strictly as **dry triglyceride (`38.0 kJ g⁻¹`)** versus **hydrated glycogen (`17.0 kJ g⁻¹ dry` + `2.0 g H₂O` bound per `1.0 g` glycogen)** (`2` marks).\n2. Explain two chemical reasons triglycerides reduce flight mass by over `85%`, yet why birds still keep some muscle glycogen (`2` marks).',
    [
      mp('M1', 'Triglyceride mass = 2,280 / 38.0 = 60.0 g.', 1),
      mp('M2', 'Dry glycogen = 2,280 / 17.0 = 134.1 g; hydrated glycogen mass = 134.1 × 3 = 402.4 g (saves 342.4 g).', 1),
      mp('E1', 'Triglycerides are far more reduced (richer in C–H bonds -> ~2.2× energy/g) AND non-polar hydrophobic (pack anhydrously without osmotic hydration shells).', 1),
      mp('E2', 'Muscle retains small glycogen reserves because polar glucose hydrolyzes rapidly and fuels cytosolic anaerobic glycolysis bursts when O₂ delivery cannot match lipid β-oxidation.', 1),
    ],
    'Lipid fuel = **`60.0 g`** vs hydrated glycogen = **`402.4 g`** (`saving 342.4 g`). Reduced hydrophobic acyl chains pack **anhydrously** at double caloric yield, whereas polar glycogen attracts heavy water shells yet remains crucial for rapid emergency **anaerobic glycolysis** takeoff bursts.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf', 'B1 1.1 Carbs and Lipids.pdf'],
    'Allott p. 209 migrating birds DBQ.',
    'A migratory bar-tailed godwit expends `2,280 kJ` crossing open ocean. Energy density: lipid = `38.0 kJ g⁻¹` (`0 g` bound water); glycogen = `17.0 kJ g⁻¹` dry carbohydrate stored hydrated with `2.0 g` water per `1.0 g` dry glycogen.'
  ),
  // Q46 (B1.2 — Peptide Stoichiometry & Sickle-Cell Glu->Val DBQ)
  structured(
    'Paper 1B (Data-Based)',
    'B1.2',
    'Calculate & Explain',
    'HL Extension',
    '1. Calculate exact peptide bonds (`condensation H₂O` released) assembling one human **insulin** (`21 aa` A-chain + `30 aa` B-chain) and one adult **haemoglobin** (`2 × 141 aa` α + `2 × 146 aa` β) (`2` marks).\n2. Explain at the R-group chemical level why replacing polar negatively charged `Glutamate` with non-polar `Valine` at β-globin position 6 causes sickle-cell haemoglobin (`HbS`) to polymerize inside deoxygenated erythrocytes (`2` marks).',
    [
      mp('M1', 'Insulin (2 chains): (21 - 1) + (30 - 1) = 49 peptide bonds (49 H₂O).', 1),
      mp('M2', 'Haemoglobin (4 chains): 2×(141 - 1) + 2×(146 - 1) = 280 + 290 = 570 peptide bonds.', 1),
      mp('E1', 'Hydrophilic charged glutamate normally stabilizes aqueous protein exterior; hydrophobic valine creates an exposed non-polar surface patch on β-globin.', 1),
      mp('E2', 'When deoxygenated T-state haemoglobin shifts conformation, hydrophobic patches stick together via hydrophobic interactions into stiff insoluble fibres distorting RBCs into rigid sickles.', 1),
    ],
    'Insulin = **`49` peptide bonds** (`subtract 1 per chain!`); Haemoglobin = **`570` peptide bonds**. Substituting surface polar `Glu⁻` for non-polar `Val` creates a hydrophobic sticky pocket driving `HbS` fibre aggregation in low `O₂` capillaries.',
    ['B1.2 Protein Notes.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
    undefined,
    'Active insulin consists of A (`21 aa`) and B (`30 aa`) chains linked by disulfide bridges. Adult human haemoglobin (`HbA`) carries two `α` (`141 aa` each) and two `β` (`146 aa` each) globin chains.'
  ),
  // Q47 (B2.1 HL — Chickpea/Barley Cold Membrane Unsaturation DBQ, Allott pp. 218–221)
  structured(
    'Paper 1B (Data-Based)',
    'B2.1',
    'Deduce & Explain',
    'HL Extension',
    '1. Identify which cultivar (`Cultivar A` vs `Cultivar B`) exhibits greater cold tolerance at `4 °C`, citing electrolyte leakage values (`1` mark).\n2. Explain chemically how increasing **cis-polyunsaturated fatty acids (`linolenic 18:3`)** reduces electrolyte leakage at `4 °C` (`3` marks).',
    [
      mp('A1', 'Cultivar B is cold-tolerant: maintains low membrane leakage (12% K+ efflux at 4 °C, vs 68% lethal leakage in Cultivar A) alongside higher 18:3 cis-PUFA content (48% vs 18%).', 1),
      mp('E1', 'Each cis C=C double bond bends acyl chains by ~30°, physically preventing tight van der Waals crystal packing of neighboring phospholipids at 4 °C.', 2),
      mp('E2', 'Preserving fluid liquid-crystal membrane phase prevents brittle fractures/pores from forming, retaining active Na+/K+/H+ gradients and cytosolic ions safely.', 1),
    ],
    '**Cultivar B** tolerates `4 °C` chilling cleanly (`only 12% K⁺ leak` vs `68%` in A). High `48% cis`-PUFAs insert steric `~30°` kinks between acyl chains, stopping rigid solid gel phase transitions and leaky membrane tears.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf', 'B1 1.1 Carbs and Lipids.pdf'],
    'Allott Barley/Chickpea Chilling DBQ pp. 218–221.',
    '| Barley Cultivar | Membrane `cis`-18:3 PUFA (%) | `K⁺` Ion Leakage at `20 °C` (%) | `K⁺` Ion Leakage at `4 °C` (%) |\n|---|---|---|---|\n| Cultivar A | 18 | 6 | 68 |\n| Cultivar B | 48 | 5 | 12 |'
  ),
  // Q48 (B2.1 HL — Cornea Transparency & Ouabain ATPase DBQ, Allott p. 214)
  structured(
    'Paper 1B (Data-Based)',
    'B2.1',
    'Analyse & Explain',
    'HL Extension',
    '1. Calculate corneal thickness increase (`µm` and `%`) when cooled at `4 °C` for `12 h` (`1` mark).\n2. Explain why warming corneas back to `37 °C` restores original `520 µm` transparency ONLY when **ouabain** (`Na⁺/K⁺-ATPase inhibitor`) is absent (`3` marks).',
    [
      mp('M1', '520 -> 780 µm = +260 µm increase (+50.0% swelling).', 1),
      mp('E1', 'At 4 °C, low kinetic enzyme rates halt active endothelial Na⁺/K⁺-ATPase pumping, leaving osmotic solutes inside corneal stroma so water enters passively swelling collagen spacing (cloudiness).', 2),
      mp('E2', 'Rewarming at 37 °C reactivates ATP-driven 3 Na⁺ out : 2 K⁺ in pumping, draining osmotic water outward to re-thin stroma—unless ouabain blocks ATPase pumps permanently.', 1),
    ],
    'Cold-stored corneas swell **`+260 µm (+50.0%)`** because suppressed respiration/ATPase activity lets osmotic water enter collagen stroma; warming to `37 °C` restarts **`Na⁺/K⁺-ATPase`** water-clearing pumps unless **ouabain** blocks active transport.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
    'Allott p. 214 Cornea Transplant DBQ.',
    'Fresh donor cornea thickness (`37 °C` buffered medium) = `520 µm`. Stored at `4 °C` for `12 h`, thickness swells cloudy to `780 µm`. Rewarmed to `37 °C`: normal medium returns cornea to `525 µm` (`transparent`); `37 °C + ouabain` stays swollen at `790 µm`.'
  ),
  // Q49 (B2.2 — Differential Ultracentrifugation Pellets DBQ)
  structured(
    'Paper 1B (Data-Based)',
    'B2.2',
    'Identify & Explain',
    'Standard IB',
    '1. Identify the dominant organelle concentrated in `Pellet 1`, `Pellet 2`, and `Pellet 3` based on enzymatic biomarkers (`3` marks).\n2. Explain why succinate dehydrogenase disappears almost entirely if spinach homogenization uses pure distilled water instead of `0.30 mol dm⁻³` buffered sucrose (`1` mark).',
    [
      mp('A1', 'Pellet 1 (1,000 g): Nuclei (DNA/chromatin histones max).', 1),
      mp('A2', 'Pellet 2 (10,000 g): Mitochondria (succinate dehydrogenase marker max).', 1),
      mp('A3', 'Pellet 3 (100,000 g): Ribosomes / ER microsomes (high rRNA translation marker).', 1),
      mp('E1', 'Pure hypotonic water rushes by osmosis into mitochondria/lysosomes bursting their double membranes and denaturing/leaking enzymes into supernatant.', 1),
    ],
    '`Pellet 1` = **Nuclei**; `Pellet 2` = **Mitochondria**; `Pellet 3` = **Ribosomes / ER microsomes**. Distilled water creates hypotonic osmotic rupture of organelle membranes (`requires isotonic sucrose + ice-cold + pH buffer`).',
    ['B2.2 Organelles and Compartmentalization.pdf', 'B 2.2 Learning Goals.docx'],
    undefined,
    'Spinach homogenate centrifuged sequentially yielded:\n- `Pellet 1 (1,000 g)`: highest histone DNA concentration\n- `Pellet 2 (10,000 g)`: highest **succinate dehydrogenase** (Krebs cristae enzyme)\n- `Pellet 3 (100,000 g)`: highest **rRNA** polypeptide translation markers'
  ),
  // Q50 (B2.3 — Spadefoot Toad Developmental Plasticity DBQ, Allott p. 242)
  structured(
    'Paper 1B (Data-Based)',
    'B2.3',
    'Deduce & Explain',
    'Standard IB',
    '1. Deduce whether switching *Spea multiplicata* tadpoles from detritus to fairy-shrimp diet alters their nuclear DNA nucleotide sequence (`1` mark).\n2. Explain the cellular stem-cell mechanism converting tadpole jaw muscle and gut length rapidly within `4 days` (`3` marks).',
    [
      mp('A1', 'No—genomic DNA sequences remain completely identical between omnivore and carnivore morphs.', 1),
      mp('E1', 'Dietary/hormonal cues alter transcription factors and epigenetic histone/DNA tags inside cranial and gut progenitor stem-cell niches (differential gene expression).', 2),
      mp('E2', 'Accelerated carnivore metamorphosis shrinks fragile desert pond predation/desiccation mortality before ephemeral pools dry up.', 1),
    ],
    '**Zero DNA sequence mutation** occurs (`Allott p. 242`). Environmental shrimp signals switch **transcription factor** profiles inside craniofacial/intestinal stem cells (`differential gene expression`), molding broad jaws and short carnivore guts within days to escape drying pools.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
    'Allott p. 242 Spadefoot Toad DBQ.',
    'Sibling *Spea multiplicata* tadpoles split from one clutch feed either on pond algae detritus (`small beak, long coiled gut`) or live fairy shrimp (`broad hypertrophied jaw muscles, serrated keratin beak, short intestine`) transforming within `4 days`.'
  ),
  // Q51 (B2.3 — SA:V Scaling & Intestinal Microvilli DBQ)
  structured(
    'Paper 1B (Data-Based)',
    'B2.3',
    'Calculate & Explain',
    'Standard IB',
    '1. Calculate `SA:V` (`µm⁻¹`) for cubic cells of side `L = 2.0 µm` vs `L = 20.0 µm` (`1` mark).\n2. Calculate total membrane surface area (`µm²`) of a `100 µm²` (`10 × 10 µm`) gut enterocyte apex carrying `2,000` cylindrical microvilli (`radius = 0.05 µm`, `height = 1.0 µm`; lateral cylinder area `2πrh`) (`2` marks).\n3. Explain how **red blood cells** overcome `SA:V` oxygen bottlenecks without folding into microvilli (`1` mark).',
    [
      mp('M1', '2.0 µm cube: SA=24, V=8 -> SA:V = 3.0 µm⁻¹; 20.0 µm cube: SA=2400, V=8000 -> SA:V = 0.30 µm⁻¹ (10× collapse).', 1),
      mp('M2', 'One microvillus = 2π(0.05)(1.0) = 0.314 µm² -> 2,000 microvilli = 628 µm² + 100 µm² base = 728 µm² (~7.28× amplification).', 2),
      mp('E1', 'Mammalian RBCs flatten centrally into biconcave discs (~7.5 µm) and eject nuclei/mitochondria, cutting diffusion path cleanly while lifting SA:V.', 1),
    ],
    '`SA:V` falls tenfold from **`3.0 µm⁻¹` to `0.30 µm⁻¹`**; apical microvilli add `628 µm²` expanding total area to **`728 µm²` (`7.28×`)** without inflating cytosolic volume. Erythrocytes stay flat biconcave (`short diffusion radius + high SA:V`).',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf', 'A2.2 Cell Structure Notes.pdf'],
    undefined,
    'Two model cubic cells have side lengths `L1 = 2.0 µm` and `L2 = 20.0 µm`. An intestinal enterocyte `10 µm × 10 µm` apex contains `2,000` cylindrical microvilli (`r = 0.05 µm`, `h = 1.0 µm`).'
  ),
  // Q52 (C1.1 — Adenylate Kinase Thermostability DBQ, Allott p. 351)
  structured(
    'Paper 1B (Data-Based)',
    'C1.1',
    'Describe & Explain',
    'HL Extension',
    '1. Identify the approximate **optimum temperature (`T_opt`)** and thermal denaturation onset for Psychrophile A vs Thermophile C (`2` marks).\n2. Explain in terms of protein `3°` R-group bonding why Thermophile C tolerates `75 °C` while showing poor turnover below `25 °C` (`2` marks).',
    [
      mp('A1', 'Psychrophile A peaks near ~28–30 °C and denatures completely by ~42 °C.', 1),
      mp('A2', 'Thermophile C remains low below 30 °C, peaks sharply near ~75 °C, and holds partial activity past 85 °C.', 1),
      mp('E1', 'Thermophile C packs dense intramolecular ionic salt bridges, H-bonds, and hydrophobic cores that resist thermal unfolding at 75 °C—yet make loops too stiff at 20 °C for rapid induced-fit substrate conformational flexing.', 2),
    ],
    'Psychrophile A peaks near `~30 °C` and collapses by `42 °C`; Thermophile C peaks near `~75 °C`. Dense internal **ionic salt bridges and H-bonds** keep thermophilic active sites intact at extreme heat, sacrificing low-temperature loop flexibility needed for fast cold catalysis.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf', 'B1.2 Protein Notes.pdf'],
    'Allott p. 351 Adenylate Kinase DBQ.',
    '| Assay Temp (`°C`) | Psychrophile A (% Max Activity) | Mammal B (% Max Activity) | Thermophile C (% Max Activity) |\n|---|---|---|---|\n| 15 | 62 | 18 | 4 |\n| 30 | 100 | 74 | 15 |\n| 37 | 48 | 100 | 24 |\n| 55 | 0 | 12 | 68 |\n| 75 | 0 | 0 | 100 |\n| 90 | 0 | 0 | 45 |'
  ),
  // Q53 (C1.1 HL — Catalase Slope + Km/Vmax Inhibitor Diagnostic DBQ)
  structured(
    'Paper 1B (Data-Based)',
    'C1.1',
    'Calculate & Deduce',
    'HL Extension',
    '1. Calculate initial catalase reaction rate `v₀` (`cm³ s⁻¹`) between `0 s` and `10 s` in the uninhibited control (`1` mark).\n2. Explain why oxygen evolution slows between `30 s` and `50 s` despite unchanged `37 °C` temperature (`1` mark).\n3. Deduce whether Drug M or Drug N is **competitive** vs **non-competitive**, justifying directly with `Vmax` and `Km` shifts (`2` marks).',
    [
      mp('M1', 'v₀ = 4.2 cm³ / 10 s = 0.42 cm³ s⁻¹.', 1),
      mp('E1', 'H₂O₂ substrate concentration falls progressively as product forms, dropping successful enzyme–substrate collision frequency until substrate runs out.', 1),
      mp('A1', 'Drug M preserves Vmax (1.20 cm³ s⁻¹) at saturating [S] while raising apparent Km (0.032 -> 0.064 mol dm⁻³) -> Competitive inhibitor.', 1),
      mp('A2', 'Drug N halves Vmax (1.20 -> 0.60 cm³ s⁻¹) regardless of [S] while leaving Km unchanged (0.032) -> Non-competitive allosteric inhibitor.', 1),
    ],
    'Initial rate `v₀` = **`0.42 cm³ s⁻¹`**, falling past `30 s` via **substrate exhaustion** (`fewer successful ES collisions`). **Drug M** = **competitive** (`Vmax` preserved, `Km` doubled); **Drug N** = **non-competitive** (`Vmax` halved, `Km` constant).',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf', 'IB_Biology_Study Guide_Answers.txt'],
    undefined,
    'At `0.050 mol dm⁻³ H₂O₂`, catalase evolves `4.2 cm³ O₂` over `0–10 s` and plateaus after `40 s`. Full saturation data:\n- Control: `Vmax = 1.20 cm³ s⁻¹`, `Km = 0.032 mol dm⁻³`\n- `+Drug M`: `Vmax = 1.20 cm³ s⁻¹`, `Km = 0.064 mol dm⁻³`\n- `+Drug N`: `Vmax = 0.60 cm³ s⁻¹`, `Km = 0.032 mol dm⁻³`'
  ),
  // Q54 (C1.2 — Respirometer KOH & Thermobarometer O2 Calculation)
  structured(
    'Paper 1B (Data-Based)',
    'C1.2',
    'Calculate & Explain',
    'Standard IB',
    '1. Calculate net fluid displacement attributable solely to germinating-pea respiration after subtracting thermobarometer drift, then calculate O₂ volume uptake (`V = πr²d`, take `π = 3.14`) and rate per gram per minute (`3` marks).\n2. Explain why placing **KOH** in both chambers is essential for valid O₂ measurement (`1` mark).',
    [
      mp('M1', 'Corrected displacement = 28.0 - 2.0 = 26.0 mm toward pea chamber (r = 0.50 mm).', 1),
      mp('M2', 'V_O2 = 3.14 × (0.50)² × 26.0 = 20.41 mm³ (~20.4 mm³ O₂).', 1),
      mp('M3', 'Rate = 20.41 / (5.0 g × 20 min) = 0.204 mm³ O₂ g⁻¹ min⁻¹.', 1),
      mp('E1', 'KOH absorbs all respired CO₂ (KOH + CO₂ -> KHCO₃); without KOH, equal aerobic CO₂ release cancels O₂ volume drop cleanly (RQ = 1.0) so dye stays still.', 1),
    ],
    'Corrected displacement = **`26.0 mm`**; O₂ absorbed = **`20.4 mm³`** (`0.204 mm³ g⁻¹ min⁻¹`). **KOH** scrubs released `CO₂` so capillary shift measures net `O₂` consumption cleanly.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
    undefined,
    'In a sealed `20 min` respirometer (`tube radius r = 0.50 mm`), `5.0 g` germinating peas + KOH pull manometer dye `28.0 mm` inward while the paired inert glass-bead thermobarometer + KOH shifts `2.0 mm` in the same direction due to ambient warming.'
  ),
  // Q55 (C1.2 HL — Kangaroo Rat Palmitate vs Glucose RQ & Metabolic Water, Allott p. 378)
  structured(
    'Paper 1B (Data-Based)',
    'C1.2',
    'Calculate & Explain',
    'HL Extension',
    '1. Calculate Respiratory Quotient (`RQ = CO₂/O₂`) and grams of metabolic water generated per `1.0 g` oxidized for **glucose** (`180 g mol⁻¹`) versus **palmitate** (`256 g mol⁻¹`) (`3` marks).\n2. Identify the exact cristae step and terminal reactant producing this metabolic water inside desert kangaroo rats (`2` marks).',
    [
      mp('M1', 'Glucose RQ = 6 / 6 = 1.00; Palmitate RQ = 16 / 23 ≈ 0.70.', 1),
      mp('M2', 'Water per g glucose = (6 × 18) / 180 = 0.60 g H₂O g⁻¹; Water per g palmitate = (16 × 18) / 256 = 1.125 (~1.13) g H₂O g⁻¹.', 2),
      mp('E1', 'Metabolic water forms at mitochondrial cristae Complex IV where oxygen acts as terminal electron acceptor combining with matrix protons: ½O₂ + 2e⁻ + 2H⁺ -> H₂O.', 2),
    ],
    'Glucose: **RQ = 1.00**, **`0.60 g H₂O g⁻¹`**; Palmitate: **RQ = 0.70**, **`1.13 g H₂O g⁻¹`**. Desert kangaroo rats extract nearly double metabolic hydration via **Complex IV** terminal oxygen reduction.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
    'Allott p. 378 Kangaroo Rat DBQ.',
    '- Glucose (`M = 180 g mol⁻¹`): `C₆H₁₂O₆ + 6 O₂ -> 6 CO₂ + 6 H₂O`\n- Palmitate (`M = 256 g mol⁻¹`): `C₁₆H₃₂O₂ + 23 O₂ -> 16 CO₂ + 16 H₂O`'
  ),
  // Q56 (C1.2 HL — Rattlesnake Shaker Muscle DBQ, Allott pp. 381–383)
  structured(
    'Paper 1B (Data-Based)',
    'C1.2',
    'Compare & Explain',
    'HL Extension',
    '1. Compare ultrastructural allocation and glycogen vs lipid enzyme activity between rattle shaker and fast limb skeletal fibres (`2` marks).\n2. Explain how `26%` mitochondrial density enables sustained `90 Hz` rattling for hours without lactic acid fatigue (`2` marks).',
    [
      mp('A1', 'Shaker fibres dedicate ~26% volume to mitochondria (nearly 9× more than white limb 3%) with dense cristae and high Krebs/ETC activity, whereas limb fibres pack more sarcoplasmic myofibrils/glycogen.', 2),
      mp('E1', 'High cristae area and dense capillary O₂ supply match ATP turnover strictly via aerobic oxidative phosphorylation (30–32 ATP/glucose + fatty acid oxidation), regenerating NAD+ continuously via Complex I–IV rather than accumulating anaerobic lactate.', 2),
    ],
    'Shaker muscle trades some peak force (`58%` myofibrils vs `82%`) for **`26%` mitochondrial cristae density**, generating steady aerobic ATP (`30–32 ATP/glucose` + lipids) without exhausting glycogen or triggering lactate fatigue.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
    'Allott pp. 381–383 Shaker Muscle DBQ.',
    '| Muscle Fibre Type | Mitochondria (% Volume) | Myofibrils (% Volume) | Aerobic Enzyme Index | Maximum Continuous Contraction |\n|---|---|---|---|---|\n| White Limb Fast-Twitch | 3% | 82% | 1.0x | < 45 seconds (fatigue) |\n| Rattlesnake Tail-Shaker | 26% | 58% | 7.8x | > 180 minutes (`90 Hz`) |'
  ),
  // Q57 (C1.3 — Paper Chromatography Rf Values DBQ)
  structured(
    'Paper 1B (Data-Based)',
    'C1.3',
    'Calculate & Deduce',
    'Standard IB',
    '1. Calculate the `Rf` value of **Chlorophyll a** and **β-Carotene** (`2` marks).\n2. Deduce relative **hydrophobicity** (`non-polar affinity for organic mobile phase vs polar cellulose paper`) across all four spots (`1` mark).\n3. Explain why spinach spots must sit *above* initial solvent height before sealing (`1` mark).',
    [
      mp('M1', 'Rf(Chl a) = 48.0 / 80.0 = 0.60; Rf(β-carotene) = 76.0 / 80.0 = 0.95.', 2),
      mp('A1', 'β-Carotene is least polar / most hydrophobic (highest organic solvent affinity, Rf 0.95), whereas Xanthophyll-2 (Rf 0.32) is most polar (clings tightly to polar cellulose -OH groups).', 1),
      mp('E1', 'If pigment dots immerse directly below the liquid solvent surface, pigments simply dissolve outward into the beaker reservoir instead of ascending upward cleanly by capillary partitioning.', 1),
    ],
    '`Rf` (**Chlorophyll a**) = **`0.60`**, (**β-Carotene**) = **`0.95`**. Hydrophobicity climbs smoothly down to **β-Carotene (`0.95`)** (`most non-polar`); keep baseline origin strictly **above** liquid meniscus to avoid sample wash-out.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
    undefined,
    'Leaf chloroplast extracts spotted onto silica/cellulose paper ran `80.0 mm` solvent front (`petroleum ether : acetone`):\n- Yellow Xanthophyll-2: `25.6 mm`\n- Olive Chlorophyll b: `36.0 mm`\n- Blue-green Chlorophyll a: `48.0 mm`\n- Orange β-Carotene: `76.0 mm`'
  ),
  // Q58 (C1.3 — FACE Canopy CO2 Enrichment & Nutrient Co-Limitation DBQ, Allott p. 394)
  structured(
    'Paper 1B (Data-Based)',
    'C1.3',
    'Analyse & Explain',
    'Standard IB',
    '1. Describe the difference in net primary productivity (`NPP`) gain at `580 ppm CO₂` between High-Nitrogen and Low-Nitrogen forest stands over `6 years` (`2` marks).\n2. Explain biologically why nitrogen deficiency suppresses sustained `CO₂` fertilization inside intact ecosystems (`2` marks).',
    [
      mp('A1', 'High-N forests maintain +22% NPP gain in Year 1 and +21% in Year 6, whereas Low-N plots drop sharply from +16% (Year 1) down to just +3% (Year 6).', 2),
      mp('E1', 'Photosynthesis requires nitrogen (`NO₃⁻`) to synthesize amino acids for chlorophyll pyrrole rings AND massive stromal pools of **Rubisco enzyme** (~50% of soluble leaf protein) plus ATP/NADPH nucleic cofactors; depleted soil N halts Calvin enzyme synthesis regardless of excess atmospheric CO₂.', 2),
    ],
    'High-N stands sustain **`+21%` growth** over 6 years, whereas Low-N stands collapse to **`+3%`**. Soil nitrogen is indispensable for synthesizing **chlorophyll** and abundant **Rubisco protein**, co-limiting carbon fixation.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
    'Allott p. 394 FACE DBQ.',
    'Free-Air CO₂ Enrichment (`FACE`) rings elevated ambient forest `CO₂` from `380 ppm` to `580 ppm`:\n- **High-Nitrogen soil (`% NPP boost vs 380 ppm`):** Year 1 = `+22%`, Year 3 = `+20%`, Year 6 = `+21%`\n- **Low-Nitrogen soil (`% NPP boost vs 380 ppm`):** Year 1 = `+16%`, Year 3 = `+7%`, Year 6 = `+3%`'
  ),
  // Q59 (C1.3 HL — Bassham 14CO2 Light OFF / CO2 Drop DBQ, Allott pp. 407–409)
  structured(
    'Paper 1B (Data-Based)',
    'C1.3',
    'Deduce & Explain',
    'HL Extension',
    '1. Predict and explain `[GP]` and `[RuBP]` trajectories over the first `30 s` after **lights turn OFF** at constant `1% CO₂` (`2` marks).\n2. Predict and explain `[GP]` and `[RuBP]` trajectories over `30 s` if **CO₂ drops from `1%` to `0.003%`** in continuous bright light (`2` marks).',
    [
      mp('E1', 'Light OFF: ATP + NADPH halt cleanly -> GP conversion into TP stalls while Rubisco briefly keeps fixing CO₂ onto remaining RuBP, causing **[GP] to SPIKE** and **[RuBP] to DROP** since TP regeneration lacks ATP.', 2),
      mp('E2', 'CO2 drop in bright light: Rubisco carbon fixation stops -> RuBP stops being consumed while light-powered ATP/NADPH keep converting existing GP -> TP -> RuBP, causing **[RuBP] to SPIKE** and **[GP] to PLUNGE**.', 2),
    ],
    '**Light OFF:** `[GP]` rises sharply (`unreduced`), `[RuBP]` drops (`no ATP regeneration`). **CO₂ cut in light:** `[RuBP]` accumulates (`unfixed`), `[GP]` falls (`converted onward to TP + RuBP`).',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
    'Allott pp. 407–409 Bassham DBQ.',
    'Illuminated *Chlorella* algae run steady-state Calvin cycling (`RuBP <-> GP <-> TP`) at `1% CO₂` before two abrupt single-variable perturbations are applied separately.'
  ),
  // Q60 (D1.1 — Meselson–Stahl CsCl Density Gradient DBQ, Allott pp. 559–561)
  structured(
    'Paper 1B (Data-Based)',
    'D1.1',
    'Deduce & Predict',
    'Standard IB',
    '1. Explain how **Generation 1 (`100%` hybrid band)** falsifies the **Conservative** model (`1` mark).\n2. Explain how **Generation 2 (`50% hybrid : 50% light`)** falsifies the **Dispersive** model (`1` mark).\n3. Calculate expected band percentages at **Generation 4 (`4th round` in `¹⁴N`)** (`2` marks).',
    [
      mp('A1', 'Conservative predicted 50% pure heavy (¹⁵N/¹⁵N) + 50% pure light (¹⁴N/¹⁴N) at Gen 1—zero intermediate band, so a single 100% hybrid band rules Conservative out cleanly.', 1),
      mp('A2', 'Dispersive predicted ONE blended single band shifting uniformly lighter across Gen 2 (never separating two discrete bands), so observing distinct 50% hybrid + 50% light rules Dispersive out.', 1),
      mp('M1', 'At Gen 4 (`2⁴ = 16` dsDNA helices total), only the 2 original ¹⁵N parental single strands keep 2 hybrid ¹⁵N/¹⁴N molecules (2/16 = 12.5% hybrid) and 14/16 = 87.5% light ¹⁴N/¹⁴N.', 2),
    ],
    'Gen 1 single hybrid band disproves **Conservative**; Gen 2 two-band split disproves **Dispersive**. By Generation 4 (`16` molecules), **`12.5%` remain hybrid `¹⁵N/¹⁴N`** and **`87.5%` are pure light `¹⁴N/¹⁴N`**.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf', '2024 A1 1.2 Nucleic Acids Notes.pdf'],
    'Allott pp. 559–561 Meselson–Stahl DBQ.',
    '*E. coli* grown for many generations in `¹⁵NH₄Cl` transfers cleanly at `t = 0` into `¹⁴NH₄Cl` medium:\n- `Gen 0`: `100%` heavy (`1.724 g cm⁻³`)\n- `Gen 1`: `100%` intermediate hybrid (`1.717 g cm⁻³`)\n- `Gen 2`: `50%` hybrid + `50%` light (`1.710 g cm⁻³`)'
  ),
  // Q61 (D1.1 HL — Okazaki 3H-Thymidine Pulse-Chase DBQ, Allott p. 567)
  structured(
    'Paper 1B (Data-Based)',
    'D1.1',
    'Analyse & Explain',
    'HL Extension',
    '1. Identify what cellular fragments contain over `80%` of `³H` radioactivity after the `2 s pulse` versus after the `120 s unlabeled chase` (`2` marks).\n2. Name the two sequential enzymes uniting small lagging pieces into continuous `>100,000 nt` DNA strands during the chase (`2` marks).',
    [
      mp('A1', '2 s pulse labels short nascent ~1,000–2,000 nt Okazaki fragments on lagging strand; 120 s chase shifts label smoothly into continuous high-molecular-weight (>100,000 nt) daughter DNA.', 2),
      mp('E1', 'DNA Polymerase I removes temporary RNA primers and inserts replacement DNA nucleotides; DNA Ligase seals covalent sugar–phosphate phosphodiester nicks.', 2),
    ],
    'A `2 s` pulse traps short **`~1,500 nt` Okazaki fragments**, whereas the `120 s` chase shifts radioactivity into mature **`>100 kb` strands** once **DNA Polymerase I** swaps out RNA primers and **DNA Ligase** seals backbone nicks.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
    'Allott p. 567 Okazaki Pulse-Chase DBQ.',
    'Replicating bacteria pulsed for `2 s` with radioactive `³H-thymidine` then chased with unlabeled thymidine for `15 s -> 120 s` separated cleanly by denaturing alkaline sucrose centrifugation show radioactive peak migration from **`1,200 nt` (`2 s`)** -> **`>100,000 nt` (`120 s`)**.'
  ),
  // Q62 (D1.1 — Forensic D1S80 VNTR Gel Electrophoresis DBQ, Allott p. 565)
  structured(
    'Paper 1B (Data-Based)',
    'D1.1',
    'Deduce & Explain',
    'Standard IB',
    '1. Deduce whether **Suspect Father A** or **Suspect Father B** is the biological father, explaining using maternal inheritance (`2` marks).\n2. Explain physically why the `480 bp` allele travels farther from the cathode well than `720 bp` during electrophoresis (`2` marks).',
    [
      mp('A1', 'Child shares 520 bp cleanly with Mother -> Child\'s remaining 640 bp allele MUST be inherited paternally.', 1),
      mp('A2', 'Father A carries 640 bp while Father B lacks it (520, 600 bp) -> Suspect Father A is consistent with paternity; Father B is excluded.', 1),
      mp('E1', 'Negatively charged DNA phosphate backbones migrate toward the positive anode, and porous agarose gel acts as a molecular sieve—shorter 480 bp fragments encounter less steric drag and migrate farther.', 2),
    ],
    'Biological father = **Suspect A** (`supplies Child\'s obligate non-maternal 640 bp band`; Suspect B excluded cleanly). Negatively charged phosphate DNA travels toward the **positive anode**, with smaller **`480 bp`** bands migrating farthest through sieving agarose pores.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
    'Allott p. 565 D1S80 VNTR DBQ.',
    'PCR-amplified `D1S80` VNTR (`16 bp` repeat) gel bands relative to DNA ladder:\n- **Mother:** `520 bp`, `720 bp`\n- **Child:** `520 bp`, `640 bp`\n- **Suspect A:** `480 bp`, `640 bp`\n- **Suspect B:** `520 bp`, `600 bp`'
  ),
  // Q63 (D1.3 — UV Thymine Dimer Survival DBQ, Allott p. 607)
  structured(
    'Paper 1B (Data-Based)',
    'D1.3',
    'Analyse & Explain',
    'HL Extension',
    '1. Compare percentage survival of `E. coli uvrA⁻` repair-deficient mutants versus wild-type `uvrA⁺` at `40 J m⁻²` UV-C (`1` mark).\n2. Explain structurally how adjacent thymine dimers block `D1.1` replication and `D1.2` transcription unless **nucleotide excision repair** removes them (`3` marks).',
    [
      mp('A1', 'Wild-type uvrA⁺ survives robustly (~85–90%) at 40 J m⁻² while excision-defective uvrA⁻ drops sharply below 1%.', 1),
      mp('E1', 'UV-C photons induce covalent cyclobutane crosslinks joining neighboring Thymine bases on the same DNA strand (`TT dimer`), kinking double-helix geometry.', 1),
      mp('E2', 'Distorted templates stall DNA Pol III and RNA polymerase progression (leaving replication/transcription gaps or lethal mutations) unless NER endonucleases cleave damaged patches for DNA Pol I + ligase repair.', 2),
    ],
    'Wild-type cells survive **`~85%`** vs **`<1%`** in excision mutants. UV-C forms covalent intrastrand **thymine dimers (`T=T`)** bending the DNA helix and stalling both **DNA Pol III** (`D1.1`) and **RNA Pol** (`D1.2`).',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf', 'IB_Biology_Study Guide_Answers.txt'],
    'Allott p. 607 D1.3 End-of-Chapter UV DBQ.',
    'Exposed to `40 J m⁻²` UV-C light, wild-type *E. coli* (`uvrA⁺` nucleotide excision repair intact) shows `88%` colony survival, whereas excision-defective *E. coli* (`uvrA⁻`) drops to `0.4%` survival.'
  ),
  // Q64 (D2.3 — Solutes in Fruits Rain Splitting DBQ, Allott p. 652)
  structured(
    'Paper 1B (Data-Based)',
    'D2.3',
    'Calculate & Explain',
    'Standard IB',
    '1. Calculate total osmotic water potential difference `ΔΨw` driving rainwater (`Ψw ≈ −0.01 MPa`) into ripe cracking cherries (`Ψs = −2.10 MPa`, `Ψp = +0.60 MPa`) (`1` mark).\n2. Explain in terms of cellular sugar accumulation and cuticle strain why ripening cherries burst immediately after summer rain whereas unripe green fruit rarely splits (`3` marks).',
    [
      mp('M1', 'Ψw_cherry = -2.10 + 0.60 = -1.50 MPa; ΔΨw = -0.01 - (-1.50) = 1.49 MPa steep inward gradient.', 1),
      mp('E1', 'Ripening hydrolyzes insoluble starch into concentrated soluble glucose/fructose, pulling intracellular Ψs steeply negative (-2.10 MPa) so rainwater floods inward rapidly by osmosis through epidermal aquaporins/cuticle cracks.', 2),
      mp('E2', 'Simultaneously, pectinase enzymes soften middle-lamella cell walls during ripening, lowering wall tensile strength below rising turgor Ψp until exocarp skin splits.', 1),
    ],
    'Ripe cherry `Ψw = −1.50 MPa` creates a **`1.49 MPa` inward osmotic gradient**. High soluble sugar lowers `Ψs` deeply while ripening softens cell walls—causing rainwater influx to exceed cuticle rupture stress (`Allott p. 652`).',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
    'Allott p. 652 Solutes in Fruits DBQ.',
    'Ripening sweet cherries convert insoluble starch into concentrated glucose/fructose (`pulp Ψs = −2.10 MPa`, `Ψp = +0.60 MPa`, softening wall pectin) before sudden summer rain (`Ψw ≈ −0.01 MPa`).'
  ),
  // Q65 (D2.3 HL — Potato/Carrot Osmometer %ΔMass ± SE DBQ, Allott pp. 655–659)
  structured(
    'Paper 1B (Data-Based)',
    'D2.3',
    'Determine & Evaluate',
    'HL Extension',
    '1. Determine isotonic bath concentration (`mol dm⁻³`) and deduce mean potato tissue water potential (`Ψw`) (`2` marks).\n2. State whether wilted carrot cylinders shifted isotonic intercept higher or lower (`0.48` vs `0.34 mol dm⁻³`) and explain why blotted drying and covered beakers reduce error (`2` marks).',
    [
      mp('A1', '0.0% mass change interpolates cleanly at 0.34 mol dm⁻³ sucrose -> Ψw = Ψs = -0.83 MPa.', 2),
      mp('E1', 'Wilted carrots lost pure water earlier, concentrating solutes (making tissue Ψw MORE negative -> requiring ~0.48 mol dm⁻³ hypertonic bath to reach 0% change); standardized blotting prevents surface water mass distortion and covered beakers block evaporation raising bath molarity.', 2),
    ],
    'Isotonicity (`0.0% Δmass`) occurs at **`0.34 mol dm⁻³` (`Ψw = −0.83 MPa`)**. Dehydrated wilted tissues concentrate solutes negatively (`higher sucrose molarity at equilibrium`); uniform blotting + covered constant-temperature baths eliminate evaporative drift.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
    'Allott pp. 655–659 Osmometer DBQ.',
    '| Sucrose (`mol dm⁻³`) | Bath `Ψs` (`MPa`) | Fresh Potato Mean `%ΔMass` (± `1 SE`) |\n|---|---|---|\n| 0.0 | 0.00 | +18.2 ± 0.9 |\n| 0.2 | −0.49 | +7.6 ± 0.8 |\n| 0.34 | −0.83 | 0.0 ± 0.7 |\n| 0.5 | −1.22 | −9.8 ± 0.8 |'
  ),
  // Q66 (D2.3 HL — Oak vs Maize Drought Osmoregulation Tables 4–5 DBQ, Allott pp. 660–661)
  structured(
    'Paper 1B (Data-Based)',
    'D2.3',
    'Compare & Explain',
    'HL Extension',
    '1. Calculate maximum wall turgor pressure potential (`Ψp`) maintained at midday in well-watered vs droughted Oak (`Quercus`) leaves (`2` marks).\n2. Explain biologically why Oak maintains positive `Ψp` (`stomata open`) at soil `Ψw = −1.8 MPa` whereas Maize wilts (`Ψp = 0`) (`2` marks).',
    [
      mp('M1', 'Well-watered Oak Ψp = -0.60 - (-1.40) = +0.80 MPa; Droughted Oak Ψp = -1.90 - (-2.55) = +0.65 MPa.', 2),
      mp('E1', 'Oak actively accumulates non-toxic compatible solutes (proline, soluble sugars, K+) inside leaf vacuoles, dropping intracellular Ψs steeply from -1.40 down to -2.55 MPa (active osmotic adjustment).', 1),
      mp('E2', 'Keeping Ψw_leaf (-1.90) below dry soil (-1.80) preserves inward water uptake and guard-cell turgor (+0.65 MPa) without toxic Na+/Cl- enzyme denaturation.', 1),
    ],
    'Oak maintains **`+0.80 MPa`** (`hydrated`) and **`+0.65 MPa`** (`droughted`) turgor via **compatible-osmolyte accumulation (`proline, sugars`)** lowering `Ψs` from `−1.40` down to `−2.55 MPa`, whereas maize fails to lower `Ψs` below dry soil (`Ψp -> 0`, wilting).',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
    'Allott pp. 660–661 Drought Oak vs Maize DBQ.',
    '| Condition | Species | Midday `Ψw` (`MPa`) | Intracellular `Ψs` (`MPa`) |\n|---|---|---|---|\n| Well-Watered | Oak | −0.60 | −1.40 |\n| Drought (`Soil −1.80 MPa`) | Oak | −1.90 | −2.55 |\n| Drought (`Soil −1.80 MPa`) | Maize | −1.65 | −1.65 (`wilted`) |'
  ),

  // ==========================================================================
  // PART C — PAPER 2 (STRUCTURED & EXTENDED RESPONSE) · Q67–Q102 (36 Qs)
  // ==========================================================================
  // Q67 (A1.2 — BioK 2.6 Q5 Authentic 5-Mark DNA Drawing & Annotation)
  structured(
    'Paper 2 (Structured & Extended)',
    'A1.2',
    'Draw & Annotate',
    'Foundation',
    'Describe and annotate the exact structural features required for full credit when asked to **draw four linked nucleotides forming a 2-base-pair double-stranded segment of DNA** (`BioK 2.6 Quiz Q5 · 5 marks`).',
    [
      mp('D1', 'Show four complete nucleotides, clearly labelling phosphate (circle at C5\'), deoxyribose pentose (pentagon), and nitrogenous base (rectangle at C1\').', 1),
      mp('D2', 'Show C3\'–C5\' covalent sugar–phosphate phosphodiester linkage forming unbroken vertical backbones.', 1),
      mp('D3', 'Draw the two strands in explicit antiparallel orientation (one 5\'->3\' pentose pointing up, complementary strand inverted 3\'->5\').', 1),
      mp('D4', 'Join complementary bases with DASHED/DOTTED hydrogen bonds showing exact counts: 2 H-bonds between Adenine–Thymine and 3 H-bonds between Cytosine–Guanine.', 1),
      mp('D5', 'Write out ALL nitrogenous base names IN FULL (Adenine, Thymine, Cytosine, Guanine — bare A/T/C/G abbreviations lose mark!).', 1),
    ],
    'A full-credit DNA segment shows four properly joined nucleotides (`C5\' phosphate`, `C1\' base`, `C3\'–C5\'` covalent phosphodiester bonds), opposite **antiparallel pentose orientations**, **2 dashed H-bonds** for **Adenine–Thymine** vs **3 dashed H-bonds** for **Cytosine–Guanine**, and **all base names spelled in full**.',
    ['BioK 2.6 Quiz Answers.docx', '2024 A1 1.2 Nucleic Acids Notes.pdf'],
    'Verbatim BioK 2.6 Q5 marking rules!'
  ),
  // Q68 (A — Command Term Pair Distinction)
  structured(
    'Paper 2 (Structured & Extended)',
    'A',
    'Distinguish',
    'Foundation',
    'Distinguish how an IB Biology Paper 2 markscheme awards credit for **(a)** *Compare and contrast* versus **(b)** *Evaluate* (`4` marks).',
    [
      mp('C1', 'Compare and contrast requires BOTH explicit shared similarities AND explicit paired differences throughout (using connectors such as "both" vs "whereas").', 2),
      mp('E1', 'Evaluate requires weighing BOTH strengths/valid support AND specific methodological limitations plus direction of bias or overall justified judgement.', 2),
    ],
    '**Compare and contrast** earns paired marks ONLY when each point explicitly links both subjects (`similarity + whereas difference`). **Evaluate** weighs empirical strengths against concrete methodological limitations (`directional bias`), avoiding vague phrases like `"human error"`.',
    ['Command Terms IB BIO.pdf', 'CommandTermsVisualized.pdf']
  ),
  // Q69 (A1.1 — Water Polarity & Capillary Action)
  structured(
    'Paper 2 (Structured & Extended)',
    'A1.1',
    'Explain',
    'Foundation',
    'Explain how molecular polarity enables liquid water to climb tall tree trunks (`capillary action and transpiration stream`) and dissolve ions without breaking intramolecular bonds (`4` marks).',
    [
      mp('P1', 'Oxygen is more electronegative than hydrogen, creating polar covalent O–H dipoles with 2δ− on O and δ+ on H.', 1),
      mp('P2', 'Intermolecular hydrogen bonds link neighboring δ+ H to δ− O (cohesion), holding continuous tensile xylem water columns.', 1),
      mp('P3', 'Adhesion attracts polar water molecules onto hydrophilic cellulose/lignin xylem walls, assisting narrow capillary rise.', 1),
      mp('P4', 'Oriented water dipoles form hydration shells around Na+/Cl- or polar glucose hydroxyls without breaking O–H covalent bonds.', 1),
    ],
    'Unequal covalent sharing leaves oxygen `2δ−` and hydrogens `δ+`. Electrostatic **hydrogen bonds** generate **cohesion** pulling continuous xylem columns alongside **adhesion** to polar cellulose walls (`capillarity`), while oriented hydration shells solubilize polar ions and metabolites.',
    ['A 1.1 Water Notes.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q70 (A1.1 HL — Planetary Water Retention)
  structured(
    'Paper 2 (Structured & Extended)',
    'A1.1',
    'Outline',
    'HL Extension',
    'Outline two physical requirements enabling Earth to retain liquid surface oceans over billions of years (`A1.1.8 HL · 3 marks`).',
    [
      mp('G1', 'Goldilocks habitable orbital distance from the Sun supplies radiant flux keeping average surface temperature strictly inside liquid 0–100 °C bounds.', 1),
      mp('G2', 'Sufficient planetary mass and gravity hold water vapour molecules below escape velocity.', 1),
      mp('G3', 'Geothermal magnetic field deflects solar wind from stripping atmospheric hydrogen into space (unlike Mars).', 1),
    ],
    'Earth sits inside the solar **Goldilocks zone** (`0–100 °C` liquid equilibrium), maintains enough **gravitational mass** to retain light water vapour, and generates a **magnetosphere** shielding atmospheric H from solar-wind stripping.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q71 (A1.2 — Universal Genetic Code & Nucleosomes HL)
  structured(
    'Paper 2 (Structured & Extended)',
    'A1.2',
    'Explain',
    'HL Extension',
    'Explain how eukaryotic nucleosomes compact chromosomal DNA AND dynamically regulate transcription (`4` marks).',
    [
      mp('N1', 'Eight positive core histones (two each of H2A, H2B, H3, H4 rich in basic lysine/arginine) bind negatively charged DNA phosphates electrostatically.', 1),
      mp('N2', '~146–147 bp wraps ~1.65 turns around each octamer; external H1 linker histone locks adjacent loops into compact 30 nm chromatin fibres.', 1),
      mp('N3', 'Acetylation neutralizes positive histone tails loosening euchromatin so RNA polymerase accesses promoters; tight methylation compacts silent heterochromatin.', 2),
    ],
    'Negatively charged DNA (`~147 bp`) winds `~1.65 turns` around an 8-histone positive core octamer (`2x H2A, H2B, H3, H4`) locked externally by **H1**. Histone **acetylation** loosens open **euchromatin** for transcription, whereas deacetylation/methylation silences dense **heterochromatin**.',
    ['2024 A1 1.2 Nucleic Acids Notes.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q72 (A2.1 HL — Prebiotic Synthesis & Spontaneous Generation)
  structured(
    'Paper 2 (Structured & Extended)',
    'A2.1',
    'Explain',
    'HL Extension',
    'Explain why Pasteur proved spontaneous cell formation fails today, yet organic monomers and fatty-acid protocells could still arise abiotically `4.0 billion years ago` (`4` marks).',
    [
      mp('A1', 'Today\'s atmosphere contains ~21% free O₂ (and O₃ shield) which rapidly oxidizes exposed organic precursors, AND existing microbes immediately consume nutrient broth.', 2),
      mp('A2', 'Archean Earth lacked free O₂ (reducing hydrothermal niches + intense UV/lightning sparks) allowing Miller–Urey-style monomer synthesis and wet–dry/clay RNA polymerization.', 1),
      mp('A3', 'Amphipathic fatty acids spontaneously self-assembled into hollow protocell bilayers encapsulating catalytic RNA ribozymes free from predation.', 1),
    ],
    'Modern free `O₂` oxidizes monomers and hungry bacteria consume organics before evolution can start (`explaining Pasteur\'s sterile flasks`). Anoxic prebiotic Earth allowed reducing synthesis (`CH₄/NH₃/H₂` sparks & hydrothermal vents), clay polymerization, and spontaneous amphipathic vesicle protocells.',
    ['A 2.1 Origin of Cells Notes.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q73 (A2.2 — Microscopy Resolution & Cryo-EM)
  structured(
    'Paper 2 (Structured & Extended)',
    'A2.2',
    'Compare & Contrast',
    'Standard IB',
    'Compare and contrast **compound light microscopy**, **Transmission Electron Microscopy (`TEM`)**, and **Cryogenic Electron Microscopy (`Cryo-EM`)** (`4` marks).',
    [
      mp('M1', 'Both TEM and Cryo-EM use short-wavelength electron beams achieving ~0.2–0.5 nm resolution, whereas light microscopy uses visible photons capped near ~200 nm diffraction resolution.', 2),
      mp('M2', 'Light microscopy views living wet-mounted cells and natural colours, whereas TEM requires dead chemically fixed, dehydrated heavy-metal ultrathin sections (risking preparation artefacts).', 1),
      mp('M3', 'Cryo-EM flash-freezes aqueous proteins in liquid ethane vitreous ice with zero fixatives/stains, reconstructing native hydrated 3D atomic complexes.', 1),
    ],
    'Light microscopy resolves only `~200 nm` (`yet tracks living fluorescent cells`), whereas TEM (`~0.2–0.5 nm`) and Cryo-EM use electron beams. Unlike chemical TEM sections (`stain/dehydration artefacts`), **Cryo-EM** freezes samples instantaneously into vitreous ice preserving native hydrated 3D protein folds.',
    ['A 2.2 Microscope Notes.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q74 (A2.2 HL — Serial Endosymbiosis Evidence)
  structured(
    'Paper 2 (Structured & Extended)',
    'A2.2',
    'Outline',
    'HL Extension',
    'Outline five pieces of structural or molecular evidence supporting the origin of mitochondria and chloroplasts by **serial endosymbiosis** (`A2.2.10 HL · 5 marks`).',
    [
      mp('E1', 'Double membranes: inner bacterial membrane + outer host phagocytic vesicle.', 1),
      mp('E2', '70S ribosomes (~20 nm) inside matrix/stroma matching bacterial size rather than 80S cytosol.', 1),
      mp('E3', 'Circular naked DNA lacking eukaryotic histones, sequencing closest to α-proteobacteria and cyanobacteria.', 1),
      mp('E4', 'Independent proliferation via bacterial binary fission inside cytoplasm.', 1),
      mp('E5', 'Sensitivity of organelle translation to antibacterial antibiotics (e.g., chloramphenicol) + cristae/thylakoid ETC localization.', 1),
    ],
    'Both organelles contain **(1) double membranes**, **(2) 70S ribosomes**, **(3) circular naked DNA** matching bacterial clades, **(4) binary fission** self-division, and **(5) antibacterial translation sensitivity** (`chloramphenicol`) plus inner-membrane electron transport chains.',
    ['A2.2 Cell Structure Notes.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q75 (A2.3 HL — Phage λ Lytic vs Lysogenic Switch)
  structured(
    'Paper 2 (Structured & Extended)',
    'A2.3',
    'Distinguish',
    'HL Extension',
    'Distinguish the **lytic cycle** from the **lysogenic cycle** of temperate Bacteriophage λ, explaining what environmental stress shifts dormant prophages into active host lysis (`4` marks).',
    [
      mp('L1', 'Lytic cycle immediately hijacks host transcription/70S translation to mass-produce phage dsDNA + capsids, secreting lysozyme to rupture the peptidoglycan wall and kill the cell.', 2),
      mp('L2', 'Lysogenic cycle relies on CI repressor silencing lytic genes while integrase splices viral DNA silently into the host chromosome (prophage), replicating vertically with host binary fission.', 1),
      mp('L3', 'UV radiation or starvation triggers host RecA DNA-damage protease to cleave CI repressor, excising the prophage straight into active lytic virion production.', 1),
    ],
    'Lytic phages synthesize virions immediately and rupture bacteria with **lysozyme**, whereas lysogenic phages integrate silently as a **prophage** under **`CI` repressor** control during favorable host growth. UV DNA damage activates host `RecA` cleavage of `CI`, inducing lytic takeover.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf', '2026 Bio 5HL Course Outline.docx']
  ),
  // Q76 (A2.3 HL — Multiple Viral Origins)
  structured(
    'Paper 2 (Structured & Extended)',
    'A2.3',
    'Discuss',
    'HL Extension',
    'Discuss why viruses lack a single universal phylogenetic tree rooted in `LUCA`, naming three evolutionary origin hypotheses (`4` marks).',
    [
      mp('O1', 'Viruses share NO universal conserved gene (unlike cellular 16S/18S rRNA) and span dsDNA, ssDNA, dsRNA, and +/-ssRNA architectures—supporting polyphyletic origins.', 1),
      mp('O2', 'Progressive (escape) hypothesis: mobile plasmids or retrotransposons acquired capsid coat genes and escaped host cells.', 1),
      mp('O3', 'Regressive (reduction) hypothesis: complex obligate intracellular bacteria shed metabolism and ribosomes down to viral genomes (supported by giant Mimivirus).', 1),
      mp('O4', 'Virus-first hypothesis: pre-cellular RNA World replicators parasitizing primitive vesicles prior to LUCA, with convergent evolution shaping similar capsids/envelopes.', 1),
    ],
    'Because viruses carry zero shared universal hallmark genes, virologists combine **Progressive escape (`transposons`)**, **Regressive reduction (`giant Mimivirus`)**, and **Virus-first (`pre-LUCA replicators`)** origins—with **convergent evolution** shaping recurrent icosahedral capsids and lipid envelopes.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q77 (B1.1 — Polysaccharides Structure-Function)
  structured(
    'Paper 2 (Structured & Extended)',
    'B1.1',
    'Explain',
    'Standard IB',
    'Explain how monomer stereochemistry (`α` vs `β` glucose) adapts **glycogen** for rapid cellular ATP storage whereas **cellulose** forms high-tensile plant cell walls (`4` marks).',
    [
      mp('C1', 'Glycogen polymerizes α-D-glucose with α(1->4) helical coils and frequent α(1->6) branches (~every 8–12 residues).', 1),
      mp('C2', 'High branching maximizes exposed terminal glucose ends for simultaneous rapid hydrolysis while large insoluble polymer stays osmotically neutral.', 1),
      mp('C3', 'Cellulose joins β-D-glucose via β(1->4) linkages forcing every second glucose to invert 180°, generating straight unbranched chains.', 1),
      mp('C4', 'Parallel straight cellulose chains form abundant cross-chain H-bonds bundling into tough crystalline microfibrils resisting turgor tension.', 1),
    ],
    '**Glycogen** links `α-glucose` into compact branched helices offering numerous non-reducing ends for rapid glucose mobilization without osmotic swelling. **Cellulose** rotates alternating **`β-glucose` monomers `180°`** into flat unbranched chains cross-linked by dense **H-bonds** into strong cell-wall microfibrils.',
    ['B1 1.1 Carbs and Lipids.pdf', 'IB_Biology_Study Guide_Answers.txt']
  ),
  // Q78 (B1.2 HL — 4 Levels of Protein Architecture)
  structured(
    'Paper 2 (Structured & Extended)',
    'B1.2',
    'Explain',
    'HL Extension',
    'Explain how interactions at Primary (`1°`), Secondary (`2°`), Tertiary (`3°`), and Quaternary (`4°`) levels construct functional **haemoglobin** (`4` marks).',
    [
      mp('P1', '1°: Exact DNA-encoded linear sequence of amino acids joined by covalent peptide bonds determines folding sites.', 1),
      mp('P2', '2°: Backbone C=O ··· H-N hydrogen bonds fold chains into regular structural α-helices (globin α-helical folds).', 1),
      mp('P3', '3°: R-group hydrophobic clustering inside core + surface hydrophilic R-groups + ionic/H-bonds fold each soluble globin pocket holding haem.', 1),
      mp('P4', '4°: Assembly of four polypeptides (2α + 2β) each binding a non-protein Fe²⁺ haem prosthetic group (conjugated protein) allows cooperative O₂ transport.', 1),
    ],
    '**`1°` covalent sequence** guides **`2°` backbone H-bonded α-helices**, folded via **`3°` R-group hydrophobic cores, ionic salt bridges, and H-bonds** into compact soluble subunits; **`4°` assembly** binds `2α + 2β` subunits plus four **`Fe²⁺` haem prosthetic groups** for cooperative `O₂` delivery.',
    ['B1.2 Protein Notes.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q79 (B1.2 HL — R-Group Membrane Orientation)
  structured(
    'Paper 2 (Structured & Extended)',
    'B1.2',
    'Contrast',
    'HL Extension',
    'Contrast the spatial distribution of polar versus non-polar amino-acid R-groups inside cytosolic **enzymes (`catalase`)** versus transmembrane **channel proteins (`aquaporin`)** (`3` marks).',
    [
      mp('R1', 'Both stabilize stable folds via polar/non-polar phase partitioning matching surrounding solvent.', 1),
      mp('R2', 'In aqueous cytosolic enzymes, hydrophilic/charged R-groups coat the exterior H-bonding with water while hydrophobic non-polar R-groups bury inward.', 1),
      mp('R3', 'In integral transmembrane channels, hydrophobic non-polar R-groups face OUTWARD contacting fatty-acyl lipid tails while polar/charged R-groups line the central aqueous pore.', 1),
    ],
    'Cytosolic enzymes place **hydrophilic R-groups externally** and bury hydrophobic chains inward; transmembrane channels flip this pattern—exposing a collar of **hydrophobic R-groups externally** touching bilayer tails while lining the inner pore with **polar R-groups**.',
    ['B1.2 Protein Notes.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q80 (B2.1 — Davson–Danielli Falsification)
  structured(
    'Paper 2 (Structured & Extended)',
    'B2.1',
    'Outline',
    'Standard IB',
    'Outline three experimental observations that falsified the Davson–Danielli sandwich model in favor of Singer and Nicolson\'s **Fluid Mosaic Model** (`3` marks).',
    [
      mp('F1', 'Freeze-fracture electron microscopy cleaved along the bilayer hydrophobic core and exposed globular integral proteins embedded straight inside the lipid interior.', 1),
      mp('F2', 'Biochemical extraction revealed hydrophobic non-polar domains on integral proteins insoluble in water—incompatible with uniform surface coats.', 1),
      mp('F3', 'Frye–Edidin human–mouse cell fusion tracked red/green fluorescently tagged membrane proteins intermixing completely within ~40 min, proving lateral bilayer fluidity.', 1),
    ],
    '**(1) Freeze-fracture EM** exposed globular particles inside the hydrophobic bilayer midplane; **(2) Hydrophobic protein sequencing** showed lipid-spanning collars; and **(3) Frye–Edidin red/green antibody cell fusion** demonstrated rapid lateral fluidity.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf', 'A 2.2 Microscope Notes.pdf']
  ),
  // Q81 (B2.1 HL — Na+/K+-ATPase Cycling Mechanism)
  structured(
    'Paper 2 (Structured & Extended)',
    'B2.1',
    'Explain',
    'HL Extension',
    'Explain the mechanism by which the **sodium–potassium pump (`Na⁺/K⁺-ATPase`)** moves ions across axonal membranes against their gradients (`5` marks).',
    [
      mp('N1', 'Inward-open E1 state has high Na⁺ affinity, binding 3 cytoplasmic Na⁺ ions.', 1),
      mp('N2', 'Hydrolysis of 1 ATP -> ADP phosphorylates pump, driving conformational shift to E2 (closing cytosol before opening extracellularly so pores never stay open both sides simultaneously).', 2),
      mp('N3', 'E2 has low Na⁺ affinity (releasing 3 Na⁺ outside) and high K⁺ affinity (binding 2 extracellular K⁺ ions).', 1),
      mp('N4', 'Dephosphorylation (Pi release) snaps protein back to E1 releasing 2 K⁺ intracellularly, sustaining electrogenic −70 mV gradient.', 1),
    ],
    '3 cytosolic `Na⁺` bind `E1` -> **`1 ATP` phosphorylates pump** -> `E1 -> E2` flip exports `3 Na⁺` -> `2 K⁺` bind extracellularly -> `Pi` release restores `E1` importing **`2 K⁺`**. Strict `3:2` alternating access avoids leaky continuous pores.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q82 (B2.1 HL — Voltage-Gated K+ vs Ligand-Gated nAChR)
  structured(
    'Paper 2 (Structured & Extended)',
    'B2.1',
    'Compare & Contrast',
    'HL Extension',
    'Compare and contrast **voltage-gated potassium channels** and **ligand-gated nicotinic acetylcholine receptors (`nAChR`)** (`4` marks).',
    [
      mp('G1', 'Similarity: Both are integral transmembrane channel proteins conducting hydrated ions rapidly via passive facilitated diffusion down electrochemical gradients (zero ATP used during ion transit).', 1),
      mp('G2', 'Similarity: Both show strict ion specificity via selective pore diameters/charges.', 1),
      mp('G3', 'Difference (Trigger): Voltage-gated K+ channels open in response to axon depolarization (mV shift), whereas nAChR opens ONLY when two extracellular acetylcholine ligands bind receptor pockets.', 1),
      mp('G4', 'Difference (Ion/Role): Voltage-gated K+ exports K+ outward for action-potential repolarization, whereas nAChR allows Na+ influx depolarizing postsynaptic/muscle membranes.', 1),
    ],
    'Both execute rapid **passive facilitated ion flow** without ATP. However, voltage-gated **`K⁺` channels** open upon depolarization (`mV` shift) exporting `K⁺` to repolarize axons, whereas **nicotinic `AChR`** opens upon **2 acetylcholine ligands** binding, driving postsynaptic `Na⁺` influx.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q83 (B2.2 — Compartmentalization Benefits + Clathrin HL)
  structured(
    'Paper 2 (Structured & Extended)',
    'B2.2',
    'Explain',
    'HL Extension',
    'Explain **three advantages of eukaryotic organellar compartmentalization**, and outline how **clathrin** coats internalize membrane receptors (`5` marks).',
    [
      mp('C1', 'Concentrates enzymes & substrates locally inside stroma/matrix accelerating slow reactions (e.g., Rubisco).', 1),
      mp('C2', 'Isolates incompatible pH and dangerous hydrolases/peroxides inside sealed lysosomes (pH ~4.8) or peroxisomes away from neutral cytosol & DNA.', 1),
      mp('C3', 'Micro-volumes (intermembrane space / thylakoid lumen) amplify H+ proton gradients fast + nuclear envelope pauses transcription for mRNA splicing.', 1),
      mp('C4', 'Clathrin triskelion subunits polymerize polygonal lattices on inner cytosolic membrane pits bound to adaptors/cargo receptors, pinching vesicles inward before uncoating cleanly for endosome fusion.', 2),
    ],
    'Compartments **(1) concentrate enzymes/reactants**, **(2) wall off acidic `pH ~4.8` hydrolases/peroxides**, and **(3) accelerate `H⁺` gradients in micro-volumes + enable mRNA splicing**. **Clathrin triskelions** assemble polygonal cages pulling coated pits inward before uncoating prior to fusion.',
    ['B2.2 Organelles and Compartmentalization.pdf', 'B 2.2 Learning Goals.docx']
  ),
  // Q84 (B2.2 HL — rER to Golgi Secretory Route)
  structured(
    'Paper 2 (Structured & Extended)',
    'B2.2',
    'Outline',
    'HL Extension',
    'Outline the intracellular pathway synthesizing, modifying, and secreting an extracellular enzyme such as pancreatic amylase (`4` marks).',
    [
      mp('S1', 'N-terminal hydrophobic signal peptide directs 80S ribosome (via SRP) onto rough ER membrane translocon; polypeptide folds inside oxidizing rER lumen.', 1),
      mp('S2', 'COPII transport vesicles bud off rER and fuse onto receiving cis-Golgi cisternae.', 1),
      mp('S3', 'Cisternal maturation progresses proteins cis -> medial -> trans Golgi while modifying/glycosylating side chains and sorting tags.', 1),
      mp('S4', 'Secretory vesicles bud off trans-Golgi along microtubules and undergo Ca²⁺-triggered exocytosis fusing with apical plasma membrane.', 1),
    ],
    'Signal peptide + SRP docks **80S ribosome** onto **rER** -> luminal folding/disulfide assembly -> vesicles fuse onto **`cis`-Golgi** -> glycosylation via **cisternal maturation -> `trans`-Golgi** -> secretory vesicles fuse outward via **exocytosis**.',
    ['B2.2 Organelles and Compartmentalization.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q85 (B2.3 — Stem Cells & Potency Ethics)
  structured(
    'Paper 2 (Structured & Extended)',
    'B2.3',
    'Compare & Discuss',
    'Standard IB',
    'Compare **totipotent, pluripotent, and multipotent stem cells**, and briefly discuss one therapeutic advantage of **iPSCs** over embryonic stem cells (`5` marks).',
    [
      mp('P1', 'All stem cells self-renew via mitosis and retain identical diploid DNA, differing in differential gene expression accessibility.', 1),
      mp('P2', 'Totipotent (zygote/early morula) forms all embryonic + extraembryonic placental tissues; Pluripotent (blastocyst inner mass) forms all 3 embryo germ layers ONLY; Multipotent (adult marrow/crypts) is restricted to one tissue family.', 2),
      mp('P3', 'iPSCs reprogram adult patient skin/blood cells back to pluripotency cleanly, avoiding blastocyst destruction ethics AND preventing HLA immune transplant rejection (autologous match).', 2),
    ],
    'Totipotent forms **embryo + placenta**; pluripotent forms **all embryo layers**; multipotent restores **one lineage**. **Induced pluripotent stem cells (`iPSCs`)** regenerate patient-matched tissues without destroying embryos or provoking immune rejection.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q86 (B2.3 HL — Gamete Adaptations)
  structured(
    'Paper 2 (Structured & Extended)',
    'B2.3',
    'Explain',
    'HL Extension',
    'Explain **four** structural adaptations linking **mammalian sperm** (`2`) and **human secondary oocyte (`ovum`, `2`)** geometry directly to fertilization success (`4` marks).',
    [
      mp('G1', 'Sperm: Acrosome contains hydrolytic enzymes digesting corona radiata & zona pellucida; stripped cytoplasm + spiral midpiece mitochondria power 9+2 dynein flagellar propulsion.', 2),
      mp('G2', 'Ovum: Massive lipid/protein yolk cytoplasm + ~100,000 mitochondria sustain zygote cleavage prior to implantation; peripheral cortical granules exocytose enzymes hardening zona pellucida to block polyspermy.', 2),
    ],
    'Streamlined sperm carry hydrolytic **acrosomes**, dense **spiral midpiece mitochondria**, and **`9+2` flagella**. Large nutrient-rich eggs pack abundant cytosol + **cortical granules** whose post-fusion exocytosis cross-links the **zona pellucida** against lethal polyspermy.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q87 (C1.1 — Temperature, pH & Induced-Fit Denaturation)
  structured(
    'Paper 2 (Structured & Extended)',
    'C1.1',
    'Explain',
    'Standard IB',
    'Explain the **induced-fit model** of enzyme catalysis and describe why reaction rate climbs smoothly from `10 °C` to `37 °C` yet crashes sharply at `65 °C` (`5` marks).',
    [
      mp('I1', 'In induced-fit catalysis, weak initial binding induces conformational shape flexing across the active site, straining substrate bonds toward the transition state and lowering Ea (ΔG unchanged).', 2),
      mp('I2', '10->37 °C: Higher thermal kinetic energy speeds molecular motion, raising collision frequency and the proportion of collisions surpassing Ea.', 1),
      mp('I3', '>45–65 °C: Excessive atomic vibrations break weak tertiary H-bonds and hydrophobic interactions, permanently altering 3D active-site shape (denaturation, leaving 1° peptide bonds intact).', 2),
    ],
    'Substrate binding induces conformational flexing stabilizing the transition state (**lowering `Ea`**). Warming (`10->37 °C`) boosts kinetic energy and collision frequency; overheating (`65 °C`) snaps weak `3°` **hydrogen bonds**, denaturing the active site irreversibly.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf', 'IB_Biology_Study Guide_Answers.txt']
  ),
  // Q88 (C1.1 HL — End-Product Isoleucine Feedback vs Penicillin)
  structured(
    'Paper 2 (Structured & Extended)',
    'C1.1',
    'Compare & Contrast',
    'HL Extension',
    'Contrast **isoleucine allosteric end-product inhibition** (`threonine -> isoleucine`) with **penicillin inhibition** of bacterial cell-wall synthesis (`4` marks).',
    [
      mp('R1', 'Isoleucine binds REVERSIBLY at a separate allosteric site on Enzyme 1 (threonine deaminase), inducing an inactive shape until cellular demand consumes isoleucine.', 2),
      mp('R2', 'Penicillin binds IRREVERSIBLY inside the active site of bacterial DD-transpeptidase, forming a covalent bond via its β-lactam ring.', 1),
      mp('R3', 'Outcome: Isoleucine provides homeostatic metabolic regulation conserving ATP/intermediates safely; penicillin kills dividing bacteria via uncrosslinked osmotic cell-wall rupture.', 1),
    ],
    '**Isoleucine** binds **reversibly** to an **allosteric regulatory site** on Enzyme 1 (`homeostatic feedback`), whereas **penicillin** acts as a mechanism-based inhibitor forming an **irreversible covalent bond** inside bacterial **transpeptidase** active sites (`causing osmotic lysis`).',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q89 (C1.2 HL — Glycolysis vs Link Reaction vs Krebs Matrix Carbon Flow)
  structured(
    'Paper 2 (Structured & Extended)',
    'C1.2',
    'Outline',
    'HL Extension',
    'Trace carbon atoms, decarboxylations, and reduced coenzymes (`NADH / FADH₂`) per molecule of glucose across **glycolysis, the Link reaction, and the Krebs cycle** (`5` marks).',
    [
      mp('C1', 'Glycolysis (cytosol): 6C glucose phosphorylated (-2 ATP) -> lysis into two 3C TP -> oxidized yielding 2 NADH + 4 gross (+2 net) ATP + two 3C pyruvate.', 2),
      mp('C2', 'Link reaction (matrix, x2): Each 3C pyruvate undergoes oxidative decarboxylation losing 1 CO₂ (2 total) + forming 1 NADH (2 total) + 2C acetyl-CoA.', 1),
      mp('C3', 'Krebs cycle (matrix, x2): 2C acetyl-CoA + 4C oxaloacetate -> 6C citrate -> two decarboxylations + four oxidations regenerate oxaloacetate, releasing 4 CO₂ + 6 NADH + 2 FADH₂ + 2 ATP per glucose.', 2),
    ],
    'Per glucose: **Glycolysis** (`2 pyruvate, 2 NADH, +2 net ATP`) -> **Link** (`2 acetyl-CoA, 2 CO₂, 2 NADH`) -> **Krebs (2 turns)** (`4 CO₂, 6 NADH, 2 FADH₂, 2 ATP`), loading **10 NADH + 2 FADH₂** for cristae ETC.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q90 (C1.2 HL — Cyanide & Lipid β-Oxidation)
  structured(
    'Paper 2 (Structured & Extended)',
    'C1.2',
    'Explain',
    'HL Extension',
    'Explain why **cyanide** (`blocks Complex IV`) halts the Krebs cycle inside the matrix even without touching Krebs enzymes directly, AND why fatty acids cannot generate ATP under pure anoxia (`4` marks).',
    [
      mp('Y1', 'Blocking Complex IV stops electrons transferring onto terminal O₂, jamming ubiquinone/Complex I–III completely.', 1),
      mp('Y2', 'NADH and FADH₂ can no longer be re-oxidized back into NAD+ and FAD—halting Link & Krebs dehydrogenase steps for lack of oxidized acceptors.', 1),
      mp('Y3', 'Fatty-acid β-oxidation produces acetyl-CoA, NADH, and FADH₂ directly inside mitochondria WITHOUT cytosolic substrate-level ATP generation.', 1),
      mp('Y4', 'Because β-oxidation cannot run lactate/ethanol anaerobic fermentation to clear NADH, lipid ATP yield drops cleanly to zero without O₂.', 1),
    ],
    'Inhibiting Complex IV backs up electron carriers so `NADH/FADH₂` cannot re-oxidize into `NAD⁺/FAD`, stalling Krebs dehydrogenases instantly. Unlike glucose glycolysis (`+2 net ATP`), lipid **β-oxidation** feeds acetyl-CoA/NADH exclusively into O₂-dependent mitochondria.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q91 (C1.3 — Absorption vs Action Spectrum & Accessory Pigments)
  structured(
    'Paper 2 (Structured & Extended)',
    'C1.3',
    'Explain',
    'Standard IB',
    'Explain the relationship between a leaf\'s **chlorophyll absorption spectrum** and **Engelmann\'s action spectrum**, noting why green leaves reflect ~`550 nm` and why carotenoids broaden blue-green efficiency (`4` marks).',
    [
      mp('S1', 'Absorption spectrum measures % photons absorbed by extracted chlorophylls across 400–700 nm (strong violet-blue ~430–470 nm and red ~640–680 nm peaks; green ~550 nm valley).', 1),
      mp('S2', 'Action spectrum plots overall photosynthesis / O₂ rate across intact chloroplasts (Engelmann aerotactic bacteria swarming over blue & red Spirogyra zones).', 1),
      mp('S3', 'Close peak overlap confirms blue and red photons power PSII/PSI photolysis and Calvin assimilation; unabsorbed green ~550 nm wavelengths reflect outward.', 1),
      mp('S4', 'Accessory carotenoids absorb blue-green (~480–520 nm) photons transferring excitation onward to chlorophyll a, raising action spectrum higher in green-blue regions than pure Chl a alone.', 1),
    ],
    'Both spectra peak in **violet-blue (`~450 nm`)** and **red (`~670 nm`)** where chlorophylls drive photosynthesis while reflecting green (`~550 nm`). Accessory **carotenoids** bridge blue-green gaps and quench photo-oxidative stress.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf', 'IB_Biology_Study Guide_Answers.txt']
  ),
  // Q92 (C1.3 HL — Z-Scheme Photolysis & Calvin Cycle Linkage)
  structured(
    'Paper 2 (Structured & Extended)',
    'C1.3',
    'Explain',
    'HL Extension',
    'Trace electron, proton, and carbon flow linking **thylakoid light reactions** directly to **stromal triose phosphate (`TP`) synthesis** (`5` marks).',
    [
      mp('Z1', 'PSII (P680) absorbs photons ejecting electrons -> water photolysis inside lumen (2 H₂O -> O₂ + 4 H⁺ + 4 e⁻) replaces P680+ electrons and raises lumen [H+].', 1),
      mp('Z2', 'Plastoquinone (PQ) pumps stromal protons via Cyt b6f into lumen before PC transfers electrons to PSI (P700), which reduces stromal NADP+ -> NADPH via ferredoxin & NADP+ reductase.', 2),
      mp('Z3', 'Lumen H+ returns to stroma through ATP synthase driving ADP + Pi -> ATP (supplemented by cyclic PSI flow for 1.50 ATP : NADPH ratio).', 1),
      mp('Z4', 'Stromal Rubisco fixes CO₂ onto 5C RuBP -> 3C GP, immediately phosphorylated by ATP and reduced by NADPH into 3C TP (5/6 TP rebuild RuBP; 1/6 exits to glucose/starch).', 1),
    ],
    'Lumen **photolysis (`PSII`)** + **PQ/`Cyt b₆f`** proton pumping power stromal **ATP synthase** and **`PSI` -> `NADPH`**, fueling **Rubisco (`CO₂ + RuBP -> GP`)** reduction cleanly into exportable **`TP`** (`1/6 net gain`) + regenerated **`RuBP` (`5/6 recycled`)**.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q93 (D2.3 — Normal Saline vs Animal/Plant Tonicity)
  structured(
    'Paper 2 (Structured & Extended)',
    'D2.3',
    'Explain',
    'Standard IB',
    'Explain why intravenous drips use strictly **`0.154 mol dm⁻³ NaCl` (`normal medical saline`)** rather than distilled water or concentrated brine, and contrast animal red blood cells against plant cells in distilled water (`4` marks).',
    [
      mp('W1', '0.154 mol dm⁻³ NaCl matches human plasma/erythrocyte water potential (isotonic, ~−0.74 MPa), keeping net osmotic water flux zero so biconcave RBC shape stays intact.', 1),
      mp('W2', 'Distilled water (hypotonic, Ψw = 0) enters RBCs rapidly via aquaporins down Ψw gradient; lacking cellulose walls (Ψp = 0), RBCs swell and burst (haemolysis).', 1),
      mp('W3', 'Concentrated hypertonic brine draws water outward causing RBC crenation.', 1),
      mp('W4', 'In contrast, walled plant cells swell only until cellulose wall resistance builds positive pressure potential (Ψp = −Ψs -> Ψw_cell = 0), becoming healthy turgid cells without lysis.', 1),
    ],
    '`0.154 M NaCl` stays strictly **isotonic** to plasma (`zero net osmosis`). Hypotonic pure water lyses wall-less RBCs (**haemolysis**) and hypertonic brine causes **crenation**, whereas plant **cellulose walls** generate balancing **`+Ψp` turgor** preventing rupture.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q94 (D1.1 HL — Replisome Proofreading & Pyrophosphate Energetics)
  structured(
    'Paper 2 (Structured & Extended)',
    'D1.1',
    'Explain',
    'HL Extension',
    'Explain **(a)** how free dNTP nucleoside triphosphates fuel `5\' -> 3\'` polymerization without extra ATP hydrolysis at DNA Pol III, **(b)** why lagging strands form Okazaki fragments, and **(c)** how DNA Pol III keeps error rates below `10⁻⁹` (`5` marks).',
    [
      mp('D1', 'Incoming dNTPs carry three high-energy phosphate groups; cleavage of pyrophosphate (PPi) provides free energy directly for forming the 3\'->5\' phosphodiester bond.', 1),
      mp('D2', 'DNA strands run antiparallel while DNA Pol III adds bases ONLY onto free 3\'-OH (synthesizing strictly 5\'->3\'); thus leading grows continuously toward helicase while lagging template forces backward discontinuous synthesis from repeated RNA primers (Okazaki fragments).', 2),
      mp('D3', 'DNA Pol I removes RNA primers and Ligase seals backbone nicks.', 1),
      mp('D4', 'DNA Pol III uses built-in 3\'->5\' exonuclease proofreading to back up and excise mispaired bases instantaneously during replication.', 1),
    ],
    'Cleaving high-energy **`PPi`** off incoming **`dNTPs`** powers `5\'->3\'` covalent addition. Antiparallel orientation forces discontinuous **Okazaki fragments** (`primed by primase, filled by Pol I, joined by ligase`) alongside **`3\'->5\'` exonuclease proofreading**.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf', '2024 A1 1.2 Nucleic Acids Notes.pdf']
  ),
  // Q95 (D1.2 HL — Promoters, Alternative Splicing & Preproinsulin)
  structured(
    'Paper 2 (Structured & Extended)',
    'D1.2',
    'Explain',
    'HL Extension',
    'Explain three post-transcriptional or post-translational mechanisms (`D1.2 HL`) enabling `~20,000` human genes to produce over `100,000` functional protein isoforms (`5` marks).',
    [
      mp('E1', 'Nuclear processing adds 5\' methyl-G cap (ribosome binding + nuclease shield) and 3\' poly-A tail (stability/export) to pre-mRNA separated from cytosol by nuclear pores.', 1),
      mp('E2', 'Spliceosomes excise non-coding introns and execute alternative splicing (e.g., developmental cardiac Troponin T TNNT2 Exon 5), yielding distinct mature mRNAs from one gene.', 2),
      mp('E3', 'Post-translational cleavage removes signal peptides and internal C-peptide (preproinsulin -> proinsulin -> active 2-chain insulin), alongside reversible phosphorylation/glycosylation.', 2),
    ],
    'Nuclear pre-mRNA maturation (`5\' cap, 3\' poly-A`) paired with **alternative splicing (`TNNT2` exons)** produces distinct polypeptides from one gene, further tailored by **post-translational cleavage (`preproinsulin -> insulin`)** and chemical modifications.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf', 'B2.2 Organelles and Compartmentalization.pdf']
  ),
  // Q96 (D3.2 — Mendel Dihybrid Inheritance & Chi-Squared Test Foundation)
  structured(
    'Paper 2 (Structured & Extended)',
    'D3.2',
    'Calculate & Deduce',
    'Standard IB',
    'In a `D3.2` genetic cross between two unlinked heterozygous `AaBb × AaBb` maize plants (`400` progeny expected in `9:3:3:1` phenotypic classes: `[225, 75, 75, 25]`), observed F2 counts were `[282, 18, 22, 78]`. Calculate `χ²` and deduce whether alleles are independently assorted (`critical χ²` at `df = 3, p = 0.05` is **`7.815`**) (`4` marks).',
    [
      mp('M1', 'Compute χ² = Σ (O - E)² / E = (282-225)²/225 + (18-75)²/75 + (22-75)²/75 + (78-25)²/25.', 1),
      mp('M2', '= 14.44 + 43.32 + 37.45 + 112.36 = 207.57.', 2),
      mp('A1', 'Since 207.57 >> 7.815 (p << 0.05), reject null hypothesis H₀ of independent assortment; parental phenotypes (282, 78) massively outnumber recombinants (18, 22), proving autosomal gene linkage!', 1),
    ],
    '`χ²` = **`207.57`** (`>> 7.815` critical at `df = 3`). Reject independent assortment: massive excess of parental phenotypes indicates **autosomal linkage** on the same chromosome (`recombinants 18 + 22 arose solely via meiotic chiasmata crossing-over`).',
    ['2026 Bio 5HL Course Outline.docx', 'IB_Biology_Study Guide_Answers.txt']
  ),
  // Q97 (D3.3 — Insulin vs Glucagon Negative Feedback Homeostasis)
  structured(
    'Paper 2 (Structured & Extended)',
    'D3.3',
    'Explain',
    'Standard IB',
    'Explain how pancreatic **islets of Langerhans** restore homeostatic blood glucose (~`5.0 mmol dm⁻³`) via antagonistic **negative feedback** following a high-carbohydrate meal versus an overnight fast (`5` marks).',
    [
      mp('H1', 'Post-meal hyperglycemia detected directly by β-cells in islets of Langerhans -> exocytosis of insulin into bloodstream.', 1),
      mp('H2', 'Insulin binds skeletal muscle/adipose receptors triggering GLUT4 glucose-channel insertion AND activates hepatocyte/muscle glycogenesis (glucose -> glycogen) + cellular respiration.', 2),
      mp('H3', 'Overnight fasting hypoglycemia detected by pancreatic α-cells -> glucagon secretion.', 1),
      mp('H4', 'Glucagon acts strictly on liver hepatocytes activating glycogenolysis (glycogen -> glucose) and gluconeogenesis, returning blood glucose toward ~5.0 mmol dm⁻³.', 1),
    ],
    'High blood glucose stimulates pancreatic **β-cells** to secrete **insulin** (`promoting GLUT4 glucose uptake + hepatocyte glycogenesis`); low fasting glucose stimulates **α-cells** to secrete **glucagon** (`activating liver glycogenolysis + gluconeogenesis`), oscillating tightly around `~5 mmol dm⁻³`.',
    ['2026 Bio 5HL Course Outline.docx', 'B1 1.1 Carbs and Lipids.pdf', 'IB_Biology_Study Guide_Answers.txt']
  ),

  // ==========================================================================
  // FIVE 6–8 MARK PAPER 2 SECTION B EXTENDED-RESPONSE SYNTHESIS ESSAYS (Q98–Q102)
  // ==========================================================================
  // Q98 (Section B Essay 1 — Theme A Origin & Unity vs Diversity of Cells & Viruses)
  structured(
    'Paper 2 (Structured & Extended)',
    'A2.3',
    'Compare & Explain',
    'HL Extension',
    '**Section B Extended Response (`8` marks):** Compare and contrast the cellular organization of **prokaryotes**, **compartmentalized eukaryotic cells**, and **viruses** (`SARS-CoV-2` and `Bacteriophage λ`), and explain how evolutionary theories account for organelles (`endosymbiosis`) versus polyphyletic viruses.',
    [
      mp('B1', 'Universal cell baseline: prokaryotes & eukaryotes share plasma membrane, cytoplasm, dsDNA, and ribosomes, whereas acellular viruses lack cytoplasm, autonomous ATP synthesis, and ribosomes completely.', 2),
      mp('B2', 'Prokaryotes carry circular naked DNA in nucleoids, peptidoglycan walls, 70S ribosomes, and divide by binary fission; eukaryotes pack linear histone DNA inside double nuclear envelopes (separating transcription/splicing from 80S translation) and membrane organelles.', 2),
      mp('B3', 'Viral diversity contrast: Phage λ injects dsDNA via non-enveloped tail (lytic vs lysogenic CI/Cro prophage), whereas SARS-CoV-2 uses a host-derived soap-vulnerable phospholipid envelope + Spike->ACE2 + direct +ssRNA RdRp translation.', 2),
      mp('B4', 'Evolutionary contrast: mitochondria/chloroplasts share double membranes, 70S ribosomes, circular DNA, and binary fission (serial endosymbiosis), whereas viruses lack shared universal genes—supporting progressive escape, regressive reduction, and virus-first origins.', 2),
    ],
    'Both prokaryotes (`70S, naked circular DNA, binary fission`) and eukaryotes (`80S cytosol, linear histone chromatin, organelles`) constitute autonomous self-dividing cells, whereas acellular **viruses** carry only nucleic acid + repeating **capsomeres** (`Phage λ dsDNA vs SARS-CoV-2 enveloped +ssRNA`). Mitochondria and chloroplasts arose sequentially via **serial endosymbiosis** (`double membrane, 70S, circular DNA, binary fission`), while diverse non-homologous viral lineages point to **polyphyletic progressive, regressive, and virus-first** origins.',
    ['A2.2 Cell Structure Notes.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q99 (Section B Essay 2 — Theme B Macromolecules -> Membranes -> Transporters)
  structured(
    'Paper 2 (Structured & Extended)',
    'B2.1',
    'Explain',
    'HL Extension',
    '**Section B Extended Response (`7` marks):** Explain how the chemical polarity of **phospholipids, cholesterol, and variable amino-acid R-groups (`B1.1–B1.2`)** builds selectively permeable fluid-mosaic membranes capable of both passive gated flux and indirect active glucose absorption (`SGLT1`) across human gut epithelia.',
    [
      mp('M1', 'Amphipathic phospholipids (polar phosphate heads + two non-polar tails) self-assemble hydrophobic cores impermeable to hydrophilic ions/glucose while cis-kinked unsaturated tails preserve fluidity.', 2),
      mp('M2', 'Amphipathic cholesterol buffers fluidity bidirectionally (dampening excess heat melting AND disrupting tight crystal freezing at low T).', 1),
      mp('M3', 'Integral proteins orient hydrophobic non-polar R-groups outside contacting acyl tails and polar/charged R-groups lining aqueous pores (facilitating passive channels/aquaporins).', 2),
      mp('M4', 'Basolateral Na⁺/K⁺-ATPase pumps 3 Na⁺ out : 2 K⁺ in per ATP (E1<->E2), powering apical SGLT1 symporters to import 1 uphill intestinal glucose alongside 2 Na⁺ flowing down-gradient.', 2),
    ],
    '**Amphipathic phospholipids** construct selective bilayers buffered across temperature swings by **`cis` kinks + bidirectional cholesterol**. Integral channels expose **hydrophobic R-groups externally** and polar interiors, while basolateral **`Na⁺/K⁺-ATPase` (`3:2`)** creates the steep inward `Na⁺` gradient driving apical **`SGLT1`** uphill glucose absorption (`and clinical ORS rehydration`).',
    ['B1 1.1 Carbs and Lipids.pdf', 'B1.2 Protein Notes.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf']
  ),
  // Q100 (Section B Essay 3 — Theme C Chemiosmosis Unification: Mitochondria vs Chloroplasts)
  structured(
    'Paper 2 (Structured & Extended)',
    'C1.3',
    'Compare & Explain',
    'HL Extension',
    '**Section B Extended Response (`8` marks):** Compare and explain **chemiosmotic ATP synthesis (`oxidative phosphorylation` vs `photophosphorylation`)** across **mitochondrial cristae (`C1.2`)** and **chloroplast thylakoids (`C1.3`)**, highlighting compartmentalization (`B2.2`), electron donors/acceptors, and experimental evidence (`Jagendorf`).',
    [
      mp('E1', 'Both rely on folded inner membranes enclosing ultra-tiny proton reservoirs (cristae intermembrane space vs thylakoid lumen) so minimal H+ pumping generates rapid electrochemical proton-motive forces.', 2),
      mp('E2', 'Mitochondria: chemical glucose/fatty acid oxidation loads NADH (Complex I -> 2.5 ATP) & FADH₂ (Complex II -> 1.5 ATP); electrons drop down Complexes I–IV onto terminal O₂ + 2H⁺ -> H₂O.', 2),
      mp('E3', 'Chloroplasts: solar photons energize PSII P680 (water photolysis deposits lumen H⁺ + O₂ gas) and PSI P700; PQ/Cyt b6f pump stromal protons inward while PSI reduces stromal NADP⁺ -> NADPH (+ cyclic PSI bonus ATP).', 2),
      mp('E4', 'Both route H⁺ down-gradient through rotary FoF1 ATP synthase producing matrix/stromal ATP; proved causally by Jagendorf\'s dark pH 4->8 acid bath generating dark ATP without photons or ETC.', 2),
    ],
    'Both bioenergetic organelles exploit folded **cristae/thylakoids (`B2.2`)** around tiny proton reservoirs to drive rotary **`FoF1 ATP synthase`**. Mitochondria strip electrons from `NADH/FADH₂` onto terminal **`O₂ -> H₂O`** (`~30–32 ATP`), whereas chloroplasts harvest solar photons to oxidize **`H₂O -> O₂` (`PSII`)** and pump protons via **`PQ/Cyt b₆f`** to reduce stromal **`NADP⁺`**—directly verified by **Jagendorf\'s `1966` dark `pH 4->8` acid-bath ATP synthesis**.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf', 'B2.2 Organelles and Compartmentalization.pdf']
  ),
  // Q101 (Section B Essay 4 — Theme D Molecular Continuity: Replication -> Expression -> Proteome)
  structured(
    'Paper 2 (Structured & Extended)',
    'D1.1',
    'Explain',
    'HL Extension',
    '**Section B Extended Response (`8` marks):** Explain how molecular mechanisms ensure high-fidelity genetic inheritance during **semi-conservative DNA replication (`D1.1`)** while still allowing one fixed genome to manufacture diverse tissue-specific proteomes (`D1.2` + `B2.3`).',
    [
      mp('G1', 'Meselson–Stahl confirmed semi-conservative template pairing (A=T, G≡C) preserved by helicase, gyrase, and 5\'->3\' DNA Pol III using dNTP->dNMP+PPi energy + lagging Okazaki primers excised by Pol I + ligase.', 3),
      mp('G2', 'Fidelity kept <10⁻⁹ errors/bp via DNA Pol III 3\'->5\' exonuclease proofreading (vs somatic nucleotide excision repair of UV dimers).', 1),
      mp('G3', 'Transcription initiation uses non-coding promoters/enhancers + chromatin histone acetylation/methylation (`A1.2/B2.3`) to run differential tissue-specific gene expression.', 2),
      mp('G4', 'Nuclear envelope decoupling (`B2.2`) lets spliceosomes run alternative splicing (`TNNT2` exons) + 5\' cap/poly-A protection, followed by post-translational cleavage (`preproinsulin -> insulin`) and proteasome recycling.', 2),
    ],
    'Complementary `5\'->3\'` **DNA Pol III** polymerization with **Okazaki maturation (`Pol I + ligase`)** and **`3\'->5\'` exonuclease proofreading** locks faithful inheritance across generations. Meanwhile, **promoter/chromatin regulation**, **TNNT2 alternative splicing** inside separated nuclei, and **post-translational proteolytic processing (`preproinsulin`)** allow identical diploid chromosomes to build >100,000 tissue-specialized proteins.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf', '2024 A1 1.2 Nucleic Acids Notes.pdf']
  ),
  // Q102 (Section B Essay 5 — Theme A/D Synthesis: IA Experimental Evaluation + Ψw Osmometry)
  structured(
    'Paper 2 (Structured & Extended)',
    'D2.3',
    'Design & Explain',
    'Standard IB',
    '**Section B Experimental Design (`7` marks):** Design a rigorous May 2028 IB Internal Assessment investigation determining the exact intracellular water potential (`Ψs` at incipient zero turgor) of **potato tuber tissue**, justifying **5 quantitative design controls** and explaining cellular osmotic behavior at hypotonic vs hypertonic extremes.',
    [
      mp('I1', 'Research Design: >=5 sucrose molarities (0.0, 0.1, 0.2, 0.3, 0.4, 0.5 mol dm⁻³ -> spanning hypotonic to hypertonic) with >=5 uniform skinless cylinders per bath (identical diameter/length SA:V).', 2),
      mp('I2', 'Controls: Covered beakers inside constant 20.0 ± 0.5 °C water bath (keeps Ψs = −iCRT fixed and stops evaporative molarity drift), identical gentle towel blotting pre/post weighing, timed 45 min immersion.', 2),
      mp('I3', 'Analysis: Compute %Δmass = (mf - mi)/mi × 100, plot mean ± 1 SD/SE against bath Ψs, interpolate 0.0% mass-change x-intercept (= bulk tissue Ψw).', 1),
      mp('I4', 'Mechanism: At hypotonic 0 M, water enters via aquaporins down Ψw until rigid cellulose walls generate +Ψp turgor stopping lysis; at hypertonic 0.5 M, water exits until protoplasts shrink off walls (plasmolysis, Ψp = 0).', 2),
    ],
    'Expose `>=5` uniform peeled potato cylinders across `>=5` covered constant-temperature sucrose molarities (`0.0–0.5 M` at `20 °C`, standardized blotting). Plotting `%Δmass ± SD` locates tissue isotonicity at `0%` change. Hypotonically, positive cellulose-wall **`+Ψp` turgor** prevents cytolysis; hypertonically, outward osmosis triggers **plasmolysis (`Ψp = 0`)**.',
    ['Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf', '2026 Bio 5HL Course Outline.docx']
  ),
];
