import { Locale, locales } from "@/lib/i18n";
import GalleryPage from "@/components/pages/GalleryPage";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <GalleryPage locale={locale as Locale} />;
}
