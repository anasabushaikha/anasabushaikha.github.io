import { motion } from "framer-motion";
import { skills } from "@/data/resume";
import { getSkillIcon } from "@/lib/skillIcons";
import Reveal from "./Reveal";
import { stagger, fadeUp, viewportOnce, scaleIn } from "@/lib/motion";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <span className="section-label">// skills</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Tools of the trade
          </h2>
        </Reveal>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5"
        >
          {skills.map((group) => (
            <motion.div key={group.category} variants={fadeUp} className="glass rounded-2xl p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-cyan mb-4">
                {group.category}
              </h3>
              <motion.div
                variants={stagger(0.03)}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="flex flex-wrap gap-2.5"
              >
                {group.skills.map((skill) => {
                  const Icon = getSkillIcon(skill);
                  return (
                    <motion.span
                      key={skill}
                      variants={scaleIn}
                      whileHover={{ scale: 1.06, y: -2 }}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-mist hover:text-white hover:border-cyan/40 hover:bg-cyan/10 transition-colors cursor-default"
                    >
                      <Icon className="text-violet-soft" size={16} />
                      {skill}
                    </motion.span>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
