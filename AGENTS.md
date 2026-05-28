# Agent instructions

## Workspace boundary

Agents working in this repository must:

- Operate **only** inside this folder: `shivendra-raghuvanshi-portfolio`.
- **Not** access, modify, or run commands against paths outside this project root unless the user explicitly grants broader scope.
- Run installs, builds, and dev servers from the repository root.

## Project stack

| Area | Choice |
|------|--------|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19 |
| Styling | Tailwind CSS v3 (`tailwind.config.ts` + PostCSS) |
| 3D | Three.js, `@react-three/fiber`, `@react-three/drei`, `three-globe` |
| Animations | Framer Motion, `lottie-react` |
| Monitoring | Sentry (`@sentry/nextjs`) |
| Node | 20+ (`.nvmrc` pins 22) |

## Environment files

| File | Git | Notes |
|------|-----|-------|
| `.env.example` | Committed | Canonical template; update when adding new vars |
| `.env` | Committed | Demo defaults only — no real secrets |
| `.env.local` | Ignored | Local secrets and overrides |
| `.env.sentry-build-plugin` | Ignored | `SENTRY_AUTH_TOKEN` for `npm run build` |

Runtime Sentry config reads `sentry.env.ts`, which uses `SENTRY_DSN` / `NEXT_PUBLIC_SENTRY_DSN`. Sentry is disabled when DSN is empty.

Build-time Sentry (`next.config.mjs`) reads `SENTRY_ORG`, `SENTRY_PROJECT`, and `SENTRY_AUTH_TOKEN`.

Never commit real `SENTRY_AUTH_TOKEN` values. Use demo placeholders from `.env.example`.

## Completed maintenance (reference)

Dependency upgrade work completed:

1. React 18 → 19 (peer requirement for `@react-three/fiber` v9)
2. Tailwind pinned to v3.4 (config not migrated to v4)
3. `react-lottie` → `lottie-react`
4. TypeScript pinned to 5.8.x
5. Hardcoded Sentry DSN removed; env-driven via `sentry.env.ts`
6. Added `data/confetti.json`, fixed React 19 / R3F / Framer Motion types
7. Fresh `package-lock.json`; `npm run build` verified

## Dependency rules

1. Resolve peer dependency conflicts by aligning versions (do not rely on `--legacy-peer-deps` unless unavoidable).
2. React must satisfy `@react-three/fiber` peer range: `>=19 <19.3`.
3. Do not upgrade to Tailwind v4 without migrating `globals.css`, PostCSS, and removing v3-only APIs in `tailwind.config.ts`.
4. Replace deprecated packages with maintained alternatives before bumping majors.
5. Document new environment variables in `.env.example`, `README.md`, and this file.

## Verification checklist

After dependency, env, or config changes:

```bash
npm install
npm run build
npm run dev
```

Confirm the app serves on `http://localhost:3000` without install or compile errors.

If `npm install` fails with cache `EPERM` on Windows:

```powershell
$env:npm_config_cache = (Join-Path (Get-Location) ".npm-cache")
npm install
```

## Commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Production build | `npm run build` |
| Start production | `npm run start` |
| Lint | `npm run lint` |
