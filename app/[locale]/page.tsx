import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RoofingHome } from "@/components/roofing-home";
import { isLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
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
  const canonicalUrl = new URL(`/${locale}`, siteConfig.url).toString();
  const ogImageUrl = new URL(`/${locale}/opengraph-image`, siteConfig.url).toString();
  const twitterImageUrl = new URL(
    `/${locale}/twitter-image`,
    siteConfig.url,
  ).toString();

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "/en",
        es: "/es",
        "x-default": "/en",
      },
    },
    openGraph: {
      siteName: siteConfig.name,
      title: content.metadata.title,
      description: content.metadata.description,
      locale: locale === "en" ? "en_US" : "es_US",
      type: "website",
      url: canonicalUrl,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: content.metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.metadata.title,
      description: content.metadata.description,
      images: [twitterImageUrl],
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
