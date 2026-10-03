/**
 * Application-wide constants
 * Eliminates magic numbers and strings throughout the codebase
 */

// Re-export generated entity definitions (source of truth)
export * from '../generated/dreame-entities';

// Re-export UI mapping config
export * from '../config/entity-ui-mapping';

// Re-export icon SVG constants
export * from './icons';

/** Features with no companion entity. Entity-backed features follow the registry. */
export const CAPABILITY = {
  SHORTCUTS: 'shortcuts',
} as const;

// Re-export vacuum state machine constants
export * from './vacuumStates';

// Slider configuration
export const SLIDER_CONFIG = {
  WETNESS: {
    MIN: 1,
    MAX: 32,
  },
  SELF_CLEAN_AREA: {
    DEFAULT_MIN: 10,
    DEFAULT_MAX: 35,
  },
  SELF_CLEAN_TIME: {
    DEFAULT_MIN: 10,
    DEFAULT_MAX: 50,
  },
} as const;

// Service domains
export const SERVICE_DOMAIN = {
  SELECT: 'select',
  SWITCH: 'switch',
  NUMBER: 'number',
  VACUUM: 'vacuum',
  DREAME_VACUUM: 'dreame_vacuum',
  BUTTON: 'button',
} as const;

// Service actions
export const SERVICE_ACTION = {
  SELECT_OPTION: 'select_option',
  TURN_ON: 'turn_on',
  TURN_OFF: 'turn_off',
  SET_VALUE: 'set_value',
  START: 'start',
  RETURN_TO_BASE: 'return_to_base',
  VACUUM_CLEAN_SEGMENT: 'vacuum_clean_segment',
  PRESS: 'press',
  SET_FAN_SPEED: 'set_fan_speed',
} as const;

// Mode types (for vacuum commands)
export const VACUUM_MODE_TYPE = {
  ALL: 'all',
  ROOM: 'room',
  ZONE: 'zone',
  SPOT: 'spot',
} as const;

// UI Mode type (for modal)
export const UI_MODE_TYPE = {
  CLEANGENIUS: 'CleanGenius',
  CUSTOM: 'Custom',
} as const;

export const CUSTOMIZE_MODE_OPTION = 'Customize';

// UI constants
export const UI = {
  MODAL_ANIMATION_DURATION: 200,
  TOAST_DURATION: 3000,
  SLIDER_THUMB_SIZE: 20,
  SLIDER_VALUE_BUBBLE_SIZE: 40,
} as const;

// LocalStorage keys
export const STORAGE_KEY = {
  MAP_LOCKED: 'dreame-vacuum-map-locked',
  CUSTOMIZE_CONFIG: 'dreame-vacuum-card:customize_config',
  AREA_SELECTION_MODE: 'dreame-vacuum-card:area_selection_mode',
  ROOM_SELECTS: 'dreame-vacuum-card:room_selects',
} as const;

// Customize cleaning mode constants
export const CUSTOMIZE_CLEANING_MODE = {
  VACUUM: 0,
  MOP: 1,
  VAC_AND_MOP: 2,
} as const;

export const CUSTOMIZE_SUCTION_LEVEL = {
  QUIET: 0,
  STANDARD: 1,
  STRONG: 2,
  TURBO: 3,
} as const;

export const CUSTOMIZE_MOP_WETNESS = {
  SLIGHTLY_DRY: 1,
  STANDARD: 2,
  WET: 3,
} as const;

// Default customize room config
export const CUSTOMIZE_DEFAULTS = {
  CLEANING_MODE: CUSTOMIZE_CLEANING_MODE.VAC_AND_MOP,
  SUCTION_LEVEL: CUSTOMIZE_SUCTION_LEVEL.STANDARD,
  MOP_WETNESS: CUSTOMIZE_MOP_WETNESS.STANDARD,
  CYCLES: 1,
} as const;

// Default values
export const DEFAULTS = {
  MODE: VACUUM_MODE_TYPE.ALL,
  WETNESS_LEVEL: 20,
  MAX_SUCTION_POWER: false,
  SELF_CLEAN_AREA: 20,
  SELF_CLEAN_AREA_MIN: 10,
  SELF_CLEAN_AREA_MAX: 35,
  SELF_CLEAN_TIME: 25,
  SELF_CLEAN_TIME_MIN: 10,
  SELF_CLEAN_TIME_MAX: 50,
} as const;
