import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocaleContent } from "@/lib/data";
import { isLocale } from "@/lib/i18n";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export function generateMetadata({ params }: LocaleLayoutProps): Metadata {
  const { locale } = params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = getLocaleContent(locale);

  return {
    title: content.siteContent.metadata.title,
    description: content.siteContent.metadata.description,
  };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  return children;
}
