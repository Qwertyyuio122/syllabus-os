import type {
  ConceptComparisonMatrixSpec,
  LabeledExplorerSpec,
  PrimarySourceAnalyzerSpec,
  StepMechanismSpec,
  TimelineCausalitySpec,
  WorkedExampleSpec,
} from '@/types/diagrams';

// ===========================================================================
// GUIDE 1 (P3.1): Liberal Italy & Mussolini's Rise and Consolidation (1890-1940)
// ===========================================================================

export const HIST_V3_ITALY_RISE_TIMELINE: TimelineCausalitySpec = {
  type: 'timeline_causality',
  id: 'hist-v3-italy-rise-timeline',
  title: 'From Liberal Fragility to Fascist Dictatorship: Italy (1890–1940)',
  caption:
    'Aligned to Pearson 2026 Ch. 1.1–1.2 & IB 11 Italy 1890–1939. Filter by regime phase or May 2028 Historical Concepts.',
  categories: [
    'Liberal Fragility',
    'Postwar Crisis & Rise',
    'Legal Consolidation',
    'Totalitarian State & Axis',
  ],
  concepts: [
    'Cause & Consequence',
    'Continuity & Change',
    'Perspectives',
    'Significance',
  ],
  events: [
    {
      id: 'italy-1896-giolitti',
      dateLabel: '1890–1914',
      title: 'Trasformismo, Mezzogiorno Divide & Adowa (1896)',
      category: 'Liberal Fragility',
      conceptTags: ['Cause & Consequence', 'Continuity & Change'],
      summaryMarkdown:
        'Unification (1861–70) left a structural chasm between the industrial North (Fiat producing ~4,000 cars/year by 1913) and the agrarian *latifundia* South (*Mezzogiorno*), deepened by Pope Pius IX’s *Non Expedit* (1868) boycott of Catholic participation. Centrist coalitions under Depretis, Crispi (humiliated by Ethiopia at **Adowa, 1896**), and **Giovanni Giolitti** (1903–14) survived through **trasformismo** bargaining rather than programmatic parties—even as the 1911–12 Libya War and universal male suffrage culminated in June 1914 *Red Week* strikes.',
      significanceMarkdown:
        'Revealed chronic parliamentary illegitimacy and nationalist humiliation before 1914, giving Mussolini pre-built grievances (*Terra Irredenta*, anti-liberalism) to exploit after WWI.',
      historiographyNotes: [
        {
          historian: 'Benedetto Croce',
          school: 'Liberal-Idealist ("Parenthesis" Thesis)',
          argument:
            'Interpreted Fascism as an external moral aberration triggered by WWI that interrupted Giolittian Italy’s progressive liberal trajectory.',
        },
        {
          historian: 'Denis Mack Smith',
          school: 'Critical Continuity Thesis',
          argument:
            'Contended that trasformismo cynicism, clientelism, and imperial vanity inside Liberal Italy itself directly bred authoritarian collapse.',
        },
      ],
    },
    {
      id: 'italy-1915-1920',
      dateLabel: '1915–1920',
      title: 'Treaty of London, "Mutilated Victory", Fiume & Biennio Rosso',
      category: 'Postwar Crisis & Rise',
      conceptTags: ['Cause & Consequence', 'Significance'],
      summaryMarkdown:
        'Expelled from the PSI in Nov 1914 over his interventionist "U-turn" at *Il Popolo d’Italia*, Mussolini saw Italy enter WWI under the secret **April 1915 Treaty of London**. Despite ~650,000 dead and national debt jumping from 16 to 85 billion lire (1914–19), President Wilson blocked Dalmatia and Fiume at Paris. **Gabriele D’Annunzio’s Sept 1919 seizure of Fiume** pioneered blackshirt theatre while **Biennio Rosso (1919–20)** saw ~2 million unionized workers occupy factories and farms, driving terrified *agrari* landowners and industrialists to finance *squadre d’azione* led by local *Ras* (Italo Balbo, Dino Grandi).',
      primarySourceQuote:
        '"Therefore we create Fasci: organs of creation and agitation... We, we alone, have the right to the succession, because we were the men who forced the country into war and into victory." — Benito Mussolini, Il Popolo d’Italia, March 1919.',
      significanceMarkdown:
        'Fused nationalist betrayal (*vittoria mutilata*) with anti-socialist panic—even though **Alan Cassels** and **Denis Mack Smith** note PSI disunity meant true Bolshevik revolution had faded by 1921.',
      historiographyNotes: [
        {
          historian: 'Alan Cassels (1969)',
          school: 'Revisionist Empiricism',
          argument:
            'Argued Italy faced uncoordinated economic revolts rather than an organized Bolshevik plan during Biennio Rosso, making Fascist violence opportunistic rather than defensive.',
        },
      ],
    },
    {
      id: 'italy-1921-1922',
      dateLabel: '1921–Oct 1922',
      title: 'PNF Shift Right, General Strike & March on Rome',
      category: 'Postwar Crisis & Rise',
      conceptTags: ['Cause & Consequence', 'Perspectives'],
      summaryMarkdown:
        'After winning 35 seats in Giolitti’s May 1921 *Blocco Nazionale*, Mussolini converted the *Fasci* into the **Partito Nazionale Fascista (PNF)** (Nov 1921), jettisoning 1919 anti-clerical/republican planks to court the Vatican, monarchists, and *Confindustria*. When left-wing unions botched the July–Aug 1922 "legalitarian" general strike, Blackshirts crushed strikers as self-styled restorers of order. On 24–29 October 1922, ~30–40,000 poorly armed *squadristi* mobilized while **King Victor Emmanuel III** refused PM Luigi Facta’s martial-law decree and appointed Mussolini PM legally on 29 October.',
      significanceMarkdown:
        'Mussolini traveled to Rome by sleeper train rather than conquering it by arms—demonstrating elite miscalculation that Fascism could be constitutionally "tamed."',
      historiographyNotes: [
        {
          historian: 'Renzo De Felice (1974)',
          school: 'Liberal-Revisionist',
          argument:
            'Maintained Victor Emmanuel III acted pragmatically out of fear of army disloyalty and civil war amid liberal cabinet collapse.',
        },
        {
          historian: 'Emilio Gentile (2005)',
          school: 'Ideological-Cultural Revisionist',
          argument:
            'Argued the King and establishment fatally underestimated Fascism’s revolutionary totalitarian ambitions, assuming parliamentary co-optation would domesticate Mussolini.',
        },
      ],
    },
    {
      id: 'italy-1923-1924',
      dateLabel: '1923–June 1924',
      title: 'MVSN, Corfu (1923), Acerbo Law & Matteotti Murder',
      category: 'Legal Consolidation',
      conceptTags: ['Continuity & Change', 'Cause & Consequence'],
      summaryMarkdown:
        'Converting the *squadre* into the state-salaried **MVSN** and creating the **Fascist Grand Council** (Dec 1922) curbed independent *Ras* while preserving coalition camouflage. After bombing Corfu in Aug 1923 to extract 50M lire from Greece, Mussolini passed the **Acerbo Law** (July 1923, guaranteeing 2/3 of seats to any list winning ≥25%), taking 65% in April 1924 amid **Ceka** intimidation (>100 killed). When Socialist deputy **Giacomo Matteotti** denounced the fraud and was murdered by Amerigo Dumini’s squad on 10 June 1924, opposition MPs staged the futile **Aventine Secession**—leaving the King unwilling to dismiss Mussolini.',
      significanceMarkdown:
        'Exposed the lethal synergy of legalism and street terror; instead of toppling Mussolini, Aventine abstention cleared parliament and provoked hardline *Ras* to demand full dictatorship.',
      historiographyNotes: [
        {
          historian: 'Martin Blinkhorn (1984/2006)',
          school: 'Synthesis / Political History',
          argument:
            'Identified the Matteotti Crisis as the decisive regime pivot—forcing Mussolini either to fall to conservative scrutiny or break with constitutionalism altogether.',
        },
      ],
    },
    {
      id: 'italy-1925-1927',
      dateLabel: '1925–1928',
      title: 'Jan 3 Speech, Leggi Fascistissime, OVRA & One-Party Plebiscite',
      category: 'Legal Consolidation',
      conceptTags: ['Continuity & Change', 'Significance'],
      summaryMarkdown:
        'Following Roberto Farinacci’s party crackdown, Mussolini addressed the Chamber on **3 January 1925**, accepting full "political, moral, and historical responsibility" while promising force. Between Dec 1925 and Nov 1926 the **Leggi Fascistissime** made Mussolini **Head of Government** (responsible only to the King), empowered rule by decree (Jan 1926), replaced elected mayors with appointed *podestà*, banned all opposition parties and free unions (Vidoni Pact 1925), censored the press, and established **OVRA** secret police and the Special Tribunal (1927), culminating in May 1928 single-list elections.',
      primarySourceQuote:
        '"If Fascism has been a criminal association, I am the chief of this criminal association... Italy wants peace, wants tranquillity, wants calm in which to work; we will give it to her with love, if possible, and with force, if necessary." — Mussolini, 3 January 1925.',
      significanceMarkdown:
        'Marked the definitive constitutional break from coalition government into a single-party police dictatorship, while still retaining the King as formal head of state.',
    },
    {
      id: 'italy-1929-1934',
      dateLabel: '1929–1934',
      title: 'Lateran Accords (1929), Economic Battles & IRI (1933)',
      category: 'Totalitarian State & Axis',
      conceptTags: ['Continuity & Change', 'Perspectives'],
      summaryMarkdown:
        'Shifting from Stefani’s laissez-faire orthodoxy to Volpi’s state interventionism (1925), Mussolini waged propaganda **Battles for Grain, Land, Lira (Quota 90), and Births**, erected 22 **Corporations** (1930–34), and created **IRI (1933)**—which by 1939 controlled 75% of iron, 45% of steel, and 90% of shipbuilding. Simultaneously, the **February 1929 Lateran Accords** with Pope Pius XI created Vatican City, paid 1,750M lire indemnity, and entrenched compulsory Catholic education.',
      significanceMarkdown:
        'Delivered Mussolini’s peak domestic prestige ("Years of Consensus"), yet demonstrated clear limits on totalitarianism as Big Business, the Monarchy, and the Catholic Church preserved autonomous power.',
      historiographyNotes: [
        {
          historian: 'Renzo De Felice (1974)',
          school: 'Consensus School',
          argument:
            'Positioned 1929–36 as Mussolini’s "Years of Consensus," arguing Vatican and welfare accords won genuine broad acceptance while corporatism remained largely rhetorical.',
        },
        {
          historian: 'Emilio Gentile (1996)',
          school: 'Totalitarian Political Religion',
          argument:
            'Contended Fascism forged an authentic "sacralization of politics" through ONB/GIL youth, OND leisure, and *Romanità* spectacle even amid institutional compromises.',
        },
      ],
    },
    {
      id: 'italy-1935-1940',
      dateLabel: '1935–1940',
      title: 'Abyssinia (1935–36), Racial Laws (1938) & Pact of Steel',
      category: 'Totalitarian State & Axis',
      conceptTags: ['Cause & Consequence', 'Perspectives'],
      summaryMarkdown:
        'After deterring Hitler at the Brenner Pass (1934) and joining the **Stresa Front (April 1935)**, Mussolini invaded **Abyssinia (Oct 1935)** to avenge Adowa (1896), using poison gas and shattering League credibility when Britain/France omitted oil from sanctions. Isolated from London/Paris, Italy intervened in Spain (1936), forged the **Rome–Berlin Axis** (Oct–Nov 1936), enacted the **1938 Charter of Race & Racial Laws** expelling Jews from schools/professions, annexed Albania, signed the **Pact of Steel (May 1939)**, and entered WWII in June 1940.',
      significanceMarkdown:
        'Subordinated Italy as Germany’s junior Axis partner and exposed structural industrial shortages (producing only ~20% of domestic raw-material needs by 1940).',
      historiographyNotes: [
        {
          historian: 'Michele Sarfatti (2006) & Gene Bernardini (1977)',
          school: 'Endogenous Racism Thesis',
          argument:
            'Argue the 1938 Racial Laws grew out of Fascism’s own colonial racial hierarchy (1936–37 East Africa decrees) and internal radicalization, not passive imitation of Hitler.',
        },
      ],
    },
  ],
};

export const HIST_V3_ITALY_SOURCES_LAB: PrimarySourceAnalyzerSpec = {
  type: 'primary_source_analyzer',
  id: 'hist-v3-italy-sources-lab',
  title: 'Source & Perspective Lab: Fascist Dictatorship, Autarky & Elite Compromise',
  caption:
    'Click any highlighted phrase to inspect Origin, Purpose, Context, Limitations, and Historiographical perspectives across Pearson Ch. 1 primary & scholarly texts.',
  comparisonPrompt:
    'How do Mussolini’s 1925 and 1936 speeches construct a façade of monolithic totalitarian sovereignty that Martin Blinkhorn’s and Renzo De Felice’s scholarship reveals to be constrained by elite bargains?',
  sources: [
    {
      id: 'src-mussolini-1936-autarky',
      label: 'Source A · Mussolini Autarky Speech (1936)',
      author: 'Benito Mussolini (Address to National Council of Corporations)',
      date: 'March 1936',
      provenance:
        'Pearson 2026 Paper 3 Europe p. 23 (Activity 7): Delivered mid-Abyssinian War amidst League of Nations sanctions.',
      citationChicago:
        'Benito Mussolini, Speech to the National Council of Corporations, March 1936, quoted in Eunice Price, Maria Soledad Texido, and Hung-Li Su, *HL Paper 3: Europe 20th Century* (London: Pearson Education, 2026), 23.',
      sourceType: 'Primary',
      perspectiveSchool: 'Fascist State Propaganda',
      segments: [
        {
          text: '"Italy can and must attain the maximum economic independence for peace and war. ',
          annotationId: 'ann-it-autarky-purpose',
        },
        {
          text: 'The whole of the Italian economic system must be directed toward this supreme necessity, on which depends the future of the Italian people... ',
          annotationId: 'ann-it-corporatism-myth',
        },
        {
          text: 'The plan of control for Italian economic policy in the coming fascist era... is determined by one single consideration: that our nation will be called to war."',
          annotationId: 'ann-it-war-limitation',
        },
      ],
    },
    {
      id: 'src-blinkhorn-2006-elites',
      label: 'Source B · Martin Blinkhorn on Elites (2006)',
      author: 'Martin Blinkhorn',
      date: '2006',
      provenance:
        'Pearson 2026 Paper 3 Europe p. 25 (Activity 8), quoting *Mussolini and Fascist Italy*, 3rd ed. (London: Routledge, 2006), 45.',
      citationChicago:
        'Martin Blinkhorn, *Mussolini and Fascist Italy*, 3rd ed. (London: Routledge, 2006), 45.',
      sourceType: 'Historiography',
      perspectiveSchool: 'Structural Continuity / Elite Bargain',
      segments: [
        {
          text: '"While plainly damaging some sectors of the economy, ',
          annotationId: 'ann-it-blinkhorn-sector',
        },
        {
          text: 'fascist policies unquestionably benefited other, powerful interests whose ability to influence government long pre-dated fascism ',
          annotationId: 'ann-it-blinkhorn-continuity',
        },
        {
          text: 'and on whose continued acquiescence the regime’s chances of permanence partly depended: heavy industry, the agrari of the Po Valley, and the less enterprising big landowners of other regions."',
          annotationId: 'ann-it-blinkhorn-elites',
        },
      ],
    },
    {
      id: 'src-mussolini-1925-chamber',
      label: 'Source C · Mussolini Chamber Speech (1925)',
      author: 'Benito Mussolini (Chamber of Deputies)',
      date: '3 January 1925',
      provenance:
        'Pearson 2026 p. 19 & IB 11 Italy Slide 8: Speech ending the Matteotti Crisis and inaugurating the Leggi Fascistissime.',
      citationChicago:
        'Benito Mussolini, Speech to the Chamber of Deputies, 3 January 1925, in *Opera Omnia di Benito Mussolini*, vol. 21, ed. Edoardo Susmel and Duilio Susmel (Florence: La Fenice, 1956), 235–40.',
      sourceType: 'Primary',
      perspectiveSchool: 'Dictatorial Consolidation',
      segments: [
        {
          text: '"I declare before this Assembly and before the whole Italian people that I assume, ',
          annotationId: 'ann-it-1925-origin',
        },
        {
          text: 'I alone, the political, moral, and historical responsibility for everything that has happened... ',
          annotationId: 'ann-it-1925-purpose',
        },
        {
          text: 'Italy wants calm in which to work; we will give it to her with love, if possible, and with force, if necessary."',
          annotationId: 'ann-it-1925-limit',
        },
      ],
    },
  ],
  annotations: [
    {
      id: 'ann-it-autarky-purpose',
      category: 'Purpose',
      title: 'Weaponizing League Sanctions for Economic Autarky',
      conceptTag: 'Perspectives',
      analysisMarkdown:
        'Spoken in **March 1936** during the **Abyssinian War**, Mussolini framed economic self-sufficiency (*autarky*) not as technical reform but as heroic survival against League sanctions, justifying state tariffs, import quotas, and the 1937 High Commission of Autarky.',
    },
    {
      id: 'ann-it-corporatism-myth',
      category: 'Content',
      title: 'Rhetoric of Totalitarian Economic Coordination',
      conceptTag: 'Continuity & Change',
      analysisMarkdown:
        'By addressing the **National Council of Corporations**, Mussolini implied the 22 Corporations harmoniously subordinated capital and labor to national destiny—concealing the fact that the **1933 IRI bailout** bypassed corporatist theory completely to rescue failing banks with taxpayer capital.',
    },
    {
      id: 'ann-it-war-limitation',
      category: 'Limitation',
      title: 'Propaganda Ambition vs 1940 Material Reality',
      conceptTag: 'Significance',
      analysisMarkdown:
        'Valuable for exposing Mussolini’s militarized intent after 1935, yet critically limited as proof of economic performance: **Mark Robson** and **Denis Mack Smith** emphasize Italy produced only **one-fifth** of its raw industrial energy/materials by 1940 and suffered severe balance-of-payments deficits.',
    },
    {
      id: 'ann-it-blinkhorn-sector',
      category: 'Perspective',
      title: 'Uneven Winners & Losers of "Quota 90" and Grain Battle',
      conceptTag: 'Cause & Consequence',
      analysisMarkdown:
        'Blinkhorn corroborates quantitative declines: **Quota 90** (90 ITL/£) hurt southern exporters (fruit, olive oil, wine, textiles) and cut real worker wages 10–20% (1927), while cheapening imported coal/iron for heavy industry.',
    },
    {
      id: 'ann-it-blinkhorn-continuity',
      category: 'Historiography',
      title: 'Structural Continuity Over Fascist Revolution',
      conceptTag: 'Continuity & Change',
      analysisMarkdown:
        'Supports the **Continuity & Change** argument shared by **Frank Tannenbaum (1973)** and **Stanley Payne (1995)**: rather than subordinating Italian capitalism to a revolutionary "third way," Mussolini operated within pre-existing elite structures.',
    },
    {
      id: 'ann-it-blinkhorn-elites',
      category: 'Value',
      title: 'Pinpointing the Regime’s Structural Coalitional Base',
      conceptTag: 'Cause & Consequence',
      analysisMarkdown:
        'Highlights the crucial social pact behind consolidation: *Confindustria* industrialists (Ilva, Fiat, Pirelli, Montecatini) and Po Valley *agrari* exchanged political acquiescence for the **1925 Vidoni Pact** banning strikes and preserving private land ownership.',
    },
    {
      id: 'ann-it-1925-origin',
      category: 'Origin',
      title: 'Crisis Audience: Chamber, King & Restless Ras',
      conceptTag: 'Perspectives',
      analysisMarkdown:
        'Delivered after the **December 1924 revolt** by 50 senior MVSN officers and *Ras* demanding decisive dictatorship, while the **Aventine Secession** boycotted Parliament.',
    },
    {
      id: 'ann-it-1925-purpose',
      category: 'Purpose',
      title: 'Co-opting Blame to Neutralize Parliament',
      conceptTag: 'Significance',
      analysisMarkdown:
        'By daring opponents to indict him under Article 47 of the Statuto (knowing the Chamber majority and Victor Emmanuel III feared civil unrest), Mussolini converted the Matteotti scandal into a launchpad for the **1925–26 Leggi Fascistissime**.',
    },
    {
      id: 'ann-it-1925-limit',
      category: 'Limitation',
      title: 'Tactical Bluff vs Enduring Royal Veto',
      conceptTag: 'Continuity & Change',
      analysisMarkdown:
        'Although threatening force cemented single-party dictatorship, Mussolini remained constitutionally removable by the King until **July 1943**—a key limitation cited by **Richard Bosworth** and **Renzo De Felice**.',
    },
  ],
};

