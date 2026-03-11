# EC2R Website — Prompts pour Session 2 (implémentation)

Repo : `/home/ll/Projects/ec2r-website`
Stack : Astro + Tailwind + TypeScript
Après chaque lot : `npm run build` pour vérifier.
Ordre d'exécution : P5 → P3 → P4 → P2 → P1.

---
---
---

# P5 — Equipe (rôles/bios) + Contact (intentions + anti-pitch) + Footer

Fichiers : `src/components/Equipe.astro`, `src/components/Contact.astro`, `src/components/Footer.astro`, `src/i18n/translations.ts`

---

## A — Section Equipe : rôles et bios (translations.ts + Equipe.astro)

### Intro de la section
```typescript
// FR
equipe.intro = "Pas des consultants interchangeables. Des professionnels et des humains qui ont expérimenté, qui croient à la différenciation de la méthode, et qui vous aident à la faire vivre et la traduire dans votre quotidien métier."

// EN
equipe.intro = "Not interchangeable consultants. Professionals and humans who have experimented, who believe in the method's differentiation, and who help you bring it to life in your daily business context."
```

### Founders

**Stéphane+ Flau** (founders index 0) — le nom est FLAU (F-L-A-U), pas Flahaut :
```typescript
// FR
role: 'Fondateur de la méthode EC²R — Cofondateur EC²R Conseil',
bio: "Porte et incarne la méthode EC²R depuis plus de 5 ans. Accompagne des collectifs vers la performance depuis plus de 20 ans. Assure l'amélioration continue de la méthode — garant, avec l'IA, de son intégrité et de son développement.",

// EN
role: 'Founder of the EC²R method — Co-founder EC²R Conseil',
bio: "Carries and embodies the EC²R method for over 5 years. Supports collectives towards performance for over 20 years. Ensures continuous improvement — guardian, with AI, of the method's integrity and development.",
```

**Luc+ Létoffé** (founders index 1) :
```typescript
// FR
role: 'Co-design Méthode × Technologie — À la genèse du protocole augmenté',
bio: "Passe de l'idéation à la situation. Co-construit la promesse de valeur+ avec vos experts métiers, traduit+ en produit, et fait passer de l'idée à l'acte — en direct, avec vous.",

// EN
role: 'Co-design Method × Technology — At the genesis of the augmented protocol',
bio: "Moves from ideation to situation. Co-builds the value promise+ with your business experts, translates+ into product, and moves from idea to action — directly, with you.",
```

### Team members — translations.ts

**Jean-François Morin** (team index 0) :
```typescript
// FR
role: 'Cofondateur EC²R Conseil — Associé de la méthode EC²R',
bio: "Entraîneur d'entraîneurs et de sportifs professionnels et champions. Ancrage terrain et transmission. Associé depuis les origines.",

// EN
role: 'Co-founder EC²R Conseil — Associate of the EC²R method',
bio: "Coaches' coach and trainer of professional athletes and champions. Field grounding and transmission. Partner since the origins.",
```
IMPORTANT : ne PAS mentionner "Directeur Général" — il a démissionné. Jamais de rôle exécutif.

**Arnaud Bochurberg** (team index 1) :
```typescript
// FR
role: 'Associé EC²R Conseil — Expert & Prescripteur',
bio: "Expert en profilage comportemental. Fondateur du Groupe Alar. Accompagne les organisations dans le déploiement opérationnel et la mise en acte.",

// EN
role: 'EC²R Conseil Partner — Expert & Advocate',
bio: "Behavioural profiling expert. Founder of Groupe Alar. Supports organisations in operational deployment and moving to action.",
```

**Maria Emilia Garcia** (team index 2 — REMONTÉE avant Zuccarelli) :
```typescript
// FR
role: 'Facilitatrice EC²R — Logistique, équipe, déploiement',
bio: "Anime la logistique des déploiements et la coordination des équipes. Facilite les débriefs individuels sur les profils de leadership.",

// EN
role: 'EC²R Facilitator — Logistics, team, deployment',
bio: "Facilitates EC²R session deployment, coordinates team logistics. Trained in individual profile debriefs.",
```

**Jean Zuccarelli** (team index 3) :
```typescript
// FR
role: 'Associé EC²R Conseil — Praticien EC²R',
bio: "Place réservée — profil en cours d'intégration.",

// EN
role: 'EC²R Conseil Partner — EC²R Practitioner',
bio: "Reserved slot — profile being integrated.",
```

### Réordonnement dans Equipe.astro

Modifier l'array `team` en dur dans le composant :
```js
const team = [
  { name: 'Jean-François Morin', initials: 'JFM' },
  { name: 'Arnaud Bochurberg',   initials: 'AB'  },
  { name: 'Maria Emilia Garcia', initials: 'MEG' },
  { name: 'Jean Zuccarelli',     initials: 'JZ'  },
];
```

Et réordonner `equipe.team[]` dans translations.ts (FR et EN) pour correspondre : index 0=JFM, 1=AB, 2=MEG, 3=JZ.

---

## B — Section Contact (translations.ts + Contact.astro)

### cardNo — Reformulation douce
Remplacer le ton "Oubliez-nous" par une ouverture projet-first :

```typescript
// FR
cardNo: {
  title: "D'abord le projet, pas le budget",
  text: "On peut être intelligent pour trouver les solutions de financement. Mais ce qui nous intéresse, c'est d'abord votre projet. La plateforme est là pour vous aider autour d'un résultat — pas d'un budget.",
  cta: "Parlons d'abord du projet →",
},

// EN
cardNo: {
  title: "The project first, not the budget",
  text: "We can be smart about finding funding solutions. But what interests us is your project first. The platform is here to help you around a result — not a budget.",
  cta: "Let's talk about the project first →",
},
```

### Intro section contact
```typescript
// FR
intro: "Pas un pitch. Pas un formulaire commercial. Pas un agent conversationnel. Un vrai échange avec un humain pendant 10 minutes — pour voir si et comment ça résonne dans votre organisation.",

// EN
intro: "Not a pitch. No commercial form. No conversational agent. A real exchange with a human for 10 minutes — to see if and how it resonates in your organisation.",
```

