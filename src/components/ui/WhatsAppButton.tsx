'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Dictionary } from '@/dictionaries/es';

interface WhatsAppButtonProps {
  locale: string;
  dict: Dictionary;
}

export default function WhatsAppButton({ locale, dict }: WhatsAppButtonProps) {
  const pathname = usePathname();
  const phoneNumber = '50688094163';
  const defaultMessage =
    locale === 'es'
      ? 'Hola, me gustaría solicitar más información sobre las experiencias en Casona Los Rodríguez.'
      : 'Hello, I would like to request more information about the experiences at Casona Los Rodríguez.';

  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // En los detalles de experiencia la barra de reserva móvil ocupa el borde
  // inferior; ahí el flotante solo se muestra en desktop.
  const segments = pathname?.split('/').filter(Boolean) ?? [];
  const isExperienceDetail =
    segments.length === 3 &&
    (segments[1] === 'experiencias' || segments[1] === 'experiences');

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${
        isExperienceDetail ? 'hidden lg:flex' : 'flex'
      } fixed bottom-6 right-6 z-50 items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white-warm p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group`}
      aria-label={dict.whatsapp.tooltip}
    >
      <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.69 1.97 14.221.944 11.6.944c-5.448 0-9.873 4.372-9.878 9.802-.002 1.748.465 3.454 1.353 4.96l-.98 3.58 3.673-.951zm12.864-6.55c-.328-.164-1.94-.958-2.24-1.07-.3-.109-.519-.164-.738.164-.22.327-.847 1.07-1.039 1.288-.19.22-.382.245-.71.082-.328-.164-1.386-.51-2.64-1.63-1.002-.894-1.678-2.001-1.875-2.328-.197-.328-.02-.505.143-.668.148-.147.329-.382.493-.573.164-.19.219-.328.328-.546.11-.218.055-.41-.027-.573-.082-.164-.738-1.782-1.01-2.438-.266-.64-.537-.552-.738-.562-.19-.01-.41-.01-.629-.01-.218 0-.574.082-.875.41-.3.327-1.15 1.12-1.15 2.73s1.176 3.16 1.336 3.37c.16.21 2.312 3.532 5.6 4.95 2.736 1.18 3.293.945 4.496.832 1.203-.112 2.24-.916 2.55-1.802.31-.887.31-1.649.218-1.802-.09-.153-.328-.245-.656-.41z" />
      </svg>
      <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 origin-right whitespace-nowrap bg-primary text-white-warm text-xs px-3 py-1.5 rounded shadow-lg mr-2 font-medium">
        {dict.whatsapp.tooltip}
      </span>
    </a>
  );
}
