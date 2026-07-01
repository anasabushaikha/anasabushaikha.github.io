import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Mail, ArrowDown, MapPin, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "@/data/resume";
import RoleRotator from "./RoleRotator";

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mvY, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mvX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 18,
  });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mvX.set((e.clientX - rect.left) / rect.width - 0.5);
    mvY.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onMouseLeave() {
    mvX.set(0);
    mvY.set(0);
  }

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-28 pb-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-8 items-center">
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-xs text-mist tracking-wide">
                Currently @ CENGN — Solutions Engineer Intern
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold leading-[1.02] text-5xl sm:text-6xl lg:text-7xl tracking-tight"
            >
              <span className="block text-mist-dim text-xl sm:text-2xl font-mono font-normal mb-3">
                Hi, I'm
              </span>
              <span className="text-gradient bg-[length:200%_auto] animate-gradient">
                {profile.name}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4"
            >
              <RoleRotator roles={profile.roles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-5 max-w-xl text-mist text-base sm:text-lg leading-relaxed"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-3 flex items-center gap-1.5 text-mist-dim font-mono text-sm"
            >
              <MapPin size={14} />
              {profile.location}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet to-cyan px-6 py-3 font-semibold text-ink overflow-hidden transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                <Sparkles size={16} />
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 hover:border-white/25 transition-colors"
              >
                Get In Touch
              </a>

              <div className="flex items-center gap-2 ml-1">
                {[
                  { href: profile.github, icon: FaGithub, label: "GitHub" },
                  { href: profile.linkedin, icon: FaLinkedin, label: "LinkedIn" },
                  { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-mist hover:text-white hover:border-cyan/50 hover:bg-cyan/10 transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column — photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-sm [perspective:1200px]"
          >
            <div
              ref={cardRef}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
              className="relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative rounded-[2rem] p-1.5 glass-strong"
              >
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-violet/40 via-cyan/20 to-rose/30 blur-2xl -z-10 animate-pulse-glow" />
                <div className="relative overflow-hidden rounded-[1.6rem] aspect-[4/5] bg-surface">
                  <img
                    src="/headshot.jpg"
                    alt={profile.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* floating chips */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 top-8 glass rounded-xl px-3 py-2 font-mono text-xs text-mist shadow-xl hidden sm:block"
              >
                🎓 Carleton CS
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-6 bottom-16 glass rounded-xl px-3 py-2 font-mono text-xs text-mist shadow-xl hidden sm:block"
              >
                📡 Ericsson
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute left-2 -bottom-6 glass rounded-xl px-3 py-2 font-mono text-xs text-mist shadow-xl hidden sm:block"
              >
                🧠 Deep Learning
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-mist-dim hover:text-white transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
