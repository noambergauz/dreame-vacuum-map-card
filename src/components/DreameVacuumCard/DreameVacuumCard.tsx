import { useState } from 'react';
import { Header } from '../Header';
import { CleaningModeButton } from '../CleaningModeButton';
import { VacuumMap } from '../VacuumMap';
import { RoomSelector } from '../RoomSelector';
import { ModeTabs } from '../ModeTabs';
import { ActionButtons } from '../ActionButtons';
import { CleaningModeModal } from '../CleaningModeModal';
import { ShortcutsModal } from '../ShortcutsModal';
import type { Hass, HassConfig, CleaningMode, RoomPosition } from '../../types/homeassistant';
import './DreameVacuumCard.scss';

interface DreameVacuumCardProps {
  hass: Hass;
  config: HassConfig;
}

export function DreameVacuumCard({ hass, config }: DreameVacuumCardProps) {
  const [selectedMode, setSelectedMode] = useState<CleaningMode>('all');
  const [selectedRooms, setSelectedRooms] = useState<Map<number, string>>(new Map());
  const [modalOpened, setModalOpened] = useState(false);
  const [shortcutsModalOpened, setShortcutsModalOpened] = useState(false);
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
        x: 50, // Default position for map display
        y: 50,
        icon: room.icon,
      }))
    : [];

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
    return <div className="dreame-vacuum-card__error">Entity not found: {config.entity}</div>;
  }

  console.log(entity)

  return (
    <div className="dreame-vacuum-card">
      <div className="dreame-vacuum-card__container">
        <Header entity={entity} deviceName={deviceName} />
        
        {selectedMode === 'room' ? (
          <RoomSelector
            rooms={rooms}
            selectedRooms={selectedRooms}
            onRoomToggle={handleRoomToggle}
          />
        ) : (
          <VacuumMap
            hass={hass}
            mapEntityId={mapEntityId}
            selectedMode={selectedMode}
            selectedRooms={selectedRooms}
            rooms={rooms}
            onRoomToggle={handleRoomToggle}
          />
        )}

        <CleaningModeButton 
          cleaningMode={entity.attributes.cleangenius_mode || entity.attributes.cleaning_mode || 'Sweeping and mopping'} 
          cleangenius={entity.attributes.cleangenius || 'Off'}
          onClick={() => setModalOpened(true)} 
          onShortcutsClick={() => setShortcutsModalOpened(true)}
        />

        <div className="dreame-vacuum-card__controls">
          {selectedRooms.size > 0 && selectedMode === 'room' && (
            <div className="dreame-vacuum-card__room-selection">
              Selected: {Array.from(selectedRooms.values()).join(', ')}
            </div>
          )}
          <ModeTabs selectedMode={selectedMode} onModeChange={handleModeChange} />
          <ActionButtons
            selectedMode={selectedMode}
            selectedRoomsCount={selectedRooms.size}
            onClean={handleClean}
            onDock={handleDock}
          />
        </div>
      </div>

      <CleaningModeModal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        entity={entity}
        hass={hass}
      />

      <ShortcutsModal
        opened={shortcutsModalOpened}
        onClose={() => setShortcutsModalOpened(false)}
        entity={entity}
        hass={hass}
      />

      {toast && (
        <div className="dreame-vacuum-card__toast">
          <span className="dreame-vacuum-card__toast-message">{toast}</span>
          <button className="dreame-vacuum-card__toast-close" onClick={() => setToast(null)}>
            ×
          </button>
        </div>
      )}
    </div>
  );
}
