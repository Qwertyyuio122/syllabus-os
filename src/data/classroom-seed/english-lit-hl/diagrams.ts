import type {
  ConceptComparisonMatrixSpec,
  LabeledExplorerSpec,
  LiteraryExtractAnnotatorSpec,
  StepMechanismSpec,
  WorkedExampleSpec,
} from '@/types/diagrams';

// ===========================================================================
// Guide 1 (AoE2.1): Things Fall Apart — Evidence, Yeats Epigraph & Motif Matrix
// ===========================================================================

export const ENG_V3_TFA_EVIDENCE_EXPLORER: LabeledExplorerSpec = {
  type: 'labeled_explorer',
  id: 'eng-v3-tfa-evidence-explorer',
  title: 'Things Fall Apart: CRHS Classroom Evidence Boards & Literature HL IO Architecture',
  caption:
    'Toggle layers or click any board hotspot to connect exact page citations from Family.jpg, Food.jpg, and ReligionCulture.jpg to Achebe’s linguistic craft and Literature HL IO pairing rules.',
  viewBox: '0 0 800 440',
  palette: 'scientific',
  layers: [
    { id: 'family', label: 'Family & Patriarchal Shame', defaultVisible: true },
    { id: 'food', label: 'Food Rituals & Crops', defaultVisible: true },
    { id: 'cosmology', label: 'Cosmology & Law', defaultVisible: true },
    { id: 'io-craft', label: 'HL IO Pairing Rule', defaultVisible: true },
  ],
  shapes: [
    // Ambient backdrop frame
    {
      kind: 'rect',
      x: 16,
      y: 16,
      width: 768,
      height: 408,
      rx: 22,
      fill: 'rgba(124, 58, 237, 0.04)',
      stroke: 'currentColor',
      strokeWidth: 1,
      opacity: 0.35,
    },
    // Top-Left: Family.jpg
    {
      kind: 'rect',
      x: 34,
      y: 34,
      width: 348,
      height: 172,
      rx: 16,
      fill: 'rgba(217, 119, 6, 0.13)',
      stroke: '#D97706',
      strokeWidth: 2,
      hotspotId: 'tfa-family',
      focusTags: ['tfa-family'],
      layers: ['family'],
    },
    {
      kind: 'text',
      x: 208,
      y: 66,
      text: 'Board 1: Family Dynamics (Family.jpg)',
      fontSize: 13,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: 'currentColor',
      focusTags: ['tfa-family'],
      layers: ['family'],
    },
    {
      kind: 'text',
      x: 208,
      y: 92,
      text: 'Unoka’s debt (p. 4) & zero inheritance (p. 18)',
      fontSize: 11,
      textAnchor: 'middle',
      fill: 'currentColor',
      opacity: 0.88,
      focusTags: ['tfa-family'],
      layers: ['family'],
    },
    {
      kind: 'text',
      x: 208,
      y: 114,
      text: 'Compound "like an empire with multiple wives" (p. 20)',
      fontSize: 11,
      textAnchor: 'middle',
      fill: 'currentColor',
      opacity: 0.88,
      focusTags: ['tfa-family'],
      layers: ['family'],
    },
    {
      kind: 'text',
      x: 208,
      y: 136,
      text: 'Ikemefuna’s longing (pp. 8, 27) · Nwoye coercion (p. 33)',
      fontSize: 11,
      textAnchor: 'middle',
      fill: 'currentColor',
      opacity: 0.88,
      focusTags: ['tfa-family'],
      layers: ['family'],
    },
    {
      kind: 'text',
      x: 208,
      y: 158,
      text: 'Ekwefi/Ojiugo beatings — "trying to feel powerful" (pp. 29, 38)',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      opacity: 0.82,
      focusTags: ['tfa-family'],
      layers: ['family'],
    },

    // Top-Right: Food.jpg
    {
      kind: 'rect',
      x: 418,
      y: 34,
      width: 348,
      height: 172,
      rx: 16,
      fill: 'rgba(13, 148, 136, 0.13)',
      stroke: '#0D9488',
      strokeWidth: 2,
      hotspotId: 'tfa-food',
      focusTags: ['tfa-food'],
      layers: ['food'],
    },
    {
      kind: 'text',
      x: 592,
      y: 66,
      text: 'Board 2: Food, Crops & Diplomacy (Food.jpg)',
      fontSize: 13,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: 'currentColor',
      focusTags: ['tfa-food'],
      layers: ['food'],
    },
    {
      kind: 'text',
      x: 592,
      y: 92,
      text: 'Kola nut, alligator pepper, palm wine to Nwakibie (p. 19)',
      fontSize: 11,
      textAnchor: 'middle',
      fill: 'currentColor',
      opacity: 0.88,
      focusTags: ['tfa-food'],
      layers: ['food'],
    },
    {
      kind: 'text',
      x: 592,
      y: 114,
      text: 'Sisal-ringed yams vs "women’s crops" (p. 23) · Skull cup (p. 10)',
      fontSize: 11,
      textAnchor: 'middle',
      fill: 'currentColor',
      opacity: 0.88,
      focusTags: ['tfa-food'],
      layers: ['food'],
    },
    {
      kind: 'text',
      x: 592,
      y: 136,
      text: 'Proverb: "palm kernels... cracked by a benevolent spirit" (p. 27)',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      opacity: 0.88,
      focusTags: ['tfa-food'],
      layers: ['food'],
    },
    {
      kind: 'text',
      x: 592,
      y: 158,
      text: 'Yam peelings/pottage (pp. 42–43) · Roasted locusts (p. 56)',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      opacity: 0.82,
      focusTags: ['tfa-food'],
      layers: ['food'],
    },

    // Bottom-Left: ReligionCulture.jpg
    {
      kind: 'rect',
      x: 34,
      y: 234,
      width: 348,
      height: 172,
      rx: 16,
      fill: 'rgba(124, 58, 237, 0.13)',
      stroke: '#7C3AED',
      strokeWidth: 2,
      hotspotId: 'tfa-religion',
      focusTags: ['tfa-religion'],
      layers: ['cosmology'],
    },
    {
      kind: 'text',
      x: 208,
      y: 266,
      text: 'Board 3: Religion & Civic Order (ReligionCulture.jpg)',
      fontSize: 13,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: 'currentColor',
      focusTags: ['tfa-religion'],
      layers: ['cosmology'],
    },
    {
      kind: 'text',
      x: 208,
      y: 292,
      text: '9-village wrestling, drums & flutes (pp. 3, 42)',
      fontSize: 11,
      textAnchor: 'middle',
      fill: 'currentColor',
      opacity: 0.88,
      focusTags: ['tfa-religion'],
      layers: ['cosmology'],
    },
    {
      kind: 'text',
      x: 208,
      y: 314,
      text: 'Personal chi (p. 14) · Earth goddess Ani & Week of Peace (p. 30)',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      opacity: 0.88,
      focusTags: ['tfa-religion'],
      layers: ['cosmology'],
    },
    {
      kind: 'text',
      x: 208,
      y: 336,
      text: 'New Yam Feast & ancestral egwugwu (p. 36) · Oracle (p. 57)',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      opacity: 0.88,
      focusTags: ['tfa-religion'],
      layers: ['cosmology'],
    },
    {
      kind: 'text',
      x: 208,
      y: 358,
      text: 'Locust omens (p. 55) · Obi centrality (p. 56) · Anti-weakness (pp. 13, 61)',
      fontSize: 10,
      textAnchor: 'middle',
      fill: 'currentColor',
      opacity: 0.82,
      focusTags: ['tfa-religion'],
      layers: ['cosmology'],
    },

    // Bottom-Right: IB English A: Literature HL IO Mandate
    {
      kind: 'rect',
      x: 418,
      y: 234,
      width: 348,
      height: 172,
      rx: 16,
      fill: 'rgba(37, 99, 235, 0.13)',
      stroke: '#2563EB',
      strokeWidth: 2,
      hotspotId: 'lit-hl-io',
      focusTags: ['lit-hl-io'],
      layers: ['io-craft'],
    },
    {
      kind: 'text',
      x: 592,
      y: 266,
      text: 'English A: LITERATURE HL — IO Architecture',
      fontSize: 13,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: 'currentColor',
      focusTags: ['lit-hl-io'],
      layers: ['io-craft'],
    },
    {
      kind: 'text',
      x: 592,
      y: 292,
      text: 'Pair 1 English Work (TFA) + 1 Literary Work in Translation',
      fontSize: 11,
      fontWeight: 600,
      textAnchor: 'middle',
      fill: '#2563EB',
      focusTags: ['lit-hl-io'],
      layers: ['io-craft'],
    },
    {
      kind: 'text',
      x: 592,
      y: 316,
      text: 'NEVER non-literary bodies of work (Lang & Lit only!)',
      fontSize: 11,
      fontWeight: 600,
      textAnchor: 'middle',
      fill: '#E11D48',
      focusTags: ['lit-hl-io'],
      layers: ['io-craft'],
    },
    {
      kind: 'text',
      x: 592,
      y: 340,
      text: '40-line continuous extract + whole work (50/50 split)',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      opacity: 0.88,
      focusTags: ['lit-hl-io'],
      layers: ['io-craft'],
    },
    {
      kind: 'text',
      x: 592,
      y: 362,
      text: 'CRHS Mock IOs: April 2027 · Final IOs: May 2027',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      opacity: 0.82,
      focusTags: ['lit-hl-io'],
      layers: ['io-craft'],
    },

    // Connecting Analytical Flow Arrows
    {
      kind: 'line',
      x1: 382,
      y1: 120,
      x2: 418,
      y2: 120,
      stroke: '#D97706',
      strokeWidth: 2,
      strokeDasharray: '4 4',
      animatedFlow: true,
      focusTags: ['tfa-family', 'tfa-food'],
    },
    {
      kind: 'line',
      x1: 208,
      y1: 206,
      x2: 208,
      y2: 234,
      stroke: '#7C3AED',
      strokeWidth: 2,
      strokeDasharray: '4 4',
      animatedFlow: true,
      focusTags: ['tfa-family', 'tfa-religion'],
    },
    {
      kind: 'line',
      x1: 382,
      y1: 320,
      x2: 418,
      y2: 320,
      stroke: '#2563EB',
      strokeWidth: 2,
      strokeDasharray: '4 4',
      animatedFlow: true,
      focusTags: ['tfa-religion', 'lit-hl-io'],
    },
    {
      kind: 'line',
      x1: 592,
      y1: 206,
      x2: 592,
      y2: 234,
      stroke: '#0D9488',
      strokeWidth: 2,
      strokeDasharray: '4 4',
      animatedFlow: true,
      focusTags: ['tfa-food', 'lit-hl-io'],
    },
  ],
  hotspots: [
    {
      id: 'tfa-family',
      x: 208,
      y: 185,
      label: 'Family.jpg — Masculine Shame & Domestic Empire',
      category: 'Family Dynamics',
      examKeyword: '"like an empire with multiple wives" (p. 20) · Unoka (pp. 4, 18)',
      detailMarkdown:
        '**Verbatim Classroom Citations (`Family.jpg`):** Okonkwo’s household runs *"like an empire with multiple wives"* (p. 20: unnamed first wife, **Ekwefi** second wife, **Ojiugo** third wife). Driven by **Unoka’s** debt and lack of inheritance (pp. 4, 18), Okonkwo coerces **Nwoye** to be a *"great man"* (p. 33) and beats his wives (pp. 29, 38) — *"showing the power dynamic trying to feel powerful."* Meanwhile **Ikemefuna** (p. 8) silently aches for his mother and three-year-old sister (p. 27), exposing the human cost of patriarchal diplomacy.',
    },
    {
      id: 'tfa-food',
      x: 592,
      y: 185,
      label: 'Food.jpg — Kola Diplomacy, Yams & Oral Proverbs',
      category: 'Culinary & Agrarian Codes',
      examKeyword: 'kola nut (p. 19) · "women’s crops" vs yams (p. 23) · locusts (p. 56)',
      detailMarkdown:
        '**Verbatim Classroom Citations (`Food.jpg`):** Achebe opens civil negotiations with **kola nut, alligator pepper, palm wine, and a cock to Nwakibie** (p. 19), countering colonial caricatures of pre-contact disorder. Simultaneously, food registers hierarchy: **yams ringed by thick sisal leaves** symbolize manly status against *"women’s crops like coco-yams, beans and cassava"* (p. 23); feasts celebrate war with wine drunk from *"his first human head"* (p. 10). Domestic details—yam peelings chewed in the goat shed (p. 42), chicken pottage (p. 43), and **locusts roasted in clay pots** (p. 56)—ground the novel in sensory realism alongside proverbial humility (p. 27).',
    },
    {
      id: 'tfa-religion',
      x: 208,
      y: 386,
      label: 'ReligionCulture.jpg — Chi, Ani, Egwugwu & Internal Balance',
      category: 'Igbo Cosmology',
      examKeyword: 'personal chi (p. 14) · Earth goddess Ani (p. 30) · Oracle (p. 57)',
      detailMarkdown:
        '**Verbatim Classroom Citations (`ReligionCulture.jpg`):** Umuofia fuses communal celebration—**9-village wrestling with drums and flutes** (pp. 3, 42), **New Yam Feast & ancestral *egwugwu*** (p. 36), **locusts as good omens** (p. 55)—with strict spiritual law: **personal *chi*** (p. 14), **Earth goddess Ani** (p. 30), spatial centrality of the ***obi*** (p. 56), and supreme judicial **Oracle authority** (p. 57). Because Umuofia’s rigid patriarchal ethos decrees *"showing weakness is bad"* (pp. 13, 61), Okonkwo violates **Ani’s Week of Peace**, initiating tragedy from inside before missionaries even arrive.',
    },
    {
      id: 'lit-hl-io',
      x: 592,
      y: 386,
      label: 'Literature HL IO Guardrail — Original + Translation Pairing',
      category: 'IB Assessment Rule',
      examKeyword: '1 English work + 1 translated literary work · NO non-literary texts',
      detailMarkdown:
        '**Non-Negotiable IB Literature HL Rule:** Unlike Language & Literature, **English A: Literature HL NEVER uses non-literary texts** in the Individual Oral! Pair *Things Fall Apart* (written originally in English, with embedded Igbo idioms) with a **literary work studied in translation** (e.g., Sophocles’ *Antigone*, Henrik Ibsen’s *A Doll’s House*, or Franz Kafka’s *The Metamorphosis*) under a focused Global Issue across a **≤40-line extract + whole work (50/50 split)**.',
    },
  ],
  animations: [
    {
      id: 'tfa-to-io-flow',
      label: 'Trace Classroom Evidence → IO Global Issue',
      steps: [
        {
          title: '1. Domestic Insecurity (Family.jpg)',
          detailMarkdown:
            'Okonkwo overcompensates for Unoka’s shame (pp. 4, 18) by treating his compound *"like an empire"* (p. 20) and coercing Nwoye (p. 33) and Ekwefi/Ojiugo (pp. 29, 38).',
          highlightHotspotIds: ['tfa-family'],
          activeFlowTags: ['tfa-family'],
        },
        {
          title: '2. Material & Gendered Status (Food.jpg)',
          detailMarkdown:
            'Food codes materialize status: kola nut diplomacy (p. 19) coexists with gendered division between sisal-ringed yams and *"women’s crops"* (p. 23), while proverbs warn against pride (p. 27).',
          highlightHotspotIds: ['tfa-food'],
          activeFlowTags: ['tfa-food'],
        },
        {
          title: '3. Cosmological Law Violated (ReligionCulture.jpg)',
          detailMarkdown:
            'Personal *chi* (p. 14), **Ani** (p. 30), and the **Oracle** (p. 57) require humility; Okonkwo’s fear of weakness (p. 61) breaches sacred equilibrium before colonial missionaries arrive.',
          highlightHotspotIds: ['tfa-religion'],
          activeFlowTags: ['tfa-religion'],
        },
        {
          title: '4. Synthesize in Literature HL IO',
          detailMarkdown:
            'Present a **10-minute** analysis pairing *Things Fall Apart* (English original) + 1 translated work around one narrow Global Issue (e.g., *Beliefs, values and education*), then defend in **5-minute** Q&A.',
          highlightHotspotIds: ['lit-hl-io'],
          activeFlowTags: ['lit-hl-io'],
        },
      ],
    },
  ],
};

