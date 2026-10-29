/**
 * Menú digital del Restaurante Casona Los Rodríguez (sitio aparte).
 * Fuente única de las URLs y @id del menú para el JSON-LD y los enlaces visibles.
 */

const MENU_BASE_URL = 'https://menu.casonalosrodriguez.cr';
const MENU_LOCALES = ['es', 'en', 'fr', 'de', 'pt'];

export function getMenuUrl(locale: string): string {
  const lang = MENU_LOCALES.includes(locale) ? locale : 'es';
  return `${MENU_BASE_URL}/${lang}/`;
}

export function getMenuId(locale: string): string {
  return `${getMenuUrl(locale)}#menu`;
}
