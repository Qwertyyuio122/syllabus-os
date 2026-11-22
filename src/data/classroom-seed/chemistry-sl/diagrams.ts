import type { PlayableDiagramSpec } from '@/types/diagrams';
import {
  VSEPR_POLARITY_LAB_SPEC,
  BONDING_CONTINUUM_LAB_SPEC,
  CHEM_ORBITAL_BOXES_EXPLORER,
  CHEM_IMF_BOILING_EXPLORER,
  CHEM_LAB_APPARATUS_EXPLORER,
} from '../diagrams/chemistry-diagrams';

// Helper to repair stray single-escaped control characters (e.g., \t from \text) in legacy shared diagram imports without editing shared files.
function sanitizeImportedSpec<T>(value: T): T {
  if (typeof value === 'string') {
    return value
      .replace(/\t(?=ext\b|o\b|imes\b)/g, '\\t')
      .replace(/\x08(?=ar\b)/g, '\\b')
      .replace(/\f(?=rac\b)/g, '\\f') as unknown as T;
  }
  if (Array.isArray(value)) {
    return value.map((item) => sanitizeImportedSpec(item)) as unknown as T;
  }
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) {
      out[k] = sanitizeImportedSpec(v);
    }
    return out as T;
  }
  return value;
}

// ---------------------------------------------------------------------------
// Chemistry SL v3 Bespoke Diagrams, Simulations & Worked Examples (Part 1: S1–S2)
// Every spec ID is prefixed `chem-v3-` so legacy enhancer overrides never touch it.
// ---------------------------------------------------------------------------

// S1.1 — 5-Stage Heating Curve & Kinetic–Potential Energy Transitions
export const CHEM_V3_HEATING_CURVE: PlayableDiagramSpec = {
  type: 'step_mechanism',
  id: 'chem-v3-heating-curve',
  title: 'Five-Stage Heating Curve: Kinetic vs Potential Energy Plateaus',
  caption:
    'Trace constant-rate heating of pure water from ice (−20 °C) to superheated steam (>100 °C). Temperature rises ONLY when average kinetic energy increases; plateaus stay isothermal while absorbed heat breaks intermolecular forces.',
  palette: 'scientific',
  nodes: [
    { id: 's1', x: 75, y: 310, label: 'Stage 1: Solid Ice', sublabel: 'T < 0 °C · Ek↑', group: 'Warming' },
    { id: 's2', x: 225, y: 235, label: 'Stage 2: Fusion Plateau', sublabel: '0 °C const · ΔHfus', group: 'Phase Change' },
    { id: 's3', x: 385, y: 180, label: 'Stage 3: Liquid Water', sublabel: '0→100 °C · Ek↑', group: 'Warming' },
    { id: 's4', x: 555, y: 110, label: 'Stage 4: Boiling Plateau', sublabel: '100 °C const · ΔHvap', group: 'Phase Change' },
    { id: 's5', x: 710, y: 55, label: 'Stage 5: Steam (Gas)', sublabel: 'T > 100 °C · Ek↑', group: 'Warming' },
  ],
  edges: [
    { id: 'e12', from: 's1', to: 's2', label: 'Reach m.p. 273.15 K' },
    { id: 'e23', from: 's2', to: 's3', label: 'All H₂O(s) melted' },
    { id: 'e34', from: 's3', to: 's4', label: 'Reach b.p. 373.15 K' },
    { id: 'e45', from: 's4', to: 's5', label: 'IMFs fully broken' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Sloped Segment A→B: Solid Warming (Average Ek Increases)',
      descriptionMarkdown:
        'Below $0^\\circ\\text{C}$ ($273.15\\text{ K}$), thermal energy increases the vibrational kinetic energy of fixed molecules in the crystal lattice ($q = mc_{\\text{ice}}\\Delta T$). Since $T\\propto \\bar{E}_k$, thermometer temperature rises steadily.',
      formulaLatex: '\\bar{E}_k = \\tfrac{3}{2} k_B T \\quad (\\text{sloped segment } \\Rightarrow \\Delta T > 0)',
      activeNodeIds: ['s1'],
      activeEdgeIds: [],
      metrics: [
        { label: 'State', value: 'Solid lattice' },
        { label: 'Kinetic Energy (Ek)', value: 'Increasing' },
        { label: 'Potential Energy (Ep)', value: 'Constant' },
      ],
    },
    {
      stepNumber: 2,
      title: 'Plateau B→C: Melting / Fusion (Isothermal Ep Increase)',
      descriptionMarkdown:
        'At $0^\\circ\\text{C}$ ($273.15\\text{ K}$), absorbed energy does **not** speed up molecules; instead it overcomes hydrogen bonds locking the rigid lattice so molecules slide past one another. Temperature stays **strictly constant** until all solid melts.',
      formulaLatex: '\\text{H}_2\\text{O}(s) \\rightarrow \\text{H}_2\\text{O}(l),\\quad \\Delta H_{\\text{fus}}^\\circ = +6.01\\text{ kJ mol}^{-1}',
      activeNodeIds: ['s2'],
      activeEdgeIds: ['e12'],
      metrics: [
        { label: 'Temperature', value: 'Constant 273.15 K' },
        { label: 'Kinetic Energy (Ek)', value: 'Constant' },
        { label: 'Potential Energy (Ep)', value: 'Increasing' },
      ],
    },
    {
      stepNumber: 3,
      title: 'Sloped Segment C→D: Liquid Warming (Shorter Rise per Heat Input)',
      descriptionMarkdown:
        'Once liquid, molecules move translationally through the bulk liquid with continually reforming hydrogen bonds. Temperature climbs linearly ($q = mc_{\\text{water}}\\Delta T$, $c = 4.18\\text{ J g}^{-1}\\text{ K}^{-1}$) toward $100^\\circ\\text{C}$.',
      formulaLatex: 'T/\\text{K} = t/^\\circ\\text{C} + 273.15 \\quad (373.15\\text{ K at }100^\\circ\\text{C})',
      activeNodeIds: ['s3'],
      activeEdgeIds: ['e23'],
      metrics: [
        { label: 'State', value: 'Liquid bulk' },
        { label: 'Kinetic Energy (Ek)', value: 'Increasing' },
        { label: 'Specific Heat c', value: '4.18 J g⁻¹ K⁻¹' },
      ],
    },
    {
      stepNumber: 4,
      title: 'Long Plateau D→E: Vaporization (Why ΔHvap ≫ ΔHfus)',
      descriptionMarkdown:
        'At $100^\\circ\\text{C}$ ($373.15\\text{ K}$), the boiling plateau is much wider than melting because **all** remaining intermolecular hydrogen bonds must be completely severed and particles must push back atmospheric pressure ($100\\text{ kPa}$) into the gas phase.',
      formulaLatex: '\\text{H}_2\\text{O}(l) \\rightarrow \\text{H}_2\\text{O}(g),\\quad \\Delta H_{\\text{vap}}^\\circ = +40.7\\text{ kJ mol}^{-1}',
      activeNodeIds: ['s4'],
      activeEdgeIds: ['e34'],
      metrics: [
        { label: 'Temperature', value: 'Constant 373.15 K' },
        { label: 'Kinetic Energy (Ek)', value: 'Constant' },
        { label: 'Potential Energy (Ep)', value: 'Large Increase' },
      ],
    },
    {
      stepNumber: 5,
      title: 'Sloped Segment E→F: Superheated Gas (Rapid Ek Expansion)',
      descriptionMarkdown:
        'In the gaseous state, molecules translate rapidly with negligible intermolecular attraction and large separation. Heating increases molecular translational speeds and pressure (if rigid container) or volume.',
      formulaLatex: 'q = mc_{\\text{steam}}\\Delta T,\\quad \\Delta T/\\text{K} = \\Delta t/^\\circ\\text{C}',
      activeNodeIds: ['s5'],
      activeEdgeIds: ['e45'],
      metrics: [
        { label: 'State', value: 'Gas / Steam' },
        { label: 'Kinetic Energy (Ek)', value: 'Increasing rapidly' },
        { label: 'Particle Spacing', value: '~10× liquid' },
      ],
    },
  ],
};

// S1.2 — Nuclear Atom & Mass Spectrometer Explorer
export const CHEM_V3_NUCLEAR_MASS_SPEC_EXPLORER: PlayableDiagramSpec = {
  type: 'labeled_explorer',
  id: 'chem-v3-nuclear-mass-spec-explorer',
  title: 'Mass Spectrometer & Nuclear Isotopes Explorer (S1.2)',
  caption:
    'Inspect the five stages of a sector mass spectrometer (vaporization, electron-impact ionization, electrostatic acceleration, magnetic deflection by m/z, and ion detection) alongside nuclear notation.',
  viewBox: '0 0 800 440',
  palette: 'scientific',
  shapes: [
    { kind: 'rect', x: 24, y: 24, width: 752, height: 392, rx: 16, fill: '#F8FAFC', stroke: '#CBD5E1', strokeWidth: 1.5 },
    { kind: 'text', x: 400, y: 54, text: 'Mass Spectrometer Path: m/z Separation of Isotopes', fontSize: 15, fontWeight: 700, textAnchor: 'middle', fill: '#0F172A' },
    // Stage 1: Vaporization chamber
    { kind: 'rect', x: 50, y: 150, width: 100, height: 80, rx: 10, fill: '#DBEAFE', stroke: '#2563EB', strokeWidth: 2, hotspotId: 'vaporize' },
    { kind: 'text', x: 100, y: 185, text: '1. Vaporize', fontSize: 12, fontWeight: 700, textAnchor: 'middle', fill: '#1E3A8A' },
    { kind: 'text', x: 100, y: 204, text: 'Sample → X(g)', fontSize: 10, textAnchor: 'middle', fill: '#1D4ED8' },
    // Stage 2: Ionization
    { kind: 'rect', x: 180, y: 140, width: 115, height: 100, rx: 10, fill: '#FEF3C7', stroke: '#D97706', strokeWidth: 2, hotspotId: 'ionize' },
    { kind: 'text', x: 237, y: 180, text: '2. Ionize', fontSize: 12, fontWeight: 700, textAnchor: 'middle', fill: '#78350F' },
    { kind: 'text', x: 237, y: 199, text: 'e⁻ beam → X⁺(g)', fontSize: 10, textAnchor: 'middle', fill: '#B45309' },
    // Stage 3: Acceleration plates
    { kind: 'rect', x: 325, y: 150, width: 85, height: 80, rx: 8, fill: '#FCE7F3', stroke: '#DB2777', strokeWidth: 2, hotspotId: 'accelerate' },
    { kind: 'text', x: 367, y: 185, text: '3. Accelerate', fontSize: 12, fontWeight: 700, textAnchor: 'middle', fill: '#831843' },
    { kind: 'text', x: 367, y: 204, text: '− plates (Ek const)', fontSize: 10, textAnchor: 'middle', fill: '#BE185D' },
    // Stage 4: Magnetic field curved paths
    { kind: 'rect', x: 440, y: 105, width: 165, height: 185, rx: 14, fill: '#EDE9FE', stroke: '#7C3AED', strokeWidth: 2, hotspotId: 'deflect' },
    { kind: 'text', x: 522, y: 128, text: '4. Magnetic Deflection', fontSize: 12, fontWeight: 700, textAnchor: 'middle', fill: '#4C1D95' },
    { kind: 'path', d: 'M 440 190 Q 520 190 580 140', fill: 'none', stroke: '#10B981', strokeWidth: 3, animatedFlow: true, hotspotId: 'deflect' },
    { kind: 'path', d: 'M 440 190 Q 535 195 605 185', fill: 'none', stroke: '#2563EB', strokeWidth: 3, animatedFlow: true, hotspotId: 'deflect' },
    { kind: 'path', d: 'M 440 190 Q 545 215 605 245', fill: 'none', stroke: '#EF4444', strokeWidth: 3, animatedFlow: true, hotspotId: 'deflect' },
    { kind: 'text', x: 525, y: 268, text: 'Lighter m/z bends MORE', fontSize: 10, fontWeight: 600, textAnchor: 'middle', fill: '#5B21B6' },
    // Stage 5: Detector
    { kind: 'rect', x: 635, y: 120, width: 110, height: 155, rx: 10, fill: '#D1FAE5', stroke: '#059669', strokeWidth: 2, hotspotId: 'detect' },
    { kind: 'text', x: 690, y: 150, text: '5. Detector', fontSize: 12, fontWeight: 700, textAnchor: 'middle', fill: '#064E3B' },
    { kind: 'line', x1: 655, y1: 245, x2: 725, y2: 245, stroke: '#047857', strokeWidth: 2, hotspotId: 'detect' },
    { kind: 'rect', x: 668, y: 175, width: 14, height: 70, fill: '#059669', hotspotId: 'detect' },
    { kind: 'rect', x: 700, y: 215, width: 14, height: 30, fill: '#10B981', hotspotId: 'detect' },
    { kind: 'text', x: 690, y: 263, text: 'Peak height ∝ %', fontSize: 10, textAnchor: 'middle', fill: '#065F46' },
    // Bottom nuclear notation card
    { kind: 'rect', x: 60, y: 315, width: 680, height: 78, rx: 10, fill: '#EFF6FF', stroke: '#93C5FD', strokeWidth: 1.5, hotspotId: 'nuclear' },
    { kind: 'text', x: 400, y: 344, text: 'Nuclear Notation ᴬ_Z X:  A (mass no.) = protons + neutrons | Z (atomic no.) = protons', fontSize: 12, fontWeight: 700, textAnchor: 'middle', fill: '#1E3A8A' },
    { kind: 'text', x: 400, y: 370, text: 'Isotopes: SAME Z (identical valence e⁻ & chemical reactions), DIFFERENT A / neutron count (different physical m.p./density)', fontSize: 11, textAnchor: 'middle', fill: '#334155' },
  ],
  hotspots: [
    {
      id: 'vaporize',
      x: 100,
      y: 190,
      label: 'Vaporization Chamber',
      category: 'Stage 1',
      examKeyword: 'gaseous state under vacuum',
      detailMarkdown: 'The sample is heated under **vacuum** so particles enter the gas phase without colliding with air molecules.',
    },
    {
      id: 'ionize',
      x: 237,
      y: 190,
      label: 'Electron-Impact Ionization',
      category: 'Stage 2',
      examKeyword: 'positively charged gaseous ions X+(g)',
      detailMarkdown: 'High-energy electrons knock an electron off gaseous atoms: $\\ce{X(g) + e- -> X+(g) + 2e-}$. Only **positively charged ions** are deflected and detected. (Doubly charged $\\ce{X^{2+}}$ gives half the $m/z$!) ',
    },
    {
      id: 'accelerate',
      x: 367,
      y: 190,
      label: 'Electrostatic Acceleration',
      category: 'Stage 3',
      examKeyword: 'uniform electric field',
      detailMarkdown: 'Negatively charged plates accelerate $+1$ cations to identical kinetic energy ($E_k = qV$) through a narrow collimating slit.',
    },
    {
      id: 'deflect',
      x: 522,
      y: 190,
      label: 'Magnetic Field Deflection',
      category: 'Stage 4',
      examKeyword: 'mass-to-charge ratio (m/z)',
      detailMarkdown: 'At fixed magnetic field strength $B$, **lighter ions or higher charge** (lower $m/z$) deflect through a tighter arc; heavier ions deflect less.',
    },
    {
      id: 'detect',
      x: 690,
      y: 198,
      label: 'Ion Current Detector & Spectrum',
      category: 'Stage 5',
      examKeyword: 'relative abundance vs m/z',
      detailMarkdown: 'Each ion picks up an electron on hitting the detector plate, inducing a current proportional to its **relative abundance** on the $y$-axis against **$m/z$** on the $x$-axis.',
    },
    {
      id: 'nuclear',
      x: 400,
      y: 354,
      label: 'Nuclear Notation & Isotopes',
      category: 'S1.2 Core',
      examKeyword: 'same protons, different neutrons',
      detailMarkdown: 'Remember IB chemical vs physical distinction: isotopes have **identical electron configurations** $\\implies$ identical chemical properties, while differing nuclear masses alter density, effusion rate, and boiling point slightly.',
    },
  ],
};

// S1.2 — Isotopes Ar Algebra & Cl2 Molecular Mass Spectrum Worked Example
export const CHEM_V3_ISOTOPES_WORKED: PlayableDiagramSpec = {
  type: 'worked_example',
  id: 'chem-v3-isotopes-worked',
  title: 'Worked Example: Isotopic Abundance Algebra & Cl₂ Molecular Peaks',
  caption:
    'Master the two flagship IB SL S1.2 Paper 2 problems: solving fractional abundance from Ar (Bylikin & Worksheet 1.2) and predicting diatomic Cl₂⁺ mass spectrum peak ratios.',
  sourceLabel: 'Bylikin Oxford 2023 S1.2 + Worksheet 1.2',
  commandTerm: 'Determine / Deduce',
  marks: 4,
  problemMarkdown:
    'Gallium ($A_r = 69.72$) consists of two stable isotopes: $^{69}\\text{Ga}$ (relative isotopic mass $68.93$) and $^{71}\\text{Ga}$ (relative isotopic mass $70.92$). (a) **Determine** the percentage abundance of each isotope. (b) **Deduce** the $m/z$ values and relative peak intensity ratio for the molecular ions of $\\text{Cl}_2$ ($75\\%$ $^{35}\\text{Cl}$, $25\\%$ $^{37}\\text{Cl}$).',
  givenData: [
    { label: 'Ar(Ga)', value: '69.72' },
    { label: 'Isotopes of Ga', value: '⁶⁹Ga (68.93) and ⁷¹Ga (70.92)' },
    { label: 'Cl isotope ratio', value: '³⁵Cl : ³⁷Cl = 0.75 : 0.25 (3 : 1)' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Set fractional abundances x and (1 − x) for Gallium',
      workingMarkdown: 'Let the fractional abundance of $^{69}\\text{Ga}$ be $x$, so the fractional abundance of $^{71}\\text{Ga}$ is $1 - x$.',
      formulaLatex: '68.93x + 70.92(1 - x) = 69.72',
      markCode: 'M1',
      rationale: 'Total isotopic fractions always sum to 1 (or percentages sum to 100%).',
    },
    {
      stepNumber: 2,
      title: 'Solve linearly for x and convert to % abundance',
      workingMarkdown: '$68.93x + 70.92 - 70.92x = 69.72 \\implies -1.99x = -1.20 \\implies x = 0.6030$ ($60.3\\%\\ ^{69}\\text{Ga}$ and $39.7\\%\\ ^{71}\\text{Ga}$).',
      formulaLatex: 'x = \\frac{70.92 - 69.72}{70.92 - 68.93} = \\frac{1.20}{1.99} = 0.603',
      markCode: 'A1',
      rationale: 'Verify sanity: Ar = 69.72 lies closer to 69 than 71, confirming ⁶⁹Ga > 50%.',
    },
    {
      stepNumber: 3,
      title: 'Enumerate all combinations of two Cl atoms in Cl₂⁺',
      workingMarkdown:
        'A $\\text{Cl}_2^+$ molecular ion forms from any pair of Cl isotopes: $(^{35}\\text{Cl}^{35}\\text{Cl})^+$ at $m/z=70$, $(^{35}\\text{Cl}^{37}\\text{Cl})^+$ **or** $(^{37}\\text{Cl}^{35}\\text{Cl})^+$ at $m/z=72$, and $(^{37}\\text{Cl}^{37}\\text{Cl})^+$ at $m/z=74$.',
      formulaLatex: 'm/z \\in \\{70,\\; 72,\\; 74\\}',
      markCode: 'M1',
      rationale: 'Notice there are TWO distinct permutations giving m/z = 72.',
    },
    {
      stepNumber: 4,
      title: 'Multiply independent probabilities for the 9 : 6 : 1 ratio',
      workingMarkdown:
        '$P(70) = \\tfrac{3}{4}\\times\\tfrac{3}{4} = \\tfrac{9}{16}$; $P(72) = 2\\times\\tfrac{3}{4}\\times\\tfrac{1}{4} = \\tfrac{6}{16}$; $P(74) = \\tfrac{1}{4}\\times\\tfrac{1}{4} = \\tfrac{1}{16} \\implies \\mathbf{9 : 6 : 1}$.',
      formulaLatex: 'P(70) : P(72) : P(74) = (0.75)^2 : 2(0.75)(0.25) : (0.25)^2 = 9 : 6 : 1',
      markCode: 'A1',
      rationale: 'Forgetting the factor of 2 for m/z 72 is the most common S1.2 Paper 1 MCQ error.',
    },
  ],
  finalAnswerMarkdown:
    '(a) $^{69}\\text{Ga} = 60.3\\%$, $^{71}\\text{Ga} = 39.7\\%$. (b) Molecular peaks at $m/z = 70,\\ 72,\\ 74$ with relative heights **$9 : 6 : 1$** (in addition to fragment peaks at $m/z = 35,\\ 37$ in a $3:1$ ratio).',
  commonTrapMarkdown:
    'Never use integer mass numbers (69 and 71) if exact isotopic masses (68.93 and 70.92) are provided in the question!',
};

