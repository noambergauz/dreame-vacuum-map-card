import React from 'react';
import ReactDOM from 'react-dom/client';
import { DreameVacuumCard } from './components/DreameVacuumCard';
import type { Hass, HassConfig } from './types/homeassistant';
import { createMockHass } from './utils/mock';
import { isDevelopment, devConfig } from './config/env';
import { attachDevUtils } from './utils/devUtils';
import styles from './styles.scss?inline';

class DreameVacuumMapCard extends HTMLElement {
  private _root: ReactDOM.Root | null = null;
  private _hass?: Hass;
  private _config?: HassConfig;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    const styleEl = document.createElement('style');
    styleEl.textContent = styles;
    this.shadowRoot!.appendChild(styleEl);
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
    
    // In development mode, use mock data
    if (isDevelopment && !this._hass) {
      this._hass = createMockHass();
      this._config = {
        entity: devConfig.mockEntityId,
        type: 'custom:dreame-vacuum-map-card',
        title: devConfig.mockEntityTitle,
        theme: "dark"
      };
      
      // Attach dev utilities to window for console access
      attachDevUtils(this._hass, devConfig.mockEntityId);
      
      this.render();
    }
  }

  disconnectedCallback() {
    if (this._root) {
      this._root.unmount();
      this._root = null;
    }
  }

  private render() {
    if (!this._hass || !this._config || !this.shadowRoot) return;

    let container = this.shadowRoot.querySelector('#react-root') as HTMLElement;
    if (!container) {
      container = document.createElement('div');
      container.id = 'react-root';
      this.shadowRoot.appendChild(container);
    }

    if (!this._root) {
      this._root = ReactDOM.createRoot(container);
    }

    this._root.render(
      <React.StrictMode>
        <DreameVacuumCard hass={this._hass} config={this._config} />
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

customElements.define('dreame-vacuum-map-card', DreameVacuumMapCard);

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

export default DreameVacuumMapCard;

