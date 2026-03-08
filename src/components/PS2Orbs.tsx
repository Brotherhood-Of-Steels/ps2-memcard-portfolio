import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// PS2 BIOS: orbs form an irregular polygon that rotates as one shape
// Positions define the constellation shape (roughly an irregular heptagon)
const orbPositions: [number, number, number][] = [
  [-0.3, 1.4, 0],
  [0.8, 1.0, 0.2],
  [1.3, 0.1, -0.1],
  [1.0, -0.8, 0.15],
  [0.1, -1.2, -0.1],
  [-0.9, -0.7, 0.2],
  [-1.3, 0.2, -0.15],
  [-0.8, 1.0, 0.1],
];

// Connect adjacent orbs + cross-links for the web
const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0],
  [0, 4], [2, 6], [1, 5],
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

function OrbSystem() {
  const groupRef = useRef<THREE.Group>(null!);
  const glowTex = useMemo(() => makeGlowTexture(), []);

  // Pre-build line objects
  const lineObjects = useMemo(() => {
    return connections.map(([a, b]) => {
      const geo = new THREE.BufferGeometry();
      const positions = new Float32Array([
        orbPositions[a][0], orbPositions[a][1], orbPositions[a][2],
        orbPositions[b][0], orbPositions[b][1], orbPositions[b][2],
      ]);
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const mat = new THREE.LineBasicMaterial({
        color: new THREE.Color(0.3, 0.55, 1.0),
        transparent: true,
        opacity: 0.18,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      });
      return new THREE.Line(geo, mat);
    });
  }, []);

  // Rotate entire constellation as one unit — slow, like PS2
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    groupRef.current.rotation.z = t * 0.08;
    groupRef.current.rotation.y = Math.sin(t * 0.05) * 0.15;
    groupRef.current.rotation.x = Math.cos(t * 0.04) * 0.08;
  });

  return (
    <group ref={groupRef}>
      {/* Filaments */}
      {lineObjects.map((line, i) => (
        <primitive key={`line-${i}`} object={line} />
      ))}

      {/* Orbs */}
      {orbPositions.map((pos, i) => (
        <group key={i} position={pos}>
          {/* Bright white core */}
          <mesh>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshBasicMaterial color="#ffffff" toneMapped={false} />
          </mesh>
          {/* Tight glow */}
          <sprite scale={[0.35, 0.35, 1]}>
            <spriteMaterial
              map={glowTex}
              transparent
              opacity={1}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
              toneMapped={false}
            />
          </sprite>
          {/* Medium glow */}
          <sprite scale={[0.7, 0.7, 1]}>
            <spriteMaterial
              map={glowTex}
              transparent
              opacity={0.5}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
              toneMapped={false}
            />
          </sprite>
          {/* Soft outer glow */}
          <sprite scale={[1.2, 1.2, 1]}>
            <spriteMaterial
              map={glowTex}
              transparent
              opacity={0.2}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
              toneMapped={false}
            />
          </sprite>
        </group>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <OrbSystem />
      <EffectComposer>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
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
        <Scene />
      </Canvas>
    </div>
  );
};

export default PS2Orbs;