// S1.3 — Bohr Hydrogen Emission Spectrum Simulation
export const CHEM_V3_BOHR_SPECTRA_SIM: PlayableDiagramSpec = {
  type: 'scientific_simulation',
  id: 'chem-v3-bohr-spectra-sim',
  title: 'Interactive Bohr Hydrogen Emission Spectrum & Convergence Simulator',
  caption:
    'Select upper and lower main energy levels n to visualize discrete photon emission, UV Lyman vs visible Balmer vs IR Paschen series, and convergence at n = ∞.',
  simulationKind: 'bohr_emission_spectra',
  initialParams: {
    nLower: 2,
    nUpper: 4,
    showConvergence: true,
  },
  presets: [
    {
      id: 'balmer-red',
      label: 'Balmer H-α Red (n=3 → n=2)',
      description: '656 nm red line visible in hydrogen discharge tubes.',
      params: { nLower: 2, nUpper: 3, showConvergence: true },
    },
    {
      id: 'lyman-convergence',
      label: 'Lyman Convergence (n=∞ → n=1)',
      description: 'UV ionization limit corresponding to 1312 kJ mol⁻¹ (IE1 of H).',
      params: { nLower: 1, nUpper: 8, showConvergence: true },
    },
    {
      id: 'paschen-ir',
      label: 'Paschen Infrared (n=5 → n=3)',
      description: 'Lower-energy infrared transition.',
      params: { nLower: 3, nUpper: 5, showConvergence: false },
    },
  ],
  formulaLatex: '\\Delta E = h f = \\frac{h c}{\\lambda},\\quad h = 6.63 \\times 10^{-34}\\text{ J}\\cdot\\text{s}',
  examTakeaways: [
    'Lines converge (get closer together) at HIGHER frequency / HIGHER energy / SHORTER wavelength because adjacent shells shrink in energy spacing as n increases.',
    'Emission produces bright coloured lines on a black background (electron falls n_high → n_low); absorption produces dark lines on a continuous spectrum.',
    'Planck constant units are J·s (joule-seconds), NEVER J/s (Day 1.3.3 Slide 25 fix).',
  ],
};

// S1.3 — Enhanced Orbital Boxes & Cr/Cu/Ionization Rules Explorer (preserves rich visual layout with v3 SL accuracy)
export const CHEM_V3_ORBITAL_BOXES_EXPLORER: PlayableDiagramSpec = sanitizeImportedSpec({
  ...CHEM_ORBITAL_BOXES_EXPLORER,
  id: 'chem-v3-orbital-boxes-explorer',
  title: 'Orbital Box Diagrams, Cr/Cu Exceptions & 4s-Before-3d Ionization (S1.3)',
  caption:
    'Click any orbital block or rule to review Hund’s rule, Pauli exclusion, Cr/Cu 3d stability exceptions, and why transition-metal cations lose 4s electrons before 3d.',
});

// S1.3 — Emission Photon Energy & Convergence Limit Worked Example
export const CHEM_V3_EMISSION_ENERGY_WORKED: PlayableDiagramSpec = {
  type: 'worked_example',
  id: 'chem-v3-emission-energy-worked',
  title: 'Worked Example: Photon Energy, Wavelength & Ionization Convergence',
  caption:
    'Convert between wavelength λ, frequency f, photon energy ΔE (in J), and molar energy (in kJ mol⁻¹) using exact IB Data Booklet constants.',
  sourceLabel: 'Day 1.3.3 Slides + Worksheet 1.3',
  commandTerm: 'Calculate',
  marks: 4,
  problemMarkdown:
    'The convergence limit of the Lyman series ($n=\\infty \\to n=1$) in the hydrogen emission spectrum occurs at wavelength $\\lambda = 91.2\\text{ nm}$. **Calculate** (a) the frequency $f$ in $\\text{Hz}$, (b) the energy of one photon in $\\text{J}$, and (c) the first ionization energy of hydrogen in $\\text{kJ mol}^{-1}$.',
  givenData: [
    { label: 'λ (Lyman limit)', value: '91.2 nm = 91.2 × 10⁻⁹ m' },
    { label: 'c', value: '3.00 × 10⁸ m s⁻¹' },
    { label: 'h', value: '6.63 × 10⁻³⁴ J·s' },
    { label: 'NA', value: '6.02 × 10²³ mol⁻¹' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Convert wavelength nm → m and find frequency f',
      workingMarkdown: '$c = \\lambda f \\implies f = \\dfrac{3.00 \\times 10^8\\text{ m s}^{-1}}{91.2 \\times 10^{-9}\\text{ m}} = 3.29 \\times 10^{15}\\text{ s}^{-1}$ (Hz).',
      formulaLatex: 'f = \\frac{c}{\\lambda} = 3.29 \\times 10^{15}\\text{ Hz}',
      markCode: 'M1',
      rationale: '1 nm = 10⁻⁹ m; never leave λ in nm when c is in m s⁻¹.',
    },
    {
      stepNumber: 2,
      title: 'Calculate single-photon energy using h = 6.63 × 10⁻³⁴ J·s',
      workingMarkdown: '$\\Delta E = hf = (6.63 \\times 10^{-34}\\text{ J}\\cdot\\text{s})(3.29 \\times 10^{15}\\text{ s}^{-1}) = 2.18 \\times 10^{-18}\\text{ J}$.',
      formulaLatex: '\\Delta E_{\\text{photon}} = hf = 2.18 \\times 10^{-18}\\text{ J}',
      markCode: 'M1',
      rationale: 'J·s multiplied by s⁻¹ cancels seconds, yielding Joules per photon.',
    },
    {
      stepNumber: 3,
      title: 'Scale by Avogadro constant and divide by 1000 for kJ mol⁻¹',
      workingMarkdown: '$\\Delta E_{\\text{molar}} = (2.181 \\times 10^{-18}\\text{ J})(6.02 \\times 10^{23}\\text{ mol}^{-1}) = 1.313 \\times 10^6\\text{ J mol}^{-1} = \\mathbf{1310\\text{ kJ mol}^{-1}}$ (3 s.f.; Data Booklet: $1312\\text{ kJ mol}^{-1}$).',
      formulaLatex: 'IE_1 = \\frac{\\Delta E \\cdot N_A}{1000} = 1313\\text{ kJ mol}^{-1}',
      markCode: 'A1 + A1',
      rationale: 'Both Lyman convergence (n=∞→1) and ground-state ionization (n=1→∞) span the exact same energy gap.',
    },
  ],
  finalAnswerMarkdown:
    '(a) $3.29 \\times 10^{15}\\text{ Hz}$; (b) $2.18 \\times 10^{-18}\\text{ J}$; (c) $1310\\text{ kJ mol}^{-1}$ (unrounded $1313\\text{ kJ mol}^{-1}$).',
  commonTrapMarkdown:
    'Avoid premature rounding of f or ΔE during multi-step calculations, and watch for Slide 25 typo: h is J·s, NOT J/s!',
};

// S1.4 — Combustion Empirical Formula & Serial Dilution Worked Example
export const CHEM_V3_MOLE_COMBUSTION_WORKED: PlayableDiagramSpec = {
  type: 'worked_example',
  id: 'chem-v3-mole-combustion-worked',
  title: 'Worked Example: Combustion Empirical Formula & Serial Dilution (S1.4)',
  caption:
    'Combine carbon/hydrogen trapping from complete combustion (Bylikin Worked Ex. 6) with volumetric flask dilution concentration (Bylikin Worked Ex. 9).',
  sourceLabel: 'Bylikin Oxford 2023 pp. 70 & 75',
  commandTerm: 'Deduce / Calculate',
  marks: 5,
  problemMarkdown:
    '(a) Complete combustion of an unknown hydrocarbon in excess oxygen produces $26.41\\text{ g}$ of $\\text{CO}_2$ and $13.52\\text{ g}$ of $\\text{H}_2\\text{O}$. **Deduce** its empirical formula. (b) Separately, $6.624\\text{ g}$ of $\\text{Na}_2\\text{CO}_3$ ($M = 105.99\\text{ g mol}^{-1}$) is dissolved to make $250.0\\text{ cm}^3$ of stock solution, and $10.0\\text{ cm}^3$ is diluted to $100.0\\text{ cm}^3$. **Calculate** the final molar concentration.',
  givenData: [
    { label: 'm(CO₂)', value: '26.41 g (M = 44.01 g mol⁻¹)' },
    { label: 'm(H₂O)', value: '13.52 g (M = 18.02 g mol⁻¹)' },
    { label: 'm(Na₂CO₃)', value: '6.624 g in 250.0 cm³ → 10.0 cm³ diluted to 100.0 cm³' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Convert CO₂ and H₂O masses to moles of C and H atoms',
      workingMarkdown:
        'Each mole of $\\text{CO}_2$ contains $1\\text{ mol C}$, while each mole of $\\text{H}_2\\text{O}$ contains **$2\\text{ mol H}$**:\n$n(\\text{C}) = n(\\text{CO}_2) = \\frac{26.41}{44.01} = 0.6001\\text{ mol}$; $n(\\text{H}) = 2 \\times n(\\text{H}_2\\text{O}) = 2 \\times \\frac{13.52}{18.02} = 1.501\\text{ mol}$.',
      formulaLatex: 'n(\\text{H}) = 2 \\times n(\\text{H}_2\\text{O}) = 1.501\\text{ mol}',
      markCode: 'M1 + M1',
      rationale: 'Never forget the factor of 2 when converting moles of H₂O to moles of H atoms!',
    },
    {
      stepNumber: 2,
      title: 'Normalize to smallest mole quantity and scale to integers',
      workingMarkdown:
        'Divide by $0.6001$: $\\text{C}:\\text{H} = 1.000 : 2.501$. Multiply both by $2$ to obtain lowest whole numbers: **$\\text{C}_2\\text{H}_5$**.',
      formulaLatex: '1 : 2.5 \\xrightarrow{\\times 2} 2 : 5 \\implies \\mathbf{C_2H_5}',
      markCode: 'A1',
      rationale: 'If the compound also contained oxygen, subtract m(C)+m(H) from sample mass to get m(O).',
    },
    {
      stepNumber: 3,
      title: 'Calculate stock molarity c₁ and apply c₁V₁ = c₂V₂',
      workingMarkdown:
        '$n(\\text{Na}_2\\text{CO}_3) = \\frac{6.624}{105.99} = 0.06250\\text{ mol}$ in $0.2500\\text{ dm}^3 \\implies c_1 = 0.2500\\text{ mol dm}^{-3}$. Then $c_2 = c_1\\frac{V_1}{V_2} = 0.2500\\times\\frac{10.0}{100.0} = \\mathbf{0.0250\\text{ mol dm}^{-3}}$.',
      formulaLatex: 'c_2 = \\frac{c_1 V_1}{V_2} = 0.2500 \\times \\frac{10.0}{100.0} = 0.0250\\text{ mol dm}^{-3}',
      markCode: 'M1 + A1',
      rationale: 'Pipetting 10.0 cm³ into 100.0 cm³ gives a 10-fold dilution; units of V₁ and V₂ cancel directly.',
    },
  ],
  finalAnswerMarkdown:
    '(a) Empirical formula = **$\\text{C}_2\\text{H}_5$**; (b) Diluted $[\\text{Na}_2\\text{CO}_3] = \\mathbf{0.0250\\text{ mol dm}^{-3}}$.',
  commonTrapMarkdown:
    'For empirical formulas with oxygen present, oxygen from air reacts during combustion—so you MUST find m(O) by difference from original sample mass, NOT from CO₂ + H₂O!',
};

// S1.5 — Ideal Gas Law & IB STP 22.7 dm3 mol-1 Worked Example
export const CHEM_V3_IDEAL_GAS_STP_WORKED: PlayableDiagramSpec = {
  type: 'worked_example',
  id: 'chem-v3-ideal-gas-stp-worked',
  title: 'Worked Example: IB STP (22.7 dm³ mol⁻¹) & Ideal Gas Equation PV = nRT',
  caption:
    'Verify molar mass at IB STP (273.15 K, 100 kPa) and solve SI-consistent PV = nRT problems from Bylikin S1.5.',
  sourceLabel: 'Bylikin Oxford 2023 pp. 85 & 91',
  commandTerm: 'Determine',
  marks: 4,
  problemMarkdown:
    '(a) A $2.00\\text{ dm}^3$ flask of an unknown gas at IB **STP** ($273.15\\text{ K}$, $100\\text{ kPa}$) has a mass of $2.47\\text{ g}$. **Determine** its molar mass. (b) Next, a $3.30\\text{ g}$ organic vapour occupies $1.91\\text{ dm}^3$ at $150^\\circ\\text{C}$ and $101.3\\text{ kPa}$. **Calculate** its molar mass using $PV = nRT$.',
  givenData: [
    { label: 'IB STP Vm', value: '22.7 dm³ mol⁻¹ at 273.15 K, 100 kPa' },
    { label: 'R (Gas Constant)', value: '8.31 J K⁻¹ mol⁻¹' },
    { label: 'Unit conversions', value: '1 dm³ = 10⁻³ m³; 1 kPa = 10³ Pa; T(K) = t(°C) + 273.15' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Part (a): Use Vm = 22.7 dm³ mol⁻¹ at STP to find moles n',
      workingMarkdown:
        '$n = \\dfrac{V}{V_m} = \\dfrac{2.00\\text{ dm}^3}{22.7\\text{ dm}^3\\text{ mol}^{-1}} = 0.08811\\text{ mol}$. Never use 22.4 dm³ mol⁻¹!',
      formulaLatex: 'n = \\frac{2.00}{22.7} = 0.08811\\text{ mol}',
      markCode: 'M1',
      rationale: 'IB adopted 100 kPa standard pressure (IUPAC), giving Vm = 22.7 dm³ mol⁻¹.',
    },
    {
      stepNumber: 2,
      title: 'Divide sample mass by moles to obtain molar mass',
      workingMarkdown: '$M = \\dfrac{m}{n} = \\dfrac{2.47\\text{ g}}{0.08811\\text{ mol}} = \\mathbf{28.0\\text{ g mol}^{-1}}$ (consistent with $\\text{N}_2$ or $\\text{CO}$).',
      formulaLatex: 'M = \\frac{2.47}{0.08811} = 28.0\\text{ g mol}^{-1}',
      markCode: 'A1',
      rationale: 'Always check 3 significant figures matching 2.00 dm³ and 2.47 g.',
    },
    {
      stepNumber: 3,
      title: 'Part (b): Convert P, V, T cleanly and solve M = mRT / (PV)',
      workingMarkdown:
        'Convert $T = 150 + 273.15 = 423.15\\text{ K}$. When $P$ is in $\\text{kPa}$ and $V$ is in $\\text{dm}^3$, $P(\\text{kPa}) \\cdot V(\\text{dm}^3) = (10^3\\text{ Pa})(10^{-3}\\text{ m}^3) = \\text{J}$!\n$n = \\dfrac{(101.3)(1.91)}{(8.31)(423.15)} = 0.05503\\text{ mol}$.',
      formulaLatex: 'n = \\frac{PV}{RT} = \\frac{101.3\\text{ kPa} \\times 1.91\\text{ dm}^3}{8.31\\text{ J K}^{-1}\\text{mol}^{-1} \\times 423.15\\text{ K}} = 0.05503\\text{ mol}',
      markCode: 'M1',
      rationale: 'kPa × dm³ equals Pa × m³ = J automatically, saving conversion errors.',
    },
    {
      stepNumber: 4,
      title: 'Compute organic vapour molar mass',
      workingMarkdown: '$M = \\dfrac{3.30\\text{ g}}{0.05503\\text{ mol}} = \\mathbf{60.0\\text{ g mol}^{-1}}$.',
      formulaLatex: 'M = \\frac{3.30}{0.05503} = 60.0\\text{ g mol}^{-1}',
      markCode: 'A1',
      rationale: 'Watch units carefully if volume is given in cm³ (divide by 1000 first for dm³).',
    },
  ],
  finalAnswerMarkdown:
    '(a) **$28.0\\text{ g mol}^{-1}$** using $V_m = 22.7\\text{ dm}^3\\text{ mol}^{-1}$; (b) **$60.0\\text{ g mol}^{-1}$** via $PV = nRT$.',
  commonTrapMarkdown:
    'Using T in °C inside PV = nRT or T₁/T₂, or using 22.4 instead of 22.7 dm³ mol⁻¹ at IB STP, loses all method/accuracy marks!',
};

// S1.5 — Ideal vs Real Gas Comparison Matrix
export const CHEM_V3_REAL_VS_IDEAL_GAS_MATRIX: PlayableDiagramSpec = {
  type: 'comparison_matrix',
  id: 'chem-v3-real-vs-ideal-gas-matrix',
  title: 'Ideal Gas Model vs Real Gas Deviations (S1.5)',
  caption:
    'Compare ideal kinetic molecular assumptions with real-gas behaviour under extreme pressure, low temperature, and strong intermolecular forces.',
  columns: ['Ideal Gas Postulate', 'Real Gas Reality', 'When Deviation Peaks', 'Observed PV/(nRT) Effect'],
  rows: [
    {
      criterion: 'Particle Volume',
      cells: [
        'Point particles with zero volume compared to container',
        'Molecules occupy finite excluded volume',
        'Very high pressure (compressed gas, small free volume)',
        'PV/(nRT) > 1 (gas less compressible than ideal)',
      ],
      ibExamTip: 'State specifically: "Volume of gas molecules is not negligible compared with container volume at high pressure."',
    },
    {
      criterion: 'Intermolecular Forces',
      cells: [
        'Zero attractive or repulsive forces between particles',
        'LDFs, dipole–dipole, or H-bonds pull molecules together',
        'Low temperature (slower Ek allows IMFs to act)',
        'PV/(nRT) < 1 (wall impact pressure drops below ideal)',
      ],
      ibExamTip: 'Always specify BOTH conditions for closest ideal behaviour: LOW pressure and HIGH temperature.',
    },
    {
      criterion: 'Gas Identity (He vs NH₃)',
      cells: [
        'All ideal gases have identical Vm at fixed T, P',
        'Small, non-polar He vs polar H-bonding NH₃',
        'NH₃ / CO₂ deviate sharply near condensation',
        'He stays closest to PV/(nRT) = 1 (few e⁻, weak LDFs)',
      ],
      ibExamTip: 'Explain why He is more ideal than NH₃ in terms of weak London dispersion forces and tiny atomic volume.',
    },
    {
      criterion: 'Collisions & Energy',
      cells: [
        'Perfectly elastic collisions; average Ek ∝ T(K)',
        'Kinetic energy conserved overall, but inelastic cooling on expansion occurs',
        'Near liquefaction point',
        'Ideal gas equation PV = nRT breaks down before liquefaction',
      ],
    },
  ],
};

