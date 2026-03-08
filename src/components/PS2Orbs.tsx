import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// Larger polygon positions — bigger orbs, more spread
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

const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0],
  [0, 4], [2, 6],
];

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

// Stable orb component — no inline component creation
function DriftingOrb({ basePos, glowTex, orbRef, seed }: {
  basePos: [number, number, number];
  glowTex: THREE.Texture;
  orbRef: React.MutableRefObject<THREE.Group | null>;
  seed: number;
}) {
  const ref = useRef<THREE.Group>(null!);

  const offsets = useMemo(() => ({
    xFreq: 0.25 + (seed * 0.1) % 0.3,
    yFreq: 0.2 + ((seed * 0.17) % 0.25),
    zFreq: 0.15 + ((seed * 0.13) % 0.2),
    xPhase: (seed * 1.7) % (Math.PI * 2),
    yPhase: (seed * 2.3) % (Math.PI * 2),
    zPhase: (seed * 3.1) % (Math.PI * 2),
    xAmp: 0.2 + (seed * 0.07) % 0.35,
    yAmp: 0.2 + (seed * 0.09) % 0.35,
    zAmp: 0.12 + (seed * 0.05) % 0.2,
  }), [seed]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = basePos[0] + Math.sin(t * offsets.xFreq + offsets.xPhase) * offsets.xAmp;
    const y = basePos[1] + Math.sin(t * offsets.yFreq + offsets.yPhase) * offsets.yAmp;
    const z = basePos[2] + Math.sin(t * offsets.zFreq + offsets.zPhase) * offsets.zAmp;
    ref.current.position.set(x, y, z);
  });

  // Share ref for filaments
  useFrame(() => {
    if (orbRef) orbRef.current = ref.current;
  });

  return (
    <group ref={ref}>
      {/* Bigger bright core */}
      <mesh>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>
      {/* Tight inner glow */}
      <sprite scale={[0.5, 0.5, 1]}>
        <spriteMaterial map={glowTex} transparent opacity={1} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
      </sprite>
      {/* Medium glow */}
      <sprite scale={[1.0, 1.0, 1]}>
        <spriteMaterial map={glowTex} transparent opacity={0.5} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
      </sprite>
      {/* Wide soft glow */}
      <sprite scale={[1.8, 1.8, 1]}>
        <spriteMaterial map={glowTex} transparent opacity={0.15} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
      </sprite>
    </group>
  );
}

function Filaments({ orbRefs }: { orbRefs: React.MutableRefObject<THREE.Group | null>[] }) {
  const lines = useMemo(
    () => connections.map(() => {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 0], 3));
      const mat = new THREE.LineBasicMaterial({
        color: new THREE.Color(0.15, 0.35, 0.8),
        transparent: true,
        opacity: 0.018,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      });
      return new THREE.Line(geo, mat);
    }),
    []
  );

  useFrame(() => {
    connections.forEach(([a, b], i) => {
      const pa = orbRefs[a]?.current?.position;
      const pb = orbRefs[b]?.current?.position;
      if (!pa || !pb) return;
      const geo = lines[i].geometry;
      const pos = geo.attributes.position as THREE.BufferAttribute;
      pos.setXYZ(0, pa.x, pa.y, pa.z);
      pos.setXYZ(1, pb.x, pb.y, pb.z);
      pos.needsUpdate = true;
    });
  });

  return (
    <>
      {lines.map((l, i) => <primitive key={i} object={l} />)}
    </>
  );
}

function OrbSystem() {
  const glowTex = useMemo(() => makeGlowTexture(), []);
  const orbRefs = useMemo(
    () => basePositions.map(() => ({ current: null as THREE.Group | null })),
    []
  );

  return (
    <>
      {basePositions.map((pos, i) => (
        <DriftingOrb
          key={i}
          basePos={pos}
          glowTex={glowTex}
          orbRef={orbRefs[i]}
          seed={i + 1}
        />
      ))}
      <Filaments orbRefs={orbRefs} />
      <EffectComposer>
        <Bloom intensity={1.5} luminanceThreshold={0.08} luminanceSmoothing={0.9} mipmapBlur />
      </EffectComposer>
    </>
  );
}

const PS2Orbs = () => {
  return (
    <div className="relative w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 50 }}
        gl={{ alpha: true, antialias: true, toneMapping: THREE.NoToneMapping }}
        style={{ background: "transparent" }}
      >
        <OrbSystem />
      </Canvas>
    </div>
  );
};

export default PS2Orbs;
