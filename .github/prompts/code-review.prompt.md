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