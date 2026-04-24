import type { Translation } from './en';

export const ko: Translation = {
  // Room Selector
  room_selector: {
    title: '방 선택',
    selected_count: '{{count}}개 선택됨',
  },

  // Map Selector
  map_selector: {
    unknown: '알 수 없는 맵',
  },

  // Vacuum Map
  vacuum_map: {
    no_map: '사용 가능한 맵이 없습니다',
    looking_for: '검색 중: {{entity}}',
    room_overlay: '방 번호를 클릭하여 청소할 방을 선택하세요',
    zone_overlay_create: '맵을 클릭하여 청소 구역을 지정하세요',
    zone_overlay_resize: '모서리를 드래그하여 크기를 조절하거나, 다른 곳을 클릭하여 위치를 이동하세요',
    clear_zone: '구역 지우기',
    switch_to_list: '목록 보기로 전환',
    switch_to_map: '맵 보기로 전환',
    room_list_overlay: '청소할 방을 탭하여 선택하세요',
    no_rooms: '사용 가능한 방이 없습니다',
    zoom_in: '확대',
    zoom_out: '축소',
    zoom_reset: '확대/축소 초기화',
    lock_map: '맵 잠금',
    unlock_map: '맵 잠금 해제',
  },

  // Mode Tabs
  modes: {
    room: '방',
    all: '전체',
    zone: '구역',
  },

  // Action Buttons
  actions: {
    clean: '청소',
    clean_all: '전체 청소',
    clean_rooms: '{{count}}개 방 청소',
    clean_rooms_plural: '{{count}}개 방 청소',
    select_rooms: '방 선택',
    zone_clean: '구역 청소',
    pause: '일시 정지',
    resume: '재개',
    stop: '중지',
    stop_and_dock: '중지 및 도크 복귀',
    dock: '도크 복귀',
  },

  // Toast Messages
  toast: {
    selected_room: '{{name}} 선택됨',
    deselected_room: '{{name}} 선택 해제됨',
    paused: '청소가 일시 정지되었습니다',
    stopped: '청소가 중지되었습니다',
    docked: '도크로 복귀 중입니다',
    cleaning_started: '청소를 시작했습니다',
    resuming: '청소를 재개합니다',
    starting_full_clean: '전체 집 청소를 시작합니다',
    pausing_vacuum: '청소기 일시 정지 중',
    stopping_vacuum: '청소기 중지 중',
    stopping_and_docking: '청소기 중지 및 도크 복귀 중',
    vacuum_docking: '청소기가 도크로 복귀 중입니다',
    starting_room_clean: '선택한 {{count}}개 방 청소를 시작합니다',
    starting_room_clean_plural: '선택한 {{count}}개 방 청소를 시작합니다',
    starting_zone_clean: '구역 청소를 시작합니다',
    select_rooms_first: '먼저 청소할 방을 선택해 주세요',
    cannot_determine_map: '맵 크기를 확인할 수 없습니다',
    select_zone_first: '먼저 맵에서 구역을 선택해 주세요',
  },

  // Room Selection Display
  room_display: {
    selected_rooms: '선택된 방:',
    selected_label: '선택 항목:',
  },

  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: '맞춤: ',
    prefix_cleangenius: 'CleanGenius: ',
    view_shortcuts: '단축키 보기',
    repeats_tooltip: '반복 횟수',
    vac_and_mop: '진공 및 물걸레',
    mop_after_vac: '진공 후 물걸레',
    vacuum: '진공',
    mop: '물걸레',
  },

  // Cleaning Mode Modal
  cleaning_mode: {
    title: '청소 모드',
    clean_genius: 'CleanGenius',
    custom: '맞춤 설정',
  },

  // Shortcuts Modal
  shortcuts: {
    title: '단축키',
    no_shortcuts: '사용 가능한 단축키가 없습니다',
    create_hint: 'Dreame 앱에서 단축키를 만들어 자주 사용하는 청소 루틴을 빠르게 시작하세요',
  },

  // Custom Mode
  custom_mode: {
    cleaning_mode_title: '청소 모드',
    suction_power_title: '흡입력',
    max_plus_description: '흡입력을 최고 수준으로 올립니다. 일회성 모드입니다.',
    wetness_title: '물걸레 습도',
    slightly_dry: '약간 건조',
    moist: '촉촉하게',
    wet: '젖음',
    mop_washing_frequency_title: '물걸레 세척 빈도',
    route_title: '경로',
  },

  // Customize Cleaning Mode
  customize: {
    title: '사용자 지정',
    description: '각 구역에 대한 흡입력 및 물걸레 설정을 지정하세요.',
    set_button: '설정',
    vacuum: '진공',
    mop: '물걸레',
    vac_and_mop: '진공 및 물걸레',
    cycles: '반복 횟수',
    apply_to_all: '모든 방에 적용',
    click_room_hint: '개별 구역을 클릭하여 모드를 변경하세요.',
    intelligent_recommendation: '지능형 추천',
    select_room: '방 선택',
    settings_for: '{{room}} 설정',
    no_rooms: '사용 가능한 방이 없습니다',
  },

  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: '청소 모드',
    deep_cleaning: '딥 클리닝',
  },

  // Header
  header: {
    battery: '배터리',
    status: '상태',
    area: '면적',
    time: '시간',
  },

  // Units
  units: {
    square_meters: 'm²',
    minutes: '분',
    minutes_short: '분',
    percent: '%',
    decibels: 'dBm',
  },

  // Suction Levels (friendly names)
  suction_levels: {
    quiet: '저소음',
    standard: '표준',
    strong: '터보',
    turbo: '최대',
  },

  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: '방별',
    by_area: '면적별',
    by_time: '시간별',
  },

  // Cleaning Routes
  cleaning_routes: {
    quick: '빠르게',
    standard: '표준',
    intensive: '집중',
    deep: '딥 클리닝',
  },

  // Errors
  errors: {
    entity_not_found: '엔티티를 찾을 수 없음: {{entity}}',
    failed_to_load: '엔티티 데이터를 불러오지 못했습니다',
    service_call_failed: '청소기에 명령을 보내지 못했습니다',
    entity_unavailable: '청소기를 사용할 수 없습니다',
  },

  // Settings Panel
  settings: {
    title: '설정',
    consumables: {
      title: '소모품',
      main_brush: '메인 브러시',
      side_brush: '사이드 브러시',
      filter: '필터',
      sensor: '센서',
      remaining: '남음',
      reset: '초기화',
    },
    device_info: {
      title: '기기 정보',
      firmware: '펌웨어',
      total_area: '총 청소 면적',
      total_time: '총 청소 시간',
      total_cleans: '총 청소 횟수',
      wifi_ssid: 'Wi-Fi 네트워크',
      wifi_signal: '신호 강도',
      ip_address: 'IP 주소',
    },
    map_management: {
      title: '맵 관리',
      description: '청소에 사용할 맵을 선택하세요.',
      no_maps: '사용 가능한 맵이 없습니다',
    },
    quick_settings: {
      title: '빠른 설정',
      child_lock: '차일드 락',
      child_lock_desc: '기기의 물리적 버튼을 비활성화합니다',
      carpet_boost: '카펫 부스트',
      carpet_boost_desc: '카펫 위에서 흡입력을 높입니다',
      obstacle_avoidance: '장애물 회피',
      obstacle_avoidance_desc: '청소 중 장애물을 피합니다',
      auto_dust_collecting: '자동 먼지 비움',
      auto_dust_collecting_desc: '먼지통을 자동으로 비웁니다',
      auto_drying: '자동 건조',
      auto_drying_desc: '청소 후 물걸레 패드를 건조합니다',
      dnd: '방해 금지',
      dnd_desc: '활동을 줄여 조용한 시간을 가집니다',
    },
    volume: {
      title: '볼륨 및 사운드',
      test_sound: '위치 찾기',
      muted: '음소거됨',
    },
    carpet: {
      title: '카펫 설정',
      clean_carpets_first: '카펫 먼저 청소',
      clean_carpets_first_desc: '바닥 물걸레 전에 카펫 청소',
      carpet_boost: '카펫 부스트',
      carpet_boost_desc: '카펫 위에서 흡입력을 높입니다',
      intensive_cleaning: '집중 청소',
      intensive_cleaning_desc: '추가 패스로 카펫 심층 청소',
      side_brush_rotate: '사이드 브러시 회전',
      side_brush_rotate_desc: '카펫에서 사이드 브러시 회전',
      sensitivity: '카펫 민감도',
      sensitivity_desc: '감지 민감도 수준',
      sensitivity_low: '낮음',
      sensitivity_medium: '보통',
      sensitivity_high: '높음',
      cleaning_mode: '카펫 청소',
      cleaning_mode_desc: '청소 중 카펫 처리 방법',
      mode_vacuum: '청소',
      mode_vacuum_and_mop: '청소 & 물걸레',
      mode_avoidance: '회피',
      mode_ignore: '무시',
      vacuum_mode: '청소 모드',
      vacuum_adaptation: '물걸레 들어올림',
      vacuum_remove_mop: '물걸레 제거',
    },
    ai_detection: {
      title: 'AI 및 감지',
      obstacle_avoidance: '장애물 회피',
      obstacle_avoidance_desc: '센서를 사용하여 장애물을 피합니다',
      ai_obstacle_detection: 'AI 장애물 감지',
      ai_obstacle_detection_desc: 'AI를 사용하여 장애물을 식별하고 피합니다',
      ai_obstacle_image_upload: '장애물 이미지 업로드',
      ai_obstacle_image_upload_desc: '분석을 위해 장애물 이미지를 업로드합니다',
      ai_pet_detection: '반려동물 감지',
      ai_pet_detection_desc: '반려동물을 감지하고 피합니다',
      ai_human_detection: '사람 감지',
      ai_human_detection_desc: '사람을 감지하고 피합니다',
      ai_furniture_detection: '가구 감지',
      ai_furniture_detection_desc: '가구를 감지하고 주변을 탐색합니다',
      ai_fluid_detection: '액체 감지',
      ai_fluid_detection_desc: '액체를 감지하고 피합니다',
      stain_avoidance: '얼룩 회피',
      stain_avoidance_desc: '감지된 얼룩을 피합니다',
      collision_avoidance: '충돌 회피',
      collision_avoidance_desc: '물체와의 충돌을 방지합니다',
      fill_light: '보조 조명',
      fill_light_desc: '더 나은 감지를 위해 보조 조명을 사용합니다',
    },
    station_controls: {
      title: '스테이션 제어',
      self_clean: '자가 세척',
      self_clean_desc: '물걸레 패드 세척 사이클 시작',
      manual_drying: '수동 건조',
      manual_drying_desc: '물걸레 패드 건조 사이클 시작',
      water_tank_draining: '물탱크 배수',
      water_tank_draining_desc: '탱크에서 오수 배수',
      base_station_cleaning: '스테이션 청소',
      base_station_cleaning_desc: '베이스 스테이션 청소',
      empty_water_tank: '물탱크 비우기',
      empty_water_tank_desc: '물 수집 탱크 비우기',
    },
  },
};
