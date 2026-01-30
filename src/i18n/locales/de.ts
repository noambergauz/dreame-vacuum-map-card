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
    zone_overlay_resize: 'Ziehen Sie an den Ecken, um die Größe zu ändern, oder klicken Sie woanders, um neu zu positionieren',
    clear_zone: 'Zone löschen',
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
    create_hint: 'Erstellen Sie Verknüpfungen in der Dreame-App, um Ihre bevorzugten Reinigungsroutinen schnell zu starten',
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
  },

  // Errors
  errors: {
    entity_not_found: 'Entität nicht gefunden: {{entity}}',
    failed_to_load: 'Entitätsdaten konnten nicht geladen werden',
  },
};
