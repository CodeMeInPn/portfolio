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

### Section system

The core visual system is `Section.astro`, which wraps page content in a decorative frame. Each section accepts:

- `activeBars` — renders colored stripe bars (`Bar.astro`) at horizontal (top strip) and/or vertical-left/right positions. Bars consist of three colored divs (`section-snake-outer`, `section-snake-middle`, `section-snake-inner`) that can be inverted and offset.
- `activeConnectors` — renders quarter-circle SVG connectors (`Connector.astro`) at corners (top-left, top-right, bottom-left, bottom-right, bottom-left-inverted). Connector color changes based on position variant.

The `offset` and `invertColor` options within `activeBars` accept position strings (`'top'`, `'bottom'`, `'left'`, `'right'`) to control visual alignment and color swap between inner/outer stripes.

### Key color tokens
- `section-snake-outer`: `#ea171d` (red)
- `section-snake-middle`: `#fe5c1e` (orange)
- `section-snake-inner`: `#fec830` (yellow)

These are used exclusively by `Bar.astro` and `Connector.astro` to produce the brand stripe pattern.
