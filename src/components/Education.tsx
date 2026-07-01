import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy, BadgeCheck } from "lucide-react";
import { education, awards } from "@/data/resume";
import Reveal from "./Reveal";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";

export default function Education() {
  return (
    <section id="education" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <Reveal>
              <span className="section-label">// education</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
                Education
              </h2>
            </Reveal>

            <motion.div
              variants={stagger(0.12)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-10 space-y-5"
            >
              {education.map((e) => (
                <motion.div
                  key={e.degree}
                  variants={fadeUp}
                  className="glass rounded-2xl p-6 hover:border-violet/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-cyan text-ink">
                      <GraduationCap size={20} />
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-white leading-snug">{e.degree}</h3>
                      <p className="mt-1 text-sm text-mist">
                        {e.school} <span className="text-mist-dim">· {e.location}</span>
                      </p>
                      <p className="mt-1 font-mono text-xs text-cyan">{e.period}</p>
                      <p className="mt-2 text-sm text-mist-dim">{e.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <Reveal delay={0.1}>
              <span className="section-label">// honours</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
                Awards &amp; Certifications
              </h2>
            </Reveal>

            <motion.div
              variants={stagger(0.12)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-10 space-y-5"
            >
              {awards.map((a, i) => (
                <motion.div
                  key={a.name}
                  variants={fadeUp}
                  className="glass rounded-2xl p-6 hover:border-cyan/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-cyan">
                      {i === 0 ? <Trophy size={20} /> : <BadgeCheck size={20} />}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-white leading-snug">{a.name}</h3>
                      <p className="mt-1 text-sm text-mist-dim flex items-center gap-1.5">
                        <Award size={13} /> {a.org}
                      </p>
                      <p className="mt-2 text-sm text-mist leading-relaxed">{a.bullets[0]}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
