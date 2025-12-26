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
    [key: string]: any;
  };
  context: any;
  last_changed: string;
  last_updated: string;
}

export interface Room {
  id: number;
  name: string;
  icon?: string;
}

export interface HassConfig {
  entity: string;
  map_entity?: string;
  title?: string;
  type: string;
}

export interface Hass {
  states: Record<string, HassEntity>;
  callService: (domain: string, service: string, data?: any) => Promise<void>;
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
}
