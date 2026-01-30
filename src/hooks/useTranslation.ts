import { useMemo } from 'react';
import { createTranslator, getRoomCountTranslation } from '../i18n';
import type { SupportedLanguage } from '../i18n/locales';

/**
 * Hook for using translations in components
 * @param language - The language to use (defaults to 'en')
 */
export function useTranslation(language: SupportedLanguage = 'en') {
  const t = useMemo(() => createTranslator(language), [language]);

  return {
    t,
    getRoomCountTranslation: (count: number) => getRoomCountTranslation(t, count),
  };
}
