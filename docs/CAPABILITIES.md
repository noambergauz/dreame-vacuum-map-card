# Capability-Based Feature Rendering

This document describes how the card dynamically shows/hides UI features based on the robot's capabilities.

## Overview

Different Dreame vacuum models support different features. The card reads the `capabilities` array from `vacuum.entity.attributes.capabilities` and uses it to dynamically render only the features that are available for the specific robot model.

## How It Works

1. The `useVacuumCapabilities` hook provides capability checking methods
2. Components check for required capabilities before rendering features
3. If a capability is missing, the feature is hidden (not shown as disabled)

### Using the Hook

```typescript
import { useVacuumCapabilities } from '@/hooks';
import { CAPABILITY } from '@/constants';

function MyComponent() {
  const capabilities = useVacuumCapabilities();

  // Check single capability
  if (capabilities.has(CAPABILITY.CLEANGENIUS)) {
    // Show CleanGenius feature
  }

  // Check if ANY of multiple capabilities exist
  if (capabilities.hasAny(CAPABILITY.MOP_PAD_SWING, CAPABILITY.MOP_PAD_SWING_PLUS)) {
    // Show mop extend feature
  }

  // Check if ALL capabilities exist
  if (capabilities.hasAll(CAPABILITY.SELF_WASH_BASE, CAPABILITY.HOT_WASHING)) {
    // Show hot washing feature
  }
}
```

## Capability to Feature Mapping

### Cleaning Mode Modal

| Feature                 | Required Capability                                 | File                       |
| ----------------------- | --------------------------------------------------- | -------------------------- |
| CleanGenius Toggle      | `cleangenius`                                       | `CleaningModeModal.tsx`    |
| Cleaning Route Selector | `cleaning_route`                                    | `CustomMode.tsx`           |
| Wetness Selector        | `wetness`                                           | `CustomMode.tsx`           |
| Self-Clean Frequency    | `self_clean_frequency`                              | `CustomMode.tsx`           |
| Max+ Power Toggle       | `max_suction_power` OR `max_suction_power_extended` | `SuctionPowerSelector.tsx` |

### Main Card

| Feature          | Required Capability | File                   |
| ---------------- | ------------------- | ---------------------- |
| Shortcuts Button | `shortcuts`         | `DreameVacuumCard.tsx` |

### Settings Panel - Accordions

| Accordion       | Required Capability                                     | File                |
| --------------- | ------------------------------------------------------- | ------------------- |
| Dock Settings   | `self_wash_base` OR `auto_empty_base`                   | `SettingsPanel.tsx` |
| Carpet Settings | `carpet_recognition`                                    | `SettingsPanel.tsx` |
| AI Detection    | `ai_detection`                                          | `SettingsPanel.tsx` |
| Edge & Corner   | `mop_pad_swing` OR `mop_pad_swing_plus` OR `side_reach` | `SettingsPanel.tsx` |

### Settings Panel - Individual Settings

#### Dock Settings (`DockSettingsSection.tsx`)

| Setting              | Required Capability    |
| -------------------- | ---------------------- |
| Auto Empty           | `auto_empty_base`      |
| Auto Empty Mode      | `auto_empty_mode`      |
| Self-Clean Frequency | `self_clean_frequency` |
| Mop Washing Mode     | `washing_mode`         |
| Smart Mop Washing    | `smart_mop_washing`    |
| Hot Washing          | `hot_washing`          |
| Water Temperature    | `water_temperature`    |
| Auto Add Detergent   | `auto_add_detergent`   |
| Auto Rewashing       | `auto_rewashing`       |
| Auto Recleaning      | `auto_recleaning`      |

#### Edge & Corner Settings (`EdgeCornerSection.tsx`)

| Setting              | Required Capability                     |
| -------------------- | --------------------------------------- |
| Side Reach           | `side_reach`                            |
| Mop Extend           | `mop_pad_swing` OR `mop_pad_swing_plus` |
| Mop Extend Frequency | `mop_pad_swing` OR `mop_pad_swing_plus` |

#### Quick Settings (`QuickSettingsSection.tsx`)

| Setting         | Required Capability |
| --------------- | ------------------- |
| DND Toggle      | `dnd`               |
| DND Sub-options | `dnd_functions`     |

