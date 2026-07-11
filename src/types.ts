export type Theme = "light" | "dark";

export type LinkItem = {
  label: string;
  href: string;
  isPlaceholder?: boolean;
};

export type Project = {
  name: string;
  problem: string;
  description: string;
  features: string[];
  technologies: string[];
  screenshotNote: string;
  githubUrl: string;
  demoUrl?: string;
  role: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};
