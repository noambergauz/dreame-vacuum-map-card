import type { Translation } from './en';

export const fr_FR: Translation = {
  // Room selector
  room_selector: {
    title: 'Sélectionner des pièces',
    selected_count: '{{count}} sélectionnée(s)',
  },

  // Map Selector
  map_selector: {
    unknown: 'Carte inconnue',
  },

  // Vacuum map
  vacuum_map: {
    no_map: 'Aucune carte disponible',
    looking_for: 'Recherche de : {{entity}}',
    room_overlay: 'Cliquez sur les numéros pour sélectionner les pièces à nettoyer',
    zone_overlay_create: 'Cliquez sur la carte pour placer une zone de nettoyage',
    zone_overlay_resize: 'Faites glisser les coins pour redimensionner, cliquez ailleurs pour repositionner',
    clear_zone: 'Effacer la zone',
    switch_to_list: 'Passer à la vue liste',
    switch_to_map: 'Passer à la vue carte',
    room_list_overlay: 'Appuyez sur les pièces pour les sélectionner',
    no_rooms: 'Aucune pièce configurée',
    zoom_in: 'Zoom avant',
    zoom_out: 'Zoom arrière',
    zoom_reset: 'Réinitialiser le zoom',
    lock_map: 'Verrouiller la carte',
    unlock_map: 'Déverrouiller la carte',
  },

  // Mode tabs
  modes: {
    room: 'Pièce',
    all: 'Tout',
    zone: 'Zone',
  },

  // Action buttons
  actions: {
    clean: 'Nettoyer',
    clean_all: 'Tout nettoyer',
    clean_rooms: 'Nettoyer {{count}} pièce',
    clean_rooms_plural: 'Nettoyer {{count}} pièces',
    select_rooms: 'Sélectionner des pièces',
    zone_clean: 'Nettoyage de zone',
    pause: 'Pause',
    resume: 'Reprendre',
    stop: 'Arrêter',
    stop_and_dock: 'Arrêter et charger',
    dock: 'Charger',
  },

  // Toast messages
  toast: {
    selected_room: '{{name}} sélectionné(e)',
    deselected_room: '{{name}} désélectionné(e)',
    paused: 'Nettoyage mis en pause',
    stopped: 'Nettoyage arrêté',
    docked: 'Retour à la base',
    cleaning_started: 'Nettoyage démarré',
    resuming: 'Reprise du nettoyage',
    starting_full_clean: 'Démarrage du nettoyage complet',
    pausing_vacuum: "Mise en pause de l'aspirateur",
    stopping_vacuum: "Arrêt de l'aspirateur",
    stopping_and_docking: 'Arrêt et retour à la base',
    vacuum_docking: "L'aspirateur retourne à sa base",
    starting_room_clean: 'Démarrage du nettoyage de la pièce sélectionnée',
    starting_room_clean_plural: 'Démarrage du nettoyage des {{count}} pièces sélectionnées',
    starting_zone_clean: 'Démarrage du nettoyage de zone',
    select_rooms_first: "Veuillez d'abord sélectionner des pièces",
    cannot_determine_map: 'Impossible de déterminer les dimensions de la carte',
    select_zone_first: 'Veuillez sélectionner une zone sur la carte',
  },

  // Room selection display
  room_display: {
    selected_rooms: 'Pièces sélectionnées :',
    selected_label: 'Sélection :',
  },

  // Cleaning mode button
  cleaning_mode_button: {
    prefix_custom: 'Personnalisé : ',
    prefix_cleangenius: 'CleanGenius : ',
    view_shortcuts: 'Voir les raccourcis',
    repeats_tooltip: 'Passages de nettoyage',
    vac_and_mop: 'Aspi & Lavage',
    mop_after_vac: 'Lavage après Aspi',
    vacuum: 'Aspirateur',
    mop: 'Serpillère',
  },

  // Cleaning mode modal
  cleaning_mode: {
    title: 'Mode de nettoyage',
    clean_genius: 'CleanGenius',
    custom: 'Personnalisé',
  },

  // Shortcuts modal
  shortcuts: {
    title: 'Raccourcis',
    no_shortcuts: 'Aucun raccourci disponible',
    create_hint: "Créez des raccourcis dans l'application Dreame pour lancer rapidement vos routines préférées",
  },

  // Custom mode
  custom_mode: {
    cleaning_mode_title: 'Mode de nettoyage',
    suction_power_title: "Puissance d'aspiration",
    max_plus_description: 'La puissance sera augmentée au niveau maximum (usage unique).',
    wetness_title: "Débit d'eau",
    slightly_dry: 'Sec',
    moist: 'Standard',
    wet: 'Humide',
    mop_washing_frequency_title: 'Fréquence de lavage de serpillère',
    route_title: 'Trajectoire de nettoyage',
  },

  // Customize Cleaning Mode
  customize: {
    title: 'Personnaliser',
    description: "Définir les préférences d'aspiration et de lavage pour chaque zone.",
    set_button: 'Définir',
    vacuum: 'Aspirateur',
    mop: 'Serpillère',
    vac_and_mop: 'Aspi & Lavage',
    cycles: 'Cycles',
    apply_to_all: 'Appliquer à toutes les pièces',
    click_room_hint: 'Cliquez sur une zone pour changer le mode.',
    intelligent_recommendation: 'Recommandation intelligente',
    select_room: 'Sélectionner une pièce',
    settings_for: 'Paramètres de {{room}}',
    no_rooms: 'Aucune pièce disponible',
  },

  // CleanGenius mode
  cleangenius_mode: {
    cleaning_mode_title: 'Mode de nettoyage',
    deep_cleaning: 'Nettoyage approfondi',
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

  // Suction levels
  suction_levels: {
    quiet: 'Silencieux',
    standard: 'Standard',
    strong: 'Fort',
    turbo: 'Turbo',
  },

  // Mop washing frequency
  mop_washing_frequency: {
    by_room: 'Par pièce',
    by_area: 'Par surface',
    by_time: 'Par durée',
  },

  // Cleaning Routes
  cleaning_routes: {
    quick: 'Rapide',
    standard: 'Standard',
    intensive: 'Intensif',
    deep: 'Profond',
  },

  // Errors
  errors: {
    entity_not_found: 'Entité introuvable : {{entity}}',
    failed_to_load: 'Échec du chargement des données',
  },

  // Settings panel
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
      firmware: 'Version du firmware',
      total_area: 'Surface totale nettoyée',
      total_time: 'Temps total de nettoyage',
      total_cleans: 'Nombre total de nettoyages',
      wifi_ssid: 'Réseau Wi-Fi',
      wifi_signal: 'Force du signal',
      ip_address: 'Adresse IP',
    },
    map_management: {
      title: 'Gestion des cartes',
      description: 'Sélectionnez la carte à utiliser.',
      no_maps: 'Aucune carte disponible',
    },
    quick_settings: {
      title: 'Réglages rapides',
      child_lock: 'Verrouillage enfant',
      child_lock_desc: 'Désactiver les boutons physiques',
      carpet_boost: 'Boost tapis',
      carpet_boost_desc: "Augmenter l'aspiration sur les tapis",
      obstacle_avoidance: "Évitement d'obstacles",
      obstacle_avoidance_desc: 'Éviter les objets durant le nettoyage',
      auto_dust_collecting: 'Vidage automatique',
      auto_dust_collecting_desc: 'Vider automatiquement le bac à poussière',
      auto_drying: 'Séchage automatique',
      auto_drying_desc: 'Sécher la serpillère après nettoyage',
      dnd: 'Ne pas déranger',
      dnd_desc: 'Heures silencieuses avec activité réduite',
    },
    volume: {
      title: 'Volume & Son',
      test_sound: "Localiser l'aspirateur",
      muted: 'Muet',
    },
    carpet: {
      title: 'Paramètres tapis',
      carpet_boost: 'Boost tapis',
      carpet_boost_desc: 'Puissance max sur les tapis',
      carpet_recognition: 'Reconnaissance de tapis',
      carpet_recognition_desc: 'Détecter automatiquement les tapis',
      carpet_avoidance: 'Évitement de tapis',
      carpet_avoidance_desc: 'Ne pas passer sur les tapis avec la serpillère',
      sensitivity: 'Sensibilité tapis',
      sensitivity_desc: 'Niveau de sensibilité de détection',
      sensitivity_low: 'Faible',
      sensitivity_medium: 'Moyenne',
      sensitivity_high: 'Élevée',
    },
    ai_detection: {
      title: 'IA & Détection',
      obstacle_avoidance: "Évitement d'obstacles",
      obstacle_avoidance_desc: 'Utiliser les capteurs pour éviter les obstacles',
      ai_obstacle_detection: "Détection d'obstacles par IA",
      ai_obstacle_detection_desc: "Utiliser l'IA pour identifier les obstacles",
      ai_obstacle_image_upload: "Envoi d'images d'obstacles",
      ai_obstacle_image_upload_desc: 'Envoyer les images pour analyse',
      ai_pet_detection: "Détection d'animaux",
      ai_pet_detection_desc: 'Détecter et éviter les animaux',
      ai_human_detection: 'Détection humaine',
      ai_human_detection_desc: 'Détecter et éviter les personnes',
      ai_furniture_detection: 'Détection de meubles',
      ai_furniture_detection_desc: 'Naviguer autour des meubles',
      ai_fluid_detection: 'Détection de liquides',
      ai_fluid_detection_desc: 'Détecter et éviter les flaques',
      stain_avoidance: 'Évitement des taches',
      stain_avoidance_desc: 'Éviter les taches détectées',
      collision_avoidance: 'Évitement de collision',
      collision_avoidance_desc: 'Prévenir les chocs avec les objets',
      fill_light: "Lumière d'appoint",
      fill_light_desc: 'Utiliser la lumière pour une meilleure détection',
    },
    station_controls: {
      title: 'Contrôles de la station',
      self_clean: 'Auto-nettoyage',
      self_clean_desc: 'Démarrer le cycle de lavage de la serpillère',
      manual_drying: 'Séchage manuel',
      manual_drying_desc: 'Démarrer le cycle de séchage de la serpillère',
      water_tank_draining: 'Vidange du réservoir',
      water_tank_draining_desc: "Vidanger l'eau sale du réservoir",
      base_station_cleaning: 'Nettoyage de la station',
      base_station_cleaning_desc: 'Nettoyer la station de base',
      empty_water_tank: 'Vider le réservoir',
      empty_water_tank_desc: "Vider le réservoir de collecte d'eau",
    },
  },
};
