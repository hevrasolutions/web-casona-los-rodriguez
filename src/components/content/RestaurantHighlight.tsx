import React from 'react';
import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

interface RestaurantHighlightProps {
  locale: Locale;
}

export default function RestaurantHighlight({ locale }: RestaurantHighlightProps) {
  const isEs = locale === 'es';

  const title = isEs ? 'Sabores cocinados a la leña, como siempre ha sido.' : 'Flavors cooked over wood fire, the way it has always been.';
  const subtitle = isEs ? 'Gastronomía Típica' : 'Traditional Gastronomy';
  const description = isEs
    ? 'Imagine sentarse a la mesa en la Casona: el aroma de la leña en el aire, carne ahumada recién servida, tortillas palmeadas al instante y una olla de carne que cocinó toda la mañana a fuego lento. En nuestra cocina no hay atajos, solo recetas costarricenses de siempre, ingredientes frescos de la zona y el fuego que nunca se apaga. Una mesa en la Casona es una experiencia que se recuerda.'
    : 'Picture yourself at a table in La Casona: the scent of burning wood in the air, freshly smoked meat just served, hand-pressed tortillas still warm, and a slow-cooked olla de carne that has been simmering all morning. Our kitchen takes no shortcuts — just timeless Costa Rican recipes, fresh local ingredients, and a fire that never goes out. A meal at La Casona is an experience you will not forget.';

  const buttonLabel = isEs ? 'Conozca nuestro restaurante' : 'Discover our restaurant';

  return (
    <section className="py-20 sm:py-28 bg-cream">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Column */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/gallery/typical-food/casona-los-rodriguez-typical-food-la-fortuna-003.webp"
                alt={isEs ? 'Comida típica costarricense' : 'Typical Costa Rican food'}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-md mt-6">
              <Image
                src="/images/gallery/typical-food/casona-los-rodriguez-typical-food-la-fortuna-006.webp"
                alt={isEs ? 'Chicharrón con yuca en hoja de banano' : 'Pork chunks with cassava served on banana leaf'}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            <SectionTitle
              title={title}
              subtitle={subtitle}
              align="left"
              className="mb-6"
            />
            <p className="text-base sm:text-lg text-primary/80 font-body leading-relaxed mb-8">
              {description}
            </p>
            <Button
              variant="ghost"
              size="md"
              href={isEs ? '/es/restaurante' : '/en/restaurant'}
              className="min-w-[220px]"
            >
              {buttonLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
