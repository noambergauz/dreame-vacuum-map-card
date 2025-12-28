import { Header } from '../Header';
import { CleaningModeButton } from '../CleaningModeButton';
import { VacuumMap } from '../VacuumMap';
import { RoomSelector } from '../RoomSelector';
import { ModeTabs } from '../ModeTabs';
import { ActionButtons } from '../ActionButtons';
import { CleaningModeModal } from '../CleaningModeModal';
import { ShortcutsModal } from '../ShortcutsModal';
import { RoomSelectionDisplay } from '../RoomSelectionDisplay';
import { Toast } from '../common';
import { useVacuumCardState, useVacuumServices, useToast } from '../../hooks';
import { extractEntityData, getEffectiveCleaningMode } from '../../utils/entityHelpers';
import type { Hass, HassConfig } from '../../types/homeassistant';
import { useState } from 'react';
import './DreameVacuumCard.scss';

interface DreameVacuumCardProps {
  hass: Hass;
  config: HassConfig;
}

export function DreameVacuumCard({ hass, config }: DreameVacuumCardProps) {
  const entity = hass.states[config.entity];
  const theme = config.theme || 'light';

  // Track map image dimensions
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);

  // State management
  const {
    selectedMode,
    selectedRooms,
    selectedZone,
    modalOpened,
    shortcutsModalOpened,
    setSelectedZone,
    setModalOpened,
    setShortcutsModalOpened,
    handleModeChange,
    handleRoomToggle,
  } = useVacuumCardState();

  // Toast notifications
  const { toast, showToast, hideToast } = useToast();

  // Vacuum services
  const {
    handlePause,
    handleStop,
    handleDock,
    handleClean,
  } = useVacuumServices({
    hass,
    entityId: config.entity,
    mapEntityId: config.map_entity || `camera.${config.entity.split('.')[1]}_map`,
    onSuccess: showToast,
  });

  // Handle room toggle with toast
  const handleRoomToggleWithToast = (roomId: number, roomName: string) => {
    const wasSelected = selectedRooms.has(roomId);
    handleRoomToggle(roomId, roomName);
    showToast(wasSelected ? `Deselected ${roomName}` : `Selected ${roomName}`);
  };

  // Handle clean action
  const handleCleanAction = () => {
    handleClean(
      selectedMode, 
      selectedRooms, 
      selectedZone,
      imageDimensions?.width,
      imageDimensions?.height
    );
  };

  // Handle resume (just calls start)
  const handleResume = () => {
    hass.callService('vacuum', 'start', { entity_id: config.entity });
    showToast('Resuming cleaning');
  };

  // Error handling
  if (!entity) {
    return <div className="dreame-vacuum-card__error">Entity not found: {config.entity}</div>;
  }

  // Extract entity data
  const entityData = extractEntityData(entity, config);
  if (!entityData) {
    return <div className="dreame-vacuum-card__error">Failed to load entity data</div>;
  }

  const { deviceName, mapEntityId, rooms } = entityData;
  const effectiveMode = getEffectiveCleaningMode(entity, selectedMode);

  return (
    <div className={`dreame-vacuum-card dreame-vacuum-card--${theme}`}>
      <div className="dreame-vacuum-card__container">
        <Header entity={entity} deviceName={deviceName} />
        
        {selectedMode === 'room' ? (
          <RoomSelector
            rooms={rooms}
            selectedRooms={selectedRooms}
            onRoomToggle={handleRoomToggleWithToast}
          />
        ) : (
          <VacuumMap
            hass={hass}
            mapEntityId={mapEntityId}
            selectedMode={selectedMode}
            selectedRooms={selectedRooms}
            rooms={rooms}
            onRoomToggle={handleRoomToggleWithToast}
            zone={selectedZone}
            onZoneChange={setSelectedZone}
            onImageDimensionsChange={(width, height) => setImageDimensions({ width, height })}
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
          {selectedMode === 'room' && (
            <RoomSelectionDisplay selectedRooms={selectedRooms} />
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
            isDocked={entity.attributes.docked || false}
            onClean={handleCleanAction}
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

      {toast && <Toast message={toast} onClose={hideToast} />}
    </div>
  );
}
