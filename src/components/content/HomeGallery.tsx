import React from 'react';
import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';

interface HomeGalleryProps {
  locale: Locale;
}

export default function HomeGallery({ locale }: HomeGalleryProps) {
  const isEs = locale === 'es';

  const title = isEs ? 'Nuestros Momentos' : 'Our Moments';
  const subtitle = isEs ? 'Galería de Recuerdos' : 'Memory Gallery';
  const buttonLabel = isEs ? 'Ver galería completa' : 'View full gallery';

  // 6 representative real images
  const galleryImages = [
    {
      src: '/images/gallery/farmhouse/casona-los-rodriguez-farmhouse-la-fortuna-001.webp',
      alt: isEs ? 'Fachada exterior de Casona Los Rodríguez' : 'Exterior facade of Casona Los Rodríguez',
    },
    {
      src: '/images/gallery/restaurant-kitchen/casona-los-rodriguez-woodfire-cooking-001.webp',
      alt: isEs ? 'Clase de cocina típica costarricense' : 'Typical Costa Rican cooking class',
    },
    {
      src: '/images/gallery/typical-food/casona-los-rodriguez-typical-food-la-fortuna-003.webp',
      alt: isEs ? 'Comida típica costarricense preparada a la leña' : 'Traditional Costa Rican typical food cooked over wood fire',
    },
    {
      src: '/images/gallery/farm-trapiche/casona-los-rodriguez-rural-farm-experience-001.webp',
      alt: isEs ? 'Recorrido por la granja y finca rural' : 'Farm and rural farmhouse tour',
    },
    {
      src: '/images/gallery/farmhouse/casona-los-rodriguez-traditional-dining-room-001.webp',
      alt: isEs ? 'Comedor interior con muebles antiguos de colección' : 'Interior dining room with antique collectible furniture',
    },
    {
      src: '/images/gallery/customer-experiences/casona-los-rodriguez-family-cultural-experience-001.webp',
      alt: isEs ? 'Grupo familiar viviendo la experiencia cultural' : 'Family group experiencing the cultural tour',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-cream/40 border-t border-b border-sand/10 overflow-hidden">
      <Container>
        <FadeIn direction="up">
          <SectionTitle
            title={title}
            subtitle={subtitle}
            className="mb-14"
          />
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((img, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 100}>
              <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn direction="up" delay={400}>
          <div className="mt-12 text-center">
            <Button
              href={isEs ? '/es/galeria' : '/en/gallery'}
              variant="secondary"
              size="md"
              className="px-8 min-w-[200px]"
            >
              {buttonLabel}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
