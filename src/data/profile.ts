import type { LinkItem, SkillGroup } from "../types";

export const profile = {
  name: "David Mwehu Munde",
  title: "Software Engineering Student",
  statement: "Je conçois des logiciels utiles, du mobile aux systèmes connectés.",
  subtitle:
    "Étudiant en génie logiciel, je relie développement mobile, backend, systèmes embarqués et IoT pour transformer des besoins concrets en produits maintenables.",
  email: null,
  github: "https://github.com/dave-mwehu",
  linkedin: "https://www.linkedin.com/in/dave-munde/",
  linkedinVanity: "dave-munde-4166442aa",
  cvUrl: "/cv-david-mwehu-munde.pdf",
};

export const socialLinks: LinkItem[] = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Langages",
    description: "Du produit au système, avec le niveau d'abstraction adapté au problème.",
    items: ["TypeScript", "JavaScript", "Kotlin", "Python", "C", "SQL"],
  },
  {
    category: "Interfaces & mobile",
    description: "Des expériences lisibles et structurées pour le web comme pour Android.",
    items: ["React", "Vite", "HTML", "CSS", "Android", "Jetpack Compose", "Material Design"],
  },
  {
    category: "Backend & données",
    description: "Des API et des modèles de données pensés pour rester simples à faire évoluer.",
    items: ["FastAPI", "Supabase", "PostgreSQL", "SQLite", "REST API", "WebSocket"],
  },
  {
    category: "Embarqué & IoT",
    description: "Faire circuler l'information entre capteurs, actionneurs et interfaces métier.",
    items: ["Arduino UNO", "MQTT", "Communication série", "Capteurs", "Relais", "Prototypage IoT"],
  },
  {
    category: "Outils d'ingénierie",
    description: "Un environnement de travail reproductible, versionné et orienté livraison.",
    items: ["Git", "GitHub", "CMake", "Gradle", "Netlify", "Vercel", "Android Studio"],
  },
];
