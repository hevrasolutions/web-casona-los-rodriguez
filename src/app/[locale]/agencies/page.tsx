import type { Metadata } from 'next';
import { Locale, locales } from "@/lib/i18n";
import AgenciesPage from "@/components/pages/AgenciesPage";

const SITE_URL = 'https://casonalosrodriguez.cr';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';

  const title = isEs
    ? 'Agencias de Viajes y Operadores B2B | Convenios y Tarifas Netas'
    : 'Travel Agencies & B2B Tour Operators | Net Rates & Agreements';

  const description = isEs
    ? 'Portal comercial exclusivo para agencias de viajes, operadores turísticos y DMCs en La Fortuna, Costa Rica. Tarifario neto, reservas prioritarias y experiencias culturales para grupos.'
    : 'Exclusive B2B commercial portal for travel agencies, tour operators, and DMCs in La Fortuna, Costa Rica. Net rate manual, priority group bookings & authentic cultural tours.';

  const canonicalUrl = `${SITE_URL}/${locale}/${isEs ? 'agencias' : 'agencies'}`;

  return {
    title,
    description,
    keywords: isEs
      ? ['tarifario agencias la fortuna', 'operadores turisticos costa rica dmc', 'convenio agencias casona los rodriguez', 'tours culturales grupos la fortuna']
      : ['b2b travel agent rates la fortuna', 'dmc costa rica tour operators', 'group cultural tours la fortuna', 'travel agency agreement costa rica'],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${SITE_URL}/es/agencias`,
        'en': `${SITE_URL}/en/agencies`,
        'x-default': `${SITE_URL}/es/agencias`,
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
  return <AgenciesPage locale={locale as Locale} />;
}