export const ENG_V3_YEATS_EPIGRAPH_ANNOTATOR: LiteraryExtractAnnotatorSpec = {
  type: 'literary_extract_annotator',
  id: 'eng-v3-yeats-epigraph-annotator',
  title: 'Intertextual Source Study: W.B. Yeats, "The Second Coming" (1920) → Achebe’s Epigraph',
  caption:
    'Explore the complete public-domain poem from which Chinua Achebe drew the title and epigraph of Things Fall Apart. Toggle device layers and inspect Band 7 commentary.',
  workTitle: 'The Second Coming (1920)',
  author: 'W. B. Yeats',
  genre: 'Modernist Lyric Poem (Epigraph to Things Fall Apart)',
  ibConcept: 'Transformation / Perspective',
  globalIssue: 'Cultural Disintegration and Competing Visions of Historical Change',
  layers: [
    { id: 'imagery', label: 'Geometric & Bestial Imagery', color: '#7C3AED' },
    { id: 'syntax', label: 'Syntax, Caesura & Rhythm', color: '#0D9488' },
    { id: 'diction', label: 'Apocalyptic & Liturgical Diction', color: '#D97706' },
    { id: 'intertext', label: 'Achebe Counter-Discourse', color: '#2563EB' },
  ],
  passages: [
    {
      lineNumber: 1,
      segments: [
        { text: 'Turning and turning in the ', annotationId: 'y-gyre' },
        { text: 'widening gyre', annotationId: 'y-gyre' },
      ],
    },
    {
      lineNumber: 2,
      segments: [
        { text: 'The ', annotationId: 'y-falcon' },
        { text: 'falcon cannot hear the falconer;', annotationId: 'y-falcon' },
      ],
    },
    {
      lineNumber: 3,
      segments: [
        { text: 'Things fall apart; ', annotationId: 'y-caesura' },
        { text: 'the centre cannot hold;', annotationId: 'y-caesura' },
      ],
    },
    {
      lineNumber: 4,
      segments: [{ text: 'Mere anarchy is loosed upon the world,' }],
    },
    {
      lineNumber: 5,
      segments: [
        { text: 'The ', annotationId: 'y-tide' },
        { text: 'blood-dimmed tide is loosed', annotationId: 'y-tide' },
        { text: ', and everywhere' },
      ],
    },
    {
      lineNumber: 6,
      segments: [
        { text: 'The ', annotationId: 'y-ceremony' },
        { text: 'ceremony of innocence is drowned;', annotationId: 'y-ceremony' },
      ],
    },
    {
      lineNumber: 7,
      segments: [
        { text: 'The best lack all conviction, while the worst' },
      ],
    },
    {
      lineNumber: 8,
      segments: [
        { text: 'Are full of ', annotationId: 'y-intensity' },
        { text: 'passionate intensity.', annotationId: 'y-intensity' },
      ],
    },
    {
      lineNumber: 9,
      segments: [{ text: 'Surely some revelation is at hand;' }],
    },
    {
      lineNumber: 10,
      segments: [{ text: 'Surely the Second Coming is at hand.' }],
    },
    {
      lineNumber: 13,
      segments: [
        { text: 'Troubles my sight: somewhere in sands of the desert' },
      ],
    },
    {
      lineNumber: 14,
      segments: [
        { text: 'A shape with ', annotationId: 'y-sphinx' },
        { text: 'lion body and the head of a man,', annotationId: 'y-sphinx' },
      ],
    },
    {
      lineNumber: 15,
      segments: [{ text: 'A gaze blank and pitiless as the sun,' }],
    },
    {
      lineNumber: 21,
      segments: [
        { text: 'And what ', annotationId: 'y-beast' },
        { text: 'rough beast, its hour come round at last,', annotationId: 'y-beast' },
      ],
    },
    {
      lineNumber: 22,
      segments: [
        { text: 'Slouches towards Bethlehem to be born?', annotationId: 'y-beast' },
      ],
    },
  ],
  annotations: [
    {
      id: 'y-gyre',
      layerId: 'imagery',
      deviceName: 'Epizeuxis & Cyclical Gyre Metaphor (l. 1)',
      effectMarkdown:
        'Present-participle repetition (**"Turning and turning"**) mimics perpetual centrifugal spin. In Yeats’s esoteric cosmology, historical epochs spiral outward until order fractures.',
      band7Sentence:
        'Yeats opens with the kinetic epizeuxis "Turning and turning" inside a "widening gyre," encoding historical crisis not as accidental decay but as the inevitable exhaustion of a two-thousand-year cultural cycle.',
    },
    {
      id: 'y-falcon',
      layerId: 'imagery',
      deviceName: 'Broken Communication Metaphor (l. 2)',
      effectMarkdown:
        'Medieval falconry symbolizes reciprocal discipline between ruler/tradition ("falconer") and agency/force ("falcon"). Once distance severs acoustic contact, power escapes moral restraint.',
      band7Sentence:
        'Through the severed bond of "The falcon cannot hear the falconer," Yeats figures modernity’s collapse as an epistemological rupture—a breakdown echoed in Achebe when Okonkwo ceases to heed Umuofia’s elders and Ani’s Oracle.',
    },
    {
      id: 'y-caesura',
      layerId: 'syntax',
      deviceName: 'Medial Caesura & Titular Intertext (l. 3)',
      effectMarkdown:
        'The strong semicolon **caesura** bisects the line into two terse, monosyllabic clauses (*"Things fall apart; the centre cannot hold"*). Achebe appropriates the first hemistich to re-center Igbo history: for Umuofia, the British District Commissioner—not European crisis—shatters the communal center.',
      band7Sentence:
        'By slicing line 3 with a stark semicolon caesura between "Things fall apart" and "the centre cannot hold," Yeats performs syntactically the very structural fracture Achebe later recontextualizes from an anticolonial Igbo vantage point.',
    },
    {
      id: 'y-tide',
      layerId: 'diction',
      deviceName: 'Compound Adjectival Violence & Passive Voice (ll. 4–5)',
      effectMarkdown:
        'The passive construction (*"is loosed"*) removes human accountability, portraying postwar violence as an unstoppable elemental flood (*"blood-dimmed tide"*).',
      band7Sentence:
        'Yeats’s repeated passive verb "is loosed" and compound epithet "blood-dimmed tide" cast political upheaval as an impersonal deluge rather than localized agency.',
    },
    {
      id: 'y-ceremony',
      layerId: 'intertext',
      deviceName: 'Liturgical Ritual & Anticolonial Counter-Reading (l. 6)',
      effectMarkdown:
        'Yeats mourns *"The ceremony of innocence"* as drowned by anarchy. Achebe’s *Things Fall Apart* reclaims *"ceremony"* from Eurocentric nostalgia, proving pre-colonial Umuofia possessed rigorous ceremonies—kola nut diplomacy (`Food.jpg` p. 19), New Yam feasts, and *egwugwu* courts (`ReligionCulture.jpg` p. 36)—before colonial violence drowned them.',
      band7Sentence:
        'Whereas Yeats elegizes an abstract European "ceremony of innocence," Achebe concretizes Igbo ritual hospitality and *Ani* jurisprudence (`Food.jpg` p. 19; `ReligionCulture.jpg` p. 30) to expose imperialism itself as the force that drowns indigenous order.',
    },
    {
      id: 'y-intensity',
      layerId: 'diction',
      deviceName: 'Antithetical Moral Contrast (ll. 7–8)',
      effectMarkdown:
        'Paralyzed moderation (*"lack all conviction"*) is juxtaposed against destructive fanaticism (*"passionate intensity"*), a dynamic mirrored in Okonkwo’s fatal inability to bend and Rev. Smith’s absolutism.',
      band7Sentence:
        'Yeats’s moral antithesis between those who "lack all conviction" and those "full of passionate intensity" prefigures the tragic collision between Umuofia’s conciliatory elders and absolutists like Okonkwo and Reverend Smith.',
    },
    {
      id: 'y-sphinx',
      layerId: 'imagery',
      deviceName: 'Composite Mythic Vision & Pitiless Gaze (ll. 14–15)',
      effectMarkdown:
        'Hybrid anatomy (*"lion body and the head of a man"*) combined with a *"blank and pitiless"* simile evokes unfeeling imperial/historical force indifferent to human suffering.',
      band7Sentence:
        'The oxymoronic sphinx—pairing predatory animal power with cold human intellect under a "blank and pitiless" solar simile—incarnates an emerging epoch stripped of Christian mercy.',
    },
    {
      id: 'y-beast',
      layerId: 'syntax',
      deviceName: 'Trochaic Verb "Slouches" & Unresolved Interrogative (ll. 21–22)',
      effectMarkdown:
        'The heavy initial verb **"Slouches"** disrupts iambic regularity with menacing weight, while the final **rhetorical question** replaces Yeats’s earlier *"Surely"* anaphora with dread uncertainty.',
      band7Sentence:
        'Closing on the lumbering verb "Slouches" and an unanswered interrogative, Yeats overturns the prophetic certainty of "Surely" into dread—anticipating the chilling ironies of Achebe’s District Commissioner reducing Okonkwo’s life to a single paragraph.',
    },
  ],
};

export const ENG_V3_TFA_MOTIF_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'eng-v3-tfa-motif-matrix',
  title: 'Things Fall Apart: Classroom Citations → Stylistic Mechanism → IB Global Issue Synthesis',
  caption:
    'Directly synthesizes every tracked citation from Family.jpg, Food.jpg, and ReligionCulture.jpg for Paper 2 & Individual Oral preparation.',
  columns: [
    'Classroom Strand & Page Citations',
    'Primary Textual Moments',
    'Authorial Technique & Thematic Effect',
    'IO Global Issue / Concept Anchor',
  ],
  rows: [
    {
      criterion: 'Patriarchal Compound & Inherited Shame (Family.jpg)',
      cells: [
        'Unoka’s debt & flute (p. 4); zero inheritance (p. 18); household "like an empire with multiple wives" (p. 20); Ekwefi/Ojiugo beatings (pp. 29, 38).',
        'Political simile ("like an empire") + third-person limited focalization expose Okonkwo’s domestic brutality as fear-driven overcompensation rather than heroic strength.',
        'Culture, identity and community / Politics, power and justice (Concept: Identity).',
      ],
      ibExamTip:
        'Always link Okonkwo’s violence (pp. 29, 38) back to his fear of Unoka (pp. 4, 18) rather than calling him simply "evil."',
    },
    {
      criterion: 'Childhood Vulnerability & Coercion (Family.jpg)',
      cells: [
        'Ikemefuna enters as tribute (p. 8); privately misses mother & three-year-old sister (p. 27); Nwoye pressured to be a "great man" (p. 33).',
        'Focalized interiority (p. 27) injects pathos beneath clan diplomacy, foreshadowing Nwoye’s later alienation and defection to Christian hymns.',
        'Beliefs, values and education (Concept: Perspective).',
      ],
      ibExamTip:
        'Contrast Nwoye’s suppressed sensitivity with Okonkwo’s martial rigidity when analyzing generational rupture.',
    },
    {
      criterion: 'Hospitality Rituals & Gendered Crops (Food.jpg)',
      cells: [
        'Kola nut & alligator pepper + palm wine/cock to Nwakibie (p. 19); yams ringed by sisal vs "women’s crops" (p. 23); roasted locusts (p. 56).',
        'Ritual food codes dignify Igbo diplomacy and reciprocity while exposing strict agrarian gender coding inside Umuofia’s economy.',
        'Culture, identity and community (Concept: Culture / Representation).',
      ],
      ibExamTip:
        'Use p. 19 (kola nut) and p. 23 ("women’s crops") together to show Achebe neither romanticizes nor flattens Igbo society.',
    },
    {
      criterion: 'Proverbial Rhetoric & Self-Made Merit (Food.jpg)',
      cells: [
        'Drinking palm wine from first human head (p. 10); "palm kernels... cracked... by a benevolent spirit" (p. 27); yam peelings & chicken pottage (pp. 42–43).',
        'Igbo oral aphorisms embed communal philosophy into English prose—asserting meritocratic struggle while elders quietly caution against hubris.',
        'Art, creativity and the imagination (Concept: Communication).',
      ],
      ibExamTip:
        'Explain HOW Achebe’s proverbial English reclaims narrative authority from colonial chroniclers.',
    },
    {
      criterion: 'Igbo Cosmology & Internal Law (ReligionCulture.jpg)',
      cells: [
        '9-village wrestling/drums (pp. 3, 42); personal *chi* (p. 14); Earth goddess **Ani** & Week of Peace (p. 30); New Yam Feast & *egwugwu* (p. 36); Oracle (p. 57).',
        'Untranslated Igbo lexis (*chi, Ani, obi, egwugwu*) preserves spiritual autonomy; Okonkwo’s refusal to fear weakness (pp. 13, 61) triggers tragic imbalance.',
        'Beliefs, values and education (Concept: Transformation).',
      ],
      ibExamTip:
        'Crucial IO guardrail: Achebe is your ENGLISH-ORIGINAL work; pair with 1 literary WORK IN TRANSLATION!',
    },
  ],
};

