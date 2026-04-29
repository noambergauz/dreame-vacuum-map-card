import { useMemo } from 'react';
import type { VacuumPosition, CalibrationPoint } from '@/types/homeassistant';
import { vacuumToMapCoordinates } from '@/utils/roomParser';
import './VacuumPositionMarker.scss';

// MDI battery-charging icon path (viewBox 0 0 24 24)
const BATTERY_CHARGING_PATH =
  'M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.66C6,21.4 6.6,22 7.33,22H16.66C17.4,22 18,21.4 18,20.67V5.33C18,4.6 17.4,4 16.67,4M11,20V14.5H9L13,7V12.5H15';

interface ChargerMarkerProps {
  position: VacuumPosition;
  calibrationPoints: CalibrationPoint[];
  imageWidth: number;
  imageHeight: number;
}

/**
 * Renders a charging dock marker on the map
 * Uses SVG with viewBox to scale properly with the map image
 */
export function ChargerMarker({ position, calibrationPoints, imageWidth, imageHeight }: ChargerMarkerProps) {
  const mapPosition = useMemo(() => {
    return vacuumToMapCoordinates(position.x, position.y, calibrationPoints, imageWidth, imageHeight);
  }, [position.x, position.y, calibrationPoints, imageWidth, imageHeight]);

  // Size of the marker relative to the map (the icon is 24x24 in its viewBox)
  const iconSize = Math.max(imageWidth, imageHeight) * 0.04; // 4% of map size
  const halfSize = iconSize / 2;

  return (
    <svg className="charger-marker" viewBox={`0 0 ${imageWidth} ${imageHeight}`} preserveAspectRatio="xMidYMid meet">
      <g transform={`translate(${mapPosition.x - halfSize}, ${mapPosition.y - halfSize})`}>
        {/* Background circle for better visibility */}
        <circle cx={halfSize} cy={halfSize} r={halfSize * 0.9} className="charger-marker__bg" />
        {/* MDI battery-charging icon scaled to iconSize */}
        <g transform={`scale(${iconSize / 24})`}>
          <path d={BATTERY_CHARGING_PATH} className="charger-marker__icon" />
        </g>
      </g>
    </svg>
  );
}
