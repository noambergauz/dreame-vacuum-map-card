/**
 * Custom hook for managing vacuum entity IDs
 * Provides type-safe access to all vacuum entity IDs
 */

import { useMemo } from 'react';
import { DREAME_SELECTS, DREAME_SWITCHES, DREAME_NUMBERS, DREAME_SENSORS, buildEntityId } from '@/constants';
import { extractBaseEntityId } from '@/utils/converters';

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
      cleaningMode: buildEntityId('select', baseEntityId, DREAME_SELECTS.CLEANING_MODE.key),
      cleangeniusMode: buildEntityId('select', baseEntityId, DREAME_SELECTS.CLEANGENIUS_MODE.key),
      cleangenius: buildEntityId('select', baseEntityId, DREAME_SELECTS.CLEANGENIUS.key),
      suctionLevel: buildEntityId('select', baseEntityId, DREAME_SELECTS.SUCTION_LEVEL.key),
      cleaningRoute: buildEntityId('select', baseEntityId, DREAME_SELECTS.CLEANING_ROUTE.key),
      maxSuctionPower: buildEntityId('switch', baseEntityId, DREAME_SWITCHES.MAX_SUCTION_POWER.key),
      wetnessLevel: buildEntityId('number', baseEntityId, DREAME_NUMBERS.WETNESS_LEVEL.key),
      selfCleanFrequency: buildEntityId('select', baseEntityId, DREAME_SELECTS.SELF_CLEAN_FREQUENCY.key),
      selfCleanArea: buildEntityId('number', baseEntityId, DREAME_NUMBERS.SELF_CLEAN_AREA.key),
      selfCleanTime: buildEntityId('number', baseEntityId, DREAME_NUMBERS.SELF_CLEAN_TIME.key),
      stateSensor: buildEntityId('sensor', baseEntityId, DREAME_SENSORS.STATE.key),
    };
  }, [vacuumEntityId]);
}
