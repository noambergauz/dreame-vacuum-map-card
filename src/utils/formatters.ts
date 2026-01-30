/**
 * Utility functions for getting friendly display names
 */

import { CLEANGENIUS_MODE, CLEANING_MODE, SUCTION_LEVEL } from '../constants';
import type { CleaningMode, CleanGeniusMode, SuctionLevel } from '../types/vacuum';

export function getCleaningModeFriendlyName(mode: CleaningMode): string {
  switch (mode) {
    case CLEANING_MODE.SWEEPING_AND_MOPPING:
      return 'Vac & Mop';
    case CLEANING_MODE.MOPPING_AFTER_SWEEPING:
      return 'Mop after Vac';
    case CLEANING_MODE.SWEEPING:
      return 'Vac';
    case CLEANING_MODE.MOPPING:
      return 'Mop';
    default:
      return mode;
  }
}

export function getCleanGeniusModeFriendlyName(mode: CleanGeniusMode): string {
  switch (mode) {
    case CLEANGENIUS_MODE.VACUUM_AND_MOP:
      return 'Vac & Mop';
    case CLEANGENIUS_MODE.MOP_AFTER_VACUUM:
      return 'Mop after Vac';
    default:
      return mode;
  }
}

/**
 * Get friendly name for suction level
 * Maps: Strong -> Turbo, Turbo -> Max
 */
export function getSuctionLevelFriendlyName(level: SuctionLevel): string {
  if (level === SUCTION_LEVEL.STRONG || level.includes('Strong')) {
    return 'Turbo';
  }
  if (level === SUCTION_LEVEL.TURBO || level.includes('Turbo')) {
    return 'Max';
  }
  return level;
}