export const HIST_V3_ITALY_BATTLES_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'hist-v3-italy-battles-matrix',
  title: 'Domestic Impact Audit: Mussolini’s Economic Battles, Society & Elites (1925–1940)',
  caption:
    'Pearson 2026 pp. 20–42: Toggle "Blur Cells to Self-Test" to quiz empirical impacts and historiographical verdicts for Paper 3.',
  columns: [
    'Policy / Institution',
    'Stated Regime Aim',
    'Empirical Impact & Limits',
    'Historiographical Verdict',
  ],
  rows: [
    {
      criterion: 'Corporate State (Vidoni Pact 1925 · 22 Corporations 1934)',
      cells: [
        'Harmonize capital and labor under state coordination ("Third Way" above class struggle).',
        'Outlawed independent unions & strikes (1926); lowered wages 10–20% (1927) while lengthening hours; *Confindustria* kept real autonomy.',
        '**Tannenbaum (1973)** & **De Felice (1974)**: propaganda myth disguising big-business dominance; **Emilio Gentile**: totalitarian aspiration thwarted by elites.',
      ],
      ibExamTip:
        'Never treat the 22 Corporations as genuine worker co-determination; cite the 1925 Vidoni Palace Pact and Alfredo Rocco’s 1927 Charter of Labor.',
    },
    {
      criterion: 'Battle for Grain (1925) & Battle for Land (1926)',
      cells: [
        'Eliminate foreign wheat dependence and settle smallholders via Pontine Marshes drainage.',
        'Wheat imports fell ~75% (higher yields in mechanized North), yet southern olive, fruit, wine, and livestock exports collapsed; small farmers crowded out by big landowners.',
        '**Denis Mack Smith (1982)**: "illusory propaganda victory won at the expense of consumers"; **David Williamson**: empty slogans for farmers whose income fell 30%.',
      ],
      ibExamTip:
        'Weigh regional divergence (North vs *Mezzogiorno*) to satisfy the May 2028 Paper 3 "well-balanced evaluation" descriptor.',
    },
    {
      criterion: 'Battle for the Lira ("Quota 90", 1926) & IRI (1933)',
      cells: [
        'Restore national currency prestige (90 ITL = £1) and rescue Depression-hit banking/industry.',
        'Quota 90 cheapened coal/iron imports for arms firms but crushed export competitiveness; **IRI** nationalized bad bank shares—controlling 75% iron, 45% steel, 90% naval yards by 1939.',
        '**Roland Sarti (1970)**: Quota 90 served political prestige over sound economics; **Spencer Di Scala**: real modernization in chemicals (Montecatini), steel (Ilva), and electricity.',
      ],
      ibExamTip:
        'Note Pearson p. 26: IRI bypassed the Corporate State altogether—proving pragmatism trumped fascist ideology during the Depression.',
    },
    {
      criterion: 'Battle for Births (1927) & Gender Policy',
      cells: [
        'Raise population from ~40M to 60M by 1950 for imperial armies; restrict women to maternal roles.',
        'Bachelor tax, banned abortion/contraception, capped women at 10% civil service (1933); yet birth rates fell by 1940 and female university enrollment surged (3.9% in 1911 to 29.9% in 1942).',
        '**Victoria De Grazia (1992)**: economic need forced women into factories/schools despite regime ideology ("In our state, she must not count").',
      ],
      ibExamTip:
        'Contrast stated maternal ideology with rising university attendance (17.4% in 1935–36 -> 29.9% in 1942) as a textbook *Continuity & Change* nuance.',
    },
    {
      criterion: 'ONB / GIL Youth, OND & Miniculpop (1925–1937)',
      cells: [
        'Forge militarized "new fascist man" (*Credere, Obbedire, Combattere*) and mass consensus.',
        'OND reached 4M members (1939); ONB/GIL compulsory (1937), yet ~40% of rural/Catholic youth stayed outside; radio ownership stayed far lower than Nazi Germany; Vatican Radio persisted.',
        '**Emilio Gentile**: effective "political religion"; **Richard Bosworth**: shallow public compliance masking survival of local and Catholic identities.',
      ],
      ibExamTip:
        'Pair Miniculpop censorship and Bottai’s single history textbook (1936) against Vatican Radio immunity and rural absenteeism.',
    },
    {
      criterion: 'Lateran Treaties (1929) & 1938 Racial Laws',
      cells: [
        'Heal Church–State rift (*Non Expedit* legacy) and later enforce Aryan/Fascist racial purity.',
        'Lateran ceded Vatican City + 1,750M lire + compulsory Catholic RE; 1938 Laws purged Jewish teachers/students/owners despite earlier Jewish PNF members.',
        '**De Felice / E. Gentile**: 1938 laws stemmed mainly from Hitler alliance; **Michele Sarfatti (2006) & Bernardini (1977)**: rooted in endogenous Fascist colonial racism.',
      ],
      ibExamTip:
        'Compare the Lateran Concordat (protecting Catholic Action) against Hitler’s violation of the 1933 Reichskonkordat.',
    },
  ],
};

// ===========================================================================
// GUIDE 2 (P3.2): Comparative European Totalitarianism & Band 13-15 Essays
// ===========================================================================

export const HIST_V3_TOTALITARIANISM_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'hist-v3-totalitarianism-matrix',
  title: 'Comparative European Totalitarianism Matrix: Italy vs Germany vs USSR (1918–1941)',
  caption:
    'Pearson 2026 Ch. 1 Synthesis: Evaluate similarities and structural divergences across all six Paper 3 Inquiry Topics.',
  columns: [
    'Analytical Dimension',
    'Mussolini’s Italy (1918–1940)',
    'Hitler’s Germany (1918–1939)',
    'Stalin’s USSR (1924–1941)',
  ],
  rows: [
    {
      criterion: 'Post-WWI Crisis & Rise to Power',
      cells: [
        '"Mutilated Victory" + Biennio Rosso strikes + *trasformismo* paralysis; King Victor Emmanuel III rejected martial law and appointed Mussolini PM (Oct 1922).',
        'Versailles *Diktat* + Weimar PR/Art. 48 instability + 1929 Crash (6M unemployed); Hindenburg & von Papen invited Hitler as Chancellor believing they could "box him in" (Jan 1933).',
        '1917 Revolution + Civil War centralization + 1921 Ban on Factions + Lenin’s strokes; Stalin used General Secretary patronage (1922) to outmaneuver Left & Right rivals.',
      ],
      ibExamTip:
        'Contrast conservative elite miscalculation (Italy 1922, Germany 1933) with Stalin’s internal bureaucratic party conquest.',
    },
    {
      criterion: 'Constitutional & Legal Consolidation',
      cells: [
        'Acerbo Law (1923) -> Matteotti crisis (1924) -> Jan 1925 speech -> *Leggi Fascistissime* (1925–26) outlawing opposition & enabling decree rule.',
        'Reichstag Fire Decree (Feb 1933) -> Enabling Act (Mar 1933) -> *Gleichschaltung* -> Night of the Long Knives (Jun 1934) -> Army Oath to *Führer* (Aug 1934).',
        'Defeat of United Opposition (1927) & Bukharin (1929) -> Ryutin purge (1932) -> Kirov murder & Dec 1934 Terror Decree -> 1936–38 Moscow Show Trials.',
      ],
      ibExamTip:
        'Band 13–15 essays trace exact statutory milestones (Acerbo, Enabling Act, Dec 1 Decree) rather than vague claims of seizing power.',
    },
    {
      criterion: 'Terror, Policing & Repression Scale',
      cells: [
        'Ceka (1924) -> OVRA & Special Tribunal (1927): ~30 political executions pre-1940, ~5,000 *confino* exiles; significantly less lethal than Germany or USSR.',
        'Himmler’s SS, Gestapo, SD & concentration camps (Dachau 1933) crushed KPD/SPD first, then escalated to T4 euthanasia & racial extermination during WWII.',
        'OGPU -> NKVD (*Yezhovshchina* 1937–38), Gulag labor camps (millions detained), Order 00447 quotas, & execution of 2/3 of Red Army senior officers (Tukhachevsky).',
      ],
      ibExamTip:
        'Ask: Did lower execution totals in Fascist Italy mean weaker totalitarianism (**Arendt / Bosworth**) or higher early elite compliance (**De Felice**)?',
    },
    {
      criterion: 'Economic Command vs Private Capital',
      cells: [
        'Preserved private ownership (*Confindustria*); 22 Corporations favored employers; Quota 90 & Grain Battle failed autarky; IRI rescued 1933 bank crash.',
        'Preserved big business (IG Farben, Krupp) within state command: Schacht’s New Plan (Mefo bills) -> Göring’s 1936 Four-Year Plan prioritized rearmament ("Guns before Butter").',
        'Total abolition of private farming/NEP: Forced Collectivization (*dekulakization*, 1932–33 Holodomor 3.5–7M dead) & Gosplan Five-Year Plans transformed heavy industry.',
      ],
      ibExamTip:
        'Only Stalin abolished private capital completely; Hitler and Mussolini forged coercive partnerships with heavy industrialists.',
    },
    {
      criterion: 'Social Mobilization, Youth & Gender',
      cells: [
        'ONB/GIL (to age 21, ~40% non-participation) & OND leisure; women pushed into motherhood yet reached 29.9% of university students by 1942.',
        'Compulsory Hitler Youth & BDM (1936), KdF, *Volksgemeinschaft*, *Kinder, Küche, Kirche* (yet war pulled women back into factories after 1939).',
        'Universal literacy drive, Pioneers & Komsomol (10M by 1940), 1918/26 divorce & abortion freedoms reversed by conservative 1936 New Family Law.',
      ],
      ibExamTip:
        'Highlight the ironic **1936 reversal** in USSR gender policy alongside Italy & Germany’s shared pronatalism to impress Paper 3 examiners.',
    },
    {
      criterion: 'Propaganda, Cults & Residual Institutions',
      cells: [
        'Miniculpop & *Romanità* Cult of *Il Duce*; YET **Monarchy** (dismissed Mussolini 1943) and **Catholic Church** (1929 Lateran) survived intact.',
        'Goebbels RMVP, *Volksempfänger* (70% households), Nuremberg rallies, *Führerprinzip*; polycratic chaos (**Broszat**) & Confessing Church / youth dissent (**Peukert**).',
        'Agitprop/Glavlit, Socialist Realism, "Lenin of Today" cult; Tsarist elites & Orthodox Church crushed, though local bureaucratic chaos persisted (**Fitzpatrick / Getty**).',
      ],
      ibExamTip:
        'Synthesize **Hannah Arendt / Carl Friedrich** criteria: USSR approached fullest institutional eradication; Germany fused terror + racial state; Italy stayed "imperfect totalitarianism."',
    },
  ],
};

export const HIST_V3_TOTALITARIANISM_SOURCES: PrimarySourceAnalyzerSpec = {
  type: 'primary_source_analyzer',
  id: 'hist-v3-totalitarianism-sources',
  title: 'Totalitarian Theory vs Constitutional Reality: Italy & USSR Primary Texts',
  caption:
    'Analyze the gap between official ideological claims (*Doctrine of Fascism*, 1936 USSR Constitution) and empirical governance across interwar dictatorships.',
  comparisonPrompt:
    'Compare how Mussolini’s 1932 maxim ("nothing outside the state") and Article 125 of the 1936 Stalin Constitution both functioned as ideological instruments while masking fundamentally different realities of coercion and institutional survival.',
  sources: [
    {
      id: 'src-mussolini-doctrine-1932',
      label: 'Source A · Doctrine of Fascism (1932)',
      author: 'Benito Mussolini & Giovanni Gentile',
      date: '1932',
      provenance:
        'Published in *Enciclopedia Italiana* (Pearson 2026 pp. 15, 20; IB Totalitarianism Slide 8).',
      citationChicago:
        'Benito Mussolini and Giovanni Gentile, "La dottrina del fascismo," in *Enciclopedia Italiana*, vol. 14 (Rome: Istituto Giovanni Treccani, 1932), 847–51.',
      sourceType: 'Primary',
      perspectiveSchool: 'Fascist State Idealism',
      segments: [
        {
          text: '"Tutto nello Stato, niente al di fuori dello Stato, nulla contro lo Stato [Everything in the State, nothing outside the State, nothing against the State]... ',
          annotationId: 'ann-tot-italy-maxim',
        },
        {
          text: 'Fascism is totalitarian, and the Fascist State—a synthesis and a unit inclusive of all values—interprets, develops, and potentates the whole life of a people."',
          annotationId: 'ann-tot-italy-gap',
        },
      ],
    },
    {
      id: 'src-ussr-const-1936',
      label: 'Source B · 1936 Stalin Constitution (Art. 125)',
      author: 'Supreme Soviet / USSR Constitution Drafting Commission',
      date: '5 December 1936',
      provenance:
        'Pearson 2026 p. 110 (Using Evidence box): Promulgated months after the first Moscow Show Trial.',
      citationChicago:
        'Constitution of the Union of Soviet Socialist Republics (5 December 1936), art. 125, quoted in Eunice Price, Maria Soledad Texido, and Hung-Li Su, *HL Paper 3: Europe 20th Century* (London: Pearson Education, 2026), 110.',
      sourceType: 'Primary',
      perspectiveSchool: 'Official Stalinist Constitutionalism',
      segments: [
        {
          text: '"ARTICLE 125: In conformity with the interests of the toilers, and in order to strengthen the socialist system, ',
          annotationId: 'ann-tot-ussr-caveat',
        },
        {
          text: 'the citizens of the USSR are guaranteed by law: (a) Freedom of speech; (b) Freedom of the press; (c) Freedom of assembly and of holding mass meetings; (d) Freedom of street processions and demonstrations."',
          annotationId: 'ann-tot-ussr-irony',
        },
      ],
    },
    {
      id: 'src-payne-degrand-totalitarian',
      label: 'Source C · Payne & De Grand Verdict (1995/2000)',
      author: 'Stanley G. Payne & Alexander De Grand',
      date: '1995 / 2000',
      provenance:
        'Pearson 2026 p. 42: Historiographical evaluation of Fascist Italy’s totalitarian limits.',
      citationChicago:
        'Stanley G. Payne, *A History of Fascism, 1914–1945* (London: UCL Press, 1995); Alexander De Grand, *Italian Fascism: Its Origins and Development*, 3rd ed. (Lincoln: University of Nebraska Press, 2000).',
      sourceType: 'Historiography',
      perspectiveSchool: 'Authoritarian vs Totalitarian Critique',
      segments: [
        {
          text: '"While Emilio Gentile sees an authentic totalitarian political religion in Fascist Italy, ',
          annotationId: 'ann-tot-hist-gentile',
        },
        {
          text: 'Stanley Payne concludes totalitarianism in Italy remained more an aspiration than a reality compared to Nazi Germany, and Alexander De Grand argues the survival of the Monarchy, Catholic Church, and business elites made Italy authoritarian rather than truly totalitarian."',
          annotationId: 'ann-tot-hist-limits',
        },
      ],
    },
  ],
  annotations: [
    {
      id: 'ann-tot-italy-maxim',
      category: 'Content',
      title: 'Cohesion Over Reality: Coining "Totalitarian"',
      conceptTag: 'Perspectives',
      analysisMarkdown:
        'Gentile and Mussolini deliberately embraced the label *totalitario* (originally used as an insult by anti-fascist Giovanni Amendola) to project absolute sovereignty over economy, youth, and culture.',
    },
    {
      id: 'ann-tot-italy-gap',
      category: 'Limitation',
      title: 'Retroactive Doctrinal Invention (1925–1932)',
      conceptTag: 'Continuity & Change',
      analysisMarkdown:
        'Pearson 2026 p. 15 notes Fascism lacked a coherent blueprint until 1925–32—this retrospective text masks ideological flip-flops from the 1919 leftist/anti-clerical program to the 1929 Vatican concordat.',
    },
    {
      id: 'ann-tot-ussr-caveat',
      category: 'Origin',
      title: 'The "Interests of the Toilers" Escape Clause',
      conceptTag: 'Perspectives',
      analysisMarkdown:
        'The opening qualifier **"In conformity with the interests of the toilers"** subordinated every constitutional right to Communist Party monopoly—meaning any critique of Stalin could be prosecuted as counter-revolutionary sabotage.',
    },
    {
      id: 'ann-tot-ussr-irony',
      category: 'Purpose',
      title: 'International Showcase Amid Yezhovshchina Terror',
      conceptTag: 'Significance',
      analysisMarkdown:
        'Issued in **Dec 1936** to win Western anti-fascist sympathy (Popular Front era) while the **NKVD** executed Zinoviev/Kamenev (Aug 1936) and launched 1937–38 mass arrest quotas (*Order 00447*). Demonstrates why Paper 3 essays must weigh *de jure* law against *de facto* terror.',
    },
    {
      id: 'ann-tot-hist-gentile',
      category: 'Historiography',
      title: 'Emilio Gentile: Sacralization of Politics',
      conceptTag: 'Perspectives',
      analysisMarkdown:
        'Emilio Gentile warns against dismissing Italian Fascism too lightly: through *Romanità* liturgy, ONB/GIL youth camps, and Miniculpop propaganda, the regime pioneered modern totalitarian mass mobilization.',
    },
    {
      id: 'ann-tot-hist-limits',
      category: 'Value',
      title: 'Institutional Pluralism as the Litmus Test',
      conceptTag: 'Continuity & Change',
      analysisMarkdown:
        'Unlike Stalin (who obliterated the Tsarist state and Russian Orthodox autonomy) or Hitler (who fused Chancellery and Presidency and extracted an army oath), Mussolini left Victor Emmanuel III and Pius XI intact—directly enabling the July 1943 coup.',
    },
  ],
};

