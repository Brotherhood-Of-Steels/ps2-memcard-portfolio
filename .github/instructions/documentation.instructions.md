---
applyTo: "**/*.md,**/*.tsx,**/*.ts"
description: "Documentation standards for the PS2 portfolio project"
---

# Documentation Standards

## Code Documentation

- Add JSDoc comments for all public functions and complex logic
- Document component props using TypeScript interfaces with descriptive comments
- Include usage examples for reusable components and custom hooks
- Explain non-obvious business logic and PS2-specific functionality
- Document any performance considerations or optimization techniques

## Component Documentation

- Include prop descriptions in TypeScript interfaces
- Document component behavior, especially for interactive elements  
- Explain any PS2-themed styling decisions or animations
- Note accessibility features and keyboard navigation support
- Provide usage examples in component docstrings

## README and Project Documentation

- Maintain clear project setup and development instructions
- Document the PS2 memory card theme and design decisions
- Include information about the technology stack choices
- Provide troubleshooting guidance for common development issues
- Keep deployment and build process documentation up to date

## API and Hook Documentation

- Document custom hook parameters, return values, and side effects
- Include examples of hook usage in different contexts
- Explain any complex state management logic
- Document error handling and edge cases
- Note any dependencies on browser APIs or external services

## Inline Comments

- Use comments sparingly, prefer self-documenting code
- Explain why something is done, not what is being done
- Comment complex algorithms or PS2-specific calculations
- Document workarounds or browser-specific fixes
- Include TODO comments with context and priorities

## Documentation Format

```typescript
/**
 * Renders a PS2 memory card slot with saved game data
 * 
 * @param gameData - Array of saved games to display
 * @param onSelect - Callback when a game is selected
 * @param isActive - Whether this slot is currently active
 * @returns JSX element representing the memory card slot
 * 
 * @example
 * ```tsx
 * <MemoryCardSlot 
 *   gameData={savedGames}
 *   onSelect={handleGameSelect}
 *   isActive={true}
 * />
 * ```
 */
```

## Markdown Standards

- Use consistent heading hierarchy (# for main sections, ## for subsections)
- Include code blocks with appropriate syntax highlighting  
- Use descriptive link text and verify all links work
- Include screenshots or GIFs for visual features when helpful
- Keep line lengths reasonable for better readability