### Options du formulaire
```typescript
// FR
situationOptions: [
  "Vous voulez qu'on échange 10 min en visio",
  "Vous voulez nous prescrire ou recommander",
  "Vous voulez expérimenter le protocole",
  "Vous voulez démarrer un accompagnement",
],

// EN
situationOptions: [
  "You want a 10-min video exchange",
  "You want to refer or recommend us",
  "You want to experiment with the protocol",
  "You want to start a programme",
],
```

### Bloc conditionnel "prescrire" dans Contact.astro

Quand l'utilisateur sélectionne "prescrire / recommander" (opt1), afficher un bloc supplémentaire. Ajouter après le `<select>` :

```html
<div id="referral-details" class="hidden mt-3 p-4 bg-white/5 rounded-lg border border-white/10 space-y-3">
  <p class="text-white/50 text-xs">Vous pensez à quelqu'un pour qui ça résonnerait ?</p>
  <input type="text" name="referral-name" placeholder="Nom de la personne"
         class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-white/30 focus:outline-none focus:border-energy-green/50" />
  <input type="email" name="referral-email" placeholder="Son email (optionnel)"
         class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-white/30 focus:outline-none focus:border-energy-green/50" />
  <p class="text-white/30 text-xs italic">On valorise chaque mise en relation sérieuse.</p>
</div>
```

Script JS dans Contact.astro :
```js
const intentSelect = document.getElementById('intent');
const refDetails = document.getElementById('referral-details');
intentSelect?.addEventListener('change', () => {
  refDetails?.classList.toggle('hidden', intentSelect.value !== 'opt1');
});
```

### Check mis à jour
```typescript
// FR check index 2
"10 minutes en visio — si ça résonne, on expérimente et on fait vivre ça pour vous"

// EN
"10 minutes on video — if it resonates, we experiment and bring it to life for you"
```

---

## C — Footer (Footer.astro + translations.ts)

Mettre `footer.address` à `''` (chaîne vide) FR et EN.

Dans Footer.astro, conditionner l'affichage :
```astro
{fr.address && (
  <span data-i18n-fr={fr.address} data-i18n-en={en.address}>{fr.address}</span>
)}
```

Ajouter un commentaire HTML dans Footer.astro :
```html
<!-- NOTE JURIDIQUE : La méthode EC²R est un asset intellectuel distinct d'EC²R Conseil.
     Ce site représente la méthode. L'adresse Neuilly = siège d'EC²R Conseil uniquement.
     L'adresse reste dans mentions-legales.astro. -->
```

---

## Validation P5
- [ ] "Flau" (pas Flahaut) partout
- [ ] Stéphane = "Fondateur de la méthode EC²R" (pas cofondateur de la méthode)
- [ ] JFM = "Cofondateur EC²R Conseil — Associé de la méthode" (PAS DG, PAS fondateur de la méthode)
- [ ] Ordre team : JFM → Arnaud → Maria → Jean Z.
- [ ] cardNo = "D'abord le projet, pas le budget" (PAS "Oubliez-nous")
- [ ] 4 options d'intention dans le select contact
- [ ] Bloc conditionnel "prescrire" visible quand option 2 sélectionnée
- [ ] Adresse vide dans footer, conservée dans mentions légales
- [ ] `npm run build` OK

---
---
---

# P3 — Section Méthode (vocabulaire + ordre énergies) + Chiffres + Preuves (verbatims LinkedIn)

Fichiers : `src/i18n/translations.ts`, `src/components/Methode.astro`, `src/components/Chiffres.astro`, `src/components/Preuves.astro`

---

## A — Vocabulaire section Méthode (translations.ts)

### Titres et intro

```typescript
// FR
methode: {
  label: 'La méthode',
  title1: "On n'épuise pas son énergie à motiver",
  title2: "On installe les conditions favorables pour mobiliser+",
  title3: "Cibler+, agir+, pratiquer+, traduire+, mesurer+",
  intro: "6 énergies+ collectives. 18 batteries pour se charger. 9 niveaux. Et X comportements pour se recharger (thermomètre). Un diagnostic+ chirurgical qui vous aide à identifier en temps réel les leviers de mobilisation collective. Pas de focus uniquement sur l'individu — guider le professionnel en situation, pour l'ancrer dans la réalité de son collectif.",
  // ...
}

// EN
methode: {
  label: 'The method',
  title1: "We don't exhaust energy trying to motivate",
  title2: "We install the favourable conditions to mobilise+",
  title3: "Target+, act+, practise+, translate+, measure+",
  intro: "6 collective energies+. 18 batteries to charge. 9 levels. And X behaviours to recharge (thermometer). A surgical+ diagnosis helping you identify collective mobilisation levers in real time. Not just individual focus — guiding the professional in situation, grounded in their collective reality.",
  // ...
}
```

### Bloc "Mobilisé ≠ Motivé"
Vérifier que le texte contient bien ces 3 phrases (déjà présentes normalement) :
- "L'écart devient abyssal pour le passage à l'acte."
- "La vitesse bat la taille. La densité bat le volume."
- "L'humain au service du collectif, pas l'inverse — pas juste un outil, une structure vivante dans une conversation."

Si une manque, l'ajouter.

### Énergie 5 — qualifier
```typescript
// FR énergie index 4
{ name: 'Réguler', qualifier: 'recentrer / confiance / gouvernance', ... }
// EN
{ name: 'Regulate', qualifier: 'refocus / trust / governance', ... }
```

### Séparation visuelle Circuit mobilisation / Circuit régulation (Methode.astro)

Dans le rendu des 6 énergies (la grille `sm:grid-cols-2 lg:grid-cols-3`), insérer un sous-titre entre l'énergie 3 et l'énergie 4 :

Avant la boucle des énergies, scinder en 2 groupes :
```html
<!-- Groupe 1 : Circuit mobilisation -->
<p class="col-span-full text-xs text-slate-400 uppercase tracking-widest font-semibold mt-4 mb-2">
  Circuit mobilisation →
</p>
<!-- Énergies 0, 1, 2 -->

<!-- Groupe 2 : Circuit régulation -->
<p class="col-span-full text-xs text-slate-400 uppercase tracking-widest font-semibold mt-8 mb-2">
  Circuit régulation →
</p>
<!-- Énergies 3, 4, 5 -->
```

Astuce d'implémentation : au lieu de splitter la boucle, utiliser une condition `{i === 3 && <p>...</p>}` dans le map.

