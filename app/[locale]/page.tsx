import { notFound } from "next/navigation";
import { AboutSection } from "@/components/AboutSection";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { getLocaleContent } from "@/lib/data";
import { isLocale } from "@/lib/i18n";

interface LocalePageProps {
  params: {
    locale: string;
  };
}

export default function LocalePage({ params }: LocalePageProps) {
  const { locale } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getLocaleContent(locale);

  return (
    <>
      <Navbar content={content} locale={locale} />
      <main>
        <HeroSection content={content} />
        <AboutSection content={content} />
        <PricingSection content={content} />
        <TestimonialsSection content={content} />
        <FaqSection content={content} />
        <CtaBanner content={content} />
      </main>
      <Footer content={content} locale={locale} />
    </>
  );
}
