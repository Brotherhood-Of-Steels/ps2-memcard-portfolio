import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// PS2 BIOS style: ~8 bright orbs orbiting in a wobbly ring, 
// connected by faint blue trails forming a constellation shape
const orbDefs = [
  { radius: 1.6, yRadius: 1.1, angle: 0, speed: 0.15, zOff: 0.3 },
  { radius: 1.7, yRadius: 1.2, angle: 50, speed: 0.15, zOff: -0.2 },
  { radius: 1.5, yRadius: 1.0, angle: 95, speed: 0.15, zOff: 0.4 },
  { radius: 1.8, yRadius: 1.3, angle: 140, speed: 0.15, zOff: -0.1 },
  { radius: 1.55, yRadius: 1.1, angle: 185, speed: 0.15, zOff: 0.25 },
  { radius: 1.75, yRadius: 1.25, angle: 230, speed: 0.15, zOff: -0.35 },
  { radius: 1.6, yRadius: 1.15, angle: 275, speed: 0.15, zOff: 0.15 },
  { radius: 1.7, yRadius: 1.2, angle: 320, speed: 0.15, zOff: -0.25 },
];

// Only adjacent connections + a couple cross-links for the PS2 constellation look
const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0],
  [0, 4], [2, 6],
];

function getOrbPos(orb: typeof orbDefs[0], t: number): [number, number, number] {
  const a = (orb.angle * Math.PI) / 180 + t * orb.speed;
  return [
    Math.cos(a) * orb.radius,
    Math.sin(a) * orb.yRadius,
    Math.sin(a * 0.7 + orb.zOff) * 0.4,
  ];
}

// Glow texture for point lights
function makeGlowTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.15, "rgba(200,230,255,0.8)");
  gradient.addColorStop(0.4, "rgba(100,180,255,0.3)");
  gradient.addColorStop(1, "rgba(0,100,255,0)");
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
      {/* Bright core */}
      <mesh>
        <sphereGeometry args={[0.04, 12, 12]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      {/* Inner glow */}
      <sprite scale={[0.35, 0.35, 1]}>
        <spriteMaterial
          map={glowTex}
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </sprite>
      {/* Outer glow */}
      <sprite scale={[0.8, 0.8, 1]}>
        <spriteMaterial
          map={glowTex}
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
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
        color: new THREE.Color(0.3, 0.6, 1.0),
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
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
    </>
  );
}

const PS2Orbs = () => {
  return (
    <div className="relative w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default PS2Orbs;
