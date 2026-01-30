/**
 * Utility functions for converting between display values and service values
 * Handles snake_case conversion for Home Assistant service calls
 */

import {
  SERVICE_VALUE,
  CLEANING_MODE,
  CLEANGENIUS_MODE,
  CLEANGENIUS_STATE,
  SELF_CLEAN_FREQUENCY,
} from '../constants';
import type { CleaningMode, CleanGeniusMode, CleanGeniusState, SelfCleanFrequency } from '../types/vacuum';

export function convertCleaningModeToService(mode: CleaningMode): string {
  switch (mode) {
    case CLEANING_MODE.SWEEPING:
      return SERVICE_VALUE.CLEANING_MODE.SWEEPING;
    case CLEANING_MODE.MOPPING:
      return SERVICE_VALUE.CLEANING_MODE.MOPPING;
    case CLEANING_MODE.SWEEPING_AND_MOPPING:
      return SERVICE_VALUE.CLEANING_MODE.SWEEPING_AND_MOPPING;
    case CLEANING_MODE.MOPPING_AFTER_SWEEPING:
      return SERVICE_VALUE.CLEANING_MODE.MOPPING_AFTER_SWEEPING;
    default:
      return mode;
  }
}

export function convertCleanGeniusModeToService(mode: CleanGeniusMode): string {
  switch (mode) {
    case CLEANGENIUS_MODE.VACUUM_AND_MOP:
      return SERVICE_VALUE.CLEANGENIUS_MODE.VACUUM_AND_MOP;
    case CLEANGENIUS_MODE.MOP_AFTER_VACUUM:
      return SERVICE_VALUE.CLEANGENIUS_MODE.MOP_AFTER_VACUUM;
    default:
      return mode;
  }
}

export function convertCleanGeniusStateToService(state: CleanGeniusState): string {
  switch (state) {
    case CLEANGENIUS_STATE.OFF:
      return SERVICE_VALUE.CLEANGENIUS.OFF;
    case CLEANGENIUS_STATE.ROUTINE_CLEANING:
      return SERVICE_VALUE.CLEANGENIUS.ROUTINE_CLEANING;
    case CLEANGENIUS_STATE.DEEP_CLEANING:
      return SERVICE_VALUE.CLEANGENIUS.DEEP_CLEANING;
    default:
      return state;
  }
}

export function convertSelfCleanFrequencyToService(frequency: SelfCleanFrequency): string {
  switch (frequency) {
    case SELF_CLEAN_FREQUENCY.BY_AREA:
      return SERVICE_VALUE.SELF_CLEAN_FREQUENCY.BY_AREA;
    case SELF_CLEAN_FREQUENCY.BY_TIME:
      return SERVICE_VALUE.SELF_CLEAN_FREQUENCY.BY_TIME;
    case SELF_CLEAN_FREQUENCY.BY_ROOM:
      return SERVICE_VALUE.SELF_CLEAN_FREQUENCY.BY_ROOM;
    default:
      return frequency;
  }
}

export function convertToLowerCase(value: string): string {
  return value.toLowerCase();
}

export function buildEntityId(baseEntityId: string, suffix: string): string {
  return `select.${baseEntityId}_${suffix}`;
}

export function buildSwitchEntityId(baseEntityId: string, suffix: string): string {
  return `switch.${baseEntityId}_${suffix}`;
}

export function buildNumberEntityId(baseEntityId: string, suffix: string): string {
  return `number.${baseEntityId}_${suffix}`;
}

export function extractBaseEntityId(entityId: string): string {
  return entityId.replace('vacuum.', '');
}
