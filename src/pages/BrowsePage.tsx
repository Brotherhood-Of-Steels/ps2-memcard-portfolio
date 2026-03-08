import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, BookOpen, Pen } from "lucide-react";


const browseItems = [
  { id: "cv", label: "My CV", icon: FileText, color: "hsl(210, 80%, 65%)", action: "download-cv" },
  { id: "blog", label: "My Blog", icon: BookOpen, color: "hsl(140, 70%, 55%)", action: "link", url: "https://yourblog.com" },
  { id: "medium", label: "Medium", icon: Pen, color: "hsl(0, 0%, 90%)", action: "link", url: "https://medium.com" },
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
      <header className="flex items-center justify-between px-[5%] pt-[7vh] pb-[2.5vh]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-7 bg-[hsl(220,15%,25%)] rounded-sm" aria-hidden="true" />
          <div className="font-body text-ps2-menu-fg leading-tight">
            <p className="text-base font-bold">Memory Card (PS2)/1</p>
            <p className="text-sm text-ps2-menu-fg/80">1,035 KB Free</p>
          </div>
        </div>
        <div className="font-body text-ps2-menu-fg text-right leading-tight">
          <p className="text-base font-bold">Your System</p>
          <p className="text-base font-bold">Configuration</p>
        </div>
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
                {/* 3D cube-like CV icon */}
                <div className="relative w-16 h-16">
                  {/* Paper/document shape */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-white to-gray-200 rounded-sm shadow-lg"
                    style={{ transform: "rotateX(10deg)" }}
                  >
                    {/* Document lines */}
                    <div className="absolute top-3 left-2 right-2 space-y-1.5">
                      <div className="h-1 bg-gray-400 rounded w-3/4" />
                      <div className="h-1 bg-gray-300 rounded w-full" />
                      <div className="h-1 bg-gray-300 rounded w-5/6" />
                      <div className="h-1 bg-gray-300 rounded w-full" />
                      <div className="h-1 bg-gray-300 rounded w-2/3" />
                    </div>
                    {/* CV text */}
                    <div className="absolute bottom-2 left-2 font-body text-[8px] text-muted-foreground font-bold">
                      CV
                    </div>
                  </div>
                  {/* Blue accent on side */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-400 to-blue-600 rounded-l-sm"
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
      <nav className="flex items-center justify-center gap-20 px-10 pt-4 pb-[4vh] font-body">
        <button onClick={handleEnter} className="flex items-center gap-2 text-ps2-menu-fg text-base tracking-wide hover:text-primary transition-colors">
          <span className="font-bold text-lg">✕</span>
          <span className="font-bold">Enter</span>
        </button>
        <button onClick={handleBack} className="flex items-center gap-2 text-ps2-menu-fg text-base tracking-wide hover:text-primary transition-colors">
          <span className="font-bold text-lg">○</span>
          <span className="font-bold">Back</span>
        </button>
        <span className="flex items-center gap-2 text-ps2-menu-fg text-base tracking-wide">
          <span className="font-bold text-lg">△</span>
          <span className="font-bold">Options</span>
        </span>
      </nav>
    </main>
  );
};

export default BrowsePage;
