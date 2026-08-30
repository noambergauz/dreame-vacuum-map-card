import type { HassEntity, Room } from '@/types/homeassistant';
import type { MapRotation } from './roomParser';
import { autoCalibrateFromRooms } from './roomParser';
import { isNumber } from './typeGuards';
import { logger } from './logger';

/**
 * Calibration point structure from map entity attributes
 */
interface CalibrationPoint {
  vacuum: { x: number; y: number };
  map: { x: number; y: number };
}

/**
 * Map dimensions from entity attributes
 */
interface MapDimensions {
  top: number;
  left: number;
  height: number;
  width: number;
  grid_size: number;
  scale?: number;
  padding?: number[];
  crop?: number[];
}

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

/**
 * Converts image pixel coordinates to vacuum coordinates using map dimensions.
 * This is the inverse of the to_img() function in the Python backend.
 *
 * @param imgX - X coordinate in image pixels
 * @param imgY - Y coordinate in image pixels
 * @param dimensions - Map dimensions from entity attributes
 * @returns Vacuum coordinates (x, y)
 */
function imageToVacuum(imgX: number, imgY: number, dimensions: MapDimensions): { x: number; y: number } {
  const scale = dimensions.scale || 1;
  const padding = dimensions.padding || [0, 0, 0, 0];
  const crop = dimensions.crop || [0, 0, 0, 0];
  const left = dimensions.left;
  const top = dimensions.top;
  const height = dimensions.height;
  const gridSize = dimensions.grid_size;

  // Inverse of: img_x = ((vacuum_x - left) / grid_size) * scale + padding[0] - crop[0]
  const vacuumX = ((imgX + crop[0] - padding[0]) / scale) * gridSize + left;

  // Inverse of: img_y = (((height * grid_size - 1) - (vacuum_y - top)) / grid_size) * scale + padding[1] - crop[1]
  const vacuumY = top + (height * gridSize - 1) - ((imgY + crop[1] - padding[1]) / scale) * gridSize;

  return { x: Math.round(vacuumX), y: Math.round(vacuumY) };
}

/**
 * Converts a UI zone (percentage of image) to vacuum coordinates using map dimensions.
 *
 * @param uiZone - Zone in UI coordinates (0-100 percentage)
 * @param mapEntity - Map entity with attributes containing dimensions
 * @param imageWidth - Actual width of the map image in pixels
 * @param imageHeight - Actual height of the map image in pixels
 * @returns Zone in vacuum coordinate system
 */
export function convertUIZoneToVacuumZone(
  uiZone: UIZone,
  mapEntity: HassEntity | undefined,
  imageWidth: number,
  imageHeight: number,
  rooms?: Room[],
  rotation: MapRotation = 0
): VacuumZone {
  // Try to get calibration points first (prioritize them over dimensions to support rotation)
  let calibrationPoints = getCalibrationPoints(mapEntity);

  if (!calibrationPoints && rooms && rooms.length > 0) {
    calibrationPoints = autoCalibrateFromRooms(rooms, imageWidth, imageHeight, rotation);
  }

  if (calibrationPoints && calibrationPoints.length >= 3) {
    logger.debug('ZoneConverter', 'Using calibration points:', calibrationPoints.length);
    return convertUsingCalibration(uiZone, calibrationPoints, imageWidth, imageHeight);
  }

  // If no calibration points, try dimensions
  const dimensions = getMapDimensions(mapEntity);

  logger.debug('ZoneConverter', 'Input:', { uiZone, imageWidth, imageHeight, hasDimensions: !!dimensions });

  if (dimensions) {
    logger.debug('ZoneConverter', 'Using dimensions:', dimensions);

    const px1 = (uiZone.x1 / 100) * imageWidth;
    const py1 = (uiZone.y1 / 100) * imageHeight;
    const px2 = (uiZone.x2 / 100) * imageWidth;
    const py2 = (uiZone.y2 / 100) * imageHeight;

    const v1 = imageToVacuum(px1, py1, dimensions);
    const v2 = imageToVacuum(px2, py2, dimensions);

    return {
      x1: v1.x,
      y1: v1.y,
      x2: v2.x,
      y2: v2.y,
    };
  }

  // Fallback if absolutely nothing is available
  logger.debug('ZoneConverter', 'No calibration or dimensions, using fallback');
  return convertUsingCalibration(uiZone, null, imageWidth, imageHeight);
}

/**
 * Fallback method using calibration points
 */
