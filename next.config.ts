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
    ];
  },
};

export default nextConfig;
