import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, User, BookOpen, Twitter, Music } from "lucide-react";
import PS2BottomBar from "@/components/PS2BottomBar";
import PS2Icon3D from "@/components/PS2Icon3D";

const browseItems = [
  { id: "blog", label: "Blog", icon: BookOpen, url: "#blog", color: "hsl(30, 90%, 60%)" },
  { id: "cv", label: "My CV", icon: FileText, url: "#cv", color: "hsl(210, 80%, 65%)" },
  { id: "medium", label: "Medium", icon: User, url: "https://medium.com", color: "hsl(0, 0%, 85%)" },
  { id: "twitter", label: "Twitter", icon: Twitter, url: "https://twitter.com", color: "hsl(200, 90%, 55%)" },
  { id: "spotify", label: "Spotify", icon: Music, url: "https://spotify.com", color: "hsl(140, 70%, 50%)" },
];

const BrowsePage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const handleBack = () => navigate("/");

  const handleEnter = () => {
    const item = browseItems[selectedIndex];
    if (item.url.startsWith("#")) {
      // Internal — could add pages later
    } else {
      window.open(item.url, "_blank", "noopener,noreferrer");
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
    <main className="min-h-screen bg-ps2-gray flex flex-col" role="application" aria-label="Browse Memory Card">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-ps2-menu/90 to-ps2-gray">
        <div className="flex items-center gap-3">
          <div className="w-10 h-7 bg-secondary rounded-sm border border-border" aria-hidden="true" />
          <div className="font-ps2 text-ps2-menu-fg">
            <h1 className="text-sm font-bold">Memory Card (PS2)/1</h1>
            <p className="text-xs text-muted-foreground">Portfolio</p>
          </div>
        </div>
        <motion.p
          className="font-ps2 text-sm text-ps2-menu-fg font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {browseItems[selectedIndex].label}
        </motion.p>
      </header>

      {/* Items Grid */}
      <section className="flex-1 flex items-center justify-center px-8">
        <div className="flex gap-10 md:gap-14">
          {browseItems.map((item, index) => (
            <PS2Icon3D
              key={item.id}
              icon={item.icon}
              label={item.label}
              selected={selectedIndex === index}
              onClick={() => {
                setSelectedIndex(index);
                if (item.url.startsWith("http")) {
                  window.open(item.url, "_blank", "noopener,noreferrer");
                }
              }}
              delay={index * 0.1}
              color={item.color}
            />
          ))}
        </div>
      </section>

      {/* Loading text */}
      <motion.p
        className="text-center font-ps2 text-ps2-menu-fg text-lg mb-4"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading...
      </motion.p>

      {/* Down arrow */}
      <div className="flex justify-center mb-4">
        <motion.div
          className="text-primary text-2xl"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          ▼
        </motion.div>
      </div>

      <PS2BottomBar
        actions={[
          { icon: "○", label: "Back", onClick: handleBack },
          { icon: "✕", label: "Enter", onClick: handleEnter },
        ]}
      />
    </main>
  );
};

export default BrowsePage;
