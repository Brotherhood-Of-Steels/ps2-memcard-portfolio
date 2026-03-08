

## Plan: Upgrade Browse Page Icons to Colorful 3D Style

Currently the browse page icons are flat colored cards with a simple gradient. We'll transform them into eye-catching, colorful 3D "memory card save" icons with multiple layers, vivid gradients, shine effects, and animated glows.

### Changes to `src/pages/BrowsePage.tsx`

1. **More vibrant colors** for each item:
   - CV: Rich blue-to-purple gradient
   - Blog: Green-to-teal gradient  
   - Medium: Orange-to-pink gradient

2. **Multi-layer 3D card design** replacing the current flat card:
   - Back shadow layer (darker, offset) for depth
   - Main card with vivid dual-color gradient background
   - Inner shine/highlight overlay (white gradient, semi-transparent)
   - Icon rendered larger with white color and drop shadow
   - Colored bottom accent bar
   - Outer glow ring that pulses on all items (not just selected)

3. **Enhanced glow effects**:
   - Each icon gets a subtle colored glow matching its gradient (always visible, intensifies on select)
   - Selected icon gets a brighter, larger animated glow pulse

4. **Bigger icon size**: Increase from w-16 h-16 to w-20 h-20 for the card, icon size from 28 to 32

This keeps the same layout, animations, and functionality -- just makes the icons visually richer and more colorful.

