import type {
  ConceptComparisonMatrixSpec,
  FrenchTextTypeStudioSpec,
  LabeledExplorerSpec,
  StepMechanismSpec,
  WorkedExampleSpec,
} from '@/types/diagrams';

// ============================================================================
// GUIDE 1 DIAGRAMS — EXAM.1 / EXAM.2 / EXAM.3 (Overview, IO & Paper 2)
// ============================================================================

export const FR_V3_THEMES_CURRICULUM_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'fr-v3-themes-curriculum-matrix',
  title: 'Architecture des 5 Thèmes IB (Le Monde en Français × Plan CRHS)',
  caption:
    'Correspondance exacte entre le programme de Mme MacQuarrie (CRHS 11e), les 5 chapitres Cambridge (2018) et les exigences des Épreuves 1, 2 et de l’Oral individuel.',
  columns: [
    'Thème & Unité',
    'Question directrice (CRHS)',
    'Sous-thèmes & Lectures clés (Cambridge)',
    'Ancrage francophone & Grammaire cible',
  ],
  rows: [
    {
      criterion: '1. Identités (T1 · Ch. 1, pp. 10–79)',
      cells: [
        '« De quelle façon exprimons-nous notre identité ? »',
        '1.1 Modes de vie & clichés (#Stopauxclichés, Maalouf) · 1.2 Vivre autrement (Tesson, Sarah Gysler) · 1.3 Santé (Nothomb) · 1.4 Langues & bilinguisme (Huston).',
        'Liban/France, Algérie/France, Suisse, Francophonie (OIF). **Grammaire :** possessifs/démonstratifs, gérondif, subjonctif de conseil, expression du but.',
      ],
      ibExamTip:
        'Ne confondez jamais identité nationale et identité linguistique : citez Amin Maalouf (« dosage particulier ») ou le bilinguisme québécois/acadien pour nuancer Critère B.',
    },
    {
      criterion: '2. Expériences (T2 · Ch. 2, pp. 80–139)',
      cells: [
        '« Comment le passé construit-il notre avenir ? »',
        '2.1 Voyages & tourisme (La Presse, Massicotte) · 2.2 Mémoire (Simone Veil, Semprún) · 2.3 Rites de passage (baccalauréat, Camara Laye) · 2.4 Migrations (Omar Ba, Gaudé).',
        'Québec, Burkina Faso (Tougan), Tahiti, Mayotte, Guinée, Sénégal. **Grammaire :** passé composé / imparfait / plus-que-parfait, pronoms relatifs simples, discours indirect.',
      ],
      ibExamTip:
        'Dans tout récit au passé (Paper 1 Journal intime / Blog), posez le décor à l’imparfait avant d’enchaîner les actions ponctuelles au passé composé.',
    },
    {
      criterion: '3. Ingéniosité humaine (T3 · Ch. 3, pp. 140–203)',
      cells: [
        '« Comment les arts peuvent-ils nous aider à comprendre une culture ? »',
        '3.1 Science & controverses (Axel Kahn, Dickner) · 3.2 Arts engagés (C215, Ridjali, Ziouani) · 3.3 Folklore & 7e art (Hélias, Hugo) · 3.4 Médias & clichés (Laferrière, Orsenna).',
        'Rwanda, Mayotte, Seine-Saint-Denis (9-3), Bretagne, Haïti, Mali. **Grammaire :** cause/conséquence, subjonctif d’émotion/doute, forme passive, registres.',
      ],
      ibExamTip:
        'En analyse médiatique ou artistique, passez toujours du constat (« Cette œuvre montre… ») à l’intention culturelle (« Elle dénonce / reflète… »).',
    },
    {
      criterion: '4. Organisation sociale (T4 · Ch. 4, pp. 204–259)',
      cells: [
        '« Quels sont les liens avec les gens que nous côtoyons ? »',
        '4.1 Proches & conflits (Tanguy, Tel-jeunes, Guène) · 4.2 Solidarité (Emmaüs, Max Havelaar, Chedid) · 4.3 École & travail 2050 (Pesquet, Murzeau) · 4.4 Ordre public (cyberharcèlement, bizutage).',
        'Canada (Statistique Canada), Belgique (rtl.be), France (Loi Royal 1998, Pharos 3020). **Grammaire :** impératif, conditionnel présent/passé, phrases hypothétiques, négation.',
      ],
      ibExamTip:
        'Le choix entre *tutoiement* et *vouvoiement* illustre directement la compréhension conceptuelle (Variation & Destinataire) dans Thème 4.',
    },
    {
      criterion: '5. Partage de la planète (T5 · Ch. 5, pp. 260–329)',
      cells: [
        '« À quels enjeux environnementaux faisons-nous face ? »',
        '5.1 Écologie (Francœur, Gran, écoguerriers) · 5.2 Droits humains & inclusion (DUDH 1948, vote à 16 ans, Mariama Bâ) · 5.3 Conflits (Kourouma, Fertet, Algérie) · 5.4 Bioéthique (don d’organes, GPA, Bauby).',
        'Québec (Le Devoir), Sénégal, Belgique (beldonor.be), Suisse, Algérie. **Grammaire :** accord du participe passé, opposition/concession, pronoms relatifs composés, mise en relief.',
      ],
      ibExamTip:
        'Pour dépasser le niveau B1, opposez responsabilité individuelle et action politique/industrielle à l’aide de « Bien que + subjonctif » et « Ce qui importe, c’est… ».',
    },
  ],
};

export const FR_V3_IO_PROTOCOL_STEPS: StepMechanismSpec = {
  type: 'step_mechanism',
  id: 'fr-v3-io-protocol-steps',
  title: 'Protocole chronométré de l’Oral individuel (IA SL · 25 % · 30 points)',
  caption:
    'Déroulement officiel IB (15 min de préparation + 12–15 min d’entretien) évalué selon les Critères A (Langue /12), B1 (Stimulus /6), B2 (Conversation /6) et C (Interaction /6).',
  nodes: [
    {
      id: 'io-prep',
      x: 110,
      y: 190,
      label: '1. Préparation',
      sublabel: '15 min · ≤10 notes',
      group: 'prep',
    },
    {
      id: 'io-p1',
      x: 300,
      y: 115,
      label: '2. Présentation',
      sublabel: '3–4 min · Stimulus',
      group: 'p1',
    },
    {
      id: 'io-p2',
      x: 500,
      y: 115,
      label: '3. Suivi Thème 1',
      sublabel: '4–5 min · Questions',
      group: 'p2',
    },
    {
      id: 'io-p3',
      x: 690,
      y: 235,
      label: '4. Conversation',
      sublabel: '5–6 min · 2e Thème',
      group: 'p3',
    },
  ],
  edges: [
    { id: 'io-e1', from: 'io-prep', to: 'io-p1', label: 'Plan ≤10 pts' },
    { id: 'io-e2', from: 'io-p1', to: 'io-p2', label: 'Relance prof.' },
    { id: 'io-e3', from: 'io-p2', to: 'io-p3', label: 'Pivot thème' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Préparation supervisée (15 min) : choix du stimulus & plan en 10 points',
      descriptionMarkdown:
        'L’enseignante vous présente **deux stimuli visuels** inédits (associés à des thèmes différents). Choisissez celui qui vous inspire le lien **le plus précis avec la culture francophone**. Rédigez un plan succinct de **10 notes brèves maximum** (mots-clés, connecteurs, référence culturelle) — aucune phrase rédigée n’est tolérée.',
      activeNodeIds: ['io-prep'],
      activeEdgeIds: [],
      metrics: [
        { label: 'Durée', value: '15 minutes' },
        { label: 'Notes autorisées', value: '≤ 10 mots-clés / puces' },
        { label: 'Choix', value: '1 stimulus sur 2' },
      ],
    },
    {
      stepNumber: 2,
      title: 'Partie 1 : Présentation du stimulus (3–4 min) — Description → Francophonie → Thème',
      descriptionMarkdown:
        'Structure gagnante : **(1) 45–60 s** de description structurée (*au premier plan, à l’arrière-plan, atmosphère*) ; **(2) 90 s** d’interprétation du message implicite et de lien explicite au **Thème IB** ; **(3) 90 s** d’ancrage dans une **réalité francophone précise** (ex. la laïcité, l’immigration au Québec, la Fête de la Musique, l’éducation au Sénégal) et de prise de position nuancée.',
      activeNodeIds: ['io-p1'],
      activeEdgeIds: ['io-e1'],
      metrics: [
        { label: 'Durée', value: '3–4 minutes (monologue)' },
        { label: 'Critère B1', value: '6 points (Stimulus)' },
        { label: 'Piège fatal', value: 'Décrire 3 min sans analyser' },
      ],
    },
    {
      stepNumber: 3,
      title: 'Partie 2 : Discussion de suivi (4–5 min) — Approfondissement & Nuance',
      descriptionMarkdown:
        'L’enseignante rebondit sur vos propos pour tester votre capacité à **défendre, nuancer et exemplifier** votre thèse. Utilisez le subjonctif (*« Bien que cette pratique soit… »*), le conditionnel (*« Il faudrait que les autorités… »*) et reliez le visuel à des textes ou débats de *Le monde en français*.',
      activeNodeIds: ['io-p2'],
      activeEdgeIds: ['io-e2'],
      metrics: [
        { label: 'Durée', value: '4–5 minutes' },
        { label: 'Critère C', value: '6 points (Interaction)' },
        { label: 'Outils clés', value: 'Concession & Conditionnel' },
      ],
    },
    {
      stepNumber: 4,
      title: 'Partie 3 : Conversation générale (5–6 min) — Un SECOND thème prescrit',
      descriptionMarkdown:
        'L’examinatrice annonce la transition vers **au moins un autre des 5 thèmes** (ex. passer d’*Identités* à *Partage de la planète*). Évitez les réponses par « oui/non » : développez chaque réponse en **3 temps** (*Idée directe → Exemple francophone → Conséquence ou question ouverte*).',
      activeNodeIds: ['io-p3'],
      activeEdgeIds: ['io-e3'],
      metrics: [
        { label: 'Durée', value: '5–6 minutes' },
        { label: 'Critère B2', value: '6 points (Conversation)' },
        { label: 'Critère A', value: '12 points (Langue globale)' },
      ],
    },
  ],
};

export const FR_V3_P2_READING_WORKED_EXAMPLE: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'fr-v3-p2-reading-worked-example',
  title: 'Méthode Épreuve 2 (Compréhension écrite) : Vrai/Faux, Référents & Synonymes',
  caption:
    'Résolution pas à pas des 4 formats d’exercices les plus exigeants de l’Épreuve 2 (1 h · 40 points · 25 % du diplôme), modélisée sur les textes de Le Monde en Français.',
  sourceLabel: 'Épreuve 2 · EXAM.2 (Compréhension écrite)',
  commandTerm: 'Justifier & Identifier',
  marks: 6,
  problemMarkdown:
    'Lisez ce court extrait adapté de l’Unité 1.4 :\n\n> *« Bien que la disparition des langues autochtones semble inéluctable face à l’essor d’Internet, plusieurs chercheurs rappellent qu’elles renferment des savoirs médicinaux précieux. C’est pourquoi l’Unesco finance des programmes locaux afin que les jeunes se les réapproprient avec fierté. »*\n\n**(1)** *Vrai ou Faux avec justification exacte* : Selon l’extrait, Internet accélère l’oubli des langues minoritaires, mais celles-ci n’ont plus aucune utilité pratique. **[2]**\n**(2)** À quoi renvoient les pronoms **« elles »** et **« les »** ? **[2]**\n**(3)** Relevez dans le texte un synonyme de **« inévitable »** et un synonyme de **« contiennent »**. **[2]**',
  givenData: [
    { label: 'Règle V/F IB', value: 'Case + citation textuelle exacte obligatoires' },
    { label: 'Piège classique', value: 'Paraphraser la justification fait perdre le point' },
    { label: 'Référents', value: 'Vérifier genre & nombre (fém. pl. ici)' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Traiter la question Vrai/Faux : décomposer les deux propositions de l’énoncé',
      workingMarkdown:
        'L’énoncé contient **deux assertions** reliées par *« mais »* : (a) Internet menace les langues, et (b) *« celles-ci n’ont plus aucune utilité pratique »*. En IB Paper 2, si une moitié de l’énoncé contredit le texte, toute l’affirmation est **FAUSSE**. Le texte dit exactement : *« elles renferment des savoirs médicinaux précieux »*.',
      markCode: 'J1 (1 pt)',
      rationale:
        'Les correcteurs IB exigent la case exacte (Faux) + la citation copiée mot à mot prouvant la contradiction sans ajout ni reformulation.',
    },
    {
      stepNumber: 2,
      title: 'Rédiger la justification textuelle stricte (mot pour mot)',
      workingMarkdown:
        '**Réponse :** **Faux.** Justification : *« elles renferment des savoirs médicinaux précieux »*. (N’ajoutez pas *« donc elles sont utiles »* — recopier la portion exacte du passage suffit et évite toute erreur d’interprétation.)',
      markCode: 'J2 (1 pt)',
      rationale:
        'Les deux composantes (verdict + citation exacte) sont requises pour obtenir le point complet sur une question Vrai/Faux avec justification.',
    },
    {
      stepNumber: 3,
      title: 'Résoudre les pronoms référents par accord grammatical et sens logique',
      workingMarkdown:
        '- **« elles »** (sujet fém. plur.) → remplace **« les langues autochtones »** (*qu’elles renferment…*).\n- **« les »** (COD fém. plur. devant *réapproprient*) → renvoie également aux **« langues autochtones »** (et non aux *programmes locaux*, qui sont masculins pluriels !).',
      markCode: 'R1 + R2 (2 pts)',
      rationale:
        'Le test d’accord en genre/nombre (masculin vs féminin) élimine immédiatement 80 % des erreurs de repérage référentiel en Paper 2.',
    },
    {
      stepNumber: 4,
      title: 'Extraire les synonymes exacts en respectant la classe grammaticale',
      workingMarkdown:
        '- **« inévitable »** (adjectif) → **« inéluctable »** (adjectif attribut après *semble*).\n- **« contiennent »** (verbe 3e pers. pl. présent) → **« renferment »** (verbe conjugué au même temps et à la même personne).',
      markCode: 'S1 + S2 (2 pts)',
      rationale:
        'Un synonyme Paper 2 doit avoir la même catégorie grammaticale (adjectif ↔ adjectif, verbe conjugué ↔ verbe conjugué) que le mot-cible.',
    },
  ],
  finalAnswerMarkdown:
    '**(1)** Faux — *« elles renferment des savoirs médicinaux précieux »* · **(2)** *« elles »* = les langues autochtones ; *« les »* = les langues autochtones · **(3)** *inéluctable* ; *renferment*.',
  commonTrapMarkdown:
    'Attention : beaucoup d’élèves répondent *« Vrai »* parce que le début de la phrase (*Internet*) correspond au texte, ou associent *« les »* aux *« savoirs médicinaux »* (masculin pluriel) ou aux *« programmes locaux »* (masculin pluriel) au lieu de vérifier le féminin pluriel **langues autochtones** !',
};

// ============================================================================
// GUIDE 2 DIAGRAMS — EXAM.1 (Ch. 6: 16 Text Types & Paper 1 Craft)
// ============================================================================

