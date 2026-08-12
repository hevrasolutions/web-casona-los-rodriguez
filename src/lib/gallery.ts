import fs from 'fs';
import path from 'path';
import { galleryMetadata } from '@/data/gallery-metadata';

export type GalleryCategory =
  | 'farmhouse'
  | 'restaurant-kitchen'
  | 'typical-food'
  | 'farm-trapiche'
  | 'traditional-events'
  | 'customer-experiences';

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  src: string;
  altES: string;
  altEN: string;
}

// Map folder names to clean default titles if metadata is missing
const categoryDefaults: Record<GalleryCategory, { es: string; en: string }> = {
  farmhouse: {
    es: 'Instalaciones y detalles de La Casona',
    en: 'La Casona facilities and rustic details',
  },
  'restaurant-kitchen': {
    es: 'Cocina a la leña tradicional',
    en: 'Traditional wood-fired kitchen cooking',
  },
  'typical-food': {
    es: 'Comida típica tradicional costarricense',
    en: 'Traditional Costa Rican typical food',
  },
  'farm-trapiche': {
    es: 'Finca orgánica, huerta y trapiche de bueyes',
    en: 'Organic farm, garden, and traditional sugar mill',
  },
  'traditional-events': {
    es: 'Presentaciones culturales y bailes típicos',
    en: 'Cultural presentations and typical folk dances',
  },
  'customer-experiences': {
    es: 'Experiencias de nuestros clientes',
    en: 'Our customer experiences',
  },
};

const VALID_IMAGE_EXTENSIONS = ['.webp', '.jpg', '.jpeg', '.png', '.gif'];

/**
 * Filenames of images inside public/images/gallery/ that should NOT be displayed on the gallery page.
 * Add any image filename here to exclude it from the public gallery page.
 */
export const EXCLUDED_GALLERY_IMAGES: string[] = [
  'costa-rica-5-colones-bill-v2.png',
  'costa-rica-5-colones-bill.png',
];

export function getDynamicGalleryItems(): GalleryItem[] {
  const galleryItems: GalleryItem[] = [];
  const galleryDir = path.join(process.cwd(), 'public/images/gallery');

  if (!fs.existsSync(galleryDir)) {
    console.warn(`Gallery directory does not exist at ${galleryDir}`);
    return [];
  }

  try {
    const categories = fs.readdirSync(galleryDir).filter((file) => {
      return fs.statSync(path.join(galleryDir, file)).isDirectory();
    }) as GalleryCategory[];

    categories.forEach((category) => {
      // Validate category exists in our types
      if (!categoryDefaults[category]) {
        return; // Skip folders that are not part of our official gallery categories
      }

      const categoryPath = path.join(galleryDir, category);
      const files = fs.readdirSync(categoryPath);

      files.forEach((file) => {
        const ext = path.extname(file).toLowerCase();
        if (!VALID_IMAGE_EXTENSIONS.includes(ext)) {
          return; // Skip non-image files
        }

        const metadata = galleryMetadata[file];

        // Skip images that are explicitly excluded (via list or metadata flag)
        if (EXCLUDED_GALLERY_IMAGES.includes(file) || metadata?.excluded === true) {
          return;
        }

        const id = `${category}-${path.basename(file, ext)}`;
        const src = `/images/gallery/${category}/${file}`;

        // Generate alt fallback based on filename or category default
        let altES = metadata?.altES;
        let altEN = metadata?.altEN;

        if (!altES || !altEN) {
          // Clean filename for fallback
          const cleanName = path.basename(file, ext)
            .replace(/casona-los-rodriguez-/g, '')
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase());
            
          altES = altES || `${categoryDefaults[category].es} - ${cleanName}`;
          altEN = altEN || `${categoryDefaults[category].en} - ${cleanName}`;
        }

        galleryItems.push({
          id,
          category,
          src,
          altES,
          altEN,
        });
      });
    });
  } catch (error) {
    console.error('Error reading dynamic gallery items:', error);
  }

  return galleryItems;
}