export const HIST_V3_BAND15_ESSAY_BUILDER: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'hist-v3-band15-essay-builder',
  title: 'May 2028 Paper 3 Band 13–15 Essay Architect (15 Marks)',
  caption:
    'Step-by-step blueprint modeling Paper 3 MarkScheme 2028 Extract & Sample Paper 3-4 (14/15) analytical precision vs Sample Paper 3-1 narrative traps.',
  sourceLabel: 'Paper 3 MarkScheme 2028 + Sample 3-4',
  commandTerm: 'Compare and contrast',
  marks: 15,
  problemMarkdown:
    '*"Totalitarian regimes in interwar Europe achieved complete control over society primarily through terror rather than popular consensus."* **With reference to two European states (1918–1941), to what extent do you agree with this statement?**',
  givenData: [
    { label: 'Paper 3 Budget', value: '60 min per 15m essay' },
    { label: 'Target Band', value: 'Band 13–15 (Evaluating Perspectives)' },
    { label: 'Case Studies', value: 'Mussolini’s Italy & Stalin’s USSR (or Nazi Germany)' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Deconstruct Command Term & Establish Thesis with Criteria',
      markCode: 'Band 13–15 Focus',
      workingMarkdown:
        'Unpack **"To what extent"** by rejecting an either/or binary (*terror OR consensus*). State a calibrated thesis: **Terror and consensus operated asymmetrically across regimes**—in **Stalin’s USSR**, coercive NKVD terror (*Yezhovshchina*) and economic coercion (internal passports, collectivization) were indispensable in obliterating rival institutions, whereas **Mussolini’s Italy** achieved shallower terror saturation and relied heavily on elite accommodation (Monarchy, Lateran 1929) and propaganda consensus (*De Felice*), while both used state patronage and social mobility to manufacture consent.',
      rationale:
        'Paper 3 MarkScheme 2028 Band 13–15 requires an explicit argument and clear analytical judgement from the opening paragraph—unlike Sample Paper 3-1, which jumped straight into chronological storytelling.',
    },
    {
      stepNumber: 2,
      title: 'Body Axis 1: Coercive Apparatus & Institutional Saturation',
      markCode: 'Empirical Precision',
      workingMarkdown:
        'Contrast institutional realities: In the USSR, **OGPU/NKVD** purges, the **1936–38 Moscow Show Trials**, **Order 00447** arrest quotas, and **8M Gulag prisoners** (Applebaum/Conquest) systematically eradicated Old Bolsheviks, two-thirds of senior Red Army officers, and autonomous peasantry (1932–33 Holodomor). In contrast, Italy’s **OVRA** and Special Tribunal executed ~30 political dissidents before 1940 and exiled ~5,000 to *confino*—brutally crushing Gramsci’s PCI and Rosselli’s *Giustizia e Libertà*, yet leaving Victor Emmanuel III (who dismissed Mussolini in July 1943) and the Vatican intact.',
      rationale:
        'Anchors comparison directly in named agencies, numbers, and turning points rather than generic claims that "both dictators used secret police."',
    },
    {
      stepNumber: 3,
      title: 'Body Axis 2: Manufacturing Consensus, Welfare & Youth Mobilization',
      markCode: 'Counter-Perspective',
      workingMarkdown:
        'Challenge a pure-terror monocausal model: Mussolini’s **1929 Lateran Accords**, **OND** (4M members by 1939), **ONB/GIL**, and *Romanità* propaganda forged broad conservative and middle-class acquiescence during 1929–35. Similarly, Stalinist Five-Year Plans eliminated urban unemployment, eradicated illiteracy (schools rising to 9.7M students by 1933), and created an upward-mobile technical *nomenklatura* (**Sheila Fitzpatrick**), showing why fear intertwined with genuine ideological enthusiasm among urban youth and Stakhanovites.',
      rationale:
        'Evaluating how social incentives coexisted with coercion prevents one-sidedness and establishes the "well-balanced evaluation of perspectives" required for 13–15.',
    },
    {
      stepNumber: 4,
      title: 'Historiographical Evaluation (Evaluating Perspectives)',
      markCode: 'Band 13–15 Differentiator',
      workingMarkdown:
        'Interrogate *why* historians disagree rather than name-dropping: Contrast the Cold War **Totalitarian School** (**Robert Conquest**, **Richard Pipes**) emphasizing top-down NKVD terror against **Revisionist/Pluralist historians** (**Sheila Fitzpatrick**, **J. Arch Getty**) who analyze archival chaos and social mobility from below; for Italy, pit **Renzo De Felice’s** *consensus* thesis and **Richard Bosworth’s** "imperfect totalitarianism" against **Emilio Gentile’s** focus on sacralized political religion. Explain that limited public polling under censorship makes separating active enthusiasm from coerced silence an enduring evidentiary hurdle.',
      rationale:
        'Pearson 2026 p. 132 & Sample Paper 3-4 (14/15) emphasize evaluating strengths and limitations of historical schools directly inside the argument.',
    },
    {
      stepNumber: 5,
      title: 'Substantiated Judgment Consistent with Analysis',
      markCode: 'Consistent Judgment',
      workingMarkdown:
        'Render a nuanced final verdict with **zero new evidence**: Terror was foundational yet insufficient on its own; Stalin relied decisively on lethal systemic terror to break all autonomous institutions, whereas Mussolini balanced selective coercion with conservative compromise and consent-building—meaning neither regime achieved absolute, frictionless "total" control over private minds.',
      rationale:
        'Satisfies the final Band 13–15 criterion: "reasoned judgement consistent with the evaluation."',
    },
  ],
  finalAnswerMarkdown:
    'A Band 13–15 Paper 3 essay judges that while terror defined Stalinist institutional eradication far more lethally than Mussolini’s Italy, both dictatorships combined targeted coercion with institutional bargains, welfare patronage, and mass propaganda—leaving private dissent and institutional limits intact.',
  commonTrapMarkdown:
    '**Classic Band 4–6 Trap (`Sample Paper 3-1`):** Writing one block on "everything Mussolini did" followed by one block on "everything Stalin did" without point-by-point comparison, or asserting historians’ names in parentheses without analyzing *how* their evidence (e.g., Fitzpatrick’s social archives vs Conquest’s Cold War terror totals) changes the conclusion.',
};

// ===========================================================================
// GUIDE 3 (CONCEPTS): May 2028 Historical Investigation 24-Mark IA Blueprint
// ===========================================================================

export const HIST_V3_IA_2028_WORKFLOW: StepMechanismSpec = {
  type: 'step_mechanism',
  id: 'hist-v3-ia-2028-workflow',
  title: 'May 2028 History IA Architecture: 3 Sections · 24 Marks · Max 7 Sources',
  caption:
    'Recreated from IB History IA Rubric (May 2028), Sample 1–3.pdf, CRHS 2026–28 Milestones, and Purdue OWL Chicago NB.',
  palette: 'scientific',
  nodes: [
    {
      id: 'ia-sec1',
      x: 115,
      y: 190,
      label: 'Sec 1: Inquiry Question',
      sublabel: '6 Marks · Concept + ≤7 Src',
      group: 'A',
    },
    {
      id: 'ia-sec2',
      x: 315,
      y: 190,
      label: 'Sec 2: Sources & Persp.',
      sublabel: '6 Marks · No OPCVL!',
      group: 'B',
    },
    {
      id: 'ia-sec3',
      x: 520,
      y: 190,
      label: 'Sec 3: Synthesis & Eval.',
      sublabel: '12 Marks · Historiography',
      group: 'C',
    },
    {
      id: 'ia-chicago',
      x: 705,
      y: 190,
      label: 'Chicago NB + ≤2,200w',
      sublabel: 'No Reflection!',
      group: 'D',
    },
  ],
  edges: [
    { id: 'ia-e1', from: 'ia-sec1', to: 'ia-sec2', label: 'Frame ≤7 sources' },
    { id: 'ia-e2', from: 'ia-sec2', to: 'ia-sec3', label: 'Weigh evidence' },
    { id: 'ia-e3', from: 'ia-sec3', to: 'ia-chicago', label: 'Cite & verify' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Section 1: Historical Inquiry Question (6 Marks · ~250–350 Words)',
      descriptionMarkdown:
        'State an analytical, chronologically bounded question anchored in one of the **4 May 2028 Historical Concepts** (*Cause & consequence, Continuity & change, Perspectives, Significance*). Explain why the debate matters historically and justify your curated **maximum of 7 sources** (`Sample 1`: Cortés/Aztec 1519–21; `Sample 2`: Rommel/20 July 1944; CRHS Grade 11 Mock IA Draft due **Jan 17, 2027**).',
      activeNodeIds: ['ia-sec1'],
      activeEdgeIds: [],
      metrics: [
        { label: 'Criterion A', value: '6 / 24 Marks (25%)' },
        { label: 'Source Cap', value: 'MAX 7 Total Sources' },
        { label: 'Word Window', value: '~250–350 words' },
      ],
    },
    {
      stepNumber: 2,
      title: 'Section 2: Sources and Perspectives (6 Marks · ~450–550 Words)',
      descriptionMarkdown:
        '**CRITICAL MAY 2028 REFORM:** Old standalone OPCVL paragraphs ("Source 1 Origin... Purpose... Value... Limitation") are **REMOVED**. Compare *how and why* primary eyewitnesses, films/material culture (`Sample 3` *Battle of Algiers*), and competing historians construct divergent perspectives—linking origin, purpose, and historical context directly to evidentiary reliability.',
      activeNodeIds: ['ia-sec2'],
      activeEdgeIds: ['ia-e1'],
      metrics: [
        { label: 'Criterion B', value: '6 / 24 Marks (25%)' },
        { label: 'Legacy Change', value: 'Mechanical OPCVL Removed' },
        { label: 'Word Window', value: '~450–550 words' },
      ],
    },
    {
      stepNumber: 3,
      title: 'Section 3: Synthesis and Evaluation (12 Marks · ~1,250–1,450 Words)',
      descriptionMarkdown:
        'Carrying **50% of the IA score**, Section 3 weaves evidence from all ≤7 sources into a thematic, multi-causal argument evaluating competing historical schools (`Sample 2`: Keegan vs Reuth vs Fraser/Messenger; `Sample 1`: Díaz del Castillo vs Clendinnen vs Brooks) and concludes with a substantiated judgment that explicitly weighs source limitations (`CRHS Draft due Feb 1, 2028`).',
      activeNodeIds: ['ia-sec3'],
      activeEdgeIds: ['ia-e2'],
      metrics: [
        { label: 'Criterion C', value: '12 / 24 Marks (50%)' },
        { label: 'Target Focus', value: 'Thematic Synthesis + Judgment' },
        { label: 'Word Window', value: '~1,250–1,450 words' },
      ],
    },
    {
      stepNumber: 4,
      title: 'Purdue OWL Chicago NB, ≤2,200 Words & No Standalone Reflection',
      descriptionMarkdown:
        '**Verify compliance before March 7, 2028 final submission:** (1) **Standalone Reflection is REMOVED** in 2028—any methodological reflection belongs organically inside Sections 2–3; (2) **Word limit = strictly ≤2,200 words** (title page, footnotes, bibliography excluded; `Sample 1` = 1,979w, `Sample 2` = 2,199w, `Sample 3` = 2,200w); (3) **Chicago Notes & Bibliography**: superscript footnote numbers in prose + separate alphabetized Bibliography.',
      activeNodeIds: ['ia-chicago'],
      activeEdgeIds: ['ia-e3'],
      metrics: [
        { label: 'Hard Word Cap', value: '2,200 Words Max' },
        { label: 'Old Reflection', value: 'REMOVED in May 2028' },
        { label: 'Citations', value: 'Chicago NB (Purdue OWL)' },
      ],
    },
  ],
};

export const HIST_V3_IA_SOURCES_CHICAGO_LAB: PrimarySourceAnalyzerSpec = {
  type: 'primary_source_analyzer',
  id: 'hist-v3-ia-sources-chicago-lab',
  title: 'May 2028 IA Sample 2 & 3 Source Lab + Chicago NB Formatting',
  caption:
    'Examine how real assessed 2028 IB History IAs critique memoirs, film, and archival revisionism without mechanical OPCVL—paired with verified Chicago NB footnotes.',
  comparisonPrompt:
    'Compare how IA Sample 2 (Rommel) and IA Sample 3 (Battle of Algiers) move beyond describing bias to evaluate *why* postwar political needs reshaped primary memories and how scholarly hindsight corrects them.',
  sources: [
    {
      id: 'src-ia-rommel-diaries',
      label: 'Sample 2 · The Rommel Diaries vs Reuth',
      author: 'Erwin Rommel (ed. B.H. Liddell Hart) vs Ralf-Georg Reuth',
      date: '1953 / 2004',
      provenance:
        'IA Sample 2 (`Sample 2.pdf`): Investigating Erwin Rommel’s role in the 20 July 1944 plot.',
      citationChicago:
        'Footnote 1: Ralf-Georg Reuth, *Rommel: Das Ende einer Legende* (Munich: Siedler Verlag, 2004), 184. | Subsequent: Reuth, *Rommel*, 184. | Bibliography: Reuth, Ralf-Georg. *Rommel: Das Ende einer Legende*. Munich: Siedler Verlag, 2004.',
      sourceType: 'Historiography',
      perspectiveSchool: 'Cold War Apologetic vs Post-Cold War Archival',
      segments: [
        {
          text: 'The Desert Fox (1951) and *The Rommel Diaries* (1953, edited by Manfred Rommel and Liddell Hart) constructed a chivalrous "clean Wehrmacht" resistor; ',
          annotationId: 'ann-ia-rommel-context',
        },
        {
          text: 'yet Ralf-Georg Reuth’s archival study demonstrates Rommel profited from Hitler’s patronage, wrote letters on 17 June and 15 July 1944 urging Hitler to end the war rather than assassinate him, ',
          annotationId: 'ann-ia-rommel-archival',
        },
        {
          text: 'while Nazi military records lack insight into Rommel’s private thoughts and Reuth risks inferring total non-involvement from aristocratic disdain.',
          annotationId: 'ann-ia-rommel-balance',
        },
      ],
    },
    {
      id: 'src-ia-algiers-drif',
      label: 'Sample 3 · Zohra Drif & Battle of Algiers',
      author: 'Zohra Drif & Djamila Amrane vs Gillo Pontecorvo (1966)',
      date: '1966 / 1992 / 2017',
      provenance:
        'IA Sample 3 (`Sample 3.pdf`): Assessing how accurately *The Battle of Algiers* depicts FLN women.',
      citationChicago:
        'Footnote 1: Zohra Drif, *Inside the Battle of Algiers: Memoir of a Woman Freedom Fighter* (Charlottesville: Just World Books, 2017), 110. | Bibliography: Drif, Zohra. *Inside the Battle of Algiers: Memoir of a Woman Freedom Fighter*. Charlottesville: Just World Books, 2017.',
      sourceType: 'Primary',
      perspectiveSchool: 'Post-Independence FLN Cinema vs Feminist Oral History',
      segments: [
        {
          text: 'Financed by newly independent Algeria and produced by FLN leader Saadi Yacef, Pontecorvo’s newsreel-style film premiered at Venice (1966) to project noble anti-colonial solidarity ',
          annotationId: 'ann-ia-algiers-film',
        },
        {
          text: 'and accurately shows women using *haiks* to smuggle weapons; yet Zohra Drif’s 2017 memoir proves she personally selected the Milk Bar Café on Rue d’Isly, ',
          annotationId: 'ann-ia-algiers-drif',
        },
        {
          text: 'while Djamila Amrane’s 88 interviews reveal that 16% of female militants (*Maquisards*, *Fidyate*, *Moussebilate*) were erased from postwar official politics (only 10 of 104 councilors).',
          annotationId: 'ann-ia-algiers-amrane',
        },
      ],
    },
    {
      id: 'src-ia-diaz-clendinnen',
      label: 'Sample 1 · Díaz del Castillo vs Clendinnen',
      author: 'Bernal Díaz del Castillo (1568) vs Inga Clendinnen (1985)',
      date: '1568 / 1985',
      provenance:
        'IA Sample 1 (`Sample 1.pdf`, 1,979 words): Weighing Hernán Cortés’s significance in Tenochtitlán’s fall.',
      citationChicago:
        'Footnote 1: Inga Clendinnen, "The Cost of Courage in Aztec Society," *Past & Present*, no. 107 (May 1985): 44. | Bibliography: Clendinnen, Inga. "The Cost of Courage in Aztec Society." *Past & Present*, no. 107 (May 1985): 44–89.',
      sourceType: 'Secondary',
      perspectiveSchool: 'Conquistador Chronicle vs Ethnohistorical Structuralism',
      segments: [
        {
          text: 'Bernal Díaz del Castillo’s 1568 chronicle praises Spanish daring and Malintzin’s diplomacy to impress the Spanish Crown while erasing Indigenous perspectives; ',
          annotationId: 'ann-ia-diaz-bias',
        },
        {
          text: 'conversely, Inga Clendinnen’s anthropological analysis exposes an "unstable tribute empire" weakened by Flower War hatred (1454–1519) before smallpox reduced Mesoamerican populations from ~25M to ~1M.',
          annotationId: 'ann-ia-clendinnen-synth',
        },
      ],
    },
  ],
  annotations: [
    {
      id: 'ann-ia-rommel-context',
      category: 'Purpose',
      title: 'Cold War Rehabilitation Context (1951–53)',
      conceptTag: 'Perspectives',
      analysisMarkdown:
        'West German rearmament into NATO created strong geopolitical incentives for B.H. Liddell Hart and Rommel’s family to separate heroic regular army officers from Nazi criminality—explaining *why* the source omits Rommel’s earlier admiration for Hitler.',
    },
    {
      id: 'ann-ia-rommel-archival',
      category: 'Value',
      title: 'Post-1990 Archival Dispatches Correct Myth',
      conceptTag: 'Continuity & Change',
      analysisMarkdown:
        'Declassified 1944 correspondence proves Rommel was still meeting and writing Hitler weeks before July 20, moving Section 3 beyond binary guilt/innocence toward a nuanced conclusion: he favored arrest/peace negotiations rather than assassination.',
    },
    {
      id: 'ann-ia-rommel-balance',
      category: 'Limitation',
      title: 'Critiquing Both Primary Records AND Revisionist Historians',
      conceptTag: 'Perspectives',
      analysisMarkdown:
        'Top-band Section 2/3 writing refuses to treat revisionists as infallible: Sample 2 explicitly notes **Wehrmacht records hide private intent** AND **Reuth’s inference** from aristocratic tension is speculative.',
    },
    {
      id: 'ann-ia-algiers-film',
      category: 'Origin',
      title: 'Film as Dual Artifact: Eyewitness Casting + State Propaganda',
      conceptTag: 'Significance',
      analysisMarkdown:
        'Because FLN clandestinely destroyed records and French military archives concealed torture, Sample 3 treats Pontecorvo’s 1966 film as valuable experiential evidence *precisely while* exposing its state-backed FLN heroic framing at the Venice Film Festival.',
    },
    {
      id: 'ann-ia-algiers-drif',
      category: 'Content',
      title: 'Correcting Agency: Execution vs Strategic Targeting',
      conceptTag: 'Perspectives',
      analysisMarkdown:
        'Comparing Pontecorvo’s footage against Zohra Drif’s memoir pinpoints exact divergence: the film captures disguises accurately but reduces women to silent bomb-placers taking male orders, masking Drif’s own reconnaissance of Rue d’Isly.',
    },
    {
      id: 'ann-ia-algiers-amrane',
      category: 'Historiography',
      title: 'Oral History Recovers Postwar Institutional Erasure',
      conceptTag: 'Continuity & Change',
      analysisMarkdown:
        'Djamila Amrane’s **88 interviews (1978–86)** correct the Algerian Ministry’s undercount (11,000 women / 3%), explaining *why* female militancy vanished from official archives after postwar political marginalization.',
    },
    {
      id: 'ann-ia-diaz-bias',
      category: 'Limitation',
      title: 'Genre Purpose Shapes Spanish Chronicles',
      conceptTag: 'Perspectives',
      analysisMarkdown:
        'Written decades later to defend conquistador pensions and glory before Charles V’s heirs, Díaz del Castillo centers European tactical genius and skips Indigenous coalition agency.',
    },
    {
      id: 'ann-ia-clendinnen-synth',
      category: 'Historiography',
      title: 'Multidisciplinary Synthesis Within 7 Sources',
      conceptTag: 'Cause & Consequence',
      analysisMarkdown:
        'Sample 1 pairs an eyewitness chronicler with ethnohistory (**Clendinnen**) and demographic epidemiology (**Francis J. Brooks**, 1993) to stay strictly under the **7-source cap** while covering multi-causal depth.',
    },
  ],
};

