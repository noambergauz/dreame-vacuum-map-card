import { useMemo } from 'react';
import type { Hass, HassEntity, HassConfig } from '@/types/homeassistant';
import type { SupportedLanguage } from '@/i18n/locales';
import { isRtlLanguage } from '@/i18n';
import { VacuumCardContext } from './VacuumCardContext';

interface VacuumCardProviderProps {
  hass: Hass;
  entity: HassEntity;
  config: HassConfig;
  language: SupportedLanguage;
  children: React.ReactNode;
}

export function VacuumCardProvider({ hass, entity, config, language, children }: VacuumCardProviderProps) {
  const isRtl = useMemo(() => isRtlLanguage(language), [language]);

  // Memoize context value to prevent unnecessary re-renders
  // Note: hass and entity are passed from Home Assistant and change when state updates
  const contextValue = useMemo(
    () => ({ hass, entity, config, language, isRtl }),
    [hass, entity, config, language, isRtl]
  );

  return <VacuumCardContext.Provider value={contextValue}>{children}</VacuumCardContext.Provider>;
}
