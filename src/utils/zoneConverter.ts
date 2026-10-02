import type { Spot } from '@/types/homeassistant';
import type { MapTransform } from './mapTransform';

/**
 * Zone in UI coordinate system (percentages of image dimensions)
 */
export interface UIZone {
  x1: number; // 0-100
  y1: number; // 0-100
  x2: number; // 0-100
  y2: number; // 0-100
}

/**
 * Zone in vacuum coordinate system (mm from origin)
 */
export interface VacuumZone {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export type ZoneConversionFailure = 'no_transform' | 'estimated_transform' | 'invalid_coordinates' | 'unsafe_zone';

export type ZoneConvertResult = { ok: true; zone: VacuumZone } | { ok: false; reason: ZoneConversionFailure };

export const MAX_ZONE_SPAN_MM = 50_000;

export function convertUIZoneToVacuumZone(
  uiZone: UIZone,
  transform: MapTransform | null,
  imageWidth: number,
  imageHeight: number
): ZoneConvertResult {
  if (!transform) {
    return { ok: false, reason: 'no_transform' };
  }
  if (!transform.commandSafe) {
    return { ok: false, reason: 'estimated_transform' };
  }
  if (!Number.isFinite(imageWidth) || !Number.isFinite(imageHeight) || imageWidth <= 0 || imageHeight <= 0) {
    return { ok: false, reason: 'invalid_coordinates' };
  }

  const left = (Math.min(uiZone.x1, uiZone.x2) / 100) * imageWidth;
  const right = (Math.max(uiZone.x1, uiZone.x2) / 100) * imageWidth;
  const top = (Math.min(uiZone.y1, uiZone.y2) / 100) * imageHeight;
  const bottom = (Math.max(uiZone.y1, uiZone.y2) / 100) * imageHeight;
  const vacuumCorners = [
    transform.mapToVacuum({ x: left, y: top }),
    transform.mapToVacuum({ x: right, y: top }),
    transform.mapToVacuum({ x: right, y: bottom }),
    transform.mapToVacuum({ x: left, y: bottom }),
  ];

  if (vacuumCorners.some((point) => !Number.isFinite(point.x) || !Number.isFinite(point.y))) {
    return { ok: false, reason: 'invalid_coordinates' };
  }

  const x1 = Math.round(Math.min(...vacuumCorners.map((point) => point.x)));
  const y1 = Math.round(Math.min(...vacuumCorners.map((point) => point.y)));
  const x2 = Math.round(Math.max(...vacuumCorners.map((point) => point.x)));
  const y2 = Math.round(Math.max(...vacuumCorners.map((point) => point.y)));
  const width = x2 - x1;
  const height = y2 - y1;

  if (width <= 0 || height <= 0 || width > MAX_ZONE_SPAN_MM || height > MAX_ZONE_SPAN_MM) {
    return { ok: false, reason: 'unsafe_zone' };
  }

  return { ok: true, zone: { x1, y1, x2, y2 } };
}

export type CleanZonePayload = { ok: true; zones: number[][] } | { ok: false; reason: ZoneConversionFailure };

export function buildCleanZonePayload(
  zones: UIZone[],
  transform: MapTransform | null,
  imageWidth: number,
  imageHeight: number
): CleanZonePayload {
  const payload: number[][] = [];
  for (const zone of zones) {
    const converted = convertUIZoneToVacuumZone(zone, transform, imageWidth, imageHeight);
    if (!converted.ok) return converted;
    payload.push([converted.zone.x1, converted.zone.y1, converted.zone.x2, converted.zone.y2]);
  }
  return { ok: true, zones: payload };
}

export type CleanSpotPayload =
  | { ok: true; points: number[][] }
  | { ok: false; reason: Exclude<ZoneConversionFailure, 'unsafe_zone'> };

export function buildCleanSpotPayload(
  spots: Spot[],
  transform: MapTransform | null,
  imageWidth: number,
  imageHeight: number
): CleanSpotPayload {
  if (!transform) return { ok: false, reason: 'no_transform' };
  if (!transform.commandSafe) return { ok: false, reason: 'estimated_transform' };
  if (!Number.isFinite(imageWidth) || !Number.isFinite(imageHeight) || imageWidth <= 0 || imageHeight <= 0) {
    return { ok: false, reason: 'invalid_coordinates' };
  }

  const points: number[][] = [];
  for (const spot of spots) {
    if (
      !Number.isFinite(spot.x) ||
      !Number.isFinite(spot.y) ||
      spot.x < 0 ||
      spot.x > 100 ||
      spot.y < 0 ||
      spot.y > 100
    ) {
      return { ok: false, reason: 'invalid_coordinates' };
    }

    const point = transform.mapToVacuum({
      x: (spot.x / 100) * imageWidth,
      y: (spot.y / 100) * imageHeight,
    });
    if (!Number.isFinite(point.x) || !Number.isFinite(point.y)) {
      return { ok: false, reason: 'invalid_coordinates' };
    }
    points.push([Math.round(point.x), Math.round(point.y)]);
  }

  return { ok: true, points };
}