export const HIST_V3_IA_RQ_WORKED_EXAMPLE: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'hist-v3-ia-rq-worked-example',
  title: 'May 2028 IA Drafting Lab: Turning a Topic into a 24-Mark Structure',
  caption:
    'Follow the 5-step transformation from weak pre-2028 OPCVL habits into a sharp 2,200-word May 2028 Section 1–3 investigation with Purdue OWL Chicago NB citations.',
  sourceLabel: '2028 IA Rubric + Purdue CMOS NB',
  commandTerm: 'Evaluate',
  marks: 24,
  problemMarkdown:
    'Draft a compliant **May 2028 IB History IA** framework investigating **Mussolini’s October 1922 March on Rome**—avoiding legacy OPCVL checklists, standalone Reflection sections, and Chicago citation errors.',
  givenData: [
    { label: 'Total Marks', value: '24 (6 + 6 + 12)' },
    { label: 'Max Length', value: '2,200 words' },
    { label: 'Max Sources', value: '7 Total (Chicago NB)' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Section 1: Sharpen Concept-Driven Inquiry Question (6 Marks)',
      markCode: 'Sec 1 · 6m',
      workingMarkdown:
        '**Weak RQ:** *"What caused the March on Rome in 1922?"* (purely descriptive). **Band 5–6 RQ:** *"To what extent was King Victor Emmanuel III’s refusal to declare martial law more significant than Fascist paramilitary coercion in Mussolini’s appointment as Prime Minister in October 1922?"* Bound exact dates (**1920–Oct 1922**), name the primary IB concept (**Cause and consequence / Significance**), and explain why pairing 1922 primary decrees/diaries with **De Felice**, **Emilio Gentile**, and **Mack Smith** (≤7 total sources) resolves the debate.',
      rationale:
        'Section 1 rewards explicit chronological/geographical bounds, conceptual framing, and rationale for your ≤7 source corpus.',
    },
    {
      stepNumber: 2,
      title: 'Section 2: Synthesize Perspectives Without Mechanical OPCVL (6 Marks)',
      markCode: 'Sec 2 · 6m',
      workingMarkdown:
        'Instead of writing two isolated "Origin/Purpose/Value/Limitation" paragraphs, pair **Renzo De Felice’s** *Mussolini il fascista* (1966) or *Mussolini il duce* (1974) directly against **Emilio Gentile’s** *Origins of Fascist Ideology* (2005) and Luigi Facta’s October 1922 ministerial testimony. Show *why* De Felice—drawing on newly opened state archives in postwar Italy—stressed elite pragmatism and royal fear of army mutiny, whereas Gentile—focusing on Fascist cultural mobilization—argues conservative elites catastrophically misjudged Fascism’s revolutionary dynamism.',
      rationale:
        'May 2028 Criterion B specifically assesses integrated analysis of how origin, context, and purpose produce competing historical perspectives.',
    },
    {
      stepNumber: 3,
      title: 'Section 3: Thematic Synthesis, Counter-Weighting & Embedded Reflection (12 Marks)',
      markCode: 'Sec 3 · 12m',
      workingMarkdown:
        'Structure ~1,300 words into three analytical subsections rather than chronological summary: **(1)** Military hollowness of the March (~30,000 poorly armed *squadristi* vs 28,000 Rome garrison troops); **(2)** *Squadristi* intimidation in the provinces (*Biennio Rosso* backlash, Aug 1922 strike collapse) forcing the crisis onto Facta’s desk; **(3)** The King’s decisive constitutional veto on 28 Oct 1922. Embed source-gap limitations organically (e.g., absence of verbatim minutes from Victor Emmanuel III’s private audiences) since standalone Reflection no longer exists.',
      rationale:
        'Section 3 carries half of all IA marks (12/24); weaving evidentiary uncertainty directly into evaluation substitutes cleanly for the removed Reflection.',
    },
    {
      stepNumber: 4,
      title: 'Apply Purdue OWL Chicago Notes & Bibliography Precision',
      markCode: 'CMOS NB',
      workingMarkdown:
        'Place superscript footnote numerals **after** terminal punctuation.¹ Format **First Footnote** with `First Last, *Title* (Place: Publisher, Year), page.` Format **Subsequent Shortened Note** as `Last, *Short Title*, page.` (avoid *Ibid.* per Chicago 17th/18th preference). On the final **Bibliography** page, invert names (`Last, First. *Title*. Place: Publisher, Year.`), use periods instead of commas, omit single page numbers for monographs, list up to 6 authors, and check total source count **≤ 7**.',
      rationale:
        'Purdue OWL Chicago NB (`cmos-nb-sample-paper`) enforces consistent scholarly attribution without inflating the 2,200-word body count (footnotes and bibliography do NOT count toward 2,200 words).',
    },
  ],
  finalAnswerMarkdown:
    'A top-band May 2028 History IA combines a tightly bounded conceptual RQ (6m), comparative perspective analysis across ≤7 curated sources (6m), and balanced historiographical synthesis under ≤2,200 words (12m) formatted strictly in Chicago Notes & Bibliography—with zero standalone OPCVL lists or separate Reflection section.',
  commonTrapMarkdown:
    '**Top 3 Disqualifying Errors in 2028 IA Drafts:** (1) Including an 8th or 9th source in the Bibliography (violating the **max 7 sources** cap); (2) Spending 400 words on a legacy "Section 3: Reflection" copied from pre-2028 examples; (3) Using MLA in-text `(De Felice 45)` citations instead of **Chicago NB superscript footnotes**.',
};

// ===========================================================================
// GUIDE 4 (CONCEPTS): Core Historical Concepts, Skills & Philosophy of History
// ===========================================================================

export const HIST_V3_CONCEPTS_2028_EXPLORER: LabeledExplorerSpec = {
  type: 'labeled_explorer',
  id: 'hist-v3-concepts-2028-explorer',
  title: 'May 2028 IB History Compass: 4 Core Concepts & 4 Historical Skills',
  caption:
    'Built directly from Pearson 2026 pp. vi–xii & IB HISTORY 11 INTRODUCTION.pptx. Click any quadrant to inspect Paper 3 & IA rubric links.',
  viewBox: '0 0 800 440',
  palette: 'scientific',
  shapes: [
    {
      kind: 'rect',
      x: 34,
      y: 36,
      width: 348,
      height: 168,
      rx: 18,
      fill: '#E3E7F1',
      stroke: '#3B5284',
      strokeWidth: 2,
      hotspotId: 'concept-cause',
      focusTags: ['concept-cause'],
    },
    {
      kind: 'text',
      x: 208,
      y: 72,
      text: '1. Cause & Consequence',
      fontSize: 14,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: '#1E293B',
      focusTags: ['concept-cause'],
    },
    {
      kind: 'text',
      x: 208,
      y: 98,
      text: 'Structural preconditions vs catalyst triggers',
      fontSize: 11,
      textAnchor: 'middle',
      fill: '#334155',
      focusTags: ['concept-cause'],
    },
    {
      kind: 'text',
      x: 208,
      y: 120,
      text: 'Skill link: Making Connections (multi-causality)',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: '#475569',
      focusTags: ['concept-cause'],
    },
    {
      kind: 'rect',
      x: 418,
      y: 36,
      width: 348,
      height: 168,
      rx: 18,
      fill: '#E2ECE2',
      stroke: '#2D6A4F',
      strokeWidth: 2,
      hotspotId: 'concept-continuity',
      focusTags: ['concept-continuity'],
    },
    {
      kind: 'text',
      x: 592,
      y: 72,
      text: '2. Continuity & Change',
      fontSize: 14,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: '#1B4332',
      focusTags: ['concept-continuity'],
    },
    {
      kind: 'text',
      x: 592,
      y: 98,
      text: 'Revolutionary rupture vs elite persistence',
      fontSize: 11,
      textAnchor: 'middle',
      fill: '#2D6A4F',
      focusTags: ['concept-continuity'],
    },
    {
      kind: 'text',
      x: 592,
      y: 120,
      text: 'Skill link: Asking Questions (periodization)',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: '#40916C',
      focusTags: ['concept-continuity'],
    },
    {
      kind: 'rect',
      x: 34,
      y: 234,
      width: 348,
      height: 168,
      rx: 18,
      fill: '#F2DFD3',
      stroke: '#9E3830',
      strokeWidth: 2,
      hotspotId: 'concept-perspectives',
      focusTags: ['concept-perspectives'],
    },
    {
      kind: 'text',
      x: 208,
      y: 270,
      text: '3. Perspectives (Sources & Historiography)',
      fontSize: 14,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: '#5E271C',
      focusTags: ['concept-perspectives'],
    },
    {
      kind: 'text',
      x: 208,
      y: 296,
      text: 'Actor viewpoints vs competing historian schools',
      fontSize: 11,
      textAnchor: 'middle',
      fill: '#7F1D1D',
      focusTags: ['concept-perspectives'],
    },
    {
      kind: 'text',
      x: 208,
      y: 318,
      text: 'Skill link: Using Sources + Evaluating Arguments',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: '#991B1B',
      focusTags: ['concept-perspectives'],
    },
    {
      kind: 'rect',
      x: 418,
      y: 234,
      width: 348,
      height: 168,
      rx: 18,
      fill: '#EFE4C8',
      stroke: '#8A6C26',
      strokeWidth: 2,
      hotspotId: 'concept-significance',
      focusTags: ['concept-significance'],
    },
    {
      kind: 'text',
      x: 592,
      y: 270,
      text: '4. Significance (Scale, Depth & Turning Points)',
      fontSize: 14,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: '#5E4713',
      focusTags: ['concept-significance'],
    },
    {
      kind: 'text',
      x: 592,
      y: 296,
      text: 'Weighing impact across time & memory',
      fontSize: 11,
      textAnchor: 'middle',
      fill: '#78350F',
      focusTags: ['concept-significance'],
    },
    {
      kind: 'text',
      x: 592,
      y: 318,
      text: 'Skill link: Substantiated Judgement (IA + P3)',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: '#92400E',
      focusTags: ['concept-significance'],
    },
  ],
  hotspots: [
    {
      id: 'concept-cause',
      x: 208,
      y: 158,
      label: 'Cause and Consequence + Making Connections',
      category: 'Concept 1 · Causality',
      examKeyword: 'long-term structural vs short-term catalyst + unintended outcome',
      detailMarkdown:
        'Reject monocausal traps: weigh long-term structural cracks (e.g., *trasformismo*, Weimar Art. 48) against catalysts (Matteotti, 1929 Crash) and unintended effects (e.g., **Battle for Grain** cutting imports yet starving southern exports; **Quota 90** causing deflation).',
    },
    {
      id: 'concept-continuity',
      x: 592,
      y: 158,
      label: 'Continuity and Change + Asking Questions',
      category: 'Concept 2 · Periodization',
      examKeyword: 'institutional rupture vs traditional persistence',
      detailMarkdown:
        'Probe *how much* regimes transformed society: Mussolini retained the Monarchy, Papacy, and *Confindustria* (**Mack Smith**), whereas Stalin annihilated Tsarism and private farming—yet revived conservative family law in 1936 and Great Russian nationalism in WWII.',
    },
    {
      id: 'concept-perspectives',
      x: 208,
      y: 356,
      label: 'Perspectives + Using Sources & Evaluating Arguments',
      category: 'Concept 3 · Historiography',
      examKeyword: 'replaces isolated OPCVL · Pearson p. 8 Paper 3 core',
      detailMarkdown:
        'Pearson 2026 p. 8: *"For Paper 3, the assessment is focused on evaluating arguments."* Cross-examine *why* actors (Mussolini, Chamberlain, Ryutin) and scholars (Intentionalist vs Functionalist, Orthodox vs Revisionist) diverge based on archive access and political context.',
    },
    {
      id: 'concept-significance',
      x: 592,
      y: 356,
      label: 'Significance + Substantiated Historical Judgment',
      category: 'Concept 4 · Evaluation',
      examKeyword: 'depth · duration · turning point criteria (e.g., 1935 Abyssinia, 1936 Rhineland)',
      detailMarkdown:
        'Assess historical significance using explicit criteria (**scale, duration, symbolic resonance, turning-point leverage**) rather than circular assertions—e.g., debating whether **Abyssinia (1935)** or **Rhineland (1936)** or **Munich (1938)** marked the decisive point of no return.',
    },
  ],
};

export const HIST_V3_HISTORIOGRAPHY_SCHOOLS_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'hist-v3-historiography-schools-matrix',
  title: 'Philosophies of History & Major Historiographical Schools (Intro PPTX + Pearson)',
  caption:
    'Built from IB HISTORY 11 INTRODUCTION.pptx (Cyclical, Providential, Progressive, Marxist, Postmodernist) & Pearson Ch. 1–2 Debates.',
  columns: [
    'Historiographical / Philosophical Lens',
    'Core Explanatory Premise',
    'Representative Works & Claims',
    'Evidentiary Strength & TOK Limit',
  ],
  rows: [
    {
      criterion: 'Cyclical & Providential Schools',
      cells: [
        'Cyclical sees rise/decay patterns (Polybius, Ibn Khaldun, Spengler); Providential views history as guided by divine will (popular medieval/early modern framing).',
        'Echoed in Fascist *Romanità* propaganda casting Mussolini as reviving imperial cycles, or Marxist stages inverted into destiny.',
        'Reveals how regimes weaponize grand teleology, yet fails causal empiricism by treating human agency as predetermined.',
      ],
      ibExamTip:
        'Use in TOK / Intro essays to critique "inevitability" claims (Pearson p. 170: *"Inevitability is not a cause—it’s a conclusion drawn in hindsight"*).',
    },
    {
      criterion: 'Progressive / Whig & Liberal-Idealist',
      cells: [
        'History advances linearly toward reason, constitutional liberty, and scientific progress; authoritarianism is an abnormal derailment.',
        '**Benedetto Croce** viewed Italian Fascism as a temporary moral "parenthesis"; 18th-century Enlightenment confidence was shattered by WWI trenches and Auschwitz.',
        'Valuable for tracking legal/constitutional ideals, yet underestimates systemic fractures inside liberal states (e.g., Weimar Art. 48, *trasformismo*).',
      ],
      ibExamTip:
        'Contrast Croce’s "parenthesis" directly against **Denis Mack Smith’s** structural critique of pre-1914 Liberal Italy.',
    },
    {
      criterion: 'Intentionalist & Totalitarian Schools',
      cells: [
        'Top-down ideology, charismatic dictators, and premeditated masterplans (*Mein Kampf*, Hossbach, NKVD orders) drive history and genocide.',
        '**Alan Bullock (1952)**, **Karl Bracher (1970)**, **Andreas Hillgruber (1981)**; **Robert Conquest (1990)** & **Richard Pipes (1993)** on Stalin’s personal terror.',
        'Captures clear ideological agency and regime brutality, yet risks exaggerating bureaucratic cohesion and ignoring local chaos.',
      ],
      ibExamTip:
        'Essential anchor for Paper 3 questions asking whether Hitler planned the Holocaust early or whether Stalin orchestrated every purge.',
    },
    {
      criterion: 'Structuralist / Functionalist & Social Revisionism',
      cells: [
        'Institutional rivalries, economic crises, bureaucracy, and bottom-up social pressures shape outcomes via improvisation and "cumulative radicalization."',
        '**Hans Mommsen (1991)** & **Martin Broszat (1981)** ("polycratic" Nazi state); **Ian Kershaw** ("working toward the Führer"); **Sheila Fitzpatrick** & **J. Arch Getty** (chaotic Soviet purges).',
        'Illuminates archival dysfunction and ordinary complicity (**Browning**), though extreme functionalism risks minimizing dictators’ clear ideological culpability.',
      ],
      ibExamTip:
        'Always balance **Mommsen/Broszat** against **Hillgruber/Bullock**—or synthesize via **Kershaw** and **Robert Tucker**.',
    },
    {
      criterion: 'Marxist Materialism',
      cells: [
        'Class conflict over ownership of production drives historical change; fascism represents capitalist elites’ violent defense against proletarian revolution.',
        'Interprets *agrari* & *Confindustria* backing of Mussolini (1920–22) and German heavy-industry ties to Hitler as counter-revolutionary class alliance.',
        'Strong on socioeconomic beneficiaries (Blinkhorn, *Vidoni Pact*), yet underplays cross-class cultural nationalism, antisemitism, and Stalinist terror.',
      ],
      ibExamTip:
        'Cite Marxist class analysis cleanly when weighing industrial/landowner support in Italy (1921–25) or Nanjing China (`Sample Paper 3-4`).',
    },
    {
      criterion: 'Postmodernist & Cultural/Subaltern Turn',
      cells: [
        'Skeptical of singular "objective" grand narratives; foregrounds language, memory, gender, and marginalized voices (*"The past is a foreign country"*, L.P. Hartley).',
        '**Victoria De Grazia** (women under Fascism), **Claudia Koonz** (German women), **Djamila Amrane** (FLN women), **Robert Gellately** (denunciation culture), **Sarah Davies** (Soviet jokes).',
        'Exposes propaganda silence and hidden victims (Roma, LGBTQ+ *Paragraph 175*, *Trümmerfrauen* myth), while reminding historians all sources carry perspective bias.',
      ],
      ibExamTip:
        'Great for Paper 3 & IA Section 2: evaluate *whose voices* are missing from official statistics or wartime military records.',
    },
  ],
};

// ===========================================================================
// GUIDE 5 (P3.3): Weimar Collapse, Hitler's Rise & Nazi Germany (1918-1939)
// ===========================================================================

