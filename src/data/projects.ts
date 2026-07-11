import type { Project } from "../types";

export const projects: Project[] = [
  {
    name: "Tailleur_Pro",
    problem:
      "Les ateliers de couture suivent souvent les commandes, mesures et delais dans des cahiers ou messages disperses.",
    description:
      "Application Android native pour centraliser les commandes d'un atelier, suivre les mesures client, les statuts de production, les delais et les photos de modele ou tissu.",
    features: [
      "Creation, consultation, modification et suppression de commandes.",
      "Gestion des mesures client : epaules, poitrine, taille, hanches, manches et longueur.",
      "Filtrage par statut et urgence.",
      "Upload de photo vers Supabase Storage.",
      "Navigation entre liste, detail, creation et edition.",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Material Design 3", "MVVM", "StateFlow", "Retrofit", "Supabase", "Coil"],
    githubUrl: "https://github.com/dave-mwehu/Tailleur_Pro",
    role: "Developpeur principal du prototype Android et de l'integration Supabase.",
  },
  {
    name: "IntelliEditor",
    problem:
      "Les fonctions d'assistance dans les editeurs modernes dependent souvent du cloud, ce qui limite l'usage hors ligne et la maitrise locale.",
    description:
      "Editeur de texte intelligent hors ligne developpe en C, avec une architecture modulaire pour l'edition, le NLP, les regles et une integration LLM locale via llama.cpp.",
    features: [
      "Coeur d'edition avec buffer de texte.",
      "Undo/redo et export.",
      "Module NLP avec tokenisation et integration Hunspell.",
      "Moteur de regles separe du coeur editeur.",
      "Interface LLM locale via llama.cpp.",
    ],
    technologies: ["C11", "CMake", "Win32", "Scintilla", "Hunspell", "llama.cpp", "Threads"],
    githubUrl: "https://github.com/dave-mwehu/IntelliEditor",
    role: "Membre DEV-C, contribution orientee IA, NLP et integration locale.",
  },
  {
    name: "Supervision intelligente du reseau BT",
    problem:
      "La supervision basse tension manque de visibilite temps reel sur les mesures, anomalies et actions de delestage.",
    description:
      "Prototype de supervision basse tension combinant une maquette Arduino, une gateway MQTT, une API FastAPI et un dashboard React avec carte, journal SCADA et mesures en temps reel.",
    features: [
      "Lecture d'une tension simulee par potentiometre sur Arduino UNO.",
      "Commande de relais pour delestage et retablissement.",
      "Gateway serie vers MQTT.",
      "API FastAPI avec stockage SQLite.",
      "Dashboard React avec carte, graphiques, journal SCADA et WebSocket.",
      "Mode demo materiel et mode simulation.",
    ],
    technologies: ["Arduino UNO", "Python", "FastAPI", "MQTT", "SQLite", "WebSocket", "React", "Chart.js", "Leaflet"],
    githubUrl: "https://github.com/Chriskam22/syst-me-de-supervision-intelligente-du-r-seau-lectrique-basse-tension",
    role: "Contributeur sur un prototype academique IoT de supervision et demonstration.",
  },
  {
    name: "Day_of_succes",
    problem:
      "Le suivi de cotisations hebdomadaires devient difficile quand les depots, dettes, cycles et notifications sont disperses.",
    description:
      "Application web statique connectee a Supabase pour gerer les membres, les depots, les cycles hebdomadaires, les dettes et les notifications d'un groupe.",
    features: [
      "Authentification administrateurs et membres.",
      "Gestion des membres, profils et roles.",
      "Configuration du montant hebdomadaire et de la date de debut.",
      "Enregistrement des depots et suivi des cycles.",
      "Ajustements de dettes, notifications et statistiques publiques.",
      "Scripts de migration Firebase vers Supabase.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Supabase Auth", "Supabase PostgreSQL", "Netlify", "Node.js"],
    githubUrl: "https://github.com/dave-mwehu/Day_of_succes",
    role: "Developpeur de l'application de gestion et de la migration vers Supabase.",
  },
];
