export const pl = {
  // Room Selector
  room_selector: {
    title: 'Wybierz pokoje',
    selected_count: 'Wybrano: {{count}}',
  },

  // Vacuum Map
  vacuum_map: {
    no_map: 'Mapa niedostępna',
    looking_for: 'Szukanie: {{entity}}',
    room_overlay: 'Kliknij numery pokojów, aby wybrać je do sprzątania',
    zone_overlay_create: 'Kliknij na mapie, aby umieścić strefę sprzątania',
    zone_overlay_resize: 'Przeciągnij rogi, aby zmienić rozmiar, kliknij obok, aby zmienić pozycję',
    clear_zone: 'Wyczyść strefę',
    switch_to_list: 'Przełącz na widok listy',
    switch_to_map: 'Przełącz na widok mapy',
    room_list_overlay: 'Dotknij pokoje, aby wybrać do sprzątania',
    no_rooms: 'Brak dostępnych pokoi',
    zoom_in: 'Powiększ',
    zoom_out: 'Pomniejsz',
    zoom_reset: 'Resetuj powiększenie',
  },

  // Mode Tabs
  modes: {
    room: 'Pokój',
    all: 'Wszystko',
    zone: 'Strefa',
  },

  // Action Buttons
  actions: {
    clean: 'Sprzątaj',
    clean_all: 'Sprzątaj wszystko',
    clean_rooms: 'Sprzątaj {{count}} pokój',
    clean_rooms_plural: 'Sprzątaj {{count}} pokoje/pokoi',
    select_rooms: 'Wybierz pokoje',
    zone_clean: 'Sprzątanie strefowe',
    pause: 'Pauza',
    resume: 'Wznów',
    stop: 'Zatrzymaj',
    dock: 'Baza',
  },

  // Toast Messages
  toast: {
    selected_room: 'Wybrano {{name}}',
    deselected_room: 'Odznaczono {{name}}',
    paused: 'Wstrzymano sprzątanie',
    stopped: 'Zatrzymano sprzątanie',
    docked: 'Powrót do bazy',
    cleaning_started: 'Rozpoczęto sprzątanie',
    resuming: 'Wznawianie sprzątania',
    starting_full_clean: 'Rozpoczynanie sprzątania całego domu',
    pausing_vacuum: 'Wstrzymywanie odkurzacza',
    stopping_vacuum: 'Zatrzymywanie odkurzacza',
    vacuum_docking: 'Odkurzacz wraca do bazy',
    starting_room_clean: 'Rozpoczynanie sprzątania {{count}} wybranego pokoju',
    starting_room_clean_plural: 'Rozpoczynanie sprzątania {{count}} wybranych pokojów',
    starting_zone_clean: 'Rozpoczynanie sprzątania strefowego',
    select_rooms_first: 'Najpierw wybierz pokoje do sprzątania',
    cannot_determine_map: 'Nie można określić wymiarów mapy',
    select_zone_first: 'Najpierw wybierz strefę na mapie',
  },

  // Room Selection Display
  room_display: {
    selected_rooms: 'Wybrane pokoje:',
    selected_label: 'Wybrano:',
  },

  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: 'Własne: ',
    prefix_cleangenius: 'CleanGenius: ',
    view_shortcuts: 'Pokaż skróty',
    vac_and_mop: 'Odkurzanie i mopowanie',
    mop_after_vac: 'Mopowanie po odkurzaniu',
    vacuum: 'Odkurzanie',
    mop: 'Mopowanie',
  },

  // Cleaning Mode Modal
  cleaning_mode: {
    title: 'Tryb sprzątania',
    clean_genius: 'CleanGenius',
    custom: 'Własny',
  },

  // Shortcuts Modal
  shortcuts: {
    title: 'Skróty',
    no_shortcuts: 'Brak dostępnych skrótów',
    create_hint: 'Utwórz skróty w aplikacji Dreame, aby szybko uruchamiać ulubione procedury sprzątania',
  },

  // Custom Mode
  custom_mode: {
    cleaning_mode_title: 'Tryb sprzątania',
    suction_power_title: 'Siła ssania',
    max_plus_description: 'Siła ssania zostanie zwiększona do najwyższego poziomu (tryb jednorazowy).',
    wetness_title: 'Wilgotność mopa',
    slightly_dry: 'Lekko suchy',
    moist: 'Wilgotny',
    wet: 'Mokry',
    mop_washing_frequency_title: 'Częstotliwość mycia mopa',
    route_title: 'Trasa',
  },

  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: 'Tryb sprzątania',
    deep_cleaning: 'Głębokie czyszczenie',
  },

  // Header
  header: {
    battery: 'Bateria',
    status: 'Status',
    area: 'Powierzchnia',
    time: 'Czas',
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
    quiet: 'Cichy',
    standard: 'Standardowy',
    strong: 'Turbo',
    turbo: 'Max',
  },

  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: 'Według pokoju',
    by_area: 'Według powierzchni',
    by_time: 'Według czasu',
  },

  // Errors
  errors: {
    entity_not_found: 'Nie znaleziono encji: {{entity}}',
    failed_to_load: 'Błąd ładowania danych encji',
  },

  // Settings Panel
  settings: {
    title: 'Ustawienia',
    consumables: {
      title: 'Materiały eksploatacyjne',
      main_brush: 'Szczotka główna',
      side_brush: 'Szczotka boczna',
      filter: 'Filtr',
      sensor: 'Czujnik',
      remaining: 'pozostało',
      reset: 'Resetuj',
    },
    device_info: {
      title: 'Informacje o urządzeniu',
      firmware: 'Oprogramowanie układowe',
      total_area: 'Całkowita powierzchnia sprzątania',
      total_time: 'Całkowity czas sprzątania',
      total_cleans: 'Liczba sprzątań',
      wifi_ssid: 'Sieć Wi-Fi',
      wifi_signal: 'Siła sygnału',
      ip_address: 'Adres IP',
    },
    map_management: {
      title: 'Zarządzanie mapami',
      description: 'Wybierz mapę, która ma być użyta do sprzątania.',
      no_maps: 'Brak dostępnych map',
    },
    quick_settings: {
      title: 'Szybkie ustawienia',
      child_lock: 'Blokada rodzicielska',
      child_lock_desc: 'Wyłącz przyciski fizyczne na urządzeniu',
      carpet_boost: 'Zwiększenie mocy na dywanie',
      carpet_boost_desc: 'Zwiększ siłę ssania po wykryciu dywanu',
      obstacle_avoidance: 'Omijanie przeszkód',
      obstacle_avoidance_desc: 'Omijaj przeszkody podczas sprzątania',
      auto_dust_collecting: 'Automatyczne opróżnianie',
      auto_dust_collecting_desc: 'Automatycznie opróżniaj pojemnik na kurz',
      auto_drying: 'Automatyczne suszenie',
      auto_drying_desc: 'Susz mopa po zakończeniu sprzątania',
      dnd: 'Nie przeszkadzać (DND)',
      dnd_desc: 'Godziny ciszy z ograniczoną aktywnością',
    },
    volume: {
      title: 'Głośność i dźwięk',
      test_sound: 'Zlokalizuj urządzenie',
      muted: 'Wyciszony',
    },
    carpet: {
      title: 'Ustawienia dywanów',
      carpet_boost: 'Wzmocnienie na dywanie',
      carpet_boost_desc: 'Zwiększ siłę ssania na dywanach',
      carpet_recognition: 'Rozpoznawanie dywanów',
      carpet_recognition_desc: 'Automatycznie wykrywaj dywany',
      carpet_avoidance: 'Unikanie dywanów',
      carpet_avoidance_desc: 'Omijaj dywany podczas mopowania',
      sensitivity: 'Czułość wykrywania dywanów',
      sensitivity_desc: 'Poziom czułości wykrywania',
      sensitivity_low: 'Niska',
      sensitivity_medium: 'Średnia',
      sensitivity_high: 'Wysoka',
    },
    ai_detection: {
      title: 'AI i Wykrywanie',
      obstacle_avoidance: 'Omijanie przeszkód',
      obstacle_avoidance_desc: 'Używaj czujników do omijania przeszkód',
      ai_obstacle_detection: 'Rozpoznawanie przeszkód AI',
      ai_obstacle_detection_desc: 'Używaj AI do identyfikacji i omijania przeszkód',
      ai_obstacle_image_upload: 'Przesyłanie zdjęć przeszkód',
      ai_obstacle_image_upload_desc: 'Przesyłaj zdjęcia przeszkód do analizy',
      ai_pet_detection: 'Wykrywanie zwierząt',
      ai_pet_detection_desc: 'Wykrywaj i omijaj zwierzęta domowe',
      ai_human_detection: 'Wykrywanie ludzi',
      ai_human_detection_desc: 'Wykrywaj i omijaj ludzi',
      ai_furniture_detection: 'Wykrywanie mebli',
      ai_furniture_detection_desc: 'Wykrywaj i nawiguj wokół mebli',
      ai_fluid_detection: 'Wykrywanie cieczy',
      ai_fluid_detection_desc: 'Wykrywaj i omijaj rozlane płyny',
      stain_avoidance: 'Omijanie plam',
      stain_avoidance_desc: 'Omijaj wykryte plamy',
      collision_avoidance: 'Unikanie kolizji',
      collision_avoidance_desc: 'Zapobiegaj uderzeniom w obiekty',
      fill_light: 'Doświetlenie',
      fill_light_desc: 'Użyj światła pomocniczego dla lepszego wykrywania',
    },
  },
};
