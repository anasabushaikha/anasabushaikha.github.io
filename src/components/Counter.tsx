import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export default function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
  const prefix = value.match(/^[^\d]*/)?.[0] ?? "";
  const suffix = value.match(/[^\d.]*$/)?.[0] ?? "";
  const hasNumber = !Number.isNaN(numeric);

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 80, damping: 20 });

  useEffect(() => {
    if (inView && hasNumber) motionVal.set(numeric);
  }, [inView, hasNumber, numeric, motionVal]);

  const display = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const unsub = spring.on("change", (latest) => {
      if (display.current) {
        const decimals = value.includes(".") ? 1 : 0;
        display.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
      }
    });
    return unsub;
  }, [spring, prefix, suffix, value]);

  if (!hasNumber) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <motion.span ref={ref}>
      <span ref={display}>{prefix}0{suffix}</span>
    </motion.span>
  );
}
