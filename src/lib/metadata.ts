import type { Metadata } from "next";

const BASE_URL = "https://nourishsphere.org";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  locale?: string;
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  locale = "en",
}: PageMetadataOptions): Metadata {
  const fullTitle =
    title === "NourishSphere"
      ? title
      : `${title} | NourishSphere`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}${path}`,
      languages: {
        en: `${BASE_URL}/en${path}`,
        fr: `${BASE_URL}/fr${path}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: `${BASE_URL}/${locale}${path}`,
      siteName: "NourishSphere",
      locale: locale === "fr" ? "fr_CA" : "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "NourishSphere",
  alternateName: "NouriSphère",
  url: BASE_URL,
  description:
    "Canadian non-profit promoting sustainable, healthy diets through technology for consumers, researchers, and policymakers. EcoDish365 is its flagship digital product for integrated nutrition and environmental food choices.",
  foundingLocation: {
    "@type": "Place",
    name: "Montreal, Quebec, Canada",
  },
  parentOrganization: {
    "@type": "CollegeOrUniversity",
    name: "McGill University",
  },
  areaServed: ["Canada", "European Union"],
  nonprofitStatus: "NonprofitType",
};
