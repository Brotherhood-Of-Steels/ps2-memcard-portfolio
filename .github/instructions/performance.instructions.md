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