// S2.1 — Ionic Lattice & Like-Charge Cleavage Explorer
export const CHEM_V3_IONIC_LATTICE_EXPLORER: PlayableDiagramSpec = {
  type: 'labeled_explorer',
  id: 'chem-v3-ionic-lattice-explorer',
  title: 'Ionic Lattice Geometry, Like-Charge Cleavage & Hydration Explorer (S2.1)',
  caption:
    'Explore the 6:6 NaCl coordination lattice, Coulomb lattice enthalpy controls, shear cleavage when like charges align (Slide 5 fix), and ion hydration in water.',
  viewBox: '0 0 800 440',
  palette: 'scientific',
  shapes: [
    { kind: 'rect', x: 24, y: 24, width: 752, height: 392, rx: 16, fill: '#F8FAFC', stroke: '#CBD5E1', strokeWidth: 1.5 },
    { kind: 'text', x: 400, y: 52, text: 'Ionic Model: Electrostatic Lattice, Brittle Cleavage & Mobile Ion Conductivity', fontSize: 15, fontWeight: 700, textAnchor: 'middle', fill: '#0F172A' },
    // Left box: Undistorted 2D slice of NaCl lattice
    { kind: 'rect', x: 48, y: 80, width: 215, height: 225, rx: 12, fill: '#EFF6FF', stroke: '#93C5FD', strokeWidth: 1.5, hotspotId: 'lattice' },
    { kind: 'text', x: 155, y: 102, text: '1. 6:6 Crystal Lattice', fontSize: 12, fontWeight: 700, textAnchor: 'middle', fill: '#1E3A8A' },
    { kind: 'circle', cx: 100, cy: 145, r: 16, fill: '#3B82F6', stroke: '#1D4ED8', strokeWidth: 1.5, hotspotId: 'lattice' },
    { kind: 'text', x: 100, y: 149, text: 'Na⁺', fontSize: 10, fontWeight: 700, textAnchor: 'middle', fill: '#FFFFFF' },
    { kind: 'circle', cx: 155, cy: 145, r: 21, fill: '#10B981', stroke: '#047857', strokeWidth: 1.5, hotspotId: 'lattice' },
    { kind: 'text', x: 155, y: 149, text: 'Cl⁻', fontSize: 10, fontWeight: 700, textAnchor: 'middle', fill: '#FFFFFF' },
    { kind: 'circle', cx: 210, cy: 145, r: 16, fill: '#3B82F6', stroke: '#1D4ED8', strokeWidth: 1.5, hotspotId: 'lattice' },
    { kind: 'text', x: 210, y: 149, text: 'Na⁺', fontSize: 10, fontWeight: 700, textAnchor: 'middle', fill: '#FFFFFF' },
    { kind: 'circle', cx: 100, cy: 205, r: 21, fill: '#10B981', stroke: '#047857', strokeWidth: 1.5, hotspotId: 'lattice' },
    { kind: 'text', x: 100, y: 209, text: 'Cl⁻', fontSize: 10, fontWeight: 700, textAnchor: 'middle', fill: '#FFFFFF' },
    { kind: 'circle', cx: 155, cy: 205, r: 16, fill: '#3B82F6', stroke: '#1D4ED8', strokeWidth: 1.5, hotspotId: 'lattice' },
    { kind: 'text', x: 155, y: 209, text: 'Na⁺', fontSize: 10, fontWeight: 700, textAnchor: 'middle', fill: '#FFFFFF' },
    { kind: 'circle', cx: 210, cy: 205, r: 21, fill: '#10B981', stroke: '#047857', strokeWidth: 1.5, hotspotId: 'lattice' },
    { kind: 'text', x: 210, y: 209, text: 'Cl⁻', fontSize: 10, fontWeight: 700, textAnchor: 'middle', fill: '#FFFFFF' },
    { kind: 'text', x: 155, y: 268, text: 'Fixed ions → NO solid conduction', fontSize: 10, fontWeight: 600, textAnchor: 'middle', fill: '#1E40AF' },
    { kind: 'text', x: 155, y: 286, text: 'F ∝ |q₊q₋| / (r₊ + r₋)²', fontSize: 10, textAnchor: 'middle', fill: '#334155' },
    // Middle box: Brittle shear cleavage (LIKE charges align!)
    { kind: 'rect', x: 292, y: 80, width: 215, height: 225, rx: 12, fill: '#FEF2F2', stroke: '#FCA5A5', strokeWidth: 1.5, hotspotId: 'brittle' },
    { kind: 'text', x: 400, y: 102, text: '2. Shear Cleavage (Brittleness)', fontSize: 12, fontWeight: 700, textAnchor: 'middle', fill: '#991B1B' },
    { kind: 'line', x1: 310, y1: 175, x2: 490, y2: 175, stroke: '#EF4444', strokeWidth: 2, strokeDasharray: '6 4', hotspotId: 'brittle' },
    { kind: 'circle', cx: 355, cy: 145, r: 16, fill: '#3B82F6', hotspotId: 'brittle' },
    { kind: 'text', x: 355, y: 149, text: 'Na⁺', fontSize: 10, fontWeight: 700, textAnchor: 'middle', fill: '#FFFFFF' },
    { kind: 'circle', cx: 425, cy: 145, r: 20, fill: '#10B981', hotspotId: 'brittle' },
    { kind: 'text', x: 425, y: 149, text: 'Cl⁻', fontSize: 10, fontWeight: 700, textAnchor: 'middle', fill: '#FFFFFF' },
    { kind: 'circle', cx: 355, cy: 205, r: 16, fill: '#3B82F6', hotspotId: 'brittle' },
    { kind: 'text', x: 355, y: 209, text: 'Na⁺', fontSize: 10, fontWeight: 700, textAnchor: 'middle', fill: '#FFFFFF' },
    { kind: 'circle', cx: 425, cy: 205, r: 20, fill: '#10B981', hotspotId: 'brittle' },
    { kind: 'text', x: 425, y: 209, text: 'Cl⁻', fontSize: 10, fontWeight: 700, textAnchor: 'middle', fill: '#FFFFFF' },
    { kind: 'text', x: 400, y: 254, text: '+ / + and − / − align!', fontSize: 11, fontWeight: 700, textAnchor: 'middle', fill: '#DC2626' },
    { kind: 'text', x: 400, y: 274, text: 'LIKE-charge repulsion splits crystal', fontSize: 10, textAnchor: 'middle', fill: '#7F1D1D' },
    // Right box: Polar water hydration & molten mobile ions
    { kind: 'rect', x: 536, y: 80, width: 215, height: 225, rx: 12, fill: '#ECFDF5', stroke: '#6EE7B7', strokeWidth: 1.5, hotspotId: 'hydration' },
    { kind: 'text', x: 643, y: 102, text: '3. Molten / Aqueous Conduction', fontSize: 12, fontWeight: 700, textAnchor: 'middle', fill: '#065F46' },
    { kind: 'circle', cx: 595, cy: 168, r: 16, fill: '#3B82F6', hotspotId: 'hydration' },
    { kind: 'text', x: 595, y: 172, text: 'Na⁺', fontSize: 10, fontWeight: 700, textAnchor: 'middle', fill: '#FFFFFF' },
    { kind: 'text', x: 595, y: 138, text: 'δ⁻O', fontSize: 10, fontWeight: 700, textAnchor: 'middle', fill: '#047857' },
    { kind: 'text', x: 595, y: 202, text: 'δ⁻O', fontSize: 10, fontWeight: 700, textAnchor: 'middle', fill: '#047857' },
    { kind: 'circle', cx: 690, cy: 168, r: 20, fill: '#10B981', hotspotId: 'hydration' },
    { kind: 'text', x: 690, y: 172, text: 'Cl⁻', fontSize: 10, fontWeight: 700, textAnchor: 'middle', fill: '#FFFFFF' },
    { kind: 'text', x: 690, y: 138, text: 'δ⁺H', fontSize: 10, fontWeight: 700, textAnchor: 'middle', fill: '#047857' },
    { kind: 'text', x: 690, y: 202, text: 'δ⁺H', fontSize: 10, fontWeight: 700, textAnchor: 'middle', fill: '#047857' },
    { kind: 'text', x: 643, y: 254, text: 'Mobile ions carry current', fontSize: 11, fontWeight: 700, textAnchor: 'middle', fill: '#065F46' },
    { kind: 'text', x: 643, y: 274, text: 'Soluble in polar H₂O, NOT hexane', fontSize: 10, textAnchor: 'middle', fill: '#047857' },
    // Bottom Coulomb bar
    { kind: 'rect', x: 48, y: 324, width: 703, height: 70, rx: 10, fill: '#FEF3C7', stroke: '#FCD34D', strokeWidth: 1.5, hotspotId: 'coulomb' },
    { kind: 'text', x: 400, y: 350, text: 'Lattice Enthalpy Strength: Higher ionic charge (Mg²⁺O²⁻ > Na⁺Cl⁻) & smaller ionic radii (LiF > CsI)', fontSize: 12, fontWeight: 700, textAnchor: 'middle', fill: '#92400E' },
    { kind: 'text', x: 400, y: 374, text: 'Melting Points: MgO (~2852 °C, ΔHlatt ≈ 3791 kJ mol⁻¹) ≫ NaCl (~801 °C, ΔHlatt ≈ 790 kJ mol⁻¹)', fontSize: 11, textAnchor: 'middle', fill: '#78350F' },
  ],
  hotspots: [
    {
      id: 'lattice',
      x: 155,
      y: 185,
      label: '3D Electrostatic Crystal Lattice',
      category: 'Structure',
      examKeyword: 'electrostatic attraction between oppositely charged ions',
      detailMarkdown: 'No discrete "molecules" exist—formula $\\text{NaCl}$ is an empirical $1:1$ lattice ratio where each ion has 6 nearest neighbours of opposite charge. In solid state, ions only vibrate in fixed positions, so electrical conductivity is zero.',
    },
    {
      id: 'brittle',
      x: 400,
      y: 185,
      label: 'Brittle Cleavage Under Stress (Slide 5 Fix)',
      category: 'Mechanical Property',
      examKeyword: 'like charges align and repel',
      detailMarkdown: 'Striking a crystal shifts one lattice plane by half a unit step, bringing **cations next to cations ($+/+$) and anions next to anions ($-/-$)**. Strong electrostatic **repulsion of like charges** shatters the crystal cleanly.',
    },
    {
      id: 'hydration',
      x: 643,
      y: 185,
      label: 'Ion–Dipole Hydration & Mobile Conductivity',
      category: 'Conductivity / Solubility',
      examKeyword: 'mobile ions in molten or aqueous state',
      detailMarkdown: 'When melted or dissolved in polar water ($\\delta^-\\text{O}$ wraps cations, $\\delta^+\\text{H}$ wraps anions), ions become **mobile** and migrate toward electrodes to carry current. Non-polar hexane cannot overcome the lattice enthalpy.',
    },
    {
      id: 'coulomb',
      x: 400,
      y: 358,
      label: 'Coulomb Control of Melting Point & Lattice Enthalpy',
      category: 'Energetics',
      examKeyword: 'ionic charge and ionic radius',
      detailMarkdown: 'Greater $|q_+ \\cdot q_-|$ and smaller inter-ionic distance $(r_+ + r_-)$ yield stronger attraction and higher melting points: $\\text{MgO} > \\text{CaO} > \\text{NaF} > \\text{NaCl} > \\text{KBr}$.',
    },
  ],
};

// S2.1 — Ionic Formation, Shear & Hydration Step Mechanism
export const CHEM_V3_IONIC_CYCLE_STEPS: PlayableDiagramSpec = {
  type: 'step_mechanism',
  id: 'chem-v3-ionic-cycle-steps',
  title: 'From Electron Transfer to Ionic Lattice Properties (S2.1)',
  caption: 'Follow how electronegativity difference (Δχ ≥ 1.8) creates ions that assemble into non-molecular crystals and either shatter under stress or conduct when mobile.',
  palette: 'scientific',
  nodes: [
    { id: 'n1', x: 110, y: 190, label: '1. Electron Transfer', sublabel: 'Metal → Non-metal', group: 'Formation' },
    { id: 'n2', x: 310, y: 190, label: '2. 3D Crystal Lattice', sublabel: 'Multi-directional attraction', group: 'Solid' },
    { id: 'n3', x: 530, y: 105, label: '3A. Brittle Shatter', sublabel: 'Like charges align (+/+)', group: 'Stress' },
    { id: 'n4', x: 530, y: 275, label: '3B. Mobile Ions', sublabel: 'Molten or (aq) current', group: 'Conduction' },
  ],
  edges: [
    { id: 'e12', from: 'n1', to: 'n2', label: 'Electrostatic assembly' },
    { id: 'e23', from: 'n2', to: 'n3', label: 'Mechanical shift' },
    { id: 'e24', from: 'n2', to: 'n4', label: 'Heat / Dissolve in H₂O' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Redox Electron Transfer (Typically Δχ ≥ 1.8)',
      descriptionMarkdown: 'Low-IE metal atoms lose valence electrons to high-EA non-metal atoms, forming noble-gas cations and anions.',
      formulaLatex: '\\text{Mg} + \\tfrac{1}{2}\\text{O}_2 \\rightarrow \\text{Mg}^{2+} + \\text{O}^{2-}',
      activeNodeIds: ['n1'],
      activeEdgeIds: [],
      metrics: [{ label: 'Δχ(MgO)', value: '2.1' }, { label: 'Bonding', value: 'Ionic' }],
    },
    {
      stepNumber: 2,
      title: '3D Electrostatic Lattice Assembly',
      descriptionMarkdown: 'Oppositely charged ions attract in all directions without forming molecules, maximizing coordination and releasing large exothermic lattice enthalpy.',
      formulaLatex: '\\Delta H_{\\text{latt}} \\propto \\frac{|q_+ q_-|}{r_+ + r_-}',
      activeNodeIds: ['n2'],
      activeEdgeIds: ['e12'],
      metrics: [{ label: 'Solid Conductivity', value: 'Zero (fixed)' }, { label: 'Volatility', value: 'Very low' }],
    },
    {
      stepNumber: 3,
      title: 'Mechanical Stress Aligns Like Charges → Cleavage',
      descriptionMarkdown: 'Plane displacement puts $+/+$ and $-/-$ adjacent; repulsion forces crystal fracture along flat planes.',
      activeNodeIds: ['n3'],
      activeEdgeIds: ['e23'],
      metrics: [{ label: 'Alignment', value: 'Like charges' }, { label: 'Outcome', value: 'Brittle fracture' }],
    },
    {
      stepNumber: 4,
      title: 'Melting or Polar Hydration Frees Ions for Conduction',
      descriptionMarkdown: 'Electrically conducting when molten or dissolved because ions—**NOT free electrons**—are free to move to electrodes.',
      formulaLatex: '\\text{NaCl}(s) \\xrightarrow{\\text{H}_2\\text{O}} \\text{Na}^+(aq) + \\text{Cl}^-(aq)',
      activeNodeIds: ['n4'],
      activeEdgeIds: ['e24'],
      metrics: [{ label: 'Charge Carrier', value: 'Mobile ions' }, { label: 'Conductivity', value: 'High' }],
    },
  ],
};

// S2.1 — Ionic Polyatomic Formulas & Coulomb Lattice Enthalpy Worked Example
export const CHEM_V3_IONIC_FORMULAS_WORKED: PlayableDiagramSpec = {
  type: 'worked_example',
  id: 'chem-v3-ionic-formulas-worked',
  title: 'Worked Example: Polyatomic Ionic Formulas & Melting Point Ranking',
  caption: 'Apply the 7 core IB polyatomic ions (Worksheet 2.1) and Coulombic charge/radius ratios to predict formulas and melting points.',
  sourceLabel: 'Worksheet 2.1 + Bylikin S2.1',
  commandTerm: 'Deduce / Explain',
  marks: 4,
  problemMarkdown:
    '(a) **Deduce** the empirical formulas of ammonium sulfate and calcium hydrogencarbonate. (b) **Explain** why $\\text{MgO}$ has a much higher melting point ($2852^\\circ\\text{C}$) than $\\text{NaF}$ ($993^\\circ\\text{C}$), and why $\\text{NaF} > \\text{KBr}$ ($734^\\circ\\text{C}$).',
  givenData: [
    { label: 'Core polyatomics', value: 'NH₄⁺, OH⁻, NO₃⁻, HCO₃⁻, CO₃²⁻, SO₄²⁻, PO₄³⁻' },
    { label: 'Ionic charges', value: 'Mg²⁺/O²⁻ (±2) vs Na⁺/F⁻ (±1)' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Balance total positive and negative charges with parentheses',
      workingMarkdown: '$\\text{NH}_4^+$ ($+1$) and $\\text{SO}_4^{2-}$ ($-2$) need a $2:1$ ratio: **$\\text{(NH}_4)_2\\text{SO}_4$**. $\\text{Ca}^{2+}$ and $\\text{HCO}_3^-$ need a $1:2$ ratio: **$\\text{Ca(HCO}_3)_2$**.',
      formulaLatex: '2(+1) + (-2) = 0 \\implies (\\text{NH}_4)_2\\text{SO}_4',
      markCode: 'A1 + A1',
      rationale: 'Always enclose multi-atom ions in brackets whenever subscript > 1.',
    },
    {
      stepNumber: 2,
      title: 'Compare MgO vs NaF using ionic charge product |q₊·q₋|',
      workingMarkdown: 'Although $\\text{Mg}^{2+}/\\text{O}^{2-}$ have slightly smaller radii than $\\text{Na}^+/\\text{F}^-$, the dominant factor is **twice the charge** on each ion ($+2/-2$ vs $+1/-1$), giving roughly $4\\times$ stronger electrostatic attraction and higher lattice enthalpy.',
      markCode: 'M1',
      rationale: 'Charge magnitude dominates melting point differences across isoelectronic pairs.',
    },
    {
      stepNumber: 3,
      title: 'Compare NaF vs KBr using ionic radius sum (r₊ + r₋)',
      workingMarkdown: 'Both carry $\\pm 1$ charges, but $\\text{Na}^+$ and $\\text{F}^-$ have **smaller ionic radii** than $\\text{K}^+$ and $\\text{Br}^-$. Shorter inter-ionic distance yields stronger electrostatic attraction in $\\text{NaF}$.',
      markCode: 'A1',
      rationale: 'Always state BOTH "stronger electrostatic attraction between oppositely charged ions" and "more energy required to overcome lattice".',
    },
  ],
  finalAnswerMarkdown:
    '(a) $(\\text{NH}_4)_2\\text{SO}_4$ and $\\text{Ca(HCO}_3)_2$. (b) $\\text{MgO} > \\text{NaF}$ due to greater ionic charges ($2+/2-$ vs $1+/1-$) and smaller radii; $\\text{NaF} > \\text{KBr}$ due to smaller ionic radii at equal $\\pm 1$ charge.',
  commonTrapMarkdown:
    'Writing "stronger covalent/intermolecular bonds in MgO" is an instant 0 mark—ionic compounds have ionic bonds in a 3D lattice, NEVER intermolecular forces!',
};

// S2.2.1–S2.2.6 — 3D VSEPR & Polarity Lab (strictly SL 2–4 domains, cloned with chem-v3 ID)
export const CHEM_V3_VSEPR_3D_LAB: PlayableDiagramSpec = sanitizeImportedSpec({
  ...VSEPR_POLARITY_LAB_SPEC,
  id: 'chem-v3-vsepr-3d-lab',
  title: 'Interactive 3D VSEPR Geometry & Dipole Polarity Lab (S2.2.4–S2.2.6)',
  caption:
    'Rotate 16 strictly-SL molecules (2, 3, and 4 electron domains), toggle lone-pair electron density clouds, inspect bond angles, and compare bond polarity vs net molecular dipole.',
});

// S2.2.3 — Coordination (Dative) Covalent Bond Step Mechanism
export const CHEM_V3_DATIVE_COVALENT_STEPS: PlayableDiagramSpec = {
  type: 'step_mechanism',
  id: 'chem-v3-dative-covalent-steps',
  title: 'Coordination (Dative Covalent) Bonding: NH₄⁺, H₃O⁺ & CO (S2.2.3)',
  caption: 'Visualize how one donor atom supplies BOTH shared electrons to form a bond indistinguishable from normal covalent bonds once formed.',
  palette: 'scientific',
  nodes: [
    { id: 'donor', x: 130, y: 190, label: 'Donor Base (:NH₃)', sublabel: 'Holds lone pair', group: 'Reactant' },
    { id: 'acc', x: 350, y: 190, label: 'Acceptor (H⁺)', sublabel: 'Empty valence orbital', group: 'Reactant' },
    { id: 'coord', x: 575, y: 190, label: 'Ammonium Ion (NH₄⁺)', sublabel: '4 equivalent N–H bonds (109.5°)', group: 'Product' },
  ],
  edges: [
    { id: 'e12', from: 'donor', to: 'acc', label: 'Donates 2e⁻ lone pair' },
    { id: 'e23', from: 'acc', to: 'coord', label: 'Forms NH₄⁺ tetrahedron' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Electron-Rich Donor vs Vacant-Orbital Acceptor',
      descriptionMarkdown: 'Ammonia ($\\text{NH}_3$) has a non-bonding lone pair on N ($107^\\circ$ trigonal pyramidal), while a proton ($\\text{H}^+$) has an empty $1s$ orbital.',
      formulaLatex: ':\\text{NH}_3 + \\text{H}^+',
      activeNodeIds: ['donor', 'acc'],
      activeEdgeIds: ['e12'],
      metrics: [{ label: 'NH₃ Angle', value: '107°' }, { label: 'Electrons on H⁺', value: '0' }],
    },
    {
      stepNumber: 2,
      title: 'Symmetrical Tetrahedral NH₄⁺ Formation (4 Identical Bonds)',
      descriptionMarkdown: 'Once formed, all four $\\text{N}-\\text{H}$ bonds in $\\text{NH}_4^+$ are identical in length and strength ($109.5^\\circ$ tetrahedral). Same dative mechanism occurs in $\\text{H}_3\\text{O}^+$, $\\text{CO}$ ($\\text{C}\\equiv\\text{O}$ with 1 dative from O), and $\\text{Al}_2\\text{Cl}_6$ dimer.',
      formulaLatex: '\\text{NH}_3 + \\text{H}^+ \\rightarrow [\\text{NH}_4]^+,\\quad \\text{AlCl}_3\\text{ monomer } \\rightleftharpoons \\text{Al}_2\\text{Cl}_6',
      activeNodeIds: ['coord'],
      activeEdgeIds: ['e23'],
      metrics: [{ label: 'NH₄⁺ Angle', value: '109.5°' }, { label: 'Bond Equivalence', value: '100% identical' }],
    },
  ],
};

// S2.2.4–6 — VSEPR 2–4 Domains Comparison Matrix
export const CHEM_V3_VSEPR_DOMAINS_MATRIX: PlayableDiagramSpec = {
  type: 'comparison_matrix',
  id: 'chem-v3-vsepr-domains-matrix',
  title: 'SL VSEPR Geometry & Polarity Matrix (2, 3, and 4 Electron Domains)',
  caption: 'Lone-pair–lone-pair > lone-pair–bonding-pair > bonding-pair–bonding-pair repulsion compresses bond angles by ~2–2.5° per lone pair.',
  columns: ['Domains (BP + LP)', 'Electron Domain Geometry', 'Molecular Geometry', 'Bond Angle & Example'],
  rows: [
    {
      criterion: '2 (2 BP + 0 LP)',
      cells: ['Linear', 'Linear', '180° — BeCl₂, CO₂, HCN, C₂H₂'],
      ibExamTip: 'Always specify "two regions/domains of electron density" — a double or triple bond counts as ONE electron domain!',
    },
    {
      criterion: '3 (3 BP + 0 LP)',
      cells: ['Trigonal planar', 'Trigonal planar', '120° — BF₃, BCl₃, CO₃²⁻, NO₃⁻, C₂H₄'],
    },
    {
      criterion: '3 (2 BP + 1 LP)',
      cells: ['Trigonal planar', 'Bent / V-shaped', '~117° (<120°) — SO₂, O₃, NO₂⁻'],
      ibExamTip: 'In SO₂ and O₃, the lone pair repels bonding domains more strongly than bonding–bonding repulsion.',
    },
    {
      criterion: '4 (4 BP + 0 LP)',
      cells: ['Tetrahedral', 'Tetrahedral', '109.5° — CH₄, NH₄⁺, CCl₄ (non-polar by symmetry)'],
    },
    {
      criterion: '4 (3 BP + 1 LP)',
      cells: ['Tetrahedral', 'Trigonal pyramidal', '107° — NH₃, PCl₃, H₃O⁺ (polar)'],
    },
    {
      criterion: '4 (2 BP + 2 LP)',
      cells: ['Tetrahedral', 'Bent / V-shaped', '104.5° — H₂O, H₂S, OF₂ (polar)'],
      ibExamTip: 'Distinguish carefully: BOTH SO₂ (3 domains, ~117°) and H₂O (4 domains, 104.5°) are "bent", with very different angles!',
    },
  ],
};

