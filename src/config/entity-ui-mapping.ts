/**
 * Entity UI Mapping Configuration
 *
 * Maps dreame-vacuum entities to UI sections for rendering.
 * This is the SINGLE SOURCE OF TRUTH for which entities appear in which section.
 *
 * The generated dreame-entities.ts provides the complete list of available entities.
 * This file determines which ones are displayed and in what section.
 */

import {
  DREAME_SWITCHES,
  DREAME_SELECTS,
  DREAME_NUMBERS,
  DREAME_BUTTONS,
  DREAME_SENSORS,
  DREAME_TIMES,
  DREAME_CAPABILITIES,
} from '@/generated/dreame-entities';

// Entity platform types
export type EntityPlatform = 'switch' | 'select' | 'number' | 'button' | 'sensor' | 'time' | 'attribute';

// Entity definition with all metadata needed for rendering
export interface EntityDefinition {
  key: string;
  platform: EntityPlatform;
  labelKey: string;
  descriptionKey?: string;
  /** Capability required for this entity to be shown */
  capability?: string;
  /** Parent entity that must be enabled for this to show */
  parentKey?: string;
  /** For select entities: use segmented control instead of dropdown */
  useSegmentedControl?: boolean;
  /** For number entities: min/max/step overrides */
  min?: number;
  max?: number;
  step?: number;
  /** Custom render hint */
  renderHint?: 'slider' | 'brightness' | 'volume' | 'consumable';
}

// Section definition
export interface SectionDefinition {
  key: string;
  titleKey: string;
  icon?: string;
  order: number;
  entities: EntityDefinition[];
  /** Capabilities required for section to be visible (any match) */
  capabilities?: string[];
}

// Helper to create entity definition from generated constants
function sw(
  key: keyof typeof DREAME_SWITCHES,
  labelKey: string,
  descriptionKey?: string,
  opts?: Partial<EntityDefinition>
): EntityDefinition {
  return {
    key: DREAME_SWITCHES[key].key,
    platform: 'switch',
    labelKey,
    descriptionKey,
    ...opts,
  };
}

function sel(
  key: keyof typeof DREAME_SELECTS,
  labelKey: string,
  descriptionKey?: string,
  opts?: Partial<EntityDefinition>
): EntityDefinition {
  return {
    key: DREAME_SELECTS[key].key,
    platform: 'select',
    labelKey,
    descriptionKey,
    ...opts,
  };
}

function num(
  key: keyof typeof DREAME_NUMBERS,
  labelKey: string,
  descriptionKey?: string,
  opts?: Partial<EntityDefinition>
): EntityDefinition {
  return {
    key: DREAME_NUMBERS[key].key,
    platform: 'number',
    labelKey,
    descriptionKey,
    ...opts,
  };
}

function btn(
  key: keyof typeof DREAME_BUTTONS,
  labelKey: string,
  descriptionKey?: string,
  opts?: Partial<EntityDefinition>
): EntityDefinition {
  return {
    key: DREAME_BUTTONS[key].key,
    platform: 'button',
    labelKey,
    descriptionKey,
    ...opts,
  };
}

// Reserved for future use - sensors and times
// function sensor(key: keyof typeof DREAME_SENSORS, labelKey: string, descriptionKey?: string, opts?: Partial<EntityDefinition>): EntityDefinition
// function time(key: keyof typeof DREAME_TIMES, labelKey: string, descriptionKey?: string, opts?: Partial<EntityDefinition>): EntityDefinition
void DREAME_SENSORS;
void DREAME_TIMES;

// Shorthand for capability check
const CAP = DREAME_CAPABILITIES;

// =============================================================================
// SECTION DEFINITIONS
// =============================================================================

