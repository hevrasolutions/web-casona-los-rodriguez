<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Casona Los Rodríguez — Guía de Desarrollo para Agentes (AGENTS.md)

**Última Actualización:** 2026-06-07
**Fase Activa:** Fase 7 — SEO Técnico y Optimización (Pendiente)

---

## 1. Resumen del Negocio

* **Nombre:** Casona Los Rodríguez
* **Dominio:** `casonalosrodriguez.cr`
* **Ubicación:** Sona Fluca, La Fortuna, San Carlos, Costa Rica
* **Contacto:** Celin Rodríguez López
* **Teléfono/WhatsApp:** +506 8809-4163
* **Correo de contacto:** `info@casonalosrodriguez.cr`
* **Descripción:** Casona rural costarricense con más de 120 años de historia. Espacio cultural, gastronómico y turístico que ofrece cocina 100% a la leña, trapiche tradicional de bueyes, clases de cocina típica, bailes folclóricos, música en vivo, huerta de plantas medicinales y animales de granja. Atiende a turistas individuales, familias, parejas, grupos privados, agencias y operadores de turismo (DMCs).

### Propuesta de Valor Central
> "Una experiencia cultural costarricense en una casona rural de más de 120 años, donde el visitante cocina, come, aprende, baila y revive las tradiciones del campo tico."

### Público Meta
Turistas internacionales (EE.UU., Canadá, Europa, LATAM), familias, parejas, grupos pequeños, agencias de turismo receptivo, coordinadores educativos y corporativos.

### Catálogo de Experiencias Reales (Precios Confirmados)
1. **Experiencia Cultural Completa Costarricense:** $69 adulto / $55 niño | Duración: 4.5 – 5 horas | **BESTSELLER**
2. **Experiencia Rural Costarricense:** $59 adulto / $49 niño | Duración: 4 horas
3. **Cocina Tradicional con Familia Local:** $39 adulto / $29 niño | Duración: 2 horas
4. **Noche Campesina con Cultura y Baile:** $49 adulto (grupos de 2 a 6 personas) / $42 adulto (grupos 7+) | Duración: 4 horas | Inicio: 5:00 p.m.
5. **Experiencia Cultural con Música en Vivo:** $55 adulto | Duración: 4 horas
6. **Noche Campesina Premium:** $65 adulto | Duración: 4 horas | **PREMIUM**
7. **Experiencia Nocturna Express:** $39 adulto / $25 niño | Duración: 2.5 horas | Mínimo 4 personas | Horario: 5:00 p.m. – 7:30 p.m.

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
  * [`FinalCTA.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/content/FinalCTA.tsx): Llamado a la acción general final.
  * [`HeroBasic.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/content/HeroBasic.tsx): Banner superior estático con imagen de fondo y título.
  * [`HeroCarousel.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/content/HeroCarousel.tsx): Carrusel dinámico para la página de inicio.
  * [`HomeGallery.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/content/HomeGallery.tsx): Vista previa de fotos en la página principal.
  * [`LocationBrief.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/content/LocationBrief.tsx): Sección de ubicación con mapa interactivo real de Google Maps y botones de navegación Waze y contacto WhatsApp.
  * [`RestaurantHighlight.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/content/RestaurantHighlight.tsx): Sección informativa del restaurante de leña.
  * [`StorySection.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/content/StorySection.tsx): Historia y raíces familiares de la Casona.
  * [`TrustBar.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/content/TrustBar.tsx): Sección bilingüe que destaca los pilares de unicidad de la experiencia (Historia Viva, Sabores Auténticos e Inmersión Rural) en un diseño claro premium.
  * [`WhyChooseUs.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/content/WhyChooseUs.tsx): Razones principales para elegir la experiencia de la casona.
* **`experiences/` (Lógica e interfaz del catálogo de experiencias)**
  * [`BookingCard.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/experiences/BookingCard.tsx): Tarjeta lateral para reservas individuales en los detalles.
  * [`ExperienceCard.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/experiences/ExperienceCard.tsx): Tarjeta de experiencia individual en el catálogo.
  * [`ExperienceFilter.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/experiences/ExperienceFilter.tsx): Barra de pestañas para filtrar por categoría.
  * [`ExperienceGrid.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/experiences/ExperienceGrid.tsx): Rejilla responsiva para renderizar el catálogo.
  * [`FeaturedExperiences.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/experiences/FeaturedExperiences.tsx): Carrusel o rejilla de experiencias destacadas en el Home.
* **`forms/` (Formularios validados con react-hook-form + zod)**
  * [`AgencyQuoteForm.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/forms/AgencyQuoteForm.tsx): Formulario de cotización personalizado para agencias.
  * [`ContactForm.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/forms/ContactForm.tsx): Formulario de contacto general.
* **`navigation/` (Barras de navegación y pie de página)**
  * [`Footer.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/navigation/Footer.tsx): Pie de página bilingüe.
  * [`Header.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/navigation/Header.tsx): Barra de navegación con logo y menús adaptables.