// S2.2.8–9 — Enhanced IMF & Hydride Boiling Explorer
export const CHEM_V3_IMF_BOILING_EXPLORER: PlayableDiagramSpec = sanitizeImportedSpec({
  ...CHEM_IMF_BOILING_EXPLORER,
  id: 'chem-v3-imf-boiling-explorer',
  title: 'Intermolecular Forces, Hydride Anomalies & Branching Explorer (S2.2.8–S2.2.9)',
  caption:
    'Inspect why H₂O, HF, and NH₃ spike above Periods 3–5 hydrides, why LDFs operate in ALL molecules (Slide 1 fix), and how pentane branching alters surface-contact boiling points.',
});

// S2.2.7–9 — Covalent Allotropes & SiO2 Comparison Matrix (SL-pure: no sp2/sp3!)
export const CHEM_V3_ALLOTROPES_NETWORK_MATRIX: PlayableDiagramSpec = {
  type: 'comparison_matrix',
  id: 'chem-v3-allotropes-network-matrix',
  title: 'Carbon Allotropes & Silicon Dioxide: Giant Network vs C₆₀ Molecular (S2.2.7–S2.2.9)',
  caption: 'Compare bonding coordination, delocalized electrons, conductivity, and Day 2.2.9 p.5 fix: C₆₀ is simple molecular, NOT giant covalent.',
  columns: ['Substance', 'Structure Classification', 'Bonding Around Each Atom', 'Conductivity & m.p.'],
  rows: [
    {
      criterion: 'Diamond (C)',
      cells: [
        'Giant covalent 3D network',
        'Each C forms 4 single covalent bonds (109.5° tetrahedral)',
        'Electrical insulator (all 4 valence e⁻ localized); m.p. >3550 °C; hardest natural solid',
      ],
      ibExamTip: 'High m.p. requires breaking strong covalent C–C bonds throughout the 3D lattice.',
    },
    {
      criterion: 'Graphite (C)',
      cells: [
        'Giant covalent 2D layered sheets',
        'Each C forms 3 covalent bonds (120° hexagonal) + 1 delocalized e⁻/C',
        'Conducts parallel to layers; weak LDFs between layers → soft lubricant; sublimes ~3600 °C',
      ],
    },
    {
      criterion: 'Graphene (C)',
      cells: [
        'Single 2D giant covalent monolayer',
        'Each C covalently bonded to 3 neighbours (120°) with delocalized π-cloud',
        'Exceptional electrical/thermal conductor, 100× stronger than steel by thickness, nearly transparent',
      ],
    },
    {
      criterion: 'Buckminsterfullerene (C₆₀)',
      cells: [
        'SIMPLE MOLECULAR discrete spheres',
        '60 C atoms in truncated icosahedron; each C bonded to 3 neighbours',
        'Low sublimation point (~600 °C), soluble in non-polar benzene (must overcome only weak LDFs between cages)',
      ],
      ibExamTip: 'Classroom p.5 fix: NEVER call C₆₀ a giant covalent network! Weak LDFs exist BETWEEN C₆₀ molecules.',
    },
    {
      criterion: 'Silicon Dioxide (SiO₂)',
      cells: [
        'Giant covalent 3D tetrahedral network',
        'Each Si bonded to 4 O; each O bridges 2 Si (109.5° around Si)',
        'Insulator (all valence e⁻ localized); m.p. ~1710 °C; contrast with simple molecular gas CO₂',
      ],
    },
  ],
};

// S2.2.10 — Paper & TLC Chromatography Rf Worked Example
export const CHEM_V3_CHROMATOGRAPHY_RF_WORKED: PlayableDiagramSpec = {
  type: 'worked_example',
  id: 'chem-v3-chromatography-rf-worked',
  title: 'Worked Example: TLC Rf Calculation & Polarity Partitioning (S2.2.10)',
  caption: 'Calculate retardation factors (Rf) and explain separation via relative intermolecular attraction to polar silica vs non-polar eluent.',
  sourceLabel: 'Bylikin Oxford 2023 S2.2.10',
  commandTerm: 'Calculate / Explain',
  marks: 4,
  problemMarkdown:
    'A student separates an analgesic mixture on a polar silica ($\\text{SiO}_2$) TLC plate using ethyl ethanoate (low polarity) as the mobile phase. The solvent front advances $8.40\\text{ cm}$ above the pencil baseline. Spot **X** travels $2.52\\text{ cm}$ while spot **Y** travels $6.30\\text{ cm}$. **Calculate** $R_f$ for both spots and **explain** which solute is more polar.',
  givenData: [
    { label: 'Stationary phase', value: 'Polar silica gel (Si–OH surface groups)' },
    { label: 'Mobile phase', value: 'Low-polarity ethyl ethanoate eluent' },
    { label: 'Solvent front', value: '8.40 cm from baseline' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Apply Rf formula for Spot X and Spot Y',
      workingMarkdown: '$R_f(\\text{X}) = \\dfrac{2.52}{8.40} = \\mathbf{0.300}$; $R_f(\\text{Y}) = \\dfrac{6.30}{8.40} = \\mathbf{0.750}$.',
      formulaLatex: 'R_f = \\frac{\\text{distance moved by solute}}{\\text{distance moved by solvent front}}',
      markCode: 'A1 + A1',
      rationale: 'Rf is dimensionless (0 < Rf < 1); always measure from the pencil origin line (never ink, which runs!).',
    },
    {
      stepNumber: 2,
      title: 'Interpret polarity partitioning between phases',
      workingMarkdown:
        'Spot **X** ($R_f = 0.300$) is **more polar** because it forms stronger dipole–dipole / hydrogen-bonding attractions with the **polar silica stationary phase**, whereas less-polar **Y** partitions more strongly into the low-polarity mobile phase.',
      markCode: 'M1 + A1',
      rationale: 'Greater affinity for stationary phase slows migration (lower Rf).',
    },
  ],
  finalAnswerMarkdown: '$R_f(\\text{X}) = 0.300$, $R_f(\\text{Y}) = 0.750$; **X is more polar** due to stronger adsorption onto polar $\\text{SiO}_2$.',
  commonTrapMarkdown: 'Always state BOTH stationary and mobile phase affinities—not just "X is heavier"!',
};

// S2.3 — Metallic Lattice, Conduction & Slip-Plane Step Mechanism (Slide 2 Fix)
export const CHEM_V3_METALLIC_SLIP_STEPS: PlayableDiagramSpec = {
  type: 'step_mechanism',
  id: 'chem-v3-metallic-slip-steps',
  title: 'Metallic Electron Sea, Conduction & Non-Directional Slip Planes (S2.3)',
  caption: 'Slide 2 fix: Delocalized electrons belong to the whole crystal lattice (not any single atom), preserving electrostatic glue even as cation layers slide.',
  palette: 'scientific',
  nodes: [
    { id: 'm1', x: 115, y: 190, label: '1. Cation Lattice + e⁻ Sea', sublabel: 'Non-directional bonding', group: 'Model' },
    { id: 'm2', x: 380, y: 105, label: '2A. Conduction', sublabel: 'Delocalized e⁻ drift & vibrate', group: 'Energy' },
    { id: 'm3', x: 380, y: 275, label: '2B. Hammer Stress', sublabel: 'Cation layers slide', group: 'Force' },
    { id: 'm4', x: 655, y: 275, label: '3. Malleable / Ductile', sublabel: 'No fracture! Bonds intact', group: 'Result' },
  ],
  edges: [
    { id: 'em12', from: 'm1', to: 'm2', label: 'Voltage / Heat ΔT' },
    { id: 'em13', from: 'm1', to: 'm3', label: 'Shear stress' },
    { id: 'em34', from: 'm3', to: 'm4', label: 'e⁻ sea screens repulsion' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Electrostatic Lattice of Cations in a Mobile Electron Sea',
      descriptionMarkdown:
        'Positive metal cations occupy regular lattice sites surrounded by valence electrons that are **delocalized throughout the entire crystal**—NOT fixed to any single metal atom (Day 2.3 Slide 2 fix).',
      activeNodeIds: ['m1'],
      activeEdgeIds: [],
      metrics: [{ label: 'Bond Directionality', value: 'Non-directional' }, { label: 'Lustre', value: 'Free e⁻ reflect light' }],
    },
    {
      stepNumber: 2,
      title: 'Electrical & Thermal Conductivity Across All Dimensions',
      descriptionMarkdown:
        'Under an applied potential difference, delocalized electrons drift rapidly from negative terminal to positive terminal (even when solid or molten!). Delocalized electrons also transfer kinetic energy rapidly during heating.',
      activeNodeIds: ['m2'],
      activeEdgeIds: ['em12'],
      metrics: [{ label: 'Charge Carrier', value: 'Delocalized e⁻' }, { label: 'States', value: 'Solid & liquid' }],
    },
    {
      stepNumber: 3,
      title: 'Layer Displacement Without Cleavage (Malleability)',
      descriptionMarkdown:
        'When hammered, cation planes slide past one another while the **mobile sea of delocalized electrons immediately cushions and maintains electrostatic attraction**, preventing the like-charge fracture seen in brittle ionic crystals.',
      activeNodeIds: ['m3', 'm4'],
      activeEdgeIds: ['em13', 'em34'],
      metrics: [{ label: 'Malleable', value: 'Hammered into sheets' }, { label: 'Ductile', value: 'Drawn into wires' }],
    },
  ],
};

// S2.3 — Group 1 vs Period 3 Metallic Melting Point Trends Matrix
export const CHEM_V3_METALLIC_TRENDS_MATRIX: PlayableDiagramSpec = {
  type: 'comparison_matrix',
  id: 'chem-v3-metallic-trends-matrix',
  title: 'SL Metallic Bond Strength: Cation Charge Density Trends (S2.3.2)',
  caption: 'Metallic melting point depends directly on cation charge (+1, +2, +3), number of delocalized valence electrons per atom, and ionic radius.',
  columns: ['Trend Series', 'Cation Charge & e⁻/Atom', 'Ionic Radius Trend', 'Melting Point Outcome & Explanation'],
  rows: [
    {
      criterion: 'Group 1 Downward (Li → Na → K → Rb → Cs)',
      cells: [
        'Constant +1 charge (1 delocalized e⁻/atom)',
        'Increases down group (more shells)',
        'FALLS sharply (181 °C → 98 °C → 63 °C → 29 °C): lower charge density & weaker attraction to sea',
      ],
      ibExamTip: 'Mention BOTH constant +1 charge AND larger cation radius increasing distance to delocalized electrons.',
    },
    {
      criterion: 'Period 3 Metals (Na → Mg → Al)',
      cells: [
        '+1 → +2 → +3 (1 → 2 → 3 delocalized e⁻/atom)',
        'Decreases across period (102 → 72 → 54 pm)',
        'RISES sharply (98 °C → 650 °C → 660 °C): smaller, higher-charge cations attract denser electron sea',
      ],
      ibExamTip: 'Notice Mg (650 °C) and Al (660 °C) sit close in m.p. due to crystal packing differences, though Al has greater enthalpy of atomization.',
    },
  ],
};

// S2.4 — Bonding Continuum Lab (purified strictly for SL: removes sp2/sigma-pi wording!)
export const CHEM_V3_BONDING_CONTINUUM_LAB: PlayableDiagramSpec = sanitizeImportedSpec({
  ...BONDING_CONTINUUM_LAB_SPEC,
  id: 'chem-v3-bonding-continuum-lab',
  title: 'van Arkel–Ketelaar Bonding Triangle & Structure Models Lab (S2.4)',
  caption:
    'Locate binary compounds by electronegativity difference (Δχ) vs mean electronegativity (χ̄) including Day 2.4 examples (TlBr, AlCl₃, NaCl, CsF, SiO₂) and compare SL structure classes.',
  models: BONDING_CONTINUUM_LAB_SPEC.models.map((m) =>
    m.id === 'graphene'
      ? {
          ...m,
          summaryMarkdown:
            'Isolated single monolayer of hexagonally bonded carbon (~$100\\times$ tensile strength of steel per thickness, flexible, nearly transparent, ultrahigh thermal and electrical conductivity via 1 delocalized electron per C).',
          keyProperties: [
            { label: 'Dimensions', value: 'Single 2D atomic monolayer' },
            { label: 'Conductivity', value: 'Superior e⁻ & heat conductor' },
            { label: 'Bonding', value: '3 covalent bonds (120°) + 1 delocalized e⁻/C' },
            { label: 'Uses', value: 'Touchscreens, solar cells, composites' },
          ],
        }
      : m.id === 'graphite'
        ? {
            ...m,
            keyProperties: m.keyProperties.map((kp) =>
              kp.label === 'Coordination / Angle'
                ? { ...kp, value: '3 covalent bonds per C · 120° sheets' }
                : kp,
            ),
          }
        : m.id === 'diamond'
          ? {
              ...m,
              keyProperties: m.keyProperties.map((kp) =>
                kp.label === 'Coordination / Angle'
                  ? { ...kp, value: '4 covalent bonds per C · 109.5° tetrahedral' }
                  : kp,
              ),
            }
          : m,
  ),
});

// S2.4 — Alloys & Addition Polymers Explorer
export const CHEM_V3_ALLOY_POLYMER_EXPLORER: PlayableDiagramSpec = {
  type: 'labeled_explorer',
  id: 'chem-v3-alloy-polymer-explorer',
  title: 'Substitutional Alloys, Interstitial Steel & Addition Polymer Explorer (S2.4)',
  caption:
    'Inspect why mismatched solute atoms lock metallic slip planes in alloys (mixtures, NOT compounds) and how C=C alkenes open into [−CH₂−CHX−]n addition polymers.',
  viewBox: '0 0 800 440',
  palette: 'scientific',
  shapes: [
    { kind: 'rect', x: 24, y: 24, width: 752, height: 392, rx: 16, fill: '#F8FAFC', stroke: '#CBD5E1', strokeWidth: 1.5 },
    { kind: 'text', x: 400, y: 52, text: 'Structure 2.4 Materials: Alloy Lattice Locking & Alkene Addition Polymerization', fontSize: 15, fontWeight: 700, textAnchor: 'middle', fill: '#0F172A' },
    // Substitutional Alloy (Brass)
    { kind: 'rect', x: 45, y: 76, width: 345, height: 155, rx: 12, fill: '#FFFBEB', stroke: '#F59E0B', strokeWidth: 1.5, hotspotId: 'substitutional' },
    { kind: 'text', x: 217, y: 98, text: 'Substitutional Alloy (e.g., Brass: Cu + Zn)', fontSize: 12, fontWeight: 700, textAnchor: 'middle', fill: '#92400E' },
    { kind: 'circle', cx: 110, cy: 145, r: 16, fill: '#D97706', hotspotId: 'substitutional' },
    { kind: 'circle', cx: 155, cy: 145, r: 16, fill: '#D97706', hotspotId: 'substitutional' },
    { kind: 'circle', cx: 205, cy: 145, r: 21, fill: '#64748B', stroke: '#0F172A', strokeWidth: 1.5, hotspotId: 'substitutional' },
    { kind: 'text', x: 205, y: 149, text: 'Zn', fontSize: 10, fontWeight: 700, textAnchor: 'middle', fill: '#FFFFFF' },
    { kind: 'circle', cx: 255, cy: 145, r: 16, fill: '#D97706', hotspotId: 'substitutional' },
    { kind: 'circle', cx: 300, cy: 145, r: 16, fill: '#D97706', hotspotId: 'substitutional' },
    { kind: 'text', x: 217, y: 196, text: 'Different atomic radii distort planes → resists sliding!', fontSize: 11, fontWeight: 600, textAnchor: 'middle', fill: '#78350F' },
    { kind: 'text', x: 217, y: 214, text: 'Retains metallic lustre & electrical conductivity', fontSize: 10, textAnchor: 'middle', fill: '#92400E' },
    // Interstitial Alloy (Steel)
    { kind: 'rect', x: 410, y: 76, width: 345, height: 155, rx: 12, fill: '#F1F5F9', stroke: '#475569', strokeWidth: 1.5, hotspotId: 'interstitial' },
    { kind: 'text', x: 582, y: 98, text: 'Interstitial Alloy (e.g., Steel: Fe + small C)', fontSize: 12, fontWeight: 700, textAnchor: 'middle', fill: '#1E293B' },
    { kind: 'circle', cx: 485, cy: 145, r: 18, fill: '#64748B', hotspotId: 'interstitial' },
    { kind: 'circle', cx: 535, cy: 145, r: 18, fill: '#64748B', hotspotId: 'interstitial' },
    { kind: 'circle', cx: 585, cy: 145, r: 18, fill: '#64748B', hotspotId: 'interstitial' },
    { kind: 'circle', cx: 635, cy: 145, r: 18, fill: '#64748B', hotspotId: 'interstitial' },
    { kind: 'circle', cx: 685, cy: 145, r: 18, fill: '#64748B', hotspotId: 'interstitial' },
    { kind: 'circle', cx: 560, cy: 162, r: 8, fill: '#0F172A', hotspotId: 'interstitial' },
    { kind: 'text', x: 560, y: 165, text: 'C', fontSize: 8, fontWeight: 700, textAnchor: 'middle', fill: '#FFFFFF' },
    { kind: 'circle', cx: 660, cy: 162, r: 8, fill: '#0F172A', hotspotId: 'interstitial' },
    { kind: 'text', x: 660, y: 165, text: 'C', fontSize: 8, fontWeight: 700, textAnchor: 'middle', fill: '#FFFFFF' },
    { kind: 'text', x: 582, y: 196, text: 'Small non-metal sits in gaps → locks Fe layers', fontSize: 11, fontWeight: 600, textAnchor: 'middle', fill: '#334155' },
    { kind: 'text', x: 582, y: 214, text: 'Mixtures (variable composition), NOT compounds', fontSize: 10, textAnchor: 'middle', fill: '#475569' },
    // Addition Polymer Section
    { kind: 'rect', x: 45, y: 248, width: 710, height: 146, rx: 12, fill: '#ECFDF5', stroke: '#10B981', strokeWidth: 1.5, hotspotId: 'polymer' },
    { kind: 'text', x: 400, y: 274, text: 'Addition Polymerization (SL S2.4.5): 100% Atom Economy Conversion of Alkene → Poly(alkene)', fontSize: 12, fontWeight: 700, textAnchor: 'middle', fill: '#065F46' },
    { kind: 'text', x: 180, y: 318, text: 'n (CH₂ = CHX)', fontSize: 15, fontWeight: 700, textAnchor: 'middle', fill: '#047857' },
    { kind: 'line', x1: 270, y1: 314, x2: 380, y2: 314, stroke: '#059669', strokeWidth: 2.5, animatedFlow: true, hotspotId: 'polymer' },
    { kind: 'text', x: 325, y: 304, text: 'break C=C', fontSize: 10, fontWeight: 600, textAnchor: 'middle', fill: '#065F46' },
    { kind: 'text', x: 540, y: 318, text: '—[ CH₂ — CHX ]ₙ—   (saturated C–C backbone)', fontSize: 15, fontWeight: 700, textAnchor: 'middle', fill: '#064E3B' },
    { kind: 'text', x: 400, y: 364, text: 'PVC (X = Cl), PTFE (F₂C=CF₂ → [CF₂–CF₂]n), Polypropene (X = CH₃): Non-biodegradable unreactive C–C chains', fontSize: 11, textAnchor: 'middle', fill: '#065F46' },
  ],
  hotspots: [
    {
      id: 'substitutional',
      x: 217,
      y: 150,
      label: 'Substitutional Alloy (Brass / Bronze)',
      category: 'S2.4.3',
      examKeyword: 'disrupted lattice layers prevent sliding',
      detailMarkdown: 'Atoms of similar radius replace host cations in the lattice. Size mismatch distorts regular planes, making slip harder and increasing hardness/strength compared with pure Cu.',
    },
    {
      id: 'interstitial',
      x: 582,
      y: 150,
      label: 'Interstitial Alloy (Carbon Steel / Stainless Steel)',
      category: 'S2.4.3',
      examKeyword: 'non-directional bonding in mixtures',
      detailMarkdown: 'Small carbon atoms occupy interstitial voids between larger Fe cations, blocking slip planes. Chromium in stainless steel adds a passive $\\text{Cr}_2\\text{O}_3$ corrosion barrier.',
    },
    {
      id: 'polymer',
      x: 400,
      y: 320,
      label: 'Addition Polymerization & Repeat Units',
      category: 'S2.4.5',
      examKeyword: '100% atom economy / open C=C double bond',
      detailMarkdown: 'Always draw **trailing extension bonds** passing through the square brackets with subscript $n$: $-[\\text{CH}_2-\\text{CHCl}]_n-$. To find the monomer from a polymer, remove brackets and restore the $\\text{C}=\\text{C}$ bond across two backbone carbons.',
    },
  ],
};

