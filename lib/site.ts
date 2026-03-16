const fallbackSiteUrl = "https://www.familyrestorationne.com";

export const siteConfig = {
  name: "Family Roofing",
  get url() {
    const envUrl =
      process.env.NEXT_PUBLIC_SITE_URL ??
      process.env.VERCEL_PROJECT_PRODUCTION_URL ??
      process.env.VERCEL_URL;

    if (!envUrl) {
      return fallbackSiteUrl;
    }

    return envUrl.startsWith("http") ? envUrl : `https://${envUrl}`;
  },
};
