"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Globe2, HeartHandshake } from "lucide-react";
import Section from "@/components/shared/Section";

export default function FundersSection() {
  const t = useTranslations("donors");

  const bullets = [t("bullet1"), t("bullet2"), t("bullet3")];

  return (
    <Section id="fund" className="scroll-mt-28 border-y border-soft-gray bg-parchment/40">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-living-green">
          {t("label")}
        </p>
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-deep-forest/5 text-deep-forest">
          <HeartHandshake className="h-7 w-7" />
        </div>
        <h2 className="font-serif text-3xl text-deep-ink md:text-4xl">{t("heading")}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-mid-gray">
          {t("description")}
        </p>
        <ul className="mx-auto mt-8 max-w-2xl space-y-4 text-left">
          {bullets.map((line) => (
            <li key={line} className="flex gap-3 text-sm leading-relaxed text-deep-ink/90">
              <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-living-green" aria-hidden />
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-deep-forest px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-deep-forest/90"
         >
            {t("cta")}
          </Link>
          <Link
            href="/about/mission"
            className="inline-flex items-center justify-center rounded-full border border-deep-forest/25 bg-white px-8 py-3.5 text-sm font-medium text-deep-forest transition-colors hover:bg-white/80"
         >
            {t("secondary")}
          </Link>
        </div>
        <p className="mt-5 print:hidden">
          <Link
            href="/support"
            className="text-sm font-medium text-living-green underline decoration-living-green/35 underline-offset-4 hover:text-deep-forest"
          >
            {t("onepager")}
          </Link>
        </p>
      </div>
    </Section>
  );
}
