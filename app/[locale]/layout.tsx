import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { DocumentLanguage } from "@/components/document-language";
import { isLocale, locales } from "@/lib/i18n";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <DocumentLanguage lang={locale} />
      {children}
    </>
  );
}