export const HIST_V3_WEIMAR_NAZI_TIMELINE: TimelineCausalitySpec = {
  type: 'timeline_causality',
  id: 'hist-v3-weimar-nazi-timeline',
  title: 'Weimar Fragility to the Racial Führerstaat: Germany (1918–1939)',
  caption:
    'Pearson 2026 Ch. 1.3–1.4 & Sample Paper 3-3: Trace constitutional defects, 1923–29 stabilization myths, Depression collapse, and Gleichschaltung.',
  categories: [
    'Weimar Crisis (1918–23)',
    'Golden Era Illusion (1924–29)',
    'Collapse & Seizure (1929–34)',
    'Nazi Domestic State (1934–39)',
  ],
  concepts: [
    'Cause & Consequence',
    'Continuity & Change',
    'Perspectives',
    'Significance',
  ],
  events: [
    {
      id: 'ger-1918-1920',
      dateLabel: '1918–1920',
      title: 'Kiel Mutiny, Weimar Constitution (Art. 48 & PR) & Versailles',
      category: 'Weimar Crisis (1918–23)',
      conceptTags: ['Cause & Consequence', 'Continuity & Change'],
      summaryMarkdown:
        'After the Oct–Nov 1918 Kiel mutiny and Kaiser Wilhelm II’s abdication, Ebert’s SPD crushed the Jan 1919 **Spartacist Uprising** using right-wing *Freikorps*—who soon turned against the Republic in the March 1920 **Kapp Putsch** (defeated only by a Berlin workers’ general strike). Meanwhile, **proportional representation** prevented stable single-party majorities and **Article 48** normalized emergency presidential rule, as the June 1919 **Treaty of Versailles** (13% land loss, 100,000 army cap, Art. 231 War Guilt, 132B gold marks) fueled the nationalist *"stab-in-the-back"* (*Dolchstoß*) myth.',
      primarySourceQuote:
        '"Vengeance! German nation! Today in the Hall of Mirrors the disgraceful treaty is being signed. Do not forget it." — Deutsche Zeitung, 28 June 1919.',
      significanceMarkdown:
        'Left the young Republic distrusted by both the Marxist left and conservative monarchist judiciary/army before economic crises even struck.',
      historiographyNotes: [
        {
          historian: 'Karl Bracher (1970) & Hans Mommsen (1996)',
          school: 'Structuralist Constitutional Critique',
          argument:
            'Contend proportional fragmentation and Article 48 created structural paralysis and an authoritarian presidential exit ramp long before 1933.',
        },
        {
          historian: 'Sally Marks (1976) vs A.J.P. Taylor (1961)',
          school: 'Versailles Reparations Debate',
          argument:
            'Taylor stressed Versailles psychological humiliation; Marks argued Weimar fiscal mismanagement—not reparations per se—caused early 1920s instability.',
        },
      ],
    },
    {
      id: 'ger-1923-putsch',
      dateLabel: '1923',
      title: 'Ruhr Occupation, Hyperinflation & Munich Beer Hall Putsch',
      category: 'Weimar Crisis (1918–23)',
      conceptTags: ['Cause & Consequence', 'Significance'],
      summaryMarkdown:
        'Following reparation defaults, Franco-Belgian troops occupied the Ruhr (Jan 1923); Chancellor Cuno’s passive resistance strike forced massive money printing, annihilating middle-class savings via hyperinflation until **Gustav Stresemann** halted resistance and issued the **Rentenmark** (Nov 1923). Exploiting the turmoil, Hitler, Ludendorff, and 600 SA stormed a Munich beer hall (8–9 Nov 1923). Though suppressed by police, Hitler hijacked his treason trial for national publicity and wrote *Mein Kampf* in Landsberg fortress.',
      significanceMarkdown:
        'Convinced Hitler to abandon violent putschism for the **"legality strategy"**—reorganizing the NSDAP into regional *Gaue* under *Führerprinzip* (Bamberg 1926) while waiting for crisis.',
      historiographyNotes: [
        {
          historian: 'Detlev Peukert (1992)',
          school: 'Social-Structural Crisis',
          argument:
            'Linked Ruhr mismanagement and hyperinflation trauma directly to long-term middle-class estrangement from Weimar democracy.',
        },
        {
          historian: 'Ian Kershaw (1999)',
          school: 'Charismatic-Structural Synthesis',
          argument:
            'Showed the 1924 Munich trial vaulted Hitler from regional Bavarian agitator into a recognized national nationalist figure.',
        },
      ],
    },
    {
      id: 'ger-1924-1929',
      dateLabel: '1924–1929',
      title: 'Stresemann’s "Golden Era": Dawes, Locarno, Bauhaus & Fragility',
      category: 'Golden Era Illusion (1924–29)',
      conceptTags: ['Continuity & Change', 'Perspectives'],
      summaryMarkdown:
        'Stresemann’s "fulfillment" diplomacy secured US **$200M Dawes Plan loans** (1924), backed the **Reichsmark** with gold, signed the **Locarno Pact** (1925), entered the **League of Nations** (1926), and presided over Expressionist/Bauhaus modernism (Dix, Grosz, *Metropolis*) while Nazi votes plunged to **2.6%** (12 seats) in May 1928. Yet middle-class savers never recovered from 1923, farmers suffered global commodity slumps from 1927, and Weimar prosperity rested on short-term recallable US capital—what Stresemann himself called **"dancing on a volcano."**',
      significanceMarkdown:
        'Demonstrates why 1924–29 was only conditionally stable: when US loans evaporated after Oct 1929, democratic legitimacy evaporated with them (`Sample Paper 3-3`).',
      historiographyNotes: [
        {
          historian: 'Stephen Lee (1998)',
          school: 'Positive Stabilization View',
          argument:
            'Emphasizes genuine democratic participation, welfare advances, industrial output (+33% vs 1913 by 1929), and marginalization of extremists before 1929.',
        },
        {
          historian: 'Richard J. Evans (2003)',
          school: 'Structural Fragility Critique',
          argument:
            'Contends Weimar’s "Golden Era" was fatally dependent on foreign credit while anti-democratic elites and rural resentment smoldered beneath the surface.',
        },
      ],
    },
    {
      id: 'ger-1929-1933',
      dateLabel: '1929–Jan 1933',
      title: 'Great Depression, Presidential Decrees & Elite Backroom Deal',
      category: 'Collapse & Seizure (1929–34)',
      conceptTags: ['Cause & Consequence', 'Perspectives'],
      summaryMarkdown:
        'The Oct 1929 Wall Street Crash triggered US loan recalls, collapsing German industrial production by 50% and driving unemployment to **6 million (30%) by 1932**. Chancellors **Brüning** (austerity), **von Papen** (lifting the SA ban), and **Schleicher** bypassed the fractured Reichstag using Hindenburg’s **Article 48** decrees. NSDAP surged from 18.3% (1930) to **37.4%** (July 1932) before dipping to **33.1%** (Nov 1932)—prompting von Papen and Hindenburg to appoint Hitler Chancellor on **30 January 1933** to co-opt Nazi mass support against the KPD.',
      significanceMarkdown:
        'Hitler never won an absolute Reichstag majority in free elections; he gained power via elite conservative miscalculation amidst economic despair and left-wing KPD/SPD division.',
      historiographyNotes: [
        {
          historian: 'Martin Broszat (1981)',
          school: 'Socio-Economic Desperation',
          argument:
            'Showed economic crisis drove ~55% of unemployed working-class Nazi recruits (1930–33) alongside middle-class and Protestant rural voters.',
        },
      ],
    },
    {
      id: 'ger-1933-1934',
      dateLabel: 'Feb 1933–Aug 1934',
      title: 'Reichstag Fire, Enabling Act, Gleichschaltung & Night of Long Knives',
      category: 'Collapse & Seizure (1929–34)',
      conceptTags: ['Continuity & Change', 'Significance'],
      summaryMarkdown:
        'After the **27 Feb 1933 Reichstag Fire**, Hitler secured an Article 48 emergency decree arresting ~10,000 communists, won 43.9% in March elections, and passed the **Enabling Act** (23 March 1933, backed by Center Party & DNVP; opposed only by SPD) granting dictatorial decree powers. Rapid **Gleichschaltung** purged Jews/opponents from civil service (April), forced labor into **DAF** (May), banned the SPD and all rival parties (July), and signed the **Vatican Concordat** (July). On **30 June 1934** (*Night of the Long Knives*), the SS executed Ernst Röhm and ~400 SA/political rivals (Schleicher, Strasser); upon Hindenburg’s death (Aug 1934), the army swore a personal **Oath of Loyalty** to *Führer* Hitler.',
      significanceMarkdown:
        'Fused pseudo-legal constitutional dismantling with lethal SS terror in just 19 months, subordinating both party radicals and the Wehrmacht.',
      historiographyNotes: [
        {
          historian: 'Ian Kershaw (2001) vs Functionalists',
          school: 'Night of the Long Knives Debate',
          argument:
            'Intentionalists see the purge as Hitler’s calculated elimination of Röhm’s "Second Revolution" threat; functionalists stress intense pressure from Army High Command and Himmler/Göring.',
        },
      ],
    },
    {
      id: 'ger-1934-1939-econ',
      dateLabel: '1934–1939',
      title: 'Schacht’s New Plan (Mefo Bills) vs Göring’s Four-Year Plan',
      category: 'Nazi Domestic State (1934–39)',
      conceptTags: ['Cause & Consequence', 'Continuity & Change'],
      summaryMarkdown:
        'Reichsbank chief **Hjalmar Schacht’s 1934 New Plan** cut unemployment via autobahns, Reich Entailed Farm Law, and secret **Mefo credit bills** to fund rearmament (army swelling from 100,000 to 1.4M by 1939). Facing balance-of-payments strain in Sept 1936, Hitler sidelined Schacht for **Hermann Göring’s Four-Year Plan** to achieve war readiness and synthetic *ersatz* autarky (IG Farben, Hermann Göring Steel Works). Yet by 1939, Germany still imported iron, oil, and rubber, working weeks stretched to 47 hours, meat consumption fell 18%, and Mefo bills neared maturity.',
      significanceMarkdown:
        'Triggered debate over whether Nazi recovery was genuine welfare revival or an unsustainable rearmament bubble requiring 1938–39 territorial plunder (*Anschluss*, Sudetenland, Poland).',
      historiographyNotes: [
        {
          historian: 'Richard Overy (1994)',
          school: 'Structural War Economy Critique',
          argument:
            'Showed public spending drove ~45% of 1933–38 investment while Göring’s Four-Year Plan bred inefficiency and food/consumer shortages even before 1939.',
        },
      ],
    },
    {
      id: 'ger-1935-1938-race',
      dateLabel: '1935–1939',
      title: 'Volksgemeinschaft, Nuremberg Laws, Kristallnacht & Resistance Limits',
      category: 'Nazi Domestic State (1934–39)',
      conceptTags: ['Perspectives', 'Significance'],
      summaryMarkdown:
        'Goebbels’s RMVP saturated everyday life via subsidized *Volksempfänger* radios (70% households by 1939), Leni Riefenstahl’s *Triumph of the Will*, compulsory **Hitler Youth/BDM** (1936), and **KdF** leisure—while **Volksgemeinschaft** excluded racial and social "enemies": **Nuremberg Race Laws (Sept 1935)** stripped Jewish citizenship, **1933 Sterilization Law** victimized 300,000+, **Paragraph 175** sent gay men (pink triangles) to camps, and **Kristallnacht (9–10 Nov 1938)** arrested 30,000 Jews. Dissidence survived fragmentarily via KPD cells, **Confessing Church (Niemöller)**, **Edelweiss Pirates / Swing Youth**, and later **White Rose** and July 20 plotters.',
      significanceMarkdown:
        'Transforms historical inquiry from simple "terror vs popularity" toward measuring **negative cohesion**, active civilian denunciation, and polycratic regime dynamics.',
      historiographyNotes: [
        {
          historian: 'Robert Gellately (2001) vs Richard Evans (2005)',
          school: 'Consent & Coercion Debate',
          argument:
            'Gellately argued Gestapo terror relied heavily on enthusiastic citizen denunciations rather than omnipresent agents; Evans stressed coercion made unity an illusion for workers and dissidents.',
        },
      ],
    },
  ],
};

export const HIST_V3_WEIMAR_NAZI_SOURCES: PrimarySourceAnalyzerSpec = {
  type: 'primary_source_analyzer',
  id: 'hist-v3-weimar-nazi-sources',
  title: 'Weimar Fragility & Nazi Consensus Lab: Constitution, Diktat & Everyday Life',
  caption:
    'Analyze how constitutional loopholes (Article 48), nationalist trauma (Versailles 1919), and competing scholarly views on Nazi popularity (Peukert vs Gellately) interact.',
  comparisonPrompt:
    'Trace the causal chain across all three sources: how did Article 48 and 1919 Diktat outrage create systemic vulnerability that the Nazi regime later bridged through partial "work and bread" normality and selective terror?',
  sources: [
    {
      id: 'src-weimar-art48',
      label: 'Source A · Weimar Constitution Art. 48 (1919)',
      author: 'Weimar Constituent Assembly',
      date: '11 August 1919',
      provenance: 'Pearson 2026 Paper 3 Europe p. 46: Emergency presidential power clause.',
      citationChicago:
        'Constitution of the German Reich (11 August 1919), art. 48, quoted in Eunice Price, Maria Soledad Texido, and Hung-Li Su, *HL Paper 3: Europe 20th Century* (London: Pearson Education, 2026), 46.',
      sourceType: 'Primary',
      perspectiveSchool: 'Constitutional Legalism',
      segments: [
        {
          text: '"In the event that the public order and security are seriously disturbed or endangered, ',
          annotationId: 'ann-ger-art48-vague',
        },
        {
          text: 'the Reich President may take the measures necessary for their restoration, ',
          annotationId: 'ann-ger-art48-decree',
        },
        {
          text: 'intervening, if necessary, with the aid of the armed forces."',
          annotationId: 'ann-ger-art48-abuse',
        },
      ],
    },
    {
      id: 'src-deutsche-zeitung-1919',
      label: 'Source B · Deutsche Zeitung Editorial (1919)',
      author: '*Deutsche Zeitung* (Nationalist Press)',
      date: '28 June 1919',
      provenance:
        'Pearson 2026 Paper 3 Europe p. 55 (Activity 17 Source A): Published on the day Versailles was signed.',
      citationChicago:
        '*Deutsche Zeitung* (Berlin), 28 June 1919, quoted in Eunice Price, Maria Soledad Texido, and Hung-Li Su, *HL Paper 3: Europe 20th Century* (London: Pearson Education, 2026), 55.',
      sourceType: 'Primary',
      perspectiveSchool: 'Right-Wing German Nationalism',
      segments: [
        {
          text: '"Vengeance! German nation! Today in the Hall of Mirrors the disgraceful treaty is being signed. ',
          annotationId: 'ann-ger-diktat-origin',
        },
        {
          text: 'Do not forget it. The German people will, with unceasing work, press forward to reconquer the place among nations to which it is entitled. ',
          annotationId: 'ann-ger-diktat-purpose',
        },
        {
          text: 'Then will come vengeance for the shame of 1919."',
          annotationId: 'ann-ger-diktat-limit',
        },
      ],
    },
    {
      id: 'src-peukert-gellately-debate',
      label: 'Source C · Peukert (1987) vs Gellately (2001)',
      author: 'Detlev Peukert & Robert Gellately',
      date: '1987 / 2001',
      provenance:
        'Pearson 2026 pp. 86–87: Scholarly debate over popular support and coercion inside the Third Reich.',
      citationChicago:
        'Detlev Peukert, *Inside Nazi Germany* (New Haven: Yale University Press, 1987), 69–70; Robert Gellately, *Backing Hitler* (Oxford: Oxford University Press, 2001), 58.',
      sourceType: 'Historiography',
      perspectiveSchool: 'Everyday History (Alltagsgeschichte) vs Consensus',
      segments: [
        {
          text: 'Detlev Peukert observes that even though long-distance KdF trips went to a minority, "there was a brilliant ‘economic miracle’ which at the minimum guaranteed the basic needs of ‘work and bread’ for everyone from 1936–37 onward." ',
          annotationId: 'ann-ger-peukert-normality',
        },
        {
          text: 'Going further, Robert Gellately argues that because terror targeted despised social outcasts, ordinary Germans’ "reaction was one not of fear but of approval."',
          annotationId: 'ann-ger-gellately-approval',
        },
      ],
    },
  ],
  annotations: [
    {
      id: 'ann-ger-art48-vague',
      category: 'Content',
      title: 'Undefined "Disturbance" Invited Executive Abuse',
      conceptTag: 'Cause & Consequence',
      analysisMarkdown:
        'Notice the elastic threshold **"seriously disturbed or endangered"**—intended by Hugo Preuss and Friedrich Ebert to protect democracy against coups, yet lacking clear judicial limits.',
    },
    {
      id: 'ann-ger-art48-decree',
      category: 'Value',
      title: 'Presidential Cabinets (1930–33) Hollowed Out Parliament',
      conceptTag: 'Continuity & Change',
      analysisMarkdown:
        'Between 1930 and 1932, Hindenburg governed via Brüning, Papen, and Schleicher primarily through Article 48 decrees—normalizing non-parliamentary authoritarianism before Hitler took office (**Karl Bracher**).',
    },
    {
      id: 'ann-ger-art48-abuse',
      category: 'Content',
      title: 'Bridge to the February 1933 Reichstag Fire Decree',
      conceptTag: 'Significance',
      analysisMarkdown:
        'Hitler’s **28 Feb 1933 Decree for the Protection of People and State** suspended Weimar civil liberties directly *via Article 48*, proving the constitution supplied the legal rope for its own destruction.',
    },
    {
      id: 'ann-ger-diktat-origin',
      category: 'Origin',
      title: 'Immediate Reaction in the Hall of Mirrors Shadow',
      conceptTag: 'Perspectives',
      analysisMarkdown:
        'Published on **28 June 1919**, the deliberate invocation of the **Hall of Mirrors** (where Bismarck proclaimed the German Empire in 1871) amplified humiliation across conservative and nationalist readership.',
    },
    {
      id: 'ann-ger-diktat-purpose',
      category: 'Purpose',
      title: 'Mobilizing Revisionist Grievance Against Weimar',
      conceptTag: 'Cause & Consequence',
      analysisMarkdown:
        'Sought to delegitimize moderate "fulfillment" republicans as traitors (*November Criminals*), fueling a revisionist consensus that Hitler later weaponized—though **Sally Marks** cautions reparations alone did not cause 1923 collapse.',
    },
    {
      id: 'ann-ger-diktat-limit',
      category: 'Limitation',
      title: 'Far-Right Press Cannot Measure Working-Class Opinion',
      conceptTag: 'Perspectives',
      analysisMarkdown:
        'As an ultra-nationalist newspaper, *Deutsche Zeitung* reflects middle-class/conservative outrage rather than the **SPD/DDP/Zentrum** coalition voters who backed the Weimar Republic in 1919 and again in 1928 (when Nazis won only 2.6%).',
    },
    {
      id: 'ann-ger-peukert-normality',
      category: 'Historiography',
      title: 'Peukert: Material "Normality" Masked Structural Strain',
      conceptTag: 'Perspectives',
      analysisMarkdown:
        'Draws on **Alltagsgeschichte** (history of everyday life): contrasting 1932’s 6M unemployed with 1936 full employment created perceived normality—even as longer 47-hour weeks, DAF workbooks, and *KdF* exclusions contradicted propaganda.',
    },
    {
      id: 'ann-ger-gellately-approval',
      category: 'Historiography',
      title: 'Gellately vs Evans/Kershaw on Terror vs Popularity',
      conceptTag: 'Perspectives',
      analysisMarkdown:
        'Crucial Paper 3 tension: **Gellately** shows Gestapo files relied heavily on voluntary civilian denunciations against Jews and "asocials," whereas **Ian Kershaw** and **Richard Evans** stress public enthusiasm coexisted with suppressed private fear and lack of genuine ideological depth.',
    },
  ],
};

export const HIST_V3_WEIMAR_GOLDEN_ERA_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'hist-v3-weimar-golden-era-worked',
  title: 'Band 13–15 Worked Essay: Was 1924–1929 Truly a "Golden Era" in Weimar Germany?',
  caption:
    'Built directly on `Sample Paper 3-3 2028.pdf` and Pearson Ch. 1 pp. 56–61—showing how to elevate a strong response into Band 13–15.',
  sourceLabel: 'Sample Paper 3-3 + Pearson Ch. 1',
  commandTerm: 'To what extent',
  marks: 15,
  problemMarkdown:
    '*"The period 1924 to 1929 was genuinely a Golden Era of stability and progress for the Weimar Republic."* **To what extent do you agree with this statement?**',
  givenData: [
    { label: 'Core Concept', value: 'Continuity & Change / Perspectives' },
    { label: 'Key Quote', value: 'Stresemann: "dancing on a volcano"' },
    { label: 'Key Election Shift', value: 'NSDAP: 2.6% (1928) -> 37.4% (July 1932)' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Define "Golden Era" Criteria & State Thesis',
      markCode: 'Thesis + Criteria',
      workingMarkdown:
        'Break "stability and progress" into **three measurable axes**: (1) monetary/diplomatic stabilization, (2) democratic political resilience, and (3) cultural/social emancipation. Thesis: **1924–29 witnessed genuine short-term recovery and democratic vitality compared to 1918–23, yet remained a conditional, debt-financed façade**—Stresemann’s own warning of *"dancing on a volcano"*—because structural reliance on US Dawes capital and persistent conservative/rural alienation ensured collapse once global credit dried up in 1929.',
      rationale:
        'Setting explicit criteria ensures analytical focus rather than listing cultural achievements and economic stats without judgment.',
    },
    {
      stepNumber: 2,
      title: 'Weigh Economic Stabilization vs Structural US Dependence',
      markCode: 'Economic Evaluation',
      workingMarkdown:
        '**Pro-Golden Era (`Stephen Lee`):** The **Rentenmark / Reichsmark** ended 1923 hyperinflation, the **1924 Dawes Plan** supplied $200M in US investment, and industrial output rose **33% above 1913 levels by 1929**, funding welfare housing and wage gains. **Counter-Perspective (`Richard Evans` & Stresemann):** Growth relied precariously on recallable short-term US loans, German agriculture entered depression from **1927**, and middle-class savers wiped out in 1923 drifted toward right-wing resentment against department stores and banks.',
      rationale:
        'Directly refutes the simplistic claim of solid prosperity by identifying *which* groups prospered (urban industrial workers, heavy industry) and *who* remained aggrieved (farmers, white-collar *Mittelstand*).',
    },
    {
      stepNumber: 3,
      title: 'Assess Political & Diplomatic Recovery vs Institutional Rot',
      markCode: 'Political Evaluation',
      workingMarkdown:
        '**Pro-Golden Era:** **Locarno (1925)**, **League of Nations entry (1926)**, and the **Kellogg–Briand Pact (1928)** ended German isolation; extremist votes collapsed in May 1928 (NSDAP **2.6%** / 12 seats; SPD led coalitions). **Counter-Perspective (`Karl Bracher` / `Hans Mommsen`):** Coalition fragility continued (no cabinet held stable majorities under PR), **Hindenburg’s 1925 election** put a monarchist field marshal in charge of **Article 48**, and nationalists denounced Stresemann’s Locarno and **1929 Young Plan** as treasonous surrender to Versailles.',
      rationale:
        'Upgrades `Sample Paper 3-3` by adding exact Reichstag figures (Table 1.1: 2.6% -> 18.3% -> 37.4%) and constitutional structuralists (**Bracher**, **Mommsen**).',
    },
    {
      stepNumber: 4,
      title: 'Evaluate Weimar Cultural Flowering vs Cultural Backlash',
      markCode: 'Social/Cultural Nuance',
      workingMarkdown:
        'End of Kaiser censorship unleashed **Bauhaus** design, Expressionist painting (Otto Dix, George Grosz), Weimar cinema (*Metropolis*, *The Cabinet of Dr. Caligari*), and expanded women’s civic/professional visibility. Yet **traditionalist backlash** (*Wandervogel* movement, rural churches, Nazi *"Blood and Soil"* campaigns) condemned Berlin jazz, cabaret, and modern women as "cultural decadence," priming conservative voters to embrace authoritarian restoration after 1929.',
      rationale:
        'Embeds **Perspectives**: what urban modernists experienced as a "Golden Era," rural conservatives experienced as moral erosion.',
    },
  ],
  finalAnswerMarkdown:
    'While 1924–29 delivered real currency recovery, cultural brilliance, and diplomatic rehabilitation that marginalized the Nazis to 2.6% in 1928, it was not a durable "Golden Era": prosperity rested on recallable US Dawes credit while unresolved Weimar constitutional flaws (PR, Article 48), agricultural depression, and conservative resentment left the Republic defenseless against the 1929 Wall Street Crash.',
  commonTrapMarkdown:
    '**Upgrading `Sample Paper 3-3` to 15/15:** Never claim "the SPD was always in power" (center-right DVP/Zentrum led several 1924–28 cabinets, and Hermann Müller’s SPD Grand Coalition took office only in 1928!) or confuse the *Rentenmark* (1923) with the gold-backed *Reichsmark* (1924). Always anchor numbers accurately to Pearson Table 1.1.',
};