// ===========================================================================
// Guide 2 (COMP): English A Literature HL Craft — Matrix, Roadmap & Concept Map
// ===========================================================================

export const ENG_V3_HL_COMPONENTS_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'eng-v3-hl-components-matrix',
  title: 'IB English A: Literature HL — Complete 4-Component Assessment & Text-Exclusion Matrix',
  caption:
    'Built directly from the IB English A: Literature Guide (May 2021+) and CRHS IB Assessment Calendar 2026–2027. No studied work may be reused across Paper 2, the HL Essay, and the IO.',
  columns: [
    'Component & Weighting',
    'Format, Duration & Word Cap',
    'Criteria & Mark Breakdown',
    'Non-Negotiable Text & CRHS Rules',
  ],
  rows: [
    {
      criterion: 'Paper 1 — Guided Literary Analysis (35% HL)',
      cells: [
        '2 hours 15 minutes · 40 marks total (20 marks × 2 essays).',
        'Criterion A (5) · B (5) · C (5) · D (5) applied separately to BOTH essays.',
        'HL students MUST write TWO full commentaries on BOTH unseen extracts (2 different forms: prose fiction, prose non-fiction, poetry, or drama). ~65 min per text.',
      ],
      ibExamTip:
        'Unlike SL (which picks 1 of 2 texts), HL requires answering BOTH passages—never spend 90 minutes on Passage 1 and starve Passage 2!',
    },
    {
      criterion: 'Paper 2 — Comparative Essay (25% HL)',
      cells: [
        '1 hour 45 minutes · 30 marks · answer 1 of 4 unseen general prompts.',
        'Criterion A (10) · B (10) · C (5) · D (5).',
        'Compare and contrast 2 studied literary works NOT used for your Individual Oral or HL Essay. Organize point-by-point (never two separate half-essays).',
      ],
      ibExamTip:
        'Interrogate every key word of the chosen prompt in your thesis and weave comparison into every single body paragraph.',
    },
    {
      criterion: 'Higher Level (HL) Essay (20% HL)',
      cells: [
        'Coursework · 1,200–1,500 words · 20 marks (external moderation).',
        'Criterion A (5) · B (5) · C (5) · D (5).',
        '1 studied work NOT used in IO or Paper 2, framed via 1 of the 7 IB Concepts. CRHS Proposal: Nov 19, 2027 · Final: Feb 17, 2028 · IB Upload: Mar 15, 2028.',
      ],
      ibExamTip:
        'Treat the HL Essay like an academic journal article—avoid plot summary and sustain a conceptual line of inquiry across all 1,200–1,500 words.',
    },
    {
      criterion: 'Individual Oral — Internal Assessment (20% HL)',
      cells: [
        '15 minutes (10 min prepared talk + 5 min teacher Q&A) · 40 marks.',
        'Criterion A (10) · B (10) · C (10) · D (10).',
        'MUST pair 1 literary work originally in English + 1 literary work in translation (≤40-line continuous extract each). CRHS Mock IOs: April 2027 · Final IOs: May 2027.',
      ],
      ibExamTip:
        'Literature HL NEVER uses non-literary bodies of work! Split your 10 minutes equally: ~1m intro, ~4m English work (2m extract + 2m whole work), ~4m translated work (2m + 2m), ~1m synthesis.',
    },
  ],
};

export const ENG_V3_HL_TIMELINE_ROADMAP: StepMechanismSpec = {
  type: 'step_mechanism',
  id: 'eng-v3-hl-timeline-roadmap',
  title: 'CRHS 2026–2028 HL Assessment & Non-Duplication Text Allocation Pipeline',
  caption:
    'Interactive execution sequence linking the 13-work HL syllabus to May 2027 IOs, Feb 2028 HL Essay, and May 2028 external papers.',
  palette: 'scientific',
  nodes: [
    {
      id: 'syllabus-13',
      x: 110,
      y: 195,
      label: '1. 13-Work Syllabus',
      sublabel: '3 AoEs · 4 Forms · Translation',
      group: 'curriculum',
    },
    {
      id: 'io-2027',
      x: 310,
      y: 115,
      label: '2. Individual Oral',
      sublabel: 'Apr/May 2027 · 1 Eng + 1 Trans',
      group: 'ia',
    },
    {
      id: 'hl-essay-2028',
      x: 500,
      y: 265,
      label: '3. HL Essay',
      sublabel: 'Nov 2027–Feb 2028 · 1 Work',
      group: 'coursework',
    },
    {
      id: 'may-2028-exams',
      x: 690,
      y: 185,
      label: '4. May 2028 Exams',
      sublabel: 'Paper 1 (40m) + Paper 2 (30m)',
      group: 'external',
    },
  ],
  edges: [
    { id: 'e1', from: 'syllabus-13', to: 'io-2027', label: 'Lock 2 works' },
    { id: 'e2', from: 'io-2027', to: 'hl-essay-2028', label: 'Exclude IO works' },
    {
      id: 'e3',
      from: 'hl-essay-2028',
      to: 'may-2028-exams',
      label: 'Reserve 2+ P2 works',
    },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Map Your 13 HL Literary Works Across AoEs, Forms, Periods & Translation',
      descriptionMarkdown:
        'IB English A: Literature HL spans **13 literary works** across all **3 Areas of Exploration** (*Readers, Writers and Texts*; *Time and Space*; *Intertextuality*), **4 literary forms** (prose fiction, prose non-fiction, poetry, drama), **3 periods**, and **2+ continents**—including required works studied in translation.',
      activeNodeIds: ['syllabus-13'],
      activeEdgeIds: [],
      metrics: [
        { label: 'Total HL Works', value: '13 Literary Texts' },
        { label: 'Non-Literary?', value: '0 (Lit HL = Literary Only)' },
        { label: 'Text Reuse Rule', value: 'Zero Overlap Across IO / HLE / P2' },
      ],
    },
    {
      stepNumber: 2,
      title: 'Grade 11 Mock & Final Individual Orals (April–May 2027 · 20%)',
      descriptionMarkdown:
        'Select **1 work originally written in English** (e.g., *Things Fall Apart*) and **1 work studied in translation** linked by one narrow **Global Issue**. Lock your **≤40-line continuous extracts** and practice the **10-minute presentation + 5-minute Q&A** for CRHS **April 2027 Mocks** and **May 2027 Final Recorded IOs**.',
      activeNodeIds: ['io-2027'],
      activeEdgeIds: ['e1'],
      metrics: [
        { label: 'CRHS Mock IO', value: 'Throughout April 2027' },
        { label: 'CRHS Final IO', value: 'Throughout May 2027' },
        { label: 'Weight & Marks', value: '20% · 40 Marks (A–D × 10)' },
      ],
    },
    {
      stepNumber: 3,
      title: 'Grade 12 Higher Level Essay (Nov 19 Proposal → Feb 17 Final · 20%)',
      descriptionMarkdown:
        'Choose **1 remaining studied work** (never used in your IO or intended for Paper 2) and formulate a razor-sharp **line of inquiry** anchored in **1 of the 7 IB Concepts**. Submit your CRHS Proposal on **November 19, 2027**, polish your **1,200–1,500 word** essay for **February 17, 2028**, ahead of the **March 15** IB Coordinator upload.',
      activeNodeIds: ['hl-essay-2028'],
      activeEdgeIds: ['e2'],
      metrics: [
        { label: 'CRHS Proposal', value: 'Nov 19, 2027' },
        { label: 'CRHS Final Due', value: 'Feb 17, 2028 (Upload Mar 15)' },
        { label: 'Word Cap', value: '1,200–1,500 Words · 20 Marks' },
      ],
    },
    {
      stepNumber: 4,
      title: 'May 2028 External Examinations: Paper 1 (35%) & Paper 2 (25%)',
      descriptionMarkdown:
        'Sit **Paper 1 (2h 15m, 40 marks)** analyzing **BOTH** unseen literary extracts from distinct genres, followed by **Paper 2 (1h 45m, 30 marks)** comparing **2 fresh studied works** (distinct from both your IO and HL Essay) point-by-point in response to one general essay prompt.',
      activeNodeIds: ['may-2028-exams'],
      activeEdgeIds: ['e3'],
      metrics: [
        { label: 'Paper 1 (35%)', value: '2h 15m · Both Texts (40m)' },
        { label: 'Paper 2 (25%)', value: '1h 45m · 2 Fresh Works (30m)' },
        { label: 'Combined External', value: '60% of HL Diploma Grade' },
      ],
    },
  ],
};

