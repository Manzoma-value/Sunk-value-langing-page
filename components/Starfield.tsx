/**
 * Deterministic starfield — positions are generated with a fixed seed so the
 * server and client render identically (no hydration mismatch). Pure CSS twinkle.
 */

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type StarfieldProps = {
  count?: number;
  className?: string;
};

export default function Starfield({ count = 64, className }: StarfieldProps) {
  const rand = mulberry32(20260601);
  const stars = Array.from({ length: count }, () => {
    const size = 0.6 + rand() * 1.8;
    return {
      top: rand() * 100,
      left: rand() * 100,
      size,
      duration: 4 + rand() * 6,
      delay: rand() * 6,
      min: 0.1 + rand() * 0.2,
      max: 0.5 + rand() * 0.5,
    };
  });

  return (
    <div className={className} aria-hidden="true">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-stone"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            // @ts-expect-error custom props
            "--star-min": s.min,
            "--star-max": s.max,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
