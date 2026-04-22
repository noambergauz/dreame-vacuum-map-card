import type { Hass } from '@/types/homeassistant';
import { updateMockEntityState } from './mock';

/**
 * Development utilities for testing and debugging
 * These functions are only available in development mode
 */

export function simulateCleaningComplete(hass: Hass, entityId: string) {
  updateMockEntityState(hass, entityId, {
    state: 'returning',
    attributes: {
      ...hass.states[entityId].attributes,
      running: false,
      started: false,
      returning: true,
      cleaning_time: (hass.states[entityId].attributes.cleaning_time || 0) + 30,
      cleaned_area: (hass.states[entityId].attributes.cleaned_area || 0) + 25,
    },
  });

  // Simulate returning to dock
  setTimeout(() => {
    updateMockEntityState(hass, entityId, {
      state: 'docked',
      attributes: {
        ...hass.states[entityId].attributes,
        returning: false,
        docked: true,
      },
    });
  }, 2000);
}

export function simulateBatteryDrain(hass: Hass, entityId: string, amount: number = 10) {
  const currentBattery = (hass.states[entityId]?.attributes?.battery as number | undefined) ?? 100;
  updateMockEntityState(hass, entityId, {
    attributes: {
      ...hass.states[entityId].attributes,
      battery: Math.max(0, currentBattery - amount),
    },
  });
}

export function simulateError(hass: Hass, entityId: string, errorMessage: string) {
  updateMockEntityState(hass, entityId, {
    state: 'error',
    attributes: {
      ...hass.states[entityId].attributes,
      error: errorMessage,
      running: false,
      started: false,
    },
  });
}

export function resetVacuum(hass: Hass, entityId: string) {
  updateMockEntityState(hass, entityId, {
    state: 'docked',
    attributes: {
      ...hass.states[entityId].attributes,
      running: false,
      started: false,
      paused: false,
      returning: false,
      docked: true,
      charging: false,
      battery: 100,
      error: 'No error',
    },
  });
}

/**
 * Attaches development utilities to window for console access
 */
export function attachDevUtils(hass: Hass, entityId: string) {
  if (import.meta.env.DEV) {
    interface DevUtils {
      hass: Hass;
      entityId: string;
      simulateCleaningComplete: () => void;
      simulateBatteryDrain: (amount?: number) => void;
      simulateError: (message: string) => void;
      resetVacuum: () => void;
      updateState: (updates: Partial<{ state: string; attributes: Record<string, unknown> }>) => void;
      getState: () => (typeof hass.states)[string];
      callService: (domain: string, service: string, data?: Record<string, unknown>) => Promise<void>;
    }

    (window as Window & { devUtils?: DevUtils }).devUtils = {
      hass,
      entityId,
      simulateCleaningComplete: () => simulateCleaningComplete(hass, entityId),
      simulateBatteryDrain: (amount?: number) => simulateBatteryDrain(hass, entityId, amount),
      simulateError: (message: string) => simulateError(hass, entityId, message),
      resetVacuum: () => resetVacuum(hass, entityId),
      updateState: (updates: Partial<{ state: string; attributes: Record<string, unknown> }>) =>
        updateMockEntityState(hass, entityId, updates),
      getState: () => hass.states[entityId],
      callService: (domain: string, service: string, data?: Record<string, unknown>) =>
        hass.callService(domain, service, data),
    };
  }
}
