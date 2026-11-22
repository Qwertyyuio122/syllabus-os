import type { StudyNoteBlock, PlayableDiagramSpec } from '@/types/diagrams';
import type { ClassroomSeedNote } from '../types';
import {
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

export const BIOLOGY_HL_NOTES_CD: ClassroomSeedNote[] = [
  // ==========================================================================
  // 13. TOPIC C1.1 — ENZYMES & METABOLISM (NEW GUIDE)
  // ==========================================================================
  {
    topicCode: 'C1.1',
    title: 'Enzymes, Activation Energy, Kinetics & HL Metabolic Regulation (C1.1)',
    summary:
      'Complete SL+HL C1.1 Enzymes & Metabolism guide grounded in Allott & Mindorff (pp. 346–360): metabolic pathways, induced-fit transition-state catalysis, thermal/pH/substrate saturation (Vmax, Km), adenylate kinase thermostability DBQ (p. 351), reversible vs non-competitive inhibition, threonine-to-isoleucine allosteric feedback, statins, and irreversible penicillin suicide inhibition.',
    sourceFileNames: ['2026 Bio 5HL Course Outline.docx'],
    blocks: [
      callout(
        'guiding_questions',
        'Allott & Mindorff Chapter C1.1 SL+HL Guiding Questions (pp. 346–360)',
        '- How do biological catalysts accelerate thermodynamically slow cellular reactions by orders of magnitude without altering equilibrium yields?\n- How do feedback loops, competitive drugs (`statins`), and irreversible antibiotics (`penicillin`) modulate enzymatic metabolic networks cleanly?'
      ),
      callout(
        'syllabus_link',
        'IB Syllabus Alignment (C1.1.1–C1.1.17 SL + HL · Allott pp. 346–360)',
        '- **SL Core (`C1.1.1–C1.1.10`):** Metabolism as integrated pathways (`anabolism` condensation vs `catabolism` hydrolysis), activation energy (`Ea`) lowering via **induced-fit**, intracellular vs extracellular localization, exothermic heat release (`brown fat/homeothermy`), and **temperature / pH / `[S]` saturation kinetics**.\n- **HL Extension (`C1.1.11–C1.1.17`):** Multi-step pathway regulation (`chains & cycles`), **competitive vs non-competitive inhibition (`Km` vs `Vmax`)**, **allosteric end-product feedback inhibition (`Threonine -> Isoleucine`)**, **statins**, and **mechanism-based irreversible inhibition (`Penicillin` on bacterial DD-transpeptidase)** + Adenylate Kinase DBQ (`p. 351`).'
      ),
      h2('1. Integrated Metabolism & Induced-Fit Catalysis (C1.1.1–C1.1.6)'),
      p(
        'Living cytoplasm does not resemble an isolated test tube running one reaction at a time; instead, **metabolism** comprises thousands of enzyme-catalyzed sequences arranged in linear **chains** (`glycolysis, isoleucine synthesis`) and regenerating **cycles** (`Krebs, Calvin cycle`, `C1.1.1 & C1.1.11`, `Allott pp. 346–349`). **Anabolic reactions** synthesize complex macromolecules from small precursors using **condensation** and ATP input (`glycogen assembly, polypeptide translation, photosynthesis`), whereas **catabolic reactions** hydrolyze or oxidize polymers down into monomers (`digestion, cellular respiration`) releasing ATP and thermal energy (`C1.1.9`: why resting humans constantly emit body heat and germinating compost heaps warm up!). Note some enzymes reside inside compartments (`intracellular`: cytoplasmic hexokinase, peroxisomal catalase, matrix Krebs enzymes) while others are exocytosed outward (`extracellular`: salivary amylase, gastric pepsin, pancreatic trypsin, fungal decomposers).'
      ),
      p(
        'Why do cellular reactions stall indefinitely without enzymes despite negative net free-energy change (`ΔG < 0`)? Reactants must first reach an unstable high-energy geometry—the **activation energy barrier (`Ea`)** (`Allott pp. 348–350`). Old 1890s **"lock-and-key"** analogies pictured rigid active sites matching substrates passively. Modern crystallography and Cryo-EM replace that with **Koshland\'s Induced-Fit Model (`C1.1.3`)**: initially the empty enzyme active site is *only partially complementary* to substrate. Upon weak R-group binding, substrate polarity induces conformational flexing across the entire globular enzyme (`requiring structural flexibility of polar vs hydrophobic R-groups, B1.2!`), straining substrate covalent bonds directly toward the **transition state** (`lowering Ea sharply without changing net ΔG between reactants and products`). Once catalysis completes, products have lower affinity and diffuse free, resetting the enzyme unchanged.'
      ),
      callout(
        'definition',
        'Why Substrate Binding Is Sensitive & Specific: Kinetic Energy + Denaturation Boundary',
        '- **Low -> Optimum Temperature:** Warming boosts average molecular **kinetic energy**, raising random collision speed and the fraction of collisions exceeding `Ea` (`Q10 ≈ 2` per `10 °C`), up to peak velocity.\n- **Above Optimum Temperature / Extreme pH:** Excessive vibrational energy snaps weak hydrogen bonds, hydrophobic packing, and R-group ionic salt bridges stabilizing tertiary (`3°`) shape (`B1.2`), warping active-site geometry (**irreversible denaturation**). Notice every enzyme\'s pH optimum mirrors its native niche: gastric **pepsin (`~pH 2.0`)**, salivary amylase (`~pH 7.0`), pancreatic trypsin (`~pH 8.0`).'
      ),
      diag(BIO_V3_C11_ENZYME_KINETICS_SIM),
      h2('2. Michaelis–Menten Saturation (`Vmax, Km`) & Competitive vs Non-Competitive Drugs (C1.1.7–C1.1.13 HL)'),
      p(
        'Holding enzyme concentration fixed (`[E]_total = constant`) and titrating substrate concentration (`[S]`) yields a rectangular hyperbola (`Allott pp. 351–354`). At low `[S]`, active sites sit mostly unoccupied so initial velocity (`v₀`) rises steeply in linear proportion to substrate collisions. At saturating high `[S]`, virtually `100%` of enzyme molecules remain bound continuously as `ES` complexes; rate plateaus cleanly at **`Vmax`**, strictly limited by enzymatic turnover speed (`only adding more enzyme shifts Vmax higher!`). Notice the substrate concentration achieving exactly half maximal velocity (`½ Vmax`) defines the **Michaelis constant (`Km`)**—an inverse index of enzyme–substrate binding affinity (`low Km = tight high-affinity binding at minimal [S]`).'
      ),
      p(
        'Two reversible inhibitor classes reshape Michaelis–Menten kinetics differently (`C1.1.12–C1.1.13 HL`, `Allott pp. 354–356`):'
      ),
      p(
        '- **Competitive Inhibitors (`same molecular geometry as substrate`, e.g., statins vs HMG-CoA; ethanol vs toxic methanol/ethylene glycol; malonate vs succinate):** Compete reversibly for the **active site** (`never binding simultaneously with substrate`). Because flooding high `[S]` statistically outcompetes inhibitor molecules, true **`Vmax` remains UNCHANGED**, while apparent **`Km` INCREASES** (`more [S] needed to reach ½ Vmax`). Statin drugs exploit this safely to competitively block liver **HMG-CoA reductase**, lowering endogenous cholesterol synthesis!\n- **Non-Competitive Inhibitors (`bind a separate allosteric site`):** Alter `3°` protein conformation across the active site even when substrate is bound (`reducing functional catalytic turnover pool [E]_active`). Adding excess `[S]` CANNOT kick non-competitive inhibitors out of their distant pocket, so **`Vmax` DROPS PERMANENTLY**, whereas unaffected enzyme copies retain normal substrate affinity—leaving **`Km` UNCHANGED** (`heavy-metal Pb²⁺/Hg²⁺ poisoning or allosteric effectors`).'
      ),
      diag(BIO_V3_C11_RATE_WORKED),
      h2('3. HL Allosteric End-Product Feedback vs Penicillin Irreversible Inactivation (C1.1.14–C1.1.17 HL)'),
      p(
        'Cells conserve ATP and amino acids cleanly through **end-product negative feedback (`allosteric inhibition`, `Allott pp. 356–358`)**. In the bacterial and plant pathway converting **L-threonine -> L-isoleucine** across five sequential enzymes (`E1–E5`), rising free **isoleucine** concentrations bind reversibly onto a dedicated **allosteric regulatory site** on **Enzyme 1 (`threonine deaminase`)**, far from its active site. Stabilizing Enzyme 1\'s inactive tense (`T`) conformation throttles step 1 immediately so the entire 5-step pathway shuts down before building toxic intermediates. Whenever protein synthesis uses up cellular isoleucine, bound effector releases and pathway flux restarts smoothly.'
      ),
      callout(
        'examiner_warning',
        'HL Contrast: Reversible Competitive/Allosteric Control vs Penicillin Mechanism-Based Inhibition (pp. 358–359)',
        'Contrast reversible regulation sharply against **penicillin (`mechanism-based / suicide irreversible inhibition`, `C1.1.17`)**! Gram-positive bacteria crosslink peptidoglycan cell walls via **DD-transpeptidase** enzymes. Penicillin\'s reactive four-membered **β-lactam ring** mimics the natural `D-Ala–D-Ala` peptide substrate tightly (`entering the active site`), where transpeptidase nucleophilic serine attacks and opens the ring—forming an **irreversible covalent ester bond** permanently plugging the active site! Unable to crosslink dividing cell walls, growing bacteria rupture from internal osmotic turgor (`note antibiotic resistance evolves via bacterial β-lactamase enzymes hydrolyzing the lactam ring or mutated transpeptidases lowering penicillin affinity!`).'
      ),
      diag(BIO_V3_C11_REGULATION_STEPS),
      h2('4. Thermophilic Adenylate Kinase DBQ, NOS & Rate Slope Best Practices (Allott p. 351)'),
      eq(
        'v_0 = \\left.\\frac{d[\\text{P}]}{dt}\\right|_{t \\to 0} \\qquad v_0 = \\frac{V_{\\max}[S]}{K_m + [S]} \\qquad Q_{10} = \\frac{\\text{Rate}_{(T + 10\\,^{\\circ}\\text{C})}}{\\text{Rate}_T}',
        'Initial rate v0 measured at the t -> 0 tangent before substrate depletion, alongside Michaelis–Menten saturation kinetics.',
        [
          { symbol: 'V_{\\max}', meaning: 'Theoretical plateau turnover rate when all enzyme active sites are saturated' },
          { symbol: 'K_m', meaning: 'Substrate concentration yielding 0.5 Vmax (inverse measure of enzyme affinity)' },
        ]
      ),
      callout(
        'tok_nos',
        'NOS & TOK: Adenylate Kinase Stability DBQ (Allott p. 351) & Evolution of Specificity',
        'Allott (`p. 351 DBQ`) compares homologous **adenylate kinase** variants across habitats: psychrophilic *Bacillus globisporus* denatures near `~35 °C` (`loose flexible loops keep low-T catalysis fast`), human muscle variants peak at `~37 °C`, while extreme archaeal thermophiles stay stable past `75 °C` (`rich in internal ionic salt bridges and hydrophobic cores`). Notice the **evolutionary trade-off**: hyper-rigidity blocks denaturation in boiling vents yet lowers low-temperature catalytic turnover!'
      ),
      p(
        'Whenever collecting Paper 1B or IA catalase/amylase datasets, keep one cardinal rule in mind: measure **initial velocity (`v₀`) strictly across the linear `t = 0` burst** (`e.g., first 10–15 s` of `O₂` evolution or `I₂/starch` absorbance drop) before `[S]` depletion, product inhibition, or enzyme thermal inactivation curve the progress slope downward (`otherwise apparent rates systematically underestimate true kinetics`).'
      ),
      p(
        'Three vivid physiological and industrial applications unify `C1.1` enzymology with clinical pharmacology and biotechnology (`Allott pp. 350–360`). First, regarding **exothermic metabolic heat generation (`C1.1.9`)**, because enzymatic catalysis only harvests partial chemical energy into `ATP` (`~34–40%` efficiency in `C1.2`), remaining bond enthalpy radiates continuously as thermal energy—explaining why actively contracting muscle warms core blood, fermenting compost reaches `65 °C`, and endothermic birds/mammals rely on high resting metabolic enzymes to sustain `37–41 °C` kinetic optima (`while uncoupled UCP1 heat proteins warm hibernators`). Second, **competitive inhibition rescues emergency poisoning victims (`C1.1.12 HL`)**: when patients accidentally ingest toxic methanol (`converted by liver alcohol dehydrogenase ADH into blinding formaldehyde/formate`) or antifreeze ethylene glycol (`converted into renal-failure oxalic acid`), physicians infuse sterile intravenous **ethanol** (`high-affinity competitive substrate occupying ADH active sites preferentially`) until kidneys excrete unchanged toxins harmlessly! Third, in **lactose-free dairy biotechnology**, yeast-derived **lactase (`β-galactosidase`)** is immobilized covalently onto alginate beads inside packed flow columns so milk lactose (`glucose–galactose`) hydrolyzes cleanly without enzyme contamination (`boosting thermal stability so enzymes run continuously across weeks before repacking!`), producing sweeter galactose/glucose milk safe for lactose-intolerant adults—while reminding hospital microbiologists why heavy overuse of **penicillin (`C1.1.17`)** selects strongly for *Staphylococcus* strains expressing **β-lactamase (`penicillinase`)** plasmids that hydrolyze antibiotics before transpeptidase inactivation occurs. Finally, remember protonation chemistry at the active site: acidic gastric **pepsin (`pH 2.0`)** relies on un-ionized carboxylates while intestinal **trypsin (`pH 8.0`)** requires deprotonated catalytic histidines—shifting pH just `2–3` units disrupts substrate-binding charges (`reversible first, then permanent tertiary collapse`).'
      ),
      h2('5. Exam Markscheme Lexicon (C1.1)'),
      terms([
        {
          term: 'Induced-Fit Transition-State Stabilization',
          definitionMarkdown: 'Substrate binding induces conformational enzyme flexing that strains substrate bonds toward transition state, lowering activation energy (`Ea`) without changing `ΔG`.',
          markschemeKeyword: 'conformational change lowers Ea · ΔG unchanged',
        },
        {
          term: 'Initial Rate (v₀)',
          definitionMarkdown: 'Tangent gradient (`Δ[P]/Δt` or `-Δ[S]/Δt`) right at `t = 0` when `[S]` equals nominal added concentration and thermal denaturation/depletion have not started.',
          markschemeKeyword: 'initial linear gradient at t=0 before substrate exhaustion',
        },
        {
          term: 'Competitive Inhibition Kinetics (HL)',
          definitionMarkdown: 'Inhibitor matches active-site geometry; overcome at high `[S]` so **`Vmax` stays unchanged** while **apparent `Km` increases** (`e.g., statins`).',
          markschemeKeyword: 'active site binding · Vmax preserved · apparent Km rises',
        },
        {
          term: 'Non-Competitive Inhibition Kinetics (HL)',
          definitionMarkdown: 'Binds distinct allosteric site distorting catalytic shape; adding excess `[S]` cannot restore rate so **`Vmax` decreases** while **`Km` stays unchanged**.',
          markschemeKeyword: 'allosteric site · Vmax decreases · Km unchanged',
        },
        {
          term: 'Allosteric End-Product Feedback (HL)',
          definitionMarkdown: 'Pathway end-product (`isoleucine`) binds reversibly to an allosteric pocket on the first committed enzyme (`threonine deaminase`), halting wasteful buildup.',
          markschemeKeyword: 'end-product binds Enzyme 1 allosteric site reversibly',
        },
        {
          term: 'Mechanism-Based Irreversible Inhibition (HL)',
          definitionMarkdown: 'Penicillin covalently acylates active-site serine of bacterial **DD-transpeptidase**, permanently blocking peptidoglycan cell-wall crosslinking -> osmotic lysis.',
          markschemeKeyword: 'penicillin irreversible covalent bond -> blocks peptidoglycan wall -> lysis',
        },
      ]),
    ],
  },

  // ==========================================================================
  // 14. TOPIC C1.2 — CELL RESPIRATION (NEW GUIDE)
  // ==========================================================================
  {
    topicCode: 'C1.2',
    title: 'Cell Respiration: Glycolysis, Krebs, Cristae ETC & Chemiosmosis (C1.2)',
    summary:
      'Complete SL+HL C1.2 Cell Respiration treatise grounded in Allott & Mindorff (pp. 361–383): ATP/ADP energetics, aerobic vs anaerobic lactate/ethanol fermentation (CO2 trap respirometry), HL lipid vs carbohydrate acetyl-CoA entry, 4 glycolysis stages, Link reaction, Krebs cycle, cristae Complexes I–IV chemiosmosis (2.5/1.5 ATP -> 30–32 net ATP), and Kangaroo Rat / Shaker Muscle DBQs.',
    sourceFileNames: ['2026 Bio 5HL Course Outline.docx'],
    blocks: [
      callout(
        'guiding_questions',
        'Allott & Mindorff Chapter C1.2 SL+HL Guiding Questions (pp. 361–383)',
        '- Why must every active living cell hydrolyze and regenerate `ATP` continuously rather than consuming glucose in one explosive combustion reaction?\n- How do cytoplasmic glycolysis and mitochondrial cristae proton gradients partition redox energy step-by-step from glucose and fatty acids into `30–32 ATP`?'
      ),
      callout(
        'syllabus_link',
        'IB Syllabus Alignment (C1.2.1–C1.2.15 SL + HL · Allott pp. 361–383)',
        '- **SL Core (`C1.2.1–C1.2.6`):** `ATP` as immediate cellular energy currency (`active transport, anabolism, muscle actin-myosin`), cell respiration as controlled enzymatic oxidation, **anaerobic vs aerobic pathways** (`mammalian lactate with ZERO CO2` vs `yeast ethanol + CO2`), and **respirometer KOH CO2 absorption**.\n- **HL Extension (`C1.2.7–C1.2.15`):** **4 phases of cytoplasmic glycolysis**, **Link reaction** + **lipid β-oxidation acetyl-CoA entry**, **Krebs Cycle (`2 turns/glucose -> 6 NADH, 2 FADH2, 2 ATP, 4 CO2`)**, **cristae ETC (`Complexes I–IV`)**, **terminal `O2` reduction**, **chemiosmotic rotary ATP synthase (`2.5 ATP/NADH`, `1.5 ATP/FADH2` -> `~30–32 net ATP`)**, and **Kangaroo Rat & Rattlesnake Shaker DBQs (`pp. 378–383`)**.'
      ),
      h2('1. ATP/ADP Energy Currency & Anaerobic NAD⁺ Regeneration (C1.2.1–C1.2.6)'),
      p(
        'Cells cannot plug dietary glucose or triglycerides directly into `Na⁺/K⁺-ATPase` pumps or myosin cross-bridges: completely oxidizing `1 mol` of glucose releases `2,870 kJ`—an explosion that would denature enzymes immediately (`Allott pp. 361–363`). Instead, **cellular respiration** breaks C–C and C–H bonds gently across dozens of controlled enzymatic steps, trapping discrete `~30.5 kJ mol⁻¹` packets in the terminal phosphoanhydride bond of **ATP (`adenosine triphosphate`)**. Because ATP cannot pass freely across plasma membranes (`always synthesized locally inside each cell!`) and human resting turnover cycles an astonishing **`~40–65 kg` of ATP daily** (`recycling each ADP + Pi thousands of times via cristae phosphorylation`), any toxin blocking ATP regeneration (`cyanide, oligomycin, asphyxiation`) causes organ collapse within minutes.'
      ),
      p(
        'During hypoxia or intense sprinting (`Allott pp. 365–367`), cells still extract a quick burst of **`+2 net ATP` per glucose** purely from cytoplasmic **glycolysis**—provided they solve one chemical bottleneck: glycolysis requires oxidized **`NAD⁺`** to accept electrons from triose phosphate. Without oxygen clearing `NADH` via mitochondrial ETC, **`NADH` piles up and `NAD⁺` runs dry**, halting glycolysis completely! Anaerobic **fermentation** exists solely to dump electrons from `NADH` onto pyruvate (`or ethanal`) to **regenerate free `NAD⁺`**, releasing ZERO extra ATP:'
      ),
      p(
        '- **Mammalian Skeletal Muscle / Erythrocytes (Lactate Fermentation):** Lactate dehydrogenase transfers hydrogen directly from `NADH + H⁺` onto `3C pyruvate`, yielding `3C lactate` (`lactic acid`). Notice **ZERO `CO₂` is produced (`1 × 3C -> 1 × 3C`)!** Oxygen later repays excess **oxygen debt (`EPOC`)** in liver hepatocytes, oxidizing ~20% of lactate cleanly and converting ~80% back into pyruvate/glucose.\n- **Yeast (*Saccharomyces*) & Flooded Plant Roots (Alcoholic Fermentation):** Pyruvate decarboxylase cleaves **`CO₂`** off `3C pyruvate -> 2C ethanal`, then alcohol dehydrogenase uses `NADH` to reduce ethanal -> **`2C ethanol`**. Thus yeast fermentation produces CO₂ bubbles raising bread dough and fermenting ethanol—whereas **mammalian anaerobic muscle emits zero CO₂**!'
      ),
      callout(
        'examiner_warning',
        'Exam Trap: Lactate Produces ZERO CO₂ & Respirometer KOH Trap Setup',
        '- **Trap 1:** Never write *"anaerobic respiration in human muscles releases CO₂"*—human lactate fermentation releases **ZERO CO₂**! Only yeast/plant alcoholic fermentation decarboxylates pyruvate into `ethanal + CO₂`.\n- **Trap 2 (`C1.2.6`):** In a germinating-pea or woodlouse **respirometer**, potassium hydroxide (`KOH` or soda lime) MUST sit wrapped in filter paper **absorbing every mole of respired CO₂** (`KOH + CO₂ -> KHCO₃`). Otherwise, equal `O₂` consumed (`6 mol`) and `CO₂` emitted (`6 mol`, `RQ = 1.0`) would cancel volume change cleanly (`ΔV = 0`) so the manometer dye drop stays immobile!'
      ),
      diag(BIO_V3_C12_RESPIRATION_SIM),
      h2('2. Glycolysis, Link Reaction, Lipid β-Oxidation & Krebs Cycle (C1.2.7–C1.2.10 HL)'),
      p(
        'Higher Level biochemistry resolves aerobic oxidation across four spatially compartmentalized stages (`Allott pp. 368–374`). **Stage 1 (`Cytosol`) — Glycolysis (`4` distinct chemical steps):** **(1) Phosphorylation** invests `2 ATP` onto `6C glucose -> hexose-1,6-bisphosphate` (`destabilizing ring symmetry`); **(2) Lysis** splits `6C` symmetrically into **two `3C triose phosphate (TP)`** sugars; **(3) Oxidation** transfers hydride electrons (`2 H⁻`) from each TP onto `NAD⁺` -> **`2 NADH` (`while adding inorganic Pi`)**; and **(4) Substrate-level ATP payoff** transfers four phosphates onto ADP (`4 gross ATP − 2 invested = net +2 ATP`), yielding **two `3C pyruvate`** molecules.'
      ),
      p(
        'Whenever `O₂` is present, pyruvate enters the mitochondrial matrix (`B2.2`) via active symport for **Stage 2 — Link Reaction** (`doubled per glucose`, `Allott p. 371`): pyruvate dehydrogenase removes **`1 CO₂` (`decarboxylation`)**, oxidizes the remaining `2C acetyl` onto **`1 NADH + H⁺`**, and couples acetate onto Coenzyme A -> **`Acetyl-CoA (2C)`**. Crucially (`C1.2.7 HL`), **triglyceride fatty acids** bypass cytosolic glycolysis completely! Lipases cleave fats to fatty acyl chains shuttled into the mitochondrial matrix where spiral **β-oxidation** clips pairs of carbons sequentially directly into **`Acetyl-CoA + NADH + FADH₂`**, feeding straight into Krebs and cristae—explaining why **lipids supply `~2×` ATP per gram compared with carbohydrates YET yield ZERO ATP anaerobically** (`unlike glucose, β-oxidation makes zero cytoplasmic substrate ATP and depends wholly on O₂-cleared NADH/FADH₂!`).'
      ),
      p(
        '**Stage 3 — Krebs Citric Acid Cycle (`Matrix · 2 turns per glucose`):** `2C Acetyl-CoA` condenses with `4C oxaloacetate` forming `6C citrate` (`releasing CoA-SH`). Across eight controlled matrix enzymes, two oxidative decarboxylations shed **`2 CO₂`**, substrate phosphorylation yields **`1 ATP (GTP)`**, and four redox steps load **`3 NADH + 1 FADH₂`** while regenerating `4C oxaloacetate`. Multiplying by **two turns per glucose** produces **`4 CO₂ + 6 NADH + 2 FADH₂ + 2 ATP`**!'
      ),
      diag(BIO_V3_C12_MITOCHONDRION_ETC_EXPLORER),
      h2('3. Cristae ETC, Chemiosmosis & Modern 30–32 ATP Accounting (C1.2.11–C1.2.15 HL)'),
      p(
        'Look at the harvest before oxygen enters: just **4 net substrate-level ATP (`2` glycolysis + `2` Krebs)**, yet **10 reduced `NADH`** (`2` cytosolic + `2` Link + `6` Krebs) plus **2 reduced `FADH₂`**. In **Stage 4 — Oxidative Phosphorylation (`Inner Cristae Membrane`, `Allott pp. 375–378`)**, `NADH` donates high-energy electron pairs onto **Complex I**, driving conformational proton pumping of `H⁺` from the alkaline matrix into the extraordinarily tiny **intermembrane space (`B2.2`)**. Electrons pass via mobile lipid-soluble **ubiquinone (`Coenzyme Q`)** to **Complex III** (`pumping more H⁺`), via water-soluble **cytochrome c** to **Complex IV**, and finally onto **oxygen (`½O₂ + 2e⁻ + 2H⁺ -> H₂O`)**—making **oxygen the essential terminal electron acceptor AND matrix proton sink (`metabolic water`)**!'
      ),
      p(
        'Notice why **`FADH₂`** delivers less energy than `NADH`: `FADH₂` donates electrons downstream at **Complex II (`succinate dehydrogenase`)**, bypassing Complex I proton pumping and pushing only **`~6 H⁺`** vs **`~10 H⁺`** for matrix `NADH`. That intense proton-motive force (`electrical + ΔpH gradient`) forces `H⁺` back into the matrix down its electrochemical gradient exclusively through **`FoF1 ATP synthase`** rotors—**Mitchell\'s Chemiosmotic Theory (`1961`)**. At ~3.3 H⁺ per catalytic turn (+1 H⁺ for Pi import = ~4 H⁺/ATP), modern biochemistry (`Allott p. 377`) scores **`2.5 ATP` per matrix `NADH`** (`20` ATP), **`1.5 ATP` per `FADH₂`** (`3` ATP), plus `2` cytosolic `NADH` shuttles (`3–5` ATP), summing to **`~30–32 net ATP` per glucose** (replacing obsolete 36–38 counts!).'
      ),
      callout(
        'textbook_excerpt',
        'Allott Showcase DBQs: Kangaroo Rat Metabolic Water (p. 378) & Rattlesnake Shaker Muscle (pp. 381–383)',
        '- **Desert Kangaroo Rat (*Dipodomys*):** Survives zero liquid drinking water by oxidizing high-lipid dry seeds (`palmitate yields 1.13 g metabolic H₂O per g fat via Complex IV vs 0.60 g/g glucose!`) combined with long loop-of-Henle kidneys (`D3.3`) and nocturnal burrow water-conservation.\n- **Rattlesnake Tail-Shaker Muscle (`Allott p. 382`):** Rattle muscles fire at `90 Hz` continuously without fatigue thanks to dense **mitochondrial cristae (`~26%` fibre volume)** and slow **SR Ca²⁺ pumping** matched stoichiometrically by rapid oxidative ATP turnover!'
      ),
      eq(
        '\\text{Net ATP} = 4_{\\text{substrate}} + (8\\times 2.5)_{matrix\\text{ NADH}} + (2\\times 1.5)_{\\text{FADH}_2} + (2\\times [1.5\\text{–}2.5])_{\\text{cytosol NADH}} = 30\\text{–}32\\text{ ATP}',
        'Updated 2023 IB HL oxidative phosphorylation accounting across eukaryotic shuttle variants (Allott p. 377).',
        [
          { symbol: '2.5', meaning: 'ATP synthesized per matrix NADH entering Complex I (~10 H+ pumped)' },
          { symbol: '1.5', meaning: 'ATP synthesized per FADH2 entering Complex II (~6 H+ pumped)' },
        ]
      ),
      diag(BIO_V3_C12_ATP_WORKED),
      h2('4. Nature of Science: Mitchell Chemiosmosis Paradigm Shift & RQ (Allott p. 377)'),
      callout(
        'tok_nos',
        'NOS & TOK: Paradigm Shift From "High-Energy Chemical Intermediate" to Chemiosmosis',
        'For 20 years, biochemists searched fruitlessly inside mitochondria for a mythical covalent phosphorylated protein intermediate "`X~P`" transferring phosphate onto ADP. **Peter Mitchell (1961)** proposed instead a revolutionary physical battery—a transmembrane **proton electrochemical gradient** (`not a single chemical intermediate!`)—initially mocked until **uncouplers (`DNP` letting `H⁺` leak cleanly across membranes as pure heat while `O₂` consumption skyrockets!)** and **Jagendorf\'s spinach acid bath (`C1.3`)** verified chemiosmosis across both kingdoms!'
      ),
      p(
        'Look how thermogenic **uncoupler proteins (`UCP1 / thermogenin`)** in brown adipose tissue of hibernating mammals and newborn infants reinforce chemiosmotic logic cleanly (`Allott p. 378`): opening passive `H⁺` channels bypasses ATP synthase so mitochondrial ETC races at maximum rate releasing `~30.5 kJ` steps purely as vital **non-shivering body heat**!'
      ),
      p(
        'For **Paper 1B and IA respirometry (`C1.2.6`, `Allott pp. 366–367`)**, pair biological KOH absorption cleanly with experimental controls: a sealed experimental tube containing germinating peas or crickets alongside `KOH` solution connects via capillary U-tube (`coloured manometer fluid`) to an **equal-volume thermobarometer control tube** packed with inert **glass beads** plus `KOH`. Any shift in ambient laboratory temperature or barometric pressure nudges both sides equivalently (`subtracting control Δh isolates true biological O₂ consumption directly: V_O2 = πr² · Δd`!), while expressing final rates per gram dry/wet mass per minute (`mm³ O₂ g⁻¹ min⁻¹`) standardizes comparisons between ectotherms and endotherms. Meanwhile, revisiting **Allott\'s Rattlesnake Shaker Muscle DBQ (`pp. 381–383`)** proves why mitochondrial anatomy limits physiology: unlike fatigued white sprinter muscles relying on glycolytic glycogen + lactate bursts, tail-shaker fibres dedicate `~26%` volume to tightly stacked **cristae mitochondria**, oxidizing lipids + pyruvate continuously at `90 Hz` rattle frequencies without exhausting local ATP!'
      ),
      h2('5. Exam Markscheme Lexicon (C1.2)'),
      terms([
        {
          term: 'Anaerobic Lactate vs Ethanol Fermentation',
          definitionMarkdown: 'Pyruvate regenerates cytoplasmic `NAD⁺` (`no extra ATP`): mammals reduce pyruvate -> **lactate (`ZERO CO₂`)**; yeast decarboxylates -> `ethanal + CO₂ -> ethanol`.',
          markschemeKeyword: 'regenerates NAD+ · lactate emits zero CO2 vs yeast ethanol+CO2',
        },
        {
          term: 'Glycolysis 4 Steps (HL)',
          definitionMarkdown: 'Phosphorylation (`−2 ATP`) -> Lysis (`6C -> 2x 3C TP`) -> Oxidation (`-> 2 NADH`) -> ATP payoff (`+4 gross = +2 net ATP + 2 pyruvate`).',
          markschemeKeyword: 'phosphorylation + lysis + oxidation (NADH) + net 2 ATP',
        },
        {
          term: 'Link Reaction & β-Oxidation Convergence (HL)',
          definitionMarkdown: 'Pyruvate undergoes oxidative decarboxylation (`−CO₂, +NADH -> Acetyl-CoA`); fatty acid β-oxidation yields `Acetyl-CoA + NADH + FADH₂` needing `O₂`.',
          markschemeKeyword: 'oxidative decarboxylation -> acetyl-CoA · lipids skip glycolysis',
        },
        {
          term: 'Krebs Yields Per Glucose (2 Turns, HL)',
          definitionMarkdown: 'Two matrix turns emit **`4 CO₂`**, **`6 NADH`**, **`2 FADH₂`**, and **`2 ATP`** while regenerating `4C oxaloacetate`.',
          markschemeKeyword: 'per glucose = 4 CO2 · 6 NADH · 2 FADH2 · 2 ATP',
        },
        {
          term: 'Role of Oxygen as Terminal Acceptor (HL)',
          definitionMarkdown: 'Oxygen accepts de-energized electrons from **Complex IV** + `2 H⁺` -> `H₂O`, preventing backup of Complex I–IV proton pumping.',
          markschemeKeyword: 'terminal e- acceptor at Complex IV + binds H+ -> H2O',
        },
        {
          term: '2.5 / 1.5 ATP Stoichiometry & 30–32 Net (HL)',
          definitionMarkdown: 'Complex I (`NADH`) pumps more `H⁺` (`2.5 ATP`) than Complex II (`FADH₂`, `1.5 ATP`), yielding `~30–32 net ATP` per glucose via `FoF1 ATP synthase`.',
          markschemeKeyword: 'NADH 2.5 ATP vs FADH2 1.5 ATP -> 30–32 net ATP',
        },
      ]),
    ],
  },

  // ==========================================================================
  // 15. TOPIC C1.3 — PHOTOSYNTHESIS (NEW GUIDE)
  // ==========================================================================
  {
    topicCode: 'C1.3',
    title: 'Photosynthesis: Light Spectra, Z-Scheme Photolysis & Calvin Cycle (C1.3)',
    summary:
      'Complete SL+HL C1.3 Photosynthesis guide grounded in Allott & Mindorff (pp. 384–411): photolysis oxygen evolution & Great Oxidation Event, chromatography Rf, chlorophyll absorption vs Engelmann action spectra, Blackman limiting factors (FACE DBQs), HL Z-scheme PSII->PQ->Cyt b6f->PSI, Jagendorf acid bath proof, cyclic photophosphorylation, Rubisco Calvin cycle, and Bassham ¹⁴C shifts.',
    sourceFileNames: ['2026 Bio 5HL Course Outline.docx'],
    blocks: [
      callout(
        'guiding_questions',
        'Allott & Mindorff Chapter C1.3 SL+HL Guiding Questions (pp. 384–411)',
        '- How do photosynthetic pigments capture solar photons to convert inorganic `CO₂` and `H₂O` into energy-rich organic sugars while releasing global atmospheric `O₂`?\n- How do internal chloroplast membranes couple proton gradients in thylakoids directly onto carbon-fixing enzymes in the stroma?'
      ),
      callout(
        'syllabus_link',
        'IB Syllabus Alignment (C1.3.1–C1.3.19 SL + HL · Allott pp. 384–411)',
        '- **SL Core (`C1.3.1–C1.3.8`):** Light-driven anabolic transformation of solar -> chemical bond energy, **oxygen photolysis** & planetary `O₂` Banded Iron Formations, **paper chromatography (`Rf`)**, **absorption vs action spectrum** (`Chl a, b, carotenoids`), and **Blackman limiting factors** (`light intensity`, `CO₂ ppm`, `temperature`, **FACE canopy plots**).\n- **HL Extension (`C1.3.9–C1.3.19`):** Photosystems (`accessory antenna -> P680/P700 reaction centres`), **non-cyclic Z-scheme (`PSII -> PQ -> Cyt b6f -> PC -> PSI -> Fd -> NADP+ reductase`)**, **Jagendorf acid bath (`1966`)**, **cyclic PSI ATP compensation**, **Calvin Cycle (`Rubisco -> GP -> TP -> 5:1 RuBP regeneration`)**, and **Bassham radiotracer shifts (`pp. 407–409`)**.'
      ),
      h2('1. Pigment Chromatography (`Rf`), Absorption vs Action Spectra & Great Oxidation (C1.3.1–C1.3.5)'),
      p(
        '**Photosynthesis** anchors virtually all biosphere food webs (`Allott pp. 384–387`), capturing visible solar photons (`400–700 nm`) to oxidize water (`2 H₂O -> O₂ + 4 H⁺ + 4 e⁻`) and reduce inorganic carbon dioxide (`CO₂`) into triose sugars (`C₆H₁₂O₆`). Roughly **`~2.4 billion years ago`**, ancestral oxygenic cyanobacteria unleashed Earth\'s **Great Oxidation Event (`C1.3.4`)**—first rusting dissolved oceanic `Fe²⁺` into red geological **Banded Iron Formations (`BIFs`)** before saturating oceans, filling the atmosphere with `21% O₂`, forming the protective `O₃` stratospheric **ozone shield**, and driving aerobic mitochondrial evolution!'
      ),
      p(
        'Plant chloroplasts pack multiple **photosynthetic pigments** (`C1.3.2–C1.3.3`) separable cleanly via organic-solvent **paper or thin-layer chromatography (`Rf = distance moved by pigment / distance moved by solvent front`)**: hydrophobic non-polar **β-carotene (`Rf ~0.95`, orange)** rides fastest near the solvent front, followed by **pheophytin**, **chlorophyll a (`blue-green, Rf ~0.60`)**, **chlorophyll b (`olive-green, Rf ~0.45`)**, and polar **xanthophylls (`yellow`)**. Plotting monochromatic absorption across extracted pigments yields the **absorption spectrum**: **chlorophylls a and b absorb intensely in violet-blue (`430–470 nm`) and orange-red (`640–680 nm`) wavelengths** while transmitting/reflecting green (`~520–580 nm`, making leaves look green!). Superimposing live `O₂` evolution or `CO₂` uptake across wavelengths builds the **action spectrum**—first mapped ingeniously in `1882` by **Theodor Engelmann**, who illuminated filamentous *Spirogyra* with a prism spectrum and watched aerotactic bacteria swarm overwhelmingly over blue and red illuminated zones (`with accessory carotenoids bridging blue-green troughs slightly higher than pure chlorophyll a alone!`).'
      ),
      h2('2. Blackman Law of Limiting Factors & FACE Carbon Enrichment (C1.3.6–C1.3.8)'),
      p(
        'When photosynthesis runs under variable outdoor sunlight, `CO₂`, and temperature (`Allott pp. 390–394`), overall flux (`measured via O₂ bubble/sensor yield, pH electrode CO₂ depletion, or dry biomass gain`) is capped by whichever factor sits furthest below optimum—**Blackman\'s Law of Limiting Factors**:'
      ),
      p(
        '1. **Light Intensity:** At low photon flux, light-dependent `ATP` and `NADPH` supply caps photosynthesis linearly (crossing the **light compensation point** where gross photosynthetic `O₂` equals mitochondrial respiratory `O₂` consumption = **zero net gas exchange**!). Above saturation light, rates hit a plateau where `CO₂` or temperature becomes limiting.\n2. **Carbon Dioxide Concentration:** Rising `[CO₂]` accelerates Rubisco carboxylation linearly until either light (`ATP/NADPH` supply) or enzyme kinetics saturate near `~800–1,000 ppm`. **Free-Air `CO₂` Enrichment (`FACE`)** field plots (`Allott p. 394`) expose natural forest canopies to elevated `~550–600 ppm CO₂`—showing real outdoor trees gain less long-term photosynthesis than closed greenhouses because soil nitrogen/phosphorus and drought stomatal closure co-limit wild growth!\n3. **Temperature:** Warming accelerates stromal Calvin cycle kinetics (`Rubisco`) cleanly across `10–30 °C`, YET past `~35–40 °C` **enzyme denaturation** PLUS competing wasteful **photorespiration** (`Rubisco accidentally fixing O₂ instead of CO₂!`) plunge net assimilation steeply downward.'
      ),
      diag(BIO_V3_C13_PHOTOSYNTHESIS_SIM),
      h2('3. HL Light-Dependent Z-Scheme, Jagendorf Proof & Cyclic Photophosphorylation (C1.3.9–C1.3.14)'),
      p(
        'Embedded inside thylakoid membranes (`B2.2`), hundreds of accessory chlorophylls and carotenoids surround central reaction-centre chlorophyll a dimers forming **Photosystems II (`P680`) and I (`P700`)** (`Allott pp. 396–403`). Follow electrons step-by-step down the **non-cyclic Z-scheme**:'
      ),
      p(
        '1. **PSII (`P680`) Photoactivation & Lumen Photolysis:** Absorbed photons excite `P680` electrons onto primary acceptor pheophytin; oxidized `P680⁺` immediately strips replacement electrons from water inside the **thylakoid lumen** via the manganese oxygen-evolving complex (`2 H₂O -> O₂ + 4 H⁺ + 4 e⁻`)—evolving `O₂` gas AND building lumen acidity directly!\n2. **Plastoquinone (`PQ`) & Cyt `b₆f` Proton Pump (`Chemiosmosis`):** Mobile lipid-soluble **plastoquinone** picks up `2 e⁻` plus **2 stromal `H⁺`** and delivers protons via **Cytochrome `b₆f`** straight into the narrow **thylakoid lumen**, establishing a `~3.5 pH-unit` electrochemical battery (`lumen pH ~5 vs stroma pH ~8`).\n3. **PSI (`P700`) & Stromal `NADPH` Synthesis:** Plastocyanin delivers electrons to **PSI (`P700`)**, where a second red photon boosts electrons up to **ferredoxin (`Fd`)** and stroma-facing **`NADP⁺ reductase`** (`NADP⁺ + 2 e⁻ + H⁺ -> NADPH`), while lumen `H⁺` ions rush outward through **`FoF1 ATP synthase`** producing **stromal `ATP`** right beside Calvin enzymes!'
      ),
      callout(
        'textbook_excerpt',
        'Decisive Experimental Proof: Andre Jagendorf\'s (1966) Spinach Acid Bath (Allott p. 401)',
        'How did **Andre Jagendorf** prove Mitchell\'s proton gradient drives ATP synthesis directly WITHOUT photons or electron transport? He soaked isolated dark spinach thylakoids in acidic `pH 4.0` succinate buffer until protons filled the tiny thylakoid lumens (`pH 4`), then abruptly transferred them in complete darkness into alkaline `pH 8.0` buffer containing **`ADP + Pi`**. Even with zero photons and ETC inhibitors blocking PSII/PSI, protons rushed down the artificial `ΔpH = 4` gradient outward through ATP synthase, generating bursts of **dark `ATP`**!'
      ),
      p(
        'Notice one subtle stoichiometric imbalance (`Allott p. 402 & p. 407`): non-cyclic Z-scheme electron flow exports only `~1.28 ATP` per `1.00 NADPH`, whereas the Calvin cycle demands **`1.50 ATP : 1.00 NADPH`** (`18 ATP : 12 NADPH` per hexose!). Chloroplasts resolve this cleanly via **cyclic photophosphorylation (`PSI only`)**: excited electrons from `P700 -> ferredoxin` loop backward onto `PQ / Cyt b6f` to pump extra protons into the lumen—producing **pure bonus `ATP` without photolysis, `O₂`, or `NADPH`** whenever stromal `NADP⁺` runs scarce!'
      ),
      diag(BIO_V3_C13_THYLAKOID_ZSCHEME_EXPLORER),
      h2('4. HL Calvin Cycle, Triose Fate & Bassham Radiotracer DBQ (C1.3.15–C1.3.19 HL)'),
      p(
        'Powered continuously by stromal `ATP` and `NADPH`, the **Calvin–Benson Cycle (`Stroma`, `Allott pp. 404–410`)** drives three reactions around regenerating 5-carbon acceptor **`RuBP`** (`ribulose bisphosphate`):'
      ),
      p(
        '1. **Carbon Fixation (`Rubisco`):** Ribulose bisphosphate carboxylase/oxygenase fixes `3 CO₂` onto `3 RuBP (5C)` forming unstable 6C intermediates cleaving instantaneously into **`6 × Glycerate-3-Phosphate (GP / 3-PGA, 3C)`**. Because Rubisco runs notoriously slowly (`~3 s⁻¹`) and mistakenly fixes `O₂` in heat/drought (`photorespiration`), chloroplasts invest up to `~50%` of total soluble leaf protein in Rubisco!\n2. **Reduction to Triose Phosphate (`TP`):** `6 ATP` phosphorylate and `6 NADPH` reduce all `6 GP -> 6 × Triose Phosphate (TP, 3C)` (`yielding glyceraldehyde-3-phosphate`).\n3. **Export + RuBP Regeneration (`5 : 1 Ratio`):** Only **`1 of every 6 TP`** molecules leaves the cycle as net carbon gain (`2 cycles = 6 CO₂ -> 2 TP -> 1 glucose -> sucrose, starch, cellulose, amino acids via NO₃⁻, or fatty-acid glycerol`), whereas the remaining **`5 TP` (`15 carbons`)** consume **`3 more ATP`** across sugar-phosphate isomerases to regenerate **`3 RuBP (5C)`**, keeping carbon fixation running endlessly!'
      ),
      eq(
        'R_f = \\frac{d_{\\text{pigment}}}{d_{\\text{solvent front}}} \\qquad 6\\text{CO}_2 + 18\\text{ATP} + 12\\text{NADPH} + 12\\text{H}_2\\text{O} \\longrightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 18\\text{ADP} + 18\\text{P}_i + 12\\text{NADP}^+',
        'Chromatography Rf definition and net Calvin–Benson stoichiometry required to synthesize 1 net mole of glucose hexose.',
        [
          { symbol: '18\\text{ ATP} : 12\\text{ NADPH}', meaning: '1.50 : 1 demand met by cyclic PSI + non-cyclic Z-scheme flow' },
          { symbol: 'R_f', meaning: 'Pigment-to-solvent-front mobility ratio determined by lipid/polar affinity' },
        ]
      ),
      diag(BIO_V3_C13_CALVIN_WORKED),
      callout(
        'tok_nos',
        'NOS & TOK: Bassham–Calvin Lollipop Apparatus (¹⁴CO₂ Radiotracing, Allott pp. 407–409)',
        'Melvin Calvin and Andy Bassham injected pulsing `¹⁴CO₂` into illuminated *Chlorella* algae suspensions inside a thin glass "lollipop", then dropped boiling ethanol valves every `2–5 seconds` onto 2D chromatograms to snapshot exact metabolite order: **GP spiked within 5 s**, followed sequentially by `TP` and `RuBP`. Cutting light OFF spiked `[GP]` while draining `[RuBP]` (`ATP/NADPH ran out`), whereas cutting `CO₂` spiked `[RuBP]` while draining `[GP]` (`Rubisco halted`)—classic systems deduction tested constantly on HL Paper 2!'
      ),
      p(
        'Practical execution and ecological realism unify `C1.3` cleanly for Paper 1B and Paper 2 (`Allott pp. 386–395`). When running **Thin-Layer or Paper Chromatography (`C1.3.2`)**, biologists grind young spinach leaves in anhydrous **propanone (acetone)** + sand to burst thylakoids cleanly (`exposing pigments`), concentrate micro-dots repeatedly onto pencil origin lines **above** volatile **petroleum ether / acetone** running solvent (`fume hood required: flammable organic fumes`), cap chambers so solvent rises evenly without evaporation, and calculate `Rf` IMMEDIATELY before spots fade under photo-oxidation (`β-carotene ~0.95 -> chlorophyll a ~0.60 -> chlorophyll b ~0.45 -> polar xanthophylls ~0.35`). Outdoors inside **FACE (`Free-Air CO₂ Enrichment`) forest rings (`Allott p. 394`)**, piping `~550–600 ppm CO₂` around canopy oaks initially boosts net carbon uptake `~18–25%` (`suppressing Rubisco wasteful O₂ binding known as photorespiration`), yet long-term growth saturates quickly wherever summer drought closes stomata or low soil nitrogen/nitrate (`NO₃⁻`) limits **Rubisco protein translation (`50%` of stromal soluble protein!)**—demonstrating why real climate ecosystems cannot simply double wood sequestration automatically alongside fossil-fuel emissions.'
      ),
      h2('5. Exam Markscheme Lexicon (C1.3)'),
      terms([
        {
          term: 'Absorption vs Action Spectrum',
          definitionMarkdown: 'Absorption plots `%` wavelength absorbed by isolated pigments (`430–470` blue, `640–680` red); Action plots whole-leaf photosynthetic rate across wavelengths.',
          markschemeKeyword: 'light absorbed by pigment vs overall photosynthesis rate',
        },
        {
          term: 'Compensation Point',
          definitionMarkdown: 'Light intensity where gross photosynthesis rate matches cellular respiration rate (`net CO₂/O₂ exchange = 0`).',
          markschemeKeyword: 'photosynthesis rate = respiration rate (zero net gas flux)',
        },
        {
          term: 'PSII Photolysis & Oxygen Evolution (HL)',
          definitionMarkdown: 'P680⁺ splits luminal water (`2 H₂O -> O₂ + 4 H⁺ + 4 e⁻`), releasing `O₂` and building lumen proton acidity directly.',
          markschemeKeyword: 'water split in thylakoid lumen -> O2 + e- to P680+ + lumen H+',
        },
        {
          term: 'Jagendorf Acid Bath & Chemiosmosis (HL)',
          definitionMarkdown: 'Artificially shifting pH 4 dark thylakoids to pH 8 buffer + `ADP + Pi` yields dark `ATP`, proving ΔpH drives `ATP synthase` directly.',
          markschemeKeyword: 'artificial lumen pH gradient drives dark ATP synthase',
        },
        {
          term: 'Cyclic Photophosphorylation (HL)',
          definitionMarkdown: 'PSI excited electrons return via `Fd -> PQ -> Cyt b6f` pumping `H⁺` for bonus **`ATP` only** (`NO photolysis, NO O₂, NO NADPH`) to match Calvin `1.5:1` ratio.',
          markschemeKeyword: 'PSI -> PQ/Cyt b6f -> bonus ATP without O2 or NADPH',
        },
        {
          term: 'Calvin Cycle Rubisco & Bassham Shifts (HL)',
          definitionMarkdown: 'Rubisco fixes `CO₂ + RuBP -> 2 GP` (`reduced by ATP+NADPH -> TP`; `5/6` TP rebuild `RuBP`). Light OFF raises `[GP]`; low `CO₂` raises `[RuBP]`.',
          markschemeKeyword: 'Rubisco CO2+RuBP->GP -> TP -> 5:1 RuBP · Bassham pool trapping',
        },
      ]),
    ],
  },

  // ==========================================================================
  // 16. TOPIC D2.3 — WATER POTENTIAL (NEW GUIDE)
  // ==========================================================================
  {
    topicCode: 'D2.3',
    title: 'Water Potential (Ψw = Ψs + Ψp), Tonicity & Plant/Animal Osmosis (D2.3)',
    summary:
      'Complete SL+HL D2.3 Water Potential treatise grounded in Allott & Mindorff (pp. 651–663): molecular solvation osmosis, hypotonic/isotonic/hypertonic lysis vs crenation vs plasmolysis, clinical 0.154 M saline, Fruit & Carrot SD/SE DBQs (pp. 652–658), HL quantitative Ψw = Ψs + Ψp equilibrium, incipient plasmolysis, and drought osmotic adjustment in oak & maize.',
    sourceFileNames: ['2026 Bio 5HL Course Outline.docx'],
    blocks: [
      callout(
        'guiding_questions',
        'Allott & Mindorff Chapter D2.3 SL+HL Guiding Questions (pp. 651–663)',
        '- What biophysical forces drive net passive movement of water molecules across selectively permeable membranes from soil and blood plasma into living cells?\n- How do rigid cell walls (`Ψp`) vs naked membranes, medical saline, and osmotic solute accumulation preserve cellular integrity under osmotic stress?'
      ),
      callout(
        'syllabus_link',
        'IB Syllabus Alignment (D2.3.1–D2.3.11 SL + HL · Allott pp. 651–663)',
        '- **SL Core (`D2.3.1–D2.3.7`):** Solvation reducing free water kinetic activity, qualitative **water potential (`Ψw`)** (`highest = 0 MPa` in pure water), aquaporins, **hypotonic / isotonic / hypertonic** effects in walled plant cells (`turgid, flaccid, plasmolysis`) vs wall-less animal cells (`cytolysis, crenation`), **isotonic medical saline (`0.154 mol dm⁻³ NaCl`)**, and freshwater **contractile vacuoles (`Paramecium`)**.\n- **HL Extension (`D2.3.8–D2.3.11`):** Quantitative **`Ψw = Ψs + Ψp` (`MPa` or `kPa`)**, **negative solute potential (`Ψs <= 0`)**, **positive turgor pressure potential (`Ψp >= 0`)** vs negative xylem tension, **incipient plasmolysis (`Ψp = 0`)**, and **Allott Drought Oak/Maize & Potato/Carrot Osmometer DBQs (`pp. 652–661`)**.'
      ),
      h2('1. Solvation Physics, Osmosis & Clinical 0.154 M Saline (D2.3.1–D2.3.6)'),
      p(
        'Whenever water dipoles lock into electrostatic **hydration shells (`A1.1`)** around dissolved ions (`Na⁺, Cl⁻, K⁺`) or polar sugars (`sucrose, glucose`), fewer free unbound water molecules bounce randomly against biological membranes (`Allott pp. 651–654`). Biologists measure the free chemical energy of water per unit volume relative to pure distilled water at atmospheric pressure (`defined as 0.0 MPa` or `0 kPa`) as **water potential (`Ψw`)**. Dissolving solutes ALWAYS lowers free water energy into **negative values (`Ψs <= 0`)**, so passive **osmosis** flows inexorably down the potential gradient—from **HIGH (`less negative`, e.g., `−0.20 MPa`) water potential** toward **LOW (`more negative`, e.g., `−0.75 MPa`) water potential** via phospholipid gaps or **aquaporin** channels (`B2.1`) until **`Ψw_cell = Ψw_external`**.'
      ),
      p(
        'Presence or absence of a rigid **cellulose cell wall (`A2.2 / B1.1`)** transforms cellular outcomes dramatically across extracellular **tonicity**:'
      ),
      p(
        '- **Wall-less Animal Cells (`Erythrocytes, Neurons`):** Lacking a rigid restraining wall, internal hydrostatic pressure stays **`Ψp ≈ 0`**. Immersed in **hypotonic** pure water (`Ψw = 0`), water floods inward rapidly and blasts membranes apart (**cytolysis / haemolysis**—hence intravenous hospital drips and organ-transplant baths strictly use **isotonic `0.154 mol dm⁻³ NaCl` normal medical saline (`≈ −0.74 MPa`)** matching mammalian blood plasma!). Placed in **hypertonic** concentrated brine, RBCs lose water rapidly and shrink into spiked **crenated** husks. Meanwhile, freshwater *Paramecium* combats endless inward hypotonic osmosis (`cytosol −0.4 MPa vs pond 0 MPa`) using ATP-powered **contractile vacuoles** rhythmically expelling water out (`Allott p. 654`).\n- **Walled Plant & Fungal Cells:** Immersed in pure hypotonic water, plant vacuoles swell against tough crossed cellulose microfibrils (`B1.1`), pushing outward until the wall resists passively with equal opposing hydrostatic **pressure potential (`+Ψp`)**—leaving healthy **turgid** cells holding upright non-woody stems and opening stomatal guard cells without bursting! Conversely, concentrated hypertonic sugar pulls water outward until vacuoles shrink and the plasma membrane pulls cleanly away from the outer wall (**plasmolysis**, `Ψp = 0`).'
      ),
      diag(BIO_V3_D23_WATER_POTENTIAL_SIM),
      h2('2. Quantitative HL Water Potential (`Ψw = Ψs + Ψp`) & Incipient Plasmolysis (D2.3.7–D2.3.11 HL)'),
      p(
        'Higher Level Biology expresses osmotic equilibrium strictly through **`Ψw = Ψs + Ψp`** (`Allott pp. 658–662`), evaluated in **megapascals (`MPa`)** or **kilopascals (`1 MPa = 1,000 kPa`)**:'
      ),
      p(
        '1. **Solute Potential (`Ψs`, always `<= 0`):** Depends solely on total molar dissolved particle concentration (`Ψs = −iCRT`, where `NaCl` dissociates `i ≈ 2` ions per mole while sucrose keeps `i = 1`—explaining why `0.15 M NaCl` exerts nearly double osmotic pull of `0.15 M` sucrose!). Pure water has `Ψs = 0.0 MPa`.\n2. **Pressure Potential (`Ψp`):** Physical mechanical pressure relative to ambient `1 atm`. Open beakers sit at `Ψp = 0.0 MPa`; **turgid plant cells** carry positive wall squeeze **`Ψp > 0` (`e.g., +0.30 to +0.85 MPa`)**; **xylem vessels** pulled by transpiring leaves sit under negative hydrostatic tension **`Ψp < 0` (`e.g., −1.75 MPa`, `A1.1`)**.\n3. **Incipient Plasmolysis (`Ψp = 0`):** At the exact external bath concentration where the protoplast barely begins detaching from the cellulose wall, cell wall tension falls to **`Ψp = 0.0 MPa`**, meaning intracellular **`Ψw_cell = Ψs_cell`** (`making external bath Ψs equal average tissue Ψs!`).'
      ),
      callout(
        'examiner_warning',
        'Two Classic Water Potential Sign Traps on HL Paper 1A & Paper 2',
        '- **Sign Confusion Trap:** NEVER write *"water moves from −0.8 MPa toward −0.3 MPa"*! Think carefully on the number line: **`−0.3 MPa` is HIGHER (less negative) than `−0.8 MPa`**, so water ALWAYS flows from `−0.3 MPa -> −0.8 MPa` (`high to low Ψw`).\n- **Isotonic Sucrose Potato/Carrot Lab (`Allott pp. 655–659`):** At the `0.0%` mass-change x-intercept (`e.g., 0.34 M sucrose = −0.83 MPa`), external bath equals **bulk tissue `Ψw`**—inside individual equilibrated tissue cylinders, turgid cortex already had `Ψp > 0` matching more negative intracellular `Ψs`!'
      ),
      diag(BIO_V3_D23_TONICITY_MATRIX),
      h2('3. Allott Showcase DBQs: Solutes in Fruits, Carrot SD/SE & Oak/Maize Drought Adjustment'),
      callout(
        'textbook_excerpt',
        'Allott D2.3 Experimental & Ecological Datasets (pp. 652, 655–662)',
        '- **Solutes in Fruits DBQ (`p. 652`):** Soft-skinned ripening cherries and grapes split open cleanly during summer rainstorms as high sugar accumulation drops pulp `Ψs` deeply negative (`e.g., −2.0 MPa`), driving rapid hypotonic rainwater entry (`Ψw = 0`) past weakened pectin skin strength.\n- **Carrot Osmometer & SD/SE Error Bars (`pp. 656–658`):** When comparing crisp fresh vs wilting carrots (`or potato cylinders`), plotting `%Δmass` with **±1 SE or SD bars** distinguishes true osmotic adjustment from biological specimen noise (`wilted cells show more negative Ψs initially and re-absorb water at higher sucrose baths`).\n- **Drought Oak vs Maize Tolerance (`Tables 4–5 pp. 660–661`):** During mild soil drought, deep-rooted **oaks** and **maize** hydrolyze starch and synthesize **compatible solutes (`proline`, sucrose, malate, K⁺)** inside vacuoles, dropping internal `Ψs` down toward `−1.8` to `−2.4 MPa` (`active osmotic adjustment`)—keeping `Ψw_root < Ψw_dry soil` to continue extracting moisture while maintaining positive stomatal turgor `Ψp > 0` without salt toxicity!'
      ),
      eq(
        '\\Psi_w = \\Psi_s + \\Psi_p \\qquad \\Psi_s = -iCRT \\qquad \\text{Equilibrium: } \\Psi_{w,\\text{cell}} = \\Psi_{w,\\text{ext}}',
        'Fundamental HL Water Potential identity and van \'t Hoff solute equation determining direction and halt of osmotic flux.',
        [
          { symbol: '\\Psi_w', meaning: 'Net cellular or external water potential (MPa or kPa; <= 0 in open air)' },
          { symbol: '\\Psi_s', meaning: 'Solute (osmotic) potential (<= 0; more solute = more negative)' },
          { symbol: '\\Psi_p', meaning: 'Hydrostatic pressure potential (>= 0 inside turgid walled cells; < 0 in xylem tension)' },
        ]
      ),
      diag(BIO_V3_D23_WATER_POTENTIAL_WORKED),
      h2('4. Nature of Science & Integrative Membrane Transport (Allott p. 662)'),
      callout(
        'tok_nos',
        'NOS & TOK: Quantitative Measurement Models (`Ψw`) vs Qualitative Intuition ("Water Follows Salt")',
        'Notice Allott (`p. 662`) highlights why physics terminology (**water potential `Ψw` in pascals**, *energy per unit volume `J m⁻³`*) superseded fuzzy informal phrases like *"suction pressure"* or *"osmotic pull"*: expressing hydrostatic pressure (`Ψp`) and dissolved solute effects (`Ψs`) inside **identical MPa units** lets plant physiologists compute exact equilibrium between transpiring xylem, soil capillaries, and stomatal guard cells with zero ambiguity!'
      ),
      p(
        'Connect `D2.3` seamlessly back to `B2.1` (`aquaporins + active Na⁺/K⁺/H⁺ ion pumping` setting `Ψs` gradients!) and forward to Year 2 renal **osmoregulation (`D3.3`)** and **xylem transpiration (`B3.2`)**.'
      ),
      p(
        'Translating `D2.3` cleanly into **Paper 1B and IA osmometry experiments (`Allott pp. 655–661`)** locks down experimental-design marks. When immersing **potato or carrot parenchyma cylinders** across graded sucrose molarities (`0.0, 0.1, 0.2, 0.3, 0.4, 0.5 mol dm⁻³` with `>=5` cylinder replicates per bath), **strict standardization eliminates confounding variance**: bore identical cylinder diameters (`same SA:V diffusion geometry`), trim away waxy epidermis skins (`impermeable suberin blocks osmosis!`), gently pat cylinders identically with absorbent paper towels before initial AND final weighing (`avoiding unblotted surface water mass error`), keep beakers covered inside a `20.0 ± 0.5 °C` water bath (`stopping evaporation from inflating bath molarity and keeping Ψs = −iCRT temperature-constant`), and compute **`%Δmass = (m_final − m_initial) / m_initial × 100`** (`normalizing minor starting cylinder weight differences`). Plotting mean `%Δmass ± 1 SD/SE` locates **isotonicity (`%Δmass = 0` x-intercept)** cleanly via linear regression! Notice how Allott\'s **Oak & Maize drought Tables 4–5 (`pp. 660–661`)** illustrate why hardy woody oak (`Quercus`) maintains open midday stomata down to soil `Ψw ≈ −2.5 MPa` whereas drought-sensitive maize wilts near `−1.5 MPa`: oak leaves synthesize massive vacuolar soluble sugars + proline **compatible osmolytes** (`which protect active enzymes better than toxic Na⁺/Cl⁻ ions!`), dropping leaf `Ψs` sharply so positive turgor `Ψp > 0` continues pulling dry-soil moisture uphill. Likewise, **stomatal guard cells** regulate gas entry mechanically via blue-light-driven `H⁺-ATPase` pumps driving `K⁺` and `Cl⁻` uptake into vacuoles—plunging `Ψs` negatively so aquaporin water influx inflates guard-cell turgor `Ψp` (`opening curved inner walls`) while drought hormone abscisic acid (`ABA`) reverses `K⁺` efflux (`deflating guard cells flaccid to close pores`). Clinically, surgeons infuse hypertonic **mannitol** cautiously to relieve brain edema via controlled outward tissue osmosis while avoiding hypotonic IV drips that cause rapid **haemolysis**!'
      ),
      h2('5. Exam Markscheme Lexicon (D2.3)'),
      terms([
        {
          term: 'Water Potential (Ψw)',
          definitionMarkdown: 'Free chemical energy of water relative to pure water (`0.0 MPa`); osmosis moves water passively from **higher (less negative)** to **lower (more negative) `Ψw`**.',
          markschemeKeyword: 'high (less negative) Ψw to low (more negative) Ψw via osmosis',
        },
        {
          term: 'Normal Saline (0.154 mol dm⁻³ NaCl)',
          definitionMarkdown: 'Medical IV fluid isotonic to mammalian blood plasma (`≈ −0.74 MPa`), preventing red blood cell haemolysis or crenation.',
          markschemeKeyword: '0.154 M NaCl isotonic to RBCs -> zero net osmosis',
        },
        {
          term: 'Plasmolysis vs Cytolysis vs Crenation',
          definitionMarkdown: 'Plasmolysis = walled plant protoplast shrinks off cellulose in hypertonic bath (`Ψp = 0`); Cytolysis = animal cell bursts in hypotonic; Crenation = animal shrivels in hypertonic.',
          markschemeKeyword: 'membrane pulls off plant wall vs animal burst vs animal shrivel',
        },
        {
          term: 'Solute Potential (Ψs) & Pressure Potential (Ψp, HL)',
          definitionMarkdown: '`Ψw = Ψs + Ψp`: adding solutes makes `Ψs` strictly negative (`<= 0`); wall resistance makes turgid plant `Ψp` positive (`>= 0`).',
          markschemeKeyword: 'Ψw = Ψs + Ψp · Ψs <= 0 · positive turgor Ψp',
        },
        {
          term: 'Incipient Plasmolysis (HL)',
          definitionMarkdown: 'Threshold where shrinking plant membrane exerts zero push on wall (`Ψp = 0`), so **`Ψw_cell = Ψs_cell = Ψw_ext`** (`50%` cells visibly beginning detachment).',
          markschemeKeyword: 'Ψp = 0 -> Ψw equals intracellular Ψs',
        },
        {
          term: 'Drought Osmotic Adjustment (HL)',
          definitionMarkdown: 'Oak/maize accumulate compatible osmolytes (`proline, sugars, K+`) making `Ψs` more negative so root `Ψw` stays below dry soil without salt toxicity.',
          markschemeKeyword: 'accumulates compatible solutes -> lowers Ψs -> pulls dry soil water',
        },
      ]),
    ],
  },

  // ==========================================================================
  // 17. TOPIC D1.1 — DNA REPLICATION, PCR & EXPRESSION FOUNDATIONS [Y2 BRIDGE]
  // ==========================================================================
  {
    topicCode: 'D1.1',
    title: 'DNA Replication, PCR & Gene Expression Foundations (D1.1–D1.2)',
    summary:
      'Year 2 Continuity Bridge covering D1.1 DNA Replication & D1.2 Protein Synthesis grounded directly in Allott & Mindorff (pp. 559–592): Meselson–Stahl ¹⁵N/¹⁴N proof, HL replisome (helicase, gyrase, primase, Pol III 5\'->3\' proofreading, Okazaki pulse–chase, Pol I, ligase), Taq PCR & D1S80 VNTR gels, ORF math, HL promoters/caps/poly-A, TNNT2 alternative splicing, 80S A/P/E sites, and preproinsulin cleavage.',
    sourceFileNames: ['2026 Bio 5HL Course Outline.docx', '2024 A1 1.2 Nucleic Acids Notes.pdf'],
    blocks: [
      callout(
        'guiding_questions',
        'Allott & Mindorff Chapters D1.1–D1.2 Guiding Questions (pp. 559–592)',
        '- How are exact semi-conservative genetic copies made across billions of nucleotides with `< 1 error per 10⁹` base pairs (`and amplified exponentially via PCR`)?\n- How does one `~20,000`-gene human DNA genome generate `>100,000` differentially regulated protein isoforms across tissues?'
      ),
      callout(
        'syllabus_link',
        'IB Syllabus Alignment (D1.1.1–D1.1.9 & D1.2.1–D1.2.19 SL + HL · Allott pp. 559–592)',
        '- **D1.1 SL + HL (`pp. 559–571`):** **Meselson–Stahl (`1958`)** semi-conservative proof, `5\'->3\'` **DNA Pol III** (`dNTP -> dNMP + PPi`), **Taq thermocycler PCR (`95/55/72 °C`)** & **D1S80 VNTR gel electrophoresis (`p. 565`)**, plus **HL:** **gyrase, primase, continuous leading vs Okazaki lagging fragments, Pulse–Chase `³H`-thymidine DBQ (`p. 567`), Pol I excision, DNA ligase**, and **`3\'->5\'` exonuclease proofreading**.\n- **D1.2 SL + HL Foundations (`pp. 574–592`):** Antisense template vs sense transcription, **mRNA `5\'` cap / `3\'` poly-A tail**, **introns & TNNT2 alternative splicing (`p. 587`)**, **80S `E/P/A` translation**, **ORF stop-codon math (`p. 583`)**, **preproinsulin cleavage (`p. 590`)**, and **ubiquitin–proteasomes (`p. 591`)**.'
      ),
      h2('1. Meselson–Stahl Proof & HL Replisome Enzymology (D1.1.1–D1.1.8 HL)'),
      p(
        'When Watson and Crick noticed complementary pairing (`A=T`, `G≡C`), three competing copying models arose (`Allott pp. 559–561`): **Conservative** (`old helix stays wholly intact beside brand-new daughter helix`), **Dispersive** (`parental fragments scatter unevenly along hybrid strands`), and **Semi-Conservative** (`each daughter helix retains one original parental strand hydrogen-bonded to one newly synthesized strand`). In **1958, Matthew Meselson and Franklin Stahl** grew *E. coli* across many generations in heavy **¹⁵N** nitrogen medium, then shifted cells abruptly into light **¹⁴N** medium and spun isolated DNA to equilibrium inside **`CsCl` density gradients**: after **1 generation (`Gen 1`)**, ALL DNA banded together at a **single intermediate hybrid density (`¹⁵N/¹⁴N`)**, disproving Conservative cleanly (`which predicted 50% heavy + 50% light`); after **2 generations (`Gen 2`)**, **two equal bands (`50% hybrid ¹⁵N/¹⁴N + 50% light ¹⁴N/¹⁴N`)** emerged cleanly—disproving Dispersive (`which predicted one homogeneous band drifting lighter`) and proving **Semi-Conservative replication** decisively!'
      ),
      p(
        'Inside prokaryotes and eukaryotic S-phase replication bubbles (`Allott pp. 566–571`, `HL`), a coordinated **replisome** copies both antiparallel strands simultaneously at up to `~1,000 bp s⁻¹` despite one immovable constraint: **DNA Polymerase III can ONLY add nucleotides onto a free `3\'-OH` (`synthesizing strictly 5\' -> 3\'`)**!'
      ),
      p(
        '1. **DNA Gyrase (`Topoisomerase`) & Helicase:** Upstream **gyrase** relieves torsional supercoiling ahead of the fork; **helicase** consumes ATP to break hydrogen bonds between complementary bases while **single-strand binding (`SSB`) proteins** keep single templates exposed.\n2. **Continuous Leading vs Discontinuous Okazaki Lagging Strands:** Because the `3\'->5\'` template runs toward the fork, **RNA Primase** sets one primer and **DNA Pol III** elongates the **leading strand** smoothly and continuously toward helicase, deriving thermodynamic energy by cleaving **dNTP triphosphates (`dNTP -> dNMP + pyrophosphate PPi`)**. Conversely, the opposite antiparallel template runs away from the fork, forcing Primase to drop repeated short `~10 nt` RNA primers (`required because DNA Pol III cannot start de novo without 3\'-OH!`) while Pol III synthesizes backward in discrete **Okazaki fragments (`1,000–2,000 nt` in bacteria; `~150 nt` in eukaryotes, verified by Okazaki\'s `³H-thymidine` 2 s pulse vs 60 s chase DBQ, `Allott p. 567`)**.\n3. **Maturation & Fidelity:** **DNA Polymerase I** excises temporary RNA primers via `5\'->3\'` exonuclease and replaces them with dNTP DNA; **DNA Ligase** seals covalent sugar–phosphate backbone nicks; and DNA Pol III\'s built-in **`3\'->5\'` exonuclease proofreading domain** backs up instantaneously to clip mispaired bases (`cutting error rate from ~10⁻⁵ down to ~10⁻⁹–10⁻¹⁰ per bp`!).'
      ),
      diag(BIO_V3_D11_REPLISOME_EXPLORER),
      h2('2. Thermocycler PCR Amplification & Forensic VNTR Electrophoresis (D1.1.4–D1.1.5)'),
      p(
        'In vitro biotechnology mimics cellular replication rapidly inside thermal cyclers via **Polymerase Chain Reaction (`PCR`, `Allott pp. 562–564`)**. Each `~2 min` cycle runs three exact temperature plateaus: **(1) Denaturation (`94–95 °C`)** breaks inter-strand H-bonds while preserving covalent backbones and thermostable **Taq DNA polymerase** (*Thermus aquaticus* hot-spring bacterium, eliminating fresh enzyme refills); **(2) Annealing (`50–60 °C`)** lets synthetic ~20 nt flanking forward/reverse DNA primers hybridize onto 3\' target borders cleanly; and **(3) Extension (`72 °C`)** runs Taq `5\'->3\'` polymerization with excess dNTPs. Over `30` automated cycles, target locus copy count amplifies exponentially by **`2ⁿ` (`2³⁰ ≈ 1.07 × 10⁹` amplicons from one hair follicle or crime-scene swab!)**, while **RT-PCR** adds an initial viral **reverse transcriptase (`RNA -> cDNA`)** step prior to cycling (`detecting SARS-CoV-2 or HIV-1 RNA loads`).'
      ),
      p(
        'Amplified tandem repeat loci (**STRs / VNTRs**, such as the **`16 bp` `D1S80` human locus**, `Allott DBQ p. 565`) load into negative-cathode wells of agarose **gel electrophoresis** slabs. Because DNA\'s phosphate backbone carries uniform negative charge, electrical potential pulls fragments toward the **positive anode**, while porous agarose acts as a molecular sieve—**shorter alleles race farthest down the lane while long alleles lag near wells** (`every child band not shared with mother MUST match the biological father cleanly in paternity suits!`).'
      ),
      diag(BIO_V3_D11_PCR_EXPRESSION_STEPS),
      h2('3. D1.2 Transcription, Alternative Splicing (TNNT2) & Protein Maturation Foundations (pp. 574–592)'),
      p(
        'Linking genes (`A1.2/D1.1`) straight into functional proteomes (`B1.2`) runs through **D1.2 Transcription and Translation**: RNA Polymerase reads the **antisense (`3\'->5\'`) template strand** to synthesize an mRNA transcript matching the **`5\'->3\'` coding sense strand (`with Uracil replacing Thymine`)**. Crucially (`D1.2.12 HL`, `Allott pp. 582–587`), **mutations in non-coding promoters or enhancers** still cripple protein output without touching a single coding amino-acid codon—because transcription factors and RNA Polymerase II must bind non-coding **promoter TATA boxes** to initiate transcription!'
      ),
      callout(
        'textbook_excerpt',
        'HL Eukaryotic Processing Showcase: 5\' Cap, Poly-A, TNNT2 Splicing, Preproinsulin & Proteasomes (pp. 585–591)',
        '- **mRNA Maturation Inside Nucleus (`B2.2` decoupling):** Immediately post-transcription, eukaryotes add a **`5\' methyl-G cap`** (`exonuclease shield + small-ribosome dock`), add a **`3\' ~200-A poly-A tail`** (`cytoplasmic half-life stability`), and use spliceosomes to remove non-coding **introns** while joining **exons**.\n- **Alternative Splicing (`TNNT2`, `p. 587`):** Selective exon skipping—illustrated by embryonic vs adult cardiac Troponin T (**`TNNT2` Exon 5**) muscles—expands `~20,000` human protein-coding genes into `>100,000` distinct protein isoforms.\n- **80S Ribosome (`E/P/A` Sites) & Post-Translational Cleavage (`p. 590`):** Initiator `Met-tRNA` docks at `AUG` in the **P-site**; incoming aminoacyl-tRNAs enter **A-site** where **rRNA ribozyme (`A2.1`)** catalyzes peptide transfer before spent tRNAs exit **E-site**. Nascent **preproinsulin** sheds its N-terminal `24-aa` signal peptide inside rER -> proinsulin -> loses central **`C-peptide`** inside Golgi/secretory granules yielding active two-chain insulin (`B1.2`), while aged or misfolded cytosolic proteins get tagged with poly-**ubiquitin** and recycled into amino acids inside barrel-shaped **proteasomes (`p. 591`)**!'
      ),
      eq(
        '\\text{PCR Copies} = N_0 \\cdot 2^n \\qquad n_{\\text{aa, ORF}} = \\frac{\\text{nt}_{\\text{coding}}}{3} - 1\\text{ (stop codon)}',
        'Exponential Taq PCR amplification equation and Open Reading Frame (ORF) mRNA-to-polypeptide length formula (subtracting 1 non-coding stop codon).',
        [
          { symbol: 'N_0, n', meaning: 'Starting template copies and number of 95°/55°/72° thermocycles' },
          { symbol: '-1', meaning: 'Terminal UAA/UAG/UGA stop codon terminates translation without adding an amino acid' },
        ]
      ),
      diag(BIO_V3_D11_GEL_ORF_WORKED),
      h2('4. Nature of Science & Cross-Theme Synthesis (Allott p. 561 & 592)'),
      callout(
        'tok_nos',
        'NOS & TOK: "Most Beautiful Experiment in Biology" (Meselson–Stahl) & Proofreading Reliability',
        'Historians routinely honor Meselson and Stahl (`1958`, `Allott p. 561`) as *"the most beautiful experiment in biology"* because a single physical density assay simultaneously yielded mutually exclusive predictions for ALL THREE competing theories (**Conservative**: `2` bands at Gen 1; **Dispersive**: `1` intermediate band shifting endlessly across Gen 2; **Semi-Conservative**: `1` intermediate band at Gen 1 splitting cleanly into `2` equal bands at Gen 2). Notice how coupling `¹⁵N` labeling cleanly with `CsCl` density ultracentrifugation resolved an atomic topology question decades before direct molecular sequencing!'
      ),
      p(
        'Pause to see how `D1.1–D1.2` closes Year 1 biology into one unified mechanistic story: `A1.2` antiparallel `3\'->5\'` base-pairing guides `D1.1` Pol III accuracy; `A2.1` catalytic `rRNA` (`ribozyme`) drives `D1.2` translation across `B2.2` compartmentalized nuclei/rER/Golgi; `C1.1` enzymology powers every helicase, Taq polymerase, and proteasome; and all `30–32 ATP` harvested in `C1.2` and fixed in `C1.3` fuel cellular replication and homeostasis (`D2.3`) cleanly!'
      ),
      p(
        'Three empirical DBQs from Allott & Mindorff (`pp. 565, 567, 583`) guarantee peak readiness on Paper 1B and Paper 2. First, in **Okazaki\'s ³H-Thymidine Pulse–Chase Centrifuge Experiment (`Allott p. 567`)**, Reiji and Tsuneko Okazaki exposed replicating *E. coli* to radioactive **³H-thymidine** for a brief **`2-second pulse`**, then either halted replication instantaneously or chased with non-radioactive thymidine for `15 s -> 60 s -> 120 s` before alkali sucrose-gradient ultracentrifugation (`which separates single DNA strands cleanly by fragment length`). During the `2 s pulse`, over `80%` of radioactivity sedimented slowly in short **`~1,000–2,000 nt` peaks (`Okazaki fragments`)**; during longer unlabeled **chases**, slow peaks vanished cleanly while giant high-molecular-weight **`>100,000 nt`** peaks exploded—proving short lagging fragments are synthesized transiently and stitched seamlessly afterward by **DNA Pol I + DNA Ligase**! Second, in **forensic `D1S80` VNTR profiling (`p. 565`)**, diploid individuals display either two distinct gel bands (`heterozygote`) or one thicker double-intensity band (`homozygote`) across `16 bp` tandem repeat alleles; ethically, non-coding VNTR profiles establish biological kinship or criminal exclusion without exposing disease-gene sequences (`privacy protection`), though identical monozygotic twins still match `100%`. Third, within **`D1.2` codon degeneracy (`wobble` at nucleotide base 3)**, `61` sense codons encode `20` amino acids (`e.g., all four CUU/CUC/CUA/CUG specify Leucine`), buffering organisms against many single-base point substitutions (`silent/synonymous mutations` altering `1°` DNA without corrupting `3°` enzyme folding!).'
      ),
      h2('5. Exam Markscheme Lexicon (D1.1–D1.2)'),
      terms([
        {
          term: 'Meselson–Stahl Semi-Conservative Evidence',
          definitionMarkdown: 'Gen 1 (`¹⁴N`) forms one intermediate `¹⁵N/¹⁴N` band (`kills conservative`); Gen 2 splits 50:50 intermediate + light (`kills dispersive`).',
          markschemeKeyword: 'Gen 1 single hybrid band + Gen 2 two bands (hybrid + light)',
        },
        {
          term: 'Leading vs Okazaki Lagging Strands (HL)',
          definitionMarkdown: 'DNA Pol III builds strictly `5\'->3\'`: leading strand elongates continuously toward fork; lagging strand builds short Okazaki segments from RNA primers later replaced by **DNA Pol I** and sealed by **ligase**.',
          markschemeKeyword: 'Pol III 5\'->3\' · discontinuous Okazaki · Pol I primer removal + ligase',
        },
        {
          term: 'PCR Temperatures & Taq Polymerase',
          definitionMarkdown: '`95 °C` denatures H-bonds -> `55 °C` anneals primers -> `72 °C` Taq extends `2ⁿ` copies (`Taq resists 95 °C denaturation`).',
          markschemeKeyword: '95° denature + 55° anneal + 72° Taq extension -> 2^n',
        },
        {
          term: 'VNTR Gel Electrophoresis Polarity',
          definitionMarkdown: 'Negatively charged DNA migrates toward positive anode; **shorter fragments move fastest** through agarose pores (`paternity requires matching child\'s non-maternal band`).',
          markschemeKeyword: 'negative DNA moves to + anode · short runs fastest',
        },
        {
          term: 'Alternative Splicing (TNNT2, HL)',
          definitionMarkdown: 'Spliceosome removes introns and mixes exons (`TNNT2` cardiac isoforms), multiplying proteome diversity well past gene count.',
          markschemeKeyword: 'differential exon retention from one gene -> multiple isoforms',
        },
        {
          term: 'Preproinsulin & Proteasome Turnover (HL)',
          definitionMarkdown: 'Signal + C-peptide cleavage activates `2-chain` insulin (`D1.2/B1.2`); poly-**ubiquitin** marks obsolete proteins for cylindrical **proteasome** degradation.',
          markschemeKeyword: 'post-translational cleavage activation vs ubiquitin-proteasome recycling',
        },
      ]),
    ],
  },
];
