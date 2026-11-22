import type { ClassroomSeedNote } from '../types';
import {
  FR_V3_IO_PROTOCOL_STEPS,
  FR_V3_P1_ESSAY_WORKED,
  FR_V3_P1_STUDIO_CORE,
  FR_V3_P2_READING_WORKED_EXAMPLE,
  FR_V3_T1_GRAMMAR_MATRIX,
  FR_V3_T1_STUDIO,
  FR_V3_T2_PASSE_WORKED,
  FR_V3_T2_STUDIO,
  FR_V3_T3_IO_VISUAL_EXPLORER,
  FR_V3_T3_MEDIA_PASSIVE_MATRIX,
  FR_V3_T3_STUDIO,
  FR_V3_T4_HYPOTHETIQUE_STEPS,
  FR_V3_T4_STUDIO,
  FR_V3_T5_CONCESSION_WORKED,
  FR_V3_T5_GRAMMAR_MATRIX,
  FR_V3_T5_STUDIO,
  FR_V3_TEXT_TYPES_16_MATRIX,
  FR_V3_THEMES_CURRICULUM_MATRIX,
} from './diagrams';

export const FRENCH_NOTES: ClassroomSeedNote[] = [
  // ==========================================================================
  // GUIDE 1 (EXAM.1 + cross-linked EXAM.2 & EXAM.3) — Preserved V2 Title
  // ==========================================================================
  {
    topicCode: 'EXAM.1',
    title: 'Français B NM : 5 Thèmes prescrits (*Le monde en français*) & Oral individuel',
    summary:
      'Guide de référence du cours de Mme MacQuarrie (CRHS 11e) et du manuel Cambridge *Le monde en français* : architecture des 5 thèmes prescrits, protocole de l’Oral individuel (25 %), stratégies de l’Épreuve 2 (50 % — Compréhension écrite & orale) et maîtrise des 5 concepts IB.',
    sourceFileNames: [
      'plan du cours IB 11e 2026.pdf',
      'Le monde en français - Cambridge (2018 Coursebook).pdf',
    ],
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: '1. Architecture du cours CRHS (11e) & Progression vers le Diplôme IB (12e)',
      },
      {
        type: 'paragraph',
        markdown:
          'Dans le programme **Français B Niveau Moyen (NM / SL)** dirigé par **Mme MacQuarrie** à CRHS (*Plan du cours IB 11e 2026*), le cours représente **12,5 % de votre horaire annuel** et repose sur deux piliers complémentaires : le manuel **Le monde en français** (Abrioux, Chrétien & Fayaud, Cambridge University Press 2018, Chapitres 1 à 6) et l’immersion communicative en classe (**usage exclusif du français obligatoire**). Chaque cycle bimestriel en 11e année explore un sous-thème de chacun des **5 thèmes prescrits par l’IB** afin de développer de front les quatre compétences langagières évaluées de façon équilibrée (**25 % Production écrite, 25 % Compréhension orale, 25 % Compréhension écrite, 25 % Production orale**).',
      },
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Les 5 Questions directrices du cours (CRHS & Le monde en français)',
        markdown:
          'Chaque thème du programme s’articule autour d’une interrogation centrale que vous devez savoir approfondir tant à l’écrit (Épreuve 1) qu’à l’oral (Oral individuel) :\n\n- **1. L’identité (`T1`) :** *« De quelle façon exprimons-nous notre identité ? »* (Unité 1, pp. 10–79)\n- **2. Les expériences (`T2`) :** *« Comment le passé construit-il notre avenir ? »* (Unité 2, pp. 80–139)\n- **3. L’ingéniosité humaine (`T3`) :** *« Comment les arts peuvent-ils nous aider à comprendre une culture ? »* (Unité 3, pp. 140–203)\n- **4. L’organisation sociale (`T4`) :** *« Quels sont les liens avec les gens que nous côtoyons ? »* (Unité 4, pp. 204–259)\n- **5. Le partage de la planète (`T5`) :** *« À quels enjeux environnementaux faisons-nous face ? »* (Unité 5, pp. 260–329)',
      },
      {
        type: 'paragraph',
        markdown:
          'Au terme de la 12e année, l’évaluation externe et interne du Diplôme IB conserve la même répartition à parts égales : **Épreuve 1 — Production écrite (25 %, 1 h 15, 250–400 mots sur un sujet parmi trois)** ; **Épreuve 2 — Compréhension orale (25 %, ~45 min, 3 pistes audio avec écouteurs, 25 points)** ; **Épreuve 2 — Compréhension écrite (25 %, 1 h, 3 textes authentiques variés, 40 points)** ; et **Évaluation interne — Oral individuel (25 %, 15 min de préparation + 12–15 min d’entretien, 30 points)**. En 11e année comme en 12e année, la politique d’**intégrité académique** de CRHS et de l’IB interdit strictement tout recours aux traducteurs automatiques en ligne et aux outils d’intelligence artificielle générative dans les travaux individuels non encadrés et évaluations sommatives.',
      },
      {
        type: 'playable_diagram',
        spec: FR_V3_THEMES_CURRICULUM_MATRIX,
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Compréhension conceptuelle : les 5 lentilles transversales de l’IB',
      },
      {
        type: 'paragraph',
        markdown:
          'Dans l’Avant-propos et tout au long des six chapitres de *Le monde en français* (p. 7 et pp. 331–332), la **compréhension conceptuelle** constitue le véritable pont entre la maîtrise linguistique et les notes de bande 6 ou 7. Que vous analysiez un texte journalistique en Épreuve 2, choisissiez un format en Épreuve 1 ou commentiez une photographie à l’Oral individuel, interrogez systématiquement cinq paramètres indissociables :\n\n1. **Le destinataire (*Audience*) :** À qui s’adresse le locuteur ou l’auteur ? (*grand public, pairs lycéens, lecteur spécialisé, maire/recteur, journal intime à soi-même*). Ce choix détermine immédiatement le pronom d’adresse (*tu* vs *vous* vs *on/nous*) et les références partagées.\n2. **Le contexte (*Context*) :** Dans quelle situation géographique, historique ou institutionnelle le message naît-il ? (Ex. un débat sur les éoliennes dans une région touristique vs une ville touchée par le chômage, Unité 3.1 p. 150).\n3. **Le but (*Purpose*) :** S’agit-il d’informer factuellement, de **convaincre** par la raison (faits, statistiques), de **persuader** par l’émotion (images, apostrophes), de protester courtoisement, de divertir ou de témoigner ?\n4. **Le sens (*Meaning*) :** Quel message explicite et quel sous-texte implicite se dégagent des procédés rhétoriques, des temps verbaux, de la typographie et des connecteurs logiques ?\n5. **La variation (*Variation*) :** Comment la langue change-t-elle selon le registre (*familier, courant, soutenu*), la génération (*verlan des ados vs français académique*) ou l’espace francophone (*magasinage/fin de semaine* au Québec, *nonante/septante* en Belgique et Suisse, lexique africain chez Kourouma) ?',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Référence Cambridge (Avant-propos, p. 7) — Compétences & Profil de l’apprenant',
        markdown:
          '> *« Chaque unité commence par une question qui soulève un problème mondial important... L’élève développera une véritable compréhension interculturelle et critique, notamment par les liens avec la Théorie de la connaissance (TdC), les approches de l’apprentissage (recherche, pensée critique, communication, autogestion) et des pistes de Créativité, Activité, Service (CAS) et de Mémoire. »*',
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Évaluation interne : Maîtriser l’Oral individuel (IO · 25 % · 30 points)',
      },
      {
        type: 'paragraph',
        markdown:
          'L’**Oral individuel** est l’épreuve où votre personnalité intellectuelle et votre sensibilité francophone brillent le plus directement. Le barème officiel SL sur **30 points** évalue quatre critères complémentaires : **Critère A : Langue (12 pts)** (correction grammaticale, précision du vocabulaire thématique, prononciation claire et intonation naturelle) ; **Critère B1 : Message — Stimulus visuel (6 pts)** (pertinence de la description, interprétation culturelle francophone et pertinence thématique) ; **Critère B2 : Message — Conversation (6 pts)** (profondeur des idées, exemples concrets et ouverture sur un second thème) ; **Critère C : Compétences interactives (6 pts)** (compréhension des questions, spontanéité des réponses et fluidité des échanges).',
      },
      {
        type: 'paragraph',
        markdown:
          'La clé d’un **6/6 au Critère B1** réside dans le minutage rigoureux des **3 à 4 minutes** de présentation initiale. Ne consacrez jamais plus de **45 à 60 secondes** à décrire littéralement l’image (*« Au premier plan on voit… à l’arrière-plan il y a… en haut à gauche… »*). Dès la deuxième minute, basculez vers l’**interprétation thématique et culturelle** en utilisant des pivots fluides : *« Cette photographie illustre de manière frappante le thème prescrit [X], et plus particulièrement la question de… »*, puis *« Dans le monde francophone, par exemple au Québec / en France / au Sénégal / au Maghreb, ce phénomène renvoie à… »*. Enfin, terminez votre monologue par une **problématique personnelle ou nuance critique** qui prépare naturellement les questions de suivi.',
      },
      {
        type: 'playable_diagram',
        spec: FR_V3_IO_PROTOCOL_STEPS,
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Les 4 erreurs fatales à l’Oral individuel (SL)',
        markdown:
          '1. **Rédiger des phrases complètes pendant les 15 minutes de préparation :** L’examinatrice ne tolère qu’un plan de **10 mots-clés ou puces brèves maximum** — lire une feuille rédigée pénalise lourdement Critère A et Critère C.\n2. **Oublier la Francophonie :** Décrire une photo de recyclage ou d’école sans jamais la relier à une réalité culturelle francophone précise plafonne Critère B1 à 3/6.\n3. **Répondre par « Oui / Non / Je suis d’accord » en Parties 2 et 3 :** Développez toujours en trois mouvements : *Position nuancée → Exemple précis issu d’un texte ou de l’actualité francophone → Conséquence ou limite*.\n4. **Rester bloqué sur un mot oublié :** Utilisez des stratégies de périphrase en français (*« c’est une personne qui… », « autrement dit… », « ce que je veux souligner, c’est… »*) sans jamais passer à l’anglais.',
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Stratégies d’élite pour l’Épreuve 2 — Compréhension écrite & orale (`EXAM.2`)',
      },
      {
        type: 'paragraph',
        markdown:
          'L’**Épreuve 2** pèse **50 % de la note finale IB** (25 % lecture en 1 h / 40 points + 25 % écoute en ~45 min / 25 points). Contrairement aux idées reçues, la réussite en compréhension repose autant sur la **méthode de lecture/écoute** que sur le stock lexical. En **Compréhension écrite** (Textes A, B et C de difficulté progressive, du prospectus informatif au texte analytique ou littéraire), lisez toujours les questions **avant** le texte pour activer votre repérage sélectif, puis observez rigoureusement le format exigé par chaque question IB :',
      },
      {
        type: 'paragraph',
        markdown:
          '- **Questions Vrai / Faux avec justification (4 à 6 pts par texte) :** Cochez la case ET recopiez **exactement** le segment du texte qui prouve votre verdict. Si vous reformulez la phrase du texte avec vos propres mots alors que la consigne dit *« justifiez par des mots du texte »*, le correcteur IB ne peut pas attribuer le point. Attention aux affirmations doubles reliées par *et/mais* : si une seule moitié est fausse, toute l’affirmation est **Fausse**.\n- **Repérage de synonymes en contexte :** Respectez strictement la classe grammaticale du mot demandé (nom ↔ nom, verbe conjugué ↔ verbe conjugué, adjectif ↔ adjectif) dans la plage de lignes indiquée.\n- **Pronoms référents (*le, la, les, lui, leur, en, y, dont, celui-ci, ce dernier*) :** Testez l’accord en genre et en nombre en remplaçant le pronom dans la phrase d’origine pour vérifier que le sens reste 100 % logique.\n- **Textes à trous (connecteurs logiques) :** Analysez le rapport logique entre les deux phrases entourant la lacune (*cause, conséquence, concession, opposition, but*) et vérifiez si le verbe qui suit est à l’**indicatif** (*alors que, parce que*) ou au **subjonctif** (*bien que, afin que*) !',
      },
      {
        type: 'paragraph',
        markdown:
          'En **Compréhension orale** (~45 min, trois enregistrements joués deux fois chacun, avec écouteurs en classe selon le plan CRHS), exploitez la **minute de lecture préparatoire** avant chaque piste audio pour souligner les mots-clés, repérer le nombre d’interlocuteurs et anticiper les champs lexicaux. Durant la **première écoute**, saisissez l’idée générale, le ton (*ironique, enthousiaste, inquiet, critique*) et éliminez les distracteurs évidents. Lors de la **deuxième écoute**, soyez particulièrement attentif aux **marqueurs de rupture ou de nuance** (*en fait, contrairement à, bien que, finalement, pourtant, sauf que*) : les concepteurs d’épreuves IB placent très souvent un faux piège juste avant *« mais en réalité… »* ou une négation partielle (*« ne… plus », « ne… guère », « peu de »*).',
      },
      {
        type: 'playable_diagram',
        spec: FR_V3_P2_READING_WORKED_EXAMPLE,
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'Théorie de la connaissance (TdC) & Langue — Modes de connaissance',
        markdown:
          'Dans *Le monde en français* (pp. 130, 170, 229, 270), la langue n’est pas un simple outil neutre de traduction : elle façonne notre perception du monde. Posez-vous ces questions transversales utiles pour l’Oral individuel : **1)** Dans quelle mesure maîtriser plusieurs langues ou registres modifie-t-il notre manière de raisonner et de ressentir (voir Nancy Huston, p. 77) ? **2)** Les statistiques médiatiques et les étiquettes « politiquement correctes » révèlent-elles la réalité sociale ou la filtrent-elles selon des valeurs culturelles implicites ?',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Au premier plan / À l’arrière-plan',
            definitionMarkdown:
              'Locutions spatiales indispensables pour situer en moins de 45 secondes les éléments clés d’un stimulus visuel à l’Oral individuel.',
            markschemeKeyword: 'Critère B1 description structurée',
          },
          {
            term: 'Ce cliché met en lumière / dénonce…',
            definitionMarkdown:
              'Formule de transition permettant de quitter la description littérale pour interpréter le message implicite et le thème IB.',
            markschemeKeyword: 'Interprétation culturelle francophone',
          },
          {
            term: 'Le destinataire / Le but communicatif',
            definitionMarkdown:
              'Concepts IB clés déterminant qui lit/écoute le message et si l’objectif vise à informer, convaincre, persuader ou protester.',
            markschemeKeyword: 'Compréhension conceptuelle',
          },
          {
            term: 'La variation (familier · courant · soutenu)',
            definitionMarkdown:
              'Adaptation du vocabulaire, de la syntaxe et du tutoiement/vouvoiement selon le statut de l’interlocuteur et le support.',
            markschemeKeyword: 'Critère C & Épreuve 2',
          },
          {
            term: 'Il convient de souligner que…',
            definitionMarkdown:
              'Connecteur analytique soutenu idéal pour introduire un argument nuancé à l’Oral individuel comme en Épreuve 1.',
            markschemeKeyword: 'Registre C1 / Critère A',
          },
          {
            term: 'En connaissance de cause',
            definitionMarkdown:
              'Expression idiomatique (p. 283) signifiant « en ayant toutes les informations nécessaires avant de décider ou d’agir ».',
            markschemeKeyword: 'Expression idiomatique IB',
          },
          {
            term: 'Passer à la trappe / Taper à côté de la plaque',
            definitionMarkdown:
              'Locutions imagées fréquentes en Compréhension écrite et orale (p. 282–283) : être oublié/négligé ; être hors sujet.',
            markschemeKeyword: 'Compréhension idiomatique P2',
          },
          {
            term: 'Force est de constater que…',
            definitionMarkdown:
              'Tournure impersonnelle journalistique et académique (p. 159, 346) pour introduire un fait avéré avant de l’analyser.',
            markschemeKeyword: 'Style soutenu impersonnel',
          },
        ],
      },
    ],
  },

  // ==========================================================================
  // GUIDE 2 (EXAM.1) — Preserved V2 Title
  // ==========================================================================
  {
    topicCode: 'EXAM.1',
    title: 'Épreuve 1 : Maîtriser les 16 Types de textes & Registres (Ch. 6, pp. 330–364)',
    summary:
      'Manuel complet de l’Épreuve 1 (Production écrite · 1 h 15 · 25 % · 30 pts) fondé sur le Chapitre 6 de *Le monde en français* : grilles d’analyse des 16 formats (1A Article à 16A Tract), sélection stratégique du format, maîtrise du registre *tu/vous* et construction d’une copie de niveau 7.',
    sourceFileNames: [
      'Le monde en français - Cambridge (2018 Coursebook).pdf',
      'plan du cours IB 11e 2026.pdf',
    ],
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: '1. Anatomie de l’Épreuve 1 (1 h 15 · 250–400 mots · 30 points)',
      },
      {
        type: 'paragraph',
        markdown:
          'L’**Épreuve 1 de Français B Niveau Moyen** (p. 331) dure **1 heure 15 minutes** et vaut **25 % de la note finale IB**. Trois sujets différents, chacun ancré dans l’un des cinq thèmes prescrits, vous sont proposés. Pour le sujet que vous choisissez, vous devez **sélectionner le type de texte le plus approprié parmi trois propositions** et rédiger une réponse de **250 à 400 mots**. À l’inverse des deux autres épreuves, aucun brouillon long n’est nécessaire si vous consacrez les **7 premières minutes** à analyser la situation de communication et à bâtir un plan en trois temps (introduction, 2–3 paragraphes développés, conclusion adaptée au format).',
      },
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Les 6 questions d’analyse textuelle du Chapitre 6 (pp. 332–333)',
        markdown:
          'Avant d’écrire la moindre ligne, appliquez la grille officielle de *Le monde en français* (pp. 332–333) :\n1. **Mise en page :** Quels éléments visuels et structurels caractérisent le format (*en-tête, objet, chapeau, intertitres, listes, date/heure, appel, formule finale, signature*) ?\n2. **Destinataire :** Écrivez-vous au grand public, à des camarades, à un ami proche, à une rédaction, à vous-même ou à une autorité (*maire, proviseur, employeur*) ?\n3. **But communicatif :** Voulez-vous informer, argumenter, conseiller, critiquer/protester, émouvoir, faire agir ou raconter une anecdote ?\n4. **Structure :** Quelle progression logique organise l’introduction, le développement et la clôture ?\n5. **Langue :** Quels temps verbaux, champs lexicaux, types de phrases (*interrogatives, impératives, exclamatives*) et quel registre (*familier, courant, soutenu* ; *tu* vs *vous*) s’imposent ?\n6. **Procédés d’accroche :** Comment capter et retenir le lecteur (*anecdote, citation, statistique, question rhétorique, métaphore, règle des trois répétitions*) ?',
      },
      {
        type: 'paragraph',
        markdown:
          'Le barème sur **30 points** récompense trois dimensions équilibrées :\n- **Critère A — Langue (12 pts) :** Richesse et justesse du vocabulaire thématique, variété des structures complexes (*subjonctif, conditionnel, relatifs composés, discours indirect, mise en relief*), correction orthographique et grammaticale.\n- **Critère B — Message (12 pts) :** Couverture complète de **tous les points de la consigne** (souvent 2 ou 3 tâches précises dans l’énoncé), pertinence des exemples culturels francophones et cohérence de la progression par connecteurs logiques.\n- **Critère C — Compréhension conceptuelle (6 pts) :** Pertinence absolue du choix de format parmi les 3 proposés, respect fidèle de ses **conventions de mise en page**, adéquation constante du **registre** et conscience claire du destinataire et du but.',
      },
      {
        type: 'playable_diagram',
        spec: FR_V3_TEXT_TYPES_16_MATRIX,
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Comment départager les 3 types de textes proposés le jour de l’examen ?',
      },
      {
        type: 'paragraph',
        markdown:
          'Sous chaque sujet d’Épreuve 1 figurent **trois types de textes** : en règle générale, **un format est optimal**, **un deuxième est partiellement défendable** si le registre et le cadre sont habilement ajustés, et **un troisième constitue un piège conceptuel**. Comparez systématiquement les paires les plus piégeuses du Chapitre 6 :',
      },
      {
        type: 'paragraph',
        markdown:
          '- **Article (1A) vs Éditorial (8A) vs Rapport (15A) :** L’*article* raconte et analyse un fait avec des intertitres journalistiques et des témoignages ; l’*éditorial* engage explicitement la ligne d’opinion du journal (*nous*) pour défendre un choix de société ; le *rapport* répond à une demande interne ou institutionnelle par des constats chiffrés impartiaux et des recommandations sans émotion.\n- **Lettre officielle (13A) vs Proposition (14A) vs Courrier des lecteurs (12A) :** Toutes trois exigent le **vouvoiement**, mais la *lettre officielle* traite d’une plainte, requête ou communication administrative avec coordonnées complètes et formule de politesse protocolaire (*« Je vous prie d’agréer… »*) ; la *proposition* met l’accent sur un projet chiffré, son financement et ses bénéfices mutuels (*modèle p. 360*) ; le *courrier des lecteurs* répond à un article précis paru dans un journal donné.\n- **Blog (2A) vs Journal intime (11A) vs Courriel (4A) :** Tous emploient la 1re personne (*je*), mais le *journal intime* est privé (aucun lecteur extérieur, adresse *« Cher journal »*) ; le *blog* est public et interactif (titre accrocheur, heure/date, appel aux commentaires) ; le *courriel* s’adresse à un ou plusieurs destinataires nommés avec ligne *Objet*.\n- **Brochure (3A) vs Guide (9A) vs Tract (16A) :** La *brochure* informe et séduit visuellement par rubriques scannables ; le *guide* accompagne pas à pas par des recommandations pratiques (*impératif, subjonctif, devoir*) ; le *tract* milite dans l’urgence avec un titre choc, des questions rhétoriques et un appel à manifester ou signer une pétition.',
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Les 5 pièges majeurs du Critère C & du compteur de mots',
        markdown:
          '1. **Rupture de *tu/vous* :** Passer de *« Madame la Directrice »* à *« Tu dois savoir que… »* ou conclure une lettre officielle par *« Cordialement »* ou *« Bises »* fait perdre instantanément 2 à 3 points en Critère C.\n2. **Dépasser ou rester sous la fourchette 250–400 mots :** En dessous de 250 mots, le Critère B reste incomplet ; au-delà de 450 mots, les erreurs d’inattention et répétitions pénalisent le Critère A. Visez **310 à 370 mots**.\n3. **Oublier la mise en page du format choisi :** Écrire un *Article* comme un bloc unique sans titre ni chapeau, ou rédiger un *Rapport* sans en-tête (*À l’attention de / De la part de / Date / Objet*), réduit Critère C de moitié.\n4. **Tract ou Brochure rédigé en dissertation continue :** Utilisez impérativement des sous-titres courts, des listes à puces, un slogan et des coordonnées pratiques.\n5. **Discours sans public :** N’oubliez jamais l’apostrophe d’ouverture, les interpellations au cours du texte (*« Pensez-vous réellement que… ? »*) et les remerciements finaux.',
      },
      {
        type: 'playable_diagram',
        spec: FR_V3_P1_STUDIO_CORE,
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Méthode de rédaction Band 7 : Planification, Connecteurs C1 & Auto-contrôle',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Modèle d’excellence Cambridge (Ch. 6, 13A p. 358 & 14A p. 360)',
        markdown:
          '> **Lettre officielle :** *« Restant à votre disposition pour tout complément d’information, et vous remerciant de votre contribution, nous vous prions d’agréer, Monsieur, l’expression de nos salutations distinguées. »*\n> **Proposition :** *« Cependant, ne vous semble-t-il pas nécessaire que notre expression orale s’améliore ? C’est la raison pour laquelle nous voudrions vous demander la permission d’organiser un échange scolaire… Dans l’attente d’une réponse favorable, veuillez agréer, Madame, nos sincères salutations. »*',
      },
      {
        type: 'paragraph',
        markdown:
          'Pour atteindre **10–12/12 en Critère A**, planifiez délibérément **quatre marqueurs de niveau B2/C1** dans chaque copie avant même de commencer le premier paragraphe : **(1) un subjonctif déclenché** (*« Bien que cette initiative comporte des coûts… », « Il est indispensable que nous agissions… », « afin que chacun puisse… »*) ; **(2) un conditionnel ou une hypothèse** (*« Si notre établissement adoptait ce système, les élèves bénéficieraient… »*) ; **(3) un pronom relatif précis ou composé** (*dont, où, grâce auquel, parmi lesquelles*) ; et **(4) une mise en relief** (*« Ce qui importe avant tout, c’est… »*). Relisez systématiquement les 5 dernières minutes en vérifiant **les accords sujet-verbe, le genre des noms fréquents (*le problème, la situation, une solution, le choix, un projet*), les participes passés et la ponctuation française** (espace avant `?`, `!`, `:`, `;` en typographie soignée).',
      },
      {
        type: 'playable_diagram',
        spec: FR_V3_P1_ESSAY_WORKED,
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'Réflexion TdC : Forme du texte, pouvoir rhétorique et vérité',
        markdown:
          'Le choix d’un type de texte (ex. un *Tract* militant vs un *Rapport* neutre sur le même événement) modifie-t-il la nature de la connaissance transmise ? À quel moment la stratégie **persuasive** (appel aux émotions et hyperboles) cesse-t-elle d’être éthique pour devenir manipulation médiatique ?',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Certes… toutefois / néanmoins',
            definitionMarkdown:
              'Paire concessive soutenue permettant de reconnaître un contre-argument avant d’établir sa propre thèse avec élégance.',
            markschemeKeyword: 'Concession / Critère A C1',
          },
          {
            term: 'Non seulement… mais encore',
            definitionMarkdown:
              'Structure d’addition emphatique idéale dans un Discours, Éditorial ou Courrier des lecteurs.',
            markschemeKeyword: 'Emphase rhétorique',
          },
          {
            term: 'Afin que / De sorte que (+ subjonctif / indicatif)',
            definitionMarkdown:
              'Exprime respectivement le but recherché (*afin que + subjonctif*) et la conséquence constatée (*de sorte que + indicatif*).',
            markschemeKeyword: 'Connecteurs complexes',
          },
          {
            term: 'Il convient de noter / Force est de constater',
            definitionMarkdown:
              'Ouvertures impersonnelles adaptées aux Rapports (15A), Dissertations (7A) et Articles formels (1A).',
            markschemeKeyword: 'Registre soutenu objectif',
          },
          {
            term: 'Je vous prie d’agréer, Madame/Monsieur, l’expression de mes salutations distinguées.',
            definitionMarkdown:
              'Formule de politesse officielle canonique des Lettres officielles (13A) et Propositions (14A) — reprendre exactement l’appel initial.',
            markschemeKeyword: 'Convention Critère C 13A',
          },
          {
            term: 'À votre avis, qu’en pensez-vous ? (Appel aux commentaires)',
            definitionMarkdown:
              'Clôture obligatoire d’un billet de Blog (2A) invitant le lectorat en ligne à réagir.',
            markschemeKeyword: 'Convention Critère C 2A',
          },
          {
            term: 'Chapeau (journalistique)',
            definitionMarkdown:
              'Court paragraphe d’accroche en gras sous le titre d’un Article (1A) résumant Qui, Quoi, Où et Quand.',
            markschemeKeyword: 'Convention Critère C 1A',
          },
          {
            term: 'Règle des trois (Anaphore)',
            definitionMarkdown:
              'Procédé oratoire du Discours (6A) et du Tract (16A) consistant à répéter une structure trois fois pour frapper la mémoire.',
            markschemeKeyword: 'Procédé rhétorique 6B/16B',
          },
        ],
      },
    ],
  },

  // ==========================================================================
  // GUIDE 3 (T1.1) — Thème 1 : Identités (Ch. 1, pp. 10–79)
  // ==========================================================================
  {
    topicCode: 'T1.1',
    title: 'Thème 1 : Identités — Modes de vie, Santé, Valeurs & Langues (Ch. 1, pp. 10–79)',
    summary:
      'Synthèse intégrale de l’Unité 1 de *Le monde en français* (`T1.1`–`T1.5`) : construction identitaire et double culture (Amin Maalouf, Mai Lam Nguyen-Conan, Madjid Si Hocine), choix de vie alternatifs (Sarah Gysler, Sylvain Tesson), santé physique/mentale (Amélie Nothomb), Francophonie et langues en danger (Unesco, Nancy Huston).',
    sourceFileNames: [
      'Le monde en français - Cambridge (2018 Coursebook).pdf',
      'plan du cours IB 11e 2026.pdf',
    ],
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: '1. Unité 1.1 — Je suis, tu es, nous sommes : Identité plurielle et lutte contre les clichés (`T1.1`, `T1.3`, `T1.4`)',
      },
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Questions directrices du Chapitre 1 (Cambridge pp. 10–79 & CRHS)',
        markdown:
          '- **Question centrale (CRHS) :** *De quelle façon exprimons-nous notre identité ?*\n- **1.1 (p. 11) :** Comment et pourquoi certains clichés réduisent-ils l’identité d’une personne ou d’une génération ?\n- **1.2 (p. 31) :** *Comment notre identité peut-elle se distinguer de celle des autres ?* Conformisme social vs choix marginal.\n- **1.3 (p. 47) :** *Le corps façonne-t-il notre identité ?* Santé physique, malbouffe, troubles alimentaires et bien-être psychologique.\n- **1.4 (p. 64) :** *Comment la langue reflète-t-elle notre identité ?* Bilinguisme, argot des jeunes, langage inclusif et langues menacées.',
      },
      {
        type: 'paragraph',
        markdown:
          'Dans l’Unité 1.1 (*pp. 11–30*), l’identité se définit à la croisée de sphères multiples : familiale (*l’aîné(e), issu(e) d’une famille…*), sociale et scolaire (*élève de l’IB, bénévole*), physique, politique ou religieuse (*laïcité, valeurs personnelles*), et culturelle. Face aux étiquettes réductrices — qu’elles concernent le genre (*macho, fragile*) ou la génération — le collectif étudiant **#Stopauxclichés** (*Studyrama*, p. 16) démonte huit stéréotypes fréquents sur les jeunes : non, tous les jeunes ne vivent pas « H24 » collés à leur smartphone, ne refusent pas l’autorité ou ne rejettent pas l’engagement ; ils privilégient simplement un **engagement concret à court terme** (organiser un concert humanitaire en deux mois) plutôt que les partis politiques traditionnels.',
      },
      {
        type: 'paragraph',
        markdown:
          'À l’échelle interculturelle francophone, l’Unité 1.1 met en regard trois témoignages majeurs sur la **double appartenance** :\n- **Mai Lam Nguyen-Conan** (*« Je suis devenue autonome envers notre mère patrie »*, *L’Express*, p. 20) : arrivée du Vietnam en France à 7 ans, elle s’est d’abord forcée à parler « sans accent » et à devenir « plus française que les Français », avant de rejeter l’alternative réductrice entre assimilation totale et marginalisation, refusant *« le discours comptable du 50/50 »*.\n- **Madjid Si Hocine** (*« C’est en Algérie que j’ai compris que j’étais français »*, p. 23) : élevé en banlieue parisienne dans le « mythe du retour », ce médecin gériatre découvre durant ses études en Algérie à quel point les valeurs d’égalité, de fraternité et de liberté d’expression de la France font déjà partie de son identité profonde.\n- **Amin Maalouf** (*Les identités meurtrières*, p. 27) : écrivain né au Liban dont l’arabe est la langue maternelle mais qui écrit ses romans en français depuis vingt-deux ans sur la terre de France. Sa thèse centrale constitue une citation en or pour l’Épreuve 1 comme pour l’Oral individuel :',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Extrait littéraire de référence — Amin Maalouf, Les identités meurtrières (p. 27)',
        markdown:
          '> *« Moitié français donc, et moitié libanais ? Pas du tout ! L’identité ne se compartimente pas, elle ne se répartit ni par moitiés, ni par tiers, ni par plages cloisonnées. Je n’ai pas plusieurs identités, j’en ai une seule, faite de tous les éléments qui l’ont façonnée, selon un « dosage » particulier qui n’est jamais le même d’une personne à une autre. »*\n\n**Application IB (`T1.5` / IO) :** Citez également les écrivains francophones plurilingues présentés p. 28 (**Kim Thúy** au Québec/Vietnam, **Nancy Huston** au Canada/France, **Yasmina Khadra**, **Dai Sijie**, **Agota Kristof**) pour prouver que la langue française est un espace créatif mondialisé et non la propriété d’un seul État.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Unité 1.2 — Vivre autrement : Conformisme, sobriété et habitats alternatifs (`T1.1`, `T1.4`)',
      },
      {
        type: 'paragraph',
        markdown:
          'Sommes-nous vraiment libres de nos ambitions, ou suivons-nous une « voie toute tracée » par la société de consommation ? L’article *Pourquoi faire le choix d’une vie alternative ?* (*toitsalternatifs.fr*, pp. 34–35) dénonce cet « engrenage » — études longues, **CDI** bien payé, maison à crédit, voiture luxueuse — qui pousse parfois au surmenage et à la dépression. Trois modèles concrets de marginalité choisie illustrent ce débat dans le monde francophone :\n1. **Le nomadisme minimaliste :** La jeune Suissesse **Sarah Gysler** (*L’aventurière fauchée*, p. 38) plaque travail et appartement à 20 ans pour parcourir le monde sans argent grâce au *Couchsurfing*, à l’auto-stop et au troc (*« je préfère ma liberté au confort… l’imprévu à la sécurité »*).\n2. **L’habitat léger et la décroissance :** **Caroline**, propriétaire d’une **tiny house** en France (p. 42), montre comment réduire son logement diminue l’entretien, l’empreinte écologique et la contrainte financière, tandis que **Sylvain Tesson** (*Dans les forêts de Sibérie*, p. 43) passe six mois au bord du lac Baïkal pour *« régler sa dette »* envers la planète et opposer le calme d’une fenêtre forestière à la dispersion des écrans urbains.\n3. **L’éco-communauté solidaire (pp. 44–45) :** Contrairement au cliché du marginal isolé, **Yousra et Mehdi** (habitat participatif urbain), **Lucie et Romain** à Bordeaux (maison rénovée avec espaces partagés), **Léo et Rosalie** dans les Pyrénées (*Écolieu Verte Campagne* en permaculture) et **Gérard** (village intergénérationnel) prouvent qu’on peut *« vivre autrement, mais ensemble »*.',
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Unité 1.3 — En pleine forme ! Santé physique, nutrition et équilibre mental (`T1.2`)',
      },
      {
        type: 'paragraph',
        markdown:
          'Le sous-thème **Santé et bien-être** (`T1.2`) unit prévention quotidienne, critique de la malbouffe et vulnérabilité psychologique. Les **20 conseils pour une vie plus saine** de David Servan-Schreiber (p. 48) insistent sur des gestes accessibles : privilégier les farines complètes, réduire le sucre liquide, marcher trente minutes par jour, éviter les contenants en plastique chauffés, pratiquer la respiration relaxante et s’entourer d’au moins deux amis en période difficile. À l’opposé, l’article *Malbouffe : mangez-moi, mangez-moi, mangez-moi !* (*Public Ados*, p. 50) analyse pourquoi les adolescents fréquentent les fast-foods (pauses déjeuner trop courtes, cantines ou *selfs* jugés fades et coûteux), malgré les risques graves : **un ado sur dix** souffre d’obésité (3 à 4 fois plus qu’il y a 30 ans) et l’abus de sodas riches en acide phosphorique fragilise la masse osseuse.',
      },
      {
        type: 'paragraph',
        markdown:
          'Sur le plan psychologique et identitaire, l’extrait littéraire d’**Amélie Nothomb** (*Biographie de la faim*, pp. 54–55) montre le déchirement intérieur lié à l’anorexie à l’adolescence (*« Manger était le diable qui séparait mon corps de ma tête »*, refus de devenir femme), tandis que le reportage du **Monde** sur les stages du **SEDAP à Dijon** (p. 60) met en lumière une approche de prévention non moralisatrice face aux stupéfiants : responsabiliser les jeunes conducteurs et consommateurs plutôt que de prononcer de simples slogans interdits. À l’échelle de votre vie d’élève IB, reliez toujours santé physique et santé mentale (*« être bien dans sa peau »*, gérer le stress des examens par le sommeil et le soutien social).',
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Unité 1.4 — Langues et langages : Francophonie, registre et biodiversité linguistique (`T1.5`)',
      },
      {
        type: 'paragraph',
        markdown:
          'Parler français relie plus de **200 millions de locuteurs sur les cinq continents** (OIF, *diplomatie.gouv.fr*, p. 65) et ouvre l’accès aux grandes institutions internationales (ONU, UNESCO, CIO, Croix-Rouge), aux médias mondiaux (**TV5Monde, France 24, RFI**) et à plus de 50 % du vocabulaire anglais issu du français. Pourtant, la langue reste un terrain de tension identitaire constant :\n- **Le langage des adolescents & le verlan (p. 66) :** Selon Stéphane Ribeiro, l’argot jeune (*ouf, relou, boloss*) ne prouve pas une incapacité à parler français ; c’est un **code identitaire générationnel** destiné à exclure les adultes, et les jeunes savent parfaitement adapter leur registre à l’école ou en entretien.\n- **Le langage politiquement correct (pp. 67–69) :** Dire *malentendant, non-voyant, personne à mobilité réduite, demandeur d’emploi, technicien de surface* ou *sans-abri* cherche à éviter la stigmatisation, bien que ses détracteurs y voient parfois un masque superficiel qui ne règle pas les inégalités réelles.\n- **La crise des langues en danger (Unesco, p. 73) :** **96 % des langues ne sont parlées que par 4 % de la population mondiale**, et **une langue disparaît tous les 15 jours** ! Quand une langue autochtone orale s’efface face à la mondialisation, l’humanité perd non seulement des légendes et une vision du monde, mais aussi des savoirs écologiques et médicinaux précieux (comme la taxonomie des plantes en Amazonie). Pour survivre, une langue doit s’écrire, enrichir son dictionnaire et inspirer de la fierté à ses jeunes locuteurs (*Colette Grinevald*, p. 73).\n- **Le « faux bilinguisme » (Nancy Huston, *Nord perdu*, p. 77) :** Même une écrivaine bilingue originaire de Calgary éprouve une **asymétrie affective** : le français acquis à l’âge adulte domine la sphère rationnelle et intellectuelle, tandis que l’anglais maternel conserve la charge émotionnelle et sensorielle des comptines de l’enfance.',
      },
      {
        type: 'playable_diagram',
        spec: FR_V3_T1_STUDIO,
      },
      {
        type: 'heading',
        level: 2,
        text: '5. Maîtrise grammaticale du Thème 1 & Stratégies d’examen',
      },
      {
        type: 'callout',
        variant: 'definition',
        title: 'Rappel grammatical ciblé (Ch. 1) — But, Conseil & Gérondif',
        markdown:
          '- **Conseil au subjonctif (1.3, p. 59) :** *Il faut que / Il est essentiel que / Il vaudrait mieux que / Il est préférable que* + **subjonctif** (*que vous dormiez, que nous prenions, qu’elle fasse*).\n- **Expression du but (1.4) :** *pour / afin de + infinitif* (même sujet : *« J’étudie le français afin de travailler à Montréal »*) vs *pour que / afin que + subjonctif* (sujets différents : *« Les gouvernements financent des écoles bilingues afin que les enfants maîtrisent leur langue ancestrale »*).\n- **Le gérondif (1.2) :** *en + participe présent* (*« En réduisant sa consommation, on gagne en sérénité »*) — idéal pour exprimer simultanément le moyen et la cause dans une phrase synthétique.',
      },
      {
        type: 'playable_diagram',
        spec: FR_V3_T1_GRAMMAR_MATRIX,
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Pièges classiques sur le Thème 1 (Paper 1 & Oral individuel)',
        markdown:
          '1. **Faux-amis identitaires :** Attention : *« actuellement »* signifie *currently* (jamais *actually*, qui se dit *en fait / à vrai dire*) ; *« supporter »* signifie *endure/put up with* (pas *support*, qui se dit *soutenir / appuyer*).\n2. **Éviter le ton moralisateur plat :** Sur la santé ou la vie alternative, nuancez toujours (*« Bien que la malbouffe soit pratique entre deux cours, ses effets à long terme demeurent préoccupants »*) au lieu d’écrire *« Le fast-food est très mauvais, il faut manger des légumes »*.\n3. **Ancrage francophone :** Liez toujours la langue et l’identité à un exemple concret du monde francophone (la protection du français au Québec, l’OIF, les accents régionaux en Acadie/Belgique/Suisse, ou le métissage culturel en banlieue française).',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'TdC — Langue maternelle, langue adoptive et biais cognitifs',
        markdown:
          'Si, comme l’affirme **Nancy Huston** (p. 77), la langue maternelle est liée à l’émotion et la langue apprise à l’âge adulte à la rationalité analytique, pensons-nous différemment selon la langue que nous parlons ? De plus, que perd la science lorsque plus de **90 % des contenus numériques** sont rédigés en seulement 12 langues ?',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Un préjugé / Une idée reçue / Un stéréotype',
            definitionMarkdown:
              'Opinion préconçue ou représentation caricaturale appliquée sans examen à un groupe (Unité 1.1, p. 14).',
            markschemeKeyword: 'Lutte contre la discrimination',
          },
          {
            term: 'Être tiraillé(e) entre deux cultures / Être métissé(e)',
            definitionMarkdown:
              'Ressentir une tension ou vivre un enrichissement identitaire à la jonction de plusieurs héritages culturels (p. 25).',
            markschemeKeyword: 'Double culture',
          },
          {
            term: 'Tout plaquer / Sauter le pas',
            definitionMarkdown:
              'Abandonner brusquement son mode de vie antérieur ; se décider enfin à agir malgré le risque (p. 35, 38).',
            markschemeKeyword: 'Vie alternative',
          },
          {
            term: 'La société de consommation / La décroissance',
            definitionMarkdown:
              'Modèle centré sur l’accumulation matérielle vs choix volontaire de sobriété écologique et relationnelle (pp. 35–43).',
            markschemeKeyword: 'Conformisme vs marginalité',
          },
          {
            term: 'Être bien / mal dans sa peau',
            definitionMarkdown:
              'Ressentir un équilibre psychologique et corporel positif ou au contraire un malaise intérieur (p. 57).',
            markschemeKeyword: 'Santé mentale (T1.2)',
          },
          {
            term: 'La malbouffe / Le grignotage',
            definitionMarkdown:
              'Alimentation industrielle trop riche en sel, sucre et graisses ; action de manger de façon désordonnée entre les repas (p. 50).',
            markschemeKeyword: 'Prévention nutritionnelle',
          },
          {
            term: 'Une langue vernaculaire / En voie d’extinction',
            definitionMarkdown:
              'Langue locale de tradition orale menacée de disparition face aux langues dominantes de la mondialisation (pp. 73–74).',
            markschemeKeyword: 'Biodiversité linguistique',
          },
          {
            term: 'J’en ai ras-le-bol / Il faut que ça cesse !',
            definitionMarkdown:
              'Expressions d’exaspération : *ras-le-bol* appartient au registre familier ; préférez *« Il est inadmissible que + subjonctif »* en registre soutenu.',
            markschemeKeyword: 'Registre familier vs soutenu',
          },
        ],
      },
    ],
  },

  // ==========================================================================
  // GUIDE 4 (T2.1) — Thème 2 : Expériences (Ch. 2, pp. 80–139)
  // ==========================================================================
  {
    topicCode: 'T2.1',
    title: 'Thème 2 : Expériences — Voyages, Mémoire, Rites de passage & Migrations (Ch. 2, pp. 80–139)',
    summary:
      'Synthèse complète de l’Unité 2 de *Le monde en français* (`T2.1`–`T2.6`) : tourisme de masse vs voyages solidaires, mémoire individuelle et collective (Simone Veil, Jorge Semprún), rites de passage francophones (Camara Laye, baccalauréat), migrations (Omar Ba, Laurent Gaudé) et maîtrise narrative des temps du passé.',
    sourceFileNames: [
      'Le monde en français - Cambridge (2018 Coursebook).pdf',
      'plan du cours IB 11e 2026.pdf',
    ],
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: '1. Unité 2.1 — Les voyages forment la jeunesse : Du tourisme stressant au voyage solidaire (`T2.1`, `T2.2`)',
      },
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Questions directrices du Chapitre 2 (Cambridge pp. 80–139 & CRHS)',
        markdown:
          '- **Question centrale (CRHS) :** *Comment le passé construit-il notre avenir ?*\n- **2.1 (p. 81) :** *En quoi les voyages nous aident-ils à élargir nos horizons ?*\n- **2.2 (p. 96) :** *Comment le passé construit-il notre avenir ?* Mémoire familiale, objets transmis et devoir de mémoire historique.\n- **2.3 (p. 114) :** *Comment et pourquoi marque-t-on certaines étapes de la vie ?* Rites traditionnels et seuils modernes.\n- **2.4 (p. 128) :** *Migrer, à quel prix ?* Frontières, fuite des cerveaux, clandestinité et intégration.',
      },
      {
        type: 'paragraph',
        markdown:
          'Le voyage contemporain oscille entre **consommation stressante** et **métamorphose personnelle**. Dans *Voyager, quelle plaie !* (*La Presse*, Canada, p. 82), André Désiront rapporte que 28,7 % des voyageurs jugent le voyage anxiogène (l’avion arrivant en tête à 47,5 % devant la voiture à 38 %, tandis que le train n’inquiète que 2 % des sondés). Parallèlement, l’enquête Expedia citée dans *Le Monde* (*Les Français sont parmi les plus mauvais touristes*, p. 86) souligne les stéréotypes culturels : les touristes râleurs, peu généreux ou réfractaires aux langues locales créent des tensions, là où la curiosité culinaire et la courtoisie ouvrent les portes.',
      },
      {
        type: 'paragraph',
        markdown:
          'Face au tourisme de masse, deux alternatives émergent dans l’Unité 2.1 :\n- **Le Couchsurfing (pp. 87–88) :** Plus de 4 millions de voyageurs par an logent gratuitement chez l’habitant pour pratiquer la langue et échapper aux hôtels impersonnels, malgré le manque d’intimité ou les risques de mésentente.\n- **Le tourisme humanitaire / chantier de solidarité (pp. 89–91) :** **Marianne (15 ans)** et **Mike (14 ans)**, partis trois semaines rénover une maison de la culture à **Tougan (Burkina Faso)**, reviennent profondément mûris : confrontés au manque d’eau et au recyclage intégral des ressources par les habitants, ils abandonnent leurs plaintes superficielles et nouent des amitiés durables avec leurs binômes burkinabés. À l’inverse, la nouvelle québécoise de **Sylvie Massicotte** (*Ne me demandez pas*, p. 93) rappelle avec lucidité que le tourisme effréné (*« Tu as fait quels pays ? »*) peut aussi engendrer vertige et superficialité si l’on ne prend pas le temps d’écouter véritablement autrui.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Unité 2.2 — Je me souviens : Mémoire familiale, objets et devoir historique (`T2.3`)',
      },
      {
        type: 'paragraph',
        markdown:
          'Comment se tisse la continuité entre générations ? L’article de *Phosphore* (*Merci Papi, merci Mamie !*, p. 100) montre une transmission **réciproque** : les grands-parents transmettent recettes, règles de savoir-vivre, récits familiaux et jeux anciens (la *belote*), tandis que les petits-enfants initient leurs aînés au numérique (*Google*) et au vocabulaire actuel. Dans *Histoires d’objets perdus : le cahier de Maurice* (*Libération*, p. 105), la perte d’un carnet rédigé pendant la Libération de Paris (11–25 août 1944) bouleverse Marie parce que les objets matériels ancrent notre identité dans la durée (*« On n’écrit forcément pas que pour soi. Il a pensé à ceux qui suivaient »*).',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Mémoire collective : Simone Veil (p. 108) & Jorge Semprún, L’écriture ou la vie (p. 111)',
        markdown:
          '> **Simone Veil devant l’ONU (2007, p. 108) :** *« Comme tous mes camarades, je considère comme un devoir d’expliquer inlassablement aux jeunes générations, aux opinions publiques et aux responsables politiques, comment sont morts six millions de femmes et d’hommes dont un million et demi d’enfants, simplement parce qu’ils étaient nés juifs. »*\n>\n> **Jorge Semprún à Buchenwald (1945, p. 112) :** Confronté au regard terrifié des officiers alliés, le rescapé s’interroge sur la capacité du langage à transmettre l’horreur : *« L’ineffable dont on nous rebattra les oreilles n’est qu’alibi… Mais peut-on tout entendre, tout imaginer ? »*',
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Unité 2.3 — Je veux être adulte ! Rites de passage traditionnels et modernes (`T2.4`, `T2.5`)',
      },
      {
        type: 'paragraph',
        markdown:
          'Partout dans le monde francophone, des **rites de passage** symbolisent la fin de l’enfance et l’intégration communautaire (pp. 114–125) :\n- **Rites culturels et communautaires :** Premier tatouage identitaire à **Tahiti** ; construction et décoration du **banga** (case en terre) par les garçons à la puberté à **Mayotte** ; célébration familiale de la majorité à **18 ans en Suisse**. Dans le classique guinéen **L’enfant noir** (**Camara Laye**, 1953, p. 125), la semaine de danse du *soli* à Kouroussa, vêtue du boubou teint par les anciens, transforme l’épreuve individuelle en **deuxième naissance collective** pour toute la ville.\n- **Rites modernes et scolaires :** En France, le psychiatre **Samuel Lepastier** (*Le Monde*, p. 116) explique que les épreuves écrites comme le **baccalauréat** (et son équivalent l’IB ou la *Matura* suisse) ont remplacé les cérémonies anciennes comme rite d’initiation républicain, aux côtés du **permis de conduire** et du **service civique**. Cependant, quelque **120 000 jeunes** qui sortent du système scolaire sans diplôme subissent une « blessure narcissique » qui exige des passerelles alternatives (sport, arts, formation professionnelle). Enfin, atteindre la majorité à 18 ans (passage au *vouvoiement*, p. 121) ne confère pas automatiquement l’autonomie financière ni la maturité affective.',
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Unité 2.4 — À la recherche d’une vie meilleure : Frontières, exil et intégration (`T2.6`)',
      },
      {
        type: 'paragraph',
        markdown:
          'L’Unité 2.4 (*pp. 128–139*) aborde les réalités complexes des **flux migratoires** et déconstruit les idées reçues (quiz p. 130) : proportionnellement à la population mondiale, les transferts financiers des migrants vers leur pays d’origine dépassent toute l’aide publique au développement ; la **fuite des cerveaux** prive les pays du Sud de leurs diplômés ; et le **Québec** comme la Suisse figurent parmi les espaces francophones les plus attentifs aux politiques d’accueil et de francisation.',
      },
      {
        type: 'paragraph',
        markdown:
          'Trois textes poignants illustrent le prix humain des frontières : **(1)** le récit d’**Omar Ba** (*Soif d’Europe*, *Le Monde*, p. 131), jeune Sénégalais parti en pirogue vers les Canaries après avoir payé 2 000 € à un passeur, seul survivant d’une traversée tragique motivée par le mirage médiatique d’une Europe « Eldorado » ; **(2)** l’extrait littéraire d’**Eldorado** (**Laurent Gaudé**, 2006, p. 136), où Soleiman et Boubakar franchissent la frontière marocaine de Ceuta sous la menace constante (*« Les matraques seront toujours plus dures mais la course des damnés toujours plus rapide »*) ; et **(3)** le cas du travailleur sans-papiers malien **Bakary Coulibaly** à Bordeaux (*Libération*, p. 137), qui révèle la tension entre lois migratoires et contribution économique des travailleurs sans statut (*« Qui est-ce qui a construit ta maison, ton métro… ? »*, forum p. 138).',
      },
      {
        type: 'playable_diagram',
        spec: FR_V3_T2_STUDIO,
      },
      {
        type: 'heading',
        level: 2,
        text: '5. Architecture grammaticale du Thème 2 : Récit au passé, Relatifs & Interrogation',
      },
      {
        type: 'callout',
        variant: 'definition',
        title: 'Les 5 piliers grammaticaux du Chapitre 2 (pp. 87, 107, 124, 135)',
        markdown:
          '- **1. Temps du passé (2.2) :** **Imparfait** = cadre, âge, météo, habitude (*« Quand j’avais huit ans, nous allions… »*) ; **Passé composé** = événement ponctuel achevé (*« Soudain, mon père est entré »*) ; **Plus-que-parfait** = action antérieure (*« Il portait le sac qu’il avait préparé la veille »*).\n- **2. Discours indirect au passé (2.2) :** Quand le verbe introducteur est au passé (*Il a dit que…*), le **présent → imparfait**, le **passé composé → plus-que-parfait**, le **futur simple → conditionnel présent** (*« Je partirai » → Il a affirmé qu’il partirait*).\n- **3. Pronoms relatifs simples (2.1) :** **qui** (sujet), **que** (COD), **où** (lieu ou moment : *le jour où*), **dont** (complément introduit par *de* : *le voyage dont je rêve, le pays dont je suis originaire*).\n- **4. Pronoms personnels compléments (2.1) :** **le/la/les** (COD), **lui/leur** (COI personne), **y** (lieu ou *à + chose*), **en** (quantité ou *de + chose*).\n- **5. Indéfinis (2.3) & Interrogation (2.4) :** *quelques, plusieurs, chacun(e), aucun(e), personne, tout le monde* ; maîtriser l’inversion soutenue (*« Pourquoi êtes-vous parti ? »*) dans les Entretiens (10A).',
      },
      {
        type: 'playable_diagram',
        spec: FR_V3_T2_PASSE_WORKED,
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Pièges classiques sur le Thème 2 (Récit & Paper 2)',
        markdown:
          '1. **Confondre *dont* et *où* :** On écrit *« la ville **où** j’ai vécu »* (lieu), mais *« la ville **dont** je garde un souvenir ému »* (car on dit *garder un souvenir **de** cette ville*).\n2. **Oublier la concordance au discours indirect :** Dans un article ou une interview rapportée, vérifiez l’accord du temps après *« Il a expliqué que… »*.\n3. **Confondre les connecteurs temporels (`T2` / `P2`) :** *« Pendant que »* (simultanéité), *« tandis que »* (opposition ou simultanéité), *« dès que »* (immédiateté après), *« auparavant »* (avant), *« désormais »* (à partir de maintenant).',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'TdC — Mémoire sélective et construction de l’Histoire (pp. 107, 130, 135)',
        markdown:
          'Dans l’Unité 2.2 (*p. 107*), l’activité demande : *« Cette "mémoire sélective" est-elle aussi à l’œuvre dans l’histoire d’un peuple ou d’une nation ? »* Quels facteurs (émotion, média, politique) poussent certains migrants à imaginer l’Europe comme un *Eldorado* (p. 135), et sur quels **modes de connaissance** (intuition, médias, enseignement scolaire, raisonnement logique) reposent nos propres croyances sur les flux migratoires (p. 130) ?',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Le dépaysement / Sortir des sentiers battus',
            definitionMarkdown:
              'Sensation de changement complet de décor et de repères lors d’un voyage authentique hors des circuits touristiques classiques (p. 41).',
            markschemeKeyword: 'Voyage authentique',
          },
          {
            term: 'Se remémorer / Être nostalgique de',
            definitionMarkdown:
              'Rappeler volontairement un souvenir passé à la mémoire ; éprouver un regret mélancolique d’un temps révolu (p. 98).',
            markschemeKeyword: 'Souvenirs d’enfance',
          },
          {
            term: 'Le devoir de mémoire',
            definitionMarkdown:
              'Obligation morale et civique de transmettre les faits historiques tragiques (ex. la Shoah) aux générations futures pour éviter qu’ils ne se répètent (p. 108).',
            markschemeKeyword: 'Mémoire collective',
          },
          {
            term: 'Un rite de passage / La majorité',
            definitionMarkdown:
              'Épreuve ou cérémonie marquant socialement la transition de l’enfance/adolescence vers le statut d’adulte (pp. 114–125).',
            markschemeKeyword: 'Étapes de la vie',
          },
          {
            term: 'Le déracinement / L’exil',
            definitionMarkdown:
              'Rupture douloureuse avec son milieu culturel, familial et linguistique d’origine (Unité 2.4).',
            markschemeKeyword: 'Expérience migratoire',
          },
          {
            term: 'La fuite des cerveaux',
            definitionMarkdown:
              'Émigration des travailleurs hautement qualifiés et diplômés d’un pays vers l’étranger à la recherche de meilleures opportunités (p. 130).',
            markschemeKeyword: 'Enjeu économique migratoire',
          },
          {
            term: 'Un(e) sans-papiers / Un(e) clandestin(e) / Un passeur',
            definitionMarkdown:
              'Personne séjournant ou voyageant sans titre de séjour légal ; individu organisant illégalement le passage de frontières contre argent (pp. 131–137).',
            markschemeKeyword: 'Lexique des migrations',
          },
          {
            term: 'Tourner la page / Mûrir',
            definitionMarkdown:
              'Dépasser une épreuve passée pour aller de l’avant ; gagner en sagesse et en responsabilité avec l’expérience (pp. 105, 115).',
            markschemeKeyword: 'Évolution personnelle',
          },
        ],
      },
    ],
  },

  // ==========================================================================
  // GUIDE 5 (T3.1) — Thème 3 : Ingéniosité humaine (Ch. 3, pp. 140–203)
  // ==========================================================================
  {
    topicCode: 'T3.1',
    title: 'Thème 3 : Ingéniosité humaine — Sciences, Arts & Médias (*Le monde en français* Ch. 3)',
    summary:
      'Synthèse intégrale du Chapitre 3 (pp. 140–203) pour T3.1–T3.5 : progrès scientifique et bioéthique (Axel Kahn, Suisse, *Tarmac*), rôle engagé et émancipateur des arts (C215 au Rwanda, Mayotte, Zahia Ziouani, Delacroix vs Charlie Hebdo), regard critique sur les médias (Dany Laferrière, *Madame Bâ*) et maîtrise de la voix passive, des pronoms relatifs/démonstratifs et du subjonctif.',
    sourceFileNames: [
      'Le monde en français - Cambridge (2018 Coursebook).pdf',
      'plan du cours IB 11e 2026.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Questions directrices du Chapitre 3 (*Le monde en français*, pp. 140–203)',
        markdown:
          '- **3.1 Science, technologie et société (pp. 141–156) :** *Comment les développements scientifiques et technologiques influencent-ils notre vie ?* Où tracer la frontière entre progrès médical, principe de précaution et dérive dystopique ?\n' +
          '- **3.2 Les arts et nous (pp. 157–174) :** *À quoi servent les arts ?* Peuvent-ils à la fois réparer la mémoire collective, combattre les inégalités sociales et défier la censure ?\n' +
          '- **3.3 Les arts, miroir des sociétés francophones (pp. 175–187) :** *Comment les arts peuvent-ils nous aider à comprendre une culture ?* Entre folklore régional et révolution républicaine, que révèlent le cinéma, la chanson et la peinture ?\n' +
          '- **3.4 Le monde vu par les médias (pp. 188–203) :** *Comment les médias influencent-ils nos rapports avec les autres ?* Comment déconstruire les clichés télévisuels et vérifier la fiabilité d’une source à l’ère du tout-image ?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Unité 3.1 : Science, technologie, doute éthique & littérature d’anticipation (pp. 141–156)',
      },
      {
        type: 'paragraph',
        markdown:
          'Dans la tradition francophone, le rapport au progrès technique oscille constamment entre **fascination rationnelle** et **méfiance éthique**. Au début de l’Unité 3.1, le manuel invite à relier les qualités du **Profil de l’apprenant de l’IB** (*chercheur, penseur, intègre, soucieux de l’éthique*) aux figures de chercheurs célèbres. Or, comme le souligne le généticien et essayiste **Axel Kahn** dans *Le Journal du Dimanche* (p. 143), la France entretient une relation profondément paradoxale avec sa recherche : si les citoyens célèbrent les découvertes lors de la **Fête de la Science** ou admirent les grands prix Nobel, l’opinion publique reste marquée par une défiance durable héritée de la Seconde Guerre mondiale, de l’arme atomique et des crises sanitaires ou industrielles majeures — catastrophe de **Bhopal** (1984), **Tchernobyl** (1986), scandales de **l’amiante** et du **sang contaminé**. Kahn pose une distinction philosophique décisive pour les essais d’Épreuve 1 et l’Oral individuel : la **vérité scientifique** (*ce qui est prouvé*) ne dicte jamais automatiquement la **vérité morale** (*ce qu’il est juste de faire*).',
      },
      {
        type: 'paragraph',
        markdown:
          'Ce décalage nourrit quatre grands débats contemporains dans l’espace francophone :\n' +
          '- **Les OGM (organismes génétiquement modifiés) :** tandis que leurs défenseurs vantent la résistance aux sécheresses agricoles, les mouvements citoyens européens redoutent la dépendance aux brevets agrochimiques et les risques sur la biodiversité (*principe de précaution*).\n' +
          '- **L’énergie nucléaire et l’éolien :** en France, où le nucléaire assure la majorité de l’électricité décarbonée, le débat oppose souveraineté énergétique et gestion des déchets radioactifs ; parallèlement, l’implantation d’éoliennes suscite parfois des réflexes de type *pas dans mon jardin* pour des raisons paysagères.\n' +
          '- **L’expérimentation animale en Suisse (p. 151) :** à travers l’exemple des cantons romands (**Vevey, Lausanne, Nyon, Genève**), le cours examine la tension entre recherche biomédicale (guérir des maladies neurodégénératives) et éthique animale (*méthodes alternatives in vitro*, souffrance des primates et rongeurs).\n' +
          '- **L’angoisse technologique et le roman d’anticipation québécois :** dans ***Tarmac*** (p. 153), l’écrivain québécois **Nicolas Dickner** caricature nos peurs millénaristes (bogue de l’an 2000, stocks absurdes de nouilles ramen) pour montrer comment l’imaginaire collectif transforme la technologie en prophétie de fin du monde.',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Extrait analysé — Axel Kahn & l’autonomie de la conscience morale (p. 143)',
        markdown:
          'D’après Axel Kahn (*Le Journal du Dimanche*), les scientifiques ne peuvent pas décider seuls de l’usage de leurs découvertes : *« La science dit ce qui est, pas ce qui doit être. »* Dans une copie d’IB French B SL (Paper 1) ou lors de la discussion générale de l’Oral individuel (`EXAM.3`), reprendre cette opposition (*savoir technique* vs *responsabilité citoyenne*) vous permet immédiatement d’élever votre propos au niveau d’une réflexion nuancée sans tomber dans un « pour ou contre » simpliste.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Unités 3.2 & 3.3 : Arts engagés, transmission & miroir des cultures francophones (pp. 157–187)',
      },
      {
        type: 'paragraph',
        markdown:
          'L’UNESCO rappelle dès l’ouverture de l’Unité 3.2 (p. 159) que **protéger le patrimoine matériel et immatériel** tout en **favorisant la créativité contemporaine** constitue un pilier de la paix et du dialogue interculturel. *Le monde en français* illustre cette fonction sociale de l’art à travers des figures remarquables issues de toute la francophonie :\n' +
          '- **Le street art comme devoir de mémoire — C215 au Rwanda (p. 162) :** le pochoiriste français **Christian Guémy (C215)** réalise dans les rues rwandaises des portraits monumentaux honorant *les Justes*, ces femmes et ces hommes qui ont risqué leur vie pour sauver des voisins lors du génocide des Tutsi en 1994. L’art urbain sort du musée pour inscrire la justice et le souvenir dans l’espace public.\n' +
          '- **Théâtre et oralité à Mayotte — Ambass Ridjali (p. 165) :** dans l’océan Indien (à **Tsingoni**, relaté par RFO Mayotte), le dramaturge **Ambass Ridjali** s’interroge sur le dilemme de tout artiste subventionné : comment préserver la satire critique et l’indépendance intellectuelle lorsque le théâtre dépend financièrement des pouvoirs publics ?\n' +
          '- **Démocratisation musicale en banlieue — Zahia Ziouani (p. 167) :** chef d’orchestre française d’origines algérienne et albanaise, **Zahia Ziouani** a fondé l’orchestre symphonique ***Divertimento*** et une école de musique à **Stains** en **Seine-Saint-Denis (le « 9-3 »)**, offrant à près de 400 jeunes issus de 40 nationalités l’accès à la musique classique souvent perçue comme élitiste.\n' +
          '- **Poésie du quotidien & liberté :** les poèmes de **Jacques Prévert** (*Paroles*, p. 173) rappellent que la beauté surgie des gestes ordinaires résiste à la mécanisation du monde.',
      },
      {
        type: 'paragraph',
        markdown:
          'Dans l’Unité 3.3 (*Les arts, miroir des sociétés francophones*, pp. 175–187), l’art devient véritablement un **document anthropologique et historique**. La **Fête de la Musique** (créée en France en 1982 le **21 juin**, jour du solstice d’été, et aujourd’hui célébrée dans plus de 100 pays) incarne une culture gratuite, populaire et participative — même si certains sceptiques comme Paul, dans le dialogue de la p. 176, déplorent parfois le vacarme commercial face à l’enthousiasme de Jeanne. Sur le plan des traditions régionales, ***Le cheval d’orgueil*** de **Pierre-Jakez Hélias** (p. 180) décrit l’attachement viscéral des **Bretons** à leurs danses collectives et à leur langue face à l’uniformisation moderne — tandis que le chorégraphe **Maurice Béjart** (*Messe pour le temps présent*) ou la **procession dansante d’Echternach** au **Luxembourg** (p. 182) montrent comment le rythme unit le sacré et le profane.',
      },
      {
        type: 'paragraph',
        markdown:
          'L’apogée iconographique du Chapitre 3 oppose et relie deux images historiques françaises majeures (pp. 183–187) : d’un côté, le jeune **Gavroche** sur la barricade de juin 1832 dans ***Les Misérables*** de **Victor Hugo** (chantant *« C’est la faute à Voltaire, c’est la faute à Rousseau »* et puisant sa force dans le peuple comme le géant **Antée** au contact de la terre), et le tableau romantique d’**Eugène Delacroix**, ***La Liberté guidant le peuple*** (1831, référence à la Révolution de juillet 1830) ; de l’autre, la photographie célèbre de **Stéphane Mahé**, ***La Marianne de Charlie*** (prise le **11 janvier 2015** lors de la marche républicaine après les attentats contre *Charlie Hebdo*), où une jeune manifestante hisse un crayon géant au-dessus de la foule sur un piédestal, réincarnant la Marianne de Delacroix pour défendre la liberté d’expression.',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'Lien TdC / TOK (p. 170) — Arts, vérité émotionnelle & censure',
        markdown:
          'Le manuel cite l’écrivain algérien **Yasmina Khadra** pour poser une question clé de Théorie de la connaissance (*TdC*) : *dans quelle mesure l’œuvre d’art révèle-t-elle une vérité plus profonde sur une époque que le simple compte rendu journalistique ou statistique ?* Pour la **littérature** et les **arts visuels**, le créateur peut contourner l’oubli ou la censure en mobilisant l’empathie ; à l’inverse, le choix d’une image iconique (comme Delacroix ou Mahé) simplifie parfois la complexité politique d’un événement au profit d’un symbole mythique.',
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Unité 3.4 : Médias, stéréotypes audiovisuels & esprit critique (pp. 188–203)',
      },
      {
        type: 'paragraph',
        markdown:
          'L’Unité 3.4 interroge notre dépendance à l’information instantanée et la responsabilité partagée entre émetteurs et récepteurs : comme le montre le schéma de la p. 191, la fiabilité des médias dépend certes de la **déontologie des journalistes** (croisement des sources, refus du sensationnalisme), mais aussi de la **vigilance critique du public**. Sur le plan lexical, la presse jeune et la télévision orale multiplient les **abréviations familières** (*un petit-déj’, les infos, c’t aprém, la fac, un dico, une manif, un écolo, un resto*, p. 192) qu’il faut savoir **reconnaître en compréhension orale (Épreuve 2)** sans jamais les copier dans un **rapport ou une lettre formelle (Épreuve 1)** !',
      },
      {
        type: 'paragraph',
        markdown:
          'Deux textes littéraires francophones majeurs démasquent le pouvoir déformant des écrans :\n' +
          '1. **Dany Laferrière — *Le Regard*** (extrait de *La Presse*, p. 193) : l’écrivain et académicien haïtiano-québécois dénonce le regard réducteur des journaux télévisés occidentaux sur **Haïti**. À la place des plans habituels de misère et de catastrophe, Laferrière réclame que la caméra filme la **classe moyenne**, les familles ordinaires et l’étudiant concentré qui lit sous un lampadaire la nuit. Son essai inspire directement la tâche d’écriture de la **lettre de protestation** (p. 198).\n' +
          '2. **Erik Orsenna — *Madame Bâ*** (p. 199) : dans le village rural de **Marasane** au **Mali**, les habitants s’assemblent hypnotisés devant un unique téléviseur branché sur une **batterie de voiture** pour regarder l’élection de *Miss France 2001*. Pour Orsenna, la télévision devient une véritable **« machine à fabriquer de l’exil »** : en projetant des images idéalisées de richesse parisienne et de consommation facile, elle nourrit l’illusion migratoire des jeunes ruraux.\n' +
          'Enfin, l’étude de la **brochure publicitaire** (*K42*, boisson énergisante, p. 201) apprend à décoder les ressorts rhétoriques de la persuasion commerciale : slogans impératifs, promesses pseudo-scientifiques et mise en page sélective.',
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Studio interactif — Formats Épreuve 1 du Thème 3 (Critique, Tract, Protestation & Brochure)',
      },
      {
        type: 'playable_diagram',
        spec: FR_V3_T3_STUDIO,
      },
      {
        type: 'heading',
        level: 2,
        text: '5. Maîtrise grammaticale du Chapitre 3 : Voix passive, Pronoms relatifs/démonstratifs & Registres',
      },
      {
        type: 'playable_diagram',
        spec: FR_V3_T3_MEDIA_PASSIVE_MATRIX,
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Pièges d’examen Chapitre 3 : Voix passive + « celui qui » + Confusion critique/essai',
        markdown:
          '- **Accord de la voix passive :** au passif, le participe passé s’accorde **toujours** en genre et en nombre avec le sujet grammatical (*« Les fausses informations **sont diffusées** sur les réseaux sociaux »*). De plus, le complément d’agent emploie souvent ***par*** (action concrète : *filmé par une équipe*) mais ***de*** avec les verbes de sentiment ou de description (*admiré de tous, entouré d’arbres*).\n' +
          '- **« Ce qui » vs « Celui qui » :** ne confondez jamais un pronom neutre reprenant une idée (*« Ce qui m’inquiète, c’est la désinformation »*) avec un pronom démonstratif reprenant un nom précis (*« L’exposition que je préfère est **celle qui** met en valeur les artistes de banlieue »*).\n' +
          '- **Critique (5A) ≠ Résumé :** en Épreuve 1, si vous choisissez la **critique de film ou d’exposition**, ne racontez pas toute l’intrigue ni la fin ! Consacrez 15 % au synopsis et 85 % à l’analyse (mise en scène, bande-son, portée sociale) suivie d’une recommandation nuancée.',
      },
      {
        type: 'heading',
        level: 2,
        text: '6. Entraînement guidé — Oral individuel (IA SL, `EXAM.3`) sur image culturelle du Thème 3',
      },
      {
        type: 'playable_diagram',
        spec: FR_V3_T3_IO_VISUAL_EXPLORER,
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Le principe de précaution',
            definitionMarkdown:
              'Règle éthique et juridique consistant à limiter ou encadrer une innovation (OGM, IA, nucléaire) tant que ses risques sanitaires ou écologiques ne sont pas totalement écartés (p. 146).',
            markschemeKeyword: 'Éthique scientifique',
          },
          {
            term: 'La déontologie journalistique',
            definitionMarkdown:
              'Ensemble des devoirs professionnels des journalistes : vérification des faits, croisement des sources, impartialité et refus du sensationnalisme (p. 191).',
            markschemeKeyword: 'Fiabilité des médias',
          },
          {
            term: 'La désinformation / Une infox (fake news)',
            definitionMarkdown:
              'Diffusion délibérée ou virale de fausses nouvelles destinées à manipuler l’opinion publique ; mot officiel français recommandé par la Commission d’enrichissement : *infox*.',
            markschemeKeyword: 'Esprit critique médiatique',
          },
          {
            term: 'Le patrimoine culturel (matériel et immatériel)',
            definitionMarkdown:
              'Héritage collectif d’une société : monuments et œuvres d’art (matériel), mais aussi chants, danses bretonnes, savoir-faire et contes oraux (immatériel, UNESCO p. 159).',
            markschemeKeyword: 'Transmission culturelle',
          },
          {
            term: 'La démocratisation culturelle',
            definitionMarkdown:
              'Politique ou initiative (comme *Divertimento* de Zahia Ziouani ou la *Fête de la Musique*) visant à rendre les arts savants accessibles à tous les milieux sociaux (p. 167).',
            markschemeKeyword: 'Accès aux arts',
          },
          {
            term: 'La censure / L’autocensure',
            definitionMarkdown:
              'Contrôle ou interdiction exercée par un pouvoir politique ou financier sur une œuvre ; renoncement anticipé de l’artiste par crainte de perdre ses subventions (Ambass Ridjali, p. 165).',
            markschemeKeyword: 'Liberté d’expression',
          },
          {
            term: 'Un cliché / Un regard réducteur',
            definitionMarkdown:
              'Représentation stéréotypée qui enferme un pays (comme Haïti chez Dany Laferrière, p. 193) ou un groupe dans une image simpliste et misérabiliste.',
            markschemeKeyword: 'Représentation médiatique',
          },
          {
            term: 'La fracture numérique',
            definitionMarkdown:
              'Inégalité d’accès aux technologies de l’information, à Internet haut débit ou aux compétences digitales selon l’âge, le revenu ou le territoire.',
            markschemeKeyword: 'Inégalité technologique',
          },
          {
            term: 'Une dystopie / Un récit d’anticipation',
            definitionMarkdown:
              'Œuvre imaginant une société future angoissante dominée par les dérives techniques ou autoritaires (ex. Nicolas Dickner *Tarmac*, p. 153).',
            markschemeKeyword: 'Imaginaire scientifique',
          },
          {
            term: 'Un chef-d’œuvre engagé',
            definitionMarkdown:
              'Œuvre artistique qui prend parti sur un combat moral, politique ou humain (ex. *La Liberté guidant le peuple* de Delacroix, les pochoirs de C215 au Rwanda).',
            markschemeKeyword: 'Art et engagement',
          },
        ],
      },
    ],
  },

  // ==========================================================================
  // GUIDE 6 (T4.1) — Thème 4 : Organisation sociale (Ch. 4, pp. 204–259)
  // ==========================================================================
  {
    topicCode: 'T4.1',
    title: 'Thème 4 : Organisation sociale — Proches, Solidarité, Travail & Lois (*Le monde en français* Ch. 4)',
    summary:
      'Maîtrise complète du Chapitre 4 (pp. 204–259) pour T4.1–T4.6 : liens familiaux et codes sociaux (*tutoiement*, *Tanguy*, Tel-jeunes, *Kiffe kiffe demain*), bénévolat et commerce équitable (Emmaüs, Fête des voisins, Max Havelaar), école et travail de demain (réforme belge, Thomas Pesquet, *La désobéissante*), ordre public (cyberharcèlement, bizutage) et maîtrise du système hypothétique *si*, du conditionnel, de la négation et du futur antérieur.',
    sourceFileNames: [
      'Le monde en français - Cambridge (2018 Coursebook).pdf',
      'plan du cours IB 11e 2026.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Questions directrices du Chapitre 4 (*Le monde en français*, pp. 204–259)',
        markdown:
          '- **4.1 Moi et mes proches (pp. 205–217) :** *Quels sont nos liens avec les gens que nous côtoyons ?* Pourquoi les codes de politesse (la bise, *tu* vs *vous*), l’émancipation des jeunes adultes et la gestion des conflits varient-ils au sein de la francophonie ?\n' +
          '- **4.2 Moi et les autres (pp. 218–231) :** *S’engager pour les autres, comment faire ?* Quelle place occupent l’action associative, la solidarité de voisinage et la consommation équitable face aux inégalités ?\n' +
          '- **4.3 Études et emploi (pp. 232–244) :** *Comment faire face aux défis du XXIe siècle ?* Faut-il réinventer le rythme scolaire, valoriser l’année sabbatique et encadrer l’automatisation du travail ?\n' +
          '- **4.4 L’ordre public (pp. 245–259) :** *Les lois et règlements nous permettent-ils de mieux vivre ensemble ?* Où finit la simple incivilité et où commence le délit puni par la loi (vol, cyberharcèlement, bizutage) ?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Unité 4.1 : Codes sociaux, « génération Tanguy » & gestion des conflits (pp. 205–217)',
      },
      {
        type: 'paragraph',
        markdown:
          'Dès les premières pages du Chapitre 4, l’observation des rituels quotidiens révèle que l’organisation sociale repose sur des **conventions implicites**. Le blog de stage d’Adeline (p. 206) compare les salutations : entre amis ou en famille, on **se fait la bise** (deux, trois ou quatre selon les régions françaises), tandis qu’en contexte formel on se serre la main. Plus subtilement, le passage du **vouvoiement** au **tutoiement** suit des règles culturelles strictes en France — un stagiaire attend presque toujours que son supérieur ou un adulte plus âgé lui propose le *« On peut se tutoyer »* — alors qu’au Québec le *« tu »* amical apparaît plus rapidement dans le commerce ou entre collègues, tout en réservant *« vous »* aux autorités et personnes âgées inconnues.',
      },
      {
        type: 'paragraph',
        markdown:
          'Les relations familiales connaissent elles aussi une mutation économique profonde. Dans l’article *« Tanguy, mode d’emploi »* paru dans *La Presse* (Montréal, p. 209), la journaliste québécoise **Ariane Krol** commente un phénomène emprunté au film d’Étienne Chatiliez (*Tanguy*) : selon **Statistique Canada**, la proportion de jeunes adultes de 25 à 34 ans vivant toujours chez leurs parents a doublé en vingt ans, passant d’environ **17 % à près de 35 %** en raison du coût élevé du logement, de la précarité des premiers emplois et de l’allongement des études. Pour préserver l’harmonie intergénérationnelle, Krol recommande des règles claires : contribution financière ou partage des tâches ménagères, respect mutuel de l’intimité et fixation d’un horizon de départ.',
      },
      {
        type: 'paragraph',
        markdown:
          'Enfin, comment désamorcer les tensions entre adolescents et parents ? L’organisme québécois d’écoute **Tel-jeunes** (ligne gratuite 1-800-263-2266, p. 212) propose la méthode ***« J’accuse ou pas »*** : remplacer le *« tu accusateur »* (*« Tu ne m’écoutes jamais ! »*) par un message centré sur le *« je »* (*« Je me sens frustré(e) quand… »*), utiliser la technique du **« je soupèse »** avant de répondre sous le coup de la colère, puis négocier une **entente gagnant-gagnant**. Sur le versant littéraire, le roman ***Kiffe kiffe demain*** de **Faïza Guène** (p. 215) donne voix à **Doria** et **Nabil** dans une cité de banlieue parisienne, démontrant à travers un français oral vibrant et des expressions idiomatiques (couleurs, animaux) comment l’humour et l’amitié aident les jeunes à dépasser le déterminisme social.',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Unités 4.2 & 4.3 : Engagement solidaire, École réinventée & Travail du XXIe siècle (pp. 218–244)',
      },
      {
        type: 'paragraph',
        markdown:
          'L’Unité 4.2 explore trois formes graduées d’engagement citoyen (**« S’engager pour les autres, comment faire ? »**) :\n' +
          '- **Le bénévolat de terrain — Emmaüs (p. 219) :** les chantiers d’été internationaux d’**Emmaüs** accueillent des jeunes qui trient, réparent et revendent des objets donnés (*bric-à-brac*) afin de financer l’accueil de personnes sans-abri. Cet engagement incarne aussi l’expérience **CAS** (*Créativité, Activité, Service*) du Baccalauréat International.\n' +
          '- **La mobilisation virale et la solidarité de proximité :** tandis que le vidéaste français **Jérôme Jarre** mobilise les réseaux sociaux à l’échelle planétaire pour acheminer une aide alimentaire en Somalie, l’association **Voisins solidaires** et la **Fête des voisins** (fondée par **Atanase Périfan**, p. 222) misent sur l’entraide locale : *troc* d’outils, garde d’enfants, lutte contre l’isolement des aînés.\n' +
          '- **Le commerce équitable — Max Havelaar (p. 224) :** le porte-parole **Victor Ferreira** distingue la simple charité ponctuelle du **commerce équitable** qui permet aux producteurs du Sud de *« vivre debout »* grâce à un prix juste — un surcoût minuscule d’environ **un demi-centime par tasse de café** pour le consommateur. En contrepoint littéraire, ***L’Autre*** d’**Andrée Chedid** (p. 228) met en scène **Simm** et le vieux **Jaïs** unissant leurs forces après un tremblement de terre pour sauver un étranger enseveli : la solidarité transcende la langue et la nationalité.',
      },
      {
        type: 'paragraph',
        markdown:
          'Dans l’Unité 4.3 (**Études et emploi**, pp. 232–244), les chiffres de l’**UNICEF** rappellent d’abord l’inégalité mondiale d’accès au savoir : **58 millions d’enfants** en âge de fréquenter l’école primaire et **63 millions** au premier cycle du secondaire restent déscolarisés (avec un objectif ambitieux d’éducation de qualité à l’horizon 2030, p. 233). Pour les systèmes déjà établis, des lycéens belges interrogés par ***rtl.be*** (p. 234) imaginent ***« L’école de demain »*** : journées concentrées de **9 h à 14 h 35**, cours de **40 minutes**, cours théoriques le matin et ateliers pratiques l’après-midi, préservation du mercredi après-midi et du samedi libre, et **tutorat bienveillant** sans stigmatisation des élèves en difficulté.',
      },
      {
        type: 'paragraph',
        markdown:
          'Après le baccalauréat, le témoignage d’**Étienne, 23 ans** (*Version Femina*, p. 237) défend l’utilité de l’**année sabbatique** (*gap year*) : en partant comme volontaire auprès d’enfants en difficulté à **Pondichéry** (ancien comptoir francophone en Inde), il a surmonté son indécision et confirmé sa vocation d’orthophoniste. Quant à l’avenir professionnel, **Thomas Pesquet** (*franceinfo*, p. 241 — dixième astronaute français, revenu après **196 jours** à bord de l’ISS en 2016–2017) observe depuis l’orbite *« l’atmosphère ridiculement mince »* qui protège notre vaisseau spatial commun, appelant à des métiers tournés vers la coopération scientifique et écologique. À l’opposé dystopique, ***La désobéissante*** de **Jennifer Murzeau** (2050, p. 242) dépeint l’héroïne **Bulle** codant seule dans un **box vitré isolé** des algorithmes journalistiques standardisés — avertissement saisissant contre la déshumanisation du **télétravail**, du **e-travail** et de l’automatisation par les robots (p. 244).',
      },
      {
        type: 'callout',
        variant: 'tok_nos',
        title: 'Lien TdC / TOK (p. 228) — Émotion, intuition & raison dans l’entraide morale',
        markdown:
          'Dans *L’Autre* d’Andrée Chedid, pourquoi Simm s’acharne-t-il à sauver un inconnu alors que la raison calculatrice jugerait l’entreprise désespérée ? Ce passage illustre le rôle des **modes de connaissance** (*l’émotion, l’empathie, la foi humaniste*) dans les décisions éthiques : sans l’élan affectif initial, la connaissance rationnelle seule pousse parfois à l’inaction (*« c’est trop tard / trop dangereux »*).',
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Unité 4.4 : Civisme, ordre public, cyberharcèlement & bizutage (pp. 245–259)',
      },
      {
        type: 'paragraph',
        markdown:
          'L’Unité 4.4 trace une frontière juridique précise entre l’**incivilité** (manque de politesse qui nuit au vivre-ensemble : vapoter dans un lieu clos, jeter ses déchets, garder les pieds sur un siège, p. 246) et l’**infraction pénale**. À **Mont-Tremblant** (Québec, p. 247), l’histoire du vol à l’étalage au **Marché Jovi** — racontée par **Chloé Labelle** et filmée par la vidéosurveillance — montre que même un adolescent *« qui se fait marquer »* (québécisme signifiant *avoir un casier judiciaire*) subit des conséquences durables sur ses études ou ses voyages. De son côté, **Léonora Miano** (*Filles du bord de ligne*, p. 248) analyse au **conditionnel** comment la pression publicitaire et le désir de marques coûteuses entraînent parfois les jeunes vers la petite délinquance (en mêlant l’argot et le *verlan* comme *de ouf* ou *latté*).',
      },
      {
        type: 'paragraph',
        markdown:
          'Enfin, deux dossiers documentaires essentiels du Chapitre 4 fournissent des chiffres et références légales utilisables directement dans les essais argumentatifs :\n' +
          '- **Cyberharcèlement & droit numérique (*La Voix du Nord*, Villeneuve-d’Ascq, p. 252) :** face au fléau du harcèlement en ligne (lié selon l’article à 700 à 1 000 suicides de jeunes par an) et du *happy slapping* (filmer une agression pour la diffuser), la loi française punit sévèrement l’atteinte au droit à l’image (**1 an de prison et 45 000 € d’amende**) ainsi que l’injure ou la haine en ligne (**6 mois et 22 500 €**), et met à disposition la plateforme officielle **Pharos** et le numéro vert national **3020**.\n' +
          '- **Bizutage (*Le Figaro Étudiant*, p. 255) :** interdit en France par la **Loi Royal de 1998**, le bizutage (humiliations lors de l’intégration scolaire ou universitaire) est passible de **6 mois d’emprisonnement et 7 500 € d’amende** — peine **doublée** si la victime est mineure ou vulnérable — et le **prétendu consentement** de la victime n’efface jamais le délit (tableau comparatif des sanctions pp. 258–259).',
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Studio interactif — Formats Épreuve 1 du Thème 4 (Discours, Entretien, Rapport)',
      },
      {
        type: 'playable_diagram',
        spec: FR_V3_T4_STUDIO,
      },
      {
        type: 'heading',
        level: 2,
        text: '5. Grammaire avancée du Chapitre 4 : Hypothèse *si* (Types 1/2/3), Conditionnel, Négation & Subjonctif',
      },
      {
        type: 'playable_diagram',
        spec: FR_V3_T4_HYPOTHETIQUE_STEPS,
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Pièges d’examen Chapitre 4 : « Si » + conditionnel interdit & Négations complexes',
        markdown:
          '- **Règle d’or absolue : JAMAIS de *conditionnel* ni de *futur* juste après « si » conditionnel !** Écrivez *« Si les élèves **s’engageaient** davantage »* (imparfait), **jamais** *« Si les élèves s’engageraient »* (faute lourde en Critère A).\n' +
          '- **Négations nuancées pour le Critère A :** dépassez *ne… pas* en employant *ne… guère* (hardly), *ne… nullement / aucunement* (not at all), *ne… plus* et *ni… ni…* (*« Ce règlement ne vise **ni** à punir aveuglément **ni** à infantiliser les lycéens »*, accordé avec le verbe sans *pas* !).\n' +
          '- **Futur antérieur vs Adverbes en `-ment` :** maîtrisez la chronologie (*« Quand vous **aurez fini** votre année sabbatique, vous saurez choisir votre voie »*) et formez correctement les adverbes sur le féminin (*sérieux → sérieuse → sérieusement*) ainsi que les exceptions en `-amment / -emment` (*évident → évidemment*, *courant → couramment*).',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Le vouvoiement vs Le tutoiement',
            definitionMarkdown:
              'Choix sociolinguistique du pronom *vous* (distance hiérarchique, respect ou inconnus) ou *tu* (proximité familiale, amicale, usages plus souples au Québec, p. 206).',
            markschemeKeyword: 'Registre et politesse',
          },
          {
            term: 'La génération « Tanguy »',
            definitionMarkdown:
              'Phénomène socio-économique désignant les jeunes adultes de 25 à 34 ans qui prolongent la cohabitation chez leurs parents faute de logement abordable ou d’emploi stable (p. 209).',
            markschemeKeyword: 'Liens familiaux',
          },
          {
            term: 'Une année sabbatique (de césure)',
            definitionMarkdown:
              'Pause volontaire entre le lycée et l’université (comme Étienne à Pondichéry, p. 237) consacrée au bénévolat, à un stage ou à l’apprentissage linguistique.',
            markschemeKeyword: 'Études et orientation',
          },
          {
            term: 'Le commerce équitable',
            definitionMarkdown:
              'Modèle économique garantissant aux producteurs des pays en développement une rémunération décente et des conditions de travail dignes (Max Havelaar, p. 224).',
            markschemeKeyword: 'Solidarité internationale',
          },
          {
            term: 'Le télétravail / Le e-travail',
            definitionMarkdown:
              'Exercice d’une activité professionnelle à distance grâce au numérique, offrant flexibilité mais risquant l’isolement social (*La désobéissante*, p. 242).',
            markschemeKeyword: 'Monde du travail',
          },
          {
            term: 'Le civisme vs L’incivilité',
            definitionMarkdown:
              'Respect volontaire des règles collectives de vie commune vs comportements égoïstes ou irrespectueux dans l’espace public sans constituer toujours un crime (p. 246).',
            markschemeKeyword: 'Vivre-ensemble',
          },
          {
            term: 'Le cyberharcèlement',
            definitionMarkdown:
              'Agressions répétées, menaces, rumeurs ou diffusion d’images humiliantes en ligne ; délit puni par la loi (signalement via Pharos ou le 3020 en France, p. 252).',
            markschemeKeyword: 'Ordre public numérique',
          },
          {
            term: 'Le bizutage',
            definitionMarkdown:
              'Pratique d’intégration imposant des actes humiliants ou dégradants à un nouvel élève ; strictement interdit par la Loi Royal de 1998 même avec « consentement » (p. 255).',
            markschemeKeyword: 'Protection des mineurs',
          },
          {
            term: 'Le casier judiciaire',
            definitionMarkdown:
              'Registre officiel des condamnations pénales d’un individu (au Québec : *« se faire marquer »*, p. 247), pouvant bloquer certains emplois ou visas.',
            markschemeKeyword: 'Justice et sanction',
          },
          {
            term: 'La cohésion sociale',
            definitionMarkdown:
              'Solidarité et confiance liant les membres d’une communauté malgré leurs différences de revenus, d’âge ou d’origine (Fête des voisins, bénévolat, p. 222).',
            markschemeKeyword: 'Organisation sociale',
          },
        ],
      },
    ],
  },

  // ==========================================================================
  // GUIDE 7 (T5.1) — Thème 5 : Partage de la planète (Ch. 5, pp. 260–329)
  // ==========================================================================
  {
    topicCode: 'T5.1',
    title: 'Thème 5 : Partage de la planète — Écologie, Droits, Paix & Bioéthique (*Le monde en français* Ch. 5)',
    summary:
      'Synthèse intégrale du Chapitre 5 (pp. 260–329) couvrant T5.1–T5.7 : transition écologique et satire climatique (Iegor Gran, Louis-Gilles Francœur, ville durable), droits humains et parité scolaire (DUDH 1948, vote à 16 ans, handicap, *Une si longue lettre*), conflits et mémoire (Kourouma, Henri Fertet, 11 décembre 1960), bioéthique (don d’organes Belgique/France, GPA, *Le scaphandre et le papillon*, fin de vie), plus concession, accord du participe passé, pronoms relatifs composés et mise en relief.',
    sourceFileNames: [
      'Le monde en français - Cambridge (2018 Coursebook).pdf',
      'plan du cours IB 11e 2026.pdf',
    ],
    blocks: [
      {
        type: 'callout',
        variant: 'guiding_questions',
        title: 'Questions directrices du Chapitre 5 (*Le monde en français*, pp. 260–329)',
        markdown:
          '- **5.1 Planète bleue, planète verte (pp. 261–277) :** *À quels enjeux environnementaux faisons-nous face ?* Les petits écogestes individuels suffisent-ils face à la crise climatique, ou faut-il une transformation politique et urbaine ?\n' +
          '- **5.2 Nos droits à tous (pp. 278–294) :** *Qu’est-ce qu’une société équitable ?* Comment rendre effectifs les droits humains universels pour les jeunes, les personnes handicapées et les filles privées d’école ?\n' +
          '- **5.3 Conflits et paix (pp. 295–310) :** *Quel est l’impact des guerres sur les jeunes ?* Comment témoigner de la violence des conflits tout en construisant le devoir de mémoire et la réconciliation ?\n' +
          '- **5.4 Quel dilemme ! (pp. 311–329) :** *Quels sont les enjeux éthiques d’aujourd’hui et comment les résoudre ?* Jusqu’où la loi doit-elle encadrer le don d’organes, la GPA et la fin de vie ?',
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Unité 5.1 : Crise climatique, écogestes vs action politique & ville durable (pp. 261–277)',
      },
      {
        type: 'paragraph',
        markdown:
          'Le Chapitre 5 s’ouvre sur une lettre satirique percutante, ***Résiliation du contrat de location*** (p. 261), dans laquelle la planète Terre expulse l’humanité pour dix dégradations graves : déforestation, réchauffement, pollution des océans et épuisement des ressources. Face à cette urgence, les textes du manuel opposent **l’écologie quotidienne** (achats en vrac ou en *friperie*, consommation locale de saison, tri sélectif, réduction de l’empreinte carbone, p. 265) à une interrogation lucidement politique. D’un côté, le romancier satirique **Iegor Gran** dans ***L’écologie en bas de chez moi*** (p. 267) dépeint avec ironie un narrateur parisien excédé par un tract sur le film *Home* et par les *« mollahs du tri sélectif »* (*bobos* moralisateurs) — illustrant comment la culpabilisation excessive produit parfois un rejet contre-productif.',
      },
      {
        type: 'paragraph',
        markdown:
          'D’un autre côté, le journaliste environnemental québécois **Louis-Gilles Francœur** (*Le Devoir*, Montréal, p. 269) montre que la crise écologique a changé d’échelle depuis les années 1980 : on est passé des pollutions locales visibles (pluies acides, rivières souillées) à des dérèglements planétaires systémiques (climat global, **60 % des espèces** halieutiques ou fauniques surexploitées). Dès lors, faire peser toute la faute sur le consommateur individuel relève souvent de l’illusion : sans **transition énergétique**, régulation industrielle et **urbanisme durable** (`T5.7` — *ville du quart d’heure*, transports collectifs propres, lutte contre l’étalement urbain et la désertification rurale), les gestes isolés restent insuffisants. Sur le plan rhétorique, l’unité enseigne également la distinction clé entre **convaincre** (appel à la raison et aux preuves chiffrées) et **persuader** (appel aux émotions et aux valeurs, pp. 273–275 & p. 310).',
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Unité 5.2 : Droits humains, vote à 16 ans, inclusion & éducation des filles (pp. 278–294)',
      },
      {
        type: 'paragraph',
        markdown:
          'Proclamée à Paris en **1948**, la **Déclaration universelle des droits de l’homme** (DUDH, Articles 1 à 6, p. 280) pose l’égalité en dignité et en droits de tous les êtres humains — pourtant, l’âge d’accès concret aux droits civiques reste gradué (tableau p. 281 : en France, accès autonome aux réseaux sociaux dès **13 ans**, sexualité/conduite accompagnée à **15 ans**, travail/création d’association/Carte Vitale/émancipation à **16 ans**, engagement militaire possible à **17 ans et demi**, et **majorité électorale à 18 ans**). Faut-il abaisser le **droit de vote à 16 ans** ? Le débat du journal *Le Parisien* (p. 282) fournit deux thèses équilibrées pour l’Épreuve 1 :\n' +
          '- **POUR (Giuseppe Aviges) :** intégrer **1,5 million de jeunes électeurs** permettrait de rééquilibrer le poids démographique des seniors et de reconnaître une génération déjà engagée sur l’écologie et la vie locale.\n' +
          '- **CONTRE (Hassan Benhsain) :** sans une véritable **éducation civique** approfondie au lycée, de nombreux adolescents manquent d’information politique fiable et risquent de se désintéresser davantage des urnes.',
      },
      {
        type: 'paragraph',
        markdown:
          'L’équité sociale concerne tout autant l’inclusion du handicap et l’égalité des genres. Le portrait touchant d’**Océanie** (jeune fille aveugle et malentendante entrant au **Lycée Ledoux** à **Besançon**, p. 286) démontre la réussite d’une scolarisation inclusive grâce à une imprimante **Braille**, au soutien humain de son auxiliaire de vie scolaire (**AVS** Chléo) et à la complicité de son chien-guide **Phlox**. À l’échelle mondiale, la campagne ***Because I am a Girl*** de **Plan International** (p. 289) rappelle que **62 millions de filles** restent privées d’école à cause des mariages précoces et de la pauvreté, illustrant la célèbre formule de **Kofi Annan** sur l’éducation féminine comme meilleur levier de développement. Ce combat résonne dans le grand classique sénégalais de **Mariama Bâ**, ***Une si longue lettre*** (p. 290) : l’institutrice **Ramatoulaye** y défend le rôle émancipateur de l’école pour les jeunes Sénégalaises et refuse par dignité le mariage polygame proposé par **Daouda Dieng**.',
      },
      {
        type: 'heading',
        level: 2,
        text: '3. Unités 5.3 & 5.4 : Guerres, devoir de mémoire & dilemmes bioéthiques francophones (pp. 295–329)',
      },
      {
        type: 'paragraph',
        markdown:
          'L’Unité 5.3 confronte l’élève au sort tragique des jeunes dans les conflits armés (statistiques UNICEF : environ **2 millions d’enfants et jeunes tués** entre 2000 et 2010 et quelque **250 000 enfants-soldats** dans le monde). Au Canada, l’ONG **Handicap International** organise à **Montréal** la ***Pyramide de chaussures*** (p. 297) pour sensibiliser les citoyens à la lutte contre les **mines antipersonnel**. Trois textes poignants ancrent cette réflexion :\n' +
          '1. ***Allah n’est pas obligé*** d’**Ahmadou Kourouma** (p. 298) : le jeune orphelin ivoirien **Birahima**, devenu enfant-soldat entre la Côte d’Ivoire et le Liberia, raconte l’horreur absurde de la guerre avec sa langue mêlant malinké, argot de rue (*gbaka*) et définitions naïves puisées dans le *Larousse* et le *Harrap’s*.\n' +
          '2. **La lettre d’adieu d’Henri Fertet (p. 301) :** résistant français de **16 ans** fusillé par l’occupant nazi le **26 septembre 1943** à Besançon, dont la lettre sereine et courageuse adressée à ses parents incarne l’engagement ultime de la jeunesse pour la liberté.\n' +
          '3. **Les manifestations algériennes du 11 décembre 1960 (p. 306–308) :** à **Belcourt** et **Place des Armes** (Alger), des enfants comme **Farid Maghraoui** (10 ans) et **Saliha Ouatiki** (12 ans) participent aux marches pacifistes de la guerre d’Algérie (bilan officiel de 112 morts) ; l’historien **Benoît Falaize** (p. 308) souligne l’évolution nécessaire des manuels scolaires français vers un enseignement lucide et partagé de la mémoire coloniale.',
      },
      {
        type: 'paragraph',
        markdown:
          'Enfin, l’Unité 5.4 (***Quel dilemme !***, pp. 311–329) réunit quatre dossiers bioéthiques complexes où s’opposent **liberté individuelle**, **solidarité collective** et **dignité humaine** (p. 312 : acquittement par ADN, dépistage prénatal au Québec, accès aux soins, procréation post-mortem) :\n' +
          '- **Le don d’organes (p. 315) :** alors qu’en **France** près de 16 000 patients attendent une greffe malgré le principe du consentement présumé (avec **33,7 % de refus** familiaux faute de dialogue), la **Belgique** (campagne ***beldonor.be***) applique avec rigueur le modèle *« Qui ne dit mot consent »* tout en encourageant le donneur potentiel à enregistrer son choix en mairie.\n' +
          '- **La gestation pour autrui — GPA (p. 319) :** interdite en **France** (lois de bioéthique depuis 1994) et en **Suisse** au nom de la non-marchandisation du corps humain, tolérée dans un cadre altruiste non commercial en **Belgique**, et strictement encadrée de façon altruiste dans certaines provinces canadiennes (**Alberta, Nouvelle-Écosse**).\n' +
          '- **Le handicap extrême et le témoignage — Jean-Dominique Bauby (p. 322) :** victime d’un *locked-in syndrome* dans la chambre **119** de l’hôpital maritime de **Berck**, l’ancien rédacteur en chef d’*Elle* dicte son livre ***Le scaphandre et le papillon*** lettre par lettre grâce au seul battement de sa **paupière gauche**.\n' +
          '- **La fin de vie, euthanasie et soins palliatifs (pp. 326–327) :** l’euthanasie active est légalisée sous conditions strictes en **Belgique** et aux **Pays-Bas**, tandis que la **Suisse** autorise uniquement l’assistance au suicide ; en face, le texte *« Contre l’euthanasie »* plaide pour le développement prioritaire des **soins palliatifs** contre la douleur et la solitude.',
      },
      {
        type: 'callout',
        variant: 'textbook_excerpt',
        title: 'Comparer les systèmes juridiques francophones : la clé des meilleures copies SL',
        markdown:
          'Dans une production écrite sur le Thème 5 (Article, Éditorial ou Dissertation), évitez de parler génériquement de « la loi dans le monde ». Citez précisément un contraste francophone tiré du manuel : **France vs Belgique** sur le don d’organes ou la fin de vie, **France vs Suisse/Canada** sur la GPA ou le vote à 16 ans. Cette précision factuelle propulse le Critère B (**Message**) dans la bande supérieure (10–12/12).',
      },
      {
        type: 'heading',
        level: 2,
        text: '4. Studio interactif — Formats Épreuve 1 du Thème 5 (Éditorial, Dissertation & Lettre officielle)',
      },
      {
        type: 'playable_diagram',
        spec: FR_V3_T5_STUDIO,
      },
      {
        type: 'heading',
        level: 2,
        text: '5. Atelier pas-à-pas : Réussir l’argumentation concessive & l’éditorial (Critères A & B)',
      },
      {
        type: 'playable_diagram',
        spec: FR_V3_T5_CONCESSION_WORKED,
      },
      {
        type: 'heading',
        level: 2,
        text: '6. Matrice grammaticale du Chapitre 5 : Concession, Participe passé, Relatifs composés & Mise en relief',
      },
      {
        type: 'playable_diagram',
        spec: FR_V3_T5_GRAMMAR_MATRIX,
      },
      {
        type: 'callout',
        variant: 'examiner_warning',
        title: 'Pièges d’examen Chapitre 5 : Participe passé, « Malgré que » interdit & Pronoms « auquel/duquel »',
        markdown:
          '- **Ne dites JAMAIS *« malgré que »* !** Utilisez impérativement ***Bien que / Quoique + subjonctif*** (*« Bien que les traités soient signés… »*), mais ***Malgré / En dépit de + nom*** (*« Malgré les accords internationaux… »*).\n' +
          '- **Accord du participe passé avec *avoir* :** le participe ne s’accorde pas avec le sujet, mais avec le **COD uniquement si celui-ci précède le verbe** (*« Les lois bioéthiques que le Parlement a **votées** »*, mais *« Le Parlement a **voté** ces lois »*).\n' +
          '- **Pronoms relatifs composés (*lequel, auquel, duquel*) :** dès qu’une préposition (*à, de, pour, avec, sur*) précède un **nom de chose**, remplacez *qui* par ***lequel / laquelle / lesquels / lesquelles*** (et contractez ***à + lequel = auquel*** ; ***de + lequel = duquel*** : *« Le dilemme **auquel** nous sommes confrontés »*, *« La crise **à laquelle** nous faisons face »*).',
      },
      {
        type: 'key_terms',
        items: [
          {
            term: 'Le développement durable / La transition écologique',
            definitionMarkdown:
              'Modèle répondant aux besoins actuels sans compromettre ceux des générations futures ; passage vers des énergies et villes bas carbone (Unité 5.1).',
            markschemeKeyword: 'Enjeu environnemental',
          },
          {
            term: 'L’empreinte carbone / La biodiversité',
            definitionMarkdown:
              'Quantité totale de gaz à effet de serre émise par une activité humaine ; richesse et variété des espèces vivantes menacées par l’exploitation (p. 269).',
            markschemeKeyword: 'Écologie scientifique',
          },
          {
            term: 'Convaincre vs Persuader',
            definitionMarkdown:
              'Convaincre s’appuie sur la raison, les statistiques et la logique ; persuader touche les émotions, les valeurs morales et l’imaginaire du lecteur (p. 310).',
            markschemeKeyword: 'Rhétorique argumentative',
          },
          {
            term: 'La parité / L’inclusion',
            definitionMarkdown:
              'Égalité d’accès et de représentation entre femmes et hommes ; adaptation concrète de l’école et de la cité pour les personnes handicapées (Océanie, p. 286).',
            markschemeKeyword: 'Société équitable',
          },
          {
            term: 'La majorité civique / L’abstention',
            definitionMarkdown:
              'Âge légal permettant de voter et d’exercer ses droits citoyens (18 ans en France, débat pour 16 ans p. 282) ; fait de ne pas voter lors d’un scrutin.',
            markschemeKeyword: 'Démocratie et jeunesse',
          },
          {
            term: 'Un enfant-soldat',
            definitionMarkdown:
              'Mineur recruté ou exploité dans un conflit armé, privé d’enfance et d’école (ex. Birahima dans *Allah n’est pas obligé*, p. 298).',
            markschemeKeyword: 'Droits de l’enfant',
          },
          {
            term: 'Le consentement présumé (don d’organes)',
            definitionMarkdown:
              'Principe juridique (France, Belgique *beldonor.be*) selon lequel tout citoyen majeur est donneur potentiel après sa mort sauf refus exprimé de son vivant (p. 315).',
            markschemeKeyword: 'Bioéthique médicale',
          },
          {
            term: 'La gestation pour autrui (GPA)',
            definitionMarkdown:
              'Pratique par laquelle une femme porte un enfant pour un couple ou une personne ; interdite en France/Suisse, encadrée de manière altruiste dans certaines provinces canadiennes (p. 319).',
            markschemeKeyword: 'Dilemme bioéthique',
          },
          {
            term: 'Les soins palliatifs vs L’euthanasie',
            definitionMarkdown:
              'Accompagnement médical visant à soulager la souffrance en fin de vie sans provoquer la mort vs acte médical mettant fin intentionnellement à une vie à la demande du patient (p. 326).',
            markschemeKeyword: 'Dignité et fin de vie',
          },
          {
            term: 'L’indisponibilité du corps humain',
            definitionMarkdown:
              'Principe éthique et juridique français interdisant de vendre ou de louer des éléments du corps humain (sang, organes, utérus) à des fins commerciales (p. 319).',
            markschemeKeyword: 'Éthique juridique',
          },
        ],
      },
    ],
  },
];
