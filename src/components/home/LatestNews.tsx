"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
}

function NewsCard({ title, excerpt, date }: NewsCardProps) {
  return (
    <div className="group rounded-2xl border border-soft-gray bg-white p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/5">
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-mid-gray">
        {date}
      </p>
      <h3 className="mb-2 font-serif text-lg text-deep-ink group-hover:text-living-green transition-colors">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-mid-gray">{excerpt}</p>
    </div>
  );
}

export default function LatestNews() {
  const t = useTranslations("latestNews");

  const news = [
    {
      title: t("placeholder1_title"),
      excerpt: t("placeholder1_excerpt"),
      date: "March 2026",
    },
    {
      title: t("placeholder2_title"),
      excerpt: t("placeholder2_excerpt"),
      date: "February 2026",
    },
    {
      title: t("placeholder3_title"),
      excerpt: t("placeholder3_excerpt"),
      date: "January 2026",
    },
  ];

  return (
    <Section>
      <SectionHeader
        label={t("label")}
        heading={t("heading")}
      />

      <div className="grid gap-6 md:grid-cols-3">
        {news.map((item) => (
          <NewsCard key={item.title} {...item} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-living-green">
          {t("viewAll")}
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Section>
  );
}
