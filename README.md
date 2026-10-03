<img src="icon.png" alt="Dreame" align="left" width="64" height="64" style="margin-right: 16px;">

# Dreame Vacuum Map Card

A modern, beautiful Home Assistant Lovelace card for controlling Dreame robot vacuums. Built with React, TypeScript, and SCSS.

<br clear="left">

## Features

- (Almost) complete feature parity with the original Dreame application
- Support for **Room**, **All**, **Zone**, and **Spot** cleaning modes, including multiple zones or spots
- Interactive map with room and zone selection
- CleanGenius and Custom cleaning mode configuration
- **Per-room customized cleaning**: Configure suction level, wetness, and cleaning cycles for each room individually
- **Dock popup**: station status and dock tasks while the robot is docked
- **Shortcuts**: start, rename, and delete the shortcuts saved in the Dreame app
- **Landscape layout**: controls beside the map on wide dashboards, mirrored for RTL languages
- Real-time vacuum status and battery level
- **Theming**: follows the active Home Assistant theme, including custom themes and dark mode
- **Internationalization**: follows the Home Assistant language, with explicit language packs and RTL support for Hebrew

<div style="display: flex; gap: 10px;">
    <img src="https://github.com/noambergauz/dreame-vacuum-map-card/raw/master/screenshots/light.png" alt="Main Screen Light" style="width: 33%;">
    <img src="https://github.com/noambergauz/dreame-vacuum-map-card/raw/master/screenshots/dark.png" alt="Main Screen Dark" style="width: 33%;">
</div>

<div style="display: flex; gap: 10px;">
    <img src="https://github.com/noambergauz/dreame-vacuum-map-card/raw/master/screenshots/landscape-light.png" alt="Landscape Light" style="width: 33%;">
    <img src="https://github.com/noambergauz/dreame-vacuum-map-card/raw/master/screenshots/landscape-dark.png" alt="Landscape Dark" style="width: 33%;">
</div>

## Installation

### Via [HACS](https://hacs.xyz/)

<a href="https://my.home-assistant.io/redirect/hacs_repository/?owner=noambergauz&repository=dreame-vacuum-map-card&category=integration" target="_blank"><img src="https://my.home-assistant.io/badges/hacs_repository.svg" alt="Open your Home Assistant instance and open a repository inside the Home Assistant Community Store." /></a>

### Manual:

#### 1. Download the card

Download `dreame-vacuum-map-card.js` from the releases page

#### 2. Add to Home Assistant

Copy the file to your Home Assistant config directory:

```
/config/www/dreame-vacuum-map-card/dreame-vacuum-map-card.js
```

#### 3. Add resource to Lovelace

Go to Settings → Dashboards → Resources → Add Resource:

- URL: `/local/dreame-vacuum-map-card/dreame-vacuum-map-card.js`
- Resource type: JavaScript Module

## Usage

### 4. Add card to dashboard

```yaml
type: custom:dreame-vacuum-map-card
entity: vacuum.dreame_vacuum_entity
title: Dreame Vacuum
map_entity: camera.dreame_vacuum_entity # Optional. Defaults to the live map camera registered for this vacuum
language: auto # Optional. 'auto' (default) follows the Home Assistant language
default_mode: all # Optional, 'all' (default), 'room', or 'zone'
default_room_view: map # Optional, 'map' (default) or 'list'
map_overlays: # Experimental Optional, list of overlays to show on the map
  - room_labels # Show room names
  - vacuum # Show vacuum position marker
  - charger # Show charger position marker
map_height: 520px # Optional, cap the map height (any CSS length). The map is scaled to fit, never cropped.
room_label_scale: 0.6 # Optional, 1 = default label size. Useful when the labels cover the rooms.
room_names: # Optional, override the room names shown by the card
  1: Bedroom # Key: segment id from the map camera's `rooms` attribute …
  Kitchen: Kitchenette # … or the name the device reports
buttons: # Optional
  - type: stop # Only stop button is supported
    action: stop # 'stop' (default), 'stop_and_dock'
```

### Renaming rooms

Dreame devices only report room names from a fixed catalogue, and that catalogue is
English-only regardless of the `language` setting. `room_names` overrides the display
name everywhere the card shows it — map labels, room list, selection summary, per-room
settings and toasts. Keys are looked up as segment id first, then as the device-provided
name; anything not listed keeps its original name. Cleaning commands always use the
segment id, so renaming is purely cosmetic.

