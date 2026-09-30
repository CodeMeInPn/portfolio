export type Pt = { x: number; y: number };

export function computeNormals(points: Pt[]): Pt[] {
  return points.map((_, i) => {
    const prev = points[Math.max(0, i - 1)];
    const next = points[Math.min(points.length - 1, i + 1)];
    const dx = next.x - prev.x;
    const dy = next.y - prev.y;
    const len = Math.hypot(dx, dy) || 1;
    return { x: -dy / len, y: dx / len };
  });
}

export function offsetPoints(
  points: Pt[],
  normals: Pt[],
  offset: number
): Pt[] {
  return points.map((p, i) => ({
    x: p.x + normals[i].x * offset,
    y: p.y + normals[i].y * offset,
  }));
}

export function toPathD(points: Pt[]): string {
  return points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(' ');
}

export function pathLength(points: Pt[]): number {
  let len = 0;
  for (let i = 1; i < points.length; i++) {
    len += Math.hypot(
      points[i].x - points[i - 1].x,
      points[i].y - points[i - 1].y
    );
  }
  return len;
}

function arc(
  center: Pt,
  radius: number,
  thetaStartDeg: number,
  thetaEndDeg: number,
  steps: number
): Pt[] {
  const pts: Pt[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const theta =
      ((thetaStartDeg + t * (thetaEndDeg - thetaStartDeg)) * Math.PI) / 180;
    pts.push({
      x: center.x + radius * Math.cos(theta),
      y: center.y + radius * Math.sin(theta),
    });
  }
  return pts;
}

/**
 * 270-degree counterclockwise twist. Enters at the bottom of the circle
 * (heading south) and exits at its left (heading south again), same shape
 * the Hero ribbon has always used.
 */
export function buildLoop(center: Pt, radius: number, steps: number): Pt[] {
  return arc(center, radius, 90, -180, steps);
}

/** Rounded corner bending a downward run into a horizontal run heading `dir` (1 = east, -1 = west). */
function verticalToHorizontalTurn(
  corner: Pt,
  radius: number,
  dir: 1 | -1,
  steps: number
): Pt[] {
  const center = { x: corner.x + dir * radius, y: corner.y - radius };
  const thetaStart = dir === 1 ? 180 : 0;
  return arc(center, radius, thetaStart, 90, steps);
}

/** Rounded corner bending a horizontal run (heading `dir`) back into a downward run. */
function horizontalToVerticalTurn(
  corner: Pt,
  radius: number,
  dir: 1 | -1,
  steps: number
): Pt[] {
  const center =
    dir === 1
      ? { x: corner.x - radius, y: corner.y + radius }
      : { x: corner.x + radius, y: corner.y + radius };
  const thetaEnd = dir === 1 ? 360 : 180;
  return arc(center, radius, 270, thetaEnd, steps);
}

/**
 * A vertical -> horizontal -> vertical "S" that shifts the ribbon sideways
 * from `fromX` to `toX`, centered vertically within [top, bottom]. Falls
 * back to a straight run when there's no horizontal shift.
 */
export function buildCrossing(
  fromX: number,
  toX: number,
  top: number,
  bottom: number,
  radius: number,
  steps: number
): Pt[] {
  if (fromX === toX) {
    return [{ x: fromX, y: bottom }];
  }

  const dir: 1 | -1 = toX > fromX ? 1 : -1;
  const midY = (top + bottom) / 2;
  const corner1 = { x: fromX, y: midY };
  const corner2 = { x: toX, y: midY };

  return [
    { x: fromX, y: midY - radius },
    ...verticalToHorizontalTurn(corner1, radius, dir, steps),
    { x: toX - dir * radius, y: midY },
    ...horizontalToVerticalTurn(corner2, radius, dir, steps),
    { x: toX, y: bottom },
  ];
}

export type StripeName = 'deepest' | 'outer' | 'middle' | 'inner';

export const STRIPE_WIDTH = 32;
export const STRIPE_SPACING = 32;

// Centered symmetrically around the spine (rather than spine-as-left-edge)
// so the bundle's max offset magnitude is minimized for a given width —
// keeps turns/loops from needing as much radius to stay pinch-free.
const STRIPE_DEFS: {
  name: StripeName;
  color: string;
  offsetMultiplier: number;
  delay: number;
}[] = [
  {
    name: 'deepest',
    color: 'var(--color-section-snake-deepest)',
    offsetMultiplier: -1.5,
    delay: 0,
  },
  {
    name: 'outer',
    color: 'var(--color-section-snake-outer)',
    offsetMultiplier: -0.5,
    delay: 0.4,
  },
  {
    name: 'middle',
    color: 'var(--color-section-snake-middle)',
    offsetMultiplier: 0.5,
    delay: 0.8,
  },
  {
    name: 'inner',
    color: 'var(--color-section-snake-inner)',
    offsetMultiplier: 1.5,
    delay: 1.2,
  },
];

export type Stripe = {
  name: StripeName;
  color: string;
  delay: number;
  d: string;
  length: number;
};

export function buildStripes(spine: Pt[]): Stripe[] {
  const normals = computeNormals(spine);
  return STRIPE_DEFS.map((def) => {
    const pts = offsetPoints(
      spine,
      normals,
      def.offsetMultiplier * STRIPE_SPACING
    );
    return {
      name: def.name,
      color: def.color,
      delay: def.delay,
      d: toPathD(pts),
      length: pathLength(pts),
    };
  });
}

const TECH_WORDS = [
  'React',
  'Next.js',
  'React Native',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Astro',
  'Tailwind CSS',
];

export type WordGroup = {
  stripeName: StripeName;
  word: string;
  index: number;
  groupSize: number;
};

/**
 * Distributes `totalWordCount` tech-stack words round-robin across the
 * stripes so each one only carries a handful of words, evenly spaced at
 * build time (matches Hero's original approach, generalized to any length).
 */
export function distributeWords(
  stripes: Stripe[],
  totalWordCount: number
): WordGroup[] {
  const words = Array.from(
    { length: totalWordCount },
    (_, i) => TECH_WORDS[i % TECH_WORDS.length]
  );
  const result: WordGroup[] = [];
  stripes.forEach((stripe, si) => {
    const group = words.filter((_, wi) => wi % stripes.length === si);
    group.forEach((word, i) => {
      result.push({
        stripeName: stripe.name,
        word,
        index: i,
        groupSize: group.length,
      });
    });
  });
  return result;
}
