# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR at `http://localhost:5173` |
| `npm run build` | Create production build using `react-router build` |
| `npm run start` | Serve production build with `react-router-serve` |
| `npm run typecheck` | Run type generation and TypeScript check |

## Architecture

This is a **React Router v8 Framework Mode** portfolio site for Christian Rhyss R. Jimenez.

### Data Architecture

All CV/resume data is centralized in `app/lib/cv-data.ts` and imported statically. Components do not fetch data — they import `CV_DATA` directly for fast, type-safe access to bio, skills, experience, and project information.

### Component Composition

- `home.tsx` composes major sections: Hero → About → Skills → Experience
- `About.tsx` imports `CV_DATA` and renders contact buttons with icons; includes a copy-to-clipboard button for email that uses `navigator.clipboard` with a 2-second feedback state
- `Skills.tsx` displays categorized skills from `CV_DATA.skillCategories`
- `Projects.tsx` renders project cards with links to GitHub and demo

### PDF Handling

Static assets like `Jimenez_CV_2026.pdf` live in the `public/` directory. When updating PDF files, update the `PDF_TIMESTAMP` constant in `app/routes/resume.tsx` to bust browser cache (query parameter `?v=timestamp` forces fresh fetch).

### Styling

- **Tailwind CSS v4** with `@tailwindcss/vite` plugin
- **shadcn/ui** pattern using `cva` for component variants
- `cn()` utility in `app/lib/utils.ts` merges conditional classes with Tailwind
- **Dark mode** enabled by default (html has `className="dark"` in Layout)
- **JetBrains Mono Variable** as default monospace font via Fontsource

### Aliases

Both `~/*` and `@/*` resolve to `./app/*` as configured in `tsconfig.json`.

### Deployment

The build outputs both client (static) and server bundles to `build/`. Deploy via Docker (port 3000) or any Node.js platform.

## Key Dependencies

- `react-router@8.0.0` - Framework Mode with SSR enabled
- `motion` - Animation library (fork of Framer Motion)
- `react-type-animation` - Typewriter effect in Hero
- `@icons-pack/react-simple-icons` - Icon library
- `lucide-react` - Icon set