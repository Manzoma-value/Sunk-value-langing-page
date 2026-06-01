"use client";

import { motion } from "framer-motion";
import Starfield from "./Starfield";
import SolarSystem from "./SolarSystem";
import { fadeUp, stagger } from "@/lib/motion";

type HeroProps = {
  brand: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  flow: string[];
  orbits: string[];
  arrow: string;
};

export default function Hero({
  brand,
  eyebrow,
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  flow,
  orbits,
  arrow,
}: HeroProps) {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-charcoal pt-24 pb-12 text-stone lg:pt-16"
    >
      {/* starfield */}
      <Starfield className="pointer-events-none absolute inset-0" count={70} />

      {/* solar system — dimmed full-bleed backdrop on mobile, right column on desktop */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center lg:justify-end lg:ltr:pr-[3%] lg:rtl:pl-[3%]">
        <div className="aspect-square w-[135%] max-w-none opacity-25 sm:w-[100%] lg:w-[56%] lg:opacity-100">
          <SolarSystem brand={brand} labels={orbits} />
        </div>
      </div>

      {/* legibility scrim: vignette everywhere, side-fade behind copy on desktop */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 90% at 50% 45%, transparent 30%, var(--color-charcoal) 88%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 hidden from-charcoal from-5% via-charcoal/70 via-40% to-transparent to-70% lg:block lg:bg-gradient-to-r rtl:lg:bg-gradient-to-l"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl px-6 lg:grid-cols-2 lg:px-10">
        <motion.div
          variants={stagger(0.14)}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            <span className="tracking-label text-xs font-medium uppercase text-gold">
              {eyebrow}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-offwhite sm:text-5xl lg:text-6xl"
          >
            {headline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-base leading-8 text-stone/75 sm:text-lg"
          >
            {subheadline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#create-wave"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-charcoal transition-all hover:bg-gold-muted hover:shadow-[0_8px_30px_-8px_rgba(196,172,106,0.5)]"
            >
              {ctaPrimary}
            </a>
            <a
              href="#model"
              className="group inline-flex items-center gap-2 rounded-full border border-stone/25 px-7 py-3.5 text-sm font-medium text-stone transition-colors hover:border-stone/60 hover:text-offwhite"
            >
              {ctaSecondary}
              <span className="text-gold transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
                {arrow}
              </span>
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-stone/55"
          >
            {flow.map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                <span className="font-display tracking-wide">{step}</span>
                {i < flow.length - 1 && (
                  <span className="text-gold/70">{arrow}</span>
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* right column reserved for the solar system on desktop */}
        <div className="hidden lg:block" aria-hidden="true" />
      </div>

      <div className="rule-gold absolute inset-x-0 bottom-0 h-px opacity-50" />
    </section>
  );
}
