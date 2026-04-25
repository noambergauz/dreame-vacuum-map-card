import { useContext } from 'react';
import { VacuumCardContext, type VacuumCardContextValue } from './VacuumCardContext';
import type { Hass, HassEntity, HassConfig } from '@/types/homeassistant';
import type { SupportedLanguage } from '@/i18n/locales';
import type { VacuumMachineState } from '@/hooks';

function useVacuumCardContext(): VacuumCardContextValue {
  const context = useContext(VacuumCardContext);
  if (!context) {
    throw new Error('useVacuumCardContext must be used within VacuumCardProvider');
  }
  return context;
}

export function useHass(): Hass {
  return useVacuumCardContext().hass;
}

export function useEntity(): HassEntity {
  return useVacuumCardContext().entity;
}

export function useConfig(): HassConfig {
  return useVacuumCardContext().config;
}

export function useLanguage(): SupportedLanguage {
  return useVacuumCardContext().language;
}

export function useAreaUnit(): string {
  const hass = useHass();
  return hass.config?.unit_system?.area ?? 'm²';
}

export function useIsRtl(): boolean {
  return useVacuumCardContext().isRtl;
}

export function useMachineState(): VacuumMachineState {
  return useVacuumCardContext().machineState;
}
