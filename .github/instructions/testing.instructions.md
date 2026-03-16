<!-- Inspired by React Testing Library and Vitest best practices -->
---
applyTo: "**/test/**/*,**/*.test.*,**/*.spec.*"
description: "Testing standards and practices for the portfolio project"
---

# Testing Guidelines

## Testing Philosophy

- Write tests that focus on user behavior, not implementation details  
- Test components through their public interface (props and user interactions)
- Prefer integration tests over isolated unit tests where appropriate
- Ensure tests are maintainable and provide confidence in refactoring

## Vitest Configuration

- Use the existing Vitest configuration in `vitest.config.ts`
- Leverage the test setup file in `src/test/setup.ts`  
- Write tests using the modern testing patterns with `describe`, `it`, and `expect`
- Use `beforeEach` and `afterEach` for test isolation

## React Component Testing

- Test component rendering and prop handling
- Simulate user interactions (clicks, keyboard navigation, form submissions)
- Verify accessibility features (ARIA labels, keyboard navigation, focus management)
- Test responsive behavior and different viewport sizes
- Mock external dependencies and API calls appropriately

## Testing Custom Hooks  

- Use React Testing Library's `renderHook` for custom hook testing
- Test hook state changes and side effects
- Verify cleanup functions and dependency arrays
- Test edge cases and error conditions

## Testing Structure

```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Component from './Component';

describe('Component', () => {
  beforeEach(() => {
    // Setup common to all tests
  });

  it('renders correctly with required props', () => {
    // Test rendering
  });

  it('handles user interactions', () => {
    // Test user events
  });

  it('meets accessibility standards', () => {
    // Test a11y requirements
  });
});
```

## Mock Strategy

- Mock external API calls using MSW or Vitest mocks
- Mock heavy dependencies that aren't part of the component's core functionality  
- Keep mocks simple and focused on the test scenario
- Clean up mocks between tests to avoid interference

## Performance Testing

- Test that components don't cause unnecessary re-renders
- Verify lazy loading and code splitting works as expected
- Test memory leaks in components with subscriptions or timers
- Monitor bundle size impact of new features