import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import BookingCTA from '../ui/BookingCTA';
import FullViewportParallax from '../ui/FullViewportParallax';
import FadeIn from '../ui/FadeIn';

interface RestaurantPageProps {
  locale: Locale;
}

export default function RestaurantPage({ locale }: RestaurantPageProps) {
  const isEs = locale === 'es';

  const title = isEs ? 'Restaurante típico a la leña en La Fortuna' : 'Traditional wood-fired restaurant in La Fortuna';
  const subtitle = isEs ? 'Sabores del Campo Costarricense' : 'Flavors of the Costa Rican Countryside';

  // Dietary options
  const dietaryOptions = [
    { title: isEs ? 'Vegetariano' : 'Vegetarian', desc: isEs ? 'Variedad de platillos a base de plantas y vegetales frescos de la huerta.' : 'Variety of plant-based dishes featuring fresh garden vegetables.' },
    { title: isEs ? 'Vegano' : 'Vegan', desc: isEs ? 'Opciones 100% libres de productos animales, incluyendo tortillas y picadillos veganos.' : 'Options 100% free of animal products, including vegan tortillas and hashes.' },
    { title: isEs ? 'Libre de Gluten' : 'Gluten-Free', desc: isEs ? 'Platillos naturalmente libres de trigo, cebada o centeno, como nuestros arroces y sopas.' : 'Dishes naturally free of wheat, barley, or rye, such as our rice bowls and stews.' }
  ];

  // Group services
  const groupServices = [
    { title: isEs ? 'Servicio de Preorden' : 'Pre-order Service', desc: isEs ? 'Coordinación previa para grupos pequeños y familias que desean tener su almuerzo servido al llegar.' : 'Prior coordination for small groups and families wishing to have their lunch ready upon arrival.' },
    { title: isEs ? 'Servicio Buffet Tradicional' : 'Traditional Buffet', desc: isEs ? 'Montaje de bufés típicos en bandejas tradicionales sobre el fogón de leña, ideal para agencias y operadores.' : 'Setup of typical buffets in traditional trays over the wood-fired stove, ideal for operators and agencies.' },
    { title: isEs ? 'Menús Personalizados' : 'Custom Menus', desc: isEs ? 'Diseño de opciones adaptadas a los requisitos dietéticos y preferencias específicas de su grupo.' : 'Custom menu choices tailored to the dietary requirements and specific preferences of your group.' }
  ];

  // 4 tasty food photos
  const foodPhotos = [
    '/images/gallery/typical-food/casona-los-rodriguez-typical-food-la-fortuna-003.webp',
    '/images/gallery/typical-food/casona-los-rodriguez-typical-food-la-fortuna-006.webp',
    '/images/gallery/typical-food/casona-los-rodriguez-typical-food-la-fortuna-005.webp',
    '/images/gallery/typical-food/casona-los-rodriguez-typical-food-la-fortuna-008.webp',
  ];

  return (
    <>
      {/* Bloque 1: Hero Header */}
      <section className="relative bg-primary text-white-warm py-24 overflow-hidden text-center border-b border-wood/50">
        <Image
          src="/images/gallery/restaurant-kitchen/casona-los-rodriguez-traditional-dining-room-004.webp"
          alt={isEs ? 'Ambiente rústico y acogedor del comedor de La Casona' : 'Cozy rustic atmosphere in the dining room of La Casona'}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/85 pointer-events-none" />

        <Container className="relative z-10 py-6">
          <FadeIn direction="up">
            <span className="font-subheading text-base sm:text-lg text-gold font-medium uppercase tracking-wider mb-3 block">
              {subtitle}
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 max-w-4xl mx-auto leading-tight">
              {title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white-warm/80 max-w-2xl mx-auto leading-relaxed font-body">
              {isEs
                ? 'Le invitamos a redescubrir los sabores auténticos del campo costarricense. Nuestra cocina es un homenaje a las tradiciones de antaño.'
                : 'We invite you to rediscover the authentic flavors of the Costa Rican countryside. Our kitchen is a tribute to the traditions of the past.'}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Bloque 2: Culinary Detail section (2 columnas: Texto a la izq, Imagen a la der) */}
      <section className="py-20 sm:py-28 bg-cream overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text details (izquierda) */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <FadeIn direction="left">
                <SectionTitle
                  title={isEs ? 'Nuestra Cocina a la Leña' : 'Our Wood-Fired Kitchen'}
                  subtitle={isEs ? 'Gastronomía local' : 'Local Cuisine'}
                  align="left"
                  className="mb-6"
                />
                <p className="text-base sm:text-lg text-primary/80 font-body leading-relaxed mb-6">
                  {isEs
                    ? 'El Fogón de la Casona es donde la tradición cobra vida: maderas seleccionadas, el fogón encendido cada día y recetas que trascienden generaciones. Aquí palmeamos tortillas de maíz criollo, sazonamos picadillos al calor de las brasas y ahumamos los cortes de carne que definen el auténtico sabor tico.'
                    : 'El Fogón de la Casona is where tradition comes alive: hand-selected firewood, the hearth burning every day, and recipes that transcend generations. Here we hand-press corn tortillas, season picadillos over glowing embers, and slow-smoke cuts of meat that define the authentic flavor of Costa Rica.'}
                </p>
                <p className="text-base sm:text-lg text-primary/80 font-body leading-relaxed">
                  {isEs
                    ? 'Muchos de nuestros ingredientes vienen de nuestra propia huerta o directamente de pequeños agricultores de la zona de La Fortuna, apoyando la economía local y garantizando la frescura que hace única cada visita a la Casona.'
                    : 'Many of our ingredients come from our own garden or directly from small-scale local farmers in the La Fortuna area, supporting the local economy and ensuring the freshness that makes every visit to La Casona unique.'}
                </p>
              </FadeIn>
            </div>

            {/* Side Image (derecha) */}
            <div className="lg:col-span-6 w-full">
              <FadeIn direction="right">
                <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-xl border border-sand/30 bg-sand/10">
                  <Image
                    src="/images/gallery/restaurant-kitchen/casona-los-rodriguez-traditional-kitchen-la-fortuna-002.webp"
                    alt={isEs ? 'Ollas tradicionales en fogón de leña' : 'Traditional pots on wood-fired stove'}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Bloque 3: Menu Showcase Section */}
      <section className="py-20 sm:py-28 bg-cream/40 border-t border-b border-sand/15 text-center overflow-hidden">
        <Container className="max-w-4xl flex flex-col items-center">
          <FadeIn direction="up">
            <span className="font-subheading text-base sm:text-lg text-gold font-medium uppercase tracking-wider mb-3 block">
              {isEs ? 'Nuestra Gastronomía' : 'Our Gastronomy'}
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 max-w-2xl leading-tight mx-auto">
              {isEs ? 'Una propuesta culinaria hecha para usted' : 'A Culinary Experience Made for You'}
            </h2>

            <p className="text-base sm:text-lg text-primary/80 font-body leading-relaxed max-w-2xl mb-12 mx-auto">
              {isEs
                ? 'En Casona Los Rodríguez no trabajamos con un menú fijo — diseñamos propuestas gastronómicas personalizadas según sus gustos, el tamaño del grupo y las necesidades de cada visitante, incluyendo opciones vegetarianas, veganas y para restricciones alimentarias especiales.'
                : 'At Casona Los Rodríguez we do not work with a fixed menu — we design personalized culinary proposals based on your tastes, group size, and dietary needs, including vegetarian, vegan, and allergy-friendly options.'}
            </p>
          </FadeIn>

          {/* Dish list: 2 columnas con dirección left / right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 w-full text-left mb-12 max-w-3xl mx-auto">
            {/* Left Column */}
            <FadeIn direction="left">
              <div className="flex flex-col gap-5">
                {[
                  isEs ? 'Casados típicos' : 'Traditional Costa Rican casado',
                  isEs ? 'Carne ahumada a la leña' : 'Wood-smoked beef',
                  isEs ? 'Chicharrones tradicionales con yuca' : 'Traditional chicharrones with yuca',
                  isEs ? 'Olla de carne tradicional' : 'Traditional olla de carne',
                ].map((plate, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                    <span className="font-body font-medium text-primary text-base sm:text-lg leading-snug">
                      {plate}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Right Column */}
            <FadeIn direction="right">
              <div className="flex flex-col gap-5">
                {[
                  isEs ? 'Tortillas palmeadas de maíz' : 'Hand-pressed corn tortillas',
                  isEs ? 'Picadillo de raíz de papaya' : 'Papaya root picadillo',
                  isEs ? 'Chorreadas de maíz con natilla' : 'Corn chorreadas with natilla cream',
                ].map((plate, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                    <span className="font-body font-medium text-primary text-base sm:text-lg leading-snug">
                      {plate}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="up">
            <hr className="w-full border-t border-cream-dark/60 mb-8 max-w-3xl" />

            <p className="font-subheading italic text-gold text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
              {isEs
                ? '...y muchos platillos típicos más, preparados a la leña y adaptados a sus preferencias.'
                : '...and many more traditional dishes, wood-fired and tailored to your preferences.'}
            </p>

            <div className="flex flex-col items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href={
                  isEs
                    ? 'https://wa.me/50660817929?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20propuesta%20gastron%C3%B3mica%20de%20Casona%20Los%20Rodr%C3%ADguez.'
                    : 'https://wa.me/50660817929?text=Hello,%20I%20would%20like%20to%20request%20more%20information%20about%20the%20culinary%20proposal%20at%20Casona%20Los%20Rodr%C3%ADguez.'
                }
                external={true}
                className="shadow-md min-w-[220px]"
              >
                {isEs ? 'Reservar ahora' : 'Book Now'}
              </Button>

              <p className="text-xs sm:text-sm text-primary/70 font-body max-w-md leading-relaxed mt-1">
                {isEs ? (
                  <>
                    ¿Viajás en grupo o representás una agencia?{' '}
                    <Link href="/es/agencias" className="text-blue-colonial hover:underline font-semibold">
                      Conocé nuestra sección de Agencias &rarr;
                    </Link>
                  </>
                ) : (
                  <>
                    Traveling with a group or a travel agency?{' '}
                    <Link href="/en/agencies" className="text-blue-colonial hover:underline font-semibold">
                      Visit our Agencies &rarr; section
                    </Link>
                  </>
                )}
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Bloque 4: Dietary Requirements Section */}
      <section className="py-20 sm:py-28 bg-cream overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text information (izquierda) */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <FadeIn direction="left">
                <SectionTitle
                  title={isEs ? 'Opciones Especiales' : 'Special Dietary Options'}
                  subtitle={isEs ? 'Alimentación Consciente' : 'Mindful Eating'}
                  align="left"
                  className="mb-6"
                />
                <p className="text-sm sm:text-base text-primary/80 font-body leading-relaxed mb-6">
                  {isEs
                    ? 'Nos aseguramos de que todos nuestros visitantes disfruten de la gastronomía rural. Si usted o sus acompañantes tienen requisitos dietéticos específicos, por favor infórmenos al reservar. Adaptamos nuestras recetas sin perder el sabor de leña tradicional.'
                    : 'We make sure that all our visitors can enjoy rural gastronomy. If you or your companions have specific dietary requirements, please let us know when booking. We adapt our recipes without losing the traditional wood-fired flavor.'}
                </p>
              </FadeIn>
            </div>

            {/* List options (derecha - tarjetas apareciendo una a una) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              {dietaryOptions.map((opt, idx) => (
                <FadeIn key={idx} direction="up" delay={idx * 100}>
                  <div className="bg-white-warm border border-sand/20 p-6 rounded-lg shadow-sm text-center flex flex-col items-center justify-center min-h-[160px] h-full">
                    <span className="w-8 h-8 rounded-full bg-jungle/10 flex items-center justify-center text-jungle mb-3">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <h4 className="font-heading text-lg font-bold text-primary mb-1">
                      {opt.title}
                    </h4>
                    <p className="text-xs text-primary/70 font-body leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Bloque 5: Services for Groups and Agencies */}
      <section className="py-20 sm:py-28 bg-cream/40 border-t border-b border-sand/15 overflow-hidden">
        <Container>
          <FadeIn direction="up">
            <SectionTitle
              title={isEs ? 'Una experiencia adaptada a cada grupo' : 'An Experience Tailored to Every Group'}
              subtitle={isEs ? 'Para grupos y agencias' : 'For Groups and Agencies'}
              className="mb-16"
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {groupServices.map((srv, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 120}>
                <div className="bg-white-warm border border-sand/20 rounded-lg p-6 sm:p-8 shadow-sm flex flex-col text-left justify-between h-full">
                  <div>
                    <h4 className="font-heading text-lg sm:text-xl font-bold text-primary mb-3">
                      {srv.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-primary/75 font-body leading-relaxed mb-6">
                      {srv.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-sand/15">
                    <span className="text-xs text-gold font-bold uppercase tracking-wider">
                      {isEs ? 'Disponible bajo reserva' : 'Available upon reservation'}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Bloque 6: Dishes Photo Grid (fotos de platos una a una) */}
      <section className="py-20 bg-cream overflow-hidden">
        <Container>
          <FadeIn direction="up">
            <SectionTitle
              title={isEs ? 'De Nuestro Fogón a la Mesa' : 'From Hearth to Table'}
              subtitle={isEs ? 'Galería del Sabor' : 'Flavor Gallery'}
              className="mb-14"
            />
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {foodPhotos.map((src, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 80}>
                <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 bg-sand/10">
                  <Image
                    src={src}
                    alt={isEs ? `Plato típico tradicional ${idx + 1}` : `Traditional typical dish ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Bloque 7: CTA final con FullViewportParallax */}
      <FullViewportParallax
        bgImageSrc="/images/gallery/restaurant-kitchen/authentic-costa-rican-food-experience.webp"
        bgImageAlt={isEs ? 'Experiencia gastronómica tradicional costarricense' : 'Traditional Costa Rican culinary experience'}
        overlayOpacityClass="bg-primary/80"
      >
        <Container className="flex flex-col items-center select-none">
          <FadeIn direction="none">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-2xl leading-tight text-white-warm mb-6">
              {isEs ? '¿Listo para degustar la sazón tradicional?' : 'Ready to taste traditional seasoning?'}
            </h2>
            <p className="text-base sm:text-lg text-white-warm/80 font-body max-w-xl mb-10 leading-relaxed mx-auto">
              {isEs
                ? 'Reserve su almuerzo o cena campesina como parte de nuestras experiencias gastronómicas.'
                : 'Book your farmhouse lunch or dinner as part of our culinary experiences.'}
            </p>
            <BookingCTA
              variant="primary"
              size="lg"
              className="shadow-xl px-10 py-4 hover:scale-[1.03] transition-transform duration-200"
            >
              {isEs ? 'Reservar experiencia gastronómica' : 'Book culinary experience'}
            </BookingCTA>
          </FadeIn>
        </Container>
      </FullViewportParallax>
    </>
  );
}
