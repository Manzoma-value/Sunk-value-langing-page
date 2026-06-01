"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { fadeUp, inView, stagger } from "@/lib/motion";

type Card = { title: string; body: string };

type ProductsSectionProps = {
  label: string;
  title: string;
  body: string;
  cards: Card[];
};

/** Six minimal abstract line marks — one per product. */
const icons = [
  // Venture Models — nested structure
  <>
    <rect x="5" y="5" width="14" height="14" rx="2" />
    <rect x="9" y="9" width="14" height="14" rx="2" />
  </>,
  // Innovation Labs — flask / probe
  <>
    <path d="M11 4v6l-5 9a2 2 0 0 0 1.8 3h8.4a2 2 0 0 0 1.8-3l-5-9V4" />
    <path d="M9 4h6" />
  </>,
  // Incubation Hubs — connected nodes
  <>
    <circle cx="14" cy="6" r="2.2" />
    <circle cx="6" cy="18" r="2.2" />
    <circle cx="22" cy="18" r="2.2" />
    <path d="M13 8 7 16M15 8l6 8M8 18h12" />
  </>,
  // Market Entry — arrow through gate
  <>
    <path d="M5 14h14M14 9l5 5-5 5" />
    <path d="M5 6v16" />
  </>,
  // Strategic Partnerships — interlocking arcs
  <>
    <path d="M14 7a7 7 0 1 0 0 14" />
    <path d="M14 7a7 7 0 1 1 0 14" />
  </>,
  // Growth Platforms — rising bars / wave
  <>
    <path d="M4 20h20" />
    <path d="M7 20v-5M13 20V9M19 20v-8" />
    <path d="M5 12c4-5 8-5 14-9" />
  </>,
];

export default function ProductsSection({
  label,
  title,
  body,
  cards,
}: ProductsSectionProps) {
  return (
    <section
      id="products"
      className="flex min-h-screen scroll-mt-20 flex-col justify-center bg-offwhite py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="max-w-3xl"
        >
          <SectionLabel tone="dark">{label}</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base leading-8 text-ink-muted"
          >
            {body}
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger(0.1, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-stone/60 bg-white/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_28px_60px_-32px_rgba(52,54,55,0.4)]"
            >
              {/* gold top line */}
              <span
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold to-transparent transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden="true"
              />
              <svg
                viewBox="0 0 28 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-9 w-9 text-gold-muted transition-colors group-hover:text-gold"
                aria-hidden="true"
              >
                {icons[i % icons.length]}
              </svg>
              <h3 className="mt-6 font-display text-xl font-medium text-ink">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                {card.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
