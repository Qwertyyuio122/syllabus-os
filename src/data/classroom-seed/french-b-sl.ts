import type { SubjectClassroomSeed } from './types';

export const FRENCH_B_SL_SEED: SubjectClassroomSeed = {
  slug: 'french-b-sl',
  materials: [
    {
      fileName: 'plan du cours IB 11e 2026.pdf',
      fileType: 'pdf',
      topicCode: null,
      externalUrl: 'https://drive.google.com/file/d/12RT11MQDN56kuFYE8maBlSLSK7OlQFkD/view?usp=drivesdk',
      extractedText: [
        'Plan du cours — Français B Niveau Moyen (11e), Septembre 2026 — Mme MacQuarrie, CRHS.',
        'Ressources requises : Manuel *Le monde en français*, cartable à séparateurs, écouteurs pour la compréhension orale, fiches fournies en classe. L’usage exclusif du français en classe et la consolidation régulière à la maison sont essentiels (le cours représente 12,5 % de l’horaire).',
        'Évaluation scolaire (note du bulletin) : 25 % Production écrite (Écriture et Grammaire), 25 % Compréhension orale, 25 % Compréhension écrite, 25 % Production orale.',
        'Évaluation finale du Baccalauréat International (12e année) : Épreuve 1 Production écrite (25 %, 1h15 — rédaction d’un texte parmi 3 propositions) ; Épreuve 2 Compréhension orale (25 %, ~45 min) ; Épreuve 2 Compréhension écrite (25 %, 1h) ; Évaluation interne Oral individuel (25 %, 15 min de préparation + entretien basé sur une image liée aux 5 thèmes).',
        'Progression thématique en 11e : étude d’un sous-thème de chacun des 5 thèmes prescrits tous les 2 mois — (1) L’identité : De quelle façon exprimons-nous notre identité ? ; (2) Les expériences : Comment le passé construit-il notre avenir ? ; (3) L’ingéniosité humaine : Comment les arts peuvent-ils nous aider à comprendre une culture ? ; (4) L’organisation sociale : Quels sont les liens avec les gens que nous côtoyons ? ; (5) Le partage de la planète : À quels enjeux environnementaux faisons-nous face ?',
        'Intégrité académique : l’utilisation des traducteurs automatiques en ligne et des outils d’intelligence artificielle est strictement interdite pour les évaluations sommatives et les travaux individuels non encadrés.',
      ].join('\n'),
    },
  ],
  notes: [
    {
      topicCode: 'EXAM.1',
      title: 'Français B NM : 5 Thèmes prescrits & Stratégie Épreuve 1 / Oral individuel',
      summary:
        'Guide méthodologique aligné sur le plan de cours de Mme MacQuarrie (*Le monde en français*) : matrice des 5 thèmes IB, registre approprié et protocole de l’Oral individuel (image stimulus).',
      sourceFileNames: ['plan du cours IB 11e 2026.pdf'],
      blocks: [
        { type: 'heading', level: 2, text: '1. Architecture des 5 Thèmes prescrits (Rotation bimestrielle en 11e)' },
        {
          type: 'paragraph',
          markdown:
            'Dans le cours **Français B Niveau Moyen** à CRHS, Mme MacQuarrie organise l’année autour d’une **rotation tous les deux mois** couvrant un sous-thème de chacun des cinq grands domaines du manuel *Le monde en français*. À l’écrit (Épreuve 1) comme à l’oral individuel (IA), il faut systématiquement relier votre idée personnelle au **monde francophone** et adapter le registre (familier, courant ou soutenu) au type de texte choisi.',
        },
        {
          type: 'playable_diagram',
          spec: {
            type: 'comparison_matrix',
            id: 'french-5-themes-matrix',
            title: 'Les 5 Thèmes IB Français B NM — Questions directrices & Pistes francophones',
            caption: 'Synthèse directe du plan de cours IB 11e 2026 de Mme MacQuarrie.',
            columns: ['Thème IB (Code)', 'Question directrice (Plan de cours)', 'Exemples de types de textes (Épreuve 1)', 'Connecteurs & vocabulaire clé'],
            rows: [
              {
                criterion: '1. Identités (T1)',
                cells: ['De quelle façon exprimons-nous notre identité ?', 'Article de blogue, journal intime, lettre personnelle', 'valeurs, bilinguisme, appartenance, mode de vie, santé mentale'],
              },
              {
                criterion: '2. Expériences (T2)',
                cells: ['Comment le passé construit-il notre avenir ?', 'Récit de voyage, critique culturelle, discours', 'coutumes, rite de passage, récit au passé composé / imparfait, patrimoine'],
              },
              {
                criterion: '3. Ingéniosité humaine (T3)',
                cells: ['Comment les arts peuvent-ils nous aider à comprendre une culture ?', 'Critique d’exposition, éditorial, courriel formel', 'créativité, cinéma francophone, réseaux sociaux, innovation éthique'],
                ibExamTip: 'À l’Oral individuel, évitez de décrire l’image trop longtemps : utilisez les arts comme porte d’entrée vers la culture cible.',
              },
              {
                criterion: '4. Organisation sociale (T4)',
                cells: ['Quels sont les liens avec les gens que nous côtoyons ?', 'Brochure communautaire, rapport formel, lettre au maire', 'citoyenneté, bénévolat, système éducatif, égalité des chances'],
              },
              {
                criterion: '5. Partage de la planète (T5)',
                cells: ['À quels enjeux environnementaux faisons-nous face ?', 'Lettre ouverte, pétition / appel à l’action, essai argumentatif', 'développement durable, empreinte carbone, tri sélectif, transition écologique'],
              },
            ],
          },
        },
        { type: 'heading', level: 2, text: '2. Protocole de l’Oral Individuel (25 % de la note IB)' },
        {
          type: 'playable_diagram',
          spec: {
            type: 'step_mechanism',
            id: 'french-io-protocol',
            title: 'Déroulement chronométré de l’Oral Individuel (Évaluation interne SL)',
            caption: 'Étapes exactes mentionnées dans le plan du cours (15 min de préparation + entretien basé sur une image).',
            nodes: [
              { id: 'prep', x: 105, y: 190, label: '1. Préparation (15 min)', sublabel: 'Choisir 1 des 2 images + plan' },
              { id: 'pres', x: 300, y: 190, label: '2. Présentation (3–4 min)', sublabel: 'Décrire l’image + Thème IB' },
              { id: 'follow', x: 495, y: 190, label: '3. Discussion (4–5 min)', sublabel: 'Culture francophone + opinion' },
              { id: 'general', x: 690, y: 190, label: '4. Thème libre (5–6 min)', sublabel: 'Deuxième thème du programme' },
            ],
            edges: [
              { id: 'io1', from: 'prep', to: 'pres', label: 'notes (max 10 mots)' },
              { id: 'io2', from: 'pres', to: 'follow', label: 'rebondir' },
              { id: 'io3', from: 'follow', to: 'general', label: 'élargir' },
            ],
            steps: [
              {
                stepNumber: 1,
                title: 'Sélection & Plan en 15 minutes (Notes brèves)',
                descriptionMarkdown:
                  'Vous disposez de **15 minutes** pour examiner deux photos liées aux thèmes étudiés, en choisir une et noter jusqu’à 10 mots-clés (sans phrases rédigées) : **description visuelle -> message implicite -> lien francophone -> opinion personnelle**.',
                activeNodeIds: ['prep'],
                activeEdgeIds: [],
                metrics: [
                  { label: 'Préparation', value: '15 minutes' },
                  { label: 'Notes permises', value: '≤ 10 mots-clés' },
                ],
              },
              {
                stepNumber: 2,
                title: 'Présentation & Discussion thématique (8–9 min)',
                descriptionMarkdown:
                  'Décrivez concrètement la scène en 60 secondes puis dépassez la simple description pour analyser le thème associé (ex. : *Le partage de la planète* ou *L’organisation sociale*), avant de répondre aux questions d’approfondissement.',
                activeNodeIds: ['pres', 'follow'],
                activeEdgeIds: ['io1', 'io2'],
                metrics: [
                  { label: 'Critère A', value: 'Langue (12 pts)' },
                  { label: 'Critère B1', value: 'Message — Stimulus (6 pts)' },
                ],
              },
              {
                stepNumber: 3,
                title: 'Conversation générale sur un second thème (5–6 min)',
                descriptionMarkdown:
                  'L’enseignante oriente l’échange vers un **deuxième thème prescrit** du manuel *Le monde en français* afin d’évaluer votre spontanéité interactive, la richesse des temps verbaux (passé, subjonctif, conditionnel) et votre ouverture culturelle.',
                activeNodeIds: ['general'],
                activeEdgeIds: ['io3'],
                metrics: [
                  { label: 'Critère B2', value: 'Conversation (6 pts)' },
                  { label: 'Critère C', value: 'Communication interactive (6 pts)' },
                ],
              },
            ],
          },
        },
        {
          type: 'callout',
          variant: 'examiner_warning',
          title: 'Rappel : Épreuve 1 & Intégrité académique',
          markdown:
            'L’Épreuve 1 dure **1h15** et propose **trois sujets de rédaction** associés chacun à différents types de textes (choisissez le format dont vous maîtrisez parfaitement les conventions : titre, date, formule d’appel/de politesse, paragraphes structurés). Conformément au plan de cours, **aucun traducteur automatique ni outil d’IA** n’est toléré.',
        },
      ],
    },
  ],
  questions: [
    {
      topicCode: 'T5.2',
      paperType: 'Paper 1 (Production écrite)',
      commandTerm: 'Write',
      difficulty: 'Standard IB',
      maxMarks: 30,
      stimulusMarkdown:
        'Thème : **Le partage de la planète** — *À quels enjeux environnementaux faisons-nous face ?* Dans votre lycée, les poubelles de tri sont peu respectées et le gaspillage alimentaire à la cafétéria augmente.',
      questionMarkdown:
        'Rédigez un **article pour le journal de l’école** ou une **lettre formelle adressée à la direction** (250–400 mots) proposant des mesures concrètes pour réduire l’empreinte écologique de l’établissement et sensibiliser les élèves.',
      markscheme: {
        marking_points: [
          {
            code: 'A1',
            criterion: 'Critère A — Langue (12 pts) : vocabulaire varié de l’écologie, accords justes, connecteurs logiques (par ailleurs, toutefois, afin que + subjonctif)',
            marks: 12,
          },
          {
            code: 'M1',
            criterion: 'Critère B — Message (12 pts) : arguments pertinents et réalistes répondant clairement aux deux volets (tri sélectif + gaspillage alimentaire) avec exemples concrets',
            marks: 12,
          },
          {
            code: 'M2',
            criterion: 'Critère C — Compréhension conceptuelle (6 pts) : adéquation parfaite au format choisi (titre/accroche/signature d’article OU en-tête/vouvoiement/formule de politesse pour la lettre formelle)',
            marks: 6,
          },
        ],
        model_answer:
          '**Plan recommandé (250–400 mots) :**\n- **Si Lettre formelle (vous) :** Date/lieu, objet (*Proposition d’un plan écoresponsable au lycée*), formule d’appel (*Monsieur le Directeur / Madame la Directrice*), constat chiffré du gaspillage, 2–3 solutions concrètes (compostage, affiches visuelles bilingues, brigade verte étudiante), appel à une réunion et formule de politesse soutenue (*Je vous prie d’agréer...*).\n- **Si Article scolaire (ton engageant) :** Titre accrocheur, chapeau résumant l’urgence, sous-titres structurés, témoignages d’élèves et conclusion incitant à l’action collective.',
      },
      sourceFileNames: ['plan du cours IB 11e 2026.pdf'],
    },
    {
      topicCode: 'T3.3',
      paperType: 'Paper 1 (Production écrite)',
      commandTerm: 'Write',
      difficulty: 'Standard IB',
      maxMarks: 30,
      stimulusMarkdown:
        'Thème : **L’ingéniosité humaine** — *Comment les arts peuvent-ils nous aider à comprendre une culture ?* Vous venez d’assister à une projection de cinéma francophone ou de visiter une exposition locale.',
      questionMarkdown:
        'Rédigez une **entrée de blogue culturel** destinée à de jeunes lecteur·rice·s francophones (250–400 mots) expliquant ce que cette œuvre artistique révèle sur les valeurs et traditions de la communauté concernée.',
      markscheme: {
        marking_points: [
          { code: 'A1', criterion: 'Critère A — Langue (12 pts) : maîtrise du passé composé/imparfait pour raconter l’œuvre et du présent analytique pour en commenter la portée culturelle', marks: 12 },
          { code: 'M1', criterion: 'Critère B — Message (12 pts) : lien explicite entre éléments artistiques concrets et compréhension interculturelle', marks: 12 },
          { code: 'M2', criterion: 'Critère C — Conventions du blogue (6 pts) : titre attrayant, adresse directe au lectorat (tutoiement ou vous collectif amical), ton enthousiaste mais réfléchi, appel aux commentaires', marks: 6 },
        ],
        model_answer:
          'Structurez votre billet de blogue avec un **titre captivant**, une brève accroche située dans le temps (*« Samedi dernier, j’ai découvert... »*), deux paragraphes analysant des choix artistiques précis (musique, mise en scène, dialogues francophones) et leur écho culturel, puis une **question finale ouverte aux lecteurs** dans les commentaires.',
      },
      sourceFileNames: ['plan du cours IB 11e 2026.pdf'],
    },
    {
      topicCode: 'T1.1',
      paperType: 'Paper 2 (Compréhension écrite & orale)',
      commandTerm: 'Identify',
      difficulty: 'Standard IB',
      maxMarks: 6,
      stimulusMarkdown:
        'Extrait authentique (style Épreuve 2 Compréhension écrite — *L’identité*) : « Grandir entre deux langues n’est pas toujours un fardeau : si certains jeunes hésitent parfois entre les traditions familiales et les codes de leurs pairs à l’école, beaucoup transforment ce métissage linguistique en véritable atout professionnel et culturel. »',
      questionMarkdown:
        '(a) Relevez **une** difficulté mentionnée par l’auteur face au bilinguisme des jeunes. [2]\n(b) Relevez **deux** avantages associés à ce « métissage linguistique ». [2]\n(c) Identifiez un mot ou une expression montrant que l’auteur adopte une perspective plutôt **nuancée mais optimiste**. [2]',
      markscheme: {
        marking_points: [
          { code: 'A1', criterion: '(a) Hésitation / tiraillement entre les traditions familiales et les normes des pairs scolaires', marks: 2 },
          { code: 'A2', criterion: '(b) Atout professionnel ET atout culturel (1 pt chacun)', marks: 2 },
          { code: 'M1', criterion: '(c) Justifie « véritable atout » ou la réfutation « n’est pas toujours un fardeau » comme marqueur de nuance positive', marks: 2 },
        ],
        model_answer:
          '(a) Les jeunes doivent parfois négocier une tension entre les **traditions familiales** et les **codes de leurs camarades**.\n(b) Le bilinguisme devient à la fois un **atout professionnel** et un **atout culturel**.\n(c) L’expression *« n’est pas toujours un fardeau »* suivie de *« véritable atout »* montre que l’auteur reconnaît les obstacles tout en valorisant la richesse identitaire.',
      },
      sourceFileNames: ['plan du cours IB 11e 2026.pdf'],
    },
  ],
  flashcards: [
    {
      topicCode: 'T1',
      frontMarkdown: 'Quelle est la question directrice du thème **L’identité** dans le plan de cours de Mme MacQuarrie ?',
      backMarkdown: '*« De quelle façon exprimons-nous notre identité ? »*',
    },
    {
      topicCode: 'T2',
      frontMarkdown: 'Quelle est la question directrice du thème **Les expériences** ?',
      backMarkdown: '*« Comment le passé construit-il notre avenir ? »*',
    },
    {
      topicCode: 'T3',
      frontMarkdown: 'Quelle est la question directrice du thème **L’ingéniosité humaine** ?',
      backMarkdown: '*« Comment les arts peuvent-ils nous aider à comprendre une culture ? »*',
    },
    {
      topicCode: 'T4',
      frontMarkdown: 'Quelle est la question directrice du thème **L’organisation sociale** ?',
      backMarkdown: '*« Quels sont les liens avec les gens que nous côtoyons ? »*',
    },
    {
      topicCode: 'T5',
      frontMarkdown: 'Quelle est la question directrice du thème **Le partage de la planète** ?',
      backMarkdown: '*« À quels enjeux environnementaux faisons-nous face ? »*',
    },
    {
      topicCode: 'EXAM.1',
      frontMarkdown: 'Décrivez la répartition exacte des **4 composantes IB** en Français B NM (12e année).',
      backMarkdown:
        '- **25 % Épreuve 1** : Production écrite (1h15)\n- **25 % Épreuve 2** : Compréhension orale (~45 min)\n- **25 % Épreuve 2** : Compréhension écrite (1h)\n- **25 % Oral individuel (IA)** : 15 min prép. + entretien sur image',
    },
  ],
  topicGuidanceNotes: {
    T1: 'Plan du cours Mme MacQuarrie (11e) : rotation bimestrielle — Identités (« De quelle façon exprimons-nous notre identité ? »), texte de référence *Le monde en français*.',
    T2: 'Rotation bimestrielle — Expériences (« Comment le passé construit-il notre avenir ? ») : consolider passé composé / imparfait / plus-que-parfait en contexte.',
    T3: 'Rotation bimestrielle — Ingéniosité humaine (« Comment les arts peuvent-ils nous aider à comprendre une culture ? »).',
    T4: 'Rotation bimestrielle — Organisation sociale (« Quels sont les liens avec les gens que nous côtoyons ? »).',
    T5: 'Rotation bimestrielle — Partage de la planète (« À quels enjeux environnementaux faisons-nous face ? »).',
    'EXAM.1': 'Épreuve 1 (25 % IB, 1h15) : rédiger un texte de 250–400 mots parmi 3 choix en respectant scrupuleusement les conventions du type de texte et le registre.',
    'EXAM.2': 'Épreuve 2 (50 % IB au total : 25 % Compréhension orale ~45 min avec écouteurs + 25 % Compréhension écrite 1h).',
    'EXAM.3': 'Évaluation interne — Oral individuel (25 % IB) : 15 min de préparation (≤10 mots-clés) suivies d’un entretien structuré à partir d’une image liée aux 5 thèmes.',
  },
};
