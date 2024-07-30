// src/utils/utils.js

/**
 * Equalizes the heights of elements matching the given CSS selector.
 * Applies only if the screen width is greater than the specified breakpoint.
 * @param {string} selector - The CSS selector for the elements to equalize.
 * @param {number} breakpoint - The screen width breakpoint in pixels.
 */
export function equalizeHeights(selector, breakpoint = 768) {
  function applyEqualization() {
    if (window.innerWidth > breakpoint) {
      const elements = document.querySelectorAll(selector);
      let maxHeight = 0;

      // First, reset all heights to auto to get their natural height
      elements.forEach(element => {
        element.style.height = 'auto';
      });

      // Find the maximum height
      elements.forEach(element => {
        const height = element.offsetHeight;
        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      // Set all elements to the maximum height
      elements.forEach(element => {
        element.style.height = `${maxHeight}px`;
      });
    } else {
      // Reset heights to auto for smaller screens
      document.querySelectorAll(selector).forEach(element => {
        element.style.height = 'auto';
      });
    }
  }

  // Apply equalization on resize and load
  window.addEventListener('resize', applyEqualization);
  window.addEventListener('load', applyEqualization);

  // Apply immediately
  applyEqualization();
}
