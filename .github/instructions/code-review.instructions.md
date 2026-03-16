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