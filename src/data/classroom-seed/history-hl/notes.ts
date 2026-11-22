import type { ClassroomSeedNote } from '../types';
import {
  HIST_V3_BAND15_ESSAY_BUILDER,
  HIST_V3_CONCEPTS_2028_EXPLORER,
  HIST_V3_HISTORIOGRAPHY_SCHOOLS_MATRIX,
  HIST_V3_IA_2028_WORKFLOW,
  HIST_V3_IA_RQ_WORKED_EXAMPLE,
  HIST_V3_IA_SOURCES_CHICAGO_LAB,
  HIST_V3_ITALY_BATTLES_MATRIX,
  HIST_V3_ITALY_RISE_TIMELINE,
  HIST_V3_ITALY_SOURCES_LAB,
  HIST_V3_P1_2028_SOURCE_LAB,
  HIST_V3_P2_CROSS_REGIONAL_MATRIX,
  HIST_V3_STALIN_HISTORIOGRAPHY_MATRIX,
  HIST_V3_STALIN_RISE_TERROR_TIMELINE,
  HIST_V3_STALIN_SOURCES_LAB,
  HIST_V3_TOTALITARIANISM_MATRIX,
  HIST_V3_TOTALITARIANISM_SOURCES,
  HIST_V3_WEIMAR_GOLDEN_ERA_WORKED,
  HIST_V3_WEIMAR_NAZI_SOURCES,
  HIST_V3_WEIMAR_NAZI_TIMELINE,
  HIST_V3_WWII_CAUSAL_EXPLORER,
  HIST_V3_WWII_EUROPE_TIMELINE,
  HIST_V3_WWII_HOLOCAUST_MATRIX,
} from './diagrams';

