"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Button from "@/components/shared/Button";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-deep-ink via-[#16213e] to-deep-forest">
      {/* Decorative gradient overlays */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-living-green/15 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-harvest-gold/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-32 text-center md:py-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-xs uppercase tracking-[0.25em] text-white/50"
        >
          {t("label")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl font-serif text-white"
        >
          {t("heading")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="/problem" variant="primary" size="lg">
            {t("cta_problem")}
          </Button>
          <Button
            href="/about/methodology"
            variant="secondary"
            size="lg"
            className="border-white/30 text-white hover:bg-white/5"
          >
            {t("cta_platform")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
