import type { ClassroomSeedNote } from '../types';
import {
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
} from './diagrams';

export const CHEMISTRY_SL_NOTES_S3R: ClassroomSeedNote[] = [
  // =========================================================================
  // GUIDE 10 (S3.1) — Preserved exact title (SL ONLY)
  // =========================================================================
  {
    topicCode: 'S3.1',
    title: 'Periodic Trends: Radii, IE1 Anomalies, Pauling χ & Period 3 Oxides (S3.1)',
    summary:
      'Upgraded Bylikin S3.1.1–S3.1.6 SL textbook guide covering s/p/d/f periodic architecture, valence configuration deduction up to Z=36, effective nuclear charge vs shielding, atomic & isoelectronic ionic radii, IE1 (including Day 3.1.3 Mg→Al and P→S dips), electron affinity, electronegativity, Group 1/17 reactivity, Period 3 oxides, ocean/acid rain chemistry, and oxidation states.',
    sourceFileNames: [
      'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      'Day 1 - Classification of matter and intro to periodic trends.pdf',
      'Day 3 - 3.1.3 Trends.pdf',
      'R 3.1.3 Electronegativity.pdf',
      'chemistry-guide-en_27d9a623-d741-4646-a331-1510ce0723b4.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Bylikin Guiding Questions (S3.1, Book p. 229)',
        markdown:
          '- **S3.1:** *How does the periodic table help us to predict patterns and trends in the properties of elements?*\n- **Linking Lens:** Why does moving across Period 3 shift element oxides seamlessly from strongly basic ionic lattices ($\\text{Na}_2\\text{O}$) through amphoteric $\\text{Al}_2\\text{O}_3$ to acidic covalent molecules ($\\text{SO}_3$)?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Periodic Architecture, Blocks & Electron-Configuration Mapping (S3.1.1–S3.1.2, Book pp. 229–232)',
      },
      {
        type: 'paragraph',
        markdown:
          'Arranged strictly in ascending **atomic number $Z$** (proton count), the modern periodic table organizes elements into $7$ horizontal **periods** and $18$ vertical **groups** (*Bylikin* Table 1, Book p. 230). Every element’s coordinates reveal its outermost quantum architecture immediately:\n\n- **Period number ($1$–$7$):** Equals the principal quantum number $n$ of the highest occupied outer electron shell.\n- **Group number ($1$–$18$):** Fixes valence electron count in main-group elements: Group $1$ (**alkali metals**, $ns^1$), Group $2$ (**alkaline earth metals**, $ns^2$), Groups $13\\text{–}18$ ($p$-block holding $1\\text{–}8$ outer electrons in $ns^2 np^{1\\text{–}6}$; Group $17$ **halogens**, Group $18$ **noble gases**), Groups $3\\text{–}12$ (**$d$-block transition elements**), and bottom lanthanoids/actinoids (**$f$-block**).\n- **Metals, Metalloids & Non-Metals:** Metals occupy the left and centre ($\\approx 80\\%$ of elements); **non-metals** sit at the upper right plus hydrogen; and a staircase band of **metalloids** ($\\text{B}, \\text{Si}, \\text{Ge}, \\text{As}, \\text{Sb}, \\text{Te}$) separates them with intermediate semiconductor properties. Up to krypton ($Z = 36$), locating e.g. selenium (Period $4$, Group $16$) yields $[\\text{Ar}]4s^2 3d^{10} 4p^4$ directly.',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'Nature of Science: Predictive Power of Mendeleev’s Periodic Law (Book p. 231)',
        markdown:
          'Dmitri Mendeleev left deliberate blank gaps in his 1869 table where atomic mass broke chemical family behaviour, predicting eka-aluminium (gallium), eka-boron (scandium), and eka-silicon (germanium) with astonishing quantitative accuracy before their discovery. Later X-ray spectroscopy by Henry Moseley proved **atomic number ($Z$)** rather than atomic mass was the true organizing parameter, resolving pairs such as $\\text{Ar}/\\text{K}$ and $\\text{Te}/\\text{I}$.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Zeff, Radii, Ionization Energy, Electron Affinity & Electronegativity (S3.1.3, Book pp. 232–237)',
      },
      {
        type: 'paragraph',
        markdown:
          'All periodic physical trends arise from the electrostatic tug-of-war between **nuclear charge ($Z$)** pulling valence electrons inward and **inner-shell shielding ($S$)** pushing outward, summarized qualitatively as **effective nuclear charge ($Z_{\\text{eff}} \\approx Z - S$)** (*Bylikin* pp. 232–237; *Day 3 - 3.1.3 Trends* & *R 3.1.3 Electronegativity*):\n\n- **Across a Period (Left $\\to$ Right):** Each successive proton adds $+1$ to nuclear charge while electrons enter the **same outer shell** ($n$ unchanged), so core shielding remains nearly constant and **$Z_{\\text{eff}}$ rises sharply**. Consequently: (1) **atomic radius shrinks** steadily ($\\text{Na } 154\\text{ pm} \\to \\text{Cl } 99\\text{ pm}$, covalent radius); (2) **first ionization energy ($IE_1$)** increases overall because outer electrons are held closer and more tightly; (3) **Pauling electronegativity ($\\chi$)** increases toward fluorine ($\\chi = 4.0$); noble gases lack electronegativity values because they rarely form stable covalent bonds.\n- **Down a Group (Top $\\to$ Bottom):** Although nuclear charge $Z$ rises, each step adds an **entire new occupied electron shell** ($n$ increases), increasing atomic distance and core electron shielding so outer valence pull drops. Therefore **atomic radius increases**, **$IE_1$ decreases**, and **electronegativity decreases** smoothly down any group.',
      },
      {
        type: 'paragraph',
        markdown:
          '**Ionic Radii & Isoelectronic Comparisons:** Always contrast ions against their neutral parent atoms using shell counts and proton–electron balance:\n\n1. **Cations ($r(\\text{M}^+) < r(\\text{M})$):** Removing valence electrons frequently empties the outermost shell entirely (e.g., $\\text{Na}$ $1s^2 2s^2 2p^6 3s^1$ $\\to$ $\\text{Na}^+$ $1s^2 2s^2 2p^6$), cutting shielding shells while excess protons pull remaining electrons sharply inward ($\\text{Na}$ $154\\text{ pm} \\to \\text{Na}^+$ $102\\text{ pm}$).\n2. **Anions ($r(\\text{X}^-) > r(\\text{X})$):** Adding electrons into the same valence shell increases electron–electron repulsion while nuclear charge $Z$ remains unchanged, expanding the cloud ($\\text{Cl}$ $99\\text{ pm} \\to \\text{Cl}^-$ $181\\text{ pm}$).\n3. **Isoelectronic $10e^-$ Series ($1s^2 2s^2 2p^6$):** Because $\\text{N}^{3-}$, $\\text{O}^{2-}$, $\\text{F}^-$, $\\text{Na}^+$, $\\text{Mg}^{2+}$, and $\\text{Al}^{3+}$ share identical $10$-electron shells, higher proton count shrinks radius dramatically across the series: $\\mathbf{r(\\text{N}^{3-}) > r(\\text{O}^{2-}) > r(\\text{F}^-) > r(\\text{Na}^+) > r(\\text{Mg}^{2+}) > r(\\text{Al}^{3+})}$. Similarly across Period 3 ions, radii fall from $\\text{Na}^+$ to $\\text{Si}^{4+}$, jump upward sharply at $\\text{P}^{3-}$ (one extra $n=3$ shell!), and fall again to $\\text{Cl}^-$.',
      },
      {
        type: 'paragraph',
        markdown:
          '**First Electron Affinity ($EA_1$):** Defined as the enthalpy change when $1\\text{ mol}$ of gaseous atoms gains $1\\text{ mol}$ of electrons ($\\text{X(g)} + e^- \\to \\text{X}^-\\text{(g)}$). For halogens and most non-metals, attraction between nucleus and incoming electron releases energy (**exothermic**, $\\Delta H < 0$, e.g., $\\text{Cl} = -349\\text{ kJ mol}^{-1}$ more exothermic than $\\text{F} = -328\\text{ kJ mol}^{-1}$ due to tight $2p$ crowding in tiny fluorine). Conversely, **second electron affinity ($EA_2$)** such as $\\text{O}^-(g) + e^- \\to \\text{O}^{2-}(g)$ is **strongly endothermic ($+753\\text{ kJ mol}^{-1}$)** because energy must overcome electrostatic repulsion between a negatively charged anion and an approaching electron.',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Classroom Day 3.1.3 Alignment: Period 2/3 IE1 Small Dips Explained Correctly',
        markdown:
          'In *Day 3 - 3.1.3 Trends*, note two fine dips interrupting the general Period 2 and Period 3 $IE_1$ rise:\n1. **Group 2 $\\to$ Group 13 ($\\text{Be}\\to\\text{B}$ and $\\text{Mg}\\to\\text{Al}$):** Removing the lone $2p^1$ or $3p^1$ electron requires less energy because the $p$-sublevel sits slightly higher in energy and experiences extra shielding from the filled $ns^2$ subshell.\n2. **Group 15 $\\to$ Group 16 ($\\text{N}\\to\\text{O}$ and $\\text{P}\\to\\text{S}$):** The fourth $p$ electron must **pair up inside an already occupied $p$ orbital**, creating **spin-pairing electron–electron repulsion** that makes removing one paired $p$ electron easier than removing an unpaired $p^3$ electron. *(Avoid vague phrases like "half-filled shell stability"—examiners credit orbital energy and electron–electron repulsion!)*',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_PERIODICITY_SIM,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Group 1 & Group 17 Reactivity, Period 3 Oxides & Oxidation States (S3.1.4–S3.1.6, Book pp. 238–245)',
      },
      {
        type: 'paragraph',
        markdown:
          '**Group 1 Alkali Metals with Water (Increasing Reactivity Downward):** All Group 1 metals react vigorously with cold water to generate alkaline hydroxides and hydrogen gas: $2\\text{M}(s) + 2\\text{H}_2\\text{O}(l) \\to 2\\text{MOH}(aq) + \\text{H}_2(g)$. Descending $\\text{Li} \\to \\text{Na} \\to \\text{K} \\to \\text{Rb}$, outer $ns^1$ electrons lie farther from the nucleus and experience greater core shielding, **lowering first ionization energy** and making valence electron loss steadily easier ($\\text{Li}$ fizzes gently, $\\text{Na}$ melts into a darting silver sphere, $\\text{K}$ ignites with a **lilac flame**).\n\n**Group 17 Halogens (Decreasing Oxidizing Reactivity Downward):** Halogens act as oxidizing agents by **gaining an electron** into their valence shell ($\\text{X}_2 + 2e^- \\to 2\\text{X}^-$). Moving down $\\text{F}_2 \\to \\text{Cl}_2 \\to \\text{Br}_2 \\to \\text{I}_2$, larger atomic radius and extra shielding weaken nuclear attraction for an incoming electron, lowering oxidizing strength. Consequently, a higher halogen displaces a heavier halide from aqueous solution (e.g., $\\text{Cl}_2(aq) + 2\\text{Br}^-(aq) \\to 2\\text{Cl}^-(aq) + \\text{Br}_2(aq)$ turning orange-brown; $\\text{Cl}_2$ or $\\text{Br}_2$ oxidizes $\\text{I}^-$ to brown $\\text{I}_2$, turning violet in cyclohexane; $\\text{I}_2$ cannot displace $\\text{Cl}^-$ or $\\text{Br}^-$).',
      },
      {
        type: 'paragraph',
        markdown:
          '**Period 3 Oxides & Environmental Acid Chemistry (S3.1.5, Book pp. 241–243):** Across Period 3, bonding in highest oxides transitions from ionic crystal lattices ($\\text{Na}_2\\text{O}, \\text{MgO}$) through intermediate amphoteric $\\text{Al}_2\\text{O}_3$ and giant covalent $\\text{SiO}_2$ to simple covalent molecules ($\\text{P}_4\\text{O}_{10}, \\text{SO}_2, \\text{SO}_3$). Simultaneously, aqueous oxide behaviour moves smoothly from **strongly basic** ($\\text{Na}_2\\text{O} + \\text{H}_2\\text{O} \\to 2\\text{NaOH}$), **weakly basic** ($\\text{MgO} + \\text{H}_2\\text{O} \\to \\text{Mg(OH)}_2$), **amphoteric insoluble** ($\\text{Al}_2\\text{O}_3$ reacting with both acids and strong alkalis), to **acidic** ($\\text{P}_4\\text{O}_{10} + 6\\text{H}_2\\text{O} \\to 4\\text{H}_3\\text{PO}_4$; $\\text{SO}_3 + \\text{H}_2\\text{O} \\to \\text{H}_2\\text{SO}_4$). Crucially, atmospheric $\\text{CO}_2$ establishes natural rainwater around $\\text{pH } 5.6$ ($\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3$), and rising anthropogenic $\\text{CO}_2$ drives **ocean acidification** (lowering carbonate availability for shells/corals), whereas industrial $\\text{SO}_2$ and $\\text{NO}_x$ produce **acid deposition** below $\\text{pH } 5.6$.',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_PERIOD3_OXIDES_MATRIX,
      },
      {
        type: 'paragraph',
        markdown:
          '**Oxidation States (S3.1.6, Book pp. 243–245):** Defined as the hypothetical integer charge an atom would carry if every polar bond in a species were $100\\%$ ionic (sign ALWAYS written **before** the numeral, e.g., $+6$, $-1$). Follow the IB assignment hierarchy: (1) uncombined elements $= 0$; (2) monatomic ions $=$ ionic charge; (3) $\\text{F}$ is always $-1$; (4) Group 1 $= +1$, Group 2 $= +2$, $\\text{Al} = +3$; (5) $\\text{H}$ is $+1$ EXCEPT $-1$ in metal hydrides ($\\text{NaH}, \\text{CaH}_2$); (6) $\\text{O}$ is $-2$ EXCEPT $-1$ in peroxides ($\\text{H}_2\\text{O}_2, \\text{Na}_2\\text{O}_2$) and $+2$ in $\\text{OF}_2$; (7) sum of oxidation states equals $0$ for neutral molecules or overall ion charge for polyatomic ions. Systematic oxyanion names pair Roman numerals with `-ate` (e.g., $\\text{NO}_3^-$ nitrate(V), $\\text{NO}_2^-$ nitrate(III), $\\text{SO}_4^{2-}$ sulfate(VI), $\\text{SO}_3^{2-}$ sulfate(IV)).',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_OXIDATION_STATES_WORKED,
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Effective Nuclear Charge (Zeff)',
            definitionMarkdown: 'Net positive nuclear attraction felt by a valence electron after accounting for inner core electron shielding ($Z_{\\text{eff}} \\approx Z - S$).',
            markschemeKeyword: 'nuclear charge minus inner shielding',
          },
          {
            term: 'First Ionization Energy (IE1)',
            definitionMarkdown: 'Minimum energy required to remove $1\\text{ mol}$ of electrons from $1\\text{ mol}$ of gaseous atoms to form $1\\text{ mol}$ of $1+$ gaseous ions: $\\text{X}(g) \\to \\text{X}^+(g) + e^-$.',
            markschemeKeyword: 'gaseous atoms / 1 mol electrons removed / +1 gaseous ions',
          },
          {
            term: 'Pauling Electronegativity (χ)',
            definitionMarkdown: 'Relative measure of the attraction of an atom in a molecule for a shared pair of bonding electrons.',
            markschemeKeyword: 'attraction for a shared pair of electrons',
          },
          {
            term: 'Amphoteric Oxide',
            definitionMarkdown: 'An oxide such as $\\text{Al}_2\\text{O}_3$ capable of reacting chemically as a base with acids AND as an acid with strong alkalis.',
            markschemeKeyword: 'reacts with both acids and bases',
          },
          {
            term: 'Oxidation State',
            definitionMarkdown: 'Apparent charge assigned to an atom supposing fully ionic bonding (written sign-first, e.g., $+5$, $-1$); zero in free elements.',
            markschemeKeyword: 'hypothetical ionic charge / sign before number',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 11 (S3.2) — BRAND-NEW Comprehensive Guide (STRICT SL: S3.2.1–S3.2.6 ONLY!)
  // =========================================================================
  {
    topicCode: 'S3.2',
    title: 'Organic Functional Groups, Homologous Series & Structural Isomerism (S3.2)',
    summary:
      'Brand-new Bylikin S3.2.1–S3.2.6 SL study guide covering carbon catenation, five formula conventions (empirical, molecular, full structural, condensed, skeletal), all twelve SL functional groups and homologous series physical trends, full IUPAC nomenclature protocol, and structural isomerism (chain, positional, functional group) plus 1°/2°/3° carbon classification.',
    sourceFileNames: [
      'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      'chemistry-guide-en_27d9a623-d741-4646-a331-1510ce0723b4.pdf',
      'RevisionDojo_IB_Chemistry_Cheatsheets_Merged.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Bylikin Guiding Question (S3.2, Book p. 256)',
        markdown:
          '- **S3.2:** *How does the classification of organic molecules help us to predict their properties?*\n- **Linking Lens:** Why does replacing one hydrogen atom in ethane with an $-\\text{OH}$ group elevate its boiling point by $167^\\circ\\text{C}$ and turn an insoluble gas into a water-miscible liquid?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Carbon Catenation & Five Organic Formula Conventions (S3.2.1, Book pp. 256–260)',
      },
      {
        type: 'paragraph',
        markdown:
          'Carbon’s extraordinary versatility stems from two covalent features: **tetravalence** (forming four strong covalent bonds, including single, double, and triple bonds) and **catenation** (carbon–carbon bonds, $346\\text{ kJ mol}^{-1}$, are strong enough to assemble stable chains, branched trees, and rings, unlike weak $\\text{Si}-\\text{Si}$ bonds $226\\text{ kJ mol}^{-1}$). As summarized in *Bylikin* Table 1 (Book p. 258), every organic molecule can be written across **five progressively compact formula formats**, each serving a specific exam command term:\n\n1. **Empirical Formula:** Simplest whole-number atomic ratio (e.g., $\\text{CH}_2\\text{O}$ for ethanoic acid $\\text{C}_2\\text{H}_4\\text{O}_2$, or $\\text{C}_2\\text{H}_5$ for butane $\\text{C}_4\\text{H}_{10}$).\n2. **Molecular Formula:** Exact count of every atom in one discrete molecule ($\\text{C}_4\\text{H}_{10}$, $\\text{C}_2\\text{H}_4\\text{O}_2$).\n3. **Full Structural (Displayed) Formula:** Explicitly depicts **every single atom and every single covalent bond**—when an IB exam says "draw the full structural formula", even $\\text{O}-\\text{H}$ and $\\text{C}-\\text{H}$ bonds MUST be drawn individually as lines.\n4. **Condensed Structural Formula:** Omits bond lines and groups hydrogens on each backbone carbon left-to-right, placing substituents/branches inside parentheses and preserving key multiple bonds where clearest: e.g., $\\text{CH}_3\\text{CH(CH}_3)\\text{CH}_2\\text{OH}$ (2-methylpropan-1-ol) or $\\text{CH}_3\\text{COOCH}_2\\text{CH}_3$ (ethyl ethanoate).\n5. **Skeletal Formula:** Represents the carbon–carbon backbone as zig-zag vertices and endpoints while **omitting carbon symbols and carbon-attached hydrogens**; every carbon implicitly carries enough $\\text{H}$ atoms to total $4$ bonds, whereas **heteroatoms ($\\text{O},\\ \\text{N},\\ \\text{Cl}$) and hydrogens attached to heteroatoms ($-\\text{OH},\\ -\\text{NH}_2, -\\text{COOH}$)** MUST be shown explicitly!',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_ORGANIC_FORMULAS_EXPLORER,
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Functional Groups & Homologous Series Property Trends (S3.2.2–S3.2.4, Book pp. 260–270)',
      },
      {
        type: 'paragraph',
        markdown:
          'A **functional group** is the specific atom or reactive group of atoms within a molecule that dictates its characteristic chemical reactions and strongly shapes physical constants (*Bylikin* Table 2, Book p. 261). A **homologous series** is a family of organic compounds sharing the same functional group and general formula in which **each successive member differs by one methylene unit ($-\\text{CH}_2-$, $+14.03\\text{ g mol}^{-1}$)**:\n\n| Class / Homologous Series | General Formula | Functional Group Name & Motif | Classic First/Representative Member |\n| :--- | :--- | :--- | :--- |\n| **Alkanes** (saturated) | $\\text{C}_n\\text{H}_{2n+2}$ | No functional group (only $\\text{C}-\\text{C}$ / $\\text{C}-\\text{H}$) | Methane ($\\text{CH}_4$), Propane ($\\text{C}_3\\text{H}_8$) |\n| **Alkenes** (unsaturated) | $\\text{C}_n\\text{H}_{2n}$ | Alkenyl ($\\text{C}=\\text{C}$ double bond) | Ethene ($\\text{CH}_2=\\text{CH}_2$) |\n| **Alkynes** (unsaturated) | $\\text{C}_n\\text{H}_{2n-2}$ | Alkynyl ($\\text{C}\\equiv\\text{C}$ triple bond) | Ethyne ($\\text{HC}\\equiv\\text{CH}$) |\n| **Halogenoalkanes** | $\\text{C}_n\\text{H}_{2n+1}\\text{X}$ | Halo ($-\\text{F}, -\\text{Cl}, -\\text{Br}, -\\text{I}$) | Chloroethane ($\\text{CH}_3\\text{CH}_2\\text{Cl}$) |\n| **Alcohols** | $\\text{C}_n\\text{H}_{2n+1}\\text{OH}$ | **Hydroxyl** ($-\\text{OH}$) | Ethanol ($\\text{CH}_3\\text{CH}_2\\text{OH}$) |\n| **Ethers** | $\\text{R}-\\text{O}-\\text{R}\'$ | **Ether** (alkoxy linkage $-\\text{O}-$) | Methoxymethane ($\\text{CH}_3\\text{OCH}_3$) |\n| **Aldehydes** | $\\text{RCHO}$ | **Carbonyl** (terminal $-\\text{CHO}$) | Propanal ($\\text{CH}_3\\text{CH}_2\\text{CHO}$) |\n| **Ketones** | $\\text{RCOR}\'$ | **Carbonyl** (internal $\\text{C}-\\text{CO}-\\text{C}$) | Propanone ($\\text{CH}_3\\text{COCH}_3$) |\n| **Carboxylic Acids** | $\\text{RCOOH}$ | **Carboxyl** ($-\\text{COOH}$) | Ethanoic acid ($\\text{CH}_3\\text{COOH}$) |\n| **Esters** | $\\text{RCOOR}\'$ | **Ester** linkage ($-\\text{COO}-$) | Methyl ethanoate ($\\text{CH}_3\\text{COOCH}_3$) |\n| **Amines / Amides / Nitriles** | $\\text{RNH}_2$ / $\\text{RCONH}_2$ / $\\text{RCN}$ | Amino ($-\\text{NH}_2$), Carboxamide, Nitrile ($-\\text{C}\\equiv\\text{N}$) | Ethanamine, Ethanamide, Ethanenitrile |\n| **Arenes** | $\\text{Ar}-\\text{R}$ | **Phenyl** group ($-\\text{C}_6\\text{H}_5$ benzene ring) | Methylbenzene ($\\text{C}_6\\text{H}_5\\text{CH}_3$) |',
      },
      {
        type: 'paragraph',
        markdown:
          '**Physical Property Gradients Across Homologous Series (S3.2.4, Book pp. 268–270):** Within any homologous series, members display uniform chemical reactivity yet show smooth **gradations in boiling point, melting point, viscosity, and solubility**. Each additional $-\\text{CH}_2-$ increment adds $8$ more electrons, strengthening **London dispersion forces** so boiling points climb steadily—steeply among $C_1\\text{–}C_4$ gases/volatile liquids and tapering off asymptotically at longer chains (because incremental mass adds a progressively smaller fractional boost to LDFs). Compare across families at matched molar mass ($M_r \\approx 58\\text{–}60\\text{ g mol}^{-1}$): non-polar **butane** ($-0.5^\\circ\\text{C}$, LDFs only) $<$ polar **propanone** ($56^\\circ\\text{C}$, dipole–dipole) $<$ H-bonding **propan-1-ol** ($97^\\circ\\text{C}$, 1 H-bond site) $<$ **ethanoic acid** ($118^\\circ\\text{C}$, strongly H-bonded carboxylic dimers!). Similarly, methanol through propan-1-ol dissolve freely in water via hydrogen bonding, whereas octan-1-ol is largely insoluble as its hydrophobic alkyl chain dominates.',
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Complete SL IUPAC Nomenclature Rules & Structural Isomerism (S3.2.5–S3.2.6, Book pp. 271–283)',
      },
      {
        type: 'paragraph',
        markdown:
          'Every systematic IUPAC name uniquely encodes molecular topology without ambiguity (*Bylikin* Tables 8–10, Book pp. 272–278). Memorize root stems ($1$ **meth-**, $2$ **eth-**, $3$ **prop-**, $4$ **but-**, $5$ **pent-**, $6$ **hex-**, $7$ **hept-**, $8$ **oct-**) and number chains strictly from the end nearest the **highest-priority principal functional group**: carboxylic acid (`-oic acid`, always C1) $>$ ester (`alkyl ...-oate`) $>$ aldehyde (`-al`, always C1) $>$ ketone (`-one`) $>$ alcohol (`-ol`) $>$ alkene/alkyne (`-ene`/`-yne`) $>$ halogeno/alkyl prefixes. Notice the classic IB naming pitfalls: **esters** take the `alkyl` prefix from the **alcohol single-bonded oxygen side** and the `-oate` stem from the **acid carbonyl side** (so $\\text{HCOOCH}_2\\text{CH}_3$ is **ethyl methanoate**, whereas $\\text{CH}_3\\text{COOCH}_3$ is **methyl ethanoate**!). Ignore multiplicative prefixes (`di-`, `tri-`, `tetra-`) when alphabetizing substituent prefixes: `3-ethyl-2,2-dimethylpentane` puts **e**thyl before **m**ethyl.',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_IUPAC_NAMING_STEPS,
      },
      {
        type: 'paragraph',
        markdown:
          '**Structural Isomers (S3.2.6, Book pp. 279–283):** Structural isomers possess **identical molecular formulas** yet **different atom-to-atom connectivity** (distinct structural formulas). IB SL classifies them into three subcategories (*Bylikin* Worked Ex. 11 & C₄H₉F example, p. 280):\n\n1. **Chain (Skeletal) Isomers:** Differ in branching of the carbon chain (e.g., $\\text{C}_4\\text{H}_{10}$ forms linear **butane** and branched **methylpropane**; $\\text{C}_5\\text{H}_{12}$ forms three chain isomers whose boiling points drop sharply with branching due to smaller surface contact and weaker LDFs).\n2. **Positional Isomers:** Keep the identical carbon backbone and identical functional group while moving the functional group or unsaturation to a different carbon locant (e.g., **propan-1-ol** vs **propan-2-ol**; **1-bromobutane** vs **2-bromobutane**; **but-1-ene** vs **but-2-ene**).\n3. **Functional Group Isomers:** Rearrange identical atoms into **different functional groups** with radically different boiling points and chemical tests—three mandatory IB pairs are **alcohols vs ethers** ($\\text{C}_2\\text{H}_6\\text{O}$: ethanol vs methoxymethane), **aldehydes vs ketones** ($\\text{C}_3\\text{H}_6\\text{O}$: propanal vs propanone), and **carboxylic acids vs esters** ($\\text{C}_3\\text{H}_6\\text{O}_2$: propanoic acid vs methyl ethanoate / ethyl methanoate), plus **alkenes vs cycloalkanes** ($\\text{C}_4\\text{H}_8$).\n\nFinally, classify **alcohols and halogenoalkanes** as **primary ($1^\\circ$)**, **secondary ($2^\\circ$)**, or **tertiary ($3^\\circ$)** by counting how many **carbon atoms (alkyl groups)** attach directly to the carbon bearing $-\\text{OH}$ or $-\\text{X}$: e.g., propan-1-ol ($1^\\circ$), propan-2-ol ($2^\\circ$), and 2-methylpropan-2-ol ($3^\\circ$). *(By contrast, amine classification counts carbon groups attached directly to the nitrogen atom: $1^\\circ\\ \\text{RNH}_2$, $2^\\circ\\ \\text{R}_2\\text{NH}$, $3^\\circ\\ \\text{R}_3\\text{N}$!)*',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Strict SL Scope Note & Cyclic / Bent Chain Traps',
        markdown:
          '- **Strict SL Scope:** S3.2 SL covers **structural isomerism only** (`S3.2.1–S3.2.6`). Cis/trans ($E/Z$) stereoisomerism, enantiomers, mass-spec organic fragmentation, IR spectroscopy, and $^1\\text{H}$ NMR belong to Higher Level.\n- **Rotated-Bend Illusion:** Bending a horizontal zig-zag into an L-shape or flipping left-to-right does NOT create a new isomer! Always generate systematic **IUPAC names**—two drawings with the exact same IUPAC name are identical molecules, not isomers!',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_ISOMERISM_SL_MATRIX,
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Stepwise Structural Isomer Enumeration Walkthrough: C₄H₉F & Functional Pairs (S3.2.6)',
      },
      {
        type: 'paragraph',
        markdown:
          'When an IB Paper 2 prompt asks you to *"draw and name all structural isomers"* of a formula such as $\\text{C}_4\\text{H}_9\\text{F}$ (*Bylikin* Worked Ex., Book p. 280), follow a systematic **backbone-first enumeration strategy** so zero isomers are missed and zero duplicates counted twice:\n\n1. **Start with the unbranched $4$-carbon backbone (butane skeleton):** Place the substituent at every non-equivalent position from one end toward symmetry: **1-fluorobutane** ($\\text{CH}_2\\text{FCH}_2\\text{CH}_2\\text{CH}_3$, $1^\\circ$ halogenoalkane) and **2-fluorobutane** ($\\text{CH}_3\\text{CHFCH}_2\\text{CH}_3$, $2^\\circ$ halogenoalkane). Putting fluorine on C3 simply rotates 2-fluorobutane $180^\\circ$!\n2. **Shorten to a branched $3$-carbon propane skeleton (2-methylpropane):** Place fluorine at the two distinct carbons: **1-fluoro-2-methylpropane** ($\\text{CH}_2\\text{FCH(CH}_3)_2$, $1^\\circ$) and **2-fluoro-2-methylpropane** ($\\text{(CH}_3)_3\\text{CF}$, $3^\\circ$ halogenoalkane). Total = **4 structural isomers**!\n\nEqually test yourself on **amine functional group classification** (*Bylikin* Table 6, Book p. 266): count alkyl/aryl carbon substituents attached **directly to nitrogen**—ethanamine ($\\text{CH}_3\\text{CH}_2\\text{NH}_2$) is a **primary ($1^\\circ$) amine**, N-methylethanamine ($\\text{CH}_3\\text{CH}_2\\text{NHCH}_3$) is **secondary ($2^\\circ$)**, and trimethylamine ($\\text{(CH}_3)_3\\text{N}$) is **tertiary ($3^\\circ$)**! Notice that $\\text{N}-\\text{H}$ hydrogens in $1^\\circ$ and $2^\\circ$ amines support hydrogen bonding (higher boiling points), whereas tertiary amines lack $\\text{N}-\\text{H}$ bonds and cannot form H-bonds with each other.',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'TOK & Language Precision: Everyday vs Chemical Meaning of "Organic" (Book p. 262)',
        markdown:
          'In everyday marketing, "organic", "natural", and "chemical-free" imply pesticide-free farming; in chemistry, **all organic compounds** (whether vitamin C extracted from oranges or synthesized identically in a laboratory reactor) share identical molecular structure, chemical properties, and thermodynamic constants.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Functional Group',
            definitionMarkdown: 'Specific atom or group of atoms within a molecule responsible for its characteristic chemical reactivity (e.g., hydroxyl $-\\text{OH}$, carboxyl $-\\text{COOH}$).',
            markschemeKeyword: 'reactive group determining chemical properties',
          },
          {
            term: 'Homologous Series',
            definitionMarkdown: 'Family of organic compounds sharing the same general formula and functional group, where successive members differ by $-\\text{CH}_2-$.',
            markschemeKeyword: 'same general formula / differ by CH₂',
          },
          {
            term: 'Structural Isomers',
            definitionMarkdown: 'Compounds sharing identical molecular formulas but differing structural formulas (atom connectivity), subdivided into chain, positional, and functional group isomers.',
            markschemeKeyword: 'same molecular formula / different structural formula',
          },
          {
            term: 'Skeletal Formula',
            definitionMarkdown: 'Simplified organic diagram showing carbon–carbon bond zig-zags where vertices denote C atoms and C–H hydrogens are implied while heteroatoms and their H atoms stay explicit.',
            markschemeKeyword: 'vertices = C / C-H omitted / heteroatom H shown',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 12 (R1.1–R1.3) — BRAND-NEW Comprehensive Guide (STRICT SL: NO R1.4!)
  // =========================================================================
  {
    topicCode: 'R1.1',
    title: 'Enthalpy Changes, Calorimetry, Hess’s Law & Energy from Fuels (R1.1–R1.3)',
    summary:
      'Brand-new Bylikin R1.1–R1.3 SL thermochemistry guide (strictly excluding HL R1.4 entropy/Gibbs) covering system vs surroundings, exo/endothermic energy profiles, calorimetry q = mcΔT with cooling-curve extrapolation, average bond enthalpies, Hess’s Law ΔHf°/ΔHc° cycles, combustion analysis of fuels, biofuels, and H₂/methanol fuel cells.',
    sourceFileNames: [
      'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      'chemistry-guide-en_27d9a623-d741-4646-a331-1510ce0723b4.pdf',
      'RevisionDojo_IB_Chemistry_Cheatsheets_Merged.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Bylikin Guiding Questions (R1.1 Book p. 387, R1.2 p. 404, R1.3 p. 424)',
        markdown:
          '- **R1.1:** *What can be deduced from the temperature change that accompanies chemical or physical change?*\n- **R1.2:** *How does application of the law of conservation of energy help us to predict energy changes during reactions?*\n- **R1.3:** *What are the challenges of using chemical energy to address our energy needs?*',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. System vs Surroundings, Reaction Profiles & Calorimetry (R1.1, Book pp. 387–403)',
      },
      {
        type: 'paragraph',
        markdown:
          'Every chemical reaction partitions the universe into the **system** (reacting molecules and products) and the **surroundings** (solvent water, calorimeter vessel, thermometer, air). By the first law of thermodynamics, total energy is conserved: thermal energy transferred at constant pressure defines the **enthalpy change $\\Delta H = H_{\\text{products}} - H_{\\text{reactants}}$** (*Bylikin* pp. 388–392):\n\n- **Exothermic Reactions ($\\Delta H < 0$):** Products have **lower enthalpy (greater energetic stability, stronger overall bonds)** than reactants, so chemical potential energy converts to heat transferred **from system to surroundings**, causing calorimeter temperature to **rise** ($\\Delta T > 0$). Examples: combustion, acid–base neutralization, metal-acid displacement.\n- **Endothermic Reactions ($\\Delta H > 0$):** Products occupy **higher enthalpy (less energetically stable)** than reactants, absorbing thermal energy **from surroundings into the system**, causing temperature to **drop** ($\\Delta T < 0$). Examples: thermal decomposition of $\\ce{CaCO3}$, dissolving $\\ce{NH4NO3}$.\n- **Standard State ($\\Delta H^\\circ$):** Measured at **$100\\text{ kPa}$ pressure** (all solutions at $1.0\\text{ mol dm}^{-3}$, pure solids/liquids/gases in their **most stable physical form at $298\\text{ K}$**—e.g., $\\text{C}(\\text{graphite})$, $\\text{H}_2\\text{O}(l)$, $\\text{Br}_2(l)$, $\\text{I}_2(s)$).',
      },
      {
        type: 'equation',
        latex: 'q = m c \\Delta T \\qquad \\text{and} \\qquad \\Delta H = -\\frac{q}{n_{\\text{limiting}}}\\;(\\text{in kJ mol}^{-1})',
        caption: 'Calorimetry heat transfer and molar enthalpy calculation (R1.1.4, Book pp. 394–399).',
        variableLegend: [
          { symbol: 'm', meaning: 'Mass of solution or water heated in g (assuming 1.00 g cm⁻³ for dilute aqueous solutions)—NEVER solute/fuel mass!' },
          { symbol: 'c', meaning: 'Specific heat capacity of water = 4.18 J g⁻¹ K⁻¹ (4.18 kJ kg⁻¹ K⁻¹)' },
          { symbol: '\\Delta T', meaning: 'Extrapolated temperature change Tf − Ti in K or °C (negative for endothermic)' },
          { symbol: 'n_{\\text{limiting}}', meaning: 'Moles of the limiting reagent reacted (or fuel burnt)' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          '**Coffee-Cup vs Spirit-Burner Calorimetry & Cooling-Curve Correction:** When mixing reactants in an insulated polystyrene cup, reaction takes finite time during which heat leaks gradually to the room. Rather than picking the raw peak reading, IB Lab INFO & *Bylikin* require recording baseline temperature ($t = 0\\text{–}3\\text{ min}$), mixing at $t_0$, logging cooling temperatures ($t = 4\\text{–}10\\text{ min}$), and **extrapolating the linear cooling line backward to $t_0$** to find the true idealized maximum temperature $T_{\\max}$. Even with lids and draught shields, spirit-burner combustion calorimetry dramatically underestimates $|\\Delta H_c|$ (*Bylikin* p. 399: $\\text{CH}_3\\text{OH}$ gives $-360$ vs literature $-726\\text{ kJ mol}^{-1}$) due to **systematic errors**: uncaptured heat escaping around the copper can, heat absorbed by the metal calorimeter itself ($q_{\\text{cal}}$), evaporation of volatile alcohol from the wick, and incomplete combustion depositing black soot ($\\text{C}$).',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_ENTHALPY_PROFILE_SIM,
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Average Bond Enthalpies & Hess’s Law Cycles (R1.2.1–R1.2.4, Book pp. 404–417)',
      },
      {
        type: 'paragraph',
        markdown:
          'Energy changes reflect net bond rearrangement (*Bylikin* p. 405): **bond breaking is always endothermic ($\\Delta H > 0$)** because energy must be supplied to separate attracted nuclei and shared electrons, whereas **bond formation is always exothermic ($\\Delta H < 0$)**. Using Data Booklet **average bond enthalpies** (strictly defined for breaking $1\\text{ mol}$ of covalent bonds in **gaseous molecules** averaged across many chemical environments):\n\n$$\\Delta H_r^\\circ \\approx \\sum \\text{BE}(\\text{bonds broken in reactants}) - \\sum \\text{BE}(\\text{bonds formed in products})$$\n\nWhy do bond-enthalpy answers differ slightly from exact Hess’s Law values? Two IB markscheme reasons: (1) bond enthalpies are **mean averages** across varied compounds rather than exact environment values (except diatomic gases like $\\text{H}_2, \\text{Cl}_2$), and (2) standard enthalpy cycles apply to **liquid/solid standard states** (ignoring $\\Delta H_{\\text{vap}}$ when $\\text{H}_2\\text{O}(l)$ or $\\text{CH}_3\\text{OH}(l)$ appears unless phase change enthalpy is included)!',
      },
      {
        type: 'paragraph',
        markdown:
          '**Hess’s Law (Law of Conservation of Energy, R1.2.2–R1.2.4):** The overall enthalpy change of a chemical reaction depends **only on initial reactants and final products, independent of pathway**. Whether reversing and scaling given thermochemical equations (flip $\\Delta H$ sign when reversing; multiply $\\Delta H$ proportionally) or applying tabulated **standard enthalpy of formation ($\\Delta H_f^\\circ$, where every pure element in its standard state has $\\Delta H_f^\\circ = 0$)** or **standard enthalpy of combustion ($\\Delta H_c^\\circ$)** data:\n\n| Cycle Data Type | Arrow Direction in Hess Cycle | Exact Algebraic Formula | Key Sign / State Watchout |\n| :--- | :--- | :--- | :--- |\n| **Enthalpies of Formation ($\\Delta H_f^\\circ$)** | Elements in standard states $\\longrightarrow$ Reactants & Products | $\\Delta H_r^\\circ = \\sum \\Delta H_f^\\circ(\\text{products}) - \\sum \\Delta H_f^\\circ(\\text{reactants})$ | $\\Delta H_f^\\circ(\\text{O}_2(g)) = 0$, $\\Delta H_f^\\circ(\\text{C}(\\text{graphite})) = 0$ |\n| **Enthalpies of Combustion ($\\Delta H_c^\\circ$)** | Reactants & Products $\\longrightarrow$ Combustion oxides ($\\text{CO}_2, \\text{H}_2\\text{O}$) | $\\Delta H_r^\\circ = \\sum \\Delta H_c^\\circ(\\text{reactants}) - \\sum \\Delta H_c^\\circ(\\text{products})$ | Notice **Reactants − Products** because arrows point *downward* toward oxides! |\n| **Average Bond Enthalpies (Gaseous)** | Gaseous molecules $\\longrightarrow$ Free gaseous atoms | $\\Delta H_r \\approx \\sum \\text{BE}(\\text{reactants}) - \\sum \\text{BE}(\\text{products})$ | Must convert any $\\text{H}_2\\text{O}(l)$ via $\\Delta H_{\\text{vap}}$ if specified |',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_CALORIMETRY_HESS_WORKED,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Complete/Incomplete Combustion, Fossil Fuels, Biofuels & Fuel Cells (R1.3, Book pp. 424–441)',
      },
      {
        type: 'paragraph',
        markdown:
          'Reactive metals, non-metals, and hydrocarbons burn exothermically with $\\text{O}_2$ as oxidizing agent. With excess oxygen, hydrocarbons undergo **complete combustion** exclusively to $\\text{CO}_2(g)$ and $\\text{H}_2\\text{O}(l)$. Under oxygen-starved conditions, **incomplete combustion** releases less energy per mole and yields toxic **carbon monoxide ($\\text{CO}$)** (binds irreversibly to haemoglobin $\\text{Fe}^{2+}$) and solid **carbon soot particulates ($\\text{C}(s)$)** (worsening respiratory illness and dimming atmospheric light). Notice why comparing fuels requires separating **specific energy** ($\\text{kJ g}^{-1}$ or $\\text{MJ kg}^{-1}$—vital for aviation weight!) from **energy density** ($\\text{kJ dm}^{-3}$—vital for car tank volume!). Because **more highly oxidized** molecules already contain $\\text{C}-\\text{O}$ bonds, **specific energy falls** as $\\text{O:C}$ ratio climbs: $\\text{H}_2$ ($142\\text{ kJ g}^{-1}$) $>$ $\\text{CH}_4$ ($55.5$) $>$ octane ($47.9$) $>$ ethanol ($29.7$) $>$ coal ($\\sim 31$).',
      },
      {
        type: 'paragraph',
        markdown:
          'Evaluating alternative energy sources (*Bylikin* pp. 432–441) weighs carbon cycle timescales alongside stoichiometry:\n\n- **Fossil Fuels (Coal, Crude Oil, Natural Gas):** Formed over millions of years from fossilized biomass; burning releases ancient sequestered carbon rapidly ($\\text{CH}_4$ gives the lowest $\\text{CO}_2$ per $\\text{kJ}$ of fossil fuels; coal gives the highest plus $\\text{SO}_2$ acid gas).\n- **Biofuels (Bioethanol & Biodiesel):** Produced via short-term photosynthetic biological fixation (fermenting sugars $\\text{C}_6\\text{H}_{12}\\text{O}_6 \\to 2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{CO}_2$, or transesterifying vegetable oils). While photosynthesis absorbs $\\text{CO}_2$ matching combustion output, lifecycle fertilizers, distillation heat, and deforestation preventing arable food farming challenge strict "carbon neutrality".\n- **Hydrogen & Methanol Fuel Cells:** Direct electrochemical oxidation (acidic PEM cell: anode $\\text{H}_2 \\to 2\\text{H}^+ + 2e^-$; cathode $\\text{O}_2 + 4\\text{H}^+ + 4e^- \\to 2\\text{H}_2\\text{O}$) bypasses Carnot thermal losses to double conversion efficiency over internal combustion engines, leaving water as the sole exhaust—provided $\\text{H}_2$ itself is generated cleanly via solar/wind electrolysis rather than steam methane reforming.',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_FUELS_ENERGY_MATRIX,
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Strict SL Boundary Confirmation (No Entropy/Gibbs or Born–Haber)',
        markdown:
          'IB Chemistry SL assesses thermochemistry strictly through **Reactivity 1.1–1.3** (enthalpy, calorimetry, bond enthalpies, Hess’s law cycles, and fuels). Do NOT invoke HL **entropy ($\\Delta S$)**, **Gibbs energy ($\\Delta G$)** (Reactivity 1.4), or **Born–Haber ionic cycles** (Reactivity 1.2.5) on SL papers!',
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Algebraic Equation Summation Method for Hess’s Law & Combustion Assumptions (R1.2, Book pp. 408–417)',
      },
      {
        type: 'paragraph',
        markdown:
          'In addition to $\\Delta H_f^\\circ$ and $\\Delta H_c^\\circ$ tabulated cycles, many Paper 2 problems (*Bylikin* Worked Ex. 2, Book p. 409) supply **two or three arbitrary thermochemical equations** and ask you to calculate $\\Delta H$ for a target reaction. Execute these three algebraic steps reliably:\n\n1. **Align target species side-by-side:** Identify a unique species appearing in only one given equation and match both its side (reactant vs product) and coefficient in the target equation. Flipping an equation reverses the sign of $\\Delta H$; scaling coefficients by factor $k$ multiplies $\\Delta H$ by $k$.\n2. **Verify cancellation of intermediates:** Add the manipulated equations together and confirm every intermediate (such as $\\text{CO}(g)$ or $\\text{O}_2(g)$ not in the target) cancels algebraically on left and right.\n3. **Sum modified $\\Delta H_i$ values** cleanly without dropping minus signs.\n\n**Calorimetry Assumptions Checklist:** Whenever writing $q = mc\\Delta T$ for aqueous displacement ($\\text{Zn} + \\text{CuSO}_4$) or neutralization, state all three standard SL assumptions clearly in Paper 1B/2 evaluations: (1) solution density $= 1.00\\text{ g cm}^{-3}$, (2) specific heat capacity equals pure water $4.18\\text{ J g}^{-1}\\text{ K}^{-1}$, and (3) heat absorbed by the thermometer, stirrer, and insulated cup is negligible with zero environmental heat loss.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Standard Enthalpy Change of Combustion (ΔHc°)',
            definitionMarkdown: 'Enthalpy change when $1\\text{ mol}$ of a substance burns completely in excess oxygen under standard conditions ($100\\text{ kPa}$, $298\\text{ K}$).',
            markschemeKeyword: '1 mol substance completely combusted in excess oxygen / standard conditions',
          },
          {
            term: 'Standard Enthalpy Change of Formation (ΔHf°)',
            definitionMarkdown: 'Enthalpy change when $1\\text{ mol}$ of a compound forms from its constituent elements in their standard states at $100\\text{ kPa}$ and $298\\text{ K}$ (elements $= 0$).',
            markschemeKeyword: '1 mol compound from elements in standard states',
          },
          {
            term: 'Average Bond Enthalpy',
            definitionMarkdown: 'Energy needed to break $1\\text{ mol}$ of a specific covalent bond in gaseous molecules under standard conditions, averaged over similar compounds.',
            markschemeKeyword: 'break 1 mol gaseous covalent bond / average',
          },
          {
            term: 'Hess’s Law',
            definitionMarkdown: 'Total enthalpy change for a reaction depends only on initial and final states and is independent of the route taken.',
            markschemeKeyword: 'independent of pathway / route taken',
          },
          {
            term: 'Specific Energy vs Energy Density',
            definitionMarkdown: 'Specific energy is energy released per unit mass ($\\text{kJ g}^{-1}$); energy density is energy released per unit volume ($\\text{kJ dm}^{-3}$).',
            markschemeKeyword: 'per unit mass vs per unit volume',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 13 (R2.1–R2.3) — BRAND-NEW Comprehensive Guide (SL ONLY!)
  // =========================================================================
  {
    topicCode: 'R2.2',
    title: 'Stoichiometry Yields, Kinetics & Dynamic Equilibrium (R2.1–R2.3)',
    summary:
      'Brand-new Bylikin R2.1–R2.3 SL textbook guide uniting balanced chemical stoichiometry, limiting reactants, percentage yield, green chemistry atom economy, reaction rate monitoring and tangent analysis, collision theory, Maxwell–Boltzmann curves, dynamic equilibrium, Kc/Q extent predictions, and Le Châtelier’s principle.',
    sourceFileNames: [
      'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      'chemistry-guide-en_27d9a623-d741-4646-a331-1510ce0723b4.pdf',
      'RevisionDojo_IB_Chemistry_Cheatsheets_Merged.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Bylikin Guiding Questions (R2.1 Book p. 461, R2.2 p. 480, R2.3 p. 512)',
        markdown:
          '- **R2.1:** *How are chemical equations used to calculate reacting ratios?*\n- **R2.2:** *How can the rate of a reaction be controlled?*\n- **R2.3:** *How can the extent of a reversible reaction be influenced?*',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Stoichiometry, Limiting Reactants, Yield & Atom Economy (R2.1, Book pp. 461–479)',
      },
      {
        type: 'paragraph',
        markdown:
          'Balanced chemical equations enforce atomic conservation across solids ($s$), liquids ($l$), gases ($g$), and aqueous ions ($aq$), fixing exact molar ratios among reactants and products (*Bylikin* pp. 461–468). Whenever amounts of **two or more reactants** are given, you MUST verify which is the **limiting reactant** (completely consumed, setting the maximum product yield) and which remains in **excess**. Compare moles *divided by each species’ stoichiometric coefficient*: for $\\text{CaC}_2(s) + \\tfrac{5}{2}\\text{O}_2(g) \\to \\text{CaO}(s) + 2\\text{CO}_2(g)$ (or $2\\text{Al} + 3\\text{Cl}_2$), the reactant with the smaller ratio $n_i / \\nu_i$ runs out first. For gas stoichiometry at official **IB STP ($273.15\\text{ K},\\ 100\\text{ kPa}$)**, convert directly using $V_m = \\mathbf{22.7\\text{ dm}^3\\text{ mol}^{-1}}$ (NEVER $22.4$), or scale volumes directly by Avogadro’s law when $T$ and $P$ remain constant.',
      },
      {
        type: 'paragraph',
        markdown:
          'Green chemistry distinguishes two complementary metrics of synthetic efficiency (*Bylikin* pp. 470–477):\n\n- **Percentage Yield:** Compares actual isolated laboratory product mass against the theoretical stoichiometric maximum from the limiting reagent. Yields fall below $100\\%$ because of reversible equilibria, competing side reactions, incomplete conversion, or mechanical transfer/filtration losses (conversely, yields $>100\\%$ usually indicate wet un-dried crystals or co-precipitated impurities!).\n- **Percentage Atom Economy:** Measures how efficiently a balanced reaction incorporates reactant atoms into the **desired product** (assuming $100\\%$ conversion), penalizing processes that discard heavy stoichiometric byproducts. Consequently, **addition reactions and addition polymerizations (S2.4.5) have 100% atom economy** because zero waste byproducts form, whereas elimination and substitution reactions necessarily drop below $100\\%$.',
      },
      {
        type: 'equation',
        latex: '\\%\\text{ Yield} = \\frac{m_{\\text{experimental}}}{m_{\\text{theoretical}}} \\times 100\\% \\qquad \\text{and} \\qquad \\%\\text{ Atom Economy} = \\frac{\\sum M(\\text{desired product})}{\\sum M(\\text{all reactants})} \\times 100\\%',
        caption: 'Experimental laboratory efficiency (% yield) vs stoichiometric green chemistry efficiency (% atom economy).',
        variableLegend: [
          { symbol: 'm_{\\text{theoretical}}', meaning: 'Maximum product mass calculated strictly from the limiting reagent' },
          { symbol: '\\sum M', meaning: 'Total molar mass weighted by balanced stoichiometric coefficients in the chemical equation' },
        ],
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_STOICHIOMETRY_YIELD_WORKED,
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Reaction Rates, Monitoring & Collision Theory (R2.2.1–R2.2.5, Book pp. 480–495)',
      },
      {
        type: 'paragraph',
        markdown:
          'The **rate of reaction** equals the positive change in concentration of a reactant or product per unit time ($\\text{mol dm}^{-3}\\text{ s}^{-1}$): $r = \\frac{\\Delta [\\text{P}]}{\\Delta t} = -\\frac{\\Delta [\\text{R}]}{\\Delta t}$ (*Bylikin* p. 481). Because reactant concentration falls as reaction proceeds, reaction rate is **highest at $t = 0$ (initial rate)** and gradually flattens to zero at completion. Measuring the **instantaneous rate** at any time $t$ requires drawing a straight **tangent line** to the concentration–time or gas-volume–time curve at $t$ and evaluating $\\text{gradient} = \\frac{\\Delta y}{\\Delta x}$. Common SL experimental rate-tracking tools include: (1) collecting gas volume in a **gas syringe** ($\\text{Mg} + 2\\text{HCl}$), (2) tracking **mass loss** on an analytical balance as dense $\\ce{CO2}$ escapes through cotton wool ($\\text{CaCO}_3 + 2\\text{HCl}$), (3) **colorimetry/spectrophotometry** for coloured species like $\\ce{I2}$ or $\\ce{MnO4-}$, (4) **pH / electrical conductivity** probes when ion concentrations change, and (5) **quenching + titration** aliquots with ice or neutralizing base.',
      },
      {
        type: 'paragraph',
        markdown:
          'Under **collision theory**, particles react ONLY when a collision meets **BOTH** requirements simultaneously (*Bylikin* p. 487):\n1. Colliding particles possess total kinetic energy equal to or exceeding the **activation energy ($E \\ge E_a$)** needed to distort existing bonds into the transition state.\n2. Particles strike with **correct spatial (steric) orientation** aligning reactive sites.\n\nEvery kinetic control factor alters collision frequency, fraction $E \\ge E_a$, or both:\n- **Concentration / Gas Pressure ($P$ for gases only!):** Packs more reactant molecules into the same volume $\\implies$ higher collision frequency $\\implies$ faster rate (same $E_a$ and same Boltzmann shape).\n- **Surface Area / Particle Size:** Crushing marble chips ($\\text{CaCO}_3$) into fine powder exposes more surface atoms to acid collisions simultaneously, speeding heterogeneous reaction.\n- **Temperature ($T$):** Raising $T$ increases particle speeds slightly, **AND more importantly**, broadens and right-shifts the **Maxwell–Boltzmann kinetic energy distribution**, **dramatically multiplying the shaded fraction of molecules with $E \\ge E_a$** (remember: curve starts at $(0,0)$, peak lowers and shifts right, total area under the curve stays $100\\%$ constant!).\n- **Catalyst:** Increases reaction rate without being chemically consumed by **providing an alternative reaction pathway (mechanism) with a lower activation energy $E_{a,\\text{cat}} < E_a$**. Crucially, **a catalyst does NOT move the Maxwell–Boltzmann curve itself**; instead it shifts the vertical $E_a$ cutoff leftward so a much larger share of existing collisions overcome the barrier!',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_BOLTZMANN_KINETICS_EXPLORER,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Dynamic Equilibrium, Kc / Q & Le Châtelier’s Principle (R2.3.1–R2.3.4, Book pp. 512–524)',
      },
      {
        type: 'paragraph',
        markdown:
          'In a **closed system** (where matter cannot enter or leave, though energy may exchange), reversible reactions reach **dynamic equilibrium** when the **forward and reverse reaction rates become strictly equal** ($r_f = r_r > 0$). Both reactions keep firing continuously at the molecular scale, yet all macroscopic observables—concentrations, gas pressure, colour intensity—remain constant over time (*never* write that reactant and product concentrations are equal!). The homogeneous **equilibrium constant ($K_c$)** evaluates products over reactants raised to their balanced stoichiometric coefficients (pure solids and pure solvent $\\text{H}_2\\text{O}(l)$ are omitted in heterogeneous / dilute aqueous forms).',
      },
      {
        type: 'equation',
        latex: 'a\\text{A} + b\\text{B} \\rightleftharpoons c\\text{C} + d\\text{D} \\quad \\Longrightarrow \\quad K_c = \\frac{[\\text{C}]^c[\\text{D}]^d}{[\\text{A}]^a[\\text{B}]^b} \\qquad (\\text{Reaction Quotient } Q = \\text{same ratio at any } t)',
        caption: 'Equilibrium law and reaction quotient (R2.3.2–R2.3.3, Book pp. 516–519).',
        variableLegend: [
          { symbol: 'K_c \\gg 1', meaning: 'Equilibrium lies far to the RIGHT; products dominate at equilibrium' },
          { symbol: 'K_c \\ll 1', meaning: 'Equilibrium lies far to the LEFT; reactants barely convert' },
          { symbol: 'Q < K_c', meaning: 'Too many reactants relative to equilibrium → net reaction shifts RIGHT toward products (Q > Kc shifts LEFT)' },
        ],
      },
      {
        type: 'paragraph',
        markdown:
          'Also track how stoichiometric manipulation modifies $K$ at fixed temperature (*Bylikin* Table 1, Book p. 518): reversing an equation yields $K\' = 1/K$, multiplying coefficients by $n$ raises $K\' = K^n$, and halving coefficients yields $K\' = \\sqrt{K}$. According to **Le Châtelier’s Principle**, if a dynamic equilibrium is disturbed by changing conditions, the position of equilibrium shifts to **partially oppose/minimize the imposed change**:\n\n| Perturbation Applied | Direction of Equilibrium Shift | Effect on Equilibrium Constant $K_c$ | Industrial Case Study: Haber Process ($\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3,\\ \\Delta H = -92\\text{ kJ mol}^{-1}$) |\n| :--- | :--- | :--- | :--- |\n| **Add Reactant / Remove Product** | Shifts **RIGHT** (forward) to consume excess reactant | **Unchanged** (only $T$ alters $K_c$!) | Liquid $\\text{NH}_3$ is cooled/liquefied out continuously, driving conversion forward |\n| **Increase Total Pressure / Compress Volume** | Shifts toward side with **fewer moles of gas** | **Unchanged** | $4\\text{ mol gas} \\to 2\\text{ mol gas}$, so high $P$ ($\\sim 200\\text{ atm}$) raises $\\text{NH}_3$ yield |\n| **Increase Temperature ($T \\uparrow$)** | Shifts in the **endothermic direction** ($\\Delta H > 0$) to absorb heat | **Changes $K_c$!** (falls if forward $\\Delta H < 0$; rises if forward $\\Delta H > 0$) | Exothermic forward favours low $T$ for yield, yet kinetic rate requires compromise $450^\\circ\\text{C}$ |\n| **Add Catalyst ($\\text{Fe}$ / $\\text{V}_2\\text{O}_5$)** | **ZERO SHIFT** in equilibrium composition | **Unchanged** (speeds $r_f$ and $r_r$ identically) | Essential in Haber ($\\text{Fe}$) & Contact ($\\text{V}_2\\text{O}_5$) processes to reach equilibrium rapidly |',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Three Classic R2.2–R2.3 Examiner Traps',
        markdown:
          '1. **Temperature Is the ONLY Factor Changing $K_c$:** Never claim high pressure or adding reactants alters $K_c$—changing $[\\text{reactant}]$ or $P$ only temporarily shifts $Q \\neq K_c$ until concentrations readjust to the **identical $K_c$ ratio**.\n2. **Inert Gas at Constant Volume:** Pumping helium into a fixed-volume equilibrium vessel raises total pressure but leaves partial pressures/concentrations of reacting gases unchanged $\\implies$ **no shift**.\n3. **SL Kinetics Boundary:** SL covers qualitative collision theory and Boltzmann curves (`R2.2.1–R2.2.5`); rate equations ($r = k[A]^m[B]^n$), reaction orders, Arrhenius plots, and ICE-table quadratic solving belong to AHL.\n\nAlso inspect industrial **Contact Process ($2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g),\\ \\Delta H = -197\\text{ kJ mol}^{-1}$)**: although high pressure favours $2$ gas moles over $3$, $K_c$ is already large at atmospheric pressure ($1$–$2\\text{ atm}$), so engineering plants avoid costly high-pressure vessels and run over a $\\text{V}_2\\text{O}_5$ catalyst bed at $450^\\circ\\text{C}$ to achieve $>99\\%$ conversion economically.',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_LE_CHATELIER_SIM,
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Limiting Reactant',
            definitionMarkdown: 'Reactant completely consumed first during a reaction, capping the maximum theoretical moles of product.',
            markschemeKeyword: 'completely consumed / determines theoretical yield',
          },
          {
            term: 'Atom Economy',
            definitionMarkdown: 'Green-chemistry percentage ratio of molar mass of desired product to total molar mass of all reactants in the stoichiometric equation.',
            markschemeKeyword: 'M(desired product) / ΣM(all reactants) × 100%',
          },
          {
            term: 'Activation Energy (Ea)',
            definitionMarkdown: 'Minimum kinetic energy colliding reactant particles must possess to overcome bond repulsion and react.',
            markschemeKeyword: 'minimum energy required for collision to react',
          },
          {
            term: 'Catalyst',
            definitionMarkdown: 'Substance increasing reaction rate without overall consumption by providing an alternative pathway with lower $E_a$ (does not shift equilibrium or $\\Delta H$).',
            markschemeKeyword: 'alternative pathway / lower Ea / unchanged K and ΔH',
          },
          {
            term: 'Dynamic Equilibrium',
            definitionMarkdown: 'State in a closed system where forward and reverse reaction rates are equal and macroscopic concentrations remain constant.',
            markschemeKeyword: 'closed system / equal forward and reverse rates / constant concentrations',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 14 (R3.1) — BRAND-NEW Comprehensive Guide (STRICT SL: R3.1.1–R3.1.8!)
  // =========================================================================
  {
    topicCode: 'R3.1',
    title: 'Brønsted–Lowry Acids & Bases, pH Scale & Neutralization Curves (R3.1)',
    summary:
      'Brand-new Bylikin R3.1.1–R3.1.8 SL textbook guide covering Brønsted–Lowry proton transfer, conjugate acid–base pairs, amphiprotic ions vs amphoteric oxides, logarithmic pH scale, ionic product Kw = 1.00 × 10⁻¹⁴ and temperature neutrality shift, strong vs weak differentiation tests, neutralization enthalpy, and strong–strong pH titration curves.',
    sourceFileNames: [
      'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      'chemistry-guide-en_27d9a623-d741-4646-a331-1510ce0723b4.pdf',
      'RevisionDojo_IB_Chemistry_Cheatsheets_Merged.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Bylikin Guiding Question (R3.1, Book p. 537)',
        markdown:
          '- **R3.1:** *What happens when protons are transferred?*\n- **Linking Lens:** How does transferring a single bare $\\text{H}^+$ proton link acid–base conjugate stability, the $10$-fold logarithmic pH ladder, and steep vertical jumps on neutralization titration curves?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Brønsted–Lowry Proton Transfer, Conjugates & Amphiprotic Species (R3.1.1–R3.1.3, Book pp. 537–542)',
      },
      {
        type: 'paragraph',
        markdown:
          'Under the **Brønsted–Lowry definition**, a chemical reaction is proton-transfer driven regardless of whether water is present (*Bylikin* pp. 538–541):\n- A **Brønsted–Lowry acid** is a **proton ($\\text{H}^+$) donor**.\n- A **Brønsted–Lowry base** is a **proton ($\\text{H}^+$) acceptor** (always carrying at least one non-bonding lone pair to form a coordination bond with $\\text{H}^+$).\n\nWhenever an acid $\\text{HA}$ donates $\\text{H}^+$ to base $\\text{B}$, it leaves behind its **conjugate base ($\\text{A}^-$)** while $\\text{B}$ transforms into its **conjugate acid ($\\text{BH}^+$)**. Every **conjugate acid–base pair differs by exactly one proton ($\\text{H}^+$)**—not two protons and not an electron pair! For example, in $\\text{NH}_3(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{NH}_4^+(aq) + \\text{OH}^-(aq)$, the two conjugate pairs are $\\text{NH}_4^+ / \\text{NH}_3$ and $\\text{H}_2\\text{O} / \\text{OH}^-$; note that $\\text{SO}_4^{2-}$ is **NOT** the conjugate base of $\\text{H}_2\\text{SO}_4$ (they differ by $2\\text{H}^+$ — the conjugate base of $\\text{H}_2\\text{SO}_4$ is **$\\text{HSO}_4^-$**!).',
      },
      {
        type: 'paragraph',
        markdown:
          'Certain molecules and polyatomic ions are **amphiprotic**: they can **both donate AND accept a proton ($\\text{H}^+$)** depending on their reaction partner (*Bylikin* p. 542). Key IB amphiprotic species include $\\text{H}_2\\text{O}$, **$\\text{HCO}_3^-$**, **$\\text{HSO}_4^-$**, **$\\text{H}_2\\text{PO}_4^-$**, and $\\text{HPO}_4^{2-}$:\n\n- $\\text{HCO}_3^-(aq) + \\text{H}_3\\text{O}^+(aq) \\to \\text{H}_2\\text{CO}_3(aq) + \\text{H}_2\\text{O}(l)$ (acting as Brønsted–Lowry **base**)\n- $\\text{HCO}_3^-(aq) + \\text{OH}^-(aq) \\to \\text{CO}_3^{2-}(aq) + \\text{H}_2\\text{O}(l)$ (acting as Brønsted–Lowry **acid**)\n\nDistinguish **amphiprotic** (can transfer/accept $\\text{H}^+$) carefully from **amphoteric** (general umbrella term meaning reacts as either acid or base, e.g., solid $\\text{Al}_2\\text{O}_3$ has NO protons to donate, so $\\text{Al}_2\\text{O}_3$ is amphoteric but NOT amphiprotic!).',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Logarithmic pH Scale & Ionic Product Constant of Water Kw (R3.1.4–R3.1.5, Book pp. 543–547)',
      },
      {
        type: 'paragraph',
        markdown:
          'Because aqueous $[\\text{H}^+]$ spans $> 14$ orders of magnitude, Søren Sørensen introduced the **pH scale** (*Bylikin* Table 1–2, p. 543). Notice its two critical mathematical consequences: (1) pH moves **inversely** to acidity (lower pH = higher $[\\text{H}^+]$), and (2) **every 1.00-unit shift in pH equals a $10$-fold change in $[\\text{H}^+]$**! Diluting a strong monoprotic acid $10\\times$ raises pH by $+1.00$ unit; diluting $1000\\times$ ($10^3$) raises pH by $+3.00$ units (though extreme dilution of an acid approaches pH $7.00$ asymptotically from water auto-ionization—it NEVER turns alkaline!).',
      },
      {
        type: 'equation',
        latex: '\\text{pH} = -\\log_{10}[\\text{H}^+] \\iff [\\text{H}^+] = 10^{-\\text{pH}} \\qquad \\text{and} \\qquad K_w = [\\text{H}^+][\\text{OH}^-] = 1.00 \\times 10^{-14}\\;(\\text{at } 298\\text{ K})',
        caption: 'Logarithmic pH definition and water ionic product constant (R3.1.4–R3.1.5, Book pp. 543–546).',
        variableLegend: [
          { symbol: '[\\text{H}^+]', meaning: 'Hydronium/hydrogen ion molarity in mol dm⁻³ (strictly H₃O⁺)' },
          { symbol: 'K_w', meaning: 'Auto-ionization equilibrium constant for H₂O(l) ⇌ H⁺(aq) + OH⁻(aq); 1.00 × 10⁻¹⁴ at 298 K' },
        ],
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Pure Water Above 298 K Has pH < 7 — Yet Remains Strictly Neutral!',
        markdown:
          'Auto-ionization of water ($\\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{H}^+(aq) + \\text{OH}^-(aq)$) is **endothermic ($\\Delta H > 0$)** because breaking an $\\text{O}-\\text{H}$ bond absorbs energy. Raising temperature above $298\\text{ K}$ shifts equilibrium right by Le Châtelier’s principle, **increasing $K_w$** (at $323\\text{ K}$, $K_w \\approx 5.48 \\times 10^{-14}$, giving $[\\text{H}^+] = [\\text{OH}^-] = 2.34\\times 10^{-7}$ and **$\\text{pH} = 6.63$**). Pure hot water is **NOT acidic**—neutrality is defined strictly by **$[\\text{H}^+] = [\\text{OH}^-]$**, NOT $\\text{pH} = 7$!',
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Strong vs Weak Acids & Bases, Neutralization Reactions & Titration pH Curves (R3.1.6–R3.1.8, Book pp. 548–559)',
      },
      {
        type: 'paragraph',
        markdown:
          '**Strength vs Concentration:** Acid/base **strength** reflects the **degree of dissociation** in water (a permanent molecular property), whereas **concentration** measures solute moles per $\\text{dm}^3$! **Strong acids** ($\\text{HCl}, \\text{HNO}_3, \\text{H}_2\\text{SO}_4$ first proton) and **strong bases** ($\\text{NaOH}, \\text{KOH}, \\text{Ba(OH)}_2$) dissociate **$100\\%$** irreversibly ($\\to$), whereas **weak acids** ($\\text{CH}_3\\text{COOH}, \\text{H}_2\\text{CO}_3, \\text{H}_3\\text{PO}_4$) and **weak bases** ($\\text{NH}_3$, $\\text{CH}_3\\text{NH}_2$, soluble carbonates) dissociate only **partially** ($\\rightleftharpoons$, typically $<1\\%\\text{–}5\\%$). At **equal molar concentrations** ($0.10\\text{ mol dm}^{-3}$), a strong acid exhibits **lower pH** ($1.00$ vs $\\sim 2.9$), **higher electrical conductivity** (vastly more mobile ions), and **faster initial reaction rate** with $\\text{Mg}$ or $\\text{CaCO}_3$—yet neutralizing equal moles of strong or weak monoprotic acid requires the **exact same volume** of $\\text{NaOH}$!',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_ACID_BASE_STRENGTH_MATRIX,
      },
      {
        type: 'paragraph',
        markdown:
          '**Neutralization Reactions & Enthalpy (R3.1.7, Book pp. 553–556):** Acids react exothermically with **metal hydroxides/oxides** ($\\to \\text{salt} + \\text{water}$), **metal carbonates/hydrogencarbonates** ($\\to \\text{salt} + \\text{water} + \\text{CO}_2(g)$ effervescence), and ammonia ($\\to$ ammonium salt, zero water formed!). Because all strong acid + strong alkali neutralizations share the identical net ionic equation **$\\text{H}^+(aq) + \\text{OH}^-(aq) \\to \\text{H}_2\\text{O}(l)$**, they release nearly the exact same standard enthalpy of neutralization: **$\\Delta H_{\\text{neut}}^\\circ \\approx -57.3\\text{ kJ mol}^{-1}$** (slightly less exothermic for weak acids because some energy is absorbed to force full ionization during titration).\n\n**Neutralization pH Curves (R3.1.8, Book pp. 557–559):** Adding $0.10\\text{ mol dm}^{-3}\\ \\text{NaOH}$ gradually to $25.0\\text{ cm}^3$ of $0.10\\text{ mol dm}^{-3}\\ \\text{HCl}$ starts at $\\text{pH } 1.00$, rises gently through excess acid, undergoes a massive **vertical inflection spanning $\\text{pH } \\sim 3 \\to 11$** centered cleanly at **equivalence $\\text{pH} = 7.00$** ($V_{\\text{eq}} = 25.0\\text{ cm}^3$), and plateaus toward $\\text{pH } 13$. Contrast qualitatively with weak ethanoic acid: starting pH sits higher ($\\sim 2.9$), a gentler initial rise precedes equivalence, and the inflection point sits **above $\\text{pH } 7$** (*note:* quantitative $K_a/K_b$, buffer equations, and salt hydrolysis belong strictly to HL R3.1.9–3.1.17!).',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_TITRATION_PH_SIM,
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_PH_KW_TITRATION_WORKED,
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Molecular Basis of Acid Strength, Carbonic Ocean Chemistry & Titration Tracking (R3.1, Book pp. 548–559)',
      },
      {
        type: 'paragraph',
        markdown:
          'Why is sulfuric acid ($\\text{H}_2\\text{SO}_4$) a vastly stronger proton donor than sulfurous acid ($\\text{H}_2\\text{SO}_3$), and why is $\\text{HCl}$ strong while ethanoic acid ($\\text{CH}_3\\text{COOH}$) is weak? Compare structural factors governing proton release (*Bylikin* pp. 548–552):\n\n- **Oxoacid Oxidation State Effect (*Bylikin* p. 549):** Among oxoacids of the same central element, higher central oxidation state (more terminal electronegative $=\\text{O}$ atoms pulling electron density away from the $\\text{O}-\\text{H}$ bond and stabilizing the resulting anion by charge delocalization) sharply increases acid strength: e.g., **$\\text{H}_2\\text{SO}_4$ ($\\text{S}=+6$, strong)** $>$ $\\text{H}_2\\text{SO}_3$ ($\\text{S}=+4$, weak), and **$\\text{HNO}_3$ ($\\text{N}=+5$, strong)** $>$ $\\text{HNO}_2$ ($\\text{N}=+3$, weak).\n- **Hydrohalic Acids Trend ($\\text{HF} \\ll \\text{HCl} < \\text{HBr} < \\text{HI}$):** Even though $\\text{H}-\\text{F}$ is the most polar bond, its very high bond enthalpy ($567\\text{ kJ mol}^{-1}$) and tightly organized fluoride hydration keep $\\text{HF}$ a **weak acid** in water, whereas weaker, longer $\\text{H}-\\text{Cl}/\\text{H}-\\text{Br}/\\text{H}-\\text{I}$ bonds dissociate completely!\n- **Titration Progress via Electrical Conductivity (*Bylikin* p. 558):** During a strong acid + strong base titration ($\\text{HCl} + \\text{NaOH}$), electrical conductivity initially **drops steeply** up to equivalence because ultra-mobile $\\text{H}^+(aq)$ ions are replaced by slower $\\text{Na}^+(aq)$ ions; past the equivalence point, excess mobile $\\text{OH}^-$ ions cause conductivity to climb sharply once again, creating a crisp **V-shaped minimum** right at equivalence!',
      },
      {
        type: 'callout',
        variant: 'syllabus_link',
        title: 'Environmental & TOK Synthesis: Carbonic Rainwater vs Industrial Acid Deposition (S3.1 ↔ R3.1)',
        markdown:
          'Because dissolved atmospheric $\\text{CO}_2$ establishes natural rainwater at $\\text{pH } 5.6$ ($[\\text{H}^+] = 2.5 \\times 10^{-6}\\text{ mol dm}^{-3}$), environmental chemists define **acid rain** specifically as precipitation below $\\text{pH } 5.6$ driven by fossil-fuel $\\text{SO}_2$ ($\\to \\text{H}_2\\text{SO}_3 / \\text{H}_2\\text{SO}_4$) and vehicle $\\text{NO}_x$ ($\\to \\text{HNO}_3$). Because the pH scale is logarithmic, rainfall at $\\text{pH } 3.6$ contains **$100\\times$ higher $[\\text{H}^+]$** than normal clean rain, accelerating $\\text{CaCO}_3$ marble erosion ($\\text{CaCO}_3 + 2\\text{H}^+ \\to \\text{Ca}^{2+} + \\text{CO}_2 + \\text{H}_2\\text{O}$) and leaching toxic $\\text{Al}^{3+}$ from soils into lakes.',
      },
      {
        type: 'paragraph',
        markdown:
          '**Non-Aqueous Brønsted–Lowry Proton Transfer & Everyday Neutralization (*Bylikin* pp. 539–556):** Unlike older Arrhenius theory (restricted to $\\text{H}^+ / \\text{OH}^-$ in water), Brønsted–Lowry theory seamlessly covers **gas-phase and organic reactions**—for example, ammonia gas and hydrogen chloride gas react directly in dry glass tubes to deposit white ammonium chloride smoke: $\\text{HCl}(g) + \\text{NH}_3(g) \\to \\text{NH}_4^+(s)\\text{Cl}^-(s)$ (proton transfer without solvent!). In human physiology and environmental remediation, stomach antacids neutralize excess $\\text{HCl}$ gently using insoluble bases such as magnesium hydroxide ($\\text{Mg(OH)}_2 + 2\\text{HCl} \\to \\text{MgCl}_2 + 2\\text{H}_2\\text{O}$), calcium carbonate ($\\text{CaCO}_3 + 2\\text{HCl} \\to \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2$), or sodium hydrogencarbonate ($\\text{NaHCO}_3$), while powdered limestone ($\\text{CaCO}_3$) or slaked lime ($\\text{Ca(OH)}_2$) neutralizes acidified lakes and soils. On Paper 2 acid–base titration items, remember to verify **diprotic / dibasic stoichiometry** ($\\text{H}_2\\text{SO}_4$ consumes $2\\text{NaOH}$; $\\text{Ba(OH)}_2$ supplies $2\\text{OH}^-$ per formula unit!) and always quote pH values to **two decimal places** when molar concentrations are given to $2$–$3$ significant figures (since digits before the decimal point in pH denote only the order-of-magnitude power of $10$, whereas decimal digits carry true significant precision!).',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Brønsted–Lowry Acid / Base',
            definitionMarkdown: 'Acid is a proton ($\\text{H}^+$) donor; base is a proton ($\\text{H}^+$) acceptor.',
            markschemeKeyword: 'proton donor / proton acceptor',
          },
          {
            term: 'Conjugate Acid–Base Pair',
            definitionMarkdown: 'Two species differing by a single proton ($\\text{H}^+$), e.g., $\\text{H}_2\\text{CO}_3 / \\text{HCO}_3^-$.',
            markschemeKeyword: 'differing by one H+',
          },
          {
            term: 'Amphiprotic Species',
            definitionMarkdown: 'Species able to act as both a Brønsted–Lowry acid (donate $\\text{H}^+$) and base (accept $\\text{H}^+$), e.g., $\\text{H}_2\\text{O}, \\text{HCO}_3^-$.',
            markschemeKeyword: 'both donate and accept H+',
          },
          {
            term: 'Ionic Product of Water (Kw)',
            definitionMarkdown: 'Equilibrium constant $[\\text{H}^+][\\text{OH}^-] = 1.00\\times 10^{-14}$ at $298\\text{ K}$ ($T$-dependent; endothermic).',
            markschemeKeyword: '[H+][OH-] = 1.00×10⁻¹⁴ at 298 K',
          },
          {
            term: 'Equivalence Point',
            definitionMarkdown: 'Stoichiometric titration point where moles of added titrant exactly neutralize moles of analyte ($\\text{pH} = 7.00$ for strong acid + strong base).',
            markschemeKeyword: 'stoichiometric molar neutralization point',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 15 (R3.2–R3.4) — BRAND-NEW Comprehensive Guide (SL ONLY!)
  // =========================================================================
  {
    topicCode: 'R3.2',
    title: 'Redox, Electrochemistry & Organic Reaction Mechanisms (R3.2–R3.4)',
    summary:
      'Brand-new Bylikin R3.2.1–R3.2.11, R3.3, and R3.4.1–R3.4.5 SL guide covering oxidation-state tracking, acidic half-equation balancing, metal & halogen activity series, voltaic vs rechargeable vs molten electrolytic cells, organic alcohol oxidation & reduction, homolytic UV radical substitution, and heterolytic nucleophilic/electrophilic mechanisms.',
    sourceFileNames: [
      'Chemistry - Course Companion - Bylikin, Horner, Grant and Tarcy - Oxford 2023.pdf',
      'chemistry-guide-en_27d9a623-d741-4646-a331-1510ce0723b4.pdf',
      'RevisionDojo_IB_Chemistry_Cheatsheets_Merged.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Bylikin Guiding Questions (R3.2 p. 580, R3.3 p. 622, R3.4 p. 628)',
        markdown:
          '- **R3.2:** *What happens when electrons are transferred?*\n- **R3.3:** *What happens when a species possesses an unpaired electron?*\n- **R3.4:** *What happens when reactants share their electron pairs with others?*',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Electron Transfer, Acidic Half-Equations & Reactivity Series (R3.2.1–R3.2.4, Book pp. 580–593)',
      },
      {
        type: 'paragraph',
        markdown:
          '**OIL RIG (Oxidation Is Loss of electrons, Reduction Is Gain of electrons)** defines electron transfer reactions alongside **oxidation state** changes: oxidation increases oxidation state (e.g., $\\text{Fe}^{2+} \\to \\text{Fe}^{3+}$, $+2 \\to +3$), while reduction decreases oxidation state (e.g., $\\text{MnO}_4^- \\to \\text{Mn}^{2+}$, $+7 \\to +2$). Always distinguish species cleanly: the **oxidizing agent** causes another species to be oxidized and **is itself reduced** (gaining electrons), whereas the **reducing agent** donates electrons and **is itself oxidized** (*Bylikin* Worked Ex. 1–2, pp. 584–585).',
      },
      {
        type: 'paragraph',
        markdown:
          '**Balancing Redox Half-Equations in Acidic Solution (R3.2.2, Book pp. 586–588):** Follow a rigid four-step protocol: (1) balance all atoms *except* $\\text{O}$ and $\\text{H}$ ($\\text{Cr}_2\\text{O}_7^{2-} \\to \\mathbf{2}\\text{Cr}^{3+}$); (2) balance oxygen atoms by adding **$\\text{H}_2\\text{O}$** ($+7\\text{H}_2\\text{O}$); (3) balance hydrogen atoms by adding **$\\text{H}^+$** ($+14\\text{H}^+$); (4) balance net ionic charge by adding electrons **$e^-$** ($+6e^-$ on LHS for $\\text{Cr}_2\\text{O}_7^{2-}$, or $+5e^-$ on LHS for $\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\to \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$). Multiply the oxidation and reduction half-equations by integers to cancel all electrons before summing! Classic **activity series** applications (*Bylikin* Worked Ex. 5, p. 590) demonstrate that a more reactive metal (easily oxidized, higher reducing strength: $\\text{Mg} > \\text{Zn} > \\text{Fe} > \\text{Pb} > \\text{H}_2 > \\text{Cu} > \\text{Ag}$) displaces ions of a less reactive metal from solution, and metals above $\\text{H}_2$ react with dilute $\\text{HCl}/\\text{H}_2\\text{SO}_4$ to liberate $\\text{H}_2(g)$ (whereas unreactive $\\text{Cu}$ and $\\text{Ag}$ cannot!). Likewise, more oxidizing halogens displace less oxidizing halides: $\\text{F}_2 > \\text{Cl}_2 > \\text{Br}_2 > \\text{I}_2$.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Primary Voltaic, Rechargeable & Molten Electrolytic Cells + Organic Redox (R3.2.5–R3.2.11, Book pp. 594–609)',
      },
      {
        type: 'paragraph',
        markdown:
          'Electrochemical cells harness redox chemistry in two complementary directions (*Bylikin* pp. 594–604):\n\n- **Primary (Voltaic) Cells:** Convert spontaneous exothermic chemical energy into electrical energy across two spatially separated half-cells connected by an external wire (electrons always flow **anode $\\to$ cathode**) and a **salt bridge** ($\\text{KNO}_3(aq)$, releasing anions toward the anode and cations toward the cathode to maintain electrical neutrality). Standard IB cell notation places oxidation on the left and double-bar salt bridge in the centre: $\\text{Zn}(s)\\,|\\,\\text{Zn}^{2+}(aq)\\,\\|\\,\\text{Cu}^{2+}(aq)\\,|\\,\\text{Cu}(s)$. **AN OX** (oxidation at anode, **negative** polarity) and **RED CAT** (reduction at cathode, **positive** polarity).\n- **Secondary (Rechargeable) Cells:** Reversible redox electrodes allow external electrical power to drive reactions backward during charging—memorize the **lithium-ion battery** discharge ($\\text{Anode: } \\text{Li} \\to \\text{Li}^+ + e^-;\\ \\text{Cathode: } \\text{CoO}_2 + \\text{Li}^+ + e^- \\to \\text{LiCoO}_2$) and **lead–acid car battery** ($\\text{Pb} + \\text{PbO}_2 + 2\\text{HSO}_4^- + 2\\text{H}^+ \\rightleftharpoons 2\\text{PbSO}_4 + 2\\text{H}_2\\text{O}$).\n- **Electrolytic Cells (Molten Salts ONLY at SL!):** An external DC power supply forces a non-spontaneous redox decomposition inside a single vessel containing molten ionic electrolyte (e.g., $\\text{PbBr}_2(l)$ or $\\text{NaCl}(l)$ at inert carbon electrodes). Notice that **AN OX and RED CAT still hold**, yet polarity flips: anode is **positive** (attracting $\\text{Br}^-$ to oxidize: $2\\text{Br}^- \\to \\text{Br}_2(g) + 2e^-$) and cathode is **negative** (attracting $\\text{Pb}^{2+}$ to reduce: $\\text{Pb}^{2+} + 2e^- \\to \\text{Pb}(l)$). *(Standard cell potentials $E^\\circ$, SHE, and aqueous preferential discharge belong to HL R3.2.12–3.2.16.)*',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_VOLTAIC_ELECTROLYTIC_MATRIX,
      },
      {
        type: 'paragraph',
        markdown:
          '**Organic Oxidation & Reduction (R3.2.9–R3.2.11, Book pp. 604–609):** Using acidified potassium dichromate(VI) ($\\text{K}_2\\text{Cr}_2\\text{O}_7 / \\text{H}^+$, **orange $\\to$ green**) or potassium manganate(VII) ($\\text{KMnO}_4 / \\text{H}^+$, **purple $\\to$ colourless**):\n- **Primary ($1^\\circ$) Alcohol:** Gently heating with **immediate distillation** removes the lower-boiling **aldehyde** (lacks H-bonding!) before further oxidation ($\\text{CH}_3\\text{CH}_2\\text{OH} + [\\text{O}] \\to \\text{CH}_3\\text{CHO} + \\text{H}_2\\text{O}$). Heating under **reflux** with excess oxidant drives complete oxidation all the way to the **carboxylic acid** ($\\text{CH}_3\\text{COOH}$).\n- **Secondary ($2^\\circ$) Alcohol:** Oxidizes cleanly under reflux to a **ketone** (e.g., propan-2-ol $\\to$ propanone).\n- **Tertiary ($3^\\circ$) Alcohol:** **No reaction**—lacks a hydrogen atom bonded to the $\\text{C}-\\text{OH}$ carbon, so orange $\\text{Cr}_2\\text{O}_7^{2-}$ stays orange!\n- **Reduction:** Carbonyls and carboxylic acids reduce back to alcohols using hydride reagents **$\\text{NaBH}_4$** (mild: reduces aldehydes/ketones) or **$\\text{LiAlH}_4$** in dry ether (strong: also reduces carboxylic acids to $1^\\circ$ alcohols), while **unsaturated alkenes/alkynes** undergo catalytic hydrogenation with **$\\text{H}_2(g)$ over $\\text{Ni}$** ($150^\\circ\\text{C}$) or $\\text{Pd/Pt}$ to saturate the double/triple bond (margarine hardening!).',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_HALF_EQUATION_OXIDATION_STEPS,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Free-Radical Substitution (R3.3) vs Nucleophilic & Electrophilic Mechanisms (R3.4, Book pp. 622–634)',
      },
      {
        type: 'paragraph',
        markdown:
          'Compare the two fundamental covalent bond-breaking mechanisms in SL organic reactivity:\n\n- **Homolytic Fission & Radical Substitution (R3.3, Book pp. 622–627):** Each atom retains **one bonding electron** (drawn with single-barbed **fishhook arrows**), creating neutral, hyper-reactive **free radicals** possessing an unpaired electron ($\\text{Cl}\\bullet$). Because alkanes have strong, non-polar $\\text{C}-\\text{C}$ and $\\text{C}-\\text{H}$ bonds, they react with $\\text{Cl}_2$ or $\\text{Br}_2$ **ONLY under UV light** (photochemical initiation) via three chain phases:\n  1. **Initiation:** $\\text{Cl}_2 \\xrightarrow{\\text{UV}} 2\\text{Cl}\\bullet$ (radicals formed).\n  2. **Propagation:** $\\text{CH}_4 + \\text{Cl}\\bullet \\to \\bullet\\text{CH}_3 + \\text{HCl}$, followed by $\\bullet\\text{CH}_3 + \\text{Cl}_2 \\to \\text{CH}_3\\text{Cl} + \\text{Cl}\\bullet$ (regenerating $\\text{Cl}\\bullet$ chain carrier!). Further substitution creates a messy mixture of $\\text{CH}_2\\text{Cl}_2, \\text{CHCl}_3, \\text{CCl}_4$.\n  3. **Termination:** Two radicals combine ($\\text{Cl}\\bullet + \\text{Cl}\\bullet \\to \\text{Cl}_2$; $\\text{Cl}\\bullet + \\bullet\\text{CH}_3 \\to \\text{CH}_3\\text{Cl}$; and **$\\bullet\\text{CH}_3 + \\bullet\\text{CH}_3 \\to \\text{C}_2\\text{H}_6$**, diagnostic trace ethane!). Note that stratospheric **CFCs** undergo UV $\\text{C}-\\text{Cl}$ homolytic fission releasing catalytic $\\text{Cl}\\bullet$ that destroys ozone.',
      },
      {
        type: 'paragraph',
        markdown:
          '- **Heterolytic Fission, Nucleophiles & Electrophiles (R3.4.1–R3.4.5, Book pp. 628–634):** Both shared electrons move together onto one atom (full **double-barbed curly arrows**), forming positive and negative ions! Two complementary SL reaction classes apply heterolytic electron-pair sharing:\n  1. **Nucleophilic Substitution on Halogenoalkanes (R3.4.2–3):** A **nucleophile**—an electron-rich species possessing at least one **lone pair of electrons** (neutral $\\text{H}_2\\text{O}, \\text{NH}_3$ or anionic $\\text{HO}^-, \\text{CN}^-$; note $(\\text{CH}_3)_4\\text{N}^+$ lacks a lone pair so is NOT a nucleophile!)—attacks the electron-deficient $\\delta^+$ carbon bonded to $\\delta^-$ halogen, expelling halide leaving group: e.g., $\\text{CH}_3\\text{CH}_2\\text{Br} + \\text{OH}^- \\to \\text{CH}_3\\text{CH}_2\\text{OH} + \\text{Br}^-$.\n  2. **Electrophilic Addition to Alkenes (R3.4.4–5):** An **electrophile** (electron-pair acceptor such as $\\text{Br}_2$ via induced dipole, $\\text{HBr}$, or $\\text{H}_2\\text{O}$ with acid catalyst) attacks the high-electron-density $\\text{C}=\\text{C}$ double bond: e.g., $\\text{CH}_2=\\text{CH}_2 + \\text{Br}_2 \\to \\text{CH}_2\\text{BrCH}_2\\text{Br}$. Shaking an unknown hydrocarbon with **bromine water ($\\text{Br}_2(aq)$) in the dark** provides the classic SL unsaturation test: alkenes turn **orange-brown to colourless immediately**, whereas alkanes stay orange without UV light! *(Note: Lewis acids, $S_N1/S_N2$ kinetics, Markovnikov carbocations, and benzene nitration are HL-only R3.4.6–3.4.13.)*',
      },
      {
        type: 'playable_diagram',
        spec: CHEM_V3_ORGANIC_MECHANISMS_EXPLORER,
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Quantitative Redox Applications (Winkler BOD Method) & Mechanism Arrow Rules (R3.2–R3.4)',
      },
      {
        type: 'paragraph',
        markdown:
          'Redox stoichiometry and organic mechanism notation share strict markscheme conventions (*Bylikin* pp. 585–634):\n\n- **Redox Titration & Winkler Dissolved Oxygen Method (S1.4 + R3.2):** Chemists determine unknown reducing/oxidizing concentrations cleanly via self-indicating $\\text{MnO}_4^-$ (purple endpoint) or iodine–thiosulfate redox titrations ($\\text{I}_2 + 2\\text{S}_2\\text{O}_3^{2-} \\to 2\\text{I}^- + \\text{S}_4\\text{O}_6^{2-}$, starch indicator blue-black $\\to$ colourless). In the **Winkler method** for measuring aquatic dissolved oxygen / biological oxygen demand (**BOD**), dissolved $\\text{O}_2$ oxidizes $\\text{Mn}^{2+}$ under alkaline conditions, followed by acidification with excess $\\text{I}^-$ and thiosulfate titration giving an exact **$1\\text{ O}_2 : 4\\text{ S}_2\\text{O}_3^{2-}$** stoichiometric ratio ($n(\\text{O}_2) = \\frac{1}{4} n(\\text{S}_2\\text{O}_3^{2-})$)!\n- **Curly Arrow Drawing Rules (*Bylikin* pp. 624, 631):** Double-barbed curly arrows MUST originate cleanly from an **electron pair** (a lone pair on a nucleophile like $\\text{HO:}^-$, or a covalent $\\text{C}=\\text{C}$ / $\\text{C}-\\text{Br}$ bond) and terminate cleanly on the **electrophilic atom** or leaving atom—NEVER draw arrows from a positive nucleus or partial $\\delta^+$ charge! By contrast, **homolytic radical steps** use **half-headed fishhook arrows** originating from a single bond toward each separating atom.\n- **Unsaturated Polymer Hydrogenation & Green Hydrogenation:** Catalytic hydrogenation of polyunsaturated vegetable oils ($\\text{C}=\\text{C} + \\text{H}_2 \\xrightarrow{\\text{Ni},\\ 150^\\circ\\text{C}}$) lowers the **degree of unsaturation (IHD)**, letting saturated hydrocarbon chains pack closer together, raising London dispersion forces and converting liquid oils into spreadable solid fats.',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Strict SL Electrochemistry & Mechanism Boundaries (Do Not Bleed AHL)',
        markdown:
          '- **R3.2 SL covers** oxidation numbers, acidic half-equations, metal/halogen reactivity series, voltaic/secondary cells, molten salt electrolysis, and organic alcohol/carbonyl/alkene redox (`R3.2.1–R3.2.11`). Standard electrode potentials ($E^\\circ$), SHE, aqueous selective discharge, and electroplating Faraday laws belong strictly to HL.\n- **R3.4 SL covers** classifying nucleophiles/electrophiles, heterolytic fission, nucleophilic substitution equations on halogenoalkanes, and electrophilic addition on alkenes (`R3.4.1–R3.4.5`). $S_N1/S_N2$ kinetics, Markovnikov carbocation stability, and benzene nitration belong to HL.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Oxidizing Agent vs Reducing Agent',
            definitionMarkdown: 'Oxidizing agent accepts electrons (is itself reduced); reducing agent donates electrons (is itself oxidized).',
            markschemeKeyword: 'accepts electrons (reduced) / donates electrons (oxidized)',
          },
          {
            term: 'Anode & Cathode',
            definitionMarkdown: 'Anode is ALWAYS the site of oxidation (− in voltaic cells, + in electrolytic cells); cathode is ALWAYS the site of reduction (+ in voltaic, − in electrolytic).',
            markschemeKeyword: 'oxidation at anode / reduction at cathode',
          },
          {
            term: 'Homolytic vs Heterolytic Fission',
            definitionMarkdown: 'Homolytic splits a covalent bond evenly (1 $e^-$ each $\\to$ two radicals); heterolytic transfers both electrons to one atom ($\\to$ ions).',
            markschemeKeyword: 'equal 1e- to radicals vs both e- to one atom',
          },
          {
            term: 'Nucleophile',
            definitionMarkdown: 'Electron-rich species carrying a lone pair that forms a covalent bond by donating an electron pair to an electron-deficient centre.',
            markschemeKeyword: 'electron-pair donor / lone pair',
          },
          {
            term: 'Electrophile',
            definitionMarkdown: 'Electron-deficient species forming a covalent bond by accepting an electron pair from a high electron-density site such as a $\\text{C}=\\text{C}$ bond.',
            markschemeKeyword: 'electron-pair acceptor',
          },
        ],
      },
    ],
  },
];

