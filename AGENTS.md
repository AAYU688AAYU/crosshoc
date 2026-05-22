# AGENTS

Guidance for AI coding agents working in this repository.

## Project Snapshot
- Stack: Next.js (App Router), React, TypeScript, Tailwind CSS v4, ESLint (flat config), Base UI + shadcn-style components.
- Package manager: pnpm (preferred).
- Source roots: `app/`, `components/`, `hooks/`, `lib/`.

## Fast Start
- Install deps: `pnpm install`
- Start dev server: `pnpm dev`
- Lint: `pnpm lint`
- Build: `pnpm build`
- Start production server: `pnpm start`

## Working Rules
- Prefer minimal, targeted edits; avoid broad refactors unless requested.
- Keep TypeScript strict-safe and preserve existing public component APIs.
- Use existing path alias imports (`@/...`) for project files.
- Match the current style in touched files (quote style, semicolons, spacing).

## App Architecture
- App Router pages are in `app/`.
- Global shell is defined in `app/layout.tsx`.
- **`app/page.tsx` is the main catalog/home page** — not a dashboard. `app/dashboard/page.tsx` is a null stub.
- Game detail route: `app/games/[id]/page.tsx` — looks up `game.id` from `constants/catalog.ts`.
- Sidebar/navigation composition is centered in `components/app-sidebar.tsx` plus `components/nav-*.tsx`.
- `AppSidebar` is a `"use client"` component. Most pages are async server components that `await params` / `await searchParams`.

## Data Layer
All app data lives in `constants/` — there is no external API or database.
- [`constants/catalog.ts`](constants/catalog.ts): `Game` type, `games[]` array, `genres`, `sortOptions`, `basePriceByGenre`. Add/change game data here.
- [`constants/reviews.ts`](constants/reviews.ts): `Review` type and `getReviewsForGame(game)` — generates reviews deterministically from a template pool.
- [`constants/sidebar.tsx`](constants/sidebar.tsx): `sidebarData` (nav items/user), `genreIconComponents` (component refs), `genreIconMap` (JSX elements). Note: `.tsx` extension because icons are rendered as JSX.
- Game pricing is computed, not stored — see `getPrice()` in `app/page.tsx`.
- Game images use `https://picsum.photos/seed/crosshoc-{id}/…` (allowlisted in `next.config.ts`).

## URL-Based State
Filtering and sorting are driven entirely by URL search params — no React client state for filters.
- `?section=all|new|top|genres` — content section
- `?genre=Action|Strategy|RPG|…` — genre filter
- `?sort=relevance|date-added|name|release-date|popularity|average-rating` — sort key
- Helper `buildHref(currentParams, updates)` in `app/page.tsx` constructs filter URLs.

## UI Conventions
- Reusable primitives are in `components/ui/`.
- Prefer composing from existing UI primitives before adding new bespoke components.
- Variant styling pattern uses `class-variance-authority`; see `components/ui/button.tsx`.
- Class merging utility is in `lib/utils.ts` (`cn`). Use it for conditional class names.
- `@base-ui/react` powers some primitives (e.g., `Avatar` accepts a `size` prop from Base UI). Check existing usage before adding new props.

## Known Pitfalls
- `app/dashboard/page.tsx` returns `null` — it is a stub, not the main page.
- `constants/sidebar.tsx` must stay `.tsx` (not `.ts`) because it uses JSX for icon elements.
- `game.gradient` is defined on the `Game` type but is not currently rendered anywhere — don't assume it's in active use.
- This repo contains both `app/layout.tsx` and `app/page.tsx` usage of sidebar providers/insets. Preserve the current route-level behavior unless asked to unify layout ownership.
- No test runner is configured in scripts. Do not claim tests were run unless a test setup is added.
- ESLint uses flat config (`eslint.config.mjs`), not legacy `.eslintrc`.

## Helpful References
- Baseline project docs: [README.md](README.md)
- Scripts/dependencies: [package.json](package.json)
- TypeScript config and path alias: [tsconfig.json](tsconfig.json)
- ESLint config: [eslint.config.mjs](eslint.config.mjs)
- Root app shell: [app/layout.tsx](app/layout.tsx)
- Sidebar composition example: [components/app-sidebar.tsx](components/app-sidebar.tsx)
- UI variant example: [components/ui/button.tsx](components/ui/button.tsx)
