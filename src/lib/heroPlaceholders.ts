/**
 * Diccionario centralizado de micro-placeholders WebP en base64 para imágenes de hero.
 * Permite que Next.js pinte el fondo con los tonos reales de la foto en el frame 0 (0ms),
 * eliminando el parpadeo de cajas oscuras o vacías antes de la carga por red.
 */

export const HERO_PLACEHOLDERS: Record<string, string> = {
  // Restaurante
  "/images/gallery/restaurant-kitchen/casona-los-rodriguez-traditional-dining-room-004.webp":
    "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADwAQCdASoQAAoABUB8JbACdAEPSZJrsAAA4Zvg3AG3rwXXptTNnKGB/+YIfcJQC0BSCTrAO9DR8WPguqYS2UGmLAAAAA==",
  // Nosotros / About
  "/images/gallery/farmhouse/casona-los-rodriguez-historic-farmhouse-001.webp":
    "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADwAQCdASoQAAoABUB8JbACdH8AFe+ERYAA/lts4VzSydJrkXuxsZzeSKfOxGW3H+c5ZzChiHgbx88Qk6D3qoY/oE8EZc0AAAA=",
  // Agencias, Términos, Cancelación, Hero básico
  "/images/hero/casona-los-rodriguez-exterior-001.webp":
    "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAACQAQCdASoQAAoABUB8JbACdABXcgAA/oGQ77yNYhd3nigFJAaYwIUSdcvGpgn1eeQCtGMyMO/adj+vVLLK3EwAAAA=",
  // Experiencias catálogo
  "/images/gallery/traditional-events/casona-los-rodriguez-costa-rican-cultural-event-001.webp":
    "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoQAAoABUB8JZgCdAC2Ub5GAAD+YR9hhhe9HE69fKRuBTu8fIVK0AJ/ThVwocS3eqqs2MQ1f4WAAA==",
  // Galería
  "/images/gallery/farmhouse/casona-los-rodriguez-rustic-facilities-002.webp":
    "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoQAAoABUB8JYgCdADC/LWU8ADNobWwz/ggc3CquZb2goPTFBIriRfmdp5w/bfgJ02xvFKUoCZNs7M7yvlUpFOlzDAAAA==",
  // Contacto
  "/images/gallery/farmhouse/casona-los-rodriguez-rustic-facilities-001.webp":
    "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAAAQAgCdASoQAAoABUB8JbACdAEU2YEwV5uAAP6mCfKc5rewok0EFdEq8DyHcXJ/o1l3lAmFHhIu6vzGLD8SUZC554AAAA==",
  // Tour Histórico Cultural detalle
  "/images/gallery/farmhouse/casona-los-rodriguez-farmhouse-la-fortuna-001.webp":
    "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAACQAQCdASoQAAoABUB8JbACdABXcgAA/oGQ77yNYhd3nigFJAaYwIUSdcvGpgn1eeQCtGMyMO/adj+vVLLK3EwAAAA=",
  // Cooking Class detalle
  "/images/gallery/restaurant-kitchen/costa-rican-cooking-class-la-fortuna-casona-los-rodriguez.webp":
    "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAABQAgCdASoQAAoABUB8JaACdAECwgxoqfP2DOAAzEi6g7vzTJUm2cJ3zE/9vSmKqWSNFv3N9AAeoSZM08wbLy+4wusg8QD9/x6qgQeV/3kAAA==",
  // Day Pass detalle
  "/images/gallery/farm-trapiche/pigs-rural-farm-la-fortuna-costa-rica.webp":
    "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAACwAQCdASoQAAoABUB8JbACdACYGoIAAPry0b8Lr2xr/si9N8I3og3loaMPCMmNS3Qk323bZUTQGgep6BykANrE26F8YBgAAAA=",
};

// Fallback cálido rústico universal basado en la fachada de la Casona
export const DEFAULT_HERO_BLUR =
  "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAACQAQCdASoQAAoABUB8JbACdABXcgAA/oGQ77yNYhd3nigFJAaYwIUSdcvGpgn1eeQCtGMyMO/adj+vVLLK3EwAAAA=";

export function getHeroBlur(imageSrc: string): string {
  return HERO_PLACEHOLDERS[imageSrc] || DEFAULT_HERO_BLUR;
}
