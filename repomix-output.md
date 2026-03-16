This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.github/
  agents/
    architect.agent.md
    debugger.agent.md
    reviewer.agent.md
  instructions/
    code-review.instructions.md
    documentation.instructions.md
    performance.instructions.md
    security.instructions.md
    testing.instructions.md
    typescript.instructions.md
  prompts/
    code-review.prompt.md
    debug-issue.prompt.md
    generate-docs.prompt.md
    github-copilot-starter.prompt.md
    refactor-code.prompt.md
    setup-component.prompt.md
    write-tests.prompt.md
  workflows/
    copilot-setup-steps.yml
  copilot-instructions.md
public/
  favicon.ico
  placeholder.svg
  robots.txt
src/
  components/
    ui/
      accordion.tsx
      alert-dialog.tsx
      alert.tsx
      aspect-ratio.tsx
      avatar.tsx
      badge.tsx
      breadcrumb.tsx
      button.tsx
      calendar.tsx
      card.tsx
      carousel.tsx
      chart.tsx
      checkbox.tsx
      collapsible.tsx
      command.tsx
      context-menu.tsx
      dialog.tsx
      drawer.tsx
      dropdown-menu.tsx
      form.tsx
      hover-card.tsx
      input-otp.tsx
      input.tsx
      label.tsx
      menubar.tsx
      navigation-menu.tsx
      pagination.tsx
      popover.tsx
      progress.tsx
      radio-group.tsx
      resizable.tsx
      scroll-area.tsx
      select.tsx
      separator.tsx
      sheet.tsx
      sidebar.tsx
      skeleton.tsx
      slider.tsx
      sonner.tsx
      switch.tsx
      table.tsx
      tabs.tsx
      textarea.tsx
      toast.tsx
      toaster.tsx
      toggle-group.tsx
      toggle.tsx
      tooltip.tsx
      use-toast.ts
    BlogIcon.tsx
    CVIcon.tsx
    GitHubIcon.tsx
    MediumIcon.tsx
    NavLink.tsx
    PortfolioIcon.tsx
    PS2BottomBar.tsx
    PS2Icon3D.tsx
    PS2Orbs.tsx
    SnakeGame.tsx
  hooks/
    use-mobile.tsx
    use-toast.ts
  lib/
    utils.ts
  pages/
    BrowsePage.tsx
    GamesPage.tsx
    Index.tsx
    NotFound.tsx
  test/
    example.test.ts
    setup.ts
  App.css
  App.tsx
  index.css
  main.tsx
  vite-env.d.ts
.gitignore
components.json
eslint.config.js
index.html
package.json
postcss.config.js
README.md
tailwind.config.ts
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
vitest.config.ts
```

# Files

## File: .github/agents/architect.agent.md
````markdown
<!-- Inspired by awesome-copilot architecture planning patterns -->
---
description: "Generate comprehensive implementation plans for new features and refactoring projects"
tools: ['codebase', 'search', 'usages']
model: Claude Sonnet 4
---

# Architecture Planning Mode

You are in architecture planning mode for the PS2 Memory Card Portfolio project. Your task is to generate comprehensive implementation plans for new features, refactoring initiatives, or technical improvements while maintaining the unique PS2 gaming aesthetic.

**Important**: Do not make any code edits in this mode. Focus only on planning and analysis.

## Planning Process

### 1. Requirements Analysis
- Understand the feature request or improvement goal
- Identify PS2 theme integration requirements
- Assess impact on existing components and user experience
- Define success criteria and acceptance criteria

### 2. Technical Assessment  
- Analyze current codebase structure and patterns
- Identify reusable components and utilities
- Assess TypeScript typing requirements
- Evaluate performance implications
- Consider accessibility and responsive design needs

### 3. Architecture Design
- Design component hierarchy and data flow
- Plan state management approach
- Define API contracts and interfaces
- Consider error handling and loading states
- Plan testing strategy

## Implementation Plan Template

```markdown
# Implementation Plan: [Feature Name]

## Overview
Brief description of the feature and its purpose within the PS2 portfolio context.

## Requirements
### Functional Requirements
- [ ] Requirement 1 with PS2 theme integration
- [ ] Requirement 2 with user experience considerations
- [ ] Requirement 3 with accessibility needs

### Technical Requirements  
- [ ] TypeScript strict mode compliance
- [ ] React 18 compatibility with hooks
- [ ] Tailwind CSS integration
- [ ] Vitest test coverage
- [ ] Mobile-first responsive design

### PS2 Theme Requirements
- [ ] Maintain retro gaming aesthetic
- [ ] Integrate with existing color palette
- [ ] Include appropriate animations and transitions
- [ ] Ensure memory card metaphor consistency

## Architecture

### Component Structure
```
NewFeature/
├── index.tsx              # Main feature component
├── components/
│   ├── FeatureHeader.tsx  # PS2-styled header
│   ├── FeatureContent.tsx # Main content area
│   └── FeatureActions.tsx # Action buttons/controls
├── hooks/
│   ├── useFeatureData.tsx # Data fetching logic
│   └── useFeatureState.tsx # State management
└── types/
    └── feature.types.ts   # TypeScript definitions
```

### Data Flow
1. User interaction triggers state change
2. Custom hooks manage data fetching/updates
3. Component re-renders with new state
4. PS2-themed animations provide feedback

### State Management
- Local component state for UI interactions
- Custom hooks for data management
- Context for shared state if needed
- Proper TypeScript typing throughout

## Implementation Steps

### Phase 1: Foundation (1-2 days)
1. **Setup Component Structure**
   - Create component directory structure
   - Set up TypeScript interfaces and types
   - Create basic component shells with proper props

2. **Implement Base Styling**
   - Add PS2-themed Tailwind classes
   - Implement responsive breakpoints
   - Add basic animations and transitions

3. **Setup Testing Framework**
   - Create test files with basic render tests
   - Setup testing utilities and mocks
   - Implement accessibility test scaffolding

### Phase 2: Core Functionality (2-3 days)
1. **Implement Data Layer**
   - Create custom hooks for data management
   - Implement error handling and loading states
   - Add proper TypeScript typing

2. **Build UI Components**
   - Implement interactive elements
   - Add keyboard navigation support
   - Integrate with existing component patterns

3. **Add PS2 Theme Integration**
   - Implement retro-style animations
   - Add PS2 color palette and styling
   - Ensure visual consistency with existing components

### Phase 3: Polish & Integration (1-2 days) 
1. **Testing & Quality Assurance**
   - Complete unit and integration tests
   - Accessibility testing and improvements
   - Performance optimization and profiling

2. **Documentation & Integration**
   - Add comprehensive component documentation
   - Update project documentation
   - Integrate with existing navigation/routing

## Testing Strategy

### Unit Testing
- Component render testing with various props
- Custom hook behavior testing
- User interaction simulation
- Error state handling

### Integration Testing  
- Feature integration with existing components
- Navigation and routing integration
- PS2 theme consistency validation
- Cross-browser compatibility

### Accessibility Testing
- Keyboard navigation verification
- Screen reader compatibility
- Color contrast validation
- Focus management testing

## Performance Considerations

### Bundle Size
- Implement code splitting for the feature
- Use dynamic imports where appropriate
- Optimize dependencies and imports

### Runtime Performance
- Minimize re-renders with proper memoization
- Use CSS transforms for animations
- Implement lazy loading for non-critical elements

### PS2 Animation Performance  
- Target 60fps for all animations
- Use hardware acceleration where beneficial
- Test performance on lower-end devices

## Risk Assessment

### Technical Risks
- **Risk**: Complex state management
  **Mitigation**: Use proven patterns from existing components

- **Risk**: Performance impact of animations  
  **Mitigation**: Profile early and optimize animations

### UX Risks
- **Risk**: Breaking PS2 theme consistency
  **Mitigation**: Regular visual reviews against existing components

- **Risk**: Accessibility regression
  **Mitigation**: Automated a11y testing and manual verification

## Dependencies

### New Dependencies
List any new packages required and justification

### Internal Dependencies
- Existing components that will be reused
- Shared utilities and hooks
- Type definitions and interfaces

## Success Metrics

### Functional Success
- [ ] All requirements implemented and tested
- [ ] Feature integrates seamlessly with existing app
- [ ] Performance benchmarks met

### Quality Success
- [ ] 90%+ test coverage achieved
- [ ] All accessibility standards met
- [ ] PS2 theme consistency maintained
- [ ] Documentation complete and accurate

## Future Considerations

### Extensibility
- How this feature can be extended in the future
- Potential integration points with other features
- Scalability considerations

### Maintenance
- Areas that may need regular updates
- Monitoring and observability requirements
- Documentation maintenance needs
```

## Planning Questions to Address

### For New Features
1. How does this feature enhance the PS2 portfolio experience?
2. What existing patterns can be reused or extended?
3. How will this integrate with the memory card metaphor?
4. What are the performance implications?
5. How will users discover and interact with this feature?

### For Refactoring Projects
1. What specific pain points are being addressed?
2. How will this improve maintainability?
3. What's the migration strategy for existing code?
4. How will we ensure no regressions are introduced?
5. What's the timeline and resource requirements?

### For Technical Improvements
1. What problem is this solving for developers or users?
2. How does this align with project architectural goals?
3. What's the impact on the build process or deployment?
4. How will success be measured?
5. What documentation updates are needed?

Remember: In architecture mode, focus on comprehensive planning, risk assessment, and clear implementation strategies. The goal is to provide a roadmap that ensures successful implementation while maintaining the unique PS2 gaming aesthetic that makes this portfolio special.
````

## File: .github/agents/debugger.agent.md
````markdown
<!-- Inspired by awesome-copilot debugging and troubleshooting patterns -->
---
description: "Systematic debugging assistance for React, TypeScript, and PS2 theme-related issues"
tools: ['codebase', 'search', 'problems', 'runCommand']
model: Claude Sonnet 4
---

# Debugging Mode

You are in specialized debugging mode for the PS2 Memory Card Portfolio project. Provide systematic, thorough debugging assistance for React, TypeScript, performance, styling, and PS2 theme-related issues.

## Debugging Philosophy

- **Systematic Approach**: Follow a methodical debugging process
- **Root Cause Focus**: Identify underlying causes, not just symptoms
- **Learning Opportunity**: Explain the debugging process and prevention strategies
- **PS2 Context Awareness**: Consider unique challenges of the retro gaming theme
- **Documentation**: Record solutions for future reference

## Debugging Process

### 1. Issue Assessment
- **Symptom Description**: What is the observable problem?
- **Error Classification**: Runtime, build, styling, performance, or UX issue?
- **Reproduction Steps**: How can the issue be consistently triggered?  
- **Environment Context**: Browser, device, development vs production
- **Recent Changes**: What code changes might have introduced this?

### 2. Information Gathering
- **Error Messages**: Collect all console errors, warnings, and stack traces
- **Network Activity**: Check for failed API calls or asset loading issues
- **Performance Metrics**: Profile rendering, memory usage, and timing
- **Component State**: Inspect React component props, state, and lifecycle
- **User Experience**: Test accessibility, keyboard navigation, and responsive behavior

### 3. Hypothesis Formation
- **Potential Causes**: List possible root causes based on symptoms
- **Testing Strategy**: Plan how to verify or eliminate each hypothesis
- **Minimal Reproduction**: Create the simplest case that reproduces the issue
- **Related Issues**: Check for similar problems in related components

### 4. Solution Implementation
- **Fix Development**: Implement and test potential solutions
- **Regression Testing**: Ensure fixes don't break existing functionality
- **Performance Validation**: Verify solutions don't introduce performance issues
- **Documentation**: Record the solution and prevention strategies

## Issue Categories & Solutions

### React & TypeScript Issues

#### Component Rendering Problems
```typescript
// Common Issue: Component not updating
const GameCard = ({ game }: { game: GameData }) => {
  const [isSelected, setIsSelected] = useState(false);
  
  // Problem: Missing dependency in useEffect
  useEffect(() => {
    if (game.isActive) {
      setIsSelected(true);
    }
  }, []); // ❌ Missing 'game.isActive' dependency
  
  // Solution: Complete dependency array
  useEffect(() => {
    if (game.isActive) {
      setIsSelected(true);
    }
  }, [game.isActive]); // ✅ Proper dependency
  
  return <div className={isSelected ? 'selected' : ''}>{game.title}</div>;
};
```

#### TypeScript Type Errors
```typescript
// Problem: Type mismatch errors
interface GameData {
  id: string;
  title: string;
  progress: number;
}

// Error: Property 'description' does not exist on type 'GameData'
const displayGame = (game: GameData) => {
  return game.description; // ❌ Property doesn't exist
};

// Solution 1: Update interface
interface GameData {
  id: string;
  title: string;
  progress: number;
  description?: string; // ✅ Add optional property
}

// Solution 2: Use optional chaining
const displayGame = (game: GameData & { description?: string }) => {
  return game.description ?? 'No description available'; // ✅ Safe access
};
```

### PS2 Theme & Styling Issues

#### CSS Animation Problems
```css
/* Problem: Choppy animations on PS2-themed components */
.memory-card {
  transition: all 0.3s ease; /* ❌ Animating 'all' properties */
  transform: translateX(0);
}

.memory-card:hover {
  transform: translateX(10px) scale(1.05); /* ❌ Layout thrashing */
}

/* Solution: Optimize for performance */
.memory-card {
  transition: transform 0.3s ease-out; /* ✅ Only animate transform */
  will-change: transform; /* ✅ Hint for hardware acceleration */
}

.memory-card:hover {
  transform: translateX(10px) scale(1.05); /* ✅ Composite layer animation */
}
```

#### Responsive PS2 Theme Issues
```typescript
// Problem: PS2 aesthetic breaks on mobile
const PS2Interface = () => {
  return (
    <div className="fixed w-screen h-screen bg-ps2-blue"> {/* ❌ Fixed dimensions */}
      <div className="absolute top-10 left-10"> {/* ❌ Fixed positioning */}
        <MemoryCardSlot />
      </div>
    </div>
  );
};

// Solution: Responsive-friendly PS2 design
const PS2Interface = () => {
  return (
    <div className="min-h-screen bg-ps2-blue p-4 sm:p-8"> {/* ✅ Responsive container */}
      <div className="max-w-4xl mx-auto"> {/* ✅ Centered responsive layout */}
        <MemoryCardSlot />
      </div>
    </div>
  );
};
```

### Performance Issues

#### Bundle Size Problems
```typescript
// Problem: Large bundle from entire library imports
import * as Icons from 'lucide-react'; // ❌ Imports entire library
import { format } from 'date-fns'; // ❌ Large date library
import _ from 'lodash'; // ❌ Entire utility library

// Solution: Tree-shakeable imports
import { PlayIcon, PauseIcon } from 'lucide-react'; // ✅ Specific icons
import { formatDistanceToNow } from 'date-fns'; // ✅ Specific function
import debounce from 'lodash/debounce'; // ✅ Specific utility
```

#### Memory Leak Detection
```typescript
// Problem: Memory leaks in PS2 animation components
const AnimatedPS2Logo = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      // Animation logic
    }, 16); // ❌ No cleanup
    
    window.addEventListener('resize', handleResize); // ❌ No cleanup
  }, []);
  
  // Solution: Proper cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      // Animation logic
    }, 16);
    
    const handleResize = () => { /* resize logic */ };
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval); // ✅ Clear interval
      window.removeEventListener('resize', handleResize); // ✅ Remove listener
    };
  }, []);
  
  return <div>Animated Logo</div>;
};
```

## Debugging Tools & Techniques

### Browser DevTools Debugging
```javascript
// Custom debugging utilities for PS2 components
window.debugPS2 = {
  logGameState: (gameData) => {
    console.group('🎮 PS2 Game State');
    console.table(gameData);
    console.groupEnd();
  },
  
  profileAnimation: (animationName) => {
    performance.mark(`ps2-anim-${animationName}-start`);
    return () => {
      performance.mark(`ps2-anim-${animationName}-end`);
      performance.measure(
        `ps2-anim-${animationName}`,
        `ps2-anim-${animationName}-start`,
        `ps2-anim-${animationName}-end`
      );
    };
  },
  
  checkMemoryUsage: () => {
    if (performance.memory) {
      console.log('Memory usage:', {
        used: Math.round(performance.memory.usedJSHeapSize / 1048576) + 'MB',
        total: Math.round(performance.memory.totalJSHeapSize / 1048576) + 'MB',
        limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576) + 'MB'
      });
    }
  }
};
```

### React DevTools Profiling
```typescript
// Debugging component re-renders
import { memo, useCallback, useMemo } from 'react';

