import { useState } from 'react';
import { MantineProvider, Stack, Box, Text, Notification, createTheme } from '@mantine/core';
import { Header } from './Header';
import { CleaningModeButton } from './CleaningModeButton';
import { VacuumMap } from './VacuumMap';
import { ModeTabs } from './ModeTabs';
import { ActionButtons } from './ActionButtons';
import { CleaningModeModal } from './CleaningModeModal';
import type { Hass, HassConfig, CleaningMode, CleaningStrategy, RoomPosition } from '../types/homeassistant';

interface DreameVacuumCardProps {
  hass: Hass;
  config: HassConfig;
  emotionRoot?: HTMLElement | ShadowRoot;
}

const theme = createTheme({
  /** Your theme override here */
});

interface DreameVacuumCardProps {
  hass: Hass;
  config: HassConfig;
}

const ROOM_POSITIONS: Record<number, { x: number; y: number }> = {
  1: { x: 46.7, y: 3.3 },
  2: { x: 31.3, y: 6.0 },
  5: { x: 21.3, y: 25.3 },
  6: { x: 18.7, y: 43.9 },
  7: { x: 38.3, y: 35.7 },
  8: { x: 29.8, y: 62.1 },
  9: { x: 81.1, y: 49.4 },
  10: { x: 71.7, y: 79.6 },
  12: { x: 56.1, y: 53.7 },
};

export function DreameVacuumCard({ hass, config, emotionRoot }: DreameVacuumCardProps) {
  const [selectedMode, setSelectedMode] = useState<CleaningMode>('all');
  const [selectedRooms, setSelectedRooms] = useState<Map<number, string>>(new Map());
  const [cleaningMode, setCleaningMode] = useState<CleaningStrategy>('CleanGenius');
  const [modalOpened, setModalOpened] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const entity = hass.states[config.entity];
  const deviceName = entity?.attributes?.friendly_name || config.title || 'Dreame Vacuum';
  const mapEntityId = config.map_entity || `camera.${config.entity.split('.')[1]}_map`;

  // Get room data
  const entityRooms = entity?.attributes?.rooms?.[entity?.attributes?.selected_map || ''];
  const rooms: RoomPosition[] = entityRooms
    ? entityRooms.map((room) => ({
        id: room.id,
        name: room.name,
        x: ROOM_POSITIONS[room.id]?.x || 50,
        y: ROOM_POSITIONS[room.id]?.y || 50,
        icon: room.icon,
      }))
    : Object.entries(ROOM_POSITIONS).map(([id, pos]) => ({
        id: parseInt(id),
        name: `Room ${id}`,
        x: pos.x,
        y: pos.y,
      }));

  const handleModeChange = (mode: CleaningMode) => {
    setSelectedMode(mode);
    setSelectedRooms(new Map());
  };

  const handleRoomToggle = (roomId: number, roomName: string) => {
    const newSelected = new Map(selectedRooms);
    if (newSelected.has(roomId)) {
      newSelected.delete(roomId);
      showToast(`Deselected ${roomName}`);
    } else {
      newSelected.set(roomId, roomName);
      showToast(`Selected ${roomName}`);
    }
    setSelectedRooms(newSelected);
  };

  const handleClean = () => {
    if (!entity) return;

    switch (selectedMode) {
      case 'all':
        hass.callService('vacuum', 'start', { entity_id: config.entity });
        showToast('Starting full house cleaning');
        break;
      case 'room':
        if (selectedRooms.size > 0) {
          hass.callService('dreame_vacuum', 'vacuum_clean_segment', {
            entity_id: config.entity,
            segments: Array.from(selectedRooms.keys()),
          });
          showToast(`Starting cleaning for ${selectedRooms.size} selected room${selectedRooms.size > 1 ? 's' : ''}`);
        } else {
          showToast('Please select rooms to clean first');
        }
        break;
      case 'zone':
        showToast('Click on the map to select a zone for cleaning');
        break;
    }
  };

  const handleDock = () => {
    hass.callService('vacuum', 'return_to_base', { entity_id: config.entity });
    showToast('Vacuum returning to dock');
  };

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  if (!entity) {
    return <div>Entity not found: {config.entity}</div>;
  }

  return (
    <MantineProvider
      theme={theme}
      getRootElement={() => (emotionRoot as HTMLElement) || document.body}
      cssVariablesSelector=":host"
    >
      <Box
        style={{
          background: '#f8f9fa',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <Stack gap="md">
          <Header entity={entity} deviceName={deviceName} />
          <CleaningModeButton cleaningMode={cleaningMode} onClick={() => setModalOpened(true)} />
          <VacuumMap
            hass={hass}
            mapEntityId={mapEntityId}
            selectedMode={selectedMode}
            selectedRooms={selectedRooms}
            rooms={rooms}
            onRoomToggle={handleRoomToggle}
          />

          <Box style={{ padding: '0 20px 20px' }}>
            {selectedRooms.size > 0 && (
              <Text
                size="sm"
                c="blue"
                style={{
                  margin: '10px 0',
                  padding: '8px 12px',
                  background: 'rgba(0,122,255, 0.1)',
                  borderRadius: '8px',
                  textAlign: 'center',
                }}
              >
                Selected rooms: {Array.from(selectedRooms.values()).join(', ')}
              </Text>
            )}
            <ModeTabs selectedMode={selectedMode} onModeChange={handleModeChange} />
            <ActionButtons
              selectedMode={selectedMode}
              selectedRoomsCount={selectedRooms.size}
              onClean={handleClean}
              onDock={handleDock}
            />
          </Box>
        </Stack>

        <CleaningModeModal
          opened={modalOpened}
          onClose={() => setModalOpened(false)}
          cleaningMode={cleaningMode}
          onModeChange={setCleaningMode}
        />

        {toast && (
          <Notification
            title=""
            onClose={() => setToast(null)}
            style={{
              position: 'fixed',
              top: '20px',
              right: '20px',
              zIndex: 1000,
            }}
          >
            {toast}
          </Notification>
        )}
      </Box>
    </MantineProvider>
  );
}
