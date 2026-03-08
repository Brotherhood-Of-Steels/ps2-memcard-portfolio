import { motion } from "framer-motion";

const orbs = [
  { x: "20%", y: "25%", size: 18, delay: 0 },
  { x: "45%", y: "20%", size: 14, delay: 0.4 },
  { x: "65%", y: "30%", size: 16, delay: 0.8 },
  { x: "35%", y: "55%", size: 12, delay: 0.2 },
  { x: "55%", y: "50%", size: 15, delay: 0.6 },
  { x: "75%", y: "55%", size: 10, delay: 1.0 },
  { x: "30%", y: "40%", size: 11, delay: 1.2 },
  { x: "50%", y: "35%", size: 13, delay: 0.3 },
];

const PS2Orbs = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Faint connecting glow trail */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 40%, hsl(210 100% 65% / 0.4), transparent)",
        }}
      />

      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: "radial-gradient(circle, hsl(200 100% 90%), hsl(210 100% 70%))",
            boxShadow: `0 0 ${orb.size * 1.5}px ${orb.size * 0.8}px hsl(210 100% 65% / 0.5)`,
          }}
          animate={{
            y: [0, -12, -20, -8, 0],
            x: [0, 6, -4, -8, 0],
            scale: [1, 1.15, 0.95, 1.1, 1],
            opacity: [0.7, 1, 0.6, 0.9, 0.7],
          }}
          transition={{
            duration: 4 + i * 0.4,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default PS2Orbs;
