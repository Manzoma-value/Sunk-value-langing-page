import type { CSSProperties } from "react";

type WaveMarkProps = {
  className?: string;
  /** Pixel size of the square mark. */
  size?: number;
  style?: CSSProperties;
};

/**
 * The Sunk Value logo mark — an oval ring (the surface) with small
 * floating dots rising above it: depth, a wave, and value emerging.
 */
export default function WaveMark({ className, size = 32, style }: WaveMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {/* surface ring */}
      <ellipse
        cx="20"
        cy="27"
        rx="13.5"
        ry="5"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.9"
      />
      {/* depth ring */}
      <ellipse
        cx="20"
        cy="27"
        rx="8"
        ry="2.6"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
      {/* value rising */}
      <circle cx="20" cy="17" r="2.1" fill="var(--color-gold)" />
      <circle cx="14.5" cy="11.5" r="1.4" fill="currentColor" opacity="0.85" />
      <circle cx="25.5" cy="11.5" r="1.4" fill="currentColor" opacity="0.85" />
      <circle cx="20" cy="6.5" r="1" fill="currentColor" opacity="0.6" />
    </svg>
  );
}
