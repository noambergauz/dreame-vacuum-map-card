import type { Translation } from './en';

export const de: Translation = {
  // Room Selector
  room_selector: {
    title: 'Räume auswählen',
    selected_count: '{{count}} ausgewählt',
  },

  // Vacuum Map
  vacuum_map: {
    no_map: 'Keine Karte verfügbar',
    looking_for: 'Suche nach: {{entity}}',
    room_overlay: 'Klicken Sie auf Raumnummern, um Räume zum Reinigen auszuwählen',
    zone_overlay_create: 'Klicken Sie auf die Karte, um eine Reinigungszone zu platzieren',
    zone_overlay_resize:
      'Ziehen Sie an den Ecken, um die Größe zu ändern, oder klicken Sie woanders, um neu zu positionieren',
    clear_zone: 'Zone löschen',
    switch_to_list: 'Zur Listenansicht wechseln',
    switch_to_map: 'Zur Kartenansicht wechseln',
    room_list_overlay: 'Räume antippen, um sie für die Reinigung auszuwählen',
    no_rooms: 'Keine Räume verfügbar',
    zoom_in: 'Vergrößern',
    zoom_out: 'Verkleinern',
    zoom_reset: 'Zoom zurücksetzen',
  },

  // Mode Tabs
  modes: {
    room: 'Raum',
    all: 'Alle',
    zone: 'Zone',
  },

  // Action Buttons
  actions: {
    clean: 'Reinigen',
    clean_all: 'Alles reinigen',
    clean_rooms: '{{count}} Raum reinigen',
    clean_rooms_plural: '{{count}} Räume reinigen',
    select_rooms: 'Räume auswählen',
    zone_clean: 'Zone reinigen',
    pause: 'Pause',
    resume: 'Fortsetzen',
    stop: 'Stopp',
    dock: 'Andocken',
  },

  // Toast Messages
  toast: {
    selected_room: '{{name}} ausgewählt',
    deselected_room: '{{name}} abgewählt',
    paused: 'Reinigung pausiert',
    stopped: 'Reinigung gestoppt',
    docked: 'Kehrt zur Station zurück',
    cleaning_started: 'Reinigung gestartet',
    resuming: 'Reinigung wird fortgesetzt',
    starting_full_clean: 'Vollständige Hausreinigung gestartet',
    pausing_vacuum: 'Saugroboter wird pausiert',
    stopping_vacuum: 'Saugroboter wird gestoppt',
    vacuum_docking: 'Saugroboter kehrt zur Station zurück',
    starting_room_clean: 'Reinigung für {{count}} ausgewählten Raum wird gestartet',
    starting_room_clean_plural: 'Reinigung für {{count}} ausgewählte Räume wird gestartet',
    starting_zone_clean: 'Zonenreinigung wird gestartet',
    select_rooms_first: 'Bitte wählen Sie zuerst Räume zum Reinigen aus',
    cannot_determine_map: 'Kartenabmessungen können nicht ermittelt werden',
    select_zone_first: 'Bitte wählen Sie zuerst eine Zone auf der Karte aus',
  },

  // Room Selection Display
  room_display: {
    selected_rooms: 'Ausgewählte Räume:',
    selected_label: 'Ausgewählt:',
  },

  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: 'Benutzerdefiniert: ',
    prefix_cleangenius: 'CleanGenius: ',
    view_shortcuts: 'Verknüpfungen anzeigen',
    vac_and_mop: 'Saugen & Wischen',
    mop_after_vac: 'Wischen nach Saugen',
    vacuum: 'Saugen',
    mop: 'Wischen',
  },

  // Cleaning Mode Modal
  cleaning_mode: {
    title: 'Reinigungsmodus',
    clean_genius: 'CleanGenius',
    custom: 'Benutzerdefiniert',
  },

  // Shortcuts Modal
  shortcuts: {
    title: 'Verknüpfungen',
    no_shortcuts: 'Keine Verknüpfungen verfügbar',
    create_hint:
      'Erstellen Sie Verknüpfungen in der Dreame-App, um Ihre bevorzugten Reinigungsroutinen schnell zu starten',
  },

  // Custom Mode
  custom_mode: {
    cleaning_mode_title: 'Reinigungsmodus',
    suction_power_title: 'Saugleistung',
    max_plus_description: 'Die Saugkraft wird auf die höchste Stufe erhöht. Dies ist ein Einmal-Modus.',
    wetness_title: 'Feuchtigkeit',
    slightly_dry: 'Leicht trocken',
    moist: 'Feucht',
    wet: 'Nass',
    mop_washing_frequency_title: 'Wischmopp-Waschfrequenz',
    route_title: 'Route',
  },

  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: 'Reinigungsmodus',
    deep_cleaning: 'Tiefenreinigung',
  },

  // Header
  header: {
    battery: 'Batterie',
    status: 'Status',
    area: 'Fläche',
    time: 'Zeit',
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
    quiet: 'Leise',
    standard: 'Standard',
    strong: 'Turbo',
    turbo: 'Max',
  },

  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: 'Nach Raum',
    by_area: 'Nach Fläche',
    by_time: 'Nach Zeit',
  },

  // Errors
  errors: {
    entity_not_found: 'Entität nicht gefunden: {{entity}}',
    failed_to_load: 'Entitätsdaten konnten nicht geladen werden',
  },

  // Settings Panel
  settings: {
    title: 'Einstellungen',
    consumables: {
      title: 'Verbrauchsmaterialien',
      main_brush: 'Hauptbürste',
      side_brush: 'Seitenbürste',
      filter: 'Filter',
      sensor: 'Sensor',
      remaining: 'verbleibend',
      reset: 'Zurücksetzen',
    },
    device_info: {
      title: 'Geräteinformationen',
      firmware: 'Firmware',
      total_area: 'Gesamtreinigungsfläche',
      total_time: 'Gesamtreinigungszeit',
      total_cleans: 'Gesamte Reinigungen',
      wifi_ssid: 'WLAN-Netzwerk',
      wifi_signal: 'Signalstärke',
      ip_address: 'IP-Adresse',
    },
    map_management: {
      title: 'Kartenverwaltung',
      description: 'Wählen Sie die Karte für die Reinigung aus.',
      no_maps: 'Keine Karten verfügbar',
    },
    quick_settings: {
      title: 'Schnelleinstellungen',
      child_lock: 'Kindersicherung',
      child_lock_desc: 'Tasten am Gerät deaktivieren',
      carpet_boost: 'Teppich-Boost',
      carpet_boost_desc: 'Saugkraft auf Teppichen erhöhen',
      obstacle_avoidance: 'Hindernisvermeidung',
      obstacle_avoidance_desc: 'Hindernisse beim Reinigen umfahren',
      auto_dust_collecting: 'Auto-Entleerung',
      auto_dust_collecting_desc: 'Staubbehälter automatisch leeren',
      auto_drying: 'Auto-Trocknung',
      auto_drying_desc: 'Wischmopp nach Reinigung trocknen',
      dnd: 'Nicht stören',
      dnd_desc: 'Ruhezeiten mit reduzierter Aktivität',
    },
    volume: {
      title: 'Lautstärke & Ton',
      test_sound: 'Finden',
      muted: 'Stumm',
    },
    carpet: {
      title: 'Teppich-Einstellungen',
      carpet_boost: 'Teppich-Boost',
      carpet_boost_desc: 'Saugkraft auf Teppichen erhöhen',
      carpet_recognition: 'Teppicherkennung',
      carpet_recognition_desc: 'Teppiche automatisch erkennen',
      carpet_avoidance: 'Teppichvermeidung',
      carpet_avoidance_desc: 'Teppiche beim Wischen vermeiden',
      sensitivity: 'Teppich-Empfindlichkeit',
      sensitivity_desc: 'Erkennungsempfindlichkeit',
      sensitivity_low: 'Niedrig',
      sensitivity_medium: 'Mittel',
      sensitivity_high: 'Hoch',
    },
    ai_detection: {
      title: 'KI & Erkennung',
      obstacle_avoidance: 'Hindernisvermeidung',
      obstacle_avoidance_desc: 'Sensoren zur Hindernisvermeidung nutzen',
      ai_obstacle_detection: 'KI-Hinderniserkennung',
      ai_obstacle_detection_desc: 'KI zur Erkennung und Vermeidung von Hindernissen nutzen',
      ai_obstacle_image_upload: 'Hindernis-Bilder hochladen',
      ai_obstacle_image_upload_desc: 'Hindernisbilder zur Analyse hochladen',
      ai_pet_detection: 'Haustiererkennung',
      ai_pet_detection_desc: 'Haustiere erkennen und vermeiden',
      ai_human_detection: 'Personenerkennung',
      ai_human_detection_desc: 'Personen erkennen und vermeiden',
      ai_furniture_detection: 'Möbelerkennung',
      ai_furniture_detection_desc: 'Möbel erkennen und umfahren',
      ai_fluid_detection: 'Flüssigkeitserkennung',
      ai_fluid_detection_desc: 'Flüssigkeiten erkennen und vermeiden',
      stain_avoidance: 'Fleckenvermeidung',
      stain_avoidance_desc: 'Erkannte Flecken vermeiden',
      collision_avoidance: 'Kollisionsvermeidung',
      collision_avoidance_desc: 'Kollisionen mit Objekten verhindern',
      fill_light: 'Zusatzlicht',
      fill_light_desc: 'Zusatzlicht für bessere Erkennung nutzen',
    },
  },
};
