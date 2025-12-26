/**
 * Utility functions for getting friendly display names
 */

import { CLEANGENIUS_MODE, CLEANING_MODE } from '../constants';
import type { CleaningMode, CleanGeniusMode } from '../types/vacuum';

/**
 * Get friendly name for cleaning mode
 */
export function getCleaningModeFriendlyName(mode: CleaningMode): string {
  switch (mode) {
    case CLEANING_MODE.SWEEPING_AND_MOPPING:
      return 'Vac & Mop';
    case CLEANING_MODE.MOPPING_AFTER_SWEEPING:
      return 'Mop after Vac';
    case CLEANING_MODE.SWEEPING:
      return 'Vacuum';
    case CLEANING_MODE.MOPPING:
      return 'Mop';
    default:
      return mode;
  }
}

/**
 * Get friendly name for CleanGenius mode
 */
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
