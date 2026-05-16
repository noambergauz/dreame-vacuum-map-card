import { useMemo, memo, useRef } from 'react';
import { useDrag } from '@use-gesture/react';
import type { Room } from '@/types/homeassistant';
import { useMachineState } from '@/contexts';
import { createRoomPath, type MapRotation } from '@/utils/roomParser';
import { logger } from '@/utils/logger';

interface RoomSegmentsProps {
  rooms: Room[];
  selectedRooms: Map<number, string>;
  onRoomToggle: (roomId: number, roomName: string) => void;
  calibrationPoints: { vacuum: { x: number; y: number }; map: { x: number; y: number } }[];
  imageWidth: number;
  imageHeight: number;
  rotation?: MapRotation;
}

interface RoomPathProps {
  room: Room;
  path: string;
  isSelected: boolean;
  isBusy: boolean;
  onRoomToggle: (roomId: number, roomName: string) => void;
}

const DRAG_THRESHOLD = 10;

function RoomPath({ room, path, isSelected, isBusy, onRoomToggle }: RoomPathProps) {
  const pathRef = useRef<SVGPathElement>(null);

  useDrag(
    (state) => {
      if (state.tap) {
        logger.debug('RoomSegments', 'Tap on room:', room.id, room.name);
        onRoomToggle(room.id, room.name);
      }
    },
    {
      target: pathRef,
      filterTaps: true,
      tapsThreshold: DRAG_THRESHOLD,
    }
  );

  return (
    <path
      ref={pathRef}
      d={path}
      className={`vacuum-map__room-segment ${isSelected ? 'vacuum-map__room-segment--selected' : ''}`}
      fill={isSelected ? 'var(--accent-bg, rgba(212, 175, 55, 0.3))' : 'transparent'}
      stroke={!isBusy && isSelected ? 'var(--accent-color, #D4AF37)' : 'rgba(255, 255, 255, 0.2)'}
      strokeWidth="2"
      style={{ cursor: 'pointer', transition: 'all 0.2s ease', touchAction: 'none' }}
      data-room-id={room.id}
      data-room-name={room.name}
    >
      <title>{room.name}</title>
    </path>
  );
}

function RoomSegmentsInner({
  rooms,
  selectedRooms,
  onRoomToggle,
  calibrationPoints,
  imageWidth,
  imageHeight,
  rotation = 0,
}: RoomSegmentsProps) {
  const { phase } = useMachineState();
  const isBusy = phase !== 'idle';
  logger.debug('RoomSegments', 'Render, selectedRooms:', Array.from(selectedRooms.keys()));

  const roomPaths = useMemo(() => {
    return rooms
      .filter((room) => room.visibility !== 'Hidden')
      .sort((a, b) => {
        const areaA = Math.abs(((a.x1 ?? 0) - (a.x0 ?? 0)) * ((a.y1 ?? 0) - (a.y0 ?? 0)));
        const areaB = Math.abs(((b.x1 ?? 0) - (b.x0 ?? 0)) * ((b.y1 ?? 0) - (b.y0 ?? 0)));
        return areaB - areaA;
      })
      .map((room) => ({
        room,
        path: createRoomPath(room, calibrationPoints, imageWidth, imageHeight, rooms, rotation),
      }));
  }, [rooms, calibrationPoints, imageWidth, imageHeight, rotation]);

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
          <RoomPath
            key={room.id}
            room={room}
            path={path}
            isSelected={isSelected}
            isBusy={isBusy}
            onRoomToggle={onRoomToggle}
          />
        );
      })}
    </svg>
  );
}

export const RoomSegments = memo(RoomSegmentsInner);
