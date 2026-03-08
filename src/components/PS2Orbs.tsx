import { motion } from "framer-motion";

const orbs = [
  { radius: 80, angle: 0, size: 8, speed: 20, glow: 22 },
  { radius: 85, angle: 45, size: 9, speed: 20, glow: 26 },
  { radius: 75, angle: 90, size: 7, speed: 20, glow: 20 },
  { radius: 90, angle: 135, size: 8, speed: 20, glow: 24 },
  { radius: 78, angle: 180, size: 7, speed: 20, glow: 18 },
  { radius: 88, angle: 225, size: 9, speed: 20, glow: 26 },
  { radius: 82, angle: 270, size: 8, speed: 20, glow: 22 },
  { radius: 86, angle: 315, size: 7, speed: 20, glow: 20 },
];

const PS2Orbs = () => {
  return (
    <div className="relative w-full h-full pointer-events-none flex items-center justify-center">
      {orbs.map((orb, i) => {
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
