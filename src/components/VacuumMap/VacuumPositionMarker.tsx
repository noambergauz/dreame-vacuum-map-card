import { useMemo } from 'react';
import type { VacuumPosition, CalibrationPoint } from '@/types/homeassistant';
import { vacuumToMapCoordinates } from '@/utils/roomParser';
import './VacuumPositionMarker.scss';

// MDI robot-vacuum icon path (viewBox 0 0 24 24)
const ROBOT_VACUUM_PATH =
  'M12,2C14.65,2 17.19,3.06 19.07,4.93L17.65,6.35C16.15,4.85 14.12,4 12,4C9.88,4 7.84,4.84 6.35,6.35L4.93,4.93C6.81,3.06 9.35,2 12,2M3.66,6.5L5.11,7.94C4.39,9.17 4,10.57 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,10.57 19.61,9.17 18.88,7.94L20.34,6.5C21.42,8.12 22,10.04 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12C2,10.04 2.58,8.12 3.66,6.5M12,6A6,6 0 0,1 18,12C18,13.59 17.37,15.12 16.24,16.24L14.83,14.83C14.08,15.58 13.06,16 12,16C10.94,16 9.92,15.58 9.17,14.83L7.76,16.24C6.63,15.12 6,13.59 6,12A6,6 0 0,1 12,6M12,8A1,1 0 0,0 11,9A1,1 0 0,0 12,10A1,1 0 0,0 13,9A1,1 0 0,0 12,8Z';

interface VacuumPositionMarkerProps {
  position: VacuumPosition;
  calibrationPoints: CalibrationPoint[];
  imageWidth: number;
  imageHeight: number;
  isCleaning?: boolean;
}

/**
 * Renders a vacuum robot marker on the map at the current position
 * Uses SVG with viewBox to scale properly with the map image
 */
export function VacuumPositionMarker({
  position,
  calibrationPoints,
  imageWidth,
  imageHeight,
  isCleaning = false,
}: VacuumPositionMarkerProps) {
  const mapPosition = useMemo(() => {
    return vacuumToMapCoordinates(position.x, position.y, calibrationPoints, imageWidth, imageHeight);
  }, [position.x, position.y, calibrationPoints, imageWidth, imageHeight]);

  // Size of the marker relative to the map (the icon is 24x24 in its viewBox)
  const iconSize = Math.max(imageWidth, imageHeight) * 0.05; // 5% of map size
  const halfSize = iconSize / 2;

  return (
    <svg
      className={`vacuum-position-marker${isCleaning ? ' vacuum-position-marker--cleaning' : ''}`}
      viewBox={`0 0 ${imageWidth} ${imageHeight}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform={`translate(${mapPosition.x - halfSize}, ${mapPosition.y - halfSize})`}>
        {/* Background circle for better visibility */}
        <circle cx={halfSize} cy={halfSize} r={halfSize * 0.9} className="vacuum-position-marker__bg" />
        {/* MDI robot-vacuum icon scaled to iconSize */}
        <g transform={`scale(${iconSize / 24})`}>
          <path d={ROBOT_VACUUM_PATH} className="vacuum-position-marker__icon" />
        </g>
      </g>
    </svg>
  );
}
