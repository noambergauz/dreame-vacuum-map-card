export interface ThemeColors {
  // Background colors
  cardBg: string;
  surfaceBg: string;
  surfaceSecondary: string;
  surfaceTertiary: string;
  surfaceBgHover: string;

  // Text colors
  textPrimary: string;
  textPrimaryInvert: string;
  textSecondary: string;
  textTertiary: string;

  // Accent colors
  accentColor: string;
  accentColorHover: string;
  accentBg: string;
  accentBgHover: string;
  accentBgSecondary: string;
  accentBgSecondaryHover: string;
  accentBgTransparent: string;
  accentShadow: string;
  accentColorShadowColor: string;

  // State colors
  warningColor: string;
  warningShadow: string;
  errorColor: string;
  errorColorHover: string;
  errorShadow: string;

  // UI elements
  borderColor: string;
  overlayBg: string;
  cardShadow: string;
  cardShadowHover: string;
  handleShadow: string;
  handleBg: string;
  backdropBg: string;

  // Toggle specific
  toggleActive: string;
  toggleActiveBorder: string;
  toggleActiveShadowColor: string;
}

export interface Theme {
  name: string;
  colors: ThemeColors;
}

export type ThemeType = 'light' | 'dark' | 'custom';

export interface CustomThemeConfig extends Partial<ThemeColors> {
  base?: 'light' | 'dark'; // Which theme to extend from
}