export const ENG_V3_HL_CONCEPT_EXPLORER: LabeledExplorerSpec = {
  type: 'labeled_explorer',
  id: 'eng-v3-hl-concept-explorer',
  title: 'The 7 Central IB Literature Concepts & 5 Global Issue Fields of Inquiry',
  caption:
    'Click any concept cluster or Global Issue pillar to see how IB examiners distinguish HL Essay concepts from Individual Oral Global Issues.',
  viewBox: '0 0 800 440',
  palette: 'scientific',
  layers: [
    { id: 'concepts', label: '7 Central Concepts (HL Essay / AoEs)', defaultVisible: true },
    { id: 'global-issues', label: '5 Global Issue Fields (IO)', defaultVisible: true },
  ],
  shapes: [
    // Left Column: 7 IB Concepts
    {
      kind: 'rect',
      x: 28,
      y: 26,
      width: 356,
      height: 388,
      rx: 20,
      fill: 'rgba(124, 58, 237, 0.08)',
      stroke: '#7C3AED',
      strokeWidth: 1.8,
      layers: ['concepts'],
    },
    {
      kind: 'text',
      x: 206,
      y: 56,
      text: '7 Central IB Concepts (HL Essay & AoEs)',
      fontSize: 13.5,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['concepts'],
    },
    {
      kind: 'rect',
      x: 48,
      y: 78,
      width: 316,
      height: 150,
      rx: 14,
      fill: 'rgba(124, 58, 237, 0.14)',
      stroke: '#7C3AED',
      strokeWidth: 1.5,
      hotspotId: 'concepts-self-culture',
      focusTags: ['concepts-self-culture'],
      layers: ['concepts'],
    },
    {
      kind: 'text',
      x: 206,
      y: 106,
      text: '1. Identity  ·  2. Culture  ·  3. Representation',
      fontSize: 12,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['concepts'],
    },
    {
      kind: 'text',
      x: 206,
      y: 132,
      text: 'How language constructs selfhood, heritage & subaltern voice',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      opacity: 0.85,
      layers: ['concepts'],
    },
    {
      kind: 'text',
      x: 206,
      y: 154,
      text: 'TFA: Unoka shame, yam status, District Commissioner erasure',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      opacity: 0.8,
      layers: ['concepts'],
    },
    {
      kind: 'rect',
      x: 48,
      y: 244,
      width: 316,
      height: 150,
      rx: 14,
      fill: 'rgba(37, 99, 235, 0.14)',
      stroke: '#2563EB',
      strokeWidth: 1.5,
      hotspotId: 'concepts-form-change',
      focusTags: ['concepts-form-change'],
      layers: ['concepts'],
    },
    {
      kind: 'text',
      x: 206,
      y: 272,
      text: '4. Creativity · 5. Communication · 6. Perspective · 7. Transformation',
      fontSize: 10.5,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['concepts'],
    },
    {
      kind: 'text',
      x: 206,
      y: 300,
      text: 'How form, narrative focalization, translation & intertextuality',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      opacity: 0.85,
      layers: ['concepts'],
    },
    {
      kind: 'text',
      x: 206,
      y: 320,
      text: 'reshape reader judgement across time and genre boundaries',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      opacity: 0.85,
      layers: ['concepts'],
    },

    // Right Column: 5 Global Issue Fields of Inquiry
    {
      kind: 'rect',
      x: 416,
      y: 26,
      width: 356,
      height: 388,
      rx: 20,
      fill: 'rgba(13, 148, 136, 0.08)',
      stroke: '#0D9488',
      strokeWidth: 1.8,
      layers: ['global-issues'],
    },
    {
      kind: 'text',
      x: 594,
      y: 56,
      text: '5 Global Issue Fields of Inquiry (IO)',
      fontSize: 13.5,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['global-issues'],
    },
    {
      kind: 'rect',
      x: 436,
      y: 78,
      width: 316,
      height: 98,
      rx: 12,
      fill: 'rgba(13, 148, 136, 0.14)',
      stroke: '#0D9488',
      strokeWidth: 1.4,
      hotspotId: 'gi-culture-beliefs',
      focusTags: ['gi-culture-beliefs'],
      layers: ['global-issues'],
    },
    {
      kind: 'text',
      x: 594,
      y: 104,
      text: '1) Culture, identity & community',
      fontSize: 11.5,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['global-issues'],
    },
    {
      kind: 'text',
      x: 594,
      y: 126,
      text: '2) Beliefs, values & education',
      fontSize: 11.5,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['global-issues'],
    },
    {
      kind: 'text',
      x: 594,
      y: 148,
      text: 'Ideal for TFA Family.jpg, Food.jpg & ReligionCulture.jpg!',
      fontSize: 10,
      textAnchor: 'middle',
      fill: 'currentColor',
      opacity: 0.82,
      layers: ['global-issues'],
    },
    {
      kind: 'rect',
      x: 436,
      y: 192,
      width: 316,
      height: 98,
      rx: 12,
      fill: 'rgba(217, 119, 6, 0.14)',
      stroke: '#D97706',
      strokeWidth: 1.4,
      hotspotId: 'gi-politics-art',
      focusTags: ['gi-politics-art'],
      layers: ['global-issues'],
    },
    {
      kind: 'text',
      x: 594,
      y: 218,
      text: '3) Politics, power & justice',
      fontSize: 11.5,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['global-issues'],
    },
    {
      kind: 'text',
      x: 594,
      y: 240,
      text: '4) Art, creativity & the imagination',
      fontSize: 11.5,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['global-issues'],
    },
    {
      kind: 'text',
      x: 594,
      y: 262,
      text: 'Patriarchal authority, colonial courts & subversive art',
      fontSize: 10,
      textAnchor: 'middle',
      fill: 'currentColor',
      opacity: 0.82,
      layers: ['global-issues'],
    },
    {
      kind: 'rect',
      x: 436,
      y: 306,
      width: 316,
      height: 88,
      rx: 12,
      fill: 'rgba(225, 29, 72, 0.13)',
      stroke: '#E11D48',
      strokeWidth: 1.4,
      hotspotId: 'gi-science-test',
      focusTags: ['gi-science-test'],
      layers: ['global-issues'],
    },
    {
      kind: 'text',
      x: 594,
      y: 332,
      text: '5) Science, technology & the environment',
      fontSize: 11.5,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['global-issues'],
    },
    {
      kind: 'text',
      x: 594,
      y: 356,
      text: '3 IO Tests: Wide Scale · Transnational · Everyday Local Impact',
      fontSize: 10.5,
      fontWeight: 600,
      textAnchor: 'middle',
      fill: '#E11D48',
      layers: ['global-issues'],
    },

    // Bridge arrow from Concepts to Global Issues
    {
      kind: 'line',
      x1: 384,
      y1: 220,
      x2: 416,
      y2: 220,
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeDasharray: '4 4',
      animatedFlow: true,
    },
  ],
  hotspots: [
    {
      id: 'concepts-self-culture',
      x: 206,
      y: 204,
      label: 'Identity, Culture & Representation (HL Essay Anchors)',
      category: '7 IB Concepts (Part 1)',
      examKeyword: 'Concept-driven line of inquiry (1,200–1,500 words)',
      detailMarkdown:
        'In the **HL Essay**, choose ONE concept to sharpen your thesis beyond plot summary. Example (**Representation**): *How does Chinua Achebe’s integration of untranslated Igbo terminology and proverbial syntax reclaim indigenous moral agency against colonial ethnographic erasure in Things Fall Apart?*',
    },
    {
      id: 'concepts-form-change',
      x: 206,
      y: 370,
      label: 'Creativity, Communication, Perspective & Transformation',
      category: '7 IB Concepts (Part 2)',
      examKeyword: 'Form → focalization → reader transformation',
      detailMarkdown:
        'Use **Perspective** or **Transformation** when analyzing shifting narrators, unreliable voices, epistolary frames, or translation choices (e.g., how Kafka’s clinical third-person focalization transforms familial pity into bourgeois alienation in *The Metamorphosis*).',
    },
    {
      id: 'gi-culture-beliefs',
      x: 594,
      y: 162,
      label: 'Culture, Identity & Community / Beliefs, Values & Education',
      category: 'IO Fields 1 & 2',
      examKeyword: 'Narrow focus (not just "gender" or "religion"!) ',
      detailMarkdown:
        '**From Broad Field → Narrow Global Issue:** Never state *"My Global Issue is Culture."* Narrow it! Example: *"How rigid patriarchal definitions of masculinity weaponize family and religious ritual to silence emotional vulnerability in the domestic sphere."* Ground directly in `Family.jpg` (pp. 20, 29, 33) + `ReligionCulture.jpg` (pp. 30, 61).',
    },
    {
      id: 'gi-politics-art',
      x: 594,
      y: 278,
      label: 'Politics, Power & Justice / Art, Creativity & Imagination',
      category: 'IO Fields 3 & 4',
      examKeyword: 'Institutional authority vs individual conscience',
      detailMarkdown:
        'Ideal for pairing **Achebe’s *Things Fall Apart*** (District Commissioner’s colonial court & *egwugwu* justice) with **Sophocles’ *Antigone*** (Creon’s state edict vs divine burial law) or **Ibsen’s *A Doll’s House*** (patriarchal legal-financial guardianship vs Nora’s self-authorship).',
    },
    {
      id: 'gi-science-test',
      x: 594,
      y: 380,
      label: 'Environment Field + The 3 Mandatory IO Validity Tests',
      category: 'IO Field 5 & Litmus Test',
      examKeyword: 'Significant · Transnational · Everyday Local Impact',
      detailMarkdown:
        'Field 5 examines ecological dislocation, industrial hubris, or bioethics (e.g., Shelley’s *Frankenstein*, Keats’s seasonal ecology, or Achebe’s agrarian reverence for **Ani** and the sacred yam harvest). Every Global Issue must satisfy all 3 IB criteria: **(1) wide significance, (2) transnational reach across borders/eras, (3) felt in ordinary human lives.**',
    },
  ],
};

// ===========================================================================
// Guide 3 (AoE1.1): Close Reading — Keats Poetry, Chopin Prose & Genre Matrix
// ===========================================================================

export const ENG_V3_POETIC_KEATS_ANNOTATOR: LiteraryExtractAnnotatorSpec = {
  type: 'literary_extract_annotator',
  id: 'eng-v3-poetic-keats-annotator',
  title: 'Poetic Craft Lab: John Keats, "To Autumn" — Stanza 1 (1819)',
  caption:
    'Inspect how Keats constructs lush abundance alongside looming temporal transience using tactile imagery, sibilance, enjambment, and infinitive syntax.',
  workTitle: 'To Autumn (Stanza I, 1819)',
  author: 'John Keats',
  genre: 'Romantic Ode (11-line Stanza, Iambic Pentameter)',
  ibConcept: 'Creativity / Transformation',
  globalIssue: 'Human Mortality and Temporal Transience in the Natural World',
  layers: [
    { id: 'sensory', label: 'Tactile & Organic Imagery', color: '#D97706' },
    { id: 'prosody', label: 'Acoustic Prosody & Meter', color: '#7C3AED' },
    { id: 'syntax', label: 'Infinitive Syntax & Enjambment', color: '#0D9488' },
    { id: 'personification', label: 'Apostrophe & Personification', color: '#2563EB' },
  ],
  passages: [
    {
      lineNumber: 1,
      segments: [
        { text: 'Season of ', annotationId: 'k-apostrophe' },
        { text: 'mists and mellow fruitfulness,', annotationId: 'k-apostrophe' },
      ],
    },
    {
      lineNumber: 2,
      segments: [
        { text: 'Close bosom-friend of the maturing sun;', annotationId: 'k-conspire' },
      ],
    },
    {
      lineNumber: 3,
      segments: [
        { text: 'Conspiring with him', annotationId: 'k-conspire' },
        { text: ' how to load and bless' },
      ],
    },
    {
      lineNumber: 4,
      segments: [
        { text: 'With fruit the vines that round the thatch-eves run;' },
      ],
    },
    {
      lineNumber: 5,
      segments: [
        { text: 'To bend with apples ', annotationId: 'k-infinitives' },
        { text: "the moss'd cottage-trees,", annotationId: 'k-tactile' },
      ],
    },
    {
      lineNumber: 6,
      segments: [
        { text: 'And fill all fruit with ripeness to the core;' },
      ],
    },
    {
      lineNumber: 7,
      segments: [
        { text: 'To swell the gourd, ', annotationId: 'k-infinitives' },
        { text: 'and plump the hazel shells', annotationId: 'k-tactile' },
      ],
    },
    {
      lineNumber: 8,
      segments: [
        { text: 'With a sweet kernel; to set budding more,' },
      ],
    },
    {
      lineNumber: 9,
      segments: [
        { text: 'And still more, ', annotationId: 'k-enjamb' },
        { text: 'later flowers for the bees,' },
      ],
    },
    {
      lineNumber: 10,
      segments: [
        { text: 'Until they think ', annotationId: 'k-illusion' },
        { text: 'warm days will never cease,', annotationId: 'k-illusion' },
      ],
    },
    {
      lineNumber: 11,
      segments: [
        { text: "For Summer has o'er-brimm'd their clammy cells.", annotationId: 'k-cells' },
      ],
    },
  ],
  annotations: [
    {
      id: 'k-apostrophe',
      layerId: 'prosody',
      deviceName: 'Trochaic Opening, M-Alliteration & Sibilance (l. 1)',
      effectMarkdown:
        'Opening with a **trochee** (*"SEA-son"*) before settling into iambs slows the reader’s breath, while soft nasal **"m"** sounds (*mists, mellow*) and liquid consonants cushion the line in serene ripeness.',
      band7Sentence:
        'Keats launches the ode on an inverted trochee ("Season") tempered by mellow labial alliteration ("mists and mellow"), sonically embodying a season suspended in languid fullness.',
    },
    {
      id: 'k-conspire',
      layerId: 'personification',
      deviceName: 'Intimate Personification & "Conspiring" Tone (ll. 2–3)',
      effectMarkdown:
        'Autumn and the *"maturing sun"* are cast as benevolent co-conspirators (*"Close bosom-friend"*, *"Conspiring... to load and bless"*), inverting the ominous political sense of conspiracy into generous creative collaboration.',
      band7Sentence:
        'By pairing the domestic warmth of "bosom-friend" with the paradoxical verb "Conspiring," Keats transforms natural ripening into an affectionate, deliberate plot of generosity.',
    },
    {
      id: 'k-infinitives',
      layerId: 'syntax',
      deviceName: 'Accumulative Infinitive Clauses (ll. 5–8)',
      effectMarkdown:
        'A cascade of transitive infinitives (**"to load... To bend... fill... To swell... plump... to set"**) generates syntactic saturation—the single sentence literally swells with clauses just as fruit swells on the bough.',
      band7Sentence:
        'Keats’s accumulative chain of transitive infinitives ("to load," "To bend," "To swell," "to set") mirrors the physical weight of the harvest, enacting abundance structurally before naming it.',
    },
    {
      id: 'k-tactile',
      layerId: 'sensory',
      deviceName: 'Kinetic & Tactile Plosives (ll. 5–7)',
      effectMarkdown:
        'Monosyllabic Anglo-Saxon verbs (**"bend," "fill," "swell," "plump"**) paired with textured adjectives (*"moss’d cottage-trees"*) create muscular physical density felt in the mouth.',
      band7Sentence:
        'Grounded Anglo-Saxon verbs like "bend," "swell," and "plump" anchor Romantic lyricism in palpable agricultural labor and organic weight.',
    },
    {
      id: 'k-enjamb',
      layerId: 'syntax',
      deviceName: 'Enjambment & Epizeuxis Expansion (ll. 8–9)',
      effectMarkdown:
        'Breaking *"to set budding more, / And still more"* across the line boundary forces the verse to spill past metrical limits—dramatizing unchecked natural surplus.',
      band7Sentence:
        'The enjambed hinge "more, / And still more" pushes syntax across the line break, echoing the bees’ illusory belief in boundless summer.',
    },
    {
      id: 'k-illusion',
      layerId: 'personification',
      deviceName: 'Dramatic Irony & Cognitive Focalization (l. 10)',
      effectMarkdown:
        'Shifting briefly into the bees’ naive perspective (*"Until they think warm days will never cease"*) introduces subtle **dramatic irony**: the reader knows winter follows, sharpening the poignancy of Autumn’s peak.',
      band7Sentence:
        'The temporal conjunction "Until" and the bees’ deluded focalization ("think warm days will never cease") inject quiet dramatic irony, subtly foreshadowing mortality at the zenith of abundance.',
    },
    {
      id: 'k-cells',
      layerId: 'sensory',
      deviceName: 'Over-Ripeness & Tactile Ambiguity ("clammy cells", l. 11)',
      effectMarkdown:
        'Ending the stanza on *"o’er-brimm’d their clammy cells"* tips abundance toward sticky excess—*"clammy"* carries faint somatic discomfort, bridging Stanza 1’s ripeness into Stanza 3’s elegiac dusk.',
      band7Sentence:
        'Closing on the subtly jarring adjective "clammy" alongside "o’er-brimm’d," Keats hints that supreme fruition already verges on surfeit and decay.',
    },
  ],
};

