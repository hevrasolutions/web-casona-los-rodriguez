<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Casona Los Rodríguez — Guía de Desarrollo para Agentes (AGENTS.md)

**Última Actualización:** 2026-07-26
**Fase Activa:** Rediseño de Páginas de Detalle de Experiencias — COMPLETO. Rediseño y Optimización de la Página de Agencias y Formulario de Cotización — COMPLETO (jul 2026). Fase actual: Fase 7 — SEO Técnico y Optimización (En Progreso)

---

## 1. Resumen del Negocio

* **Nombre:** Casona Los Rodríguez
* **Dominio:** `casonalosrodriguez.cr`
* **Ubicación:** Sona Fluca, La Fortuna, San Carlos, Costa Rica
* **Contacto:** Celin Rodríguez López
* **Teléfono/WhatsApp:** +506 6081-7929
* **Correo de contacto:** `info@casonalosrodriguez.cr`
* **Descripción:** Casona rural costarricense con más de 120 años de historia. Espacio cultural, gastronómico y turístico que ofrece cocina 100% a la leña, trapiche artesanal de madera interactivo (participativo y 100% amigable con los animales, sin tracción animal por protección y bienestar), clases de cocina típica, bailes folclóricos, música en vivo, huerta de plantas medicinales y animales de granja. Atiende a turistas individuales, familias, parejas, grupos privados, agencias y operadores de turismo (DMCs).

### Propuesta de Valor Central
> "Una experiencia cultural costarricense en una casona rural de más de 120 años, donde el visitante cocina, come, aprende, baila y revive las tradiciones del campo tico."

### Público Meta
Turistas internacionales (EE.UU., Canadá, Europa, LATAM), familias, parejas, grupos pequeños, agencias de turismo receptivo, coordinadores educativos y corporativos.

### Catálogo de Experiencias Reales (Precios Confirmados)

**Rangos de edad oficiales para precios (desde jul 2026):** Adultos (11+) · Niños (5–10) · Infantes (0–4) gratis.

1. **Tour Histórico Cultural en La Fortuna / Cultural Heritage Tour in La Fortuna:** $75 adulto / $45 niño / infantes gratis | Duración: 3 horas | Horarios: 10:30 AM y 4:30 PM | Mín 2 · Máx 100 personas | Dificultad: Fácil | Tipo: Compartido | **BESTSELLER** *(actualizado en Fase 1 del rediseño con el Excel del cliente, jul 2026)*
2. **Cooking Class con Tía Yami / Cooking Class with Tía Yami:** $70 adulto / $38 niño / infantes gratis | Duración: 2 horas | Horarios: 8:00 AM, 11:00 AM y 5:00 PM | Mín 2 · Máx 30 personas | Dificultad: Fácil | Tipo: Compartido | Sin edad mínima (los infantes pueden participar; decisión del usuario, jul 2026) | Transporte NO incluido | Término correcto: "Arroz con Siempre" (no "por Siempre") *(actualizado en Fase 2 del rediseño, jul 2026)*
3. **Pase del Día en La Casona y Finca con una Comida Tradicional a la Leña / La Casona and Farm Day Pass with Traditional Wood-Fired Meal:** $40 adulto / $25 niño / infantes gratis | Duración: 3 horas | Horarios: 11:00 AM y 4:00 PM | Mín 1 persona | Dificultad: Fácil | Tipo: Compartido | Pase auto-guiado (sin guía); incluye almuerzo O cena según horario; el show folclórico nocturno NO está incluido (exclusivo del Tour Histórico Cultural); Transporte NO incluido; **nunca mencionar mariposario ni ranario** (no operativos) *(actualizado en Fase 3 del rediseño, jul 2026)*

---

## 2. Stack Técnico Real

* **Framework:** Next.js `16.2.7`
* **Librería UI:** React `19.2.4` / React DOM `19.2.4`
* **Estilos:** TailwindCSS `v4` (vía `@tailwindcss/postcss`)
* **Manejo de Formularios:** `react-hook-form` `^7.77.0` con resolver `@hookform/resolvers` `^5.4.0`
* **Validación de Esquemas:** `zod` `^4.4.3`
* **Tipado:** TypeScript `^5`
* **Internacionalización:** Multidioma nativo para rutas `/es` y `/en` utilizando `next-intl` (localizado a nivel de segmentos) y redirección mediante un proxy en `src/proxy.ts` (en lugar de `middleware.ts`).

---

## 3. Arquitectura del Proyecto Real

