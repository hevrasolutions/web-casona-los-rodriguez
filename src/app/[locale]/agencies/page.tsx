import { Locale, locales } from "@/lib/i18n";
import AgenciesPage from "@/components/pages/AgenciesPage";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <AgenciesPage locale={locale as Locale} />;
}
