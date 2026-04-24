/**
 * Hook to get entity state and availability from Home Assistant
 * Provides a unified way to check if an entity exists, is available, and its current state
 */

import type { Hass, HassEntity } from '@/types/homeassistant';

export interface EntityState {
  /** The raw entity from hass.states */
  entity: HassEntity | undefined;
  /** Whether the entity exists in hass.states */
  exists: boolean;
  /** Whether the entity is available (exists and state !== 'unavailable') */
  available: boolean;
  /** The current state string */
  state: string | undefined;
  /** For switch entities: whether state === 'on' */
  isOn: boolean;
  /** Whether the control should be disabled (!exists || !available) */
  disabled: boolean;
  /**
   * Whether the entity exists but is unavailable.
   * Use this when you want to disable only if entity explicitly exists but is unavailable.
   * Returns false if entity doesn't exist (allowing fallback behavior).
   */
  unavailable: boolean;
  /** The entity's attributes */
  attributes: Record<string, unknown>;
}

/**
 * Get entity state and availability for any entity ID
 */
export function getEntityState(hass: Hass, entityId: string | undefined): EntityState {
  const entity = entityId ? hass.states[entityId] : undefined;
  const exists = !!entity;
  const available = entity ? entity.state !== 'unavailable' : false;
  const unavailable = exists && !available;

  return {
    entity,
    exists,
    available,
    state: entity?.state,
    isOn: entity?.state === 'on',
    disabled: !exists || !available,
    unavailable,
    attributes: entity?.attributes ?? {},
  };
}

/**
 * Get state for a switch entity
 */
export function getSwitchState(hass: Hass, baseEntityId: string, suffix: string): EntityState & { entityId: string } {
  const entityId = `switch.${baseEntityId}_${suffix}`;
  return { entityId, ...getEntityState(hass, entityId) };
}

/**
 * Get state for a select entity
 */
export function getSelectState(hass: Hass, baseEntityId: string, suffix: string): EntityState & { entityId: string } {
  const entityId = `select.${baseEntityId}_${suffix}`;
  return { entityId, ...getEntityState(hass, entityId) };
}

/**
 * Get state for a number entity
 */
export function getNumberState(
  hass: Hass,
  baseEntityId: string,
  suffix: string
): EntityState & { entityId: string; numericValue: number } {
  const entityId = `number.${baseEntityId}_${suffix}`;
  const state = getEntityState(hass, entityId);
  const numericValue = state.state ? parseFloat(state.state) : 0;
  return { entityId, ...state, numericValue };
}

/**
 * Get state for a button entity
 */
export function getButtonState(hass: Hass, baseEntityId: string, suffix: string): EntityState & { entityId: string } {
  const entityId = `button.${baseEntityId}_${suffix}`;
  return { entityId, ...getEntityState(hass, entityId) };
}