// ===========================================================================
// GUIDE 6 (P3.4): Stalin's Rise, Economic Turn & Great Terror (1924-1941)
// ===========================================================================

export const HIST_V3_STALIN_RISE_TERROR_TIMELINE: TimelineCausalitySpec = {
  type: 'timeline_causality',
  id: 'hist-v3-stalin-rise-terror-timeline',
  title: 'Lenin’s Legacy to Stalin’s Revolution from Above & Great Terror (1917–1941)',
  caption:
    'Pearson 2026 Ch. 1.5–1.6: Trace bureaucratic patronage, ideological pivots, forced collectivization, Five-Year Plans, and Yezhovshchina.',
  categories: [
    'Revolution & NEP (1917–24)',
    'Succession Struggle (1924–29)',
    'Great Turn & Collectivization',
    'Great Terror & War Prep (1932–41)',
  ],
  concepts: [
    'Cause & Consequence',
    'Continuity & Change',
    'Perspectives',
    'Significance',
  ],
  events: [
    {
      id: 'ussr-1917-1922',
      dateLabel: '1917–1922',
      title: 'Bolshevik Seizure, War Communism, Kronstadt & General Secretaryship',
      category: 'Revolution & NEP (1917–24)',
      conceptTags: ['Continuity & Change', 'Cause & Consequence'],
      summaryMarkdown:
        'Following the Oct/Nov 1917 Bolshevik seizure ("Peace, Land, Bread") and **1918–21 Civil War**, **War Communism** (nationalization, Cheka grain requisitioning) sparked a ~7M death famine and the **March 1921 Kronstadt Rising**. Lenin responded with the pragmatic **NEP** (allowing peasant surplus markets) AND the **1921 Ban on Factions**. In **April 1922**, Stalin—underestimated as a *"gray blur"* (Sukhanov)—became **General Secretary**, acquiring control over *nomenklatura* appointments, party dossiers, and Congress delegate lists just before Lenin’s strokes.',
      primarySourceQuote:
        '"The Provisional Government has been overthrown... Long live the revolution of workers, soldiers and peasants." — Proclamation of the Petrograd Soviet, 8 November 1917.',
      significanceMarkdown:
        'Created the centralized one-party machinery and anti-factionalism rule that Stalin later weaponized to expel every rival.',
      historiographyNotes: [
        {
          historian: 'Orlando Figes (1996)',
          school: 'Social Revolution & Tragedy',
          argument:
            'Showed Kronstadt exposed catastrophic exhaustion under War Communism, forcing Lenin into tactical economic retreat (NEP) paired with stricter political monopoly.',
        },
      ],
    },
    {
      id: 'ussr-1924-1929',
      dateLabel: '1924–1929',
      title: 'Lenin’s Testament, "Socialism in One Country" & Defeat of Oppositions',
      category: 'Succession Struggle (1924–29)',
      conceptTags: ['Cause & Consequence', 'Perspectives'],
      summaryMarkdown:
        'In May 1924, Zinoviev and Kamenev blocked publication of **Lenin’s Testament** (which warned Stalin was *"too rude"* and urged his removal) to stop Trotsky—who missed Lenin’s funeral and miscalculated with *The Lessons of October*. Pivoting tactically, Stalin championed **"Socialism in One Country"** (appealing to Soviet patriotism over Trotsky’s *Permanent Revolution*), allied with Bukharin to crush the **United Opposition** (1926–27; Trotsky exiled to Alma-Ata 1928), then flipped against the NEP during the 1927–28 grain procurement crisis to oust **Bukharin’s Right** (1929).',
      significanceMarkdown:
        'Reveals Stalin combined structural control of the Secretariat (**E.H. Carr**) with ruthless tactical manipulation of divided opponents (**Isaac Deutscher**, **Alan Bullock**).',
      historiographyNotes: [
        {
          historian: 'E.H. Carr (1978) & Robert C. Tucker (1990)',
          school: 'Structuralist / Synthetic',
          argument:
            'Argue Bolshevik party centralization and bureaucratic hierarchy enabled Stalin’s ascendancy alongside his personal cunning.',
        },
        {
          historian: 'Isaac Deutscher (1967) & Richard Pipes (1993)',
          school: 'Intentionalist / Opposition-Weakness',
          argument:
            'Deutscher stressed Stalin’s strategic manipulation; Pipes highlighted rivals’ aristocratic arrogance and self-defeating errors.',
        },
      ],
    },
    {
      id: 'ussr-1928-1933-collectivization',
      dateLabel: '1928–1933',
      title: 'Forced Collectivization, Dekulakization & Holodomor Famine',
      category: 'Great Turn & Collectivization',
      conceptTags: ['Cause & Consequence', 'Continuity & Change'],
      summaryMarkdown:
        'Ending NEP, Stalin dispatched 25,000 urban activists and OGPU squads in 1929–30 to force 97% private farms into *kolkhozes* and **"liquidate the kulaks as a class."** After pausing briefly via *"Dizzy with Success"* (March 1930), coercion resumed: livestock herds fell 65% from 1913 levels, grain fell from 73.3M tons (1928) to 69.5M (1931), internal passports (1932) created a **"second servitude,"** and punitive grain seizures triggered the **1932–33 Terror-Famine / Holodomor** across Ukraine, Kazakhstan, and the North Caucasus.',
      significanceMarkdown:
        'Subordinated the peasantry to state grain extraction to finance industrialization at catastrophic human cost (**3.5M deaths per Davies & Wheatcroft; ~7M per Robert Conquest**).',
      historiographyNotes: [
        {
          historian: 'Robert Conquest (1986/2018) vs Davies & Wheatcroft (2004)',
          school: 'Holodomor Causation & Toll Debate',
          argument:
            'Conquest viewed Holodomor as intentional genocidal starvation targeting Ukraine; Davies & Wheatcroft calculated ~3.5M deaths stemming from ruthless quotas, drought, and export priority rather than premeditated ethnic extermination.',
        },
      ],
    },
    {
      id: 'ussr-1928-1941-plans',
      dateLabel: '1928–1941',
      title: 'First–Third Five-Year Plans, Magnitogorsk & Stakhanovites',
      category: 'Great Turn & Collectivization',
      conceptTags: ['Significance', 'Cause & Consequence'],
      summaryMarkdown:
        'Under **Gosplan**, three **Five-Year Plans** (1928–32, 1933–37, 1938–41) turned the USSR into the world’s third-largest industrial power: electricity rose from 5.0 to 48.3B kWh (1928–40), coal from 35.5 to 165.9M tons, steel at Magnitogorsk soared, and defense spending jumped from **3.4% (1933) to 32.6% of budget (1940)**. Yet housing, sanitation, and real wages lagged behind 1928 until late 1930s, labor turnover topped 150%/year in coal, and propaganda (*Stakhanovites*, *"2+2=5"*) masked chronic bottlenecks.',
      primarySourceQuote:
        '"We are fifty or a hundred years behind the advanced countries. We must make good this distance in ten years. Either we do it, or we shall be crushed." — Joseph Stalin, Speech to Industrial Managers, February 1931.',
      significanceMarkdown:
        'Built the Ural–Siberian heavy industrial base that enabled Soviet arms output to survive Operation Barbarossa (1941–45), despite immense waste and coercion.',
      historiographyNotes: [
        {
          historian: 'Moshe Lewin (1985) & Alec Nove (1992)',
          school: 'Command-Chaos Critique',
          argument:
            'Lewin denied Stalin followed a coherent "masterplan," arguing improvisation bred chaos; Nove stressed living standards fell while purges crippled technical planners.',
        },
        {
          historian: 'Stephen Kotkin (2017) & Sheila Fitzpatrick (1999)',
          school: 'Synthetic / Social History',
          argument:
            'Acknowledge genuine urban youth enthusiasm and transformative industrial modernization occurring alongside brutal terror.',
        },
      ],
    },
    {
      id: 'ussr-1932-1935-ryutin-kirov',
      dateLabel: '1932–1935',
      title: 'Ryutin Platform (1932) & Assassination of Sergei Kirov (Dec 1934)',
      category: 'Great Terror & War Prep (1932–41)',
      conceptTags: ['Cause & Consequence', 'Perspectives'],
      summaryMarkdown:
        'Amid famine chaos, Old Bolshevik **Martemyan Ryutin** circulated a 200-page platform calling Stalin *"the evil genius of the Revolution"* and demanding his removal; Stalin demanded execution, but moderate Politburo leaders including Leningrad boss **Sergei Kirov** refused, settling for imprisonment and a purge of ~1M party members (1932–34). After Kirov outpolled Stalin at the 17th Congress, **Kirov was shot on 1 December 1934** by Leonid Nikolayev amid suspiciously absent guards. Within two hours, Stalin signed the **Decree against Terrorist Acts**, unleashing NKVD arrests.',
      primarySourceQuote:
        '"Stalin and his clique are destroying the cause of Communism, and an end must be put to Stalin’s leadership as soon as possible." — Martemyan Ryutin, The Ryutin Platform (1930/1932).',
      significanceMarkdown:
        'Whether Stalin ordered Kirov’s murder (Orthodox view) or opportunistically weaponized a lone killer’s act (**J. Arch Getty**), December 1934 triggered the Great Terror machinery.',
    },
    {
      id: 'ussr-1936-1938-terror',
      dateLabel: '1936–1938',
      title: 'Moscow Show Trials, Yezhovshchina & Red Army Purge',
      category: 'Great Terror & War Prep (1932–41)',
      conceptTags: ['Continuity & Change', 'Significance'],
      summaryMarkdown:
        'Even as the **1936 Stalin Constitution** proclaimed civic liberties on paper, **NKVD** torture extracted public confessions in three **Moscow Show Trials** executing Zinoviev, Kamenev (1936), Radek (1937), Bukharin, Rykov, and ex-NKVD chief Yagoda (1938). Under Nikolai Yezhov (**Yezhovshchina** 1937–38), mass arrest quotas ravaged engineers, nationalities, clergy, and the military—executing Marshal **Mikhail Tukhachevsky** and purging **2/3 of senior officers**, crippling Red Army performance in the 1939–40 Winter War before Beria replaced and executed Yezhov (1939–40).',
      significanceMarkdown:
        'Eliminated every surviving Lenin-era alternative and institutionalized pervasive fear—though **Anne Applebaum** and **Sarah Davies** note Gulag mobilization and localized denunciations shaped the system as well.',
      historiographyNotes: [
        {
          historian: 'Robert Conquest (1990) vs J. Arch Getty (1985)',
          school: 'Totalitarian Terror vs Revisionist Chaos',
          argument:
            'Conquest saw a top-down, paranoia-driven extermination of all rivals; Getty argued regional party officials and center-periphery chaos spun local purge quotas beyond central blueprints.',
        },
      ],
    },
    {
      id: 'ussr-1936-culture',
      dateLabel: '1934–1941',
      title: 'Cult of Personality, Socialist Realism & 1936 Family Law Reversal',
      category: 'Great Terror & War Prep (1932–41)',
      conceptTags: ['Continuity & Change', 'Perspectives'],
      summaryMarkdown:
        'Agitprop, Glavlit, and the 1934 Soviet Union of Writers enforced **Socialist Realism** while elevating Stalin as *"the Lenin of today"*—suppressing poet **Osip Mandelstam** (died in camp 1938) and forcing **Shostakovich** and **Anna Akhmatova** (*Requiem*) into coded/clandestine dissent. Meanwhile, falling birthrates prompted the **June 1936 New Family Law**, reversing the libertarian 1918/1926 Family Codes by restricting divorce, banning non-medical abortion, outlawing male homosexuality, and celebrating traditional motherhood alongside women’s double burden in factories (10M new female workers).',
      significanceMarkdown:
        'Exposes the **Great Retreat** from early Bolshevik cultural radicalism toward conservative pronatalism, authoritarian hierarchy, and militant state atheism.',
    },
  ],
};

export const HIST_V3_STALIN_SOURCES_LAB: PrimarySourceAnalyzerSpec = {
  type: 'primary_source_analyzer',
  id: 'hist-v3-stalin-sources-lab',
  title: 'Stalinism Primary Source Lab: Dissent, Industrial Imperative & Cultural Retreat',
  caption:
    'Analyze three cornerstone Pearson Ch. 1 Case Study 3 texts (Ryutin 1930, Stalin 1931, Pravda May 1936) to evaluate terror, modernization, and continuity.',
  comparisonPrompt:
    'How do Stalin’s 1931 "falling behind" speech and Pravda’s 1936 Family Law editorial both rely on existential external/internal threats to justify abandoning Leninist intraparty debate and 1920s social radicalism?',
  sources: [
    {
      id: 'src-stalin-1931-speech',
      label: 'Source A · Stalin Speech to Managers (Feb 1931)',
      author: 'Joseph Stalin (reported in *Pravda*)',
      date: '4 February 1931',
      provenance:
        'Pearson 2026 Paper 3 Europe p. 115 (Activity 29), quoted via Robert Service, *Stalin: A Biography* (2004), 272–73.',
      citationChicago:
        'Joseph Stalin, Speech to the First All-Union Conference of Leading Personnel of Socialist Industry, 4 February 1931, quoted in Robert Service, *Stalin: A Biography* (London: Macmillan, 2004), 272–73.',
      sourceType: 'Primary',
      perspectiveSchool: 'Stalinist Industrial Mobilization',
      segments: [
        {
          text: '"It is sometimes asked whether it is not possible to slow down the tempo somewhat, to put a check on the movement. No, comrades, it is not possible! ',
          annotationId: 'ann-stalin-31-origin',
        },
        {
          text: 'To slacken the tempo would mean falling behind. And those who fall behind get beaten. ',
          annotationId: 'ann-stalin-31-purpose',
        },
        {
          text: 'We are fifty or a hundred years behind the advanced countries. We must make good this distance in ten years. Either we do it, or we shall be crushed."',
          annotationId: 'ann-stalin-31-prescience',
        },
      ],
    },
    {
      id: 'src-ryutin-platform-1930',
      label: 'Source B · The Ryutin Platform (1930/32)',
      author: 'Martemyan Ryutin (Old Bolshevik Opposition)',
      date: 'August 1930 / 1932',
      provenance:
        'Pearson 2026 p. 108 (Activity 28), via J. Arch Getty and Oleg Naumov, *The Road to Terror* (1999).',
      citationChicago:
        'Martemyan Ryutin, "The Ryutin Platform: Against the Cult of Personality and Stalin’s Leadership," in *The Road to Terror: Stalin and the Self-Destruction of the Bolsheviks, 1932–1939*, ed. J. Arch Getty and Oleg V. Naumov (New Haven: Yale University Press, 1999).',
      sourceType: 'Primary',
      perspectiveSchool: 'Anti-Stalinist Old Bolshevik Dissent',
      segments: [
        {
          text: '"...the evil genius of the Revolution who, motivated by a personal desire for power and revenge, brought the Revolution to the verge of ruin... ',
          annotationId: 'ann-ryutin-intent',
        },
        {
          text: 'The rights of the party laid down by the Statutes have been usurped by a tiny bunch of unprincipled intriguers... ',
          annotationId: 'ann-ryutin-continuity',
        },
        {
          text: 'Stalin and his clique are destroying the cause of Communism, and an end must be put to Stalin’s leadership as soon as possible."',
          annotationId: 'ann-ryutin-consequence',
        },
      ],
    },
    {
      id: 'src-pravda-family-1936',
      label: 'Source C · Pravda on the Family Law (1936)',
      author: '*Pravda* (Central Committee Organ)',
      date: '28 May 1936',
      provenance:
        'Pearson 2026 Paper 3 Europe p. 126: Justifying the June 1936 New Family Law.',
      citationChicago:
        '"Strengthening the Soviet Family," *Pravda*, 28 May 1936, quoted in Eunice Price, Maria Soledad Texido, and Hung-Li Su, *HL Paper 3: Europe 20th Century* (London: Pearson Education, 2026), 126.',
      sourceType: 'Primary',
      perspectiveSchool: 'Stalinist Social Conservatism ("Great Retreat")',
      segments: [
        {
          text: '"When we talked of strengthening the Soviet family we mean the fight against [the wrong] attitudes toward marriage, women and children. ',
          annotationId: 'ann-pravda-36-shift',
        },
        {
          text: '‘Free love’... has nothing in common with Socialist principles or the normal behaviour of a Soviet citizen... The outstanding citizens of our country, the best Soviet youth, are almost always devoted to their families."',
          annotationId: 'ann-pravda-36-gender',
        },
      ],
    },
  ],
  annotations: [
    {
      id: 'ann-stalin-31-origin',
      category: 'Origin',
      title: 'Peak First Five-Year Plan & Collectivization Resistance',
      conceptTag: 'Cause & Consequence',
      analysisMarkdown:
        'Delivered in **Feb 1931** after peasants slaughtered livestock during forced collectivization and managers pleaded for lower industrial targets—showing Stalin rejecting Bukharinite moderation.',
    },
    {
      id: 'ann-stalin-31-purpose',
      category: 'Purpose',
      title: 'Weaponizing National Encirclement to Silence Dissent',
      conceptTag: 'Perspectives',
      analysisMarkdown:
        'By casting economic slowdown as national suicide (*"those who fall behind get beaten"*), Stalin framed industrial coercion and grain requisitioning as patriotic necessity rather than ideological dogma.',
    },
    {
      id: 'ann-stalin-31-prescience',
      category: 'Value',
      title: 'Uncanny 10-Year Prophetic Window Before Barbarossa (1941)',
      conceptTag: 'Significance',
      analysisMarkdown:
        'Exactly ten years later (June 1941), Nazi Germany invaded the USSR—explaining why **Stephen Kotkin** and **Alec Nove** note the Five-Year Plans’ Ural industrial base proved vital to wartime survival despite horrific human cost.',
    },
    {
      id: 'ann-ryutin-intent',
      category: 'Perspective',
      title: 'Insider Marxist Indictment of Stalin’s Betrayal',
      conceptTag: 'Perspectives',
      analysisMarkdown:
        'Unlike Western anti-communist critics, Ryutin attacked Stalin from *within* Marxism-Leninism—proving anti-Stalinist Bolsheviks blamed his personal dictatorship for famine and party corruption.',
    },
    {
      id: 'ann-ryutin-continuity',
      category: 'Value',
      title: 'Exposes Survival of Organized Party Criticism into 1932',
      conceptTag: 'Continuity & Change',
      analysisMarkdown:
        'Demonstrates Stalin’s personal dictatorship was **not yet unchallenged** in 1932: Kirov and Politburo moderates successfully blocked Stalin’s demand to execute Ryutin at the 1932 trial.',
    },
    {
      id: 'ann-ryutin-consequence',
      category: 'Limitation',
      title: 'Catalyst for the 1932–34 Purge & Post-Kirov Terror',
      conceptTag: 'Cause & Consequence',
      analysisMarkdown:
        'Circulation of the Platform hardened Stalin’s paranoia; ~1M party members were purged as "Ryutinites" (1932–34), and Ryutin himself was shot during the 1937–38 Great Terror.',
    },
    {
      id: 'ann-pravda-36-shift',
      category: 'Content',
      title: '180° Reversal of Kollontai’s 1918/1926 Family Codes',
      conceptTag: 'Continuity & Change',
      analysisMarkdown:
        'Rewrote early Bolshevik gender liberation ("Free love") as bourgeois deviance, restricting divorce, outlawing non-medical abortion, and offering multi-child tax incentives to counter collapsing birthrates.',
    },
    {
      id: 'ann-pravda-36-gender',
      category: 'Historiography',
      title: 'Fitzpatrick & Clements: Emancipation vs "Double Burden"',
      conceptTag: 'Perspectives',
      analysisMarkdown:
        'By the late 1930s women comprised ~50% of Soviet doctors and 1/3 of engineers, yet **Sheila Fitzpatrick** and **Barbara Evans Clements** show women shouldered both factory quotas and unpaid domestic care under persistent patriarchal Politburo norms.',
    },
  ],
};