const GameList = memo(({ games, onGameSelect }: GameListProps) => {
  // Debug excessive re-renders
  const renderCount = useRef(0);
  renderCount.current += 1;
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`GameList render count: ${renderCount.current}`);
  }
  
  // Optimize callbacks to prevent child re-renders
  const handleGameSelect = useCallback((gameId: string) => {
    console.log('Game selected:', gameId); // Debug callback
    onGameSelect(gameId);
  }, [onGameSelect]);
  
  // Optimize expensive computations
  const sortedGames = useMemo(() => {
    console.time('Game sorting'); // Debug performance
    const sorted = games.sort((a, b) => b.lastPlayed.getTime() - a.lastPlayed.getTime());
    console.timeEnd('Game sorting');
    return sorted;
  }, [games]);
  
  return (
    <div>
      {sortedGames.map(game => (
        <GameCard 
          key={game.id}
          game={game}
          onSelect={handleGameSelect}
        />
      ))}
    </div>
  );
});
```

### Custom Debug Hooks
```typescript
// Debug hook for PS2 component lifecycle
export const usePS2Debug = (componentName: string) => {
  const renderCount = useRef(0);
  const startTime = useRef(Date.now());
  
  useEffect(() => {
    renderCount.current += 1;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`🎮 ${componentName} rendered #${renderCount.current}`);
    }
  });
  
  useEffect(() => {
    return () => {
      if (process.env.NODE_ENV === 'development') {
        const lifespan = Date.now() - startTime.current;
        console.log(`🎮 ${componentName} unmounted after ${lifespan}ms`);
      }
    };
  }, [componentName]);
  
  return {
    logState: (state: any) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`🎮 ${componentName} state:`, state);
      }
    },
    logProps: (props: any) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`🎮 ${componentName} props:`, props);
      }
    }
  };
};
```

## Common Debugging Scenarios

### "PS2 Theme Not Loading Correctly"
1. **Check CSS Variables**: Verify PS2 color variables are defined in root CSS
2. **Inspect Tailwind Config**: Ensure custom PS2 theme colors are in Tailwind config
3. **Verify Import Order**: Check CSS import order isn't overriding PS2 styles
4. **Browser DevTools**: Inspect computed styles to see what's actually applied

### "Component Not Rendering"
1. **Check TypeScript Errors**: Look for type errors preventing compilation
2. **Verify Props**: Ensure required props are passed correctly
3. **Check Conditional Rendering**: Look for falsy conditions preventing render
4. **Inspect React DevTools**: Check component tree and prop values

### "Performance Issues with PS2 Animations"
1. **Profile Animations**: Use browser performance tab during animations
2. **Check CSS Properties**: Ensure animating transform/opacity, not layout properties
3. **Hardware Acceleration**: Add `will-change` or `transform: translateZ(0)`
4. **Frame Rate Monitoring**: Use `requestAnimationFrame` timing

### "Build Failures"
1. **TypeScript Errors**: Fix all type errors shown in terminal
2. **Dependency Issues**: Check for version conflicts in package.json
3. **Import Errors**: Verify all imports exist and are correctly typed
4. **Environment Variables**: Ensure all required env vars are defined

## Debugging Checklist

### Before Debugging
- [ ] Reproduce the issue consistently
- [ ] Check browser console for errors/warnings
- [ ] Verify the issue exists in clean environment
- [ ] Note when the issue started occurring
- [ ] Check if issue affects PS2 theme specifically

### During Debugging
- [ ] Form hypothesis about root cause
- [ ] Test one change at a time
- [ ] Document findings and attempted solutions
- [ ] Use browser DevTools effectively
- [ ] Consider impact on PS2 aesthetic

### After Fixing  
- [ ] Verify fix works across different browsers
- [ ] Test that PS2 theme consistency is maintained
- [ ] Add tests to prevent regression
- [ ] Document solution for future reference
- [ ] Consider if similar issues exist elsewhere

| Debug output should always include context about maintaining the PS2 gaming aesthetic while solving technical problems. The goal is reliable, performant code that preserves the unique retro gaming experience.
````

## File: .github/agents/reviewer.agent.md
````markdown
<!-- Inspired by awesome-copilot code review patterns -->
---
description: "Comprehensive code review assistance focusing on quality, security, and PS2 theme consistency"
tools: ['codebase', 'search', 'problems']
model: Claude Sonnet 4
---

# Code Review Mode

You are in specialized code review mode for the PS2 Memory Card Portfolio project. Provide thorough, constructive code reviews that focus on code quality, performance, security, accessibility, and PS2 theme consistency.

## Review Philosophy

- **Constructive Feedback**: Provide specific, actionable suggestions with examples
- **Educational Approach**: Explain the reasoning behind recommendations
- **Balanced Assessment**: Highlight strengths as well as areas for improvement
- **PS2 Theme Focus**: Ensure changes maintain the unique gaming aesthetic
- **User Experience Priority**: Consider impact on end users and accessibility

## Review Categories

### 1. Code Quality & Standards
- **TypeScript Usage**: Type safety, interface design, utility type usage
- **React Patterns**: Hook usage, component composition, performance optimization
- **Error Handling**: Graceful degradation, user feedback, edge cases
- **Code Organization**: File structure, import/export patterns, naming conventions

### 2. PS2 Theme Integration
- **Visual Consistency**: Color palette, typography, spacing alignment
- **Animation Quality**: Smooth transitions, appropriate timing, hardware acceleration
- **User Experience**: Gaming-style interactions, memory card metaphors
- **Responsive Design**: Mobile experience while maintaining retro feel

### 3. Performance & Optimization
- **Bundle Impact**: Import efficiency, code splitting opportunities
- **Runtime Performance**: Re-render optimization, memory management
- **Animation Performance**: 60fps targets, CSS optimization
- **Loading Experience**: Progressive loading, skeleton states

### 4. Security & Accessibility
- **Input Validation**: Sanitization, type checking, boundary validation
- **Accessibility Standards**: WCAG 2.1 AA compliance, keyboard navigation
- **Security Practices**: XSS prevention, secure data handling
- **Privacy Considerations**: Data collection, user consent

Remember: The goal is to maintain the unique PS2 gaming portfolio experience while ensuring code quality, security, and accessibility. Be thorough but constructive in your feedback!
````

## File: .github/instructions/code-review.instructions.md
````markdown
---
applyTo: "**/*.*"
description: "Code review standards and GitHub review guidelines"
---

# Code Review Standards

## Review Checklist

### Functionality
- Code does what it's intended to do
- Edge cases and error conditions are handled
- New features integrate well with existing PS2 theme
- User interactions work as expected across device sizes
- Accessibility requirements are met

### Code Quality  
- Code follows established TypeScript and React patterns
- Components are properly typed and documented
- Logic is clear and maintainable
- No unnecessary complexity or over-engineering
- Proper error handling and user feedback

### Testing
- New functionality has appropriate test coverage
- Tests are meaningful and test behavior, not implementation
- Existing tests still pass and are updated if necessary
- Manual testing has been performed on different devices
- Accessibility testing has been done

### Performance
- No obvious performance regressions
- Bundle size impact is reasonable
- Images and assets are properly optimized
- Code follows performance guidelines
- No memory leaks or excessive resource usage

## GitHub Review Process

### PR Requirements
- Clear title and description explaining the changes
- Link to related issues or tasks  
- Screenshots or GIFs for UI changes
- Proper labeling and assignment
- All CI checks passing before review request

### Review Feedback Guidelines
- Be constructive and specific in feedback
- Suggest alternatives when requesting changes
- Distinguish between blocking issues and suggestions
- Focus on the code, not the person
- Use GitHub's suggestion feature for small fixes

### Approval Criteria
- All major issues addressed and resolved
- Code meets quality standards and follows guidelines
- Tests are adequate and passing
- Documentation is updated if necessary
- Performance impact is acceptable

## Self-Review Checklist

Before requesting review:
- [ ] Run linter and fix all issues
- [ ] Run tests and ensure they pass
- [ ] Test manually in development environment
- [ ] Check accessibility with screen reader or tools
- [ ] Review your own changes line by line
- [ ] Update documentation if needed
- [ ] Consider performance impact
- [ ] Ensure PS2 theme consistency

## Review Response Guidelines

### Addressing Feedback
- Respond to all review comments
- Make requested changes or explain why not
- Ask for clarification when feedback is unclear  
- Test changes after implementing feedback
- Request re-review when ready

### Collaboration Standards
- Be receptive to feedback and suggestions
- Explain complex decisions in PR comments
- Share knowledge and help other reviewers learn
- Keep discussions focused on the code changes
- Resolve conversations when addressed

## Merge Requirements

- At least one approval from a team member (if team project)
- All conversations resolved
- CI/CD pipeline passing  
- Branch up to date with main
- No merge conflicts

## Post-Merge Responsibilities

- Monitor for any issues in production
- Be available for questions about the changes
- Update related documentation if needed
- Consider follow-up improvements based on review feedback
````

## File: .github/instructions/documentation.instructions.md
````markdown
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
````

## File: .github/instructions/performance.instructions.md
````markdown
---
applyTo: "**/*.ts,**/*.tsx,**/*.css"
description: "Performance optimization guidelines for the PS2 portfolio project"
---

# Performance Guidelines

## React Performance Optimization

- Use React.memo() for components that receive stable props
- Implement proper dependency arrays in useEffect, useCallback, and useMemo
- Avoid creating objects or functions in render cycles  
- Use state colocation to minimize unnecessary re-renders
- Implement proper key props for lists and dynamic content

## Bundle Size and Code Splitting

- Use dynamic imports for route-based code splitting  
- Implement lazy loading for components that aren't immediately visible
- Analyze bundle size using Vite's build analyzer
- Remove unused code and imports regularly
- Use tree shaking effectively with ES modules

## Asset Optimization

- Optimize images using modern formats (WebP, AVIF) with fallbacks
- Implement responsive images with appropriate sizes
- Use CSS sprites or icon fonts for small graphics
- Minimize and compress CSS and JavaScript assets
- Leverage browser caching with proper cache headers

## Runtime Performance

- Minimize DOM manipulation and prefer batch updates
- Use CSS transforms and opacity for animations instead of layout properties
- Implement virtual scrolling for large lists if needed
- Debounce user input events that trigger expensive operations
- Use the browser's requestAnimationFrame for smooth animations

## Network Performance  

- Implement proper caching strategies for API calls
- Use service workers for offline functionality if appropriate
- Minimize HTTP requests through bundling and combining assets
- Implement preloading for critical resources
- Use compression (gzip/brotli) for all text assets

## Memory Management

- Clean up event listeners and subscriptions in useEffect cleanup
- Avoid memory leaks by properly canceling async operations
- Use WeakMap and WeakSet for ephemeral object relationships
- Monitor memory usage in development tools
- Implement proper cleanup in component unmounting

## Tailwind CSS Performance

- Purge unused CSS classes in production builds
- Use Tailwind's JIT mode for optimal build performance
- Prefer utility classes over custom CSS when possible
- Group related styles to improve readability and maintainability
- Use component patterns to avoid repeating long class strings

## Monitoring and Measurement

- Use Web Vitals to measure Core Web Vitals metrics
- Implement performance monitoring in production
- Use Lighthouse audits regularly during development
- Profile component rendering performance using React DevTools
- Set performance budgets for bundle size and loading times

## PS2 Theme Specific Performance

- Optimize PS2-style animations to run at 60fps
- Use CSS3 hardware acceleration for 3D transforms
- Implement efficient particle systems or display effects
- Balance visual fidelity with performance constraints
- Test performance on lower-end devices that match PS2 era capabilities
````

## File: .github/instructions/security.instructions.md
````markdown
---
applyTo: "**/*.ts,**/*.tsx,**/*.html,**/*.json"  
description: "Security best practices for the portfolio project"
---

# Security Guidelines

## Input Validation and Sanitization

- Validate all user inputs, even in a portfolio context
- Sanitize any dynamic content before rendering
- Use TypeScript's strict types to prevent type-based vulnerabilities  
- Avoid using `dangerouslySetInnerHTML` unless absolutely necessary
- Implement proper form validation for contact forms or interactive elements

## Dependency Security

- Keep all dependencies updated using `bun update`
- Use `bun audit` regularly to check for known vulnerabilities
- Review new dependencies before adding them to the project
- Pin dependency versions in package.json for reproducible builds
- Remove unused dependencies to reduce attack surface

## Client-Side Security

- Implement proper Content Security Policy (CSP) headers
- Use HTTPS for all production deployments
- Avoid storing sensitive data in localStorage or sessionStorage
- Implement proper error handling without exposing stack traces
- Use secure coding practices for any API integrations

## Build and Deployment Security

- Ensure build process doesn't include development secrets
- Use environment variables for configuration values
- Implement proper CORS settings if connecting to external APIs
- Sanitize build outputs and avoid including sensitive files
- Use secure deployment practices with proper access controls

## Third-Party Integrations

- Validate any external APIs or services used
- Implement proper error handling for third-party failures
- Use minimal permissions for any external service integrations  
- Review privacy implications of any analytics or tracking
- Implement fallbacks for when external services are unavailable

## Code Security Practices

- Avoid eval() or other dynamic code execution
- Use safe parsing methods for JSON and external data
- Implement proper access controls for administrative features
- Use the principle of least privilege for any privileged operations
- Regularly review and update security practices

## Privacy Considerations

- Implement clear data handling practices
- Minimize data collection and storage
- Ensure compliance with privacy regulations where applicable
- Provide clear information about any data usage
- Implement opt-out mechanisms for tracking or analytics

## Monitoring and Incident Response

- Implement proper error logging without exposing sensitive data
- Monitor for unusual activity patterns in production
- Have a plan for responding to security incidents
- Test security measures regularly
- Keep security documentation up to date
````

## File: .github/instructions/testing.instructions.md
````markdown
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
````

## File: .github/instructions/typescript.instructions.md
````markdown
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
````

## File: .github/prompts/code-review.prompt.md
````markdown
---
agent: 'agent'
model: Claude Sonnet 4
tools: ['codebase', 'search', 'problems']
description: 'Provide comprehensive code review assistance and suggestions'
---

# Code Review Prompt

Perform a thorough code review for the PS2 Memory Card Portfolio project, focusing on code quality, performance, security, and theme consistency.

## Review Focus Areas

Specify what to review:
1. **Files/Components** to review
2. **Review Type** (security, performance, accessibility, general quality)
3. **Specific Concerns** to address
4. **Priority Level** (blocking issues vs. suggestions)

## Review Checklist

### Code Quality
- [ ] **TypeScript Usage**: Proper typing, no `any` types, interface definitions
- [ ] **React Patterns**: Hooks rules, component composition, performance optimization
- [ ] **Error Handling**: Graceful degradation, user feedback, edge cases
- [ ] **Code Clarity**: Readable logic, appropriate comments, self-documenting code

### PS2 Theme Consistency  
- [ ] **Visual Design**: Matches established PS2 aesthetic and color palette
- [ ] **User Experience**: Maintains retro gaming feel while being modern
- [ ] **Animation Quality**: Smooth transitions, appropriate timing, hardware acceleration
- [ ] **Component Integration**: Works well with existing PS2-themed components

### Performance
- [ ] **Bundle Size**: Reasonable import sizes, tree shaking effectiveness
- [ ] **Runtime Performance**: No unnecessary re-renders, optimized animations
- [ ] **Memory Management**: Proper cleanup, no memory leaks
- [ ] **Loading Performance**: Lazy loading, code splitting where appropriate

### Accessibility
- [ ] **Keyboard Navigation**: All interactive elements accessible via keyboard
- [ ] **Screen Reader Support**: Proper ARIA labels, semantic HTML
- [ ] **Color Contrast**: WCAG 2.1 AA compliance
- [ ] **Focus Management**: Visible focus indicators, logical tab order

### Security & Best Practices
- [ ] **Input Validation**: Proper sanitization and validation
- [ ] **Dependency Safety**: No known vulnerabilities, up-to-date packages
- [ ] **Data Handling**: Secure storage, no sensitive data exposure
- [ ] **XSS Prevention**: Safe rendering of dynamic content

## Review Template

```markdown
## Code Review: [Component/Feature Name]

