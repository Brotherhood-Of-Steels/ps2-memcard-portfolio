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