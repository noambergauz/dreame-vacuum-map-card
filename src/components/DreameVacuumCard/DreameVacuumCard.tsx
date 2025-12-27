import { useState } from 'react';
import { Header } from '../Header';
import { CleaningModeButton } from '../CleaningModeButton';
import { VacuumMap } from '../VacuumMap';
import { RoomSelector } from '../RoomSelector';
import { ModeTabs } from '../ModeTabs';
import { ActionButtons } from '../ActionButtons';
import { CleaningModeModal } from '../CleaningModeModal';
import { ShortcutsModal } from '../ShortcutsModal';
import type { Hass, HassConfig, CleaningMode, RoomPosition, Zone } from '../../types/homeassistant';
import './DreameVacuumCard.scss';

interface DreameVacuumCardProps {
  hass: Hass;
  config: HassConfig;
}

export function DreameVacuumCard({ hass, config }: DreameVacuumCardProps) {
  const [selectedMode, setSelectedMode] = useState<CleaningMode>('all');
  const [selectedRooms, setSelectedRooms] = useState<Map<number, string>>(new Map());
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const [modalOpened, setModalOpened] = useState(false);
  const [shortcutsModalOpened, setShortcutsModalOpened] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const entity = hass.states[config.entity];

  const deviceName = entity?.attributes?.friendly_name || config.title || 'Dreame Vacuum';
  const mapEntityId = config.map_entity || `camera.${config.entity.split('.')[1]}_map`;

  const entityRooms = entity?.attributes?.rooms?.[entity?.attributes?.selected_map || ''];
  const rooms: RoomPosition[] = entityRooms
    ? entityRooms.map((room) => ({
        id: room.id,
        name: room.name,
        x: 50,
        y: 50,
        icon: room.icon,
      }))
    : [];

  const handleModeChange = (mode: CleaningMode) => {
    setSelectedMode(mode);
    setSelectedRooms(new Map());
    setSelectedZone(null);
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
        if (selectedZone) {
          const MAP_SIZE = 12000;
          const MAP_OFFSET = 6000;
          
          const x1 = Math.round((selectedZone.x1 / 100) * MAP_SIZE - MAP_OFFSET);
          const y1 = Math.round((selectedZone.y1 / 100) * MAP_SIZE - MAP_OFFSET);
          const x2 = Math.round((selectedZone.x2 / 100) * MAP_SIZE - MAP_OFFSET);
          const y2 = Math.round((selectedZone.y2 / 100) * MAP_SIZE - MAP_OFFSET);

          hass.callService('dreame_vacuum', 'vacuum_clean_zone', {
            entity_id: config.entity,
            zone: [x1, y1, x2, y2],
          });
          showToast('Starting zone cleaning');
        } else {
          showToast('Please select a zone on the map');
        }
        break;
    }
  };

  const handleDock = () => {
    hass.callService('vacuum', 'return_to_base', { entity_id: config.entity });
    showToast('Vacuum returning to dock');
  };

  const handlePause = () => {
    hass.callService('vacuum', 'pause', { entity_id: config.entity });
    showToast('Pausing vacuum');
  };

  const handleResume = () => {
    hass.callService('vacuum', 'start', { entity_id: config.entity });
    showToast('Resuming cleaning');
  };

  const handleStop = () => {
    hass.callService('vacuum', 'stop', { entity_id: config.entity });
    showToast('Stopping vacuum');
  };

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  if (!entity) {
    return <div className="dreame-vacuum-card__error">Entity not found: {config.entity}</div>;
  }

  const vacuumStatus = entity.attributes.status || '';
  const isSegmentCleaning = entity.attributes.segment_cleaning || false;
  const isZoneCleaning = entity.attributes.zone_cleaning || false;
  
  const getEffectiveMode = (): CleaningMode => {
    if (entity.attributes.started) {
      if (isSegmentCleaning || vacuumStatus.toLowerCase().includes('room')) {
        return 'room';
      }
      if (isZoneCleaning || vacuumStatus.toLowerCase().includes('zone')) {
        return 'zone';
      }
    }
    return selectedMode;
  };

  const effectiveMode = getEffectiveMode();

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
            zone={selectedZone}
            onZoneChange={setSelectedZone}
          />
        )}

        <CleaningModeButton 
          cleanGeniusMode={entity.attributes.cleangenius_mode}
          cleaningMode={entity.attributes.cleaning_mode || 'Sweeping and mopping'} 
          cleangenius={entity.attributes.cleangenius || 'Off'}
          onClick={() => setModalOpened(true)} 
          onShortcutsClick={() => setShortcutsModalOpened(true)}
          disabled={entity.attributes.started || false}
        />

        <div className="dreame-vacuum-card__controls">
          {selectedRooms.size > 0 && selectedMode === 'room' && (
            <div className="dreame-vacuum-card__room-selection">
              Selected: {Array.from(selectedRooms.values()).join(', ')}
            </div>
          )}
          <ModeTabs 
            selectedMode={effectiveMode} 
            onModeChange={handleModeChange} 
            disabled={entity.attributes.started || false}
          />
          <ActionButtons
            selectedMode={selectedMode}
            selectedRoomsCount={selectedRooms.size}
            isRunning={entity.attributes.running || entity.attributes.resume_cleaning || false}
            isPaused={entity.attributes.paused || false}
            onClean={handleClean}
            onPause={handlePause}
            onResume={handleResume}
            onStop={handleStop}
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
