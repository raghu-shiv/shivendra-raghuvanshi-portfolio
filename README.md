# Shivendra Raghuvanshi Portfolio

Personal portfolio site built with Next.js 16, React 19, Tailwind CSS v3, Three.js, and Sentry.

## Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| UI | React 19 |
| Styling | Tailwind CSS v3, `tailwindcss-animate` |
| 3D / globe | Three.js, `@react-three/fiber`, `@react-three/drei`, `three-globe` |
| Motion | Framer Motion, `lottie-react` |
| Themes | `next-themes` |
| Monitoring | `@sentry/nextjs` |

## Prerequisites

- **Node.js** 20+ (see `.nvmrc` — recommended: 22)
- **npm** 10+

## Getting started

### 1. Install dependencies

```bash
npm install
```

If install fails with npm cache permission errors on Windows:

```powershell
$env:npm_config_cache = (Join-Path (Get-Location) ".npm-cache")
npm install
```

### 2. Environment variables

Environment files are set up with **demo placeholders**. Replace them before production deploy.

| File | Committed | Purpose |
|------|-----------|---------|
| `.env.example` | Yes | Full template — copy when onboarding |
| `.env` | Yes | Shared demo defaults |
| `.env.local` | No (gitignored) | Local overrides and secrets |
| `.env.sentry-build-plugin` | No (gitignored) | Sentry auth token for production builds |

**Quick setup:**

```bash
# Files are already present with demo values. For your own Sentry project:
# 1. Edit .env.local — set NEXT_PUBLIC_SENTRY_DSN and SENTRY_DSN
# 2. Edit .env.sentry-build-plugin — set SENTRY_AUTH_TOKEN for source map uploads
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_APP_URL` | Public site URL (e.g. `http://localhost:3000`) |
| `NEXT_PUBLIC_APP_NAME` | Display name in metadata |
| `NEXT_PUBLIC_SENTRY_DSN` | Client-side Sentry DSN |
| `SENTRY_DSN` | Server/edge Sentry DSN |
| `SENTRY_ORG` | Sentry organization slug |
| `SENTRY_PROJECT` | Sentry project slug |
| `SENTRY_ENVIRONMENT` | Environment label (`development`, `production`, …) |
| `SENTRY_AUTH_TOKEN` | Build-time token for source maps (never commit real values) |

Leave `NEXT_PUBLIC_SENTRY_DSN` empty in `.env.local` to disable Sentry during local development.

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Production build

```bash
npm run build
npm run start
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Production build (requires Sentry token for upload if DSN is set) |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project structure

```
app/              # Next.js App Router pages and layout
components/       # UI sections and shared components
data/             # Static content and JSON assets
public/           # Static images and SVGs
sentry.*.config.ts # Sentry client/server/edge initialization
```

## Recent maintenance (dependency upgrade)

The dependency tree was aligned for compatibility:

- **React 19** — required by `@react-three/fiber` v9
- **Tailwind CSS v3** — matches existing `tailwind.config.ts` (not v4)
- **`lottie-react`** — replaces deprecated `react-lottie`
- **TypeScript 5.8** — stable typing with Next 16
- Sentry DSN moved from hardcoded values to environment variables

See `AGENTS.md` for agent/workspace conventions.

## Deploy on Vercel

1. Push the repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Set environment variables from `.env.example` in the Vercel dashboard.
4. Add `SENTRY_AUTH_TOKEN` as a protected environment variable for production builds.

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [Sentry Next.js guide](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
