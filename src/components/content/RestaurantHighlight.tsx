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
    ? 'En nuestro restaurante no hay espacio para lo artificial. Cada platillo se prepara al calor del fogón de leña, utilizando ingredientes frescos cultivados en nuestro huerto y recetas tradicionales heredadas. Disfrute del auténtico gallo pinto, la olla de carne, tortillas palmeadas al instante, picadillos sazonados y carnes ahumadas con el toque único del humo de madera.'
    : 'In our restaurant, there is no room for the artificial. Every dish is prepared over a wood stove, using fresh ingredients grown in our garden and inherited traditional recipes. Enjoy authentic gallo pinto, beef stew (olla de carne), handmade tortillas, seasoned hash (picadillos), and smoked meats with the unique touch of wood fire.';
  
  const buttonLabel = isEs ? 'Conozca nuestro restaurante' : 'Discover our restaurant';

  return (
    <section className="py-20 sm:py-28 bg-cream">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Column */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/gallery/traditional-food/casona-los-rodriguez-typical-food-la-fortuna-003.webp"
                alt={isEs ? 'Comida típica costarricense' : 'Typical Costa Rican food'}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-md mt-6">
              <Image
                src="/images/gallery/traditional-food/casona-los-rodriguez-typical-food-la-fortuna-006.webp"
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
