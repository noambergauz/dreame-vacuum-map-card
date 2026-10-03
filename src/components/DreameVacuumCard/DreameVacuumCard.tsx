import { Header } from '@/components/Header';
import { MapSelector } from '@/components/MapSelector';
import { CleaningModeButton } from '@/components/CleaningModeButton';
import { VacuumMap } from '@/components/VacuumMap';
import { ModeTabs } from '@/components/ModeTabs';
import { ActionButtons } from '@/components/ActionButtons';
import { CleaningModeModal } from '@/components/CleaningModeModal';
import { ShortcutsModal } from '@/components/ShortcutsModal';
import { SettingsPanel } from '@/components/SettingsPanel';
import { RoomSelectionDisplay } from '@/components/RoomSelectionDisplay';
import { Toast } from '@/components/common';
import {
  useCardUIState,
  useVacuumServices,
  useToast,
  useTranslation,
  useMapGeometry,
  useLoadDeviceEntities,
} from '@/hooks';
import {
  extractEntityData,
  getEffectiveCleaningMode,
  getAttr,
  getActiveSegments,
  resolveMapEntityId,
  readLiveMapFloor,
  resolveCleaningSelection,
  mapDiagnostic,
} from '@/utils';
import { isRtlLanguage, resolveChromeLanguage } from '@/i18n';
import { VacuumCardProvider } from '@/contexts';
import { CAPABILITY } from '@/constants';
import type { Hass, HassConfig } from '@/types/homeassistant';
import { useState, useRef, useEffect, useCallback } from 'react';
import type { CSSProperties } from 'react';
import { logger } from '@/utils/logger';
import './DreameVacuumCard.scss';

interface DreameVacuumCardProps {
  hass: Hass;
  config: HassConfig;
}