La estructura del código sigue el siguiente esquema en `/src`:

```
casona_los_rodriguez/
├── public/
│   └── images/          # Assets visuales organizados por sección
└── src/
    ├── app/
    │   └── [locale]/    # Enrutamiento multilingüe estructurado
    ├── components/      # Componentes React agrupados funcionalmente
    ├── data/            # Archivos estáticos de datos de configuración
    ├── dictionaries/    # Archivos de traducción i18n
    ├── lib/             # Funciones de utilidad y configuración i18n
    ├── types/           # Definiciones de interfaces TypeScript
    └── proxy.ts         # Middleware para enrutamiento Next.js 16
```

---

## 4. Componentes Existentes

Organizados en `/src/components/`:

* **`content/` (Secciones de contenido de página)**
  * [`AgencyCTA.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/content/AgencyCTA.tsx): Llamado a la acción específico para agencias de viajes.
  * [`FinalCTA.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/content/FinalCTA.tsx): Llamado a la acción general final de la portada con `<FullViewportParallax>` sobre la foto rústica de la Casona.
  * [`HeroBasic.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/content/HeroBasic.tsx): Banner superior estático con imagen de fondo y título.
  * [`HeroCarousel.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/content/HeroCarousel.tsx): Carrusel dinámico para la página de inicio.
  * [`HomeGallery.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/content/HomeGallery.tsx): Vista previa de fotos en la página principal.
  * [`LocationBrief.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/content/LocationBrief.tsx): Sección de ubicación con mapa interactivo real de Google Maps y botones de navegación Waze y contacto WhatsApp.
  * [`RestaurantHighlight.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/content/RestaurantHighlight.tsx): Sección informativa del restaurante de leña.
  * [`StorySection.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/content/StorySection.tsx): Historia y raíces familiares de la Casona.
  * [`TrustBar.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/content/TrustBar.tsx): Sección bilingüe que destaca los pilares de unicidad de la experiencia (Historia Viva, Sabores Auténticos e Inmersión Rural) en un diseño claro premium.
  * [`WhyChooseUs.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/content/WhyChooseUs.tsx): Razones principales para elegir la experiencia de la casona.
* **`experiences/` (Lógica e interfaz del catálogo de experiencias)**
  * [`BookingSidebar.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/experiences/BookingSidebar.tsx): Sidebar de reserva de la plantilla nueva (sticky en desktop, tarjeta en flujo en mobile): 3 precios con rangos de edad, horarios, CTA "Reservar ahora" a WhatsApp y el número +506 6081-7929 como botón secundario.
  * [`MobileBookingBar.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/experiences/MobileBookingBar.tsx): Barra sticky inferior de mobile (`lg:hidden`) con precio "desde" + botón Reservar — el mecanismo primario de conversión en mobile de la plantilla nueva.
  * [`ExperienceCard.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/experiences/ExperienceCard.tsx): Tarjeta de experiencia individual en el catálogo.
  * [`ExperienceFilter.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/experiences/ExperienceFilter.tsx): Barra de pestañas para filtrar por categoría.
  * [`ExperienceGrid.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/experiences/ExperienceGrid.tsx): Rejilla responsiva para renderizar el catálogo.
  * [`FeaturedExperiences.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/experiences/FeaturedExperiences.tsx): Carrusel o rejilla de experiencias destacadas en el Home (contiene el array hardcodeado `featuredSlugs` con slugs ES — actualizarlo si cambian).
* **`forms/` (Formularios validados con react-hook-form + zod)**
  * [`AgencyQuoteForm.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/forms/AgencyQuoteForm.tsx): Formulario de cotización personalizado para agencias y operadores. Incluye validación Zod, campo de correo `type="email"`, grid de 2 columnas para Nombre de Contacto + País de la Agencia (dropdown bilingüe con el estándar ISO 3166-1 y type-to-select), selector de prefijo telefónico internacional (`phonePrefix`) ordenado numéricamente con USA (`+1 (US)`) de primero y sincronizado automáticamente según el país seleccionado, y campos de selección múltiple (casillas) para rango estimado de clientes por reservación y canal preferido de respuesta.
  * [`ContactForm.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/forms/ContactForm.tsx): Formulario de contacto general.
* **`navigation/` (Barras de navegación y pie de página)**
  * [`Footer.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/navigation/Footer.tsx): Pie de página bilingüe.
  * [`Header.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/navigation/Header.tsx): Barra de navegación con logo y menús adaptables.
