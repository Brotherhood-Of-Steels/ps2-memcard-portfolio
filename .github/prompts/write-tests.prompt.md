---
agent: 'agent' 
model: Claude Sonnet 4
tools: ['codebase', 'editFiles']
description: 'Generate comprehensive tests for components and functionality'
---

# Write Tests Prompt

Generate comprehensive tests for the PS2 Memory Card Portfolio project using Vitest and React Testing Library.

## Test Requirements

Specify what you want to test:
1. **Component/Function Name** to test
2. **Type of Test** (component, hook, utility function, integration)
3. **Specific Behaviors** to verify
4. **Edge Cases** to cover

## Testing Approach

### Component Testing
Test components through their public interface:
- Props handling and rendering  
- User interactions (clicks, keyboard navigation)
- Accessibility features
- Responsive behavior
- Error states and edge cases

### Custom Hook Testing
For custom hooks in `/src/hooks/`:
- State changes and side effects
- Cleanup functions and dependencies
- Error handling and edge cases
- Integration with React lifecycle

### Utility Function Testing
For functions in `/src/lib/`:
- Input validation and type safety
- Expected outputs for various inputs
- Error handling and boundary conditions
- Performance characteristics if relevant

## Test Template

```typescript
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';

// Add jest-axe matcher
expect.extend(toHaveNoViolations);

import ComponentName from './ComponentName';

describe('ComponentName', () => {
  const defaultProps = {
    // Define default props for testing
  };

  beforeEach(() => {
    // Reset mocks and setup
  });

  describe('Rendering', () => {
    it('renders with required props', () => {
      render(<ComponentName {...defaultProps} />);
      // Test basic rendering
    });

    it('applies custom className correctly', () => {
      const customClass = 'custom-class';
      render(<ComponentName {...defaultProps} className={customClass} />);
      // Test className application
    });
  });

  describe('User Interactions', () => {
    it('handles click events', async () => {
      const user = userEvent.setup();
      const mockHandler = vi.fn();
      
      render(<ComponentName {...defaultProps} onClick={mockHandler} />);
      
      // Test user interactions
    });

    it('supports keyboard navigation', async () => {
      const user = userEvent.setup();
      render(<ComponentName {...defaultProps} />);
      
      // Test keyboard accessibility
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<ComponentName {...defaultProps} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('manages focus correctly', () => {
      render(<ComponentName {...defaultProps} />);
      // Test focus management
    });
  });

  describe('Error Handling', () => {
    it('handles invalid props gracefully', () => {
      // Test error boundaries and prop validation
    });

    it('displays error states correctly', () => {
      // Test error UI states
    });
  });

  describe('PS2 Theme Integration', () => {
    it('maintains theme consistency', () => {
      render(<ComponentName {...defaultProps} />);
      // Test PS2-specific styling and behavior
    });
  });
});
```

## Testing PS2-Specific Features

### Animation Testing
- Test CSS transitions and animations complete correctly
- Verify hover states and interactive feedback
- Test timing and duration of retro-style effects

### Theme Integration
- Verify component matches PS2 color scheme
- Test responsive behavior on different screen sizes  
- Ensure consistency with other portfolio components

### Gaming Interface Elements
- Test memory card slot interactions
- Verify game selection and navigation
- Test sound/visual feedback (if applicable)

## Mock Strategies

### External Dependencies
```typescript
// Mock external libraries
vi.mock('@/lib/utils', () => ({
  cn: vi.fn((...args) => args.filter(Boolean).join(' ')),
}));

// Mock React Router if used
vi.mock('react-router-dom', () => ({
  useNavigate: () => vi.fn(),
  useLocation: () => ({ pathname: '/' }),
}));
```

### Component Mocks
```typescript
// Mock child components when testing parent logic
vi.mock('./ChildComponent', () => {
  return {
    default: ({ children, ...props }: any) => (
      <div data-testid="child-component" {...props}>
        {children}
      </div>
    ),
  };
});
```

## Coverage Goals

Aim for comprehensive coverage:
- All component branches and states
- User interaction paths
- Accessibility features
- Error conditions
- Integration with shared utilities

Run tests with: `bun run test`
Check coverage with: `bun run test --coverage`