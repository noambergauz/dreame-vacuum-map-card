/**
 * Capability strings from Dreame integration
 * Found in vacuum.entity.attributes.capabilities array
 *
 * These capabilities determine which features are available for a specific robot model.
 * The UI dynamically shows/hides sections based on these capabilities.
 */
export const CAPABILITY = {
  // Navigation
  LIDAR_NAVIGATION: 'lidar_navigation',

  // Map Features
  MULTI_FLOOR_MAP: 'multi_floor_map',
  WIFI_MAP: 'wifi_map',
  BACKUP_MAP: 'backup_map',
  MAP: 'map',
  AREA_ROTATION: 'area_rotation',
  SEGMENT_VISIBILITY: 'segment_visibility',
  AUTO_RENAME_SEGMENT: 'auto_rename_segment',
  RAMPS: 'ramps',
  VIRTUAL_TRACKS: 'virtual_tracks',

  // AI & Detection
  AI_DETECTION: 'ai_detection',
  FILL_LIGHT: 'fill_light',
  CAMERA_STREAMING: 'camera_streaming',
  FLUID_DETECTION: 'fluid_detection',
  PET_FURNITURE: 'pet_furniture',
  OBSTACLE_IMAGE_CROP: 'obstacle_image_crop',
  OBSTACLES: 'obstacles',

  // Cleaning Modes
  CLEANGENIUS: 'cleangenius',
  CLEANGENIUS_MODE: 'cleangenius_mode',
  CLEANING_ROUTE: 'cleaning_route',
  SEGMENT_SLOW_CLEAN_ROUTE: 'segment_slow_clean_route',
  CUSTOMIZED_CLEANING: 'customized_cleaning',
  MOPPING_AFTER_SWEEPING: 'mopping_after_sweeping',
  CUSTOM_CLEANING_MODE: 'custom_cleaning_mode',
  CLEANING_SEQUENCE_V2: 'cleaning_sequence_v2',
  ULTRA_CLEAN_MODE: 'ultra_clean_mode',
  TASK_TYPE: 'task_type',
  CRUISING: 'cruising',

  // Suction & Mopping
  MAX_SUCTION_POWER: 'max_suction_power',
  MAX_SUCTION_POWER_EXTENDED: 'max_suction_power_extended',
  WETNESS: 'wetness',
  WETNESS_LEVEL: 'wetness_level',
  MOPPING_SETTINGS: 'mopping_settings',
  SEGMENT_MOPPING_SETTINGS: 'segment_mopping_settings',
  TIGHT_MOPPING: 'tight_mopping',

  // Self-cleaning & Dock
  SELF_WASH_BASE: 'self_wash_base',
  SELF_CLEAN_FREQUENCY: 'self_clean_frequency',
  AUTO_EMPTY_BASE: 'auto_empty_base',
  AUTO_EMPTY_MODE: 'auto_empty_mode',
  AUTO_EMPTYING: 'auto_emptying',
  WASHING_MODE: 'washing_mode',
  WATER_TEMPERATURE: 'water_temperature',
  HOT_WASHING: 'hot_washing',
  SMART_MOP_WASHING: 'smart_mop_washing',
  AUTO_ADD_DETERGENT: 'auto_add_detergent',
  AUTO_REWASHING: 'auto_rewashing',
  AUTO_RECLEANING: 'auto_recleaning',
  DRAINAGE: 'drainage',
  STATION_CLEANING: 'station_cleaning',
  WATER_TANK_DRAINING: 'water_tank_draining',
  WATER_CHECK: 'water_check',

  // Carpet
  CARPET_RECOGNITION: 'carpet_recognition',
  INTENSIVE_CARPET_CLEANING: 'intensive_carpet_cleaning',
  CLEAN_CARPETS_FIRST: 'clean_carpets_first',
  SIDE_BRUSH_CARPET_ROTATE: 'side_brush_carpet_rotate',
  AUTO_CARPET_CLEANING: 'auto_carpet_cleaning',
  CARPET_CLEANSET_V2: 'carpet_cleanset_v2',
  CARPET_SHAPE: 'carpet_shape',
  CARPET_ID: 'carpet_id',

  // Mop & Edge Features
  MOP_PAD_LIFTING: 'mop_pad_lifting',
  MOP_PAD_LIFTING_PLUS: 'mop_pad_lifting_plus',
  MOP_PAD_UNMOUNTING: 'mop_pad_unmounting',
  MOP_PAD_SWING: 'mop_pad_swing',
  MOP_PAD_SWING_PLUS: 'mop_pad_swing_plus',
  SIDE_REACH: 'side_reach',

  // Floor & Navigation
  FLOOR_DIRECTION_CLEANING: 'floor_direction_cleaning',
  FLOOR_MATERIAL: 'floor_material',
  LARGE_PARTICLES_BOOST: 'large_particles_boost',

  // Furniture Detection
  SAVED_FURNITURES: 'saved_furnitures',
  EXTENDED_FURNITURES: 'extended_furnitures',
  FURNITURES_V2: 'furnitures_v2',

  // DND & Schedule
  DND: 'dnd',
  DND_TASK: 'dnd_task',
  DND_FUNCTIONS: 'dnd_functions',

  // Other Features
  SHORTCUTS: 'shortcuts',
  VOICE_ASSISTANT: 'voice_assistant',
  OFF_PEAK_CHARGING: 'off_peak_charging',
  AUTO_SWITCH_SETTINGS: 'auto_switch_settings',
  NEW_STATE: 'new_state',
  GEN5: 'gen5',
} as const;

export type CapabilityString = (typeof CAPABILITY)[keyof typeof CAPABILITY];