export function DreameVacuumCard({ hass, config }: DreameVacuumCardProps) {
  const entity = hass.states[config.entity];
  const deviceEntities = useLoadDeviceEntities(hass, config.entity);
  logger.debug('DreameVacuumCard', 'Loaded entity', entity);
  const language = resolveChromeLanguage(config.language, hass.language);
  const isRtl = isRtlLanguage(language);
  const { t } = useTranslation(language);

  // Track map image dimensions and the picture token those dimensions belong to
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);
  const [loadedImageToken, setLoadedImageToken] = useState<string | null>(null);

  // State management
  const {
    selectedMode,
    areaSelectionMode,
    selectedRooms,
    selectedZones,
    selectedSpots,
    modalOpened,
    shortcutsModalOpened,
    settingsPanelOpened,
    repeatCount,
    setSelectedMode,
    setSelectedRooms,
    setSelectedZones,
    setSelectedSpots,
    setModalOpened,
    setShortcutsModalOpened,
    setSettingsPanelOpened,
    handleModeChange,
    handleAreaSelectionModeChange,
    handleRoomToggle,
    cycleRepeatCount,
    resetRepeatCount,
  } = useCardUIState({ defaultMode: config.default_mode });

  const mapEntityId = resolveMapEntityId(config.map_entity, deviceEntities.get('camera', 'map'));
  const cameraAttributes = mapEntityId ? hass.states[mapEntityId]?.attributes : undefined;
  const mapFloor = readLiveMapFloor(entity?.attributes.selected_map_id, cameraAttributes, loadedImageToken);
  const mapReady = mapFloor.floorReady && mapFloor.imageReady;
  if (imageDimensions && mapFloor.imageToken !== loadedImageToken) {
    setImageDimensions(null);
  }

  const mapGeometry = useMapGeometry({
    hass,
    mapEntityId,
    imageWidth: imageDimensions?.width ?? 0,
    imageHeight: imageDimensions?.height ?? 0,
    roomNames: config.room_names,
  });
  const displayedGeometry = mapReady ? mapGeometry : { rooms: [], rotation: mapGeometry.rotation, transform: null };

  // Check if vacuum is actively cleaning (state === 'cleaning' or started attribute)
  const isCleaning = entity ? entity.state === 'cleaning' || getAttr(entity.attributes.started, false) : false;
  const isSegmentCleaning = entity ? entity.attributes.segment_cleaning === true : false;

  const acceptedFloorId = useRef<number | null | undefined>(undefined);
  useEffect(() => {
    const floorChanged = acceptedFloorId.current !== undefined && acceptedFloorId.current !== mapFloor.floorId;
    if (acceptedFloorId.current === undefined || floorChanged) {
      acceptedFloorId.current = mapFloor.floorId;
    }

    const activeSegments = getActiveSegments(hass, config.entity, mapEntityId, config.room_names);
    const update = resolveCleaningSelection({
      floorChanged,
      mapReady,
      isSegmentCleaning,
      selectedRooms,
      activeSegments,
    });

    if (update.clearZone) {
      setSelectedZones([]);
      setSelectedSpots([]);
    }
    if (update.rooms) {
      logger.debug('DreameVacuumCard', 'Updating room selection for the current floor', [...update.rooms.keys()]);
      setSelectedRooms(update.rooms);
    }
    if (update.selectRoomMode) setSelectedMode('room');
  }, [
    mapFloor.floorId,
    mapReady,
    isSegmentCleaning,
    hass,
    config.entity,
    config.room_names,
    mapEntityId,
    selectedRooms,
    setSelectedRooms,
    setSelectedZones,
    setSelectedSpots,
    setSelectedMode,
  ]);

  // Reset repeat count when vacuum stops cleaning
  useEffect(() => {
    if (!isCleaning) {
      resetRepeatCount();
    }
  }, [isCleaning, resetRepeatCount]);

  // Toast notifications
  const { toast, showToast, hideToast } = useToast();

  // Show error messages via toast with error styling
  const showError = useCallback(
    (message: string) => {
      showToast(message);
    },
    [showToast]
  );

  // Vacuum services
  const { handlePause, handleStop, handleDock, handleClean, handleCleanSpots } = useVacuumServices({
    hass,
    entityId: config.entity,
    mapEntityId,
    mapTransform: displayedGeometry.transform,
    onSuccess: showToast,
    onError: showError,
  });

  // Handle room toggle with toast
  const handleRoomToggleWithToast = useCallback(
    (roomId: number, roomName: string) => {
      const wasSelected = selectedRooms.has(roomId);
      handleRoomToggle(roomId, roomName);
      showToast(
        wasSelected ? t('toast.deselected_room', { name: roomName }) : t('toast.selected_room', { name: roomName })
      );
    },
    [selectedRooms, handleRoomToggle, showToast, t]
  );

  // Handle clean action
  const handleCleanAction = useCallback(async () => {
    if (selectedMode === 'zone' && areaSelectionMode === 'spot') {
      const success = await handleCleanSpots(
        selectedSpots,
        imageDimensions?.width ?? 0,
        imageDimensions?.height ?? 0,
        repeatCount
      );
      if (success) setSelectedSpots([]);
      return;
    }

    handleClean(
      selectedMode,
      selectedRooms,
      selectedZones,
      imageDimensions?.width,
      imageDimensions?.height,
      repeatCount
    );
  }, [
    selectedMode,
    areaSelectionMode,
    selectedRooms,
    selectedZones,
    selectedSpots,
    imageDimensions,
    repeatCount,
    handleClean,
    handleCleanSpots,
    setSelectedSpots,
  ]);

  // Handle resume (just calls start)
  const handleResume = useCallback(() => {
    hass.callService('vacuum', 'start', { entity_id: config.entity });
    showToast(t('toast.resuming'));
  }, [hass, config.entity, showToast, t]);

  // Memoized handlers for modal/panel open/close
  const handleSettingsOpen = useCallback(() => setSettingsPanelOpened(true), [setSettingsPanelOpened]);
  const handleSettingsClose = useCallback(() => setSettingsPanelOpened(false), [setSettingsPanelOpened]);
  const handleModalOpen = useCallback(() => setModalOpened(true), [setModalOpened]);
  const handleModalClose = useCallback(() => setModalOpened(false), [setModalOpened]);
  const handleShortcutsOpen = useCallback(() => setShortcutsModalOpened(true), [setShortcutsModalOpened]);
  const handleShortcutsClose = useCallback(() => setShortcutsModalOpened(false), [setShortcutsModalOpened]);

  // Memoized handler for image dimensions
  const handleImageDimensionsChange = useCallback((width: number, height: number, imageToken: string) => {
    setLoadedImageToken(imageToken);
    setImageDimensions({ width, height });
  }, []);

  // Error handling
  if (!entity) {
    return <div className="dreame-vacuum-card__error">{t('errors.entity_not_found', { entity: config.entity })}</div>;
  }

  // Handle unavailable or unknown entity state
  if (entity.state === 'unavailable' || entity.state === 'unknown') {
    return (
      <div className="dreame-vacuum-card__error dreame-vacuum-card__error--unavailable">
        {t('errors.entity_unavailable')}
      </div>
    );
  }

  // Extract entity data
  const entityData = extractEntityData(entity, config, mapEntityId);
  if (!entityData) {
    return <div className="dreame-vacuum-card__error">{t('errors.failed_to_load')}</div>;
  }

  const { deviceName } = entityData;
  const effectiveMode = getEffectiveCleaningMode(entity, selectedMode);

  // Check for shortcuts capability
  const hasShortcuts = (entity.attributes.capabilities ?? []).includes(CAPABILITY.SHORTCUTS);
  const diagnostic = mapDiagnostic({
    hasCamera: Boolean(mapEntityId && hass.states[mapEntityId]),
    floorReady: mapFloor.floorReady,
    imageReady: mapFloor.imageReady,
    roomCount: displayedGeometry.rooms.length,
    hasTransform: displayedGeometry.transform !== null,
  });

  return (
    <VacuumCardProvider hass={hass} entity={entity} config={config} language={language} deviceEntities={deviceEntities}>
      <div
        className="dreame-vacuum-card"
        dir={isRtl ? 'rtl' : 'ltr'}
        style={config.map_height ? ({ '--map-max-height': config.map_height } as CSSProperties) : undefined}
      >
        <div className="dreame-vacuum-card__container">
          <div className="dreame-vacuum-card__header">
            <Header deviceName={deviceName} onSettingsClick={handleSettingsOpen} />

            <MapSelector />

            {diagnostic && <p className="dreame-vacuum-card__diagnostic">{t(`vacuum_map.diagnostic_${diagnostic}`)}</p>}
          </div>

          <div className="dreame-vacuum-card__map">
            <VacuumMap
              mapEntityId={mapEntityId}
              geometry={displayedGeometry}
              selectedMode={selectedMode}
              areaSelectionMode={areaSelectionMode}
              selectedRooms={selectedRooms}
              onRoomToggle={handleRoomToggleWithToast}
              zone={mapReady ? selectedZones : []}
              onZoneChange={setSelectedZones}
              spots={mapReady ? selectedSpots : []}
              onSpotsChange={setSelectedSpots}
              onImageDimensionsChange={handleImageDimensionsChange}
              defaultRoomView={config.default_room_view}
            />
          </div>

          <div className="dreame-vacuum-card__footer">
            <CleaningModeButton
              cleanGeniusMode={getAttr(entity.attributes.cleangenius_mode, '')}
              cleaningMode={getAttr(entity.attributes.cleaning_mode, 'Sweeping and mopping')}
              cleangenius={getAttr(entity.attributes.cleangenius, 'Off')}
              onClick={handleModalOpen}
              onShortcutsClick={hasShortcuts ? handleShortcutsOpen : undefined}
              onRepeatClick={cycleRepeatCount}
              repeatCount={repeatCount}
            />

            <div className="dreame-vacuum-card__controls">
              {selectedMode === 'room' && <RoomSelectionDisplay selectedRooms={selectedRooms} />}

              <ModeTabs
                selectedMode={effectiveMode}
                areaSelectionMode={areaSelectionMode}
                onModeChange={handleModeChange}
                onAreaSelectionModeChange={handleAreaSelectionModeChange}
              />

              <ActionButtons
                selectedMode={selectedMode}
                areaSelectionMode={areaSelectionMode}
                selectedRoomsCount={selectedRooms.size}
                selectedSpotsCount={selectedSpots.length}
                onClean={handleCleanAction}
                onPause={handlePause}
                onResume={handleResume}
                onStop={handleStop}
                onDock={handleDock}
              />
            </div>
          </div>
        </div>

        <CleaningModeModal opened={modalOpened} onClose={handleModalClose} />

        <ShortcutsModal opened={shortcutsModalOpened} onClose={handleShortcutsClose} />

        <SettingsPanel opened={settingsPanelOpened} onClose={handleSettingsClose} />

        {toast && <Toast message={toast} onClose={hideToast} />}
      </div>
    </VacuumCardProvider>
  );
}
