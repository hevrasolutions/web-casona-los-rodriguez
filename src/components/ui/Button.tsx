import React from 'react';
import Link from 'next/link';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = BaseProps & 
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never; external?: never })
    | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; external?: boolean })
  );

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-terracotta text-white-warm hover:bg-terracotta/90 active:bg-terracotta/95 shadow-md hover:shadow-lg focus:ring-terracotta',
    secondary: 'bg-gold text-primary hover:bg-gold/90 active:bg-gold/95 shadow-sm hover:shadow-md focus:ring-gold',
    ghost: 'border-2 border-wood text-wood hover:bg-wood hover:text-white-warm active:bg-wood/90 focus:ring-wood'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3 text-base'
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if ('href' in props && props.href) {
    const { href, external, ...anchorProps } = props as React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; external?: boolean };
    if (external) {
      return (
        <a
          href={href}
          className={combinedStyles}
          target="_blank"
          rel="noopener noreferrer"
          {...anchorProps}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={combinedStyles} {...buttonProps}>
      {children}
    </button>
  );
}
