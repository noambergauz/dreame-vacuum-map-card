import { useMemo, useContext } from 'react';
import { createTranslator, getRoomCountTranslation } from '@/i18n';
import type { SupportedLanguage } from '@/i18n/locales';
import { VacuumCardContext } from '@/contexts/VacuumCardContext';

/**
 * Hook for using translations in components
 * @param language - Optional language override. If not provided, reads from VacuumCardContext or defaults to 'en'
 */
export function useTranslation(language?: SupportedLanguage) {
  const context = useContext(VacuumCardContext);
  const effectiveLanguage = language ?? context?.language ?? 'en';
  const t = useMemo(() => createTranslator(effectiveLanguage), [effectiveLanguage]);

  return {
    t,
    getRoomCountTranslation: (count: number) => getRoomCountTranslation(t, count),
  };
}
