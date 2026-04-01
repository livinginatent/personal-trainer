import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { defaultLocale } from "@/lib/i18n";
import "./globals.css";

const displayFont = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "JULIEFIT",
  description:
    "JULIEFIT personal training platform.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={defaultLocale}
      className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
    >
      <body className="min-h-screen bg-brand-black font-body text-white">
        {children}
      </body>
    </html>
  );
}
