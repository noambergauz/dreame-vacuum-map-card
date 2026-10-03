import { useMemo } from 'react';
import type { Hass, HassEntity, HassConfig } from '@/types/homeassistant';
import type { SupportedLanguage } from '@/i18n/locales';
import { isRtlLanguage } from '@/i18n';
import { DREAME_SELECTS } from '@/constants';
import { readSelectEntity } from '@/hooks/useEntityState';
import { resolveCleaningMode, useVacuumMachineState } from '@/hooks/useVacuumMachineState';
import type { DeviceEntities } from '@/hooks/useLoadDeviceEntities';
import { VacuumCardContext } from './VacuumCardContext';

interface VacuumCardProviderProps {
  hass: Hass;
  entity: HassEntity;
  config: HassConfig;
  language: SupportedLanguage;
  deviceEntities: DeviceEntities;
  children: React.ReactNode;
}

export function VacuumCardProvider({
  hass,
  entity,
  config,
  language,
  deviceEntities,
  children,
}: VacuumCardProviderProps) {
  const isRtl = useMemo(() => isRtlLanguage(language), [language]);
  const cleaningModeId = deviceEntities.get('select', DREAME_SELECTS.CLEANING_MODE.key);
  const cleaningMode = resolveCleaningMode(
    readSelectEntity(cleaningModeId ? hass.states[cleaningModeId] : undefined).value,
    entity.attributes.cleaning_mode
  );
  const machineState = useVacuumMachineState(hass, entity, deviceEntities.get('sensor', 'state'), cleaningMode);

  const contextValue = useMemo(
    () => ({ hass, entity, config, language, isRtl, machineState, deviceEntities }),
    [hass, entity, config, language, isRtl, machineState, deviceEntities]
  );

  return <VacuumCardContext.Provider value={contextValue}>{children}</VacuumCardContext.Provider>;
}
