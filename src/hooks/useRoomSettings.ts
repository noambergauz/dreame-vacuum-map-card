import { useCallback, useMemo } from 'react';
import type { Hass } from '@/types/homeassistant';
import { logger } from '@/utils/logger';

export interface RoomSetting {
  roomId: number;
  roomName: string;
  // Suction level
  suctionLevel: string | null;
  suctionLevelOptions: string[];
  // Wetness level (slider)
  wetnessLevel: number | null;
  wetnessMin: number;
  wetnessMax: number;
  // Cleaning times (cycles)
  cleaningTimes: string | null;
  cleaningTimesOptions: string[];
  // Whether entities exist for this room
  hasEntities: boolean;
}

interface UseRoomSettingsOptions {
  hass: Hass;
  baseEntityId: string; // e.g., "dima"
  rooms: Array<{ id: number; name: string }>;
}

interface UseRoomSettingsReturn {
  roomSettings: Map<number, RoomSetting>;
  setSuctionLevel: (roomId: number, value: string) => void;
  setWetnessLevel: (roomId: number, value: number) => void;
  setCleaningTimes: (roomId: number, value: string) => void;
}

/**
 * Hook to read and write per-room cleaning settings from Home Assistant entities
 *
 * Entity patterns:
 * - select.{device}_room_{id}_suction_level
 * - number.{device}_room_{id}_wetness_level
 * - select.{device}_room_{id}_cleaning_times
 */
export function useRoomSettings({ hass, baseEntityId, rooms }: UseRoomSettingsOptions): UseRoomSettingsReturn {
  // Extract only the entity IDs we need to avoid depending on entire hass.states
  const roomEntityIds = useMemo(() => {
    return rooms.map((room) => ({
      roomId: room.id,
      roomName: room.name,
      suctionEntityId: `select.${baseEntityId}_room_${room.id}_suction_level`,
      wetnessEntityId: `number.${baseEntityId}_room_${room.id}_wetness_level`,
      cleaningTimesEntityId: `select.${baseEntityId}_room_${room.id}_cleaning_times`,
    }));
  }, [baseEntityId, rooms]);

  // Build room settings map from HA entity states
  // Only recalculate when relevant entities change
  const roomSettings = useMemo(() => {
    const settings = new Map<number, RoomSetting>();

    for (const entityIds of roomEntityIds) {
      const suctionEntity = hass.states[entityIds.suctionEntityId];
      const wetnessEntity = hass.states[entityIds.wetnessEntityId];
      const cleaningTimesEntity = hass.states[entityIds.cleaningTimesEntityId];

      // Check if at least one entity exists
      const hasEntities = !!(suctionEntity || wetnessEntity || cleaningTimesEntity);

      settings.set(entityIds.roomId, {
        roomId: entityIds.roomId,
        roomName: entityIds.roomName,
        // Suction level
        suctionLevel: suctionEntity?.state ?? null,
        suctionLevelOptions: (suctionEntity?.attributes?.options as string[]) ?? [],
        // Wetness level
        wetnessLevel: wetnessEntity ? parseFloat(wetnessEntity.state) : null,
        wetnessMin: (wetnessEntity?.attributes?.min as number) ?? 1,
        wetnessMax: (wetnessEntity?.attributes?.max as number) ?? 32,
        // Cleaning times
        cleaningTimes: cleaningTimesEntity?.state ?? null,
        cleaningTimesOptions: (cleaningTimesEntity?.attributes?.options as string[]) ?? [],
        hasEntities,
      });
    }

    return settings;
  }, [hass.states, roomEntityIds]);

  // Set suction level for a room
  const setSuctionLevel = useCallback(
    (roomId: number, value: string) => {
      const entityId = `select.${baseEntityId}_room_${roomId}_suction_level`;
      logger.debug('RoomSettings', 'Setting suction level:', { roomId, value, entityId });
      hass.callService('select', 'select_option', {
        entity_id: entityId,
        option: value,
      });
    },
    [hass, baseEntityId]
  );

  // Set wetness level for a room
  const setWetnessLevel = useCallback(
    (roomId: number, value: number) => {
      const entityId = `number.${baseEntityId}_room_${roomId}_wetness_level`;
      logger.debug('RoomSettings', 'Setting wetness level:', { roomId, value, entityId });
      hass.callService('number', 'set_value', {
        entity_id: entityId,
        value: value,
      });
    },
    [hass, baseEntityId]
  );

  // Set cleaning times for a room
  const setCleaningTimes = useCallback(
    (roomId: number, value: string) => {
      const entityId = `select.${baseEntityId}_room_${roomId}_cleaning_times`;
      logger.debug('RoomSettings', 'Setting cleaning times:', { roomId, value, entityId });
      hass.callService('select', 'select_option', {
        entity_id: entityId,
        option: value,
      });
    },
    [hass, baseEntityId]
  );

  return {
    roomSettings,
    setSuctionLevel,
    setWetnessLevel,
    setCleaningTimes,
  };
}
