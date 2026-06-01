"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { fadeUp, inView, stagger } from "@/lib/motion";

type Card = { index: string; title: string; body: string };

type CapabilitiesSectionProps = {
  label: string;
  title: string;
  intro: string;
  cards: Card[];
};

export default function CapabilitiesSection({
  label,
  title,
  intro,
  cards,
}: CapabilitiesSectionProps) {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-charcoal py-24 text-stone">
      {/* drifting wave line at top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 overflow-hidden opacity-40">
        <svg
          viewBox="0 0 1440 120"
          className="wave-drift h-full w-[200%]"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60 Q 180 20 360 60 T 720 60 T 1080 60 T 1440 60 T 1800 60 T 2160 60 T 2520 60 T 2880 60"
            stroke="var(--color-gold)"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
        </svg>
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
            {intro}
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger(0.16, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-3"
        >
          {cards.map((card) => (
            <motion.article
              key={card.title}
              variants={fadeUp}
              className="group relative bg-charcoal p-8 transition-colors hover:bg-graphite lg:p-10"
            >
              {/* vertical gold indicator */}
              <span
                className="absolute top-8 h-12 w-0.5 origin-top scale-y-0 bg-gold transition-transform duration-500 group-hover:scale-y-100 ltr:left-0 rtl:right-0"
                aria-hidden="true"
              />
              <span className="font-display text-sm font-semibold tracking-label text-gold">
                {card.index}
              </span>
              <h3 className="mt-5 font-display text-2xl font-medium text-offwhite">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone/65">
                {card.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
