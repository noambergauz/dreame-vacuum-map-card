export const en = {
  // Room Selector
  room_selector: {
    title: 'Select Rooms',
    selected_count: '{{count}} selected',
  },

  // Vacuum Map
  vacuum_map: {
    no_map: 'No map available',
    looking_for: 'Looking for: {{entity}}',
    room_overlay: 'Click on room numbers to select rooms for cleaning',
    zone_overlay_create: 'Click on the map to place a cleaning zone',
    zone_overlay_resize: 'Drag corners to resize, click elsewhere to reposition',
    clear_zone: 'Clear zone',
  },

  // Mode Tabs
  modes: {
    room: 'Room',
    all: 'All',
    zone: 'Zone',
  },

  // Action Buttons
  actions: {
    clean: 'Clean',
    clean_all: 'Clean All',
    clean_rooms: 'Clean {{count}} Room',
    clean_rooms_plural: 'Clean {{count}} Rooms',
    select_rooms: 'Select Rooms',
    zone_clean: 'Zone Clean',
    pause: 'Pause',
    resume: 'Resume',
    stop: 'Stop',
    dock: 'Dock',
  },

  // Toast Messages
  toast: {
    selected_room: 'Selected {{name}}',
    deselected_room: 'Deselected {{name}}',
    paused: 'Paused cleaning',
    stopped: 'Stopped cleaning',
    docked: 'Returning to dock',
    cleaning_started: 'Cleaning started',
    resuming: 'Resuming cleaning',
    starting_full_clean: 'Starting full house cleaning',
    pausing_vacuum: 'Pausing vacuum',
    stopping_vacuum: 'Stopping vacuum',
    vacuum_docking: 'Vacuum returning to dock',
    starting_room_clean: 'Starting cleaning for {{count}} selected room',
    starting_room_clean_plural: 'Starting cleaning for {{count}} selected rooms',
    starting_zone_clean: 'Starting zone cleaning',
    select_rooms_first: 'Please select rooms to clean first',
    cannot_determine_map: 'Cannot determine map dimensions',
    select_zone_first: 'Please select a zone on the map',
  },

  // Room Selection Display
  room_display: {
    selected_rooms: 'Selected Rooms:',
    selected_label: 'Selected:',
  },

  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: 'Custom: ',
    prefix_cleangenius: 'CleanGenius: ',
    view_shortcuts: 'View shortcuts',
    vac_and_mop: 'Vac & Mop',
    mop_after_vac: 'Mop after Vac',
    vacuum: 'Vacuum',
    mop: 'Mop',
  },

  // Cleaning Mode Modal
  cleaning_mode: {
    title: 'Cleaning Mode',
    clean_genius: 'CleanGenius',
    custom: 'Custom',
  },

  // Shortcuts Modal
  shortcuts: {
    title: 'Shortcuts',
    no_shortcuts: 'No shortcuts available',
    create_hint: 'Create shortcuts in the Dreame app to quickly start your favorite cleaning routines',
  },

  // Custom Mode
  custom_mode: {
    cleaning_mode_title: 'Cleaning Mode',
    suction_power_title: 'Suction Power',
    max_plus_description: 'The suction power will be increased to the highest level, which is a single-use mode.',
    wetness_title: 'Wetness',
    slightly_dry: 'Slightly dry',
    moist: 'Moist',
    wet: 'Wet',
    mop_washing_frequency_title: 'Mop-washing frequency',
    route_title: 'Route',
  },

  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: 'Cleaning Mode',
    deep_cleaning: 'Deep Cleaning',
  },

  // Header
  header: {
    battery: 'Battery',
    status: 'Status',
  },

  // Errors
  errors: {
    entity_not_found: 'Entity not found: {{entity}}',
    failed_to_load: 'Failed to load entity data',
  },
};

export type Translation = typeof en;
