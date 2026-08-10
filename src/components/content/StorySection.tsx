import React from 'react';
import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';

interface StorySectionProps {
  locale: Locale;
}

export default function StorySection({ locale }: StorySectionProps) {
  const isEs = locale === 'es';

  const title = isEs ? 'Sembrar cultura en la juventud es cosechar esperanza para el futuro.' : 'Planting culture in the younger generation is sowing hope for the future.';
  const subtitle = isEs ? 'Legado Cultural' : 'Cultural Heritage';
  const buttonLabel = isEs ? 'Conócenos más' : 'Learn more about us';

  const content = isEs
    ? 'En Casona Los Rodríguez creemos que el arte y la educación son herramientas poderosas para transformar vidas. Trabajamos para brindar a los niños y jóvenes de La Fortuna oportunidades de desarrollar sus talentos, fortalecer sus valores y construir un futuro mejor a través de clases de baile, pintura, poesía y música. Nuestra misión: crear un espacio seguro donde cada joven pueda descubrir su potencial y convertirse en un agente de cambio positivo para su comunidad y para Costa Rica.'
    : 'At Casona Los Rodríguez, we believe art and education are powerful forces that transform lives. We work to give the children and youth of La Fortuna the chance to discover their talents, build strong values, and shape a better future through dance, painting, poetry, and music. Our mission: to create a safe, nurturing space where every young person can unlock their potential and grow into a positive force for their community and for Costa Rica.';

  return (
    <section className="py-20 sm:py-28 bg-cream overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <FadeIn direction="left">
              <SectionTitle
                title={title}
                subtitle={subtitle}
                align="left"
                className="mb-6"
              />
              <p className="text-base sm:text-lg text-primary/80 font-body leading-relaxed mb-8">
                {content}
              </p>
              <Button
                variant="ghost"
                size="md"
                href={isEs ? '/es/nosotros' : '/en/about'}
                className="min-w-[180px]"
              >
                {buttonLabel}
              </Button>
            </FadeIn>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-6 w-full">
            <FadeIn direction="right">
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-xl border border-sand/30">
                <Image
                  src="/images/gallery/farmhouse/casona-los-rodriguez-rural-farmhouse-costa-rica-001.webp"
                  alt={isEs ? 'Entrada de la Casona con mecedoras tradicionales' : 'Farmhouse porch with traditional rocking chairs'}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
