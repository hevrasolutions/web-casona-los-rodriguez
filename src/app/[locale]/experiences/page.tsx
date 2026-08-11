import type { Metadata } from 'next';
import { Locale, locales } from "@/lib/i18n";
import ExperiencesPage from "@/components/pages/ExperiencesPage";
import JsonLdScript from "@/components/seo/JsonLdScript";
import { getFaqSchema } from "@/lib/jsonLd";
import { getDictionary } from "@/lib/i18n";

const SITE_URL = 'https://casonalosrodriguez.cr';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';

  const title = isEs
    ? 'Tours y Experiencias Culturales en La Fortuna | Precios y Horarios'
    : 'Tours & Cultural Experiences in La Fortuna | Rates & Schedules';

  const description = isEs
    ? 'Descubra nuestras 3 experiencias oficiales en La Fortuna: Tour Histórico Cultural ($75), Cooking Class con Tía Yami ($70) y Day Pass con Comida Típica ($40). Niños con tarifa reducida e infantes gratis.'
    : 'Discover our 3 official experiences in La Fortuna: Cultural Heritage Tour ($75), Cooking Class ($70) and Day Pass ($40). Reduced child rates & free infant access.';

  const canonicalUrl = `${SITE_URL}/${locale}/${isEs ? 'experiencias' : 'experiences'}`;

  return {
    title,
    description,
    keywords: isEs
      ? ['tours la fortuna costa rica', 'clase de cocina la fortuna', 'tour historico cultural la fortuna', 'day pass finca la fortuna', 'precios tours la fortuna']
      : ['tours la fortuna costa rica', 'cooking class la fortuna', 'heritage tour la fortuna', 'farm day pass la fortuna', 'tour prices la fortuna'],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${SITE_URL}/es/experiencias`,
        'en': `${SITE_URL}/en/experiences`,
        'x-default': `${SITE_URL}/es/experiencias`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Casona Los Rodríguez',
      locale: isEs ? 'es_CR' : 'en_US',
      alternateLocale: [isEs ? 'en_US' : 'es_CR'],
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/images/hero/casona-los-rodriguez-traditional-dining-room-004.webp`,
          alt: title,
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  
  const faqSchema = getFaqSchema(dict.faqsList);

  return (
    <>
      {faqSchema && <JsonLdScript data={faqSchema} />}
      <ExperiencesPage locale={locale as Locale} />
    </>
  );
}
