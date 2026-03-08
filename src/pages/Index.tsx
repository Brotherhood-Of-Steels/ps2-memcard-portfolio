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
  const [enterFlash, setEnterFlash] = useState(false);
  const navigate = useNavigate();

  const handleEnter = () => {
    setEnterFlash(true);
    setTimeout(() => {
      navigate(menuItems[selectedIndex].path);
    }, 300);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") setSelectedIndex((p) => (p - 1 + menuItems.length) % menuItems.length);
      if (e.key === "ArrowDown") setSelectedIndex((p) => (p + 1) % menuItems.length);
      if (e.key === "Enter") handleEnter();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <main
      className="relative min-h-screen bg-background overflow-hidden flex flex-col"
      role="application"
      aria-label="PS2 Menu"
    >
      <div className="ps2-crt-overlay" />
      <div className="ps2-scanline" />

      {/* Enter flash overlay */}
      {enterFlash && (
        <motion.div
          className="fixed inset-0 z-50 bg-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Center content — orbs and menu side by side, close together */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative flex items-center gap-6 md:gap-10">
          {/* Orbs — covers full area so they can pass over the menu */}
          <div className="absolute inset-0 -left-20 -right-20 -top-20 -bottom-20 pointer-events-none z-10" style={{ transform: 'translateX(-90px)' }}>
            <PS2Orbs />
          </div>

          {/* Spacer matching orb area */}
          <div className="w-52 h-48 md:w-64 md:h-56" />

          {/* Menu text — below orbs layer */}
          <div className="flex flex-col gap-1 relative z-20 pointer-events-auto">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedIndex(index);
                  navigate(item.path);
                }}
                className="text-left focus:outline-none py-0.5"
              >
                <motion.span
                  className={`block font-body tracking-wider transition-all ${
                    selectedIndex === index
                      ? "text-foreground text-2xl md:text-3xl font-bold"
                      : "text-muted-foreground text-lg md:text-xl"
                  }`}
                  animate={
                    selectedIndex === index
                      ? { textShadow: "0 0 20px hsl(210 100% 65% / 0.5)" }
                      : { textShadow: "none" }
                  }
                >
                  {item.label}
                </motion.span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar — centered */}
      <motion.nav
        className="flex items-center justify-center gap-16 px-8 py-5"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center gap-0.5">
            <span className="inline-flex items-center justify-center w-5 h-5 border border-foreground/60 rounded-sm text-[10px] text-foreground leading-none font-semibold">▲</span>
            <span className="inline-flex items-center justify-center w-5 h-5 border border-foreground/60 rounded-sm text-[10px] text-foreground leading-none font-semibold">▼</span>
          </div>
          <span className="font-body text-sm tracking-wider text-foreground font-semibold">Select</span>
        </div>
        <button
          onClick={handleEnter}
          className="font-body text-sm tracking-wider text-foreground hover:text-primary transition-colors focus:outline-none"
        >
          Enter
        </button>
      </motion.nav>
    </main>
  );
};

export default Index;