#### Volume Settings (`VolumeSection.tsx`)

| Setting                  | Required Capability |
| ------------------------ | ------------------- |
| Voice Assistant          | `voice_assistant`   |
| Voice Assistant Language | `voice_assistant`   |

## All Available Capabilities

The full list of capability strings is defined in `src/constants/capabilities.ts`:

```typescript
export const CAPABILITY = {
  // Navigation
  LIDAR_NAVIGATION: 'lidar_navigation',

  // Map Features
  MULTI_FLOOR_MAP: 'multi_floor_map',
  WIFI_MAP: 'wifi_map',
  BACKUP_MAP: 'backup_map',
  MAP: 'map',
  AREA_ROTATION: 'area_rotation',
  SEGMENT_VISIBILITY: 'segment_visibility',
  AUTO_RENAME_SEGMENT: 'auto_rename_segment',
  RAMPS: 'ramps',
  VIRTUAL_TRACKS: 'virtual_tracks',

  // AI & Detection
  AI_DETECTION: 'ai_detection',
  FILL_LIGHT: 'fill_light',
  CAMERA_STREAMING: 'camera_streaming',
  FLUID_DETECTION: 'fluid_detection',
  PET_FURNITURE: 'pet_furniture',
  OBSTACLE_IMAGE_CROP: 'obstacle_image_crop',
  OBSTACLES: 'obstacles',

  // Cleaning Modes
  CLEANGENIUS: 'cleangenius',
  CLEANGENIUS_MODE: 'cleangenius_mode',
  CLEANING_ROUTE: 'cleaning_route',
  SEGMENT_SLOW_CLEAN_ROUTE: 'segment_slow_clean_route',
  CUSTOMIZED_CLEANING: 'customized_cleaning',
  MOPPING_AFTER_SWEEPING: 'mopping_after_sweeping',
  CUSTOM_CLEANING_MODE: 'custom_cleaning_mode',
  CLEANING_SEQUENCE_V2: 'cleaning_sequence_v2',
  ULTRA_CLEAN_MODE: 'ultra_clean_mode',
  TASK_TYPE: 'task_type',
  CRUISING: 'cruising',

  // Suction & Mopping
  MAX_SUCTION_POWER: 'max_suction_power',
  MAX_SUCTION_POWER_EXTENDED: 'max_suction_power_extended',
  WETNESS: 'wetness',
  WETNESS_LEVEL: 'wetness_level',
  MOPPING_SETTINGS: 'mopping_settings',
  SEGMENT_MOPPING_SETTINGS: 'segment_mopping_settings',
  TIGHT_MOPPING: 'tight_mopping',

  // Self-cleaning & Dock
  SELF_WASH_BASE: 'self_wash_base',
  SELF_CLEAN_FREQUENCY: 'self_clean_frequency',
  AUTO_EMPTY_BASE: 'auto_empty_base',
  AUTO_EMPTY_MODE: 'auto_empty_mode',
  AUTO_EMPTYING: 'auto_emptying',
  WASHING_MODE: 'washing_mode',
  WATER_TEMPERATURE: 'water_temperature',
  HOT_WASHING: 'hot_washing',
  SMART_MOP_WASHING: 'smart_mop_washing',
  AUTO_ADD_DETERGENT: 'auto_add_detergent',
  AUTO_REWASHING: 'auto_rewashing',
  AUTO_RECLEANING: 'auto_recleaning',
  DRAINAGE: 'drainage',
  STATION_CLEANING: 'station_cleaning',
  WATER_TANK_DRAINING: 'water_tank_draining',
  WATER_CHECK: 'water_check',

  // Carpet
  CARPET_RECOGNITION: 'carpet_recognition',
  INTENSIVE_CARPET_CLEANING: 'intensive_carpet_cleaning',
  CLEAN_CARPETS_FIRST: 'clean_carpets_first',
  SIDE_BRUSH_CARPET_ROTATE: 'side_brush_carpet_rotate',
  AUTO_CARPET_CLEANING: 'auto_carpet_cleaning',
  CARPET_CLEANSET_V2: 'carpet_cleanset_v2',
  CARPET_SHAPE: 'carpet_shape',
  CARPET_ID: 'carpet_id',

  // Mop & Edge Features
  MOP_PAD_LIFTING: 'mop_pad_lifting',
  MOP_PAD_LIFTING_PLUS: 'mop_pad_lifting_plus',
  MOP_PAD_UNMOUNTING: 'mop_pad_unmounting',
  MOP_PAD_SWING: 'mop_pad_swing',
  MOP_PAD_SWING_PLUS: 'mop_pad_swing_plus',
  SIDE_REACH: 'side_reach',

  // Floor & Navigation
  FLOOR_DIRECTION_CLEANING: 'floor_direction_cleaning',
  FLOOR_MATERIAL: 'floor_material',
  LARGE_PARTICLES_BOOST: 'large_particles_boost',

  // Furniture Detection
  SAVED_FURNITURES: 'saved_furnitures',
  EXTENDED_FURNITURES: 'extended_furnitures',
  FURNITURES_V2: 'furnitures_v2',

  // DND & Schedule
  DND: 'dnd',
  DND_TASK: 'dnd_task',
  DND_FUNCTIONS: 'dnd_functions',

  // Other Features
  SHORTCUTS: 'shortcuts',
  VOICE_ASSISTANT: 'voice_assistant',
  OFF_PEAK_CHARGING: 'off_peak_charging',
  AUTO_SWITCH_SETTINGS: 'auto_switch_settings',
  NEW_STATE: 'new_state',
  GEN5: 'gen5',
} as const;
```

