import type { Hass, Room } from '@/types/homeassistant';
import { logger } from './logger';

interface CameraRoomData {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  room_id: number;
  name: string;
  icon?: string;
  visibility?: string;
  x?: number;
  y?: number;
  [key: string]: unknown;
}

interface CalibrationPoint {
  vacuum: { x: number; y: number };
  map: { x: number; y: number };
}

const PADDING_PERCENT = 0.05;
const VACUUM_COORD_RANGE = 20000;
const VACUUM_COORD_OFFSET = 10000;

type MapRotation = 0 | 90 | 180 | 270;

function autoCalibrateFromRooms(
  rooms: Room[],
  imageWidth: number,
  imageHeight: number,
  rotation: MapRotation = 0
): CalibrationPoint[] {
  const validRooms = rooms.filter(
    (r) => r.x0 !== undefined && r.y0 !== undefined && r.x1 !== undefined && r.y1 !== undefined
  );

  if (validRooms.length === 0) {
    return [];
  }

  const allX = validRooms.flatMap((r) => [r.x0!, r.x1!]);
  const allY = validRooms.flatMap((r) => [r.y0!, r.y1!]);

  const minX = Math.min(...allX);
  const maxX = Math.max(...allX);
  const minY = Math.min(...allY);
  const maxY = Math.max(...allY);

  if (minX === maxX || minY === maxY) {
    logger.warn('RoomParser', 'Degenerate room bounds, cannot auto-calibrate');
    return [];
  }

  const paddingX = imageWidth * PADDING_PERCENT;
  const paddingY = imageHeight * PADDING_PERCENT;

  const imgLeft = paddingX;
  const imgRight = imageWidth - paddingX;
  const imgTop = paddingY;
  const imgBottom = imageHeight - paddingY;

  logger.debug('RoomParser', 'Auto-calibrating from rooms:', {
    rotation,
    vacuumBounds: { minX, maxX, minY, maxY },
    imageBounds: { width: imageWidth, height: imageHeight },
  });

  // Map vacuum coordinate bounds to image pixel bounds based on rotation.
  // p1: Reference point (vacuum minX, minY)
  // p2: X-axis point (vacuum maxX, minY)
  // p3: Y-axis point (vacuum minX, maxY)
  switch (rotation) {
    case 90:
      return [
        { vacuum: { x: minX, y: minY }, map: { x: imgLeft, y: imgTop } },
        { vacuum: { x: maxX, y: minY }, map: { x: imgLeft, y: imgBottom } },
        { vacuum: { x: minX, y: maxY }, map: { x: imgRight, y: imgTop } },
      ];
    case 180:
      return [
        { vacuum: { x: minX, y: minY }, map: { x: imgRight, y: imgTop } },
        { vacuum: { x: maxX, y: minY }, map: { x: imgLeft, y: imgTop } },
        { vacuum: { x: minX, y: maxY }, map: { x: imgRight, y: imgBottom } },
      ];
    case 270:
      return [
        { vacuum: { x: minX, y: minY }, map: { x: imgRight, y: imgBottom } },
        { vacuum: { x: maxX, y: minY }, map: { x: imgRight, y: imgTop } },
        { vacuum: { x: minX, y: maxY }, map: { x: imgLeft, y: imgBottom } },
      ];
    default:
      // 0° rotation: vacuum minX→left, maxX→right, minY→bottom, maxY→top
      return [
        { vacuum: { x: minX, y: minY }, map: { x: imgLeft, y: imgBottom } },
        { vacuum: { x: maxX, y: minY }, map: { x: imgRight, y: imgBottom } },
        { vacuum: { x: minX, y: maxY }, map: { x: imgLeft, y: imgTop } },
      ];
  }
}

export function parseRoomsFromCamera(hass: Hass, cameraEntityId: string): Room[] {
  const cameraEntity = hass.states[cameraEntityId];
  if (!cameraEntity?.attributes?.rooms) {
    logger.debug('RoomParser', 'No rooms found in camera entity:', cameraEntityId);
    return [];
  }

  const roomsData = cameraEntity.attributes.rooms as unknown as Record<string, CameraRoomData>;

  return Object.values(roomsData).map((room) => ({
    id: room.room_id,
    name: room.name,
    icon: room.icon,
    visibility: room.visibility,
    x0: room.x0,
    y0: room.y0,
    x1: room.x1,
    y1: room.y1,
    x: room.x,
    y: room.y,
  }));
}

/**
 * Convert vacuum coordinates to map pixel coordinates.
 * Falls back to auto-calibration from rooms if no calibration points available.
 */
export function vacuumToMapCoordinates(
  vacuumX: number,
  vacuumY: number,
  calibrationPoints: CalibrationPoint[],
  imageWidth: number,
  imageHeight: number,
  rooms?: Room[],
  rotation: MapRotation = 0
): { x: number; y: number } {
  const hasProvidedCalibration = calibrationPoints && calibrationPoints.length >= 3;
  let effectiveCalibration = calibrationPoints;

  if (!hasProvidedCalibration && rooms && rooms.length > 0) {
    effectiveCalibration = autoCalibrateFromRooms(rooms, imageWidth, imageHeight, rotation);
  }

  if (!effectiveCalibration || effectiveCalibration.length < 3) {
    const normalizedX = (vacuumX + VACUUM_COORD_OFFSET) / VACUUM_COORD_RANGE;
    const normalizedY = (vacuumY + VACUUM_COORD_OFFSET) / VACUUM_COORD_RANGE;

    return {
      x: normalizedX * imageWidth,
      y: normalizedY * imageHeight,
    };
  }

  const p1 = effectiveCalibration[0];
  const p2 = effectiveCalibration[1];
  const p3 = effectiveCalibration[2];

  const scaleX = (p2.map.x - p1.map.x) / (p2.vacuum.x - p1.vacuum.x || 1);
  const scaleY = (p3.map.y - p1.map.y) / (p3.vacuum.y - p1.vacuum.y || 1);

  const x = p1.map.x + (vacuumX - p1.vacuum.x) * scaleX;
  const y = p1.map.y + (vacuumY - p1.vacuum.y) * scaleY;

  return { x, y };
}

export function createRoomPath(
  room: Room,
  calibrationPoints: CalibrationPoint[],
  imageWidth: number,
  imageHeight: number,
  allRooms?: Room[],
  rotation: MapRotation = 0
): string {
  if (room.x0 === undefined || room.y0 === undefined || room.x1 === undefined || room.y1 === undefined) {
    logger.warn('Room missing coordinates:', room);
    return '';
  }

  const toMap = (x: number, y: number) =>
    vacuumToMapCoordinates(x, y, calibrationPoints, imageWidth, imageHeight, allRooms, rotation);

  const tl = toMap(room.x0, room.y0);
  const tr = toMap(room.x1, room.y0);
  const br = toMap(room.x1, room.y1);
  const bl = toMap(room.x0, room.y1);

  return `M ${tl.x} ${tl.y} L ${tr.x} ${tr.y} L ${br.x} ${br.y} L ${bl.x} ${bl.y} Z`;
}

export type { MapRotation };
