/**
 * Entity UI Mapping Configuration
 *
 * Maps dreame-vacuum entities to UI sections for rendering.
 * This file is hand-maintained to control what appears where in the card UI.
 *
 * The generated dreame-entities.ts provides the complete list of available entities.
 * This file determines which ones are displayed and in what section.
 */

export const UI_SECTION = {
  STATUS: 'status',
  CLEANING_SETTINGS: 'cleaning_settings',
  MOPPING_SETTINGS: 'mopping_settings',
  STATION_CONTROLS: 'station_controls',
  CONSUMABLES: 'consumables',
  AI_DETECTION: 'ai_detection',
  SCHEDULING: 'scheduling',
  MAP_SETTINGS: 'map_settings',
  CARPET_SETTINGS: 'carpet_settings',
  MAINTENANCE: 'maintenance',
} as const;

export type UISectionKey = (typeof UI_SECTION)[keyof typeof UI_SECTION];

interface UISectionConfig {
  title: string;
  order: number;
  entities: string[];
}

export const UI_SECTIONS: Record<UISectionKey, UISectionConfig> = {
  [UI_SECTION.STATUS]: {
    title: 'Status',
    order: 1,
    entities: ['battery_level', 'state', 'status', 'error', 'cleaning_time', 'cleaned_area', 'cleaning_progress'],
  },

  [UI_SECTION.CLEANING_SETTINGS]: {
    title: 'Cleaning Settings',
    order: 2,
    entities: [
      'cleaning_mode',
      'suction_level',
      'cleaning_route',
      'cleangenius',
      'cleangenius_mode',
      'customized_cleaning',
      'cleaning_sequence',
    ],
  },

  [UI_SECTION.MOPPING_SETTINGS]: {
    title: 'Mopping',
    order: 3,
    entities: [
      'water_volume',
      'mop_pad_humidity',
      'wetness_level',
      'tight_mopping',
      'mop_extend',
      'mop_pressure',
      'mop_temperature',
    ],
  },

  [UI_SECTION.STATION_CONTROLS]: {
    title: 'Station',
    order: 4,
    entities: [
      'self_clean',
      'self_clean_frequency',
      'self_clean_area',
      'self_clean_time',
      'manual_drying',
      'auto_drying',
      'drying_time',
      'start_auto_empty',
      'auto_empty_mode',
      'water_tank_draining',
      'base_station_cleaning',
      'mop_wash_level',
      'washing_mode',
      'water_temperature',
    ],
  },

  [UI_SECTION.CONSUMABLES]: {
    title: 'Consumables',
    order: 5,
    entities: [
      'main_brush_left',
      'side_brush_left',
      'filter_left',
      'mop_pad_left',
      'sensor_dirty_left',
      'silver_ion_left',
      'detergent_left',
      'squeegee_left',
      'tank_filter_left',
    ],
  },

  [UI_SECTION.AI_DETECTION]: {
    title: 'AI Detection',
    order: 6,
    entities: [
      'ai_obstacle_detection',
      'ai_obstacle_picture',
      'ai_pet_detection',
      'ai_human_detection',
      'ai_furniture_detection',
      'ai_fluid_detection',
      'obstacle_avoidance',
      'fill_light',
    ],
  },

  [UI_SECTION.CARPET_SETTINGS]: {
    title: 'Carpet',
    order: 7,
    entities: [
      'carpet_boost',
      'carpet_recognition',
      'carpet_cleaning',
      'carpet_sensitivity',
      'carpet_avoidance',
      'intensive_carpet_cleaning',
      'clean_carpets_first',
    ],
  },

  [UI_SECTION.SCHEDULING]: {
    title: 'Schedule',
    order: 8,
    entities: ['dnd', 'dnd_start', 'dnd_end', 'off_peak_charging', 'off_peak_charging_start', 'off_peak_charging_end'],
  },

  [UI_SECTION.MAP_SETTINGS]: {
    title: 'Map',
    order: 9,
    entities: ['selected_map', 'multi_floor_map', 'map_saving', 'intelligent_recognition'],
  },

  [UI_SECTION.MAINTENANCE]: {
    title: 'Maintenance',
    order: 10,
    entities: [
      'reset_main_brush',
      'reset_side_brush',
      'reset_filter',
      'reset_sensor',
      'reset_mop_pad',
      'clear_warning',
      'start_fast_mapping',
    ],
  },
} as const;

export function getEntitySection(entityKey: string): UISectionKey | null {
  for (const [sectionKey, config] of Object.entries(UI_SECTIONS)) {
    if (config.entities.includes(entityKey)) {
      return sectionKey as UISectionKey;
    }
  }
  return null;
}

export function getSectionEntities(section: UISectionKey): string[] {
  return UI_SECTIONS[section]?.entities ?? [];
}

export function getSortedSections(): UISectionKey[] {
  return Object.entries(UI_SECTIONS)
    .sort(([, a], [, b]) => a.order - b.order)
    .map(([key]) => key as UISectionKey);
}
