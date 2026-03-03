"use client";

import { useTranslations } from "next-intl";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import StatCard from "@/components/shared/StatCard";

export default function KeyStats() {
  const t = useTranslations("problem");
  const pt = useTranslations("problemPreview");

  const stats = [
    {
      value: pt("stat1_value"),
      label: pt("stat1_label"),
      description: pt("stat1_description"),
    },
    {
      value: pt("stat2_value"),
      label: pt("stat2_label"),
      description: pt("stat2_description"),
    },
    {
      value: pt("stat3_value"),
      label: pt("stat3_label"),
      description: pt("stat3_description"),
    },
    {
      value: "2B+",
      label: "People Affected",
      description:
        "People worldwide affected by malnutrition in its various forms",
    },
  ];

  return (
    <Section>
      <SectionHeader
        label={t("stats_label")}
        heading={t("stats_heading")}
        align="center"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </Section>
  );
}
