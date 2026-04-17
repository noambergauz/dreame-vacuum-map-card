import type { Translation } from './en';

export const nl: Translation = {
  // Kamer Kiezer
  room_selector: {
    title: 'Kamers Selecteren',
    selected_count: '{{count}} geselecteerd',
  },

  // Stofzuiger Kaart
  vacuum_map: {
    no_map: 'Geen kaart beschikbaar',
    looking_for: 'Zoeken naar: {{entity}}',
    room_overlay: 'Klik op kamernummers om kamers te selecteren voor reiniging',
    zone_overlay_create: 'Klik op de kaart om een schoonmaakzone te plaatsen',
    zone_overlay_resize: 'Sleep de hoeken om aan te passen, klik elders om te verplaatsen',
    clear_zone: 'Zone wissen',
    switch_to_list: 'Naar lijstweergave',
    switch_to_map: 'Naar kaartweergave',
    room_list_overlay: 'Tik op kamers om te selecteren voor reiniging',
    no_rooms: 'Geen kamers beschikbaar',
    zoom_in: 'Inzoomen',
    zoom_out: 'Uitzoomen',
    zoom_reset: 'Zoom resetten',
  },

  // Modus Tabbladen
  modes: {
    room: 'Kamer',
    all: 'Alles',
    zone: 'Zone',
  },

  // Actieknoppen
  actions: {
    clean: 'Schoonmaken',
    clean_all: 'Alles Schoonmaken',
    clean_rooms: 'Schoonmaken ({{count}} kamer)',
    clean_rooms_plural: 'Schoonmaken ({{count}} kamers)',
    select_rooms: 'Kamers Selecteren',
    zone_clean: 'Zone Reinigen',
    pause: 'Pauze',
    resume: 'Hervatten',
    stop: 'Stop',
    dock: 'Docken',
  },

  // Meldingen (Toasts)
  toast: {
    selected_room: '{{name}} geselecteerd',
    deselected_room: '{{name}} gedeselecteerd',
    paused: 'Schoonmaken gepauzeerd',
    stopped: 'Schoonmaken gestopt',
    docked: 'Keert terug naar dock',
    cleaning_started: 'Schoonmaken gestart',
    resuming: 'Schoonmaken wordt hervat',
    starting_full_clean: 'Start volledige reiniging van het huis',
    pausing_vacuum: 'Stofzuiger pauzeren',
    stopping_vacuum: 'Stofzuiger stoppen',
    vacuum_docking: 'Stofzuiger keert terug naar dock',
    starting_room_clean: 'Start reinigen van {{count}} geselecteerde kamer',
    starting_room_clean_plural: 'Start reinigen van {{count}} geselecteerde kamers',
    starting_zone_clean: 'Zone-reiniging gestart',
    select_rooms_first: 'Selecteer eerst de kamers die je wilt schoonmaken',
    cannot_determine_map: 'Kan afmetingen van de kaart niet bepalen',
    select_zone_first: 'Selecteer eerst een zone op de kaart',
  },

  // Kamer Selectie Weergave
  room_display: {
    selected_rooms: 'Geselecteerde Kamers:',
    selected_label: 'Geselecteerd:',
  },

  // Schoonmaakmodus Knop
  cleaning_mode_button: {
    prefix_custom: 'Aangepast: ',
    prefix_cleangenius: 'CleanGenius: ',
    view_shortcuts: 'Snelkoppelingen bekijken',
    vac_and_mop: 'Stofzuigen & Dweilen',
    mop_after_vac: 'Dweilen na Stofzuigen',
    vacuum: 'Stofzuigen',
    mop: 'Dweilen',
  },

  // Schoonmaakmodus Modal
  cleaning_mode: {
    title: 'Schoonmaakmodus',
    clean_genius: 'CleanGenius',
    custom: 'Aangepast',
  },

  // Snelkoppelingen Modal
  shortcuts: {
    title: 'Snelkoppelingen',
    no_shortcuts: 'Geen snelkoppelingen beschikbaar',
    create_hint: 'Maak snelkoppelingen aan in de Dreame app om snel je favoriete routines te starten',
  },

  // Aangepaste Modus
  custom_mode: {
    cleaning_mode_title: 'Schoonmaakmodus',
    suction_power_title: 'Zuigkracht',
    max_plus_description: 'De zuigkracht wordt verhoogd naar het hoogste niveau (eenmalige modus).',
    wetness_title: 'Vochtigheid',
    slightly_dry: 'Licht droog',
    moist: 'Vochtig',
    wet: 'Nat',
    mop_washing_frequency_title: 'Dweil-wasfrequentie',
    route_title: 'Route',
  },

  // CleanGenius Modus
  cleangenius_mode: {
    cleaning_mode_title: 'Schoonmaakmodus',
    deep_cleaning: 'Grondige Reiniging',
  },

  // Header
  header: {
    battery: 'Batterij',
    status: 'Status',
    area: 'Oppervlak',
    time: 'Tijd',
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
    quiet: 'Stil',
    standard: 'Standaard',
    strong: 'Turbo',
    turbo: 'Max',
  },

  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: 'Per kamer',
    by_area: 'Per oppervlak',
    by_time: 'Per tijd',
  },

  // Fouten
  errors: {
    entity_not_found: 'Entiteit niet gevonden: {{entity}}',
    failed_to_load: 'Laden van entiteitsgegevens mislukt',
  },

  // Instellingenpaneel
  settings: {
    title: 'Instellingen',
    consumables: {
      title: 'Onderdelen & Verbruik',
      main_brush: 'Hoofdborstel',
      side_brush: 'Zijborstel',
      filter: 'Filter',
      sensor: 'Sensor',
      remaining: 'resterend',
      reset: 'Resetten',
    },
    device_info: {
      title: 'Apparaatinfo',
      firmware: 'Firmware',
      total_area: 'Totaal Gereinigd Oppervlak',
      total_time: 'Totale Schoonmaaktijd',
      total_cleans: 'Totaal Aantal Reinigingen',
      wifi_ssid: 'Wifi-netwerk',
      wifi_signal: 'Signaalsterkte',
      ip_address: 'IP-adres',
    },
    map_management: {
      title: 'Kaartbeheer',
      description: 'Selecteer welke kaart je wilt gebruiken.',
      no_maps: 'Geen kaarten beschikbaar',
    },
    quick_settings: {
      title: 'Snelle Instellingen',
      child_lock: 'Kinderslot',
      child_lock_desc: 'Fysieke knoppen op het apparaat uitschakelen',
      carpet_boost: 'Tapijtboost',
      carpet_boost_desc: 'Zuigkracht verhogen op tapijt',
      obstacle_avoidance: 'Obstakelvermijding',
      obstacle_avoidance_desc: 'Obstakels vermijden tijdens het reinigen',
      auto_dust_collecting: 'Automatisch legen',
      auto_dust_collecting_desc: 'Stofbak automatisch legen',
      auto_drying: 'Automatisch drogen',
      auto_drying_desc: 'Dweilpad drogen na reiniging',
      dnd: 'Niet Storen',
      dnd_desc: 'Stille uren met beperkte activiteit',
    },
    volume: {
      title: 'Volume & Geluid',
      test_sound: 'Lokaliseren',
      muted: 'Gedempt',
    },
    carpet: {
      title: 'Tapijtinstellingen',
      carpet_boost: 'Tapijtboost',
      carpet_boost_desc: 'Zuigkracht verhogen op tapijt',
      carpet_recognition: 'Tapijtherkenning',
      carpet_recognition_desc: 'Automatisch tapijt detecteren',
      carpet_avoidance: 'Tapijt vermijden',
      carpet_avoidance_desc: 'Tapijten vermijden tijdens het dweilen',
      sensitivity: 'Tapijtgevoeligheid',
      sensitivity_desc: 'Gevoeligheidsniveau voor detectie',
      sensitivity_low: 'Laag',
      sensitivity_medium: 'Gemiddeld',
      sensitivity_high: 'Hoog',
    },
    ai_detection: {
      title: 'AI & Detectie',
      obstacle_avoidance: 'Obstakelvermijding',
      obstacle_avoidance_desc: 'Sensoren gebruiken om obstakels te vermijden',
      ai_obstacle_detection: 'AI-obstakeldetectie',
      ai_obstacle_detection_desc: 'AI gebruiken om obstakels te herkennen en vermijden',
      ai_obstacle_image_upload: "Obstakelfoto's uploaden",
      ai_obstacle_image_upload_desc: "Foto's van obstakels uploaden voor analyse",
      ai_pet_detection: 'Huisdierdetectie',
      ai_pet_detection_desc: 'Huisdieren detecteren en vermijden',
      ai_human_detection: 'Personendetectie',
      ai_human_detection_desc: 'Personen detecteren en vermijden',
      ai_furniture_detection: 'Meubeldetectie',
      ai_furniture_detection_desc: 'Meubels detecteren en eromheen navigeren',
      ai_fluid_detection: 'Vloeistofdetectie',
      ai_fluid_detection_desc: 'Vloeistoffen detecteren en vermijden',
      stain_avoidance: 'Vlekvermijding',
      stain_avoidance_desc: 'Gedetecteerde vlekken vermijden',
      collision_avoidance: 'Botsvermijding',
      collision_avoidance_desc: 'Botsingen met objecten voorkomen',
      fill_light: 'Bijverlichting',
      fill_light_desc: 'Bijverlichting gebruiken voor betere detectie',
    },
  },
};
