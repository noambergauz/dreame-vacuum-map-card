import React from 'react';
import ReactDOM from 'react-dom/client';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { DreameVacuumCard } from './components/DreameVacuumCard';
import type { Hass, HassConfig } from './types/homeassistant';

class DreameVacuumMapCard extends HTMLElement {
  private _root: ReactDOM.Root | null = null;
  private _hass?: Hass;
  private _config?: HassConfig;
  private _emotionCache: ReturnType<typeof createCache> | null = null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  setConfig(config: HassConfig) {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    this._config = config;
    this.render();
  }

  set hass(hass: Hass) {
    this._hass = hass;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    if (this._root) {
      this._root.unmount();
      this._root = null;
    }
  }

  private render() {
    if (!this._hass || !this._config || !this.shadowRoot) return;

    // Create emotion cache for shadow DOM
    if (!this._emotionCache) {
      this._emotionCache = createCache({
        key: 'mantine',
        container: this.shadowRoot as any,
        prepend: false,
      });
    }

    // Create container for React
    let container = this.shadowRoot.querySelector('#react-root') as HTMLElement;
    if (!container) {
      container = document.createElement('div');
      container.id = 'react-root';
      this.shadowRoot.appendChild(container);
    }

    // Create root if it doesn't exist
    if (!this._root) {
      this._root = ReactDOM.createRoot(container);
    }

    // Render React component with Emotion cache
    this._root.render(
      <React.StrictMode>
        <CacheProvider value={this._emotionCache}>
          <DreameVacuumCard hass={this._hass} config={this._config} emotionRoot={this.shadowRoot} />
        </CacheProvider>
      </React.StrictMode>
    );
  }

  getCardSize() {
    return 4;
  }

  static getStubConfig() {
    return {
      type: 'custom:dreame-vacuum-map-card',
      entity: 'vacuum.dreame_vacuum',
      title: 'Dreame Vacuum',
    };
  }
}

// Define custom element
customElements.define('dreame-vacuum-map-card', DreameVacuumMapCard);

// Register with Home Assistant
declare global {
  interface Window {
    customCards?: Array<{
      type: string;
      name: string;
      description: string;
    }>;
  }
}

if (window.customCards) {
  window.customCards = window.customCards || [];
  window.customCards.push({
    type: 'dreame-vacuum-map-card',
    name: 'Dreame Vacuum Map Card',
    description: 'Custom vacuum map card for Dreame vacuum cleaners',
  });
}

console.info('Dreame Vacuum Map Card (React) loaded');

// Expose for building
export default DreameVacuumMapCard;

