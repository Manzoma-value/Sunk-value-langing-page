"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { ease } from "@/lib/motion";

type Nav = {
  concept: string;
  model: string;
  products: string;
  createWave: string;
  menu: string;
  close: string;
};

type HeaderProps = {
  locale: string;
  brand: string;
  nav: Nav;
};

export default function Header({ locale, brand, nav }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#concept", label: nav.concept },
    { href: "#model", label: nav.model },
    { href: "#products", label: nav.products },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-charcoal/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Brand */}
        <a
          href="#top"
          className="flex items-center gap-2.5 text-stone transition-opacity hover:opacity-80"
        >
          <Image
            src="/logo-header-mark.png"
            alt={brand}
            width={440}
            height={358}
            priority
            className="h-9 w-auto"
          />
          <span className="font-display text-lg font-semibold tracking-tight text-offwhite">
            {brand}
          </span>
        </a>

        {/* Center nav — desktop */}
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-stone/75 transition-colors hover:text-offwhite"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-5">
          <a
            href="#create-wave"
            className="hidden rounded-full border border-gold/50 bg-gold/10 px-5 py-2 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-charcoal sm:inline-block"
          >
            {nav.createWave}
          </a>
          <LanguageSwitcher locale={locale} />

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? nav.close : nav.menu}
            className="flex h-9 w-9 items-center justify-center text-stone md:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300 ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-300 ${
                  open ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Hairline gold rule */}
      <div className="rule-gold h-px w-full opacity-70" />

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="overflow-hidden bg-charcoal/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/5 py-3 text-base text-stone/80 transition-colors hover:text-offwhite"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#create-wave"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-gold px-5 py-3 text-center text-sm font-medium text-charcoal"
              >
                {nav.createWave}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