export const FR_V3_TEXT_TYPES_16_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'fr-v3-text-types-16-matrix',
  title: 'Répertoire exhaustif des 16 Types de textes (Le Monde en Français Ch. 6, pp. 334–365)',
  caption:
    'Tous les formats officiels numérotés 1A à 16A dans le manuel Cambridge avec destinataire, registre, conventions Critère C et pièges d’examen.',
  columns: [
    'Type de texte (Ch. 6)',
    'Destinataire & Registre',
    'Mise en page & Codes Critère C obligatoires',
    'Piège IB & Conseil Band 7',
  ],
  rows: [
    {
      criterion: '1A. Article (pp. 334–335)',
      cells: [
        'Grand public ou lecteurs du journal scolaire · Courant / soutenu (sans *je* si grand public ; *je* toléré pour camarades).',
        'Titre accrocheur, chapeau (qui/quoi/où/quand), intertitres, paragraphes en colonnes logiques, nom du journaliste/source.',
        'Ne commencez jamais par *« Cher lecteur »*. Intégrez une courte citation ou statistique pour crédibiliser l’angle journalistique.',
      ],
      ibExamTip: 'Modèle manuel : nettoyage du littoral de Faa’a à Tahiti (tahitipresse.pf).',
    },
    {
      criterion: '2A. Blog (pp. 336–337)',
      cells: [
        'Internautes / communauté en ligne · 1re personne (*je*), courant ou familier chaleureux, *vous* collectif ou *tu* complice.',
        'Nom du blog, titre captivant du billet, date & heure de publication, sous-titres vivants, appel explicite aux commentaires.',
        'Contrairement au journal intime, le blog est **public et interactif** : interpellez les lecteurs à la fin (*« Et vous, qu’en pensez-vous ? »*).',
      ],
      ibExamTip: 'Modèle manuel : *Ces petites rencontres qui changent le voyage* (lesacados.com).',
    },
    {
      criterion: '3A. Brochure / Dépliant (pp. 338–339)',
      cells: [
        'Grand public, élèves, touristes · Ton enthousiaste ou factuel, registre courant clair, impératif incitatif.',
        'Titre annonçant le thème, intertitres courts, listes à puces, encadrés/chiffres clés, coordonnées de contact en bas.',
        'Évitez les longs blocs de dissertation : privilégiez une présentation aérée, scannable et orientée vers l’action pratique.',
      ],
      ibExamTip: 'Modèle manuel : *Les astuces du tri sélectif* (Communauté de communes).',
    },
    {
      criterion: '4A. Courriel amical / semi-formel (pp. 340–341)',
      cells: [
        'Ami(e) (*tu*, ton chaleureux/émotif) OU supérieur/enseignant (*vous*, ton poli structuré).',
        'En-tête (*De / À / Objet*), formule d’appel adaptée, référence au message précédent, demande/souhait final, prénom seul (amical) ou nom complet (formel).',
        'Vérifiez la cohérence totale du pronom d’adresse (*tu* vs *vous*) dès l’objet jusqu’à la signature.',
      ],
      ibExamTip: 'Modèle manuel : Aurélie conseillant Émeline (*Faut que je te dise*).',
    },
    {
      criterion: '5A. Critique de film / livre / expo (pp. 342–343)',
      cells: [
        'Lecteurs culturels · Courant à soutenu, adjectifs qualificatifs évocateurs bien accordés.',
        'Titre d’opinion, nom du critique & date, fiche d’identité de l’œuvre (réalisateur, acteurs, date), résumé sans divulguer la fin, avis nuancé (+/-), recommandation.',
        'Ne racontez pas tout le film ! Consacrez au moins 60 % des mots à l’analyse esthétique et culturelle.',
      ],
      ibExamTip: 'Modèle manuel : critique de *Les Combattants* (La Croix, Thomas Cailley).',
    },
    {
      criterion: '6A. Discours (pp. 344–345)',
      cells: [
        'Auditoire en direct (camarades, assemblée, jury) · Courant à soutenu, oralité rythmée (*vous*).',
        'Apostrophe initiale (*Mesdames, Messieurs / Chers camarades*), question rhétorique, règle des trois répétitions (anaphore), appel à l’action, *« Merci de votre attention »*.',
        'Ne rédigez pas une dissertation silencieuse : faites entendre la voix de l’orateur et impliquez le public tout au long du texte.',
      ],
      ibExamTip: 'Modèle manuel : discours de Paul Jardin sur St-Michel-de-Tartas & l’accueil des migrants.',
    },
    {
      criterion: '7A. Dissertation (pp. 346–347)',
      cells: [
        'Lecteur académique / jury · Impersonnel (*on, il convient de*), registre soutenu, vocabulaire précis.',
        'Énoncé du sujet en haut, introduction (accroche + problématique), développement dialectique (thèse / antithèse / synthèse en paragraphes distincts), conclusion + ouverture.',
        'N’utilisez pas d’apostrophes familières ni de mise en page épistolaire ; bannissez *« Moi je pense que… »* répété.',
      ],
      ibExamTip: 'Modèle manuel : *La vidéosurveillance nous permet de vivre en toute sécurité. Discutez.*',
    },
    {
      criterion: '8A. Éditorial (pp. 348–349)',
      cells: [
        'Lectorat d’un journal · Courant à soutenu, voix de l’éditorialiste ou du journal (*nous*).',
        'Titre percutant reflétant la prise de position, nom de l’éditorialiste, argumentation équilibrée (pour/contre) débouchant sur une recommandation de société.',
        'À la différence de l’article informatif, l’éditorial **prend parti explicitement** au nom d’une rédaction sur un enjeu d’actualité.',
      ],
      ibExamTip: 'Modèle manuel : *Plus de vacances* par Nathalie Collard (La Presse, Québec vs France).',
    },
    {
      criterion: '9A. Guide de recommandations (pp. 350–351)',
      cells: [
        'Public ciblé (étudiants, nouveaux arrivants, voyageurs) · Courant, bienveillant, direct (*vous* ou *tu*).',
        'Titre pratique, introduction précisant le but + identité de l’organisme/auteur, sections thématiques ou liste numérotée de conseils, coordonnées ou encouragements finaux.',
        'Variez les structures injonctives : impératif, *il faut que + subjonctif*, *il vaut mieux + inf.*, *veillez à*.',
      ],
      ibExamTip: 'Modèle manuel : *Bien manger, loin de maman* (Métro Montréal, nutritionniste).',
    },
    {
      criterion: '10A. Interview / Entretien (pp. 352–353)',
      cells: [
        'Lecteurs de presse ou auditeurs · Courant à soutenu, **vouvoiement** strict du journaliste envers l’invité.',
        'Titre accrocheur, chapeau présentant la personne interviewée, alternance claire **Journaliste / Initiales :** (questions par inversion ou *est-ce que*) et réponses développées, mention *Propos recueillis par…*.',
        'Ne réduisez pas l’interview à une suite de mini-questions d’une ligne : offrez des réponses substantielles (70 % du volume total).',
      ],
      ibExamTip: 'Modèle manuel : *L’interview-confession de Teddy Riner* (Paris Match).',
    },
    {
      criterion: '11A. Journal intime (pp. 354–355)',
      cells: [
        'Soi-même uniquement · 1re personne (*je*), tutoiement du journal (*Cher journal*), ton intime, émotionnel, courant/familier.',
        'Lieu/date/heure en haut, adresse directe au journal (*Cher journal*), narration des faits + confidences intérieures, réflexion personnelle, formule de clôture intime.',
        'Piège majeur : ne demandez jamais aux lecteurs de « laisser un commentaire » ! L’écriture reste strictement privée.',
      ],
      ibExamTip: 'Modèle manuel : *Le journal d’Aurore* (Marie Desplechin).',
    },
    {
      criterion: '12A. Lettre au courrier des lecteurs (pp. 356–357)',
      cells: [
        'Rédaction d’un journal + lectorat · Courant à soutenu, vouvoiement poli mais ferme.',
        'Nom de la rubrique (*Courrier des lecteurs*), référence exacte à l’article contesté (date/titre), expression argumentée du désaccord/soutien, solution proposée, formule finale polie + nom/ville.',
        'Citez ou réfutez un argument précis de l’article initial au lieu d’écrire un essai abstrait.',
      ],
      ibExamTip: 'Modèle manuel : réaction à l’article du 23 mai sur l’homéopathie (Jacques Gauthier, Royan).',
    },
    {
      criterion: '13A. Lettre officielle (pp. 358–359)',
      cells: [
        'Maire, proviseur, recteur, employeur · Registre soutenu, **vouvoiement** impératif, ton courtois.',
        'Coordonnées expéditeur & destinataire, lieu + date, **Objet : …**, formule d’appel (*Monsieur le Maire / Madame la Directrice,*), paragraphes nets, formule de politesse complète (*Je vous prie d’agréer…*) + prénom/nom/titre.',
        'Ne concluez JAMAIS par *« Cordialement »* ou *« Amitiés »* dans une lettre officielle ou de candidature !',
      ],
      ibExamTip: 'Modèle manuel : Commune de Breuillet (compostage domestique, 3 mars 2018).',
    },
    {
      criterion: '14A. Proposition (pp. 360–361)',
      cells: [
        'Direction scolaire, conseil municipal, comité · Vouvoiement courtois, registre courant à soutenu.',
        'En-tête institutionnel + date, formule d’appel, constat du problème initial, solutions concrètes (financement, logistique, retombées), formule finale respectueuse + signature.',
        'Démontrez la **faisabilité** (budget, calendrier, bénéfices mutuels) pour convaincre le décideur.',
      ],
      ibExamTip: 'Modèle manuel : classe de Français B NS de Rome proposant un échange scolaire à Bruxelles.',
    },
    {
      criterion: '15A. Rapport (pp. 362–363)',
      cells: [
        'Supérieur, comité, association · Style objectif et impersonnel (*on constate, il ressort que*), courant à soutenu.',
        'En-tête (*À l’attention de / De la part de / Date / Objet*), intertitres clairs, exposé factuel des faits/chiffres, bilan et recommandations numérotées.',
        'Évitez le ton émotionnel ou polémique ; appuyez chaque recommandation sur une observation mesurée.',
      ],
      ibExamTip: 'Modèle manuel : *Camp à Cudrefin en Suisse* (Greenpeace / Fondation Cudrefin.02).',
    },
    {
      criterion: '16A. Tract (pp. 364–365)',
      cells: [
        'Citoyens dans la rue, étudiants · Courant percutant, vouvoiement ou *nous* mobilisateur.',
        'Titre choc en majuscules, phrases courtes, questions rhétoriques en série, solutions concrètes, appel urgent à manifester (date/heure/lieu) + coordonnées/réseaux sociaux.',
        'Un tract doit convaincre en **10 secondes de lecture** : rythme haché, anaphores et impératifs (*Agissons ! Venez nombreux !*).',
      ],
      ibExamTip: 'Modèle manuel : *NON À LA SÉLECTION PAR L’ARGENT* (droits d’inscription universitaires).',
    },
  ],
};

export const FR_V3_P1_STUDIO_CORE: FrenchTextTypeStudioSpec = {
  type: 'french_text_type_studio',
  id: 'fr-v3-p1-studio-core',
  title: 'Atelier Paper 1 : Formats institutionnels & publics (Ch. 6 — 1A, 13A, 6A, 15A)',
  caption:
    'Basculez entre les 4 formats phares de l’Épreuve 1 et comparez le registre **Soutenu** vs **Courant** sur chaque bloc structurel.',
  themeLabel: 'EXAM.1 · Paper 1 (Ch. 6)',
  textTypes: [
    {
      id: 'article-presse',
      nameFr: 'Article de presse (1A)',
      nameEn: 'Newspaper / School Press Article',
      register: 'Courant à soutenu (sans je si grand public)',
      audience: 'Lecteurs d’un quotidien régional ou du journal du lycée',
      purpose: 'Informer objectivement tout en analysant un fait de société',
      wordTarget: '250–400 mots (SL)',
      oralLinkPrompt:
        'Lien Oral individuel : « Comment ce titre et ce chapeau illustrent-ils la manière dont la presse francophone mobilise les jeunes autour d’un enjeu local ? »',
      markschemeTips: [
        'Titre informatif ou accrocheur + chapeau résumant qui/quoi/où/quand dès les 3 premières lignes.',
        'Intertitres courts structurant les causes, les témoignages et les solutions.',
        'Mention du journaliste et du média en fin d’article ; aucune formule épistolaire (« Cher lecteur » interdit).',
      ],
      sections: [
        {
          id: 'art-titre',
          roleLabel: 'Titre + Chapeau (Lead)',
          conventionNote:
            'Le titre doit piquer la curiosité sans être une phrase banale ; le chapeau répond aux **4W** (Qui, Quoi, Où, Quand) selon la fiche **1B (p. 335)**.',
          frenchFormal:
            '**Transition écologique : les lycéens transforment la cantine en laboratoire zéro déchet**\n*À l’initiative du comité vert de l’établissement, plus de cent élèves ont réduit de moitié le gaspillage alimentaire depuis septembre grâce au compostage et aux circuits courts.*',
          frenchSemiFormal:
            '**Cantine zéro déchet : les élèves prennent le relais !**\n*Depuis septembre, plus de cent lycéens de notre école trient leurs déchets organiques chaque midi pour réduire le gaspillage à la cafétéria.*',
        },
        {
          id: 'art-corps',
          roleLabel: 'Intertitre + Témoignage chiffré',
          conventionNote:
            'La fiche **1B** recommande d’intégrer **des statistiques et l’avis d’un témoin ou d’un expert** entre guillemets, reliés par des connecteurs (*En effet, Toutefois*).',
          frenchFormal:
            '**Des résultats mesurables dès le premier trimestre**\n« Auparavant, nous jetions près de trente kilos de pain par semaine », souligne la gestionnaire de l’établissement. En effet, bien que certains élèves aient d’abord hésité à trier leurs plateaux, l’installation de balances visibles a modifié les mentalités.',
          frenchSemiFormal:
            '**Moins de restes dans les poubelles**\n« Avant, on jetait trente kilos de pain chaque semaine », explique la responsable de la cantine. Au début, plusieurs camarades trouvaient le tri ennuyeux, mais voir le poids diminuer chaque vendredi a motivé tout le monde.',
        },
        {
          id: 'art-fin',
          roleLabel: 'Conclusion ouverte + Signature journalistique',
          conventionNote:
            'Terminez sur une perspective d’avenir et indiquez le nom du journaliste ou de la rubrique (*Par…, Rubrique Société*).',
          frenchFormal:
            '**Un modèle appelé à s’étendre**\nIl convient toutefois de pérenniser cet élan par des ateliers culinaires réguliers. Si cette démarche se généralisait aux autres écoles de la province, l’empreinte carbone scolaire diminuerait durablement.\n*Par Camille Arsenault, Rubrique Environnement*',
          frenchSemiFormal:
            '**Et pour la suite ?**\nReste maintenant à garder cette bonne habitude toute l’année, pourquoi pas grâce à des ateliers cuisine ! D’autres lycées du district songent déjà à copier l’idée.\n*Camille Arsenault, Journal des élèves*',
        },
      ],
    },
    {
      id: 'lettre-officielle',
      nameFr: 'Lettre officielle (13A)',
      nameEn: 'Formal Letter to Authority',
      register: 'Soutenu · Vouvoiement (vous) obligatoire',
      audience: 'Direction d’école, Mairie, Recteur, Employeur',
      purpose: 'Proposer une mesure, protester poliment ou formuler une requête formelle',
      wordTarget: '250–400 mots (SL)',
      oralLinkPrompt:
        'Lien Conceptual Understanding (Variation) : « Pourquoi le passage au vouvoiement et aux formules d’appel institutionnelles modifie-t-il la légitimité de votre demande ? »',
      markschemeTips: [
        'Bloc expéditeur + destinataire + lieu/date + ligne « Objet : … » en haut du document.',
        'Formule d’appel précise sans prénom (« Monsieur le Maire, » ou « Madame la Directrice, »).',
        'Formule de politesse finale complète reprenant EXACTEMENT la formule d’appel (« Je vous prie d’agréer, Madame la Directrice, … »).',
      ],
      sections: [
        {
          id: 'lo-entete',
          roleLabel: 'En-tête, Date, Objet & Appel',
          conventionNote:
            'Modèle **13A (p. 358, Commune de Breuillet)** : indiquez vos coordonnées, celles du destinataire, le lieu/date et un **Objet** synthétique sans verbe conjugué.',
          frenchFormal:
            'Clara Leblanc, Représentante de 11e année\nLycée CRHS — Comité Éco-Citoyen\n\nÀ l’attention de Madame la Directrice\nCharlottetown, le 14 novembre 2026\n\n**Objet : Demande de mise en place d’une station de compostage scolaire**\n\nMadame la Directrice,',
          frenchSemiFormal:
            'Clara Leblanc (11e année)\nÀ Madame la Directrice du lycée\nLe 14 novembre 2026\n\n**Objet : Proposition d’un bac à compost à la cafétéria**\n\nMadame la Directrice,',
        },
        {
          id: 'lo-corps',
          roleLabel: 'Constat & Argumentation au subjonctif',
          conventionNote:
            'Restez courtois et analytique (fiche **13B**) : exposez le constat factuel puis utilisez le subjonctif ou le conditionnel pour soumettre votre solution.',
          frenchFormal:
            'Nous constatons chaque midi que près de 40 % des déchets produits à la cafétéria sont constitués de matières organiques non valorisées. Or, il nous semble indispensable que notre établissement assume un rôle exemplaire en matière de développement durable. C’est pourquoi nous souhaiterions installer trois bacs de compostage près du potager pédagogique, dont l’entretien serait assuré par les bénévoles du programme CAS.',
          frenchSemiFormal:
            'Chaque midi, nous remarquons qu’une grande partie des déchets de la cafétéria pourraient être compostés au lieu de finir à la poubelle. Il faudrait donc que notre école agisse concrètement. Nous voudrions installer trois bacs près du jardin, et les élèves du groupe CAS pourraient s’en occuper chaque semaine.',
        },
        {
          id: 'lo-cloture',
          roleLabel: 'Formule de politesse soutenue + Signature',
          conventionNote:
            'Jamais de *« Cordialement »* ! Reprenez la formule officielle en accordant votre disponibilité.',
          frenchFormal:
            'Dans l’attente d’un entretien au cours duquel nous pourrons vous présenter notre calendrier budgétaire, je vous prie d’agréer, Madame la Directrice, l’expression de mes salutations distinguées.\n\n*Clara Leblanc*\n*Présidente du Comité Éco-Citoyen*',
          frenchSemiFormal:
            'En espérant pouvoir discuter de ce projet avec vous prochainement, veuillez agréer, Madame la Directrice, mes salutations respectueuses.\n\n*Clara Leblanc*',
        },
      ],
    },
    {
      id: 'discours-oratoire',
      nameFr: 'Discours (6A)',
      nameEn: 'Speech / Oral Address',
      register: 'Courant à soutenu · Oralité rythmée',
      audience: 'Assemblée d’élèves, cérémonie, conférence scolaire',
      purpose: 'Émouvoir, convaincre et mobiliser un auditoire présent physiquement',
      wordTarget: '250–400 mots (SL)',
      oralLinkPrompt:
        'Lien Ch. 6 (6A, Paul Jardin) : « Comment l’anecdote personnelle et la règle des trois répétitions transforment-elles un auditoire sceptique ? »',
      markschemeTips: [
        'Ouverture directe saluant le public (« Mesdames et Messieurs, chers camarades »).',
        'Au moins 3 procédés rhétoriques (question rhétorique, anaphore ternaire, exemple vécu, apostrophe).',
        'Clôture par appel à l’action concret + remerciement oral (« Merci de votre attention »).',
      ],
      sections: [
        {
          id: 'dis-accroche',
          roleLabel: 'Apostrophe + Accroche orale',
          conventionNote:
            'À l’inverse d’un essai, le discours interpelle immédiatement la salle présente (fiche **6B, p. 345**).',
          frenchFormal:
            'Mesdames, Messieurs, chers camarades,\nPermettez-moi d’abord de vous poser une question simple : combien d’entre vous ont réellement écouté un inconnu aujourd’hui sans céder aux préjugés ? Lorsque notre classe a accueilli des élèves venus de l’étranger l’an dernier, j’avoue que la crainte l’emportait parfois sur la curiosité.',
          frenchSemiFormal:
            'Bonjour à toutes et à tous, chers camarades !\nAvant de commencer, posez-vous une question honnête : quand avez-vous vraiment parlé à quelqu’un d’une autre culture cette semaine ? L’an dernier, quand de nouveaux élèves sont arrivés ici, beaucoup d’entre nous hésitaient à aller vers eux.',
        },
        {
          id: 'dis-anaphore',
          roleLabel: 'Règle des trois répétitions + Argumentation',
          conventionNote:
            'Inspirez-vous de Paul Jardin (*« Nous avons cuisiné ensemble, joué au foot ensemble, étudié ensemble »*, p. 344) pour créer un rythme mémorable.',
          frenchFormal:
            'Pourtant, il suffit d’un projet commun pour faire tomber les murs invisibles. Ensemble, nous avons débattu dans notre club de théâtre ; ensemble, nous avons organisé ce festival ; ensemble, nous avons découvert que la diversité ne menace pas notre identité : elle l’enrichit.',
          frenchSemiFormal:
            'Mais tout change dès qu’on partage un projet concret. On a répété ensemble sur scène, on a préparé ce festival ensemble, et on a compris ensemble que nos différences sont une vraie force.',
        },
        {
          id: 'dis-appel',
          roleLabel: 'Appel à l’action + Clôture orale',
          conventionNote:
            'Terminez par un impératif inclusif (*« Rejoignons… »*) suivi de la formule de remerciement orale.',
          frenchFormal:
            'Alors ne restons plus spectateurs de notre propre communauté ! Dès demain, franchissons le pas du dialogue et ouvrons nos portes aux initiatives interculturelles. Je vous remercie vivement de votre attention.',
          frenchSemiFormal:
            'Alors ne restez pas dans votre coin ! Venez dès demain vous inscrire à l’atelier d’accueil et partagez votre histoire. Merci beaucoup de m’avoir écouté !',
        },
      ],
    },
    {
      id: 'rapport-formel',
      nameFr: 'Rapport formel (15A)',
      nameEn: 'Formal Analytical Report',
      register: 'Soutenu / Impersonnel et objectif',
      audience: 'Comité de direction, association, conseil scolaire',
      purpose: 'Dresser un bilan factuel et formuler des recommandations précises',
      wordTarget: '250–400 mots (SL)',
      oralLinkPrompt:
        'Lien Ch. 6 (15A, Camp à Cudrefin, p. 362) : « Pourquoi le rapport exige-t-il des intertitres factuels et des statistiques plutôt que des exclamations personnelles ? »',
      markschemeTips: [
        'En-tête structuré : À l’attention de / De la part de / Date / Objet.',
        'Ton neutre et impersonnel (« On observe que… », « Il convient de noter… »).',
        'Sections nettes : I. Contexte et méthodologie → II. Constats chiffrés → III. Recommandations.',
      ],
      sections: [
        {
          id: 'rap-entete',
          roleLabel: 'En-tête administratif & Objet',
          conventionNote:
            'La fiche **15B (p. 363)** impose un en-tête complet identifiant le commanditaire, le rapporteur, la date et l’objet.',
          frenchFormal:
            '**À l’attention de :** Conseil d’administration du lycée\n**De la part de :** Commission des services aux élèves (11e année)\n**Date :** 22 janvier 2027\n**Objet : Bilan de la semaine sans téléphone portable et perspectives d’aménagement**',
          frenchSemiFormal:
            '**Destinataire :** Direction du lycée\n**Auteur :** Comité des élèves de 11e\n**Date :** 22 janvier 2027\n**Sujet : Résultats du défi « 5 jours sans portable en classe »**',
        },
        {
          id: 'rap-constat',
          roleLabel: 'Intertitre 1 — Constat objectif & chiffres',
          conventionNote:
            'Évitez les points d’exclamation et les jugements affectifs ; privilégiez les données observées et les comparaisons.',
          frenchFormal:
            '**1. Constats observés sur le terrain**\nMenée auprès de 180 élèves pendant cinq jours, l’enquête révèle une baisse de 34 % des distractions déclarées en cours. Par ailleurs, 72 % des participants estiment que les échanges en personne lors des pauses se sont intensifiés, bien que 18 % déplorent un accès plus lent aux emplois du temps numériques.',
          frenchSemiFormal:
            '**1. Ce que montre notre enquête**\nSur les 180 élèves qui ont participé pendant cinq jours, 72 % trouvent que les discussions entre amis à la récréation étaient plus riches. En revanche, 18 % ont eu du mal à consulter leur horaire sans téléphone.',
        },
        {
          id: 'rap-reco',
          roleLabel: 'Intertitre 2 — Recommandations pratiques',
          conventionNote:
            'Terminez par des propositions actionnables introduites par des infinitifs ou des tournures impersonnelles.',
          frenchFormal:
            '**2. Recommandations pour le prochain trimestre**\nAu vu de ces résultats, la commission recommande : (a) d’installer des pochettes collectives dans les salles de cours ; (b) d’afficher les changements d’horaire sur des bornes dans le hall ; et (c) de reconduire cette initiative durant la semaine du bien-être.',
          frenchSemiFormal:
            '**2. Nos trois propositions pour la suite**\nNous conseillons donc de : installer des pochettes de rangement en classe, afficher les horaires dans le couloir principal et refaire cette semaine sans écran au printemps.',
        },
      ],
    },
  ],
};

