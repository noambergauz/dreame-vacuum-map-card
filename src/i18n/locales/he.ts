import type { Translation } from './en';

export const he: Translation = {
  // Room Selector
  room_selector: {
    title: 'בחר חדרים',
    selected_count: '{{count}} נבחרו',
  },

  // Vacuum Map
  vacuum_map: {
    no_map: 'אין מפה זמינה',
    looking_for: 'מחפש: {{entity}}',
    room_overlay: 'לחץ על מספרי החדרים לבחירת חדרים לניקוי',
    zone_overlay_create: 'לחץ על המפה להנחת אזור ניקוי',
    zone_overlay_resize: 'גרור פינות לשינוי גודל, לחץ במקום אחר למיקום מחדש',
    clear_zone: 'נקה אזור',
    switch_to_list: 'עבור לתצוגת רשימה',
    switch_to_map: 'עבור לתצוגת מפה',
    room_list_overlay: 'הקש על חדרים לבחירה לניקוי',
    no_rooms: 'אין חדרים זמינים',
  },

  // Mode Tabs
  modes: {
    room: 'חדר',
    all: 'הכל',
    zone: 'אזור',
  },

  // Action Buttons
  actions: {
    clean: 'נקה',
    clean_all: 'נקה הכל',
    clean_rooms: 'נקה {{count}} חדר',
    clean_rooms_plural: 'נקה {{count}} חדרים',
    select_rooms: 'בחר חדרים',
    zone_clean: 'ניקוי אזור',
    pause: 'השהה',
    resume: 'המשך',
    stop: 'עצור',
    dock: 'עגינה',
  },

  // Toast Messages
  toast: {
    selected_room: 'נבחר {{name}}',
    deselected_room: 'בוטל בחירת {{name}}',
    paused: 'הניקוי הושהה',
    stopped: 'הניקוי הופסק',
    docked: 'חוזר לעגינה',
    cleaning_started: 'הניקוי החל',
    resuming: 'ממשיך ניקוי',
    starting_full_clean: 'מתחיל ניקוי בית מלא',
    pausing_vacuum: 'משהה שואב אבק',
    stopping_vacuum: 'עוצר שואב אבק',
    vacuum_docking: 'שואב האבק חוזר לעגינה',
    starting_room_clean: 'מתחיל ניקוי ל-{{count}} חדר נבחר',
    starting_room_clean_plural: 'מתחיל ניקוי ל-{{count}} חדרים נבחרים',
    starting_zone_clean: 'מתחיל ניקוי אזור',
    select_rooms_first: 'אנא בחר חדרים לניקוי תחילה',
    cannot_determine_map: 'לא ניתן לקבוע את מידות המפה',
    select_zone_first: 'אנא בחר אזור על המפה',
  },

  // Room Selection Display
  room_display: {
    selected_rooms: 'חדרים נבחרים:',
    selected_label: 'נבחרו:',
  },

  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: 'מותאם אישית: ',
    prefix_cleangenius: 'CleanGenius: ',
    view_shortcuts: 'הצג קיצורי דרך',
    vac_and_mop: 'שאיבה וניגוב',
    mop_after_vac: 'ניגוב אחרי שאיבה',
    vacuum: 'שאיבה',
    mop: 'ניגוב',
  },

  // Cleaning Mode Modal
  cleaning_mode: {
    title: 'מצב ניקוי',
    clean_genius: 'CleanGenius',
    custom: 'מותאם אישית',
  },

  // Shortcuts Modal
  shortcuts: {
    title: 'קיצורי דרך',
    no_shortcuts: 'אין קיצורי דרך זמינים',
    create_hint: 'צור קיצורי דרך באפליקציית Dreame להפעלה מהירה של שגרות הניקוי המועדפות שלך',
  },

  // Custom Mode
  custom_mode: {
    cleaning_mode_title: 'מצב ניקוי',
    suction_power_title: 'עוצמת שאיבה',
    max_plus_description: 'עוצמת השאיבה תוגבר לרמה הגבוהה ביותר, זהו מצב חד-פעמי.',
    wetness_title: 'רטיבות',
    slightly_dry: 'יבש מעט',
    moist: 'לח',
    wet: 'רטוב',
    mop_washing_frequency_title: 'תדירות שטיפת המגב',
    route_title: 'מסלול',
  },

  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: 'מצב ניקוי',
    deep_cleaning: 'ניקוי עמוק',
  },

  // Header
  header: {
    battery: 'סוללה',
    status: 'סטטוס',
    area: 'שטח',
    time: 'זמן',
  },

  // Units
  units: {
    square_meters: 'מ"ר',
    minutes: 'דק\'',
    minutes_short: 'ד',
    percent: '%',
    decibels: 'dBm',
  },

  // Suction Levels (friendly names)
  suction_levels: {
    quiet: 'שקט',
    standard: 'רגיל',
    strong: 'טורבו',
    turbo: 'מקסימום',
  },

  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: 'לפי חדר',
    by_area: 'לפי שטח',
    by_time: 'לפי זמן',
  },

  // Errors
  errors: {
    entity_not_found: 'ישות לא נמצאה: {{entity}}',
    failed_to_load: 'טעינת נתוני הישות נכשלה',
  },

  // Settings Panel
  settings: {
    title: 'הגדרות',
    consumables: {
      title: 'חומרים מתכלים',
      main_brush: 'מברשת ראשית',
      side_brush: 'מברשת צד',
      filter: 'פילטר',
      sensor: 'חיישן',
      remaining: 'נותר',
      reset: 'אפס',
    },
    device_info: {
      title: 'פרטי מכשיר',
      firmware: 'קושחה',
      total_area: 'שטח כולל שנוקה',
      total_time: 'זמן ניקוי כולל',
      total_cleans: 'סך ניקויים',
      wifi_ssid: 'רשת Wi-Fi',
      wifi_signal: 'עוצמת אות',
      ip_address: 'כתובת IP',
    },
    map_management: {
      title: 'ניהול מפות',
      description: 'בחר איזו מפה להשתמש לניקוי.',
      no_maps: 'אין מפות זמינות',
    },
    quick_settings: {
      title: 'הגדרות מהירות',
      child_lock: 'נעילת ילדים',
      child_lock_desc: 'השבת כפתורים פיזיים על המכשיר',
      carpet_boost: 'הגברה לשטיחים',
      carpet_boost_desc: 'הגבר שאיבה על שטיחים',
      obstacle_avoidance: 'הימנעות ממכשולים',
      obstacle_avoidance_desc: 'הימנע ממכשולים בעת ניקוי',
      auto_dust_collecting: 'ריקון אוטומטי',
      auto_dust_collecting_desc: 'רוקן את תא האבק אוטומטית',
      auto_drying: 'ייבוש אוטומטי',
      auto_drying_desc: 'ייבש את רפידת המגב לאחר הניקוי',
      dnd: 'אל תפריע',
      dnd_desc: 'שעות שקטות עם פעילות מופחתת',
    },
    volume: {
      title: 'עוצמה וצליל',
      test_sound: 'אתר',
      muted: 'מושתק',
    },
    carpet: {
      title: 'הגדרות שטיח',
      carpet_boost: 'הגברה לשטיחים',
      carpet_boost_desc: 'הגבר עוצמת שאיבה על שטיחים',
      carpet_recognition: 'זיהוי שטיח',
      carpet_recognition_desc: 'זהה שטיחים אוטומטית',
      carpet_avoidance: 'הימנעות משטיחים',
      carpet_avoidance_desc: 'הימנע משטיחים בעת ניגוב',
      sensitivity: 'רגישות שטיח',
      sensitivity_desc: 'רמת רגישות לזיהוי',
      sensitivity_low: 'נמוך',
      sensitivity_medium: 'בינוני',
      sensitivity_high: 'גבוה',
    },
    ai_detection: {
      title: 'בינה מלאכותית וזיהוי',
      obstacle_avoidance: 'הימנעות ממכשולים',
      obstacle_avoidance_desc: 'השתמש בחיישנים להימנעות ממכשולים',
      ai_obstacle_detection: 'זיהוי מכשולים בינה מלאכותית',
      ai_obstacle_detection_desc: 'השתמש בבינה מלאכותית לזיהוי והימנעות ממכשולים',
      ai_obstacle_image_upload: 'העלאת תמונת מכשול',
      ai_obstacle_image_upload_desc: 'העלה תמונות מכשולים לניתוח',
      ai_pet_detection: 'זיהוי חיות מחמד',
      ai_pet_detection_desc: 'זהה והימנע מחיות מחמד',
      ai_human_detection: 'זיהוי אנשים',
      ai_human_detection_desc: 'זהה והימנע מאנשים',
      ai_furniture_detection: 'זיהוי ריהוט',
      ai_furniture_detection_desc: 'זהה ונווט סביב ריהוט',
      ai_fluid_detection: 'זיהוי נוזלים',
      ai_fluid_detection_desc: 'זהה והימנע מנוזלים',
      stain_avoidance: 'הימנעות מכתמים',
      stain_avoidance_desc: 'הימנע מכתמים שזוהו',
      collision_avoidance: 'הימנעות מהתנגשויות',
      collision_avoidance_desc: 'מנע התנגשויות עם עצמים',
      fill_light: 'אור עזר',
      fill_light_desc: 'השתמש באור עזר לזיהוי טוב יותר',
    },
  },
};