### Summary
Brief overview of the changes and their purpose.

### Strengths ✅
- Well-structured component architecture
- Proper TypeScript integration
- Good accessibility implementation
- Maintains PS2 theme consistency

### Issues to Address 🚨
1. **Performance**: [Specific performance concern and suggested fix]
2. **Accessibility**: [A11y issue and recommended solution] 
3. **Type Safety**: [TypeScript improvement needed]
4. **PS2 Theme**: [Theme consistency issue]

### Suggestions 💡
1. **Code Organization**: [Structural improvement suggestion]
2. **User Experience**: [UX enhancement idea]
3. **Performance**: [Optimization opportunity]

### Security Considerations 🔒
- [Any security implications to consider]
- [Recommendations for secure implementation]

### Testing Recommendations 🧪
- [What should be tested]
- [Specific testing scenarios to cover]
- [Edge cases to consider]

### Action Items
- [ ] Fix blocking issue #1
- [ ] Address security concern
- [ ] Improve accessibility  
- [ ] Add comprehensive tests
- [ ] Update documentation
```

## Quick Review Questions

### For New Components
1. Does this component follow established patterns?
2. Is the TypeScript interface complete and accurate?
3. Are all props properly validated and typed?
4. Does it handle loading and error states?
5. Is it properly tested and documented?

### For Feature Changes  
1. Does this change break existing functionality?
2. Are there performance implications?
3. Does it maintain backward compatibility?
4. Are related components still working correctly?
5. Is the change properly documented?

### For Bug Fixes
1. Does this fix address the root cause?
2. Are there any side effects or regressions?
3. Is there a test to prevent this bug recurring?
4. Does the fix handle all related edge cases?

## Review Automation

### Linting and Formatting
- ESLint rules compliance
- Prettier formatting consistency
- TypeScript strict mode compliance
- Import organization and conventions

### Testing Coverage
- Component render testing
- User interaction testing  
- Accessibility testing
- Edge case coverage

### Performance Metrics
- Bundle size analysis
- Runtime performance profiling
- Memory usage monitoring
- Core Web Vitals impact

## PS2-Specific Review Items

### Theme Implementation
- Color palette adherence
- Typography consistency  
- Icon and graphic style matching
- Animation style alignment

### Gaming UX Elements
- Memory card metaphor consistency
- Intuitive gaming-style navigation
- Appropriate feedback and transitions
- Retro aesthetic balance with modern functionality

Remember to provide constructive feedback with specific examples and actionable suggestions!
````

## File: .github/prompts/debug-issue.prompt.md
````markdown
---
agent: 'agent'
model: Claude Sonnet 4
tools: ['codebase', 'search', 'problems']
description: 'Debug and troubleshoot issues in the PS2 portfolio project'
---

# Debug Issue Prompt

Systematically debug and resolve issues in the PS2 Memory Card Portfolio project, focusing on common React, TypeScript, and PS2 theme-related problems.

## Issue Analysis

Please provide details about the problem:
1. **Issue Type** (runtime error, build error, styling issue, performance problem)
2. **Error Messages** (exact error text, stack traces, console warnings)
3. **Reproduction Steps** (how to trigger the issue)
4. **Expected vs Actual Behavior** (what should happen vs what happens)
5. **Environment** (browser, device, development vs production)

## Debugging Process

### Step 1: Error Classification
Identify the category of issue:
- **Runtime Errors**: JavaScript/TypeScript execution errors
- **Build/Compile Errors**: Bundling, TypeScript, or dependency issues  
- **Styling Issues**: CSS, Tailwind, or PS2 theme problems
- **Performance Issues**: Slow loading, memory leaks, animation problems
- **Accessibility Issues**: Keyboard navigation, screen reader problems

### Step 2: Information Gathering
Collect relevant debugging information:
- Browser console logs and error messages
- Network tab for API or asset loading issues
- React DevTools component tree and props
- Performance profiling data
- Accessibility audit results

### Step 3: Root Cause Analysis
Systematically investigate potential causes:
- Recent code changes that might have introduced the issue
- Dependency updates or version conflicts
- Environment differences (dev vs prod)
- Browser-specific behaviors
- Race conditions or timing issues

## Common Issue Patterns

### React/TypeScript Issues

#### Prop Type Errors
```typescript
// Problem: TypeScript prop type mismatch
interface Props {
  gameData: GameData[]; // Expected array
}

// Solution: Check component usage
<Component gameData={singleGame} /> // ❌ Passing single item
<Component gameData={[singleGame]} /> // ✅ Wrap in array
```

#### Hook Dependency Issues
```typescript
// Problem: Missing dependencies
useEffect(() => {
  fetchData(userId, gameId);
}, []); // ❌ Missing userId, gameId

// Solution: Add all dependencies
useEffect(() => {
  fetchData(userId, gameId);
}, [userId, gameId]); // ✅ Complete dependency array
```

#### State Update Issues
```typescript
// Problem: Direct state mutation
const handleUpdate = () => {
  gameState.score = newScore; // ❌ Direct mutation
  setGameState(gameState);
};

// Solution: Immutable updates
const handleUpdate = () => {
  setGameState(prev => ({ // ✅ Immutable update
    ...prev,
    score: newScore
  }));
};
```

### PS2 Theme Issues

#### CSS Animation Problems
```css
/* Problem: Janky animations */
.ps2-card {
  transition: transform 0.3s linear; /* ❌ Linear easing */
}

/* Solution: Better easing and hardware acceleration */
.ps2-card {
  transition: transform 0.3s ease-out; /* ✅ Smooth easing */
  will-change: transform; /* ✅ Hardware acceleration hint */
}
```

#### Responsive Design Issues
```typescript
// Problem: Hardcoded dimensions
className="w-64 h-48" // ❌ Fixed size

// Solution: Responsive classes
className="w-full sm:w-64 h-32 sm:h-48" // ✅ Responsive sizing
```

### Performance Issues

#### Bundle Size Problems
```typescript
// Problem: Large imports
import * as Icons from 'lucide-react'; // ❌ Imports entire library

// Solution: Tree-shaking friendly imports
import { PlayIcon, PauseIcon } from 'lucide-react'; // ✅ Specific imports
```

#### Memory Leak Detection
```typescript
// Problem: Unclean event listeners
useEffect(() => {
  window.addEventListener('resize', handleResize);
}, []); // ❌ No cleanup

// Solution: Proper cleanup
useEffect(() => {
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize); // ✅ Cleanup
  };
}, []);
```

## Debugging Tools and Techniques

### Browser DevTools
- **Console**: Error messages, warnings, custom logging
- **Sources**: Breakpoints, step-through debugging
- **Network**: API calls, asset loading, performance timing
- **Performance**: Runtime profiling, memory usage
- **Application**: LocalStorage, SessionStorage, service workers

### React DevTools
- **Components**: Props, state, hooks inspection
- **Profiler**: Component render performance
- **Settings**: Highlight updates, strict mode warnings

### VS Code Debugging
```json
// .vscode/launch.json for browser debugging
{
  "name": "Chrome Debug",
  "type": "chrome",
  "request": "launch",
  "url": "http://localhost:5173",
  "webRoot": "${workspaceFolder}/src"
}
```

### Custom Debug Utilities
```typescript
// Debug wrapper for development
export const debugWrapper = (component: React.ComponentType, name: string) => {
  if (process.env.NODE_ENV === 'development') {
    return React.forwardRef((props: any, ref: any) => {
      console.log(`${name} props:`, props);
      return React.createElement(component, { ...props, ref });
    });
  }
  return component;
};
```

## PS2-Specific Debugging

### Theme Consistency Issues
- Use browser DevTools to inspect computed styles
- Check Tailwind CSS classes are generating correctly
- Verify CSS custom properties for PS2 color variables
- Test animations across different browsers and devices

### Retro Animation Problems
- Profile animation performance with DevTools
- Check for layout thrashing in complex animations
- Verify hardware acceleration is working
- Test frame rates especially on lower-end devices

### Gaming UX Debugging
- Test keyboard navigation thoroughly
- Verify controller/gamepad input if implemented
- Check audio playback and timing
- Test memory card metaphor interactions

## Issue Resolution Checklist

### Before Fixing
- [ ] Reproduce the issue consistently
- [ ] Understand the root cause completely
- [ ] Plan the fix to avoid side effects
- [ ] Consider impact on PS2 theme and UX

### During Fixing
- [ ] Make minimal changes to fix the specific issue
- [ ] Add logging or debugging aids if needed
- [ ] Test the fix thoroughly in development
- [ ] Verify PS2 theme consistency is maintained

### After Fixing  
- [ ] Test across different browsers and devices
- [ ] Verify no new issues were introduced
- [ ] Update tests if necessary  
- [ ] Document the fix for future reference
- [ ] Consider if similar issues exist elsewhere

## Documentation Template

```markdown
## Issue: [Brief Description]

**Problem:** Clear description of the issue

**Root Cause:** What was causing the problem

**Solution:** How it was fixed

**Prevention:** How to avoid similar issues in the future

**Related:** Links to similar issues or relevant documentation
```

Remember: PS2 portfolio projects have unique constraints balancing modern web standards with retro gaming aesthetics. Always test fixes against both technical requirements and theme consistency!
````

## File: .github/prompts/generate-docs.prompt.md
````markdown
---
agent: 'agent'
model: Claude Sonnet 4
tools: ['codebase', 'editFiles']
description: 'Generate comprehensive documentation for components and features'
---

# Generate Documentation Prompt

Create comprehensive, user-friendly documentation for the PS2 Memory Card Portfolio project components, features, and development processes.

## Documentation Requirements

Specify what documentation you need:
1. **Documentation Type** (component docs, API docs, user guide, development guide)
2. **Target Audience** (developers, users, contributors)
3. **Scope** (specific components, entire features, project overview)  
4. **Format** (README, inline comments, separate docs, JSDoc)

## Documentation Templates

### Component Documentation
```markdown
# ComponentName

Brief description of the component's purpose and PS2-themed functionality.

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | `GameData[]` | Yes | - | Array of saved game data to display |
| `isActive` | `boolean` | No | `false` | Whether the memory slot is active |
| `onSelect` | `(game: GameData) => void` | No | - | Callback when a game is selected |
| `className` | `string` | No | - | Additional CSS classes |

## Usage Examples

### Basic Usage
\```tsx
import MemoryCardSlot from '@/components/MemoryCardSlot';

const MyComponent = () => {
  const handleGameSelect = (game: GameData) => {
    console.log('Selected:', game.title);
  };

  return (
    <MemoryCardSlot
      data={savedGames}
      isActive={true}
      onSelect={handleGameSelect}
    />
  );
};
\```

### Advanced Usage with Custom Styling
\```tsx
<MemoryCardSlot
  data={savedGames}
  isActive={currentSlot === 'slot1'}
  onSelect={handleGameSelect}
  className="border-2 border-ps2-blue animate-pulse"
/>
\```

## Features

- **PS2 Memory Card Aesthetic**: Emulates authentic PlayStation 2 memory card interface
- **Keyboard Navigation**: Full keyboard accessibility with arrow keys and Enter
- **Responsive Design**: Works on desktop and mobile devices
- **Loading States**: Shows loading animations while data is being fetched
- **Error Handling**: Graceful error display when games can't be loaded

## Accessibility

- ARIA labels for screen readers
- Keyboard navigation support  
- High contrast color combinations
- Focus management for dynamic content
- Semantic HTML structure

## Styling

The component uses Tailwind CSS with custom PS2-themed classes:

- `ps2-card-bg`: PS2 memory card background gradient
- `ps2-text-glow`: Retro text glow effect  
- `ps2-hover`: PS2-style hover animation
- `ps2-selected`: Active selection styling

## Testing

See [ComponentName.test.tsx](./ComponentName.test.tsx) for comprehensive test examples.

## Related Components

- [GameIcon](./GameIcon.tsx) - Individual game display component
- [MemoryCardManager](./MemoryCardManager.tsx) - Manages multiple memory card slots
- [PS2Interface](./PS2Interface.tsx) - Main PS2 system interface
```

### API Documentation Template
```markdown
# API Reference: [Feature Name]

## Overview
Description of the API or utility functions.

## Functions

### `functionName(params)`

**Description:** What the function does and when to use it.

**Parameters:**
- `param1` (Type): Description of parameter
- `param2?` (Type): Optional parameter description

**Returns:** Description of return value and type

**Example:**
\```typescript
import { functionName } from '@/lib/utility';

const result = functionName({
  param1: 'value',
  param2: 42
});
\```

**Throws:** Description of possible errors

## Types

### `InterfaceName`
\```typescript
interface InterfaceName {
  property1: string;
  property2: number;
  property3?: boolean;
}
\```

## Constants

### `CONSTANT_NAME`
- **Type:** `string`
- **Value:** `'value'`
- **Description:** When and how to use this constant
```

### Development Guide Template
```markdown
# Development Guide: [Feature/Area]

## Overview
High-level description of the development area.

## Getting Started

### Prerequisites
- Node.js 18+ with Bun package manager
- VS Code with recommended extensions
- Basic knowledge of React and TypeScript

### Setup
1. Clone the repository
2. Install dependencies: `bun install`
3. Start development server: `bun run dev`
4. Open http://localhost:5173

## Development Workflow

### Creating New Components
1. Use the [Setup Component](./.github/prompts/setup-component.prompt.md) prompt
2. Follow the established component structure
3. Include proper TypeScript typing
4. Add tests and documentation
5. Ensure PS2 theme consistency

### Testing Strategy
- Write tests using Vitest and React Testing Library
- Focus on user behavior, not implementation details
- Include accessibility testing
- Test responsive design

### Code Style
- Follow ESLint and Prettier configurations
- Use TypeScript strict mode
- Follow React Hooks best practices
- Maintain PS2 aesthetic consistency

## Project Structure
\```
src/
├── components/      # Reusable UI components
│   ├── ui/         # shadcn/ui components
│   └── ...         # PS2-themed components
├── hooks/          # Custom React hooks
├── lib/            # Utilities and helpers
├── pages/          # Route components
└── test/           # Test setup and utilities
\```

## PS2 Theme Guidelines

### Color Palette
- Primary Blue: `#0066CC` (PS2 system blue)
- Secondary: `#003366` (darker blue)
- Accent: `#FF6600` (orange highlights)
- Background: `#000033` (dark navy)

### Typography
- Primary: System font stack with retro feel
- Monospace for technical elements
- Bold weights for emphasis

### Animations
- Smooth transitions (200-300ms)
- Easing functions: `ease-out` for entrances
- Hardware-accelerated transforms
- 60fps target for all animations

## Troubleshooting