export const HIST_V3_STALIN_HISTORIOGRAPHY_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'hist-v3-stalin-historiography-matrix',
  title: 'Stalinism Historiography Matrix: Totalitarian vs Structuralist vs Revisionist Debates',
  caption:
    'Pearson 2026 pp. 104–133: Use this exact grid to score Band 13–15 "Evaluating Perspectives" marks on Stalin essays.',
  columns: [
    'Paper 3 Debate Axis',
    'Totalitarian / Intentionalist School',
    'Structuralist / Revisionist / Pluralist School',
    'Synthetic Verdict & Exam Tip',
  ],
  rows: [
    {
      criterion: 'Why Stalin Won the 1924–29 Succession',
      cells: [
        '**Isaac Deutscher (1967)** & **Robert Conquest (1990)**: Stalin’s ruthless personal ambition, manipulation of Lenin’s funeral/Testament, and patronage cunning defeated rivals.',
        '**E.H. Carr (1978)** (party centralization), **Richard Pipes (1993)** & **Alan Bullock (1991)** (rivals’ arrogance/disunity), and **Sheila Fitzpatrick (2008)** (wider social/bureaucratic momentum).',
        'Synthesize **Robert C. Tucker (1990)**: General Secretaryship supplied the structural lever, while Trotsky/Bukharin’s mistakes let Stalin pull it.',
      ],
      ibExamTip:
        'Explain *both* how Stalin built majorities via Secretariat appointments *and* why Zinoviev/Kamenev suppressed Lenin’s Testament in May 1924.',
    },
    {
      criterion: 'Was the 1928 "Great Turn" Planned or Improvised?',
      cells: [
        '**Totalitarian Model**: Stalin launched a coherent, ideologically premeditated "Second Revolution from Above" to smash peasant capitalism and build military-industrial autarky.',
        '**Moshe Lewin (1985)** & **Norman Stone (1975)**: Stalin lacked a masterplan and improvised reactively (*"putting one foot in front of the other"*) amid the 1927–28 grain crisis and "war scare."',
        '**Stephen Kotkin (2017)** & **Chris Ward (1999)**: Rapid heavy industrialization really occurred (electricity 9×, steel 4×), yet bureaucratic waste forced constant ad hoc pivots (*"Dizzy with Success"*).',
      ],
      ibExamTip:
        'Cite Pearson Table 1.4 industrial surges alongside Table 1.7 (>150% coal labor turnover) and Table 1.8 falling per-capita meat/butter consumption.',
    },
    {
      criterion: 'Holodomor Death Toll & Intent (1932–33)',
      cells: [
        '**Robert Conquest (*Harvest of Sorrow*, 1986/2018)**: Estimates ~7 million deaths; defines Ukrainian blacklisting and grain seizures as deliberate terror-famine targeting Ukrainian nationalism.',
        '**R.W. Davies & S.G. Wheatcroft (*The Years of Hunger*, 2004)**: Post-Soviet archive demographic study estimates ~3.5 million deaths across USSR, attributing famine to brutal industrialization quotas, incompetence, and drought.',
        'All scholars agree forced grain procurement caused catastrophic mass death; Band 13–15 essays contrast Conquest’s genocidal-intent claim against archival quota analysis.',
      ],
      ibExamTip:
        'Use the exact 3.5M (Davies & Wheatcroft) vs 7M (Conquest) contrast from Pearson p. 115 rather than vague "millions died."',
    },
    {
      criterion: 'Causes & Control of the Great Terror (1934–38)',
      cells: [
        '**Robert Conquest (1990)** & **Leonard Schapiro (1970)**: Stalin planned Kirov’s murder and orchestrated every show trial and **Anne Applebaum’s** Gulag empire from the Kremlin to annihilate all potential opposition.',
        '**J. Arch Getty (*Origins of the Great Purges*, 1985)** & **Sheila Fitzpatrick (*Everyday Stalinism*, 1999)**: Kirov evidence is inconclusive; local party bosses, NKVD careerists, and workplace denunciations drove chaotic radicalization from below.',
        '**Tucker’s Synthesis**: Stalin’s paranoia and **First of December Decree** lit the fuse and enforced death quotas, even when regional NKVD executioners improvised targets.',
      ],
      ibExamTip:
        'Pair **Getty’s** archival skepticism on Kirov with **Conquest’s** proof of Stalin’s signed execution lists (Order 00447, Yezhovshchina).',
    },
    {
      criterion: 'Was Stalin’s USSR Truly Totalitarian?',
      cells: [
        '**Totalitarian School (Pipes, Conquest, Schapiro)**: Eradicated Tsarism, private property, Orthodox autonomy, and free press; controlled mind, work (passports), and art (Socialist Realism).',
        '**Pluralist / Social Historians (Fitzpatrick, Getty, Sarah Davies, Alec Nove)**: Chronic warehouse chaos, declining urban housing, informal workplace absenteeism, and private jokes (**Davies 1997**) prove total control remained incomplete.',
        'Compared to Italy’s survival of King & Church, Stalin achieved the highest **institutional saturation** in Europe, though bureaucratic friction undermined frictionless efficiency.',
      ],
      ibExamTip:
        'Compare Stalin’s institutional monopoly directly with Hitler’s polycracy and Mussolini’s dual monarchy for cross-study mastery.',
    },
  ],
};

// ===========================================================================
// GUIDE 7 (P3.6): Europe and the Second World War (1918-1949)
// ===========================================================================

export const HIST_V3_WWII_EUROPE_TIMELINE: TimelineCausalitySpec = {
  type: 'timeline_causality',
  id: 'hist-v3-wwii-europe-timeline',
  title: 'Collective Security Collapse, Total War, Genocide & Partition (1918–1949)',
  caption:
    'Pearson 2026 Ch. 2 (pairable second regional study on Paper 3!): Track League crises, road to 1939, Stalingrad/Overlord, the Holocaust, and FRG/GDR division.',
  categories: [
    'League & Diplomacy (1920–36)',
    'Road to War (1936–39)',
    'Allied Victory & Genocide (1939–45)',
    'Postwar Germany & Nuremberg (1945–49)',
  ],
  concepts: [
    'Cause & Consequence',
    'Continuity & Change',
    'Perspectives',
    'Significance',
  ],
  events: [
    {
      id: 'wwii-1920-1928-league',
      dateLabel: '1920–1928',
      title: 'League Architecture, Aland Islands (1921), Vilna & Corfu (1923)',
      category: 'League & Diplomacy (1920–36)',
      conceptTags: ['Continuity & Change', 'Perspectives'],
      summaryMarkdown:
        'Created by Part I of Versailles (Jan 1920), the **League of Nations** (Assembly, Great-Power Council, Secretariat, Hague PCIJ, ILO, Health Org) suffered structural flaws: **US absence** (*"The Gap in the Bridge"* cartoon), **unanimity veto**, and no standing army. It peacefully resolved small-state disputes—**Aland Islands (1921)** autonomy under Finland and **Greek–Bulgarian border clash (1925)**—yet failed when great powers or allies interfered: Poland kept **Vilna (1920–23)** with French backing, and Mussolini forced the **Conference of Ambassadors** to pay Italy 50M lire after **Corfu (1923)**.',
      significanceMarkdown:
        'Proved collective security worked when major powers stayed neutral, but surrendered to power politics whenever national interests intervened.',
      historiographyNotes: [
        {
          historian: 'Stephen McGlinchey (2010) / E.H. Carr',
          school: 'Interwar Optimism vs Realist Critique',
          argument:
            'Notes pre-1940 contemporaries held *"reliably stable, diminishing optimism"* during Locarno (1925) and Kellogg–Briand (1928), whereas post-1945 realists dismissed the League as structurally doomed.',
        },
      ],
    },
    {
      id: 'wwii-1932-1936-abyssinia',
      dateLabel: '1932–1936',
      title: 'Disarmament Collapse, Abyssinia (1935–36) & Rhineland Remilitarization',
      category: 'League & Diplomacy (1920–36)',
      conceptTags: ['Cause & Consequence', 'Significance'],
      summaryMarkdown:
        'Hitler quit the **Geneva Disarmament Conference** and League (Oct 1933) after French security fears clashed with German demands for *Gleichberechtigung*, launching conscription and the *Luftwaffe* (March 1935). When Italy invaded **Abyssinia (Oct 1935)**, Britain and France—desperate to keep Mussolini in the **Stresa Front**—excluded oil/steel from League sanctions, kept the Suez Canal open, and leaked the **Hoare–Laval Pact**. Exploding the League’s credibility despite **Haile Selassie’s June 1936 plea**, Mussolini moved into the **Rome–Berlin Axis** (Nov 1936) while Hitler remilitarized the **Rhineland** unopposed (March 1936).',
      primarySourceQuote:
        '"What answer shall I take back to my people? ... It is us today; it will be you tomorrow." — Emperor Haile Selassie I to the League of Nations Assembly, June 1936.',
      significanceMarkdown:
        'Ended interwar collective security permanently: Rhineland fortification prevented easy French intervention in Central Europe and locked Italy and Germany together via Spain (1936–39).',
    },
    {
      id: 'wwii-1937-1939-munich-pact',
      dateLabel: '1937–Sept 1939',
      title: 'Hossbach, Anschluss, Munich Appeasement & Nazi–Soviet Pact',
      category: 'Road to War (1936–39)',
      conceptTags: ['Cause & Consequence', 'Perspectives'],
      summaryMarkdown:
        'Following the Nov 1937 **Hossbach Memorandum**, Hitler annexed Austria (**Anschluss**, March 1938) and forced Britain/France to cede Czechoslovakia’s **Sudetenland** at the **Munich Conference (29 Sept 1938)** without Czech or Soviet participation—hailed as *"peace for our time"* by Chamberlain yet condemned as *"a total and unmitigated disaster"* by Churchill. After Hitler seized Prague (March 1939), London/Paris issued the Polish Guarantee while mistrust doomed Moscow alliance talks. On **23 August 1939**, Stalin (replacing Litvinov with Molotov) signed the **Molotov–Ribbentrop Pact** secretly partitioning Poland/Baltics—clearing Hitler’s **1 Sept 1939** invasion.',
      primarySourceQuote:
        '"The scum of the earth, I believe?" / "The bloody assassin of the workers, I presume?" — David Low cartoon (*Evening Standard*), September 1939.',
      significanceMarkdown:
        'Converged Western appeasement, ideological anti-communism, and Stalinist realpolitik to eliminate any anti-Nazi coalition before general war.',
      historiographyNotes: [
        {
          historian: 'Churchill (Orthodox) vs 1960s Revisionists vs 1990s Post-Revisionists',
          school: 'Appeasement Historiography',
          argument:
            'Orthodox condemned cowardly surrender; 1960s revisionists justified Chamberlain’s structural military/imperial constraints; post-revisionists faulted slow rearmament and missed Soviet alliance chances.',
        },
        {
          historian: 'Zara Steiner & Robert J. Young',
          school: 'Diplomatic Contingency',
          argument:
            'Show French domestic paralysis and Maginot defensive fixation left Paris dependent on British appeasement after 1936.',
        },
      ],
    },
    {
      id: 'wwii-1940-1943-turning-points',
      dateLabel: '1940–1943',
      title: 'Blitzkrieg, Barbarossa Overreach, Stalingrad & Battle of the Atlantic',
      category: 'Allied Victory & Genocide (1939–45)',
      conceptTags: ['Cause & Consequence', 'Significance'],
      summaryMarkdown:
        'German *blitzkrieg* overran Poland and France (May–June 1940), yet Churchill’s defiance during the **Battle of Britain** denied quick victory. In **June 1941**, Hitler launched **Operation Barbarossa** without winter gear or Axis synchronization (delayed by Mussolini’s Greece disaster), stalling before Moscow (Dec 1941) just as he rashly declared war on the USA after Pearl Harbor. The tide turned across 1942–43: the Red Army encircled Germany’s Sixth Army at **Stalingrad** (Nov 1942–Feb 1943), while Allied radar, long-range air cover, and **Bletchley Park Enigma decryption** broke U-boat wolf packs in **"Black May" 1943**.',
      significanceMarkdown:
        'Shifted the war from German tactical surprise into a multi-front war of industrial attrition that Germany lacked oil and logistics to win.',
    },
    {
      id: 'wwii-1941-1945-holocaust',
      dateLabel: '1941–1945',
      title: 'Einsatzgruppen, Wannsee (1942), Collaboration & Rescue/Resistance',
      category: 'Allied Victory & Genocide (1939–45)',
      conceptTags: ['Cause & Consequence', 'Perspectives'],
      summaryMarkdown:
        'Pan-European antisemitism, racial hygiene (*Aktion T4*), and the *Judeo-Bolshevik* myth radicalized during Poland’s **AB-Aktion** and **Barbarossa** (Commissar Order/Barbarossa Decree): 3,000 **Einsatzgruppen** plus Wehrmacht and local auxiliaries murdered **1.5–2M Jews** ("Holocaust by bullets," e.g., **33,000+ at Babi Yar**), before Heydrich’s **20 Jan 1942 Wannsee Conference** synchronized European deportations to death camps (claiming **6M Jews**, **220,000–500,000 Roma & Sinti**, **~250,000 disabled**, Soviet POWs, political dissidents). Resistance persisted through **Warsaw Ghetto Uprising (1943)**, **Bielski partisans**, **Feb 1941 Amsterdam Strike**, **Denmark’s 7,000+ boat rescue**, **Żegota (Irena Sendler)**, and **Le Chambon-sur-Lignon**—while Allied action lagged until the 1944 **War Refugee Board**.',
      significanceMarkdown:
        'Exposes both the pan-European reach of collaboration (Vichy, Ustaše, Iron Guard) and the enduring moral/methodological debate between **Intentionalists** and **Functionalists**.',
      historiographyNotes: [
        {
          historian: 'Andreas Hillgruber (1981) vs Hans Mommsen (1991)',
          school: 'Intentionalist vs Functionalist Holocaust Debate',
          argument:
            'Hillgruber argued genocide executed Hitler’s long-term ideological blueprint; Mommsen argued the "Final Solution" emerged via wartime "cumulative radicalization" and bureaucratic competition.',
        },
        {
          historian: 'Christopher Browning (1992/2017) vs Daniel Goldhagen (1996)',
          school: 'Perpetrator Motivation Debate',
          argument:
            'Browning credited peer conformity and authority in Police Battalion 101; Goldhagen claimed uniquely ingrained German "eliminationist antisemitism."',
        },
      ],
    },
    {
      id: 'wwii-1944-1945-victory',
      dateLabel: '1944–May 1945',
      title: 'D-Day (Overlord), Operation Bagration & Allied Grand Strategy',
      category: 'Allied Victory & Genocide (1939–45)',
      conceptTags: ['Cause & Consequence', 'Significance'],
      summaryMarkdown:
        'By 1944 Allied GDP tripled the Axis’s: US *"Arsenal of Democracy"* produced 96,000 aircraft in 1944 alone, **Lend-Lease** trucks motorized the Red Army, and Soviet factories evacuated east of the Urals outproduced Speer’s belated mobilization (whose synthetic fuel fell >90% under Allied bombing). Following the **Tehran** compromise on a Second Front, **Operation Overlord / D-Day (6 June 1944)** deceived Hitler via *Operation Fortitude*, while **Operation Bagration** shattered Army Group Center in Belarus—pinning Germany between Western and Soviet advances until **VE Day (8 May 1945)**.',
      significanceMarkdown:
        'Demonstrated **Richard Overy’s** maxim: *"unity of command and unity of effort"* defeated a fragmented Axis fighting uncoordinated parallel wars.',
    },
    {
      id: 'wwii-1945-1949-partition-nuremberg',
      dateLabel: '1945–1949',
      title: 'Stunde Null, Nuremberg IMT, Berlin Blockade & Two Germanies',
      category: 'Postwar Germany & Nuremberg (1945–49)',
      conceptTags: ['Continuity & Change', 'Significance'],
      summaryMarkdown:
        'Germany lay in *Stunde Null* collapse: 600,000 bombing dead, 400M m³ rubble (*Trümmerfrauen* clearing labor, *Hamsterfahrten* barter, "Chesterfield" cigarette currency), **~12M ethnic German expellees** (0.5–1.5M dead), and **8–10M DPs**. Under the **Four Ds**, the **1945–46 Nuremberg IMT** indicted 22 Nazi leaders for crimes against peace, war crimes, and **crimes against humanity** (rejecting *"following orders"*), followed by 12 Subsequent Trials and the **1948 UN Genocide Convention**—though critics noted **"victors’ justice"** (Katyn, Cold War amnesties) and continued persecution of gay survivors under **Paragraph 175** and uncompensated Roma. Following **June 1948 Deutsche Mark** reform, **Marshall Plan** aid, the **11-month Berlin Blockade/Airlift (1948–49)**, and **NATO (April 1949)**, Germany split into **FRG (May 1949)** and **GDR (Oct 1949)**.',
      primarySourceQuote:
        '"It must look democratic, but we must control everything." — Walter Ulbricht on Soviet-zone political organization (1945).',
      significanceMarkdown:
        'Transformed wartime anti-Nazi cooperation into Cold War partition across Europe’s Iron Curtain while laying modern international human-rights law.',
    },
  ],
};

