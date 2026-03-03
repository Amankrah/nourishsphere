"use client";

import { useTranslations } from "next-intl";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import StatCard from "@/components/shared/StatCard";
import Button from "@/components/shared/Button";

export default function ProblemPreview() {
  const t = useTranslations("problemPreview");

  const stats = [
    {
      value: t("stat1_value"),
      label: t("stat1_label"),
      description: t("stat1_description"),
    },
    {
      value: t("stat2_value"),
      label: t("stat2_label"),
      description: t("stat2_description"),
    },
    {
      value: t("stat3_value"),
      label: t("stat3_label"),
      description: t("stat3_description"),
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

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button href="/problem">{t("cta")}</Button>
      </div>
    </Section>
  );
}