### Common Issues
1. **Component not rendering**: Check prop types and required props
2. **Styling issues**: Verify Tailwind classes and theme consistency  
3. **Test failures**: Ensure proper mocking and async handling
4. **Performance problems**: Profile with React DevTools
```

## Documentation Generation Process

### For Components
1. **Analyze Component Structure**: Props, state, behavior
2. **Document Public API**: All props, methods, events
3. **Create Usage Examples**: Common and advanced use cases
4. **Include PS2 Context**: How it fits the theme
5. **Add Accessibility Info**: A11y features and requirements

### For Features  
1. **User-Focused Description**: What the feature does for users
2. **Developer Implementation**: How to implement or extend
3. **Configuration Options**: All available settings
4. **Integration Examples**: How to use with other features

### for APIs
1. **Function Signatures**: Complete type information
2. **Usage Patterns**: When and how to use
3. **Error Handling**: What can go wrong and how to handle it
4. **Performance Notes**: Any performance considerations

## Documentation Standards

### Writing Style
- Clear, concise language
- Active voice when possible
- Consistent terminology throughout
- Examples for complex concepts
- PS2-themed context where relevant

### Code Examples  
- Complete, runnable examples
- Include imports and setup
- Show both basic and advanced usage
- Include TypeScript types
- Test all code examples for accuracy

### Maintenance
- Keep documentation in sync with code changes
- Review docs during code reviews
- Update examples when APIs change
- Archive outdated information

Remember to make documentation discoverable, searchable, and useful for both new contributors and experienced developers working on the PS2 portfolio project!
````

## File: .github/prompts/github-copilot-starter.prompt.md
````markdown
---
agent: 'agent'
model: Claude Sonnet 4
tools: ['edit', 'githubRepo', 'changes', 'problems', 'search', 'runCommands', 'fetch']
description: 'Set up complete GitHub Copilot configuration for a new project based on technology stack'
---

You are a GitHub Copilot setup specialist. Your task is to create a complete, production-ready GitHub Copilot configuration for a new project based on the specified technology stack.

## Project Information Required

Ask the user for the following information if not provided:

1. **Primary Language/Framework**: (e.g., JavaScript/React, Python/Django, Java/Spring Boot, etc.)
2. **Project Type**: (e.g., web app, API, mobile app, desktop app, library, etc.)
3. **Additional Technologies**: (e.g., database, cloud provider, testing frameworks, etc.)
4. **Team Size**: (solo, small team, enterprise)
5. **Development Style**: (strict standards, flexible, specific patterns)

## Configuration Files to Create

Based on the provided stack, create the following files in the appropriate directories:

### 1. `.github/copilot-instructions.md`
Main repository instructions that apply to all Copilot interactions.

### 2. `.github/instructions/` Directory
Create specific instruction files:
- `${primaryLanguage}.instructions.md` - Language-specific guidelines
- `testing.instructions.md` - Testing standards and practices
- `documentation.instructions.md` - Documentation requirements
- `security.instructions.md` - Security best practices
- `performance.instructions.md` - Performance optimization guidelines
- `code-review.instructions.md` - Code review standards and GitHub review guidelines

### 3. `.github/prompts/` Directory
Create reusable prompt files:
- `setup-component.prompt.md` - Component/module creation
- `write-tests.prompt.md` - Test generation
- `code-review.prompt.md` - Code review assistance
- `refactor-code.prompt.md` - Code refactoring
- `generate-docs.prompt.md` - Documentation generation
- `debug-issue.prompt.md` - Debugging assistance

### 4. `.github/agents/` Directory
Create specialized chat modes:
- `architect.agent.md` - Architecture planning mode
- `reviewer.agent.md` - Code review mode
- `debugger.agent.md` - Debugging mode

**Chat Mode Attribution**: When using content from awesome-copilot chatmodes, add attribution comments:
```markdown
<!-- Based on/Inspired by: https://github.com/github/awesome-copilot/blob/main/agents/[filename].agent.md -->
```

### 5. `.github/workflows/` Directory
Create Coding Agent workflow file:
- `copilot-setup-steps.yml` - GitHub Actions workflow for Coding Agent environment setup

**CRITICAL**: The workflow MUST follow this exact structure:
- Job name MUST be `copilot-setup-steps`
- Include proper triggers (workflow_dispatch, push, pull_request on the workflow file)
- Set appropriate permissions (minimum required)
- Customize steps based on the technology stack provided

## Content Guidelines

For each file, follow these principles:

**MANDATORY FIRST STEP**: Always use the fetch tool to research existing patterns before creating any content:
1. **Fetch from awesome-copilot collections**: https://github.com/github/awesome-copilot/blob/main/docs/README.collections.md
2. **Fetch specific instruction files**: https://raw.githubusercontent.com/github/awesome-copilot/main/instructions/[relevant-file].instructions.md
3. **Check for existing patterns** that match the technology stack

**Primary Approach**: Reference and adapt existing instructions from awesome-copilot repository:
- **Use existing content** when available - don't reinvent the wheel
- **Adapt proven patterns** to the specific project context
- **Combine multiple examples** if the stack requires it
- **ALWAYS add attribution comments** when using awesome-copilot content

**Attribution Format**: When using content from awesome-copilot, add this comment at the top of the file:
```markdown
<!-- Based on/Inspired by: https://github.com/github/awesome-copilot/blob/main/instructions/[filename].instructions.md -->
```

**Examples:**
```markdown
<!-- Based on: https://github.com/github/awesome-copilot/blob/main/instructions/react.instructions.md -->
---
applyTo: "**/*.jsx,**/*.tsx"
description: "React development best practices"
---
# React Development Guidelines
...
```

```markdown
<!-- Inspired by: https://github.com/github/awesome-copilot/blob/main/instructions/java.instructions.md -->
<!-- and: https://github.com/github/awesome-copilot/blob/main/instructions/spring-boot.instructions.md -->
---
applyTo: "**/*.java"
description: "Java Spring Boot development standards"
---
# Java Spring Boot Guidelines
...
```

**Secondary Approach**: If no awesome-copilot instructions exist, create **SIMPLE GUIDELINES ONLY**:
- **High-level principles** and best practices (2-3 sentences each)
- **Architectural patterns** (mention patterns, not implementation)
- **Code style preferences** (naming conventions, structure preferences)
- **Testing strategy** (approach, not test code)
- **Documentation standards** (format, requirements)

**STRICTLY AVOID in .instructions.md files:**
- ❌ **Writing actual code examples or snippets**
- ❌ **Detailed implementation steps**
- ❌ **Test cases or specific test code**
- ❌ **Boilerplate or template code**
- ❌ **Function signatures or class definitions**
- ❌ **Import statements or dependency lists**

**CORRECT .instructions.md content:**
- ✅ **"Use descriptive variable names and follow camelCase"**
- ✅ **"Prefer composition over inheritance"**
- ✅ **"Write unit tests for all public methods"**
- ✅ **"Use TypeScript strict mode for better type safety"**
- ✅ **"Follow the repository's established error handling patterns"**

**Research Strategy with fetch tool:**
1. **Check awesome-copilot first** - Always start here for ALL file types
2. **Look for exact tech stack matches** (e.g., React, Node.js, Spring Boot)
3. **Look for general matches** (e.g., frontend chatmodes, testing prompts, review modes)
4. **Check awesome-copilot collections** for curated sets of related files
5. **Adapt community examples** to project needs
6. **Only create custom content** if nothing relevant exists

**Fetch these awesome-copilot directories:**
- **Instructions**: https://github.com/github/awesome-copilot/tree/main/instructions
- **Prompts**: https://github.com/github/awesome-copilot/tree/main/prompts
- **Chat Modes**: https://github.com/github/awesome-copilot/tree/main/chatmodes
- **Collections**: https://github.com/github/awesome-copilot/blob/main/docs/README.collections.md

**Awesome-Copilot Collections to Check:**
- **Frontend Web Development**: React, Angular, Vue, TypeScript, CSS frameworks
- **C# .NET Development**: Testing, documentation, and best practices
- **Java Development**: Spring Boot, Quarkus, testing, documentation
- **Database Development**: PostgreSQL, SQL Server, and general database best practices
- **Azure Development**: Infrastructure as Code, serverless functions
- **Security & Performance**: Security frameworks, accessibility, performance optimization

## File Structure Standards

Ensure all files follow these conventions:

```
project-root/
├── .github/
│   ├── copilot-instructions.md
│   ├── instructions/
│   │   ├── [language].instructions.md
│   │   ├── testing.instructions.md
│   │   ├── documentation.instructions.md
│   │   ├── security.instructions.md
│   │   ├── performance.instructions.md
│   │   └── code-review.instructions.md
│   ├── prompts/
│   │   ├── setup-component.prompt.md
│   │   ├── write-tests.prompt.md
│   │   ├── code-review.prompt.md
│   │   ├── refactor-code.prompt.md
│   │   ├── generate-docs.prompt.md
│   │   └── debug-issue.prompt.md
│   ├── agents/
│   │   ├── architect.agent.md
│   │   ├── reviewer.agent.md
│   │   └── debugger.agent.md
│   └── workflows/
│       └── copilot-setup-steps.yml
```

## YAML Frontmatter Template

Use this frontmatter structure for all files:

**Instructions (.instructions.md):**
```yaml
---
applyTo: "**/*.ts,**/*.tsx"
---
# Project coding standards for TypeScript and React

Apply the [general coding guidelines](./general-coding.instructions.md) to all code.

## TypeScript Guidelines
- Use TypeScript for all new code
- Follow functional programming principles where possible
- Use interfaces for data structures and type definitions
- Prefer immutable data (const, readonly)
- Use optional chaining (?.) and nullish coalescing (??) operators

## React Guidelines
- Use functional components with hooks
- Follow the React hooks rules (no conditional hooks)
- Use React.FC type for components with children
- Keep components small and focused
- Use CSS modules for component styling

```

**Prompts (.prompt.md):**
```yaml
---
agent: 'agent'
model: Claude Sonnet 4
tools: ['githubRepo', 'codebase']
description: 'Generate a new React form component'
---
Your goal is to generate a new React form component based on the templates in #githubRepo contoso/react-templates.

Ask for the form name and fields if not provided.

Requirements for the form:
* Use form design system components: [design-system/Form.md](../docs/design-system/Form.md)
* Use `react-hook-form` for form state management:
* Always define TypeScript types for your form data
* Prefer *uncontrolled* components using register
* Use `defaultValues` to prevent unnecessary rerenders
* Use `yup` for validation:
* Create reusable validation schemas in separate files
* Use TypeScript types to ensure type safety
* Customize UX-friendly validation rules

```

**Chat Modes (.agent.md):**
```yaml
---
description: Generate an implementation plan for new features or refactoring existing code.
tools: ['codebase', 'fetch', 'findTestFiles', 'githubRepo', 'search', 'usages']
model: Claude Sonnet 4
---
# Planning mode instructions
You are in planning mode. Your task is to generate an implementation plan for a new feature or for refactoring existing code.
Don't make any code edits, just generate a plan.

The plan consists of a Markdown document that describes the implementation plan, including the following sections:

* Overview: A brief description of the feature or refactoring task.
* Requirements: A list of requirements for the feature or refactoring task.
* Implementation Steps: A detailed list of steps to implement the feature or refactoring task.
* Testing: A list of tests that need to be implemented to verify the feature or refactoring task.

```

## Execution Steps

1. **Analyze the provided technology stack**
2. **Create the directory structure**
3. **Generate main copilot-instructions.md with project-wide standards**
4. **Create language-specific instruction files using awesome-copilot references**
5. **Generate reusable prompts for common development tasks**
6. **Set up specialized chat modes for different development scenarios**
7. **Create the GitHub Actions workflow for Coding Agent** (`copilot-setup-steps.yml`)
8. **Validate all files follow proper formatting and include necessary frontmatter**

## Post-Setup Instructions

After creating all files, provide the user with:

1. **VS Code setup instructions** - How to enable and configure the files
2. **Usage examples** - How to use each prompt and chat mode
3. **Customization tips** - How to modify files for their specific needs
4. **Testing recommendations** - How to verify the setup works correctly

## Quality Checklist

Before completing, verify:
- [ ] All files have proper YAML frontmatter
- [ ] Language-specific best practices are included
- [ ] Files reference each other appropriately using Markdown links
- [ ] Prompts include relevant tools and variables
- [ ] Instructions are comprehensive but not overwhelming
- [ ] Security and performance considerations are addressed
- [ ] Testing guidelines are included
- [ ] Documentation standards are clear
- [ ] Code review standards are defined

## Workflow Template Structure

The `copilot-setup-steps.yml` workflow MUST follow this exact format and KEEP IT SIMPLE:

```yaml
name: "Copilot Setup Steps"
on:
  workflow_dispatch:
  push:
    paths:
      - .github/workflows/copilot-setup-steps.yml
  pull_request:
    paths:
      - .github/workflows/copilot-setup-steps.yml
jobs:
  # The job MUST be called `copilot-setup-steps` or it will not be picked up by Copilot.
  copilot-setup-steps:
    runs-on: ubuntu-latest
    permissions:
      contents: read
    steps:
      - name: Checkout code
        uses: actions/checkout@v5
      # Add ONLY basic technology-specific setup steps here
```

**KEEP WORKFLOWS SIMPLE** - Only include essential steps:

**Node.js/JavaScript:**
```yaml
- name: Set up Node.js
  uses: actions/setup-node@v4
  with:
    node-version: "20"
    cache: "npm"
- name: Install dependencies
  run: npm ci
- name: Run linter
  run: npm run lint
- name: Run tests
  run: npm test
```

**Python:**
```yaml
- name: Set up Python
  uses: actions/setup-python@v4
  with:
    python-version: "3.11"
- name: Install dependencies
  run: pip install -r requirements.txt
- name: Run linter
  run: flake8 .
- name: Run tests
  run: pytest
```

**Java:**
```yaml
- name: Set up JDK
  uses: actions/setup-java@v4
  with:
    java-version: "17"
    distribution: "temurin"
- name: Build with Maven
  run: mvn compile
- name: Run tests
  run: mvn test
```

**AVOID in workflows:**
- ❌ Complex configuration setups
- ❌ Multiple environment configurations
- ❌ Advanced tooling setup
- ❌ Custom scripts or complex logic
- ❌ Multiple package managers
- ❌ Database setup or external services

**INCLUDE only:**
- ✅ Language/runtime setup
- ✅ Basic dependency installation
- ✅ Simple linting (if standard)
- ✅ Basic test running
- ✅ Standard build commands
````

## File: .github/prompts/refactor-code.prompt.md
````markdown
---
agent: 'agent'
model: Claude Sonnet 4  
tools: ['codebase', 'editFiles']
description: 'Refactor code to improve maintainability, performance, and type safety'
---

# Refactor Code Prompt

Refactor existing code in the PS2 Memory Card Portfolio project to improve code quality, maintainability, performance, and adherence to best practices.

## Refactoring Goals

Specify your refactoring objectives:
1. **Target Code** (files, components, or functions to refactor)
2. **Refactoring Type** (structure, performance, types, patterns)
3. **Success Criteria** (what improvement you want to achieve)
4. **Constraints** (maintain backward compatibility, preserve behavior)

## Common Refactoring Patterns

### Component Refactoring
- Extract reusable logic into custom hooks
- Split large components into smaller, focused ones
- Remove prop drilling by using context or state management
- Optimize rendering with React.memo and useMemo
- Improve component composition and reusability

### TypeScript Improvements  
- Add missing type definitions and interfaces
- Replace `any` types with specific, accurate types
- Extract common type definitions to shared files
- Use utility types (Partial, Pick, Omit) effectively
- Implement discriminated unions for state management

### Performance Optimizations
- Implement code splitting and lazy loading
- Optimize heavy computations with useMemo
- Reduce bundle size by removing unused dependencies
- Improve animation performance with CSS transforms
- Implement virtual scrolling for large lists

## Refactoring Checklist

### Pre-Refactoring
- [ ] Identify specific pain points and improvement opportunities
- [ ] Ensure comprehensive test coverage exists
- [ ] Document current behavior and expected outcomes
- [ ] Plan refactoring in small, incremental steps
- [ ] Consider impact on PS2 theme and user experience

### During Refactoring
- [ ] Make one logical change at a time
- [ ] Run tests after each significant change
- [ ] Maintain existing API contracts where possible
- [ ] Preserve PS2 theme styling and animations
- [ ] Keep functionality identical unless explicitly changing it

### Post-Refactoring
- [ ] Verify all tests still pass  
- [ ] Test manually in browser for visual consistency
- [ ] Check performance impact (bundle size, runtime)
- [ ] Update documentation if APIs changed
- [ ] Review accessibility still works correctly

## Refactoring Strategies

### Extract Custom Hook
```typescript
// Before: Logic mixed in component
const Component = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  
  useEffect(() => {
    // Complex data fetching logic
  }, []);
  
  // Render logic
};

// After: Logic extracted to custom hook
const useDataFetch = (url: string) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  
  // Extracted logic
  
  return { data, loading, error };
};

const Component = () => {
  const { data, loading, error } = useDataFetch('/api/data');
  
  // Clean render logic
};
```

### Improve Type Safety
```typescript
// Before: Loose typing
interface Props {
  data: any;
  onSelect: (item: any) => void;
}

// After: Strict typing  
interface GameData {
  id: string;
  title: string;
  progress: number;
  lastPlayed: Date;
}

interface Props {
  data: GameData[];
  onSelect: (item: GameData) => void;
}
```

### Component Composition
```typescript
// Before: Monolithic component
const MemoryCardSlot = ({ games, isActive, onSelect }) => {
  return (
    <div>
      {/* Complex rendering logic */}
      {/* Multiple responsibilities */}
    </div>
  );
};

