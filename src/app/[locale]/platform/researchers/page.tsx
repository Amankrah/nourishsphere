import { setRequestLocale, getTranslations } from "next-intl/server";
import { Database, Leaf, ShieldCheck, Code2 } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/shared/Button";

export default async function ResearchersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("platform");

  const features = [
    { icon: <Database className="h-5 w-5" />, title: t("researchers_feature1_title"), description: t("researchers_feature1_description") },
    { icon: <Leaf className="h-5 w-5" />, title: t("researchers_feature2_title"), description: t("researchers_feature2_description") },
    { icon: <ShieldCheck className="h-5 w-5" />, title: t("researchers_feature3_title"), description: t("researchers_feature3_description") },
    { icon: <Code2 className="h-5 w-5" />, title: t("researchers_feature4_title"), description: t("researchers_feature4_description") },
  ];

  const integrations = [
    "Canadian Nutrient File (CNF)",
    "ReCiPe 2016 midpoint",
    "18 impact categories (per 100 kcal)",
    "CAD monetization (optional)",
    "Health Star Rating (HSR)",
    "Food Compass 2.0 (FCS)",
    "HEFI-2019 (10 components)",
    "HENI (DALY-based)",
    "Next.js frontend (repo)",
    "Python / Django backend (repo)",
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-ink via-[#16213e] to-deep-forest px-6 py-24 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-harvest-gold/80">{t("researchers_hero_label")}</p>
        <h1 className="mx-auto max-w-3xl font-serif text-white">{t("researchers_hero_heading")}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">{t("researchers_hero_description")}</p>
      </section>

      {/* Pipeline Overview */}
      <Section>
        <SectionHeader label={t("researchers_pipeline_label")} heading={t("researchers_pipeline_heading")} description={t("researchers_pipeline_description")} align="center" />
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-soft-gray bg-white p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-parchment text-living-green">
                {feature.icon}
              </div>
              <h3 className="mb-3 font-serif text-xl text-deep-ink">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-mid-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Data at a Glance */}
      <Section className="bg-parchment/50">
        <SectionHeader label={t("researchers_data_label")} heading={t("researchers_data_heading")} description={t("researchers_data_description")} align="center" />
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: t("impact_dietary"), label: t("impact_dietary_label") },
            { value: t("impact_ghg"), label: t("impact_ghg_label") },
            { value: t("impact_waste"), label: t("impact_waste_label") },
            { value: t("impact_productivity"), label: t("impact_productivity_label") },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl text-deep-forest">{stat.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-mid-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Integrations */}
      <Section>
        <SectionHeader label={t("researchers_chips_label")} heading={t("researchers_integrations_heading")} description={t("researchers_integrations_description")} align="center" />
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
          {integrations.map((name) => (
            <span key={name} className="rounded-full border border-soft-gray bg-white px-4 py-2 text-sm font-medium text-deep-forest">
              {name}
            </span>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-white">{t("researchers_cta_heading")}</h2>
          <p className="mt-4 text-white/60">{t("researchers_cta_description")}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://github.com/Amankrah/ecodish365"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-living-green px-8 py-4 text-base font-medium text-white transition-all duration-200 hover:bg-living-green/90"
            >
              {t("researchers_cta_github")}
            </a>
            <Button href="/contact" variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white/5">
              {t("cta_button_contact")}
            </Button>
            <Button href="/platform#methodology" variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white/5">
              {t("cta_button_methodology")}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
