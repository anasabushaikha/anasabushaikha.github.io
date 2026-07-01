import { motion } from "framer-motion";
import { Languages, Heart } from "lucide-react";
import { profile, stats } from "@/data/resume";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <span className="section-label">// about-me</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
            Turning data into decisions, and research into real-world impact.
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[1.3fr_1fr] gap-12">
          <div>
            {profile.bio.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-mist text-base sm:text-lg leading-relaxed mb-5">
                  {p}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-8">
                <div>
                  <div className="flex items-center gap-2 text-cyan mb-3 font-mono text-xs uppercase tracking-widest">
                    <Languages size={14} /> Languages
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {profile.languages.map((l) => (
                      <span
                        key={l.name}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-mist"
                      >
                        {l.name} <span className="text-mist-dim">· {l.level}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-8">
                <div className="flex items-center gap-2 text-cyan mb-3 font-mono text-xs uppercase tracking-widest">
                  <Heart size={14} /> Interests
                </div>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full border border-violet/20 bg-violet/10 px-3 py-1.5 text-sm text-violet-soft"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-4 content-start"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="glass rounded-2xl p-5 hover:border-cyan/30 transition-colors"
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">
                  <Counter value={s.value} />
                </div>
                <div className="mt-2 text-sm font-medium text-white">{s.label}</div>
                <div className="mt-0.5 text-xs text-mist-dim">{s.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
