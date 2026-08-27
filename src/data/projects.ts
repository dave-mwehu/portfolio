import type { Project } from "../types";

export const projects: Project[] = [
  {
    name: "Tailleur_Pro",
    shortName: "Tailleur Pro",
    category: "Application Android",
    problem:
      "Les ateliers de couture suivent souvent commandes, mesures et délais dans des cahiers ou des messages dispersés.",
    description:
      "Une application Android native qui centralise le cycle d'une commande : mesures client, statut de production, échéance et références visuelles.",
    features: [
      "Création, consultation, modification et suppression de commandes.",
      "Gestion structurée des mesures client.",
      "Filtrage par statut et niveau d'urgence.",
      "Ajout de photos via Supabase Storage.",
      "Navigation entre liste, détail, création et édition.",
    ],
    flow: ["Android", "MVVM", "Supabase"],
    technologies: ["Kotlin", "Jetpack Compose", "Material Design 3", "MVVM", "StateFlow", "Retrofit", "Supabase", "Coil"],
    githubUrl: "https://github.com/dave-mwehu/Tailleur_Pro",
    role: "Développeur principal du prototype Android et de l'intégration Supabase.",
  },
  {
    name: "IntelliEditor",
    shortName: "IntelliEditor",
    category: "Éditeur intelligent hors ligne",
    problem:
      "Les fonctions d'assistance des éditeurs modernes dépendent souvent du cloud, ce qui limite l'usage hors ligne et la maîtrise locale.",
    description:
      "Un éditeur de texte intelligent développé en C, avec une architecture modulaire pour l'édition, le NLP, les règles et l'intégration d'un LLM local via llama.cpp.",
    features: [
      "Cœur d'édition avec buffer de texte.",
      "Undo/redo et export.",
      "Module NLP avec tokenisation et intégration Hunspell.",
      "Moteur de règles séparé du cœur éditeur.",
      "Interface LLM locale via llama.cpp.",
    ],
    flow: ["Éditeur C", "NLP", "LLM local"],
    technologies: ["C11", "CMake", "Win32", "Scintilla", "Hunspell", "llama.cpp", "Threads"],
    githubUrl: "https://github.com/dave-mwehu/IntelliEditor",
    role: "Membre DEV-C, avec une contribution orientée IA, NLP et intégration locale.",
  },
  {
    name: "Supervision intelligente du réseau BT",
    shortName: "Supervision BT",
    category: "Système IoT & supervision",
    problem:
      "La supervision basse tension manque de visibilité en temps réel sur les mesures, anomalies et actions de délestage.",
    description:
      "Un prototype de supervision qui relie une maquette Arduino, une passerelle MQTT, une API FastAPI et un dashboard React avec mesures en temps réel.",
    features: [
      "Lecture d'une tension simulée sur Arduino UNO.",
      "Commande de relais pour délestage et rétablissement.",
      "Passerelle série vers MQTT.",
      "API FastAPI avec stockage SQLite.",
      "Dashboard React avec carte, graphiques, journal SCADA et WebSocket.",
      "Mode matériel et mode simulation.",
    ],
    flow: ["Arduino", "MQTT", "FastAPI", "Dashboard"],
    technologies: ["Arduino UNO", "Python", "FastAPI", "MQTT", "SQLite", "WebSocket", "React", "Chart.js", "Leaflet"],
    githubUrl: "https://github.com/Chriskam22/syst-me-de-supervision-intelligente-du-r-seau-lectrique-basse-tension",
    role: "Contributeur sur un prototype académique IoT de supervision et de démonstration.",
  },
  {
    name: "Day_of_succes",
    shortName: "Day of Success",
    category: "Application web de gestion",
    problem:
      "Le suivi de cotisations hebdomadaires devient difficile quand dépôts, dettes, cycles et notifications sont dispersés.",
    description:
      "Une application web connectée à Supabase pour gérer les membres, les dépôts, les cycles hebdomadaires, les dettes et les notifications d'un groupe.",
    features: [
      "Authentification des administrateurs et membres.",
      "Gestion des membres, profils et rôles.",
      "Configuration du montant hebdomadaire et de la date de début.",
      "Enregistrement des dépôts et suivi des cycles.",
      "Ajustements de dettes, notifications et statistiques.",
      "Scripts de migration Firebase vers Supabase.",
    ],
    flow: ["Interface web", "Supabase Auth", "PostgreSQL"],
    technologies: ["HTML", "CSS", "JavaScript", "Supabase Auth", "Supabase PostgreSQL", "Netlify", "Node.js"],
    githubUrl: "https://github.com/dave-mwehu/Day_of_succes",
    role: "Développeur de l'application de gestion et de la migration vers Supabase.",
  },
];