function convertUsingCalibration(
  uiZone: UIZone,
  calibrationPoints: CalibrationPoint[] | null,
  imageWidth: number,
  imageHeight: number
): VacuumZone {
  if (!calibrationPoints || calibrationPoints.length < 3) {
    const MAP_SIZE = 12000;
    const MAP_OFFSET = 6000;

    return {
      x1: Math.round((uiZone.x1 / 100) * MAP_SIZE - MAP_OFFSET),
      y1: Math.round((uiZone.y1 / 100) * MAP_SIZE - MAP_OFFSET),
      x2: Math.round((uiZone.x2 / 100) * MAP_SIZE - MAP_OFFSET),
      y2: Math.round((uiZone.y2 / 100) * MAP_SIZE - MAP_OFFSET),
    };
  }

  const px1 = (uiZone.x1 / 100) * imageWidth;
  const py1 = (uiZone.y1 / 100) * imageHeight;
  const px2 = (uiZone.x2 / 100) * imageWidth;
  const py2 = (uiZone.y2 / 100) * imageHeight;

  const p1 = calibrationPoints[0];
  const p2 = calibrationPoints[1];
  const p3 = calibrationPoints[2];

  const det = (p2.map.x - p1.map.x) * (p3.map.y - p1.map.y) - (p3.map.x - p1.map.x) * (p2.map.y - p1.map.y);

  if (det === 0) {
    logger.warn('ZoneConverter', 'Invalid calibration points (collinear)');
    return {
      x1: Math.round((uiZone.x1 / 100) * 12000 - 6000),
      y1: Math.round((uiZone.y1 / 100) * 12000 - 6000),
      x2: Math.round((uiZone.x2 / 100) * 12000 - 6000),
      y2: Math.round((uiZone.y2 / 100) * 12000 - 6000),
    };
  }

  const A =
    ((p2.vacuum.x - p1.vacuum.x) * (p3.map.y - p1.map.y) - (p3.vacuum.x - p1.vacuum.x) * (p2.map.y - p1.map.y)) / det;
  const B =
    ((p3.vacuum.x - p1.vacuum.x) * (p2.map.x - p1.map.x) - (p2.vacuum.x - p1.vacuum.x) * (p3.map.x - p1.map.x)) / det;
  const C = p1.vacuum.x - A * p1.map.x - B * p1.map.y;

  const D =
    ((p2.vacuum.y - p1.vacuum.y) * (p3.map.y - p1.map.y) - (p3.vacuum.y - p1.vacuum.y) * (p2.map.y - p1.map.y)) / det;
  const E =
    ((p3.vacuum.y - p1.vacuum.y) * (p2.map.x - p1.map.x) - (p2.vacuum.y - p1.vacuum.y) * (p3.map.x - p1.map.x)) / det;
  const F = p1.vacuum.y - D * p1.map.x - E * p1.map.y;

  const vx1 = Math.round(A * px1 + B * py1 + C);
  const vy1 = Math.round(D * px1 + E * py1 + F);
  const vx2 = Math.round(A * px2 + B * py2 + C);
  const vy2 = Math.round(D * px2 + E * py2 + F);

  return {
    x1: Math.min(vx1, vx2),
    y1: Math.min(vy1, vy2),
    x2: Math.max(vx1, vx2),
    y2: Math.max(vy1, vy2),
  };
}

/**
 * Get calibration points from map entity
 */
export function getCalibrationPoints(mapEntity: HassEntity | undefined): CalibrationPoint[] | null {
  const calibration = mapEntity?.attributes?.calibration_points;

  if (!calibration || !Array.isArray(calibration) || calibration.length < 3) {
    return null;
  }

  return calibration.map((point: unknown) => {
    const p = point as { vacuum?: { x?: number; y?: number }; map?: { x?: number; y?: number } };
    return {
      vacuum: { x: p.vacuum?.x ?? 0, y: p.vacuum?.y ?? 0 },
      map: { x: p.map?.x ?? 0, y: p.map?.y ?? 0 },
    };
  });
}

/**
 * Get map dimensions from map entity
 */
export function getMapDimensions(mapEntity: HassEntity | undefined): MapDimensions | null {
  const attrs = mapEntity?.attributes;

  if (!attrs) {
    return null;
  }

  // Try to get dimensions from attributes
  const top = isNumber(attrs.top) ? attrs.top : undefined;
  const left = isNumber(attrs.left) ? attrs.left : undefined;
  const height = isNumber(attrs.height) ? attrs.height : undefined;
  const width = isNumber(attrs.width) ? attrs.width : undefined;
  const gridSize = isNumber(attrs.grid_size) ? attrs.grid_size : undefined;

  if (top !== undefined && left !== undefined && height && width && gridSize) {
    const scale = isNumber(attrs.scale) ? attrs.scale : 1;
    const padding = Array.isArray(attrs.padding) ? (attrs.padding as number[]) : [0, 0, 0, 0];
    const crop = Array.isArray(attrs.crop) ? (attrs.crop as number[]) : [0, 0, 0, 0];

    return {
      top,
      left,
      height,
      width,
      grid_size: gridSize,
      scale,
      padding,
      crop,
    };
  }

  return null;
}

/**
 * Get image dimensions from map entity
 */
export function getImageDimensions(mapEntity: HassEntity | undefined): { width: number; height: number } | null {
  // Try to get dimensions from attributes
  const width = isNumber(mapEntity?.attributes?.width) ? mapEntity.attributes.width : undefined;
  const height = isNumber(mapEntity?.attributes?.height) ? mapEntity.attributes.height : undefined;

  if (width && height) {
    return { width, height };
  }

  // If not available, we'll need to get them from the actual image
  // This would require loading the image first
  return null;
}
