import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Nunito_Sans } from "next/font/google";
import "../globals.css";
import { locales, Locale, getDictionary } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import JsonLdScript from "@/components/seo/JsonLdScript";
import GoogleAnalytics from "@/components/seo/GoogleAnalytics";
import { getOrganizationSchema, getLocalBusinessSchema } from "@/lib/jsonLd";

const SITE_URL = "https://casonalosrodriguez.cr";

const heading = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const subheading = Lora({
  weight: ["400"],
  style: ["italic"],
  subsets: ["latin"],
  variable: "--font-subheading",
  display: "swap",
});

const body = Nunito_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Casona Los Rodríguez | Tour Cultural y Cocina a la Leña en La Fortuna"
    : "Casona Los Rodríguez | Cultural Heritage Tour & Cooking Class in La Fortuna";

  const description = isEs
    ? "Una experiencia cultural costarricense en una casona rural de más de 120 años en La Fortuna. Cocina 100% a la leña, trapiche artesanal de madera interactivo, clases de cocina y bailes folclóricos."
    : "An authentic Costa Rican cultural experience in a 120+ year old rural farmhouse in La Fortuna. 100% wood-fired cooking, interactive wooden sugar mill, cooking classes & folklore shows.";

  const currentPath = isEs ? "/es" : "/en";
  const canonicalUrl = `${SITE_URL}${currentPath}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: isEs
      ? [
          "tour cultural la fortuna",
          "casona los rodriguez",
          "clases de cocina la fortuna",
          "comida a la leña la fortuna",
          "trapiche artesanal la fortuna",
          "que hacer en la fortuna",
          "turismo rural costa rica",
        ]
      : [
          "cultural tour la fortuna",
          "casona los rodriguez",
          "cooking class la fortuna",
          "wood fired restaurant la fortuna",
          "sugar cane mill tour la fortuna",
          "things to do in la fortuna",
          "authentic costa rica experience",
        ],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: `${SITE_URL}/es`,
        en: `${SITE_URL}/en`,
        "x-default": `${SITE_URL}/es`,
      },
    },
    icons: {
      icon: [
        {
          url: "/images/logo/casona-los-rodriguez-icono-favicon-32.svg",
          type: "image/svg+xml",
        },
      ],
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Casona Los Rodríguez",
      locale: isEs ? "es_CR" : "en_US",
      alternateLocale: [isEs ? "en_US" : "es_CR"],
      type: "website",
      images: [
        {
          url: `${SITE_URL}/images/logo/casona-los-rodriguez-share.jpg`,
          width: 1200,
          height: 630,
          alt: "Casona Los Rodríguez - La Fortuna Costa Rica",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/images/logo/casona-los-rodriguez-share.jpg`],
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dict = getDictionary(locale as Locale);
  const organizationSchema = getOrganizationSchema();
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html
      lang={locale}
      className={`${heading.variable} ${subheading.variable} ${body.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <JsonLdScript data={[organizationSchema, localBusinessSchema]} />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-primary font-body overflow-x-hidden">
        <GoogleAnalytics />
        <Header locale={locale as Locale} dict={dict} />
        <main className="flex-grow">{children}</main>
        <Footer locale={locale as Locale} dict={dict} />
        <WhatsAppButton locale={locale as Locale} dict={dict} />
      </body>
    </html>
  );
}
