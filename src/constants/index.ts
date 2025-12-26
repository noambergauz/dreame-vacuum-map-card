/**
 * Application-wide constants
 * Eliminates magic numbers and strings throughout the codebase
 */

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
} as const;

// Entity name suffixes
export const ENTITY_SUFFIX = {
  CLEANING_MODE: 'cleaning_mode',
  CLEANGENIUS_MODE: 'cleangenius_mode',
  CLEANGENIUS: 'cleangenius',
  SUCTION_LEVEL: 'suction_level',
  CLEANING_ROUTE: 'cleaning_route',
  MAX_SUCTION_POWER: 'max_suction_power',
  CUSTOM_MOPPING_MODE: 'custom_mopping_mode',
  WETNESS_LEVEL: 'wetness_level',
  SELF_CLEAN_FREQUENCY: 'self_clean_frequency',
  SELF_CLEAN_AREA: 'self_clean_area',
  SELF_CLEAN_TIME: 'self_clean_time',
} as const;

// Cleaning modes
export const CLEANING_MODE = {
  SWEEPING: 'Sweeping',
  MOPPING: 'Mopping',
  SWEEPING_AND_MOPPING: 'Sweeping and mopping',
  MOPPING_AFTER_SWEEPING: 'Mopping after sweeping',
} as const;

// CleanGenius modes
export const CLEANGENIUS_MODE = {
  VACUUM_AND_MOP: 'Vacuum and mop',
  MOP_AFTER_VACUUM: 'Mop after vacuum',
} as const;

// CleanGenius states
export const CLEANGENIUS_STATE = {
  OFF: 'Off',
  ROUTINE_CLEANING: 'Routine cleaning',
  DEEP_CLEANING: 'Deep cleaning',
} as const;

// Service values (snake_case)
export const SERVICE_VALUE = {
  CLEANING_MODE: {
    SWEEPING: 'sweeping',
    MOPPING: 'mopping',
    SWEEPING_AND_MOPPING: 'sweeping_and_mopping',
    MOPPING_AFTER_SWEEPING: 'mopping_after_sweeping',
  },
  CLEANGENIUS_MODE: {
    VACUUM_AND_MOP: 'vacuum_and_mop',
    MOP_AFTER_VACUUM: 'mop_after_vacuum',
  },
  CLEANGENIUS: {
    OFF: 'off',
    ROUTINE_CLEANING: 'routine_cleaning',
    DEEP_CLEANING: 'deep_cleaning',
  },
  SELF_CLEAN_FREQUENCY: {
    BY_AREA: 'by_area',
    BY_TIME: 'by_time',
    BY_ROOM: 'by_room',
  },
} as const;

// Self clean frequency types
export const SELF_CLEAN_FREQUENCY = {
  BY_AREA: 'By area',
  BY_TIME: 'By time',
  BY_ROOM: 'By room',
} as const;

// Suction levels
export const SUCTION_LEVEL = {
  QUIET: 'Quiet',
  SILENT: 'Silent',
  STANDARD: 'Standard',
  STRONG: 'Strong',
  TURBO: 'Turbo',
} as const;

// Cleaning routes
export const CLEANING_ROUTE = {
  QUICK: 'Quick',
  STANDARD: 'Standard',
  INTENSIVE: 'Intensive',
  DEEP: 'Deep',
} as const;

// Mop pad humidity levels
export const MOP_PAD_HUMIDITY = {
  SLIGHTLY_DRY: 'Slightly dry',
  MOIST: 'Moist',
  WET: 'Wet',
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

// UI constants
export const UI = {
  MODAL_ANIMATION_DURATION: 200,
  TOAST_DURATION: 3000,
  SLIDER_THUMB_SIZE: 20,
  SLIDER_VALUE_BUBBLE_SIZE: 40,
} as const;

// Default values
export const DEFAULTS = {
  CLEANING_MODE: CLEANING_MODE.SWEEPING_AND_MOPPING,
  CLEANGENIUS_MODE: CLEANGENIUS_MODE.VACUUM_AND_MOP,
  CLEANGENIUS: CLEANGENIUS_STATE.OFF,
  SUCTION_LEVEL: SUCTION_LEVEL.STANDARD,
  WETNESS_LEVEL: 20,
  CLEANING_ROUTE: CLEANING_ROUTE.STANDARD,
  MAX_SUCTION_POWER: false,
  SELF_CLEAN_AREA: 20,
  SELF_CLEAN_FREQUENCY: SELF_CLEAN_FREQUENCY.BY_AREA,
  MOP_PAD_HUMIDITY: MOP_PAD_HUMIDITY.MOIST,
  SELF_CLEAN_AREA_MIN: 10,
  SELF_CLEAN_AREA_MAX: 35,
  SELF_CLEAN_TIME: 25,
  SELF_CLEAN_TIME_MIN: 10,
  SELF_CLEAN_TIME_MAX: 50,
} as const;
