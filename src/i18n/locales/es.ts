import type { Translation } from './en';

export const es: Translation = {
  // Room Selector
  room_selector: {
    title: 'Seleccionar Habitaciones',
    selected_count: '{{count}} seleccionadas',
  },

  // Map Selector
  map_selector: {
    unknown: 'Mapa desconocido',
  },

  // Vacuum Map
  vacuum_map: {
    no_map: 'No hay mapa disponible',
    looking_for: 'Buscando: {{entity}}',
    room_overlay: 'Haga clic en los números de las habitaciones para seleccionarlas para la limpieza',
    zone_overlay_create: 'Haga clic en el mapa para colocar una zona de limpieza',
    zone_overlay_resize: 'Arrastre las esquinas para cambiar el tamaño, haga clic en otro lugar para reposicionar',
    clear_zone: 'Borrar zona',
    switch_to_list: 'Cambiar a vista de lista',
    switch_to_map: 'Cambiar a vista de mapa',
    room_list_overlay: 'Toque las habitaciones para seleccionarlas para la limpieza',
    no_rooms: 'No hay habitaciones disponibles',
    zoom_in: 'Acercar',
    zoom_out: 'Alejar',
    zoom_reset: 'Restablecer zoom',
    lock_map: 'Bloquear mapa',
    unlock_map: 'Desbloquear mapa',
  },

  // Mode Tabs
  modes: {
    room: 'Habitaciones',
    all: 'Todo',
    zone: 'Zona',
  },

  // Action Buttons
  actions: {
    clean: 'Limpiar',
    clean_all: 'Limpiar Todo',
    clean_rooms: 'Limpiar {{count}} Habitación',
    clean_rooms_plural: 'Limpiar {{count}} Habitaciones',
    select_rooms: 'Seleccionar Habitaciones',
    zone_clean: 'Limpiar Zona',
    pause: 'Pausar',
    resume: 'Reanudar',
    stop: 'Detener',
    stop_and_dock: 'Detener y volver',
    dock: 'Base',
  },

  // Toast Messages
  toast: {
    selected_room: '{{name}} seleccionada',
    deselected_room: '{{name}} deseleccionada',
    paused: 'Limpieza pausada',
    stopped: 'Limpieza detenida',
    docked: 'Volviendo a la base',
    cleaning_started: 'Limpieza iniciada',
    resuming: 'Reanudando limpieza',
    starting_full_clean: 'Iniciando limpieza de toda la casa',
    pausing_vacuum: 'Pausando aspirador',
    stopping_vacuum: 'Deteniendo aspirador',
    stopping_and_docking: 'Deteniendo y volviendo a la base',
    vacuum_docking: 'Aspirador volviendo a la base',
    starting_room_clean: 'Iniciando limpieza para {{count}} habitación seleccionada',
    starting_room_clean_plural: 'Iniciando limpieza para {{count}} habitaciones seleccionadas',
    starting_zone_clean: 'Iniciando limpieza de zona',
    select_rooms_first: 'Por favor, seleccione primero las habitaciones a limpiar',
    cannot_determine_map: 'No se pueden determinar las dimensiones del mapa',
    select_zone_first: 'Por favor, seleccione una zona en el mapa',
  },

  // Room Selection Display
  room_display: {
    selected_rooms: 'Habitaciones seleccionadas:',
    selected_label: 'Seleccionadas:',
  },

  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: 'Personalizado: ',
    prefix_cleangenius: 'CleanGenius: ',
    view_shortcuts: 'Ver accesos directos',
    repeats_tooltip: 'Pasadas de limpieza',
    vac_and_mop: 'Aspirar y Trapear',
    mop_after_vac: 'Trapear después de aspirar',
    vacuum: 'Aspirar',
    mop: 'Trapear',
  },

  // Cleaning Mode Modal
  cleaning_mode: {
    title: 'Modo de limpieza',
    clean_genius: 'CleanGenius',
    custom: 'Personalizado',
  },

  // Shortcuts Modal
  shortcuts: {
    title: 'Accesos directos',
    no_shortcuts: 'No hay accesos directos disponibles',
    create_hint:
      'Cree accesos directos en la aplicación Dreame para iniciar rápidamente sus rutinas de limpieza favoritas',
  },

  // Custom Mode
  custom_mode: {
    cleaning_mode_title: 'Modo de limpieza',
    suction_power_title: 'Potencia de succión',
    max_plus_description: 'La potencia de succión se incrementará al máximo nivel, es un modo de un solo uso.',
    wetness_title: 'Humedad',
    slightly_dry: 'Ligeramente seco',
    moist: 'Húmedo',
    wet: 'Mojado',
    mop_washing_frequency_title: 'Frecuencia de lavado de mopa',
    route_title: 'Ruta',
  },

  // Customize Cleaning Mode
  customize: {
    title: 'Personalizar',
    description: 'Establece preferencias personalizadas de succión y fregado para cada área.',
    set_button: 'Configurar',
    vacuum: 'Aspirar',
    mop: 'Fregar',
    vac_and_mop: 'Aspirar y fregar',
    cycles: 'Ciclos',
    apply_to_all: 'Aplicar a todas las habitaciones',
    click_room_hint: 'Haz clic en un área para cambiar el modo.',
    intelligent_recommendation: 'Recomendación inteligente',
    select_room: 'Seleccionar habitación',
    settings_for: 'Ajustes de {{room}}',
    no_rooms: 'No hay habitaciones disponibles',
  },

  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: 'Modo de limpieza',
    deep_cleaning: 'Limpieza profunda',
  },

  // Header
  header: {
    battery: 'Batería',
    status: 'Estado',
    area: 'Área',
    time: 'Tiempo',
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
    quiet: 'Silencioso',
    standard: 'Estándar',
    strong: 'Turbo',
    turbo: 'Máximo',
  },

  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: 'Por habitación',
    by_area: 'Por área',
    by_time: 'Por tiempo',
  },

  // Cleaning Routes
  cleaning_routes: {
    quick: 'Rápido',
    standard: 'Estándar',
    intensive: 'Intensivo',
    deep: 'Profundo',
  },

  // Errors
  errors: {
    entity_not_found: 'Entidad no encontrada: {{entity}}',
    failed_to_load: 'Error al cargar datos de la entidad',
    service_call_failed: 'Error al enviar comando a la aspiradora',
    entity_unavailable: 'Aspiradora no disponible',
  },

  // Settings Panel
  settings: {
    title: 'Ajustes',
    consumables: {
      title: 'Consumibles',
      main_brush: 'Cepillo principal',
      side_brush: 'Cepillo lateral',
      filter: 'Filtro',
      sensor: 'Sensor',
      remaining: 'restante',
      reset: 'Restablecer',
    },
    device_info: {
      title: 'Información del dispositivo',
      firmware: 'Firmware',
      total_area: 'Área total limpiada',
      total_time: 'Tiempo total de limpieza',
      total_cleans: 'Limpiezas totales',
      wifi_ssid: 'Red Wi-Fi',
      wifi_signal: 'Intensidad de señal',
      ip_address: 'Dirección IP',
    },
    map_management: {
      title: 'Gestión de mapas',
      description: 'Seleccione qué mapa usar para la limpieza.',
      no_maps: 'No hay mapas disponibles',
    },
    quick_settings: {
      title: 'Ajustes rápidos',
      child_lock: 'Bloqueo infantil',
      child_lock_desc: 'Desactivar botones físicos del dispositivo',
      carpet_boost: 'Potencia en alfombras',
      carpet_boost_desc: 'Aumentar succión en alfombras',
      obstacle_avoidance: 'Evitación de obstáculos',
      obstacle_avoidance_desc: 'Evitar obstáculos durante la limpieza',
      auto_dust_collecting: 'Vaciado automático',
      auto_dust_collecting_desc: 'Vaciar automáticamente el depósito de polvo',
      auto_drying: 'Secado automático',
      auto_drying_desc: 'Secar la mopa después de la limpieza',
      dnd: 'No molestar',
      dnd_desc: 'Horas de silencio con actividad reducida',
    },
    volume: {
      title: 'Volumen y sonido',
      test_sound: 'Localizar',
      muted: 'Silenciado',
    },
    carpet: {
      title: 'Ajustes de alfombras',
      carpet_boost: 'Potencia en alfombras',
      carpet_boost_desc: 'Aumentar potencia de succión en alfombras',
      carpet_recognition: 'Reconocimiento de alfombras',
      carpet_recognition_desc: 'Detectar alfombras automáticamente',
      carpet_avoidance: 'Evitación de alfombras',
      carpet_avoidance_desc: 'Evitar alfombras mientras trapea',
      sensitivity: 'Sensibilidad de alfombras',
      sensitivity_desc: 'Nivel de sensibilidad de detección',
      sensitivity_low: 'Baja',
      sensitivity_medium: 'Media',
      sensitivity_high: 'Alta',
    },
    ai_detection: {
      title: 'IA y detección',
      obstacle_avoidance: 'Evitación de obstáculos',
      obstacle_avoidance_desc: 'Usar sensores para evitar obstáculos',
      ai_obstacle_detection: 'Detección de obstáculos con IA',
      ai_obstacle_detection_desc: 'Usar IA para identificar y evitar obstáculos',
      ai_obstacle_image_upload: 'Carga de imágenes de obstáculos',
      ai_obstacle_image_upload_desc: 'Cargar imágenes de obstáculos para análisis',
      ai_pet_detection: 'Detección de mascotas',
      ai_pet_detection_desc: 'Detectar y evitar mascotas',
      ai_human_detection: 'Detección de personas',
      ai_human_detection_desc: 'Detectar y evitar personas',
      ai_furniture_detection: 'Detección de muebles',
      ai_furniture_detection_desc: 'Detectar y navegar alrededor de muebles',
      ai_fluid_detection: 'Detección de líquidos',
      ai_fluid_detection_desc: 'Detectar y evitar líquidos',
      stain_avoidance: 'Evitación de manchas',
      stain_avoidance_desc: 'Evitar manchas detectadas',
      collision_avoidance: 'Evitación de colisiones',
      collision_avoidance_desc: 'Prevenir colisiones con objetos',
      fill_light: 'Luz de relleno',
      fill_light_desc: 'Usar luz de relleno para mejor detección',
    },
    station_controls: {
      title: 'Controles de estación',
      self_clean: 'Autolimpieza',
      self_clean_desc: 'Iniciar ciclo de lavado de mopa',
      manual_drying: 'Secado manual',
      manual_drying_desc: 'Iniciar ciclo de secado de mopa',
      water_tank_draining: 'Vaciar tanque',
      water_tank_draining_desc: 'Drenar agua sucia del tanque',
      base_station_cleaning: 'Limpiar estación',
      base_station_cleaning_desc: 'Limpiar la estación base',
      empty_water_tank: 'Vaciar tanque de agua',
      empty_water_tank_desc: 'Vaciar el tanque de recolección de agua',
    },
  },
};
