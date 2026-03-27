import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { dmSerifDisplay, outfit, sourceSerif4 } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "NourishSphere: sustainable healthy eating for Canada",
    template: "%s | NourishSphere",
  },
  description:
    "NourishSphere is a Canadian non-profit. We promote sustainable, healthy diets through open technology for consumers, researchers, and policymakers. EcoDish365 is our flagship product for year-round sustainable food choices.",
  metadataBase: new URL("https://nourishsphere.org"),
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${dmSerifDisplay.variable} ${outfit.variable} ${sourceSerif4.variable}`}
    >
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
