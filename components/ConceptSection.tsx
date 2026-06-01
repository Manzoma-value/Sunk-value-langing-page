"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { fadeUp, inView, stagger } from "@/lib/motion";

type FlowItem = { label: string; note: string };

type ConceptSectionProps = {
  label: string;
  title: string;
  body: string[];
  flow: FlowItem[];
  arrow: string;
};

export default function ConceptSection({
  label,
  title,
  body,
  flow,
  arrow,
}: ConceptSectionProps) {
  return (
    <section
      id="concept"
      className="relative flex min-h-screen scroll-mt-20 flex-col justify-center bg-fog py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Copy */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
        >
          <SectionLabel tone="dark">{label}</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            {title}
          </motion.h2>
          {body.map((p) => (
            <motion.p
              key={p.slice(0, 24)}
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-8 text-ink-muted"
            >
              {p}
            </motion.p>
          ))}
        </motion.div>

        {/* Transformation diagram */}
        <motion.ol
          variants={stagger(0.14, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="relative flex flex-col gap-4"
        >
          {/* connecting spine */}
          <span
            className="absolute bottom-6 top-6 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent ltr:left-[27px] rtl:right-[27px]"
            aria-hidden="true"
          />
          {flow.map((item, i) => (
            <motion.li
              key={item.label}
              variants={fadeUp}
              className="group relative flex items-center gap-5 rounded-xl border border-stone/60 bg-offwhite/70 p-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-[0_18px_40px_-24px_rgba(52,54,55,0.45)]"
            >
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-fog font-display text-sm font-semibold text-gold-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">
                <span className="block font-display text-lg font-medium text-ink">
                  {item.label}
                </span>
                <span className="mt-0.5 block text-sm text-ink-muted">
                  {item.note}
                </span>
              </span>
              {i < flow.length - 1 && (
                <span className="text-xl text-gold/50" aria-hidden="true">
                  {arrow}
                </span>
              )}
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
