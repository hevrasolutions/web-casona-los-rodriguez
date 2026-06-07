import { Locale } from "@/lib/i18n";
import ExperiencesPage from "@/components/pages/ExperiencesPage";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ExperiencesPage locale={locale as Locale} />;
}