export const QUICK_SETTINGS_SECTION: SectionDefinition = {
  key: 'quick_settings',
  titleKey: 'settings.quick_settings.title',
  order: 1,
  entities: [
    sw('CHILD_LOCK', 'settings.quick_settings.child_lock', 'settings.quick_settings.child_lock_desc'),
    sw('RESUME_CLEANING', 'settings.quick_settings.resume_cleaning', 'settings.quick_settings.resume_cleaning_desc'),
    sw('DND', 'settings.quick_settings.dnd', 'settings.quick_settings.dnd_desc', { capability: CAP.DND }),
    sw(
      'DND_DISABLE_RESUME_CLEANING',
      'settings.quick_settings.dnd_disable_resume',
      'settings.quick_settings.dnd_disable_resume_desc',
      {
        capability: CAP.DND_FUNCTIONS,
        parentKey: 'dnd',
      }
    ),
    sw(
      'DND_DISABLE_AUTO_EMPTY',
      'settings.quick_settings.dnd_disable_auto_empty',
      'settings.quick_settings.dnd_disable_auto_empty_desc',
      {
        capability: CAP.DND_FUNCTIONS,
        parentKey: 'dnd',
      }
    ),
    sw(
      'DND_REDUCE_VOLUME',
      'settings.quick_settings.dnd_reduce_volume',
      'settings.quick_settings.dnd_reduce_volume_desc',
      {
        capability: CAP.DND_FUNCTIONS,
        parentKey: 'dnd',
      }
    ),
  ],
};

export const QUICK_ACTIONS_SECTION: SectionDefinition = {
  key: 'quick_actions',
  titleKey: 'settings.station_controls.title',
  order: 2,
  entities: [
    btn('SELF_CLEAN', 'settings.station_controls.self_clean', 'settings.station_controls.self_clean_desc'),
    btn('MANUAL_DRYING', 'settings.station_controls.manual_drying', 'settings.station_controls.manual_drying_desc'),
    btn(
      'WATER_TANK_DRAINING',
      'settings.station_controls.water_tank_draining',
      'settings.station_controls.water_tank_draining_desc'
    ),
    btn(
      'BASE_STATION_CLEANING',
      'settings.station_controls.base_station_cleaning',
      'settings.station_controls.base_station_cleaning_desc'
    ),
    btn(
      'EMPTY_WATER_TANK',
      'settings.station_controls.empty_water_tank',
      'settings.station_controls.empty_water_tank_desc'
    ),
    btn(
      'START_AUTO_EMPTY',
      'settings.station_controls.start_auto_empty',
      'settings.station_controls.start_auto_empty_desc'
    ),
    btn(
      'START_RECLEANING',
      'settings.station_controls.start_recleaning',
      'settings.station_controls.start_recleaning_desc'
    ),
    btn('CLEAR_WARNING', 'settings.station_controls.clear_warning', 'settings.station_controls.clear_warning_desc'),
  ],
};

export const CARPET_SETTINGS_SECTION: SectionDefinition = {
  key: 'carpet_settings',
  titleKey: 'settings.carpet.title',
  order: 3,
  capabilities: [CAP.CARPET_RECOGNITION],
  entities: [
    sel('CARPET_CLEANING', 'settings.carpet.cleaning_mode', 'settings.carpet.cleaning_mode_desc'),
    sw('CLEAN_CARPETS_FIRST', 'settings.carpet.clean_carpets_first', 'settings.carpet.clean_carpets_first_desc'),
    sw('CARPET_BOOST', 'settings.carpet.carpet_boost', 'settings.carpet.carpet_boost_desc'),
    sw('INTENSIVE_CARPET_CLEANING', 'settings.carpet.intensive_cleaning', 'settings.carpet.intensive_cleaning_desc'),
    sw('SIDE_BRUSH_CARPET_ROTATE', 'settings.carpet.side_brush_rotate', 'settings.carpet.side_brush_rotate_desc'),
    sel('CARPET_SENSITIVITY', 'settings.carpet.sensitivity', 'settings.carpet.sensitivity_desc'),
  ],
};

