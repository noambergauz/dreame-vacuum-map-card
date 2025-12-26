/**
 * Custom hook for managing vacuum entity IDs
 * Provides type-safe access to all vacuum entity IDs
 */

import { useMemo } from 'react';
import { ENTITY_SUFFIX } from '../constants';
import { buildEntityId, buildSwitchEntityId, buildNumberEntityId, extractBaseEntityId } from '../utils/converters';

export interface VacuumEntityIds {
  base: string;
  cleaningMode: string;
  cleangeniusMode: string;
  cleangenius: string;
  suctionLevel: string;
  cleaningRoute: string;
  maxSuctionPower: string;
  customMoppingMode: string;
  wetnessLevel: string;
  selfCleanFrequency: string;
  selfCleanArea: string;
  selfCleanTime: string;
}

export function useVacuumEntityIds(vacuumEntityId: string): VacuumEntityIds {
  return useMemo(() => {
    const baseEntityId = extractBaseEntityId(vacuumEntityId);

    return {
      base: baseEntityId,
      cleaningMode: buildEntityId(baseEntityId, ENTITY_SUFFIX.CLEANING_MODE),
      cleangeniusMode: buildEntityId(baseEntityId, ENTITY_SUFFIX.CLEANGENIUS_MODE),
      cleangenius: buildEntityId(baseEntityId, ENTITY_SUFFIX.CLEANGENIUS),
      suctionLevel: buildEntityId(baseEntityId, ENTITY_SUFFIX.SUCTION_LEVEL),
      cleaningRoute: buildEntityId(baseEntityId, ENTITY_SUFFIX.CLEANING_ROUTE),
      maxSuctionPower: buildSwitchEntityId(baseEntityId, ENTITY_SUFFIX.MAX_SUCTION_POWER),
      customMoppingMode: buildSwitchEntityId(baseEntityId, ENTITY_SUFFIX.CUSTOM_MOPPING_MODE),
      wetnessLevel: buildNumberEntityId(baseEntityId, ENTITY_SUFFIX.WETNESS_LEVEL),
      selfCleanFrequency: buildEntityId(baseEntityId, ENTITY_SUFFIX.SELF_CLEAN_FREQUENCY),
      selfCleanArea: buildNumberEntityId(baseEntityId, ENTITY_SUFFIX.SELF_CLEAN_AREA),
      selfCleanTime: buildNumberEntityId(baseEntityId, ENTITY_SUFFIX.SELF_CLEAN_TIME),
    };
  }, [vacuumEntityId]);
}
