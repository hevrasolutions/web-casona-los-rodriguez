import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Nunito_Sans } from "next/font/google";
import "../globals.css";
import { locales, Locale, getDictionary } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const heading = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const subheading = Lora({
  weight: ["400"],
  style: ["italic"],
  subsets: ["latin"],
  variable: "--font-subheading",
  display: "swap",
});

const body = Nunito_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Casona Los Rodríguez | Experiencia Cultural Costarricense"
    : "Casona Los Rodríguez | Costa Rican Cultural Experience";

  const description = isEs
    ? "Una experiencia cultural costarricense en una casona rural de más de 120 años, donde el visitante cocina, come, aprende, baila y revive las tradiciones del campo tico."
    : "A Costa Rican cultural experience in a 120+ year old rural farmhouse, where visitors cook, eat, learn, dance, and revive countryside traditions.";

  return {
    metadataBase: new URL("https://casonalosrodriguez.cr"),
    title,
    description,
    icons: {
      icon: [
        {
          url: "/images/logo/casona-los-rodriguez-icono-favicon-32.svg",
          type: "image/svg+xml",
        },
      ],
    },
    openGraph: {
      title,
      description,
      url: "https://casonalosrodriguez.cr",
      siteName: "Casona Los Rodríguez",
      locale: isEs ? "es_CR" : "en_US",
      type: "website",
      images: [
        {
          url: "/images/hero/casona-los-rodriguez-exterior-001.webp",
          width: 1200,
          height: 630,
          alt: "Casona Los Rodríguez",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero/casona-los-rodriguez-exterior-001.webp"],
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dict = getDictionary(locale as Locale);

  return (
    <html
      lang={locale}
      className={`${heading.variable} ${subheading.variable} ${body.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream text-primary font-body overflow-x-hidden">
        <Header locale={locale as Locale} dict={dict} />
        <main className="flex-grow">{children}</main>
        <Footer locale={locale as Locale} dict={dict} />
        <WhatsAppButton locale={locale as Locale} dict={dict} />
      </body>
    </html>
  );
}
