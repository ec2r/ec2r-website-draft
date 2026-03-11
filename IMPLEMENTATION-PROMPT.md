# EC2R Website — Prompt d'implémentation consolidé

> Ce document est le résultat de l'analyse complète de 13 messages vocaux de Stéphane Flau (11 mars 2026).
> Il est destiné à une session d'implémentation Sonnet.
> Chaque lot est indépendant et testable. Suivre l'ordre proposé.
> Fichier principal à modifier : `src/i18n/translations.ts` (contenu FR + EN) et les composants `.astro` concernés.
> Après chaque lot : `npm run build` pour vérifier que ça compile.

---

## LOT 1 — Vocabulaire & textes (translations.ts uniquement)

Modifier `src/i18n/translations.ts`. Chaque modification est à faire en FR ET EN.

### 1.1 Hero — Titre principal
Le titre "Nos énergies plus collectives" reste, mais les taglines qui cyclient en dessous doivent mieux refléter l'acronyme EC²R :
- Taglines FR : `['une croissance + responsable', 'un changement + réaliste', 'des résultats + concrets', 'une réactivité + collective']`
  → REMPLACER par : `['une Croissance + Responsable', 'un Changement + Réaliste', 'un Comportement + Rapide', 'une Croissance + Rassurante']`
  Les majuscules sur C et R correspondent aux lettres de EC²R (E=Énergie, C²=double C, R=variable).
- Taglines EN : adapter en cohérence.

### 1.2 Hero — Sub1 "Pas le Netflix"
Cycling actuel OK. Ajouter `'le leadership'` à la fin de sub1Cycling FR et EN.

### 1.3 Hero — Sub2 (IRM)
FR actuel : `"Un IRM+ organisationnel qui mesure les énergies collectives, identifie chirurgicalement les leviers de mobilisation et accompagne le passage à l'acte jusqu'au comportement en situation."`
→ OK, garder tel quel.

### 1.4 Situations — Reformulations

**Situation 1** (accroche FR) :
`"Vos équipes adhèrent parfois au changement sur le papier, mais sur le terrain, le collectif ne passe pas assez vite à l'acte."` → OK, garder.

**Situation 2** (accroche FR) :
Actuel : `"Certains sont experts, d'autres moins. On veut coopérer — mais on est rattrapé par les silos et les tâches sans valeur ajoutée."`
→ REMPLACER par : `"Certains sont experts, d'autres moins. Des niveaux d'appropriation différents, des architectures invisibles, de l'énergie perdue — on veut coopérer, mais on est rattrapé par les silos et les tâches sans valeur ajoutée."`

**Situation 3** (accroche FR) :
Actuel : `"Vous qui devez progresser en résultats, rendements, mouvements — sans braquer ni perdre des éléments clés en route."`
→ REMPLACER par : `"Vous qui devez exiger + de résultats collectivement — sans braquer certains ni risquer que l'équipe se démobilise en route."`

**Situation 4** (accroche FR) :
Actuel OK. Modifier le `ceQuiSePasse` pour ajouter :
`"Nouveaux usages de l'IA, gestion des relations, frustrations — ils sont au centre de tout. Certains font à la place. D'autres se réfugient dans leur expertise. D'autres dépensent trop d'énergie à vouloir convaincre ceux qui résistent — au risque de cristalliser les équipes."`

**Situation 5** (accroche FR) :
Actuel OK. Ajouter dans `ceQuiSePasse` : `"…des profils qui ne tirent pas toujours dans le même sens — parfois de manière silencieuse et invisible, parfois de manière très directe."`

**Situation 6** (accroche FR) :
Actuel OK. Ajouter dans l'accroche : `"…et ancrer le changement dans votre organisation managériale."`