* **`pages/` (Vistas completas de página)**
  * [`AboutPage.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/pages/AboutPage.tsx): Vista de Quiénes Somos.
  * [`AgenciesPage.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/pages/AgenciesPage.tsx): Vista de la sección de agencias.
  * [`CancellationPage.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/pages/CancellationPage.tsx): Políticas de cancelación.
  * [`ContactPage.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/pages/ContactPage.tsx): Vista de contacto.
  * [`ExperienceDetailPage.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/pages/ExperienceDetailPage.tsx): Detalle dinámico para experiencias.
  * [`ExperiencesPage.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/pages/ExperiencesPage.tsx): Catálogo de experiencias.
  * [`GalleryPage.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/pages/GalleryPage.tsx): Visualización de fotos con filtro y lightbox.
  * [`RestaurantPage.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/pages/RestaurantPage.tsx): Menú de comidas e información gastronómica.
  * [`TermsPage.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/pages/TermsPage.tsx): Términos y condiciones legales.
* **`ui/` (Componentes atómicos)**
  * [`BookingCTA.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/ui/BookingCTA.tsx): Botón estándar de reserva.
  * [`Button.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/ui/Button.tsx): Botón genérico configurable.
  * [`Container.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/ui/Container.tsx): Envoltorio contenedor alineado.
  * [`LanguageSwitcher.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/ui/LanguageSwitcher.tsx): Selector interactivo de idioma (ES / EN).
  * [`SectionTitle.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/ui/SectionTitle.tsx): Título estilizado para secciones.
  * [`WhatsAppButton.tsx`](file:///c:/Proyectos/casona_los_rodriguez/src/components/ui/WhatsAppButton.tsx): Botón flotante directo para chat de soporte.

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

---

## 6. Archivos de Datos y Tipos

* **`src/types/experience.ts`**: Define los tipos para modelar experiencias (`Experience`, `ExperienceCategory`, `ExperienceBadge`, `ExperiencePricing`).
* **`src/data/experiences.ts`**: Array de objetos con toda la información localizada para las 7 experiencias.
* **`src/data/gallery.ts`**: Mapeo y agrupado de imágenes de la galería con sus textos descriptivos en español e inglés.
* **`src/data/heroSlides.ts`**: Contenido e imágenes del carrusel Hero en el inicio.
* **`src/dictionaries/es.ts` y `src/dictionaries/en.ts`**: Diccionarios estáticos que definen los textos comunes del sitio (botones, banners, navegación, secciones de contacto).

---

## 7. Estructura de Imágenes en `/public/images`

Las imágenes reales del sitio se organizan jerárquicamente en:
* `/images/hero/`: Fotos de portada y fachadas principales de la Casona.
* `/images/logo/`: Variaciones de tamaño del logotipo para encabezado, retina y pie de página.
* `/images/gallery/`:
  * `farmhouse-facilities/` (Facilidades y arquitectura)
  * `family-experiences/` (Experiencias y talleres familiares)
  * `farm-garden-trapiche/` (Trapiche de bueyes, animales, cultivos)
  * `wood-fired-kitchen/` (Recetas e imágenes del fogón de leña)
  * `cooking/` (Taller de preparación culinaria)
  * `culture-events/` (Presentaciones culturales de música y danza)
  * `traditional-food/` (Imágenes de los platos de comida típica)
  * `farm/` (Instalaciones de la finca)

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
4. **Motor de reservas:** Todos los botones de reserva deben redirigir en una nueva pestaña (`target="_blank"` con `rel="noopener noreferrer"`) agregando parámetros UTM dinámicos (`utm_source=website`, `utm_medium=booking_cta`).
5. **Transacciones:** El sitio no procesa pagos directamente. Todo se delega al motor externo configurado.

---

## 13. Fases del Proyecto y Tareas de la Fase 7

### Estado Actual del Proyecto
* **Fases 1 a 6 (COMPLETAS):** Configuración base, componentes comunes, página de inicio, detalles dinámicos, restaurante, galería, formularios de contacto/cotización de agencias y políticas base.
* **Fase 7 (PENDIENTE):** SEO técnico, metadatos y optimización final de rendimiento y animaciones.

### Tareas Pendientes para la Fase 7:
* [/] **SEO Técnico Completo:** Optimización de metadatos estáticos y dinámicos por página (`title`, `description`, `keywords`). *Completado: metadatos dinámicos bilingües en layout base, favicon SVG e imagen para compartir en chats (og:image) optimizada (<300KB).*
* [ ] **Schema Markup:** Integrar datos estructurados en formato JSON-LD para `LocalBusiness`, `TouristAttraction` (experiencias) y `Restaurant` para optimizar Rich Snippets en Google.
* [ ] **Archivos SEO:** Configurar sitemap dinámico (`sitemap.xml`) y el archivo estático `robots.txt`.
* [ ] **Hreflang Tags:** Declarar etiquetas hreflang cruzadas entre las páginas localizadas `/es` y `/en` para evitar penalizaciones por contenido duplicado.
* [ ] **Core Web Vitals:** Auditoría de velocidad y optimización de rendimiento (Lazy loading, optimización de fuentes y tamaños de imágenes WebP).
* [ ] **Animaciones Micro-interactivas:** Integrar transiciones fluidas de entrada (`FadeIn`) y efectos de parallax sutiles que enriquezcan la estética visual premium sin perjudicar el rendimiento.
* [ ] **Google Analytics 4:** Añadir los scripts de GA4 vinculando la variable de medición correspondiente.

---

## 14. Datos Reales Pendientes de Confirmar con el Cliente

* URL del motor de reservas externo para asignar a `NEXT_PUBLIC_BOOKING_URL`.
* Endpoint del proveedor del formulario de contacto / cotizaciones (`TODO_FORM_PROVIDER`).
* Fotografías y recursos faltantes para trapiche, huerto y bailes folclóricos (`TODO_IMAGE`).
* Textos revisados legalmente para Términos de Servicio y Políticas de Cancelación (`TODO_VALIDAR_LEGALMENTE`).