---

## B — Chiffres (Chiffres.astro + translations.ts)

### Valeurs
Dans Chiffres.astro, remplacer :
```js
const values = [5, 200, 18, 250];
```

### Labels translations.ts
```typescript
// FR
chiffres: {
  stats: [
    { suffix: ' ans', label: 'de méthode éprouvée sur le terrain' },
    { suffix: '+', label: 'collectifs accompagnés' },
    { suffix: '', label: 'batteries pour se charger' },
    { suffix: '+', label: 'comportements pour se recharger' },
  ],
},

// EN
chiffres: {
  stats: [
    { suffix: ' years', label: 'of method proven in the field' },
    { suffix: '+', label: 'collectives supported' },
    { suffix: '', label: 'batteries to charge' },
    { suffix: '+', label: 'behaviours to recharge' },
  ],
},
```

### Eyebrow au-dessus des stats (Chiffres.astro)
Ajouter avant la grille de stats :
```html
<p class="text-center text-white/30 text-sm font-medium tracking-wider mb-10"
   data-i18n-fr="5 ans · 2 jours · 1 heure — 2 méthodes éprouvées"
   data-i18n-en="5 years · 2 days · 1 hour — 2 proven methods">
  5 ans · 2 jours · 1 heure — 2 méthodes éprouvées
</p>
```

---

## C — Preuves : cartes LinkedIn (Preuves.astro + translations.ts)

### Objectif
Remplacer les 3 testimonials actuels par 5 cartes style "post LinkedIn" + 1 placeholder.

### Données dans translations.ts
Remplacer `preuves.testimonials` par `preuves.linkedinPosts` :

```typescript
// FR
linkedinPosts: [
  {
    name: 'Directeur réseau',
    title: 'Réseau national — N°2 immobilier',
    quote: "Après les formations avec ce qui se fait de mieux en termes de management, le réseau avait eu des résultats au-dessus des autres franchises.",
    keywords: ['résultats', 'management'],
    type: 'Résultat terrain',
  },
  {
    name: 'Ancienne stagiaire AG2R',
    title: 'Vers le MEDEF Martinique — ambassadrice spontanée',
    quote: "Tu adresses le climat, pas la météo. Ce qu'on a essayé pendant un an avec des avatars IA, vous le faites avec une méthode qui tient la route.",
    keywords: ['climat', 'méthode'],
    type: 'Comparaison terrain',
  },
  {
    name: 'Cabinet accompagné',
    title: "Cabinet d'expertise comptable",
    quote: "Ce qui change, c'est qu'on ne parle plus de ressenti mais de faits. Le diagnostic est chirurgical : on sait exactement quoi adresser, dans quel ordre.",
    keywords: ['chirurgical', 'faits'],
    type: 'Diagnostic',
  },
  {
    name: 'Placeholder 4',
    title: 'À compléter avec Stéphane',
    quote: "Verbatim à récupérer depuis les posts LinkedIn EC²R.",
    keywords: [],
    type: 'À venir',
  },
  {
    name: 'Placeholder 5',
    title: 'À compléter avec Stéphane',
    quote: "Verbatim à récupérer depuis les posts LinkedIn EC²R.",
    keywords: [],
    type: 'À venir',
  },
],
```

Faire la version EN avec les traductions des 3 premiers (les 2 placeholders restent identiques).

### Rendu dans Preuves.astro
Remplacer le bloc testimonials actuel par :

```html
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
  {fr.linkedinPosts.map((post, i) => (
    <div class={`reveal reveal-delay-${(i % 3) + 1}`}>
      <div class="bg-white rounded-xl p-6 h-full border border-slate-200 relative group
                  hover:shadow-lg hover:shadow-navy-900/5 hover:border-energy-dark/20 transition-all duration-500">
        <!-- Header avec avatar placeholder -->
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-full bg-navy-950/[0.06] border border-slate-200 flex items-center justify-center">
            <span class="text-navy-900/30 text-xs font-bold">{post.name.split(' ').map(w => w[0]).join('')}</span>
          </div>
          <div>
            <p class="font-display font-semibold text-navy-950 text-sm"
               data-i18n-fr={post.name} data-i18n-en={en.linkedinPosts[i].name}>{post.name}</p>
            <p class="text-slate-500 text-xs"
               data-i18n-fr={post.title} data-i18n-en={en.linkedinPosts[i].title}>{post.title}</p>
          </div>
        </div>
        <!-- Type badge -->
        <span class="inline-block text-xs font-medium text-energy-dark bg-energy-dark/[0.08] px-3 py-1 rounded-full mb-4"
              data-i18n-fr={post.type} data-i18n-en={en.linkedinPosts[i].type}>{post.type}</span>
        <!-- Quote -->
        <blockquote class="text-slate-700 text-sm leading-relaxed"
                    data-i18n-fr={post.quote} data-i18n-en={en.linkedinPosts[i].quote}>
          {post.quote}
        </blockquote>
      </div>
    </div>
  ))}
</div>
```

Adapter les props du composant : `fr.linkedinPosts` au lieu de `fr.testimonials`. Si les testimonials sont encore référencés ailleurs (ils ne le sont pas), laisser l'ancien dans translations.ts mais ne plus le rendre.

### Intro preuves
```typescript
// FR
intro: "Pas de promesses marketing. Des résultats concrets — les mots de nos clients depuis 5 ans. Des données mesurables. Des comportements observables. Un impact déjà+ réel.",

// EN
intro: "No marketing promises. Concrete results — client words from 5 years. Measurable data. Observable behaviours. An already+ real impact.",
```

---

## Validation P3
- [ ] Titre méthode : "motiver" → "mobiliser+", ajout "pratiquer+"
- [ ] Intro méthode : "se charger" (pas recharger pour les batteries), "X comportements (thermomètre)"
- [ ] Séparation visuelle "Circuit mobilisation" / "Circuit régulation" entre E3 et E4
- [ ] Chiffres : 5 / 200 / 18 / 250 avec bons labels
- [ ] Eyebrow "5 ans · 2 jours · 1 heure" au-dessus des chiffres
- [ ] 5 cartes LinkedIn (3 vraies + 2 placeholders) remplacent les testimonials
- [ ] `npm run build` OK

---
---
---

