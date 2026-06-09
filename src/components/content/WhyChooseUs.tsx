import React from 'react';
import { Locale } from '@/lib/i18n';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

interface WhyChooseUsProps {
  locale: Locale;
}

export default function WhyChooseUs({ locale }: WhyChooseUsProps) {
  const isEs = locale === 'es';

  const cards = [
    {
      title: isEs ? 'Cocina 100% a la leña' : '100% Wood-fired kitchen',
      desc: isEs
        ? 'Saboree la auténtica gastronomía costarricense preparada al fogón de leña con ingredientes locales frescos. Una tradición culinaria viva que refleja el verdadero sabor del campo tico.'
        : 'Taste the authentic flavors of Costa Rican cuisine cooked over an open wood fire with fresh local ingredients, a living culinary tradition that captures the true soul of the Costa Rican countryside.',
      icon: (
        <svg className="w-8 h-8 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
    },
    {
      title: isEs ? 'Clases de cocina típica' : 'Traditional Cooking Classes',
      desc: isEs
        ? 'Aprenda a preparar platos tradicionales costarricenses junto a nuestra familia en La Fortuna. Una experiencia práctica y auténtica que lo conecta de cerca con la gastronomía del campo.'
        : 'Learn to cook classic Costa Rican dishes alongside our local family in La Fortuna. A hands-on, intimate experience that brings you inside the authentic flavors and traditions of the countryside.',
      icon: (
        <svg className="w-8 h-8 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        </svg>
      ),
    },
    {
      title: isEs ? 'Música y bailes típicos' : 'Folk music & dances',
      desc: isEs
        ? 'Viva la alegría del folclor costarricense con música en vivo y bailes típicos que invitan a participar. Una experiencia cultural que celebra con orgullo la identidad de Costa Rica.'
        : 'Experience the joy of Costa Rican folklore through live music and traditional dance performances that invite you to join in — a vibrant celebration of our national cultural identity.',
      icon: (
        <svg className="w-8 h-8 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
    },
    {
      title: isEs ? 'Más de 120 años de historia' : 'Over 120 Years of History',
      desc: isEs
        ? 'Explore una casona original construida en 1890 para el expresidente Rafael Yglesias Castro. Un patrimonio cultural vivo en La Fortuna que conecta el pasado con el presente de Costa Rica.'
        : 'Explore an original farmhouse built in 1890 for Costa Rican president Rafael Yglesias Castro — a living cultural landmark in La Fortuna that bridges the past and present of Costa Rica.',
      icon: (
        <svg className="w-8 h-8 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-cream/40">
      <Container>
        <SectionTitle
          title={isEs ? 'Cuatro razones para vivir esta experiencia.' : 'Four reasons to live this experience.'}
          subtitle={isEs ? 'Lo que nos hace únicos' : 'What makes us unique'}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white-warm border border-sand/20 rounded-lg p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
            >
              <div className="mb-5 p-3 bg-terracotta/5 rounded-lg text-terracotta">
                {card.icon}
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-primary mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-primary/75 font-body leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
