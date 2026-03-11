# Corrections Session 0 → Session 2

> Ce document corrige et complète les 5 prompts de la Session 1.
> Session 2 : appliquer ces corrections PAR-DESSUS les prompts P1-P5.
> En cas de conflit entre un prompt Px et ce document, CE DOCUMENT fait foi.

---

## ERREURS CRITIQUES

### ERR-1 — P5 : Le nom est FLAU, pas Flahaut
P5 écrit "Stéphane+ Flahaut". C'est **FAUX**.
Le nom correct est **Stéphane Flau** (F-L-A-U). Stéphane l'épelle lui-même dans ses messages.
Le composant `Equipe.astro` a déjà `namePlus: 'Flau'` — c'est correct.
→ Dans translations.ts, ne JAMAIS écrire "Flahaut". C'est "Flau" partout.

### ERR-2 — P5 : Ordre de l'équipe
P5 dit "afficher dans l'ordre founders[0], founders[1], team[3 (MEG)], team[0], team[1], team[2]" — ça met Maria AVANT Jean-François Morin et Arnaud Bochurberg. C'est incohérent.

Stéphane dit "Maria Emilia Garcia, il faut la mettre plus haut" = plus haut que Jean Zuccarelli, PAS avant les seniors.

**Ordre correct dans `team[]` :**
```
0: Jean-François Morin (cofondateur EC²R Conseil)
1: Arnaud Bochurberg (associé, expert profilage)
2: Maria Emilia Garcia (facilitatrice — REMONTÉE ici, avant Zuccarelli)
3: Jean Zuccarelli (associé, praticien)
```

Dans `Equipe.astro`, l'array `team` doit être :
```js
const team = [
  { name: 'Jean-François Morin', initials: 'JFM' },
  { name: 'Arnaud Bochurberg',   initials: 'AB'  },
  { name: 'Maria Emilia Garcia', initials: 'MEG' },
  { name: 'Jean Zuccarelli',     initials: 'JZ'  },
];
```

### ERR-3 — P2 : Situation 3 accroche INCORRECTE
P2 écrit pour la situation 3 :
> "Vous devez progresser en résultats — sans braquer ni perdre des éléments clés en route. La situation exige de fédérer+ plus et de faire adhérer+ plus."

La 2e phrase est une INVENTION de la session 1. Stéphane n'a jamais dit ça pour l'accroche E3.
Ce qu'il a dit : "fédérer" et "adhérer" sont des **mots-clés à mettre en exergue** visuellement, pas du texte d'accroche.

**Accroche correcte E3 :**
```
"Vous qui devez exiger+ de résultats collectivement — sans braquer certains ni risquer que l'équipe se démobilise en route."
```

### ERR-4 — P2 : Couleurs des batteries — mauvaise interprétation
P2 dit "E1-E3 : energy-dark (vert foncé / navy) — circuit mobilisation" et "E4-E6 : energy-yellow ou slate-400".

