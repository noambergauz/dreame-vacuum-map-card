import { useMemo, useEffect, type RefObject } from 'react';
import type { Theme, ThemeType, CustomThemeConfig } from '../themes';
import { getTheme, applyCSSVariables } from '../themes';

interface UseThemeOptions {
  themeType?: ThemeType;
  customThemeConfig?: CustomThemeConfig;
  containerRef?: RefObject<HTMLElement | null>;
}

/**
 * Hook to manage theme application
 * @param options Theme options including type and custom config
 * @returns The active theme object
 */
export function useTheme({ themeType = 'light', customThemeConfig, containerRef }: UseThemeOptions): Theme {
  // Get the theme based on the type and custom config
  const theme = useMemo(() => {
    return getTheme(themeType, customThemeConfig);
  }, [themeType, customThemeConfig]);

  // Apply CSS variables when theme changes
  useEffect(() => {
    if (containerRef?.current) {
      applyCSSVariables(containerRef.current, theme);
    }
  }, [theme, containerRef]);

  return theme;
}
