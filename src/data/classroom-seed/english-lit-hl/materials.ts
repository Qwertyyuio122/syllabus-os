import type { ClassroomSeedMaterial } from '../types';

export const ENGLISH_LIT_HL_MATERIALS: ClassroomSeedMaterial[] = [
  {
    fileName: 'IB Assessment Calendar 2026-2027.pdf',
    fileType: 'pdf',
    topicCode: 'COMP',
    externalUrl:
      'https://drive.google.com/file/d/1i1D9DD_KA9riE9c3ZbjbwSW-ttisnp1R/view?usp=drivesdk',
    extractedText: [
      'CRHS IB Assessment Calendar 2026–2027 — English A: Literature HL:',
      '- Non-negotiable school IB deadlines: Failure to submit IB internal/external components puts the Diploma in jeopardy; extensions are not granted individually.',
      '- Grade 11 Mock Individual Orals (IO): throughout April 2027.',
      '- Grade 11 Recorded Final Individual Orals (IA): throughout May 2027 (must pair 1 literary work originally written in English + 1 literary work in translation on a shared Global Issue).',
      '- Grade 12 English HL Essay Proposal due: Nov 19, 2027.',
      '- Grade 12 English HL Essay Final Submission due: Feb 17, 2028 (1,200–1,500 words on 1 non-IO/non-Paper 2 work anchored in 1 of the 7 IB Concepts).',
      '- IB Coordinator Upload deadline (EE, TOK, English HL Essay): March 15, 2028.',
    ].join('\n'),
  },
  {
    fileName: 'Family.jpg',
    fileType: 'jpg',
    topicCode: 'AoE2.1',
    externalUrl:
      'https://drive.google.com/file/d/1UNNLboHTE9gpwsi1fTdT53NJ76ycxQ92/view?usp=drivesdk',
    extractedText: [
      'Handwritten Close-Reading Tracker — "Family members and family dynamics." (Chinua Achebe, Things Fall Apart):',
      '- p. 4: Introduces Okonkwo’s father as Unoka (debt, artistic gentleness contrasted against Okonkwo’s hyper-masculine shame).',
      '- p. 8: Ikemefuna was introduced into Okonkwo’s compound as peace-settlement ward.',
      '- p. 13: (Tracked margin entry — patriarchal domestic hierarchy).',
      '- p. 18: "He [Okonkwo] started talking about how he didn’t inherit anything from father" — self-made anxiety.',
      '- p. 20: "Men in the family make like an empire with multiple wives" (first wife unnamed, Ekwefi second wife, Ojiugo third wife).',
      '- p. 27: "Ikemefuna thought of his mother and three year old sister" — quiet private longing beneath diplomatic tribute.',
      '- p. 29: "He beat his wife, showing the power dynamic trying to feel powerful."',
      '- p. 33: "Okonkwo wanted his son to be a great man, Nwoye" — coercive patriarchal pressure.',
      '- p. 38: "Okonkwo beats his family" — recurring domestic coercion and "Hierarchy in families".',
    ].join('\n'),
  },
  {
    fileName: 'Food.jpg',
    fileType: 'jpg',
    topicCode: 'AoE1.1',
    externalUrl:
      'https://drive.google.com/file/d/1iXyrEGO8KELHxN9tbVSxJc_ib3aEhdZi/view?usp=drivesdk',
    extractedText: [
      'Handwritten Quotation Log — Food Rituals, Gendered Crops & Hospitality (Chinua Achebe, Things Fall Apart):',
      '- p. 10: "on great occasions such as the funeral, a village celebration he drank palm wine out of his first human head" — martial honour.',
      '- p. 19: "He presented a kola nut and an alligator pepper" / "He took a pot of palm wine [and] a cock to Nwakibie" — sacred hospitality & sharecropping diplomacy.',
      '- p. 23: "They grew women’s crops like coco-yams, beans and cassava" vs "making rings of thick sisal leaves around the yams" — gendered agricultural hierarchy.',
      '- p. 27: "It is not true that Okonkwo’s palm kernels have been cracked for him by a benevolent spirit" — proverbial humility & self-made merit.',
      '- p. 42: "which had been dutifully eating yam peelings, dug her teeth into a real thing, scooped mouthfuls and fled from the hut to chew the cud in the goat shed."',
      '- p. 43: "she cut the yams into small pieces and began to prepare a pottage using some of the chicken."',
      '- p. 56: "the locusts settled in the bushes in the night, later they were roasted in clay pots" — collective abundance.',
    ].join('\n'),
  },
  {
    fileName: 'ReligionCulture.jpg',
    fileType: 'jpg',
    topicCode: 'AoE2.2',
    externalUrl:
      'https://drive.google.com/file/d/11ZNKYLc16OjdEZ-6VwWytm_wOjYkDZ9-/view?usp=drivesdk',
    extractedText: [
      'Handwritten Thematic Log — "Religion / Culture (Practice / Page #)" (Chinua Achebe, Things Fall Apart):',
      '- p. 3 & p. 42: The 9 villages value inter-village wrestling so much that Okonkwo is well known for wrestling; ceremonial music with drums and flutes.',
      '- p. 5 & p. 23: Being good at farming = rich & powerful + manly for bringing food; yams are a sign of wealth, power & status.',
      '- p. 13 & p. 61: Male-dominated culture = abusive male culture ("violence is the answer for something"; "showing weakness is bad").',
      '- p. 14: Igbo cosmology — personal gods (*chi*) negotiating fate and willpower.',
      '- p. 30: Worship of the Earth goddess **Ani** because Umuofia are farmers (governs Week of Peace & fertility taboos).',
      '- p. 36: The Feast of the New Yam honoring ancestral spirits (*egwugwu*).',
      '- pp. 55–57: Locusts are a good sign (p. 55); central spatial significance of the *obi* (p. 56); judicial authority of the Oracle (p. 57).',
    ].join('\n'),
  },
];

