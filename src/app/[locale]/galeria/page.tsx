import type { Metadata } from 'next';
import { Locale, locales } from "@/lib/i18n";
import GalleryPage from "@/components/pages/GalleryPage";
import { getDynamicGalleryItems } from "@/lib/gallery";

const SITE_URL = 'https://casonalosrodriguez.cr';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';

  const title = isEs
    ? 'Galería Fotográfica | Casona Los Rodríguez La Fortuna'
    : 'Photo Gallery | Casona Los Rodríguez La Fortuna';

  const description = isEs
    ? 'Explore nuestra galería fotográfica. Imágenes auténticas de la casona de 120 años, cocina a la leña, molienda en trapiche artesanal, platillos tradicionales y experiencias de clientes.'
    : 'Explore our photo gallery. Authentic images of our 120-year-old farmhouse, wood-fired kitchen, wooden sugar mill, traditional dishes & guest experiences.';

  const canonicalUrl = `${SITE_URL}/${locale}/${isEs ? 'galeria' : 'gallery'}`;

  return {
    title,
    description,
    keywords: isEs
      ? ['fotos casona los rodriguez', 'galeria imagenes la fortuna', 'fotos trapiche artesanal', 'fotos cocina de leña costa rica']
      : ['casona los rodriguez photos', 'la fortuna gallery images', 'sugar cane mill photos', 'costa rican wood fired kitchen photos'],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': `${SITE_URL}/es/galeria`,
        'en': `${SITE_URL}/en/gallery`,
        'x-default': `${SITE_URL}/es/galeria`,
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
  const initialItems = getDynamicGalleryItems();
  return <GalleryPage locale={locale as Locale} initialItems={initialItems} />;
}
