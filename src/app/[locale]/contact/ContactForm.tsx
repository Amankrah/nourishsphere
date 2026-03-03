"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { MapPin, Mail, Building } from "lucide-react";
import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";

interface FormData {
  type: string;
  name: string;
  email: string;
  organization: string;
  message: string;
}

export default function ContactForm() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Handle error silently for now
    }
  }

  const inquiryTypes = [
    { value: "general", label: t("form_type_general") },
    { value: "partnership", label: t("form_type_partnership") },
    { value: "media", label: t("form_type_media") },
    { value: "research", label: t("form_type_research") },
  ];

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

      <Section>
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="rounded-2xl border border-living-green/20 bg-living-green/5 p-8 text-center">
                <p className="font-serif text-xl text-deep-forest">
                  {t("form_success")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-deep-ink">
                    {t("form_type")}
                  </label>
                  <select
                    {...register("type", { required: true })}
                    className="w-full rounded-xl border border-soft-gray bg-white px-4 py-3 text-sm text-deep-ink focus:border-living-green focus:outline-none"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-deep-ink">
                    {t("form_name")} *
                  </label>
                  <input
                    {...register("name", { required: true })}
                    className="w-full rounded-xl border border-soft-gray bg-white px-4 py-3 text-sm text-deep-ink focus:border-living-green focus:outline-none"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">Required</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-deep-ink">
                    {t("form_email")} *
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    })}
                    className="w-full rounded-xl border border-soft-gray bg-white px-4 py-3 text-sm text-deep-ink focus:border-living-green focus:outline-none"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      Valid email required
                    </p>
                  )}
                </div>

                {/* Organization */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-deep-ink">
                    {t("form_organization")}
                  </label>
                  <input
                    {...register("organization")}
                    className="w-full rounded-xl border border-soft-gray bg-white px-4 py-3 text-sm text-deep-ink focus:border-living-green focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-deep-ink">
                    {t("form_message")} *
                  </label>
                  <textarea
                    {...register("message", { required: true })}
                    rows={5}
                    className="w-full resize-none rounded-xl border border-soft-gray bg-white px-4 py-3 text-sm text-deep-ink focus:border-living-green focus:outline-none"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">Required</p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  {isSubmitting ? "Sending..." : t("form_submit")}
                </Button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div>
              <p className="section-label mb-3">{t("office_label")}</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-living-green" />
                  <p className="text-sm text-mid-gray">{t("office_location")}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Building className="mt-0.5 h-4 w-4 text-living-green" />
                  <p className="text-sm text-mid-gray">{t("office_affiliation")}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-living-green" />
                  <p className="text-sm text-mid-gray">info@nourishsphere.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