// S2.4 — Materials Comparison Matrix (Pure Metal vs Substitutional Alloy vs Interstitial Alloy vs Addition Polymer)
export const CHEM_V3_ALLOY_POLYMER_MATRIX: PlayableDiagramSpec = {
  type: 'comparison_matrix',
  id: 'chem-v3-alloy-polymer-matrix',
  title: 'Metals, Alloys & Addition Polymers Property Matrix (S2.4)',
  caption: 'Compare structural motifs, atom economy, electrical conductivity, and mechanical properties across SL materials.',
  columns: ['Material Class', 'Lattice / Chain Motif', 'Mechanical & Thermal Behaviour', 'Key SL Exam Distinction'],
  rows: [
    {
      criterion: 'Pure Metal (Cu, Fe)',
      cells: [
        'Uniform cation lattice + delocalized e⁻ sea',
        'High ductility/malleability (planes slide smoothly), highest conductivity',
        'Pure substance (single element), lower tensile strength than alloys',
      ],
    },
    {
      criterion: 'Substitutional Alloy (Brass, Bronze)',
      cells: [
        'Solute metal atoms of similar size replace host ions',
        'Harder, stronger, often slightly lower m.p. and conductivity than pure host',
        'Mixture (variable ratio), NOT a compound; non-directional metallic bonding retained',
      ],
    },
    {
      criterion: 'Interstitial Alloy (High-Carbon Steel)',
      cells: [
        'Small non-metal (C) fits into spaces between metal cations',
        'Significantly harder and more brittle at high % C than pure Fe',
        'Stainless steel combines interstitial C with substitutional Cr + Ni',
      ],
    },
    {
      criterion: 'Addition Polymer (HDPE, PVC, PTFE)',
      cells: [
        'Long covalently bonded saturated C–C chains held together by LDFs',
        'Electrical insulator; soften on warming; unreactive C–C & C–H bonds',
        '100% atom economy from alkene monomers; only addition polymers are in SL S2.4.5',
      ],
      ibExamTip: 'HDPE (unbranched chains pack closely → stronger LDFs, higher m.p. & density) vs LDPE (branched chains pack poorly).',
    },
  ],
};

// S1 Lab — Enhanced Lab Apparatus & Glassware Explorer
export const CHEM_V3_LAB_APPARATUS_EXPLORER: PlayableDiagramSpec = sanitizeImportedSpec({
  ...CHEM_LAB_APPARATUS_EXPLORER,
  id: 'chem-v3-lab-apparatus-explorer',
  title: 'IB Chemistry SL Glassware, Apparatus & Tolerance Guide',
  caption:
    'Inspect volumetric glassware tolerances (50.00 cm³ burette ±0.05 cm³ per reading → ΔV ±0.10 cm³, 25.00 cm³ pipette ±0.04 cm³), calorimetry rigs, and reflux vs distillation setups.',
});

// S1 Lab — Titration & Calorimetry Uncertainty Propagation Worked Example
export const CHEM_V3_UNCERTAINTY_WORKED: PlayableDiagramSpec = {
  type: 'worked_example',
  id: 'chem-v3-uncertainty-worked',
  title: 'Worked Example: Uncertainty Propagation & Significant Figure Rules (Lab INFO)',
  caption:
    'Apply official IB Lab INFO addition/subtraction absolute rules, multiplication/division % rules, and the <2% two-sig-fig uncertainty convention.',
  sourceLabel: 'Lab INFO: Propagation of Uncertainties & Measurement Processing',
  commandTerm: 'Calculate',
  marks: 5,
  problemMarkdown:
    'In a calorimetry neutralization trial, $25.0 \\pm 0.5\\text{ cm}^3$ of $1.00\\text{ mol dm}^{-3}$ HCl is mixed with $25.0 \\pm 0.5\\text{ cm}^3$ of NaOH ($m_{\\text{total}} = 50.0 \\pm 1.0\\text{ g}$, neglecting density uncertainty). Initial temperature is $T_i = 21.4 \\pm 0.1^\\circ\\text{C}$ and final extrapolated temperature is $T_f = 28.0 \\pm 0.1^\\circ\\text{C}$. **Calculate** $q = mc\\Delta T$ with its propagated absolute uncertainty ($c = 4.18\\text{ J g}^{-1}\\text{ K}^{-1}$, exact literature value).',
  givenData: [
    { label: 'm', value: '50.0 ± 1.0 g' },
    { label: 'Ti, Tf', value: '21.4 ± 0.1 °C and 28.0 ± 0.1 °C' },
    { label: 'c', value: '4.18 J g⁻¹ K⁻¹ (literature constant: ±0 uncertainty)' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Subtract temperatures and ADD absolute uncertainties',
      workingMarkdown: '$\\Delta T = 28.0 - 21.4 = 6.6^\\circ\\text{C}$ ($6.6\\text{ K}$). Because $\\Delta T = T_f - T_i$ involves two thermometer readings: $\\delta(\\Delta T) = 0.1 + 0.1 = \\mathbf{\\pm 0.2\\text{ K}}$.',
      formulaLatex: '\\Delta T = (28.0 - 21.4) \\pm (0.1 + 0.1) = 6.6 \\pm 0.2\\text{ K}',
      markCode: 'M1',
      rationale: 'Subtracting two readings ALWAYS adds their absolute uncertainties (same as burette ΔV = V_final − V_initial → ±0.10 cm³!).',
    },
    {
      stepNumber: 2,
      title: 'Convert each factor uncertainty into relative % uncertainty',
      workingMarkdown:
        '$\\%\\delta m = \\frac{1.0}{50.0}\\times 100\\% = 2.00\\%$; $\\%\\delta(\\Delta T) = \\frac{0.2}{6.6}\\times 100\\% = 3.03\\%$. Literature constant $c = 4.18$ contributes $0\\%$.',
      formulaLatex: '\\%\\delta q = 2.00\\% + 3.03\\% = 5.03\\%',
      markCode: 'M1 + M1',
      rationale: 'When multiplying/dividing, sum percentage uncertainties cleanly.',
    },
    {
      stepNumber: 3,
      title: 'Compute unrounded q, convert % to ±J, and match decimal places',
      workingMarkdown:
        '$q = 50.0 \\times 4.18 \\times 6.6 = 1379.4\\text{ J}$. $\\delta q = 1379.4 \\times 0.0503 = 69.4\\text{ J}$. Since $5.03\\% \\ge 2\\%$, round uncertainty to **1 significant figure**: $\\pm 70\\text{ J}$, and round value to the same tens place: **$(1380 \\pm 70)\\text{ J}$** ($1.38 \\pm 0.07\\text{ kJ}$).',
      formulaLatex: 'q = 1380 \\pm 70\\text{ J} \\quad (1.38 \\pm 0.07\\text{ kJ})',
      markCode: 'A1 + A1',
      rationale: 'Lab INFO rule: 1 s.f. for uncertainty ≥2% (or 2 s.f. if <2%), and final value matches the least precise decimal place of the rounded uncertainty!',
    },
  ],
  finalAnswerMarkdown:
    '$q = \\mathbf{1380 \\pm 70\\text{ J}}$ (or $1.38 \\pm 0.07\\text{ kJ}$), with $\\Delta T$ uncertainty dominating random error.',
  commonTrapMarkdown:
    'Leaving a raw burette titre uncertainty as ±0.05 cm³ instead of ±0.10 cm³ (for V₂ − V₁) or rounding Δq to ±69 J when percentage error is 5% (>2%) violates Lab INFO conventions.',
};

