import { setRequestLocale, getTranslations } from "next-intl/server";
import { FileText, BarChart3, ShieldCheck, Globe, MapPin } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import StatCard from "@/components/shared/StatCard";
import Button from "@/components/shared/Button";

export default async function PolicymakersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("platform");

  const outputs = [
    { icon: <FileText className="h-5 w-5" />, title: t("policymakers_output1_title"), description: t("policymakers_output1_description") },
    { icon: <BarChart3 className="h-5 w-5" />, title: t("policymakers_output2_title"), description: t("policymakers_output2_description") },
    { icon: <ShieldCheck className="h-5 w-5" />, title: t("policymakers_output3_title"), description: t("policymakers_output3_description") },
    { icon: <Globe className="h-5 w-5" />, title: t("policymakers_output4_title"), description: t("policymakers_output4_description") },
  ];

  const partners = [
    { country: "Netherlands", body: "Ministry of Agriculture, Nature and Food Quality (LNV)", focus: "Household food waste reduction and dietary quality improvement" },
    { country: "France", body: "Ministry of Agriculture and Food Sovereignty + INRAE", focus: "Professional kitchen optimization and sustainable food service" },
    { country: "Germany", body: "Federal Ministry of Food and Agriculture (BMEL)", focus: "Farm-to-consumer transparency and verifiable sustainability claims" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-ink via-[#16213e] to-deep-forest px-6 py-24 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-harvest-gold/80">{t("policymakers_hero_label")}</p>
        <h1 className="mx-auto max-w-3xl font-serif text-white">{t("policymakers_hero_heading")}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">{t("policymakers_hero_description")}</p>
      </section>

      {/* Policy Outputs */}
      <Section>
        <SectionHeader label={t("policymakers_outputs_label")} heading={t("policymakers_outputs_heading")} align="center" />
        <div className="grid gap-6 md:grid-cols-2">
          {outputs.map((output) => (
            <div key={output.title} className="rounded-2xl border border-soft-gray bg-white p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-parchment text-living-green">
                {output.icon}
              </div>
              <h3 className="mb-3 font-serif text-xl text-deep-ink">{output.title}</h3>
              <p className="text-sm leading-relaxed text-mid-gray">{output.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Use Case: Farm-to-Consumer */}
      <Section className="bg-parchment/50">
        <SectionHeader label={t("policymakers_hero_label")} heading={t("deploy3_title")} description={t("deploy3_description")} align="center" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard value={t("deploy3_metric1")} label="Farm-Level GHG" description="Reduction in farm greenhouse gas emissions" />
          <StatCard value={t("deploy3_metric2")} label="Consumer Trust" description="Increase in consumer trust via verifiable claims" />
          <StatCard value={t("deploy3_metric3")} label="Farmer Income" description="Premium pricing through verified sustainability" />
          <StatCard value={t("deploy3_metric4")} label="ZKP Verified" description="All sustainability claims cryptographically verified" />
        </div>
      </Section>

      {/* Government Partners */}
      <Section>
        <SectionHeader label="GOVERNMENT PARTNERS" heading="Working with National Governments" description="EcoDish365 is validated in collaboration with government bodies across three EU Member States to prove technology and inform policy." align="center" />
        <div className="grid gap-6 lg:grid-cols-3">
          {partners.map((partner) => (
            <div key={partner.country} className="rounded-2xl border border-soft-gray bg-white p-7">
              <div className="mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-living-green" />
                <p className="text-xs font-semibold uppercase tracking-wider text-living-green">{partner.country}</p>
              </div>
              <h3 className="mb-2 font-serif text-lg text-deep-ink">{partner.body}</h3>
              <p className="text-sm leading-relaxed text-mid-gray">{partner.focus}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Verified Impact */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader label={t("impact_label")} heading="Verified, Independently Audited Impact" description="All impact metrics are verified through hybrid measurement: ZKP-verifiable aggregates, IoT sensor data, validated surveys, and independent third-party life-cycle assessment audits." align="center" dark />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard dark value={t("impact_dietary")} label={t("impact_dietary_label")} description={t("impact_dietary_desc")} />
            <StatCard dark value={t("impact_ghg")} label={t("impact_ghg_label")} description={t("impact_ghg_desc")} />
            <StatCard dark value={t("impact_waste")} label={t("impact_waste_label")} description={t("impact_waste_desc")} />
            <StatCard dark value={t("impact_productivity")} label={t("impact_productivity_label")} description={t("impact_productivity_desc")} />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-deep-ink">Engage with Evidence-Based Policy Tools</h2>
          <p className="mt-4 text-mid-gray">Connect with us to explore EcoDish365 for scenario modeling, evidence briefs, and policy advisory services.</p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Contact for Policy Advisory</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
