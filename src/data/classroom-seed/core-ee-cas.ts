import type { ClassroomSeedCoreResource, CoreStarterProjectOverride } from './types';

export const CORE_CLASSROOM_RESOURCES: ClassroomSeedCoreResource[] = [
  // =========================================================================
  // EXTENDED ESSAY (Class of 2028 · FA2027 30-Mark Guide) — 10 Folder Files
  // =========================================================================
  {
    id: 'ee-timeline-2028',
    projectType: 'EE',
    subjectSlug: null,
    title: 'EE Timeline: May 2028 Cohort (CRHS Official Dates)',
    category: 'Timeline & Deadlines',
    summary:
      'Official Charlottetown Rural High School 2026–2028 EE schedule from UPEI Library Orientation (Nov 4, 2026) through Viva Voce (Jan/Feb 2028).',
    sourceFileName: 'Timeline 2028 cohort.docx',
    externalUrl: 'https://drive.google.com/file/d/1yBUhW85j8I5qpnel3qM9q6e8flmlJ7MO/view?usp=drivesdk',
    contentMarkdown: [
      '### Extended Essay Official Milestone Schedule (May 2028 Cohort)',
      '| Target Window | Milestone | CRHS Expectation |',
      '| :--- | :--- | :--- |',
      '| Sep 2026 – Jan 22, 2027 | Prep Sessions & Topic Choice | Explore EE expectations, pick IB subject, conduct preliminary reading, draft initial RQ |',
      '| **Nov 4, 2026 (9:00–11:30)** | **UPEI Robertson Library Orientation** | Academic database training & library borrowing access for IB EE cohort |',
      '| **Nov 26, 2026** | **RQ Proposal & Supervisor Form** | Submit RQ in ManageBac + Request for Supervisor Form for EE Coordinator approval |',
      '| **Dec 2026 – Jan 21, 2027** | **First Formal Meeting (RPF 1)** | Meet supervisor; log reflections in ManageBac Researcher’s Reflection Space (RRS) |',
      '| **Mar 31, 2027** | **Annotated Bibliography** | Submit evaluated sources-to-date bibliography in Google Classroom |',
      '| **Apr 22, 2027** | **1,000-Word Checkpoint** | Submit to Turnitin + Google Classroom ("red/yellow/green light" direction check; required to retain supervisor) |',
      '| **May 2027** | **Second Formal Meeting (RPF 2)** | Interim progress interview & summer plan entered into ManageBac RRS |',
      '| Summer – Early Sep 2027 | Independent Drafting | Suggested ~2 hours/week research & writing; early September check-in |',
      '| Mid Oct 2027 | Full Draft for Review | Submit authenticated full draft (≤4,000 words) for one-time supervisor feedback meeting |',
      '| **Early Dec 2027** | **Final EE Due** | Turnitin & Google Classroom submission; supervisor predicted grade |',
      '| Jan – Feb 2028 | **Viva Voce & Final 500w Reflection** | Exit interview + 500-word RPF entered in ManageBac (3–5 hrs supervision logged) |',
    ].join('\n'),
  },
  {
    id: 'ee-brief-intro',
    projectType: 'EE',
    subjectSlug: null,
    title: 'EE Brief Intro: FA2027 30-Mark Structure & Pathway Choice',
    category: 'Overview & Rubric',
    summary:
      'Classroom orientation deck introducing the revised FA2027 30-mark EE rubric (Criteria A–E), 4,000-word limit, 500-word RPF, and Subject-Focused vs Interdisciplinary pathways.',
    sourceFileName: 'EE Brief Intro.pptx',
    externalUrl: 'https://drive.google.com/file/d/1GYi2LlZvrjtz5Bpdix2ArZndPNncBPT8/view?usp=drivesdk',
    contentMarkdown: [
      '### Key Takeaways from CRHS EE Brief Intro (First Assessment 2027 / Class of 2028)',
      '- **Two Pathways:** **Subject-Focused** (anchored in one DP subject, e.g. Biology, History, English Cat 1/2) OR **Interdisciplinary** (formerly World Studies — synthesizing two DP subjects around an integrated global/local framework).',
      '- **Revised 30-Mark Rubric (FA2027):** Criterion A Framework (`6m`) • Criterion B Knowledge & Understanding (`6m`) • Criterion C Analysis & Line of Argument (`6m`) • Criterion D Discussion & Evaluation (`8m` — highest weight!) • Criterion E Reflection (`4m`).',
      '- **Strict Limits:** Maximum **4,000 words** (body + intro/conclusion + citations/captions excluding bibliography & appendices) and **500-word Reflection** (Criteria E) across three formal sessions totaling 3–5 supervisor hours.',
      '- **Grade Value:** Combined with TOK on the IB Diploma Matrix (0–3 Bonus Core Points); an **E** in either EE or TOK fails the entire Diploma.',
    ].join('\n'),
  },
  {
    id: 'ee-developing-rq-2027',
    projectType: 'EE',
    subjectSlug: null,
    title: 'Developing a High-Scoring EE Research Question (FA2027)',
    category: 'Research Question Craft',
    summary:
      'Workshop slides on moving from broad topic to focused, arguable, bounded research questions suited to 4,000-word investigation.',
    sourceFileName: 'EE Developing a research question 2027.pptx',
    externalUrl: 'https://drive.google.com/file/d/1CeNNumu6le-PlyiV5n6zeVNiruAOA3Vq/view?usp=drivesdk',
    contentMarkdown: [
      '### Step-by-Step Research Question Refinement',
      '1. **Choose a subject you already understand deeply** (usually HL or strong SL) so Criterion B terminology and methodology come naturally.',
      '2. **Narrow by 3 constraints:** Timeframe/context (e.g., *1947–1949* or *Atlantic Canadian Aquaculture*), specific primary/experimental variables, and an **evaluative analytical stem** (*To what extent...*, *How does X compare to Y...*, *What is the relationship between...*).',
      '3. **Run the Feasibility Check:** Avoid dead-end yes/no questions, overly broad textbooks surveys (*"The Causes of WWII"*), or lab biology/chemistry designs needing unsafe pathogens/restricted equipment.',
      '4. **Align Evidence -> Method -> RQ:** Decide BEFORE submitting on Nov 26 which concrete primary sources, datasets, or lab replicates will prove your Criterion D discussion.',
    ].join('\n'),
  },
  {
    id: 'ee-guide-fa2027',
    projectType: 'EE',
    subjectSlug: null,
    title: 'Official IB Extended Essay Guide (First Assessment 2027)',
    category: 'Official Guide',
    summary:
      'Authoritative IB EE Guide for Class of 2028 detailing FA2027 Criteria A–E descriptors, ethical safety guidelines, academic integrity, and citation expectations.',
    sourceFileName: 'EE Guide FA2027.pdf',
    externalUrl: 'https://drive.google.com/file/d/1rVA0djN0IYFkid-_hZJeoVYFvrehzSkV/view?usp=drivesdk',
    contentMarkdown: [
      '### Official FA2027 Assessment Criteria Breakdown (30 Marks Total)',
      '- **Criterion A — Framework for the Essay (6 marks):** Clear, focused research question embedded in subject context, justified methodology/sources, and logical overall structure.',
      '- **Criterion B — Knowledge & Understanding (6 marks):** Sustained application of accurate subject-specific terminology, concepts, and systematic research findings.',
      '- **Criterion C — Analysis & Line of Argument (6 marks):** Breaking down findings analytically so every section systematically drives a coherent reasoned argument answering the RQ.',
      '- **Criterion D — Discussion & Evaluation (8 marks):** Highest-weighted criterion — balanced weighing of counter-arguments, methodological/source limitations, significance, and justified conclusions strictly aligned with evidence.',
      '- **Criterion E — Reflection (4 marks):** Evaluative growth evidenced through the 3 RRS/RPF stages and Viva Voce (transferable research insights beyond mere logbook narrative).',
    ].join('\n'),
  },
  {
    id: 'ee-support-material-fa2027',
    projectType: 'EE',
    subjectSlug: null,
    title: 'IB EE Teacher & Student Support Material (FA2027)',
    category: 'Official Guide',
    summary:
      'IB Teacher Support Material covering Researcher’s Reflection Space (RRS) exemplars, supervisor check-in boundaries, and FA2027 formatting checklists.',
    sourceFileName: 'EE Support Material FA2027.pdf',
    externalUrl: 'https://drive.google.com/file/d/11QFjFKJqflAMSwn7CetzOVAh_A5DGHaz/view?usp=drivesdk',
    contentMarkdown: [
      '### Key Takeaways from FA2027 Support Material',
      '- **Researcher’s Reflection Space (RRS):** Log messy evolving decisions (why you narrowed a variable, discarded an unreliable source, or modified an outline) — strong RRS notes directly feed high Criterion E Reflection.',
      '- **Supervisor Boundaries:** Supervisors provide **initial topic/RQ guidance, 1-hour check-ins totaling 3–5 hours, and written feedback on ONE complete full draft**; they do NOT line-edit grammar or rewrite sections.',
      '- **Formatting:** Title page (essay title, RQ, pathway, word count — NO candidate name or school name), Table of Contents, numbered pages, and standard consistent citations (e.g., Chicago NB for History).',
    ].join('\n'),
  },
  {
    id: 'ee-subject-specific-guide',
    projectType: 'EE',
    subjectSlug: null,
    title: 'EE Subject-Specific Guidance Compendium (Sci, Math, History, Eng, Lang B)',
    category: 'Subject Rules',
    summary:
      'Compendium outlining non-negotiable IB rules per subject group (e.g. Science ethics/safety, History 10-year rule, English Cat 1/2/3 comparison rules, French target language).',
    sourceFileName: 'EESubjectSpecificGuide.pdf',
    externalUrl: 'https://drive.google.com/file/d/1B7se9EpAW2Tyw3fR3e_WXOH3y_xm9X87/view?usp=drivesdk',
    contentMarkdown: [
      '### Crucial Subject-Specific Rules Before Choosing Your EE Subject',
      '- **Biology & Chemistry:** Must state explicit safety/ethics protocols; may be lab-based OR rigorous secondary database/simulation research. Avoid hazardous pathogens, blood/bodily fluids, or untested medical claims.',
      '- **History:** Topic must examine events **at least 10 years prior** to essay submission (i.e. pre-2017/2018 for 2028 cohort); emphasize primary sources + historiographical evaluation rather than textbook summary.',
      '- **English A Literature:** **Category 1** (works originally in English), **Category 2** (English work compared with a translated work), or **Category 3** (Language/cultural texts). Works studied in class CANNOT simply repeat class essays.',
      '- **French B:** Essay MUST be written **entirely in French** across Category 1 (Language), Category 2a/2b (Culture/Society), or Category 3 (Literature).',
      '- **Mathematics:** Balance clear notation, rigorous proofs/modelling, and accessible explanation (no pages of raw unannotated code/spreadsheets).',
    ].join('\n'),
  },
  {
    id: 'ee-faqs-2027',
    projectType: 'EE',
    subjectSlug: null,
    title: 'Official IB Extended Essay FAQs (FA2027 Transition)',
    category: 'Official Guide',
    summary:
      'IB answers to common FA2027 student & coordinator questions: AI citation/integrity rules, word count inclusions, interdisciplinary pathways, and RPF word limit.',
    sourceFileName: 'FAQs EE 2027.pdf',
    externalUrl: 'https://drive.google.com/file/d/1ifSKx1GsumF-sFSLWTRG1m25ZqbrMBch/view?usp=drivesdk',
    contentMarkdown: [
      '### Frequently Asked Questions (FA2027 Cohort Rules)',
      '- **What counts toward 4,000 words?** Introduction, body, conclusion, quotations, and in-text citations/footnotes *when analytical commentary is inside them*. Title page, TOC, maps/charts/equations, bibliography, and appendices do NOT count (examiners stop reading after 4,000 words!).',
      '- **Can I use the same text or topic as an IA or HL Essay?** **Never double-dip** the same text, research question, or dataset between EE and any subject IA / HL Essay / TOK Exhibition.',
      '- **AI Policy:** Generative AI may NEVER write or paraphrase EE prose; any permitted brainstorming/coding/translation assistance must follow strict school & IB attribution policy.',
      '- **RPF Reflection:** Completed in 3 entries (initial, interim, viva voce) with a strict **500-word combined cap**.',
    ].join('\n'),
  },
  {
    id: 'ee-sample-rqs',
    projectType: 'EE',
    subjectSlug: null,
    title: 'Curated Archive of 45+ Real IB EE Sample Research Questions',
    category: 'Research Question Craft',
    summary:
      'Teacher-curated collection of real student EE RQs spanning Biology, Chemistry, History, English Category 1, Psychology, Math/CS, and Interdisciplinary World Studies (incl. PEI & Atlantic Canada topics).',
    sourceFileName: 'SampleResearchQuestions.docx',
    externalUrl: 'https://drive.google.com/file/d/1W03TLxLVRDEMJLcrhg1nTcTggJCj3Ptv/view?usp=drivesdk',
    contentMarkdown: [
      '### Selected Sample Research Questions by Subject (from Class Folder)',
      '- **Biology:** *"To what extent does CRISPR-related technology affect the research and treatment of cancer?"* • *"What effects do repercussions of climate change (extreme weather, hypoxia, ocean acidification) have on preferred shellfish water conditions in the Atlantic Canadian Aquaculture Industry?"*',
      '- **Chemistry:** *"What differences are there between the resistances to, and conductions of, electricity through an ionic solution of H2O and a solution of D2O?"* • *"To what extent does Chinese Herbal Medicine play a role as an anticarcinogenic agent?"*',
      '- **History:** *"To what extent did Belgian colonial policies lead to conflict in the Congo as it gained independence in 1960?"* • *"What factors shaped the evolution of the Scottish Fiddling tradition on PEI in the 20th Century?"* • *"To what extent did Russian hegemony cause political repression leading to the 1956 Hungarian Revolution?"*',
      '- **English Lit (Cat 1):** *"How does Amy Tan in The Joy Luck Club use food to examine relationships and identity within Chinese culture?"* • *"How does Margaret Atwood explore women’s power dynamics in The Handmaid’s Tale and Alias Grace?"*',
      '- **Interdisciplinary (World Studies):** *"To what extent is microbe-plant-associated bioremediation applicable for recovery of cadmium-contaminated soil in southeastern China?"* (Bio + ESS).',
    ].join('\n'),
  },
  {
    id: 'ee-stats-2026',
    projectType: 'EE',
    subjectSlug: null,
    title: 'IB May 2026 Statistical Bulletin: EE Grade Distributions & Core Points',
    category: 'Data & Strategy',
    summary:
      'May 2026 IB Statistical Bulletin visualizations across 103,918 EEs: grade distributions by subject group (A–E) and 2022–2026 DP diploma core points.',
    sourceFileName: 'EE Stats 2026.docx',
    externalUrl: 'https://drive.google.com/file/d/18Hxv1Z_QqnPzhGgFPJ_q0-HZvAlNN0Vu/view?usp=drivesdk',
    contentMarkdown: [
      '### May 2026 Global EE Statistics (Provisional Statistical Bulletin, n = 103,918)',
      '- **Overall EE Grade Split (2026):** **A: 11.4%** • **B: 29.9%** • **C: 41.3%** • **D: 16.1%** • **E: 0.6%** (No grade: 0.6%).',
      '- **Subject Group A / A+B Rates:** The Arts (14.8% A), Lang & Lit (14.0% A / 42.2% A+B), Mathematics (12.5% A / **48.7% A+B**), Language Acquisition (11.3% A), Sciences (11.0% A / **46.9% A+B**), Individuals & Societies (10.0% A / 39.1% A+B).',
      '- **Most Popular EE Subjects:** English A (~15,500) and History (~12,300) account for over a quarter of all global submissions — strong focused RQs & original methodology stand out sharply in crowded pools.',
      '- **Diploma Core Matrix Points (2026):** 3 pts (**12.1%**), 2 pts (**48.4%**), 1 pt (**24.7%**), 0 pts (**14.8%**).',
    ].join('\n'),
  },
  {
    id: 'ee-upei-orientation',
    projectType: 'EE',
    subjectSlug: null,
    title: 'UPEI Robertson Library Orientation Notice (Metadata Only)',
    category: 'Library Orientation',
    summary:
      'CRHS cohort library workshop notice for Nov 4, 2026 at UPEI Robertson Library (personal classmate records redacted cleanly).',
    sourceFileName: 'UPEI Information.pdf',
    externalUrl: 'https://drive.google.com/file/d/1GR5LJ4TOmTHQUJ-fRN09AKqudXwIaHCj/view?usp=drivesdk',
    contentMarkdown: [
      '### UPEI Robertson Library Research Orientation',
      '- **Scheduled Session:** **November 4, 2026 (9:00–11:30)** per Cohort 2028 EE Timeline.',
      '- **Purpose:** Trains Grade 11 CRHS IB students in academic database searching, peer-reviewed source evaluation, interlibrary holds, and university library borrowing accounts.',
      '- **Privacy Note:** Student roster registration metadata is omitted here; open the linked official Drive PDF if authorized.',
    ].join('\n'),
  },

  // =========================================================================
  // CAS 2028 COHORT — ALL 9 FOLDER FILES
  // =========================================================================
  {
    id: 'cas-intro-2026',
    projectType: 'CAS',
    subjectSlug: null,
    title: 'CAS Intro Slideshow 2026: 3 Strands, 7 Learning Outcomes & 5 Stages',
    category: 'Overview & Guide',
    summary:
      'Official CRHS CAS orientation slideshow introducing Creativity, Activity, Service, the 18-month balance requirement, 7 Learning Outcomes (LO1–LO7), and the 5 CAS Stages.',
    sourceFileName: 'CAS Intro Slideshow2026.pptx',
    externalUrl: 'https://drive.google.com/file/d/1PGf4UqVh4JrME9Ong87hHkdFjDRohpBj/view?usp=drivesdk',
    contentMarkdown: [
      '### CRHS CAS 2028 Core Requirements',
      '- **Three Strands:** **Creativity** (arts, coding, music, event curation, problem-solving design), **Activity** (physical exertion contributing to a healthy lifestyle), **Service** (unpaid voluntary reciprocal exchange respecting human dignity & community need).',
      '- **18-Month Continuity:** Maintain steady involvement across Grades 11–12 rather than cramming hours (no fixed hour count in IB CAS — quality, personal challenge, and reflection govern completion).',
      '- **Mandatory CAS Project:** Collaborative, sustained series lasting **≥ 1 month**, demonstrating teamwork and all **5 CAS Stages** (Investigation -> Preparation -> Action -> Reflection -> Demonstration).',
      '- **Every Learning Outcome (LO1–LO7) must be demonstrably evidenced** across your portfolio before the Grade 12 March 28 completion deadline.',
    ].join('\n'),
  },
  {
    id: 'cas-think-globally',
    projectType: 'CAS',
    subjectSlug: null,
    title: 'CAS "Think Globally, Act Locally" — The 7 Learning Outcomes Poster',
    category: 'Learning Outcomes',
    summary:
      'Visual reference summarizing all 7 IB CAS Learning Outcomes (LO1–LO7) connecting personal growth to global engagement.',
    sourceFileName: 'CAS Think Globally Act Locally.pdf',
    externalUrl: 'https://drive.google.com/file/d/1mO86XdIhkpnX-JT9GGDGQGXVTnx2EKnn/view?usp=drivesdk',
    contentMarkdown: [
      '### The 7 IB CAS Learning Outcomes (LO1–LO7)',
      '1. **LO1 — Strengths & Growth Areas:** Identify personal strengths and develop areas for growth.',
      '2. **LO2 — Challenge & New Skills:** Undertake new challenges and develop new skills in the process.',
      '3. **LO3 — Initiate & Plan:** Initiate and plan a CAS experience (crucial for your collaborative CAS Project).',
      '4. **LO4 — Commitment & Perseverance:** Show sustained commitment and perseverance across time.',
      '5. **LO5 — Collaborative Skills:** Recognize the benefits of working collaboratively with others.',
      '6. **LO6 — Global Significance:** Engage with issues of global significance (environment, equity, health, heritage) through local action.',
      '7. **LO7 — Ethics of Choices & Actions:** Recognize and consider the ethics of choices and consequences.',
    ].join('\n'),
  },
  {
    id: 'cas-approval-form',
    projectType: 'CAS',
    subjectSlug: null,
    title: 'CAS Experience Pre-Approval & Supervisor Agreement Form',
    category: 'Forms & Planning',
    summary:
      'Required pre-approval checklist capturing strand alignment, 5 CAS Stages check, ethics/consequences, LO mapping, reflection mode, and adult supervisor sign-off.',
    sourceFileName: 'CAS Approval Form  Final Draft.docx',
    externalUrl: 'https://drive.google.com/file/d/1VYqBYFgKdETkxdKjj8uJJz6oUVbZzTfE/view?usp=drivesdk',
    contentMarkdown: [
      '### Pre-Approval Checklist Questions (Complete Before Starting)',
      '- Identify **Strand(s)** (Creativity / Activity / Service) and **Scope** (Single Experience, Series of Experiences, or CAS Project ≥ 1 month).',
      '- **Guiding Questions:** (1) Will the experience be enjoyable? (2) Does it develop personal interests/skills? (3) What new possibilities or challenges does it pose? (4) What consequences might arise for you, others, and the environment? (5) Which Learning Outcomes (LO1–LO7) apply? (6) If a series/project, did you plan the **5 CAS Stages**? (7) How will you reflect?',
      '- **Adult Supervisor Sign-Off:** Provide non-family adult supervisor name, phone, email, and signed confirmation.',
    ].join('\n'),
  },
  {
    id: 'cas-begin-experience',
    projectType: 'CAS',
    subjectSlug: null,
    title: 'How to Begin a CAS Experience (Onboarding Deck — Open in Drive)',
    category: 'Forms & Planning',
    summary:
      'Step-by-step CAS ManageBac onboarding slideshow covering proposal entry, supervisor invites, and evidence uploads (open binary file directly in Google Drive).',
    sourceFileName: 'How to Begin a CAS Experience.pptx',
    externalUrl: 'https://drive.google.com/file/d/1UtzYZ51lSGigMD8SSgK6pypWha165NQz/view?usp=drivesdk',
    contentMarkdown: [
      '### Beginning & Logging a CAS Experience',
      '- This rich-media PowerPoint file is linked directly on Google Drive (`view?usp=drivesdk`).',
      '- Before beginning any experience, confirm eligibility against the **4 IB CAS criteria**: real/purposeful outcomes, personal challenge, thoughtful consideration/planning, and intentional reflection on LO1–LO7.',
    ].join('\n'),
  },
  {
    id: 'cas-examples-strands',
    projectType: 'CAS',
    subjectSlug: null,
    title: 'Official IB Examples of CAS Experiences (Single & Multi-Strand)',
    category: 'Ideas & Examples',
    summary:
      'Annotated IB matrix of Creativity, Activity, Service, and blended multi-strand experiences explaining WHY each qualifies.',
    sourceFileName: 'CAS Examples of CAS experiences.docx',
    externalUrl: 'https://drive.google.com/file/d/1-0daogvUAz2FyRtBgldR6ch3NhsJ-b-T/view?usp=drivesdk',
    contentMarkdown: [
      '### Curated Examples Across All Three Strands',
      '- **Creativity:** Photography, concert/band mastery, choir, debate club, writing/journalism, coding websites, *Vioitar* instrumental innovation.',
      '- **Activity:** Badminton, basketball, kickboxing, triathlon training, personal gym progression, rugby, soccer, swimming, yoga/tai chi.',
      '- **Service:** Beach clean-up, community environmental club, peer tutoring younger students, organizing community sports clinics.',
      '- **Multi-Strand Synergies:** Dance (Creativity + Activity), Student Council Executive / Newsletter Editor (Creativity + Service), Translating documents for newcomer NGOs (Service), Restoring homes for seniors (Activity + Service).',
    ].join('\n'),
  },
  {
    id: 'cas-service-ideas-crhs',
    projectType: 'CAS',
    subjectSlug: null,
    title: 'CRHS & PEI Local CAS Service Opportunities List',
    category: 'Ideas & Examples',
    summary:
      'School-specific local PEI service ideas including Farmers Helping Farmers fundraising, EYES/Greenhouse Club websites, local watershed tree planting, and elementary tutoring.',
    sourceFileName: 'CAS Service Ideas.docx',
    externalUrl: 'https://drive.google.com/file/d/1Q-4GoSLBjc7k6W1GLp9UEjwbSndLbu6n/view?usp=drivesdk',
    contentMarkdown: [
      '### Charlottetown / CRHS Local CAS Service Ideas',
      '- Tutor at a local elementary school or teach music/instrument workshops during lunch/after school.',
      '- Fundraise or campaign for **Farmers Helping Farmers**, local watershed tree planting, or organized PEI beach clean-ups.',
      '- Volunteer music/reading sessions at a local Seniors Home or certify in Red Cross CPR/First Aid.',
      '- Build websites/digital tools for **EYES Committee**, **Greenhouse Club**, or local non-profits (`C + S`); launch a school nutrition or political awareness campaign (`C + S`); serve as a school bilingual translator.',
    ].join('\n'),
  },
  {
    id: 'cas-aims-goals-sample',
    projectType: 'CAS',
    subjectSlug: null,
    title: 'CAS Initial Aims & Goals — Student Writing Samples',
    category: 'Reflection Craft',
    summary:
      'Three authentic Grade 11 starter goal statements modeling how to diagnose strand gaps (C vs A/S) and frame personal growth intentions.',
    sourceFileName: 'CAS Aims and Goals Sample.docx',
    externalUrl: 'https://drive.google.com/file/d/16Mh4jdvaj6i2Me_6tkkXaMgbDl5qdg00/view?usp=drivesdk',
    contentMarkdown: [
      '### Writing an Authentic Initial Interview Aims & Goals Statement',
      '- **Sample Pattern 1 (Strand Gap Awareness):** Recognizes strong Creativity (violin, art, writing club) and deliberately sets new Activity/Service targets covering missing LOs.',
      '- **Sample Pattern 2 (Patience & Comfort Zone):** Uses new athletic/creative skills to overcome perfectionism frustration and build sustained friendships.',
      '- **Sample Pattern 3 (Quiet Leadership):** Sets an incremental goal to step into locker-room/team planning roles rather than passive participation (**LO3 & LO5**).',
    ].join('\n'),
  },
  {
    id: 'cas-ways-to-be-reflective',
    projectType: 'CAS',
    subjectSlug: null,
    title: '9 Creative Ways to Be Reflective in ManageBac CAS',
    category: 'Reflection Craft',
    summary:
      'Menu of 9 non-essay reflection formats approved by CRHS CAS Coordinators — including 3-2-1 Reflection, Rose/Bud/Thorn, audio podcasts, sketches, and photo essays.',
    sourceFileName: 'Ways to be Reflective.docx',
    externalUrl: 'https://drive.google.com/file/d/1N95ZKgBfgBhLsXvSMrIQ_hB22lmu5rlz/view?usp=drivesdk',
    contentMarkdown: [
      '### Beyond Boring Paragraphs: 9 Approved Reflection Formats',
      '1. **3-2-1 Reflection:** `3` Things I learned • `2` Reasons why I did it • `1` Challenge I faced.',
      '2. **Rose, Bud, Thorn:** *Rose* (highlight/win) • *Bud* (growth opportunity/optimistic next step) • *Thorn* (stress/obstacle & how you adapted).',
      '3. **Creative Formats:** Annotated drawing/infographic with caption, short voice/podcast audio note, **1-minute free write**, captioned progress photos, reflective journaling, or rhyming poem.',
    ].join('\n'),
  },
  {
    id: 'cas-student-reflection-samples',
    projectType: 'CAS',
    subjectSlug: null,
    title: 'Annotated IB Student CAS Reflection Samples (Weak vs Strong)',
    category: 'Reflection Craft',
    summary:
      'IB examiner-style examples distinguishing shallow activity logs ("what I did") from meaningful reflections analyzing feelings, ethical tensions, mistakes, and Learning Outcomes.',
    sourceFileName: 'Samples_of_student_reflections.pdf',
    externalUrl: 'https://drive.google.com/file/d/1X_awBIuh2xFIg37o-Zlyzas1kr2sVu99/view?usp=drivesdk',
    contentMarkdown: [
      '### What Distinguishes a Strong IB CAS Reflection?',
      '- **Avoid purely descriptive diaries:** Listing *"I went to practice for 2 hours and coached kids"* fails to show personal insight.',
      '- **Strong Reflections answer WHY and SO WHAT:** Describe an unexpected challenge (e.g., shy youth refusing to participate, or scheduling failure during a fundraiser), explain what you felt/changed in real time, and link concretely to specific Learning Outcomes (**LO2 Challenge**, **LO5 Collaboration**, **LO7 Ethics**).',
    ].join('\n'),
  },

  // =========================================================================
  // CHEMISTRY SL 2025 IA — ALL 10 LAB INFO GUIDES
  // =========================================================================
  {
    id: 'chem-lab-measurement-data',
    projectType: 'IA',
    subjectSlug: 'chemistry-sl',
    title: 'Lab INFO: Measurement & Data Processing Master Guide',
    category: 'IA Criterion B & Precision',
    summary:
      'Complete IB Chemistry Topic 11 experimental data guide: analogue vs digital uncertainties, precision vs accuracy, % error vs % uncertainty comparison, and linear R^2 fits.',
    sourceFileName: 'Lab INFO  measurement-and-data-processing.pdf',
    externalUrl: 'https://drive.google.com/file/d/1xlJCZ7Awkt2oTAO4pvmJ1TtBRBMQ5rv0/view?usp=drivesdk',
    contentMarkdown: [
      '### Core IA Measurement & Uncertainty Rules',
      '- **Analogue Instrument Uncertainty:** Usually ± half the smallest division (or per manufacturer calibration, e.g., burette ±0.05 cm^3 per reading -> ±0.10 cm^3 for ΔV = V2 - V1).',
      '- **Digital Instrument Uncertainty:** ± the smallest displayed decimal place (e.g., ±0.001 g balance).',
      '- **Random vs Systematic Diagnostic:** Compare **total % propagated random uncertainty** with **% discrepancy from literature value** (`|%err| = |exp - lit|/lit × 100%`). When `%err >> % random uncertainty`, **systematic error** (e.g., calorimetry heat loss) dominates.',
    ].join('\n'),
  },
  {
    id: 'chem-lab-safety',
    projectType: 'IA',
    subjectSlug: 'chemistry-sl',
    title: 'Lab INFO: Laboratory Safety Rules & Risk Assessment (Criterion A)',
    category: 'IA Safety & Design',
    summary:
      'Mandatory CRHS Chemistry lab safety rules: splash goggles, fume-hood rules, SDS hazard checks, acid dilution protocol, and emergency responses.',
    sourceFileName: 'Lab INFO Lab Safety Rules.pdf',
    externalUrl: 'https://drive.google.com/file/d/10Ve6AJRN4xO-6DrivJFu8RRP2nB5Lj9P/view?usp=drivesdk',
    contentMarkdown: [
      '### Mandatory CRHS Lab Safety & IA Criterion A Risk Protocols',
      '- Wear chemical splash goggles continuously; tie back hair; zero food/drink or open-toed footwear in lab.',
      '- Consult **Safety Data Sheets (SDS)** for every reagent before starting your Scientific Investigation; document PPE, fume-hood containment for volatile/toxic gases, acid-into-water dilution, and neutralized waste disposal inside IA Criterion A.',
    ].join('\n'),
  },
  {
    id: 'chem-lab-data-tables',
    projectType: 'IA',
    subjectSlug: 'chemistry-sl',
    title: 'Lab INFO: Data Table Formatting Guidelines',
    category: 'IA Criterion B & Precision',
    summary:
      'IB table conventions: units and ± uncertainties strictly in headers, uniform decimal places matching apparatus precision, and raw vs processed columns.',
    sourceFileName: 'Lab INFO data-table-guidelines.pdf',
    externalUrl: 'https://drive.google.com/file/d/1d3sYhKRalfX3AoYv95qZe4XrZPVcLLEJ/view?usp=drivesdk',
    contentMarkdown: [
      '### Data Table Presentation Rules (IA Communication)',
      '- Write descriptive numbered table titles (*"Table 1: Raw titration volumes of..."*) and include **units + ± absolute uncertainties in column headers ONLY** (e.g., `Titre / cm^3 ± 0.10`), never beside individual data cells.',
      '- Match every cell’s decimal places consistently to instrument precision (e.g., record `25.00`, not `25`). Keep qualitative observations (colour/effervescence/precipitate) clearly tabulated alongside raw quantitative trials.',
    ].join('\n'),
  },
  {
    id: 'chem-lab-experimental-errors',
    projectType: 'IA',
    subjectSlug: 'chemistry-sl',
    title: 'Lab INFO: Experimental Errors Summary (Random vs Systematic)',
    category: 'IA Criterion D Evaluation',
    summary:
      'Diagnostic guide for Criterion D evaluation: distinguishing random scatter from directional systematic bias and proposing realistic apparatus/methodology fixes.',
    sourceFileName: 'Lab INFO experimental-errors-summary.pdf',
    externalUrl: 'https://drive.google.com/file/d/1NExVM9IAF32Z7nQr3RoSvuj1N4_9dlGK/view?usp=drivesdk',
    contentMarkdown: [
      '### Writing High-Scoring Criterion D Error Evaluations',
      '- **Random Error (Precision limit):** Equal chance of reading high/low -> seen in replicate trial spread (`max - min`). Fix by repeating >=5 replicates or upgrading glassware precision (volumetric pipette over graduated cylinder). **Never blame "human error"!**',
      '- **Systematic Error (Directional accuracy bias):** Consistently shifts measured ΔH low (heat loss to calorimeter air) or concentration high (wet burette). Fix by bomb/insulated calorimeter + cooling-curve extrapolation or rinsing burette with titrant before filling.',
    ].join('\n'),
  },
  {
    id: 'chem-lab-graphing',
    projectType: 'IA',
    subjectSlug: 'chemistry-sl',
    title: 'Lab INFO: Scientific Graphing & Error-Bar Guidelines',
    category: 'IA Criterion B & Precision',
    summary:
      'Checklist for IB chemistry graphs: IV on x-axis, DV on y-axis, >50% grid fill, error bars, max/min slope lines, and R^2 interpretation.',
    sourceFileName: 'Lab INFO graphing-guidelines.pdf',
    externalUrl: 'https://drive.google.com/file/d/1-JapCArA0sfd8TW3Cpy_Pp81UoyFEuRm/view?usp=drivesdk',
    contentMarkdown: [
      '### Checklist for Criterion B & C Processed Graphs',
      '- Independent variable on horizontal axis (`x`), dependent on vertical (`y`), labeled as **`Quantity / unit`** across **> 50% of available graph area**.',
      '- Display vertical (and horizontal where meaningful) **error bars**; sketch best-fit line alongside steepest and shallowest lines within error bars to compute gradient uncertainty (`± Δm = (m_max - m_min) / 2`).',
    ].join('\n'),
  },
  {
    id: 'chem-lab-making-measurements',
    projectType: 'IA',
    subjectSlug: 'chemistry-sl',
    title: 'Lab INFO: Making Measurements Accurately in the Lab',
    category: 'IA Criterion B & Precision',
    summary:
      'Meniscus eye-level reading rules and exact apparatus uncertainties for burettes, fixed pipettes, volumetric flasks, and analytical balances.',
    sourceFileName: 'Lab INFO making-measurements-in-the-lab.pdf',
    externalUrl: 'https://drive.google.com/file/d/1Q7hH8bnZnnK5DE3DRM6c0QjvJz0NLtwD/view?usp=drivesdk',
    contentMarkdown: [
      '### Glassware Precision & Meniscus Technique',
      '- Read bottom of curved aqueous meniscus at exact eye level (`parallax avoidance`).',
      '- Remember **difference readings count twice**: a `±0.05 cm^3` burette has `±0.10 cm^3` uncertainty per delivered titre (`V_final - V_initial`); two thermometer readings (`ΔT = T_max - T_init`) likewise double thermometer uncertainty.',
    ].join('\n'),
  },
  {
    id: 'chem-lab-equipment-names',
    projectType: 'IA',
    subjectSlug: 'chemistry-sl',
    title: 'Lab INFO: Names & Cross-Section Diagrams of Lab Apparatus',
    category: 'IA Safety & Design',
    summary:
      'Illustrated visual reference for IB chemistry glassware (volumetric flasks, burettes, pipettes, Buchner funnels, desiccators, reflux condensers) and 2D drawing style.',
    sourceFileName: 'Lab INFO names-of-laboratory-equipment-and-selected-apparatus.pdf',
    externalUrl: 'https://drive.google.com/file/d/15os0dIwkFClnjr4HADjGAJgAxRRIrwcd/view?usp=drivesdk',
    contentMarkdown: [
      '### Standard Apparatus & 2D Schematic Drawing Rules',
      '- Draw apparatus setups cleanly in 2D cross-section with straight ruler lines and labeled reagents — avoid 3D artistic shading in Criterion A methodology figures.',
      '- Match glassware to required precision: **Volumetric flasks & A-grade pipettes** for standard solution preparation vs **Erlenmeyer flasks & beakers** for approximate mixing/titration receiving.',
    ].join('\n'),
  },
  {
    id: 'chem-lab-uncertainty-prop',
    projectType: 'IA',
    subjectSlug: 'chemistry-sl',
    title: 'Lab INFO: Propagation of Uncertainties Formula Sheet',
    category: 'IA Criterion B & Precision',
    summary:
      'Exact algebraic rules for adding/subtracting absolute uncertainties vs multiplying/dividing percentage uncertainties in IA Criterion B calculations.',
    sourceFileName: 'Lab INFO propagation-of-uncertainties.pdf',
    externalUrl: 'https://drive.google.com/file/d/1tX8TeUry45l3YqVtKxyQ7_k38EZfTGiO/view?usp=drivesdk',
    contentMarkdown: [
      '### Two Core Propagation Rules (Always Show One Full Sample Working!)',
      '- **Addition / Subtraction (`y = a ± b`):** Sum **absolute uncertainties** -> `$\\Delta y = \\Delta a + \\Delta b$`.',
      '- **Multiplication / Division (`y = a*b / c`):** Sum **percentage/fractional uncertainties** -> `$\\%\\Delta y = \\%\\Delta a + \\%\\Delta b + \\%\\Delta c$`, then convert back to `± Δy = (%Δy / 100) × y`.',
      '- Round final propagated uncertainty to **1 significant figure** (or 2 if leading digit is `1`) and match the mean value’s decimal place.',
    ].join('\n'),
  },
  {
    id: 'chem-lab-scientific-writing',
    projectType: 'IA',
    subjectSlug: 'chemistry-sl',
    title: 'Lab INFO: Scientific Writing & IUPAC Formatting Conventions',
    category: 'IA Communication',
    summary:
      'Style guide covering objective third-person/impersonal phrasing, chemical state symbols, IUPAC naming, figure captions, and bibliography formatting.',
    sourceFileName: 'Lab INFO scientific-writing-conventions-info-sheet.pdf',
    externalUrl: 'https://drive.google.com/file/d/1XYRBl4hVcnhMUxpJYMz6sHpcoBjPYsy8/view?usp=drivesdk',
    contentMarkdown: [
      '### IA Scientific Communication Checklist',
      '- Maintain **objective academic tone** (*"does not support"* or *"is consistent with"* rather than *"proved my hypothesis"*).',
      '- Italicize physical variables ($m, c, \\Delta T$), keep chemical formulas upright with proper subscripts/superscripts & states (`CuSO4(aq)`), and number all Tables above / Figures below.',
    ].join('\n'),
  },
  {
    id: 'chem-lab-techniques',
    projectType: 'IA',
    subjectSlug: 'chemistry-sl',
    title: 'Lab INFO: Selected Chemistry Laboratory Techniques',
    category: 'IA Safety & Design',
    summary:
      'Standard operating benchmarks for concordant acid-base/redox titrations (±0.10 cm^3), vacuum Buchner filtration, constant-mass heating, and insulated calorimetry.',
    sourceFileName: 'Lab INFO selected-laboratory-techniques.pdf',
    externalUrl: 'https://drive.google.com/file/d/1bU0k3txUijXCwTRj-a8XfO-edRbhoGj6/view?usp=drivesdk',
    contentMarkdown: [
      '### Benchmark Practical Technique Standards',
      '- **Titration:** Perform one rough rangefinder titre followed by ≥3 accurate replicates until **at least two concordant titres fall within ±0.10 cm^3**; swirl consistently and rinse flask walls with distilled water near endpoint.',
      '- **Gravimetric drying:** Repeat **heat -> desiccator cool -> weigh** cycles until two consecutive masses agree within `±0.002 g` (heating to constant mass).',
    ].join('\n'),
  },

  // =========================================================================
  // HISTORY HL MAY 2028 IA — CHICAGO GUIDE + 3 EXAMINER SAMPLES
  // =========================================================================
  {
    id: 'hist-purdue-owl-chicago',
    projectType: 'IA',
    subjectSlug: 'history-hl',
    title: 'Purdue OWL Chicago Manual of Style (18th Notes & Bibliography)',
    category: 'Citations & Formatting',
    summary:
      'Full Purdue OWL Chicago NB sample research paper showing superscript footnote numbering, shortened subsequent citations, block quotes, and bibliography formatting.',
    sourceFileName: 'cmos-nb-sample-paper-purdue-owl-2-publish-20260312.pdf',
    externalUrl: 'https://drive.google.com/file/d/1cbdYbP8qgB43qb_QQrc8j9HDQeZrG3vo/view?usp=drivesdk',
    contentMarkdown: [
      '### Chicago Notes & Bibliography Essentials for History IA & History EE',
      '- **In-Text Mechanics:** Place **superscript numerals** *after* punctuation at the end of clauses/sentences (`...of Versailles.¹`). Never use parenthetical MLA `(Smith 42)` citations in IB History!',
      '- **First vs Subsequent Footnotes:** First citation includes full author, *Title in Italics* (Place: Publisher, Year), page(s). Subsequent citations of the same source use shortened format (`Author, *Short Title*, page`).',
      '- **Bibliography:** Alphabetical by author last name, hanging indent, periods separating elements (`Last, First. *Book Title*. Publisher, Year.`).',
    ].join('\n'),
  },
  {
    id: 'hist-ia-sample-1-cortes',
    projectType: 'IA',
    subjectSlug: 'history-hl',
    title: '2028 History IA Example 1: Cortés & Fall of the Aztec Empire (1,979w)',
    category: '2028 IB Assessed Sample',
    summary:
      'Official IB 2028 History IA model ("To what extent was Hernán Cortés significant in the fall of the Aztec Empire between 1519 and 1521?") showcasing 3-criterion 24-mark structure.',
    sourceFileName: 'Sample 1.pdf',
    externalUrl: 'https://drive.google.com/file/d/1lyKvU9qsP36EALVNY4NomvuvHZ381gxy/view?usp=drivesdk',
    contentMarkdown: [
      '### May 2028 History IA Exemplar 1 Highlights (24-Mark Model)',
      '- **RQ:** *"To what extent was Hernán Cortés significant in the fall of the Aztec Empire between 1519 and 1521?"*',
      '- **Structure Note (2028 Guide):** Uses the streamlined 2028 IA architecture (**Section 1 Identification & Evaluation of Sources** + **Section 2 Investigation & Conclusion** across max **7 sources** and **2,200 words** — Reflection Section 3 removed in 2028 guide!).',
      '- **Analytical Balance:** Weighs Cortés’s diplomatic exploitation of Indigenous Tlaxcalan rivalries against European epidemic disease (smallpox) and Aztec internal tributary resentment.',
    ].join('\n'),
  },
  {
    id: 'hist-ia-sample-2-rommel',
    projectType: 'IA',
    subjectSlug: 'history-hl',
    title: '2028 History IA Example 3: Rommel & the 20 July 1944 Plot (~2,199w)',
    category: '2028 IB Assessed Sample',
    summary:
      'Official IB 2028 IA model investigating Erwin Rommel’s involvement in the 20 July 1944 assassination plot against Hitler, contrasting postwar memoirs with critical scholarship.',
    sourceFileName: 'Sample 2.pdf',
    externalUrl: 'https://drive.google.com/file/d/1FQI9q18dfJ4QWkacx27b5Q-BF27hhEi_/view?usp=drivesdk',
    contentMarkdown: [
      '### May 2028 History IA Exemplar 3 Highlights',
      '- **RQ:** *"To what extent did Erwin Rommel support the 20 July 1944 plot to kill Adolf Hitler?"*',
      '- **Criterion A OPCVL Showcase:** Explicitly contrasts bias/origin limitations of *The Rommel Papers* (edited postwar by Liddell Hart & Manfred Rommel to sanitize Wehrmacht honour) against archival critiques (Ralf-Georg Reuth).',
      '- **Citation Format:** Uses numbered footnotes and separate primary/secondary bibliography in Chicago style.',
    ].join('\n'),
  },
  {
    id: 'hist-ia-sample-3-algiers',
    projectType: 'IA',
    subjectSlug: 'history-hl',
    title: '2028 History IA Example 2: Film Accuracy in The Battle of Algiers (~2,200w)',
    category: '2028 IB Assessed Sample',
    summary:
      'Official IB 2028 IA model testing how accurately Gillo Pontecorvo’s 1966 film *The Battle of Algiers* depicted women in the FLN using feminist & archival scholarship.',
    sourceFileName: 'Sample 3.pdf',
    externalUrl: 'https://drive.google.com/file/d/1q9bM_Ryn5SfgItNUptxhmUwtytHhpTCy/view?usp=drivesdk',
    contentMarkdown: [
      '### May 2028 History IA Exemplar 2 Highlights',
      '- **RQ:** *"How accurate is the 1966 film The Battle of Algiers in its depiction of the role of women in the Front de libération nationale (FLN)?"*',
      '- **Key Lesson for IA Topics:** Evaluating historical film/art against peer-reviewed history (Meredeth Turshen, primary FLN testimonies) yields a crisp, manageable 7-source investigation.',
    ].join('\n'),
  },

  // =========================================================================
  // ENGLISH LIT HL — CRHS ASSESSMENT CALENDAR 2026–2027
  // =========================================================================
  {
    id: 'eng-assessment-calendar-2026',
    projectType: 'IA',
    subjectSlug: 'english-lit-hl',
    title: 'CRHS IB Assessment Calendar 2026–2027 (All Non-Negotiable Deadlines)',
    category: 'Deadlines & Oral Schedule',
    summary:
      'Complete 2026–2027 CRHS IB Diploma deadline sheet covering Grade 11 English Mock IOs (April), Final English IOs (May), History Mock IA, EE checkpoints, and Grade 12 IA upload dates.',
    sourceFileName: 'IB Assessment Calendar 2026-2027.pdf',
    externalUrl: 'https://drive.google.com/file/d/1i1D9DD_KA9riE9c3ZbjbwSW-ttisnp1R/view?usp=drivesdk',
    contentMarkdown: [
      '### CRHS 2026–2027 Assessment Calendar Highlights',
      '- **Policy:** School internal deadlines are **non-negotiable** because teachers require processing windows before IB upload; missing core/IA deliverables jeopardizes Diploma eligibility.',
      '- **Grade 11 English Lit HL Schedule:** **Mock IOs throughout April 2027** • **Final Recorded English Individual Orals (IA) throughout May 2027**.',
      '- **Grade 11 Companion Deadlines:** EE starts mid-Oct 2026 -> ManageBac RQ Nov 26 -> 1st Formal Meeting Dec 1–18 -> Collaborative Science Project Dec 1–18 -> History Mock IA Jan 17 & May 27 -> EE Annotated Bib Feb 27, 2027 -> 1,000w EE Apr 27, 2027 -> EE 2nd Meeting May 22, 2027 -> TOK Exhibition first week of June 2027.',
      '- **Grade 12 Reference Benchmarks:** English HL Essay Proposal Nov 19; Chem IA data collection Nov 23 / draft Jan 17 / final Feb 28; Bio IA begins Nov 25 / draft Jan 25 / final Mar 14; EE final Dec 7 / Viva Voce Feb 19; TOK Essay Jan 29; Math Exploration draft Dec 20 / final Feb 28; French B IO Mar 1–4; CAS final completion Mar 28.',
    ].join('\n'),
  },
];

