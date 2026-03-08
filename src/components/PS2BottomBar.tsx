import { motion } from "framer-motion";

interface PS2BottomBarProps {
  actions: { icon: string; label: string; onClick?: () => void }[];
}

const PS2BottomBar = ({ actions }: PS2BottomBarProps) => {
  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 bg-ps2-bar/90 backdrop-blur-sm border-t border-border px-8 py-4 flex justify-center gap-16"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      aria-label="PS2 controller actions"
    >
      {actions.map((action) => (
        <button
          key={action.label}
          onClick={action.onClick}
          className="flex items-center gap-3 text-foreground font-body text-sm tracking-wider hover:text-primary transition-colors"
        >
          <span className="text-lg">{action.icon}</span>
          <span>{action.label}</span>
        </button>
      ))}
    </motion.nav>
  );
};

export default PS2BottomBar;
