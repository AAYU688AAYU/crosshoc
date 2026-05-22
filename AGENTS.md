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
- Dashboard route lives at `app/dashboard/page.tsx`.
- Sidebar/navigation composition is centered in `components/app-sidebar.tsx` plus `components/nav-*.tsx`.

## UI Conventions
- Reusable primitives are in `components/ui/`.
- Prefer composing from existing UI primitives before adding new bespoke components.
- Variant styling pattern uses `class-variance-authority`; see `components/ui/button.tsx`.
- Class merging utility is in `lib/utils.ts` (`cn`). Use it for conditional class names.

## Known Pitfalls
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
