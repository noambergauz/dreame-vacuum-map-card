/**
 * Utility functions for icon mappings
 * Maps various vacuum states and modes to SVG or emoji icons
 */

import type { ReactElement } from 'react';
import {
  VACUUM_ICON_SVG,
  MOP_ICON_SVG,
  VACUUM_MOP_ICON_SVG,
  MOP_AFTER_VACUUM_ICON_SVG,
  SUCTION_QUIET_ICON_SVG,
  SUCTION_STANDARD_ICON_SVG,
  SUCTION_STRONG_ICON_SVG,
  SUCTION_TURBO_ICON_SVG,
  CLEANING_ROUTE_QUICK_ICON_SVG,
  CLEANING_ROUTE_STANDARD_ICON_SVG,
  CLEANING_ROUTE_INTENSIVE_ICON_SVG,
  CLEANING_ROUTE_DEEP_ICON_SVG,
  MOP_WASHING_FREQUENCY_BY_AREA_ICON_SVG,
  MOP_WASHING_FREQUENCY_BY_TIME_ICON_SVG,
  MOP_WASHING_FREQUENCY_BY_ROOM_ICON_SVG,
  CUSTOMIZE_ICON_SVG,
  WATER_VOLUME_ICON_SVG,
} from '@/constants';
import { formatSelectOptionLabel, selectOptionKey } from './converters';

export function getCleaningModeIcon(mode: string): ReactElement | string {
  switch (selectOptionKey(mode)) {
    case 'sweeping':
      return VACUUM_ICON_SVG;
    case 'mopping':
      return MOP_ICON_SVG;
    case 'sweeping_and_mopping':
      return VACUUM_MOP_ICON_SVG;
    case 'mopping_after_sweeping':
      return MOP_AFTER_VACUUM_ICON_SVG;
    case 'customize':
      return CUSTOMIZE_ICON_SVG;
    default:
      return '';
  }
}

export function getCleanGeniusModeIcon(mode: string): ReactElement | string {
  switch (selectOptionKey(mode)) {
    case 'vacuum_and_mop':
      return VACUUM_MOP_ICON_SVG;
    case 'mop_after_vacuum':
      return MOP_AFTER_VACUUM_ICON_SVG;
    default:
      return '';
  }
}

export function getSuctionLevelIcon(level: string): ReactElement | string {
  switch (selectOptionKey(level)) {
    case 'quiet':
    case 'silent':
      return SUCTION_QUIET_ICON_SVG;
    case 'standard':
      return SUCTION_STANDARD_ICON_SVG;
    case 'strong':
      return SUCTION_STRONG_ICON_SVG;
    case 'turbo':
      return SUCTION_TURBO_ICON_SVG;
    default:
      return '';
  }
}

export function getCleaningRouteIcon(route: string): ReactElement | string {
  switch (selectOptionKey(route)) {
    case 'quick':
      return CLEANING_ROUTE_QUICK_ICON_SVG;
    case 'standard':
      return CLEANING_ROUTE_STANDARD_ICON_SVG;
    case 'intensive':
      return CLEANING_ROUTE_INTENSIVE_ICON_SVG;
    case 'deep':
      return CLEANING_ROUTE_DEEP_ICON_SVG;
    default:
      return '';
  }
}

export function getSelfCleanFrequencyIcon(frequency: string): ReactElement | string {
  switch (selectOptionKey(frequency)) {
    case 'by_area':
      return MOP_WASHING_FREQUENCY_BY_AREA_ICON_SVG;
    case 'by_time':
      return MOP_WASHING_FREQUENCY_BY_TIME_ICON_SVG;
    case 'by_room':
      return MOP_WASHING_FREQUENCY_BY_ROOM_ICON_SVG;
    default:
      return '⚙️';
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getWaterVolumeIcon(_: string): ReactElement {
  return WATER_VOLUME_ICON_SVG;
}

type TranslateFunction = (key: string, params?: Record<string, string | number>) => string;

export function getWaterVolumeFriendlyName(level: string, t?: TranslateFunction): string {
  const key = selectOptionKey(level);
  if (t) {
    switch (key) {
      case 'low':
        return t('custom_mode.water_low');
      case 'medium':
        return t('custom_mode.water_medium');
      case 'high':
        return t('custom_mode.water_high');
    }
  }
  return formatSelectOptionLabel(level);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getMopPadHumidityIcon(_: string): ReactElement {
  return WATER_VOLUME_ICON_SVG;
}

export function getMopPadHumidityFriendlyName(level: string, t?: TranslateFunction): string {
  const key = selectOptionKey(level);
  if (t) {
    switch (key) {
      case 'slightly_dry':
        return t('custom_mode.slightly_dry');
      case 'moist':
        return t('custom_mode.moist');
      case 'wet':
        return t('custom_mode.wet');
    }
  }
  return formatSelectOptionLabel(level);
}