export const ENG_V3_PROSE_CHOPIN_ANNOTATOR: LiteraryExtractAnnotatorSpec = {
  type: 'literary_extract_annotator',
  id: 'eng-v3-prose-chopin-annotator',
  title: 'Prose Craft Lab: Kate Chopin, "The Story of an Hour" (1894)',
  caption:
    'Analyze free indirect discourse, structural sensory contrast, and situational irony in this classic public-domain short fiction passage.',
  workTitle: 'The Story of an Hour (1894)',
  author: 'Kate Chopin',
  genre: 'Realist Short Fiction (Third-Person Limited / Free Indirect Discourse)',
  ibConcept: 'Perspective / Identity',
  globalIssue: 'Patriarchal Domesticity and Female Psychological Autonomy',
  layers: [
    { id: 'focalization', label: 'Focalization & Psychological Shift', color: '#7C3AED' },
    { id: 'nature-symbol', label: 'Natural & Sensory Symbolism', color: '#059669' },
    { id: 'irony', label: 'Situational & Structural Irony', color: '#E11D48' },
    { id: 'syntax', label: 'Syntactic Pacing & Contrast', color: '#2563EB' },
  ],
  passages: [
    {
      lineNumber: 1,
      segments: [
        { text: 'Knowing that ', annotationId: 'c-heart' },
        { text: 'Mrs. Mallard was afflicted with a heart trouble,', annotationId: 'c-heart' },
        { text: ' great care was taken to break to her as gently as possible the news of her husband’s death.' },
      ],
    },
    {
      lineNumber: 2,
      segments: [
        { text: 'She could see in the open square before her house ', annotationId: 'c-trees' },
        { text: 'the tops of trees that were all aquiver with the new spring life.', annotationId: 'c-trees' },
      ],
    },
    {
      lineNumber: 3,
      segments: [
        { text: 'The delicious breath of rain was in the air. ', annotationId: 'c-sensory' },
        { text: 'In the street below a peddler was crying his wares. The notes of a distant song... reached her faintly, and countless sparrows were twittering in the eaves.', annotationId: 'c-sensory' },
      ],
    },
    {
      lineNumber: 4,
      segments: [
        { text: 'There were ', annotationId: 'c-sky' },
        { text: 'patches of blue sky showing here and there through the clouds', annotationId: 'c-sky' },
        { text: ' that had met and piled one above the other in the west facing her window.' },
      ],
    },
    {
      lineNumber: 5,
      segments: [
        { text: 'She sat with her head thrown back upon the cushion of the chair, quite motionless, ', annotationId: 'c-sob' },
        { text: 'except when a sob came up into her throat and shook her, as a child who has cried itself to sleep continues to sob in its dreams.', annotationId: 'c-sob' },
      ],
    },
  ],
  annotations: [
    {
      id: 'c-heart',
      layerId: 'irony',
      deviceName: 'Chekhov’s Gun & Double-Edged Metaphor ("heart trouble")',
      effectMarkdown:
        'Placed in the opening clause, *"heart trouble"* functions both literally (cardiac fragility) and metaphorically (repressed emotional confinement inside marriage)—establishing the dramatic irony of the ending.',
      band7Sentence:
        'Chopin’s opening participial phrase anchors the story in double-edged somatic irony: "heart trouble" ostensibly justifies patriarchal protection while silently naming the psychic suffocation of Louise’s marriage.',
    },
    {
      id: 'c-trees',
      layerId: 'nature-symbol',
      deviceName: 'Spatial Framing & Pathetic Inversion (l. 2)',
      effectMarkdown:
        'Contrary to tragic elegy—where mourning characters look upon withered winter landscapes—Louise gazes outside her bedroom window onto **"new spring life"** and trees *"all aquiver,"* prefiguring awakening rather than grief.',
      band7Sentence:
        'Subverting conventional mourning tropes, Chopin frames Louise’s gaze through an open window onto trees "aquiver with the new spring life," externally projecting an illicit vitality she has not yet consciously named.',
    },
    {
      id: 'c-sensory',
      layerId: 'syntax',
      deviceName: 'Multi-Sensory Parataxis & Acoustic Distance (l. 3)',
      effectMarkdown:
        'A sequence of simple declarative clauses accumulates olfactory (*"delicious breath of rain"*), commercial (*"peddler"*), musical (*"distant song"*), and avian (*"sparrows"*) sensations—widening the world beyond the stifling domestic room.',
      band7Sentence:
        'Through brisk paratactic declaratives linking rain, street commerce, and distant song, Chopin draws the vibrant public sphere directly to the threshold of Louise’s solitary chamber.',
    },
    {
      id: 'c-sky',
      layerId: 'nature-symbol',
      deviceName: 'Chiaroscuro Sky Imagery (l. 4)',
      effectMarkdown:
        '*"Patches of blue sky"* breaking through *"piled"* clouds dramatize psychological transition: grief and social duty still crowd her horizon, yet unlooked-for liberation pierces between them.',
      band7Sentence:
        'The visual chiaroscuro of "patches of blue sky" piercing heavy "piled" clouds materializes the fragile, contested emergence of Louise’s self-ownership.',
    },
    {
      id: 'c-sob',
      layerId: 'focalization',
      deviceName: 'Regressive Simile & Embodied Agency (l. 5)',
      effectMarkdown:
        'The simile *"as a child who has cried itself to sleep"* renders her grief oddly passive and bodily—a reflex shaking her throat while her rational gaze looks outward toward the sky—preparing her imminent whispered epiphany (*"Free! Body and soul free!"*).',
      band7Sentence:
        'Comparing Louise’s involuntary sob to a sleeping child’s reflex divides physical habit from waking consciousness, marking the threshold before her whispered claim to autonomy.',
    },
  ],
};

export const ENG_V3_GENRE_CRAFT_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'eng-v3-genre-craft-matrix',
  title: 'Paper 1 & AoE1.1–1.2 Multi-Genre Analytical Toolkit (Prose, Non-Fiction, Poetry & Drama)',
  caption:
    'Because IB Literature HL Paper 1 requires analyzing TWO unseen texts from DIFFERENT literary forms, never rely on generic "diction and imagery" across forms.',
  columns: [
    'Literary Form',
    'Core Structural Units',
    'Signature Authorial Devices',
    'AoE1.2 Ambiguity & Paper 1 Trap',
  ],
  rows: [
    {
      criterion: 'Prose Fiction (Novels & Short Stories)',
      cells: [
        'Focalization shifts, narrative frame, paragraph rhythm, dialogue-to-interiority ratio, temporal analepsis/prolepsis.',
        'Free indirect discourse (FID), unreliable narration, parataxis vs hypotaxis, motif patterning, spatial framing.',
        'Trap: Retelling plot events instead of asking WHO is speaking, WHO sees (focalizer), and WHY syntax shifts at turning points.',
      ],
      ibExamTip:
        'Always distinguish the narrator from the focalizer (e.g., third-person narrator adopting Okonkwo’s or Louise Mallard’s internal idioms).',
    },
    {
      criterion: 'Prose Non-Fiction (Essays, Letters, Speeches, Memoirs)',
      cells: [
        'Rhetorical arc, thesis/counter-argument, anecdotal exemplum, direct reader address, cadence.',
        'Ethos/pathos/logos, anaphora, rhetorical questions, extended conceptual metaphor (Du Bois’s "veil"), ironic understatement.',
        'Trap: Treating non-fiction as neutral "information"—literary essays and memoirs craft persona, voice, and figurative tension just like fiction.',
      ],
      ibExamTip:
        'Identify the implied audience and examine how the persona positions itself alongside or against that audience.',
    },
    {
      criterion: 'Poetry (Lyric, Narrative, Dramatic Monologue)',
      cells: [
        'Stanzaic architecture, line breaks, enjambment vs end-stopped lines, volta / tonal turn, rhyme & refrain.',
        'Meter (iambic, trochaic substitution), caesura, sibilance/plosives/assonance, apostrophe, conceits, slant rhyme.',
        'Trap: Naming devices ("uses alliteration") without linking sound/lineation directly to emotional tension or thematic turn.',
      ],
      ibExamTip:
        'Trace the poem’s structural turn (volta) and explain how the ending modifies or subverts the opening stanza.',
    },
    {
      criterion: 'Drama (Tragedy, Realist, Absurdist)',
      cells: [
        'Stage directions, proxemics (entry/exit, spatial dominance), stichomythia, monologue vs silence/pause.',
        'Dramatic irony, subtext (saying X while meaning Y), props as objective correlatives, blank verse vs prose shifts.',
        'Trap: Reading a play script like a novel—ignore stage directions, interrupted turns, and audience awareness and Criterion B collapses.',
      ],
      ibExamTip:
        'Always ask how the scene plays spatially and acoustically on stage before a live audience.',
    },
  ],
};

// ===========================================================================
// Guide 4 (AoE2.2): Works in Translation, Cultural Alterity & Context
// ===========================================================================

export const ENG_V3_KAFKA_TRANSLATION_ANNOTATOR: LiteraryExtractAnnotatorSpec = {
  type: 'literary_extract_annotator',
  id: 'eng-v3-kafka-translation-annotator',
  title: 'Translation & Perspective Lab: Franz Kafka, The Metamorphosis (1915)',
  caption:
    'Analyze how translation choices (*Ungeziefer*), clinical third-person focalization, and domestic space turn surreal transformation into socio-economic critique.',
  workTitle: 'The Metamorphosis (Die Verwandlung, 1915)',
  author: 'Franz Kafka (Work in Translation)',
  genre: 'Modernist Novella in Translation',
  ibConcept: 'Transformation / Communication',
  globalIssue: 'Economic Alienation and the Dehumanization of the Wage Earner',
  layers: [
    { id: 'translation-lexis', label: 'Translation & Lexical Alterity', color: '#E11D48' },
    { id: 'focalization', label: 'Clinical Focalization', color: '#7C3AED' },
    { id: 'spatial-body', label: 'Corporeal & Domestic Space', color: '#0D9488' },
    { id: 'ironic-tone', label: 'Deadpan Understatement', color: '#D97706' },
  ],
  passages: [
    {
      lineNumber: 1,
      segments: [
        { text: 'One morning, when Gregor Samsa woke from troubled dreams, ' },
        { text: 'he found himself transformed in his bed into a horrible vermin.', annotationId: 'kaf-ungeziefer' },
      ],
    },
    {
      lineNumber: 2,
      segments: [
        { text: 'He lay on his ', annotationId: 'kaf-armour' },
        { text: 'armour-like back,', annotationId: 'kaf-armour' },
        { text: ' and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.' },
      ],
    },
    {
      lineNumber: 3,
      segments: [
        { text: 'The bedding was hardly able to cover it and seemed ready to slide off any moment.' },
      ],
    },
    {
      lineNumber: 4,
      segments: [
        { text: 'His many legs, ', annotationId: 'kaf-legs' },
        { text: 'pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.', annotationId: 'kaf-legs' },
      ],
    },
    {
      lineNumber: 5,
      segments: [
        { text: '"What’s happened to me?" he thought. ', annotationId: 'kaf-deadpan' },
        { text: 'It wasn’t a dream.', annotationId: 'kaf-deadpan' },
      ],
    },
    {
      lineNumber: 6,
      segments: [
        { text: 'His room, ', annotationId: 'kaf-room' },
        { text: 'a proper human room although a little too small,', annotationId: 'kaf-room' },
        { text: ' lay peacefully between its four familiar walls.' },
      ],
    },
  ],
  annotations: [
    {
      id: 'kaf-ungeziefer',
      layerId: 'translation-lexis',
      deviceName: 'Untranslatable Core: German "Ungeziefer" (l. 1)',
      effectMarkdown:
        'Kafka deliberately wrote *ungeheueres Ungeziefer*—literally an **"unclean animal not fit for sacrifice"** (*monstrous vermin*), NEVER specifying "cockroach" or "beetle." Translations choosing *"gigantic insect"* domesticate and pin down an ambiguity Kafka wanted kept unsettlingly vague.',
      band7Sentence:
        'Translating Kafka’s *Ungeziefer* as "horrible vermin" rather than a zoological species preserves the German noun’s Middle High German connotation of an unclean, un-sacrificable outcast—casting alienation in moral and social terms before biological ones.',
    },
    {
      id: 'kaf-armour',
      layerId: 'spatial-body',
      deviceName: 'Protective Exoskeleton vs Domestic Vulnerability (l. 2)',
      effectMarkdown:
        'The simile **"armour-like"** (*panzerartig*) evokes defensive rigidity required by Gregor’s exhausting life as a traveling salesman, contrasted immediately with the helpless sliding bedding.',
      band7Sentence:
        'Describing Gregor’s carapace as "armour-like" externalizes the emotional defense mechanisms forced upon him as his family’s sole wage-earner, yet renders that armor grotesquely immobile.',
    },
    {
      id: 'kaf-legs',
      layerId: 'focalization',
      deviceName: 'Empathic Diminutive & Objective Focalization (l. 4)',
      effectMarkdown:
        'The adverbial pair **"pitifully thin"** and **"helplessly"** filters visual observation (*"as he looked"*) through Gregor’s bewildered consciousness without melodramatic screaming.',
      band7Sentence:
        'By anchoring observation in "as he looked," the narrator tethers surreal metamorphosis to Gregor’s calm, pitifully understated perspective—forcing readers to inhabit the absurdity from within.',
    },
    {
      id: 'kaf-deadpan',
      layerId: 'ironic-tone',
      deviceName: 'Parataxis & Deadpan Acceptance (l. 5)',
      effectMarkdown:
        'Four flat monosyllables (**"It wasn’t a dream."**) refuse Gothic exclamation, establishing the novella’s chillingly bureaucratic realism where waking up late for a train causes more panic than growing six legs.',
      band7Sentence:
        'The laconic, unadorned sentence "It wasn’t a dream" strips horror of Gothic histrionics, satirizing a bourgeois work ethic so coercive that Gregor worries about train schedules before bodily mutation.',
    },
    {
      id: 'kaf-room',
      layerId: 'spatial-body',
      deviceName: 'Claustrophobic Adjective Pairing ("proper human room", l. 6)',
      effectMarkdown:
        'Conjoining *"proper human"* with *"a little too small"* and *"four familiar walls"* turns ordinary domestic architecture into a cellular cage whose normalcy indicts the family economy inside it.',
      band7Sentence:
        'Juxtaposing "proper human room" with the qualifier "a little too small," Kafka constructs a bourgeois cage whose claustrophobic familiarity outlives Gregor’s humanity.',
    },
  ],
};

