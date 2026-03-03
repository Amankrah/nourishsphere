import { setRequestLocale, getTranslations } from "next-intl/server";
import { Brain, Database, ShieldCheck, Network, Code2, FlaskConical, Heart, Leaf, Trash2, Clock, ShoppingCart, Refrigerator, Sprout } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import StatCard from "@/components/shared/StatCard";
import Button from "@/components/shared/Button";

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("platform");

  const capabilities = [
    { icon: <Brain className="h-5 w-5" />, title: t("cap1_title"), description: t("cap1_description") },
    { icon: <Database className="h-5 w-5" />, title: t("cap2_title"), description: t("cap2_description") },
    { icon: <ShieldCheck className="h-5 w-5" />, title: t("cap3_title"), description: t("cap3_description") },
    { icon: <Network className="h-5 w-5" />, title: t("cap4_title"), description: t("cap4_description") },
    { icon: <Code2 className="h-5 w-5" />, title: t("cap5_title"), description: t("cap5_description") },
    { icon: <FlaskConical className="h-5 w-5" />, title: t("cap6_title"), description: t("cap6_description") },
  ];

  const tools = [
    { icon: <ShoppingCart className="h-5 w-5" />, title: t("tool1_title"), description: t("tool1_description") },
    { icon: <Refrigerator className="h-5 w-5" />, title: t("tool2_title"), description: t("tool2_description") },
    { icon: <Sprout className="h-5 w-5" />, title: t("tool3_title"), description: t("tool3_description") },
  ];

  const deployments = [
    {
      title: t("deploy1_title"), location: t("deploy1_location"), description: t("deploy1_description"),
      metrics: [t("deploy1_metric1"), t("deploy1_metric2"), t("deploy1_metric3"), t("deploy1_metric4")],
    },
    {
      title: t("deploy2_title"), location: t("deploy2_location"), description: t("deploy2_description"),
      metrics: [t("deploy2_metric1"), t("deploy2_metric2"), t("deploy2_metric3"), t("deploy2_metric4")],
    },
    {
      title: t("deploy3_title"), location: t("deploy3_location"), description: t("deploy3_description"),
      metrics: [t("deploy3_metric1"), t("deploy3_metric2"), t("deploy3_metric3"), t("deploy3_metric4")],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-ink via-[#16213e] to-deep-forest px-6 py-24 md:py-32">
        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-living-green/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 h-56 w-56 rounded-full bg-harvest-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-harvest-gold/80">{t("hero_label")}</p>
          <h1 className="font-serif text-white">{t("hero_heading")}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/60">{t("hero_description")}</p>
        </div>
      </section>

      {/* Core Capabilities */}
      <Section>
        <SectionHeader label={t("capabilities_label")} heading={t("capabilities_heading")} align="center" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <div key={cap.title} className="rounded-2xl border border-soft-gray bg-white p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-parchment text-living-green">
                {cap.icon}
              </div>
              <h3 className="mb-2 font-serif text-lg text-deep-ink">{cap.title}</h3>
              <p className="text-sm leading-relaxed text-mid-gray">{cap.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* AI Tools */}
      <Section className="bg-parchment/50">
        <SectionHeader label={t("tools_label")} heading={t("tools_heading")} align="center" />
        <div className="grid gap-8 md:grid-cols-3">
          {tools.map((tool) => (
            <div key={tool.title} className="rounded-2xl border border-soft-gray bg-white p-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-deep-forest/5 text-deep-forest">
                {tool.icon}
              </div>
              <h3 className="mb-3 font-serif text-xl text-deep-ink">{tool.title}</h3>
              <p className="text-sm leading-relaxed text-mid-gray">{tool.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Deployments */}
      <Section>
        <SectionHeader label={t("deployment_label")} heading={t("deployment_heading")} description={t("deployment_description")} align="center" />
        <div className="grid gap-6 lg:grid-cols-3">
          {deployments.map((deploy) => (
            <div key={deploy.title} className="rounded-2xl border border-soft-gray bg-white p-7">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-living-green">{deploy.location}</p>
              <h3 className="mb-3 font-serif text-lg text-deep-ink">{deploy.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-mid-gray">{deploy.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {deploy.metrics.map((metric) => (
                  <span key={metric} className="rounded-lg bg-parchment px-3 py-1.5 text-center text-xs font-medium text-deep-forest">
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Impact Metrics */}
      <Section className="bg-parchment/50">
        <SectionHeader label={t("impact_label")} heading={t("impact_heading")} align="center" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard value={t("impact_dietary")} label={t("impact_dietary_label")} description={t("impact_dietary_desc")} />
          <StatCard value={t("impact_ghg")} label={t("impact_ghg_label")} description={t("impact_ghg_desc")} />
          <StatCard value={t("impact_waste")} label={t("impact_waste_label")} description={t("impact_waste_desc")} />
          <StatCard value={t("impact_productivity")} label={t("impact_productivity_label")} description={t("impact_productivity_desc")} />
        </div>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-forest to-deep-ink px-6 py-20">
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-harvest-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-white md:text-4xl">{t("cta_heading")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">{t("cta_description")}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" size="lg">Partner With Us</Button>
            <Button href="/about/methodology" variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white/5">
              Our Methodology
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
