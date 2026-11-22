import type { StudyNoteBlock, PlayableDiagramSpec } from '@/types/diagrams';
import type { ClassroomSeedNote } from '../types';
import {
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

export const BIOLOGY_HL_NOTES_B: ClassroomSeedNote[] = [
  // ==========================================================================
  // 8. TOPIC B1.1 — CARBOHYDRATES & LIPIDS (UPGRADED)
  // ==========================================================================
  {
    topicCode: 'B1.1',
    title: 'Carbohydrates, Glycogen vs Cellulose & Cis/Trans Lipids (B1.1)',
    summary:
      'Complete B1.1 Carbohydrates & Lipids treatise grounded in Allott & Mindorff (pp. 180–196, 209) and Classroom Slides: carbon covalent polymers, α- vs β-D-glucose condensation, Slide 16 fructose hexose correction, starch/glycogen vs cellulose microfibrils, glycoproteins, triglycerides, cis vs trans unsaturation (Slide 36 correction), and bird fuel-mass trade-offs.',
    sourceFileNames: ['B1 1.1 Carbs and Lipids.pdf'],
    blocks: [
      callout(
        'guiding_questions',
        'Allott & Mindorff Chapter B1.1 Guiding Questions (pp. 180–196)',
        '- In what structural ways do covalent carbon skeletons yield enormous macromolecular diversity out of just a handful of small monomers?\n- How do subtle ring orientations (`α` vs `β` glucose) and bond geometries (`cis` vs `trans` `C=C`) dictate cell-wall mechanics, fuel storage efficiency, and membrane fluidity?'
      ),
      callout(
        'syllabus_link',
        'IB Syllabus Alignment (B1.1.1–B1.1.13 SL · Allott pp. 180–196 · B1 1.1 Carbs and Lipids.pdf)',
        '- **Carbon Chemistry (`B1.1.1–B1.1.2`):** Four stable covalent bonds creating chains, branches, and rings; **condensation vs hydrolysis** metabolic polymerization.\n- **Carbohydrates (`B1.1.3–B1.1.7`):** Monosaccharides (`glucose`, `galactose`, `fructose`, `ribose`), disaccharides (`maltose`, `lactose`, `sucrose`), storage polysaccharides (`amylose`, `amylopectin`, `glycogen`) vs structural **cellulose** (`180°` alternating β-glucose), plus **glycoproteins** in ABO/self recognition.\n- **Lipids (`B1.1.8–B1.1.13`):** Hydrophobicity, triglycerides (`glycerol + 3 fatty acids -> 3 ester bonds`), long-term `38 kJ g⁻¹` energy & adipose thermal insulation, **cis vs trans** fatty acids, steroids (`oestradiol`, `testosterone`), and **amphipathic phospholipids**.'
      ),
      h2('1. Carbon Tetravalence, Condensation & Carbohydrate Geometry (B1.1.1–B1.1.6)'),
      p(
        'Carbon forms the backbone of every macromolecule because each carbon atom holds **four valence electrons**, forming **four strong covalent single, double, or triple bonds** with other carbons, hydrogen, oxygen, nitrogen, phosphorus, or sulfur (`B1.1.1`, `Allott pp. 180–182`). Chains can stretch linearly, fork into branched glycogen networks, or close into stable 5- and 6-membered rings. Cells synthesize carbohydrates, triglycerides, proteins, and nucleic acids via enzymatic **condensation reactions**—removing `-H` from one monomer and `-OH` from the adjacent monomer to release one **H₂O** molecule and form a covalent bridge—while digestive and catabolic **hydrolysis reactions** consume one **H₂O** per covalent bond cleaved (`B1 1.1 Carbs and Lipids.pdf`).'
      ),
      p(
        '**Glucose (`C₆H₁₂O₆`)** illustrates how minute spatial geometry separates digestible energy reserves from timber (`Allott pp. 183–187`). When dissolved in water, linear D-glucose cyclizes into two ring **anomers** differing purely at **carbon-1 (`C1`)**: **α-D-glucose** projects its `C1-OH` group **downward** (opposite the `C6-CH₂OH` flag pointing up), whereas **β-D-glucose** projects `C1-OH` **upward** (same face as `C6`). Linking α-glucose monomers exclusively between `C1` and `C4` builds coiled helical **amylose** (unbranched starch), while inserting periodic `α(1->6)` branches every `~20–30` residues builds plant **amylopectin** or every `~8–12` residues builds highly compact animal/fungal **glycogen**. Because polysaccharides are giant polymers, they are **insoluble** and **osmotically neutral**—allowing hepatocytes and chloroplasts to store vast glucose reserves without triggering osmotic swelling or lysis (`D2.3`). Furthermore, glycogen\'s dense terminal ends let glycogen phosphorylase cleave dozens of glucose-1-phosphate molecules simultaneously during flight-or-fight muscle bursts!'
      ),
      p(
        'In **cellulose (`β(1->4)` glucan)** (`Allott pp. 186–187`), flipping `C1-OH` upward forces **every alternating β-D-glucose unit to rotate `180°` upside down** relative to its neighbors before forming a linear covalent `β(1->4)` glycosidic link. Rather than coiling into a helix, cellulose chains stay dead straight and unbranched, bundling in parallel sets of `~36–60` chains locked cross-wise by abundant intermolecular **hydrogen bonds** into tough **cellulose microfibrils**. Layered at crossed angles inside plant cell walls, cellulose withstands extreme hydrostatic **turgor pressure (`+0.6 to +1.0 MPa`)** while remaining freely permeable to water and dissolved solutes—whereas animal amylase active sites fit α-helices only, leaving cellulose indigestible roughage unless symbiotic herbivore gut bacteria secrete **cellulase**.'
      ),
      callout(
        'examiner_warning',
        'Classroom Errata Alert: Slide 16 (Fructose Hexose) & Slide 36 (Unsaturated H Count)',
        '- **Slide 16 Erratum (`B1 1.1 Carbs and Lipids.pdf`):** Classroom Slide 16 labels **fructose** as a *"pentose"* visually because fructose closes into a five-membered furanose ring! **FACT:** Fructose (`C₆H₁₂O₆`) has **6 carbon atoms** (two `-CH₂OH` side arms projecting at C1 and C6)—it is a **HEXOSE**, strictly distinct from `5-carbon` ribose (`C₅H₁₀O₅`) and deoxyribose (`C₅H₁₀O₄`).\n- **Slide 36 Erratum:** Forming ONE `C=C` double bond between adjacent carbons removes **TWO hydrogen atoms (`−2 H`)**, NOT 1 H atom (`saturated CₙH₂ₙO₂` vs monounsaturated `CₙH₂ₙ₋₂O₂`).'
      ),
      diag(BIO_V3_B11_MACROMOLECULES_EXPLORER),
      h2('2. Glycoproteins & Lipid Architecture: Triglycerides, Bilayers & Cis/Trans Fats (B1.1.7–B1.1.13)'),
      p(
        'Short carbohydrate oligosaccharides also coat exterior plasma membranes covalently bound to integral membrane proteins (**glycoproteins**) or lipids (**glycolipids**, `Allott p. 188`). Because branched sugar arrays point outward into extracellular space, they operate as high-specificity cellular ID tags (`self vs non-self immune discrimination`, `ABO blood-group antigens A, B, and H`, and embryonic tissue sorting via `CAMs`).'
      ),
      p(
        '**Lipids** (`Allott pp. 189–196`) encompass chemically diverse non-polar hydrophobic molecules (`triglycerides`, `phospholipids`, `steroids`) insoluble in polar cytoplasm yet soluble in organic ethanol/ether. A **triglyceride** (`triacylglycerol`) assembles when one `3-carbon` **glycerol** (`CH₂OH–CHOH–CH₂OH`) undergoes **three condensation reactions** with three long hydrocarbon **fatty acids (`R–COOH`)**, forming three covalent **ester linkages (`-COO-`)** and releasing `3 H₂O`. Completely uncharged hydrocarbon tails store **`~38 kJ g⁻¹`**—over double glycogen/starch\'s `~17 kJ g⁻¹` because fatty-acid carbons are far more chemically reduced (`C–H` rich) than oxygen-rich carbohydrates (`CH₂O`), AND because non-polar fats pack anhydrously without attracting heavy hydration shells.'
      ),
      p(
        'Fatty-acid packing depends heavily on `C=C` saturation geometry (`Allott pp. 191–194`). **Saturated fatty acids** contain zero `C=C` double bonds (`animal lard, butter`), allowing linear zig-zag chains to align closely under strong London dispersion forces (`high melting point`, solid at `20 °C`). **Unsaturated fatty acids** carry one (**monounsaturated**) or multiple (**polyunsaturated**) `C=C` double bonds (`plant olive/sunflower oils, marine fish EPA/DHA`). In natural enzymatic **cis-unsaturated fats**, both remaining H atoms sit on the **same side** of each `C=C`, introducing a rigid **`~30°` kink** that breaks tight van der Waals stacking and keeps plant oils and biological membranes fluid in cold environments (`B2.1`). Industrial partial hydrogenation accidentally flips some double bonds into artificial **trans-unsaturated isomers** (`H` atoms on opposite sides -> linear un-kinked rod resembling saturated fats!), packing cleanly into arterial plaques, elevating **LDL**, lowering HDL, and correlating strongly with coronary heart disease.'
      ),
      diag(BIO_V3_B11_POLYSACCHARIDES_MATRIX),
      h2('3. Quantitative Fuel-Mass Trade-Offs & Amphipathic Bilayers (Allott p. 209 & B1.1.12)'),
      callout(
        'textbook_excerpt',
        'Allott End-of-Chapter B1 Migratory Bird Synthesis (p. 209) & Mammalian Adipose Roles',
        'Why do trans-oceanic shorebirds (`bar-tailed godwit`), Arctic mammals, and hibernating bears build massive **triglyceride adipose** reserves instead of stuffing muscles solely with glycogen? First, lipids pack **`38 kJ g⁻¹`** vs **`17 kJ g⁻¹`** dry carb (`~2.2×` energy per gram). Second, polar glycogen retains `~2 g` bound water per gram stored—cutting true hydrated glycogen density to **`~5.7 kJ g⁻¹`** (`~6.7×` heavier per megajoule carried!). Third, adipose subcutaneous fat serves simultaneously as mechanical organ cushioning (around kidneys/eyes) and low-thermal-conductivity **thermal insulation** in cold Arctic seawater (`ringed seal, A1.1`), while steroids like **cholesterol** stabilize membranes and derive oestradiol/testosterone.'
      ),
      eq(
        '\\text{Glycerol} + 3\\,\\text{Fatty Acids} \\underset{+3\\text{H}_2\\text{O (Hydrolysis)}}{\\stackrel{-3\\text{H}_2\\text{O (Condensation)}}{\\rightleftharpoons}} \\text{Triglyceride (3 Ester Bonds)}',
        'Reversible esterification forming neutral energy-storage triglycerides vs pancreatic lipase hydrolysis; phospholipid synthesis replaces the third acyl tail with a negatively charged phosphate group.',
        [
          { symbol: '\\text{Ester Bond}', meaning: 'Covalent -C(=O)-O- linkage joining glycerol oxygen to fatty acyl carbonyl' },
          { symbol: '3\\text{H}_2\\text{O}', meaning: 'Exact stoichiometric water released during triglyceride condensation' },
        ]
      ),
      diag(BIO_V3_B11_ENERGY_MASS_WORKED),
      h2('4. Nature of Science, Nutrition Epidemiology & Steroid Signalling (B1.1.13)'),
      p(
        '**Phospholipids** swap one of glycerol\'s three fatty-acid slots for a polar, negatively charged **phosphate-choline head** (`B1.1.12`), creating an **amphipathic** molecule that spontaneously self-assembles into selective cellular **bilayers** (`B2.1`). Meanwhile, four-ring **steroid** lipids such as **oestradiol** and **testosterone** remain sufficiently small and hydrophobic (`C–H` steroid rings) to diffuse straight across target cell phospholipid bilayers without channels, binding intracellular nuclear receptors directly to reprogram transcription (`D1.2`).'
      ),
      callout(
        'tok_nos',
        'NOS & TOK: Epidemiological Correlation vs Causation in Saturated & Trans Fat Science',
        'Evaluating dietary fat impacts requires distinguishing randomized metabolic trials from long-term population epidemiology (`Allott pp. 193–195`). Early observational nutrition studies suffered confounding between refined sugars, smoking, sedentary habits, and total fat; controlled metabolic feeding trials + large prospective cohorts later isolated **industrial trans fatty acids** specifically as raising atherogenic LDL and suppressing protective HDL, prompting global WHO elimination bans while confirming cis-PUFAs (`omega-3/6`) support cardiovascular health.'
      ),
      p(
        'Linking `B1.1` polymer architecture straight onto human digestion, nutrition, and hormone physiology sharpens Paper 2 essays (`Allott pp. 185–195`). Pancreatic amylase hydrolyzes helical `α(1->4)` glycosidic linkages inside cooked **amylose** and **amylopectin** rapidly into **maltose** (`α-glucose + α-glucose`), whereas disaccharidases anchored inside intestinal microvilli brush borders (`B2.3`) split maltose (`maltase`), dairy **lactose** (`lactase`: `galactose + glucose`), and cane **sucrose** (`sucrase`: `glucose + fructose`)—while unhydrolyzed `β(1->4)` **cellulose** continues cleanly down the colon as insoluble dietary fibre stimulating gut peristalsis and nourishing beneficial microbiome fermenters. On the lipid side, industrial **partial catalytic hydrogenation** bubbles `H₂` across vegetable oils over nickel catalysts (`saturating cis C=C bonds`) to raise shelf-life and spreadable butteriness (`margarine`), inadvertently twisting remaining `C=C` bonds into linear **trans isomers** that intercalate rigidly inside arterial cell membranes (`B2.1`) and elevate cardiovascular atherogenesis risk compared with native **cis-monounsaturated oleic acid** (`olive oil`) or essential polyunsaturated omega-3 fatty acids. Finally, cholesterol\'s rigid four-ring carbon skeleton acts as the universal precursor for fat-soluble steroid hormones (**oestradiol** and **testosterone**), whose non-polar rings traverse target cell bilayers cleanly without membrane receptors, while marathon endurance physiology highlights carbohydrate-vs-fat fuel switching: early aerobic miles mobilize compact hepatic and muscle **glycogen (`~400–500 g` total)** rapidly before **adipose lipolysis (`triglycerides`)** dominates once glycogen depletes ("hitting the wall" occurs when slower fatty-acid β-oxidation limits ATP power below anaerobic muscle sprint capacity!).'
      ),
      h2('5. Exam Markscheme Lexicon (B1.1)'),
      terms([
        {
          term: 'Condensation vs Hydrolysis',
          definitionMarkdown: 'Condensation builds covalent glycosidic/ester/peptide/phosphodiester bonds by **removing H₂O**; hydrolysis cleaves polymers by **adding H₂O**.',
          markschemeKeyword: 'condensation releases H2O · hydrolysis consumes H2O',
        },
        {
          term: 'α- vs β-D-Glucose Polymers',
          definitionMarkdown: 'α-glucose (`C1-OH` down) forms helical amylose/glycogen storage; β-glucose (`C1-OH` up, every second inverted `180°`) forms linear H-bonded cellulose walls.',
          markschemeKeyword: 'alternating 180° inverted β-glucose -> straight H-bonded microfibrils',
        },
        {
          term: 'Glycogen Branching Advantage',
          definitionMarkdown: 'Frequent `α(1->6)` branches create abundant exposed terminal glucose ends for rapid enzymatic mobilization (`vs slower linear amylose`) while staying insoluble.',
          markschemeKeyword: 'many terminal ends for fast enzyme hydrolysis + osmotically insoluble',
        },
        {
          term: 'Fructose Hexose Rule (Slide 16)',
          definitionMarkdown: 'Fructose (`C₆H₁₂O₆`) is a **hexose** despite closing into a 5-membered furanose ring (pentoses are 5C ribose/deoxyribose).',
          markschemeKeyword: 'hexose (6 carbons), NOT pentose',
        },
        {
          term: 'Cis vs Trans Fatty Acids',
          definitionMarkdown: 'Cis `C=C` bends chain (`~30°`), disrupting packing (`fluid oils`, `2 H` removed per `C=C`); artificial trans stays linear, elevating LDL cholesterol.',
          markschemeKeyword: 'cis kinks prevent close packing vs linear trans mimics saturated',
        },
        {
          term: 'Triglyceride Energy-to-Mass Advantage',
          definitionMarkdown: 'Twice energy density (`38` vs `17 kJ g⁻¹`), hydrophobic anhydrous packing without osmotic hydration water (`~2 g H₂O/g glycogen`), plus thermal insulation.',
          markschemeKeyword: '2x energy/g + anhydrous (no bound water weight) + no osmotic pull',
        },
      ]),
    ],
  },

  // ==========================================================================
  // 9. TOPIC B1.2 — PROTEINS (UPGRADED)
  // ==========================================================================
  {
    topicCode: 'B1.2',
    title: 'Amino Acids, Peptide Bonds & HL 1°–4° Protein Folding (B1.2)',
    summary:
      'Complete B1.2 Proteins SL+HL treatise grounded in Allott & Mindorff (pp. 197–209) and Classroom Notes: universal amino-acid zwitterion backbone, ribosomal peptide condensation, dietary essential vs non-essential amino acids, 20^n proteome combinatorics (Titin/Insulin), denaturation thermodynamics, and HL 1°–4° folding + globular vs fibrous architecture.',
    sourceFileNames: ['B1.2 Protein Notes.pdf', 'B 2.2 Learning Goals.docx'],
    blocks: [
      callout(
        'guiding_questions',
        'Allott & Mindorff Chapter B1.2 SL+HL Guiding Questions (pp. 197–209)',
        '- How does joining just `20` amino acids into linear polypeptides create virtually limitless 3D shapes and catalytic or structural functions?\n- How do covalent peptide bonds and four distinct non-covalent/disulfide R-group interactions lock globular enzymes vs fibrous collagen into stable conformations?'
      ),
      callout(
        'syllabus_link',
        'IB Syllabus Alignment (B1.2.1–B1.2.12 SL + HL · Allott pp. 197–209 · B1.2 Protein Notes.pdf)',
        '- **SL Core (`B1.2.1–B1.2.5`):** Generalized `Cα` amino acid anatomy, peptide bond condensation, **dietary essential (`9` human) vs non-essential amino acids**, vast `20ⁿ` sequence space (`titin, insulin`), and heat/pH active-site **denaturation**.\n- **HL Extension (`B1.2.6–B1.2.12`):** Polar/charged vs hydrophobic R-group folding (`soluble enzymes vs transmembrane helices`), **Primary -> Secondary -> Tertiary -> Quaternary (`1°–4°`) hierarchy**, conjugated prosthetic **haem** in haemoglobin (`2α + 2β`), non-conjugated **insulin**, and fibrous **collagen** triple helix.'
      ),
      h2('1. Generalized Amino Acid Chemistry, Peptide Condensation & Diet (B1.2.1–B1.2.4)'),
      p(
        'Proteins carry out nearly every dynamic work of a cell: catalysis (`Rubisco`, `ATP synthase`), selective membrane gating (`Na⁺/K⁺-ATPase`, `aquaporins`), hormonal signalling (`insulin`), molecular transport (`haemoglobin`), adaptive defense (`immunoglobulins`), and tensile scaffolding (`collagen`). Every polypeptide is built from **20 universal genetically encoded α-amino acids** sharing one invariant structural hub around a central asymmetric **α-carbon (`Cα`)**: **(1) a basic amino group (`-NH₂`)**, **(2) an acidic carboxyl group (`-COOH`)**, **(3) a single hydrogen atom (`-H`)**, and **(4) a variable R-group (`side chain`)** dictating chemical identity (`Allott pp. 197–199`; `B1.2 Protein Notes.pdf`).'
      ),
      p(
        'At physiological cellular `pH ~7.2`, amino acids ionize amphoterically into **zwitterions**: the basic amine accepts `H⁺` (`-NH₃⁺`) while the acidic carboxyl donates `H⁺` (`-COO⁻`), turning soluble free amino acids and surface residues into rapid cytoplasmic **pH buffers**. Ribosomal `rRNA` (`peptidyl transferase`) elongates chains via **condensation** between the carboxyl `-OH` of amino acid `1` and the amino `-H` of amino acid `2`, expelling `1 H₂O` molecule and forging a rigid, planar covalent **peptide bond (`-CO–NH-`)** (`B1.2.2`). Every linear chain possesses a free **N-terminus (`NH₃⁺`)** at position 1 and a free **C-terminus (`COO⁻`)** at the end, containing strictly **`(n − 1)` peptide bonds** per polypeptide of `n` residues (`watch out for multi-chain proteins like insulin having 21 + 30 aa = 49 peptide bonds!`).'
      ),
      p(
        'Plants, fungi, and autotrophic bacteria synthesize all `20` amino acids from inorganic nitrates (`NO₃⁻`) and Calvin-cycle carbon skeletons (`TP`), whereas humans (`heterotrophs`) lack biosynthetic enzymes for **`9` essential amino acids (`e.g., valine, leucine, tryptophan, lysine, methionine`)** that must be ingested directly in balanced dietary protein—otherwise **kwashiorkor** or selective translational stalling halts cellular synthesis (`B1.2.3`). Meanwhile, `11` **non-essential amino acids** can be interconverted from metabolic intermediates via liver transaminases (`though vegan/vegetarian diets combine cereals + legumes to avoid limiting essential profiles`).'
      ),
      diag(BIO_V3_B12_PROTEIN_EXPLORER),
      h2('2. Infinite Sequence Space & Denaturation Thermodynamics (B1.2.4–B1.2.5)'),
      p(
        'Even short chains unlock astronomical combinatorial diversity (`B1.2.4`): because `20` different monomers occupy each position independently, a modest `10-residue` decapeptide already permits **`20¹⁰ ≈ 1.02 × 10¹³`** sequences, while real cellular proteins span from small **insulin** (`51` residues across 2 chains) to giant human muscle **titin** (**`34,350` amino acids**, `~3.8 MDa`, elastic sarcomere spring!). Moreover, a single cell\'s **proteome** (`total expressed protein repertoire`) shifts dramatically across differentiation (`hepatocyte vs erythrocyte`) and far outnumbers its `~20,000` DNA genes via **alternative splicing (`TNNT2`, `D1.2`)** and post-translational cleavage (`preproinsulin -> insulin`).'
      ),
      p(
        'Functional 3D conformation depends precariously on relatively weak electrostatic interactions, explaining **denaturation (`B1.2.5`, `Allott pp. 200–202`)**. Raising kinetic energy via **extreme heat** vibrates atoms violently enough to snap fragile hydrogen bonds and hydrophobic contacts (`e.g., frying egg-white albumin converts clear soluble spheres into tangled insoluble white coagulates`). Similarly, extreme **high or low pH** adds or strips `H⁺` onto acidic (`-COO⁻` -> `-COOH`) and basic (`-NH₃⁺` -> `-NH₂`) R-groups, neutralizing **ionic salt bridges** so active sites collapse and enzymes lose catalytic activity (`C1.1`). Crucially, mild thermal or pH denaturation leaves strong **covalent peptide bonds (`1°` primary sequence) completely intact** (`only extreme boiling in strong 6M acid hydrolyzes peptide bonds`).'
      ),
      callout(
        'examiner_warning',
        'Top B1.2 HL Confusion: Secondary H-Bonds vs Tertiary R-Group Bonds',
        'IB markschemes punish students who mix up which atoms stabilize each level:\n- **2° Secondary (`α-helix / β-sheet`):** Hydrogen bonds form ONLY between repeating **polypeptide backbone** **`C=O`** and **`N–H`** groups (`R-groups stick outward without forming 2° H-bonds`).\n- **3° Tertiary (Single folded polypeptide):** Stabilized exclusively by interactions among variable **R-groups**: **(1) hydrophobic clustering inside water**, **(2) R-group hydrogen bonds**, **(3) ionic salt bridges** (`Lys⁺···Glu⁻`), and **(4) covalent disulfide bridges (`-S–S-`)** oxidized between two **cysteine (`-SH`)** R-groups!'
      ),
      h2('3. HL Hierarchy of Protein Structure (1°–4°) & Polar vs Non-Polar R-Groups (B1.2.6–B1.2.12 HL)'),
      p(
        'Higher Level Biology dissects **four structural tiers (`B1.2.6–B1.2.9`, `Allott pp. 203–207`)** plus chemical R-group polarity (`polar hydrophilic`, `positively charged basic`, `negatively charged acidic`, and `non-polar hydrophobic`):'
      ),
      p(
        '- **Primary Structure (`1°`):** The exact DNA-encoded linear order of amino acids linked by peptide bonds. Primary order dictates every downstream fold automatically: mutating just one hydrophilic **Glutamate** to hydrophobic **Valine** at β-globin position `6` creates a sticky hydrophobic surface patch causing deoxygenated haemoglobin to polymerize into rigid **sickle cells**!\n- **Secondary Structure (`2°`):** Regular, local, backbone H-bonded coils (**`α-helices`**, stabilized every `i` to `i+4` turn, forming structural rods and membrane-spanning helices) and flat pleated ribbons (**`β-pleated sheets`**, parallel or antiparallel, conferring immense tensile strength in spider silk and enzyme cores).\n- **Tertiary Structure (`3°`):** Precise asymmetric 3D compactness of one entire polypeptide sculpted by all **four R-group interactions**. Notice how R-group placement flips between compartments (`B1.2.6`): inside **aqueous cytosolic proteins** (`Rubisco`, `catalase`), **hydrophobic R-groups bury inward** away from water while **hydrophilic/charged R-groups coat the soluble surface**; conversely, inside **integral transmembrane channels (`aquaporin`, `Na⁺/K⁺ pump`)**, a band of **hydrophobic R-groups coats the OUTSIDE** touching lipid hydrocarbon tails while hydrophilic R-groups line the central aqueous pore!\n- **Quaternary Structure (`4°`):** Non-covalent and disulfide assembly of two or more folded polypeptide subunits (`oligomers`)—often partnered with non-protein **prosthetic groups** (`conjugated proteins`).'
      ),
      callout(
        'textbook_excerpt',
        'Required IB Named Proteins (Allott pp. 206–208): Conjugated Haemoglobin vs Non-Conjugated Insulin & Collagen',
        '- **Haemoglobin (Globular · 4° Conjugated):** Four subunits (`2α + 2β` globin polypeptides), each clasping a non-polypeptide iron-containing **haem prosthetic group (`Fe²⁺` porphyrin)**. Binding `O₂` at one haem triggers quaternary allosteric flexing that boosts `O₂` affinity across the remaining three sub-sites (`cooperative sigmoidal dissociation curve`).\n- **Insulin (Globular · Non-Conjugated 4°):** `A` (`21 aa`) and `B` (`30 aa`) chains joined by two interchain disulfide bridges without any prosthetic metal/organic cofactor; circulates dissolved in blood plasma to bind insulin receptors.\n- **Collagen (Fibrous · Non-Conjugated 4°):** Three elongated left-handed polypeptide helices rich in repeating **`Glycine–Proline–Hydroxyproline`** (`small Gly fits tightly along the central axis`) coiled into an insoluble, rope-like right-handed superhelix stabilizing tendons, bone matrix, cartilage, and dermis against tearing.'
      ),
      diag(BIO_V3_B12_PROTEIN_CLASSES_MATRIX),
      eq(
        '\\text{Combinations} = 20^n \\qquad \\text{Peptide Bonds} = \\sum_{i=1}^{k} (n_i - 1) \\qquad \\text{Condensation }\\text{H}_2\\text{O} = \\sum (n_i - 1)',
        'Polypeptide sequence combinatorics and exact peptide-bond / condensation-water accounting across k separate polypeptide chains (e.g., k = 2 for insulin, k = 4 for haemoglobin).',
        [
          { symbol: '20^n', meaning: 'Theoretical polypeptide permutations of length n from 20 encoded amino acids' },
          { symbol: 'k', meaning: 'Number of distinct covalent polypeptide chains in the quaternary complex' },
        ]
      ),
      diag(BIO_V3_B12_PEPTIDE_WORKED),
      h2('4. Nature of Science: Anfinsen Folding & AlphaFold Structural Biology (Allott p. 208)'),
      callout(
        'tok_nos',
        'NOS & TOK: From Chemical Reductionism (Anfinsen) to AI Structure Prediction',
        'Christian Anfinsen denatured ribonuclease A completely with urea and β-mercaptoethanol (`unfolding 3° helices and breaking disulfide bridges`), then washed away chemicals and watched ribonuclease **refold spontaneously back to 100% catalytic shape**—proving `1°` amino acid sequence inherently encodes `3°` thermodynamics (`Anfinsen\'s Dogma`, excluding chaperone-assisted giant proteins). Modern deep-learning tools (`AlphaFold`) leverage evolutionary residue co-variation across millions of homologous proteins to predict 3D structures computationally from `1°` sequence alone, accelerating drug design alongside Cryo-EM validation (`A2.2`).'
      ),
      p(
        'Three clinical and nutritional case studies anchor `B1.2` straight into HL exam questions (`Allott pp. 199–209`). First, **collagen triple-helix mechanics and scurvy**: repeating `Glycine–X–Y` motifs (`often Gly–Pro–Hydroxyproline`) place tiny single-H `Glycine` R-groups directly along the crowded core axis while external prolines undergo enzyme-catalyzed **hydroxylation requiring Vitamin C (ascorbic acid)** to crosslink neighboring collagen strands via H-bonds! Vitamin C deficiency blocks prolyl hydroxylase, causing fragile un-crosslinked skin/gum/vascular collagen (**scurvy**). Second, **human fever and heatstroke above `41–42 °C`**: excessive thermal energy snaps weak active-site H-bonds and ionic R-group salt bridges inside brain metabolic enzymes (`denaturation`), whereas specialized cellular **molecular chaperones (`HSP70`)** help slow newly translated chains fold safely without tangling into toxic hydrophobic aggregates (`neurodegenerative amyloid plaques`). Third, **dietary protein complementarity (`B1.2.3`)**: maize/wheat cereals run scarce in **lysine/tryptophan** while beans/lentils run scarce in **methionine**; combining complementary legumes + grains in one daily diet prevents essential amino-acid depletion (`where missing even ONE essential amino acid halts ribosome A-site elongation across all translating mRNAs cleanly!`). Finally, contrast **Rubisco** (`most abundant globular chloroplast protein worldwide, compact active-site pockets catalyzing Calvin CO₂ fixation`) against orb-weaver **spider silk (`fibroin`)** whose tightly stacked alanine-rich antiparallel **`β-pleated sheets`** achieve tensile strengths rivaling Kevlar without soluble tertiary sphericity.'
      ),
      h2('5. Exam Markscheme Lexicon (B1.2)'),
      terms([
        {
          term: 'Generalized Amino Acid & Zwitterion',
          definitionMarkdown: 'Central `Cα` bonded to `-NH₂` (`-NH₃⁺`), `-COOH` (`-COO⁻`), `-H`, and variable `R-group`; zwitterion charges confer pH-buffering amphoteric behavior.',
          markschemeKeyword: 'central Cα · amine + carboxyl + H + R-group · zwitterion buffer',
        },
        {
          term: 'Peptide Bond',
          definitionMarkdown: 'Covalent `-CO–NH-` bond formed by condensation removing `H₂O` between `-COOH` and `-NH₂` (`(n-1)` bonds per single chain of `n` residues).',
          markschemeKeyword: 'covalent bond between C=O and N-H via condensation',
        },
        {
          term: 'Denaturation Mechanism',
          definitionMarkdown: 'Heat (`excessive kinetic vibration`) or extreme pH (`shifts R-group ionization`) breaks H-bonds/ionic bonds, altering 3D active site while leaving `1°` peptide bonds intact.',
          markschemeKeyword: 'breaks H-bonds/ionic bonds -> unfolds 3D shape · 1° peptide intact',
        },
        {
          term: 'Secondary vs Tertiary Bonding (HL)',
          definitionMarkdown: '2° = regular **backbone** `C=O···H-N` H-bonds (`α-helix/β-sheet`); 3° = **R-group** disulfide (`Cys–Cys`), ionic, H-bond, and hydrophobic core interactions.',
          markschemeKeyword: '2° backbone H-bonds vs 3° R-group disulfide/ionic/H/hydrophobic',
        },
        {
          term: 'Membrane vs Cytosolic R-Group Orientation (HL)',
          definitionMarkdown: 'Soluble globular proteins expose hydrophilic R-groups outward and hide hydrophobic inside; transmembrane channels expose **hydrophobic R-groups outside** contacting lipid tails.',
          markschemeKeyword: 'hydrophobic R-groups external in transmembrane core vs internal in water',
        },
        {
          term: 'Globular Haemoglobin vs Fibrous Collagen (HL)',
          definitionMarkdown: 'Haemoglobin = soluble `4°` conjugated globular (`2α+2β + 4 Fe²⁺ haem`); Collagen = insoluble `4°` non-conjugated triple-helix tensile fibres (`Gly-X-Y`).',
          markschemeKeyword: 'conjugated globular O2 carrier (haem) vs insoluble fibrous triple helix',
        },
      ]),
    ],
  },

  // ==========================================================================
  // 10. TOPIC B2.1 — MEMBRANES & MEMBRANE TRANSPORT (BRAND NEW GUIDE)
  // ==========================================================================
  {
    topicCode: 'B2.1',
    title: 'Membranes, Fluid Mosaic Dynamics, Cholesterol & HL Transporters (B2.1)',
    summary:
      'Brand-new SL+HL B2.1 guide grounded in Allott & Mindorff (pp. 210–228): amphipathic phospholipid barrier physics, Singer–Nicolson Fluid Mosaic vs Davson–Danielli falsification, passive vs active transport, cholesterol bidirectional fluidity buffering, CAM tissue adhesion, and HL voltage-gated K+, nicotinic AChR, Na+/K+-ATPase, and SGLT1.',
    sourceFileNames: ['2026 Bio 5HL Course Outline.docx', 'B 2.2 Learning Goals.docx'],
    blocks: [
      callout(
        'guiding_questions',
        'Allott & Mindorff Chapter B2.1 Guiding Questions (pp. 210–228)',
        '- How do amphipathic phospholipid bilayers maintain both a leak-proof hydrophobic permeability seal and fluid molecular mobility?\n- How do specialized channel, carrier, pump, and co-transporter proteins regulate selective ion, nutrient, and vesicular traffic across membranes?'
      ),
      callout(
        'syllabus_link',
        'IB Syllabus Alignment (B2.1.1–B2.1.17 SL + HL · Allott pp. 210–228 · Key New Core Topic)',
        '- **SL Core (`B2.1.1–B2.1.10`):** Lipid bilayers & selective permeability (`B2.1.1`), **Fluid Mosaic Model** (`integral` vs `peripheral` proteins, `glycoproteins`, `glycolipids`), simple diffusion & **osmosis (`aquaporins`)**, facilitated diffusion, primary active transport, and **endocytosis/exocytosis**.\n- **HL Extension (`B2.1.11–B2.1.17`):** **Fatty acid saturation & cholesterol bidirectional fluidity buffering (`B2.1.11–12`)**, gated channels (**`voltage-gated K⁺`**, **`ligand-gated nicotinic AChR`**), **`Na⁺/K⁺-ATPase` (`3:2`)**, **secondary active `SGLT1`**, and **Cell Adhesion Molecules (`CAMs`)** + Free Energy / Barley / Chickpea DBQs (`pp. 214–222`).'
      ),
      h2('1. Phospholipid Bilayer Barrier & The Fluid Mosaic Paradigm Shift (B2.1.1–B2.1.4)'),
      p(
        'Every cell boundary runs on one physicochemical engine (`Allott pp. 210–213`): **phospholipids are amphipathic** (`B1.1`), possessing a polar, negatively charged phosphate head facing water (`extracellular fluid` and `cytosol`) and two non-polar fatty-acyl tails clustering inward out of water. Because breaking hydrogen bonds to drag charged ions (`Na⁺`, `K⁺`, `Cl⁻`, `Ca²⁺`) or hydrated polar glucose across that `~3 nm` oily hydrophobic core faces an immense activation energy barrier, pure lipid bilayers remain **impermeable to hydrophilic solutes and ions**, while letting tiny uncharged lipophilic molecules (`O₂`, `CO₂`, `ethanol`, `steroid hormones`) slip freely down concentration gradients.'
      ),
      p(
        'Before the 1970s, textbooks taught the **Davson–Danielli sandwich model** (a uniform lipid core coated like bread on both faces with continuous smooth protein sheets), prompted by dark tramline edges seen in early TEM micrographs. Three empirical proofs **falsified Davson–Danielli** and installed **Singer and Nicolson\'s Fluid Mosaic Model (1972)** (`Allott pp. 215–216`): **(1) Freeze-fracture EM (`A2.2`)** cleaved along the bilayer midplane and exposed globular protein particles embedded *straight through* the hydrophobic center; **(2) Biochemical extraction** showed membrane proteins carry hydrophobic outer amino-acid collars insoluble in water; and **(3) Frye–Edidin Fluorescent Antibody Fusion (`1970`)** tagged mouse membrane proteins green and human ones red, fused cells with Sendai virus, and watched red and green proteins intermix rapidly within `40 minutes` across one continuous liquid lipid sea (`fluid` = lateral phospholipid/protein diffusion; `mosaic` = diverse embedded integral and peripheral proteins).'
      ),
      callout(
        'definition',
        'Integral vs Peripheral Proteins & Glycocalyx (Fluid Mosaic Anatomy)',
        '- **Integral (Transmembrane) Proteins:** Span full bilayer (`polytopic`) or tuck partway into one leaflet via **non-polar hydrophobic R-groups** contacting fatty-acyl tails, plus polar/charged R-groups contacting extracellular/cytosolic water (`channels, carriers, pumps, hormone receptors`).\n- **Peripheral Proteins:** Lack hydrophobic transmembrane anchors; attach reversibly onto integral proteins or polar lipid heads (`e.g., cytoskeletal spectrin, intracellular G-proteins`) and wash off easily with mild salt solutions.\n- **Glycoproteins & Glycolipids:** Outward-facing sugar antennae functioning in immune self-recognition (`ABO`) and **CAM** tissue locking.'
      ),
      diag(BIO_V3_B21_MEMBRANE_EXPLORER),
      h2('2. Passive Diffusion, Facilitated Transport, Osmosis & Bulk Vesicles (B2.1.5–B2.1.9)'),
      p(
        'Materials cross membranes passively **down concentration or electrochemical gradients** (`requiring ZERO ATP, powered by thermal kinetic energy`) or actively **against gradients** (`requiring ATP or coupled gradients`, `Allott pp. 217–222`):'
      ),
      p(
        '1. **Simple Diffusion:** Hydrophobic molecules (`steroids`, `O₂`, `CO₂`) pass straight through gaps oscillating between lipid tails linearly with concentration gradient.\n2. **Osmosis & Aquaporins:** Water moves slowly across bare bilayers due to tiny polar size, or `~10⁹ H₂O s⁻¹` per pore through integral **aquaporin** channels (`rich in kidney collecting ducts and erythrocytes`) from higher to lower water potential (`D2.3`).\n3. **Facilitated Diffusion (Channels vs Carriers):** Integral **channel proteins** form hydrophilic selective pores (`K⁺`, `Na⁺`, `Cl⁻`) letting hydrated ions rush rapidly when gated open, whereas **carrier proteins** (`GLUT1 glucose`) undergo specific shape changes upon solute binding—meaning carrier-mediated uptake exhibits Michaelis–Menten **saturation plateau (`Vmax`)** once every carrier stays occupied!\n4. **Bulk Vesicular Traffic (`Endocytosis` & `Exocytosis`):** Membrane fluidity (`phospholipids flowing and pinching cleanly via ATP-powered actin/clathrin/SNARE machinery`) lets eukaryotic cells ingest bacteria/macromolecules (**phagocytosis / pinocytosis / clathrin receptor-mediated endocytosis**) or fuse secretory vesicles outward (**exocytosis**, such as pancreatic insulin, synaptic acetylcholine, and Type II alveolar surfactant).'
      ),
      h2('3. HL Cholesterol Fluidity Buffering, Gated Channels, Na⁺/K⁺-ATPase & SGLT1 (B2.1.10–B2.1.17)'),
      p(
        'Organisms must preserve membrane fluidity precisely within a viable liquid-crystal window despite swinging external temperatures (`Allott pp. 223–225`, `B2.1.11–12`). Cold-water Arctic fish and winter crops boost **short-chain and `cis`-polyunsaturated fatty acids (`kinked tails`)** in membrane phospholipids (`Allott chickpea/barley chill DBQs`) so membranes avoid rigid waxy solidification. Animals supplement this uniquely with **cholesterol** tucked alongside fatty tails (`polar -OH near phosphate heads; flat rigid steroid ring spanning outer tail segments`), operating as a **bidirectional fluidity buffer**:'
      ),
      p(
        '- **At High Temperatures:** Rigid sterol rings physically dampen excess hydrocarbon tail whipping, **decreasing excess fluidity** and stopping membranes from turning dangerously leaky.\n- **At Low Temperatures:** Bulky non-planar cholesterol molecules wedge between neighboring straight saturated tails, preventing orderly van der Waals crystallization—**maintaining fluidity** where pure phospholipid bilayers would freeze solid!'
      ),
      callout(
        'examiner_warning',
        'Four Required HL Membrane Proteins & Allott DBQ Mastery (pp. 224–228)',
        '1. **Na⁺/K⁺-ATPase Antiporter (Primary Active):** Hydrolyzes `1 ATP` to undergo alternating **`E1 <-> E2`** conformational inversion, pumping **`3 Na⁺ OUT`** and **`2 K⁺ IN`** (`electrogenic net +1 outward`, creating `−70 mV` resting potential and driving `Na⁺`-coupled uptake). Remember carriers NEVER open on both faces at once!\n2. **SGLT1 (Secondary / Indirect Active Symporter):** Imports `1` uphill glucose molecule coupled to `2 Na⁺` rushing inward down the `Na⁺` gradient actively generated by basolateral `Na⁺/K⁺-ATPase` (`Allott barley/intestinal DBQ`).\n3. **Voltage-Gated `K⁺` Channel (Passive Facilitated):** Depolarization (`+30 mV`) flips S4 voltage sensors open so `K⁺` rushes out passively to repolarize axons.\n4. **Ligand-Gated Nicotinic `AChR` (Passive Facilitated):** Two acetylcholine neurotransmitters bind extracellular pockets, snapping the channel open for rapid `Na⁺` influx at neuromuscular junctions.'
      ),
      diag(BIO_V3_B21_NAK_PUMP_STEPS),
      h2('4. Cell Adhesion Molecules (CAMs), Cornea / Chickpea DBQs & NOS (Allott pp. 214–228)'),
      p(
        'Multicellular tissues do not drift loosely like unicellular amoebae: specialized transmembrane glycoproteins called **Cell Adhesion Molecules (`CAMs`, e.g., cadherins, integrins)** extend outward from adjacent plasma membranes, binding homophilically (`self-to-self`) or onto extracellular collagen matrices (`B2.1.17`, `Allott pp. 227–228`). Distinct CAM signatures guide embryonic neural sorting, anchor epithelial tight/adherens barriers, and arrest rolling blood leukocytes onto inflamed capillary walls—whereas metastatic carcinoma cells famously downregulate E-cadherin CAMs so malignant cells break free and invade distant organs!'
      ),
      eq(
        '\\Delta G_{\\text{transport}} = RT \\ln\\!\\left(\\frac{[C]_{\\text{in}}}{[C]_{\\text{out}}}\\right) \\qquad 3\\,\\text{Na}^+_{\\text{in}} + 2\\,\\text{K}^+_{\\text{out}} + \\text{ATP} \\longrightarrow 3\\,\\text{Na}^+_{\\text{out}} + 2\\,\\text{K}^+_{\\text{in}} + \\text{ADP} + \\text{P}_i',
        'Thermodynamic free-energy barrier favoring passive flow down gradients vs primary active Na+/K+-ATPase pump stoichiometry sustaining secondary SGLT1 cotransport.',
        [
          { symbol: '\\Delta G_{\\text{transport}}', meaning: 'Negative for spontaneous passive diffusion; positive (ATP-required) against gradients' },
          { symbol: '3\\,\\text{Na}^+ : 2\\,\\text{K}^+', meaning: 'Electrogenic antiporter ratio per ATP hydrolyzed across E1 -> E2 transition' },
        ]
      ),
      diag(BIO_V3_B21_TRANSPORT_MATRIX),
      callout(
        'tok_nos',
        'NOS & TOK: Falsification of Davson–Danielli & Membrane Research Ethics',
        'Notice how Allott highlights **model falsification (`Popper`)** in membrane history (`pp. 215–216`): early low-resolution TEM micrographs appeared cleanly compatible with Davson–Danielli protein coats ("railroad tracks") for three decades until freeze-fracture cleavage and fluorescent protein tracking supplied **discrepant observations** incompatible with rigid protein sandwiches—forcing paradigm replacement with the dynamic Fluid Mosaic Model (`similar to how Cryo-EM updates static X-ray snapshots today`).'
      ),
      p(
        'Connecting `B2.1` membrane transport straight onto **Allott\'s Showcase DBQs (`Cornea p. 214`, `Barley & Chickpea Cold Survival pp. 218–221`)** and clinical medicine brings every transporter vividly to life. Inside mammalian eye **corneas**, avascular collagen stromal layers stay optically transparent ONLY while active endothelial **`Na⁺/K⁺-ATPase` pumps** export ions outward so passive **osmosis (`aquaporins`)** keeps water thickness tightly constant—explaining why cold-stored donor corneas swell cloudy when hypothermia halts ATP pumping unless warmed gently (`p. 214`)! In **chilled barley and chickpea root DBQs (`pp. 218–221`)**, frost-tolerant cultivars actively remodel membrane phospholipids by inserting enzyme-desaturated **`cis`-polyunsaturated linoleic/linolenic chains** whose `30°` kinks preserve fluid liquid-crystal membrane diffusion (`avoiding chilling injury solute leakage`) at `4 °C` where saturated cultivars solidify and leak potassium electrolytes. Notice also membrane **permeability coefficients (`Allott p. 212`)**: small lipophilic O₂/CO₂/ethanol cross artificial phospholipid bilayers ~`10⁸×` faster than hydrated `Na⁺/Cl⁻` ions (`requiring dedicated channels or ATP pumps!`). Finally, **World Health Organization Oral Rehydration Solution (`ORS`)** rescues millions from cholera dehydration directly through **HL `SGLT1` cotransport (`B2.1.16`)**: cholera toxin floods intestinal cAMP-gated Cl⁻ secretion, yet feeding equimolar **glucose + NaCl water** exploits intact villus **SGLT1 (`2 Na⁺ + 1 glucose in`)** driven by basolateral **`Na⁺/K⁺-ATPase`**, dragging `Na⁺`, `glucose`, and osmotic water (`through aquaporins and paracellular paths`) cleanly back into bloodstream plasma—mirroring how plant root hairs instead spend **proton-pump (`H⁺-ATPase`)** energy exporting `H⁺` outward to pull soil mineral anions/sucrose inward via H⁺-symporters!'
      ),
      h2('5. Exam Markscheme Lexicon (B2.1)'),
      terms([
        {
          term: 'Fluid Mosaic Model Evidence',
          definitionMarkdown: 'Freeze-fracture protein bumps inside the hydrophobic lipid core + Frye–Edidin red/green fluorescent cell-fusion mixing proved fluidity and integral embedding.',
          markschemeKeyword: 'freeze-fracture transmembrane particles + fluorescent antibody mixing',
        },
        {
          term: 'Cholesterol Fluidity Buffer (HL)',
          definitionMarkdown: 'Rigid amphipathic steroid restricts excessive tail motion at high `T` AND blocks tight crystallization of straight saturated tails at low `T`.',
          markschemeKeyword: 'reduces fluidity at high T AND prevents solidification at low T',
        },
        {
          term: 'Channel vs Carrier vs Pump',
          definitionMarkdown: 'Channels form gated hydrophilic pores (passive); carriers flip shape passively (`Vmax` plateau); pumps consume ATP (`E1<->E2`) moving solutes uphill.',
          markschemeKeyword: 'gated pore vs passive conformational carrier vs ATP-driven pump',
        },
        {
          term: 'Na⁺/K⁺-ATPase Exact Stoichiometry (HL)',
          definitionMarkdown: 'Antiporter hydrolyzes `1 ATP` to pump **`3 Na⁺` out** and **`2 K⁺` in** (`maintaining −70 mV resting potential and SGLT1 gradients`).',
          markschemeKeyword: '3 Na+ out : 2 K+ in per ATP · alternating E1/E2 conformation',
        },
        {
          term: 'SGLT1 Secondary Active Symporter (HL)',
          definitionMarkdown: 'Imports uphill glucose across gut/nephron apex coupled to `Na⁺` moving down the steep gradient sustained by basolateral `Na⁺/K⁺-ATPase`.',
          markschemeKeyword: 'coupled to Na+ gradient from Na+/K+-ATPase (indirect ATP)',
        },
        {
          term: 'Cell Adhesion Molecules (CAMs, HL)',
          definitionMarkdown: 'Transmembrane glycoproteins anchoring cell–cell and cell–matrix tissue cohesion (`cadherins, integrins`); lost in cancer metastasis.',
          markschemeKeyword: 'transmembrane tissue-sorting adhesion proteins · loss enables metastasis',
        },
      ]),
    ],
  },

  // ==========================================================================
  // 11. TOPIC B2.2 — ORGANELLES & COMPARTMENTALIZATION (UPGRADED)
  // ==========================================================================
  {
    topicCode: 'B2.2',
    title: 'Organelles, Compartmentalization, Clathrin & Ultracentrifugation (B2.2)',
    summary:
      'Complete B2.2 Compartmentalization & Ultrastructure SL+HL guide (Allott pp. 229–239; Classroom Notes): double/single/non-membranous classes, differential ultracentrifugation, nuclear-cytoplasmic decoupling, rER->cis/trans Golgi cisternal maturation, clathrin triskelions, Slide 21 phagolysosome precision, and cristae/thylakoid bioenergetics.',
    sourceFileNames: ['B2.2 Organelles and Compartmentalization.pdf', 'B 2.2 Learning Goals.docx'],
    blocks: [
      callout(
        'guiding_questions',
        'Allott & Mindorff Chapter B2.2 SL+HL Guiding Questions (pp. 229–239)',
        '- What metabolic and regulatory advantages do membrane-bound compartments confer on eukaryotic cells over prokaryotes?\n- How do organellar ultrastructures (nuclear pores, rER–Golgi vesicles, clathrin coats, cristae, thylakoids) specialize each compartment for its biochemical work?'
      ),
      callout(
        'syllabus_link',
        'IB Syllabus Alignment (B2.2.1–B2.2.6 SL + HL · Allott pp. 229–239 · B2.2 Learning Goals.docx)',
        '- **SL Core (`B2.2.1–B2.2.3`):** Organelles defined as discrete structural subunits, advantages of eukaryotic **compartmentalization**, and **nuclear separation of transcription from cytoplasmic translation (`B2.2.3`)**.\n- **HL Extension (`B2.2.4–B2.2.6`):** Structure–function adaptations of **mitochondria (`cristae`, tiny intermembrane space)**, **chloroplasts (`thylakoid grana/lumen`, `stroma`)**, mitotic breakdown/reassembly of the **nuclear envelope**, **free vs rER 80S ribosome** protein routing, **Golgi cis-to-trans cisternal maturation**, and **clathrin-coated endocytosis vesicles** + **ultracentrifugation**.'
      ),
      h2('1. Principles of Compartmentalization & Differential Ultracentrifugation (B2.2.1–B2.2.2)'),
      p(
        'Whereas prokaryotes run thousands of reactions together inside one continuous cytosolic bag (`A2.2`), eukaryotes divide intracellular volume behind selectively permeable membranes (`Allott pp. 229–232`; `B2.2 Organelles and Compartmentalization.pdf`). **Four metabolic advantages** explain why this complexity evolved despite high ATP assembly costs: **(1) Local reactant & enzyme concentration** (`e.g., packing Rubisco and RuBP at high molarity inside chloroplast stroma accelerates slow carbon fixation`); **(2) Incompatible pH & cofactor isolation** (`keeping acidic pH ~4.8 hydrolytic proteases, nucleases, and lipases safely inside lysosomes prevents autodigestion of pH 7.2 cytosol, while keeping peroxisomal H₂O₂ breakdown walled off from fragile DNA`); **(3) Membrane gradients in tiny volumes** (`pumping just a few H⁺ ions into a microscopic intermembrane space or thylakoid lumen builds massive ΔpH chemiosmotic batteries rapidly`); and **(4) Spatial regulation of gene expression** (`decoupling nuclear transcription from cytosolic translation`).'
      ),
      p(
        'How do biochemists purify intact mitochondria, nuclei, or ribosomes out of whole liver or spinach leaves to assay their enzymes separately? **Differential ultracentrifugation** (`Allott pp. 230–231`; `B 2.2 Learning Goals.docx`) exploits sequential density-based sedimentation. First, tissues are homogenized carefully in a medium satisfying **three non-negotiable rules**: **(1) Ice-cold (`0–4 °C`)** to halt autodigestive hydrolytic enzymes leaked from ruptured vacuoles/lysosomes; **(2) Isotonic buffered sucrose (`Ψw_bath = Ψw_organelle`)** so organelles neither burst osmotically nor shrivel (`D2.3`); and **(3) pH-buffered (`~7.4`)** to guard enzyme active sites against acid denaturation. Filtering whole debris, spinning low (`~1,000 g`, `10 min`) sediments densest **nuclei**; medium spin (`~10,000 g`) pellets **mitochondria, chloroplasts, and lysosomes**; and ultracentrifugation (`~100,000 g+`) pellets fragmented rER/Golgi membrane **microsomes** before isolating tiny non-membranous **ribosomes**.'
      ),
      diag(BIO_V3_B22_ULTRACENTRIFUGE_STEPS),
      h2('2. Nuclear Pore Decoupling, Free vs rER Ribosomes & Golgi Trafficking (B2.2.3–B2.2.5 HL)'),
      p(
        'In prokaryotes (`A2.2`), ribosomes clamp straight onto nascent mRNA strands *while RNA polymerase is still transcribing DNA*—leaving zero window for transcript editing. By surrounding linear chromosomes with a **double nuclear envelope perforated by regulated nuclear pores (`B2.2.3`)**, eukaryotes force primary **pre-mRNA** transcripts to pause inside the nucleus for **5\' methyl-guanosine capping**, **3\' polyadenylation**, and **spliceosomal intron excision / alternative splicing (`TNNT2`, `D1.2`)** before nuclear export! Meanwhile, during open eukaryotic **mitosis (`D2.1`)**, phosphorylation disassembles nuclear lamins transiently so spindle microtubules reach condensed chromosomes, then dephosphorylation reassembles two intact daughter nuclear envelopes smoothly around telophase chromatin (`HL nuclear envelope cycling`).'
      ),
      p(
        'Downstream in the **endomembrane secretory pipeline (`B2.2.4–B2.2.5 HL`, `Allott pp. 235–238`)**, protein destination starts during translation initiation on **80S ribosomes** (`identically structured whether free or bound!`):'
      ),
      p(
        '- **Free Cytosolic Ribosomes:** Synthesize proteins destined to remain inside cytoplasm, nucleoplasm, mitochondria, chloroplasts, or peroxisomes (`e.g., glycolytic kinases, histones, DNA Pol`).\n- **rER-Bound Ribosomes:** When an emerging polypeptide bears an N-terminal hydrophobic **signal peptide**, a **Signal Recognition Particle (`SRP`)** pauses elongation and docks the ribosome onto a **rough ER (`rER`)** translocon channel (`transmembrane + secretory + lysosomal proteins`). Inside the oxidizing rER lumen, enzymes trim signal tags, add preliminary oligosaccharides, and fold **disulfide bonds** cleanly before budding **COPII transport vesicles** toward the **Golgi apparatus**.\n- **Golgi Cis-to-Trans Cisternal Maturation:** Vesicles fuse onto the receiving **`cis` Golgi face**, then progressive cisternal maturation (`Allott p. 238`) modifies glycan branches across medial stacks before the shipping **`trans` Golgi face** sorts cargo into constitutive/regulated **exocytic secretory vesicles** (`pancreatic amylase, insulin`), plasma-membrane protein replacements, or primary **lysosomes**.'
      ),
      callout(
        'examiner_warning',
        'Classroom Slide 21 Clarification: Phagolysosome & Clathrin Endocytosis Mechanics',
        '- **Slide 21 Correction (`B2.2 Organelles and Compartmentalization.pdf`):** When a white blood cell (`macrophage/neutrophil`) engulfs bacteria into a food **phagosome**, fusion with an acid-hydrolase-filled **primary lysosome** forms a functional **`phagolysosome` (`secondary lysosome`)** that digests microbes safely inside its sealed `pH ~4.8` compartment.\n- **Clathrin-Coated Vesicles (`B2.2.6 HL`):** During receptor-mediated endocytosis (`such as LDL-cholesterol uptake`), three-legged **clathrin triskelion** cytosolic proteins polymerize into soccer-ball-like **polygonal cages** forcing plasma membranes to dimple inward into clathrin-coated pits (`pinched off by dynamin`), then uncoat rapidly so bare vesicles fuse smoothly with early endosomes!'
      ),
      diag(BIO_V3_B22_COMPARTMENT_EXPLORER),
      h2('3. Bioenergetic Compartmentalization: Mitochondria & Chloroplasts (B2.2.4 HL)'),
      p(
        'Allott (`pp. 233–235`) spotlights how **double-membrane boundaries** in **mitochondria** and **chloroplasts** (`descended from engulfed bacteria, A2.2.10`) couple microscopic geometry straight onto **chemiosmotic thermodynamics (`C1.2–C1.3`)**. Inside mitochondria, a smooth outer membrane holds porins while the deeply folded inner membrane (**cristae**) drastically multiplies surface area housing Complex I–IV electron carriers and rotary **`FoF1 ATP synthase`** knobs. Crucially, the space squeezed between outer and inner membranes—the **intermembrane space**—has an extraordinarily tiny fluid volume, meaning pumping comparatively few `H⁺` ions immediately creates a steep **proton-motive force (`ΔpH + electrical potential`)** driving ATP output in adjacent matrix enzymes (`Krebs + link reaction`).'
      ),
      p(
        'Identical architectural logic repeats inside plant **chloroplasts (`B2.2.4`)**: a smooth double outer envelope encloses an enzyme-concentrated **stroma** (`hosting Rubisco, Calvin intermediates, circular cpDNA, and 70S ribosomes`) plus a third internal **thylakoid membrane system** stacked into coin-like **grana** (`connected by stromal lamellae`). Stacking dense **thylakoids** packs huge chlorophyll arrays (`PSII` and `PSI`) to catch photons, while an ultra-narrow enclosed **thylakoid lumen** lets water photolysis and `Cyt b6f` proton pumping build up to a `3.5 pH-unit` proton battery (`pH ~5 lumen vs pH ~8 stroma`) spinning stroma-facing **ATP synthase**.'
      ),
      diag(BIO_V3_B22_ORGANELLE_MATRIX),
      h2('4. Synthesis Across Units & Nature of Science (Allott p. 239)'),
      eq(
        '\\Delta \\tilde{\\mu}_{\\text{H}^+} = F\\Delta\\psi - 2.3RT\\,\\Delta\\text{pH} \\qquad \\text{Small Volume } V_{\\text{lumen}} \\implies \\text{Large } \\Delta[\\text{H}^+] = \\frac{\\Delta n_{\\text{H}^+}}{V_{\\text{lumen}}}',
        'Why narrow mitochondrial intermembrane spaces and thylakoid lumens maximize proton concentration gradients per mole H+ pumped.',
        [
          { symbol: '\\Delta \\text{pH}', meaning: 'Proton pH differential built rapidly across cristae or thylakoid membranes' },
          { symbol: 'V_{\\text{lumen}}', meaning: 'Tiny enclosed compartment volume amplifying molar H+ concentration change' },
        ]
      ),
      callout(
        'tok_nos',
        'NOS & TOK: Biochemical Fractionation vs Intact-Cell Confocal Reality',
        'Classic cell biology relied on destructive **homogenization + ultracentrifugation**, breaking dynamic ER tubes into artificial spherical "microsomes" (`historically risking misinterpreting intact ER ribbons as tiny spheres!`). Cross-checking biochemical fractions against **live GFP confocal microscopy (`A2.2.3`)** and Cryo-EM (`tomography`) reconciled static test-tube fractions with living continuous dynamic organellar networks.'
      ),
      p(
        'Following **secretory, lysosomal, and detoxifying cargo** molecule-by-molecule completes `B2.2 HL` mastery (`Allott pp. 235–239`; `B2.2 Organelles and Compartmentalization.pdf`). When a pancreatic β-cell or salivary acinar cell translates **preproinsulin** or digestive **amylase**, the first `16–24` hydrophobic amino acids emerging from an **80S ribosome** form a targeting **signal peptide**. Cytosolic **Signal Recognition Particle (`SRP`)** arrests translation temporarily and docks the entire ribosome–mRNA complex onto an rER **SRP-receptor + translocon pore**, threading the growing polypeptide straight into the oxidizing rER lumen (`where chaperones fold tertiary domains and disulfide isomerases seal Cys–Cys bridges!`). Budded **COPII vesicles** deliver proteins onto the **cis-Golgi**, where cisternal progression modifies N- and O-linked oligosaccharides systematically (`adding mannose-6-phosphate M6P tags onto acid hydrolases so clathrin-coated vesicles divert them strictly into endosomes/lysosomes rather than exocytosis!`), whereas digestive zymogens exit the **trans-Golgi** packed densely inside regulated secretory vesicles awaiting `Ca²⁺`-triggered fusion at the apical plasma membrane. Alongside lysosomes and phagolysosomes (`Slide 21`), single-membrane **peroxisomes** isolate toxic hydrogen peroxide (`H₂O₂`) generated during very-long-chain fatty acid β-oxidation, decomposing `2 H₂O₂ -> 2 H₂O + O₂` instantaneously via concentrated **catalase (`C1.1`)** before free radicals harm nuclear chromosomes. Meanwhile, **autophagy** wraps aged mitochondria inside double-membrane autophagosomes fusing with lysosomes to recycle damaged organelles (`preventing degenerative oxidative stress`), while **open mitotic division** relies on cyclin-dependent kinases phosphorylating nuclear **lamin** filaments so nuclear envelope vesicles disperse temporarily during prophase and reassemble cleanly at telophase (`B2.2 HL`). Notice finally that **equilibrium density-gradient (`isopycnic`) ultracentrifugation** layers homogenates atop continuous sucrose gradients (`10% -> 60%`), floating each organelle cleanly to its exact equilibrium buoyant density band for ultra-pure biochemical characterization!'
      ),
      h2('5. Exam Markscheme Lexicon (B2.2)'),
      terms([
        {
          term: 'Compartmentalization Advantages',
          definitionMarkdown: 'Concentrates substrates/enzymes locally, isolates incompatible `pH`/toxins (`lysosomes, peroxisomes`), speeds tiny-volume `H⁺` gradients, and separates splicing from translation.',
          markschemeKeyword: 'local enzyme conc + pH isolation + tiny-volume H+ gradient + splicing pause',
        },
        {
          term: 'Ultracentrifugation Buffer (3 Rules)',
          definitionMarkdown: 'Ice-cold (`stops hydrolases`), isotonic (`stops osmotic organelle rupture/shrinking`), and pH-buffered (`prevents active-site denaturation`).',
          markschemeKeyword: 'ice-cold (enzymes) + isotonic (osmosis) + buffered (pH denaturation)',
        },
        {
          term: 'Mitochondrion & Chloroplast Compartment Logic (HL)',
          definitionMarkdown: 'Folded cristae / stacked thylakoids pack huge ETC/PS surface area; tiny intermembrane space / thylakoid lumen yields steep `H⁺` gradient fast.',
          markschemeKeyword: 'large folded area + tiny volume for rapid H+ gradient',
        },
        {
          term: 'Free vs rER 80S Ribosomes (HL)',
          definitionMarkdown: 'Identical `80S` ribosomes switch destination via N-terminal **signal peptide + SRP**: free = cytosolic/organelle interior; rER-bound = secretory/lysosomal/membrane.',
          markschemeKeyword: 'signal peptide routes 80S ribosome onto rER for secretion/membranes',
        },
        {
          term: 'Clathrin-Coated Vesicle (HL)',
          definitionMarkdown: 'Triskelion clathrin proteins polymerize polygonal cages around budding plasma-membrane endocytosis pits, then uncoat before vesicle fusion.',
          markschemeKeyword: 'clathrin polygonal lattice bends membrane -> endocytosis -> uncoats',
        },
        {
          term: 'Phagolysosome (Slide 21)',
          definitionMarkdown: 'Secondary digestive vesicle formed when an acidic primary lysosome (`pH ~4.8`) fuses with an engulfed phagosome.',
          markschemeKeyword: 'lysosome + phagosome = phagolysosome (acid hydrolase digestion)',
        },
      ]),
    ],
  },

  // ==========================================================================
  // 12. TOPIC B2.3 — CELL SPECIALIZATION (BRAND NEW GUIDE)
  // ==========================================================================
  {
    topicCode: 'B2.3',
    title: 'Cell Specialization, SA:V Scaling, Stem Cell Potency & Adaptations (B2.3)',
    summary:
      'Brand-new SL+HL B2.3 Cell Specialization guide grounded in Allott & Mindorff (pp. 240–254): zygote-to-tissue morphogenesis, totipotent/pluripotent/multipotent stem niches, differential gene expression without DNA deletion, SA:V geometric collapse (Table 1 p. 244), alveolar Type I/II pneumocytes, HL cardiac vs skeletal syncytia, and sperm/ovum specialization.',
    sourceFileNames: ['2026 Bio 5HL Course Outline.docx', 'A2.2 Cell Structure Notes.pdf'],
    blocks: [
      callout(
        'guiding_questions',
        'Allott & Mindorff Chapter B2.3 SL+HL Guiding Questions (pp. 240–254)',
        '- How do genetically identical cells arising from one diploid zygote diverge irreversibly into radically specialized structures and functions?\n- How do physical surface-area-to-volume (`SA:V`) scaling laws restrict maximal cell size and drive specialized membrane folds in exchange organs?'
      ),
      callout(
        'syllabus_link',
        'IB Syllabus Alignment (B2.3.1–B2.3.10 SL + HL · Allott pp. 240–254 · New Core Synthesis)',
        '- **SL Core (`B2.3.1–B2.3.6`):** Unspecialized gamete-to-zygote lineage, **stem cell niches & potency spectrum (`totipotent`, `pluripotent`, `multipotent`)**, **differential gene expression** (`same genome, selective transcription`), cell size diversity (**Allott Table 1 p. 244**), and geometric **SA:V limits**.\n- **HL Extension (`B2.3.7–B2.3.10`):** Detailed structure–function adaptations of **alveolar Type I & Type II pneumocytes (`B2.3.7`)**, **striated skeletal muscle syncytia vs branched cardiac cardiomyocytes (`B2.3.8`)**, and **spermatozoon vs ovum gametes (`B2.3.9–10`)** + Spadefoot Toad DBQ (`p. 242`).'
      ),
      h2('1. Stem Cell Niches, Potency Spectrum & Differential Gene Expression (B2.3.1–B2.3.4)'),
      p(
        'Every sexually reproducing multicellular animal or plant begins as a single diploid **zygote** (`2n`) inheriting maternal cytoplasm plus combined chromosomes (`Allott pp. 240–243`). Through mitotic cleavage divisions (`D2.1`), cells proliferate and progressively commit along **morphogen concentration gradients** (`cell-to-cell chemical signals + local stem-cell niches`) into specialized adult fates (`~200+` human cell types). Crucially, **differentiation NEVER involves throwing away unneeded DNA** (`aside from rare terminal RBCs`): your skin keratinocytes, retinal photoreceptors, pancreatic β-cells, and motor neurons carry the **exact same ~6.4 billion nucleotide sequence**! Instead, cell specialization emerges via **differential gene expression** (`transcription factors`, `DNA methylation`, `histone acetylation` — `A1.2/D1.2`), turning tissue-specific enhancers ON (`e.g., insulin gene in β-cells; myosin in muscle`) while locking unrelated loci in silent compact heterochromatin.'
      ),
      p(
        '**Stem cells** divide asymmetrically to both **self-renew** and produce **committed progenitors** across three descending tiers of developmental **potency**:'
      ),
      p(
        '1. **Totipotent Stem Cells (`zygote through ~8-cell morula`):** Possess unlimited developmental plasticity to generate **EVERY embryonic cell type PLUS extraembryonic supportive tissues** (`placenta/chorion, umbilical membranes`), capable of yielding an entire fertile organism independently.\n2. **Pluripotent Stem Cells (`blastocyst inner cell mass` + induced `iPSCs`):** Generate **all three germ layers (`ectoderm, mesoderm, endoderm`)** making up the embryo proper (`>200` adult tissues), YET cannot form placental trophoblasts alone. Adult somatic fibroblasts reprogrammed with Yamanaka factors (`Oct4, Sox2, Klf4, c-Myc`) generate patient-matched **induced pluripotent stem cells (`iPSCs`)** free of embryonic destruction!\n3. **Multipotent Stem Cells (`adult tissue niches: bone marrow, hair follicle bulbs, intestinal crypt bases`):** Restricted to differentiating within one closely related tissue lineage—for instance, **hematopoietic stem cells (`HSCs`)** in red bone marrow continuously replenish short-lived RBCs, neutrophils, macrophages, and lymphocytes while never forming neurons or muscle (`except via artificial transdifferentiation`). Allott (`p. 242`) highlights **Mexican spadefoot toad (*Spea multiplicata*)** developmental plasticity DBQ data showing environmental cues (`shrimp diet vs pond detritus`) rapidly pivot identical tadpole genomes into distinct **carnivore vs omnivore** morphs.'
      ),
      diag(BIO_V3_B23_POTENCY_MATRIX),
      h2('2. Surface-Area-to-Volume Scaling (SA:V) & Architectural Compensations (B2.3.5–B2.3.6)'),
      p(
        'Why are adult blue whales built out of `~10¹⁶` tiny `10–30 µm` cells rather than one single elephant-sized cell (`Allott Table 1 p. 244 & pp. 245–247`)? Geometry dictates metabolic survival! As a growing cell doubles in linear radius or width (`L -> 2L`), **plasma-membrane surface area (`SA = 6L²` or `4πr²`)** rises by the square (`2² = 4×`), whereas **cytoplasmic volume (`V = L³` or `4/3 πr³`)** explodes by the cube (`2³ = 8×`). Because cellular ATP consumption, oxygen demand, nutrient uptake, toxic waste (`CO₂, urea`), and metabolic heat production scale proportionally with **volume (`L³`)** while transport exchange crosses only **surface area (`L²`)**, growing larger shrinks **`SA:V = 6/L` (`or 3/r`)** until central organelles suffocate, starve, or overheat!'
      ),
      p(
        'To stay viable above microscopic radii, specialized exchange cells exploit **four clever geometric cheats** overcoming spherical/cubic `SA:V` limits (`Allott p. 247`): **(1) Flattening thin** (`Type I pneumocytes`, `biconcave mammalian erythrocytes` squeezing surface area near every haemoglobin molecule); **(2) Stretching long and slender** (`motor neuron axons` reaching `1 m` while keeping radius tiny `1–10 µm`); **(3) Apical membrane folding** (`intestinal epithelial microvilli` increasing absorptive membrane `~7–20×`, `root hair projections`); and **(4) Cytoplasmic central vacuoles** (`mature plant mesophyll presses active cytoplasm into a thin peripheral shell around a metabolically inert fluid vacuole`). When somatic cells grow too large, division triggers (`D2.1`) reset `SA:V` upward cleanly.'
      ),
      eq(
        '\\frac{\\text{SA}}{V}_{\\text{cube}} = \\frac{6L^2}{L^3} = \\frac{6}{L} \\qquad \\frac{\\text{SA}}{V}_{\\text{sphere}} = \\frac{4\\pi r^2}{\\frac{4}{3}\\pi r^3} = \\frac{3}{r} \\qquad \\text{Fick Diffusion Flux } \\propto \\frac{\\text{SA} \\cdot \\Delta C}{\\Delta x}',
        'Inverse linear SA:V scaling law forcing cellular microscopic limits and explaining structural adaptations (maximizing SA while shrinking diffusion distance Δx).',
        [
          { symbol: 'L, r', meaning: 'Characteristic cell edge length or radius (µm)' },
          { symbol: '\\Delta x', meaning: 'Trans-barrier diffusion thickness (minimized to <0.5 µm across alveoli)' },
        ]
      ),
      diag(BIO_V3_B23_SAV_WORKED),
      h2('3. HL Specialized Cell Case Studies: Pneumocytes, Muscle & Gametes (B2.3.7–B2.3.10 HL)'),
      p(
        'Higher Level Biology connects molecular structure straight onto mammalian physiology using three showcase tissues (`Allott pp. 248–253`):'
      ),
      p(
        '- **Alveolar Type I vs Type II Pneumocytes (`B2.3.7`):** Alveoli contain `~95%` surface coverage by paper-thin squamous **Type I pneumocytes (`~0.15 µm` thick)** fused intimately to capillary endothelium (`total diffusion path < 0.5 µm`), accelerating Fick O₂/CO₂ exchange dramatically. Interspersed cuboidal **Type II pneumocytes** (`rich in rER, Golgi, and phospholipid-rich lamellar bodies`) continuously secrete amphipathic **pulmonary surfactant** onto the moisture layer (`disrupting water H-bond surface tension, A1.1` so small wet alveoli never collapse during expiration; lack of Type II surfactant causes **Infant Respiratory Distress Syndrome** in premature newborns!).\n- **Striated Skeletal vs Branched Cardiac Muscle (`B2.3.8`):** **Skeletal fibres** develop via embryonic myoblast fusion into giant unbranched **multinucleate syncytia** packed wall-to-wall with linear actin–myosin sarcomeres (`peripheral nuclei`, dense glycogen + mitochondria) for voluntary rapid contraction. **Cardiac myocytes** stay shorter, branched, and **uninucleate**, packed densely with mitochondria for fatigue-free aerobic endurance and wired end-to-end by **intercalated discs** combining mechanical **desmosomes** (`preventing tearing at peak arterial systole`) and **gap junctions** (`letting Na⁺/Ca²⁺ depolarization waves sweep instantaneously across ventricles`).\n- **Spermatozoon vs Secondary Oocyte (`B2.3.9–10`):** **Sperm (`~50 µm`)** eliminate redundant cytoplasm (`streamlined hydrodynamic torpedo`), pack compact **haploid DNA** behind a hydrolytic enzyme-loaded **acrosome** (`exocytosing proteases/hyaluronidase to breach corona radiata & zona pellucida`), wrap dense **helical mitochondria** around the midpiece fueling dynein ATPases, and propel a **`9+2` microtubule flagellum**. Contrastingly, an immotile **ovum (`~120 µm`)** accumulates enormous **yolk lipid/protein cytosol**, `~100,000+` maternal mitochondria (`mtDNA strictly maternally inherited!`), an extracellular protective glycoprotein **zona pellucida**, and peripheral secretory **cortical granules** whose exocytosis chemically cross-links the zona pellucida immediately after first sperm fusion—preventing lethal triploid **polyspermy**.'
      ),
      diag(BIO_V3_B23_SPECIALIZED_CELLS_EXPLORER),
      h2('4. Therapeutic Stem Cell Ethics & Nature of Science (Allott pp. 242–243)'),
      callout(
        'tok_nos',
        'NOS & Ethics: Stargardt Disease, Leukemia Bone Marrow vs Embryo Destruction',
        'Balancing therapeutic promise against ethical duty governs regenerative medicine (`Allott p. 243`): **multipotent adult bone marrow HSC transplants** save leukemia patients cleanly after radiation without harvesting human embryos (`though HLA tissue matching is vital`), whereas **embryonic stem cells (`ESCs`)** differentiated into retinal pigment epithelium restore vision in **Stargardt macular dystrophy** yet destroy human blastocysts—an ethical dilemma increasingly bypassed via **iPSC somatic reprogramming** (`Shinya Yamanaka, 2006`) unless oncogene reactivation triggers teratomas!'
      ),
      p(
        'Integrating `B2.3` completes Theme B\'s bottom-up scale climb: covalent carbon monomers (`B1.1–B1.2`) self-assemble amphipathic membranes (`B2.1`) organizing eukaryotic organelles (`B2.2`) that differentiate asymmetrically and obey geometric `SA:V` limits (`B2.3`)—setting the exact physical stage for metabolic energy conversion in Theme C!'
      ),
      p(
        'Reviewing **Allott\'s Empirical Datasets (`Table 1 p. 244`, `Spadefoot Toad DBQ p. 242`)** cements `B2.3` across quantitative and evolutionary questions. Allott Table 1 contrasts striking physiological cell diameters spanning five orders of magnitude: tiny bacteria/erythrocytes (`*Mycoplasma* ~0.3 µm`, human RBC biconcave discs `~7.5 µm` engineered to flex singly through `5 µm` alveolar capillaries with maximal SA:V and zero nuclear bulk), typical somatic liver hepatocytes (`~20 µm`), giant human **secondary oocytes (`~120 µm`)** bloated deliberately with yolk reserves (`sacrificing raw SA:V while low pre-cleavage metabolic rate needs little O₂`), and meter-long **motor neuron axons** (`~10 µm` wide yet `1,000,000 µm` long—maintaining high cylindrical `SA:V ≈ 2/r` along the entire cable!). Plant specialization runs identically down to root tips and vascular sap: **root hair cells** project long delicate tubular extensions lacking cuticles cleanly into soil capillaries (`multiplying root epidermal SA >10x for passive osmosis while mitochondria power H⁺-ATPase mineral uptake`), whereas **phloem sieve-tube elements** sacrifice nuclei and ribosomes to streamline sucrose pressure flow while adjacent **companion cells** supply ATP and protein turnover continuously across **plasmodesmata**. Meanwhile, in the **Mexican Spadefoot Toad (*Spea multiplicata*) developmental plasticity DBQ (`Allott p. 242`)**, tadpoles exposed in ephemeral desert puddles to protein-rich fairy shrimp rapidly reprogram craniofacial stem-cell transcription factor expression—switching within days from small-jawed, long-gut **detritivore omnivores** into broad-headed, serrated-beak, short-gut **cannibalistic carnivores** eating siblings before ponds evaporate! No genomic mutation occurs; environmental hormone/dietary signals redirect stem-cell potency niches (`epigenetic differential gene expression`) cleanly in real time.'
      ),
      h2('5. Exam Markscheme Lexicon (B2.3)'),
      terms([
        {
          term: 'Differential Gene Expression',
          definitionMarkdown: 'All specialized cells keep identical diploid genomes; tissue fate results from transcription factors & epigenetics switching specific genes ON or OFF.',
          markschemeKeyword: 'identical genome retained · selective transcription activation/silencing',
        },
        {
          term: 'Totipotent vs Pluripotent vs Multipotent',
          definitionMarkdown: 'Totipotent (`zygote/morula`) forms embryo + placenta; Pluripotent (`blastocyst ICM / iPSC`) forms all embryo tissues except placenta; Multipotent (`adult marrow`) forms one tissue family.',
          markschemeKeyword: 'all tissues+placenta vs embryo-only vs single lineage',
        },
        {
          term: 'SA:V Geometric Constraint',
          definitionMarkdown: 'Volume (`L³` = metabolic demand/waste) grows faster than Surface Area (`L²` = membrane exchange), capping cell size and driving division/microvilli.',
          markschemeKeyword: 'volume L³ outpaces SA L² -> insufficient uptake/heat-waste export',
        },
        {
          term: 'Type I vs Type II Pneumocytes (HL)',
          definitionMarkdown: 'Type I (`~0.15 µm` flat epithelium) shortens gas diffusion distance; Type II (`cuboidal, lamellar bodies`) secretes surfactant lowering alveolar surface tension.',
          markschemeKeyword: 'Type I short diffusion path · Type II surfactant stops collapse',
        },
        {
          term: 'Cardiac Intercalated Discs (HL)',
          definitionMarkdown: 'Junctions linking branched cardiomyocytes with **desmosomes** (mechanical strength) and **gap junctions** (rapid ion depolarization sync).',
          markschemeKeyword: 'branched cells + desmosomes (strength) + gap junctions (rapid sync)',
        },
        {
          term: 'Sperm Acrosome vs Egg Cortical Granules (HL)',
          definitionMarkdown: 'Sperm acrosome digests zona pellucida (`spiral mitochondria fuel flagellum`); egg cortical granules harden zona pellucida blocking polyspermy.',
          markschemeKeyword: 'acrosome digests coat · cortical reaction prevents polyspermy',
        },
      ]),
    ],
  },
];
