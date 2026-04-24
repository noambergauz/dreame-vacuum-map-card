import { CLEANGENIUS_MODE, CLEANING_MODE } from '@/constants';
import type { VacuumCleaningMode, CleanGeniusMode, SuctionLevel } from '@/types/vacuum';

type TranslateFunction = (key: string, params?: Record<string, string | number>) => string;

const CLEANING_MODE_KEYS: Record<string, string> = {
  [CLEANING_MODE.SWEEPING_AND_MOPPING]: 'cleaning_mode_button.vac_and_mop',
  [CLEANING_MODE.MOPPING_AFTER_SWEEPING]: 'cleaning_mode_button.mop_after_vac',
  [CLEANING_MODE.SWEEPING]: 'cleaning_mode_button.vacuum',
  [CLEANING_MODE.MOPPING]: 'cleaning_mode_button.mop',
  [CLEANING_MODE.CUSTOMIZE]: 'customize.title',
};

const CLEANING_MODE_FALLBACK: Record<string, string> = {
  [CLEANING_MODE.SWEEPING_AND_MOPPING]: 'Vac & Mop',
  [CLEANING_MODE.MOPPING_AFTER_SWEEPING]: 'Mop after Vac',
  [CLEANING_MODE.SWEEPING]: 'Vac',
  [CLEANING_MODE.MOPPING]: 'Mop',
  [CLEANING_MODE.CUSTOMIZE]: 'Customize',
};

export function getCleaningModeFriendlyName(mode: VacuumCleaningMode, t?: TranslateFunction): string {
  if (t && CLEANING_MODE_KEYS[mode]) {
    return t(CLEANING_MODE_KEYS[mode]);
  }
  return CLEANING_MODE_FALLBACK[mode] ?? mode;
}

const CLEANGENIUS_MODE_KEYS: Record<string, string> = {
  [CLEANGENIUS_MODE.VACUUM_AND_MOP]: 'cleaning_mode_button.vac_and_mop',
  [CLEANGENIUS_MODE.MOP_AFTER_VACUUM]: 'cleaning_mode_button.mop_after_vac',
};

const CLEANGENIUS_MODE_FALLBACK: Record<string, string> = {
  [CLEANGENIUS_MODE.VACUUM_AND_MOP]: 'Vac & Mop',
  [CLEANGENIUS_MODE.MOP_AFTER_VACUUM]: 'Mop after Vac',
};

export function getCleanGeniusModeFriendlyName(mode: CleanGeniusMode, t?: TranslateFunction): string {
  if (t && CLEANGENIUS_MODE_KEYS[mode]) {
    return t(CLEANGENIUS_MODE_KEYS[mode]);
  }
  return CLEANGENIUS_MODE_FALLBACK[mode] ?? mode;
}

/**
 * Get friendly name for suction level
 * Maps: Strong -> Turbo, Turbo -> Max
 */
export function getSuctionLevelFriendlyName(level: SuctionLevel, t?: TranslateFunction): string {
  const normalizedLevel = level.toLowerCase();

  if (normalizedLevel.includes('quiet') || normalizedLevel.includes('silent')) {
    return t ? t('suction_levels.quiet') : 'Quiet';
  }
  if (normalizedLevel.includes('standard')) {
    return t ? t('suction_levels.standard') : 'Standard';
  }
  if (normalizedLevel.includes('strong')) {
    return t ? t('suction_levels.strong') : 'Turbo';
  }
  if (normalizedLevel.includes('turbo')) {
    return t ? t('suction_levels.turbo') : 'Max';
  }
  return level;
}
