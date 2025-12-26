# Dreame Vacuum Map Card (React + TypeScript)

A modern, refactored version of the Dreame Vacuum Map Card built with React 18, TypeScript, Vite, and Mantine UI.

## Features

- ✅ **React 18** - Modern React with hooks
- ✅ **TypeScript** - Full type safety
- ✅ **Mantine UI** - Beautiful, accessible components
- ✅ **Vite** - Fast build and development
- ✅ **Web Component** - Compiles to a custom element for Home Assistant
- ✅ **Modular Components** - Reusable, maintainable code structure

## Project Structure

```
src/
  components/
    DreameVacuumCard.tsx      # Main card component
    Header.tsx                 # Stats header
    VacuumMap.tsx             # Map with room selection
    ModeTabs.tsx              # Room/All/Zone tabs
    CleaningModeButton.tsx    # CleanGenius button
    CleaningModeModal.tsx     # Bottom sheet modal
    ActionButtons.tsx         # Clean/Dock buttons
  types/
    homeassistant.ts          # TypeScript interfaces
  main.tsx                    # Web Component wrapper
```

## Development

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Deploy to Home Assistant
```bash
npm run deploy
```

This will:
1. Build the production bundle
2. Copy `dist/dreame-vacuum-map-card.js` to `/home/noam/.config/home-assistant/www/dreame-vacuum-map-card/`

## How It Works

The React components are wrapped in a Web Component (`DreameVacuumMapCard`) that Home Assistant can load. The build process:

1. **Vite** bundles all React components into a single ES module
2. The `main.tsx` file wraps the React app in a custom element
3. The custom element is registered as `dreame-vacuum-map-card`
4. Home Assistant loads it like any other custom card

## Advantages Over Vanilla JS

1. **Type Safety** - TypeScript catches errors at compile time
2. **Component Reusability** - Easy to extract and reuse components
3. **State Management** - React hooks for clean state management
4. **Better DX** - Hot reload, better tooling, easier debugging
5. **Mantine UI** - Professional, accessible components out of the box
6. **Maintainability** - Easier to understand and modify

## Usage in Home Assistant

Same as before! Add to your dashboard:

```yaml
type: custom:dreame-vacuum-map-card
entity: vacuum.dima
```

## Next Steps

- [ ] Add more Dreame features (shortcuts, multiple maps, restricted zones)
- [ ] Add tests with Vitest
- [ ] Add Storybook for component development
- [ ] Add more customization options
