# Portfolio - David Mwehu Munde

Portfolio professionnel de David Mwehu Munde, etudiant en genie logiciel, avec une ouverture vers le mobile, les systemes embarques, l'IoT et l'electromecanique.

## Objectif

Presenter un profil developpeur sobre et credible, avec une selection de projets reels :

- Tailleur_Pro
- IntelliEditor
- Systeme de supervision intelligente du reseau electrique basse tension
- Day_of_succes

## Stack

- React
- Vite
- TypeScript
- CSS modulaire par composants et variables de theme
- Compatible Vercel

## Installation

```bash
npm install
```

## Developpement

```bash
npm run dev
```

## Build de production

```bash
npm run build
```

## Apercu du build

```bash
npm run preview
```

## Structure

```text
src/
|-- components/       # Sections et composants reutilisables
|-- data/             # Donnees du profil, competences et projets
|-- hooks/            # Theme clair/sombre
|-- App.tsx           # Composition de la page
|-- main.tsx          # Point d'entree React
`-- styles.css        # Design responsive et variables de theme
```

## Deploiement Vercel

1. Importer le depot GitHub dans Vercel.
2. Garder les parametres par defaut Vite :
   - Framework Preset : `Vite`
   - Build Command : `npm run build`
   - Output Directory : `dist`
3. Lancer le deploiement.

Aucune variable d'environnement n'est requise pour cette premiere version.

## Informations a remplacer avant publication finale

- URL LinkedIn definitive.
- Adresse e-mail professionnelle definitive.
- Fichier CV PDF a placer dans `public/`.
- URL publique finale du site pour `og:url` dans `index.html`.
- Image Open Graph finale si souhaitee.
- Remplacer ou valider le portrait `public/david-mwehu-portrait.jpg`.
- Captures d'ecran des projets :
  - Tailleur_Pro : liste, formulaire, detail, filtres.
  - IntelliEditor : fenetre principale, suggestions, corrections.
  - Supervision BT : dashboard, carte, journal SCADA, maquette Arduino.
  - Day_of_succes : tableau de bord, membres, vue membre.
- Dates et noms exacts des formations.
- Liens de demonstration si des deployments publics existent.

## Notes de securite

- Aucun secret ni cle API n'est stocke dans le depot.
- Les liens temporaires sont marques dans `src/data/profile.ts`.
- Le formulaire de contact utilise `mailto:` et ne depend d'aucun backend.
