import type { Translation } from './en';

export const he: Translation = {
  // בחירת חדרים
  room_selector: {
    title: 'בחר חדרים',
    selected_count: '{{count}} נבחרו',
  },

  // מפת שואב
  vacuum_map: {
    no_map: 'אין מפה זמינה',
    looking_for: 'מחפש את: {{entity}}',
    room_overlay: 'לחץ על מספרי החדרים כדי לבחור חדרים לניקוי',
    zone_overlay_create: 'לחץ על המפה כדי להוסיף אזור ניקוי',
    zone_overlay_resize: 'גרור את הפינות לשינוי גודל, לחץ במקום אחר לשינוי מיקום',
    clear_zone: 'נקה אזור',
    switch_to_list: 'עבור לתצוגת רשימה',
    switch_to_map: 'עבור לתצוגת מפה',
    room_list_overlay: 'לחץ על חדרים כדי לבחור לניקוי',
    no_rooms: 'אין חדרים זמינים',
    zoom_in: 'הגדל',
    zoom_out: 'הקטן',
    zoom_reset: 'אפס זום',
  },

  // לשוניות מצבים
  modes: {
    room: 'חדר',
    all: 'הכל',
    zone: 'אזור',
  },

  // כפתורי פעולה
  actions: {
    clean: 'נקה',
    clean_all: 'נקה הכל',
    clean_rooms: 'נקה חדר {{count}}',
    clean_rooms_plural: 'נקה {{count}} חדרים',
    select_rooms: 'בחר חדרים',
    zone_clean: 'ניקוי אזור',
    pause: 'השהה',
    resume: 'המשך',
    stop: 'עצור',
    dock: 'עמדת טעינה',
  },

  // הודעות קופצות (Toast)
  toast: {
    selected_room: 'נבחר {{name}}',
    deselected_room: 'בוטל {{name}}',
    paused: 'הניקוי הושהה',
    stopped: 'הניקוי הופסק',
    docked: 'חוזר לעמדת טעינה',
    cleaning_started: 'הניקוי התחיל',
    resuming: 'ממשיך ניקוי',
    starting_full_clean: 'מתחיל ניקוי של כל הבית',
    pausing_vacuum: 'משהה שואב',
    stopping_vacuum: 'עוצר שואב',
    vacuum_docking: 'השואב חוזר לעמדת טעינה',
    starting_room_clean: 'מתחיל ניקוי עבור חדר {{count}} שנבחר',
    starting_room_clean_plural: 'מתחיל ניקוי עבור {{count}} חדרים שנבחרו',
    starting_zone_clean: 'מתחיל ניקוי אזור',
    select_rooms_first: 'אנא בחר חדרים לניקוי תחילה',
    cannot_determine_map: 'לא ניתן לקבוע את מידות המפה',
    select_zone_first: 'אנא בחר אזור על המפה',
  },

  // תצוגת בחירת חדרים
  room_display: {
    selected_rooms: 'חדרים שנבחרו:',
    selected_label: 'נבחרו:',
  },

  // כפתור מצב ניקוי
  cleaning_mode_button: {
    prefix_custom: 'מותאם אישית: ',
    prefix_cleangenius: 'CleanGenius: ',
    view_shortcuts: 'צפה בקיצורי דרך',
    vac_and_mop: 'שאיבה ושטיפה',
    mop_after_vac: 'שטיפה אחרי שאיבה',
    vacuum: 'שאיבה',
    mop: 'שטיפה',
  },

  // מודאל מצב ניקוי
  cleaning_mode: {
    title: 'מצב ניקוי',
    clean_genius: 'CleanGenius',
    custom: 'מותאם אישית',
  },

  // מודאל קיצורי דרך
  shortcuts: {
    title: 'קיצורי דרך',
    no_shortcuts: 'אין קיצורי דרך זמינים',
    create_hint: 'צור קיצורי דרך באפליקציית Dreame כדי להפעיל במהירות את תוכניות הניקוי המועדפות עליך',
  },

  // מצב מותאם אישית
  custom_mode: {
    cleaning_mode_title: 'מצב ניקוי',
    suction_power_title: 'עוצמת שאיבה',
    max_plus_description: 'עוצמת השאיבה תוגבר לרמה הגבוהה ביותר, זהו מצב לשימוש חד-פעמי.',
    wetness_title: 'רמת רטיבות',
    slightly_dry: 'מעט יבש',
    moist: 'לח',
    wet: 'רטוב',
    mop_washing_frequency_title: 'תדירות שטיפת סמרטוט',
    route_title: 'מסלול',
  },

  // מצב CleanGenius
  cleangenius_mode: {
    cleaning_mode_title: 'מצב ניקוי',
    deep_cleaning: 'ניקוי עמוק',
  },

  // כותרת (Header)
  header: {
    battery: 'סוללה',
    status: 'סטטוס',
    area: 'שטח',
    time: 'זמן',
  },

  // יחידות מידה
  units: {
    square_meters: 'מ"ר',
    minutes: "דק'",
    minutes_short: "ד'",
    percent: '%',
    decibels: 'dBm',
  },

  // רמות שאיבה
  suction_levels: {
    quiet: 'שקט',
    standard: 'סטנדרטי',
    strong: 'טורבו',
    turbo: 'מקסימום',
  },

  // תדירות שטיפת סמרטוט
  mop_washing_frequency: {
    by_room: 'לפי חדר',
    by_area: 'לפי שטח',
    by_time: 'לפי זמן',
  },

  // שגיאות
  errors: {
    entity_not_found: 'ישות לא נמצאה: {{entity}}',
    failed_to_load: 'טעינת נתוני ישות נכשלה',
  },

  // פאנל הגדרות
  settings: {
    title: 'הגדרות',
    consumables: {
      title: 'חלקי חילוף',
      main_brush: 'מברשת ראשית',
      side_brush: 'מברשת צד',
      filter: 'מסנן',
      sensor: 'חיישן',
      remaining: 'נותרו',
      reset: 'איפוס',
    },
    device_info: {
      title: 'מידע על המכשיר',
      firmware: 'גרסת קושחה',
      total_area: 'סה"כ שטח שנוקה',
      total_time: 'סה"כ זמן ניקוי',
      total_cleans: 'סה"כ סבבי ניקוי',
      wifi_ssid: 'רשת Wi-Fi',
      wifi_signal: 'עוצמת אות',
      ip_address: 'כתובת IP',
    },
    map_management: {
      title: 'ניהול מפות',
      description: 'בחר באיזו מפה להשתמש לניקוי.',
      no_maps: 'אין מפות זמינות',
    },
    quick_settings: {
      title: 'הגדרות מהירות',
      child_lock: 'נעילת ילדים',
      child_lock_desc: 'ביטול הלחצנים הפיזיים במכשיר',
      carpet_boost: 'הגברת שאיבה על שטיחים',
      carpet_boost_desc: 'הגברת עוצמת השאיבה בזיהוי שטיח',
      obstacle_avoidance: 'הימנעות ממכשולים',
      obstacle_avoidance_desc: 'הימנעות ממכשולים בזמן הניקוי',
      auto_dust_collecting: 'ריקון עצמי',
      auto_dust_collecting_desc: 'ריקון אוטומטי של מכל האבק',
      auto_drying: 'ייבוש אוטומטי',
      auto_drying_desc: 'ייבוש הסמרטוט לאחר הניקוי',
      dnd: 'נא לא להפריע',
      dnd_desc: 'שעות שקטות עם פעילות מופחתת',
    },
    volume: {
      title: 'עוצמת קול וצליל',
      test_sound: 'אתר מכשיר',
      muted: 'מושתק',
    },
    carpet: {
      title: 'הגדרות שטיח',
      carpet_boost: 'הגברת שאיבה על שטיחים',
      carpet_boost_desc: 'הגברת עוצמת השאיבה על שטיחים',
      carpet_recognition: 'זיהוי שטיחים',
      carpet_recognition_desc: 'זיהוי אוטומטי של שטיחים',
      carpet_avoidance: 'הימנעות משטיחים',
      carpet_avoidance_desc: 'הימנעות משטיחים בזמן שטיפה',
      sensitivity: 'רגישות לזיהוי שטיחים',
      sensitivity_desc: 'רמת רגישות הזיהוי',
      sensitivity_low: 'נמוכה',
      sensitivity_medium: 'בינונית',
      sensitivity_high: 'גבוהה',
    },
    ai_detection: {
      title: 'בינה מלאכותית וזיהוי',
      obstacle_avoidance: 'הימנעות ממכשולים',
      obstacle_avoidance_desc: 'שימוש בחיישנים להימנעות ממכשולים',
      ai_obstacle_detection: 'זיהוי מכשולים מבוסס AI',
      ai_obstacle_detection_desc: 'שימוש ב-AI לזיהוי והימנעות ממכשולים',
      ai_obstacle_image_upload: 'העלאת תמונות מכשולים',
      ai_obstacle_image_upload_desc: 'העלאת תמונות מכשולים לניתוח',
      ai_pet_detection: 'זיהוי חיות מחמד',
      ai_pet_detection_desc: 'זיהוי והימנעות מחיות מחמד',
      ai_human_detection: 'זיהוי בני אדם',
      ai_human_detection_desc: 'זיהוי והימנעות מבני אדם',
      ai_furniture_detection: 'זיהוי רהיטים',
      ai_furniture_detection_desc: 'זיהוי וניווט סביב רהיטים',
      ai_fluid_detection: 'זיהוי נוזלים',
      ai_fluid_detection_desc: 'זיהוי והימנעות מנוזלים',
      stain_avoidance: 'הימנעות מכתמים',
      stain_avoidance_desc: 'הימנעות מכתמים שזוהו',
      collision_avoidance: 'מניעת התנגשות',
      collision_avoidance_desc: 'מניעת התנגשות בחפצים',
      fill_light: 'תאורת עזר',
      fill_light_desc: 'שימוש בתאורת עזר לזיהוי טוב יותר',
    },
  },
};
