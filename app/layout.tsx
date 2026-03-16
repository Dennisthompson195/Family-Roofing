import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Public_Sans, Rajdhani } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Family Roofing",
  description:
    "Bilingual roofing, storm response, and gutter services for Lincoln and surrounding Nebraska communities.",
  applicationName: "Family Roofing",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    languages: {
      en: "/en",
      es: "/es",
      "x-default": "/en",
    },
  },
  openGraph: {
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${publicSans.variable} ${rajdhani.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
