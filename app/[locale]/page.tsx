import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RoofingHome } from "@/components/roofing-home";
import { isLocale } from "@/lib/i18n";
import { siteContent } from "@/lib/site-content";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = siteContent[locale];

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: {
      languages: {
        en: "/en",
        es: "/es",
      },
    },
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      locale: locale === "en" ? "en_US" : "es_US",
      type: "website",
    },
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <RoofingHome locale={locale} content={siteContent[locale]} />;
}
