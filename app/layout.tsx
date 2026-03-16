import type { Metadata } from "next";
import { Public_Sans, Rajdhani } from "next/font/google";
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
  title: "Family Roofing",
  description:
    "Bilingual roofing, storm response, and gutter services for Lincoln and surrounding Nebraska communities.",
  applicationName: "Family Roofing",
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
      </body>
    </html>
  );
}
