import type { ClassroomSeedNote } from '../types';
import {
  CHEM_V3_HEATING_CURVE,
  CHEM_V3_NUCLEAR_MASS_SPEC_EXPLORER,
  CHEM_V3_ISOTOPES_WORKED,
  CHEM_V3_BOHR_SPECTRA_SIM,
  CHEM_V3_ORBITAL_BOXES_EXPLORER,
  CHEM_V3_EMISSION_ENERGY_WORKED,
  CHEM_V3_MOLE_COMBUSTION_WORKED,
  CHEM_V3_IDEAL_GAS_STP_WORKED,
  CHEM_V3_REAL_VS_IDEAL_GAS_MATRIX,
  CHEM_V3_IONIC_LATTICE_EXPLORER,
  CHEM_V3_IONIC_CYCLE_STEPS,
  CHEM_V3_IONIC_FORMULAS_WORKED,
  CHEM_V3_VSEPR_3D_LAB,
  CHEM_V3_DATIVE_COVALENT_STEPS,
  CHEM_V3_VSEPR_DOMAINS_MATRIX,
  CHEM_V3_IMF_BOILING_EXPLORER,
  CHEM_V3_ALLOTROPES_NETWORK_MATRIX,
  CHEM_V3_CHROMATOGRAPHY_RF_WORKED,
  CHEM_V3_METALLIC_SLIP_STEPS,
  CHEM_V3_METALLIC_TRENDS_MATRIX,
  CHEM_V3_BONDING_CONTINUUM_LAB,
  CHEM_V3_ALLOY_POLYMER_EXPLORER,
  CHEM_V3_ALLOY_POLYMER_MATRIX,
  CHEM_V3_LAB_APPARATUS_EXPLORER,
  CHEM_V3_UNCERTAINTY_WORKED,
  CHEM_V3_ERRORS_TECHNIQUES_MATRIX,
} from './diagrams';

