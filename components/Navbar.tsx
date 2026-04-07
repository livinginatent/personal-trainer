"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { LocaleContent } from "@/lib/data";
import { locales, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function resolveNavHref(locale: Locale, href: string): string {
  if (href.startsWith("http://") || href.startsWith("https://")) return href;
  if (href.startsWith("/")) return href;
  if (href.startsWith("#")) return `/${locale}${href}`;
  return `/${locale}/${href}`;
}

function pathForLocale(pathname: string | null, newLocale: Locale): string {
  if (!pathname) return `/${newLocale}`;
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return `/${newLocale}`;
  segments[0] = newLocale;
  return `/${segments.join("/")}`;
}

interface NavbarProps {
  content: LocaleContent;
  locale: Locale;
}

export function Navbar({ content, locale }: NavbarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { navLinks, siteContent } = content;

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="fixed left-1/2 top-4 z-50 w-full max-w-7xl -translate-x-1/2 px-4">
      <nav
        className={cn(
          "mx-auto flex w-full items-center justify-between rounded-full border border-brand-red px-5 py-3 text-white transition-colors",
          isScrolled ? "bg-brand-black/95 backdrop-blur-md" : "bg-brand-black"
        )}
        aria-label={`${siteContent.brand.name} ${siteContent.navbar.navAriaLabel}`}
      >
        <Link href={`/${locale}`} className="font-display text-2xl tracking-wider">
          {siteContent.brand.name}
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={`${link.label}-${link.href}`}>
              <Link
                href={resolveNavHref(locale, link.href)}
                className="font-body text-sm tracking-wide transition-colors hover:text-brand-red"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={resolveNavHref(locale, siteContent.navbar.contactHref)}
          className="hidden rounded-full border border-white px-5 py-2 font-body text-xs font-semibold uppercase tracking-wider md:inline-flex"
          aria-label={siteContent.navbar.contactLabel}
        >
          {siteContent.navbar.contactLabel}
        </Link>

        <div
          className="hidden items-center gap-2 md:flex"
          aria-label={siteContent.navbar.languageLabel}
        >
          {locales.map((language) => (
            <Link
              key={language}
              href={pathForLocale(pathname, language)}
              className={cn(
                "rounded-full border px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider",
                language === locale
                  ? "border-brand-red bg-brand-red text-black"
                  : "border-white text-white"
              )}
            >
              {language}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={
            isMenuOpen
              ? siteContent.navbar.menuCloseLabel
              : siteContent.navbar.menuOpenLabel
          }
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="mt-1 block h-0.5 w-6 bg-white" />
          <span className="mt-1 block h-0.5 w-6 bg-white" />
        </button>
      </nav>

      {isMenuOpen ? (
        <div className="mt-2 rounded-3xl border border-brand-red bg-brand-black p-4 md:hidden">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={`${link.label}-${link.href}`}>
                <Link
                  href={resolveNavHref(locale, link.href)}
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-body text-sm tracking-wide text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={resolveNavHref(locale, siteContent.navbar.contactHref)}
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex rounded-full border border-white px-5 py-2 font-body text-xs font-semibold uppercase tracking-wider text-white"
              >
                {siteContent.navbar.contactLabel}
              </Link>
            </li>
            <li className="pt-2">
              <p className="mb-2 font-body text-xs uppercase tracking-wider text-white/80">
                {siteContent.navbar.languageLabel}
              </p>
              <div className="flex gap-2">
                {locales.map((language) => (
                  <Link
                    key={language}
                    href={pathForLocale(pathname, language)}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "rounded-full border px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider",
                      language === locale
                        ? "border-brand-red bg-brand-red text-black"
                        : "border-white text-white"
                    )}
                  >
                    {language}
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
