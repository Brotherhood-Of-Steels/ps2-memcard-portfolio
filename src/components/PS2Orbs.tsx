import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const orbDefs = [
  { radius: 1.8, angle: 0, speed: 0.3 },
  { radius: 1.9, angle: 45, speed: 0.3 },
  { radius: 1.7, angle: 90, speed: 0.3 },
  { radius: 2.0, angle: 135, speed: 0.3 },
  { radius: 1.75, angle: 180, speed: 0.3 },
  { radius: 1.95, angle: 225, speed: 0.3 },
  { radius: 1.85, angle: 270, speed: 0.3 },
  { radius: 1.9, angle: 315, speed: 0.3 },
];

const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0],
  [0, 3], [1, 5], [2, 6], [3, 7], [0, 4], [1, 6],
];

function getOrbPos(orb: typeof orbDefs[0], t: number): [number, number, number] {
  const a = (orb.angle * Math.PI) / 180 + t * orb.speed;
  return [Math.cos(a) * orb.radius, Math.sin(a) * orb.radius * 0.65, 0];
}

function OrbPoint({ orb }: { orb: typeof orbDefs[0] }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const [x, y, z] = getOrbPos(orb, clock.getElapsedTime());
    ref.current.position.set(x, y, z);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.06, 16, 16]} />
      <meshBasicMaterial color="#e0f0ff" />
      {/* Glow sprite */}
      <sprite scale={[0.5, 0.5, 1]}>
        <spriteMaterial
          color="#4da6ff"
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </sprite>
    </mesh>
  );
}

function Filaments() {

  const lines = useMemo(
    () => connections.map(() => {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 0], 3));
      const mat = new THREE.LineBasicMaterial({
        color: "#4da6ff",
        transparent: true,
        opacity: 0.08,
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
      <color attach="background" args={["#000000"]} />
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
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default PS2Orbs;
