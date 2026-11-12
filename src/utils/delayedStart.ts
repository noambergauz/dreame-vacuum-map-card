import type {
  AreaSelectionMode,
  CleaningSelectionMode,
  DelayedStartConfig,
  DelayedStartTrigger,
  Spot,
  Zone,
} from '@/types/homeassistant';
import type { MapTransform } from './mapTransform';
import { buildCleanSpotPayload, buildCleanZonePayload } from './zoneConverter';

export const DEFAULT_DELAYED_START_SCRIPT = 'script.dreame_delayed_start';
export const DEFAULT_DELAYED_START_TIMEOUT_HOURS = 12;

/** A fully resolved Home Assistant service call that starts a cleaning job. */
export interface CleanCommand {
  service: string;
  data: Record<string, unknown>;
}

export type CleanCommandResult =
  | { ok: true; command: CleanCommand }
  | {
      ok: false;
      reason:
        | 'select_rooms_first'
        | 'select_zone_first'
        | 'select_spot_first'
        | 'cannot_determine_map'
        | 'map_transform';
    };

export interface CleanCommandParams {
  entityId: string;
  mode: CleaningSelectionMode;
  areaSelectionMode: AreaSelectionMode;
  selectedRooms: Map<number, string>;
  selectedZones: Zone[];
  selectedSpots: Spot[];
  imageWidth?: number;
  imageHeight?: number;
  repeats: number;
  mapTransform: MapTransform | null;
}

/**
 * Builds the service call the Start button would send for the current selection,
 * so it can be handed to Home Assistant and sent later.
 */
export function buildCleanCommand(params: CleanCommandParams): CleanCommandResult {
  const { entityId, mode, areaSelectionMode, repeats, mapTransform } = params;

  if (mode === 'all') {
    return { ok: true, command: { service: 'vacuum.start', data: { entity_id: entityId } } };
  }

  if (mode === 'room') {
    if (params.selectedRooms.size === 0) return { ok: false, reason: 'select_rooms_first' };
    return {
      ok: true,
      command: {
        service: 'dreame_vacuum.vacuum_clean_segment',
        data: { entity_id: entityId, segments: Array.from(params.selectedRooms.keys()), repeats },
      },
    };
  }

  const { imageWidth, imageHeight } = params;

  if (areaSelectionMode === 'spot') {
    if (params.selectedSpots.length === 0) return { ok: false, reason: 'select_spot_first' };
    if (!imageWidth || !imageHeight) return { ok: false, reason: 'cannot_determine_map' };
    const spots = buildCleanSpotPayload(params.selectedSpots, mapTransform, imageWidth, imageHeight);
    if (!spots.ok) return { ok: false, reason: 'map_transform' };
    return {
      ok: true,
      command: {
        service: 'dreame_vacuum.vacuum_clean_spot',
        data: { entity_id: entityId, points: spots.points, repeats },
      },
    };
  }

  if (params.selectedZones.length === 0) return { ok: false, reason: 'select_zone_first' };
  if (!imageWidth || !imageHeight) return { ok: false, reason: 'cannot_determine_map' };
  const zones = buildCleanZonePayload(params.selectedZones, mapTransform, imageWidth, imageHeight);
  if (!zones.ok) return { ok: false, reason: 'map_transform' };
  return {
    ok: true,
    command: {
      service: 'dreame_vacuum.vacuum_clean_zone',
      data: { entity_id: entityId, zone: zones.zones, repeats },
    },
  };
}

/** Returns the next moment the wall clock reads `hhmm` (today if still ahead, otherwise tomorrow). */
export function nextOccurrence(hhmm: string, now: Date = new Date()): Date | null {
  const match = /^(\d{1,2}):(\d{2})$/.exec(hhmm.trim());
  if (!match) return null;
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (hours > 23 || minutes > 59) return null;

  const target = new Date(now);
  target.setHours(hours, minutes, 0, 0);
  if (target.getTime() <= now.getTime()) target.setDate(target.getDate() + 1);
  return target;
}

/** ISO 8601 with the browser's local UTC offset, e.g. 2026-11-12T14:00:00+00:00. */
export function toLocalIsoString(date: Date): string {
  const pad = (value: number): string => String(Math.abs(value)).padStart(2, '0');
  const offset = -date.getTimezoneOffset();
  const sign = offset >= 0 ? '+' : '-';
  return (
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` +
    `T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}` +
    `${sign}${pad(Math.trunc(offset / 60))}:${pad(offset % 60)}`
  );
}

export interface DelayedStartRequest {
  /** Human readable description of what the start is waiting for. */
  label: string;
  trigger?: DelayedStartTrigger;
  notBefore?: Date;
}

/** Variables passed to the delayed-start script through `script.turn_on`. */
export function buildDelayedStartVariables(
  command: CleanCommand,
  request: DelayedStartRequest,
  config: DelayedStartConfig
): Record<string, unknown> {
  return {
    service: command.service,
    data: command.data,
    label: request.label,
    trigger_entity: request.trigger?.entity ?? '',
    trigger_state: request.trigger?.state ?? '',
    not_before: request.notBefore ? toLocalIsoString(request.notBefore) : '',
    timeout_hours: config.timeout_hours ?? DEFAULT_DELAYED_START_TIMEOUT_HOURS,
  };
}

export function getDelayedStartScript(config: DelayedStartConfig): string {
  return config.script || DEFAULT_DELAYED_START_SCRIPT;
}
