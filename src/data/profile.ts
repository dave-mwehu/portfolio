import type { LinkItem, SkillGroup } from "../types";

export const profile = {
  name: "David Mwehu Munde",
  title: "Software Engineering Student",
  subtitle: "Full-Stack Developer | Mobile | Embedded Systems | IoT",
  email: "email-temporaire@example.com",
  github: "https://github.com/dave-mwehu",
  linkedin: "https://www.linkedin.com/in/linkedin-temporaire-david-mwehu",
  cvUrl: "/cv-david-mwehu-temporaire.pdf",
};

export const socialLinks: LinkItem[] = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn temporaire", href: profile.linkedin, isPlaceholder: true },
  { label: "E-mail temporaire", href: `mailto:${profile.email}`, isPlaceholder: true },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Langages",
    items: ["TypeScript", "JavaScript", "Kotlin", "Python", "C", "SQL"],
  },
  {
    category: "Frontend et mobile",
    items: ["React", "Vite", "HTML", "CSS", "Android", "Jetpack Compose", "Material Design"],
  },
  {
    category: "Backend et bases de donnees",
    items: ["FastAPI", "Supabase", "PostgreSQL", "SQLite", "REST API", "WebSocket"],
  },
  {
    category: "Systemes embarques et IoT",
    items: ["Arduino UNO", "MQTT", "Communication serie", "Capteurs", "Relais", "Prototypage IoT"],
  },
  {
    category: "Outils de developpement",
    items: ["Git", "GitHub", "CMake", "Gradle", "Netlify", "Vercel", "Android Studio"],
  },
];
