<div align="center">

# PS2 Memory Card Portfolio

An interactive portfolio that emulates the PlayStation 2 memory card interface, built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui. Includes PS2-inspired UI, 3D elements, and retro animations.

</div>

## Contents
- Overview
- Features
- Tech Stack
- Getting Started
- Scripts
- Project Structure
- Development Guidelines
- Testing
- Accessibility
- Performance
- UI System
- Pages & Key Components
- Deployment
- Contributing

---

## Overview
This project recreates the nostalgic PS2 memory card experience as a modern web app. It showcases projects and interactions using PS2-inspired iconography, UI chrome, and animations while adhering to current best practices for performance and accessibility.

## Features
- PS2-themed interface with retro animations and sound-friendly interaction points
- Responsive, mobile-first design
- 3D visuals and effects using React Three Fiber and Drei
- Reusable UI based on shadcn/ui + Radix Primitives
- Strong TypeScript typing and ESLint rules
- Vitest test setup with Testing Library

## Tech Stack
- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3 + tailwind-merge + tailwindcss-animate
- shadcn/ui (Radix-based) components
- React Three Fiber, Drei, and Postprocessing for 3D
- React Router v6
- Vitest + @testing-library/react for tests

## Getting Started

Prerequisites:
- Node.js 18+ (or Bun latest)

Install dependencies and run the app using your preferred package manager:

With npm:
```bash
npm i
npm run dev
```

With Bun:
```bash
bun install
bun run dev
```

Build and preview:
```bash
# npm
echo "Build" && npm run build && npm run preview

# bun
echo "Build" && bun run build && bun run preview
```

The app runs at http://localhost:5173 by default.

## Scripts
- `dev` – start Vite dev server
- `build` – production build
- `build:dev` – development build (unminified)
- `preview` – preview production build locally
- `lint` – run ESLint
- `test` – run Vitest once
- `test:watch` – run Vitest in watch mode

Run with npm (e.g., `npm run dev`) or Bun (e.g., `bun run dev`).

## Project Structure
```
src/
├── components/           # Reusable PS2-themed components
│   ├── PS2Orbs.tsx
│   ├── PS2Icon3D.tsx
│   ├── PS2BottomBar.tsx
│   ├── SnakeGame.tsx
│   └── ui/               # shadcn/ui component wrappers
├── hooks/                # Custom hooks
├── lib/                  # Utilities (e.g., cn helpers)
├── pages/                # Route-level pages
│   ├── Index.tsx
│   ├── BrowsePage.tsx
│   ├── GamesPage.tsx
│   └── NotFound.tsx
└── test/                 # Test setup and examples
```

## Development Guidelines
Follow the standards captured in `.github/instructions/`:
- TypeScript & React: `typescript.instructions.md`
- Testing: `testing.instructions.md`
- Documentation: `documentation.instructions.md`
- Security: `security.instructions.md`
- Performance: `performance.instructions.md`
- Code Review: `code-review.instructions.md`

Key principles:
- Strict TypeScript; prefer `interface` for objects
- Functional components with hooks; follow Hooks rules
- Composition over inheritance; small, focused components
- Mobile-first with accessible interactions (WCAG 2.1 AA)
- Keep PS2 theme consistent across features and animations

## Testing
We use Vitest with React Testing Library.

Common commands:
```bash
npm run test          # or bun run test
npm run test:watch    # or bun run test:watch
```

Guidelines:
- Test behavior via public APIs (props, user events)
- Include accessibility checks and keyboard navigation
- Prefer integration tests where it adds confidence

## Accessibility
- Semantic markup and ARIA where appropriate
- Full keyboard navigation on interactive components
- Sufficient color contrast for PS2-themed UI
- Visible focus states and logical tab order

## Performance
- Memoize components where props are stable
- Use `useCallback`/`useMemo` thoughtfully
- Lazy-load non-critical routes or heavy components
- Animate transform/opacity for smooth 60fps transitions
- Optimize 3D assets and postprocessing effects

## UI System
The UI uses Tailwind + shadcn/ui (Radix Primitives) for accessible, unstyled primitives extended with PS2 visual language. Shared utilities live in `src/lib/`.

## Pages & Key Components
- `Index.tsx`: Landing/home with primary PS2 visuals
- `BrowsePage.tsx`: Explore portfolio items in memory-card style
- `GamesPage.tsx`: Interactive/game-like demos (e.g., `SnakeGame`)
- `NotFound.tsx`: 404 route with themed presentation
- `PS2Orbs.tsx`: Ambient orb visuals reminiscent of PS2 menus
- `PS2Icon3D.tsx`: 3D scene elements using R3F/Drei
- `PS2BottomBar.tsx`: System-like status/action bar

## Deployment
Static build via Vite. Host on any static provider (e.g., Netlify, Vercel, GitHub Pages).

```bash
# Build
npm run build  # or bun run build

# Preview locally
npm run preview  # or bun run preview
```

## Contributing
- Run lint and tests before committing: `npm run lint && npm run test`
- Follow code review standards in `.github/instructions/code-review.instructions.md`
- Maintain PS2 theme consistency and accessibility

---

For deeper guidance, see the instruction files in `.github/instructions/` and the reusable prompts/agents in `.github/prompts/` and `.github/agents/`.

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
