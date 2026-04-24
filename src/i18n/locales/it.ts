import type { Translation } from './en';

export const it: Translation = {
  // Room Selector
  room_selector: {
    title: 'Seleziona stanze',
    selected_count: '{{count}} selezionate',
  },

  // Map Selector
  map_selector: {
    unknown: 'Mappa sconosciuta',
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
    lock_map: 'Blocca mappa',
    unlock_map: 'Sblocca mappa',
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
    stop_and_dock: 'Stop e rientra',
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
    stopping_and_docking: 'Arresto e rientro alla base',
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
    repeats_tooltip: 'Passaggi di pulizia',
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

  // Customize Cleaning Mode
  customize: {
    title: 'Personalizza',
    description: 'Imposta preferenze personalizzate di aspirazione e lavaggio per ogni area.',
    set_button: 'Imposta',
    vacuum: 'Aspira',
    mop: 'Lava',
    vac_and_mop: 'Aspira e lava',
    cycles: 'Cicli',
    apply_to_all: 'Applica a tutte le stanze',
    click_room_hint: "Clicca su un'area per cambiare la modalità.",
    intelligent_recommendation: 'Raccomandazione intelligente',
    select_room: 'Seleziona stanza',
    settings_for: 'Impostazioni di {{room}}',
    no_rooms: 'Nessuna stanza disponibile',
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

  // Cleaning Routes
  cleaning_routes: {
    quick: 'Veloce',
    standard: 'Standard',
    intensive: 'Intensivo',
    deep: 'Profondo',
  },

  // Errors
  errors: {
    entity_not_found: 'Entità non trovata: {{entity}}',
    failed_to_load: 'Impossibile caricare i dati entità',
    service_call_failed: "Impossibile inviare il comando all'aspirapolvere",
    entity_unavailable: 'Aspirapolvere non disponibile',
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
    quick_settings: {
      title: 'Impostazioni rapide',
      child_lock: 'Blocco bambini',
      child_lock_desc: 'Disabilita i pulsanti fisici del dispositivo',
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
      clean_carpets_first: 'Pulisci tappeti prima',
      clean_carpets_first_desc: 'Aspira i tappeti prima di lavare i pavimenti',
      carpet_boost: 'Potenza tappeti',
      carpet_boost_desc: 'Aumenta la potenza di aspirazione sui tappeti',
      intensive_cleaning: 'Pulizia intensiva',
      intensive_cleaning_desc: 'Pulizia profonda con passaggi extra',
      side_brush_rotate: 'Rotazione spazzola laterale',
      side_brush_rotate_desc: 'Ruota la spazzola laterale sui tappeti',
      sensitivity: 'Sensibilità tappeti',
      sensitivity_desc: 'Livello di sensibilità di rilevamento',
      sensitivity_low: 'Bassa',
      sensitivity_medium: 'Media',
      sensitivity_high: 'Alta',
      cleaning_mode: 'Pulizia tappeti',
      cleaning_mode_desc: 'Come gestire i tappeti durante la pulizia',
      mode_vacuum: 'Aspira',
      mode_vacuum_and_mop: 'Asp. e Lava',
      mode_avoidance: 'Evita',
      mode_ignore: 'Ignora',
      vacuum_mode: 'Modalità aspirazione',
      vacuum_adaptation: 'Solleva panno',
      vacuum_remove_mop: 'Rimuovi panno',
    },
    floor: {
      title: 'Impostazioni pavimento',
      collision_avoidance: 'Evita collisioni',
      collision_avoidance_desc: 'Rallenta vicino a pareti e mobili',
      auto_mount_mop: 'Monta panno auto',
      auto_mount_mop_desc: 'Montare automaticamente il panno quando necessario',
      auto_recleaning: 'Ri-pulizia auto',
      auto_recleaning_desc: 'Ri-pulire automaticamente le aree mancate',
      recleaning_off: 'Disattivato',
      recleaning_in_deep_mode: 'In modalità profonda',
      recleaning_in_all_modes: 'In tutte le modalità',
      stain_avoidance: 'Evitamento macchie',
      stain_avoidance_desc: 'Evita le macchie rilevate',
    },
    edge_corner: {
      title: 'Bordi e Angoli',
      side_reach: 'Portata laterale',
      side_reach_desc: 'Estendere la spazzola laterale per i bordi',
      mop_extend: 'Estensione panno',
      mop_extend_desc: 'Estendere il panno per bordi e angoli',
      gap_cleaning: 'Pulizia fessure',
      gap_cleaning_desc: 'Pulire spazi stretti tra i mobili',
      mopping_under: 'Lavaggio sotto mobili',
      mopping_under_desc: 'Estendere il panno sotto mobili bassi',
      extend_frequency: 'Frequenza estensione',
      extend_frequency_desc: 'Frequenza di estensione per pulizia bordi',
      frequency_standard: 'Standard',
      frequency_intelligent: 'Intelligente',
      frequency_high: 'Alta',
    },
    dock: {
      title: 'Impostazioni base',
      auto_empty_mode: 'Svuotamento auto',
      auto_empty_mode_desc: 'Quando svuotare automaticamente il contenitore',
      empty_off: 'Disattivato',
      empty_standard: 'Standard',
      empty_high_frequency: 'Alta frequenza',
      empty_low_frequency: 'Bassa frequenza',
      auto_detergent: 'Detergente auto',
      auto_detergent_desc: 'Aggiungere automaticamente detergente durante il lavaggio',
      smart_washing: 'Lavaggio intelligente',
      smart_washing_desc: 'Regolare il lavaggio in base allo sporco',
      washing_mode: 'Modalità lavaggio',
      washing_mode_desc: 'Intensità del lavaggio del panno',
      washing_light: 'Leggero',
      washing_standard: 'Standard',
      washing_deep: 'Profondo',
      water_temperature: "Temperatura dell'acqua",
      water_temperature_desc: 'Temperatura per il lavaggio del panno',
      temp_normal: 'Normale',
      temp_mild: 'Mite',
      temp_warm: 'Tiepida',
      temp_hot: 'Calda',
      auto_drying: 'Asciugatura auto',
      auto_drying_desc: 'Asciugare automaticamente il panno dopo la pulizia',
      drying_time: 'Tempo asciugatura',
      drying_time_desc: 'Durata asciugatura del panno',
      station_cleaning: 'Pulizia stazione',
      station_cleaning_desc: 'Pulire la stazione base',
      clean_now: 'Pulisci ora',
    },
    ai_detection: {
      title: 'AI e rilevamento',
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
      fill_light: 'Luce di riempimento',
      fill_light_desc: 'Usa la luce di riempimento per un rilevamento migliore',
    },
    station_controls: {
      title: 'Controlli stazione',
      self_clean: 'Autopulizia',
      self_clean_desc: 'Avvia il ciclo di lavaggio del panno',
      manual_drying: 'Asciugatura manuale',
      manual_drying_desc: 'Avvia il ciclo di asciugatura del panno',
      water_tank_draining: 'Svuota serbatoio',
      water_tank_draining_desc: "Scarica l'acqua sporca dal serbatoio",
      base_station_cleaning: 'Pulisci stazione',
      base_station_cleaning_desc: 'Pulisci la stazione base',
      empty_water_tank: 'Svuota serbatoio acqua',
      empty_water_tank_desc: "Svuota il serbatoio di raccolta dell'acqua",
    },
  },
};
