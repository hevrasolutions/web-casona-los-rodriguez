import { Locale, locales } from "@/lib/i18n";
import { experiences } from "@/data/experiences";
import ExperienceDetailPage from "@/components/pages/ExperienceDetailPage";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  locales.forEach((locale) => {
    experiences.forEach((exp) => {
      params.push({
        locale,
        slug: exp.slug,
      });
    });
  });
  return params;
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  return <ExperienceDetailPage locale={locale as Locale} slug={slug} />;
}
