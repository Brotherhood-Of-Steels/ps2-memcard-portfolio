---
agent: 'agent'
model: Claude Sonnet 4
tools: ['codebase', 'editFiles']
description: 'Generate a new React component following PS2 portfolio project patterns'
---

# Setup Component Prompt

You are tasked with creating a new React component for the PS2 Memory Card Portfolio project. Follow the established patterns and maintain consistency with the PS2 theme.

## Component Requirements

Ask the user for the following if not provided:
1. **Component Name** (PascalCase)
2. **Component Purpose** (what does it do?)
3. **Props Interface** (what data does it need?)
4. **Styling Approach** (Tailwind classes, animations needed?)

## Implementation Guidelines

### File Structure
Create the component in the appropriate directory:
- `/src/components/` for reusable UI components
- `/src/components/ui/` for shadcn/ui style components  
- `/src/pages/` for page-level components

### Component Template
```typescript
import React from 'react';
import { cn } from '@/lib/utils';

interface [ComponentName]Props {
  // Define props with TypeScript types
  className?: string;
  children?: React.ReactNode;
}

const [ComponentName]: React.FC<[ComponentName]Props> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div 
      className={cn(
        // Base styles
        // PS2-themed classes
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default [ComponentName];
```

## Style Guidelines

### PS2 Theme Consistency
- Use the established color palette from other components
- Include hover states and transitions for interactive elements
- Consider retro/gaming aesthetics in animations
- Ensure proper contrast ratios for accessibility

### Tailwind Usage
- Use utility classes following the project patterns
- Leverage responsive design with mobile-first approach
- Use consistent spacing and typography scale
- Apply focus states for keyboard navigation

## Accessibility Requirements

- Include proper ARIA attributes for screen readers
- Ensure keyboard navigation works correctly
- Use semantic HTML elements when appropriate
- Test color contrast meets WCAG 2.1 AA standards
- Implement focus management for interactive components

## Testing Considerations

After creating the component:
- Write basic render test
- Test prop handling and default values
- Test accessibility features
- Test responsive behavior
- Consider integration with existing components

## Integration Steps

1. Create the component file with proper TypeScript typing
2. Export from appropriate index file if needed
3. Add to Storybook or component documentation if applicable
4. Test the component in context within the application
5. Update any related documentation

Remember to maintain the PS2 memory card aesthetic while ensuring modern web standards and accessibility!