export const ENG_V3_TRANSLATION_COMPARISON_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'eng-v3-translation-comparison-matrix',
  title: 'Works in Translation (AoE2.2): Domestication vs Foreignization & Cross-Cultural Craft',
  caption:
    'Analyze translated texts with Criterion B rigor: examine cultural concepts, register shifts, and syntactic texture without attributing accidental English wordplay to the source author.',
  columns: [
    'Work & Source Language',
    'Culturally Embedded Concept / Lexis',
    'Domestication vs Foreignization Trap',
    'Band 7 IB Analytical Strategy',
  ],
  rows: [
    {
      criterion: 'Franz Kafka, The Metamorphosis (German)',
      cells: [
        '*Ungeziefer* ("unclean vermin") & *panzerartig* ("armour-like").',
        'Trap: Translating *Ungeziefer* as "cockroach" narrows existential ambiguity into entomology.',
        'Analyze *syntactic* pacing (deadpan subordinate clauses, abrupt negation) and conceptual metaphor rather than isolated English rhymes.',
      ],
      ibExamTip:
        'Never invent a close-reading argument solely on a single English sound pattern (like sibilance) in a translated text unless verified against syntax/imagery.',
    },
    {
      criterion: 'Sophocles, Antigone (Ancient Greek)',
      cells: [
        '*Nomos* (written civic edict) vs *themis / agatha nomima* (unwritten divine statutes) & *hamartia*.',
        'Trap: Flattening *themis* into modern "personal opinion" erases sacred civic-familial duty to Hades and burial.',
        'Examine structural **stichomythia** (rapid single-line verbal thrusts) and choral odes framing *hubris* across competing authorities.',
      ],
      ibExamTip:
        'Ideal IO translation partner for *Things Fall Apart*: compare Antigone’s unwritten divine laws with Umuofia’s **Ani** and Week of Peace!',
    },
    {
      criterion: 'Henrik Ibsen, A Doll’s House (Norwegian)',
      cells: [
        'Torvald’s pet names (*lille lerkefugl* / "little lark", "squirrel") vs Nora’s final legal-philosophical diction.',
        'Trap: Treating 19th-century Victorian idioms as quaint manners rather than infantilizing linguistic containment.',
        'Track register transformation across Act 1→Act 3 and stagecraft props (locked letterbox, macaroons, tarantella costume).',
      ],
      ibExamTip:
        'Stage directions and silences translate intact across languages—make them central to Criterion B drama analysis!',
    },
    {
      criterion: 'Chinua Achebe, Things Fall Apart (English + Igbo Lexis)',
      cells: [
        'Self-translated oral hybridity: *chi, Ani, obi, egwugwu, agbala* embedded unitalicized inside English.',
        'Trap: Calling Achebe’s novel "a work in translation" on your IO! It was written originally in English and counts as your ENGLISH work.',
        'Analyze how Achebe deploys **intentional foreignization** inside English to resist colonial linguistic assimilation.',
      ],
      ibExamTip:
        'Critical IO check: Achebe = English original work; Kafka/Ibsen/Sophocles = your required translated partner work.',
    },
  ],
};

export const ENG_V3_CONTEXT_RECEPTION_MECHANISM: StepMechanismSpec = {
  type: 'step_mechanism',
  id: 'eng-v3-context-reception-mechanism',
  title: 'AoE2 Time & Space Pipeline: Converting Historical Context into Literary Analysis',
  caption:
    'Avoid "history-dumping" in Paper 2 and the IO by routing context strictly through authorial/translatorial craft and reception.',
  palette: 'scientific',
  nodes: [
    {
      id: 'ctx-prod',
      x: 110,
      y: 195,
      label: '1. Context of Production',
      sublabel: 'Historical / Cultural Matrix',
      group: 'history',
    },
    {
      id: 'craft-choice',
      x: 310,
      y: 195,
      label: '2. Authorial / Trans Choice',
      sublabel: 'Form, Lexis & Focalization',
      group: 'craft',
    },
    {
      id: 'textual-proof',
      x: 505,
      y: 195,
      label: '3. Micro-Quotation',
      sublabel: 'Grounded Close Reading',
      group: 'evidence',
    },
    {
      id: 'ctx-rec',
      x: 695,
      y: 195,
      label: '4. Context of Reception',
      sublabel: 'Modern Reader & Global Issue',
      group: 'reception',
    },
  ],
  edges: [
    { id: 'c1', from: 'ctx-prod', to: 'craft-choice', label: 'Motivates form' },
    { id: 'c2', from: 'craft-choice', to: 'textual-proof', label: 'Encoded in' },
    { id: 'c3', from: 'textual-proof', to: 'ctx-rec', label: 'Resonates today' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: '1. Anchor Context of Production Without Biography Dumping',
      descriptionMarkdown:
        'Identify the specific cultural/historical pressure—e.g., 1958 late-colonial Nigeria in which European novels portrayed Africa as mute wilderness (Conrad’s *Heart of Darkness*, Joyce Cary’s *Mister Johnson*), OR 1879 bourgeois Norwegian patriarchal marriage law.',
      activeNodeIds: ['ctx-prod'],
      activeEdgeIds: [],
      metrics: [
        { label: 'Criterion Risk', value: 'Max 4–5/10 if Pure History' },
        { label: 'Rule', value: 'Context Serves Text, Never Replaces It' },
      ],
    },
    {
      stepNumber: 2,
      title: '2. Trace How Context Shapes Literary & Translatorial Craft',
      descriptionMarkdown:
        'Ask: **How did that historical reality alter the text’s form?** Achebe responds by grafting Igbo proverbial cadence and vernacular lexicon (*chi, Ani, obi*) onto English tragedy; Kafka externalizes turn-of-the-century bureaucratic alienation via surreal deadpan syntax.',
      activeNodeIds: ['craft-choice'],
      activeEdgeIds: ['c1'],
      metrics: [
        { label: 'Criterion B Boost', value: 'Form + Context Synthesis' },
        { label: 'Translation Check', value: 'Check Lexical & Register Mediation' },
      ],
    },
    {
      stepNumber: 3,
      title: '3. Pinpoint Exact Textual Evidence (Pages & Micro-Quotes)',
      descriptionMarkdown:
        'Prove the claim using verbatim micro-evidence—such as `Food.jpg` p. 19 (kola nut diplomacy) or p. 27 (*"palm kernels... cracked... by a benevolent spirit"*), or `Family.jpg` p. 20 (*"like an empire with multiple wives"*).',
      activeNodeIds: ['textual-proof'],
      activeEdgeIds: ['c2'],
      metrics: [
        { label: 'Criterion A', value: '2–6 Word Embedded Quotes' },
        { label: 'Page Precision', value: 'Anchor Scene & Whole-Work Arc' },
      ],
    },
    {
      stepNumber: 4,
      title: '4. Evaluate Shifting Contexts of Reception & Modern Global Relevance',
      descriptionMarkdown:
        'Interrogate how audiences across eras read the text differently: whereas 19th-century audiences gasped at Nora’s slammed door or missed Okonkwo’s self-destructiveness, 21st-century IB readers recognize intersections of gendered trauma, colonial erasure, and ecological balance.',
      activeNodeIds: ['ctx-rec'],
      activeEdgeIds: ['c3'],
      metrics: [
        { label: 'AoE2 Core Question', value: 'Original Audience vs Modern Reader' },
        { label: 'IO / P2 Payoff', value: 'Transnational Significance' },
      ],
    },
  ],
};

// ===========================================================================
// Guide 5 (AoE3.1–3.2): Intertextuality, Antigone, Paper 2 & Tragedy Lab
// ===========================================================================

export const ENG_V3_INTERTEXTUAL_ANTIGONE_ANNOTATOR: LiteraryExtractAnnotatorSpec = {
  type: 'literary_extract_annotator',
  id: 'eng-v3-intertextual-antigone-annotator',
  title: 'Intertextual Drama Lab: Sophocles, Antigone (ll. 450–460, Trans. R.C. Jebb)',
  caption:
    'Analyze Antigone’s defiance of Creon alongside Things Fall Apart (Ani’s Week of Peace & Oracle authority) as a model IO/Paper 2 intertextual pairing.',
  workTitle: 'Antigone (c. 441 BCE · Trans. R. C. Jebb, 1891)',
  author: 'Sophocles',
  genre: 'Classical Greek Tragedy (Drama in Translation)',
  ibConcept: 'Perspective / Culture',
  globalIssue: 'Collision Between State Authority and Sacred/Ancestral Law',
  layers: [
    { id: 'rhetoric', label: 'Antithetical & Forensic Rhetoric', color: '#2563EB' },
    { id: 'cosmology-law', label: 'Divine vs Mortal Law', color: '#7C3AED' },
    { id: 'hubris-irony', label: 'Tragic Hubris & Irony', color: '#E11D48' },
    { id: 'tfa-intertext', label: 'Dialogue with Things Fall Apart', color: '#0D9488' },
  ],
  passages: [
    {
      lineNumber: 450,
      segments: [
        { text: 'Yes; for it was ', annotationId: 'ant-zeus' },
        { text: 'not Zeus that had published me that edict;', annotationId: 'ant-zeus' },
      ],
    },
    {
      lineNumber: 451,
      segments: [
        { text: 'not such are the laws set among men by ', annotationId: 'ant-justice' },
        { text: 'the Justice who dwells with the gods below;', annotationId: 'ant-justice' },
      ],
    },
    {
      lineNumber: 453,
      segments: [
        { text: 'nor deemed I that ', annotationId: 'ant-mortal' },
        { text: 'thy decrees were of such force, that a mortal could override', annotationId: 'ant-mortal' },
      ],
    },
    {
      lineNumber: 454,
      segments: [
        { text: 'the ', annotationId: 'ant-unwritten' },
        { text: 'unwritten and unfailing statutes of heaven.', annotationId: 'ant-unwritten' },
      ],
    },
    {
      lineNumber: 456,
      segments: [
        { text: 'For their life is ', annotationId: 'ant-timeless' },
        { text: 'not of to-day or yesterday, but from all time,', annotationId: 'ant-timeless' },
        { text: ' and no man knows when they were first put forth.' },
      ],
    },
  ],
  annotations: [
    {
      id: 'ant-zeus',
      layerId: 'rhetoric',
      deviceName: 'Emphatic Negation & Legal Counter-Verb ("published", l. 450)',
      effectMarkdown:
        'Antigone answers Creon’s interrogation with an uncompromising *"Yes;"* followed by negative syntax (*"not Zeus"*), seizing the civic verb *"published"* (*ekēruxen* — proclaimed by herald) to delegitimize Creon’s decree.',
      band7Sentence:
        'By opening with an unqualified affirmative ("Yes") followed by negative syntax contrasting "Zeus" with Creon’s heralded decree, Antigone usurps forensic authority inside a male-dominated civic court.',
    },
    {
      id: 'ant-justice',
      layerId: 'cosmology-law',
      deviceName: 'Personified Chthonic Justice (*Dikē*, ll. 451–452)',
      effectMarkdown:
        'Invoking *"the Justice who dwells with the gods below"* unites Olympian sky (Zeus) and subterranean underworld (Hades), asserting that kinship burial obligations belong to sacred cosmic equilibrium.',
      band7Sentence:
        'Personifying chthonic "Justice" alongside Zeus anchors Antigone’s rebellion not in anarchic whim but in total cosmic obligation—paralleling Umuofia’s reverence for Earth goddess Ani (`ReligionCulture.jpg` p. 30).',
    },
    {
      id: 'ant-mortal',
      layerId: 'hubris-irony',
      deviceName: 'Diminishing Demonstrative & Temporal Contrast (ll. 453–454)',
      effectMarkdown:
        'Placing **"thy decrees"** alongside the blunt noun **"a mortal"** (*thnēton onta*) cuts King Creon down to finite human scale—crystallizing tragic *hubris* before Tiresias prophesies his ruin.',
      band7Sentence:
        'Antigone’s sharp juxtaposition of "thy decrees" with the humbling noun "a mortal" exposes Creon’s sovereign confidence as hubristic overreach against eternal cosmic bounds.',
    },
    {
      id: 'ant-unwritten',
      layerId: 'tfa-intertext',
      deviceName: 'Paradoxical Oxymoron ("unwritten and unfailing statutes", l. 455)',
      effectMarkdown:
        'In literate Athens, *"statutes"* (*nomima*) implies carved stone tablets; calling divine laws **"unwritten"** yet **"unfailing"** privileges oral ancestral tradition over transient state text—a stunning parallel to Achebe’s oral Igbo jurisprudence vs the District Commissioner’s written book.',
      band7Sentence:
        'The paradox of "unwritten and unfailing statutes" elevates ancestral oral piety above codified decree—an intertextual tension Achebe later reimagines when Umuofia’s sacred customs collide with British written courts.',
    },
    {
      id: 'ant-timeless',
      layerId: 'cosmology-law',
      deviceName: 'Merism & Epistemic Humility (ll. 456–457)',
      effectMarkdown:
        'Dismissing *"to-day or yesterday"* in favor of *"all time"* situates human law within deep humility (*"no man knows"*), contrasting Creon’s (and Okonkwo’s) stubborn insistence on immediate masculine control.',
      band7Sentence:
        'Through the temporal merism "not of to-day or yesterday, but from all time," Sophocles frames true justice as transcendent mystery rather than a ruler’s disposable instrument.',
    },
  ],
};

