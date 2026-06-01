type WaveBackdropProps = {
  className?: string;
};

/**
 * Large, low-opacity abstract whale/wave watermark. Pure SVG line work —
 * suggests depth and a form surfacing from below. Used behind dark sections.
 */
export default function WaveBackdrop({ className }: WaveBackdropProps) {
  return (
    <svg
      viewBox="0 0 1200 600"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      {/* deep stacked wave lines */}
      <path
        d="M-50 430 Q 250 360 600 420 T 1250 400"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M-50 470 Q 300 400 600 460 T 1250 440"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.35"
      />
      <path
        d="M-50 510 Q 350 450 600 500 T 1250 490"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.22"
      />
      {/* whale-like body surfacing */}
      <path
        d="M250 360 C 420 250 760 250 940 350 C 860 410 760 430 600 430 C 460 430 340 415 250 360 Z"
        stroke="currentColor"
        strokeWidth="1.1"
        opacity="0.4"
      />
      {/* fin / tail line */}
      <path
        d="M940 350 C 990 320 1030 300 1075 250"
        stroke="currentColor"
        strokeWidth="1.1"
        opacity="0.4"
      />
      {/* orbiting value dots rising */}
      <circle cx="600" cy="200" r="3" fill="var(--color-gold)" opacity="0.8" />
      <circle cx="520" cy="150" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="690" cy="160" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="600" cy="110" r="1.5" fill="currentColor" opacity="0.35" />
    </svg>
  );
}
