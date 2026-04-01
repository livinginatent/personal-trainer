import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
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
  title: "JULIEFIT | Steve Smith Personal Trainer",
  description:
    "JULIEFIT by Steve Smith. Personal training programs, client results, and coaching plans built for real progress.",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
    >
      <body className="min-h-screen bg-brand-black font-body text-white">
        {children}
      </body>
    </html>
  );
}