// S1 Lab — Errors & Apparatus Precision Matrix
export const CHEM_V3_ERRORS_TECHNIQUES_MATRIX: PlayableDiagramSpec = {
  type: 'comparison_matrix',
  id: 'chem-v3-errors-techniques-matrix',
  title: 'Random Errors, Systematic Errors & IA Uncertainty Audit Matrix',
  caption: 'Distinguish precision vs accuracy, volumetric vs measuring glassware, and percentage error vs percentage uncertainty in IB Lab evaluation.',
  columns: ['Concept / Criterion', 'Definition & Origin', 'Effect on Repeat Trials', 'How to Quantify / Mitigate in IA'],
  rows: [
    {
      criterion: 'Random Error',
      cells: [
        'Unpredictable scatter (±) from instrument limits, parallax, drafts',
        'Affects PRECISION; spreads results equally above/below mean',
        'Reduced by repeating trials (N ≥ 3–5) and taking mean / higher-precision glassware',
      ],
    },
    {
      criterion: 'Systematic Error',
      cells: [
        'Consistent directional bias (calorimetry heat loss, uncalibrated balance, over-titration)',
        'Affects ACCURACY; shifts mean away from literature value',
        'NOT reduced by repeating! Fixed by cooling-curve extrapolation, blanking, or calibration',
      ],
      ibExamTip: 'Compare |% Error| = |exp − lit|/|lit| × 100% against total % uncertainty: if % error > % uncertainty, systematic error dominates!',
    },
    {
      criterion: 'Analogue vs Digital Scale',
      cells: [
        'Analogue: ± ½ smallest division (e.g., 50 cm³ burette 0.1 cm³ ticks → ±0.05 cm³)',
        'Digital: ± 1 unit in last displayed decimal place (e.g., ±0.001 g balance)',
        'Difference of two analogue readings doubles ± uncertainty (burette ΔV = ±0.10 cm³)',
      ],
    },
    {
      criterion: 'Repeated Trial Uncertainty',
      cells: [
        'Spread among replicate titrations or rates (Xmax − Xmin)',
        'Never add replicate uncertainties together!',
        'Damji & Green Lab INFO method: ± (Xmax − Xmin) / (2√N) or ± half-range',
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Chemistry SL v3 Bespoke Diagrams, Simulations & Worked Examples (Part 2: S3–R3)
// ---------------------------------------------------------------------------

// S3.1 — Periodicity Explorer Simulation
export const CHEM_V3_PERIODICITY_SIM: PlayableDiagramSpec = {
  type: 'scientific_simulation',
  id: 'chem-v3-periodicity-sim',
  title: 'Interactive Periodic Trends Explorer: IE1, Radii, χ & Melting Point (S3.1)',
  caption:
    'Switch between Period 2, Period 3, Group 1, and Group 17 to inspect Zeff vs shielding, atomic radii shrinkage, Group 1/17 reactivity patterns, and Period 3 IE1 sublevel dips.',
  simulationKind: 'periodicity_explorer',
  initialParams: {
    scope: 'period_3',
    property: 'first_ie',
    element: 'Mg',
  },
  presets: [
    {
      id: 'p3-ie1',
      label: 'Period 3 First Ionization Energy',
      description: 'Inspect general rise Na→Ar driven by Zeff with Mg→Al (3s→3p) and P→S (p⁴ pairing) anomalies.',
      params: { scope: 'period_3', property: 'first_ie', element: 'Al' },
    },
    {
      id: 'p2-radius',
      label: 'Period 2 Atomic Radius Contraction',
      description: 'Same outer n=2 shell while nuclear charge Z climbs +3→+10.',
      params: { scope: 'period_2', property: 'radius', element: 'F' },
    },
    {
      id: 'g1-mp',
      label: 'Group 1 Melting Point & Reactivity',
      description: 'Larger shells weaken +1 metallic attraction and lower IE1 from Li to Cs.',
      params: { scope: 'group_1', property: 'mp', element: 'K' },
    },
    {
      id: 'g17-en',
      label: 'Group 17 Electronegativity & Oxidizing Power',
      description: 'Decreasing attraction for bonding/incoming electrons F → I.',
      params: { scope: 'group_17', property: 'en', element: 'Cl' },
    },
  ],
  formulaLatex: 'Z_{\\text{eff}} = Z - S,\\quad r(\\text{cation}) < r(\\text{atom}) < r(\\text{anion})',
  examTakeaways: [
    'Across Period 3, atomic radius shrinks and IE1/electronegativity increase because protons increase in the same n=3 shell (roughly constant shielding).',
    'Classroom Day 3.1.3 notes two small IE1 dips: Mg→Al (3p higher energy/shielded by 3s²) and P→S (electron-electron spin pairing repulsion in 3p⁴).',
    'Isoelectronic 10e⁻ ions shrink sharply with nuclear charge Z: N³⁻ > O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺.',
  ],
};

// S3.1 — Period 3 Oxides Continuum & Environmental Acids Matrix
export const CHEM_V3_PERIOD3_OXIDES_MATRIX: PlayableDiagramSpec = {
  type: 'comparison_matrix',
  id: 'chem-v3-period3-oxides-matrix',
  title: 'Period 3 Oxides Bonding & Acid–Base Continuum (S3.1.5)',
  caption: 'Connect structure & bonding across Period 3 oxides to aqueous pH, amphoteric Al₂O₃, acid rain (SO₂/NOx), and ocean acidification (CO₂).',
  columns: ['Oxide Formula', 'Structure & Bonding', 'Reaction with Water / Acid / Base', 'Aqueous pH & IB Notes'],
  rows: [
    {
      criterion: 'Na₂O(s) & MgO(s)',
      cells: [
        'Giant ionic crystal lattices (O²⁻ reacts vigorously with H⁺/H₂O)',
        'Na₂O + H₂O → 2NaOH(aq); MgO + H₂O → Mg(OH)₂(aq) (slightly soluble)',
        'Strongly alkaline (NaOH pH ~13–14) to weakly alkaline (Mg(OH)₂ pH ~9–10)',
      ],
    },
    {
      criterion: 'Al₂O₃(s) (Amphoteric)',
      cells: [
        'Ionic with substantial covalent character; high lattice enthalpy (insoluble in H₂O)',
        'With acid: Al₂O₃ + 6H⁺ → 2Al³⁺ + 3H₂O; With base: Al₂O₃ + 2OH⁻ + 3H₂O → 2[Al(OH)₄]⁻',
        'Neutral pH ~7 (insoluble in water), reacts with BOTH acids and strong bases',
      ],
      ibExamTip: 'Memorize BOTH reactions of amphoteric Al₂O₃ (acid AND alkali)—frequently tested in Paper 2!',
    },
    {
      criterion: 'SiO₂(s)',
      cells: [
        'Giant covalent 3D tetrahedral network',
        'Insoluble in water; acidic oxide reacts only with hot concentrated alkali: SiO₂ + 2OH⁻ → SiO₃²⁻ + H₂O',
        'pH unchanged (7) in pure water; classified acidic by reaction with bases',
      ],
    },
    {
      criterion: 'P₄O₁₀(s), SO₂(g), SO₃(l)',
      cells: [
        'Simple covalent molecular compounds',
        'P₄O₁₀ + 6H₂O → 4H₃PO₄; SO₂ + H₂O → H₂SO₃; SO₃ + H₂O → H₂SO₄',
        'Strongly acidic (pH 1–3); SO₂ drives acid deposition (pH < 5.6); CO₂ + H₂O ⇌ H₂CO₃ lowers ocean pH',
      ],
      ibExamTip: 'Natural rain is weakly acidic (~pH 5.6) from dissolved CO₂; acid rain has pH < 5.6 due to SO₂/NOx.',
    },
  ],
};

// S3.1 — Oxidation States Worked Example
export const CHEM_V3_OXIDATION_STATES_WORKED: PlayableDiagramSpec = {
  type: 'worked_example',
  id: 'chem-v3-oxidation-states-worked',
  title: 'Worked Example: Assigning Oxidation States & Oxyanion Nomenclature (S3.1.6)',
  caption: 'Apply IB oxidation state conventions (+2, −1 with sign BEFORE digit!) including metal hydride and peroxide exceptions from Bylikin p. 244.',
  sourceLabel: 'Bylikin Oxford 2023 S3.1.6 (Book pp. 243–245)',
  commandTerm: 'Deduce',
  marks: 4,
  problemMarkdown:
    '**Deduce** the oxidation states of the underlined atoms in (a) $\\text{Na}\\underline{\\text{H}}$, (b) $\\text{H}_2\\underline{\\text{O}}_2$, (c) $\\text{K}\\underline{\\text{Mn}}\\text{O}_4$, and (d) $\\underline{\\text{P}}\\text{O}_4^{3-}$, and state the systematic Stock name of $\\text{SO}_3^{2-}$.',
  givenData: [
    { label: 'IB sign rule', value: 'Write sign BEFORE numeral: +7, −1 (charges use 2+, 3−)' },
    { label: 'Exceptions', value: 'H = −1 in metal hydrides (NaH); O = −1 in peroxides (H₂O₂)' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Solve metal hydride NaH and peroxide H₂O₂ exceptions',
      workingMarkdown:
        'In $\\text{NaH}$, Group 1 Na is always $+1$, forcing H to be **$-1$**. In hydrogen peroxide $\\text{H}_2\\text{O}_2$, H is $+1$ ($2\\times(+1)+2x=0 \\implies x=\\mathbf{-1}$ for O).',
      formulaLatex: '\\text{NaH}: \\text{H} = -1;\\quad \\text{H}_2\\text{O}_2: \\text{O} = -1',
      markCode: 'A1 + A1',
      rationale: 'Never apply blind "O = −2, H = +1" without checking hydrides and peroxides.',
    },
    {
      stepNumber: 2,
      title: 'Solve KMnO₄ and PO₄³⁻ using neutrality / ion charge sum',
      workingMarkdown:
        'In $\\text{KMnO}_4$: $(+1) + x + 4(-2) = 0 \\implies x = \\mathbf{+7}$ (manganate(VII)). In $\\text{PO}_4^{3-}$: $x + 4(-2) = -3 \\implies x = \\mathbf{+5}$ (phosphate(V)).',
      formulaLatex: 'x_{\\text{Mn}} = +7,\\quad x_{\\text{P}} = +5',
      markCode: 'A1',
      rationale: 'For polyatomic ions, sum of oxidation states equals the net ionic charge.',
    },
    {
      stepNumber: 3,
      title: 'Apply Roman numeral Stock naming to SO₃²⁻',
      workingMarkdown:
        'In $\\text{SO}_3^{2-}$, $x + 3(-2) = -2 \\implies x = +4$, giving systematic name **sulfate(IV)** (generic: sulfite).',
      markCode: 'A1',
      rationale: 'SO₄²⁻ is sulfate(VI) while SO₃²⁻ is sulfate(IV).',
    },
  ],
  finalAnswerMarkdown:
    '(a) $\\text{H} = -1$, (b) $\\text{O} = -1$, (c) $\\text{Mn} = +7$, (d) $\\text{P} = +5$; $\\text{SO}_3^{2-}$ = **sulfate(IV)**.',
  commonTrapMarkdown:
    'IB markschemes penalize writing "7+" instead of "+7" for an oxidation state—charge puts sign AFTER number (Fe²⁺), oxidation state puts sign BEFORE (+2).',
};

// S3.2 — Organic Formulas & Functional Group Explorer (SL S3.2.1–S3.2.3)
export const CHEM_V3_ORGANIC_FORMULAS_EXPLORER: PlayableDiagramSpec = {
  type: 'labeled_explorer',
  id: 'chem-v3-organic-formulas-explorer',
  title: 'Organic Formula Representations & SL Functional Groups Explorer (S3.2.1–S3.2.4)',
  caption:
    'Compare empirical, molecular, full structural, condensed, and skeletal representations of organic molecules alongside key SL functional groups (classes vs named reactive moieties).',
  viewBox: '0 0 800 440',
  palette: 'scientific',
  shapes: [
    { kind: 'rect', x: 24, y: 24, width: 752, height: 392, rx: 16, fill: '#F8FAFC', stroke: '#CBD5E1', strokeWidth: 1.5 },
    { kind: 'text', x: 400, y: 52, text: 'Structure 3.2 (SL): Five Formula Conventions & Functional Group Motifs', fontSize: 15, fontWeight: 700, textAnchor: 'middle', fill: '#0F172A' },
    // Left panel: 5 formula levels for butan-2-ol / butanoic acid
    { kind: 'rect', x: 44, y: 74, width: 350, height: 320, rx: 12, fill: '#EFF6FF', stroke: '#93C5FD', strokeWidth: 1.5, hotspotId: 'formulas' },
    { kind: 'text', x: 219, y: 98, text: 'Five Formulas for Butan-2-ol', fontSize: 13, fontWeight: 700, textAnchor: 'middle', fill: '#1E3A8A' },
    { kind: 'rect', x: 62, y: 112, width: 314, height: 44, rx: 8, fill: '#FFFFFF', stroke: '#BFDBFE', hotspotId: 'formulas' },
    { kind: 'text', x: 219, y: 131, text: 'Empirical: C₄H₁₀O  (simplest integer ratio)', fontSize: 11, fontWeight: 600, textAnchor: 'middle', fill: '#1E40AF' },
    { kind: 'text', x: 219, y: 147, text: 'Molecular: C₄H₁₀O  (actual atom count)', fontSize: 11, textAnchor: 'middle', fill: '#334155' },
    { kind: 'rect', x: 62, y: 166, width: 314, height: 48, rx: 8, fill: '#FFFFFF', stroke: '#BFDBFE', hotspotId: 'formulas' },
    { kind: 'text', x: 219, y: 186, text: 'Condensed: CH₃CH(OH)CH₂CH₃', fontSize: 12, fontWeight: 700, textAnchor: 'middle', fill: '#1E40AF' },
    { kind: 'text', x: 219, y: 204, text: '(brackets show branching/substituents)', fontSize: 10, textAnchor: 'middle', fill: '#475569' },
    { kind: 'rect', x: 62, y: 224, width: 314, height: 64, rx: 8, fill: '#FFFFFF', stroke: '#BFDBFE', hotspotId: 'formulas' },
    { kind: 'text', x: 219, y: 244, text: 'Full Structural / Displayed Formula:', fontSize: 11, fontWeight: 700, textAnchor: 'middle', fill: '#1E40AF' },
    { kind: 'text', x: 219, y: 263, text: 'Shows EVERY atom & EVERY covalent bond', fontSize: 11, textAnchor: 'middle', fill: '#334155' },
    { kind: 'text', x: 219, y: 279, text: '(Include O–H bond explicitly when asked "displayed"!)', fontSize: 10, textAnchor: 'middle', fill: '#B45309' },
    { kind: 'rect', x: 62, y: 298, width: 314, height: 80, rx: 8, fill: '#FFFFFF', stroke: '#3B82F6', strokeWidth: 1.5, hotspotId: 'skeletal' },
    { kind: 'text', x: 219, y: 318, text: 'Skeletal Formula (vertices = C, H on C omitted)', fontSize: 11, fontWeight: 700, textAnchor: 'middle', fill: '#1D4ED8' },
    { kind: 'path', d: 'M 130 360 L 175 335 L 220 360 L 265 335', fill: 'none', stroke: '#0F172A', strokeWidth: 2.5, hotspotId: 'skeletal' },
    { kind: 'line', x1: 175, y1: 335, x2: 175, y2: 316, stroke: '#DC2626', strokeWidth: 2, hotspotId: 'skeletal' },
    { kind: 'text', x: 188, y: 318, text: 'OH', fontSize: 11, fontWeight: 700, fill: '#DC2626' },
    // Right panel: Oxygen & Nitrogen Functional Groups + Homologous trends
    { kind: 'rect', x: 410, y: 74, width: 346, height: 210, rx: 12, fill: '#ECFDF5', stroke: '#6EE7B7', strokeWidth: 1.5, hotspotId: 'carbonyls' },
    { kind: 'text', x: 583, y: 98, text: 'Critical SL Functional Group Pairs', fontSize: 13, fontWeight: 700, textAnchor: 'middle', fill: '#065F46' },
    { kind: 'text', x: 430, y: 126, text: '• Aldehyde (–CHO, terminal C=O) vs Ketone (C–CO–C)', fontSize: 11, fill: '#064E3B' },
    { kind: 'text', x: 430, y: 150, text: '• Carboxylic acid (–COOH) vs Ester (–COO–R)', fontSize: 11, fill: '#064E3B' },
    { kind: 'text', x: 430, y: 174, text: '• Ether (R–O–R′) vs Alcohol (–OH hydroxyl)', fontSize: 11, fill: '#064E3B' },
    { kind: 'text', x: 430, y: 198, text: '• Primary Amine (–NH₂) vs Amide (–CONH₂)', fontSize: 11, fill: '#064E3B' },
    { kind: 'text', x: 430, y: 222, text: '• Nitrile (–C≡N) vs Halogenoalkane (–X)', fontSize: 11, fill: '#064E3B' },
    { kind: 'text', x: 430, y: 248, text: '• Phenyl ring (–C₆H₅) in arene aromatic class', fontSize: 11, fontWeight: 600, fill: '#047857' },
    { kind: 'rect', x: 410, y: 298, width: 346, height: 96, rx: 12, fill: '#FEF3C7', stroke: '#F59E0B', strokeWidth: 1.5, hotspotId: 'homologous' },
    { kind: 'text', x: 583, y: 322, text: 'Homologous Series Rules (S3.2.3–S3.2.4)', fontSize: 12, fontWeight: 700, textAnchor: 'middle', fill: '#92400E' },
    { kind: 'text', x: 583, y: 344, text: 'Same general formula, differ by –CH₂– (+14.03 g mol⁻¹)', fontSize: 11, textAnchor: 'middle', fill: '#78350F' },
    { kind: 'text', x: 583, y: 364, text: 'Similar chemical reactions; graded b.p. & solubility trends', fontSize: 11, textAnchor: 'middle', fill: '#78350F' },
  ],
  hotspots: [
    {
      id: 'formulas',
      x: 219,
      y: 190,
      label: 'Empirical vs Molecular vs Condensed vs Full Structural',
      category: 'S3.2.1',
      examKeyword: 'all covalent bonds explicitly drawn for displayed/full structural',
      detailMarkdown: 'Never abbreviate $\\text{-OH}$ or $\\text{-CH}_3$ when an IB question asks for a **full structural formula**—draw every single C–H and O–H bond explicitly!',
    },
    {
      id: 'skeletal',
      x: 219,
      y: 342,
      label: 'Skeletal Formula Convention',
      category: 'S3.2.1',
      examKeyword: 'hydrogens on carbon omitted; heteroatom H shown',
      detailMarkdown: 'Every vertex and line end represents a carbon atom satisfied to 4 bonds by implied H atoms. However, H attached to **O, N, or S** (like $-\\text{OH}$, $-\\text{NH}_2$) MUST always be written.',
    },
    {
      id: 'carbonyls',
      x: 583,
      y: 180,
      label: 'Distinguishing Functional Groups (IUPAC Class vs Group)',
      category: 'S3.2.2',
      examKeyword: 'carboxyl, carbonyl, hydroxyl, ester, ether, carboxamide',
      detailMarkdown: 'Know both class and group names: alcohols carry the **hydroxyl** group ($-\\text{OH}$), carboxylic acids carry the **carboxyl** group ($-\\text{COOH}$), esters carry the **ester** linkage ($-\\text{COO}-$), and ethers have an oxygen bridge ($\\text{R}-\\text{O}-\\text{R}\'$).',
    },
    {
      id: 'homologous',
      x: 583,
      y: 346,
      label: 'Homologous Series Physical Gradients',
      category: 'S3.2.3–S3.2.4',
      examKeyword: 'successive CH₂ unit increases LDFs',
      detailMarkdown: 'Boiling point increases non-linearly (steep at low $n$, flattening at high $n$) as additional $-\\text{CH}_2-$ units raise electron count and London dispersion forces. Water solubility of alcohols falls sharply above C₄ as the non-polar alkyl tail dominates.',
    },
  ],
};

// S3.2 — IUPAC Nomenclature Step Mechanism
export const CHEM_V3_IUPAC_NAMING_STEPS: PlayableDiagramSpec = {
  type: 'step_mechanism',
  id: 'chem-v3-iupac-naming-steps',
  title: 'Five-Step SL IUPAC Nomenclature Protocol (S3.2.5)',
  caption: 'Eliminate numbering and prefix errors across branched alkanes, alkenes, halogenoalkanes, alcohols, aldehydes, ketones, carboxylic acids, and esters.',
  palette: 'scientific',
  nodes: [
    { id: 'i1', x: 95, y: 190, label: '1. Principal Suffix', sublabel: '-oic acid > -al > -one > -ol', group: 'Priority' },
    { id: 'i2', x: 265, y: 190, label: '2. Longest Chain', sublabel: 'Must hold main group / C=C', group: 'Root' },
    { id: 'i3', x: 440, y: 190, label: '3. Lowest Locants', sublabel: 'Number from priority end', group: 'Numbering' },
    { id: 'i4', x: 635, y: 190, label: '4. Alphabetize Prefixes', sublabel: 'Ignore di/tri; punctuation', group: 'Assemble' },
  ],
  edges: [
    { id: 'ei12', from: 'i1', to: 'i2', label: 'Find stem length' },
    { id: 'ei23', from: 'i2', to: 'i3', label: 'Assign C1..Cn' },
    { id: 'ei34', from: 'i3', to: 'i4', label: 'Format name' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Identify Principal Functional Group Suffix',
      descriptionMarkdown:
        'Suffix priority: **carboxylic acid** (`-oic acid`) $>$ **ester** (`alkyl ...-oate`) $>$ **aldehyde** (`-al`) $>$ **ketone** (`-one`) $>$ **alcohol** (`-ol`) $>$ **alkene/alkyne** (`-ene/-yne`). Halogens (`bromo-, chloro-, fluoro-, iodo-`) and alkyl branches are ALWAYS prefixes.',
      activeNodeIds: ['i1'],
      activeEdgeIds: [],
      metrics: [{ label: 'C=O Terminal', value: '-al (always C1)' }, { label: 'COOH', value: '-oic acid (always C1)' }],
    },
    {
      stepNumber: 2,
      title: 'Find Longest Continuous Chain Containing the Principal Group',
      descriptionMarkdown:
        'Do not pick the longest raw zig-zag if it excludes the $\\text{C}=\\text{C}$ double bond or $-\\text{OH}$ carbon! Stems: 1 meth-, 2 eth-, 3 prop-, 4 but-, 5 pent-, 6 hex-, 7 hept-, 8 oct-.',
      activeNodeIds: ['i2'],
      activeEdgeIds: ['ei12'],
      metrics: [{ label: 'Esters', value: 'alcohol-derived "alkyl" + acid-derived "-oate"' }],
    },
    {
      stepNumber: 3,
      title: 'Number from the End Giving the Lowest Locant to Principal Group',
      descriptionMarkdown:
        'In **butan-2-ol**, C1 is closest to $-\\text{OH}$ even if branches exist at the far end. For pure branched alkanes, minimize the **first point of difference** in locant list (e.g., `2,2,4-trimethylpentane`, NOT `2,4,4-`).',
      activeNodeIds: ['i3'],
      activeEdgeIds: ['ei23'],
      metrics: [{ label: 'First difference', value: '2,2,4 beats 2,4,4' }],
    },
    {
      stepNumber: 4,
      title: 'Sort Substituents Alphabetically & Punctuate Strictly',
      descriptionMarkdown:
        'Sort **bromo** before **ethyl** before **methyl**—ignoring multipliers `di-`, `tri-`, `tetra-` (`3-ethyl-2,4-dimethylpentane`). Use commas between numbers, hyphens between numbers and letters, and drop trailing `-e` before vowels (except `propan-1,2-diol` retains `-e` before consonant `d`!).',
      formulaLatex: '\\text{CH}_3\\text{CH}(\\text{Cl})\\text{CH}_2\\text{CHO} \\rightarrow \\text{3-chlorobutanal}',
      activeNodeIds: ['i4'],
      activeEdgeIds: ['ei34'],
      metrics: [{ label: 'Numbers', value: 'Comma separated' }, { label: 'Num–Letter', value: 'Hyphenated' }],
    },
  ],
};

// S3.2 — Structural Isomerism & 1°/2°/3° Classification Matrix (SL ONLY)
export const CHEM_V3_ISOMERISM_SL_MATRIX: PlayableDiagramSpec = {
  type: 'comparison_matrix',
  id: 'chem-v3-isomerism-sl-matrix',
  title: 'SL Structural Isomerism & Primary/Secondary/Tertiary Classification (S3.2.6)',
  caption: 'All structural isomers share the identical molecular formula but differ in atom-to-atom connectivity. (Stereoisomerism is AHL only and excluded here.)',
  columns: ['Type of Structural Isomer / Class', 'Structural Difference', 'Concrete SL Examples (Same Formula)', 'Physical & Chemical Consequence'],
  rows: [
    {
      criterion: 'Chain Isomers',
      cells: [
        'Different carbon backbone branching',
        'Butane vs 2-methylpropane (C₄H₁₀); pentane vs 2-methylbutane vs 2,2-dimethylpropane (C₅H₁₂)',
        'More branching reduces surface contact → weaker LDFs → lower boiling point (36 °C → 28 °C → 9.5 °C)',
      ],
    },
    {
      criterion: 'Positional Isomers',
      cells: [
        'Same carbon skeleton & same functional group at different C locant',
        'Propan-1-ol vs propan-2-ol (C₃H₈O); but-1-ene vs but-2-ene (C₄H₈)',
        'Different oxidation products (1° alcohol → aldehyde/acid; 2° alcohol → ketone)',
      ],
    },
    {
      criterion: 'Functional Group Isomers',
      cells: [
        'Atoms bonded into completely different functional groups',
        'Ethanol & methoxymethane (C₂H₆O); propanal & propanone (C₃H₆O); propanoic acid & methyl ethanoate (C₃H₆O₂)',
        'Dramatic b.p. and reactivity gap: ethanol (+78 °C, H-bonds) vs methoxymethane (−24 °C, dipole–dipole only)',
      ],
      ibExamTip: 'Alkenes and cycloalkanes (e.g., propene and cyclopropane, C₃H₆) are ALSO functional/structural isomers!',
    },
    {
      criterion: '1° / 2° / 3° Alcohols & Halogenoalkanes',
      cells: [
        'Count carbons directly attached to the C bearing –OH or –X',
        '1° (ethan-1-ol, 1 C), 2° (propan-2-ol, 2 C), 3° (2-methylpropan-2-ol, 3 C)',
        'Governs R3.2 oxidation products: 1° → aldehyde/acid, 2° → ketone, 3° → resists mild oxidation',
      ],
    },
  ],
};

// R1.1–R1.2 — Enthalpy Energy Profile Simulation
export const CHEM_V3_ENTHALPY_PROFILE_SIM: PlayableDiagramSpec = {
  type: 'scientific_simulation',
  id: 'chem-v3-enthalpy-profile-sim',
  title: 'Interactive Enthalpy Profile, Activation Energy & Catalyst Simulator (R1.1–R2.2)',
  caption:
    'Adjust ΔH (exothermic vs endothermic), uncatalyzed activation energy Ea, temperature, and toggle a catalyst pathway to inspect potential energy barriers and Boltzmann kinetics.',
  simulationKind: 'enthalpy_energy_profile',
  initialParams: {
    deltaH: -92,
    ea: 110,
    catalyzed: false,
    tempK: 350,
  },
  presets: [
    {
      id: 'exo-uncat',
      label: 'Exothermic Uncatalyzed (ΔH = −92 kJ mol⁻¹)',
      description: 'Products sit lower in enthalpy (more energetically stable) than reactants.',
      params: { deltaH: -92, ea: 120, catalyzed: false, tempK: 350 },
    },
    {
      id: 'exo-cat',
      label: 'Catalyzed Haber-Style Profile',
      description: 'Alternative pathway lowers Ea WITHOUT changing ΔH or equilibrium position.',
      params: { deltaH: -92, ea: 120, catalyzed: true, tempK: 500 },
    },
    {
      id: 'endo-profile',
      label: 'Endothermic Decomposition (ΔH = +135 kJ mol⁻¹)',
      description: 'Notice Ea(forward) ≥ ΔH because products lie above reactants.',
      params: { deltaH: 135, ea: 185, catalyzed: false, tempK: 420 },
    },
  ],
  formulaLatex: '\\Delta H = H_{\\text{products}} - H_{\\text{reactants}} = E_{a,\\text{fwd}} - E_{a,\\text{rev}}',
  examTakeaways: [
    'Exothermic reactions have ΔH < 0: products have LOWER enthalpy (stronger bonds overall) and transfer heat TO surroundings, raising water temperature.',
    'A catalyst lowers BOTH forward and reverse activation energies by the identical amount—leaving ΔH completely unchanged!',
    'Arrows on IB energy profiles MUST show direction: ΔH points reactant → product level; Ea points reactant level → transition-state peak.',
  ],
};

// R1.1–R1.2 — Calorimetry, Bond Enthalpies & Hess Cycle Worked Example
export const CHEM_V3_CALORIMETRY_HESS_WORKED: PlayableDiagramSpec = {
  type: 'worked_example',
  id: 'chem-v3-calorimetry-hess-worked',
  title: 'Worked Example: Spirit-Burner Calorimetry, Bond Enthalpies & Hess’s Law (R1.1–R1.2)',
  caption: 'Walk through Bylikin R1.1 methanol calorimetry, R1.2 bond-enthalpy estimation (C₂H₄ + HBr), and R1.2 Hess cycle summation.',
  sourceLabel: 'Bylikin Oxford 2023 pp. 399, 407 & 409',
  commandTerm: 'Calculate',
  marks: 6,
  problemMarkdown:
    '(a) Burning $0.348\\text{ g}$ of methanol ($M = 32.05\\text{ g mol}^{-1}$) heats $31.2\\text{ g}$ of water by $\\Delta T = +30.0^\\circ\\text{C}$ ($c = 4.18\\text{ J g}^{-1}\\text{ K}^{-1}$). **Calculate** the experimental $\\Delta H_c$. (b) Using average bond enthalpies ($\\text{C=C}=614$, $\\text{C–C}=346$, $\\text{C–H}=414$, $\\text{H–Br}=366$, $\\text{C–Br}=285\\text{ kJ mol}^{-1}$), **calculate** $\\Delta H$ for $\\text{C}_2\\text{H}_4(g) + \\text{HBr}(g) \\to \\text{C}_2\\text{H}_5\\text{Br}(g)$.',
  givenData: [
    { label: 'Calorimetry', value: 'm(water) = 31.2 g, ΔT = +30.0 K, m(CH₃OH) = 0.348 g' },
    { label: 'Literature ΔHc°(CH₃OH)', value: '−726 kJ mol⁻¹ (for systematic error comparison)' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Part (a): Compute thermal energy q absorbed by water',
      workingMarkdown: '$q = mc\\Delta T = 31.2 \\times 4.18 \\times 30.0 = 3912\\text{ J} = 3.912\\text{ kJ}$.',
      formulaLatex: 'q = mc\\Delta T = 3.912\\text{ kJ}',
      markCode: 'M1',
      rationale: 'Use the mass of the SOLUTION / WATER heated (31.2 g), NEVER the mass of the fuel (0.348 g) in mcΔT!',
    },
    {
      stepNumber: 2,
      title: 'Divide −q by moles of methanol combusted',
      workingMarkdown: '$n(\\text{CH}_3\\text{OH}) = \\frac{0.348}{32.05} = 0.01086\\text{ mol}$. Since temperature rose, combustion is exothermic: $\\Delta H_c = -\\frac{3.912}{0.01086} = \\mathbf{-360\\text{ kJ mol}^{-1}}$ (heat loss + incomplete combustion make it much less exothermic than $-726$).',
      formulaLatex: '\\Delta H = -\\frac{q}{n} = -360\\text{ kJ mol}^{-1}',
      markCode: 'M1 + A1',
      rationale: 'Always attach the negative sign for exothermic reactions.',
    },
    {
      stepNumber: 3,
      title: 'Part (b): Count ONLY bonds broken and bonds formed',
      workingMarkdown:
        'Full cancellation or total count: broken = $4(\\text{C–H}) + 1(\\text{C=C}) + 1(\\text{H–Br}) = 4(414)+614+366 = 2636\\text{ kJ}$; formed = $5(\\text{C–H}) + 1(\\text{C–C}) + 1(\\text{C–Br}) = 5(414)+346+285 = 2701\\text{ kJ}$.',
      formulaLatex: '\\Delta H = \\sum E(\\text{broken}) - \\sum E(\\text{formed}) = 2636 - 2701 = -65\\text{ kJ mol}^{-1}',
      markCode: 'M1 + M1 + A1',
      rationale: 'Equivalently, net change = [1(C=C)+1(H–Br)] − [1(C–C)+1(C–H)+1(C–Br)] = 980 − 1045 = −65 kJ mol⁻¹.',
    },
  ],
  finalAnswerMarkdown: '(a) $\\Delta H_c(\\text{exp}) = \\mathbf{-360\\text{ kJ mol}^{-1}}$; (b) $\\Delta H = \\mathbf{-65\\text{ kJ mol}^{-1}}$.',
  commonTrapMarkdown: 'Putting ΔHc mass of ethanol inside q = mcΔT, or reversing bond enthalpy formula to (products − reactants) instead of (bonds broken − bonds formed)!',
};

// R1.3 — Fuels, Combustion, Biofuels & Fuel Cells Matrix
export const CHEM_V3_FUELS_ENERGY_MATRIX: PlayableDiagramSpec = {
  type: 'comparison_matrix',
  id: 'chem-v3-fuels-energy-matrix',
  title: 'Fossil Fuels, Biofuels & Hydrogen Fuel Cells Comparison (R1.3)',
  caption: 'Evaluate specific energy (kJ g⁻¹), energy density (kJ cm⁻³), carbon neutrality, complete vs incomplete combustion, and PEM fuel cell electrochemistry.',
  columns: ['Fuel / Energy System', 'Specific Energy vs Energy Density', 'Combustion / Cell Equation', 'Environmental & Efficiency Profile'],
  rows: [
    {
      criterion: 'Natural Gas (CH₄) & Octane (C₈H₁₈)',
      cells: [
        'CH₄ ~55.5 kJ g⁻¹ (highest hydrocarbon mass basis, tiny volumetric density as gas); liquid octane ~47.9 kJ g⁻¹, high volumetric energy density',
        'CH₄ + 2O₂ → CO₂ + 2H₂O; incomplete: 2CH₄ + 3O₂ → 2CO + 4H₂O or C(s) + 2H₂O',
        'Non-renewable fossil carbon; incomplete combustion yields toxic CO (binds haemoglobin) and soot particulates',
      ],
    },
    {
      criterion: 'Coal (Mostly C)',
      cells: [
        'Lower specific energy (~29–34 kJ g⁻¹) due to pre-oxidized / heteroatom mineral content',
        'C(s) + O₂(g) → CO₂(g); sulfur impurities → SO₂(g)',
        'Highest CO₂ released per MJ heat; emits SO₂ acid rain & ash particulates',
      ],
    },
    {
      criterion: 'Bioethanol (C₂H₅OH) & Biodiesel',
      cells: [
        'Bioethanol ~29.7 kJ g⁻¹ (already partially oxidized with –OH → lower than octane)',
        'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂; C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O',
        'Renewable short-term carbon fixation, but not strictly carbon-neutral once fertilizer, transport & land-use tradeoffs are counted',
      ],
      ibExamTip: 'Compare C₂H₅OH vs C₂H₆: oxygen already bonded in ethanol lowers its specific energy!',
    },
    {
      criterion: 'Hydrogen / Methanol PEM Fuel Cell',
      cells: [
        'H₂ has unmatched specific energy (~142 kJ g⁻¹) but very low energy density at 100 kPa unless compressed/liquefied',
        'Acidic PEM: Anode H₂ → 2H⁺ + 2e⁻; Cathode O₂ + 4H⁺ + 4e⁻ → 2H₂O (overall 2H₂ + O₂ → 2H₂O)',
        'Direct chemical → electrical conversion (~60% efficient, far above thermal engines); zero point-of-use CO₂ (depends on H₂ source)',
      ],
    },
  ],
};

// R2.3 — Le Chatelier & Dynamic Equilibrium Simulator
export const CHEM_V3_LE_CHATELIER_SIM: PlayableDiagramSpec = {
  type: 'scientific_simulation',
  id: 'chem-v3-le-chatelier-sim',
  title: 'Interactive Dynamic Equilibrium & Le Châtelier Perturbation Lab (R2.3)',
  caption:
    'Perturb Haber (N₂ + 3H₂ ⇌ 2NH₃), Contact (2SO₂ + O₂ ⇌ 2SO₃), and NO₂/N₂O₄ systems by concentration, pressure, temperature, or catalyst to observe Q vs Kc shifts.',
  simulationKind: 'equilibrium_le_chatelier',
  initialParams: {
    reaction: 'haber',
    perturb: 'initial',
  },
  presets: [
    {
      id: 'haber-pressure',
      label: 'Haber Process: High Pressure (4 mol → 2 mol gas)',
      description: 'System shifts right toward fewer gas moles; Kc remains constant.',
      params: { reaction: 'haber', perturb: 'high_pressure' },
    },
    {
      id: 'haber-temp',
      label: 'Haber Process: Temperature Spike (ΔH < 0)',
      description: 'Favours endothermic reverse reaction, DECREASING Kc.',
      params: { reaction: 'haber', perturb: 'high_temp' },
    },
    {
      id: 'no2-catalyst',
      label: 'Catalyst Addition on Equilibrium',
      description: 'Speeds forward and reverse rates equally; NO shift in position or Kc.',
      params: { reaction: 'no2_n2o4', perturb: 'catalyst' },
    },
  ],
  formulaLatex: 'K_c = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3} \\quad (\\text{changes ONLY with } T!)',
  examTakeaways: [
    'At dynamic equilibrium in a closed system: rate(forward) = rate(reverse) AND macroscopic concentrations stay constant (NOT necessarily equal!).',
    'Temperature is the ONLY disturbance that changes the numerical value of equilibrium constant Kc.',
    'A catalyst speeds BOTH forward and reverse rates identically, reducing time to reach equilibrium without shifting yield.',
  ],
};

// R2.1 — Limiting Reactant, Percentage Yield & Atom Economy Worked Example
export const CHEM_V3_STOICHIOMETRY_YIELD_WORKED: PlayableDiagramSpec = {
  type: 'worked_example',
  id: 'chem-v3-stoichiometry-yield-worked',
  title: 'Worked Example: Limiting Reactant, % Yield & Green Atom Economy (R2.1)',
  caption: 'Master Bylikin R2.1 limiting reagent arithmetic, % yield vs experimental loss, and atom economy calculations.',
  sourceLabel: 'Bylikin Oxford 2023 pp. 471 & 476',
  commandTerm: 'Calculate',
  marks: 5,
  problemMarkdown:
    '(a) A mixture of $10.0\\text{ g}$ of $\\text{Ca}(s)$ ($M = 40.08$) and $9.62\\text{ g}$ of $\\text{S}(s)$ ($M = 32.07$) is heated according to $\\text{Ca}(s) + \\text{S}(s) \\to \\text{CaS}(s)$ ($M = 72.15$), isolating $17.0\\text{ g}$ of $\\text{CaS}$. **Calculate** the theoretical yield and percentage yield. (b) Separately, for $4\\text{CH}_3\\text{OH} + 2\\text{CO} + \\text{O}_2 \\to 2(\\text{CH}_3\\text{O})_2\\text{CO} + 2\\text{H}_2\\text{O}$, **calculate** the percentage atom economy for dimethyl carbonate ($M = 90.09\\text{ g mol}^{-1}$; $\\text{H}_2\\text{O} = 18.02$).',
  givenData: [
    { label: 'Reactants (a)', value: '10.0 g Ca (M = 40.08) + 9.62 g S (M = 32.07)' },
    { label: 'Experimental yield', value: '17.0 g CaS' },
    { label: 'Products (b)', value: '2 mol (CH₃O)₂CO (desired) + 2 mol H₂O (byproduct)' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Part (a): Find moles of both reactants to identify the limiting reagent',
      workingMarkdown:
        '$n(\\text{Ca}) = \\frac{10.0}{40.08} = 0.2495\\text{ mol}$; $n(\\text{S}) = \\frac{9.62}{32.07} = 0.3000\\text{ mol}$. For a $1:1$ stoichiometry, **$\\text{Ca}$ is limiting** ($0.2495 < 0.3000$).',
      formulaLatex: 'n(\\text{Ca}) = 0.2495\\text{ mol (limiting)}',
      markCode: 'M1',
      rationale: 'Never assume the smaller gram mass is automatically limiting—compare moles divided by stoichiometric coefficients!',
    },
    {
      stepNumber: 2,
      title: 'Calculate theoretical yield and percentage yield of CaS',
      workingMarkdown:
        'Theoretical mass $= 0.2495\\text{ mol} \\times 72.15\\text{ g mol}^{-1} = \\mathbf{18.00\\text{ g}}$. $\\%\\text{ yield} = \\frac{17.0}{18.00}\\times 100\\% = \\mathbf{94.4\\%}$.',
      formulaLatex: '\\%\\text{ yield} = \\frac{17.0}{18.00} \\times 100\\% = 94.4\\%',
      markCode: 'M1 + A1',
      rationale: 'Percentage yield compares actual laboratory yield against stoichiometric maximum.',
    },
    {
      stepNumber: 3,
      title: 'Part (b): Compute percentage atom economy from balanced coefficients',
      workingMarkdown:
        'Desired product mass $= 2 \\times 90.09 = 180.18\\text{ g}$. Total mass of all products (equal to all reactants!) $= 180.18 + 2(18.02) = 216.22\\text{ g}$.\n$\\text{Atom economy} = \\frac{180.18}{216.22}\\times 100\\% = \\mathbf{83.33\\%}$.',
      formulaLatex: '\\%\\text{ atom economy} = \\frac{\\sum M(\\text{desired products})}{\\sum M(\\text{all reactants})} \\times 100\\% = 83.3\\%',
      markCode: 'M1 + A1',
      rationale: 'By conservation of mass, denominator equals ΣM(all reactants) = ΣM(all products); addition reactions have 100% atom economy!',
    },
  ],
  finalAnswerMarkdown:
    '(a) Theoretical yield = **$18.0\\text{ g}$**, percentage yield = **$94.4\\%$**; (b) Atom economy = **$83.3\\%$**.',
  commonTrapMarkdown:
    'Confusing % yield (experimental waste/losses/equilibrium) with % atom economy (theoretical stoichiometric efficiency even at 100% yield) or forgetting stoichiometric coefficients in atom economy!',
};

// R2.2 — Maxwell–Boltzmann Kinetics & Catalyst Explorer (SL ONLY)
export const CHEM_V3_BOLTZMANN_KINETICS_EXPLORER: PlayableDiagramSpec = {
  type: 'labeled_explorer',
  id: 'chem-v3-boltzmann-kinetics-explorer',
  title: 'Maxwell–Boltzmann Distribution, Activation Energy & Rate Monitoring Explorer (R2.2)',
  caption:
    'Inspect why raising temperature flattens and right-shifts the Maxwell–Boltzmann curve, why a catalyst lowers Ea without moving the curve, and how to measure instantaneous reaction rates.',
  viewBox: '0 0 800 440',
  palette: 'scientific',
  shapes: [
    { kind: 'rect', x: 24, y: 24, width: 752, height: 392, rx: 16, fill: '#F8FAFC', stroke: '#CBD5E1', strokeWidth: 1.5 },
    { kind: 'text', x: 400, y: 52, text: 'Reactivity 2.2 (SL): Maxwell–Boltzmann Energy Curves & Activation Thresholds', fontSize: 15, fontWeight: 700, textAnchor: 'middle', fill: '#0F172A' },
    // Axes
    { kind: 'line', x1: 80, y1: 330, x2: 510, y2: 330, stroke: '#0F172A', strokeWidth: 2 },
    { kind: 'line', x1: 80, y1: 90, x2: 80, y2: 330, stroke: '#0F172A', strokeWidth: 2 },
    { kind: 'text', x: 295, y: 356, text: 'Kinetic Energy (E)', fontSize: 12, fontWeight: 700, textAnchor: 'middle', fill: '#334155' },
    { kind: 'text', x: 52, y: 210, text: 'Fraction of particles', fontSize: 11, fontWeight: 600, textAnchor: 'middle', fill: '#334155' },
    // T1 cold curve (higher, narrower peak)
    { kind: 'path', d: 'M 80 330 C 125 110, 175 100, 235 230 C 285 305, 360 326, 495 329', fill: 'none', stroke: '#2563EB', strokeWidth: 3, hotspotId: 't1_curve' },
    { kind: 'text', x: 160, y: 114, text: 'T₁ (lower T)', fontSize: 11, fontWeight: 700, fill: '#1D4ED8' },
    // T2 hot curve (lower peak, shifted right, fatter tail)
    { kind: 'path', d: 'M 80 330 C 145 190, 230 165, 305 235 C 370 292, 430 315, 495 325', fill: 'none', stroke: '#DC2626', strokeWidth: 3, hotspotId: 't2_curve' },
    { kind: 'text', x: 275, y: 175, text: 'T₂ > T₁ (broader, shifted right)', fontSize: 11, fontWeight: 700, fill: '#DC2626' },
    // Catalyzed Ea line
    { kind: 'line', x1: 315, y1: 110, x2: 315, y2: 330, stroke: '#059669', strokeWidth: 2.5, strokeDasharray: '5 4', hotspotId: 'ea_cat' },
    { kind: 'text', x: 315, y: 102, text: 'Ea(cat)', fontSize: 11, fontWeight: 700, textAnchor: 'middle', fill: '#047857' },
    // Uncatalyzed Ea line
    { kind: 'line', x1: 385, y1: 110, x2: 385, y2: 330, stroke: '#7C3AED', strokeWidth: 2.5, hotspotId: 'ea_uncat' },
    { kind: 'text', x: 385, y: 102, text: 'Ea(uncat)', fontSize: 11, fontWeight: 700, textAnchor: 'middle', fill: '#5B21B6' },
    // Right card: Collision requirements & rate measurement methods
    { kind: 'rect', x: 535, y: 85, width: 222, height: 245, rx: 12, fill: '#EFF6FF', stroke: '#93C5FD', strokeWidth: 1.5, hotspotId: 'monitoring' },
    { kind: 'text', x: 646, y: 112, text: 'Successful Collisions Need:', fontSize: 12, fontWeight: 700, textAnchor: 'middle', fill: '#1E3A8A' },
    { kind: 'text', x: 550, y: 138, text: '1. Kinetic energy E ≥ Ea', fontSize: 11, fill: '#1E40AF' },
    { kind: 'text', x: 550, y: 160, text: '2. Correct collision geometry', fontSize: 11, fill: '#1E40AF' },
    { kind: 'text', x: 646, y: 198, text: 'Lab Rate Monitoring Tools:', fontSize: 12, fontWeight: 700, textAnchor: 'middle', fill: '#1E3A8A' },
    { kind: 'text', x: 550, y: 224, text: '• Gas syringe volume vs t', fontSize: 10, fill: '#334155' },
    { kind: 'text', x: 550, y: 246, text: '• Balance mass loss (CO₂)', fontSize: 10, fill: '#334155' },
    { kind: 'text', x: 550, y: 268, text: '• Colorimetry (absorbance)', fontSize: 10, fill: '#334155' },
    { kind: 'text', x: 550, y: 290, text: '• Electrical conductivity / pH', fontSize: 10, fill: '#334155' },
    { kind: 'text', x: 550, y: 312, text: '• Quenching + titration', fontSize: 10, fill: '#334155' },
    // Bottom note
    { kind: 'rect', x: 48, y: 370, width: 709, height: 34, rx: 8, fill: '#FEF3C7', stroke: '#F59E0B', strokeWidth: 1 },
    { kind: 'text', x: 402, y: 391, text: 'Origin Rule: Curve ALWAYS passes through (0, 0) & total area under curve = 100% of particles (invariant with T).', fontSize: 11, fontWeight: 700, textAnchor: 'middle', fill: '#92400E' },
  ],
  hotspots: [
    {
      id: 't1_curve',
      x: 160,
      y: 165,
      label: 'Lower-Temperature Curve T₁',
      category: 'Boltzmann Distribution',
      examKeyword: 'area = total number of molecules',
      detailMarkdown: 'At $T_1$, the most probable kinetic energy (peak) is higher vertically and sits at lower energy. Very few molecules exceed $E_a$.',
    },
    {
      id: 't2_curve',
      x: 275,
      y: 205,
      label: 'Higher-Temperature Curve T₂ > T₁',
      category: 'Temperature Effect',
      examKeyword: 'higher fraction of particles with E ≥ Ea',
      detailMarkdown: 'Raising $T$ lowers peak height so total area stays constant, shifting the tail right so a **much larger fraction of collisions possess $E \\ge E_a$** (primary cause of the sharp rate rise; faster speed adds a smaller frequency bonus).',
    },
    {
      id: 'ea_cat',
      x: 315,
      y: 250,
      label: 'Catalyzed Pathway (Ea,cat < Ea)',
      category: 'Catalyst',
      examKeyword: 'alternative pathway with lower activation energy',
      detailMarkdown: 'A catalyst does **NOT** shift the Maxwell–Boltzmann curve! Instead, it shifts the vertical $E_a$ line to the **left**, increasing the shaded area of molecules able to react.',
    },
    {
      id: 'ea_uncat',
      x: 385,
      y: 250,
      label: 'Uncatalyzed Threshold Ea',
      category: 'Activation Energy',
      examKeyword: 'minimum energy needed for reaction',
      detailMarkdown: 'Only particles in the shaded area to the right of $E_a$ can react upon colliding with favourable orientation.',
    },
    {
      id: 'monitoring',
      x: 646,
      y: 210,
      label: 'Collision Theory & Instantaneous Rate Tangents',
      category: 'Experimental Kinetics',
      examKeyword: 'gradient of tangent to concentration–time curve',
      detailMarkdown: 'Initial rate is fastest at $t=0$ (maximum $[\\text{reactant}]$) and slows to zero as reactants deplete. Measure instantaneous rate via the **gradient of the tangent** $\\frac{\\Delta [P]}{\\Delta t}$ in $\\text{mol dm}^{-3}\\text{ s}^{-1}$.',
    },
  ],
};

// R3.1 — Titration pH Curve Simulator
export const CHEM_V3_TITRATION_PH_SIM: PlayableDiagramSpec = {
  type: 'scientific_simulation',
  id: 'chem-v3-titration-ph-sim',
  title: 'Interactive Acid–Base Neutralization pH Curve Simulator (R3.1.8)',
  caption:
    'Inspect neutralization pH inflection, equivalence volume, [H⁺] vs [OH⁻] stoichiometry, and strong vs weak acid starting curves.',
  simulationKind: 'titration_ph_curve',
  initialParams: {
    system: 'strong_strong',
    analyteConc: 0.1,
    pka: 4.76,
    vAdd: 25,
    indicator: 'bromothymol_blue',
  },
  presets: [
    {
      id: 'strong-eq',
      label: 'Strong Acid + Strong Base (Equivalence at pH 7.00)',
      description: 'Steep vertical jump pH ~3 to ~11 at V = 25.0 cm³.',
      params: { system: 'strong_strong', analyteConc: 0.1, pka: 4.76, vAdd: 25, indicator: 'bromothymol_blue' },
    },
    {
      id: 'strong-excess-acid',
      label: 'Before Equivalence (10.0 cm³ NaOH added)',
      description: 'Excess H⁺ remains; compute new concentration over total volume 35.0 cm³.',
      params: { system: 'strong_strong', analyteConc: 0.1, pka: 4.76, vAdd: 10, indicator: 'methyl_orange' },
    },
    {
      id: 'weak-vs-strong',
      label: 'Qualitative Contrast: Weak CH₃COOH Curve',
      description: 'Higher starting pH (~2.88) and narrower inflection (>7 at equivalence).',
      params: { system: 'weak_strong', analyteConc: 0.1, pka: 4.76, vAdd: 25, indicator: 'phenolphthalein' },
    },
  ],
  formulaLatex: '\\text{pH} = -\\log_{10}[\\text{H}^+],\\quad K_w = [\\text{H}^+][\\text{OH}^-] = 1.00 \\times 10^{-14}\\text{ at }298\\text{ K}',
  examTakeaways: [
    'Every 1-unit decrease in pH multiplies [H⁺] by 10 (logarithmic scale).',
    'At 298 K, [H⁺] = [OH⁻] = 1.00 × 10⁻⁷ mol dm⁻³ defines neutrality (pH 7.00); above 298 K, endothermic water auto-ionization increases Kw so neutral water has pH < 7 while still having [H⁺] = [OH⁻]!',
    'Strong acid + strong base equivalence is exactly pH 7.00 with a wide steep inflection allowing bromothymol blue, phenolphthalein, or methyl orange.',
  ],
};

// R3.1 — Strong vs Weak Acids & Bases Experimental Matrix
export const CHEM_V3_ACID_BASE_STRENGTH_MATRIX: PlayableDiagramSpec = {
  type: 'comparison_matrix',
  id: 'chem-v3-acid-base-strength-matrix',
  title: 'Strong vs Weak Acids & Bases Differentiation Matrix (R3.1.6)',
  caption: 'Compare equimolar (0.10 mol dm⁻³) solutions experimentally. NEVER confuse "strong vs weak" (extent of ionization) with "concentrated vs dilute" (mol dm⁻³)!',
  columns: ['Diagnostic Property (Equimolar 0.10 M)', 'Strong Acid (HCl, HNO₃, H₂SO₄)', 'Weak Acid (CH₃COOH, H₂CO₃)', 'Strong vs Weak Bases (NaOH vs NH₃)'],
  rows: [
    {
      criterion: 'Ionization in Water',
      cells: [
        'Complete dissociation (→ single arrow): HCl → H⁺ + Cl⁻',
        'Partial equilibrium ionization (⇌ double arrow): CH₃COOH ⇌ CH₃COO⁻ + H⁺',
        'NaOH → Na⁺ + OH⁻ (complete); NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ (partial)',
      ],
      ibExamTip: 'Always use the reversible arrow ⇌ when writing equations for weak acids and weak bases!',
    },
    {
      criterion: 'pH at 0.10 mol dm⁻³ (298 K)',
      cells: [
        'pH = 1.00 (monoprotic HCl/HNO₃); H₂SO₄ slightly lower',
        'Higher pH (~2.9 for 0.10 M CH₃COOH)',
        '0.10 M NaOH: pH = 13.00 vs 0.10 M NH₃(aq): pH ~11.1',
      ],
    },
    {
      criterion: 'Electrical Conductivity',
      cells: [
        'High (high concentration of mobile H⁺ and Cl⁻ ions)',
        'Low (mostly un-ionized molecular CH₃COOH)',
        'High for NaOH vs low for NH₃(aq)',
      ],
    },
    {
      criterion: 'Rate with Mg Ribbon / CaCO₃',
      cells: [
        'Vigorous effervescence (high [H⁺] yields fast collisions)',
        'Slow, steady effervescence (though SAME total H₂/CO₂ moles produced if excess reagent!)',
        'N/A for bases; check enthalpy of neutralization: strong ~−57 kJ mol⁻¹ vs weak slightly less exothermic',
      ],
    },
  ],
};

// R3.1 — pH, Kw, Dilution & Acid–Base Neutralization Worked Example
export const CHEM_V3_PH_KW_TITRATION_WORKED: PlayableDiagramSpec = {
  type: 'worked_example',
  id: 'chem-v3-ph-kw-titration-worked',
  title: 'Worked Example: pH, Kw = 1.00×10⁻¹⁴, 10× Dilution & H₂SO₄ Titration (R3.1)',
  caption: 'Calculate pH of strong acids and bases using Kw, predict pH dilution shifts, and perform 1:2 neutralization stoichiometry (Bylikin pp. 468 & 546).',
  sourceLabel: 'Bylikin Oxford 2023 pp. 468 & 546',
  commandTerm: 'Calculate',
  marks: 5,
  problemMarkdown:
    '(a) **Calculate** the pH of (i) $0.100\\text{ mol dm}^{-3}$ HCl at $298\\text{ K}$, (ii) the same HCl diluted 100-fold, and (iii) $0.0500\\text{ mol dm}^{-3}$ $\\text{Ba(OH)}_2(aq)$ at $298\\text{ K}$. (b) Next, $20.0\\text{ cm}^3$ of $\\text{H}_2\\text{SO}_4(aq)$ requires $14.3\\text{ cm}^3$ of $0.200\\text{ mol dm}^{-3}$ $\\text{NaOH}(aq)$ for neutralization. **Calculate** $[\\text{H}_2\\text{SO}_4]$.',
  givenData: [
    { label: 'Kw (298 K)', value: '1.00 × 10⁻¹⁴ mol² dm⁻⁶' },
    { label: 'Titration', value: 'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Solve HCl pH and 100-fold dilution pH',
      workingMarkdown:
        '(i) Strong monoprotic $\\text{HCl}$: $[\\text{H}^+] = 0.100\\text{ mol dm}^{-3} \\implies \\text{pH} = -\\log_{10}(0.100) = \\mathbf{1.00}$. (ii) $100\\times$ ($10^2$) dilution divides $[\\text{H}^+]$ by $10^2$ to $0.00100\\text{ mol dm}^{-3}$, raising pH by $+2$ units to **$\\mathbf{3.00}$**.',
      formulaLatex: '\\text{pH} = -\\log_{10}(1.00\\times 10^{-3}) = 3.00',
      markCode: 'A1 + A1',
      rationale: 'Each 10× dilution of a strong acid adds +1.0 pH unit (approaching 7, never crossing >7!).',
    },
    {
      stepNumber: 2,
      title: 'Solve diprotic strong base Ba(OH)₂ pH using Kw',
      workingMarkdown:
        '$\\text{Ba(OH)}_2 \\to \\text{Ba}^{2+} + 2\\text{OH}^-$ gives $[\\text{OH}^-] = 2 \\times 0.0500 = 0.100\\text{ mol dm}^{-3}$. Using $K_w$: $[\\text{H}^+] = \\frac{1.00\\times 10^{-14}}{0.100} = 1.00\\times 10^{-13}\\text{ mol dm}^{-3} \\implies \\text{pH} = \\mathbf{13.00}$.',
      formulaLatex: '[\\text{H}^+] = \\frac{K_w}{[\\text{OH}^-]} = 1.00 \\times 10^{-13}\\text{ mol dm}^{-3}',
      markCode: 'M1 + A1',
      rationale: 'Always account for the factor of 2 in dibasic Group 2 hydroxides like Ba(OH)₂!',
    },
    {
      stepNumber: 3,
      title: 'Solve H₂SO₄ concentration via 1:2 mole ratio',
      workingMarkdown:
        '$n(\\text{NaOH}) = 0.200 \\times 0.0143 = 2.86 \\times 10^{-3}\\text{ mol}$. Since $n(\\text{H}_2\\text{SO}_4) = \\tfrac{1}{2}n(\\text{NaOH}) = 1.43 \\times 10^{-3}\\text{ mol}$:\n$c(\\text{H}_2\\text{SO}_4) = \\frac{1.43\\times 10^{-3}}{0.0200\\text{ dm}^3} = \\mathbf{0.0715\\text{ mol dm}^{-3}}$.',
      formulaLatex: 'c(\\text{H}_2\\text{SO}_4) = \\frac{0.0143 \\times 0.200}{2 \\times 0.0200} = 0.0715\\text{ mol dm}^{-3}',
      markCode: 'A1',
      rationale: 'Missing the 1:2 stoichiometry doubles the calculated acid concentration.',
    },
  ],
  finalAnswerMarkdown: '(a) pH = **$1.00$**, diluted pH = **$3.00$**, $\\text{Ba(OH)}_2$ pH = **$13.00$**; (b) $[\\text{H}_2\\text{SO}_4] = \\mathbf{0.0715\\text{ mol dm}^{-3}}$.',
};

// R3.2 — Voltaic vs Secondary vs Electrolytic Cells Matrix (SL R3.2.5–R3.2.8)
export const CHEM_V3_VOLTAIC_ELECTROLYTIC_MATRIX: PlayableDiagramSpec = {
  type: 'comparison_matrix',
  id: 'chem-v3-voltaic-electrolytic-matrix',
  title: 'Primary Voltaic, Rechargeable Secondary & Molten Electrolytic Cells (R3.2.5–R3.2.8)',
  caption: 'AN OX / RED CAT applies universally to ALL cells, whereas electrode charge signs (+ / −) invert between spontaneous voltaic and driven electrolytic cells.',
  columns: ['Feature / Criterion', 'Primary (Voltaic) Cell', 'Secondary (Rechargeable) Cell', 'Molten Electrolytic Cell (e.g., PbBr₂(l))'],
  rows: [
    {
      criterion: 'Energy Conversion',
      cells: [
        'Spontaneous chemical redox → electrical energy (irreversible primary)',
        'Discharges as voltaic cell; recharged as electrolytic cell by external DC',
        'External electrical DC energy → non-spontaneous chemical decomposition',
      ],
    },
    {
      criterion: 'Anode Reaction & Polarity',
      cells: [
        'OXIDATION occurs here; NEGATIVE (−) electrode (releases e⁻ to wire)',
        'Negative during discharge (oxidation); positive during charging reversal',
        'OXIDATION occurs here (e.g., 2Br⁻ → Br₂ + 2e⁻); POSITIVE (+) electrode',
      ],
      ibExamTip: 'Mnemonic: AN OX (Anode = Oxidation) and RED CAT (Reduction = Cathode) NEVER change; ONLY +/− polarity flips!',
    },
    {
      criterion: 'Cathode Reaction & Polarity',
      cells: [
        'REDUCTION occurs here; POSITIVE (+) electrode (receives e⁻)',
        'Positive during discharge (reduction); e.g., lead-acid / Li-ion reversible electrodes',
        'REDUCTION occurs here (e.g., Pb²⁺ + 2e⁻ → Pb); NEGATIVE (−) electrode',
      ],
    },
    {
      criterion: 'Ion Conduction Medium',
      cells: [
        'Two separated half-cells linked by a salt bridge (KNO₃/KCl ions migrate to balance charge)',
        'Internal electrolyte / separator between anode & cathode',
        'Single vessel containing molten ionic liquid (mobile cations → cathode, anions → anode)',
      ],
    },
  ],
};

// R3.2 — Acidic Half-Equation Balancing & Organic Alcohol Oxidation Steps
export const CHEM_V3_HALF_EQUATION_OXIDATION_STEPS: PlayableDiagramSpec = {
  type: 'step_mechanism',
  id: 'chem-v3-half-equation-oxidation-steps',
  title: 'Acidic Half-Equation Balancing & Selective Alcohol Oxidation (R3.2.2 & R3.2.9)',
  caption: 'Balance Cr₂O₇²⁻ + Fe²⁺ in acid (Bylikin p. 588) and control primary alcohol oxidation via distillation vs reflux.',
  palette: 'scientific',
  nodes: [
    { id: 'h1', x: 95, y: 190, label: '1. Balance Main Atom', sublabel: 'Cr₂O₇²⁻ → 2Cr³⁺', group: 'Half-Eq' },
    { id: 'h2', x: 265, y: 190, label: '2. O via H₂O; H via H⁺', sublabel: '+7H₂O and +14H⁺', group: 'Half-Eq' },
    { id: 'h3', x: 445, y: 190, label: '3. Charge via e⁻ & Sum', sublabel: '+6e⁻; match 6Fe²⁺', group: 'Half-Eq' },
    { id: 'h4', x: 645, y: 190, label: '4. Alcohol Distillation vs Reflux', sublabel: '1° → Aldehyde vs Acid', group: 'Organic Redox' },
  ],
  edges: [
    { id: 'eh12', from: 'h1', to: 'h2', label: 'Balance O then H' },
    { id: 'eh23', from: 'h2', to: 'h3', label: 'Cancel 6e⁻' },
    { id: 'eh34', from: 'h3', to: 'h4', label: 'Orange Cr(VI) → Green Cr(III)' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Balance Non-O/H Atoms First in Each Half-Equation',
      descriptionMarkdown: 'In $\\text{Cr}_2\\text{O}_7^{2-} \\to \\text{Cr}^{3+}$, balance chromium first: $\\text{Cr}_2\\text{O}_7^{2-} \\to \\mathbf{2}\\text{Cr}^{3+}$. Meanwhile $\\text{Fe}^{2+} \\to \\text{Fe}^{3+} + \\text{e}^-$.',
      activeNodeIds: ['h1'],
      activeEdgeIds: [],
      metrics: [{ label: 'Cr OS change', value: '+6 → +3 (reduced)' }, { label: 'Fe OS change', value: '+2 → +3 (oxidized)' }],
    },
    {
      stepNumber: 2,
      title: 'Add H₂O for Oxygen, then H⁺ for Hydrogen (Acidic Solution)',
      descriptionMarkdown: '$7\\text{ O}$ on left needs $+7\\text{H}_2\\text{O}$ on right, then $+14\\text{H}^+$ on left: $\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ \\to 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$.',
      formulaLatex: '\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6\\text{e}^- \\rightarrow 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}',
      activeNodeIds: ['h2'],
      activeEdgeIds: ['eh12'],
      metrics: [{ label: 'LHS Charge (before e⁻)', value: '+12' }, { label: 'RHS Charge', value: '+6' }],
    },
    {
      stepNumber: 3,
      title: 'Add 6e⁻, Equalize Electrons, and Sum',
      descriptionMarkdown: 'Multiply oxidation half-equation by 6 to cancel $6\\text{e}^-$: **$\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6\\text{Fe}^{2+} \\to 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O} + 6\\text{Fe}^{3+}$**.',
      formulaLatex: '\\text{Cr}_2\\text{O}_7^{2-}(aq) + 14\\text{H}^+(aq) + 6\\text{Fe}^{2+}(aq) \\rightarrow 2\\text{Cr}^{3+}(aq) + 7\\text{H}_2\\text{O}(l) + 6\\text{Fe}^{3+}(aq)',
      activeNodeIds: ['h3'],
      activeEdgeIds: ['eh23'],
      metrics: [{ label: 'Net Charge Check', value: '+24 on both sides' }],
    },
    {
      stepNumber: 4,
      title: 'Apply Acidified K₂Cr₂O₇ (Orange → Green) to Organic Alcohols',
      descriptionMarkdown:
        '**Distillation (excess 1° alcohol, immediate removal)** stops at the volatile **aldehyde** ($\\text{RCH}_2\\text{OH} + [\\text{O}] \\to \\text{RCHO} + \\text{H}_2\\text{O}$). **Reflux (excess $\\text{H}^+/\\text{Cr}_2\\text{O}_7^{2-}$)** oxidizes fully to the **carboxylic acid** ($\\text{RCOOH}$). Secondary alcohols oxidize to **ketones**; tertiary alcohols do not react ($\\text{K}_2\\text{Cr}_2\\text{O}_7$ stays orange). Reduction reverses carbonyls using $\\text{NaBH}_4$ or $\\text{LiAlH}_4$ (or $\\text{H}_2/\\text{Ni}$ across $\\text{C=C}$).',
      formulaLatex: '1^\\circ\\text{ alcohol } \\xrightarrow{\\text{distill}} \\text{ aldehyde } \\xrightarrow{\\text{reflux}} \\text{ carboxylic acid}',
      activeNodeIds: ['h4'],
      activeEdgeIds: ['eh34'],
      metrics: [{ label: 'MnO₄⁻/H⁺', value: 'Purple → Colourless' }, { label: 'Cr₂O₇²⁻/H⁺', value: 'Orange → Green' }],
    },
  ],
};

// R3.3–R3.4 — Homolytic Radical vs Heterolytic Organic Mechanisms Explorer (SL ONLY)
export const CHEM_V3_ORGANIC_MECHANISMS_EXPLORER: PlayableDiagramSpec = {
  type: 'labeled_explorer',
  id: 'chem-v3-organic-mechanisms-explorer',
  title: 'SL Organic Mechanisms Explorer: Homolytic Radicals (R3.3) vs Heterolytic Ions (R3.4)',
  caption:
    'Contrast UV free-radical substitution (homolytic fission, half-headed arrows) against heterolytic nucleophilic substitution on halogenoalkanes and electrophilic addition to alkenes.',
  viewBox: '0 0 800 440',
  palette: 'scientific',
  shapes: [
    { kind: 'rect', x: 24, y: 24, width: 752, height: 392, rx: 16, fill: '#F8FAFC', stroke: '#CBD5E1', strokeWidth: 1.5 },
    { kind: 'text', x: 400, y: 52, text: 'Reactivity 3.3 & 3.4 (SL): Electron-Sharing Radicals vs Electron-Pair Nucleophiles/Electrophiles', fontSize: 14, fontWeight: 700, textAnchor: 'middle', fill: '#0F172A' },
    // Left: R3.3 Free Radical Substitution
    { kind: 'rect', x: 44, y: 76, width: 344, height: 316, rx: 12, fill: '#FEF3C7', stroke: '#F59E0B', strokeWidth: 1.5, hotspotId: 'radical' },
    { kind: 'text', x: 216, y: 100, text: 'R3.3 Homolytic Fission & Radicals (UV Light)', fontSize: 12, fontWeight: 700, textAnchor: 'middle', fill: '#92400E' },
    { kind: 'text', x: 64, y: 132, text: '1. Initiation:  Cl–Cl  —(UV)→  2 Cl•', fontSize: 12, fontWeight: 700, fill: '#B45309' },
    { kind: 'text', x: 64, y: 152, text: '   (Homolytic split: 1 e⁻ to each Cl; fishhook arrow)', fontSize: 10, fill: '#78350F' },
    { kind: 'text', x: 64, y: 186, text: '2. Propagation: (chain sustained, 1 radical each side)', fontSize: 12, fontWeight: 700, fill: '#B45309' },
    { kind: 'text', x: 64, y: 206, text: '   CH₄ + Cl• → •CH₃ + HCl', fontSize: 11, fill: '#78350F' },
    { kind: 'text', x: 64, y: 224, text: '   •CH₃ + Cl₂ → CH₃Cl + Cl•', fontSize: 11, fill: '#78350F' },
    { kind: 'text', x: 64, y: 258, text: '3. Termination: (2 radicals couple → mixture incl. C₂H₆)', fontSize: 12, fontWeight: 700, fill: '#B45309' },
    { kind: 'text', x: 64, y: 278, text: '   •CH₃ + •CH₃ → C₂H₆  |  Cl• + •CH₃ → CH₃Cl', fontSize: 11, fill: '#78350F' },
    { kind: 'text', x: 64, y: 318, text: 'Note: CFCs release Cl• in stratosphere (ozone depletion)', fontSize: 10, fontWeight: 600, fill: '#92400E' },
    { kind: 'text', x: 64, y: 342, text: 'Low yield of single product due to further Cl₂ substitution', fontSize: 10, fill: '#78350F' },
    // Right top: Nucleophilic Substitution R3.4.1–3
    { kind: 'rect', x: 408, y: 76, width: 348, height: 150, rx: 12, fill: '#EFF6FF', stroke: '#3B82F6', strokeWidth: 1.5, hotspotId: 'nucleophile' },
    { kind: 'text', x: 582, y: 100, text: 'R3.4.1–3 Nucleophilic Substitution (Heterolytic)', fontSize: 12, fontWeight: 700, textAnchor: 'middle', fill: '#1E3A8A' },
    { kind: 'text', x: 426, y: 130, text: '• Nucleophile (lone pair, δ⁻/⁻): HO⁻, CN⁻, NH₃, H₂O', fontSize: 11, fill: '#1E40AF' },
    { kind: 'text', x: 426, y: 154, text: '• Attacks δ⁺ carbon of R–Br; Br⁻ leaves via heterolytic', fontSize: 11, fill: '#334155' },
    { kind: 'text', x: 426, y: 174, text: '  fission (BOTH electrons move to Br — full curly arrow)', fontSize: 11, fill: '#334155' },
    { kind: 'text', x: 426, y: 202, text: '• CH₃CH₂Br + OH⁻ → CH₃CH₂OH + Br⁻', fontSize: 11, fontWeight: 700, fill: '#1D4ED8' },
    // Right bottom: Electrophilic Addition R3.4.4–5
    { kind: 'rect', x: 408, y: 242, width: 348, height: 150, rx: 12, fill: '#ECFDF5', stroke: '#10B981', strokeWidth: 1.5, hotspotId: 'electrophile' },
    { kind: 'text', x: 582, y: 266, text: 'R3.4.4–5 Electrophilic Addition to Alkenes', fontSize: 12, fontWeight: 700, textAnchor: 'middle', fill: '#065F46' },
    { kind: 'text', x: 426, y: 296, text: '• High e⁻ density C=C attracts e⁻-deficient electrophiles', fontSize: 11, fill: '#064E3B' },
    { kind: 'text', x: 426, y: 318, text: '• Electrophiles: Br₂ (induced dipole), HBr, H₂SO₄/H₂O', fontSize: 11, fill: '#334155' },
    { kind: 'text', x: 426, y: 342, text: '• C₂H₄ + Br₂ → CH₂BrCH₂Br (1,2-dibromoethane)', fontSize: 11, fontWeight: 700, fill: '#047857' },
    { kind: 'text', x: 426, y: 368, text: '• Bromine water test: orange-brown → COLOURLESS instantly', fontSize: 11, fontWeight: 700, fill: '#065F46' },
  ],
  hotspots: [
    {
      id: 'radical',
      x: 216,
      y: 230,
      label: 'Free-Radical Substitution of Alkanes (R3.3)',
      category: 'Homolytic Fission',
      examKeyword: 'unpaired electron, UV photochemical homolytic fission',
      detailMarkdown: 'Alkanes lack polarity and only react with halogens under **UV light** (photochemical homolytic fission). Always include the dot $\\bullet$ on unpaired-electron radicals ($\\text{Cl}\\bullet$, $\\bullet\\text{CH}_3$), and explain why **trace ethane ($\\text{C}_2\\text{H}_6$) forms in termination**!',
    },
    {
      id: 'nucleophile',
      x: 582,
      y: 150,
      label: 'Nucleophilic Substitution of Halogenoalkanes (R3.4.1–3)',
      category: 'Heterolytic Fission',
      examKeyword: 'electron-pair donor attacking electron-deficient carbon',
      detailMarkdown: 'A **nucleophile** donates an electron pair to an electrophilic $\\delta^+$ carbon bonded to a more electronegative halogen ($\\text{C}^{\\delta+}-\\text{Br}^{\\delta-}$), expelling $\\text{Br}^-$ via **heterolytic fission** (both bonding electrons go to one atom). Note: $\\text{(CH}_3)_4\\text{N}^+$ is NOT a nucleophile because it lacks a lone pair!',
    },
    {
      id: 'electrophile',
      x: 582,
      y: 316,
      label: 'Electrophilic Addition & Bromine Unsaturation Test (R3.4.4–5)',
      category: 'Alkene Addition',
      examKeyword: 'electron-pair acceptor + decolourizes bromine water',
      detailMarkdown: 'The electron-rich $\\text{C}=\\text{C}$ double bond induces polarization in approaching $\\text{Br}_2$ and opens to form a saturated addition product (100% atom economy). Unlike alkanes (which need UV light to slowly bleach $\\text{Br}_2$), alkenes decolourize $\\text{Br}_2(aq)$ **immediately in the dark**.',
    },
  ],
};

export const CHEMISTRY_SL_DIAGRAMS_V3: PlayableDiagramSpec[] = [
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
  CHEM_V3_PERIODICITY_SIM,
  CHEM_V3_PERIOD3_OXIDES_MATRIX,
  CHEM_V3_OXIDATION_STATES_WORKED,
  CHEM_V3_ORGANIC_FORMULAS_EXPLORER,
  CHEM_V3_IUPAC_NAMING_STEPS,
  CHEM_V3_ISOMERISM_SL_MATRIX,
  CHEM_V3_ENTHALPY_PROFILE_SIM,
  CHEM_V3_CALORIMETRY_HESS_WORKED,
  CHEM_V3_FUELS_ENERGY_MATRIX,
  CHEM_V3_LE_CHATELIER_SIM,
  CHEM_V3_STOICHIOMETRY_YIELD_WORKED,
  CHEM_V3_BOLTZMANN_KINETICS_EXPLORER,
  CHEM_V3_TITRATION_PH_SIM,
  CHEM_V3_ACID_BASE_STRENGTH_MATRIX,
  CHEM_V3_PH_KW_TITRATION_WORKED,
  CHEM_V3_VOLTAIC_ELECTROLYTIC_MATRIX,
  CHEM_V3_HALF_EQUATION_OXIDATION_STEPS,
  CHEM_V3_ORGANIC_MECHANISMS_EXPLORER,
];
