"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function toggleLocale() {
    const nextLocale = locale === "en" ? "fr" : "en";
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1 rounded-full border border-soft-gray px-3 py-1.5 text-xs font-medium tracking-wide transition-colors hover:bg-parchment"
      aria-label={locale === "en" ? "Switch to French" : "Switch to English"}
    >
      <span className={locale === "en" ? "font-bold text-deep-forest" : "text-mid-gray"}>
        EN
      </span>
      <span className="text-soft-gray">|</span>
      <span className={locale === "fr" ? "font-bold text-deep-forest" : "text-mid-gray"}>
        FR
      </span>
    </button>
  );
}
