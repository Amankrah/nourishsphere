"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Button from "@/components/shared/Button";

export default function Synthesis() {
  const t = useTranslations("problem");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-deep-forest to-deep-ink px-6 py-20 md:py-28">
      <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-harvest-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl text-white md:text-4xl"
        >
          {t("synthesis_heading")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/60"
        >
          {t("synthesis_description")}
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="quote-text mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 text-base leading-relaxed text-harvest-gold/90"
        >
          &ldquo;{t("synthesis_insight")}&rdquo;
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10"
        >
          <Button href="/platform#methodology" size="lg">
            {t("synthesis_cta")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
