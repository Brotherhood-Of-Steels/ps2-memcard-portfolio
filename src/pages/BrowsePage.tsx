import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CVIcon from "@/components/CVIcon";
import BlogIcon from "@/components/BlogIcon";
import MediumIcon from "@/components/MediumIcon";
import GitHubIcon from "@/components/GitHubIcon";


const browseItems = [
  { id: "cv", label: "My CV", customIcon: "cv", color: "hsl(210, 80%, 65%)", action: "download-cv" },
  { id: "blog", label: "My Blog", customIcon: "blog", color: "hsl(140, 70%, 55%)", action: "link", url: "https://damarowen.blog/blogs" },
  { id: "medium", label: "Medium", customIcon: "medium", color: "hsl(0, 0%, 90%)", action: "link", url: "https://medium.com/@damarowen" },
  { id: "github", label: "GitHub", customIcon: "github", color: "hsl(0, 0%, 10%)", action: "link", url: "https://github.com/damarowen" },
];

const BrowsePage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const handleBack = () => navigate("/");

  const handleEnter = () => {
    const item = browseItems[selectedIndex];
    if (item.action === "download-cv") {
      const link = document.createElement("a");
      link.href = "/cv.pdf";
      link.download = "CV.pdf";
      link.click();
    } else if (item.action === "link" && item.url) {
      window.open(item.url, "_blank");
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setSelectedIndex((p) => (p - 1 + browseItems.length) % browseItems.length);
      if (e.key === "ArrowRight") setSelectedIndex((p) => (p + 1) % browseItems.length);
      if (e.key === "Enter" || e.key === "x") handleEnter();
      if (e.key === "Escape" || e.key === "o") handleBack();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <main className="h-screen bg-ps2-gray flex flex-col" role="application" aria-label="Browse Memory Card">
      {/* Header */}
      <header className="flex items-center px-[5%] pt-[7vh] pb-[2.5vh]">
        <nav className="font-body text-ps2-menu-fg text-sm tracking-wide flex items-center gap-2">
          <button onClick={handleBack} className="hover:text-primary transition-colors">Home</button>
          <span className="text-ps2-menu-fg/50">›</span>
          <span className="font-bold">Browser</span>
        </nav>
      </header>

      {/* Items Grid */}
      <section className="flex-1 flex items-center justify-center px-[8%]">
        <div className="grid grid-cols-5 gap-x-10 gap-y-8">
          {browseItems.map((item, index) => (
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
                className={`relative w-28 h-28 flex items-center justify-center ${
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
                {item.customIcon === "github" ? (
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <GitHubIcon className="w-full h-full" />
                  </div>
                ) : (
                  <div className="relative w-24 h-24">
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
                        {item.customIcon === "cv" ? (
                          <CVIcon className="w-full h-full" />
                        ) : item.customIcon === "blog" ? (
                          <BlogIcon className="w-full h-full" />
                        ) : item.customIcon === "medium" ? (
                          <MediumIcon className="w-full h-full" />
                        ) : null}
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
                )}
                
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

export default BrowsePage;
