import type { SubjectClassroomSeed } from './types';

export const ENGLISH_LIT_HL_SEED: SubjectClassroomSeed = {
  slug: 'english-lit-hl',
  materials: [
    {
      fileName: 'IB Assessment Calendar 2026-2027.pdf',
      fileType: 'pdf',
      topicCode: 'COMP',
      externalUrl: 'https://drive.google.com/file/d/1i1D9DD_KA9riE9c3ZbjbwSW-ttisnp1R/view?usp=drivesdk',
      extractedText: [
        'CRHS IB Assessment Calendar 2026–2027 — English A Literature HL & Whole-Diploma Pacing Rules:',
        '- Non-negotiable school internal deadlines protect external IB moderation uploads (extensions disallowed unless class-wide adjustment).',
        '- English HL Milestones 2026–2027: Grade 11 English Mock Individual Orals (Throughout April 2027); Grade 11 English IA Individual Orals — IO recorded assessments (Throughout May 2027). Grade 12 reference milestones: English HL Essay Proposal due Nov 19; HL Essay Final due Feb 17; Coordinate upload to IB March 15.',
        '- Cohort 2028 Cross-Subject Milestones: EE process begins Mid-Oct 2026 -> RQ Proposals Managebac Nov 26 -> 1st Formal Meeting Dec 1–18 -> Annotated Bib Feb 27, 2027 -> 1,000-word EE checkpoint Apr 27, 2027 -> 2nd Formal Meeting May 22, 2027; History Grade 11 Mock IA Jan 17 & May 27, 2027; Collaborative Sciences Project Dec 1–18, 2026.',
      ].join('\n'),
    },
    {
      fileName: 'Family.jpg',
      fileType: 'jpg',
      topicCode: 'AoE2.1',
      externalUrl: 'https://drive.google.com/file/d/1UNNLboHTE9gpwsi1fTdT53NJ76ycxQ92/view?usp=drivesdk',
      extractedText: [
        'Handwritten Close-Reading Page Tracker — "Family members and family dynamics" (Chinua Achebe, Things Fall Apart, Part 1):',
        '- p. 4: Introduces Okonkwo’s father Unoka (debt, artistic gentleness contrasted against Okonkwo’s hyper-masculine shame).',
        '- p. 8: Ikemefuna introduced as peace-settlement ward placed in Okonkwo’s household.',
        '- p. 18: Okonkwo emphasizes building status with zero paternal inheritance ("did not inherit anything from father").',
        '- p. 20: Patriarchal compound structure ("Men in the family make like an empire with multiple wives"; Ekwefi second wife, Ojiugo third wife, unnamed senior/first wife hierarchy).',
        '- p. 27: Ikemefuna quietly misses his mother and three-year-old sister, highlighting emotional trauma beneath communal diplomacy.',
        '- pp. 29 & 38: Okonkwo beats his wives/family during moments of frustration ("showing the power dynamic trying to feel powerful").',
        '- p. 33: Okonkwo’s coercive pressure on his eldest son Nwoye to become a "great man".',
      ].join('\n'),
    },
    {
      fileName: 'Food.jpg',
      fileType: 'jpg',
      topicCode: 'AoE1.1',
      externalUrl: 'https://drive.google.com/file/d/1iXyrEGO8KELHxN9tbVSxJc_ib3aEhdZi/view?usp=drivesdk',
      extractedText: [
        'Handwritten Textual Quotation Log — Food Rituals, Gendered Crops & Hospitality (Things Fall Apart):',
        '- p. 10: Martial honour motif — drinking palm wine out of his first human head at great village celebrations/funerals.',
        '- p. 19: Hospitality & diplomacy — presenting kola nut & alligator pepper; carrying a pot of palm wine and a cock to Nwakibie to negotiate sharecropping seed yams.',
        '- p. 23: Agricultural gender division — "women’s crops like coco-yams, beans and cassava" vs yams requiring protective rings of thick sisal leaves around yam tendrils.',
        '- p. 27: Communal merit vs humility — "It is not true that Okonkwo’s palm kernels have been cracked for him by a benevolent spirit."',
        '- pp. 42–43: Domestic labour & nourishment — peeling yams, chewing yam cud in goat shed, cutting yams to prepare a chicken potage.',
        '- p. 56: Collective abundance — locust swarm settling in bushes at night and later roasted in clay pots.',
      ].join('\n'),
    },
    {
      fileName: 'ReligionCulture.jpg',
      fileType: 'jpg',
      topicCode: 'AoE2.2',
      externalUrl: 'https://drive.google.com/file/d/11ZNKYLc16OjdEZ-6VwWytm_wOjYkDZ9-/view?usp=drivesdk',
      extractedText: [
        'Handwritten Thematic Log — "Religion / Culture (Practice / Page #)" (Things Fall Apart):',
        '- p. 3 & p. 42: Wrestling across the 9 villages elevates Okonkwo’s fame; ceremonial music of drums and flutes drives communal unity.',
        '- p. 5 & p. 23: Yam farming success equals wealth, power, social status, and masculine prowess.',
        '- p. 13 & p. 61: Rigid patriarchal ethic where male domination normalizes violence and "showing weakness is bad".',
        '- p. 14: Igbo theology of personal gods (*chi*) balancing individual effort against fate.',
        '- p. 30: Worship of **Ani**, the Earth goddess governing agricultural fertility and moral taboos (Week of Peace).',
        '- p. 36: Feast of the New Yam honoring ancestral spirits (*egwugwu* masked judiciary).',
        '- pp. 55–57: Spiritual omens and authority — locusts interpreted as auspicious sign (p. 55), central spatial rank of Okonkwo’s *obi* (p. 56), and supreme judicial/spiritual authority of the Oracle (p. 57).',
      ].join('\n'),
    },
  ],
  notes: [
    {
      topicCode: 'AoE2.1',
      title: 'Things Fall Apart: Cultural Cosmology, Family Power & IO Global Issues (AoE2)',
      summary:
        'Analytical close-reading guide synthesizing all three classroom thematic logs (Family, Food, Religion/Culture) for IB Paper 2 Comparative Essays and May 2027 Individual Orals.',
      sourceFileNames: ['Family.jpg', 'Food.jpg', 'ReligionCulture.jpg', 'IB Assessment Calendar 2026-2027.pdf'],
      blocks: [
        { type: 'heading', level: 2, text: '1. Cultural Architecture of Umuofia: Food, Family & Faith' },
        {
          type: 'paragraph',
          markdown:
            'Chinua Achebe’s *Things Fall Apart* does not present pre-colonial Umuofia as simplistic or utopian: through dense **material details** (kola nuts, yam mounds, the *obi*, drums, and *Ani*’s Week of Peace), Achebe constructs a sophisticated society with internal checks alongside tragic **patriarchal violence and fear of weakness** — essential tension for HL Essays, Paper 2, and Individual Orals.',
        },
        {
          type: 'playable_diagram',
          spec: {
            type: 'comparison_matrix',
            id: 'eng-aoe2-tfa-motifs',
            title: 'Textual Matrix: Motifs -> Authorial Technique -> IB Global Issue / Concept',
            caption: 'Directly mapped from the Family.jpg, Food.jpg, and ReligionCulture.jpg close-reading page logs.',
            columns: ['Motif Cluster (Pages)', 'Key Textual Details', 'Authorial Technique / Form', 'IB Concept / Global Issue Link'],
            rows: [
              {
                criterion: 'Family Power & Patrilineal Anxiety (pp. 4, 18, 20, 29, 33, 38)',
                cells: [
                  'Compound "like an empire" with 3 wives; beats wives; intimidates Nwoye over Unoka’s shadow',
                  'Imperial metaphor ("empire") + psychological foil (Unoka vs Okonkwo)',
                  'Identity / Culture: Generational trauma & toxic masculinity masking insecurity',
                ],
                ibExamTip: 'Contrast Okonkwo’s hyper-control (p. 29/38) with Ikemefuna’s quiet longing (p. 27).',
              },
              {
                criterion: 'Food Rituals & Gendered Crops (pp. 10, 19, 23, 27, 42–43, 56)',
                cells: [
                  'Kola nut & alligator pepper; Nwakibie palm wine; yams vs coco-yams/beans; locust harvest',
                  'Ethnographic realism & proverbial diction ("palm kernels cracked by a benevolent spirit")',
                  'Culture / Power: Material hospitality rituals vs rigid gender roles in agriculture',
                ],
              },
              {
                criterion: 'Religion, Chi & Sacred Authority (pp. 3, 14, 30, 36, 55–57)',
                cells: [
                  'Earth goddess Ani (p. 30), New Yam Feast, Oracle authority (p. 57), drums & wrestling',
                  'Oral proverbs, ceremonial rhythm, symbolic setting (*obi* spatial centrality)',
                  'Belief & Values: Tension between personal *chi* agency and sacred communal submission',
                ],
              },
            ],
          },
        },
        {
          type: 'callout',
          variant: 'syllabus_link',
          title: 'CRHS May 2027 Individual Oral (IO) Prep Window',
          markdown:
            'Per the CRHS IB Assessment Calendar, Grade 11 completes **Mock IOs throughout April 2027** and **final recorded IOs throughout May 2027**. Pair a sharp ~40-line extract from *Things Fall Apart* (e.g., Week of Peace transgression or Nwakibie kola-nut ceremony) with an equally grounded translated work around one **transnational Global Issue** (10 min delivery + 5 min questioning).',
        },
      ],
    },
    {
      topicCode: 'COMP.1',
      title: 'Paper 1 & Paper 2 HL Analytical Craft: Extract-to-Concept Architecture',
      summary:
        'Strategic structure guide for IB English Literature HL Paper 1 (2h15, 2 unseen passages, 40 marks) and Paper 2 Comparative Essay (1h45, 30 marks).',
      sourceFileNames: ['IB Assessment Calendar 2026-2027.pdf', 'ReligionCulture.jpg'],
      blocks: [
        { type: 'heading', level: 2, text: '1. From Literal Quotation to Conceptual Thesis (Criteria A–D)' },
        {
          type: 'paragraph',
          markdown:
            'High-scoring IB English HL responses avoid plot summary by treating every quotation — whether an unseen Paper 1 poem/prose passage or a Paper 2 comparison of *Things Fall Apart* with a second studied work — as an **authorial choice engineered to shape reader response**.',
        },
        {
          type: 'playable_diagram',
          spec: {
            type: 'step_mechanism',
            id: 'eng-comp-analysis-pipeline',
            title: 'Four-Step IB HL Close-Reading Paragraph Architecture',
            caption: 'Walk through the analytical loop used across Paper 1 (HL 2 unseen texts), Paper 2, and HL Essay.',
            nodes: [
              { id: 'claim', x: 105, y: 190, label: '1. Conceptual Claim', sublabel: 'Answers prompt + IB Concept' },
              { id: 'quote', x: 295, y: 190, label: '2. Embedded Evidence', sublabel: 'Short micro-quotations' },
              { id: 'craft', x: 495, y: 190, label: '3. Authorial Technique', sublabel: 'Diction, syntax, symbolism' },
              { id: 'effect', x: 690, y: 190, label: '4. Reader Effect & Link', sublabel: 'Nuance / Counter-perspective' },
            ],
            edges: [
              { id: 'c1', from: 'claim', to: 'quote', label: 'anchor' },
              { id: 'c2', from: 'quote', to: 'craft', label: 'zoom in' },
              { id: 'c3', from: 'craft', to: 'effect', label: 'interpret' },
            ],
            steps: [
              {
                stepNumber: 1,
                title: 'Anchor Topic Sentence in an Authorial Purpose (Criterion C)',
                descriptionMarkdown:
                  'Open with an **arguable analytical claim** rather than plot narration: e.g., *"Achebe employs agricultural and imperial diction to expose how Okonkwo equates domestic authority with survival."* ',
                activeNodeIds: ['claim'],
                activeEdgeIds: [],
                metrics: [
                  { label: 'Criterion B', value: 'Analysis & Evaluation' },
                  { label: 'Criterion C', value: 'Focus & Organization' },
                ],
              },
              {
                stepNumber: 2,
                title: 'Weave Micro-Quotations + Unpack Formal Features (Criterion A/B)',
                descriptionMarkdown:
                  'Integrate crisp phrases (*"like an empire"*, *"women’s crops"*, *"benevolent spirit"*) syntactically into your sentence and name the **specific formal mechanism** (simile, proverbial irony, ceremonial pacing, structural juxtaposition).',
                activeNodeIds: ['quote', 'craft'],
                activeEdgeIds: ['c1', 'c2'],
                metrics: [
                  { label: 'Paper 1 HL', value: '2 Unseen Analyses (2h15)' },
                  { label: 'Paper 2', value: 'Comparative Synthesis (1h45)' },
                ],
              },
              {
                stepNumber: 3,
                title: 'Connect Technique -> Global Issue / Comparative Pivot',
                descriptionMarkdown:
                  'Explain **how** the device destabilizes reader assumptions (e.g., undermining colonial stereotypes by highlighting Igbo deliberation before tragedy strikes) and pivot cleanly to your second text in Paper 2.',
                activeNodeIds: ['effect'],
                activeEdgeIds: ['c3'],
                metrics: [
                  { label: 'Criterion D', value: 'Precise Register' },
                  { label: 'HL Essay Target', value: '1,200–1,500 Words' },
                ],
              },
            ],
          },
        },
        {
          type: 'key_terms',
          items: [
            { term: 'Global Issue (IO)', definitionMarkdown: 'Significant, transnational issue observable in everyday local contexts across BOTH a work in translation and a work originally in English.' },
            { term: 'HL Essay (20 marks)', definitionMarkdown: '1,200–1,500-word formal literary research essay examining a non-IO studied work through one of the 7 IB Concepts.' },
            { term: 'Seven IB Concepts', definitionMarkdown: 'Identity, Culture, Creativity, Communication, Transformation, Perspective, Representation.' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      topicCode: 'AoE2.1',
      paperType: 'Paper 2 (Comparative Essay)',
      commandTerm: 'Discuss',
      difficulty: 'HL Extension',
      maxMarks: 30,
      stimulusMarkdown:
        'Prompt adapted from classic Paper 2 thematic questions alongside *Things Fall Apart* classroom logs (*Family.jpg*, *Food.jpg*, *ReligionCulture.jpg*):',
      questionMarkdown:
        '"Social rituals and shared meals often conceal rigid hierarchies of power and exclusion." With reference to **two** works you have studied (including *Things Fall Apart*), discuss how authors use communal traditions or domestic structures to expose conflict between individual identity and societal expectation.',
      markscheme: {
        marking_points: [
          {
            code: 'A1',
            criterion: 'Criterion A (10m): Knowledge, understanding & insightful comparative interpretation of two works using concrete textual details (e.g., kola nut/New Yam rituals vs compound domestic power)',
            marks: 10,
          },
          {
            code: 'M1',
            criterion: 'Criterion B (10m): Evaluation of authorial choices — proverbial diction, gendered crop imagery, juxtaposition of public honour (wrestling/drums) with private coercion (beatings/Nwoye/Ikemefuna)',
            marks: 10,
          },
          {
            code: 'M2',
            criterion: 'Criterion C & D (10m): Cohesive comparative organization balanced point-by-point (5m) + precise analytical academic register (5m)',
            marks: 10,
          },
        ],
        model_answer:
          'Frame a **point-by-point thematic comparison** examining (1) how public ceremonial abundance (kola nut hospitality p. 19, New Yam Feast p. 36, locust harvest p. 56) enforces collective cohesion yet encodes status; (2) how agricultural and family hierarchies (*"women’s crops"* p. 23, Okonkwo’s compound *"like an empire"* p. 20) discipline dissenters like Unoka and Nwoye; and (3) how stylistic contrasts (proverbial communal voice vs psychological isolation) illuminate the tragedy of conformity across both texts.',
      },
      sourceFileNames: ['Family.jpg', 'Food.jpg', 'ReligionCulture.jpg'],
    },
    {
      topicCode: 'AoE1.1',
      paperType: 'Paper 1 (Guided Literary Analysis)',
      commandTerm: 'Analyse',
      difficulty: 'Standard IB',
      maxMarks: 20,
      stimulusMarkdown:
        'Consider an unseen prose extract depicting a father–son exchange inside a patriarchal rural household where material objects (tools, crops, ancestral shrines) anchor unspoken rivalry and fear of failure.',
      questionMarkdown:
        'Write a **guided literary analysis** examining how narrative perspective, imagery, and contrast shape the reader’s understanding of power within the household.',
      markscheme: {
        marking_points: [
          { code: 'A1', criterion: 'Criterion A (5m): Perceptive understanding of literal situation and implied emotional/generational tension grounded in textual evidence', marks: 5 },
          { code: 'M1', criterion: 'Criterion B (5m): Sustained analysis of formal choices — focalization/narrative tone, symbolic objects, syntactic rhythm, and sensory imagery', marks: 5 },
          { code: 'M2', criterion: 'Criterion C (5m): Clear conceptual line of inquiry organizing body paragraphs cleanly (not chronologically paraphrasing line-by-line)', marks: 5 },
          { code: 'A2', criterion: 'Criterion D (5m): Fluent, concise literary terminology and accurate mechanics', marks: 5 },
        ],
        model_answer:
          'Organize by **conceptual lenses rather than line order**: (1) spatial & object symbolism establishing authority; (2) narrative distance revealing unvoiced vulnerability; and (3) syntactic contrasts (terse imperatives vs hesitant interiority) demonstrating how patriarchal codes silence tenderness.',
      },
      sourceFileNames: ['Family.jpg', 'Food.jpg'],
    },
    {
      topicCode: 'AoE2.2',
      paperType: 'Paper 1 (Guided Literary Analysis)',
      commandTerm: 'Explain',
      difficulty: 'Standard IB',
      maxMarks: 10,
      stimulusMarkdown:
        'In *Things Fall Apart*, Achebe writes that **"among the Igbo the art of conversation is regarded very highly, and proverbs are the palm-oil with which words are eaten"** alongside hospitality scenes of breaking kola nut and alligator pepper (p. 19) and respecting **Ani**, goddess of the earth (p. 30).',
      questionMarkdown:
        'Explain how Achebe uses **culturally embedded diction, culinary metaphor, and religious reference** to challenge colonial readers’ assumptions about pre-colonial Umuofia.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Identifies Igbo loanwords/titles (*chi*, *obi*, *Ani*, kola nut ritual) establishing internal cultural sophistication without condescending translation gloss', marks: 4 },
          { code: 'M2', criterion: 'Analyses culinary/organic metaphors ("palm-oil with which words are eaten", yams/locust abundance) demonstrating diplomatic eloquence and moral balance', marks: 3 },
          { code: 'A1', criterion: 'Evaluates dual effect: humanizes Umuofia’s complex civic/spiritual laws while preserving critical distance toward rigid gender/martial norms', marks: 3 },
        ],
        model_answer:
          'By embedding Igbo cosmology (*chi*, *Ani*, the Week of Peace) and everyday culinary metaphors directly into third-person narration, Achebe centers Umuofia as an intellectually nuanced society governed by diplomacy and shared restraint—dismantling reductive colonial tropes while never romanticizing Okonkwo’s flaws.',
      },
      sourceFileNames: ['Food.jpg', 'ReligionCulture.jpg'],
    },
  ],
  flashcards: [
    {
      topicCode: 'AoE2.1',
      frontMarkdown: 'How does Okonkwo’s compound structure on **p. 20** symbolize his view of masculinity in *Things Fall Apart*?',
      backMarkdown:
        'Described *"like an empire"* with three wives (first wife, Ekwefi, Ojiugo), reflecting Okonkwo’s obsessive drive to accumulate status and dominate his household in reaction against his father Unoka.',
    },
    {
      topicCode: 'AoE1.1',
      frontMarkdown: 'What cultural values do **kola nuts, palm wine, and yams** signify in Part 1 of *Things Fall Apart*?',
      backMarkdown:
        '**Kola nut & alligator pepper (p. 19):** Sacred hospitality and civil diplomacy (*"He who brings kola brings life"*).\n**Yams (pp. 5, 23):** The *"king of crops"*, measuring masculine wealth and endurance (contrasted with *"women’s crops"* like coco-yams/beans).',
    },
    {
      topicCode: 'AoE2.2',
      frontMarkdown: 'Distinguish **Ani** and personal ***chi*** in Igbo cosmology (ReligionCulture.jpg pp. 14, 30).',
      backMarkdown:
        '**Ani:** Earth goddess governing agricultural fertility and moral law (transgressed when Okonkwo beats his wife during the Week of Peace).\n***Chi*:** Personal guardian spirit linking individual effort to destiny (*"when a man says yes his chi says yes also"*).',
    },
    {
      topicCode: 'COMP',
      frontMarkdown: 'When are Grade 11 **English Mock IOs** and **Final IA Individual Orals** on the CRHS 2026–2027 Calendar?',
      backMarkdown:
        '**Mock IOs:** Throughout **April 2027**.\n**Final Grade 11 Individual Orals (IA):** Throughout **May 2027**.',
    },
    {
      topicCode: 'COMP',
      frontMarkdown: 'What is the structure & maximum length of the **IB English Literature HL Essay**?',
      backMarkdown:
        '**1,200–1,500 words** (20 marks), exploring a chosen literary line of inquiry connected to one of the **7 IB Concepts** on a text **not** used in the Individual Oral or Paper 2.',
    },
  ],
  topicGuidanceNotes: {
    'AoE1.1': 'Use Food.jpg & Family.jpg close-reading logs to trace concrete imagery (kola nut, yams, palm wine, domestic objects) into conceptual claims.',
    'AoE2.1': 'Things Fall Apart Context (Family.jpg p.4–38): Connect Okonkwo’s rejection of Unoka, treatment of Ikemefuna/Nwoye, and multi-wife compound hierarchy to patriarchal fear and colonial disruption.',
    'AoE2.2': 'Religion/Culture Log (ReligionCulture.jpg pp.3–61): Contrast community rituals (wrestling, Ani, New Yam, Oracle) with rigid suppression of perceived weakness.',
    COMP: 'CRHS 2026–2027 IB Calendar: Grade 11 English Mock IOs run throughout April 2027 and Final Individual Orals throughout May 2027 (non-negotiable school deadlines). Grade 12 HL Essay Proposal due Nov 19, Final Essay Feb 17.',
  },
};
