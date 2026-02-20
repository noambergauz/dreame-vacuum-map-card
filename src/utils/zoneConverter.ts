import type { HassEntity } from '../types/homeassistant';
import { isNumber } from './typeGuards';

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
  imageHeight: number
): VacuumZone {
  // Try to get dimensions from map entity
  const dimensions = getMapDimensions(mapEntity);

  // If no dimensions available, fall back to calibration-based method
  if (!dimensions) {
    const calibrationPoints = getCalibrationPoints(mapEntity);
    return convertUsingCalibration(uiZone, calibrationPoints, imageWidth, imageHeight);
  }

  // Convert UI percentages to image pixel coordinates
  const px1 = (uiZone.x1 / 100) * imageWidth;
  const py1 = (uiZone.y1 / 100) * imageHeight;
  const px2 = (uiZone.x2 / 100) * imageWidth;
  const py2 = (uiZone.y2 / 100) * imageHeight;

  // Convert to vacuum coordinates
  const v1 = imageToVacuum(px1, py1, dimensions);
  const v2 = imageToVacuum(px2, py2, dimensions);

  return {
    x1: v1.x,
    y1: v1.y,
    x2: v2.x,
    y2: v2.y,
  };
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

  const scaleX = (p2.vacuum.x - p1.vacuum.x) / (p2.map.x - p1.map.x || 1);
  const scaleY = (p3.vacuum.y - p1.vacuum.y) / (p3.map.y - p1.map.y || 1);

  const vx1 = Math.round(p1.vacuum.x + (px1 - p1.map.x) * scaleX);
  const vy1 = Math.round(p1.vacuum.y + (py1 - p1.map.y) * scaleY);
  const vx2 = Math.round(p1.vacuum.x + (px2 - p1.map.x) * scaleX);
  const vy2 = Math.round(p1.vacuum.y + (py2 - p1.map.y) * scaleY);

  return {
    x1: vx1,
    y1: vy1,
    x2: vx2,
    y2: vy2,
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
