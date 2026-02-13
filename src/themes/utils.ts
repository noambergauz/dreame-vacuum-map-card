import type { Theme, ThemeColors, CustomThemeConfig, ThemeType } from './types';
import { lightTheme } from './light';
import { darkTheme } from './dark';

/**
 * Get a theme by type
 */
export function getTheme(themeType: ThemeType, customConfig?: CustomThemeConfig): Theme {
  switch (themeType) {
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    case 'custom':
      return createCustomTheme(customConfig || {});
    default:
      return lightTheme;
  }
}

/**
 * Create a custom theme by extending a base theme
 */
export function createCustomTheme(config: CustomThemeConfig): Theme {
  const baseTheme = config.base === 'dark' ? darkTheme : lightTheme;
  
  return {
    name: 'custom',
    colors: {
      ...baseTheme.colors,
      ...config,
    },
  };
}

/**
 * Convert theme colors to CSS custom properties object
 */
export function themeToCSSVariables(colors: ThemeColors): Record<string, string> {
  return {
    '--card-bg': colors.cardBg,
    '--surface-bg': colors.surfaceBg,
    '--surface-secondary': colors.surfaceSecondary,
    '--surface-tertiary': colors.surfaceTertiary,
    '--surface-bg-hover': colors.surfaceBgHover,
    
    '--text-primary': colors.textPrimary,
    '--text-primary-invert': colors.textPrimaryInvert,
    '--text-secondary': colors.textSecondary,
    '--text-tertiary': colors.textTertiary,
    
    '--accent-color': colors.accentColor,
    '--accent-color-hover': colors.accentColorHover,
    '--accent-bg': colors.accentBg,
    '--accent-bg-hover': colors.accentBgHover,
    '--accent-bg-secondary': colors.accentBgSecondary,
    '--accent-bg-secondary-hover': colors.accentBgSecondaryHover,
    '--accent-bg-transparent': colors.accentBgTransparent,
    '--accent-shadow': colors.accentShadow,
    '--accent-color-shadow-color': colors.accentColorShadowColor,
    
    '--warning-color': colors.warningColor,
    '--warning-shadow': colors.warningShadow,
    '--error-color': colors.errorColor,
    '--error-color-hover': colors.errorColorHover,
    '--error-shadow': colors.errorShadow,
    
    '--border-color': colors.borderColor,
    '--overlay-bg': colors.overlayBg,
    '--card-shadow': colors.cardShadow,
    '--card-shadow-hover': colors.cardShadowHover,
    '--handle-shadow': colors.handleShadow,
    '--handle-bg': colors.handleBg,
    '--backdrop-bg': colors.backdropBg,
    
    '--toggle-active': colors.toggleActive,
    '--toggle-active-border': colors.toggleActiveBorder,
    '--toggle-active-shadow-color': colors.toggleActiveShadowColor,
  };
}

/**
 * Apply CSS variables to an element
 */
export function applyCSSVariables(element: HTMLElement, theme: Theme): void {
  const cssVars = themeToCSSVariables(theme.colors);
  
  Object.entries(cssVars).forEach(([property, value]) => {
    element.style.setProperty(property, value);
  });
}
