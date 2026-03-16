import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { detectLocale } from "@/lib/i18n";

export default async function Home() {
  const requestHeaders = await headers();
  const locale = detectLocale(requestHeaders.get("accept-language"));

  redirect(`/${locale}`);
}
