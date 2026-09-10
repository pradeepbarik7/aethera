export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  year: string;
  image: string;
  category: string;
  description: string;
  fullNarrative: string;
  disciplines: string[];
}

export interface JournalArticle {
  id: string;
  number: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  paragraphs: string[];
}

export interface ExperienceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  ambientNote: string;
}
