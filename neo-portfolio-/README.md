# Neo Monamatha - Technology Portfolio

## Overview

A responsive, honest portfolio for Neo Monamatha, a Business Information Technology student building practical solutions across software, systems, cloud and data.

## About

Neo is completing a Bachelor of Information Technology in Business Information Technology, specialising in Business Information Systems. The portfolio presents academic work and learning projects without inventing employment, credentials, users or deployments.

## Tech Stack

- React 19 and TypeScript
- Vite 7
- Tailwind CSS 4
- Lucide React
- Vitest and Testing Library

## Projects

Project content lives in `src/data/portfolio.ts`. Add repository and demo URLs only when they are verifiable. Documentation for substantial projects can follow the structure in `docs/`.

### SYNARI Smart Asset Tracker

SYNARI is currently a documented application proposal, not a deployed product. Its planning artifacts cover the problem, requirements, user stories, proposed modular-monolith architecture, PostgreSQL schema, API contract, security controls, testing strategy, cloud option and implementation milestones:

- `docs/business-analysis.md`
- `docs/requirements.md`
- `docs/user-stories.md`
- `docs/architecture.md`
- `docs/database.md`
- `docs/api.md`
- `docs/security.md`
- `docs/testing.md`
- `docs/implementation-roadmap.md`

Implementation should move to a separate `neo-smart-asset-tracker` repository once the foundation work begins. Until then, the portfolio deliberately makes no claims about production usage, deployments, users or credentials.

## Development

```bash
npm install
npm run dev
```

## Installation

Node.js 20+ and npm are recommended. Install dependencies with `npm install`.

## Running Locally

Run `npm run dev`, then open the local URL printed by Vite.

## Testing

`npm test` runs the component test suite. `npm run lint` checks code quality.

## Building

`npm run build` type-checks and creates the production bundle in `dist/`.

## Deployment

The project is Vercel-ready: import the repository, use `npm run build` as the build command, and set `dist` as the output directory. No environment variables are required for the current frontend-only contact form or optional GitHub links.

## Project Structure

```text
src/App.tsx              page composition and accessible interactions
src/data/portfolio.ts    typed, editable portfolio content
src/styles.css           responsive visual system
src/test/                test setup
docs/                    SYNARI engineering planning documents
```

## Engineering Principles

Problem understanding comes before implementation. Claims stay verifiable, content is data-driven, interaction remains keyboard-accessible, and project documentation should make requirements, architecture, testing and security decisions visible.

## Contact

Add the preferred email and LinkedIn URL in `src/data/portfolio.ts`. The contact form is frontend-ready and can later connect to Formspree, EmailJS or a backend API without exposing credentials.