export const FLOOR_SETTINGS_SECTION: SectionDefinition = {
  key: 'floor_settings',
  titleKey: 'settings.floor.title',
  order: 4,
  entities: [
    sw('OBSTACLE_AVOIDANCE', 'settings.floor.obstacle_avoidance', 'settings.floor.obstacle_avoidance_desc'),
    sw('COLLISION_AVOIDANCE', 'settings.floor.collision_avoidance', 'settings.floor.collision_avoidance_desc'),
    sw('AUTO_MOUNT_MOP', 'settings.floor.auto_mount_mop', 'settings.floor.auto_mount_mop_desc'),
    sw('STAIN_AVOIDANCE', 'settings.floor.stain_avoidance', 'settings.floor.stain_avoidance_desc'),
    sw(
      'FLOOR_DIRECTION_CLEANING',
      'settings.floor.floor_direction_cleaning',
      'settings.floor.floor_direction_cleaning_desc'
    ),
    sw('LARGE_PARTICLES_BOOST', 'settings.floor.large_particles_boost', 'settings.floor.large_particles_boost_desc'),
    sel('AUTO_RECLEANING', 'settings.floor.auto_recleaning', 'settings.floor.auto_recleaning_desc'),
  ],
};

export const EDGE_CORNER_SECTION: SectionDefinition = {
  key: 'edge_corner',
  titleKey: 'settings.edge_corner.title',
  order: 5,
  capabilities: [CAP.MOP_PAD_LIFTING, CAP.SIDE_REACH, CAP.MOP_PAD_SWING, CAP.MOP_PAD_SWING_PLUS],
  entities: [
    sw('SIDE_REACH', 'settings.edge_corner.side_reach', 'settings.edge_corner.side_reach_desc', {
      capability: CAP.SIDE_REACH,
    }),
    sw('MOP_EXTEND', 'settings.edge_corner.mop_extend', 'settings.edge_corner.mop_extend_desc'),
    sw('GAP_CLEANING_EXTENSION', 'settings.edge_corner.gap_cleaning', 'settings.edge_corner.gap_cleaning_desc', {
      parentKey: 'mop_extend',
    }),
    sw('MOPPING_UNDER_FURNITURES', 'settings.edge_corner.mopping_under', 'settings.edge_corner.mopping_under_desc', {
      parentKey: 'mop_extend',
    }),
    sel('MOP_EXTEND_FREQUENCY', 'settings.edge_corner.extend_frequency', 'settings.edge_corner.extend_frequency_desc'),
  ],
};

export const VOLUME_SECTION: SectionDefinition = {
  key: 'volume',
  titleKey: 'settings.volume.title',
  order: 6,
  entities: [
    num('VOLUME', 'settings.volume.volume', undefined, { renderHint: 'volume', min: 0, max: 100 }),
    sw('VOICE_ASSISTANT', 'settings.volume.voice_assistant', 'settings.volume.voice_assistant_desc', {
      capability: CAP.VOICE_ASSISTANT,
    }),
    sel('VOICE_ASSISTANT_LANGUAGE', 'settings.volume.voice_language', 'settings.volume.voice_language_desc', {
      capability: CAP.VOICE_ASSISTANT,
      parentKey: 'voice_assistant',
    }),
    sw(
      'STREAMING_VOICE_PROMPT',
      'settings.volume.streaming_voice_prompt',
      'settings.volume.streaming_voice_prompt_desc'
    ),
  ],
};