export const CHEMISTRY_SL_NOTES_S12: ClassroomSeedNote[] = [
  // =========================================================================
  // GUIDE 1 (S1.1–S1.2) — Preserved exact title
  // =========================================================================
  {
    topicCode: 'S1.1',
    title: 'Particulate Matter, Kinetic Curves & Mass Spectrometry (S1.1–S1.2)',
    summary:
      'Complete Bylikin S1.1–S1.2 textbook guide integrating matter classification, physical separation techniques, kinetic molecular theory, heating/cooling curve plateaus, Kelvin vs Celsius scales, nuclear atom structure, isotopic relative atomic mass algebra, and sector mass spectrometry.',
    sourceFileNames: [
      'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      'Day 1 - Classification of matter and intro to periodic trends.pdf',
      'worksheet-1-2-calculation-of-relative-masse-no-molar-mass.pdf',
      'worksheet-1-2-calculation-of-relative-masses-no-molar-mass-ans.pdf',
      'Textbook - S1.1-S1.3 End of Topic Review Answers .pdf',
      'RevisionDojo_IB_Chemistry_Cheatsheets_Merged.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Bylikin Guiding Questions (S1.1 Book p. 3 & S1.2 Book p. 20)',
        markdown:
          '- **S1.1:** *How can we model the particulate nature of matter?*\n- **S1.2:** *How do nuclei of atoms differ?*\n- **Linking Lens:** Why can physical separation isolate a homogeneous salt solution without breaking chemical bonds, whereas decomposing a compound requires a chemical reaction?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Classification of Matter & Physical Separation Techniques (S1.1.1, Book pp. 3–12)',
      },
      {
        type: 'paragraph',
        markdown:
          'Chemistry classifies all observable matter into **pure substances** (fixed composition and sharp physical constants such as melting and boiling points) and **mixtures** (variable composition whose components retain their individual chemical identities and separate via physical methods). As outlined in *Bylikin* (pp. 3–9) and classroom *Day 1* slides, pure substances divide into **elements**—composed of atoms sharing a single atomic number $Z$, whether monatomic ($\\ce{He}$), diatomic ($\\ce{N2}$, $\\ce{O2}$, $\\ce{Cl2}$), polyatomic ($\\ce{S8}$, $\\ce{P4}$), or giant lattices ($\\ce{Cu}$, diamond)—and **compounds**, where two or more different elements are chemically bonded in a fixed stoichiometric whole-number ratio (e.g., $\\ce{H2O}$, $\\ce{NaCl}$, $\\ce{CaCO3}$) with properties wholly distinct from their constituent elements.',
      },
      {
        type: 'paragraph',
        markdown:
          '**Mixtures** fall into two macroscopic categories depending on phase uniformity:\n\n- **Homogeneous mixtures (solutions):** Uniform composition and properties throughout a single phase (no visible boundary), such as aqueous $\\ce{NaCl(aq)}$, air ($\\ce{N2 + O2 + Ar}$), or substitutional metal alloys like brass ($\\ce{Cu + Zn}$).\n- **Heterogeneous mixtures:** Non-uniform composition displaying distinct phase interfaces, such as sand suspended in water, oil and water emulsions, or granite.\n\nBecause components in a mixture are held together only by intermolecular or weak physical interactions rather than fixed chemical stoichiometry, **five physical separation methods** exploit differences in particle size, boiling point, solubility, or partitioning:',
      },
      {
        type: 'paragraph',
        markdown:
          '| Separation Method | Physical Property Exploited | Laboratory Setup & Common IB Example | Key Limitation / Precision Note |\n| :--- | :--- | :--- | :--- |\n| **Filtration** | Particle size & insolubility | Separating insoluble precipitate (e.g., $\\ce{AgCl(s)}$ or sand) from aqueous filtrate using fluted filter paper | Cannot isolate dissolved solutes; solid retains traces of filtrate unless washed with deionized water and dried |\n| **Evaporation / Crystallization** | Boiling point gap & temperature-dependent solubility | Slow evaporation or cooling of saturated $\\ce{CuSO4(aq)}$ to harvest hydrated crystals | Boiling to dryness decomposes heat-sensitive salts (e.g., $\\ce{CuSO4.5H2O}$ turns anhydrous white) |\n| **Simple Distillation** | Large boiling point difference ($\\Delta T_b > 25^\\circ\\text{C}$) or non-volatile solute | Recovering pure distilled water from seawater or aqueous ink; thermometer bulb positioned opposite condenser side-arm | Fails to cleanly separate miscible liquids with close boiling points |\n| **Fractional Distillation** | Small boiling point differences between miscible liquids | Ethanol ($78.4^\\circ\\text{C}$) + water ($100^\\circ\\text{C}$) or crude oil fractions using a fractionating column of glass beads | Repeated vaporization–condensation cycles enrich the lower-b.p. component at column top |\n| **Paper / Thin-Layer Chromatography** | Differential partitioning between stationary and mobile phases | Ink pigments or amino acids separated using $R_f = d_{\\text{solute}} / d_{\\text{solvent}}$ | Baseline must be drawn in **graphite pencil**, never ink; eluent level must start below the baseline |',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Examiner Trap: Mixture Melting Range vs Pure Sharp Melting Point',
        markdown:
          'When evaluating purity in Paper 1B or IA synthesis labs (e.g., recrystallized aspirin), remember that **impurities both lower and broaden** the melting point range (melting over $4$–$8^\\circ\\text{C}$ instead of a sharp $1^\\circ\\text{C}$ window), because foreign particles disrupt crystal lattice packing.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Kinetic Molecular Theory, Kelvin Scale & State Transitions (S1.1.2–S1.1.3, Book pp. 13–17)',
      },
      {
        type: 'paragraph',
        markdown:
          'The **kinetic molecular theory (KMT)** models matter as tiny particles in continuous random motion whose speed scales with absolute temperature. Across the three common states of matter, energy interplay between particle kinetic energy and intermolecular attractions governs macroscopic volume, shape, density, and compressibility:\n\n- **Solids ($\\text{s}$):** Particles pack tightly in ordered or amorphous arrangements and only vibrate about fixed mean positions. Strong cohesive forces preserve fixed shape and volume with negligible compressibility.\n- **Liquids ($\\text{l}$):** Particles remain close together (comparable density to solids, incompressible) yet possess sufficient thermal energy to slide over neighbours, adopting container shape.\n- **Gases ($\\text{g}$):** Particles move rapidly in straight-line random paths separated by distances roughly $10\\times$ greater than particle diameters, making gases highly compressible, low density, and able to diffuse and effuse rapidly to fill any container.',
      },
      {
        type: 'equation',
        latex: 'T / \\text{K} = t / ^\\circ\\text{C} + 273.15 \\qquad \\text{and} \\qquad \\bar{E}_k = \\frac{3}{2} k_B T',
        caption: 'Absolute Kelvin temperature scale and direct proportionality to average translational kinetic energy (S1.1.3, Book p. 15).',
        variableLegend: [
          { symbol: 'T / K', meaning: 'Absolute thermodynamic temperature in kelvin (0 K = absolute zero, minimal particle motion)' },
          { symbol: 't / °C', meaning: 'Celsius temperature (note ΔT in K equals Δt in °C identically)' },
          { symbol: '\\bar{E}_k', meaning: 'Average kinetic energy per particle; depends ONLY on temperature T, not molar mass' },
        ],
      },
      {
        type: 'callout',
        variant: 'definition',
        title: 'Key Definitions: Phase Change Terminology (S1.1.2)',
        markdown:
          '- **Melting (fusion):** $\\text{s} \\to \\text{l}$ (endothermic). **Freezing:** $\\text{l} \\to \\text{s}$ (exothermic).\n- **Vaporization:** $\\text{l} \\to \\text{g}$ — either **evaporation** (surface particles escaping below boiling point at any temperature) or **boiling** (bubbles forming throughout liquid bulk when vapour pressure equals external atmospheric pressure).\n- **Condensation:** $\\text{g} \\to \\text{l}$. **Sublimation:** $\\text{s} \\to \\text{g}$ directly (e.g., $\\ce{CO2(s)}$ dry ice, $\\ce{I2(s)}$, $\\ce{C60}$). **Deposition:** $\\text{g} \\to \\text{s}$.',
      },
      {
        type: 'paragraph',
        markdown:
          'Crucially, at a constant heating power, a **heating curve** alternates between upward-sloping regions and horizontal **isothermal plateaus**. Along sloped segments, supplied heat raises average translational/vibrational **kinetic energy ($E_k$)**, raising temperature ($q = mc\\Delta T$). Along melting and boiling plateaus, temperature stops rising completely: average $E_k$ stays fixed while absorbed thermal energy increases **potential energy ($E_p$)** by breaking or weakening intermolecular attractions. Vaporization always exhibits a substantially wider plateau than fusion ($\\Delta H_{\\text{vap}}^\\circ \\gg \\Delta H_{\\text{fus}}^\\circ$, e.g., $40.7$ vs $6.01\\text{ kJ mol}^{-1}$ for water) because boiling completely separates molecules from all neighbours against atmospheric pressure rather than merely loosening rigid lattice geometry.',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_HEATING_CURVE,
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'Nature of Science & TOK Connection: Models and Absolute Zero (Book pp. 13–16)',
        markdown:
          'At the same temperature $T$, light $\\ce{He}$ atoms and heavy $\\ce{CO2}$ molecules possess the **identical average kinetic energy** $\\bar{E}_k = \\frac{1}{2}m\\bar{v}^2$, meaning $\\ce{He}$ moves far faster on average than $\\ce{CO2}$! Graham’s diffusion and Brownian motion empirically validate unobservable particles, yet KMT remains an idealized model whose limits emerge near absolute zero and under crushing pressures.',
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Subatomic Particles, Nuclear Notation & Isotopes (S1.2.1–S1.2.2, Book pp. 20–28)',
      },
      {
        type: 'paragraph',
        markdown:
          'Following Rutherford’s alpha-particle gold-foil scattering experiment—where most alpha particles passed undeflected (proving atoms are largely empty space) while a tiny fraction rebounded past $90^\\circ$ (proving a dense, positively charged central nucleus)—atomic architecture separates cleanly into two domains: a femtometre-scale **nucleus** containing **protons ($p^+$)** and **neutrons ($n^0$)** (nucleons), surrounded by quantized **electrons ($e^-$)** occupying a $10^5$-fold wider cloud. Nuclear identity uses the symbol $^A_Z \\text{X}^{q}$, where atomic number $Z$ equals proton count (defining the element), mass number $A = Z + N$ sums protons and neutrons, and electron count equals $Z - q$ for charge $q$.',
      },
      {
        type: 'paragraph',
        markdown:
          '| Subatomic Particle | Relative Mass | Relative Charge | Location & Role in Chemistry |\n| :--- | :--- | :--- | :--- |\n| **Proton ($p^+$)** | $1$ ($1.00728\\text{ u}$) | $+1$ | Nucleus; defines element atomic number $Z$ and effective nuclear pull |\n| **Neutron ($n^0$)** | $1$ ($1.00867\\text{ u}$) | $0$ | Nucleus; stabilizes strong nuclear force; varies between isotopes |\n| **Electron ($e^-$)** | $\\approx \\frac{1}{1836}$ ($0.00055\\text{ u}$) | $-1$ | Outer quantized shells; dictates bonding, spectra, and chemical reactivity |',
      },
      {
        type: 'paragraph',
        markdown:
          '**Isotopes** are atoms of the same element sharing identical proton number $Z$ (and thus identical neutral electron configuration) but differing neutron numbers $N$ and mass numbers $A$ (e.g., $^{35}_{17}\\text{Cl}$ vs $^{37}_{17}\\text{Cl}$, or $^1\\text{H},\\ ^2\\text{H},\\ ^3\\text{H}$). Because chemical reactions rearrange only outer valence electrons, isotopes of an element undergo **identical chemical reactions**. However, differing nuclear masses produce measurable **physical property differences**: heavier isotopes (e.g., $\\ce{D2O}$ vs $\\ce{H2O}$) display slightly higher densities ($1.11\\text{ vs }1.00\\text{ g cm}^{-3}$), marginally higher melting and boiling points ($3.8^\\circ\\text{C} / 101.4^\\circ\\text{C}$ for $\\ce{D2O}$), and slower rates of gaseous effusion ($v \\propto M^{-1/2}$). Radioactive isotopes such as $^{14}\\text{C}$ (radiocarbon dating), $^{60}\\text{Co}$ (radiotherapy), and $^{131}\\text{I}$ (thyroid imaging) decay via nuclear instability, a process completely distinct from valence chemistry.',
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Relative Atomic Mass Algebra & Mass Spectrometry (S1.2.3, Book pp. 29–31)',
      },
      {
        type: 'paragraph',
        markdown:
          'Rather than inconvenient $10^{-23}\\text{ g}$ absolute masses, chemistry anchors all atomic weights to the **carbon-12 ($^{12}\\text{C}$) scale**, assigning one unbound $^{12}\\text{C}$ atom a mass of exactly $12\\text{ atomic mass units (u)}$ ($1\\text{ u} = \\frac{1}{12} m(^{12}\\text{C})$). **Relative atomic mass ($A_r$)** is the dimensionless weighted average of naturally occurring isotopic masses relative to $\\frac{1}{12}$ the mass of one $^{12}\\text{C}$ atom. To measure isotopic masses and natural abundances empirically, a **mass spectrometer** vaporizes a sample under vacuum, ionizes atoms with high-energy electrons ($\\ce{X(g) + e- -> X+(g) + 2e-}$), accelerates ions across electric plates, deflects them in a magnetic field according to **mass-to-charge ratio ($m/z$)** (lighter or $+2$ doubly charged ions bend most sharply), and plots peak height (relative abundance) versus $m/z$.',
      },
      {
        type: 'equation',
        latex: 'A_r = \\frac{\\sum (m_i \\times \\%\\text{abundance}_i)}{100} = \\sum (m_i \\times f_i)',
        caption: 'Weighted average relative atomic mass formula (S1.2.3, Bylikin p. 29 & Worksheet 1.2).',
        variableLegend: [
          { symbol: 'A_r', meaning: 'Dimensionless relative atomic mass of the element (never attach g or g mol⁻¹ units!)' },
          { symbol: 'm_i', meaning: 'Relative isotopic mass (or mass number A_i when exact masses are omitted)' },
          { symbol: 'f_i', meaning: 'Fractional abundance summing to 1 (e.g., x and 1 − x for two isotopes)' },
        ],
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Critical Paper 1B & Worksheet 1.2 Warning: Units of Ar vs Molar Mass & +2 Peaks',
        markdown:
          '1. **$A_r$ and $M_r$ have NO units** (they are dimensionless ratios relative to $^{12}\\text{C} = 12$). Only molar mass $M$ carries $\\text{g mol}^{-1}$.\n2. Watch for **doubly charged ions ($\\ce{X^{2+}}$)** in mass spectra! For instance, $^{24}\\text{Mg}^{2+}$ appears at $m/z = 24/2 = 12$, NOT $24$.\n3. Diatomic halogen molecules such as $\\ce{Cl2}$ ($75\\%$ $^{35}\\text{Cl}$, $25\\%$ $^{37}\\text{Cl}$) yield atom peaks at $m/z = 35,\\ 37$ ($3:1$) AND molecular ions at $m/z = 70,\\ 72,\\ 74$ in a **$9 : 6 : 1$** binomial ratio.',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_NUCLEAR_MASS_SPEC_EXPLORER,
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_ISOTOPES_WORKED,
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Relative Atomic Mass (Ar)',
            definitionMarkdown: 'Weighted mean mass of the naturally occurring isotopes of an element relative to $\\frac{1}{12}$ of the mass of an atom of carbon-12.',
            markschemeKeyword: 'weighted mean / 1/12 mass of carbon-12 atom',
          },
          {
            term: 'Isotopes',
            definitionMarkdown: 'Atoms of the same element (same atomic number $Z$ / proton count) containing different numbers of neutrons (different mass numbers $A$).',
            markschemeKeyword: 'same protons / different neutrons',
          },
          {
            term: 'Homogeneous Mixture',
            definitionMarkdown: 'A mixture of uniform composition and properties throughout with no visible boundary between phases.',
            markschemeKeyword: 'uniform composition / single phase',
          },
          {
            term: 'Latent Heat Plateau',
            definitionMarkdown: 'Isothermal segment on a heating curve where thermal energy breaks intermolecular forces (potential energy rises) while average kinetic energy and temperature stay constant.',
            markschemeKeyword: 'overcome intermolecular forces / constant average Ek',
          },
          {
            term: 'Mass-to-Charge Ratio (m/z)',
            definitionMarkdown: 'Ratio of an ion’s mass number to its positive charge governing magnetic deflection radius in a mass spectrometer.',
            markschemeKeyword: 'm/z / deflection inversely related to m/z',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 2 (S1.3) — Preserved exact title
  // =========================================================================
  {
    topicCode: 'S1.3',
    title: 'Emission Spectra, Orbital Boxes & Electron Configurations (S1.3)',
    summary:
      'Complete Bylikin S1.3.1–S1.3.5 SL study guide covering continuous vs line emission spectra, Bohr hydrogen quantization, Lyman/Balmer/Paschen series, convergence ionization energy (Slide 25 J·s fix), atomic orbitals, Aufbau/Pauli/Hund filling, Cr/Cu anomalies, and 4s-before-3d cation ionization.',
    sourceFileNames: [
      'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      'Day 1.3.1 - Emission Spectrum.pdf',
      'Day 1.3.3 hydrogen emission spectrum.pdf',
      'worksheet-1-3-emission-spectra.pdf',
      'worksheet-1-3-emission-spectra Answers.pdf',
      'Day - electron configurations.pdf',
      'Day Practice Electron Configurations.pdf',
      'Electron configurations answers.pdf',
      '8 Electron-Configuration.pdf',
      '8 Electron-Configuration Answers.pdf',
      'Textbook - S1.1-S1.3 End of Topic Review Answers .pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Bylikin Guiding Questions (S1.3 Book p. 34)',
        markdown:
          '- **S1.3:** *How can we model the energy states of electrons in atoms?*\n- **Linking Lens:** Why does hydrogen emit discrete sharp coloured lines rather than a continuous rainbow, and how does electron configuration dictate periodic chemical behaviour in S3.1?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Electromagnetic Spectrum, Photon Quantization & Line Spectra (S1.3.1–S1.3.2, Book pp. 34–42)',
      },
      {
        type: 'paragraph',
        markdown:
          'When white light from a heated filament passes through a prism, it produces a **continuous spectrum** containing all visible wavelengths ($\\approx 400\\text{–}700\\text{ nm}$) uninterrupted. By stark contrast, when electricity excites low-pressure hydrogen gas inside a discharge tube and the emitted light is dispersed through a spectroscope, only **discrete sharp coloured lines** appear against a black background: an **emission line spectrum**. Equally, passing continuous white light through cold hydrogen vapour produces an **absorption line spectrum** in which dark missing lines sit at the exact same wavelengths emitted in excitation. As summarized in *Bylikin* (pp. 35–42) and *Day 1.3.1 / 1.3.3* slides, this one-to-one fingerprint proves that electrons inside atoms can occupy only **quantized discrete energy levels**, never arbitrary in-between energies.',
      },
      {
        type: 'equation',
        latex: 'c = \\lambda f \\qquad \\text{and} \\qquad \\Delta E = h f = \\frac{h c}{\\lambda}',
        caption: 'Planck–Einstein photon energy and electromagnetic wave relation (S1.3.1, Book pp. 36–39).',
        variableLegend: [
          { symbol: 'c', meaning: 'Speed of light in vacuum = 3.00 × 10⁸ m s⁻¹ (Data Booklet)' },
          { symbol: '\\lambda', meaning: 'Wavelength in metres (m); convert 1 nm = 10⁻⁹ m' },
          { symbol: 'f', meaning: 'Frequency in hertz (Hz or s⁻¹); inversely proportional to wavelength' },
          { symbol: 'h', meaning: 'Planck constant = 6.63 × 10⁻³⁴ J·s (joule-seconds; NOT J/s — Slide 25 fix)' },
          { symbol: '\\Delta E', meaning: 'Energy difference between upper and lower quantized energy shells in J' },
        ],
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Classroom Slide Errata Audited & Corrected (Day 1.3.3 & Slide 35)',
        markdown:
          '1. **Slide 25 Unit Fix:** Planck’s constant is **$h = 6.63 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$** (multiplication, NOT $\\text{J/s}$!), because $\\text{J}\\cdot\\text{s} \\times \\text{s}^{-1} = \\text{J}$.\n2. **Slide 35 Q1 Key:** Each line in a hydrogen emission spectrum directly corresponds to the **energy difference $\\Delta E$ between two energy levels** (Option B)—it does NOT directly plot an individual level or ionization state alone.\n3. Remember the inverse wavelength-energy ordering: **Red** ($\\sim 656\\text{ nm}$, lower $f$, smaller $\\Delta E$) vs **Violet/UV** ($\\sim 410\\text{ nm}$ or shorter, higher $f$, larger $\\Delta E$).',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Bohr Energy Shells, Spectral Series & Convergence Limit (S1.3.2–S1.3.3, Book pp. 40–43)',
      },
      {
        type: 'paragraph',
        markdown:
          'Niels Bohr assigned each allowed circular orbit a principal quantum number $n = 1, 2, 3, \\dots$ ($\\infty$ representing ionization). Absorbing an exact photon boosts the electron from a lower level $n_{\\text{low}}$ to a higher level $n_{\\text{high}}$ (**excitation**); subsequently, falling back down ($n_{\\text{high}} \\to n_{\\text{low}}$) releases a photon of energy $\\Delta E = E_{\\text{high}} - E_{\\text{low}}$. Notice a fundamental feature of atomic energy ladders: **consecutive energy levels converge (get progressively closer together) as $n$ increases** toward $n = \\infty$. Consequently, within any spectral series ending on the same lower shell $n_{\\text{low}}$, emission lines **converge at the high-frequency / high-energy / short-wavelength end** of the series!',
      },
      {
        type: 'paragraph',
        markdown:
          '| Spectral Series | Lower Destination Level ($n_{\\text{low}}$) | Electromagnetic Region | Diagnostic Transitions & Convergence Meaning |\n| :--- | :--- | :--- | :--- |\n| **Lyman series** | $n = 1$ (ground state) | **Ultraviolet (UV)** | $n=2\\to 1$ ($121.6\\text{ nm}$) up to **convergence $n=\\infty\\to 1$ ($91.2\\text{ nm}$, $1312\\text{ kJ mol}^{-1} = IE_1$ of H)** |\n| **Balmer series** | $n = 2$ | **Visible light** | $n=3\\to 2$ red ($656.3\\text{ nm}$), $4\\to 2$ cyan ($486.1\\text{ nm}$), $5\\to 2$ blue ($434.0\\text{ nm}$), $6\\to 2$ violet ($410.2\\text{ nm}$) |\n| **Paschen series** | $n = 3$ | **Infrared (IR)** | Smallest energy drops ($n=4\\to 3$, $5\\to 3$, etc.), longest wavelengths ($> 820\\text{ nm}$) |',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_BOHR_SPECTRA_SIM,
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_EMISSION_ENERGY_WORKED,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Sublevels, Atomic Orbitals & Spin-Box Rules (S1.3.4–S1.3.5, Book pp. 43–53)',
      },
      {
        type: 'paragraph',
        markdown:
          'Modern quantum mechanics replaces flat circular orbits with 3D probability regions called **atomic orbitals**, each capable of holding **at most two electrons** with opposite intrinsic spin ($\\uparrow\\downarrow$). Each main energy level $n$ holds a maximum of **$2n^2$ electrons** ($n=1 \\implies 2$; $n=2 \\implies 8$; $n=3 \\implies 18$; $n=4 \\implies 32$) and splits into $s$, $p$, $d$, and $f$ **sublevels**:\n\n- **$s$-sublevel ($1$ orbital, max $2e^-$):** Spherically symmetric around the nucleus; size increases with $n$ ($1s < 2s < 3s$).\n- **$p$-sublevel ($3$ degenerate orbitals $p_x, p_y, p_z$, max $6e^-$):** Dumbbell-shaped regions aligned orthogonally along the $x, y, z$ axes with a nodal plane at the nucleus.\n- **$d$-sublevel ($5$ orbitals, max $10e^-$) & $f$-sublevel ($7$ orbitals, max $14e^-$):** Complex multi-lobed geometries starting at $n=3$ ($3d$) and $n=4$ ($4f$).',
      },
      {
        type: 'paragraph',
        markdown:
          'Electrons fill ground-state configurations according to three non-negotiable quantum principles (*Bylikin* pp. 47–51):\n\n1. **Aufbau Principle:** Electrons occupy the lowest-energy sublevels available first: $1s \\to 2s \\to 2p \\to 3s \\to 3p \\to 4s \\to 3d \\to 4p \\to 5s \\to 4d \\to 5p \\to 6s \\to 4f \\to 5d$. Note that for neutral ground-state atoms around $Z=19\\text{–}20$, **$4s$ lies slightly lower in energy than empty $3d$**.\n2. **Pauli Exclusion Principle:** No two electrons in the same atom can share identical quantum states; therefore a single orbital holds at most two electrons and they must have **opposite spins** ($\\uparrow\\downarrow$).\n3. **Hund’s Rule of Maximum Multiplicity:** Within degenerate orbitals of equal energy (such as the three $2p$ or five $3d$ orbitals), electrons occupy **separate orbitals singly with parallel spins** before pairing up, minimizing inter-electronic repulsion.',
      },
      {
        type: 'callout',
        variant: 'key_formula',
        title: 'Two Mandatory Exceptions (Cr, Cu) & Cation 4s-Before-3d Ionization Rule',
        markdown:
          '- **Chromium ($Z = 24$):** Expected $[\\text{Ar}]4s^2 3d^4$ $\\longrightarrow$ **Actual: $[\\text{Ar}]4s^1 3d^5$** (symmetric half-filled $3d^5$ sublevel reduces inter-electron repulsion and gains exchange stabilization).\n- **Copper ($Z = 29$):** Expected $[\\text{Ar}]4s^2 3d^9$ $\\longrightarrow$ **Actual: $[\\text{Ar}]4s^1 3d^{10}$** (completely filled $3d^{10}$ sublevel lowers total energy).\n- **Transition-Metal Cation Ionization:** Even though $4s$ fills before $3d$ in neutral atoms, once electrons enter $3d$, **$3d$ drops below $4s$ in energy**. Therefore **ALWAYS remove $4s$ electrons BEFORE $3d$ electrons** when writing cation configurations: e.g., $\\text{Fe} = [\\text{Ar}]4s^2 3d^6 \\implies \\text{Fe}^{2+} = \\mathbf{[\\text{Ar}]3d^6}$ and $\\text{Fe}^{3+} = \\mathbf{[\\text{Ar}]3d^5}$ (NOT $4s^2 3d^4$!).',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Worksheet 8 Answer Key Errata Audited (Never Copy Handwritten Typos!)',
        markdown:
          'When revising from *8 Electron-Configuration Answers.pdf*, verify these four corrected keys:\n- **Phosphorus ($Z = 15$):** $[\\text{Ne}]\\mathbf{3s^2 3p^3}$ (three unpaired parallel $3p$ electrons via Hund’s rule).\n- **Osmium ($Z = 76$):** $[\\text{Xe}]6s^2 4f^{14} 5d^6$ (handwritten key omitted $4f^{14}$ / miswrote outer orbitals).\n- **Filling order check:** $4s$ precedes $3d$, and $3d$ precedes $4p$ ($\\dots 3p^6 \\to 4s^2 \\to 3d^{10} \\to 4p^6$).',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_ORBITAL_BOXES_EXPLORER,
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Comprehensive Ground-State Reference & Spectroscopic Applications (S1.3, Book pp. 50–53)',
      },
      {
        type: 'paragraph',
        markdown:
          'To cement electron configuration fluency for Paper 1A and Paper 2, verify how full configurations, condensed noble-gas cores, unpaired valence electrons, and cation removal connect across Elements $Z = 1$ to $Z = 36$ (*Day Practice Electron Configurations*, *Worksheet 8*, and *Bylikin* pp. 50–53):\n\n| Species ($Z$) | Full Configuration | Condensed Core | Unpaired $e^-$ (Hund’s Rule) | Key Structural / Ionization Insight |\n| :--- | :--- | :--- | :--- | :--- |\n| **$\\text{N}$ ($Z=7$)** | $1s^2 2s^2 2p^3$ | $[\\text{He}]2s^2 2p_x^1 2p_y^1 2p_z^1$ | $3$ ($2p$ half-filled) | Parallel spins maximize multiplicity before pairing |\n| **$\\text{P}$ ($Z=15$)** | $1s^2 2s^2 2p^6 3s^2 3p^3$ | $[\\text{Ne}]3s^2 3p^3$ | $3$ ($3p$ half-filled) | Matches Group $15$ valence topology of nitrogen |\n| **$\\text{Cr}$ ($Z=24$)** | $1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^5$ | $[\\text{Ar}]4s^1 3d^5$ | $6$ ($4s^1 + 3d^5$) | Half-filled $3d^5$ stabilization beats $4s^2 3d^4$ |\n| **$\\text{Fe}^{2+}$ ($Z=26$)** | $1s^2 2s^2 2p^6 3s^2 3p^6 3d^6$ | $[\\text{Ar}]3d^6$ | $4$ ($3d^6$) | Both $4s^2$ valence electrons removed BEFORE $3d$ |\n| **$\\text{Cu}$ ($Z=29$)** | $1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^{10}$ | $[\\text{Ar}]4s^1 3d^{10}$ | $1$ ($4s^1$) | Filled $3d^{10}$ subshell stabilization beats $4s^2 3d^9$ |\n| **$\\text{Zn}^{2+}$ ($Z=30$)** | $1s^2 2s^2 2p^6 3s^2 3p^6 3d^{10}$ | $[\\text{Ar}]3d^{10}$ | $0$ (diamagnetic) | Only $4s^2$ lost; closed $3d^{10}$ core remains intact |',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'TOK & Astrophysics Connection: Stellar Absorption Lines & Heisenberg Limits (Book pp. 42–46)',
        markdown:
          'Astronomers deduce the elemental makeup of distant stars without ever collecting a sample because cool outer stellar atmospheres absorb characteristic photons from continuous blackbody starlight, leaving dark Fraunhofer absorption lines matching laboratory emission spectra (e.g., helium was discovered in the Sun’s spectrum in 1868 decades before terrestrial isolation!). Equally, replacing Bohr’s deterministic circular orbits with quantum mechanical orbitals reflects Heisenberg’s uncertainty principle: electrons behave as standing waves whose spatial position can only be mapped probabilistically as $90\\%$ boundary surfaces ($s, p, d$ lobes).',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Atomic Orbital',
            definitionMarkdown: 'A region of space around the nucleus in which there is a high probability of finding up to two electrons of opposite spin.',
            markschemeKeyword: 'region of space / high probability / max 2 electrons opposite spin',
          },
          {
            term: 'Convergence Limit',
            definitionMarkdown: 'The high-frequency / short-wavelength boundary where adjacent spectral lines merge into a continuum, representing complete electron ionization ($n \\to \\infty$).',
            markschemeKeyword: 'energy levels get closer / corresponds to ionization energy',
          },
          {
            term: 'Hund’s Rule',
            definitionMarkdown: 'Degenerate orbitals within a sublevel fill singly with parallel spins before any orbital receives a second paired electron.',
            markschemeKeyword: 'singly / parallel spins / minimize repulsion',
          },
          {
            term: 'Pauli Exclusion Principle',
            definitionMarkdown: 'Each orbital holds a maximum of two electrons, which must possess opposite spins.',
            markschemeKeyword: 'maximum two electrons / opposite spin',
          },
          {
            term: 'Ground State',
            definitionMarkdown: 'Lowest-energy electron arrangement of an atom following Aufbau, Pauli, and Hund rules.',
            markschemeKeyword: 'lowest available energy state',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 3 (S1.4–S1.5) — BRAND-NEW Comprehensive Guide
  // =========================================================================
  {
    topicCode: 'S1.4',
    title: 'The Mole, Empirical Formulae, Molarity & Ideal Gases (S1.4–S1.5)',
    summary:
      'Brand-new Bylikin S1.4–S1.5 textbook guide covering Avogadro’s constant, molar mass, percentage composition, empirical vs molecular formulas via combustion & hydrates, solution concentration and serial dilutions, Avogadro’s gas law at official IB STP (22.7 dm³ mol⁻¹), ideal vs real gas deviations, combined gas law, and PV = nRT calculations.',
    sourceFileNames: [
      'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      'RevisionDojo_IB_Chemistry_Cheatsheets_Merged.pdf',
      'chemistry-guide-en_27d9a623-d741-4646-a331-1510ce0723b4.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Bylikin Guiding Questions (S1.4 Book p. 63 & S1.5 Book p. 80)',
        markdown:
          '- **S1.4:** *How do we quantify matter on the atomic scale?*\n- **S1.5:** *How does the model of ideal gas behaviour help us to predict the behaviour of real gases?*',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. The Mole Concept, Avogadro Constant & Molar Mass (S1.4.1–S1.4.3, Book pp. 63–67)',
      },
      {
        type: 'paragraph',
        markdown:
          'Individual atoms and molecules are far too light to weigh directly on laboratory balances, so chemistry scales microscopic counts to macroscopic grams through the SI unit **mole ($\\text{mol}$)**. Defined exactly since the 2019 SI redefinition, **1 mole contains precisely $N_A = 6.02214076 \\times 10^{23}$ elementary entities** (rounded to **$N_A = 6.02 \\times 10^{23}\\text{ mol}^{-1}$** in the IB Chemistry Data Booklet). Whether counting atoms ($\\ce{Pb}$), molecules ($\\ce{C12H22O11}$), ions ($\\ce{SO4^{2-}}$), or electrons, the chemical entity must always be specified—one mole of $\\ce{O2}$ molecules contains $2\\text{ mol}$ of oxygen atoms.',
      },
      {
        type: 'paragraph',
        markdown:
          'By definition, the numerical value of the dimensionless **relative atomic/formula mass ($A_r$ or $M_r$)** on the $^{12}\\text{C} = 12$ scale equals the **molar mass ($M$, units $\\text{g mol}^{-1}$)** of that substance. For instance, sucrose ($\\ce{C12H22O11}$) has $M_r = 12(12.01) + 22(1.01) + 11(16.00) = 342.34$ and $M = 342.34\\text{ g mol}^{-1}$ (*Bylikin* Worked Ex. 3, Book p. 67), so a $2.80\\text{ g}$ sugar cube contains $n = \\frac{2.80}{342.34} = 8.18 \\times 10^{-3}\\text{ mol}$ of sucrose molecules and $11 \\times 8.18\\times 10^{-3} \\times 6.02\\times 10^{23} = 5.42 \\times 10^{22}$ oxygen atoms. Always use unrounded **Data Booklet $A_r$ values to 2 decimal places** ($\\text{H}=1.01$, $\\text{C}=12.01$, $\\text{Cl}=35.45$, $\\text{Cu}=63.55$), never integer approximations.',
      },
      {
        type: 'equation',
        latex: 'n = \\frac{N}{N_A} = \\frac{m}{M} \\qquad \\text{and} \\qquad \\omega_E = \\frac{n_E \\times M_E}{M_{\\text{compound}}} \\times 100\\%',
        caption: 'Fundamental mole–particle–mass relations and percentage composition by mass (S1.4.1–S1.4.4, Book pp. 64–69).',
        variableLegend: [
          { symbol: 'n', meaning: 'Amount of substance in moles (mol)' },
          { symbol: 'N', meaning: 'Number of specified particles (atoms, molecules, ions, or formula units)' },
          { symbol: 'm', meaning: 'Sample mass in grams (g); M = molar mass in g mol⁻¹' },
          { symbol: '\\omega_E', meaning: 'Mass percentage composition of element E in compound' },
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Empirical vs Molecular Formulas, Combustion & Hydrated Salts (S1.4.4, Book pp. 68–71)',
      },
      {
        type: 'paragraph',
        markdown:
          'An **empirical formula** expresses the simplest whole-number integer ratio of atoms of each element in a compound (e.g., $\\ce{CH2O}$ for glucose $\\ce{C6H12O6}$, or $\\ce{Fe3O4}$ from $72.36\\%$ Fe and $27.64\\%$ O in *Bylikin* Worked Ex. 5, Book p. 69), whereas a **molecular formula** shows the exact number of each atom inside one discrete molecule: $\\text{Molecular Formula} = (\\text{Empirical Formula})_k$, where $k = \\frac{M_{\\text{molecular}}}{M_{\\text{empirical}}}$ rounded to the nearest integer. Ionic lattices and giant covalent networks only possess empirical formulas.',
      },
      {
        type: 'paragraph',
        markdown:
          'Two experimental IB workflows regularly test empirical formula deduction:\n\n1. **Combustion Analysis (Book p. 70):** An organic sample of known mass burns in excess $\\ce{O2}$: all carbon is trapped as $\\ce{CO2}$ ($n(\\text{C}) = n(\\text{CO2})$) and all hydrogen is trapped as $\\ce{H2O}$ ($n(\\text{H}) = 2\\times n(\\text{H2O})$). If the analyte also contains **oxygen**, find $m(\\text{O})$ strictly by subtraction: $m(\\text{O}) = m_{\\text{sample}} - m(\\text{C}) - m(\\text{H})$, never from the product gases because $\\ce{O2}$ enters externally.\n2. **Hydrated Salts (Gravimetric Heating):** Heating $\\ce{CuSO4.xH2O}$ or $\\ce{BaCl2.xH2O}$ to **constant mass** drives off water of crystallization. Subtracting final anhydrous salt mass from initial hydrate mass yields $m(\\ce{H2O})$, allowing direct mole ratio $n(\\text{salt}) : n(\\ce{H2O}) = 1 : x$.',
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Solutions, Molar Concentration & Serial Dilution (S1.4.5, Book pp. 72–76)',
      },
      {
        type: 'paragraph',
        markdown:
          'A solution comprises solute dissolved uniformly in solvent. **Molar concentration ($c$, or square brackets $[\\text{X}]$)** equals moles of solute divided by total **solution volume in $\\text{dm}^3$** ($1\\text{ dm}^3 = 1\\text{ L} = 1000\\text{ cm}^3$): $c = \\frac{n}{V}$. Mass concentration $\\rho = \\frac{m}{V} = c \\times M$ carries units $\\text{g dm}^{-3}$. Because dissolving a solid into a **volumetric flask** requires adding deionized water *up to the calibration mark* rather than pouring onto $250\\text{ cm}^3$ of solvent, always dissolve solute in a small beaker first, transfer quantitatively with rinsings into the volumetric flask, and top up with a dropping pipette until the bottom of the meniscus rests cleanly on the etched line (*Bylikin* Worked Ex. 9, Book p. 75).',
      },
      {
        type: 'equation',
        latex: 'c = \\frac{n}{V} \\quad (\\text{mol dm}^{-3}) \\qquad \\text{and} \\qquad c_1 V_1 = c_2 V_2',
        caption: 'Molarity definition and conservation of solute moles during solution dilution (S1.4.5, Book pp. 73–75).',
        variableLegend: [
          { symbol: 'V', meaning: 'Total solution volume in dm³ (divide cm³ by 1000)' },
          { symbol: 'c_1, V_1', meaning: 'Stock concentration and aliquot volume transferred by analytical pipette' },
          { symbol: 'c_2, V_2', meaning: 'Diluted concentration and final volumetric flask capacity' },
        ],
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_MOLE_COMBUSTION_WORKED,
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Avogadro’s Law, IB STP Molar Volume (22.7 dm³ mol⁻¹) & Ideal Gases (S1.4.6–S1.5, Book pp. 78–93)',
      },
      {
        type: 'paragraph',
        markdown:
          'At constant temperature and pressure, **Avogadro’s law** states that equal volumes of any ideal gases contain identical numbers of molecules ($V \\propto n$). Consequently, gas coefficients in balanced equations double directly as **volume ratios** (*Bylikin* Worked Ex. 10, Book p. 78: $2\\ce{H2S(g)} + 3\\ce{O2(g)} \\to 2\\ce{H2O(l)} + 2\\ce{SO2(g)}$, so $0.908\\text{ dm}^3$ $\\ce{H2S}$ consumes $1.36\\text{ dm}^3$ $\\ce{O2}$ and produces $0.908\\text{ dm}^3$ $\\ce{SO2}$; liquid water occupies negligible volume).',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'MANDATORY IB STP CONSTANT: 22.7 dm³ mol⁻¹ (NEVER 22.4 dm³ mol⁻¹!)',
        markdown:
          'Under official IUPAC and **IB Chemistry Data Booklet STP conditions ($T = 273.15\\text{ K}$ / $0^\\circ\\text{C}$ and $P = 100\\text{ kPa}$)**, the molar volume of an ideal gas is:\n$$V_m = \\mathbf{22.7\\text{ dm}^3\\text{ mol}^{-1}}$$\nOlder textbooks citing $22.4\\text{ dm}^3\\text{ mol}^{-1}$ used $101.325\\text{ kPa}$ ($1\\text{ atm}$). On every IB Paper 1A, 1B, and 2 examination, using $22.4$ instead of **$22.7\\text{ dm}^3\\text{ mol}^{-1}$** loses accuracy marks!',
      },
      {
        type: 'paragraph',
        markdown:
          'The **ideal gas model (S1.5.1–S1.5.2, Book pp. 80–84)** makes two simplifying assumptions: (1) gas particles are point masses whose **individual particle volume is negligible** compared with total container volume, and (2) **zero intermolecular attractive or repulsive forces** act between molecules except during perfectly elastic collisions. Real gases deviate most severely from ideality ($\\frac{PV}{nRT} \\neq 1$) under **high pressure** (molecules crowded together so excluded molecular volume becomes significant, pushing $PV/nRT > 1$) and **low temperature** (slower molecules linger within reach of LDF/dipole/H-bond attractions, reducing wall impact force so $PV/nRT < 1$). Light, non-polar noble gases with tiny electron clouds such as **$\\ce{He}$ and $\\ce{H2}$ behave closest to ideal gases**, whereas strongly polar H-bonding gases such as **$\\ce{NH3}$** or polarizable $\\ce{CO2}$ deviate most sharply. Real gases behave most ideally at **low pressure and high temperature**.',
      },
      {
        type: 'equation',
        latex: '\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2} \\qquad \\text{and} \\qquad P V = n R T \\implies M = \\frac{m R T}{P V}',
        caption: 'Combined gas law (constant moles n) and universal Ideal Gas Law (S1.5.3–S1.5.4, Book pp. 86–91).',
        variableLegend: [
          { symbol: 'P', meaning: 'Pressure in Pa (with V in m³) OR kPa (with V in dm³ — since kPa·dm³ = Pa·m³ = J!)' },
          { symbol: 'V', meaning: 'Gas volume in m³ (if P in Pa) OR dm³ (if P in kPa); 1 m³ = 1000 dm³ = 10⁶ cm³' },
          { symbol: 'R', meaning: 'Universal gas constant = 8.31 J K⁻¹ mol⁻¹ (IB Data Booklet)' },
          { symbol: 'T', meaning: 'Absolute temperature in Kelvin (K) ONLY — never °C!' },
        ],
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_IDEAL_GAS_STP_WORKED,
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_REAL_VS_IDEAL_GAS_MATRIX,
      },
      {
        type: 'heading',
        level: 2,
        text: '5. Empirical Gas Laws, Graphical Relationships & Combined Gas Conversions (S1.5.3–S1.5.4, Book pp. 82–91)',
      },
      {
        type: 'paragraph',
        markdown:
          'The universal ideal gas equation $PV = nRT$ unifies three classical empirical relationships discovered experimentally for fixed moles of gas $n$ (*Bylikin* pp. 82–88):\n\n1. **Boyle’s Law ($P \\propto \\frac{1}{V}$ at constant $T, n$):** Halving container volume doubles collision frequency against the walls, doubling pressure ($P_1 V_1 = P_2 V_2$). Plotting $P$ vs $V$ yields a rectangular hyperbola, whereas plotting $P$ vs $1/V$ yields a straight line passing cleanly through the origin.\n2. **Charles’s Law ($V \\propto T$ at constant $P, n$):** Heating a flexible balloon or frictionless syringe increases average molecular speed; keeping pressure constant forces volume expansion linearly with Kelvin temperature ($V_1 / T_1 = V_2 / T_2$). Extrapolating $V$ vs $t/^\\circ\\text{C}$ backward to zero volume defines **absolute zero ($-273.15^\\circ\\text{C} = 0\\text{ K}$)**.\n3. **Gay-Lussac’s Law ($P \\propto T$ at constant $V, n$):** In a rigid sealed cylinder, heating raises molecular kinetic energy and wall impact momentum proportionately ($P_1 / T_1 = P_2 / T_2$), explaining why pressurized aerosol canisters explode in fires.\n\n**Unit Consistency Checklist for $PV = nRT$:** Because $R = 8.31\\text{ J K}^{-1}\\text{ mol}^{-1}$ uses SI energy units ($\\text{J} = \\text{Pa}\\cdot\\text{m}^3$), you MUST keep units paired correctly: either use **$P$ in $\\text{Pa}$ with $V$ in $\\text{m}^3$**, OR use **$P$ in $\\text{kPa}$ with $V$ in $\\text{dm}^3$** (since $10^3\\text{ Pa} \\times 10^{-3}\\text{ m}^3 = 1\\text{ J}$ identically). Never mix $\\text{atm}$ or $\\text{cm}^3$ directly into $PV = nRT$ without converting first!',
      },
      {
        type: 'callout',
        variant: 'syllabus_link',
        title: 'Syllabus Bridge: Molar Gas Calculations in Titration & Enthalpy Labs (S1.4–S1.5 → R1 & R2)',
        markdown:
          'Expect IB Paper 2 multi-part questions to chain S1.4–S1.5 straight into Reactivity 1 and 2: collecting $\\text{H}_2(g)$ or $\\text{CO}_2(g)$ over water (subtracting water vapour pressure if dry gas pressure is needed), using $n = \\frac{V}{22.7\\text{ dm}^3\\text{ mol}^{-1}}$ at STP to find limiting reactants, and combining $c = n/V$ back-titrations with empirical formula hydration numbers.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Mole (mol)',
            definitionMarkdown: 'Amount of substance containing $6.02 \\times 10^{23}$ ($N_A$) specified elementary entities.',
            markschemeKeyword: 'Avogadro constant 6.02 × 10²³ mol⁻¹',
          },
          {
            term: 'Empirical Formula',
            definitionMarkdown: 'Simplest whole-number ratio of atoms of each element present in a compound.',
            markschemeKeyword: 'simplest whole-number ratio',
          },
          {
            term: 'Molar Volume at STP (Vm)',
            definitionMarkdown: 'Volume occupied by $1\\text{ mol}$ of any ideal gas at $273.15\\text{ K}$ and $100\\text{ kPa}$, equal to $22.7\\text{ dm}^3\\text{ mol}^{-1}$.',
            markschemeKeyword: '22.7 dm³ mol⁻¹ at 273 K / 100 kPa',
          },
          {
            term: 'Ideal Gas',
            definitionMarkdown: 'Theoretical gas obeying $PV = nRT$ whose molecules have negligible volume and experience zero intermolecular forces.',
            markschemeKeyword: 'negligible particle volume / no intermolecular forces',
          },
          {
            term: 'Standard Solution',
            definitionMarkdown: 'A solution whose molar concentration is accurately known, prepared in a calibrated volumetric flask.',
            markschemeKeyword: 'accurately known concentration',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 4 (S2.1) — Preserved exact title
  // =========================================================================
  {
    topicCode: 'S2.1',
    title: 'The Ionic Model, Polyatomic Ions & Lattice Enthalpy (S2.1)',
    summary:
      'Upgraded Bylikin S2.1 study guide covering cation/anion formation across periodic groups, the seven IB SL polyatomic ions, Stock Roman-numeral naming, electrostatic lattice enthalpy trends, brittle cleavage from like-charge shear repulsion (Slide 5 fix), molten/aqueous ion mobility, and hydration energetics.',
    sourceFileNames: [
      'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      'Day 1 - 2.1 Ionic Bonding.pdf',
      'Day 2 2.2 Ionic Bonding Properties.pdf',
      'worksheet-2.1-fomation-of-ionic-compounds.pdf',
      'worksheet-2.1-fomation-of-ionic-compounds-ans.pdf',
      'Textbook - IB_CHEMISTRY_ANSWERS_S2.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Bylikin Guiding Question (S2.1, Book p. 95)',
        markdown:
          '- **S2.1:** *What determines the ionic nature and properties of a compound?*\n- **Linking Lens:** Why does solid $\\ce{NaCl}$ have zero electrical conductivity and shatter cleanly when struck, whereas molten $\\ce{NaCl(l)}$ and aqueous $\\ce{NaCl(aq)}$ carry large electric currents?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Ion Formation, Octet Stability & Polyatomic Ions (S2.1.1, Book pp. 95–101)',
      },
      {
        type: 'paragraph',
        markdown:
          'When atoms of low-ionization-energy metallic elements (left side of the periodic table, electronegativity $\\chi \\lesssim 1.6$) react with high-electron-affinity non-metallic elements (right side, typically $\\Delta\\chi \\ge 1.8$ on the Pauling scale), valence electrons transfer completely from metal to non-metal. Losing outer valence electrons produces positively charged **cations** ($\\ce{Na+}$, $\\ce{Mg^{2+}}$, $\\ce{Al^{3+}}$) with noble-gas core configurations, while gaining electrons into the valence shell produces negatively charged **anions** ($\\ce{Cl-}$, $\\ce{O^{2-}}$, $\\ce{N^{3-}}$). Remember that Group 14 carbon and silicon rarely form simple $\\text{C}^{4+}/\\text{C}^{4-}$ ions because removing or adding four electrons requires prohibitive energy; similarly transition metals form variable positive ions (e.g., $\\ce{Fe^{2+}}$ iron(II) vs $\\ce{Fe^{3+}}$ iron(III); $\\ce{Cu+}$ vs $\\ce{Cu^{2+}}$), distinguished unambiguously by **Stock Roman numerals** in compound names.',
      },
      {
        type: 'paragraph',
        markdown:
          'Equally vital in SL stoichiometry and *Worksheet 2.1* are **polyatomic ions**: covalently bonded groups of atoms carrying an overall net charge that act as discrete electrostatic units inside an ionic crystal. Seven core polyatomic ions appear repeatedly across IB papers:\n\n| Ion Formula | Name | Net Charge | Classic IB Ionic Compound Example | Covalent / Ionic Dual Role |\n| :--- | :--- | :--- | :--- | :--- |\n| $\\ce{NH4+}$ | **Ammonium** | $+1$ | Ammonium sulfate, $\\ce{(NH4)2SO4}$ | Internal $\\text{N}-\\text{H}$ bonds covalent (1 dative); external lattice ionic |\n| $\\ce{OH-}$ | **Hydroxide** | $-1$ | Barium hydroxide, $\\ce{Ba(OH)2}$ | Strong Brønsted–Lowry base in aqueous solution |\n| $\\ce{NO3-}$ | **Nitrate** (nitrate(V)) | $-1$ | Lead(II) nitrate, $\\ce{Pb(NO3)2}$ | Resonance-stabilized trigonal planar oxyanion |\n| $\\ce{HCO3-}$ | **Hydrogencarbonate** | $-1$ | Sodium hydrogencarbonate, $\\ce{NaHCO3}$ | Amphiprotic ion ($\\text{R3.1}$) reacting with both acids and bases |\n| $\\ce{CO3^{2-}}$ | **Carbonate** | $-2$ | Calcium carbonate, $\\ce{CaCO3}$ | Insoluble limestone lattice; effervesces with acids to give $\\ce{CO2}$ |\n| $\\ce{SO4^{2-}}$ | **Sulfate** (sulfate(VI)) | $-2$ | Copper(II) sulfate, $\\ce{CuSO4}$ | Tetrahedral oxyanion in hydrated crystals ($\\ce{CuSO4.5H2O}$) |\n| $\\ce{PO4^{3-}}$ | **Phosphate** (phosphate(V)) | $-3$ | Calcium phosphate, $\\ce{Ca3(PO4)2}$ | Main inorganic mineral component of bone enamel |',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Three-Dimensional Ionic Lattices & Lattice Enthalpy Trends (S2.1.2–S2.1.3, Book pp. 102–112)',
      },
      {
        type: 'paragraph',
        markdown:
          'An **ionic bond** is defined strictly as the **electrostatic attraction between oppositely charged ions** (*Bylikin* p. 102). Crucially, ionic solids never exist as isolated "molecules" of $\\ce{NaCl}$! Instead, cations and anions pack into vast, regular, repeating three-dimensional **ionic crystal lattices** maximizing attractive nearest-neighbour contacts (for example, a $6:6$ octahedral coordination number in rock salt $\\ce{NaCl}$, where each $\\ce{Na+}$ touches six $\\ce{Cl-}$ ions and vice versa; or $8:8$ cubic coordination in $\\ce{CsCl}$ where larger $\\ce{Cs+}$ accommodates eight $\\ce{Cl-}$ neighbours). The chemical formula $\\ce{NaCl}$ or $\\ce{MgCl2}$ is therefore strictly an **empirical formula unit** expressing the simplest whole-number charge-neutral ion ratio.',
      },
      {
        type: 'equation',
        latex: '\\Delta H_{\\text{latt}}^\\circ \\propto \\frac{|q_+ \\cdot q_-|}{r_+ + r_-}',
        caption: 'Coulombic proportionality governing ionic bond strength and lattice enthalpy (S2.1.3, Book pp. 108–112).',
        variableLegend: [
          { symbol: '\\Delta H_{\\text{latt}}^\\circ', meaning: 'Standard lattice enthalpy: energy needed to separate 1 mol of solid ionic crystal into gaseous ions (kJ mol⁻¹)' },
          { symbol: 'q_+, q_-', meaning: 'Integer charges on cation and anion; higher charge sharply multiplies lattice strength' },
          { symbol: 'r_+ + r_-', meaning: 'Inter-ionic distance (sum of cation and anion radii); smaller ions pack closer and bind tighter' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          'Two complementary periodic comparisons dominate IB Paper 2 explanations of ionic melting points:\n\n1. **Effect of Ionic Charge (Constant Period/Isoelectronic Size):** Comparing $\\ce{NaF}$ ($q_+ q_- = 1\\times 1 = 1$, m.p. $993^\\circ\\text{C}$, $\\Delta H_{\\text{latt}} = 930\\text{ kJ mol}^{-1}$) with $\\ce{MgO}$ ($q_+ q_- = 2\\times 2 = 4$, m.p. $2852^\\circ\\text{C}$, $\\Delta H_{\\text{latt}} = 3791\\text{ kJ mol}^{-1}$): doubly charged $\\ce{Mg^{2+}}$ and $\\ce{O^{2-}}$ ions exert roughly fourfold stronger electrostatic attraction than singly charged $\\ce{Na+}$ and $\\ce{F-}$ ions of similar ionic radii, demanding vastly more thermal energy to break the lattice.\n2. **Effect of Ionic Radius (Constant Charge $\\pm 1$):** Moving down Group 1 or Group 17 halides ($\\text{LiF} > \\text{NaF} > \\text{NaCl} > \\text{KBr} > \\text{CsI}$), larger ionic radii increase $r_+ + r_-$, lowering charge density and weakening electrostatic attraction, so melting point steadily decreases.',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_IONIC_LATTICE_EXPLORER,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Brittleness, Electrical Conductivity & Solubility Mechanics (S2.1.3, Book pp. 110–116)',
      },
      {
        type: 'paragraph',
        markdown:
          'Every macroscopic property of ionic crystals flows directly from **fixed-site 3D electrostatic interactions**:\n\n- **High Melting & Boiling Points / Low Volatility:** Because melting requires disrupting multi-directional ionic bonds throughout the entire crystal lattice, ionic salts exist as crystalline solids at $298\\text{ K}$ with virtually zero vapour pressure and negligible odour.\n- **Brittleness Under Mechanical Shear (Slide 5 Fix):** Applying sharp mechanical force displaces one layer of the crystal relative to the adjacent layer by a single ion spacing. Immediately, **like-charged ions align directly alongside one another ($+/+$ and $-/-$)**. The resulting fierce electrostatic **repulsion between like charges** splits the crystal cleanly along cleavage planes.\n- **Electrical Conductivity Only When Molten or Aqueous:** Solid $\\ce{NaCl(s)}$ cannot conduct electricity because ions are **locked in fixed lattice positions** and no delocalized electrons exist. Heating past the melting point ($\\ce{NaCl(l)}$) or dissolving in water ($\\ce{NaCl(aq)}$) frees ions to migrate toward oppositely charged electrodes—conductivity arises from **mobile ions**, never free electrons!\n- **Solubility in Polar vs Non-Polar Solvents:** Water molecules ($\\delta^-\\text{O}$ pointing toward cations, $\\delta^+\\text{H}$ pointing toward anions) form favourable **ion–dipole hydration shells**; solubility occurs when exothermic hydration enthalpy nearly compensates or outweighs endothermic lattice enthalpy. Non-polar solvents such as hexane ($\\ce{C6H14}$) exert only negligible London dispersion interactions with ions and cannot break the ionic crystal.',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Day 2 Slide 5 Erratum & Common IB Wording Penalty',
        markdown:
          '- **Slide 5 Fix:** Ionic crystals shatter because shear shifts layers so **LIKE charges ($+/+$, $-/-$) align and repel**—NEVER write that "opposite charges repel" or that "electrons flow through molten salt"!\n- Never describe ionic compounds as having "intermolecular forces between $\\text{NaCl}$ molecules". State **"strong electrostatic attraction between oppositely charged ions in a 3D crystal lattice"**.',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_IONIC_CYCLE_STEPS,
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_IONIC_FORMULAS_WORKED,
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Hydrated Crystals, Aqueous Solubility Cycles & Stock Nomenclature Drill (S2.1, Book pp. 99–116)',
      },
      {
        type: 'paragraph',
        markdown:
          'As explored in *Bylikin* (pp. 99–115) and classroom *Worksheet 2.1*, many ionic salts crystallize from water with discrete stoichiometric water molecules trapped inside their lattices—held by ion–dipole interactions around small, highly charged cations—forming **hydrated crystals** such as copper(II) sulfate pentahydrate ($\\ce{CuSO4.5H2O}$, vivid blue) vs white anhydrous $\\ce{CuSO4}$, or cobalt(II) chloride hexahydrate ($\\ce{CoCl2.6H2O}$, pink) vs anhydrous blue $\\ce{CoCl2}$. In formula arithmetic, the dot denotes weak lattice association rather than multiplication, yet molar mass MUST include all crystallization waters ($M(\\ce{CuSO4.5H2O}) = 159.61 + 5(18.02) = 249.71\\text{ g mol}^{-1}$).',
      },
      {
        type: 'paragraph',
        markdown:
          'Finally, check how **Stock Roman numerals** and **hydration competition** operate across real IB compounds:\n- **Naming Variable-Valency Metals:** Always calculate the cation oxidation charge from the anion sum first: $\\text{FeCl}_3$ contains $3\\times\\text{Cl}^-$ ($-3$) so it is **iron(III) chloride**; $\\text{Cu}_2\\text{O}$ balances one $\\text{O}^{2-}$ across two $\\text{Cu}^+$ ions so it is **copper(I) oxide**; and $\\text{Pb(NO}_3)_2$ is **lead(II) nitrate**.\n- **Predicting Qualitative Solubility:** While $\\text{NaCl}$ ($790\\text{ kJ mol}^{-1}$) and $\\text{MgSO}_4$ dissolve readily because ion–dipole hydration enthalpy compensates for breaking the crystal lattice, salts combining **high ionic charges** ($+2/-2$ or $+2/-3$) such as $\\text{BaSO}_4$, $\\text{CaCO}_3$, and $\\text{Al}_2\\text{O}_3$ possess lattice enthalpies so strongly endothermic to overcome that they remain practically insoluble in neutral water at $298\\text{ K}$.',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'Nature of Science: Empirical Formula Units vs Molecular Diagrams (Book p. 108)',
        markdown:
          'X-ray crystallography in the early twentieth century (William Henry Bragg and William Lawrence Bragg, 1913) overturned early 19th-century attempts to draw "$\\text{Na}-\\text{Cl}$ diatomic molecules", demonstrating instead an infinite checkerboard crystal lattice where every $\\text{Na}^+$ interacts isotropically with six $\\text{Cl}^-$ ions—making empirical formula units the only chemically honest representation of ionic solids.',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Bylikin S2.1 Paper 2 Model Response Checklist (Volatility, Melting Point & Conduction)',
        markdown:
          'To capture full marks on any S2.1 structure–property explanation (*Textbook - IB_CHEMISTRY_ANSWERS_S2*), always structure your response in three crisp points: (1) state that ionic compounds form a **giant 3D crystal lattice** held by **strong electrostatic attraction between oppositely charged ions**; (2) explain high melting point and low volatility by noting large thermal energy is needed to overcome these multi-directional ionic bonds; and (3) distinguish solid non-conductivity (**ions fixed in lattice positions**) from molten/aqueous conductivity (**ions free to move and carry charge**). Furthermore, when ranking lattice enthalpies across binary salts, compare ionic charge product $|q_+ q_-|$ first and inter-ionic distance $(r_+ + r_-)$ second.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Ionic Bond',
            definitionMarkdown: 'Electrostatic attraction between oppositely charged cations and anions in a three-dimensional lattice.',
            markschemeKeyword: 'electrostatic attraction between oppositely charged ions',
          },
          {
            term: 'Lattice Enthalpy (ΔHlatt°)',
            definitionMarkdown: 'Enthalpy change required to convert $1\\text{ mol}$ of solid ionic compound into separate gaseous ions ($\\text{MX}(s) \\to \\text{M}^+(g) + \\text{X}^-(g)$).',
            markschemeKeyword: '1 mol solid ionic lattice to gaseous ions',
          },
          {
            term: 'Polyatomic Ion',
            definitionMarkdown: 'A covalently bonded assembly of two or more atoms carrying a net electrical charge (e.g., $\\ce{NH4+}$, $\\ce{CO3^{2-}}$, $\\ce{SO4^{2-}}$).',
            markschemeKeyword: 'covalently bonded group / net charge',
          },
          {
            term: 'Coordination Number',
            definitionMarkdown: 'Number of nearest-neighbour oppositely charged ions surrounding each ion in a crystal lattice ($6$ in $\\text{NaCl}$, $8$ in $\\text{CsCl}$).',
            markschemeKeyword: 'nearest oppositely charged neighbours',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 5 (S2.2.1–S2.2.6) — Preserved exact title (Strictly SL: 2–4 domains!)
  // =========================================================================
  {
    topicCode: 'S2.2',
    title: 'Covalent Bonding, Bond Order & Interactive 3D VSEPR Polarity Lab (S2.2.1–S2.2.6)',
    summary:
      'Upgraded Bylikin S2.2.1–S2.2.6 SL study guide covering shared-pair covalent bonding, octet exceptions (BeCl₂, BF₃, NO), Lewis formulas, single/double/triple bond order energetics, dative coordination bonds, 2–4 electron-domain VSEPR shapes and lone-pair angle compression, and bond vs molecular dipole symmetry.',
    sourceFileNames: [
      'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      'Day 2.2-1.pdf',
      'Day 2.2 VSEPR Intro.pdf',
      'Day - VSEPR and Bond Polarity.pdf',
      'Structure Diagrams- Covalent Bonding.docx',
      'Structure Diagrams- Covalent Bonding.txt',
      'Textbook - IB_CHEMISTRY_ANSWERS_S2.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Bylikin Guiding Question (S2.2, Book p. 117)',
        markdown:
          '- **S2.2:** *What determines the covalent nature and properties of a substance?*\n- **Linking Lens:** How do shared-electron Lewis diagrams determine 3D molecular geometry through VSEPR, and why can molecules built from strongly polar bonds still exhibit zero overall molecular dipole?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Covalent Electron Sharing, Octet Rule & Lewis Formulas (S2.2.1, Book pp. 117–123)',
      },
      {
        type: 'paragraph',
        markdown:
          'When non-metal atoms of similar, relatively high electronegativity ($\\Delta\\chi < 1.8$) react, neither atom yields valence electrons easily; instead they achieve stable noble-gas configurations by **sharing pairs of valence electrons**. A **covalent bond** is strictly defined as the **electrostatic attraction between a shared pair of electrons and the positively charged nuclei of both bonded atoms** (*Bylikin* p. 118). **Lewis formulas** represent all valence electrons as either **bonding pairs** (lines, crosses/dots between atoms) or **non-bonding lone pairs** (pair of dots on one atom). Remember three systematic **SL octet exceptions**:\n\n- **Duet limit:** Hydrogen ($\\text{H}$) achieves stability with only $2$ valence electrons ($1s^2$).\n- **Incomplete octets (electron-deficient):** $\\ce{BeCl2}$ ($4e^-$ around Be), $\\ce{BF3}$ and $\\ce{AlCl3}$ ($6e^-$ around B/Al). Note that $\\ce{BF3}$ and $\\ce{AlCl3}$ act as electron-pair acceptors (forming coordination dimers $\\ce{Al2Cl6}$ or adducts like $\\ce{NH3BF3}$).\n- **Odd-electron species (radicals):** $\\ce{NO}$ ($11$ valence $e^-$) and $\\ce{NO2}$ ($17$ valence $e^-$) leave one unpaired electron on N.',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Lewis Diagram Marks Lost Most Frequently on IB Paper 2',
        markdown:
          '1. **Draw ALL lone pairs on outer atoms (like $\\text{Cl}$, $\\text{F}$, $\\text{O}$)!** Drawing bare dashes for bonds without the three lone pairs on terminal halogens or two lone pairs on oxygen immediately forfeits the 1-mark Lewis credit.\n2. **Polyatomic ions MUST sit inside square brackets with the overall charge outside**, e.g., $[\\text{NH}_4]^+$ or $[\\text{CO}_3]^{2-}$.\n3. **Strict SL Boundary Check:** IB SL VSEPR examines molecules and ions with **up to 4 electron domains** (2, 3, or 4 domains obeying octet/duet/incomplete octet rules). Expanded octets (5 or 6 domains such as $\\ce{PCl5}$ or $\\ce{SF6}$), formal charge, and hybridization belong to Higher Level.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Bond Order, Bond Length & Bond Strength + Coordination Bonds (S2.2.2–S2.2.3, Book pp. 124–127)',
      },
      {
        type: 'paragraph',
        markdown:
          'Atoms may share one (**single bond**, bond order $1$), two (**double bond**, bond order $2$), or three (**triple bond**, bond order $3$) pairs of electrons. Increasing **bond order** packs greater negative electron density between the two positive nuclei, pulling the nuclei closer together (**shorter bond length**) and requiring substantially more energy to dissociate (**higher average bond enthalpy**):\n\n| Carbon–Carbon Bond | Bond Order | Average Bond Length ($\\text{pm}$) | Average Bond Enthalpy ($\\text{kJ mol}^{-1}$) | Classic SL Molecule |\n| :--- | :--- | :--- | :--- | :--- |\n| $\\text{C}-\\text{C}$ (single) | $1$ | $154\\text{ pm}$ | $346\\text{ kJ mol}^{-1}$ | Ethane ($\\ce{C2H6}$) |\n| $\\text{C}=\\text{C}$ (double) | $2$ | $134\\text{ pm}$ | $614\\text{ kJ mol}^{-1}$ | Ethene ($\\ce{C2H4}$) |\n| $\\text{C}\\equiv\\text{C}$ (triple) | $3$ | $120\\text{ pm}$ | $839\\text{ kJ mol}^{-1}$ | Ethyne ($\\ce{C2H2}$) |\n\nNotice also why $\\text{N}_2$ ($\\text{N}\\equiv\\text{N}$, $945\\text{ kJ mol}^{-1}$, $110\\text{ pm}$) is remarkably unreactive at ambient temperatures compared with $\\text{O}_2$ ($\\text{O}=\\text{O}$, $498\\text{ kJ mol}^{-1}$) and $\\text{F}_2$ ($159\\text{ kJ mol}^{-1}$).',
      },
      {
        type: 'paragraph',
        markdown:
          'A **coordination bond (dative covalent bond)** forms when **both electrons in the shared bonding pair originate from the same donor atom** carrying a lone pair, rather than one electron from each partner (*Bylikin* p. 126). Classic SL examples include:\n\n- **Ammonium ion ($\\ce{NH4+}$):** $\\ce{NH3}$ donates its nitrogen lone pair to $\\ce{H+}$ ($\\ce{NH3 + H+ -> [NH4]+}$).\n- **Hydronium ion ($\\ce{H3O+}$):** Water oxygen donates one lone pair to $\\ce{H+}$ in aqueous acids.\n- **Carbon monoxide ($\\ce{CO}$):** Triple-bonded $\\text{:C}\\equiv\\text{O:}$ consists of two conventional covalent pairs plus one coordination bond donated from oxygen to carbon (essential for understanding toxic haemoglobin binding and high bond strength $1077\\text{ kJ mol}^{-1}$).\n- **Aluminium chloride dimer ($\\ce{Al2Cl6}$):** At moderate temperatures below $400^\\circ\\text{C}$, two electron-deficient $\\ce{AlCl3}$ units bridge via two chlorine lone pairs.\n\nCrucially, **once formed, a coordination bond is identical in length, strength, and chemical behaviour to an ordinary covalent bond**—all four $\\text{N}-\\text{H}$ bonds in $\\ce{NH4+}$ are $109.5^\\circ$ equivalent.',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_DATIVE_COVALENT_STEPS,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. VSEPR Theory (2–4 Electron Domains) & Molecular Polarity (S2.2.4–S2.2.6, Book pp. 127–135)',
      },
      {
        type: 'paragraph',
        markdown:
          'The **Valence Shell Electron Pair Repulsion (VSEPR)** model predicts 3D molecular geometry from a single physical principle: **electron domains (regions of negative charge—single bonds, double bonds, triple bonds, OR non-bonding lone pairs) around a central atom repel one another to maximize separation in 3D space**. Crucially, **multiple bonds count as only ONE electron domain** because their shared pairs occupy the same inter-nuclear axis! Thus both $\\ce{CO2}$ ($\\text{O}=\\text{C}=\\text{O}$) and $\\ce{HCN}$ ($\\text{H}-\\text{C}\\equiv\\text{N}$) have **2 electron domains** (linear, $180^\\circ$), while $\\ce{SO2}$, $\\ce{O3}$, and $\\ce{NO3-}$ have **3 electron domains** (trigonal planar electron-domain geometry).',
      },
      {
        type: 'paragraph',
        markdown:
          'When predicting exact **bond angles**, distinguish the **electron-domain geometry** (spatial arrangement of *all* domains) from the **molecular geometry** (shape traced solely by atomic nuclei) and apply the repulsion hierarchy:\n$$\\text{Lone Pair–Lone Pair (LP–LP)} > \\text{Lone Pair–Bonding Pair (LP–BP)} > \\text{Bonding Pair–Bonding Pair (BP–BP)}$$\nBecause a non-bonding lone pair is attracted by only one nucleus rather than two, its electron cloud spreads wider angularly near the central atom, squeezing adjacent bonding pairs roughly $2^\\circ\\text{–}2.5^\\circ$ closer together per lone pair: hence tetrahedral $\\ce{CH4}$ ($109.5^\\circ$) $\\to$ trigonal pyramidal $\\ce{NH3}$ ($107^\\circ$, $1$ LP) $\\to$ bent $\\ce{H2O}$ ($104.5^\\circ$, $2$ LP), and trigonal planar $\\ce{BF3}$ ($120^\\circ$) $\\to$ bent $\\ce{SO2}$ ($\\sim 117^\\circ$, $1$ LP).',
      },
      {
        type: 'callout',
        variant: 'key_formula',
        title: 'Bond Polarity (Δχ) vs Net Molecular Polarity (3D Vector Cancellation)',
        markdown:
          '1. **Bond Polarity (S2.2.5):** Unequal electronegativity ($\\Delta\\chi \\neq 0$, roughly $0.4 < \\Delta\\chi < 1.8$) pulls shared electrons toward the more electronegative atom ($\\delta^+$ to $\\delta^-$), creating a directional **bond dipole vector**.\n2. **Molecular Polarity (S2.2.6):** Sum all bond dipoles as **3D vectors**! A molecule containing strongly polar bonds is **non-polar overall** if identical peripheral atoms sit in a symmetric geometry where dipoles cancel identically ($\\ce{CO2}$ linear, $\\ce{BF3}$ trigonal planar, $\\ce{CCl4}$ tetrahedral). Asymmetric shapes (bent $\\ce{H2O}$, $\\ce{SO2}$; pyramidal $\\ce{NH3}$) or mismatched outer atoms ($\\ce{CHCl3}$, $\\ce{CH2Cl2}$) retain a non-zero net dipole moment ($\\mu > 0$) and deflect toward a charged rod.',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_VSEPR_3D_LAB,
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_VSEPR_DOMAINS_MATRIX,
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Stepwise Lewis Construction Protocol & Molecular Polarity Walkthroughs (S2.2.1–S2.2.6)',
      },
      {
        type: 'paragraph',
        markdown:
          'Avoid guesswork on Paper 2 Lewis and shape questions (*Day 2.2 VSEPR Intro*, *Structure Diagrams- Covalent Bonding*, and *Bylikin* pp. 120–134) by applying one failsafe five-step construction algorithm:\n\n1. **Sum total valence electrons:** Add group valence electrons for all atoms; **subtract $1$ per $+1$ charge** (e.g., $\\text{NH}_4^+$: $5 + 4(1) - 1 = 8e^-$) or **add $1$ per $-1$ charge** (e.g., $\\text{CO}_3^{2-}$: $4 + 3(6) + 2 = 24e^-$).\n2. **Select the central atom:** Usually the least electronegative atom (never $\\text{H}$ or terminal $\\text{F}$), connecting outer atoms with single bond pairs ($2e^-$ each).\n3. **Complete terminal atom octets first** ($6$ non-bonding $e^-$ per $\\text{O},\\ \\text{Cl},\\ \\text{F}$; $0$ extra on $\\text{H}$).\n4. **Place remaining electrons as lone pairs on the central atom** (e.g., $\\text{NH}_3$ leaves $2e^-$ on N; $\\text{H}_2\\text{O}$ leaves $4e^-$ = two lone pairs on O).\n5. **Upgrade lone pairs from terminal atoms into double/triple bonds ONLY if the central atom still lacks $8e^-$** (except electron-deficient $\\text{BeCl}_2$ and $\\text{BF}_3$, which stay at $4e^-$ and $6e^-$!). Thus $\\text{CO}_2$ forms $\\ddot{\\text{O}}=\\text{C}=\\ddot{\\text{O}}$, giving $2$ double-bond domains ($180^\\circ$ linear, symmetric dipole cancellation = **non-polar molecule**), whereas $\\text{SO}_2$ retains $1$ lone pair on S alongside two oxygen domains, bending the molecule to $\\sim 117^\\circ$ so bond dipoles reinforce into a **polar molecule**.',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'Model Limitations: Lewis Octets & Dipole Vector Symmetry (Book pp. 122–134)',
        markdown:
          'Even within SL chemistry, molecules like $\\text{NO}$ ($11e^-$ odd-electron radical) and ozone $\\text{O}_3$ (whose real $\\text{O}-\\text{O}$ bond lengths are equal at $128\\text{ pm}$, intermediate between single $148\\text{ pm}$ and double $121\\text{ pm}$) expose the limits of static single/double Lewis drawings—a tension chemists later resolve through delocalized electron models.',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'VSEPR Acid-Base Pair Comparison: CH₄ vs NH₃ vs H₂O and CO₂ vs SO₂',
        markdown:
          'Examiners love comparing **isoelectronic $8$-valence-electron hydrides** ($\\text{CH}_4, \\text{NH}_3, \\text{H}_2\\text{O}$): all three possess **four tetrahedral electron domains** around the central atom, yet progressively replacing bonding pairs with non-bonding lone pairs compresses angles from $109.5^\\circ$ ($0$ LP, non-polar) $\\to 107^\\circ$ ($1$ LP, trigonal pyramidal polar) $\\to 104.5^\\circ$ ($2$ LP, bent/V-shaped polar) because LP–BP repulsion exceeds BP–BP repulsion. Compare similarly across the $3$-domain series: $\\text{BF}_3$ ($3$ BP, $0$ LP, $120^\\circ$ non-polar) vs $\\text{SO}_2$ ($2$ bonding domains + $1$ LP, $\\sim 117^\\circ$ bent polar), whereas linear $2$-domain $\\text{BeCl}_2$ and $\\text{CO}_2$ preserve $180^\\circ$ symmetry and zero net molecular dipole despite strongly polar individual bonds.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Covalent Bond',
            definitionMarkdown: 'Electrostatic attraction between a shared pair of electrons and the positively charged nuclei of both bonded atoms.',
            markschemeKeyword: 'electrostatic attraction / shared electron pair and nuclei',
          },
          {
            term: 'Coordination (Dative) Bond',
            definitionMarkdown: 'Covalent bond in which both shared electrons are donated by the same atom.',
            markschemeKeyword: 'both electrons supplied by one atom',
          },
          {
            term: 'Electron Domain',
            definitionMarkdown: 'A localized region of electron density around a central atom: a lone pair OR any single/double/triple bond counts as one domain.',
            markschemeKeyword: 'region of electron density / multiple bond counts as one',
          },
          {
            term: 'Polar Molecule',
            definitionMarkdown: 'Molecule possessing a net permanent dipole moment because polar bond dipoles do not cancel symmetrically in 3D space.',
            markschemeKeyword: 'net dipole / asymmetrical cancellation',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 6 (S2.2.7–S2.2.10) — Preserved exact title (Strictly SL)
  // =========================================================================
  {
    topicCode: 'S2.2',
    title: 'Covalent Networks, Intermolecular Forces & Chromatography (S2.2.7–S2.2.10)',
    summary:
      'Upgraded Bylikin S2.2.7–S2.2.10 SL textbook guide covering carbon allotropes (diamond, graphite, graphene, and Day 2.2.9 p.5 fix: C₆₀ simple molecular), silicon and SiO₂ giant networks, intermolecular forces hierarchy (Slide 1 fix: LDFs in ALL molecules!), hydride H-bonding anomalies, branching/molar-mass boiling points, solubility, and Rf chromatography.',
    sourceFileNames: [
      'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      'Day 2.2 Molecular Polarity and Network Solids.pdf',
      'Day 2.2.8 - Intermolecular Forces.pdf',
      'Day 2.2.8 - Strength of H bond.pdf',
      'Day 2.2.9 Strength of IMF.pdf',
      'worksheet-2.2.4-network-covalent-ans (1).pdf',
      'Textbook - IB_CHEMISTRY_ANSWERS_S2.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Bylikin Guiding & Linking Questions (S2.2.7–S2.2.10, Book pp. 135–159)',
        markdown:
          '- *Why do $\\ce{CO2}$ (gas) and $\\ce{SiO2}$ (quartz crystal, m.p. $1710^\\circ\\text{C}$) have nearly identical empirical formulas yet drastically different properties?*\n- *Why do intermolecular forces govern boiling points, solubility, and chromatography separation of covalent molecules while intramolecular covalent bonds stay intact?*',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Giant Covalent Networks of Carbon, Silicon & SiO₂ vs C₆₀ Fullerene (S2.2.7, Book pp. 135–138)',
      },
      {
        type: 'paragraph',
        markdown:
          'Simple covalent molecules (e.g., $\\ce{I2}$, $\\ce{CO2}$, $\\ce{H2O}$) boil at relatively low temperatures because **heating overcomes weak intermolecular forces (IMFs) between molecules**, leaving strong intramolecular covalent bonds untouched. By sharp contrast, **giant covalent networks** link millions of atoms into continuous 2D or 3D macromolecular frameworks through covalent bonds alone—melting them requires severing strong covalent bonds throughout the crystal (*Bylikin* pp. 135–137; *worksheet-2.2.4*):\n\n- **Diamond:** Every carbon atom forms **four single covalent bonds** at $109.5^\\circ$ in a rigid 3D tetrahedral network. All four valence electrons are localized in bonds, making diamond the hardest natural mineral, an **electrical insulator**, and unmeltable below $3550^\\circ\\text{C}$.\n- **Graphite:** Each carbon forms **three covalent bonds** ($120^\\circ$ hexagonal sheets), leaving **one delocalized valence electron per carbon** free to move parallel to the layers (high in-plane **electrical conductivity**). Adjacent sheets interact only through weak **London dispersion forces**, letting sheets slide smoothly—explaining graphite’s dry lubricating slipperiness.\n- **Graphene:** An isolated single-atom-thick monolayer of graphite with exceptional tensile strength, near-optical transparency, and extraordinarily fast electrical/thermal conduction.\n- **Silicon ($\\text{Si}$) & Silicon Dioxide ($\\text{SiO}_2$, Quartz):** $\\text{Si}$ adopts diamond’s tetrahedral lattice (intrinsic semiconductor). In $\\text{SiO}_2$, each $\\text{Si}$ bonds covalently to $4$ $\\text{O}$ atoms and each $\\text{O}$ bridges $2$ $\\text{Si}$ atoms ($109.5^\\circ$ tetrahedral $\\text{SiO}_4$ units), producing a hard, insoluble electrical insulator melting around $1710^\\circ\\text{C}$—utterly unlike discrete linear $\\text{CO}_2$ molecules held only by weak LDFs!',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Day 2.2.9 p.5 Critical Distinction: C₆₀ Fullerene Is Simple Molecular, NOT Giant Network!',
        markdown:
          '**Buckminsterfullerene ($\\ce{C60}$)** forms hollow football-shaped discrete molecules of $60$ carbons bonded in pentagons and hexagons (each C bonded to 3 neighbours). Because **ONLY weak London dispersion forces act between adjacent $\\ce{C60}$ cages**, $\\ce{C60}$ is a **simple molecular substance**: it has a relatively low sublimation point ($\\sim 600^\\circ\\text{C}$), dissolves in non-polar solvents like benzene or toluene, and is softer and a poor macroscopic conductor compared with graphite. Never classify $\\ce{C60}$ as a giant covalent network!',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_ALLOTROPES_NETWORK_MATRIX,
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Intermolecular Forces Hierarchy & Physical Property Predictions (S2.2.8–S2.2.9, Book pp. 138–154)',
      },
      {
        type: 'paragraph',
        markdown:
          'Three distinct intermolecular attractions—all far weaker than covalent/ionic bonds ($\\sim 1\\text{–}40\\text{ kJ mol}^{-1}$ vs $150\\text{–}900\\text{ kJ mol}^{-1}$)—act **between** discrete neutral covalent molecules:\n\n1. **London Dispersion Forces (LDFs — Classroom Day 2.2.8 Slide 1 Fix):** Fluctuating electron density creates instantaneous temporary dipoles that induce synchronized dipoles in neighbouring molecules. **CRITICAL SLIDE 1 FIX: London dispersion forces operate between ALL molecules (polar AND non-polar!)**, not exclusively non-polar species! LDF strength rises with:\n   - **Number of electrons / molar mass** (larger, more polarizable electron cloud: hence halogens shift from gases $\\ce{F2},\\ \\ce{Cl2}$ to liquid $\\ce{Br2}$ to solid $\\ce{I2}$ at $298\\text{ K}$!).\n   - **Molecular surface area / branching:** Straight-chain pentane ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{CH}_3$, b.p. $36^\\circ\\text{C}$) has larger surface contact than spherical 2,2-dimethylpropane ($\\text{C(CH}_3)_4$, b.p. $9.5^\\circ\\text{C}$) of identical molar mass $72.17\\text{ g mol}^{-1}$.\n2. **Dipole–Dipole & Dipole–Induced-Dipole Attractions:** Permanent $\\delta^+\\cdots\\delta^-$ electrostatic alignment between polar molecules supplements LDFs. Thus polar propanone ($M_r = 58.08$, b.p. $56^\\circ\\text{C}$) boils $57^\\circ\\text{C}$ higher than non-polar butane ($M_r = 58.14$, b.p. $-0.5^\\circ\\text{C}$) of almost identical molar mass.\n3. **Hydrogen Bonding (Strongest IMF, $\\sim 15\\text{–}40\\text{ kJ mol}^{-1}$):** Occurs **only** when hydrogen is covalently bonded directly to strongly electronegative, tiny-radius **$\\text{N}$, $\\text{O}$, or $\\text{F}$** (leaving an exposed $\\delta^+\\text{H}$ attracted to a lone pair on $\\text{N}$, $\\text{O}$, or $\\text{F}$ of another molecule). Notice *Day 2.2.8*: $\\ce{H2O}$ boils at $100^\\circ\\text{C}$ vs $\\ce{HF}$ at $19.5^\\circ\\text{C}$ and $\\ce{NH3}$ at $-33^\\circ\\text{C}$—even though $\\text{H}-\\text{F}$ is more polar, **each $\\ce{H2O}$ forms on average TWO H-bonds per molecule** ($2$ donors + $2$ lone pairs) vs one in $\\ce{HF}$, while in **ice** an open hexagonal H-bonded lattice makes ice **less dense** than liquid water!',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Two Fatal S2.2.8–S2.2.9 Traps to Avoid',
        markdown:
          '1. **Molar-Mass LDF Override:** Never automatically declare "hydrogen-bonded molecules always boil higher than LDF-only molecules". Because $\\ce{CCl4}$ ($154\\text{ g mol}^{-1}$, $74$ electrons) or $\\ce{I2}$ ($254\\text{ g mol}^{-1}$) have huge polarizable clouds, LDFs in heavy molecules can exceed dipole–dipole or even H-bonding in lighter molecules (e.g., $\\ce{HI}$ $-35^\\circ\\text{C}$ $> \\ce{HCl}$ $-85^\\circ\\text{C}$). Always state **"given comparable molar mass"**!\n2. **Solubility ("Like Dissolves Like"):** Small alcohols like ethanol mix completely in water by forming H-bonds with water, whereas hexan-1-ol becomes poorly soluble because its long non-polar $\\text{C}_6$ hydrophobic chain disrupts water’s H-bonded network without compensating energy.',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_IMF_BOILING_EXPLORER,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Paper & Thin-Layer Chromatography Partitioning (S2.2.10, Book pp. 155–159)',
      },
      {
        type: 'paragraph',
        markdown:
          '**Chromatography** separates dissolved mixtures by exploiting differential partitioning between a **stationary phase** (water trapped on cellulose paper or polar $\\text{SiO}_2$/$\\text{Al}_2\\text{O}_3$ TLC plate) and a moving **mobile phase** (solvent/eluent rising via capillary action). Components interacting more strongly through H-bonding or dipole–dipole attractions with the stationary phase lag behind (**lower $R_f$**), whereas components more soluble in the mobile phase advance faster toward the solvent front (**higher $R_f$**). Identical substances run under identical stationary phase, eluent composition, and temperature reproduce characteristic **retardation factor ($R_f$)** values ($0 < R_f < 1$).',
      },
      {
        type: 'equation',
        latex: 'R_f = \\frac{\\text{distance travelled by sample spot from origin}}{\\text{distance travelled by solvent front from origin}}',
        caption: 'Retardation factor definition for paper and thin-layer chromatography (S2.2.10, Book p. 156).',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_CHROMATOGRAPHY_RF_WORKED,
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Comparative Physical Data Bank: Isomers, Halogens & Hydride Anomalies (S2.2.8–S2.2.10)',
      },
      {
        type: 'paragraph',
        markdown:
          'When answering Paper 2 *"Account for the difference in boiling point"* questions (*Bylikin* pp. 142–154 & *Day 2.2.8–2.2.9* slides), always state **three explicit markscheme elements**: (1) identify structure/bonding (**simple covalent molecular**—never giant!), (2) name the **strongest intermolecular force** operating in each species (remembering LDFs exist in *both*!), and (3) link higher boiling point to **more thermal energy required to overcome stronger IMFs**:\n\n| Molecular Comparison Pair | Molar Mass ($\\text{g mol}^{-1}$) | Boiling Points ($^\\circ\\text{C}$) | Winning Structural / IMF Explanation |\n| :--- | :--- | :--- | :--- |\n| **Pentane vs 2,2-dimethylpropane** | Both $72.17$ | $36.1^\\circ\\text{C}$ vs $9.5^\\circ\\text{C}$ | Linear pentane has larger surface contact area $\\implies$ stronger LDFs than compact spherical isomer |\n| **Propan-1-ol vs Methoxyethane vs Butane** | $60.1$ vs $60.1$ vs $58.1$ | $97.2^\\circ\\text{C}$ vs $7.4^\\circ\\text{C}$ vs $-0.5^\\circ\\text{C}$ | Alcohol has **H-bonding** $>$ ether **dipole–dipole** $>$ alkane **LDFs only** |\n| **$\\text{Cl}_2$ vs $\\text{Br}_2$ vs $\\text{I}_2$** | $70.9 \\to 159.8 \\to 253.8$ | $-34^\\circ\\text{C} \\to 59^\\circ\\text{C} \\to 184^\\circ\\text{C}$ | Increasing electron count down Group 17 raises polarizability and **LDF strength** |\n| **$\\text{H}_2\\text{O}$ vs $\\text{H}_2\\text{S}$ vs $\\text{H}_2\\text{Se}$** | $18.0 \\to 34.1 \\to 81.0$ | $100^\\circ\\text{C}$ vs $-60^\\circ\\text{C}$ vs $-41^\\circ\\text{C}$ | $\\text{H}_2\\text{O}$ forms two **hydrogen bonds** per molecule; $\\text{H}_2\\text{S}\\to\\text{H}_2\\text{Te}$ rises solely via LDFs |',
      },
      {
        type: 'callout',
        variant: 'syllabus_link',
        title: 'Chromatography & IMF Synthesis: Paper vs TLC Stationary Phases (Book pp. 155–158)',
        markdown:
          'In **paper chromatography**, the true stationary phase is NOT dry cellulose fibres alone, but **thin films of water hydrogen-bonded onto cellulose polar $-\\text{OH}$ groups**. In **thin-layer chromatography (TLC)**, polar silica gel ($\\text{SiO}_2$) or alumina ($\\text{Al}_2\\text{O}_3$) plated onto glass/aluminium absorbs UV-active or ninhydrin-stained solutes much faster and sharper. Swapping to a **more polar mobile solvent** increases $R_f$ for polar solutes by competing effectively against stationary-phase H-bonding!',
      },
      {
        type: 'paragraph',
        markdown:
          '**Quantitative Solubility & Solvent Partitioning (*Bylikin* pp. 151–154):** Why does iodine ($\\text{I}_2$) dissolve sparingly in water ($0.03\\text{ g}/100\\text{ cm}^3$) to give pale yellow-brown aqueous iodine yet dissolve copiously in hexane ($\\text{C}_6\\text{H}_{14}$) giving deep purple? Breaking strong hydrogen bonds between water molecules costs far more energy than weak $\\text{I}_2$–$\\text{H}_2\\text{O}$ dipole–induced-dipole attractions return; by contrast, mixing non-polar $\\text{I}_2$ and hexane trades comparable London dispersion forces freely. Meanwhile, **ethanol ($\\text{CH}_3\\text{CH}_2\\text{OH}$)** and **ethanoic acid** are fully miscible in water in all proportions because their hydrophilic $-\\text{OH}/-\\text{COOH}$ groups integrate seamlessly into water’s H-bonded network, whereas **hexan-1-ol** turns mostly immiscible once its $6$-carbon non-polar hydrocarbon chain dominates. Equivalently, **propanone** dissolves readily in water because its polar carbonyl oxygen lone pairs accept hydrogen bonds from water even though pure propanone molecules cannot hydrogen-bond to each other!',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'London Dispersion Forces (LDFs)',
            definitionMarkdown: 'Universal temporary/instantaneous dipole–induced dipole attractions present between ALL atoms and molecules, scaling with electron count and molecular surface area.',
            markschemeKeyword: 'temporary/instantaneous-induced dipole / all molecules / surface area & molar mass',
          },
          {
            term: 'Hydrogen Bond',
            definitionMarkdown: 'Strong directional dipole–dipole attraction between a $\\delta^+\\text{H}$ covalently attached to $\\text{N}$, $\\text{O}$, or $\\text{F}$ and a lone pair on another $\\text{N}$, $\\text{O}$, or $\\text{F}$ atom.',
            markschemeKeyword: 'H covalently bonded to N, O, or F / lone pair',
          },
          {
            term: 'Giant Covalent Network',
            definitionMarkdown: 'Continuous 2D or 3D crystal lattice where every atom connects via strong covalent bonds (diamond, graphite, graphene, Si, SiO₂).',
            markschemeKeyword: 'continuous covalent bonds throughout structure',
          },
          {
            term: 'Retardation Factor (Rf)',
            definitionMarkdown: 'Ratio of solute migration distance to solvent front migration distance from a pencil baseline; constant under fixed solvent/stationary phase/temperature.',
            markschemeKeyword: 'distance solute / distance solvent front',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 7 (S2.3) — Preserved exact title (SL ONLY: S2.3.1–S2.3.2)
  // =========================================================================
  {
    topicCode: 'S2.3',
    title: 'The Metallic Model, Cation Charge Density & Slip Planes (S2.3)',
    summary:
      'Upgraded Bylikin S2.3.1–S2.3.2 SL textbook guide explaining metallic electrostatic bonding between cations and a delocalized electron sea (Slide 2 fix: electrons belong to the whole lattice), thermal/electrical conductivity, non-directional slip-plane malleability, and s/p-block melting point trends.',
    sourceFileNames: [
      'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      'Day 2.3.pdf',
      '2.3 - Textbook answers.pdf',
      'Textbook - IB_CHEMISTRY_ANSWERS_S2.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Bylikin Guiding Question (S2.3, Book p. 186)',
        markdown:
          '- **S2.3:** *What determines the metallic nature and properties of an element?*\n- **Linking Lens:** How does non-directional metallic attraction explain why pure sodium melts at $98^\\circ\\text{C}$ and cuts with a knife, whereas aluminium melts at $660^\\circ\\text{C}$ and stretches into high-voltage cables?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. The Metallic Bond & Delocalized Electron Sea Model (S2.3.1, Book pp. 186–190)',
      },
      {
        type: 'paragraph',
        markdown:
          'Metallic elements occupy the left and centre of the periodic table because they possess low first ionization energies and low electronegativities, exercising relatively weak pull on their outer valence electrons. Rather than retaining electrons locally or transferring them to a non-metal partner, metal atoms release their outer shell electrons into a shared crystal-wide pool, leaving behind a regular 3D **lattice of positively charged metal cations**. Thus a **metallic bond** is defined strictly as the **electrostatic attraction between a lattice of positive metal cations and a sea of delocalized valence electrons** (*Bylikin* p. 187).',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Day 2.3 Slide 2 Conceptual Fix: Electrons Are NOT Fixed to Any Single Atom!',
        markdown:
          'Never write that valence electrons "orbit or stay bound to one positive ion and hop only when pushed". Classroom *Day 2.3* emphasizes: **delocalized electrons are free to move throughout the entire 3D metallic structure and are NOT fixed to any single metal atom or cation**. Also remember that **electrons, NOT cations**, flow to carry electric current in a metal wire (opposite to molten ionic salts where ions migrate!).',
      },
      {
        type: 'paragraph',
        markdown:
          'Every characteristic physical property of pure $s$- and $p$-block metals follows from this **non-directional electrostatic glue**:\n\n- **Electrical Conductivity (Solid & Molten):** Applying a potential difference across any metal drives free delocalized electrons steadily toward the positive terminal while electrons enter from the negative terminal. Conductivity persists even after melting (e.g., liquid $\\text{Hg}$ or molten $\\text{Na}$) and decreases slightly with rising temperature because stronger cation lattice vibrations scatter drifting electrons.\n- **Thermal Conductivity:** Delocalized electrons collide frequently and transport kinetic energy across the crystal orders of magnitude faster than lattice vibrations alone in covalent insulators.\n- **Malleability & Ductility:** Unlike directional covalent bonds or ionic crystals that fracture via like-charge alignment, hammering a metal pushes layers of cations over one another along **slip planes**. Because metallic bonding acts uniformly in all directions (**non-directional**), the fluid electron sea rapidly redistributes to cushion adjacent cations and preserve attraction—allowing sheets to be rolled (**malleable**) and wires to be drawn (**ductile**).\n- **Metallic Lustre & Opacity:** High densities of mobile surface electrons absorb and re-emit photons across the visible spectrum.',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_METALLIC_SLIP_STEPS,
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Metallic Bond Strength & Melting Point Trends in s- and p-Block Metals (S2.3.2, Book pp. 191–192)',
      },
      {
        type: 'paragraph',
        markdown:
          'Not all metals hold their lattices equally tightly: potassium melts gently at $63.5^\\circ\\text{C}$, whereas aluminium melts at $660^\\circ\\text{C}$ (*Bylikin* pp. 191–192; *2.3 Textbook Answers*). Within Standard Level ($s$- and $p$-block metals), the strength of the metallic bond—reflected in melting points and enthalpies of atomization—is governed by two structural variables combining into **cation charge density**:\n\n1. **Ionic Charge / Number of Delocalized Valence Electrons per Atom ($n_e$):** Moving across Period 3 from Group 1 to Group 13 (**$\\text{Na} \\to \\text{Mg} \\to \\text{Al}$**), atoms release $1$, $2$, and $3$ valence electrons per cation, creating $\\text{Na}^+$, $\\text{Mg}^{2+}$, and $\\text{Al}^{3+}$ embedded in progressively denser electron seas ($3\\times$ charge attraction!).\n2. **Cation Ionic Radius ($r_{\\text{ion}}$):** Across Period 3, effective nuclear charge rises while shells stay constant, shrinking cation radii sharply ($\\text{Na}^+ = 102\\text{ pm} > \\text{Mg}^{2+} = 72\\text{ pm} > \\text{Al}^{3+} = 54\\text{ pm}$). Smaller radius brings the electron sea closer to the positive core, intensifying Coulomb attraction and driving melting points up from $98^\\circ\\text{C}$ ($\\text{Na}$) to $650^\\circ\\text{C}$ ($\\text{Mg}$) and $660^\\circ\\text{C}$ ($\\text{Al}$).\n\nConversely, descending **Group 1 alkali metals ($\\text{Li} \\to \\text{Na} \\to \\text{K} \\to \\text{Rb} \\to \\text{Cs}$)** keeps cation charge constant at $+1$ ($1$ delocalized $e^-$ per atom) while adding full inner electron shells. Increasing cationic radius spreads the $+1$ charge over a larger sphere and places the delocalized electron sea farther from the nucleus, reducing metallic bond strength so melting points fall monotonically from $181^\\circ\\text{C}$ ($\\text{Li}$) down to $28.5^\\circ\\text{C}$ ($\\text{Cs}$). Similarly, boiling points far exceed melting points for all metals (e.g., $\\text{Na}$ melts at $98^\\circ\\text{C}$ yet boils at $883^\\circ\\text{C}$) because melting only loosens lattice order whereas boiling must sever **every** metallic interaction to liberate gaseous atoms.',
      },
      {
        type: 'equation',
        latex: '\\text{Metallic Bond Strength} \\propto \\frac{\\text{Cation Charge } (q) \\times \\text{Delocalized } e^-\\text{ Density}}{\\text{Cation Ionic Radius } (r_+)}',
        caption: 'Charge-density proportionality explaining s- and p-block metallic melting trends (S2.3.2, Book p. 191).',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_METALLIC_TRENDS_MATRIX,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Contrasting Metallic Lattices Against Ionic & Covalent Solids + Reactivity Links (S2.3, Book pp. 186–192)',
      },
      {
        type: 'paragraph',
        markdown:
          'Paper 2 comparison questions routinely ask you to contrast **Period 3 electrical conductivities and mechanical responses** across metallic sodium/magnesium/aluminium, giant covalent silicon, and ionic sodium chloride (*Bylikin* pp. 187–192; *Day 2.3*; *2.3 Textbook Answers*):\n\n- **Solid vs Molten Conductivity Diagnostic:** Metals conduct strongly in **BOTH solid and molten states** because **delocalized valence electrons** flow continuously regardless of crystal rigidity. By sharp contrast, ionic lattices such as $\\text{NaCl}$ conduct **ONLY when molten or aqueous** (mobile ions, zero solid conductivity), while giant covalent diamond and $\\text{SiO}_2$ conduct in **NEITHER state** (all valence electrons trapped in localized covalent bonds). Graphite is the sole common covalent solid conducting along its 2D basal planes.\n- **Mechanical Behaviour Diagnostic:** Under hammer shear, metallic cation layers glide smoothly inside the uniform, non-directional electron sea (**malleable and ductile**), whereas ionic crystals align like-charged ions ($+/+$ and $-/-$) and cleave (**brittle**), and giant covalent quartz/diamond fracture because shearing breaks rigid directional covalent bonds.\n- **Link to Periodicity & Chemical Reactivity (S3.1 & R3.2):** Notice an illuminating inverse relationship down Group 1! **Metallic bonding strength (melting point)** *decreases* down Group 1 ($\\text{Li } 181^\\circ\\text{C} \\to \\text{Cs } 29^\\circ\\text{C}$) because larger cation radius weakens attraction to the electron sea; for the exact same electrostatic reason (outer $ns^1$ electron held farther from nucleus with higher inner shielding, lowering first ionization energy), **chemical reactivity with water increases violently** down Group 1 ($\\text{Li} < \\text{Na} < \\text{K} < \\text{Rb} < \\text{Cs}$). Conversely across Period 3 ($\\text{Na} \\to \\text{Mg} \\to \\text{Al}$), rising charge density $+1 \\to +2 \\to +3$ raises melting points and hardness while rising ionization energy suppresses metallic reducing vigour ($\\text{Al}$ reacts slowly unless its protective $\\text{Al}_2\\text{O}_3$ oxide coat is disrupted).',
      },
      {
        type: 'callout',
        variant: 'syllabus_link',
        title: 'Engineering Bridge to S2.4: Why Pure Metals Often Need Alloying',
        markdown:
          'Pure gold ($24$-carat), pure copper, and pure aluminium have smooth, uniform atomic rows that slide relatively easily under stress—too soft for load-bearing beams, scalpels, or aircraft fuselages. Disrupting those metallic slip planes deliberately with differently sized foreign atoms produces **alloys (S2.4.3)** that preserve conductivity and lustre while multiplying tensile strength and wear resistance.',
      },
      {
        type: 'paragraph',
        markdown:
          '**Empirical Melting & Thermal Data Bank (*Bylikin* pp. 191–192 & *2.3 Textbook Answers*):** Compare these official IB Data Booklet melting points when justifying charge-density claims on Paper 2:\n\n| Metallic Series | Element | Valence $e^-$ / Cation Charge | Ionic Radius ($\\text{pm}$) | Melting Point ($^\\circ\\text{C}$) | Boiling Point ($^\\circ\\text{C}$) |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| **Group 1** | $\\text{Li}$ | $+1$ ($2s^1$) | $76\\text{ pm}$ | $180.5^\\circ\\text{C}$ | $1342^\\circ\\text{C}$ |\n| **Group 1** | $\\text{Na}$ | $+1$ ($3s^1$) | $102\\text{ pm}$ | $97.8^\\circ\\text{C}$ | $883^\\circ\\text{C}$ |\n| **Group 1** | $\\text{K}$ | $+1$ ($4s^1$) | $138\\text{ pm}$ | $63.5^\\circ\\text{C}$ | $759^\\circ\\text{C}$ |\n| **Group 1** | $\\text{Rb} \\to \\text{Cs}$ | $+1$ ($5s^1 / 6s^1$) | $152 \\to 167\\text{ pm}$ | $39.3 \\to 28.5^\\circ\\text{C}$ | $688 \\to 671^\\circ\\text{C}$ |\n| **Period 3** | $\\text{Mg}$ | $+2$ ($3s^2$) | $72\\text{ pm}$ | $650^\\circ\\text{C}$ | $1091^\\circ\\text{C}$ |\n| **Period 3** | $\\text{Al}$ | $+3$ ($3s^2 3p^1$) | $54\\text{ pm}$ | $660^\\circ\\text{C}$ | $2470^\\circ\\text{C}$ |\n\nNotice how boiling points—which require **completely separating atoms into free gaseous metal atoms** rather than only disturbing crystal symmetry at melting—reveal aluminium’s far greater metallic bond strength ($2470^\\circ\\text{C}$ vs magnesium $1091^\\circ\\text{C}$ and sodium $883^\\circ\\text{C}$) even more vividly than melting points! Across practical engineering applications (*Bylikin* p. 189; *Day 2.3*), copper’s high electron mobility and ductility make it ideal for household electrical wiring, aluminium’s low density ($2.70\\text{ g cm}^{-3}$) paired with $+3$ metallic bonding suits overhead power cables and aircraft skins, and Group 1 metals’ low charge density produces soft solids easily cut by a scalpel with densities ($\\text{Li } 0.53,\\ \\text{Na } 0.97,\\ \\text{K } 0.86\\text{ g cm}^{-3}$) low enough to float while reacting on water. Always phrase metallic explanations cleanly in terms of **cation charge, ionic radius, and delocalized valence electron density throughout the lattice**.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Metallic Bond',
            definitionMarkdown: 'Electrostatic attraction between a lattice of positive metal cations and delocalized valence electrons moving freely through the structure.',
            markschemeKeyword: 'electrostatic attraction / lattice of cations and delocalized electrons',
          },
          {
            term: 'Delocalized Electrons',
            definitionMarkdown: 'Valence electrons no longer associated with any single metal atom/cation, free to move throughout the entire crystal lattice.',
            markschemeKeyword: 'free to move throughout lattice / not fixed to one atom',
          },
          {
            term: 'Malleability & Ductility',
            definitionMarkdown: 'Ability of a metal to deform into sheets or wires without shattering because non-directional electron-sea bonding persists as cation layers slide.',
            markschemeKeyword: 'layers slide / non-directional metallic bonding maintained',
          },
          {
            term: 'Cation Charge Density',
            definitionMarkdown: 'Ratio of cation charge to ionic size; higher charge ($+3 > +1$) and smaller radius yield stronger metallic bonding and higher melting points.',
            markschemeKeyword: 'higher charge and smaller ionic radius',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 8 (S2.4) — Preserved exact title (SL ONLY: S2.4.1–S2.4.5, NO condensation polymers!)
  // =========================================================================
  {
    topicCode: 'S2.4',
    title: 'Bonding Continuum (van Arkel–Ketelaar), Alloys & Addition Polymers (S2.4)',
    summary:
      'Upgraded Bylikin S2.4.1–S2.4.5 SL textbook guide mapping the van Arkel–Ketelaar bonding triangle (Δχ vs average χ̄, including classroom TlBr and AlCl₃ cases), structural composites, substitutional vs interstitial alloy mixtures, macromolecular plastics, and 100%-atom-economy addition polymerization.',
    sourceFileNames: [
      'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      'Day 2.4 - From Structure to Models.pdf',
      'day S 2.4 review questions.pdf',
      'Textbook - IB_CHEMISTRY_ANSWERS_S2.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Bylikin Guiding Question (S2.4, Book p. 197)',
        markdown:
          '- **S2.4:** *What role do bonding and structure have in the design of materials?*\n- **Linking Lens:** Why are discrete labels like "ionic" or "covalent" incomplete for real compounds like $\\ce{AlCl3}$ or $\\ce{TlBr}$, and how do alloys and addition polymers engineer targeted mechanical toughness?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. The Bonding Continuum & van Arkel–Ketelaar Triangle (S2.4.1–S2.4.2, Book pp. 197–204)',
      },
      {
        type: 'paragraph',
        markdown:
          'Earlier models presented ionic, covalent, and metallic bonding as three hermetically sealed boxes. In reality (*Bylikin* pp. 198–202; *Day 2.4*, 49 slides), chemical bonding occupies a **continuous two-dimensional spectrum** spanned by the **van Arkel–Ketelaar bonding triangle** (provided in the IB Chemistry Data Booklet). To locate any binary compound $\\text{A}_m\\text{B}_n$ using Pauling electronegativities ($\\chi_A, \\chi_B$): plot its **average electronegativity $\\bar{\\chi} = \\frac{\\chi_A + \\chi_B}{2}$** along the horizontal axis and its **electronegativity difference $\\Delta\\chi = |\\chi_A - \\chi_B|$** along the vertical axis.',
      },
      {
        type: 'equation',
        latex: '\\bar{\\chi} = \\frac{\\chi_A + \\chi_B}{2} \\qquad \\text{and} \\qquad \\Delta\\chi = |\\chi_A - \\chi_B|',
        caption: 'Horizontal (average χ̄) and vertical (Δχ) coordinates on the van Arkel–Ketelaar bonding triangle (S2.4.2, Book p. 201).',
        variableLegend: [
          { symbol: '\\bar{\\chi}', meaning: 'Low χ̄ (<1.6) indicates metallic electron delocalization; high χ̄ (>2.5) indicates strong valence localization (ionic/covalent)' },
          { symbol: '\\Delta\\chi', meaning: 'Small Δχ (<0.4) yields pure covalent or metallic; intermediate (0.4–1.8) polar covalent; large (≥1.8) predominantly ionic' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          'Three extreme vertices anchor the triangle while real compounds fill every interior zone:\n\n- **Bottom-Left Vertex — Pure Metallic (Low $\\bar{\\chi}$, $\\Delta\\chi \\approx 0$):** $\\text{Cs}$ ($\\bar{\\chi}=0.8, \\Delta\\chi=0$), $\\text{Na}$, $\\text{Cu}$—valence electrons delocalize across metal cations.\n- **Bottom-Right Vertex — Pure Non-Polar Covalent (High $\\bar{\\chi}$, $\\Delta\\chi = 0$):** $\\text{F}_2$ ($\\bar{\\chi}=4.0, \\Delta\\chi=0$), $\\text{Cl}_2$, diamond—tightly localized shared electron pairs.\n- **Top Apex — Highly Ionic (Intermediate $\\bar{\\chi} \\approx 2.0\\text{–}2.4$, High $\\Delta\\chi \\gtrsim 2.0$):** $\\text{CsF}$ ($\\bar{\\chi}=2.4, \\Delta\\chi=3.2$), $\\text{NaCl}$ ($\\bar{\\chi}=2.05, \\Delta\\chi=2.3$), $\\text{MgO}$ ($\\bar{\\chi}=2.35, \\Delta\\chi=2.1$).\n- **Classroom Borderline Cases (*Day 2.4*):**\n  - **Aluminium chloride ($\\text{AlCl}_3$):** $\\chi_{\\text{Al}}=1.61, \\chi_{\\text{Cl}}=3.16 \\implies \\Delta\\chi = 1.55,\\ \\bar{\\chi}=2.39$. Placed on the polar-covalent / ionic boundary, small highly charged $\\text{Al}^{3+}$ strongly polarizes $\\text{Cl}^-$, so $\\text{AlCl}_3$ sublimes at $180^\\circ\\text{C}$ as covalent $\\text{Al}_2\\text{Cl}_6$ dimers and barely conducts when molten!\n  - **Thallium(I) bromide ($\\text{TlBr}$):** Featured in *Day 2.4* slides ($\\Delta\\chi \\approx 1.2$, $\\bar{\\chi} \\approx 2.4$), sitting in the mixed **polar covalent–ionic transition zone** with partial covalent character and lower melting point ($460^\\circ\\text{C}$) than pure alkali halides.\n  - **Quartz ($\\text{SiO}_2$):** $\\Delta\\chi = 1.5$, $\\bar{\\chi} = 2.7$—polar covalent bonds extended into a 3D network.\n- **Composite Materials:** Modern engineering pairs contrasting bonding classes into **composites**—such as steel-reinforced concrete (brittle ionic/covalent cement matrix resisting compression + ductile metallic rebar resisting tension) or fibreglass (silicate glass fibres embedded in polymer resin).',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_BONDING_CONTINUUM_LAB,
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Alloys: Solid Solution Mixtures & Slip-Plane Engineering (S2.4.3, Book pp. 205–208)',
      },
      {
        type: 'paragraph',
        markdown:
          '**Alloys** are **homogeneous mixtures** of a parent metal with one or more other metals or non-metals (such as carbon), prepared by melting components together and cooling into a uniform metallic solid solution. Why does the IB insist alloys are **mixtures rather than compounds**? Because alloy composition is **continuous and non-stoichiometric** (e.g., brass varies from $5\\%$ to $40\\%$ Zn), constituents do not bond in fixed integer mole ratios, and atoms keep metallic non-directional electron-sea bonding rather than forming a new pure phase with fixed sharp melting temperature (*Bylikin* p. 206).',
      },
      {
        type: 'paragraph',
        markdown:
          'Introducing foreign atoms of **different atomic radii** breaks the smooth regularity of pure-metal crystal planes. When mechanical stress attempts to slide cation planes past one another, oversized substitutional atoms (**brass**: $\\text{Cu} + \\text{Zn}$; **bronze**: $\\text{Cu} + \\text{Sn}$) or small interstitial atoms wedged into lattice voids (**high-carbon steel**: $\\text{Fe} + \\text{C}$; **stainless steel**: $\\text{Fe} + \\text{C} + \\text{Cr} + \\text{Ni}$) lock slip planes against movement—dramatically raising **hardness, tensile strength, and resistance to deformation**, often while slightly lowering melting point and thermal/electrical conductivity compared with the pure host metal.',
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Macromolecular Plastics & Addition Polymerization (S2.4.4–S2.4.5, Book pp. 209–219)',
      },
      {
        type: 'paragraph',
        markdown:
          '**Polymers** are giant macromolecular chains assembled by linking thousands of small repeating molecular subunits called **monomers**. Natural polymers include cellulose, starch, proteins, and natural rubber; synthetic plastics (polyethene, PVC, PTFE) dominate packaging, electrical insulation, and medical devices because saturated carbon–carbon backbones are lightweight, chemically inert, and held together between chains by tunable London dispersion or dipole–dipole interactions. Chain length and branching control bulk properties cleanly: unbranched **HDPE** chains pack closely to maximize LDFs (rigid, denser, higher softening point $\\sim 135^\\circ\\text{C}$), whereas highly branched **LDPE** chains pack loosely (flexible film, lower density, lower softening point $\\sim 110^\\circ\\text{C}$).',
      },
      {
        type: 'paragraph',
        markdown:
          'At IB Standard Level (**S2.4.5**), you must master **addition polymerization**: alkenes containing a reactive $\\text{C}=\\text{C}$ double bond react together as each double bond breaks open into single bonds, linking monomers head-to-tail into a saturated carbon backbone **without losing a single atom**—hence **100% atom economy**! Examples include:\n\n$$n\\,\\text{CH}_2\\text{=CHX} \\longrightarrow -\\!\\big[\\text{CH}_2-\\text{CHX}\\big]_n\\!-$$\n\n- $\\text{X} = \\text{H}$: Ethene $\\to$ **poly(ethene)** (bags, bottles).\n- $\\text{X} = \\text{CH}_3$: Propene $\\to$ **poly(propene)** (sterilizable labware, ropes).\n- $\\text{X} = \\text{Cl}$: Chloroethene $\\to$ **poly(chloroethene) / PVC** (polar $\\text{C}-\\text{Cl}$ dipoles stiffen pipework).\n- Tetrafluoroethene $\\ce{CF2=CF2}$ $\\to$ **PTFE / Teflon** ($-\\![\\text{CF}_2-\\text{CF}_2]_n\\!-$ non-stick coatings).\n\nBecause saturated $\\text{C}-\\text{C}$ and $\\text{C}-\\text{H}$ bonds lack polar hydrolyzable sites, addition polymers resist microbial enzymes and accumulate as persistent microplastics unless mechanically or thermally recycled.',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Strict SL Scope Note & Repeat-Unit Drawing Rule',
        markdown:
          '1. **SL Focus:** Only **addition polymerization of alkenes** ($100\\%$ atom economy) is assessed at IB Chemistry SL (condensation polymers like nylon/polyesters releasing $\\text{H}_2\\text{O}$ belong to AHL).\n2. When drawing a polymer **repeating unit**, ALWAYS draw **open single trailing bonds extending through both square brackets** with subscript $n$, and place any side groups (such as $-\\text{CH}_3$ or $-\\text{Cl}$) **vertically off the two-carbon backbone**—never insert extra carbons into the main chain!',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_ALLOY_POLYMER_EXPLORER,
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_ALLOY_POLYMER_MATRIX,
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Composite Synergies, Polymer Waste Challenges & S2.4 Review Synthesis (Book pp. 201–219)',
      },
      {
        type: 'paragraph',
        markdown:
          'Modern materials design combines insights from all three bonding quadrants (*Bylikin* pp. 201–218; *Day 2.4*; *day S 2.4 review questions*):\n\n- **Composites vs Alloys:** Unlike homogeneous metal alloys, **composites** remain physically **heterogeneous** mixtures of a continuous **matrix phase** and an embedded **reinforcing phase** (e.g., high-compressive ionic silicate concrete reinforced with ductile steel rods, or polymer resin reinforced with carbon/glass fibres) to inherit strengths neither bonding class supplies individually.\n- **Deducing Unknown Material Classes from Bonding Triangle Coordinates:** Suppose an unknown binary solid $\\text{X}$ has elements with $\\chi_A = 1.9$ and $\\chi_B = 2.1$ ($\\bar{\\chi} = 2.00$, $\\Delta\\chi = 0.20$). Because $\\Delta\\chi$ is tiny while $\\bar{\\chi}$ sits intermediate-to-high, it lies near the metallic–covalent border—forming metalloid/semiconductor structures such as silicon-carbide/alloy phases rather than an ionic salt! Meanwhile, binary oxides across Period 3 sweep cleanly from bottom/top-ionic $\\text{Na}_2\\text{O}$ ($\\Delta\\chi = 2.5, \\bar{\\chi} = 2.2$) through polar-ionic $\\text{Al}_2\\text{O}_3$ ($\\Delta\\chi = 1.8$) to polar-covalent $\\text{SO}_3$ ($\\Delta\\chi = 0.9, \\bar{\\chi} = 3.0$).\n- **Addition Polymer Persistence & Green Chemistry (R2.1 Link):** While addition polymers boast **$100\\%$ atom economy** during synthesis ($n\\text{C}_2\\text{H}_4 \\to -[\\text{CH}_2-\\text{CH}_2]_n-$), their long saturated non-polar $\\text{C}-\\text{C}$ chains resist hydrolysis and bacterial enzymes, persisting for centuries in landfills and oceans and leaching microplastics—motivating mechanical sorting (resin codes), chemical pyrolysis back to monomers, and strict waste reduction.',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'Nature of Science: Limitations of Discrete Categories vs Continuum Models (Book p. 202)',
        markdown:
          'Every introductory textbook starts by splitting solids into ionic, covalent, or metallic categories because discrete models sharpen explanatory clarity. Yet compounds like $\\text{AlCl}_3$ ($\\Delta\\chi = 1.55$, subliming covalent dimer) and $\\text{TlBr}$ (*Day 2.4*) prove nature forms a seamless **quantum-mechanical electron-density continuum**—models evolve from rigid boxes to quantitative triangles whenever anomalous empirical evidence accumulates.',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Common Alloy & Addition Polymer Deduction Drill (S2.4.3 & S2.4.5, Book pp. 206–219)',
        markdown:
          '- **Alloys in Practice:** **Bronze** ($\\text{Cu} + \\text{Sn}$) and **brass** ($\\text{Cu} + \\text{Zn}$) use substitutional metal atoms to resist corrosion and abrasion; **high-carbon steel** uses tiny interstitial carbon atoms to lock iron planes, while **stainless steel** incorporates substitutional $\\text{Cr}$ ($\\sim 18\\%$) and $\\text{Ni}$ ($\\sim 8\\%$) so a self-healing chromium(III) oxide layer halts rusting. In every case, alloy design trades slight drops in malleability and conductivity for dramatic gains in hardness and structural load capacity (*Day 2.4*).\n- **Polymer-to-Monomer Reverse Rule:** Given any addition polymer chain segment such as $-\\text{CH(CH}_3)-\\text{CH}_2-\\text{CH(CH}_3)-\\text{CH}_2-$, isolate a **two-carbon repeat** $-\\text{CH(CH}_3)-\\text{CH}_2-$, delete the two outer trailing single bonds, and insert a **$\\text{C}=\\text{C}$ double bond** between those two backbone carbons $\\implies \\text{CH}_3\\text{CH=CH}_2$ (**propene**)! Follow the identical procedure to deduce **chloroethene** from PVC ($-[\\text{CH}_2-\\text{CHCl}]_n-$) or **tetrafluoroethene** from PTFE ($-[\\text{CF}_2-\\text{CF}_2]_n-$).',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Bonding Continuum',
            definitionMarkdown: 'Continuous transition among metallic, covalent, and ionic bonding character parameterized on the van Arkel–Ketelaar triangle using $\\Delta\\chi$ and $\\bar{\\chi}$.',
            markschemeKeyword: 'electronegativity difference and average electronegativity',
          },
          {
            term: 'Alloy',
            definitionMarkdown: 'Mixture of a base metal with other metals or non-metals where mismatched atomic sizes obstruct crystal lattice sliding, enhancing hardness.',
            markschemeKeyword: 'mixture / mismatched atomic radii disrupt layers',
          },
          {
            term: 'Monomer & Repeating Unit',
            definitionMarkdown: 'Small unsaturated molecule ($\\text{C}=\\text{C}$ alkene) joining to form a polymer, represented inside brackets with open trailing bonds $-[\\text{CH}_2-\\text{CHX}]_n-$.',
            markschemeKeyword: 'unsaturated C=C opens / trailing bonds',
          },
          {
            term: 'Addition Polymerization',
            definitionMarkdown: 'Polymerization reaction joining unsaturated monomers by opening double bonds with zero byproduct formation (**100% atom economy**).',
            markschemeKeyword: 'breaking double bond / no small molecule lost / 100% atom economy',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 9 (S1 Lab & Uncertainties) — Preserved exact title
  // =========================================================================
  {
    topicCode: 'S1',
    title: 'Chemistry SL Laboratory Apparatus, Uncertainty Propagation & Error Audit',
    summary:
      'Complete synthesis of all ten IB Chemistry SL Lab INFO sheets: glassware selection and tolerances, analogue vs digital uncertainty rules, burette ±0.10 cm³ two-reading rule, arithmetic error propagation, the <2% two-sig-fig convention, random vs systematic error diagnostics, graphing max/min lines, and scientific writing standards.',
    sourceFileNames: [
      'Lab INFO  measurement-and-data-processing.pdf',
      'Lab INFO Lab Safety Rules.pdf',
      'Lab INFO data-table-guidelines.pdf',
      'Lab INFO experimental-errors-summary.pdf',
      'Lab INFO graphing-guidelines.pdf',
      'Lab INFO making-measurements-in-the-lab.pdf',
      'Lab INFO names-of-laboratory-equipment-and-selected-apparatus.pdf',
      'Lab INFO propagation-of-uncertainties.pdf',
      'Lab INFO scientific-writing-conventions-info-sheet.pdf',
      'Lab INFO selected-laboratory-techniques.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'IB Scientific Investigation & Tool 1–3 Inquiry Questions',
        markdown:
          '- *How does glassware choice dictate whether random instrument uncertainty or systematic heat/evaporation error limits accuracy?*\n- *Why must every quantitative claim in Chemistry IA and Paper 1B propagate measurement uncertainties consistently through significant figures?*',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Apparatus Selection, Digital vs Analogue Uncertainties & The Two-Reading Rule',
      },
      {
        type: 'paragraph',
        markdown:
          'Every physical measurement in the IB laboratory carries finite uncertainty fixed by instrument resolution (*Lab INFO: Making Measurements & Measurement and Data Processing*). Selecting the right apparatus prevents huge avoidable uncertainties: never use a graduated beaker ($\\pm 5\\%\\text{–}10\\%$ markings) for stoichiometric volume measurements when a Class A volumetric pipette, volumetric flask, or burette is available.',
      },
      {
        type: 'paragraph',
        markdown:
          '| Instrument Type | Measurement Rule | Standard Classroom Specification | Reported Uncertainty (Single vs Difference $\\Delta$) |\n| :--- | :--- | :--- | :--- |\n| **Digital Analytical Balance** | $\\pm 1$ unit of the last displayed decimal place | $0.001\\text{ g}$ readability ($1\\text{ mg}$) | Single tared reading: $\\pm 0.001\\text{ g}$; mass by difference ($m_2 - m_1$): $\\pm 0.002\\text{ g}$ |\n| **50.00 cm³ Burette (Analogue)** | $\\pm \\frac{1}{2}$ smallest graduation ($0.1\\text{ cm}^3$ ticks) | Read eye-level at bottom of meniscus to $.00$ or $.05\\text{ cm}^3$ | Single reading: $\\pm 0.05\\text{ cm}^3$; **Titre $\\Delta V = V_f - V_i$: $\\pm 0.10\\text{ cm}^3$!** |\n| **25.00 cm³ Class A Pipette** | Fixed manufacturer tolerance etched on bulb | Single calibration mark (never blow out last drop!) | Delivered volume: $\\pm 0.04\\text{ cm}^3$ |\n| **250.0 cm³ Volumetric Flask** | Fixed manufacturer tolerance at $20^\\circ\\text{C}$ | Top up dropwise to meniscus mark | Standard solution volume: $\\pm 0.15\\text{ cm}^3$ |\n| **Alcohol/Mercury Thermometer** | Analogue $\\pm \\frac{1}{2}$ smallest tick ($0.2^\\circ\\text{C}$ or $1^\\circ\\text{C}$ ticks) | Typically $0.2^\\circ\\text{C}$ scale $\\implies \\pm 0.1^\\circ\\text{C}$ per reading | $\\Delta T = T_f - T_i \\implies \\pm 0.2^\\circ\\text{C}$ (two thermometer readings) |',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Most Checked Paper 1B Burette & Significant-Figure Rules',
        markdown:
          '1. **Burette $\\Delta V = \\pm 0.10\\text{ cm}^3$:** Because a titration volume requires reading BOTH initial meniscus ($V_i \\pm 0.05\\text{ cm}^3$) and final meniscus ($V_f \\pm 0.05\\text{ cm}^3$), subtracting them **adds their absolute uncertainties** to give $\\mathbf{\\pm 0.10\\text{ cm}^3}$ (even if $V_i = 0.00\\text{ cm}^3$, since $0.00$ still had to be aligned to $\\pm 0.05\\text{ cm}^3$!).\n2. Record burette values always to **2 decimal places ending in $0$ or $5$** (e.g., $24.30\\text{ cm}^3$, $24.35\\text{ cm}^3$); repeat trials until **concordant titres agree within $\\pm 0.10\\text{ cm}^3$**, and average **ONLY concordant titres** (exclude rough titre!).',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_LAB_APPARATUS_EXPLORER,
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Uncertainty Propagation Rules, Replicate Precision & Rounding Protocol',
      },
      {
        type: 'paragraph',
        markdown:
          'Follow the exact arithmetic propagation workflow specified in *Lab INFO: Propagation of Uncertainties*:\n\n- **Rule 1 — Addition and Subtraction ($y = a + b$ or $a - b$):** Add **absolute uncertainties**: $\\delta y = \\delta a + \\delta b$. Example: $T_i = 24.5 \\pm 0.1^\\circ\\text{C}$ and $T_f = 33.4 \\pm 0.1^\\circ\\text{C} \\implies \\Delta T = \\mathbf{8.9 \\pm 0.2^\\circ\\text{C}}$.\n- **Rule 2 — Multiplication, Division & Powers ($y = a \\cdot b^n / c$):** Convert each factor to **relative (percentage) uncertainty** ($\\%\\delta a = \\frac{\\delta a}{|a|}\\times 100\\%$), **add percentage uncertainties** (multiplying by $|n|$ for powers), compute unrounded $y$ and $\\delta y = y \\times \\frac{\\%\\delta y}{100\\%}$ (*note:* literature constants such as $M_r$ or $c = 4.18$ carry zero uncertainty).\n- **Rule 3 — Rounding Final Reported Values & `<2%` Convention:** Keep full unrounded precision during intermediate steps! At the very end, round absolute uncertainty $\\delta y$ to **1 significant figure** (OR **2 significant figures when relative uncertainty is $< 2\\%$**, per *Lab INFO*!), then round the calculated value $y$ so its **last decimal digit matches the place value of the rounded uncertainty** (e.g., $1033.2 \\pm 41.1 \\longrightarrow \\mathbf{1030 \\pm 40}$).\n- **Rule 4 — Repeated Trials (Never Add Trial Uncertainties!):** Repeating trials improves precision rather than degrading it! Use the **Damji & Green** consistency formula from *Lab INFO*: $\\delta \\bar{X} = \\frac{X_{\\max} - X_{\\min}}{2\\sqrt{N}}$ (or $\\pm \\frac{\\text{range}}{2}$ half-range in elementary Paper 1B checks) whenever replicate spread exceeds instrument resolution.',
      },
      {
        type: 'equation',
        latex: '\\%\\delta y = \\sum \\frac{\\delta x_i}{|x_i|} \\times 100\\% \\qquad \\text{and} \\qquad \\%\\text{ Error} = \\frac{|X_{\\text{exp}} - X_{\\text{lit}}|}{|X_{\\text{lit}}|} \\times 100\\%',
        caption: 'Total percentage uncertainty propagation vs experimental percentage error accuracy benchmark.',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_UNCERTAINTY_WORKED,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Random vs Systematic Error Audit, Graphing & IB Scientific Conventions',
      },
      {
        type: 'paragraph',
        markdown:
          'Diagnosing the root cause of discrepancy between experimental results and Data Booklet literature values requires comparing **percentage error** against **total propagated percentage uncertainty** (*Lab INFO: Experimental Errors Summary*):\n\n- **Random Errors** fluctuate unpredictably in sign and magnitude around the true value (e.g., visual meniscus estimation, stopwatch human reaction time $\\sim 0.2\\text{ s}$, air currents near an analytical balance). Repeating trials and averaging reduces random error; points scatter symmetrically above and below a linear regression line.\n- **Systematic Errors** bias every trial consistently in the same direction (e.g., heat loss to surroundings and incomplete combustion always make calorimetry $|\\Delta H_c|$ **too small / less negative**; air bubbles trapped in the burette tip draining mid-titration inflate recorded titre volume; over-shooting the phenolphthalein endpoint). **Crucially, repeating an experiment NEVER reduces systematic error!** If $\\%\\text{ error} > \\%\\text{ total uncertainty}$, you **must** identify dominant directional systematic errors and propose targeted procedural improvements (lid/draught shield, cooling-curve extrapolation to time of mixing $t_0$, blank titration, calibrating equipment).\n- **Graphing & Scientific Conventions (*Lab INFO Graphing & Data Table Guidelines*):** Every data table header must follow `Quantity / unit (±uncertainty)` (e.g., `Titre Volume / cm³ (±0.10)`) with uniform decimal precision down every column. Graphs require descriptive titles, labelled axes with units, plotted error bars where meaningful, a smooth best-fit line/curve (never dot-to-dot zig-zags!), and **maximum/minimum gradient lines** across error-bar boxes to quantify slope uncertainty ($\\delta m = \\frac{m_{\\max} - m_{\\min}}{2}$).',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_ERRORS_TECHNIQUES_MATRIX,
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Titration Conditioning, Calorimetry Technique & Laboratory Safety Protocol',
      },
      {
        type: 'paragraph',
        markdown:
          'Clean quantitative technique separates top Internal Assessment scores and Paper 1B design marks (*Lab INFO: Selected Laboratory Techniques, Data Table Guidelines, Scientific Writing & Lab Safety Rules*):\n\n- **Rinsing Rule Before Volumetric Titration:** Rinse the **burette and volumetric pipette** first with deionized water and then with a small portion of the **solution they will deliver** (so residual droplets do not dilute standard acid/base molarity). Conversely, rinse the **conical flask and volumetric flask ONLY with deionized water**—never rinse the conical flask with analyte, because residual analyte droplets would silently increase the moles present!\n- **Meniscus & Endpoint Practice:** Always remove the funnel above a burette before zeroing (a hanging funnel drop distorts initial $V_i$), read at eye level from the **bottom of the concave meniscus** against a white card, wash flask walls down with deionized water near endpoint (added water does NOT alter analyte moles!), and stop at the **first faint permanent colour change lasting $\\ge 15\\text{–}30\\text{ s}$** (pale pink for phenolphthalein into acid).\n- **Safety & Scientific Writing Conventions:** Wear ANSI/EN-rated splash goggles and lab coat throughout; add **acid slowly to water** (never water into concentrated sulfuric acid, whose exothermic hydration boils violently!); never pipette by mouth; carry out volatile halogen or organic reflux/combustion inside a working fume hood. In reports, always write passively or formally in third person, italicize Latin terms and physical variables ($m, V, T$), keep states ($s, l, g, aq$) explicit, and match table columns strictly to decimal-place alignment with raw data uncertainties.',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'IA Data Table & Zero-Intercept Pitfall Check',
        markdown:
          '- Never write units inside individual table cells—put `/ unit (±uncertainty)` **strictly in the column header** (e.g., `Mass of NaOH / g (±0.001)`).\n- Never force a calibration or Beer–Lambert graph through $(0, 0)$ unless physically justified and experimentally verified at zero concentration; evaluate any non-zero $y$-intercept explicitly as evidence of a **constant systematic zero-offset error**!',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Gas Collection & Cooling-Curve Best Practices (Lab INFO Selected Techniques)',
        markdown:
          '- **Gas Collection Choice:** Collect insoluble gases like $\\text{H}_2$ or $\\text{O}_2$ either by **gas syringe** (dry volume, no dissolution loss) or downward displacement of water; NEVER collect highly soluble gases ($\\text{NH}_3, \\text{HCl}, \\text{SO}_2$) over water—use a dry gas syringe or upward/downward air displacement inside a fume hood.\n- **Cooling-Curve Calorimetry Extrapolation:** Start recording solution temperature every $30\\text{ s}$ for $3$ minutes *before* mixing, add solid/second reagent at $t = 3.5\\text{ min}$ while stirring continuously, continue recording cooling points to $10\\text{ min}$, and draw a straight trendline through post-peak cooling points backward to $t = 3.5\\text{ min}$ to obtain the heat-loss-corrected $T_f$!\n- **Qualitative vs Quantitative Observation Hygiene (*Lab INFO Data Table Guidelines*):** Record BOTH quantitative measurements (aligned decimal precision, explicit instrument uncertainty) AND clear qualitative observations (colour transitions, effervescence rate, precipitate texture, exothermic warming) because qualitative anomalies often pinpoint hidden systematic errors during IA evaluation.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Random Error',
            definitionMarkdown: 'Unpredictable bilateral variation limiting experimental precision; reduced by conducting multiple repeat trials and using higher-resolution instruments.',
            markschemeKeyword: 'reduced by repeating trials / affects precision',
          },
          {
            term: 'Systematic Error',
            definitionMarkdown: 'Consistent directional bias reducing accuracy (e.g., calorimetry heat loss); CANNOT be reduced by repeating measurements.',
            markschemeKeyword: 'same direction / affects accuracy / not reduced by repeats',
          },
          {
            term: 'Percentage Error vs Percentage Uncertainty',
            definitionMarkdown: 'Percentage error measures discrepancy from literature value ($|\\text{exp}-\\text{lit}|/\\text{lit}$); percentage uncertainty sums instrument fractional tolerances. If $\\%\\text{ error} > \\%\\text{ uncertainty}$, systematic error is present.',
            markschemeKeyword: 'compare % error with total % uncertainty',
          },
          {
            term: 'Concordant Titres',
            definitionMarkdown: 'Repeated titration volumes agreeing within $\\pm 0.10\\text{ cm}^3$ of one another, averaged after discarding the rough pilot run.',
            markschemeKeyword: 'within 0.10 cm³ / exclude rough titre',
          },
        ],
      },
    ],
  },
];

