import type { Metadata } from 'next';
import { Locale, locales } from "@/lib/i18n";
import CancellationPage from "@/components/pages/CancellationPage";

const SITE_URL = 'https://casonalosrodriguez.cr';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';

  const title = isEs
    ? 'Políticas de Cancelación y Cambios de Reserva | Casona Los Rodríguez'
    : 'Cancellation & Rescheduling Policy | Casona Los Rodríguez';

  const description = isEs
    ? 'Consulte nuestras políticas de cancelación y cambios de reserva. Reembolso del 100% con 24h+ de antelación y reprogramación de fechas 12h antes sin penalización.'
    : 'Review our cancellation and rescheduling terms. 100% refund for cancellations 24h+ in advance and date changes 12h prior without penalty.';

  const canonicalUrl = `${SITE_URL}/${locale}/${isEs ? 'politica-de-cancelacion' : 'cancellation-policy'}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${SITE_URL}/es/politica-de-cancelacion`,
        'en': `${SITE_URL}/en/cancellation-policy`,
        'x-default': `${SITE_URL}/es/politica-de-cancelacion`,
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
  return <CancellationPage locale={locale as Locale} />;
}
