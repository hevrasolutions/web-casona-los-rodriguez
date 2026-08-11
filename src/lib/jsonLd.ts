import { Experience } from '@/types/experience';

const SITE_URL = 'https://casonalosrodriguez.cr';
const LOGO_URL = `${SITE_URL}/images/logo/casona-los-rodriguez-logo.png`;
const HERO_IMG = `${SITE_URL}/images/hero/casona-los-rodriguez-traditional-dining-room-004.webp`;

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Casona Los Rodríguez',
    alternateName: 'Casona Los Rodríguez La Fortuna',
    url: SITE_URL,
    logo: LOGO_URL,
    image: HERO_IMG,
    telephone: '+506 6081-7929',
    email: 'info@casonalosrodriguez.cr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sona Fluca',
      addressLocality: 'La Fortuna',
      addressRegion: 'San Carlos, Alajuela',
      postalCode: '21007',
      addressCountry: 'CR',
    },
    sameAs: [
      'https://wa.me/50660817929',
    ],
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'TouristAttraction'],
    '@id': `${SITE_URL}/#localbusiness`,
    name: 'Casona Los Rodríguez',
    description: 'Experiencia cultural costarricense en una casona rural centenaria de más de 120 años en La Fortuna, San Carlos. Cocina 100% a la leña, trapiche artesanal interactivo sin tracción animal, clases de cocina y bailes folclóricos.',
    url: SITE_URL,
    telephone: '+506 6081-7929',
    email: 'info@casonalosrodriguez.cr',
    image: [HERO_IMG],
    logo: LOGO_URL,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sona Fluca',
      addressLocality: 'La Fortuna',
      addressRegion: 'San Carlos, Alajuela',
      postalCode: '21007',
      addressCountry: 'CR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 10.4633,
      longitude: -84.6022,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    isAccessibleForFree: false,
    publicAccess: true,
  };
}

export function getRestaurantSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${SITE_URL}/#restaurant`,
    name: 'Restaurante Rústico Casona Los Rodríguez',
    description: 'Restaurante de cocina tradicional costarricense 100% preparada a la leña en ollas y sartenes tradicionales. Sabores auténticos del campo costarricense.',
    url: `${SITE_URL}/es/restaurante`,
    image: HERO_IMG,
    servesCuisine: ['Costa Rican', 'Traditional', 'Wood-fired Cooking'],
    priceRange: '$$',
    telephone: '+506 6081-7929',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sona Fluca',
      addressLocality: 'La Fortuna',
      addressRegion: 'San Carlos, Alajuela',
      addressCountry: 'CR',
    },
  };
}

export function getExperienceEventSchema(experience: Experience, locale: string) {
  const isEs = locale === 'es';
  const title = isEs ? experience.title : experience.titleEN;
  const description = isEs ? experience.seoDescription : experience.seoDescriptionEN;
  const slug = isEs ? experience.slug : experience.slugEN;
  const path = isEs ? `/es/experiencias/${slug}` : `/en/experiences/${slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': `${SITE_URL}${path}#touristtrip`,
    name: title,
    description: description,
    url: `${SITE_URL}${path}`,
    image: `${SITE_URL}${experience.heroImage}`,
    touristType: ['Cultural Tourism', 'Gastronomic Tourism', 'Family Tourism'],
    offers: {
      '@type': 'Offer',
      price: experience.pricing.adult,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}${path}`,
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Casona Los Rodríguez',
      url: SITE_URL,
    },
  };
}

export function getFaqSchema(faqItems: Array<{ question?: string; answer?: string; q?: string; a?: string }>) {
  if (!faqItems || faqItems.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question || item.q || '',
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer || item.a || '',
      },
    })),
  };
}
