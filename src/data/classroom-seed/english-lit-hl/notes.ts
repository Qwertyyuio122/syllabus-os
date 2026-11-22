import type { ClassroomSeedNote } from '../types';
import {
  ENG_V3_CONTEXT_RECEPTION_MECHANISM,
  ENG_V3_GENRE_CRAFT_MATRIX,
  ENG_V3_HL_COMPONENTS_MATRIX,
  ENG_V3_HL_CONCEPT_EXPLORER,
  ENG_V3_HL_TIMELINE_ROADMAP,
  ENG_V3_INTERTEXTUAL_ANTIGONE_ANNOTATOR,
  ENG_V3_IO_TFA_WORKED_EXAMPLE,
  ENG_V3_KAFKA_TRANSLATION_ANNOTATOR,
  ENG_V3_P1_DUBOIS_ANNOTATOR,
  ENG_V3_P1_WORKED_EXAMPLE,
  ENG_V3_PAPER2_WORKED_EXAMPLE,
  ENG_V3_POETIC_KEATS_ANNOTATOR,
  ENG_V3_PROSE_CHOPIN_ANNOTATOR,
  ENG_V3_TFA_EVIDENCE_EXPLORER,
  ENG_V3_TFA_MOTIF_MATRIX,
  ENG_V3_TRAGIC_ARCHITECTURE_EXPLORER,
  ENG_V3_TRANSLATION_COMPARISON_MATRIX,
  ENG_V3_YEATS_EPIGRAPH_ANNOTATOR,
} from './diagrams';

