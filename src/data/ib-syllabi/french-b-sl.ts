import type { IBSubjectConfig } from './index';

export const FRENCH_B_SL_CONFIG: IBSubjectConfig = {
  slug: 'french-b-sl',
  name: 'French B',
  shortName: 'French B SL',
  level: 'SL',
  groupNumber: 2,
  firstAssessment: 'May 2020 (Current through Class of 2028)',
  description:
    'IB Diploma Language B — French B Standard Level covering all 5 Prescribed Themes (Identités, Expériences, Ingéniosité humaine, Organisation sociale, Partage de la planète) and all official recommended subtopics alongside Paper 1 Production écrite, Paper 2 Compréhension écrite & orale, and the Individual Oral.',
  examPaperTypes: [
    'Paper 1 (Production écrite)',
    'Paper 2 (Compréhension écrite & orale)',
  ],
  paper_types: [
    'Paper 1 (Production écrite)',
    'Paper 2 (Compréhension écrite & orale)',
  ],
  assessmentComponents: [
    {
      name: 'Paper 1 — Production écrite (Writing)',
      paperType: 'Paper 1 (Production écrite)',
      duration: '1 hour 15 minutes',
      marks: 30,
      weightingPercent: 25,
      description:
        'One 250–400 word written response selected from three prompts across the 5 Prescribed Themes, choosing the most appropriate text type (lettre, article, blogue, discours, courriel, brochure, journal intime) for audience, context, and register.',
      isExternal: true,
    },
    {
      name: 'Paper 2 — Compréhension écrite et orale (Listening & Reading)',
      paperType: 'Paper 2 (Compréhension écrite & orale)',
      duration: '1 hour 45 minutes (45m Listening + 1h Reading)',
      marks: 65,
      weightingPercent: 50,
      description:
        'Receptive skills: Listening comprehension (3 audio passages, 25 marks) and Reading comprehension (3 authentic French texts across the 5 themes, 40 marks).',
      isExternal: true,
    },
    {
      name: 'Évaluation interne — Oral individuel (IO)',
      paperType: 'Internal Assessment',
      duration: '15m prep + 12–15m oral',
      marks: 30,
      weightingPercent: 25,
      description:
        'Individual oral based on a visual stimulus tied to one of the 5 Prescribed Themes (3–4m presentation, 4–5m follow-up discussion, 5–6m general conversation covering another theme and Francophone culture).',
      isExternal: false,
    },
  ],
  commandTerms: [
    'Analyser',
    'Comparer',
    'Décrire',
    'Discuter',
    'Expliquer',
    'Identifier',
    'Interpréter',
    'Justifier',
    'Présenter',
    'Rédiger',
  ],
  guidingPrinciples: [
    'All communication is anchored in 5 Prescribed Themes and conceptual understandings: Audience (Destinataire), Context (Contexte), Purpose (Objectif), Meaning (Sens), and Variation (Variation linguistique).',
    'Paper 1 rewards choosing the exact appropriate text type (type de texte), maintaining consistent register (tutoiement vs vouvoiement), cohesive connectors, and rich idiomatic French (250–400 words at SL).',
    'The Individual Oral requires linking the visual stimulus explicitly to Francophone culture (not only general impressions) and engaging naturally across all three oral phases.',
    'Core SL grammar mastery: présent, passé composé vs imparfait, futur simple/proche, conditionnel, subjonctif présent after expressions of necessity/emotion/doubt, pronoms relatifs & COD/COI.',
  ],
  iaOverview: {
    title: 'Oral individuel (French B SL IO)',
    maxMarks: 30,
    wordLimit: '15 min prep · 12–15 min oral',
    weightingPercent: 25,
    summary:
      'Assessed out of 30 marks across Criterion A Language (12), Criterion B1 Message — Visual Stimulus (6), Criterion B2 Message — Conversation (6), and Criterion C Interactive Skills (6).',
  },
  units: [
    {
      code: 'T1',
      title: 'Thème 1 : Identités',
      guidanceNotes:
        'Explores the nature of self, personal and cultural values, health, beliefs, subcultures, and the relationship between language and identity in the Francophone world.',
      subtopics: [
        {
          code: 'T1.1',
          title: 'Modes de vie (Lifestyles)',
          guidanceNotes:
            'Habitudes quotidiennes, équilibre travail-loisirs, alimentation, consumérisme et choix de vie chez les jeunes francophones.',
          keyConcepts: ['Habitudes quotidiennes', 'Équilibre de vie', 'Consommation'],
        },
        {
          code: 'T1.2',
          title: 'Santé et bien-être (Health and well-being)',
          guidanceNotes:
            'Santé physique et mentale, sport, sommeil, stress scolaire, nutrition et systèmes de santé publique.',
          keyConcepts: ['Santé mentale & physique', 'Prévention', 'Bien-être'],
        },
        {
          code: 'T1.3',
          title: 'Croyances et valeurs (Beliefs and values)',
          guidanceNotes:
            'Laïcité vs diversité religieuse, valeurs morales, éthique personnelle et transmission intergénérationnelle.',
          keyConcepts: ['Laïcité', 'Valeurs familiales', 'Tolérance'],
        },
        {
          code: 'T1.4',
          title: 'Sous-cultures (Subcultures)',
          guidanceNotes:
            'Cultures urbaines, musique, mode, communautés numériques et sentiment d’appartenance.',
          keyConcepts: ['Appartenance', 'Expression identitaire', 'Cultures jeunes'],
        },
        {
          code: 'T1.5',
          title: 'Langue et identité (Language and identity)',
          guidanceNotes:
            'Bilinguisme, la Francophonie mondiale, argot/verlan, anglicismes et préservation des langues régionales.',
          keyConcepts: ['Francophonie', 'Bilinguisme', 'Registres de langue'],
        },
      ],
    },
    {
      code: 'T2',
      title: 'Thème 2 : Expériences',
      guidanceNotes:
        'Examines stories, journeys, rites of passage, cultural traditions, and migration experiences that shape human lives.',
      subtopics: [
        {
          code: 'T2.1',
          title: 'Activités de loisirs (Leisure activities)',
          guidanceNotes:
            'Sports, cinéma, lecture, activités bénévoles et évolution des loisirs à l’ère numérique.',
          keyConcepts: ['Loisirs actifs', 'Culture populaire', 'Passions'],
        },
        {
          code: 'T2.2',
          title: 'Vacances et voyages (Holidays and travel)',
          guidanceNotes:
            'Tourisme durable vs tourisme de masse, voyages scolaires, échanges linguistiques et découvertes culturelles.',
          keyConcepts: ['Écotourisme', 'Dépaysement', 'Échanges culturels'],
        },
        {
          code: 'T2.3',
          title: 'Histoires de vie (Life stories)',
          guidanceNotes:
            'Récits autobiographiques, défis personnels, résilience et figures marquantes du monde francophone (passé composé / imparfait).',
          keyConcepts: ['Narration au passé', 'Résilience', 'Témoignage'],
        },
        {
          code: 'T2.4',
          title: 'Rites de passage (Rites of passage)',
          guidanceNotes:
            'Passage à l’âge adulte, baccalauréat/diplôme, autonomie étudiante et cérémonies culturelles.',
          keyConcepts: ['Autonomie', 'Étapes de la vie', 'Transitions'],
        },
        {
          code: 'T2.5',
          title: 'Coutumes et traditions (Customs and traditions)',
          guidanceNotes:
            'Fêtes francophones (14 juillet, Carnaval de Québec, Fête de la Musique), gastronomie, patrimoine et modernisation des traditions.',
          keyConcepts: ['Patrimoine culturel', 'Fêtes francophones', 'Tradition vs modernité'],
        },
        {
          code: 'T2.6',
          title: 'Migrations (Migration)',
          guidanceNotes:
            'Mobilité étudiante et professionnelle, immigration, intégration, déracinement et identité multiculturelle.',
          keyConcepts: ['Intégration', 'Déracinement', 'Multiculturalisme'],
        },
      ],
    },
    {
      code: 'T3',
      title: 'Thème 3 : Ingéniosité humaine',
      guidanceNotes:
        'Investigates creativity, artistic expression, media, digital technology, and scientific innovation in French-speaking societies.',
      subtopics: [
        {
          code: 'T3.1',
          title: 'Divertissement (Entertainment)',
          guidanceNotes:
            'Cinéma francophone, jeux vidéo, plateformes de streaming, festivals et influence culturelle.',
          keyConcepts: ['Cinéma & médias', 'Industrie culturelle', 'Influence'],
        },
        {
          code: 'T3.2',
          title: 'Expressions artistiques (Artistic expressions)',
          guidanceNotes:
            'Art de rue, bande dessinée franco-belge, littérature, musique et rôle engagé de l’art dans la société.',
          keyConcepts: ['Art engagé', 'Bande dessinée', 'Esthétique'],
        },
        {
          code: 'T3.3',
          title: 'Communication et médias (Communication and media)',
          guidanceNotes:
            'Réseaux sociaux, désinformation (infox), liberté de la presse, publicité et esprit critique face aux médias.',
          keyConcepts: ['Réseaux sociaux', 'Infox & esprit critique', 'Liberté de la presse'],
        },
        {
          code: 'T3.4',
          title: 'Technologie (Technology)',
          guidanceNotes:
            'Intelligence artificielle, smartphones à l’école, protection des données personnelles et fracture numérique.',
          keyConcepts: ['Vie privée', 'IA & société', 'Fracture numérique'],
        },
        {
          code: 'T3.5',
          title: 'Innovation scientifique (Scientific innovation)',
          guidanceNotes:
            'Progrès médicaux, énergies renouvelables, conquête spatiale et questions bioéthiques.',
          keyConcepts: ['Éthique scientifique', 'Progrès médical', 'Transitions énergétiques'],
        },
      ],
    },
    {
      code: 'T4',
      title: 'Thème 4 : Organisation sociale',
      guidanceNotes:
        'Explores social structures, community engagement, education, the world of work, and justice.',
      subtopics: [
        {
          code: 'T4.1',
          title: 'Relations sociales (Social relationships)',
          guidanceNotes:
            'Famille contemporaine, amitié, solidarité intergénérationnelle et communication interpersonnelle.',
          keyConcepts: ['Famille & amitié', 'Solidarité', 'Dynamiques sociales'],
        },
        {
          code: 'T4.2',
          title: 'Communauté (Community)',
          guidanceNotes:
            'Vie associative, quartiers solidaires, accueil des nouveaux arrivants et cohésion locale.',
          keyConcepts: ['Vie associative', 'Cohésion sociale', 'Entraide'],
        },
        {
          code: 'T4.3',
          title: 'Engagement social (Social engagement)',
          guidanceNotes:
            'Bénévolat, militantisme citoyen, engagement des jeunes et participation démocratique.',
          keyConcepts: ['Bénévolat', 'Citoyenneté active', 'Militantisme'],
        },
        {
          code: 'T4.4',
          title: 'Éducation (Education)',
          guidanceNotes:
            'Systèmes scolaires francophones, égalité des chances, apprentissage des langues et orientation universitaire.',
          keyConcepts: ['Égalité des chances', 'Système scolaire', 'Apprentissage'],
        },
        {
          code: 'T4.5',
          title: 'Monde du travail (The working world)',
          guidanceNotes:
            'Télétravail, semaine de 35 heures, chômage des jeunes, stages, CV/lettres de motivation et métiers d’avenir.',
          keyConcepts: ['Télétravail', 'Insertion professionnelle', 'Conditions de travail'],
        },
        {
          code: 'T4.6',
          title: 'Loi et ordre (Law and order)',
          guidanceNotes:
            'Droits et devoirs civiques, justice des mineurs, cybersécurité et débats sur la réglementation publique.',
          keyConcepts: ['Droits & devoirs', 'Justice', 'Réglementation'],
        },
      ],
    },
    {
      code: 'T5',
      title: 'Thème 5 : Partage de la planète',
      guidanceNotes:
        'Addresses global ecological, ethical, geopolitical, and socioeconomic challenges.',
      subtopics: [
        {
          code: 'T5.1',
          title: 'Environnement (The environment)',
          guidanceNotes:
            'Changement climatique, recyclage, biodiversité, gestion de l’eau et éco-anxiété chez les jeunes.',
          keyConcepts: ['Développement durable', 'Transition écologique', 'Biodiversité'],
        },
        {
          code: 'T5.2',
          title: 'Droits humains (Human rights)',
          guidanceNotes:
            'Droits des enfants, liberté d’expression, accès à l’éducation et organisations humanitaires.',
          keyConcepts: ['Droits fondamentaux', 'Liberté d’expression', 'Action humanitaire'],
        },
        {
          code: 'T5.3',
          title: 'Paix et conflits (Peace and conflict)',
          guidanceNotes:
            'Résolution pacifique des conflits, maintien de la paix, mémoire historique et réconciliation.',
          keyConcepts: ['Diplomatie', 'Devoir de mémoire', 'Réfugiés'],
        },
        {
          code: 'T5.4',
          title: 'Égalité (Equality)',
          guidanceNotes:
            'Égalité hommes-femmes, lutte contre les discriminations, inclusion et justice sociale.',
          keyConcepts: ['Parité', 'Anti-discrimination', 'Inclusion'],
        },
        {
          code: 'T5.5',
          title: 'Mondialisation (Globalization)',
          guidanceNotes:
            'Commerce équitable, standardisation culturelle vs diversité locale et interdépendance économique.',
          keyConcepts: ['Commerce équitable', 'Diversité culturelle', 'Interdépendance'],
        },
        {
          code: 'T5.6',
          title: 'Éthique (Ethics)',
          guidanceNotes:
            'Consommation responsable, bien-être animal, dilemmes technologiques et responsabilité citoyenne.',
          keyConcepts: ['Consommation éthique', 'Responsabilité', 'Dilemmes moraux'],
        },
        {
          code: 'T5.7',
          title: 'Environnement urbain et rural (Urban and rural environment)',
          guidanceNotes:
            'Exode rural, transports en commun, villes durables (« ville du quart d’heure ») et crise du logement.',
          keyConcepts: ['Villes durables', 'Mobilité urbaine', 'Exode rural'],
        },
      ],
    },
    {
      code: 'EXAM',
      title: 'Évaluation : Types de textes, Grammaire & Oral individuel',
      guidanceNotes:
        'Essential exam-technique preparation for Paper 1 text-type conventions, Paper 2 comprehension strategies, and the Internal Assessment Individual Oral.',
      subtopics: [
        {
          code: 'EXAM.1',
          title: 'Paper 1 : Maîtrise des types de textes et registres (250–400 mots)',
          guidanceNotes:
            'Formats obligatoires : lettre formelle/informelle, courriel, article de presse, blogue, discours, brochure/dépliant, éditorial, journal intime, critique. Toujours adapter le registre (tu vs vous), l’accroche, les connecteurs logiques (d’abord, par ailleurs, néanmoins, en somme) et la formule de politesse.',
          keyConcepts: ['Types de textes', 'Registre (tu/vous)', 'Connecteurs logiques'],
        },
        {
          code: 'EXAM.2',
          title: 'Paper 2 : Stratégies de compréhension écrite et orale',
          guidanceNotes:
            'Repérage des idées principales, synonymes/paraphrases (vrai/faux avec justification exacte tirée du texte), inférences de ton/objectif et gestion des trois écoutes/lectures.',
          keyConcepts: ['Justification textuelle', 'Paraphrase', 'Compréhension globale & fine'],
        },
        {
          code: 'EXAM.3',
          title: 'Oral individuel : Stimulus visuel & Culture francophone',
          guidanceNotes:
            'Structure en 3 étapes : (1) Présentation de l’image en 3–4 min (description brève → lien explicite au thème et à une culture francophone → message critique), (2) Discussion ciblée (4–5 min), (3) Conversation générale sur un autre thème (5–6 min).',
          keyConcepts: ['Stimulus visuel', 'Lien culturel francophone', 'Interaction spontanée'],
        },
      ],
    },
  ],
};
