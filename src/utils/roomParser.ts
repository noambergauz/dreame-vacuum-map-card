import type { Hass, Room } from '@/types/homeassistant';
import { logger } from './logger';

interface CameraRoomData {
  x0?: number;
  y0?: number;
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  outline?: [number, number][];
  outlines?: [number, number][][];
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

export function autoCalibrateFromRooms(
  rooms: Room[],
  imageWidth: number,
  imageHeight: number,
  rotation: MapRotation = 0
): CalibrationPoint[] {
  const validRooms = rooms.filter(
    (r) =>
      (r.x0 !== undefined && r.y0 !== undefined && r.x1 !== undefined && r.y1 !== undefined) ||
      (r.outline && r.outline.length > 0) ||
      (r.outlines && r.outlines.length > 0)
  );

  if (validRooms.length === 0) {
    return [];
  }

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  for (const room of validRooms) {
    if (room.x0 !== undefined && room.x0 !== null && room.x1 !== undefined && room.x1 !== null) {
      minX = Math.min(minX, room.x0, room.x1);
      maxX = Math.max(maxX, room.x0, room.x1);
    }
    if (room.y0 !== undefined && room.y0 !== null && room.y1 !== undefined && room.y1 !== null) {
      minY = Math.min(minY, room.y0, room.y1);
      maxY = Math.max(maxY, room.y0, room.y1);
    }
    if (room.outlines && room.outlines.length > 0) {
      for (const outline of room.outlines) {
        for (const point of outline) {
          minX = Math.min(minX, point[0]);
          maxX = Math.max(maxX, point[0]);
          minY = Math.min(minY, point[1]);
          maxY = Math.max(maxY, point[1]);
        }
      }
    } else if (room.outline && room.outline.length > 0) {
      for (const point of room.outline) {
        minX = Math.min(minX, point[0]);
        maxX = Math.max(maxX, point[0]);
        minY = Math.min(minY, point[1]);
        maxY = Math.max(maxY, point[1]);
      }
    }
  }

  if (minX === Infinity || minY === Infinity || maxX === -Infinity || maxY === -Infinity) {
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

  return Object.values(roomsData).map((room) => {
    // Normalize coordinates to always output x0, y0, x1, y1
    // L50 uses x0, y0, x1, y1. X40 uses x1, y1, x2, y2.
    const startX = room.x0 !== undefined ? room.x0 : room.x1;
    const startY = room.y0 !== undefined ? room.y0 : room.y1;
    const endX = room.x0 !== undefined ? room.x1 : room.x2;
    const endY = room.y0 !== undefined ? room.y1 : room.y2;

    return {
      id: room.room_id,
      name: room.name,
      icon: room.icon,
      visibility: room.visibility,
      x0: startX,
      y0: startY,
      x1: endX,
      y1: endY,
      outline: room.outline,
      outlines: room.outlines,
      x: room.x,
      y: room.y,
    };
  });
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

  // Use affine transformation to handle rotation, scaling, and translation
  const det =
    (p2.vacuum.x - p1.vacuum.x) * (p3.vacuum.y - p1.vacuum.y) -
    (p3.vacuum.x - p1.vacuum.x) * (p2.vacuum.y - p1.vacuum.y);

  if (det === 0) {
    logger.warn('Invalid calibration points (collinear)');
    return { x: 0, y: 0 };
  }

  // Calculate transformation matrix coefficients
  const A =
    ((p2.map.x - p1.map.x) * (p3.vacuum.y - p1.vacuum.y) - (p3.map.x - p1.map.x) * (p2.vacuum.y - p1.vacuum.y)) / det;
  const B =
    ((p3.map.x - p1.map.x) * (p2.vacuum.x - p1.vacuum.x) - (p2.map.x - p1.map.x) * (p3.vacuum.x - p1.vacuum.x)) / det;
  const C = p1.map.x - A * p1.vacuum.x - B * p1.vacuum.y;

  const D =
    ((p2.map.y - p1.map.y) * (p3.vacuum.y - p1.vacuum.y) - (p3.map.y - p1.map.y) * (p2.vacuum.y - p1.vacuum.y)) / det;
  const E =
    ((p3.map.y - p1.map.y) * (p2.vacuum.x - p1.vacuum.x) - (p2.map.y - p1.map.y) * (p3.vacuum.x - p1.vacuum.x)) / det;
  const F = p1.map.y - D * p1.vacuum.x - E * p1.vacuum.y;

  // Apply transformation
  const x = A * vacuumX + B * vacuumY + C;
  const y = D * vacuumX + E * vacuumY + F;

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
  if (room.outlines && room.outlines.length > 0) {
    let path = '';
    for (const outline of room.outlines) {
      if (outline.length > 0) {
        const start = vacuumToMapCoordinates(
          outline[0][0],
          outline[0][1],
          calibrationPoints,
          imageWidth,
          imageHeight,
          allRooms,
          rotation
        );
        path += `M ${start.x} ${start.y} `;
        for (let i = 1; i < outline.length; i++) {
          const point = vacuumToMapCoordinates(
            outline[i][0],
            outline[i][1],
            calibrationPoints,
            imageWidth,
            imageHeight,
            allRooms,
            rotation
          );
          path += `L ${point.x} ${point.y} `;
        }
        path += 'Z ';
      }
    }
    return path;
  }

  if (room.outline && room.outline.length > 0) {
    const start = vacuumToMapCoordinates(
      room.outline[0][0],
      room.outline[0][1],
      calibrationPoints,
      imageWidth,
      imageHeight,
      allRooms,
      rotation
    );
    let path = `M ${start.x} ${start.y} `;
    for (let i = 1; i < room.outline.length; i++) {
      const point = vacuumToMapCoordinates(
        room.outline[i][0],
        room.outline[i][1],
        calibrationPoints,
        imageWidth,
        imageHeight,
        allRooms,
        rotation
      );
      path += `L ${point.x} ${point.y} `;
    }
    path += 'Z';
    return path;
  }

  if (
    room.x0 === undefined ||
    room.y0 === undefined ||
    room.x1 === undefined ||
    room.y1 === undefined ||
    room.x0 === null
  ) {
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
