import { motion } from "framer-motion";

const orbs = [
  { x: "30%", y: "35%", size: 12, delay: 0 },
  { x: "35%", y: "40%", size: 10, delay: 0.5 },
  { x: "40%", y: "32%", size: 14, delay: 1 },
  { x: "45%", y: "45%", size: 8, delay: 0.3 },
  { x: "33%", y: "50%", size: 11, delay: 0.8 },
  { x: "50%", y: "38%", size: 9, delay: 1.2 },
  { x: "28%", y: "42%", size: 13, delay: 0.6 },
  { x: "42%", y: "48%", size: 7, delay: 1.5 },
];

const PS2Orbs = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-ps2-orb"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            boxShadow: `0 0 ${orb.size * 2}px ${orb.size}px hsl(var(--ps2-glow) / 0.6)`,
          }}
          animate={{
            y: [0, -20, -30, -15, 0],
            x: [0, 10, -5, -12, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
            opacity: [0.6, 1, 0.7, 0.9, 0.6],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Connecting lines between orbs */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <motion.path
          d="M 30% 37% Q 38% 30% 45% 38% Q 50% 45% 42% 50%"
          stroke="hsl(var(--ps2-glow))"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>
    </div>
  );
};

export default PS2Orbs;
