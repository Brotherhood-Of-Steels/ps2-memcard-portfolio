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