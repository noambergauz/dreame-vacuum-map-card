/**
 * Custom hook for Home Assistant service calls
 * Provides type-safe wrappers around common service operations
 */

import { useCallback } from 'react';
import type { Hass } from '@/types/homeassistant';
import { SERVICE_DOMAIN, SERVICE_ACTION } from '@/constants';
import type { SelectOptionData, SetValueData, VacuumCleanSegmentData } from '@/types/vacuum';
import { logger } from '@/utils/logger';

export function useHomeAssistantServices(hass: Hass) {
  const callService = useCallback(
    (domain: string, service: string, data: Record<string, unknown>) => {
      logger.debug('HA', 'Service call:', domain, service, data);
      hass.callService(domain, service, data);
    },
    [hass]
  );

  const setSelectOption = useCallback(
    (entityId: string, option: string) => {
      logger.debug('HA', 'Select:', entityId, '→', option);
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
      logger.debug('HA', 'Switch:', entityId, '→', turnOn ? 'ON' : 'OFF');
      const action = turnOn ? SERVICE_ACTION.TURN_ON : SERVICE_ACTION.TURN_OFF;
      callService(SERVICE_DOMAIN.SWITCH, action, { entity_id: entityId });
    },
    [callService]
  );

  const setNumber = useCallback(
    (entityId: string, value: number) => {
      logger.debug('HA', 'Number:', entityId, '→', value);
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
      logger.debug('HA', 'Vacuum Start:', entityId);
      callService(SERVICE_DOMAIN.VACUUM, SERVICE_ACTION.START, { entity_id: entityId });
    },
    [callService]
  );

  const returnToBase = useCallback(
    (entityId: string) => {
      logger.debug('HA', 'Vacuum Return to base:', entityId);
      callService(SERVICE_DOMAIN.VACUUM, SERVICE_ACTION.RETURN_TO_BASE, { entity_id: entityId });
    },
    [callService]
  );

  const cleanSegments = useCallback(
    (entityId: string, segments: number[]) => {
      logger.debug('HA', 'Vacuum Clean segments:', entityId, segments);
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
