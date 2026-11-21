import type { SubjectClassroomSeed } from './types';
import {
  BONDING_CONTINUUM_LAB_SPEC,
  CHEM_IMF_BOILING_EXPLORER,
  CHEM_LAB_APPARATUS_EXPLORER,
  CHEM_ORBITAL_BOXES_EXPLORER,
  CHEM_PERIODICITY_EXPLORER,
  ENHANCED_HYDROGEN_SPECTRUM,
  VSEPR_POLARITY_LAB_SPEC,
} from './enhanced-diagrams';

export const CHEMISTRY_SL_SEED: SubjectClassroomSeed = {
  slug: 'chemistry-sl',
  materials: [
    {
      fileName: 'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      fileType: 'pdf',
      topicCode: 'S1',
      externalUrl: 'https://drive.google.com/file/d/1bjwyimkOj1_khD9htn43Kjm5tg31B4jz/view?usp=drivesdk',
      extractedText:
        'External Google Drive Reference (134.2 MB textbook): Oxford IB Diploma Programme Chemistry Course Companion (Bylikin, Horner, Grant & Tarcy, 2023 edition). Organized around Structure 1–3 and Reactivity 1–3; companion end-of-topic answers are indexed in Textbook - S1.1-S1.3 End of Topic Review Answers .pdf, 2.3 - Textbook answers.pdf, and Textbook - IB_CHEMISTRY_ANSWERS_S2.pdf.',
    },
    {
      fileName: 'RevisionDojo_IB_Chemistry_Cheatsheets_Merged.pdf',
      fileType: 'pdf',
      topicCode: 'S1',
      extractedText:
        'RevisionDojo IB Chemistry FA2025+ Quick-Reference Cheatsheets: High-yield summary equations, Data Booklet constants (22.7 dm^3 mol^-1 at STP 273 K / 100 kPa, R = 8.31 J K^-1 mol^-1), S1–S3 atomic/bonding/periodic summaries, and R1–R3 stoichiometry/energetics/kinetics/equilibrium formulas.',
    },
    {
      fileName: 'chemistry-guide-en_27d9a623-d741-4646-a331-1510ce0723b4.pdf',
      fileType: 'pdf',
      topicCode: null,
      externalUrl: 'https://drive.google.com/file/d/1jGFwezsZGbBVO9oHZZl6bVQT63_EsY08/view?usp=drivesdk',
      extractedText: [
        'Official IB Chemistry Guide (First Assessment 2025): Syllabus Framework & SL Scope.',
        '- Structure 1 (Particulate nature of matter: S1.1–S1.5), Structure 2 (Models of bonding & structure: S2.1–S2.4), Structure 3 (Classification of matter: S3.1–S3.2), Reactivity 1–3.',
        '- SL Assessment Model: Paper 1 (36%, 1h30: 1A 30 MCQs + 1B data-based/experimental); Paper 2 (44%, 1h30, 50 marks); IA Scientific Investigation (20%, 24 marks across 4×6-mark criteria, max 3,000 words).',
        '- Critical SL Constants: IB STP molar gas volume = 22.7 dm^3 mol^-1 at 273 K and 100 kPa; R = 8.31 J K^-1 mol^-1.',
      ].join('\n'),
    },
    {
      fileName: 'EXTERNAL ASSESSMENT INFORMATION.pdf',
      fileType: 'pdf',
      topicCode: null,
      externalUrl: 'https://drive.google.com/file/d/1brYG77h7xAhnoukQQRKv87azpyPD5-Yn/view?usp=drivesdk',
      extractedText:
        'IB Chemistry SL External Assessment Breakdown (FA 2025+): Paper 1A (30 marks MCQ) + Paper 1B (25 marks data/practical): combined 1h30, 36%; Paper 2 (50 marks SL): 1h30, 44%; calculator & Data Booklet permitted on both.',
    },
    {
      fileName: 'Command TERMS.pdf',
      fileType: 'pdf',
      topicCode: null,
      externalUrl: 'https://drive.google.com/file/d/13TL5q_9Lkq3T1wI2P7HJoudHZJgk6JKf/view?usp=drivesdk',
      extractedText:
        'IB Chemistry Command Terms: AO1 (Define, Draw, Label, List, Measure, State); AO2 (Annotate, Apply, Calculate, Describe, Distinguish, Estimate, Formulate, Identify, Outline); AO3 (Analyse, Compare, Compare & Contrast, Deduce, Design, Determine, Discuss, Evaluate, Explain, Justify, Predict, Suggest).',
    },
    {
      fileName: 'IB LEARNER PROFILE.pdf',
      fileType: 'pdf',
      topicCode: null,
      externalUrl: 'https://drive.google.com/file/d/1eTC78Xel_XBM9mZeiEnlyxlIiEU4OECQ/view?usp=drivesdk',
      extractedText:
        'IB Learner Profile attributes connected to experimental ethics, environmental chemistry, and collaborative IA design.',
    },
    {
      fileName: 'Day 1 - Classification of matter and intro to periodic trends.pdf',
      fileType: 'pdf',
      topicCode: 'S1.1',
      externalUrl: 'https://drive.google.com/file/d/16Wtlu9znEC3XhpfiKuQFI6sSz9UsPFwx/view?usp=drivesdk',
      extractedText:
        'Day 1 Class Slides (S1.1 & S3.1 Intro): Pure substances vs homogeneous/heterogeneous mixtures; separation methods (filtration, simple/fractional distillation, crystallization, solvation); kinetic molecular theory heating plateaus and T(K) = T(°C) + 273.15.',
    },
    {
      fileName: 'worksheet-1-2-calculation-of-relative-masse-no-molar-mass.pdf',
      fileType: 'pdf',
      topicCode: 'S1.2',
      externalUrl: 'https://drive.google.com/file/d/1a8uZtnFNMJd1z9J8iZ3SYowbhB2GgRDR/view?usp=drivesdk',
      extractedText:
        'Worksheet 1.2 Practice Problems: Calculate relative atomic mass Ar from isotopic abundance tables for sulfur, zinc, boron, magnesium; deduce unknown 81Br isotopic mass from Ar = 79.90 and 79Br (78.92, 50.69%).',
    },
    {
      fileName: 'worksheet-1-2-calculation-of-relative-masses-no-molar-mass-ans.pdf',
      fileType: 'pdf',
      topicCode: 'S1.2',
      externalUrl: 'https://drive.google.com/file/d/1__0ulI-lyFVupfL0yLpIBdndAPLqEJyE/view?usp=drivesdk',
      extractedText:
        'Worksheet 1.2 Answer Key: Ar(S) = 32.09; Ar(Zn) = 65.39; 81Br mass ~80.91–80.92; Boron ~19.9% 10B / ~80.1% 11B; Magnesium 24Mg 78.7%, 25Mg 10.1%, 26Mg 11.2%.',
    },
    {
      fileName: 'Day 1.3.1 - Emission Spectrum.pdf',
      fileType: 'pdf',
      topicCode: 'S1.3',
      externalUrl: 'https://drive.google.com/file/d/1y1MXJPbujta2pWevpXinTmoWP_WzkylD/view?usp=drivesdk',
      extractedText:
        'Day 1.3.1 Slides — Emission Spectra: c = λν; E = hν; continuous vs discrete line emission spectra; quantized shell convergence at high n approaching ionization IE1.',
    },
    {
      fileName: 'Day 1.3.3 hydrogen emission spectrum.pdf',
      fileType: 'pdf',
      topicCode: 'S1.3',
      externalUrl: 'https://drive.google.com/file/d/1mY2oB6jz8FN3yMP4IN_93ojZfO61re3W/view?usp=drivesdk',
      extractedText:
        'Day 1.3.3 Annotated Energy-Level Diagrams (S1.3): Lyman (UV to n=1), Balmer (Visible 656/486/434/410 nm to n=2), Paschen (IR to n=3). Errata fixed: h units are J·s (not J/s) and lines converge as ΔE shrinks (option B).',
    },
    {
      fileName: 'worksheet-1-3-emission-spectra.pdf',
      fileType: 'pdf',
      topicCode: 'S1.3',
      externalUrl: 'https://drive.google.com/file/d/13MvBvib5qb8tD_q6wmD9uwZe2LtYgmEL/view?usp=drivesdk',
      extractedText:
        'Worksheet 1.3 Hydrogen Emission Spectra Questions: Identify series (Lyman/Balmer/Paschen), explain high-frequency convergence, and contrast absorption vs emission spectra.',
    },
    {
      fileName: 'worksheet-1-3-emission-spectra Answers.pdf',
      fileType: 'pdf',
      topicCode: 'S1.3',
      externalUrl: 'https://drive.google.com/file/d/1b9Dc8gdsK_E2BF0Fnt5UL-Pd9UJoFk0b/view?usp=drivesdk',
      extractedText:
        'Worksheet 1.3 Answer Key: Transitions to n=1 -> UV (Lyman), n=2 -> visible (Balmer), n=3 -> IR (Paschen); convergence from decreasing ΔE spacing.',
    },
    {
      fileName: 'Day - electron configurations.pdf',
      fileType: 'pdf',
      topicCode: 'S1.3',
      externalUrl: 'https://drive.google.com/file/d/1mM_Nm3jCKvxhVXJjbhyIlZtp1BJGbpBy/view?usp=drivesdk',
      extractedText:
        'Day Electron Configurations Slides (S1.3.4–S1.3.6): s/p/d/f orbitals, Aufbau (4s before 3d), Pauli exclusion (↑↓), Hund’s rule, Cr [Ar]4s1 3d5 & Cu [Ar]4s1 3d10 exceptions, remove 4s before 3d for cations.',
    },
    {
      fileName: 'Day Practice Electron Configurations.pdf',
      fileType: 'pdf',
      topicCode: 'S1.3',
      externalUrl: 'https://drive.google.com/file/d/1U5FxmNZsRzAaDF_Bs5ssWnQVVUblBV32/view?usp=drivesdk',
      extractedText:
        'Class Slide Practice Set (S1.3): Orbital box diagrams and condensed configurations for atoms, Cr/Cu anomalies, and transition-metal cations (Ti2+, Fe3+, Cu+, Zn2+).',
    },
    {
      fileName: 'Electron configurations answers.pdf',
      fileType: 'pdf',
      topicCode: 'S1.3',
      externalUrl: 'https://drive.google.com/file/d/1jzcv-NUOVRXvwYEJSG6l1isEEN1Tzaw8/view?usp=drivesdk',
      extractedText:
        'Solved Electron Configuration Sheet: Checked orbital arrow diagrams and cation ionizations (removing outer ns before (n-1)d).',
    },
    {
      fileName: '8 Electron-Configuration.pdf',
      fileType: 'pdf',
      topicCode: 'S1.3',
      externalUrl: 'https://drive.google.com/file/d/1zT7G_C_TxR__N2azbxnP59YOZDpiA07o/view?usp=drivesdk',
      extractedText:
        'Worksheet 8 — Electron Configurations: Write full/noble-gas configurations for As, Cu, Ca, Kr, Br−, Fe2+ and draw Hund 2p/3d orbital boxes.',
    },
    {
      fileName: '8 Electron-Configuration Answers.pdf',
      fileType: 'pdf',
      topicCode: 'S1.3',
      externalUrl: 'https://drive.google.com/file/d/1N7SKtX_kclgCmJNFHBuSlOM35IyzHS14/view?usp=drivesdk',
      extractedText:
        'Worksheet 8 Answer Key: Verified full & condensed configurations for As, Cu, Ca, Kr, Br−, and Fe2+.',
    },
    {
      fileName: 'Textbook - S1.1-S1.3 End of Topic Review Answers .pdf',
      fileType: 'pdf',
      topicCode: 'S1',
      externalUrl: 'https://drive.google.com/file/d/1L3JkwiMQnvfLxPp4uJtilgTCBpatkW56/view?usp=drivesdk',
      extractedText:
        'Oxford 2023 Structure 1.1–1.3 End-of-Topic Review Answers: KMT plateaus, isotopic Ar calculations, emission spectra, and orbital electron configurations.',
    },
    {
      fileName: 'Day 1 - 2.1 Ionic Bonding.pdf',
      fileType: 'pdf',
      topicCode: 'S2.1',
      externalUrl: 'https://drive.google.com/file/d/1GXIjRzrsLpSwgBwG1vLMFwj4FTR0HpWt/view?usp=drivesdk',
      extractedText:
        'Day 2.1 Ionic Model Slides: Cations & anions in a 3D crystal lattice, ΔEN >= 1.8 heuristic, charge neutrality formula writing with transition-metal Roman numerals.',
    },
    {
      fileName: 'Day 2 2.2 Ionic Bonding Properties.pdf',
      fileType: 'pdf',
      topicCode: 'S2.1',
      externalUrl: 'https://drive.google.com/file/d/1gl5nAfwwTFsSoBvI37FmnmOF-aYCNhMt/view?usp=drivesdk',
      extractedText:
        'Day 2.2 Ionic Properties & Polyatomic Ions Slides: Memorized 7 IB polyatomic ions; high mp, molten/aqueous conductivity, and brittle cleavage when LIKE charges align and repel (fixing Slide 5 typo).',
    },
    {
      fileName: 'worksheet-2.1-fomation-of-ionic-compounds.pdf',
      fileType: 'pdf',
      topicCode: 'S2.1',
      externalUrl: 'https://drive.google.com/file/d/18vbWzdyn-wkFNjD9JjFp6qfX0mN52rvl/view?usp=drivesdk',
      extractedText:
        'Worksheet 2.1 Ionic Compounds Practice: Binary formulas (A3B2, Bi2O3), ionic vs atomic radii, Coulomb’s law (MgO vs NaCl), and lattice enthalpy.',
    },
    {
      fileName: 'worksheet-2.1-fomation-of-ionic-compounds-ans.pdf',
      fileType: 'pdf',
      topicCode: 'S2.1',
      externalUrl: 'https://drive.google.com/file/d/1SL6PIKiOuIOq3hdbi8fbIx3Yzse6O77m/view?usp=drivesdk',
      extractedText:
        'Worksheet 2.1 Answer Key: Endothermic ΔH_latt trends (KCl > RbCl > CsCl) and brittle shear cleavage markschemes.',
    },
    {
      fileName: 'Day 2.2-1.pdf',
      fileType: 'pdf',
      topicCode: 'S2.2',
      externalUrl: 'https://drive.google.com/file/d/1S6v6vIryPcIA01RIvi0VCQjPQF0YA-pl/view?usp=drivesdk',
      extractedText:
        'Day 2.2-1 Master Covalent Deck (55 slides, SL S2.2.1–S2.2.10): Lewis formulas, octet exceptions (BeCl2, BF3, AlCl3), bond order lengths/enthalpies (C–C 154 pm/346, C=C 134 pm/614, C≡C 120 pm/839), coordinate bonds (CO, NH4+, H3O+), VSEPR, covalent networks vs C60, IMFs, and chromatography Rf.',
    },
    {
      fileName: 'Day 2.2 VSEPR Intro.pdf',
      fileType: 'pdf',
      topicCode: 'S2.2',
      externalUrl: 'https://drive.google.com/file/d/1AjuandH_na5DBO4cvwzy6GQniS99ozSI/view?usp=drivesdk',
      extractedText:
        'Day 2.2 VSEPR Intro Slides: Repulsion order (LP–LP > LP–BP > BP–BP) across 2, 3, and 4 electron domains at SL (BeCl2 180°, BF3 120°, SO2 ~117°, CH4 109.5°, NH3 107°, H2O 104.5°).',
    },
    {
      fileName: 'Day - VSEPR and Bond Polarity.pdf',
      fileType: 'pdf',
      topicCode: 'S2.2',
      externalUrl: 'https://drive.google.com/file/d/1QRkESc16aixo6dxSdM9vRuYbcOPFPZ4V/view?usp=drivesdk',
      extractedText:
        'Day VSEPR & Bond Polarity Practice: Bond dipole vectors (δ+ -> δ−) and symmetric cancellation explaining why CCl4 and CO2 are non-polar despite polar covalent bonds.',
    },
    {
      fileName: 'Day 2.2 Molecular Polarity and Network Solids.pdf',
      fileType: 'pdf',
      topicCode: 'S2.2',
      externalUrl: 'https://drive.google.com/file/d/1jgnGJrNN4SjQaFCB_LkgwlNanrnd3uoz/view?usp=drivesdk',
      extractedText:
        'Day 2.2 Molecular Polarity & Network Solids: Diamond, graphite, graphene, SiO2 quartz vs simple molecular C60 fullerene.',
    },
    {
      fileName: 'Day 2.2.8 - Intermolecular Forces.pdf',
      fileType: 'pdf',
      topicCode: 'S2.2',
      externalUrl: 'https://drive.google.com/file/d/1MsGRzSvxkMuSmdI_R_2Lq6R9Qodgk72V/view?usp=drivesdk',
      extractedText:
        'Day 2.2.8 Intermolecular Forces Slides: LDFs (present in ALL molecules, increasing with e- count & surface area), permanent dipole–dipole forces, and hydrogen bonding (H bonded to F, O, or N).',
    },
    {
      fileName: 'Day 2.2.8 - Strength of H bond.pdf',
      fileType: 'pdf',
      topicCode: 'S2.2',
      externalUrl: 'https://drive.google.com/file/d/11EH-X5d4Myn3JLitrNGLfq2x3TwGsTNj/view?usp=drivesdk',
      extractedText:
        'Day 2.2.8 Hydrogen Bond Strength Deep-Dive: Why H2O (100°C) boils higher than HF (19.5°C) and NH3 (−33°C) because each H2O averages twice as many H-bonds per molecule (2 H donors + 2 O lone pairs).',
    },
    {
      fileName: 'Day 2.2.9 Strength of IMF.pdf',
      fileType: 'pdf',
      topicCode: 'S2.2',
      externalUrl: 'https://drive.google.com/file/d/1OkzNXopfl8zkF6-dx5ON5IgVmo47xB2W/view?usp=drivesdk',
      extractedText:
        'Day 2.2.9 IMF Strength, Boiling Points & Solubility Trends: Group 14–17 hydrides, pentane (36°C) vs 2,2-dimethylpropane (9.5°C), and C60 simple molecular clarification (p.5 note).',
    },
    {
      fileName: 'Structure Diagrams- Covalent Bonding.docx',
      fileType: 'docx',
      topicCode: 'S2.2',
      externalUrl: 'https://drive.google.com/file/d/1pTnTUDP4Si5FNB2BC7J0WHfm9jTLN_hV/view?usp=drivesdk',
      extractedText:
        'Teacher Structure-Drawing Assignment (S2.2): Lewis dot-cross diagrams, dative arrows, 3D wedge/dash VSEPR shapes, bond angles, and dipole vectors.',
    },
    {
      fileName: 'Structure Diagrams- Covalent Bonding.txt',
      fileType: 'txt',
      topicCode: 'S2.2',
      externalUrl: 'https://drive.google.com/file/d/1Z2M4OFbcB6bCzED2gG2QRwRmYawmltqu/view?usp=drivesdk',
      extractedText:
        'Plain-text checklist of SL Lewis formulas, coordinate covalent examples, VSEPR electron domain vs molecular geometries, and net molecular polarity.',
    },
    {
      fileName: 'worksheet-2.2.4-network-covalent-ans (1).pdf',
      fileType: 'pdf',
      topicCode: 'S2.2',
      externalUrl: 'https://drive.google.com/file/d/1_57nnZ83RLLaQLj2HMN6SzXl4cesC70g/view?usp=drivesdk',
      extractedText:
        'Worksheet 2.2.4 Network Covalent Solids Answer Key: Diamond & SiO2 insulators (109.5° σ bonds), graphite 120° sheets with delocalized conductors & sliding weak interlayer LDFs, and simple molecular C60.',
    },
    {
      fileName: 'Day 2.3.pdf',
      fileType: 'pdf',
      topicCode: 'S2.3',
      externalUrl: 'https://drive.google.com/file/d/1DMd3fbLDtRP6d7XLnkdE2zXmR3b7R5LJ/view?usp=drivesdk',
      extractedText:
        'Day 2.3 Metallic Bonding Slides (S2.3): Lattice of positive cations attracted to delocalized electrons NOT fixed to any single atom (Slide 2 fix); malleability; Na (98°C) < Mg (650°C) < Al (660°C).',
    },
    {
      fileName: '2.3 - Textbook answers.pdf',
      fileType: 'pdf',
      topicCode: 'S2.3',
      externalUrl: 'https://drive.google.com/file/d/1KzvyBXt1uBhTe0MJHeqSGOxiYg16YmBq/view?usp=drivesdk',
      extractedText:
        'Oxford 2023 Section 2.3 Metallic Bonding Textbook Answers: Group 1 mp decrease down group, Period 3 increase Na -> Mg -> Al, and mobile-electron conduction.',
    },
    {
      fileName: 'Day 2.4 - From Structure to Models.pdf',
      fileType: 'pdf',
      topicCode: 'S2.4',
      externalUrl: 'https://drive.google.com/file/d/1dTETAdTjZPeYY67o3p7AXFqxlsGXHcaw/view?usp=drivesdk',
      extractedText:
        'Day 2.4 From Models to Materials (S2.4, 49 slides): van Arkel–Ketelaar triangle (CsF, TlBr Δχ=1.2/avg=2.4 borderline, AlCl3, SiO2, MgZn2), substitutional vs interstitial alloys, and addition polymerization (S2.4.4–2.4.6).',
    },
    {
      fileName: 'day S 2.4 review questions.pdf',
      fileType: 'pdf',
      topicCode: 'S2.4',
      externalUrl: 'https://drive.google.com/file/d/107iIJ7F5SZWvBcBanvW72U-wmtbBM0Vx/view?usp=drivesdk',
      extractedText:
        'S2.4 Review Practice Sheet: Bonding triangle coordinates, alloy hardness vs pure metal malleability, and alkene -> poly(alkene) addition repeat units.',
    },
    {
      fileName: 'Textbook - IB_CHEMISTRY_ANSWERS_S2.pdf',
      fileType: 'pdf',
      topicCode: 'S2',
      externalUrl: 'https://drive.google.com/file/d/1CuNSCbd8nGNS2EcIhVaxltDmJV-xtqp6/view?usp=drivesdk',
      extractedText:
        'Oxford 2023 Structure 2 Complete End-of-Chapter Answer Key (S2.1–S2.4): Ionic lattices, VSEPR, IMFs, Rf, metallic trends, bonding continuum, alloys, and polymers.',
    },
    {
      fileName: 'Day 3 - 3.1.3 Trends.pdf',
      fileType: 'pdf',
      topicCode: 'S3.1',
      externalUrl: 'https://drive.google.com/file/d/1iPjp2o5-9toR_6gtSgYtKt6sBD5c5Jbn/view?usp=drivesdk',
      extractedText:
        'Day 3.1.3 Periodic Trends Slides: Period 3 effective nuclear charge rise vs down-group shielding; radius, Be/B & N/O IE1 anomalies, Pauling electronegativity, Period 3 oxides.',
    },
    {
      fileName: 'R 3.1.3 Electronegativity.pdf',
      fileType: 'pdf',
      topicCode: 'S3.1',
      externalUrl: 'https://drive.google.com/file/d/1_1tx-EelW8spgPX-eQ1HhwP7nYxeScJ9/view?usp=drivesdk',
      extractedText:
        'SL S3.1.3 Electronegativity Slides: Shared-pair attraction scale (F = 4.0 to Cs ~0.7–0.8), isoelectronic series Al3+ < Mg2+ < Na+ < F− < O2− < N3−, and Period 3 oxide acid-base trends.',
    },
    {
      fileName: 'Lab INFO  measurement-and-data-processing.pdf',
      fileType: 'pdf',
      topicCode: null,
      externalUrl: 'https://drive.google.com/file/d/1xlJCZ7Awkt2oTAO4pvmJ1TtBRBMQ5rv0/view?usp=drivesdk',
      extractedText:
        'Lab INFO 1: Measurement & data processing — precision vs accuracy, ±half graduation analogue vs ±1 last digit digital, systematic % error, sig figs, R² graphs.',
    },
    {
      fileName: 'Lab INFO Lab Safety Rules.pdf',
      fileType: 'pdf',
      topicCode: null,
      externalUrl: 'https://drive.google.com/file/d/10Ve6AJRN4xO-6DrivJFu8RRP2nB5Lj9P/view?usp=drivesdk',
      extractedText:
        'Lab INFO 2: Safety — splash goggles, fume hoods, SDS hazard checks prior to IA trials, acid-to-water rule, emergency eyewash/shower.',
    },
    {
      fileName: 'Lab INFO data-table-guidelines.pdf',
      fileType: 'pdf',
      topicCode: null,
      externalUrl: 'https://drive.google.com/file/d/1d3sYhKRalfX3AoYv95qZe4XrZPVcLLEJ/view?usp=drivesdk',
      extractedText:
        'Lab INFO 3: Data Table Guidelines — SI units & ± uncertainties in column headers only (Volume / cm³ ± 0.05), consistent instrument decimal precision.',
    },
    {
      fileName: 'Lab INFO experimental-errors-summary.pdf',
      fileType: 'pdf',
      topicCode: null,
      externalUrl: 'https://drive.google.com/file/d/1NExVM9IAF32Z7nQr3RoSvuj1N4_9dlGK/view?usp=drivesdk',
      extractedText:
        'Lab INFO 4: Experimental Errors — random scatter vs directional systematic error diagnosed by comparing % discrepancy against total % random uncertainty.',
    },
    {
      fileName: 'Lab INFO graphing-guidelines.pdf',
      fileType: 'pdf',
      topicCode: null,
      externalUrl: 'https://drive.google.com/file/d/1-JapCArA0sfd8TW3Cpy_Pp81UoyFEuRm/view?usp=drivesdk',
      extractedText:
        'Lab INFO 5: Graphing Guidelines — IV on x-axis, DV on y-axis (Quantity / unit), >50% span, vertical/horizontal error bars + max/min gradient lines.',
    },
    {
      fileName: 'Lab INFO making-measurements-in-the-lab.pdf',
      fileType: 'pdf',
      topicCode: null,
      externalUrl: 'https://drive.google.com/file/d/1Q7hH8bnZnnK5DE3DRM6c0QjvJz0NLtwD/view?usp=drivesdk',
      extractedText:
        'Lab INFO 6: Meniscus eye-level reading, fixed volumetric pipettes (±0.04–0.06 cm³), and 50.00 cm³ burettes (±0.05 cm³ per reading -> ±0.10 cm³ per ΔV titre).',
    },
    {
      fileName: 'Lab INFO names-of-laboratory-equipment-and-selected-apparatus.pdf',
      fileType: 'pdf',
      topicCode: null,
      externalUrl: 'https://drive.google.com/file/d/15os0dIwkFClnjr4HADjGAJgAxRRIrwcd/view?usp=drivesdk',
      extractedText:
        'Lab INFO 7: Apparatus Visual Chart — volumetric flasks, burettes, pipettes, Erlenmeyer flasks, Buchner funnels, crucibles, reflux condensers, separating funnels.',
    },
    {
      fileName: 'Lab INFO propagation-of-uncertainties.pdf',
      fileType: 'pdf',
      topicCode: null,
      externalUrl: 'https://drive.google.com/file/d/1tX8TeUry45l3YqVtKxyQ7_k38EZfTGiO/view?usp=drivesdk',
      extractedText:
        'Lab INFO 8: Uncertainty Propagation — addition/subtraction sums ABSOLUTE uncertainties (Δy = Δa + Δb); multiplication/division sums PERCENTAGE uncertainties (%Δy = %Δa + %Δb).',
    },
    {
      fileName: 'Lab INFO scientific-writing-conventions-info-sheet.pdf',
      fileType: 'pdf',
      topicCode: null,
      externalUrl: 'https://drive.google.com/file/d/1XYRBl4hVcnhMUxpJYMz6sHpcoBjPYsy8/view?usp=drivesdk',
      extractedText:
        'Lab INFO 9: Scientific Writing Conventions — impersonal tense, IUPAC naming, state symbols (s), (l), (g), (aq), numbered table/figure captions.',
    },
    {
      fileName: 'Lab INFO selected-laboratory-techniques.pdf',
      fileType: 'pdf',
      topicCode: null,
      externalUrl: 'https://drive.google.com/file/d/1bU0k3txUijXCwTRj-a8XfO-edRbhoGj6/view?usp=drivesdk',
      extractedText:
        'Lab INFO 10: Laboratory Techniques — concordant titration (±0.10 cm³), vacuum filtration, recrystallization drying to constant mass, distillation, coffee-cup calorimetry.',
    },
  ],
  notes: [
    {
      topicCode: 'S1.1',
      title: 'Particulate Matter, Kinetic Curves & Mass Spectrometry (S1.1–S1.2)',
      summary:
        'Unifies elements/compounds/mixtures and separation methods with heating plateaus, Kelvin conversion, mass spectra, and Worksheet 1.2 Ar algebra (Bylikin Oxford 2023 Ch. S1.1–S1.2).',
      sourceFileNames: ['Day 1 - Classification of matter and intro to periodic trends.pdf', 'worksheet-1-2-calculation-of-relative-masses-no-molar-mass-ans.pdf'],
      blocks: [
        { type: 'heading', level: 2, text: '1. Separation Techniques & KMT Heating Plateaus (S1.1)' },
        {
          type: 'playable_diagram',
          spec: {
            type: 'comparison_matrix',
            id: 'chem-s11-separations',
            title: 'S1.1 Separation Methods & Phase Plateau Mechanics',
            caption: 'Directly aligned to Day 1 Slides & Oxford 2023 Ch. S1.1–S1.2.',
            columns: ['System / Process', 'Physical Basis', 'KMT / Exam Point'],
            rows: [
              { criterion: 'Filtration & Recrystallization', cells: ['Particle size / differential solubility with T', 'Buchner vacuum traps precipitate; slow cooling leaves soluble impurities dissolved'] },
              { criterion: 'Simple vs Fractional Distillation', cells: ['Boiling-point difference ΔTb', 'Fractionating column creates repeated vaporization–condensation cycles for miscible liquids'] },
              { criterion: 'Heating Curve Plateaus', cells: ['T(K) = T(°C) + 273.15 constant during melting/boiling', 'Added thermal energy breaks IMFs (raises potential energy) while average Ek stays constant'], ibExamTip: 'State "overcomes intermolecular forces" for molecular substances — never "breaks covalent bonds" during boiling water!' },
              { criterion: 'Mass Spectrometry (S1.2)', cells: ['m/z peaks & isotopic % abundance', 'Ar = Σ(mass_i × %abundance_i) / 100 relative to ¹²C = 12 exactly'] },
            ],
          },
        },
        {
          type: 'equation',
          latex: 'A_r(\\text{Br}) = 79.90 = \\frac{(78.92 \\times 50.69) + (m_{81} \\times 49.31)}{100} \\implies m(^{81}\\text{Br}) = 80.91',
          caption: 'Worksheet 1.2 worked isotope deduction: check whether abundances are percentages (/100) or fractions.',
        },
      ],
    },
    {
      topicCode: 'S1.3',
      title: 'Emission Spectra, Orbital Boxes & Electron Configurations (S1.3)',
      summary:
        'Maps quantized Lyman/Balmer/Paschen convergence, c = λν & E = hν, Hund/Pauli/Aufbau orbital boxes, Cr/Cu exceptions, and removes 4s before 3d (Bylikin Oxford 2023 Ch. S1.3).',
      sourceFileNames: ['Day 1.3.3 hydrogen emission spectrum.pdf', 'Day - electron configurations.pdf', '8 Electron-Configuration Answers.pdf'],
      blocks: [
        { type: 'playable_diagram', spec: ENHANCED_HYDROGEN_SPECTRUM },
        { type: 'playable_diagram', spec: CHEM_ORBITAL_BOXES_EXPLORER },
        {
          type: 'callout',
          variant: 'examiner_warning',
          title: 'Day 1.3.3 Slide Errata Fixed + Two Exam Traps (Cr/Cu & 4s First)',
          markdown:
            '1) **Slide 25 typo:** Planck’s constant is **$h = 6.63 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$** (NOT $\\text{J/s}$!). 2) **Slide 35 fix:** Lines converge at higher frequency (**option B**) because shell spacing $\\Delta E$ decreases as $n \\to \\infty$ up to $IE_1$. 3) Always write **Cr** $[\\text{Ar}]4s^1 3d^5$ and **Cu** $[\\text{Ar}]4s^1 3d^{10}$, and when forming transition-metal cations ($\text{Fe}^{2+}: [\\text{Ar}]3d^6$), remove **$4s$ electrons BEFORE $3d$**!',
        },
      ],
    },
    {
      topicCode: 'S2.1',
      title: 'The Ionic Model, Polyatomic Ions & Lattice Enthalpy (S2.1)',
      summary:
        'Electrostatic 3D lattice properties, all 7 memorized IB polyatomic ions, Coulombic charge-radius trends in ΔH_latt, and brittle crystal cleavage (Bylikin Oxford 2023 Ch. S2.1).',
      sourceFileNames: ['Day 2 2.2 Ionic Bonding Properties.pdf', 'worksheet-2.1-fomation-of-ionic-compounds-ans.pdf'],
      blocks: [
        {
          type: 'callout',
          variant: 'examiner_warning',
          title: 'Day 2 Slide 5 Erratum: Brittle Fracture = LIKE Charges Repel!',
          markdown:
            'Slide 5 accidentally printed *"opposite charges repel"*. Mechanically, hammer shear shifts one ionic layer by half a repeat distance, aligning **LIKE charges ($+/+$ and $-/-$) adjacent** — strong electrostatic repulsion shatters the lattice along flat cleavage planes.',
        },
        {
          type: 'playable_diagram',
          spec: {
            type: 'comparison_matrix',
            id: 'chem-s21-ionic-matrix',
            title: 'IB Polyatomic Ions, Physical Properties & Lattice Enthalpy Drivers (S2.1)',
            caption: 'Consolidated from Day 2.1–2.2 Slides & Worksheet 2.1.',
            columns: ['Ionic Concept', 'Memorized Formula / Trend', 'Coulombic Explanation'],
            rows: [
              { criterion: '7 Mandatory Polyatomic Ions', cells: ['NH4+, OH−, NO3−, HCO3−, CO3²⁻, SO4²⁻, PO4³⁻', 'Charge-balance cross-multiplication (e.g. (NH4)2SO4, Bi2O3)'] },
              { criterion: 'Lattice Enthalpy ΔH_latt', cells: ['MX(s) -> M+(g) + X−(g) (always endothermic)', 'Scales with |q+·q−|/(r+ + r−): MgO (2852°C) >> NaCl (801°C); KCl > RbCl > CsCl'] },
              { criterion: 'Conductivity & Solubility', cells: ['Solid insulator; molten/aq conductor', 'Rigid lattice locks ions in (s), whereas melting or polar hydration releases mobile ions'], ibExamTip: 'Never mention "free/delocalized electrons" inside an ionic compound!' },
            ],
          },
        },
      ],
    },
    {
      topicCode: 'S2.2',
      title: 'Covalent Bonding, Bond Order & Interactive 3D VSEPR Polarity Lab (S2.2.1–S2.2.6)',
      summary:
        'Explore 16 SL molecules in an interactive 3D VSEPR & dipole lab alongside Lewis octet exceptions, coordinate bonds, and C–C / C=C / C≡C bond order trends (Day 2.2-1 & Bylikin S2.2).',
      sourceFileNames: ['Day 2.2-1.pdf', 'Day 2.2 VSEPR Intro.pdf', 'Day - VSEPR and Bond Polarity.pdf'],
      blocks: [
        { type: 'playable_diagram', spec: VSEPR_POLARITY_LAB_SPEC },
        {
          type: 'playable_diagram',
          spec: {
            type: 'comparison_matrix',
            id: 'chem-s22-covalent-matrix',
            title: 'Carbon Bond Order Lengths/Enthalpies (Day 2.2-1) & Octet Exceptions',
            caption: 'SL covalent rules S2.2.1–S2.2.6 before intermolecular forces.',
            columns: ['Feature', 'Quantitative / Molecular Data', 'Bonding Reason'],
            rows: [
              { criterion: 'Bond Order Progression', cells: ['C–C: 154 pm / 346 kJ mol⁻¹ | C=C: 134 pm / 614 kJ mol⁻¹ | C≡C: 120 pm / 839 kJ mol⁻¹', 'Greater shared electron density pulls nuclei closer and stiffens attraction'] },
              { criterion: 'Incomplete Octets', cells: ['BeCl2 (4e− linear 180°), BF3 & AlCl3 (6e− trigonal planar 120°)', 'Small electropositive central atoms form stable electron-deficient Lewis acids'] },
              { criterion: 'Coordinate (Dative) Bonds', cells: ['CO (:C≡O:), NH4+, H3O+, Al2Cl6 dimer', 'One donor atom contributes BOTH electrons of a shared pair; once formed, all bonds are equivalent'] },
              { criterion: 'Symmetry Vector Test', cells: ['Non-polar: CO2, BF3, CCl4 | Polar: SO2, NH3, H2O, CHCl3', 'Polar covalent bonds cancel to μ_net = 0 only in symmetric lone-pair-free geometries'], ibExamTip: 'State BOTH polar covalent bonds AND whether symmetry/lone pairs cancel bond dipoles.' },
            ],
          },
        },
      ],
    },
    {
      topicCode: 'S2.2',
      title: 'Covalent Networks, Intermolecular Forces & Chromatography (S2.2.7–S2.2.10)',
      summary:
        'Unifies diamond/graphite/graphene/SiO2 vs C60 molecular fullerene, Group 14–17 boiling trends, pentane isomer contact area, and TLC/paper Rf separation (Day 2.2.8–2.2.9 & Bylikin S2.2).',
      sourceFileNames: ['Day 2.2.8 - Intermolecular Forces.pdf', 'Day 2.2.9 Strength of IMF.pdf', 'worksheet-2.2.4-network-covalent-ans (1).pdf'],
      blocks: [
        { type: 'playable_diagram', spec: CHEM_IMF_BOILING_EXPLORER },
        {
          type: 'callout',
          variant: 'examiner_warning',
          title: 'Two Critical Slide Corrections (Day 2.2.8 Slide 1 & Day 2.2.9 p.5)',
          markdown:
            '1) **London Dispersion Forces act between ALL molecules**, polar and non-polar alike — NOT "only non-polar molecules" as Slide 1 implied. 2) **$\\text{C}_{60}$ fullerene is SIMPLE MOLECULAR**, NOT a giant covalent network solid — discrete $\\text{C}_{60}$ spheres attract solely via weak LDFs (low sublimation/mp, soluble in toluene), contrasting diamond, graphite, graphene, and $\\text{SiO}_2$.',
        },
        {
          type: 'equation',
          latex: 'R_f = \\frac{d_{\\text{solute spot}}}{d_{\\text{solvent front}}}',
          caption: 'S2.2.10 Paper/TLC chromatography: mark origin in PENCIL and keep solvent level below baseline.',
        },
      ],
    },
    {
      topicCode: 'S2.3',
      title: 'The Metallic Model, Cation Charge Density & Slip Planes (S2.3)',
      summary:
        'Explains non-directional metallic lattices, thermal/electrical conduction, malleability, Period 3 melting points (Na < Mg < Al), and Group 1 decreases (Day 2.3 & Bylikin S2.3).',
      sourceFileNames: ['Day 2.3.pdf', '2.3 - Textbook answers.pdf'],
      blocks: [
        {
          type: 'callout',
          variant: 'examiner_warning',
          title: 'Day 2.3 Slide 2 Typo & Key IB Definition',
          markdown:
            'Always write the complete S2.3 definition (Day 2.3 slide 2 accidentally dropped *"not"*): metallic bonding is the **electrostatic attraction between a lattice of positive metal cations and a sea of delocalized valence electrons that are NOT fixed to any single atom or bond**.',
        },
        {
          type: 'playable_diagram',
          spec: {
            type: 'comparison_matrix',
            id: 'chem-s23-metallic-trends',
            title: 'Metallic Structure -> Macroscopic Trends & Slip Planes (S2.3)',
            caption: 'Contrast Period 3 charge-density rise with Group 1 ionic-radius drop.',
            columns: ['Trend / Property', 'Data Example', 'S2.3 Markscheme Explanation'],
            rows: [
              { criterion: 'Period 3 Melting Point Rise', cells: ['Na (98°C) < Mg (650°C) < Al (660°C)', 'Higher cation charge (1+ -> 2+ -> 3+), more delocalized e− per atom, and smaller cation radius strengthen lattice attraction'] },
              { criterion: 'Group 1 Melting Point Fall', cells: ['Li (181°C) > Na (98°C) > K (63°C)', 'All have 1+ cations & 1 valence e−/atom, but larger radius down group weakens cation–electron attraction'] },
              { criterion: 'Malleability & Conduction', cells: ['Hammered into foil without shattering; solid/molten conductors', 'Non-directional attraction lets layers slide while mobile delocalized electrons carry current and thermal KE'], ibExamTip: 'Mention "non-directional electrostatic attraction" to guarantee full malleability marks.' },
            ],
          },
        },
      ],
    },
    {
      topicCode: 'S2.4',
      title: 'Bonding Continuum (van Arkel–Ketelaar), Alloys & Addition Polymers (S2.4)',
      summary:
        'Interactive van Arkel–Ketelaar triangle with Day 2.4 coordinates (including TlBr & AlCl3) + playable Ionic/Metallic/Alloy/Allotrope models and addition polymerization equations (Day 2.4 & Bylikin S2.4).',
      sourceFileNames: ['Day 2.4 - From Structure to Models.pdf', 'day S 2.4 review questions.pdf', 'Textbook - IB_CHEMISTRY_ANSWERS_S2.pdf'],
      blocks: [
        { type: 'playable_diagram', spec: BONDING_CONTINUUM_LAB_SPEC },
        {
          type: 'playable_diagram',
          spec: {
            type: 'comparison_matrix',
            id: 'chem-s24-alloys-polymers',
            title: 'Alloys (Substitutional vs Interstitial) & Addition Polymers (S2.4.2–S2.4.6)',
            caption: 'From Day 2.4 From Structure to Models (49-slide deck).',
            columns: ['Material Class', 'Microscopic Architecture', 'Property & Polymerization Rule'],
            rows: [
              { criterion: 'Substitutional Alloy (Brass: Cu + Zn)', cells: ['Comparable-radius Zn replaces Cu lattice sites inside shared electron sea', 'Unequal atomic radii ripple crystal planes, resisting slip (harder & less malleable than pure Cu)'] },
              { criterion: 'Interstitial Alloy (Steel: Fe + C)', cells: ['Tiny C atoms wedge into octahedral voids between large Fe cations', 'Rigidly pins crystal layers to dramatically raise tensile yield strength'] },
              { criterion: 'Addition Polymers (S2.4.4–2.4.6)', cells: ['n CH2=CHX -> [−CH2–CHX−]n (polyethene, PVC, PTFE)', 'Alkene π-bond opens into saturated C–C backbone with 100% atom economy (no small byproduct)'], ibExamTip: 'Always draw continuation bonds extending right through BOTH square brackets!' },
            ],
          },
        },
      ],
    },
    {
      topicCode: 'S3.1',
      title: 'Periodic Trends: Radii, IE1 Anomalies, Pauling χ & Period 3 Oxides (S3.1)',
      summary:
        'Compare effective nuclear charge vs shielding across Period 3 and Groups 1/17, isoelectronic ion sizes, Be/B & N/O IE1 dips, and oxide pH reactions (Day 3.1.3 & Bylikin S3.1).',
      sourceFileNames: ['Day 3 - 3.1.3 Trends.pdf', 'R 3.1.3 Electronegativity.pdf', 'RevisionDojo_IB_Chemistry_Cheatsheets_Merged.pdf'],
      blocks: [
        { type: 'playable_diagram', spec: CHEM_PERIODICITY_EXPLORER },
        {
          type: 'callout',
          variant: 'definition',
          title: 'Period 3 Oxide Acid–Base Progression & Isoelectronic Radius Rule (S3.1)',
          markdown:
            'Across Period 3, oxides shift from ionic basic ($\\text{Na}_2\\text{O} + \\text{H}_2\\text{O} \\to 2\\text{NaOH}$ pH 13–14; $\\text{MgO}$ pH ~9–10), through amphoteric $\\text{Al}_2\\text{O}_3$ (water-insoluble, dissolves in strong acid AND strong alkali), to acidic covalent ($\\text{P}_4\\text{O}_{10} + 6\\text{H}_2\\text{O} \\to 4\\text{H}_3\\text{PO}_4$; $\\text{SO}_3 + \\text{H}_2\\text{O} \\to \\text{H}_2\\text{SO}_4$, pH 0–2). Isoelectronic $10\\ e^-$ radii shrink with rising $Z$: $\\text{Al}^{3+} < \\text{Mg}^{2+} < \\text{Na}^+ < \\text{F}^- < \\text{O}^{2-} < \\text{N}^{3-}$.',
        },
      ],
    },
    {
      topicCode: 'S1',
      title: 'Chemistry SL Laboratory Apparatus, Uncertainty Propagation & Error Audit',
      summary:
        'Consolidates all 10 CRHS Lab INFO guides: meniscus reading, ±0.10 cm³ titration ΔV rule, % vs absolute uncertainty propagation, and random vs systematic evaluation (Lab INFO 1–10).',
      sourceFileNames: ['Lab INFO  measurement-and-data-processing.pdf', 'Lab INFO making-measurements-in-the-lab.pdf', 'Lab INFO propagation-of-uncertainties.pdf', 'Lab INFO experimental-errors-summary.pdf'],
      blocks: [
        { type: 'playable_diagram', spec: CHEM_LAB_APPARATUS_EXPLORER },
        {
          type: 'callout',
          variant: 'key_formula',
          title: 'Uncertainty Propagation & Systematic Error Diagnosis (Lab INFO 4, 6 & 8)',
          markdown:
            '1) **Addition/Subtraction ($y = a \\pm b$):** sum **ABSOLUTE** uncertainties: $\\Delta y = \\Delta a + \\Delta b$ (two $50.00\\text{ cm}^3$ burette readings $\\pm 0.05$ give $\\Delta V = \\pm 0.10\\text{ cm}^3$). 2) **Multiplication/Division:** sum **PERCENTAGE** uncertainties ($\\frac{\\Delta y}{y} = \\frac{\\Delta a}{a} + \\frac{\\Delta b}{b}$). 3) **Random vs Systematic Verdict:** If **% discrepancy** from literature $>\\text{total \\% random uncertainty}$, a **systematic error** (e.g. calorimetry heat loss) dominates!',
        },
      ],
    },
  ],
  questions: [
    {
      topicCode: 'S1.2',
      paperType: 'Paper 2',
      commandTerm: 'Calculate',
      difficulty: 'Standard IB',
      maxMarks: 3,
      questionMarkdown:
        'Bromine has a relative atomic mass **$A_r = 79.90$**. Mass spectrometry shows $^{79}\\text{Br}$ has isotopic mass **$78.92$** at **$50.69\\%$** abundance. Calculate the isotopic mass of $^{81}\\text{Br}$ to two decimal places (Worksheet 1.2).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Deduce % abundance of 81Br = 100 − 50.69 = 49.31%.', marks: 1 },
          { code: 'M2', criterion: 'Set up weighted-mean equation: 79.90 = (78.92 × 50.69 + 49.31 m) / 100.', marks: 1 },
          { code: 'A1', criterion: 'Solve cleanly -> m = 80.91 (accept 80.91–80.92).', marks: 1 },
        ],
        model_answer: '81Br abundance = 49.31%; (7990 − 4000.45) / 49.31 = 80.91.',
      },
      sourceFileNames: ['worksheet-1-2-calculation-of-relative-masse-no-molar-mass.pdf', 'worksheet-1-2-calculation-of-relative-masses-no-molar-mass-ans.pdf'],
    },
    {
      topicCode: 'S1.3',
      paperType: 'Paper 2',
      commandTerm: 'Explain',
      difficulty: 'Standard IB',
      maxMarks: 3,
      questionMarkdown:
        'Explain how the **Lyman** and **Balmer** emission series form in hydrogen and why lines converge at higher frequencies (Day 1.3.3).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Excited electrons drop from higher quantized shells n2 to lower shells n1 emitting photons with ΔE = hν.', marks: 1 },
          { code: 'M2', criterion: 'Lyman drops to n = 1 (UV); Balmer drops to n = 2 (visible: 656 nm red -> 410 nm violet).', marks: 1 },
          { code: 'M3', criterion: 'Energy spacing ΔE between successive shells shrinks as n -> ∞, causing lines to converge toward IE1.', marks: 1 },
        ],
        model_answer:
          'Electrons relax from higher n levels to n=1 (UV Lyman) or n=2 (visible Balmer), emitting discrete hν photons. Because adjacent shell gaps ΔE decrease as n increases, high-frequency lines converge at the ionization limit.',
      },
      sourceFileNames: ['Day 1.3.1 - Emission Spectrum.pdf', 'Day 1.3.3 hydrogen emission spectrum.pdf'],
    },
    {
      topicCode: 'S1.3',
      paperType: 'Paper 1A',
      commandTerm: 'Identify',
      difficulty: 'Foundation',
      maxMarks: 1,
      questionMarkdown:
        'What are the correct SI units for Planck’s constant **$h$** in $E = h\\nu$, and the condensed electron configuration of **$Cu^+$** (Day 1.3.3 Fix)?',
      mcqOptions: [
        { label: 'A', text: 'J/s and [Ar] 4s¹ 3d⁹' },
        { label: 'B', text: 'J·s and [Ar] 3d¹⁰ (removing 4s before 3d)' },
        { label: 'C', text: 'J·s and [Ar] 4s¹ 3d⁹' },
        { label: 'D', text: 'J/s and [Ar] 3d¹⁰' },
      ],
      correctMcqOption: 'B',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'E (J) = h (J·s) × ν (s⁻¹) gives units J·s; Cu ([Ar]4s1 3d10) loses its single 4s electron first -> [Ar] 3d10.', marks: 1 },
        ],
        model_answer: 'B — J·s and [Ar] 3d¹⁰.',
      },
      sourceFileNames: ['Day 1.3.3 hydrogen emission spectrum.pdf', 'Day - electron configurations.pdf'],
    },
    {
      topicCode: 'S1.3',
      paperType: 'Paper 2',
      commandTerm: 'State',
      difficulty: 'Standard IB',
      maxMarks: 2,
      questionMarkdown:
        'Write the condensed electron configurations for neutral **chromium (Cr, Z = 24)** and **$Fe^{2+}$ (Z = 26)**, stating the orbital removal rule.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Cr: [Ar] 4s1 3d5 (extra stability of half-filled 3d sublevel).', marks: 1 },
          { code: 'M2', criterion: 'Fe2+: [Ar] 3d6 (4s electrons are always ionized BEFORE 3d in transition-metal cations).', marks: 1 },
        ],
        model_answer: 'Cr = [Ar] 4s1 3d5; Fe2+ = [Ar] 3d6 because 4s is removed before 3d.',
      },
      sourceFileNames: ['Day Practice Electron Configurations.pdf', '8 Electron-Configuration Answers.pdf'],
    },
    {
      topicCode: 'S2.1',
      paperType: 'Paper 2',
      commandTerm: 'Compare',
      difficulty: 'Standard IB',
      maxMarks: 3,
      questionMarkdown:
        'Account for why **$\text{MgO}$** melts at **$2852^\\circ\\text{C}$** compared with **$\text{NaCl}$ ($801^\\circ\\text{C}$)**, and why **$\text{KCl}$** has a higher endothermic lattice enthalpy than **$\text{CsCl}$** (Worksheet 2.1).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Lattice enthalpy increases with ionic charge product and inversely with inter-ionic radius.', marks: 1 },
          { code: 'M2', criterion: 'MgO has 2+/2− charges (and smaller ions) vs 1+/1− in NaCl, yielding far stronger electrostatic attraction.', marks: 1 },
          { code: 'M3', criterion: 'Both KCl and CsCl are 1+/1−, but smaller K+ radius gives shorter cation–anion distance than Cs+, raising ΔH_latt.', marks: 1 },
        ],
        model_answer:
          'Double charges on Mg2+/O2− make MgO lattice forces dramatically stronger than 1+/1− NaCl; between 1+/1− chlorides, smaller K+ sits closer to Cl− than Cs+, increasing ΔH_latt.',
      },
      sourceFileNames: ['worksheet-2.1-fomation-of-ionic-compounds-ans.pdf'],
    },
    {
      topicCode: 'S2.1',
      paperType: 'Paper 1B',
      commandTerm: 'Explain',
      difficulty: 'Foundation',
      maxMarks: 2,
      questionMarkdown:
        'Explain why ionic crystals like $\\text{NaCl}(s)$ are brittle under hammer impact and conduct electricity only when molten or aqueous (Day 2.2 Slide 5 Fix).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Shear shifts lattice layers so LIKE charges (+/+ and −/−) align adjacent and strongly repel, cleaving the crystal.', marks: 1 },
          { code: 'M2', criterion: 'Ions are fixed in solid state (insulator) but become mobile charge carriers when molten or hydrated in water.', marks: 1 },
        ],
        model_answer:
          'Layer shear forces like charges together, repelling and shattering the crystal; melting or dissolving frees mobile ions to conduct current.',
      },
      sourceFileNames: ['Day 2 2.2 Ionic Bonding Properties.pdf'],
    },
    {
      topicCode: 'S2.2',
      paperType: 'Paper 2',
      commandTerm: 'Compare and contrast',
      difficulty: 'Standard IB',
      maxMarks: 4,
      questionMarkdown:
        'Compare carbon–carbon **bond lengths** and **bond enthalpies** across single ($\\text{C–C}$), double ($\\text{C=C}$), and triple ($\\text{C}\\equiv\\text{C}$) bonds, and define a **coordinate covalent bond** using **CO** or **$\\text{NH}_4^+$** (Day 2.2-1).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Bond length shortens cleanly with bond order: C–C (154 pm) -> C=C (134 pm) -> C≡C (120 pm).', marks: 1 },
          { code: 'M2', criterion: 'Bond enthalpy rises cleanly: 346 -> 614 -> 839 kJ mol⁻¹ because higher shared electron density pulls nuclei tighter.', marks: 1 },
          { code: 'M3', criterion: 'Coordinate covalent bond: BOTH shared electrons originate from one donor atom (e.g. N lone pair to H+ in NH4+ or O lone pair to C in CO).', marks: 1 },
          { code: 'M4', criterion: 'Once formed, a coordinate bond is indistinguishable in strength/length from standard covalent bonds.', marks: 1 },
        ],
        model_answer:
          'Bond order increases electron density between nuclei, shortening length (154 -> 134 -> 120 pm) and raising enthalpy (346 -> 614 -> 839 kJ mol-1). In coordinate covalent bonds (CO, NH4+), one donor supplies both electrons of the shared pair.',
      },
      sourceFileNames: ['Day 2.2-1.pdf'],
    },
    {
      topicCode: 'S2.2',
      paperType: 'Paper 2',
      commandTerm: 'Deduce',
      difficulty: 'Standard IB',
      maxMarks: 4,
      questionMarkdown:
        'Using VSEPR theory, deduce electron-domain geometry, molecular shape, bond angle, and polarity of **$\\text{NH}_3$**, **$\\text{BF}_3$**, **$\\text{SO}_2$**, and **$\\text{CCl}_4$**.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'NH3: 4 domains (3 BP, 1 LP) -> trigonal pyramidal, 107°, polar.', marks: 1 },
          { code: 'M2', criterion: 'BF3: 3 domains (3 BP, 0 LP) -> trigonal planar, 120°, non-polar (symmetric cancellation).', marks: 1 },
          { code: 'M3', criterion: 'SO2: 3 domains (2 BP, 1 LP) -> bent / V-shaped, ~117° (<120°), polar.', marks: 1 },
          { code: 'M4', criterion: 'CCl4: 4 domains (4 BP, 0 LP) -> tetrahedral, 109.5°, non-polar (3D symmetric cancellation).', marks: 1 },
        ],
        model_answer:
          'NH3: trigonal pyramidal 107° (polar); BF3: trigonal planar 120° (non-polar); SO2: bent ~117° (polar); CCl4: tetrahedral 109.5° (non-polar by 3D vector cancellation).',
      },
      sourceFileNames: ['Day 2.2 VSEPR Intro.pdf', 'Day - VSEPR and Bond Polarity.pdf'],
    },
    {
      topicCode: 'S2.2',
      paperType: 'Paper 2',
      commandTerm: 'Explain',
      difficulty: 'Standard IB',
      maxMarks: 3,
      questionMarkdown:
        'Explain why **water ($\text{H}_2\text{O}$, bp $100^\\circ\\text{C}$)** boils higher than **HF ($19.5^\\circ\\text{C}$)** despite fluorine’s higher electronegativity (Day 2.2.8).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Although individual H–F···H bonds are very polar, HF has only 1 δ+ H per molecule (forming ~1 H-bond on average).', marks: 1 },
          { code: 'M2', criterion: 'H2O has 2 δ+ H atoms AND 2 O lone pairs, forming twice as many H-bonds per molecule (3D tetrahedral lattice).', marks: 1 },
          { code: 'M3', criterion: 'Greater total energy is required to disrupt the extended 3D water network.', marks: 1 },
        ],
        model_answer:
          'Each H2O averages twice as many hydrogen bonds (2 H donors + 2 O lone pairs) as HF (1 H donor), outweighing fluorine’s individual bond polarity.',
      },
      sourceFileNames: ['Day 2.2.8 - Strength of H bond.pdf'],
    },
    {
      topicCode: 'S2.2',
      paperType: 'Paper 2',
      commandTerm: 'Distinguish',
      difficulty: 'Standard IB',
      maxMarks: 4,
      questionMarkdown:
        'Distinguish **diamond**, **graphite**, **$\text{SiO}_2$**, and **$\text{C}_{60}$ fullerene** in terms of structure, bonding, electrical conductivity, and sublimation/melting (Day 2.2.9 Fix).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Diamond & SiO2: 3D tetrahedral covalent networks (109.5°, localized σ e−) -> insulator, ultra-high mp.', marks: 1 },
          { code: 'M2', criterion: 'Graphite: 2D sp² hexagonal sheets (120°, 3 bonds/C) + delocalized plane electrons (conductor) + weak interlayer LDFs (lubricant).', marks: 1 },
          { code: 'M3', criterion: 'C60: Simple molecular solid (NOT covalent network!) of discrete 60-C spheres attracted solely by weak LDFs.', marks: 1 },
          { code: 'M4', criterion: 'Lower mp/sublimation & nonpolar toluene solubility in C60 contrast giant network crystals.', marks: 1 },
        ],
        model_answer:
          'Diamond/SiO2 are 3D covalent insulators; graphite has conducting delocalized π sheets separated by weak LDFs; C60 is a simple molecular solid whose discrete buckyballs interact solely via weak LDFs.',
      },
      sourceFileNames: ['Day 2.2 Molecular Polarity and Network Solids.pdf', 'worksheet-2.2.4-network-covalent-ans (1).pdf'],
    },
    {
      topicCode: 'S2.2',
      paperType: 'Paper 1A',
      commandTerm: 'Explain',
      difficulty: 'Foundation',
      maxMarks: 2,
      questionMarkdown:
        'Why does linear **pentane** ($\text{C}_5\text{H}_{12}$, bp $36.1^\\circ\\text{C}$) boil higher than branched **2,2-dimethylpropane** (bp $9.5^\\circ\\text{C}$)?',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Both are nonpolar isomers with equal electron count (42 e−) and molar mass.', marks: 1 },
          { code: 'M2', criterion: 'Straight pentane has larger intermolecular surface contact area than spherical 2,2-dimethylpropane, yielding stronger London dispersion forces.', marks: 1 },
        ],
        model_answer:
          'Equal electron counts mean molar mass is identical, but unbranched pentane has greater surface contact area and therefore stronger LDFs than compact spherical 2,2-dimethylpropane.',
      },
      sourceFileNames: ['Day 2.2.9 Strength of IMF.pdf'],
    },
    {
      topicCode: 'S2.2',
      paperType: 'Paper 1B',
      commandTerm: 'Calculate',
      difficulty: 'Standard IB',
      maxMarks: 2,
      questionMarkdown:
        'On a polar silica TLC plate with hexane/ethyl acetate mobile phase, the solvent front rises **$8.0\\text{ cm}$** and Dye A travels **$5.2\\text{ cm}$**. Calculate $R_f$ for Dye A and compare its polarity to Dye B ($R_f = 0.25$).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Rf = 5.2 / 8.0 = 0.65.', marks: 1 },
          { code: 'M2', criterion: 'Dye B (Rf 0.25) adsorbs more strongly to the polar silica stationary phase -> Dye B is more polar than Dye A.', marks: 1 },
        ],
        model_answer: 'Rf(A) = 0.65; Dye B (Rf 0.25) binds more strongly to polar silica and is therefore more polar.',
      },
      sourceFileNames: ['Day 2.2-1.pdf'],
    },
    {
      topicCode: 'S2.3',
      paperType: 'Paper 2',
      commandTerm: 'Explain',
      difficulty: 'Standard IB',
      maxMarks: 3,
      questionMarkdown:
        'Explain why melting point rises steeply from **Na ($98^\\circ\\text{C}$)** to **Mg ($650^\\circ\\text{C}$)** and why metals are malleable (Day 2.3).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Metallic bonding = electrostatic attraction between cation lattice and delocalized valence electrons not fixed to any single atom.', marks: 1 },
          { code: 'M2', criterion: 'Mg2+ contributes 2 valence electrons/atom (vs 1 in Na+), higher 2+ charge, and smaller radius -> stronger electrostatic pull.', marks: 1 },
          { code: 'M3', criterion: 'Non-directional bonding allows cation planes to slide without repulsion fracture.', marks: 1 },
        ],
        model_answer:
          'Smaller Mg2+ cations with double delocalized electron density attract the sea of mobile electrons much more strongly than Na+. Non-directional metallic attraction cushions shifted crystal planes under stress.',
      },
      sourceFileNames: ['Day 2.3.pdf', '2.3 - Textbook answers.pdf'],
    },
    {
      topicCode: 'S2.4',
      paperType: 'Paper 1B',
      commandTerm: 'Deduce',
      difficulty: 'Standard IB',
      maxMarks: 3,
      questionMarkdown:
        'Using $\\chi_{\\text{Tl}}=1.8,\\ \\chi_{\\text{Br}}=3.0$, $\\chi_{\\text{Cs}}=0.8,\\ \\chi_{\\text{F}}=4.0$, and $\\chi_{\\text{Mg}}=1.3,\\ \\chi_{\\text{Zn}}=1.7$, place **$\\text{TlBr}$**, **$\\text{CsF}$**, and **$\\text{MgZn}_2$** on the van Arkel–Ketelaar triangle (Day 2.4).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'TlBr: avg χ = 2.40, Δχ = 1.20 -> polar covalent–ionic borderline.', marks: 1 },
          { code: 'M2', criterion: 'CsF: avg χ = 2.40, Δχ = 3.20 -> apex ionic.', marks: 1 },
          { code: 'M3', criterion: 'MgZn2: avg χ = 1.50, Δχ = 0.40 -> metallic region.', marks: 1 },
        ],
        model_answer: 'TlBr (2.4, 1.2) = polar covalent–ionic transition; CsF (2.4, 3.2) = ionic; MgZn2 (1.5, 0.4) = metallic.',
      },
      sourceFileNames: ['Day 2.4 - From Structure to Models.pdf', 'day S 2.4 review questions.pdf'],
    },
    {
      topicCode: 'S2.4',
      paperType: 'Paper 2',
      commandTerm: 'Distinguish',
      difficulty: 'Standard IB',
      maxMarks: 3,
      questionMarkdown:
        'Distinguish **substitutional alloys** (brass) from **interstitial alloys** (steel) and explain why alloying increases tensile strength.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Substitutional alloy: similar-size solute atoms (Zn in Cu) replace host cations at lattice nodes.', marks: 1 },
          { code: 'M2', criterion: 'Interstitial alloy: much smaller solute atoms (C in Fe) wedge into gaps between large host cations.', marks: 1 },
          { code: 'M3', criterion: 'Different atomic radii distort crystal planes and impede layer sliding.', marks: 1 },
        ],
        model_answer:
          'Substitutional Zn replaces similar-radius Cu atoms in brass, whereas tiny interstitial C occupies voids between Fe atoms in steel; both disrupt regular planes and resist slip.',
      },
      sourceFileNames: ['Day 2.4 - From Structure to Models.pdf'],
    },
    {
      topicCode: 'S2.4',
      paperType: 'Paper 2',
      commandTerm: 'Deduce',
      difficulty: 'Foundation',
      maxMarks: 2,
      questionMarkdown:
        'Draw/write the repeating unit of **poly(chloroethene) (PVC)** from chloroethene ($\\text{CH}_2\\text{=CHCl}$) and explain why addition polymerization gives 100% atom economy.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Repeat unit [−CH2–CHCl−]n with saturated C–C backbone and continuation bonds extending through brackets.', marks: 1 },
          { code: 'M2', criterion: 'Alkene π-bond opens to link monomers with zero eliminated small-molecule byproduct.', marks: 1 },
        ],
        model_answer: 'Repeat unit [−CH2–CHCl−]n; breaking C=C bonds adds all monomer atoms directly into the chain.',
      },
      sourceFileNames: ['Day 2.4 - From Structure to Models.pdf'],
    },
    {
      topicCode: 'S3.1',
      paperType: 'Paper 2',
      commandTerm: 'Explain',
      difficulty: 'Standard IB',
      maxMarks: 3,
      questionMarkdown:
        'Explain the overall increase in $IE_1$ across Period 3 plus the two characteristic dips from **Mg $\\to$ Al** and **P $\\to$ S** (Day 3.1.3).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Rising proton number (+Z) with nearly constant inner-shell shielding pulls valence n=3 electrons closer -> higher IE1.', marks: 1 },
          { code: 'M2', criterion: 'Mg -> Al dip: Al ([Ne]3s²3p¹) removes a higher-energy 3p electron partially shielded by filled 3s².', marks: 1 },
          { code: 'M3', criterion: 'P -> S dip: S (3p⁴) introduces a paired spin orbital whose inter-electron repulsion eases removal of one electron vs 3p³ P.', marks: 1 },
        ],
        model_answer:
          'Increasing Zeff raises IE1 overall across Period 3, broken slightly at Al (removing a 3s-shielded higher-energy 3p electron) and S (spin-pairing repulsion in a doubly occupied 3p orbital).',
      },
      sourceFileNames: ['Day 3 - 3.1.3 Trends.pdf'],
    },
    {
      topicCode: 'S3.1',
      paperType: 'Paper 1A',
      commandTerm: 'List',
      difficulty: 'Foundation',
      maxMarks: 2,
      questionMarkdown:
        'Order the isoelectronic $10\\ e^-$ species **$\\text{Al}^{3+},\\ \\text{F}^-,\\ \\text{Mg}^{2+},\\ \\text{N}^{3-},\\ \\text{Na}^+,\\ \\text{O}^{2-}$** by **increasing ionic radius**, and state the reason (R 3.1.3).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Al3+ < Mg2+ < Na+ < F− < O2− < N3−.', marks: 1 },
          { code: 'M2', criterion: 'All share 10 electrons (identical shielding); decreasing nuclear proton charge (+13 down to +7) pulls the cloud more weakly.', marks: 1 },
        ],
        model_answer: 'Al3+ < Mg2+ < Na+ < F− < O2− < N3− due to falling nuclear charge Z across identical 10-electron shielding.',
      },
      sourceFileNames: ['R 3.1.3 Electronegativity.pdf'],
    },
    {
      topicCode: 'S3.1',
      paperType: 'Paper 2',
      commandTerm: 'Formulate',
      difficulty: 'Standard IB',
      maxMarks: 3,
      questionMarkdown:
        'Write balanced equations for $\\text{Na}_2\\text{O}(s)$ and $\\text{SO}_3(g)$ reacting with water, and describe $\\text{Al}_2\\text{O}_3(s)$ acid-base character.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Na2O(s) + H2O(l) -> 2NaOH(aq) (strongly basic, pH 13–14).', marks: 1 },
          { code: 'M2', criterion: 'SO3(g) + H2O(l) -> H2SO4(aq) (strongly acidic, pH 0–2).', marks: 1 },
          { code: 'M3', criterion: 'Al2O3 is amphoteric (water-insoluble; dissolves in both strong acids -> Al3+ and strong alkalis -> [Al(OH)4]−).', marks: 1 },
        ],
        model_answer: 'Na2O -> 2NaOH (basic); SO3 -> H2SO4 (acidic); Al2O3 is insoluble amphoteric (reacts with both H+ and OH−).',
      },
      sourceFileNames: ['Day 3 - 3.1.3 Trends.pdf'],
    },
    {
      topicCode: 'S1',
      paperType: 'Paper 1B',
      commandTerm: 'Calculate',
      difficulty: 'Foundation',
      maxMarks: 3,
      questionMarkdown:
        'A $50.00\\text{ cm}^3$ burette ($\\pm 0.05\\text{ cm}^3$ per reading) reads **$1.20\\text{ cm}^3$** initially and **$21.20\\text{ cm}^3$** at endpoint. Calculate the titre with absolute and percentage uncertainty (Lab INFO 8).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Titre ΔV = 21.20 − 1.20 = 20.00 cm³.', marks: 1 },
          { code: 'M2', criterion: 'Subtraction sums TWO absolute readings: Δ(ΔV) = 0.05 + 0.05 = ±0.10 cm³.', marks: 1 },
          { code: 'A1', criterion: '% uncertainty = (0.10 / 20.00) × 100% = 0.50% -> report 20.00 ± 0.10 cm³.', marks: 1 },
        ],
        model_answer: '20.00 ± 0.10 cm³ (0.50% uncertainty).',
      },
      sourceFileNames: ['Lab INFO making-measurements-in-the-lab.pdf', 'Lab INFO propagation-of-uncertainties.pdf'],
    },
    {
      topicCode: 'S1',
      paperType: 'Paper 1B',
      commandTerm: 'Evaluate',
      difficulty: 'Standard IB',
      maxMarks: 3,
      questionMarkdown:
        'In an enthalpy calorimetry IA, total **random uncertainty is $\\pm 4.2\\%$**, while the mean $\\Delta H$ is **$28.0\\%$ lower** than the Data Booklet value. Evaluate random vs systematic error (Lab INFO 4).',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: '% discrepancy (28.0%) >> total random % uncertainty (4.2%), proving systematic error dominates.', marks: 1 },
          { code: 'M2', criterion: 'Directional underestimate comes from uninsulated heat loss to air, calorimeter heat capacity ignored, or incomplete combustion.', marks: 1 },
          { code: 'M3', criterion: 'Improvement: enclose flame with draft shield + insulating lid or calibrate calorimeter with standard reaction.', marks: 1 },
        ],
        model_answer:
          'Systematic heat loss dominates because the 28.0% discrepancy far exceeds 4.2% random scatter; add a draft shield and insulated calorimeter rather than merely adding trials.',
      },
      sourceFileNames: ['Lab INFO experimental-errors-summary.pdf'],
    },
    {
      topicCode: 'S2.2',
      paperType: 'Paper 1A',
      commandTerm: 'Identify',
      difficulty: 'Foundation',
      maxMarks: 1,
      questionMarkdown:
        'Which pair of molecules BOTH possess polar covalent bonds yet have zero net molecular dipole moment ($\\vec{\\mu} = 0$)?',
      mcqOptions: [
        { label: 'A', text: 'NH3 and H2O' },
        { label: 'B', text: 'CO2 and CCl4' },
        { label: 'C', text: 'SO2 and CHCl3' },
        { label: 'D', text: 'HCl and BF3' },
      ],
      correctMcqOption: 'B',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Linear 180° CO2 and symmetric tetrahedral 109.5° CCl4 cancel bond dipole vectors completely.', marks: 1 },
        ],
        model_answer: 'B — CO2 and CCl4.',
      },
      sourceFileNames: ['Day - VSEPR and Bond Polarity.pdf'],
    },
    {
      topicCode: 'S1.3',
      paperType: 'Paper 1A',
      commandTerm: 'Identify',
      difficulty: 'Foundation',
      maxMarks: 1,
      questionMarkdown:
        'Which principle dictates that nitrogen’s three $2p$ electrons occupy $2p_x^1\\ 2p_y^1\\ 2p_z^1$ with parallel spins before pairing?',
      mcqOptions: [
        { label: 'A', text: 'Pauli Exclusion Principle' },
        { label: 'B', text: 'Hund’s Rule' },
        { label: 'C', text: 'Heisenberg Uncertainty Principle' },
        { label: 'D', text: 'Octet Rule' },
      ],
      correctMcqOption: 'B',
      markscheme: {
        marking_points: [{ code: 'M1', criterion: 'Hund’s rule minimizes inter-electron repulsion across degenerate orbitals.', marks: 1 }],
        model_answer: 'B — Hund’s Rule.',
      },
      sourceFileNames: ['Day - electron configurations.pdf'],
    },
    {
      topicCode: 'S1',
      paperType: 'Paper 1A',
      commandTerm: 'Identify',
      difficulty: 'Foundation',
      maxMarks: 1,
      questionMarkdown:
        'Under the FA2025–May 2028 IB Chemistry Data Booklet, what is the molar volume of an ideal gas at **STP ($273\\text{ K},\\ 100\\text{ kPa}$)**?',
      mcqOptions: [
        { label: 'A', text: '22.4 dm³ mol⁻¹' },
        { label: 'B', text: '22.7 dm³ mol⁻¹' },
        { label: 'C', text: '24.0 dm³ mol⁻¹' },
        { label: 'D', text: '24.8 dm³ mol⁻¹' },
      ],
      correctMcqOption: 'B',
      markscheme: {
        marking_points: [{ code: 'M1', criterion: '22.7 dm³ mol⁻¹ at 273 K and 100 kPa.', marks: 1 }],
        model_answer: 'B — 22.7 dm³ mol⁻¹.',
      },
      sourceFileNames: ['chemistry-guide-en_27d9a623-d741-4646-a331-1510ce0723b4.pdf', 'RevisionDojo_IB_Chemistry_Cheatsheets_Merged.pdf'],
    },
  ],
  flashcards: [
    { topicCode: 'S1.2', frontMarkdown: 'Weighted formula for relative atomic mass Ar?', backMarkdown: 'Ar = Σ(isotopic mass × % abundance) / 100 relative to ¹²C = 12.' },
    { topicCode: 'S1.3', frontMarkdown: 'Lyman vs Balmer vs Paschen transitions in Hydrogen?', backMarkdown: 'Lyman: n≥2 → n=1 (UV); Balmer: n≥3 → n=2 (Visible: 656, 486, 434, 410 nm); Paschen: n≥4 → n=3 (IR).' },
    { topicCode: 'S1.3', frontMarkdown: 'Why do hydrogen spectral lines converge at high frequency?', backMarkdown: 'Energy spacing ΔE between adjacent principal shells decreases as n → ∞, approaching ionization IE1 = hν∞.' },
    { topicCode: 'S1.3', frontMarkdown: 'Day 1.3.3 Slide 25 Erratum: Correct SI units of Planck’s constant h?', backMarkdown: 'J·s (6.63 × 10⁻³⁴ J·s), NOT J/s!' },
    { topicCode: 'S1.3', frontMarkdown: 'Cr (Z=24) & Cu (Z=29) exceptions + Cu+ / Fe2+ ionization rule?', backMarkdown: 'Cr: [Ar] 4s1 3d5; Cu: [Ar] 4s1 3d10. Always remove 4s BEFORE 3d -> Cu+ = [Ar] 3d10; Fe2+ = [Ar] 3d6.' },
    { topicCode: 'S1.3', frontMarkdown: 'Aufbau vs Pauli Exclusion vs Hund’s Rule?', backMarkdown: 'Aufbau: lowest energy first; Pauli: max 2 e− per orbital with opposite spins (↑↓); Hund: degenerate orbitals get single parallel spins before pairing.' },
    { topicCode: 'S2.1', frontMarkdown: 'Seven mandatory IB polyatomic ions & charges?', backMarkdown: 'NH4+, OH−, NO3−, HCO3−, CO3²⁻, SO4²⁻, PO4³⁻.' },
    { topicCode: 'S2.1', frontMarkdown: 'Day 2 Slide 5 Erratum: Why are ionic crystals brittle?', backMarkdown: 'Layer shear aligns LIKE charges (+/+ and −/−) adjacent, creating strong electrostatic repulsion that cleaves the crystal.' },
    { topicCode: 'S2.1', frontMarkdown: 'Why does MgO (2852°C) >> NaCl (801°C)?', backMarkdown: 'Doubly charged Mg2+/O2− ions and smaller ionic radii multiply Coulombic lattice attraction compared to 1+/1− NaCl.' },
    { topicCode: 'S2.2', frontMarkdown: 'Carbon bond order progression (C–C vs C=C vs C≡C)?', backMarkdown: 'Single: 154 pm / 346 kJ mol⁻¹ -> Double: 134 pm / 614 kJ mol⁻¹ -> Triple: 120 pm / 839 kJ mol⁻¹.' },
    { topicCode: 'S2.2', frontMarkdown: 'SL incomplete octet species & coordinate bond examples?', backMarkdown: 'Incomplete octets: BeCl2 (4e−), BF3 & AlCl3 (6e−). Coordinate (dative) donor-pair examples: CO, NH4+, H3O+.' },
    { topicCode: 'S2.2', frontMarkdown: '4-domain lone-pair angle compression (CH4 / NH3 / H2O)?', backMarkdown: 'CH4 (0 LP): 109.5° tetrahedral -> NH3 (1 LP): 107° trigonal pyramidal -> H2O (2 LP): 104.5° bent (LP–LP > LP–BP > BP–BP).' },
    { topicCode: 'S2.2', frontMarkdown: '2- and 3-domain VSEPR angles & shapes at SL?', backMarkdown: '2 domains: 180° linear (CO2, BeCl2). 3 domains (0 LP): 120° trigonal planar (BF3); (1 LP): ~117° bent (SO2, O3).' },
    { topicCode: 'S2.2', frontMarkdown: 'Why are CO2, BF3, and CCl4 non-polar despite polar covalent bonds?', backMarkdown: 'Symmetric geometry causes equal bond-dipole vectors to cancel completely (μ_net = 0).' },
    { topicCode: 'S2.2', frontMarkdown: 'Day 2.2.8 Slide 1 Erratum: Which molecules have London dispersion forces?', backMarkdown: 'ALL molecules (both polar and non-polar!), scaling with total electrons and surface contact area.' },
    { topicCode: 'S2.2', frontMarkdown: 'Why does H2O (100°C) boil higher than HF (19.5°C)?', backMarkdown: 'Each H2O forms on average twice as many H-bonds (2 H donors + 2 O lone pairs) as HF (1 H donor).' },
    { topicCode: 'S2.2', frontMarkdown: 'Why does pentane (36°C) boil higher than 2,2-dimethylpropane (9.5°C)?', backMarkdown: 'Identical molar mass & electron count, but elongated pentane has greater surface contact area for LDFs.' },
    { topicCode: 'S2.2', frontMarkdown: 'Day 2.2.9 p.5 Erratum: Is C60 fullerene network covalent or simple molecular?', backMarkdown: 'SIMPLE MOLECULAR! Discrete C60 spheres interact only via weak LDFs (unlike diamond, graphite, graphene, SiO2).' },
    { topicCode: 'S2.2', frontMarkdown: 'Diamond vs Graphite vs SiO2 bonding & conductivity?', backMarkdown: 'Diamond & SiO2: 4 sp³ localized σ bonds (109.5°, insulator). Graphite: 3 sp² σ bonds (120° sheets) + delocalized layer π e− (conductor) + sliding LDFs.' },
    { topicCode: 'S2.2', frontMarkdown: 'TLC Chromatography Rf formula & polar silica behaviour?', backMarkdown: 'Rf = d_solute / d_solvent. More polar solutes stick more tightly to polar silica stationary phase -> smaller Rf.' },
    { topicCode: 'S2.3', frontMarkdown: 'Day 2.3 Slide 2 Fix: Complete Metallic Bonding definition?', backMarkdown: 'Electrostatic attraction between metal cations and delocalized valence electrons NOT fixed to any single atom. Period 3 mp: Na < Mg < Al.' },
    { topicCode: 'S2.4', frontMarkdown: 'van Arkel–Ketelaar axes & TlBr coordinate (Day 2.4)?', backMarkdown: 'x = avg χ, y = Δχ. TlBr (avg 2.4, Δχ 1.2) = polar covalent–ionic borderline; CsF (2.4, 3.2) = ionic; MgZn2 (1.5, 0.4) = metallic.' },
    { topicCode: 'S2.4', frontMarkdown: 'Substitutional vs Interstitial alloys?', backMarkdown: 'Substitutional (Brass Cu+Zn): similar-radius metal replaces host. Interstitial (Steel Fe+C): tiny C wedges into gaps between large Fe atoms.' },
    { topicCode: 'S2.4', frontMarkdown: 'Key markscheme feature when drawing Addition Polymers (S2.4.4–2.4.6)?', backMarkdown: 'Alkene C=C opens into saturated [−CH2–CHX−]n repeat unit with continuation bonds extending through brackets (100% atom economy).' },
    { topicCode: 'S3.1', frontMarkdown: 'Why does Period 3 IE1 dip at Mg -> Al and P -> S?', backMarkdown: 'Mg->Al: removes higher-energy 3s-shielded 3p electron. P->S: S pairs two e− inside one 3p orbital, raising spin–spin repulsion.' },
    { topicCode: 'S3.1', frontMarkdown: 'Order isoelectronic 10 e− ions by increasing radius?', backMarkdown: 'Al3+ < Mg2+ < Na+ < F− < O2− < N3− (fewer protons Z pulling identical 10 electrons lets cloud expand).' },
    { topicCode: 'S3.1', frontMarkdown: 'Period 3 oxide acid-base progression across Na2O -> Al2O3 -> SO3?', backMarkdown: 'Na2O/MgO: basic; Al2O3: insoluble amphoteric; P4O10/SO3: acidic.' },
    { topicCode: 'S1', frontMarkdown: '50.00 cm³ burette ΔV uncertainty rule (Lab INFO 8)?', backMarkdown: '±0.05 cm³ per reading × 2 readings = ±0.10 cm³ absolute uncertainty.' },
    { topicCode: 'S1', frontMarkdown: 'Multiplication uncertainty rule & systematic error check?', backMarkdown: 'Sum % uncertainties (%Δy = %Δa + %Δb). If % discrepancy vs literature > total % random uncertainty -> systematic error dominates.' },
    { topicCode: 'S1', frontMarkdown: 'IB Chem SL STP molar gas volume & exam weightings?', backMarkdown: '22.7 dm³ mol⁻¹ (273 K, 100 kPa). Paper 1 (1A+1B = 36%), Paper 2 (44%), IA (20%, 24m / ≤3,000w).' },
  ],
  topicGuidanceNotes: {
    S1: 'Bylikin Oxford 2023 + RevisionDojo Cheatsheets + 10 Lab INFO Guides: STP = 22.7 dm³ mol⁻¹ at 273 K / 100 kPa; burette ±0.10 cm³ ΔV rule.',
    'S1.1': 'Day 1 Slides & Oxford S1.1: Filtration, distillation, crystallization, and heating plateaus (thermal energy overcomes IMFs at constant T).',
    'S1.2': 'Worksheet 1.2 & Oxford S1.2: Isotopic Ar algebra relative to ¹²C = 12 and mass spectrum m/z deduction.',
    'S1.3': 'Day 1.3 & Worksheet 8: h = 6.63 × 10⁻³⁴ J·s (Slide 25 fix), Lyman/Balmer/Paschen convergence, Hund/Pauli/Aufbau, Cr/Cu exceptions, remove 4s before 3d.',
    S2: 'Textbook S2 Answers & RevisionDojo S2: Structure–property integration from ionic/covalent/metallic models to modern materials.',
    'S2.1': 'Day 2.1–2.2 & Worksheet 2.1: 7 polyatomic ions, Coulomb lattice enthalpy trends, brittle cleavage from LIKE-charge shear alignment (Slide 5 fix).',
    'S2.2': 'Day 2.2-1 (55 slides) + VSEPR Lab + IMF Explorer: Carbon bond orders (346/614/839 kJ mol⁻¹), VSEPR 2–4 domains, LDFs in ALL molecules (Slide 1 fix), C60 simple molecular (p.5 fix), Rf chromatography.',
    'S2.3': 'Day 2.3: Non-directional cation + delocalized electron sea (not fixed to any single atom — Slide 2 fix), Period 3 mp rise vs Group 1 fall.',
    'S2.4': 'Day 2.4 (49 slides) + van Arkel–Ketelaar Lab: TlBr (Δχ 1.2, avg 2.4) & AlCl3 continuum, substitutional/interstitial alloys, addition polymers [−CH2−CHX−]n.',
    'S3.1': 'Day 3.1.3 & R 3.1.3: Zeff vs shielding, Mg/Al and P/S IE1 dips, isoelectronic 10e− ion radii, and Period 3 oxide pH progression.',
  },
};
