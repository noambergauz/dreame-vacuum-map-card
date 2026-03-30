export const he = {
  // Room Selector
  room_selector: {
    title: 'בחירת חדרים',
    selected_count: '{{count}} נבחרו',
  },

  // Vacuum Map
  vacuum_map: {
    no_map: 'אין מפה זמינה',
    looking_for: 'מחפש את: {{entity}}',
    room_overlay: 'לחץ על מספרי החדרים כדי לבחור חדרים לניקוי',
    zone_overlay_create: 'לחץ על המפה כדי להציב אזור לניקוי',
    zone_overlay_resize: 'גרור את הפינות לשינוי גודל, לחץ במקום אחר כדי להזיז',
    clear_zone: 'הסר אזור',
    switch_to_list: 'עבור לתצוגת רשימה',
    switch_to_map: 'עבור לתצוגת מפה',
    room_list_overlay: 'הקש על חדרים כדי לבחור אותם לניקוי',
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
    clean_rooms: 'נקה חדר {{count}}',
    clean_rooms_plural: 'נקה {{count}} חדרים',
    select_rooms: 'בחר חדרים',
    zone_clean: 'ניקוי אזורי',
    pause: 'השהה',
    resume: 'המשך',
    stop: 'עצור',
    dock: 'חזור לעמדה',
  },

  // Toast Messages
  toast: {
    selected_room: 'נבחר {{name}}',
    deselected_room: 'בוטל בחירת {{name}}',
    paused: 'הניקוי הושהה',
    stopped: 'הניקוי הופסק',
    docked: 'חוזר לעמדה',
    cleaning_started: 'הניקוי התחיל',
    resuming: 'ממשיך בניקוי',
    starting_full_clean: 'מתחיל ניקוי של כל הבית',
    pausing_vacuum: 'משהה את השואב',
    stopping_vacuum: 'עוצר את השואב',
    vacuum_docking: 'השואב חוזר לעמדה',
    starting_room_clean: 'מתחיל ניקוי עבור חדר {{count}} שנבחר',
    starting_room_clean_plural: 'מתחיל ניקוי עבור {{count}} חדרים שנבחרו',
    starting_zone_clean: 'מתחיל ניקוי אזורי',
    select_rooms_first: 'אנא בחר חדרים לניקוי תחילה',
    cannot_determine_map: 'לא ניתן לקבוע את מידות המפה',
    select_zone_first: 'אנא בחר אזור במפה',
  },

  // Room Selection Display
  room_display: {
    selected_rooms: 'חדרים שנבחרו:',
    selected_label: 'נבחרו:',
  },

  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: 'מותאם אישית: ',
    prefix_cleangenius: 'CleanGenius: ',
    view_shortcuts: 'הצג קיצורי דרך',
    vac_and_mop: 'שאיבה ושטיפה',
    mop_after_vac: 'שטיפה אחרי שאיבה',
    vacuum: 'שאיבה',
    mop: 'שטיפה',
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
    create_hint: 'צור קיצורי דרך באפליקציית Dreame כדי להתחיל במהירות את שגרות הניקוי האהובות עליך',
  },

  // Custom Mode
  custom_mode: {
    cleaning_mode_title: 'מצב ניקוי',
    suction_power_title: 'עוצמת שאיבה',
    max_plus_description: 'עוצמת השאיבה תוגבר לרמה הגבוהה ביותר, זהו מצב לשימוש חד-פעמי.',
    wetness_title: 'רמת לחות',
    slightly_dry: 'יבש במקצת',
    moist: 'לח',
    wet: 'רטוב',
    mop_washing_frequency_title: 'תדירות שטיפת המטלית',
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
    minutes_short: 'ד\'',
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
    entity_not_found: 'הישות לא נמצאה: {{entity}}',
    failed_to_load: 'טעינת נתוני הישות נכשלה',
  },

  // Settings Panel
  settings: {
    title: 'הגדרות',
    consumables: {
      title: 'מתכלים',
      main_brush: 'מברשת ראשית',
      side_brush: 'מברשת צד',
      filter: 'מסנן',
      sensor: 'חיישנים',
      remaining: 'נותר',
      reset: 'איפוס',
    },
    device_info: {
      title: 'פרטי מכשיר',
      firmware: 'קושחה',
      total_area: 'סה"כ שטח שנוקה',
      total_time: 'סה"כ זמן ניקוי',
      total_cleans: 'סה"כ ניקיונות',
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
      child_lock_desc: 'השבת כפתורים פיזיים במכשיר',
      carpet_boost: 'הגברת שאיבה לשטיחים',
      carpet_boost_desc: 'הגבר את עוצמת השאיבה על שטיחים',
      obstacle_avoidance: 'הימנעות ממכשולים',
      obstacle_avoidance_desc: 'הימנע ממכשולים במהלך הניקוי',
      auto_dust_collecting: 'ריקון אוטומטי',
      auto_dust_collecting_desc: 'רוקן אוטומטית את מכל האבק',
      auto_drying: 'ייבוש אוטומטי',
      auto_drying_desc: 'ייבש את מטלית השטיפה לאחר הניקוי',
      dnd: 'נא לא להפריע',
      dnd_desc: 'שעות שקטות עם פעילות מופחתת',
    },
    volume: {
      title: 'עוצמת שמע וקול',
      test_sound: 'איתור',
      muted: 'מושתק',
    },
    carpet: {
      title: 'הגדרות שטיחים',
      carpet_boost: 'הגברת שאיבה לשטיחים',
      carpet_boost_desc: 'הגבר את עוצמת השאיבה על שטיחים',
      carpet_recognition: 'זיהוי שטיחים',
      carpet_recognition_desc: 'זהה שטיחים באופן אוטומטי',
      carpet_avoidance: 'הימנעות משטיחים',
      carpet_avoidance_desc: 'הימנע משטיחים במהלך שטיפה',
      sensitivity: 'רגישות לשטיחים',
      sensitivity_desc: 'רמת הרגישות לזיהוי',
      sensitivity_low: 'נמוכה',
      sensitivity_medium: 'בינונית',
      sensitivity_high: 'גבוהה',
    },
    ai_detection: {
      title: 'בינה מלאכותית וזיהוי',
      obstacle_avoidance: 'הימנעות ממכשולים',
      obstacle_avoidance_desc: 'שימוש בחיישנים כדי להימנע ממכשולים',
      ai_obstacle_detection: 'זיהוי מכשולים מבוסס AI',
      ai_obstacle_detection_desc: 'שימוש ב-AI כדי לזהות ולהימנע ממכשולים',
      ai_obstacle_image_upload: 'העלאת תמונות מכשולים',
      ai_obstacle_image_upload_desc: 'העלאת תמונות של מכשולים לניתוח',
      ai_pet_detection: 'זיהוי חיות מחמד',
      ai_pet_detection_desc: 'זהה והימנע מחיות מחמד',
      ai_human_detection: 'זיהוי בני אדם',
      ai_human_detection_desc: 'זהה והימנע מבני אדם',
      ai_furniture_detection: 'זיהוי רהיטים',
      ai_furniture_detection_desc: 'זהה ונווט מסביב לרהיטים',
      ai_fluid_detection: 'זיהוי נוזלים',
      ai_fluid_detection_desc: 'זהה והימנע מנוזלים',
      stain_avoidance: 'הימנעות מכתמים',
      stain_avoidance_desc: 'הימנע מכתמים שזוהו',
      collision_avoidance: 'מניעת התנגשויות',
      collision_avoidance_desc: 'מנע התנגשויות בעצמים',
      fill_light: 'תאורת עזר',
      fill_light_desc: 'השתמש בתאורת עזר לזיהוי טוב יותר',
    },
  },
};

export type Translation = typeof he;