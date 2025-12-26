/**
 * Custom hook for Home Assistant service calls
 * Provides type-safe wrappers around common service operations
 */

import { useCallback } from 'react';
import type { Hass } from '../types/homeassistant';
import { SERVICE_DOMAIN, SERVICE_ACTION } from '../constants';
import type { SelectOptionData, SetValueData, VacuumCleanSegmentData } from '../types/vacuum';

export function useHomeAssistantServices(hass: Hass) {
  const callService = useCallback(
    (domain: string, service: string, data: Record<string, unknown>) => {
      hass.callService(domain, service, data);
    },
    [hass]
  );

  const setSelectOption = useCallback(
    (entityId: string, option: string) => {
      const data: SelectOptionData = {
        entity_id: entityId,
        option,
      };
      callService(SERVICE_DOMAIN.SELECT, SERVICE_ACTION.SELECT_OPTION, data);
    },
    [callService]
  );

  const setSwitch = useCallback(
    (entityId: string, turnOn: boolean) => {
      const action = turnOn ? SERVICE_ACTION.TURN_ON : SERVICE_ACTION.TURN_OFF;
      callService(SERVICE_DOMAIN.SWITCH, action, { entity_id: entityId });
    },
    [callService]
  );

  const setNumber = useCallback(
    (entityId: string, value: number) => {
      const data: SetValueData = {
        entity_id: entityId,
        value,
      };
      callService(SERVICE_DOMAIN.NUMBER, SERVICE_ACTION.SET_VALUE, data);
    },
    [callService]
  );

  const startVacuum = useCallback(
    (entityId: string) => {
      callService(SERVICE_DOMAIN.VACUUM, SERVICE_ACTION.START, { entity_id: entityId });
    },
    [callService]
  );

  const returnToBase = useCallback(
    (entityId: string) => {
      callService(SERVICE_DOMAIN.VACUUM, SERVICE_ACTION.RETURN_TO_BASE, { entity_id: entityId });
    },
    [callService]
  );

  const cleanSegments = useCallback(
    (entityId: string, segments: number[]) => {
      const data: VacuumCleanSegmentData = {
        entity_id: entityId,
        segments,
      };
      callService(SERVICE_DOMAIN.DREAME_VACUUM, SERVICE_ACTION.VACUUM_CLEAN_SEGMENT, data);
    },
    [callService]
  );

  return {
    setSelectOption,
    setSwitch,
    setNumber,
    startVacuum,
    returnToBase,
    cleanSegments,
    callService,
  };
}
