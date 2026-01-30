/**
 * Utility functions for icon mappings
 * Maps various vacuum states and modes to SVG or emoji icons
 */

import {
  CLEANGENIUS_MODE,
  SUCTION_LEVEL,
  CLEANING_ROUTE,
  SELF_CLEAN_FREQUENCY,
  VACUUM_ICON_SVG,
  MOP_ICON_SVG,
  VACUUM_MOP_ICON_SVG,
  MOP_AFTER_VACUUM_ICON_SVG,
  SUCTION_QUIET_ICON_SVG,
  SUCTION_STANDARD_ICON_SVG,
  SUCTION_STRONG_ICON_SVG,
  SUCTION_TURBO_ICON_SVG,
  CLEANING_MODE,
  CLEANING_ROUTE_QUICK_ICON_SVG,
  CLEANING_ROUTE_STANDARD_ICON_SVG,
  CLEANING_ROUTE_INTENSIVE_ICON_SVG,
  CLEANING_ROUTE_DEEP_ICON_SVG,
} from '../constants';
import type { CleaningMode, CleanGeniusMode, SuctionLevel, CleaningRoute, SelfCleanFrequency } from '../types/vacuum';

export function getCleaningModeIcon(mode: CleaningMode): string {
  switch (mode) {
    case CLEANING_MODE.SWEEPING:
      return VACUUM_ICON_SVG;
    case CLEANING_MODE.MOPPING:
      return MOP_ICON_SVG;
    case CLEANING_MODE.SWEEPING_AND_MOPPING:
      return VACUUM_MOP_ICON_SVG;
    case CLEANING_MODE.MOPPING_AFTER_SWEEPING:
      return MOP_AFTER_VACUUM_ICON_SVG;
    default:
      return '';
  }
}

export function getCleanGeniusModeIcon(mode: CleanGeniusMode): string {
  switch (mode) {
    case CLEANGENIUS_MODE.VACUUM_AND_MOP:
      return VACUUM_MOP_ICON_SVG;
    case CLEANGENIUS_MODE.MOP_AFTER_VACUUM:
      return MOP_AFTER_VACUUM_ICON_SVG;
    default:
      return '';
  }
}

export function getSuctionLevelIcon(level: SuctionLevel): string {
  switch (level) {
    case SUCTION_LEVEL.QUIET:
    case SUCTION_LEVEL.SILENT:
      return SUCTION_QUIET_ICON_SVG;
    case SUCTION_LEVEL.STANDARD:
      return SUCTION_STANDARD_ICON_SVG;
    case SUCTION_LEVEL.STRONG:
      return SUCTION_STRONG_ICON_SVG;
    case SUCTION_LEVEL.TURBO:
      return SUCTION_TURBO_ICON_SVG;
  }
}

export function getCleaningRouteIcon(route: CleaningRoute): string {
  switch (route) {
    case CLEANING_ROUTE.QUICK:
      return CLEANING_ROUTE_QUICK_ICON_SVG;
    case CLEANING_ROUTE.STANDARD:
      return CLEANING_ROUTE_STANDARD_ICON_SVG;
    case CLEANING_ROUTE.INTENSIVE:
      return CLEANING_ROUTE_INTENSIVE_ICON_SVG;
    case CLEANING_ROUTE.DEEP:
      return CLEANING_ROUTE_DEEP_ICON_SVG;
  }
}

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
