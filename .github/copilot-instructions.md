# PS2 Memory Card Portfolio - GitHub Copilot Instructions

This portfolio project showcases a PS2 memory card themed interface built with React, TypeScript, Vite, and Tailwind CSS. Follow these guidelines for all development work.

## Project Overview

A creative portfolio website that emulates a PlayStation 2 memory card interface, featuring:
- React 18 with TypeScript for type safety
- Vite for fast development and building
- Tailwind CSS for utility-first styling
- shadcn/ui for consistent component library
- Vitest for testing
- Bun as the package manager

## Core Development Principles

1. **Type Safety First**: Use TypeScript strictly, prefer interfaces over types for objects
2. **Component Composition**: Build reusable, focused components following React best practices
3. **Performance**: Optimize for web vitals, use lazy loading and code splitting where appropriate
4. **Accessibility**: Ensure WCAG 2.1 AA compliance for all interactive elements
5. **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## File Organization

```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── lib/           # Utilities and helpers
├── pages/         # Page components
└── test/          # Test utilities and setup
```

## Development Standards

- Follow the established component patterns in `/src/components/`
- Use the project's custom hooks for common functionality
- Maintain consistency with the PS2 theme and visual design
- Test interactive components and ensure keyboard navigation works
- Follow the existing naming conventions (PascalCase for components, camelCase for functions)

## Related Instructions

Refer to these specific instruction files for detailed guidelines:

- [TypeScript Guidelines](./instructions/typescript.instructions.md)
- [Testing Standards](./instructions/testing.instructions.md) 
- [Documentation Requirements](./instructions/documentation.instructions.md)
- [Security Best Practices](./instructions/security.instructions.md)
- [Performance Guidelines](./instructions/performance.instructions.md)
- [Code Review Standards](./instructions/code-review.instructions.md)

## Getting Started

1. Install dependencies: `bun install`
2. Start development server: `bun run dev`
3. Run tests: `bun run test`
4. Build for production: `bun run build`

When working on this project, always consider the unique PS2 memory card theme and ensure new features align with the overall aesthetic and user experience.