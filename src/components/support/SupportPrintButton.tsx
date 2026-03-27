"use client";

import { useTranslations } from "next-intl";
import { Printer } from "lucide-react";

export default function SupportPrintButton() {
  const t = useTranslations("support");

  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print:hidden inline-flex items-center gap-2 rounded-full border border-deep-forest/25 bg-white px-5 py-2.5 text-sm font-medium text-deep-forest shadow-sm transition-colors hover:border-living-green hover:text-living-green"
    >
      <Printer className="h-4 w-4" aria-hidden />
      {t("print_button")}
    </button>
  );
}
