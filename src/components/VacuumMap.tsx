import { Box } from '@mantine/core';
import type { Hass, RoomPosition, CleaningMode } from '../types/homeassistant';

interface VacuumMapProps {
  hass: Hass;
  mapEntityId: string;
  selectedMode: CleaningMode;
  selectedRooms: Map<number, string>;
  rooms: RoomPosition[];
  onRoomToggle: (roomId: number, roomName: string) => void;
}

export function VacuumMap({
  hass,
  mapEntityId,
  selectedMode,
  selectedRooms,
  rooms,
  onRoomToggle
}: VacuumMapProps) {
  const mapEntity = hass.states[mapEntityId];
  const mapUrl = mapEntity?.attributes?.entity_picture;

  return (
    <Box
      style={{
        position: 'relative',
        margin: '0 20px',
        borderRadius: '15px',
        overflow: 'hidden',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        minHeight: '300px',
      }}
    >
      {mapUrl ? (
        <img
          src={hass.hassUrl(mapUrl)}
          alt="Vacuum Map"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '15px',
          }}
        />
      ) : (
        <div style={{ color: '#666', textAlign: 'center', fontSize: '14px' }}>
          No map available<br />
          <small>Looking for: {mapEntityId}</small>
        </div>
      )}

      {/* Room Selection Overlay */}
      {selectedMode === 'room' && (
        <Box
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.05)',
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            color: '#666',
            pointerEvents: 'none',
          }}
        >
          Click on room numbers to select rooms for cleaning
        </Box>
      )}

      {/* Room Numbers */}
      {selectedMode === 'room' && (
        <Box style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
          {rooms.map((room) => (
            <Box
              key={room.id}
              onClick={() => onRoomToggle(room.id, room.name)}
              style={{
                position: 'absolute',
                left: `${room.x}%`,
                top: `${room.y}%`,
                background: selectedRooms.has(room.id) ? '#ff9500' : '#007aff',
                color: 'white',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold',
                cursor: 'pointer',
                pointerEvents: 'auto',
                boxShadow: selectedRooms.has(room.id)
                  ? '0 2px 8px rgba(255,149,0,0.4)'
                  : '0 2px 8px rgba(0,122,255,0.3)',
                transition: 'all 0.2s ease',
              }}
              title={room.name}
            >
              {room.id}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
