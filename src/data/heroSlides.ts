export interface HeroSlide {
  id: string;
  image: string;
  labelES: string;
  labelEN: string;
  titleES: string;
  titleEN: string;
  descriptionES: string;
  descriptionEN: string;
  altES: string;
  altEN: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'casona-historica',
    image: '/images/hero/casona-los-rodriguez-exterior-001.webp',
    labelES: 'Casona histórica',
    labelEN: 'Historic farmhouse',
    titleES: 'Más de 120 años de tradición rural costarricense',
    titleEN: 'More than 120 years of Costa Rican rural tradition',
    descriptionES: 'Una casa antigua donde la historia, la familia y las costumbres del campo siguen vivas en La Fortuna.',
    descriptionEN: 'An old farmhouse where history, family and countryside traditions are still alive in La Fortuna.',
    altES: 'Fachada exterior de la casona histórica de Casona Los Rodríguez bajo el cielo de La Fortuna',
    altEN: 'Exterior facade of the historic farmhouse at Casona Los Rodríguez under the sky of La Fortuna'
  },
  {
    id: 'cocina-lena',
    image: '/images/gallery/restaurant-kitchen/casona-los-rodriguez-woodfire-cooking-001.webp',
    labelES: 'Cocina a la leña',
    labelEN: 'Wood-fire cooking',
    titleES: 'Sabores cocinados como siempre ha sido',
    titleEN: 'Flavors cooked the way they always have been',
    descriptionES: 'Prepare tortillas, descubra sabores tradicionales y viva la cocina costarricense desde adentro.',
    descriptionEN: 'Prepare tortillas, discover traditional flavors and experience Costa Rican cooking from the inside.',
    altES: 'Cocción tradicional en fogón de leña en Casona Los Rodríguez',
    altEN: 'Traditional wood-fired cooking stove at Casona Los Rodríguez'
  },
  {
    id: 'comida-tipica',
    image: '/images/gallery/typical-food/casona-los-rodriguez-typical-food-la-fortuna-001.webp',
    labelES: 'Comida típica',
    labelEN: 'Traditional food',
    titleES: 'Sabores costarricenses preparados a la leña',
    titleEN: 'Costa Rican flavors cooked over a wood fire',
    descriptionES: 'Disfrute platillos tradicionales cocinados como antes, con ingredientes frescos and el calor del fogón.',
    descriptionEN: 'Enjoy traditional dishes prepared the old way, with fresh ingredients and the warmth of the wood-fired kitchen.',
    altES: 'Platillos típicos costarricenses preparados a la leña',
    altEN: 'Traditional Costa Rican typical dishes prepared over wood fire'
  },
  {
    id: 'granja-trapiche',
    image: '/images/gallery/farm-trapiche/casona-los-rodriguez-rural-farm-experience-001.webp',
    labelES: 'Granja y trapiche',
    labelEN: 'Farm and trapiche',
    titleES: 'Viva la tradición rural entre animales, huerta y trapiche',
    titleEN: 'Experience rural tradition with farm animals, garden and trapiche',
    descriptionES: 'Recorra la finca, conozca el trapiche tradicional y conecte con la vida campesina costarricense.',
    descriptionEN: "Walk through the farm, discover the traditional trapiche and connect with Costa Rica's countryside life.",
    altES: 'Trapiche tradicional tirado por bueyes en Casona Los Rodríguez',
    altEN: 'Traditional oxen-driven sugarcane mill at Casona Los Rodríguez'
  }
];
