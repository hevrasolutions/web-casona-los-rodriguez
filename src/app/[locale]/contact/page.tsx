import { Locale, locales } from "@/lib/i18n";
import ContactPage from "@/components/pages/ContactPage";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ContactPage locale={locale as Locale} />;
}
