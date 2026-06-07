import { Locale, locales } from "@/lib/i18n";
import CancellationPage from "@/components/pages/CancellationPage";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <CancellationPage locale={locale as Locale} />;
}
