import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import { defaultLocale, isLocale } from "@/lib/i18n";
import "./globals.css";

const displayFont = Oswald({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
});

const bodyFont = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "ASHURXFIT.AZ",
  description:
    "ASHURXFIT.AZ personal training platform.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params?: {
    locale?: string;
  };
}>) {
  const htmlLang = params?.locale && isLocale(params.locale) ? params.locale : defaultLocale;

  return (
    <html
      lang={htmlLang}
      className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
    >
      <body className="min-h-screen bg-brand-black font-body text-white">
        {children}
      </body>
    </html>
  );
}
