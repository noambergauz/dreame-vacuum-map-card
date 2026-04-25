import { createContext } from 'react';
import type { Hass, HassEntity, HassConfig } from '@/types/homeassistant';
import type { SupportedLanguage } from '@/i18n/locales';
import type { VacuumMachineState } from '@/hooks';

export interface VacuumCardContextValue {
  hass: Hass;
  entity: HassEntity;
  config: HassConfig;
  language: SupportedLanguage;
  isRtl: boolean;
  machineState: VacuumMachineState;
}

export const VacuumCardContext = createContext<VacuumCardContextValue | null>(null);
