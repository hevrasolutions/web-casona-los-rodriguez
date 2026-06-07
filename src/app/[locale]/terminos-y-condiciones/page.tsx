import { Locale, locales } from "@/lib/i18n";
import TermsPage from "@/components/pages/TermsPage";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <TermsPage locale={locale as Locale} />;
}