// After: Composed smaller components
const MemoryCardSlot = ({ games, isActive, onSelect }) => {
  return (
    <SlotContainer isActive={isActive}>
      <SlotHeader />
      <GamesList games={games} onSelect={onSelect} />
      <SlotActions />
    </SlotContainer>
  );
};
```

## PS2-Specific Refactoring Considerations

### Theme Consistency
- Maintain visual cohesion across refactored components
- Preserve PS2-style animations and transitions  
- Ensure color palette and typography remain consistent
- Keep retro aesthetic while improving code structure

### Performance with Theme
- Optimize CSS animations to maintain smooth 60fps
- Ensure PS2-style effects don't impact performance
- Balance visual complexity with runtime efficiency
- Test on various devices to maintain PS2 nostalgia experience

### Component Hierarchy
- Organize components to match PS2 interface metaphors
- Group related PS2-themed components logically  
- Extract common PS2 styling patterns into reusable utilities
- Maintain clear separation between theme and functionality

## Testing During Refactoring

### Automated Testing
- Run full test suite after each refactoring step
- Add tests for newly extracted functions or hooks
- Ensure test coverage doesn't decrease
- Update tests if internal implementation changes

### Manual Testing
- Test visual appearance hasn't changed
- Verify all PS2 animations still work correctly
- Check responsive behavior on different screen sizes
- Validate keyboard navigation and accessibility

### Performance Testing
- Monitor bundle size changes
- Profile runtime performance before and after
- Test memory usage for potential leaks
- Validate Core Web Vitals metrics

## Refactoring Documentation

Document the refactoring process:
- Explain the reasoning behind changes
- Note any behavior modifications
- Update component documentation
- Describe new patterns or conventions introduced

Remember: Refactor incrementally, test frequently, and always preserve the unique PS2 gaming aesthetic that makes this portfolio special!
````

## File: .github/prompts/setup-component.prompt.md
````markdown
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
````

## File: .github/prompts/write-tests.prompt.md
````markdown
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
````

## File: .github/workflows/copilot-setup-steps.yml
````yaml
name: "Copilot Setup Steps"

on:
  workflow_dispatch:
  push:
    paths:
      - .github/workflows/copilot-setup-steps.yml
  pull_request:
    paths:
      - .github/workflows/copilot-setup-steps.yml

jobs:
  # The job MUST be called `copilot-setup-steps` or it will not be picked up by Copilot.
  copilot-setup-steps:
    runs-on: ubuntu-latest
    permissions:
      contents: read
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v5
        
      - name: Setup Bun
        uses: oven-sh/setup-bun@v1
        with:
          bun-version: latest
          
      - name: Install dependencies
        run: bun install
        
      - name: Run TypeScript check
        run: bun run type-check
        
      - name: Run linter
        run: bun run lint
        
      - name: Run tests
        run: bun run test
        
      - name: Build project
        run: bun run build
````

## File: .github/copilot-instructions.md
````markdown
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
````

## File: public/placeholder.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" fill="none"><rect width="1200" height="1200" fill="#EAEAEA" rx="3"/><g opacity=".5"><g opacity=".5"><path fill="#FAFAFA" d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"/><path stroke="#C9C9C9" stroke-width="2.418" d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"/></g><path stroke="url(#a)" stroke-width="2.418" d="M0-1.209h553.581" transform="scale(1 -1) rotate(45 1163.11 91.165)"/><path stroke="url(#b)" stroke-width="2.418" d="M404.846 598.671h391.726"/><path stroke="url(#c)" stroke-width="2.418" d="M599.5 795.742V404.017"/><path stroke="url(#d)" stroke-width="2.418" d="m795.717 796.597-391.441-391.44"/><path fill="#fff" d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"/><g clip-path="url(#e)"><path fill="#666" fill-rule="evenodd" d="M616.426 586.58h-31.434v16.176l3.553-3.554.531-.531h9.068l.074-.074 8.463-8.463h2.565l7.18 7.181V586.58Zm-15.715 14.654 3.698 3.699 1.283 1.282-2.565 2.565-1.282-1.283-5.2-5.199h-6.066l-5.514 5.514-.073.073v2.876a2.418 2.418 0 0 0 2.418 2.418h26.598a2.418 2.418 0 0 0 2.418-2.418v-8.317l-8.463-8.463-7.181 7.181-.071.072Zm-19.347 5.442v4.085a6.045 6.045 0 0 0 6.046 6.045h26.598a6.044 6.044 0 0 0 6.045-6.045v-7.108l1.356-1.355-1.282-1.283-.074-.073v-17.989h-38.689v23.43l-.146.146.146.147Z" clip-rule="evenodd"/></g><path stroke="#C9C9C9" stroke-width="2.418" d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"/></g><defs><linearGradient id="a" x1="554.061" x2="-.48" y1=".083" y2=".087" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="b" x1="796.912" x2="404.507" y1="599.963" y2="599.965" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="c" x1="600.792" x2="600.794" y1="403.677" y2="796.082" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="d" x1="404.85" x2="796.972" y1="403.903" y2="796.02" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><clipPath id="e"><path fill="#fff" d="M581.364 580.535h38.689v38.689h-38.689z"/></clipPath></defs></svg>
````

## File: public/robots.txt
````
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /
````

## File: src/components/ui/accordion.tsx
````typescript
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
````

## File: src/components/ui/alert-dialog.tsx
````typescript
import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
````

## File: src/components/ui/alert.tsx
````typescript
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
  ),
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
  ),
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
````

## File: src/components/ui/aspect-ratio.tsx
````typescript
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

const AspectRatio = AspectRatioPrimitive.Root;

export { AspectRatio };
````

## File: src/components/ui/avatar.tsx
````typescript
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn("aspect-square h-full w-full", className)} {...props} />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
````

## File: src/components/ui/badge.tsx
````typescript
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
````

## File: src/components/ui/breadcrumb.tsx
````typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className,
      )}
      {...props}
    />
  ),
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  ),
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return <Comp ref={ref} className={cn("transition-colors hover:text-foreground", className)} {...props} />;
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  ),
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
  <li role="presentation" aria-hidden="true" className={cn("[&>svg]:size-3.5", className)} {...props}>
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
````

## File: src/components/ui/button.tsx
````typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
````

## File: src/components/ui/calendar.tsx
````typescript
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(buttonVariants({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
````

## File: src/components/ui/card.tsx
````typescript
import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
````

## File: src/components/ui/carousel.tsx
````typescript
import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
          {...props}
        />
      </div>
    );
  },
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-left-12 top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  },
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-right-12 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

export { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
````

## File: src/components/ui/chart.tsx
````typescript
import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & ({ color?: string; theme?: never } | { color?: never; theme: Record<keyof typeof THEMES, string> });
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([_, config]) => config.theme || config.color);

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart();

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label;

      if (labelFormatter) {
        return <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>;
      }

      if (!value) {
        return null;
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className,
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center",
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                            "h-2.5 w-2.5": indicator === "dot",
                            "w-1": indicator === "line",
                            "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                            "my-0.5": nestLabel && indicator === "dashed",
                          })}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center",
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">{itemConfig?.label || item.name}</span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean;
      nameKey?: string;
    }
>(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className)}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div
            key={item.value}
            className={cn("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground")}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegend";

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload && typeof payload.payload === "object" && payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (key in payload && typeof payload[key as keyof typeof payload] === "string") {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config];
}

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };
````

## File: src/components/ui/checkbox.tsx
````typescript
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
````

## File: src/components/ui/collapsible.tsx
````typescript
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
````

## File: src/components/ui/command.tsx
````typescript
import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />);

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn("-mx-1 h-px bg-border", className)} {...props} />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
````

## File: src/components/ui/context-menu.tsx
````typescript
import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className)}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
````

## File: src/components/ui/dialog.tsx
````typescript
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
````

## File: src/components/ui/drawer.tsx
````typescript
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

const Drawer = ({ shouldScaleBackground = true, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-black/80", className)} {...props} />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className,
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
````

## File: src/components/ui/dropdown-menu.tsx
````typescript
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />;
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
````

## File: src/components/ui/form.tsx
````typescript
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import { Controller, ControllerProps, FieldPath, FieldValues, FormProvider, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return <Label ref={ref} className={cn(error && "text-destructive", className)} htmlFor={formItemId} {...props} />;
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
        aria-invalid={!!error}
        {...props}
      />
    );
  },
);
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();

    return <p ref={ref} id={formDescriptionId} className={cn("text-sm text-muted-foreground", className)} {...props} />;
  },
);
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <p ref={ref} id={formMessageId} className={cn("text-sm font-medium text-destructive", className)} {...props}>
        {body}
      </p>
    );
  },
);
FormMessage.displayName = "FormMessage";

export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField };
````

## File: src/components/ui/hover-card.tsx
````typescript
import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
````

## File: src/components/ui/input-otp.tsx
````typescript
import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";

import { cn } from "@/lib/utils";

const InputOTP = React.forwardRef<React.ElementRef<typeof OTPInput>, React.ComponentPropsWithoutRef<typeof OTPInput>>(
  ({ className, containerClassName, ...props }, ref) => (
    <OTPInput
      ref={ref}
      containerClassName={cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName)}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  ),
);
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<React.ElementRef<"div">, React.ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex items-center", className)} {...props} />,
);
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<React.ElementRef<"div">, React.ComponentPropsWithoutRef<"div">>(
  ({ ...props }, ref) => (
    <div ref={ref} role="separator" {...props}>
      <Dot />
    </div>
  ),
);
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
````

## File: src/components/ui/input.tsx
````typescript
import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
````

## File: src/components/ui/label.tsx
````typescript
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
````

## File: src/components/ui/menubar.tsx
````typescript
import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", className)}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
````

## File: src/components/ui/navigation-menu.tsx
````typescript
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
````

## File: src/components/ui/pagination.tsx
````typescript
import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
  ),
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({ className, isActive, size = "icon", ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to previous page" size="default" className={cn("gap-1 pl-2.5", className)} {...props}>
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" size="default" className={cn("gap-1 pr-2.5", className)} {...props}>
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span aria-hidden className={cn("flex h-9 w-9 items-center justify-center", className)} {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
````

## File: src/components/ui/popover.tsx
````typescript
import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
````

## File: src/components/ui/progress.tsx
````typescript
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
````

## File: src/components/ui/radio-group.tsx
````typescript
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
````

## File: src/components/ui/resizable.tsx
````typescript
import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";

import { cn } from "@/lib/utils";

const ResizablePanelGroup = ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
    {...props}
  />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
````

## File: src/components/ui/scroll-area.tsx
````typescript
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">{children}</ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
````

## File: src/components/ui/select.tsx
````typescript
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label ref={ref} className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)} {...props} />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
````

## File: src/components/ui/separator.tsx
````typescript
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className)}
    {...props}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
````

## File: src/components/ui/sheet.tsx
````typescript
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
  ({ side = "right", className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
        {children}
        <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  ),
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title ref={ref} className={cn("text-lg font-semibold text-foreground", className)} {...props} />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
````

## File: src/components/ui/sidebar.tsx
````typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContext = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContext | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref) => {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open],
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo<SidebarContext>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
});
SidebarProvider.displayName = "SidebarProvider";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
  }
>(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        className={cn("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-mobile="true"
          className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      ref={ref}
      className="group peer hidden text-sidebar-foreground md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        className={cn(
          "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]",
        )}
      />
      <div
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
        >
          {children}
        </div>
      </div>
    </div>
  );
});
Sidebar.displayName = "Sidebar";

const SidebarTrigger = React.forwardRef<React.ElementRef<typeof Button>, React.ComponentProps<typeof Button>>(
  ({ className, onClick, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <Button
        ref={ref}
        data-sidebar="trigger"
        variant="ghost"
        size="icon"
        className={cn("h-7 w-7", className)}
        onClick={(event) => {
          onClick?.(event);
          toggleSidebar();
        }}
        {...props}
      >
        <PanelLeft />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    );
  },
);
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarRail = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <button
        ref={ref}
        data-sidebar="rail"
        aria-label="Toggle Sidebar"
        tabIndex={-1}
        onClick={toggleSidebar}
        title="Toggle Sidebar"
        className={cn(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 hover:after:bg-sidebar-border sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarRail.displayName = "SidebarRail";

const SidebarInset = React.forwardRef<HTMLDivElement, React.ComponentProps<"main">>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className,
      )}
      {...props}
    />
  );
});
SidebarInset.displayName = "SidebarInset";

const SidebarInput = React.forwardRef<React.ElementRef<typeof Input>, React.ComponentProps<typeof Input>>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        data-sidebar="input"
        className={cn(
          "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarInput.displayName = "SidebarInput";

const SidebarHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return <div ref={ref} data-sidebar="header" className={cn("flex flex-col gap-2 p-2", className)} {...props} />;
});
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return <div ref={ref} data-sidebar="footer" className={cn("flex flex-col gap-2 p-2", className)} {...props} />;
});
SidebarFooter.displayName = "SidebarFooter";

const SidebarSeparator = React.forwardRef<React.ElementRef<typeof Separator>, React.ComponentProps<typeof Separator>>(
  ({ className, ...props }, ref) => {
    return (
      <Separator
        ref={ref}
        data-sidebar="separator"
        className={cn("mx-2 w-auto bg-sidebar-border", className)}
        {...props}
      />
    );
  },
);
SidebarSeparator.displayName = "SidebarSeparator";

const SidebarContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarContent.displayName = "SidebarContent";

const SidebarGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  );
});
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef<HTMLDivElement, React.ComponentProps<"div"> & { asChild?: boolean }>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        data-sidebar="group-label"
        className={cn(
          "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupAction = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button"> & { asChild?: boolean }>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        data-sidebar="group-action"
        className={cn(
          "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "group-data-[collapsible=icon]:hidden",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarGroupAction.displayName = "SidebarGroupAction";

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div ref={ref} data-sidebar="group-content" className={cn("w-full text-sm", className)} {...props} />
  ),
);
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(({ className, ...props }, ref) => (
  <ul ref={ref} data-sidebar="menu" className={cn("flex w-full min-w-0 flex-col gap-1", className)} {...props} />
));
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li ref={ref} data-sidebar="menu-item" className={cn("group/menu-item relative", className)} {...props} />
));
SidebarMenuItem.displayName = "SidebarMenuItem";

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      ref={ref}
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent side="right" align="center" hidden={state !== "collapsed" || isMobile} {...tooltip} />
    </Tooltip>
  );
});
SidebarMenuButton.displayName = "SidebarMenuButton";

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";

const SidebarMenuBadge = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="menu-badge"
      className={cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean;
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="h-4 max-w-[--skeleton-width] flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

const SidebarMenuSub = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuSub.displayName = "SidebarMenuSub";

const SidebarMenuSubItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ ...props }, ref) => (
  <li ref={ref} {...props} />
));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
````

## File: src/components/ui/skeleton.tsx
````typescript
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}

export { Skeleton };
````

## File: src/components/ui/slider.tsx
````typescript
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
````

## File: src/components/ui/sonner.tsx
````typescript
import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
````

## File: src/components/ui/switch.tsx
````typescript
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
````

## File: src/components/ui/table.tsx
````typescript
import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  ),
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />,
);
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
  ),
);
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tfoot ref={ref} className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)} {...props} />
  ),
);
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50", className)}
      {...props}
    />
  ),
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  ),
);
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...props} />
  ),
);
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, ...props }, ref) => (
    <caption ref={ref} className={cn("mt-4 text-sm text-muted-foreground", className)} {...props} />
  ),
);
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
````

## File: src/components/ui/tabs.tsx
````typescript
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
````

## File: src/components/ui/textarea.tsx
````typescript
import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
````

## File: src/components/ui/toast.tsx
````typescript
import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return <ToastPrimitives.Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />;
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} className={cn("text-sm font-semibold", className)} {...props} />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description ref={ref} className={cn("text-sm opacity-90", className)} {...props} />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
````

## File: src/components/ui/toaster.tsx
````typescript
import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
````

## File: src/components/ui/toggle-group.tsx
````typescript
import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root ref={ref} className={cn("flex items-center justify-center gap-1", className)} {...props}>
    <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
````

## File: src/components/ui/toggle.tsx
````typescript
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, className }))} {...props} />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
````

## File: src/components/ui/tooltip.tsx
````typescript
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
````

## File: src/components/ui/use-toast.ts
````typescript
import { useToast, toast } from "@/hooks/use-toast";

export { useToast, toast };
````

## File: src/components/NavLink.tsx
````typescript
import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
````

## File: src/components/PS2Icon3D.tsx
````typescript
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PS2Icon3DProps {
  icon: LucideIcon;
  label: string;
  selected?: boolean;
  onClick?: () => void;
  delay?: number;
  color?: string;
}

const PS2Icon3D = ({ icon: Icon, label, selected, onClick, delay = 0, color }: PS2Icon3DProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="flex flex-col items-center gap-2 group focus:outline-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      <motion.div
        className={`relative w-16 h-16 flex items-center justify-center rounded-sm ${
          selected ? "ring-2 ring-ps2-selected" : ""
        }`}
        animate={selected ? {
          y: [0, -6, 0],
          rotateY: [0, 180, 360],
        } : {
          rotateY: [0, 360],
        }}
        transition={{
          duration: selected ? 2 : 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ perspective: "200px", transformStyle: "preserve-3d" }}
      >
        {/* Glow effect behind icon */}
        {selected && (
          <div className="absolute inset-0 bg-ps2-glow/30 rounded-sm blur-lg" />
        )}
        <Icon
          size={36}
          className={`relative z-10 ${selected ? "text-primary" : "text-muted-foreground"} group-hover:text-primary transition-colors`}
          style={color ? { color } : undefined}
        />
      </motion.div>
      <span className={`text-xs font-ps2 tracking-wider ${
        selected ? "text-foreground" : "text-muted-foreground"
      } group-hover:text-foreground transition-colors`}>
        {label}
      </span>
    </motion.button>
  );
};

export default PS2Icon3D;
````

## File: src/components/PS2Orbs.tsx
````typescript
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ORB_COUNT = 8;
const TRAIL_LENGTH = 22;
const BASE_SPEED = 3.2;

function makeGlowTexture() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);

  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.08, "rgba(235,245,255,0.98)");
  gradient.addColorStop(0.2, "rgba(165,210,255,0.72)");
  gradient.addColorStop(0.45, "rgba(95,165,255,0.3)");
  gradient.addColorStop(0.75, "rgba(50,115,230,0.1)");
  gradient.addColorStop(1, "rgba(0,55,180,0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  return new THREE.CanvasTexture(canvas);
}

type OrbitingOrbProps = {
  glowTex: THREE.Texture;
  index: number;
};

function OrbitingOrb({ glowTex, index }: OrbitingOrbProps) {
  const ref = useRef<THREE.Group>(null!);
  const trailRefs = useRef<THREE.Sprite[]>([]);
  const posHistory = useRef<THREE.Vector3[]>([]);

  const phase = useMemo(() => (index / ORB_COUNT) * Math.PI * 2, [index]);
  const speed = useMemo(() => BASE_SPEED + index * 0.03, [index]);

  const trailSprites = useMemo(() => {
    const sprites: THREE.Sprite[] = [];

    for (let i = 0; i < TRAIL_LENGTH; i++) {
      const material = new THREE.SpriteMaterial({
        map: glowTex,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      });

      const sprite = new THREE.Sprite(material);
      const scale = 0.585 * (1 - i / TRAIL_LENGTH);
      sprite.scale.set(scale, scale, 1);
      sprites.push(sprite);
    }

    trailRefs.current = sprites;
    return sprites;
  }, [glowTex]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const angle = t * speed + phase;

    // Inline alignment pattern: periodically all orbs converge to a line
    // Uses a sine wave that periodically flattens the Y axis
    const alignCycle = Math.sin(t * 0.4) * 0.5 + 0.5; // 0..1, slow cycle
    const alignStrength = Math.pow(alignCycle, 4); // sharp peaks = inline moments

    const radius = 2.2 + Math.sin(t * 0.7 + index * 0.9) * 0.15;
    const baseX = Math.cos(angle) * radius + Math.sin(t * 0.9 + index) * 0.1;
    const baseY = Math.sin(angle) * (1.5 + Math.cos(t * 0.8 + index) * 0.12) + Math.cos(t * 0.6 + index) * 0.06;
    const z = Math.sin(angle * 1.8 + t * 0.7 + index) * 0.16;

    // When alignStrength is high, flatten Y toward 0 (inline horizontal)
    const x = baseX;
    const y = baseY * (1 - alignStrength * 0.92);

    ref.current.position.set(x, y, z);

    posHistory.current.unshift(new THREE.Vector3(x, y, z));
    if (posHistory.current.length > TRAIL_LENGTH * 2) {
      posHistory.current.length = TRAIL_LENGTH * 2;
    }

    trailRefs.current.forEach((sprite, trailIndex) => {
      const historyPoint = posHistory.current[trailIndex + 1];
      if (!historyPoint) return;

      sprite.position.copy(historyPoint);
      const fade = 0.62 * (1 - trailIndex / TRAIL_LENGTH);
      (sprite.material as THREE.SpriteMaterial).opacity = fade;
    });
  });

  return (
    <group>
      {trailSprites.map((sprite, trailIndex) => (
        <primitive key={`trail-${index}-${trailIndex}`} object={sprite} />
      ))}

      <group ref={ref}>
        <sprite scale={[0.63, 0.63, 1]}>
          <spriteMaterial map={glowTex} transparent opacity={1} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
        </sprite>
        <sprite scale={[1.26, 1.26, 1]}>
          <spriteMaterial map={glowTex} transparent opacity={0.62} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
        </sprite>
        <sprite scale={[2.25, 2.25, 1]}>
          <spriteMaterial map={glowTex} transparent opacity={0.22} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
        </sprite>
      </group>
    </group>
  );
}

function OrbSystem() {
  const glowTex = useMemo(() => makeGlowTexture(), []);

  return (
    <>
      {Array.from({ length: ORB_COUNT }).map((_, index) => (
        <OrbitingOrb key={index} glowTex={glowTex} index={index} />
      ))}
    </>
  );
}

const PS2Orbs = () => {
  return (
    <div className="relative w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5.4], fov: 50 }}
        gl={{ alpha: true, antialias: true, premultipliedAlpha: true, toneMapping: THREE.NoToneMapping }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        style={{ background: "transparent" }}
      >
        <OrbSystem />
      </Canvas>
    </div>
  );
};

export default PS2Orbs;
````

## File: src/components/SnakeGame.tsx
````typescript
import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";

interface SnakeGameProps {
  onBack: () => void;
}

const GRID_SIZE = 20;
const CELL_SIZE = 18;
const INITIAL_SPEED = 150;

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
type Point = { x: number; y: number };

const SnakeGame = ({ onBack }: SnakeGameProps) => {
  const [snake, setSnake] = useState<Point[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Point>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Direction>("RIGHT");
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(false);
  const dirRef = useRef<Direction>("RIGHT");

  const spawnFood = useCallback((currentSnake: Point[]): Point => {
    let newFood: Point;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (currentSnake.some((s) => s.x === newFood.x && s.y === newFood.y));
    return newFood;
  }, []);

  const resetGame = () => {
    const initial = [{ x: 10, y: 10 }];
    setSnake(initial);
    setFood(spawnFood(initial));
    setDirection("RIGHT");
    dirRef.current = "RIGHT";
    setGameOver(false);
    setScore(0);
    setStarted(true);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onBack(); return; }
      if (!started && (e.key === "Enter" || e.key === " ")) { resetGame(); return; }
      if (gameOver && (e.key === "Enter" || e.key === " ")) { resetGame(); return; }

      const d = dirRef.current;
      if ((e.key === "ArrowUp" || e.key === "w") && d !== "DOWN") { dirRef.current = "UP"; setDirection("UP"); }
      if ((e.key === "ArrowDown" || e.key === "s") && d !== "UP") { dirRef.current = "DOWN"; setDirection("DOWN"); }
      if ((e.key === "ArrowLeft" || e.key === "a") && d !== "RIGHT") { dirRef.current = "LEFT"; setDirection("LEFT"); }
      if ((e.key === "ArrowRight" || e.key === "d") && d !== "LEFT") { dirRef.current = "RIGHT"; setDirection("RIGHT"); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [started, gameOver, onBack]);

  useEffect(() => {
    if (!started || gameOver) return;

    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = { ...prev[0] };
        const d = dirRef.current;
        if (d === "UP") head.y -= 1;
        if (d === "DOWN") head.y += 1;
        if (d === "LEFT") head.x -= 1;
        if (d === "RIGHT") head.x += 1;

        // Wall collision
        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
          setGameOver(true);
          return prev;
        }
        // Self collision
        if (prev.some((s) => s.x === head.x && s.y === head.y)) {
          setGameOver(true);
          return prev;
        }

        const newSnake = [head, ...prev];
        if (head.x === food.x && head.y === food.y) {
          setScore((s) => s + 10);
          setFood(spawnFood(newSnake));
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, INITIAL_SPEED);

    return () => clearInterval(interval);
  }, [started, gameOver, food, spawnFood]);

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center gap-6">
      <div className="ps2-crt-overlay" />

      <h2 className="font-ps2 text-foreground text-xl tracking-widest">SNAKE</h2>
      <p className="font-ps2 text-primary text-sm">Score: {score}</p>

      <div
        className="relative border border-border bg-ps2-dark"
        style={{ width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}
        role="img"
        aria-label="Snake game board"
      >
        {/* Food */}
        <motion.div
          className="absolute bg-destructive rounded-full"
          style={{
            width: CELL_SIZE - 2,
            height: CELL_SIZE - 2,
            left: food.x * CELL_SIZE + 1,
            top: food.y * CELL_SIZE + 1,
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />

        {/* Snake */}
        {snake.map((segment, i) => (
          <div
            key={i}
            className={`absolute ${i === 0 ? "bg-primary" : "bg-accent"} rounded-sm`}
            style={{
              width: CELL_SIZE - 2,
              height: CELL_SIZE - 2,
              left: segment.x * CELL_SIZE + 1,
              top: segment.y * CELL_SIZE + 1,
              opacity: 1 - i * 0.03,
            }}
          />
        ))}

        {/* Overlays */}
        {!started && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80">
            <p className="font-ps2 text-foreground text-sm animate-pulse">Press ENTER to start</p>
          </div>
        )}
        {gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 gap-2">
            <p className="font-ps2 text-destructive text-lg">GAME OVER</p>
            <p className="font-ps2 text-foreground text-sm">Score: {score}</p>
            <p className="font-ps2 text-muted-foreground text-xs animate-pulse">Press ENTER to retry</p>
          </div>
        )}
      </div>

      <div className="flex gap-8 font-ps2 text-sm text-muted-foreground">
        <span>Arrow keys to move</span>
        <span>ESC to back</span>
      </div>

      {/* Mobile controls */}
      <div className="flex flex-col items-center gap-2 md:hidden">
        <button onClick={() => { dirRef.current = "UP"; setDirection("UP"); if (!started) resetGame(); }} className="w-12 h-12 bg-secondary rounded flex items-center justify-center text-foreground font-ps2">↑</button>
        <div className="flex gap-2">
          <button onClick={() => { dirRef.current = "LEFT"; setDirection("LEFT"); }} className="w-12 h-12 bg-secondary rounded flex items-center justify-center text-foreground font-ps2">←</button>
          <button onClick={() => { dirRef.current = "DOWN"; setDirection("DOWN"); }} className="w-12 h-12 bg-secondary rounded flex items-center justify-center text-foreground font-ps2">↓</button>
          <button onClick={() => { dirRef.current = "RIGHT"; setDirection("RIGHT"); }} className="w-12 h-12 bg-secondary rounded flex items-center justify-center text-foreground font-ps2">→</button>
        </div>
      </div>

      <button onClick={onBack} className="font-ps2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        ○ Back
      </button>
    </main>
  );
};

export default SnakeGame;
````

## File: src/hooks/use-mobile.tsx
````typescript
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
````

## File: src/hooks/use-toast.ts
````typescript
import * as React from "react";

import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

type Toast = Omit<ToasterToast, "id">;

function toast({ ...props }: Toast) {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast, toast };
````

## File: src/lib/utils.ts
````typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
````

## File: src/pages/NotFound.tsx
````typescript
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
````

## File: src/test/example.test.ts
````typescript
import { describe, it, expect } from "vitest";

describe("example", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });
});
````

## File: src/test/setup.ts
````typescript
import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});
````

## File: src/App.css
````css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
````

## File: src/App.tsx
````typescript
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BrowsePage from "./pages/BrowsePage";
import GamesPage from "./pages/GamesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
````

## File: src/main.tsx
````typescript
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
````

## File: src/vite-env.d.ts
````typescript
/// <reference types="vite/client" />
````

## File: .gitignore
````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
````

## File: components.json
````json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
````

## File: eslint.config.js
````javascript
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
);
````

## File: package.json
````json
{
  "name": "vite_react_shadcn_ts",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "^1.2.11",
    "@radix-ui/react-alert-dialog": "^1.1.14",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.2",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-context-menu": "^2.2.15",
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-dropdown-menu": "^2.1.15",
    "@radix-ui/react-hover-card": "^1.1.14",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.15",
    "@radix-ui/react-navigation-menu": "^1.2.13",
    "@radix-ui/react-popover": "^1.1.14",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.7",
    "@radix-ui/react-scroll-area": "^1.2.9",
    "@radix-ui/react-select": "^2.2.5",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.5",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.5",
    "@radix-ui/react-tabs": "^1.1.12",
    "@radix-ui/react-toast": "^1.2.14",
    "@radix-ui/react-toggle": "^1.1.9",
    "@radix-ui/react-toggle-group": "^1.1.10",
    "@radix-ui/react-tooltip": "^1.2.7",
    "@react-three/drei": "^9.122.0",
    "@react-three/fiber": "^8.18",
    "@react-three/postprocessing": "^2.16",
    "@tanstack/react-query": "^5.83.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.6.0",
    "framer-motion": "^12.35.1",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.462.0",
    "next-themes": "^0.3.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.61.1",
    "react-resizable-panels": "^2.1.9",
    "react-router-dom": "^6.30.1",
    "recharts": "^2.15.4",
    "sonner": "^1.7.4",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "three": ">=0.133",
    "vaul": "^0.9.9",
    "zod": "^3.25.76"
  },
  "devDependencies": {
    "@eslint/js": "^9.32.0",
    "@testing-library/jest-dom": "^6.6.0",
    "@testing-library/react": "^16.0.0",
    "@tailwindcss/typography": "^0.5.16",
    "@types/node": "^22.16.5",
    "@types/react": "^18.3.23",
    "@types/react-dom": "^18.3.7",
    "@vitejs/plugin-react-swc": "^3.11.0",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.32.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^15.15.0",
    "jsdom": "^20.0.3",
    "lovable-tagger": "^1.1.13",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.38.0",
    "vite": "^5.4.19",
    "vitest": "^3.2.4"
  }
}
````

## File: postcss.config.js
````javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
````

## File: README.md
````markdown
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
````

## File: tailwind.config.ts
````typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        ps2: ['"Audiowide"', 'sans-serif'],
        body: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        ps2: {
          glow: "hsl(var(--ps2-glow))",
          dark: "hsl(var(--ps2-dark))",
          menu: "hsl(var(--ps2-menu-bg))",
          "menu-fg": "hsl(var(--ps2-menu-fg))",
          highlight: "hsl(var(--ps2-highlight))",
          orb: "hsl(var(--ps2-orb))",
          bar: "hsl(var(--ps2-bar))",
          gray: "hsl(var(--ps2-gray))",
          selected: "hsl(var(--ps2-selected))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "ps2-float": {
          "0%, 100%": { transform: "translateY(0px) rotateY(0deg)" },
          "50%": { transform: "translateY(-8px) rotateY(180deg)" },
        },
        "ps2-spin": {
          "0%": { transform: "perspective(200px) rotateY(0deg) rotateX(10deg)" },
          "100%": { transform: "perspective(200px) rotateY(360deg) rotateX(10deg)" },
        },
        "ps2-bounce": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-6px) scale(1.05)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ps2-float": "ps2-float 4s ease-in-out infinite",
        "ps2-spin": "ps2-spin 6s linear infinite",
        "ps2-bounce": "ps2-bounce 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
````

## File: tsconfig.app.json
````json
{
  "compilerOptions": {
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "moduleDetection": "force",
    "moduleResolution": "bundler",
    "noEmit": true,
    "noFallthroughCasesInSwitch": false,
    "noImplicitAny": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },
    "skipLibCheck": true,
    "strict": false,
    "target": "ES2020",
    "types": [
      "vitest/globals"
    ],
    "useDefineForClassFields": true
  },
  "include": [
    "src"
  ]
}
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "allowJs": true,
    "noImplicitAny": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },
    "skipLibCheck": true,
    "strictNullChecks": false
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ]
}
````

## File: tsconfig.node.json
````json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
````

## File: vite.config.ts
````typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
````

## File: vitest.config.ts
````typescript
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
````

## File: src/components/BlogIcon.tsx
````typescript
const BlogIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%" className={className}>
    <defs>
      <linearGradient id="blogTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1E3A8A" />
      </linearGradient>
      <linearGradient id="blogSide1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1E40AF" />
      </linearGradient>
      <linearGradient id="blogSide2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1D4ED8" />
        <stop offset="100%" stopColor="#172554" />
      </linearGradient>
      <radialGradient id="blogGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="#111827" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#blogGlow)" fillOpacity="0.5"/>
    <g transform="translate(200, 260)">
      <polygon points="0,-40 70,-10 0,20 -70,-10" fill="url(#blogTop)" stroke="#93C5FD" strokeWidth="1.5" strokeLinejoin="round"/>
      <polygon points="-70,-10 0,20 0,50 -70,20" fill="url(#blogSide1)" stroke="#60A5FA" strokeWidth="1" strokeLinejoin="round"/>
      <polygon points="0,20 70,-10 70,20 0,50" fill="url(#blogSide2)" stroke="#3B82F6" strokeWidth="1" strokeLinejoin="round"/>
      <path d="M-55,-6 L-10,13 M-45,0 L-10,15 M10,13 L55,-6 M10,15 L45,0" stroke="#BFDBFE" strokeWidth="1.5" opacity="0.4"/>
    </g>
    <g transform="translate(200, 160)">
      <ellipse cx="0" cy="70" rx="35" ry="12" fill="#000" opacity="0.3"/>
      <polygon points="-45,-65 -45,45 35,65 35,-45" fill="#9CA3AF"/>
      <polygon points="-40,-70 -40,40 40,60 40,-50" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="2" strokeLinejoin="round"/>
      <g transform="translate(-20, -40)">
        <path d="M -5 10 L 40 22" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round"/>
        <path d="M -5 22 L 30 32" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round"/>
        <path d="M -5 34 L 45 47" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
        <path d="M -5 44 L 35 55" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
        <path d="M -5 54 L 45 67" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
      </g>
      <g transform="translate(0, 15)">
        <text x="-22" y="5" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="60" fill="#1E3A8A" transform="skewY(14)">B</text>
        <text x="-21" y="3" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="60" fill="#2563EB" transform="skewY(14)">B</text>
        <text x="-20" y="0" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="60" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" transform="skewY(14)">B</text>
      </g>
    </g>
  </svg>
);

export default BlogIcon;
````

## File: src/components/CVIcon.tsx
````typescript
const CVIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%" className={className}>
    <defs>
      <linearGradient id="pedestalTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6B7280" />
        <stop offset="100%" stopColor="#374151" />
      </linearGradient>
      <linearGradient id="pedestalSide1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4B5563" />
        <stop offset="100%" stopColor="#1F2937" />
      </linearGradient>
      <linearGradient id="pedestalSide2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#374151" />
        <stop offset="100%" stopColor="#111827" />
      </linearGradient>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FCD34D" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#4B5563" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="#111827" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#glow)" fillOpacity="0.5"/>
    <g transform="translate(200, 260)">
      <polygon points="0,-40 70,-10 0,20 -70,-10" fill="url(#pedestalTop)" stroke="#9CA3AF" strokeWidth="1.5" strokeLinejoin="round"/>
      <polygon points="-70,-10 0,20 0,50 -70,20" fill="url(#pedestalSide1)" stroke="#4B5563" strokeWidth="1" strokeLinejoin="round"/>
      <polygon points="0,20 70,-10 70,20 0,50" fill="url(#pedestalSide2)" stroke="#374151" strokeWidth="1" strokeLinejoin="round"/>
      <path d="M-55,-6 L-10,13 M-45,0 L-10,15 M10,13 L55,-6 M10,15 L45,0" stroke="#9CA3AF" strokeWidth="1.5" opacity="0.4"/>
    </g>
    <g transform="translate(200, 160)">
      <ellipse cx="0" cy="70" rx="35" ry="12" fill="#000" opacity="0.3"/>
      <polygon points="-45,-65 -45,45 35,65 35,-45" fill="#D1D5DB"/>
      <polygon points="-40,-70 -40,40 40,60 40,-50" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="2" strokeLinejoin="round"/>
      <g transform="translate(-20, -40)">
        <rect x="-5" y="-5" width="22" height="26" fill="#9CA3AF" rx="2" transform="skewY(14)"/>
        <path d="M 28 4 L 50 10" stroke="#4B5563" strokeWidth="4" strokeLinecap="round"/>
        <path d="M 28 14 L 45 19" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round"/>
        <path d="M -5 30 L 45 43" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
        <path d="M -5 40 L 40 52" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
        <path d="M -5 50 L 45 63" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
        <path d="M -5 60 L 35 70" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
        <path d="M -5 70 L 45 83" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
      </g>
      <g transform="translate(0, 15)">
        <text x="-32" y="5" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="50" fill="#92400E" transform="skewY(14)">CV</text>
        <text x="-31" y="3" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="50" fill="#B45309" transform="skewY(14)">CV</text>
        <text x="-30" y="0" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="50" fill="url(#gold)" stroke="#FEF3C7" strokeWidth="1.5" transform="skewY(14)">CV</text>
      </g>
    </g>
  </svg>
);

export default CVIcon;
````

## File: src/components/GitHubIcon.tsx
````typescript
const GitHubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%" className={className}>
    <defs>
      <linearGradient id="github3D_face_black" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#000000" /><stop offset="100%" stopColor="#111111" />
      </linearGradient>
      <linearGradient id="github3D_side_black" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#222222" /><stop offset="100%" stopColor="#333333" />
      </linearGradient>
      <radialGradient id="github3D_glow_black" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#4B5563" stopOpacity="0.15"/>
        <stop offset="100%" stopColor="#111827" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#github3D_glow_black)" fillOpacity="0.5"/>
    <g transform="translate(200, 200)">
      <ellipse cx="0" cy="90" rx="50" ry="15" fill="#000" opacity="0.3"/>
      <g transform="skewY(14)">
        <path d="M0 -60c-33.1 0-60 26.9-60 60 0 26.5 17.2 49 41.1 57.1 3 .6 4.1-1.3 4.1-2.9v-10.3c-16.7 3.6-20.2-8.1-20.2-8.1-2.7-7-6.6-8.8-6.6-8.8-5.4-3.7.4-3.6.4-3.6 6 .4 9.1 6.1 9.1 6.1 5.3 9.1 13.9 6.5 17.3 4.9.5-3.9 2.1-6.5 3.9-8-13.3-1.5-27.2-6.6-27.2-29.5 0-6.6 2.3-11.9 6.1-16-.6-1.5-2.7-7.7.6-15.8 0 0 5.1-1.6 16.6 6.2 4.8-1.3 10-2 15.1-2 5.1 0 10.3.7 15.1 2 11.6-7.8 16.6-6.2 16.6-6.2 3.2 8.1 1.2 14.3.6 15.8 3.8 4.1 6.1 9.4 6.1 16 0 22.9-13.9 28-27.2 29.5 2.1 1.8 4.1 5.5 4.1 11.1v16.5c0 1.6 1.1 3.5 4.1 2.9 23.9-8.1 41.1-30.6 41.1-57.1 0-33.1-26.9-60-60-60z" fill="url(#github3D_side_black)"/>
        <path d="M0 -60c-33.1 0-60 26.9-60 60 0 26.5 17.2 49 41.1 57.1 3 .6 4.1-1.3 4.1-2.9v-10.3c-16.7 3.6-20.2-8.1-20.2-8.1-2.7-7-6.6-8.8-6.6-8.8-5.4-3.7.4-3.6.4-3.6 6 .4 9.1 6.1 9.1 6.1 5.3 9.1 13.9 6.5 17.3 4.9.5-3.9 2.1-6.5 3.9-8-13.3-1.5-27.2-6.6-27.2-29.5 0-6.6 2.3-11.9 6.1-16-.6-1.5-2.7-7.7.6-15.8 0 0 5.1-1.6 16.6 6.2 4.8-1.3 10-2 15.1-2 5.1 0 10.3.7 15.1 2 11.6-7.8 16.6-6.2 16.6-6.2 3.2 8.1 1.2 14.3.6 15.8 3.8 4.1 6.1 9.4 6.1 16 0 22.9-13.9 28-27.2 29.5 2.1 1.8 4.1 5.5 4.1 11.1v16.5c0 1.6 1.1 3.5 4.1 2.9 23.9-8.1 41.1-30.6 41.1-57.1 0-33.1-26.9-60-60-60z" fill="url(#github3D_face_black)" stroke="#000000" strokeWidth="1" transform="translate(1.5, 1.5)"/>
      </g>
    </g>
  </svg>
);

export default GitHubIcon;
````

## File: src/components/MediumIcon.tsx
````typescript
const MediumIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%" className={className}>
    <defs>
      <linearGradient id="medTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4B5563" />
        <stop offset="100%" stopColor="#111827" />
      </linearGradient>
      <linearGradient id="medSide1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#374151" />
        <stop offset="100%" stopColor="#000000" />
      </linearGradient>
      <linearGradient id="medSide2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1F2937" />
        <stop offset="100%" stopColor="#000000" />
      </linearGradient>
      <radialGradient id="medGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#6B7280" stopOpacity="0.15"/>
        <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#medGlow)" fillOpacity="0.5"/>
    <g transform="translate(200, 260)">
      <polygon points="0,-40 70,-10 0,20 -70,-10" fill="url(#medTop)" stroke="#6B7280" strokeWidth="1.5" strokeLinejoin="round"/>
      <polygon points="-70,-10 0,20 0,50 -70,20" fill="url(#medSide1)" stroke="#4B5563" strokeWidth="1" strokeLinejoin="round"/>
      <polygon points="0,20 70,-10 70,20 0,50" fill="url(#medSide2)" stroke="#374151" strokeWidth="1" strokeLinejoin="round"/>
      <path d="M-55,-6 L-10,13 M-45,0 L-10,15 M10,13 L55,-6 M10,15 L45,0" stroke="#9CA3AF" strokeWidth="1.5" opacity="0.3"/>
    </g>
    <g transform="translate(200, 160)">
      <ellipse cx="0" cy="70" rx="35" ry="12" fill="#000" opacity="0.4"/>
      <polygon points="-45,-65 -45,45 35,65 35,-45" fill="#111827"/>
      <polygon points="-40,-70 -40,40 40,60 40,-50" fill="#1F2937" stroke="#4B5563" strokeWidth="2" strokeLinejoin="round"/>
      <g transform="translate(-20, -40)">
        <path d="M -5 20 L 40 32" stroke="#6B7280" strokeWidth="3" strokeLinecap="round"/>
        <path d="M -5 32 L 35 43" stroke="#4B5563" strokeWidth="3" strokeLinecap="round"/>
        <path d="M -5 44 L 45 57" stroke="#4B5563" strokeWidth="3" strokeLinecap="round"/>
        <path d="M -5 56 L 30 66" stroke="#4B5563" strokeWidth="3" strokeLinecap="round"/>
      </g>
      <g transform="translate(0, 15)">
        <text x="-27" y="5" fontFamily="Georgia, serif" fontWeight="900" fontSize="60" fill="#000000" transform="skewY(14)">M</text>
        <text x="-26" y="3" fontFamily="Georgia, serif" fontWeight="900" fontSize="60" fill="#4B5563" transform="skewY(14)">M</text>
        <text x="-25" y="0" fontFamily="Georgia, serif" fontWeight="900" fontSize="60" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" transform="skewY(14)">M</text>
      </g>
    </g>
  </svg>
);

export default MediumIcon;
````

## File: src/components/PortfolioIcon.tsx
````typescript
const PortfolioIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className={className}>
    <defs>
      <linearGradient id="pedestalTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6B7280" />
        <stop offset="100%" stopColor="#374151" />
      </linearGradient>
      <linearGradient id="pedestalSide1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4B5563" />
        <stop offset="100%" stopColor="#1F2937" />
      </linearGradient>
      <linearGradient id="pedestalSide2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#374151" />
        <stop offset="100%" stopColor="#111827" />
      </linearGradient>
      <linearGradient id="folderBackBlue" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1E3A8A" />
        <stop offset="100%" stopColor="#172554" />
      </linearGradient>
      <linearGradient id="folderFrontBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <radialGradient id="bgGlowFolderClean" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="#111827" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bgGlowFolderClean)" fillOpacity="0.5"/>
    <g transform="translate(200, 260)">
      <polygon points="0,-40 70,-10 0,20 -70,-10" fill="url(#pedestalTop)" stroke="#9CA3AF" strokeWidth="1.5" strokeLinejoin="round"/>
      <polygon points="-70,-10 0,20 0,50 -70,20" fill="url(#pedestalSide1)" stroke="#4B5563" strokeWidth="1" strokeLinejoin="round"/>
      <polygon points="0,20 70,-10 70,20 0,50" fill="url(#pedestalSide2)" stroke="#374151" strokeWidth="1" strokeLinejoin="round"/>
      <path d="M-55,-6 L-10,13 M-45,0 L-10,15 M10,13 L55,-6 M10,15 L45,0" stroke="#9CA3AF" strokeWidth="1.5" opacity="0.4"/>
    </g>
    <g transform="translate(200, 160)">
      <ellipse cx="0" cy="70" rx="40" ry="12" fill="#000" opacity="0.3"/>
      <g transform="skewY(14)">
        <path d="M -40 -60 L -10 -60 L 0 -50 L 40 -50 L 40 -40 L -40 -40 Z" fill="url(#folderBackBlue)" stroke="#1E40AF" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="-40" y="-45" width="80" height="70" fill="url(#folderBackBlue)" stroke="#1E40AF" strokeWidth="1.5" rx="2"/>
        <rect x="-33" y="-55" width="66" height="75" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="1" rx="1"/>
        <rect x="-28" y="-50" width="66" height="75" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1" rx="1"/>
        <rect x="-23" y="-45" width="66" height="75" fill="#F9FAFB" stroke="#D1D5DB" strokeWidth="1" rx="1"/>
        <rect x="-15" y="-35" width="15" height="15" fill="#9CA3AF" rx="2"/>
        <line x1="5" y1="-30" x2="35" y2="-30" stroke="#4B5563" strokeWidth="4" strokeLinecap="round"/>
        <line x1="5" y1="-22" x2="25" y2="-22" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round"/>
        <line x1="-15" y1="-10" x2="35" y2="-10" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
        <line x1="-15" y1="0" x2="25" y2="0" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
        <line x1="-15" y1="10" x2="35" y2="10" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
        <line x1="-15" y1="20" x2="20" y2="20" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round"/>
        <rect x="-45" y="-15" width="85" height="55" fill="url(#folderFrontBlue)" stroke="#60A5FA" strokeWidth="1.5" rx="3"/>
        <line x1="-35" y1="30" x2="-20" y2="30" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <line x1="10" y1="30" x2="30" y2="30" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </g>
    </g>
  </svg>
);

export default PortfolioIcon;
````

## File: src/components/PS2BottomBar.tsx
````typescript
import { motion } from "framer-motion";

interface PS2BottomBarProps {
  actions: { icon: string; label: string; onClick?: () => void }[];
}

const PS2BottomBar = ({ actions }: PS2BottomBarProps) => {
  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 bg-ps2-bar/90 backdrop-blur-sm border-t border-border px-8 py-4 flex justify-center gap-16"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      aria-label="PS2 controller actions"
    >
      {actions.map((action) => (
        <button
          key={action.label}
          onClick={action.onClick}
          className="flex items-center gap-3 text-foreground font-body text-sm tracking-wider hover:text-primary transition-colors"
        >
          <span className="text-lg">{action.icon}</span>
          <span>{action.label}</span>
        </button>
      ))}
    </motion.nav>
  );
};

export default PS2BottomBar;
````

## File: src/pages/GamesPage.tsx
````typescript
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import SnakeGame from "@/components/SnakeGame";

const gameItems = [
  { id: "snake", label: "Snake", icon: Gamepad2, color: "hsl(120, 60%, 50%)" },
];

const GamesPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => navigate("/");

  const handleEnter = () => {
    setPlaying(true);
  };

  useEffect(() => {
    if (playing) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setSelectedIndex((p) => (p - 1 + gameItems.length) % gameItems.length);
      if (e.key === "ArrowRight") setSelectedIndex((p) => (p + 1) % gameItems.length);
      if (e.key === "Enter" || e.key === "x") handleEnter();
      if (e.key === "Escape" || e.key === "o") handleBack();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, playing]);

  if (playing) {
    return <SnakeGame onBack={() => setPlaying(false)} />;
  }

  return (
    <main className="h-screen bg-ps2-gray flex flex-col" role="application" aria-label="Games Memory Card">
      {/* Header */}
      <header className="flex items-center px-[5%] pt-[7vh] pb-[2.5vh]">
        <nav className="font-body text-ps2-menu-fg text-sm tracking-wide flex items-center gap-2">
          <button onClick={handleBack} className="hover:text-primary transition-colors">Home</button>
          <span className="text-ps2-menu-fg/50">›</span>
          <span className="font-bold">Games</span>
        </nav>
      </header>

      {/* Items Grid */}
      <section className="flex-1 flex items-center justify-center px-[8%]">
        <div className="grid grid-cols-5 gap-x-10 gap-y-8">
          {gameItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => {
                setSelectedIndex(index);
                handleEnter();
              }}
              className="flex flex-col items-center gap-2 group focus:outline-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={item.label}
            >
              <motion.div
                className={`relative w-20 h-20 flex items-center justify-center ${
                  selectedIndex === index ? "ring-2 ring-ps2-selected rounded-sm" : ""
                }`}
                animate={selectedIndex === index ? {
                  y: [0, -6, 0],
                  rotateY: [0, 180, 360],
                } : {
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: selectedIndex === index ? 2 : 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ perspective: "200px", transformStyle: "preserve-3d" }}
              >
                {/* PS2 memory card save icon style */}
                <div className="relative w-16 h-16">
                  {/* Base card shape */}
                  <div 
                    className="absolute inset-0 rounded-sm shadow-lg overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${item.color}, ${item.color}88)`,
                      transform: "rotateX(10deg)" 
                    }}
                  >
                    {/* Icon centered */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <item.icon size={28} className="text-ps2-menu-fg/90 drop-shadow-md" />
                    </div>
                    {/* Bottom label */}
                    <div className="absolute bottom-1 left-0 right-0 text-center font-body text-[7px] text-ps2-menu-fg/70 font-bold uppercase tracking-wider">
                      {item.id}
                    </div>
                  </div>
                  {/* Side accent */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-sm"
                    style={{ background: `linear-gradient(to bottom, ${item.color}, ${item.color}66)` }}
                  />
                </div>
                
                {/* Glow effect */}
                {selectedIndex === index && (
                  <div className="absolute inset-0 bg-ps2-glow/30 rounded-sm blur-lg" />
                )}
              </motion.div>
              <span className={`text-xs font-body tracking-wider ${
                selectedIndex === index ? "text-ps2-menu-fg" : "text-ps2-menu-fg/70"
              } group-hover:text-ps2-menu-fg transition-colors`}>
                {item.label}
              </span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Bottom bar */}
      <nav className="flex items-center justify-center gap-16 px-10 pt-4 pb-[4vh] font-body">
        <button onClick={handleEnter} className="flex items-center gap-2 text-ps2-menu-fg text-base tracking-wide hover:text-primary transition-colors">
          <span className="font-bold">↵</span>
          <span className="font-bold">Enter</span>
        </button>
        <button onClick={handleBack} className="flex items-center gap-2 text-ps2-menu-fg text-base tracking-wide hover:text-primary transition-colors">
          <span className="font-bold">←</span>
          <span className="font-bold">Back</span>
        </button>
      </nav>
    </main>
  );
};

