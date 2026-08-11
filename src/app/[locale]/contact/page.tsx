import type { Metadata } from 'next';
import { Locale, locales } from "@/lib/i18n";
import ContactPage from "@/components/pages/ContactPage";

const SITE_URL = 'https://casonalosrodriguez.cr';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';

  const title = isEs
    ? 'Contacto y Ubicación | Casona Los Rodríguez La Fortuna'
    : 'Contact & Location | Casona Los Rodríguez La Fortuna';

  const description = isEs
    ? 'Póngase en contacto con Casona Los Rodríguez en Sona Fluca, La Fortuna, San Carlos. WhatsApp directo +506 6081-7929, mapa interactivo, horarios y formulario de atención.'
    : 'Get in touch with Casona Los Rodríguez in Sona Fluca, La Fortuna, San Carlos. Direct WhatsApp +506 6081-7929, interactive map, opening hours & contact form.';

  const canonicalUrl = `${SITE_URL}/${locale}/${isEs ? 'contacto' : 'contact'}`;

  return {
    title,
    description,
    keywords: isEs
      ? ['contacto casona los rodriguez', 'como llegar casona los rodriguez', 'ubicacion sona fluca la fortuna', 'whatsapp casona los rodriguez']
      : ['contact casona los rodriguez', 'how to get to casona los rodriguez', 'location sona fluca la fortuna', 'whatsapp casona los rodriguez'],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${SITE_URL}/es/contacto`,
        'en': `${SITE_URL}/en/contact`,
        'x-default': `${SITE_URL}/es/contacto`,
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
  return <ContactPage locale={locale as Locale} />;
}
