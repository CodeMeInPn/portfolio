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
}