# P4 — Musée/Trajectoire (timeline couleurs) + Protocole (séquence IRM + abyme)

Fichiers : `src/components/Preuves.astro`, `src/components/Protocole.astro`, `src/i18n/translations.ts`

---

## A — Musée / Trajectoire dans Preuves.astro

### Titre et sous-titre dans translations.ts
```typescript
// FR
museeTitle: '5 ans, 2 jours, 2 mois de terrain — notre petit musée augmenté',
museeSub: "Des premiers séminaires au déploiement multi-sites en national. Des slides originels qui font peur au protocole augmenté par l'IA. Chaque année a été un point de rupture — on essaye, on expérimente, on traduit, on améliore, on affine, on grandit.",

// EN
museeTitle: '5 years, 2 days, 2 months in the field — our augmented little museum',
museeSub: "From first seminars to multi-site national deployments. From original slides to AI-augmented protocols. Each year was a turning point — we try, experiment, translate, improve, refine, grow.",
```

### Données timeline — remplacer museeYears (string[]) par un array d'objets
Dans translations.ts, changer le type de `museeYears` :

```typescript
// FR
museeTimeline: [
  { year: '2021', label: 'Genèse', sub: 'Les premiers séminaires. On naît.' },
  { year: '2022', label: 'Terrain', sub: 'Premiers déploiements. On tâtonne.' },
  { year: '2023', label: 'Formalisation', sub: 'On améliore, on sanctuarise. On diffuse.' },
  { year: '2024', label: 'Diffusion', sub: 'Les référents apparaissent. Ça prend.' },
  { year: '2025', label: 'Augmentation', sub: "L'IA entre dans la boucle. Du savoir-faire au faire-savoir." },
  { year: '2026', label: '…', sub: 'Ce site — mise en abyme. On expérimente en direct.' },
],

// EN
museeTimeline: [
  { year: '2021', label: 'Genesis', sub: 'The first seminars. We begin.' },
  { year: '2022', label: 'Field', sub: 'First deployments. We explore.' },
  { year: '2023', label: 'Formalisation', sub: 'We improve, we formalise. We spread.' },
  { year: '2024', label: 'Diffusion', sub: 'Referents emerge. It takes hold.' },
  { year: '2025', label: 'Augmentation', sub: "AI enters the loop. From know-how to show-how." },
  { year: '2026', label: '…', sub: 'This site — mise en abyme. We experiment live.' },
],
```

### Couleurs par année (dans Preuves.astro)
```js
const timelineColors = [
  'bg-red-500',      // 2021 Genèse = rouge
  'bg-yellow-400',   // 2022 Terrain = jaune
  'bg-amber-300',    // 2023 Formalisation = beige/ambre
  'bg-green-300',    // 2024 Diffusion = vert clair
  'bg-green-600',    // 2025 Augmentation = vert foncé
  'bg-gradient-to-r from-green-600 to-energy-green', // 2026 = gradient
];

const timelineTextColors = [
  'text-red-500',
  'text-yellow-500',
  'text-amber-500',
  'text-green-500',
  'text-green-700',
  'text-energy-green',
];
```

### Rendu HTML du musée (remplacer le bloc musée actuel dans Preuves.astro)

```html
<div class="mt-16 reveal">
  <div class="bg-white border border-slate-200 rounded-2xl p-8 md:p-12">
    <p class="text-xs text-slate-400 uppercase tracking-wider font-medium mb-3"
       data-i18n-fr={frMuseeLabel} data-i18n-en={enMuseeLabel}>{frMuseeLabel}</p>
    <h4 class="font-display font-bold text-xl text-navy-950 mb-3"
        data-i18n-fr={fr.museeTitle} data-i18n-en={en.museeTitle}>{fr.museeTitle}</h4>
    <p class="text-slate-600 leading-relaxed mb-8"
       data-i18n-fr={fr.museeSub} data-i18n-en={en.museeSub}>{fr.museeSub}</p>

    <!-- Timeline horizontale -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {fr.museeTimeline.map((item, i) => (
        <div class={`reveal reveal-delay-${i + 1} ${i === 5 ? 'ring-1 ring-energy-green/30 bg-energy-green/[0.03]' : ''} rounded-lg p-4`}>
          <div class={`h-1 ${timelineColors[i]} rounded-full mb-3`}></div>
          <p class={`font-display font-bold text-lg ${timelineTextColors[i]}`}>{item.year}</p>
          <p class="font-display font-semibold text-navy-950 text-sm mb-1"
             data-i18n-fr={item.label} data-i18n-en={en.museeTimeline[i].label}>{item.label}</p>
          <p class="text-slate-500 text-xs leading-relaxed"
             data-i18n-fr={item.sub} data-i18n-en={en.museeTimeline[i].sub}>{item.sub}</p>
        </div>
      ))}
    </div>
  </div>
</div>
```

Supprimer l'ancien rendu `museeYears.map()` avec les spans `bg-slate-100`.
Supprimer aussi l'ancien `museeYears: string[]` de translations.ts (remplacé par `museeTimeline`).

Note : adapter les props du composant Preuves.astro si nécessaire — ajouter `museeTimeline` dans les données transmises par index.astro.

---

## B — Section Protocole (Protocole.astro + translations.ts)

### Header de section
```typescript
// FR
protocole: {
  label: 'Le protocole augmenté',
  title1: 'Du levier au comportement.',
  title2: "Du constat au passage à l'acte",
  intro: "Mesurer l'énergie collective pour cibler. Prioriser ensemble les axes. Identifier les profils de leadership. Accompagner le passage à l'acte jusqu'au comportement en situation.",
  // ...
}

// EN
protocole: {
  label: 'The augmented protocol',
  title1: 'From lever to behaviour.',
  title2: 'From insight to action',
  intro: "Measure collective energy to target. Prioritise axes together. Identify leadership profiles. Support action through to behaviour in situation.",
  // ...
}
```

### Nouveau bloc IRM en 5 étapes (ajouter dans Protocole.astro, AVANT les 3 parcours)

