# Portfolio — David Mwehu Munde

Portfolio personnel de [David Mwehu Munde](https://dave-mwehu.vercel.app/), étudiant en génie logiciel orienté développement mobile, backend, systèmes embarqués et IoT.

## Direction

Le site présente quatre projets réels à travers une lecture simple : le problème, la solution, la contribution, le périmètre fonctionnel et les choix techniques.

- Tailleur Pro
- IntelliEditor
- Système de supervision intelligente du réseau électrique basse tension
- Day of Success

## Expérience proposée

- Interface responsive du mobile au grand écran
- Thèmes clair et sombre persistants
- Navigation accessible avec menu mobile
- Badge de profil LinkedIn officiel avec solution de repli
- Micro-interactions respectant `prefers-reduced-motion`
- Métadonnées Open Graph, favicon et aperçu social dédiés
- Police variable Manrope servie localement

## Stack

- React 19
- Vite 7
- TypeScript
- CSS natif avec variables de thème et composants visuels réutilisables
- Déploiement Vercel

## Développement local

```bash
npm install
npm run dev
```

## Vérifications

```bash
npm run check
npm run build
npm run preview
```

## Structure

```text
src/
|-- components/       # Sections, navigation et composants visuels
|-- data/             # Profil, compétences et projets
|-- hooks/            # Gestion du thème clair/sombre
|-- App.tsx           # Composition de la page
|-- main.tsx          # Point d'entrée React
`-- styles.css        # Système visuel et responsive
```

Les informations personnelles et les technologies affichées sont centralisées dans `src/data/profile.ts`. Les projets sont décrits dans `src/data/projects.ts`.

## Déploiement Vercel

Le projet utilise la configuration Vite standard :

- Build Command : `npm run build`
- Output Directory : `dist`
- Node.js : `22.x`

Aucune variable d'environnement n'est requise.

## Sécurité

- Aucun secret ni clé API n'est stocké dans le dépôt.
- Aucun formulaire ne transmet de données.
- Les liens externes ouverts dans un nouvel onglet utilisent `noreferrer`.
