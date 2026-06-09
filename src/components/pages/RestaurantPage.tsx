import React from 'react';
import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import BookingCTA from '../ui/BookingCTA';

interface RestaurantPageProps {
  locale: Locale;
}

export default function RestaurantPage({ locale }: RestaurantPageProps) {
  const isEs = locale === 'es';

  const title = isEs ? 'Restaurante típico a la leña en La Fortuna' : 'Traditional wood-fired restaurant in La Fortuna';
  const subtitle = isEs ? 'Sabores del Campo Costarricense' : 'Flavors of the Costa Rican Countryside';

  // Menu lists
  const menuCategories = [
    {
      title: isEs ? 'Especialidades a la Leña' : 'Wood-Fired Specialties',
      items: [
        { name: isEs ? 'Carne ahumada a la leña' : 'Wood-fired smoked meat', desc: isEs ? 'Lomito de cerdo seleccionado ahumado lentamente con maderas aromáticas.' : 'Premium pork loin slowly smoked with aromatic local woods.' },
        { name: isEs ? 'Carne en salsa tradicional' : 'Beef in typical sauce', desc: isEs ? 'Dados de carne tierna cocinados a fuego lento en salsa criolla costarricense.' : 'Tender beef cubes slow-cooked in traditional Costa Rican Creole sauce.' },
        { name: isEs ? 'Arroz con pollo tradicional' : 'Traditional chicken and rice', desc: isEs ? 'El clásico platillo de fiesta tico, sazonado al fogón y servido con papas tostadas.' : 'The classic Costa Rican party dish, seasoned over the hearth, served with potato chips.' },
        { name: isEs ? 'Arroz arreglado típico' : 'Special seasoned rice', desc: isEs ? 'Arroz cocinado al caldo de leña combinado con carne de cerdo desmechada y vegetales.' : 'Seasoned rice cooked in wood-fired broth mixed with shredded pork and vegetables.' },
      ]
    },
    {
      title: isEs ? 'Sopas, Caldos y Cremas' : 'Soups & Stews',
      items: [
        { name: isEs ? 'Olla de carne tradicional' : 'Olla de carne (Beef stew)', desc: isEs ? 'Sustancioso caldo criollo con trozos de res y verduras locales (yuca, elote, ayote, papa).' : 'Rich Creole broth with beef cuts and local root vegetables (cassava, corn, squash, potatoes).' },
        { name: isEs ? 'Sopa de tomate casera' : 'Homemade tomato soup', desc: isEs ? 'Crema natural de tomates asados al fogón con un toque de albahaca fresca.' : 'Natural fire-roasted tomato cream soup with a touch of fresh basil.' },
        { name: isEs ? 'Sopa de ayote' : 'Squash soup', desc: isEs ? 'Crema aterciopelada de ayote sazón asado en las brasas de leña.' : 'Velvety cream soup of sweet squash roasted in wood embers.' },
      ]
    },
    {
      title: isEs ? 'Entradas y Acompañamientos' : 'Sides & Appetizers',
      items: [
        { name: isEs ? 'Picadillo de raíz de papaya' : 'Papaya root hash (Picadillo)', desc: isEs ? 'Picadillo tradicional preparado con raíz de papaya verde rallada y carne de cerdo molida.' : 'Traditional hash prepared with grated green papaya root and ground pork.' },
        { name: isEs ? 'Frijoles frescos molidos' : 'Fresh refried beans', desc: isEs ? 'Frijoles negros de la zona cocinados a la leña y molidos con especias criollas.' : 'Local black beans cooked over wood fire and mashed with Creole spices.' },
        { name: isEs ? 'Tortillas palmeadas de maíz' : 'Handmade corn tortillas', desc: isEs ? 'Tortillas de maíz hechas a mano por nuestra familia y cocinadas al instante en el comal.' : 'Corn tortillas patted by hand by our family and cooked instantly on the clay griddle.' },
        { name: isEs ? 'Ensaladas frescas de la huerta' : 'Fresh garden salads', desc: isEs ? 'Hojas verdes crujientes, tomates cherry y aderezos caseros de la huerta a su plato.' : 'Crisp green leaves, cherry tomatoes, and homemade dressings from the garden to your plate.' },
      ]
    }
  ];

  // Dietary options
  const dietaryOptions = [
    { title: isEs ? 'Vegetariano' : 'Vegetarian', desc: isEs ? 'Variedad de platillos a base de plantas y vegetales frescos de la huerta.' : 'Variety of plant-based dishes featuring fresh garden vegetables.' },
    { title: isEs ? 'Vegano' : 'Vegan', desc: isEs ? 'Opciones 100% libres de productos animales, incluyendo tortillas y picadillos veganos.' : 'Options 100% free of animal products, including vegan tortillas and hashes.' },
    { title: isEs ? 'Libre de Gluten' : 'Gluten-Free', desc: isEs ? 'Platillos naturalmente libres de trigo, cebada o centeno, como nuestros arroces y sopas.' : 'Dishes naturally free of wheat, barley, or rye, such as our rice bowls and stews.' }
  ];

  // Group services
  const groupServices = [
    { title: isEs ? 'Servicio de Preorden' : 'Pre-order Service', desc: isEs ? 'Coordinación previa para grupos pequeños y familias que desean tener su almuerzo servido al llegar.' : 'Prior coordination for small groups and families wishing to have their lunch ready upon arrival.' },
    { title: isEs ? 'Servicio Buffet Tradicional' : 'Traditional Buffet', desc: isEs ? 'Montaje de bufés típicos en bandejas de barro sobre el fogón de leña, ideal para agencias y operadores.' : 'Setup of typical buffets in clay trays over the wood-fired stove, ideal for operators and agencies.' },
    { title: isEs ? 'Menús Personalizados' : 'Custom Menus', desc: isEs ? 'Diseño de opciones adaptadas a los requisitos dietéticos y preferencias específicas de su grupo.' : 'Custom menu choices tailored to the dietary requirements and specific preferences of your group.' }
  ];

  // 4 tasty food photos
  const foodPhotos = [
    '/images/gallery/traditional-food/casona-los-rodriguez-typical-food-la-fortuna-003.webp',
    '/images/gallery/traditional-food/casona-los-rodriguez-typical-food-la-fortuna-006.webp',
    '/images/gallery/traditional-food/casona-los-rodriguez-typical-food-la-fortuna-005.webp',
    '/images/gallery/traditional-food/casona-los-rodriguez-typical-food-la-fortuna-008.webp',
  ];

  return (
    <>
      {/* Hero Header */}
      <section className="bg-primary text-white-warm py-24 relative overflow-hidden text-center border-b border-wood/50">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/gallery/wood-fired-kitchen/casona-los-rodriguez-traditional-kitchen-la-fortuna-001.webp')] pointer-events-none" />
        <div className="absolute inset-0 bg-primary/85 pointer-events-none" />

        <Container className="relative z-10 py-6">
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
        </Container>
      </section>

      {/* Culinary Detail section */}
      <section className="py-20 sm:py-28 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text details */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <SectionTitle
                title={isEs ? 'Nuestra Cocina a la Leña' : 'Our Wood-Fired Kitchen'}
                subtitle={isEs ? 'Gastronomía local' : 'Local Cuisine'}
                align="left"
                className="mb-6"
              />
              <p className="text-base sm:text-lg text-primary/80 font-body leading-relaxed mb-6">
                {isEs
                  ? 'En Casona Los Rodríguez, cocinar a la leña no es una opción turística, es nuestra forma de vida. El humo de maderas seleccionadas aporta un aroma profundo y una textura única a cada ingrediente. Mantenemos encendidos nuestros fogones tradicionales todos los días para palmear las tortillas de maíz criollo, sazonar los picadillos al calor de la ceniza y ahumar los cortes de carne que servimos en nuestra mesa.'
                  : 'At Casona Los Rodríguez, wood-fired cooking is not a touristic gimmick—it is our way of life. The smoke of selected local timbers brings a deep aroma and unique texture to every single ingredient. We keep our traditional stoves burning every day to pat local corn tortillas, slow-cook hashes over hot ashes, and smoke the cuts of meat that we serve on our family table.'}
              </p>
              <p className="text-base sm:text-lg text-primary/80 font-body leading-relaxed">
                {isEs
                  ? 'Nuestros platillos son elaborados con ingredientes cosechados directamente en nuestra huerta orgánica o traídos por pequeños agricultores locales de La Fortuna.'
                  : 'Our dishes are crafted using ingredients harvested directly from our organic vegetable garden or brought in by local small farmers from La Fortuna.'}
              </p>
            </div>

            {/* Side Image */}
            <div className="lg:col-span-6 relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-xl border border-sand/30 bg-sand/10">
              <Image
                src="/images/gallery/wood-fired-kitchen/casona-los-rodriguez-traditional-kitchen-la-fortuna-002.webp"
                alt={isEs ? 'Ollas de barro en fogón de leña tradicional' : 'Clay pots on traditional wood-fired stove'}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Menu Showcase Section */}
      <section className="py-20 sm:py-28 bg-cream/40 border-t border-b border-sand/15">
        <Container>
          <SectionTitle
            title={isEs ? 'El Menú Destacado' : 'Featured Menu'}
            subtitle={isEs ? 'Recetas Familiares Ancestrales' : 'Ancestral Family Recipes'}
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {menuCategories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white-warm border border-sand/20 rounded-lg p-6 sm:p-8 shadow-sm flex flex-col h-full"
              >
                <h3 className="font-heading text-xl font-bold text-primary mb-6 pb-2 border-b border-gold/20 uppercase tracking-wide">
                  {cat.title}
                </h3>
                <ul className="flex flex-col gap-6">
                  {cat.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex flex-col text-left">
                      <h4 className="font-heading text-base sm:text-lg font-bold text-primary mb-1">
                        {item.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-primary/70 font-body leading-relaxed">
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Dietary Requirements Section */}
      <section className="py-20 sm:py-28 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text information */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
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
            </div>

            {/* List options */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              {dietaryOptions.map((opt, idx) => (
                <div
                  key={idx}
                  className="bg-white-warm border border-sand/20 p-6 rounded-lg shadow-sm text-center flex flex-col items-center justify-center min-h-[160px]"
                >
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
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Services for Groups and Agencies */}
      <section className="py-20 sm:py-28 bg-cream/40 border-t border-b border-sand/15">
        <Container>
          <SectionTitle
            title={isEs ? 'Servicios para Grupos y Operadores' : 'Services for Groups & Operators'}
            subtitle={isEs ? 'Capacidades Comerciales B2B' : 'B2B Commercial Solutions'}
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {groupServices.map((srv, idx) => (
              <div
                key={idx}
                className="bg-white-warm border border-sand/20 rounded-lg p-6 sm:p-8 shadow-sm flex flex-col text-left justify-between"
              >
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
            ))}
          </div>
        </Container>
      </section>

      {/* Dishes Photo Grid */}
      <section className="py-20 bg-cream">
        <Container>
          <SectionTitle
            title={isEs ? 'De Nuestro Fogón a la Mesa' : 'From Hearth to Table'}
            subtitle={isEs ? 'Galería del Sabor' : 'Flavor Gallery'}
            className="mb-14"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {foodPhotos.map((src, idx) => (
              <div
                key={idx}
                className="relative aspect-square w-full rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 bg-sand/10"
              >
                <Image
                  src={src}
                  alt={isEs ? `Plato típico tradicional ${idx + 1}` : `Traditional typical dish ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-wood text-white-warm text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-wood/30 opacity-60 pointer-events-none" />
        <Container className="relative z-10 flex flex-col items-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 tracking-wide max-w-xl leading-tight">
            {isEs ? '¿Listo para degustar la sazón tradicional?' : 'Ready to taste traditional seasoning?'}
          </h2>
          <p className="text-sm sm:text-base text-white-warm/85 max-w-xl mb-8 font-body">
            {isEs
              ? 'Reserve su almuerzo o cena campesina como parte de nuestras experiencias gastronómicas.'
              : 'Book your farmhouse lunch or dinner as part of our culinary experiences.'}
          </p>
          <BookingCTA variant="secondary" size="lg" className="min-w-[220px]">
            {isEs ? 'Reservar experiencia gastronómica' : 'Book culinary experience'}
          </BookingCTA>
        </Container>
      </section>
    </>
  );
}
