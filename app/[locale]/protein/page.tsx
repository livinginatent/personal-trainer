import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProteinCalculator } from "@/components/ProteinCalculator";
import { getLocaleContent } from "@/lib/data";
import { isLocale } from "@/lib/i18n";

interface ProteinPageProps {
  params: {
    locale: string;
  };
}

export function generateMetadata({ params }: ProteinPageProps): Metadata {
  const { locale } = params;
  if (!isLocale(locale)) {
    return {};
  }
  const { proteinPage } = getLocaleContent(locale);
  return {
    title: proteinPage.metadata.title,
    description: proteinPage.metadata.description,
  };
}

export default function ProteinPage({ params }: ProteinPageProps) {
  const { locale: localeParam } = params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  const locale = localeParam;
  const content = getLocaleContent(locale);
  const { proteinPage, siteContent } = content;

  return (
    <>
      <Navbar content={content} locale={locale} />
      <main className="min-h-screen px-4 pb-20 pt-28 md:pt-32">
        <div className="mx-auto w-full max-w-5xl">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-wider text-white/70 transition-colors hover:text-brand-red"
          >
            <span aria-hidden>{siteContent.symbols.previous}</span>
            {proteinPage.backHomeLabel}
          </Link>
          <header className="mt-8 max-w-3xl">
            <h1 className="font-display text-5xl uppercase leading-none text-white sm:text-6xl">
              {proteinPage.pageTitle}
            </h1>
            <p className="mt-4 font-body text-lg text-white/80">
              {proteinPage.pageSubtitle}
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-white/70">
              {proteinPage.intro}
            </p>
          </header>
          <div className="mt-12">
            <ProteinCalculator copy={proteinPage} />
          </div>
          <aside className="mt-12 rounded-2xl border border-white/15 bg-white/[0.04] p-6 font-body text-sm leading-relaxed text-white/65">
            {proteinPage.disclaimer}
          </aside>
        </div>
      </main>
      <Footer content={content} locale={locale} />
    </>
  );
}