export const FR_V3_P1_ESSAY_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'fr-v3-p1-essay-worked',
  title: 'Atelier guidé Paper 1 : Construire une Proposition / Lettre officielle (30/30)',
  caption:
    'De la lecture de l’énoncé au contrôle qualité final (250–400 mots) : méthodologie exacte pour maximiser Critère A (12), Critère B (12) et Critère C (6).',
  sourceLabel: 'Épreuve 1 · Critères A, B & C',
  commandTerm: 'Rédiger',
  marks: 30,
  problemMarkdown:
    '**Sujet (Thème 4 : Organisation sociale — 4.3 Études et emploi) :**\n*Votre lycée réfléchit à lancer un programme de mentorat entre les élèves de 12e année (IB2) et les nouveaux arrivants francophones ou allophones de 10e année afin de faciliter leur intégration scolaire et sociale. Rédigez un texte dans lequel vous présentez ce projet, détaillez son organisation concrète et montrez ses bénéfices pour toute l’école.*\n\n**Choix proposés :** **Proposition** · *Blogue* · *Journal intime*\n**Longueur requise :** 250–400 mots.',
  givenData: [
    { label: 'Destinataire implicite', value: 'Direction du lycée / Comité pédagogique' },
    { label: 'Format optimal', value: 'Proposition (14A, pp. 360–361)' },
    { label: 'Registre imposé', value: 'Soutenu + Vouvoiement strict' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Sélectionner le type de texte grâce aux 5 concepts IB (Critère C : 6 pts)',
      workingMarkdown:
        '- *Blogue* : inadapté (grand public en ligne, pas de pouvoir décisionnel).\n- *Journal intime* : hors sujet (privé, aucun destinataire institutionnel).\n- **Proposition (14A)** : **100 % optimal** — vise à convaincre la direction d’approuver un projet concret avec modalités et bénéfices.',
      markCode: 'Critère C (2/6)',
      rationale:
        'Un choix de format incohérent plafonne immédiatement le Critère C à 2–3/6 même si le français est correct.',
    },
    {
      stepNumber: 2,
      title: 'Structurer la mise en page institutionnelle (Critère C : 4/6)',
      workingMarkdown:
        'Rédigez en tête :\n- Expéditeur + Destinataire (*Madame la Directrice,*)\n- Lieu et date (*Charlottetown, le 18 mars 2027*)\n- **Objet : Proposition d’un programme de parrainage intergénérationnel et linguistique**\n- Clôture : *« Dans l’attente d’une réponse favorable, je vous prie d’agréer, Madame la Directrice, l’expression de mes salutations distinguées. »*',
      markCode: 'Critère C (4/6)',
      rationale:
        'La fiche 14B (p. 361) vérifie : date, formule d’appel, vouvoiement constant, paragraphes logiques, formule finale et signature.',
    },
    {
      stepNumber: 3,
      title: 'Développer le Message (Critère B : 12 pts) + Langue C1 (Critère A : 12 pts)',
      workingMarkdown:
        '**Paragraphe 1 (Constat + But) :** *« Bien que notre établissement accueille chaque année des élèves issus d’horizons divers, leur adaptation linguistique demeure parfois difficile. Il est donc essentiel que nous instaurions un système de tutorat structuré. »*\n**Paragraphe 2 (Organisation concrète) :** Binômes 12e/10e se réunissant deux midis par semaine ; entraide aux devoirs, visites culturelles (CAS) et lexique de classe.\n**Paragraphe 3 (Retombées mutuelles) :** Pour les 10e, confiance accrue ; pour les 12e, validation des acquis CAS et leadership citoyen.',
      markCode: 'A (12) + B (12)',
      rationale:
        'Le Critère B exige de couvrir **tous les volets** de la consigne (présentation + organisation concrète + bénéfices pour TOUTE l’école). Le Critère A valorise *Bien que + subjonctif*, *afin que*, le conditionnel (*permettrait*) et les connecteurs (*En premier lieu, Par ailleurs, En somme*).',
    },
    {
      stepNumber: 4,
      title: 'Relecture finale & Comptage rigoureux (250–400 mots)',
      workingMarkdown:
        'Vérifiez trois points avant de rendre votre copie :\n1. **Compteur de mots :** ~310–350 mots (zone idéale : sous 250 mots, le message reste sous-développé ; au-dessus de 400 mots, les répétitions alourdissent).\n2. **Accords :** participes passés avec *avoir* et accords sujet-verbe.\n3. **Registre uniforme :** zéro *« tu »* glissé par inadvertance, zéro familier (*« super cool »*, *« pas mal de »*).',
      markCode: 'Audit 30/30',
      rationale:
        'Trois minutes d’audit grammatical ciblé permettent souvent de gagner 2 à 3 points décisifs en Critère A.',
    },
  ],
  finalAnswerMarkdown:
    '**Proposition complète (~335 mots)** avec en-tête officiel, objet précis, constante *vous*, trois paragraphes argumentés (constat → logistique → bénéfices bilatéraux), connecteurs variés (*Bien que, En premier lieu, Par conséquent*) et formule de politesse soutenue.',
  commonTrapMarkdown:
    'Piège n° 1 : oublier de parler des bénéfices pour **toute l’école** (ex. valorisation des élèves de 12e en CAS et climat scolaire apaisé), ce qui laisse le 3e volet de la consigne incomplet et limite Critère B à 7–8/12.',
};

// ============================================================================
// GUIDE 3 DIAGRAMS — T1.1 (Thème 1 : Identités — Ch. 1)
// ============================================================================

export const FR_V3_T1_STUDIO: FrenchTextTypeStudioSpec = {
  type: 'french_text_type_studio',
  id: 'fr-v3-t1-studio',
  title: 'Studio Thème 1 (Identités) : Courrier des lecteurs (12A), Guide (9A) & Blog (2A)',
  caption:
    'Trois formats essentiels du Chapitre 1 (*Le monde en français*, pp. 18, 40, 59) appliqués aux sous-thèmes identité, clichés, vie alternative et santé.',
  themeLabel: 'Thème 1 · Identités (T1.1–T1.5)',
  textTypes: [
    {
      id: 'courrier-lecteurs',
      nameFr: 'Courrier des lecteurs (12A)',
      nameEn: 'Letter to the Editor',
      register: 'Courant à soutenu · Vouvoiement poli mais ferme',
      audience: 'Rédacteur en chef & lectorat d’un journal/magazine',
      purpose: 'Réagir à un article récent et réfuter des clichés (ex. #Stopauxclichés)',
      wordTarget: '250–400 mots (SL)',
      oralLinkPrompt:
        'Lien Unité 1.1 (#Stopauxclichés, p. 16) : « Comment les jeunes francophones réfutent-ils l’étiquette d’une génération apathique ou obsédée par les écrans ? »',
      markschemeTips: [
        'Indiquer la rubrique (« Courrier des lecteurs ») et citer la date/le titre de l’article visé dès l’ouverture.',
        'Réfuter les stéréotypes par des exemples concrets et des faits, sans insulter la rédaction.',
        'Conclure par une solution constructive, une formule de politesse, le nom et la ville.',
      ],
      sections: [
        {
          id: 'cl-ref',
          roleLabel: 'Rubrique & Référence à l’article contesté',
          conventionNote:
            'Modèle **12A (p. 356, Jacques Gauthier)** & **Activité 10 (p. 18)** : nommez le titre de l’article et exprimez votre désaccord avec nuance.',
          frenchFormal:
            '**Rubrique : Courrier des lecteurs**\nMonsieur le Rédacteur en chef,\nJ’ai lu avec attention votre article intitulé « Une jeunesse prisonnière de ses écrans », paru le 12 octobre dernier. Toutefois, je suis consterné par les généralisations réductrices qu’il véhicule sur ma génération.',
          frenchSemiFormal:
            '**Courrier des lecteurs**\nÀ la rédaction,\nVotre article du 12 octobre sur « les jeunes accros aux écrans » m’a beaucoup surpris. Je trouve injuste de mettre tous les lycéens dans le même panier sans écouter leur avis.',
        },
        {
          id: 'cl-refut',
          roleLabel: 'Réfutation argumentée & exemples vécus',
          conventionNote:
            'Opposez des preuves concrètes aux clichés (engagement associatif, lecture numérique, bilinguisme) grâce aux connecteurs *Certes… en revanche*.',
          frenchFormal:
            'Certes, les réseaux numériques occupent une place réelle dans notre quotidien. En revanche, affirmer que les adolescents refusent tout engagement civique est inexact : dans mon lycée, plus de soixante élèves consacrent chaque semaine leurs heures libres au tutorat et aux collectes solidaires.',
          frenchSemiFormal:
            'Bien sûr, nous utilisons souvent nos portables, mais cela ne veut pas dire que nous sommes passifs ! Dans mon école, des dizaines d’élèves font du bénévolat chaque semaine pour aider les plus jeunes ou nettoyer le quartier.',
        },
        {
          id: 'cl-fin',
          roleLabel: 'Solution & Clôture épistolaire',
          conventionNote:
            'Fiche **12B** : proposez une ouverture constructive (donner la parole aux jeunes) avant la formule finale et votre ville.',
          frenchFormal:
            'Il conviendrait dès lors que votre rédaction donne la parole aux principaux concernés plutôt que de relayer des idées reçues. En espérant voir ce débat s’enrichir dans vos prochaines colonnes, je vous prie d’agréer, Monsieur, l’expression de mes sentiments distingués.\n*Lucas Morel (17 ans), Montréal*',
          frenchSemiFormal:
            'Pourquoi ne pas interviewer de vrais lycéens dans votre prochain numéro pour montrer la réalité ? Dans l’attente de vous lire, veuillez recevoir mes salutations respectueuses.\n*Lucas Morel, 17 ans, Montréal*',
        },
      ],
    },
    {
      id: 'guide-recommandations',
      nameFr: 'Guide de recommandations (9A)',
      nameEn: 'Advice / Survival Guide',
      register: 'Courant, encourageant et structuré',
      audience: 'Élèves de l’IB ou jeunes adoptant un mode de vie sain/alternatif',
      purpose: 'Conseiller efficacement avec des structures variées (impératif, subjonctif, devoir)',
      wordTarget: '250–400 mots (SL)',
      oralLinkPrompt:
        'Lien Unité 1.3 (David Servan-Schreiber, p. 48) : « Quelles habitudes concrètes préservent l’équilibre mental et physique malgré la pression scolaire ? »',
      markschemeTips: [
        'Identifier l’auteur/organisme du guide et son objectif dès l’introduction (fiche 9B, p. 351).',
        'Diviser en rubriques claires avec intertitres thématiques ou liste numérotée.',
        'Varier les modes injonctifs : impératif, subjonctif après « Il est essentiel que », et « Vous devriez ».',
      ],
      sections: [
        {
          id: 'gr-intro',
          roleLabel: 'Titre + Objectif & Identité de l’auteur',
          conventionNote:
            'Modèle **9A (*Bien manger, loin de maman*, p. 350)** : accrochez par une question réaliste et présentez l’émetteur du guide.',
          frenchFormal:
            '**Guide d’équilibre et de vitalité pour les élèves de l’IB**\n*Rédigé par le Comité Bien-Être du lycée*\nComment concilier les exigences du diplôme de l’IB, les cours et une vie saine sans céder à l’épuisement ? Voici cinq recommandations pratiques pour préserver votre santé physique et mentale toute l’année.',
          frenchSemiFormal:
            '**Survivre à l’année IB sans perdre la forme !**\n*Par le Club Santé des élèves*\nEntre les examens et les devoirs, on oublie vite de prendre soin de soi. Voici notre guide de survie avec cinq conseils faciles à appliquer dès cette semaine.',
        },
        {
          id: 'gr-corps',
          roleLabel: 'Sections pratiques (Subjonctif & Impératif)',
          conventionNote:
            'Utilisez les expressions de l’Unité 1.3 (*Il est indispensable que + subjonctif*, *En marchant 30 minutes* — gérondif).',
          frenchFormal:
            '**1. Nutrition et vigilance contre la malbouffe**\nIl est essentiel que vous privilégiiez les aliments peu transformés plutôt que les boissons gazeuses sucrées. En préparant vos collations à l’avance, vous éviterez la fatigue de l’après-midi.\n**2. Mouvement quotidien et sommeil**\nAccordez-vous huit heures de repos et marchez au moins trente minutes par jour afin que votre cerveau assimile durablement les notions étudiées.',
          frenchSemiFormal:
            '**1. Mangez malin à la pause**\nÉvitez les sodas et les fritures tous les midis : glissez plutôt un fruit et une bouteille d’eau dans votre sac !\n**2. Bougez et dormez assez**\nIl faut que vous dormiez au moins huit heures par nuit et que vous marchiez trente minutes chaque jour pour évacuer le stress.',
        },
        {
          id: 'gr-cloture',
          roleLabel: 'Contact & Encouragement final',
          conventionNote:
            'Concluez par un mot d’encouragement et les coordonnées de ressource (fiche **9B**).',
          frenchFormal:
            'N’hésitez jamais à solliciter deux camarades ou un conseiller en période de surcharge. Pour consulter nos ateliers de relaxation hebdomadaires, rendez-vous sur le portail *bienetre-ib.org*.',
          frenchSemiFormal:
            'Courage à toutes et à tous ! Pour rejoindre nos séances de sport et de détente chaque jeudi, écrivez-nous à *club-sante@lycee.ca*.',
        },
      ],
    },
    {
      id: 'blog-identite',
      nameFr: 'Blog personnel (2A)',
      nameEn: 'Personal / Cultural Blog Entry',
      register: '1re personne (je) · Courant ou familier expressif',
      audience: 'Jeunes internautes francophones',
      purpose: 'Partager une réflexion vécue sur la marginalité, la sobriété ou le bilinguisme',
      wordTarget: '250–400 mots (SL)',
      oralLinkPrompt:
        'Lien Unité 1.2 (Sarah Gysler & Tiny House, pp. 38–42) : « Quitter la société de consommation relève-t-il de la marginalité ou d’une quête de liberté authentique ? »',
      markschemeTips: [
        'Nom du blog, titre du billet, date/heure et signature/pseudo.',
        'Récit personnel vivant au passé/présent avec ponctuation expressive (?, !, …).',
        'Section finale invitant explicitement les internautes à laisser un commentaire.',
      ],
      sections: [
        {
          id: 'bl-header',
          roleLabel: 'Bandeau Blog + Date + Accroche',
          conventionNote:
            'Modèle **2A (p. 336)** : indiquez nom du site, titre du billet, date/heure et interpellez d’emblée les lecteurs.',
          frenchFormal:
            '**Blog : Vivre Autrement | Billet du 19 novembre · 18 h 40**\n**Trois mois sans acheter de vêtements neufs : ce que j’ai découvert sur moi**\nCeux qui suivent ce blog savent combien il est difficile de résister aux sollicitations publicitaires qui façonnent notre identité quotidienne.',
          frenchSemiFormal:
            '**Le Carnet de Léa — 19 nov. à 18 h 40**\n**90 jours sans shopping : mission impossible ?**\nVous le savez sûrement, quand on ouvre Instagram, on a l’impression qu’il faut acheter de nouvelles marques pour exister… Eh bien, j’ai tenté l’expérience inverse !',
        },
        {
          id: 'bl-corps',
          roleLabel: 'Récit personnel & prise de conscience',
          conventionNote:
            'Employez le **gérondif** (*en troquant mes pulls*) et des connecteurs simples (*Tout d’abord, Cependant, En fin de compte*).',
          frenchFormal:
            'Tout d’abord, je craignais de paraître marginale aux yeux de mes camarades. Cependant, en réparant mes anciens vêtements et en fréquentant des friperies locales, j’ai compris que notre identité ne se résume nullement aux étiquettes que nous portons.',
          frenchSemiFormal:
            'Au début, j’avais un peu la trouille qu’on me trouve ringarde. Pourtant, en échangeant des fringues avec mes potes, j’ai réalisé que je me sentais beaucoup plus libre !',
        },
        {
          id: 'bl-comm',
          roleLabel: 'Appel aux commentaires (Obligatoire)',
          conventionNote:
            'C’est le marqueur distinctif entre le **Blog** et le **Journal intime** : posez deux questions directes aux lecteurs.',
          frenchFormal:
            '**À vous la parole !**\nEt vous, seriez-vous prêts à relever ce défi pendant un trimestre ? Qu’est-ce qui exprime le mieux votre personnalité au quotidien ? Laissez votre avis dans les commentaires ci-dessous !',
          frenchSemiFormal:
            '**Et vous alors ?**\nVous tiendriez trois mois sans rien acheter de neuf ? Dites-moi tout en commentaire !',
        },
      ],
    },
  ],
};

