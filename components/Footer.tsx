import WaveMark from "./WaveMark";

type FooterProps = {
  brand: string;
  tagline: string;
  navLabel: string;
  rights: string;
  links: {  href: string; label: string }[];
};

export default function Footer({
  brand,
  
  tagline,
  navLabel,
  rights,
  links,
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal text-stone">
      <div className="rule-gold h-px w-full opacity-60" />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <WaveMark size={30} className="text-stone" />
              <span className="font-display text-lg font-semibold text-offwhite">
                {brand}
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-stone/60">{tagline}</p>
          </div>

          {/* Nav */}
          <div className="md:justify-self-end">
            <h2 className="tracking-label text-xs font-medium uppercase text-stone/50">
              {navLabel}
            </h2>
            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-stone/75 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/8 pt-8 text-xs text-stone/45 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {brand}. {rights}
          </span>
          <span className="tracking-label uppercase">
            Strategic Wave Architecture
          </span>
        </div>
      </div>
    </footer>
  );
}
