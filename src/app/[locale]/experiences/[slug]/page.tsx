import type { Metadata } from "next";
import { Locale, locales } from "@/lib/i18n";
import { experiences } from "@/data/experiences";
import { findExperience, getExperienceMetadata } from "@/lib/experienceSeo";
import ExperienceDetailPage from "@/components/pages/ExperienceDetailPage";
import ExperienceDetailV2 from "@/components/pages/ExperienceDetailV2";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  locales.forEach((locale) => {
    experiences.forEach((exp) => {
      params.push({
        locale,
        slug: exp.slugEN,
      });
    });
  });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  return getExperienceMetadata(locale, slug);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const experience = findExperience(locale, slug);

  // La presencia de contenido extendido activa la plantilla nueva (rollout por fases)
  if (experience?.overview) {
    return (
      <ExperienceDetailV2 experience={experience} locale={locale as Locale} />
    );
  }

  return <ExperienceDetailPage locale={locale as Locale} slug={slug} />;
}
