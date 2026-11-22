import type { ClassroomSeedFlashcard } from '../types';

export const CHEMISTRY_SL_FLASHCARDS: ClassroomSeedFlashcard[] = [
  // S1 Lab & Uncertainties (6)
  {
    topicCode: 'S1',
    frontMarkdown: 'What is the official IB Chemistry Data Booklet **molar volume of an ideal gas at STP** ($273.15\\text{ K}$, $100\\text{ kPa}$)?',
    backMarkdown: '**$22.7\\text{ dm}^3\\text{ mol}^{-1}$** (never use $22.4\\text{ dm}^3\\text{ mol}^{-1}$!).',
  },
  {
    topicCode: 'S1',
    frontMarkdown: 'What is the total absolute uncertainty in a titration volume $\\Delta V = V_f - V_i$ delivered from a $50.00\\text{ cm}^3$ burette ($\\pm 0.05\\text{ cm}^3$ per reading)?',
    backMarkdown: '**$\\pm 0.10\\text{ cm}^3$** (two meniscus readings subtracted $\\implies$ add absolute uncertainties: $0.05 + 0.05$). Record to 2 decimal places ending in $0$ or $5$.',
  },
  {
    topicCode: 'S1',
    frontMarkdown: 'How do you propagate uncertainties for **addition/subtraction** vs **multiplication/division**?',
    backMarkdown:
      '- **Addition/subtraction:** ADD **absolute** uncertainties ($\\delta y = \\delta a + \\delta b$).\n- **Multiplication/division:** ADD **percentage (relative)** uncertainties ($\\%\\delta y = \\%\\delta a + \\%\\delta b$), then convert back to $\\pm$ units.',
  },
  {
    topicCode: 'S1',
    frontMarkdown: 'State the *Lab INFO* rounding rule for final calculated uncertainties ($\\ge 2\\%$ vs $< 2\\%$).',
    backMarkdown:
      'Round absolute uncertainty to **1 significant figure** if relative uncertainty is $\\ge 2\\%$ (or **2 significant figures** if $< 2\\%$), then match the final value’s last decimal place to that uncertainty digit.',
  },
  {
    topicCode: 'S1',
    frontMarkdown: 'How do you diagnose whether **random** or **systematic** error dominates an experiment?',
    backMarkdown:
      'Compare **$\\%\\text{ error} = \\frac{|\\text{exp}-\\text{lit}|}{|\\text{lit}|}\\times 100\\%$** with total propagated **$\\%\\text{ uncertainty}$**. If $\\%\\text{ error} > \\%\\text{ uncertainty}$, directional **systematic error** dominates (not reduced by repeat trials).',
  },
  {
    topicCode: 'S1',
    frontMarkdown: 'Which glassware should be rinsed **only with deionized water** vs **with the solution it contains** before a titration?',
    backMarkdown:
      '- Rinse **conical flask and volumetric flask** ONLY with **deionized water** (residual titrant/analyte would change moles).\n- Rinse **burette and pipette** finally with the **solution they deliver** to prevent dilution.',
  },

  // S1.1 Particulate Nature of Matter (4)
  {
    topicCode: 'S1.1',
    frontMarkdown: 'Distinguish a **homogeneous mixture** from a **pure compound**.',
    backMarkdown:
      '**Homogeneous mixture:** uniform single phase with **variable** composition (e.g., brass, air, $\\text{NaCl}(aq)$); separates physically. **Pure compound:** fixed stoichiometric mass/atom ratio, sharp constant m.p./b.p.; requires chemical reaction to separate.',
  },
  {
    topicCode: 'S1.1',
    frontMarkdown: 'Explain why temperature remains constant along the melting and boiling plateaus of a heating curve.',
    backMarkdown:
      'Absorbed thermal energy increases **potential energy** by overcoming/breaking intermolecular forces rather than raising particle **average kinetic energy** ($T \\propto \\bar{E}_k$ stays constant).',
  },
  {
    topicCode: 'S1.1',
    frontMarkdown: 'Why is the vaporization plateau on a heating curve much wider than the melting plateau ($\\Delta H_{\\text{vap}} \\gg \\Delta H_{\\text{fus}}$)?',
    backMarkdown:
      'Melting merely loosens rigid crystal lattice contacts so particles can slide, whereas boiling must completely break **all** intermolecular forces and push back external pressure into the gas phase.',
  },
  {
    topicCode: 'S1.1',
    frontMarkdown: 'Convert $25.0^\\circ\\text{C}$ to Kelvin and compare average kinetic energy of $\\text{He}$ vs $\\text{CO}_2$ at $298\\text{ K}$.',
    backMarkdown:
      '$T = 25.0 + 273.15 = \\mathbf{298.15\\text{ K}}$. Both $\\text{He}$ and $\\text{CO}_2$ share the **exact same average kinetic energy** ($\\bar{E}_k = \\tfrac{3}{2}k_B T$ depends solely on $T$), though lighter $\\text{He}$ travels faster.',
  },

  // S1.2 Nuclear Atom & Mass Spectrometry (4)
  {
    topicCode: 'S1.2',
    frontMarkdown: 'Why do isotopes of an element share **identical chemical properties** yet slightly different physical properties?',
    backMarkdown:
      'Isotopes have the **same atomic number $Z$** and identical **valence electron configurations** (governing reactions), while differing neutron counts alter nuclear mass (changing density, b.p., and effusion rate).',
  },
  {
    topicCode: 'S1.2',
    frontMarkdown: 'State the exact IB definition of **relative atomic mass ($A_r$)**.',
    backMarkdown:
      'The **weighted mean mass** of the naturally occurring isotopes of an element relative to **$\\frac{1}{12}$ the mass of one unbound atom of carbon-12** (dimensionless—no units!).',
  },
  {
    topicCode: 'S1.2',
    frontMarkdown: 'Predict the $m/z$ peaks and relative intensity ratio for molecular $\\text{Cl}_2^+$ ions ($75\\%$ $^{35}\\text{Cl}$, $25\\%$ $^{37}\\text{Cl}$).',
    backMarkdown:
      '**$m/z = 70,\\ 72,\\ 74$** in a **$9 : 6 : 1$** binomial ratio ($P(35,35)=9/16$, $P(35,37)+P(37,35)=6/16$, $P(37,37)=1/16$).',
  },
  {
    topicCode: 'S1.2',
    frontMarkdown: 'What effect does forming a doubly charged cation ($^{24}\\text{Mg}^{2+}$) have on its peak position in a mass spectrum?',
    backMarkdown:
      'Because deflection depends on **$m/z$**, a $+2$ ion appears at **half its mass number** ($24/2 = m/z\\ \\mathbf{12}$).',
  },

  // S1.3 Electron Configurations & Spectra (5)
  {
    topicCode: 'S1.3',
    frontMarkdown: 'What is the exact value and unit of Planck’s constant **$h$** (Slide 25 fix)?',
    backMarkdown: '$h = \\mathbf{6.63 \\times 10^{-34}\\text{ J}\\cdot\\text{s}}$ (joule-seconds, NOT $\\text{J/s}$!).',
  },
  {
    topicCode: 'S1.3',
    frontMarkdown: 'Match the **Lyman**, **Balmer**, and **Paschen** hydrogen series to their lower shell $n_{\\text{low}}$ and electromagnetic region.',
    backMarkdown:
      '- **Lyman ($n_{\\text{low}} = 1$):** **UV** (largest $\\Delta E$; convergence $n=\\infty\\to 1$ equals $IE_1$).\n- **Balmer ($n_{\\text{low}} = 2$):** **Visible**.\n- **Paschen ($n_{\\text{low}} = 3$):** **Infrared**.',
  },
  {
    topicCode: 'S1.3',
    frontMarkdown: 'Explain why emission lines in each hydrogen spectral series **converge** at higher frequency.',
    backMarkdown:
      'Main energy shells get **progressively closer together** in energy as $n$ increases toward $n=\\infty$, so energy gaps $\\Delta E = hf$ crowd closer together at the high-frequency/short-wavelength limit.',
  },
  {
    topicCode: 'S1.3',
    frontMarkdown: 'Write the ground-state condensed electron configurations of neutral **$\\text{Cr}$ ($Z=24$)** and **$\\text{Cu}$ ($Z=29$)**.',
    backMarkdown:
      '- **$\\text{Cr}$:** $[\\text{Ar}]4s^1 3d^5$ (half-filled $3d^5$ stabilization)\n- **$\\text{Cu}$:** $[\\text{Ar}]4s^1 3d^{10}$ (filled $3d^{10}$ stabilization).',
  },
  {
    topicCode: 'S1.3',
    frontMarkdown: 'Which orbital loses electrons FIRST when a $3d$-block transition metal atom ionizes (e.g., $\\text{Fe} \\to \\text{Fe}^{2+}$)?',
    backMarkdown:
      '**Remove $4s$ electrons BEFORE $3d$**! Thus $\\text{Fe}$ ($[\\text{Ar}]4s^2 3d^6$) forms $\\text{Fe}^{2+} = \\mathbf{[\\text{Ar}]3d^6}$ and $\\text{Fe}^{3+} = \\mathbf{[\\text{Ar}]3d^5}$.',
  },

  // S1.4 The Mole (4)
  {
    topicCode: 'S1.4',
    frontMarkdown: 'In combustion analysis of an oxygen-containing organic compound $\\text{C}_x\\text{H}_y\\text{O}_z$, how must you determine $m(\\text{O})$?',
    backMarkdown:
      '**Subtract $m(\\text{C}) + m(\\text{H})$ from total original sample mass!** Never compute oxygen from $\\text{CO}_2$ and $\\text{H}_2\\text{O}$ directly because external $\\text{O}_2(g)$ entered during burning.',
  },
  {
    topicCode: 'S1.4',
    frontMarkdown: 'From $m(\\text{H}_2\\text{O})$ collected in combustion analysis, how do you calculate moles of hydrogen atoms $n(\\text{H})$?',
    backMarkdown: '$n(\\text{H}) = \\mathbf{2 \\times n(\\text{H}_2\\text{O})} = 2 \\times \\frac{m(\\text{H}_2\\text{O})}{18.02}$ (always double!).',
  },
  {
    topicCode: 'S1.4',
    frontMarkdown: 'What is the formula linking molarity before and after diluting a standard solution?',
    backMarkdown: '$c_1 V_1 = c_2 V_2$ (moles of solute stay constant while solvent increases; units of $V_1$ and $V_2$ simply match).',
  },
  {
    topicCode: 'S1.4',
    frontMarkdown: 'Distinguish **empirical formula** from **molecular formula** with an example.',
    backMarkdown:
      'Empirical shows the **simplest whole-number ratio** of atoms ($\\text{CH}_2\\text{O}$); molecular shows the **exact number of atoms in one molecule** ($\\text{C}_6\\text{H}_{12}\\text{O}_6 = 6 \\times \\text{CH}_2\\text{O}$).',
  },

  // S1.5 Ideal Gases (4)
  {
    topicCode: 'S1.5',
    frontMarkdown: 'State the two key assumptions of the **ideal gas model** and under what conditions real gases deviate most.',
    backMarkdown:
      'Ideal model assumes **negligible molecular volume** and **zero intermolecular forces**. Real gases deviate most at **high pressure** (volume not negligible) and **low temperature** (IMFs pull molecules together).',
  },
  {
    topicCode: 'S1.5',
    frontMarkdown: 'In $PV = nRT$ ($R = 8.31\\text{ J K}^{-1}\\text{ mol}^{-1}$), which two consistent $(P,\\ V)$ unit pairs work directly without extra conversion factors?',
    backMarkdown: 'Either **$P$ in $\\text{Pa}$ with $V$ in $\\text{m}^3$**, OR **$P$ in $\\text{kPa}$ with $V$ in $\\text{dm}^3$** ($T$ MUST always be in **Kelvin**!).',
  },
  {
    topicCode: 'S1.5',
    frontMarkdown: 'Between $\\text{He}$ and $\\text{NH}_3$ at $100\\text{ kPa}$ and $273\\text{ K}$, which behaves more ideally and why?',
    backMarkdown: '**$\\text{He}$** behaves far more ideally because it has tiny atomic volume and very weak LDFs, whereas polar $\\text{NH}_3$ forms strong hydrogen bonds.',
  },
  {
    topicCode: 'S1.5',
    frontMarkdown: 'Sketch mentally how $P$ vs $V$ differs from $P$ vs $1/V$ at constant $T$ and $n$.',
    backMarkdown: '$P$ vs $V$ is a **decreasing curve (hyperbola)**; $P$ vs $1/V$ is a **straight line passing through the origin $(0,0)$**.',
  },

  // S2.1 The Ionic Model (4)
  {
    topicCode: 'S2.1',
    frontMarkdown: 'Recall formulas and charges of all **seven core IB polyatomic ions**.',
    backMarkdown:
      '$\\text{NH}_4^+$ (ammonium), $\\text{OH}^-$ (hydroxide), $\\text{NO}_3^-$ (nitrate), $\\text{HCO}_3^-$ (hydrogencarbonate), $\\text{CO}_3^{2-}$ (carbonate), $\\text{SO}_4^{2-}$ (sulfate), $\\text{PO}_4^{3-}$ (phosphate).',
  },
  {
    topicCode: 'S2.1',
    frontMarkdown: 'Why do ionic crystals cleave **brittlely** under mechanical stress (Slide 5 fix)?',
    backMarkdown:
      'Shear shifts one ion plane so **LIKE charges ($+/+$ and $-/-$) align directly beside one another**; strong electrostatic **repulsion** splits the crystal cleanly.',
  },
  {
    topicCode: 'S2.1',
    frontMarkdown: 'Why does $\\text{MgO}$ ($2852^\\circ\\text{C}$) melt over $2000^\\circ\\text{C}$ higher than $\\text{NaCl}$ ($801^\\circ\\text{C}$)?',
    backMarkdown:
      '$\\text{Mg}^{2+}$ and $\\text{O}^{2-}$ have **higher ionic charges ($+2/-2$ vs $+1/-1$)** and **smaller ionic radii**, yielding vastly stronger electrostatic attraction in the crystal lattice.',
  },
  {
    topicCode: 'S2.1',
    frontMarkdown: 'Which charge carriers conduct electricity in molten/aqueous $\\text{NaCl}$ vs solid copper?',
    backMarkdown: 'Molten/aqueous $\\text{NaCl}$ conducts via **mobile ions**; solid/molten copper conducts via **delocalized electrons**.',
  },

  // S2.2 The Covalent Model (7 — strictly SL 2–4 domains)
  {
    topicCode: 'S2.2',
    frontMarkdown: 'Give the carbon–carbon bond lengths and enthalpies for $\\text{C–C}$, $\\text{C=C}$, and $\\text{C}\\equiv\\text{C}$.',
    backMarkdown:
      '$\\text{C–C}$: $154\\text{ pm},\\ 346\\text{ kJ mol}^{-1}$; $\\text{C=C}$: $134\\text{ pm},\\ 614\\text{ kJ mol}^{-1}$; $\\text{C}\\equiv\\text{C}$: $120\\text{ pm},\\ 839\\text{ kJ mol}^{-1}$. Higher bond order pulls nuclei tighter.',
  },
  {
    topicCode: 'S2.2',
    frontMarkdown: 'What is a **coordination (dative covalent) bond**, and give 3 classic SL examples?',
    backMarkdown:
      'A covalent bond in which **both shared electrons originate from one donor atom**. Examples: $\\text{NH}_4^+$, $\\text{H}_3\\text{O}^+$, $\\text{CO}$, and $\\text{Al}_2\\text{Cl}_6$.',
  },
  {
    topicCode: 'S2.2',
    frontMarkdown: 'List the **molecular shape and bond angle** for $\\text{CO}_2$, $\\text{BF}_3$, $\\text{SO}_2$, $\\text{CH}_4$, $\\text{NH}_3$, and $\\text{H}_2\\text{O}$.',
    backMarkdown:
      '$\\text{CO}_2$: linear $180^\\circ$; $\\text{BF}_3$: trigonal planar $120^\\circ$; $\\text{SO}_2$: bent $\\sim 117^\\circ$; $\\text{CH}_4$: tetrahedral $109.5^\\circ$; $\\text{NH}_3$: trigonal pyramidal $107^\\circ$; $\\text{H}_2\\text{O}$: bent $104.5^\\circ$.',
  },
  {
    topicCode: 'S2.2',
    frontMarkdown: 'Why are $\\text{BeCl}_2$ and $\\text{BF}_3$ stable SL exceptions to the octet rule?',
    backMarkdown:
      'Central Be ($4\\text{ valence } e^-$) and B ($6\\text{ valence } e^-$) form stable **incomplete octets** (electron-deficient molecules).',
  },
  {
    topicCode: 'S2.2',
    frontMarkdown: 'Contrast **diamond**, **graphite**, **$\\text{SiO}_2$**, and **$\\text{C}_{60}$ fullerene** (Day 2.2.9 p.5 fix!).',
    backMarkdown:
      'Diamond ($4$ bonds/C), graphite ($3$ bonds/C + $1$ delocalized $e^-$/C conductor), and $\\text{SiO}_2$ ($\\text{Si}=4\\text{O},\\ \\text{O}=2\\text{Si}$) are **giant covalent networks**. **$\\text{C}_{60}$ fullerene is simple molecular** held together by weak **LDFs** between cages.',
  },
  {
    topicCode: 'S2.2',
    frontMarkdown: 'State the Slide 1 fix for **London dispersion forces** and list the 2 factors increasing LDF strength.',
    backMarkdown:
      'LDFs occur between **ALL molecules (polar and non-polar!)**, increasing with (1) **molar mass / total electron count** and (2) **surface contact area** (unbranched $>$ branched isomers).',
  },
  {
    topicCode: 'S2.2',
    frontMarkdown: 'How is $R_f$ defined in paper/TLC chromatography, and why must the baseline use **pencil**?',
    backMarkdown:
      '$R_f = \\frac{\\text{solute distance}}{\\text{solvent front distance}}$ ($0<R_f<1$). Ink dissolves and travels up the plate with the mobile phase; graphite pencil does not.',
  },

  // S2.3 The Metallic Model (4 — strictly SL)
  {
    topicCode: 'S2.3',
    frontMarkdown: 'Define a **metallic bond** and state the Day 2.3 Slide 2 correction about electron location.',
    backMarkdown:
      'Electrostatic attraction between a lattice of positive metal cations and a sea of delocalized electrons. **Delocalized electrons move freely throughout the entire crystal and are NOT fixed to any single atom.**',
  },
  {
    topicCode: 'S2.3',
    frontMarkdown: 'Why are pure metals **malleable** whereas ionic crystals are brittle?',
    backMarkdown:
      'When metal layers slide along slip planes, **non-directional** attraction through the mobile electron sea stays intact rather than triggering like-charge cleavage.',
  },
  {
    topicCode: 'S2.3',
    frontMarkdown: 'Explain why melting point rises **$\\text{Na} < \\text{Mg} < \\text{Al}$** across Period 3.',
    backMarkdown:
      'Cation charge rises ($+1 \\to +2 \\to +3$), delocalized $e^-$/atom rises ($1 \\to 2 \\to 3$), and cation radius shrinks—greatly increasing charge density and metallic bond strength.',
  },
  {
    topicCode: 'S2.3',
    frontMarkdown: 'Explain why melting point **falls down Group 1** ($\\text{Li} > \\text{Na} > \\text{K} > \\text{Cs}$).',
    backMarkdown:
      'All Group 1 ions carry constant $+1$ charge ($1$ delocalized $e^-$), while adding electron shells increases ionic radius, spreading positive charge and weakening attraction to the electron sea.',
  },

  // S2.4 Materials (4 — strictly SL: no condensation polymers!)
  {
    topicCode: 'S2.4',
    frontMarkdown: 'Which two parameters locate a binary compound $\\text{AB}$ on the **van Arkel–Ketelaar bonding triangle**?',
    backMarkdown:
      '$x$-axis: **average electronegativity** $\\bar{\\chi} = \\frac{\\chi_A + \\chi_B}{2}$; $y$-axis: **electronegativity difference** $\\Delta\\chi = |\\chi_A - \\chi_B|$.',
  },
  {
    topicCode: 'S2.4',
    frontMarkdown: 'Where do **$\\text{AlCl}_3$** ($\\Delta\\chi \\approx 1.6$) and **$\\text{TlBr}$** ($\\Delta\\chi \\approx 1.2,\\ \\bar{\\chi} \\approx 2.4$) sit on the bonding continuum?',
    backMarkdown:
      'Both occupy the **mixed polar-covalent / ionic transition region** (note small high-charge $\\text{Al}^{3+}$ polarizes $\\text{Cl}^-$, forming molecular $\\text{Al}_2\\text{Cl}_6$ dimers!).',
  },
  {
    topicCode: 'S2.4',
    frontMarkdown: 'Distinguish **substitutional** vs **interstitial alloys**, and state why alloys are **mixtures**.',
    backMarkdown:
      'Substitutional (brass: $\\text{Zn}$ in $\\text{Cu}$) swaps similar-sized atoms; interstitial (steel: small $\\text{C}$ in $\\text{Fe}$ gaps) fills lattice voids. Alloys have variable composition and no fixed stoichiometry, making them mixtures.',
  },
  {
    topicCode: 'S2.4',
    frontMarkdown: 'Draw/describe the repeating unit of **poly(ethene)** and **PVC**, and state the atom economy of **addition polymerization**.',
    backMarkdown:
      'Open the $\\text{C=C}$ bond with trailing extension bonds through brackets: $-[\\text{CH}_2-\\text{CH}_2]_n-$ and $-[\\text{CH}_2-\\text{CHCl}]_n-$. Zero byproduct forms $\\implies$ **$100\\%$ atom economy**.',
  },

  // S3.1 Periodic Trends (6 — SL only)
  {
    topicCode: 'S3.1',
    frontMarkdown: 'Explain why atomic radius **decreases across Period 3** yet **increases down Group 1**.',
    backMarkdown:
      'Across Period 3: nuclear charge rises within the **same shell** ($n=3$), roughly constant shielding raises $Z_{\\text{eff}}$ and pulls electrons inward. Down Group 1: each element adds a **new outer shell**, increasing distance and shielding.',
  },
  {
    topicCode: 'S3.1',
    frontMarkdown: 'Order the $10e^-$ isoelectronic ions $\\text{N}^{3-},\\ \\text{O}^{2-},\\ \\text{F}^-,\\ \\text{Na}^+,\\ \\text{Mg}^{2+},\\ \\text{Al}^{3+}$ by increasing radius.',
    backMarkdown:
      '$\\mathbf{\\text{Al}^{3+} < \\text{Mg}^{2+} < \\text{Na}^+ < \\text{F}^- < \\text{O}^{2-} < \\text{N}^{3-}}$ (equal electron counts, shrinking steadily as proton number $Z$ climbs $7 \\to 13$).',
  },
  {
    topicCode: 'S3.1',
    frontMarkdown: 'Account for the two fine $IE_1$ dips in Period 3 (**$\\text{Mg}\\to\\text{Al}$** and **$\\text{P}\\to\\text{S}$**).',
    backMarkdown:
      '- **$\\text{Mg}\\to\\text{Al}$:** $3p^1$ electron occupies a higher-energy subshell shielded by filled $3s^2$.\n- **$\\text{P}\\to\\text{S}$:** $4$th $3p$ electron pairs in an already occupied $3p$ orbital, creating **spin-pairing electron repulsion**.',
  },
  {
    topicCode: 'S3.1',
    frontMarkdown: 'State the Period 3 oxide acid–base continuum and write equations for $\\text{Na}_2\\text{O}$ and $\\text{SO}_3$ with water.',
    backMarkdown:
      'Basic ($\\text{Na}_2\\text{O}, \\text{MgO}$) $\\to$ amphoteric ($\\text{Al}_2\\text{O}_3$) $\\to$ acidic ($\\text{SiO}_2, \\text{P}_4\\text{O}_{10}, \\text{SO}_2, \\text{SO}_3$). $\\text{Na}_2\\text{O} + \\text{H}_2\\text{O} \\to 2\\text{NaOH}$; $\\text{SO}_3 + \\text{H}_2\\text{O} \\to \\text{H}_2\\text{SO}_4$.',
  },
  {
    topicCode: 'S3.1',
    frontMarkdown: 'Why do Group 1 metals get **more reactive** down the group while Group 17 halogens get **less reactive** down the group?',
    backMarkdown:
      'Down Group 1, outer $ns^1$ sits farther with greater shielding $\\implies$ lower $IE_1$ makes **electron loss easier**. Down Group 17, larger radius weakens nuclear pull $\\implies$ harder to **gain an electron** as oxidizing agent.',
  },
  {
    topicCode: 'S3.1',
    frontMarkdown: 'Give the two common oxidation state exceptions for **H** and **O** (with examples and correct sign format).',
    backMarkdown:
      '**H = $-1$** in metal hydrides ($\\text{NaH},\\ \\text{CaH}_2$); **O = $-1$** in peroxides ($\\text{H}_2\\text{O}_2,\\ \\text{Na}_2\\text{O}_2$, and $+2$ in $\\text{OF}_2$). Always write sign BEFORE digit ($+5$, $-1$)!',
  },

  // S3.2 Organic Functional Groups & Isomerism (6 — STRICT SL ONLY)
  {
    topicCode: 'S3.2',
    frontMarkdown: 'Distinguish a **full structural formula** from a **skeletal formula**.',
    backMarkdown:
      '**Full structural (displayed):** draws EVERY atom and EVERY covalent bond explicitly (including $\\text{O–H}$ and $\\text{C–H}$). **Skeletal:** carbon vertices and $\\text{C–H}$ hydrogens omitted; heteroatoms ($\\text{O, N, X}$) and their attached H MUST be shown.',
  },
  {
    topicCode: 'S3.2',
    frontMarkdown: 'Give three features shared by all members of a **homologous series**.',
    backMarkdown:
      '(1) Same functional group & similar chemical reactions; (2) same general formula differing by successive **$-\\text{CH}_2-$** units; (3) gradual trend in physical properties (b.p. rises with LDFs).',
  },
  {
    topicCode: 'S3.2',
    frontMarkdown: 'Distinguish the functional groups of an **aldehyde**, **ketone**, **carboxylic acid**, **ester**, and **ether**.',
    backMarkdown:
      'Aldehyde: terminal $-\\text{CHO}$; Ketone: internal $\\text{C–CO–C}$; Carboxylic acid: $-\\text{COOH}$; Ester: $-\\text{COO–R}$; Ether: $\\text{R–O–R}\'$.',
  },
  {
    topicCode: 'S3.2',
    frontMarkdown: 'How do you name any ester $\\text{RCOOR}\'$ using IUPAC rules?',
    backMarkdown:
      'Write the alcohol-derived **$R\'$ alkyl** prefix first, followed by the carboxylic-acid-derived **$R\\text{COO}-$ alkanoate** stem (e.g., $\\text{CH}_3\\text{CH}_2\\text{COOCH}_3$ = **methyl propanoate**).',
  },
  {
    topicCode: 'S3.2',
    frontMarkdown: 'Name the three SL subclasses of **structural isomers** with one pair of examples for each.',
    backMarkdown:
      '- **Chain:** butane vs 2-methylpropane ($\\text{C}_4\\text{H}_{10}$).\n- **Positional:** propan-1-ol vs propan-2-ol ($\\text{C}_3\\text{H}_8\\text{O}$).\n- **Functional group:** ethanol vs methoxymethane ($\\text{C}_2\\text{H}_6\\text{O}$) OR propanal vs propanone.',
  },
  {
    topicCode: 'S3.2',
    frontMarkdown: 'How do you classify $1^\\circ, 2^\\circ, 3^\\circ$ **alcohols** vs $1^\\circ, 2^\\circ, 3^\\circ$ **amines**?',
    backMarkdown:
      'Alcohols/halogenoalkanes count carbons attached to the **$\\text{C}$ bearing $-\\text{OH}$/$\\text{X}$**; amines count carbons attached directly to the **$\\text{N}$ atom**!',
  },

  // R1.1–R1.3 Energetics & Fuels (9 — STRICT SL: no R1.4!)
  {
    topicCode: 'R1.1',
    frontMarkdown: 'Compare **exothermic** and **endothermic** enthalpy signs, temperature changes, and product stability.',
    backMarkdown:
      '**Exothermic ($\\Delta H < 0$):** heat exits system $\\to$ surroundings warm ($\\Delta T > 0$); products sit at **lower enthalpy** (more stable).\n**Endothermic ($\\Delta H > 0$):** heat absorbed from surroundings ($\\Delta T < 0$); products sit **higher in enthalpy**.',
  },
  {
    topicCode: 'R1.1',
    frontMarkdown: 'Why must coffee-cup calorimetry extrapolate a **cooling curve** back to time of mixing $t_0$?',
    backMarkdown:
      'To correct for **systematic thermal heat loss** occurring between mixing and peak thermometer equilibration.',
  },
  {
    topicCode: 'R1.1',
    frontMarkdown: 'What mass $m$ goes into $q = mc\\Delta T$ when dissolving $1.5\\text{ g}$ of $\\text{NaOH}$ in $100\\text{ cm}^3$ of water?',
    backMarkdown:
      'Mass of the **aqueous water/solution ($100\\text{ g}$)** absorbing heat—NEVER plug only the solid solute or spirit-burner fuel mass into $mc\\Delta T$!',
  },
  {
    topicCode: 'R1.2',
    frontMarkdown: 'Write the bond-enthalpy formula for $\\Delta H_r$ and name its **two built-in approximations**.',
    backMarkdown:
      '$\\Delta H \\approx \\sum E(\\text{bonds broken}) - \\sum E(\\text{bonds formed})$. Limitations: (1) uses **mean averages** across molecules, and (2) applies strictly to **gaseous state** (ignores vaporization enthalpy of liquids/solids).',
  },
  {
    topicCode: 'R1.2',
    frontMarkdown: 'Write Hess’s law equations using $\\Delta H_f^\\circ$ data vs $\\Delta H_c^\\circ$ data (watch the subtraction order!).',
    backMarkdown:
      '- **Formation:** $\\Delta H_r^\\circ = \\sum \\Delta H_f^\\circ(\\text{products}) - \\sum \\Delta H_f^\\circ(\\text{reactants})$ ($\\Delta H_f^\\circ(\\text{element})=0$).\n- **Combustion:** $\\Delta H_r^\\circ = \\sum \\Delta H_c^\\circ(\\text{reactants}) - \\sum \\Delta H_c^\\circ(\\text{products})$.',
  },
  {
    topicCode: 'R1.3',
    frontMarkdown: 'Compare the combustion products and biological hazard of **incomplete** hydrocarbon combustion.',
    backMarkdown:
      'Insufficient $\\text{O}_2$ produces **carbon monoxide ($\\text{CO}$, binds irreversibly to haemoglobin blocking $\\text{O}_2$ transport)** and **carbon soot ($\\text{C}(s)$ particulates)** with lower energy release.',
  },
  {
    topicCode: 'R1.3',
    frontMarkdown: 'Distinguish **specific energy** from **energy density** with units, and rank $\\text{H}_2$, $\\text{CH}_4$, and $\\text{C}_2\\text{H}_5\\text{OH}$ by specific energy.',
    backMarkdown:
      '**Specific energy** $= \\text{kJ g}^{-1}$ (mass basis); **energy density** $= \\text{kJ dm}^{-3}$ (volume basis). Specific energy ranks **$\\text{H}_2 > \\text{CH}_4 > \\text{C}_2\\text{H}_5\\text{OH}$** (partial oxidation in ethanol lowers energy per gram).',
  },
  {
    topicCode: 'R1.3',
    frontMarkdown: 'Write the acidic PEM **hydrogen fuel cell** half-equations at anode and cathode.',
    backMarkdown:
      'Anode (oxidation): $\\text{H}_2 \\to 2\\text{H}^+ + 2e^-$; Cathode (reduction): $\\text{O}_2 + 4\\text{H}^+ + 4e^- \\to 2\\text{H}_2\\text{O}$. Overall: $2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O}$.',
  },
  {
    topicCode: 'R1.3',
    frontMarkdown: 'Why are biofuels like bioethanol often questioned as strictly "carbon-neutral"?',
    backMarkdown:
      'Although photosynthesis balances combustion $\\text{CO}_2$, fossil fuels power tractors, fertilizers, distillation, and transport (plus land-use emissions).',
  },

  // R2.1–R2.3 Stoichiometry, Kinetics & Equilibrium (10 — SL ONLY!)
  {
    topicCode: 'R2.1',
    frontMarkdown: 'Define **percentage yield** vs **percentage atom economy**, and state which reaction class achieves $100\\%$ atom economy.',
    backMarkdown:
      'Yield $= \\frac{\\text{exp mass}}{\\text{theo mass}}\\times 100\\%$; Atom economy $= \\frac{\\sum M(\\text{desired product})}{\\sum M(\\text{all reactants})}\\times 100\\%$. **Addition reactions / addition polymerizations** achieve $100\\%$ atom economy.',
  },
  {
    topicCode: 'R2.1',
    frontMarkdown: 'How do you identify the **limiting reactant** given moles $n_A, n_B$ for $a\\text{A} + b\\text{B} \\to \\text{products}$?',
    backMarkdown: 'Divide each mole quantity by its balanced stoichiometric coefficient ($n_A/a$ vs $n_B/b$): the **smaller ratio** is limiting.',
  },
  {
    topicCode: 'R2.1',
    frontMarkdown: 'What volume does $0.50\\text{ mol}$ of $\\text{O}_2(g)$ occupy at IB STP ($273.15\\text{ K},\\ 100\\text{ kPa}$)?',
    backMarkdown: '$0.50 \\times 22.7 = \\mathbf{11.35\\text{ dm}^3}$ ($11.4\\text{ dm}^3$ to 3 s.f.).',
  },
  {
    topicCode: 'R2.2',
    frontMarkdown: 'State the two requirements of **collision theory** for a collision to react.',
    backMarkdown: '(1) Kinetic energy equal to or greater than **activation energy ($E \\ge E_a$)**; (2) **correct steric collision orientation**.',
  },
  {
    topicCode: 'R2.2',
    frontMarkdown: 'Explain on a **Maxwell–Boltzmann curve** how (a) raising temperature vs (b) adding a catalyst speeds a reaction.',
    backMarkdown:
      '(a) Higher $T$ flattens/right-shifts the curve so a larger area exceeds $E_a$. (b) A catalyst leaves the curve **unchanged** and lowers the $E_a$ line leftward via an alternative pathway.',
  },
  {
    topicCode: 'R2.2',
    frontMarkdown: 'Name five SL laboratory techniques for continuously monitoring reaction rate.',
    backMarkdown: '(1) Gas syringe volume; (2) balance mass loss ($\\text{CO}_2$); (3) colorimetry absorbance; (4) pH/conductivity probe; (5) quenching + titration.',
  },
  {
    topicCode: 'R2.3',
    frontMarkdown: 'Give the two defining conditions of **dynamic equilibrium** in a closed system.',
    backMarkdown: '(1) Rate of forward reaction **equals** rate of reverse reaction ($r_f = r_r > 0$); (2) macroscopic concentrations remain **constant** (not equal!).',
  },
  {
    topicCode: 'R2.3',
    frontMarkdown: 'How do $Q < K_c$ and $Q > K_c$ predict the net direction of shift toward equilibrium?',
    backMarkdown: '$Q < K_c \\implies$ too many reactants, shifts **right** (forward); $Q > K_c \\implies$ too many products, shifts **left** (reverse).',
  },
  {
    topicCode: 'R2.3',
    frontMarkdown: 'Which perturbation is the **ONLY** factor capable of changing the numerical value of $K_c$?',
    backMarkdown: '**Temperature ($T$)** alone! Concentration, pressure, and catalysts change $Q$ or rate, NEVER $K_c$.',
  },
  {
    topicCode: 'R2.3',
    frontMarkdown: 'State why the **Haber process** ($\\Delta H = -92\\text{ kJ mol}^{-1}$) runs at compromise $450^\\circ\\text{C}$ and $200\\text{ atm}$ with an $\\text{Fe}$ catalyst.',
    backMarkdown:
      'Lower $T$ maximizes equilibrium $\\text{NH}_3$ yield, yet $450^\\circ\\text{C}$ + $\\text{Fe}$ catalyst prevents unacceptably slow rate; high $200\\text{ atm}$ pressure favours fewer gas moles ($4\\to 2$) within equipment cost/safety limits.',
  },

  // R3.1 Proton Transfer Acids & Bases (6 — SL ONLY!)
  {
    topicCode: 'R3.1',
    frontMarkdown: 'Define a **Brønsted–Lowry acid**, **base**, and **conjugate acid–base pair**.',
    backMarkdown: 'Acid = **proton ($\\text{H}^+$) donor**; Base = **proton acceptor**; Conjugate pair = two species differing by **exactly one $\\text{H}^+$** (e.g., $\\text{H}_2\\text{SO}_4 / \\text{HSO}_4^-$).',
  },
  {
    topicCode: 'R3.1',
    frontMarkdown: 'Distinguish **amphiprotic** (e.g., $\\text{HCO}_3^-$) from **amphoteric** (e.g., $\\text{Al}_2\\text{O}_3$).',
    backMarkdown: '**Amphiprotic** can both donate AND accept a proton $\\text{H}^+$; **amphoteric** reacts as acid or base generally ($\\text{Al}_2\\text{O}_3$ has no $\\text{H}^+$ so is amphoteric, not amphiprotic).',
  },
  {
    topicCode: 'R3.1',
    frontMarkdown: 'If $\\text{pH}$ rises by $2.0$ units (e.g., diluting a strong acid $100\\times$), how does $[\\text{H}^+]$ change?',
    backMarkdown: '$[\\text{H}^+]$ **decreases by $10^2 = 100$-fold** ($\\text{pH} = -\\log_{10}[\\text{H}^+]$).',
  },
  {
    topicCode: 'R3.1',
    frontMarkdown: 'Write $K_w$ at $298\\text{ K}$ and explain why pure water at $350\\text{ K}$ ($\\text{pH} \\approx 6.3$) is **still neutral**.',
    backMarkdown: '$K_w = [\\text{H}^+][\\text{OH}^-] = 1.00\\times 10^{-14}$ ($298\\text{ K}$). Endothermic auto-ionization shifts right with heat, keeping **$[\\text{H}^+] = [\\text{OH}^-]$** strictly neutral.',
  },
  {
    topicCode: 'R3.1',
    frontMarkdown: 'List three experimental tests distinguishing equimolar **$0.10\\text{ M HCl}$** vs **$0.10\\text{ M CH}_3\\text{COOH}$**.',
    backMarkdown: '$\\text{HCl}$ shows: (1) **lower pH** ($1.0$ vs $\\sim 2.9$); (2) **higher electrical conductivity**; (3) **faster bubbling rate** with $\\text{Mg}$ or $\\text{CaCO}_3$ (same $\\text{NaOH}$ titre volume!).',
  },
  {
    topicCode: 'R3.1',
    frontMarkdown: 'Why do all strong acid + strong alkali neutralizations share $\\Delta H_{\\text{neut}}^\\circ \\approx -57.3\\text{ kJ mol}^{-1}$?',
    backMarkdown: 'Spectator ions cancel completely leaving the identical net ionic reaction: $\\text{H}^+(aq) + \\text{OH}^-(aq) \\to \\text{H}_2\\text{O}(l)$.',
  },

  // R3.2 Redox & Electrochemistry + Organic Redox (7 — SL ONLY!)
  {
    topicCode: 'R3.2',
    frontMarkdown: 'Define **oxidizing agent** vs **reducing agent** in electron-transfer terms.',
    backMarkdown: '**Oxidizing agent:** accepts electrons and **is itself reduced**; **Reducing agent:** donates electrons and **is itself oxidized** (OIL RIG).',
  },
  {
    topicCode: 'R3.2',
    frontMarkdown: 'List the 4-step procedure to balance any redox half-equation in **acidic aqueous solution**.',
    backMarkdown: '(1) Balance main element; (2) balance $\\text{O}$ with **$\\text{H}_2\\text{O}$**; (3) balance $\\text{H}$ with **$\\text{H}^+$**; (4) balance charge with **$e^-$**.',
  },
  {
    topicCode: 'R3.2',
    frontMarkdown: 'Compare electrode reactions and **polarity signs** in a **voltaic cell** vs a **molten electrolytic cell**.',
    backMarkdown:
      '**AN OX / RED CAT holds in BOTH!** However: **Voltaic:** anode is **negative ($-$)**, cathode is **positive ($+$)**. **Electrolytic:** anode is **positive ($+$)**, cathode is **negative ($-$)**.',
  },
  {
    topicCode: 'R3.2',
    frontMarkdown: 'Write the function of a **salt bridge** in a voltaic cell and give a valid electrolyte ($\\text{Zn}|\\text{Zn}^{2+}\\|\\text{Cu}^{2+}|\\text{Cu}$).',
    backMarkdown:
      'Allows **ion migration** ($\\text{KNO}_3(aq)$: anions $\\to$ anode, cations $\\to$ cathode) to balance charge and complete the electrical circuit without mixing half-cell electrolytes.',
  },
  {
    topicCode: 'R3.2',
    frontMarkdown: 'Write overall discharge reactions for the **lithium-ion** and **lead–acid** secondary batteries.',
    backMarkdown:
      'Li-ion: $\\text{Li} + \\text{CoO}_2 \\to \\text{LiCoO}_2$; Lead–acid: $\\text{Pb} + \\text{PbO}_2 + 2\\text{HSO}_4^- + 2\\text{H}^+ \\to 2\\text{PbSO}_4 + 2\\text{H}_2\\text{O}$ (reversible on charging).',
  },
  {
    topicCode: 'R3.2',
    frontMarkdown: 'Compare products and conditions when oxidizing $1^\\circ$, $2^\\circ$, and $3^\\circ$ alcohols with $\\text{K}_2\\text{Cr}_2\\text{O}_7/\\text{H}^+$ (**orange $\\to$ green**).',
    backMarkdown:
      '- **$1^\\circ$:** **distill** off **aldehyde**; **reflux** with excess oxidant $\\to$ **carboxylic acid**.\n- **$2^\\circ$:** reflux $\\to$ **ketone**.\n- **$3^\\circ$:** **no reaction** (stays orange).',
  },
  {
    topicCode: 'R3.2',
    frontMarkdown: 'State reagents used to **reduce** carbonyls/carboxylic acids vs **alkenes/alkynes**.',
    backMarkdown:
      'Aldehydes/ketones reduce with **$\\text{NaBH}_4$** (or $\\text{LiAlH}_4$ for acids too); unsaturated $\\text{C=C}$/$\\text{C}\\equiv\\text{C}$ bonds reduce by catalytic hydrogenation (**$\\text{H}_2(g)/\\text{Ni},\\ 150^\\circ\\text{C}$**).',
  },

  // R3.3 & R3.4 Mechanisms (7 — SL ONLY!)
  {
    topicCode: 'R3.3',
    frontMarkdown: 'Define **homolytic fission** and **free radical**, and name the arrow type used.',
    backMarkdown:
      'Covalent bond splits **evenly** leaving **one unpaired electron** on each fragment (**free radical**); drawn using single-barbed **fishhook arrows** (initiated by **UV light**).',
  },
  {
    topicCode: 'R3.3',
    frontMarkdown: 'Write initiation, propagation, and ethane-forming termination for $\\text{CH}_4 + \\text{Cl}_2 \\xrightarrow{\\text{UV}}$.',
    backMarkdown:
      'Initiation: $\\text{Cl}_2 \\xrightarrow{\\text{UV}} 2\\text{Cl}\\bullet$; Prop: $\\text{CH}_4 + \\text{Cl}\\bullet \\to \\bullet\\text{CH}_3 + \\text{HCl}$ & $\\bullet\\text{CH}_3 + \\text{Cl}_2 \\to \\text{CH}_3\\text{Cl} + \\text{Cl}\\bullet$; Term: $2\\bullet\\text{CH}_3 \\to \\text{C}_2\\text{H}_6$.',
  },
  {
    topicCode: 'R3.3',
    frontMarkdown: 'Why does UV halogenation of alkanes give a poor yield of a single halogenoalkane?',
    backMarkdown:
      'Reactive $\\text{Cl}\\bullet$ radicals continue abstracting hydrogens from $\\text{CH}_3\\text{Cl}$ to form polysubstituted products ($\\text{CH}_2\\text{Cl}_2,\\ \\text{CHCl}_3,\\ \\text{CCl}_4$) alongside termination alkanes.',
  },
  {
    topicCode: 'R3.4',
    frontMarkdown: 'Define **heterolytic fission** and how curly arrows must be drawn.',
    backMarkdown:
      'Covalent bond breaks **unevenly** so **both shared electrons transfer to one atom** (forming ions); represented by a full **double-barbed curly arrow** starting from an electron pair/bond.',
  },
  {
    topicCode: 'R3.4',
    frontMarkdown: 'What defines a **nucleophile**, and why is $(\\text{CH}_3)_4\\text{N}^+$ NOT a nucleophile?',
    backMarkdown:
      'An **electron-pair donor** carrying a **lone pair** (e.g., $\\text{HO}^-, \\text{CN}^-, \\text{NH}_3, \\text{H}_2\\text{O}$) attacking $\\delta^+$ centres. $(\\text{CH}_3)_4\\text{N}^+$ has no lone pair left on nitrogen.',
  },
  {
    topicCode: 'R3.4',
    frontMarkdown: 'Write the nucleophilic substitution equation between bromoethane and aqueous hydroxide ion.',
    backMarkdown: '$\\text{CH}_3\\text{CH}_2\\text{Br} + \\text{OH}^- \\to \\text{CH}_3\\text{CH}_2\\text{OH} + \\text{Br}^-$ ($\\text{OH}^-$ = nucleophile, $\\text{Br}^-$ = leaving group).',
  },
  {
    topicCode: 'R3.4',
    frontMarkdown: 'Describe the chemical test distinguishing an **alkene** from an **alkane** in the dark (reaction type & observation).',
    backMarkdown:
      'Shake with **bromine water ($\\text{Br}_2(aq)$)** in the dark: alkenes undergo **electrophilic addition**, rapidly turning **orange-brown to colourless**; alkanes remain orange without UV light.',
  },
];