export const FR_V3_T1_GRAMMAR_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'fr-v3-t1-grammar-matrix',
  title: 'Boîte à outils grammaticale du Thème 1 (Identités · Unité 1.1–1.4)',
  caption:
    'Synthèse exacte des 5 points de grammaire en contexte du Chapitre 1 (*Le monde en français*) pour briller au Critère A.',
  columns: [
    'Point grammatical (Ch. 1)',
    'Règle clé & Structure',
    'Exemple authentique (Thème 1)',
    'Erreur fréquente à éviter',
  ],
  rows: [
    {
      criterion: 'Adjectifs & Pronoms possessifs / démonstratifs (1.1)',
      cells: [
        '**Possessifs :** *mon/ma/mes* → *le mien, la mienne, les siens*.\n**Démonstratifs :** *ce/cet/cette/ces* → *celui/celle/ceux/celles (-ci/-là)*.',
        '« Il respecte **sa** culture, mais je préfère revendiquer **la mienne** ; **ceux** qui jugent sur les apparences ignorent **cette** richesse. »',
        'Oublier d’accorder *mon* devant un nom féminin commençant par une voyelle (*mon identité*, pas *ma identité*) ou confondre *celui* (pronom) et *ce* (déterminant).',
      ],
      ibExamTip: 'Utilisez *celui/celle + de* ou *celui qui* pour éviter les répétitions lourdes dans votre essai.',
    },
    {
      criterion: 'Verbes en -er à particularités & Gérondif (1.2)',
      cells: [
        '**-cer / -ger :** *nous commençons, nous mangeons*. **-eler/-eter / e_er :** *j’appelle, j’achète, je préfère*.\n**Gérondif :** *en + participe présent* (-ant) exprime la simultanéité ou le moyen.',
        '« **En choisissant** de vivre autrement, nous **mangeons** des produits locaux et nous **rejetons** la surconsommation. »',
        'Oublier la cédille (*commencons* ✗) ou le *e* (*mangons* ✗), ou utiliser le gérondif lorsque les deux verbes ont des sujets différents.',
      ],
      ibExamTip: 'Le gérondif remplace avantageusement *« quand je + verbe »* ou *« par + nom »* pour condenser votre style.',
    },
    {
      criterion: 'Subjonctif de conseil & Passé simple réceptif (1.3)',
      cells: [
        '**Conseil :** *Il faut que / Il est essentiel que / Il vaudrait mieux que + subjonctif*.\n**Passé simple (lecture) :** *il sentit, je devins, ils mangèrent, elles furent*.',
        '« **Il est indispensable que** vous **fassiez** du sport et que vous **preniez** soin de votre santé mentale. »',
        'Oublier les radicaux irréguliers du subjonctif (*être → soit, avoir → ait, faire → fasse, aller → aille, pouvoir → puisse, savoir → sache*).',
      ],
      ibExamTip: 'En Paper 1 SL, vous n’avez pas à produire le passé simple (réservé aux textes littéraires en lecture), mais maîtrisez le subjonctif après les conseils.',
    },
    {
      criterion: 'Expression du but (1.4)',
      cells: [
        '**Même sujet :** *pour / afin de / dans le but de + infinitif*.\n**Sujets différents :** *pour que / afin que / de peur que (ne) + subjonctif*.',
        '« L’Unesco agit **pour préserver** les dialectes, **afin que** les nouvelles générations **puissent** les transmettre. »',
        'Écrire *« afin de + sujet + verbe »* ou employer l’indicatif après *afin que* / *pour que* !',
      ],
      ibExamTip: 'Glissez au moins un *« afin que + subjonctif »* dans chaque texte Paper 1 pour démontrer une syntaxe complexe (Critère A 10–12/12).',
    },
    {
      criterion: 'Registres : Verlan / Familier vs Courant / Soutenu (1.4)',
      cells: [
        '**Familier/Verlan :** *ouf (fou), relou (lourd), boloss, pote, meuf, j’en ai marre*.\n**Courant/Soutenu :** *extravagant, pénible, camarade, je suis excédé(e)*.',
        '« Ces préjugés sont vraiment **relous** » (Blog ado) → « Ces stéréotypes s’avèrent **profondément préjudiciables** » (Dissertation/Lettre officielle).',
        'Mélanger *« j’en ai ras-le-bol »* ou *« trucs »* à l’intérieur d’une Lettre officielle ou d’un Rapport.',
      ],
      ibExamTip: 'Savoir passer d’un registre à l’autre prouve directement la maîtrise du concept IB de **Variation**.',
    },
  ],
};

// ============================================================================
// GUIDE 4 DIAGRAMS — T2.1 (Thème 2 : Expériences — Ch. 2)
// ============================================================================

export const FR_V3_T2_STUDIO: FrenchTextTypeStudioSpec = {
  type: 'french_text_type_studio',
  id: 'fr-v3-t2-studio',
  title: 'Studio Thème 2 (Expériences) : Journal intime (11A), Courriel (4A) & Entretien (10A)',
  caption:
    'Modèles interactifs des formats narratifs et épistolaires du Chapitre 2 (*Le monde en français*, pp. 84, 127, 135) : voyages, rites de passage et migrations.',
  themeLabel: 'Thème 2 · Expériences (T2.1–T2.6)',
  textTypes: [
    {
      id: 'journal-intime',
      nameFr: 'Journal intime (11A)',
      nameEn: 'Personal Diary Entry',
      register: '1re personne (je) · Intime, tutoiement du journal',
      audience: 'Soi-même exclusivement (confidences émotionnelles)',
      purpose: 'Raconter une expérience marquante (voyage, rite de passage) et analyser son impact intérieur',
      wordTarget: '250–400 mots (SL)',
      oralLinkPrompt:
        'Lien Unité 2.1 (Chantier à Tougan, p. 89) : « Comment un dépaysement culturel bouleverse-t-il les repères d’un jeune ? »',
      markschemeTips: [
        'Indiquer le lieu et la date en haut, puis une formule d’appel intime (« Cher journal, »).',
        'Alterner passé composé (événements), imparfait (cadre/émotions) et plus-que-parfait (antériorité).',
        'Terminer par une réflexion sur l’avenir et une clôture personnelle — aucun appel aux lecteurs !',
      ],
      sections: [
        {
          id: 'ji-date',
          roleLabel: 'Date, Lieu & Formule d’appel intime',
          conventionNote:
            'Fiche **11B (p. 355)** : datez l’entrée et adressez-vous directement à votre journal en le tutoyant.',
          frenchFormal:
            '**Tougan (Burkina Faso), vendredi 18 juillet — 22 h 15**\nCher journal,\nJe t’écris ce soir à la lueur d’une petite lampe alors que le village s’endort enfin. Jamais je n’aurais cru qu’un simple séjour solidaire bouleverserait à ce point ma façon de voir le monde.',
          frenchSemiFormal:
            '**Vendredi 18 juillet, soir — Tougan**\nMon cher journal,\nTu ne devineras jamais ce que j’ai vécu aujourd’hui ! Je suis complètement épuisé, mais j’ai encore plein d’images dans la tête et il faut que je te raconte tout avant de dormir.',
        },
        {
          id: 'ji-recit',
          roleLabel: 'Narration au passé + Émotions intérieures',
          conventionNote:
            'Combinez **imparfait** (décor), **passé composé** (actions) et **plus-que-parfait** (*j’avais toujours cru que…*).',
          frenchFormal:
            'Ce matin, la chaleur écrasante pesait déjà sur le chantier où nous réparions le toit de la bibliothèque. Avant de partir, je redoutais de ne pas m’adapter, car j’avais toujours vécu dans un confort matériel constant. Pourtant, lorsque Gilbert m’a tendu sa gourde d’eau fraîche en souriant, toute mon appréhension s’est dissipée.',
          frenchSemiFormal:
            'Il faisait presque 40 degrés pendant qu’on rénovait l’école avec les jeunes d’ici. Avant mon départ, j’avais vraiment eu peur de galérer sans wifi ni climatisation. Mais quand Gilbert a partagé son repas avec moi, j’ai compris l’essentiel.',
        },
        {
          id: 'ji-reflexion',
          roleLabel: 'Bilan intérieur & Clôture personnelle',
          conventionNote:
            'Répondez à la question directrice CRHS (*Comment le passé construit-il notre avenir ?*) puis prenez congé du journal.',
          frenchFormal:
            'À vrai dire, cette épreuve m’a appris l’humilité : de retour chez moi, je ne me plaindrai plus jamais de petits désagréments. Il est tard désormais ; demain, de nouvelles rencontres nous attendent.\n*À demain, chère confidente.*',
          frenchSemiFormal:
            'Franchement, je rentre changé à jamais. Comment ai-je pu râler pour des bêtises avant ce voyage ? Bon, je file me coucher, mes yeux se ferment tout seuls…\n*À demain !*',
        },
      ],
    },
    {
      id: 'courriel-culturel',
      nameFr: 'Courriel à un(e) proche (4A)',
      nameEn: 'Personal Email (Culture Shock / Visa)',
      register: 'Familier / Courant chaleureux · Tutoiement (tu)',
      audience: 'Ami(e) ou compatriote francophone installé(e) à l’étranger',
      purpose: 'Donner des nouvelles, raconter son évolution ou demander conseil',
      wordTarget: '250–400 mots (SL)',
      oralLinkPrompt:
        'Lien Unité 2.3 (Kuria, p. 127) & Unité 2.4 (p. 135) : « Comment passe-t-on de l’incompréhension culturelle à une ouverture authentique ? »',
      markschemeTips: [
        'En-tête électronique réaliste : De / À / Objet précis et naturel.',
        'Remercier ou faire référence au dernier message dès l’introduction (fiche 4B, p. 341).',
        'Expressions d’émotion vivantes (exclamations, questions directes, demande de réponse) + signature par prénom.',
      ],
      sections: [
        {
          id: 'ce-head',
          roleLabel: 'En-tête Courriel + Accueil chaleureux',
          conventionNote:
            'Modèle **4A (p. 340)** & **Agnès à Isabelle (p. 127)** : précisez l’objet et réagissez au message précédent.',
          frenchFormal:
            '**De :** amadou.diallo@courriel.sn\n**À :** mariama.seck@universite.qc.ca\n**Objet :** Préparation de mon dossier d’études à Montréal !\n\nChère Mariama,\nJe te remercie chaleureusement pour ton dernier courriel qui m’a redonné confiance au milieu de toutes ces démarches administratives.',
          frenchSemiFormal:
            '**De :** amadou.diallo@courriel.sn\n**À :** mariama.seck@universite.qc.ca\n**Objet :** Mon visa pour le Québec — j’y suis presque !\n\nSalut Mariama !\nMerci mille fois pour ton message de la semaine dernière ! Désolé de te répondre seulement maintenant, mais je croule sous les formulaires pour l’ambassade !',
        },
        {
          id: 'ce-dev',
          roleLabel: 'Récit des motivations & défis (Relatifs)',
          conventionNote:
            'Intégrez des **pronoms relatifs simples** (*où, dont, que*) et des **connecteurs temporels** (*dès que, depuis que, avant de*).',
          frenchFormal:
            'Depuis que j’ai obtenu mon baccalauréat, je rêve d’intégrer l’université que tu m’as recommandée et dont la réputation en génie civil est excellente. Certes, quitter Dakar où vivent tous mes proches me serre déjà le cœur, mais je sais que cette mobilité élargira mes horizons professionnels.',
          frenchSemiFormal:
            'Depuis que j’ai passé mon bac, je ne pense qu’à cette fac dont tu m’as tant parlé ! Bien sûr, laisser ma famille ici me fait un peu peur, mais je suis sûr que cette aventure va me faire grandir.',
        },
        {
          id: 'ce-end',
          roleLabel: 'Questions directes & Formule amicale',
          conventionNote:
            'Fiche **4B** : concluez en demandant explicitement une réponse ou des nouvelles, puis signez de votre seul prénom.',
          frenchFormal:
            'Dis-moi, comment as-tu surmonté ton premier hiver québécois ? Dès que mon visa sera validé, je te communiquerai la date de mon arrivée afin que nous puissions nous retrouver.\n*Bien amicalement,*\n*Amadou*',
          frenchSemiFormal:
            'Dis-moi vite quel manteau acheter pour survivre au froid québécois ! Envoie-moi un message dès que tu as cinq minutes !\n*À très bientôt,*\n*Amadou*',
        },
      ],
    },
    {
      id: 'entretien-temoignage',
      nameFr: 'Entretien / Interview (10A)',
      nameEn: 'Printed Interview',
      register: 'Courant à soutenu · Vouvoiement du journaliste',
      audience: 'Lecteurs d’une revue culturelle ou scolaire',
      purpose: 'Recueillir le témoignage d’une personne marquée par la mémoire ou la migration',
      wordTarget: '250–400 mots (SL)',
      oralLinkPrompt:
        'Lien Unité 2.2 (Simone Veil, p. 108) & Unité 2.4 (Omar Ba, p. 131) : « Pourquoi le témoignage individuel rend-il l’Histoire ou l’exil plus humains que les statistiques ? »',
      markschemeTips: [
        'Titre accrocheur + chapeau de présentation (âge, parcours, motif de l’entretien) + « Propos recueillis par… ».',
        'Format questions-réponses net avec initiales ou prénoms en gras à la ligne.',
        'Questions variées par inversion (« Qu’avez-vous ressenti… ? ») et réponses substantielles au passé.',
      ],
      sections: [
        {
          id: 'int-chap',
          roleLabel: 'Titre + Chapeau de présentation',
          conventionNote:
            'Modèle **10A (*Teddy Riner*, p. 352)** : présentez brièvement l’invité avant la première question.',
          frenchFormal:
            '**« Transmettre notre mémoire pour bâtir demain »**\n*Propos recueillis par Nadia Benali · Revue Passages*\nAncien enseignant à Saint-Louis et aujourd’hui bénévole à Montréal, Moussa Ndiaye revient sur son parcours d’intégration et le pouvoir des récits familiaux.',
          frenchSemiFormal:
            '**Rencontre avec Moussa Ndiaye : entre deux continents**\n*Interview réalisée par Nadia Benali*\nParti du Sénégal à 22 ans pour s’installer au Canada, Moussa Ndiaye anime aujourd’hui des ateliers de lecture pour jeunes nouveaux arrivants.',
        },
        {
          id: 'int-qr1',
          roleLabel: 'Question par inversion + Récit au passé',
          conventionNote:
            'Utilisez l’interrogation soutenue par **inversion** (*Avez-vous gardé… ?*) et le **vouvoiement** strict (fiche **10B, p. 353**).',
          frenchFormal:
            '**Journaliste :** Quel objet avez-vous tenu à emporter lorsque vous avez quitté votre ville natale ?\n**Moussa Ndiaye :** J’ai glissé dans ma valise un vieux carnet où mon grand-père avait noté nos contes familiaux. Lorsque le déracinement me pesait durant mes premiers mois, le relire me rappelait d’où je venais.',
          frenchSemiFormal:
            '**Nadia Benali :** Qu’est-ce que vous avez mis en premier dans votre valise avant de partir ?\n**Moussa Ndiaye :** Un petit cahier rempli d’histoires que mon grand-père m’avait écrites ! Au début, quand je me sentais seul ici, ce cahier me redonnait du courage.',
        },
        {
          id: 'int-qr2',
          roleLabel: 'Question finale d’ouverture & Conclusion',
          conventionNote:
            'Clôturez par une question sur l’avenir et une phrase de conclusion ou de remerciement.',
          frenchFormal:
            '**J :** Quel message souhaiteriez-vous adresser aux jeunes confrontés aujourd’hui à l’exil ?\n**MN :** Je leur dirais qu’apprendre la langue du pays d’accueil ne signifie jamais renier ses racines. C’est en reliant nos deux histoires que nous avançons. Merci de m’avoir donné la parole.',
          frenchSemiFormal:
            '**NB :** Un dernier conseil pour les jeunes qui viennent d’arriver ?\n**MN :** N’ayez pas honte de votre accent : gardez vos traditions tout en créant des liens autour de vous ! Merci pour cet échange.',
        },
      ],
    },
  ],
};

