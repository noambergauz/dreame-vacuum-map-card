import { formatSelectOptionLabel, selectOptionKey } from './converters';

type TranslateFunction = (key: string, params?: Record<string, string | number>) => string;

const CLEANING_MODE_KEYS: Record<string, string> = {
  sweeping_and_mopping: 'cleaning_mode_button.vac_and_mop',
  mopping_after_sweeping: 'cleaning_mode_button.mop_after_vac',
  sweeping: 'cleaning_mode_button.vacuum',
  mopping: 'cleaning_mode_button.mop',
  customize: 'customize.title',
};

const CLEANING_MODE_FALLBACK: Record<string, string> = {
  sweeping_and_mopping: 'Vac & Mop',
  mopping_after_sweeping: 'Mop after Vac',
  sweeping: 'Vac',
  mopping: 'Mop',
  customize: 'Customize',
};

export function getCleaningModeFriendlyName(mode: string, t?: TranslateFunction): string {
  const key = selectOptionKey(mode);
  if (t && CLEANING_MODE_KEYS[key]) {
    return t(CLEANING_MODE_KEYS[key]);
  }
  return CLEANING_MODE_FALLBACK[key] ?? formatSelectOptionLabel(mode);
}

const CLEANGENIUS_MODE_KEYS: Record<string, string> = {
  vacuum_and_mop: 'cleaning_mode_button.vac_and_mop',
  mop_after_vacuum: 'cleaning_mode_button.mop_after_vac',
};

const CLEANGENIUS_MODE_FALLBACK: Record<string, string> = {
  vacuum_and_mop: 'Vac & Mop',
  mop_after_vacuum: 'Mop after Vac',
};

export function getCleanGeniusModeFriendlyName(mode: string, t?: TranslateFunction): string {
  const key = selectOptionKey(mode);
  if (t && CLEANGENIUS_MODE_KEYS[key]) {
    return t(CLEANGENIUS_MODE_KEYS[key]);
  }
  return CLEANGENIUS_MODE_FALLBACK[key] ?? formatSelectOptionLabel(mode);
}

const SUCTION_LABELS: Record<string, { key: string; fallback: string }> = {
  quiet: { key: 'suction_levels.quiet', fallback: 'Quiet' },
  silent: { key: 'suction_levels.quiet', fallback: 'Quiet' },
  standard: { key: 'suction_levels.standard', fallback: 'Standard' },
  strong: { key: 'suction_levels.strong', fallback: 'Turbo' },
  turbo: { key: 'suction_levels.turbo', fallback: 'Max' },
};

export function getSuctionLevelFriendlyName(level: string, t?: TranslateFunction): string {
  const match = SUCTION_LABELS[selectOptionKey(level)];
  if (!match) return formatSelectOptionLabel(level);
  return t ? t(match.key) : match.fallback;
}
