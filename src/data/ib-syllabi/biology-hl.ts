import type { IBSubjectConfig } from './index';

export const BIOLOGY_HL_CONFIG: IBSubjectConfig = {
  slug: 'biology-hl',
  name: 'Biology',
  shortName: 'Bio HL',
  level: 'HL',
  groupNumber: 4,
  firstAssessment: 'May 2025 (Class of 2028)',
  description:
    'IB Diploma Biology Higher Level (2025+ Guide): four overarching themes (Unity and diversity, Form and function, Interaction and interdependence, Continuity and change) spanning all 40 subtopics across molecules, cells, organisms, and ecosystems.',
  examPaperTypes: [
    'Paper 1A (MCQ)',
    'Paper 1B (Data-Based)',
    'Paper 2 (Structured & Extended)',
  ],
  paper_types: [
    'Paper 1A (MCQ)',
    'Paper 1B (Data-Based)',
    'Paper 2 (Structured & Extended)',
  ],
  assessmentComponents: [
    {
      name: 'Paper 1A — Multiple Choice',
      paperType: 'Paper 1A (MCQ)',
      duration: '2 hours total (with Paper 1B)',
      marks: 40,
      weightingPercent: 19,
      description:
        '40 four-option multiple-choice questions assessing SL and HL syllabus understandings and application.',
      isExternal: true,
    },
    {
      name: 'Paper 1B — Data-Based & Experimental Skills',
      paperType: 'Paper 1B (Data-Based)',
      duration: '2 hours total (with Paper 1A)',
      marks: 35,
      weightingPercent: 17,
      description:
        'Four data-based questions testing experimental methodology, uncertainty, microscopy, statistical tests, and unfamiliar biological contexts.',
      isExternal: true,
    },
    {
      name: 'Paper 2 — Data-Based, Short-Answer & Extended Response',
      paperType: 'Paper 2 (Structured & Extended)',
      duration: '2 hours 30 minutes',
      marks: 80,
      weightingPercent: 44,
      description:
        'Section A: data-based and structured short-answer questions across Themes A–D. Section B: two extended-response essay questions (choice of two out of three prompts).',
      isExternal: true,
    },
    {
      name: 'Scientific Investigation (IA)',
      paperType: 'Internal Assessment',
      duration: '10 hours',
      marks: 24,
      weightingPercent: 20,
      description:
        'Individual open-ended scientific investigation (max 3,000 words) assessed on Research Design, Data Analysis, Conclusion, and Evaluation.',
      isExternal: false,
    },
  ],
  commandTerms: [
    'Define',
    'Draw',
    'Label',
    'List',
    'Measure',
    'State',
    'Annotate',
    'Calculate',
    'Describe',
    'Distinguish',
    'Estimate',
    'Identify',
    'Outline',
    'Analyse',
    'Comment',
    'Compare',
    'Compare and contrast',
    'Construct',
    'Deduce',
    'Determine',
    'Discuss',
    'Evaluate',
    'Explain',
    'Justify',
    'Predict',
    'Sketch',
    'Suggest',
  ],
  guidingPrinciples: [
    'Organized by 4 Themes (A–D) across 4 Levels of Organization: 1 Molecules, 2 Cells, 3 Organisms, 4 Ecosystems.',
    'Paper 3 has been discontinued in the 2025+ Biology curriculum; experimental skills are assessed in Paper 1B and the Scientific Investigation (IA).',
    'Six subtopics are exclusively HL ([HL]: A2.1, A2.3, A3.2, B3.3, C2.1, D2.2), and most remaining subtopics contain explicit HL extensions such as D2.3 quantitative water potential (Ψw = Ψs + Ψp).',
    'Mathematical tools include magnification calculations, chi-squared tests (association and goodness-of-fit), Simpson’s reciprocal index, Lincoln index, and Hardy-Weinberg equations.',
  ],
  iaOverview: {
    title: 'Scientific Investigation (Biology HL IA)',
    maxMarks: 24,
    wordLimit: '3,000 words maximum',
    weightingPercent: 20,
    summary:
      'Assessed equally (6 marks each) across Research Design, Data Analysis, Conclusion, and Evaluation under the 2025 Science IA rubric.',
  },
  units: [
    {
      code: 'A',
      title: 'Theme A: Unity and diversity',
      guidanceNotes:
        'Explores common molecular ancestry, origins and structure of cells, viral diversity, cladistic classification, speciation, and biodiversity conservation.',
      subtopics: [
        {
          code: 'A1.1',
          title: 'Water',
          isHlOnly: false,
          teachingHours: 3,
          guidanceNotes:
            'Polarity and hydrogen bonding; cohesion, adhesion, capillary action, solvent properties for hydrophilic/hydrophobic transport, high specific heat capacity, thermal conductivity, buoyancy, and viscosity (ringed seal vs black-throated loon). [HL Extension]: Extraplanetary origin of water on Earth (asteroids) and the habitable "Goldilocks" zone.',
          keyConcepts: ['Hydrogen bonds', 'Cohesion & adhesion', 'Thermal properties', 'Goldilocks zone [HL]'],
        },
        {
          code: 'A1.2',
          title: 'Nucleic acids',
          isHlOnly: false,
          teachingHours: 5,
          guidanceNotes:
            'Nucleotide structure (pentose, phosphate, nitrogenous base); sugar-phosphate covalent backbone; RNA vs DNA; complementary base pairing (A–T/U, C–G); double helix stability and universal genetic code. [HL Extension]: 5′→3′ directionality in replication/transcription/translation, purines vs pyrimidines, nucleosomes (8 histones + H1 linker), Hershey–Chase phage experiment, and Chargaff’s tetranucleotide falsification.',
          keyConcepts: ['Phosphodiester bond', 'Complementary pairing', 'Nucleosomes [HL]', 'Hershey–Chase [HL]'],
        },
        {
          code: 'A2.1',
          title: 'Origins of cells [HL]',
          isHlOnly: true,
          teachingHours: 3,
          guidanceNotes:
            '[HL Only] Prebiotic Earth reducing atmosphere, Miller–Urey synthesis of organic monomers, spontaneous assembly of amphipathic phospholipid bilayers into protocells/vesicles, RNA world hypothesis (ribozymes as catalyst + template), LUCA (Last Universal Common Ancestor) shared genetic code, and alkaline hydrothermal vents as plausible habitats.',
          keyConcepts: ['Prebiotic chemistry', 'Protocell vesicles', 'RNA world', 'LUCA', 'Hydrothermal vents'],
        },
        {
          code: 'A2.2',
          title: 'Cell structure',
          isHlOnly: false,
          teachingHours: 6,
          guidanceNotes:
            'Microscopy developments (light vs TEM/SEM, freeze-fracture, cryo-EM, fluorescent stains), magnification ($M = I/A$) and scale bars; prokaryotic vs eukaryotic ultrastructure (70S vs 80S ribosomes, naked vs histone-bound DNA); plant, animal, fungal cell comparison; atypical cells (aseptate fungal hyphae, skeletal muscle, red blood cells, phloem sieve tubes). [HL Extension]: Endosymbiotic theory evidence for mitochondria and chloroplasts, origin of cell differentiation and multicellularity.',
          keyConcepts: ['Light vs electron microscopy', 'Prokaryote vs eukaryote', 'Endosymbiosis [HL]', 'Multicellularity [HL]'],
        },
        {
          code: 'A2.3',
          title: 'Viruses [HL]',
          isHlOnly: true,
          teachingHours: 3,
          guidanceNotes:
            '[HL Only] Structural features shared by viruses (nucleic acid core—DNA or RNA, ss or ds—plus protein capsid; optional phospholipid envelope); obligate intracellular parasitism and lack of independent metabolism; bacteriophage lambda lytic vs lysogenic cycles; rapid evolution in HIV (reverse transcriptase errors) and influenza (antigenic drift/shift); theories of viral origins (progressive, regressive, virus-first).',
          keyConcepts: ['Capsid & envelope', 'Lytic vs lysogenic cycle', 'HIV reverse transcriptase', 'Antigenic shift/drift'],
        },
        {
          code: 'A3.1',
          title: 'Diversity of organisms',
          isHlOnly: false,
          teachingHours: 4,
          guidanceNotes:
            'Variation within and between species; biological species concept (interbreeding to produce fertile offspring) and its difficulties (asexual organisms, horizontal gene transfer, hybrids); binomial nomenclature; chromosome number, karyograms, and genome size variation; eukaryotic DNA sequencing. [HL Extension]: Limitations of species definitions, dichotomous keys vs DNA barcoding/eDNA, and chromosome number changes via fusion/polyploidy.',
          keyConcepts: ['Biological species concept', 'Karyograms', 'Genome size', 'DNA barcoding [HL]'],
        },
        {
          code: 'A3.2',
          title: 'Classification and cladistics [HL]',
          isHlOnly: true,
          teachingHours: 4,
          guidanceNotes:
            '[HL Only] Limitations of traditional Linnaean morphology-based hierarchy; clades (monophyletic groups from a common ancestor and all descendants); cladograms built from base/amino acid sequences; molecular clocks and assumptions of constant mutation rates; three-domain classification (Bacteria, Archaea, Eukarya based on rRNA); reclassification examples such as the Figwort family (*Scrophulariaceae*).',
          keyConcepts: ['Cladograms', 'Molecular clocks', 'Three domains', 'Reclassification (Figworts)'],
        },
        {
          code: 'A4.1',
          title: 'Evolution and speciation',
          isHlOnly: false,
          teachingHours: 5,
          guidanceNotes:
            'Evolution as change in heritable characteristics of a population over generations; evidence from DNA/protein sequences, selective breeding (artificial selection), homologous structures (pentadactyl limb) vs analogous structures via convergent evolution; speciation via reproductive isolation and differential selection. [HL Extension]: Barriers to hybridization, allopatric vs sympatric speciation (apple maggot fly, *Rhagoletis pomonella*), polyploidy in plants (*Allium*), and adaptive radiation (Darwin’s finches).',
          keyConcepts: ['Homologous vs analogous', 'Convergent evolution', 'Allopatric & sympatric [HL]', 'Polyploidy [HL]'],
        },
        {
          code: 'A4.2',
          title: 'Conservation of biodiversity',
          isHlOnly: false,
          teachingHours: 3,
          guidanceNotes:
            'Three levels of biodiversity (ecosystem, species, genetic); anthropogenic causes of the current biodiversity crisis (habitat loss, overexploitation, invasive species, pollution, climate change) with case studies (e.g., North Island giant moa, Caribbean monk seal, Dipterocarps); conservation strategies: in situ (protected areas, rewilding) vs ex situ (zoos, seed banks, botanic gardens) and EDGE (Evolutionarily Distinct and Globally Endangered) species prioritization.',
          keyConcepts: ['Biodiversity crisis', 'In situ vs ex situ', 'EDGE species', 'Anthropogenic extinction'],
        },
      ],
    },
    {
      code: 'B',
      title: 'Theme B: Form and function',
      guidanceNotes:
        'Examines biomolecules, membrane transport, compartmentalized organelles, cell specialization, gas exchange, vascular transport, musculoskeletal motility, and ecological adaptations.',
      subtopics: [
        {
          code: 'B1.1',
          title: 'Carbohydrates and lipids',
          isHlOnly: false,
          teachingHours: 4,
          guidanceNotes:
            'Carbon tetravalency and molecular diversity; condensation (anabolic) and hydrolysis (catabolic) reactions; monosaccharides (ribose, alpha/beta-glucose), polysaccharides (amylose/amylopectin starch, glycogen, cellulose structure-to-function), glycoproteins in cell-cell recognition (ABO antigens); lipids: hydrophobicity, triglycerides for long-term energy/insulation, saturated vs unsaturated fatty acids, phospholipids (amphipathic bilayer), and nonpolar steroids (estradiol, testosterone).',
          keyConcepts: ['Condensation/hydrolysis', 'Starch/glycogen/cellulose', 'Glycoproteins', 'Amphipathic phospholipids'],
        },
        {
          code: 'B1.2',
          title: 'Proteins',
          isHlOnly: false,
          teachingHours: 5,
          guidanceNotes:
            'General structure of amino acids (20 coded, R-group diversity, dietary essential amino acids); peptide bond formation; pH and temperature effects on conformation and irreversible denaturation. [HL Extension]: Primary, secondary (alpha-helix, beta-pleated sheet via H-bonds), tertiary (ionic, disulfide, hydrophobic interactions), and quaternary structure (insulin, collagen, hemoglobin); polar vs nonpolar amino acid positioning in soluble vs integral membrane proteins; fibrous vs globular proteins.',
          keyConcepts: ['Peptide bond', 'Denaturation', 'Four structural levels [HL]', 'Fibrous vs globular [HL]'],
        },
        {
          code: 'B2.1',
          title: 'Membranes and membrane transport',
          isHlOnly: false,
          teachingHours: 5,
          guidanceNotes:
            'Fluid mosaic model (phospholipid bilayer, integral/peripheral glycoproteins, cholesterol); simple diffusion, facilitated diffusion (channel & carrier proteins), osmosis (aquaporins), and ATP-driven active transport; membrane permeability and vesicle endocytosis/exocytosis. [HL Extension]: Fatty acid tail saturation and cholesterol modulation of fluidity across temperatures; gated ion channels (voltage-gated Na+/K+, ligand-gated nicotinic ACh receptor); sodium-potassium pump (3 Na+ out, 2 K+ in); sodium-dependent glucose cotransporters (SGLT1); cell adhesion molecules (CAMs).',
          keyConcepts: ['Fluid mosaic model', 'Passive vs active transport', 'Na+/K+ pump [HL]', 'Gated channels [HL]'],
        },
        {
          code: 'B2.2',
          title: 'Organelles and compartmentalization',
          isHlOnly: false,
          teachingHours: 3,
          guidanceNotes:
            'Organelles as discrete subunits in eukaryotic cytoplasm; advantages of compartmentalization (concentrated enzymes/substrates, isolated pH/harmful hydrolytic enzymes like lysosomes); double nuclear membrane with pores allowing transcription/translation separation. [HL Extension]: Free vs rER-bound ribosomes, rER-to-Golgi vesicle trafficking and exocytosis, mitochondrial adaptations (cristae surface area, small matrix volume for H+ gradient), chloroplast thylakoid spaces and stroma, and nuclear breakdown/reassembly in mitosis.',
          keyConcepts: ['Compartmentalization', 'Double nuclear membrane', 'rER–Golgi pathway [HL]', 'Cristae & thylakoids [HL]'],
        },
        {
          code: 'B2.3',
          title: 'Cell specialization',
          isHlOnly: false,
          teachingHours: 3,
          guidanceNotes:
            'Totipotent, pluripotent, and multipotent stem cells; differentiation via differential gene expression (not gene loss); stem cell niches (bone marrow, hair follicle); surface area-to-volume ratio constraint on cell size; structure-function adaptations in Type I and II pneumocytes, striated muscle fibers, cardiac myocytes, erythrocytes, sperm, and egg cells.',
          keyConcepts: ['Stem cell potency', 'SA:V ratio', 'Type I/II pneumocytes', 'Stem cell niches [HL]'],
        },
        {
          code: 'B3.1',
          title: 'Gas exchange',
          isHlOnly: false,
          teachingHours: 4,
          guidanceNotes:
            'Gas exchange surfaces (thin, moist, large SA, concentration gradients); mammalian ventilation (diaphragm, external/internal intercostals, pressure-volume changes); alveolar capillary adaptations & surfactant; spirometry (tidal volume, vital capacity, ventilation rate); plant leaf mesophyll, waxy cuticle, and guard cell stomatal control. [HL Extension]: Cooperative O2 binding in adult hemoglobin (sigmoid dissociation curve), Bohr shift with CO2/pH, myoglobin oxygen storage curve, and fetal hemoglobin higher oxygen affinity.',
          keyConcepts: ['Ventilation mechanics', 'Spirometry', 'Bohr shift [HL]', 'Fetal hemoglobin [HL]'],
        },
        {
          code: 'B3.2',
          title: 'Transport',
          isHlOnly: false,
          teachingHours: 5,
          guidanceNotes:
            'Capillary permeability and exchange; arteries (thick elastic/muscular walls) vs veins (valves, wide lumen); coronary heart disease risk factors; xylem vessel lignification, cohesion-tension transpiration pull, and root mineral uptake. [HL Extension]: Tissue fluid formation and lymphatic drainage; single circulation (bony fish) vs mammalian double circulation; cardiac cycle pressure/volume graphs, heart sounds, SA/AV node myogenic pacing; phloem sieve tube-companion cell active loading and pressure-flow translocation.',
          keyConcepts: ['Artery/capillary/vein', 'Transpiration pull', 'Cardiac cycle [HL]', 'Phloem translocation [HL]'],
        },
        {
          code: 'B3.3',
          title: 'Muscle and motility [HL]',
          isHlOnly: true,
          teachingHours: 4,
          guidanceNotes:
            '[HL Only] Sliding filament theory of sarcomere contraction: Z-lines, actin thin filaments, myosin thick filaments with cross-bridge heads, light/dark bands (I, A, H zones); roles of Ca2+ release from sarcoplasmic reticulum, troponin, tropomyosin, and ATP hydrolysis/binding; titin elastic role; antagonistic muscle pairs; synovial joint structures (capsule, cartilage, synovial fluid, ligaments, tendons) and internal/external skeletons (e.g., grasshopper, insect flight/earthworm hydrostatic).',
          keyConcepts: ['Sarcomere ultrastructure', 'Sliding filament model', 'Troponin–tropomyosin', 'Synovial joints'],
        },
        {
          code: 'B4.1',
          title: 'Adaptation to environment',
          isHlOnly: false,
          teachingHours: 3,
          guidanceNotes:
            'Habitat as the abiotic environment where a species lives; abiotic limiting factors (temperature, water, light, soil pH, salinity) and range of tolerance graphs (belt transects); adaptations of marram grass (*Ammophila*) to sand dunes and mangrove trees to saline anoxic soils; distribution of terrestrial biomes (tropical rainforest, temperate forest, taiga, grassland, desert, tundra) determined by temperature and precipitation; coral reef abiotic conditions.',
          keyConcepts: ['Range of tolerance', 'Biomes (climate)', 'Sand dune & mangrove adaptations', 'Coral reefs'],
        },
        {
          code: 'B4.2',
          title: 'Ecological niches',
          isHlOnly: false,
          teachingHours: 4,
          guidanceNotes:
            'Niche as all biotic and abiotic roles of a species; oxygen modes (obligate anaerobes, facultative anaerobes, obligate aerobes); nutrition modes (photoautotrophs, chemoautotrophs, holozoic heterotrophs, saprotrophs, mixotrophs like *Euglena*, archaea); dentition reflecting herbivore vs omnivore vs carnivore diets; plant adaptations for harvesting light and nutrients; competitive exclusion principle and fundamental vs realized niche.',
          keyConcepts: ['Fundamental vs realized niche', 'Competitive exclusion', 'Modes of nutrition', 'Oxygen requirements'],
        },
      ],
    },
    {
      code: 'C',
      title: 'Theme C: Interaction and interdependence',
      guidanceNotes:
        'Covers enzyme kinetics and metabolism, cellular respiration, photosynthesis, chemical and neural signalling, organ-system integration, immunity, community ecology, and energy/matter flow.',
      subtopics: [
        {
          code: 'C1.1',
          title: 'Enzymes and metabolism',
          isHlOnly: false,
          teachingHours: 4,
          guidanceNotes:
            'Metabolism as the web of enzyme-catalyzed reactions; anabolism vs catabolism; active site specificity and induced-fit conformational change; molecular motion/collisions; effects of temperature, pH, and substrate concentration on enzyme rate; lowering activation energy ($E_a$). [HL Extension]: Intracellular vs extracellular enzymes; metabolic heat generation; linear chains vs cyclic pathways; competitive vs non-competitive inhibition; end-product allosteric inhibition (threonine → isoleucine); mechanism-based irreversible inhibition (penicillin on transpeptidase).',
          keyConcepts: ['Induced-fit model', 'Activation energy', 'Competitive vs non-competitive [HL]', 'End-product inhibition [HL]'],
        },
        {
          code: 'C1.2',
          title: 'Cell respiration',
          isHlOnly: false,
          teachingHours: 5,
          guidanceNotes:
            'ATP as universal energy currency (hydrolysis to ADP + Pi and regeneration); anaerobic respiration (lactate in humans, ethanol + CO2 in yeast); aerobic respiration yield; respirometer measurements. [HL Extension]: NAD/FAD coenzyme oxidation/reduction; glycolysis (phosphorylation, lysis, oxidation, net 2 ATP + 2 NADH); link reaction (decarboxylation, pyruvate → acetyl-CoA); Krebs cycle (2 CO2, 3 NADH, 1 FADH2, 1 ATP per acetyl-CoA); ETC, proton pumping into intermembrane space, O2 terminal electron acceptor, and ATP synthase chemiosmosis; lipid vs carbohydrate energy yields.',
          keyConcepts: ['ATP currency', 'Glycolysis & Krebs [HL]', 'Oxidative phosphorylation [HL]', 'Chemiosmosis [HL]'],
        },
        {
          code: 'C1.3',
          title: 'Photosynthesis',
          isHlOnly: false,
          teachingHours: 5,
          guidanceNotes:
            'Transformation of light energy to chemical energy; photolysis of water releasing O2; chlorophyll absorption vs action spectra; paper/TLC chromatography of pigments ($R_f$ values); limiting factors (light intensity, CO2 concentration, temperature) and Free Air CO2 Enrichment (FACE) experiments. [HL Extension]: Photosystems I and II; photophosphorylation (non-cyclic vs cyclic); thylakoid proton gradient and chemiosmosis; Calvin cycle (RuBisCO carbon fixation of RuBP → GP → TP using ATP & NADPH, RuBP regeneration).',
          keyConcepts: ['Absorption vs action spectrum', 'Limiting factors', 'PSI/PSII photophosphorylation [HL]', 'Calvin cycle [HL]'],
        },
        {
          code: 'C2.1',
          title: 'Chemical signalling [HL]',
          isHlOnly: true,
          teachingHours: 4,
          guidanceNotes:
            '[HL Only] Bacterial quorum sensing (e.g., *Vibrio fischeri* bioluminescence); animal signalling classes (hormones, neurotransmitters, cytokines, calcium ions); ligand-receptor specificity; transmembrane receptors (ion-channel acetylcholine receptors, GPCRs activating G-protein → adenylyl cyclase → cAMP second messenger cascade as in epinephrine, receptor tyrosine kinases as in insulin → GLUT4 translocation) vs intracellular steroid hormone receptors (estradiol/progesterone altering gene transcription).',
          keyConcepts: ['Quorum sensing', 'GPCR & cAMP cascade', 'Insulin RTK pathway', 'Intracellular steroid receptors'],
        },
        {
          code: 'C2.2',
          title: 'Neural signalling',
          isHlOnly: false,
          teachingHours: 5,
          guidanceNotes:
            'Neurons as excitable cells; resting potential (-70 mV maintained by Na+/K+ pump and K+ leak channels); action potential depolarization (voltage-gated Na+ influx) and repolarization (voltage-gated K+ efflux), refractory period; myelination and saltatory conduction across nodes of Ranvier; cholinergic synapses (Ca2+ influx, exocytosis, ACh receptors, acetylcholinesterase). [HL Extension]: Oscilloscope trace interpretation; excitatory (EPSP) vs inhibitory (IPSP) postsynaptic potentials and spatial/temporal summation; perception of pain; exogenous chemicals (neonicotinoids, cocaine).',
          keyConcepts: ['Resting & action potential', 'Saltatory conduction', 'Synaptic transmission', 'EPSP/IPSP summation [HL]'],
        },
        {
          code: 'C3.1',
          title: 'Integration of body systems',
          isHlOnly: false,
          teachingHours: 5,
          guidanceNotes:
            'Emergent properties across hierarchical organization (cells → tissues → organs → systems); CNS (brain & spinal cord) and PNS; spinal cord unconscious reflex arcs (pain withdrawal); cerebellum, hypothalamus, pituitary, and medulla oblongata roles (heart rate baroreceptors/chemoreceptors, ventilation rate); epinephrine fight-or-flight response; melatonin circadian control. [HL Extension]: Plant tropic responses—auxin efflux pumps (PIN3 proteins) mediating phototropism and gravitropism; positive feedback in ethylene-driven fruit ripening.',
          keyConcepts: ['Reflex arc', 'Medulla & hypothalamus', 'Melatonin circadian rhythm', 'Auxin PIN3 tropisms [HL]'],
        },
        {
          code: 'C3.2',
          title: 'Defence against disease',
          isHlOnly: false,
          teachingHours: 5,
          guidanceNotes:
            'Primary barriers (skin, mucous membranes, lysozyme, stomach acid); blood clotting cascade (platelets → clotting factors → prothrombin → thrombin → fibrinogen → fibrin mesh); innate phagocytes vs adaptive immunity; B lymphocytes, clonal selection, plasma cells, antibodies, and memory cells; Helper T cells activation; HIV destruction of CD4+ T cells; antibiotics (prokaryote-specific targets) and resistance; vaccines; zoonotic pathogens. [HL Extension]: Herd immunity threshold; monoclonal antibodies (hybridomas, pregnancy tests, targeted therapeutics).',
          keyConcepts: ['Clotting cascade', 'Clonal selection', 'HIV & antibiotic resistance', 'Monoclonal antibodies [HL]'],
        },
        {
          code: 'C4.1',
          title: 'Populations and communities',
          isHlOnly: false,
          teachingHours: 5,
          guidanceNotes:
            'Populations as interbreeding groups in an area; random quadrat sampling (sessile organisms) and Lincoln index capture-mark-recapture ($N = \\frac{M \\times n}{m}$) assumptions; carrying capacity ($K$), sigmoid logistic population growth curves, and density-dependent/independent limiting factors; intraspecific and interspecific interactions (herbivory, predation, mutualism, parasitism, pathogenicity, competition); allelopathy and antibiotic secretion; chi-squared test of association between two species.',
          keyConcepts: ['Quadrat & Lincoln index', 'Logistic growth & K', 'Interspecific interactions', 'Chi-squared association'],
        },
        {
          code: 'C4.2',
          title: 'Transfers of energy and matter',
          isHlOnly: false,
          teachingHours: 5,
          guidanceNotes:
            'Ecosystems as open systems exchanging energy and matter; sunlight as primary energy source (and deep-sea chemoautotrophs); food chains, food webs, and trophic levels; pyramids of energy (never inverted) and ~10% trophic transfer efficiency due to cellular respiration heat loss and incomplete digestion; primary and secondary production; carbon cycle fluxes, Keeling curve seasonal/secular CO2 oscillations, and nutrient cycling by decomposers.',
          keyConcepts: ['Open systems', 'Pyramids of energy', '10% trophic efficiency', 'Carbon cycle & Keeling curve'],
        },
      ],
    },
    {
      code: 'D',
      title: 'Theme D: Continuity and change',
      guidanceNotes:
        'Examines DNA replication, gene expression, mutations & CRISPR, mitosis/meiosis, epigenetics, quantitative water potential [HL], reproduction, inheritance, homeostasis, natural selection, stability, and climate change.',
      subtopics: [
        {
          code: 'D1.1',
          title: 'DNA replication',
          isHlOnly: false,
          teachingHours: 4,
          guidanceNotes:
            'Semiconservative DNA replication (Meselson–Stahl evidence); roles of helicase and DNA polymerase; PCR thermal cycling (denaturation, annealing, extension with Taq polymerase) and gel electrophoresis for DNA profiling/paternity/forensics. [HL Extension]: 5′→3′ synthesis constraint, continuous leading strand vs discontinuous lagging strand (Okazaki fragments), RNA primase, DNA polymerase III vs DNA polymerase I, DNA ligase, and DNA polymerase proofreading.',
          keyConcepts: ['Semiconservative replication', 'PCR & gel electrophoresis', 'Leading vs lagging strand [HL]', 'Okazaki fragments [HL]'],
        },
        {
          code: 'D1.2',
          title: 'Protein synthesis',
          isHlOnly: false,
          teachingHours: 5,
          guidanceNotes:
            'Transcription (RNA polymerase unwinding DNA and synthesizing mRNA from antisense/template strand); triplet genetic code (degeneracy & universality); translation at ribosomes (mRNA codons, tRNA anticodons, peptide bond formation); point mutation effects. [HL Extension]: Directionality of transcription/translation; promoter and transcription initiation; intron removal and alternative splicing in eukaryotes; polysomes; post-translational polypeptide modification and ubiquitin-proteasome protein recycling.',
          keyConcepts: ['Transcription & translation', 'Degenerate genetic code', 'Alternative splicing [HL]', 'Polysomes [HL]'],
        },
        {
          code: 'D1.3',
          title: 'Mutation and gene editing',
          isHlOnly: false,
          teachingHours: 3,
          guidanceNotes:
            'Gene mutations as random structural changes in DNA (base substitution, insertion, deletion, frameshift); sickle cell anemia point mutation (GAG → GTG, Glu → Val); environmental mutagens (ionizing radiation, chemical carcinogens); somatic vs germ-line mutations as source of new alleles. [HL Extension]: CRISPR-Cas9 mechanism (guide RNA targeting + Cas9 endonuclease double-strand break for knockout/knock-in); highly conserved vs rapidly evolving DNA sequences.',
          keyConcepts: ['Substitution & frameshift', 'Sickle cell anemia', 'CRISPR-Cas9 [HL]', 'Conserved sequences [HL]'],
        },
        {
          code: 'D2.1',
          title: 'Cell and nuclear division',
          isHlOnly: false,
          teachingHours: 4,
          guidanceNotes:
            'Equal division in mitosis (diploid clones for growth, tissue repair, asexual reproduction) vs reduction division in meiosis (haploid gametes, crossing over in prophase I, random orientation/independent assortment in metaphase I); animal cleavage furrow vs plant cell plate cytokinesis; nondisjunction and trisomy 21 (Down syndrome). [HL Extension]: Interphase (G1, S, G2) & M phase regulation by cyclins and CDKs; proto-oncogenes vs tumor suppressor genes and metastasis; calculating mitotic index from micrographs.',
          keyConcepts: ['Mitosis vs meiosis', 'Crossing over & nondisjunction', 'Cyclins & CDKs [HL]', 'Mitotic index [HL]'],
        },
        {
          code: 'D2.2',
          title: 'Gene expression [HL]',
          isHlOnly: true,
          teachingHours: 4,
          guidanceNotes:
            '[HL Only] Regulation of transcription by transcription factors, promoters, and enhancers; chromatin remodeling via histone acetylation (loosens DNA, increases transcription) and DNA cytosine methylation (silences expression); epigenetic inheritance across cell divisions (and transgenerational examples); environmental effects on gene expression (monozygotic twin divergence over time, air pollution, hormone-dependent gene regulation, *lac* operon principles).',
          keyConcepts: ['Transcription factors', 'Histone acetylation', 'DNA methylation', 'Epigenetics & twins'],
        },
        {
          code: 'D2.3',
          title: 'Water potential',
          isHlOnly: false,
          teachingHours: 3,
          guidanceNotes:
            'Osmolarity and water movement across semipermeable membranes from hypotonic (high water potential) to hypertonic (low water potential) solutions; isotonic medical IV fluids and organ preservation; contractile vacuoles in freshwater protists (*Paramecium*); plant turgor vs plasmolysis. [HL Extension]: Quantitative water potential $\\Psi_w = \\Psi_s + \\Psi_p$ (solute potential $\\Psi_s \\le 0$ and pressure potential $\\Psi_p$), plant cell incipient plasmolysis ($\Psi_p = 0$), and experimental determination via mass-change graphs.',
          keyConcepts: ['Osmolarity & tonicity', 'Turgor & plasmolysis', 'Quantitative Ψw = Ψs + Ψp [HL]', 'Incipient plasmolysis [HL]'],
        },
        {
          code: 'D3.1',
          title: 'Reproduction',
          isHlOnly: false,
          teachingHours: 5,
          guidanceNotes:
            'Sexual vs asexual reproduction trade-offs; human male & female reproductive anatomy; endocrine menstrual cycle regulation (FSH, LH, estradiol, progesterone positive/negative feedback); in vitro fertilization (IVF); angiosperm flower structure, animal/wind pollination, double fertilization/seed dispersal & germination triggers. [HL Extension]: Spermatogenesis vs oogenesis; acrosome reaction, cortical reaction preventing polyspermy, blastocyst implantation, hCG maintenance of corpus luteum, placental progesterone/estrogen shift, and oxytocin positive feedback in labor.',
          keyConcepts: ['Menstrual cycle hormones', 'IVF & pollination', 'Gametogenesis [HL]', 'Fertilization & oxytocin [HL]'],
        },
        {
          code: 'D3.2',
          title: 'Inheritance',
          isHlOnly: false,
          teachingHours: 5,
          guidanceNotes:
            'Gametes as haploid carriers of single alleles; dominant, recessive, codominant (ABO blood groups), incomplete dominance, and multiple allele inheritance; sex-linked X-chromosome traits (hemophilia, red-green color blindness); pedigree chart deduction; continuous polygenic inheritance (human height/skin color) vs discrete traits. [HL Extension]: Dihybrid crosses (9:3:3:1 unlinked ratio), autosomal gene linkage and chiasmata recombination frequency, and chi-squared goodness-of-fit test for genetic ratios.',
          keyConcepts: ['Pedigrees & ABO blood', 'Sex-linked & polygenic', 'Autosomal linkage [HL]', 'Chi-squared goodness-of-fit [HL]'],
        },
        {
          code: 'D3.3',
          title: 'Homeostasis',
          isHlOnly: false,
          teachingHours: 4,
          guidanceNotes:
            'Negative feedback loops restoring physiological set points; blood glucose regulation by pancreatic islets ($\alpha$-cells/glucagon, $\beta$-cells/insulin) and Type 1 vs Type 2 diabetes; mammalian thermoregulation (hypothalamus, vasodilation/vasoconstriction, sweating, shivering, brown adipose tissue). [HL Extension]: Osmoregulation in the kidney—nephron ultrafiltration (fenestrated capillaries, basement membrane, podocytes), proximal convoluted tubule selective reabsorption, Loop of Henle countercurrent medullary gradient, and ADH-regulated aquaporins in the collecting duct.',
          keyConcepts: ['Insulin & glucagon', 'Thermoregulation', 'Nephron & Loop of Henle [HL]', 'ADH osmoregulation [HL]'],
        },
        {
          code: 'D4.1',
          title: 'Natural selection',
          isHlOnly: false,
          teachingHours: 4,
          guidanceNotes:
            'Overproduction of offspring, heritable variation (mutation, meiosis, sexual reproduction), abiotic/biotic selection pressures, differential survival and reproduction; antibiotic resistance in bacteria; sexual selection (peacock plumage). [HL Extension]: Gene pools and allele frequency change; Hardy-Weinberg equilibrium conditions and calculations ($p + q = 1$, $p^2 + 2pq + q^2 = 1$); stabilizing, directional, and disruptive selection patterns.',
          keyConcepts: ['Selection pressures', 'Sexual selection', 'Hardy–Weinberg [HL]', 'Stabilizing/directional/disruptive [HL]'],
        },
        {
          code: 'D4.2',
          title: 'Stability and change',
          isHlOnly: false,
          teachingHours: 4,
          guidanceNotes:
            'Ecosystem resistance and resilience; tipping points (Amazon rainforest deforestation, eutrophication of aquatic lakes from nitrate/phosphate runoff); keystone species disproportionate trophic impact (sea otters/kelp); bioaccumulation and biomagnification (DDT, mercury, microplastics) in top predators; ecological restoration & rewilding (Hinewai Reserve). [HL Extension]: Primary vs secondary succession, cyclical succession, and climax community arrest by fire/grazing.',
          keyConcepts: ['Tipping points & eutrophication', 'Keystone species', 'Biomagnification', 'Primary/secondary succession [HL]'],
        },
        {
          code: 'D4.3',
          title: 'Climate change',
          isHlOnly: false,
          teachingHours: 3,
          guidanceNotes:
            'Anthropogenic greenhouse gas emissions ($\\text{CO}_2$, $\\text{CH}_4$) driving global warming; positive feedback cycles (ice–albedo reduction, melting permafrost releasing $\\text{CH}_4$, forest fires); ocean warming, stratification, and acidification coral bleaching; poleward/upslope species range shifts and phenological decoupling (caribou/tundra plants, great tits/caterpillars); carbon sequestration via afforestation, peatland restoration, and marine biological pump.',
          keyConcepts: ['Ice–albedo & permafrost feedback', 'Coral bleaching', 'Phenological mismatch', 'Carbon sequestration'],
        },
      ],
    },
  ],
};
