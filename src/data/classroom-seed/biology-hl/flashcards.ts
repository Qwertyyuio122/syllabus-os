import type { ClassroomSeedFlashcard } from '../types';

function fc(topicCode: string, frontMarkdown: string, backMarkdown: string): ClassroomSeedFlashcard {
  return { topicCode, frontMarkdown, backMarkdown };
}

export const BIOLOGY_HL_FLASHCARDS: ClassroomSeedFlashcard[] = [
  // Topic A — Command Terms & Class of 2028 Assessment (5 cards)
  fc(
    'A',
    'How does **Paper 1 (36%)**, **Paper 2 (44%)**, and the **IA (20%)** structure Class of 2028 IB Biology HL exams?',
    '- **Paper 1 (2 h, 75 marks):** Paper 1A (`40` MCQs) + Paper 1B (`35` marks data-based/experimental). **NO Paper 3!**\n- **Paper 2 (2 h 30 min, 80 marks):** Section A structured + Section B (`2` of `3` extended essays).\n- **IA (24 marks, max `3,000` words):** `4 × 6` criteria (`Research Design`, `Data Analysis`, `Conclusion`, `Evaluation`).'
  ),
  fc(
    'A',
    'Contrast IB command terms **Describe** (`AO2`) vs **Explain** (`AO3`).',
    '- **Describe:** State visible trends, turning points, and quantitative numbers/units **with NO causes or reasons**.\n- **Explain:** Detail step-by-step causal biological **mechanisms** (`e.g., kinetic energy -> broken H-bonds -> active-site denaturation`).'
  ),
  fc(
    'A',
    'Contrast **Compare**, **Contrast / Distinguish**, and **Compare and contrast**.',
    '- **Compare:** Similarities.\n- **Contrast / Distinguish:** Differences between items.\n- **Compare and contrast:** **BOTH** similarities and paired point-by-point differences (`use "both" / "whereas"` in paired clauses).'
  ),
  fc(
    'A',
    'What must replace the forbidden phrase `"human error"` to earn Evaluation marks in IA or Paper 1B?',
    'Name a **specific methodological/instrumental weakness**, explain its **directional systematic bias** on the dependent variable (`e.g., open bath evaporation raising NaCl molarity and overestimating plasmolysis`), and propose a **targeted feasible modification**.'
  ),
  fc(
    'A',
    'Contrast **Standard Deviation (`s`)** vs **Standard Error of the Mean (`SE = s/√n`)**.',
    '- **SD (`s`):** Measures raw spread/scatter of individual replicates around the mean.\n- **SE (`s/√n`):** Quantifies precision/uncertainty of the estimated sample mean.'
  ),

  // Topic A1.1 — Water (7 cards)
  fc(
    'A1.1',
    'Explain why oxygen (`2δ−`) and hydrogen (`δ+`) form **polar covalent bonds** inside H₂O (`104.5°`).',
    'Oxygen\'s 8 protons give much higher **electronegativity** than hydrogen\'s 1 proton, pulling shared electrons closer to oxygen to create a permanent electric dipole.'
  ),
  fc(
    'A1.1',
    'How should intramolecular covalent bonds vs intermolecular **hydrogen bonds** be drawn on IB water diagrams?',
    '- **Polar covalent O–H:** Solid line inside one molecule (`2δ− O`, `δ+ H`).\n- **Hydrogen bond:** **Dashed/dotted line** strictly between `δ+ H` of one molecule and `δ− O` lone pair of another.'
  ),
  fc(
    'A1.1',
    'Distinguish **cohesion** (`xylem` & `surface tension`) from **adhesion** (`capillarity`).',
    '- **Cohesion:** Water-to-water H-bonding sustaining tensile columns in `~110 m` redwood xylem (`Allott p. 7`) and air–water **surface tension** supporting pond skaters.\n- **Adhesion:** Water-to-polar cellulose/lignin/glass H-bonding driving capillary ascent.'
  ),
  fc(
    'A1.1',
    'Contrast bloodstream transport of **hydrophilic glucose / NaCl** vs **hydrophobic triglycerides / cholesterol**.',
    '- **Hydrophilic:** Polar glucose (`-OH`) & ions (`Na⁺, Cl⁻`) form electrostatic **hydration shells** dissolving freely in blood plasma.\n- **Hydrophobic:** Non-polar triglycerides & cholesterol pack inside amphipathic **lipoprotein (`chylomicron, LDL, HDL`)** shells.'
  ),
  fc(
    'A1.1',
    'Summarize how the **ringed seal (*Pusa hispida*)** and **black-throated diver (*Gavia arctica*)** cope with seawater physics (`Allott Table 1 p. 34`).',
    '- **Thermal conductivity (`~21–24×` air):** Seals use thick subcutaneous **blubber**; divers trap air under **oiled feathers**.\n- **Viscosity (`~43–50×` air) & Buoyancy:** Both have streamlined **fusiform** bodies/flippers; blubber gives seals neutral buoyancy while divers use **dense bones** to dive.'
  ),
  fc(
    'A1.1',
    'Why is water\'s **specific heat capacity (`4.18 J g⁻¹ K⁻¹`)** biologically vital vs methane (`CH₄`, `−161 °C` bp)?',
    'Near-equal mass `CH₄` (`16 g/mol`) lacks H-bonds and boils at `−161 °C`. Breaking collective H-bonds in `H₂O` (`18 g/mol`) absorbs huge heat per °C rise (`bp +100 °C`), buffering marine temperatures and body cores.'
  ),
  fc(
    'A1.1',
    'State the two **HL (`A1.1.7–8`)** mechanisms explaining Earth\'s surface liquid water.',
    '1. **Extraplanetary delivery:** Late Bombardment carbonaceous chondrite **asteroids** match ocean **deuterium:hydrogen (`²H/¹H`)** ratios.\n2. **Retention:** Solar **Goldilocks zone** (`0–100 °C` liquid temp) + sufficient **gravity** + magnetosphere preventing hydrogen escape.'
  ),

  // Topic A1.2 — Nucleic Acids (7 cards)
  fc(
    'A1.2',
    'Identify the three covalently attached nucleotide subunits and exact carbons linked along one DNA/RNA backbone.',
    '- Pentose sugar (`C2\'-H` deoxyribose vs `C2\'-OH` ribose) bonded to nitrogenous base at **`C1\'`** and phosphate at **`C5\'`**.\n- **Condensation** links **`5\'-phosphate`** onto preceding **`3\'-OH`** via covalent **phosphodiester bonds**.'
  ),
  fc(
    'A1.2',
    'BioK 2.6 Q5 Mandatory Markscheme Alert: How must complementary DNA base pairs be named and bonded?',
    'Spell base names **IN FULL** (`never bare A/T/C/G!`):\n- **Adenine** (`purine, 2 rings`) `=` **Thymine** (`pyrimidine, 1 ring`): **`2` dashed H-bonds**.\n- **Guanine** (`purine`) `≡` **Cytosine** (`pyrimidine`): **`3` dashed H-bonds**.\n- Equal 3-ring pairings yield uniform `2.0 nm` antiparallel (`5\'->3\'` / `3\'->5\'`) diameter.'
  ),
  fc(
    'A1.2',
    'How does **Chargaff parity** distinguish double-stranded DNA from single-stranded viral RNA (`Poliovirus, Allott p. 34`)?',
    'In **dsDNA**, `%A = %T` and `%G = %C` always hold (`varying species %G+C`). In **ssRNA** (`Poliovirus: 30.4% A, 25.0% U, 19.5% C, 25.1% G`), parity fails (`%A != %U`, `%C != %G`) plus Thymine is replaced by Uracil.'
  ),
  fc(
    'A1.2',
    'Why does the **universal genetic code** prove common ancestry and enable insulin biotechnology?',
    'Virtually all Bacteria, Archaea, and Eukarya read identical `64` triplet mRNA codons in the **`5\' -> 3\'`** direction (`inherited from LUCA`), allowing *E. coli* ribosomes to translate human insulin mRNA identically.'
  ),
  fc(
    'A1.2',
    'Explain **Hershey & Chase (`1952`, HL)** radioisotope controls proving DNA is the genetic material.',
    '- **`³⁵S`** tags capsid proteins (`Cys/Met` only) -> blender-sheared coats stayed in **supernatant**.\n- **`³²P`** tags DNA phosphates -> entered bacterial **pellet** and transferred to progeny T2 phages.'
  ),
  fc(
    'A1.2',
    'Describe **HL nucleosome architecture** (`Allott p. 29`) and how acetylation activates transcription.',
    '~**`146–147 bp`** (`~1.65` turns) of **negatively charged DNA** wraps around an **8-protein positively charged histone core octamer** (`2x H2A, H2B, H3, H4`) sealed outside by **H1 linker histone**. Lysine acetylation loosens open **euchromatin** for RNA Pol access.'
  ),
  fc(
    'A1.2',
    'Why is DNA chemically far more stable than RNA across cellular generations?',
    'DNA lacks the reactive `2\'-OH` hydroxyl on ribose (`resistant to alkaline self-cleavage`) AND uses methylated **Thymine** (`letting repair enzymes spot accidental Cytosine -> Uracil deamination cleanly`).'
  ),

  // Topic A2.1 — Origin of Cells [HL] (5 cards)
  fc(
    'A2.1',
    'List the **four chronological prebiotic milestones** from inorganic chemistry to cellular life (`Allott p. 40`).',
    '1. Abiotic synthesis of simple carbon monomers (`amino acids, nucleobases, fatty acids`).\n2. Polymerization on clays (`montmorillonite`) / wet–dry cycles.\n3. Self-assembly of amphipathic **fatty-acid vesicles (`protocells`)**.\n4. Emergence of self-replicating catalytic **RNA (`ribozymes`)** before DNA.'
  ),
  fc(
    'A2.1',
    'Why can cells NOT arise spontaneously on modern Earth despite arising abiotically `~4.0 Ga` (`Pasteur caveat`)?',
    'Modern **`21% O₂`** rapidly oxidizes delicate prebiotic monomers (`plus O₃ blocks intense solar UV energy`), and ubiquitous modern microbes immediately eat unprotected organic molecules.'
  ),
  fc(
    'A2.1',
    'Summarize **Miller–Urey (`1953`)** gases, energy, product, and modern atmospheric critique.',
    'Boiled `H₂O` + reducing `CH₄, NH₃, H₂` + electrical sparks + condenser -> formed amino acids (`glycine, alanine`) abiotically. Critique: bulk early atmosphere held mostly `CO₂/N₂` (`though volcanic plumes & meteorites stayed reducing`).'
  ),
  fc(
    'A2.1',
    'State two pieces of living biochemical evidence for the **RNA World hypothesis**.',
    '1. **Ribosomal peptidyl transferase** (`peptide-bond synthesis`) is catalyzed strictly by **`rRNA` ribozyme**, not protein.\n2. Universal cofactors (`ATP, GTP, NADH, CoA`) are ribonucleotides (`plus Primase starts DNA copying with RNA`).'
  ),
  fc(
    'A2.1',
    'What evidence links **LUCA (`~3.8–4.0 Ga`)** to **alkaline hydrothermal vents (`Lost City`)**—and why wasn\'t LUCA the first cell?',
    'Shared `~355` conserved core genes, anaerobic thermophile metabolic pathways, and natural `H⁺` pH gradients across `FeS` chimney pores (`mirrored by modern chemiosmosis`). LUCA already carried complex DNA/ribosomes/ATP synthase, meaning simpler extinct lineages (`FUCA`) preceded it.'
  ),

  // Topic A2.2 — Microscopy & Cell Ultrastructure (9 cards)
  fc(
    'A2.2',
    'Distinguish **magnification (`M`)** from **resolution**, stating optical vs electron diffraction limits.',
    '- **Magnification (`M = I / A`):** Image enlargement ratio.\n- **Resolution:** Minimum separation keeping two points distinct (`~200 nm` in visible light vs `~0.2–0.5 nm` TEM / `~2–10 nm` SEM).'
  ),
  fc(
    'A2.2',
    'Correct Classroom **Slide 25 Erratum**: true diameter of a eukaryotic `80S` ribosome and required microscope.',
    'True `80S` ribosome diameter = **`~25 nm` (`0.025 µm`)** (`Slide 25 typo "20 µm"` is `1,000×` too large!). Requires **TEM or Cryo-EM**—invisible under light optics.'
  ),
  fc(
    'A2.2',
    'Compare **Light**, **TEM**, **SEM**, and **Cryo-EM** for viewing living states, resolution, and preparation artefacts.',
    '- **Light (`200 nm`):** Views **living cells** + fluorescent/GFP dyes.\n- **TEM (`0.5 nm`):** 2D ultrathin dead heavy-metal sections (shrinkage/stain artefacts).\n- **SEM (`2–10 nm`):** 3D gold-coated external topography.\n- **Cryo-EM (`~0.2 nm`):** Liquid-ethane flash-frozen native proteins with zero fixative artefacts.'
  ),
  fc(
    'A2.2',
    'Practice `M = I / A`: A liver cell measures `20 mm` wide at **`2,000×`**; a TEM scale bar of `8 µm` RBC measures `40 mm`. Check both.',
    '- **Liver cell actual:** `20,000 µm / 2,000 = 10 µm`.\n- **RBC micrograph magnification:** `40,000 µm / 8 µm = 5,000×` (`always convert mm -> µm first!`).'
  ),
  fc(
    'A2.2',
    'Contrast **Prokaryotic** vs **Eukaryotic** cell structure (`never say bacteria undergo mitosis!`).',
    '- **Prokaryotes:** `70S` ribosomes, **naked circular nucleoid DNA**, plasmids, peptidoglycan wall, divide by **binary fission**.\n- **Eukaryotes:** `80S` cytosol/rER ribosomes (`70S` inside mito/chloroplasts), **linear histone DNA inside double nuclear envelope**, internal organelles, divide by mitosis/meiosis.'
  ),
  fc(
    'A2.2',
    'Compare structural diagnostics separating **Animal**, **Plant**, and **Fungal** eukaryotic cells.',
    '- **Animal:** No wall/plastids; **centrioles** + lysosomes + glycogen.\n- **Plant:** **Cellulose** cell wall, plasmodesmata, large central **tonoplast vacuole**, **chloroplasts** + starch, no centrioles.\n- **Fungi:** **Chitin** cell wall, vacuoles, zero chloroplasts.'
  ),
  fc(
    'A2.2',
    'Name four **atypical cellular exceptions (`A2.2.8`)** testing traditional `"1 cell = 1 nucleus"` models.',
    '1. **Striated skeletal muscle:** Multinucleate syncytium (`~30+ mm`).\n2. **Aseptate fungal hyphae:** Continuous multinucleate coenocytic cytoplasm.\n3. **Giant *Acetabularia* alga (`1–10 cm`):** Single giant unicell with 1 basal nucleus.\n4. **Mammalian RBCs & phloem sieve tubes:** Enucleate mature cells.'
  ),
  fc(
    'A2.2',
    'Recite the **MAD-CRAB** evidence confirming mitochondria & chloroplasts evolved by **serial endosymbiosis (`HL`)**.',
    '- **M**embranes (double boundary)\n- **A**ntibiotic sensitivity (`chloramphenicol` blocks 70S)\n- **D**NA (circular & naked, bacterial phylogeny)\n- **C**ristae/inner ETC localization\n- **R**ibosomes (**`70S`**)\n- **A**utonomous **B**inary fission (`mitochondria evolved BEFORE plastids`).'
  ),
  fc(
    'A2.2',
    'What did **freeze-fracture electron microscopy (`A2.2.3`)** reveal inside frozen plasma membranes?',
    'Cleaving frozen cells along the **hydrophobic bilayer midplane** exposed embedded integral transmembrane protein particles directly inside the lipid core—falsifying Davson–Danielli surface coats.'
  ),

  // Topic A2.3 — Viruses [HL] (6 cards)
  fc(
    'A2.3',
    'What two structural components appear in EVERY virion, and how do **capsomeres** provide **genetic economy**?',
    'Internal **nucleic acid (`DNA` or `RNA`, `ss` or `ds`)** enclosed inside a **protein capsid**. Repeating one identical small **capsomere** protein lets tiny viral genomes assemble huge protective coats.'
  ),
  fc(
    'A2.3',
    'Compare Table 1 (`Allott p. 85`) features of **Bacteriophage λ**, **SARS-CoV-2**, and **HIV-1**.',
    '- **Phage λ:** Non-enveloped complex head+tail; linear `dsDNA`; infects *E. coli* via DNA injection.\n- **SARS-CoV-2:** Enveloped spherical; **`+ssRNA`** (`acts directly as mRNA`); Spike binds **ACE2**.\n- **HIV-1:** Enveloped conical core; **2 identical `+ssRNA`** + packaged **RT/integrase/protease**; `gp120` binds **CD4+ helper T** cells.'
  ),
  fc(
    'A2.3',
    'Why does soap inactivate **SARS-CoV-2 & HIV-1** faster than **Bacteriophage λ**?',
    'Both animal viruses carry a host-derived **phospholipid bilayer envelope** solubilized cleanly by soap/70% alcohol, whereas Phage λ uses an exposed naked protein capsid.'
  ),
  fc(
    'A2.3',
    'Contrast Phage λ **lytic** vs **lysogenic (`CI/RecA`)** cycles.',
    '- **Lytic (`Cro`):** Immediate replication + assembly -> **lysozyme** bursts bacterial cell wall (`~100–200` virions).\n- **Lysogenic (`CI` repressor):** Integrates silently as a heritable **prophage** copying at binary fission until UV/stress triggers `RecA` cleavage of `CI` (`induction`).'
  ),
  fc(
    'A2.3',
    'Why do **HIV-1** and **Influenza** evolve resistance rapidly unless treated with **combination ART** (`Allott p. 90`)?',
    'Viral **reverse transcriptase (`HIV`)** and **RdRp** lack proofreading (`~10⁻⁴` error/bp), generating swarms of escape variants (`plus Influenza antigenic shift across 8 segmented RNAs`). Simultaneous 3-drug blockade (`RT + integrase + protease`) cuts triple-mutant probability near zero.'
  ),
  fc(
    'A2.3',
    'Contrast the **three viral origin hypotheses** explaining why viruses are polyphyletic.',
    '1. **Progressive (`escape`):** Escaped mobile transposons/plasmids gaining capsids (`retroviruses`).\n2. **Regressive (`reduction`):** Degenerate intracellular bacteria losing metabolism (`giant Mimivirus`).\n3. **Virus-first:** Pre-cellular RNA replicators prior to LUCA.'
  ),

  // Topic B1.1 — Carbohydrates & Lipids (7 cards)
  fc(
    'B1.1',
    'Distinguish **condensation** vs **hydrolysis** in polymer metabolism.',
    '- **Condensation (`anabolism`):** Forms covalent glycosidic/ester/peptide/phosphodiester bonds by **removing `H₂O`**.\n- **Hydrolysis (`catabolism`):** Cleaves polymers back to monomers by **adding `H₂O`**.'
  ),
  fc(
    'B1.1',
    'Classroom **Slide 16 Erratum**: Why is **fructose (`C₆H₁₂O₆`)** a **HEXOSE** despite its 5-sided furanose ring?',
    'A five-membered ring (`4 C + 1 O`) still carries **two external `-CH₂OH` side arms (`C1` and `C6`)** totaling **6 carbons** (`vs 5C ribose/deoxyribose pentoses`).'
  ),
  fc(
    'B1.1',
    'Contrast **α-glucose (`amylose, amylopectin, glycogen`)** vs **β-glucose (`cellulose`)** bonding and roles.',
    '- **Amylose:** Unbranched `α(1->4)` helix; **Amylopectin/Glycogen:** branched `α(1->4) + α(1->6)` (`glycogen` denser branches every `~8–12` units for rapid ATP release).\n- **Cellulose:** Alternating **`180°` inverted `β(1->4)`** straight chains cross-linked by H-bonds into strong microfibrils.'
  ),
  fc(
    'B1.1',
    'State the role of **membrane glycoproteins** (`B1.1.7`).',
    'Covalently linked protein + oligosaccharide chains project outward on plasma membranes as **self-recognition tags** (**ABO blood-group antigens**, immune tissue ID, **CAMs**).'
  ),
  fc(
    'B1.1',
    'Classroom **Slide 36 Erratum**: How many H atoms are lost per `C=C` bond, and how do **cis vs trans** unsaturated fats differ?',
    'Each `C=C` removes **2 H atoms (`NOT 1`)**. **Cis (`H` same side)** bends chains `~30°` keeping vegetable oils/membranes fluid; artificial linear **trans (`H` opposite)** packs tightly raising atherogenic LDL and CHD risk.'
  ),
  fc(
    'B1.1',
    'Give **three reasons** why migrating birds store triglycerides (`38 kJ/g`) over glycogen (`17 kJ/g`) long-term (`Allott p. 209`).',
    '1. **~2.2× higher energy per dry gram** (`C–H` reduced).\n2. **Hydrophobic anhydrous packing:** zero hydration water (`glycogen adds ~2 g H₂O/g -> ~6.7× heavier per kJ!`).\n3. Zero osmotic turgor disruption + thermal insulation.'
  ),
  fc(
    'B1.1',
    'Distinguish **triglycerides**, **phospholipids**, and **steroids** (`oestradiol/testosterone`).',
    '- **Triglyceride:** Glycerol + 3 fatty acids (`3 ester bonds`), hydrophobic storage.\n- **Phospholipid:** Glycerol + 2 tails + polar phosphate head (`amphipathic` membrane bilayers).\n- **Steroids:** Four fused non-polar hydrocarbon rings diffusing across bilayers cleanly.'
  ),

  // Topic B1.2 — Proteins (6 cards)
  fc(
    'B1.2',
    'Draw/describe a **generalized amino acid** and its **zwitterion** pH-buffering behavior.',
    'Central **α-carbon (`Cα`)** covalently bonded to `-NH₂` (`-NH₃⁺`), `-COOH` (`-COO⁻`), `-H`, and variable **`R-group`**. Amphoteric proton acceptance/donation buffers cytoplasm (`condensation removes H₂O forming peptide -CO–NH- bonds`).'
  ),
  fc(
    'B1.2',
    'Explain how **heat (`>45 °C`)** and **extreme pH** denature enzymes without breaking `1°` sequence.',
    '- **Heat:** Vibrational kinetic energy breaks weak H-bonds and hydrophobic core packing.\n- **Extreme pH:** Excess `H⁺`/`OH⁻` alters R-group charges breaking **ionic salt bridges** & H-bonds -> active site unfolds (`covalent peptide bonds stay intact`).'
  ),
  fc(
    'B1.2',
    'Distinguish **Secondary (`2°`)** from **Tertiary (`3°`)** bonding inside proteins (`HL`).',
    '- **2° (`α-helix / β-sheet`):** Hydrogen bonds strictly between repeating **polypeptide backbone** `C=O` and `N–H` (`zero R-groups`).\n- **3°:** Stabilized by **R-group** interactions: **disulfide bridges (`Cys–Cys`)**, **ionic bonds**, **R-group H-bonds**, and **hydrophobic clustering**.'
  ),
  fc(
    'B1.2',
    'Compare **R-group orientation** in water-soluble globular enzymes vs **integral membrane channel proteins (`HL`)**.',
    '- **Soluble enzyme:** Polar/charged R-groups outside (`water H-bonds`), hydrophobic buried inside.\n- **Membrane channel:** **Hydrophobic R-groups coat OUTSIDE** touching lipid tails; polar/charged R-groups line inner aqueous pore.'
  ),
  fc(
    'B1.2',
    'Contrast **Haemoglobin**, **Insulin**, and **Collagen** across conjugated vs fibrous classifications (`HL`).',
    '- **Haemoglobin (`2α + 2β`):** Soluble globular **conjugated** `4°` with four **`Fe²⁺` haem** prosthetic groups.\n- **Insulin (`21 + 30 aa = 49 peptide bonds`):** Soluble globular **non-conjugated**.\n- **Collagen:** Insoluble **fibrous** triple helix (`Gly–Pro–Hyp`) needing Vitamin C hydroxylation (`no prosthetic haem`).'
  ),
  fc(
    'B1.2',
    'Contrast **9 essential** vs **11 non-essential** amino acids and explain **dynamic proteomes (`20ⁿ`)**.',
    'Humans cannot synthesize **9 essential amino acids** (`must ingest via diet`). Every cell keeps identical genome DNA yet displays a dynamic **proteome** (`20¹⁰ > 10¹³` combinations; giant **titin ~34,350 aa**) altered by transcription and environment.'
  ),

  // Topic B2.1 — Membranes & Transport (7 cards)
  fc(
    'B2.1',
    'State three experimental proofs showing **Fluid Mosaic** structure falsifying the Davson–Danielli protein sandwich.',
    '1. **Freeze-fracture EM** revealed protein particles inside the hydrophobic bilayer midplane.\n2. Integral proteins carry hydrophobic transmembrane R-group domains.\n3. **Frye–Edidin cell fusion** watched green/red fluorescent antibodies mix freely laterally.'
  ),
  fc(
    'B2.1',
    'Explain how **cholesterol** buffers animal membrane fluidity at BOTH extreme high and low temperatures (`HL`).',
    '- **High T:** Rigid steroid rings dampen excessive phospholipid hydrocarbon movement (`preventing leakiness`).\n- **Low T:** Bulky sterols wedge between straight saturated tails, blocking tight crystallization (`preserving fluidity`).'
  ),
  fc(
    'B2.1',
    'Distinguish **integral** vs **peripheral** membrane proteins (`B2.1`).',
    '- **Integral (`transmembrane`):** Hydrophobic α-helices span core (`aquaporins, pumps, receptors`).\n- **Peripheral:** Bound loosely by ionic/H-bonds onto polar surfaces without entering lipid core.'
  ),
  fc(
    'B2.1',
    'Give the exact pumping stoichiometry and alternating states of **`Na⁺/K⁺-ATPase`** (`HL B2.1.12`).',
    'Inward **`E1`** binds `3 Na⁺` -> **`1 ATP`** phosphorylates pump flipping **`E2`** outward -> exports **`3 Na⁺ OUT`**, binds `2 K⁺` -> `Pi` release resets `E1` importing **`2 K⁺ IN`** (`never open both sides at once!`).'
  ),
  fc(
    'B2.1',
    'Why is **`SGLT1`** glucose uptake called **indirect / secondary active transport** (`HL`, `ORS cholera link`)?',
    '`SGLT1` splits NO ATP directly; it imports `1` glucose uphill coupled to `2 Na⁺` flowing downhill—powered indirectly by basolateral **`Na⁺/K⁺-ATPase`** sustaining low intracellular `[Na⁺]`.'
  ),
  fc(
    'B2.1',
    'Compare **voltage-gated `K⁺` channels** vs **ligand-gated nicotinic `AChR`** (`HL`).',
    'Both run fast passive facilitated diffusion without ATP. **`K⁺` channels** open upon **voltage depolarization** (`axon repolarization`); **nAChR** opens when **2 acetylcholine molecules** bind (`Na⁺ influx EPSP`).'
  ),
  fc(
    'B2.1',
    'State the biological role of **Cell Adhesion Molecules (`CAMs`)** (`HL`).',
    'Transmembrane glycoproteins (`cadherins, integrins`) mediate tissue-specific cell-to-cell and extracellular matrix adhesion (`guiding embryonic sorting; down-regulated in cancer metastasis`).'
  ),

  // Topic B2.2 — Organelles & Compartmentalization (6 cards)
  fc(
    'B2.2',
    'List **four advantages of eukaryotic organellar compartmentalization**.',
    '1. Concentrates substrates & slow enzymes (`Rubisco`).\n2. Isolates incompatible pH & destructive enzymes (`pH 4.8` lysosomes, catalase peroxisomes).\n3. Micro-volumes speed chemiosmotic `H⁺` gradients.\n4. Nuclear envelope pauses transcription for mRNA **splicing**.'
  ),
  fc(
    'B2.2',
    'State the three homogenization medium rules for **differential ultracentrifugation** and exact pellet sequence.',
    '- **Ice-cold (`stops hydrolases`)**, **Isotonic (`stops osmotic bursting`)**, **pH-buffered (`stops denaturation`)**.\n- Pellet order: `1,000 g` **Nuclei** -> `10,000 g` **Mitochondria/Chloroplasts/Lysosomes** -> `100,000 g+` **ER Microsomes -> 80S Ribosomes**.'
  ),
  fc(
    'B2.2',
    'Fix Classroom **Slide 21**: What is the exact digestive structure formed when lysosome fuses with phagosome?',
    'A **`phagolysosome` (`secondary lysosome`)**, isolating acidic `pH ~4.8` hydrolases safely away from `pH 7.2` cytoplasm.'
  ),
  fc(
    'B2.2',
    'Explain why mitochondrial **cristae + tiny intermembrane space** (`and chloroplast thylakoid lumens`) boost ATP synthesis (`HL`).',
    'Highly folded membranes maximize **ETC / Photosystem / ATP synthase surface area**, while ultra-narrow lumen/intermembrane volumes mean pumping few `H⁺` builds massive electrochemical gradients instantaneously.'
  ),
  fc(
    'B2.2',
    'Trace **signal-peptide routing** from free vs **rER 80S ribosomes** through **cis -> trans Golgi (`HL`)**.',
    'Free ribosomes make cytosolic/nuclear/mito proteins; emerging hydrophobic **signal peptide + SRP** docks 80S ribosome onto **rER translocon** -> lumen folding -> **COPII vesicles -> `cis`-Golgi -> `trans`-Golgi** cisternal maturation -> exocytosis or M6P lysosomes.'
  ),
  fc(
    'B2.2',
    'Explain how **clathrin-coated pits** internalize LDL receptors (`HL`).',
    'Cytosolic **clathrin triskelions** assemble pentagon/hexagon geodesic cages forcing membranes inward around receptor-bound cargo (`dynamin pinches off vesicle`), then **uncoat** prior to endosome fusion.'
  ),

  // Topic B2.3 — Cell Specialization (6 cards)
  fc(
    'B2.3',
    'Explain how an erythrocyte, hepatocyte, and neuron differ so dramatically while sharing identical genomes.',
    '**Differential gene expression (`no DNA deletion!`):** tissue-specific **transcription factors** and epigenetic histone modifications switch lineage enhancers ON while locking unrelated genes in heterochromatin.'
  ),
  fc(
    'B2.3',
    'Contrast **totipotent**, **pluripotent**, and **multipotent** stem cells.',
    '- **Totipotent (`zygote/morula`):** All embryo tissues **PLUS placenta**.\n- **Pluripotent (`blastocyst ICM / iPSC`):** All 3 embryo germ layers ONLY (`no placenta`).\n- **Multipotent (`bone marrow HSCs`):** Restricted to one lineage family.'
  ),
  fc(
    'B2.3',
    'Why must dividing cells stay microscopic (`SA:V` geometric constraint) and how do specialized organs cheat it?',
    'Volume (`L³` = O₂/nutrient/heat/waste demand) grows faster than surface area (`L²` = membrane exchange), cutting **`SA:V = 6/L`**. Cheat via **flattening (`Type I pneumocytes, biconcave RBCs`)**, **microvilli (`7x` area)**, **root hairs**, or elongated axons.'
  ),
  fc(
    'B2.3',
    'Contrast **Type I** vs **Type II alveolar pneumocytes** (`HL B2.3.7`).',
    '- **Type I:** Ultra-thin (`~0.15 µm`) squamous sheet shortens gas diffusion path (`<0.5 µm` total with capillary).\n- **Type II:** Cuboidal secretory cell (`lamellar bodies`) releases **pulmonary surfactant**, lowering water surface tension so alveoli stay inflated.'
  ),
  fc(
    'B2.3',
    'Contrast **striated skeletal muscle fibres** vs **cardiac muscle cells** (`HL B2.3.8`).',
    '- **Skeletal:** Unbranched embryonic myoblast-fused **multinucleate syncytium** with peripheral nuclei.\n- **Cardiac:** Short, branched **uninucleate** dense-mitochondria cells linked by **intercalated discs (`desmosomes + electrical gap junctions`)**.'
  ),
  fc(
    'B2.3',
    'Contrast **sperm acrosome** vs **ovum cortical granules** during mammalian fertilization (`HL B2.3.9–10`).',
    '- **Sperm:** Streamlined cytoplasm-free head with hydrolytic **acrosome** digesting zona pellucida + spiral mitochondria fueling `9+2` flagellum.\n- **Ovum:** Huge nutrient yolk + **cortical granules** whose post-fusion exocytosis hardens zona pellucida blocking **polyspermy**.'
  ),

  // Topic C1.1 — Enzymes & Metabolism (6 cards)
  fc(
    'C1.1',
    'Contrast **anabolism** (`condensation`) vs **catabolism** (`hydrolysis/respiration`) and why active cells emit heat (`C1.1.9`).',
    'Anabolism builds macromolecules using ATP (`glycogen, protein, Calvin sugar`); catabolism oxidizes/hydrolyzes molecules (`glycolysis, digestion`), radiating uncaptured bond enthalpy continuously as body heat.'
  ),
  fc(
    'C1.1',
    'Why does **Koshland\'s Induced-Fit model** beat rigid lock-and-key catalysis?',
    'Weak initial substrate binding induces active-site conformational flexing (`straining bonds into transition state -> lower Ea`), while explaining broad group specificity and enzyme inhibition/allosteric shifts.'
  ),
  fc(
    'C1.1',
    'Contrast **Competitive** vs **Non-Competitive** effects on **`Vmax`** and **`Km`** (`HL`).',
    '- **Competitive (`e.g., statins, emergency ethanol`):** Active site; high `[S]` outcompetes inhibitor -> **`Vmax` UNCHANGED, apparent `Km` RISES**.\n- **Non-Competitive:** Allosteric site alters catalytic shape -> **`Vmax` DROPS, `Km` UNCHANGED**.'
  ),
  fc(
    'C1.1',
    'Summarize **isoleucine allosteric negative feedback (`C1.1.14 HL`)**.',
    'Accumulating end-product **L-isoleucine** binds reversibly to an **allosteric site on Enzyme 1 (`threonine deaminase`)**, shutting off the 5-step pathway at step 1 without wasting intermediates.'
  ),
  fc(
    'C1.1',
    'Explain how **penicillin** executes **mechanism-based irreversible inhibition (`C1.1.17 HL`)**.',
    'Penicillin\'s reactive `β-lactam` ring mimics cell-wall peptide substrate and forms an **irreversible covalent bond** inside bacterial **DD-transpeptidase** active sites, preventing peptidoglycan crosslinking so bacteria lyse osmotically (`evaded by β-lactamase`).'
  ),
  fc(
    'C1.1',
    'How should reaction rate `v₀` always be read from a Product-vs-Time assay curve?',
    'Calculate tangent gradient `Δ[Product] / Δt` right at **`t = 0` initial linear phase** BEFORE substrate depletion, product inhibition, or thermal denaturation bends the curve.'
  ),

  // Topic C1.2 — Cell Respiration (7 cards)
  fc(
    'C1.2',
    'Why must every cell regenerate **NAD⁺** during anaerobic fermentation without gaining extra ATP?',
    'Glycolysis (`+2 net ATP`) oxidizes triose phosphate via `NAD⁺ -> NADH`. Without `O₂`, mitochondria cannot clear `NADH`, so dumping H onto pyruvate (`lactate` in muscle -> **0 CO₂!** vs yeast **`ethanol + CO₂`**) frees `NAD⁺` to keep glycolysis alive.'
  ),
  fc(
    'C1.2',
    'Why is **KOH (`soda lime`)** wrapped inside germinating-seed respirometers (`C1.2.6`)?',
    'KOH absorbs all released `CO₂` (`KHCO₃`) so manometer fluid movement reflects pure net **`O₂` uptake** (`otherwise equal CO₂/O₂ RQ = 1.0 cancels volume change cleanly`). Pair with inert glass-bead thermobarometer!'
  ),
  fc(
    'C1.2',
    'List the **four steps of glycolysis (`HL`)** and exact net cytosolic yield per glucose.',
    '1. Phosphorylation (`−2 ATP`), 2. Lysis (`6C -> 2 × 3C TP`), 3. Oxidation (`-> 2 NADH`), 4. ATP payoff (`+4 gross = +2 net ATP + 2 pyruvate`).'
  ),
  fc(
    'C1.2',
    'How do **triglycerides (`lipids`)** enter cellular respiration vs glucose, and why can\'t fats fuel anoxic muscle (`HL`)?',
    'Fatty acids undergo **mitochondrial β-oxidation** straight into **`Acetyl-CoA + NADH + FADH₂`**, skipping cytosolic glycolysis (`no substrate ATP without O₂`), delivering `~2×` aerobic ATP/g.'
  ),
  fc(
    'C1.2',
    'State exact **Krebs cycle yields PER GLUCOSE (`2` turns)** and Link reaction yields (`HL`).',
    '- **Link (×2):** `2 Acetyl-CoA + 2 CO₂ + 2 NADH`.\n- **Krebs (×2):** **`4 CO₂ + 6 NADH + 2 FADH₂ + 2 ATP`** (`4C oxaloacetate + 2C -> 6C citrate`).'
  ),
  fc(
    'C1.2',
    'State oxygen\'s dual chemical role at **Complex IV** and why **`NADH` gives `2.5` vs `FADH₂` `1.5` ATP (`HL`)**.',
    'O₂ accepts depleted electrons + 2 matrix `H⁺` forming **`H₂O` (`keeping Complex I–IV moving`)**. **`NADH`** enters Complex I (`~10 H⁺` -> **`2.5 ATP`**); **`FADH₂`** enters Complex II (`~6 H⁺` -> **`1.5 ATP`**) -> **`30–32 net ATP/glucose`**.'
  ),
  fc(
    'C1.2',
    'Compute **Respiratory Quotient (`RQ`)** for glucose vs palmitate (`C₁₆H₃₂O₂`) and link to desert **Kangaroo Rats (`Allott p. 378`)**.',
    '`RQ = CO₂/O₂`: Glucose = **`1.00`** (`0.60 g H₂O/g`); Palmitate = `16/23 =` **`0.70`** (`yields 1.13 g metabolic H₂O/g` via Complex IV, hydrating non-drinking kangaroo rats!).'
  ),

  // Topic C1.3 — Photosynthesis (6 cards)
  fc(
    'C1.3',
    'Contrast **absorption spectrum** vs **action spectrum** and explain **`Rf`** order in leaf chromatography.',
    '- **Absorption:** `%` absorbed by isolated pigments (`430–470 nm` blue & `640–680 nm` red; reflects `~550 nm` green).\n- **Action (`Engelmann`):** Total leaf `O₂/CO₂` rate (`carotenoids fill green-blue gaps`).\n- **`Rf` = pigment / solvent:** Non-polar `β-carotene (~0.95) > Chl a (~0.60) > Chl b (~0.45) > xanthophylls`.'
  ),
  fc(
    'C1.3',
    'State what happens at the **light compensation point** and explain why high temperature `>35 °C` drops C3 photosynthesis.',
    'At compensation light, gross photosynthetic `O₂` matches respiration (`zero net gas flux`). Above `35 °C`, Calvin **enzyme denaturation** + wasteful Rubisco `O₂` binding (**photorespiration**) collapse yield.'
  ),
  fc(
    'C1.3',
    'Trace the **Z-scheme (`PSII -> PQ -> Cyt b₆f -> PC -> PSI -> NADP⁺ reductase`, HL)** noting exact compartments.',
    '**PSII (`P680`)** photolyzes **lumen `H₂O -> O₂ + 4H⁺`**; **PQ + `Cyt b₆f`** pump stromal `H⁺` into **lumen**; **PSI (`P700`) -> ferredoxin -> `NADP⁺ reductase`** makes **stromal `NADPH`** while **`ATP synthase`** outputs **stromal `ATP`**.'
  ),
  fc(
    'C1.3',
    'What did **Jagendorf\'s (`1966`) acid bath** prove (`HL C1.3.12`)?',
    'Soaking dark spinach thylakoids at `pH 4` then transferring into `pH 8 + ADP + Pi` produced **dark `ATP`** without photons or electron flow—proving **`ΔpH` proton-motive chemiosmosis** drives ATP synthase.'
  ),
  fc(
    'C1.3',
    'Why do chloroplasts run **cyclic photophosphorylation** (`PSI` only) alongside non-cyclic flow (`HL`)?',
    'Calvin demands `18 ATP : 12 NADPH` (`1.50 : 1`) per glucose, whereas non-cyclic flow yields only `~1.28 : 1`; **cyclic PSI (`Fd -> PQ -> Cyt b6f`)** pumps extra protons for **ATP only (`no O₂, no NADPH`)**.'
  ),
  fc(
    'C1.3',
    'Predict **Bassham (`1950s`, Allott p. 408)** `[GP]` & `[RuBP]` pool spikes under sudden dark vs low `CO₂` (`HL`).',
    '- **Light OFF:** `ATP/NADPH` stop -> **`[GP]` SPIKES**, `[RuBP]` drops.\n- **Low `CO₂` in bright light:** Rubisco stalls -> **`[RuBP]` SPIKES**, `[GP]` drops.'
  ),

  // Topic D2.3 — Water Potential (6 cards)
  fc(
    'D2.3',
    'Define **water potential (`Ψw`)** direction rule and state normal **isotonic medical saline (`D2.3`)** concentration.',
    'Water ALWAYS flows passively from **HIGHER (`less negative`, e.g., `−0.2 MPa`)** toward **LOWER (`more negative`, e.g., `−0.8 MPa`) `Ψw`**. Medical saline = **`0.154 mol dm⁻³ NaCl` (`≈ −0.74 MPa`)** stopping RBC lysis.'
  ),
  fc(
    'D2.3',
    'Contrast **cytolysis/crenation (`animal`)** vs **turgor/plasmolysis (`plant`)** across hypotonic & hypertonic baths.',
    '- **Hypotonic (`Ψw = 0`):** Wall-less RBCs burst (**cytolysis**); plant cellulose builds balancing **`+Ψp` turgor** without bursting.\n- **Hypertonic:** RBCs shrivel (**crenation**); plant plasma membrane pulls off cell wall (**plasmolysis, `Ψp = 0`**).'
  ),
  fc(
    'D2.3',
    'Write the HL water potential equation and sign rules for `Ψs` and `Ψp` (`Allott pp. 658–660`).',
    '**`Ψw = Ψs + Ψp`**. **Solute potential `Ψs = −iCRT`** is ALWAYS **`<= 0`**. Wall **pressure `Ψp`** is **`>= 0`** in turgid plant cells, `0` in beakers/animal cells/incipient plasmolysis, and **`< 0`** inside transpiring xylem.'
  ),
  fc(
    'D2.3',
    'Define **incipient plasmolysis (`HL`)** mathematically.',
    'Threshold where shrinking protoplast exerts zero force on the cell wall (`50%` cells barely detaching): **`Ψp = 0.0 MPa`**, so **`Ψw_cell = Ψs_cell = Ψw_ext`**.'
  ),
  fc(
    'D2.3',
    'How do ripening **cherries** split in summer rain (`Allott p. 652`), and how do drought-stressed **oaks** avoid wilting (`pp. 660–661`)?',
    '- **Cherries:** Soluble sugar accumulation drops pulp `Ψs` (`~−2 MPa`) while walls soften -> rainwater floods inward rupturing skin.\n- **Drought Oak:** Accumulates **compatible solutes (`proline, sugars, K+`)**, lowering leaf `Ψs` negatively so `Ψw_leaf < Ψw_dry soil` keeps `+Ψp` turgor!'
  ),
  fc(
    'D2.3',
    'Why use **`%Δmass`** and standardized peeled cylinders in potato osmometry (`Allott p. 656`)?',
    'Peeling removes waterproof suberin; identical diameter equalizes `SA:V`; `%Δmass = (mf−mi)/mi × 100` normalizes minor starting mass differences (`0%` x-intercept = bulk tissue `Ψw`).'
  ),

  // Topic D1.1–D1.3 & Year 2 Foundations D3.2–D3.3 (12 cards)
  fc(
    'D1.1',
    'Summarize **Meselson–Stahl (`1958`)** Gen 1 & Gen 2 CsCl bands refuting Conservative & Dispersive models.',
    '- **Gen 1 (`¹⁴N`):** Single `100%` hybrid `¹⁵N/¹⁴N` band (**kills Conservative**).\n- **Gen 2:** Two equal bands (`50% hybrid + 50% light ¹⁴N/¹⁴N`) (**kills Dispersive** -> **proves Semi-Conservative**).'
  ),
  fc(
    'D1.1',
    'Match each **HL Replisome Enzyme** to its exact reaction: `Gyrase`, `Helicase`, `Primase`, `Pol III`, `Pol I`, `Ligase`.',
    '- **Gyrase:** Relieves upstream supercoiling.\n- **Helicase:** Breaks complementary H-bonds (`SSB` stabilizes strands).\n- **Primase:** Lays `~10 nt` RNA primer (`3\'-OH`).\n- **Pol III:** `5\'->3\'` synthesis (`dNTP -> dNMP + PPi`) + `3\'->5\'` exonuclease proofreading.\n- **Pol I:** Replaces RNA primer with DNA.\n- **Ligase:** Seals phosphate nicks.'
  ),
  fc(
    'D1.1',
    'Interpret **Okazaki\'s ³H-Thymidine Pulse–Chase (`Allott p. 567`, HL)**.',
    '`2 s pulse` radioactivity sits in short `~1,000–2,000 nt` lagging **Okazaki fragments**; `60–120 s` unlabeled chase merges radioactivity into `>100 kb` strands via **Pol I + DNA ligase**.'
  ),
  fc(
    'D1.1',
    'State exact **PCR thermocycling temperatures** (`Taq polymerase`) and **`D1S80` VNTR** electrophoresis polarity (`Allott p. 565`).',
    '- **PCR:** `95 °C` denature H-bonds -> `55 °C` anneal primers -> `72 °C` **Taq** extends **`2ⁿ`** copies (`Taq survives 95 °C`).\n- **Electrophoresis:** Negative DNA migrates toward **positive anode**; **shortest fragments run farthest** (`child non-maternal band must match biological father`).'
  ),
  fc(
    'D1.2',
    'Calculate primary polypeptide amino acids from a `630-nt` coding mRNA ORF (`start` through `stop`).',
    '`(630 / 3) − 1 stop codon =` **`209 amino acids`** (`terminal UAA/UAG/UGA adds ZERO amino acid; AUG start Met is retained!`).'
  ),
  fc(
    'D1.2',
    'Contrast **Promoter mutations (`HL`)**, **`5\'` cap / `3\'` poly-A tail**, and **TNNT2 alternative splicing (`Allott p. 587`)**.',
    '- **Promoter:** Non-coding DNA binding RNAP/TFs (`mutations block transcription without touching ORFs`).\n- **Cap/Poly-A:** Protect eukaryotic mRNA from exonucleases & guide 80S docking.\n- **Alternative splicing (`TNNT2`):** Differential exon skipping converts `~20,000` genes into `>100,000` isoforms.'
  ),
  fc(
    'D1.2',
    'Summarize **`80S` Ribosome `E / P / A` sites**, **preproinsulin cleavage (`p. 590`)**, and **proteasomes (`p. 591`, HL)**.',
    '- **`A`:** Aminoacyl-tRNA enters; **`P`:** `rRNA` ribozyme transfers peptide; **`E`:** empty tRNA exits.\n- **Preproinsulin:** Loses signal peptide -> proinsulin -> loses **C-peptide** yielding `2-chain` insulin.\n- **Proteasomes:** Poly-ubiquitin tags misfolded proteins for cylindrical amino-acid recycling.'
  ),
  fc(
    'D1.3',
    'How does **UV-C radiation (`Allott p. 607`)** stall replication and why does **codon wobble** buffer point mutations?',
    'UV induces covalent **thymine dimers (`T=T`)** kinking DNA until nucleotide excision repair excises them. Meanwhile, genetic code **degeneracy (`3rd-base wobble`)** lets synonymous substitutions keep identical amino acids.'
  ),
  fc(
    'D3.2',
    'In a dihybrid cross, how does **`χ²`** distinguish independent assortment (`9:3:3:1`) from **autosomal linkage**?',
    'Observed progeny matching parental phenotypes massively exceed expected recombinants (`χ² >> critical value`, `p < 0.05`)—rejecting independent assortment and proving loci lie closely on the **same autosome** (`rare recombinants via crossing-over`).'
  ),
  fc(
    'D3.3',
    'Contrast **Insulin (`β-cells`)** vs **Glucagon (`α-cells`)** negative feedback (`Allott D3.3`).',
    '- **High glucose -> β-cell Insulin:** Inserts skeletal muscle/adipose **GLUT4** channels + activates glycogenesis (`glucose -> glycogen`).\n- **Low glucose -> α-cell Glucagon:** Triggers **liver** glycogenolysis (`glycogen -> glucose`) & gluconeogenesis.'
  ),
  fc(
    'D3.3',
    'Explain how **Antidiuretic Hormone (`ADH`)** restores blood osmolarity via `B2.1` aquaporins & `D2.3` medullary `Ψw`.',
    'Hypothalamic osmoreceptors detect high plasma osmolarity (`>300 mOsm`) -> posterior pituitary releases **ADH** -> collecting-duct exocytosis inserts **aquaporin-2** -> water reabsorbs osmotically into salty medulla (`concentrated urine`).'
  ),
  fc(
    'D3.3',
    'Summarize **hypothalamic thermoregulation** (`vasodilation/sweating` vs `vasoconstriction/shivering/thyroxine`).',
    '- **Heat stress:** Skin **vasodilation** + eccrine **sweat vaporization** (`water high latent heat 2,257 J/g!`).\n- **Cold stress:** Skin **vasoconstriction** + skeletal **shivering** + brown-fat `UCP1` uncoupling thermogenesis.'
  ),
];
