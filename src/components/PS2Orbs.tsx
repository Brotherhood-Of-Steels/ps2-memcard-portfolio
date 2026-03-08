import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

const basePositions: [number, number, number][] = [
  [-0.4, 1.8, 0],
  [1.0, 1.3, 0.3],
  [1.6, 0.1, -0.15],
  [1.2, -1.0, 0.2],
  [0.1, -1.5, -0.15],
  [-1.1, -0.9, 0.25],
  [-1.6, 0.3, -0.2],
  [-1.0, 1.3, 0.15],
];

const TRAIL_LENGTH = 18;
const CHASE_STRENGTH = 0.15;

function makeGlowTexture() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.05, "rgba(240,250,255,0.95)");
  g.addColorStop(0.15, "rgba(180,220,255,0.6)");
  g.addColorStop(0.35, "rgba(100,170,255,0.25)");
  g.addColorStop(0.6, "rgba(60,130,255,0.08)");
  g.addColorStop(1, "rgba(0,60,200,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

function DriftingOrb({ basePos, glowTex, seed, sharedPositions, index }: {
  basePos: [number, number, number];
  glowTex: THREE.Texture;
  seed: number;
  sharedPositions: React.MutableRefObject<THREE.Vector3[]>;
  index: number;
}) {
  const ref = useRef<THREE.Group>(null!);
  const trailRefs = useRef<THREE.Sprite[]>([]);
  const posHistory = useRef<THREE.Vector3[]>([]);
  const velocity = useRef(new THREE.Vector3(0, 0, 0));

  const offsets = useMemo(() => ({
    xFreq: 0.6 + (seed * 0.13) % 0.5,
    yFreq: 0.55 + ((seed * 0.19) % 0.45),
    zFreq: 0.4 + ((seed * 0.11) % 0.3),
    xPhase: (seed * 1.7) % (Math.PI * 2),
    yPhase: (seed * 2.3) % (Math.PI * 2),
    zPhase: (seed * 3.1) % (Math.PI * 2),
    xAmp: 0.35 + (seed * 0.08) % 0.5,
    yAmp: 0.35 + (seed * 0.1) % 0.5,
    zAmp: 0.2 + (seed * 0.06) % 0.3,
  }), [seed]);

  const trailSprites = useMemo(() => {
    const sprites: THREE.Sprite[] = [];
    for (let i = 0; i < TRAIL_LENGTH; i++) {
      const mat = new THREE.SpriteMaterial({
        map: glowTex,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      });
      const sprite = new THREE.Sprite(mat);
      const scale = 0.7 * (1 - i / TRAIL_LENGTH);
      sprite.scale.set(scale, scale, 1);
      sprites.push(sprite);
    }
    trailRefs.current = sprites;
    return sprites;
  }, [glowTex]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // Base sine drift
    const dx = basePos[0] + Math.sin(t * offsets.xFreq + offsets.xPhase) * offsets.xAmp;
    const dy = basePos[1] + Math.sin(t * offsets.yFreq + offsets.yPhase) * offsets.yAmp;
    const dz = basePos[2] + Math.sin(t * offsets.zFreq + offsets.zPhase) * offsets.zAmp;

    // Chase: attract toward nearest 2 orbs
    const chaseForce = new THREE.Vector3(0, 0, 0);
    const myPos = sharedPositions.current[index] || new THREE.Vector3(dx, dy, dz);
    
    const distances: { dist: number; dir: THREE.Vector3 }[] = [];
    for (let i = 0; i < sharedPositions.current.length; i++) {
      if (i === index) continue;
      const other = sharedPositions.current[i];
      if (!other) continue;
      const dir = new THREE.Vector3().subVectors(other, myPos);
      const dist = dir.length();
      if (dist > 0.01) distances.push({ dist, dir: dir.normalize() });
    }
    distances.sort((a, b) => a.dist - b.dist);
    for (let i = 0; i < Math.min(2, distances.length); i++) {
      chaseForce.add(distances[i].dir.multiplyScalar(CHASE_STRENGTH * Math.min(1, 1 / (distances[i].dist + 0.5))));
    }

    velocity.current.lerp(chaseForce, 0.02);
    const x = dx + velocity.current.x;
    const y = dy + velocity.current.y;
    const z = dz + velocity.current.z;

    ref.current.position.set(x, y, z);
    sharedPositions.current[index] = new THREE.Vector3(x, y, z);

    // Trail
    posHistory.current.unshift(new THREE.Vector3(x, y, z));
    if (posHistory.current.length > TRAIL_LENGTH * 3) {
      posHistory.current.length = TRAIL_LENGTH * 3;
    }
    trailRefs.current.forEach((sprite, i) => {
      const histIdx = (i + 1) * 3;
      if (posHistory.current[histIdx]) {
        sprite.position.copy(posHistory.current[histIdx]);
        const fade = 0.5 * (1 - i / TRAIL_LENGTH);
        (sprite.material as THREE.SpriteMaterial).opacity = fade;
      }
    });
  });

  return (
    <group>
      {trailSprites.map((sprite, i) => (
        <primitive key={`trail-${i}`} object={sprite} />
      ))}
      <group ref={ref}>
        {/* No solid mesh — sprites only to avoid shadow/box artifact */}
        <sprite scale={[0.8, 0.8, 1]}>
          <spriteMaterial map={glowTex} transparent opacity={1} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
        </sprite>
        <sprite scale={[1.6, 1.6, 1]}>
          <spriteMaterial map={glowTex} transparent opacity={0.5} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
        </sprite>
        <sprite scale={[3.0, 3.0, 1]}>
          <spriteMaterial map={glowTex} transparent opacity={0.15} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
        </sprite>
      </group>
    </group>
  );
}

function OrbSystem() {
  const glowTex = useMemo(() => makeGlowTexture(), []);
  const sharedPositions = useRef<THREE.Vector3[]>(basePositions.map(p => new THREE.Vector3(...p)));

  return (
    <>
      {basePositions.map((pos, i) => (
        <DriftingOrb key={i} basePos={pos} glowTex={glowTex} seed={i + 1} sharedPositions={sharedPositions} index={i} />
      ))}
      <EffectComposer frameBufferType={THREE.HalfFloatType}>
        <Bloom intensity={1.5} luminanceThreshold={0.08} luminanceSmoothing={0.9} mipmapBlur blendFunction={BlendFunction.ADD} />
      </EffectComposer>
    </>
  );
}

const PS2Orbs = () => {
  return (
    <div className="relative w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 50 }}
        gl={{ alpha: true, antialias: true, toneMapping: THREE.NoToneMapping, setClearColor: undefined } as any}
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
