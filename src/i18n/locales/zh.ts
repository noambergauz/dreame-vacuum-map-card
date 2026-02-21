import type { Translation } from './en';

export const zh: Translation = {
  // Room Selector (房间选择器)
  room_selector: {
    title: '选择房间',
    selected_count: '已选 {{count}} 个',
  },

  // Vacuum Map (建图与地图交互)
  vacuum_map: {
    no_map: '暂无地图',
    looking_for: '正在寻找：{{entity}}',
    room_overlay: '请选择需要清洁的房间',
    zone_overlay_create: '点击地图添加划区清洁区域',
    zone_overlay_resize: '拖动边角调整大小，点击其他空白处重新放置',
    clear_zone: '清除选区',
  },

  // Mode Tabs (模式切换标签)
  modes: {
    room: '选区', // 对应选定房间
    all: '全局', // 对应全屋
    zone: '划区', // 对应自定义区域
  },

  // Action Buttons (操作按钮)
  actions: {
    clean: '开始清洁',
    clean_all: '全屋清洁',
    clean_rooms: '清洁 {{count}} 个房间',
    clean_rooms_plural: '清洁 {{count}} 个房间',
    select_rooms: '选择房间',
    zone_clean: '划区清洁',
    pause: '暂停',
    resume: '继续',
    stop: '停止',
    dock: '回充',
  },

  // Toast Messages (提示信息)
  toast: {
    selected_room: '已选择 {{name}}',
    deselected_room: '已取消选择 {{name}}',
    paused: '清洁已暂停',
    stopped: '清洁已停止',
    docked: '正在返回基站',
    cleaning_started: '开始清洁',
    resuming: '恢复清洁',
    starting_full_clean: '开始全屋清洁',
    pausing_vacuum: '扫地机器人已暂停',
    stopping_vacuum: '扫地机器人已停止',
    vacuum_docking: '扫地机正在返回基站',
    starting_room_clean: '开始清洁选中的 {{count}} 个房间',
    starting_room_clean_plural: '开始清洁选中的 {{count}} 个房间',
    starting_zone_clean: '开始划区清洁',
    select_rooms_first: '请先选择要清洁的房间',
    cannot_determine_map: '无法获取地图尺寸',
    select_zone_first: '请先在地图上划定一个区域',
  },

  // Room Selection Display (房间选择显示)
  room_display: {
    selected_rooms: '已选房间：',
    selected_label: '已选：',
  },

  // Cleaning Mode Button (清洁模式按钮)
  cleaning_mode_button: {
    prefix_custom: '自定义：',
    prefix_cleangenius: '智能托管：',
    view_shortcuts: '查看快捷指令',
    vac_and_mop: '扫拖同步',
    mop_after_vac: '先扫后拖',
    vacuum: '单扫',
    mop: '单拖',
  },

  // Cleaning Mode Modal (清洁模式弹窗)
  cleaning_mode: {
    title: '清洁模式',
    clean_genius: '智能托管',
    custom: '自定义',
  },

  // Shortcuts Modal (快捷指令弹窗)
  shortcuts: {
    title: '快捷指令',
    no_shortcuts: '暂无快捷指令',
    create_hint: '请在 Dreame (追觅) App 中创建快捷指令，以便快速启动您常用的清洁任务',
  },

  // Custom Mode (自定义模式)
  custom_mode: {
    cleaning_mode_title: '清洁模式',
    suction_power_title: '吸力设置',
    max_plus_description: '吸力将提升至最高档位（该模式仅单次生效）。',
    wetness_title: '拖布水量',
    slightly_dry: '偏干',
    moist: '标准',
    wet: '偏湿',
    mop_washing_frequency_title: '拖布回洗频率',
    route_title: '路径设置',
  },

  // CleanGenius Mode (智能托管模式)
  cleangenius_mode: {
    cleaning_mode_title: '清洁模式',
    deep_cleaning: '深度清洁',
  },

  // Header (头部信息)
  header: {
    battery: '电量',
    status: '状态',
  },

  // Errors (错误提示)
  errors: {
    entity_not_found: '未找到实体：{{entity}}',
    failed_to_load: '实体数据加载失败',
  },

  // Settings Panel (设置面板)
  settings: {
    title: '设置',
    consumables: {
      title: '耗材管理',
      main_brush: '主刷',
      side_brush: '边刷',
      filter: '滤网',
      sensor: '传感器',
      remaining: '剩余',
      reset: '复位',
    },
    device_info: {
      title: '设备信息',
      firmware: '固件版本',
      total_area: '累计清洁面积',
      total_time: '累计清洁时间',
      total_cleans: '累计清洁次数',
      wifi_ssid: 'Wi-Fi 网络',
      wifi_signal: '信号强度',
      ip_address: 'IP 地址',
    },
    map_management: {
      title: '地图管理',
      description: '选择本次清洁要使用的地图。',
      no_maps: '暂无可用地图',
    },
    quick_settings: {
      title: '快捷设置',
      child_lock: '童锁',
      child_lock_desc: '锁定设备按键以防误触',
      carpet_boost: '地毯增压',
      carpet_boost_desc: '识别到地毯时自动增大吸力',
      obstacle_avoidance: '避障功能',
      obstacle_avoidance_desc: '清洁时自动避开障碍物',
      auto_dust_collecting: '自动集尘',
      auto_dust_collecting_desc: '清扫结束后自动清空尘盒',
      auto_drying: '自动烘干',
      auto_drying_desc: '清洗完成后自动烘干拖布',
      dnd: '免打扰',
      dnd_desc: '在设定的安静时段内不主动执行任务',
    },
    volume: {
      title: '音量与语音',
      test_sound: '寻找机器',
      muted: '已静音',
    },
    carpet: {
      title: '地毯清洁策略',
      carpet_boost: '地毯增压',
      carpet_boost_desc: '在地毯上自动提升吸力',
      carpet_recognition: '地毯识别',
      carpet_recognition_desc: '自动检测地面上的地毯',
      carpet_avoidance: '躲避地毯',
      carpet_avoidance_desc: '拖地模式下自动避开地毯',
      sensitivity: '地毯识别灵敏度',
      sensitivity_desc: '设置传感器检测地毯的灵敏程度',
      sensitivity_low: '低',
      sensitivity_medium: '中',
      sensitivity_high: '高',
    },
    ai_detection: {
      title: 'AI 识别与避障',
      obstacle_avoidance: '避障功能',
      obstacle_avoidance_desc: '使用传感器避开障碍物',
      ai_obstacle_detection: 'AI 障碍物识别',
      ai_obstacle_detection_desc: '使用 AI 视觉识别并避开障碍物',
      ai_obstacle_image_upload: '实景障碍物照片上传',
      ai_obstacle_image_upload_desc: '上传拍摄到的障碍物照片以供分析',
      ai_pet_detection: '宠物识别',
      ai_pet_detection_desc: '识别并智能避让宠物',
      ai_human_detection: '人员识别',
      ai_human_detection_desc: '识别并避让活动人员',
      ai_furniture_detection: '家具识别',
      ai_furniture_detection_desc: '识别家具并沿边清扫',
      ai_fluid_detection: '液体识别',
      ai_fluid_detection_desc: '识别并避开地面液体',
      stain_avoidance: '污渍躲避',
      stain_avoidance_desc: '自动避开识别到的顽固污渍',
      collision_avoidance: '防碰撞',
      collision_avoidance_desc: '主动减速以防止与物体发生碰撞',
      fill_light: '自动补光灯',
      fill_light_desc: '暗光环境下自动开启以提升识别率',
    },
  },
};