---

## Contributing: Adding Support for Missing Capabilities

If a feature on your robot isn't showing up in the card, you may need to add capability support for it. Follow this template:

### Step 1: Identify the Capability

1. Check your vacuum entity in Home Assistant Developer Tools > States
2. Find the `capabilities` array in your vacuum's attributes
3. Identify the capability string for the missing feature (e.g., `'new_feature'`)

### Step 2: Add the Capability Constant

Edit `src/constants/capabilities.ts`:

```typescript
export const CAPABILITY = {
  // ... existing capabilities ...

  // Add your new capability
  NEW_FEATURE: 'new_feature',
} as const;
```

### Step 3: Add the Capability Check

In the component that should show the feature, add the capability check:

```typescript
import { useVacuumCapabilities } from '@/hooks';
import { CAPABILITY } from '@/constants';

export function MySection() {
  const capabilities = useVacuumCapabilities();

  // Check capability before rendering
  const hasNewFeature = capabilities.has(CAPABILITY.NEW_FEATURE);

  return (
    <div>
      {/* Only render if capability exists */}
      {hasNewFeature && !someEntityState.disabled && (
        <div className="my-section__item">
          {/* Feature UI */}
        </div>
      )}
    </div>
  );
}
```

### Step 4: For Accordion Sections

If hiding an entire accordion section in Settings, update `SettingsPanel.tsx`:

```typescript
// Add capability check
const hasNewFeature = capabilities.has(CAPABILITY.NEW_FEATURE);

// In the render, wrap the accordion
{hasNewFeature && (
  <Accordion title={t('settings.new_feature.title')} icon={<SomeIcon size={20} />}>
    <NewFeatureSection />
  </Accordion>
)}
```

### Step 5: Test

1. Build the card: `npm run build`
2. Deploy to Home Assistant
3. Verify the feature appears for robots that have the capability
4. Verify the feature is hidden for robots without the capability

### Opening a Feature Request

When opening a GitHub issue for missing capability support, please include:

1. **Robot Model**: e.g., "Dreame Z10 Pro"
2. **Missing Feature**: What feature is missing or broken?
3. **Capabilities Array**: Copy your vacuum's `capabilities` array from Developer Tools
4. **Entity Attributes**: Any relevant attributes related to the feature
5. **Expected Behavior**: What should the card show/do?

Example issue template:

````markdown
## Missing Capability Support

**Robot Model:** Dreame L20 Ultra

**Missing Feature:** Hot water washing temperature control

**My Capabilities Array:**

```json
["lidar_navigation", "multi_floor_map", "self_wash_base", "hot_washing", "water_temperature", ...]
```
````

**Relevant Entity:**

- `select.dreame_l20_water_temperature` exists and works

**Expected Behavior:**
The water temperature selector should appear in Dock Settings when `water_temperature` capability is present.

```

```
