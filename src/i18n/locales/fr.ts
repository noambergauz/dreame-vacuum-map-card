export const fr = {
  // Room Selector
  room_selector: {
    title: 'Sélectionner les pièces',
    selected_count: '{{count}} sélectionnée(s)',
  },

  // Vacuum Map
  vacuum_map: {
    no_map: 'Aucune carte disponible',
    looking_for: 'Recherche de : {{entity}}',
    room_overlay: 'Cliquez sur les numéros des pièces pour les sélectionner',
    zone_overlay_create: 'Cliquez sur la carte pour placer une zone de nettoyage',
    zone_overlay_resize: 'Faites glisser les coins pour redimensionner, cliquez ailleurs pour repositionner',
    clear_zone: 'Effacer la zone',
    switch_to_list: 'Passer en vue liste',
    switch_to_map: 'Passer en vue carte',
    room_list_overlay: 'Touchez les pièces pour les sélectionner',
    no_rooms: 'Aucune pièce disponible',
  },

  // Mode Tabs
  modes: {
    room: 'Pièce',
    all: 'Tout',
    zone: 'Zone',
  },

  // Action Buttons
  actions: {
    clean: 'Nettoyer',
    clean_all: 'Nettoyer tout',
    clean_rooms: 'Nettoyer {{count}} pièce',
    clean_rooms_plural: 'Nettoyer {{count}} pièces',
    select_rooms: 'Sélectionner les pièces',
    zone_clean: 'Nettoyage zone',
    pause: 'Pause',
    resume: 'Reprendre',
    stop: 'Arrêter',
    dock: 'Retour à la base',
  },

  // Toast Messages
  toast: {
    selected_room: '{{name}} sélectionnée',
    deselected_room: '{{name}} désélectionnée',
    paused: 'Nettoyage en pause',
    stopped: 'Nettoyage arrêté',
    docked: 'Retour à la base',
    cleaning_started: 'Nettoyage démarré',
    resuming: 'Reprise du nettoyage',
    starting_full_clean: 'Démarrage nettoyage complet',
    pausing_vacuum: 'Mise en pause de l\'aspirateur',
    stopping_vacuum: 'Arrêt de l\'aspirateur',
    vacuum_docking: 'Aspirateur retourne à la base',
    starting_room_clean: 'Démarrage nettoyage {{count}} pièce sélectionnée',
    starting_room_clean_plural: 'Démarrage nettoyage {{count}} pièces sélectionnées',
    starting_zone_clean: 'Démarrage nettoyage zone',
    select_rooms_first: 'Veuillez sélectionner des pièces à nettoyer',
    cannot_determine_map: 'Impossible de déterminer les dimensions de la carte',
    select_zone_first: 'Veuillez sélectionner une zone sur la carte',
  },

  // Room Selection Display
  room_display: {
    selected_rooms: 'Pièces sélectionnées :',
    selected_label: 'Sélectionné :',
  },

  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: 'Personnalisé : ',
    prefix_cleangenius: 'CleanGenius : ',
    view_shortcuts: 'Voir raccourcis',
    vac_and_mop: 'Aspi & Mop',
    mop_after_vac: 'Mop après Aspi',
    vacuum: 'Aspirateur',
    mop: 'Mop',
  },

  // Cleaning Mode Modal
  cleaning_mode: {
    title: 'Mode de nettoyage',
    clean_genius: 'CleanGenius',
    custom: 'Personnalisé',
  },

  // Shortcuts Modal
  shortcuts: {
    title: 'Raccourcis',
    no_shortcuts: 'Aucun raccourci disponible',
    create_hint: 'Créez des raccourcis dans l\'app Dreame pour lancer rapidement vos routines préférées',
  },

  // Custom Mode
  custom_mode: {
    cleaning_mode_title: 'Mode de nettoyage',
    suction_power_title: 'Puissance d\'aspiration',
    max_plus_description: 'La puissance d\'aspiration sera augmentée au maximum (mode unique).',
    wetness_title: 'Humidité',
    slightly_dry: 'Légèrement sec',
    moist: 'Humide',
    wet: 'Mouillé',
    mop_washing_frequency_title: 'Fréquence lavage mop',
    route_title: 'Trajet',
  },

  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: 'Mode de nettoyage',
    deep_cleaning: 'Nettoyage profond',
  },

  // Header
  header: {
    battery: 'Batterie',
    status: 'Statut',
    area: 'Surface',
    time: 'Temps',
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
    quiet: 'Silencieux',
    standard: 'Standard',
    strong: 'Turbo',
    turbo: 'Max',
  },

  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: 'Par pièce',
    by_area: 'Par surface',
    by_time: 'Par temps',
  },

  // Errors
  errors: {
    entity_not_found: 'Entité non trouvée : {{entity}}',
    failed_to_load: 'Échec chargement données entité',
  },

  // Settings Panel
  settings: {
    title: 'Paramètres',
    consumables: {
      title: 'Consommables',
      main_brush: 'Brosse principale',
      side_brush: 'Brosse latérale',
      filter: 'Filtre',
      sensor: 'Capteur',
      remaining: 'restant',
      reset: 'Réinitialiser',
    },
    device_info: {
      title: 'Infos appareil',
      firmware: 'Firmware',
      total_area: 'Surface totale nettoyée',
      total_time: 'Temps total nettoyage',
      total_cleans: 'Nettoyages totaux',
      wifi_ssid: 'Réseau Wi-Fi',
      wifi_signal: 'Puissance signal',
      ip_address: 'Adresse IP',
    },
    map_management: {
      title: 'Gestion cartes',
      description: 'Sélectionnez la carte à utiliser pour le nettoyage.',
      no_maps: 'Aucune carte disponible',
    },
    quick_settings: {
      title: 'Réglages rapides',
      child_lock: 'Verrou enfant',
      child_lock_desc: 'Désactive les boutons physiques',
      carpet_boost: 'Boost tapis',
      carpet_boost_desc: 'Augmente aspiration sur tapis',
      obstacle_avoidance: 'Évitement obstacles',
      obstacle_avoidance_desc: 'Évite obstacles pendant nettoyage',
      auto_dust_collecting: 'Vidage auto',
      auto_dust_collecting_desc: 'Vide automatiquement bac à poussière',
      auto_drying: 'Séchage auto',
      auto_drying_desc: 'Sèche serpillière après nettoyage',
      dnd: 'Ne pas déranger',
      dnd_desc: 'Heures silencieuses activité réduite',
    },
    volume: {
      title: 'Volume & Son',
      test_sound: 'Localiser',
      muted: 'Muet',
    },
    carpet: {
      title: 'Réglages tapis',
      carpet_boost: 'Boost tapis',
      carpet_boost_desc: 'Augmente puissance sur tapis',
      carpet_recognition: 'Détection tapis',
      carpet_recognition_desc: 'Détecte automatiquement tapis',
      carpet_avoidance: 'Évitement tapis',
      carpet_avoidance_desc: 'Évite tapis pendant moppage',
      sensitivity: 'Sensibilité tapis',
      sensitivity_desc: 'Niveau sensibilité détection',
      sensitivity_low: 'Faible',
      sensitivity_medium: 'Moyen',
      sensitivity_high: 'Élevé',
    },
    ai_detection: {
      title: 'IA & Détection',
      obstacle_avoidance: 'Évitement obstacles',
      obstacle_avoidance_desc: 'Utilise capteurs pour éviter obstacles',
      ai_obstacle_detection: 'Détection IA obstacles',
      ai_obstacle_detection_desc: 'Utilise IA pour identifier obstacles',
      ai_obstacle_image_upload: 'Upload images obstacles',
      ai_obstacle_image_upload_desc: 'Upload images obstacles analyse',
      ai_pet_detection: 'Détection animaux',
      ai_pet_detection_desc: 'Détecte et évite animaux',
      ai_human_detection: 'Détection humains',
      ai_human_detection_desc: 'Détecte et évite humains',
      ai_furniture_detection: 'Détection meubles',
      ai_furniture_detection_desc: 'Détecte et navigue autour meubles',
      ai_fluid_detection: 'Détection liquides',
      ai_fluid_detection_desc: 'Détecte et évite liquides',
      stain_avoidance: 'Évitement taches',
      stain_avoidance_desc: 'Évite taches détectées',
      collision_avoidance: 'Évitement collisions',
      collision_avoidance_desc: 'Évite collisions objets',
      fill_light: 'Lumière d\'appoint',
      fill_light_desc: 'Utilise lumière pour meilleure détection',
    },
  },
};

export type Translation = typeof fr;
