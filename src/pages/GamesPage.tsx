import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import SnakeGame from "@/components/SnakeGame";

const gameItems = [
  { id: "snake", label: "Snake", icon: Gamepad2, color: "hsl(120, 60%, 50%)" },
];

const GamesPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => navigate("/");

  const handleEnter = () => {
    setPlaying(true);
  };

  useEffect(() => {
    if (playing) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setSelectedIndex((p) => (p - 1 + gameItems.length) % gameItems.length);
      if (e.key === "ArrowRight") setSelectedIndex((p) => (p + 1) % gameItems.length);
      if (e.key === "Enter" || e.key === "x") handleEnter();
      if (e.key === "Escape" || e.key === "o") handleBack();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  if (playing) {
    return <SnakeGame onBack={() => setPlaying(false)} />;
  }

  return (
    <main className="h-screen bg-ps2-gray flex flex-col" role="application" aria-label="Games Memory Card">
      {/* Header */}
      <header className="flex items-center px-[5%] pt-[7vh] pb-[2.5vh]">
        <nav className="font-body text-ps2-menu-fg text-sm tracking-wide flex items-center gap-2">
          <button onClick={handleBack} className="hover:text-primary transition-colors">Home</button>
          <span className="text-ps2-menu-fg/50">›</span>
          <span className="font-bold">Games</span>
        </nav>
      </header>

      {/* Items Grid */}
      <section className="flex-1 flex items-center justify-center px-[8%]">
        <div className="grid grid-cols-5 gap-x-10 gap-y-8">
          {gameItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => {
                setSelectedIndex(index);
                handleEnter();
              }}
              className="flex flex-col items-center gap-2 group focus:outline-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={item.label}
            >
              <motion.div
                className={`relative w-20 h-20 flex items-center justify-center ${
                  selectedIndex === index ? "ring-2 ring-ps2-selected rounded-sm" : ""
                }`}
                animate={selectedIndex === index ? {
                  y: [0, -6, 0],
                  rotateY: [0, 180, 360],
                } : {
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: selectedIndex === index ? 2 : 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ perspective: "200px", transformStyle: "preserve-3d" }}
              >
                {/* PS2 memory card save icon style */}
                <div className="relative w-16 h-16">
                  {/* Base card shape */}
                  <div 
                    className="absolute inset-0 rounded-sm shadow-lg overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${item.color}, ${item.color}88)`,
                      transform: "rotateX(10deg)" 
                    }}
                  >
                    {/* Icon centered */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <item.icon size={28} className="text-ps2-menu-fg/90 drop-shadow-md" />
                    </div>
                    {/* Bottom label */}
                    <div className="absolute bottom-1 left-0 right-0 text-center font-body text-[7px] text-ps2-menu-fg/70 font-bold uppercase tracking-wider">
                      {item.id}
                    </div>
                  </div>
                  {/* Side accent */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-sm"
                    style={{ background: `linear-gradient(to bottom, ${item.color}, ${item.color}66)` }}
                  />
                </div>
                
                {/* Glow effect */}
                {selectedIndex === index && (
                  <div className="absolute inset-0 bg-ps2-glow/30 rounded-sm blur-lg" />
                )}
              </motion.div>
              <span className={`text-xs font-body tracking-wider ${
                selectedIndex === index ? "text-ps2-menu-fg" : "text-ps2-menu-fg/70"
              } group-hover:text-ps2-menu-fg transition-colors`}>
                {item.label}
              </span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Bottom bar */}
      <nav className="flex items-center justify-center gap-16 px-10 pt-4 pb-[4vh] font-body">
        <button onClick={handleEnter} className="flex items-center gap-2 text-ps2-menu-fg text-base tracking-wide hover:text-primary transition-colors">
          <span className="font-bold">↵</span>
          <span className="font-bold">Enter</span>
        </button>
        <button onClick={handleBack} className="flex items-center gap-2 text-ps2-menu-fg text-base tracking-wide hover:text-primary transition-colors">
          <span className="font-bold">←</span>
          <span className="font-bold">Back</span>
        </button>
      </nav>
    </main>
  );
};

export default GamesPage;