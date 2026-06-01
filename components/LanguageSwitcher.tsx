"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LanguageSwitcherProps = {
  locale: string;
};

/** Swaps the leading locale segment of the current path. */
export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname() || "/en";
  const target = locale === "ar" ? "en" : "ar";
  const swapped = pathname.replace(/^\/(en|ar)/, `/${target}`);

  return (
    <Link
      href={swapped}
      hrefLang={target}
      aria-label={target === "ar" ? "التبديل إلى العربية" : "Switch to English"}
      className="group inline-flex items-center gap-1.5 text-xs font-medium tracking-label text-stone/70 transition-colors hover:text-gold"
    >
      <span className={locale === "en" ? "text-gold" : ""}>EN</span>
      <span className="text-stone/30">/</span>
      <span className={locale === "ar" ? "text-gold" : ""}>ع</span>
    </Link>
  );
}
