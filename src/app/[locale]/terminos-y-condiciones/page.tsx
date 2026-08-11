import type { Metadata } from 'next';
import { Locale, locales } from "@/lib/i18n";
import TermsPage from "@/components/pages/TermsPage";

const SITE_URL = 'https://casonalosrodriguez.cr';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';

  const title = isEs
    ? 'Términos y Condiciones Legal | Casona Los Rodríguez'
    : 'Terms & Conditions | Casona Los Rodríguez';

  const description = isEs
    ? 'Términos y condiciones de servicio para el uso del sitio web y reservas de experiencias en Casona Los Rodríguez, La Fortuna, San Carlos.'
    : 'Terms & conditions of service for using the website and booking experiences at Casona Los Rodríguez, La Fortuna, San Carlos.';

  const canonicalUrl = `${SITE_URL}/${locale}/${isEs ? 'terminos-y-condiciones' : 'terms-and-conditions'}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${SITE_URL}/es/terminos-y-condiciones`,
        'en': `${SITE_URL}/en/terms-and-conditions`,
        'x-default': `${SITE_URL}/es/terminos-y-condiciones`,
      },
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
  return <TermsPage locale={locale as Locale} />;
}
