import type { SubjectClassroomSeed } from '../types';
import { BIOLOGY_HL_MATERIALS } from './materials';
import { BIOLOGY_HL_NOTES_A } from './notes-a';
import { BIOLOGY_HL_NOTES_B } from './notes-b';
import { BIOLOGY_HL_NOTES_CD } from './notes-cd';
import { BIOLOGY_HL_QUESTIONS } from './questions';
import { BIOLOGY_HL_FLASHCARDS } from './flashcards';

export const BIOLOGY_HL_SEED: SubjectClassroomSeed = {
  slug: 'biology-hl',
  materials: BIOLOGY_HL_MATERIALS,
  notes: [...BIOLOGY_HL_NOTES_A, ...BIOLOGY_HL_NOTES_B, ...BIOLOGY_HL_NOTES_CD],
  questions: BIOLOGY_HL_QUESTIONS,
  flashcards: BIOLOGY_HL_FLASHCARDS,
  topicGuidanceNotes: {
    A: 'Class of 2028 HL Exams: Paper 1 (36% · 1A 40 MCQs + 1B 35m Data-Based), Paper 2 (44% · 80m), IA (20% · 24m across 4×6 criteria, 3,000 words max; NO Paper 3). Always match cognitive depth cleanly to AO1/AO2/AO3 command terms.',
    'A1.1': 'Draw H2O dipoles cleanly (2δ− O, δ+ H, 104.5°) with dashed intermolecular H-bonds (δ+ H to δ− O). Distinguish cohesion vs adhesion, hydrophobic lipoprotein transport vs hydrophilic hydration shells, ringed seal vs black-throated diver physics (Table 1 p.34), and HL Goldilocks + asteroid D/H delivery.',
    'A1.2': 'BioK 2.6 Q5 rule: write FULL base names (Adenine, Thymine, Cytosine, Guanine, Uracil) — never bare A/T/C/G. Specify 5\'->3\' sugar-phosphate phosphodiester linkage, Chargaff dsDNA parity vs Poliovirus ssRNA, HL Hershey–Chase (32P DNA pellet vs 35S coat supernatant), and HL 8-histone + H1 nucleosomes.',
    'A2.1': 'HL only: contrast modern O2/microbe caveats against Pasteur swan-neck disproof; cover all 4 abiogenesis stages (Miller–Urey CO2/N2 critique, clay/wet-dry polymerization, amphipathic fatty-acid vesicles, RNA World rRNA ribozymes), alkaline Lost City vents, and ~355-gene LUCA (not first cell).',
    'A2.2': 'Microscopy: M = I / A in identical units; light ~200 nm vs TEM ~0.5 nm vs SEM ~2–10 nm vs vitreous Cryo-EM; fix Slide 25 erratum (80S ribosomes are 25 nm / 0.025 µm, NOT 20 µm). Cells: binary fission in prokaryotes (never mitosis!), atypical syncytia/hyphae/Acetabularia, and HL serial endosymbiosis (MAD-CRAB).',
    'A2.3': 'HL only: acellular obligate parasites built with repeating capsomeres (genetic economy). Contrast Table 1 p.85: Phage λ (dsDNA, lytic vs lysogenic CI/RecA prophage), SARS-CoV-2 (+ssRNA direct mRNA + Spike->ACE2), and HIV-1 (diploid +ssRNA + packaged RT/integrase->provirus + triple-ART resistance prevention).',
    'B1.1': 'Slide 16 erratum: fructose (C6H12O6) is a HEXOSE despite forming a 5-membered furanose ring! Slide 36 erratum: each C=C removes 2 H atoms. Contrast α-glucose branched glycogen vs 180°-flipped β-glucose cellulose microfibrils, ABO glycoproteins, and anhydrous lipid (38 kJ/g) vs hydrated glycogen mass.',
    'B1.2': 'Generalized Cα amino acid + zwitterion; peptide bonds = (n−1) per continuous chain (insulin 2 chains = 49 bonds!). HL: 2° = backbone C=O···H-N H-bonds vs 3° = R-group disulfide/ionic/H/hydrophobic bonds; flip soluble vs membrane-channel R-groups; contrast conjugated haemoglobin vs collagen triple helix.',
    'B2.1': 'Fluid Mosaic proof (freeze-fracture + Frye–Edidin). HL: cholesterol bidirectional fluidity buffer (restrains high-T melting AND blocks low-T crystallization), cis-PUFA cold survival, CAM tissue adhesion, voltage-gated K+, ligand-gated nAChR, 3 Na+ out : 2 K+ in ATPase, and secondary SGLT1 + ORS.',
    'B2.2': 'Differential ultracentrifugation requires ice-cold, isotonic, pH-buffered sucrose (1,000g nuclei -> 10,000g mito/plastids -> 100,000g+ microsomes/ribosomes). Slide 21: lysosome + phagosome = phagolysosome. HL: cristae/thylakoid micro-volume H+ batteries, SRP/rER->cis/trans Golgi cisternal maturation, and clathrin triskelions.',
    'B2.3': 'Differentiation relies on differential gene expression without DNA sequence deletion. Contrast totipotent/pluripotent/multipotent stem cells & iPSCs, inverse SA:V geometric limit (6/L), Spadefoot toad plasticity (p.242), Type I/II pneumocytes, cardiac intercalated discs vs skeletal syncytia, and sperm/ovum.',
    'C1.1': 'Induced-fit lowers Ea without altering net ΔG; always read initial linear v0 tangent at t=0. HL: competitive (Vmax preserved, apparent Km rises; statins/ethanol) vs non-competitive (Vmax falls, Km constant), isoleucine allosteric Enzyme-1 feedback, and penicillin irreversible covalent DD-transpeptidase inactivation.',
    'C1.2': 'Anaerobic lactate emits ZERO CO2 (vs yeast ethanol + CO2); KOH + thermobarometer control isolate respirometer O2 uptake. HL: 4 glycolysis steps -> Link -> Krebs (per glucose = 4 CO2, 6 NADH, 2 FADH2, 2 ATP); lipid β-oxidation needs O2; Complex IV O2 sink + FoF1 ATP synthase (2.5/1.5 ATP -> ~30–32 net ATP); Kangaroo Rat RQ.',
    'C1.3': 'Paper chromatography Rf = pigment/solvent; chlorophyll a/b absorption vs Engelmann action spectra; FACE drought/N limits. HL: PSII lumen photolysis -> PQ/Cyt b6f -> PSI NADPH + cyclic bonus ATP (for 1.50:1 Calvin demand); Jagendorf dark pH 4->8 acid bath; Rubisco + Bassham 14C shifts.',
    'D1.1': 'Meselson–Stahl (Gen 1 single hybrid band -> Gen 2 50:50 hybrid+light). HL replisome: helicase, gyrase, primase, DNA Pol III 5\'->3\' (dNTP->dNMP+PPi + 3\'->5\' exonuclease proofreading), Okazaki 3H-thymidine pulse-chase (p.567), Pol I primer removal, ligase; Taq PCR (95/55/72 °C) & D1S80 anode migration.',
    'D1.2': 'Antisense template -> 5\'->3\' mRNA sense; ORF amino acids = (nt/3) − 1 stop codon (p.583). HL: non-coding promoter mutations, 5\' cap + poly-A tail, spliceosome alternative splicing (TNNT2 cardiac Exon 5), 80S E/P/A translation, preproinsulin cleavage (p.590), and ubiquitin–proteasome recycling.',
    'D1.3': 'UV-C induces adjacent intrastrand thymine dimers (T=T) kinking DNA until nucleotide excision repair excises damaged patches (p.607); third-base codon wobble buffers synonymous point mutations cleanly.',
    'D2.3': 'Osmosis ALWAYS moves passively from HIGHER (less negative) to LOWER (more negative) Ψw; isotonic medical saline = 0.154 M NaCl. HL: Ψw = Ψs + Ψp (Ψs <= 0; wall turgor Ψp >= 0; incipient plasmolysis Ψp = 0), fruit rain splitting (p.652), carrot/potato SD/SE osmometry, and oak compatible osmolytes.',
    'D3.2': 'Evaluate Mendel dihybrid 9:3:3:1 ratios with Chi-squared χ² = Σ(O−E)²/E (df = 3, critical 7.815 at p = 0.05); vast excess of parental phenotypes identifies autosomal linkage vs rare meiotic crossing-over recombinants.',
    'D3.3': 'Connect homeostatic feedback directly to Year 1 membrane/osmotic basics: β-cell insulin (GLUT4 exocytosis + glycogenesis) vs α-cell glucagon (hepatic glycogenolysis); ADH aquaporin-2 collecting-duct insertion driven by medullary Ψw; sweating high latent heat cooling.',
  },
};

export { BIOLOGY_HL_MATERIALS } from './materials';
export { BIOLOGY_HL_NOTES_A } from './notes-a';
export { BIOLOGY_HL_NOTES_B } from './notes-b';
export { BIOLOGY_HL_NOTES_CD } from './notes-cd';
export { BIOLOGY_HL_QUESTIONS } from './questions';
export { BIOLOGY_HL_FLASHCARDS } from './flashcards';
export * from './diagrams';
