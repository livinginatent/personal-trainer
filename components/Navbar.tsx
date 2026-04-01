"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, siteContent } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        <Link href="#home" className="font-display text-2xl tracking-wider">
          {siteContent.brand.name}
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-body text-sm uppercase tracking-wide transition-colors hover:text-brand-red"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={siteContent.navbar.contactHref}
          className="hidden rounded-full border border-white px-5 py-2 font-body text-xs font-semibold uppercase tracking-wider md:inline-flex"
          aria-label={siteContent.navbar.contactLabel}
        >
          {siteContent.navbar.contactLabel}
        </Link>

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
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-body text-sm uppercase tracking-wide text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={siteContent.navbar.contactHref}
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex rounded-full border border-white px-5 py-2 font-body text-xs font-semibold uppercase tracking-wider text-white"
              >
                {siteContent.navbar.contactLabel}
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
