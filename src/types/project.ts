export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  imageUrl: string;
  imageAlt: string;
  category: 'commercial' | 'side';
  eyebrow?: string;
  meta?: { label: string; value: string }[];
  techStack?: { category: string; items: { name: string; icon?: string }[] }[];
  architecture?: string[];
  keyFeatures?: string[];
  highlights?: string[];
  stats?: { value: string; label: string }[];
  heroImage?: string;
  heroImageAlt?: string;
}