export const ENG_V3_PAPER2_WORKED_EXAMPLE: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'eng-v3-paper2-worked-example',
  title: 'Band 7 Paper 2 Comparative Paragraph Lab: Point-by-Point Synthesis',
  caption:
    'Reveal each stage of a Criterion A–D Band 7 comparative body paragraph pairing Things Fall Apart with Antigone (note: for real IB exams, ensure neither work is used in your IO or HL Essay!).',
  sourceLabel: 'Paper 2 (Comparative Essay · 30 Marks)',
  commandTerm: 'Compare and contrast',
  marks: 10,
  problemMarkdown:
    '**Sample IB Paper 2 Prompt:** *"To what extent do two works you have studied portray the clash between rigid personal pride and communal or sacred balance as the root of tragedy?"* Inspect how a Band 7 body paragraph weaves **point-by-point comparison** continuously.',
  givenData: [
    { label: 'Work A', value: 'Chinua Achebe, Things Fall Apart' },
    { label: 'Work B', value: 'Sophocles, Antigone' },
    { label: 'Paper 2 Weights', value: 'A (10) · B (10) · C (5) · D (5)' },
    { label: 'Method', value: 'Point-by-Point Comparative Pivot' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Step 1 — Comparative Conceptual Topic Sentence (Focus + Prompt)',
      workingMarkdown:
        'Both Achebe and Sophocles locate tragic collapse in masculine leaders whose dread of perceived weakness compels them to violate **sacred communal law** long before external catastrophe strikes—yet whereas Achebe exposes this flaw through **domestic interiority**, Sophocles stages it as **public civic debate**.',
      markCode: 'C1',
      rationale:
        'Criterion C rewards conceptual topic sentences that establish BOTH a shared thematic argument and an immediate formal contrast.',
    },
    {
      stepNumber: 2,
      title: 'Step 2 — Ground Work A + Authorial Technique (Things Fall Apart)',
      workingMarkdown:
        'In *Things Fall Apart*, third-person limited focalization links Okonkwo’s domestic violence—treating his compound *"like an empire with multiple wives"* (`Family.jpg` p. 20) and beating Ojiugo and Ekwefi (pp. 29, 38)—directly to shame over Unoka’s debt (pp. 4, 18). When Okonkwo breaks **Ani’s Week of Peace** (`ReligionCulture.jpg` p. 30), Achebe uses untranslated Igbo cosmology (*Ani*, personal *chi* p. 14) to demonstrate that tragic hubris ruptures indigenous harmony from within.',
      markCode: 'A1 + B1',
      rationale:
        'Embeds precise micro-evidence and names formal choices (focalization, imperial simile, vernacular Igbo lexis) rather than summarizing plot.',
    },
    {
      stepNumber: 3,
      title: 'Step 3 — Comparative Pivot & Formal Contrast with Work B (Antigone)',
      workingMarkdown:
        '**Conversely**, Sophocles externalizes an analogous dread of emasculation not inside a private *obi* (`ReligionCulture.jpg` p. 56) but inside formal **stichomythia** and public decree. Where Okonkwo fears becoming *agbala* and silences Nwoye (`Family.jpg` p. 33), Creon vows *"no woman shall rule me,"* elevating mortal *nomos* above the *"unwritten and unfailing statutes"* of Zeus and chthonic Justice (l. 455).',
      markCode: 'B2',
      rationale:
        'Explicit comparative connective ("Conversely / Where...") analyzes HOW dramatic dialogue vs third-person prose achieve distinct emotional effects.',
    },
    {
      stepNumber: 4,
      title: 'Step 4 — Evaluative Synthesis Answering "To What Extent"',
      workingMarkdown:
        '**Crucially**, however, Achebe limits the autonomy of pure personal *hubris* by introducing imperial force: while Creon’s tragedy ends internally through domestic suicide and civic mourning, Okonkwo’s rigid resistance collides fatally with British colonial courts—showing personal rigidity and historical coercion act as interlocking causes.',
      markCode: 'A2 + D1',
      rationale:
        'Criterion A top bands directly evaluate the prompt’s qualifier ("To what extent") by weighing internal hamartia against external imperialism.',
    },
  ],
  finalAnswerMarkdown:
    '**Complete Band 7 Model Paragraph Ready for Paper 2:** Conceptual opening → *TFA* close evidence + technique → explicit pivot into *Antigone* dramatic form → nuanced evaluative nuance answering *to what extent*.',
  commonTrapMarkdown:
    '**Top Paper 2 Failure Mode (Block Essay Trap):** Writing 3 paragraphs entirely about *Things Fall Apart* followed by 3 paragraphs about *Antigone* with only a brief conclusion linking them. Always integrate BOTH authors inside every body paragraph!',
};

export const ENG_V3_TRAGIC_ARCHITECTURE_EXPLORER: LabeledExplorerSpec = {
  type: 'labeled_explorer',
  id: 'eng-v3-tragic-architecture-explorer',
  title: 'Intertextual Tragedy Architecture: Classical Greek → Igbo Post-Colonial → Modern Realist',
  caption:
    'Compare how tragic structure transforms across eras and cultures for AoE3.1 Intertextuality and Paper 2 synthesis.',
  viewBox: '0 0 800 440',
  palette: 'scientific',
  layers: [
    { id: 'classical', label: 'Classical Tragedy (Sophocles / Shakespeare)', defaultVisible: true },
    { id: 'postcolonial', label: 'Post-Colonial Tragedy (Achebe)', defaultVisible: true },
    { id: 'modern', label: 'Modern Realist Drama (Ibsen)', defaultVisible: true },
  ],
  shapes: [
    // Pillar 1: Classical
    {
      kind: 'rect',
      x: 30,
      y: 44,
      width: 230,
      height: 352,
      rx: 18,
      fill: 'rgba(124, 58, 237, 0.12)',
      stroke: '#7C3AED',
      strokeWidth: 2,
      hotspotId: 'trag-classical',
      focusTags: ['trag-classical'],
      layers: ['classical'],
    },
    {
      kind: 'text',
      x: 145,
      y: 78,
      text: '1. Classical Tragedy',
      fontSize: 13.5,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['classical'],
    },
    {
      kind: 'text',
      x: 145,
      y: 102,
      text: 'Antigone · Macbeth',
      fontSize: 11,
      fontWeight: 600,
      textAnchor: 'middle',
      fill: '#7C3AED',
      layers: ['classical'],
    },
    {
      kind: 'text',
      x: 145,
      y: 142,
      text: 'Aristotelian Arc:',
      fontSize: 11,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['classical'],
    },
    {
      kind: 'text',
      x: 145,
      y: 164,
      text: 'Hamartia (Error/Hubris)',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['classical'],
    },
    {
      kind: 'text',
      x: 145,
      y: 186,
      text: '↓',
      fontSize: 12,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['classical'],
    },
    {
      kind: 'text',
      x: 145,
      y: 208,
      text: 'Peripeteia (Reversal)',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['classical'],
    },
    {
      kind: 'text',
      x: 145,
      y: 230,
      text: '↓',
      fontSize: 12,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['classical'],
    },
    {
      kind: 'text',
      x: 145,
      y: 252,
      text: 'Anagnorisis (Recognition)',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['classical'],
    },
    {
      kind: 'text',
      x: 145,
      y: 274,
      text: '↓',
      fontSize: 12,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['classical'],
    },
    {
      kind: 'text',
      x: 145,
      y: 296,
      text: 'Catharsis & Civic Chorus',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['classical'],
    },

    // Pillar 2: Post-Colonial
    {
      kind: 'rect',
      x: 285,
      y: 44,
      width: 230,
      height: 352,
      rx: 18,
      fill: 'rgba(217, 119, 6, 0.13)',
      stroke: '#D97706',
      strokeWidth: 2,
      hotspotId: 'trag-achebe',
      focusTags: ['trag-achebe'],
      layers: ['postcolonial'],
    },
    {
      kind: 'text',
      x: 400,
      y: 78,
      text: '2. Post-Colonial Tragedy',
      fontSize: 13.5,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['postcolonial'],
    },
    {
      kind: 'text',
      x: 400,
      y: 102,
      text: 'Achebe, Things Fall Apart',
      fontSize: 11,
      fontWeight: 600,
      textAnchor: 'middle',
      fill: '#D97706',
      layers: ['postcolonial'],
    },
    {
      kind: 'text',
      x: 400,
      y: 142,
      text: 'Dual Tragic Collision:',
      fontSize: 11,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['postcolonial'],
    },
    {
      kind: 'text',
      x: 400,
      y: 164,
      text: 'Internal: Chi vs Ani (pp. 14, 30)',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['postcolonial'],
    },
    {
      kind: 'text',
      x: 400,
      y: 186,
      text: '↓',
      fontSize: 12,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['postcolonial'],
    },
    {
      kind: 'text',
      x: 400,
      y: 208,
      text: 'External: Missionaries & Courts',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['postcolonial'],
    },
    {
      kind: 'text',
      x: 400,
      y: 230,
      text: '↓',
      fontSize: 12,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['postcolonial'],
    },
    {
      kind: 'text',
      x: 400,
      y: 252,
      text: 'Anti-Cathartic Irony:',
      fontSize: 10.5,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['postcolonial'],
    },
    {
      kind: 'text',
      x: 400,
      y: 274,
      text: 'District Commissioner’s',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['postcolonial'],
    },
    {
      kind: 'text',
      x: 400,
      y: 294,
      text: 'Single-Paragraph Erasure',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['postcolonial'],
    },

    // Pillar 3: Modern Realist
    {
      kind: 'rect',
      x: 540,
      y: 44,
      width: 230,
      height: 352,
      rx: 18,
      fill: 'rgba(13, 148, 136, 0.13)',
      stroke: '#0D9488',
      strokeWidth: 2,
      hotspotId: 'trag-modern',
      focusTags: ['trag-modern'],
      layers: ['modern'],
    },
    {
      kind: 'text',
      x: 655,
      y: 78,
      text: '3. Modern Realist Drama',
      fontSize: 13.5,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['modern'],
    },
    {
      kind: 'text',
      x: 655,
      y: 102,
      text: 'Ibsen, A Doll’s House',
      fontSize: 11,
      fontWeight: 600,
      textAnchor: 'middle',
      fill: '#0D9488',
      layers: ['modern'],
    },
    {
      kind: 'text',
      x: 655,
      y: 142,
      text: 'Bourgeois Subversion:',
      fontSize: 11,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['modern'],
    },
    {
      kind: 'text',
      x: 655,
      y: 164,
      text: 'Ordinary Middle-Class Parlor',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['modern'],
    },
    {
      kind: 'text',
      x: 655,
      y: 186,
      text: '↓',
      fontSize: 12,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['modern'],
    },
    {
      kind: 'text',
      x: 655,
      y: 208,
      text: 'Subtext & Domestic Props',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['modern'],
    },
    {
      kind: 'text',
      x: 655,
      y: 230,
      text: '↓',
      fontSize: 12,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['modern'],
    },
    {
      kind: 'text',
      x: 655,
      y: 252,
      text: 'Unresolved "Discussion"',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['modern'],
    },
    {
      kind: 'text',
      x: 655,
      y: 274,
      text: '↓',
      fontSize: 12,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['modern'],
    },
    {
      kind: 'text',
      x: 655,
      y: 296,
      text: 'The Slammed Door (No Death)',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: 'currentColor',
      layers: ['modern'],
    },

    // Intertextual connecting arrows
    {
      kind: 'line',
      x1: 260,
      y1: 220,
      x2: 285,
      y2: 220,
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeDasharray: '4 4',
      animatedFlow: true,
    },
    {
      kind: 'line',
      x1: 515,
      y1: 220,
      x2: 540,
      y2: 220,
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeDasharray: '4 4',
      animatedFlow: true,
    },
  ],
  hotspots: [
    {
      id: 'trag-classical',
      x: 145,
      y: 356,
      label: 'Classical Tragedy: Hamartia, Recognition & Civic Purgation',
      category: 'Aristotelian Tradition',
      examKeyword: 'high-status protagonist · hubris · choral moral frame',
      detailMarkdown:
        'In *Antigone* and *Macbeth*, noble protagonists confront cosmic law. Recognition (*anagnorisis*) arrives too late to spare loved ones, yet restores sacred balance for the surviving community.',
    },
    {
      id: 'trag-achebe',
      x: 400,
      y: 356,
      label: 'Post-Colonial Revision: Refusing Colonial Catharsis',
      category: 'Achebe’s Subversion',
      examKeyword: 'Yeats epigraph + District Commissioner anti-climax',
      detailMarkdown:
        'Achebe adapts classical tragedy’s dignity to a self-made Igbo farmer (`Food.jpg` p. 27), then **shatters Aristotelian catharsis** on the final page: instead of communal mourning, the District Commissioner reduces Okonkwo to an ethnographic footnote—forcing readers into political indignation.',
    },
    {
      id: 'trag-modern',
      x: 655,
      y: 356,
      label: 'Modern Realist Drama: Domestic Stagecraft & Open Endings',
      category: 'Ibsen’s Innovation',
      examKeyword: 'fourth wall · subtext · slammed door replaces tragic corpse',
      detailMarkdown:
        'Ibsen strips away kings, choruses, and poetic soliloquies, staging tragedy inside a single bourgeois parlor where an offstage slammed door replaces death and compels audiences outside the theater to confront patriarchal law.',
    },
  ],
};

// ===========================================================================
// Guide 6 (COMP.1, COMP.3 & COMP.4): Paper 1 Non-Fiction, P1 Essay & IO Lab
// ===========================================================================

