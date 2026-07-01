import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/data/resume";
import Reveal from "./Reveal";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.4"],
  });

  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <span className="section-label">// experience</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Where I've worked
          </h2>
        </Reveal>

        <div ref={containerRef} className="relative mt-16 pl-8 sm:pl-12">
          <div className="absolute left-[7px] sm:left-[11px] top-0 bottom-0 w-px bg-white/10" />
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[7px] sm:left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-violet via-cyan to-rose origin-top"
          />

          <div className="space-y-14">
            {experience.map((job, i) => (
              <Reveal key={job.role + job.period} delay={i * 0.05} className="relative">
                <span
                  className={`absolute -left-8 sm:-left-12 top-1.5 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-full border-2 ${
                    job.current
                      ? "border-cyan bg-cyan/20 shadow-[0_0_16px_rgba(78,225,255,0.6)]"
                      : "border-violet bg-ink"
                  }`}
                >
                  {job.current && (
                    <span className="absolute inline-flex h-full w-full rounded-full bg-cyan/40 animate-ping" />
                  )}
                </span>

                <div className="glass rounded-2xl p-6 hover:border-white/20 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2 flex-wrap">
                        {job.role}
                        {job.current && (
                          <span className="rounded-full bg-emerald-400/15 text-emerald-300 text-[10px] font-mono uppercase tracking-widest px-2 py-1 border border-emerald-400/30">
                            Current
                          </span>
                        )}
                      </h3>
                      <div className="mt-1 flex items-center gap-2 text-mist font-medium">
                        <Briefcase size={14} className="text-violet-soft" />
                        {job.company}
                        <span className="text-mist-dim">·</span>
                        <MapPin size={14} className="text-violet-soft" />
                        {job.location}
                      </div>
                    </div>
                    <span className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-cyan">
                      {job.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {job.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2.5 text-sm sm:text-[15px] text-mist leading-relaxed">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
