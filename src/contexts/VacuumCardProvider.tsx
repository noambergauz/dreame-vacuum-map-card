import type { Hass, HassEntity, HassConfig } from '../types/homeassistant';
import type { SupportedLanguage } from '../i18n/locales';
import { VacuumCardContext } from './VacuumCardContext';

interface VacuumCardProviderProps {
  hass: Hass;
  entity: HassEntity;
  config: HassConfig;
  language: SupportedLanguage;
  children: React.ReactNode;
}

export function VacuumCardProvider({ hass, entity, config, language, children }: VacuumCardProviderProps) {
  return <VacuumCardContext.Provider value={{ hass, entity, config, language }}>{children}</VacuumCardContext.Provider>;
}
