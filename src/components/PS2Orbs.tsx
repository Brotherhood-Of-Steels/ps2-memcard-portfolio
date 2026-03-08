import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ORB_COUNT = 8;
const TRAIL_LENGTH = 22;
const BASE_SPEED = 2.2;

function makeGlowTexture() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);

  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.08, "rgba(235,245,255,0.98)");
  gradient.addColorStop(0.2, "rgba(165,210,255,0.72)");
  gradient.addColorStop(0.45, "rgba(95,165,255,0.3)");
  gradient.addColorStop(0.75, "rgba(50,115,230,0.1)");
  gradient.addColorStop(1, "rgba(0,55,180,0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  return new THREE.CanvasTexture(canvas);
}

type OrbitingOrbProps = {
  glowTex: THREE.Texture;
  index: number;
};

function OrbitingOrb({ glowTex, index }: OrbitingOrbProps) {
  const ref = useRef<THREE.Group>(null!);
  const trailRefs = useRef<THREE.Sprite[]>([]);
  const posHistory = useRef<THREE.Vector3[]>([]);

  const phase = useMemo(() => (index / ORB_COUNT) * Math.PI * 2, [index]);
  const speed = useMemo(() => 1.05 + index * 0.02, [index]);

  const trailSprites = useMemo(() => {
    const sprites: THREE.Sprite[] = [];

    for (let i = 0; i < TRAIL_LENGTH; i++) {
      const material = new THREE.SpriteMaterial({
        map: glowTex,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      });

      const sprite = new THREE.Sprite(material);
      const scale = 0.95 * (1 - i / TRAIL_LENGTH);
      sprite.scale.set(scale, scale, 1);
      sprites.push(sprite);
    }

    trailRefs.current = sprites;
    return sprites;
  }, [glowTex]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const angle = t * speed + phase;

    const radius = 1.55 + Math.sin(t * 0.7 + index * 0.9) * 0.12;
    const x = Math.cos(angle) * radius + Math.sin(t * 0.9 + index) * 0.08;
    const y = Math.sin(angle) * (1.18 + Math.cos(t * 0.8 + index) * 0.1) + Math.cos(t * 0.6 + index) * 0.05;
    const z = Math.sin(angle * 1.8 + t * 0.7 + index) * 0.16;

    ref.current.position.set(x, y, z);

    posHistory.current.unshift(new THREE.Vector3(x, y, z));
    if (posHistory.current.length > TRAIL_LENGTH * 2) {
      posHistory.current.length = TRAIL_LENGTH * 2;
    }

    trailRefs.current.forEach((sprite, trailIndex) => {
      const historyPoint = posHistory.current[trailIndex + 1];
      if (!historyPoint) return;

      sprite.position.copy(historyPoint);
      const fade = 0.62 * (1 - trailIndex / TRAIL_LENGTH);
      (sprite.material as THREE.SpriteMaterial).opacity = fade;
    });
  });

  return (
    <group>
      {trailSprites.map((sprite, trailIndex) => (
        <primitive key={`trail-${index}-${trailIndex}`} object={sprite} />
      ))}

      <group ref={ref}>
        <sprite scale={[1.0, 1.0, 1]}>
          <spriteMaterial map={glowTex} transparent opacity={1} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
        </sprite>
        <sprite scale={[2.0, 2.0, 1]}>
          <spriteMaterial map={glowTex} transparent opacity={0.62} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
        </sprite>
        <sprite scale={[3.6, 3.6, 1]}>
          <spriteMaterial map={glowTex} transparent opacity={0.22} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
        </sprite>
      </group>
    </group>
  );
}

function OrbSystem() {
  const glowTex = useMemo(() => makeGlowTexture(), []);

  return (
    <>
      {Array.from({ length: ORB_COUNT }).map((_, index) => (
        <OrbitingOrb key={index} glowTex={glowTex} index={index} />
      ))}
    </>
  );
}

const PS2Orbs = () => {
  return (
    <div className="relative w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5.4], fov: 50 }}
        gl={{ alpha: true, antialias: true, premultipliedAlpha: true, toneMapping: THREE.NoToneMapping }}
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
