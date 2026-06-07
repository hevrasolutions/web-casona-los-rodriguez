import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  className = '',
  align = 'center',
  light = false,
}: SectionTitleProps) {
  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col ${alignments[align]} ${className}`}>
      {subtitle && (
        <span className="font-subheading text-lg sm:text-xl text-gold mb-2 block font-medium">
          {subtitle}
        </span>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
          light ? 'text-white-warm' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      <div className="mt-3 w-16 h-1 bg-terracotta rounded-full" />
    </div>
  );
}
