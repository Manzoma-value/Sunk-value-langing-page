"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import WaveBackdrop from "./WaveBackdrop";
import SectionLabel from "./SectionLabel";
import { fadeUp, inView, stagger } from "@/lib/motion";

type FormCopy = {
  name: string;
  email: string;
  organization: string;
  message: string;
  submit: string;
  success: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  organizationPlaceholder: string;
  messagePlaceholder: string;
};

type CreateWaveSectionProps = {
  label: string;
  title: string;
  body: string;
  form: FormCopy;
};

export default function CreateWaveSection({
  label,
  title,
  body,
  form,
}: CreateWaveSectionProps) {
  const [submitted, setSubmitted] = useState(false);

  const fieldClass =
    "w-full rounded-lg border border-white/12 bg-white/[0.03] px-4 py-3 text-sm text-offwhite placeholder:text-stone/40 transition-colors focus:border-gold/60 focus:bg-white/[0.05] focus:outline-none";
  const labelClass =
    "mb-2 block text-xs font-medium tracking-label uppercase text-stone/55";

  return (
    <section
      id="create-wave"
      className="relative flex min-h-screen scroll-mt-20 flex-col justify-center overflow-hidden bg-charcoal py-24 text-stone"
    >
      <WaveBackdrop className="pointer-events-none absolute inset-0 h-full w-full text-stone/[0.06]" />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[30rem] w-[50rem] -translate-x-1/2 translate-y-1/3 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-gold) 12%, transparent), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Invitation */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
        >
          <SectionLabel tone="light">{label}</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-offwhite sm:text-5xl"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md text-base leading-8 text-stone/70"
          >
            {body}
          </motion.p>

          {/* animated wave line */}
          <motion.div variants={fadeUp} className="mt-10 h-12 overflow-hidden">
            <svg
              viewBox="0 0 1440 80"
              className="wave-drift h-full w-[200%]"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 40 Q 120 8 240 40 T 480 40 T 720 40 T 960 40 T 1200 40 T 1440 40 T 1680 40 T 1920 40 T 2160 40 T 2400 40 T 2640 40 T 2880 40"
                stroke="var(--color-gold)"
                strokeOpacity="0.5"
                strokeWidth="1.2"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-sm sm:p-9"
        >
          {submitted ? (
            <div className="flex min-h-[20rem] flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/50">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-gold)"
                  strokeWidth="1.5"
                  className="h-6 w-6"
                >
                  <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="mt-6 max-w-xs text-base leading-7 text-stone/80">
                {form.success}
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="cw-name" className={labelClass}>
                    {form.name}
                  </label>
                  <input
                    id="cw-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder={form.namePlaceholder}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="cw-email" className={labelClass}>
                    {form.email}
                  </label>
                  <input
                    id="cw-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={form.emailPlaceholder}
                    className={fieldClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="cw-org" className={labelClass}>
                  {form.organization}
                </label>
                <input
                  id="cw-org"
                  name="organization"
                  type="text"
                  autoComplete="organization"
                  placeholder={form.organizationPlaceholder}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="cw-message" className={labelClass}>
                  {form.message}
                </label>
                <textarea
                  id="cw-message"
                  name="message"
                  rows={4}
                  placeholder={form.messagePlaceholder}
                  className={`${fieldClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-charcoal transition-all hover:bg-gold-muted hover:shadow-[0_8px_30px_-8px_rgba(196,172,106,0.5)]"
              >
                {form.submit}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
