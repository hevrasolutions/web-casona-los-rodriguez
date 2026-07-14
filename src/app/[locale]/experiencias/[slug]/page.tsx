import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale, locales } from "@/lib/i18n";
import { experiences } from "@/data/experiences";
import { findExperience, getExperienceMetadata } from "@/lib/experienceSeo";
import ExperienceDetailV2 from "@/components/pages/ExperienceDetailV2";

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

  if (!experience) {
    notFound();
  }

  return (
    <ExperienceDetailV2 experience={experience} locale={locale as Locale} />
  );
}
