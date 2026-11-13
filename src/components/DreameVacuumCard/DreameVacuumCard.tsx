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
  useDelayedStart,
  useToast,
  useTranslation,
  useMapGeometry,
  useLoadDeviceEntities,
  useVacuumEntityIds,
  readSelectEntity,
} from '@/hooks';
import type { RepeatCount } from '@/hooks/useCardUIState';
import {
  getEffectiveCleaningMode,
  getAttr,
  getActiveSegments,
  resolveMapEntityId,
  readLiveMapFloor,
  resolveCleaningSelection,
  mapDiagnostic,
  buildCleanCommand,
  type CleanCommandResult,
  type DelayedStartRequest,
} from '@/utils';
import { isRtlLanguage, resolveChromeLanguage } from '@/i18n';
import { useEntity, useHass, VacuumCardProvider } from '@/contexts';
import { CAPABILITY } from '@/constants';
import type { Hass, HassConfig } from '@/types/homeassistant';
import { useState, useRef, useEffect, useCallback } from 'react';
import type { CSSProperties } from 'react';
import { logger } from '@/utils/logger';

const CLEAN_COMMAND_ERROR_KEYS: Record<Extract<CleanCommandResult, { ok: false }>['reason'], string> = {
  select_rooms_first: 'toast.select_rooms_first',
  select_zone_first: 'toast.select_zone_first',
  select_spot_first: 'toast.select_spot_first',
  cannot_determine_map: 'toast.cannot_determine_map',
  map_transform: 'errors.map_transform_unavailable',
};

function publishedOrAttribute(hass: Hass, entityId: string | undefined, attribute: unknown): string {
  const published = readSelectEntity(entityId ? hass.states[entityId] : undefined).value;
  if (published) return published;
  return typeof attribute === 'string' ? attribute : '';
}

