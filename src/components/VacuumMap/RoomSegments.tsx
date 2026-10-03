import { useMemo, memo, useRef } from 'react';
import type { Room } from '@/types/homeassistant';
import { useMachineState } from '@/contexts';
import { createRoomPath } from '@/utils/roomParser';
import type { MapTransform } from '@/utils/mapTransform';
import { logger } from '@/utils/logger';

interface RoomSegmentsProps {
  rooms: Room[];
  selectedRooms: Map<number, string>;
  onRoomToggle: (roomId: number, roomName: string) => void;
  transform: MapTransform;
  imageWidth: number;
  imageHeight: number;
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
  const pointerStartRef = useRef<{ id: number; x: number; y: number } | null>(null);

  const clearPointer = (element: SVGPathElement, pointerId: number) => {
    pointerStartRef.current = null;
    if (element.hasPointerCapture(pointerId)) {
      element.releasePointerCapture(pointerId);
    }
  };

  const handlePointerDown = (event: React.PointerEvent<SVGPathElement>) => {
    if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) {
      return;
    }

    pointerStartRef.current = { id: event.pointerId, x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: React.PointerEvent<SVGPathElement>) => {
    const start = pointerStartRef.current;
    if (!start || start.id !== event.pointerId) {
      return;
    }

    const isTap = Math.hypot(event.clientX - start.x, event.clientY - start.y) < DRAG_THRESHOLD;
    clearPointer(event.currentTarget, event.pointerId);
    if (isTap && !isBusy) {
      logger.debug('RoomSegments', 'Tap on room:', room.id, room.name);
      onRoomToggle(room.id, room.name);
    }
  };

  const handlePointerCancel = (event: React.PointerEvent<SVGPathElement>) => {
    if (pointerStartRef.current?.id === event.pointerId) {
      clearPointer(event.currentTarget, event.pointerId);
    }
  };

  const handleLostPointerCapture = (event: React.PointerEvent<SVGPathElement>) => {
    if (pointerStartRef.current?.id === event.pointerId) {
      pointerStartRef.current = null;
    }
  };

  return (
    <path
      d={path}
      className={`vacuum-map__room-segment ${isSelected ? 'vacuum-map__room-segment--selected' : ''}`}
      fill={isSelected ? 'var(--accent-bg, rgba(212, 175, 55, 0.3))' : 'transparent'}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke={!isBusy && isSelected ? 'var(--accent-color, #D4AF37)' : 'rgba(255, 255, 255, 0.2)'}
      strokeWidth="2"
      style={{ cursor: isBusy ? 'default' : 'pointer', pointerEvents: isBusy ? 'none' : 'auto' }}
      data-room-id={room.id}
      data-room-name={room.name}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onLostPointerCapture={handleLostPointerCapture}
    >
      <title>{room.name}</title>
    </path>
  );
}

function RoomSegmentsInner({
  rooms,
  selectedRooms,
  onRoomToggle,
  transform,
  imageWidth,
  imageHeight,
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
        path: createRoomPath(room, transform),
      }));
  }, [rooms, transform]);

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