export const HISTORY_NOTES: ClassroomSeedNote[] = [
  // =========================================================================
  // GUIDE 1 (UPGRADED): P3.1 — Liberal Italy & Mussolini's Dictatorship
  // =========================================================================
  {
    topicCode: 'P3.1',
    title: 'Paper 3 Spotlight — Liberal Italy & Mussolini’s Dictatorship (1890–1940)',
    summary:
      'Long-form Paper 3 Europe reference tracing Liberal Italy’s structural crisis (1890–1922), Mussolini’s dual-track seizure of power, totalitarian consolidation, corporatist and "Battle" economic policies, Lateran Accords, and competing Liberal, Marxist, and De Felice-era historiography.',
    sourceFileNames: [
      'Paper 3  - Europe - Pearson 2026.pdf',
      'IB 11 Italy 1890-1939.pptx',
      'Sample Paper 3-2 2028.pdf',
      'Sample Paper 3-4 2028.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Pearson Paper 3 Guiding Questions — Italy (1890–1940)',
        markdown:
          '- **Section 1.1 (Problems of Liberal Italy to 1922):** How severe were the political, economic, and regional divisions of *Italia liberale* after 1890, and did the First World War destroy a viable state or expose an already failing parliamentary order?\n' +
          '- **Section 1.2 (Mussolini’s Rise & Regime):** To what extent was Mussolini’s appointment in October 1922 a legal constitutional transfer versus a violent *coup d’état*, and how completely had Italy become a totalitarian dictatorship by 1939?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Structural Fragility of Liberal Italy (1890–1914)',
      },
      {
        type: 'paragraph',
        markdown:
          'When unified Italy entered the 1890s, the liberal constitutional monarchy rested on narrow socio-political foundations. The *Risorgimento* had achieved territorial unification in 1861–1870 without creating genuine national integration—captured in the famous epigram attributed to Massimo d’Azeglio, **"We have made Italy; now we must make Italians."** Power resided in a restricted franchise (only around **2% of the population** could vote in 1871, expanding partially to **7% in 1882** and universal male suffrage only in **1912–1913**) dominated by northern property-owners who managed parliament through *trasformismo*—a practice of assembling shifting centrist coalitions through patronage, prefectural interference in elections, and personal bargains rather than programmatic party competition.',
      },
      {
        type: 'paragraph',
        markdown:
          'Beneath parliamentary instability lay acute **North–South dualism** (*la questione meridionale*). While the Piedmont–Lombardy–Liguria "industrial triangle" (Milan, Turin, Genoa) built steel, textiles, automobiles (FIAT founded 1899), and hydroelectric power behind the 1887 protective tariff, southern Italy (*il Mezzogiorno*) remained trapped in semi-feudal *latifondi* estates, absentee landlordism, poor soil, malaria, and 70–80% illiteracy in parts of Calabria and Sicily. Emigration became a structural safety valve: over **five million Italians departed between 1901 and 1913**, predominantly from the South. Simultaneously, the **Roman Question** poisoned civic legitimacy. Following the annexation of Rome in 1870, Pope Pius IX’s decree *Non Expedit* ("It is not expedient") barred devout Catholics from voting or standing in national elections, depriving Liberal ministries of conservative rural backing until the **1913 Gentiloni Pact** informally traded Catholic votes for promises against divorce and secularizing school reforms.',
      },
      {
        type: 'paragraph',
        markdown:
          'Socialist and syndicalist militancy challenged the state from the left, while **Giovanni Giolitti** (five times Prime Minister between 1892 and 1921) attempted progressive conciliation—legalizing peaceful strikes, introducing old-age insurance, and widening the electorate in 1912. Yet Giolitti’s accommodation collapsed after the **1911–1912 Italo-Turkish War** in Libya energized aggressive right-wing nationalism (*Associazione Nazionalista Italiana*, Enrico Corradini, Gabriele D’Annunzio) without satisfying either colonial expansionists or anti-militarist workers. By **Red Week (*Settimana Rossa*) in June 1914**, strikes, railway blockades, and local declarations of "republics" across Romagna and the Marche exposed the brittle authority of the Liberal state even before Europe went to war.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. First World War, the "Mutilated Victory", and Biennio Rosso (1915–1922)',
      },
      {
        type: 'paragraph',
        markdown:
          'Italy’s entry into the First World War via the secret **Treaty of London (April 1915)**—signed by Salandra and Sonnino behind parliament’s back against Giolitti’s neutralist majority—fractured politics between *interventisti* and neutralists (Catholics, Socialists, Giolittian liberals). Militarily and fiscally, total war devastated Italy: **650,000 soldiers died**, nearly one million were wounded, real wages dropped sharply amid wartime inflation, and public debt surged past 100% of GDP. The catastrophic defeat at **Caporetto (October 1917)** briefly forged patriotic resilience up to the **Vittorio Veneto (October 1918)** breakthrough, yet postwar expectations collided violently with the Paris Peace Conference.',
      },
      {
        type: 'paragraph',
        markdown:
          'At Versailles, Britain, France, and especially Woodrow Wilson rejected Italy’s demand for Dalmatia and **Fiume** (*Rijeka*) under the Fourteen Points’ nationality principle. Nationalist poet **Gabriele D’Annunzio** coined the rallying cry ***vittoria mutilata*** ("mutilated victory") and in September 1919 led 2,000 rogue veterans to seize Fiume for fifteen months—pioneering the blackshirt uniforms, balcony rhetoric, Roman salutes, and theatrical politics later appropriated by Mussolini. Concurrently, universal male suffrage and proportional representation (introduced in 1919) produced a deadlocked Chamber dominated by two mass anti-system or non-liberal blocs: the maximalist **Italian Socialist Party (PSI, 156 seats)** and Don Luigi Sturzo’s Catholic **Partito Popolare Italiano (PPI, 100 seats)**. Unwilling to cooperate in stable coalitions while rural Po Valley strikes and the **September 1920 factory occupations** (*Biennio Rosso*, 1919–1920) terrified landlords and industrialists, traditional elites looked for extraparliamentary "order."',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Primary Evidence — Mussolini & the Birth of Squadrismo (1919–1922)',
        markdown:
          'In March 1919 Mussolini founded the *Fasci Italiani di Combattimento* in Piazza San Sepolcro, Milan, on a muddled nationalist-syndicalist programme that failed to win a single seat in November 1919. Only by pivoting in late 1920 toward **agrarian *squadrismo***—backed by Po Valley landowners (*agrari*) such as in Emilia and Tuscany—did Fascism become a mass violent movement. By May 1921, Giolitti invited Mussolini’s *Fasci* onto his **National Bloc** electoral list, winning 35 Fascist deputies and legitimizing the *Blackshirts* inside parliament before the **March on Rome (27–28 October 1922)** forced King Victor Emmanuel III to reject Prime Minister Luigi Facta’s decree of martial law and appoint Mussolini Prime Minister.',
      },
      {
        type: 'playable_diagram',
        spec: HIST_V3_ITALY_RISE_TIMELINE,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. From Coalition PM to Totalitarian Dictatorship? (1922–1939)',
      },
      {
        type: 'paragraph',
        markdown:
          'Between October 1922 and January 1925, Mussolini governed as head of a conservative coalition—holding only 35 of 535 seats initially—while constructing parallel party-state instruments: the **Fascist Grand Council** (December 1922) and the **MVSN** (*Milizia Volontaria per la Sicurezza Nazionale*, January 1923), which absorbed unruly *ras* squads onto the state payroll. The **Acerbo Law (July 1923)** awarded two-thirds of parliamentary seats to any list winning at least 25% of the vote, enabling the Fascist *Listone* to win 65% in the **April 1924 election** amid widespread *squadristi* intimidation.',
      },
      {
        type: 'paragraph',
        markdown:
          'When Socialist deputy **Giacomo Matteotti** denounced electoral fraud in parliament on 30 May 1924 and was murdered by Mussolini’s inner circle (*Ceka*) on 10 June, the opposition’s **Aventine Secession** boycotted parliament in expectation that the King would dismiss Mussolini. Victor Emmanuel III declined to act. Pressured by hardline *ras* led by Roberto Farinacci during the December 1924 "Consuls’ Revolt," Mussolini delivered his decisive **3 January 1925 speech**: accepting "political, moral and historical responsibility" for Fascist violence and inaugurating the open dictatorship. The **Leggi Fascistissime (1925–1926)** abolished opposition parties and non-Fascist trade unions, subordinated *prefects* over elected mayors (*podestà*), stripped parliamentary accountability (*Head of Government* responsible solely to the Crown), reinstated the death penalty for political crimes, and created the **OVRA** secret police and the **Special Tribunal for the Defence of the State**.',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Paper 3 Examiner Warning — Evaluating "Totalitarianism" in Practice',
        markdown:
          'Never treat Mussolini’s 1925 slogan *"Tutto nello Stato, niente al di fuori dello Stato, nulla contro lo Stato"* as proof that Italy achieved seamless totalitarian control. Band 13–15 essays explicitly evaluate **polycratic limits and compromises**: King Victor Emmanuel III retained formal command of the armed forces (and dismissed Mussolini in July 1943); the **Lateran Accords (1929)** gave the Catholic Church immense institutional autonomy via **Catholic Action**; and northern industrialists (*Confindustria*) preserved private property inside the nominally corporatist state.',
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Economy, Concordat, Culture, and the Myth of the Corporate State',
      },
      {
        type: 'paragraph',
        markdown:
          'Mussolini’s economic policy shifted from Alberto De Stefani’s orthodox *laissez-faire* phase (1922–1925) to autarkic interventionism centered on the **Corporate State** (Alfredo Rocco’s 1926 *Vidoni* and Labour Charter framework, culminating in 22 Corporations in 1934) and heavily publicized economic **"Battles."** In practice, the **Battle for the Lira** (*Quota 90*, 1926) overvalued the currency at 90 lire to the pound—boosting prestige and heavy arms/chemical cartels dependent on cheap imports while depressing export textiles and cutting workers’ nominal wages by 10–20%. The **Battle for Grain (1925)** raised wheat harvests by roughly 50% by 1939 but diverted fertile land from lucrative olive, citrus, and livestock exports, leaving peasant diets poorer and southern grain prices artificially inflated. Only the **Battle for Land** (*Bonifica Integrale*, Pontine Marshes) produced durable showcase gains, though draining far less than the propaganda claimed.',
      },
      {
        type: 'paragraph',
        markdown:
          'Socially and culturally, the regime balanced coercion with manufactured consensus (*fabbrica del consenso*). The **Lateran Pacts (11 February 1929)**—comprising the Treaty recognizing **Vatican City**, a Financial Convention compensating the papacy, and the **Concordat** establishing Catholicism as state religion with compulsory religious instruction—delivered Mussolini’s peak domestic popularity ("the man sent by Providence," Pius XI). Leisure and youth mobilization through the **Opera Nazionale Dopolavoro (OND)** and **Opera Nazionale Balilla (ONB)** later merged into **GIL (1937)** penetrated everyday life, yet **Hannah Arendt** and **Denis Mack Smith** stress that OVRA’s actual repression (roughly 4,596 prison sentences by the Special Tribunal and ~10,000 *confino* exiles before 1943) remained orders of magnitude less lethal than Stalin’s NKVD or Hitler’s Gestapo/SS. The regime’s anti-Semitic **Racial Laws (1938)**—passed under Axis alignment rather than grassroots demand—shocked many Italians and alienated Church leaders.',
      },
      {
        type: 'playable_diagram',
        spec: HIST_V3_ITALY_SOURCES_LAB,
      },
      {
        type: 'playable_diagram',
        spec: HIST_V3_ITALY_BATTLES_MATRIX,
      },
      {
        type: 'heading',
        level: 2,
        text: '5. Historiographical Debates on Liberal Italy & Mussolini’s Regime',
      },
      {
        type: 'paragraph',
        markdown:
          'High-scoring Paper 3 essays deploy historiographical schools dynamically to weigh causation and regime character rather than tacking names onto conclusions:',
      },
      {
        type: 'paragraph',
        markdown:
          '- **Liberal "Parenthesis" Thesis (Benedetto Croce):** Croce famously argued Fascism was an anomalous interruption ("a moral sickness" / parenthesis) caused by the trauma of the First World War that temporarily derailed an otherwise progressing liberal order.\n' +
          '- **Marxist & Structural Continuity Thesis (Antonio Gramsci, Palmiro Togliatti, Denis Mack Smith):** Countered that Fascism was not an alien aberration but the logical outcome of Liberal Italy’s **incomplete *Risorgimento***, elitist *trasformismo*, and agrarian-industrial class panic against the *Biennio Rosso*. **Denis Mack Smith** depicted Mussolini as an opportunistic journalist lacking coherent ideology whose *"totalitarianism"* was largely propaganda bluff.\n' +
          '- **Consensus & Revisionism (Renzo De Felice):** In his monumental multi-volume biography, De Felice argued that between **1929 and 1936** (Lateran Pacts through the Ethiopian invasion) Mussolini enjoyed genuine **active mass consensus** (*gli anni del consenso*), challenging Marxist claims that the regime ruled solely by terror and big-business coercion.\n' +
          '- **Sacralization of Politics & Totalitarian Aspiration (Emilio Gentile, R.J.B. Bosworth, Martin Blinkhorn, Victoria de Grazia):** **Emilio Gentile** restored the concept of **political religion**—showing how Fascism strove intensely toward totalization through ritual, youth cults, and architecture—while **Bosworth** and **Blinkhorn** emphasized an **"imperfect totalitarianism"** constrained everywhere by the Crown, Church, *agrari*, and local Italian society (*italiani brava gente* vs colonial brutality in Libya and Ethiopia).',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'Theory of Knowledge & Historical Perspectives — Measuring "Consensus" in a Dictatorship',
        markdown:
          'How can historians test **De Felice’s** claim of genuine "consensus" (1929–1936) when free elections, independent newspapers, and uncensored polling did not exist? Prefecture reports, OVRA informants’ notes, OND enrollment data, and post-war oral histories all carry institutional bias: policemen exaggerated loyalty to please Rome or exaggerated threats to justify budgets, while private silence often masked quiet skepticism (*afascismo*) rather than ideological devotion.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Trasformismo',
            definitionMarkdown:
              'Liberal Italy’s parliamentary practice of assembling fluid centrist coalitions via patronage and local prefect manipulation rather than disciplined political parties, fueling systemic corruption.',
            markschemeKeyword: 'trasformismo',
          },
          {
            term: 'Vittoria Mutilata',
            definitionMarkdown:
              'Gabriele D’Annunzio’s nationalist slogan condemning the 1919 Paris settlement for denying Italy promised Dalmatian territories and Fiume despite 650,000 war dead.',
            markschemeKeyword: 'mutilated victory',
          },
          {
            term: 'Biennio Rosso (1919–1920)',
            definitionMarkdown:
              'Two years of intense strikes, Po Valley agrarian seizures, and northern factory occupations that panicked propertied elites and spurred funding for Fascist *squadrismo*.',
            markschemeKeyword: 'Biennio Rosso',
          },
          {
            term: 'Acerbo Law (1923)',
            definitionMarkdown:
              'Electoral reform granting two-thirds of parliamentary seats to any party winning at least 25% of the national vote, entrenching Fascist dominance in April 1924.',
            markschemeKeyword: 'Acerbo Law',
          },
          {
            term: 'Matteotti Crisis (1924–1925)',
            definitionMarkdown:
              'Political crisis after Fascist thugs murdered Socialist deputy Giacomo Matteotti; resolved when the Aventine Secession failed and Mussolini declared open dictatorship on 3 January 1925.',
            markschemeKeyword: 'Matteotti Crisis',
          },
          {
            term: 'Leggi Fascistissime (1925–1926)',
            definitionMarkdown:
              'Decrees banning opposition parties, independent unions, and press freedom while creating the OVRA secret police and the Special Tribunal.',
            markschemeKeyword: 'Leggi Fascistissime',
          },
          {
            term: 'Lateran Accords (1929)',
            definitionMarkdown:
              'Three agreements ending the Roman Question: recognizing Vatican sovereignty, paying financial indemnity, and making Catholicism the state religion.',
            markschemeKeyword: 'Lateran Pacts',
          },
          {
            term: 'Imperfect Totalitarianism',
            definitionMarkdown:
              'Historiographical judgment (Blinkhorn, Bosworth) noting that although Fascist ideology claimed total state power, Mussolini compromised with the King, Army, Church, and Confindustria.',
            markschemeKeyword: 'compromise with traditional elites',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 2 (UPGRADED): P3.2 — Comparative Totalitarianism & Band 13–15 Essays
  // =========================================================================
  {
    topicCode: 'P3.2',
    title: 'Paper 3 Spotlight — Comparative European Totalitarianism (1918–1941) & Band 13–15 Essays',
    summary:
      'Comparative synthesis of fascist and Stalinist state-building (1918–1941) alongside explicit May 2028 Paper 3 Band 13–15 essay engineering grounded in CRHS Sample Essays 1–4 and the official 2028 Paper 3 Markscheme.',
    sourceFileNames: [
      'Paper 3  - Europe - Pearson 2026.pdf',
      'IB 11 European Totalitarianism.pptx',
      'Paper 3 MarkScheme 2028 Extract.pdf',
      'Sample Paper 3-1 2028.pdf',
      'Sample Paper 3-4 2028.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Paper 3 Comparative Inquiry Questions — Totalitarianism & Essay Craft',
        markdown:
          '- **Comparative Structure (1918–1941):** Did interwar dictatorships in Italy, Germany, and the USSR represent a single generic phenomenon of "totalitarianism," or did ideological goals (class vs. race vs. national palingenesis) produce fundamentally distinct regimes?\n' +
          '- **Paper 3 Band 13–15 Standard (May 2028):** What separates a 5/15 descriptive narrative from a 14–15/15 focused, analytical essay demonstrating sustained evaluation of different historical perspectives?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Defining Totalitarianism: Theoretical Models & Analytical Pitfalls',
      },
      {
        type: 'paragraph',
        markdown:
          'Coined critically in Italy by **Giovanni Amendola (1923)** and inverted into a boast by **Mussolini and Giovanni Gentile (1925)**, "totalitarianism" entered Cold War political science as an overarching analytical model. In *The Origins of Totalitarianism* (1951), **Hannah Arendt** argued that Nazi Germany and Stalinist Russia—unlike Mussolini’s regime—created an unprecedented form of domination relying on **total terror**, secret police primacy, atomized mass society, and all-encompassing ideological "laws" of Race or History. Shortly thereafter, **Carl Friedrich and Zbigniew Brzezinski (1956)** codified the famous **six-point totalitarian syndrome**: (1) an official totalist ideology, (2) a single mass party led by one dictator, (3) terroristic police control, (4) monopoly over mass media, (5) monopoly over armed force, and (6) centrally directed control of the economy.',
      },
      {
        type: 'paragraph',
        markdown:
          'Yet post-1960s archival research fractured this neat Cold War symmetry. Historians of the Nazi "structuralist" school (**Hans Mommsen, Martin Broszat**) uncovered chaotic bureaucratic **polycracy**, overlapping party-state fiefdoms, and *"working towards the Führer"* (**Ian Kershaw**) rather than clockwork central planning. Meanwhile, Soviet **revisionist social historians** (**Sheila Fitzpatrick, J. Arch Getty, Moshe Lewin**) demonstrated that Stalin’s state possessed limited administrative reach in rural districts, forcing Moscow to rely on blunt terror waves and local denunciations precisely because bureaucratic capacity was weak. In Fascist Italy, **Renzo De Felice** and **R.J.B. Bosworth** stressed how Mussolini coexisted with the monarchy, Vatican, and armed forces—prompting **Stanley Payne** to classify Fascist Italy as an "aspiring" or "incomplete" totalitarian state rather than a fully realized one.',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Primary & Theoretical Comparison — Mussolini vs. Arendt on the "Total State"',
        markdown:
          'Compare **Mussolini’s *Doctrine of Fascism* (1932)**—*"For the Fascist, everything is in the State, and nothing human or spiritual exists, much less has value, outside the State"*—with **Hannah Arendt (1951)**: whereas Italian Fascism subordinated the party to a traditional nationalist state apparatus, truly totalitarian movements (Nazism and Stalinism) subordinated the conventional state to a dynamic **party-police apparatus** dedicated to perpetual ideological mobilization and mass terror.',
      },
      {
        type: 'playable_diagram',
        spec: HIST_V3_TOTALITARIANISM_MATRIX,
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Mechanics of Control Compared: Terror, Propaganda, Economy & Youth',
      },
      {
        type: 'paragraph',
        markdown:
          'When answering Paper 3 prompts comparing how authoritarian states consolidated or maintained power, high-band responses evaluate **four structural pillars** across concrete evidence rather than listing isolated facts country by country:',
      },
      {
        type: 'paragraph',
        markdown:
          '1. **Coercion & Terror:** Stalin’s USSR relied on massive preemptive and corrective state terror—dekulakization (1929–1932), the **NKVD**, the **Gulag** archipelago (~18 million passing through camps across the Stalin era), and the **1937–1938 Great Terror** (~700,000–750,000 executions under Order 00447 and national operations). Nazi Germany used early political concentration camps (Dachau 1933) to smash the KPD/SPD, then turned SS–Gestapo terror primarily against defined **biological/racial enemies** and non-conformists, enjoying extensive **voluntary denunciations** (**Robert Gellately**). Fascist Italy’s **OVRA** imposed ~10,000 *confino* banishments and only 9 pre-war death sentences by the Special Tribunal before 1940—using intimidation and economic exclusion over mass extermination domestically (contrasting sharply with brutal colonial pacification in **Libya** and **Ethiopia**).\n' +
          '2. **Economic Direction:** Here the Cold War "all totalitarian states are identical" model breaks down hardest. Stalin’s **Command Economy** abolished private industry and agriculture wholesale via **Five-Year Plans** and forced **collectivization**, directly triggering the 1932–1933 famine. Nazi Germany kept private capitalist ownership (**IG Farben, Krupp**) intact while subordinating investment, labor allocation (**DAF**), and raw materials to rearmament under **Schacht’s New Plan (1934)** and **Göring’s Four-Year Plan (1936)**. Italy’s **Corporate State** masked conservative wage depression and cartel protection behind rhetorical corporatism.\n' +
          '3. **Propaganda, Consent & Youth:** Goebbels’ **RMVP** (*Reich Ministry of Public Enlightenment and Propaganda*), Mussolini’s **MinCulPop** (1937), and Stalin’s **Agitprop / Socialist Realism (1934)** saturated radio, cinema (*Leni Riefenstahl*, *Istituto Luce*, *Eisenstein*), and compulsory youth leagues (**Hitler Youth / BDM**, **ONB/GIL**, **Komsomol/Pioneers**). Historians increasingly recognize that **manufactured consensus and material concessions** (*Kraft durch Freude*, *Dopolavoro*, Stakhanovite upward mobility for worker-promotees) operated alongside terror to secure compliance.\n' +
          '4. **Religion, Traditional Elites & Foreign Revisionism:** Totalitarian ambition collided most starkly with entrenched elites. Mussolini formally stabilized the Crown and Vatican (*1929 Lateran Pacts*), preserving Catholic Action and Savoyard army oaths; Hitler compromised provisionally via the *1933 Reichskonkordat* while steadily absorbing military command after the 1938 *Blomberg–Fritsch Affair*; whereas Stalin crushed the Russian Orthodox Church, liquidated traditional aristocratic/bourgeois classes outright, and subordinated the Red Army to political commissars and the 1937–1938 officer purge. Crucially, ideological expansionism differed in domestic payoff: Hitler’s bloodless 1935–1938 foreign triumphs fueled peak popularity at home, whereas Mussolini’s Ethiopian and Axis gambles eventually overstrained Italy’s fragile industrial base.',
      },
      {
        type: 'playable_diagram',
        spec: HIST_V3_TOTALITARIANISM_SOURCES,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Engineering a May 2028 Paper 3 Band 13–15 Essay (Markscheme Forensics)',
      },
      {
        type: 'paragraph',
        markdown:
          'According to the **May 2028 Paper 3 Markscheme**, HL candidates must answer **two 15-mark essay questions** from two different regional studies in **2 hours** (30 marks total, **35% of HL grade**). Notice the **2028 curriculum shift**: the old IB Paper 3 five-markband grid centers Band 13–15 strictly on **consistent command-term focus**, **accurate, specific, well-integrated knowledge**, **clear and coherent organization**, and—above all—**"well-developed evaluation of different perspectives"** supporting a **"consistent and well-substantiated argument."** Notice how Band 7–9 essays merely summarize *"some historians say X,"* Band 10–12 essays provide balanced analytical paragraphs with periodic judgment, and Band 13–15 responses weave rival schools directly into causal or comparative evaluation inside every major section.',
      },
      {
        type: 'paragraph',
        markdown:
          'Classroom benchmark diagnostics across `Sample Paper 3-1`, `Sample Paper 3-2`, `Sample Paper 3-3`, and `Sample Paper 3-4` reveal four concrete engineering habits that lift scripts into Band 13–15:\n' +
          '- **Step 1 — Answer the Command Term in Sentence One:** Open with an explicit thesis weighing the question’s central debate rather than wasting 80 words on background biography (*"Hitler was born in Austria..."* or *"In 1905 Russia was backward..."*).\n' +
          '- **Step 2 — Ban Split-Half Structure on Comparative Prompts:** On *"Compare and contrast"* prompts, organize paragraphs around **analytical themes** (*Terror, Economy, Traditional Elites, Gender & Youth*), bringing **both regimes inside every paragraph** through comparative markers (*"Whereas Mussolini..., Stalin..."*).\n' +
          '- **Step 3 — Pair Quantitative Facts With Historiographical Debate:** Combine precise factual anchors (e.g., *Order 00447 ~680k–750k executions*, *Quota 90 wage cuts*, *November 1932 NSDAP drop to 33.1%*) directly with the school they support or complicate (*Conquest vs Getty*, *De Felice vs Mack Smith*, *Bracher vs Mommsen*).\n' +
          '- **Step 4 — Qualify Your Conclusion Without Neutral Fence-Sitting:** Reject *"Both were equally important"* clichés. State which factor carried greater causal weight and explain the exact boundary condition where counter-arguments apply.',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Why CRHS Sample Paper 3-1 Scored 5/15 vs. Sample Paper 3-4 Scoring 14/15',
        markdown:
          'Look closely at the benchmarked classroom essays:\n' +
          '- **Sample Paper 3-1 (5/15 — "To what extent did the 1905 Revolution weaken Tsarism?"):** Spent the first two paragraphs narrating Bloody Sunday chronologically, made sweeping assertions ("the Tsarist regime was permanently weakened"), ignored the 1906–1914 Stolypin stabilization and October Manifesto recovery, and lacked any historiographical comparison (**Optimists vs Pessimists**).\n' +
          '- **Sample Paper 3-4 (14/15 — "Assess the impact of the First World War on the collapse of the Romanov dynasty"):** Opened immediately with an explicit **thesis setting the analytical balance** (World War I acted as the **decisive catalyst**, though structural autocratic vulnerabilities pre-1914 conditioned failure), organized thematic body paragraphs (**military mismanagement & Nicholas at Stavka**, **inflation/railways/bread crisis**, **political alienation of the Progressive Bloc & Rasputin**), weighed **Structuralist Pessimists (Pipes, Figes)** against **Optimists (Stone, Acton)** inside the argument, and ended with a weighed judgment rather than a mechanical summary.',
      },
      {
        type: 'playable_diagram',
        spec: HIST_V3_BAND15_ESSAY_BUILDER,
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'Theory of Knowledge — Is "Totalitarianism" a Useful Concept or a Cold War Weapon?',
        markdown:
          'Classifying Fascist Italy, Nazi Germany, and the Soviet Union under one umbrella term illuminates common techniques of mass mobilization, propaganda, and single-party monopoly. However, **revisionist and Marxist historians** warn that equating Nazism and Stalinism served **Cold War ideological purposes** in the 1950s—obscuring stark differences between racial extermination and forced class-industrial modernization, and downplaying bureaucratic chaos within both dictatorships.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Friedrich-Brzezinski Syndrome (1956)',
            definitionMarkdown:
              'Classic Cold War six-trait definition of totalitarianism: official ideology, single mass party, police terror, media monopoly, weapons monopoly, and centrally directed economy.',
            markschemeKeyword: 'totalitarian model',
          },
          {
            term: 'Polycracy',
            definitionMarkdown:
              'Competing, overlapping party and state agencies under a dictator (prominently Nazi Germany; also evident in Fascist compromises), challenging the myth of monolithic efficiency.',
            markschemeKeyword: 'polycratic',
          },
          {
            term: 'Socialist Realism',
            definitionMarkdown:
              'Official 1934 Soviet artistic doctrine mandating heroic, accessible depictions of collectivization, industrialization, and Stalinist leadership.',
            markschemeKeyword: 'Socialist Realism',
          },
          {
            term: 'Kraft durch Freude (KdF) & Dopolavoro (OND)',
            definitionMarkdown:
              'State leisure, holiday, and sports organizations in Nazi Germany and Fascist Italy designed to manufacture working-class consent and police free time.',
            markschemeKeyword: 'consent and leisure',
          },
          {
            term: 'Command Economy vs. Corporate State',
            definitionMarkdown:
              'Structural contrast between Soviet total nationalization/Five-Year Plans and Nazi/Italian retention of private industrial property under state strategic controls.',
            markschemeKeyword: 'economic direction',
          },
          {
            term: 'Evaluative Judgment (Band 13–15)',
            definitionMarkdown:
              'Explicitly weighing relative causal importance (e.g., catalyst vs. precondition; coercion vs. consent) while integrating competing historians throughout every body paragraph.',
            markschemeKeyword: 'substantiated evaluation',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 3 (UPGRADED): CONCEPTS — May 2028 Historical Investigation (24 Marks)
  // =========================================================================
  {
    topicCode: 'CONCEPTS',
    title: 'IA Spotlight — May 2028 Historical Investigation Blueprint (24 Marks · 3 Sections)',
    summary:
      'Complete, syllabus-exact guide to the reformed May 2028 History IA (24 marks across 3 Sections, <=2,200 words, max 7 sources, Chicago Notes & Bibliography)—replacing the pre-2028 Criterion A/B/C and Reflection structure.',
    sourceFileNames: [
      'IB HISTORY 11 INTRODUCTION.pptx',
      'Sample 1.pdf',
      'Sample 2.pdf',
      'Sample 3.pdf',
      'cmos-nb-sample-paper-purdue-owl-2-publish-20260312.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'May 2028 History IA Essential Inquiry Checklist',
        markdown:
          '- **Section 1 (6 Marks):** Does your **Historical Inquiry Question** anchor itself explicitly in one or more of the four 2028 concepts (*Cause & Consequence*, *Continuity & Change*, *Perspectives*, *Significance*), justify historical relevance, and outline viable methodological parameters?\n' +
          '- **Section 2 (6 Marks):** Are **no more than 7 total sources** deployed organically to examine **perspectives, provenance, reliability, and limits** directly in relation to your question?\n' +
          '- **Section 3 (12 Marks):** Does your synthesis build an evidence-backed, multi-perspective historical argument totaling **<= 2,200 words** across all three sections with crisp **Chicago Manual of Style (Notes & Bibliography)** citations?',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'CRITICAL MAY 2028 IA CHANGE — Do Not Use Legacy Pre-2028 Templates!',
        markdown:
          'Online IA guides written before 2026 reflect the **retired 25-mark syllabus** (Section 1 Identification/OPCVL 6m + Section 2 Investigation 15m + Section 3 Reflection 4m). In **May 2028**, those rules are **OBSOLETE**:\n' +
          '1. **Total marks changed from 25 -> 24** (**Section 1: 6m · Section 2: 6m · Section 3: 12m**).\n' +
          '2. **The standalone Reflection section (old Section 3, 4m) is REMOVED.**\n' +
          '3. **Hard cap of 7 sources maximum** (primary + secondary combined) and **strict 2,200-word ceiling** across Sections 1–3.\n' +
          '4. **Do NOT paste robotic two-source "OPCVL boxes"** in Section 2; evaluate perspectives and limitations purposefully across your source base.',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Exact 2028 24-Mark Architecture & CRHS Milestone Timeline',
      },
      {
        type: 'paragraph',
        markdown:
          'For **Class of 2028 HL candidates**, the Historical Investigation represents **20% of the overall IB grade** and invites independent inquiry into any historical event, process, or problem (no mandatory 10-year rule blackout beyond choosing genuine historical rather than breaking-news journalism). Unlike older descriptive research papers, the May 2028 specification fuses conceptual rigor with transparent source criticism:',
      },
      {
        type: 'paragraph',
        markdown:
          '- **Section 1 — Formulation of the Historical Inquiry Question (6 Marks, ~250–350 words):** Present your sharp, debatable inquiry question (**not** a closed yes/no prompt or factual summary), explain why the problem matters historically (**significance** / historiography gap), clarify key concepts (*Cause & Consequence*, *Continuity & Change*, *Perspectives*, *Significance*), and define clear temporal, geographic, and archival **scope**.\n' +
          '- **Section 2 — Evaluation of Sources and Perspectives (6 Marks, ~500–650 words):** Analyze up to **7 carefully curated sources** (ideally balancing primary archival evidence—speeches, diplomatic cables, diaries, statistics—with contrasting secondary historiography). Examine **purpose, provenance, ideological vantage point, bias, and archival gaps**, showing **how those strengths and limitations govern what claims your investigation can support**.\n' +
          '- **Section 3 — Synthesis, Analysis, and Evaluation (12 Marks, ~1,150–1,350 words):** Deliver a structured, concept-driven historical argument directly answering Section 1’s question. Weigh competing schools of thought, cross-examine primary quotations against secondary interpretations, acknowledge counter-evidence, and reach a **nuanced, evidence-grounded conclusion**.',
      },
      {
        type: 'paragraph',
        markdown:
          'At CRHS, the investigation spans Year 1 and Year 2 in staged deliverables: **Mock IA (Sections 1 & 2 due January 17, 2027)** establishes question formulation, source curation (max 7), and source-perspective analysis before Year 2 adds **Section 3 drafting (February 1, 2028)** and the **final <=2,200-word submission with full Chicago Bibliography (March 7, 2028)**.',
      },
      {
        type: 'playable_diagram',
        spec: HIST_V3_IA_2028_WORKFLOW,
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Crafting Band-Top Questions, Section 2 Source Criticism & Lessons from Samples 1–3',
      },
      {
        type: 'paragraph',
        markdown:
          'Examining CRHS benchmark papers **`Sample 1.pdf`**, **`Sample 2.pdf`**, and **`Sample 3.pdf`** alongside the May 2028 rubric reveals why tight scoping separates Band 18–24 investigations from descriptive essays that exhaust their word budget before reaching evaluation:\n' +
          '- **Section 1 Inquiry Discipline (~250–320 words):** Frame an arguable causal, comparative, or significance question inside a **3–15 year boundary** (*"To what extent did X rather than Y shape Z between 1924 and 1933?"*). Avoid yes/no framing (*"Was Stalin ruthless?"*) and avoid double-barreled prompts linking two unrelated wars or decades. Define the core **2028 concept** upfront (*Cause & Consequence*, *Continuity & Change*, *Perspectives*, or *Significance*) and state why archival tensions make the problem worth investigating.\n' +
          '- **Section 2 Organic Source & Perspectives Evaluation (~520–620 words):** Because May 2028 **retires mechanical two-source OPCVL templates** while imposing a **7-source ceiling**, treat your entire source base as an **evidence ecosystem**. Group or sequence contrasting voices directly against your inquiry question: explain *what institutional vantage point* generated a primary speech, diary, or diplomatic cable, *what omissions or ideological filters* limit it, and *how a rival historiographical school* (e.g., Revisionist quantitative data vs. Orthodox émigré memoir) compensates for or complicates those blind spots.\n' +
          '- **Section 3 Word-Budgeted Synthesis (~1,200–1,350 words):** Never summarize Section 2 again in Section 3, and never insert multi-sentence narrative timelines. Dedicate 3–4 tight thematic sub-sections directly testing rival interpretations against quoted primary evidence, continuously signaling *how far* source limits from Section 2 temper your intermediate judgments.',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Benchmarked IA Architecture — Adapting Samples 1–3 to May 2028 Rules',
        markdown:
          'When reviewing past high-scoring investigations (**`Sample 1`**, **`Sample 2`**, **`Sample 3`**), notice two vital 2028 adaptations: first, strip away any standalone post-essay **Reflection** section (previously Section 3, 4 marks) and redistribute methodological awareness into **Section 2 (provenance/limits)** and **Section 3 (weighing counter-evidence)**; second, tighten source lists ruthlessly to **no more than 7 total works**—two or three sharply contrasting contemporary primary texts paired with four authoritative, competing secondary historians usually outperform ten superficial citations.',
      },
      {
        type: 'playable_diagram',
        spec: HIST_V3_IA_RQ_WORKED_EXAMPLE,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Chicago Manual of Style (Notes & Bibliography) Precision Rules',
      },
      {
        type: 'paragraph',
        markdown:
          'CRHS mandates **Chicago Manual of Style — Notes & Bibliography (CMOS NB)** (`cmos-nb-sample-paper-purdue-owl-2-publish-20260312.pdf`). **Footnotes and the final Bibliography are excluded from the 2,200-word limit**, provided you do **not** sneak extra analysis into discursive footnotes (examiners disregard or penalize word-count evasion). Note the mirror-image punctuation shift between footnotes (conversational sentence order: `First Last`, commas, publication data in parentheses, exact pinpoint page) and the alphabetized Bibliography (`Last, First.`, periods separating elements, no parentheses, full journal page span):',
      },
      {
        type: 'paragraph',
        markdown:
          '- **First Footnote (Book):** `1. Ian Kershaw, *Hitler, 1889–1936: Hubris* (New York: W. W. Norton, 1998), 412.`\n' +
          '- **Subsequent Footnote (Shortened — Preferred over *Ibid.* in CMOS 17th/18th):** `4. Kershaw, *Hitler, 1889–1936*, 419.`\n' +
          '- **First Footnote (Journal Article):** `2. Sheila Fitzpatrick, "Revisionism in Soviet History," *History and Theory* 46, no. 4 (December 2007): 82.`\n' +
          '- **First Footnote (Primary Source Inside an Edited Collection):** `3. Benito Mussolini, "Speech to the Chamber of Deputies, 3 January 1925," in *Italian Fascisms from Pareto to Gentile*, ed. Adrian Lyttelton (London: Jonathan Cape, 1973), 291.`\n' +
          '- **First Footnote (Digitized Archive / Reputable Database):** Include document author/title, original date, archive/site title, full URL, and access date if publication/revision date is absent.\n' +
          '- **Bibliography Entry (Book — Hanging Indent, Periods):** `Kershaw, Ian. *Hitler, 1889–1936: Hubris*. New York: W. W. Norton, 1998.`\n' +
          '- **Bibliography Entry (Journal Article — Full Page Span):** `Fitzpatrick, Sheila. "Revisionism in Soviet History." *History and Theory* 46, no. 4 (December 2007): 77–91.`\n' +
          '- **Two Common IA Errors:** Never leave bare URLs inside prose or parenthetical `(Kershaw, 1998)` APA/MLA citations, and never split Primary vs. Secondary lists if your total exceeds **7 sources combined** unless cleanly labeled subsections total `<= 7`.',
      },
      {
        type: 'playable_diagram',
        spec: HIST_V3_IA_SOURCES_CHICAGO_LAB,
      },
      {
        type: 'callout',
        variant: 'syllabus_link',
        title: 'Pre-Submission May 2028 IA Self-Audit Protocol (CRHS Checklist)',
        markdown:
          'Before submitting your **January 2027 Mock IA (Sections 1 & 2)** or **March 2028 Final IA**, verify five non-negotiable rubric checks:\n' +
          '1. **Word Count Strip Test:** Exclude title page, table of contents (if used), numbered footnotes, and final Bibliography; confirm combined body prose across Sections 1, 2, and 3 totals **<= 2,200 words** (aim for **2,050–2,180 words** so automated checkers never clip your conclusion).\n' +
          '2. **Hard 7-Source Count:** Count *every* unique book, chapter, journal article, speech, newspaper, or archival URL cited in Section 2, footnotes, and Bibliography—keep the grand union **<= 7**.\n' +
          '3. **Zero Legacy Artifacts:** Confirm no standalone "Reflection" header or tabular two-source "OPCVL checklist" remains anywhere in your manuscript.\n' +
          '4. **Concept & Question Alignment:** Verify every thematic subsection in Section 3 explicitly answers Section 1’s Inquiry Question rather than drifting into narrative context.\n' +
          '5. **Chicago NB Consistency:** Confirm every superscript footnote begins with `First Last` and matches its alphabetized `Last, First.` Bibliography partner with shortened subsequent notes instead of *Ibid.*',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'Theory of Knowledge — Can 7 Sources Support a Reliable Historical Judgment?',
        markdown:
          'Capping the 2028 IA at **7 sources** teaches an essential methodological lesson in historical epistemology: truth in history does not grow linearly with source volume; it depends on **triangulation across contrasting genres and vantage points**. A tight corpus pairing two contemporary primary eyewitnesses (e.g., an official state decree and a private diary) with three rival secondary schools (Orthodox, Revisionist, Post-Revisionist) yields far deeper truth claims than twenty unexamined web pages.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'May 2028 24-Mark IA Structure',
            definitionMarkdown:
              'Section 1 Inquiry Question (6m), Section 2 Sources & Perspectives (6m, max 7 sources), Section 3 Synthesis & Evaluation (12m), capped at 2,200 words with Reflection removed.',
            markschemeKeyword: '24 marks',
          },
          {
            term: '7-Source Cap',
            definitionMarkdown:
              'Mandatory May 2028 ceiling on total primary and secondary works examined and listed across Section 2, Section 3, and the Bibliography.',
            markschemeKeyword: 'maximum 7 sources',
          },
          {
            term: 'Perspectives-Led Source Analysis (Section 2)',
            definitionMarkdown:
              '2028 replacement for isolated OPCVL checklists: examining provenance, audience, bias, and omissions to evaluate how sources illuminate competing viewpoints on the inquiry question.',
            markschemeKeyword: 'perspectives and provenance',
          },
          {
            term: 'Chicago Notes & Bibliography (CMOS NB)',
            definitionMarkdown:
              'Academic citation system pairing superscript footnotes (First Last, commas, pinpointed page) with an alphabetized Bibliography (Last, First., periods, full page span).',
            markschemeKeyword: 'Chicago NB',
          },
          {
            term: 'Word Count Ceiling (2,200 Words)',
            definitionMarkdown:
              'Strict combined word limit covering Sections 1, 2, and 3; excludes title page, footnotes, bibliography, and non-discursive appendices.',
            markschemeKeyword: '2,200 words',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 4 (UPGRADED): CONCEPTS — 4 Historical Concepts & Historiography
  // =========================================================================
  {
    topicCode: 'CONCEPTS',
    title: 'May 2028 Core Historical Concepts & Historiography (Year 2 P1/P2 Reference)',
    summary:
      'Conceptual operating manual for the 4 May 2028 IB History Concepts (Cause & consequence, Continuity & change, Perspectives, Significance), comparative historiographical frameworks, and ToK epistemological traps.',
    sourceFileNames: [
      'IB HISTORY 11 INTRODUCTION.pptx',
      'Paper 3 MarkScheme 2028 Extract.pdf',
      'Sample Paper 3-4 2028.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'IB May 2028 Conceptual Inquiry Questions',
        markdown:
          '- **Conceptual Integration:** How do the **four 2028 IB Historical Concepts** transform factual narratives into analytical IB arguments across Papers 1, 2, 3, and the 24-mark IA?\n' +
          '- **Historiographical Synthesis:** Why do competing schools of history—**Liberal, Marxist, Structuralist, Intentionalist, Revisionist, Feminist, and Post-Colonial**—produce sharply different verdicts from identical archives?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. From Six Concepts to Four: The May 2028 Conceptual Architecture',
      },
      {
        type: 'paragraph',
        markdown:
          'Earlier IB History syllabi balanced six separate concepts (*Change, Continuity, Causation, Consequence, Significance, Perspectives*). In the **reformed May 2028 curriculum**, the IB consolidated those six into **four paired, operational conceptual lenses** that anchor Paper 1 source synthesis, Paper 2 cross-regional essays, Paper 3 regional historiography, and Section 1–3 of the IA:',
      },
      {
        type: 'paragraph',
        markdown:
          '1. **Cause and Consequence (`C.1`):** Historians never explain major historical outcomes—such as Mussolini’s appointment in 1922, Weimar collapse in 1933, or WWII’s outbreak in 1939—through single causes. Band 13–15 arguments build **causal hierarchies**: distinguishing **long-term structural preconditions** (e.g., *trasformismo*, Article 48, North–South dualism) from **medium-term catalysts** (e.g., Great Depression deflation, 1920 *Biennio Rosso*) and **short-term triggers** (e.g., Victor Emmanuel III refusing martial law; Papen–Hindenburg backroom intrigues). Crucially, *consequence* distinguishes **intended** effects (Five-Year Plans tripling steel output) from **unintended** consequences (the 1932–1933 famine or Hitler’s self-destructive multi-front overreach).\n' +
          '2. **Continuity and Change (`C.2`):** Revolutions and regime transitions rarely wipe the slate clean. Assessing **extent** (*"To what extent did 1925/1933/1917 mark a fundamental break?"*) requires holding continuity and change in simultaneous tension: Stalin broke dramatically with Tsarist property relations while reviving autocratic secret policing, internal passports, and Great Russian chauvinism; Mussolini revolutionized political aesthetics while keeping the Savoyard Crown, Civil Code, and industrial cartels intact.\n' +
          '3. **Perspectives (`C.3`):** Operates on **two distinct levels**. First, **contemporary historical actors** experienced identical events radically differently by class, gender, ethnicity, ideology, and geography (e.g., a northern Piedmont industrialist vs. an Emilian socialist *bracciante* in 1921; a Wehrmacht officer vs. a Warsaw Ghetto chronicler in 1942). Second, **later historians** filter the same documents through evolving methodological paradigms and post-Cold War archival openings.\n' +
          '4. **Significance (`C.4`):** Significance is **assigned, not inherent**—and changes across time and audience. Using **Christine Counsell’s "5 Rs"** heuristic (**Remarkable, Remembered, Resonant, Resulting in change, Revealing**), candidates justify *why* an event (e.g., Matteotti’s assassination, the 1929 Lateran Pacts, Stalingrad, Nuremberg Trials) altered institutional trajectories or exposes deeper structural truths about an era.',
      },
      {
        type: 'playable_diagram',
        spec: HIST_V3_CONCEPTS_2028_EXPLORER,
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Mastering Historiographical Schools Without "Name-Dropping"',
      },
      {
        type: 'paragraph',
        markdown:
          'IB chief examiners repeatedly warn against **decorative historiography**—sentences like *"Historian X says yes, while Historian Y says no."* Top-band essays embed historiography **dialectically**: identifying **what school of interpretation** a historian represents, **what evidence base or method** drives that interpretation, and **where its explanatory limits lie** when tested against rival viewpoints. Every school illuminates a distinct dimension while carrying characteristic blind spots:',
      },
      {
        type: 'paragraph',
        markdown:
          '- **Liberal / Orthodox Political History (e.g., Benedetto Croce, Karl Dietrich Bracher, Robert Conquest):** Centers constitutional institutions, diplomatic cables, and top-level party decrees, placing decisive agency on individual dictators’ ideological blueprints and elite miscalculations (*"the Liberal parenthesis,"* *"Hitler’s legal revolution,"* *"Stalin’s total terror"*). *Strength:* anchors chronological precision and state policy accountability; *Limit:* understates grassroots social compliance, economic constraints, and bureaucratic chaos.\n' +
          '- **Marxist & Structural-Class Analysis (e.g., Antonio Gramsci, Timothy Mason, Isaac Deutscher):** Explains political upheavals through class conflict, agrarian–industrial capital panic (*Po Valley agrari*, German big business/Junkers), and capitalist crisis rather than isolated leader psychology. *Strength:* uncovers socio-economic interests sustaining authoritarianism; *Limit:* struggles to account for self-destructive racial ideology (*Holocaust*, *Barbarossa*) or working-class populist appeal.\n' +
          '- **Structuralist / Functionalist Models (e.g., Hans Mommsen, Martin Broszat, J. Arch Getty):** Investigates archives of rival ministries, *Gauleiter*, and regional NKVD committees to reveal polycratic turf wars, administrative overload, and *"cumulative radicalization"* driven by crisis improvisation rather than master blueprints. *Strength:* demystifies monolithic propaganda myths; *Limit:* risks minimizing dictators’ central ideological direction (*corrected by Ian Kershaw and Oleg Khlevniuk*).\n' +
          '- **Social, Everyday-Life & Gender Revisionism (e.g., Renzo De Felice, Sheila Fitzpatrick, Victoria de Grazia, Claudia Koonz, Detlev Peukert):** Mines petitions, police denunciation files, welfare enrollment data, and family legislation (*OND*, *KdF*, *Great Retreat*, *vydvizhentsy*) to show how ordinary citizens, women, and workers negotiated consent, upward mobility, and quiet non-conformity. *Strength:* recovers marginalized lived *perspectives*; *Limit:* can soften systemic terror unless paired with macro-coercion evidence.\n' +
          '- **Post-1991 Archival & Cultural Synthesis (e.g., Stephen Kotkin, Orlando Figes, Richard Evans, Emilio Gentile):** Fuses newly declassified Soviet Politburo protocols and German regional archives with cultural history (*political religion*, *Speaking Bolshevik*) to reconcile top-down lethal intent with social mobilization.',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'E.H. Carr on Facts vs. Historical Interpretation (*What Is History?*, 1961)',
        markdown:
          '*"The facts are really not at all like fish on the fishmonger’s slab. They are like fish swimming about in a vast and sometimes inaccessible ocean; and what the historian catches will depend, partly on chance, but mainly on what part of the ocean he chooses to fish in and what tackle he chooses to use."* — **E.H. Carr** captures why archival selection, guiding questions, and conceptual lenses shape every historical verdict.',
      },
      {
        type: 'playable_diagram',
        spec: HIST_V3_HISTORIOGRAPHY_SCHOOLS_MATRIX,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Operationalizing Command Terms & Concept-Driven Thesis Statements',
      },
      {
        type: 'paragraph',
        markdown:
          'Every IB History prompt across Papers 1, 2, and 3 opens with a precise **command term** dictating argument structure from sentence one of your introduction:\n' +
          '- **"Evaluate" / "Assess":** Weigh relative strengths, limitations, successes, or causal weight against transparent criteria—reject vague *"there were successes and failures"* conclusions by stating *which* criterion carried greater weight.\n' +
          '- **"To what extent":** Establish a calibrated judgment early (e.g., *"To a significant yet structurally incomplete extent..."*), explicitly testing counter-arguments and identifying the chronological or institutional boundaries where your claim stops holding.\n' +
          '- **"Compare and contrast":** Structure paragraphs **thematically** (*Ideology, Terror, Economic Direction, Traditional Elites*), integrating **both** historical cases inside every paragraph through alternating comparative transitions.\n' +
          '- **"Discuss" / "Examine":** Probe underlying assumptions in the prompt’s quotation by setting competing schools (*Intentionalist vs. Structuralist*; *Optimist vs. Pessimist*) in direct analytical dialogue.\n\n' +
          '**Concept-Driven Blueprint Example:** If asked *"To what extent did Mussolini’s 1929 Lateran Accords represent a turning point in Fascist rule?"*, anchor **Continuity & Change (`C.2`)** and **Significance (`C.4`)** together: show *Resulting in change* (healing the 59-year Roman Question and unlocking De Felice’s consensus peak) alongside enduring *Continuity* (Catholic Action’s independent institutional power limiting totalization). That single analytical move separates Band 13–15 responses from descriptive factual summaries.',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Three Habits That Cap IB Essays Below Band 10',
        markdown:
          '1. **Teleology & Hindsight Bias:** Assuming 1919/1929 crises *inevitably* ended in Auschwitz or Stalingrad—ignoring genuine contingencies (e.g., Weimar’s 1924–1928 stabilization or November 1932 Nazi vote decline).\n' +
          '2. **Chronological Narration Instead of Analytical Themes:** Telling the story *"First this happened, then that happened"* traps an essay in descriptive bands (4–6/15).\n' +
          '3. **Single-Cause Monocausalism:** Blaming WWII solely on Hitler’s *Mein Kampf* or blaming Stalin’s terror solely on paranoia without weighing systemic, geopolitical, and institutional dynamics.',
      },
      {
        type: 'callout',
        variant: 'syllabus_link',
        title: 'Applying All 4 Concepts Together — Case Study: The 1929 Great Depression & European Dictatorship',
        markdown:
          'Top-band essays integrate all four May 2028 concepts organically rather than forcing labels mechanically:\n' +
          '- **Cause and Consequence (`C.1`):** In Germany, the October 1929 Wall Street credit freeze did not create anti-Versailles nationalism ex nihilo; rather, it activated latent *structural preconditions* (reparations debt, *Article 48* normalization, agricultural distress since 1927), producing the unintended consequence of **Heinrich Brüning’s** deflationary cuts polarizing voters toward **18.3% (1930)** and **37.3% (July 1932)** NSDAP support.\n' +
          '- **Continuity and Change (`C.2`):** Despite catastrophic output drops in Fascist Italy and Weimar Germany, authoritarian regimes displayed stark policy contrasts: Hitler’s regime pivoted abruptly from deflation to **Schacht’s MEFO-bill** public works and rearmament, whereas Mussolini’s **1933 IRI bailouts** institutionalized long-term state shareholding (*continuity* with **1926 Quota 90** bank-cartel protection).\n' +
          '- **Perspectives (`C.3`):** Whereas Berlin industrialists viewed emergency decree austerity as fiscal discipline and Soviet state planners hailed Wall Street’s crisis in *Pravda* as proof of **Marxist capitalist collapse** vindicating the **First Five-Year Plan**, six million unemployed German workers experienced survival desperation fueling street radicalization.\n' +
          '- **Significance (`C.4`):** Under **Counsell’s 5 Rs**, the Depression proved decisively **Resulting in change** across democratic collapse in Central Europe yet **Revealing** of deeper global trade nationalism (`Manchuria 1931`) that wrecked League of Nations collective security long before 1939.',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'Theory of Knowledge — Objectivity, Bias, and Archival Silences',
        markdown:
          'Unlike physics experiments, historical events cannot be rerun under controlled conditions. Every archival record reflects **who held literacy, printing presses, and filing cabinets**: state dossiers privilege rulers over illiterate peasants; post-1991 Soviet archives shifted consensus away from pure **Orthodox Totalitarian** views (*Pipes, Conquest*) toward **Revisionist** social complexity (*Fitzpatrick, Getty*), yet remaining classified NKVD files still skew interpretation.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Cause and Consequence (C.1)',
            definitionMarkdown:
              '2028 core concept analyzing multi-causal hierarchies (preconditions, catalysts, triggers) and intended versus unintended outcomes.',
            markschemeKeyword: 'causal hierarchy',
          },
          {
            term: 'Continuity and Change (C.2)',
            definitionMarkdown:
              '2028 core concept measuring how deeply regimes, economies, or societies broke with inherited structures versus preserving underlying patterns.',
            markschemeKeyword: 'continuity and change',
          },
          {
            term: 'Perspectives (C.3)',
            definitionMarkdown:
              '2028 core concept encompassing both diverse contemporary lived experiences and conflicting historiographical schools over time.',
            markschemeKeyword: 'perspectives',
          },
          {
            term: 'Significance (C.4)',
            definitionMarkdown:
              '2028 core concept assessing historical importance via impact, durability, symbolic resonance, and what an event reveals (Counsell’s 5 Rs).',
            markschemeKeyword: 'historical significance',
          },
          {
            term: 'Teleology / Hindsight Fallacy',
            definitionMarkdown:
              'Flawed historical reasoning that treats an eventual outcome (e.g., Hitler becoming Chancellor) as predetermined from decades earlier.',
            markschemeKeyword: 'teleology',
          },
          {
            term: 'Structuralism vs. Intentionalism',
            definitionMarkdown:
              'Foundational historiographical divide pitting long-term institutional, economic, and bureaucratic pressures against deliberate ideological agency of top leaders.',
            markschemeKeyword: 'structuralist versus intentionalist',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 5 (NEW): P3.3 — Weimar Collapse, Hitler's Rise & Nazi Dictatorship
  // =========================================================================
  {
    topicCode: 'P3.3',
    title: 'Paper 3 Europe — Weimar Collapse, Hitler’s Rise & Nazi Dictatorship (1918–1939)',
    summary:
      'Comprehensive Pearson 2026 study guide covering Weimar Republic instability, the debate over the 1924–1929 "Golden Era", Great Depression radicalization, Hitler’s 1933 legal revolution, Gleichschaltung, Nazi social-economic policies, and Intentionalist vs. Structuralist historiography.',
    sourceFileNames: [
      'Paper 3  - Europe - Pearson 2026.pdf',
      'IB 11 European Totalitarianism.pptx',
      'Sample Paper 3-3 2028.pdf',
      'Paper 3 MarkScheme 2028 Extract.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Pearson Paper 3 Guiding Questions — Germany (1918–1939)',
        markdown:
          '- **Section 1.3 (Weimar Collapse):** How far were the Weimar Republic’s failures built into its 1918–1919 birth defects versus triggered by the external shock of the 1929 Great Depression?\n' +
          '- **Section 1.4 (Nazi Dictatorship):** To what extent did Hitler achieve a monolithic, all-powerful totalitarian dictatorship by 1939, and how did Nazi domestic policies rely on consent alongside terror?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Birth Defects of the Weimar Republic & The 1919–1923 Survival Crisis',
      },
      {
        type: 'paragraph',
        markdown:
          'Born amid military defeat and revolution in **November 1918**, the Weimar Republic inherited structural burdens that compromised its democratic legitimacy before a single Reichstag law passed. Social Democrat **Friedrich Ebert** avoided Bolshevik-style revolution via the **Ebert–Groener Pact (10 November 1918)**, trading democratic protection of the conservative **Reichswehr** officer corps for military suppression of the **Spartacist Uprising (January 1919)** and *Räterepubliken*. While **Detlev Peukert** and **Eberhard Kolb** emphasize that Ebert stabilized chaos, critics observe that this compromise left the imperial judiciary, civil service, universities, and army largely unreformed—institutional enclaves openly hostile to democracy (**"a republic without republicans"**).',
      },
      {
        type: 'paragraph',
        markdown:
          'The **August 1919 Weimar Constitution** paired progressive liberties with dangerous mechanisms: strict **proportional representation** (yielding 29 fractured coalition ministries in fourteen years) and **Article 48**, empowering the Reich President to rule by emergency decree without prior parliamentary consent. Externally, the **Treaty of Versailles (28 June 1919)**—signed under Allied blockade coercion and labeled a *"Diktat"* across the German spectrum—imposed **Article 231** ("War Guilt"), stripped 13% of European territory and all colonies, capped the army at 100,000 men, and set a **132 billion gold mark reparations bill (1921)**. Right-wing nationalists weaponized the toxic **Dolchstoßlegende ("stab-in-the-back" myth)** propagated by Hindenburg and Ludendorff, branding Social Democrats and Jews *"November Criminals."*',
      },
      {
        type: 'paragraph',
        markdown:
          'Between 1919 and 1923, Weimar weathered assaults from both extremes: the **Kapp Putsch (March 1920)**—where General von Seeckt famously declared *"Reichswehr does not fire on Reichswehr"*, leaving a general strike to rescue the cabinet—hundreds of right-wing political assassinations including **Matthias Erzberger (1921)** and **Walther Rathenau (1922)**, and the **1923 Ruhr Crisis**. When Germany defaulted on timber and coal deliveries, Franco-Belgian troops occupied the industrial Ruhr (January 1923); Berlin financed **passive resistance** by printing unbacked paper marks, triggering **hyperinflation** reaching **4.2 trillion marks per US dollar** by November 1923. In Munich, **Adolf Hitler** exploited the chaos in the failed **Beer Hall Putsch (8–9 November 1923)**—a defeat that taught him the NSDAP could only take power *"holding our noses"* along the **path of legality** backed by mass propaganda.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Was 1924–1929 Truly a "Golden Era"? Assessing Stresemann’s Stabilization',
      },
      {
        type: 'paragraph',
        markdown:
          'Under Chancellor and Foreign Minister **Gustav Stresemann**, currency stabilization (**Rentenmark**, November 1923), the US-brokered **Dawes Plan (1924)** restructuring reparations with $800 million+ in Wall Street loans, the **Locarno Treaties (1925)** guaranteeing western borders, League of Nations entry (1926), and the **Young Plan (1929)** produced undeniable economic and cultural recovery (*Neue Sachlichkeit*, Bauhaus, Berlin cabaret). Real industrial output surpassed 1913 levels by 1928, and extremist parties slumped: the NSDAP won just **2.6% of the vote (12 seats)** in May 1928.',
      },
      {
        type: 'paragraph',
        markdown:
          'Yet Band 13–15 essays (exemplified by `Sample Paper 3-3 2028.pdf`) test whether stability was **genuinely deep-rooted or merely conditional**. As Stresemann warned weeks before his death in October 1929, Germany was **"dancing on a volcano"**: municipal welfare and industrial modernization ran on **short-term American loans** liable to instantaneous recall; agricultural depression struck eastern Junker estates and northern Protestant farmers from **1927 onward**; structural unemployment never fell below 1.3 million; and the 1925 election of monarchist Field Marshal **Paul von Hindenburg** as President placed Article 48 in anti-republican hands. Under **Hans Mommsen** and **Geoff Layton**, the "Golden Era" masked unresolved constitutional and class resentment rather than erasing it.',
      },
      {
        type: 'playable_diagram',
        spec: HIST_V3_WEIMAR_GOLDEN_ERA_WORKED,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Great Depression, Backstairs Intrigue & Hitler’s Appointment (1929–1933)',
      },
      {
        type: 'paragraph',
        markdown:
          'When the **Wall Street Crash (October 1929)** froze US credit, Germany’s export- and debt-dependent economy imploded faster than any European rival: industrial output fell by roughly 40% and registered **unemployment surged past 6 million (nearly one-third of the workforce)** by early 1932. Crucially, the **Grand Coalition led by Hermann Müller (SPD)** collapsed in **March 1930** over a tiny 0.5% contribution rise to unemployment insurance—ending genuine parliamentary rule permanently. Hindenburg installed **Heinrich Brüning (Centre Party)** as the first **Presidential Cabinet**, governing by **Article 48 decrees** through savage deflation (*"Hunger Chancellor"*) that deepened misery and polarized voters away from moderate bourgeois parties (**DVP, DDP**) toward extremes.',
      },
      {
        type: 'paragraph',
        markdown:
          'Between 1928 and July 1932, the NSDAP leapt from **2.6% -> 18.3% (September 1930) -> 37.3% (230 seats, July 1932)**, harnessing Josef Goebbels’ modern air-campaign rallies, peasant/Mittelstand panic (*Panik im Mittelstand*), anti-Communist fear, and SA street brawling. Yet Hitler **never won an electoral majority**: in November 1932, Nazi vote share **dropped by 2 million votes to 33.1% (196 seats)** amid party bankruptcy and Strasser’s resignation threat. Power came not through unstoppable ballot victory alone, but through **conservative aristocratic miscalculation**: **Franz von Papen** and industrial-agrarian elites (*Ostelbien* Junkers, Hindenburg’s camarilla) persuaded the aging President on **30 January 1933** to appoint Hitler Chancellor with only two other Nazis in cabinet, boasting *"Within two months we will have pushed Hitler so far into a corner that he’ll squeak."*',
      },
      {
        type: 'playable_diagram',
        spec: HIST_V3_WEIMAR_NAZI_TIMELINE,
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Gleichschaltung, Terror & Daily Life in the Third Reich (1933–1939)',
      },
      {
        type: 'paragraph',
        markdown:
          'Within eighteen months, Hitler converted a precarious minority coalition into an unchallenged *Führerstaat* through **"legal" coordination (*Gleichschaltung*)** backed by targeted SA/SS violence. After a Dutch council-communist set fire to the parliament building on **27 February 1933**, the **Reichstag Fire Decree (28 February)** suspended Weimar civil liberties indefinitely, enabling the arrest of 4,000 KPD activists ahead of the 5 March election (where NSDAP still polled only 43.9%). On **23 March 1933**, intimidated deputies—with KPD delegates barred and SA stormtroopers lining the Kroll Opera House—passed the **Enabling Act** (444–94, with only Otto Wels’ SPD voting against), handing Hitler four years of decree power independent of both Reichstag and President.',
      },
      {
        type: 'paragraph',
        markdown:
          'Rapid dismantling followed: **Trade unions** were smashed and replaced by Robert Ley’s **German Labour Front (DAF, May 1933)**; all opposition parties were outlawed or dissolved by **14 July 1933** (*Law against the Founding of New Parties*); and independent state (*Länder*) parliaments were abolished in January 1934. Facing demands from Ernst Röhm’s 3-million-strong SA for a *"second revolution"* absorbing the regular army, Hitler pacified the Wehrmacht and conservative elites during the **Night of the Long Knives (30 June–2 July 1934)**, using Himmler’s SS to murder Röhm alongside Gregor Strasser, Kurt von Schleicher, and rival conservatives. When **Hindenburg died on 2 August 1934**, Hitler merged Chancellor and President into **Führer** and exacted a personal oath of unconditional obedience from every German soldier.',
      },
      {
        type: 'paragraph',
        markdown:
          'From 1933 to 1939, the regime reshaped work, youth, gender, religion, and racial exclusion:\n' +
          '- **Economy & Rearmament:** **Hjalmar Schacht’s New Plan (1934)** and covert **MEFO bills** slashed unemployment below 500,000 by 1937 via Autobahns and arms spending, before **Hermann Göring’s Four-Year Plan (1936)** shifted forcefully toward war readiness (*"guns before butter"*), creating bottlenecks in skilled labor and foreign reserves by 1939 (**Timothy Mason’s** "crisis" thesis vs **Richard Overy’s** managed rearmament view).\n' +
          '- **Women & Youth (*Volksgemeinschaft*):** Policy praised mothers via the *Cross of Honour of the German Mother*, interest-free marriage loans, and *Kinder, Küche, Kirche*, yet paradoxically drafted women back into munitions plants after 1937 (**Jill Stephenson, Claudia Koonz**). Youth indoctrination became compulsory via the **Hitler Youth (HJ)** and **Bund Deutscher Mädel (BDM)** in 1936/1939, though subcultural rebellion (**Edelweiss Pirates, Swing Kids**) persisted.\n' +
          '- **Churches & Racial Persecution:** Despite the **1933 Reichskonkordat** with the Vatican and Pope Pius XI’s later rebuke (*Mit brennender Sorge*, 1937), plus Pastor Martin Niemöller’s **Confessing Church**, institutional church resistance remained mostly defensive of ecclesiastical autonomy. Meanwhile, anti-Jewish policy escalated systematically from the **April 1933 boycott**, civil service purges, and **Nuremberg Laws (September 1935)** stripping citizenship, to state-orchestrated pogrom violence in **Kristallnacht (9–10 November 1938)**—burning over 1,400 synagogues and sending 30,000 Jewish men to Dachau, Buchenwald, and Sachsenhausen.',
      },
      {
        type: 'playable_diagram',
        spec: HIST_V3_WEIMAR_NAZI_SOURCES,
      },
      {
        type: 'heading',
        level: 2,
        text: '5. Intentionalist vs. Structuralist Historiography of the Nazi State',
      },
      {
        type: 'paragraph',
        markdown:
          '- **Intentionalist School (Karl Dietrich Bracher, Alan Bullock, Klaus Hildebrand):** Views Hitler as *"master in the Third Reich"* executing a coherent ideological *Weltanschauung* outlined in *Mein Kampf* (Lebensraum, race war, destruction of Versailles) across a tightly orchestrated movement.\n' +
          '- **Structuralist / Functionalist School (Hans Mommsen, Martin Broszat):** Contends the Third Reich was a chaotic **polycracy** of rival *Gauleiter*, SS, Wehrmacht, Four-Year Plan, and ministry fiefdoms, forcing an often hesitant or lazy Hitler ("weak dictator," Mommsen) toward **cumulative radicalization** to preserve prestige.\n' +
          '- **Synthesis ("Working Towards the Führer" — Ian Kershaw):** Bridges both camps: Hitler did not micromanage daily policy, yet his charismatic authority and vague ideological pronouncements functioned as the supreme **directional imperative**—rewarding subordinates (Himmler, Heydrich, Goebbels, Göring) who anticipated and radicalized his vision.\n' +
          '- **Social Consent & Coercion (Robert Gellately, Richard J. Evans, Detlev Peukert):** With relatively small Gestapo manpower (only ~15,000–32,000 officers across Germany), police terror worked devastatingly because ordinary citizens fed it with ideological and personal **denunciations**, bolstered by genuine pride over employment and foreign-policy reversals.',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Paper 3 Examiner Warning — Avoid Calling the 1933 Appointment a "Majority Election Win"',
        markdown:
          'Never write that *"the German people democratically elected Hitler Chancellor with a majority in 1933."* In the last free Weimar election (November 1932), the NSDAP fell to **33.1%**, and even after Stormtrooper terror and KPD arrests in March 1933, Hitler polled only **43.9%**. Appointment came from **Article 48 conservative collusion** (Papen, Hugenberg, Oskar/Paul von Hindenburg) in January 1933.',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'Theory of Knowledge — Can We Weigh Agency (Hitler) Against Structure (Depression)?',
        markdown:
          'No controlled historical experiment can isolate how German politics might have evolved had Stresemann lived or had Wall Street not crashed in 1929. Counterfactual discipline helps prevent determinism: NSDAP polled **2.6% in 1928** and **33.1% in Nov 1932**, demonstrating that macroeconomic shock and elite miscalculation were *necessary* preconditions alongside Nazi propaganda.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Ebert–Groener Pact (1918)',
            definitionMarkdown:
              'Secret November 1918 agreement whereby the Reichswehr backed Ebert’s moderate republic against radical leftists in exchange for preserving military autonomy.',
            markschemeKeyword: 'Ebert-Groener Pact',
          },
          {
            term: 'Article 48 & Presidential Cabinets',
            definitionMarkdown:
              'Weimar emergency clause allowing rule by presidential decree; normalized after March 1930 under Brüning, Papen, and Schleicher, normalizing authoritarian governance.',
            markschemeKeyword: 'Article 48',
          },
          {
            term: 'Path of Legality (*Legalitätstaktik*)',
            definitionMarkdown:
              'Post-1923 Nazi strategy combining mass electoral campaigning and street intimidation to win state power under constitutional forms rather than an armed coup.',
            markschemeKeyword: 'path of legality',
          },
          {
            term: 'Enabling Act (23 March 1933)',
            definitionMarkdown:
              'Constitutional amendment empowering Hitler’s cabinet to enact laws and alter the constitution for four years without Reichstag or Presidential consent.',
            markschemeKeyword: 'Enabling Act',
          },
          {
            term: 'Gleichschaltung',
            definitionMarkdown:
              'Systematic 1933–1934 "coordination" of unions, parties, regional *Länder*, courts, press, and cultural institutions into Nazi control.',
            markschemeKeyword: 'Gleichschaltung',
          },
          {
            term: 'Working Towards the Führer (Kershaw)',
            definitionMarkdown:
              'Kershaw’s structuralist-intentionalist synthesis explaining how subordinates radicalized policy in competition to anticipate and fulfill Hitler’s broad ideological goals.',
            markschemeKeyword: 'working towards the Fuhrer',
          },
          {
            term: 'Nuremberg Laws & Kristallnacht (1935/1938)',
            definitionMarkdown:
              'Legal deprivation of German Jewish citizenship and marriage rights (1935) escalating to nation-wide state-sponsored arson, looting, and mass camp arrests (Nov 1938).',
            markschemeKeyword: 'racial persecution',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 6 (NEW): P3.4 — Stalin's Rise, Economic Transformation & Terror
  // =========================================================================
  {
    topicCode: 'P3.4',
    title: 'Paper 3 Europe — Stalin’s Rise, Economic Transformation & Great Terror (1924–1941)',
    summary:
      'In-depth Pearson 2026 study guide analyzing Stalin’s post-Lenin succession victory (1924–1929), forced collectivization and the 1932–1933 famine, the Five-Year Plans, the Great Terror (1934–1938), cultural/social retreat, and Orthodox vs. Revisionist vs. Post-1991 historiography.',
    sourceFileNames: [
      'Paper 3  - Europe - Pearson 2026.pdf',
      'IB 11 European Totalitarianism.pptx',
      'Paper 3 MarkScheme 2028 Extract.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Pearson Paper 3 Guiding Questions — Stalin’s USSR (1924–1941)',
        markdown:
          '- **Section 1.5 (Rise to Power):** How far did Stalin’s defeat of Trotsky, Zinoviev, Kamenev, and Bukharin result from his bureaucratic control of the Party apparatus versus ideological appeal and rivals’ tactical blunders?\n' +
          '- **Section 1.6 (Nature & Effects of Rule):** Were Stalin’s economic transformation and the Great Terror rational, calculated steps toward modernizing and securing the Soviet state, or chaotic expressions of coercive paranoia?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. The Succession Struggle & "Socialism in One Country" (1924–1929)',
      },
      {
        type: 'paragraph',
        markdown:
          'When Vladimir Lenin died in **January 1924**, the Bolshevik Party possessed no formal office of "leader" and confronted fragile **New Economic Policy (NEP)** compromises that allowed limited private trade and peasant grain markets. In his suppressed **Testament (December 1922–January 1923)**, Lenin warned that **Joseph Stalin** had concentrated *"unlimited authority"* as General Secretary and urged his removal because he was *"too rude"*—even as he criticized **Leon Trotsky’s** *"excessive self-assurance."* Yet Zinoviev and Kamenev feared the Red Army organizer Trotsky far more than the quiet bureaucrat Stalin and voted in May 1924 to keep Lenin’s Testament secret.',
      },
      {
        type: 'paragraph',
        markdown:
          'Stalin outmaneuvered every rival by fusing **institutional patronage** with **tactical ideological shifts**. As General Secretary (1922), head of **Rabkrin**, and co-architect of the **1924–1925 Lenin Enrolment** (adding ~500,000 politically compliant workers into the party), Stalin stacked regional party committees (*nomenklatura*) and **Party Congresses** with loyal appointees while enforcing Lenin’s 1921 **Ban on Factions**. Ideologically, he outflanked Trotsky’s internationally risky **"Permanent Revolution"** with **"Socialism in One Country" (late 1924)**—promising exhausted Soviet workers and bureaucrats that Russia could build socialism independently without waiting for Western revolutions. After allying with Zinoviev and Kamenev (the Triumvirate) to sideline Trotsky (1924–1925), Stalin allied with **Nikolai Bukharin** to defeat Zinoviev and Kamenev’s **United Opposition** (expelled November 1927), before pivoting sharply left during the **1927–1928 grain procurement crisis** to brand Bukharin, Rykov, and Tomsky the **"Right Deviation" (1928–1929)**.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Collectivization, Dekulakization & The Five-Year Plans (1928–1941)',
      },
      {
        type: 'paragraph',
        markdown:
          'Convinced by the **1927 War Scare** and lagging urban grain deliveries that *"we are fifty or a hundred years behind the advanced countries; we must make good this distance in ten years, or they will crush us"* (1931 speech), Stalin launched the **"Great Turn"** (*Velikiy Perelom*) in 1928–1929. Agriculture was forcibly reorganized into collective farms (**kolkhozy**) and state farms (**sovkhozy**) backed by **Machine Tractor Stations (MTS)** to extract grain reliably for cities and hard-currency export while funding machinery imports.',
      },
      {
        type: 'paragraph',
        markdown:
          'Peasant resistance was crushed through brutal **"dekulakization"**: loosely defined "rich" peasants (*kulaks*) and stubborn smallholders were stripped of land, deported to Siberia/Kazakhstan by OGPU units and urban **"25-thousanders,"** or shot. Following peasant slaughter of roughly **half the USSR’s horses, cattle, and pigs** rather than surrender livestock to kolkhozy, Stalin briefly feigned moderation in **"Dizzy with Success" (March 1930)** before driving collectivization back over **90% of peasant households by 1936**. Combined with confiscatory grain quotas in **1931–1933**, forced collectivization triggered a catastrophic famine across Ukraine (**Holodomor**), the North Caucasus, and Kazakhstan claiming **5–7 million lives**, reinforced by **internal passports (December 1932)** barring starving peasants from entering cities.',
      },
      {
        type: 'paragraph',
        markdown:
          'Simultaneously, the **Five-Year Plans (1928–1932, 1933–1937, 1938–1941)** converted an overwhelmingly agrarian society into Europe’s second-largest industrial power through breakneck **"gigantomania"** (*Magnitogorsk* steelworks, *Dnieprostroi* dam, *White Sea–Baltic Canal* built with Gulag slave labor, Moscow Metro, Turkestan–Siberian railway). According to **Alec Nove** and **R.W. Davies**, coal output roughly quadrupled (35M to 166M tons between 1928 and 1940) and steel grew more than fourfold (4.3M to 18.3M tons), laying the industrial base—including relocated **Urals factories**—that survived Operation Barbarossa. Yet human and economic costs were staggering: consumer housing/textiles collapsed, seven-day continuous shifts and **1940 draconian labor decrees** criminalized absenteeism, and unreal **Stakhanovite** norms produced massive waste alongside genuine working-class enthusiasm (**Sheila Fitzpatrick’s** upward *vydvizhentsy* generation—over one million young workers promoted into technical institutes and state management, learning to **"speak Bolshevik"** in Stephen Kotkin’s classic *Magnetic Mountain* phrase).',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Primary Evidence — Stalin’s "Fifty or a Hundred Years Behind" Imperative (1931)',
        markdown:
          'Speaking to industrial managers in February 1931 amid collectivization upheaval, Stalin fused geopolitical fear with coercive mobilization: *"We are fifty or a hundred years behind the advanced countries. We must make good this distance in ten years. Either we do it, or we shall be crushed."* Whether interpreted as genuine existential foresight ahead of **1941 Barbarossa** or as domestic propaganda legitimizing grain seizures and **"wrecking" trials** (*Shakhty 1928*, *Industrial Party 1930*), the speech framed industrial speed as state survival.',
      },
      {
        type: 'playable_diagram',
        spec: HIST_V3_STALIN_RISE_TERROR_TIMELINE,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. The Great Terror, Society, Culture & "Great Retreat" (1934–1941)',
      },
      {
        type: 'paragraph',
        markdown:
          'Alarmed by famine backlash and the **1932 Ryutin Platform** calling Stalin *"the evil genius of the Russian Revolution,"* state violence escalated dramatically after the assassination of Leningrad Party chief **Sergei Kirov on 1 December 1934**—probably by lone gunman Leonid Nikolayev, though Stalin immediately exploited the murder via sweeping emergency anti-terrorist decrees eliminating defense rights and appeals.',
      },
      {
        type: 'paragraph',
        markdown:
          'Under NKVD chiefs **Genrikh Yagoda (to 1936)**, **Nikolai Yezhov (1936–1938, the *Yezhovshchina*)**, and **Lavrentiy Beria (from late 1938)**, terror devoured party, military, and society alike:\n' +
          '- **Moscow Show Trials (1936–1938):** Public spectacles forced Old Bolsheviks (**Zinoviev and Kamenev, 1936; Pyatakov and Radek, 1937; Bukharin, Rykov, and Yagoda, 1938**) to confess fantastic Trotskyite–Nazi–Japanese espionage plots.\n' +
          '- **Mass Operations (1937–1938):** Beyond party elites, **NKVD Order 00447 (July 1937)** set secret regional arrest and execution quotas for *"former kulaks, criminals, and anti-Soviet elements,"* paired with ethnic **"national operations"** against Poles, Germans, and Koreans. Post-1991 archives document roughly **1.5–1.6 million arrests** and **680,000–750,000 documented executions in 1937–1938 alone**, alongside millions crammed into the **Gulag**.\n' +
          '- **Red Army Purge (1937–1938):** Execution of **Marshal Mikhail Tukhachevsky** and roughly **35,000 officers** (including 3 of 5 marshals and most corps commanders) crippled Red Army command readiness ahead of **1941**.\n' +
          '- **Culture, Religion & the "Great Retreat":** Alongside the celebrated **"democratic" 1936 Stalin Constitution** (masking one-party NKVD rule), militant early Bolshevik experimentation gave way to conservative hierarchy: **Socialist Realism (1934)** subordinated art; Orthodox churches suffered sweeping closures; Russian national heroes (*Alexander Nevsky*, Peter the Great) returned; and the **1936 Family Code** outlawed abortion, raised divorce fees sharply, and glorified motherhood (*The Great Retreat*, **Nicholas Timasheff**), saddling Soviet women—over 40% of the industrial workforce by 1939—with a grueling **dual burden** (**Barbara Evans Clements**) beneath a ubiquitous **Cult of Stalin** (*"Leader and Teacher of Mankind"*).',
      },
      {
        type: 'playable_diagram',
        spec: HIST_V3_STALIN_SOURCES_LAB,
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Shifting Historiography: Cold War Totalitarianism to Post-1991 Archives',
      },
      {
        type: 'paragraph',
        markdown:
          'Few Paper 3 topics showcase archival impact as vividly as Stalinism:\n' +
          '- **Orthodox / Totalitarian School (Robert Conquest, Richard Pipes, Leonard Schapiro):** Emphasized top-down premeditation—viewing Stalinism as the logical extension of Lenin’s vanguard dictatorship (`Pipes`) and attributing the Great Terror squarely to Stalin’s paranoid will to eliminate every autonomous group (`Conquest`).\n' +
          '- **Trotskyist / Neo-Marxist View (Isaac Deutscher, Moshe Lewin):** Interpreted Stalinism as a *"Thermidorian"* bureaucratic betrayal of 1917 that nonetheless dragged backward Russia into industrial modernity under capitalist encirclement.\n' +
          '- **Revisionist Social History (Sheila Fitzpatrick, J. Arch Getty, Roberta Manning):** Argued pre-1991 Western observers exaggerated Moscow’s omnipotence; terror spun out of control through **center–periphery friction**, local denunciations, and panic over looming war (`Getty`), while millions of promoted workers (`Fitzpatrick`) genuinely backed industrialization.\n' +
          '- **Post-1991 Archival Synthesis (Stephen Kotkin, Orlando Figes, Oleg Khlevniuk, Anne Applebaum):** Released Politburo minutes, NKVD quotas, and Stalin’s handwritten death lists proved **both** schools right in crucial parts: chaos raged on the ground, *and* **Stalin personally approved mass-execution quotas** (`Order 00447`) and signed 383+ execution lists totaling tens of thousands of names.',
      },
      {
        type: 'playable_diagram',
        spec: HIST_V3_STALIN_HISTORIOGRAPHY_MATRIX,
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Paper 3 Examiner Warning — Avoid Monocausal "Power-Hungry Man" Narratives',
        markdown:
          'Weak essays reduce 1924–1929 exclusively to *"Stalin used his General Secretary powers to trick everyone"* or reduce 1937–1938 solely to *"Stalin went paranoid."* Top responses weigh **structural/ideological appeal** (*Socialism in One Country* vs. risky internationalism, 1927 grain crisis) alongside administrative control, and test **Conquest/Kotkin** top-down command evidence against **Getty/Fitzpatrick** center–periphery social dynamics.',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'Theory of Knowledge — Archival Revolutions & Revising Historical Estimates',
        markdown:
          'Before 1991, **Robert Conquest** estimated far higher arrest and death totals from demographic inference and émigré testimony than archival NKVD internal ledgers later recorded (681,692 judicial executions in 1937–1938, plus famine and Gulag mortality). Does finding lower official execution ledgers diminish Stalinist criminality, or reveal how **missing/falsified categories** (unrecorded famine deaths, transit deaths, dekulakization deportations) still test every historian’s quantitative rigor?',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Socialism in One Country (1924)',
            definitionMarkdown:
              'Stalin and Bukharin’s doctrine arguing the USSR could build a socialist economy independently before global revolution, outflanking Trotsky’s Permanent Revolution.',
            markschemeKeyword: 'Socialism in One Country',
          },
          {
            term: 'Lenin’s Testament & Nomenklatura',
            definitionMarkdown:
              'Suppressed 1922–1923 warning against Stalin’s growing power as General Secretary, exercised through *nomenklatura* lists governing key Party appointments.',
            markschemeKeyword: 'General Secretary patronage',
          },
          {
            term: 'Dekulakization & Holodomor (1929–1933)',
            definitionMarkdown:
              'Violent liquidation of better-off peasants as a class alongside forced grain requisitions that caused catastrophic famine across Ukraine, Kazakhstan, and the North Caucasus.',
            markschemeKeyword: 'collectivization famine',
          },
          {
            term: 'Five-Year Plans & Gigantomania',
            definitionMarkdown:
              'State command-economy drives prioritizing heavy industry, steel, hydroelectric power, and Urals rearmament over consumer goods and housing.',
            markschemeKeyword: 'Five-Year Plans',
          },
          {
            term: 'Yezhovshchina / NKVD Order 00447 (1937–1938)',
            definitionMarkdown:
              'Peak phase of the Great Terror led by Nikolai Yezhov executing hundreds of thousands via centrally assigned regional quotas alongside Moscow Show Trials.',
            markschemeKeyword: 'Order 00447',
          },
          {
            term: 'Revisionist vs. Post-1991 Archival Consensus',
            definitionMarkdown:
              'Debate balancing bottom-up social disorder/mobility (Fitzpatrick, Getty) against Stalin’s direct archival sign-off on mass execution quotas (Khlevniuk, Kotkin).',
            markschemeKeyword: 'post-1991 archives',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 7 (NEW): P3.6 — Europe and the Second World War (1918–1949)
  // =========================================================================
  {
    topicCode: 'P3.6',
    title: 'Paper 3 Europe — Europe and the Second World War (1918–1949)',
    summary:
      'Complete Pearson 2026 Chapter 2 synthesis covering League of Nations collapse, origins of WWII and Appeasement debates, European decisive turning points (1939–1945), Nazi persecution escalating into the Holocaust, Nuremberg & European reconstruction to the 1949 division of Germany.',
    sourceFileNames: [
      'Paper 3  - Europe - Pearson 2026.pdf',
      'Paper 3 MarkScheme 2028 Extract.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Pearson Paper 3 Guiding Questions — Europe & WWII (1918–1949)',
        markdown:
          '- **Origins & Collective Security (Ch. 2.1–2.2):** Why did the League of Nations fail to preserve collective security in the 1930s, and should Hitler’s aggression or Anglo-French Appeasement bear greater responsibility for war in 1939?\n' +
          '- **Course, Holocaust & Impact to 1949 (Ch. 2.3–2.6):** Why did the Grand Alliance defeat the Axis in Europe, how did anti-Jewish persecution escalate into industrial genocide, and how completely was Germany transformed between 1945 and 1949?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. From Locarno Illusions to the Collapse of Collective Security (1919–1939)',
      },
      {
        type: 'paragraph',
        markdown:
          'Created in 1919 to replace secret pre-1914 alliances with **collective security**, the **League of Nations** suffered structural defects from inception: **US Senate rejection**, initial exclusion of Germany (to 1926) and the USSR (to 1934), unanimous Council voting rules, and zero standing military force. While the mid-1920s **"Spirit of Locarno" (1925)**—alongside the **Kellogg–Briand Pact (1928)**—cultivated optimism, Locarno ominously guaranteed **western borders** while omitting eastern frontiers (Poland and Czechoslovakia). When the **Great Depression** destroyed international economic cooperation, major powers prioritized domestic austerity and national interest over Genevan idealism.',
      },
      {
        type: 'paragraph',
        markdown:
          'Between 1931 and 1939, successive crises shattered collective security and tempted Axis expansion:\n' +
          '1. **Manchuria (1931–1933):** Japan’s seizure of Manchuria exposed League paralysis (limited to the **Lytton Report** and Japan’s 1933 withdrawal).\n' +
          '2. **German Rearmament & Abyssinia (1935–1936):** Hitler quit the **World Disarmament Conference and League (October 1933)**, announced open conscription (March 1935), and fractured the Anglo–French–Italian **Stresa Front (April 1935)** via the **Anglo–German Naval Agreement (June 1935)**. When **Mussolini invaded Abyssinia (October 1935)**, ineffective League sanctions excluded oil, and the leaked **Hoare–Laval Pact** discredited Britain and France fatally—driving Italy out of the Stresa alignment toward the **Rome–Berlin Axis (1936)** and **Pact of Steel (1939)**.\n' +
          '3. **Rhineland (March 1936) & Spanish Civil War (1936–1939):** Hitler’s gamble remilitarizing the Rhineland went unchallenged as France lacked British backing; in Spain, Anglo-French **Non-Intervention** let Italian troops and Germany’s **Condor Legion** (Guernica, April 1937) secure Franco’s victory.\n' +
          '4. **Austria, Munich & the Nazi–Soviet Pact (1938–1939):** Following the **Hossbach Memorandum (November 1937)**, Germany annexed Austria (**Anschluss, March 1938**) and coerced Britain and France at the **Munich Conference (29–30 September 1938)** into ceding Czechoslovakia’s **Sudetenland**—a policy defended by Chamberlain (*"peace for our time"*) to buy rearmament time (**1937 Inskip Report**) while excluding both Prague and Moscow. When Hitler occupied rump **Bohemia–Moravia (15 March 1939)**, Britain issued a sudden guarantee to Poland, prompting Stalin to sign the **Molotov–Ribbentrop Non-Aggression Pact (23 August 1939)**—including a secret protocol partitioning Poland and the Baltic states—clearing Hitler’s invasion of **Poland on 1 September 1939**.',
      },
      {
        type: 'playable_diagram',
        spec: HIST_V3_WWII_EUROPE_TIMELINE,
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Why the Axis Lost & The Allies Won in Europe (1939–1945)',
      },
      {
        type: 'paragraph',
        markdown:
          'Between 1939 and mid-1941, combined arms mobility (*Blitzkrieg* concentrations of Panzer armor, Luftwaffe close air support, and decisive weak-point breakthroughs) overwhelmed Poland, Denmark, Norway, the Low Countries, and **France (May–June 1940)** before Hitler miscalculated twice strategically in **1941**. First, failing to break RAF Fighter Command and radar (*Dowding System*) in the **Battle of Britain (1940)** left an unconquered British base for US logistics and bomber offensives. Second, **Operation Barbarossa (22 June 1941)** and the unforced **declaration of war on the United States (11 December 1941)** locked Germany into an industrial war of attrition against two continental superpowers.',
      },
      {
        type: 'paragraph',
        markdown:
          'Historians (**Richard Overy, *Why the Allies Won*; Mark Harrison**) stress how Soviet endurance, Allied economic mass, and German strategic overstretch decided Europe’s war long before **D-Day (6 June 1944)**:\n' +
          '- **Eastern Front Turning Points:** Halt before **Moscow (December 1941)**, the devastating encirclement of Sixth Army at **Stalingrad (Nov 1942–Feb 1943)**, and the largest tank battle in history at **Kursk (July 1943)** broke the Wehrmacht’s strategic initiative—over 75–80% of German military casualties occurred on the Eastern Front.\n' +
          '- **Industrial & Economic Mobilization:** Soviet factory evacuation east of the Urals (1,500+ enterprises), **US Lend-Lease** (~400,000 trucks, aviation fuel, spam, and radios sustaining Red Army mobility), and victory in the **Battle of the Atlantic (1943)** dwarfed Axis production until Speer’s late-1943 rationalization.\n' +
          '- **Intelligence & Strategic Bombing:** Bletchley Park **Ultra** codebreaking of *Enigma* traffic accelerated U-boat defeat and Normandy deception, while Anglo-American **Combined Bomber Offensive** pinned down vital German flak artillery and Luftwaffe fighters needed in Russia.',
      },
      {
        type: 'playable_diagram',
        spec: HIST_V3_WWII_CAUSAL_EXPLORER,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Persecution to Genocide: The Holocaust (1933–1945)',
      },
      {
        type: 'paragraph',
        markdown:
          'Pearson Chapter 2.5 emphasizes tracing how Nazi anti-Semitism **escalated across distinct thresholds** rather than emerging full-grown in 1933. From 1933 to 1939, policy aimed at **forced emigration and civic exclusion** (Civil Service Law 1933, Nuremberg Laws 1935, Aryanization, Kristallnacht 1938). Conquest of Poland (1939) trapping **two million Polish Jews**, followed by failure of territorial deportation schemes (**Lublin/Nisko, Madagascar Plan 1940**), produced crowded starvation ghettos (*Warsaw, Łódź*). Simultaneously, the secret **Aktion T4** euthanasia murders (70,000+ disabled patients gassed with carbon monoxide, 1939–1941) pioneered gas-chamber technology and trained personnel later transferred east.',
      },
      {
        type: 'paragraph',
        markdown:
          'The decisive watershed came with **Operation Barbarossa (June 1941)**: defined from inception as a **"war of annihilation" (*Vernichtungskrieg*)** backed by the **Commissar Order**. Four mobile **SS Einsatzgruppen** squads—supported by Wehrmacht units and local auxiliaries—shot over one million Soviet Jews in mass ravines such as **Babi Yar (September 1941)**. Between autumn 1941 and the **Wannsee Conference (20 January 1942)** coordinated by Reinhard Heydrich, Nazi leadership industrialized murder via **Operation Reinhard extermination camps** (**Belzec, Sobibor, Treblinka**) and **Chelmno**, culminating in **Auschwitz-Birkenau** (combining slave labor and Zyklon B gas chambers), murdering roughly **six million Jews** alongside **Roma/Sinti, Soviet POWs (~3.3 million dead), Polish intellectuals, disabled victims, and political prisoners**. Historiographically, **Intentionalists** (**Lucy Dawidowicz, Gerald Fleming**) emphasize Hitler’s continuous ideological intent, **Functionalists** (**Hans Mommsen, Christopher Browning**) trace *"cumulative radicalization"* shaped by Barbarossa logistics and competitive SS administrators (**"no written Hitler order required"** vs **Peter Longerich’s** multi-stage 1941 leadership escalation), and **Daniel Goldhagen’s** controversial *"eliminationist antisemitism"* thesis sparked sharp rebuttals from Browning over *Ordinary Men* (Reserve Police Battalion 101 peer conformity).',
      },
      {
        type: 'playable_diagram',
        spec: HIST_V3_WWII_HOLOCAUST_MATRIX,
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Post-War Impact, Nuremberg Trials & Division of Germany (1945–1949)',
      },
      {
        type: 'paragraph',
        markdown:
          'Germany surrendered unconditionally on **7–8 May 1945** in a shattered landscape of **Stunde Null ("Zero Hour")**: over 5.3 million German military dead, ~12–14 million ethnic German expellees (*Vertriebene*) fleeing Eastern Europe, and four-power occupation zones formalized at **Yalta (February 1945)** and **Potsdam (July–August 1945)** (**4 Ds**: Demilitarization, Denazification, Democratization, Decentralization). At the **Nuremberg International Military Tribunal (1945–1946)**, Allied jurists prosecuted surviving Nazi leaders for **Crimes Against Peace, War Crimes, and Crimes Against Humanity**—establishing vital precedent (*"superior orders"* invalid as full defense), though Cold War tension soon curtailed grassroots **Denazification (*Persilscheine*)** in the West while the Soviet zone fused ideological purge with nationalization.',
      },
      {
        type: 'paragraph',
        markdown:
          'By 1947–1949, ideological clash and reparations deadlock over Germany’s industrial future (Bizone creation 1947, **Marshall Plan 1947**, Western **Deutsche Mark** currency reform June 1948) ended Four-Power governance. Stalin’s **Berlin Blockade (June 1948–May 1949)** backfired before the **Anglo-American Berlin Airlift** (~277,000 flights supplying 2.3 million tons), accelerating creation of two sovereign German states: the parliamentary **Federal Republic of Germany (FRG, May 1949)** under Konrad Adenauer and the Soviet-backed **German Democratic Republic (GDR, October 1949)**.',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Paper 3 Examiner Warning — "Origins of WWII" & "Impact on Germany" Balance',
        markdown:
          '- On **Origins of WWII**, always weigh **A.J.P. Taylor’s** revisionist *The Origins of the Second World War* (1961)—depicting Hitler as an opportunistic traditional statesman reacting to Anglo-French hesitation—against **Hugh Trevor-Roper / Gerhard Weinberg / R.A.C. Parker** proving Hitler’s coherent ideological pursuit of *Lebensraum* and criticizing Appeasement’s moral and strategic losses at Munich.\n' +
          '- On **Impact to 1949**, never stop in May 1945! Pearson Ch. 2.4 & 2.6 expressly run **to 1949**—covering expulsion of ethnic Germans, **Nuremberg Trials**, incomplete Denazification, currency reform, **Berlin Blockade/Airlift**, and **FRG/GDR division**.',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'Theory of Knowledge — Post-War Trials vs. Historical Truth',
        markdown:
          'Does a legal courtroom like **Nuremberg (1945–1946)** produce complete historical understanding? Jurists prioritized individual criminal guilt, documentary treaties (*Hossbach Memorandum*, *Commissar Order*), and *victors’ exclusion* of Soviet crimes (e.g., **Katyn Massacre**), whereas modern historians examine broader structural complicity across the Wehrmacht, German bureaucracy, railways (*Reichsbahn*), and ordinary bystanders.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Appeasement & 1938 Munich Debate',
            definitionMarkdown:
              'British/French policy ceding Sudetenland to avoid war; defended by "guilty-men" revisionists (buying 1939 Spitfire/radar time) vs. orthodox critics (surrendering Czech arms and Soviet alliance).',
            markschemeKeyword: 'appeasement historiography',
          },
          {
            term: 'Nazi–Soviet Pact (23 August 1939)',
            definitionMarkdown:
              'Molotov–Ribbentrop non-aggression treaty containing a secret protocol dividing Eastern Europe, freeing Hitler from immediate two-front war against France, Britain, and the USSR.',
            markschemeKeyword: 'Nazi-Soviet Pact',
          },
          {
            term: 'Operation Barbarossa & Stalingrad (1941–1943)',
            definitionMarkdown:
              'German ideological invasion of the USSR whose halt before Moscow and catastrophic defeat at Stalingrad marked the decisive strategic turn in Europe.',
            markschemeKeyword: 'Eastern Front turning point',
          },
          {
            term: 'Cumulative Radicalization & Wannsee (1942)',
            definitionMarkdown:
              'Structuralist explanation of Nazi anti-Jewish escalation from emigration to ghettos, *Einsatzgruppen* shootings, and industrial extermination coordinated at the Jan 1942 Wannsee Conference.',
            markschemeKeyword: 'cumulative radicalization',
          },
          {
            term: 'Nuremberg Trials & Denazification (1945–1949)',
            definitionMarkdown:
              'Allied tribunal establishing Crimes Against Humanity precedent while Cold War priorities rapidly softened grassroots denazification ahead of FRG/GDR division.',
            markschemeKeyword: 'Nuremberg and division',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 8 (NEW): P1.1 & P2.1 — Paper 1 Focused Studies & Paper 2 Thematic Essays
  // =========================================================================
  {
    topicCode: 'P1.1',
    title: 'Year 2 Foundations — Paper 1 Focused Studies & Paper 2 Thematic Essays (May 2028)',
    summary:
      'Strategic May 2028 roadmap preparing Year 1 students for Year 2 Paper 1 (source-based Focused Studies aligned with the 4 new concepts) and Paper 2 (cross-regional thematic comparison bridging Europe with non-European regions).',
    sourceFileNames: [
      'IB HISTORY 11 INTRODUCTION.pptx',
      'Paper 3  - Europe - Pearson 2026.pdf',
      'Paper 3 MarkScheme 2028 Extract.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Year 2 May 2028 Assessment Inquiry Questions (Paper 1 & Paper 2)',
        markdown:
          '- **Paper 1 (`P1.1` Focused Study):** How does the May 2028 Paper 1 replace robotic OPCVL checklists with purposeful analysis of **origin, purpose, perspective, corroboration, and contextual synthesis**?\n' +
          '- **Paper 2 (`P2.1` Thematic Essay):** How do you build **true cross-regional comparative arguments** pairing Year 1 European states (Italy, Germany, USSR) with non-European case studies across themes of **authoritarian governance, conflict, or independence**?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. May 2028 Paper 1 (`P1.1`): Focused Study Source Methodology',
      },
      {
        type: 'paragraph',
        markdown:
          'Representing **20% of the HL grade** (1 hour 30 minutes across 4–5 curated written and visual sources in your Year 2 **Focused Study**), **May 2028 Paper 1** tests historical literacy under timed source conditions. Crucially, the reformed 2028 curriculum retires mechanical reliance on stand-alone *"list two values and two limitations using OPCVL"* routines divorced from historical argument. Instead, candidates must read sources as **situated historical acts**: asking **who produced the document, for what audience, under what ideological or bureaucratic pressures, what voices remain absent**, and **how visual/statistical sources corroborate or undercut official proclamations**.',
      },
      {
        type: 'paragraph',
        markdown:
          'Across the four Paper 1 question styles inside the **90-minute exam window**, disciplined time budgeting and evidence precision convert passive reading into top-band marks:\n' +
          '1. **Comprehension & Message Inference (~12 minutes):** Read the stimulus questions first so you mine the 4–5 documents purposefully. Paraphrase arguments accurately without lifting whole sentences verbatim; when decoding cartoons, photographs, or statistical tables, explicitly link visual motifs (caricature, scale, captions, omissions) to concrete claims rather than merely describing the picture.\n' +
          '2. **Contextualized Source Evaluation of Perspectives, Value & Limits (~20 minutes):** Anchor *every* strength or limitation directly in **specific provenance** (e.g., *"Because Source C is a 1938 British Foreign Office confidential dispatch to Cabinet..."*) rather than generic formulas (*"it is a secondary source so it has hindsight"* or *"it is a speech so it is biased"*). Ask what ideological agenda, genre convention, or missing constituency—such as workers, colonized subjects, or persecuted minorities—shapes the record.\n' +
          '3. **Cross-Source Comparison & Contrast (~20 minutes):** Build a rapid thematic grid (**convergence vs. divergence**) and write alternating comparative sentences (*"Whereas Source A attributes crisis to..., Source D locates responsibility in..."*). Never summarize Source A completely and then Source B completely in separate blocks!\n' +
          '4. **Extended Conceptual Synthesis Essay (~35 minutes + 3 min check):** Construct a sharp thesis directly answering the 2028 conceptual prompt (**Cause & Consequence**, **Continuity & Change**, **Perspectives**, or **Significance**) by integrating **every single source** alongside **accurate contextual own knowledge**. An answer ignoring two documents—or relying purely on the packet with zero external context—hits an automatic markband ceiling.',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Paper 1 Golden Rule — Source Evidence Plus Contextual Verification',
        markdown:
          'Think of **Paper 1 Question 4** as an interactive courtroom cross-examination rather than a textbook paraphrase: each source (`A` through `D/E`) acts as an incomplete witness testifying from a distinct political vantage point, while your **own historical knowledge** supplies missing treaties, macroeconomic statistics, and historiographical context to judge which source claims hold firm.',
      },
      {
        type: 'playable_diagram',
        spec: HIST_V3_P1_2028_SOURCE_LAB,
      },
      {
        type: 'heading',
        level: 2,
        text: '2. May 2028 Paper 2 (`P2.1`): Cross-Regional Thematic Comparison Mastery',
      },
      {
        type: 'paragraph',
        markdown:
          'Worth **25% of the HL grade** (1 hour 30 minutes, **two 15-mark thematic essays** drawn from two different thematic topics—45 minutes per essay), **Paper 2** shares the exact same conceptual demand as Paper 3—evaluating **different perspectives** in service of a **substantiated comparative argument**—with one strict structural rule: **when a Paper 2 prompt specifies examples from different regions, both examples MUST come from distinct IB geographic regions** (e.g., **Europe** + **Asia & Oceania**, **Americas**, or **Africa & Middle East**). Choosing **Hitler and Mussolini** or **Stalin and Hitler** on a cross-regional prompt violates the rubric and severely caps your score!',
      },
      {
        type: 'paragraph',
        markdown:
          'Your Year 1 mastery of **Mussolini’s Italy, Hitler’s Germany, and Stalin’s USSR** already equips half of every European-anchored Paper 2 essay—ready to pair seamlessly with Year 2 **Authoritarian/Thematic non-European case studies** such as **Mao Zedong’s People’s Republic of China (1949–1976)**, **Fidel Castro’s Cuba / Juan Perón’s Argentina**, or comparative **Causes & Practices of War / Cold War / Decolonization (Algeria, China, Vietnam)**:\n' +
          '- **Example Pairing 1 (Authoritarian Consolidation & Economy — Stalin vs. Mao):** Compare the **First Five-Year Plans & Collectivization (USSR 1928–1933)** against **China’s First Five-Year Plan & Great Leap Forward (1953–1961)**: both prioritized rapid transformation over peasant autonomy and produced devastating famines (*Holodomor* 1932–1933 vs. Great Leap famine 1959–1961), yet Stalin’s **centralized Gosplan and NKVD apparatus** (**Alec Nove, Oleg Khlevniuk**) diverged sharply from Mao’s anti-bureaucratic mass ideological campaigns (**Roderick MacFarquhar, Frank Dikötter**), which weakened Mao’s Politburo standing before the **Cultural Revolution (1966)**.\n' +
          '- **Example Pairing 2 (Rise & Consolidation of Power — Hitler vs. Mao/Castro):** Contrast Hitler’s **top-down legal coordination (*Gleichschaltung*)** from a parliamentary coalition inside an urbanized industrial bureaucracy (`1933–1934`, **Ian Kershaw, Karl Bracher**) against Mao’s and Castro’s **rural guerrilla revolutionary seizures (`1949` / `1959`, **Jonathan Spence, Antoni Kapcia**)** that dismantled existing national armies completely through protracted insurgency.\n' +
          '- **Example Pairing 3 (Coercion, Propaganda & Dissent — Mussolini/Stalin vs. Castro/Mao):** Evaluate whether charismatic nationalist myth (*cult of leadership*, **MinCulPop / Granma**, mass youth literacy brigades) or institutional repression (*OVRA / NKVD / UMAP camps / Red Guards*) contributed more heavily to regime durability across contrasting developmental conditions.\n' +
          '- **Example Pairing 4 (Total War, Home Front & Decolonization):** Contrast **European Total War (`1939–1945`)** and resistance movements against anti-colonial insurgency (such as the **Algerian War of Independence 1954–1962**) or **Cold War proxy crises**, assessing **Cause & Consequence** and **Continuity & Change** across civilian mobilization and geopolitical settlements.',
      },
      {
        type: 'playable_diagram',
        spec: HIST_V3_P2_CROSS_REGIONAL_MATRIX,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Model Paper 2 Point-by-Point Paragraph Architecture & Year 1 Bridge',
      },
      {
        type: 'paragraph',
        markdown:
          'How does a Year 1 master of European totalitarianism build an immediate Band 13–15 **Paper 2** response once Year 2 introduces non-European case studies (**Mao Zedong’s China**, **Fidel Castro’s Cuba**, **Juan Perón’s Argentina**, or **decolonization movements**)? Replace biographical summaries with four synchronized analytical sections, keeping **both regions** inside every paragraph:\n' +
          '- **Paragraph Criterion 1 — Structural Crisis & Opportunity:** Pair Weimar’s **1929 Great Depression** and Article 48 collapse (`Europe`) directly against China’s post-1937 Japanese invasion, **GMD hyperinflation**, and peasant alienation (`Asia & Oceania`), weighing whether foreign war or economic collapse played the decisive catalyzing role.\n' +
          '- **Paragraph Criterion 2 — Pathways to Power (Urban Coalition vs. Rural Guerrilla War):** Contrast **Hitler’s January 1933 backstairs appointment and legal *Gleichschaltung*** inside an intact civil/military apparatus with **Mao’s Yan’an rural guerrilla revolution (1949)** or **Castro’s Sierra Maestra insurgency (1959)** shattering traditional armies militarily.\n' +
          '- **Paragraph Criterion 3 — Coercion, Terror & Mass Campaigns:** Balance **Stalin’s top-down NKVD quotas (`Order 00447`) and Gulag purges** alongside **Mao’s anti-bureaucratic mass purges (*Anti-Rightist Campaign, Red Guards during the 1966 Cultural Revolution*)** or **Castro’s CDR neighborhood committees and UMAP camps**, assessing how bureaucratic state strength shaped different forms of repression.\n' +
          '- **Paragraph Criterion 4 — Historiographical Evaluation Across Regions:** Engage **Kershaw/Mommsen** (*Germany*) or **Khlevniuk/Fitzpatrick** (*USSR*) directly alongside **Jonathan Spence, Roderick MacFarquhar, or Antoni Kapcia**, proving whether authoritarian power relied primarily on structural collapse, leader agency, or manufactured popular mobilization.\n\n' +
          'Similarly, in **Paper 1 (`P1.1`)**, when encountering **visual sources** (political cartoons by David Low, Nazi or Soviet propaganda posters) or **statistical tables** (wheat harvests, Reichstag seats, defense budgets), never leave figures raw or treat cartoons as mere decoration: cite exact trends (*"Whereas NSDAP vote share fell from 37.3% to 33.1% between July and November 1932..."*) and explain how the publisher’s target audience dictated caricature, omission, or triumphalist framing.',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Critical Paper 2 Examiner Trap — Two Halves vs. Alternating Synthesis & Regional Rule',
        markdown:
          '1. **Verify the Two-Region Mandate:** Always check whether a Paper 2 prompt states *"each chosen from a different region"*! Pairing Mussolini (Europe) and Hitler (Europe) forfeits comparative regional credit across the upper bands.\n' +
          '2. **Never Write "Split-Half" Essays:** Avoid spending paragraphs 1–3 solely on Stalin and paragraphs 4–6 solely on Mao with a rushed comparative conclusion. Organize every body paragraph around **analytical criteria** (*Emergence Conditions*, *Coercion & Terror*, *Economic Transformation*, *Social/Gender Policy*) comparing both leaders explicitly paragraph-by-paragraph.',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'Theory of Knowledge — Does Cross-Regional Comparison Distort Unique Contexts?',
        markdown:
          'Comparative Paper 2 prompts challenge us to test universal generalizations (e.g., *"Economic crisis is the decisive cause of authoritarian rise"* or *"Propaganda outweighs terror"*). While macro-comparison illuminates structural patterns uniting **1933 Germany** and **1949 China**, careful historians preserve **cultural and developmental specificity**—recognizing that Weimar’s 1932 industrial depression operated differently from war-shattered agrarian China in 1945–1949.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'IB Four Geographic Regions (Paper 2)',
            definitionMarkdown:
              'Africa & Middle East, The Americas, Asia & Oceania, and Europe; cross-regional Paper 2 prompts mandate examples from two distinct IB regions.',
            markschemeKeyword: 'two distinct regions',
          },
          {
            term: 'Corroboration & Synthesis (Paper 1)',
            definitionMarkdown:
              'Cross-examining multiple written and visual primary sources alongside external historical context to resolve tensions and build an argument.',
            markschemeKeyword: 'source synthesis',
          },
          {
            term: 'Situational Provenance (2028 Paper 1)',
            definitionMarkdown:
              'Evaluating how a document’s author, date, intended audience, ideological genre, and omissions directly limit or strengthen historical claims without mechanical OPCVL templates.',
            markschemeKeyword: 'provenance and perspective',
          },
          {
            term: 'Point-by-Point Comparative Structure',
            definitionMarkdown:
              'Band 13–15 Paper 2 organization built around shared analytical themes (Terror, Economy, Ideology, Women) rather than detached chronological halves.',
            markschemeKeyword: 'thematic comparison',
          },
        ],
      },
    ],
  },
];
