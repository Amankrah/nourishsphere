import { setRequestLocale } from "next-intl/server";
import { redirect } from "@/i18n/navigation";

/**
 * Alias for the funder one-pager. Bookmarks and decks can use /fund or /support.
 */
export default async function FundPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  redirect({ href: "/support", locale });
}
