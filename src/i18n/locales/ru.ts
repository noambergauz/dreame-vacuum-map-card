import type { Translation } from './en';

export const ru: Translation = {
  // Room Selector
  room_selector: {
    title: 'Выбор комнат',
    selected_count: '{{count}} выбрано',
  },

  // Vacuum Map
  vacuum_map: {
    no_map: 'Нет доступной карты',
    looking_for: 'Обнаружение: {{entity}}',
    room_overlay: 'Кликните на номера комнат чтобы выбрать комнаты для убокри',
    zone_overlay_create: 'Кликните на карту для добавления зоны уборки',
    zone_overlay_resize: 'Потяните за углы для изменения размеры, кликните на любом месте для новой зоны',
    clear_zone: 'Уборка зоны',
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
    max_plus_description: 'Мощность всасывания будет увеличена до максимального уровня, что соответствует режиму одноразового использования.',
    wetness_title: 'Влажность',
    slightly_dry: 'Слегка сухая',
    moist: 'Влажная',
    wet: 'Мокрая',
    mop_washing_frequency_title: 'Периодичность промывки швабры',
    route_title: 'Маршрут',
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
  },

  // Errors
  errors: {
    entity_not_found: 'Сущность не найдена: {{entity}}',
    failed_to_load: 'Не удалось получить данные сущности',
  },
};

