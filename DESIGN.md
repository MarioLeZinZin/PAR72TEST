---
name: La Grande Romanie
description: Golf de Châlons-en-Champagne. La maison du links, sur fond de craie.
colors:
  bordeaux: "#8e0021"
  bordeaux-2: "#6d0019"
  sur-bordeaux: "#fbf3f4"
  sur-bordeaux-2: "#e9c3ca"
  vert: "#123f2b"
  vert-2: "#0c2e1f"
  sur-vert: "#f4f7f2"
  sur-vert-2: "#b9cfc1"
  filet-vert: "rgb(244 247 242 / 0.22)"
  vert-vif: "#00793b"
  blanc: "#fbfdfc"
  craie: "#eef3f1"
  craie-2: "#e1e8e5"
  encre: "#14221b"
  encre-2: "#47554d"
  filet: "rgb(20 34 27 / 0.16)"
  filet-fort: "rgb(20 34 27 / 0.42)"
  repere-blanc: "#ffffff"
  repere-jaune: "#f0c93d"
  repere-bleu: "#8dbcec"
  repere-rouge: "#ec7a72"
typography:
  display:
    fontFamily: "'Libre Caslon Display', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif"
    fontSize: "clamp(2.75rem, 1.6rem + 5vw, 5.25rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  display-article:
    fontFamily: "'Libre Caslon Display', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif"
    fontSize: "clamp(2.375rem, 1.5rem + 3.6vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  chiffre:
    fontFamily: "'Libre Caslon Display', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif"
    fontSize: "clamp(3.75rem, 2.4rem + 6vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.02em"
    fontFeature: "'lnum', 'tnum'"
  headline:
    fontFamily: "'Libre Caslon Display', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif"
    fontSize: "clamp(2.125rem, 1.5rem + 2.6vw, 3.375rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Libre Caslon Display', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif"
    fontSize: "clamp(1.5rem, 1.3rem + 0.8vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title-sm:
    fontFamily: "'Libre Caslon Display', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif"
    fontSize: "1.625rem"
    fontWeight: 400
    lineHeight: 1.15
  mot-symbole:
    fontFamily: "'Libre Caslon Display', 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    letterSpacing: "0.2em"
  body:
    fontFamily: "'Hanken Grotesk Variable', 'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.0625rem, 0.98rem + 0.3vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Hanken Grotesk Variable', 'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.01em"
  legende:
    fontFamily: "'Hanken Grotesk Variable', 'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
rounded:
  none: "0"
  pastille: "50%"
spacing:
  marge: "clamp(1.25rem, 4.5vw, 4.5rem)"
  souffle: "clamp(5.5rem, 11vw, 10.5rem)"
  gouttiere: "clamp(1.5rem, 2.5vw, 2.5rem)"
  large: "84rem"
  entete: "4.75rem"
components:
  bouton-reserver:
    backgroundColor: "{colors.bordeaux}"
    textColor: "{colors.sur-bordeaux}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1.75rem"
    height: "3.25rem"
  bouton-reserver-hover:
    backgroundColor: "{colors.bordeaux-2}"
    textColor: "{colors.sur-bordeaux}"
  bouton-reserver-entete:
    backgroundColor: "{colors.bordeaux}"
    textColor: "{colors.sur-bordeaux}"
    rounded: "{rounded.none}"
    padding: "0.55rem 1.25rem"
    height: "2.75rem"
  barre-mobile:
    backgroundColor: "{colors.bordeaux}"
    textColor: "{colors.sur-bordeaux}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1rem"
    height: "3.5rem"
  barre-mobile-active:
    backgroundColor: "{colors.bordeaux-2}"
  lien:
    textColor: "{colors.encre}"
    typography: "{typography.label}"
    padding: "0.45rem 0"
  repere:
    textColor: "{colors.sur-vert}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.5rem 1.1rem 0.5rem 0.9rem"
    height: "2.875rem"
  repere-selectionne:
    backgroundColor: "{colors.sur-vert}"
    textColor: "{colors.vert-2}"
  section-vert:
    backgroundColor: "{colors.vert}"
    textColor: "{colors.sur-vert}"
  section-craie:
    backgroundColor: "{colors.craie}"
    textColor: "{colors.encre}"
  section-reserver:
    backgroundColor: "{colors.bordeaux}"
    textColor: "{colors.sur-bordeaux}"
  pied:
    backgroundColor: "{colors.vert-2}"
    textColor: "{colors.sur-vert}"
  cadre:
    backgroundColor: "{colors.craie-2}"
    rounded: "{rounded.none}"
  passe-partout:
    backgroundColor: "{colors.craie}"
    rounded: "{rounded.none}"
  passe-partout-texte:
    backgroundColor: "{colors.vert}"
    textColor: "{colors.sur-vert}"