export const DOCK_SETTINGS_SECTION: SectionDefinition = {
  key: 'dock_settings',
  titleKey: 'settings.dock.title',
  order: 7,
  capabilities: [
    CAP.AUTO_EMPTY_BASE,
    CAP.SELF_WASH_BASE,
    CAP.AUTO_ADD_DETERGENT,
    CAP.SMART_MOP_WASHING,
    CAP.WASHING_MODE,
    CAP.HOT_WASHING,
    CAP.OFF_PEAK_CHARGING,
    CAP.STATION_CLEANING,
    CAP.AUTO_REWASHING,
  ],
  entities: [
    sw('SELF_CLEAN', 'settings.dock.self_clean', 'settings.dock.self_clean_desc', { capability: CAP.SELF_WASH_BASE }),
    sel('AUTO_EMPTY_MODE', 'settings.dock.auto_empty_mode', 'settings.dock.auto_empty_mode_desc', {
      capability: CAP.AUTO_EMPTY_BASE,
    }),
    sw('AUTO_ADD_DETERGENT', 'settings.dock.auto_detergent', 'settings.dock.auto_detergent_desc', {
      capability: CAP.AUTO_ADD_DETERGENT,
    }),
    sw('SMART_MOP_WASHING', 'settings.dock.smart_washing', 'settings.dock.smart_washing_desc', {
      capability: CAP.SMART_MOP_WASHING,
    }),
    sel('WASHING_MODE', 'settings.dock.washing_mode', 'settings.dock.washing_mode_desc', {
      capability: CAP.WASHING_MODE,
    }),
    sel('WATER_TEMPERATURE', 'settings.dock.water_temperature', 'settings.dock.water_temperature_desc', {
      capability: CAP.HOT_WASHING,
    }),
    sw('AUTO_DRYING', 'settings.dock.auto_drying', 'settings.dock.auto_drying_desc', {
      capability: CAP.SELF_WASH_BASE,
    }),
    sel('DRYING_TIME', 'settings.dock.drying_time', 'settings.dock.drying_time_desc', {
      capability: CAP.SELF_WASH_BASE,
      useSegmentedControl: true,
    }),
    sel('AUTO_REWASHING', 'settings.dock.auto_rewashing', 'settings.dock.auto_rewashing_desc', {
      capability: CAP.AUTO_REWASHING,
    }),
    sw('OFF_PEAK_CHARGING', 'settings.dock.off_peak_charging', 'settings.dock.off_peak_charging_desc', {
      capability: CAP.OFF_PEAK_CHARGING,
    }),
    btn('BASE_STATION_CLEANING', 'settings.dock.station_cleaning', 'settings.dock.station_cleaning_desc', {
      capability: CAP.STATION_CLEANING,
    }),
    btn('BASE_STATION_SELF_REPAIR', 'settings.dock.self_repair', 'settings.dock.self_repair_desc', {
      capability: CAP.STATION_CLEANING,
    }),
  ],
};

export const AI_DETECTION_SECTION: SectionDefinition = {
  key: 'ai_detection',
  titleKey: 'settings.ai_detection.title',
  order: 8,
  capabilities: [CAP.AI_DETECTION],
  entities: [
    sw(
      'INTELLIGENT_RECOGNITION',
      'settings.ai_detection.intelligent_recognition',
      'settings.ai_detection.intelligent_recognition_desc'
    ),
    sw(
      'AI_OBSTACLE_DETECTION',
      'settings.ai_detection.ai_obstacle_detection',
      'settings.ai_detection.ai_obstacle_detection_desc'
    ),
    sw(
      'FUZZY_OBSTACLE_DETECTION',
      'settings.ai_detection.fuzzy_obstacle_detection',
      'settings.ai_detection.fuzzy_obstacle_detection_desc'
    ),
    sw(
      'AI_OBSTACLE_IMAGE_UPLOAD',
      'settings.ai_detection.ai_obstacle_image_upload',
      'settings.ai_detection.ai_obstacle_image_upload_desc'
    ),
    sw(
      'AI_OBSTACLE_PICTURE',
      'settings.ai_detection.ai_obstacle_picture',
      'settings.ai_detection.ai_obstacle_picture_desc'
    ),
    sw('AI_PET_DETECTION', 'settings.ai_detection.ai_pet_detection', 'settings.ai_detection.ai_pet_detection_desc'),
    sw(
      'PET_FOCUSED_DETECTION',
      'settings.ai_detection.pet_focused_detection',
      'settings.ai_detection.pet_focused_detection_desc'
    ),
    sw('PET_PICTURE', 'settings.ai_detection.pet_picture', 'settings.ai_detection.pet_picture_desc'),
    sw(
      'AI_HUMAN_DETECTION',
      'settings.ai_detection.ai_human_detection',
      'settings.ai_detection.ai_human_detection_desc'
    ),
    sw('HUMAN_FOLLOW', 'settings.ai_detection.human_follow', 'settings.ai_detection.human_follow_desc'),
    sw(
      'AI_FURNITURE_DETECTION',
      'settings.ai_detection.ai_furniture_detection',
      'settings.ai_detection.ai_furniture_detection_desc'
    ),
    sw(
      'AI_FLUID_DETECTION',
      'settings.ai_detection.ai_fluid_detection',
      'settings.ai_detection.ai_fluid_detection_desc'
    ),
    sw('FILL_LIGHT', 'settings.ai_detection.fill_light', 'settings.ai_detection.fill_light_desc'),
    sw(
      'CAMERA_LIGHT_BRIGHTNESS_AUTO',
      'settings.ai_detection.camera_light_auto',
      'settings.ai_detection.camera_light_auto_desc'
    ),
    num(
      'CAMERA_LIGHT_BRIGHTNESS',
      'settings.ai_detection.camera_light_brightness',
      'settings.ai_detection.camera_light_brightness_desc',
      {
        renderHint: 'brightness',
        parentKey: 'camera_light_brightness_auto', // Show only when auto is OFF (inverted logic handled in component)
      }
    ),
  ],
};

