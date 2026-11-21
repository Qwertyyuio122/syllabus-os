import type { SubjectClassroomSeed } from './types';
import {
  CELL_ULTRASTRUCTURE_LAB,
  COMMAND_TERMS_MATRIX,
  DNA_NUCLEOSOME_EXPLORER,
  ENHANCED_COMPARTMENT_EXPLORER,
  ENHANCED_WATER_EXPLORER,
  MACROMOLECULES_EXPLORER,
  MICROSCOPE_EXPLORER,
  ORIGIN_APPARATUS_EXPLORER,
  PROTEIN_STRUCTURE_EXPLORER,
  ULTRACENTRIFUGATION_STEPS,
} from './enhanced-diagrams';

export const BIOLOGY_HL_SEED: SubjectClassroomSeed = {
  slug: 'biology-hl',
  materials: [
    {
      fileName: 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf',
      fileType: 'pdf',
      topicCode: 'A1.1',
      extractedText: [
        'Official Course Textbook (102 MB — Indexed Reference for Themes A–D): Andrew Allott & David Mindorff, IB Diploma Programme Biology Course Companion (Oxford University Press, 2023 Edition).',
        '- Theme A Unity & Diversity: A1.1 Water (pp. 2–13), A1.2 Nucleic Acids (pp. 14–27), A2.1 Origins of Cells HL (pp. 28–38), A2.2 Cell Structure & Microscopy (pp. 39–55), A2.3 Viruses HL (pp. 56–67), A3.1–A4.2 Classification, Cladistics & Biodiversity (pp. 68–129).',
        '- Theme B Form & Function: B1.1 Carbohydrates & Lipids (pp. 130–149), B1.2 Proteins (pp. 150–167), B2.1 Membranes & Membrane Transport (pp. 168–187), B2.2 Organelles & Compartmentalization (pp. 188–202), B2.3 Cell Specialization, B3.1–B4.2 Gas Exchange, Transport, Muscle & Ecological Niches.',
        '- Theme C Interaction & Interdependence: C1.1 Enzymes & Metabolism, C1.2 Cell Respiration, C1.3 Photosynthesis, C2.1–C3.2 Signalling, Neural/Hormonal Integration & Immunity, C4.1–C4.2 Populations & Ecosystems.',
        '- Theme D Continuity & Change: D1.1–D1.3 DNA Replication, Transcription/Translation & Mutation, D2.1–D2.3 Cell Division, Gene Expression & Water Potential, D3.1–D3.3 Reproduction, Inheritance & Homeostasis, D4.1–D4.3 Natural Selection & Climate Change.',
      ].join('\n'),
    },
    {
      fileName: '2026 Bio 5HL Course Outline.docx',
      fileType: 'docx',
      topicCode: null,
      externalUrl: 'https://drive.google.com/file/d/1yUpmwdoFNow4ZNYaZOex7cESv7CVmtZN/view?usp=drivesdk',
      extractedText: [
        'CRHS IB Biology HL Year 1 (BIO 621A / 5HL, 2026–2027) — Instructor: Catherine MacDougall.',
        'Texts: Allott & Mindorff, Biology Course Companion (Oxford, 2023 ed.) and Kognity IB Biology.',
        'Year 1 Topic Sequence (Units #1–#20): A1.1 Water -> B1.1 Carbohydrates & Lipids -> B1.2 Proteins -> A1.2 Nucleic Acids -> A2.1 Origins of Cells (HL) -> A2.2 Cell Structure -> B2.2 Organelles & Compartmentalization -> A2.3 Viruses (HL) -> B2.1 Membranes & Membrane Transport -> D2.3 Water Potential -> B2.3 Cell Specialization -> C1.1 Enzymes & Metabolism -> C1.2 Cell Respiration -> C1.3 Photosynthesis -> D3.3 Homeostasis -> B3.1 Gas Exchange -> B3.2 Transport -> C3.2 Defense Against Disease -> B3.3 Muscle & Motility (HL) -> C2.1 Chemical Signalling (HL).',
        'Year 2 (6HL) Units #21–#40 complete Themes A, B, C, and D plus the IA Scientific Investigation (max 3,000 words, 24 marks across 4×6-mark criteria: Research Design, Data Analysis, Conclusion, Evaluation; 20% of IB grade).',
        'IB External Assessment (May 2028 HL): Paper 1 (36%, 2h: 1A 40 MCQs + 1B 4 data-based/experimental questions), Paper 2 (44%, 2h30: Section A 48–50m short answer + Section B choose 2 of 3 extended-response essays; 80 marks total). NO Paper 3 in 2025+ Biology guide.',
      ].join('\n'),
    },
    {
      fileName: 'Command Terms IB BIO.pdf',
      fileType: 'pdf',
      topicCode: null,
      externalUrl: 'https://drive.google.com/file/d/1y0V8IHzd4RJC4DY6AAQccOyZI3FsRUup/view?usp=drivesdk',
      extractedText: [
        'IB Biology Command Terms by Assessment Objective (AO1, AO2, AO3):',
        '- AO1 (Demonstrate knowledge & understanding): Define, Draw (labelled diagram with straight ruler lines, no arrowheads), Label, List, Measure, State (specific name/value without explanation).',
        '- AO2 (Apply knowledge & methods): Annotate (brief explanatory notes on a diagram), Calculate (show working & units), Describe (detailed account without reasons), Distinguish (make clear differences between two+ concepts using comparative connectives), Estimate, Identify, Outline (brief summary).',
        '- AO3 (Formulate, analyse & evaluate): Analyse (break down data/patterns), Comment, Compare (similarities AND differences throughout), Compare and contrast, Construct, Deduce, Design, Determine, Discuss (balanced review with arguments for/against), Evaluate (strengths + limitations + justified conclusion), Explain (detailed account INCLUDING reasons/mechanisms), Predict, Sketch (labelled axes showing general trend), Suggest (apply understanding to unfamiliar scenario).',
      ].join('\n'),
    },
    {
      fileName: 'CommandTermsVisualized.pdf',
      fileType: 'pdf',
      topicCode: null,
      externalUrl: 'https://drive.google.com/file/d/16WIOcS98OW5bsEbgiNnYiErgu8Z94ixV/view?usp=drivesdk',
      extractedText:
        'Visual infographic poster ("IB Command Terms Visualized" by Goodwin) grouping high-frequency Paper 1B and Paper 2 command terms into AO1 (Draw, Label, State), AO2 (Annotate, Calculate, Outline, Distinguish), and AO3 (Compare, Compare & Contrast, Deduce, Determine, Discuss, Evaluate, Explain, Predict, Sketch, Suggest) with concrete visual cues.',
    },
    {
      fileName: 'A 1.1 Water Notes.pdf',
      fileType: 'pdf',
      topicCode: 'A1.1',
      externalUrl: 'https://drive.google.com/file/d/1-RBmTe2wowxk3V9mAvW-nOVNmynkmSkT/view?usp=drivesdk',
      extractedText: [
        'Topic A1.1 Water — CRHS Biology HL Class Notes (Allott p.2–13):',
        '- Medium for life: Earliest cells evolved in water; 70–95% cell mass is water, acting as intracellular solvent and transport fluid.',
        '- Polarity & Hydrogen Bonds: Unequal electronegativity between O and H creates polar covalent O–H bonds (delta- on O, delta+ on H). Weak electrostatic attractions between delta+ H and delta- O form hydrogen bonds (dashed lines in IB drawings; covalent O–H as solid lines).',
        '- Cohesion (water-to-water H-bonding) & Adhesion (water-to-polar-cellulose H-bonding) support continuous xylem columns.',
        '- Physical properties (Allott p.7–8 ringed seal Pusa hispida vs black-throated loon Gavia arctica): High SHC (4.18 J/g°C), high latent heat of vaporization, buoyancy (~1.0 g/cm^3), high viscosity (50x air), high thermal conductivity (24x air).',
        '- HL A1.1.7–A1.1.8: Extraplanetary carbonaceous chondrite asteroid delivery + Goldilocks temperature & gravity retention.',
      ].join('\n'),
    },
    {
      fileName: '2024 A1 1.2 Nucleic Acids Notes.pdf',
      fileType: 'pdf',
      topicCode: 'A1.2',
      externalUrl: 'https://drive.google.com/file/d/1AKRrJTFqPgJ2XDXs68GGdkJdhtpFmK-7/view?usp=drivesdk',
      extractedText: [
        'Topic A1.2 Nucleic Acids — CRHS Biology HL Class Notes (Allott p.14–27):',
        '- Nucleotide monomers (C5\' phosphate + pentose + C1\' base), phosphodiester 3\'->5\' sugar–phosphate backbone, DNA vs RNA.',
        '- Complementary base pairing (Purines Adenine/Guanine double-ring with Pyrimidines Thymine/Cytosine/Uracil single-ring = uniform ~2 nm helix; A=T 2 H-bonds, C≡G 3 H-bonds).',
        '- HL Directionality (5\'->3\' replication, transcription, translation), Hershey–Chase (1952, 35S vs 32P), Chargaff falsifying Levene\'s tetranucleotide hypothesis, and Nucleosomes (~146 bp wrapped around 8 basic histones + linker histone H1).',
      ].join('\n'),
    },
    {
      fileName: 'BioK 2.6 Quiz Answers.docx',
      fileType: 'docx',
      topicCode: 'A1.2',
      externalUrl: 'https://drive.google.com/file/d/1aj28nVKTx78ijtH3LUiiYihevq3PH4tJ/view?usp=drivesdk',
      extractedText: [
        'BioK 2.6 Nucleic Acids Quiz Answer Key:',
        '1. D (H-bonds); 2. D (30% T -> 20% G); 3. C (Phosphate shared by DNA & RNA); 4. D (Pyrimidines single-ring).',
        '5. Draw 4 DNA nucleotides (5 marks): 1) Two antiparallel strands; 2) Phosphate, deoxyribose, and FULL nitrogenous base names (Adenine, Thymine, Cytosine, Guanine — never bare A/T/C/G without key); 3) C5\'–C3\' phosphodiester bonds; 4) Base on C1\'; 5) Dashed H-bonds.',
      ].join('\n'),
    },
    {
      fileName: 'A 2.1 Origin of Cells Notes.pdf',
      fileType: 'pdf',
      topicCode: 'A2.1',
      externalUrl: 'https://drive.google.com/file/d/1O_6vnWUPRmb_OlNKFRUtxZEN2fLyI8bD/view?usp=drivesdk',
      extractedText: [
        'Topic A2.1 Origins of Cells (HL) — CRHS Biology HL Class Notes (Allott p.28–38):',
        '- Reducing prebiotic atmosphere (CH4, NH3, H2, H2O vapour, CO2; no free O2), Miller–Urey (1953) spark discharge + condenser yielding amino acids, amphipathic fatty acid vesicles, RNA World (ribozymes + peptidyl transferase), LUCA at alkaline hydrothermal vents (~355+ core genes, L-amino acids, ATP synthase proton gradients; LUCA != first cell), Pasteur swan-neck disproval.',
      ].join('\n'),
    },
    {
      fileName: 'A 2.2 Microscope Notes.pdf',
      fileType: 'pdf',
      topicCode: 'A2.2',
      externalUrl: 'https://drive.google.com/file/d/1WwN5t3nVDYyN9zNN-wAA7Xg62l4fiu7V/view?usp=drivesdk',
      extractedText: [
        'Topic A2.2 Microscopy Skills — CRHS Biology HL Notes (Allott p.39–49):',
        '- Magnification equation M = I / A; 1 m = 1,000 mm; 1 mm = 1,000 um; 1 um = 1,000 nm; scale bar conversion before dividing.',
        '- Light (~200 nm, living, colour) vs TEM (~0.2 nm, 2D internal ultrastructure) vs SEM (~3–10 nm, 3D metal-coated surface) vs Immunofluorescence vs Freeze-fracture EM vs Cryo-EM.',
      ].join('\n'),
    },
    {
      fileName: 'A2.2 Cell Structure Notes.pdf',
      fileType: 'pdf',
      topicCode: 'A2.2',
      externalUrl: 'https://drive.google.com/file/d/1TQaaeyceMNazM13g7IRhTSnuPS18rsAD/view?usp=drivesdk',
      extractedText: [
        'Topic A2.2 Cell Structure — CRHS Biology HL Class Notes (Allott p.40–55):',
        '- Common cell features, Prokaryotes (nucleoid circular naked DNA, 70S ribosomes ~20 nm, peptidoglycan wall, plasmids, binary fission), Eukaryotes (double nuclear envelope, 80S ribosomes 20–30 nm NOT 20 um, organelles; plant cellulose wall/chloroplasts/central vacuole vs animal centrioles/lysosomes vs fungal chitin wall).',
        '- Atypical cells (aseptate fungal hyphae, skeletal muscle fibres, mature mammalian RBCs, phloem sieve tube elements) & HL A2.2.10 Endosymbiotic Theory.',
      ].join('\n'),
    },
    {
      fileName: 'B1 1.1 Carbs and Lipids.pdf',
      fileType: 'pdf',
      topicCode: 'B1.1',
      externalUrl: 'https://drive.google.com/file/d/17XjMcquu7rXhJH00dEzcD5MA4fN0sm3e/view?usp=drivesdk',
      extractedText: [
        'Topic B1.1 Carbohydrates & Lipids — CRHS Biology HL Class Notes (Allott p.130–149):',
        '- Carbon 4 covalent bonds, condensation/hydrolysis, fructose is a 6-carbon hexose in a 5-membered furanose ring (slide 16 fix: NOT pentose), alpha vs beta-D-glucose (amylose, amylopectin, glycogen, cellulose microfibrils), ABO glycoproteins.',
        '- Triglycerides (glycerol + 3 fatty acids, ~38 kJ/g vs ~17 kJ/g carbs), saturated vs cis/trans unsaturated (slide 36 fix: each C=C removes 2 H atoms), phospholipids, 4-ring steroids.',
      ].join('\n'),
    },
    {
      fileName: 'B1.2 Protein Notes.pdf',
      fileType: 'pdf',
      topicCode: 'B1.2',
      externalUrl: 'https://drive.google.com/file/d/1ixg-oU7LOryPf5FLdfM-ZqZJyvdAWCy8/view?usp=drivesdk',
      extractedText: [
        'Topic B1.2 Proteins — CRHS Biology HL Class Notes (Allott p.150–167):',
        '- Amino acid structure, peptide condensation, 9 essential amino acids, heat/pH denaturation, HL 20 R-groups (polar, nonpolar, acidic, basic) driving 1° -> 2° backbone H-bonds -> 3° R-group disulfide/ionic/H/hydrophobic interactions -> 4° multimers & prosthetic groups (Haemoglobin α2β2 + Fe2+ haem vs Insulin vs Collagen).',
      ].join('\n'),
    },
    {
      fileName: 'B 2.2 Learning Goals.docx',
      fileType: 'docx',
      topicCode: 'B2.2',
      externalUrl: 'https://drive.google.com/file/d/1q3ocFTlRTST8TsznNBPjMPmgLxx5Myen/view?usp=drivesdk',
      extractedText:
        'Topic B2.2 Learning Goals (Catherine MacDougall): Organelles B2.2.1–B2.2.9 — separating nuclear transcription/splicing from cytoplasmic translation, acidic lysosomes, mitochondria cristae/intermembrane H+ gradient, chloroplast thylakoids/stroma, free vs rER-bound 80S ribosomes, cis->trans Golgi, clathrin triskelion budding.',
    },
    {
      fileName: 'B2.2 Organelles and Compartmentalization.pdf',
      fileType: 'pdf',
      topicCode: 'B2.2',
      externalUrl: 'https://drive.google.com/file/d/1cLmfESrd4AcaIP9pLcKTGwoJMFdYX7Ze/view?usp=drivesdk',
      extractedText:
        'Topic B2.2 Organelles & Compartmentalization Slides (Allott p.188–202): Acidic lysosomes (pH 4.5–5.0, phagosome + lysosome = phagolysosome), secretory pathway rER -> COPII -> cis-Golgi -> trans-Golgi -> exocytosis, clathrin triskelion/dynamin vesicle budding, differential ultracentrifugation (Nuclei 1,000g -> Mito/Chloro 10,000g -> Microsomes 100,000g -> 80S Ribosomes 200,000g).',
    },
    {
      fileName: 'IB_Biology_Study Guide_Answers.docx',
      fileType: 'docx',
      topicCode: 'A',
      externalUrl: 'https://drive.google.com/file/d/1uSRjZ5bL2t2xpfu-QqAA1vXktd6N1xzn/view?usp=drivesdk',
      extractedText:
        'Oxford IB Biology 2023 Study Guide — Complete Answer Key Index (Word edition, Units A1.1–D4.3): Full model answers matching Allott & Mindorff 2023 end-of-chapter problems.',
    },
    {
      fileName: 'IB_Biology_Study Guide_Answers.txt',
      fileType: 'txt',
      topicCode: 'A',
      externalUrl: 'https://drive.google.com/file/d/1bxzCZyeYjkDcaMzpjvWOo1tPSthAAht4/view?usp=drivesdk',
      extractedText:
        'Oxford IB Biology 2023 Study Guide — Plain-Text Quick-Search Answer Extracts across A1.1, A1.2, A2.2, B1.1–B2.2, and D2.3 water potential.',
    },
  ],
  notes: [
    {
      topicCode: 'A1.1',
      title: 'Water Polarity, Hydrogen Bonding & Aquatic Life Adaptations (A1.1)',
      summary:
        'Connects polar covalent O–H geometry and interstitial H-bonds to xylem cohesion–adhesion, hydration shells, ringed seal vs black-throated loon adaptations, and HL Goldilocks origin (Allott Ch. A1.1, pp. 2–13).',
      sourceFileNames: ['A 1.1 Water Notes.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
      blocks: [
        { type: 'heading', level: 2, text: '1. Polarity, Hydrogen Bonds & Fluid Architecture' },
        {
          type: 'callout',
          variant: 'definition',
          title: 'IB Drawing Standard: Solid Covalent vs Dashed Hydrogen Bonds',
          markdown:
            'Oxygen ($\\chi = 3.44$) pulls bonding electrons toward its lone pairs, giving oxygen $\\delta^-$ and both hydrogens $\\delta^+$ at a **$104.5^\\circ$ bent angle**. In every Paper 2 drawing, draw **solid lines** for intramolecular polar covalent $\\text{O–H}$ bonds and **dashed lines** strictly between $\\delta^+\\text{H}$ of one molecule and the lone-pair $\\delta^-\\text{O}$ of an adjacent molecule.',
        },
        { type: 'playable_diagram', spec: ENHANCED_WATER_EXPLORER },
        { type: 'heading', level: 2, text: '2. Physical Contrast: Ringed Seal vs Black-Throated Loon (Allott pp. 7–8)' },
        {
          type: 'playable_diagram',
          spec: {
            type: 'comparison_matrix',
            id: 'bio-a11-aquatic-matrix',
            title: 'Water vs Air Physical Properties in Aquatic & Semi-Aquatic Adaptations',
            caption: 'Direct comparison from Allott & Mindorff (Oxford 2023, pp. 7–8) and Ms MacDougall A1.1 notes.',
            columns: ['Property', 'Water vs Air Magnitude', 'Ringed Seal (Pusa hispida)', 'Black-Throated Loon (Gavia arctica)'],
            rows: [
              {
                criterion: 'Buoyancy',
                cells: ['~1.00 g/cm³ (seawater 1.025 g/cm³)', 'Dense bone balanced by low-density blubber for neutral dive buoyancy', 'Dense heavy bones reduce buoyancy for underwater pursuit dives'],
              },
              {
                criterion: 'Viscosity',
                cells: ['~50× higher than air', 'Fusiform torpedo body + hind flippers minimize swimming drag', 'Smooth water-shedding feather coat + folded wings cut drag'],
              },
              {
                criterion: 'Thermal Conductivity',
                cells: ['~24× faster heat loss than air', 'Thick subcutaneous blubber layer + peripheral vasoconstriction', 'Interlocking waterproof feathers trapping an air insulating coat + preen oil'],
                ibExamTip: 'Mention specific numerical/comparative mechanisms for each species rather than stating "adapted to cold" vaguely.',
              },
              {
                criterion: 'Specific Heat Capacity',
                cells: ['4.18 J g⁻¹ °C⁻¹ (highest common liquid)', 'Aquatic coastal water buffers seasonal temperature extremes', 'Sub-ice water stays thermally stable during winter'],
              },
            ],
          },
        },
        {
          type: 'callout',
          variant: 'syllabus_link',
          title: 'HL A1.1.7–A1.1.8: Extraplanetary Origin & Goldilocks Retention',
          markdown:
            '**Carbonaceous chondrite asteroids** delivered Earth’s surface water (~4.0 bya). Water remained liquid only because Earth sits in the **Goldilocks Zone** ($0–100^\\circ\\text{C}$) and possesses enough gravitational mass (and magnetosphere) to prevent vapour photolysis and escape to space.',
        },
      ],
    },
    {
      topicCode: 'A1.2',
      title: 'Nucleic Acids, Base-Pairing, Hershey–Chase & Nucleosomes (A1.2)',
      summary:
        'Master 5′→3′ phosphodiester directionality, purine–pyrimidine geometry, Chargaff falsification, Hershey–Chase 32P/35S experiment, and HL octamer nucleosomes (Allott Ch. A1.2, pp. 14–27).',
      sourceFileNames: ['2024 A1 1.2 Nucleic Acids Notes.pdf', 'BioK 2.6 Quiz Answers.docx'],
      blocks: [
        { type: 'heading', level: 2, text: '1. Nucleotide Structure, Antiparallel Strands & HL Directionality' },
        { type: 'playable_diagram', spec: DNA_NUCLEOSOME_EXPLORER },
        {
          type: 'callout',
          variant: 'examiner_warning',
          title: 'BioK 2.6 Q5 Exam Trap: Write FULL Nitrogenous Base Names!',
          markdown:
            'When asked to *"Draw a diagram showing four nucleotides of DNA"* (5 marks), marking points require **Adenine, Thymine, Cytosine, and Guanine** written out in full (or defined in a key). Bare letters **A, T, C, G** without a key lose the mark!',
        },
        {
          type: 'playable_diagram',
          spec: {
            type: 'comparison_matrix',
            id: 'bio-a12-evidence-matrix',
            title: 'DNA vs RNA Architecture & HL Empirical Experiments (A1.2.1–A1.2.15)',
            caption: 'Consolidated from CRHS A1.2 Notes & Oxford 2023 Ch. A1.2.',
            columns: ['Concept / Experiment', 'Molecular / Experimental Detail', 'IB Markscheme Significance'],
            rows: [
              {
                criterion: 'Base Pairing & Helix Width',
                cells: ['Purines (2-ring Adenine, Guanine) pair with Pyrimidines (1-ring Thymine/Uracil, Cytosine); A=T (2 H-bonds), C≡G (3 H-bonds)', 'Maintains constant ~2 nm helix diameter; higher GC% elevates melting temperature Tm'],
              },
              {
                criterion: '5′ → 3′ Directionality (HL)',
                cells: ['Phosphodiester links C3′ –OH to next C5′ phosphate; polymerases extend 5′ → 3′; ribosome reads mRNA 5′ → 3′', 'Free 3′–OH is the nucleophilic attack site for incoming dNTPs during replication'],
              },
              {
                criterion: 'Hershey–Chase (1952, HL)',
                cells: ['T2 phage protein labelled with ³⁵S vs DNA labelled with ³²P; E. coli infection -> blender -> centrifugation', '³⁵S stayed in supernatant; ³²P entered bacterial pellet -> DNA is genetic material'],
              },
              {
                criterion: 'Chargaff Falsification (HL)',
                cells: ['%A = %T and %C = %G, while (A+T):(G+C) ratio varies widely between species', 'Falsified Levene’s tetranucleotide hypothesis (fixed 25% repeats unable to encode complex genomes)'],
              },
              {
                criterion: 'Nucleosome Packaging (HL)',
                cells: ['~146 bp negatively charged DNA wraps ~1.65–2 turns around an 8-histone basic (+) octamer + H1 linker', 'Neutralizes phosphate repulsion, condenses DNA into chromatin, and regulates transcription access'],
              },
            ],
          },
        },
      ],
    },
    {
      topicCode: 'A2.1',
      title: 'Origin of Cells, Miller–Urey Apparatus, RNA World & LUCA (A2.1 HL)',
      summary:
        'Trace abiotic transition from prebiotic reducing chemistry and Miller–Urey synthesis to fatty-acid vesicles, catalytic ribozymes, and alkaline hydrothermal vent LUCA (Allott Ch. A2.1, pp. 28–38).',
      sourceFileNames: ['A 2.1 Origin of Cells Notes.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
      blocks: [
        { type: 'heading', level: 2, text: '1. Interactive Miller–Urey Apparatus & Pasteur Swan-Neck Verification' },
        { type: 'playable_diagram', spec: ORIGIN_APPARATUS_EXPLORER },
        {
          type: 'key_terms',
          items: [
            {
              term: 'Prebiotic Reducing Conditions (A2.1.1)',
              definitionMarkdown: 'Anoxic early Earth lacking free $\\text{O}_2$/ozone ($\\text{CH}_4, \\text{NH}_3, \\text{H}_2, \\text{H}_2\\text{O}, \\text{CO}_2$) energized by UV radiation, lightning, and hydrothermal vents.',
              markschemeKeyword: 'reducing atmosphere + UV/lightning energy',
            },
            {
              term: 'RNA World Hypothesis (A2.1.4)',
              definitionMarkdown: 'RNA both stores heritable sequence information AND folds into catalytic **ribozymes** (retained today as ribosomal peptidyl transferase rRNA), solving the DNA-vs-protein origin paradox.',
              markschemeKeyword: 'dual genetic + ribozyme catalysis',
            },
            {
              term: 'Hydrothermal Vent LUCA (A2.1.5–A2.1.6)',
              definitionMarkdown: 'Last Universal Common Ancestor (~3.5–3.8 bya) evidenced by 355+ shared core genes, universal genetic code, exclusive L-amino acids, and ATP synthase proton gradients near alkaline vents.',
              markschemeKeyword: 'universal genetic code + proton gradient',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'examiner_warning',
          title: 'HL Clarification: LUCA Was NOT the Very First Cell',
          markdown:
            '**LUCA** already possessed DNA/RNA/ribosome machinery and lipid membranes. Earlier simpler **protocells** existed first with no surviving lineages; LUCA is simply the most recent common ancestor shared by all extant Bacteria, Archaea, and Eukarya.',
        },
      ],
    },
    {
      topicCode: 'A2.2',
      title: 'Microscopy Resolution, Magnification (M = I/A) & Cryo-EM (A2.2.1–A2.2.3)',
      summary:
        'Interactive comparison of compound light microscope, TEM, SEM, freeze-fracture EM, immunofluorescence, and cryo-EM alongside scale-bar magnification calculations (Allott Ch. A2.2, pp. 39–49).',
      sourceFileNames: ['A 2.2 Microscope Notes.pdf', 'IB_Biology_Study Guide_Answers.txt'],
      blocks: [
        { type: 'playable_diagram', spec: MICROSCOPE_EXPLORER },
        {
          type: 'equation',
          latex: 'M = \\frac{I}{A} \\qquad \\text{and} \\qquad A = \\frac{I}{M}',
          caption: 'Convert image size I (mm) to µm (×1000) or nm before dividing by specimen/scale-bar size A.',
          variableLegend: [
            { symbol: 'M', meaning: 'Total linear magnification (e.g. 50,000×)' },
            { symbol: 'I', meaning: 'Measured micrograph or scale-bar image length' },
            { symbol: 'A', meaning: 'Actual biological specimen diameter or scale value' },
          ],
        },
        {
          type: 'playable_diagram',
          spec: {
            type: 'comparison_matrix',
            id: 'bio-a22-microscopy-matrix',
            title: 'Light vs Electron & Modern Cryo/Fluorescence Microscopy (A2.2.1–A2.2.3)',
            caption: 'Contrast resolving power, specimen vitality, and cellular insight across imaging modalities.',
            columns: ['Technique', 'Resolution & State', 'Best Biological Application'],
            rows: [
              { criterion: 'Compound Light', cells: ['~200 nm (≤1,500×) • Live or fixed', 'Living cytoplasmic streaming, mitosis, and natural colour wet mounts'], ibExamTip: 'Essential whenever observing living processes.' },
              { criterion: 'Transmission EM (TEM)', cells: ['~0.2 nm (>250,000×) • Dead ultrathin slice', '2D internal ultrastructure: cristae, thylakoids, 70S/80S ribosomes'] },
              { criterion: 'Scanning EM (SEM)', cells: ['~3–10 nm • Dead metal-coated exterior', '3D external topography of pollen grains, cilia, and stomata'] },
              { criterion: 'Immunofluorescence & Cryo-EM', cells: ['20–200 nm (live fluorophore) / ~0.2 nm (flash-frozen hydrated)', 'Track fluorescent proteins or resolve unstained native 3D macromolecules'] },
            ],
          },
        },
      ],
    },
    {
      topicCode: 'A2.2',
      title: 'Interactive Cell Ultrastructure Lab: Animal, Plant & Prokaryote (A2.2.4–A2.2.10)',
      summary:
        'Flagship 5-view playable cell explorer covering every organelle across animal, plant, and prokaryotic cells plus high-res mitochondrion/chloroplast cutaways, secretory path, endosymbiosis, and atypical cells (Allott Ch. A2.2, pp. 40–55).',
      sourceFileNames: ['A2.2 Cell Structure Notes.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
      blocks: [
        {
          type: 'callout',
          variant: 'syllabus_link',
          title: 'How to Use This 5-View Playable Cell Ultrastructure Lab',
          markdown:
            'Switch between **Animal Cell**, **Plant Cell**, **Prokaryote**, **Mitochondrion & Chloroplast**, and **Micrograph Identification** views; toggle functional layer pills; run the **Secretory & Bioenergetic Flow** animation; click any organelle directly in the artwork; or toggle **Monochrome Ink** & **Self-Test Pins** for Paper 2 recall.',
        },
        { type: 'playable_diagram', spec: CELL_ULTRASTRUCTURE_LAB },
        {
          type: 'callout',
          variant: 'examiner_warning',
          title: 'Classroom Slide Erratum (A2.2 Slide 25): 80S Ribosome Size',
          markdown:
            'Slide 25 printed **$20\\ \\mu\\text{m}$** for 80S ribosomes — a unit typo! Eukaryotic **80S ribosomes measure ~20–30 nm** ($0.025\\ \\mu\\text{m}$) and prokaryotic **70S ribosomes ~20 nm** ($20\\ \\mu\\text{m}$ is an entire leukocyte!).',
        },
        {
          type: 'playable_diagram',
          spec: {
            type: 'comparison_matrix',
            id: 'bio-a22-endosymbiosis-atypical',
            title: 'HL Endosymbiotic Evidence (A2.2.10) & Atypical Eukaryotic Cells (A2.2.9)',
            caption: 'High-yield Paper 2 marking points matching CRHS A2.2 notes and Oxford 2023.',
            columns: ['Concept / Cell Type', 'Observable Ultrastructure', 'IB Reasoning Link'],
            rows: [
              {
                criterion: 'Mitochondria & Chloroplasts (HL)',
                cells: ['Double membrane, circular naked DNA, 70S ribosomes, binary fission, bacterial antibiotic sensitivity'],
                ibExamTip: 'Must explicitly link double membrane to ancestral phagocytosis by heterotrophic host.',
              },
              {
                criterion: 'Aseptate Fungal Hyphae',
                cells: ['Continuous multinucleate tube with chitin cell wall and absent septa (cross-walls)'],
                ibExamTip: 'Challenges classical rule that each individual cell houses one enclosed nucleus.',
              },
              {
                criterion: 'Striated Skeletal Muscle & Mature RBCs',
                cells: ['Muscle fibres: giant (30–100 mm) multinucleate syncytia; Erythrocytes & sieve tubes: anucleate/enucleate'],
                ibExamTip: 'Shows specialized cells can exceed standard SA:V size or shed nuclei when metabolically supported.',
              },
            ],
          },
        },
      ],
    },
    {
      topicCode: 'B1.1',
      title: 'Carbohydrates, Glycogen vs Cellulose & Cis/Trans Lipids (B1.1)',
      summary:
        'Connect α/β-D-glucose isomerism and condensation to starch/glycogen/cellulose properties, ABO glycoproteins, triglycerides, and cis/trans lipid health risk (Allott Ch. B1.1, pp. 130–149).',
      sourceFileNames: ['B1 1.1 Carbs and Lipids.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
      blocks: [
        { type: 'playable_diagram', spec: MACROMOLECULES_EXPLORER },
        {
          type: 'callout',
          variant: 'examiner_warning',
          title: 'Two Classroom Slide Errata Fixed (B1.1 Slides 16 & 36)',
          markdown:
            '1) **Fructose is a HEXOSE** ($\\text{C}_6\\text{H}_{12}\\text{O}_6$), NOT a pentose — Slide 16 mistook its **5-membered furanose ring** (4 C + 1 O in ring) for a 5-carbon sugar (two $-\\text{CH}_2\\text{OH}$ carbons sit outside the ring). 2) Each $\\text{C=C}$ double bond removes **2 hydrogen atoms** (one per bonded carbon), NOT 1 H atom.',
        },
        {
          type: 'playable_diagram',
          spec: {
            type: 'comparison_matrix',
            id: 'bio-b11-polysaccharides-lipids',
            title: 'Polysaccharide & Lipid Structure–Function Comparison (B1.1.4–B1.1.12)',
            caption: 'Contrast α vs β glucose polymers and cis vs trans fatty-acid packing.',
            columns: ['Biomolecule', 'Monomer & Bond Geometry', 'Biological Function / Property'],
            rows: [
              { criterion: 'Amylose & Amylopectin', cells: ['α-D-glucose: α(1→4) helical + α(1→6) branches (~every 20 units)', 'Compact, insoluble, osmotically inert plant energy store'] },
              { criterion: 'Glycogen', cells: ['α-D-glucose with dense α(1→6) branching (~every 8–12 units)', 'Numerous terminal non-reducing ends enable rapid vertebrate mobilization'] },
              { criterion: 'Cellulose', cells: ['β-D-glucose alternating 180° inverted β(1→4) straight chains', 'Parallel chains form dense H-bonded microfibrils resisting turgor burst'], ibExamTip: 'Mention alternate 180° inversion AND inter-chain H-bonds between -OH groups.' },
              { criterion: 'Cis vs Trans Lipids', cells: ['Cis: ~30° kink (fluid plant oils); Trans: linear packing (artificial fats)', 'Tightly packed trans chains elevate LDL cholesterol and CHD risk'] },
            ],
          },
        },
      ],
    },
    {
      topicCode: 'B1.2',
      title: 'Amino Acids, Peptide Bonds & HL 1°–4° Protein Folding (B1.2)',
      summary:
        'Understand peptide condensation, denaturation mechanics, 20 variable R-group chemical families, primary-to-quaternary folding, and haemoglobin vs insulin & collagen (Allott Ch. B1.2, pp. 150–167).',
      sourceFileNames: ['B1.2 Protein Notes.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
      blocks: [
        { type: 'playable_diagram', spec: PROTEIN_STRUCTURE_EXPLORER },
        {
          type: 'key_terms',
          items: [
            { term: 'Primary (1°) Structure', definitionMarkdown: 'Covalent peptide sequence ($\\text{C–N}$) encoded by mRNA codons; determines all higher folding via R-group order.', markschemeKeyword: 'covalent peptide bonds' },
            { term: 'Secondary (2°) Structure', definitionMarkdown: 'Regular $\\alpha$-helices and $\\beta$-pleated sheets stabilized purely by H-bonds between peptide backbone $\\text{C=O}$ and $\\text{N–H}$ atoms.', markschemeKeyword: 'backbone H-bonds' },
            { term: 'Tertiary (3°) Structure (HL)', definitionMarkdown: 'Specific 3D fold stabilized by R-group interactions: covalent disulfide bridges ($-\\text{S–S}-$), ionic salt bridges, H-bonds, and hydrophobic clustering.', markschemeKeyword: 'R-group disulfide/ionic/H/hydrophobic' },
            { term: 'Quaternary (4°) & Conjugated Proteins', definitionMarkdown: 'Multiple polypeptide subunits (Insulin = 2 chains; **Haemoglobin** = 4 subunits $\\alpha_2\\beta_2$ + 4 $\\text{Fe}^{2+}$ haem prosthetic groups). Contrast globular soluble vs fibrous **Collagen** triple helix.', markschemeKeyword: 'multiple subunits + prosthetic haem' },
          ],
        },
      ],
    },
    {
      topicCode: 'B2.2',
      title: 'Organelles, Compartmentalization, Clathrin & Ultracentrifugation (B2.2)',
      summary:
        'Integrates intracellular pH/substrate isolation, secretory pathway trafficking, clathrin triskelion budding, differential ultracentrifugation, and HL chloroplast/mitochondrion structures (Allott Ch. B2.2, pp. 188–202).',
      sourceFileNames: ['B 2.2 Learning Goals.docx', 'B2.2 Organelles and Compartmentalization.pdf'],
      blocks: [
        { type: 'playable_diagram', spec: ENHANCED_COMPARTMENT_EXPLORER },
        { type: 'playable_diagram', spec: ULTRACENTRIFUGATION_STEPS },
        {
          type: 'callout',
          variant: 'examiner_warning',
          title: 'Classroom Slide Erratum (B2.2 Slide 21): Phagosome vs Phagolysosome',
          markdown:
            'When a macrophage engulfs a bacterium, the vesicle alone is a **phagosome**. Once it fuses with an acidic **lysosome** ($\\text{pH } 4.5–5.0$), the merged digestive organelle is specifically called a **phagolysosome** (or secondary lysosome).',
        },
        {
          type: 'callout',
          variant: 'definition',
          title: 'Core Exam Advantages of Eukaryotic Compartmentalization (B2.2.2–B2.2.9)',
          markdown:
            '1) **Post-transcriptional separation**: nuclear introns are spliced out and pre-mRNA capped inside the nucleus BEFORE cytoplasmic 80S ribosomes access it. 2) **Microenvironment isolation**: lysosomes sequester acid hydrolases at pH ~4.8; tiny thylakoid lumens & mitochondrial intermembrane spaces build steep $\\Delta[\\text{H}^+]$ gradients fast. 3) **Clathrin triskelions + dynamin** drive coated vesicle budding along rER $\\to$ *cis*-Golgi $\\to$ *trans*-Golgi.',
        },
      ],
    },
    {
      topicCode: 'A',
      title: 'IB Biology HL Command Terms (AO1–AO3) & May 2028 IA Framework',
      summary:
        'Decode Paper 1A/1B and Paper 2 command-term markscheme triggers (Distinguish vs Compare, Explain vs Describe, Evaluate) and clarify the real May 2028 24-mark 4-criterion IA rubric.',
      sourceFileNames: ['Command Terms IB BIO.pdf', 'CommandTermsVisualized.pdf', '2026 Bio 5HL Course Outline.docx'],
      blocks: [
        { type: 'playable_diagram', spec: COMMAND_TERMS_MATRIX },
        {
          type: 'callout',
          variant: 'examiner_warning',
          title: '2026 Course Outline Note: Real FA2025–May 2028 IA = 4×6 Marks (Not 5 Criteria)',
          markdown:
            'Although older handouts still echo legacy IA titles, the official **May 2028 Biology HL Scientific Investigation** is graded out of **24 marks across 4 equal 6-mark criteria**: **Research Design (6)**, **Data Analysis (6)**, **Conclusion (6)**, and **Evaluation (6)** within a strict **3,000-word ceiling**.',
        },
      ],
    },
  ],
  questions: [
    {
      topicCode: 'A1.1',
      paperType: 'Paper 1A',
      commandTerm: 'Identify',
      difficulty: 'Foundation',
      maxMarks: 1,
      questionMarkdown:
        'Which pair of water properties directly explains how tall conifers pull continuous columns of sap upward from roots to leaves without snapping under transpiration tension?',
      mcqOptions: [
        { label: 'A', text: 'High specific heat capacity and high density at 4 °C' },
        { label: 'B', text: 'Cohesion via H-bonds between water molecules and adhesion to hydrophilic cellulose xylem walls' },
        { label: 'C', text: 'Low viscosity and non-polar hydrophobic repulsion inside vessels' },
        { label: 'D', text: 'High latent heat of vaporization and ionic dissociation into H+ and OH−' },
      ],
      correctMcqOption: 'B',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Cohesion = water–water H-bonds sustaining tensile column; Adhesion = water–cellulose polar attraction resisting gravity.', marks: 1 },
        ],
        model_answer: 'B — Cohesion sustains tension across water molecules while adhesion anchors sap against hydrophilic xylem walls.',
      },
      sourceFileNames: ['A 1.1 Water Notes.pdf'],
    },
    {
      topicCode: 'A1.1',
      paperType: 'Paper 2',
      commandTerm: 'Compare and contrast',
      difficulty: 'Standard IB',
      maxMarks: 4,
      questionMarkdown:
        'Compare and contrast the physical adaptations to water viscosity, buoyancy, and thermal conductivity in the **ringed seal (*Pusa hispida*)** and the **black-throated loon (*Gavia arctica*)** (Allott pp. 7–8).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Similarity — Viscosity: Both possess streamlined bodies (fusiform seal, sleek submerged loon coat) reducing drag in water (~50× more viscous than air).', marks: 1 },
          { code: 'M2', criterion: 'Similarity — Heat loss: Both reduce conductive heat loss (~24× higher thermal conductivity than air) to maintain endothermy.', marks: 1 },
          { code: 'M3', criterion: 'Contrast — Insulation: Seal uses thick subcutaneous blubber; loon traps insulating air under interlocking waterproof preen-oiled feathers.', marks: 1 },
          { code: 'M4', criterion: 'Contrast — Buoyancy: Seal balances dense skeleton with buoyant blubber for neutral dive buoyancy; loon has heavy dense bones reducing buoyancy for deep pursuit dives.', marks: 1 },
        ],
        model_answer:
          'Both streamline their shapes to overcome water viscosity (~50× air) and conserve heat against high thermal conductivity (~24× air). However, ringed seals insulate with internal blubber that balances buoyancy, whereas black-throated loons trap air beneath waterproof plumage and possess dense bones to sink effectively while hunting.',
      },
      sourceFileNames: ['A 1.1 Water Notes.pdf', 'Biology Course Companion - Allott & Mindorff (Oxford 2023).pdf'],
    },
    {
      topicCode: 'A1.1',
      paperType: 'Paper 2',
      commandTerm: 'Explain',
      difficulty: 'Standard IB',
      maxMarks: 3,
      questionMarkdown:
        'Explain why glucose and $\\text{Na}^+$ ions travel dissolved directly in blood plasma whereas cholesterol and triglycerides require lipoprotein particles.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Polar –OH groups of glucose form hydrogen bonds with polar H2O; Na+ attracts δ− O of water forming hydration shells.', marks: 1 },
          { code: 'M2', criterion: 'Cholesterol and triglycerides are predominantly nonpolar/hydrophobic and cannot compensate for broken water–water H-bonds.', marks: 1 },
          { code: 'M3', criterion: 'Lipoproteins enclose hydrophobic lipids inside a single-layer amphipathic shell (phospholipids + apolipoproteins facing aqueous plasma).', marks: 1 },
        ],
        model_answer:
          'Glucose (–OH H-bonding) and Na+ (ion–dipole hydration shells) dissolve freely in polar plasma, whereas hydrophobic cholesterol and triglycerides must be packaged inside lipoprotein complexes with hydrophilic exterior heads/proteins.',
      },
      sourceFileNames: ['A 1.1 Water Notes.pdf'],
    },
    {
      topicCode: 'A1.2',
      paperType: 'Paper 1A',
      commandTerm: 'Calculate',
      difficulty: 'Foundation',
      maxMarks: 1,
      questionMarkdown:
        'If a sample of double-stranded DNA contains **30% thymine (T)**, what percentage of the bases in this sample are **guanine (G)** (BioK 2.6 Q2)?',
      mcqOptions: [
        { label: 'A', text: '30%' },
        { label: 'B', text: '60%' },
        { label: 'C', text: '40%' },
        { label: 'D', text: '20%' },
      ],
      correctMcqOption: 'D',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: '%A = %T = 30%, leaving 40% shared equally between C and G -> 20% Guanine.', marks: 1 },
        ],
        model_answer: 'D — 20% guanine (A = T = 30%, leaving C + G = 40%, hence G = 20%).',
      },
      sourceFileNames: ['BioK 2.6 Quiz Answers.docx'],
    },
    {
      topicCode: 'A1.2',
      paperType: 'Paper 2',
      commandTerm: 'Draw',
      difficulty: 'Standard IB',
      maxMarks: 5,
      questionMarkdown:
        'Draw a labelled diagram showing **four nucleotides** of a double-stranded DNA molecule (BioK 2.6 Q5 standard).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Two antiparallel strands shown (opposite pentose/5′–3′ orientation).', marks: 1 },
          { code: 'M2', criterion: 'Circle, pentagon, and rectangle labelled as phosphate, deoxyribose, and FULL base names (Adenine, Thymine, Cytosine, Guanine — bare A/T/C/G alone not accepted).', marks: 1 },
          { code: 'M3', criterion: 'Covalent phosphodiester bonds linking phosphate to C5′ and C3′ of deoxyribose.', marks: 1 },
          { code: 'M4', criterion: 'Nitrogenous base attached specifically to C1′ of deoxyribose.', marks: 1 },
          { code: 'M5', criterion: 'Dashed hydrogen bonds drawn pairing Adenine=Thymine (2 lines) and Cytosine≡Guanine (3 lines).', marks: 1 },
        ],
        model_answer:
          'Draw two antiparallel two-nucleotide chains: Phosphate circles linked C5′–C3′ along sugar–phosphate rails, Deoxyribose pentagons inverted on the opposite rail, bases bonded to C1′ labelled with FULL names (Adenine, Thymine, Cytosine, Guanine), joined by dashed H-bonds.',
        examiner_notes: 'BioK Q5 classic trap: omitting full base names loses the base-identity mark.',
      },
      sourceFileNames: ['BioK 2.6 Quiz Answers.docx', '2024 A1 1.2 Nucleic Acids Notes.pdf'],
    },
    {
      topicCode: 'A1.2',
      paperType: 'Paper 2',
      commandTerm: 'Explain',
      difficulty: 'HL Extension',
      maxMarks: 4,
      questionMarkdown:
        'Explain how the **Hershey–Chase (1952)** experiment and **Chargaff’s data** together established both the chemical identity and structural base-pairing of DNA.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Hershey–Chase labelled T2 phage proteins with ³⁵S and DNA with ³²P, infecting E. coli separately.', marks: 1 },
          { code: 'M2', criterion: 'Blender agitation + centrifugation isolated ³²P inside the bacterial pellet while ³⁵S remained in supernatant phage coats -> DNA is hereditary material.', marks: 1 },
          { code: 'M3', criterion: 'Chargaff showed %A = %T and %C = %G while (A+T):(G+C) differs across species.', marks: 1 },
          { code: 'M4', criterion: 'Variable base ratios falsified Levene’s repeating tetranucleotide hypothesis and guided Watson–Crick complementary pairing.', marks: 1 },
        ],
        model_answer:
          'Hershey and Chase proved DNA enters bacteria (³²P pellet vs ³⁵S ghost coats in supernatant) to direct viral replication. Meanwhile Chargaff’s discovery that %A=%T and %C=%G alongside inter-species base diversity falsified Levene’s tetranucleotide model and evidenced specific A–T / C–G pairing.',
      },
      sourceFileNames: ['2024 A1 1.2 Nucleic Acids Notes.pdf'],
    },
    {
      topicCode: 'A2.1',
      paperType: 'Paper 2',
      commandTerm: 'Outline',
      difficulty: 'HL Extension',
      maxMarks: 4,
      questionMarkdown:
        'Outline the **RNA World Hypothesis** and state **three** independent lines of molecular evidence supporting a Last Universal Common Ancestor (**LUCA**) (A2.1 HL).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'RNA both encodes heritable nucleotide sequence AND folds into catalytic ribozymes (e.g. rRNA peptidyl transferase) prior to DNA/protein specialization.', marks: 1 },
          { code: 'M2', criterion: 'Universal / near-universal genetic code across all three domains.', marks: 1 },
          { code: 'M3', criterion: '~355+ shared conserved metabolic core genes + ATP synthase H+ chemiosmosis.', marks: 1 },
          { code: 'M4', criterion: 'Exclusive biological chirality (L-amino acids, D-pentose sugars) + deep-sea alkaline hydrothermal vent origin signatures.', marks: 1 },
        ],
        model_answer:
          'RNA could act simultaneously as genome and ribozyme catalyst (still preserved in ribosomal peptidyl transferase). LUCA is evidenced by the near-universal genetic code, ~355+ universal metabolic genes including chemiosmotic ATP synthase, and exclusive L-amino acid usage.',
      },
      sourceFileNames: ['A 2.1 Origin of Cells Notes.pdf'],
    },
    {
      topicCode: 'A2.1',
      paperType: 'Paper 2',
      commandTerm: 'Explain',
      difficulty: 'HL Extension',
      maxMarks: 3,
      questionMarkdown:
        'Explain how **Miller and Urey (1953)** modelled prebiotic synthesis and distinguish **protocells** from **LUCA**.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Boiling H2O circulated anoxic CH4/NH3/H2 gases past high-voltage spark electrodes (lightning) and condenser loop, forming abiotic amino acids.', marks: 1 },
          { code: 'M2', criterion: 'Amphipathic fatty acids spontaneously self-assembled into membrane-bound protocell vesicles.', marks: 1 },
          { code: 'M3', criterion: 'LUCA was NOT the first cell: simpler earlier protocells existed first, whereas LUCA already possessed DNA/ribosomes and left all surviving clades.', marks: 1 },
        ],
        model_answer:
          'Miller–Urey sparked anoxic CH4/NH3/H2/H2O vapour and condensed amino acids within a week. Earlier simple protocells preceded LUCA, which already held full genetic/metabolic machinery as the last common ancestor of all surviving life.',
      },
      sourceFileNames: ['A 2.1 Origin of Cells Notes.pdf'],
    },
    {
      topicCode: 'A2.2',
      paperType: 'Paper 1B',
      commandTerm: 'Calculate',
      difficulty: 'Standard IB',
      maxMarks: 3,
      questionMarkdown:
        'A TEM micrograph of a mitochondrion has a printed **$0.5\\ \\mu\\text{m}$ scale bar** measuring **$25\\text{ mm}$** on the page, and the mitochondrion’s image length measures **$90\\text{ mm}$**. Calculate magnification and actual length.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Convert scale bar length: 25 mm = 25,000 µm.', marks: 1 },
          { code: 'M2', criterion: 'M = I / A = 25,000 µm / 0.5 µm = 50,000×.', marks: 1 },
          { code: 'M3', criterion: 'Actual length A = 90,000 µm / 50,000 = 1.8 µm (with unit).', marks: 1 },
        ],
        model_answer:
          'M = 25,000 µm / 0.5 µm = 50,000×; Actual length A = 90,000 µm / 50,000 = 1.8 µm.',
      },
      sourceFileNames: ['A 2.2 Microscope Notes.pdf', 'IB_Biology_Study Guide_Answers.txt'],
    },
    {
      topicCode: 'A2.2',
      paperType: 'Paper 1B',
      commandTerm: 'Distinguish',
      difficulty: 'Standard IB',
      maxMarks: 3,
      questionMarkdown:
        'Distinguish between **TEM**, **SEM**, and **Cryo-EM** for imaging cellular ultrastructure (A2.2.1–A2.2.3).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'TEM passes electrons through ultrathin stained sections yielding ~0.2 nm 2D internal views (cristae, thylakoids).', marks: 1 },
          { code: 'M2', criterion: 'SEM scans metal-coated surfaces yielding 3D external topography (~3–10 nm).', marks: 1 },
          { code: 'M3', criterion: 'Cryo-EM flash-freezes hydrated specimens in vitreous ice avoiding stain distortion for native 3D near-atomic macromolecule imaging.', marks: 1 },
        ],
        model_answer:
          'TEM resolves 2D internal ultrathin cross-sections (~0.2 nm), SEM resolves 3D external surface coatings (~5 nm), and Cryo-EM flash-freezes hydrated complexes without chemical staining to solve native 3D protein/viral structures.',
      },
      sourceFileNames: ['A 2.2 Microscope Notes.pdf'],
    },
    {
      topicCode: 'A2.2',
      paperType: 'Paper 2',
      commandTerm: 'Outline',
      difficulty: 'HL Extension',
      maxMarks: 4,
      questionMarkdown:
        'Outline **four** independent lines of evidence supporting the **Endosymbiotic Theory** for mitochondria and chloroplasts (HL A2.2.10).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Surrounded by a double membrane (inner bacterial plasma membrane + outer host endocytic vesicle).', marks: 1 },
          { code: 'M2', criterion: 'Possess smaller prokaryotic-type 70S ribosomes (vs cytoplasmic 80S).', marks: 1 },
          { code: 'M3', criterion: 'Contain circular naked DNA lacking histone proteins.', marks: 1 },
          { code: 'M4', criterion: 'Divide semi-autonomously by binary fission (+ inhibited by bacterial antibiotics such as chloramphenicol).', marks: 1 },
        ],
        model_answer:
          'Both organelles feature double membranes, circular naked DNA without histones, 70S ribosomes, binary fission replication independent of mitosis, and prokaryotic-like antibiotic sensitivity.',
      },
      sourceFileNames: ['A2.2 Cell Structure Notes.pdf'],
    },
    {
      topicCode: 'A2.2',
      paperType: 'Paper 1A',
      commandTerm: 'Identify',
      difficulty: 'Foundation',
      maxMarks: 1,
      questionMarkdown:
        'What is the realistic diameter of an animal cytosolic **80S ribosome** (correcting Slide 25 erratum)?',
      mcqOptions: [
        { label: 'A', text: '20 µm (same width as a typical leukocyte)' },
        { label: 'B', text: '20–30 nm (~0.025 µm), smaller than bacteria' },
        { label: 'C', text: '200 µm, visible cleanly under low-power light microscopy' },
        { label: 'D', text: '1–2 µm, identical to a whole mitochondrion' },
      ],
      correctMcqOption: 'B',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: '80S eukaryotic ribosomes measure ~20–30 nm (~0.025 µm), requiring electron microscopy; 70S ribosomes are ~20 nm.', marks: 1 },
        ],
        model_answer: 'B — ~20–30 nm (~0.025 µm). Slide 25 printed 20 µm in error.',
      },
      sourceFileNames: ['A2.2 Cell Structure Notes.pdf'],
    },
    {
      topicCode: 'A2.2',
      paperType: 'Paper 1B',
      commandTerm: 'Outline',
      difficulty: 'Standard IB',
      maxMarks: 2,
      questionMarkdown:
        'State two named examples of **atypical eukaryotic cells** (A2.2.9) and explain how each challenges strict single-nucleus Cell Theory.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Any two: Aseptate fungal hyphae (continuous multi-nucleate cytoplasm with no cross-walls/septa); Skeletal muscle fibres (giant multinucleate syncytia).', marks: 1 },
          { code: 'M2', criterion: 'OR Mature mammalian red blood cells (anucleate to maximize haemoglobin) / Phloem sieve tubes (enucleate supported by companion cells).', marks: 1 },
        ],
        model_answer:
          'Aseptate fungal hyphae share continuous multinucleate cytoplasm without dividing septa, while mature mammalian RBCs eject their nuclei to pack extra haemoglobin.',
      },
      sourceFileNames: ['A2.2 Cell Structure Notes.pdf'],
    },
    {
      topicCode: 'B1.1',
      paperType: 'Paper 2',
      commandTerm: 'Compare and contrast',
      difficulty: 'Standard IB',
      maxMarks: 4,
      questionMarkdown:
        'Compare and contrast the structures and functions of **amylopectin**, **glycogen**, and **cellulose** (B1.1.4–B1.1.6).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Similarity: All three are uncharged, insoluble glucose polymers formed via condensation reactions.', marks: 1 },
          { code: 'M2', criterion: 'Amylopectin & Glycogen use α-D-glucose with α(1→4) and α(1→6) branches; glycogen is much more densely branched for rapid animal hydrolysis.', marks: 1 },
          { code: 'M3', criterion: 'Cellulose uses β-D-glucose with every alternate residue inverted 180°, producing straight unbranched β(1→4) chains.', marks: 1 },
          { code: 'M4', criterion: 'Parallel cellulose chains form extensive inter-chain H-bonds into high-tensile microfibrils (structural cell wall vs storage granules).', marks: 1 },
        ],
        model_answer:
          'All three are insoluble condensation polymers of D-glucose. However, amylopectin and densely branched glycogen use α-D-glucose for helical energy storage, whereas cellulose uses 180°-alternating β-D-glucose forming straight chains cross-linked by H-bonds into strong plant cell wall microfibrils.',
      },
      sourceFileNames: ['B1 1.1 Carbs and Lipids.pdf'],
    },
    {
      topicCode: 'B1.1',
      paperType: 'Paper 2',
      commandTerm: 'Explain',
      difficulty: 'Standard IB',
      maxMarks: 3,
      questionMarkdown:
        'Explain why **cis** unsaturated fats remain liquid oils whereas **trans** fatty acids raise coronary heart disease risk.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Each C=C double bond removes 2 H atoms; in cis isomers, H atoms on the same side create a rigid ~30° kink.', marks: 1 },
          { code: 'M2', criterion: 'Kinked cis chains cannot pack closely, reducing dispersion forces and lowering melting point.', marks: 1 },
          { code: 'M3', criterion: 'Trans fatty acids keep H on opposite sides so hydrocarbon tails stay linear, packing tightly like saturated fats and elevating LDL/CHD risk.', marks: 1 },
        ],
        model_answer:
          'Cis C=C kinks prevent tight packing and keep oils liquid, whereas linear trans chains pack tightly like saturated fats, increasing LDL plaque deposition.',
      },
      sourceFileNames: ['B1 1.1 Carbs and Lipids.pdf'],
    },
    {
      topicCode: 'B1.1',
      paperType: 'Paper 1A',
      commandTerm: 'Identify',
      difficulty: 'Foundation',
      maxMarks: 1,
      questionMarkdown:
        'How is **fructose** ($\text{C}_6\text{H}_{12}\text{O}_6$) correctly classified, and why does Slide 16 cause confusion?',
      mcqOptions: [
        { label: 'A', text: 'Pentose sugar — because all 5-membered rings have 5 carbons' },
        { label: 'B', text: 'Hexose sugar — it has 6 carbons arranged in a 5-membered furanose ring with two external –CH2OH carbons' },
        { label: 'C', text: 'Triose sugar — half of sucrose' },
        { label: 'D', text: 'Disaccharide formed from ribose and glucose' },
      ],
      correctMcqOption: 'B',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Fructose is a 6-carbon hexose (C6H12O6) whose 5-atom ring contains 4 carbons + 1 oxygen plus two external carbons.', marks: 1 },
        ],
        model_answer: 'B — Hexose (6 carbons total inside a 5-membered furanose ring).',
      },
      sourceFileNames: ['B1 1.1 Carbs and Lipids.pdf'],
    },
    {
      topicCode: 'B1.2',
      paperType: 'Paper 2',
      commandTerm: 'Explain',
      difficulty: 'HL Extension',
      maxMarks: 4,
      questionMarkdown:
        'Explain how variable R-groups determine tertiary ($3^\\circ$) folding in a soluble cytosolic enzyme compared with an integral transmembrane channel protein (HL B1.2.6–B1.2.9).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: '3° conformation is stabilized by R-group disulfide bridges (covalent –S–S–), ionic salt bridges, polar H-bonds, and hydrophobic interactions.', marks: 1 },
          { code: 'M2', criterion: 'Soluble cytosolic enzymes bury hydrophobic nonpolar R-groups into an inner core and expose polar/charged R-groups outward to water.', marks: 1 },
          { code: 'M3', criterion: 'Integral channel proteins expose hydrophobic nonpolar R-groups around their outer membrane-spanning belt to contact fatty-acid tails.', marks: 1 },
          { code: 'M4', criterion: 'Polar/charged R-groups line the central hydrophilic pore allowing polar solutes/ions to pass.', marks: 1 },
        ],
        model_answer:
          'Locked by R-group disulfide, ionic, H-bond, and hydrophobic forces, soluble enzymes face polar R-groups outward to water and fold nonpolar side chains inside. Conversely, integral transmembrane channels display nonpolar R-groups externally against lipid tails while polar/charged R-groups line the hydrophilic central pore.',
      },
      sourceFileNames: ['B1.2 Protein Notes.pdf'],
    },
    {
      topicCode: 'B1.2',
      paperType: 'Paper 2',
      commandTerm: 'Distinguish',
      difficulty: 'Standard IB',
      maxMarks: 3,
      questionMarkdown:
        'Distinguish between **globular** and **fibrous** proteins using **haemoglobin** and **collagen** as named examples.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Shape & solubility: Globular (haemoglobin) folds into compact water-soluble spheres; Fibrous (collagen) forms elongated insoluble structural cables/ropes.', marks: 1 },
          { code: 'M2', criterion: 'Subunits/composition: Haemoglobin is a 4-subunit (α2β2) conjugated protein holding 4 non-protein Fe2+ haem prosthetic groups; Collagen forms triple left-handed helices.', marks: 1 },
          { code: 'M3', criterion: 'Function & stability: Globular carries out dynamic transport/catalysis sensitive to heat/pH denaturation; Collagen provides durable tensile strength.', marks: 1 },
        ],
        model_answer:
          'Haemoglobin is a compact, water-soluble globular tetramer (α2β2) with Fe2+ haem prosthetic groups for reversible O2 transport, whereas collagen is an insoluble fibrous triple-helix providing high-tensile extracellular strength.',
      },
      sourceFileNames: ['B1.2 Protein Notes.pdf'],
    },
    {
      topicCode: 'B2.2',
      paperType: 'Paper 2',
      commandTerm: 'Explain',
      difficulty: 'HL Extension',
      maxMarks: 4,
      questionMarkdown:
        'Explain how structural compartmentalization inside **mitochondria** and **chloroplasts** maximizes ATP generation (HL B2.2.4–B2.2.5).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Mitochondrion: Folded inner membrane cristae vastly expand surface area for electron transport chains and ATP synthase.', marks: 1 },
          { code: 'M2', criterion: 'Mitochondrion: Narrow intermembrane space allows pumped H+ to establish a steep chemiosmotic gradient rapidly.', marks: 1 },
          { code: 'M3', criterion: 'Chloroplast: Stacked thylakoid grana enclose minuscule thylakoid lumens for rapid photophosphorylation H+ buildup.', marks: 1 },
          { code: 'M4', criterion: 'Chloroplast: Fluid stroma isolates concentrated Rubisco, ATP, NADPH, and CO2 for Calvin cycle carbon fixation.', marks: 1 },
        ],
        model_answer:
          'In mitochondria, extensive inner cristae hold dense ETC/ATP synthase assemblies adjacent to a tiny intermembrane space for rapid H+ accumulation. In chloroplasts, thylakoid grana enclose narrow H+ lumens beside stroma holding concentrated Calvin cycle enzymes.',
      },
      sourceFileNames: ['B 2.2 Learning Goals.docx', 'B2.2 Organelles and Compartmentalization.pdf'],
    },
    {
      topicCode: 'B2.2',
      paperType: 'Paper 2',
      commandTerm: 'Outline',
      difficulty: 'HL Extension',
      maxMarks: 4,
      questionMarkdown:
        'Outline the secretory protein trafficking pathway from synthesis to exocytosis, including how **clathrin** mediates coated vesicle budding (HL B2.2.8–B2.2.9).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: '80S ribosomes docked on rough ER translate nascent polypeptide directly into the ER lumen for folding/initial glycosylation.', marks: 1 },
          { code: 'M2', criterion: 'COPII vesicles transport cargo to the cis-Golgi face.', marks: 1 },
          { code: 'M3', criterion: 'Enzymes modify/sort proteins through Golgi cisternae to trans-Golgi secretory vesicles that fuse with the plasma membrane (exocytosis).', marks: 1 },
          { code: 'M4', criterion: 'Clathrin triskelion monomers bind adaptor proteins to curve membranes into polyhedral cages pinched off by dynamin before uncoating.', marks: 1 },
        ],
        model_answer:
          'Proteins enter the rER lumen via bound 80S ribosomes, travel via COPII vesicles to the cis-Golgi for modification/sorting, and exit the trans-Golgi in secretory vesicles for exocytosis. During clathrin-coated vesicle budding, adaptor-linked clathrin triskelions curve the membrane into a spherical cage pinched off by dynamin before coat disassembly.',
      },
      sourceFileNames: ['B2.2 Organelles and Compartmentalization.pdf'],
    },
    {
      topicCode: 'B2.2',
      paperType: 'Paper 1B',
      commandTerm: 'Deduce',
      difficulty: 'Standard IB',
      maxMarks: 2,
      questionMarkdown:
        'Following cell homogenization in ice-cold isotonic buffer and **differential ultracentrifugation** ($1{,}000\\ g \\to 10{,}000\\ g \\to 100{,}000\\ g \\to 200{,}000\\ g$), identify the main organelle isolated at $1{,}000\\ g$ and $10{,}000\\ g$, and name the merged organelle formed when a lysosome fuses with a phagosome (Slide 21 Fix).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: '1,000 g pellets Nuclei (largest/densest); 10,000 g pellets Mitochondria (and Chloroplasts in plants).', marks: 1 },
          { code: 'M2', criterion: 'Lysosome + phagosome fusion forms a phagolysosome (or secondary lysosome).', marks: 1 },
        ],
        model_answer:
          'Pellet 1 (1,000g) yields nuclei and Pellet 2 (10,000g) yields mitochondria/chloroplasts; lysosome–phagosome fusion produces a phagolysosome.',
      },
      sourceFileNames: ['B2.2 Organelles and Compartmentalization.pdf'],
    },
    {
      topicCode: 'B2.2',
      paperType: 'Paper 1B',
      commandTerm: 'Explain',
      difficulty: 'Standard IB',
      maxMarks: 2,
      questionMarkdown:
        'Explain why eukaryotic **transcription** and **translation** must remain spatially separated by the nuclear envelope (B2.2.2).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Pre-mRNA must undergo post-transcriptional modification (intron excision / splicing + 5′ cap / poly-A tail) inside the nucleus before translation.', marks: 1 },
          { code: 'M2', criterion: 'Prevents cytoplasmic 80S ribosomes from translating un-spliced introns into non-functional polypeptides.', marks: 1 },
        ],
        model_answer:
          'Separating transcription inside the nucleus permits pre-mRNA intron splicing and capping before mature mRNA passes through nuclear pores to cytoplasmic 80S ribosomes.',
      },
      sourceFileNames: ['B 2.2 Learning Goals.docx'],
    },
    {
      topicCode: 'A2.2',
      paperType: 'Paper 1A',
      commandTerm: 'Identify',
      difficulty: 'Foundation',
      maxMarks: 1,
      questionMarkdown:
        'Which structure–composition pairing accurately distinguishes prokaryotic, fungal, and plant cell walls?',
      mcqOptions: [
        { label: 'A', text: 'Prokaryote: cellulose • Fungi: peptidoglycan • Plant: chitin' },
        { label: 'B', text: 'Prokaryote: peptidoglycan • Fungi: chitin • Plant: cellulose' },
        { label: 'C', text: 'Prokaryote: chitin • Fungi: cellulose • Plant: murein' },
        { label: 'D', text: 'All three organisms build cell walls strictly from peptidoglycan' },
      ],
      correctMcqOption: 'B',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Bacteria = peptidoglycan; Fungi = chitin; Plants = cellulose.', marks: 1 },
        ],
        model_answer: 'B — Peptidoglycan (prokaryotes), chitin (fungi), cellulose (plants).',
      },
      sourceFileNames: ['A2.2 Cell Structure Notes.pdf'],
    },
    {
      topicCode: 'A',
      paperType: 'Paper 1B',
      commandTerm: 'Distinguish',
      difficulty: 'Standard IB',
      maxMarks: 3,
      questionMarkdown:
        'Distinguish the Paper 2 examiner requirements for **Compare and contrast**, **Distinguish**, and **Evaluate**.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Compare and contrast requires BOTH explicit similarities and explicit differences side-by-side.', marks: 1 },
          { code: 'M2', criterion: 'Distinguish strictly asks for clear differences between two+ items.', marks: 1 },
          { code: 'M3', criterion: 'Evaluate demands strengths/evidence FOR, limitations/weaknesses AGAINST, AND a justified conclusion.', marks: 1 },
        ],
        model_answer:
          'Compare and contrast requires integrated similarities plus differences; Distinguish isolates key differences; Evaluate weighs strengths and limitations to reach a justified judgement.',
      },
      sourceFileNames: ['Command Terms IB BIO.pdf', 'CommandTermsVisualized.pdf'],
    },
  ],
  flashcards: [
    { topicCode: 'A1.1', frontMarkdown: 'Bond angle & Paper 2 drawing convention for Water H-bonds?', backMarkdown: '104.5° bent shape. Draw SOLID lines for polar covalent O–H bonds; draw DASHED lines strictly between δ+H of one molecule and lone-pair δ−O of an adjacent molecule.' },
    { topicCode: 'A1.1', frontMarkdown: 'Cohesion vs Adhesion of water in plant xylem?', backMarkdown: 'Cohesion = water-to-water H-bonds sustaining transpiration tension; Adhesion = water-to-polar hydrophilic cellulose walls resisting gravity fallback.' },
    { topicCode: 'A1.1', frontMarkdown: 'Ringed Seal vs Black-Throated Loon: Buoyancy & Thermal Insulation?', backMarkdown: 'Seal: blubber insulates + balances buoyancy. Loon: dense heavy bones lower buoyancy for deep pursuit dives + trapped air layer under waterproof preen-oiled feathers.' },
    { topicCode: 'A1.1', frontMarkdown: 'HL A1.1.7–A1.1.8: How did water arrive on Earth & stay liquid?', backMarkdown: 'Carbonaceous chondrite asteroids delivered water; Goldilocks orbital distance (0–100°C) + planetary gravity/magnetosphere retained liquid oceans.' },
    { topicCode: 'A1.2', frontMarkdown: 'BioK 2.6 Q5 Mandatory DNA Drawing Rule?', backMarkdown: 'Two antiparallel strands, C5′–C3′ phosphodiester bonds, base on C1′, dashed H-bonds (A=T 2, C≡G 3), and FULL base names (**Adenine, Thymine, Cytosine, Guanine** — never bare A/T/C/G alone).' },
    { topicCode: 'A1.2', frontMarkdown: 'Purines vs Pyrimidines & uniform dsDNA diameter?', backMarkdown: 'Purines (Adenine, Guanine) = 2 rings; Pyrimidines (Cytosine, Thymine, Uracil) = 1 ring. Purine + Pyrimidine keeps helix width constant at ~2 nm.' },
    { topicCode: 'A1.2', frontMarkdown: 'If dsDNA contains 30% Thymine, what is % Guanine?', backMarkdown: '20% Guanine (A = T = 30%, so G + C = 40%, G = C = 20%).' },
    { topicCode: 'A1.2', frontMarkdown: 'HL Hershey–Chase (1952): Why ³⁵S vs ³²P?', backMarkdown: '³⁵S labels protein capsid (stayed in supernatant); ³²P labels DNA phosphates (entered E. coli bacterial pellet -> DNA carries hereditary information).' },
    { topicCode: 'A1.2', frontMarkdown: 'How did Chargaff falsify Levene’s tetranucleotide hypothesis?', backMarkdown: '%A=%T and %C=%G across species while (A+T):(G+C) varies widely — refuting fixed 25% repeating base blocks.' },
    { topicCode: 'A1.2', frontMarkdown: 'HL Nucleosome architecture & charge attraction?', backMarkdown: '~146 bp negatively charged DNA (phosphates) wraps ~1.65–2 turns around an 8-histone basic (+) octamer locked by linker histone H1.' },
    { topicCode: 'A2.1', frontMarkdown: 'Miller–Urey (1953) apparatus inputs & output?', backMarkdown: 'Boiled H2O (ocean) + CH4/NH3/H2 loop + 60 kV spark (lightning) + water condenser -> abiotic amino acids within 1 week.' },
    { topicCode: 'A2.1', frontMarkdown: 'Why did the RNA World solve the DNA–protein paradox?', backMarkdown: 'RNA BOTH stores genetic sequence AND catalyzes reactions as ribozymes (modern ribosomal peptidyl transferase rRNA).' },
    { topicCode: 'A2.1', frontMarkdown: 'Why was LUCA NOT the very first cell (A2.1.5)?', backMarkdown: 'LUCA (~3.5–3.8 bya) already had DNA, ribosomes, ATP synthase, and membranes; simpler protocells evolved earlier without surviving branches.' },
    { topicCode: 'A2.2', frontMarkdown: 'Magnification formula M = I / A & unit ladder?', backMarkdown: 'M = Image / Actual (1 mm = 1,000 µm; 1 µm = 1,000 nm). Convert scale-bar image mm into µm BEFORE dividing.' },
    { topicCode: 'A2.2', frontMarkdown: 'Light vs TEM vs SEM vs Cryo-EM?', backMarkdown: 'Light (~200 nm, live/colour); TEM (~0.2 nm, 2D internal ultrastructure); SEM (~3–10 nm, 3D surface); Cryo-EM (flash-frozen hydrated native 3D).' },
    { topicCode: 'A2.2', frontMarkdown: 'Slide 25 Erratum: Realistic size of 80S vs 70S ribosomes?', backMarkdown: '80S eukaryotic ribosomes = ~20–30 nm (NOT 20 µm!); 70S prokaryotic ribosomes = ~20 nm.' },
    { topicCode: 'A2.2', frontMarkdown: 'Four pieces of HL Endosymbiotic evidence (A2.2.10)?', backMarkdown: '1) Double membrane; 2) Circular naked DNA; 3) 70S ribosomes; 4) Binary fission (+ sensitivity to bacterial antibiotics).' },
    { topicCode: 'A2.2', frontMarkdown: 'Name 4 atypical eukaryotic cells challenging Cell Theory (A2.2.9)?', backMarkdown: 'Aseptate fungal hyphae, skeletal muscle fibres, mature mammalian RBCs, phloem sieve tube elements.' },
    { topicCode: 'B1.1', frontMarkdown: 'Slide 16 Erratum: Is fructose a pentose or hexose?', backMarkdown: 'HEXOSE (C6H12O6)! Its furanose ring only looks 5-sided (4C + 1O) while two –CH2OH carbons sit outside.' },
    { topicCode: 'B1.1', frontMarkdown: 'Slide 36 Erratum: Each C=C bond removes how many H atoms?', backMarkdown: '2 hydrogen atoms per double bond (not 1).' },
    { topicCode: 'B1.1', frontMarkdown: 'Amylose vs Amylopectin vs Glycogen vs Cellulose?', backMarkdown: 'Amylose: α(1→4) helical. Amylopectin: α(1→4)+α(1→6). Glycogen: dense α(1→6) branches. Cellulose: alternating 180° β(1→4) chains H-bonded into microfibrils.' },
    { topicCode: 'B1.1', frontMarkdown: 'Cis vs Trans unsaturated fatty acids?', backMarkdown: 'Cis: same-side H creates ~30° kink -> loose packing -> liquid oils. Trans: opposite-side H stays linear -> tight packing -> elevated CHD risk.' },
    { topicCode: 'B1.2', frontMarkdown: 'Which protein folding levels use backbone vs R-groups?', backMarkdown: '2° (α-helix/β-sheet) = backbone C=O···H–N H-bonds. 3° = R-group disulfide bridges, ionic bonds, H-bonds, hydrophobic core.' },
    { topicCode: 'B1.2', frontMarkdown: 'Haemoglobin vs Insulin vs Collagen (HL B1.2.10–12)?', backMarkdown: 'Haemoglobin: 4 subunits (α2β2) + 4 Fe2+ haem (globular). Insulin: 2 disulfide-linked chains (globular). Collagen: insoluble triple-helix rope (fibrous).' },
    { topicCode: 'B2.2', frontMarkdown: 'Why must nuclear transcription & splicing precede 80S translation?', backMarkdown: 'Introns must be spliced out of pre-mRNA and 5′ cap / poly-A tail added inside the nucleus before cytosolic ribosomes translate it.' },
    { topicCode: 'B2.2', frontMarkdown: 'Slide 21 Erratum: Lysosome + Phagosome = ?', backMarkdown: 'Phagolysosome (or secondary lysosome) — acidic (~pH 4.8) digestive compartment.' },
    { topicCode: 'B2.2', frontMarkdown: 'Role of Clathrin triskelions & Dynamin (HL B2.2.9)?', backMarkdown: 'Adaptor-linked clathrin triskelions curve membrane into a polyhedral coated bud; dynamin pinches the neck before uncoating.' },
    { topicCode: 'B2.2', frontMarkdown: 'Differential ultracentrifugation pellet order from lowest to highest speed?', backMarkdown: '1,000g Nuclei -> 10,000g Mitochondria/Chloroplasts -> 100,000g ER/Golgi microsomes -> 200,000g 80S Ribosomes.' },
    { topicCode: 'A', frontMarkdown: 'AO3 Compare and contrast vs Evaluate?', backMarkdown: 'Compare & contrast: similarities AND differences explicitly linked. Evaluate: strengths + limitations + justified conclusion.' },
    { topicCode: 'A', frontMarkdown: 'May 2028 Biology HL IA real rubric (fixing old outline)?', backMarkdown: '24 marks across 4×6-mark criteria (Research Design, Data Analysis, Conclusion, Evaluation), max 3,000 words, 20% of IB grade.' },
  ],
  topicGuidanceNotes: {
    A: 'Ms MacDougall Year 1 CRHS BIO 621A / Allott & Mindorff Oxford 2023 + Command Terms AO1–AO3 & May 2028 4×6-mark IA guide.',
    'A1.1': 'Allott Ch. A1.1 (pp. 2–13): Polar covalent O–H (solid) vs interstitial H-bonds (dashed), xylem cohesion/adhesion, Ringed Seal vs Black-Throated Loon physical comparison, HL asteroid water delivery.',
    'A1.2': 'Allott Ch. A1.2 (pp. 14–27): 5′→3′ phosphodiester directionality, FULL base names in DNA drawings (BioK 2.6 Q5), Hershey–Chase ³²P/³⁵S, Chargaff falsification, HL 8-histone nucleosomes.',
    'A2.1': 'Allott Ch. A2.1 (pp. 28–38): Reducing prebiotic atmosphere, Miller–Urey (1953) apparatus, amphipathic protocells, RNA World ribozymes, and LUCA near alkaline hydrothermal vents.',
    'A2.2': 'Allott Ch. A2.2 (pp. 39–55): M = I/A scaling, Light/TEM/SEM/Cryo-EM, 5-view Cell Ultrastructure Lab (80S ribosomes = 20–30 nm, NOT 20 µm), atypical cells, HL endosymbiosis.',
    'B1.1': 'Allott Ch. B1.1 (pp. 130–149): Fructose is a hexose (5-ring furanose), each C=C removes 2 H, α vs β glucose polysaccharides (amylopectin/glycogen vs cellulose microfibrils), cis vs trans fats.',
    'B1.2': 'Allott Ch. B1.2 (pp. 150–167): Generalized amino acid, peptide condensation, heat/pH denaturation, HL 20 R-groups driving 1°–4° folding, Haemoglobin (α2β2 + Fe²⁺) vs Collagen.',
    'B2.2': 'Allott Ch. B2.2 (pp. 188–202): Nuclear splicing isolation, phagosome+lysosome = phagolysosome, mitochondria cristae/chloroplast thylakoid lumen, secretory rER→Golgi path, clathrin triskelions, ultracentrifugation.',
  },
};
