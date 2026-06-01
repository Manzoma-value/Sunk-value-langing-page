"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { fadeUp, inView, stagger } from "@/lib/motion";

type Step = { title: string; note: string };

type ModelSectionProps = {
  label: string;
  title: string;
  body: string;
  steps: Step[];
};

export default function ModelSection({
  label,
  title,
  body,
  steps,
}: ModelSectionProps) {
  return (
    <section
      id="model"
      className="relative flex min-h-screen scroll-mt-20 flex-col justify-center overflow-hidden bg-graphite py-24 text-stone"
    >
      {/* faint orbit dots field */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-stone) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="max-w-3xl"
        >
          <SectionLabel tone="light">{label}</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="mt-6 font-display text-3xl font-semibold tracking-tight text-offwhite sm:text-4xl"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base leading-8 text-stone/70"
          >
            {body}
          </motion.p>
        </motion.div>

        {/* Strategic operating path */}
        <motion.ol
          variants={stagger(0.13, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              variants={fadeUp}
              className={`group relative ${
                // gentle wave offset on wide screens
                i % 2 === 1 ? "lg:translate-y-8" : ""
              }`}
            >
              {/* connector line to next node */}
              {i < steps.length - 1 && (
                <span
                  className="absolute top-7 hidden h-px w-full bg-gradient-to-r from-gold/40 to-transparent lg:block ltr:left-1/2 rtl:right-1/2 rtl:bg-gradient-to-l"
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10 flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-charcoal font-display text-sm font-semibold text-gold transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-charcoal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg font-medium leading-tight text-offwhite">
                  {step.title}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-stone/60 ltr:pl-[72px] rtl:pr-[72px]">
                {step.note}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
