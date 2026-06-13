import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, Upload, CheckCircle, Eye, EyeOff } from "lucide-react";

const CORRECT_PASSWORD = "Apollo19!";

const CVEditPage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [currentFileName, setCurrentFileName] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleBack = () => navigate("/browse");

  const handleLogin = () => {
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Password salah!");
      setPassword("");
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      setError("Hanya file PDF yang diperbolehkan!");
      return;
    }

    setUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("cv", file);

      const res = await fetch("/api/upload-cv", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Upload gagal");
      }

      setCurrentFileName(file.name);
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
    } catch {
      setError("Gagal upload CV. Coba lagi.");
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isInput = target.tagName === "INPUT" || target.tagName === "TEXTAREA";

      // Always allow Escape to work
      if (e.key === "Escape") {
        handleBack();
        return;
      }

      // Skip other shortcuts when user is typing in an input field
      if (isInput) return;

      if (e.key === "o") handleBack();
      if (e.key === "Enter" && !isAuthenticated) handleLogin();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isAuthenticated, password]);

  // Login screen
  if (!isAuthenticated) {
    return (
      <main
        className="h-screen bg-ps2-gray flex flex-col"
        role="application"
        aria-label="CV Editor - Login"
      >
        <header className="flex items-center px-[5%] pt-[7vh] pb-[2.5vh]">
          <nav className="font-body text-ps2-menu-fg text-sm tracking-wide flex items-center gap-2">
            <button
              onClick={() => navigate("/")}
              className="hover:text-primary transition-colors"
            >
              Home
            </button>
            <span className="text-ps2-menu-fg/50">›</span>
            <button
              onClick={handleBack}
              className="hover:text-primary transition-colors"
            >
              Browse
            </button>
            <span className="text-ps2-menu-fg/50">›</span>
            <span className="font-bold">CV Editor</span>
          </nav>
        </header>

        <section className="flex-1 flex items-center justify-center px-[8%]">
          <motion.div
            className="flex flex-col items-center gap-6 w-full max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-ps2-menu-fg/30">
              <Lock size={36} className="text-ps2-menu-fg" />
            </div>

            <h1 className="font-body text-ps2-menu-fg text-lg tracking-wider">
              Protected Area
            </h1>

            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleLogin();
                }}
                placeholder="Masukkan password..."
                className="w-full bg-ps2-gray border border-ps2-menu-fg/30 text-ps2-menu-fg font-body text-sm tracking-wider px-4 py-3 rounded-md focus:outline-none focus:border-ps2-selected placeholder:text-ps2-menu-fg/40"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-ps2-menu-fg/50 hover:text-ps2-menu-fg transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {error && (
              <motion.p
                className="text-red-400 font-body text-sm tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {error}
              </motion.p>
            )}

            <button
              onClick={handleLogin}
              className="w-full bg-ps2-menu-fg/10 border border-ps2-menu-fg/30 text-ps2-menu-fg font-body text-sm tracking-wider py-3 rounded-md hover:bg-ps2-menu-fg/20 transition-colors"
            >
              Unlock
            </button>
          </motion.div>
        </section>

        <nav className="flex items-center justify-center gap-16 px-10 pt-4 pb-[4vh] font-body">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-ps2-menu-fg text-base tracking-wide hover:text-primary transition-colors"
          >
            <span className="font-bold">←</span>
            <span className="font-bold">Back</span>
          </button>
        </nav>
      </main>
    );
  }

  // Editor screen (after auth)
  return (
    <main
      className="h-screen bg-ps2-gray flex flex-col"
      role="application"
      aria-label="CV Editor"
    >
      <header className="flex items-center px-[5%] pt-[7vh] pb-[2.5vh]">
        <nav className="font-body text-ps2-menu-fg text-sm tracking-wide flex items-center gap-2">
          <button
            onClick={() => navigate("/")}
            className="hover:text-primary transition-colors"
          >
            Home
          </button>
          <span className="text-ps2-menu-fg/50">›</span>
          <button
            onClick={handleBack}
            className="hover:text-primary transition-colors"
          >
            Browse
          </button>
          <span className="text-ps2-menu-fg/50">›</span>
          <span className="font-bold">CV Editor</span>
        </nav>
      </header>

      <section className="flex-1 flex items-center justify-center px-[8%]">
        <motion.div
          className="flex flex-col items-center gap-8 w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-green-500/50">
            <CheckCircle size={36} className="text-green-400" />
          </div>

          <h1 className="font-body text-ps2-menu-fg text-lg tracking-wider">
            CV Manager
          </h1>

          {/* Upload area */}
          <div
            onClick={() => !uploading && fileInputRef.current?.click()}
            className={`w-full border-2 border-dashed border-ps2-menu-fg/30 rounded-md p-8 flex flex-col items-center gap-4 cursor-pointer hover:border-ps2-selected/70 transition-colors group ${uploading ? "opacity-50 pointer-events-none" : ""}`}
          >
            <Upload
              size={40}
              className="text-ps2-menu-fg/50 group-hover:text-ps2-selected transition-colors"
            />
            <p className="font-body text-ps2-menu-fg/70 text-sm tracking-wider text-center">
              {uploading
                ? "Meng-upload CV..."
                : "Klik untuk upload CV baru (PDF)"}
            </p>
            {currentFileName && (
              <p className="font-body text-ps2-menu-fg text-xs tracking-wider">
                File: {currentFileName}
              </p>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleUpload}
            className="hidden"
          />

          {uploadSuccess && (
            <motion.div
              className="flex items-center gap-2 text-green-400 font-body text-sm tracking-wider"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <CheckCircle size={16} />
              CV berhasil di-upload!
            </motion.div>
          )}

          {error && (
            <motion.p
              className="text-red-400 font-body text-sm tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.p>
          )}

          {/* Preview link */}
          <a
            href="/cv"
            className="font-body text-ps2-menu-fg/60 text-xs tracking-wider hover:text-ps2-selected transition-colors"
          >
            Preview CV saat ini →
          </a>
        </motion.div>
      </section>

      <nav className="flex items-center justify-center gap-16 px-10 pt-4 pb-[4vh] font-body">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-ps2-menu-fg text-base tracking-wide hover:text-primary transition-colors"
        >
          <span className="font-bold">←</span>
          <span className="font-bold">Back</span>
        </button>
      </nav>
    </main>
  );
};

export default CVEditPage;
