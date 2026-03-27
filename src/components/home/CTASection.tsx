"use client";

import { useTranslations } from "next-intl";
import Button from "@/components/shared/Button";

export default function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-deep-forest to-deep-ink px-6 py-20 md:py-28">
      {/* Decorative overlay */}
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-harvest-gold/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-living-green/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-3xl text-white md:text-4xl">
          {t("heading")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
          {t("description")}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact" variant="primary" size="lg">
            {t("partner")}
          </Button>
          <Button
            href="/platform"
            variant="secondary"
            size="lg"
            className="border-white/30 text-white hover:bg-white/5"
          >
            {t("explore")}
          </Button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder={t("newsletter_placeholder")}
              className="flex-1 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-harvest-gold/50 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-harvest-gold px-6 py-3 text-sm font-medium text-deep-ink transition-colors hover:bg-harvest-gold/90"
            >
              {t("newsletter_button")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
