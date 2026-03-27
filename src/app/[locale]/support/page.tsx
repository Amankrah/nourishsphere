import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import SupportBodyClass from "@/components/support/SupportBodyClass";
import SupportOnePager from "@/components/support/SupportOnePager";
import { generatePageMetadata } from "@/lib/metadata";
import "./support-print.css";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "support" });
  return generatePageMetadata({
    title: t("meta_title"),
    description: t("meta_description"),
    path: "/support",
    locale,
  });
}

export default async function SupportPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <SupportBodyClass>
      <SupportOnePager />
    </SupportBodyClass>
  );
}