Données dans translations.ts :
```typescript
// FR — ajouter dans protocole
irmSteps: [
  { title: 'Mesurer', text: 'Votre énergie collective → cibler les leviers' },
  { title: 'Prioriser', text: 'Ensemble, les axes sur lesquels agir' },
  { title: 'Identifier', text: 'Le profil de vos leaders → comment agir' },
  { title: 'Restituer', text: 'Journée de restitution → faire vivre, s'entraîner sur situations métiers' },
  { title: 'Ancrer', text: 'Pratiquer dans son quotidien métier → ancrer le changement' },
],
irmTitle: 'Votre IRM collectif+ organisationnel',
irmSub: 'Un baromètre qui révèle la dynamique réelle',

// EN
irmSteps: [
  { title: 'Measure', text: 'Your collective energy → target the levers' },
  { title: 'Prioritise', text: 'Together, the axes to act on' },
  { title: 'Identify', text: 'Your leaders' profiles → how to act' },
  { title: 'Deliver', text: 'Restitution day → bring it to life, train on business situations' },
  { title: 'Anchor', text: 'Practise in daily business → anchor the change' },
],
irmTitle: 'Your collective+ organisational MRI',
irmSub: 'A barometer that reveals the real dynamic',
```

Rendu HTML (insérer dans Protocole.astro, entre le header et les 3 parcours) :
```html
<div class="mb-16 reveal">
  <div class="bg-navy-950 rounded-2xl p-8 md:p-12 text-white">
    <h3 class="font-display font-bold text-2xl mb-2"
        data-i18n-fr={fr.irmTitle} data-i18n-en={en.irmTitle}>{fr.irmTitle}</h3>
    <p class="text-white/50 text-sm mb-8"
       data-i18n-fr={fr.irmSub} data-i18n-en={en.irmSub}>{fr.irmSub}</p>
    <div class="flex flex-col md:flex-row items-start gap-4">
      {fr.irmSteps.map((step, i) => (
        <>
          <div class="flex-1 text-center">
            <div class="w-10 h-10 rounded-full bg-energy-dark/30 text-energy-green flex items-center justify-center mx-auto mb-3 text-sm font-bold">
              {i + 1}
            </div>
            <p class="font-display font-semibold text-white text-sm mb-1"
               data-i18n-fr={step.title} data-i18n-en={en.irmSteps[i].title}>{step.title}</p>
            <p class="text-white/40 text-xs"
               data-i18n-fr={step.text} data-i18n-en={en.irmSteps[i].text}>{step.text}</p>
          </div>
          {i < fr.irmSteps.length - 1 && (
            <div class="hidden md:flex items-center text-energy-green/40 mt-8">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          )}
        </>
      ))}
    </div>
  </div>
</div>
```

### Parcours 3 visuellement secondaire
Le parcours 3 ("Expérimenter, avancer seul") est déjà en `bg-slate-50` (vs `bg-navy-950` pour les 2 premiers). C'est bon.
Ajouter un badge discret :
```html
<span class="absolute top-4 right-4 text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">accès libre</span>
```

### Texte abyme — CORRECTIONS CRITIQUES

```typescript
// FR
abyme: {
  label: 'Mise en abyme',
  title: 'Ce site documente sa propre construction.',
  text1: "Nous avons utilisé la puissance dirigée de l'IA pour partir du réel et définir notre valeur ajoutée. Des années de collectifs accompagnés, des centaines de données terrain — traduits en expérience augmentée. Ce site n'est pas un résultat figé, mais l'illustration du processus vivant de la méthode.",
  text2: "Pas montrer le processus — documenter et améliorer constamment. On essaye, on expérimente, on traduit, on améliore, on affine, on grandit. C'est ça l'approche EC²R.",
  steps: [
    { title: 'Partir du réel', text: "Interviews ciblées, données, observations en situation — pas de promesse marketing." },
    { title: 'Identifier chirurgicalement', text: "La méthode EC²R structure et croise les retours. Chaque affirmation adossée à une preuve ou à un croisement de données." },
    { title: "Construire le passage à l'acte", text: "Compétences EC²R + IA pour accélérer la formalisation. Brief → livrable." },
    { title: 'Documenter le vivant', text: "Ce site ne se veut pas comme un objet figé, mais comme une illustration du processus vivant — la trajectoire de mobilisation, pas juste les résultats." },
  ],
},

// EN
abyme: {
  label: 'Meta-narrative',
  title: 'This site documents its own construction.',
  text1: "We used AI's directed power to start from reality and define our value. Years of collectives supported, hundreds of field data points — translated into augmented experience. This site is not a fixed result, but the illustration of the method's living process.",
  text2: "Not showing the process — documenting and constantly improving. We try, experiment, translate, improve, refine, grow. That's the EC²R approach.",
  steps: [
    { title: 'Start from reality', text: "Targeted interviews, data, in-situation observations — no marketing promise." },
    { title: 'Identify surgically', text: "The EC²R method structures and cross-references feedback. Every claim backed by proof or data cross-referencing." },
    { title: 'Build the path to action', text: "EC²R expertise + AI to accelerate formalisation. Brief → deliverable." },
    { title: 'Document the living', text: "This site is not a fixed object, but an illustration of the living process — the mobilisation trajectory, not just results." },
  ],
},
```

Points critiques :
- "La **méthode EC²R** structure" (PAS "l'IA structure") → c'est la méthode qui tient la recette, pas la machine
- Aucune mention de "quelques heures" ou de rapidité → ils doivent penser que ça a pris 6 mois
- "Interviews ciblées, données, observations" (PAS "vocaux, témoignages")

Faire un `grep -n "quelques heures\|in a few hours\|hours" src/i18n/translations.ts` et supprimer toute occurrence restante.

---

## Validation P4
- [ ] Musée : 6 étapes avec couleurs (rouge→jaune→ambre→vert clair→vert foncé→gradient)
- [ ] 2026 = carte highlighted avec ring energy-green
- [ ] Protocole : bloc IRM 5 étapes AVANT les 3 parcours
- [ ] Parcours 3 avec badge "accès libre"
- [ ] Abyme : "La méthode EC²R structure" (PAS "l'IA")
- [ ] Abyme : AUCUNE mention de rapidité de construction
- [ ] Abyme : "Interviews ciblées" (PAS "vocaux")
- [ ] `npm run build` OK

---
---
---

# P2 — Situations (accroches E1-E6) + Batteries neutres + Nuage de mots animé

Fichiers : `src/i18n/translations.ts`, `src/components/Hero.astro`, `src/components/Preuves.astro`

---

