import type { CustomThemeConfig } from '../themes';

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: {
    friendly_name?: string;
    battery_level?: number;
    cleaned_area?: number;
    cleaning_time?: number;
    entity_picture?: string;
    rooms?: Record<string, Room[]>;
    selected_map?: string;
    [key: string]: unknown;
  };
  context: {
    id: string;
    parent_id?: string | null;
    user_id?: string | null;
  };
  last_changed: string;
  last_updated: string;
}

export interface Room {
  id: number;
  name: string;
  icon?: string;
  visibility?: string;
  x0?: number;
  y0?: number;
  x1?: number;
  y1?: number;
  room_id?: number;
  order?: number;
  cleaning_times?: number;
  suction_level?: number;
  water_volume?: number;
  wetness_level?: number;
  cleaning_mode?: number;
  cleaning_route?: number;
  type?: number;
  index?: number;
  color_index?: number;
  floor_material?: string;
  x?: number;
  y?: number;
}

export interface HassConfig {
  entity: string;
  map_entity?: string;
  title?: string;
  type: string;
  theme?: 'light' | 'dark' | 'custom';
  custom_theme?: CustomThemeConfig;
  language?: 'en' | 'de' | 'ru' | 'es';
  default_mode?: CleaningMode;
}

export interface Hass {
  states: Record<string, HassEntity>;
  callService: (domain: string, service: string, data?: Record<string, unknown>) => Promise<void>;
  hassUrl: (path: string) => string;
}

export type CleaningMode = 'room' | 'all' | 'zone';
export type CleaningStrategy = 'CleanGenius' | 'Custom';

export interface RoomPosition {
  id: number;
  name: string;
  x: number;
  y: number;
  icon?: string;
  visibility?: string;
}

export interface Zone {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface CalibrationPoint {
  vacuum: { x: number; y: number };
  map: { x: number; y: number };
}
