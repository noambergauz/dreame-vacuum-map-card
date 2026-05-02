import { useCallback, useMemo } from 'react';
import type { Hass } from '@/types/homeassistant';
import { buildSegmentEntityId, DREAME_SEGMENT_SELECTS, DREAME_SEGMENT_NUMBERS } from '@/constants';
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
  // Mop pressure (Light/Normal)
  mopPressure: string | null;
  mopPressureOptions: string[];
  // Mop temperature (Normal/Warm)
  mopTemperature: string | null;
  mopTemperatureOptions: string[];
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
  setMopPressure: (roomId: number, value: string) => void;
  setMopTemperature: (roomId: number, value: string) => void;
}

/**
 * Hook to read and write per-room cleaning settings from Home Assistant entities
 *
 * Entity patterns:
 * - select.{device}_room_{id}_suction_level
 * - number.{device}_room_{id}_wetness_level
 * - select.{device}_room_{id}_cleaning_times
 * - select.{device}_room_{id}_mop_pressure
 * - select.{device}_room_{id}_mop_temperature
 */
export function useRoomSettings({ hass, baseEntityId, rooms }: UseRoomSettingsOptions): UseRoomSettingsReturn {
  // Extract only the entity IDs we need to avoid depending on entire hass.states
  const roomEntityIds = useMemo(() => {
    return rooms.map((room) => ({
      roomId: room.id,
      roomName: room.name,
      suctionEntityId: buildSegmentEntityId('select', baseEntityId, room.id, DREAME_SEGMENT_SELECTS.SUCTION_LEVEL.key),
      wetnessEntityId: buildSegmentEntityId('number', baseEntityId, room.id, DREAME_SEGMENT_NUMBERS.WETNESS_LEVEL.key),
      cleaningTimesEntityId: buildSegmentEntityId(
        'select',
        baseEntityId,
        room.id,
        DREAME_SEGMENT_SELECTS.CLEANING_TIMES.key
      ),
      mopPressureEntityId: buildSegmentEntityId(
        'select',
        baseEntityId,
        room.id,
        DREAME_SEGMENT_SELECTS.MOP_PRESSURE.key
      ),
      mopTemperatureEntityId: buildSegmentEntityId(
        'select',
        baseEntityId,
        room.id,
        DREAME_SEGMENT_SELECTS.MOP_TEMPERATURE.key
      ),
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
      const mopPressureEntity = hass.states[entityIds.mopPressureEntityId];
      const mopTemperatureEntity = hass.states[entityIds.mopTemperatureEntityId];

      // Check if at least one entity exists
      const hasEntities = !!(
        suctionEntity ||
        wetnessEntity ||
        cleaningTimesEntity ||
        mopPressureEntity ||
        mopTemperatureEntity
      );

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
        // Mop pressure
        mopPressure: mopPressureEntity?.state ?? null,
        mopPressureOptions: (mopPressureEntity?.attributes?.options as string[]) ?? [],
        // Mop temperature
        mopTemperature: mopTemperatureEntity?.state ?? null,
        mopTemperatureOptions: (mopTemperatureEntity?.attributes?.options as string[]) ?? [],
        hasEntities,
      });
    }

    return settings;
  }, [hass.states, roomEntityIds]);

  // Set suction level for a room
  const setSuctionLevel = useCallback(
    (roomId: number, value: string) => {
      const entityId = buildSegmentEntityId('select', baseEntityId, roomId, DREAME_SEGMENT_SELECTS.SUCTION_LEVEL.key);
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
      const entityId = buildSegmentEntityId('number', baseEntityId, roomId, DREAME_SEGMENT_NUMBERS.WETNESS_LEVEL.key);
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
      const entityId = buildSegmentEntityId('select', baseEntityId, roomId, DREAME_SEGMENT_SELECTS.CLEANING_TIMES.key);
      logger.debug('RoomSettings', 'Setting cleaning times:', { roomId, value, entityId });
      hass.callService('select', 'select_option', {
        entity_id: entityId,
        option: value,
      });
    },
    [hass, baseEntityId]
  );

  // Set mop pressure for a room
  const setMopPressure = useCallback(
    (roomId: number, value: string) => {
      const entityId = buildSegmentEntityId('select', baseEntityId, roomId, DREAME_SEGMENT_SELECTS.MOP_PRESSURE.key);
      logger.debug('RoomSettings', 'Setting mop pressure:', { roomId, value, entityId });
      hass.callService('select', 'select_option', {
        entity_id: entityId,
        option: value,
      });
    },
    [hass, baseEntityId]
  );

  // Set mop temperature for a room
  const setMopTemperature = useCallback(
    (roomId: number, value: string) => {
      const entityId = buildSegmentEntityId('select', baseEntityId, roomId, DREAME_SEGMENT_SELECTS.MOP_TEMPERATURE.key);
      logger.debug('RoomSettings', 'Setting mop temperature:', { roomId, value, entityId });
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
    setMopPressure,
    setMopTemperature,
  };
}
