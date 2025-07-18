import themeConfig from './theme';

/**
 * Générateur de configuration de couleurs pour Tailwind CSS
 * Utilise les valeurs du thème pour générer des variantes de couleurs
 */

// Fonction pour générer une palette de couleurs à partir d'une couleur de base
const generateColorPalette = (baseColor: string) => {
  // Convertir la couleur hexadécimale en composants RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  };

  // Fonction pour convertir RGB en hexadécimal
  const rgbToHex = (r: number, g: number, b: number) => {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  // Ajuster la luminosité d'une couleur
  const adjustBrightness = (color: { r: number; g: number; b: number }, factor: number) => {
    return {
      r: Math.max(0, Math.min(255, Math.round(color.r * factor))),
      g: Math.max(0, Math.min(255, Math.round(color.g * factor))),
      b: Math.max(0, Math.min(255, Math.round(color.b * factor))),
    };
  };

  const rgbColor = hexToRgb(baseColor);

  // Générer des variantes de la couleur
  return {
    DEFAULT: baseColor,
    '50': (() => { const c = adjustBrightness(rgbColor, 1.5); return rgbToHex(c.r, c.g, c.b); })(),
    '100': (() => { const c = adjustBrightness(rgbColor, 1.3); return rgbToHex(c.r, c.g, c.b); })(),
    '200': (() => { const c = adjustBrightness(rgbColor, 1.2); return rgbToHex(c.r, c.g, c.b); })(),
    '300': (() => { const c = adjustBrightness(rgbColor, 1.1); return rgbToHex(c.r, c.g, c.b); })(),
    '400': (() => { const c = adjustBrightness(rgbColor, 1.05); return rgbToHex(c.r, c.g, c.b); })(),
    '500': baseColor,
    '600': (() => { const c = adjustBrightness(rgbColor, 0.8); return rgbToHex(c.r, c.g, c.b); })(),
    '700': (() => { const c = adjustBrightness(rgbColor, 0.6); return rgbToHex(c.r, c.g, c.b); })(),
    '800': (() => { const c = adjustBrightness(rgbColor, 0.4); return rgbToHex(c.r, c.g, c.b); })(),
    '900': (() => { const c = adjustBrightness(rgbColor, 0.2); return rgbToHex(c.r, c.g, c.b); })(),
  };
};

// Extraire la couleur principale du thème
const primaryColor = themeConfig.brand.primaryColor;
const primaryColorName = themeConfig.brand.primaryColorName;
const secondaryColor = themeConfig.brand.secondaryColor;

// Générer les couleurs pour Tailwind
const tailwindColors = {
  [primaryColorName]: generateColorPalette(primaryColor),
  'button': generateColorPalette(secondaryColor),
};

export default tailwindColors;
