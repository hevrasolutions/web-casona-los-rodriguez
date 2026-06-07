import { Locale, locales } from "@/lib/i18n";
import AboutPage from "@/components/pages/AboutPage";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <AboutPage locale={locale as Locale} />;
}
