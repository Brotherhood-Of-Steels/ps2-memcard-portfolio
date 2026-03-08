

## Plan: Improve PS2 Orbs — Bigger, Bigger Trails, Chase Behavior, Remove Shadow

### What's wrong now
1. **Orbs too small** — core sphere is `0.07` radius, glow sprites max `1.8` scale
2. **Trails too small** — trail sprites max `0.4` scale, only 12 segments
3. **No chase behavior** — each orb drifts independently via sine waves, no inter-orb interaction
4. **Shadow box visible** — likely the `sphereGeometry` mesh with `meshBasicMaterial` rendering as a visible solid sphere, or the Canvas container has a visible boundary

### Changes to `src/components/PS2Orbs.tsx`

1. **Bigger orbs**: Increase core sphere radius to ~`0.12`, increase glow sprite scales to `[0.8, 1.6, 3.0]`

2. **Bigger trails**: Increase `TRAIL_LENGTH` to ~18, increase trail sprite base scale from `0.4` to `~0.7`, increase trail opacity fade factor from `0.35` to `~0.5`

3. **Chase behavior**: Replace pure sine-wave drift with a simple flocking/chase system:
   - Store all orb positions in a shared ref (via a parent context or a shared `useRef` array in `OrbSystem`)
   - Each frame, each orb is gently attracted toward the nearest 1-2 other orbs (small steering force) while still drifting with its own sine-based motion
   - This creates organic "chasing" where orbs gravitate toward neighbors then drift away

4. **Remove shadow**: Remove the solid `<mesh>` with `sphereGeometry` + `meshBasicMaterial` — the glow sprites alone will serve as the orb core. This eliminates the opaque sphere that likely creates the shadow/box artifact.

### Changes to `src/pages/Index.tsx`

5. **Increase orb container size**: Bump from `w-40 h-36 md:w-52 md:h-44` to `w-52 h-48 md:w-64 md:h-56` to give bigger orbs more room

### Technical approach for chase system
- `OrbSystem` creates a shared `useRef<THREE.Vector3[]>` array (one per orb)
- Pass this shared ref + orb index to each `DriftingOrb`
- In `useFrame`, each orb writes its position to the shared array, then reads neighbors' positions to compute a gentle attraction vector added to the sine-based drift

