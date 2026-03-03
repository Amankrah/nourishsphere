"use client";

import { useTranslations } from "next-intl";
import { BookOpen, GraduationCap, Globe, Apple } from "lucide-react";
import Section from "@/components/shared/Section";

export default function CredibilityStrip() {
  const t = useTranslations("credibility");

  const metrics = [
    { icon: <BookOpen className="h-5 w-5" />, value: "10+", label: t("publications") },
    { icon: <GraduationCap className="h-5 w-5" />, value: "5+", label: t("universities") },
    { icon: <Globe className="h-5 w-5" />, value: "2", label: t("countries") },
    { icon: <Apple className="h-5 w-5" />, value: "5,000+", label: t("foods_analyzed") },
  ];

  return (
    <Section className="bg-parchment/50">
      <p className="section-label mb-8 text-center">{t("label")}</p>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col items-center gap-2 text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-deep-forest/5 text-living-green">
              {metric.icon}
            </div>
            <span className="font-serif text-2xl text-deep-forest">{metric.value}</span>
            <span className="text-xs font-medium uppercase tracking-wider text-mid-gray">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
