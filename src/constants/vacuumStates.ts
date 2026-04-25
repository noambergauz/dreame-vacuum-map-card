/**
 * Vacuum state machine constants
 * Maps sensor.{base}_state values to phase and task categories
 *
 * Reference: dreame-vacuum integration DreameVacuumState enum
 */

/**
 * Vacuum phase - broad category of what the robot is doing
 */
export type VacuumPhase = 'idle' | 'cleaning' | 'paused' | 'returning' | 'maintenance' | 'error' | 'other';

/**
 * Cleaning task - specific type of cleaning activity
 */
export type CleaningTask = 'vacuuming' | 'mopping' | 'vacuuming_and_mopping' | 'none';

/**
 * Maps sensor state values to vacuum phase
 */
export const STATE_TO_PHASE: Record<string, VacuumPhase> = {
  // Idle states
  idle: 'idle',
  charging: 'idle',
  charging_completed: 'idle',

  // Cleaning states
  sweeping: 'cleaning',
  mopping: 'cleaning',
  sweeping_and_mopping: 'cleaning',
  second_cleaning: 'cleaning',
  spot_cleaning: 'cleaning',
  extra_cleaning: 'cleaning',
  initial_deep_cleaning: 'cleaning',
  floor_maintaining: 'cleaning',

  // Paused states
  paused: 'paused',
  washing_paused: 'paused',
  monitoring_paused: 'paused',
  dust_bag_drying_paused: 'paused',
  finding_pet_paused: 'paused',
  initial_deep_cleaning_paused: 'paused',
  changing_mop_paused: 'paused',
  floor_maintaining_paused: 'paused',

  // Returning states
  returning: 'returning',
  returning_to_wash: 'returning',
  returning_install_mop: 'returning',
  returning_remove_mop: 'returning',
  returning_auto_empty: 'returning',
  returning_to_drain: 'returning',
  heading_to_extra_cleaning: 'returning',

  // Maintenance states
  washing: 'maintenance',
  drying: 'maintenance',
  auto_emptying: 'maintenance',
  station_cleaning: 'maintenance',
  draining: 'maintenance',
  auto_water_draining: 'maintenance',
  emptying: 'maintenance',
  dust_bag_drying: 'maintenance',
  water_check: 'maintenance',
  clean_add_water: 'maintenance',
  sanitizing: 'maintenance',
  sanitizing_with_dry: 'maintenance',
  changing_mop: 'maintenance',

  // Error state
  error: 'error',

  // Other states
  unknown: 'other',
  building: 'other',
  upgrading: 'other',
  remote_control: 'other',
  monitoring: 'other',
  shortcut: 'other',
  human_following: 'other',
  finding_pet: 'other',
  waiting_for_task: 'other',
  smart_charging: 'other',
  station_reset: 'other',
  clean_summon: 'other',
} as const;

/**
 * Maps sensor state values to cleaning task type
 * Only cleaning-related states have tasks; others map to 'none'
 */
export const STATE_TO_TASK: Record<string, CleaningTask> = {
  sweeping: 'vacuuming',
  spot_cleaning: 'vacuuming',
  mopping: 'mopping',
  second_cleaning: 'mopping', // Mopping phase of "mop after vac"
  sweeping_and_mopping: 'vacuuming_and_mopping',
  extra_cleaning: 'vacuuming',
  initial_deep_cleaning: 'vacuuming_and_mopping',
  floor_maintaining: 'mopping',
} as const;

/**
 * Maps vacuum.entity.state to phase (fallback when sensor unavailable)
 */
export const VACUUM_STATE_TO_PHASE: Record<string, VacuumPhase> = {
  cleaning: 'cleaning',
  docked: 'idle',
  idle: 'idle',
  paused: 'paused',
  returning: 'returning',
  error: 'error',
} as const;

/**
 * Default phase when state is unknown
 */
export const DEFAULT_PHASE: VacuumPhase = 'idle';

/**
 * Default task when not cleaning
 */
export const DEFAULT_TASK: CleaningTask = 'none';
