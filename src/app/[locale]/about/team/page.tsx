import { setRequestLocale, getTranslations } from "next-intl/server";
import { User, Users } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/shared/Button";

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about.team");

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-ink via-[#16213e] to-deep-forest px-6 py-24 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-harvest-gold/80">
          {t("label")}
        </p>
        <h1 className="mx-auto max-w-3xl font-serif text-white">
          {t("heading")}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
          {t("description")}
        </p>
      </section>

      {/* Founder */}
      <Section>
        <div className="mx-auto max-w-3xl rounded-2xl border border-soft-gray bg-white p-8 md:p-12">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            {/* Photo placeholder */}
            <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-parchment">
              <User className="h-12 w-12 text-mid-gray" />
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-living-green">
                {t("founder_role")}
              </p>
              <h3 className="mb-3 font-serif text-2xl text-deep-ink">
                Dr. [Founder Name]
              </h3>
              <p className="text-sm leading-relaxed text-mid-gray">
                {t("founder_bio")}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Advisory Board */}
      <Section className="bg-parchment/50">
        <SectionHeader
          label={t("advisory_label")}
          heading={t("advisory_heading")}
          description={t("advisory_description")}
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-2xl border border-soft-gray bg-white p-6 text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-soft-gray/50">
                <User className="h-6 w-6 text-mid-gray" />
              </div>
              <h3 className="font-serif text-lg text-deep-ink">
                Advisory Member {i}
              </h3>
              <p className="mt-1 text-xs font-medium text-living-green">
                Expertise Area
              </p>
              <p className="mt-2 text-sm text-mid-gray">
                Distinguished expert in their field with extensive experience in
                nutrition, environmental science, or public health policy.
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Join Us CTA */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeader
            label={t("join_label")}
            heading={t("join_heading")}
            description={t("join_description")}
            align="center"
          />
          <Button href="/contact" size="lg">
            <Users className="mr-2 h-4 w-4" />
            Get in Touch
          </Button>
        </div>
      </Section>
    </>
  );
}
