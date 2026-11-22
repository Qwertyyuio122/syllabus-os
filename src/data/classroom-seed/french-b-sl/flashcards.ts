import type { ClassroomSeedFlashcard } from '../types';

export const FRENCH_FLASHCARDS: ClassroomSeedFlashcard[] = [
  // ==========================================================================
  // PRESERVED V2 FLASHCARDS (14 cards — exact frontMarkdown retained)
  // ==========================================================================
  {
    topicCode: 'T1',
    frontMarkdown: 'Question directrice du thème **L’identité** (Plan Mme MacQuarrie) ?',
    backMarkdown: '*« De quelle façon exprimons-nous notre identité ? »*',
  },
  {
    topicCode: 'T2',
    frontMarkdown: 'Question directrice du thème **Les expériences** ?',
    backMarkdown: '*« Comment le passé construit-il notre avenir ? »*',
  },
  {
    topicCode: 'T3',
    frontMarkdown: 'Question directrice du thème **L’ingéniosité humaine** ?',
    backMarkdown: '*« Comment les arts peuvent-ils nous aider à comprendre une culture ? »*',
  },
  {
    topicCode: 'T4',
    frontMarkdown: 'Question directrice du thème **L’organisation sociale** ?',
    backMarkdown: '*« Quels sont les liens avec les gens que nous côtoyons ? »*',
  },
  {
    topicCode: 'T5',
    frontMarkdown: 'Question directrice du thème **Le partage de la planète** ?',
    backMarkdown: '*« À quels enjeux environnementaux faisons-nous face ? »*',
  },
  {
    topicCode: 'EXAM.1',
    frontMarkdown: 'Répartition exacte des 4 composantes IB Français B NM (12e) ?',
    backMarkdown:
      '25 % Épreuve 1 Écrite (1h15) + 25 % Épreuve 2 Orale (~45 min) + 25 % Épreuve 2 Écrite (1h) + 25 % Oral individuel (IA).',
  },
  {
    topicCode: 'EXAM.3',
    frontMarkdown: 'Combien de minutes et de mots-clés sont autorisés pour préparer l’Oral individuel ?',
    backMarkdown:
      '15 minutes de préparation, au maximum 10 mots-clés brefs (aucune phrase rédigée) sur 1 image choisie parmi 2.',
  },
  {
    topicCode: 'EXAM.3',
    frontMarkdown: 'Quelle erreur majeure faut-il éviter dans les 4 premières minutes de l’Oral individuel ?',
    backMarkdown:
      'Rester bloqué dans la description littérale de l’image — il faut décrire en ~60 s puis vite interpréter le message culturel francophone !',
  },
  {
    topicCode: 'EXAM.1',
    frontMarkdown: 'Fourchette stricte de mots à l’Épreuve 1 Français B NM ?',
    backMarkdown:
      '250 à 400 mots (les textes nettement sous 250 mots perdent en développement et message).',
  },
  {
    topicCode: 'EXAM.1',
    frontMarkdown: 'Lettre officielle vs Courriel amical vs Courrier des lecteurs (Ch. 6) ?',
    backMarkdown:
      'Lettre officielle : vous + objet + « Je vous prie d’agréer… ». Courriel amical : tu + salutations détendues. Courrier des lecteurs : réaction brève adressée à la rédaction.',
  },
  {
    topicCode: 'EXAM.1',
    frontMarkdown: 'Différence clé entre un Article et un Éditorial (Ch. 6 Cambridge) ?',
    backMarkdown:
      'L’article informe de manière journalistique (titre + chapeau + sous-titres) ; l’éditorial engage la voix du journal/rédacteur (*nous*) dans une prise de position argumentée.',
  },
  {
    topicCode: 'EXAM.1',
    frontMarkdown: 'Particularités d’un **Tract** ou d’une **Brochure** à l’Épreuve 1 ?',
    backMarkdown:
      'Slogans percutants, impératifs incitatifs (*Agissez ! Rejoignez-nous !*), puces aérées et coordonnées d’action claires (sans longues dissertations continues).',
  },
  {
    topicCode: 'T3.1',
    frontMarkdown: 'Formule clé déclenchant obligatoirement le subjonctif dans un essai C1 ?',
    backMarkdown: '« Bien que… », « Afin que… », « Il est indispensable que… », « À condition que… ».',
  },
  {
    topicCode: 'EXAM.2',
    frontMarkdown: 'Règle d’or du Vrai / Faux avec justification en compréhension écrite (Épreuve 2) ?',
    backMarkdown:
      'Copier exactement les mots du texte qui justifient la réponse sans reformuler ni ajouter de commentaire personnel.',
  },

  // ==========================================================================
  // NEW V3 FLASHCARDS (42 cards — 56 total across all 5 Themes + Exam Skills)
  // ==========================================================================
  {
    topicCode: 'EXAM.1',
    frontMarkdown: 'Quels sont les **5 concepts fondamentaux** de l’IB en Français B (Critères B & C) ?',
    backMarkdown:
      '**Public** (*Audience*), **Contexte** (*Context*), **Objectif** (*Purpose*), **Sens** (*Meaning*) et **Variation** (*Variation*).',
  },
  {
    topicCode: 'EXAM.1',
    frontMarkdown: 'Critères d’évaluation exacts de l’**Épreuve 1** (total = 30 points) ?',
    backMarkdown:
      '**Critère A — Langue** (12 pts) · **Critère B — Message** (12 pts) · **Critère C — Conception conceptuelle / Type de texte** (6 pts).',
  },
  {
    topicCode: 'EXAM.1',
    frontMarkdown: 'Quelle est la formule finale la plus sûre pour une **lettre formelle / de protestation** en français ?',
    backMarkdown:
      '*« Je vous prie d’agréer, Monsieur/Madame [le titre exact], l’expression de mes salutations distinguées. »* (jamais *« Merci d’avance, cordialement »* dans un registre soutenu).',
  },
  {
    topicCode: 'EXAM.1',
    frontMarkdown: 'Différence de format entre une **Proposition (14A)** et une **Dissertation / Essai (7B)** ?',
    backMarkdown:
      '**Proposition :** en-tête officiel, Objet, sections titrées (Constat / Solutions / Retombées) pour convaincre un décideur. **Dissertation :** prose continue sans intertitres (Introduction, Développement dialectique, Conclusion).',
  },
  {
    topicCode: 'EXAM.1',
    frontMarkdown: 'Règle des **20 % / 80 %** pour réussir une **Critique de film ou d’exposition (5A)** ?',
    backMarkdown:
      'Consacrer au maximum 15–20 % au **résumé** (sans révéler la fin !) et 80 % à **l’analyse** (jeu, mise en scène, musique, portée culturelle) + recommandation finale.',
  },
  {
    topicCode: 'EXAM.3',
    frontMarkdown: 'Quelles sont les **2 grandes parties** chronométrées de l’Oral individuel (après 15 min de préparation) ?',
    backMarkdown:
      '**Partie 1 :** Présentation du stimulus (3–4 min) + Discussion de suivi sur le même thème francophone (4–5 min). **Partie 2 :** Conversation générale sur un **2e thème différent** (5–6 min).',
  },
  {
    topicCode: 'EXAM.2',
    frontMarkdown: 'Combien de fois écoute-t-on chaque piste audio en **Compréhension orale (Épreuve 2)** ?',
    backMarkdown:
      '**Deux écoutes** par extrait audio, précédées d’un temps de lecture des questions pour repérer mots-clés et négations pièges (*ne… guère*, *malgré*).',
  },
  {
    topicCode: 'T1.1',
    frontMarkdown: 'Que signifie l’anglicisme / concept sociolinguistique *« la glottophobie »* ?',
    backMarkdown:
      'Discrimination ou moquerie fondée sur l’accent ou la façon de parler français d’une personne (Unité 1.3 : accents québécois, maghrébin, méridional, africain).',
  },
  {
    topicCode: 'T1.1',
    frontMarkdown: 'À quel auteur et à quel texte renvoie le concept de **#Stopauxclichés** (Ch. 1, p. 16) ?',
    backMarkdown:
      'Aux stéréotypes générationnels et identitaires : l’Unité 1.1 entraîne à rédiger un **Courrier des lecteurs (12A)** pour réfuter l’image réductrice des jeunes « accros et apathiques ».',
  },
  {
    topicCode: 'T1.2',
    frontMarkdown: 'Différence lexicale entre **le minimalisme / la sobriété heureuse** et **le consumérisme** ?',
    backMarkdown:
      'La **sobriété** (vie alternative, *vanlife*, tri) privilégie l’essentiel et le lien humain, tandis que le **consumérisme** pousse à l’achat excessif et au statut matériel.',
  },
  {
    topicCode: 'T1.3',
    frontMarkdown: 'Accord et sens : quand emploie-t-on **duquel / de laquelle** vs **dont** en proposition relative ?',
    backMarkdown:
      'On utilise ***dont*** après *verbe/nom/adjectif + de* sans autre préposition (*« le livre dont je parle »*), mais ***duquel/de laquelle*** dans les locutions composées (*« près duquel, à propos de laquelle »*).',
  },
  {
    topicCode: 'T1.4',
    frontMarkdown: 'Que désignent *« un(e) expatrié(e) »*, *« l’acculturation »* et *« les racines »* dans l’Unité 1 ?',
    backMarkdown:
      'Personne vivant hors de son pays natal ; processus d’adaptation réciproque entre cultures ; attaches familiales, linguistiques et mémorielles d’origine.',
  },
  {
    topicCode: 'T1.5',
    frontMarkdown: 'Forme correcte du **subjonctif** des 4 verbes irréguliers les plus utiles à l’IB (*être, avoir, faire, pouvoir*) avec *nous* / *il* ?',
    backMarkdown:
      'Qu’il **soit** / que nous **soyons** · Qu’il **ait** / que nous **ayons** · Qu’il **fasse** / que nous **fassions** · Qu’il **puisse** / que nous **puissions**.',
  },
  {
    topicCode: 'T2.1',
    frontMarkdown: 'Quelle critique écologique vise **le tourisme de masse** par rapport au *tourisme durable / écotourisme* ?',
    backMarkdown:
      'Le tourisme de masse provoque bétonisation littorale, pollution aérienne et folklore artificiel ; l’écotourisme soutient l’artisanat local, la mobilité douce et les séjours hors saison.',
  },
  {
    topicCode: 'T2.2',
    frontMarkdown: 'À l’oral et à l’écrit (Ch. 2), pourquoi l’**imparfait** et le **passé composé** se complètent-ils dans un journal intime ?',
    backMarkdown:
      'L’**imparfait** peint le décor, la météo, l’état d’âme continu (*Il pleuvait, j’avais peur*), tandis que le **passé composé** marque l’action ponctuelle qui fait basculer le récit (*Soudain, un inconnu m’a souri*).',
  },
  {
    topicCode: 'T2.3',
    frontMarkdown: 'Accord avec le pronom relatif **ce que** : doit-on accorder le participe passé suivant *avoir* ?',
    backMarkdown:
      '**Non**, *ce* est neutre masculin singulier (*« Tout ce que j’ai **découvert** m’a surpris »*). En revanche, avec un nom féminin/pluriel antécédent : *« Les traditions que j’ai **découvertes** »*.',
  },
  {
    topicCode: 'T2.4',
    frontMarkdown: 'Que signifie **« la fuite des cerveaux »** (*brain drain*, Unité 2.4 p. 130) ?',
    backMarkdown:
      'Émigration durable de diplômés, médecins, chercheurs ou ingénieurs d’un pays d’origine vers l’étranger à la recherche de meilleurs salaires ou libertés.',
  },
  {
    topicCode: 'T2.5',
    frontMarkdown: 'Comment expliquer la différence entre un **rite de passage** et une **coutume quotidienne** ?',
    backMarkdown:
      'Un **rite de passage** (majorité civile, baccalauréat, mariage, premier voyage seul) marque socialement un changement irréversible de statut ; une coutume rythme la vie collective courante.',
  },
  {
    topicCode: 'T2.6',
    frontMarkdown: 'Que désigne le **« devoir de mémoire »** dans l’Unité 2 (p. 108) ?',
    backMarkdown:
      'Obligation civique et morale de transmettre le souvenir des tragédies historiques (ex. Shoah, Résistance) afin d’en tirer des leçons contre l’intolérance.',
  },
  {
    topicCode: 'T3.1',
    frontMarkdown: 'Quelle phrase célèbre d’**Axel Kahn** (p. 143) résume le lien entre science et éthique ?',
    backMarkdown:
      'La distinction entre **vérité scientifique** (*ce qui est possible/prouvé*) et **vérité morale** (*ce qu’il est juste de faire*) : la science ne dicte jamais seule l’éthique.',
  },
  {
    topicCode: 'T3.1',
    frontMarkdown: 'Qu’est-ce que le **principe de précaution** face aux OGM, au nucléaire ou à l’IA (Ch. 3) ?',
    backMarkdown:
      'Principe consistant à suspendre ou encadrer strictement une innovation technologique tant que ses conséquences sanitaires ou écologiques graves ne sont pas écartées.',
  },
  {
    topicCode: 'T3.2',
    frontMarkdown: 'Quel exemple de **street art mémoriel** figure dans l’Unité 3.2 (p. 162) ?',
    backMarkdown:
      'Le pochoiriste français **C215 (Christian Guémy)** qui a peint dans les rues du **Rwanda** les portraits des *Justes* ayant sauvé des Tutsi en 1994.',
  },
  {
    topicCode: 'T3.2',
    frontMarkdown: 'Qui est **Zahia Ziouani** (p. 167) et quel thème IB illustre-t-elle ?',
    backMarkdown:
      'Cheffe d’orchestre issue de parents algériens et albanais dirigeant l’orchestre ***Divertimento*** à Stains (Seine-Saint-Denis, *le 9-3*), démocratisant la musique classique auprès de 400 jeunes de 40 nationalités.',
  },
  {
    topicCode: 'T3.3',
    frontMarkdown: 'Quel tableau romantique célèbre dialogue avec la photo ***La Marianne de Charlie*** (11 jan. 2015, p. 186) ?',
    backMarkdown:
      '***La Liberté guidant le peuple*** d’**Eugène Delacroix** (1831) — et dans *Les Misérables* de **Victor Hugo**, la figure de **Gavroche** sur la barricade de 1832.',
  },
  {
    topicCode: 'T3.4',
    frontMarkdown: 'Que dénoncent **Dany Laferrière** (*Le Regard*, Haïti) et **Erik Orsenna** (*Madame Bâ*, Mali) à propos de la télévision ?',
    backMarkdown:
      '**Laferrière :** les clichés misérabilistes occultant la classe moyenne haïtienne. **Orsenna :** la TV alimentée par batterie à Marasane devient une *« machine à fabriquer de l’exil »* via des illusions consuméristes.',
  },
  {
    topicCode: 'T3.4',
    frontMarkdown: 'Traduisez les 5 abréviations orales familières de la p. 192 : *un petit-déj’, les infos, c’t aprém, la fac, une manif*.',
    backMarkdown:
      'Un **petit-déjeuner** · les **informations (journal télévisé)** · **cet après-midi** · la **faculté (université)** · une **manifestation**.',
  },
  {
    topicCode: 'T3.5',
    frontMarkdown: 'Comment accorde-t-on le participe passé à la **voix passive** (*être* + participe) et avec quelle préposition ?',
    backMarkdown:
      'Il s’accorde **toujours** avec le sujet grammatical (*« Des rumeurs ont été **diffusées** »*). L’agent prend ***par*** (action) ou ***de*** (sentiment/description : *admirée de tous*).',
  },
  {
    topicCode: 'T4.1',
    frontMarkdown: 'Quelle évolution démographique décrit **Ariane Krol** (*La Presse*, Québec, p. 209) sous le nom de *« génération Tanguy »* ?',
    backMarkdown:
      'Au Canada, la part des 25–34 ans vivant chez leurs parents est passée de **17 % à 35 %** (d’après Statistique Canada) en raison du coût du logement et de la précarité.',
  },
  {
    topicCode: 'T4.1',
    frontMarkdown: 'En quoi consiste la méthode de résolution de conflits **« J’accuse ou pas »** de **Tel-jeunes** (p. 212) ?',
    backMarkdown:
      'Remplacer le *« tu accusateur »* par le *« je »* exprimant son ressenti, pratiquer le *« je soupèse »* avant de réagir sous la colère, puis négocier une entente mutuelle.',
  },
  {
    topicCode: 'T4.2',
    frontMarkdown: 'Quel principe distingue le **commerce équitable (Max Havelaar, Victor Ferreira)** de la simple charité ?',
    backMarkdown:
      'Permettre aux producteurs du Sud de *« vivre debout »* par un prix d’achat juste (environ **0,5 centime** de plus par tasse de café), plutôt que de dépendre de dons ponctuels.',
  },
  {
    topicCode: 'T4.3',
    frontMarkdown: 'Quelles propositions concrètes font les lycéens belges sur ***rtl.be*** pour ***« L’école de demain »*** (p. 234) ?',
    backMarkdown:
      'Journées de **9 h à 14 h 35**, séances de **40 minutes**, théorie le matin / pratique l’après-midi, mercredi après-midi et samedi préservés, et **tutorat sans stigmatisation**.',
  },
  {
    topicCode: 'T4.3',
    frontMarkdown: 'Quelle menace du travail en **2050** illustre ***La désobéissante*** de **Jennifer Murzeau** (p. 242) ?',
    backMarkdown:
      'L’isolement des travailleurs (l’héroïne **Bulle** confinée dans un box vitré) et le remplacement de la créativité journalistique humaine par des algorithmes automatisés.',
  },
  {
    topicCode: 'T4.4',
    frontMarkdown: 'Que punit la **Loi Royal de 1998** en France, même si la victime dit avoir accepté (p. 255) ?',
    backMarkdown:
      'Le **bizutage** (actes humiliants ou dégradants lors de l’intégration scolaire/universitaire) : jusqu’à **6 mois de prison et 7 500 € d’amende** (peine doublée pour personne vulnérable).',
  },
  {
    topicCode: 'T4.4',
    frontMarkdown: 'Quels deux dispositifs français permettent aux jeunes de signaler le **cyberharcèlement** et les atteintes numériques (p. 252) ?',
    backMarkdown:
      'Le numéro vert national d’écoute **3020** et le portail officiel de signalement en ligne **Pharos** (atteinte au droit à l’image : 1 an et 45 000 € d’amende).',
  },
  {
    topicCode: 'T4.5',
    frontMarkdown: 'Règle d’or de la **phrase hypothétique avec *si*** (Types 1, 2 et 3) ?',
    backMarkdown:
      '1) *Si + présent → futur/présent* · 2) *Si + imparfait → conditionnel présent* · 3) *Si + plus-que-parfait → conditionnel passé*. **JAMAIS** de futur ni conditionnel immédiatement après *si* !',
  },
  {
    topicCode: 'T5.1',
    frontMarkdown: 'Qu’opposent **Iegor Gran** (*L’écologie en bas de chez moi*) et **Louis-Gilles Francœur** (*Le Devoir*, Québec) ?',
    backMarkdown:
      '**Gran** satirise les *« mollahs du tri sélectif »* moralisateurs ; **Francœur** montre que depuis les années 1980, la crise climatique mondiale (60 % d’espèces surexploitées) exige des lois, pas seulement de la culpabilité individuelle.',
  },
  {
    topicCode: 'T5.1',
    frontMarkdown: 'Différence rhétorique clé entre **Convaincre** et **Persuader** (*Le monde en français* p. 310) ?',
    backMarkdown:
      '**Convaincre** s’adresse à la **raison** (faits, chiffres, logique déductive) ; **persuader** s’adresse aux **émotions et valeurs** (anecdotes, métaphores, sentiment d’urgence).',
  },
  {
    topicCode: 'T5.2',
    frontMarkdown: 'Quel duo d’arguments résume le débat du *Parisien* (p. 282) sur le **droit de vote à 16 ans** ?',
    backMarkdown:
      '**POUR (Giuseppe Aviges) :** +1,5 million de jeunes électeurs pour rééquilibrer le poids des seniors. **CONTRE (Hassan Benhsain) :** déficit d’éducation civique au lycée risquant d’accroître le désintérêt.',
  },
  {
    topicCode: 'T5.2',
    frontMarkdown: 'Que symbolisent les parcours d’**Océanie** (Lycée Ledoux, Besançon) et de **Ramatoulaye** (*Une si longue lettre*, Sénégal) ?',
    backMarkdown:
      '**Océanie :** l’inclusion réussie du handicap sensoriel (Braille, AVS, chien-guide Phlox). **Ramatoulaye (Mariama Bâ) :** l’émancipation des femmes africaines par l’instruction et le refus de la polygamie subie.',
  },
  {
    topicCode: 'T5.3',
    frontMarkdown: 'Pourquoi le **11 décembre 1960** et la lettre d’**Henri Fertet** (1943) sont-ils étudiés ensemble en Unité 5.3 ?',
    backMarkdown:
      'Pour mesurer l’engagement et le sacrifice de très jeunes citoyens dans les conflits (adolescent résistant exécuté à 16 ans à Besançon ; enfants d’Alger comme Farid Maghraoui et Saliha Ouatiki dans les marches pacifistes).',
  },
  {
    topicCode: 'T5.4',
    frontMarkdown: 'Comment diffèrent les lois francophones sur le **don d’organes** et la **GPA (gestation pour autrui)** ?',
    backMarkdown:
      '**Don d’organes :** consentement présumé rigoureux en Belgique (*beldonor.be*) vs ~33,7 % de refus familial en France. **GPA :** interdite en France (1994) et en Suisse, tolérée sans but lucratif en Belgique, encadrée dans certaines provinces canadiennes.',
  },
  {
    topicCode: 'T5.5',
    frontMarkdown: 'Quel piège syntaxique faut-il bannir absolument avec les connecteurs **Bien que** vs **Malgré** ?',
    backMarkdown:
      'Toujours écrire ***Bien que / Quoique + SUBJONCTIF*** (*« Bien que les lois existent… »*) et ***Malgré + NOM*** (*« Malgré l’existence des lois… »*). **JAMAIS** *« malgré que »* !',
  },
];
