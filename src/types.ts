export type Theme = "light" | "dark";

export type LinkItem = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  category: string;
  problem: string;
  description: string;
  features: string[];
  flow: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  role: string;
};

export type SkillGroup = {
  category: string;
  description: string;
  items: string[];
};