export const FR_V3_T2_PASSE_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'fr-v3-t2-passe-worked',
  title: 'Maîtrise narrative du Thème 2 : Passé composé, Imparfait, Plus-que-parfait & Relatifs',
  caption:
    'Transformation pas à pas d’un brouillon plat (niveau B1) en un paragraphe narratif Band 7 pour Paper 1 (Journal intime / Blog / Article vécu).',
  sourceLabel: 'Unité 2.1–2.4 · Critère A Langue',
  commandTerm: 'Analyser',
  marks: 8,
  problemMarkdown:
    '**Brouillon initial à améliorer (niveau faible 4/12 en Critère A) :**\n> *« L’été dernier, j’ai été au Sénégal. Il a fait chaud. J’ai rencontré une famille. La famille m’a accueilli. J’ai visité un village. Avant, j’ai vu des photos du village. J’ai appris beaucoup de choses là-bas et je n’oublierai pas ces choses. »*\n\n**Consigne :** Réécrivez et analysez ce récit en **4 étapes** en appliquant les règles grammaticales du Chapitre 2 (*temps du passé, pronoms relatifs simples, pronoms compléments*).',
  givenData: [
    { label: 'Imparfait', value: 'Décor, météo, état d’esprit, habitude passée' },
    { label: 'Passé composé', value: 'Action ponctuelle achevée qui fait avancer le récit' },
    { label: 'Plus-que-parfait', value: 'Action antérieure à un autre fait passé' },
    { label: 'Relatifs & Pronoms', value: 'qui / que / dont / où + y / en / les' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Distinguer décor/climat (Imparfait) et événement déclencheur (Passé composé)',
      workingMarkdown:
        '« J’ai été au Sénégal » et « Il a fait chaud » confondent mouvement et description.\n**Correction :** *« L’été dernier, **je suis parti(e)** au Sénégal dans le cadre d’un chantier solidaire. À mon arrivée, il **faisait** une chaleur accablante et les rues **bourdonnaient** de vie. »*',
      markCode: 'T1 (2 pts)',
      rationale:
        '*Partir* = action ponctuelle achevée (passé composé avec *être* + accord) ; *faire chaud / bourdonner* = toile de fond descriptive (imparfait).',
    },
    {
      stepNumber: 2,
      title: 'Marquer l’antériorité chronologique avec le Plus-que-parfait',
      workingMarkdown:
        '« Avant, j’ai vu des photos du village » manque de hiérarchie temporelle.\n**Correction :** *« J’ai découvert un village côtier **dont** j’**avais admiré** les paysages sur des photographies quelques mois plus tôt. »*',
      markCode: 'T2 (2 pts)',
      rationale:
        'Admirer les photos précède la découverte sur place : le plus-que-parfait (*avais admiré*) clarifie immédiatement la chronologie.',
    },
    {
      stepNumber: 3,
      title: 'Éliminer les répétitions grâce aux pronoms relatifs simples (qui, que, où, dont)',
      workingMarkdown:
        'Fusionner « J’ai rencontré une famille. La famille m’a accueilli » et « J’ai visité un village » :\n**Correction :** *« J’y ai rencontré une famille chaleureuse **qui** m’a accueilli à bras ouverts dans une maison **où** régnait la convivialité. »*',
      markCode: 'R1 (2 pts)',
      rationale:
        '*qui* remplace le sujet (*la famille*) ; *où* remplace le complément de lieu (*dans cette maison*) ; *dont* remplace *de + nom* (*les paysages du village*).',
    },
    {
      stepNumber: 4,
      title: 'Fluidifier par les pronoms personnels compléments (y, en, les)',
      workingMarkdown:
        'Remplacer *« là-bas »* par **« y »** et *« ces choses »* par **« les »** :\n**Correction :** *« J’**y** ai tiré des leçons de solidarité inestimables et je ne **les** oublierai jamais, car elles continuent de guider mes choix actuels. »*',
      markCode: 'P1 (2 pts)',
      rationale:
        'Maîtriser la place des pronoms compléments devant l’auxiliaire (*y ai tiré*) ou devant l’infinitif/verbe (*ne les oublierai jamais*) signale un niveau B2 solide.',
    },
  ],
  finalAnswerMarkdown:
    '« L’été dernier, je suis parti au Sénégal dans le cadre d’un chantier solidaire. À mon arrivée, il faisait une chaleur accablante et les rues bourdonnaient de vie. J’ai découvert un village côtier dont j’avais admiré les paysages quelques mois plus tôt, et j’y ai rencontré une famille chaleureuse qui m’a accueilli dans une maison où régnait la convivialité. J’y ai tiré des leçons de solidarité que je n’oublierai jamais. »',
  commonTrapMarkdown:
    'Piège fréquent : écrire *« J’ai visité le Sénégal où j’ai rêvé »* au lieu de *« dont j’ai rêvé »* (car on dit *rêver **de** quelque chose* → **dont** !), ou oublier l’accord du participe passé avec *être* (*je suis parti(e)*) et avec un COD antéposé (*les leçons que j’ai tiré**es***).',
};

// ============================================================================
// GUIDE 5 DIAGRAMS — T3.1 (Thème 3 : Ingéniosité humaine — Ch. 3)
// ============================================================================

export const FR_V3_T3_STUDIO: FrenchTextTypeStudioSpec = {
  type: 'french_text_type_studio',
  id: 'fr-v3-t3-studio',
  title: 'Studio Thème 3 (Ingéniosité humaine) : Critique (5A), Tract (16A), Brochure (3A) & Protestation (13A)',
  caption:
    'Maîtrisez les formats culturels, scientifiques et médiatiques du Chapitre 3 (*Le monde en français*, pp. 149, 179, 198, 202).',
  themeLabel: 'Thème 3 · Ingéniosité humaine (T3.1–T3.5)',
  textTypes: [
    {
      id: 'critique-film',
      nameFr: 'Critique de film (5A)',
      nameEn: 'Cultural Film / Exhibition Review',
      register: 'Courant à soutenu · Adjectifs évocateurs accordés',
      audience: 'Lecteurs curieux de cinéma ou d’art francophone',
      purpose: 'Présenter brièvement, analyser les choix esthétiques/culturels et recommander (ou critiquer)',
      wordTarget: '250–400 mots (SL)',
      oralLinkPrompt:
        'Lien Unité 3.3 (p. 178, Godard) : « En quoi un film francophone révèle-t-il les tensions ou valeurs invisibles d’une société ? »',
      markschemeTips: [
        'Titre d’avis + nom du critique + fiche technique (titre, réalisateur, année, acteurs).',
        'Résumé ultra-bref de l’intrigue SANS dévoiler la fin (fiche 5B, p. 343).',
        'Appréciation nuancée (jeu d’acteurs, bande sonore, portée culturelle) + recommandation finale.',
      ],
      sections: [
        {
          id: 'cr-fiche',
          roleLabel: 'Titre d’opinion + Fiche technique & Intrigue brève',
          conventionNote:
            'Modèle **5A (*Les Combattants*, p. 342)** : donnez un titre parlant, les crédits du film et un synopsis sans divulgâchage.',
          frenchFormal:
            '**« Divertimento » : quand la musique classique brise les préjugés de banlieue**\n*Par Hugo Pelletier · Rubrique Cinéma*\nRéalisé par Marie-Castille Mention-Schaar (2022), avec Oulaya Amamra, ce drame biographique suit Zahia Ziouani, une jeune femme d’origine algérienne déterminée à devenir cheffe d’orchestre en Seine-Saint-Denis (9-3).',
          frenchSemiFormal:
            '**Critique : « Divertimento », un film qui donne des ailes !**\n*Hugo Pelletier · Gazette du lycée*\nSorti en 2022 et réalisé par Marie-Castille Mention-Schaar, ce film raconte l’histoire vraie de Zahia Ziouani, une jeune musicienne du 9-3 qui rêve de diriger un grand orchestre symphonique.',
        },
        {
          id: 'cr-analyse',
          roleLabel: 'Analyse artistique & miroir social',
          conventionNote:
            'C’est le cœur du Critère B : reliez bande sonore, jeu des acteurs et portée culturelle francophone (Unité 3.2/3.3).',
          frenchFormal:
            '**Une mise en scène lumineuse au service de la mixité**\nLoin des clichés misérabilistes souvent associés aux quartiers populaires, la caméra capte la rigueur et la passion des répétitions. L’interprétation nuancée d’Oulaya Amamra et la richesse de la bande sonore symphonique montrent que la culture savante n’appartient à aucune élite.',
          frenchSemiFormal:
            '**De la musique pour dépasser les clichés**\nCe qui m’a marqué, c’est que le film montre la banlieue sous un jour positif et vibrant. Les actrices jouent avec beaucoup d’émotion et les scènes de concert donnent vraiment des frissons, même si certains passages semblent un peu rapides.',
        },
        {
          id: 'cr-verdict',
          roleLabel: 'Nuance & Recommandation finale',
          conventionNote:
            'Accordez soigneusement vos adjectifs (*une œuvre émouvante et engagée*) et adressez une recommandation claire.',
          frenchFormal:
            'Bien que le scénario reste parfois académique dans sa seconde partie, cette œuvre généreuse et engagée mérite d’être vue par tous ceux qui s’interrogent sur l’égalité culturelle. À découvrir sans hésitation !\n*Note : ★★★★☆*',
          frenchSemiFormal:
            'Malgré deux ou trois scènes un peu prévisibles, c’est un film inspirant que je vous conseille vivement d’aller voir entre amis ou en cours de français !',
        },
      ],
    },
    {
      id: 'tract-mobilisation',
      nameFr: 'Tract citoyen (16A)',
      nameEn: 'Activist Flyer / Leaflet',
      register: 'Courant percutant · Vouvoiement ou nous mobilisateur',
      audience: 'Passants, lycéens ou citoyens d’une ville',
      purpose: 'Alerter d’urgence sur un enjeu technologique/écologique et appeler à agir',
      wordTarget: '250–400 mots (SL)',
      oralLinkPrompt:
        'Lien Unité 3.1 (p. 149) : « Comment adapter les arguments d’un tract contre les OGM ou la surveillance numérique selon le contexte local ? »',
      markschemeTips: [
        'Titre choc en capitales ou gras + phrases courtes percutantes.',
        'Série de questions rhétoriques + faits/chiffres + solution concrète (fiche 16B, p. 365).',
        'Rendez-vous précis (lieu, date, heure) + coordonnées + mention « Ne pas jeter sur la voie publique ».',
      ],
      sections: [
        {
          id: 'tr-accroche',
          roleLabel: 'Titre choc + Exposition urgente du problème',
          conventionNote:
            'Modèle **16A (p. 364)** : frappez l’attention en deux phrases directes et impliquez le lecteur (*Nous / Vous*).',
          frenchFormal:
            '**NON À LA SURVEILLANCE ALGORITHMIQUE DANS NOS LYCÉES !**\nNous refusons que nos visages et nos données scolaires soient analysés sans notre consentement ! Sous prétexte de sécurité, de nouveaux portiques biométriques risquent bientôt d’être installés à l’entrée des établissements.',
          frenchSemiFormal:
            '**STOP AUX CAMÉRAS BIOMÉTRIQUES AU LYCÉE !**\nAssez d’être surveillés comme des suspects à l’entrée des cours ! Bientôt, nos moindres déplacements pourraient être enregistrés dans des bases de données privées.',
        },
        {
          id: 'tr-rhetorique',
          roleLabel: 'Questions rhétoriques + Propositions concrètes',
          conventionNote:
            'Enchaînez **3 questions rhétoriques** percutantes suivies d’une alternative claire introduite par *Pourtant, il existe des solutions*.',
          frenchFormal:
            'Où veut-on vraiment en venir ? Nos écoles doivent-elles ressembler à des zones sous haute surveillance ? Qui contrôle ces données personnelles ?\nPourtant, il existe des alternatives humaines : augmentons le nombre de médiateurs scolaires, finançons l’éducation civique numérique et garantissons le droit à la vie privée de chaque élève.',
          frenchSemiFormal:
            'Est-ce vraiment cela, l’école de demain ? Qui nous garantit que nos photos ne seront jamais piratées ?\nÀ la place de ces machines coûteuses, engageons plus d’animateurs et investissons dans la prévention contre le harcèlement !',
        },
        {
          id: 'tr-action',
          roleLabel: 'Appel à la mobilisation + Coordonnées',
          conventionNote:
            'Donnez des détails logistiques précis (jour, heure, lieu, site/réseau) pour concrétiser l’appel à l’action.',
          frenchFormal:
            '**Agissons dès maintenant ! Exigeons le retrait de ce projet !**\nVenez nombreux signer la pétition et débattre lors de l’assemblée citoyenne :\n**Jeudi prochain à 12 h 30 devant le grand hall**\n*Collectif Droits Numériques · droitsnumeriques@lycee.org · @collectif_dn*\n*(Ne pas jeter sur la voie publique)*',
          frenchSemiFormal:
            '**Ne restez pas silencieux ! Mobilisons-nous !**\nRendez-vous jeudi à 12 h 30 dans la cour pour signer notre pétition !\n*Contact : collectif-jeunes@lycee.org · Insta : @jeunes_libres*\n*(Ne pas jeter sur la voie publique)*',
        },
      ],
    },
    {
      id: 'lettre-protestation',
      nameFr: 'Lettre de protestation (13A / 3.4)',
      nameEn: 'Formal Complaint Letter to Media',
      register: 'Soutenu · Ton indigné mais rigoureusement courtois',
      audience: 'Directrice de la programmation TV / Rédaction',
      purpose: 'Dénoncer des clichés médiatiques (modèle Dany Laferrière, p. 198)',
      wordTarget: '250–400 mots (SL)',
      oralLinkPrompt:
        'Lien Unité 3.4 (*Le Regard*, p. 193) : « Pourquoi Dany Laferrière critique-t-il l’obsession des médias pour le spectaculaire et l’exotisme ? »',
      markschemeTips: [
        'Exclure toute attaque vulgaire ou familière (« c’était nul / j’en ai marre » = hors registre).',
        'Utiliser des formulations nuancées : « Je trouve consternant que + subjonctif », « Il me semble regrettable que… ».',
        'Exiger une amélioration concrète (pluralisme des sources, reportages nuancés) + formule officielle.',
      ],
      sections: [
        {
          id: 'lp-entete',
          roleLabel: 'En-tête & Objet précis (Activité 10, p. 197)',
          conventionNote:
            'Évitez les objets émotionnels du type *« Téléspectateur indigné ! »* ; restez factuel (titre de l’émission + date).',
          frenchFormal:
            'Nadine Jean-Louis\nMontréal, le 4 octobre 2026\n\nÀ l’attention de Madame Jacqueline Joubert, Directrice de la programmation\n**Objet : Reportage sur Haïti diffusé le 20 septembre**\n\nMadame la Directrice,',
          frenchSemiFormal:
            'Nadine Jean-Louis\nLe 4 octobre 2026\n\nMadame Jacqueline Joubert\n**Objet : Remarques au sujet de l’émission « Le monde à la une » du 20 septembre**\n\nMadame la Directrice,',
        },
        {
          id: 'lp-critique',
          roleLabel: 'Indignation courtoise & Subjonctif',
          conventionNote:
            'Adaptez les phrases validées p. 198 : *« Je trouve consternant qu’une chaîne publique manque à ce point de rigueur journalistique. »*',
          frenchFormal:
            'Le 20 septembre dernier, j’ai suivi avec attention votre reportage intitulé « Haïti, terre de misère ». Or, je trouve consternant qu’une chaîne de service public manque à ce point de nuance en réduisant tout un peuple à une succession de clichés sensationnalistes. En ne filmant jamais la classe moyenne, les librairies ou la créativité universitaire du pays, votre équipe ne fait que perpétuer des préjugés tenaces.',
          frenchSemiFormal:
            'J’ai regardé votre reportage du 20 septembre sur Haïti et je dois avouer que j’ai été profondément déçue. En ne montrant que la pauvreté et jamais les étudiants, les artistes ou la vie quotidienne normale, l’émission renforce les stéréotypes au lieu d’informer.',
        },
        {
          id: 'lp-demande',
          roleLabel: 'Attente constructive & Formule officielle',
          conventionNote:
            'Rappelez la mission déontologique du média et concluez par la formule soutenue exacte.',
          frenchFormal:
            'En tant que média public, vous avez le devoir d’offrir une information équilibrée. J’espère donc que vous prendrez les mesures nécessaires afin que vos futurs reportages donnent la parole aux acteurs culturels locaux. Je vous prie d’agréer, Madame la Directrice, l’expression de mes salutations distinguées.\n*Nadine Jean-Louis*',
          frenchSemiFormal:
            'Comme télévision publique, vous devriez proposer un regard plus juste et varié. J’espère que vos prochains sujets montreront davantage la réalité quotidienne des habitants. Veuillez agréer, Madame la Directrice, mes salutations respectueuses.\n*Nadine Jean-Louis*',
        },
      ],
    },
    {
      id: 'brochure-culturelle',
      nameFr: 'Brochure / Dépliant (3A)',
      nameEn: 'Informational Brochure / Leaflet',
      register: 'Courant à engageant · Vouvoyez le public, phrases brèves et incitatives',
      audience: 'Jeunes, familles ou visiteurs francophones (ex. Fête de la Science / festival culturel)',
      purpose: 'Informer clairement par rubriques visuelles et inciter le lecteur à agir ou participer',
      wordTarget: '250–400 mots (SL)',
      oralLinkPrompt:
        'Lien Unité 3.1 & 3.4 (*Fête de la Science* p. 143 & Fiche brochure K42 p. 201) : « Comment vulgariser la science ou les arts tout en gardant un discours éthique et rigoureux ? »',
      markschemeTips: [
        'Structurer en rubriques nettes avec intertitres courts, puces d’informations pratiques (dates, lieu, tarif, site web) et slogan d’ouverture.',
        'Allier verbes d’action à l’impératif (« Découvrez, débattez, expérimentez ») et arguments nuancés sans ton publicitaire excessif.',
        'Éviter d’écrire un essai continu : la mise en page en encadrés ou colonnes thématiques compte fortement en Critère C.',
      ],
      sections: [
        {
          id: 'br-accroche',
          roleLabel: 'Titre accrocheur, Slogan & Chapeau',
          conventionNote:
            'Ch. 6 (Fiche **3A, p. 336**) & p. 201 : accrochez le public visé dès les trois premières lignes sans jargon obscur.',
          frenchFormal:
            '### FÊTE DE LA SCIENCE & DES ARTS — ÉDITION FRANCOPHONE\n**Osez questionner le progrès, imaginez demain !**\nCurieux des découvertes scientifiques, sceptique face aux OGM ou passionné par le dialogue entre art et technologie ? Venez explorer les grands défis de l’ingéniosité humaine lors de trois journées d’ateliers interactifs gratuits.',
          frenchSemiFormal:
            '### FÊTE DE LA SCIENCE — PARCOURS JEUNESSE\n**La science vous concerne : venez tester, débattre et créer !**\nVous vous demandez comment l’intelligence artificielle ou les biotechnologies transforment notre quotidien ? Rejoignez nos laboratoires ouverts à tous.',
        },
        {
          id: 'br-programme',
          roleLabel: 'Rubriques thématiques à puces & Arguments',
          conventionNote:
            'Regroupez les activités en sous-sections digestes ; privilégiez l’impératif (*vous*) et les phrases concises.',
          frenchFormal:
            '#### Au programme cette semaine\n- **Atelier Bioéthique & Société :** débat guidé sur l’expérimentation animale et le principe de précaution.\n- **Galerie Art & Mémoire :** rencontre avec des street-artistes inspirés par C215 et les grands musées francophones.\n- **Clinique de l’Information :** apprenez à décoder les biais médiatiques et les stéréotypes audiovisuels.',
          frenchSemiFormal:
            '#### Ce qui vous attend\n- **Débat science & éthique :** échangez avec des chercheurs sur les nouvelles technologies.\n- **Espace arts visuels :** découvrez comment les artistes s’engagent dans la cité.\n- **Atelier médias :** repérez les fausses nouvelles et les clichés dans les journaux télévisés.',
        },
        {
          id: 'br-pratique',
          roleLabel: 'Encadré Pratique & Appel à l’action final',
          conventionNote:
            'Terminez toujours une brochure par les modalités concrètes (*Où ? Quand ? Combien ? Contact*).',
          frenchFormal:
            '**Informations pratiques**\n- **Dates :** Du vendredi 10 au dimanche 12 octobre (9 h – 18 h)\n- **Lieu :** Espace culturel des Sciences, 14 avenue Pasteur\n- **Tarif & Inscription :** Entrée libre pour les lycéens — inscrivez-vous avant le 5 octobre sur *www.fete-science-arts.org*.',
          frenchSemiFormal:
            '**Infos pratiques**\n- **Quand :** 10–12 octobre, de 9 h à 18 h\n- **Où :** Espace culturel Pasteur\n- **Prix :** Gratuit sur inscription en ligne (*www.fete-science-arts.org*).',
        },
      ],
    },
  ],
};

