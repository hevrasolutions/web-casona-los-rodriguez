export type GalleryCategory =
  | 'casona'
  | 'restaurante-cocina'
  | 'comida'
  | 'granja-trapiche'
  | 'cultura'
  | 'familia';

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  src: string;
  altES: string;
  altEN: string;
}

export const galleryItems: GalleryItem[] = [
  // La Casona e Instalaciones
  {
    id: 'casona-ext-01',
    category: 'casona',
    src: '/images/gallery/farmhouse-facilities/casona-los-rodriguez-farmhouse-la-fortuna-001.webp',
    altES: 'Fachada exterior de Casona Los Rodríguez con cielo despejado',
    altEN: 'Exterior facade of Casona Los Rodríguez with clear blue sky'
  },
  {
    id: 'casona-ext-02',
    category: 'casona',
    src: '/images/gallery/farmhouse-facilities/casona-los-rodriguez-colonial-blue-facade-001.webp',
    altES: 'Fachada colonial azul de la casona vista desde los árboles',
    altEN: 'Colonial blue facade of the farmhouse seen from the trees'
  },
  {
    id: 'casona-int-01',
    category: 'casona',
    src: '/images/gallery/farmhouse-facilities/casona-los-rodriguez-traditional-dining-room-001.webp',
    altES: 'Comedor rústico con muebles antiguos y decoración colonial',
    altEN: 'Rustic dining room with antique furniture and colonial decor'
  },
  {
    id: 'casona-int-02',
    category: 'casona',
    src: '/images/gallery/farmhouse-facilities/casona-los-rodriguez-traditional-dining-room-002.webp',
    altES: 'Sala de estar antigua con pinturas de colección',
    altEN: 'Antique living room with collectible paintings'
  },
  {
    id: 'casona-porch-01',
    category: 'casona',
    src: '/images/gallery/farmhouse-facilities/casona-los-rodriguez-rural-farmhouse-costa-rica-001.webp',
    altES: 'Entrada de la casona con mecedoras antiguas de madera y marcos azules',
    altEN: 'Farmhouse entrance with antique wooden rocking chairs and blue frames'
  },
  {
    id: 'casona-vintage-01',
    category: 'casona',
    src: '/images/gallery/farmhouse-facilities/casona-los-rodriguez-vintage-furniture-001.webp',
    altES: 'Mobiliario rústico antiguo y adornos históricos',
    altEN: 'Rustic vintage furniture and historical ornaments'
  },

  // Restaurante y Cocina a la Leña
  {
    id: 'kitchen-stove-01',
    category: 'restaurante-cocina',
    src: '/images/gallery/wood-fired-kitchen/casona-los-rodriguez-traditional-kitchen-la-fortuna-001.webp',
    altES: 'Cocina tradicional de leña con fogón encendido',
    altEN: 'Traditional wood-fired kitchen with burning stove'
  },
  {
    id: 'kitchen-cooking-01',
    category: 'restaurante-cocina',
    src: '/images/gallery/cooking/casona-los-rodriguez-woodfire-cooking-001.webp',
    altES: 'Tortillas de maíz palmeadas cociéndose al calor del fuego',
    altEN: 'Handmade corn tortillas cooking over the heat of the fire'
  },
  {
    id: 'kitchen-stove-02',
    category: 'restaurante-cocina',
    src: '/images/gallery/wood-fired-kitchen/casona-los-rodriguez-traditional-kitchen-la-fortuna-002.webp',
    altES: 'Ollas de barro tradicionales reposando en el fogón de leña',
    altEN: 'Traditional clay pots resting on the wood-fired stove'
  },
  {
    id: 'kitchen-prep-01',
    category: 'restaurante-cocina',
    src: '/images/gallery/wood-fired-kitchen/casona-los-rodriguez-cooking-over-wood-fire-001.webp',
    altES: 'Visitantes aprendiendo a palmear tortillas tradicionales',
    altEN: 'Visitors learning how to make traditional handmade tortillas'
  },

  // Comida Típica
  {
    id: 'food-plate-01',
    category: 'comida',
    src: '/images/gallery/traditional-food/casona-los-rodriguez-typical-food-la-fortuna-003.webp',
    altES: 'Almuerzo tradicional costarricense servido sobre hoja de plátano',
    altEN: 'Traditional Costa Rican lunch served on banana leaf'
  },
  {
    id: 'food-plate-02',
    category: 'comida',
    src: '/images/gallery/traditional-food/casona-los-rodriguez-typical-food-la-fortuna-006.webp',
    altES: 'Chicharrón de cerdo crujiente con yuca y limón',
    altEN: 'Crispy pork chunks with cassava and lime'
  },
  {
    id: 'food-plate-03',
    category: 'comida',
    src: '/images/gallery/traditional-food/casona-los-rodriguez-typical-food-la-fortuna-001.webp',
    altES: 'Picadillo de carne con verduras frescas',
    altEN: 'Minced meat hash with fresh vegetables'
  },
  {
    id: 'food-plate-04',
    category: 'comida',
    src: '/images/gallery/traditional-food/casona-los-rodriguez-typical-food-la-fortuna-008.webp',
    altES: 'Gallo pinto tradicional costarricense con huevo, plátano y queso fresco',
    altEN: 'Traditional Costa Rican gallo pinto with egg, plantain, and fresh cheese'
  },

  // Granja, Huerta y Trapiche
  {
    id: 'farm-tour-01',
    category: 'granja-trapiche',
    src: '/images/gallery/farm-garden-trapiche/casona-los-rodriguez-rural-farm-experience-001.webp',
    altES: 'Recorrido guiado por el huerto de plantas medicinales y cultivos',
    altEN: 'Guided tour through the medicinal herb garden and crops'
  },
  {
    id: 'farm-tour-02',
    category: 'granja-trapiche',
    src: '/images/gallery/farm-garden-trapiche/casona-los-rodriguez-rural-farm-experience-002.webp',
    altES: 'Visitantes interactuando con los animales en la granja rural',
    altEN: 'Visitors interacting with animals at the rural farm'
  },
  {
    id: 'farm-trapiche-placeholder',
    category: 'granja-trapiche',
    src: 'TODO_IMAGE',
    altES: 'Trapiche tradicional tirado por bueyes para molienda de caña',
    altEN: 'Traditional oxen-driven sugar mill for grinding cane'
  },

  // Eventos y Cultura
  {
    id: 'culture-dance-01',
    category: 'cultura',
    src: '/images/gallery/culture-events/casona-los-rodriguez-costa-rican-cultural-event-001.webp',
    altES: 'Presentación interactiva de bailes típicos folclóricos costarricenses',
    altEN: 'Interactive performance of typical Costa Rican folk dances'
  },

  // Familia y Experiencias
  {
    id: 'family-exp-01',
    category: 'familia',
    src: '/images/gallery/family-experiences/casona-los-rodriguez-family-cultural-experience-001.webp',
    altES: 'Grupo de turistas sonriendo durante el taller de tortillas a la leña',
    altEN: 'Group of tourists smiling during the wood-fired tortilla workshop'
  },
  {
    id: 'family-exp-02',
    category: 'familia',
    src: '/images/gallery/family-experiences/casona-los-rodriguez-family-cultural-experience-002.webp',
    altES: 'Familia compartiendo un almuerzo típico tradicional en el comedor de madera',
    altEN: 'Family sharing a traditional typical lunch in the wooden dining room'
  }
];