---

# Design System: La Grande Romanie

## Overview

**Creative North Star: "La maison du links"**

Le parcours se présente comme une maison de luxe présente ses chambres : peu de mots, beaucoup d'air, des photographies accrochées comme des tableaux, et la carte de score pour pièce maîtresse. La page est claire et calme, un blanc de craie légèrement froid sur lequel une encre vert-noir écrit en Caslon fin. Deux couleurs seulement rompent ce calme, celles du blason : le vert anglais, posé en aplats pleins, et le bordeaux, qui ne sert qu'à réserver.

La densité est basse. Chaque section respire d'un grand souffle vertical, le texte tient dans une colonne étroite, et la structure vient de filets d'un pixel repris de la grille d'une carte de score plutôt que de boîtes, de cartes ou d'ombres. Tout est à angles vifs. Le mouvement est lent et amorti, une seule courbe pour tout le site, et il s'efface entièrement quand le visiteur demande un mouvement réduit.

Ce système refuse la page de golf habituelle : la photo plein écran assombrie sous un titre, les pictogrammes en grille, le vert gazon partout.

**Key Characteristics:**
- Fond de craie froid, encre vert-noir, deux couleurs de blason aux rôles séparés.
- Libre Caslon Display pour les titres et les grands chiffres, Hanken Grotesk pour tout le reste, auto-hébergées.
- Photographies toujours cadrées, à proportions fixes, jamais en fond.
- Filets d'un pixel tirés de la carte de score ; aucun arrondi, aucune carte à bordure.
- Réserver à un geste sur chaque page : barre d'en-tête, barre fixe sur téléphone, section bordeaux en fin de page.
- La carte de score à drapeaux, pièce signature.

## Colors

Une palette de club anglais sur papier de craie : neutres froids tirant sur le vert, un vert profond pour les grandes surfaces, un bordeaux pour la seule action.

### Primary
- **Bordeaux du blason** (`bordeaux`) : fond du bouton « Réserver un départ », de la barre de réservation fixe sur téléphone et de la section de réservation qui clôt chaque page ; couleur du lien de réservation dans le menu plein écran. Marque aussi le focus clavier, la sélection de texte et le curseur de saisie.
- **Bordeaux profond** (`bordeaux-2`) : état survolé et pressé de ces mêmes éléments.
- **Rose de craie** (`sur-bordeaux`) et **Rose passé** (`sur-bordeaux-2`) : texte principal et texte secondaire posés sur bordeaux.

### Secondary
- **Vert anglais** (`vert`) : aplat de la section qui porte la carte de score, et fond de la vignette d'une actualité sans affiche.
- **Vert de nuit** (`vert-2`) : fond du pied de page ; texte du repère sélectionné.
- **Craie sur vert** (`sur-vert`) et **Sauge claire** (`sur-vert-2`) : texte principal et texte secondaire sur les verts. `sur-vert` trace aussi les mâts des drapeaux et le filet fort de la carte.
- **Filet sur vert** (`filet-vert`) : filets de la carte de score et du pied de page.

