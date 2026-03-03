"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ProblemHero() {
  const t = useTranslations("problem");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-deep-ink via-[#16213e] to-deep-forest px-6 py-24 md:py-32">
      <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-living-green/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-xs uppercase tracking-[0.25em] text-harvest-gold/80"
        >
          {t("hero_label")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-white"
        >
          {t("hero_heading")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/60"
        >
          {t("hero_description")}
        </motion.p>
      </div>
    </section>
  );
}
