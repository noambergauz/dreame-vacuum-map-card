import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Hass, HassEntity } from '@/types/homeassistant';
import { DREAME_SEGMENT_NUMBERS, DREAME_SEGMENT_SELECTS, STORAGE_KEY, vacuumStorageKey } from '@/constants';
import { useDeviceEntities } from '@/contexts/useVacuumCard';
import { isSelectPlaceholder, publishedOptionList, sameStringList } from '@/utils/selectDisplay';
import { logger } from '@/utils/logger';

export interface ObservedPair {
  code: number;
  option: string;
}

export interface ObservedSelect {
  options: string[];
  pairs: ObservedPair[];
}

type RoomSelectSetting = 'cleaningMode' | 'suction' | 'cleaningTimes' | 'mopPressure' | 'mopTemperature';

export interface RoomSelectStore {
  version: 1;
  rooms: Record<string, Partial<Record<RoomSelectSetting, ObservedSelect>>>;
}

const EMPTY_STORE: RoomSelectStore = { version: 1, rooms: {} };

export interface RoomSelectReading {
  value: string | null;
  options: string[];
  next: ObservedSelect | undefined;
  changed: boolean;
}

function isPlaceholderState(state: string | null | undefined): boolean {
  return !state || isSelectPlaceholder(state);
}

