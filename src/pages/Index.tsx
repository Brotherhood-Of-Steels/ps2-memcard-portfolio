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

      {/* Orbs fill left/center area */}
      <div className="absolute inset-0" style={{ right: "30%" }}>
        <PS2Orbs />
      </div>

      {/* Right-aligned menu */}
      <div className="flex-1 flex items-center justify-end pr-12 md:pr-24 relative z-10">
        <div className="flex flex-col gap-1">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedIndex(index);
                navigate(item.path);
              }}
              className="text-right focus:outline-none py-1"
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

      {/* Bottom bar */}
      <motion.nav
        className="flex items-center justify-between px-8 md:px-16 py-5 bg-ps2-bar/80"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center gap-0.5">
            <span className="inline-flex items-center justify-center w-5 h-5 border border-foreground/60 rounded-sm text-[10px] text-foreground leading-none">▲</span>
            <span className="inline-flex items-center justify-center w-5 h-5 border border-foreground/60 rounded-sm text-[10px] text-foreground leading-none">▼</span>
          </div>
          <span className="font-body text-sm tracking-wider text-foreground">Select</span>
        </div>
        <button
          onClick={handleEnter}
          className="font-body text-sm tracking-wider text-foreground hover:text-primary transition-colors"
        >
          Enter
        </button>
      </motion.nav>
    </main>
  );
};

export default Index;
