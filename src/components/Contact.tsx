import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "@/data/resume";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] glass-strong px-6 sm:px-14 py-16 sm:py-20 text-center">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[36rem] rounded-full bg-violet/25 blur-[120px]" />
            <div className="absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-cyan/20 blur-[120px]" />

            <div className="relative">
              <span className="section-label">// get in touch</span>
              <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold tracking-tight max-w-2xl mx-auto">
                Let's build something
                <span className="text-gradient"> intelligent</span> together.
              </h2>
              <p className="mt-5 max-w-xl mx-auto text-mist text-base sm:text-lg">
                Open to new-grad, internship, and research opportunities in AI/ML, data
                science, and software engineering. My inbox is always open.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet to-cyan px-7 py-3.5 font-semibold text-ink"
                >
                  <Mail size={17} />
                  {profile.email}
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  <Phone size={17} />
                  {profile.phone}
                </motion.a>
              </div>

              <div className="mt-10 flex items-center justify-center gap-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-mist hover:text-white transition-colors text-sm font-mono"
                >
                  <FaGithub size={16} /> github.com/anasabushaikha <ArrowUpRight size={13} />
                </a>
                <span className="text-mist-dim">/</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-mist hover:text-white transition-colors text-sm font-mono"
                >
                  <FaLinkedin size={16} /> linkedin.com/in/anasabushaikha <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
