import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PS2Icon3DProps {
  icon: LucideIcon;
  label: string;
  selected?: boolean;
  onClick?: () => void;
  delay?: number;
  color?: string;
}

const PS2Icon3D = ({ icon: Icon, label, selected, onClick, delay = 0, color }: PS2Icon3DProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="flex flex-col items-center gap-2 group focus:outline-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      <motion.div
        className={`relative w-16 h-16 flex items-center justify-center rounded-sm ${
          selected ? "ring-2 ring-ps2-selected" : ""
        }`}
        animate={selected ? {
          y: [0, -6, 0],
          rotateY: [0, 180, 360],
        } : {
          rotateY: [0, 360],
        }}
        transition={{
          duration: selected ? 2 : 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ perspective: "200px", transformStyle: "preserve-3d" }}
      >
        {/* Glow effect behind icon */}
        {selected && (
          <div className="absolute inset-0 bg-ps2-glow/30 rounded-sm blur-lg" />
        )}
        <Icon
          size={36}
          className={`relative z-10 ${selected ? "text-primary" : "text-muted-foreground"} group-hover:text-primary transition-colors`}
          style={color ? { color } : undefined}
        />
      </motion.div>
      <span className={`text-xs font-ps2 tracking-wider ${
        selected ? "text-foreground" : "text-muted-foreground"
      } group-hover:text-foreground transition-colors`}>
        {label}
      </span>
    </motion.button>
  );
};

export default PS2Icon3D;
