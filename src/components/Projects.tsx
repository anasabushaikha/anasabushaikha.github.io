import { motion } from "framer-motion";
import { ExternalLink, Star, Calendar } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "@/data/resume";
import Reveal from "./Reveal";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <span className="section-label">// projects</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Things I've built
          </h2>
        </Reveal>

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid md:grid-cols-2 gap-6"
        >
          {projects.map((p) => (
            <motion.article
              key={p.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={`group relative flex flex-col rounded-2xl glass p-6 sm:p-7 hover:border-cyan/40 transition-colors ${
                p.featured ? "md:col-span-1 ring-1 ring-white/5" : ""
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/0 to-transparent group-hover:via-cyan/60 transition-all duration-500 rounded-t-2xl" />

              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug flex items-center gap-2">
                  {p.featured && <Star size={16} className="text-cyan shrink-0" fill="currentColor" />}
                  {p.name}
                </h3>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${p.name} on GitHub`}
                    className="shrink-0 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-mist hover:text-white hover:border-cyan/50 hover:bg-cyan/10 transition-colors"
                  >
                    <FaGithub size={16} />
                  </a>
                )}
              </div>

              {p.period && (
                <div className="mt-1.5 flex items-center gap-1.5 text-xs font-mono text-mist-dim">
                  <Calendar size={12} /> {p.period}
                </div>
              )}

              <p className="mt-3 text-sm text-mist-dim italic">{p.description}</p>

              <ul className="mt-4 space-y-2.5 flex-1">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-mist leading-relaxed">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-soft" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-mist"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-cyan hover:gap-2.5 transition-all w-fit"
                >
                  View project <ExternalLink size={14} />
                </a>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
