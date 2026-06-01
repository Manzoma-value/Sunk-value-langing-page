"use client";

import { motion } from "framer-motion";
import { fadeUp, inView } from "@/lib/motion";

type SectionLabelProps = {
  children: React.ReactNode;
  /** "light" for dark sections, "dark" for light sections. */
  tone?: "light" | "dark";
};

/** A small tracked-out strategic label with a leading gold tick. */
export default function SectionLabel({ children, tone = "dark" }: SectionLabelProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      className="flex items-center gap-3"
    >
      <span className="h-px w-8 bg-gold" aria-hidden="true" />
      <span
        className={`tracking-label text-xs font-medium uppercase ${
          tone === "light" ? "text-stone/80" : "text-ink-muted"
        }`}
      >
        {children}
      </span>
    </motion.div>
  );
}
