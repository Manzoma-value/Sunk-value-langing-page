"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

type SolarSystemProps = {
  /** Sun label — the brand. */
  brand: string;
  /** Orbiting sector / model labels. */
  labels: string[];
};

/**
 * Orbital hero: "Sunk Value" is the sun; the company's models and sectors
 * orbit around it like planets. Built with pure CSS rotation so it stays
 * responsive (every dimension is a % of the square stage).
 *
 * Technique: each orbit track is a centred, sized box that rotates. The planet
 * is pinned to the top of the track and counter-rotates at the same speed so
 * its label always stays upright.
 */

// radius = track diameter as % of the stage; size = planet diameter as % of stage
const ORBITS = [
  { radius: 40, size: 13, duration: 48, delay: 0 },
  { radius: 40, size: 11, duration: 48, delay: 24 },
  { radius: 62, size: 12, duration: 72, delay: 0 },
  { radius: 62, size: 11, duration: 72, delay: 24 },
  { radius: 62, size: 11, duration: 72, delay: 48 },
  { radius: 84, size: 12, duration: 96, delay: 0 },
  { radius: 84, size: 11, duration: 96, delay: 38 },
  { radius: 106, size: 11, duration: 124, delay: 0 },
  { radius: 106, size: 12, duration: 124, delay: 62 },
];

const RING_RADII = [40, 62, 84, 106];

export default function SolarSystem({ brand, labels }: SolarSystemProps) {
  const planets = labels.slice(0, ORBITS.length).map((label, i) => ({
    label,
    ...ORBITS[i],
  }));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.3, ease, delay: 0.2 }}
      className="relative aspect-square w-full select-none"
    >
      {/* orbit rings */}
      {RING_RADII.map((r) => (
        <span
          key={r}
          className="absolute inset-0 m-auto rounded-full border border-stone/12"
          style={{ width: `${r}%`, height: `${r}%` }}
          aria-hidden="true"
        />
      ))}

      {/* breathing corona */}
      <span
        className="absolute inset-0 m-auto rounded-full blur-3xl"
        style={{
          width: "62%",
          height: "62%",
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-gold) 42%, transparent), transparent 68%)",
          animation: "sun-pulse 8s ease-in-out infinite",
        }}
        aria-hidden="true"
      />

      {/* faint gold halo ring */}
      <span
        className="absolute inset-0 m-auto rounded-full border border-gold/25"
        style={{ width: "36%", height: "36%" }}
        aria-hidden="true"
      />

      {/* sun */}
      <div
        className="absolute inset-0 m-auto flex items-center justify-center overflow-hidden rounded-full"
        style={{
          width: "29%",
          height: "29%",
          background:
            "radial-gradient(circle at 36% 30%, #ffffff 0%, #fbf6e7 26%, var(--color-stone) 56%, var(--color-gold) 86%, var(--color-gold-muted) 100%)",
          boxShadow:
            "0 0 90px 10px color-mix(in srgb, var(--color-gold) 50%, transparent), 0 0 36px 2px color-mix(in srgb, var(--color-gold) 65%, transparent), inset -10px -12px 34px rgba(52,54,55,0.30), inset 6px 8px 26px rgba(255,255,255,0.55)",
        }}
      >
        {/* rotating sheen */}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, color-mix(in srgb, var(--color-gold) 55%, transparent) 40deg, transparent 110deg, transparent 360deg)",
            opacity: 0.35,
            mixBlendMode: "soft-light",
            animation: "orbit-spin 26s linear infinite",
          }}
          aria-hidden="true"
        />
        {/* specular highlight */}
        <span
          className="absolute rounded-full blur-md"
          style={{
            width: "42%",
            height: "42%",
            left: "16%",
            top: "12%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.9), transparent 70%)",
          }}
          aria-hidden="true"
        />
        {/* label */}
        <span className="relative z-10 flex flex-col items-center text-center">
          <span
            className="font-display font-semibold uppercase tracking-label text-charcoal/90"
            style={{ fontSize: "clamp(0.62rem, 1.75vw, 1.05rem)", letterSpacing: "0.18em" }}
          >
            Sunk
          </span>
          <span
            className="my-1 h-px bg-gold/70"
            style={{ width: "clamp(1.2rem, 4vw, 2.6rem)" }}
            aria-hidden="true"
          />
          <span
            className="font-display font-semibold uppercase tracking-label text-charcoal/90"
            style={{ fontSize: "clamp(0.62rem, 1.75vw, 1.05rem)", letterSpacing: "0.18em" }}
          >
            Value
          </span>
        </span>
      </div>

      {/* planets */}
      {planets.map((p, i) => (
        <div
          key={`${p.label}-${i}`}
          className="absolute inset-0 m-auto rounded-full"
          style={{
            width: `${p.radius}%`,
            height: `${p.radius}%`,
            animation: `orbit-spin ${p.duration}s linear infinite`,
            animationDelay: `-${p.delay}s`,
          }}
        >
          {/* position wrapper — pins planet to the top of the track */}
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
            style={{ width: `${(p.size / p.radius) * 100}%` }}
          >
            {/* counter-rotation keeps the label upright */}
            <div
              className="aspect-square"
              style={{
                animation: `orbit-spin ${p.duration}s linear infinite reverse`,
                animationDelay: `-${p.delay}s`,
              }}
            >
              <div
                className="flex h-full w-full items-center justify-center rounded-full p-1 text-center"
                style={{
                  background:
                    "radial-gradient(circle at 36% 30%, color-mix(in srgb, var(--color-stone) 75%, #fff), var(--color-whale) 78%, var(--color-graphite) 100%)",
                  boxShadow:
                    "0 0 22px 2px color-mix(in srgb, var(--color-gold) 22%, transparent), inset -3px -4px 10px rgba(32,34,35,0.4)",
                }}
              >
                <span
                  className="font-display font-medium leading-[1.1] text-charcoal/85"
                  style={{ fontSize: "clamp(0.5rem, 1.05vw, 0.72rem)" }}
                >
                  {p.label}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