export default GamesPage;
````

## File: src/index.css
````css
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 220 25% 6%;
    --foreground: 210 40% 96%;

    --card: 220 20% 12%;
    --card-foreground: 210 40% 96%;

    --popover: 220 20% 12%;
    --popover-foreground: 210 40% 96%;

    --primary: 210 100% 60%;
    --primary-foreground: 220 25% 6%;

    --secondary: 220 15% 18%;
    --secondary-foreground: 210 40% 90%;

    --muted: 220 15% 15%;
    --muted-foreground: 210 10% 55%;

    --accent: 200 100% 70%;
    --accent-foreground: 220 25% 6%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 220 15% 20%;
    --input: 220 15% 20%;
    --ring: 210 100% 60%;

    --radius: 0.25rem;

    /* PS2 specific tokens */
    --ps2-glow: 210 100% 65%;
    --ps2-dark: 220 30% 4%;
    --ps2-menu-bg: 220 10% 75%;
    --ps2-menu-fg: 220 20% 15%;
    --ps2-highlight: 210 100% 50%;
    --ps2-orb: 200 100% 75%;
    --ps2-bar: 220 20% 8%;
    --ps2-gray: 220 5% 82%;
    --ps2-selected: 210 80% 55%;

    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    overflow: hidden;
    caret-color: transparent;
  }
}

