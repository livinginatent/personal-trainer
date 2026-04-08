import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getLocaleContent } from "@/lib/data";
import { isLocale } from "@/lib/i18n";

interface PrivacyPageProps {
  params: {
    locale: string;
  };
}

export function generateMetadata({ params }: PrivacyPageProps): Metadata {
  const { locale } = params;
  if (!isLocale(locale)) {
    return {};
  }
  const { privacyPage } = getLocaleContent(locale);
  return {
    title: privacyPage.metadata.title,
    description: privacyPage.metadata.description,
  };
}

export default function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale: localeParam } = params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  const locale = localeParam;
  const content = getLocaleContent(locale);
  const { privacyPage, siteContent } = content;

  return (
    <>
      <Navbar content={content} locale={locale} />
      <main className="min-h-screen px-4 pb-20 pt-28 md:pt-32">
        <div className="mx-auto w-full max-w-3xl">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-wider text-white/70 transition-colors hover:text-brand-red"
          >
            <span aria-hidden>{siteContent.symbols.previous}</span>
            {privacyPage.backHomeLabel}
          </Link>
          <header className="mt-8 border-b border-white/15 pb-8">
            <h1 className="font-display text-4xl uppercase leading-none text-white sm:text-5xl">
              {privacyPage.pageTitle}
            </h1>
            <p className="mt-4 font-body text-sm text-white/55">
              <span className="font-semibold text-white/75">
                {privacyPage.lastUpdatedLabel}
              </span>
              {": "}
              {privacyPage.lastUpdated}
            </p>
            <p className="mt-6 font-body text-base leading-relaxed text-white/80">
              {privacyPage.intro}
            </p>
          </header>
          <div className="mt-10 space-y-10">
            {privacyPage.sections.map((section, sectionIndex) => (
              <section
                key={section.heading}
                aria-labelledby={`privacy-section-${sectionIndex}`}
              >
                <h2
                  id={`privacy-section-${sectionIndex}`}
                  className="font-display text-xl uppercase tracking-wide text-brand-red"
                >
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 font-body text-sm leading-relaxed text-white/75 sm:text-base">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={`${sectionIndex}-${pIndex}`}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer content={content} locale={locale} />
    </>
  );
}
