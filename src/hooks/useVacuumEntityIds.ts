/**
 * Custom hook for managing vacuum entity IDs
 * Provides type-safe access to all vacuum entity IDs
 */

import { useMemo } from 'react';
import { DREAME_SELECTS, DREAME_SWITCHES, DREAME_NUMBERS, DREAME_SENSORS } from '@/constants';
import {
  buildEntityId,
  buildSwitchEntityId,
  buildNumberEntityId,
  buildSensorEntityId,
  extractBaseEntityId,
} from '@/utils/converters';

export interface VacuumEntityIds {
  base: string;
  cleaningMode: string;
  cleangeniusMode: string;
  cleangenius: string;
  suctionLevel: string;
  cleaningRoute: string;
  maxSuctionPower: string;
  wetnessLevel: string;
  selfCleanFrequency: string;
  selfCleanArea: string;
  selfCleanTime: string;
  stateSensor: string;
}

export function useVacuumEntityIds(vacuumEntityId: string): VacuumEntityIds {
  return useMemo(() => {
    const baseEntityId = extractBaseEntityId(vacuumEntityId);

    return {
      base: baseEntityId,
      cleaningMode: buildEntityId(baseEntityId, DREAME_SELECTS.CLEANING_MODE.key),
      cleangeniusMode: buildEntityId(baseEntityId, DREAME_SELECTS.CLEANGENIUS_MODE.key),
      cleangenius: buildEntityId(baseEntityId, DREAME_SELECTS.CLEANGENIUS.key),
      suctionLevel: buildEntityId(baseEntityId, DREAME_SELECTS.SUCTION_LEVEL.key),
      cleaningRoute: buildEntityId(baseEntityId, DREAME_SELECTS.CLEANING_ROUTE.key),
      maxSuctionPower: buildSwitchEntityId(baseEntityId, DREAME_SWITCHES.MAX_SUCTION_POWER.key),
      wetnessLevel: buildNumberEntityId(baseEntityId, DREAME_NUMBERS.WETNESS_LEVEL.key),
      selfCleanFrequency: buildEntityId(baseEntityId, DREAME_SELECTS.SELF_CLEAN_FREQUENCY.key),
      selfCleanArea: buildNumberEntityId(baseEntityId, DREAME_NUMBERS.SELF_CLEAN_AREA.key),
      selfCleanTime: buildNumberEntityId(baseEntityId, DREAME_NUMBERS.SELF_CLEAN_TIME.key),
      stateSensor: buildSensorEntityId(baseEntityId, DREAME_SENSORS.STATE.key),
    };
  }, [vacuumEntityId]);
}