* **`pages/` (Vistas completas de página)**
  * [`AboutPage.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/pages/AboutPage.tsx): Vista de Quiénes Somos.
  * [`AgenciesPage.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/pages/AgenciesPage.tsx): Vista de la sección de agencias.
  * [`CancellationPage.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/pages/CancellationPage.tsx): Políticas de cancelación.
  * [`ContactPage.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/pages/ContactPage.tsx): Vista de contacto.
  * [`ExperienceDetailV2.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/pages/ExperienceDetailV2.tsx): Plantilla **nueva** de detalle (server component, mobile-first). Se activa automáticamente cuando la experiencia tiene el campo `overview` en la data. Estructura: hero full-width con overlay `bg-primary/85`, migas + badges, recuadros de datos rápidos con iconos dorados (duración/grupo/dificultad/tipo), overview, highlights en tarjetas, galería con scroll horizontal snap en mobile, franja de identidad de marca, itinerario timeline sin horas, opciones de alimentación, tarjeta Incluye (✓ verdes) / No incluye (✗ terracota) / Qué llevar (checklist) con títulos congruentes y listas en columnas de 3, bloque Punto de encuentro (mapa embebido + link), FAQ en acordeón nativo con JSON-LD `FAQPage`, y experiencias relacionadas.
  * [`ExperiencesPage.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/pages/ExperiencesPage.tsx): Catálogo de experiencias.
  * [`GalleryPage.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/pages/GalleryPage.tsx): Visualización de fotos con filtro y lightbox con gestos táctiles de deslizamiento (swipe left/right), estado de sincronización `isImageLoading` para evitar mostrar alt preliminar, spinner dorado y precarga silenciosa de imágenes adyacentes.
  * [`RestaurantPage.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/pages/RestaurantPage.tsx): Menú de propuesta gastronómica personalizada (2 columnas en escritorio, 1 en móvil con iconos de llama dorados, CTA de reserva directa a WhatsApp), foto de hero corregida (`casona-los-rodriguez-traditional-dining-room-004.webp`) y cierre de página con `<FullViewportParallax>` (`authentic-costa-rican-food-experience.webp`).
  * [`TermsPage.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/pages/TermsPage.tsx): Términos y condiciones legales.
* **`ui/` (Componentes atómicos)**
  * [`BookingCTA.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/ui/BookingCTA.tsx): Botón estándar de reserva.
  * [`Button.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/ui/Button.tsx): Botón genérico configurable.
  * [`Container.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/ui/Container.tsx): Envoltorio contenedor alineado.
  * [`FullViewportParallax.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/ui/FullViewportParallax.tsx): Componente reutilizable de Parallax de Ventana Fija recortado por CSS nativo (`[clip-path:inset(0)]` + `position: fixed inset-0 h-screen w-screen`). Mantiene la imagen 100% fija en el fondo de la pantalla (`100vh`) mientras la sección actúa como una ventana transparente que se desplaza por encima ("pasando por la foto completa"). Funciona con 0% JavaScript en el scroll, 0ms de retraso, 0 brincos a 120Hz ProMotion en celulares (iOS Safari y Android Chrome) y 0 franjas marrones superiores.
  * [`LanguageSwitcher.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/ui/LanguageSwitcher.tsx): Selector interactivo de idioma (ES / EN).
  * [`SectionTitle.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/ui/SectionTitle.tsx): Título estilizado para secciones.
  * [`WhatsAppButton.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/ui/WhatsAppButton.tsx): Botón flotante directo para chat de soporte (+506 6081-7929). En las páginas de detalle de experiencia se oculta en mobile (`hidden lg:flex`) porque la barra sticky de reserva ocupa el borde inferior.

---

## 5. Páginas y Enrutamiento (Rutas Confirmadas)

El enrutamiento está segmentado dinámicamente según el locale en `/src/app/[locale]/`:

| Ruta de Producción (ES) | Ruta de Producción (EN) | Componente Responsable |
| :--- | :--- | :--- |
| `/` (Redirección automática) | `/` (Redirección automática) | [`page.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/app/[locale]/page.tsx) |
| `/es/nosotros` | `/en/about` | [`nosotros`](file:///c:/Proyectos/casona_los_rodriguez/src/app/[locale]/nosotros/page.tsx) / [`about`](file:///c:/Proyectos/casona_los_rodriguez/src/app/[locale]/about/page.tsx) |
| `/es/agencias` | `/en/agencies` | [`agencias`](file:///c:/Proyectos/casona_los_rodriguez/src/app/[locale]/agencias/page.tsx) / [`agencies`](file:///c:/Proyectos/casona_los_rodriguez/src/app/[locale]/agencies/page.tsx) |
| `/es/contacto` | `/en/contact` | [`contacto`](file:///c:/Proyectos/casona_los_rodriguez/src/app/[locale]/contacto/page.tsx) / [`contact`](file:///c:/Proyectos/casona_los_rodriguez/src/app/[locale]/contact/page.tsx) |
| `/es/experiencias` | `/en/experiences` | [`experiencias`](file:///c:/Proyectos/casona_los_rodriguez/src/app/[locale]/experiencias/page.tsx) / [`experiences`](file:///c:/Proyectos/casona_los_rodriguez/src/app/[locale]/experiences/page.tsx) |
| `/es/experiencias/[slug]` | `/en/experiences/[slug]` | [`[slug]`](file:///c:/Proyectos/casona_los_rodriguez/src/app/[locale]/experiencias/[slug]/page.tsx) / [`[slug]`](file:///c:/Proyectos/casona_los_rodriguez/src/app/[locale]/experiences/[slug]/page.tsx) |
| `/es/galeria` | `/en/gallery` | [`galeria`](file:///c:/Proyectos/casona_los_rodriguez/src/app/[locale]/galeria/page.tsx) / [`gallery`](file:///c:/Proyectos/casona_los_rodriguez/src/app/[locale]/gallery/page.tsx) |
| `/es/restaurante` | `/en/restaurant` | [`restaurante`](file:///c:/Proyectos/casona_los_rodriguez/src/app/[locale]/restaurante/page.tsx) / [`restaurant`](file:///c:/Proyectos/casona_los_rodriguez/src/app/[locale]/restaurant/page.tsx) |
| `/es/terminos-y-condiciones` | `/en/terms-and-conditions` | [`terminos-y-condiciones`](file:///c:/Proyectos/casona_los_rodriguez/src/app/[locale]/terminos-y-condiciones/page.tsx) / [`terms-and-conditions`](file:///c:/Proyectos/casona_los_rodriguez/src/app/[locale]/terms-and-conditions/page.tsx) |
| `/es/politica-de-cancelacion` | `/en/cancellation-policy` | [`politica-de-cancelacion`](file:///c:/Proyectos/casona_los_rodriguez/src/app/[locale]/politica-de-cancelacion/page.tsx) / [`cancellation-policy`](file:///c:/Proyectos/casona_los_rodriguez/src/app/[locale]/cancellation-policy/page.tsx) |

### Slugs de experiencias y redirects (rediseño de detalle)

Las páginas `[slug]` resuelven la experiencia por locale (`exp.slug` para ES, `exp.slugEN` para EN), tienen `generateMetadata` propio (vía `src/lib/experienceSeo.ts`) y renderizan siempre `ExperienceDetailV2` (la plantilla legacy `ExperienceDetailPage`/`BookingCard` se eliminó al cerrar la Fase 3; slugs inválidos devuelven `notFound()`).

| Experiencia | Slug ES | Slug EN | Estado |
| :--- | :--- | :--- | :--- |
| Tour Histórico Cultural | `tour-historico-cultural-la-fortuna` (sin cambio) | `cultural-heritage-tour-la-fortuna` (**nuevo**; redirect permanente 308 desde `historical-cultural-tour-la-fortuna` en `next.config.ts`) | ✅ Fase 1 completa |
| Cooking Class | `clase-cocina-tradicional-la-fortuna` (**nuevo**; redirect 308 desde `clase-cocina-tia-yami`) | `traditional-cooking-class-la-fortuna` (**nuevo**; redirect 308 desde `cooking-class-aunt-yami`) | ✅ Fase 2 completa |
| Day Pass | `casona-farm-day-pass-la-fortuna` (**nuevo**; redirect 308 desde `day-pass-casona-finca`) | `casona-farm-day-pass-la-fortuna` (**nuevo**, mismo slug en ambos idiomas; redirect 308 desde `day-pass-casona-farm`) | ✅ Fase 3 completa |

Los enlaces internos a detalles se generan dinámicamente desde la data (`experiences.ts`), salvo `featuredSlugs` en `FeaturedExperiences.tsx` (slugs ES hardcodeados).

---

## 6. Archivos de Datos y Tipos

* **`src/types/experience.ts`**: Define los tipos para modelar experiencias (`Experience`, `ExperienceCategory`, `ExperienceBadge`, `ExperiencePricing`, `ExperienceHighlight`, `ExperienceFaqItem`, `ExperienceBrandIdentity`). Desde la Fase 1 del rediseño, `Experience` tiene campos extendidos **opcionales** cuya presencia (en concreto `overview`) activa la plantilla nueva: `h1/h1EN`, `overview/overviewEN`, `highlights/highlightsEN`, `itinerary/itineraryEN` (+ `itineraryNote`), `foodOptions/foodOptionsEN`, `brandIdentity/brandIdentityEN`, `faq/faqEN`, `maxPersons`, `difficulty`, `tourType`, `whatToBring/whatToBringEN` (arrays), `meetingPointUrl`, `whatsappBookingUrl` (URLs literales ES/EN) y `seoHighlights`.
* **`src/data/experiences.ts`**: Array de objetos con toda la información localizada para las 3 experiencias oficiales. Las 3 tienen el contenido extendido completo del rediseño (el Day Pass es la única que usa `itineraryNote`; la Cooking Class es la única **sin** `foodOptions`).
* **`src/lib/experienceSeo.ts`**: Helpers `findExperience(locale, slug)` y `getExperienceMetadata(locale, slug)` — generan los metadatos únicos por página de detalle (title, description, keywords, canonical, OG y Twitter) desde los campos `seoTitle*`/`seoDescription*` de la data.
* **`src/lib/gallery.ts`**: Helper de Node.js para escanear y cargar dinámicamente las imágenes de la galería del File System.
* **`src/data/gallery-metadata.ts`**: Diccionario de metadatos de las fotos de la galería para alt texts bilingües (también lo usa `ExperienceDetailV2` para los alt de su galería).
* **`src/data/heroSlides.ts`**: Contenido e imágenes del carrusel Hero en el inicio.
* **`src/data/countries.ts`**: Dataset completo basado en el estándar ISO 3166-1 (240+ países y territorios del mundo) con atributos `code`, `nameES`, `nameEN`, `dialCode` y `flag`. Incluye las funciones helper `getSortedCountries(locale)` (ordena alfabéticamente según el idioma activo para búsqueda type-to-select con el teclado) y `getCountriesSortedByDialCode()` (ordena numéricamente por código telefónico con USA `+1` fijado al inicio).
* **`src/dictionaries/es.ts` y `src/dictionaries/en.ts`**: Diccionarios estáticos que definen los textos comunes del sitio (botones, banners, navegación, secciones de contacto, formulario de agencias con correo `agencias@casonalosrodriguez.cr`). Incluyen los labels de rangos de edad para precios: `common.adultsRange` ("Adultos (11+)"), `common.childrenRange` ("Niños (5–10)"), `common.infantsRange` ("Infantes (0–4)").

---

## 7. Estructura de Imágenes en `/public/images`

Las imágenes reales del sitio se organizan en:
* `/images/hero/`: Fotos de portada y fachadas principales de la Casona.
* `/images/logo/`: Variaciones de tamaño del logotipo para encabezado, retina y pie de página.
* `/images/gallery/`:
  * `farmhouse/` (La Casona e Instalaciones)
  * `restaurant-kitchen/` (Fogón de leña, ollas de barro y preparación)
  * `typical-food/` (Platillos tradicionales costarricenses)
  * `farm-trapiche/` (Finca, huerto y molienda de caña)
  * `traditional-events/` (Eventos culturales y bailes folclóricos)
  * `customer-experiences/` (Fotos y vivencias de clientes)

---

## 8. Identidad Visual, Paleta de Colores y Tipografías

* **Alineación Visual:** Rústica, premium, cálida, histórica y auténtica. Se debe evitar un diseño corporativo frío, minimalismo futurista o la sensación de plantilla genérica.

### Paleta de Colores (CSS Variables en `globals.css`)
* **Marrón Oscuro (`--color-primary: #4A2511`):** Usado para títulos y textos de marca principales.
* **Dorado (`--color-gold: #C9A84C`):** Detalles premium, acentos elegantes y botones secundarios.
* **Crema Rústico (`--color-cream: #F5F0E8`):** Fondo principal del sitio web.
* **Crema Oscuro (`--color-cream-dark: #EDE5D8`):** Fondo alternativo para el pie de página (Footer) para generar un contraste sutil de cierre.
* **Azul Colonial (`--color-blue-colonial: #1A5EA8`):** Color oficial de la fachada de la Casona, usado en botones, bordes representativos y enlaces.
* **Rojo Terracota (`--color-terracotta: #C0392B`):** Usado exclusivamente para llamadas a la acción (CTAs) principales y botones de reserva.
* **Verde Jungla (`--color-jungle: #2D6A4F`):** Representación de la naturaleza, la huerta y los entornos orgánicos.
* **Blanco Cálido (`--color-white-warm: #FDFAF5`):** Fondos secundarios en tarjetas y contenedores alternos.

### Tipografías
* **Títulos (H1 / H2):** `Cormorant Garamond` (estilo elegante y tradicional).
* **Subtítulos emocionales / frases:** `Lora` en cursiva.
* **Cuerpo de texto y botones:** `Nunito Sans` (alta legibilidad).

### Diseño de Cabeceras (Hero) de Páginas Secundarias
* **Estructura:** Las imágenes de fondo deben tener una opacidad del 100% (sin clases restrictivas como `opacity-20` / `opacity-15`) para lucir claras y detalladas.
* **Capa de Color:** Para garantizar el contraste de los textos superpuestos en blanco y oro, se debe emplear una capa superior con el color primario marrón de marca al **85% de opacidad** (`bg-primary/85`).

---

## 9. Vocabulario de Marca

* **Usar siempre:**
  * *"Experiencias"* (en lugar de tours o productos).
  * *"Clase de cocina típica"* / *"Cocina tradicional con familia local"*.
  * *"Cenas culturales"*.
  * *"Reservar experiencia"*.
  * *"Reservar ahora"* (para botón CTA del restaurante enlazado a WhatsApp).
  * *"Solicitar cotización"* (para agencias).
* **Evitar:**
  * *"Productos"*.
  * *"Paquetes"*.
  * *"Tour genérico"*.
  * *"Restaurante genérico"*.

---

## 10. Variables de Entorno Requeridas

* `NEXT_PUBLIC_BOOKING_URL`: URL base del motor de reserva externo.
  * Si la variable no está definida o equivale a `'TODO_BOOKING_URL'`, el sistema resolverá de forma segura hacia `#` y prevendrá errores de redirección, controlada mediante [`src/lib/booking.ts`](file:///c:/Proyectos/casona_los_rodriguez/src/lib/booking.ts).

### Reserva temporal por WhatsApp (mientras no exista motor externo)

En la plantilla nueva de detalle, los botones "Reservar ahora" redirigen a **WhatsApp +506 6081-7929** en pestaña nueva, con un **mensaje precargado distinto por actividad y por idioma**. Los 6 URLs vienen literales del cliente y se guardan en el campo `whatsappBookingUrl: { es, en }` de cada experiencia en `experiences.ts` — no construir estos links a mano ni hardcodearlos en componentes. (Tanto las reservas como el soporte general utilizan el nuevo número unificado +506 6081-7929.)

---

## 11. Marcadores TODO Activos en el Código

Los siguientes placeholders deben reemplazarse a medida que se confirme la información final:
* **`TODO_BOOKING_URL`**: Enlace definitivo al motor de reservas del cliente.
* **`TODO_FORM_PROVIDER`**: Configuración del servicio externo para envíos de formularios.
* **`TODO_IMAGE`**: Imágenes reales pendientes (específicamente trapiche, huerto medicinal y bailes típicos).
* **`TODO_VALIDAR_LEGALMENTE`**: Confirmación legal final para los textos de términos y políticas de cancelación.

---

## 12. Reglas Mandatorias para Agentes

1. **Datos oficiales:** Nunca inventar testimonios, tarifas, coordenadas de GPS, logos ni horarios de atención. Usar siempre los placeholders `TODO_*` si no están disponibles.
2. **Jerarquía HTML:** Máximo un único elemento `<h1>` en cada página para SEO técnico.
3. **Optimización de imágenes:** Todas las imágenes sin excepción deben tener una etiqueta `alt` descriptiva y usar el componente `Image` de `next/image` para optimización automática.
4. **Motor de reservas:** Todos los botones de reserva deben redirigir en una nueva pestaña (`target="_blank"` con `rel="noopener noreferrer"`). Cuando exista el motor externo, agregar parámetros UTM dinámicos (`utm_source=website`, `utm_medium=booking_cta`); mientras tanto, la reserva va por WhatsApp con los URLs literales de `whatsappBookingUrl` (ver §10).
5. **Transacciones:** El sitio no procesa pagos directamente. Todo se delega al motor externo configurado.
6. **Desarrollo mobile-first (estricto):** El layout mobile se diseña primero y es la base; desktop es la escala, no al revés. Las clases Tailwind sin prefijo definen mobile; `sm:`/`md:`/`lg:` significan "a partir de" ese breakpoint. Nunca diseñar en desktop y "arreglar" mobile con overrides. En las páginas de detalle, la barra sticky inferior con precio + Reservar es el mecanismo primario de conversión en mobile; el sidebar sticky de reserva es la adaptación desktop. Verificar cada cambio primero en viewport ~375px.
7. **Restricción factual — familia Rodríguez:** La familia Rodríguez (Selim Rodríguez y Yamileth Arias) **NO son herederos ni dueños ancestrales de la casona: la alquilan para operar las experiencias**. El copy nunca debe implicar herencia, propiedad ancestral o "generaciones familiares" de los Rodríguez actuales sobre el inmueble. Los textos de identidad de marca de las páginas de detalle vienen aprobados por el cliente — no generar copy nuevo para ese bloque.
8. **Copy bilingüe aprobado:** El contenido de las páginas de detalle (overview, highlights, itinerario, FAQ, identidad de marca) proviene del brief del cliente; no reescribirlo ni traducirlo por cuenta propia salvo indicación explícita del usuario.

---

## 13. Fases del Proyecto y Tareas de la Fase 7

### Estado Actual del Proyecto
* **Fases 1 a 6 (COMPLETAS):** Configuración base, componentes comunes, página de inicio, detalles dinámicos, restaurante, galería, formularios de contacto/cotización de agencias y políticas base.
* **Pre-Fase 7 - Reestructuración y Dinamismo (COMPLETA):** Reorganización física de imágenes en carpetas en inglés, carga dinámica de la galería desde el sistema de archivos de Node.js, reducción del catálogo a 3 experiencias oficiales en el Home.
* **Fase 7 (PENDIENTE):** SEO técnico, metadatos y optimización final de rendimiento y animaciones.

### Track paralelo: Rediseño de Páginas de Detalle de Experiencias (jul 2026, brief del cliente)
* **Fase 1 — Tour Histórico Cultural / Cultural Heritage Tour (COMPLETA, jul 2026):** plantilla nueva `ExperienceDetailV2` mobile-first con todo el contenido bilingüe del brief; slug EN nuevo con redirect 308; metadatos únicos por página de detalle (corrigió que las 3 compartían el title del homepage — aplica también a las que aún usan la plantilla legacy); JSON-LD `FAQPage` por idioma; reserva por WhatsApp; precios/duración/horarios actualizados; sidebar y barra de datos sin duplicación; itinerario timeline sin horas; tarjeta Incluye/No incluye/Qué llevar con títulos congruentes.
* **Fase 2 — Cooking Class con Tía Yami (COMPLETA, jul 2026):** contenido bilingüe completo del brief cargado en la data (activa `ExperienceDetailV2`); slugs nuevos ES `clase-cocina-tradicional-la-fortuna` y EN `traditional-cooking-class-la-fortuna` con redirects 308; `featuredSlugs` actualizado; precios $70/$38/gratis (antes $39/$29); **sin** bloque de opciones de alimentación (la comida es la actividad); sin edad mínima (FAQ y seoHighlight de "4 años" eliminados por decisión del usuario); término corregido a "Arroz con Siempre".
* **Fase 3 — Casona & Farm Day Pass (COMPLETA, jul 2026):** contenido bilingüe completo del brief; slug único `casona-farm-day-pass-la-fortuna` para ambos idiomas con redirects 308 desde `day-pass-casona-finca` (ES) y `day-pass-casona-farm` (EN); precios $40/$25/gratis (antes $59/$49); duración 3 h (antes 4 h; Excel como fuente de verdad); mínimo 1 persona; nota de itinerario variable (`itineraryNote`); sin mención de mariposario/ranario; el show folclórico nocturno queda explícitamente excluido (FAQ). Al cerrar esta fase se eliminó la plantilla legacy (`ExperienceDetailPage.tsx` + `BookingCard.tsx`) y `featuredSlugs` quedó con los 3 slugs nuevos.
* **Reglas del track:** sin ratings/estrellas ni testimonios; itinerarios sin horas fijas; precios solo en el bloque de reserva (no en copy narrativo); todo bilingüe con el copy exacto del brief.

### Track paralelo: Rediseño y Optimización de la Página de Agencias y Formulario de Cotización (COMPLETA, jul 2026)
* **Copy y Tono:** Reescrito el copy de la página y formulario eliminando acrónimos técnicos (*B2B*) y adoptando una redacción natural (*"Alianzas para Agencias y Turoperadores"*, *"Convenios Comerciales y Tarifas Preferenciales"*).
* **Contacto Exclusivo:** Integrado correo especializado `agencias@casonalosrodriguez.cr` para el canal de operadores.
* **Formulario Simplificado:** Removidos campos que generaban fricción (fecha, experiencia, conteo exacto de pax) y agregados campos de selección múltiple (casillas) para *Rango de clientes por reservación* y *Canal preferido de respuesta*.
* **Catálogo de Países e i18n:** Creado `src/data/countries.ts` (240+ países ISO 3166-1) con type-to-select navegable por teclado en el idioma activo, y selector de prefijo telefónico internacional (`phonePrefix`) ordenado numéricamente con USA (`+1 (US)`) de primero y sincronización automática según el país de la agencia.

### Tareas Pendientes para la Fase 7:
* [] **SEO Técnico Completo:** Optimización de metadatos estáticos y dinámicos por página (`title`, `description`, `keywords`). *Completado: metadatos dinámicos bilingües en layout base, favicon SVG e imagen para compartir en chats (og:image) optimizada (<300KB).*
* [ ] **Schema Markup:** Integrar datos estructurados en formato JSON-LD para `LocalBusiness`, `TouristAttraction` (experiencias) y `Restaurant` para optimizar Rich Snippets en Google.
* [ ] **Archivos SEO:** Configurar sitemap dinámico (`sitemap.xml`) y el archivo estático `robots.txt`.
* [ ] **Hreflang Tags:** Declarar etiquetas hreflang cruzadas entre las páginas localizadas `/es` y `/en` para evitar penalizaciones por contenido duplicado.
* [/] **Core Web Vitals:** Auditoría de velocidad y optimización de rendimiento (Lazy loading, optimización de fuentes y tamaños de imágenes WebP). *Completado: Estabilización de altura del Hero Carousel utilizando CSS Grid para eliminar por completo el Cumulative Layout Shift (CLS) en Desktop y Mobile.*
* [/] **Animaciones Micro-interactivas:** Integrar transiciones fluidas de entrada (`FadeIn`) y efectos de parallax sutiles que enriquezcan la estética visual premium sin perjudicar el rendimiento. *Completado: Componente reutilizable `FullViewportParallax` de Ventana Fija nativa (`clip-path: inset(0)`) implementado en el Home (`FinalCTA.tsx`) y Restaurante (`RestaurantPage.tsx`), ofreciendo movimiento continuo de ventana fija sin brincos a 120Hz ni franjas marrones en móviles (iOS/Android) y escritorio. Gestos táctiles de deslizamiento (swipe left/right) y sincronización de carga de imágenes sin alt preliminar en los lightboxes de la Galería y Galería de Experiencias.*
* [ ] **Google Analytics 4:** Añadir los scripts de GA4 vinculando la variable de medición correspondiente.

---

## 14. Datos Reales Pendientes de Confirmar con el Cliente

* URL del motor de reservas externo para asignar a `NEXT_PUBLIC_BOOKING_URL`.
* Endpoint del proveedor del formulario de contacto / cotizaciones (`TODO_FORM_PROVIDER`).
* Fotografías y recursos faltantes para trapiche, huerto y bailes folclóricos (`TODO_IMAGE`).
* Textos revisados legalmente para Términos de Servicio y Políticas de Cancelación (`TODO_VALIDAR_LEGALMENTE`).

### Discrepancias abiertas del rediseño de detalle (a confirmar con el cliente)
* ~~**Duración del Day Pass (Fase 3):** el Excel del cliente dice 3 horas, el sitio actual muestra 4 horas.~~ — **RESUELTO (jul 2026):** se usó 3 h (Excel como fuente de verdad), con nota en el commit de la Fase 3. (La misma discrepancia del Tour Cultural ya se había resuelto igual en Fase 1.)
* ~~**Cooking Class (Fase 2):** tensión entre "edad mínima para participar: 4 años" y el precio "Infants (0–4): Free"~~ — **RESUELTO (jul 2026):** el usuario decidió eliminar la edad mínima; los infantes (0–4, gratis) pueden participar.
* **FAQ del catálogo (`ExperiencesPage.tsx`):** dice "infantes (menores de 3 años) entran gratis" (contradice el rango oficial 0–4) y menciona el "motor de reservas externo" cuando hoy la reserva va por WhatsApp. Pendiente de decisión del usuario para alinearlo.
