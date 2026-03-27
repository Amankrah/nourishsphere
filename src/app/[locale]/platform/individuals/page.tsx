import { setRequestLocale, getTranslations } from "next-intl/server";
import { UtensilsCrossed, Database, Leaf, ShieldCheck } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import StatCard from "@/components/shared/StatCard";
import Button from "@/components/shared/Button";

export default async function IndividualsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("platform");

  const features = [
    { icon: <UtensilsCrossed className="h-6 w-6" />, title: t("individuals_feature1_title"), description: t("individuals_feature1_description") },
    { icon: <Database className="h-6 w-6" />, title: t("individuals_feature2_title"), description: t("individuals_feature2_description") },
    { icon: <Leaf className="h-6 w-6" />, title: t("individuals_feature3_title"), description: t("individuals_feature3_description") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-ink via-[#16213e] to-deep-forest px-6 py-24 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-harvest-gold/80">{t("individuals_hero_label")}</p>
        <h1 className="mx-auto max-w-3xl font-serif text-white">{t("individuals_hero_heading")}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">{t("individuals_hero_description")}</p>
      </section>

      {/* Product features */}
      <Section>
        <SectionHeader label={t("individuals_tools_label")} heading={t("individuals_tools_heading")} align="center" />
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((item) => (
            <div key={item.title} className="rounded-2xl border border-soft-gray bg-white p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-parchment text-living-green">
                {item.icon}
              </div>
              <h3 className="mb-3 font-serif text-xl text-deep-ink">{item.title}</h3>
              <p className="text-sm leading-relaxed text-mid-gray">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Factual scope */}
      <Section className="bg-parchment/50">
        <SectionHeader label={t("individuals_stats_label")} heading={t("individuals_stats_heading")} description={t("individuals_stats_description")} align="center" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard value={t("impact_dietary")} label={t("impact_dietary_label")} description={t("impact_dietary_desc")} />
          <StatCard value={t("impact_ghg")} label={t("impact_ghg_label")} description={t("impact_ghg_desc")} />
          <StatCard value={t("impact_waste")} label={t("impact_waste_label")} description={t("impact_waste_desc")} />
          <StatCard value={t("impact_productivity")} label={t("impact_productivity_label")} description={t("impact_productivity_desc")} />
        </div>
        <div className="mx-auto mt-12 max-w-2xl text-center">
          <h3 className="font-serif text-xl text-deep-ink">{t("individuals_meal_section_heading")}</h3>
          <p className="mt-3 text-sm leading-relaxed text-mid-gray">{t("individuals_meal_section_description")}</p>
        </div>
      </Section>

      {/* Privacy */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <ShieldCheck className="mx-auto mb-6 h-10 w-10 text-harvest-gold" />
          <SectionHeader label={t("individuals_privacy_label")} heading={t("individuals_privacy_heading")} description={t("individuals_privacy_description")} align="center" dark />
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-deep-ink">{t("individuals_cta_heading")}</h2>
          <p className="mt-4 text-mid-gray">{t("individuals_cta_description")}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://ecodish365.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-living-green px-8 py-4 text-base font-medium text-white transition-all duration-200 hover:bg-living-green/90"
            >
              {t("individuals_cta_live")}
            </a>
            <Button href="/contact" variant="secondary" size="lg">{t("individuals_cta_contact")}</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
