import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import PS2BottomBar from "@/components/PS2BottomBar";
import PS2Icon3D from "@/components/PS2Icon3D";
import SnakeGame from "@/components/SnakeGame";

const GamesPage = () => {
  const [playing, setPlaying] = useState(false);
  const navigate = useNavigate();

  if (playing) {
    return <SnakeGame onBack={() => setPlaying(false)} />;
  }

  return (
    <main className="min-h-screen bg-ps2-gray flex flex-col" role="application" aria-label="Games Memory Card">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-ps2-menu/90 to-ps2-gray">
        <div className="flex items-center gap-3">
          <div className="w-10 h-7 bg-secondary rounded-sm border border-border" aria-hidden="true" />
          <div className="font-ps2 text-ps2-menu-fg">
            <h1 className="text-sm font-bold">Memory Card (PS2)/1</h1>
            <p className="text-xs text-muted-foreground">Games</p>
          </div>
        </div>
        <p className="font-ps2 text-sm text-ps2-menu-fg font-bold">Snake</p>
      </header>

      {/* Snake icon */}
      <section className="flex-1 flex flex-col items-center justify-center">
        <PS2Icon3D
          icon={Gamepad2}
          label="Snake"
          selected
          onClick={() => setPlaying(true)}
          color="hsl(120, 60%, 50%)"
        />

        <motion.p
          className="mt-8 font-ps2 text-ps2-menu-fg text-lg"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.p>
      </section>

      <PS2BottomBar
        actions={[
          { icon: "○", label: "Back", onClick: () => navigate("/") },
          { icon: "✕", label: "Enter", onClick: () => setPlaying(true) },
        ]}
      />
    </main>
  );
};

export default GamesPage;
