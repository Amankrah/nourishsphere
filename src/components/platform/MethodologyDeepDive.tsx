import { getTranslations } from "next-intl/server";
import { Star, Compass, Heart, Activity, Leaf, Database, Globe2 } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

export default async function MethodologyDeepDive() {
  const t = await getTranslations("about.methodology");

  const scoringSystems = [
    { icon: <Star className="h-5 w-5" />, title: t("hsr_title"), description: t("hsr_description") },
    { icon: <Compass className="h-5 w-5" />, title: t("fcs_title"), description: t("fcs_description") },
    { icon: <Heart className="h-5 w-5" />, title: t("hefi_title"), description: t("hefi_description") },
    { icon: <Activity className="h-5 w-5" />, title: t("heni_title"), description: t("heni_description") },
  ];

  const dataSources = [
    { icon: <Database className="h-5 w-5" />, title: t("cnf_title"), description: t("cnf_description") },
    { icon: <Database className="h-5 w-5" />, title: t("gbd_title"), description: t("gbd_description") },
  ];

  const nationalRows = [
    { icon: <Globe2 className="h-5 w-5" />, title: t("national_canada_title"), description: t("national_canada_description") },
    { icon: <Globe2 className="h-5 w-5" />, title: t("national_ghana_title"), description: t("national_ghana_description") },
    { icon: <Globe2 className="h-5 w-5" />, title: t("national_rwanda_title"), description: t("national_rwanda_description") },
  ];

  return (
    <div id="methodology" className="scroll-mt-28">
      <Section className="bg-parchment/40">
        <SectionHeader label={t("label")} heading={t("heading")} description={t("description")} align="center" />
      </Section>

      <Section>
        <SectionHeader label={t("scoring_label")} heading={t("scoring_heading")} align="center" />
        <div className="grid gap-6 md:grid-cols-2">
          {scoringSystems.map((system) => (
            <div key={system.title} className="rounded-2xl border border-soft-gray bg-white p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-parchment text-living-green">
                {system.icon}
              </div>
              <h3 className="mb-3 font-serif text-xl text-deep-ink">{system.title}</h3>
              <p className="text-sm leading-relaxed text-mid-gray">{system.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-parchment/50">
        <SectionHeader label={t("lca_label")} heading={t("lca_heading")} />
        <div className="max-w-3xl">
          <p className="text-base leading-relaxed text-mid-gray">{t("lca_description")}</p>
          <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {[
              "Carbon", "Water Use", "Land Use", "Acidification",
              "Eutrophication", "Ozone", "Ecotoxicity", "Human Toxicity",
              "Particulates", "Ionizing Rad.", "Fossil Depl.", "Mineral Depl.",
              "Marine Eco.", "Freshwater Eco.", "Terrestrial Eco.", "Land Transform.",
              "Water Depl.", "Urban Land",
            ].map((category) => (
              <div
                key={category}
                className="flex items-center justify-center rounded-lg bg-white p-3 text-center"
              >
                <span className="text-[10px] font-medium uppercase tracking-wider text-deep-forest">
                  {category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader label={t("data_label")} heading={t("data_heading")} align="center" />
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {dataSources.map((source) => (
            <div key={source.title} className="rounded-2xl border border-soft-gray bg-white p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-parchment text-living-green">
                {source.icon}
              </div>
              <h3 className="mb-3 font-serif text-xl text-deep-ink">{source.title}</h3>
              <p className="text-sm leading-relaxed text-mid-gray">{source.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-parchment/30">
        <SectionHeader
          label={t("national_label")}
          heading={t("national_heading")}
          description={t("national_description")}
          align="center"
        />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {nationalRows.map((row) => (
            <div key={row.title} className="rounded-2xl border border-soft-gray bg-white p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-parchment text-living-green">
                {row.icon}
              </div>
              <h3 className="mb-3 font-serif text-lg text-deep-ink">{row.title}</h3>
              <p className="text-sm leading-relaxed text-mid-gray">{row.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <Leaf className="mx-auto mb-6 h-10 w-10 text-harvest-gold" />
          <h2 className="font-serif text-3xl text-white">{t("integration_heading")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
            {t("integration_description")}
          </p>
        </div>
      </Section>
    </div>
  );
}
