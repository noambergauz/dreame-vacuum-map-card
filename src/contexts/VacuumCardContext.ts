import { createContext } from 'react';
import type { Hass, HassEntity, HassConfig } from '@/types/homeassistant';
import type { SupportedLanguage } from '@/i18n/locales';

export interface VacuumCardContextValue {
  hass: Hass;
  entity: HassEntity;
  config: HassConfig;
  language: SupportedLanguage;
  isRtl: boolean;
}

export const VacuumCardContext = createContext<VacuumCardContextValue | null>(null);
