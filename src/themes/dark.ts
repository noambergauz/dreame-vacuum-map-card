import type { Theme } from './types';

export const darkTheme: Theme = {
  name: 'dark',
  colors: {
    // Background colors
    cardBg: '#1c1c1e',
    surfaceBg: '#2c2c2e',
    surfaceSecondary: '#3a3a3c',
    surfaceTertiary: '#48484a',
    surfaceBgHover: 'rgba(255, 255, 255, 0.1)',

    // Text colors
    textPrimary: '#ffffff',
    textPrimaryInvert: '#1a1a1a',
    textSecondary: '#aeaeb2',
    textTertiary: '#8e8e93',

    // Accent colors
    accentColor: '#5865f2',
    accentColorHover: '#409cff',
    accentBg: 'rgba(10, 132, 255, 0.2)',
    accentBgHover: 'rgba(10, 132, 255, 0.3)',
    accentBgSecondary: 'rgba(10, 132, 255, 0.1)',
    accentBgSecondaryHover: 'rgba(10, 132, 255, 0.2)',
    accentBgTransparent: 'rgba(10, 132, 255, 0.2)',
    accentShadow: 'rgba(10, 132, 255, 0.4)',
    accentColorShadowColor: 'rgba(88, 101, 242, 0.25)',

    // State colors
    warningColor: '#ff9f0a',
    warningShadow: 'rgba(255, 159, 10, 0.4)',
    errorColor: '#ff453a',
    errorColorHover: '#ff6961',
    errorShadow: 'rgba(255, 69, 58, 0.4)',

    // UI elements
    borderColor: '#48484a',
    overlayBg: 'rgba(0, 0, 0, 0.3)',
    cardShadow: 'rgba(0, 0, 0, 0.3)',
    cardShadowHover: 'rgba(0, 0, 0, 0.4)',
    handleShadow: 'rgba(0, 0, 0, 0.4)',
    handleBg: 'rgba(255, 255, 255, 0.15)',
    backdropBg: 'rgba(0, 0, 0, 0.6)',

    // Toggle specific
    toggleActive: '#2e354f',
    toggleActiveBorder: '#5865f2',
    toggleActiveShadowColor: 'rgba(88, 101, 242, 0.25)',
  },
};
