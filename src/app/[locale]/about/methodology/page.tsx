import { setRequestLocale } from "next-intl/server";
import { redirect } from "@/i18n/navigation";

/**
 * Scoring systems, LCA, and data sources are documented on the EcoDish365 platform page.
 * Nav and CTAs use `/platform#methodology`; this route keeps old bookmarks working.
 */
export default async function MethodologyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  redirect({ href: "/platform", locale });
}
