import type { ClassroomSeedQuestion } from '../types';

export const ENGLISH_LIT_HL_QUESTIONS: ClassroomSeedQuestion[] = [
  // =========================================================================
  // PAPER 1: GUIDED LITERARY ANALYSIS — PROSE FICTION (1–6)
  // =========================================================================
  {
    topicCode: 'AoE1.1',
    paperType: 'Paper 1 (Guided Literary Analysis)',
    commandTerm: 'Analyse',
    difficulty: 'HL Extension',
    maxMarks: 20,
    stimulusMarkdown:
      '> *"North Richmond Street, being blind, was a quiet street except at the hour when the Christian Brothers’ School set the boys free. An uninhabited house of two storeys stood at the blind end, detached from its neighbours in a square ground. The other houses of the street, conscious of decent lives within them, gazed at one another with brown imperturbable faces."*\n>\n> — James Joyce, *"Araby"* (*Dubliners*, 1914)',
    questionMarkdown:
      '**Guiding Question:** Analyse how Joyce uses **personification, diction, and spatial imagery** in this opening passage to establish psychological entrapment and ironic tone.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A (Understanding & Interpretation): Recognizes dual sense of "blind" (dead-end cul-de-sac and spiritual/imaginative myopia) alongside oppressive Catholic-bourgeois respectability.',
          marks: 5,
          keywords: ['blind', 'dead-end', 'paralysis', 'respectability'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B (Analysis & Evaluation): Unpacks personification ("conscious of decent lives", "gazed... with brown imperturbable faces"), ironic verb choice ("set the boys free"), and isolated architecture ("uninhabited... detached").',
          marks: 5,
          keywords: ['personification', 'imperturbable', 'set free', 'detached'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C (Focus & Organization): Sustains a cohesive analytical thesis organized around spatial stasis and ironic social surveillance rather than sentence-by-sentence paraphrase.',
          marks: 5,
          keywords: ['conceptual thesis', 'spatial framing', 'tone'],
        },
        {
          code: 'D1',
          criterion:
            'Criterion D (Language): Integrates crisp micro-quotations syntactically with precise literary terminology and mature academic register.',
          marks: 5,
          keywords: ['embedded quotes', 'literary register'],
        },
      ],
      model_answer:
        'Joyce inaugurates "Araby" with a deceptively quiet urban tableau whose spatial geometry and anthropomorphic diction immediately encode Dublin’s moral paralysis. Repeating the adjective "blind" across the opening two sentences transforms a physical cul-de-sac into a subtle diagnosis of spiritual myopia, reinforced by the ironic idiom "set the boys free," which recasts the Christian Brothers’ School implicitly as a carceral institution. Rather than centering human vitality, Joyce grants agency to domestic architecture: the houses, "conscious of decent lives within them," surveil one another with "brown imperturbable faces." Through that muted chromatic epithet ("brown") and personified mutual gaze, respectability ceases to feel warm or protective, emerging instead as rigid, self-policing conformity against which the isolated, "uninhabited house... at the blind end" prefigures the narrator’s thwarted romantic yearning.',
    },
    sourceFileNames: ['Food.jpg'],
  },
  {
    topicCode: 'AoE1.1',
    paperType: 'Paper 1 (Guided Literary Analysis)',
    commandTerm: 'Analyse',
    difficulty: 'HL Extension',
    maxMarks: 20,
    stimulusMarkdown:
      '> *"It was on a dreary night of November that I beheld the accomplishment of my toils. With an anxiety that almost amounted to agony, I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet. It was already one in the morning; the rain pattered dismally against the panes, and my candle was nearly burnt out, when, by the glimmer of the half-extinguished light, I saw the dull yellow eye of the creature open; it breathed hard, and a convulsive motion agitated its limbs."*\n>\n> — Mary Shelley, *Frankenstein* (1818), Chapter 5',
    questionMarkdown:
      '**Guiding Question:** Explore how Shelley uses **Gothic atmosphere, temporal pacing, and lighting contrast** to invert scientific triumph into psychological dread.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A: Identifies the central ironic tension between Promethean ambition ("spark of being", "accomplishment of my toils") and immediate revulsion ("lifeless thing", "agony").',
          marks: 5,
          keywords: ['ambition', 'revulsion', 'inversion'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B: Analyzes sensory Gothic setting ("dreary night of November", rain "pattered dismally"), failing illumination ("nearly burnt out", "half-extinguished"), and periodic syntax delaying the creature’s awakening until the climax.',
          marks: 5,
          keywords: ['Gothic setting', 'chiaroscuro', 'periodic syntax'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C: Tracks tonal shift from anxious anticipation to visceral horror cleanly around the "when" temporal hinge.',
          marks: 5,
          keywords: ['structural pivot', 'tonal shift'],
        },
        {
          code: 'D1',
          criterion:
            'Criterion D: Maintains analytical precision, embedding concise quotes effortlessly.',
          marks: 5,
          keywords: ['register', 'syntactic fluency'],
        },
      ],
      model_answer:
        'Shelley subverts Enlightenment narratives of heroic scientific discovery by framing animation not under radiant dawn light, but inside suffocating Gothic decay. Victor’s oxymoronic pairing of "anxiety that almost amounted to agony" with "accomplishment" immediately destabilizes triumph before his experiment even succeeds, while dehumanizing diction ("the lifeless thing") exposes his ethical detachment prior to creation. Structurally, Shelley builds suspense through a long periodic final sentence cataloging exhausted time ("already one in the morning"), dismal sound ("pattered dismally"), and dying illumination ("half-extinguished light"). Only after the reader’s sensory horizon narrows to that guttering candle does the temporal hinge "when" unleash the visceral shock of the "dull yellow eye" and "convulsive motion"—ironically dimming Victor’s Promethean "spark of being" into moral dread.',
    },
    sourceFileNames: ['Family.jpg'],
  },
  {
    topicCode: 'AoE1.2',
    paperType: 'Paper 1 (Guided Literary Analysis)',
    commandTerm: 'Examine',
    difficulty: 'Standard IB',
    maxMarks: 10,
    stimulusMarkdown:
      '> *"The colour is repellent, almost revolting; a smouldering unclean yellow, strangely faded by the slow-turning sunlight. It is a dull yet lurid orange in some places, a sickly sulphur tint in others. No wonder the children hated it! I should hate it myself if I had to live in this room long."*\n>\n> — Charlotte Perkins Gilman, *"The Yellow Wallpaper"* (1892)',
    questionMarkdown:
      '**Guiding Question:** Examine how Gilman uses **sensory diction, oxymoronic color imagery, and dramatic irony** to reveal the narrator’s unreliable entrapment.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A: Connects physical revulsion toward the wallpaper to psychological incarceration and the dramatic irony of the narrator’s concluding conditional.',
          marks: 3,
          keywords: ['entrapment', 'unreliable narrator', 'irony'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B: Analyzes oxymoronic/visceral adjectives ("smouldering unclean", "dull yet lurid", "sickly sulphur") and exclamatory syntax ("No wonder...!") registering escalating obsession.',
          marks: 4,
          keywords: ['sensory diction', 'oxymoron', 'dramatic irony'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C & D: Focused thesis linking surface description to implied psychological confinement.',
          marks: 3,
          keywords: ['focus', 'literary register'],
        },
      ],
      model_answer:
        'Gilman transforms domestic interior description into a barometer of psychological suffocation through visceral, contradictory color imagery. Rather than remaining passive decoration, the wallpaper turns menacingly active via adjectives like "smouldering unclean" and "sickly sulphur," while the oxymoron "dull yet lurid" captures a mind oscillating between enforced torpor and feverish hallucination. Most tellingly, the final hypothetical—"if I had to live in this room long"—generates chilling dramatic irony: although the narrator believes she retains agency over her confinement, readers already perceive how deeply the barred nursery dictates her interior reality.',
    },
    sourceFileNames: ['Family.jpg'],
  },
  {
    topicCode: 'AoE1.1',
    paperType: 'Paper 1 (Guided Literary Analysis)',
    commandTerm: 'Analyse',
    difficulty: 'HL Extension',
    maxMarks: 20,
    stimulusMarkdown:
      '> *"She could see in the open square before her house the tops of trees that were all aquiver with the new spring life. The delicious breath of rain was in the air. In the street below a peddler was crying his wares. The notes of a distant song which some one was singing reached her faintly, and countless sparrows were twittering in the eaves. There were patches of blue sky showing here and there through the clouds that had met and piled one above the other in the west facing her window."*\n>\n> — Kate Chopin, *"The Story of an Hour"* (1894)',
    questionMarkdown:
      '**Guiding Question:** Analyse how Chopin uses **narrative focalization and sensory contrast** to foreshadow Louise Mallard’s emotional transformation.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A: Interprets the contrast between domestic mourning expectations and the exhilarating sensory vitality seen outside Louise’s window.',
          marks: 5,
          keywords: ['grief vs liberation', 'window threshold'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B: Unpacks third-person limited focalization ("She could see"), vibrant personified/tactile diction ("aquiver", "delicious breath"), paratactic acoustic cataloging, and sky chiaroscuro ("patches of blue sky").',
          marks: 5,
          keywords: ['focalization', 'parataxis', 'chiaroscuro'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C: Organizes around visual/auditory/spatial movements rather than line-by-line summary.',
          marks: 5,
          keywords: ['thematic movement', 'coherence'],
        },
        {
          code: 'D1',
          criterion:
            'Criterion D: Employs concise literary vocabulary and smooth quote embedding.',
          marks: 5,
          keywords: ['precision', 'register'],
        },
      ],
      model_answer:
        'Chopin resists explicit psychological exposition after news of Brently Mallard’s death, relying instead on focalized sensory projection to signal Louise’s illicit awakening. Anchored in Louise’s gaze ("She could see"), the narrative inverts traditional elegiac pathetic fallacy: rather than cold winter sterility, the square bursts with trees "aquiver with the new spring life" and the synesthetic sweetness of "delicious breath of rain." Rapid paratactic declaratives stack public street commerce, distant song, and "countless sparrows," dissolving domestic silence into boundless communal motion. Finally, the visual chiaroscuro of "patches of blue sky" piercing "piled" western clouds externalizes Louise’s nascent autonomy breaking through social obligation before she dares speak the word "Free."',
    },
    sourceFileNames: ['Food.jpg'],
  },
  {
    topicCode: 'AoE2.1',
    paperType: 'Paper 1 (Guided Literary Analysis)',
    commandTerm: 'Examine',
    difficulty: 'Standard IB',
    maxMarks: 10,
    stimulusMarkdown:
      '> *"‘And this also,’ said Marlow suddenly, ‘has been one of the dark places of the earth.’ ... ‘The conquest of the earth, which mostly means the taking it away from those who have a different complexion or slightly flatter noses than ourselves, is not a pretty thing when you look into it too much.’"*\n>\n> — Joseph Conrad, *Heart of Darkness* (1899)',
    questionMarkdown:
      '**Guiding Question:** Examine how Conrad uses **narrative voice, litotes ("not a pretty thing"), and historical inversion** to destabilize Victorian imperial self-assurance (and evaluate why Chinua Achebe still critiqued the novella).',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A: Recognizes Marlow’s reversal reminding London listeners that Britain itself was once colonized Roman "darkness," while noting the passage’s Eurocentric framing.',
          marks: 3,
          keywords: ['historical inversion', 'Achebe critique'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B: Analyzes blunt demystifying diction ("taking it away"), racialized reduction ("different complexion or slightly flatter noses"), and biting understatement/litotes ("not a pretty thing").',
          marks: 4,
          keywords: ['litotes', 'demystification', 'framed voice'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C & D: Balanced evaluative argument with concise textual embedding.',
          marks: 3,
          keywords: ['evaluative nuance', 'register'],
        },
      ],
      model_answer:
        'Conrad destabilizes Victorian imperial confidence from within by having Marlow turn England’s civilized Thames into a former colonized margin: "this also... has been one of the dark places of the earth." Stripping away missionary rhetoric, Marlow’s blunt gerund phrase—"the taking it away"—and wry litotes ("not a pretty thing") expose conquest as banal theft justified by superficial racial taxonomy ("different complexion or slightly flatter noses"). Yet as Chinua Achebe famously argued in response, Conrad’s critique centers exclusively on European moral disillusionment while leaving colonized peoples silenced—a representational imbalance Achebe directly answered in *Things Fall Apart*.',
    },
    sourceFileNames: ['ReligionCulture.jpg'],
  },
  {
    topicCode: 'AoE1.1',
    paperType: 'Paper 1 (Guided Literary Analysis)',
    commandTerm: 'Analyse',
    difficulty: 'Standard IB',
    maxMarks: 10,
    stimulusMarkdown:
      'In **Food.jpg** (p. 19 & p. 23), diplomacy begins with breaking kola nut and alligator pepper and bringing palm wine to Nwakibie, while yams ringed with thick sisal leaves belong to masculine prestige as *"women’s crops like coco-yams, beans and cassava"* sustain households daily; on p. 27, elders cite the proverb *"It is not true that Okonkwo’s palm kernels have been cracked for him by a benevolent spirit."*',
    questionMarkdown:
      'Analyse how Achebe uses **agricultural and culinary rituals** (`Food.jpg` pp. 10, 19, 23, 27, 42–43, 56) both to dignify pre-colonial Igbo civility and to expose rigid gender hierarchy.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A: Contrasts civil kola/alligator pepper hospitality & Nwakibie sharecropping diplomacy (pp. 19, 27) against martial skull-cup drinking (p. 10) and gendered yam status (p. 23).',
          marks: 4,
          keywords: ['kola nut', 'yams vs women crops', 'hospitality'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B: Examines oral proverbial rhetoric ("palm kernels", p. 27), intimate culinary realism (pp. 42–43), and communal locust harvest roasted in clay pots (p. 56).',
          marks: 4,
          keywords: ['proverbial diction', 'sensory realism', 'gender coding'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C & D: Avoids romanticizing or flatly condemning Umuofia, maintaining poised analytical prose.',
          marks: 2,
          keywords: ['nuance', 'balance'],
        },
      ],
      model_answer:
        'Through ceremonial kola-nut sharing with Nwakibie (p. 19) and communal locust roasting in clay pots (p. 56), Achebe refutes colonial caricatures of pre-contact disorder, grounding Igbo diplomacy in reciprocal reverence. Simultaneously, categorizing nourishing beans, coco-yams, and cassava as inferior "women’s crops" (p. 23) against sisal-ringed yams exposes patriarchal hierarchy embedded directly inside agrarian honour, while elder proverbs (p. 27) affirm Okonkwo’s self-made grit even as martial skull-drinking (p. 10) signals hyper-masculine excess.',
    },
    sourceFileNames: ['Food.jpg'],
  },

  // =========================================================================
  // PAPER 1: GUIDED LITERARY ANALYSIS — POETRY (7–12)
  // =========================================================================
  {
    topicCode: 'AoE1.1',
    paperType: 'Paper 1 (Guided Literary Analysis)',
    commandTerm: 'Analyse',
    difficulty: 'HL Extension',
    maxMarks: 20,
    stimulusMarkdown:
      '> *"I felt a Funeral, in my Brain, / And Mourners to and fro / Kept treading - treading - till it seemed / That Sense was breaking through - // And when they all were seated, / A Service, like a Drum - / Kept beating - beating - till I thought / My Mind was going numb - // ... And then a Plank in Reason, broke, / And I dropped down, and down - / And hit a World, at every plunge, / And Finished knowing - then -"* \n>\n> — Emily Dickinson, *"I felt a Funeral, in my Brain"* (1896)',
    questionMarkdown:
      '**Guiding Question:** Analyse how Dickinson employs **extended funeral metaphor, acoustic repetition, and idiosyncratic punctuation** to dramatize cognitive disintegration.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A: Traces the progression from claustrophobic sensory pressure ("Mourners... treading", "Service, like a Drum") to structural mental collapse ("Plank in Reason, broke").',
          marks: 5,
          keywords: ['cognitive collapse', 'extended metaphor', 'claustrophobia'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B: Analyzes epizeuxis ("treading - treading", "beating - beating"), ballad-meter regularity disrupted by em-dashes, tactile plunge verbs ("dropped... hit"), and the haunting aposiopesis at "Finished knowing - then -".',
          marks: 5,
          keywords: ['epizeuxis', 'em-dashes', 'ballad meter', 'aposiopesis'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C: Structures essay cleanly across auditory build-up and spatial fall rather than stanza-by-stanza summary.',
          marks: 5,
          keywords: ['structural arc', 'cohesion'],
        },
        {
          code: 'D1',
          criterion:
            'Criterion D: Accurate prosodic terminology and crisp analytical voice.',
          marks: 5,
          keywords: ['prosody', 'terminology'],
        },
      ],
      model_answer:
        'Dickinson maps psychic breakdown onto the relentless choreography of a Victorian burial service, turning internal anguish into excruciating acoustic weight. The epizeuxis of "treading - treading" and "beating - beating," amplified by insistent em-dashes across ballad meter, replicates a percussive throb eroding rational defense ("till it seemed / That Sense was breaking through"). Crucially, Dickinson uses capitalization ("Funeral," "Brain," "Reason") to stage cognitive faculties as concrete architectural chambers—until a single "Plank in Reason" fractures. In the closing quatrain, falling rhythm ("dropped down, and down -") gives way to violent impact ("hit a World, at every plunge") before halting abruptly on the suspended dash after "Finished knowing - then -", enacting consciousness extinguishing itself on the edge of silence.',
    },
    sourceFileNames: ['Food.jpg'],
  },
  {
    topicCode: 'AoE1.1',
    paperType: 'Paper 1 (Guided Literary Analysis)',
    commandTerm: 'Analyse',
    difficulty: 'HL Extension',
    maxMarks: 20,
    stimulusMarkdown:
      '> *"Bent double, like old beggars under sacks, / Knock-kneed, coughing like hags, we cursed through sludge, / Till on the haunting flares we turned our backs, / And towards our distant rest began to trudge. / Men marched asleep. Many had lost their boots, / But limped on, blood-shod. All went lame; all blind; / Drunk with fatigue; deaf even to the hoots / Of tired, outstripped Five-Nines that dropped behind. // Gas! GAS! Quick, boys!—An ecstasy of fumbling / Fitting the clumsy helmets just in time..."*\n>\n> — Wilfred Owen, *"Dulce et Decorum Est"* (1920)',
    questionMarkdown:
      '**Guiding Question:** Analyse how Owen deploys **unheroic simile, acoustic cacophony, and sudden shifts in syntax and rhythm** to dismantle romanticized war rhetoric.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A: Connects physical degradation of exhausted soldiers to Owen’s anti-war indictment of heroic national propaganda.',
          marks: 5,
          keywords: ['anti-war critique', 'dehumanization', 'fatigue'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B: Analyzes debasing similes ("old beggars", "coughing like hags"), heavy consonantal plosives/caesuras ("Men marched asleep... All went lame; all blind;"), paradoxical diction ("ecstasy of fumbling"), and abrupt trochaic/spondaic rupture at "Gas! GAS! Quick, boys!".',
          marks: 5,
          keywords: ['simile', 'caesura', 'spondee', 'paradox'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C: Organizes around the structural rupture between sluggish exhaustion (Stanza 1) and panicked immediacy (Stanza 2).',
          marks: 5,
          keywords: ['stanzaic contrast', 'pacing'],
        },
        {
          code: 'D1',
          criterion:
            'Criterion D: Precise prosodic and rhetorical register.',
          marks: 5,
          keywords: ['register', 'embedded quotes'],
        },
      ],
      model_answer:
        'Owen strips martial glory away from the first syllable by bending heroic iambic pentameter under grotesque exhaustion. Opening with the spondaic drag of "Bent double," Owen compares young soldiers not to mythic warriors but to "old beggars" and "coughing... hags," while guttural plosives and harsh medial caesuras ("All went lame; all blind;") force the reader to trudge syllable by syllable through "sludge" and "blood-shod" agony. Stanza 2 then shatters this somnambulist stupor with typographic urgency—"Gas! GAS! Quick, boys!"—breaking meter through shouted imperatives and the bitter oxymoron "ecstasy of fumbling," contrasting breathless panic against Stanza 1’s numb drag.',
    },
    sourceFileNames: ['ReligionCulture.jpg'],
  },
  {
    topicCode: 'AoE1.2',
    paperType: 'Paper 1 (Guided Literary Analysis)',
    commandTerm: 'Examine',
    difficulty: 'Standard IB',
    maxMarks: 10,
    stimulusMarkdown:
      '> *"My mistress’ eyes are nothing like the sun; / Coral is far more red than her lips’ red; / If snow be white, why then her breasts are dun; / If hairs be wires, black wires grow on her head. ... // And yet, by heaven, I think my love as rare / As any she belied with false compare."*\n>\n> — William Shakespeare, *Sonnet 130* (1609)',
    questionMarkdown:
      '**Guiding Question:** Examine how Shakespeare manipulates **Petrarchan blazon conventions and the sonnet’s final couplet volta** to redefine authentic devotion.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A: Identifies the speaker’s affectionate rejection of idealized Renaissance hyperbole in favor of grounded human intimacy.',
          marks: 3,
          keywords: ['anti-Petrarchan', 'authenticity', 'hyperbole'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B: Analyzes negative similes ("nothing like", "dun", "black wires"), balanced declarative irony across quatrains, and the sharp tonal pivot at "And yet, by heaven" dismissing poetic clichés as "false compare."',
          marks: 4,
          keywords: ['blazon subversion', 'volta', 'rhyming couplet'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C & D: Coherent argument connecting sonnet architecture to thematic reversal.',
          marks: 3,
          keywords: ['sonnet structure', 'concision'],
        },
      ],
      model_answer:
        'Shakespeare weaponizes the Renaissance Petrarchan blazon against itself by testing conventional cosmic similes against empirical reality and finding them absurd. Across three quatrains, flat negations ("nothing like the sun") and earthy corrective adjectives ("dun," "black wires") deliberately risk insulting the beloved only to expose the artificiality of poets who demand women resemble coral or goddesses. When the final rhyming couplet pivots on the colloquial oath "And yet, by heaven," the poem’s structural volta retroactively redeems every blunt confession: true affection ("as rare") requires no flattering "false compare."',
    },
    sourceFileNames: ['Food.jpg'],
  },
  {
    topicCode: 'AoE1.1',
    paperType: 'Paper 1 (Guided Literary Analysis)',
    commandTerm: 'Analyse',
    difficulty: 'HL Extension',
    maxMarks: 20,
    stimulusMarkdown:
      '> *"Season of mists and mellow fruitfulness, / Close bosom-friend of the maturing sun; / Conspiring with him how to load and bless / With fruit the vines that round the thatch-eves run; / To bend with apples the moss’d cottage-trees, / And fill all fruit with ripeness to the core; / To swell the gourd, and plump the hazel shells / With a sweet kernel; to set budding more, / And still more, later flowers for the bees, / Until they think warm days will never cease, / For Summer has o’er-brimm’d their clammy cells."*\n>\n> — John Keats, *"To Autumn"* (1819), Stanza 1',
    questionMarkdown:
      '**Guiding Question:** Analyse how Keats uses **syntactic accumulation, tactile diction, and subtle irony** to celebrate harvest abundance while hinting at its impending end.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A: Captures the dual emotional register: lush natural generosity tempered by transient illusion ("Until they think") and over-ripeness ("clammy").',
          marks: 5,
          keywords: ['abundance', 'transience', 'dramatic irony'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B: Analyzes trochaic opening + soft m-alliteration, intimate personification ("bosom-friend", "Conspiring"), chain of transitive infinitives ("load... bend... fill... swell... plump"), enjambed spill ("more, / And still more"), and ending adjective "clammy".',
          marks: 5,
          keywords: ['infinitive syntax', 'enjambment', 'tactile verbs'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C: Structured cleanly around sensory saturation vs temporal limits.',
          marks: 5,
          keywords: ['movement', 'focus'],
        },
        {
          code: 'D1',
          criterion:
            'Criterion D: Crisp critical prose and accurate prosodic terminology.',
          marks: 5,
          keywords: ['prosodic precision', 'register'],
        },
      ],
      model_answer:
        'Keats builds Stanza 1 of "To Autumn" as a single swollen periodic sentence whose very grammar enacts seasonal fruition while quietly planting seeds of mortality. Opening on a languid trochee ("Season") cushioned by "mists and mellow," Keats personifies Autumn and the "maturing sun" as affectionate co-conspirators plotting "how to load and bless" the orchard. A mounting cascade of muscular Anglo-Saxon infinitives—"To bend," "fill," "To swell," "plump"—mimics sap pushing fruit to bursting, until enjambment spills across line 8 into "more, / And still more." Yet at line 10, the temporal hinge "Until" shifts perspective into the bees’ naive illusion that "warm days will never cease," injecting poignant dramatic irony alongside the slightly sticky excess of "clammy cells"—reminding readers that peak ripeness already borders on decay.',
    },
    sourceFileNames: ['Food.jpg'],
  },
  {
    topicCode: 'AoE3.1',
    paperType: 'Paper 1 (Guided Literary Analysis)',
    commandTerm: 'Analyse',
    difficulty: 'Standard IB',
    maxMarks: 10,
    stimulusMarkdown:
      '> *"Turning and turning in the widening gyre / The falcon cannot hear the falconer; / Things fall apart; the centre cannot hold; / Mere anarchy is loosed upon the world, / The blood-dimmed tide is loosed, and everywhere / The ceremony of innocence is drowned;"*\n>\n> — W. B. Yeats, *"The Second Coming"* (1920), lines 1–6',
    questionMarkdown:
      '**Guiding Question:** Analyse how Yeats uses **repetition, caesura, and metaphorical disorder** in these opening lines to convey historical disintegration (noting how Achebe reframes line 3 in *Things Fall Apart*).',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A: Connects kinetic spin, severed falconer hierarchy, and flood imagery to postwar ideological collapse, and contrasts Yeats’s Eurocentric anxiety with Achebe’s Igbo counter-reading.',
          marks: 4,
          keywords: ['epigraph', 'historical collapse', 'counter-reading'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B: Examines epizeuxis ("Turning and turning"), falcon/falconer breakdown of order, stark semicolon caesura in line 3, and passive verbs ("is loosed", "is drowned").',
          marks: 4,
          keywords: ['epizeuxis', 'caesura', 'passive voice'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C & D: Focused thesis and cohesive integration of intertextual link.',
          marks: 2,
          keywords: ['intertextuality', 'concision'],
        },
      ],
      model_answer:
        'Yeats dramatizes civilizational unraveling through centrifugal motion and fractured syntax. Present-participle epizeuxis ("Turning and turning") traps the opening line inside an uncontrollable "widening gyre," immediately severed from hierarchy as "The falcon cannot hear the falconer." Line 3 snaps in half across a blunt semicolon caesura—"Things fall apart; the centre cannot hold"—performing rhythmically the collapse of moral equilibrium, while passive constructions ("is loosed," "is drowned") figure violence as an unstoppable "blood-dimmed tide." When Chinua Achebe borrows line 3 as his novel’s title, he shifts this Eurocentric lament of lost "ceremony" onto Umuofia—demonstrating that Igbo ritual diplomacy and *Ani* jurisprudence (`Food.jpg` p. 19; `ReligionCulture.jpg` p. 30) constituted a rich center disrupted by colonial rule.',
    },
    sourceFileNames: ['ReligionCulture.jpg'],
  },
  {
    topicCode: 'AoE1.1',
    paperType: 'Paper 1 (Guided Literary Analysis)',
    commandTerm: 'Examine',
    difficulty: 'Standard IB',
    maxMarks: 10,
    stimulusMarkdown:
      '> *"Glory be to God for dappled things — / For skies of couple-colour as a brinded cow; / For rose-moles all in stipple upon trout that swim; / Fresh-firecoal chestnut-falls; finches’ wings; / Landscape plotted and pieced — fold, fallow, and plough; / And áll trádes, their gear and tackle and trim."*\n>\n> — Gerard Manley Hopkins, *"Pied Beauty"* (1918)',
    questionMarkdown:
      '**Guiding Question:** Examine how Hopkins uses **compound epithets, tactile cataloguing, and rhythmic stress** to celebrate imperfection and diversity.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A: Identifies the central theological paradox: praising divine unity precisely through variegated, "pied" asymmetry across nature and human craft.',
          marks: 3,
          keywords: ['variegated beauty', 'paradox', 'craft'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B: Analyzes hyphenated compound coinages ("couple-colour", "rose-moles", "Fresh-firecoal chestnut-falls"), alliterative acoustic bursts ("plotted and pieced — fold, fallow, and plough"), and sprung-rhythm stresses ("áll trádes").',
          marks: 4,
          keywords: ['compound epithets', 'alliteration', 'sprung rhythm'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C & D: Concise analytical integration connecting sound density to thematic praise.',
          marks: 3,
          keywords: ['acoustic density', 'register'],
        },
      ],
      model_answer:
        'Hopkins rejects neoclassical smoothness by packing every line with jagged compound coinages and percussive consonance to mirror a mottled creation. Hyphenated hybrids—"couple-colour," "rose-moles," and luminous "Fresh-firecoal chestnut-falls"—fuse opposing sensory realms into singular nouns, while muscular alliteration across agrarian labor ("plotted and pieced — fold, fallow, and plough") binds wild trout and finches effortlessly to human trades. By clustering heavy sprung-rhythm stresses onto "áll trádes" and polysyndetic "gear and tackle and trim," Hopkins translates exuberant acoustic density directly into devotional awe.',
    },
    sourceFileNames: ['Food.jpg'],
  },

  // =========================================================================
  // PAPER 1: DRAMA, PROSE NON-FICTION & COMPONENT CRAFT (13–18)
  // =========================================================================
  {
    topicCode: 'AoE1.1',
    paperType: 'Paper 1 (Guided Literary Analysis)',
    commandTerm: 'Analyse',
    difficulty: 'HL Extension',
    maxMarks: 20,
    stimulusMarkdown:
      '> **MACBETH:** *"She should have died hereafter; / There would have been a time for such a word. / To-morrow, and to-morrow, and to-morrow, / Creeps in this petty pace from day to day, / To the last syllable of recorded time; / And all our yesterdays have lighted fools / The way to dusty death. Out, out, brief candle! / Life’s but a walking shadow, a poor player, / That struts and frets his hour upon the stage, / And then is heard no more. It is a tale / Told by an idiot, full of sound and fury, / Signifying nothing."*\n>\n> — William Shakespeare, *Macbeth* (Act 5, Scene 5)',
    questionMarkdown:
      '**Guiding Question:** Analyse how Shakespeare uses **metatheatrical metaphor, temporal repetition, and rhythmic breakdown** in this soliloquy to convey Macbeth’s moral exhaustion.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A: Traces Macbeth’s numb response to Lady Macbeth’s death into radical existential nihilism stripping royal ambition of meaning.',
          marks: 5,
          keywords: ['nihilism', 'exhaustion', 'irony of ambition'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B: Analyzes polysyndetic repetition ("To-morrow, and to-morrow, and to-morrow"), sibilant crawl ("petty pace"), imperative "Out, out, brief candle!", extended metatheatrical simile ("poor player... struts and frets"), and truncated half-line "Signifying nothing."',
          marks: 5,
          keywords: ['metatheater', 'epizeuxis', 'truncated verse', 'soliloquy'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C: Organizes by shifts in temporal scale and metatheatrical self-awareness rather than line-by-line paraphrase.',
          marks: 5,
          keywords: ['structural focus', 'soliloquy arc'],
        },
        {
          code: 'D1',
          criterion:
            'Criterion D: Employs dramatic terminology accurately with embedded micro-quotes.',
          marks: 5,
          keywords: ['dramatic register', 'precision'],
        },
      ],
      model_answer:
        'Shakespeare dramatizes Macbeth’s spiritual hollowing not with fiery rage, but with suffocating rhythmic exhaustion. Reacting to Lady Macbeth’s offstage death with flattened regret ("should have died hereafter"), Macbeth drags verse into hypnotic monotony through polysyndetic repetition—"To-morrow, and to-morrow, and to-morrow"—whose plodding monosyllables ("Creeps in this petty pace from day to day") reduce royal destiny to meaningless attrition. When he commands "Out, out, brief candle!", apostrophe abruptly collapses into self-referential metatheater: life becomes a "poor player / That struts and frets his hour upon the stage." By casting his own bloody usurpation as "a tale / Told by an idiot" and severing pentameter mid-line on the three-syllable void "Signifying nothing," Shakespeare leaves Macbeth—and the theater audience—confronting pure absence.',
    },
    sourceFileNames: ['Family.jpg'],
  },
  {
    topicCode: 'AoE2.2',
    paperType: 'Paper 1 (Guided Literary Analysis)',
    commandTerm: 'Examine',
    difficulty: 'Standard IB',
    maxMarks: 10,
    stimulusMarkdown:
      '> **HELMER:** *"Before all else, you are a wife and a mother."*\n> **NORA:** *"I don’t believe that any longer. I believe that before all else I am a reasonable human being, just as you are—or, at all events, that I must try and become one. I know quite well, Torvald, that most people would think you right, and that views of that kind are to be found in books; but I can no longer content myself with what most people say, or with what is found in books. I must think over things for myself and get to understand them."*\n>\n> — Henrik Ibsen, *A Doll’s House* (1879, Act 3, trans. R. Farquharson Sharp)',
    questionMarkdown:
      '**Guiding Question:** Examine how Ibsen uses **syntactic echoing, shifting power dynamics in dialogue, and appeal to print authority** to stage ideological rupture in this translated dramatic exchange.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A: Identifies Nora’s rejection of Victorian maternal/marital essentialism in favor of autonomous moral agency.',
          marks: 3,
          keywords: ['autonomy', 'patriarchal roles', 'ideological rupture'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B: Analyzes Nora’s rhetorical seizure of Helmer’s opening phrase ("Before all else"), transition from Helmer’s clipped decree to Nora’s measured epistemic verbs ("believe", "think over", "understand"), and critique of patriarchal consensus ("what is found in books")—focusing cleanly on features preserved in translation.',
          marks: 4,
          keywords: ['syntactic echoing', 'epistemic diction', 'translation-safe analysis'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C & D: Grounded in dramatic stagecraft without inventing spurious English sound effects on a Norwegian translation.',
          marks: 3,
          keywords: ['dramatic tension', 'register'],
        },
      ],
      model_answer:
        'Ibsen constructs ideological rebellion directly inside conversational syntax rather than relying on classical poetic soliloquy. Helmer attempts to close debate with an absolute single-sentence imperative anchoring Nora’s identity in domestic roles: "Before all else, you are a wife and a mother." Nora dismantles his authority by seizing his exact opening adverbial phrase—"before all else I am a reasonable human being"—transforming passive submission into rational egalitarian claim. Notice how her parallel repudiation of "what most people say" and "what is found in books" shifts register from Torvald’s patronizing pet names (*"little lark"*) to self-directed epistemic verbs ("think over," "understand"), marking her psychological exit from the doll’s house before the final door slams.',
    },
    sourceFileNames: ['Family.jpg'],
  },
  {
    topicCode: 'COMP.1',
    paperType: 'Paper 1 (Guided Literary Analysis)',
    commandTerm: 'Analyse',
    difficulty: 'HL Extension',
    maxMarks: 20,
    stimulusMarkdown:
      '> *"Between me and the other world there is ever an unasked question: unasked by some through feelings of delicacy; by others through the difficulty of rightly framing it... To the real question, How does it feel to be a problem? I answer seldom a word. // After the Egyptian and Indian, the Greek and Roman, the Teuton and Mongolian, the Negro is a sort of seventh son, born with a veil, and gifted with second-sight in this American world,—a world which yields him no true self-consciousness, but only lets him see himself through the revelation of the other world."*\n>\n> — W. E. B. Du Bois, *The Souls of Black Folk* (1903), Chapter I',
    questionMarkdown:
      '**Guiding Question:** Analyse how Du Bois uses **syntactic balance, ironic restraint, and the extended metaphor of "the veil"** in this prose non-fiction passage to represent double-consciousness.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A: Explains the psychological paradox of double-consciousness—simultaneous alienation ("no true self-consciousness") and clarifying insight ("gifted with second-sight").',
          marks: 5,
          keywords: ['double-consciousness', 'second-sight', 'alienation'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B: Analyzes spatial cleavage ("Between me and the other world"), anadiplosis ("unasked question: unasked by some"), blunt unquoted hypophora ("How does it feel to be a problem?"), syntactic inversion ("answer seldom a word"), and world-historical periodic parallelism framing the "veil" metaphor.',
          marks: 5,
          keywords: ['anadiplosis', 'hypophora', 'periodic syntax', 'veil metaphor'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C: Organizes cleanly by rhetorical movements (interpersonal evasion → world-historical prophetic framing).',
          marks: 5,
          keywords: ['rhetorical movement', 'thesis focus'],
        },
        {
          code: 'D1',
          criterion:
            'Criterion D: High-precision non-fiction analytical register.',
          marks: 5,
          keywords: ['prose non-fiction', 'register'],
        },
      ],
      model_answer:
        'In this opening non-fiction movement, Du Bois exposes racialized alienation through the deliberate contrast between poised rhetorical mastery and condescending white evasion. Opening with the spatial gulf "Between me and the other world," Du Bois employs judicial anadiplosis ("unasked question: unasked by some") and balanced semicolons before slicing through euphemism with the stark unquoted question "How does it feel to be a problem?" His inverted reticence—"I answer seldom a word"—preserves dignified sovereignty rather than reacting defensively. In the second movement, a sweeping periodic catalogue ("Egyptian and Indian, the Greek and Roman...") elevates African American experience onto world-historical scale, transforming the folkloric birth-caul ("born with a veil") into an ambivalent emblem: excluded from "true self-consciousness," yet "gifted with second-sight" capable of diagnosing American hypocrisy.',
    },
    sourceFileNames: ['IB Assessment Calendar 2026-2027.pdf'],
  },
  {
    topicCode: 'AoE1.1',
    paperType: 'Paper 1 (Guided Literary Analysis)',
    commandTerm: 'Examine',
    difficulty: 'Standard IB',
    maxMarks: 10,
    stimulusMarkdown:
      '> *"You are loosed from your moorings, and are free; I am fast in my chains, and am a slave! You move merrily before the gentle gale, and I sadly before the bloody whip! You are freedom’s swift-winged angels, that fly round the world; I am confined in bands of iron! O that I were free! O, that I were on one of your gallant decks, and under your protecting wing!"*\n>\n> — Frederick Douglass, *Narrative of the Life of Frederick Douglass* (1845), Chapter X',
    questionMarkdown:
      '**Guiding Question:** Examine how Douglass uses **antithesis, apostrophe, and parallel syntax** in this autobiographical passage to heighten the moral urgency of his appeal.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A: Links contrast between sailing vessels and enslaved immobility to Douglass’s ethical critique of American slavery before an antebellum readership.',
          marks: 3,
          keywords: ['immobility vs freedom', 'abolitionist rhetoric'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B: Analyzes sustained binary antithesis across semicolons ("loosed... free; I am fast... slave!", "gentle gale" vs "bloody whip"), personifying apostrophe ("swift-winged angels"), and anaphoric lament ("O that I were... O, that I were").',
          marks: 4,
          keywords: ['antithesis', 'apostrophe', 'anaphora', 'parallelism'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C & D: Concise integration of device → effect without mere summary.',
          marks: 3,
          keywords: ['oratorical cadence', 'precision'],
        },
      ],
      model_answer:
        'Douglass weaponizes symmetrical antithesis across Chesapeake Bay’s horizon so the reader feels enslavement as an unnatural contradiction inside a supposedly free landscape. Each balanced semicolon forces direct collision between "You" and "I": "loosed from your moorings" snaps directly into "fast in my chains," while the idyllic "gentle gale" turns visceral against "the bloody whip." Addressing inanimate sails through elevated apostrophe ("freedom’s swift-winged angels"), Douglass converts private despair into anaphoric prayer ("O that I were..."), summoning his antebellum audience to witness freedom denied within sight of liberty.',
    },
    sourceFileNames: ['IB Assessment Calendar 2026-2027.pdf'],
  },
  {
    topicCode: 'COMP.1',
    paperType: 'Paper 1 (Guided Literary Analysis)',
    commandTerm: 'Explain',
    difficulty: 'Foundation',
    maxMarks: 6,
    questionMarkdown:
      'Explain why **chronological line-by-line summary** limits Paper 1 Criterion C scores, and outline the **10-minute annotation + movement-based structure** required to reach Band 7.',
    markscheme: {
      marking_points: [
        {
          code: 'C1',
          criterion:
            'Explains that linear paraphrase ("In stanza 1... Next in stanza 2...") fractures thematic focus and encourages feature-spotting over synthesis.',
          marks: 2,
          keywords: ['chronological trap', 'Criterion C'],
        },
        {
          code: 'C2',
          criterion:
            'Models movement-based grouping (2–3 conceptual paragraphs tracking tonal shifts, focalization changes, or figurative tensions answering the Guiding Question).',
          marks: 2,
          keywords: ['analytical movements', 'guiding question'],
        },
        {
          code: 'B1',
          criterion:
            'Shows how the 10-minute sprint selects micro-quotations across movements to build a unified thesis before drafting.',
          marks: 2,
          keywords: ['10-minute plan', 'micro-quotations'],
        },
      ],
      model_answer:
        'Chronological summary traps essays in passive narration ("First the author says... then...") rather than answering the Guiding Question analytically. During the 10-minute planning sprint, candidates should identify the passage’s central turning point, select 6–9 short micro-quotations, formulate a conceptual thesis answering the Guiding Question, and organize body paragraphs around 2–3 stylistic or tonal movements (e.g., external composure shifting into internal irony) rather than line sequence.',
    },
    sourceFileNames: ['IB Assessment Calendar 2026-2027.pdf'],
  },
  {
    topicCode: 'COMP.1',
    paperType: 'Paper 1 (Guided Literary Analysis)',
    commandTerm: 'Outline',
    difficulty: 'Foundation',
    maxMarks: 4,
    questionMarkdown:
      'Outline the mandatory **HL Paper 1 exam format, weighting, and timing strategy** across both unseen extracts, contrasting it with SL.',
    markscheme: {
      marking_points: [
        {
          code: 'M1',
          criterion:
            'States HL Paper 1 is 2 hours 15 minutes, 40 marks total (35% of HL grade), requiring candidates to analyze BOTH unseen extracts (20 marks each, distinct literary forms)—unlike SL (1 of 2 extracts in 1h 15m).',
          marks: 2,
          keywords: ['2h 15m', '40 marks', '35%', 'both unseen extracts'],
        },
        {
          code: 'M2',
          criterion:
            'Recommends balanced ~65–67 min pacing per passage (10m plan + 50m write + 5m check), avoiding over-investing 90+ min on Essay 1.',
          marks: 2,
          keywords: ['65 minutes', 'balanced pacing'],
        },
      ],
      model_answer:
        'At HL, Paper 1 runs 2 hours 15 minutes for 40 marks (35% of the final grade) and requires writing TWO separate guided literary analyses on BOTH unseen passages from different literary forms (20 marks each). Allocate strictly ~65–67 minutes per passage (10m annotating/outlining, 50m writing, 5m checking) so Essay 2 receives equal analytical depth.',
    },
    sourceFileNames: ['IB Assessment Calendar 2026-2027.pdf'],
  },

  // =========================================================================
  // PAPER 2: COMPARATIVE ESSAY PROMPTS & SYNTHESIS CRAFT (19–28)
  // =========================================================================
  {
    topicCode: 'COMP.2',
    paperType: 'Paper 2 (Comparative Essay)',
    commandTerm: 'To what extent',
    difficulty: 'HL Extension',
    maxMarks: 30,
    questionMarkdown:
      '**Full Paper 2 Prompt:** *"To what extent do two works you have studied suggest that rigid devotion to honour or authority precipitates personal and communal tragedy?"*\n\nDraft a structured comparative argument comparing **Chinua Achebe’s *Things Fall Apart*** (referencing tracked citations from `Family.jpg` & `ReligionCulture.jpg`) with **Sophocles’ *Antigone*** (or another studied tragedy).',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A (Knowledge, Understanding & Interpretation — 10m): Weighs "to what extent" with nuance—evaluating internal masculine pride (Okonkwo’s fear of Unoka/weakness, Creon’s civic pride) alongside external pressures (colonial intrusion vs Antigone’s divine duty).',
          marks: 10,
          keywords: ['to what extent', 'nuanced synthesis', 'textual accuracy'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B (Analysis & Evaluation — 10m): Continuously compares authorial craft point-by-point (Achebe’s third-person focalization, "like an empire" p. 20, Ani/chi vs Sophocles’ stichomythia, choral commentary, and divine/civic conflict).',
          marks: 10,
          keywords: ['point-by-point comparison', 'authorial craft', 'divergences'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C (Focus & Organization — 5m): Sustains comparative topic sentences inside every body paragraph (no AABB block split) focused strictly on the prompt.',
          marks: 5,
          keywords: ['ABAB synthesis', 'conceptual topic sentences'],
        },
        {
          code: 'D1',
          criterion:
            'Criterion D (Language — 5m): Deploys authoritative comparative connectors ("Conversely," "While Achebe..."), fluent register, and concise embedded evidence.',
          marks: 5,
          keywords: ['comparative register', 'precision'],
        },
      ],
      model_answer:
        'Both Achebe and Sophocles portray inflexible masculine honour as a catalyst that fractures sacred communal equilibrium before catastrophic collapse—yet Achebe complicates pure tragic *hamartia* by exposing external imperial coercion alongside internal pride. Inside Okonkwo’s household, third-person focalization traces domestic brutality—treating wives "like an empire" (`Family.jpg` p. 20) and coercing Nwoye (p. 33)—to terror of Unoka’s debt (pp. 4, 18), culminating when Okonkwo defies Earth goddess Ani during the Week of Peace (`ReligionCulture.jpg` p. 30). Conversely, Sophocles externalizes authoritarian insecurity inside public stichomythia, staging Creon’s refusal to yield to Antigone’s "unwritten and unfailing statutes" as civic *hubris*. Crucially, however, whereas Creon’s tragedy closes within indigenous Theban mourning, Okonkwo’s unbending code collides fatally with British colonial administration—proving rigid honour precipitates catastrophe only when amplified by irreconcilable historical rupture.',
    },
    sourceFileNames: ['Family.jpg', 'ReligionCulture.jpg'],
  },
  {
    topicCode: 'AoE3.1',
    paperType: 'Paper 2 (Comparative Essay)',
    commandTerm: 'Discuss',
    difficulty: 'HL Extension',
    maxMarks: 30,
    questionMarkdown:
      '**Full Paper 2 Prompt:** *"Writers frequently use domestic spaces—homes, rooms, or family compounds—to expose larger political or social hierarchies. Discuss how two works you have studied deploy spatial setting to reveal power dynamics."*',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A (10m): Grounded comparison across two works (e.g., *Things Fall Apart*’s compound/*obi* vs *The Metamorphosis*’s bedroom or *A Doll’s House*’s parlor), linking architecture directly to socio-political power.',
          marks: 10,
          keywords: ['domestic space', 'hierarchy', 'macro-political link'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B (10m): Evaluates spatial and structural techniques (Okonkwo’s central *obi* p. 56, "empire" compound simile p. 20, vs Kafka’s "proper human room although a little too small" / Ibsen’s locked letterbox & slammed exit door).',
          marks: 10,
          keywords: ['spatial symbolism', 'props', 'focalization'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C (5m): Point-by-point thematic integration across paragraphs.',
          marks: 5,
          keywords: ['organization', 'prompt focus'],
        },
        {
          code: 'D1',
          criterion:
            'Criterion D (5m): Analytical clarity, comparative precision, and formal diction.',
          marks: 5,
          keywords: ['register', 'comparative verbs'],
        },
      ],
      model_answer:
        'Domestic architecture in *Things Fall Apart* and *The Metamorphosis* functions not as inert backdrop, but as an ideological cage indexing patriarchal and economic hierarchy. Achebe maps gender and status onto physical ground: Okonkwo’s elevated *obi* (`ReligionCulture.jpg` p. 56) anchors patrilineal dominance over wives’ huts arranged "like an empire" (`Family.jpg` p. 20), mirrored even in agricultural borders separating sisal-ringed yams from "women’s crops" (`Food.jpg` p. 23). Conversely, Kafka’s bourgeois apartment shrinks spatial authority into economic utility: Gregor’s "proper human room although a little too small" initially conceals exhaustion behind locked doors before mutating into a locked prison once his body ceases generating wages. Where Achebe contrasts private domestic coercion against public *egwugwu* justice, Kafka collapses the boundary between home and commercial debt—showing how domestic spaces reproduce systemic oppression.',
    },
    sourceFileNames: ['Family.jpg', 'Food.jpg', 'ReligionCulture.jpg'],
  },
  {
    topicCode: 'AoE3.1',
    paperType: 'Paper 2 (Comparative Essay)',
    commandTerm: 'Compare and contrast',
    difficulty: 'HL Extension',
    maxMarks: 30,
    questionMarkdown:
      '**Full Paper 2 Prompt:** *"How and with what effect do two authors you have studied give voice to marginalized or silenced characters within patriarchal or oppressive societies?"*',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A (10m): Compares both how silence operates structurally and where muted figures (e.g., Ikemefuna, Ekwefi, Nwoye in *TFA*; Nora in *A Doll’s House*; or Antigone) reclaim speech or disrupt authority.',
          marks: 10,
          keywords: ['marginalization', 'silenced voice', 'agency'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B (10m): Evaluates authorial methods ("how"): Achebe’s brief focalized interiority for Ikemefuna (`Family.jpg` p. 27) and Ekwefi’s folk-story defiance vs Ibsen’s shift from Torvald’s diminutive pet names to Nora’s rational monologues.',
          marks: 10,
          keywords: ['focalization', 'dialogue shift', 'folk tales'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C (5m): Sustained ABAB point-by-point architecture.',
          marks: 5,
          keywords: ['comparative thesis', 'balance'],
        },
        {
          code: 'D1',
          criterion:
            'Criterion D (5m): Precise literary register.',
          marks: 5,
          keywords: ['register', 'terminology'],
        },
      ],
      model_answer:
        'Both Achebe and Ibsen expose patriarchal silencing by contrasting fragile private interiority against performative male dominance, though they diverge sharply in whether marginalized figures achieve outward liberation. Achebe refuses sentimental speeches for victims; instead, brief third-person focalization—revealing that Ikemefuna quietly thought of "his mother and three-year-old sister" (`Family.jpg` p. 27)—or tracking Ekwefi’s nocturnal pursuit of Chielo forces readers to register the unseen emotional toll beneath Okonkwo’s coercive household (`Family.jpg` pp. 29, 38). Conversely, Ibsen engineers a radical theatrical inversion across three acts: initially constrained inside Torvald’s infantilizing diminutives, Nora claims epistemic authority in Act 3 ("I must think over things for myself"), converting silence into overt departure—whereas Nwoye’s dissent in Achebe requires abandoning his father’s cosmology altogether.',
    },
    sourceFileNames: ['Family.jpg'],
  },
  {
    topicCode: 'AoE3.1',
    paperType: 'Paper 2 (Comparative Essay)',
    commandTerm: 'Evaluate',
    difficulty: 'HL Extension',
    maxMarks: 30,
    questionMarkdown:
      '**Full Paper 2 Prompt:** *"Endings often confirm or violently disrupt the moral expectations built throughout a text. Evaluate how two works you have studied use their conclusions to challenge readers’ assumptions."*',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A (10m): Compares structural impact of two endings—e.g., Achebe’s jarring focalization shift to the District Commissioner’s book vs Ibsen’s slammed door or Sophocles’ choral mourning.',
          marks: 10,
          keywords: ['anti-catharsis', 'closure vs rupture', 'reader challenge'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B (10m): Evaluates specific formal shifts (focalization handover, ironic chapter title *The Pacification of the Primitive Tribes of the Lower Niger*, theatrical sound cue offstage door slamming).',
          marks: 10,
          keywords: ['focalization shift', 'stagecraft', 'irony'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C (5m): Cohesive comparison integrating form and effect.',
          marks: 5,
          keywords: ['coherence', 'synthesis'],
        },
        {
          code: 'D1',
          criterion:
            'Criterion D (5m): Nuanced academic prose.',
          marks: 5,
          keywords: ['register', 'evaluative verbs'],
        },
      ],
      model_answer:
        'Rather than offering comforting moral resolution, both Achebe and Ibsen weaponize their final moments to implicate the audience in ongoing historical and social injustice. After twenty-four chapters inside Umuofia’s proverbial idioms (`Food.jpg` pp. 19, 27) and cosmology (`ReligionCulture.jpg` pp. 30, 36), Achebe wrenches focalization away to the British District Commissioner, whose cold imperial gaze shrinks Okonkwo’s entire life to "a reasonable paragraph" in *The Pacification of the Primitive Tribes of the Lower Niger*—shattering Aristotelian catharsis into political outrage. Similarly, Ibsen refuses sentimental reconciliation: replacing melodramatic death with an unanswered conversation and the stark offstage sound of a slammed door, *A Doll’s House* forces middle-class spectators to carry the unfinished ethical debate back into their own homes.',
    },
    sourceFileNames: ['Food.jpg', 'ReligionCulture.jpg'],
  },
  {
    topicCode: 'AoE1.2',
    paperType: 'Paper 2 (Comparative Essay)',
    commandTerm: 'Examine',
    difficulty: 'Standard IB',
    maxMarks: 10,
    questionMarkdown:
      'Examine how **reader complicity and ambiguity (`AoE1.2`)** differ when an author employs **first-person unreliable narration** versus **dramatic soliloquy or third-person limited focalization**.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A: Distinguishes reader skepticism toward an unmediated "I" narrator (e.g., *The Yellow Wallpaper*) from empathetic-yet-critical distance in third-person focalization (*Things Fall Apart*, *The Metamorphosis*) or soliloquy (*Macbeth*).',
          marks: 4,
          keywords: ['reader complicity', 'narrative distance', 'ambiguity'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B: Analyzes concrete stylistic mechanisms (self-contradictory syntax, dramatic irony, free indirect discourse, audience aside).',
          marks: 4,
          keywords: ['FID', 'unreliable narration', 'soliloquy'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C & D: Concise comparative framing.',
          marks: 2,
          keywords: ['clarity', 'terminology'],
        },
      ],
      model_answer:
        'Narrative form governs the ethical distance between reader and character. First-person unreliable narration traps readers inside a single distorted register, forcing them to read against the speaker’s self-justification—as when Gilman’s narrator claims she could leave "if I had to live in this room long." Conversely, third-person limited focalization in Achebe or Kafka blurs sympathy and critique: free indirect idioms draw readers inside Okonkwo’s fear of Unoka (`Family.jpg` pp. 4, 18) while preserving an external narrative horizon that judges his domestic violence (`Family.jpg` pp. 29, 38). Dramatic soliloquies like Macbeth’s bypass external narration altogether, forcing spectators into uncomfortable intimacy with moral decay.',
    },
    sourceFileNames: ['Family.jpg'],
  },
  {
    topicCode: 'COMP.2',
    paperType: 'Paper 2 (Comparative Essay)',
    commandTerm: 'Compare and contrast',
    difficulty: 'Standard IB',
    maxMarks: 8,
    questionMarkdown:
      'Explain why writing two separate "block essays" (**AABB**) about Work A and Work B fails top bands on **Paper 2**, and demonstrate the proper **point-by-point (ABAB) comparative pivot** structure.',
    markscheme: {
      marking_points: [
        {
          code: 'B1',
          criterion:
            'Identifies why AABB block structure caps Criterion B & C in middle bands (isolates texts, forces generic conclusion-only comparison, misses how authors diverge in technique).',
          marks: 3,
          keywords: ['AABB failure', 'Criterion B', 'isolation'],
        },
        {
          code: 'C1',
          criterion:
            'Demonstrates ABAB body paragraph formula: Conceptual topic sentence → Work A evidence + technique → explicit comparative pivot (*"Conversely / Whereas..."*) → Work B evidence + technique → evaluative synthesis.',
          marks: 3,
          keywords: ['ABAB pivot', 'conceptual topic sentence'],
        },
        {
          code: 'D1',
          criterion:
            'Provides clear comparative connective language modeling evaluative contrast.',
          marks: 2,
          keywords: ['comparative transitions'],
        },
      ],
      model_answer:
        'Split-block (AABB) essays stall in Bands 4–5 because analyzing Work A for pages before mentioning Work B treats comparison as an afterthought rather than the essay’s structural engine. Top-band Paper 2 essays organize every paragraph around a shared formal device or thematic tension (ABAB): begin with a conceptual topic sentence covering both authors, unpack Work A’s technique and reader effect, pivot immediately ("Whereas Achebe anchors tragedy in oral proverb... Sophocles deploys civic stichomythia..."), and close by evaluating why that formal divergence reshapes the prompt’s stakes.',
    },
    sourceFileNames: ['IB Assessment Calendar 2026-2027.pdf'],
  },
  {
    topicCode: 'COMP.2',
    paperType: 'Paper 2 (Comparative Essay)',
    commandTerm: 'Evaluate',
    difficulty: 'Foundation',
    maxMarks: 6,
    questionMarkdown:
      'Explain how to interrogate qualifying Paper 2 command terms such as **"To what extent"** or **"In what ways and with what effect"** inside an essay introduction so your thesis avoids simplistic yes/no agreement.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Shows how "To what extent" requires establishing a nuanced spectrum (identifying BOTH where the prompt holds true AND the complicating limits or counter-forces in both works).',
          marks: 3,
          keywords: ['qualifying thesis', 'nuance', 'counter-argument'],
        },
        {
          code: 'C1',
          criterion:
            'Demonstrates unpacking "how and with what effect" explicitly into (1) formal authorial techniques and (2) emotional/intellectual impact on readers/audiences.',
          marks: 3,
          keywords: ['mechanism', 'reader effect'],
        },
      ],
      model_answer:
        'Prompts framed around "To what extent" invite dialectical qualification rather than flat agreement: state clearly the primary condition under which both works confirm the claim, then introduce a meaningful caveat (*"yet whereas Author A attributes collapse primarily to..., Author B qualifies that agency through..."*). Likewise, "How and with what effect" demands naming specific formal devices (*how*) and tracking the concrete shift in audience sympathy, irony, or ethical judgment (*effect*) across each body paragraph.',
    },
    sourceFileNames: ['IB Assessment Calendar 2026-2027.pdf'],
  },
  {
    topicCode: 'AoE3.1',
    paperType: 'Paper 2 (Comparative Essay)',
    commandTerm: 'Discuss',
    difficulty: 'Standard IB',
    maxMarks: 10,
    questionMarkdown:
      'Discuss how Chinua Achebe executes **canonical counter-discourse ("writing back")** against Joseph Conrad’s *Heart of Darkness* and W.B. Yeats’s *"The Second Coming"* in *Things Fall Apart*.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A (4m): Explains Achebe’s anticolonial project—restoring voice, moral complexity, and civic ritual (`Food.jpg` p. 19; `ReligionCulture.jpg` p. 36) to African communities silenced in Conrad.',
          marks: 4,
          keywords: ['counter-discourse', 'colonial silencing', 'Igbo voice'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B (4m): Analyzes Achebe’s formal methods: unitalicized Igbo lexis (*chi, Ani, obi*), oral proverbs (`Food.jpg` p. 27), reframing Yeats’s "centre cannot hold", and satirical closure via the District Commissioner’s book.',
          marks: 4,
          keywords: ['vernacular lexis', 'Yeats epigraph', 'satirical closure'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C & D (2m): Cohesive intertextual synthesis.',
          marks: 2,
          keywords: ['intertextual focus'],
        },
      ],
      model_answer:
        'Rather than imitating colonial ethnography or romanticizing Umuofia as flawless, Achebe answers Conrad and Yeats directly through linguistic and structural counter-discourse. Where *Heart of Darkness* reduces African people to mute background scenery while focusing on European moral decay, Achebe saturates Part 1 with Igbo oral proverbs (`Food.jpg` p. 27), kola-nut jurisprudence (p. 19), and theological balance (*chi* p. 14, *Ani* p. 30). Appropriating Yeats’s "Things fall apart; the centre cannot hold," Achebe proves Umuofia possessed a coherent moral center prior to imperial arrival—then indicts colonial arrogance on the final page when the District Commissioner reduces Okonkwo’s tragedy to an ethnographic footnote.',
    },
    sourceFileNames: ['Food.jpg', 'ReligionCulture.jpg'],
  },
  {
    topicCode: 'AoE2.2',
    paperType: 'Paper 2 (Comparative Essay)',
    commandTerm: 'Evaluate',
    difficulty: 'Standard IB',
    maxMarks: 10,
    questionMarkdown:
      'Explain how to compare a **work originally written in English** and a **work studied in translation** on Paper 2 (e.g., *Macbeth* and *Antigone* or *A Doll’s House*) **without** committing phonetic close-reading errors on translated prose.',
    markscheme: {
      marking_points: [
        {
          code: 'B1',
          criterion:
            'Criterion B (4m): Identifies translation-vulnerable claims to avoid (accidental English alliteration, rhyme, or punning) and highlights durable transferable features (syntax, stichomythia, stage directions, props, structural irony, focalization).',
          marks: 4,
          keywords: ['transferable features', 'avoid accidental phonics'],
        },
        {
          code: 'A1',
          criterion:
            'Criterion A (4m): Grounds cross-cultural comparison in culturally embedded concepts (*nomos* vs *themis*; Torvald’s diminutive pet names) alongside English blank-verse craft.',
          marks: 4,
          keywords: ['cultural lexis', 'comparative equity'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C & D (2m): Clear comparative methodology.',
          marks: 2,
          keywords: ['methodology'],
        },
      ],
      model_answer:
        'When pairing an English text with a work in translation, anchor Criterion B on structural and dramatic devices that survive linguistic mediation intact rather than English sound play. While you can analyze Shakespeare’s blank-verse interruptions or sibilance directly in *Macbeth*, evaluate Sophocles or Ibsen through **syntactic echoing, stichomythia, stage directions, props, structural irony, and untranslatable cultural concepts** (*nomos* vs *themis* in *Antigone*; infantilizing diminutives in *A Doll’s House*). Mentioning translatorial framing explicitly where relevant signals mature AoE2.2 literary awareness.',
    },
    sourceFileNames: ['ReligionCulture.jpg'],
  },
  {
    topicCode: 'COMP.2',
    paperType: 'Paper 2 (Comparative Essay)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 4,
    questionMarkdown:
      'State the mandatory **text-exclusion rule** connecting Paper 2, the Individual Oral, and the HL Essay, and illustrate a compliant text-allocation plan across 4 studied works.',
    markscheme: {
      marking_points: [
        {
          code: 'M1',
          criterion:
            'States unambiguously that NO single studied work may be reused across the Individual Oral (2 works), HL Essay (1 work), and Paper 2 (2 works) — requiring at least 5 distinct works across assessments.',
          marks: 2,
          keywords: ['zero reuse', '5 distinct works'],
        },
        {
          code: 'M2',
          criterion:
            'Illustrates compliant allocation (e.g., IO: *Things Fall Apart* [English] + *Antigone* [Translation]; HL Essay: *Macbeth* [or *Frankenstein*]; Paper 2: *A Doll’s House* + *The Metamorphosis* [or two other fresh works]).',
          marks: 2,
          keywords: ['IO pairing', 'HLE isolation', 'Paper 2 fresh pair'],
        },
      ],
      model_answer:
        'IB English A: Literature HL strictly prohibits reusing any studied literary work across the Individual Oral, HL Essay, and Paper 2. A compliant 5-work plan allocates: (1–2) IO: *Things Fall Apart* (English original) + *Antigone* (Translation); (3) HL Essay: *Macbeth*; and (4–5) Paper 2: two distinct studied works never touched in the IO or HL Essay (e.g., *A Doll’s House* + *The Metamorphosis*).',
    },
    sourceFileNames: ['IB Assessment Calendar 2026-2027.pdf'],
  },

  // =========================================================================
  // INDIVIDUAL ORAL (IO) & THINGS FALL APART / TRANSLATION PROMPTS (29–38)
  // =========================================================================
  {
    topicCode: 'AoE2.1',
    paperType: 'Individual Oral (IO)',
    commandTerm: 'Examine',
    difficulty: 'Standard IB',
    maxMarks: 10,
    stimulusMarkdown:
      'From *Things Fall Apart* (**Family.jpg p. 20 & p. 29**): Okonkwo presides over a compound *"like an empire with multiple wives"* and resorts to domestic violence (*"showing the power dynamic trying to feel powerful"*).',
    questionMarkdown:
      'Using specific close-reading evidence from **`Family.jpg`** (pp. 4, 18, 20, 29, 33, 38), examine how Achebe links masculine insecurity to domestic authoritarianism under the Global Issue **Culture, identity and community / Politics, power and justice**.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A (4m): Grounds claim in tracked moments: Unoka’s debt/zero inheritance (pp. 4, 18), "like an empire" compound simile (p. 20), coercion of Nwoye (p. 33), and Ekwefi/Ojiugo beatings (pp. 29, 38).',
          marks: 4,
          keywords: ['Unoka', 'like an empire', 'Nwoye', 'Ekwefi/Ojiugo'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B (4m): Unpacks imperial simile ("like an empire") and third-person focalization exposing violence as fearful overcompensation rather than moral authority.',
          marks: 4,
          keywords: ['imperial simile', 'focalization', 'compensation'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C & D (2m): Frames Global Issue thesis balancing micro-evidence with Part 1 trajectory.',
          marks: 2,
          keywords: ['Global Issue', 'balance'],
        },
      ],
      model_answer:
        'Achebe’s political simile describing Okonkwo’s household "like an empire" (p. 20) fuses domestic patriarchy with imperial domination. Hauntingly driven by Unoka’s debt and lack of inheritance (pp. 4, 18), Okonkwo treats Nwoye (p. 33) and his wives Ekwefi and Ojiugo (pp. 29, 38) as subjects whose fear validates his manhood—exposing how fragile personal insecurity weaponizes traditional authority in everyday compound life.',
    },
    sourceFileNames: ['Family.jpg', 'ReligionCulture.jpg'],
  },
  {
    topicCode: 'AoE2.2',
    paperType: 'Individual Oral (IO)',
    commandTerm: 'Discuss',
    difficulty: 'HL Extension',
    maxMarks: 10,
    questionMarkdown:
      'Discuss how **personal *chi* (`ReligionCulture.jpg` p. 14)** and **the Earth goddess Ani (`ReligionCulture.jpg` p. 30)** expose the tragedy of Okonkwo’s Week of Peace beating before colonialism even reaches Umuofia.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A (4m): Integrates Igbo theological terms (*chi* p. 14, Ani p. 30, New Yam Feast/*egwugwu* p. 36, Oracle p. 57) accurately into literary interpretation.',
          marks: 4,
          keywords: ['chi', 'Ani', 'Week of Peace', 'Oracle'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B (4m): Demonstrates that Okonkwo’s violence violates indigenous spiritual/ecological law—proving tragedy germinates inside the tension between individual rigidity ("showing weakness is bad", p. 61) and communal balance.',
          marks: 4,
          keywords: ['internal tragedy', 'untranslated lexis', 'spiritual balance'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C & D (2m): Maintains coherent Global Issue framing rather than plot summary.',
          marks: 2,
          keywords: ['Global Issue focus'],
        },
      ],
      model_answer:
        'Long before European missionaries arrive, Igbo cosmology balances ambitious personal effort (*chi*, p. 14) with collective reverence for Ani, Earth goddess of fertility and peace (p. 30). Through untranslated vernacular lexis and the judicial authority of the Oracle (p. 57) and *egwugwu* (p. 36), Achebe shows Umuofia possesses sophisticated internal checks on male aggression (`ReligionCulture.jpg` pp. 13, 61). When Okonkwo beats Ojiugo during the Week of Peace, Ezeani reprimands him for imperiling the entire clan’s harvest—revealing that Okonkwo’s uncompromising hyper-masculinity threatens indigenous moral order from within.',
    },
    sourceFileNames: ['ReligionCulture.jpg', 'Family.jpg'],
  },
  {
    topicCode: 'AoE2.1',
    paperType: 'Individual Oral (IO)',
    commandTerm: 'Examine',
    difficulty: 'Standard IB',
    maxMarks: 10,
    stimulusMarkdown:
      'In **`ReligionCulture.jpg`**, 9-village wrestling and drums/flutes (pp. 3, 42) coexist with locust omens (p. 55) and the **Feast of the New Yam** (p. 36), while **`Food.jpg`** tracks locusts roasted in clay pots (p. 56) and domestic yam pottage (pp. 42–43).',
    questionMarkdown:
      'Examine how Achebe uses **communal feasts, music, and locust imagery** (`Food.jpg` pp. 42–43, 56; `ReligionCulture.jpg` pp. 3, 36, 42, 55) to create tragic irony ahead of colonial arrival.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A (4m): Connects sensory communal joy (9-village drums/flutes pp. 3, 42; New Yam Feast p. 36; locust feast p. 56) to Umuofia’s pre-colonial cohesion.',
          marks: 4,
          keywords: ['wrestling', 'drums', 'New Yam', 'locusts'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B (4m): Analyzes symbolic foreshadowing/irony of locusts ("good sign" p. 55 roasted joyfully in clay pots p. 56 later inverted by Obierika’s metaphor for arriving white colonists) and sensory domestic continuity (pp. 42–43).',
          marks: 4,
          keywords: ['foreshadowing', 'structural irony', 'motif inversion'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C & D (2m): Cohesive thematic link to Global Issue of cultural disruption.',
          marks: 2,
          keywords: ['thematic synthesis'],
        },
      ],
      model_answer:
        'Achebe saturates Part 1 with multisensory rituals—ceremonial wrestling drums and flutes uniting nine villages (`ReligionCulture.jpg` pp. 3, 42), ancestral *egwugwu* during the Feast of the New Yam (p. 36), and intimate kitchen scenes of yam pottage (`Food.jpg` pp. 42–43)—to establish Umuofia as a vibrant living civilization. The locust motif crystallizes Achebe’s structural irony: hailed as a "good sign" (`ReligionCulture.jpg` p. 55) and happily roasted in clay pots (`Food.jpg` p. 56), locusts reappear in Part 2 through Obierika’s chilling simile for white colonizers—transforming an emblem of cyclical indigenous abundance into an omen of irreversible devastation.',
    },
    sourceFileNames: ['Food.jpg', 'ReligionCulture.jpg'],
  },
  {
    topicCode: 'AoE2.1',
    paperType: 'Individual Oral (IO)',
    commandTerm: 'Analyse',
    difficulty: 'Standard IB',
    maxMarks: 8,
    questionMarkdown:
      'Analyse how Achebe pairs **Ikemefuna’s quiet longing (`Family.jpg` pp. 8, 27)** with **Okonkwo’s coercion of Nwoye (`Family.jpg` p. 33)** to expose the intergenerational human cost of patriarchal rigidity.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A (3m): Contrasts Ikemefuna’s role as peace-settlement ward (p. 8) and private homesickness (p. 27) with Okonkwo’s bullying expectations on Nwoye (p. 33).',
          marks: 3,
          keywords: ['Ikemefuna', 'Nwoye', 'intergenerational cost'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B (3m): Analyzes third-person focalization into child interiority (p. 27) and foil structure showing Okonkwo loves Ikemefuna’s compliance yet destroys both boys emotionally through his fear of softness.',
          marks: 3,
          keywords: ['character foil', 'focalization', 'pathos'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C & D (2m): Links domestic scenes to Nwoye’s eventual religious conversion.',
          marks: 2,
          keywords: ['whole-work arc'],
        },
      ],
      model_answer:
        'By juxtaposing Ikemefuna’s silent homesickness with Nwoye’s intimidated obedience, Achebe reveals how patriarchal diplomacy and domestic intimidation scar the young long before British arrival. Entering as human tribute on p. 8, Ikemefuna briefly appears through tender third-person focalization yearning for "his mother and three-year-old sister" (`Family.jpg` p. 27)—injecting pathos beneath clan pride. Because Okonkwo demands that Nwoye become a "great man" through masculine stories and beatings (p. 33) rather than maternal empathy, his eventual participation in Ikemefuna’s murder snaps Nwoye’s loyalty permanently, driving his later defection to Christian hymns.',
    },
    sourceFileNames: ['Family.jpg'],
  },
  {
    topicCode: 'COMP.4',
    paperType: 'Individual Oral (IO)',
    commandTerm: 'Identify',
    difficulty: 'Foundation',
    maxMarks: 4,
    questionMarkdown:
      'State the mandatory **Literature HL text-pairing rule** for the Individual Oral (IO)—explicitly contrasting it with Language & Literature—and give the exact CRHS 2026–2027 dates for Mock and Final IOs.',
    markscheme: {
      marking_points: [
        {
          code: 'M1',
          criterion:
            'States Literature HL IO MUST examine one shared Global Issue across 1 literary work originally written in English (e.g., *Things Fall Apart*) AND 1 literary work studied in translation—NEVER non-literary bodies of work (Lang & Lit only).',
          marks: 2,
          keywords: ['1 English', '1 translation', 'no non-literary texts'],
        },
        {
          code: 'M2',
          criterion:
            'Cites CRHS Calendar exactly: Grade 11 Mock Individual Orals run throughout April 2027; Final Recorded Individual Orals run throughout May 2027.',
          marks: 2,
          keywords: ['April 2027', 'May 2027'],
        },
      ],
      model_answer:
        'IB English A: Literature HL Individual Orals MUST pair 1 literary work originally written in English (such as *Things Fall Apart*) with 1 literary work studied in translation around one Global Issue—non-literary bodies of work are strictly prohibited (Lang & Lit only). Per the CRHS 2026–2027 Assessment Calendar, Grade 11 Mock IOs take place throughout April 2027 and Final Recorded IOs throughout May 2027.',
    },
    sourceFileNames: ['IB Assessment Calendar 2026-2027.pdf'],
  },
  {
    topicCode: 'COMP.4',
    paperType: 'Individual Oral (IO)',
    commandTerm: 'Outline',
    difficulty: 'Foundation',
    maxMarks: 6,
    questionMarkdown:
      'Outline the exact **15-minute Individual Oral timing architecture** (10-minute prepared talk + 5-minute Q&A) showing how to maintain the mandatory **50/50 extract vs whole-work balance**.',
    markscheme: {
      marking_points: [
        {
          code: 'C1',
          criterion:
            'Breaks down 10-minute uninterrupted talk: ~1 min Introduction (Global Issue + both works + thesis), ~4 min Work A (~2 min ≤40-line extract + ~2 min whole work), ~4 min Work B (~2 min ≤40-line extract + ~2 min whole work), ~1 min Comparative Synthesis.',
          marks: 4,
          keywords: ['1m intro', '2m extract + 2m whole', '1m conclusion'],
        },
        {
          code: 'D1',
          criterion:
            'Explains the 5-minute teacher follow-up discussion (defending whole-work connections, exploring omitted nuances, never reciting from a memorized script) and notes 40-mark (20% HL) equal A–D weighting.',
          marks: 2,
          keywords: ['5m Q&A', '10-bullet outline', '40 marks'],
        },
      ],
      model_answer:
        'Out of 15 total minutes (40 marks = 20% HL), budget your 10-minute talk from a 10-bullet outline as: ~1 min Global Issue framing & dual-work thesis; ~4 min English-original work (2m close reading of your ≤40-line extract + 2m whole-work significance); ~4 min translated work (2m close reading + 2m whole work); and ~1 min synthesis. The closing 5-minute teacher Q&A probes whole-work evidence and nuance beyond your prepared talk.',
    },
    sourceFileNames: ['IB Assessment Calendar 2026-2027.pdf'],
  },
  {
    topicCode: 'AoE3.2',
    paperType: 'Individual Oral (IO)',
    commandTerm: 'Evaluate',
    difficulty: 'Standard IB',
    maxMarks: 8,
    questionMarkdown:
      'Evaluate a weak Global Issue (*"Gender roles in Things Fall Apart and A Doll’s House"*) against the **3 mandatory IB Global Issue validity tests**, and revise it into a Band 7 formulation tied to one official Field of Inquiry.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Diagnoses why "Gender roles" fails: too vague/broad, invites plot generalization, omits everyday local mechanism and specific authorial tension.',
          marks: 2,
          keywords: ['too broad', 'no specificity'],
        },
        {
          code: 'C1',
          criterion:
            'Tests revised issue explicitly against all 3 IB criteria: (1) Significant on a wide scale, (2) Transnational, (3) Impact felt in everyday local contexts.',
          marks: 3,
          keywords: ['wide scale', 'transnational', 'everyday local impact'],
        },
        {
          code: 'D1',
          criterion:
            'Formulates sharp Band 7 Global Issue anchored in one of the 5 Fields of Inquiry (*Culture, identity and community* or *Politics, power and justice*).',
          marks: 3,
          keywords: ['Field of Inquiry', 'focused issue'],
        },
      ],
      model_answer:
        '"Gender roles" fails Criterion A and C because it is a broad thematic category rather than an arguable socio-cultural tension. A Band 7 Global Issue under *Culture, identity and community* sharpens focus: *"How patriarchal anxiety over economic and social status weaponizes domestic spaces and daily rituals to silence emotional vulnerability."* This passes all three IB tests: it operates across wide cultural systems, bridges Igbo Nigeria and 19th-century Norway transnationally, and manifests inside concrete everyday realities—like sisal-ringed yams vs "women’s crops" (`Food.jpg` p. 23) or Torvald’s locked parlor.',
    },
    sourceFileNames: ['Family.jpg', 'Food.jpg'],
  },
  {
    topicCode: 'COMP.4',
    paperType: 'Individual Oral (IO)',
    commandTerm: 'Justify',
    difficulty: 'Foundation',
    maxMarks: 6,
    questionMarkdown:
      'Explain the **≤40-line continuous extract rule** for the Individual Oral and identify three technical criteria for choosing a high-scoring extract from *Things Fall Apart*.',
    markscheme: {
      marking_points: [
        {
          code: 'C1',
          criterion:
            'States the extract must be ONE continuous unbroken passage ≤40 lines (never stitched snippets from different chapters).',
          marks: 2,
          keywords: ['continuous passage', '≤40 lines'],
        },
        {
          code: 'B1',
          criterion:
            'Identifies three selection criteria: (1) high density of overt literary choices (similes, proverbs, focalization, Igbo lexis), (2) clear thematic pivot linking micro-detail to the Global Issue, and (3) rich links outward to the rest of the novel without duplicating scenes.',
          marks: 4,
          keywords: ['stylistic density', 'whole-work springboard'],
        },
      ],
      model_answer:
        'Each IO extract must be one continuous passage not exceeding 40 lines—never stitched excerpts across separate chapters. Select an extract with (1) rich stylistic density (such as Achebe’s imperial compound simile on p. 20 or Nwakibie’s kola diplomacy and proverb on pp. 19–27), (2) clear tension or turning point directly demonstrating your Global Issue, and (3) strong outward resonance so you can spend 2 full minutes tracing how that extract’s motif evolves across the whole novel.',
    },
    sourceFileNames: ['Family.jpg', 'Food.jpg'],
  },
  {
    topicCode: 'AoE2.2',
    paperType: 'Individual Oral (IO)',
    commandTerm: 'Examine',
    difficulty: 'HL Extension',
    maxMarks: 10,
    stimulusMarkdown:
      '> *"One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin... ‘What’s happened to me?’ he thought. It wasn’t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls."*\n>\n> — Franz Kafka, *The Metamorphosis* (1915, in translation)',
    questionMarkdown:
      'Examine how **lexical translation choices (*Ungeziefer*) and deadpan focalization** in *The Metamorphosis* could pair with *Things Fall Apart* in an Individual Oral exploring **Culture, identity and community**.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A (4m): Connects Gregor’s dehumanization under wage-earning family debt to Okonkwo’s terror of Unoka’s poverty/failure (`Family.jpg` pp. 4, 18) as masculine value tied to economic productivity.',
          marks: 4,
          keywords: ['economic masculinity', 'dehumanization', 'Unoka shame'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B (4m): Analyzes Kafka’s *Ungeziefer* ("unclean vermin unfit for sacrifice"), flat paratactic denial ("It wasn’t a dream"), and claustrophobic spatial irony ("proper human room although a little too small") alongside Achebe’s agrarian status coding.',
          marks: 4,
          keywords: ['Ungeziefer', 'deadpan parataxis', 'spatial irony'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C & D (2m): Confirms valid English original + Translated work pairing.',
          marks: 2,
          keywords: ['English + Translation'],
        },
      ],
      model_answer:
        'Pairing Chinua Achebe’s English-original *Things Fall Apart* with Franz Kafka’s translated *The Metamorphosis* satisfies the Literature HL IO pairing rule while exposing how economic utility defines masculine worth across cultures. Kafka’s German *Ungeziefer* ("unclean creature unfit for sacrifice") frames Gregor’s bodily mutation in moral and social exile before biology, while deadpan parataxis ("It wasn’t a dream") and spatial irony ("a proper human room although a little too small") register a wage-earner trapped by family debt. Similarly, Achebe’s third-person focalization links Okonkwo’s obsessive yam status (`Food.jpg` p. 23; `ReligionCulture.jpg` pp. 5, 23) to shame over Unoka’s unpaid debts (`Family.jpg` pp. 4, 18)—both texts revealing how conditional love collapses once male bodies fail economic norms.',
    },
    sourceFileNames: ['Family.jpg', 'Food.jpg'],
  },
  {
    topicCode: 'AoE2.2',
    paperType: 'Individual Oral (IO)',
    commandTerm: 'Compare and contrast',
    difficulty: 'HL Extension',
    maxMarks: 10,
    stimulusMarkdown:
      '> *"nor deemed I that thy decrees were of such force, that a mortal could override the unwritten and unfailing statutes of heaven. For their life is not of to-day or yesterday, but from all time..."*\n>\n> — Sophocles, *Antigone* (trans. R. C. Jebb, 1891)',
    questionMarkdown:
      'Compare how **Sophocles’ *Antigone* (translated work)** and **Achebe’s *Things Fall Apart* (English original)** dramatize the collision between codified state/patriarchal decrees and unwritten ancestral or sacred law (`ReligionCulture.jpg` pp. 30, 36, 57).',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Criterion A (4m): Connects Antigone’s appeal to Zeus/chthonic Justice to Igbo sacred reverence for Earth goddess Ani (Week of Peace, p. 30), ancestral *egwugwu* (p. 36), and the Oracle (p. 57).',
          marks: 4,
          keywords: ['unwritten divine law', 'Ani', 'Oracle', 'egwugwu'],
        },
        {
          code: 'B1',
          criterion:
            'Criterion B (4m): Analyzes Sophocles’ forensic paradox ("unwritten and unfailing statutes") and temporal merism ("not of to-day or yesterday") alongside Achebe’s untranslated Igbo lexis and ironic colonial court clash.',
          marks: 4,
          keywords: ['paradox', 'merism', 'vernacular lexis'],
        },
        {
          code: 'C1',
          criterion:
            'Criterion C & D (2m): Clear comparative IO framing under *Politics, power and justice*.',
          marks: 2,
          keywords: ['Politics power justice'],
        },
      ],
      model_answer:
        'Paired under the Global Issue of institutional authority overriding sacred communal custom (*Politics, power and justice*), Sophocles’ translated *Antigone* and Achebe’s English-original *Things Fall Apart* invert who defends unwritten piety. Antigone challenges King Creon’s edict through paradoxical forensic diction—"the unwritten and unfailing statutes of heaven"—elevating eternal oral obligation ("from all time") above "thy decrees" of "a mortal." Achebe similarly grounds Umuofia’s legitimacy in unwritten spiritual authorities—Earth goddess Ani (`ReligionCulture.jpg` p. 30), ancestral *egwugwu* (p. 36), and the Oracle (p. 57)—yet exposes a dual rupture: first when Okonkwo violates Ani’s Week of Peace out of masculine pride, and finally when British colonial courts criminalize Igbo custom.',
    },
    sourceFileNames: ['ReligionCulture.jpg'],
  },

  // =========================================================================
  // HL ESSAY & CONTEXT / THEORY PROMPTS (39–44)
  // =========================================================================
  {
    topicCode: 'COMP.3',
    paperType: 'HL Essay',
    commandTerm: 'Outline',
    difficulty: 'Foundation',
    maxMarks: 6,
    questionMarkdown:
      'Outline the exact **word limit, weighting, conceptual mandate, text-exclusion rule, and CRHS 2027–2028 deadlines** for the English A: Literature **HL Essay**.',
    markscheme: {
      marking_points: [
        {
          code: 'M1',
          criterion:
            'Length & Score: 1,200–1,500 words strictly; 20 marks (20% of HL Diploma grade), assessed equally across Criteria A–D (5 marks each).',
          marks: 2,
          keywords: ['1,200-1,500 words', '20 marks', '20%'],
        },
        {
          code: 'M2',
          criterion:
            'Rules: Must investigate 1 non-IO / non-Paper 2 literary work through an independent line of inquiry anchored in 1 of the 7 Central IB Concepts (*Identity, Culture, Creativity, Communication, Perspective, Transformation, Representation*).',
          marks: 2,
          keywords: ['7 IB Concepts', 'non-IO', 'non-Paper 2'],
        },
        {
          code: 'M3',
          criterion:
            'CRHS Calendar Dates: Proposal due Nov 19, 2027; Final HL Essay due Feb 17, 2028; IB Coordinator upload March 15, 2028.',
          marks: 2,
          keywords: ['Nov 19, 2027', 'Feb 17, 2028', 'March 15'],
        },
      ],
      model_answer:
        'The HL Essay is a 1,200–1,500-word formal literary essay (20 marks = 20% of HL grade, 5m per Criterion A–D) developing an independent line of inquiry anchored in one of the 7 Central IB Concepts (*Identity, Culture, Creativity, Communication, Perspective, Transformation, Representation*) on a single course text strictly excluded from both the IO and Paper 2. At CRHS, the HL Essay Proposal is due November 19, 2027, the Final Essay is due February 17, 2028, and Coordinator upload occurs by March 15, 2028.',
    },
    sourceFileNames: ['IB Assessment Calendar 2026-2027.pdf'],
  },
  {
    topicCode: 'COMP.3',
    paperType: 'HL Essay',
    commandTerm: 'Justify',
    difficulty: 'Standard IB',
    maxMarks: 8,
    questionMarkdown:
      'Transform the broad student proposal (*"How power is shown in Things Fall Apart"*) into a **Band 7 HL Essay Line of Inquiry** anchored in one of the **7 IB Concepts**, justifying why your formal parameters prevent plot summary.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Critiques the weak topic: broad noun ("power"), lacks conceptual IB anchor, invites chapter-by-chapter plot summary without stylistic mechanism.',
          marks: 2,
          keywords: ['broad topic flaw', 'summary risk'],
        },
        {
          code: 'C1',
          criterion:
            'Formulates a focused, arguable Line of Inquiry naming (1) one of the 7 IB Concepts (e.g., *Representation* or *Identity*), (2) concrete formal/stylistic techniques (e.g., proverbial English, domestic simile, third-person focalization), and (3) a clear literary claim.',
          marks: 4,
          keywords: ['Concept anchor', 'stylistic mechanism', 'debatable claim'],
        },
        {
          code: 'D1',
          criterion:
            'Justifies how bounding the inquiry by specific techniques naturally organizes 3–4 analytical body sections within 1,200–1,500 words.',
          marks: 2,
          keywords: ['1,200-1,500w scope'],
        },
      ],
      model_answer:
        '"How power is shown" invites unfocused plot retelling across 25 chapters. A Band 7 HL Essay Line of Inquiry anchored in **Representation** asks: *"How does Chinua Achebe deploy domestic-spatial similes, gendered agricultural coding, and untranslated Igbo cosmology in Things Fall Apart to represent pre-colonial masculinity as simultaneously dignified and fatally self-destructive?"* Bounding the question by three overt stylistic mechanisms forces every body section to analyze *how* Achebe writes—naturally filling 1,350–1,480 words with tight micro-quotations rather than narrative recap.',
    },
    sourceFileNames: ['Family.jpg', 'Food.jpg', 'ReligionCulture.jpg'],
  },
  {
    topicCode: 'COMP.3',
    paperType: 'HL Essay',
    commandTerm: 'Discuss',
    difficulty: 'HL Extension',
    maxMarks: 8,
    questionMarkdown:
      'Discuss how to structure a **1,200–1,500-word HL Essay** so that **Criterion A (Interpretation)** and **Criterion B (Evaluation of Form)** reinforce one another smoothly from introduction to conclusion.',
    markscheme: {
      marking_points: [
        {
          code: 'C1',
          criterion:
            'Outlines proportional word budget: Intro (~140w establishing Concept & Line of Inquiry) + 3–4 progressive analytical body sections (~300–350w each advancing a distinct formal facet) + Synthesis Conclusion (~130w).',
          marks: 3,
          keywords: ['proportional architecture', 'progressive thesis'],
        },
        {
          code: 'B1',
          criterion:
            'Explains linking every body section back to the chosen IB Concept while evaluating how technique shapes meaning—never relegating style to a single isolated paragraph.',
          marks: 3,
          keywords: ['integrated form', 'Criterion B'],
        },
        {
          code: 'D1',
          criterion:
            'Notes clean consistent academic citation (MLA/Chicago) and strict adherence to word bounds (1,200–1,500 words excluding bibliography).',
          marks: 2,
          keywords: ['citation consistency', 'word limit'],
        },
      ],
      model_answer:
        'A 1,200–1,500-word HL Essay succeeds by treating its three or four body sections as escalating analytical proofs of one conceptual Line of Inquiry rather than a list of disconnected themes. Allocate ~140 words to an introduction anchoring the chosen IB Concept and central stylistic tension; devote ~300–340 words per body section to a distinct formal mechanism (e.g., focalization → spatial symbolism → syntactic inversion), explicitly tying each technique back to the conceptual thesis; and close with ~130 words evaluating wider implications. Consistent scholarly citation and crisp micro-quoting sustain Criteria A–D cleanly.',
    },
    sourceFileNames: ['IB Assessment Calendar 2026-2027.pdf'],
  },
  {
    topicCode: 'AoE2.1',
    paperType: 'HL Essay',
    commandTerm: 'Examine',
    difficulty: 'Standard IB',
    maxMarks: 8,
    questionMarkdown:
      'Examine the difference between **"history-dumping"** and **historicized literary analysis (`AoE2.1`)**, using *Things Fall Apart* (`Food.jpg` p. 19; `ReligionCulture.jpg` p. 57) or *The Yellow Wallpaper* as an example.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Defines "history-dumping": reciting historical/biographical facts in isolation without proving how historical pressure shaped literary form or language.',
          marks: 3,
          keywords: ['history-dumping', 'Context of Production'],
        },
        {
          code: 'B1',
          criterion:
            'Demonstrates historicized literary analysis: routing 1958 late-colonial context directly into Achebe’s formal strategies (kola diplomacy p. 19, Oracle authority p. 57, unitalicized Igbo lexis countering colonial erasure).',
          marks: 3,
          keywords: ['context → formal choice', 'counter-ethnography'],
        },
        {
          code: 'C1',
          criterion:
            'Notes Context of Reception (why modern audiences reassess internal gender critique alongside anti-colonialism).',
          marks: 2,
          keywords: ['context of reception'],
        },
      ],
      model_answer:
        'History-dumping inserts textbook facts—such as summarizing British Indirect Rule or Victorian rest-cure medicine—as detached filler, which earns zero Criterion B analysis marks. Historicized literary analysis instead asks how historical context motivates **formal choices**: writing in 1958 Nigeria against racist colonial novels, Achebe embeds kola-nut hospitality (`Food.jpg` p. 19), proverbial diplomacy (p. 27), and unitalicized theological nouns (`ReligionCulture.jpg` pp. 14, 30, 57) directly into English syntax to reclaim moral authority, while modern readers also examine his unsparing critique of internal gender violence.',
    },
    sourceFileNames: ['Food.jpg', 'ReligionCulture.jpg'],
  },
  {
    topicCode: 'AoE1.2',
    paperType: 'HL Essay',
    commandTerm: 'Evaluate',
    difficulty: 'HL Extension',
    maxMarks: 8,
    questionMarkdown:
      'Evaluate how addressing **competing interpretations and textual ambiguity (`AoE1.2`)** strengthens a Literature HL Essay or Paper 1 conclusion rather than weakening the thesis.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Explains Wolfgang Iser’s concept of textual gaps (*Leerstellen*) / polysemous symbols—demonstrating that mature literary claims acknowledge ambiguity supported by textual evidence.',
          marks: 4,
          keywords: ['ambiguity', 'polysemy', 'textual gaps'],
        },
        {
          code: 'B1',
          criterion:
            'Models nuanced qualifying syntax (*"While X invites reading A, the ironic shift to Y simultaneously unsettles..."*) using a concrete literary example (e.g., Okonkwo’s suicide or Louise Mallard’s "joy that kills").',
          marks: 4,
          keywords: ['qualifying syntax', 'counter-reading'],
        },
      ],
      model_answer:
        'IB examiners distinguish Band 5 certainty from Band 7 sophistication by how an essay handles interpretive tension. Rather than flattening complex symbolism into a single slogan, acknowledging **textual gaps (*Leerstellen*)** demonstrates genuine command of literary ambiguity: e.g., recognizing that Louise Mallard’s fatal heart failure in Chopin’s "The Story of an Hour" invites *both* shock at reclaimed captivity and the tragic impossibility of female autonomy within 1894 society—or that Okonkwo’s suicide simultaneously refuses colonial humiliation and seals his alienation from Umuofia. Integrating a disciplined counter-reading strengthens Criterion A without sacrificing thesis clarity.',
    },
    sourceFileNames: ['Family.jpg'],
  },
  {
    topicCode: 'AoE2.2',
    paperType: 'HL Essay',
    commandTerm: 'Discuss',
    difficulty: 'HL Extension',
    maxMarks: 8,
    questionMarkdown:
      'Discuss how **Venuti’s concepts of domestication and foreignization (`AoE2.2`)** affect a Literature HL student writing an HL Essay or IO on a **work studied in translation**.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Defines **domestication** (smoothing foreign syntax/idioms into fluent target English, risking cultural erasure) vs **foreignization** (retaining lexical/syntactic difference, signaling cultural alterity).',
          marks: 4,
          keywords: ['domestication', 'foreignization', 'Venuti'],
        },
        {
          code: 'B1',
          criterion:
            'Illustrates with concrete examples (e.g., rendering Kafka’s *Ungeziefer* as "vermin" vs "cockroach"; Sophocles’ *nomos/themis*) and explains how recognizing translation mediation sharpens Criterion B commentary.',
          marks: 4,
          keywords: ['Ungeziefer', 'translatorial mediation', 'Criterion B'],
        },
      ],
      model_answer:
        'Recognizing Venuti’s spectrum between **domestication** and **foreignization** prevents HL candidates from treating translated works as transparent English originals. Domestication eases readability—such as translating Kafka’s ambiguous German *Ungeziefer* as "cockroach"—yet erases moral and ritual connotations ("unclean creature unfit for sacrifice"). Foreignizing translations preserve cultural friction, demanding readers engage unfamiliar legal, familial, or religious concepts (*themis* in Sophocles, *panzerartig* in Kafka). In an HL Essay or IO, noting briefly how a translator’s lexical choice shapes tone deepens Criterion B rigor while avoiding bogus claims about English sound patterns.',
    },
    sourceFileNames: ['ReligionCulture.jpg'],
  },
];
