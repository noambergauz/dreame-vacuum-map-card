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

export interface SelectEntityState {
  value: string | null;
  options: string[];
}

const SELECT_PLACEHOLDERS = new Set(['unknown', 'unavailable']);

function isSelectPlaceholder(value: string): boolean {
  return SELECT_PLACEHOLDERS.has(value.toLowerCase());
}

export function readSelectEntity(entity: Pick<HassEntity, 'state' | 'attributes'> | undefined): SelectEntityState {
  if (!entity) return { value: null, options: [] };

  const publishedOptions = entity.attributes.options;
  const options = Array.isArray(publishedOptions)
    ? publishedOptions.filter((option): option is string => typeof option === 'string' && !isSelectPlaceholder(option))
    : [];
  const value = isSelectPlaceholder(entity.state) ? null : entity.state;

  return { value, options };
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
