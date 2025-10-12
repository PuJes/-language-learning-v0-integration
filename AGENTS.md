# Repository Guidelines

## Project Structure & Module Organization
- `src/app/` houses all App Router pages and layouts (`languages`, `culture`, `survey`, `recommendation`).
- Reusable UI lives in `src/components/`; primitives under `src/components/ui/` should be extended, not duplicated.
- State, utilities, and locale data sit in `src/store/`, `src/hooks/`, `src/lib/`, `src/locales/`, and structured content in `src/data/` or `v0-components/`.
- Static assets and documentation remain in `public/` and `docs/`.

## Build, Test, and Development Commands
- `npm run dev` launches the local server at `http://localhost:3000` for iterative work.
- `npm run build` compiles the production bundle used by Docker and Railway.
- `npm start` serves the built app locally to validate release artefacts.
- `npm run lint` executes the flat ESLint setup; resolve warnings before committing.

## Coding Style & Naming Conventions
- Use TypeScript with explicit types on exports; lean on server components and hooks where idiomatic.
- Keep component files PascalCase, route segments kebab-case, and utilities camelCase; prefer 2-space indentation to match existing files.
- Tailwind tokens live in `src/app/globals.css`; add design changes there and avoid ad hoc colour literals.
- Keep ESLint auto-fix-on-save enabled to maintain accessibility and import order rules.

## Testing Guidelines
- No automated suite yet; smoke test key flows in both locales via `npm run dev` before merging.
- Add future Jest or Playwright coverage under `src/__tests__/`, using `<feature>.test.tsx` naming and locale-aware assertions.
- Treat console warnings during manual runs as release blockers, especially around the recommendation funnel.

## Commit & Pull Request Guidelines
- Prefer Conventional Commit prefixes (`feat:`, `fix:`, `chore:`) as demonstrated in history; keep subjects tight (<72 chars).
- Confirm `npm run lint` and a clean build before pushing; rebase or squash feature branches ahead of merge.
- PRs need a concise summary, linked issue when relevant, UI screenshots for visual changes, and explicit locale verification notes.
- Loop in reviewers closest to the affected module and mention any seeding or script steps in the PR body.

## Localization & Content Updates
- Extend `src/locales/` and companion types in `src/types/` when introducing new copy, and keep structured prose in `src/data/`.
- Use `useTranslation` for runtime strings and the scripts in `scripts/` for bulk translation; document any new workflow in `README.md`.
