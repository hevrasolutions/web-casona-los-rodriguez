import type { Metadata } from 'next';
import { Locale, locales } from "@/lib/i18n";
import AboutPage from "@/components/pages/AboutPage";

const SITE_URL = 'https://casonalosrodriguez.cr';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';

  const title = isEs
    ? 'Nosotros | 120 Años de Historia y Tradición en La Fortuna'
    : 'About Us | 120 Years of History & Tradition in La Fortuna';

  const description = isEs
    ? 'Conozca la historia de más de 120 años de Casona Los Rodríguez. Desde la época del Presidente Rafael Yglesias en 1890 y el billete de 5 colones hasta la custodia de la Familia Rodríguez Arias.'
    : 'Learn the 120+ year history of Casona Los Rodríguez. From President Rafael Yglesias era in 1890 and the 5 Colones bill to the Rodríguez Arias family stewardship today.';

  const canonicalUrl = `${SITE_URL}/${locale}/${isEs ? 'nosotros' : 'about'}`;

  return {
    title,
    description,
    keywords: isEs
      ? ['historia casona los rodriguez', 'patrimonio la fortuna', 'billete 5 colones costa rica', 'familia rodriguez arias', 'historia costarricense']
      : ['casona los rodriguez history', 'heritage tour la fortuna', '5 colones bill costa rica', 'rodriguez arias family', 'costa rican history'],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${SITE_URL}/es/nosotros`,
        'en': `${SITE_URL}/en/about`,
        'x-default': `${SITE_URL}/es/nosotros`,
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
  return <AboutPage locale={locale as Locale} />;
}