export const ENGLISH_LIT_HL_TOPIC_GUIDANCE: Record<string, string> = {
  'AoE1.1':
    'Close Reading (Food.jpg pp. 10–56): Connect physical imagery (kola nut, yams vs women’s crops, palm wine, locusts), poetic meter, free indirect discourse, and dramatic stagecraft directly to stylistic effect.',
  'AoE1.2':
    'Paper 1 & Paper 2 HL Craft: Structure paragraphs around shared formal techniques, textual gaps/ambiguity, and comparative pivots across works rather than linear plot summary.',
  'AoE2.1':
    'Things Fall Apart Context (Family.jpg pp. 4–38): Trace Unoka’s shame, "empire" compound simile (p. 20), Ikemefuna, and coercion of Nwoye against pre-colonial and colonial contexts.',
  'AoE2.2':
    'Igbo Cosmology & Works in Translation (ReligionCulture.jpg pp. 3–61): Pair Ani (Week of Peace, p. 30), chi (p. 14), and Oracle (p. 57) with communal balance; read translated literature critically for lexical and cultural alterity.',
  'AoE3.1':
    'Intertextuality & Genre: Examine how authors write back to prior traditions (Achebe vs Yeats/Conrad; Ibsen/Sophocles tragic trajectories) and transform genre conventions.',
  'AoE3.2':
    'Global Issues & Comparative Synthesis: Frame Global Issues that are significant on a wide scale, transnational, and felt in everyday local contexts across the 5 IB Fields of Inquiry.',
  COMP:
    'CRHS Calendar: Grade 11 Mock IOs April 2027 & Final IOs May 2027 (1 English + 1 translated work); Grade 12 HL Essay (1,200–1,500w) Proposal Nov 19 / Final Feb 17.',
  'COMP.1':
    'Paper 1 HL (2h 15m · 40 marks): Analyze BOTH unseen extracts from different literary forms (~65 min each), organizing by conceptual/structural movements answering the guiding question.',
  'COMP.2':
    'Paper 2 (1h 45m · 30 marks): Point-by-point comparative essay on 2 studied works NEVER reused in the IO or HL Essay.',
  'COMP.3':
    'HL Essay (1,200–1,500 words · 20 marks): Sustained line of inquiry on 1 non-IO/non-P2 work anchored in 1 of the 7 IB Concepts. CRHS Proposal Nov 19, 2027; Final Feb 17, 2028.',
  'COMP.4':
    'Individual Oral (15 min · 40 marks): Strictly 1 work originally in English + 1 work in translation (ZERO non-literary texts!) on a shared Global Issue, balanced 50/50 across ≤40-line extract and whole work.',
};
