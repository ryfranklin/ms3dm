# ms3dm.tech

Marketing and portfolio site for **ms3dm.tech** — a principal-level data and AI
consultancy. It's a single-page React application that presents the practice
(data warehousing & BI, data platforms, agentic AI, ML systems, and fractional
CTO / advisory), selected work, and writing pulled from Substack.

## Redesign plan (Sep 2026)

Services-first redesign plan (Phase 0 docs): [`docs/redesign-plan-2026-09.md`](docs/redesign-plan-2026-09.md).

Phase 1 is content and CTA work on the existing design system (Assessment default next step, Calendly, Crawl/Walk/Run offers). Not a visual redesign.

## Tech stack

- **React 17** (Create React App / `react-scripts`)
- **MUI 5** (`@mui/material`, Emotion styling)
- **React Router 6** for client-side routing
- **AOS** for scroll animations, **Mermaid** for diagrams,
  `react-syntax-highlighter` for code blocks
- Writing feed sourced from **Substack** at build time (see below)

## Getting started

```bash
npm install
npm start
```

The dev server runs at http://localhost:3000.

## Available scripts

| Script | Purpose |
| --- | --- |
| `npm start` | Run the development server |
| `npm run build` | Production build to `build/` (source maps disabled) |
| `npm run fetch:substack` | Fetch the Substack feed into a static JSON |
| `npm run prettier:fix` | Format `src/**/*.js` with Prettier |
| `npm run eslint:fix` | Lint and auto-fix `src/` |
| `npm run codeStyle:fix` | Run Prettier then ESLint fixes |
| `npm run clear-all` | Remove `build/` and `node_modules/` |

## Project structure

```
src/
  App.js, Routes.js       App shell and route table
  views/                  Page-level views (Home, About, Writing, Contact, ...)
  blocks/                 Reusable content blocks
  components/             Shared UI components
  layouts/                Page layouts
  theme/                  MUI theme configuration
  services/, config/      App services and configuration
scripts/
  fetch-substack.js       Build-time Substack feed fetcher
public/
  substack-posts.json     Generated feed data read at runtime
```

## Writing feed (Substack)

The Substack RSS feed is served as `application/xml` with no CORS header, so it
can't be fetched from the browser. Instead, `scripts/fetch-substack.js` runs at
build time (wired in as the `prebuild` step) and writes
`public/substack-posts.json`, which the SPA reads at runtime — no runtime
backend, no CORS proxy. It stores only metadata plus a short summary and links
out to Substack as the canonical source. If the fetch fails and a previous JSON
exists, the old file is kept so a transient Substack outage never breaks a
deploy.

## Deployment

Deployed to **IONOS Deploy Now** via GitHub Actions
(`.github/workflows/deploy-now.yaml`). The workflow runs on push and on a daily
`schedule` (12:00 UTC) so newly published Substack posts — baked in at build
time by the prebuild step — appear without a manual push.
