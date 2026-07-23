import { Experience } from '../types/experience';

export const experiences: Experience[] = [
  {
    slug: 'tour-historico-cultural-la-fortuna',
    slugEN: 'cultural-heritage-tour-la-fortuna',
    title: 'Tour Histórico Cultural en La Fortuna',
    titleEN: 'Cultural Heritage Tour in La Fortuna',
    category: 'cultural',
    badge: 'bestseller',
    tagline: 'La inmersión más completa en las tradiciones, historia y sabores del campo costarricense.',
    taglineEN: 'The most complete immersion in the traditions, history, and flavors of the Costa Rican countryside.',
    duration: '3 horas',
    durationEN: '3 hrs',
    minPersons: 2,
    maxPersons: 100,
    schedule: '10:30 AM y 4:30 PM',
    scheduleEN: '10:30 AM & 4:30 PM',
    pricing: {
      adult: 75,
      child: 45,
      infant: 0
    },
    difficulty: 'Fácil',
    difficultyEN: 'Easy',
    tourType: 'Compartido',
    tourTypeEN: 'Shared',
    includes: [
      'Transporte desde Tabacón hasta La Fortuna y La Casona Los Rodríguez',
      'Guía local bilingüe especializado (español/inglés)',
      'Recorrido histórico y cultural',
      'Visita a cultivos tradicionales',
      'Agua',
      'Almuerzo o cena, según el horario seleccionado'
    ],
    includesEN: [
      'Transportation from Tabacón to La Fortuna and Casona Los Rodríguez',
      'Specialized bilingual local guide (Spanish/English)',
      'Historical and cultural tour',
      'Visit to traditional crops',
      'Water',
      'Lunch or dinner, depending on the time slot selected'
    ],
    notIncludes: ['IVA 13%', 'Fotos'],
    notIncludesEN: ['13% VAT', 'Photos'],
    heroImage: '/images/gallery/farmhouse/casona-los-rodriguez-farmhouse-la-fortuna-001.webp',
    images: [
      '/images/gallery/farmhouse/casona-los-rodriguez-traditional-dining-room-001.webp',
      '/images/gallery/traditional-events/costa-rica-folklore-dance-cultural-experience.webp',
      '/images/gallery/traditional-events/casona-los-rodriguez-costa-rican-cultural-event-001.webp',
      '/images/gallery/farm-trapiche/organic-ingredients-costa-rican-cuisine.webp',
      '/images/gallery/farm-trapiche/horses-costa-rican-farm-la-fortuna.webp',
      '/images/gallery/farm-trapiche/pigs-rural-farm-in-casona-los-rodriguez.webp',
      '/images/gallery/typical-food/casona-los-rodriguez-typical-food-la-fortuna-003.webp',
      '/images/gallery/farmhouse/casona-los-rodriguez-colonial-blue-facade-001.webp'
    ],
    description: 'Antes de ser el destino de aventura que conoces hoy, La Fortuna era una pequeña comunidad agrícola al pie del Arenal. En este recorrido cultural, caminarás por cultivos tradicionales, escucharás de primera mano cómo era la vida aquí antes del turismo, y terminarás compartiendo mesa con una familia costarricense real — con almuerzo o cena típica y baile folclórico incluidos. No es una parada más en un itinerario: es la única forma de conocer la historia que nadie más te va a contar.',
    descriptionEN: "Before La Fortuna became the adventure destination you know today, it was a small farming community at the foot of the Arenal Volcano. On this cultural tour, you'll walk through traditional crops, hear firsthand what life was like here before tourism, and end up sharing a table with a real Costa Rican family — with traditional lunch or dinner and folkloric dance included. This isn't just another stop on an itinerary: it's the only way to learn the history no one else will tell you.",
    bookingUrl: 'TODO_BOOKING_URL',
    seoTitle: 'Tour Histórico Cultural en La Fortuna | Casona Los Rodríguez',
    seoTitleEN: 'Cultural Heritage Tour La Fortuna | Meet the Locals & Farm-to-Table Lunch',
    seoDescription: 'Descubre la historia real de La Fortuna: finca tradicional, almuerzo típico y baile folclórico en un tour cultural de grupo pequeño.',
    seoDescriptionEN: 'Discover the real story behind La Fortuna on this small-group cultural tour: local farm, traditional lunch, folkloric dance, and stories only locals can tell.',
    keywords: [
      'experiencia cultural costarricense',
      'tour cultural la fortuna',
      'tour histórico la fortuna',
      'trapiche de bueyes costa rica'
    ],
    keywordsEN: [
      'costa rican cultural experience',
      'cultural heritage tour la fortuna',
      'meet the locals la fortuna',
      'authentic things to do la fortuna'
    ],
    h1: 'Tour Histórico Cultural en La Fortuna: descubra la historia que dio vida al destino más emblemático de Costa Rica',
    h1EN: 'La Fortuna Cultural Heritage Tour: Meet the Locals & Live Their Story',
    overview: [
      'Antes de ser el destino de aventura que conoces hoy, La Fortuna era una pequeña comunidad agrícola al pie del Arenal. En este recorrido cultural, caminarás por cultivos tradicionales, escucharás de primera mano cómo era la vida aquí antes del turismo, y terminarás compartiendo mesa con una familia costarricense real — con almuerzo o cena típica y baile folclórico incluidos. No es una parada más en un itinerario: es la única forma de conocer la historia que nadie más te va a contar.'
    ],
    overviewEN: [
      "Before La Fortuna became the adventure destination you know today, it was a small farming community at the foot of the Arenal Volcano. On this cultural tour, you'll walk through traditional crops, hear firsthand what life was like here before tourism, and end up sharing a table with a real Costa Rican family — with traditional lunch or dinner and folkloric dance included. This isn't just another stop on an itinerary: it's the only way to learn the history no one else will tell you."
    ],
    highlights: [
      { icon: '🌾', text: 'Cultivos tradicionales de la Zona Norte, explicados por guías locales' },
      { icon: '🗣️', text: 'Conversatorio genuino sobre historia, religión y costumbres de La Fortuna' },
      { icon: '🐄', text: 'Recorrido por huerta orgánica y granja de animales' },
      { icon: '🍽️', text: 'Almuerzo o cena típica compartida en familia, con opciones de proteína a elegir' },
      { icon: '💃', text: 'Presentación de bailes folclóricos costarricenses' },
      { icon: '🌙', text: 'Opción nocturna: música y baile en vivo con artistas locales' }
    ],
    highlightsEN: [
      { icon: '🌾', text: 'Traditional crops of the Zona Norte, explained by local guides' },
      { icon: '🗣️', text: "A genuine conversation about La Fortuna's history, religion, and customs" },
      { icon: '🐄', text: 'Walk through the organic garden and animal farm' },
      { icon: '🍽️', text: 'Traditional lunch or dinner shared as a family, with a choice of protein' },
      { icon: '💃', text: 'Live performance of traditional Costa Rican folk dance' },
      { icon: '🌙', text: 'Evening option: live music and dance with local artists' }
    ],
    itinerary: [
      'Visita y recorrido por finca tradicional de la zona',
      'Llegada y bienvenida a La Casona Los Rodríguez',
      'Tour por las instalaciones de la casona',
      'Recorrido por la huerta orgánica y la granja de animales',
      'Almuerzo o cena típica',
      'Presentación de bailes folclóricos'
    ],
    itineraryEN: [
      'Visit and tour of a traditional local farm',
      'Arrival and welcome at Casona Los Rodríguez',
      'Tour of the Casona grounds',
      'Walk through the organic garden and animal farm',
      'Traditional lunch or dinner',
      'Folkloric dance performance'
    ],
    foodOptions: 'Se ofrece el Casado tradicional costarricense con una proteína a escoger (pollo, cerdo o pescado), además de opciones veganas y vegetarianas.',
    foodOptionsEN: 'We offer the traditional Costa Rican Casado with a choice of protein (chicken, pork, or fish), as well as vegan and vegetarian options.',
    brandIdentity: {
      title: 'Una historia real, cuidada con cariño.',
      text: 'Esta casona tiene más de 120 años de historia. Hoy, la familia Rodríguez la cuida y comparte con vos las tradiciones que definieron a la Zona Norte — con el mismo respeto con el que se cuenta la historia de un lugar que se ama.'
    },
    brandIdentityEN: {
      title: 'A real history, cared for with love.',
      text: "This farmhouse has stood for over 120 years. Today, the Rodríguez family looks after it and shares with you the traditions that shaped the Zona Norte — with the same care you'd give to a place you love."
    },
    faq: [
      {
        q: '¿Incluye transporte?',
        a: 'Sí, el transporte desde Tabacón hasta La Fortuna y La Casona Los Rodríguez está incluido en este tour.'
      },
      {
        q: '¿Es apto para niños?',
        a: 'Sí, no hay edad mínima, y la entrada es gratuita para infantes.'
      },
      {
        q: '¿Incluye almuerzo o cena?',
        a: 'Depende del horario que reserves — el tour de las 10:30 AM incluye almuerzo, y el de las 4:30 PM incluye cena, con la opción de quedarte a disfrutar de música y baile en vivo.'
      },
      {
        q: '¿Qué pasa si llueve?',
        a: 'La mayoría del recorrido y las actividades culturales continúan con lluvia ligera; tu guía ajustará la ruta si es necesario.'
      },
      {
        q: '¿Atienden restricciones alimentarias?',
        a: 'Sí — solo avísanos sobre alergias o necesidades especiales (vegetariano, vegano, sin gluten) al reservar.'
      }
    ],
    faqEN: [
      {
        q: 'Is transportation included?',
        a: 'Yes, transport from Tabacón to La Fortuna and Casona Los Rodríguez is included in this tour.'
      },
      {
        q: 'Is this tour suitable for children?',
        a: "Yes, there's no minimum age, and admission is free for infants."
      },
      {
        q: 'Do I get lunch or dinner?',
        a: 'That depends on the time slot you book — the 10:30 AM tour includes lunch, and the 4:30 PM tour includes dinner, with the option to stay for live music and dance in the evening.'
      },
      {
        q: 'What if it rains?',
        a: 'Most of the farm walk and cultural activities continue as planned with light rain; your guide will adjust the route if needed.'
      },
      {
        q: 'Do you accommodate dietary restrictions?',
        a: 'Yes — just let us know about allergies or dietary needs (vegetarian, vegan, gluten-free) when booking.'
      }
    ],
    whatToBring: [
      'Ropa cómoda',
      'Zapato cerrado',
      'Repelente de insectos (preferiblemente natural o eco-friendly)',
      'Cámara'
    ],
    whatToBringEN: [
      'Comfortable clothing',
      'Closed-toe shoes',
      'Insect repellent (preferably natural or eco-friendly)',
      'Camera'
    ],
    meetingPointUrl: 'https://maps.app.goo.gl/bQ1WB3Z3kpX2buMf9',
    whatsappBookingUrl: {
      es: 'https://wa.me/50660817929?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20el%20Tour%20Hist%C3%B3rico%20Cultural%20en%20La%20Fortuna.%20%C2%BFPodr%C3%ADan%20ayudarme%20con%20disponibilidad%20y%20detalles%3F',
      en: 'https://wa.me/50660817929?text=Hello%2C%20I%27d%20like%20to%20book%20the%20Cultural%20Heritage%20Tour%20in%20La%20Fortuna.%20Could%20you%20help%20me%20with%20availability%20and%20details%3F'
    },
    seoHighlights: [
      'This small-group cultural tour takes place at Casona Los Rodríguez, a 120-year-old historic farmhouse in La Fortuna, Costa Rica.',
      'Visitors walk through a traditional organic farm and learn hands-on agricultural practices passed down through generations in the Zona Norte.',
      'The tour includes a guided conversation about the real history, religion, and daily life of La Fortuna, offering an authentic meet-the-locals experience.',
      'A traditional Costa Rican lunch or dinner is included, with a Casado featuring a choice of chicken, pork, or fish, plus vegan and vegetarian options.',
      'The experience ends with a live folkloric music and dance performance by local artists.',
      'This is a community-based tourism experience, run by a local Costa Rican family rather than a large tour operator.',
      'Minimum group size is 2 people, with tours available at 10:30 AM and 4:30 PM daily.',
      'Unlike volcano or zipline tours, this experience focuses on Costa Rican rural culture, history, and gastronomy.',
      'It is considered one of the most complete cultural immersion experiences near Arenal Volcano.',
      'Suitable for travelers looking for authentic, off-the-beaten-path things to do in La Fortuna beyond typical adventure tours.'
    ]
  },
  {
    slug: 'clase-cocina-tradicional-la-fortuna',
    slugEN: 'traditional-cooking-class-la-fortuna',
    title: 'Cooking Class con Tía Yami',
    titleEN: 'Cooking Class with Tía Yami',
    category: 'gastronomia',
    tagline: 'Aprenda los secretos de la gastronomía ancestral costarricense cocinada a la leña.',
    taglineEN: 'Learn the secrets of ancestral Costa Rican gastronomy cooked over a wood fire.',
    duration: '2 horas',
    durationEN: '2 hrs',
    minPersons: 2,
    maxPersons: 30,
    schedule: '8:00 AM, 11:00 AM y 5:00 PM',
    scheduleEN: '8:00 AM, 11:00 AM & 5:00 PM',
    pricing: {
      adult: 70,
      child: 38,
      infant: 0
    },
    difficulty: 'Fácil',
    difficultyEN: 'Easy',
    tourType: 'Compartido',
    tourTypeEN: 'Shared',
    includes: [
      'Clase práctica de cocina tradicional costarricense',
      'Cocina tradicional de leña',
      'Todos los ingredientes y utensilios',
      'Degustación de los platillos preparados',
      'Bebida natural',
      'Recetario digital para que los participantes puedan recrear la experiencia en casa'
    ],
    includesEN: [
      'Hands-on traditional Costa Rican cooking class',
      'Traditional wood-fired cooking',
      'All ingredients and utensils included',
      'Tasting of the prepared dishes',
      'Natural drink',
      'Digital recipe booklet so you can recreate the experience at home'
    ],
    notIncludes: ['Transporte', 'IVA 13%'],
    notIncludesEN: ['Transportation', '13% VAT'],
    heroImage: '/images/gallery/restaurant-kitchen/costa-rican-cooking-class-la-fortuna-casona-los-rodriguez.webp',
    images: [
      '/images/gallery/restaurant-kitchen/costa-rican-cooking-class-la-fortuna-casona-los-rodriguez.webp',
      '/images/gallery/restaurant-kitchen/handmade-tortillas-cooking-class-costa-rica.webp',
      '/images/gallery/restaurant-kitchen/guests-making-costa-rican-tortillas-la-fortuna.webp',
      '/images/gallery/restaurant-kitchen/traditional-costa-rican-dishes-cooking-class.webp',
      '/images/gallery/restaurant-kitchen/casona-los-rodriguez-woodfire-cooking-001.webp',
      '/images/gallery/restaurant-kitchen/traditional-wood-fired-cooking-class-costa-rica.webp',
      '/images/gallery/restaurant-kitchen/cooking-with-local-family-la-fortuna.webp',
      '/images/gallery/restaurant-kitchen/guests-making-tortillas-la-fortuna.webp'
    ],
    description: 'Tía Yami no enseña una receta, enseña una tradición. En su cocina de leña dentro de La Casona Los Rodríguez, aprenderás a preparar arroz con pollo (o el icónico "arroz con siempre") y picadillo de chayote con técnicas que pasaron de abuela en abuela. Al final, te sientas a la mesa a comer lo que tú mismo cocinaste — y te llevas la receta digital para repetirlo en casa.',
    descriptionEN: 'Tía Yami doesn\'t just teach a recipe, she teaches a tradition. In her wood-fired kitchen at Casona Los Rodríguez, you\'ll learn to prepare Arroz con Pollo (or the iconic "Arroz con Siempre") and chayote picadillo using techniques passed down from grandmother to grandmother. At the end, you\'ll sit down to eat what you cooked yourself — and take home the digital recipe to make it again.',
    seoTitle: 'Clase de Cocina Tradicional en La Fortuna | Casona Los Rodríguez',
    seoTitleEN: 'Traditional Costa Rican Cooking Class in La Fortuna | Cook with Tía Yami',
    seoDescription: 'Clase de cocina 100% práctica en cocina de leña. Aprende a preparar arroz con pollo y tortillas con una familia local en La Fortuna.',
    seoDescriptionEN: 'Hands-on cooking class in a real wood-fired kitchen. Learn to make tortillas, arroz con pollo, and picadillo with a local family in La Fortuna.',
    keywords: [
      'clase de cocina costarricense',
      'cocina a la leña costa rica',
      'gastronomia tradicional la fortuna',
      'tortillas de maiz clase'
    ],
    keywordsEN: [
      'costa rican cooking class',
      'wood fired kitchen tour',
      'traditional gastronomy la fortuna',
      'tortilla making class'
    ],
    h1: 'Clase de Cocina Tradicional en La Fortuna: cocine, comparta y disfrute los auténticos sabores de la tradición costarricense',
    h1EN: 'Hands-On Cooking Class in La Fortuna: Cook Real Costa Rican Recipes',
    overview: [
      'Tía Yami no enseña una receta, enseña una tradición. En su cocina de leña dentro de La Casona Los Rodríguez, aprenderás a preparar arroz con pollo (o el icónico "arroz con siempre") y picadillo de chayote con técnicas que pasaron de abuela en abuela. Al final, te sientas a la mesa a comer lo que tú mismo cocinaste — y te llevas la receta digital para repetirlo en casa.'
    ],
    overviewEN: [
      'Tía Yami doesn\'t just teach a recipe, she teaches a tradition. In her wood-fired kitchen at Casona Los Rodríguez, you\'ll learn to prepare Arroz con Pollo (or the iconic "Arroz con Siempre") and chayote picadillo using techniques passed down from grandmother to grandmother. At the end, you\'ll sit down to eat what you cooked yourself — and take home the digital recipe to make it again.'
    ],
    highlights: [
      { icon: '👩‍🍳', text: 'Clase 100% práctica en cocina de leña auténtica' },
      { icon: '🍚', text: 'Preparas arroz con pollo o "arroz con siempre", símbolo de la cocina tica' },
      { icon: '🫓', text: 'Tortillas palmeadas a mano y empanadas caseras' },
      { icon: '☕', text: 'Degustación con bebida natural y café/té' },
      { icon: '📖', text: 'Recetario digital para llevar a casa' },
      { icon: '👨‍👩‍👧', text: 'Clase pequeña, ambiente familiar' }
    ],
    highlightsEN: [
      { icon: '👩‍🍳', text: 'A fully hands-on class in an authentic wood-fired kitchen' },
      { icon: '🍚', text: 'You\'ll prepare Arroz con Pollo or "Arroz con Siempre," a symbol of Costa Rican cuisine' },
      { icon: '🫓', text: 'Hand-pressed tortillas and homemade empanadas' },
      { icon: '☕', text: 'Tasting with a natural drink and coffee or tea' },
      { icon: '📖', text: 'Digital recipe booklet to take home' },
      { icon: '👨‍👩‍👧', text: 'Small class size, family atmosphere' }
    ],
    itinerary: [
      'Bienvenida a La Casona por "Tía" Yami',
      'Recorrido por las instalaciones de La Casona',
      'Explicación y preparación práctica de alimentos tradicionales',
      'Degustación de los platillos preparados por los participantes'
    ],
    itineraryEN: [
      'Welcome to La Casona by "Tía" Yami',
      'Tour of the Casona grounds',
      'Hands-on explanation and preparation of traditional dishes',
      'Tasting of the dishes prepared by participants'
    ],
    brandIdentity: {
      title: 'Recetas de familia, cocinadas con el corazón.',
      text: 'Tía Yami aprendió estas recetas de su madre y las cocina hoy al calor de la leña, con la misma dedicación de siempre. Esa es la receta que realmente te llevas a casa.'
    },
    brandIdentityEN: {
      title: 'Family recipes, cooked with heart.',
      text: 'Tía Yami learned these recipes from her mother, and cooks them today over a wood fire with the same care as always. That\'s the recipe you really take home.'
    },
    faq: [
      {
        q: '¿Incluye transporte?',
        a: 'No, el transporte no está incluido — los visitantes deben llegar por su cuenta a La Casona Los Rodríguez.'
      },
      {
        q: '¿Necesito experiencia previa en cocina?',
        a: 'No, esta es una clase práctica guiada, ideal para principiantes.'
      },
      {
        q: '¿Qué como durante la clase?',
        a: 'Disfrutarás de los platillos que tú mismo ayudes a preparar, junto con una bebida natural y postre casero.'
      },
      {
        q: '¿Atienden restricciones alimentarias?',
        a: 'Sí, solo avísanos con anticipación para ajustes vegetarianos, veganos o sin gluten.'
      }
    ],
    faqEN: [
      {
        q: 'Is transportation included?',
        a: 'No, transportation is not included — guests are responsible for getting to Casona Los Rodríguez.'
      },
      {
        q: 'Do I need previous cooking experience?',
        a: 'No, this is a beginner-friendly, fully guided hands-on class.'
      },
      {
        q: 'What do I eat during the class?',
        a: 'You\'ll enjoy the dishes you personally help prepare, along with a natural drink and homemade dessert.'
      },
      {
        q: 'Can you accommodate dietary restrictions?',
        a: 'Yes, just let us know in advance for vegetarian, vegan, or gluten-free adjustments.'
      }
    ],
    whatToBring: [
      'Ropa cómoda',
      'Zapato cerrado',
      'Repelente de insectos (preferiblemente natural o eco-friendly)',
      'Cámara'
    ],
    whatToBringEN: [
      'Comfortable clothing',
      'Closed-toe shoes',
      'Insect repellent (preferably natural or eco-friendly)',
      'Camera'
    ],
    meetingPointUrl: 'https://maps.app.goo.gl/bQ1WB3Z3kpX2buMf9',
    whatsappBookingUrl: {
      es: 'https://wa.me/50660817929?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20la%20Cooking%20Class%20con%20T%C3%ADa%20Yami.%20%C2%BFPodr%C3%ADan%20ayudarme%20con%20disponibilidad%20y%20detalles%3F',
      en: 'https://wa.me/50660817929?text=Hello%2C%20I%27d%20like%20to%20book%20the%20Cooking%20Class%20with%20T%C3%ADa%20Yami.%20Could%20you%20help%20me%20with%20availability%20and%20details%3F'
    },
    seoHighlights: [
      'This hands-on traditional Costa Rican cooking class takes place in a 100% wood-fired kitchen at Casona Los Rodríguez, La Fortuna.',
      'Participants prepare classic Costa Rican dishes such as Arroz con Pollo or the traditional "Arroz con Siempre" from scratch.',
      'The class also includes hand-pressed corn tortillas, chayote picadillo, and homemade empanadas.',
      'This is a fully interactive cooking class in La Fortuna — every participant cooks, not just watches.',
      'A digital recipe booklet is included so guests can recreate the dishes at home.',
      'The class is taught by a local family member, offering a genuine meet-the-locals cooking experience.',
      'Duration is approximately 2 hours, with departures at 8 AM, 11 AM, and 5 PM.',
      'This is one of the few traditional, farm-to-table cooking classes available near Arenal Volcano.',
      'Ideal for travelers searching for an authentic cooking class in Costa Rica rather than a generic tourist cooking demo.'
    ]
  },
  {
    slug: 'casona-farm-day-pass-la-fortuna',
    slugEN: 'casona-farm-day-pass-la-fortuna',
    title: 'Pase del Día en La Casona y Finca con una Comida Tradicional a la Leña',
    titleEN: 'La Casona and Farm Day Pass with Traditional Wood-Fired Meal',
    category: 'cultural',
    tagline: 'Conecte con la vida del campo costarricense y la hospitalidad rural auténtica.',
    taglineEN: 'Connect with Costa Rican countryside life and authentic rural hospitality.',
    duration: '3 horas',
    durationEN: '3 hrs',
    minPersons: 1,
    schedule: '11:00 AM y 4:00 PM',
    scheduleEN: '11:00 AM & 4:00 PM',
    pricing: {
      adult: 40,
      child: 25,
      infant: 0
    },
    difficulty: 'Fácil',
    difficultyEN: 'Easy',
    tourType: 'Compartido',
    tourTypeEN: 'Shared',
    includes: [
      'Entrada a las instalaciones de La Casona, la Huerta y la Granja',
      'Almuerzo o cena típico con opciones a escoger',
      'Bebida natural',
      'Agua'
    ],
    includesEN: [
      'Access to the Casona grounds, Garden, and Farm',
      'Traditional lunch or dinner with menu options',
      'Natural drink',
      'Water'
    ],
    notIncludes: ['Transporte', 'IVA 13%'],
    notIncludesEN: ['Transportation', '13% VAT'],
    heroImage: '/images/gallery/farm-trapiche/pigs-rural-farm-la-fortuna-costa-rica.webp',
    images: [
      '/images/gallery/farm-trapiche/pigs-rural-farm-la-fortuna-costa-rica.webp',
      '/images/gallery/farm-trapiche/casona-los-rodriguez-farm-to-table-experience.webp',
      '/images/gallery/farm-trapiche/organic-garden-casona-los-rodriguez-la-fortuna.webp',
      '/images/gallery/farm-trapiche/chickens-traditional-farm-casona-los-rodriguez.webp',
      '/images/gallery/farm-trapiche/horses-costa-rican-farm-la-fortuna.webp',
      '/images/gallery/farmhouse/casona-los-rodriguez-rustic-facilities-001.webp',
      '/images/gallery/typical-food/casona-los-rodriguez-typical-food-la-fortuna-002.webp',
      '/images/gallery/farmhouse/casona-los-rodriguez-colonial-blue-facade-001.webp'
    ],
    description: 'A diferencia de nuestros tours guiados, este es un pase libre para explorar La Casona Los Rodríguez a tu propio ritmo. Camina por la huerta orgánica, visita la granja de animales y recorre las instalaciones históricas sin horarios fijos ni prisa. Según el horario que elijas, tu pase incluye almuerzo o cena típica con opciones a escoger — la forma más relajada de vivir la vida de campo costarricense.',
    descriptionEN: 'Unlike our guided tours, this is a free pass to explore Casona Los Rodríguez at your own pace. Walk through the organic garden, visit the animal farm, and explore the historic grounds with no fixed schedule and no rush. Depending on the time slot you choose, your pass includes a traditional lunch or dinner with menu options — the most relaxed way to experience Costa Rican countryside life.',
    seoTitle: 'Casona & Farm Day Pass en La Fortuna | Casona Los Rodríguez',
    seoTitleEN: 'Casona & Farm Day Pass La Fortuna | Organic Farm Tour & Traditional Meal',
    seoDescription: 'Explora la Casona Los Rodríguez a tu propio ritmo: finca orgánica, huerta y un almuerzo o cena típica con opciones a elegir.',
    seoDescriptionEN: 'Explore Casona Los Rodríguez at your own pace: organic farm and garden, historic grounds, and a traditional wood-fired lunch or dinner with menu options included.',
    keywords: [
      'experiencia rural costarricense',
      'vida del campo costa rica',
      'trapiche artesanal la fortuna',
      'almuerzo tipico la fortuna'
    ],
    keywordsEN: [
      'rural costa rican experience',
      'countryside life costa rica',
      'sugar mill tour la fortuna',
      'traditional lunch la fortuna'
    ],
    h1: 'Explora La Casona Los Rodríguez: finca, huerta y una comida típica a tu propio ritmo',
    h1EN: 'Explore Casona Los Rodríguez: Farm, Garden & a Traditional Meal at Your Own Pace',
    overview: [
      'A diferencia de nuestros tours guiados, este es un pase libre para explorar La Casona Los Rodríguez a tu propio ritmo. Camina por la huerta orgánica, visita la granja de animales y recorre las instalaciones históricas sin horarios fijos ni prisa. Según el horario que elijas, tu pase incluye almuerzo o cena típica con opciones a escoger — la forma más relajada de vivir la vida de campo costarricense.'
    ],
    overviewEN: [
      'Unlike our guided tours, this is a free pass to explore Casona Los Rodríguez at your own pace. Walk through the organic garden, visit the animal farm, and explore the historic grounds with no fixed schedule and no rush. Depending on the time slot you choose, your pass includes a traditional lunch or dinner with menu options — the most relaxed way to experience Costa Rican countryside life.'
    ],
    highlights: [
      { icon: '🚶', text: 'Acceso libre a las instalaciones, la huerta y la granja' },
      { icon: '🍽️', text: 'Almuerzo o cena típica (según horario seleccionado) con opciones a escoger' },
      { icon: '🥤', text: 'Bebida natural y agua incluidas' },
      { icon: '⏱️', text: 'Sin horarios fijos dentro del pase — explora a tu ritmo' },
      { icon: '👨‍👩‍👧‍👦', text: 'Ideal para familias y grupos que buscan flexibilidad' }
    ],
    highlightsEN: [
      { icon: '🚶', text: 'Free access to the grounds, garden, and farm' },
      { icon: '🍽️', text: 'Traditional lunch or dinner (depending on time slot) with menu options' },
      { icon: '🥤', text: 'Natural drink and water included' },
      { icon: '⏱️', text: 'No fixed schedule within the pass — explore at your own pace' },
      { icon: '👨‍👩‍👧‍👦', text: 'Ideal for families and groups looking for flexibility' }
    ],
    itinerary: [
      'Bienvenida a la Casona',
      'Tour por las instalaciones de la casona',
      'Visita por la huerta y la granja',
      'Almuerzo o cena (según horario seleccionado)'
    ],
    itineraryEN: [
      'Welcome to the Casona',
      'Tour of the Casona grounds',
      'Visit to the garden and farm',
      'Lunch or dinner (depending on time slot selected)'
    ],
    itineraryNote: 'El orden puede variar según ocupación y operación del día.',
    itineraryNoteEN: 'Order may vary depending on daily occupancy and operations.',
    foodOptions: 'Se ofrece el Casado tradicional costarricense con una proteína a escoger (pollo, cerdo o pescado), además de opciones veganas y vegetarianas.',
    foodOptionsEN: 'We offer the traditional Costa Rican Casado with a choice of protein (chicken, pork, or fish), as well as vegan and vegetarian options.',
    brandIdentity: {
      title: 'Un pedazo de la Costa Rica de antes.',
      text: 'Antes de La Fortuna turística, ya existía esta finca. Hoy, la familia Rodríguez la mantiene viva para que puedas caminar por la misma tierra que ha sido testigo de más de un siglo de vida rural costarricense.'
    },
    brandIdentityEN: {
      title: 'A piece of the Costa Rica that once was.',
      text: 'Before tourist La Fortuna, this farm was already here. Today, the Rodríguez family keeps it alive so you can walk the same land that has witnessed over a century of Costa Rican rural life.'
    },
    faq: [
      {
        q: '¿Es un tour guiado?',
        a: 'No, es un pase de acceso libre — explorás la finca, la huerta y las instalaciones a tu propio ritmo.'
      },
      {
        q: '¿El pase incluye el show folclórico nocturno?',
        a: 'No, la presentación de música y baile nocturna es exclusiva del horario vespertino del Tour Histórico Cultural.'
      },
      {
        q: '¿Qué comida incluye?',
        a: 'Almuerzo o cena típica, según el horario que selecciones, con opciones de proteína o alternativas veganas/vegetarianas.'
      },
      {
        q: '¿Cuál es el mínimo de personas?',
        a: 'Solo 1 persona — viajeros solos son bienvenidos.'
      },
      {
        q: '¿Incluye transporte?',
        a: 'No, el transporte no está incluido en el day pass.'
      }
    ],
    faqEN: [
      {
        q: 'Is this a guided tour?',
        a: 'No, this is a self-guided pass — you explore the farm, garden, and grounds at your own pace.'
      },
      {
        q: 'Does the pass include the evening folkloric show?',
        a: "No, the evening music and dance show is exclusive to the Historical Cultural Tour's evening time slot."
      },
      {
        q: 'What meal is included?',
        a: 'A traditional lunch or dinner, depending on the time slot you select, with a choice of protein or vegan/vegetarian options.'
      },
      {
        q: "What's the minimum group size?",
        a: 'Just 1 person — solo travelers are welcome.'
      },
      {
        q: 'Is transportation included?',
        a: 'No, transportation is not included with the day pass.'
      }
    ],
    whatToBring: [
      'Ropa cómoda',
      'Zapato cerrado',
      'Repelente de insectos (preferiblemente natural o eco-friendly)',
      'Cámara'
    ],
    whatToBringEN: [
      'Comfortable clothing',
      'Closed-toe shoes',
      'Insect repellent (preferably natural or eco-friendly)',
      'Camera'
    ],
    meetingPointUrl: 'https://maps.app.goo.gl/bQ1WB3Z3kpX2buMf9',
    whatsappBookingUrl: {
      es: 'https://wa.me/50660817929?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20La%20Casona%20%26%20Farm%20Day%20Pass.%20%C2%BFPodr%C3%ADan%20ayudarme%20con%20disponibilidad%20y%20detalles%3F',
      en: 'https://wa.me/50660817929?text=Hello%2C%20I%27d%20like%20to%20book%20the%20Casona%20%26%20Farm%20Day%20Pass.%20Could%20you%20help%20me%20with%20availability%20and%20details%3F'
    },
    seoHighlights: [
      'This self-guided day pass allows visitors to freely explore the organic farm, garden, and grounds of Casona Los Rodríguez in La Fortuna.',
      'Unlike guided tours, this experience has no fixed schedule, letting visitors explore the property at their own pace.',
      'The pass includes either a traditional wood-fired lunch or dinner, depending on the time slot selected, with a choice of protein or vegan/vegetarian options.',
      'Visitors can walk through farmland that has been part of Costa Rican rural life in La Fortuna for over a century.',
      'This is a low-key, flexible alternative for travelers who prefer independent exploration over a structured guided tour.',
      'Entrance includes access to the farm, organic garden, and the historic Casona grounds.',
      'Available at 11:00 AM and 4:00 PM, with a minimum of 1 person per booking.',
      'A good option for families or groups looking for a relaxed cultural experience near Arenal Volcano.',
      'Supports small-scale, community-based tourism rather than large commercial attractions.',
      'Ideal for travelers who already know they want an authentic farm experience in Costa Rica without a fixed itinerary.'
    ]
  }
];
