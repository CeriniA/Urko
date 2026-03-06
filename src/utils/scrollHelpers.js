/**
 * Utilidades para scroll con offset del navbar
 */

// Altura del navbar (ajustar si cambia el diseño)
const NAVBAR_HEIGHT = 80; // Altura aproximada del navbar en px

/**
 * Hace scroll a un elemento teniendo en cuenta la altura del navbar
 * @param {string} elementId - ID del elemento al que hacer scroll
 * @param {number} extraOffset - Offset adicional opcional
 */
export const scrollToElement = (elementId, extraOffset = 0) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - NAVBAR_HEIGHT - extraOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

/**
 * Hace scroll al top de la página
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Obtiene la altura del navbar
 */
export const getNavbarHeight = () => NAVBAR_HEIGHT;
