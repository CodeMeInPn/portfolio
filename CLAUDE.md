# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev          # Start dev server
yarn build        # Production build
yarn preview      # Preview production build
yarn lint         # Run ESLint + Prettier + TypeScript check (via lefthook pre-commit)
```

Lefthook runs on pre-commit (eslint --fix, prettier --write, tsc --noEmit in parallel) and on pre-push (tests).

## Architecture

Astro 5 static site with Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin, not `astro/integrations/tailwind`). Theme tokens are defined in `src/styles/global.css` under `@theme` — this is where colors and spacing live, not in a `tailwind.config.*` file.

### Path aliases (tsconfig.json)

- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@pages/*` → `src/pages/*`
- `utils/cn` (no alias) → `utils/cn.tsx` — the `cn()` helper combining `cva` + `tailwind-merge`

### Section system and page ribbon

`Section.astro` wraps each page section: a `.section-ribbon-gap` spacer followed by a centered `.section-ribbon-content` column. Its `spacing` prop is `'ribbon'` (default; tall gap so the home-page ribbon can cross between sections) or `'compact'` (pages without the ribbon, e.g. `projects/[slug].astro`).

`PageRibbon.astro` (home page only, `lg` and up; scales down to fit the right gutter) draws the decorative ribbon as one absolutely positioned SVG built client-side. It measures `#hero` and the `#about`, `#projects` and `#contact` sections, builds a spine (hero loop, then S-shaped crossings inside each section's ribbon gap), and offsets it into four stripes. Geometry helpers live in `src/lib/ribbon.ts`. Renaming those section ids or the `section-ribbon-*` classes breaks the ribbon silently — `buildSpine()` just returns `null`.

### Key color tokens

Defined in `src/styles/global.css` under `@theme`:

- `section-snake-deepest`: `#452125`
- `section-snake-outer`: `#e16026`
- `section-snake-middle`: `#ea8d2d`
- `section-snake-inner`: `#e4b53f`

Used by the ribbon (`src/lib/ribbon.ts`) and the smaller stripe accents (`TriStripe`, `ProjectMark`, `ProjectStatStrip`, `Nav`, hero section).
