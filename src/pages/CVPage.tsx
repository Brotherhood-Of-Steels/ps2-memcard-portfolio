import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const CVPage = () => {
  const navigate = useNavigate();

  const handleBack = () => navigate("/browse");

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "CV.pdf";
    link.click();
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "o") handleBack();
      if (e.key === "d") handleDownload();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <main
      className="h-screen bg-ps2-gray flex flex-col"
      role="application"
      aria-label="CV Viewer"
    >
      {/* Header */}
      <header className="flex items-center px-[5%] pt-[3vh] pb-[2vh]">
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
          <span className="font-bold">My CV</span>
        </nav>
      </header>

      {/* PDF Viewer */}
      <motion.section
        className="flex-1 px-[5%] pb-[3vh] flex flex-col gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex-1 rounded-md overflow-hidden border border-ps2-menu-fg/20 bg-ps2-gray">
          <iframe
            src="/cv.pdf"
            title="My CV"
            className="w-full h-full"
            style={{ minHeight: "calc(100vh - 140px)" }}
          />
        </div>
      </motion.section>

      {/* Bottom bar */}
      <nav className="flex items-center justify-center gap-16 px-10 pt-2 pb-[3vh] font-body">
        <a
          href="/cv.pdf"
          download="CV.pdf"
          className="flex items-center gap-2 text-ps2-menu-fg text-base tracking-wide hover:text-primary transition-colors"
        >
          <Download size={16} className="font-bold" />
          <span className="font-bold">Download</span>
        </a>
        <button
          onClick={() => window.open("/cv.pdf", "_blank", "noopener,noreferrer")}
          className="flex items-center gap-2 text-ps2-menu-fg text-base tracking-wide hover:text-primary transition-colors"
        >
          <span className="font-bold">↵</span>
          <span className="font-bold">Open</span>
        </button>
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

export default CVPage;
