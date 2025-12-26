/**
 * Utility functions for icon mappings
 * Maps various vacuum states and modes to emoji icons
 */

import {
  CLEANGENIUS_MODE,
  SUCTION_LEVEL,
  CLEANING_ROUTE,
  SELF_CLEAN_FREQUENCY,
} from '../constants';
import type { CleaningMode, CleanGeniusMode, SuctionLevel, CleaningRoute, SelfCleanFrequency } from '../types/vacuum';

/**
 * Get icon for cleaning mode
 */
export function getCleaningModeIcon(mode: CleaningMode): string {
  if (mode.includes('Sweep') && mode.includes('Mop')) return '🔄';
  if (mode.includes('after')) return '➜';
  if (mode.includes('Mop')) return '💧';
  if (mode.includes('Sweep') || mode.includes('Vacuum')) return '🌀';
  return '⚙️';
}

/**
 * Get icon for CleanGenius mode
 */
export function getCleanGeniusModeIcon(mode: CleanGeniusMode): string {
  switch (mode) {
    case CLEANGENIUS_MODE.VACUUM_AND_MOP:
      return '🔄';
    case CLEANGENIUS_MODE.MOP_AFTER_VACUUM:
      return '➜';
    default:
      return '⚙️';
  }
}

/**
 * Get icon for suction level
 */
export function getSuctionLevelIcon(level: SuctionLevel): string {
  if (level.includes(SUCTION_LEVEL.QUIET) || level.includes(SUCTION_LEVEL.SILENT)) return '🌙';
  if (level.includes(SUCTION_LEVEL.TURBO)) return '⚡';
  if (level.includes(SUCTION_LEVEL.STRONG)) return '🌀';
  return '🔄';
}

/**
 * Get icon for cleaning route
 */
export function getCleaningRouteIcon(route: CleaningRoute): string {
  switch (route) {
    case CLEANING_ROUTE.QUICK:
      return '⌇';
    case CLEANING_ROUTE.STANDARD:
      return '≡';
    case CLEANING_ROUTE.INTENSIVE:
      return '⋮⋮';
    case CLEANING_ROUTE.DEEP:
      return '⫴';
    default:
      return '≡';
  }
}

/**
 * Get icon for self clean frequency
 */
export function getSelfCleanFrequencyIcon(frequency: SelfCleanFrequency): string {
  switch (frequency) {
    case SELF_CLEAN_FREQUENCY.BY_AREA:
      return '📐';
    case SELF_CLEAN_FREQUENCY.BY_TIME:
      return '⏱️';
    case SELF_CLEAN_FREQUENCY.BY_ROOM:
      return '🏠';
    default:
      return '⚙️';
  }
}
