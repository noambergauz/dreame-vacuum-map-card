import type { Translation } from './en';

export const it: Translation = {
  // Room Selector
  room_selector: {
    title: 'Seleziona stanze',
    selected_count: '{{count}} selezionate',
  },

  // Vacuum Map
  vacuum_map: {
    no_map: 'Nessuna mappa disponibile',
    looking_for: 'Ricerca di: {{entity}}',
    room_overlay: 'Clicca sui numeri delle stanze per selezionarle per la pulizia',
    zone_overlay_create: 'Clicca sulla mappa per posizionare una zona di pulizia',
    zone_overlay_resize: 'Trascina gli angoli per ridimensionare, clicca altrove per riposizionare',
    clear_zone: 'Cancella zona',
    switch_to_list: 'Passa alla vista elenco',
    switch_to_map: 'Passa alla vista mappa',
    room_list_overlay: 'Tocca le stanze per selezionarle per la pulizia',
    no_rooms: 'Nessuna stanza disponibile',
    zoom_in: 'Ingrandisci',
    zoom_out: 'Riduci',
    zoom_reset: 'Reimposta zoom',
  },

  // Mode Tabs
  modes: {
    room: 'Stanza',
    all: 'Tutto',
    zone: 'Zona',
  },

  // Action Buttons
  actions: {
    clean: 'Pulisci',
    clean_all: 'Pulisci tutto',
    clean_rooms: 'Pulisci {{count}} stanza',
    clean_rooms_plural: 'Pulisci {{count}} stanze',
    select_rooms: 'Seleziona stanze',
    zone_clean: 'Pulizia zona',
    pause: 'Pausa',
    resume: 'Riprendi',
    stop: 'Stop',
    dock: 'Rientra alla base',
  },

  // Toast Messages
  toast: {
    selected_room: '{{name}} selezionata',
    deselected_room: '{{name}} deselezionata',
    paused: 'Pulizia in pausa',
    stopped: 'Pulizia interrotta',
    docked: 'Rientro alla base in corso',
    cleaning_started: 'Pulizia avviata',
    resuming: 'Ripresa della pulizia',
    starting_full_clean: 'Avvio pulizia completa della casa',
    pausing_vacuum: 'Messa in pausa del robot',
    stopping_vacuum: 'Arresto del robot',
    vacuum_docking: 'Il robot sta rientrando alla base',
    starting_room_clean: 'Avvio pulizia per {{count}} stanza selezionata',
    starting_room_clean_plural: 'Avvio pulizia per {{count}} stanze selezionate',
    starting_zone_clean: 'Avvio pulizia della zona',
    select_rooms_first: 'Seleziona prima le stanze da pulire',
    cannot_determine_map: 'Impossibile determinare le dimensioni della mappa',
    select_zone_first: 'Seleziona una zona sulla mappa',
  },

  // Room Selection Display
  room_display: {
    selected_rooms: 'Stanze selezionate:',
    selected_label: 'Selezionate:',
  },

  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: 'Personalizzato: ',
    prefix_cleangenius: 'CleanGenius: ',
    view_shortcuts: 'Visualizza scorciatoie',
    vac_and_mop: 'Aspirazione e lavaggio',
    mop_after_vac: 'Lavaggio dopo aspirazione',
    vacuum: 'Aspirazione',
    mop: 'Lavaggio',
  },

  // Cleaning Mode Modal
  cleaning_mode: {
    title: 'Modalità di pulizia',
    clean_genius: 'CleanGenius',
    custom: 'Personalizzata',
  },

  // Shortcuts Modal
  shortcuts: {
    title: 'Scorciatoie',
    no_shortcuts: 'Nessuna scorciatoia disponibile',
    create_hint: "Crea scorciatoie nell'app Dreame per avviare rapidamente le tue routine di pulizia preferite",
  },

  // Custom Mode
  custom_mode: {
    cleaning_mode_title: 'Modalità di pulizia',
    suction_power_title: 'Potenza di aspirazione',
    max_plus_description:
      'La potenza di aspirazione sarà aumentata al livello massimo. Modalità utilizzabile una sola volta.',
    wetness_title: 'Livello di umidità',
    slightly_dry: 'Leggermente asciutto',
    moist: 'Umido',
    wet: 'Bagnato',
    mop_washing_frequency_title: 'Frequenza lavaggio mop',
    route_title: 'Percorso',
  },

  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: 'Modalità di pulizia',
    deep_cleaning: 'Pulizia profonda',
  },

  // Header
  header: {
    battery: 'Batteria',
    status: 'Stato',
    area: 'Area',
    time: 'Tempo',
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
    quiet: 'Silenzioso',
    standard: 'Standard',
    strong: 'Turbo',
    turbo: 'Max',
  },

  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: 'Per stanza',
    by_area: 'Per area',
    by_time: 'Per tempo',
  },

  // Errors
  errors: {
    entity_not_found: 'Entità non trovata: {{entity}}',
    failed_to_load: "Impossibile caricare i dati dell'entità",
  },

  // Settings Panel
  settings: {
    title: 'Impostazioni',
    consumables: {
      title: 'Materiali di consumo',
      main_brush: 'Spazzola principale',
      side_brush: 'Spazzola laterale',
      filter: 'Filtro',
      sensor: 'Sensore',
      remaining: 'rimanente',
      reset: 'Reimposta',
    },
    device_info: {
      title: 'Informazioni dispositivo',
      firmware: 'Firmware',
      total_area: 'Area totale pulita',
      total_time: 'Tempo totale di pulizia',
      total_cleans: 'Pulizie totali',
      wifi_ssid: 'Rete Wi-Fi',
      wifi_signal: 'Potenza segnale',
      ip_address: 'Indirizzo IP',
    },
    map_management: {
      title: 'Gestione mappa',
      description: 'Seleziona quale mappa utilizzare per la pulizia.',
      no_maps: 'Nessuna mappa disponibile',
    },
    quick_settings: {
      title: 'Impostazioni rapide',
      child_lock: 'Blocco bambini',
      child_lock_desc: 'Disabilita i pulsanti fisici del dispositivo',
      carpet_boost: 'Potenza tappeti',
      carpet_boost_desc: "Aumenta l'aspirazione sui tappeti",
      obstacle_avoidance: 'Evitamento ostacoli',
      obstacle_avoidance_desc: 'Evita gli ostacoli durante la pulizia',
      auto_dust_collecting: 'Svuotamento automatico',
      auto_dust_collecting_desc: 'Svuota automaticamente il contenitore della polvere',
      auto_drying: 'Asciugatura automatica',
      auto_drying_desc: 'Asciuga il panno mop dopo la pulizia',
      dnd: 'Non disturbare',
      dnd_desc: 'Orari silenziosi con attività ridotta',
    },
    volume: {
      title: 'Volume e suoni',
      test_sound: 'Individua',
      muted: 'Disattivato',
    },
    carpet: {
      title: 'Impostazioni tappeti',
      carpet_boost: 'Potenza tappeti',
      carpet_boost_desc: 'Aumenta la potenza di aspirazione sui tappeti',
      carpet_recognition: 'Riconoscimento tappeti',
      carpet_recognition_desc: 'Rileva automaticamente i tappeti',
      carpet_avoidance: 'Evita tappeti',
      carpet_avoidance_desc: 'Evita i tappeti durante il lavaggio',
      sensitivity: 'Sensibilità tappeti',
      sensitivity_desc: 'Livello di sensibilità di rilevamento',
      sensitivity_low: 'Bassa',
      sensitivity_medium: 'Media',
      sensitivity_high: 'Alta',
    },
    ai_detection: {
      title: 'AI e rilevamento',
      obstacle_avoidance: 'Evitamento ostacoli',
      obstacle_avoidance_desc: 'Usa i sensori per evitare ostacoli',
      ai_obstacle_detection: 'Rilevamento ostacoli AI',
      ai_obstacle_detection_desc: "Usa l'AI per identificare ed evitare ostacoli",
      ai_obstacle_image_upload: 'Caricamento immagini ostacoli',
      ai_obstacle_image_upload_desc: "Carica immagini degli ostacoli per l'analisi",
      ai_pet_detection: 'Rilevamento animali domestici',
      ai_pet_detection_desc: 'Rileva ed evita animali domestici',
      ai_human_detection: 'Rilevamento persone',
      ai_human_detection_desc: 'Rileva ed evita persone',
      ai_furniture_detection: 'Rilevamento mobili',
      ai_furniture_detection_desc: 'Rileva e aggira i mobili',
      ai_fluid_detection: 'Rilevamento liquidi',
      ai_fluid_detection_desc: 'Rileva ed evita liquidi',
      stain_avoidance: 'Evitamento macchie',
      stain_avoidance_desc: 'Evita le macchie rilevate',
      collision_avoidance: 'Evitamento collisioni',
      collision_avoidance_desc: 'Previene collisioni con oggetti',
      fill_light: 'Luce di riempimento',
      fill_light_desc: 'Usa la luce di riempimento per un rilevamento migliore',
    },
  },
};
