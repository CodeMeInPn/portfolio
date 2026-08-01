interface ParsedStatValue {
  target: number;
  decimals: number;
  suffix: string;
}

function parseStatValue(raw: string): ParsedStatValue {
  const match = raw.match(/^(-?[\d.]+)(.*)$/);
  if (!match) return { target: 0, decimals: 0, suffix: raw };

  const [, numberPart, suffix] = match;
  const decimals = numberPart.includes('.')
    ? numberPart.split('.')[1].length
    : 0;

  return { target: parseFloat(numberPart), decimals, suffix };
}

function animateCount(el: HTMLElement, durationMs: number): void {
  const raw = el.dataset.countValue ?? el.textContent ?? '';
  const { target, decimals, suffix } = parseStatValue(raw);
  const start = performance.now();

  function tick(now: number) {
    const t = Math.min((now - start) / durationMs, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = `${(target * eased).toFixed(decimals)}${suffix}`;
    if (t < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

interface ObserveCountUpOptions {
  threshold?: number;
  durationMs?: number;
}

// No-ops under prefers-reduced-motion: reduce, leaving the statically rendered value.
export function observeCountUp(
  selector: string,
  { threshold = 0.4, durationMs = 1200 }: ObserveCountUpOptions = {},
): void {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (prefersReducedMotion) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target as HTMLElement, durationMs);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold },
  );

  document
    .querySelectorAll<HTMLElement>(selector)
    .forEach((el) => observer.observe(el));
}