C'est une confusion. Stéphane dit 2 choses distinctes :
1. Les **batteries NE doivent PAS être vertes** (vert = ça marche, or c'est un diagnostic)
2. La **progression de couleur rouge→jaune→beige→vert** concerne l'EXPÉRIENCE GLOBALE du site (scroll progress bar, navigation), PAS les icônes des batteries individuelles

**Correction pour les batteries :** utiliser une couleur neutre/diagnostique uniforme :
- Icône SVG : `text-white/40 group-hover:text-white/70` (neutre, pas de couleur = pas de jugement)
- Ou `text-slate-400 group-hover:text-white` si on préfère plus de contraste

La barre de scroll progress en haut (déjà en place dans Nav.astro avec le gradient rouge→jaune→beige→vert) est DÉJÀ l'implémentation de la progression colorée. Ne pas la dupliquer sur les batteries.

---

## INCOHÉRENCES ENTRE PROMPTS

### INC-1 — "5 ans, 2 jours" : 2 formulations différentes, 2 endroits
- P3 (Chiffres eyebrow) : "5 ans · 2 jours · 1 heure"
- P4 (Musée titre) : "5 ans, 2 jours, 2 mois de terrain"

Ce sont **2 phrases distinctes** voulues par Stéphane pour 2 sections différentes. C'est correct — pas un conflit. Mais la session 2 doit comprendre qu'ils ne doivent PAS être alignés.

### INC-2 — Preuves.astro modifié par P2 ET P3 ET P4
- P2 ajoute le nuage de mots (remplace wall-tags)
- P3 ajoute les cartes LinkedIn (remplace testimonials)
- P4 modifie le musée (timeline couleurs)

Ces 3 touchent des zones différentes de Preuves.astro. Ordre d'application :
1. P3 d'abord (cartes LinkedIn → modifie le bloc testimonials)
2. P2 ensuite (nuage de mots → modifie le bloc wall-tags)
3. P4 en dernier (musée → modifie le bloc musée en bas)

### INC-3 — translations.ts : preuves.wallTags vs preuves.wallWords
P2 crée `preuves.wallWords` (nouveau) pour le nuage de mots.
Les anciens `preuves.wallTags` deviennent obsolètes.
→ Session 2 : supprimer `wallTags`, `wallMore`, `wallNote` des traductions FR et EN, remplacer par `wallWords`.

### INC-4 — Le "Pas le Netflix" barré
Stéphane dit EXPLICITEMENT : "il faudrait que ça apparaisse et que ce soit **barré**". 
P1 ne mentionne pas le style barré. C'est important visuellement.

→ Session 2 : dans Hero.astro, le texte "Pas le Netflix de..." doit avoir un style `line-through` CSS :
```html
<span class="line-through text-white/30">Pas le Netflix de <strong id="netflix-cycling">la formation</strong>.</span>
```
Le Waze reste normal (pas barré). L'effet visuel : on barre l'ancien monde, on affirme le nouveau.

---

## ÉLÉMENTS MANQUANTS (absents des 5 prompts)

### MAN-1 — Stéphane fondateur vs cofondateur
Il y a une ambiguïté dans les messages de Stéphane. Il dit successivement :
- "Stéphane Flau, fondateur de la méthode EC²R"
- puis "cofondateur de la méthode EC²R et du protocole augmenté EC²R"
- puis "cofondateur de EC²R Conseil"

La formulation la plus complète et cohérente pour P5 est :
```
role: "Fondateur de la méthode EC²R — Cofondateur EC²R Conseil"
```
(Fondateur de la méthode, mais cofondateur de la société avec JFM)

Pour JFM : "Cofondateur EC²R Conseil — Associé de la méthode EC²R" (PAS fondateur de la méthode, Stéphane est clair : "associé, pas fondateur").

### MAN-2 — Jean-François Morin : rôle juridique sensible
Stéphane explique que JFM "a démissionné" de son poste de DG, "pour une raison que j'ignore", et que "ça figure toujours sur certains documents".
→ NE PAS mentionner "Directeur Général" ni "Président" pour JFM. P5 le dit déjà mais c'est critique.

### MAN-3 — Distinction juridique méthode EC²R vs EC²R Conseil
Stéphane soulève un **point juridique important** : la méthode EC²R est un asset intellectuel distinct d'EC²R Conseil. Le site représente la méthode, pas la société. Le domaine ec2r-conseil.com pose un problème potentiel.

→ Pour la session 2 : aucune action de code. Mais noter dans un commentaire HTML dans Footer.astro :
```html
<!-- JURIDIQUE : La méthode EC²R est un asset intellectuel distinct d'EC²R Conseil.
     Ce site représente la méthode. L'adresse Neuilly = siège d'EC²R Conseil uniquement.
     Domiciliation méthode à clarifier avec Stéphane. -->
```

### MAN-4 — "Ce site documente sa propre construction" — pas "en quelques heures"
P4 corrige déjà l'abyme.text1 pour retirer "en quelques heures". Mais il faut aussi que NULLE PART sur le site il n'y ait de mention de rapidité de construction.

Stéphane est explicite : "Ils n'ont pas besoin de savoir combien de temps on a mis. Il faut qu'ils pensent qu'on a mis six mois. L'important c'est la puissance de l'échange avec l'IA, pas la vitesse."

→ Session 2 : faire un grep sur "heures" et "hours" dans translations.ts. Si trouvé, remplacer par une formulation neutre.

### MAN-5 — Le formulaire Contact : pré-remplissage progressif
Stéphane dit : "dans les onglets Nom, Email, Situation, tu commences à pré-remplir des éléments ou qu'ils apparaissent pour qu'il n'ait plus qu'envie de continuer. Comme s'il y avait un petit clic qui commence à se mettre."

Aucun prompt ne couvre ça. C'est un nice-to-have, pas critique.
→ Session 2 : dans Contact.astro, ajouter un attribut `placeholder` animé sur les champs :
```css
input::placeholder { animation: subtlePulse 2s ease-in-out infinite; }
@keyframes subtlePulse { 0%,100% { opacity: 0.3; } 50% { opacity: 0.6; } }
```
Et un symbole `@` qui apparaît dans le champ email au focus :
```js
emailInput.addEventListener('focus', () => {
  if (!emailInput.value) emailInput.placeholder = '@ votre email';
});
```

### MAN-6 — Option "Nous prescrire" avec explication
Stéphane détaille le parcours de prescription : "si vous voulez nous prescrire ou recommander à quelqu'un, on valorise le fait qu'il se passe quelque chose. Auquel cas, de qui on peut se recommander ? Est-ce que vous voulez qu'on lui envoie le lien vers le site ?"

P5 ajoute une option "Vous voulez nous prescrire / recommander" dans le select, mais il manque le texte explicatif qui apparaît quand on sélectionne cette option.

→ Session 2 : quand l'utilisateur choisit "prescrire/recommander" dans le select, afficher un bloc supplémentaire sous le select :
```html
<div id="referral-details" class="hidden mt-3 p-4 bg-white/5 rounded-lg border border-white/10 space-y-3">
  <p class="text-white/50 text-xs">Vous pensez à quelqu'un pour qui ça résonnerait ?</p>
  <input type="text" name="referral-name" placeholder="Nom de la personne"
         class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm" />
  <input type="email" name="referral-email" placeholder="Son email (optionnel)"
         class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm" />
  <p class="text-white/30 text-xs italic">On valorise chaque mise en relation sérieuse.</p>
</div>
```
Avec un script qui toggle la visibilité quand `intent.value === 'opt1'`.

---

## AJUSTEMENTS DE PRIORISATION

L'ordre d'exécution recommandé par session 1 est : **P5 → P3 → P2 → P1 → P4**.
C'est bon. Mais avec une nuance :

**Ordre révisé : P5 → P3 → P4 → P2 → P1**

Raison : P4 (musée/protocole) est plus simple que P2 (nuage de mots animé) et devrait passer avant. P2 et P1 sont les plus risqués (animations JS complexes) et doivent être en dernier pour ne pas bloquer le build.

**Si le temps manque**, les éléments sacrifiables sont :
- P1 modification C (overlay T0) — nice-to-have, pas critique pour le contenu
- P2 modification C ("Je le vis" interactif) — fonctionnalité avancée, peut venir après
- P2 modification D (nuage de mots animé) — garder les wall-tags statiques actuels et juste mettre à jour les mots, l'animation viendra après
- MAN-5 (placeholder animé) — cosmétique

Les éléments NON sacrifiables :
- Tous les textes/vocabulaire (P3-A, P5-A, P5-B, corrections ERR-1/2/3)
- Le "Pas le Netflix" barré (INC-4)
- Les couleurs batteries neutres (ERR-4)
- L'ordre des membres équipe (ERR-2)
- La suppression de "en quelques heures" (MAN-4)

---

## CHECKLIST FINALE pour Session 2

Après implémentation de tous les lots, vérifier :

- [ ] Le nom "Flau" (pas Flahaut) partout
- [ ] JFM = "Cofondateur EC²R Conseil" (PAS DG, PAS fondateur de la méthode)
- [ ] Stéphane = "Fondateur de la méthode EC²R" + "Cofondateur EC²R Conseil"
- [ ] Maria avant Jean Z. dans l'ordre d'affichage
- [ ] "Pas le Netflix" est visuellement barré (line-through)
- [ ] Batteries E1-E6 en couleur neutre (PAS vert)
- [ ] Aucune mention de "quelques heures" ou de rapidité de construction
- [ ] "La méthode EC²R structure" (PAS "l'IA structure") dans l'abyme
- [ ] cardNo contact = ton doux, pas "Oubliez-nous"
- [ ] Adresse absente du footer (reste dans mentions légales)
- [ ] `npm run build` sans erreur
- [ ] Toggle FR/EN fonctionnel sur toutes les sections modifiées