### Landscape layout

There is no option to set. When the card is at least 48rem (768px) wide, the controls move into a side column and the map fills the rest. The column is on the left for left-to-right languages and on the right for right-to-left languages such as Hebrew.

To get a wide card, use a panel view. In a sections view, give the section a `column_span` wide enough for 768px and set the card to span the full section:

```yaml
grid_options:
  columns: full
```

In landscape, the card fits within the screen height. `map_height` can make the map smaller, but not taller than the screen.

## Theming

The card has no palette of its own. It uses the active Home Assistant theme, including its light and dark modes, so it matches the rest of your dashboard and any theme you install.

To change the card's colors, change your Home Assistant theme. The card reads the standard theme variables, mainly:

- `primary-color` for buttons, selections, and the zone and spot overlays
- `card-background-color` or `ha-card-background`, and `secondary-background-color`, for backgrounds
- `primary-text-color`, `secondary-text-color`, and `disabled-text-color` for text
- `divider-color`, `success-color`, `warning-color`, and `error-color`
- `ha-card-border-radius`, `ha-card-border-color`, `ha-card-border-width`, and `ha-card-box-shadow` for the card frame

The `theme` and `custom_theme` options were removed. Old dashboards that still set them keep working, and the options are ignored.

## Per-Room Customized Cleaning

The card supports per-room customized cleaning settings, allowing you to configure different suction levels, wetness, and cleaning cycles for each room.

## Internationalization (i18n)

When `language` is omitted or set to `auto`, the card follows Home Assistant's language. An explicit code forces that pack. Codes the card does not ship fall back to English.

Entity names and the vacuum status come from the Dreame integration's translations. Buttons, map text, and settings titles stay in the card's language packs.

Currently available:

- **English (en)** - Default
- **German (de)** - Deutsch
- **Russian (ru)** - Русский
- **Polish (pl)** - Polski
- **Italian (it)** - Italiano
- **Dutch (nl)** - Nederlands
- **Spanish (es)** - Español
- **Chinese (zh)** - 中文
- **French (fr_FR)** - Français
- **Korean (ko)** - 한국어
- **Hebrew (he)** - עברית (RTL supported)

Set the language in your configuration:

```yaml
type: custom:dreame-vacuum-map-card
entity: vacuum.dreame_vacuum_entity
language: de
```

The card's own text is translated, including:

- Room selection and cleaning modes
- Action buttons (Clean, Pause, Resume, Stop, Dock)
- Toast notifications
- Map overlays and instructions
- Per-room customize settings
- Error messages

### Adding New Languages

To add support for additional languages:

1. Create a new translation file in `src/i18n/locales/` (e.g., `fr_FR.ts` for French)
2. Import the `Translation` type and provide translations for all keys
3. Add the new locale to `src/i18n/locales/index.ts`
4. Update the `HassConfig` type in `src/types/homeassistant.ts`

Example structure:

```typescript
import type { Translation } from './en';

export const fr_FR: Translation = {
  room_selector: {
    title: 'Sélectionner les pièces',
    // ... more translations
  },
  // ... all other sections
};
```

## Development

### Prerequisites

- Node.js 20+
- npm or yarn

### Setup

```bash
npm install
```

### Build

```bash
npm run build
```

The built file will be in `dist/dreame-vacuum-map-card.js`

## Tech Stack

- **React 19.2.0**
- **Lucide React Icons**
- **TypeScript 5.9.3**
- **Vite 7.2.4**
- **SASS**

## Requirements

- Home Assistant with the [Dreame Vacuum](https://github.com/Tasshack/dreame-vacuum) integration installed
- A supported Dreame robot vacuum

## Dynamic entity support

The card shows the controls Home Assistant registered for this vacuum. The Dreame integration already creates an entity only when that model supports it, so a missing feature does not leave an empty row. Config entities the card does not lay out itself appear under **More**.

Shortcuts are the exception: they have no companion entity, so the card reads the `shortcuts` capability from the vacuum.

## Credits

- Original inspiration from [xiaomi-vacuum-map-card](https://github.com/PiotrMachowski/lovelace-xiaomi-vacuum-map-card)
- [Dreame Vacuum](https://github.com/Tasshack/dreame-vacuum) integration by Tasshack

## License

MIT License - see [LICENSE](LICENSE) file for details
