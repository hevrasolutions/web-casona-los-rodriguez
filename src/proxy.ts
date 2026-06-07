import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from '@/lib/i18n';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  // Ignore api routes, static files (images, assets, favicon, etc.)
  const isAsset = pathname.startsWith('/_next') || 
                  pathname.startsWith('/images') || 
                  pathname.startsWith('/logo') || 
                  pathname.startsWith('/placeholders') || 
                  pathname.startsWith('/favicon.ico') ||
                  pathname.startsWith('/api') ||
                  pathname.includes('.');

  if (isAsset) return;

  const locale = defaultLocale;
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, static files, api etc.)
    '/((?!_next|api|images|logo|placeholders|.*\\..*).*)',
  ],
};
