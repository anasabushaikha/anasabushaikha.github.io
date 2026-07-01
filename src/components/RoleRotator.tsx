import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function RoleRotator({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <div className="h-8 sm:h-10 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 right-0 font-mono text-lg sm:text-2xl text-cyan"
        >
          {roles[index]}
          <span className="animate-blink text-violet">_</span>
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
