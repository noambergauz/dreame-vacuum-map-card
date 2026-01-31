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
}

export interface HassConfig {
  entity: string;
  map_entity?: string;
  title?: string;
  type: string;
  theme?: 'light' | 'dark';
  language?: 'en' | 'de' | 'ru';
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
