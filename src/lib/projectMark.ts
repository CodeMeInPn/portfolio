import type { Project } from '../types/project';

export const SHAPE_COUNT = 5;

export type ColorKey = 'outer' | 'middle' | 'inner';

export interface ProjectMarkVariant {
  shapeIndex: number;
  colorOrder: [ColorKey, ColorKey, ColorKey];
}

const COLOR_ORDER_BY_CATEGORY: Record<
  Project['category'],
  [ColorKey, ColorKey, ColorKey]
> = {
  commercial: ['outer', 'middle', 'inner'],
  side: ['inner', 'outer', 'middle'],
};

// Simple deterministic string hash (djb2-ish) — collisions are cosmetically
// harmless here since it only picks which of 5 decorative shapes to draw.
function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export function getProjectMarkVariant(
  project: Pick<Project, 'category' | 'technologies'>
): ProjectMarkVariant {
  const shapeIndex = hashString(project.technologies.join('|')) % SHAPE_COUNT;
  const colorOrder = COLOR_ORDER_BY_CATEGORY[project.category];

  return { shapeIndex, colorOrder };
}