/* PS2 Animations */
@keyframes ps2-float {
  0%, 100% { transform: translateY(0px) rotateY(0deg); }
  50% { transform: translateY(-8px) rotateY(180deg); }
}

@keyframes ps2-glow-pulse {
  0%, 100% { opacity: 0.4; filter: blur(8px); }
  50% { opacity: 0.8; filter: blur(12px); }
}

@keyframes ps2-orb-float {
  0% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(10px, -15px) scale(1.1); }
  50% { transform: translate(-5px, -25px) scale(0.9); }
  75% { transform: translate(-15px, -10px) scale(1.05); }
  100% { transform: translate(0, 0) scale(1); }
}

@keyframes ps2-spin-3d {
  0% { transform: perspective(200px) rotateY(0deg) rotateX(10deg); }
  100% { transform: perspective(200px) rotateY(360deg) rotateX(10deg); }
}

@keyframes ps2-icon-bounce {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-6px) scale(1.05); }
}

@keyframes ps2-scan {
  0% { transform: translateY(-100%); opacity: 0; }
  50% { opacity: 0.03; }
  100% { transform: translateY(100vh); opacity: 0; }
}

.ps2-scanline {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: hsl(var(--foreground));
  animation: ps2-scan 4s linear infinite;
  pointer-events: none;
  z-index: 100;
}

