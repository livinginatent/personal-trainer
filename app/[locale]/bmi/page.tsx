import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BmiCalculator } from "@/components/BmiCalculator";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getLocaleContent } from "@/lib/data";
import { isLocale } from "@/lib/i18n";

interface BmiPageProps {
  params: {
    locale: string;
  };
}

export function generateMetadata({ params }: BmiPageProps): Metadata {
  const { locale } = params;
  if (!isLocale(locale)) {
    return {};
  }
  const { bmiPage } = getLocaleContent(locale);
  return {
    title: bmiPage.metadata.title,
    description: bmiPage.metadata.description,
  };
}

export default function BmiPage({ params }: BmiPageProps) {
  const { locale: localeParam } = params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  const locale = localeParam;
  const content = getLocaleContent(locale);
  const { bmiPage, siteContent } = content;

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
            {bmiPage.backHomeLabel}
          </Link>
          <header className="mt-8 max-w-3xl">
            <h1 className="font-display text-5xl uppercase leading-none text-white sm:text-6xl">
              {bmiPage.pageTitle}
            </h1>
            <p className="mt-4 font-body text-lg text-white/80">
              {bmiPage.pageSubtitle}
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-white/70">
              {bmiPage.intro}
            </p>
          </header>
          <div className="mt-12">
            <BmiCalculator copy={bmiPage} />
          </div>
          <aside className="mt-12 rounded-2xl border border-white/15 bg-white/[0.04] p-6 font-body text-sm leading-relaxed text-white/65">
            {bmiPage.disclaimer}
          </aside>
        </div>
      </main>
      <Footer content={content} locale={locale} />
    </>
  );
}
