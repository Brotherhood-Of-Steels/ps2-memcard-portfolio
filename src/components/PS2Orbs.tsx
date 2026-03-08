import { motion } from "framer-motion";

const orbs = [
  { radius: 140, angle: 0, size: 6, speed: 28, glow: 18 },
  { radius: 180, angle: 45, size: 8, speed: 34, glow: 24 },
  { radius: 110, angle: 90, size: 5, speed: 22, glow: 14 },
  { radius: 200, angle: 135, size: 7, speed: 40, glow: 20 },
  { radius: 160, angle: 180, size: 4, speed: 26, glow: 12 },
  { radius: 220, angle: 225, size: 6, speed: 36, glow: 16 },
  { radius: 130, angle: 270, size: 5, speed: 30, glow: 14 },
  { radius: 190, angle: 315, size: 7, speed: 32, glow: 22 },
  { radius: 240, angle: 60, size: 4, speed: 44, glow: 10 },
  { radius: 170, angle: 150, size: 6, speed: 38, glow: 18 },
  { radius: 250, angle: 200, size: 3, speed: 48, glow: 8 },
  { radius: 150, angle: 280, size: 5, speed: 25, glow: 14 },
];

const PS2Orbs = () => {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      {orbs.map((orb, i) => {
        const startRad = (orb.angle * Math.PI) / 180;
        const cx = Math.cos(startRad) * orb.radius;
        const cy = Math.sin(startRad) * orb.radius;

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
                Math.sin(startRad + Math.PI / 2) * orb.radius,
                Math.sin(startRad + Math.PI) * orb.radius,
                Math.sin(startRad + (3 * Math.PI) / 2) * orb.radius,
                cy,
              ],
              opacity: [0.6, 0.9, 0.5, 0.8, 0.6],
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
