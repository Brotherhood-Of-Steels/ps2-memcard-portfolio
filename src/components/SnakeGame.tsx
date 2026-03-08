import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";

interface SnakeGameProps {
  onBack: () => void;
}

const GRID_SIZE = 20;
const CELL_SIZE = 18;
const INITIAL_SPEED = 150;

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
type Point = { x: number; y: number };

const SnakeGame = ({ onBack }: SnakeGameProps) => {
  const [snake, setSnake] = useState<Point[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Point>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Direction>("RIGHT");
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(false);
  const dirRef = useRef<Direction>("RIGHT");

  const spawnFood = useCallback((currentSnake: Point[]): Point => {
    let newFood: Point;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (currentSnake.some((s) => s.x === newFood.x && s.y === newFood.y));
    return newFood;
  }, []);

  const resetGame = () => {
    const initial = [{ x: 10, y: 10 }];
    setSnake(initial);
    setFood(spawnFood(initial));
    setDirection("RIGHT");
    dirRef.current = "RIGHT";
    setGameOver(false);
    setScore(0);
    setStarted(true);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onBack(); return; }
      if (!started && (e.key === "Enter" || e.key === " ")) { resetGame(); return; }
      if (gameOver && (e.key === "Enter" || e.key === " ")) { resetGame(); return; }

      const d = dirRef.current;
      if ((e.key === "ArrowUp" || e.key === "w") && d !== "DOWN") { dirRef.current = "UP"; setDirection("UP"); }
      if ((e.key === "ArrowDown" || e.key === "s") && d !== "UP") { dirRef.current = "DOWN"; setDirection("DOWN"); }
      if ((e.key === "ArrowLeft" || e.key === "a") && d !== "RIGHT") { dirRef.current = "LEFT"; setDirection("LEFT"); }
      if ((e.key === "ArrowRight" || e.key === "d") && d !== "LEFT") { dirRef.current = "RIGHT"; setDirection("RIGHT"); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [started, gameOver, onBack]);

  useEffect(() => {
    if (!started || gameOver) return;

    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = { ...prev[0] };
        const d = dirRef.current;
        if (d === "UP") head.y -= 1;
        if (d === "DOWN") head.y += 1;
        if (d === "LEFT") head.x -= 1;
        if (d === "RIGHT") head.x += 1;

        // Wall collision
        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
          setGameOver(true);
          return prev;
        }
        // Self collision
        if (prev.some((s) => s.x === head.x && s.y === head.y)) {
          setGameOver(true);
          return prev;
        }

        const newSnake = [head, ...prev];
        if (head.x === food.x && head.y === food.y) {
          setScore((s) => s + 10);
          setFood(spawnFood(newSnake));
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, INITIAL_SPEED);

    return () => clearInterval(interval);
  }, [started, gameOver, food, spawnFood]);

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center gap-6">
      <div className="ps2-crt-overlay" />

      <h2 className="font-ps2 text-foreground text-xl tracking-widest">SNAKE</h2>
      <p className="font-ps2 text-primary text-sm">Score: {score}</p>

      <div
        className="relative border border-border bg-ps2-dark"
        style={{ width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}
        role="img"
        aria-label="Snake game board"
      >
        {/* Food */}
        <motion.div
          className="absolute bg-destructive rounded-full"
          style={{
            width: CELL_SIZE - 2,
            height: CELL_SIZE - 2,
            left: food.x * CELL_SIZE + 1,
            top: food.y * CELL_SIZE + 1,
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />

        {/* Snake */}
        {snake.map((segment, i) => (
          <div
            key={i}
            className={`absolute ${i === 0 ? "bg-primary" : "bg-accent"} rounded-sm`}
            style={{
              width: CELL_SIZE - 2,
              height: CELL_SIZE - 2,
              left: segment.x * CELL_SIZE + 1,
              top: segment.y * CELL_SIZE + 1,
              opacity: 1 - i * 0.03,
            }}
          />
        ))}

        {/* Overlays */}
        {!started && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80">
            <p className="font-ps2 text-foreground text-sm animate-pulse">Press ENTER to start</p>
          </div>
        )}
        {gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 gap-2">
            <p className="font-ps2 text-destructive text-lg">GAME OVER</p>
            <p className="font-ps2 text-foreground text-sm">Score: {score}</p>
            <p className="font-ps2 text-muted-foreground text-xs animate-pulse">Press ENTER to retry</p>
          </div>
        )}
      </div>

      <div className="flex gap-8 font-ps2 text-sm text-muted-foreground">
        <span>Arrow keys to move</span>
        <span>ESC to back</span>
      </div>

      {/* Mobile controls */}
      <div className="flex flex-col items-center gap-2 md:hidden">
        <button onClick={() => { dirRef.current = "UP"; setDirection("UP"); if (!started) resetGame(); }} className="w-12 h-12 bg-secondary rounded flex items-center justify-center text-foreground font-ps2">↑</button>
        <div className="flex gap-2">
          <button onClick={() => { dirRef.current = "LEFT"; setDirection("LEFT"); }} className="w-12 h-12 bg-secondary rounded flex items-center justify-center text-foreground font-ps2">←</button>
          <button onClick={() => { dirRef.current = "DOWN"; setDirection("DOWN"); }} className="w-12 h-12 bg-secondary rounded flex items-center justify-center text-foreground font-ps2">↓</button>
          <button onClick={() => { dirRef.current = "RIGHT"; setDirection("RIGHT"); }} className="w-12 h-12 bg-secondary rounded flex items-center justify-center text-foreground font-ps2">→</button>
        </div>
      </div>

      <button onClick={onBack} className="font-ps2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        ○ Back
      </button>
    </main>
  );
};

export default SnakeGame;