export const FR_V3_T3_MEDIA_PASSIVE_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'fr-v3-t3-media-passive-matrix',
  title: 'Langue des médias, Voix passive & Cause/Conséquence (Unité 3.1–3.4)',
  caption:
    'Outils linguistiques du Chapitre 3 : transformer l’oral familier en prose journalistique, maîtriser la forme passive et relier causes et effets.',
  columns: [
    'Domaine linguistique (Ch. 3)',
    'Forme familière / Active de base',
    'Forme courante / Passive / Soutenue (Band 7)',
    'Règle IB & Piège',
  ],
  rows: [
    {
      criterion: 'Abréviations familières des médias (3.4, p. 192)',
      cells: [
        '*les infos · la télé · l’ordi · le petit-déj’ · c’t aprém · la pub · la fac · le dico · la manif · écolo*',
        '*les informations · la télévision · l’ordinateur · le petit-déjeuner · cet après-midi · la publicité · l’université · le dictionnaire · la manifestation · écologique*',
        'Les abréviations conviennent dans un *Courriel amical* ou un *dialogue oral*, jamais dans un *Article sérieux*, un *Rapport* ou une *Dissertation*.',
      ],
      ibExamTip: 'Repérez ces abréviations dans les pistes audio de Compréhension orale (Épreuve 2) !',
    },
    {
      criterion: 'La forme passive & son substitut « on » (3.4)',
      cells: [
        '« Le gouvernement a censuré ce journaliste » / « Les médias diffusent des clichés. »',
        '**Passif :** « Ce journaliste **a été censuré par** le gouvernement » · « Des clichés **sont diffusés par** les médias. »\n**Substitut élégant :** « **On** censure ce journaliste » / « Les images **se diffusent** rapidement » (pronominal passif).',
        'Toujours accorder le participe passé avec le sujet au passif (*Ces données ont été **piratées***) et choisir *de* au lieu de *par* avec les verbes de sentiment (*apprécié de tous*).',
      ],
      ibExamTip: 'Évitez d’enchaîner 4 passifs lourds : alternez passif journalistique et pronom *on*.',
    },
    {
      criterion: 'Expression de la Cause (3.1)',
      cells: [
        '« Parce que la science progresse… » (répété 5 fois).',
        '**En tête de phrase :** **Comme** la science progresse… / **Puisque** vous connaissez les risques…\n**Cause positive :** **grâce à** (+ nom) · **Cause négative :** **à cause de** (+ nom) · **Soutenu :** **en raison de**, **étant donné que**.',
        'Ne dites JAMAIS *« grâce à la catastrophe de Tchernobyl »* (utilisez **à cause de** ou **en raison de** pour un effet négatif !).',
      ],
      ibExamTip: '*Comme* se place TOUJOURS en début de phrase ; *car* ne commence jamais une phrase.',
    },
    {
      criterion: 'Expression de la Conséquence (3.1)',
      cells: [
        '« Donc les gens ont peur. »',
        '**C’est pourquoi** · **Par conséquent** · **Ainsi** · **De sorte que** (+ indicatif) · **Tellement / Si bien que** (résultat concret).',
        '« Les médias répètent les mêmes images, **si bien que** le public finit par y croire. »',
      ],
      ibExamTip: 'Remplacez *donc* en début de phrase par *Par conséquent* ou *C’est pourquoi* pour gagner en registre.',
    },
    {
      criterion: 'Subjonctif après doute & sentiment (3.1)',
      cells: [
        '« Je pense que la science est utile » (Certitude → Indicatif) vs « Je doute que… »',
        '**Doute/Possibilité :** *Il est douteux que / Je ne crois pas que / Croyez-vous que + subjonctif*.\n**Sentiment :** *Il est regrettable que / Je crains que + subjonctif*.',
        'Attention : *Il est probable que* et *Je pense que* (affirmatif) prennent l’**indicatif**, tandis que *Il est peu probable que* et *Je ne pense pas que* prennent le **subjonctif** !',
      ],
      ibExamTip: 'Mémorisez : certitude positive = indicatif ; doute, négation d’opinion ou émotion = subjonctif.',
    },
  ],
};

export const FR_V3_T3_IO_VISUAL_EXPLORER: LabeledExplorerSpec = {
  type: 'labeled_explorer',
  id: 'fr-v3-t3-io-visual-explorer',
  title: 'Anatomie d’un stimulus visuel d’Oral individuel : « Art de rue engagé & Francophonie »',
  caption:
    'Cliquez sur chaque zone de l’image simulée (inspirée du street art de C215 & de la Fiche 3.2.3) pour transformer une simple description en analyse Band 7 (6/6 Critère B1).',
  viewBox: '0 0 800 440',
  palette: 'scientific',
  shapes: [
    // Soft Studio Wall Backdrop
    {
      kind: 'rect',
      x: 24,
      y: 26,
      width: 752,
      height: 388,
      rx: 20,
      fill: '#F1F5F9',
      stroke: '#64748B',
      strokeWidth: 1.5,
      opacity: 0.9,
    },
    // Background Urban Skyline / Murals (Arrière-plan)
    {
      kind: 'rect',
      x: 420,
      y: 52,
      width: 332,
      height: 224,
      rx: 14,
      fill: '#E2E8F0',
      stroke: '#475569',
      strokeWidth: 1.8,
      hotspotId: 'arriere-plan',
      focusTags: ['arriere-plan'],
    },
    {
      kind: 'rect',
      x: 444,
      y: 120,
      width: 68,
      height: 156,
      rx: 4,
      fill: '#CBD5E1',
      stroke: '#475569',
      strokeWidth: 1.2,
      focusTags: ['arriere-plan'],
    },
    {
      kind: 'rect',
      x: 528,
      y: 88,
      width: 84,
      height: 188,
      rx: 4,
      fill: '#CBD5E1',
      stroke: '#475569',
      strokeWidth: 1.2,
      focusTags: ['arriere-plan'],
    },
    {
      kind: 'rect',
      x: 628,
      y: 136,
      width: 96,
      height: 140,
      rx: 4,
      fill: '#CBD5E1',
      stroke: '#475569',
      strokeWidth: 1.2,
      focusTags: ['arriere-plan'],
    },
    {
      kind: 'text',
      x: 586,
      y: 74,
      text: 'Arrière-plan : Quartier urbain & Espace public',
      fontSize: 12,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: '#1E293B',
      focusTags: ['arriere-plan'],
    },

    // Main Mural Canvas (Premier plan : Sujet & Pochoir)
    {
      kind: 'rect',
      x: 48,
      y: 52,
      width: 350,
      height: 266,
      rx: 16,
      fill: '#FEF3C7',
      stroke: '#B45309',
      strokeWidth: 2,
      hotspotId: 'premier-plan',
      focusTags: ['premier-plan'],
    },
    // Stylized Stencil Portrait Silhouette (C215 motif)
    {
      kind: 'circle',
      cx: 170,
      cy: 150,
      r: 44,
      fill: '#FDE68A',
      stroke: '#92400E',
      strokeWidth: 2.2,
      focusTags: ['premier-plan'],
    },
    {
      kind: 'path',
      d: 'M 118 258 C 118 214, 222 214, 222 258 Z',
      fill: '#F59E0B',
      stroke: '#92400E',
      strokeWidth: 2,
      opacity: 0.78,
      focusTags: ['premier-plan'],
    },
    // Paint Spray & Stencil Frame Lines
    {
      kind: 'rect',
      x: 252,
      y: 118,
      width: 114,
      height: 130,
      rx: 10,
      fill: '#FFFFFF',
      stroke: '#B45309',
      strokeWidth: 1.5,
      strokeDasharray: '5 4',
      focusTags: ['premier-plan', 'message-implicite'],
    },
    {
      kind: 'text',
      x: 309,
      y: 164,
      text: 'MÉMOIRE',
      fontSize: 13,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: '#92400E',
      focusTags: ['premier-plan', 'message-implicite'],
    },
    {
      kind: 'text',
      x: 309,
      y: 186,
      text: '& DIGNITÉ',
      fontSize: 13,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: '#92400E',
      focusTags: ['premier-plan', 'message-implicite'],
    },
    {
      kind: 'text',
      x: 223,
      y: 78,
      text: 'Premier plan : Portrait au pochoir (Art engagé)',
      fontSize: 12,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: '#78350F',
      focusTags: ['premier-plan'],
    },

    // Connecting Analytical Flow Arrow (Description -> Message -> Francophonie)
    {
      kind: 'line',
      x1: 223,
      y1: 318,
      x2: 223,
      y2: 344,
      stroke: '#2563EB',
      strokeWidth: 2.2,
      strokeDasharray: '5 4',
      animatedFlow: true,
      focusTags: ['message-implicite', 'francophonie'],
    },
    {
      kind: 'line',
      x1: 586,
      y1: 276,
      x2: 586,
      y2: 344,
      stroke: '#059669',
      strokeWidth: 2.2,
      strokeDasharray: '5 4',
      animatedFlow: true,
      focusTags: ['francophonie'],
    },

    // Bottom Left Card: Message Implicite & Thème IB
    {
      kind: 'rect',
      x: 48,
      y: 332,
      width: 350,
      height: 66,
      rx: 14,
      fill: '#DBEAFE',
      stroke: '#1D4ED8',
      strokeWidth: 1.8,
      hotspotId: 'message-implicite',
      focusTags: ['message-implicite'],
    },
    {
      kind: 'text',
      x: 223,
      y: 358,
      text: '3. Message implicite & Thème : Ingéniosité humaine',
      fontSize: 12,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: '#1E3A8A',
      focusTags: ['message-implicite'],
    },
    {
      kind: 'text',
      x: 223,
      y: 379,
      text: 'Donner une voix aux invisibles sans galerie élitaire',
      fontSize: 11,
      textAnchor: 'middle',
      fill: '#1E3A8A',
      focusTags: ['message-implicite'],
    },

    // Bottom Right Card: Ancrage Francophone Obligatoire
    {
      kind: 'rect',
      x: 420,
      y: 294,
      width: 332,
      height: 104,
      rx: 14,
      fill: '#D1FAE5',
      stroke: '#047857',
      strokeWidth: 2,
      hotspotId: 'francophonie',
      focusTags: ['francophonie'],
    },
    {
      kind: 'text',
      x: 586,
      y: 322,
      text: '4. Ancrage Francophone (Obligatoire !)',
      fontSize: 12.5,
      fontWeight: 700,
      textAnchor: 'middle',
      fill: '#064E3B',
      focusTags: ['francophonie'],
    },
    {
      kind: 'text',
      x: 586,
      y: 346,
      text: 'Ex. C215 (Paris & Kigali, Rwanda) · Festival MURAL Montréal',
      fontSize: 11,
      textAnchor: 'middle',
      fill: '#064E3B',
      focusTags: ['francophonie'],
    },
    {
      kind: 'text',
      x: 586,
      y: 368,
      text: 'Légalisation vs vandalisme · Mémoire & cohésion sociale',
      fontSize: 10.5,
      textAnchor: 'middle',
      fill: '#065F46',
      focusTags: ['francophonie'],
    },
  ],
  hotspots: [
    {
      id: 'premier-plan',
      x: 170,
      y: 168,
      label: 'Étape 1 (0:00–0:45) — Premier plan & Description ciblée',
      category: 'Description brève',
      examKeyword: 'Au premier plan · contraste chromatique · portrait au pochoir',
      detailMarkdown:
        '**Phrases modèles :** *« Sur cette photographie prise en milieu urbain, on aperçoit au premier plan une fresque murale réalisée au pochoir représentant le visage expressif d’un citoyen anonyme. Les teintes chaudes attirent immédiatement le regard du passant vers le mot "Mémoire". »* Ne dépassez pas **45–60 secondes** de description pure !',
    },
    {
      id: 'arriere-plan',
      x: 586,
      y: 184,
      label: 'Étape 2 (0:45–1:30) — Arrière-plan & Contexte spatial',
      category: 'Contextualisation',
      examKeyword: 'À l’arrière-plan · espace public accessible à tous',
      detailMarkdown:
        '**Phrases modèles :** *« À l’arrière-plan, les façades ordinaires du quartier rappellent que cette œuvre ne se cache pas dans un musée payant : elle s’adresse directement aux passants dans l’espace quotidien. »*',
    },
    {
      id: 'message-implicite',
      x: 223,
      y: 360,
      label: 'Étape 3 (1:30–2:30) — Message implicite & Thème prescrit',
      category: 'Interprétation (Critère B1)',
      examKeyword: 'Ce cliché reflète / soulève la question de l’art engagé',
      detailMarkdown:
        '**Phrases modèles :** *« Cette image s’inscrit pleinement dans le thème **L’ingéniosité humaine** (sous-thème *Expressions artistiques*). L’artiste cherche non pas à embellir simplement un mur, mais à éveiller la conscience collective sur ceux que la société ignore. »*',
    },
    {
      id: 'francophonie',
      x: 586,
      y: 344,
      label: 'Étape 4 (2:30–3:45) — Lien culturel francophone obligatoire',
      category: 'Culture francophone',
      examKeyword: 'C215 au Rwanda · Festival MURAL Montréal · Art & Démocratie',
      detailMarkdown:
        '**Clé du 6/6 en Critère B1 :** reliez l’image à des réalités francophones étudiées en classe : **Christian Guémy (C215)** peignant les Justes au Rwanda pour honorer la mémoire du génocide de 1994, ou les fresques municipales à **Montréal** et en **Seine-Saint-Denis**, tout en évoquant le débat entre art subventionné et graffiti illégal.',
    },
  ],
};

// ============================================================================
// GUIDE 6 DIAGRAMS — T4.1 (Thème 4 : Organisation sociale — Ch. 4)
// ============================================================================

