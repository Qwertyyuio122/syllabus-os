import type { SubjectClassroomSeed } from './types';
import {
  FRENCH_TEXT_TYPES_MATRIX,
  FRENCH_THEMES_IO_EXPLORER,
} from './enhanced-diagrams';

export const FRENCH_B_SL_SEED: SubjectClassroomSeed = {
  slug: 'french-b-sl',
  materials: [
    {
      fileName: 'Le monde en français - Cambridge (2018 Coursebook).pdf',
      fileType: 'pdf',
      topicCode: 'T1',
      extractedText: [
        'Manuel officiel du cours (Cambridge University Press, 2018 — *Le monde en français*) :',
        '- Unité 1 Identités (pp. 1–64) : modes de vie, santé et bien-être, croyances et valeurs, sous-cultures, langue et identité.',
        '- Unité 2 Expériences (pp. 65–130) : loisirs, vacances et voyages, histoires de vie, rites de passage, coutumes et traditions, migrations.',
        '- Unité 3 Ingéniosité humaine (pp. 131–196) : divertissements, expressions artistiques, communication et médias, technologies, innovation scientifique.',
        '- Unité 4 Organisation sociale (pp. 197–262) : relations sociales, communauté, engagement social, éducation, monde du travail, loi et ordre.',
        '- Unité 5 Partage de la planète (pp. 263–329) : environnement, droits de la personne, paix et conflits, égalité, mondialisation, éthique.',
        '- Chapitre 6 Types de textes (pp. 330–364) : maîtrise des 16 formats prescrits (Article, Blog, Brochure, Courriel, Critique, Discours, Dissertation, Éditorial, Guide, Interview, Journal intime, Lettre au courrier des lecteurs, Lettre officielle, Proposition, Rapport, Tract).',
      ].join('\n'),
    },
    {
      fileName: 'plan du cours IB 11e 2026.pdf',
      fileType: 'pdf',
      topicCode: null,
      externalUrl: 'https://drive.google.com/file/d/12RT11MQDN56kuFYE8maBlSLSK7OlQFkD/view?usp=drivesdk',
      extractedText: [
        'Plan du cours — Français B Niveau Moyen (11e), Septembre 2026 — Mme MacQuarrie, CRHS.',
        'Ressources requises : Manuel *Le monde en français*, cartable à séparateurs, écouteurs pour la compréhension orale, fiches fournies en classe. L’usage exclusif du français en classe est obligatoire.',
        'Évaluation scolaire (bulletin) : 25 % Production écrite, 25 % Compréhension orale, 25 % Compréhension écrite, 25 % Production orale.',
        'Évaluation IB (12e année) : Épreuve 1 Production écrite (25 %, 1h15, 250–400 mots parmi 3 sujets) ; Épreuve 2 Compréhension orale (25 %, ~45 min) ; Épreuve 2 Compréhension écrite (25 %, 1h) ; Évaluation interne Oral individuel (25 %, 15 min prép. + 12–15 min entretien sur image stimulus).',
        'Progression bimestrielle (5 Thèmes) : Identités -> Expériences -> Ingéniosité humaine -> Organisation sociale -> Partage de la planète. Intégrité académique : traducteurs automatiques & IA strictement interdits.',
      ].join('\n'),
    },
  ],
  notes: [
    {
      topicCode: 'EXAM.1',
      title: 'Français B NM : 5 Thèmes prescrits (*Le monde en français*) & Oral individuel',
      summary:
        'Synthèse du manuel Cambridge *Le monde en français* (Unités 1–5) et du plan de cours de Mme MacQuarrie : questions directrices, pistes francophones et protocole de l’Oral individuel.',
      sourceFileNames: ['plan du cours IB 11e 2026.pdf', 'Le monde en français - Cambridge (2018 Coursebook).pdf'],
      blocks: [
        { type: 'heading', level: 2, text: '1. Unités 1–5 du manuel & Rotation bimestrielle en 11e' },
        {
          type: 'paragraph',
          markdown:
            'Dans le cours **Français B Niveau Moyen** de Mme MacQuarrie à CRHS, chaque bimestre explore un sous-thème du manuel *Le monde en français* (Cambridge 2018). Que ce soit à l’**Épreuve 1** ou à l’**Oral individuel (IA)**, dépassez la description générale : ancrez votre propos dans une **réalité francophone précise** (Québec, Acadie, France, Sénégal, Maghreb, Belgique) et modulez le **registre** (*familier, courant ou soutenu*).',
        },
        {
          type: 'playable_diagram',
          spec: {
            type: 'comparison_matrix',
            id: 'french-5-themes-matrix',
            title: 'Les 5 Thèmes IB & Unités *Le monde en français* (Cambridge 2018)',
            caption: 'Synthèse directe du plan de cours de Mme MacQuarrie + table des matières Cambridge pp. 4–6.',
            columns: ['Thème & Unité (Code)', 'Question directrice (CRHS)', 'Sous-thèmes clés du manuel', 'Pistes francophones & lexique'],
            rows: [
              { criterion: '1. Identités (T1 · U1)', cells: ['De quelle façon exprimons-nous notre identité ?', 'Modes de vie, santé, croyances/valeurs, sous-cultures, langue', 'bilinguisme acadien/canadien, appartenance, équilibre mental'] },
              { criterion: '2. Expériences (T2 · U2)', cells: ['Comment le passé construit-il notre avenir ?', 'Loisirs, voyages, histoires de vie, rites de passage, migrations', 'récit passé composé/imparfait, patrimoine, déracinement'] },
              { criterion: '3. Ingéniosité humaine (T3 · U3)', cells: ['Comment les arts peuvent-ils nous aider à comprendre une culture ?', 'Divertissements, arts, médias, technologies, éthique scientifique', 'cinéma francophone, fracture numérique, intelligence artificielle'], ibExamTip: 'À l’Oral individuel, décrivez la photo en 60 s max puis passez vite à l’analyse culturelle!' },
              { criterion: '4. Organisation sociale (T4 · U4)', cells: ['Quels sont les liens avec les gens que nous côtoyons ?', 'Relations, communauté, engagement social, éducation, droit', 'bénévolat, laïcité, solidarité, système scolaire francophone'] },
              { criterion: '5. Partage de la planète (T5 · U5)', cells: ['À quels enjeux environnementaux faisons-nous face ?', 'Environnement, droits humains, paix/conflits, égalité, mondialisation', 'empreinte carbone, transition énergétique, justice climatique'] },
            ],
          },
        },
        { type: 'heading', level: 2, text: '2. Protocole chronométré de l’Oral individuel (25 % · Critères A, B1, B2)' },
        { type: 'playable_diagram', spec: FRENCH_THEMES_IO_EXPLORER },
      ],
    },
    {
      topicCode: 'EXAM.1',
      title: 'Épreuve 1 : Maîtriser les 16 Types de textes & Registres (Ch. 6, pp. 330–364)',
      summary:
        'Répertoire complet du Chapitre 6 de *Le monde en français* (Article à Tract) avec conventions de mise en forme (Critère C : 6 pts), registre *tu/vous*, et formules de politesse.',
      sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf', 'plan du cours IB 11e 2026.pdf'],
      blocks: [
        { type: 'playable_diagram', spec: FRENCH_TEXT_TYPES_MATRIX },
        {
          type: 'callout',
          variant: 'examiner_warning',
          title: 'Pièges classiques du Critère C (Compréhension conceptuelle — 6 pts)',
          markdown:
            '1) Confondre **Article**, **Éditorial** (prise de position du rédacteur/journal au « nous » sur un débat actuel) et **Rapport formel** (titre objectif, sous-titres numérotés, constat -> recommandations neutres sans familiarité). 2) Dans une **Lettre officielle**, utilisez obligatoirement le **vouvoiement (*vous*)**, la date/lieu, l’objet précis, la formule d’appel (*Monsieur le Maire*) et une formule finale complète (*Je vous prie d’agréer, Monsieur/Madame, l’expression de mes salutations distinguées*) — ne terminez jamais par *« Cordialement »* ou *« Amitiés »*!',
        },
        {
          type: 'callout',
          variant: 'definition',
          title: 'Intégrité académique (CRHS) & Connecteurs C1 de transition',
          markdown:
            'L’usage de traducteurs automatiques et d’outils d’IA est strictement interdit (Mme MacQuarrie). Enrichissez votre **Critère A (Langue — 12 pts)** avec : *Certes... toutefois*, *Afin que + subjonctif*, *En revanche*, *Non seulement... mais encore*, et *Il convient de souligner que*.',
        },
      ],
    },
  ],
  questions: [
    {
      topicCode: 'T5.2',
      paperType: 'Épreuve 1 (Production écrite · 250–400 mots)',
      commandTerm: 'Write',
      difficulty: 'Standard IB',
      maxMarks: 30,
      stimulusMarkdown:
        'Thème : **Le partage de la planète** — *À quels enjeux environnementaux faisons-nous face ?* Dans votre lycée, les bacs de recyclage sont mal utilisés et le gaspillage alimentaire augmente.',
      questionMarkdown:
        'Rédigez un **article pour le journal scolaire** OU une **lettre officielle adressée à la direction** (250–400 mots) proposant des mesures réalistes pour réduire l’empreinte écologique de l’école.',
      markscheme: {
        marking_points: [
          { code: 'A1', criterion: 'Critère A — Langue (12 pts) : lexique écologique précis, subjonctif après *il faut que / afin que*, connecteurs nuancés.', marks: 12 },
          { code: 'M1', criterion: 'Critère B — Message (12 pts) : aborde les DEUX aspects (tri sélectif + gaspillage alimentaire) avec propositions concrètes.', marks: 12 },
          { code: 'M2', criterion: 'Critère C — Type de texte (6 pts) : Article (titre accrocheur, chapeau, intertitres, ton journalistique) OU Lettre officielle (en-tête, objet, vous, formule de politesse soutenue).', marks: 6 },
        ],
        model_answer:
          'Respectez les codes du format retenu : Article (titre + chapeau + sous-titres + témoignages d’élèves) ou Lettre officielle (date/lieu + Objet + *Monsieur le Directeur / Madame la Directrice* + vouvoiement constant + *Je vous prie d’agréer...*). Longueur impérative : 250–400 mots.',
      },
      sourceFileNames: ['plan du cours IB 11e 2026.pdf', 'Le monde en français - Cambridge (2018 Coursebook).pdf'],
    },
    {
      topicCode: 'T3.3',
      paperType: 'Épreuve 1 (Production écrite · Ch. 6)',
      commandTerm: 'Write',
      difficulty: 'Standard IB',
      maxMarks: 30,
      stimulusMarkdown:
        'Thème : **L’ingéniosité humaine** — *Comment les arts peuvent-ils nous aider à comprendre une culture ?* Vous venez de voir un film ou une exposition francophone.',
      questionMarkdown:
        'Rédigez une **entrée de blogue culturel** destinée aux jeunes francophones (250–400 mots) expliquant ce que cette œuvre révèle sur les valeurs de la culture présentée.',
      markscheme: {
        marking_points: [
          { code: 'A1', criterion: 'Critère A — Langue (12 pts) : alternance passé composé/imparfait pour l’événement et présent analytique pour la portée culturelle.', marks: 12 },
          { code: 'M1', criterion: 'Critère B — Message (12 pts) : lie des choix artistiques concrets (musique, langue, esthétique) aux valeurs francophones.', marks: 12 },
          { code: 'M2', criterion: 'Critère C — Conventions du blogue (6 pts) : titre captivant, date/pseudo, ton personnel direct (*vous* collectif amical), appel explicite aux commentaires.', marks: 6 },
        ],
        model_answer:
          'Inclure un titre de blogue engageant, une accroche narrative personnelle (*« Samedi dernier... »*), une analyse des choix artistiques et culturels, puis une question ouverte invitant les lecteur·rice·s à commenter.',
      },
      sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
    },
    {
      topicCode: 'T4.2',
      paperType: 'Épreuve 1 (Types de textes · Ch. 6)',
      commandTerm: 'Distinguish',
      difficulty: 'Foundation',
      maxMarks: 6,
      questionMarkdown:
        'Expliquez comment se distinguent **l’éditorial**, **le courrier des lecteurs**, **le discours** et **le rapport formel** quant au registre, à l’auteur·rice et à la mise en page (Cambridge Ch. 6 pp. 330–364).',
      markscheme: {
        marking_points: [
          { code: 'E1', criterion: 'Éditorial : voix collective ou du rédacteur-en-chef (*nous/la rédaction*), analyse argumentée d’un sujet d’actualité sans titre banal.', marks: 2 },
          { code: 'C1', criterion: 'Lettre au courrier des lecteurs : réaction citoyenne courte à un article paru récemment (*À la rédaction / Monsieur le Rédacteur*, *tu/vous* selon revue).', marks: 2 },
          { code: 'D1', criterion: 'Discours vs Rapport : Discours = oralité rythmée, apostrophes (*Chers camarades*), anaphores ; Rapport = impartialité neutre, constat chiffré, titres numérotés et recommandations.', marks: 2 },
        ],
        model_answer:
          'L’éditorial exprime la ligne argumentée du journal, le courrier des lecteurs réagit directement à une publication antérieure, le discours mobilise un auditoire par la rhétorique orale, tandis que le rapport présente objectivement constats et recommandations sous sections titrées.',
      },
      sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
    },
    {
      topicCode: 'T1.1',
      paperType: 'Épreuve 2 (Compréhension écrite)',
      commandTerm: 'Identify',
      difficulty: 'Standard IB',
      maxMarks: 6,
      stimulusMarkdown:
        'Extrait — *Identités* : « Grandir entre deux langues n’est pas toujours un fardeau : si certains jeunes hésitent parfois entre traditions familiales et codes de leurs pairs à l’école, beaucoup transforment ce métissage linguistique en véritable atout professionnel et culturel. »',
      questionMarkdown:
        '(a) Relevez **une** difficulté associée au bilinguisme des jeunes. [2]\n(b) Relevez **deux** avantages mentionnés. [2]\n(c) Identifiez une expression prouvant une perspective **optimiste et nuancée**. [2]',
      markscheme: {
        marking_points: [
          { code: 'A1', criterion: '(a) Hésitation / tiraillement entre traditions familiales et normes scolaires des pairs.', marks: 2 },
          { code: 'A2', criterion: '(b) Atout professionnel ET atout culturel.', marks: 2 },
          { code: 'M1', criterion: '(c) Justifie « véritable atout » ou la nuance « n’est pas toujours un fardeau ».', marks: 2 },
        ],
        model_answer:
          '(a) Oscillation entre valeurs familiales et normes des pairs ; (b) Atout professionnel et culturel ; (c) « n’est pas toujours un fardeau » + « véritable atout ».',
      },
      sourceFileNames: ['plan du cours IB 11e 2026.pdf'],
    },
    {
      topicCode: 'EXAM.3',
      paperType: 'Oral individuel (IA SL)',
      commandTerm: 'Outline',
      difficulty: 'Foundation',
      maxMarks: 6,
      questionMarkdown:
        'Décrivez les **3 phases** exactes de l’**Oral individuel** de Français B NM (temps de préparation, notes permises, durée et passage d’un thème à l’autre).',
      markscheme: {
        marking_points: [
          { code: 'P1', criterion: 'Préparation (15 min) : choisir 1 des 2 stimuli visuels inédits et noter jusqu’à 10 mots-clés (aucune phrase rédigée).', marks: 2 },
          { code: 'P2', criterion: 'Partie 1 Présentation (3–4 min) + Discussion (4–5 min) : description brève, message implicite, lien avec le Thème IB et le monde francophone.', marks: 2 },
          { code: 'P3', criterion: 'Partie 2 Conversation générale (5–6 min) : porte obligatoirement sur un SECOND thème prescrit différent du stimulus initial.', marks: 2 },
        ],
        model_answer:
          '15 min de préparation (≤10 mots-clés sur 1 photo choisie sur 2) -> 3–4 min de présentation thématique + 4–5 min de discussion francophone -> 5–6 min de conversation générale sur un autre thème.',
      },
      sourceFileNames: ['plan du cours IB 11e 2026.pdf'],
    },
    {
      topicCode: 'T4.3',
      paperType: 'Épreuve 1 (Production écrite · Ch. 6)',
      commandTerm: 'Write',
      difficulty: 'Standard IB',
      maxMarks: 12,
      stimulusMarkdown:
        'Thème : **L’organisation sociale** — *Quels sont les liens avec les gens que nous côtoyons ?* Vous proposez à votre mairie/école de lancer un centre intergénérationnel.',
      questionMarkdown:
        'Rédigez le **plan détaillé d’un Rapport ou d’une Proposition formelle** (titre, objet, 3 sections, registre soutenu et formule finale adaptée) selon le Chapitre 6 de *Le monde en français*.',
      markscheme: {
        marking_points: [
          { code: 'A1', criterion: 'Titre explicite + Méthodologie / Objectif clair à la 3e personne ou nous institutionnel.', marks: 4 },
          { code: 'M1', criterion: 'Constat structuré (besoin intergénérationnel) suivi de 2–3 mesures budgétées/concrètes avec connecteurs logiques (*En premier lieu, Par conséquent*).', marks: 4 },
          { code: 'C1', criterion: 'Conclusion sous forme de recommandations précises sans ton familier ni émotivité excessive.', marks: 4 },
        ],
        model_answer:
          'Proposition formelle structurée : Objet, I. Constat de l’isolement intergénérationnel local, II. Activités proposées (atelier numérique, tutorat scolaire), III. Logistique et retombées attendues, Conclusion sur une recommandation concrète.',
      },
      sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
    },
    {
      topicCode: 'T2.4',
      paperType: 'Épreuve 1 (Critère A Langue)',
      commandTerm: 'Explain',
      difficulty: 'Foundation',
      maxMarks: 4,
      questionMarkdown:
        'Expliquez quand employer le **passé composé**, **l’imparfait** et le **subjonctif présent** pour raconter une expérience personnelle puis en tirer une leçon culturelle (Unité 2).',
      markscheme: {
        marking_points: [
          { code: 'T1', criterion: 'Imparfait = décor, habitude passée ou description (*Il pleuvait, nous habitions*) ; Passé composé = actions ponctuelles achevées (*J’ai découvert, nous sommes partis*).', marks: 2 },
          { code: 'T2', criterion: 'Subjonctif après volonté, émotion ou nécessité (*Il est essentiel que nous préservions*, *Je suis ravi qu’elle participe*).', marks: 2 },
        ],
        model_answer:
          'L’imparfait pose le cadre et les habitudes révolues, le passé composé fait avancer les événements accomplis, et le subjonctif exprime souhait, doute ou obligation face à l’avenir.',
      },
      sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
    },
    {
      topicCode: 'EXAM.2',
      paperType: 'Épreuve 2 (Compréhension orale & écrite)',
      commandTerm: 'Describe',
      difficulty: 'Foundation',
      maxMarks: 4,
      questionMarkdown:
        'Quelles stratégies spécifiques permettent de réussir les questions de type **Vrai/Faux avec justification** et **QCM à choix multiple** dans l’Épreuve 2 de Français B NM ?',
      markscheme: {
        marking_points: [
          { code: 'S1', criterion: 'Vrai/Faux avec justification : en compréhension écrite, recopier strictement la citation exacte du texte (sans inventer de paraphrase hors-sujet) prouvant pourquoi l’affirmation est vraie ou fausse.', marks: 2 },
          { code: 'S2', criterion: 'Compréhension orale (~45 min, 2 écoutes) : repérer les marqueurs d’opposition (*malgré, en dépit de, contrairement à*) qui signalent les distracteurs.', marks: 2 },
        ],
        model_answer:
          'Pour Vrai/Faux avec justification, citer exactement le passage textuel pertinent (premier segment exact) ; à l’oral, anticiper les négations et connecteurs d’opposition lors de la deuxième écoute.',
      },
      sourceFileNames: ['plan du cours IB 11e 2026.pdf'],
    },
  ],
  flashcards: [
    { topicCode: 'T1', frontMarkdown: 'Question directrice du thème **L’identité** (Plan Mme MacQuarrie) ?', backMarkdown: '*« De quelle façon exprimons-nous notre identité ? »*' },
    { topicCode: 'T2', frontMarkdown: 'Question directrice du thème **Les expériences** ?', backMarkdown: '*« Comment le passé construit-il notre avenir ? »*' },
    { topicCode: 'T3', frontMarkdown: 'Question directrice du thème **L’ingéniosité humaine** ?', backMarkdown: '*« Comment les arts peuvent-ils nous aider à comprendre une culture ? »*' },
    { topicCode: 'T4', frontMarkdown: 'Question directrice du thème **L’organisation sociale** ?', backMarkdown: '*« Quels sont les liens avec les gens que nous côtoyons ? »*' },
    { topicCode: 'T5', frontMarkdown: 'Question directrice du thème **Le partage de la planète** ?', backMarkdown: '*« À quels enjeux environnementaux faisons-nous face ? »*' },
    { topicCode: 'EXAM.1', frontMarkdown: 'Répartition exacte des 4 composantes IB Français B NM (12e) ?', backMarkdown: '25 % Épreuve 1 Écrite (1h15) + 25 % Épreuve 2 Orale (~45 min) + 25 % Épreuve 2 Écrite (1h) + 25 % Oral individuel (IA).' },
    { topicCode: 'EXAM.3', frontMarkdown: 'Combien de minutes et de mots-clés sont autorisés pour préparer l’Oral individuel ?', backMarkdown: '15 minutes de préparation, au maximum 10 mots-clés brefs (aucune phrase rédigée) sur 1 image choisie parmi 2.' },
    { topicCode: 'EXAM.3', frontMarkdown: 'Quelle erreur majeure faut-il éviter dans les 4 premières minutes de l’Oral individuel ?', backMarkdown: 'Rester bloqué dans la description littérale de l’image — il faut décrire en ~60 s puis vite interpréter le message culturel francophone !' },
    { topicCode: 'EXAM.1', frontMarkdown: 'Fourchette stricte de mots à l’Épreuve 1 Français B NM ?', backMarkdown: '250 à 400 mots (les textes nettement sous 250 mots perdent en développement et message).' },
    { topicCode: 'EXAM.1', frontMarkdown: 'Lettre officielle vs Courriel amical vs Courrier des lecteurs (Ch. 6) ?', backMarkdown: 'Lettre officielle : vous + objet + « Je vous prie d’agréer... ». Courriel amical : tu + salutations détendues. Courrier des lecteurs : réaction brève adressée à la rédaction.' },
    { topicCode: 'EXAM.1', frontMarkdown: 'Différence clé entre un Article et un Éditorial (Ch. 6 Cambridge) ?', backMarkdown: 'L’article informe de manière journalistique (titre + chapeau + sous-titres) ; l’éditorial engage la voix du journal/rédacteur (*nous*) dans une prise de position argumentée.' },
    { topicCode: 'EXAM.1', frontMarkdown: 'Particularités d’un **Tract** ou d’une **Brochure** à l’Épreuve 1 ?', backMarkdown: 'Slogans percutants, impératifs incitatifs (*Agissez ! Rejoignez-nous !*), puces aérées et coordonnées d’action claires (sans longues dissertations continues).' },
    { topicCode: 'T3.1', frontMarkdown: 'Formule clé déclenchant obligatoirement le subjonctif dans un essai C1 ?', backMarkdown: '« Bien que... », « Afin que... », « Il est indispensable que... », « À condition que... ».' },
    { topicCode: 'EXAM.2', frontMarkdown: 'Règle d’or du Vrai / Faux avec justification en compréhension écrite (Épreuve 2) ?', backMarkdown: 'Copier exactement les mots du texte qui justifient la réponse sans reformuler ni ajouter de commentaire personnel.' },
  ],
  topicGuidanceNotes: {
    T1: 'Unité 1 *Le monde en français* (pp. 1–64) + Mme MacQuarrie : Identités (« De quelle façon exprimons-nous notre identité ? »).',
    T2: 'Unité 2 (pp. 65–130) : Expériences (« Comment le passé construit-il notre avenir ? ») — maîtrise passé composé / imparfait.',
    T3: 'Unité 3 (pp. 131–196) : Ingéniosité humaine (« Comment les arts peuvent-ils nous aider à comprendre une culture ? »).',
    T4: 'Unité 4 (pp. 197–262) : Organisation sociale (« Quels sont les liens avec les gens que nous côtoyons ? »).',
    T5: 'Unité 5 (pp. 263–329) : Partage de la planète (« À quels enjeux environnementaux faisons-nous face ? »).',
    'EXAM.1': 'Épreuve 1 (25 %, 1h15, 250–400 mots) : Chapitre 6 Cambridge (pp. 330–364) — 16 types de textes et maîtrise stricte du registre.',
    'EXAM.2': 'Épreuve 2 (50 % total : 25 % Orale ~45 min avec écouteurs + 25 % Écrite 1h).',
    'EXAM.3': 'Oral individuel (25 % IA) : 15 min prép. (≤10 mots-clés) -> présentation photo/culture francophone -> conversation sur 2e thème.',
  },
};
