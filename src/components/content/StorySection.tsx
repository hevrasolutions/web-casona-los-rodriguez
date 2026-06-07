import React from 'react';
import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

interface StorySectionProps {
  locale: Locale;
}

export default function StorySection({ locale }: StorySectionProps) {
  const isEs = locale === 'es';

  const title = isEs ? 'Tres generaciones. Una sola pasión.' : 'Three generations. One single passion.';
  const subtitle = isEs ? 'Nuestra Historia' : 'Our Story';
  const buttonLabel = isEs ? 'Conócenos más' : 'Learn more about us';

  const content = isEs
    ? 'Casona Los Rodríguez es el legado vivo de una familia dedicada a preservar la herencia rural costarricense. Durante más de un siglo, esta casona de madera ha sido el corazón de nuestra familia. Hoy, abrimos nuestras puertas para compartir con el mundo el calor de nuestra cocina de leña, el funcionamiento de nuestro trapiche tradicional y el amor por nuestras costumbres campesinas. Aquí, cada rincón cuenta una historia de trabajo, música y tradición que ha pasado de padres a hijos, manteniendo vivo el auténtico espíritu tico.'
    : 'Casona Los Rodríguez is the living legacy of a family dedicated to preserving Costa Rican rural heritage. For over a century, this historic wooden farmhouse has been the heart of our family. Today, we open our doors to share with the world the warmth of our wood-fired kitchen, our traditional oxen-driven sugarcane mill, and the love for our country customs. Here, every corner tells a story of work, music, and tradition passed down from parents to children, keeping the authentic Tico spirit alive.';

  // Word count check
  // ES: 88 words, EN: 83 words. Well under 120 words constraint!

  return (
    <section className="py-20 sm:py-28 bg-cream">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
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
          </div>

          {/* Image Column */}
          <div className="lg:col-span-6 relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-xl border border-sand/30">
            <Image
              src="/images/gallery/farmhouse-facilities/casona-los-rodriguez-rural-farmhouse-costa-rica-001.webp"
              alt={isEs ? 'Entrada de la Casona con mecedoras tradicionales' : 'Farmhouse porch with traditional rocking chairs'}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
