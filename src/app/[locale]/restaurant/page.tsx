import type { Metadata } from 'next';
import { Locale, locales } from "@/lib/i18n";
import RestaurantPage from "@/components/pages/RestaurantPage";
import JsonLdScript from "@/components/seo/JsonLdScript";
import { getRestaurantSchema } from "@/lib/jsonLd";

const SITE_URL = 'https://casonalosrodriguez.cr';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';

  const title = isEs
    ? 'Restaurante Típico a la Leña | Gastronomía Auténtica en La Fortuna'
    : 'Wood-Fired Traditional Restaurant | Authentic Food in La Fortuna';

  const description = isEs
    ? 'Disfrute de la auténtica gastronomía costarricense preparada 100% a la leña en ollas de barro y maderas nativas. Arroz con siempre, picadillos caseros y café chorreado en La Fortuna.'
    : 'Enjoy authentic Costa Rican gastronomy prepared 100% wood-fired in clay pots & native woods. Traditional dishes, homemade sides & drip coffee in La Fortuna.';

  const canonicalUrl = `${SITE_URL}/${locale}/${isEs ? 'restaurante' : 'restaurant'}`;

  return {
    title,
    description,
    keywords: isEs
      ? ['restaurante a la leña la fortuna', 'comida tipica costarricense la fortuna', 'arroz con siempre la fortuna', 'donde comer la fortuna costa rica', 'restaurante rustico la fortuna']
      : ['wood fired restaurant la fortuna', 'traditional costa rican food la fortuna', 'where to eat in la fortuna', 'rustic restaurant la fortuna', 'authentic food la fortuna'],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${SITE_URL}/es/restaurante`,
        'en': `${SITE_URL}/en/restaurant`,
        'x-default': `${SITE_URL}/es/restaurante`,
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
          url: `${SITE_URL}/images/hero/authentic-costa-rican-food-experience.webp`,
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
  const restaurantSchema = getRestaurantSchema();

  return (
    <>
      <JsonLdScript data={restaurantSchema} />
      <RestaurantPage locale={locale as Locale} />
    </>
  );
}