function numericAttribute(value: unknown): number | null {
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

function finiteOr(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function isRoomSelectStore(value: unknown): value is RoomSelectStore {
  if (typeof value !== 'object' || value === null) return false;
  const record = value as { version?: unknown; rooms?: unknown };
  return (
    record.version === 1 && typeof record.rooms === 'object' && record.rooms !== null && !Array.isArray(record.rooms)
  );
}

export function readRoomSelectStore(storageKey: string, storage?: Pick<Storage, 'getItem'>): RoomSelectStore {
  let parsed: unknown;
  try {
    const raw = (storage ?? localStorage).getItem(storageKey);
    if (!raw) return EMPTY_STORE;
    parsed = JSON.parse(raw);
  } catch {
    return EMPTY_STORE;
  }
  return isRoomSelectStore(parsed) ? parsed : EMPTY_STORE;
}

export function writeRoomSelectStore(
  storageKey: string,
  store: RoomSelectStore,
  storage?: Pick<Storage, 'setItem'>
): void {
  try {
    (storage ?? localStorage).setItem(storageKey, JSON.stringify(store));
  } catch {
    // localStorage not available
  }
}

export function rememberPair(pairs: readonly ObservedPair[], code: number, option: string): readonly ObservedPair[] {
  const exact = pairs.some((pair) => pair.code === code && pair.option === option);
  const conflict = pairs.some(
    (pair) => (pair.code === code || pair.option === option) && !(pair.code === code && pair.option === option)
  );
  if (exact && !conflict) return pairs;
  return [...pairs.filter((pair) => pair.code !== code && pair.option !== option), { code, option }];
}

function sameObserved(left: ObservedSelect | undefined, right: ObservedSelect): boolean {
  if (!left || !sameStringList(left.options, right.options) || left.pairs.length !== right.pairs.length) return false;
  return left.pairs.every(
    (pair, index) => pair.code === right.pairs[index]?.code && pair.option === right.pairs[index]?.option
  );
}

export function readRoomSelect(
  entity: Pick<HassEntity, 'state' | 'attributes'> | undefined,
  stored: ObservedSelect | undefined
): RoomSelectReading {
  if (!entity) return { value: null, options: [], next: undefined, changed: false };
  const known = stored && Array.isArray(stored.options) && Array.isArray(stored.pairs) ? stored : undefined;

  const published = publishedOptionList(entity.attributes.options);
  const code = numericAttribute(entity.attributes.value);
  const state = isPlaceholderState(entity.state) ? null : entity.state;

  if (published.length > 0) {
    const pairs = state && code !== null ? rememberPair(known?.pairs ?? [], code, state) : (known?.pairs ?? []);
    const next: ObservedSelect = { options: published, pairs: [...pairs] };
    const value = state && published.includes(state) ? state : null;
    return { value, options: published, next, changed: !sameObserved(known, next) };
  }

  const options = known?.options ?? [];
  const match = code === null ? undefined : known?.pairs.find((pair) => pair.code === code);
  const value = match && options.includes(match.option) ? match.option : null;
  return { value, options, next: known, changed: false };
}

export function readWetnessLevel(entity: Pick<HassEntity, 'state'> | undefined): number | null {
  if (!entity || isPlaceholderState(entity.state)) return null;
  const parsed = Number(entity.state);
  return Number.isFinite(parsed) ? parsed : null;
}

export interface RoomSetting {
  roomId: number;
  roomName: string;
  // Cleaning mode (sweeping/mopping/sweeping_and_mopping)
  cleaningMode: string | null;
  cleaningModeOptions: string[];
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
  cleaningModeEntityId?: string;
  suctionEntityId?: string;
  wetnessEntityId?: string;
  cleaningTimesEntityId?: string;
  mopPressureEntityId?: string;
  mopTemperatureEntityId?: string;
}

interface UseRoomSettingsOptions {
  hass: Hass;
  vacuumEntityId: string;
  rooms: Array<{ id: number; name: string }>;
}

interface UseRoomSettingsReturn {
  roomSettings: Map<number, RoomSetting>;
  setCleaningMode: (roomId: number, value: string) => void;
  setSuctionLevel: (roomId: number, value: string) => void;
  setWetnessLevel: (roomId: number, value: number) => void;
  setCleaningTimes: (roomId: number, value: string) => void;
  setMopPressure: (roomId: number, value: string) => void;
  setMopTemperature: (roomId: number, value: string) => void;
}

/**
 * Hook to read and write per-room cleaning settings from Home Assistant entities
 *
 */
function observeRoom(
  store: RoomSelectStore,
  roomId: number,
  readings: Array<[RoomSelectSetting, Pick<HassEntity, 'state' | 'attributes'> | undefined]>
): { readings: RoomSelectReading[]; store: RoomSelectStore } {
  const roomKey = String(roomId);
  const room = store.rooms[roomKey] ?? {};
  let nextRoom = room;
  let changed = false;
  const observed = readings.map(([setting, entity]) => {
    const reading = readRoomSelect(entity, room[setting]);
    if (reading.changed && reading.next) {
      nextRoom = { ...nextRoom, [setting]: reading.next };
      changed = true;
    }
    return reading;
  });
  if (!changed) return { readings: observed, store };
  return { readings: observed, store: { version: 1, rooms: { ...store.rooms, [roomKey]: nextRoom } } };
}

export function useRoomSettings({ hass, vacuumEntityId, rooms }: UseRoomSettingsOptions): UseRoomSettingsReturn {
  const { getRoom } = useDeviceEntities();
  const storageKey = vacuumStorageKey(STORAGE_KEY.ROOM_SELECTS, vacuumEntityId);
  const [store, setStore] = useState(() => readRoomSelectStore(storageKey));
  const roomEntityIds = useMemo(() => {
    return rooms.map((room) => ({
      roomId: room.id,
      roomName: room.name,
      cleaningModeEntityId: getRoom(room.id, 'select', DREAME_SEGMENT_SELECTS.CLEANING_MODE.key),
      suctionEntityId: getRoom(room.id, 'select', DREAME_SEGMENT_SELECTS.SUCTION_LEVEL.key),
      wetnessEntityId: getRoom(room.id, 'number', DREAME_SEGMENT_NUMBERS.WETNESS_LEVEL.key),
      cleaningTimesEntityId: getRoom(room.id, 'select', DREAME_SEGMENT_SELECTS.CLEANING_TIMES.key),
      mopPressureEntityId: getRoom(room.id, 'select', DREAME_SEGMENT_SELECTS.MOP_PRESSURE.key),
      mopTemperatureEntityId: getRoom(room.id, 'select', DREAME_SEGMENT_SELECTS.MOP_TEMPERATURE.key),
    }));
  }, [getRoom, rooms]);

  const observed = useMemo(() => {
    let nextStore = store;
    const settings = new Map<number, RoomSetting>();

    for (const entityIds of roomEntityIds) {
      const cleaningModeEntity = entityIds.cleaningModeEntityId
        ? hass.states[entityIds.cleaningModeEntityId]
        : undefined;
      const suctionEntity = entityIds.suctionEntityId ? hass.states[entityIds.suctionEntityId] : undefined;
      const wetnessEntity = entityIds.wetnessEntityId ? hass.states[entityIds.wetnessEntityId] : undefined;
      const cleaningTimesEntity = entityIds.cleaningTimesEntityId
        ? hass.states[entityIds.cleaningTimesEntityId]
        : undefined;
      const mopPressureEntity = entityIds.mopPressureEntityId ? hass.states[entityIds.mopPressureEntityId] : undefined;
      const mopTemperatureEntity = entityIds.mopTemperatureEntityId
        ? hass.states[entityIds.mopTemperatureEntityId]
        : undefined;

      const hasEntities = !!(
        cleaningModeEntity ||
        suctionEntity ||
        wetnessEntity ||
        cleaningTimesEntity ||
        mopPressureEntity ||
        mopTemperatureEntity
      );
      const room = observeRoom(nextStore, entityIds.roomId, [
        ['cleaningMode', cleaningModeEntity],
        ['suction', suctionEntity],
        ['cleaningTimes', cleaningTimesEntity],
        ['mopPressure', mopPressureEntity],
        ['mopTemperature', mopTemperatureEntity],
      ]);
      nextStore = room.store;
      const [cleaningMode, suction, cleaningTimes, mopPressure, mopTemperature] = room.readings;

      settings.set(entityIds.roomId, {
        roomId: entityIds.roomId,
        roomName: entityIds.roomName,
        cleaningMode: cleaningMode?.value ?? null,
        cleaningModeOptions: cleaningMode?.options ?? [],
        suctionLevel: suction?.value ?? null,
        suctionLevelOptions: suction?.options ?? [],
        wetnessLevel: readWetnessLevel(wetnessEntity),
        wetnessMin: finiteOr(wetnessEntity?.attributes?.min, 1),
        wetnessMax: finiteOr(wetnessEntity?.attributes?.max, 32),
        cleaningTimes: cleaningTimes?.value ?? null,
        cleaningTimesOptions: cleaningTimes?.options ?? [],
        mopPressure: mopPressure?.value ?? null,
        mopPressureOptions: mopPressure?.options ?? [],
        mopTemperature: mopTemperature?.value ?? null,
        mopTemperatureOptions: mopTemperature?.options ?? [],
        hasEntities,
        cleaningModeEntityId: entityIds.cleaningModeEntityId,
        suctionEntityId: entityIds.suctionEntityId,
        wetnessEntityId: entityIds.wetnessEntityId,
        cleaningTimesEntityId: entityIds.cleaningTimesEntityId,
        mopPressureEntityId: entityIds.mopPressureEntityId,
        mopTemperatureEntityId: entityIds.mopTemperatureEntityId,
      });
    }

    return { settings, store: nextStore };
  }, [hass.states, roomEntityIds, store]);

  if (observed.store !== store) {
    setStore(observed.store);
  }

  useEffect(() => {
    writeRoomSelectStore(storageKey, store);
  }, [storageKey, store]);

  const setCleaningMode = useCallback(
    (roomId: number, value: string) => {
      const entityId = getRoom(roomId, 'select', DREAME_SEGMENT_SELECTS.CLEANING_MODE.key);
      if (!entityId) return;
      logger.debug('RoomSettings', 'Setting cleaning mode:', { roomId, value, entityId });
      hass.callService('select', 'select_option', { entity_id: entityId, option: value });
    },
    [getRoom, hass]
  );

  // Set suction level for a room
  const setSuctionLevel = useCallback(
    (roomId: number, value: string) => {
      const entityId = getRoom(roomId, 'select', DREAME_SEGMENT_SELECTS.SUCTION_LEVEL.key);
      if (!entityId) return;
      logger.debug('RoomSettings', 'Setting suction level:', { roomId, value, entityId });
      hass.callService('select', 'select_option', { entity_id: entityId, option: value });
    },
    [getRoom, hass]
  );

  const setWetnessLevel = useCallback(
    (roomId: number, value: number) => {
      const entityId = getRoom(roomId, 'number', DREAME_SEGMENT_NUMBERS.WETNESS_LEVEL.key);
      if (!entityId) return;
      logger.debug('RoomSettings', 'Setting wetness level:', { roomId, value, entityId });
      hass.callService('number', 'set_value', { entity_id: entityId, value });
    },
    [getRoom, hass]
  );

  const setCleaningTimes = useCallback(
    (roomId: number, value: string) => {
      const entityId = getRoom(roomId, 'select', DREAME_SEGMENT_SELECTS.CLEANING_TIMES.key);
      if (!entityId) return;
      logger.debug('RoomSettings', 'Setting cleaning times:', { roomId, value, entityId });
      hass.callService('select', 'select_option', { entity_id: entityId, option: value });
    },
    [getRoom, hass]
  );

  const setMopPressure = useCallback(
    (roomId: number, value: string) => {
      const entityId = getRoom(roomId, 'select', DREAME_SEGMENT_SELECTS.MOP_PRESSURE.key);
      if (!entityId) return;
      logger.debug('RoomSettings', 'Setting mop pressure:', { roomId, value, entityId });
      hass.callService('select', 'select_option', { entity_id: entityId, option: value });
    },
    [getRoom, hass]
  );

  const setMopTemperature = useCallback(
    (roomId: number, value: string) => {
      const entityId = getRoom(roomId, 'select', DREAME_SEGMENT_SELECTS.MOP_TEMPERATURE.key);
      if (!entityId) return;
      logger.debug('RoomSettings', 'Setting mop temperature:', { roomId, value, entityId });
      hass.callService('select', 'select_option', { entity_id: entityId, option: value });
    },
    [getRoom, hass]
  );

  return {
    roomSettings: observed.settings,
    setCleaningMode,
    setSuctionLevel,
    setWetnessLevel,
    setCleaningTimes,
    setMopPressure,
    setMopTemperature,
  };
}