.ps2-crt-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 99;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.03) 2px,
    rgba(0, 0, 0, 0.03) 4px
  );
}
````

## File: index.html
````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- TODO: Set the document title to the name of your application -->
    <title>PS2 Portfolio | Memory Card Browser</title>
    <meta name="description" content="A PlayStation 2 memory card browser inspired personal portfolio. Browse projects, blog, CV, and play Snake.">
    <meta name="author" content="Portfolio" />
    <meta name="keywords" content="portfolio, PS2, PlayStation 2, memory card, developer, retro" />

    
    
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/95993f3d-d0ae-405f-991e-c4381837ff8c/id-preview-504e9c3d--796d21b1-b33e-4b2e-9ceb-954c8df891d6.lovable.app-1772955353259.png">

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@Lovable" />
    <meta name="twitter:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/95993f3d-d0ae-405f-991e-c4381837ff8c/id-preview-504e9c3d--796d21b1-b33e-4b2e-9ceb-954c8df891d6.lovable.app-1772955353259.png">
    <meta property="og:title" content="PS2 Portfolio | Memory Card Browser">
  <meta name="twitter:title" content="PS2 Portfolio | Memory Card Browser">
  <meta property="og:description" content="A PlayStation 2 memory card browser inspired personal portfolio. Browse projects, blog, CV, and play Snake.">
  <meta name="twitter:description" content="A PlayStation 2 memory card browser inspired personal portfolio. Browse projects, blog, CV, and play Snake.">
</head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
````

## File: src/pages/Index.tsx
````typescript
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PS2Orbs from "@/components/PS2Orbs";

const menuItems = [
{ id: "browser", label: "Browser", path: "/browse" },
{ id: "blog", label: "My Blog", path: "https://damarowen.blog/blogs" },
{ id: "games", label: "Games", path: "/games" }];


const Index = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [enterFlash, setEnterFlash] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    if (path.startsWith("http")) {
      window.open(path, "_blank");
    } else {
      navigate(path);
    }
  };

  const handleEnter = () => {
    setEnterFlash(true);
    setTimeout(() => {
      handleNavigate(menuItems[selectedIndex].path);
    }, 300);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") setSelectedIndex((p) => (p - 1 + menuItems.length) % menuItems.length);
      if (e.key === "ArrowDown") setSelectedIndex((p) => (p + 1) % menuItems.length);
      if (e.key === "Enter") handleEnter();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <main
      className="relative min-h-screen bg-background overflow-hidden flex flex-col"
      role="application"
      aria-label="PS2 Menu">
      
      <div className="ps2-crt-overlay" />
      <div className="ps2-scanline" />

      {/* Enter flash overlay */}
      {enterFlash &&
      <motion.div
        className="fixed inset-0 z-50 bg-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 0.3 }} />

      }

      {/* Center content — orbs and menu side by side, close together */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative flex items-center gap-6 md:gap-10">
          {/* Orbs — covers full area so they can pass over the menu */}
          <div className="absolute inset-0 -left-20 -right-20 -top-20 -bottom-20 pointer-events-none z-10" style={{ transform: 'translateX(-90px)' }}>
            <PS2Orbs />
          </div>

          {/* Spacer matching orb area */}
          <div className="w-52 h-48 md:w-64 md:h-56" />

          {/* Menu text — below orbs layer */}
          <div className="flex flex-col gap-1 relative z-20 pointer-events-auto">
            {menuItems.map((item, index) =>
            <button
              key={item.id}
              onClick={() => {
                setSelectedIndex(index);
                handleNavigate(item.path);
              }}
              className="text-left focus:outline-none py-0.5">
              
                <motion.span
                className={`block font-body tracking-wider transition-all ${
                selectedIndex === index ?
                "text-foreground text-2xl md:text-3xl font-bold" :
                "text-muted-foreground text-lg md:text-xl"}`
                }
                animate={
                selectedIndex === index ?
                { textShadow: "0 0 20px hsl(210 100% 65% / 0.5)" } :
                { textShadow: "none" }
                }>
                
                  {item.label}
                </motion.span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar — centered */}
      <motion.nav
        className="flex items-center justify-center gap-16 px-8 py-5 rounded-none opacity-50"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 0.5 }}
        transition={{ delay: 0.4 }}>
        
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center gap-0.5">
            <span className="inline-flex items-center justify-center w-5 h-5 border border-foreground/60 rounded-sm text-[10px] text-foreground leading-none font-semibold">▲</span>
            <span className="inline-flex items-center justify-center w-5 h-5 border border-foreground/60 rounded-sm text-[10px] text-foreground leading-none font-semibold">▼</span>
          </div>
          <span className="font-body text-sm tracking-wider text-foreground font-semibold">Select</span>
        </div>
        <button
          onClick={handleEnter}
          className="font-body text-sm tracking-wider text-foreground font-semibold hover:text-primary transition-colors focus:outline-none">
          
          Enter
        </button>
      </motion.nav>
    </main>);

};

export default Index;
````

## File: src/pages/BrowsePage.tsx
````typescript
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CVIcon from "@/components/CVIcon";
import BlogIcon from "@/components/BlogIcon";
import MediumIcon from "@/components/MediumIcon";
import GitHubIcon from "@/components/GitHubIcon";
import PortfolioIcon from "@/components/PortfolioIcon";


const browseItems = [
  { id: "cv", label: "My CV", customIcon: "cv", color: "hsl(210, 80%, 65%)", action: "download-cv" },
  { id: "blog", label: "My Blog", customIcon: "blog", color: "hsl(140, 70%, 55%)", action: "link", url: "https://damarowen.blog/blogs" },
  { id: "medium", label: "Medium", customIcon: "medium", color: "hsl(0, 0%, 90%)", action: "link", url: "https://medium.com/@damarowen" },
  { id: "github", label: "GitHub", customIcon: "github", color: "hsl(0, 0%, 10%)", action: "link", url: "https://github.com/damarowen" },
  { id: "portfolio", label: "My Portfolio", customIcon: "portfolio", color: "hsl(220, 80%, 60%)", action: "link", url: "https://damarowen.github.io/myPortofolio/" },
];

const BrowsePage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const handleBack = () => navigate("/");

  const handleEnter = () => {
    const item = browseItems[selectedIndex];
    if (item.action === "download-cv") {
      const link = document.createElement("a");
      link.href = "/cv.pdf";
      link.download = "CV.pdf";
      link.click();
    } else if (item.action === "link" && item.url) {
      window.open(item.url, "_blank");
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setSelectedIndex((p) => (p - 1 + browseItems.length) % browseItems.length);
      if (e.key === "ArrowRight") setSelectedIndex((p) => (p + 1) % browseItems.length);
      if (e.key === "Enter" || e.key === "x") handleEnter();
      if (e.key === "Escape" || e.key === "o") handleBack();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <main className="h-screen bg-ps2-gray flex flex-col" role="application" aria-label="Browse Memory Card">
      {/* Header */}
      <header className="flex items-center px-[5%] pt-[7vh] pb-[2.5vh]">
        <nav className="font-body text-ps2-menu-fg text-sm tracking-wide flex items-center gap-2">
          <button onClick={handleBack} className="hover:text-primary transition-colors">Home</button>
          <span className="text-ps2-menu-fg/50">›</span>
          <span className="font-bold">Browser</span>
        </nav>
      </header>

      {/* Items Grid */}
      <section className="flex-1 flex items-center justify-center px-[8%]">
        <div className="grid grid-cols-3 gap-x-10 gap-y-8">
          {browseItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => {
                setSelectedIndex(index);
                handleEnter();
              }}
              className="flex flex-col items-center gap-2 group focus:outline-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={item.label}
            >
              <motion.div
                className={`relative w-28 h-28 flex items-center justify-center ${
                  selectedIndex === index ? "ring-2 ring-ps2-selected rounded-sm" : ""
                }`}
                animate={selectedIndex === index ? {
                  y: [0, -6, 0],
                  rotateY: [0, 180, 360],
                } : {
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: selectedIndex === index ? 2 : 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ perspective: "200px", transformStyle: "preserve-3d" }}
              >
                <div className="relative w-28 h-28 flex items-center justify-center">
                  {item.customIcon === "cv" ? (
                    <CVIcon className="w-full h-full" />
                  ) : item.customIcon === "blog" ? (
                    <BlogIcon className="w-full h-full" />
                  ) : item.customIcon === "medium" ? (
                    <MediumIcon className="w-full h-full" />
                  ) : item.customIcon === "github" ? (
                    <GitHubIcon className="w-full h-full" />
                  ) : item.customIcon === "portfolio" ? (
                    <PortfolioIcon className="w-full h-full" />
                  ) : null}
                </div>
                
                {/* Glow effect */}
                {selectedIndex === index && (
                  <div className="absolute inset-0 bg-ps2-glow/30 rounded-sm blur-lg" />
                )}
              </motion.div>
              <span className={`text-xs font-body tracking-wider ${
                selectedIndex === index ? "text-ps2-menu-fg" : "text-ps2-menu-fg/70"
              } group-hover:text-ps2-menu-fg transition-colors`}>
                {item.label}
              </span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Bottom bar */}
      <nav className="flex items-center justify-center gap-16 px-10 pt-4 pb-[4vh] font-body">
        <button onClick={handleEnter} className="flex items-center gap-2 text-ps2-menu-fg text-base tracking-wide hover:text-primary transition-colors">
          <span className="font-bold">↵</span>
          <span className="font-bold">Enter</span>
        </button>
        <button onClick={handleBack} className="flex items-center gap-2 text-ps2-menu-fg text-base tracking-wide hover:text-primary transition-colors">
          <span className="font-bold">←</span>
          <span className="font-bold">Back</span>
        </button>
      </nav>
    </main>
  );
};

export default BrowsePage;
````
