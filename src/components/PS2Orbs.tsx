import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// Wide-spaced orbs with large orbital radii filling left half
const orbDefs = [
  { radius: 3.2, yRadius: 2.4, angle: 0, speed: 0.08, zOff: 0.5 },
  { radius: 3.5, yRadius: 2.6, angle: 45, speed: 0.07, zOff: -0.4 },
  { radius: 2.9, yRadius: 2.2, angle: 90, speed: 0.09, zOff: 0.6 },
  { radius: 3.6, yRadius: 2.7, angle: 130, speed: 0.065, zOff: -0.3 },
  { radius: 3.1, yRadius: 2.3, angle: 175, speed: 0.085, zOff: 0.45 },
  { radius: 3.4, yRadius: 2.5, angle: 220, speed: 0.075, zOff: -0.55 },
  { radius: 3.0, yRadius: 2.1, angle: 265, speed: 0.09, zOff: 0.35 },
  { radius: 3.3, yRadius: 2.5, angle: 310, speed: 0.07, zOff: -0.2 },
  { radius: 2.7, yRadius: 2.0, angle: 20, speed: 0.095, zOff: 0.3 },
  { radius: 3.7, yRadius: 2.8, angle: 160, speed: 0.06, zOff: -0.5 },
];

const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0],
  [8, 0], [8, 2], [9, 3], [9, 5], [0, 4], [2, 6], [1, 7],
];

function getOrbPos(orb: typeof orbDefs[0], t: number): [number, number, number] {
  const a = (orb.angle * Math.PI) / 180 + t * orb.speed;
  return [
    Math.cos(a) * orb.radius,
    Math.sin(a) * orb.yRadius,
    Math.sin(a * 0.5 + orb.zOff) * 0.6,
  ];
}

function makeGlowTexture() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.08, "rgba(220,240,255,0.9)");
  gradient.addColorStop(0.25, "rgba(140,200,255,0.5)");
  gradient.addColorStop(0.5, "rgba(80,150,255,0.15)");
  gradient.addColorStop(1, "rgba(0,80,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

function OrbPoint({ orb }: { orb: typeof orbDefs[0] }) {
  const ref = useRef<THREE.Group>(null!);
  const glowTex = useMemo(() => makeGlowTexture(), []);

  useFrame(({ clock }) => {
    const [x, y, z] = getOrbPos(orb, clock.getElapsedTime());
    ref.current.position.set(x, y, z);
  });

  return (
    <group ref={ref}>
      {/* Bright white core */}
      <mesh>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>
      {/* Tight inner glow */}
      <sprite scale={[0.4, 0.4, 1]}>
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
      <sprite scale={[0.9, 0.9, 1]}>
        <spriteMaterial
          map={glowTex}
          transparent
          opacity={0.5}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </sprite>
      {/* Wide soft glow */}
      <sprite scale={[1.6, 1.6, 1]}>
        <spriteMaterial
          map={glowTex}
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </sprite>
    </group>
  );
}

function Filaments() {
  const lines = useMemo(
    () => connections.map(() => {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 0], 3));
      const mat = new THREE.LineBasicMaterial({
        color: new THREE.Color(0.25, 0.55, 1.0),
        transparent: true,
        opacity: 0.12,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      });
      return new THREE.Line(geo, mat);
    }),
    []
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const positions = orbDefs.map((o) => getOrbPos(o, t));

    connections.forEach(([a, b], i) => {
      const geo = lines[i].geometry;
      const pos = geo.attributes.position as THREE.BufferAttribute;
      pos.setXYZ(0, positions[a][0], positions[a][1], positions[a][2]);
      pos.setXYZ(1, positions[b][0], positions[b][1], positions[b][2]);
      pos.needsUpdate = true;

      // Pulse opacity based on distance
      const dx = positions[b][0] - positions[a][0];
      const dy = positions[b][1] - positions[a][1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      (lines[i].material as THREE.LineBasicMaterial).opacity = Math.max(0.04, 0.18 - dist * 0.015);
    });
  });

  return (
    <>
      {lines.map((lineObj, i) => (
        <primitive key={i} object={lineObj} />
      ))}
    </>
  );
}

function Scene() {
  return (
    <>
      {orbDefs.map((orb, i) => (
        <OrbPoint key={i} orb={orb} />
      ))}
      <Filaments />
      <EffectComposer>
        <Bloom
          intensity={1.2}
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
        camera={{ position: [0, 0, 7], fov: 55 }}
        gl={{ alpha: true, antialias: true, toneMapping: THREE.NoToneMapping }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default PS2Orbs;
