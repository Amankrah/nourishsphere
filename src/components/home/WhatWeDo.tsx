"use client";

import { useTranslations } from "next-intl";
import { Users, FlaskConical, Landmark } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import Card from "@/components/shared/Card";

export default function WhatWeDo() {
  const t = useTranslations("whatWeDo");

  const audiences = [
    {
      icon: <Users className="h-6 w-6" />,
      title: t("individuals_title"),
      description: t("individuals_description"),
      href: "/platform/individuals" as const,
    },
    {
      icon: <FlaskConical className="h-6 w-6" />,
      title: t("researchers_title"),
      description: t("researchers_description"),
      href: "/platform/researchers" as const,
    },
    {
      icon: <Landmark className="h-6 w-6" />,
      title: t("policymakers_title"),
      description: t("policymakers_description"),
      href: "/platform/policymakers" as const,
    },
  ];

  return (
    <Section className="bg-parchment/50">
      <SectionHeader
        label={t("label")}
        heading={t("heading")}
        description={t("description")}
        align="center"
      />

      <div className="grid gap-8 md:grid-cols-3">
        {audiences.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
            href={item.href}
          />
        ))}
      </div>
    </Section>
  );
}
