import { ArrowUp } from "lucide-react";
import { profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-mist-dim">
          © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind &amp; Framer Motion.
        </p>
        <a
          href="#top"
          className="flex items-center gap-1.5 font-mono text-xs text-mist hover:text-cyan transition-colors"
        >
          Back to top <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  );
}