export const CORE_STARTER_OVERRIDES: CoreStarterProjectOverride[] = [
  {
    projectType: 'EE',
    subjectSlug: null,
    title: 'Extended Essay (FA2027 30-Mark Rubric)',
    researchQuestionOrPrompt:
      'To what extent did [focused historical/scientific/literary variable] shape [specific bounded topic]?',
    wordCountTarget: 4000,
    milestones: [
      { id: 'ee-1', title: 'Explore EE Expectations & Select DP Subject / Topic', dueDate: '2026-10-15', completed: false },
      { id: 'ee-2', title: 'UPEI Robertson Library Research Orientation (9:00–11:30)', dueDate: '2026-11-04', completed: false },
      { id: 'ee-3', title: 'Submit RQ Proposal in ManageBac & Request Supervisor Form', dueDate: '2026-11-26', completed: false },
      { id: 'ee-4', title: 'First Formal Supervisor Meeting & ManageBac RRS Log (RPF 1)', dueDate: '2027-01-21', completed: false },
      { id: 'ee-5', title: 'Submit Annotated Bibliography to Google Classroom', dueDate: '2027-03-31', completed: false },
      { id: 'ee-6', title: 'Submit 1,000-Word Checkpoint to Turnitin & Google Classroom', dueDate: '2027-04-22', completed: false },
      { id: 'ee-7', title: 'Second Formal Meeting (RPF 2) & Summer Research Plan', dueDate: '2027-05-22', completed: false },
      { id: 'ee-8', title: 'Full Draft for Supervisor Review (~4,000w max)', dueDate: '2027-10-15', completed: false },
      { id: 'ee-9', title: 'Final Authenticated EE Submission + Supervisor Predicted Grade', dueDate: '2027-12-07', completed: false },
      { id: 'ee-10', title: 'Viva Voce Exit Interview & 500-Word Final Reflection (Criterion E)', dueDate: '2028-02-15', completed: false },
    ],
    draftExcerpt: '',
  },
  {
    projectType: 'CAS',
    subjectSlug: null,
    title: 'CAS Portfolio (7 Learning Outcomes)',
    researchQuestionOrPrompt:
      'Balance Creativity, Activity, and Service over 18 months using CAS Approval Forms, 9 reflective formats (3-2-1, Rose/Bud/Thorn, audio/photo), and a ≥1-month collaborative CAS Project following the 5 Stages.',
    wordCountTarget: 0,
    milestones: [
      { id: 'cas-1', title: 'Draft Aims & Goals Statement + Initial CAS Advisor Interview', dueDate: '2026-10-30', completed: false },
      { id: 'cas-2', title: 'Submit Pre-Approval Forms & Launch Balanced C, A & S Experiences', dueDate: '2026-12-15', completed: false },
      { id: 'cas-3', title: 'Plan Collaborative CAS Project Using 5 Stages (≥1 Month Duration)', dueDate: '2027-03-15', completed: false },
      { id: 'cas-4', title: 'Mid-Point Reflections Using Varied Modes (LO1–LO7 Evidence Check)', dueDate: '2027-06-01', completed: false },
      { id: 'cas-5', title: 'Complete All 7 Learning Outcomes & Grade 12 Final CAS Deadline', dueDate: '2028-03-28', completed: false },
    ],
    draftExcerpt: '',
  },
  {
    projectType: 'IA',
    subjectSlug: 'history-hl',
    title: 'History HL — Historical Investigation (May 2028 24-Mark IA)',
    researchQuestionOrPrompt:
      'To what extent did [specific causal actor/factor] shape [bounded historical shift] between [year] and [year]?',
    wordCountTarget: 2200,
    milestones: [
      { id: 'hist-ia-1', title: 'Grade 11 Mock IA Draft (OPCVL + Chicago Footnotes)', dueDate: '2027-01-17', completed: false },
      { id: 'hist-ia-2', title: 'Grade 11 Complete Mock Historical Investigation (Max 7 Sources)', dueDate: '2027-05-27', completed: false },
      { id: 'hist-ia-3', title: 'Criterion A (OPCVL of 2 Sources) & B Investigation Using Chicago NB (18 marks)', dueDate: '2028-02-01', completed: false },
      { id: 'hist-ia-4', title: 'Final 2,200-Word IA Submission (Criteria A–C; No Section 3 Reflection)', dueDate: '2028-03-07', completed: false },
    ],
    draftExcerpt: '',
  },
  {
    projectType: 'IA',
    subjectSlug: 'english-lit-hl',
    title: 'English A: Literature HL — HL Essay (20m) & Individual Oral (40m)',
    researchQuestionOrPrompt:
      'Global Issue (IO): How do Achebe (Things Fall Apart) and a translated work explore [transnational issue]? | HL Essay: How does [Author] use [formal technique] to explore [IB Concept]?',
    wordCountTarget: 1500,
    milestones: [
      { id: 'eng-ia-1', title: 'Close-Reading Logs (Things Fall Apart Motifs) & Global Issue Pairing', dueDate: '2027-03-15', completed: false },
      { id: 'eng-ia-2', title: 'Grade 11 English Mock Individual Orals (April Window)', dueDate: '2027-04-30', completed: false },
      { id: 'eng-ia-3', title: 'Grade 11 Final Individual Oral (IO · 10m + 5m, May Window)', dueDate: '2027-05-28', completed: false },
      { id: 'eng-ia-4', title: 'Grade 12 English HL Essay Proposal (1,200–1,500w Non-IO Work)', dueDate: '2027-11-19', completed: false },
      { id: 'eng-ia-5', title: 'Grade 12 Final English HL Essay Submission', dueDate: '2028-02-17', completed: false },
    ],
    draftExcerpt: '',
  },
  {
    projectType: 'IA',
    subjectSlug: 'chemistry-sl',
    title: 'Chemistry SL — Scientific Investigation (2025+ IA · 24 Marks)',
    researchQuestionOrPrompt:
      'How does [independent variable across ≥5 levels] affect [quantitative chemical DV] measured via [titration / calorimetry / spectrophotometry]?',
    wordCountTarget: 3000,
    milestones: [
      { id: 'chem-ia-1', title: 'Planning Guide, SDS Risk Check & Preliminary Apparatus Trials', dueDate: '2027-10-09', completed: false },
      { id: 'chem-ia-2', title: 'Individual Investigation Lab Data Collection & Concordant Replicates', dueDate: '2027-11-23', completed: false },
      { id: 'chem-ia-3', title: 'Complete IA Draft (Data Tables, Error Bars & Uncertainty Propagation)', dueDate: '2028-01-17', completed: false },
      { id: 'chem-ia-4', title: 'Final Chemistry SL Investigation (≤3,000 Words, Lab INFO Audited)', dueDate: '2028-02-28', completed: false },
    ],
    draftExcerpt: '',
  },
];
