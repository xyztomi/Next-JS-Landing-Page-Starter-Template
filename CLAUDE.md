# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 14+ landing page template using Tailwind CSS 3 and TypeScript. Static site generator (SSG) focused on SEO and performance. Uses the Pages Router (not App Router).

## Commands

- `npm run dev` - Development server with live reload (http://localhost:3000)
- `npm run build` - Production build
- `npm run build-prod` - Clean build (removes .next, .swc, out dirs first)
- `npm run build-stats` - Production build with bundle analyzer
- `npm run lint` - ESLint (next lint)
- `npm run format` - ESLint fix + Prettier for JSON/YAML
- `npm run check-types` - TypeScript type checking (`tsc --noEmit`)

## Architecture

The codebase follows a layered composition pattern:

1. **Pages** (`src/pages/`) - Next.js entry points. `index.tsx` renders the `Base` template.
2. **Templates** (`src/templates/`) - Page-level compositions that assemble component blocks (Hero, Banner, VerticalFeatures, Footer, Sponsors, Logo).
3. **Atomic components** (`src/background/`, `src/button/`, `src/cta/`, `src/feature/`, `src/footer/`, `src/hero/`, `src/layout/`, `src/navigation/`) - Reusable UI primitives used by templates.
4. **Config** (`src/utils/AppConfig.ts`) - Site-wide metadata (name, title, description, locale).
5. **Layout** (`src/layout/Meta.tsx`) - SEO metadata via `next-seo`; `Section.tsx` for consistent page sections.

Path aliases: `@/*` maps to `./src/*`, `@/public/*` maps to `./public/*`.

## Linting & Code Style

- ESLint extends Airbnb + Next.js Core Web Vitals + Prettier
- `simple-import-sort` plugin enforces import ordering
- `unused-imports` plugin auto-removes unused imports
- `tailwindcss` ESLint plugin enforces Tailwind best practices
- Prettier: single quotes, auto end-of-line
- Pre-commit hook (Husky + lint-staged) runs ESLint, type checking, and Prettier on staged files

## Deployment

Production output goes to `out/` directory. Netlify config is in `netlify.toml` (publish dir: `out`, build command: `npm run build-prod`).
