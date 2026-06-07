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
        ? 'Sienta el aroma y descubra el sabor inigualable de la comida campesina costarricense preparada al fogón de madera, una tradición que nutre el alma.'
        : 'Feel the aroma and discover the unmatched flavor of Costa Rican farmhouse food prepared over a wood stove, a tradition that feeds the soul.',
      icon: (
        <svg className="w-8 h-8 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
    },
    {
      title: isEs ? 'Trapiche de bueyes' : 'Oxen sugarcane mill',
      desc: isEs
        ? 'Reviva el proceso ancestral de molienda de caña impulsado por bueyes, deguste el jugo de caña fresco y aprenda sobre el dulce de tapa tradicional.'
        : 'Relive the ancestral sugarcane milling process driven by oxen, taste fresh cane juice, and learn about traditional block sugar production.',
      icon: (
        <svg className="w-8 h-8 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        </svg>
      ),
    },
    {
      title: isEs ? 'Música y bailes típicos' : 'Folk music & dances',
      desc: isEs
        ? 'Conéctese con la alegría de nuestro folclor a través de música en vivo y bailes tradicionales que invitan al visitante a participar y bailar.'
        : 'Connect with the joy of our folklore through live music and traditional dances that invite visitors to participate and dance along.',
      icon: (
        <svg className="w-8 h-8 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
    },
    {
      title: isEs ? 'Historia viva de Costa Rica' : 'Costa Rica living history',
      desc: isEs
        ? 'Explore una casona original de más de un siglo de antigüedad, interactúe con una familia local de agricultores y viva la cultura en primera persona.'
        : 'Explore an original century-old farmhouse, interact with a local farming family, and experience the culture first-hand.',
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
          title={isEs ? '¿Por qué elegirnos?' : 'Why Choose Us?'}
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
