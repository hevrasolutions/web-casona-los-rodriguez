import { Locale, locales } from "@/lib/i18n";
import GalleryPage from "@/components/pages/GalleryPage";
import { getDynamicGalleryItems } from "@/lib/gallery";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const items = getDynamicGalleryItems();
  return <GalleryPage locale={locale as Locale} initialItems={items} />;
}
