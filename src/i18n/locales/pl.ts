import type { Translation } from './en';

export const pl: Translation = {
  // Room Selector
  room_selector: {
    title: 'Wybierz pokoje',
    selected_count: 'Wybrano: {{count}}',
  },

  // Map Selector
  map_selector: {
    unknown: 'Nieznana mapa',
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
    lock_map: 'Zablokuj mapę',
    unlock_map: 'Odblokuj mapę',
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
    stop_and_dock: 'Zatrzymaj i wróć',
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
    stopping_and_docking: 'Zatrzymywanie i powrót do bazy',
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
    repeats_tooltip: 'Liczba przejść',
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

  // Customize Cleaning Mode
  customize: {
    title: 'Dostosuj',
    description: 'Ustaw spersonalizowane preferencje ssania i mopowania dla każdego obszaru.',
    set_button: 'Ustaw',
    vacuum: 'Odkurzaj',
    mop: 'Mopuj',
    vac_and_mop: 'Odkurzaj i mopuj',
    cycles: 'Cykle',
    apply_to_all: 'Zastosuj do wszystkich pomieszczeń',
    click_room_hint: 'Kliknij obszar, aby zmienić tryb.',
    intelligent_recommendation: 'Inteligentna rekomendacja',
    select_room: 'Wybierz pokój',
    settings_for: 'Ustawienia {{room}}',
    no_rooms: 'Brak dostępnych pokoi',
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

  // Cleaning Routes
  cleaning_routes: {
    quick: 'Szybki',
    standard: 'Standardowy',
    intensive: 'Intensywny',
    deep: 'Głęboki',
  },

  // Errors
  errors: {
    entity_not_found: 'Nie znaleziono encji: {{entity}}',
    failed_to_load: 'Nie udało się załadować danych encji',
    service_call_failed: 'Nie udało się wysłać polecenia do odkurzacza',
    entity_unavailable: 'Odkurzacz niedostępny',
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
      clean_carpets_first: 'Najpierw dywany',
      clean_carpets_first_desc: 'Odkurzaj dywany przed mopowaniem',
      carpet_boost: 'Wzmocnienie na dywanie',
      carpet_boost_desc: 'Zwiększ siłę ssania na dywanach',
      intensive_cleaning: 'Intensywne czyszczenie',
      intensive_cleaning_desc: 'Głębokie czyszczenie z dodatkowymi przejściami',
      side_brush_rotate: 'Obracanie szczotki bocznej',
      side_brush_rotate_desc: 'Obracaj szczotkę boczną na dywanach',
      sensitivity: 'Czułość wykrywania dywanów',
      sensitivity_desc: 'Poziom czułości wykrywania',
      sensitivity_low: 'Niska',
      sensitivity_medium: 'Średnia',
      sensitivity_high: 'Wysoka',
      cleaning_mode: 'Czyszczenie dywanów',
      cleaning_mode_desc: 'Jak postępować z dywanami podczas sprzątania',
      mode_vacuum: 'Odkurzanie',
      mode_vacuum_and_mop: 'Odk. i Mop',
      mode_avoidance: 'Unikaj',
      mode_ignore: 'Ignoruj',
      vacuum_mode: 'Tryb odkurzania',
      vacuum_adaptation: 'Podnieś mop',
      vacuum_remove_mop: 'Usuń mop',
    },
    floor: {
      title: 'Ustawienia podłogi',
      collision_avoidance: 'Unikanie kolizji',
      collision_avoidance_desc: 'Zwolnij przy ścianach i meblach',
      auto_mount_mop: 'Auto montaż mopa',
      auto_mount_mop_desc: 'Automatycznie zamontuj nakładkę mopa',
      auto_recleaning: 'Automatyczne doczyszczanie',
      auto_recleaning_desc: 'Automatycznie doczyszczaj pominięte obszary',
      recleaning_off: 'Wył',
      recleaning_in_deep_mode: 'W trybie głębokim',
      recleaning_in_all_modes: 'We wszystkich trybach',
    },
    edge_corner: {
      title: 'Krawędzie i Rogi',
      side_reach: 'Zasięg boczny',
      side_reach_desc: 'Wysuń szczotkę boczną do krawędzi',
      mop_extend: 'Wysunięcie mopa',
      mop_extend_desc: 'Wysuń mop do krawędzi i rogów',
      gap_cleaning: 'Czyszczenie szczelin',
      gap_cleaning_desc: 'Czyść wąskie szczeliny między meblami',
      mopping_under: 'Mopowanie pod meblami',
      mopping_under_desc: 'Wysuń mop pod niskie meble',
      extend_frequency: 'Częstotliwość wysuwania',
      extend_frequency_desc: 'Jak często wysuwać mop do czyszczenia krawędzi',
      frequency_standard: 'Standardowa',
      frequency_intelligent: 'Inteligentna',
      frequency_high: 'Wysoka',
    },
    dock: {
      title: 'Ustawienia stacji',
      auto_empty_mode: 'Tryb auto opróżniania',
      auto_empty_mode_desc: 'Kiedy automatycznie opróżniać pojemnik',
      empty_off: 'Wył',
      empty_standard: 'Standardowy',
      empty_high_frequency: 'Wysoka częst.',
      empty_low_frequency: 'Niska częst.',
      auto_detergent: 'Auto detergent',
      auto_detergent_desc: 'Automatycznie dodawaj detergent podczas mycia',
      smart_washing: 'Inteligentne mycie',
      smart_washing_desc: 'Dostosuj mycie do poziomu zabrudzenia',
      washing_mode: 'Tryb mycia',
      washing_mode_desc: 'Intensywność mycia mopa',
      washing_light: 'Lekki',
      washing_standard: 'Standardowy',
      washing_deep: 'Głęboki',
      water_temperature: 'Temperatura wody',
      water_temperature_desc: 'Temperatura do mycia mopa',
      temp_normal: 'Normalna',
      temp_mild: 'Łagodna',
      temp_warm: 'Ciepła',
      temp_hot: 'Gorąca',
      auto_drying: 'Auto suszenie',
      auto_drying_desc: 'Automatycznie suszyć mop po czyszczeniu',
      drying_time: 'Czas suszenia',
      drying_time_desc: 'Czas suszenia mopa',
      station_cleaning: 'Czyszczenie stacji',
      station_cleaning_desc: 'Wyczyść stację bazową',
      clean_now: 'Wyczyść teraz',
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
    station_controls: {
      title: 'Sterowanie stacją',
      self_clean: 'Samooczyszczanie',
      self_clean_desc: 'Rozpocznij cykl mycia mopa',
      manual_drying: 'Ręczne suszenie',
      manual_drying_desc: 'Rozpocznij cykl suszenia mopa',
      water_tank_draining: 'Opróżnij zbiornik',
      water_tank_draining_desc: 'Odprowadź brudną wodę ze zbiornika',
      base_station_cleaning: 'Wyczyść stację',
      base_station_cleaning_desc: 'Oczyść stację bazową',
      empty_water_tank: 'Opróżnij zbiornik wody',
      empty_water_tank_desc: 'Opróżnij zbiornik na wodę',
    },
  },
};
