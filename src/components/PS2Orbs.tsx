import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// Base positions — irregular polygon shape
const basePositions: [number, number, number][] = [
  [-0.3, 1.4, 0],
  [0.8, 1.0, 0.2],
  [1.3, 0.1, -0.1],
  [1.0, -0.8, 0.15],
  [0.1, -1.2, -0.1],
  [-0.9, -0.7, 0.2],
  [-1.3, 0.2, -0.15],
  [-0.8, 1.0, 0.1],
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
  g.addColorStop(0.06, "rgba(230,245,255,0.95)");
  g.addColorStop(0.2, "rgba(150,210,255,0.5)");
  g.addColorStop(0.45, "rgba(80,160,255,0.15)");
  g.addColorStop(1, "rgba(0,80,200,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

// Each orb drifts randomly with unique noise offsets
function Orb({ basePos, index, glowTex }: { basePos: [number, number, number]; index: number; glowTex: THREE.Texture }) {
  const ref = useRef<THREE.Group>(null!);
  // Random offsets for organic motion
  const offsets = useMemo(() => ({
    xFreq: 0.15 + Math.random() * 0.2,
    yFreq: 0.12 + Math.random() * 0.18,
    zFreq: 0.1 + Math.random() * 0.15,
    xPhase: Math.random() * Math.PI * 2,
    yPhase: Math.random() * Math.PI * 2,
    zPhase: Math.random() * Math.PI * 2,
    xAmp: 0.15 + Math.random() * 0.25,
    yAmp: 0.15 + Math.random() * 0.25,
    zAmp: 0.1 + Math.random() * 0.15,
  }), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.set(
      basePos[0] + Math.sin(t * offsets.xFreq + offsets.xPhase) * offsets.xAmp,
      basePos[1] + Math.sin(t * offsets.yFreq + offsets.yPhase) * offsets.yAmp,
      basePos[2] + Math.sin(t * offsets.zFreq + offsets.zPhase) * offsets.zAmp,
    );
  });

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>
      <sprite scale={[0.3, 0.3, 1]}>
        <spriteMaterial map={glowTex} transparent opacity={0.9} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
      </sprite>
      <sprite scale={[0.6, 0.6, 1]}>
        <spriteMaterial map={glowTex} transparent opacity={0.4} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
      </sprite>
      <sprite scale={[1.0, 1.0, 1]}>
        <spriteMaterial map={glowTex} transparent opacity={0.12} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
      </sprite>
    </group>
  );
}

function Filaments({ orbRefs }: { orbRefs: React.RefObject<THREE.Group>[] }) {
  const lines = useMemo(
    () => connections.map(() => {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 0], 3));
      const mat = new THREE.LineBasicMaterial({
        color: new THREE.Color(0.3, 0.55, 1.0),
        transparent: true,
        opacity: 0.06,
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
  const orbRefs = useMemo(() => basePositions.map(() => ({ current: null as THREE.Group | null })), []);

  return (
    <>
      {basePositions.map((pos, i) => {
        const RefOrb = () => {
          const ref = useRef<THREE.Group>(null!);
          orbRefs[i] = ref;
          const offsets = useMemo(() => ({
            xFreq: 0.15 + Math.random() * 0.2,
            yFreq: 0.12 + Math.random() * 0.18,
            zFreq: 0.1 + Math.random() * 0.15,
            xPhase: Math.random() * Math.PI * 2,
            yPhase: Math.random() * Math.PI * 2,
            zPhase: Math.random() * Math.PI * 2,
            xAmp: 0.15 + Math.random() * 0.25,
            yAmp: 0.15 + Math.random() * 0.25,
            zAmp: 0.1 + Math.random() * 0.15,
          }), []);

          useFrame(({ clock }) => {
            const t = clock.getElapsedTime();
            ref.current.position.set(
              pos[0] + Math.sin(t * offsets.xFreq + offsets.xPhase) * offsets.xAmp,
              pos[1] + Math.sin(t * offsets.yFreq + offsets.yPhase) * offsets.yAmp,
              pos[2] + Math.sin(t * offsets.zFreq + offsets.zPhase) * offsets.zAmp,
            );
          });

          return (
            <group ref={ref}>
              <mesh>
                <sphereGeometry args={[0.045, 12, 12]} />
                <meshBasicMaterial color="#ffffff" toneMapped={false} />
              </mesh>
              <sprite scale={[0.3, 0.3, 1]}>
                <spriteMaterial map={glowTex} transparent opacity={0.9} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
              </sprite>
              <sprite scale={[0.6, 0.6, 1]}>
                <spriteMaterial map={glowTex} transparent opacity={0.4} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
              </sprite>
              <sprite scale={[1.0, 1.0, 1]}>
                <spriteMaterial map={glowTex} transparent opacity={0.12} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
              </sprite>
            </group>
          );
        };
        return <RefOrb key={i} />;
      })}
      <Filaments orbRefs={orbRefs as any} />
      <EffectComposer>
        <Bloom intensity={1.2} luminanceThreshold={0.1} luminanceSmoothing={0.9} mipmapBlur />
      </EffectComposer>
    </>
  );
}

const PS2Orbs = () => {
  return (
    <div className="relative w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true, toneMapping: THREE.NoToneMapping }}
        style={{ background: "transparent" }}
      >
        <OrbSystem />
      </Canvas>
    </div>
  );
};

export default PS2Orbs;