### Tertiary
- **Vert vif du blason** (`vert-vif`) : petites marques seulement. Rubrique courante dans le menu plein écran, type d'une compétition, points médians de la ligne de repères, puces des listes d'article.

### Neutral
- **Blanc de craie** (`blanc`) : fond de page, voile de la barre d'en-tête, liseré autour de la petite photo accrochée.
- **Craie** (`craie`) : section alternée, passe-partout des affiches.
- **Craie ombrée** (`craie-2`) : fond d'attente des cadres photo, passe-partout survolé.
- **Encre vert-noir** (`encre`) : texte et titres.
- **Encre adoucie** (`encre-2`) : second paragraphe, légendes, dates, en-têtes de tableau.
- **Filet** (`filet`) et **Filet fort** (`filet-fort`) : l'encre à 16 % sépare les rangs ; à 42 % elle ouvre une liste ou ferme un en-tête de tableau.
- **Fanions** (`repere-blanc`, `repere-jaune`, `repere-bleu`, `repere-rouge`) : couleurs des quatre repères de départ, éclaircies pour se lire sur le vert. Uniquement en pastille de repère et en fanion de drapeau.

### Named Rules
**La règle de la presse.** Le bordeaux n'habille que ce qui se presse pour réserver, plus le focus clavier, la sélection et le curseur. Jamais un titre, un filet ou un décor en bordeaux.

**La règle de l'aplat.** Le vert anglais se pose en surface pleine : une section entière, bord à bord, ou une vignette entière. Jamais en dégradé, en filet ni en couleur de texte. Les petites marques vertes sont en vert vif.

**La règle de la craie.** Les fonds clairs sont froids, teintés vers le vert. Jamais crème, jamais ivoire, jamais blanc pur en fond de page.

## Typography

**Display Font:** Libre Caslon Display (repli : Iowan Old Style, Palatino, Georgia)
**Body Font:** Hanken Grotesk Variable (repli : system-ui)

Les deux familles sont auto-hébergées (paquets `@fontsource/libre-caslon-display` et `@fontsource-variable/hanken-grotesk`, importés dans le gabarit de base). Aucun appel à un service de polices tiers.

**Character:** Un Caslon de titrage, fin et contrasté, toujours en graisse 400, face à une grotesque humaniste discrète. Le serif parle peu et grand ; la grotesque renseigne.

