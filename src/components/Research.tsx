import { motion } from "framer-motion";
import { Eye, GraduationCap, Calendar, MapPin } from "lucide-react";
import { research, teaching } from "@/data/resume";
import Reveal from "./Reveal";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";

export default function Research() {
  return (
    <section id="research" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <span className="section-label">// research</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Honours Thesis
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-10 overflow-hidden rounded-3xl glass-strong p-6 sm:p-10">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-violet/25 blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan/20 blur-[100px]" />

            <div className="relative grid md:grid-cols-[auto_1fr] gap-6 sm:gap-8">
              <div className="flex md:flex-col items-center md:items-start gap-3">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet to-cyan text-ink">
                  <Eye size={26} />
                </span>
              </div>

              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                  {research.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-mist text-sm">
                  <span className="flex items-center gap-1.5">
                    <GraduationCap size={14} className="text-violet-soft" />
                    {research.org}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-violet-soft" />
                    {research.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-violet-soft" />
                    {research.location}
                  </span>
                </div>

                <ul className="mt-5 space-y-3">
                  {research.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2.5 text-sm sm:text-[15px] text-mist leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {research.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-mono text-cyan"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-20">
          <span className="section-label">// teaching</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Teaching Assistance
          </h2>
        </Reveal>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {teaching.map((t) => (
            <motion.div
              key={t.role}
              variants={fadeUp}
              className="glass rounded-2xl p-6 flex flex-col hover:border-violet/30 transition-colors"
            >
              <h3 className="font-display font-bold text-white leading-snug">{t.role}</h3>
              <p className="mt-1 text-xs text-mist-dim">{t.org}</p>
              <p className="mt-3 text-xs font-mono text-cyan">{t.period}</p>
              <p className="mt-3 text-sm text-mist leading-relaxed flex-1">{t.bullets[0]}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
