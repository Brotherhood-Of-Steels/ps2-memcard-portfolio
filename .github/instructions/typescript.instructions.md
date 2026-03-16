<!-- Inspired by common React TypeScript best practices and awesome-copilot patterns -->
---
applyTo: "**/*.ts,**/*.tsx"
description: "TypeScript and React development standards for PS2 portfolio project"
---

# TypeScript & React Development Guidelines

## TypeScript Standards

- Use TypeScript strict mode for all files
- Prefer `interface` over `type` for object definitions
- Use explicit typing for function parameters and return types
- Leverage TypeScript's utility types (Partial, Pick, Omit, etc.)
- Use `const assertions` for immutable data structures
- Employ optional chaining (`?.`) and nullish coalescing (`??`) operators

## React Component Guidelines

- Use functional components with React Hooks exclusively  
- Follow React Hooks rules - no conditional or nested hooks
- Use `React.FC` type for components that accept children
- Keep components focused and single-responsibility
- Prefer composition over inheritance patterns
- Use custom hooks for shared stateful logic

## Props and State Management

- Define prop interfaces at the component file level
- Use destructuring for props with default values
- Prefer immutable state updates using spread operators
- Use `useState` with proper type inference
- Employ `useCallback` and `useMemo` for performance optimization

## Import and Export Patterns

- Use named exports for utilities and hooks
- Use default exports for React components
- Group imports: external libraries first, then internal modules
- Use path aliases defined in the project configuration
- Prefer absolute imports over relative imports for common utilities

## Error Handling

- Use TypeScript's union types for error states
- Implement proper error boundaries for component trees  
- Handle async operations with proper loading and error states
- Use type guards for runtime type checking

## Component File Structure

```typescript
// Import order: React, external libraries, internal modules
import React from 'react';
import { componentLibrary } from 'external-lib';
import { utilityFunction } from '@/lib/utils';

// Interface definitions
interface ComponentProps {
  // Props definition
}

// Component implementation
const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Hook calls at the top
  // Event handlers
  // Render logic
  return (
    // JSX
  );
};

export default Component;
```