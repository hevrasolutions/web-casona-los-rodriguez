import type { Metadata } from 'next';
import { experiences } from '@/data/experiences';
import { Experience } from '@/types/experience';

const SITE_URL = 'https://casonalosrodriguez.cr';

export function findExperience(
  locale: string,
  slug: string
): Experience | undefined {
  const isEs = locale === 'es';
  return experiences.find((exp) =>
    isEs ? exp.slug === slug : exp.slugEN === slug
  );
}

export function getExperienceMetadata(locale: string, slug: string): Metadata {
  const experience = findExperience(locale, slug);
  if (!experience) return {};

  const isEs = locale === 'es';
  const title = isEs ? experience.seoTitle : experience.seoTitleEN;
  const description = isEs
    ? experience.seoDescription
    : experience.seoDescriptionEN;
  const path = isEs
    ? `/es/experiencias/${experience.slug}`
    : `/en/experiences/${experience.slugEN}`;
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords: isEs ? experience.keywords : experience.keywordsEN,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Casona Los Rodríguez',
      locale: isEs ? 'es_CR' : 'en_US',
      type: 'website',
      images: [
        {
          url: experience.heroImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [experience.heroImage],
    },
  };
}