export const FR_V3_T4_STUDIO: FrenchTextTypeStudioSpec = {
  type: 'french_text_type_studio',
  id: 'fr-v3-t4-studio',
  title: 'Studio Thème 4 (Organisation sociale) : Proposition (14A), Lettre officielle (13A) & Rapport (15A)',
  caption:
    'Formats institutionnels du Chapitre 4 (*Le monde en français*, pp. 236, 251, 258) : école idéale, lutte contre le cyberharcèlement et prévention du bizutage.',
  themeLabel: 'Thème 4 · Organisation sociale (T4.1–T4.6)',
  textTypes: [
    {
      id: 'proposition-ecole',
      nameFr: 'Proposition scolaire (14A)',
      nameEn: 'Formal School Proposal',
      register: 'Soutenu / Courtois · Vouvoiement & Conditionnel',
      audience: 'Proviseur / Conseil d’établissement',
      purpose: 'Proposer une réforme éducative (soutien scolaire, horaires adaptés, p. 234–236)',
      wordTarget: '250–400 mots (SL)',
      oralLinkPrompt:
        'Lien Unité 4.3 (*L’école de demain*, rtl.be, p. 234) : « Comment impliquer les élèves dans les décisions scolaires pour réduire le décrochage ? »',
      markschemeTips: [
        'Date, lieu, destinataire précis, formule d’appel institutionnelle.',
        'Exposer la situation problématique avant de présenter des solutions chiffrées/réalistes.',
        'Utiliser le conditionnel de politesse (« permettrait », « souhaiterions ») + formule finale officielle.',
      ],
      sections: [
        {
          id: 'prop-head',
          roleLabel: 'En-tête & Constat initial (4.3 Éducation)',
          conventionNote:
            'Modèle **14A (Lycée Chateaubriand, p. 360)** : exposez votre attachement à l’école avant d’introduire le besoin d’amélioration.',
          frenchFormal:
            'Comité des Élèves de 11e année\nCharlottetown, le 12 février 2027\nMadame la Proviseure,\nNous apprécions vivement la qualité de l’enseignement dispensé au sein de notre lycée. Néanmoins, ne vous semble-t-il pas urgent de soutenir plus efficacement nos camarades allophones ou en difficulté sans qu’ils perçoivent le rattrapage comme une sanction ?',
          frenchSemiFormal:
            'Comité des Élèves · Le 12 février 2027\nMadame la Proviseure,\nNous sommes très fiers d’étudier dans notre lycée, mais beaucoup d’élèves en difficulté hésitent à aller en séance de rattrapage par peur d’être jugés.',
        },
        {
          id: 'prop-plan',
          roleLabel: 'Plan d’action concret & Financement',
          conventionNote:
            'Structurez avec des marqueurs ordinaux (*Premièrement, Ensuite, Enfin*) et le **conditionnel présent**.',
          frenchFormal:
            'C’est pourquoi nous vous proposons d’instaurer un club d’entraide par les pairs intitulé « Passerelle ». Premièrement, des élèves volontaires de 11e et 12e année animeraient des ateliers d’étude deux fois par semaine au CDI. Ensuite, afin de financer les fournitures nécessaires sans grever le budget scolaire, nous organiserions une vente de pâtisseries lors de la rencontre parents-professeurs.',
          frenchSemiFormal:
            'Nous voudrions donc créer un club de soutien entre élèves. D’abord, les grands de 11e et 12e aideraient les plus jeunes deux midis par semaine à la bibliothèque. Pour payer le matériel, nous pourrions vendre des gâteaux lors de la soirée des parents.',
        },
        {
          id: 'prop-end',
          roleLabel: 'Bénéfices mutuels & Clôture',
          conventionNote:
            'Montrez ce que chacun y gagne, puis concluez avec la formule exacte de la page 360.',
          frenchFormal:
            'Ainsi, les nouveaux arrivants gagneraient en confiance, tandis que les tuteurs valoriseraient leur engagement citoyen dans le cadre du programme CAS. Dans l’attente d’une réponse favorable, veuillez agréer, Madame la Proviseure, nos sincères salutations.\n*La classe de Français B NM*',
          frenchSemiFormal:
            'Tout le monde y gagnerait : meilleurs résultats pour les plus jeunes et belle expérience de service pour les tuteurs ! Dans l’attente de votre réponse, veuillez agréer, Madame la Proviseure, nos salutations respectueuses.\n*Les élèves de 11e*',
        },
      ],
    },
    {
      id: 'rapport-cyber',
      nameFr: 'Rapport sur la cybersécurité (15A)',
      nameEn: 'Incident / Prevention Report',
      register: 'Impersonnel & analytique (4.4 Ordre public)',
      audience: 'Comité de direction / Commission scolaire',
      purpose: 'Analyser les dérives numériques chez les adolescents et formuler des mesures légales',
      wordTarget: '250–400 mots (SL)',
      oralLinkPrompt:
        'Lien Unité 4.4 (*La Voix du Nord*, p. 252) : « Pourquoi les traces numériques rendent-elles le cyberharcèlement plus grave et plus punissable qu’une insulte dans la rue ? »',
      markschemeTips: [
        'En-tête complet (À l’attention de / De la part de / Date / Objet).',
        'Ton impartial reposant sur des faits juridiques et chiffres (ex. droit à l’image, 3020, Pharos).',
        'Intertitres nets séparant le diagnostic des recommandations concrètes.',
      ],
      sections: [
        {
          id: 'rc-head',
          roleLabel: 'En-tête institutionnel',
          conventionNote:
            'Fiche **15B (p. 363)** : identifiez immédiatement la nature objective du rapport.',
          frenchFormal:
            '**À l’attention de :** Direction des Services aux Élèves\n**De la part de :** Groupe de travail Citoyenneté Numérique\n**Date :** 3 mars 2027\n**Objet : Diagnostic des risques numériques et plan de prévention en premier cycle**',
          frenchSemiFormal:
            '**Destinataire :** Direction de l’école\n**Auteur :** Comité Citoyenneté Numérique\n**Date :** 3 mars 2027\n**Objet : Prévention du harcèlement en ligne au collège**',
        },
        {
          id: 'rc-diag',
          roleLabel: 'I. Constat & Cadre juridique (4.4)',
          conventionNote:
            'Intégrez des données issues de *Le monde en français* p. 252 (diffamation laissant des preuves, droit à l’image).',
          frenchFormal:
            '**1. Constat des pratiques à risque**\nÀ l’issue d’ateliers menés auprès de quatre classes, il ressort que de nombreux collégiens ignorent la portée légale de leurs publications. Contrairement à une invective orale, les contenus diffusés en ligne laissent des preuves durables. Or, la publication d’une photographie sans consentement ou d’une injure discriminatoire expose son auteur à de lourdes amendes, voire à des peines de prison.',
          frenchSemiFormal:
            '**1. Ce que nous avons observé**\nBeaucoup d’élèves ne savent pas qu’une photo publiée sans permission ou une moquerie en ligne laissent des preuves devant la justice et peuvent entraîner de graves sanctions légales.',
        },
        {
          id: 'rc-rec',
          roleLabel: 'II. Recommandations préventives',
          conventionNote:
            'Terminez par des mesures précises basées sur le slogan *« Briser la loi du silence »* (p. 252).',
          frenchFormal:
            '**2. Recommandations prioritaires**\nIl convient dès lors : (1) d’instaurer une heure d’éducation au civisme numérique dès la rentrée ; (2) d’afficher dans chaque couloir les numéros d’écoute confidentiels (3020 / portail Pharos) afin de briser la loi du silence ; et (3) d’inviter un intervenant juridique chaque semestre.',
          frenchSemiFormal:
            '**2. Nos conseils pour agir**\nNous recommandons d’organiser un atelier civique dès septembre, d’afficher les numéros d’aide gratuits dans l’école et d’encourager les témoins à prévenir un adulte sans tarder.',
        },
      ],
    },
    {
      id: 'lettre-antibizutage',
      nameFr: 'Lettre officielle contre le bizutage (13A)',
      nameEn: 'Formal Complaint Letter (University Rector)',
      register: 'Soutenu · Vouvoiement formel (Activité 13, p. 258)',
      audience: 'Recteur / Rectrice d’université',
      purpose: 'Dénoncer des dérives d’intégration (Loi Royal 1998) et proposer des alternatives saines',
      wordTarget: '250–400 mots (SL)',
      oralLinkPrompt:
        'Lien Unité 4.4 (*Le Figaro Étudiant*, p. 255) : « Pourquoi la justice ne tient-elle pas compte du consentement prétendu des victimes lors d’un bizutage ? »',
      markschemeTips: [
        'Respecter les deux volets de l’Activité 13 (p. 258) : décrire les faits humiliants/sentiments ET proposer des alternatives positives.',
        'Rappeler calmement le cadre légal (actes humiliants ou dégradants punis par la loi) sans colère familière.',
        'Formule d’appel et formule finale exactes (« Monsieur le Recteur / Madame la Rectrice, … »).',
      ],
      sections: [
        {
          id: 'lb-open',
          roleLabel: 'En-tête, Objet & Témoignage sobre',
          conventionNote:
            'Exposez votre statut d’étudiant(e) de première année et les faits vécus sans vulgarité.',
          frenchFormal:
            'Émilie Gagnon, Étudiante en 1re année de Droit\nLyon, le 19 septembre 2027\n\nÀ l’attention de Madame la Rectrice de l’Académie\n**Objet : Dénonciation de faits de bizutage lors de la semaine d’accueil**\n\nMadame la Rectrice,\nNouvellement inscrite en première année universitaire, je me vois contrainte de porter à votre connaissance les débordements survenus lors de la journée d’intégration du 12 septembre.',
          frenchSemiFormal:
            'Émilie Gagnon (1re année)\nLe 19 septembre 2027\n\nMadame la Rectrice,\n**Objet : Incidents lors de l’intégration des nouveaux étudiants**\n\nMadame la Rectrice,\nJe vous écris pour vous signaler les activités humiliantes auxquelles ma promotion a été soumise la semaine dernière.',
        },
        {
          id: 'lb-faits',
          roleLabel: 'Description des faits & Rappel légal',
          conventionNote:
            'Utilisez le passé composé/imparfait et le **subjonctif** pour demander l’application ferme de la loi.',
          frenchFormal:
            'Bien que ces pratiques aient été présentées comme festives, plusieurs étudiants ont été souillés de farine devant le parvis et contraints de chanter sous la moquerie. Profondément humiliée, j’ai ressenti un malaise durable. Or, la loi condamne tout acte dégradant, même lorsque les victimes semblent y consentir par peur d’être exclues. Il est impératif que la direction intervienne sans délai.',
          frenchSemiFormal:
            'Plusieurs anciens nous ont jeté des œufs et obligés à subir des épreuves ridicules. Je me suis sentie très mal à l’aise, alors que la loi interdit pourtant ces pratiques. Il faut vraiment que la faculté agisse.',
        },
        {
          id: 'lb-alt',
          roleLabel: 'Alternatives constructives & Salutations',
          conventionNote:
            'Proposez des activités d’intégration bienveillantes (rallye culturel, parrainage, forum associatif) avant la formule finale soutenue.',
          frenchFormal:
            'Afin de favoriser une véritable cohésion, je suggère de remplacer ces épreuves par un rallye culturel sur le campus et un système de parrainage académique. Je vous prie d’agréer, Madame la Rectrice, l’expression de ma haute considération.\n*Émilie Gagnon*',
          frenchSemiFormal:
            'À la place, un grand jeu de piste culturel et des rencontres avec les associations aideraient chacun à se faire des amis dans le respect. Veuillez agréer, Madame la Rectrice, mes salutations distinguées.\n*Émilie Gagnon*',
        },
      ],
    },
  ],
};

export const FR_V3_T4_HYPOTHETIQUE_STEPS: StepMechanismSpec = {
  type: 'step_mechanism',
  id: 'fr-v3-t4-hypothetique-steps',
  title: 'Moteur grammatical Thème 4 : Conditionnel, Phrases hypothétiques (Si) & Négation',
  caption:
    'Maîtrisez la concordance exacte des 3 systèmes hypothétiques avec *si* (Unité 4.1) et les subtilités de la négation complexe (Unité 4.2).',
  nodes: [
    {
      id: 'si-1',
      x: 110,
      y: 110,
      label: '1. Si + Présent',
      sublabel: '→ Futur / Impératif',
      group: 'reel',
    },
    {
      id: 'si-2',
      x: 310,
      y: 110,
      label: '2. Si + Imparfait',
      sublabel: '→ Conditionnel présent',
      group: 'irreel-p',
    },
    {
      id: 'si-3',
      x: 520,
      y: 110,
      label: '3. Si + Plus-que-parfait',
      sublabel: '→ Conditionnel passé',
      group: 'irreel-pa',
    },
    {
      id: 'neg-4',
      x: 680,
      y: 250,
      label: '4. Négation & Doute',
      sublabel: 'ne… aucun / subjonctif',
      group: 'neg',
    },
  ],
  edges: [
    { id: 't4-e1', from: 'si-1', to: 'si-2', label: 'Hypothèse présente' },
    { id: 't4-e2', from: 'si-2', to: 'si-3', label: 'Regret passé' },
    { id: 't4-e3', from: 'si-3', to: 'neg-4', label: 'Nuancer l’argument' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Système 1 — Le réel / probable : Si + Présent → Futur simple (ou Impératif / Présent)',
      descriptionMarkdown:
        'Exprime une condition réaliste dans le présent ou le futur (ex. *Tel-jeunes*, p. 212) : *« **Si tu parles** au « je » sans accuser ton ami, **tu résoudras** le conflit plus sereinement »* ou *« **Si vous voulez** aider, **engagez-vous** ! »*. **Règle d’or :** jamais de futur juste après *si* !',
      formulaLatex: '\\text{Si} + \\text{Présent} \\;\\longrightarrow\\; \\text{Futur simple / Impératif}',
      activeNodeIds: ['si-1'],
      activeEdgeIds: [],
      metrics: [
        { label: 'Usage', value: 'Action possible / Réaliste' },
        { label: 'Piège fatal', value: '« Si j’aurai » ✗ (interdit !)' },
      ],
    },
    {
      stepNumber: 2,
      title: 'Système 2 — L’irréel du présent / conseil poli : Si + Imparfait → Conditionnel présent',
      descriptionMarkdown:
        'Exprime une situation imaginaire aujourd’hui ou une proposition constructive (*Tanguy / École de demain*) : *« **Si l’école commençait** à 9 h, les élèves **seraient** plus attentifs. »* Le conditionnel seul adoucit aussi une demande (*« **Pourriez-vous** envisager… ? »*).',
      formulaLatex: '\\text{Si} + \\text{Imparfait} \\;\\longrightarrow\\; \\text{Conditionnel présent}',
      activeNodeIds: ['si-2'],
      activeEdgeIds: ['t4-e1'],
      metrics: [
        { label: 'Usage', value: 'Hypothèse / Rêve / Conseil' },
        { label: 'Piège fatal', value: '« Si j’aurais su » ✗ (interdit !)' },
      ],
    },
    {
      stepNumber: 3,
      title: 'Système 3 — Le regret dans le passé : Si + Plus-que-parfait → Conditionnel passé',
      descriptionMarkdown:
        'Exprime ce qui aurait pu se passer différemment (ex. *Courriel d’Aurélie*, p. 340) : *« **Si tu m’avais demandé** conseil plus tôt, **j’aurais compris** ta détresse et **je t’aurais aidée**. »* Indispensable pour analyser un échec ou une erreur passée.',
      formulaLatex: '\\text{Si} + \\text{Plus-que-parfait} \\;\\longrightarrow\\; \\text{Conditionnel passé}',
      activeNodeIds: ['si-3'],
      activeEdgeIds: ['t4-e2'],
      metrics: [
        { label: 'Usage', value: 'Regret / Bilan rétrospectif' },
        { label: 'Formation cond. passé', value: 'avoir/être (cond.) + p.p.' },
      ],
    },
    {
      stepNumber: 4,
      title: 'Négation complexe (4.2) & Subjonctif de l’incertitude (4.4)',
      descriptionMarkdown:
        'Variez au-delà de *ne… pas* : **ne… jamais** (temps), **ne… plus** (cessation), **ne… rien** / **personne ne…** (sujet), **ne… aucun(e)** (*aucune aide n’est inutile*), **ne… que** (restriction = *seulement*). Au Thème 4.4, employez le **subjonctif** après l’incertitude : *« Je doute que la vidéosurveillance **suffise** à résoudre le chômage. »*',
      activeNodeIds: ['neg-4'],
      activeEdgeIds: ['t4-e3'],
      metrics: [
        { label: 'Articles après négation', value: 'un/du/des → de / d’ (sauf être)' },
        { label: 'Attention « ne… que »', value: 'Signifie seulement (pas négatif !)' },
      ],
    },
  ],
};

// ============================================================================
// GUIDE 7 DIAGRAMS — T5.1 (Thème 5 : Partage de la planète — Ch. 5)
// ============================================================================

