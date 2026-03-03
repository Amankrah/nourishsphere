"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

interface GapBarProps {
  label: string;
  examples: string;
  nutrition: boolean;
  environment: boolean;
  health: boolean;
  percentage: number;
  highlight?: boolean;
  delay: number;
}

function GapBar({
  label,
  examples,
  nutrition,
  environment,
  health,
  percentage,
  highlight,
  delay,
}: GapBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <div
      ref={ref}
      className={`rounded-xl border p-5 transition-all ${
        highlight
          ? "border-living-green/30 bg-living-green/5"
          : "border-soft-gray bg-white"
      }`}
    >
      <div className="mb-3 flex items-start justify-between">
        <div>
          <p
            className={`text-sm font-semibold ${
              highlight ? "text-living-green" : "text-deep-ink"
            }`}
          >
            {label}
          </p>
          <p className="text-xs text-mid-gray">{examples}</p>
        </div>
        <span
          className={`text-sm font-bold ${
            highlight ? "text-living-green" : "text-mid-gray"
          }`}
        >
          {percentage}%
        </span>
      </div>

      {/* Coverage indicators */}
      <div className="mb-3 flex gap-2">
        <span
          className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${
            nutrition
              ? "bg-living-green/10 text-living-green"
              : "bg-soft-gray text-mid-gray/50"
          }`}
        >
          Nutrition
        </span>
        <span
          className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${
            environment
              ? "bg-living-green/10 text-living-green"
              : "bg-soft-gray text-mid-gray/50"
          }`}
        >
          Environment
        </span>
        <span
          className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${
            health
              ? "bg-living-green/10 text-living-green"
              : "bg-soft-gray text-mid-gray/50"
          }`}
        >
          Health
        </span>
      </div>

      {/* Bar */}
      <div className="h-2.5 overflow-hidden rounded-full bg-soft-gray">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full rounded-full ${
            highlight
              ? "bg-gradient-to-r from-living-green to-deep-forest"
              : "bg-mid-gray/30"
          }`}
        />
      </div>
    </div>
  );
}

export default function GapAnalysis() {
  const t = useTranslations("gap");

  const gaps = [
    {
      label: t("calorie_trackers"),
      examples: t("calorie_trackers_examples"),
      nutrition: true,
      environment: false,
      health: false,
      percentage: 25,
    },
    {
      label: t("carbon_apps"),
      examples: t("carbon_apps_examples"),
      nutrition: false,
      environment: true,
      health: false,
      percentage: 20,
    },
    {
      label: t("clinical_tools"),
      examples: t("clinical_tools_examples"),
      nutrition: true,
      environment: false,
      health: true,
      percentage: 30,
    },
    {
      label: t("academic_lca"),
      examples: t("academic_lca_examples"),
      nutrition: false,
      environment: true,
      health: false,
      percentage: 20,
    },
    {
      label: t("guidelines"),
      examples: t("guidelines_examples"),
      nutrition: true,
      environment: false,
      health: false,
      percentage: 15,
    },
    {
      label: t("nourishphere"),
      examples: t("nourishphere_examples"),
      nutrition: true,
      environment: true,
      health: true,
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

      <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
        {gaps.map((gap, i) => (
          <GapBar key={gap.label} {...gap} delay={i * 0.08} />
        ))}
      </div>
    </Section>
  );
}