export const HIST_V3_WWII_HOLOCAUST_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'hist-v3-wwii-holocaust-matrix',
  title: 'Holocaust Escalation, Collaboration, Resistance & Postwar Justice (Pearson Ch. 2.4–2.6)',
  caption:
    'Synthesizes Inquiry Topics 4–6 of Europe and the Second World War (1918–1949), comparing perpetrator structures, victim experiences, and postwar reckoning.',
  columns: [
    'Analytical Dimension',
    'Mechanisms & Empirical Evidence',
    'Geographic / Group Variation',
    'Historical Debate & IB Tip',
  ],
  rows: [
    {
      criterion: 'Ideological & Legal Preconditions (1933–1939)',
      cells: [
        'Centuries of religious/political antisemitism (*Protocols of Elders of Zion*), pan-European eugenics/Social Darwinism, *Judeo-Bolshevism* conspiracy, **1933 Sterilization**, **1935 Nuremberg Laws**, **Nov 1938 Kristallnacht**, **1939 Aktion T4** (~250,000 disabled murdered).',
        'Not confined to Germany: Vichy France enacted indigenous 1940–41 anti-Jewish statutes without direct German orders; interwar Polish universities set Jewish quotas.',
        'Avoid monocausal "Hitler alone" claims: long-term European prejudices provided a permissive climate activated by total war (Pearson p. 233).',
      ],
      ibExamTip:
        'Cite *Aktion T4* (secret Oct 1939 Führer decree) and *Paragraph 175* (broadened 1935) to cover marginalized groups beyond Jewish victims.',
    },
    {
      criterion: 'War of Annihilation & Wannsee (1939–1945)',
      cells: [
        'Poland **AB-Aktion** & ghettos (1939–40); **Barbarossa** Commissar Order/Hunger Plan (3M+ Soviet POWs starved); **Einsatzgruppen** (3,000 men + auxiliaries shot 1.5–2M, e.g., **33,000 at Babi Yar**); **20 Jan 1942 Wannsee Conference** synchronized 11M target list & death camps.',
        'In Ukraine and the Baltics up to **90%** of Jews died by mass shooting ("Holocaust by bullets"), whereas Western/Central European Jews were deported via rail to Aktion Reinhard/Auschwitz camps.',
        '**Intentionalist** (**Hillgruber**) vs **Functionalist** (**Mommsen**, **Broszat** "cumulative radicalization"); **Raul Hilberg** bureaucratic machinery; **Wannsee** as coordination rather than initial decision.',
      ],
      ibExamTip:
        'Directly address Pearson Ch. 2 Exam Practice #5: Wannsee *coordinated and bureaucratized* an extermination campaign already killing hundreds of thousands in the East.',
    },
    {
      criterion: 'Collaboration Across Occupied Europe',
      cells: [
        'Ideological regimes (**Croatia Ustaše** Jasenovac camp; **Romania Iron Guard/Antonescu** Iași pogrom 8,000+; **Hungary Arrow Cross**; **Slovakia Tiso**), **Vichy *Milice***, local police auxiliaries (Lithuania, Ukraine, Latvia), and civilian denunciations/property looting.',
        'Collaboration spanned state authorities, police battalions, and ordinary neighbors motivated by antisemitism, anti-communism, careerism, or fear.',
        'Pearson p. 260: Without local collaboration and administrative lists, 3,000 Einsatzgruppen and SS administrators could never have rounded up 6M victims.',
      ],
      ibExamTip:
        'Contrast *collaboration* motives carefully (ideological Ustaše vs opportunistic property seizure vs coerced local administration).',
    },
    {
      criterion: 'Resistance, Rescue & Solidarity',
      cells: [
        'Armed uprisings (**Warsaw Ghetto April 1943**; Treblinka/Sobibor/Auschwitz Sonderkommando revolts; **Operation Anthropoid** killing Heydrich; **Bielski** 1,200 forest survivors); public protest (**Feb 1941 Amsterdam Strike**, 300,000); spiritual archives (**Ringelblum Oneg Shabbat**, **Anne Frank**).',
        'Rescue networks: **Denmark** (~7,000+ Jews ferried to Sweden, >95% survived), **Żegota / Irena Sendler** (~2,500 Warsaw children), **Le Chambon-sur-Lignon** (3,000–3,500 sheltered), **Raoul Wallenberg & Carl Lutz** (Budapest), **Oskar Schindler**.',
        'TOK / Historiography alert (Pearson p. 254): Postwar "nation of resisters" myths (France) obscure widespread passivity; historians debate how broadly "resistance" encompasses diaries vs armed revolt.',
      ],
      ibExamTip:
        'Contrast collective civic rescue in **Denmark** (>95% survival) with high-penalty occupation in **Poland** (Ulma family execution).',
    },
    {
      criterion: 'International Response & Postwar Justice (to 1949)',
      cells: [
        'Aug 1942 **Riegner Telegram**; Dec 1942 **Joint Allied Declaration**; failed **April 1943 Bermuda Conference**; Jan 1944 **US War Refugee Board**; Soviet **ChGK** framing victims generically as "Soviet citizens"; Swiss J-stamp & 24,500 turned away; cautious **Vatican/Pius XII & ICRC**.',
        'Postwar justice: **1945–46 Nuremberg IMT** (22 tried, 19 convicted, 12 hanged; *crimes against humanity*), 12 US **Subsequent Trials** (Doctors, Judges, Einsatzgruppen, IG Farben), **1948 UN Genocide Convention & UDHR**.',
        'Critique **"Victors’ Justice"**: Allied terror bombing & Soviet Katyn massacre escaped trial; Cold War integration (1949 FRG/McCloy amnesties) ended denazification; **Roma** & **Paragraph 175** gay victims denied early justice.',
      ],
      ibExamTip:
        'Balance Nuremberg’s landmark legal precedents (individual accountability, rejecting "following orders") against Cold War limits and ignored victim groups.',
    },
  ],
};

export const HIST_V3_WWII_CAUSAL_EXPLORER: StepMechanismSpec = {
  type: 'step_mechanism',
  id: 'hist-v3-wwii-causal-explorer',
  title: 'Why the Allies Won & Axis Collapsed in Europe (1939–1945)',
  caption:
    'Pearson 2026 Ch. 2.3 (pp. 185–203): Interactive synthesis linking Grand Alliance diplomacy, material/oil asymmetry, operational turning points, and Axis structural flaws.',
  palette: 'scientific',
  nodes: [
    {
      id: 'wwii-diplomacy',
      x: 130,
      y: 120,
      label: '1. Grand Alliance',
      sublabel: 'Churchill · FDR · Stalin',
      group: 'Allied',
    },
    {
      id: 'wwii-econ',
      x: 375,
      y: 120,
      label: '2. Material & Oil',
      sublabel: '3× GDP · Lend-Lease · Urals',
      group: 'Econ',
    },
    {
      id: 'wwii-turning',
      x: 640,
      y: 120,
      label: '3. Turning Points',
      sublabel: 'Stalingrad · Atlantic · Overlord',
      group: 'Mil',
    },
    {
      id: 'wwii-axis-flaw',
      x: 375,
      y: 285,
      label: '4. Axis Overreach',
      sublabel: 'Polycratic · No Joint Command',
      group: 'Axis',
    },
  ],
  edges: [
    { id: 'w-e1', from: 'wwii-diplomacy', to: 'wwii-econ', label: 'Europe First + Lend-Lease' },
    { id: 'w-e2', from: 'wwii-econ', to: 'wwii-turning', label: 'Outproduced & fueled' },
    { id: 'w-e3', from: 'wwii-axis-flaw', to: 'wwii-turning', label: 'Barbarossa + "No Retreat"' },
    { id: 'w-e4', from: 'wwii-diplomacy', to: 'wwii-turning', label: 'Tehran -> Bagration/D-Day', dashed: true },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Grand Alliance Leadership & "Europe First" Coordination',
      descriptionMarkdown:
        'Britain’s **Winston Churchill** kept resistance alive in 1940–41 (*Darkest Hour*), **FDR** supplied Britain and the USSR via March 1941 **Lend-Lease** and locked in **"Europe First"** after Pearl Harbor, while **Stalin** bore the brunt of Wehrmacht attrition. Despite Second Front friction (1942–43 periphery strategy), **Tehran (late 1943)** synchronized **Operation Overlord** and **Operation Bagration**, holding together until Germany’s May 1945 surrender.',
      activeNodeIds: ['wwii-diplomacy'],
      activeEdgeIds: ['w-e1', 'w-e4'],
      metrics: [
        { label: 'Strategy', value: 'Europe First (US/UK)' },
        { label: 'Summits', value: 'Atlantic · Tehran · Yalta' },
        { label: 'Coalition Edge', value: 'Combined Chiefs of Staff' },
      ],
    },
    {
      stepNumber: 2,
      title: 'Overwhelming Allied GDP, Oil Supremacy & Labor Mobilization',
      descriptionMarkdown:
        'Allied GDP grew from **2× Axis (1941) to 3× Axis (1944)**: US factories produced ~96,000 aircraft in 1944 alone and exported American trucks that motorized Red Army advances, while the USSR relocated >1,000 factories east of the Urals. Conversely, Germany suffered acute **oil, rubber, and high-grade iron shortages**, delayed full total-war mobilization until Speer (1942–43) due to Nazi gender ideology (relying on 7.6M forced/POW workers), and lost >90% of fuel output to Allied bombing by late 1944.',
      activeNodeIds: ['wwii-econ'],
      activeEdgeIds: ['w-e2'],
      metrics: [
        { label: '1944 GDP Ratio', value: 'Allies ~3× Axis' },
        { label: 'US Production', value: '~2/3 of Allied Hardware' },
        { label: 'German Fuel (1944)', value: 'Cut >90% by Bombing' },
      ],
    },
    {
      stepNumber: 3,
      title: 'Decisive Operational Turning Points (1942–1945)',
      descriptionMarkdown:
        'After stalling before **Moscow (Dec 1941)**, the Wehrmacht lost an entire field army at **Stalingrad (Feb 1943)** (90,000+ surrendered), losing Eastern strategic initiative forever. Simultaneously, Allied convoys, centimetric radar, escort carriers, and **Bletchley Park Enigma decryption** broke U-boat wolf packs in **"Black May" 1943**, securing Atlantic lifelines for **D-Day (6 June 1944)**—paired two weeks later with **Operation Bagration** in Belarus.',
      activeNodeIds: ['wwii-turning'],
      activeEdgeIds: ['w-e2', 'w-e4'],
      metrics: [
        { label: 'East Pivot', value: 'Stalingrad (1942–43) + Bagration' },
        { label: 'Sea Pivot', value: 'Black May 1943 (Enigma)' },
        { label: 'West Pivot', value: 'Overlord + Fortitude (Jun 1944)' },
      ],
    },
    {
      stepNumber: 4,
      title: 'Axis Overreach, Fragmentation & Rigid Command Blunders',
      descriptionMarkdown:
        'Germany fought without a tri-service Axis joint command: Italy’s 1940–41 defeats in Greece and North Africa forced Balkan/African bailouts (delaying **Barbarossa**); Hitler declared war on the US uncoordinated (Dec 1941); and suicidal *"stand fast / no retreat"* orders doomed forces at Stalingrad and Falaise (400,000 Normandy casualties). **TOK Insight (Pearson p. 198):** Avoid hindsight determinism—Allied victory was forged through adaptive strategy exploiting Axis errors, not passive statistical inevitability.',
      activeNodeIds: ['wwii-axis-flaw'],
      activeEdgeIds: ['w-e3'],
      metrics: [
        { label: 'Strategic Errors', value: 'Two-Front War + US Dec 1941' },
        { label: 'Command Flaw', value: 'Hitler Micromanagement' },
        { label: 'Alliance Failure', value: 'Zero Joint Axis Staff' },
      ],
    },
  ],
};

// ===========================================================================
// GUIDE 8 (P1.1 / P2.1): Year 2 Foundations — Paper 1 & Paper 2 Mastery
// ===========================================================================

export const HIST_V3_P1_2028_SOURCE_LAB: PrimarySourceAnalyzerSpec = {
  type: 'primary_source_analyzer',
  id: 'hist-v3-p1-2028-source-lab',
  title: 'May 2028 Paper 1 Simulator: 3-Source Content, Context & Perspective Synthesis',
  caption:
    'Year 2 Reference (1h15 · 24 Marks · 20% HL): Practice the redesigned 2028 Paper 1 source workflow (no mechanical OPCVL!) across three interwar collective-security documents.',
  comparisonPrompt:
    'Synthesize Content, Historical Context, and Perspectives across all three sources: how do legal ideals (Source A), small-state testimony (Source B), and British realpolitik memoirs (Source C) corroborate or contradict one another on why collective security failed in 1935–38?',
  sources: [
    {
      id: 'src-p1-covenant-art10',
      label: 'Source A · League Covenant Art. 10 & 16 (1919)',
      author: 'Paris Peace Conference Commission on the League of Nations',
      date: '28 June 1919',
      provenance:
        'Part I of the Treaty of Versailles (Pearson 2026 pp. 142–145): Legal foundation of collective security.',
      citationChicago:
        'Covenant of the League of Nations, arts. 10 and 16, 28 June 1919, in *Treaty of Peace with Germany (Treaty of Versailles)* (Washington, DC: GPO, 1919).',
      sourceType: 'Primary',
      perspectiveSchool: 'Liberal Internationalism',
      segments: [
        {
          text: '"Article 10: The Members of the League undertake to respect and preserve as against external aggression the territorial integrity and existing political independence of all Members... ',
          annotationId: 'ann-p1-art10-content',
        },
        {
          text: 'Article 16: Should any Member resort to war... it shall ipso facto be deemed to have committed an act of war against all other Members... [and] the Council may recommend to the several Governments concerned what effective military force the Members shall severally contribute."',
          annotationId: 'ann-p1-art16-context',
        },
      ],
    },
    {
      id: 'src-p1-selassie-1936',
      label: 'Source B · Haile Selassie at Geneva (1936)',
      author: 'Emperor Haile Selassie I of Ethiopia',
      date: '30 June 1936',
      provenance:
        'Pearson 2026 p. 161: Address to the League Assembly after Italian annexation of Addis Ababa.',
      citationChicago:
        'Haile Selassie I, "Appeal to the League of Nations," Geneva, 30 June 1936, League of Nations Official Journal, Special Supplement no. 151 (1936): 22–25.',
      sourceType: 'Primary',
      perspectiveSchool: 'Victim-State Moral Appeal',
      segments: [
        {
          text: '"I ask the fifty-two nations, who have given the Ethiopian people a promise to help them in their resistance to the aggressor, what are they willing to do for Ethiopia? ',
          annotationId: 'ann-p1-selassie-persp',
        },
        {
          text: 'International morality is at stake... What answer shall I take back to my people? It is us today; it will be you tomorrow."',
          annotationId: 'ann-p1-selassie-value',
        },
      ],
    },
    {
      id: 'src-p1-chamberlain-1938',
      label: 'Source C · Chamberlain Defense of Caution (1938)',
      author: 'Neville Chamberlain (British Prime Minister)',
      date: '27 September 1938',
      provenance:
        'Pearson 2026 p. 160 / p. 173: BBC Radio broadcast during the Munich/Sudeten crisis.',
      citationChicago:
        'Neville Chamberlain, BBC Radio Broadcast, 27 September 1938, quoted in Eunice Price, Maria Soledad Texido, and Hung-Li Su, *HL Paper 3: Europe 20th Century* (London: Pearson Education, 2026), 160.',
      sourceType: 'Primary',
      perspectiveSchool: 'British Appeasement / Imperial Realpolitik',
      segments: [
        {
          text: '"How horrible, fantastic, incredible it is that we should be digging trenches and trying on gas-masks here because of a quarrel in a far-away country between people of whom we know nothing."',
          annotationId: 'ann-p1-chamberlain-context',
        },
      ],
    },
  ],
  annotations: [
    {
      id: 'ann-p1-art10-content',
      category: 'Content',
      title: 'Paper 1 Content Skill: Legal Commitment vs Enforcement Gap',
      conceptTag: 'Continuity & Change',
      analysisMarkdown:
        'Comprehending Source A accurately means noting Article 10 pledged territorial protection, while Article 16 could only **"recommend"** military force—requiring unanimous Council consent without a standing League army.',
    },
    {
      id: 'ann-p1-art16-context',
      category: 'Origin',
      title: 'Historical Context (1919): US Refusal & Victor Fatigue',
      conceptTag: 'Cause & Consequence',
      analysisMarkdown:
        'Drafted in the shadow of WWI casualties and Wilson’s Fourteen Points, the Covenant assumed great powers would enforce global peace—an assumption shattered once the **US Senate** refused ratification (`The Gap in the Bridge`).',
    },
    {
      id: 'ann-p1-selassie-persp',
      category: 'Perspective',
      title: 'Exposed Double Standard Between Great Powers & Small States',
      conceptTag: 'Perspectives',
      analysisMarkdown:
        'Haile Selassie’s perspective directly challenges Britain and France: 52 nations invoked sanctions yet omitted **oil and steel** and left the **Suez Canal** open to avoid antagonizing Mussolini against Germany.',
    },
    {
      id: 'ann-p1-selassie-value',
      category: 'Value',
      title: 'Corroboration Across Time: 1936 Warning -> 1939 War',
      conceptTag: 'Significance',
      analysisMarkdown:
        'Selassie’s speech links Abyssinia directly to the Rhineland (March 1936) and Czechoslovakia (1938): failing to enforce Article 10 in East Africa dismantled collective deterrence across Europe.',
    },
    {
      id: 'ann-p1-chamberlain-context',
      category: 'Historiography',
      title: '2028 Paper 1 Perspectives Synthesis (No OPCVL Checklist!)',
      conceptTag: 'Perspectives',
      analysisMarkdown:
        'Rather than writing "Limitation: Chamberlain was biased because he was PM," connect Source C’s audience (a war-weary British public fearing aerial bombardment and overstretched empire) to post-1960s revisionist debates vs Churchillian critiques.',
    },
  ],
};

export const HIST_V3_P2_CROSS_REGIONAL_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'hist-v3-p2-cross-regional-matrix',
  title: 'May 2028 Paper 2 Cross-Regional Bridge: Authoritarian Rule & Crisis',
  caption:
    'Year 2 Reference (1h45 · 25 Marks · 25% HL): Pair Paper 3 European dictatorships with non-European case studies (`Sample Paper 3-4` China/Vietnam, `Sample 1` Mesoamerica, `Sample 3` Algeria) for Thematic Essays.',
  columns: [
    'Paper 2 Thematic Concept',
    'European Case Study (Paper 3 Europe)',
    'Cross-Regional Partner (Asia / MENA / Americas)',
    'Comparative Paper 2 Judgment',
  ],
  rows: [
    {
      criterion: 'Consolidation & Elite / Military Bargains',
      cells: [
        '**Mussolini (Italy 1922–26)** & **Hitler (Germany 1933–34)**: Used paramilitary terror (*squadre*, SA/SS) alongside conservative legal co-optation (Acerbo Law, Enabling Act) and compromises with military/Church elites.',
        '**Jiang Jieshi / Nanjing Decade (China 1927–37, Sample 3-4)**: Relied on 600,000 troops, Blue Shirts secret police, and corrupt Five Yuan patronage networks—spending **47% on military vs 3% on health/education**.',
        'Contrast European ideological mass mobilization (PNF, DAF, NSDAP) against Jiang’s fragmented warlord/clique coercion that alienated rural peasants (*"two Chinas"* per **Sheridan**).',
      ],
      ibExamTip:
        'Paper 2 mandates **two different world regions** (e.g., Europe + Asia/Oceania or Europe + Americas). Never compare Italy and Germany alone on Paper 2!',
    },
    {
      criterion: 'Economic Modernization vs Rural/Human Cost',
      cells: [
        '**Stalin’s USSR (1928–41)**: Forced collectivization (3.5–7M famine deaths) financed heavy industrial surge (Ural steel, electricity, Magnitogorsk) at cost of living standards.',
        '**Nanjing China (1927–37, Sample 3-4)**: ~6% urban industrial growth, railways, and silver currency bypassed rural peasants burdened by high rents (**R.H. Myers**, **Ash**); Japanese invasion (1932/37) shattered fiscal base.',
        'Stalin’s brutal command state physically extracted peasant surpluses to survive total war, whereas Jiang’s urban-centered corruption left rural China impoverished and vulnerable.',
      ],
      ibExamTip:
        'Deploy named Paper 2 historians cleanly across regions (e.g., **Fitzpatrick/Nove** for USSR vs **Lloyd Eastman/Jonathan Spence** for Nanjing China).',
    },
    {
      criterion: 'Cold War vs Local Nationalism in Post-WWII Conflicts',
      cells: [
        '**Postwar Germany & Berlin (1945–49)**: Occupation zones, 1948 Deutsche Mark, Berlin Blockade, and **FRG/GDR** division embedded local politics directly inside superpower confrontation.',
        '**Vietnam (1956–75, Sample 3-4)** & **Palestine/Egypt (1919–45, Sample 3-2)**: Clashes pitted **Cold War containment** (NSC-68, SEATO, Domino Theory per **Schlesinger/Cumings**) against anti-colonial **national liberation** and hatred of corrupt rule (Diem, British mandate).',
        'Synthesize **post-revisionism** (**John Lewis Gaddis**): superpower geopolitical rivalry and local nationalist/anti-colonial agency interacted dynamically in both Europe and Asia.',
      ],
      ibExamTip:
        'Remember May 2028 Paper 2 structure (25m total): concept-driven comparative essays require analytical themes, NOT two disconnected region-by-region summaries.',
    },
    {
      criterion: 'Popular Consent, Gender & Cultural Mobilization',
      cells: [
        '**Italy & Germany**: ONB/Hitler Youth, *Dopolavoro*/*KdF*, maternal ideology (*Battle for Births* vs *Kinder, Küche, Kirche*) disrupted by wartime/industrial reality.',
        '**Algerian War / FLN Women (1954–62, Sample 3)** & **Nanjing New Life Movement (1930s)**: Algerian women fought in *Fidyate/Maquisards* roles yet faced postwar political erasure; Jiang’s Confucian *New Life Movement* failed (**Jack Gray**) as cosmetic traditionalism.',
        'Shows authoritarian and liberation movements alike mobilized traditional/modern gender roles tactically—creating sharp **Continuity & Change** gaps between wartime promises and peacetime hierarchy.',
      ],
      ibExamTip:
        'Anchor every Paper 2 cross-regional claim in the 4 May 2028 concepts (*Cause & Consequence, Continuity & Change, Perspectives, Significance*).',
    },
  ],
};
