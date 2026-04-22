import { CLEANGENIUS_MODE, CLEANING_MODE, SUCTION_LEVEL } from '@/constants';
import type { VacuumCleaningMode, CleanGeniusMode, SuctionLevel } from '@/types/vacuum';

type TranslateFunction = (key: string, params?: Record<string, string | number>) => string;

export function getCleaningModeFriendlyName(mode: VacuumCleaningMode, t?: TranslateFunction): string {
  if (t) {
    switch (mode) {
      case CLEANING_MODE.SWEEPING_AND_MOPPING:
        return t('cleaning_mode_button.vac_and_mop');
      case CLEANING_MODE.MOPPING_AFTER_SWEEPING:
        return t('cleaning_mode_button.mop_after_vac');
      case CLEANING_MODE.SWEEPING:
        return t('cleaning_mode_button.vacuum');
      case CLEANING_MODE.MOPPING:
        return t('cleaning_mode_button.mop');
      case CLEANING_MODE.CUSTOMIZE:
        return t('customize.title');
      default:
        return mode;
    }
  }
  // Fallback to English when no translation function provided
  switch (mode) {
    case CLEANING_MODE.SWEEPING_AND_MOPPING:
      return 'Vac & Mop';
    case CLEANING_MODE.MOPPING_AFTER_SWEEPING:
      return 'Mop after Vac';
    case CLEANING_MODE.SWEEPING:
      return 'Vac';
    case CLEANING_MODE.MOPPING:
      return 'Mop';
    case CLEANING_MODE.CUSTOMIZE:
      return 'Customize';
    default:
      return mode;
  }
}

export function getCleanGeniusModeFriendlyName(mode: CleanGeniusMode, t?: TranslateFunction): string {
  if (t) {
    switch (mode) {
      case CLEANGENIUS_MODE.VACUUM_AND_MOP:
        return t('cleaning_mode_button.vac_and_mop');
      case CLEANGENIUS_MODE.MOP_AFTER_VACUUM:
        return t('cleaning_mode_button.mop_after_vac');
      default:
        return mode;
    }
  }
  // Fallback to English when no translation function provided
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
export function getSuctionLevelFriendlyName(level: SuctionLevel, t?: TranslateFunction): string {
  if (t) {
    if (level === SUCTION_LEVEL.QUIET || level.includes('Quiet')) {
      return t('suction_levels.quiet');
    }
    if (level === SUCTION_LEVEL.STANDARD || level.includes('Standard')) {
      return t('suction_levels.standard');
    }
    if (level === SUCTION_LEVEL.STRONG || level.includes('Strong')) {
      return t('suction_levels.strong');
    }
    if (level === SUCTION_LEVEL.TURBO || level.includes('Turbo')) {
      return t('suction_levels.turbo');
    }
    return level;
  }
  // Fallback to English when no translation function provided
  if (level === SUCTION_LEVEL.QUIET || level.includes('Quiet')) {
    return 'Quiet';
  }
  if (level === SUCTION_LEVEL.STANDARD || level.includes('Standard')) {
    return 'Standard';
  }
  if (level === SUCTION_LEVEL.STRONG || level.includes('Strong')) {
    return 'Turbo';
  }
  if (level === SUCTION_LEVEL.TURBO || level.includes('Turbo')) {
    return 'Max';
  }
  return level;
}
