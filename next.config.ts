import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Slug renombrado en Fase 1 (Next emite 308, equivalente permanente de 301)
      {
        source: "/:locale/experiences/historical-cultural-tour-la-fortuna",
        destination: "/:locale/experiences/cultural-heritage-tour-la-fortuna",
        permanent: true,
      },
      // Slugs renombrados en Fase 2 (Cooking Class)
      {
        source: "/:locale/experiencias/clase-cocina-tia-yami",
        destination: "/:locale/experiencias/clase-cocina-tradicional-la-fortuna",
        permanent: true,
      },
      {
        source: "/:locale/experiences/cooking-class-aunt-yami",
        destination: "/:locale/experiences/traditional-cooking-class-la-fortuna",
        permanent: true,
      },
      // Slugs renombrados en Fase 3 (Day Pass)
      {
        source: "/:locale/experiencias/day-pass-casona-finca",
        destination: "/:locale/experiencias/casona-farm-day-pass-la-fortuna",
        permanent: true,
      },
      {
        source: "/:locale/experiences/day-pass-casona-farm",
        destination: "/:locale/experiences/casona-farm-day-pass-la-fortuna",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
