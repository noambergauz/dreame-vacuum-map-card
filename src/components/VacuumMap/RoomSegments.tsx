import { useMemo, useCallback, memo } from 'react';
import type { Room } from '@/types/homeassistant';
import { useMachineState } from '@/contexts';
import { createRoomPath } from '@/utils/roomParser';
import { logger } from '@/utils/logger';

interface RoomSegmentsProps {
  rooms: Room[];
  selectedRooms: Map<number, string>;
  onRoomToggle: (roomId: number, roomName: string) => void;
  calibrationPoints: { vacuum: { x: number; y: number }; map: { x: number; y: number } }[];
  imageWidth: number;
  imageHeight: number;
}

// Extracted style constant to avoid recreation
const ROOM_PATH_STYLE: React.CSSProperties = {
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  touchAction: 'none',
};

function RoomSegmentsInner({
  rooms,
  selectedRooms,
  onRoomToggle,
  calibrationPoints,
  imageWidth,
  imageHeight,
}: RoomSegmentsProps) {
  const { phase } = useMachineState();
  const isVacuumActive = phase !== 'idle';
  logger.debug('RoomSegments', 'Render, selectedRooms:', Array.from(selectedRooms.keys()));

  const roomPaths = useMemo(() => {
    return rooms
      .filter((room) => room.visibility !== 'Hidden')
      .map((room) => ({
        room,
        path: createRoomPath(room, calibrationPoints, imageWidth, imageHeight),
      }));
  }, [rooms, calibrationPoints, imageWidth, imageHeight]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    e.stopPropagation();
  }, []);

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<SVGPathElement>) => {
      e.stopPropagation();
      e.preventDefault();
      const roomId = Number(e.currentTarget.dataset.roomId);
      const roomName = e.currentTarget.dataset.roomName ?? '';
      logger.debug('RoomSegments', 'Click on room:', roomId, roomName);
      onRoomToggle(roomId, roomName);
    },
    [onRoomToggle]
  );

  if (!imageWidth || !imageHeight) {
    return null;
  }

  return (
    <svg
      className="vacuum-map__room-segments"
      viewBox={`0 0 ${imageWidth} ${imageHeight}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {roomPaths.map(({ room, path }) => {
        const isSelected = selectedRooms.has(room.id);

        if (!path) {
          logger.warn('No path for room:', room.id, room.name);
          return null;
        }

        return (
          <path
            key={room.id}
            d={path}
            className={`vacuum-map__room-segment ${isSelected ? 'vacuum-map__room-segment--selected' : ''}`}
            fill={isSelected ? 'var(--accent-bg, rgba(212, 175, 55, 0.3))' : 'transparent'}
            stroke={!isVacuumActive && isSelected ? 'var(--accent-color, #D4AF37)' : 'rgba(255, 255, 255, 0.2)'}
            strokeWidth="2"
            style={ROOM_PATH_STYLE}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            data-room-id={room.id}
            data-room-name={room.name}
          >
            <title>{room.name}</title>
          </path>
        );
      })}
    </svg>
  );
}

// Wrap with memo for better performance
export const RoomSegments = memo(RoomSegmentsInner);
