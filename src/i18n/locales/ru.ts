import type { Translation } from './en';

export const ru: Translation = {
  // Room Selector
  room_selector: {
    title: 'Выбор комнат',
    selected_count: '{{count}} выбрано',
  },

  // Map Selector
  map_selector: {
    unknown: 'Неизвестная карта',
  },

  // Vacuum Map
  vacuum_map: {
    no_map: 'Нет доступной карты',
    looking_for: 'Обнаружение: {{entity}}',
    room_overlay: 'Кликните на номера комнат чтобы выбрать комнаты для убокри',
    zone_overlay_create: 'Кликните на карту для добавления зоны уборки',
    zone_overlay_resize: 'Потяните за углы для изменения размеры, кликните на любом месте для новой зоны',
    clear_zone: 'Уборка зоны',
    switch_to_list: 'Переключить на список',
    switch_to_map: 'Переключить на карту',
    room_list_overlay: 'Нажмите на комнаты для выбора уборки',
    no_rooms: 'Нет доступных комнат',
    zoom_in: 'Увеличить',
    zoom_out: 'Уменьшить',
    zoom_reset: 'Сбросить масштаб',
    lock_map: 'Заблокировать карту',
    unlock_map: 'Разблокировать карту',
  },

  // Mode Tabs
  modes: {
    room: 'Комната',
    all: 'Всё',
    zone: 'Зона',
  },

  // Action Buttons
  actions: {
    clean: 'Очистка',
    clean_all: 'Очистка всего',
    clean_rooms: 'Очистка {{count}} комнаты',
    clean_rooms_plural: 'Очистка {{count}} комнат',
    select_rooms: 'Выбор комнат',
    zone_clean: 'Уборка зоны',
    pause: 'Пауза',
    resume: 'Продолжить',
    stop: 'Стоп',
    stop_and_dock: 'Стоп и на базу',
    dock: 'Возврат на базу',
  },

  // Toast Messages
  toast: {
    selected_room: 'Выбраны {{name}}',
    deselected_room: 'Исключены {{name}}',
    paused: 'Уборки приостановлена',
    stopped: 'Уборка остановлена',
    docked: 'Возвращение на базу',
    cleaning_started: 'Уборка начата',
    resuming: 'Продолжение уборки',
    starting_full_clean: 'Начинается полная уборка дома',
    pausing_vacuum: 'Приостановка пылесоса',
    stopping_vacuum: 'Остановка пылесоса',
    stopping_and_docking: 'Остановка и возврат на базу',
    vacuum_docking: 'Пылесос возвращается на базу',
    starting_room_clean: 'Начало уборки {{count}} выбранной комнаты',
    starting_room_clean_plural: 'Начало уборки {{count}} выбранных комнат',
    starting_zone_clean: 'Начало зональной уборки',
    select_rooms_first: 'Пожалуйста, сначала выберите комнаты с которых начать',
    cannot_determine_map: 'Не удаётся распознать размеры карты',
    select_zone_first: 'Пожалуйста, выберите зону на карте',
  },

  // Room Selection Display
  room_display: {
    selected_rooms: 'Выбранные комнаты:',
    selected_label: 'Выбрано:',
  },

  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: 'Настроить уборку: ',
    prefix_cleangenius: 'CleanGenius: ',
    view_shortcuts: 'Посмотреть шорткаты',
    repeats_tooltip: 'Количество проходов',
    vac_and_mop: 'Сухая и влажная',
    mop_after_vac: 'Влажная после сухой',
    vacuum: 'Сухая уборка',
    mop: 'Влажная уборка',
  },

  // Cleaning Mode Modal
  cleaning_mode: {
    title: 'Режим уборки',
    clean_genius: 'CleanGenius',
    custom: 'Настроить',
  },

  // Shortcuts Modal
  shortcuts: {
    title: 'Шорткаты',
    no_shortcuts: 'Нет доступных шорткатов',
    create_hint: 'Создайте шорткаты в приложении Dreame для быстрого выбора ваших любимых процедур ',
  },

  // Custom Mode
  custom_mode: {
    cleaning_mode_title: 'Режим уборки',
    suction_power_title: 'Мощность всасывания',
    max_plus_description:
      'Мощность всасывания будет увеличена до максимального уровня, что соответствует режиму одноразового использования.',
    wetness_title: 'Влажность',
    slightly_dry: 'Слегка сухая',
    moist: 'Влажная',
    wet: 'Мокрая',
    mop_washing_frequency_title: 'Периодичность промывки швабры',
    route_title: 'Маршрут',
  },

  // Customize Cleaning Mode
  customize: {
    title: 'Настроить',
    description: 'Установите персонализированные настройки всасывания и влажности для каждой зоны.',
    set_button: 'Установить',
    vacuum: 'Пылесос',
    mop: 'Швабра',
    vac_and_mop: 'Пылесос и швабра',
    cycles: 'Циклы',
    apply_to_all: 'Применить ко всем комнатам',
    click_room_hint: 'Нажмите на зону, чтобы изменить режим.',
    intelligent_recommendation: 'Умная рекомендация',
    select_room: 'Выберите комнату',
    settings_for: 'Настройки {{room}}',
    no_rooms: 'Комнаты не найдены',
  },

  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: 'Режим уборки',
    deep_cleaning: 'Тщательная уборка',
  },

  // Header
  header: {
    battery: 'Батарея',
    status: 'Статус',
    area: 'Площадь',
    time: 'Время',
  },

  // Units
  units: {
    square_meters: 'м²',
    minutes: 'мин',
    minutes_short: 'м',
    percent: '%',
    decibels: 'дБм',
  },

  // Suction Levels (friendly names)
  suction_levels: {
    quiet: 'Тихий',
    standard: 'Стандартный',
    strong: 'Турбо',
    turbo: 'Макс',
  },

  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: 'По комнате',
    by_area: 'По площади',
    by_time: 'По времени',
  },

  // Cleaning Routes
  cleaning_routes: {
    quick: 'Быстрый',
    standard: 'Стандартный',
    intensive: 'Интенсивный',
    deep: 'Глубокий',
  },

  // Errors
  errors: {
    entity_not_found: 'Сущность не найдена: {{entity}}',
    failed_to_load: 'Не удалось загрузить данные сущности',
    service_call_failed: 'Не удалось отправить команду пылесосу',
    entity_unavailable: 'Пылесос недоступен',
  },

  // Settings Panel
  settings: {
    title: 'Настройки',
    consumables: {
      title: 'Расходные материалы',
      main_brush: 'Основная щётка',
      side_brush: 'Боковая щётка',
      filter: 'Фильтр',
      sensor: 'Датчик',
      remaining: 'осталось',
      reset: 'Сбросить',
    },
    device_info: {
      title: 'Информация об устройстве',
      firmware: 'Прошивка',
      total_area: 'Общая площадь уборки',
      total_time: 'Общее время уборки',
      total_cleans: 'Всего уборок',
      wifi_ssid: 'Сеть Wi-Fi',
      wifi_signal: 'Уровень сигнала',
      ip_address: 'IP-адрес',
    },
    map_management: {
      title: 'Управление картами',
      description: 'Выберите карту для уборки.',
      no_maps: 'Нет доступных карт',
    },
    quick_settings: {
      title: 'Быстрые настройки',
      child_lock: 'Блокировка от детей',
      child_lock_desc: 'Отключить кнопки на устройстве',
      carpet_boost: 'Усиление на коврах',
      carpet_boost_desc: 'Увеличить мощность на коврах',
      obstacle_avoidance: 'Избегание препятствий',
      obstacle_avoidance_desc: 'Обход препятствий при уборке',
      auto_dust_collecting: 'Автоочистка',
      auto_dust_collecting_desc: 'Автоматическая очистка пылесборника',
      auto_drying: 'Автосушка',
      auto_drying_desc: 'Сушка салфетки после уборки',
      dnd: 'Не беспокоить',
      dnd_desc: 'Тихие часы с ограниченной активностью',
    },
    volume: {
      title: 'Громкость и звук',
      test_sound: 'Найти',
      muted: 'Без звука',
    },
    carpet: {
      title: 'Настройки ковров',
      clean_carpets_first: 'Сначала ковры',
      clean_carpets_first_desc: 'Пылесосить ковры перед мытьём полов',
      carpet_boost: 'Усиление на коврах',
      carpet_boost_desc: 'Увеличить мощность всасывания на коврах',
      intensive_cleaning: 'Интенсивная уборка',
      intensive_cleaning_desc: 'Глубокая очистка ковров с доп. проходами',
      side_brush_rotate: 'Вращение боковой щётки',
      side_brush_rotate_desc: 'Вращать боковую щётку на коврах',
      sensitivity: 'Чувствительность ковра',
      sensitivity_desc: 'Уровень чувствительности распознавания',
      sensitivity_low: 'Низкая',
      sensitivity_medium: 'Средняя',
      sensitivity_high: 'Высокая',
      cleaning_mode: 'Уборка ковров',
      cleaning_mode_desc: 'Поведение при уборке ковров',
      mode_vacuum: 'Пылесос',
      mode_vacuum_and_mop: 'Пыл. и швабра',
      mode_avoidance: 'Избегать',
      mode_ignore: 'Игнорировать',
      vacuum_mode: 'Режим пылесоса',
      vacuum_adaptation: 'Поднять швабру',
      vacuum_remove_mop: 'Снять тряпку',
    },
    floor: {
      title: 'Настройки пола',
      collision_avoidance: 'Избегание столкновений',
      collision_avoidance_desc: 'Замедление у стен и мебели',
      auto_mount_mop: 'Авто-установка швабры',
      auto_mount_mop_desc: 'Автоматически прикреплять насадку для мытья',
      auto_recleaning: 'Авто-перечистка',
      auto_recleaning_desc: 'Автоматически перечищать пропущенные участки',
      recleaning_off: 'Выкл',
      recleaning_in_deep_mode: 'В глубоком режиме',
      recleaning_in_all_modes: 'Во всех режимах',
      stain_avoidance: 'Избегание пятен',
      stain_avoidance_desc: 'Обходить обнаруженные пятна',
    },
    edge_corner: {
      title: 'Края и углы',
      side_reach: 'Боковой охват',
      side_reach_desc: 'Выдвижение боковой щётки для краёв',
      mop_extend: 'Выдвижение швабры',
      mop_extend_desc: 'Выдвижение швабры для краёв и углов',
      gap_cleaning: 'Очистка щелей',
      gap_cleaning_desc: 'Очистка узких щелей между мебелью',
      mopping_under: 'Мытьё под мебелью',
      mopping_under_desc: 'Выдвижение швабры под низкую мебель',
      extend_frequency: 'Частота выдвижения',
      extend_frequency_desc: 'Как часто выдвигать швабру для краёв',
      frequency_standard: 'Стандартная',
      frequency_intelligent: 'Умная',
      frequency_high: 'Высокая',
    },
    dock: {
      title: 'Настройки станции',
      auto_empty_mode: 'Авто-опустошение',
      auto_empty_mode_desc: 'Когда автоматически опустошать пылесборник',
      empty_off: 'Выкл',
      empty_standard: 'Стандарт',
      empty_high_frequency: 'Часто',
      empty_low_frequency: 'Редко',
      auto_detergent: 'Авто-моющее средство',
      auto_detergent_desc: 'Автоматически добавлять моющее средство',
      smart_washing: 'Умная мойка',
      smart_washing_desc: 'Умная настройка мойки по уровню загрязнения',
      washing_mode: 'Режим мойки',
      washing_mode_desc: 'Интенсивность мойки насадки',
      washing_light: 'Лёгкая',
      washing_standard: 'Стандарт',
      washing_deep: 'Глубокая',
      water_temperature: 'Температура воды',
      water_temperature_desc: 'Температура для мойки швабры',
      temp_normal: 'Обычная',
      temp_mild: 'Тёплая',
      temp_warm: 'Горячая',
      temp_hot: 'Очень горячая',
      auto_drying: 'Авто-сушка',
      auto_drying_desc: 'Автоматически сушить насадку после уборки',
      drying_time: 'Время сушки',
      drying_time_desc: 'Продолжительность сушки насадки',
      station_cleaning: 'Очистка станции',
      station_cleaning_desc: 'Очистить базовую станцию',
      clean_now: 'Очистить',
    },
    ai_detection: {
      title: 'ИИ и распознавание',
      ai_obstacle_detection: 'ИИ-распознавание препятствий',
      ai_obstacle_detection_desc: 'Использовать ИИ для определения и обхода препятствий',
      ai_obstacle_image_upload: 'Загрузка изображений препятствий',
      ai_obstacle_image_upload_desc: 'Загружать изображения препятствий для анализа',
      ai_pet_detection: 'Распознавание питомцев',
      ai_pet_detection_desc: 'Обнаружение и обход питомцев',
      ai_human_detection: 'Распознавание людей',
      ai_human_detection_desc: 'Обнаружение и обход людей',
      ai_furniture_detection: 'Распознавание мебели',
      ai_furniture_detection_desc: 'Обнаружение и обход мебели',
      ai_fluid_detection: 'Распознавание жидкостей',
      ai_fluid_detection_desc: 'Обнаружение и обход жидкостей',
      fill_light: 'Подсветка',
      fill_light_desc: 'Использовать подсветку для лучшего распознавания',
    },
    station_controls: {
      title: 'Управление станцией',
      self_clean: 'Самоочистка',
      self_clean_desc: 'Запустить цикл мытья салфетки',
      manual_drying: 'Ручная сушка',
      manual_drying_desc: 'Запустить цикл сушки салфетки',
      water_tank_draining: 'Слив воды',
      water_tank_draining_desc: 'Слить грязную воду из бака',
      base_station_cleaning: 'Очистка станции',
      base_station_cleaning_desc: 'Очистить базовую станцию',
      empty_water_tank: 'Опустошить бак',
      empty_water_tank_desc: 'Опустошить бак для сбора воды',
    },
  },
};