export const ENG_V3_P1_DUBOIS_ANNOTATOR: LiteraryExtractAnnotatorSpec = {
  type: 'literary_extract_annotator',
  id: 'eng-v3-p1-dubois-annotator',
  title: 'Paper 1 Unseen Prose Non-Fiction Lab: W.E.B. Du Bois, The Souls of Black Folk (1903)',
  caption:
    'Practice HL Paper 1 unseen commentary on literary prose non-fiction: examine voice, extended metaphor ("the veil"), rhetorical irony, and reader positioning.',
  workTitle: 'The Souls of Black Folk, Chapter I (1903)',
  author: 'W. E. B. Du Bois',
  genre: 'Prose Non-Fiction / Philosophical Essay',
  ibConcept: 'Perspective / Representation',
  globalIssue: 'Racialized Double-Consciousness and Performative Social Dialogue',
  layers: [
    { id: 'rhetorical-voice', label: 'Rhetorical Voice & Dialogue', color: '#2563EB' },
    { id: 'extended-metaphor', label: 'Extended Metaphor ("The Veil")', color: '#7C3AED' },
    { id: 'syntax-cadence', label: 'Syntax & Anaphora', color: '#0D9488' },
    { id: 'reader-position', label: 'Irony & Reader Positioning', color: '#D97706' },
  ],
  passages: [
    {
      lineNumber: 1,
      segments: [
        { text: 'Between me and the other world ', annotationId: 'db-between' },
        { text: 'there is ever an unasked question: ', annotationId: 'db-between' },
        { text: 'unasked by some through feelings of delicacy; by others through the difficulty of rightly framing it.', annotationId: 'db-anadiplosis' },
      ],
    },
    {
      lineNumber: 2,
      segments: [
        { text: 'They approach me in a half-hesitant sort of way, eye me curiously or compassionately, and then, instead of saying directly, ' },
        { text: 'How does it feel to be a problem?', annotationId: 'db-problem' },
        { text: ' they say, I know an excellent colored man in my town; or, I fought at Mechanicsville...' },
      ],
    },
    {
      lineNumber: 3,
      segments: [
        { text: 'At these I smile, or am interested, or ', annotationId: 'db-boil' },
        { text: 'reduce the boiling to a simmer, as the occasion may require.', annotationId: 'db-boil' },
        { text: ' To the real question, How does it feel to be a problem? ', annotationId: 'db-silence' },
        { text: 'I answer seldom a word.', annotationId: 'db-silence' },
      ],
    },
    {
      lineNumber: 4,
      segments: [
        { text: 'After the Egyptian and Indian, the Greek and Roman, the Teuton and Mongolian, ', annotationId: 'db-seventh' },
        { text: 'the Negro is a sort of seventh son, born with a veil, and gifted with second-sight in this American world,—', annotationId: 'db-veil' },
      ],
    },
    {
      lineNumber: 5,
      segments: [
        { text: 'a world which yields him no true self-consciousness, but only lets him see himself through the revelation of the other world.', annotationId: 'db-mirror' },
      ],
    },
  ],
  annotations: [
    {
      id: 'db-between',
      layerId: 'reader-position',
      deviceName: 'Spatial Preposition & Polarity ("Between me and the other world", l. 1)',
      effectMarkdown:
        'Opening on *"Between"* establishes an architectural divide separating the first-person *"me"* from *"the other world"* (white American society)—forcing readers immediately to diagnose which side of the divide they inhabit.',
      band7Sentence:
        'Du Bois initiates the essay with the spatial preposition "Between," cleaving the opening clause between an intimate first-person "me" and an alienated "other world" to dramatize racial segregation before naming race.',
    },
    {
      id: 'db-anadiplosis',
      layerId: 'syntax-cadence',
      deviceName: 'Anadiplosis & Balanced Parallelism (l. 1)',
      effectMarkdown:
        'Repeating *"unasked"* across the colon (*"unasked question: unasked by some..."*) paired with antithetical semicolons (*"through feelings of delicacy; by others through the difficulty"*) imparts measured judicial composure while indicting polite evasion.',
      band7Sentence:
        'Through disciplined anadiplosis ("unasked question: unasked by some") and balanced semicolon clauses, Du Bois adopts an authoritative sociological poise that exposes white conversational evasion.',
    },
    {
      id: 'db-problem',
      layerId: 'rhetorical-voice',
      deviceName: 'Unquoted Hypophora & Blunt Direct Question (l. 2)',
      effectMarkdown:
        'Stripping away polite euphemisms to articulate the silent subtext—*"How does it feel to be a problem?"*—confronts the reader bluntly with how white condescension reduces a human subject into an abstract social pathology.',
      band7Sentence:
        'By translating white small talk into the unvarnished interrogative "How does it feel to be a problem?", Du Bois strips away liberal politeness to unmask the dehumanizing premise beneath "compassionate" curiosity.',
    },
    {
      id: 'db-boil',
      layerId: 'reader-position',
      deviceName: 'Culinary Understatement & Controlled Masking (l. 3)',
      effectMarkdown:
        'Responding to *"make your blood boil"* by wryly *"reduc[ing] the boiling to a simmer"* turns an emotional cliché into biting irony—depicting the exhausting emotional labor required to keep white interlocutors comfortable.',
      band7Sentence:
        'Du Bois’s dry culinary metaphor of "reduc[ing] the boiling to a simmer" converts white interlocutors’ cliché into understated satire, revealing the calculated self-regulation demanded of Black citizens.',
    },
    {
      id: 'db-silence',
      layerId: 'syntax-cadence',
      deviceName: 'Syntactic Inversion & Deliberate Reticence (l. 3)',
      effectMarkdown:
        'Fronting the prepositional object before the brief clause **"I answer seldom a word"** lends biblical gravity to his silence—refusing to validate an illegitimate premise.',
      band7Sentence:
        'Inverting standard word order to conclude the paragraph on "I answer seldom a word," Du Bois transforms silence from powerlessness into dignified refusal.',
    },
    {
      id: 'db-seventh',
      layerId: 'syntax-cadence',
      deviceName: 'World-Historical Periodic Cadence (l. 4)',
      effectMarkdown:
        'Cataloging six world civilizations in parallel pairs before naming *"a sort of seventh son"* elevates Black American experience onto the epic plane of global human history.',
      band7Sentence:
        'Du Bois’s sweeping periodic catalogue of six ancient and modern civilizations frames Black consciousness not as parochial grievance but as the seventh epoch of world-historical civilization.',
    },
    {
      id: 'db-veil',
      layerId: 'extended-metaphor',
      deviceName: 'Biblical & Folkloric Paradox ("born with a veil... second-sight", l. 4)',
      effectMarkdown:
        'In folklore, being born with a caul ("veil") conferred prophetic **second-sight**. Du Bois transforms an emblem of visual obstruction/segregation into paradoxical epistemological insight.',
      band7Sentence:
        'Fusing the folkloric motif of a birth-caul with prophetic "second-sight," the extended metaphor of the "veil" recasts marginalization as a painful yet clarifying dual vision.',
    },
    {
      id: 'db-mirror',
      layerId: 'extended-metaphor',
      deviceName: 'Em-Dash Pivot & Alienated Specular Identity (l. 5)',
      effectMarkdown:
        'The em-dash and repeated noun **"world"** (*"this American world,— / a world which yields him no true self-consciousness"*) twist aspiration into entrapment: identity arrives only reflected back through hostile eyes.',
      band7Sentence:
        'Pivoting across an em-dash on the repeated noun "world," Du Bois exposes the tragic asymmetry of double-consciousness: an American republic that denies self-definition while enforcing distorted reflection.',
    },
  ],
};

export const ENG_V3_P1_WORKED_EXAMPLE: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'eng-v3-p1-worked-example',
  title: 'Paper 1 HL (20 Marks) — Step-by-Step Guided Literary Analysis Build',
  caption:
    'Step through how a Band 7 essay answers a Paper 1 Guiding Question on W.E.B. Du Bois’s prose non-fiction extract using Criterion A–D rubric architecture.',
  sourceLabel: 'Paper 1 (Guided Literary Analysis · 20 Marks per Text)',
  commandTerm: 'Analyse',
  marks: 20,
  problemMarkdown:
    '**Unseen Guiding Question:** *"Analyse how Du Bois uses figurative language and syntactic structure in this passage to convey the psychological tension of navigating a divided society."* Build a Band 7 essay plan and model paragraph.',
  givenData: [
    { label: 'Criterion A', value: '5m Understanding & Interpretation' },
    { label: 'Criterion B', value: '5m Analysis & Evaluation' },
    { label: 'Criterion C', value: '5m Focus & Organization' },
    { label: 'Criterion D', value: '5m Language & Register' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Step 1 — Deconstruct Guiding Question & Formulate Conceptual Thesis',
      workingMarkdown:
        '**Thesis:** *In this opening movement of The Souls of Black Folk, Du Bois deploys ironic conversational dialogue, controlled periodic syntax, and the ambivalent metaphor of the "veil" to expose how racialized condescension forces Black Americans into exhausting outward performance while simultaneously endowing them with painful prophetic insight ("second-sight").*',
      markCode: 'A1 + C1',
      rationale:
        'Directly answers the guiding question (figurative language + syntactic structure → psychological tension) and forecasts the passage’s conceptual arc rather than listing three isolated literary devices.',
    },
    {
      stepNumber: 2,
      title: 'Step 2 — Body Paragraph 1: Structural Polarity & Ironic Restraint (Movement 1)',
      workingMarkdown:
        'Organize around **interpersonal distance** (lines 1–3) rather than going sentence-by-sentence mechanically: analyse how spatial separation (*"Between me and the other world"*), anadiplosis (*"unasked... unasked"*), and wry culinary understatement (*"reduce the boiling to a simmer"*) construct an intellectually composed speaker contrasting sharply with hesitant, euphemistic white onlookers.',
      markCode: 'B1',
      rationale:
        'Evaluates HOW syntax and irony position the speaker emotionally above condescending interlocutors.',
    },
    {
      stepNumber: 3,
      title: 'Step 3 — Body Paragraph 2: Shift to World-Historical Scale & "The Veil" (Movement 2)',
      workingMarkdown:
        'Track the **tonal and figurative turn** at line 4: shift from conversational satire to epic periodic parallelism (*"Egyptian and Indian, the Greek and Roman..."*) culminating in the paradoxical **caul/"veil"** metaphor. Explain the double valence: visual exclusion (*"no true self-consciousness"*) paired paradoxically with superior clarity (*"gifted with second-sight"*).',
      markCode: 'B2 + C2',
      rationale:
        'Strong Paper 1 essays always identify a **shift or tension** inside the passage and explore ambiguity rather than flattening the extract to a single slogan.',
    },
    {
      stepNumber: 4,
      title: 'Step 4 — Evaluative Conclusion & Register Audit (65-Minute Pace)',
      workingMarkdown:
        'Synthesize how form mirrors theme: Du Bois’s measured, classical prose proves the intellectual sovereignty that *"the other world"* doubts, even as the closing clause (*"through the revelation of the other world"*) leaves the psychological fracture unresolved. Verify precise literary terminology (*anadiplosis, hypophora, periodic sentence, paradox*) and zero plot/history filler.',
      markCode: 'D1',
      rationale:
        'Criterion D rewards concise, idiomatic, academic vocabulary and cohesive transitions—leaving 65 minutes intact for HL Passage 2!',
    },
  ],
  finalAnswerMarkdown:
    '**Paper 1 HL Execution Formula:** 10 min annotation & conceptual thesis → 2–3 analytical movements tracking tonal/structural shifts (with micro-quotes) → 5 min conclusion & register check → move immediately at minute 67 to Passage 2.',
  commonTrapMarkdown:
    '**Classic HL Paper 1 Trap:** Spending 90+ minutes perfecting Essay 1 and rushing Essay 2 in 35 minutes (capping Essay 2 at 8–10/20), OR organizing essays paragraph-by-paragraph ("In paragraph 1... In paragraph 2...") instead of by **conceptual/rhetorical shift**.',
};

export const ENG_V3_IO_TFA_WORKED_EXAMPLE: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'eng-v3-io-tfa-worked-example',
  title: 'Individual Oral (IO) Band 7 Delivery Lab: Things Fall Apart Extract + Whole-Work Pivot',
  caption:
    'Model how to execute the 4-minute English-work half (2m close extract + 2m whole work) using verbatim CRHS classroom citations before pivoting to your translated partner text.',
  sourceLabel: 'Individual Oral IA (40 Marks · 20% HL · CRHS May 2027)',
  commandTerm: 'Examine',
  marks: 10,
  problemMarkdown:
    '**Global Issue (Culture, Identity and Community):** *How masculine insecurity weaponizes domestic hierarchy and cultural ritual to suppress emotional vulnerability.* Model the *Things Fall Apart* half (4 minutes of the 10-minute IO talk) bridging extract close reading (`Food.jpg` / `Family.jpg`) to whole-work trajectory (`ReligionCulture.jpg`).',
  givenData: [
    { label: 'Text A (English)', value: 'Achebe, Things Fall Apart' },
    { label: 'Text B (Required!)', value: '1 Literary Work in Translation' },
    { label: 'Extract Limit', value: '≤40 Continuous Lines' },
    { label: 'Time Balance', value: '2m Extract + 2m Whole Work' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: '0:00–1:00 · Introduction: Global Issue + Dual-Work Thesis',
      workingMarkdown:
        'Define the Global Issue clearly (*transnational, significant, felt in everyday domestic lives*) and introduce **Chinua Achebe’s *Things Fall Apart*** (written originally in English) paired with **Henrik Ibsen’s *A Doll’s House*** (or Sophocles’ *Antigone*, studied in translation). State your comparative claim on how both authors expose authoritarian masculinity as performance masking fear.',
      markCode: 'C1 (Focus)',
      rationale:
        'Saves precious seconds—avoid biographical summaries of Achebe or Ibsen in your introduction.',
    },
    {
      stepNumber: 2,
      title: '1:00–3:00 · Close Reading of ≤40-Line Extract (Food.jpg & Family.jpg)',
      workingMarkdown:
        'Zoom straight into specific lines of your chosen Ch. 2–4 extract: unpack the political simile describing Okonkwo’s household *"like an empire with multiple wives"* (`Family.jpg` p. 20), the rigid agricultural dichotomy separating sisal-ringed yams from *"women’s crops like coco-yams, beans and cassava"* (`Food.jpg` p. 23), and the narrator’s focalized diagnosis of Unoka’s shame (pp. 4, 18) driving domestic beatings (`Family.jpg` pp. 29, 38). Quote 2–5 words per point and explain **authorial effect**.',
      markCode: 'A1 + B1',
      rationale:
        'Criterion A & B demand granular attention to stylistic features *inside* the 40-line extract—never skip straight to general plot recall!',
    },
    {
      stepNumber: 3,
      title: '3:00–5:00 · Whole-Work Expansion (ReligionCulture.jpg & Colonial Finale)',
      workingMarkdown:
        'Pivot explicitly (*"Moving from this extract to the novel as a whole..."*): trace how the same terror of *"showing weakness"* (`ReligionCulture.jpg` pp. 13, 61) escalates from coercing Nwoye (`Family.jpg` p. 33) and violating **Ani’s Week of Peace** (p. 30) to participating in Ikemefuna’s execution—until colonial arrival exposes the fatal brittleness of a masculinity unable to adapt like Umuofia’s kola-nut diplomacy (`Food.jpg` p. 19) or Obierika’s skepticism.',
      markCode: 'A2 + B2',
      rationale:
        'Satisfies the mandatory 50/50 split between extract close analysis and whole-work significance without re-narrating chapters.',
    },
    {
      stepNumber: 4,
      title: '5:00–10:00 · Transition to Work in Translation + Synthesis + 5m Q&A Prep',
      workingMarkdown:
        'Spend minutes 5:00–9:00 identically (**2m ≤40-line extract + 2m whole work**) on your **translated partner work** (never a non-literary work!), then devote 9:00–10:00 to comparative synthesis. Prepare concrete whole-work scenes you omitted (e.g., Ezinma’s illness / Chielo’s Oracle authority, `ReligionCulture.jpg` p. 57) for the **5-minute teacher discussion**.',
      markCode: 'C2 + D1',
      rationale:
        'Examiners award top Criterion C & D bands to poised oral signposting, balanced timing across both works, and nimble evidence recall during Q&A.',
    },
  ],
  finalAnswerMarkdown:
    '**IO Golden Formula:** 1m Global Issue Intro → 2m English Extract + 2m English Whole Work → 2m Translated Extract + 2m Translated Whole Work → 1m Comparative Synthesis → 5m Conversational Q&A.',
  commonTrapMarkdown:
    '**Fatal Lit HL IO Errors:** (1) Trying to use a movie, speech, or photo advertisement as a "non-literary body of work" (that belongs to **Lang & Lit**—Literature HL requires **2 literary works**: 1 English + 1 in translation!); (2) Spending 7 minutes on the extract and only 1 minute on the whole work.',
};