function CleaningModeControls({
  onClick,
  onShortcutsClick,
  onRepeatClick,
  repeatCount,
}: {
  onClick: () => void;
  onShortcutsClick?: () => void;
  onRepeatClick?: () => void;
  repeatCount: RepeatCount;
}) {
  const hass = useHass();
  const entity = useEntity();
  const entityIds = useVacuumEntityIds();

  return (
    <CleaningModeButton
      cleanGeniusMode={publishedOrAttribute(hass, entityIds.cleangeniusMode, entity.attributes.cleangenius_mode)}
      cleaningMode={publishedOrAttribute(hass, entityIds.cleaningMode, entity.attributes.cleaning_mode)}
      cleangenius={publishedOrAttribute(hass, entityIds.cleangenius, entity.attributes.cleangenius)}
      onClick={onClick}
      onShortcutsClick={onShortcutsClick}
      onRepeatClick={onRepeatClick}
      repeatCount={repeatCount}
    />
  );
}

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
  const [loadedImageKey, setLoadedImageKey] = useState<string | null>(null);
  const [failedImageToken, setFailedImageToken] = useState<string | null>(null);

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
  } = useCardUIState({ vacuumEntityId: config.entity, defaultMode: config.default_mode });

  const mapEntityId = resolveMapEntityId(config.map_entity, deviceEntities.get('camera', 'map'));
  const cameraAttributes = mapEntityId ? hass.states[mapEntityId]?.attributes : undefined;
  const mapFloor = readLiveMapFloor(entity?.attributes.selected_map_id, cameraAttributes, loadedImageKey);
  const mapReady = mapFloor.floorReady && mapFloor.imageReady;
  if (imageDimensions && mapFloor.imageKey !== loadedImageKey) {
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

  // Vacuum services
  const { handlePause, handleResume, handleStop, handleDock, handleClean, handleCleanSpots } = useVacuumServices({
    hass,
    entityId: config.entity,
    mapEntityId,
    mapTransform: displayedGeometry.transform,
    onSuccess: showToast,
    onError: showToast,
  });

  // "Start after…": the command is handed to a Home Assistant script that waits for the trigger
  const delayedStart = useDelayedStart({ hass, config, language, onSuccess: showToast, onError: showToast });

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

  const cleanInFlight = useRef(false);
  const handleCleanAction = useCallback(async () => {
    if (cleanInFlight.current) return;
    cleanInFlight.current = true;
    try {
      // Starting now supersedes a start that is still waiting for its trigger
      if (delayedStart.pending) await delayedStart.cancel(true);

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

      await handleClean(
        selectedMode,
        selectedRooms,
        selectedZones,
        imageDimensions?.width,
        imageDimensions?.height,
        repeatCount
      );
    } finally {
      cleanInFlight.current = false;
    }
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
    delayedStart,
  ]);

  const handleDelayedStart = useCallback(
    async (request: DelayedStartRequest): Promise<boolean> => {
      const result = buildCleanCommand({
        entityId: config.entity,
        mode: selectedMode,
        areaSelectionMode,
        selectedRooms,
        selectedZones,
        selectedSpots,
        imageWidth: imageDimensions?.width,
        imageHeight: imageDimensions?.height,
        repeats: repeatCount,
        mapTransform: displayedGeometry.transform,
      });
      if (!result.ok) {
        showToast(t(CLEAN_COMMAND_ERROR_KEYS[result.reason]));
        return false;
      }
      return delayedStart.schedule(result.command, request);
    },
    [
      config.entity,
      selectedMode,
      areaSelectionMode,
      selectedRooms,
      selectedZones,
      selectedSpots,
      imageDimensions,
      repeatCount,
      displayedGeometry.transform,
      showToast,
      t,
      delayedStart,
    ]
  );

  // Memoized handlers for modal/panel open/close
  const handleSettingsOpen = useCallback(() => setSettingsPanelOpened(true), [setSettingsPanelOpened]);
  const handleSettingsClose = useCallback(() => setSettingsPanelOpened(false), [setSettingsPanelOpened]);
  const handleModalOpen = useCallback(() => setModalOpened(true), [setModalOpened]);
  const handleModalClose = useCallback(() => setModalOpened(false), [setModalOpened]);
  const handleShortcutsOpen = useCallback(() => setShortcutsModalOpened(true), [setShortcutsModalOpened]);
  const handleShortcutsClose = useCallback(() => setShortcutsModalOpened(false), [setShortcutsModalOpened]);

  const handleImageDimensionsChange = useCallback(
    (width: number, height: number, imageToken: string) => {
      if (imageToken !== mapFloor.imageToken) return;
      setLoadedImageKey(mapFloor.imageKey);
      setImageDimensions({ width, height });
    },
    [mapFloor.imageToken, mapFloor.imageKey]
  );

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

  const deviceName = config.title || entity.attributes.friendly_name || 'Dreame Vacuum';
  const effectiveMode = getEffectiveCleaningMode(entity, selectedMode);
  const mapMaxHeight = typeof config.map_height === 'number' ? `${config.map_height}px` : config.map_height;

  // Check for shortcuts capability
  const hasShortcuts = (entity.attributes.capabilities ?? []).includes(CAPABILITY.SHORTCUTS);
  const diagnostic = mapDiagnostic({
    hasCamera: Boolean(mapEntityId && hass.states[mapEntityId]),
    imageFailed: mapFloor.imageToken !== null && failedImageToken === mapFloor.imageToken,
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
        style={mapMaxHeight ? ({ '--map-max-height': mapMaxHeight } as CSSProperties) : undefined}
      >
        <div className="dreame-vacuum-card__container">
          <div className="dreame-vacuum-card__header">
            <Header deviceName={deviceName} onSettingsClick={handleSettingsOpen} />

            <MapSelector />

            {deviceEntities.status === 'error' && (
              <p className="dreame-vacuum-card__diagnostic">{t('errors.entity_discovery_failed')}</p>
            )}
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
              onImageError={setFailedImageToken}
              defaultRoomView={config.default_room_view}
            />
          </div>

          <div className="dreame-vacuum-card__footer">
            <CleaningModeControls
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
                delayedStart={delayedStart}
                onDelayedStart={handleDelayedStart}
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