## A — Batteries : affichage E1-E6 en couleur neutre

Dans Hero.astro, les icônes SVG des batteries utilisent actuellement `text-energy-green/60 group-hover:text-energy-green`.

Remplacer par une couleur **neutre** (pas vert = ça marche, c'est un diagnostic) :
```
text-white/30 group-hover:text-white/60
```

Le texte dans les batteries est déjà "E{i+1}" — c'est correct, ne pas changer.

Note : la progression de couleur rouge→jaune→beige→vert est déjà portée par la **scroll progress bar** en haut du site (dans Nav.astro). Ne PAS dupliquer ce gradient sur les batteries.

---

## B — Accroches des 7 situations (translations.ts)

Remplacer les `accroche` dans `situations[]` FR :

```typescript
situations: [
  {
    // E1
    accroche: "Vos équipes adhèrent parfois au changement sur le papier, mais sur le terrain, le collectif ne s'en empare pas assez vite ou ne passe pas assez vite à l'acte.",
    // ceQuiSePasse, essaye, reponse : garder le contenu actuel
    ...
  },
  {
    // E2
    accroche: "Certains sont experts, d'autres moins. Des niveaux d'appropriation différents, des architectures invisibles d'énergie perdue — on veut coopérer, mais on est rattrapé par les silos et les tâches sans valeur ajoutée.",
    ...
  },
  {
    // E3
    accroche: "Vous qui devez exiger+ de résultats collectivement — sans braquer certains ni risquer que l'équipe se démobilise en route.",
    ...
  },
  {
    // E4
    accroche: "Vos managers intermédiaires risquent de s'épuiser ou d'épuiser leurs équipes en passant en force face à la complexité des situations.",
    ceQuiSePasse: "Nouveaux usages de l'IA, gestion des relations, frustrations — ils sont au centre de tout. Certains font à la place. D'autres se réfugient dans leur expertise. D'autres dépensent trop d'énergie à vouloir convaincre ceux qui résistent — au risque de cristalliser les équipes.",
    // essaye, reponse : garder
    ...
  },
  {
    // E5
    accroche: "Dans votre organisation, des énergies et des profils qui ne tirent pas toujours dans le même sens — parfois de manière silencieuse et invisible, parfois de manière très directe.",
    ...
  },
  {
    // E6
    accroche: "Vous devez penser votre organisation en mode continu et vous assurer d'ancrer le changement dans votre nouvelle organisation managériale.",
    ...
  },
  {
    // E7 (Luc / ↗)
    accroche: "Vous avez fait des choix. Vous voulez faire évoluer votre modèle de valeur ajoutée, construire de nouvelles briques ou solutions augmentées. Mais comment leur donner vie avec vos experts ?",
    ...
  },
]
```

Adapter EN en cohérence avec ces formulations.

### Hint sous "Vous le vivez, vous qui…"
```typescript
// FR
situationsHint: "Je me sens concerné. Ça me parle. Cliquez pour voir notre réponse.",
// EN
situationsHint: "I feel concerned. It speaks to me. Click to see our response.",
```

---

## C — Nuage de mots animé (Preuves.astro)

### Remplacement du wall-tags
Supprimer de translations.ts : `wallTags`, `wallMore`, `wallNote` (FR et EN).
Ajouter à la place :

```typescript
// FR
wallWords: {
  large: ['mobilisation', "passage à l'acte", 'collectif vivant', 'méthode vivante', 'résultats concrets'],
  medium: ['chirurgical', 'engagement réel', 'IRM organisationnel', 'co-design', 'énergie collective', 'transformation durable', 'leadership', 'comportement', 'diagnostic', 'terrain'],
  small: ['protocole', 'réaliste', 'ancrage', 'mesurable', 'humain', 'continu', 'praticien', 'boucle', 'situation', 'progrès', 'vivant', 'guidage'],
},
wallCloudNote: 'Mur de contribution ouvert — les mots grandissent avec la méthode.',

// EN
wallWords: {
  large: ['mobilisation', 'moving to action', 'living collective', 'living method', 'concrete results'],
  medium: ['surgical', 'real engagement', 'organisational MRI', 'co-design', 'collective energy', 'lasting transformation', 'leadership', 'behaviour', 'diagnosis', 'field'],
  small: ['protocol', 'realistic', 'grounding', 'measurable', 'human', 'continuous', 'practitioner', 'loop', 'situation', 'progress', 'living', 'guidance'],
},
wallCloudNote: 'Open contribution wall — words grow with the method.',
```

### Rendu dans Preuves.astro

Remplacer le bloc `wall-tags-container` par :

```html
<div class="mb-16 reveal">
  <div class="bg-white rounded-2xl border border-slate-200 p-8 md:p-10">
    <h3 class="font-display font-semibold text-navy-950 text-lg mb-6"
        data-i18n-fr={fr.wallTitle} data-i18n-en={en.wallTitle}>{fr.wallTitle}</h3>

    <div id="word-cloud" class="relative h-[220px] md:h-[280px] overflow-hidden">
      <!-- Mots positionnés par JS -->
    </div>

    <p class="text-slate-400 text-xs mt-6 italic"
       data-i18n-fr={fr.wallCloudNote} data-i18n-en={en.wallCloudNote}>{fr.wallCloudNote}</p>
  </div>
</div>
```

### Script JS du nuage de mots (dans Preuves.astro)

```html
<script>
document.addEventListener('DOMContentLoaded', () => {
  const cloud = document.getElementById('word-cloud');
  if (!cloud) return;

  const wordsData = {
    fr: {
      large: ['mobilisation', "passage à l'acte", 'collectif vivant', 'méthode vivante', 'résultats concrets'],
      medium: ['chirurgical', 'engagement réel', 'IRM organisationnel', 'co-design', 'énergie collective', 'transformation durable', 'leadership', 'comportement', 'diagnostic', 'terrain'],
      small: ['protocole', 'réaliste', 'ancrage', 'mesurable', 'humain', 'continu', 'praticien', 'boucle', 'situation', 'progrès', 'vivant', 'guidage'],
    },
    en: {
      large: ['mobilisation', 'moving to action', 'living collective', 'living method', 'concrete results'],
      medium: ['surgical', 'real engagement', 'organisational MRI', 'co-design', 'collective energy', 'lasting transformation', 'leadership', 'behaviour', 'diagnosis', 'field'],
      small: ['protocol', 'realistic', 'grounding', 'measurable', 'human', 'continuous', 'practitioner', 'loop', 'situation', 'progress', 'living', 'guidance'],
    },
  };

  const sizeClasses = {
    large: 'text-xl md:text-2xl font-bold text-navy-950',
    medium: 'text-sm md:text-base font-medium text-slate-600',
    small: 'text-xs text-slate-400',
  };

  function render() {
    const lang = document.documentElement.getAttribute('data-lang') || 'fr';
    const words = wordsData[lang] || wordsData.fr;
    cloud.innerHTML = '';

    const allWords = [
      ...words.large.map(w => ({ text: w, size: 'large' })),
      ...words.medium.map(w => ({ text: w, size: 'medium' })),
      ...words.small.map(w => ({ text: w, size: 'small' })),
    ];

    // Shuffle
    for (let i = allWords.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allWords[i], allWords[j]] = [allWords[j], allWords[i]];
    }

    allWords.forEach((word, i) => {
      const span = document.createElement('span');
      span.textContent = word.text;
      span.className = `absolute ${sizeClasses[word.size]} transition-all duration-1000 opacity-0`;
      span.style.left = `${5 + Math.random() * 80}%`;
      span.style.top = `${5 + Math.random() * 80}%`;
      span.style.animationDelay = `${i * 0.08}s`;
      cloud.appendChild(span);

      // Fade in staggered
      setTimeout(() => {
        span.style.opacity = word.size === 'large' ? '1' : word.size === 'medium' ? '0.7' : '0.4';
      }, 100 + i * 80);
    });
  }

  render();

  // Re-render on lang change
  new MutationObserver(render).observe(
    document.documentElement, { attributes: true, attributeFilter: ['data-lang'] }
  );

  // Subtle drift animation
  setInterval(() => {
    const spans = cloud.querySelectorAll('span');
    spans.forEach(s => {
      const dx = (Math.random() - 0.5) * 3;
      const dy = (Math.random() - 0.5) * 2;
      const left = parseFloat(s.style.left) + dx;
      const top = parseFloat(s.style.top) + dy;
      s.style.left = `${Math.max(2, Math.min(90, left))}%`;
      s.style.top = `${Math.max(2, Math.min(88, top))}%`;
    });
  }, 4000);
});
</script>
```

---

## D — "Je le vis" interactif (optionnel, si le temps le permet)

Ajouter dans chaque accordion ouvert (sit-panel) un bouton :
```html
<button class="sit-validate text-xs text-white/40 hover:text-energy-green border border-white/10 hover:border-energy-green/40 rounded-full px-3 py-1 mt-2 transition-all">
  Je le vis
</button>
```

Au clic : la bordure de la carte passe en `border-energy-green/40`, une coche ✓ apparaît à côté du E{i}.
Après 2+ clics : afficher un bandeau fixe en bas :
```html
<div id="sit-cta-banner" class="hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-950/95 backdrop-blur border-t border-energy-green/20 py-3 px-6 text-center">
  <span class="text-white/70 text-sm">Vous vous reconnaissez dans <strong id="sit-count" class="text-energy-green">0</strong> situations —</span>
  <a href="#contact" class="text-energy-green font-semibold text-sm ml-2 hover:underline">on s'en parle ?</a>
</div>
```

Script :
```js
let validated = new Set();
document.querySelectorAll('.sit-validate').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const item = btn.closest('.sit-item');
    const idx = item.dataset.sitIdx;
    if (validated.has(idx)) { validated.delete(idx); item.style.borderColor = ''; }
    else { validated.add(idx); item.style.borderColor = 'rgba(74,222,128,0.4)'; }
    const banner = document.getElementById('sit-cta-banner');
    const count = document.getElementById('sit-count');
    count.textContent = validated.size;
    banner.classList.toggle('hidden', validated.size < 2);
    sessionStorage.setItem('ec2r-situations', JSON.stringify([...validated]));
  });
});
```

---

## Validation P2
- [ ] Batteries en couleur neutre (text-white/30) — PAS vert
- [ ] 7 accroches mises à jour (FR + EN)
- [ ] E3 = "exiger+ de résultats collectivement" (PAS "fédérer+ plus")
- [ ] E4 ceQuiSePasse mis à jour avec "cristalliser les équipes"
- [ ] Hint = "Je me sens concerné. Ça me parle."
- [ ] Nuage de mots animé remplace les wall-tags statiques
- [ ] Nuage bilingue (re-render au switch)
- [ ] (optionnel) "Je le vis" interactif + bandeau CTA
- [ ] `npm run build` OK

---
---
---

# P1 — Hero animations EC²R + Nav langue + "Pas le Netflix" barré + Overlay T0

Fichiers : `src/components/Hero.astro`, `src/components/Nav.astro`, `src/i18n/translations.ts`, `src/layouts/Layout.astro` (pour T0)

---

## A — Animation EC²R dans le Hero (Hero.astro + translations.ts)

### Objectif
Remplacer le bloc taglines actuelles ("pour une croissance plus responsable"...) par une décomposition animée de l'acronyme EC²R.

### Données dans translations.ts — ajouter dans `hero` FR et EN :
```typescript
// FR
ec2rLines: {
  e: 'Énergie',
  c1: 'Collective',
  c2cycling: ['Croissance', 'Changement', 'Comportement'],
  rCycling: ['Responsable', 'Réaliste', 'Rapide', 'Rassurant'],
},

// EN
ec2rLines: {
  e: 'Energy',
  c1: 'Collective',
  c2cycling: ['Growth', 'Change', 'Behaviour'],
  rCycling: ['Responsible', 'Realistic', 'Rapid', 'Reassuring'],
},
```

### Rendu HTML (remplacer le bloc taglines dans Hero.astro)

Supprimer :
```html
<div class="text-2xl md:text-3xl font-display font-bold text-white/80 mb-8 h-[2.5em]...">
  <span>pour </span><span id="rotating-tagline">...</span>
</div>
```

Remplacer par :
```html
<div class="mb-8 opacity-0 animate-fade-up font-mono" style="animation-delay: 0.6s">
  <div class="space-y-1 text-lg md:text-xl">
    <div class="flex items-center gap-3">
      <span class="text-energy-green font-bold text-2xl">E</span>
      <span class="text-white/20">·····</span>
      <span class="text-white/70" data-i18n-fr="Énergie" data-i18n-en="Energy">Énergie</span>
    </div>
    <div class="flex items-center gap-3">
      <span class="text-energy-green font-bold text-2xl">C</span>
      <span class="text-white/20">·····</span>
      <span class="text-white/70" data-i18n-fr="Collective" data-i18n-en="Collective">Collective</span>
    </div>
    <div class="flex items-center gap-3">
      <span class="text-energy-green font-bold text-2xl">²C</span>
      <span class="text-white/20">·····</span>
      <span id="c2-cycling" class="text-white font-semibold" style="transition: opacity 0.2s ease">Croissance</span>
    </div>
    <div class="flex items-center gap-3">
      <span class="text-energy-green font-bold text-2xl">R</span>
      <span class="text-white/20">·····</span>
      <span id="r-cycling" class="text-white font-semibold" style="transition: opacity 0.2s ease">Responsable</span>
    </div>
  </div>
</div>
```

### Script de cycling (remplacer l'ancien rotating-tagline)

Supprimer le script `rotating-tagline` existant. Ajouter :

```js
// EC²R cycling
const c2El = document.getElementById('c2-cycling');
const rEl = document.getElementById('r-cycling');
const ec2rData = document.getElementById('hero-cycling-data');

// Ajouter ces data-attrs dans le div #hero-cycling-data :
// data-c2-fr, data-c2-en, data-r-fr, data-r-en
const c2Fr = ['Croissance', 'Changement', 'Comportement'];
const c2En = ['Growth', 'Change', 'Behaviour'];
const rFr = ['Responsable', 'Réaliste', 'Rapide', 'Rassurant'];
const rEn = ['Responsible', 'Realistic', 'Rapid', 'Reassuring'];

let c2Idx = 0, rIdx = 0;

function cycleEC2R(el, arrFr, arrEn, idx) {
  if (!el) return idx;
  const lang = document.documentElement.getAttribute('data-lang') || 'fr';
  el.style.opacity = '0';
  setTimeout(() => {
    el.textContent = lang === 'en' ? arrEn[idx] : arrFr[idx];
    el.style.opacity = '1';
  }, 200);
  return (idx + 1) % arrFr.length;
}

setInterval(() => { c2Idx = cycleEC2R(c2El, c2Fr, c2En, c2Idx); }, 2500);
setInterval(() => { rIdx = cycleEC2R(rEl, rFr, rEn, rIdx); }, 3200);
```

Garder les scripts Netflix/Waze cycling existants (ils sont dans le bloc en dessous).

---

## B — "Pas le Netflix" en barré (Hero.astro)

Le texte "Pas le Netflix de [cycling]" doit être visuellement **barré** (line-through). On barre l'ancien monde, on affirme le nouveau (Waze).

Dans Hero.astro, modifier le rendu sub1 :
```html
<p class="text-lg md:text-xl text-white/60 leading-relaxed max-w-lg mb-4 opacity-0 animate-fade-up" style="animation-delay: 0.8s">
  <span class="line-through decoration-white/20">
    <span id="netflix-prefix" ...>Pas le Netflix de </span>
    <strong id="netflix-cycling" class="text-white/40" ...>la formation</strong>.
  </span><br/>
  <span>
    <span id="waze-prefix" ...>Le Waze du </span>
    <strong id="waze-cycling" class="text-white" ...>comportement professionnel</strong>.
  </span>
</p>
```

Le Netflix cycling continue de fonctionner (les mots changent sous le barré), le Waze reste normal.

---

## C — Bouton langue amélioré (Nav.astro)

### Langue par défaut = FR
Dans Layout.astro ou Nav.astro, vérifier que le script d'init utilise `'fr'` si pas de préférence stockée :
```js
const stored = localStorage.getItem('ec2r-lang');
const lang = stored || 'fr';
```

### Style du bouton
Ajouter des micro-gradients drapeau en fond du bouton :
```css
#lang-toggle.lang-fr-active {
  background: linear-gradient(90deg, rgba(0,35,149,0.08), rgba(255,255,255,0.04), rgba(237,41,57,0.08));
}
#lang-toggle.lang-en-active {
  background: linear-gradient(90deg, rgba(0,36,125,0.08), rgba(207,20,43,0.06), rgba(0,36,125,0.08));
}
```

Dans le script du bouton, ajouter/retirer ces classes au switch :
```js
langBtn.classList.toggle('lang-fr-active', next === 'fr');
langBtn.classList.toggle('lang-en-active', next === 'en');
```

Et à l'init :
```js
langBtn.classList.add(lang === 'fr' ? 'lang-fr-active' : 'lang-en-active');
```

---

## D — Overlay T0 lancement (Layout.astro ou Hero.astro)

Créer un widget fixed discret en haut à gauche :

```html
<div id="t0-overlay" class="fixed top-12 left-4 z-40 hidden sm:flex items-center gap-2
     bg-navy-950/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/5
     text-white/30 hover:text-white/50 transition-colors text-xs max-w-[200px]">
  <span class="w-2 h-2 rounded-full bg-energy-green animate-pulse flex-shrink-0"></span>
  <span>
    <span data-i18n-fr="Live depuis le 11 mars 2026" data-i18n-en="Live since March 11, 2026">Live depuis le 11 mars 2026</span>
    <br/>
    <span class="text-white/20">200+ collectifs · 5 ans terrain</span>
  </span>
</div>
```

Position : sous la nav (top-12), à gauche, semi-transparent, ne gêne pas la lecture.
Mobile : masqué (`hidden sm:flex`).

---

## Validation P1
- [ ] Décomposition EC²R animée (E·Énergie / C·Collective / ²C·cycling / R·cycling)
- [ ] Les mots du ²C et du R cyclent (2.5s / 3.2s)
- [ ] "Pas le Netflix" est visuellement barré (line-through)
- [ ] "Le Waze du" reste normal (pas barré)
- [ ] Langue par défaut = FR
- [ ] Bouton langue avec micro-gradient drapeau
- [ ] Overlay T0 visible desktop, masqué mobile
- [ ] Switch FR/EN met à jour tous les textes dynamiques
- [ ] `npm run build` OK
