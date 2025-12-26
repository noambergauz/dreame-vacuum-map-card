/**
 * Type definitions and enums for the Dreame Vacuum Card
 */

import type {
  CLEANING_MODE,
  CLEANGENIUS_MODE,
  CLEANGENIUS_STATE,
  SUCTION_LEVEL,
  CLEANING_ROUTE,
  MOP_PAD_HUMIDITY,
  VACUUM_MODE_TYPE,
  SELF_CLEAN_FREQUENCY,
} from '../constants';

// Extract the type from const objects
export type CleaningMode = typeof CLEANING_MODE[keyof typeof CLEANING_MODE];
export type CleanGeniusMode = typeof CLEANGENIUS_MODE[keyof typeof CLEANGENIUS_MODE];
export type CleanGeniusState = typeof CLEANGENIUS_STATE[keyof typeof CLEANGENIUS_STATE];
export type SuctionLevel = typeof SUCTION_LEVEL[keyof typeof SUCTION_LEVEL];
export type CleaningRoute = typeof CLEANING_ROUTE[keyof typeof CLEANING_ROUTE];
export type MopPadHumidity = typeof MOP_PAD_HUMIDITY[keyof typeof MOP_PAD_HUMIDITY];
export type VacuumModeType = typeof VACUUM_MODE_TYPE[keyof typeof VACUUM_MODE_TYPE];
export type SelfCleanFrequency = typeof SELF_CLEAN_FREQUENCY[keyof typeof SELF_CLEAN_FREQUENCY];

// Room type
export interface Room {
  id: number;
  name: string;
  icon: string;
}

// Map type
export interface VacuumMap {
  id: number;
  date: string;
  index: number;
  name: string;
  custom_name: string | null;
  recovery_map?: string[];
}

// Vacuum entity attributes interface
export interface VacuumEntityAttributes {
  // Cleaning modes
  cleaning_mode?: CleaningMode;
  cleaning_mode_list?: CleaningMode[];
  cleangenius?: CleanGeniusState;
  cleangenius_list?: CleanGeniusState[];
  cleangenius_mode?: CleanGeniusMode;
  cleangenius_mode_list?: CleanGeniusMode[];
  
  // Suction and power
  suction_level?: SuctionLevel;
  suction_level_list?: SuctionLevel[];
  max_suction_power?: boolean;
  
  // Mopping settings
  wetness_level?: number;
  mop_pad_humidity?: MopPadHumidity;
  mop_pad_humidity_list?: MopPadHumidity[];
  custom_mopping_mode?: boolean;
  
  // Cleaning route
  cleaning_route?: CleaningRoute;
  cleaning_route_list?: CleaningRoute[];
  
  // Self cleaning
  self_clean_area?: number;
  self_clean_area_min?: number;
  self_clean_area_max?: number;
  self_clean_frequency?: SelfCleanFrequency;
  self_clean_frequency_list?: SelfCleanFrequency[];
  previous_self_clean_time?: number;
  self_clean_time_min?: number;
  self_clean_time_max?: number;
  
  // Map and rooms
  rooms?: Record<string, Room[]>;
  maps?: VacuumMap[];
  selected_map?: string;
  selected_map_id?: number;
  selected_map_index?: number;
  
  // Status
  battery?: number;
  status?: string;
  vacuum_state?: string;
  error?: string;
  
  // Capabilities
  capabilities?: string[];
  
  // Other
  [key: string]: unknown;
}

// Service call data interfaces
export interface ServiceCallData {
  entity_id: string;
  [key: string]: unknown;
}

export interface SelectOptionData extends ServiceCallData {
  option: string;
}

export interface SetValueData extends ServiceCallData {
  value: number;
}

export interface VacuumCleanSegmentData extends ServiceCallData {
  segments: number[];
}
