"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Users, FlaskConical, Landmark, AlertTriangle, Shuffle, RotateCcw, Database, Scale, FileWarning, Globe } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import PainPointCard from "./PainPointCard";

const tabs = ["tab_individuals", "tab_researchers", "tab_policymakers"] as const;

export default function PainPoints() {
  const t = useTranslations("problem");
  const [activeTab, setActiveTab] = useState(0);

  const tabIcons = [
    <Users key="individuals" className="h-4 w-4" />,
    <FlaskConical key="researchers" className="h-4 w-4" />,
    <Landmark key="policymakers" className="h-4 w-4" />,
  ];

  const painPointsByTab = [
    // Individuals
    [
      {
        icon: <AlertTriangle className="h-5 w-5" />,
        title: t("individual_pain1_title"),
        description: t("individual_pain1_description"),
      },
      {
        icon: <Shuffle className="h-5 w-5" />,
        title: t("individual_pain2_title"),
        description: t("individual_pain2_description"),
      },
      {
        icon: <RotateCcw className="h-5 w-5" />,
        title: t("individual_pain3_title"),
        description: t("individual_pain3_description"),
      },
    ],
    // Researchers
    [
      {
        icon: <Database className="h-5 w-5" />,
        title: t("researcher_pain1_title"),
        description: t("researcher_pain1_description"),
      },
      {
        icon: <Scale className="h-5 w-5" />,
        title: t("researcher_pain2_title"),
        description: t("researcher_pain2_description"),
      },
    ],
    // Policymakers
    [
      {
        icon: <FileWarning className="h-5 w-5" />,
        title: t("policymaker_pain1_title"),
        description: t("policymaker_pain1_description"),
      },
      {
        icon: <Globe className="h-5 w-5" />,
        title: t("policymaker_pain2_title"),
        description: t("policymaker_pain2_description"),
      },
    ],
  ];

  return (
    <Section className="bg-parchment/50">
      <SectionHeader
        label={t("painpoints_label")}
        heading={t("painpoints_heading")}
        align="center"
      />

      {/* Tabs */}
      <div className="mb-10 flex justify-center gap-2">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
              activeTab === i
                ? "bg-deep-forest text-white"
                : "border border-soft-gray bg-white text-mid-gray hover:border-living-green/30"
            }`}
          >
            {tabIcons[i]}
            {t(tab)}
          </button>
        ))}
      </div>

      {/* Pain Point Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {painPointsByTab[activeTab].map((point) => (
          <PainPointCard key={point.title} {...point} />
        ))}
      </div>
    </Section>
  );
}
