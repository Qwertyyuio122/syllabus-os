import type { SubjectClassroomSeed } from './types';
import { ENG_TFA_EVIDENCE_EXPLORER } from './enhanced-diagrams';

export const ENGLISH_LIT_HL_SEED: SubjectClassroomSeed = {
  slug: 'english-lit-hl',
  materials: [
    {
      fileName: 'IB Assessment Calendar 2026-2027.pdf',
      fileType: 'pdf',
      topicCode: 'COMP',
      externalUrl: 'https://drive.google.com/file/d/1i1D9DD_KA9riE9c3ZbjbwSW-ttisnp1R/view?usp=drivesdk',
      extractedText: [
        'CRHS IB Assessment Calendar 2026–2027 — English A Literature HL:',
        '- English HL Milestones: Grade 11 Mock Individual Orals (throughout April 2027); Grade 11 Recorded Final Individual Orals / IA (throughout May 2027).',
        '- Grade 12 Reference: English HL Essay Proposal (Nov 19, 2027); HL Essay Final Submission (Feb 17, 2028); IB coordinate upload March 15.',
      ].join('\n'),
    },
    {
      fileName: 'Family.jpg',
      fileType: 'jpg',
      topicCode: 'AoE2.1',
      externalUrl: 'https://drive.google.com/file/d/1UNNLboHTE9gpwsi1fTdT53NJ76ycxQ92/view?usp=drivesdk',
      extractedText: [
        'Handwritten Close-Reading Tracker — "Family members and family dynamics" (Chinua Achebe, Things Fall Apart):',
        '- p. 4: Introduces Unoka (debt, artistic gentleness contrasted against Okonkwo’s hyper-masculine shame).',
        '- p. 8: Ikemefuna enters Okonkwo’s compound as peace-settlement ward.',
        '- p. 18: Okonkwo "did not inherit anything from father" — self-made anxiety.',
        '- p. 20: "Men in the family make like an empire with multiple wives" (first wife, Ekwefi, Ojiugo).',
        '- p. 27: Ikemefuna quietly misses his mother and three-year-old sister.',
        '- pp. 29 & 38: Okonkwo beats wives/family ("showing the power dynamic trying to feel powerful").',
        '- p. 33: Coercive pressure on eldest son Nwoye to be a "great man".',
      ].join('\n'),
    },
    {
      fileName: 'Food.jpg',
      fileType: 'jpg',
      topicCode: 'AoE1.1',
      externalUrl: 'https://drive.google.com/file/d/1iXyrEGO8KELHxN9tbVSxJc_ib3aEhdZi/view?usp=drivesdk',
      extractedText: [
        'Handwritten Quotation Log — Food Rituals, Gendered Crops & Hospitality (Things Fall Apart):',
        '- p. 10: Martial honour — drinking palm wine out of his first human head at village feasts.',
        '- p. 19: Hospitality & diplomacy — kola nut & alligator pepper; pot of palm wine and cock brought to Nwakibie.',
        '- p. 23: Gendered agriculture — "women’s crops like coco-yams, beans and cassava" vs yams ringed by protective sisal.',
        '- p. 27: Proverbial humility — "It is not true that Okonkwo’s palm kernels have been cracked for him by a benevolent spirit."',
        '- pp. 42–43: Peeling yams, chewing yam cud in goat shed, preparing chicken potage.',
        '- p. 56: Collective locust feast roasted in clay pots.',
      ].join('\n'),
    },
    {
      fileName: 'ReligionCulture.jpg',
      fileType: 'jpg',
      topicCode: 'AoE2.2',
      externalUrl: 'https://drive.google.com/file/d/11ZNKYLc16OjdEZ-6VwWytm_wOjYkDZ9-/view?usp=drivesdk',
      extractedText: [
        'Handwritten Thematic Log — "Religion / Culture (Practice / Page #)" (Things Fall Apart):',
        '- p. 3 & p. 42: Inter-village wrestling (9 villages) + ceremonial drums and flutes uniting Umuofia.',
        '- p. 5 & p. 23: Yam harvest equates directly to wealth, power, and masculine endurance.',
        '- p. 13 & p. 61: Rigid patriarchal ethos ("showing weakness is bad").',
        '- p. 14: Personal god (*chi*) balancing destiny vs willpower.',
        '- p. 30: Earth goddess **Ani** governing fertility & moral taboos (Week of Peace).',
        '- p. 36: Feast of the New Yam honoring ancestral *egwugwu*.',
        '- pp. 55–57: Locust omens (p. 55), central spatial rank of Okonkwo’s *obi* (p. 56), and supreme judicial authority of the Oracle (p. 57).',
      ].join('\n'),
    },
  ],
  notes: [
    {
      topicCode: 'AoE2.1',
      title: 'Things Fall Apart: Family Power, Food Rituals, Cosmology & IO Global Issues (AoE2)',
      summary:
        'Maps every handwritten citation from Family.jpg, Food.jpg, and ReligionCulture.jpg into an interactive textual evidence web linking Achebe’s proverbs, imagery, and motifs to IO Global Issues.',
      sourceFileNames: ['Family.jpg', 'Food.jpg', 'ReligionCulture.jpg'],
      blocks: [
        { type: 'heading', level: 2, text: '1. Interactive Textual Evidence Web (Every Verified Citation)' },
        { type: 'playable_diagram', spec: ENG_TFA_EVIDENCE_EXPLORER },
        {
          type: 'playable_diagram',
          spec: {
            type: 'comparison_matrix',
            id: 'eng-tfa-evidence-matrix',
            title: 'Things Fall Apart Motif -> Authorial Technique -> IB Global Issue / Concept',
            caption: 'Consolidated directly from CRHS handwritten close-reading trackers (Family.jpg, Food.jpg, ReligionCulture.jpg).',
            columns: ['Textual Strand (Pages)', 'Exact Motif / Citation', 'Authorial Technique & Analytical Claim'],
            rows: [
              {
                criterion: 'Patriarchal Compound & Shame (Family.jpg pp. 4, 18, 20, 29, 33, 38)',
                cells: ['"Men in the family make like an empire with multiple wives" (p. 20); beats Ekwefi/Ojiugo (pp. 29, 38); Unoka shadow (p. 4, 18)', 'Simile ("like an empire") + third-person focalization expose Okonkwo’s domestic authoritarianism as overcompensation for inherited poverty and fear of effeminacy.'],
              },
              {
                criterion: 'Hospitality Rituals & Gendered Crops (Food.jpg pp. 10, 19, 23, 27, 42–43, 56)',
                cells: ['Kola nut & alligator pepper (p. 19); "palm kernels... cracked by a benevolent spirit" (p. 27); yams vs "women’s crops" (p. 23)', 'Proverbial diction and ritual food codes show Umuofia is governed by complex diplomacy and meritocratic labour rather than colonial "savagery," while exposing strict gender hierarchies.'],
              },
              {
                criterion: 'Igbo Cosmology & Civic Order (ReligionCulture.jpg pp. 3, 14, 30, 36, 55–57)',
                cells: ['Earth goddess Ani & Week of Peace (p. 30); personal chi (p. 14); New Yam Feast (p. 36); Oracle authority (p. 57)', 'Vernacular Igbo lexis (*chi, Ani, obi, egwugwu*) centers indigenous philosophical balance — making Okonkwo’s unilateral violence doubly transgressive against communal law.'],
                ibExamTip: 'In the Individual Oral, always pair Achebe (written originally in English) with a WORK IN TRANSLATION!',
              },
            ],
          },
        },
        {
          type: 'callout',
          variant: 'syllabus_link',
          title: 'CRHS May 2027 Individual Oral (IO) Prep Window',
          markdown:
            'Per the CRHS IB Assessment Calendar, Grade 11 **English Mock Individual Orals** run throughout **April 2027**, followed immediately by your **final recorded IB Individual Orals throughout May 2027**. Pair *Things Fall Apart* (original English text) with one **work in translation** under a focused Global Issue (e.g., *Beliefs, values and education* or *Politics, power and justice*).',
        },
      ],
    },
    {
      topicCode: 'COMP',
      title: 'English A Literature HL Craft: Paper 1, Paper 2, HL Essay & Mandatory IO Rules',
      summary:
        'Precision blueprint for all 4 IB English A Literature HL components: extract-to-concept P1 commentary, comparative P2 essay, 1,200–1,500w HL Essay, and 10m + 5m IO rules.',
      sourceFileNames: ['IB Assessment Calendar 2026-2027.pdf', 'Family.jpg', 'ReligionCulture.jpg'],
      blocks: [
        {
          type: 'playable_diagram',
          spec: {
            type: 'comparison_matrix',
            id: 'eng-hl-components-matrix',
            title: 'IB English A: Literature HL Assessment Map & Text-Selection Rules',
            caption: 'No single studied work may be reused across Paper 2, the HL Essay, and the Individual Oral.',
            columns: ['Component (Weighting)', 'Duration / Word Cap', 'Non-Negotiable Text & Rubric Rules'],
            rows: [
              { criterion: 'Paper 1 Guided Literary Analysis (35%)', cells: ['2h 15m (40 marks · 2 unseen extracts)', 'Write two distinct guided essays (prose fiction/non-fiction, drama, or poetry); integrate technique -> effect -> central thesis cleanly'] },
              { criterion: 'Paper 2 Comparative Essay (25%)', cells: ['1h 45m (30 marks · choose 1 of 4 prompts)', 'Compare and contrast 2 studied works NOT used in IO or HL Essay; weave similarities/differences continuously in every body paragraph'] },
              { criterion: 'Individual Oral — IA (20%)', cells: ['10 min prepared + 5 min Q&A (40 marks)', 'Must pair 1 work originally written in English (e.g. *Things Fall Apart*) + 1 work in translation through one Global Issue (≤40-line extract + whole work)'] },
              { criterion: 'HL Essay (20%)', cells: ['1,200–1,500 words (20 marks)', 'Formal line of inquiry exploring 1 of 7 IB Concepts in 1 non-IO / non-Paper 2 work; strict academic citation'] },
            ],
          },
        },
        {
          type: 'key_terms',
          items: [
            { term: 'Criterion A — Knowledge, Understanding & Interpretation', definitionMarkdown: 'Anchor macro claims in precise textual moments (e.g. "women’s crops", p. 23) and defend nuanced Global Issue implications.', markschemeKeyword: 'micro-quotation + implication' },
            { term: 'Criterion B — Analysis & Evaluation', definitionMarkdown: 'Explain HOW specific authorial choices (proverbial diction, free indirect discourse, structural contrast between Unoka and Okonkwo) shape reader judgement.', markschemeKeyword: 'technique -> effect' },
            { term: 'Criterion C & D — Focus, Organisation & Language', definitionMarkdown: 'Lead paragraphs with conceptual topic sentences, track shifts across the ~40-line IO extract vs whole work (5m + 5m balance), and deploy precise literary register.', markschemeKeyword: 'equal work weighting + register' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      topicCode: 'AoE2.1',
      paperType: 'Individual Oral Prep',
      commandTerm: 'Examine',
      difficulty: 'Standard IB',
      maxMarks: 10,
      stimulusMarkdown:
        'From *Things Fall Apart* (**Family.jpg p. 20 & p. 29**): Okonkwo presides over a compound *"like an empire"* of three wives and resorts to domestic violence when frustrated.',
      questionMarkdown:
        'Using specific close-reading evidence from **Family.jpg** (pp. 4, 18, 20, 29, 33, 38), examine how Achebe links masculine insecurity to domestic authoritarianism under the Global Issue **Culture, identity and community / Politics, power and justice**.',
      markscheme: {
        marking_points: [
          { code: 'A1', criterion: 'Grounds claim in specific tracked moments: Unoka’s shame/no inheritance (pp. 4, 18), "like an empire" compound simile (p. 20), intimidation of Nwoye (p. 33) and Ekwefi/Ojiugo beatings (pp. 29, 38).', marks: 4 },
          { code: 'B1', criterion: 'Unpacks imperial simile ("like an empire") and third-person narration showing violence stems from terror of appearing weak rather than stable moral strength.', marks: 4 },
          { code: 'C1', criterion: 'Frames a clear Global Issue thesis balancing extract detail with Part 1 trajectory.', marks: 2 },
        ],
        model_answer:
          'Achebe’s political simile describing Okonkwo’s household "like an empire" (p. 20) fuses domestic patriarchy with imperial domination. Hauntingly driven by Unoka’s debt (pp. 4, 18), Okonkwo treats Ikemefuna, Nwoye (p. 33), and his wives (pp. 29, 38) as subjects whose deference validates his manhood—exposing how fragile personal insecurity can weaponize traditional authority.',
      },
      sourceFileNames: ['Family.jpg', 'ReligionCulture.jpg'],
    },
    {
      topicCode: 'AoE1.1',
      paperType: 'Paper 1 (Close Reading)',
      commandTerm: 'Analyse',
      difficulty: 'Standard IB',
      maxMarks: 10,
      stimulusMarkdown:
        'In **Food.jpg** (p. 19 & p. 23), diplomacy begins with breaking kola nut and alligator pepper, while yams belong strictly to masculine prestige as *"women’s crops like coco-yams, beans and cassava"* feed households daily.',
      questionMarkdown:
        'Analyse how Achebe uses **agricultural and culinary rituals** (**Food.jpg** pp. 10, 19, 23, 27, 56) both to dignify pre-colonial Igbo civility and to critique rigid gender division.',
      markscheme: {
        marking_points: [
          { code: 'A1', criterion: 'Contrasts civil kola/alligator pepper hospitality & Nwakibie sharecropping diplomacy (pp. 19, 27) against martial skull trophy drinking (p. 10) and gendered yam status (p. 23).', marks: 4 },
          { code: 'B1', criterion: 'Examines proverb rhetoric ("palm kernels", p. 27) and communal locust harvest imagery (p. 56) showing social cohesion alongside internal inequity.', marks: 4 },
          { code: 'C1', criterion: 'Avoids romanticizing or condemning Umuofia one-dimensionally.', marks: 2 },
        ],
        model_answer:
          'Through ceremonial kola-nut sharing (p. 19) and communal locust roasting (p. 56), Achebe refutes colonial caricatures of pre-contact disorder. Simultaneously, categorizing nourishing beans and cassava as inferior "women’s crops" (p. 23) highlights patriarchal hierarchies embedded directly inside agrarian honour.',
      },
      sourceFileNames: ['Food.jpg'],
    },
    {
      topicCode: 'AoE2.2',
      paperType: 'Individual Oral (40m Scale)',
      commandTerm: 'Discuss',
      difficulty: 'HL Extension',
      maxMarks: 10,
      questionMarkdown:
        'Discuss how **personal *chi* (p. 14)** and **the Earth goddess Ani (p. 30)** in **ReligionCulture.jpg** expose the tragedy of Okonkwo’s Week of Peace beating before colonialism even reaches Umuofia.',
      markscheme: {
        marking_points: [
          { code: 'A1', criterion: 'Integrates Igbo theological terms (*chi* p. 14, Ani p. 30, New Yam Feast p. 36, Oracle p. 57) cleanly into analysis.', marks: 4 },
          { code: 'B1', criterion: 'Demonstrates that Okonkwo’s domestic violence violates indigenous spiritual/ecological law (Week of Peace) — showing tragedy already germinates within Umuofia’s tension between individual rigidity and sacred balance.', marks: 4 },
          { code: 'C1', criterion: 'Maintains coherent IO Global Issue framing rather than plot summary.', marks: 2 },
        ],
        model_answer:
          'Long before European missionaries arrive, Igbo cosmology balances ambitious personal effort (*chi*, p. 14) with collective reverence for Ani, Earth goddess of fertility and peace (p. 30). When Okonkwo beats Ojiugo during the Week of Peace, Ezeani reprimands him for risking the clan’s harvest—revealing that Okonkwo’s uncompromising hyper-masculinity threatens indigenous moral order from within.',
      },
      sourceFileNames: ['ReligionCulture.jpg', 'Family.jpg'],
    },
    {
      topicCode: 'COMP',
      paperType: 'Component Rules',
      commandTerm: 'Identify',
      difficulty: 'Foundation',
      maxMarks: 2,
      questionMarkdown:
        'State the mandatory **text-selection pairing rule** for the IB English A Literature HL **Individual Oral (IO)** and specify when CRHS Grade 11 Mock and Final IOs take place.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Must pair 1 work originally written in English (e.g. *Things Fall Apart*) + 1 work originally written in another language and studied in translation, examining one shared Global Issue.', marks: 1 },
          { code: 'M2', criterion: 'CRHS 2026–2027 Calendar: Mock IOs run throughout April 2027; Final recorded Grade 11 IOs run throughout May 2027.', marks: 1 },
        ],
        model_answer:
          'One original English work plus one work in translation connected by a Global Issue; CRHS Mock IOs run April 2027 and Final recorded IOs run May 2027.',
      },
      sourceFileNames: ['IB Assessment Calendar 2026-2027.pdf'],
    },
    {
      topicCode: 'COMP',
      paperType: 'HL Essay Craft',
      commandTerm: 'Outline',
      difficulty: 'Standard IB',
      maxMarks: 4,
      questionMarkdown:
        'Outline the **word limit**, **scoring weight**, **non-duplication text rule**, and **purpose of the 7 IB Concepts** in the English A Literature **HL Essay**.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Word count: 1,200–1,500 words (20 marks, 20% of HL grade).', marks: 1 },
          { code: 'M2', criterion: 'Text rule: explores a literary work studied on the course that is NOT used for Paper 2 or the Individual Oral.', marks: 1 },
          { code: 'M3', criterion: 'Links a focused formal/thematic line of inquiry to one of the 7 IB Concepts (*Identity, Culture, Creativity, Communication, Transformation, Perspective, Representation*).', marks: 2 },
        ],
        model_answer:
          'A 1,200–1,500-word formal essay (20% of HL) developing a conceptual line of inquiry anchored in one of the 7 IB Concepts on a course text reserved solely from the IO and Paper 2.',
      },
      sourceFileNames: ['IB Assessment Calendar 2026-2027.pdf'],
    },
    {
      topicCode: 'AoE1.2',
      paperType: 'Paper 2 Craft',
      commandTerm: 'Compare and contrast',
      difficulty: 'Standard IB',
      maxMarks: 6,
      questionMarkdown:
        'Explain why writing two separate "block essays" about Work A and Work B fails top bands on **Paper 2**, and demonstrate the proper **point-by-point comparative pivot** structure.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Criterion B (Analysis & Evaluation) requires continuous integration of both texts rather than isolated summaries glued by a conclusion.', marks: 3 },
          { code: 'M2', criterion: 'Comparative topic sentences establish a shared formal focus (e.g. unreliable focalization or structural fragmentation), analyse Text A’s technique/effect, and immediately pivot (*"Whereas Author A... Author B similarly/conversely..."*) to evaluate divergence.', marks: 3 },
        ],
        model_answer:
          'Separate half-essays cap Criterion B in middle bands because sustained comparison never develops across paragraphs. High-scoring Paper 2 essays organize each body paragraph around a shared formal device or theme, evaluating how and why the two authors diverge in effect.',
      },
      sourceFileNames: ['IB Assessment Calendar 2026-2027.pdf'],
    },
    {
      topicCode: 'AoE2.2',
      paperType: 'Individual Oral (40m Scale)',
      commandTerm: 'Determine',
      difficulty: 'Foundation',
      maxMarks: 3,
      questionMarkdown:
        'Outline the **10-minute prepared talk** time budget inside the IB Individual Oral across introduction, Extract 1 (English), Extract 2 (Translation), and conclusion.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Intro (~1 min): define precise Global Issue, introduce both works/authors, state thesis.', marks: 1 },
          { code: 'M2', criterion: 'Equal weighting (~4 min Text A: ~2 min close extract + ~2 min whole work; ~4 min Text B: ~2 min extract + ~2 min whole work) + ~1 min synthesis conclusion.', marks: 2 },
        ],
        model_answer:
          'Budget ~1 min introduction, ~4 min English work (2m extract + 2m whole work), ~4 min translated work (2m extract + 2m whole work), and ~1 min synthesized conclusion—leaving equal time for Q&A.',
      },
      sourceFileNames: ['Family.jpg', 'Food.jpg'],
    },
    {
      topicCode: 'COMP',
      paperType: 'Paper 1 Craft',
      commandTerm: 'Explain',
      difficulty: 'Standard IB',
      maxMarks: 4,
      questionMarkdown:
        'Explain how to turn a raw observation (*"Achebe uses proverbs on p. 19 and p. 27"*) into a **Criterion B evaluative insight** suitable for Paper 1 or IO Criterion B.',
      markscheme: {
        marking_points: [
          { code: 'M1', criterion: 'Name the specific stylistic mechanism (conversational Igbo aphorism / rhetorical modesty).', marks: 1 },
          { code: 'M2', criterion: 'Connect device directly to thematic meaning and reader perception (demonstrating oral sophistication vs European "primitive" stereotypes while masking social hierarchy).', marks: 3 },
        ],
        model_answer:
          'Move from feature-spotting to mechanism and effect: show that Achebe deploys elder proverbs ("palm oil with which words are eaten") to position oral philosophy at the center of civil negotiation while subtly framing Okonkwo’s defiance of elders.',
      },
      sourceFileNames: ['Food.jpg', 'ReligionCulture.jpg'],
    },
  ],
  flashcards: [
    { topicCode: 'AoE2.1', frontMarkdown: 'What simile describes Okonkwo’s household compound on p. 20 (Family.jpg)?', backMarkdown: '"Men in the family make like an empire with multiple wives" — exposing patriarchal authority as domestic imperialism.' },
    { topicCode: 'AoE2.1', frontMarkdown: 'Which pages in Family.jpg contrast Unoka’s shame with Okonkwo’s domestic violence?', backMarkdown: 'p. 4 & p. 18 (Unoka’s debt / zero inheritance) -> pp. 29, 33, 38 (coercing Nwoye & beating Ekwefi/Ojiugo to "feel powerful").' },
    { topicCode: 'AoE2.1', frontMarkdown: 'Page citations & significance of Ikemefuna in Family.jpg?', backMarkdown: 'p. 8 (arrives as peace settlement ward); p. 27 (quietly misses mother & 3-year-old sister — highlights private trauma behind tribal diplomacy).' },
    { topicCode: 'AoE1.1', frontMarkdown: 'What do Kola nut & alligator pepper (p. 19) vs Yam cultivation (pp. 5, 23) signify in Food.jpg?', backMarkdown: 'Kola nut/palm wine (p. 19): sacred civil hospitality. Yams (pp. 5, 23): masculine wealth ("king of crops") contrasted against "women’s crops like coco-yams, beans and cassava".' },
    { topicCode: 'AoE1.1', frontMarkdown: 'Exact proverb from Food.jpg p. 27 concerning Okonkwo’s success?', backMarkdown: '"It is not true that Okonkwo’s palm kernels have been cracked for him by a benevolent spirit" — underscores pride in self-made labour vs fate.' },
    { topicCode: 'AoE2.2', frontMarkdown: 'Distinguish **Ani** (p. 30) and personal ***chi*** (p. 14) in ReligionCulture.jpg.', backMarkdown: 'Ani: Earth goddess governing agricultural fertility & Week of Peace taboos. Chi: personal spiritual double/destiny negotiating individual willpower.' },
    { topicCode: 'AoE2.2', frontMarkdown: 'Key cultural institutions tracked on pp. 3, 36, 55–57 of ReligionCulture.jpg?', backMarkdown: 'pp. 3/42: 9-village wrestling & drums; p. 36: New Yam Feast / ancestral *egwugwu*; pp. 55–57: locust omen, central *obi*, supreme Oracle.' },
    { topicCode: 'COMP', frontMarkdown: 'Mandatory pairing rule for the IB English A Literature HL Individual Oral (IO)?', backMarkdown: 'Must examine ONE Global Issue across 1 work originally written in English (e.g. *Things Fall Apart*) AND 1 work studied in translation.' },
    { topicCode: 'COMP', frontMarkdown: 'Timing & weight of the Individual Oral (IO)?', backMarkdown: '10 min prepared talk + 5 min examiner Q&A (40 marks = 20% of HL grade), balancing extract (~2m) + whole work (~2m) equally for BOTH texts.' },
    { topicCode: 'COMP', frontMarkdown: 'CRHS 2026–2027 English Lit HL IO dates (Assessment Calendar)?', backMarkdown: 'Mock IOs: throughout April 2027. Final Recorded Individual Orals (IA): throughout May 2027 (non-negotiable!).' },
    { topicCode: 'COMP', frontMarkdown: 'Length, weighting & text-exclusion rule of the HL Essay?', backMarkdown: '1,200–1,500 words (20 marks = 20% HL); Grade 12 CRHS Proposal Nov 19 / Final Feb 17; text MUST NOT be reused in IO or Paper 2.' },
    { topicCode: 'AoE1.2', frontMarkdown: 'IB English Lit HL Paper 1 & Paper 2 structure and weightings?', backMarkdown: 'Paper 1: 2h15, 2 unseen commentaries (35%). Paper 2: 1h45, 1 comparative essay on 2 studied texts (25%).' },
    { topicCode: 'AoE2.1', frontMarkdown: 'Name the 7 Central IB Literature Concepts (used in HL Essay & AoEs).', backMarkdown: 'Identity, Culture, Creativity, Communication, Transformation, Perspective, Representation.' },
    { topicCode: 'AoE1.2', frontMarkdown: 'Five official IB Global Issue Areas of Inquiry for IO framing?', backMarkdown: '1) Culture, identity & community; 2) Beliefs, values & education; 3) Politics, power & justice; 4) Art, creativity & imagination; 5) Science, technology & environment.' },
  ],
  topicGuidanceNotes: {
    'AoE1.1': 'Close Reading (Food.jpg pp. 10–56): Connect physical imagery (kola nut, yams vs women’s crops, palm wine, locusts) directly to stylistic effect.',
    'AoE1.2': 'Paper 1 & Paper 2 HL Craft: Structure paragraphs around shared formal techniques and comparative pivots across works.',
    'AoE2.1': 'Things Fall Apart Context (Family.jpg pp. 4–38): Trace Unoka’s shame, "empire" compound simile (p. 20), Ikemefuna, and coercion of Nwoye.',
    'AoE2.2': 'Igbo Cosmology (ReligionCulture.jpg pp. 3–61): Pair Ani (Week of Peace, p. 30), chi (p. 14), and Oracle (p. 57) with communal balance.',
    COMP: 'CRHS Calendar: Grade 11 Mock IOs April 2027 & Final IOs May 2027 (1 English + 1 translated work); Grade 12 HL Essay (1,200–1,500w) Proposal Nov 19 / Final Feb 17.',
  },
};
