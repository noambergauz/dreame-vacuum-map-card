/**
 * Type definitions and enums for the Dreame Vacuum Card
 */

import type { VACUUM_MODE_TYPE } from '@/constants';

export type VacuumModeType = (typeof VACUUM_MODE_TYPE)[keyof typeof VACUUM_MODE_TYPE];

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

export interface VacuumEntityAttributes {
  cleaning_mode?: string;
  cleaning_mode_list?: string[];
  cleangenius?: string;
  cleangenius_list?: string[];
  cleangenius_mode?: string;
  cleangenius_mode_list?: string[];

  // Suction and power
  suction_level?: string;
  suction_level_list?: string[];
  max_suction_power?: boolean;

  // Mopping settings
  wetness_level?: number;
  mop_pad_humidity?: string;
  mop_pad_humidity_list?: string[];

  // Cleaning route
  cleaning_route?: string;
  cleaning_route_list?: string[];

  // Self cleaning
  self_clean_area?: number;
  self_clean_area_min?: number;
  self_clean_area_max?: number;
  self_clean_frequency?: string;
  self_clean_frequency_list?: string[];
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

// Per-room cleaning configuration for Customize mode
export interface RoomCleaningConfig {
  roomId: number;
  cleaningMode: number; // 0=Vacuum, 1=Mop, 2=Vac & Mop
  suctionLevel: number; // 0-3 (Quiet, Standard, Strong, Turbo)
  mopWetness: number; // 1-3 (Slightly dry, Standard, Wet)
  cycles: number; // 1-3
}

// Customize cleaning state
export interface CustomizeCleaningState {
  enabled: boolean;
  roomConfigs: Map<number, RoomCleaningConfig>;
}

// Persisted customize config structure
export interface PersistedCustomizeConfig {
  version: number;
  rooms: Record<number, Omit<RoomCleaningConfig, 'roomId'>>;
}
