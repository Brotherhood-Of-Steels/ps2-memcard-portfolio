import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PS2Orbs from "@/components/PS2Orbs";

const menuItems = [
  { id: "browser", label: "Browser", path: "/browse" },
  { id: "games", label: "Games", path: "/games" },
];

const Index = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate(menuItems[selectedIndex].path);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") setSelectedIndex((p) => (p - 1 + menuItems.length) % menuItems.length);
      if (e.key === "ArrowDown") setSelectedIndex((p) => (p + 1) % menuItems.length);
      if (e.key === "Enter" || e.key === "x" || e.key === "X") handleEnter();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <main
      className="relative min-h-screen bg-background overflow-hidden flex flex-col"
      role="application"
      aria-label="PS2 Memory Card Browser"
    >
      {/* CRT effects */}
      <div className="ps2-crt-overlay" />
      <div className="ps2-scanline" />

      {/* Center content — orbs left, text right */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative flex items-center gap-8">
          {/* Orbs cluster */}
          <div className="relative w-40 h-28 md:w-52 md:h-36">
            <PS2Orbs />
          </div>

          {/* Menu text */}
          <div className="flex flex-col gap-1">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedIndex(index);
                  navigate(item.path);
                }}
                className="text-left focus:outline-none group"
              >
                <motion.span
                  className={`block font-ps2 tracking-wider transition-all ${
                    selectedIndex === index
                      ? "text-foreground text-2xl md:text-3xl font-bold"
                      : "text-muted-foreground text-lg md:text-xl"
                  }`}
                  animate={selectedIndex === index ? { textShadow: "0 0 20px hsl(210 100% 65% / 0.5)" } : { textShadow: "none" }}
                >
                  {item.label}
                </motion.span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar — exactly like PS2 */}
      <motion.nav
        className="flex items-center justify-between px-8 md:px-16 py-5 bg-ps2-bar/80"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <button
          onClick={handleEnter}
          className="flex items-center gap-2 font-ps2 text-sm tracking-wider text-foreground hover:text-primary transition-colors"
        >
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-foreground text-[10px]">✕</span>
          <span>Enter</span>
        </button>

        <span className="flex items-center gap-2 font-ps2 text-sm tracking-wider text-foreground">
          <span className="inline-flex items-center justify-center w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-green-500" />
          <span>Version</span>
        </span>
      </motion.nav>
    </main>
  );
};

export default Index;