export const MAP_SETTINGS_SECTION: SectionDefinition = {
  key: 'map_settings',
  titleKey: 'settings.map.title',
  order: 9,
  entities: [
    sw('MULTI_FLOOR_MAP', 'settings.map.multi_floor', 'settings.map.multi_floor_desc'),
    sel('MAP_ROTATION', 'settings.map.rotation', 'settings.map.rotation_desc'),
    btn('START_MAPPING', 'settings.map.start_mapping'),
    btn('START_FAST_MAPPING', 'settings.map.start_fast_mapping'),
  ],
};

// Consumables use a different rendering approach (attributes, not entities)
export const CONSUMABLES_CONFIG = [
  {
    key: 'main_brush',
    labelKey: 'settings.consumables.main_brush',
    percentKey: 'main_brush_left',
    hoursKey: 'main_brush_time_left',
  },
  {
    key: 'side_brush',
    labelKey: 'settings.consumables.side_brush',
    percentKey: 'side_brush_left',
    hoursKey: 'side_brush_time_left',
  },
  { key: 'filter', labelKey: 'settings.consumables.filter', percentKey: 'filter_left', hoursKey: 'filter_time_left' },
  {
    key: 'sensor',
    labelKey: 'settings.consumables.sensor',
    percentKey: 'sensor_dirty_left',
    hoursKey: 'sensor_dirty_time_left',
  },
  {
    key: 'mop_pad',
    labelKey: 'settings.consumables.mop_pad',
    percentKey: 'mop_pad_left',
    hoursKey: 'mop_pad_time_left',
  },
  {
    key: 'silver_ion',
    labelKey: 'settings.consumables.silver_ion',
    percentKey: 'silver_ion_left',
    hoursKey: 'silver_ion_time_left',
  },
  {
    key: 'detergent',
    labelKey: 'settings.consumables.detergent',
    percentKey: 'detergent_left',
    hoursKey: 'detergent_time_left',
  },
  {
    key: 'squeegee',
    labelKey: 'settings.consumables.squeegee',
    percentKey: 'squeegee_left',
    hoursKey: 'squeegee_time_left',
  },
  {
    key: 'tank_filter',
    labelKey: 'settings.consumables.tank_filter',
    percentKey: 'tank_filter_left',
    hoursKey: 'tank_filter_time_left',
  },
] as const;

// =============================================================================
// ALL SECTIONS (ordered)
// =============================================================================

export const ALL_SECTIONS: SectionDefinition[] = [
  QUICK_SETTINGS_SECTION,
  QUICK_ACTIONS_SECTION,
  CARPET_SETTINGS_SECTION,
  FLOOR_SETTINGS_SECTION,
  EDGE_CORNER_SECTION,
  VOLUME_SECTION,
  DOCK_SETTINGS_SECTION,
  AI_DETECTION_SECTION,
  MAP_SETTINGS_SECTION,
].sort((a, b) => a.order - b.order);

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

export function getSectionByKey(key: string): SectionDefinition | undefined {
  return ALL_SECTIONS.find((s) => s.key === key);
}

export function getEntityDefinition(entityKey: string): EntityDefinition | undefined {
  for (const section of ALL_SECTIONS) {
    const entity = section.entities.find((e) => e.key === entityKey);
    if (entity) return entity;
  }
  return undefined;
}

export function getAllEntityKeys(): string[] {
  const keys = new Set<string>();
  for (const section of ALL_SECTIONS) {
    for (const entity of section.entities) {
      keys.add(entity.key);
    }
  }
  return Array.from(keys);
}
