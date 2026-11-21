import type { IBSubjectConfig } from './index';

export const CHEMISTRY_SL_CONFIG: IBSubjectConfig = {
  slug: 'chemistry-sl',
  name: 'Chemistry',
  shortName: 'Chem SL',
  level: 'SL',
  groupNumber: 4,
  firstAssessment: 'May 2025+ Guide',
  description:
    'IB Diploma Chemistry Standard Level (2025+ Guide): organized around Structure 1–3 (Models of matter, bonding, and classification) and Reactivity 1–3 (Energetics, kinetics/equilibrium, and reaction mechanisms) across all 21 official SL subtopics. Strictly excludes HL-only R1.4 Entropy & spontaneity and Paper 3.',
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
      duration: '1 hour 30 minutes total (with Paper 1B)',
      marks: 30,
      weightingPercent: 20,
      description:
        '30 four-option multiple-choice questions assessing SL Structure and Reactivity concepts with the IB Chemistry Data Booklet.',
      isExternal: true,
    },
    {
      name: 'Paper 1B — Data-Based & Experimental Skills',
      paperType: 'Paper 1B (Data-Based)',
      duration: '1 hour 30 minutes total (with Paper 1A)',
      marks: 25,
      weightingPercent: 16,
      description:
        'Data-based and laboratory technique questions testing titration, calorimetry, uncertainty propagation, gas stoichiometry at IB STP (22.7 dm³ mol⁻¹), and experimental design.',
      isExternal: true,
    },
    {
      name: 'Paper 2 — Short-Answer & Extended Response',
      paperType: 'Paper 2 (Structured & Extended)',
      duration: '1 hour 30 minutes',
      marks: 50,
      weightingPercent: 44,
      description:
        'Structured and extended-response questions integrating Structure 1–3 and Reactivity 1–3 with Data Booklet calculations and chemical mechanisms.',
      isExternal: true,
    },
    {
      name: 'Scientific Investigation (IA)',
      paperType: 'Internal Assessment',
      duration: '10 hours',
      marks: 24,
      weightingPercent: 20,
      description:
        'Individual experimental or database chemistry investigation (max 3,000 words) assessed on Research Design, Data Analysis, Conclusion, and Evaluation.',
      isExternal: false,
    },
  ],
  commandTerms: [
    'Classify',
    'Define',
    'Draw',
    'Label',
    'List',
    'Measure',
    'State',
    'Apply',
    'Calculate',
    'Describe',
    'Distinguish',
    'Estimate',
    'Identify',
    'Outline',
    'Analyse',
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
    'IB 2025+ Chemistry Standard Temperature and Pressure (STP) is 273.15 K (0 °C) and 100 kPa, where 1 mol of an ideal gas occupies 22.7 dm³ mol⁻¹ (SATP is 298.15 K and 100 kPa).',
    'Structured into 6 overarching themes (Structure 1–3 and Reactivity 1–3) with exactly 21 SL subtopics.',
    'Reactivity 1.4 (Entropy and spontaneity, ΔG = ΔH − TΔS) is strictly HL-only and is NOT part of Chemistry SL.',
    'Paper 3 is eliminated in the 2025+ curriculum; practical & data-analysis questions appear in Paper 1B.',
  ],
  iaOverview: {
    title: 'Scientific Investigation (Chemistry SL IA)',
    maxMarks: 24,
    wordLimit: '3,000 words maximum',
    weightingPercent: 20,
    summary:
      'Assessed equally (6 marks each) across Research Design, Data Analysis, Conclusion, and Evaluation under the 2025 Science IA rubric.',
  },
  units: [
    {
      code: 'S1',
      title: 'Structure 1: Models of the particulate nature of matter',
      guidanceNotes:
        'Covers elements/compounds/mixtures, kinetic molecular theory, atomic/isotope structure, electron configurations, mole calculations, and ideal gases at IB STP (22.7 dm³ mol⁻¹).',
      subtopics: [
        {
          code: 'S1.1',
          title: 'Introduction to the particulate nature of matter',
          teachingHours: 4,
          guidanceNotes:
            'Elements, compounds, homogeneous vs heterogeneous mixtures, and physical separation techniques (filtration, crystallization, simple/fractional distillation, paper/TLC chromatography). Kinetic molecular theory: solid/liquid/gas states, state symbols $(s), (l), (g), (aq)$, heating/cooling curves (constant temperature during phase plateaus as potential energy increases), and Kelvin conversion ($T(\\text{K}) = T(^\\circ\\text{C}) + 273.15$, average kinetic energy $E_k \\propto T$). IB STP $= 273.15\\text{ K}, 100\\text{ kPa}$ ($22.7\\text{ dm}^3\\text{ mol}^{-1}$); SATP $= 298.15\\text{ K}, 100\\text{ kPa}$.',
          keyConcepts: ['Kinetic molecular theory', 'Separation methods', 'Heating curves', 'Kelvin & IB STP 22.7 dm³ mol⁻¹'],
        },
        {
          code: 'S1.2',
          title: 'The nuclear atom',
          teachingHours: 3,
          guidanceNotes:
            'Subatomic particles (protons $+1$, neutrons $0$, electrons $-1$, relative masses $1, 1, \\approx 1/1836$), nuclear notation $^A_Z\\text{X}^{q}$, atomic number $Z$, mass number $A$, and isotopes (identical chemical reactivity, different physical properties like density/diffusion rate). Mass spectrometry principles and calculation of relative atomic mass $A_r$ from isotopic abundance.',
          keyConcepts: ['Nuclear notation', 'Isotopes', 'Mass spectra', 'Relative atomic mass Ar'],
        },
        {
          code: 'S1.3',
          title: 'Electron configurations',
          teachingHours: 4,
          guidanceNotes:
            'Electromagnetic spectrum ($c = \\lambda \\nu$, $E = h\\nu$); continuous vs hydrogen line emission spectra (Lyman UV to $n=1$, Balmer visible to $n=2$, Paschen IR to $n=3$; convergence at high energy). Energy levels ($2n^2$), subshells ($s, p, d, f$), spherical $s$ and dumbbell $p_x, p_y, p_z$ orbital shapes, Aufbau principle, Hund’s rule, Pauli exclusion, orbital box diagrams, and condensed electron configurations through $Z=36$ including Cr ($[\\text{Ar}]3d^5 4s^1$) and Cu ($[\\text{Ar}]3d^{10} 4s^1$) exceptions.',
          keyConcepts: ['Hydrogen emission spectrum', 'Aufbau/Hund/Pauli', 'Cr & Cu exceptions', 's/p/d orbitals'],
        },
        {
          code: 'S1.4',
          title: 'Counting particles by mass: The mole',
          teachingHours: 7,
          guidanceNotes:
            'Avogadro constant $N_A = 6.02 \\times 10^{23}\\text{ mol}^{-1}$; relative molecular/formula mass $M_r$ and molar mass $M$ ($\\text{g mol}^{-1}$); $n = m/M$; empirical vs molecular formulas from percentage composition and combustion data; solution molarity $c = n/V$ ($\\text{mol dm}^{-3}$), dilutions ($c_1 V_1 = c_2 V_2$), standard solutions, and volumetric acid–base titrations.',
          keyConcepts: ['Avogadro constant', 'Empirical vs molecular formula', 'Molarity c = n/V', 'Titrations'],
        },
        {
          code: 'S1.5',
          title: 'Ideal gases',
          teachingHours: 4,
          guidanceNotes:
            'Assumptions of the ideal gas model (negligible particle volume, no intermolecular forces, elastic collisions) and real gas deviations at high pressure and low temperature. Avogadro’s law, IB STP ($273.15\\text{ K}, 100\\text{ kPa}$) molar gas volume $V_m = 22.7\\text{ dm}^3\\text{ mol}^{-1}$ ($n = V / 22.7$), combined gas law ($\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}$), and ideal gas equation $PV = nRT$ ($R = 8.31\\text{ J K}^{-1}\\text{ mol}^{-1}$, $P$ in $\\text{Pa}$ with $V$ in $\\text{m}^3$, or $\\text{kPa}$ with $\\text{dm}^3$).',
          keyConcepts: ['Real vs ideal gases', 'IB STP 22.7 dm³ mol⁻¹', 'PV = nRT', 'Combined gas law'],
        },
      ],
    },
    {
      code: 'S2',
      title: 'Structure 2: Models of bonding and structure',
      guidanceNotes:
        'Connects ionic, covalent, and metallic bonding models to macroscopic physical properties and the bonding continuum.',
      subtopics: [
        {
          code: 'S2.1',
          title: 'The ionic model',
          teachingHours: 4,
          guidanceNotes:
            'Formation of cations and anions by electron transfer; electrostatic attraction in 3D ionic crystal lattices; predicting ionic formulas including polyatomic ions ($\\text{NH}_4^+, \\text{OH}^-, \\text{NO}_3^-, \\text{CO}_3^{2-}, \\text{SO}_4^{2-}, \\text{PO}_4^{3-}, \\text{HCO}_3^-$); lattice enthalpy trends with ionic charge and radius; high melting points, brittleness on shear, and electrical conductivity when molten or aqueous.',
          keyConcepts: ['Electrostatic lattice', 'Polyatomic ions', 'Brittleness & conductivity', 'Charge/radius trends'],
        },
        {
          code: 'S2.2',
          title: 'The covalent model',
          teachingHours: 12,
          guidanceNotes:
            'Shared electron pairs, Lewis formulas (octet rule and incomplete octets like $\\text{BF}_3$, $\\text{BeCl}_2$), single/double/triple bond lengths & strengths, and coordination (dative) covalent bonds ($\\text{CO}, \\text{NH}_4^+, \\text{H}_3\\text{O}^+$). VSEPR theory up to 4 electron domains (linear $180^\\circ$, trigonal planar $120^\\circ$, bent $117^\\circ/104.5^\\circ$, tetrahedral $109.5^\\circ$, trigonal pyramidal $107^\\circ$). Electronegativity ($\\Delta\\chi$) and bond/molecular polarity; intermolecular forces (London dispersion, dipole–dipole, hydrogen bonding) explaining boiling points and solubility; covalent network solids (diamond, graphite, graphene, $\\text{C}_{60}$ fullerene, $\\text{Si}$, $\\text{SiO}_2$) and chromatography partitioning.',
          keyConcepts: ['Lewis & VSEPR (≤4 domains)', 'Dative bonds', 'Intermolecular forces', 'Covalent networks & C60'],
        },
        {
          code: 'S2.3',
          title: 'The metallic model',
          teachingHours: 2,
          guidanceNotes:
            'Electrostatic attraction between a regular lattice of positive metal ions and delocalized valence electrons; metallic bond strength increasing with ionic charge and smaller ionic radius; thermal/electrical conductivity, malleability/ductility (non-directional bonding), and alloys (substitutional/interstitial disruption of lattice sliding).',
          keyConcepts: ['Delocalized electrons', 'Malleability & conductivity', 'Alloys', 'Metallic bond strength'],
        },
        {
          code: 'S2.4',
          title: 'From models to materials',
          teachingHours: 4,
          guidanceNotes:
            'Bonding as a continuum using the van Arkel–Ketelaar bonding triangle (average electronegativity $\\bar{\\chi}$ vs electronegativity difference $\\Delta\\chi$); properties of alloys, ceramics, polymers, and composites; addition polymerization of alkenes (polyethene, PVC, PTFE) and condensation polymerization (polyesters and polyamides) with monomer identification and environmental considerations.',
          keyConcepts: ['Bonding triangle', 'Addition polymers', 'Condensation polymers', 'Composites & materials'],
        },
      ],
    },
    {
      code: 'S3',
      title: 'Structure 3: Classification of matter',
      guidanceNotes:
        'Organizes elements via periodic trends and classifies organic compounds by homologous series, functional groups, and structural isomerism.',
      subtopics: [
        {
          code: 'S3.1',
          title: 'The periodic table: Classification of elements',
          teachingHours: 7,
          guidanceNotes:
            'Periods, groups, and $s, p, d, f$ blocks; periodicity of atomic radius, ionic radius (cations smaller, anions larger, isoelectronic series), first ionization energy, electron affinity, and Pauling electronegativity; metallic to non-metallic progression across Period 3 and acid–base character of Period 3 oxides ($\\text{Na}_2\\text{O}, \\text{MgO}, \\text{Al}_2\\text{O}_3$ amphoteric, $\\text{SiO}_2, \\text{P}_4\\text{O}_{10}, \\text{SO}_2/\\text{SO}_3$); Group 1 alkali metal reactions with water and Group 17 halogen displacement reactions.',
          keyConcepts: ['s/p/d/f blocks', 'Atomic/ionic radius & IE1', 'Period 3 oxides', 'Group 1 & Group 17 reactivity'],
        },
        {
          code: 'S3.2',
          title: 'Functional groups: Classification of organic compounds',
          teachingHours: 7,
          guidanceNotes:
            'Empirical, molecular, full structural, condensed, and skeletal formulas; homologous series differing by $-\\text{CH}_2-$ and physical property trends; functional groups (alkane, alkene, alkyne, halogenoalkane, alcohol, ether, aldehyde, ketone, carboxylic acid, ester, amine, amide, nitrile, benzene/phenyl ring); IUPAC nomenclature up to 6 carbons; primary, secondary, and tertiary alcohols and halogenoalkanes; structural isomers (chain, position, functional group).',
          keyConcepts: ['Skeletal & structural formulas', 'Homologous series', 'IUPAC naming', 'Structural isomerism'],
        },
      ],
    },
    {
      code: 'R1',
      title: 'Reactivity 1: What drives chemical reactions?',
      guidanceNotes:
        'Covers calorimetry, Hess’s Law, bond enthalpies, and fuel energetics. NOTE: R1.4 (Entropy and spontaneity) is HL-only and excluded from Chemistry SL.',
      subtopics: [
        {
          code: 'R1.1',
          title: 'Measuring enthalpy changes',
          teachingHours: 4,
          guidanceNotes:
            'System vs surroundings; exothermic ($\\Delta H < 0$) vs endothermic ($\\Delta H > 0$) enthalpy level diagrams; standard conditions ($100\\text{ kPa}$, specified $T$ usually $298\\text{ K}$); calorimetry $q = mc\\Delta T$ ($c_{\\text{H}_2\\text{O}} = 4.18\\text{ J g}^{-1}\\text{ K}^{-1}$ or $\\text{kJ kg}^{-1}\\text{ K}^{-1}$) and $\\Delta H = -q / n_{\\text{limiting}}$; heat loss and incomplete combustion systematic errors with cooling-curve graphical extrapolation.',
          keyConcepts: ['Exothermic vs endothermic', 'Calorimetry q = mcΔT', 'Cooling curve extrapolation', 'Standard enthalpy'],
        },
        {
          code: 'R1.2',
          title: 'Energy cycles in reactions',
          teachingHours: 5,
          guidanceNotes:
            'Average bond enthalpy definition (gas-phase homolytic bond cleavage) and $\\Delta H = \\sum E(\\text{bonds broken}) - \\sum E(\\text{bonds formed})$, noting accuracy limits vs condensed states; Hess’s Law conservation of energy cycles; calculating $\\Delta H^\\circ$ using standard enthalpies of formation $\\Delta H_f^\\circ$ ($\\sum \\Delta H_f^\\circ(\\text{products}) - \\sum \\Delta H_f^\\circ(\\text{reactants})$) and standard enthalpies of combustion $\\Delta H_c^\\circ$ ($\\sum \\Delta H_c^\\circ(\\text{reactants}) - \\sum \\Delta H_c^\\circ(\\text{products})$).',
          keyConcepts: ['Average bond enthalpies', 'Hess’s Law', 'ΔHf° cycles', 'ΔHc° cycles'],
        },
        {
          code: 'R1.3',
          title: 'Energy from fuels',
          teachingHours: 4,
          guidanceNotes:
            'Complete vs incomplete combustion of hydrocarbons ($\\text{CO}_2$ vs $\\text{CO}/\\text{C}$); fossil fuels (coal, crude oil, natural gas) vs renewable biofuels (bioethanol, biodiesel) and carbon neutrality considerations; specific energy ($\\text{kJ g}^{-1}$) and energy density ($\\text{kJ cm}^{-3}$); hydrogen and methanol fuel cells (half-equations in acidic and alkaline electrolytes) vs combustion.',
          keyConcepts: ['Complete vs incomplete combustion', 'Specific energy vs density', 'Biofuels', 'Hydrogen & methanol fuel cells'],
        },
      ],
    },
    {
      code: 'R2',
      title: 'Reactivity 2: How much, how fast and how far?',
      guidanceNotes:
        'Connects stoichiometry (including 22.7 dm³ mol⁻¹ at IB STP), collision theory and rates of reaction, and dynamic equilibrium / Le Chatelier’s principle.',
      subtopics: [
        {
          code: 'R2.1',
          title: 'How much? The amount of chemical change',
          teachingHours: 4,
          guidanceNotes:
            'Balancing equations with state symbols; mole ratios, limiting and excess reactants; theoretical yield vs experimental percentage yield ($\\frac{\\text{actual}}{\\text{theoretical}} \\times 100\\%$); atom economy ($\\frac{M_r\\text{ of desired product}}{\\sum M_r\\text{ of all reactants}} \\times 100\\%$) for green chemistry; reacting gas volume calculations using IB STP ($22.7\\text{ dm}^3\\text{ mol}^{-1}$) and back-titrations.',
          keyConcepts: ['Limiting reactants', 'Percentage yield', 'Atom economy', 'Gas stoichiometry (22.7 dm³ mol⁻¹)'],
        },
        {
          code: 'R2.2',
          title: 'How fast? The rate of chemical change',
          teachingHours: 5,
          guidanceNotes:
            'Rate of reaction ($-\\Delta[R]/\\Delta t$ or $\\Delta[P]/\\Delta t$, units $\\text{mol dm}^{-3}\\text{ s}^{-1}$), experimental monitoring (mass loss, gas syringe, colorimetry, pH/conductivity); collision theory (sufficient $E \\ge E_a$ and proper orientation); Maxwell–Boltzmann energy distribution curves at different temperatures and with catalysts (lowering $E_a$ via alternative pathway without changing $\\Delta H$); effects of concentration, pressure, surface area, and temperature.',
          keyConcepts: ['Collision theory', 'Maxwell–Boltzmann curve', 'Activation energy Ea', 'Catalyst pathway'],
        },
        {
          code: 'R2.3',
          title: 'How far? The extent of chemical change',
          teachingHours: 4,
          guidanceNotes:
            'Reversible reactions and dynamic equilibrium in closed systems (forward rate equals reverse rate; macroscopic concentrations constant); homogeneous equilibrium constant expression $K_c = \\frac{[\\text{C}]^c[\\text{D}]^d}{[\\text{A}]^a[\\text{B}]^b}$ and magnitude interpretation ($K_c \\gg 1$ vs $K_c \\ll 1$); reaction quotient $Q$ comparison to predict shift direction; Le Chatelier’s principle predictions for concentration, pressure/volume (gas moles), temperature (only factor altering $K_c$), and catalysts (faster attainment, $K_c$ unchanged).',
          keyConcepts: ['Dynamic equilibrium', 'Kc and Q', 'Le Chatelier’s principle', 'Temperature effect on Kc'],
        },
      ],
    },
    {
      code: 'R3',
      title: 'Reactivity 3: What are the mechanisms of chemical change?',
      guidanceNotes:
        'Covers Brønsted–Lowry proton transfer, redox and electrochemical cells, free-radical substitution, and nucleophilic/electrophilic mechanisms.',
      subtopics: [
        {
          code: 'R3.1',
          title: 'Proton transfer reactions',
          teachingHours: 7,
          guidanceNotes:
            'Brønsted–Lowry acid (proton donor) and base (proton acceptor); conjugate acid–base pairs and amphiprotic species ($\\text{H}_2\\text{O}, \\text{HCO}_3^-$); $\\text{pH} = -\\log_{10}[\\text{H}^+]$ ($[\\text{H}^+] = 10^{-\\text{pH}}$) and pH meter/universal indicator scales; ionic product of water $K_w = [\\text{H}^+][\\text{OH}^-] = 1.00 \\times 10^{-14}$ at $298\\text{ K}$ ($\\text{pH} + \\text{pOH} = 14$); strong vs weak acids/bases (complete vs partial dissociation, conductivity, rate with metals/carbonates); neutralization reactions ($\\text{H}^+ + \\text{OH}^- \\to \\text{H}_2\\text{O}$) and titration pH curve equivalence points; ocean acidification and acid deposition.',
          keyConcepts: ['Brønsted–Lowry conjugates', 'pH & Kw = 1.00×10⁻¹⁴', 'Strong vs weak acids', 'Neutralization & pH curves'],
        },
        {
          code: 'R3.2',
          title: 'Electron transfer reactions',
          teachingHours: 9,
          guidanceNotes:
            'Oxidation and reduction (electron transfer and oxidation state changes); deducing oxidation numbers and balancing redox half-equations in acidic solution ($\\text{H}^+, \\text{H}_2\\text{O}, e^-$); oxidizing vs reducing agents and reactivity series / halogen displacement; Winkler BOD titration for dissolved oxygen; voltaic (galvanic) cells (spontaneous, anode oxidation $-$, cathode reduction $+$, salt bridge) vs electrolytic cells (non-spontaneous, anode $+$, cathode $-$, molten binary salts like $\\text{NaCl}(l)$ vs $\\text{PbBr}_2(l)$).',
          keyConcepts: ['Oxidation states', 'Acidic half-equations', 'Voltaic vs electrolytic cells', 'Primary organic oxidation/reduction'],
        },
        {
          code: 'R3.3',
          title: 'Electron sharing reactions',
          teachingHours: 2,
          guidanceNotes:
            'Homolytic bond fission producing unpaired-electron free radicals (vs heterolytic fission producing ions); photochemical free-radical substitution of alkanes with halogens ($\\text{Cl}_2, \\text{Br}_2$ under UV light): initiation ($\\text{Cl}_2 \\xrightarrow{h\\nu} 2\\text{Cl}\\cdot$), propagation steps, and termination steps.',
          keyConcepts: ['Homolytic fission', 'Free radicals', 'Initiation/propagation/termination', 'UV alkane halogenation'],
        },
        {
          code: 'R3.4',
          title: 'Electron-pair sharing reactions',
          teachingHours: 4,
          guidanceNotes:
            'Nucleophiles (electron-pair donors with lone pairs/negative charge: $\\text{OH}^-, \\text{NH}_3, \\text{H}_2\\text{O}$) vs electrophiles (electron-pair acceptors: $\\text{H}^+, \\text{Br}^{\\delta+}$); heterolytic fission; nucleophilic substitution of primary halogenoalkanes with $\\text{OH}^-(aq)$ to form alcohols; electrophilic addition reactions of symmetrical and unsymmetrical alkenes with $\\text{H}_2$ (Ni catalyst), $\\text{X}_2$ (bromine water test decolorization), $\\text{HX}$, and $\\text{H}_2\\text{O}(g)$ ($\\text{H}_3\\text{PO}_4$ catalyst).',
          keyConcepts: ['Nucleophiles vs electrophiles', 'Heterolytic fission', 'Nucleophilic substitution', 'Alkene electrophilic addition'],
        },
      ],
    },
  ],
};
