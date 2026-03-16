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