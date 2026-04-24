import type { Translation } from './en';

export const nl: Translation = {
  // Kamer Kiezer
  room_selector: {
    title: 'Kamers Selecteren',
    selected_count: '{{count}} geselecteerd',
  },

  // Kaart Kiezer
  map_selector: {
    unknown: 'Onbekende kaart',
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
    lock_map: 'Kaart vergrendelen',
    unlock_map: 'Kaart ontgrendelen',
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
    stop_and_dock: 'Stop & Docken',
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
    stopping_and_docking: 'Stoppen en terugkeren naar dock',
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
    repeats_tooltip: 'Reinigingspassen',
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

  // Aanpassen Schoonmaakmodus
  customize: {
    title: 'Aanpassen',
    description: 'Stel gepersonaliseerde zuig- en dweilvoorkeuren in voor elk gebied.',
    set_button: 'Instellen',
    vacuum: 'Zuigen',
    mop: 'Dweilen',
    vac_and_mop: 'Zuigen & dweilen',
    cycles: 'Cycli',
    apply_to_all: 'Toepassen op alle kamers',
    click_room_hint: 'Klik op een gebied om de modus te wijzigen.',
    intelligent_recommendation: 'Intelligente aanbeveling',
    select_room: 'Selecteer kamer',
    settings_for: '{{room}} instellingen',
    no_rooms: 'Geen kamers beschikbaar',
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

  // Cleaning Routes
  cleaning_routes: {
    quick: 'Snel',
    standard: 'Standaard',
    intensive: 'Intensief',
    deep: 'Diep',
  },

  // Fouten
  errors: {
    entity_not_found: 'Entiteit niet gevonden: {{entity}}',
    failed_to_load: 'Kan entiteitsgegevens niet laden',
    service_call_failed: 'Kan opdracht niet naar stofzuiger sturen',
    entity_unavailable: 'Stofzuiger niet beschikbaar',
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
      clean_carpets_first: 'Tapijten eerst reinigen',
      clean_carpets_first_desc: 'Tapijten stofzuigen voor het dweilen',
      carpet_boost: 'Tapijtboost',
      carpet_boost_desc: 'Zuigkracht verhogen op tapijt',
      intensive_cleaning: 'Intensieve reiniging',
      intensive_cleaning_desc: 'Dieptereiniging met extra passages',
      side_brush_rotate: 'Zijborstel draaien',
      side_brush_rotate_desc: 'Zijborstel draaien op tapijten',
      sensitivity: 'Tapijtgevoeligheid',
      sensitivity_desc: 'Gevoeligheidsniveau voor detectie',
      sensitivity_low: 'Laag',
      sensitivity_medium: 'Gemiddeld',
      sensitivity_high: 'Hoog',
      cleaning_mode: 'Tapijtreiniging',
      cleaning_mode_desc: 'Hoe tapijten behandelen tijdens het reinigen',
      mode_vacuum: 'Stofzuigen',
      mode_vacuum_and_mop: 'Zuig & Dweil',
      mode_avoidance: 'Vermijden',
      mode_ignore: 'Negeren',
      vacuum_mode: 'Stofzuigmodus',
      vacuum_adaptation: 'Dweil optillen',
      vacuum_remove_mop: 'Dweil verwijderen',
    },
    floor: {
      title: 'Vloerinstellingen',
      collision_avoidance: 'Botsing vermijden',
      collision_avoidance_desc: 'Vertragen bij muren en meubels',
      auto_mount_mop: 'Auto dweil monteren',
      auto_mount_mop_desc: 'Automatisch dweilpad bevestigen wanneer nodig',
      auto_recleaning: 'Auto her-reiniging',
      auto_recleaning_desc: 'Automatisch gemiste gebieden opnieuw reinigen',
      recleaning_off: 'Uit',
      recleaning_in_deep_mode: 'In diepe modus',
      recleaning_in_all_modes: 'In alle modi',
    },
    edge_corner: {
      title: 'Randen & Hoeken',
      side_reach: 'Zijbereik',
      side_reach_desc: 'Zijborstel uitschuiven voor randen',
      mop_extend: 'Dweil uitschuiven',
      mop_extend_desc: 'Dweil uitschuiven voor randen en hoeken',
      gap_cleaning: 'Spleetreiniging',
      gap_cleaning_desc: 'Smalle spleten tussen meubels reinigen',
      mopping_under: 'Dweilen onder meubels',
      mopping_under_desc: 'Dweil uitschuiven onder lage meubels',
      extend_frequency: 'Uitschuiffrequentie',
      extend_frequency_desc: 'Hoe vaak dweil uitschuiven voor randenreiniging',
      frequency_standard: 'Standaard',
      frequency_intelligent: 'Intelligent',
      frequency_high: 'Hoog',
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
    station_controls: {
      title: 'Stationbediening',
      self_clean: 'Zelfreiniging',
      self_clean_desc: 'Start de dweilwascyclus',
      manual_drying: 'Handmatig drogen',
      manual_drying_desc: 'Start de dweildroogcyclus',
      water_tank_draining: 'Watertank legen',
      water_tank_draining_desc: 'Vuil water uit de tank laten lopen',
      base_station_cleaning: 'Station reinigen',
      base_station_cleaning_desc: 'Reinig het basisstation',
      empty_water_tank: 'Watertank leegmaken',
      empty_water_tank_desc: 'De wateropvangtank leegmaken',
    },
  },
};
