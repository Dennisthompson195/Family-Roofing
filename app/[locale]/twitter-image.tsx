import { createSocialImage } from "@/lib/social-image";

type ImageRouteProps = {
  params: Promise<{ locale: string }>;
};

export const runtime = "nodejs";
export const alt = "Family Roofing social share image";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function TwitterImage({ params }: ImageRouteProps) {
  const { locale } = await params;

  return createSocialImage(locale);
}
