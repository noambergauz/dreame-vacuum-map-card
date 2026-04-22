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

/**
 * Parse rooms from camera entity attributes
 */
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
 * Convert vacuum coordinates to map pixel coordinates
 * Uses calibration points for accurate transformation
 */
export function vacuumToMapCoordinates(
  vacuumX: number,
  vacuumY: number,
  calibrationPoints: CalibrationPoint[],
  imageWidth: number,
  imageHeight: number
): { x: number; y: number } {
  if (!calibrationPoints || calibrationPoints.length < 3) {
    // Fallback: simple scaling if no calibration
    // Assuming vacuum coordinates range from -10000 to 10000 (typical for Dreame)
    const vacuumRange = 20000;
    const normalizedX = (vacuumX + 10000) / vacuumRange;
    const normalizedY = (vacuumY + 10000) / vacuumRange;

    return {
      x: normalizedX * imageWidth,
      y: normalizedY * imageHeight,
    };
  }

  // Use the first three calibration points for transformation
  const p1 = calibrationPoints[0];
  const p2 = calibrationPoints[1];
  const p3 = calibrationPoints[2];

  // Calculate scale factors
  const scaleX = (p2.map.x - p1.map.x) / (p2.vacuum.x - p1.vacuum.x || 1);
  const scaleY = (p3.map.y - p1.map.y) / (p3.vacuum.y - p1.vacuum.y || 1);

  // Apply transformation
  const x = p1.map.x + (vacuumX - p1.vacuum.x) * scaleX;
  const y = p1.map.y + (vacuumY - p1.vacuum.y) * scaleY;

  return { x, y };
}

/**
 * Create SVG path data for room polygon
 */
export function createRoomPath(
  room: Room,
  calibrationPoints: CalibrationPoint[],
  imageWidth: number,
  imageHeight: number
): string {
  if (room.x0 === undefined || room.y0 === undefined || room.x1 === undefined || room.y1 === undefined) {
    logger.warn('Room missing coordinates:', room);
    return '';
  }

  // Convert room corners to map coordinates
  const topLeft = vacuumToMapCoordinates(room.x0, room.y0, calibrationPoints, imageWidth, imageHeight);
  const topRight = vacuumToMapCoordinates(room.x1, room.y0, calibrationPoints, imageWidth, imageHeight);
  const bottomRight = vacuumToMapCoordinates(room.x1, room.y1, calibrationPoints, imageWidth, imageHeight);
  const bottomLeft = vacuumToMapCoordinates(room.x0, room.y1, calibrationPoints, imageWidth, imageHeight);

  const path = `M ${topLeft.x} ${topLeft.y} L ${topRight.x} ${topRight.y} L ${bottomRight.x} ${bottomRight.y} L ${bottomLeft.x} ${bottomLeft.y} Z`;
  return path;
}
