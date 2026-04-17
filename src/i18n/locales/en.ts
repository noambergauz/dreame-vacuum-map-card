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
    switch_to_list: 'Switch to list view',
    switch_to_map: 'Switch to map view',
    room_list_overlay: 'Tap rooms to select for cleaning',
    no_rooms: 'No rooms available',
    zoom_in: 'Zoom in',
    zoom_out: 'Zoom out',
    zoom_reset: 'Reset zoom',
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
    area: 'Area',
    time: 'Time',
  },

  // Units
  units: {
    square_meters: 'm²',
    minutes: 'min',
    minutes_short: 'm',
    percent: '%',
    decibels: 'dBm',
  },

  // Suction Levels (friendly names)
  suction_levels: {
    quiet: 'Quiet',
    standard: 'Standard',
    strong: 'Turbo',
    turbo: 'Max',
  },

  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: 'By room',
    by_area: 'By area',
    by_time: 'By time',
  },

  // Errors
  errors: {
    entity_not_found: 'Entity not found: {{entity}}',
    failed_to_load: 'Failed to load entity data',
  },

  // Settings Panel
  settings: {
    title: 'Settings',
    consumables: {
      title: 'Consumables',
      main_brush: 'Main Brush',
      side_brush: 'Side Brush',
      filter: 'Filter',
      sensor: 'Sensor',
      remaining: 'remaining',
      reset: 'Reset',
    },
    device_info: {
      title: 'Device Info',
      firmware: 'Firmware',
      total_area: 'Total Cleaned Area',
      total_time: 'Total Cleaning Time',
      total_cleans: 'Total Cleanings',
      wifi_ssid: 'Wi-Fi Network',
      wifi_signal: 'Signal Strength',
      ip_address: 'IP Address',
    },
    map_management: {
      title: 'Map Management',
      description: 'Select which map to use for cleaning.',
      no_maps: 'No maps available',
    },
    quick_settings: {
      title: 'Quick Settings',
      child_lock: 'Child Lock',
      child_lock_desc: 'Disable physical buttons on device',
      carpet_boost: 'Carpet Boost',
      carpet_boost_desc: 'Increase suction on carpets',
      obstacle_avoidance: 'Obstacle Avoidance',
      obstacle_avoidance_desc: 'Avoid obstacles during cleaning',
      auto_dust_collecting: 'Auto Empty',
      auto_dust_collecting_desc: 'Automatically empty dustbin',
      auto_drying: 'Auto Drying',
      auto_drying_desc: 'Dry mop pad after cleaning',
      dnd: 'Do Not Disturb',
      dnd_desc: 'Quiet hours with reduced activity',
    },
    volume: {
      title: 'Volume & Sound',
      test_sound: 'Locate',
      muted: 'Muted',
    },
    carpet: {
      title: 'Carpet Settings',
      carpet_boost: 'Carpet Boost',
      carpet_boost_desc: 'Increase suction power on carpets',
      carpet_recognition: 'Carpet Recognition',
      carpet_recognition_desc: 'Automatically detect carpets',
      carpet_avoidance: 'Carpet Avoidance',
      carpet_avoidance_desc: 'Avoid carpets while mopping',
      sensitivity: 'Carpet Sensitivity',
      sensitivity_desc: 'Detection sensitivity level',
      sensitivity_low: 'Low',
      sensitivity_medium: 'Medium',
      sensitivity_high: 'High',
    },
    ai_detection: {
      title: 'AI & Detection',
      obstacle_avoidance: 'Obstacle Avoidance',
      obstacle_avoidance_desc: 'Use sensors to avoid obstacles',
      ai_obstacle_detection: 'AI Obstacle Detection',
      ai_obstacle_detection_desc: 'Use AI to identify and avoid obstacles',
      ai_obstacle_image_upload: 'Obstacle Image Upload',
      ai_obstacle_image_upload_desc: 'Upload obstacle images for analysis',
      ai_pet_detection: 'Pet Detection',
      ai_pet_detection_desc: 'Detect and avoid pets',
      ai_human_detection: 'Human Detection',
      ai_human_detection_desc: 'Detect and avoid humans',
      ai_furniture_detection: 'Furniture Detection',
      ai_furniture_detection_desc: 'Detect and navigate around furniture',
      ai_fluid_detection: 'Fluid Detection',
      ai_fluid_detection_desc: 'Detect and avoid liquids',
      stain_avoidance: 'Stain Avoidance',
      stain_avoidance_desc: 'Avoid detected stains',
      collision_avoidance: 'Collision Avoidance',
      collision_avoidance_desc: 'Prevent collisions with objects',
      fill_light: 'Fill Light',
      fill_light_desc: 'Use fill light for better detection',
    },
  },
};

export type Translation = typeof en;