export const ENGLISH_LIT_HL_NOTES: ClassroomSeedNote[] = [
  // =========================================================================
  // GUIDE 1 (AoE2.1 — UPGRADED, exact v2 title preserved)
  // =========================================================================
  {
    topicCode: 'AoE2.1',
    title: 'Things Fall Apart: Family Power, Food Rituals, Cosmology & IO Global Issues (AoE2)',
    summary:
      'Comprehensive AoE 2 study guide synthesizing all CRHS classroom evidence trackers (Family.jpg, Food.jpg, ReligionCulture.jpg), Achebe’s dual-register Igbo-English prose, Yeats’s epigraph, and IB English A: Literature HL Individual Oral rules.',
    sourceFileNames: ['Family.jpg', 'Food.jpg', 'ReligionCulture.jpg'],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'IB Area of Exploration 2 Guiding Questions (Time & Space)',
        markdown:
          '- **How important is cultural or historical context to the production and reception of a text?** How does Chinua Achebe’s 1958 anticolonial vantage shape both his celebration of Igbo civic ceremony and his unsparing critique of Umuofia’s patriarchal rigidity?\n- **How do literary texts approach representation of power within domestic and sacred institutions?** How do food rituals (*kola nut, yams, locusts*), family dynamics (*Unoka, Okonkwo, Ikemefuna, Nwoye*), and cosmology (*chi, Ani, Oracle*) expose internal fault lines long before European missionaries arrive?\n- **How can an English A: Literature HL student anchor *Things Fall Apart* in an Individual Oral?** Remember: Achebe counts as your **work originally written in English**, paired strictly with **one literary work studied in translation**.',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Interactive Evidence Web: Three Classroom Trackers & HL IO Architecture',
      },
      {
        type: 'paragraph',
        markdown:
          'At CRHS, our close reading of Part 1 of Chinua Achebe’s *Things Fall Apart* (1958) rests on three primary evidence sheets: **`Family.jpg`**, **`Food.jpg`**, and **`ReligionCulture.jpg`**. Rather than treating family hierarchy, agrarian rituals, and Igbo theology as disconnected "background color," top-band IB responses show how Achebe **braids all three strands together**. Okonkwo’s fear of his father Unoka’s poverty drives how he farms yams, how he polices his compound *"like an empire with multiple wives"* (p. 20), and ultimately why his pride leads him to violate the Earth goddess **Ani** during the Week of Peace (p. 30).',
      },
      {
        type: 'playable_diagram',
        spec: ENG_V3_TFA_EVIDENCE_EXPLORER,
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Family Dynamics & Patriarchal Insecurity (Family.jpg · pp. 4–38)',
      },
      {
        type: 'paragraph',
        markdown:
          'Achebe deliberately introduces Okonkwo not through heroic isolation, but through **patrilineal contrast**. In **`Family.jpg`**, page 4 introduces Okonkwo’s father **Unoka**—a debtor and gifted flute player whose artistic gentleness Okonkwo misreads as shameful effeminacy (*agbala*). Page 18 deepens this wound: Okonkwo reflects bitterly that *"he did not inherit anything from [his] father"*—no barn, no title, not even a single seed-yam—making his entire adult persona a frantic campaign to erase Unoka’s shadow. Crucially, Achebe’s third-person limited narrator refuses to romanticize this self-made drive: what looks like communal valor in the wrestling ring (p. 3) mutates into domestic tyranny behind the compound walls.',
      },
      {
        type: 'paragraph',
        markdown:
          'Notice the exact political simile recorded on **page 20 (`Family.jpg`)**: *"Men in the family make like an empire with multiple wives"* (Okonkwo’s unnamed first wife, **Ekwefi** his second wife, and **Ojiugo** his third wife). The comparison *"like an empire"* is an extraordinary structural bridge inside the novel: long before the British Empire dismantles Umuofia in Part 3, Okonkwo already models domestic masculinity on **imperial conquest**. When frustration mounts, he beats his wives (pp. 29 and 38)—annotated acutely in our classroom tracker as *"showing the power dynamic trying to feel powerful."* Violence in Okonkwo’s *obi* is never an emblem of secure authority; it is a symptom of terrified compensation.',
      },
      {
        type: 'paragraph',
        markdown:
          'That same authoritarian anxiety poisons Okonkwo’s relationship with the next generation. On **page 8**, **Ikemefuna** enters Okonkwo’s household as a human peace-settlement ward between Umuofia and Mbaino, yet on **page 27** Achebe shifts into tender focalized interiority: *"Ikemefuna thought of his mother and three-year-old sister."* Including that quiet domestic longing exposes the psychological toll of clan diplomacy on powerless children. Meanwhile, on **page 33**, Okonkwo pressures his biological eldest son **Nwoye** to become a *"great man"* through relentless scolding and beatings. By suppressing Nwoye’s appetite for his mother’s gentle folk tales in favor of masculine blood-stories, Okonkwo inadvertently primes Nwoye to abandon Igbo religion when Christian missionaries offer consolation for discarded twins and murdered wards like Ikemefuna.',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Do Not Reduce Okonkwo to a One-Dimensional Villain (Criterion A)',
        markdown:
          'High-scoring IB essays recognize **ambivalence** in Okonkwo’s compound. Even as Okonkwo beats his wives (pp. 29, 38) and bullies Nwoye (p. 33), his devotion to **Ezinma** (*"She should have been a boy"*), his secret grief after Ikemefuna’s killing, and Ekwefi’s fierce maternal courage reveal genuine tenderness trapped beneath a rigid patriarchal code (`ReligionCulture.jpg` p. 61: *"Showing weakness is bad"*). Pair `Family.jpg` domestic violence with moments of suppressed vulnerability to earn top Criterion A marks.',
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Food Rituals, Gendered Crops & Oral Diplomacy (Food.jpg · pp. 10–56)',
      },
      {
        type: 'paragraph',
        markdown:
          'Why does Achebe devote so many pages of Part 1 to pounding yams, breaking kola nuts, tapping palm wine, and roasting locusts? In **`Food.jpg`**, culinary and agricultural details serve a **double rhetorical purpose**: they dismantle racist colonial stereotypes of African "savagery" while simultaneously exposing the strict **gender and class hierarchies** built into Umuofia’s agrarian economy.',
      },
      {
        type: 'paragraph',
        markdown:
          'Examine **`Food.jpg` page 19**: when Okonkwo seeks seed-yams from the wealthy elder Nwakibie, he follows meticulous ceremonial diplomacy: *"He presented a kola nut and an alligator pepper"* alongside *"a pot of palm wine [and] a cock to Nwakibie."* The breaking of the kola nut—accompanied by ancestral prayers for life, health, and mutual goodwill—establishes Igbo society as **legally and diplomatically sophisticated**, governed by reciprocal obligation rather than impulse. Even the proverb on **page 27**—*"It is not true that Okonkwo’s palm kernels have been cracked for him by a benevolent spirit"*—frames Okonkwo’s labor through communal oral philosophy: elders acknowledge his brutal work ethic even as the narrator gently hints that arrogance toward less fortunate men (like Osugo, whom Okonkwo calls a "woman") strains communal solidarity.',
      },
      {
        type: 'paragraph',
        markdown:
          'At the same time, food encodes **gendered labor and status (`Food.jpg` pp. 10, 23, 42–43, 56)**. On **page 10**, martial heroism takes macabre culinary form: *"on great occasions such as the funeral, a village celebration he drank palm wine out of his first human head."* On **page 23**, cultivation itself is strictly bifurcated: women tend *"women’s crops like coco-yams, beans and cassava,"* whereas men cultivate the sacred yam—carefully *"making rings of thick sisal leaves around the yams"* to shield tender vines from scorching sun (`ReligionCulture.jpg` p. 23: *"Yams are a sign of wealth & power & status"*). Yet look closely at **pages 42–43** and **page 56**: domestic life depends equally on women’s everyday culinary craft (yam peelings, Ezinma chewing yam cud in the goat shed, preparing chicken pottage) and on collective village joy when *"the locusts settled in the bushes in the night, [and] later they were roasted in clay pots"* (p. 56). Notably, those delicious **locusts (`ReligionCulture.jpg` p. 55: "good sign")** later become an ironic motif when Obierika compares incoming white colonists to locusts—initially rare and marvelled at, soon devouring the land.',
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Igbo Cosmology, Civic Order & Achebe’s Dual-Register English (ReligionCulture.jpg)',
      },
      {
        type: 'paragraph',
        markdown:
          'In **`ReligionCulture.jpg`**, Achebe depicts Umuofia as a delicate ecosystem balancing **individual ambition (*chi*, p. 14)** with **communal spiritual restraint (Earth goddess Ani, p. 30)**. From the opening chapter (**p. 3 & p. 42**), all nine villages gather around **inter-village wrestling** animated by ceremonial **drums and flutes**—an art form Okonkwo respects only when tethered to martial combat, even though his hated father Unoka loved the flute. Farming prowess (**p. 5**: *"Being good at farming = rich & powerful + manly"*) confers legitimacy, while Okonkwo’s central compound hut—the ***obi* (p. 56)**—spatially anchors patrilineal authority.',
      },
      {
        type: 'paragraph',
        markdown:
          'Crucially, however, Umuofia is **not an unregulated patriarchy** (`ReligionCulture.jpg` p. 13: *"Male dominated culture = abusive male culture; violence is the answer for something"*). Spiritual institutions check male violence: **Ani** (p. 30), the Earth goddess governing agricultural fertility, strictly forbids bloodshed during the **Week of Peace**; the **Feast of the New Yam (p. 36)** honors ancestral spirits embodied by the masked ***egwugwu*** tribunal; and the **Oracle of the Hills and Caves (p. 57)** wields supreme judicial authority even over fierce warriors. Okonkwo’s tragedy erupts precisely because he prizes the clan’s martial taboo against weakness (**p. 61**: *"Showing weakness is bad"*) *above* its spiritual checks—leading him to beat Ojiugo during the Week of Peace, ignore Ezeudu’s warning against participating in Ikemefuna’s ritual killing, and impulsively behead the colonial court messenger when Umuofia refuses to follow him to war.',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Achebe’s Linguistic Strategy: "Palm Oil With Which Words Are Eaten"',
        markdown:
          'In *Things Fall Apart*, Achebe writes in English—making it eligible ONLY as your **English-original work** in the IB Individual Oral—yet systematically reshapes English through **Igbo oral syntax, proverbs, folk tales, and unitalicized Igbo lexis** (*chi, Ani, obi, egwugwu, agbala, ndichie*). By refusing to translate key theological nouns into Western equivalents like "fate" or "soul," Achebe resists cultural assimilation and forces Anglophone readers to enter Igbo epistemological space on Igbo terms.',
      },
      {
        type: 'heading',
        level: 2,
        text: '5. Intertextual Dialogue: Yeats’s "The Second Coming" & Achebe’s Counter-Discourse',
      },
      {
        type: 'paragraph',
        markdown:
          'Achebe draws his novel’s title directly from line 3 of **W. B. Yeats’s 1920 modernist poem *"The Second Coming"***: *"Things fall apart; the centre cannot hold."* Studying the complete poem alongside *Things Fall Apart* is one of the highest-yield moves in AoE 2 and AoE 3. Whereas Yeats imagined postwar European civilization spiraling outward from a collapsing Christian center, Achebe **recontextualizes** Yeats’s words inside West Africa: Umuofia *already had* a coherent moral, agricultural, and judicial center before European imperialism arrived—even if internal patriarchal anxieties weakened its outer walls. Explore Yeats’s full public-domain epigraph text below using the toggleable literary layers.',
      },
      {
        type: 'playable_diagram',
        spec: ENG_V3_YEATS_EPIGRAPH_ANNOTATOR,
      },
      {
        type: 'heading',
        level: 2,
        text: '6. Synthesizing Classroom Citations for Paper 2 & Individual Oral (IO)',
      },
      {
        type: 'paragraph',
        markdown:
          'To translate your reading logs into Band 7 oral or written commentary, never recite page numbers as a bare checklist. Pair each citation with **(a) the exact authorial choice** (political simile, third-person limited focalization, proverb, Igbo vernacular lexis, structural juxtaposition) and **(b) its effect on a shared Global Issue**. Use the comparative matrix below to connect all three classroom logs directly to IB rubrics.',
      },
      {
        type: 'playable_diagram',
        spec: ENG_V3_TFA_MOTIF_MATRIX,
      },
      {
        type: 'callout',
        variant: 'syllabus_link',
        title: 'CRHS May 2027 Individual Oral (IO) Prep & Pairing Guardrail',
        markdown:
          'Per the **CRHS IB Assessment Calendar 2026–2027**, Grade 11 **English Mock Individual Orals** run throughout **April 2027**, followed immediately by **Final Recorded Individual Orals throughout May 2027**. Because this course is **English A: Literature HL** (NOT Language & Literature), your IO MUST pair **1 literary work originally written in English** (e.g., *Things Fall Apart*) with **1 literary work studied in translation** (e.g., Sophocles’ *Antigone*, Henrik Ibsen’s *A Doll’s House*, or Franz Kafka’s *The Metamorphosis*). Never attempt to use non-literary media, advertisements, or films.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Chi (ReligionCulture.jpg p. 14)',
            definitionMarkdown:
              'Personal spiritual double/destiny in Igbo cosmology that negotiates individual willpower (*"when a man says yes his chi says yes also"*—until hubris exceeds sacred limits).',
            markschemeKeyword: 'cosmological tension / agency vs fate',
          },
          {
            term: 'Ani & Week of Peace (ReligionCulture.jpg p. 30)',
            definitionMarkdown:
              'Earth goddess governing soil fertility, ancestral morality, and communal peace; Okonkwo’s domestic violence violates sacred ecological law before colonialism strikes.',
            markschemeKeyword: 'internal transgression / sacred restraint',
          },
          {
            term: 'Dual-Register English & Proverbs (Food.jpg pp. 19, 27)',
            definitionMarkdown:
              'Achebe’s fusion of standard English narrative prose with Igbo syntax, proverbs (*"palm oil with which words are eaten"*), and untranslated cultural lexis (*obi, egwugwu, agbala*).',
            markschemeKeyword: 'anticolonial linguistic reclamation',
          },
          {
            term: 'Political Domestic Simile (Family.jpg p. 20)',
            definitionMarkdown:
              'Describing Okonkwo’s polygynous compound *"like an empire with multiple wives,"* equating insecure domestic patriarchy with imperial domination.',
            markschemeKeyword: 'authoritarian insecurity / empire simile',
          },
          {
            term: 'Gendered Crop Hierarchy (Food.jpg p. 23)',
            definitionMarkdown:
              'Agrarian coding separating sisal-ringed yams ("king of crops") from *"women’s crops like coco-yams, beans and cassava,"* inscribing gender inequality into daily subsistence.',
            markschemeKeyword: 'material culture / gender division',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 2 (COMP — UPGRADED, exact v2 title preserved)
  // =========================================================================
  {
    topicCode: 'COMP',
    title: 'English A Literature HL Craft: Paper 1, Paper 2, HL Essay & Mandatory IO Rules',
    summary:
      'Complete architectural blueprint for all four IB English A: Literature HL assessment components (Paper 1 35%, Paper 2 25%, HL Essay 20%, Individual Oral 20%), CRHS 2026–2028 deadlines, the 7 Central Concepts, and text-isolation rules.',
    sourceFileNames: ['IB Assessment Calendar 2026-2027.pdf', 'Family.jpg', 'ReligionCulture.jpg'],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Assessment Architecture Guiding Questions (COMP.1–COMP.4)',
        markdown:
          '- **How do the four IB English A: Literature HL assessments test complementary literary skills?** Why does Paper 1 reward agile close reading under time pressure, while the HL Essay demands sustained scholarly inquiry over months?\n- **How must you partition your 13 studied works across components?** Which strict non-duplication rules prevent invalidating your Diploma across Paper 2, the HL Essay, and the Individual Oral?\n- **What distinguishes English A: Literature HL from Language & Literature?** How do the **literary-only** IO rule and the **both-texts** Paper 1 rule define your preparation strategy at CRHS?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Complete HL Component Breakdown & Text-Isolation Matrix',
      },
      {
        type: 'paragraph',
        markdown:
          'IB English A: Literature Higher Level evaluates your mastery of **13 literary works** distributed across three Areas of Exploration (*Readers, Writers and Texts*; *Time and Space*; *Intertextuality: Connecting Texts*), four literary forms (**prose fiction, prose non-fiction, poetry, drama**), three historical periods, and at least two continents—including mandatory **works in translation**. Every assessment component measures four core criteria (**A: Knowledge, Understanding and Interpretation; B: Analysis and Evaluation; C: Focus and Organization; D: Language**), yet each imposes distinct text-selection rules and weighting.',
      },
      {
        type: 'playable_diagram',
        spec: ENG_V3_HL_COMPONENTS_MATRIX,
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Critical Literature HL Distinctions — Never Confuse With Lang & Lit!',
        markdown:
          '1. **Individual Oral (IO) Text Pairing:** In **English A: Literature HL**, your IO MUST pair **one literary work originally written in English** + **one literary work studied in translation** (e.g., Achebe + Sophocles/Ibsen/Kafka). **NEVER use non-literary bodies of work** (news articles, ads, photographs, speeches outside literary collections)—that rule applies *only* to Language & Literature!\n2. **Paper 1 HL Workload:** At SL, candidates choose 1 of 2 unseen passages. At **HL**, you MUST write **two separate full guided literary analyses** on **both** unseen extracts (**2 hours 15 minutes · 40 marks total · 35% of your Diploma score**).\n3. **Strict Non-Duplication Rule:** No literary work may be reused across the **Individual Oral**, the **HL Essay**, and **Paper 2**.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. CRHS 2026–2028 Milestone Pipeline & Work Allocation Strategy',
      },
      {
        type: 'paragraph',
        markdown:
          'Per the **CRHS IB Assessment Calendar 2026–2027**, in-school IB deadlines are non-negotiable so teachers have sufficient moderation time before IB upload dates. Mapping your 13 works early prevents an accidental overlap in Grade 12—for instance, using *Things Fall Apart* in your Grade 11 May 2027 Individual Oral automatically locks *Things Fall Apart* **out** of both your Grade 12 HL Essay and your May 2028 Paper 2 Comparative Essay. Step through the interactive CRHS assessment pipeline below to verify every date and exclusion lock.',
      },
      {
        type: 'playable_diagram',
        spec: ENG_V3_HL_TIMELINE_ROADMAP,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Deep-Dive Strategy Across Every Assessment Criterion (A–D)',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Criterion A — Knowledge, Understanding & Interpretation (Anchor Claims in Micro-Text)',
      },
      {
        type: 'paragraph',
        markdown:
          'Examiners separate Band 5 ("descriptive/general understanding") from Band 7 ("perceptive, sustained interpretation") through **textual granularity and conceptual nuance**. On **Paper 1**, this means grasping not just the surface narrative of an unseen poem or prose extract, but its underlying ambiguities, speaker persona, and tonal shifts. On **Paper 2**, **HL Essay**, and the **IO**, Criterion A demands demonstrating how specific **micro-quotations** (2–6 embedded words, never four-line block dumps) illuminate wider ideological or psychological tensions across the whole work—for example, linking Okonkwo’s treatment of *"women’s crops"* (`Food.jpg` p. 23) to his catastrophic violation of **Ani’s** Week of Peace (`ReligionCulture.jpg` p. 30).',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Criterion B — Analysis & Evaluation of Authorial Choices (Technique → Effect)',
      },
      {
        type: 'paragraph',
        markdown:
          'Naming literary terms alone (*"Achebe uses a simile," "Keats uses alliteration," "Ibsen uses stage directions"*) earns at best 2–3/5 (or 5–6/10) on Criterion B. Top-band analysis deploys the **Mechanism → Effect** chain: **(1) identify the exact formal choice** (*inverted syntax, free indirect discourse, trochaic substitution, caesura, stichomythia, untranslated vernacular lexis*), **(2) explain the cognitive or emotional mechanism** (*how* it slows reading pace, fractures perspective, or triggers dramatic irony), and **(3) evaluate how that mechanism shapes the reader’s judgment** toward the guiding question, prompt, or Global Issue.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Criterion C — Focus & Organization (Analytical Architecture vs Summary)',
      },
      {
        type: 'paragraph',
        markdown:
          'Whether writing a 65-minute Paper 1 commentary, a 1,400-word HL Essay, or speaking for 10 minutes in an IO, **never organize chronologically ("First in line 1... Next in stanza 2...")**. Structure every body paragraph around a **conceptual claim or stylistic movement** announced in a crisp topic sentence. On **Paper 2**, keep both works inside **every** body paragraph using comparative pivots (*"Whereas Achebe internalizes... Sophocles externalizes..."*). On the **IO**, respect the **50/50 extract-to-whole-work split** (~2 minutes extract close reading + ~2 minutes whole-work trajectory for Text A, repeated identically for Text B).',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Criterion D — Language (Academic Precision, Register & Concision)',
      },
      {
        type: 'paragraph',
        markdown:
          'Criterion D rewards **precision, economy, and idiomatic fluency**—never bloated thesaurus stuffing. Instead of writing *"This really shows the reader a super deep message about society,"* write *"Through free indirect discourse, Chopin exposes how bourgeois domesticity constrains female self-narration."* Embed short quotations syntactically into your own prose using active analytical verbs (**exposes, complicates, undermines, refracts, destabilizes, reconfigures, ironizes**) and accurate literary nomenclature (*focalization, enjambment, caesura, stichomythia, anaphora, hamartia*).',
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Navigating the 7 Central Concepts & 5 Global Issue Fields of Inquiry',
      },
      {
        type: 'paragraph',
        markdown:
          'Students frequently confuse the **7 Central Concepts** (used across all three AoEs and mandatory as the conceptual anchor of the **HL Essay**) with the **5 Global Issue Fields of Inquiry** (used specifically to frame the **Individual Oral**). Inspect the interactive map below to distinguish clearly between a concept-driven HL Essay line of inquiry and a narrow, transnational IO Global Issue.',
      },
      {
        type: 'playable_diagram',
        spec: ENG_V3_HL_CONCEPT_EXPLORER,
      },
      {
        type: 'heading',
        level: 2,
        text: '5. The Band 5 vs Band 7 Sentence Clinic & Literary Present Conventions',
      },
      {
        type: 'paragraph',
        markdown:
          'Even when candidates know their texts intimately, Criterion B and Criterion D scores frequently stall at 3/5 or 6/10 because sentences describe *what characters do* rather than *what authors construct*. Train yourself to audit every analytical paragraph against three habits: **(1) Literary Present Tense** (*"Achebe exposes," "Sophocles stages,"* never *"Okonkwo went and did"*), **(2) Author-as-Subject Framing** (put *Achebe, Keats, Ibsen, Du Bois* in the grammatical subject slot rather than characters acting as real people), and **(3) Embedded Micro-Quotations** (trim quotes to 2–6 charged words fused smoothly into your own syntax rather than dropping standalone sentence blocks).',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Sentence Clinic: Upgrading Raw Citations to Band 7 Evaluative Prose',
        markdown:
          '- **Band 4 (Feature-Spotting & Plot):** *"On page 20 Achebe uses a simile that men in the family make like an empire with multiple wives. Also on page 29 Okonkwo beats his wife. This shows Okonkwo is angry and powerful."*\n- **Band 7 (Mechanism → Effect → Argument):** *"By comparing Okonkwo’s compound to \'an empire with multiple wives\' (`Family.jpg` p. 20), Achebe’s third-person focalization links domestic patriarchy directly to imperial conquest—exposing his subsequent wife-beatings (pp. 29, 38) not as confident strength, but as fearful compensation for Unoka’s inherited shame (pp. 4, 18)."*\n- **Why It Jumps Two Bands:** The Band 7 sentence names the **technique** (*political simile + third-person focalization*), weaves three micro-citations smoothly, and proves **psychological/thematic causality**.',
      },
      {
        type: 'heading',
        level: 2,
        text: '6. Managing Your Learner Portfolio Across 13 Works & IO Q&A Preparation',
      },
      {
        type: 'paragraph',
        markdown:
          'Although your IB **Learner Portfolio** is not directly graded externally, it functions as the essential command center connecting all four assessed components across Grade 11 and Grade 12. Maintain one dedicated motif tracker per studied text—mirroring the exact method of our three CRHS classroom trackers (`Family.jpg`, `Food.jpg`, `ReligionCulture.jpg`)—organized by **page citation, formal device, IB Concept tag, and potential Global Issue**. Crucially, record your **locked assessment partitions** early: once you lock *Things Fall Apart* (English original) and your translated work for **April/May 2027 Individual Orals**, strike both titles from your **Nov 19, 2027 HL Essay Proposal** shortlist and reserve two fresh works exclusively for **May 2028 Paper 2**. Finally, rehearse the **5-minute IO Q&A** out loud with a partner using unscripted follow-up prompts (*"Where else in the whole work does that motif fail or complicate your thesis?"*) so spontaneous discussion strengthens rather than repeats your 10-minute presentation.',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'TOK Connection: Literary Criteria vs Scientific Verification',
        markdown:
          'How can literary examiners award reliable marks (Criteria A–D) to subjective interpretations of poetry or drama? Unlike mathematical proofs verified by deductive axioms, literary knowledge claims rely on **coherence, textual falsifiability, and explanatory power**: an interpretation is stronger not because it is "the only truth," but because it accounts for *more* formal evidence—including contradictions and ambiguity—without distorting the text.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Criterion A — Knowledge, Understanding & Interpretation',
            definitionMarkdown:
              'Demonstrates perceptive grasp of literal/implied meanings anchored in exact textual moments and nuanced conceptual/Global Issue implications.',
            markschemeKeyword: 'micro-quotation + implication',
          },
          {
            term: 'Criterion B — Analysis & Evaluation',
            definitionMarkdown:
              'Explains HOW specific authorial choices (diction, syntax, focalization, prosody, stagecraft, translation mediation) construct meaning and affect readers.',
            markschemeKeyword: 'device → mechanism → effect',
          },
          {
            term: 'Criterion C — Focus & Organization',
            definitionMarkdown:
              'Sustains an analytical thesis through conceptual topic sentences, point-by-point Paper 2 synthesis, or equal 50/50 extract/whole-work IO balance.',
            markschemeKeyword: 'conceptual structure + equal balance',
          },
          {
            term: 'Criterion D — Language',
            definitionMarkdown:
              'Deploys clear, varied, formal literary register with accurate terminology and seamless syntactic quotation integration.',
            markschemeKeyword: 'precise literary register',
          },
          {
            term: 'The 7 Central IB Concepts',
            definitionMarkdown:
              '**Identity, Culture, Creativity, Communication, Perspective, Transformation, Representation** — theoretical lenses uniting all 3 AoEs and anchoring the HL Essay.',
            markschemeKeyword: 'HL Essay conceptual anchor',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 3 (AoE1.1 — NEW, cross-links AoE1.2)
  // =========================================================================
  {
    topicCode: 'AoE1.1',
    title: 'Close Reading, Poetic Form, Prose Focalization & Dramatic Craft (AoE1.1–AoE1.2)',
    summary:
      'Complete Area of Exploration 1 (Readers, Writers and Texts) masterclass covering close-reading mechanics across Poetry (Keats), Prose Fiction (Chopin), Non-Fiction, and Drama, plus AoE1.2 textual ambiguity and reader reception.',
    sourceFileNames: ['Food.jpg', 'Family.jpg'],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'IB Area of Exploration 1 Guiding Questions (Readers, Writers & Texts)',
        markdown:
          '- **Why and how do we study language and literature?** How do formal authorial choices—syntax, lineation, narrative focalization, stage directions—generate complex meanings unavailable to paraphrase?\n- **In what ways is meaning constructed, negotiated, expressed and interpreted (AoE1.2)?** Where does an author leave deliberate textual gaps (*Leerstellen*) or irony that invite competing reader interpretations?\n- **How does literary form alter meaning?** What happens when you shift the same psychological conflict from lyric ode to realist short story to theatrical dialogue?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. The Close-Reading Engine: Moving From Feature-Spotting to Literary Effect',
      },
      {
        type: 'paragraph',
        markdown:
          'Area of Exploration 1 (**Readers, Writers and Texts**) begins with a foundational discipline: **attentive, unhurried close reading**. Whether you are examining the ritualized hospitality of breaking kola nut in *Things Fall Apart* (`Food.jpg` p. 19), decoding a Romantic ode, or dissecting an unseen Paper 1 drama excerpt, weak essays fail for one universal reason—they treat language as a transparent window containing a "message" to be extracted and summarized. In IB English A: Literature HL, **how** something is said *is* what is being said.',
      },
      {
        type: 'callout',
        variant: 'definition',
        title: 'The Four-Step Micro-Reading Loop (Device → Syntax → Sound/Space → Effect)',
        markdown:
          '1. **Denotation & Connotation (Diction):** Note semantic fields (e.g., agricultural, legal, religious, somatic) and register clashes (colloquial vs liturgical).\n2. **Grammar & Architecture (Syntax):** Check sentence length, **parataxis** (short unsubordinated clauses creating urgency or numbness) vs **hypotaxis** (layered subordination tracing rational nuance or evasion), active vs passive voice.\n3. **Acoustic & Visual Texture:** Inspect rhythm, meter, caesura, sibilance/plosives, or spatial blocking.\n4. **Reader Effect:** Ask *what shift in sympathy, tension, irony, or skepticism does this exact arrangement trigger in an attentive reader?*',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Poetic Form & Prosody: Meter, Lineation, Acoustics & Structural Turns',
      },
      {
        type: 'paragraph',
        markdown:
          'Poetry concentrates meaning through the interplay between **syntax** (the sentence) and **lineation** (the poetic line). When a sentence runs across a line break without punctuation (**enjambment**), momentum accelerates or overflows—creating breathless anticipation, instability, or surplus. Conversely, a strong pause inside the middle of a line (**medial caesura**) fractures balance, forcing two clauses or worldviews into collision (recall Yeats’s *"Things fall apart; the centre cannot hold"*). Always read verse aloud mentally to detect **metrical substitutions**: an unexpected initial **trochee** (*DUM-da*) inside steady **iambic pentameter** (*da-DUM*) acts like a spotlight on a verb or noun.',
      },
      {
        type: 'paragraph',
        markdown:
          'Equally vital is **stanzaic architecture and the volta (turn)**. In a Petrarchan sonnet, the **octave** (8 lines) poses a tension before line 9 shifts perspective in the **sestet**; in a Shakespearean sonnet, three quatrains develop variations before a rhyming **couplet** either clinches or ironizes the argument (*Sonnet 130*’s *"And yet, by heaven..."*). In longer lyric odes like John Keats’s *"To Autumn"* (1819), watch how Stanza 1 saturates the senses with swelling summer fruition while subtly planting temporal limits (*"Until they think..."*, *"clammy cells"*). Explore Stanza 1 below in full interactive detail.',
      },
      {
        type: 'playable_diagram',
        spec: ENG_V3_POETIC_KEATS_ANNOTATOR,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Prose Craft & Narrative Focalization: Who Speaks vs Who Sees?',
      },
      {
        type: 'paragraph',
        markdown:
          'When analyzing fiction—from *Things Fall Apart* (`Family.jpg` p. 27, where the third-person narrator quietly accesses Ikemefuna’s homesickness) to modernist short stories—always apply narratologist Gérard Genette’s crucial distinction between **voice ("Who speaks?")** and **focalization ("Who perceives?")**. A third-person narrator may remain grammatically exterior (*"she saw," "he thought"*), yet adopt the character’s emotional idioms, sensory filters, and self-deceptions without quotation marks—a signature technique called **free indirect discourse (FID)**.',
      },
      {
        type: 'paragraph',
        markdown:
          'Notice how Kate Chopin uses focalized sensory projection in **"The Story of an Hour" (1894)**. After Louise Mallard receives news of her husband’s supposed death, Chopin withholds explicit editorial judgment (*"Louise felt secretly relieved"* would ruin the story!). Instead, she locks focalization onto Louise’s bedroom window, projecting emergent psychological freedom onto *"trees that were all aquiver with the new spring life"* and *"patches of blue sky."* Interact with Chopin’s passage below to trace how syntax, sensory detail, and irony converge.',
      },
      {
        type: 'playable_diagram',
        spec: ENG_V3_PROSE_CHOPIN_ANNOTATOR,
      },
      {
        type: 'heading',
        level: 3,
        text: 'Prose Non-Fiction Craft: Authorial Persona, Ethos & Extended Metaphor',
      },
      {
        type: 'paragraph',
        markdown:
          'When unseen passages or studied texts take the form of **literary prose non-fiction**—essays, memoirs, autobiographies, letters, or philosophical prose—the central analytical error is treating the speaker as an unmediated reporter. Just like a novelist, an essayist or memoirist constructs a **rhetorical persona**, modulates **ethos, pathos, and logos**, and embeds controlling **extended metaphors**. In Frederick Douglass’s *Narrative* (1845), gazing at white sails across Chesapeake Bay triggers sharp symmetrical **antithesis** (*"You are loosed from your moorings, and are free; I am fast in my chains, and am a slave!"*) fused with elevated **apostrophe** (*"freedom’s swift-winged angels"*), converting physical entrapment into moral indictment of antebellum readers. Likewise, W. E. B. Du Bois (*The Souls of Black Folk*, 1903) pairs judicial **anadiplosis** (*"unasked question: unasked by some"*) with wry culinary understatement (*"reduce the boiling to a simmer"*) to position himself intellectually above condescending interlocutors before unveiling his central extended metaphor of **"the veil."**',
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Dramatic Craft: Stagecraft, Subtext, Proxemics & Stichomythia',
      },
      {
        type: 'paragraph',
        markdown:
          'Drama is written to be **embodied in three-dimensional time and space**, never merely read silently like prose. Whenever you encounter an unseen drama extract on Paper 1—or analyze plays like Sophocles’ *Antigone*, Shakespeare’s *Macbeth*, or Ibsen’s *A Doll’s House*—anchor Criterion B in **theatrical mechanics**:\n- **Stage Directions & Proxemics:** Who occupies center stage vs doorway thresholds? What do physical postures, silences, or entrances reveal about shifting power?\n- **Props as Objective Correlatives:** Physical objects materialize unseen tension (e.g., Ibsen’s locked letterbox and hidden macaroons; Macbeth’s imaginary dagger).\n- **Dialogue Rhythm & Stichomythia:** Rapid single-line alternating exchanges (**stichomythia**) accelerate confrontation, whereas a **soliloquy** invites the audience into moral complicity with a protagonist’s inner division.\n- **Subtext & Dramatic Irony:** Characters often speak trivial domestic lines while contesting existential survival underneath—and when the audience possesses crucial knowledge a character lacks (**dramatic irony**), every confident boast resonates with impending reversal.',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Dramatic Close-Reading Model: Blank Verse & Metatheater in Macbeth (5.5)',
        markdown:
          'In *Macbeth* Act 5, Scene 5, Shakespeare externalizes moral exhaustion directly through broken **blank verse** and **metatheatrical simile**. Reacting to Lady Macbeth’s death with flattened regret (*"She should have died hereafter"*), Macbeth slows iambic pentameter with polysyndetic repetition (*"To-morrow, and to-morrow, and to-morrow"*) and sibilant friction (*"Creeps in this petty pace"*). When he cries *"Out, out, brief candle!"*, apostrophe dissolves into self-aware theater: life shrinks to *"a poor player, / That struts and frets his hour upon the stage,"* before Shakespeare snaps pentameter mid-line on the three-syllable void *"Signifying nothing."* Always track where verse fractures into silence or prose in Shakespearean drama!',
      },
      {
        type: 'playable_diagram',
        spec: ENG_V3_GENRE_CRAFT_MATRIX,
      },
      {
        type: 'heading',
        level: 2,
        text: '5. AoE1.2 — Reader Response, Textual Gaps & Productive Ambiguity',
      },
      {
        type: 'paragraph',
        markdown:
          'Why do perceptive readers arrive at competing—yet equally rigorous—interpretations of the same poem or chapter? Literary theorist **Wolfgang Iser** observed that great literature never spells out every causal link; instead, it embeds **textual gaps (*Leerstellen*)**, unresolved ironies, and polysemous symbols that summon the reader as an active co-creator of meaning. Consider **Emily Dickinson’s *"I felt a Funeral, in my Brain"*** (1896): across five stanzas, insistent ballad-meter percussion (*"treading - treading"*, *"beating - beating"*) and em-dashes culminate when a *"Plank in Reason, broke."* Yet Dickinson’s final **aposiopesis**—ending mid-thought on *"And Finished knowing - then -"*—refuses to specify whether *"Finished knowing"* means physical death, psychological insanity, or transcendent spiritual dissolution beyond rational speech.',
      },
      {
        type: 'paragraph',
        markdown:
          'Achebe and Chopin construct equally productive **AoE1.2 ambiguities**. In *Things Fall Apart*, Achebe deliberately withholds simple moral condemnation or romanticism: is Okonkwo’s final suicide heroic anticolonial refusal to submit to British humiliation, or the tragic culmination of a hyper-masculine isolation that abandoned clan flexibility (`ReligionCulture.jpg` p. 61)? Similarly, in Chopin’s *"The Story of an Hour"*, when doctors pronounce that Louise died *"of joy that kills,"* readers recognize biting **situational and dramatic irony**—yet debate whether Louise’s weak heart stops from devastation at losing newly tasted liberty or from the sheer impossibility of surviving inside Victorian marital coverture.',
      },
      {
        type: 'callout',
        variant: 'syllabus_link',
        title: 'AoE1.2 Bridge: Defending Ambiguity on Paper 1 & HL Essay',
        markdown:
          'Under syllabus topic **AoE1.2 (Reader Response, Ambiguity & Meaning Construction)**, IB examiners award Band 7 precisely when you **embrace textual tension rather than flattening it**. Use qualifying analytical syntax: *"While X invites an initial reading of..., the jarring shift to Y simultaneously destabilizes..."* Demonstrating two plausible, text-supported readings marks mature HL literary judgment.',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'TOK Reflection: Authorial Intention vs Reader Reception',
        markdown:
          'Does an author’s private intention fix a text’s "correct" meaning (known critically as the **intentional fallacy**), or is meaning renegotiated by every historical community of readers? Consider how 19th-century reviewers condemned Ibsen’s *A Doll’s House* as scandalous assault on family order, whereas 21st-century readers examine Nora’s departure alongside systemic economic dependency—same Norwegian script, transformed **horizon of expectation**.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Free Indirect Discourse (FID)',
            definitionMarkdown:
              'Third-person narrative mode adopting a character’s private diction, emotional coloring, and biases without quotation marks or explicit tags (*"he thought"*).',
            markschemeKeyword: 'blended interior focalization',
          },
          {
            term: 'Enjambment & Medial Caesura',
            definitionMarkdown:
              '**Enjambment**: syntax spilling across line endings to build momentum/surplus; **Caesura**: mid-line punctuation pause creating juxtaposition or fracture.',
            markschemeKeyword: 'syntax-vs-lineation tension',
          },
          {
            term: 'Volta (Poetic Turn)',
            definitionMarkdown:
              'Structural, tonal, or rhetorical pivot in a lyric poem (classic sonnet turn at line 9/13, or ode shift from fullness to elegy) redefining earlier imagery.',
            markschemeKeyword: 'structural & tonal shift',
          },
          {
            term: 'Stichomythia & Subtext',
            definitionMarkdown:
              '**Stichomythia**: rapid alternate single-line dialogue sparring in drama; **Subtext**: unspoken power struggle or psychological motive beneath literal spoken lines.',
            markschemeKeyword: 'theatrical tension / unspoken motive',
          },
          {
            term: 'Textual Ambiguity & Dramatic Irony (AoE1.2)',
            definitionMarkdown:
              'Deliberate semantic openness or structural gap between character ignorance and audience/reader awareness—central to Band 7 evaluative nuance.',
            markschemeKeyword: 'polysemous / competing readings',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 4 (AoE2.2 — NEW)
  // =========================================================================
  {
    topicCode: 'AoE2.2',
    title: 'Works in Translation, Cultural Alterity & Contexts of Reception (AoE2.2)',
    summary:
      'Rigorous IB Literature HL guide to reading translated literature critically: domestication vs foreignization, lexical alterity (Kafka, Sophocles, Ibsen), avoiding false phonetic claims, and converting historical context into Criterion A/B literary argument.',
    sourceFileNames: ['ReligionCulture.jpg', 'IB Assessment Calendar 2026-2027.pdf'],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'IB Area of Exploration 2.2 Guiding Questions (Works in Translation)',
        markdown:
          '- **How does reading a work in translation change our relationship to language, idiom, and cultural nuance?** How should you analyze syntax, metaphor, and cultural concepts without erroneously praising an original author for an English translator’s accidental rhyme?\n- **When translators choose between "domestication" and "foreignization," what is gained or lost?** Why do words like Kafka’s *Ungeziefer*, Sophocles’ *themis*, or Achebe’s self-embedded *chi* resist neat English equivalence?\n- **How can cultural and historical context illuminate literary choices without collapsing into "history-dumping"?**',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Why Works in Translation Are Central to IB English A: Literature HL',
      },
      {
        type: 'paragraph',
        markdown:
          'IB English A: Literature HL insists on genuine **cosmopolitan literary literacy**: at least a third of your 13 studied works are originally composed in languages other than English (such as Ancient Greek, Norwegian, German, French, Spanish, Russian, or Japanese), and your **Individual Oral (IO)** strictly requires pairing **one literary work originally written in English** with **one literary work studied in translation**. Studying works in translation trains you to notice where Western Anglophone norms stop and unfamiliar social, legal, or cosmological worldviews begin—whether encountering **personal *chi* (`ReligionCulture.jpg` p. 14)** inside Achebe’s hybridized English or confronting **Franz Kafka’s *Ungeziefer*** in German-to-English translation.',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Critical Criterion B Rule for Translated Works: Do NOT Analyze Accidental English Phonics!',
        markdown:
          'In Paper 2 and the Individual Oral, **never build a close-reading argument on English alliteration, rhyme, or punning** inside a work studied in translation (e.g., *"Kafka uses soothing s-sibilance in English..."*) unless you explicitly frame it as a **translator’s stylistic mediation**. Instead, ground Criterion B firmly in **features that survive and manifest structurally across translation**: syntactic pacing, narrative focalization, extended conceptual metaphors, spatial symbolism, structural irony, stage directions, and culturally untranslatable terms.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Translation Theory in Practice: Domestication vs Foreignization',
      },
      {
        type: 'paragraph',
        markdown:
          'Translation theorist **Lawrence Venuti** identifies two competing poles every translator navigates. **Domestication** smooths away foreign syntax and cultural friction so the translated work reads effortlessly, as if written originally in natural contemporary English—risking cultural erasure by making Prague, Athens, or nineteenth-century Christiania sound anonymously Anglo-American. **Foreignization**, conversely, intentionally preserves lexical difference, unusual syntax, or culturally specific nouns, signaling to readers that they are crossing a linguistic border.',
      },
      {
        type: 'paragraph',
        markdown:
          'Nowhere is this translation dilemma clearer than in the opening sentence of **Franz Kafka’s *The Metamorphosis* (*Die Verwandlung*, 1915)**. Kafka describes Gregor Samsa waking transformed into an *ungeheueres Ungeziefer*. In Middle High German, *Ungeziefer* literally means **"an unclean animal not fit for sacrifice"**—an amorphous, socially repugnant outcast (*monstrous vermin*), NOT a clean scientific insect species. Translators who render *Ungeziefer* as *"cockroach"* or *"beetle"* domesticate Kafka’s existential horror into neat biology, destroying the very moral ambiguity Kafka sought. Examine the opening passage below using the translation-aware annotation layers.',
      },
      {
        type: 'playable_diagram',
        spec: ENG_V3_KAFKA_TRANSLATION_ANNOTATOR,
      },
      {
        type: 'paragraph',
        markdown:
          'Follow how that opening translation strategy governs the entire novella’s critique of bourgeois family economics. As Gregor’s insectoid body settles into confinement inside his *"proper human room although a little too small,"* Kafka shifts focalization gradually from Gregor’s anxious interior monologue—worried obsessively about repaying his father’s debts rather than his own grotesque transformation—toward his family’s cold commodification of his existence. Even without relying on German sound patterns, English readers trace **syntactic contrast** (clipped, clinical declaratives against meandering rationalizations), **spatial contraction** (doorways slammed shut, furniture stripped out), and **tragicomic situational irony** (the father rejuvenating in a crisp bank messenger uniform while Gregor starves beneath a rotting apple). Whenever a translated work pairs structural precision with deadpan tone, Criterion B rewards unpacking those macro-syntactic and spatial patterns rigorously.',
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Cross-Cultural Lexis & Cultural Alterity Across Translated Traditions',
      },
      {
        type: 'paragraph',
        markdown:
          'Look closely at the **structural contrast** between translating foreign literature into English and Achebe’s self-mediated strategy in *Things Fall Apart*. In *Things Fall Apart*, Achebe wrote directly in English (**meaning it counts ONLY as your English-original text in the IO!**), yet practiced **authorial foreignization from within**: leaving *chi* (`ReligionCulture.jpg` p. 14), **Ani** (p. 30), ***obi*** (p. 56), and ***egwugwu*** (p. 36) untranslated while embedding Igbo proverbs (`Food.jpg` p. 27). Compare how different translated and translingual texts preserve cultural alterity in the matrix below.',
      },
      {
        type: 'playable_diagram',
        spec: ENG_V3_TRANSLATION_COMPARISON_MATRIX,
      },
      {
        type: 'heading',
        level: 3,
        text: 'Three Concrete Translated Traditions in Practice (Greek, Norwegian & German)',
      },
      {
        type: 'paragraph',
        markdown:
          '1. **Ancient Greek Tragedy (*Antigone*):** Ancient Athenian tragedy hinges on religious and civic vocabulary without clean modern equivalents—especially ***nomos*** (human-enacted state decree), ***themis*** (eternal unwritten divine justice), ***philia*** (sacred kinship duty), and ***ate*** (moral blindness leading to ruin). When R. C. Jebb or Robert Fagles translates Antigone’s defiance against Creon, pay attention to **antithetical balanced clauses**, **choral metaphors** (comparing human ingenuity and hubris to sailing dangerous seas), and **stichomythia**—where single-line verbal thrusts survive every English rendering.\n2. **19th-Century Norwegian Bourgeois Realism (*A Doll’s House*):** Henrik Ibsen strips away poetic verse to expose middle-class hypocrisy through **subtext, financial-legal vocabulary, and stage props**. Torvald Helmer’s condescending Norwegian pet names (*lille lerkefugl* / "little lark," "little squirrel") collide in Act 3 against Nora’s sober repudiation of *"what is found in books"* and her longing for *"the miracle"* (*det vidunderlige*). Because modern colloquial translations age quickly, examine **register shifts** across acts alongside silent stage directions (Nora hiding macaroons, removing her tarantella shawl, and slamming the offstage street door).\n3. **Central European & Russian Modernist Prose (*The Metamorphosis*, Chekhov):** Notice how English translators diverge over Kafka’s deadpan bureaucratic style—some smoothing his dense, winding German clauses into crisp short sentences (**domestication**), while others retain long subordinate detours (**foreignization**) that mirror Gregor’s exhausting mental loops as an overworked commercial traveler. In Constance Garnett’s or Richard Pevear & Larissa Volokhonsky’s translations of Russian fiction and drama (Chekhov’s *The Cherry Orchard* or *"The Lady with the Dog"*), pay special attention to **conversational interruptions, elliptical pauses, and sudden shifts in social register**—checking whether a translator domesticates Russian class markers (*patronimics*, formal *vy* vs intimate *ty*) into flat English *"you,"* erasing subtle social hierarchy on the page.',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'How to Acknowledge Translation in Your IO or Paper 2 Without Pedantry',
        markdown:
          '- **Avoid Mechanical Disclaimers:** Do NOT write *"Even though I am reading a translation, I think..."*—that wastes words and undermines confidence.\n- **Integrate Translatorial Awareness Seamlessly:** Write *"In this English rendering of Kafka’s *Ungeziefer* as \'horrible vermin,\' the absence of a concrete insect species preserves Gregor’s social stigma as an un-sacrificable outcast, reinforced across translation by deadpan paratactic denial (\'It wasn’t a dream\')."* One sharp sentence demonstrates AoE2.2 mastery while keeping focus on literary effect.',
      },
      {
        type: 'callout',
        variant: 'syllabus_link',
        title: 'AoE2.2 Bridge to Individual Oral (`COMP.4`): Pairing English & Translated Works',
        markdown:
          'Remember that every **English A: Literature HL Individual Oral** requires pairing **one literary work originally written in English** (e.g., *Things Fall Apart*, *Macbeth*, *Frankenstein*) with **one literary work studied in translation** (e.g., *Antigone*, *A Doll’s House*, *The Metamorphosis*). Selecting a translated partner whose cultural setting (*Thebes, 1879 Christiania, 1915 Prague*) illuminates a **transnational Global Issue** alongside your English text makes your AoE 2 analysis organic and persuasive.',
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Context of Production vs Context of Reception (Avoiding History-Dumping)',
      },
      {
        type: 'paragraph',
        markdown:
          'A persistent pitfall in Area of Exploration 2 (**Time and Space**) is spending two paragraphs reciting historical trivia—World War I trenches, Victorian marriage statutes, or British Indirect Rule in Eastern Nigeria—without demonstrating how historical forces **manifest inside literary form**. IB examiners call this "history-dumping," and it pulls Criterion B down even if the historical facts are accurate. Every contextual observation must pass through the four-stage analytical filter below: **Context of Production → Formal Authorial/Translatorial Choice → Micro-Quotation → Context of Reception**.',
      },
      {
        type: 'playable_diagram',
        spec: ENG_V3_CONTEXT_RECEPTION_MECHANISM,
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'TOK & Translation: Linguistic Relativity and Untranslatable Worlds',
        markdown:
          'Does reading *Antigone* or *The Metamorphosis* in English give us access to "the same work" Sophocles or Kafka created, or an inevitably **re-authored hybrid**? As Sapir–Whorf linguistic relativity reminds us, languages carve social and moral reality differently (*nomos* vs *themis*, *Ungeziefer*, Igbo *chi*). When two translations of the same passage yield conflicting interpretations, the translation itself becomes a lens onto how language mediates human knowledge.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Domestication vs Foreignization',
            definitionMarkdown:
              'Venuti’s translation spectrum: **Domestication** erases foreign cultural friction into fluent target-language norms; **Foreignization** preserves lexical/syntactic alterity.',
            markschemeKeyword: 'translatorial mediation',
          },
          {
            term: 'Ungeziefer (Kafka, The Metamorphosis)',
            definitionMarkdown:
              'German noun meaning "unclean creature unfit for sacrifice" (*horrible/monstrous vermin*)—broader and more morally stigmatizing than a specific insect.',
            markschemeKeyword: 'lexical alterity / ambiguity',
          },
          {
            term: 'Nomos vs Themis (Sophocles, Antigone)',
            definitionMarkdown:
              'Greek tension between mortal state decree (*nomos*) and unwritten, eternal divine/ancestral justice (*themis* / *agatha nomima*).',
            markschemeKeyword: 'divine vs civic law',
          },
          {
            term: 'Context of Production vs Context of Reception',
            definitionMarkdown:
              '**Production**: cultural/historical pressures shaping an author’s form; **Reception**: how shifting audiences across time/place reinterpret textual stakes.',
            markschemeKeyword: 'historicized interpretation',
          },
          {
            term: 'Transferable Stylistic Features (Translation)',
            definitionMarkdown:
              'Techniques reliably preserved in translation—syntactic pacing, focalization, extended metaphor, spatial props, stage directions, and structural irony—unlike accidental English phonics.',
            markschemeKeyword: 'structural & syntactic craft',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 5 (AoE3.1 — NEW, cross-links AoE3.2 & COMP.2)
  // =========================================================================
  {
    topicCode: 'AoE3.1',
    title: 'Intertextuality, Genre Conventions & Comparative Synthesis (AoE3.1–AoE3.2)',
    summary:
      'Area of Exploration 3 (Intertextuality: Connecting Texts) blueprint: canonical counter-discourse, tragic evolution from Sophocles to Achebe and Ibsen, point-by-point Paper 2 synthesis, and formulating rigorous AoE3.2 IO Global Issues.',
    sourceFileNames: ['Family.jpg', 'Food.jpg', 'ReligionCulture.jpg'],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'IB Area of Exploration 3 Guiding Questions (Intertextuality: Connecting Texts)',
        markdown:
          '- **In what ways do texts adhere to or deviate from conventions associated with literary forms or traditions?** How do authors borrow classical tragic structures, mythic motifs, or realist rooms only to subvert their ideological assumptions?\n- **How can diverse texts shed light on one another when compared around a shared Global Issue (AoE3.2)?** What makes a comparative thesis illuminating rather than superficial?\n- **How do post-colonial and modern writers "write back" to canonical precursors?** How does Achebe simultaneously converse with Yeats, Conrad, and Greek tragedy?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Intertextuality & Counter-Discourse: Texts Speaking Across Time',
      },
      {
        type: 'paragraph',
        markdown:
          'No literary work is composed in a vacuum. Under **Area of Exploration 3 (*Intertextuality: Connecting Texts*)**, you examine how authors echo, remodel, ironize, or dismantle existing traditions. Intertextuality operates across three distinct registers:\n1. **Explicit Allusion & Epigraph:** Direct verbal dialogue with another text (e.g., Achebe’s epigraph from Yeats’s *"The Second Coming"*, or Wilfred Owen’s bitter Latin inversion of Horace’s *Dulce et decorum est pro patria mori*).\n2. **Canonical Counter-Discourse ("Writing Back"):** Post-colonial and feminist writers inhabiting and reversing dominant literary myths—just as Achebe wrote *Things Fall Apart* directly against Joseph Conrad’s *Heart of Darkness* (1899) and Joyce Cary’s *Mister Johnson* to prove African villagers were complex moral agents speaking subtle proverbs (`Food.jpg` p. 27) rather than voiceless background.\n3. **Structural & Genre Transformation:** Rewriting an inherited form—such as transforming classical Aristotelian tragedy into post-colonial historical anti-catharsis or middle-class realist drama.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Case Study in Counter-Discourse: Achebe Answering Conrad’s Heart of Darkness',
      },
      {
        type: 'paragraph',
        markdown:
          'Why did Achebe single out Joseph Conrad’s *Heart of Darkness* (1899) as his chief intertextual adversary? Even when Conrad’s narrator Marlow punctures Victorian imperial arrogance on the Thames—calling conquest *"not a pretty thing"* (`litotes`) and admitting Britain too was once *"one of the dark places of the earth"*—Conrad still strips African characters of articulate speech, interiority, and civic order. Achebe flips the lens systematically in Part 1 of *Things Fall Apart*: instead of mute shadows along a riverbank, Umuofia unfolds through **kola-nut diplomacy (`Food.jpg` p. 19)**, **shared locust harvests (p. 56)**, **nine-village wrestling drums (`ReligionCulture.jpg` pp. 3, 42)**, and **judicial *egwugwu* trials (p. 36)**. Only on the final page does Achebe allow a European narrator—the District Commissioner—to speak, deliberately exposing how shallow his planned ethnographic chapter (*"a reasonable paragraph"*) looks after readers have lived inside Umuofia’s tragedy for two hundred pages.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Intertextual Drama Lab: Sophocles’ Antigone & Achebe’s Umuofia',
      },
      {
        type: 'paragraph',
        markdown:
          'Consider the profound intertextual resonance between **Sophocles’ *Antigone* (c. 441 BCE, studied in translation)** and **Chinua Achebe’s *Things Fall Apart* (1958, original English)**. Both works center on a community governed by **unwritten ancestral and ecological laws**—in Thebes, the eternal *"unwritten and unfailing statutes"* of Zeus and underworld Justice; in Umuofia, **Ani’s Week of Peace**, the ***egwugwu***, and the **Oracle (`ReligionCulture.jpg` pp. 30, 36, 57)**. And in both works, an authoritarian male leader—King Creon in Thebes, Okonkwo in his domestic compound (`Family.jpg` pp. 20, 29, 38)—equates compromise with emasculation (*"no woman shall rule me"* vs *"showing weakness is bad"*, `ReligionCulture.jpg` p. 61). Explore Antigone’s defiant speech below to see how Sophoclean rhetoric speaks directly to Achebe’s world.',
      },
      {
        type: 'playable_diagram',
        spec: ENG_V3_INTERTEXTUAL_ANTIGONE_ANNOTATOR,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. How Literary Traditions Transform Tragedy Across Three Eras',
      },
      {
        type: 'paragraph',
        markdown:
          'Studying tragedy diachronically across AoE 3 reveals how **genre conventions encode historical ideology**. Classical tragedy elevates royal protagonists whose *hamartia* triggers divine reversal (*peripeteia*) and collective purgation (*catharsis*). Achebe adapts that tragic stature to an untitled farmer’s son (`Family.jpg` pp. 4, 18), then deliberately **shatters Aristotelian catharsis** when the District Commissioner reduces Okonkwo’s death to a single curious paragraph. Nineteenth-century naturalist playwrights like Henrik Ibsen move further inward—replacing kings and royal curses with locked letterboxes, financial ledgers, and a slammed parlor door. Inspect the comparative diagram below.',
      },
      {
        type: 'playable_diagram',
        spec: ENG_V3_TRAGIC_ARCHITECTURE_EXPLORER,
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Point-by-Point Comparative Synthesis (Paper 2 & AoE3.2 Mastery)',
      },
      {
        type: 'paragraph',
        markdown:
          'Whether drafting a **Paper 2 Comparative Essay (`COMP.2`, 1h 45m, 30 marks)** or structuring your **AoE3.2 Comparative Synthesis**, the single biggest structural divide separating Band 4–5 from Band 7 is **Point-by-Point ("ABAB") Integration** versus **Split-Block ("AABB") Essays**.\n- **The Split-Block Trap (AABB):** Discussing Work A for three pages, inserting *"Moving to Work B..."*, discussing Work B for three pages, and gluing two similarity sentences onto the conclusion. This isolates analysis and caps Criterion B.\n- **The Point-by-Point Comparative Architecture (ABAB):** Organize every body paragraph around a **shared formal choice or conceptual tension** (e.g., *spatial confinement*, *unreliable focalization*, *violation of sacred law*), analyze Author A’s technique and effect, then pivot **immediately inside the same paragraph** using analytical comparatives (*"Whereas Author A... Author B similarly/conversely..."*) to evaluate **how and why** the two authors diverge in reader effect.',
      },
      {
        type: 'playable_diagram',
        spec: ENG_V3_PAPER2_WORKED_EXAMPLE,
      },
      {
        type: 'heading',
        level: 3,
        text: 'Five High-Yield Comparative Lenses for Paper 2 Paragraphs',
      },
      {
        type: 'paragraph',
        markdown:
          'When planning a 1-hour-45-minute **Paper 2 Comparative Essay**, organize your three body paragraphs around **formal comparative lenses** rather than plot summaries so every topic sentence commands both texts seamlessly:\n1. **Focalization & Narrative Reliability:** Compare *who controls the narrative lens* (e.g., third-person limited proximity vs dramatic dialogue or framed storytelling).\n2. **Domestic vs Institutional Space:** Contrast how private compounds, parlors, or bedrooms reproduce or resist public law (`Family.jpg` p. 20 vs Kafka’s room or Ibsen’s parlor).\n3. **Material Rituals, Props & Taboos:** Evaluate how concrete objects (kola nuts, sisal-ringed yams, locked letterboxes, wedding gowns, funerary soil) materialize moral conflict.\n4. **Linguistic Silencing & Counter-Voice:** Examine how dominant diction labels subordinates (*agbala*, *"little lark"*, *"horrible vermin"*) and where marginalized voices interrupt.\n5. **Structural Closure vs Anti-Catharsis:** Compare how both endings leave the reader—soothing moral order restored vs unsettling historical or social rupture.',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Paper 2 Trap: Ignoring Prompt Qualifiers & Forgetting Divergences',
        markdown:
          'Examiners repeatedly note two avoidable flaws in Paper 2: **(1) Prompt Distortion**—bending an unseen prompt into a pre-memorized theme essay without addressing key qualifiers (*"minor characters," "conflict between public duty and private desire," "to what extent"*); and **(2) Forced Similarity**—pretending two texts do *"the exact same thing."* Top Criterion B marks celebrate **meaningful contrast**: explaining why *divergence in form* creates *divergence in emotional or political effect*.',
      },
      {
        type: 'heading',
        level: 2,
        text: '5. AoE3.2 Global Issue Formulation: The Three Mandatory Litmus Tests',
      },
      {
        type: 'paragraph',
        markdown:
          'In **AoE3.2**, comparative synthesis also requires framing a razor-sharp **Global Issue** for your Individual Oral (`COMP.4`). Broad thematic nouns (*"Gender," "Power," "Colonialism," "Religion"*) fail Criterion A & C because they leave you with nothing specific to prove across two 40-line extracts. Every valid IB Global Issue must pass **all three official IB tests**:\n1. **Significant on a wide/large scale** (matters deeply beyond an isolated private quirk);\n2. **Transnational** (crosses national, cultural, or historical boundaries so both an English work and a translated work illuminate it organically);\n3. **Impact felt in everyday local contexts** (visible inside concrete households, meals, classrooms, streets, or rituals—just as `Family.jpg` and `Food.jpg` locate patriarchal power inside compound walls and yam mounds).\n\nCompare weak broad labels against Band 7 Global Issues across the official Fields of Inquiry:\n- **Field 1 (*Culture, identity and community*):** Weak: *"Patriarchy."* → **Band 7:** *"How masculine status anxiety weaponizes domestic hierarchy and daily subsistence rituals to silence emotional vulnerability."*\n- **Field 2 (*Beliefs, values and education*):** Weak: *"Religion vs change."* → **Band 7:** *"How intergenerational rupture arises when rigid institutional orthodoxy refuses to accommodate personal conscience or empathy."*\n- **Field 3 (*Politics, power and justice*):** Weak: *"Abuse of power."* → **Band 7:** *"How authoritarian rulers conflate personal pride with civic stability, overriding unwritten communal ethics until institutional legitimacy fractures."*\n- **Field 4 (*Art, creativity and the imagination*):** Weak: *"Storytelling."* → **Band 7:** *"How marginalized speakers reclaim oral tradition, proverb, and counter-narrative to resist erasure by dominant written histories."*',
      },
      {
        type: 'callout',
        variant: 'syllabus_link',
        title: 'Cross-Link to COMP.2 (Paper 2): Keep Text Pools Strictly Separate!',
        markdown:
          'While *Things Fall Apart* + *Antigone* makes a dazzling AoE 3 comparative seminar or IO pairing (1 English + 1 Translation), remember the **IB Non-Duplication Rule**: if you choose those two texts for your **May 2027 Individual Oral**, you **CANNOT** write about either *Things Fall Apart* or *Antigone* on your **May 2028 Paper 2 Comparative Essay** or **HL Essay**! Practice the point-by-point pivot skill here, then deploy it across two fresh Paper 2 works.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Canonical Counter-Discourse',
            definitionMarkdown:
              'Post-colonial or revisionist literary strategy of rewriting canonical works/myths from marginalized perspectives (e.g., Achebe answering Conrad and Yeats).',
            markschemeKeyword: 'writing back / subversion',
          },
          {
            term: 'Point-by-Point Synthesis (ABAB)',
            definitionMarkdown:
              'Comparative essay structure weaving Work A and Work B inside every body paragraph around shared stylistic or conceptual criteria rather than two separate halves.',
            markschemeKeyword: 'continuous comparative evaluation',
          },
          {
            term: 'Hamartia, Peripeteia & Anti-Catharsis',
            definitionMarkdown:
              'Tragic error/flaw (*hamartia*) and sudden reversal (*peripeteia*); modern/post-colonial writers often deny soothing emotional *catharsis* to provoke political critique.',
            markschemeKeyword: 'tragic architecture & subversion',
          },
          {
            term: 'Three IB Global Issue Tests (AoE3.2)',
            definitionMarkdown:
              'Every IO Global Issue must be **(1) wide-scale significant, (2) transnational, and (3) observable in everyday local human contexts**.',
            markschemeKeyword: 'transnational + everyday impact',
          },
          {
            term: 'Allusion vs Structural Intertextuality',
            definitionMarkdown:
              '**Allusion**: brief verbal/symbolic echo of a precursor; **Structural Intertextuality**: adopting and transforming a precursor’s plot, epigraph, or genre frame.',
            markschemeKeyword: 'intertextual dialogue',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // GUIDE 6 (COMP.1 — NEW, cross-links COMP.3 & COMP.4)
  // =========================================================================
  {
    topicCode: 'COMP.1',
    title: 'Paper 1 Unseen Commentary, HL Essay & IO Planning Lab (COMP.1, COMP.3 & COMP.4)',
    summary:
      'Tactical exam and coursework execution guide for HL Paper 1 (both unseen texts / 40 marks, featuring unseen prose non-fiction analysis), HL Essay (1,200–1,500w concept inquiry), and Individual Oral (10m + 5m extract/whole-work delivery).',
    sourceFileNames: ['IB Assessment Calendar 2026-2027.pdf', 'Food.jpg'],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Assessment Execution Guiding Questions (COMP.1, COMP.3 & COMP.4)',
        markdown:
          '- **How do HL candidates sustain Band 7 analytical rigor across TWO unseen texts in 2 hours 15 minutes (`COMP.1`)?** What separates an analytical movement-based essay from linear chronological summary?\n- **How does the HL Essay (`COMP.3`, 1,200–1,500 words) transform a broad admiration for a novel/play into an academic conceptual argument anchored in one of the 7 IB Concepts?**\n- **How do you curate a ≤40-line IO extract (`COMP.4`) that unlocks whole-work significance without losing your 50/50 time balance?**',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Paper 1 HL Execution Protocol (`COMP.1` · 2h 15m · Both Texts · 40 Marks)',
      },
      {
        type: 'paragraph',
        markdown:
          'Paper 1 is your single largest external examination component (**35% of HL Literature**). You receive **two unseen literary passages** drawn from distinct forms—most commonly one prose fiction or prose non-fiction extract paired with one poem or dramatic scene—each printed with an official **Guiding Question**. At HL, **you must answer BOTH passages (20 marks each = 40 marks total)**. Time management is existential: spend **strictly 65–67 minutes on Passage 1** (10 minutes reading, annotating, and thesis outlining + 50 minutes drafting + 5 minutes proofreading) and **strictly 65–67 minutes on Passage 2**. Even a brilliant 19/20 Essay 1 plus a rushed 8/20 Essay 2 yields 27/40, whereas two balanced 16/20 essays earn 32/40 (comfortably Band 7 territory).',
      },
      {
        type: 'callout',
        variant: 'definition',
        title: 'The 10-Minute Unseen Annotation Sprint (Do Not Start Writing Blind!)',
        markdown:
          '1. **Minutes 0–2 (Deconstruct Prompt + Genre):** Underline the key terms in the **Guiding Question** (it always points toward a fruitful technique or tension!). Identify form, speaker/narrator, and implied audience.\n2. **Minutes 2–5 (Trace the Structural Arc):** Find the extract’s **turning point (volta / focalization shift / entrance / tonal rupture)** and divide the passage into **2–3 analytical movements**.\n3. **Minutes 5–8 (Select Micro-Quotes):** Circle 6–9 punchy 2–6 word phrases displaying sharp **authorial craft** (metaphor, syntax inversion, irony, sensory contrast, prosody).\n4. **Minutes 8–10 (Write Conceptual Thesis):** Draft a one-sentence **conceptual thesis** directly answering the Guiding Question and forecasting how the passage shifts from Movement A to Movement B.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Unseen Paper 1 Prose Non-Fiction Lab: W.E.B. Du Bois (1903)',
      },
      {
        type: 'paragraph',
        markdown:
          'Many HL candidates prepare thoroughly for poetry and fiction yet freeze when Paper 1 presents **literary prose non-fiction**—an essay, memoir, autobiography, travelogue, or epistle. Unlike dry journalism, literary non-fiction crafts an **authorial persona**, deploys **extended conceptual metaphors**, manipulates **periodic and paratactic syntax**, and positions the reader ethically. Inspect the classic opening of W.E.B. Du Bois’s *The Souls of Black Folk* (1903) below as an unseen Paper 1 passage, toggling layers to spot how rhetorical voice and figurative imagery construct double-consciousness.',
      },
      {
        type: 'playable_diagram',
        spec: ENG_V3_P1_DUBOIS_ANNOTATOR,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Paper 1 Step-by-Step Essay Architecture (20 Marks Worked Lab)',
      },
      {
        type: 'paragraph',
        markdown:
          'Once you have annotated Du Bois’s prose non-fiction extract, how do you turn raw observations into a coherent **20-mark Band 7 commentary**? Never march line-by-line (*"In line 1 Du Bois says... In line 2 he says..."*). Group evidence into **thematic-stylistic movements** that answer the Guiding Question. Step through our worked Paper 1 build below, observing how `[A1]`–`[D1]` rubric criteria lock into place.',
      },
      {
        type: 'playable_diagram',
        spec: ENG_V3_P1_WORKED_EXAMPLE,
      },
      {
        type: 'heading',
        level: 3,
        text: 'Genre-Rapid Paper 1 Checklist: Poetry vs Drama vs Prose Fiction',
      },
      {
        type: 'paragraph',
        markdown:
          'Since Paper 1 HL pairs **two different literary forms** in 2h 15m, pair your prose non-fiction workflow with tailored entry points for the remaining three genres:\n- **Unseen Poetry:** Scan stanza shape and rhyme first; locate the **volta** (turn); test how **enjambment vs caesura** conflicts with grammatical sentences; analyze concrete imagery, figurative conceits, and acoustic shifts (sibilance/plosives/metrical inversion) rather than counting syllables mechanically. Always ask *how the final stanza revises, undercuts, or deepens the opening claim*.\n- **Unseen Drama:** Read **italicized stage directions** with the same rigor as dialogue; map **proxemics** (who enters, exits, kneels, or blocks the doorway); inspect **subtext, interrupted speeches, and props** to ask how live stage tension alters spoken words and positions the theater audience.\n- **Unseen Prose Fiction:** Identify **who speaks vs who perceives (focalization)**; catch **free indirect discourse** (character thoughts disguised as neutral narration); contrast **paratactic speed vs hypotactic hesitation** and examine how physical setting reflects or mocks interior psychology.\n- **Five-Minute Criterion D Proofread:** Before turning to Passage 2 at minute 67, verify every paragraph opens with a conceptual topic sentence tied explicitly to the Guiding Question, replace vague verbs (*"shows," "uses," "proves"*) with analytical precision (*"exposes," "destabilizes," "reconfigures," "ironizes"*), and ensure all quotations are woven syntactically in the **literary present tense**.',
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Higher Level Essay Workshop (`COMP.3` · 1,200–1,500 Words · 20 Marks)',
      },
      {
        type: 'paragraph',
        markdown:
          'Unlike timed exams, the **HL Essay** gives you months to pursue a polished academic argument (**1,200–1,500 words strictly; 20% of HL grade**) on **one literary work** not used in your Individual Oral or Paper 2. Per the **CRHS IB Assessment Calendar**, your **HL Essay Proposal is due November 19, 2027**, and your **Final Essay is due February 17, 2028** (uploaded to IB by March 15). To earn 18–20/20, your **Line of Inquiry (LOI)** must fuse three elements: **(1) One of the 7 IB Concepts**, **(2) Specific formal/authorial techniques**, and **(3) A focused debatable literary claim**—never a vague biography or plot survey.',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'HL Essay Line of Inquiry Diagnostics & Revision Audit (Nov 19 → Feb 17)',
        markdown:
          '- **Weak Topic:** *"How gender inequality is shown in Things Fall Apart."* (No specific formal focus, invites plot summary across 25 chapters.)\n- **Band 7 Conceptual LOI (Concept: Representation / Culture):** *"Through what syntactic, proverbial, and domestic-spatial strategies does Chinua Achebe’s Things Fall Apart simultaneously dignify Igbo agrarian diplomacy and expose the tragic brittleness of Okonkwo’s patriarchal insecurity?"*\n- **Revision Audit (Proposal → Final Draft):** Keep paragraphs tightly sequenced (Intro ~140w → 3–4 analytical body sections ~310w each → Conclusion ~120w). Highlight every sentence that merely summarizes plot in yellow and replace it with **authorial technique → reader effect**; cite primary editions consistently (MLA/Chicago); avoid dumping secondary critics unless debating a concrete textual reading; and keep total word count safely between **1,350 and 1,480 words**.',
      },
      {
        type: 'heading',
        level: 2,
        text: '5. Individual Oral (IO) Planning Lab (`COMP.4` · 15 Min · 40 Marks)',
      },
      {
        type: 'paragraph',
        markdown:
          'For CRHS Grade 11 students, **Mock Individual Orals run throughout April 2027** and **Final Recorded Individual Orals run throughout May 2027**. Three technical rules govern every top-scoring Literature HL Oral:\n1. **Strict Text Pairing:** **1 literary work originally written in English + 1 literary work studied in translation** (zero non-literary media!).\n2. **Continuous ≤40-Line Extracts:** Select **one continuous passage** (≤40 lines) from each work—never stitch scattered lines from Chapter 2, Chapter 5, and Chapter 12 together! Choose an extract dense enough in stylistic choices (*simile, focalization, stage directions, enjambment, proverb*) to sustain 2 solid minutes of close reading.\n3. **50/50 Extract-to-Whole-Work Balance & 10-Bullet Outline:** Spend **equal time (~2 min extract + ~2 min whole work)** on BOTH works inside your **10-minute uninterrupted talk**, working strictly from a clean **10-bullet-point outline** (not a read-aloud essay script!). Leave whole-work counter-evidence ready for the **5-minute conversational teacher Q&A**.',
      },
      {
        type: 'playable_diagram',
        spec: ENG_V3_IO_TFA_WORKED_EXAMPLE,
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Acing the 5-Minute Teacher Q&A (Preparing Unscripted Follow-Up Evidence)',
        markdown:
          'Examiners use the 5-minute discussion to test genuine whole-work command beyond your rehearsed 10 minutes. Prepare quick mental anchors for three predictable prompts: **(1) Counter-example check** (*"Does any scene in Things Fall Apart complicate Okonkwo’s tyranny—such as his devotion to Ezinma or Nwakibie’s respectful kola diplomacy on p. 19?"*); **(2) Technique-to-whole-work check** (*"Where else does that crop or domestic space metaphor shift across Part 2 or Part 3?"*); and **(3) Comparative divergence** (*"How does the ending of your translated work leave the Global Issue unresolved differently from Achebe?"*). Answer in 30–45 second bursts anchored in fresh scenes!',
      },
      {
        type: 'callout',
        variant: 'syllabus_link',
        title: 'Complete Component Cross-Reference (COMP.1–COMP.4)',
        markdown:
          'Check your syllabus tracker regularly across **COMP.1** (Paper 1 Both Unseen Texts), **COMP.2** (Paper 2 Comparative Essay), **COMP.3** (HL Essay Proposal Nov 19 / Final Feb 17), and **COMP.4** (IO Mock April 2027 / Final May 2027). Maintaining separate text assignments across IO, HL Essay, and Paper 2 guarantees zero last-minute panic in Grade 12.',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Paper 1 Both-Texts Rule (COMP.1)',
            definitionMarkdown:
              'At HL, candidates MUST analyze BOTH unseen extracts (2 different forms) in 2h 15m (~65 min each) for 40 marks (35% of final HL grade).',
            markschemeKeyword: '2 × 20 marks · balanced pacing',
          },
          {
            term: 'Movement-Based Commentary',
            definitionMarkdown:
              'Organizing Paper 1 essays around 2–3 tonal, structural, or figurative shifts rather than mechanical line-by-line chronological summary.',
            markschemeKeyword: 'analytical organization (Criterion C)',
          },
          {
            term: 'HL Essay Line of Inquiry (COMP.3)',
            definitionMarkdown:
              'Focused, arguable thesis anchoring a 1,200–1,500 word essay in 1 of the 7 IB Concepts and specific authorial techniques on an isolated work.',
            markschemeKeyword: 'concept-driven inquiry (1,200–1,500w)',
          },
          {
            term: 'IO Continuous ≤40-Line Extract (COMP.4)',
            definitionMarkdown:
              'Single unbroken passage (max 40 lines) per work (1 English original + 1 translated literary work), balanced equally (50/50) with whole-work significance.',
            markschemeKeyword: '1 Eng + 1 Trans · 50/50 balance',
          },
          {
            term: 'Anadiplosis & Hypophora (Prose Non-Fiction)',
            definitionMarkdown:
              '**Anadiplosis**: repeating the final word of one clause at the start of the next (*"unasked question: unasked by some"*); **Hypophora**: voicing and answering an implied question.',
            markschemeKeyword: 'rhetorical emphasis / cadence',
          },
        ],
      },
    ],
  },
];
