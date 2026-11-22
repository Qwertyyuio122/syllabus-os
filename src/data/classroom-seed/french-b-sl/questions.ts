import type { ClassroomSeedQuestion } from '../types';

export const FRENCH_QUESTIONS: ClassroomSeedQuestion[] = [
  // ==========================================================================
  // PRESERVED V2 QUESTIONS (8 questions — exact questionMarkdown retained)
  // ==========================================================================
  {
    topicCode: 'T5.2',
    paperType: 'Paper 1 (Production écrite)',
    commandTerm: 'Rédiger',
    difficulty: 'Standard IB',
    maxMarks: 30,
    stimulusMarkdown:
      'Thème : **Le partage de la planète** — *À quels enjeux environnementaux faisons-nous face ?* Dans votre lycée, les bacs de recyclage sont mal utilisés et le gaspillage alimentaire augmente.',
    questionMarkdown:
      'Rédigez un **article pour le journal scolaire** OU une **lettre officielle adressée à la direction** (250–400 mots) proposant des mesures réalistes pour réduire l’empreinte écologique de l’école.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Critère A — Langue (12 pts) : lexique écologique précis (*tri sélectif, gaspillage alimentaire, compostage, empreinte carbone*), subjonctif après *il faut que / afin que*, connecteurs nuancés.',
          marks: 12,
          keywords: ['tri sélectif', 'afin que', 'subjonctif', 'empreinte écologique'],
        },
        {
          code: 'B1',
          criterion:
            'Critère B — Message (12 pts) : couvre les DEUX volets (bacs de recyclage + cantine/gaspillage) avec propositions réalistes et structurées.',
          marks: 12,
          keywords: ['recyclage', 'gaspillage', 'propositions'],
        },
        {
          code: 'C1',
          criterion:
            'Critère C — Conception conceptuelle (6 pts) : Article (titre accrocheur, chapeau, intertitres, signature) OU Lettre officielle (en-tête, date, Objet, *vous*, formule soutenue).',
          marks: 6,
          keywords: ['Objet', 'chapeau', 'veuillez agréer'],
        },
      ],
      model_answer:
        'Plan modèle (Lettre officielle, ~330 mots) :\n- En-tête + Objet : *Réduction du gaspillage alimentaire et amélioration du tri sélectif au lycée*\n- Paragraphe 1 (Constat) : *Madame la Directrice, bien que notre lycée dispose déjà de bacs de recyclage, leur mauvaise utilisation compromet nos efforts collectifs.*\n- Paragraphe 2 (Mesures tri + cantine) : signalétique colorée au-dessus des poubelles, brigades étudiantes CAS, portions modulables et pesée hebdomadaire des déchets à la cafétéria.\n- Clôture : *Dans l’attente d’une réponse favorable, je vous prie d’agréer, Madame la Directrice, l’expression de mes salutations distinguées.*',
      examiner_notes:
        'Éviter d’oublier l’un des deux problèmes du stimulus (bacs OU cantine) : un sujet partiel plafonne généralement le Critère B à 7–8/12.',
    },
    sourceFileNames: ['plan du cours IB 11e 2026.pdf', 'Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T3.3',
    paperType: 'Paper 1 (Production écrite)',
    commandTerm: 'Rédiger',
    difficulty: 'Standard IB',
    maxMarks: 30,
    stimulusMarkdown:
      'Thème : **L’ingéniosité humaine** — *Comment les arts peuvent-ils nous aider à comprendre une culture ?* Vous venez de voir un film ou une exposition francophone.',
    questionMarkdown:
      'Rédigez une **entrée de blogue culturel** destinée aux jeunes francophones (250–400 mots) expliquant ce que cette œuvre révèle sur les valeurs de la culture présentée.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Critère A — Langue (12 pts) : alternance passé composé/imparfait pour la visite et présent analytique pour la portée culturelle, adjectifs évocateurs accordés.',
          marks: 12,
          keywords: ['passé composé', 'imparfait', 'patrimoine'],
        },
        {
          code: 'B1',
          criterion:
            'Critère B — Message (12 pts) : relie des choix artistiques précis (musique, mise en scène, langue) aux valeurs et tensions d’une culture francophone.',
          marks: 12,
          keywords: ['valeurs', 'francophone', 'esthétique'],
        },
        {
          code: 'C1',
          criterion:
            'Critère C — Conventions du blogue (6 pts) : titre captivant, date/pseudo, ton personnel et complice (*vous* amical), question finale invitant aux commentaires.',
          marks: 6,
          keywords: ['commentaires', 'titre', 'pseudo'],
        },
      ],
      model_answer:
        '**Titre :** *Quand le street art réveille la mémoire : mon choc devant les portraits de C215*\n*Publié le 14 novembre 2026 par Amélie_Culture*\n\nSamedi dernier, alors qu’il pleuvait sur le quartier, j’ai poussé la porte d’une galerie consacrée aux pochoirs rwandais de C215. Plutôt que de rester enfermé dans un musée élitiste, l’artiste rend hommage aux *Justes* directement sur les murs de la cité. Et vous, quelle œuvre vous a récemment fait changer de regard sur une histoire méconnue ? Laissez vos avis ci-dessous !',
      examiner_notes:
        'Un blogue ne doit ressembler ni à un rapport froid ni à une dissertation sans interaction avec le lecteur.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T4.2',
    paperType: 'Paper 1 (Production écrite)',
    commandTerm: 'Comparer',
    difficulty: 'Foundation',
    maxMarks: 6,
    questionMarkdown:
      'Expliquez comment se distinguent **l’éditorial**, **le courrier des lecteurs**, **le discours** et **le rapport formel** quant au registre, à l’auteur·rice et à la mise en page (Cambridge Ch. 6 pp. 330–364).',
    markscheme: {
      marking_points: [
        {
          code: 'E1',
          criterion:
            'Éditorial (8A) : voix de la rédaction ou du rédacteur en chef (*nous*), prise de position argumentée sur l’actualité dans un style courant à soutenu.',
          marks: 2,
        },
        {
          code: 'C1',
          criterion:
            'Courrier des lecteurs (12A) : réaction citoyenne courte adressée à la rédaction à propos d’un article récent, formule finale simple + nom/ville.',
          marks: 2,
        },
        {
          code: 'D1',
          criterion:
            'Discours (6A/6B) vs Rapport (15A) : Discours = oralité rythmée, apostrophes, anaphores ; Rapport = impartialité factuelle, sections titrées et recommandations.',
          marks: 2,
        },
      ],
      model_answer:
        'L’éditorial défend l’opinion collective d’un journal (*nous*), le courrier des lecteurs répond brièvement à un article antérieur, le discours engage un auditoire par l’apostrophe et le rythme oratoire, tandis que le rapport présente objectivement constat, analyse chiffrée et recommandations sous intertitres numérotés.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T1.1',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Identifier',
    difficulty: 'Standard IB',
    maxMarks: 6,
    stimulusMarkdown:
      'Extrait — *Identités* : « Grandir entre deux langues n’est pas toujours un fardeau : si certains jeunes hésitent parfois entre traditions familiales et codes de leurs pairs à l’école, beaucoup transforment ce métissage linguistique en véritable atout professionnel et culturel. »',
    questionMarkdown:
      '(a) Relevez **une** difficulté associée au bilinguisme des jeunes. [2]\n(b) Relevez **deux** avantages mentionnés. [2]\n(c) Identifiez une expression prouvant une perspective **optimiste et nuancée**. [2]',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion: '(a) Hésitation / tiraillement entre traditions familiales et codes scolaires des pairs.',
          marks: 2,
        },
        {
          code: 'A2',
          criterion: '(b) Atout professionnel [1] ET atout culturel [1].',
          marks: 2,
        },
        {
          code: 'M1',
          criterion: '(c) Expression optimiste/nuancée : « véritable atout » ou « n’est pas toujours un fardeau ».',
          marks: 2,
        },
      ],
      model_answer:
        '(a) L’hésitation entre traditions familiales et codes de leurs pairs ; (b) Un atout professionnel et un atout culturel ; (c) « véritable atout » (précédé de la nuance « n’est pas toujours un fardeau »).',
    },
    sourceFileNames: ['plan du cours IB 11e 2026.pdf'],
  },
  {
    topicCode: 'EXAM.3',
    paperType: 'Oral individuel (IA SL)',
    commandTerm: 'Présenter',
    difficulty: 'Foundation',
    maxMarks: 6,
    questionMarkdown:
      'Décrivez les **3 phases** exactes de l’**Oral individuel** de Français B NM (temps de préparation, notes permises, durée et passage d’un thème à l’autre).',
    markscheme: {
      marking_points: [
        {
          code: 'P1',
          criterion:
            'Préparation (15 min) : choisir 1 des 2 stimuli visuels inédits et rédiger au plus 10 mots-clés brefs (aucune phrase complète).',
          marks: 2,
        },
        {
          code: 'P2',
          criterion:
            'Partie 1 — Présentation (3–4 min) + Discussion de suivi (4–5 min) : brève description, message implicite, ancrage culturel francophone.',
          marks: 2,
        },
        {
          code: 'P3',
          criterion:
            'Partie 2 — Conversation générale (5–6 min) : porte obligatoirement sur un SECOND thème prescrit distinct de celui du stimulus.',
          marks: 2,
        },
      ],
      model_answer:
        '1) 15 min de préparation (1 photo choisie sur 2, maximum 10 mots-clés). 2) Présentation (3–4 min) puis discussion de suivi sur le même thème francophone (4–5 min). 3) Conversation générale sur un deuxième thème prescrit différent (5–6 min).',
    },
    sourceFileNames: ['plan du cours IB 11e 2026.pdf'],
  },
  {
    topicCode: 'T4.3',
    paperType: 'Paper 1 (Production écrite)',
    commandTerm: 'Rédiger',
    difficulty: 'Standard IB',
    maxMarks: 12,
    stimulusMarkdown:
      'Thème : **L’organisation sociale** — *Quels sont les liens avec les gens que nous côtoyons ?* Vous proposez à votre mairie/école de lancer un centre intergénérationnel.',
    questionMarkdown:
      'Rédigez le **plan détaillé d’un Rapport ou d’une Proposition formelle** (titre, objet, 3 sections, registre soutenu et formule finale adaptée) selon le Chapitre 6 de *Le monde en français*.',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion: 'En-tête/Titre officiel + Objet précis + ton neutre et institutionnel (*nous* ou 3e personne).',
          marks: 4,
        },
        {
          code: 'B1',
          criterion:
            'Trois sections logiques : I. Constat de l’isolement intergénérationnel ; II. Activités proposées ; III. Logistique et retombées mutuelles.',
          marks: 4,
        },
        {
          code: 'C1',
          criterion: 'Connecteurs soutenus (*En premier lieu, Par conséquent*) et recommandations finales précises sans familiarité.',
          marks: 4,
        },
      ],
      model_answer:
        'Titre : *Proposition de création d’un centre intergénérationnel municipal*\nI. Constat : isolement croissant des aînés et besoin d’entraide scolaire chez les jeunes.\nII. Programme concret : ateliers numériques hebdomadaires et tutorat partagé.\nIII. Financement et retombées : convention lycée-mairie et renforcement du lien social.\nConclusion : *Nous recommandons l’ouverture d’une phase pilote dès septembre.*',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T2.4',
    paperType: 'Paper 1 (Production écrite)',
    commandTerm: 'Expliquer',
    difficulty: 'Foundation',
    maxMarks: 4,
    questionMarkdown:
      'Expliquez quand employer le **passé composé**, **l’imparfait** et le **subjonctif présent** pour raconter une expérience personnelle puis en tirer une leçon culturelle (Unité 2).',
    markscheme: {
      marking_points: [
        {
          code: 'T1',
          criterion:
            'Imparfait = cadre, description, habitude révolue (*Il neigeait, nous marchions chaque matin*) ; Passé composé = actions ponctuelles achevées (*Je suis arrivé, j’ai compris*).',
          marks: 2,
        },
        {
          code: 'T2',
          criterion:
            'Subjonctif présent = nécessité, souhait ou sentiment personnel face à la leçon retenue (*Il est essentiel que chacun découvre…*).',
          marks: 2,
        },
      ],
      model_answer:
        'On emploie l’imparfait pour poser le décor et les habitudes passées, le passé composé pour les événements précis qui font avancer le récit, et le subjonctif après des expressions de nécessité ou d’émotion lorsque l’on formule la leçon tirée de l’expérience.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'EXAM.2',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Décrire',
    difficulty: 'Foundation',
    maxMarks: 4,
    questionMarkdown:
      'Quelles stratégies spécifiques permettent de réussir les questions de type **Vrai/Faux avec justification** et **QCM à choix multiple** dans l’Épreuve 2 de Français B NM ?',
    markscheme: {
      marking_points: [
        {
          code: 'S1',
          criterion:
            'Vrai/Faux avec justification (compréhension écrite) : recopier strictement la citation exacte du passage prouvant la réponse, sans paraphraser hors-sujet.',
          marks: 2,
        },
        {
          code: 'S2',
          criterion:
            'Compréhension orale (~45 min, 2 écoutes) : repérer les négations, restrictions (*ne… guère*) et marqueurs d’opposition (*malgré, pourtant, contrairement à*) qui signalent les distracteurs.',
          marks: 2,
        },
      ],
      model_answer:
        'En lecture, il faut recopier exactement la phrase ou le segment exact qui prouve le Vrai ou le Faux (le point n’est accordé que si case ET justification exacte correspondent). À l’écoute, les connecteurs d’opposition et les phrases négatives neutralisent souvent le premier mot-clé entendu comme leurre.',
    },
    sourceFileNames: ['plan du cours IB 11e 2026.pdf'],
  },

  // ==========================================================================
  // NEW PAPER 1 PROMPTS (14 questions: 12 3-format prompts + 2 Langue/Registre)
  // ==========================================================================
  {
    topicCode: 'T1.2',
    paperType: 'Paper 1 (Production écrite)',
    commandTerm: 'Rédiger',
    difficulty: 'Standard IB',
    maxMarks: 30,
    stimulusMarkdown:
      'Un grand quotidien francophone vient de publier un éditorial affirmant que les jeunes adultes qui choisissent le minimalisme ou la *vanlife* « fuient simplement leurs responsabilités ». Vous souhaitez réagir en tant que jeune citoyen(ne) attaché(e) à d’autres modes de vie.',
    questionMarkdown:
      'Rédigez un texte (250–400 mots) dans lequel vous contestez ces préjugés en expliquant les valeurs positives (écologie, liberté, lien humain) d’un mode de vie alternatif. Choisissez le format le plus adapté parmi :\n- **Courrier des lecteurs**\n- **Tract**\n- **Blogue personnel**',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Critère A — Langue (12 pts) : registre poli et articulé, opposition/concession (*Certes… toutefois ; Bien que + subjonctif*), lexique du mode de vie (*sobriété, consommation responsable, stéréotype*).',
          marks: 12,
          keywords: ['Certes', 'Bien que', 'stéréotype', 'sobriété'],
        },
        {
          code: 'B1',
          criterion:
            'Critère B — Message (12 pts) : réfute explicitement l’accusation de « fuite » ET explique au moins deux valeurs positives concrètes d’un mode de vie alternatif.',
          marks: 12,
          keywords: ['réfuter', 'écologie', 'valeurs', 'responsabilité'],
        },
        {
          code: 'C1',
          criterion:
            'Critère C — Type de texte (6 pts) : **Courrier des lecteurs** est optimal (rubrique, référence à l’éditorial récent, vouvoiement ferme, signature + ville). Le *Blogue* peut fonctionner partiellement s’il réagit à l’article ; le *Tract* est mal adapté pour répondre à un journal.',
          marks: 6,
          keywords: ['Monsieur le Rédacteur', 'Courrier des lecteurs', 'signature'],
        },
      ],
      model_answer:
        '**Format recommandé : Courrier des lecteurs (Fiche 12A)**\n\n**Rubrique : Courrier des lecteurs**\nMonsieur le Rédacteur en chef,\n\nJ’ai lu avec intérêt votre éditorial du 8 octobre qualifiant les adeptes du minimalisme de jeunes « fuyant leurs responsabilités ». Si je comprends votre inquiétude face aux mutations sociales, il me semble toutefois réducteur de confondre simplicité volontaire et paresse.\n\nEn réalité, bien que la *vanlife* ou la vie en éco-hameau bousculent le modèle traditionnel du logement, ces choix témoignent d’une profonde conscience écologique. Réduire son empreinte carbone, réparer au lieu de jeter et privilégier le partage communautaire exigent au contraire une grande discipline quotidienne.\n\nJ’espère que votre journal donnera prochainement la parole à ces jeunes bâtisseurs d’avenir.\n\n*Léonard Tremblay, Sherbrooke*',
      examiner_notes:
        'Le Tract est un piège classique ici : on n’envoie pas un tract militant à la rédaction d’un quotidien pour commenter un éditorial précis.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T1.3',
    paperType: 'Paper 1 (Production écrite)',
    commandTerm: 'Rédiger',
    difficulty: 'Standard IB',
    maxMarks: 30,
    stimulusMarkdown:
      'À l’occasion de la Journée internationale de la Francophonie dans votre lycée, vous êtes invité(e) à réfléchir au thème : *« Comment notre langue façonne-t-elle notre identité ? »* et à défendre la diversité des accents francophones (Québec, Maghreb, Afrique de l’Ouest, Belgique, Suisse).',
    questionMarkdown:
      'Vous souhaitez sensibiliser l’ensemble des élèves et des enseignants lors de la cérémonie d’ouverture (250–400 mots). Choisissez le type de texte le plus approprié :\n- **Discours**\n- **Journal intime**\n- **Rapport formel**',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Critère A — Langue (12 pts) : rhétorique orale dynamique (*nous* inclusif, interrogations rhétoriques, anaphores), lexique de la francophonie (*pluralisme, héritage, glottophobie, métissage*).',
          marks: 12,
          keywords: ['glottophobie', 'francophonie', 'nous', 'identité'],
        },
        {
          code: 'B1',
          criterion:
            'Critère B — Message (12 pts) : montre le lien intime entre langue et identité ET valorise explicitement au moins deux variétés régionales francophones.',
          marks: 12,
          keywords: ['Québec', 'Maghreb', 'Sénégal', 'diversité linguistique'],
        },
        {
          code: 'C1',
          criterion:
            'Critère C — Type de texte (6 pts) : **Discours** est le seul format naturel devant une assemblée scolaire (apostrophe *Chers camarades, chers professeurs*, rythme oral, remerciement final). *Journal intime* = privé (hors cible) ; *Rapport* = trop administratif pour une cérémonie.',
          marks: 6,
          keywords: ['Chers camarades', 'Discours', 'Je vous remercie'],
        },
      ],
      model_answer:
        '**Format recommandé : Discours (Fiche 6B / p. 342)**\n\nMonsieur le Proviseur, chers professeurs, chers camarades,\n\nAvez-vous déjà remarqué à quel point un mot ou un accent trahit immédiatement notre histoire avant même que nous ayons fini notre phrase ? Aujourd’hui, à l’occasion de la Journée de la Francophonie, célébrons une évidence : la langue française n’appartient à aucune capitale unique.\n\nQu’elle résonne avec la chaleur des expressions québécoises, la poésie du Maghreb ou la vitalité de Dakar et de Bruxelles, chaque variété enrichit notre patrimoine commun. Combattre la moquerie face aux accents — ce que l’on nomme la glottophobie —, c’est reconnaître la dignité de chaque histoire familiale.\n\nParlons donc sans complexe, écoutons-nous avec curiosité, et faisons vivre ensemble un français ouvert sur le monde. Je vous remercie de votre attention.',
      examiner_notes:
        'Critère C exige de maintenir le contact direct avec l’auditoire du début à la fin du discours (apostrophes, questions rhétoriques, impératif en « nous »).',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T1.5',
    paperType: 'Paper 1 (Production écrite)',
    commandTerm: 'Rédiger',
    difficulty: 'Standard IB',
    maxMarks: 30,
    stimulusMarkdown:
      'Votre comité élève a constaté que le manque de sommeil, la pression des notes et l’usage nocturne des écrans fragilisent la santé mentale des lycéens de 11e et 12e années.',
    questionMarkdown:
      'Présentez officiellement au conseil d’administration du lycée un projet concret combinant ateliers de bien-être, espaces sans écran et réaménagement des évaluations (250–400 mots). Choisissez :\n- **Proposition formelle**\n- **Critique de film**\n- **Courriel amical**',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Critère A — Langue (12 pts) : registre soutenu constant (*vous*), conditionnel d’atténuation (*permettrait, favoriserait*), subjonctif (*il serait souhaitable que*).',
          marks: 12,
          keywords: ['permettrait', 'bien-être', 'soutenu', 'sommeil'],
        },
        {
          code: 'B1',
          criterion:
            'Critère B — Message (12 pts) : expose le constat (sommeil/écrans/stress) ET détaille des solutions pratiques réalisables avec leurs bénéfices scolaires.',
          marks: 12,
          keywords: ['ateliers', 'sans écran', 'constat', 'bénéfices'],
        },
        {
          code: 'C1',
          criterion:
            'Critère C — Type de texte (6 pts) : **Proposition formelle** (en-tête, Objet, sections titrées Constat / Mesures / Retombées, formule finale institutionnelle). Les deux autres choix sont totalement inappropriés.',
          marks: 6,
          keywords: ['Objet', 'sections', 'recommandation'],
        },
      ],
      model_answer:
        '**Format recommandé : Proposition formelle (Fiche 14A)**\n\n**À l’attention des membres du Conseil d’administration**\n**Objet : Proposition d’un plan annuel « Sérénité et équilibre numérique »**\n\n### I. Constat préoccupant\nUne majorité d’élèves du programme IB dors moins de sept heures par nuit en raison du stress évaluatif et de la surexposition tardive aux écrans.\n\n### II. Mesures proposées\n1. Création d’un **espace calme sans téléphone** à la bibliothèque sur l’heure du dîner.\n2. Ateliers mensuels de gestion du stress animés par l’infirmerie scolaire.\n3. Calendrier coordonné évitant trois devoirs surveillés le même jour.\n\n### III. Retombées attendues\nUn climat scolaire apaisé améliorerait durablement la concentration et les résultats académiques. Nous sollicitons votre accord pour lancer ce dispositif dès le prochain trimestre.',
      examiner_notes:
        'Une Proposition formelle doit convaincre un décideur : évitez le ton plaintif et privilégiez les solutions chiffrées ou planifiées.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf', 'plan du cours IB 11e 2026.pdf'],
  },
  {
    topicCode: 'T2.1',
    paperType: 'Paper 1 (Production écrite)',
    commandTerm: 'Rédiger',
    difficulty: 'Standard IB',
    maxMarks: 30,
    stimulusMarkdown:
      'Votre office de tourisme régional souhaite promouvoir les vacances responsables et la découverte du patrimoine local (*staycation*, circuits à vélo, hébergements durables) face aux dégâts du tourisme de masse.',
    questionMarkdown:
      'Rédigez un document informatif et incitatif destiné aux familles et aux jeunes voyageurs francophones (250–400 mots). Choisissez :\n- **Brochure / Dépliant**\n- **Lettre de protestation**\n- **Journal intime**',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Critère A — Langue (12 pts) : verbes d’action à l’impératif (*Découvrez, privilégiez, soutenez*), adjectifs mélioratifs précis, registre courant engageant (*vous*).',
          marks: 12,
          keywords: ['Découvrez', 'tourisme durable', 'patrimoine', 'écotourisme'],
        },
        {
          code: 'B1',
          criterion:
            'Critère B — Message (12 pts) : critique brièvement les excès du tourisme de masse ET détaille au moins trois activités ou conseils pratiques de voyage responsable.',
          marks: 12,
          keywords: ['vélo', 'artisans locaux', 'empreinte', 'hébergement'],
        },
        {
          code: 'C1',
          criterion:
            'Critère C — Type de texte (6 pts) : **Brochure / Dépliant** (titre accrocheur, slogan, rubriques à puces aérées, encadré « Infos pratiques » avec horaires/tarifs/site).',
          marks: 6,
          keywords: ['slogan', 'rubriques', 'Infos pratiques'],
        },
      ],
      model_answer:
        '**Format recommandé : Brochure / Dépliant (Fiche 3A)**\n\n### VOYAGER AUTREMENT : RECONNECTEZ-VOUS AU TERROIR !\n**Moins de kilomètres, plus d’authenticité.**\n\n#### Pourquoi renoncer au tourisme de masse ?\nLes plages saturées et les vols courts pèsent lourdement sur nos écosystèmes. Découvrez à deux pas de chez vous des trésors insoupçonnés.\n\n#### Nos 3 expériences durables\n- **Véloroute des châteaux et villages :** 80 km de pistes sécurisées et haltes chez des maraîchers biologiques.\n- **Nuits insolites éco-certifiées :** gîtes solaires en bois local.\n- **Rencontres artisanales :** ateliers de poterie et gastronomie de saison.\n\n**Informations pratiques :** Départs chaque week-end d’avril à octobre · Pass Jeunes 15 € · *www.tourisme-vert-region.fr*',
      examiner_notes:
        'Une brochure écrite comme un bloc de prose continu perd immédiatement des points en Critère C.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T2.4',
    paperType: 'Paper 1 (Production écrite)',
    commandTerm: 'Rédiger',
    difficulty: 'Standard IB',
    maxMarks: 30,
    stimulusMarkdown:
      'En lisant les témoignages sur l’exil et l’intégration dans le manuel (*Le monde en français*, Unité 2.4), vous vous mettez à la place d’un(e) étudiant(e) francophone venant d’arriver dans une nouvelle ville pour ses études.',
    questionMarkdown:
      'Exprimez de façon intime et authentique le choc culturel, le sentiment de déracinement des premiers jours puis l’espoir né d’une rencontre inattendue (250–400 mots). Choisissez :\n- **Page de journal intime**\n- **Tract militant**\n- **Rapport d’enquête**',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Critère A — Langue (12 pts) : maîtrise de l’imparfait (état d’âme, décor) et du passé composé (rencontre décisive), lexique émotionnel nuancé (*nostalgie, déracinement, apaisement*).',
          marks: 12,
          keywords: ['nostalgie', 'imparfait', 'passé composé', 'déracinement'],
        },
        {
          code: 'B1',
          criterion:
            'Critère B — Message (12 pts) : explore le dépaysement linguistique/culturel initial PUIS montre l’évolution psychologique grâce à une rencontre humaine.',
          marks: 12,
          keywords: ['choc culturel', 'rencontre', 'intégration'],
        },
        {
          code: 'C1',
          criterion:
            'Critère C — Conventions du journal intime (6 pts) : date en haut à droite, apostrophe affective (*Cher journal*), style introspectif à la 1re personne (questions intérieures, rythme personnel).',
          marks: 6,
          keywords: ['Cher journal', 'date', 'introspection'],
        },
      ],
      model_answer:
        '**Format recommandé : Page de journal intime (Fiche 11A)**\n\n*Montréal, le 19 septembre 2026*\n\nCher journal,\n\nIl pleuvait sans interruption ce matin lorsque j’ai pris le métro pour la première fois, le cœur serré. Depuis mon arrivée de Rabat il y a dix jours, tout ici me paraît à la fois proche et étrange : on parle français, certes, mais les expressions fusent trop vite et le froid d’automne me rappelle douloureusement le soleil de ma famille.\n\nPourtant, cet après-midi, tout a basculé à la cafétéria universitaire. Une camarade québécoise, Léa, a entendu mon accent et m’a spontanément invité à partager sa table pour m’expliquer le fonctionnement du club de théâtre. Pour la première fois, je ne me suis plus senti invisible. Peut-être est-ce ainsi que commence une seconde maison…\n\nÀ demain pour de nouvelles découvertes.',
      examiner_notes:
        'Ne jamais utiliser le ton neutre d’un essai scolaire dans un journal intime : l’examinateur attend émotions, doutes et introspection sincère.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T2.5',
    paperType: 'Paper 1 (Production écrite)',
    commandTerm: 'Rédiger',
    difficulty: 'Standard IB',
    maxMarks: 30,
    stimulusMarkdown:
      'Vous venez de participer à une grande fête culturelle ou traditionnelle dans une région francophone (Fête de la Musique en France, Saint-Jean au Québec ou fête familiale de fin d’année).',
    questionMarkdown:
      'Racontez cette expérience vécue à un(e) ami(e) francophone en lui expliquant ce qui vous a surpris et pourquoi ce rite renforce la communauté (250–400 mots). Choisissez :\n- **Courriel personnel (amical)**\n- **Éditorial**\n- **Lettre officielle**',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Critère A — Langue (12 pts) : registre familier soigné / courant (*tu*), temps du récit (passé composé / imparfait / plus-que-parfait), connecteurs temporels (*d’abord, ensuite, soudain*).',
          marks: 12,
          keywords: ['tu', 'passé composé', 'imparfait', 'rite'],
        },
        {
          code: 'B1',
          criterion:
            'Critère B — Message (12 pts) : décrit vivement l’événement, exprime une surprise culturelle précise ET explique le sens social du rite.',
          marks: 12,
          keywords: ['surprise', 'tradition', 'communauté'],
        },
        {
          code: 'C1',
          criterion:
            'Critère C — Conventions du courriel personnel (6 pts) : De / À / Objet bref, salutation chaleureuse (*Salut Nadia,*), prise de nouvelles du destinataire, question finale amicale + signature.',
          marks: 6,
          keywords: ['Objet', 'Salut', 'Bises'],
        },
      ],
      model_answer:
        '**Format recommandé : Courriel personnel (Fiche 4A)**\n\n**De :** *lucas.dubois@courrier.fr*\n**À :** *camille.robitaille@mail.ca*\n**Objet :** Mon premier 21 juin à Lyon !\n\nSalut Camille !\n\nComment vas-tu depuis la fin des examens ? De mon côté, je t’écris encore tout émerveillé par ma toute première Fête de la Musique hier soir à Lyon !\n\nImagine des rues entières bloquées aux voitures où musiciens amateurs et professionnels jouaient gratuitement à chaque coin de place — du jazz manouche devant la boulangerie aux chœurs classiques sous les arcades. Ce qui m’a le plus surpris, c’est de voir des grands-parents danser à côté de lycéens sans aucune barrière. Au fond, cette fête prouve qu’un simple rendez-vous annuel suffit à transformer des passants pressés en véritables voisins.\n\nEt toi, as-tu déjà fêté la Saint-Jean à Québec cette semaine ? Écris-moi vite !\n\nAmitiés,\n*Lucas*',
      examiner_notes:
        'Attention en courriel amical : registre détendu ne veut pas dire fautes d’orthographe ni argot incompréhensible — gardez un français vivant mais grammaticalement irréprochable.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T3.1',
    paperType: 'Paper 1 (Production écrite)',
    commandTerm: 'Rédiger',
    difficulty: 'Standard IB',
    maxMarks: 30,
    stimulusMarkdown:
      'Suite aux progrès rapides de l’intelligence artificielle générative et des biotechnologies (OGM, édition génétique), un débat divise l’opinion publique entre optimisme scientifique et principe de précaution (Axel Kahn, *Le monde en français* p. 143).',
    questionMarkdown:
      'En tant que rédacteur en chef d’une revue étudiante, rédigez une prise de position analytique et nuancée répondant à la question : *« Tout ce qui est scientifiquement possible est-il moralement souhaitable ? »* (250–400 mots). Choisissez :\n- **Éditorial**\n- **Brochure commerciale**\n- **Courriel amical**',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Critère A — Langue (12 pts) : articulation logique soutenue (*En premier lieu, Néanmoins, Force est de constater que*), subjonctif après *Bien que / Il importe que*, lexique bioéthique.',
          marks: 12,
          keywords: ['principe de précaution', 'néanmoins', 'bioéthique', 'subjonctif'],
        },
        {
          code: 'B1',
          criterion:
            'Critère B — Message (12 pts) : pèse les promesses médicales/techniques ET la nécessité d’un encadrement éthique citoyen en distinguant savoir et morale.',
          marks: 12,
          keywords: ['progrès', 'éthique', 'citoyens', 'dérives'],
        },
        {
          code: 'C1',
          criterion:
            'Critère C — Conventions de l’éditorial (6 pts) : rubrique « Éditorial », titre interrogatif/incisif, emploi du *nous* éditorial engageant la revue, chute conclusive forte.',
          marks: 6,
          keywords: ['Éditorial', 'nous', 'La rédaction'],
        },
      ],
      model_answer:
        '**Format recommandé : Éditorial (Fiche 8A)**\n\n**ÉDITORIAL — Le progrès sans boussole éthique ?**\n\nChaque semaine apporte son lot d’annonces spectaculaires, de l’édition du génome humain aux algorithmes capables de rédiger des diagnostics médicaux en quelques secondes. Face à cette accélération, nous devons poser une question fondamentale : la faisabilité technique vaut-elle autorisation morale ?\n\nCertes, nul ne songerait à nier les avancées salvatrices de la recherche biomédicale. Toutefois, comme le rappelait le généticien Axel Kahn, la science dit ce qui est, jamais ce qui doit être. À défaut d’un encadrement démocratique transparent, le risque est immense de voir les intérêts financiers dicter nos choix humains.\n\nEn somme, défendre le principe de précaution ne signifie pas refuser l’avenir, mais exiger que l’ingéniosité reste au service de la dignité humaine.\n\n*La rédaction*',
      examiner_notes:
        'Un éditorial se distingue d’une dissertation scolaire pure par la voix collective du journal (*nous*, *nos lecteurs*) et une attaque journalistique vive.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T3.4',
    paperType: 'Paper 1 (Production écrite)',
    commandTerm: 'Rédiger',
    difficulty: 'Standard IB',
    maxMarks: 30,
    stimulusMarkdown:
      'À l’instar de Dany Laferrière dans *Le Regard* (p. 193), vous venez de voir un reportage télévisé sur un pays francophone ou une banlieue populaire qui ne montrait que des images de violence ou de pauvreté, ignorant totalement les étudiants, les artistes et la vie quotidienne ordinaire.',
    questionMarkdown:
      'Écrivez à la direction des programmes de la chaîne publique pour dénoncer ce regard réducteur et réclamer une information plus équilibrée (250–400 mots). Choisissez :\n- **Lettre officielle de protestation**\n- **Blogue personnel**\n- **Tract**',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Critère A — Langue (12 pts) : registre soutenu poli mais ferme (*vous*), subjonctif après jugement affectif (*Je trouve consternant que… ; Il est regrettable que…*), voix passive précise.',
          marks: 12,
          keywords: ['consternant que', 'stéréotypes', 'déontologie', 'vous'],
        },
        {
          code: 'B1',
          criterion:
            'Critère B — Message (12 pts) : cite précisément le reportage visé, explique en quoi il entretient des clichés et propose une couverture journalistique alternative constructive.',
          marks: 12,
          keywords: ['nuance', 'clichés', 'classe moyenne', 'reportages'],
        },
        {
          code: 'C1',
          criterion:
            'Critère C — Conventions de la lettre formelle (6 pts) : expéditeur/destinataire, lieu/date, Objet précis, formule d’appel officielle, salutations distinguées finales.',
          marks: 6,
          keywords: ['Objet', 'Madame la Directrice', 'salutations distinguées'],
        },
      ],
      model_answer:
        '**Format recommandé : Lettre officielle de protestation (p. 198)**\n\nLéo Marchand — Dakar, le 15 janvier 2027\nÀ l’attention de Madame la Directrice de l’Information\n**Objet : Reportage du 10 janvier sur la jeunesse sénégalaise**\n\nMadame la Directrice,\n\nFidèle téléspectateur de votre chaîne, j’ai suivi avec attention votre émission du 10 janvier dernier. Or, je trouve consternant qu’un média public réduise toute une société à des images misérabilistes de précarité, sans jamais filmer les universités, les librairies ou l’ingéniosité des jeunes entrepreneurs locaux.\n\nBien que les difficultés économiques existent, ce cadrage sélectif ne fait que renforcer des préjugés tenaces. En vertu de votre mission déontologique, j’espère donc que vos futures équipes privilégieront des reportages pluralistes.\n\nJe vous prie d’agréer, Madame la Directrice, l’expression de mes salutations distinguées.\n*Léo Marchand*',
      examiner_notes:
        'Attention à la colère mal maîtrisée : les formules familières (« votre émission était nulle ») font chuter Critères A et C.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T4.2',
    paperType: 'Paper 1 (Production écrite)',
    commandTerm: 'Rédiger',
    difficulty: 'Standard IB',
    maxMarks: 30,
    stimulusMarkdown:
      'Votre association scolaire *Voisins solidaires & Emmaüs Jeunes* veut recruter des lycéens pour deux actions concrètes : une collecte mensuelle de vêtements/objets à réparer et un programme d’aide aux personnes âgées isolées du quartier.',
    questionMarkdown:
      'Produisez un document court, très lisible et mobilisateur à distribuer à la sortie des cours pour inciter les élèves à s’engager dès ce week-end (250–400 mots). Choisissez :\n- **Tract militant / associatif**\n- **Entretien (Interview)**\n- **Dissertation académique**',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Critère A — Langue (12 pts) : phrases brèves et percutantes, impératif d’appel (*Agissez, rejoignez, consacrez*), présent de vérité générale, lexique de la solidarité.',
          marks: 12,
          keywords: ['Rejoignez', 'solidarité', 'isolement', 'bénévolat'],
        },
        {
          code: 'B1',
          criterion:
            'Critère B — Message (12 pts) : présente l’urgence sociale (isolement + gaspillage), détaille les DEUX actions et indique comment/quand s’inscrire.',
          marks: 12,
          keywords: ['collecte', 'aînés', 'inscription', 'quartier'],
        },
        {
          code: 'C1',
          criterion:
            'Critère C — Conventions du tract (6 pts) : gros titre slogan, question rhétorique d’accroche, blocs à puces très aérés (pas d’essai compact), date/lieu/contact en bas de page.',
          marks: 6,
          keywords: ['slogan', 'puces', 'Rendez-vous'],
        },
      ],
      model_answer:
        '**Format recommandé : Tract associatif (Fiche 16B)**\n\n### NE RESTEZ PAS SPECTATEURS : AGISSEZ POUR VOTRE QUARTIER !\n**2 heures par mois suffisent pour briser la solitude et limiter le gaspillage.**\n\nSaviez-vous que près d’un habitant âgé sur quatre souffre d’isolement dans notre commune alors que nos placards débordent d’objets inutilisés ?\n\n#### Deux gestes concrets dès samedi :\n- **Bric-à-brac solidaire Emmaüs :** apportez livres, vêtements propres ou appareils réparables dans le hall du lycée.\n- **Binômes Voisins solidaires :** accompagnez une personne âgée pour ses courses ou un atelier numérique.\n\n**Rejoignez la réunion d’accueil ce vendredi à 12 h 30 en salle B104 !** Contact : *solidaires.lycee@asso.org*',
      examiner_notes:
        'Beaucoup d’élèves rédigent un Tract comme une dissertation de 4 paragraphes compacts : il faut impérativement structurer en accroche + puces d’action + bloc contact.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T4.4',
    paperType: 'Paper 1 (Production écrite)',
    commandTerm: 'Rédiger',
    difficulty: 'Standard IB',
    maxMarks: 30,
    stimulusMarkdown:
      'Après plusieurs incidents liés au bizutage lors de l’accueil des nouveaux élèves de 9e/10e année et à des moqueries sur des groupes privés en ligne, votre journal lycéen enquête sur le climat scolaire et la protection juridique des mineurs.',
    questionMarkdown:
      'Vous avez mené une entrevue avec le conseiller principal d’éducation (ou psychologue scolaire) afin d’expliquer ce qu’interdit la loi, comment signaler les dérives (3020 / Pharos) et comment bâtir une intégration bienveillante (250–400 mots). Choisissez :\n- **Entretien (Interview écrite)**\n- **Page de journal intime**\n- **Brochure touristique**',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Critère A — Langue (12 pts) : questions formelles bien construites (inversion ou *est-ce que*), vouvoiement dans les échanges journalistiques, lexique juridique et civique précis.',
          marks: 12,
          keywords: ['cyberharcèlement', 'bizutage', 'consentement', 'signalement'],
        },
        {
          code: 'B1',
          criterion:
            'Critère B — Message (12 pts) : traite le volet légal (bizutage interdit même avec consentement, droit à l’image), les dispositifs d’aide (3020/Pharos) et les alternatives d’intégration.',
          marks: 12,
          keywords: ['Loi Royal', '3020', 'bienveillance'],
        },
        {
          code: 'C1',
          criterion:
            'Critère C — Conventions de l’entretien (6 pts) : titre d’article + chapeau présentant l’invité(e) + dialogue clair identifiant **Journaliste :** et **CPE :** (questions en gras) + brève conclusion.',
          marks: 6,
          keywords: ['chapeau', 'Journaliste', 'entretien'],
        },
      ],
      model_answer:
        '**Format recommandé : Entretien / Interview (Fiche 10A)**\n\n### « Aucune tradition ne justifie l’humiliation » — Rencontre avec Mme Pelletier, CPE\n*Face aux tensions de la rentrée, la conseillère principale d’éducation rappelle les limites posées par la loi et les alternatives positives d’accueil.*\n\n**Journaliste : Beaucoup d’élèves pensent que quelques défis d’intégration restent inoffensifs si tout le monde rit. Que dit réellement la loi ?**\n**Mme Pelletier :** Elle est très claire : depuis 1998, le bizutage est un délit passible de sanctions pénales, et le prétendu consentement de la victime ne l’excuse jamais.\n\n**Journaliste : Qu’en est-il des rumeurs ou photos humiliantes partagées sur les messageries ?**\n**Mme Pelletier :** Il s’agit de cyberharcèlement et d’atteinte au droit à l’image. Les victimes ou témoins doivent réagir sans tarder via le **3020** ou le portail **Pharos**, tandis que nous instaurerons dès octobre un parrainage sportif et culturel.',
      examiner_notes:
        'Un entretien réussi nécessite un véritable chapeau introductif de mise en contexte — commencer brutalement par « Question 1 : » pénalise le Critère C.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T5.1',
    paperType: 'Paper 1 (Production écrite)',
    commandTerm: 'Rédiger',
    difficulty: 'Standard IB',
    maxMarks: 30,
    stimulusMarkdown:
      'Votre municipalité hésite à financer de grandes pistes cyclables protégées et le concept de *ville du quart d’heure*, certains élus jugeant que l’écologie relève uniquement de la responsabilité individuelle des citoyens (tri, consommation).',
    questionMarkdown:
      'Rédigez un article de presse structuré pour un quotidien régional montrant pourquoi les écogestes quotidiens restent insuffisants sans aménagement urbain et volonté politique (250–400 mots). Choisissez :\n- **Article de presse**\n- **Courriel à un ami**\n- **Critique littéraire**',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Critère A — Langue (12 pts) : connecteurs concessifs (*Bien que les écogestes soient louables… ; En dépit des efforts individuels…*), lexique urbain/écologique précis.',
          marks: 12,
          keywords: ['Bien que', 'ville du quart d’heure', 'écogestes', 'transition'],
        },
        {
          code: 'B1',
          criterion:
            'Critère B — Message (12 pts) : reconnaît la valeur des gestes individuels tout en prouvant la nécessité des infrastructures publiques (transports, vélo, urbanisme).',
          marks: 12,
          keywords: ['infrastructures', 'pistes cyclables', 'politique publique'],
        },
        {
          code: 'C1',
          criterion:
            'Critère C — Conventions de l’article de presse (6 pts) : titre informatif fort, chapeau résumant l’angle, 2–3 intertitres, ton journalistique objectif ou analytique, signature/date.',
          marks: 6,
          keywords: ['chapeau', 'intertitres', 'journalistique'],
        },
      ],
      model_answer:
        '**Format recommandé : Article de presse (Fiche 1A)**\n\n### Climat : pourquoi trier ses déchets ne suffira plus sans la ville du quart d’heure\n*Alors que les citoyens multiplient les efforts quotidiens, les urbanistes rappellent que seule une réorganisation des transports et des quartiers permettra d’infléchir durablement nos émissions.*\n\n#### Des citoyens déjà mobilisés\nAchats en vrac, gourdes réutilisables, recyclage : les gestes individuels progressent partout. Pourtant, comme le soulignait le chroniqueur québécois Louis-Gilles Francœur, la crise climatique dépasse largement l’échelle domestique.\n\n#### L’urgence d’infrastructures accessibles\nComment renoncer à la voiture individuelle si aucune piste cyclable sécurisée ni ligne de bus fréquente ne relie les quartiers périphériques aux écoles ? La « ville du quart d’heure » offre précisément cette réponse politique en rapprochant commerces, services et emplois.\n\n*Par Claire Beaumont — Le 22 mars 2027*',
      examiner_notes:
        'N’oubliez jamais le chapeau (petit paragraphe en italique/gras sous le titre) ni les intertitres dans un Article de presse !',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T5.4',
    paperType: 'Paper 1 (Production écrite)',
    commandTerm: 'Rédiger',
    difficulty: 'HL Extension',
    maxMarks: 30,
    stimulusMarkdown:
      'Thème : **Partage de la planète — Quel dilemme !** (Ch. 5, pp. 311–329). Le parlement examine une réforme sur le don d’organes (consentement présumé sur le modèle belge *beldonor.be* vs consentement explicite) afin de réduire les listes d’attente hospitalières.',
    questionMarkdown:
      'Rédigez un texte argumenté pesant rigoureusement les arguments éthiques favorables et défavorables au consentement présumé avant de formuler une conclusion nuancée (250–400 mots). Choisissez :\n- **Dissertation / Essai argumentatif**\n- **Tract publicitaire**\n- **Journal intime**',
    markscheme: {
      marking_points: [
        {
          code: 'A1',
          criterion:
            'Critère A — Langue (12 pts) : registre soutenu, mise en relief (*Ce qui divise les législateurs, c’est…*), connecteurs d’équilibre (*D’une part… D’autre part ; Quant à ; En dernière analyse*), pronoms relatifs composés (*auquel / duquel*).',
          marks: 12,
          keywords: ['Ce qui', 'D’une part', 'auquel', 'soutenu'],
        },
        {
          code: 'B1',
          criterion:
            'Critère B — Message (12 pts) : développe un argumentaire POUR (sauver des vies, modèle belge) ET un argumentaire CONTRE/PRUDENT (autonomie corporelle, deuil familial), puis propose une synthèse.',
          marks: 12,
          keywords: ['consentement présumé', 'solidarité', 'autonomie', 'dialogue familial'],
        },
        {
          code: 'C1',
          criterion:
            'Critère C — Conventions de la dissertation / essai (6 pts) : introduction (accroche + problématique + annonce de plan), paragraphes dialectiques (sans « je » subjectif excessif), conclusion répondant à la problématique.',
          marks: 6,
          keywords: ['problématique', 'thèse', 'antithèse', 'synthèse'],
        },
      ],
      model_answer:
        '**Format recommandé : Dissertation / Essai (Fiche 7B)**\n\nAlors que des milliers de patients demeurent sur liste d’attente pour une greffe vitale, la question se pose : faut-il généraliser le modèle du consentement présumé au nom de la solidarité nationale ?\n\nD’une part, les partisans d’un tel système, inspirés de l’expérience belge (*beldonor.be*), rappellent que l’inaction administrative coûte chaque année des vies précieuses. En présumant l’accord citoyen tout en garantissant un registre officiel de refus, la société privilégie l’altruisme sans supprimer la liberté individuelle.\n\nD’autre part, les défenseurs du consentement explicite redoutent qu’une présomption légale n’alourdisse la détresse des proches lors d’un décès brutal, faute de dialogue préalable. Or, l’opposition familiale reste précisément le premier frein aux prélèvements.\n\nEn définitive, si le consentement présumé offre un cadre juridique efficace, il ne peut réussir durablement sans de vastes campagnes d’information encourageant chacun à exprimer clairement son choix de son vivant.',
      examiner_notes:
        'Dans une Dissertation IB (ou Essai), évitez les intertitres façon rapport et gardez une prose fluide où les transitions marquent la progression logique.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'EXAM.1',
    paperType: 'Paper 1 (Production écrite)',
    commandTerm: 'Identifier',
    difficulty: 'Foundation',
    maxMarks: 8,
    questionMarkdown:
      'Pour chacune des **4 situations** suivantes tirées de l’Épreuve 1, indiquez le **type de texte optimal** parmi les 16 formats du Chapitre 6 ET citez **une convention de mise en page ou de registre** indispensable :\n1) Signaler à votre maire un parc dégradé et demander un réaménagement budgété.\n2) Partager avec vos pairs un séjour linguistique drôle et surprenant à Québec.\n3) Persuader vos camarades de boycotter les gobelets jetables à la cafétéria.\n4) Analyser les choix esthétiques et sociaux d’un nouveau documentaire francophone.',
    markscheme: {
      marking_points: [
        {
          code: 'S1',
          criterion: '1) Lettre formelle / Proposition (en-tête, Objet précis, *vous*, formule de politesse soutenue).',
          marks: 2,
        },
        {
          code: 'S2',
          criterion: '2) Blogue / Courriel amical (ton personnel complice, anecdote passée, question ou appel au commentaire).',
          marks: 2,
        },
        {
          code: 'S3',
          criterion: '3) Tract ou Affiche/Brochure engagée (slogan court, impératifs incitatifs, puces d’action + lieu/heure).',
          marks: 2,
        },
        {
          code: 'S4',
          criterion: '4) Critique (bref synopsis sans révéler la fin, analyse esthétique/culturelle, note ou recommandation).',
          marks: 2,
        },
      ],
      model_answer:
        '1) Lettre officielle ou Proposition (Objet + vouvoiement + salutations distinguées) ; 2) Blogue ou Courriel amical (ton chaleureux + *tu/vous* amical + interaction) ; 3) Tract (slogan choc + puces + impératifs) ; 4) Critique de film/documentaire (15 % résumé + 85 % analyse + verdict nuancé).',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T4.1',
    paperType: 'Paper 1 (Production écrite)',
    commandTerm: 'Rédiger',
    difficulty: 'Standard IB',
    maxMarks: 6,
    questionMarkdown:
      'Corrigez et améliorez les **3 phrases suivantes** pour atteindre le niveau Critère A (C1) en Épreuve 1 :\n1) *« Si les lycées organiseraient plus de tutorat, moins d’élèves abandonneraient. »*\n2) *« Malgré que le télétravail est pratique, il isole certains employés. »*\n3) (Lettre officielle à un directeur) *« Salut Monsieur le Directeur, j’espère que tu vas accepter mon projet parce que c’est trop bien. »*',
    markscheme: {
      marking_points: [
        {
          code: 'G1',
          criterion: '1) Suppression du conditionnel après *si* : « Si les lycées **organisaient** (imparfait) davantage de tutorat, moins d’élèves abandonneraient. »',
          marks: 2,
        },
        {
          code: 'G2',
          criterion: '2) Remplacement de *malgré que* par *Bien que + subjonctif* (ou *Malgré + nom*) : « **Bien que** le télétravail **soit** pratique, il isole certains employés. »',
          marks: 2,
        },
        {
          code: 'G3',
          criterion: '3) Registre soutenu + vouvoiement constant : « Monsieur le Directeur, je souhaite vivement que **vous acceptiez** notre projet, car il offrirait de réels avantages… »',
          marks: 2,
        },
      ],
      model_answer:
        '1) *Si les lycées organisaient plus de tutorat, moins d’élèves abandonneraient.*\n2) *Bien que le télétravail soit pratique, il isole certains employés.*\n3) *Monsieur le Directeur, j’ose espérer que vous accueillerez favorablement cette initiative, dont les retombées seraient très bénéfiques pour l’établissement.*',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },

  // ==========================================================================
  // NEW PAPER 2 READING PASSAGES + TASKS (22 reading items across 6 passages)
  // ==========================================================================
  // PASSAGE 1 — Thème 1 (Identités : déconnexion & mode de vie, T1.2 / T1.5)
  {
    topicCode: 'T1.2',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Justifier',
    difficulty: 'Standard IB',
    maxMarks: 4,
    stimulusMarkdown:
      '**Texte A — Sept jours sans téléphone : l’expérience d’une classe de Sherbrooke (*Thème 1 : Identités*)**\n\n' +
      '[1] À l’automne dernier, vingt-quatre élèves du secondaire de Sherbrooke ont accepté un défi peu ordinaire : ranger leur téléphone intelligent dans un casier verrouillé pendant une semaine complète. Loin d’être imposée par la direction, l’initiative est venue d’un constat partagé par les jeunes eux-mêmes, fatigués de se sentir constamment évalués par le nombre de mentions « J’aime » reçues chaque soir.\n\n' +
      '[2] Les quarante-huit premières heures se sont révélées déroutantes. Sans notifications pour meubler les trajets en autobus ou les pauses du midi, plusieurs participants ont confié avoir éprouvé un sentiment d’ennui presque vertigineux. Néanmoins, dès le troisième jour, l’ambiance des corridors s’est transformée : au lieu de fixer des écrans silencieux, les groupes improvisaient des parties d’échecs et multipliaient les conversations spontanées.\n\n' +
      '[3] « J’ai redécouvert le plaisir de lire un roman avant de dormir sans culpabilité ni comparaison permanente avec mes camarades », témoigne Camille, dix-sept ans. Selon la psychologue scolaire qui accompagnait le projet, ce répit numérique a réduit l’anxiété nocturne chez près des trois quarts des volontaires, même si la majorité a repris son appareil dès le huitième jour avec une utilisation toutefois mieux maîtrisée.',
    questionMarkdown:
      'Indiquez si chacune des affirmations suivantes est **VRAIE** ou **FAUSSE**, puis **justifiez en citant exactement un passage du Texte A** :\n1) C’est le directeur de l’école qui a obligé les élèves à participer à cette expérience. [2]\n2) Dès le tout premier jour, les élèves ont ressenti un grand soulagement face à l’absence d’écran. [2]',
    markscheme: {
      marking_points: [
        {
          code: 'J1',
          criterion:
            '1) **FAUX** [1] — Citation exacte : « Loin d’être imposée par la direction, l’initiative est venue d’un constat partagé par les jeunes eux-mêmes » [1].',
          marks: 2,
        },
        {
          code: 'J2',
          criterion:
            '2) **FAUX** [1] — Citation exacte : « Les quarante-huit premières heures se sont révélées déroutantes » OU « plusieurs participants ont confié avoir éprouvé un sentiment d’ennui presque vertigineux » [1].',
          marks: 2,
        },
      ],
      model_answer:
        '1) **Faux** — « Loin d’être imposée par la direction, l’initiative est venue d’un constat partagé par les jeunes eux-mêmes ».\n2) **Faux** — « Les quarante-huit premières heures se sont révélées déroutantes » (ou « plusieurs participants ont confié avoir éprouvé un sentiment d’ennui presque vertigineux »).',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T1.5',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Identifier',
    difficulty: 'Standard IB',
    maxMarks: 4,
    stimulusMarkdown:
      '*Voir le Texte A ci-dessus (« Sept jours sans téléphone : l’expérience d’une classe de Sherbrooke »).*',
    questionMarkdown:
      'Trouvez dans les paragraphes **[2]** et **[3]** du Texte A les mots ou expressions exacts qui correspondent aux définitions suivantes :\n1) remplir ou occuper un moment vide (§2) [1]\n2) qui donne le vertige, très intense (§2) [1]\n3) sentiment de faute morale (§3) [1]\n4) courte pause réparatrice (§3) [1]',
    markscheme: {
      marking_points: [
        { code: 'L1', criterion: '1) meubler [1]', marks: 1 },
        { code: 'L2', criterion: '2) vertigineux [1]', marks: 1 },
        { code: 'L3', criterion: '3) culpabilité [1]', marks: 1 },
        { code: 'L4', criterion: '4) répit [1]', marks: 1 },
      ],
      model_answer: '1) meubler ; 2) vertigineux ; 3) culpabilité ; 4) répit.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T1.4',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Interpréter',
    difficulty: 'Foundation',
    maxMarks: 2,
    stimulusMarkdown:
      '*Voir le Texte A ci-dessus (« Sept jours sans téléphone : l’expérience d’une classe de Sherbrooke »).*',
    questionMarkdown:
      'D’après l’ensemble du Texte A, quelle conclusion nuance le mieux le bilan de cette semaine sans téléphone ?',
    mcqOptions: [
      { label: 'A', text: 'Tous les élèves ont définitivement abandonné leur téléphone après l’expérience.' },
      { label: 'B', text: 'Malgré un début difficile, l’expérience a diminué l’anxiété et favorisé une reprise plus raisonnée.' },
      { label: 'C', text: 'Les participants se sont davantage disputés dans les couloirs faute de distraction.' },
      { label: 'D', text: 'La psychologue scolaire estime que le projet a échoué chez 75 % des jeunes.' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [
        {
          code: 'Q1',
          criterion:
            'Réponse B exacte : le §2 montre l’ennui initial suivi d’échanges conviviaux, et le §3 confirme la baisse d’anxiété (« près des trois quarts ») et le retour à une « utilisation mieux maîtrisée ».',
          marks: 2,
        },
      ],
      model_answer:
        '**B** — Malgré les 48 premières heures déroutantes, près des trois quarts ont vu leur anxiété nocturne baisser et ont repris le téléphone de façon plus raisonnée.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },

  // PASSAGE 2 — Thème 2 (Expériences : voyage, déracinement & culture francophone, T2.3 / T2.4)
  {
    topicCode: 'T2.3',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Analyser',
    difficulty: 'Standard IB',
    maxMarks: 4,
    stimulusMarkdown:
      '**Texte B — Quitter Marseille pour étudier à Montréal : carnet d’un premier hiver (*Thème 2 : Expériences*)**\n\n' +
      '[1] Quand Samira a posé ses deux valises à l’aéroport Pierre-Elliott-Trudeau en août, elle s’attendait à un simple changement de décor. Originaire de Marseille, elle pensait que maîtriser le français lui éviterait tout dépaysement. Pourtant, dès sa première visite au dépanneur du coin pour acheter du lait, un sourire interloqué du caissier lui a révélé que même les expressions du quotidien réservent parfois des surprises.\n\n' +
      '[2] Au fil de l’automne, le véritable rite d’initiation ne fut ni la langue ni les cours universitaires, mais l’apprentissage de la solidarité hivernale. Lorsque les premières rafales de neige de novembre ont paralysé la rue Saint-Denis, ses voisins de palier lui ont prêté des bottes doublées et montré comment déneiger les escaliers extérieurs en colimaçon sans glisser.\n\n' +
      '[3] « Avant ce séjour, je considérais la mobilité comme une simple collection de photos touristiques », écrit-elle aujourd’hui sur son blogue. « C’est en acceptant de demander de l’aide — et parfois de me tromper de mot — que j’ai compris ce que signifie vraiment habiter ailleurs. On n’efface pas ses racines méditerranéennes ; on y ajoute simplement une couche de laine québécoise. »',
    questionMarkdown:
      'À quoi ou à qui renvoient exactement les mots ou pronoms soulignés dans le Texte B ?\n1) « **lui** éviterait tout dépaysement » (§1) [1]\n2) « **lui** ont prêté des bottes doublées » (§2) [1]\n3) « ce que signifie vraiment habiter **ailleurs** » (§3) [1]\n4) « on **y** ajoute simplement une couche de laine » (§3) [1]',
    markscheme: {
      marking_points: [
        { code: 'R1', criterion: '1) lui (§1) = Samira [1]', marks: 1 },
        { code: 'R2', criterion: '2) lui (§2) = Samira [1]', marks: 1 },
        { code: 'R3', criterion: '3) ailleurs (§3) = à Montréal / au Québec / loin de chez soi [1]', marks: 1 },
        { code: 'R4', criterion: '4) y (§3) = à ses racines méditerranéennes [1]', marks: 1 },
      ],
      model_answer: '1) À Samira ; 2) À Samira ; 3) À Montréal / à l’étranger ; 4) Aux racines méditerranéennes de Samira.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T2.4',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Justifier',
    difficulty: 'Standard IB',
    maxMarks: 4,
    stimulusMarkdown: '*Voir le Texte B ci-dessus (« Quitter Marseille pour étudier à Montréal »).*',
    questionMarkdown:
      'Indiquez si chaque affirmation est **VRAIE** ou **FAUSSE** et **justifiez avec une citation exacte du Texte B** :\n1) Avant son départ, Samira redoutait que la barrière linguistique rende son adaptation impossible. [2]\n2) Ce voyage a modifié sa définition personnelle de ce qu’est un véritable séjour à l’étranger. [2]',
    markscheme: {
      marking_points: [
        {
          code: 'J1',
          criterion:
            '1) **FAUX** [1] — Citation exacte : « elle pensait que maîtriser le français lui éviterait tout dépaysement » [1].',
          marks: 2,
        },
        {
          code: 'J2',
          criterion:
            '2) **VRAI** [1] — Citation exacte : « Avant ce séjour, je considérais la mobilité comme une simple collection de photos touristiques » OU « j’ai compris ce que signifie vraiment habiter ailleurs » [1].',
          marks: 2,
        },
      ],
      model_answer:
        '1) **Faux** — « elle pensait que maîtriser le français lui éviterait tout dépaysement ».\n2) **Vrai** — « Avant ce séjour, je considérais la mobilité comme une simple collection de photos touristiques » (suivi de « j’ai compris ce que signifie vraiment habiter ailleurs »).',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T2.6',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Interpréter',
    difficulty: 'Standard IB',
    maxMarks: 2,
    stimulusMarkdown: '*Voir le Texte B ci-dessus (« Quitter Marseille pour étudier à Montréal »).*',
    questionMarkdown:
      'Quelle métaphore résume l’idée finale de Samira sur le rapport entre culture d’origine et culture d’accueil ?',
    mcqOptions: [
      { label: 'A', text: 'Il faut oublier ses traditions d’origine pour être accepté rapidement.' },
      { label: 'B', text: 'L’identité s’enrichit par superposition plutôt que par rupture avec ses origines.' },
      { label: 'C', text: 'Le climat québécois empêche les étudiants étrangers de s’intégrer.' },
      { label: 'D', text: 'Seul le tourisme de courte durée permet d’éviter le mal du pays.' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [
        {
          code: 'Q1',
          criterion:
            'Réponse B exacte : « On n’efface pas ses racines méditerranéennes ; on y ajoute simplement une couche de laine québécoise. »',
          marks: 2,
        },
      ],
      model_answer: '**B** — « On n’efface pas ses racines méditerranéennes ; on y ajoute simplement une couche de laine québécoise. »',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },

  // PASSAGE 3 — Thème 3 (Ingéniosité humaine : Science, Médias & Arts, T3.1 / T3.4)
  {
    topicCode: 'T3.1',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Analyser',
    difficulty: 'Standard IB',
    maxMarks: 4,
    stimulusMarkdown:
      '**Texte C — Entre méfiance numérique et confiance scientifique (*Thème 3 : Ingéniosité humaine*)**\n\n' +
      '[1] Pourquoi des citoyens pourtant très équipés en objets connectés doutent-ils de plus en plus souvent de la parole des chercheurs ? Dans une récente tribune, la sociologue des sciences Hélène Vasseur avance une explication nuancée : ce n’est pas le savoir scientifique lui-même qui suscite la colère, mais le sentiment d’être tenu à l’écart des décisions qui en découlent.\n\n' +
      '[2] Au XXe siècle, le progrès technique était fréquemment présenté comme une autorité indiscutable. Or, plusieurs scandales industriels et la vitesse vertigineuse des réseaux sociaux ont fragilisé cette confiance aveugle. Aujourd’hui, une vidéo sensationnaliste de trente secondes prétendant dénoncer un vaccin ou un OGM est partagée dix fois plus vite qu’une étude universitaire rigoureuse.\n\n' +
      '[3] Pour sortir de cette impasse, Vasseur plaide en faveur de « conventions citoyennes » associant biologistes, juristes, artistes et lycéens. Selon elle, lorsque des jeunes participent à des ateliers de médiation — par exemple en mettant en scène des dilemmes éthiques au théâtre ou en vérifiant les sources d’un reportage — la peur cède progressivement la place à un esprit critique constructif.',
    questionMarkdown:
      'En vous appuyant strictement sur le Texte C :\n1) Quelle distinction Hélène Vasseur établit-elle pour expliquer la colère du public face aux chercheurs ? [2]\n2) Donnez **deux** facteurs qui expliquent la fragilisation de la confiance envers le progrès technique depuis le XXe siècle. [2]',
    markscheme: {
      marking_points: [
        {
          code: 'C1',
          criterion:
            '1) Le public ne rejette pas le savoir scientifique lui-même, mais le fait d’être exclu / tenu à l’écart des décisions qui en découlent [2].',
          marks: 2,
        },
        {
          code: 'C2',
          criterion:
            '2) Les scandales industriels passés [1] ET la rapidité virale des vidéos sensationnalistes sur les réseaux sociaux [1].',
          marks: 2,
        },
      ],
      model_answer:
        '1) Les citoyens contestent moins la science elle-même que le sentiment d’être tenus à l’écart des choix collectifs qui en découlent.\n2) D’une part, plusieurs scandales industriels passés ; d’autre part, la diffusion beaucoup plus rapide de vidéos sensationnalistes sur les réseaux sociaux que d’études scientifiques rigoureuses.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T3.4',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Justifier',
    difficulty: 'Standard IB',
    maxMarks: 4,
    stimulusMarkdown: '*Voir le Texte C ci-dessus (« Entre méfiance numérique et confiance scientifique »).*',
    questionMarkdown:
      'Indiquez si chaque affirmation est **VRAIE** ou **FAUSSE** et **justifiez exactement d’après le Texte C** :\n1) Sur les réseaux sociaux, les articles scientifiques sérieux circulent presque aussi vite que les vidéos sensationnalistes. [2]\n2) Selon Vasseur, les conventions citoyennes devraient être réservées uniquement aux scientifiques et aux juristes. [2]',
    markscheme: {
      marking_points: [
        {
          code: 'J1',
          criterion:
            '1) **FAUX** [1] — « une vidéo sensationnaliste de trente secondes […] est partagée dix fois plus vite qu’une étude universitaire rigoureuse » [1].',
          marks: 2,
        },
        {
          code: 'J2',
          criterion:
            '2) **FAUX** [1] — « Vasseur plaide en faveur de “conventions citoyennes” associant biologistes, juristes, artistes et lycéens » [1].',
          marks: 2,
        },
      ],
      model_answer:
        '1) **Faux** — « une vidéo sensationnaliste de trente secondes […] est partagée dix fois plus vite qu’une étude universitaire rigoureuse ».\n2) **Faux** — « “conventions citoyennes” associant biologistes, juristes, artistes et lycéens ».',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T3.2',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Interpréter',
    difficulty: 'Foundation',
    maxMarks: 2,
    stimulusMarkdown: '*Voir le Texte C ci-dessus (« Entre méfiance numérique et confiance scientifique »).*',
    questionMarkdown:
      'Dans le paragraphe **[3]** du Texte C, quel rôle jouent les **arts** (comme le théâtre) vis-à-vis des enjeux scientifiques ?',
    mcqOptions: [
      { label: 'A', text: 'Ils servent uniquement à distraire les élèves après les cours de biologie.' },
      { label: 'B', text: 'Ils permettent aux jeunes de s’approprier les dilemmes éthiques et de développer leur esprit critique.' },
      { label: 'C', text: 'Ils remplacent complètement les études universitaires rigoureuses.' },
      { label: 'D', text: 'Ils augmentent la peur des citoyens face aux nouvelles technologies.' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [
        {
          code: 'Q1',
          criterion: 'Réponse B exacte : mettre en scène les dilemmes éthiques transforme la peur en esprit critique constructif.',
          marks: 2,
        },
      ],
      model_answer:
        '**B** — En mettant en scène des dilemmes éthiques au théâtre dans des ateliers de médiation, les jeunes remplacent la peur par un esprit critique constructif.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T3.4',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Identifier',
    difficulty: 'Standard IB',
    maxMarks: 3,
    stimulusMarkdown: '*Voir le Texte C ci-dessus (« Entre méfiance numérique et confiance scientifique »).*',
    questionMarkdown:
      'Relevez dans le Texte C :\n1) Un mot signifiant « article d’opinion rédigé par un spécialiste ou invité » (§1) [1]\n2) Un adjectif signifiant « qui cherche à provoquer l’émotion forte plutôt que d’informer sobrement » (§2) [1]\n3) Une expression nominale signifiant « situation bloquée dont on ne voit pas d’issue » (§3) [1]',
    markscheme: {
      marking_points: [
        { code: 'V1', criterion: '1) tribune [1]', marks: 1 },
        { code: 'V2', criterion: '2) sensationnaliste [1]', marks: 1 },
        { code: 'V3', criterion: '3) impasse [1]', marks: 1 },
      ],
      model_answer: '1) tribune ; 2) sensationnaliste ; 3) impasse.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },

  // PASSAGE 4 — Thème 4 (Organisation sociale : École de demain & bénévolat, T4.2 / T4.3)
  {
    topicCode: 'T4.3',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Comparer',
    difficulty: 'Standard IB',
    maxMarks: 4,
    stimulusMarkdown:
      '**Texte D — Réinventer la journée scolaire en Wallonie (*Thème 4 : Organisation sociale*)**\n\n' +
      '[1] Fatigués par des journées étirées de huit heures à dix-sept heures, les délégués de trois lycées de Namur ont soumis au ministère belge de l’Éducation un projet pilote baptisé *« Matins concentrés, après-midis solidaires »*. Leur proposition s’inspire des recommandations de chronobiologistes qui dénoncent la baisse d’attention cognitive après le déjeuner.\n\n' +
      '[2] Concrètement, les cours académiques exigeants — mathématiques, langues vivantes et sciences — seraient regroupés le matin entre 8 h 45 et 13 h 15 sous forme de séances intensives de quarante-cinq minutes. L’après-midi laisserait place aux ateliers artistiques, au sport, au tutorat entre élèves de niveaux différents et à des missions de bénévolat dans le quartier.\n\n' +
      '[3] Si plusieurs enseignants saluent une baisse nette de l’absentéisme durant la phase d’essai, certains parents travaillant à temps plein s’inquiètent toutefois de la garde des plus jeunes dès 13 h 30. Pour rassurer les familles, l’établissement maintient donc une étude encadrée gratuite jusqu’à 17 h 30 pour les volontaires.',
    questionMarkdown:
      'Associez les quatre idées suivantes au **paragraphe exact** du Texte D (`[1]`, `[2]` ou `[3]`) :\n- (a) Une réserve pratique exprimée par certains parents concernant les horaires de travail. [1]\n- (b) Un argument scientifique justifiant la réforme de l’emploi du temps. [1]\n- (c) Un dispositif gratuit prévu afin qu’aucun élève ne soit laissé seul l’après-midi. [1]\n- (d) Une répartition précise entre enseignements théoriques et entraide associative. [1]',
    markscheme: {
      marking_points: [
        { code: 'M1', criterion: '(a) Paragraphe [3] [1]', marks: 1 },
        { code: 'M2', criterion: '(b) Paragraphe [1] [1]', marks: 1 },
        { code: 'M3', criterion: '(c) Paragraphe [3] [1]', marks: 1 },
        { code: 'M4', criterion: '(d) Paragraphe [2] [1]', marks: 1 },
      ],
      model_answer: '(a) §3 ; (b) §1 ; (c) §3 ; (d) §2.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T4.2',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Justifier',
    difficulty: 'Standard IB',
    maxMarks: 4,
    stimulusMarkdown: '*Voir le Texte D ci-dessus (« Réinventer la journée scolaire en Wallonie »).*',
    questionMarkdown:
      'Indiquez si chaque affirmation est **VRAIE** ou **FAUSSE** et **justifiez avec une citation exacte du Texte D** :\n1) La totalité des professeurs s’oppose à ce nouveau calendrier scolaire. [2]\n2) Tous les élèves sont obligés de rester au lycée jusqu’à 17 h 30 dans le cadre du projet pilote. [2]',
    markscheme: {
      marking_points: [
        {
          code: 'J1',
          criterion: '1) **FAUX** [1] — « plusieurs enseignants saluent une baisse nette de l’absentéisme » [1].',
          marks: 2,
        },
        {
          code: 'J2',
          criterion:
            '2) **FAUX** [1] — « l’établissement maintient donc une étude encadrée gratuite jusqu’à 17 h 30 pour les volontaires » [1].',
          marks: 2,
        },
      ],
      model_answer:
        '1) **Faux** — « plusieurs enseignants saluent une baisse nette de l’absentéisme ».\n2) **Faux** — « l’établissement maintient donc une étude encadrée gratuite jusqu’à 17 h 30 pour les volontaires ».',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T4.3',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Identifier',
    difficulty: 'Standard IB',
    maxMarks: 3,
    stimulusMarkdown: '*Voir le Texte D ci-dessus (« Réinventer la journée scolaire en Wallonie »).*',
    questionMarkdown:
      'Répondez brièvement d’après le Texte D :\n1) Quel adjectif utilisé au §2 montre que les cours du matin demandent un effort soutenu ? [1]\n2) Quelle forme de solidarité entre générations d’élèves apparaît au §2 ? [1]\n3) À quoi renvoie « **Leur** proposition » au §1 ? [1]',
    markscheme: {
      marking_points: [
        { code: 'A1', criterion: '1) exigeants (ou intensives) [1]', marks: 1 },
        { code: 'A2', criterion: '2) le tutorat entre élèves de niveaux différents [1]', marks: 1 },
        { code: 'A3', criterion: '3) Les délégués de trois lycées de Namur [1]', marks: 1 },
      ],
      model_answer: '1) exigeants (ou intensives) ; 2) le tutorat entre élèves de niveaux différents ; 3) Aux délégués des trois lycées de Namur.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T4.3',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Interpréter',
    difficulty: 'Foundation',
    maxMarks: 2,
    stimulusMarkdown: '*Voir le Texte D ci-dessus (« Réinventer la journée scolaire en Wallonie »).*',
    questionMarkdown:
      'Quel titre de presse résume avec le plus d’exactitude l’ensemble du Texte D ?',
    mcqOptions: [
      { label: 'A', text: 'La fin définitive des devoirs et du sport en Belgique' },
      { label: 'B', text: 'Des lycées wallons expérimentent la semaine de cours allégée l’après-midi' },
      { label: 'C', text: 'Les parents imposent la fermeture des écoles après 13 h 15' },
      { label: 'D', text: 'Pourquoi l’absentéisme a explosé à Namur depuis la réforme' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [
        {
          code: 'Q1',
          criterion: 'Réponse B exacte : c’est un projet pilote à Namur combinant cours académiques le matin et activités/tutorat/étude volontaire l’après-midi.',
          marks: 2,
        },
      ],
      model_answer: '**B** — Des lycées wallons (Namur) testent les matinées concentrées et après-midis solidaires.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },

  // PASSAGE 5 — Thème 5 (Partage de la planète : Ville du quart d’heure & écologie, T5.1 / T5.7)
  {
    topicCode: 'T5.7',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Analyser',
    difficulty: 'Standard IB',
    maxMarks: 4,
    stimulusMarkdown:
      '**Texte E — La « ville du quart d’heure » tiendra-t-elle ses promesses ? (*Thème 5 : Partage de la planète*)**\n\n' +
      '[1] Popularisé par l’urbaniste Carlos Moreno à Paris, le concept de « ville du quart d’heure » ambitionne de permettre à chaque habitant d’accéder à pied ou à vélo, en moins de quinze minutes, aux commerces essentiels, à son lieu de travail, à l’école et aux soins médicaux. L’objectif affiché est double : réduire drastiquement les émissions liées aux trajets pendulaires et redonner vie aux places de quartier.\n\n' +
      '[2] Pourtant, l’enthousiasme des métropoles ne convainc pas tout le monde. Dans un rapport récent, l’urbaniste Nadia Benali rappelle qu’aménager des rues piétonnes et des pistes cyclables dans les centres historiques déjà aisés risque d’y faire grimper les loyers. Sans logement social intégré, ces quartiers verts deviendraient rapidement inaccessibles aux ménages modestes, repoussés toujours plus loin en périphérie.\n\n' +
      '[3] « L’écologie urbaine échoue dès qu’elle oublie la justice sociale », avertit-elle. À ses yeux, la véritable réussite du modèle exige d’investir simultanément dans les banlieues et les petites villes rurales, en y implantant des transports collectifs fréquents, des maisons de santé et des espaces verts de proximité.',
    questionMarkdown:
      'D’après le Texte E :\n1) Citez les **deux** objectifs poursuivis par le concept de « ville du quart d’heure » (§1). [2]\n2) Quel effet pervers Nadia Benali redoute-t-elle si ce modèle est appliqué uniquement dans les centres-villes (§2) ? [2]',
    markscheme: {
      marking_points: [
        {
          code: 'E1',
          criterion: '1) Réduire fortement les émissions liées aux trajets domicile-travail [1] ET revitaliser les quartiers locaux [1].',
          marks: 2,
        },
        {
          code: 'E2',
          criterion: '2) Hausse des loyers rendant les quartiers verts inaccessibles aux ménages modestes, repoussés en périphérie [2].',
          marks: 2,
        },
      ],
      model_answer:
        '1) Réduire drastiquement les émissions des trajets pendulaires et redonner vie aux places de quartier.\n2) L’augmentation des loyers dans les centres embellis, excluant les familles modestes vers la périphérie faute de logements sociaux.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T5.1',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Justifier',
    difficulty: 'Standard IB',
    maxMarks: 4,
    stimulusMarkdown: '*Voir le Texte E ci-dessus (« La “ville du quart d’heure” tiendra-t-elle ses promesses ? »).*',
    questionMarkdown:
      'Indiquez si chaque affirmation est **VRAIE** ou **FAUSSE** et **justifiez par une citation exacte du Texte E** :\n1) Dans la ville du quart d’heure, les habitants devraient continuer à utiliser leur voiture pour faire leurs courses quotidiennes. [2]\n2) Nadia Benali rejette totalement l’idée d’écologie urbaine parce qu’elle coûte trop cher. [2]',
    markscheme: {
      marking_points: [
        {
          code: 'J1',
          criterion: '1) **FAUX** [1] — « accéder à pied ou à vélo, en moins de quinze minutes, aux commerces essentiels » [1].',
          marks: 2,
        },
        {
          code: 'J2',
          criterion:
            '2) **FAUX** [1] — « À ses yeux, la véritable réussite du modèle exige d’investir simultanément dans les banlieues et les petites villes rurales » (elle critique seulement l’exclusion sociale, pas l’écologie urbaine en soi) [1].',
          marks: 2,
        },
      ],
      model_answer:
        '1) **Faux** — « accéder à pied ou à vélo, en moins de quinze minutes, aux commerces essentiels ».\n2) **Faux** — « À ses yeux, la véritable réussite du modèle exige d’investir simultanément dans les banlieues et les petites villes rurales ».',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T5.7',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Identifier',
    difficulty: 'Standard IB',
    maxMarks: 4,
    stimulusMarkdown: '*Voir le Texte E ci-dessus (« La “ville du quart d’heure” tiendra-t-elle ses promesses ? »).*',
    questionMarkdown:
      'Relevez dans le Texte E les mots ou expressions exacts correspondant aux sens suivants :\n1) déplacements réguliers entre le domicile et le lieu de travail (§1) [1]\n2) très fortement, radicalement (§1) [1]\n3) aux revenus peu élevés (§2) [1]\n4) ce que représente « **y** » dans « risque d’**y** faire grimper les loyers » (§2) [1]',
    markscheme: {
      marking_points: [
        { code: 'V1', criterion: '1) trajets pendulaires [1]', marks: 1 },
        { code: 'V2', criterion: '2) drastiquement [1]', marks: 1 },
        { code: 'V3', criterion: '3) modestes [1]', marks: 1 },
        { code: 'V4', criterion: '4) dans les centres historiques déjà aisés [1]', marks: 1 },
      ],
      model_answer: '1) trajets pendulaires ; 2) drastiquement ; 3) modestes ; 4) dans les centres historiques déjà aisés.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T5.1',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Interpréter',
    difficulty: 'Standard IB',
    maxMarks: 2,
    stimulusMarkdown: '*Voir le Texte E ci-dessus (« La “ville du quart d’heure” tiendra-t-elle ses promesses ? »).*',
    questionMarkdown:
      'Quel est le **ton général** de la chronique dans le Texte E ?',
    mcqOptions: [
      { label: 'A', text: 'Ironique et moqueur envers les habitants qui utilisent le vélo' },
      { label: 'B', text: 'Analytique et nuancé, confrontant promesses écologiques et équité territoriale' },
      { label: 'C', text: 'Complètement enthousiaste sans aucune réserve critique' },
      { label: 'D', text: 'Aggressif et partisan contre les transports collectifs' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [
        {
          code: 'Q1',
          criterion: 'Réponse B exacte : présente les objectifs positifs au §1 puis l’avertissement social constructif de Benali aux §2–3.',
          marks: 2,
        },
      ],
      model_answer: '**B** — Ton analytique et nuancé associant transition urbaine et justice sociale.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },

  // PASSAGE 6 — Thème 5 (Droits humains & Bioéthique : Dakar & Belgique, T5.2 / T5.4)
  {
    topicCode: 'T5.2',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Identifier',
    difficulty: 'Standard IB',
    maxMarks: 4,
    stimulusMarkdown:
      '**Texte F — Éduquer les filles, ouvrir l’avenir : regards croisés de Dakar à Bruxelles (*Thème 5 : Droits & Dilemmes*)**\n\n' +
      '[1] À Rufisque, près de Dakar, l’association sénégalaise *Écoles de Demain* lutte depuis quinze ans contre l’abandon scolaire précoce des adolescentes. En attribuant de modestes bourses de transport et de fournitures aux familles vulnérables tout en ouvrant des classes de rattrapage le soir, le programme a permis à plus de quatre cents jeunes filles de décrocher leur baccalauréat depuis 2019.\n\n' +
      '[2] « Lorsqu’une jeune fille termine ses études secondaires, c’est tout son quartier qui gagne en autonomie sanitaire et civique », souligne Aminata Diouf, directrice du centre et fervente lectrice de Mariama Bâ. Selon elle, l’école émancipe autant contre la pauvreté que contre les mariages imposés.\n\n' +
      '[3] Ce même idéal d’égalité d’accès inspire d’autres réformes solidaires dans l’espace francophone, qu’il s’agisse de l’inclusion d’élèves malvoyants dans les lycées français grâce au matériel Braille ou des campagnes belges sensibilisant les citoyens à enregistrer volontairement leur position sur le don d’organes. Dans chaque cas, le droit ne reste vivant que s’il s’accompagne d’information accessible à tous.',
    questionMarkdown:
      'Répondez brièvement d’après le Texte F :\n1) Nommez **deux** aides concrètes offertes par *Écoles de Demain* aux adolescentes (§1). [2]\n2) Quels sont les **deux** fléaux que l’éducation féminine aide à combattre selon Aminata Diouf (§2) ? [2]',
    markscheme: {
      marking_points: [
        {
          code: 'F1',
          criterion: '1) Bourses de transport/fournitures [1] ET classes de rattrapage le soir [1].',
          marks: 2,
        },
        {
          code: 'F2',
          criterion: '2) La pauvreté [1] ET les mariages imposés [1].',
          marks: 2,
        },
      ],
      model_answer:
        '1) De modestes bourses de transport et de fournitures + des classes de rattrapage en soirée.\n2) La pauvreté et les mariages imposés.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T5.4',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Justifier',
    difficulty: 'Standard IB',
    maxMarks: 4,
    stimulusMarkdown: '*Voir le Texte F ci-dessus (« Éduquer les filles, ouvrir l’avenir »).*',
    questionMarkdown:
      'Indiquez si chaque affirmation est **VRAIE** ou **FAUSSE** et **justifiez par une citation exacte du Texte F** :\n1) L’association *Écoles de Demain* a été fondée il y a moins de cinq ans. [2]\n2) Pour l’auteur de l’article, il suffit de voter une loi pour que les droits humains deviennent concrets. [2]',
    markscheme: {
      marking_points: [
        {
          code: 'J1',
          criterion: '1) **FAUX** [1] — « l’association sénégalaise Écoles de Demain lutte depuis quinze ans » [1].',
          marks: 2,
        },
        {
          code: 'J2',
          criterion:
            '2) **FAUX** [1] — « le droit ne reste vivant que s’il s’accompagne d’information accessible à tous » [1].',
          marks: 2,
        },
      ],
      model_answer:
        '1) **Faux** — « lutte depuis quinze ans ».\n2) **Faux** — « le droit ne reste vivant que s’il s’accompagne d’information accessible à tous ».',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T5.2',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Identifier',
    difficulty: 'Standard IB',
    maxMarks: 4,
    stimulusMarkdown: '*Voir le Texte F ci-dessus (« Éduquer les filles, ouvrir l’avenir »).*',
    questionMarkdown:
      'Trouvez dans le Texte F les mots ou expressions qui signifient :\n1) qui survient trop tôt, avant l’âge attendu (§1) [1]\n2) obtenir un diplôme (§1) [1]\n3) passionnée et convaincue (§2) [1]\n4) libère d’une contrainte ou d’une tutelle (§2) [1]',
    markscheme: {
      marking_points: [
        { code: 'S1', criterion: '1) précoce [1]', marks: 1 },
        { code: 'S2', criterion: '2) décrocher [1]', marks: 1 },
        { code: 'S3', criterion: '3) fervente [1]', marks: 1 },
        { code: 'S4', criterion: '4) émancipe [1]', marks: 1 },
      ],
      model_answer: '1) précoce ; 2) décrocher ; 3) fervente ; 4) émancipe.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T5.4',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Interpréter',
    difficulty: 'Foundation',
    maxMarks: 2,
    stimulusMarkdown: '*Voir le Texte F ci-dessus (« Éduquer les filles, ouvrir l’avenir »).*',
    questionMarkdown:
      'Quelle idée commune relie l’association de Rufisque, l’inclusion du handicap en France et les campagnes belges sur le don d’organes (§3) ?',
    mcqOptions: [
      { label: 'A', text: 'La solidarité citoyenne exige des outils concrets et une information claire.' },
      { label: 'B', text: 'Ces trois pays utilisent exactement le même budget scolaire.' },
      { label: 'C', text: 'Seules les personnes âgées bénéficient de ces programmes.' },
      { label: 'D', text: 'La littérature classique empêche les réformes sociales modernes.' },
    ],
    correctMcqOption: 'A',
    markscheme: {
      marking_points: [
        {
          code: 'Q1',
          criterion: 'Réponse A exacte : le texte relie ces trois initiatives autour du droit rendu concret par l’équipement/information accessible à tous.',
          marks: 2,
        },
      ],
      model_answer: '**A** — Le droit reste concret uniquement lorsqu’il s’accompagne de dispositifs pratiques et d’une information accessible.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },

  // ==========================================================================
  // NEW PAPER 2 LISTENING / SYNTHESIS QUESTIONS (4 items: 40 new total -> 48 total)
  // ==========================================================================
  {
    topicCode: 'EXAM.2',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Interpréter',
    difficulty: 'Foundation',
    maxMarks: 2,
    stimulusMarkdown:
      '**Extrait audio simulé (Épreuve 2 — Compréhension orale, Unité 3.4 p. 192) :** *« J’ai pris un p’tit-déj’ rapide avant d’aller à la fac, puis j’ai suivi la manif des écolos c’t aprém ; franchement, j’ai trouvé les infos du soir super biaisées ! »*',
    questionMarkdown:
      'Que signifient, en français standard, les quatre abréviations familières entendues dans ce témoignage oral (`fac`, `manif`, `écolos`, `c’t aprém`) ?',
    mcqOptions: [
      { label: 'A', text: 'facture · manifestation · économistes · cette année' },
      { label: 'B', text: 'faculté (université) · manifestation · écologistes · cet après-midi' },
      { label: 'C', text: 'facilité · manufacture · écoliers · cette matinée' },
      { label: 'D', text: 'faculté · manière · économies · cet endroit' },
    ],
    correctMcqOption: 'B',
    markscheme: {
      marking_points: [
        {
          code: 'O1',
          criterion: 'Réponse B exacte : *fac* = faculté/université, *manif* = manifestation, *écolos* = écologistes, *c’t aprém* = cet après-midi (Ch. 3 p. 192).',
          marks: 2,
        },
      ],
      model_answer: '**B** — faculté (université), manifestation, écologistes, cet après-midi.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'EXAM.2',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Interpréter',
    difficulty: 'Standard IB',
    maxMarks: 2,
    stimulusMarkdown:
      '**Extrait audio simulé (Épreuve 2 — Piège de restriction & négation) :** *« Bien que la mairie ait promis deux fois plus de bornes de recharge électrique dès janvier, elle n’a guère installé que trois stations en périphérie, contrairement aux cinq prévues dans le centre. »*',
    questionMarkdown:
      'Combien de bornes électriques ont réellement été mises en place jusqu’ici, et dans quelle zone ?',
    mcqOptions: [
      { label: 'A', text: 'Deux fois plus que prévu, partout dans le centre-ville' },
      { label: 'B', text: 'Cinq stations dans le centre-ville dès le mois de janvier' },
      { label: 'C', text: 'Seulement trois stations en périphérie (hors du centre)' },
      { label: 'D', text: 'Huit stations réparties équitablement entre centre et banlieue' },
    ],
    correctMcqOption: 'C',
    markscheme: {
      marking_points: [
        {
          code: 'O2',
          criterion:
            'Réponse C exacte : *n’a guère installé que* (= seulement) trois stations en périphérie ; *deux fois plus* et *cinq* sont des leurres introduits par *Bien que* et *contrairement à*.',
          marks: 2,
        },
      ],
      model_answer: '**C** — Seulement trois stations en périphérie (*n’a guère installé que*).',
    },
    sourceFileNames: ['plan du cours IB 11e 2026.pdf', 'Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T2.5',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Comparer',
    difficulty: 'Standard IB',
    maxMarks: 4,
    stimulusMarkdown:
      '**Transcript audio (Entretien radio sur la Fête des voisins & la politesse francophone, Unité 4.1–4.2) :**\n' +
      '*Animateur : « Pourquoi la Fête des voisins créée par Atanase Périfan fonctionne-t-elle autant dans les grands immeubles ? »*\n' +
      '*Invitée : « Parce qu’en ville, on croise les mêmes visages dans l’ascenseur en gardant le vouvoiement pendant dix ans ! Offrir un simple jus de fruit sur le palier casse cette barrière de timidité : dès le lendemain, on n’hésite plus à prêter un outil ou à rendre service à une voisine âgée. »*',
    questionMarkdown:
      'D’après cet échange oral :\n1) Quel obstacle social habituel dans les immeubles empêche les voisins de se parler ? [2]\n2) Citez **deux** changements concrets observés dès le lendemain de la fête. [2]',
    markscheme: {
      marking_points: [
        {
          code: 'T1',
          criterion: '1) La timidité / la distance sociale matérialisée par le vouvoiement prolongé malgré des croisements quotidiens [2].',
          marks: 2,
        },
        {
          code: 'T2',
          criterion: '2) Prêter un outil [1] ET rendre service à une voisine âgée [1].',
          marks: 2,
        },
      ],
      model_answer:
        '1) Une barrière de timidité et de distance (croiser les mêmes personnes en gardant le vouvoiement pendant des années).\n2) On se prête des outils et on aide volontiers une voisine âgée.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
  {
    topicCode: 'T5.3',
    paperType: 'Paper 2 (Compréhension écrite & orale)',
    commandTerm: 'Discuter',
    difficulty: 'HL Extension',
    maxMarks: 6,
    stimulusMarkdown:
      '**Extrait de synthèse — La jeunesse face aux conflits (*Le monde en français* Ch. 5.3, pp. 298–308) :**\n' +
      '*Le roman* Allah n’est pas obligé *d’Ahmadou Kourouma donne la parole à Birahima, enfant-soldat, tandis que les archives conservent la lettre d’adieu du jeune résistant français Henri Fertet (16 ans, 1943) et le témoignage sur les enfants algériens manifestant le 11 décembre 1960 à Alger.*',
    questionMarkdown:
      'À partir de ces trois références culturelles et historiques du Chapitre 5 :\n1) Comparez le rôle du langage chez Birahima (Kourouma) et dans la lettre d’Henri Fertet. [4]\n2) Expliquez pourquoi l’historien Benoît Falaize insiste sur l’enseignement équilibré de la mémoire coloniale dans les manuels scolaires. [2]',
    markscheme: {
      marking_points: [
        {
          code: 'M1',
          criterion:
            '1) Birahima emploie une langue orale hybride (français, malinké, argot *gbaka*, définitions du dictionnaire) pour dire le chaos et l’innocence brisée [2] ; Henri Fertet écrit dans un registre soutenu et serein pour affirmer son courage moral et rassurer ses parents avant l’exécution [2].',
          marks: 4,
        },
        {
          code: 'M2',
          criterion:
            '2) Pour dépasser l’oubli ou les récits unilatéraux et permettre aux jeunes générations de comprendre lucidement les responsabilités et souffrances partagées [2].',
          marks: 2,
        },
      ],
      model_answer:
        '1) Chez Kourouma, la langue mêlée et faussement naïve de Birahima dénonce l’absurdité brutale des guerres qui volent l’enfance ; à l’inverse, la lettre d’Henri Fertet adopte une dignité épistolaire soutenue pour transformer le sacrifice en engagement lucide.\n2) L’enseignement pluraliste permet d’assumer le passé sans tabou et d’éviter le retour des haines mémorielles.',
    },
    sourceFileNames: ['Le monde en français - Cambridge (2018 Coursebook).pdf'],
  },
];
