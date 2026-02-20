import { Header } from '../Header';
import { CleaningModeButton } from '../CleaningModeButton';
import { VacuumMap } from '../VacuumMap';
import { ModeTabs } from '../ModeTabs';
import { ActionButtons } from '../ActionButtons';
import { CleaningModeModal } from '../CleaningModeModal';
import { ShortcutsModal } from '../ShortcutsModal';
import { SettingsPanel } from '../SettingsPanel';
import { RoomSelectionDisplay } from '../RoomSelectionDisplay';
import { Toast } from '../common';
import { useVacuumCardState, useVacuumServices, useToast, useTranslation, useTheme } from '../../hooks';
import { extractEntityData, getEffectiveCleaningMode, getAttr } from '../../utils';
import type { Hass, HassConfig } from '../../types/homeassistant';
import { useState, useRef } from 'react';
import './DreameVacuumCard.scss';

interface DreameVacuumCardProps {
  hass: Hass;
  config: HassConfig;
}

export function DreameVacuumCard({ hass, config }: DreameVacuumCardProps) {
  const entity = hass.states[config.entity];
  const themeType = config.theme || 'light';
  const language = config.language || 'en';
  const { t } = useTranslation(language);

  // Container ref for applying theme
  const containerRef = useRef<HTMLDivElement>(null);

  // Apply theme
  const theme = useTheme({
    themeType,
    customThemeConfig: config.custom_theme,
    containerRef,
  });

  // Track map image dimensions
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);

  // State management
  const {
    selectedMode,
    selectedRooms,
    selectedZone,
    modalOpened,
    shortcutsModalOpened,
    settingsPanelOpened,
    setSelectedZone,
    setModalOpened,
    setShortcutsModalOpened,
    setSettingsPanelOpened,
    handleModeChange,
    handleRoomToggle,
  } = useVacuumCardState({ defaultMode: config.default_mode });

  // Toast notifications
  const { toast, showToast, hideToast } = useToast();

  // Vacuum services
  const { handlePause, handleStop, handleDock, handleClean } = useVacuumServices({
    hass,
    entityId: config.entity,
    mapEntityId: config.map_entity || `camera.${config.entity.split('.')[1]}_map`,
    onSuccess: showToast,
    language,
  });

  // Handle room toggle with toast
  const handleRoomToggleWithToast = (roomId: number, roomName: string) => {
    const wasSelected = selectedRooms.has(roomId);
    handleRoomToggle(roomId, roomName);
    showToast(
      wasSelected ? t('toast.deselected_room', { name: roomName }) : t('toast.selected_room', { name: roomName })
    );
  };

  // Handle clean action
  const handleCleanAction = () => {
    handleClean(selectedMode, selectedRooms, selectedZone, imageDimensions?.width, imageDimensions?.height);
  };

  // Handle resume (just calls start)
  const handleResume = () => {
    hass.callService('vacuum', 'start', { entity_id: config.entity });
    showToast(t('toast.resuming'));
  };

  // Error handling
  if (!entity) {
    return <div className="dreame-vacuum-card__error">{t('errors.entity_not_found', { entity: config.entity })}</div>;
  }

  // Extract entity data
  const entityData = extractEntityData(entity, config);
  if (!entityData) {
    return <div className="dreame-vacuum-card__error">{t('errors.failed_to_load')}</div>;
  }

  const { deviceName, mapEntityId, rooms } = entityData;
  const effectiveMode = getEffectiveCleaningMode(entity, selectedMode);

  return (
    <div ref={containerRef} className={`dreame-vacuum-card dreame-vacuum-card--${theme.name}`}>
      <div className="dreame-vacuum-card__container">
        <Header entity={entity} deviceName={deviceName} onSettingsClick={() => setSettingsPanelOpened(true)} />

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
          language={language}
          isStarted={getAttr(entity.attributes.started, false)}
        />

        <CleaningModeButton
          cleanGeniusMode={getAttr(entity.attributes.cleangenius_mode, '')}
          cleaningMode={getAttr(entity.attributes.cleaning_mode, 'Sweeping and mopping')}
          cleangenius={getAttr(entity.attributes.cleangenius, 'Off')}
          onClick={() => setModalOpened(true)}
          onShortcutsClick={() => setShortcutsModalOpened(true)}
          disabled={getAttr(entity.attributes.started, false)}
          language={language}
        />

        <div className="dreame-vacuum-card__controls">
          {selectedMode === 'room' && <RoomSelectionDisplay selectedRooms={selectedRooms} language={language} />}

          <ModeTabs
            selectedMode={effectiveMode}
            onModeChange={handleModeChange}
            disabled={getAttr(entity.attributes.started, false)}
            language={language}
          />

          <ActionButtons
            selectedMode={selectedMode}
            selectedRoomsCount={selectedRooms.size}
            isRunning={getAttr(entity.attributes.running, false)}
            isPaused={getAttr(entity.attributes.paused, false)}
            isDocked={entity.state === 'docked' || getAttr(entity.attributes.docked, false)}
            onClean={handleCleanAction}
            onPause={handlePause}
            onResume={handleResume}
            onStop={handleStop}
            onDock={handleDock}
            language={language}
          />
        </div>
      </div>

      <CleaningModeModal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        entity={entity}
        hass={hass}
        language={language}
      />

      <ShortcutsModal
        opened={shortcutsModalOpened}
        onClose={() => setShortcutsModalOpened(false)}
        entity={entity}
        hass={hass}
        language={language}
      />

      <SettingsPanel
        opened={settingsPanelOpened}
        onClose={() => setSettingsPanelOpened(false)}
        hass={hass}
        entity={entity}
        config={config}
      />

      {toast && <Toast message={toast} onClose={hideToast} />}
    </div>
  );
}
