import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

const orbDefs = [
  { radius: 80, angle: 0, size: 8, speed: 20, glow: 22 },
  { radius: 85, angle: 45, size: 9, speed: 20, glow: 26 },
  { radius: 75, angle: 90, size: 7, speed: 20, glow: 20 },
  { radius: 90, angle: 135, size: 8, speed: 20, glow: 24 },
  { radius: 78, angle: 180, size: 7, speed: 20, glow: 18 },
  { radius: 88, angle: 225, size: 9, speed: 20, glow: 26 },
  { radius: 82, angle: 270, size: 8, speed: 20, glow: 22 },
  { radius: 86, angle: 315, size: 7, speed: 20, glow: 20 },
];

// Pairs of orb indices to connect with filaments
const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0],
  [0, 3], [1, 5], [2, 6], [3, 7], [0, 4], [1, 6],
];

const getOrbPosition = (orb: typeof orbDefs[0], time: number) => {
  const startRad = (orb.angle * Math.PI) / 180;
  const angularSpeed = (2 * Math.PI) / (orb.speed * 1000);
  const currentAngle = startRad + time * angularSpeed;
  return {
    x: Math.cos(currentAngle) * orb.radius,
    y: Math.sin(currentAngle) * orb.radius * 0.7,
  };
};

const PS2Orbs = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setDimensions({ w: rect.width, h: rect.height });
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.w === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = dimensions.w * 2;
    canvas.height = dimensions.h * 2;
    ctx.scale(2, 2);

    const cx = dimensions.w / 2;
    const cy = dimensions.h / 2;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, dimensions.w, dimensions.h);

      const positions = orbDefs.map((orb) => getOrbPosition(orb, time));

      // Draw filaments
      connections.forEach(([a, b]) => {
        const pa = positions[a];
        const pb = positions[b];
        const ax = cx + pa.x;
        const ay = cy + pa.y;
        const bx = cx + pb.x;
        const by = cy + pb.y;

        const dist = Math.hypot(bx - ax, by - ay);
        const opacity = Math.max(0.03, 0.12 - dist * 0.0004);

        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.strokeStyle = `hsla(210, 100%, 70%, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.shadowColor = "hsla(210, 100%, 65%, 0.15)";
        ctx.shadowBlur = 4;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [dimensions]);

  return (
    <div ref={containerRef} className="relative w-full h-full pointer-events-none flex items-center justify-center">
      {/* Filament canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ imageRendering: "auto" }}
      />

      {/* Orbs */}
      {orbDefs.map((orb, i) => {
        const startRad = (orb.angle * Math.PI) / 180;
        const cx = Math.cos(startRad) * orb.radius;
        const cy = Math.sin(startRad) * orb.radius * 0.7;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: orb.size,
              height: orb.size,
              background: `radial-gradient(circle, hsl(200 100% 95%), hsl(210 100% 75%))`,
              boxShadow: `0 0 ${orb.glow}px ${orb.glow / 2}px hsl(210 100% 65% / 0.6)`,
              left: "50%",
              top: "50%",
              marginLeft: -orb.size / 2,
              marginTop: -orb.size / 2,
            }}
            animate={{
              x: [
                cx,
                Math.cos(startRad + Math.PI / 2) * orb.radius,
                Math.cos(startRad + Math.PI) * orb.radius,
                Math.cos(startRad + (3 * Math.PI) / 2) * orb.radius,
                cx,
              ],
              y: [
                cy,
                Math.sin(startRad + Math.PI / 2) * orb.radius * 0.7,
                Math.sin(startRad + Math.PI) * orb.radius * 0.7,
                Math.sin(startRad + (3 * Math.PI) / 2) * orb.radius * 0.7,
                cy,
              ],
              opacity: [0.7, 1, 0.6, 0.9, 0.7],
            }}
            transition={{
              duration: orb.speed,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};

export default PS2Orbs;