**Situation 7** (accroche FR) :
Actuel : `"Vous avez fait des choix. Vous voulez faire évoluer votre modèle de valeur, construire de nouvelles briques augmentées. Mais comment leur donner vie avec vos experts ?"`
→ REMPLACER par : `"Vous avez fait des choix. Vous voulez faire évoluer votre modèle de valeur ajoutée, construire de nouvelles briques ou solutions augmentées. Mais comment leur donner vie avec vos experts ?"`
Ajouter dans le `reponse` : la mention "SI" (Système d'Information) et "et ça, c'est Luc."

Adapter toutes les versions EN en cohérence.

### 1.5 Section Méthode — Titres et intro

Titre 1 FR : `"On n'épuise pas son énergie à motiver"` → REMPLACER par `"On n'épuise pas son énergie à motiver+"`
Titre 2 FR : `"On installe les conditions pour mobiliser+"` → OK
Titre 3 FR : `"Cibler+, agir+, traduire+, mesurer+"` → REMPLACER par `"Cibler+, agir+, pratiquer+, traduire+, mesurer+"`

Intro FR :
`"6 énergies+ collectives. 18 batteries pour se recharger. 9 niveaux. Et des comportements clés pour se recharger."` → REMPLACER par :
`"6 énergies+ collectives. 18 batteries pour se recharger. 9 niveaux. Et X comportements pour se recharger (thermomètre). Un diagnostic+ chirurgical qui vous aide à identifier en temps réel les leviers de mobilisation collective. Pas de développement juste personnel : guider le professionnel en situation, ancré dans la réalité de son collectif."`

### 1.6 Section Méthode — Block "Mobilisé ≠ Motivé"

Texte FR actuel : `"Motiver est court terme et individuel. Mobiliser est durable et collectif. L'écart devient abyssal pour le passage à l'acte. La vitesse bat la taille. La densité bat le volume. L'humain au service du collectif, pas l'inverse — pas juste un outil, une structure vivante dans une conversation."`
→ OK, garder tel quel (c'est exactement ce que Stéphane demande).

### 1.7 Section Méthode — Ordre des 6 énergies

L'ORDRE CORRECT est :
1. **Projeter+** (mobilisant) — E+C = mobiliser
2. **Centrer+** (vers la réussite) — E+C = mobiliser  
3. **Exiger+** (avancer / résultats) — E+C = mobiliser
4. **Fédérer+** (coopération collective) — éviter la démobilisation
5. **Réguler+** (recentrer / confiance / gouvernance) — recentrer les énergies
6. **Remobiliser+** (agile / amélioration continue) — amélioration continue

Vérifier que c'est bien dans cet ordre dans `methode.energies[]` (FR et EN).
Actuellement c'est : Projeter, Centrer, Exiger, Fédérer, Réguler, Remobiliser — c'est bon.

### 1.8 Section Chiffres

Valeurs actuelles : `[5, 200, 18, 50]` avec labels `['X ans de méthode éprouvée', 'collectifs accompagnés', 'batteries comportementales', 'comportements clés par énergie']`

→ REMPLACER par : 
```
values: [5, 50, 18, 200]
stats FR: [
  { suffix: ' ans', label: '2 jours, 1 heure — de méthode éprouvée sur le terrain' },
  { suffix: '+', label: 'terrains accompagnés' },
  { suffix: '', label: 'batteries pour se recharger' },
  { suffix: '+', label: 'comportements clés par énergie' },
]
```
Le "5 ans, 2 jours, 1 heure" est le clin d'oeil voulu par Stéphane. Adapter EN.

### 1.9 Section Preuves — Intro et structure

Titre FR : `"Ils l'ont déjà vécu,"` / `"ils vous le racontent"` → OK, garder.

Intro FR : 
`"Pas de promesses marketing. Des résultats concrets, les mots de nos clients depuis 5 ans, des données mesurables. Des comportements observables. Un impact déjà+ réel."` → OK.

### 1.10 Section Preuves — Musée

museTitle FR : `"5 ans de terrain — notre petit musée"` → REMPLACER par `"5 ans, 2 jours, 2 mois de terrain — notre petit musée à augmenter ensemble"`

museeSub FR : 
`"Des premiers séminaires aux déploiements multi-sites. Des slides originales aux protocoles augmentés par l'IA. Chaque année a été un point de rupture — nous documentons le chemin parcouru, pas pour l'ego, pour la preuve."` → REMPLACER par :
`"Des premiers séminaires au déploiement multi-sites en national. Des slides originels qui font peur au protocole augmenté par l'IA. Chaque année a été un point de rupture. Notre petit musée augmenté de mise en abyme collective — nous documentons, expérimentons, traduisons, améliorons, affinons, grandissons."`

museeYears FR : `['2021 — Genèse', '2022 — Terrain', '2023 — Méthode', '2024 — Plateforme', '2025 — IA']`
→ REMPLACER par : `['2021 — Genèse', '2022 — Terrain', '2023 — Formalisation', '2024 — Diffusion', '2025 — Augmentation', '2026 — …']`
(L'année 2026 est le futur = la suite de la trajectoire)
Adapter EN.

### 1.11 Section Protocole — Mise en abyme

abyme.text1 FR actuel : `"Nous avons utilisé la puissance dirigée de l'IA pour partir du réel et définir notre valeur ajoutée. Les relations entre IA et comportements EC²R ont accéléré le passage à l'acte — du brief vocal à la page que vous lisez, en quelques heures."`
→ REMPLACER par : `"Nous avons utilisé la puissance dirigée de l'IA pour partir du réel et définir notre valeur ajoutée. Les relations entre IA et comportements EC²R ont accéléré le passage à l'acte — cinq années d'expertise, des centaines de collectifs accompagnés, des participants formés et entraînés. Ce site n'est pas un résultat figé, mais l'illustration du processus vivant de la méthode."`
(Retirer "en quelques heures" — c'est notre valeur ajoutée, il faut qu'ils pensent qu'on a mis 6 mois)

abyme.text2 FR : `"Montrer le processus, pas juste le résultat — c'est ça l'approche EC²R. On essaye, on expérimente, on travaille avec des gens pertinents."`
→ REMPLACER par : `"Pas montrer le processus — documenter et améliorer constamment. On essaye, on expérimente, on traduit, on améliore, on affine, on grandit. C'est ça l'approche EC²R."`

abyme.steps[0] FR : `"Vocaux, témoignages, données terrain — pas de promesse marketing."`
→ REMPLACER par : `"Interviews ciblées, données, observations en situation — pas de promesse marketing."`

abyme.steps[1] FR : `"L'IA structure et croise les retours. Chaque affirmation adossée à une preuve."`
→ REMPLACER par : `"La méthode EC²R structure et croise les retours. Chaque affirmation adossée à une preuve ou à un croisement de données et à la restitution avec un praticien."`
(C'est la METHODE qui structure, pas l'IA — la recette du coca c'est Stéphane)

abyme.steps[3] FR : `"Ce site n'est pas un résultat figé. C'est un processus vivant."`
→ REMPLACER par : `"Ce site ne se veut pas comme un objet figé, mais comme une illustration du processus vivant de la méthode. La méthode vivante, les résultats, la progression, la trajectoire de mobilisation."`

Adapter toutes les versions EN.

### 1.12 Section Equipe — Rôles et bios

**Stéphane Flau** — founder[0] :
- role FR : `"Fondateur & Président"` → REMPLACER par `"Fondateur de la méthode EC²R — Cofondateur EC²R Conseil"`
- bio FR : → REMPLACER par : `"Porte et incarne la méthode EC²R depuis plus de 5 ans. Accompagne des collectifs vers la performance depuis plus de 20 ans. S'assure de l'amélioration continue de la méthode. Garant, avec l'IA, de son intégrité et de son développement."`

**Luc Létoffé** — founder[1] :
- role FR : OK (`"Co-design Méthode × Technologie"`)
- bio FR : → REMPLACER par : `"À la genèse technique de la méthode EC²R et du protocole augmenté. Passe de l'idéation à la situation. Co-construit la promesse de valeur+ avec vos experts métiers, traduit+ en produit, et fait passer de l'idée à l'acte — en direct, avec vous."`

**Jean-François Morin** — team[0] :
- role FR : `"Co-fondateur"` → REMPLACER par `"Cofondateur de la méthode EC²R — Cofondateur EC²R Conseil"`
- bio FR : → REMPLACER par : `"Entraîneur d'entraîneurs et de sportifs professionnels et champions. Associé depuis les origines. Ancrage terrain et transmission."`
  (Il n'est PAS directeur général — il a démissionné. Ne pas mentionner ce titre.)

**Arnaud Bochurberg** — team[1] :
- role FR : `"Expert & Prescripteur"` → REMPLACER par `"Associé EC²R Conseil — Expert & Prescripteur"`
- bio FR : → REMPLACER par : `"Expert en profilage comportemental. Fondateur du Groupe Alar. Accompagne les organisations dans le déploiement opérationnel et la mise en acte de la méthode."`

**Jean Zuccarelli** — team[2] :
- role FR : `"Praticien EC²R"` → REMPLACER par `"Associé EC²R Conseil — Praticien EC²R"`
- bio FR : OK (placeholder)

**Maria Emilia Garcia** — team[3] : 
- REMONTER en position team[2] (avant Jean Zuccarelli, passer de dernière à avant-dernière)
- role FR : `"Praticienne EC²R"` → REMPLACER par `"Facilitatrice EC²R — Logistique, équipe, déploiement"`
- bio FR : → REMPLACER par : `"Anime la logistique des déploiements et la coordination des équipes. Facilite les débriefs individuels sur les profils de leadership."`

Adapter EN.

### 1.13 Section Contact — Tone et textes

cardNo (la carte "budget") :
- title FR : `"Vous cherchez uniquement un budget ?"` → REMPLACER par `"D'abord le projet, pas le budget"`
- text FR : → REMPLACER par : `"On peut être intelligent pour trouver les solutions de financement. Mais ce qui nous intéresse, c'est d'abord votre projet. La plateforme est là pour vous aider autour d'un projet et d'un résultat — pas d'un budget."`
- cta FR : `"Oubliez-nous."` → REMPLACER par `"Parlons d'abord du projet →"`
(Le ton actuel "oubliez-nous" est trop dur — ça ne doit pas être dégradant pour l'interlocuteur)

checks FR : 
Index 2 : `"10 minutes — si ça résonne, on avance"` → REMPLACER par `"10 minutes en visio — si ça résonne, on expérimente et on fait vivre ça pour vous"`

contact.intro FR :
`"Pas de formulaire commercial. Pas d'agent conversationnel. Une vraie discussion courte de 10 minutes pour voir si ça résonne."` → REMPLACER par :
`"Pas un pitch. Pas un formulaire commercial. Pas un agent conversationnel. Une vraie échange avec un humain pendant 10 minutes — pour voir si et comment ça résonne dans votre organisation."`

form.situationOptions FR :
`['Vous voulez nous en parler', 'Vous voulez nous prescrire', 'Vous voulez expérimenter']` → REMPLACER par :
`["Vous voulez qu'on échange 10 min en visio ?", "Vous voulez nous prescrire ou recommander ?", "Vous voulez expérimenter la méthode ?", "Vous voulez démarrer un accompagnement ?"]`

Adapter EN.

### 1.14 Footer — Adresse et mention légale

address FR : `"29 rue du Pont, 92200 Neuilly-sur-Seine"` → REMPLACER par `"EC²R Conseil — 29 rue du Pont, 92200 Neuilly-sur-Seine"`
(Préciser que l'adresse est celle d'EC²R Conseil, pas de la méthode EC²R elle-même)

Le copyright : `"© {currentYear} EC²R Conseil. Méthode EC²R ©"` — OK, la distinction est bien faite.

---

## LOT 2 — Composant Hero : batteries E1-E6 au lieu de chiffres

Fichier : `src/components/Hero.astro`

### 2.1 Batteries : labels E1, E2... au lieu de 1, 2...
Dans le SVG des batteries, le texte actuel est `E{i + 1}` — c'est déjà bon !
Pas de changement nécessaire sur les labels.

### 2.2 Couleur des batteries : PAS vert
Actuellement les batteries sont en `text-energy-green/60`. Stéphane dit : "si elles sont vertes, ça veut dire que ça fonctionne" — elles doivent montrer un état à diagnostiquer.

→ REMPLACER la couleur du SVG battery :
- `text-energy-green/60 group-hover:text-energy-green` → `text-energy-red/60 group-hover:text-white/80`
- Ou mieux : utiliser un gradient de couleurs par batterie :
  - E1-E2 : rouge (situation de départ)
  - E3 : jaune (freins)
  - E4 : beige (comment passer à l'acte)
  - E5 : vert clair (commencer à agir)
  - E6-E7 : vert foncé (amélioration continue)

Ajouter un array de couleurs batteries dans le composant :
```js
const batteryColors = [
  'text-energy-red/60 group-hover:text-energy-red',     // E1
  'text-energy-red/60 group-hover:text-energy-red',     // E2
  'text-energy-yellow/60 group-hover:text-energy-yellow', // E3
  'text-energy-beige/60 group-hover:text-energy-beige',  // E4
  'text-[#86efac]/60 group-hover:text-[#86efac]',       // E5
  'text-energy-green/60 group-hover:text-energy-green',  // E6
  'text-energy-green/60 group-hover:text-energy-green',  // E7 (Luc)
];
```

Appliquer `batteryColors[i]` au lieu de la classe fixe sur chaque SVG.

### 2.3 Label "Vous le vivez, vous qui…"
Ajouter en dessous un sous-texte : `"Cliquez ce qui résonne — je me sens concerné, ça me parle."`
(actuellement `situationsHint` = `"Cliquez ce qui résonne pour voir notre réponse."`)
→ Dans translations.ts, changer `situationsHint` FR en : `"Je me sens concerné. Ça me parle. Cliquez pour voir notre réponse."`

---

## LOT 3 — Composant Equipe : réordonner l'array team

Fichier : `src/components/Equipe.astro`

L'array `team` en dur dans le composant est :
```js
const team = [
  { name: 'Jean-François Morin', initials: 'JFM' },
  { name: 'Arnaud Bochurberg',   initials: 'AB'  },
  { name: 'Jean Zuccarelli',     initials: 'JZ'  },
  { name: 'Maria Emilia Garcia', initials: 'MEG' },
];
```

→ REMONTER Maria :
```js
const team = [
  { name: 'Jean-François Morin', initials: 'JFM' },
  { name: 'Arnaud Bochurberg',   initials: 'AB'  },
  { name: 'Maria Emilia Garcia', initials: 'MEG' },
  { name: 'Jean Zuccarelli',     initials: 'JZ'  },
];
```

Et dans translations.ts, réordonner `equipe.team[]` de la même manière (FR et EN) :
```
team[0] = JFM
team[1] = AB
team[2] = MEG (nouvelle bio facilitatrice)
team[3] = JZ
```

---

## LOT 4 — Musée : couleurs par année dans la timeline

Fichier : `src/components/Preuves.astro`

Les années du musée sont dans des `<span class="px-3 py-1 rounded-full bg-slate-100">`.
Stéphane veut que chaque année ait la couleur de la progression :

```js
const museeColors = [
  'bg-energy-red/20 text-energy-red',       // 2021 Genèse = rouge
  'bg-energy-yellow/20 text-yellow-700',     // 2022 Terrain = jaune
  'bg-energy-beige/20 text-yellow-800',      // 2023 Formalisation = beige
  'bg-[#86efac]/20 text-green-700',          // 2024 Diffusion = vert clair
  'bg-energy-green/20 text-energy-dark',     // 2025 Augmentation = vert foncé
  'bg-navy-900/10 text-navy-900',            // 2026 … = navy (futur)
];
```

Appliquer ces couleurs au lieu du `bg-slate-100` fixe.

Note : il y a maintenant 6 années (ajouter 2026), donc il faut aussi ajouter une 6e entrée dans `museeYears` (voir LOT 1.10).

---

## LOT 5 — Section Chiffres : mise à jour des valeurs

Fichier : `src/components/Chiffres.astro`

Le composant a `const values = [5, 200, 18, 50];` en dur.
Après les changements de LOT 1.8, adapter :
```js
const values = [5, 50, 18, 200];
```

---

## LOTS FUTURS (non bloquants, à planifier)

Ces éléments sont souhaités par Stéphane mais nécessitent une réflexion design ou technique plus poussée. Ne pas les implémenter maintenant — les noter comme prochaines étapes.

### F1 — Animation d'entrée "machine à écrire"
Le titre "Nos énergies + collectives" et l'explication EC²R (E=Énergie, C=Croissance/Changement/Comportement, R=Responsable/Réaliste/Rapide) doivent apparaître lettre par lettre comme un vieux terminal, puis accélérer. Design interactif complexe.

### F2 — Nuage de mots animé (section Preuves)
Remplacer le wall of tags statique par un nuage de mots 3D/animé qui tourne et s'auto-alimente. Bibliothèque type `d3-cloud` ou `react-wordcloud`.

### F3 — Compteur T0 de lancement
Widget discret avec : date/heure de lancement du site, nombre de personnes mobilisées, nombre de collectifs accompagnés, compteur en temps réel de visiteurs. Marketing viral pour les early adopters.

### F4 — Photos/avatars dans l'équipe
Stéphane et Maria ont des avatars créés. Possibilité d'animer les photos ou d'avoir vidéo avatar à gauche et texte à droite.

### F5 — Intégration LinkedIn posts dans Preuves
Importer les top 5 feedbacks LinkedIn avec nom + photo + logo entreprise. Nécessite soit des screenshots, soit l'API LinkedIn.

### F6 — Chat/question contextuelle
Pas un chatbot, mais un élément où le visiteur peut poser une question pour naviguer directement vers ce qui l'intéresse. Design à définir.

### F7 — Navigation animée avec images symboliques
Chaque item de la barre nav associé à une image symbolique et animée (battement, pouls). Design à créer.

### F8 — Formulaire pré-rempli progressif
Les champs du formulaire contact commencent à se pré-remplir avec des suggestions (arobase qui apparaît, etc.) pour inciter à compléter.

### F9 — Pricing indicatif
Quelque part sur le site (pas forcément visible immédiatement) : signaler qu'une proposition chiffrée peut être formalisée rapidement. "À partir de 5000€ pour un collectif". Sans afficher de grille tarifaire.

### F10 — Distinction juridique méthode EC²R vs EC²R Conseil
La méthode EC²R est un asset intellectuel indépendant. EC²R Conseil est la société qui l'exploite sous licence. Le site est celui de la méthode. Attention au footer, aux mentions légales, à la domiciliation. Point juridique à clarifier avec Stéphane.

---

## Récapitulatif d'exécution

| Lot | Fichiers | Effort | Impact |
|-----|----------|--------|--------|
| 1 | translations.ts | Fort (30+ modifications texte) | Critique — tout le vocabulaire |
| 2 | Hero.astro | Moyen | Visuel — couleurs batteries |
| 3 | Equipe.astro + translations.ts | Léger | Ordre des membres |
| 4 | Preuves.astro | Léger | Visuel — couleurs timeline |
| 5 | Chiffres.astro | Trivial | Cohérence avec lot 1 |

**Ordre recommandé : LOT 1 → LOT 5 → LOT 3 → LOT 2 → LOT 4**
(Commencer par le contenu, finir par le visuel)

**Validation finale** : `npm run build && npm run preview` puis vérifier :
- Toggle FR/EN fonctionne sur toutes les sections modifiées
- Aucun texte cassé ou tronqué
- Les animations cycling Hero fonctionnent toujours
- Les couleurs batteries et musée sont correctes