### Hierarchy
- **Display** (`display`) : le titre de page, un par page, centré sur l'accueil et les pages de rubrique. Variante `display-article`, un cran plus petite, pour le titre d'un article et des pages de texte.
- **Chiffre** (`chiffre`) : le total en mètres de la carte de score. Le jour d'une compétition reprend le même Caslon en chiffres alignés, plus petit.
- **Headline** (`headline`) : titre de section. Équilibré sur ses lignes (`text-wrap: balance`).
- **Title** (`title`) : nom d'une compétition, titre d'une actualité. `title-sm` pour les légendes de tableau, les termes de liste et le téléphone du pied de page.
- **Mot-symbole** (`mot-symbole`) : « La Grande Romanie » en Caslon capitales très espacées (0.2em dans la barre, jusqu'à 0.3em à l'ouverture de l'accueil), toujours à côté ou sous le blason.
- **Body** (`body`) : texte courant, colonne de 34rem (40rem dans un article). Le second paragraphe d'un bloc passe en encre adoucie.
- **Label** (`label`) : liens, boutons, navigation, repères. Graisse 500, jamais en capitales.
- **Légende** (`legende`) : légendes de photo, dates, en-têtes de tableau, notes.

### Named Rules
**La règle des deux voix.** Caslon en 400 pour les titres, les grands chiffres et le mot-symbole ; Hanken pour tout le reste, en 400, 500 ou 600. Aucun gras de titre, aucune italique d'effet.

**La règle des capitales.** Seul le mot-symbole est en capitales espacées. Aucun libellé, bouton ou intertitre en majuscules.

**La règle des chiffres alignés.** Toute donnée chiffrée (distances, tarifs, téléphone, dates) est en chiffres alignés tabulaires.

## Layout

Un conteneur centré de 84rem au plus (`large`), avec une marge latérale fluide (`marge`). Les sections s'empilent avec un grand souffle vertical (`souffle`) ; l'alternance blanc de craie, craie, vert et bordeaux fait la séparation, sans filet entre sections.

Le motif de base est le duo : douze colonnes à partir de 56rem, texte sur cinq colonnes, image sur six, une colonne vide entre les deux ; il s'inverse d'une section à l'autre. Les grilles asymétriques dominent ailleurs (5/6, 4/7, 5/7, 3/8) : une colonne étroite de titre à gauche, les données à droite. Les pages intérieures s'ouvrent sur un titre centré suivi d'une phrase en encre adoucie.

L'accrochage est volontairement décalé : deux photos qui se chevauchent sur l'accueil, et dans les grilles d'actualités la colonne du milieu descend de 4.5rem plutôt que de s'aligner.

Seuils principaux : 48rem (le bouton de la barre remplace la barre fixe du téléphone), 56rem (les duos passent côte à côte), 64rem (les dix-huit trous tiennent sur une ligne ; actualités sur trois colonnes), 72rem (les rubriques s'affichent dans la barre, le menu plein écran disparaît). Sur téléphone, rien ne déborde : la carte de score se plie en deux rangs de neuf, les tableaux de tarifs deviennent des blocs libellé à gauche, prix à droite, et la carte complète ne garde que la colonne du repère choisi.

L'en-tête est collant, haut de 4.75rem (`entete`), sur un voile de blanc de craie légèrement flouté ; un filet apparaît sous lui dès que la page défile.

## Elevation & Depth

Le système est plat. La profondeur vient des aplats de couleur qui se succèdent et des filets, pas d'ombres portées sur des surfaces. Deux exceptions seulement, toutes deux pour un objet posé sur la page.

### Shadow Vocabulary
- **Affiche posée** (`box-shadow: 0 1.5rem 3rem -1.5rem rgb(20 34 27 / 0.45)`, et `0 1.25rem 2.5rem -1.25rem` dans les vignettes) : sous l'affiche d'une actualité ou d'un évènement présentée dans son passe-partout de craie.
- **Bouton à cheval** (`box-shadow: 0 1rem 2.25rem -1rem rgb(20 34 27 / 0.55)`) : sous le bouton de réservation de l'ouverture, qui flotte au-dessus de la photo puis se pose sur son bord bas.
- **Liseré** (`box-shadow: 0 0 0 0.625rem` en blanc de craie) : marge blanche autour de la petite photo qui chevauche la grande.

### Named Rules
**La règle de l'objet posé.** Une ombre n'existe que sous un objet posé sur la page : une affiche, le bouton à cheval sur la photo. Elle est diffuse, teintée d'encre et décalée vers le bas. Sections, listes, tableaux et boutons courants n'en portent pas.

## Shapes

Tout est rectangulaire, à angles vifs (rayon 0) : boutons, repères, cadres photo, passe-partout, sections. Le seul cercle du système est la pastille de couleur d'un repère de départ ; le seul triangle, le fanion d'un drapeau.

Les contours sont remplacés par des filets d'un pixel, horizontaux, qui tiennent les listes comme les rangs d'une carte de score : un filet fort ouvre la liste, un filet fin ferme chaque rang. Aucun quadrillage décoratif derrière les photos : le client l'a écarté, trop proche de la référence Cheval Blanc.

### Named Rules
**La règle de l'angle vif.** Aucun arrondi, sur aucun élément. Le cercle est réservé aux pastilles de repère.

**La règle du filet.** La structure se trace au filet d'un pixel, jamais avec une boîte à bordure ni une carte. Un filet fort pour ouvrir, un filet fin par rang.

## Components

Partout, une seule courbe de mouvement : `--sortie`, `cubic-bezier(0.16, 1, 0.3, 1)`, une décélération longue. Changements de couleur en 0.35s, soulignés et flèches en 0.5s, drapeaux en 1.1s. Sous `prefers-reduced-motion: reduce`, toutes les transitions et animations sont ramenées à l'instantané, le défilement doux est coupé, le compteur de la carte affiche sa valeur d'un coup et les dévoilements au défilement ne sont pas appliqués.

### Buttons
Un seul bouton, et il réserve.
- **Shape:** rectangle à angles vifs (rayon 0), hauteur minimale 3.25rem, bordure d'un pixel de la couleur du fond.
- **Primary:** fond bordeaux, texte rose de craie, libellé Hanken 500 suivi d'une flèche sortante au trait (1.25 d'épaisseur). Version compacte dans la barre d'en-tête (2.75rem de haut).
- **Hover / Focus:** le fond passe au bordeaux profond en 0.35s ; pressé, le bouton se contracte à 0.98. Focus : contour bordeaux de 2px décalé de 4px, de la couleur du texte sur les aplats sombres.
- **Barre fixe (téléphone):** sous 48rem, le même geste devient une barre bordeaux pleine largeur collée au bas de l'écran, 3.5rem plus la zone sûre.

### Liens
- **Lien souligné:** libellé Hanken 500 et flèche, souligné d'un filet d'un pixel de la couleur du texte. Au survol le filet se retire vers la droite et la flèche avance de 0.3em. C'est l'action secondaire de chaque section.
- **Liens de pied de page et titres d'actualité:** l'inverse, un filet qui se tire de gauche à droite au survol.

### Cadres photo
- **Corner Style:** angles vifs, image rognée dans son cadre.
- **Proportions:** fixes. Paysage 3/2, portrait 2/3, large 16/9 ; 4/5 pour la photo d'ouverture sur téléphone.
- **Background:** craie ombrée en attente de l'image.
- **Traitement:** saturation légèrement retenue (0.94) et contraste à 1.03.
- **Mouvement:** à l'entrée dans la fenêtre, le cadre se découvre et l'image se desserre de 1.12 à 1, pilotés par le défilement là où le navigateur le permet.
- **Légende:** sous le cadre, en légende, encre adoucie.

### Passe-partout
Les affiches du club (actualités, évènements) ne sont jamais rognées : elles sont montrées entières, centrées dans un passe-partout de craie au format 4/5, avec l'ombre d'affiche posée. Au survol, le passe-partout fonce d'un ton et l'affiche grossit à 1.03. Une actualité sans affiche reçoit une vignette vert anglais avec son titre en Caslon, calé en bas.

### Listes au filet
Compétitions, horaires, prestations : des rangs séparés de filets, sans fond. Une compétition se lit en trois colonnes à partir de 44rem : le jour en grand chiffre Caslon avec mois et jour de semaine, le titre et ses précisions, le type en vert vif à droite.

### Tableaux
Chiffres tabulaires alignés à droite, première colonne à gauche, en-têtes en légende sur filet fort, légende de tableau en Caslon. Sur fond vert, les filets passent en `filet-vert` et la colonne du repère choisi ressort en clair sur un voile de 8 %.

### Navigation
- **Barre:** rubriques à gauche, blason et mot-symbole au centre, téléphone et bouton de réservation à droite. Les rubriques sont en Hanken 400 ; la rubrique courante et la rubrique survolée sont soulignées d'un filet qui se tire.
- **Accueil:** en haut de page, le blason et le bouton de la barre restent masqués tant que le grand blason de l'ouverture est visible ; ils apparaissent passé 260px de défilement.
- **Menu plein écran (sous 72rem):** deux traits qui se croisent, libellé « Menu » puis « Fermer ». Les rubriques s'affichent en Caslon, grandes, séparées de filets, et montent l'une après l'autre ; la rubrique courante est en vert vif, le lien de réservation en bordeaux.

### Section de réservation
Chaque page se termine par un aplat bordeaux : titre à gauche, deux portes à droite (visiteurs, membres), chacune un rang entre deux filets clairs avec le nom en Caslon et la destination en libellé. Au survol, le nom glisse de 0.75rem et la flèche sort en diagonale.

### Pied de page
Aplat vert de nuit. Blason et mot-symbole, puis un bloc de quatre colonnes réglé serré entre deux filets, comme le générique au bas d'une affiche. Le téléphone y est en Caslon.

### La carte de score à drapeaux (pièce signature)
Sur aplat vert anglais. À gauche un titre et deux lignes ; à droite le sélecteur de repères et le total en mètres en grand chiffre Caslon. Dessous, dix-huit colonnes, une par trou : un mât d'un pixel dont la hauteur est la distance du trou, coiffé d'un fanion triangulaire, puis trois rangs au filet (trou en Caslon, par, mètres). L'aller et le retour sont séparés d'un blanc ; à partir de 64rem tout tient sur une ligne avec les intitulés de rang à gauche, en dessous la carte se plie en deux rangs de neuf.
- **Sélecteur de repères:** quatre cases rectangulaires au filet, chacune précédée d'une pastille ronde à la couleur du repère. La case choisie se remplit de craie sur vert, texte vert de nuit. Ce sont des boutons radio natifs.
- **Changement de repère:** les mâts changent de hauteur en 1.1s, décalés de 28ms d'un trou au suivant, les fanions prennent la couleur du repère, le total décompte en 0.9s, et la carte complète de la page Parcours suit le même repère.
- **Entrée:** les drapeaux sont couchés et se dressent quand la carte entre dans la fenêtre.
- **Survol:** le trou survolé reste plein, les autres tombent à 40 % d'opacité.
- **Lecture d'écran:** chaque trou se lit « Trou n, par p, m mètres » ; le total est annoncé à chaque changement.

## Do's and Don'ts

### Do:
- **Do** réserver le bordeaux à ce qui mène à la réservation, et garder cette action à un geste sur chaque page et chaque largeur d'écran.
- **Do** poser le vert anglais en section entière, bord à bord, avec les textes en `sur-vert` et `sur-vert-2`.
- **Do** cadrer chaque photographie dans une proportion fixe et lui donner un texte alternatif qui décrit ce qu'elle montre.
- **Do** montrer les affiches entières dans un passe-partout de craie.
- **Do** structurer listes et tableaux au filet d'un pixel : filet fort pour ouvrir, filet fin par rang.
- **Do** composer les titres en Libre Caslon Display 400 et tout le reste en Hanken Grotesk.
- **Do** animer avec `--sortie` et prévoir l'état sans mouvement.
- **Do** mettre toute donnée chiffrée en chiffres alignés tabulaires.

### Don't:
- **Don't** utiliser le bordeaux pour un titre, un filet, une puce ou un décor.
- **Don't** mettre une photographie en fond de section ni poser un titre ou un paragraphe dessus.
- **Don't** arrondir un angle : ni bouton en pilule, ni carte arrondie, ni image à coins doux.
- **Don't** réchauffer les fonds vers le crème ou l'ivoire.
- **Don't** étaler le vert gazon : le vert vif reste une petite marque.
- **Don't** enfermer un contenu dans une carte à bordure ou à ombre ; l'ombre est réservée à l'objet posé.
- **Don't** composer un libellé en capitales espacées ; seul le mot-symbole l'est.
- **Don't** ajouter une grille de pictogrammes ni une icône autre que la flèche au trait.
- **Don't** rogner une affiche du club.
