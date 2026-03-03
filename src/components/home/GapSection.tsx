"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

interface GapBarProps {
  label: string;
  examples: string;
  percentage: number;
  highlight?: boolean;
  delay: number;
}

function GapBar({ label, examples, percentage, highlight, delay }: GapBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <div ref={ref} className="mb-6">
      <div className="mb-2 flex items-baseline justify-between">
        <div>
          <span
            className={`text-sm font-medium ${
              highlight ? "text-living-green" : "text-deep-ink"
            }`}
          >
            {label}
          </span>
          <span className="ml-2 text-xs text-mid-gray">{examples}</span>
        </div>
        <span
          className={`text-sm font-semibold ${
            highlight ? "text-living-green" : "text-mid-gray"
          }`}
        >
          {percentage}%
        </span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-soft-gray">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full rounded-full ${
            highlight
              ? "bg-gradient-to-r from-living-green to-deep-forest"
              : "bg-mid-gray/40"
          }`}
        />
      </div>
    </div>
  );
}

export default function GapSection() {
  const t = useTranslations("gap");

  const gaps = [
    { label: t("calorie_trackers"), examples: t("calorie_trackers_examples"), percentage: 25 },
    { label: t("carbon_apps"), examples: t("carbon_apps_examples"), percentage: 20 },
    { label: t("clinical_tools"), examples: t("clinical_tools_examples"), percentage: 30 },
    { label: t("academic_lca"), examples: t("academic_lca_examples"), percentage: 20 },
    { label: t("guidelines"), examples: t("guidelines_examples"), percentage: 15 },
    {
      label: t("nourishphere"),
      examples: t("nourishphere_examples"),
      percentage: 90,
      highlight: true,
    },
  ];

  return (
    <Section>
      <SectionHeader
        label={t("label")}
        heading={t("heading")}
        description={t("description")}
        align="center"
      />

      <div className="mx-auto max-w-3xl">
        {gaps.map((gap, i) => (
          <GapBar key={gap.label} {...gap} delay={i * 0.1} />
        ))}
      </div>
    </Section>
  );
}
