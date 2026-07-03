export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  impact: string[];
  githubUrl?: string;
  liveUrl?: string;
  gradient: string;
  accent: string;
  category: string;
}

export interface Skill {
  category: string;
  icon: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  type: "work" | "leadership";
  description: string[];
  skills: string[];
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
  accent: string;
}

export interface Certification {
  title: string;
  issuer: string;
  topics: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
