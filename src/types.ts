export type Theme = "light" | "dark";

export type LinkItem = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  problem: string;
  description: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  role: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};
