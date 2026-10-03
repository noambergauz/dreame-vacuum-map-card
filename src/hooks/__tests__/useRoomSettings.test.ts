import { describe, expect, it } from 'vitest';
import {
  readRoomSelect,
  readRoomSelectStore,
  readWetnessLevel,
  writeRoomSelectStore,
  type ObservedSelect,
  type RoomSelectStore,
} from '../useRoomSettings';

const pressure: ObservedSelect = {
  options: ['light', 'normal'],
  pairs: [{ code: 2, option: 'normal' }],
};

describe('readRoomSelect', () => {
  it('records a published option with the numeric code that arrived with it', () => {
    expect(
      readRoomSelect({ state: 'normal', attributes: { options: ['light', 'normal'], value: 2 } }, undefined)
    ).toMatchObject({
      value: 'normal',
      options: ['light', 'normal'],
      next: pressure,
      changed: true,
    });
  });

  it('restores the stored pair after the select publishes only unavailable', () => {
    expect(
      readRoomSelect({ state: 'unavailable', attributes: { options: ['unavailable'], value: 2 } }, pressure)
    ).toMatchObject({
      value: 'normal',
      options: ['light', 'normal'],
      changed: false,
    });
  });

  it('restores a 1-based cleaning repeat from the stored pair', () => {
    const repeats: ObservedSelect = {
      options: ['1x', '2x'],
      pairs: [{ code: 1, option: '1x' }],
    };

    expect(
      readRoomSelect({ state: 'unavailable', attributes: { options: ['unavailable'], value: 1 } }, repeats).value
    ).toBe('1x');
  });

  it('does not invent a catalog when unavailable and nothing was stored', () => {
    expect(
      readRoomSelect({ state: 'unavailable', attributes: { options: ['unavailable'], value: 1 } }, undefined)
    ).toEqual({
      value: null,
      options: [],
      next: undefined,
      changed: false,
    });
  });

  it('returns nothing when the entity is missing', () => {
    expect(readRoomSelect(undefined, undefined)).toEqual({
      value: null,
      options: [],
      next: undefined,
      changed: false,
    });
  });
});

describe('readRoomSelectStore', () => {
  it('restores pairs this browser already saw', () => {
    const memory = new Map<string, string>();
    const storage = {
      getItem: (key: string) => memory.get(key) ?? null,
      setItem: (key: string, value: string) => {
        memory.set(key, value);
      },
    };
    const store: RoomSelectStore = { version: 1, rooms: { '3': { mopPressure: pressure } } };

    writeRoomSelectStore(store, storage);

    expect(readRoomSelectStore(storage)).toEqual(store);
  });
});

describe('readWetnessLevel', () => {
  it('ignores the unavailable placeholder', () => {
    expect(readWetnessLevel({ state: 'unavailable' })).toBeNull();
  });

  it('reads a numeric state', () => {
    expect(readWetnessLevel({ state: '16' })).toBe(16);
  });
});
