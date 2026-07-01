import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks } from "@/data/resume";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 py-2.5 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-[0_8px_30px_rgba(0,0,0,0.35)]" : "bg-transparent"
          }`}
        >
          <a
            href="#top"
            className="font-mono text-sm font-bold tracking-widest text-white flex items-center gap-2"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet to-cyan text-ink text-xs font-black">
              AA
            </span>
            <span className="hidden sm:inline text-mist">anas<span className="text-cyan">.</span>dev</span>
          </a>

          <ul className="hidden md:flex items-center gap-1 font-mono text-xs uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative px-3 py-2 rounded-lg block transition-colors ${
                      isActive ? "text-white" : "text-mist-dim hover:text-mist"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-white/8 border border-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download
              className="hidden sm:flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-xs uppercase tracking-wider text-mist hover:text-white hover:border-cyan/50 hover:bg-cyan/10 transition-colors"
            >
              <Download size={13} />
              Resume
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden mt-2"
            >
              <div className="glass-strong rounded-2xl p-2 flex flex-col">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl font-mono text-sm text-mist hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  download
                  className="px-4 py-3 rounded-xl font-mono text-sm text-cyan hover:bg-white/5 transition-colors flex items-center gap-2"
                >
                  <Download size={14} /> Download Résumé
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
