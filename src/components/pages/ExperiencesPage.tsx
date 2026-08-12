'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Locale, getDictionary } from '@/lib/i18n';
import { experiences } from '@/data/experiences';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import ExperienceFilter from '../experiences/ExperienceFilter';
import ExperienceGrid from '../experiences/ExperienceGrid';
import FadeIn from '../ui/FadeIn';

interface ExperiencesPageProps {
  locale: Locale;
}

export default function ExperiencesPage({ locale }: ExperiencesPageProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const dict = getDictionary(locale);
  const isEs = locale === 'es';

  const title = isEs ? 'Nuestras Experiencias' : 'Our Experiences';
  const subtitle = isEs ? 'Actividades Culturales y Gastronómicas' : 'Cultural & Culinary Activities';
  
  const description = isEs
    ? 'Descubra el auténtico campo costarricense a través de nuestros tours interactivos. Cocine a la leña, explore la finca, extraiga jugo de caña en el trapiche de bueyes y baile al ritmo del folclor local.'
    : 'Discover the authentic Costa Rican countryside through our interactive tours. Cook over wood fire, explore the farm, press sugarcane at the oxen-driven mill, and dance to local folk rhythms.';

  // Filter logic
  const filtered = activeCategory === 'all'
    ? experiences
    : experiences.filter((exp) => exp.category === activeCategory);

  // 7 Strategic SEO/GEO FAQs
  const faqs = [
    {
      q: isEs ? '¿Los precios de las experiencias incluyen impuestos (IVA)?' : 'Do experience prices include sales tax (VAT)?',
      a: isEs
        ? 'No, las tarifas publicadas no incluyen el 13% de IVA costarricense. Este se calculará a la hora de confirmar su reserva.'
        : 'No, published rates do not include the 13% Costa Rican VAT (IVA). This will be calculated upon confirming your booking.',
    },
    {
      q: isEs ? '¿Dónde se ubica Casona Los Rodríguez y qué tan cerca está del centro de La Fortuna?' : 'Where is Casona Los Rodríguez located and how far is it from downtown La Fortuna?',
      a: isEs
        ? 'Nos encontramos en Sona Fluca, La Fortuna de San Carlos, a solo 15 minutos en vehículo del parque central y muy cerca de las principales zonas de hoteles y termales del Volcán Arenal.'
        : 'We are located in Sona Fluca, La Fortuna, San Carlos — just a 15-minute drive from the central park and close to major Arenal Volcano hot springs and hotels.',
    },
    {
      q: isEs ? '¿Ofrecen opciones vegetarianas, veganas o libres de gluten en la comida a la leña?' : 'Do you offer vegetarian, vegan, or gluten-free options for the wood-fired meals?',
      a: isEs
        ? '¡Sí! Todas nuestras comidas tradicionales a la leña cuentan con alternativas vegetarianas, veganas y libres de gluten adaptadas. Solo solicítelo al momento de reservar o por WhatsApp.'
        : 'Yes! All our traditional wood-fired meals can be adapted with delicious vegetarian, vegan, and gluten-free alternatives. Simply inform us when booking or via WhatsApp.',
    },
    {
      q: isEs ? '¿Qué ropa se recomienda usar y qué sucede si llueve durante la experiencia?' : 'What clothing is recommended and what happens if it rains during the tour?',
      a: isEs
        ? 'Recomendamos ropa cómoda y fresca, calzado cerrado para caminar y capote o sombrilla. Nuestras áreas culturales y comedores son techados y protegidos, por lo que las actividades se disfrutan cómodamente bajo cualquier clima.'
        : 'We recommend comfortable lightweight clothing, closed walking shoes, and a rain jacket or umbrella. Our cultural spaces and dining areas are fully covered and protected, so activities run comfortably in all weather.',
    },
    {
      q: isEs ? '¿Las experiencias se ofrecen en inglés para visitantes internacionales?' : 'Are the experiences conducted in English for international visitors?',
      a: isEs
        ? 'Sí, contamos con guías locales 100% bilingües (español e inglés) que acompañan y facilitan cada momento de la experiencia histórica, culinaria y cultural.'
        : 'Yes, we have 100% bilingual local guides (Spanish & English) who facilitate and translate every part of the historical, culinary, and cultural experience.',
    },
    {
      q: isEs ? '¿Cómo reservo y confirmo mi espacio?' : 'How do I book and confirm my spot?',
      a: isEs
        ? 'Puede reservar por WhatsApp dando clic en el botón de la experiencia de su elección. Atendemos de forma directa y personalizada para coordinar fecha, hora y dietas especiales.'
        : 'You can book via WhatsApp by clicking the button on your chosen experience. We assist you directly and personally to coordinate date, time, and special diets.',
    },
    {
      q: isEs ? '¿Es adecuado para familias con niños e infantes?' : 'Is it suitable for families with small children and infants?',
      a: isEs
        ? '¡Totalmente! Es una experiencia 100% familiar. Los niños (5 a 10 años) tienen tarifa reducida y los infantes (0 a 4 años) entran gratis en todas las actividades.'
        : 'Absolutely! It is a 100% family-friendly experience. Children (5 to 10 years old) have discounted rates, and infants (0 to 4 years old) join for free on all activities.',
    },
  ];

  // FAQ Schema JSON-LD for SEO/GEO
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  // Trust pillars
  const pillars = [
    {
      icon: '🪵',
      title: isEs ? '100% Cocina a la Leña' : '100% Wood-Fired Cooking',
      desc: isEs ? 'Gastronomía campesina sin procesados' : 'Traditional non-industrial seasoning',
    },
    {
      icon: '🎋',
      title: isEs ? 'Trapiche Interactivo' : 'Hands-On Sugarcane Mill',
      desc: isEs ? '100% amigable con los animales (sin tracción animal)' : 'Animal-friendly hands-on experience',
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: isEs ? 'Experiencia Familiar' : 'Family-Friendly Hub',
      desc: isEs ? 'Tarifas reducidas y niños 0-4 años gratis' : 'Discounted kids rates, ages 0-4 free',
    },
    {
      icon: '📍',
      title: isEs ? 'A 15 Min del Centro' : '15 Min from Downtown',
      desc: isEs ? 'Ubicación accesible en Sona Fluca, La Fortuna' : 'Easy access in Sona Fluca, La Fortuna',
    },
  ];

  return (
    <>
      {/* Bloque 1: Page Header Hero */}
      <section className="bg-stone-950 text-white-warm py-20 relative overflow-hidden text-center border-b border-wood/50">
        <Image
          src="/images/gallery/traditional-events/casona-los-rodriguez-costa-rican-cultural-event-001.webp"
          alt={isEs ? 'Evento cultural costarricense en La Casona Los Rodríguez' : 'Costa Rican Cultural Event at Casona Los Rodríguez'}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-black/60 to-primary/80 pointer-events-none" />
        
        <Container className="relative z-10 py-6 flex flex-col items-center justify-center text-center">
          <FadeIn direction="up" className="w-full flex flex-col items-center text-center">
            <span className="font-subheading text-base sm:text-lg text-gold font-medium uppercase tracking-wider mb-3 block text-center mx-auto">
              {subtitle}
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-center mx-auto max-w-4xl">
              {title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white-warm/80 max-w-2xl mx-auto leading-relaxed font-body text-center">
              {description}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Bloque 2: Trust Pillars Bar */}
      <section className="bg-cream-dark/60 py-8 border-b border-sand/20 overflow-hidden">
        <Container>
          <FadeIn direction="up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {pillars.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-2xl mb-1">{item.icon}</span>
                  <h3 className="font-heading text-sm font-bold text-primary">{item.title}</h3>
                  <p className="text-xs text-primary/70 font-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Bloque 3: Catalog Grid Section */}
      <section className="py-16 sm:py-24 bg-cream overflow-hidden">
        <Container>
          {/* Filters */}
          <FadeIn direction="up">
            <ExperienceFilter
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              locale={locale}
            />
          </FadeIn>

          {/* Grid with staggered card animation */}
          <ExperienceGrid
            experiences={filtered}
            locale={locale}
            dict={dict}
          />
        </Container>
      </section>

      {/* Bloque 4: Decision Matrix / Quick Comparison Section */}
      <section className="py-16 sm:py-24 bg-cream/40 border-t border-b border-sand/15 overflow-hidden">
        <Container>
          <FadeIn direction="up">
            <SectionTitle
              title={isEs ? 'Encuentre su Experiencia Ideal' : 'Find Your Ideal Experience'}
              subtitle={isEs ? 'Compare de un vistazo la actividad perfecta para su viaje' : 'At-a-glance comparison to pick the perfect activity for your trip'}
              className="mb-12"
            />

            <div className="overflow-x-auto rounded-lg border border-sand/30 shadow-sm">
              <table className="w-full text-left border-collapse bg-white-warm text-sm font-body">
                <thead>
                  <tr className="bg-primary text-white-warm font-heading text-base border-b border-wood">
                    <th className="p-4 font-semibold">{isEs ? 'Experiencia' : 'Experience'}</th>
                    <th className="p-4 font-semibold text-center">{isEs ? 'Duración' : 'Duration'}</th>
                    <th className="p-4 font-semibold text-center">{isEs ? 'Alimentación' : 'Meals'}</th>
                    <th className="p-4 font-semibold text-center">{isEs ? 'Precios (Adulto / Niño)' : 'Prices (Adult / Child)'}</th>
                    <th className="p-4 font-semibold">{isEs ? 'Ideal para...' : 'Best for...'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand/20">
                  {experiences.map((exp) => (
                    <tr key={exp.slug} className="hover:bg-cream/20 transition-colors">
                      <td className="p-4 font-bold text-primary font-heading">
                        {isEs ? exp.title : exp.titleEN}
                      </td>
                      <td className="p-4 text-primary/80 text-center">
                        {isEs ? exp.duration : exp.durationEN}
                      </td>
                      <td className="p-4 text-primary/80 text-center">
                        {exp.slug.includes('cocina') || exp.slug.includes('cooking')
                          ? (isEs ? 'Clase de Cocina (Incluye Comida)' : 'Cooking Class (Meal Included)')
                          : (isEs ? 'Almuerzo o Cena a la Leña' : 'Wood-Fired Lunch or Dinner')}
                      </td>
                      <td className="p-4 text-terracotta font-semibold text-center whitespace-nowrap">
                        ${exp.pricing.adult} / ${exp.pricing.child || 0}
                      </td>
                      <td className="p-4 text-xs text-primary/70 max-w-xs truncate md:max-w-md md:whitespace-normal font-medium">
                        {exp.slug.includes('historico') && (isEs ? 'Familias, grupos y amantes de la cultura' : 'Families, groups & culture lovers')}
                        {(exp.slug.includes('cocina') || exp.slug.includes('cooking')) && (isEs ? 'Aficionados a la gastronomía costarricense' : 'Foodies & culinary enthusiasts')}
                        {exp.slug.includes('day-pass') && (isEs ? 'Viajeros independientes a su propio ritmo' : 'Independent travellers at own pace')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Bloque 5: Group & Agency Inquiry Banner */}
      <section className="py-12 bg-primary/5 border-b border-sand/20 text-center overflow-hidden">
        <Container className="max-w-3xl">
          <FadeIn direction="up">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary mb-2">
              {isEs ? '¿Viaja en un grupo grande o representa una agencia de viajes?' : 'Travelling with a large group or representing a travel agency?'}
            </h3>
            <p className="text-sm text-primary/75 font-body mb-6">
              {isEs
                ? 'Ofrecemos paquetes especiales, horarios personalizados y cotizaciones a la medida para grupos de más de 10 personas y operadores de turismo.'
                : 'We offer special packages, custom schedules, and tailored quotes for groups over 10 people and tour operators.'}
            </p>
            <a
              href={isEs ? '/es/agencias' : '/en/agencies'}
              className="inline-flex items-center gap-2 text-xs font-bold text-terracotta hover:text-terracotta/80 uppercase tracking-wider underline decoration-gold underline-offset-4"
            >
              {isEs ? 'Solicitar cotización para grupos y agencias →' : 'Request group & agency quote →'}
            </a>
          </FadeIn>
        </Container>
      </section>

      {/* FAQ Schema JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Bloque 6: FAQ Section */}
      <section className="py-16 sm:py-24 bg-cream overflow-hidden">
        <Container className="max-w-3xl">
          <FadeIn direction="up">
            <SectionTitle
              title={isEs ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
              subtitle={isEs ? 'Todo lo que necesita saber antes de visitar' : 'Everything you need to know before visiting'}
              className="mb-14"
            />
          </FadeIn>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 80}>
                <details
                  className="group bg-white-warm border border-sand/25 rounded-lg shadow-sm overflow-hidden transition-all duration-200"
                  open={idx === 0}
                >
                  <summary className="font-heading text-base sm:text-lg font-bold text-primary p-5 cursor-pointer flex items-center justify-between list-none hover:text-terracotta transition-colors select-none">
                    <span className="flex items-start gap-2.5 pr-4">
                      <span className="text-gold font-bold">Q.</span>
                      <span>{faq.q}</span>
                    </span>
                    <span className="text-gold font-bold text-xl transition-transform duration-300 group-open:rotate-180 flex-shrink-0">
                      ▾
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-1 text-sm text-primary/80 font-body leading-relaxed border-t border-sand/15 bg-cream/20">
                    {faq.a}
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
