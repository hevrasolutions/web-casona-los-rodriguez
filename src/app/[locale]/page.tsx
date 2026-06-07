import { Locale, getDictionary } from "@/lib/i18n";
import HeroCarousel from "@/components/content/HeroCarousel";
import TrustBar from "@/components/content/TrustBar";
import StorySection from "@/components/content/StorySection";
import WhyChooseUs from "@/components/content/WhyChooseUs";
import FeaturedExperiences from "@/components/experiences/FeaturedExperiences";
import RestaurantHighlight from "@/components/content/RestaurantHighlight";
import HomeGallery from "@/components/content/HomeGallery";
import AgencyCTA from "@/components/content/AgencyCTA";
import LocationBrief from "@/components/content/LocationBrief";
import FinalCTA from "@/components/content/FinalCTA";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  return (
    <>
      <HeroCarousel locale={locale as Locale} dict={dict} />
      <TrustBar locale={locale as Locale} />
      <StorySection locale={locale as Locale} />
      <WhyChooseUs locale={locale as Locale} />
      <FeaturedExperiences locale={locale as Locale} dict={dict} />
      <RestaurantHighlight locale={locale as Locale} />
      <HomeGallery locale={locale as Locale} />
      <AgencyCTA locale={locale as Locale} />
      <LocationBrief locale={locale as Locale} dict={dict} />
      <FinalCTA locale={locale as Locale} />
    </>
  );
}
