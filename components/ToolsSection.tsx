import Link from "next/link";
import type { LocaleContent } from "@/lib/data";
import type { Locale } from "@/lib/i18n";

interface ToolsSectionProps {
  content: LocaleContent;
  locale: Locale;
}

export function ToolsSection({ content, locale }: ToolsSectionProps) {
  const { tools, symbols } = content.siteContent;
  const items = [
    { href: "bmi" as const, ...tools.bmi },
    { href: "protein" as const, ...tools.protein },
    { href: "macro" as const, ...tools.macro },
  ];

  return (
    <section
      id={tools.sectionId}
      className="border-y border-white/10 bg-brand-black px-4 py-20 text-white"
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="font-display text-5xl uppercase leading-none sm:text-6xl lg:text-7xl">
          {tools.title}
        </h2>
        <p className="mt-5 max-w-2xl font-body text-lg text-white/75">{tools.subtitle}</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}/${item.href}`}
              className="group flex min-h-[220px] flex-col rounded-3xl border border-white/15 bg-white/[0.04] p-6 transition-colors hover:border-brand-red hover:bg-white/[0.06]"
            >
              <h3 className="font-display text-2xl uppercase leading-snug text-white">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-white/65">
                {item.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-wider text-brand-red">
                {tools.openLabel}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  {symbols.arrow}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
