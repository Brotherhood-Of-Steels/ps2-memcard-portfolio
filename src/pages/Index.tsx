import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, FolderOpen } from "lucide-react";
import PS2Orbs from "@/components/PS2Orbs";
import PS2BottomBar from "@/components/PS2BottomBar";
import PS2Icon3D from "@/components/PS2Icon3D";

const menuItems = [
  { id: "browse", label: "Browse", icon: FolderOpen, path: "/browse" },
  { id: "games", label: "Games", icon: Gamepad2, path: "/games" },
];

const Index = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate(menuItems[selectedIndex].path);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
    } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      setSelectedIndex((prev) => (prev + 1) % menuItems.length);
    } else if (e.key === "Enter" || e.key === "x" || e.key === "X") {
      handleEnter();
    }
  };

  return (
    <main
      className="relative min-h-screen bg-background overflow-hidden flex flex-col items-center justify-center"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="application"
      aria-label="PS2 Memory Card Browser"
    >
      {/* CRT Overlay */}
      <div className="ps2-crt-overlay" />
      <div className="ps2-scanline" />

      {/* Floating Orbs */}
      <PS2Orbs />

      {/* Main content */}
      <AnimatePresence>
        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title area with orb cluster */}
          <div className="flex items-center gap-6 mb-16">
            <motion.h1
              className="text-3xl md:text-4xl font-ps2 text-foreground tracking-widest"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Browser
            </motion.h1>
          </div>

          <motion.p
            className="text-lg font-ps2 text-muted-foreground tracking-wider mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            System Configuration
          </motion.p>

          {/* Menu Items */}
          <div className="flex gap-20">
            {menuItems.map((item, index) => (
              <PS2Icon3D
                key={item.id}
                icon={item.icon}
                label={item.label}
                selected={selectedIndex === index}
                onClick={() => {
                  setSelectedIndex(index);
                  navigate(item.path);
                }}
                delay={0.6 + index * 0.15}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Bar */}
      <PS2BottomBar
        actions={[
          { icon: "✕", label: "Enter", onClick: handleEnter },
        ]}
      />
    </main>
  );
};

export default Index;
