import { useMemo } from 'react';
import type { Room } from '../../types/homeassistant';
import { createRoomPath } from '../../utils/roomParser';

interface RoomSegmentsProps {
  rooms: Room[];
  selectedRooms: Map<number, string>;
  onRoomToggle: (roomId: number, roomName: string) => void;
  calibrationPoints: { vacuum: { x: number; y: number }; map: { x: number; y: number } }[];
  imageWidth: number;
  imageHeight: number;
  isStarted?: boolean;
}

export function RoomSegments({
  rooms,
  selectedRooms,
  onRoomToggle,
  calibrationPoints,
  imageWidth,
  imageHeight,
  isStarted,
}: RoomSegmentsProps) {
  // Debug: log when component renders
  console.debug('[RoomSegments] Render, selectedRooms:', Array.from(selectedRooms.keys()));

  const roomPaths = useMemo(() => {
    return rooms
      .filter((room) => room.visibility !== 'Hidden')
      .map((room) => ({
        room,
        path: createRoomPath(room, calibrationPoints, imageWidth, imageHeight),
      }));
  }, [rooms, calibrationPoints, imageWidth, imageHeight]);

  const handleRoomClick = (roomId: number, roomName: string) => {
    console.debug('[RoomSegments] Click on room:', roomId, roomName);
    onRoomToggle(roomId, roomName);
  };

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
          console.warn('No path for room:', room.id, room.name);
          return null;
        }

        return (
          <path
            key={`${room.id}-${isSelected}`}
            d={path}
            className={`vacuum-map__room-segment ${isSelected ? 'vacuum-map__room-segment--selected' : ''}`}
            fill={isSelected ? 'var(--accent-bg, rgba(212, 175, 55, 0.3))' : 'transparent'}
            stroke={!isStarted && isSelected ? 'var(--accent-color, #D4AF37)' : 'rgba(255, 255, 255, 0.2)'}
            strokeWidth="2"
            style={{
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              touchAction: 'none',
            }}
            onPointerDown={(e) => {
              e.stopPropagation();
            }}
            onPointerUp={(e) => {
              e.stopPropagation();
              e.preventDefault();
              handleRoomClick(room.id, room.name);
            }}
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
