import type { Theme } from './types';

export const lightTheme: Theme = {
  name: 'light',
  colors: {
    // Background colors
    cardBg: '#f5f5f7',
    surfaceBg: '#ffffff',
    surfaceSecondary: '#f0f0f0',
    surfaceTertiary: '#e8e8e8',
    surfaceBgHover: 'rgba(255, 255, 255, 0.5)',

    // Text colors
    textPrimary: '#1a1a1a',
    textPrimaryInvert: '#ffffff',
    textSecondary: '#666666',
    textTertiary: '#999999',

    // Accent colors
    accentColor: '#007aff',
    accentColorHover: '#0051d5',
    accentBg: '#e3f2fd',
    accentBgHover: '#bbdefb',
    accentBgSecondary: '#999999',
    accentBgSecondaryHover: '#666666',
    accentBgTransparent: 'rgba(0, 122, 255, 0.15)',
    accentShadow: 'rgba(0, 122, 255, 0.3)',
    accentColorShadowColor: 'rgba(0, 122, 255, 0.25)',

    // State colors
    warningColor: '#ff9500',
    warningShadow: 'rgba(255, 149, 0, 0.4)',
    errorColor: '#ff3b30',
    errorColorHover: '#ff1f0f',
    errorShadow: 'rgba(255, 59, 48, 0.4)',

    // UI elements
    borderColor: '#e0e0e0',
    overlayBg: 'rgba(0, 0, 0, 0.05)',
    cardShadow: 'rgba(0, 0, 0, 0.08)',
    cardShadowHover: 'rgba(0, 0, 0, 0.12)',
    handleShadow: 'rgba(0, 0, 0, 0.2)',
    handleBg: 'rgba(0, 0, 0, 0.15)',
    backdropBg: 'rgba(0, 0, 0, 0.4)',

    // Toggle specific
    toggleActive: 'rgba(0, 122, 255, 0.25)',
    toggleActiveBorder: '#0051d5',
    toggleActiveShadowColor: '#ffffff',
  },
};
