# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SEO services landing site for small businesses, built with Next.js 16 (Pages Router), Tailwind CSS 3, and TypeScript. Statically exported (SSG) to `out/` directory. Includes a markdown-based blog, Stripe checkout, and structured data (JSON-LD) for SEO.

## Commands

- `npm run dev` - Development server (http://localhost:3000)
- `npm run build` - Production build (static export)
- `npm run build-prod` - Clean build (removes .next, .swc, out dirs first), then generates sitemap
- `npm run build-stats` - Production build with bundle analyzer
- `npm run lint` - ESLint
- `npm run format` - ESLint fix + Prettier for JSON/YAML
- `npm run check-types` - TypeScript type checking (`tsc --noEmit`)

## Architecture

### Page composition pattern

All pages follow this layering:

1. **Pages** (`src/pages/`) — Next.js entry points. Use `getStaticProps` for data fetching. Each page wraps content in `PageLayout`.
2. **PageLayout** (`src/layout/PageLayout.tsx`) — Shared wrapper providing `Meta` (SEO head tags via next-seo), `Navbar`, and `SiteFooter`.
3. **Templates** (`src/templates/`) — Page-level section components (Hero, FAQ, PricingPreview, etc.) composed inside PageLayout.
4. **UI primitives** (`src/components/ui/`) — shadcn/ui-style components (Button, Card, Accordion, etc.) using Radix UI + `class-variance-authority`.
5. **Atomic components** (`src/background/`, `src/button/`, `src/cta/`, `src/feature/`, `src/hero/`, `src/navigation/`) — Older reusable UI primitives.

### Blog system

- Markdown posts live in `src/content/blog/*.md` with gray-matter frontmatter (title, description, date, author, keywords).
- `src/utils/blog.ts` reads and parses posts using gray-matter + remark-html.
- Dynamic route at `src/pages/blog/[slug].tsx` with `getStaticPaths`/`getStaticProps`.

### SEO infrastructure

- `src/seo/schemas.ts` — JSON-LD schema generators (Organization, LocalBusiness, Service, FAQ, Article, Review, Breadcrumb).
- `src/seo/JsonLd.tsx` — Renders JSON-LD script tags. Pages pass `jsonLd` prop to `PageLayout`.
- `src/layout/Meta.tsx` — Open Graph and SEO meta tags via `next-seo`.
- `next-sitemap.config.js` — Auto-generates sitemap on `build-prod`.

### Config & styling

- `src/utils/AppConfig.ts` — Site-wide metadata (name, title, description, URL, locale).
- CSS variables design system in `src/styles/global.css` (HSL-based: `--primary`, `--secondary`, `--accent`, etc.).
- Tailwind extends these via `hsl(var(--token))` pattern in `tailwind.config.js`.
- Inter font loaded via `next/font/google` in `_app.tsx`.
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge).

### Key conventions

- `trailingSlash: true` in `next.config.js` — all URLs end with `/`.
- Path aliases: `@/*` → `./src/*`, `@/public/*` → `./public/*`.
- Type imports use `import type` (enforced by `@typescript-eslint/consistent-type-imports`).
- Strict TypeScript: `noUncheckedIndexedAccess`, `noUnusedLocals`, `noUnusedParameters`.

## Linting & Code Style

- ESLint flat config (`eslint.config.mjs`) extends Next.js Core Web Vitals + typescript-eslint strict + Tailwind + Prettier.
- `simple-import-sort` plugin enforces import ordering.
- `unused-imports` plugin auto-removes unused imports.
- Prettier: single quotes, auto end-of-line.
- Pre-commit hook (Husky + lint-staged) runs ESLint, type checking, and Prettier on staged files.

## Deployment

Deployed to Netlify. Build command: `npm run build-prod`. Publish dir: `out`.