export const FR_V3_T5_STUDIO: FrenchTextTypeStudioSpec = {
  type: 'french_text_type_studio',
  id: 'fr-v3-t5-studio',
  title: 'Studio Thème 5 (Partage de la planète) : Éditorial (8A), Dissertation (7A) & Discours (6A)',
  caption:
    'Maîtrisez les trois grands formats argumentatifs du Chapitre 5 (*Le monde en français*, pp. 274, 293, 328) sur l’écologie, les droits humains et la bioéthique.',
  themeLabel: 'Thème 5 · Partage de la planète (T5.1–T5.7)',
  textTypes: [
    {
      id: 'editorial-planete',
      nameFr: 'Éditorial engagé (8A)',
      nameEn: 'Newspaper Editorial (Urban Sustainability)',
      register: 'Soutenu · Voix du journal (nous / rédaction)',
      audience: 'Lectorat citoyen d’un quotidien francophone',
      purpose: 'Analyser le pour/contre d’un débat écologique urbain et défendre une réforme de société',
      wordTarget: '250–400 mots (SL)',
      oralLinkPrompt:
        'Lien Unité 5.1 (Louis-Gilles Francœur, p. 270) & T5.7 : « Pourquoi la transition vers la "ville du quart d’heure" exige-t-elle des choix politiques autant que des gestes individuels ? »',
      markschemeTips: [
        'Titre d’opinion clair + nom de l’éditorialiste en tête (modèle 8A, Nathalie Collard, p. 348).',
        'Argumentation équilibrée (concession aux critiques + réfutation nuancée).',
        'Conclusion affirmant nettement la position de la rédaction avec proposition d’action collective.',
      ],
      sections: [
        {
          id: 'ed-titre',
          roleLabel: 'Titre d’opinion + Entrée en matière',
          conventionNote:
            'Modèle **8A (p. 348)** : posez un constat d’actualité net puis affirmez d’emblée la thèse éditoriale.',
          frenchFormal:
            '**Repenser la ville : la gratuité des transports n’est pas un luxe**\n*Par Thomas Deschamps, Éditorialiste*\nFace aux pics de pollution estivaux qui asphyxient nos métropoles, il devient urgent de transformer nos mobilités. Faire le pari des transports en commun gratuits représente un véritable choix de société.',
          frenchSemiFormal:
            '**Pour des bus gratuits dans nos centres-villes**\n*Éditorial de Thomas Deschamps*\nChaque matin, nos avenues sont bloquées par les embouteillages. Pour sauver la qualité de l’air, rendre les transports en commun gratuits est une idée qu’il faut enfin adopter.',
        },
        {
          id: 'ed-contre',
          roleLabel: 'Antithèse concédée & Réfutation chiffrée',
          conventionNote:
            'Fiche **8B (p. 349)** : montrez le contre-argument (*coût fiscal*) puis renversez-le par **Or / En réalité**.',
          frenchFormal:
            'Certes, les opposants à cette réforme soutiennent que le manque à gagner pèserait lourdement sur les finances municipales. Or, leur calcul ignore le coût faramineux des maladies respiratoires et des embouteillages quotidiens. En réalité, investir dans des lignes de tramway fiables et des pistes cyclables permet à chacun de rejoindre son lieu de travail en quinze minutes.',
          frenchSemiFormal:
            'Bien sûr, certains élus disent que cette mesure coûterait trop cher à la ville. Mais c’est oublier tout l’argent perdu à cause de la pollution sur la santé des habitants ! Un réseau de bus rapide aiderait tout le monde à se déplacer plus vite.',
        },
        {
          id: 'ed-fin',
          roleLabel: 'Appel éditorial & Ouverture',
          conventionNote:
            'Employez le *nous* collectif civique et terminez par une formule concise frappante (ex. *« Voilà un choix d’avenir. »*).',
          frenchFormal:
            'Nous devons cesser d’opposer écologie et pouvoir d’achat : désenclaver les quartiers périphériques et pacifier nos rues relève de la justice sociale autant que de l’urgence climatique. Ne tardons plus à franchir le pas !\n*© La Tribune Francophone*',
          frenchSemiFormal:
            'Il est temps d’agir pour des villes plus respirables et plus justes pour tous les citoyens, pas seulement pour ceux qui habitent en centre-ville !',
        },
      ],
    },
    {
      id: 'dissertation-bioethique',
      nameFr: 'Dissertation dialectique (7A)',
      nameEn: 'Academic Essay (Bioethics / Ethics)',
      register: 'Soutenu & Impersonnel (aucun je/tu familier)',
      audience: 'Correcteur / Jury académique',
      purpose: 'Discuter de façon logique et équilibrée un dilemme éthique (don d’organes, GPA, euthanasie)',
      wordTarget: '250–400 mots (SL)',
      oralLinkPrompt:
        'Lien Unité 5.4 (*beldonor.be* p. 315 & *Le scaphandre et le papillon* p. 322) : « Jusqu’où l’État doit-il légiférer sur le corps humain entre solidarité collective et autonomie individuelle ? »',
      markschemeTips: [
        'Inscrire l’intitulé du sujet en haut de la copie (fiche 7B, p. 347).',
        'Introduction : accroche contextuelle + problématique (pas de « De tout temps… » banal).',
        'Plan Thèse / Antithèse / Synthèse + connecteurs logiques précis (Or, Par conséquent, Néanmoins) + ouverture rhétorique.',
      ],
      sections: [
        {
          id: 'diss-intro',
          roleLabel: 'Sujet inscrit + Problématique (7A, p. 346)',
          conventionNote:
            'Inspirez-vous de la p. 329 : citez un fait concret (ex. manque de greffons, loi belge du consentement présumé) avant de poser la question.',
          frenchFormal:
            '**« Quand l’État fait de chaque citoyen un donneur d’organes présumé, il s’approprie le corps des gens. » Discutez.**\nAlors que plus de 16 000 patients attendent chaque année une greffe en France et que le taux de refus dépasse 33 %, plusieurs pays francophones comme la Belgique ont adopté le consentement présumé. Cette règle vise-t-elle uniquement l’altruisme, ou porte-t-elle atteinte à la liberté individuelle ?',
          frenchSemiFormal:
            '**Sujet : Le consentement présumé au don d’organes est-il une atteinte à la liberté ?**\nDes milliers de malades attendent un don d’organe pour survivre, mais beaucoup de citoyens oublient de s’inscrire comme donneurs. Faut-il alors considérer tout le monde comme donneur par défaut ?',
        },
        {
          id: 'diss-dev',
          roleLabel: 'Thèse (Solidarité) vs Antithèse (Autonomie)',
          conventionNote:
            'Développez deux paragraphes distincts articulés par *D’une part… Il est vrai cependant que…*.',
          frenchFormal:
            'D’une part, le consentement présumé constitue un instrument de solidarité vitale : sans porter atteinte au droit de s’inscrire sur un registre de refus, il permet de sauver des milliers de vies qui auraient été perdues par simple négligence administrative.\nIl est vrai, cependant, que certains juristes redoutent une ingérence de l’État sur l’intégrité corporelle après le décès, estimant qu’un geste aussi intime doit procéder d’une volonté explicite et non d’un silence présumé.',
          frenchSemiFormal:
            'D’un côté, cette loi permet de sauver beaucoup plus de vies tout en laissant à chacun la possibilité de dire non de son vivant. D’un autre côté, certains pensent que le corps appartient uniquement à la personne et que son silence ne veut pas forcément dire oui.',
        },
        {
          id: 'diss-synth',
          roleLabel: 'Synthèse nuancée + Question d’ouverture',
          conventionNote:
            'Proposez un équilibre (information transparente + respect du registre de refus) et ouvrez le débat sans nouveaux arguments.',
          frenchFormal:
            'Somme toute, le consentement présumé ne devient éthique qu’à la condition qu’une campagne d’information transparente garantisse à chaque citoyen un accès aisé au registre de refus. Car, en définitive, comment concilier fraternité nationale et respect des convictions sans dialogue éclairé avec les familles ?',
          frenchSemiFormal:
            'En conclusion, ce système fonctionne uniquement si tout le monde est clairement informé de ses droits dès l’âge adulte. Mais l’école et les médecins font-ils déjà assez pour lancer ce dialogue en famille ?',
        },
      ],
    },
    {
      id: 'discours-droits',
      nameFr: 'Discours civique (6A / 5.2)',
      nameEn: 'Youth Civic Speech (Vote at 16)',
      register: 'Courant à soutenu · Rhétorique persuasive & convective',
      audience: 'Lycéens OU Grand public (comparer les destinataires, p. 293)',
      purpose: 'Défendre le droit de vote à 16 ans en alliant faits (convaincre) et émotion (persuader)',
      wordTarget: '250–400 mots (SL)',
      oralLinkPrompt:
        'Lien Unité 5.2 (Giuseppe Aviges vs Hassan Benhsain, pp. 282–283) : « Le vote à 16 ans est-il une question de maturité morale ou d’éducation civique ? »',
      markschemeTips: [
        'Adapter l’apostrophe et le ton selon l’auditoire exact du sujet (lycéens vs grand public, p. 293).',
        'Combiner la stratégie *convaincre* (arguments fiscaux/légaux) et *persuader* (anaphores, appel à l’avenir).',
        'Clore par une exhortation civique et « Merci de votre attention ».',
      ],
      sections: [
        {
          id: 'dd-open',
          roleLabel: 'Ouverture adaptée au public (p. 293)',
          conventionNote:
            'Notez la différence de ton entre un discours devant des **lycéens** (tutoiement/nous inclusif) et devant le **grand public**.',
          frenchFormal:
            'Mesdames et Messieurs, chers concitoyens,\nLorsqu’on évoque l’abaissement du droit de vote à seize ans, certains sourient avec scepticisme. Pourtant, je vous le demande aujourd’hui : comment exiger de nos jeunes qu’ils se sentent responsables de l’avenir si nous leur refusons le droit de peser dans les urnes ?',
          frenchSemiFormal:
            'Chers camarades, chers amis,\nOn nous répète souvent que la jeunesse ne s’intéresse pas à la politique. Et si c’était l’inverse ? À 16 ans, on peut travailler et être jugé responsable de nos actes, alors pourquoi pas voter ?',
        },
        {
          id: 'dd-arg',
          roleLabel: 'Convaincre (faits) + Répondre aux objections',
          conventionNote:
            'Réfutez l’argument de Hassan Benhsain (*manque d’information*) en proposant le renforcement de l’enseignement civique.',
          frenchFormal:
            'À seize ans, un adolescent peut travailler, payer des cotisations sociales et répondre pénalement de ses actes. Bien que certains redoutent un manque d’information politique, la solution ne réside pas dans l’exclusion, mais dans un enseignement moral et civique ambitieux dès le lycée. Ce qui est en jeu, c’est l’équilibre démocratique de notre société.',
          frenchSemiFormal:
            'À seize ans, on paie déjà des taxes et on est responsable devant la loi ! Bien sûr, il faut plus de cours d’éducation civique au lycée pour comprendre les programmes, mais nous interdire de voter n’aide personne.',
        },
        {
          id: 'dd-fin',
          roleLabel: 'Exhortation & Clôture oratoire',
          conventionNote:
            'Reliez droits et devoirs civiques (citation d’Édouard Balladur, p. 293) et remerciez l’auditoire.',
          frenchFormal:
            'Souvenons-nous que tout droit nouveau appelle un devoir exigeant : celui de s’informer, de débattre et de voter en connaissance de cause. Faisons confiance à la jeunesse pour renouveler notre démocratie ! Je vous remercie de votre attention.',
          frenchSemiFormal:
            'Avoir ce droit, c’est aussi accepter le devoir de s’informer avant chaque élection. Alors prouvons que nous sommes prêts à prendre notre place de citoyens ! Merci de votre attention !',
        },
      ],
    },
  ],
};

export const FR_V3_T5_CONCESSION_WORKED: WorkedExampleSpec = {
  type: 'worked_example',
  id: 'fr-v3-t5-concession-worked',
  title: 'Atelier syntaxique Thème 5 : Concession, Accord du participe, Mise en relief & Relatifs composés',
  caption:
    'Comment assembler 4 structures C1 du Chapitre 5 dans un paragraphe argumentatif Band 7 sur l’environnement et les droits humains.',
  sourceLabel: 'Unité 5.1–5.4 · Critère A Langue',
  commandTerm: 'Analyser',
  marks: 8,
  problemMarkdown:
    '**Consigne :** À partir des quatre éléments factuels ci-dessous (tirés des Unités 5.1, 5.2 et 5.3), construisez une synthèse grammaticalement irréprochable intégrant :\n1. **L’accord du participe passé** avec un COD antéposé (*que*) et avec un verbe pronominal.\n2. **Une proposition concessive au subjonctif** (*Bien que* ou *Quoique*).\n3. **Un pronom relatif composé** (*auxquels*, *lesquelles* ou *pour lequel*).\n4. **La mise en relief** (*Ce qui… c’est…* / *Ce dont… c’est…*).',
  givenData: [
    { label: 'Fait 1 (5.1)', value: 'Les mesures écologiques prises par les citoyens restent insuffisantes.' },
    { label: 'Fait 2 (5.1)', value: 'Les politiciens hésitent devant les défis climatiques.' },
    { label: 'Fait 3 (5.2)', value: 'Les jeunes se sont mobilisés pour l’égalité.' },
    { label: 'Fait 4 (5.4)', value: 'La solidarité compte le plus.' },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'Accorder le participe passé avec COD antéposé (Unit 5.1)',
      workingMarkdown:
        'Dans *« les mesures écologiques que les citoyens **ont prises** »*, le COD **que** (= *les mesures écologiques*, féminin pluriel) précède l’auxiliaire *avoir* → **prises** prend **-es** ! De même au pronominal : *« les jeunes **se sont mobilisés** »* (*se* = COD masculin pluriel → **-s**).',
      markCode: 'G1 (2 pts)',
      rationale:
        'L’accord du participe passé avec *avoir* quand le COD est avant le verbe est l’objet explicite de Grammaire en contexte 5.1 (p. 264).',
    },
    {
      stepNumber: 2,
      title: 'Introduire la concession avec « Bien que + subjonctif » (vs « Malgré + nom »)',
      workingMarkdown:
        '*« **Bien que** les initiatives individuelles que les citoyens **ont prises** **soient** louables… »* (verbe *être* au subjonctif présent **soient**).\n*Variante nominale équivalente :* *« **Malgré** les initiatives individuelles… »* (jamais *« malgré que »* !).',
      markCode: 'G2 (2 pts)',
      rationale:
        'Distinguer *bien que + subjonctif* de *malgré + groupe nominal* élimine l’erreur IB la plus fréquente en expression écrite.',
    },
    {
      stepNumber: 3,
      title: 'Relier l’argument politique par un pronom relatif composé (Unité 5.3)',
      workingMarkdown:
        'On dit *« faire face **à** des défis »* (masculin pluriel) → préposition *à* + *lesquels* = **auxquels** :\n*« … les défis climatiques et sociaux **auxquels** nos sociétés **se sont confrontées** demeurent considérables. »*',
      markCode: 'G3 (2 pts)',
      rationale:
        'Les pronoms relatifs composés (*auquel, auxquels, à laquelle, auxquelles, dans lequel, sans lesquels*) sont obligatoires après une préposition lorsque l’antécédent est une chose.',
    },
    {
      stepNumber: 4,
      title: 'Frapper le lecteur par la mise en relief (Unité 5.4, p. 313)',
      workingMarkdown:
        'Utiliser *Ce dont… c’est…* (car on dit *avoir besoin **de** quelque chose*) et *Ce qui… c’est…* :\n*« En somme, **ce dont** nous avons le plus besoin aujourd’hui, **c’est** d’une véritable volonté politique ; car **ce qui** menace l’avenir des jeunes générations, **c’est** l’inaction collective. »*',
      markCode: 'G4 (2 pts)',
      rationale:
        'La mise en relief (*Ce qui / Ce que / Ce dont + verbe, c’est…*) structure la thèse avec autorité en conclusion ou en introduction.',
    },
  ],
  finalAnswerMarkdown:
    '« **Bien que** les initiatives écologiques que les citoyens **ont prises** **soient** précieuses, les défis climatiques et inégalités **auxquels** la planète fait face exigent des lois ambitieuses. Face aux jeunes qui **se sont mobilisés** pour leurs droits, **ce dont** notre époque a le plus besoin, **c’est** de courage politique ; car **ce qui** compromet notre avenir commun, **c’est** l’inaction. »',
  commonTrapMarkdown:
    'Attention à trois pièges classiques : (1) écrire *« malgré qu’il pleut »* au lieu de *« malgré la pluie »* ou *« bien qu’il pleuve »* ; (2) oublier la contraction *à + lesquels = **auxquels*** (ou *de + lesquels = **desquels***) ; (3) confondre *Ce que* (COD) et *Ce dont* (verbe construit avec *de* : *parler de, avoir besoin de, avoir peur de*).',
};

export const FR_V3_T5_GRAMMAR_MATRIX: ConceptComparisonMatrixSpec = {
  type: 'comparison_matrix',
  id: 'fr-v3-t5-grammar-matrix',
  title: 'Synthèse rhétorique & grammaticale du Thème 5 (5.1–5.4)',
  caption:
    'Distinctions exactes du Chapitre 5 : stratégie argumentative (*Convaincre vs Persuader*), expressions de temps, accords complexes et mise en relief.',
  columns: [
    'Concept ou Règle (Ch. 5)',
    'Mécanisme exact',
    'Exemples calibrés IB (Thème 5)',
    'Critère évalué & Alerte',
  ],
  rows: [
    {
      criterion: 'Convaincre vs Persuader (5.1, p. 310)',
      cells: [
        '**Convaincre :** fait appel à la raison, à l’analyse logique, aux faits et statistiques.\n**Persuader :** agit sur la sensibilité, les émotions, les images et l’interpellation directe.',
        '**Convaincre :** *« Selon l’ONU, 60 % des espèces sont menacées… »*\n**Persuader :** *« Imaginez un monde silencieux sans oiseaux, laissé en héritage à nos enfants ! »*',
        'Un grand Discours (6A) ou Éditorial (8A) combine d’abord les faits (**convaincre**) puis touche les cœurs (**persuader**).',
      ],
      ibExamTip: 'Ne basez jamais toute une Dissertation uniquement sur l’émotion : la Dissertation exige avant tout de convaincre.',
    },
    {
      criterion: 'Opposition vs Concession (5.1)',
      cells: [
        '**Opposition simple :** *mais, en revanche, par contre, alors que, tandis que* (+ indicatif).\n**Concession :** *bien que / quoique* (+ subjonctif), *malgré / en dépit de* (+ nom), *cependant / toutefois / néanmoins*.',
        '« **Alors que** certains États interdisent l’euthanasie, la Belgique l’encadre par la loi ; **bien que** le débat **reste** vif, le dialogue médical progresse. »',
        'Ne confondez pas *alors que* (+ indicatif) et *bien que* (+ subjonctif) !',
      ],
      ibExamTip: 'Utilisez *Certes… toutefois / néanmoins* pour nuancer une antithèse sans vous contredire.',
    },
    {
      criterion: 'Expressions de temps (5.2)',
      cells: [
        '**depuis** (action commencée dans le passé qui dure encore + présent) · **pendant** (durée achevée) · **pour** (durée prévue) · **il y a** (moment passé) · **dans** (moment futur) · **en** (temps nécessaire).',
        '« **Depuis** 1948, la DUDH protège nos droits ; elle a été rédigée **en** plusieurs mois et reste d’actualité **pour** les générations futures. »',
        'Piège anglophone majeur : ne traduisez pas *« for 3 years »* par *pour* quand l’action dure toujours — employez **depuis** + présent !',
      ],
      ibExamTip: 'Relisez chaque marqueur temporel en Paper 1 (surtout *depuis* vs *pendant* vs *il y a*).',
    },
    {
      criterion: 'Accord du participe passé (5.1)',
      cells: [
        '1) **Être :** accord avec le sujet.\n2) **Avoir :** accord uniquement avec le **COD placé avant** (*que, la, les, combien de…*).\n3) **Pronominaux :** pas d’accord si le pronom réfléchi est **COI** (*elles se sont **parlé***, *ils se sont **écrit***).',
        '« Les lois **qu’ils ont votées** » (COD avant = *lois* → -ées) vs « Elles **se sont succédé** » (succéder *à* quelqu’un → invariable !).',
        'Attention : *en* COD reste invariable (*Des preuves, j’en ai **trouvé***).',
      ],
      ibExamTip: 'Vérifier systématiquement les accords après *que* relatif rapporte de précieux points en Critère A.',
    },
    {
      criterion: 'Mise en relief (5.4, p. 313)',
      cells: [
        '**Ce qui** (+ verbe) …, **c’est** … (sujet)\n**Ce que** (+ sujet + verbe) …, **c’est** … (COD)\n**Ce dont** (+ sujet + verbe avec *de*) …, **c’est** …',
        '« **Ce qui** m’inquiète, **c’est** la fracture numérique ; **ce que** la société doit garantir, **c’est** l’égalité ; **ce dont** nous doutons, **c’est** de l’efficacité d’une interdiction brutale. »',
        'Lorsque le groupe mis en relief est pluriel, on peut écrire *« ce sont + nom pluriel »* (*Ce qui compte, ce sont nos actes*).',
      ],
      ibExamTip: 'Les expressions p. 313 (*Ce qui est grave, c’est…*) fonctionnent aussi brillamment à l’Oral individuel pour gagner du temps de réflexion !',
    },
  ],
};
