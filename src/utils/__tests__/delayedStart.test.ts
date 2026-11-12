import { describe, expect, it } from 'vitest';
import {
  buildCleanCommand,
  buildDelayedStartVariables,
  getDelayedStartScript,
  nextOccurrence,
  toLocalIsoString,
  type CleanCommandParams,
} from '../delayedStart';
import type { MapTransform } from '../mapTransform';

const identity: MapTransform = {
  source: 'calibration',
  commandSafe: true,
  vacuumToMap: (point) => point,
  mapToVacuum: (point) => point,
} as MapTransform;

function params(overrides: Partial<CleanCommandParams> = {}): CleanCommandParams {
  return {
    entityId: 'vacuum.robot',
    mode: 'all',
    areaSelectionMode: 'zone',
    selectedRooms: new Map(),
    selectedZones: [],
    selectedSpots: [],
    imageWidth: 100,
    imageHeight: 100,
    repeats: 2,
    mapTransform: identity,
    ...overrides,
  };
}

describe('buildCleanCommand', () => {
  it('builds a full clean', () => {
    expect(buildCleanCommand(params())).toEqual({
      ok: true,
      command: { service: 'vacuum.start', data: { entity_id: 'vacuum.robot' } },
    });
  });

  it('builds a room clean with segments and repeats', () => {
    const result = buildCleanCommand(
      params({
        mode: 'room',
        selectedRooms: new Map([
          [3, 'Kitchen'],
          [7, 'Office'],
        ]),
      })
    );
    expect(result).toEqual({
      ok: true,
      command: {
        service: 'dreame_vacuum.vacuum_clean_segment',
        data: { entity_id: 'vacuum.robot', segments: [3, 7], repeats: 2 },
      },
    });
  });

  it('asks for a selection when nothing is selected', () => {
    expect(buildCleanCommand(params({ mode: 'room' }))).toEqual({ ok: false, reason: 'select_rooms_first' });
    expect(buildCleanCommand(params({ mode: 'zone' }))).toEqual({ ok: false, reason: 'select_zone_first' });
    expect(buildCleanCommand(params({ mode: 'zone', areaSelectionMode: 'spot' }))).toEqual({
      ok: false,
      reason: 'select_spot_first',
    });
  });

  it('builds a zone clean', () => {
    const result = buildCleanCommand(params({ mode: 'zone', selectedZones: [{ x1: 10, y1: 10, x2: 20, y2: 20 }] }));
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.command.service).toBe('dreame_vacuum.vacuum_clean_zone');
      expect(result.command.data).toMatchObject({ entity_id: 'vacuum.robot', repeats: 2 });
    }
  });

  it('refuses zones without map dimensions or a safe transform', () => {
    const zone = [{ x1: 10, y1: 10, x2: 20, y2: 20 }];
    expect(buildCleanCommand(params({ mode: 'zone', selectedZones: zone, imageWidth: undefined }))).toEqual({
      ok: false,
      reason: 'cannot_determine_map',
    });
    expect(buildCleanCommand(params({ mode: 'zone', selectedZones: zone, mapTransform: null }))).toEqual({
      ok: false,
      reason: 'map_transform',
    });
  });
});

describe('nextOccurrence', () => {
  const now = new Date(2026, 10, 12, 10, 30, 0);

  it('returns today when the time is still ahead', () => {
    expect(nextOccurrence('14:00', now)).toEqual(new Date(2026, 10, 12, 14, 0, 0));
  });

  it('rolls over to tomorrow when the time has passed', () => {
    expect(nextOccurrence('09:15', now)).toEqual(new Date(2026, 10, 13, 9, 15, 0));
    expect(nextOccurrence('10:30', now)).toEqual(new Date(2026, 10, 13, 10, 30, 0));
  });

  it('rejects invalid input', () => {
    expect(nextOccurrence('', now)).toBeNull();
    expect(nextOccurrence('25:00', now)).toBeNull();
    expect(nextOccurrence('abc', now)).toBeNull();
  });
});

describe('delayed start variables', () => {
  it('formats local time with its UTC offset', () => {
    const date = new Date(2026, 10, 12, 14, 0, 0);
    const iso = toLocalIsoString(date);
    expect(iso).toMatch(/^2026-11-12T14:00:00[+-]\d{2}:\d{2}$/);
    expect(new Date(iso).getTime()).toBe(date.getTime());
  });

  it('passes the command, trigger and defaults to the script', () => {
    const variables = buildDelayedStartVariables(
      { service: 'vacuum.start', data: { entity_id: 'vacuum.robot' } },
      { label: 'House empty', trigger: { label: 'House empty', entity: 'input_select.house', state: 'Empty' } },
      {}
    );
    expect(variables).toEqual({
      service: 'vacuum.start',
      data: { entity_id: 'vacuum.robot' },
      label: 'House empty',
      trigger_entity: 'input_select.house',
      trigger_state: 'Empty',
      not_before: '',
      timeout_hours: 12,
    });
  });

  it('uses the default script unless configured', () => {
    expect(getDelayedStartScript({})).toBe('script.dreame_delayed_start');
    expect(getDelayedStartScript({ script: 'script.other' })).toBe('script.other');
  });
});
