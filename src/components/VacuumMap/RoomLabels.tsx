import { useMemo } from 'react';
import type { Room, CalibrationPoint } from '@/types/homeassistant';
import { vacuumToMapCoordinates } from '@/utils/roomParser';
import './RoomLabels.scss';

interface RoomLabelsProps {
  rooms: Room[];
  calibrationPoints: CalibrationPoint[];
  imageWidth: number;
  imageHeight: number;
  /** Scale factor for the label size, 1 = default. Clamped to a sane range. */
  scale?: number;
}

// Label height as a fraction of the map's longer edge at scale 1.
const BASE_FONT_RATIO = 0.025;
const MIN_SCALE = 0.2;
const MAX_SCALE = 3;

export function RoomLabels({ rooms, calibrationPoints, imageWidth, imageHeight, scale = 1 }: RoomLabelsProps) {
  const safeScale = Number.isFinite(scale) ? Math.min(Math.max(scale, MIN_SCALE), MAX_SCALE) : 1;
  const fontSize = Math.max(imageWidth, imageHeight) * BASE_FONT_RATIO * safeScale;
  const paddingX = fontSize * 0.6;
  const paddingY = fontSize * 0.4;
  const borderRadius = fontSize * 0.5;

  const labels = useMemo(() => {
    return rooms
      .filter((room) => room.visibility !== 'Hidden')
      .filter((room) => {
        const hasCenter = room.x !== undefined && room.y !== undefined;
        const hasBounds =
          room.x0 !== undefined && room.y0 !== undefined && room.x1 !== undefined && room.y1 !== undefined;
        return hasCenter || hasBounds;
      })
      .map((room) => {
        const centerX = room.x ?? (room.x0! + room.x1!) / 2;
        const centerY = room.y ?? (room.y0! + room.y1!) / 2;
        const pos = vacuumToMapCoordinates(centerX, centerY, calibrationPoints, imageWidth, imageHeight);
        return { id: room.id, name: room.name, x: pos.x, y: pos.y };
      });
  }, [rooms, calibrationPoints, imageWidth, imageHeight]);

  return (
    <svg className="room-labels" viewBox={`0 0 ${imageWidth} ${imageHeight}`} preserveAspectRatio="xMidYMid meet">
      {labels.map((label) => {
        const textWidth = label.name.length * fontSize * 0.6;
        const rectWidth = textWidth + paddingX * 2;
        const rectHeight = fontSize + paddingY * 2;

        return (
          <g key={label.id} transform={`translate(${label.x}, ${label.y})`}>
            <rect
              className="room-labels__bg"
              x={-rectWidth / 2}
              y={-rectHeight / 2}
              width={rectWidth}
              height={rectHeight}
              rx={borderRadius}
            />
            <text className="room-labels__text" textAnchor="middle" dominantBaseline="middle" fontSize={fontSize}>
              {label.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
