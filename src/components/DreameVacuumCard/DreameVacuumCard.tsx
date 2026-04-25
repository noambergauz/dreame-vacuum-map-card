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
import { useCardUIState, useVacuumServices, useToast, useTranslation, useTheme } from '@/hooks';
import { extractEntityData, getEffectiveCleaningMode, getAttr, getActiveSegments } from '@/utils';
import { isRtlLanguage } from '@/i18n';
import { VacuumCardProvider } from '@/contexts';
import { CAPABILITY } from '@/constants';
import type { Hass, HassConfig } from '@/types/homeassistant';
import type { SupportedLanguage } from '@/i18n/locales';
import { useState, useRef, useEffect, useCallback } from 'react';
import { logger } from '@/utils/logger';
import './DreameVacuumCard.scss';

interface DreameVacuumCardProps {
  hass: Hass;
  config: HassConfig;
}

export function DreameVacuumCard({ hass, config }: DreameVacuumCardProps) {
  const entity = hass.states[config.entity];
  logger.debug('DreameVacuumCard', 'Loaded entity', entity);
  const themeType = config.theme || 'light';
  const language = config.language || 'en';
  const isRtl = isRtlLanguage(language as SupportedLanguage);
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
    repeatCount,
    setSelectedMode,
    setSelectedRooms,
    setSelectedZone,
    setModalOpened,
    setShortcutsModalOpened,
    setSettingsPanelOpened,
    handleModeChange,
    handleRoomToggle,
    cycleRepeatCount,
    resetRepeatCount,
  } = useCardUIState({ defaultMode: config.default_mode });

  // Get map entity ID
  const mapEntityId = config.map_entity || `camera.${config.entity.split('.')[1]}_map`;

  // Check if vacuum is actively cleaning (state === 'cleaning' or started attribute)
  const isCleaning = entity ? entity.state === 'cleaning' || getAttr(entity.attributes.started, false) : false;
  const isSegmentCleaning = entity ? entity.attributes.segment_cleaning === true : false;

  // Sync room selection with active segments when segment cleaning is in progress
  // This ensures the UI reflects the actual cleaning state after a refresh
  useEffect(() => {
    if (!isSegmentCleaning) return;

    const activeSegments = getActiveSegments(hass, config.entity, mapEntityId);
    if (activeSegments.size > 0) {
      // Only update if different from current selection
      const currentIds = Array.from(selectedRooms.keys()).sort();
      const activeIds = Array.from(activeSegments.keys()).sort();
      const isDifferent = currentIds.length !== activeIds.length || currentIds.some((id, i) => id !== activeIds[i]);

      if (isDifferent) {
        logger.debug('DreameVacuumCard', 'Syncing room selection with active segments', activeIds);
        setSelectedRooms(activeSegments);
        setSelectedMode('room');
      }
    }
  }, [isSegmentCleaning, hass, config.entity, mapEntityId, selectedRooms, setSelectedRooms, setSelectedMode]);

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
  const { handlePause, handleStop, handleDock, handleClean } = useVacuumServices({
    hass,
    entityId: config.entity,
    mapEntityId,
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
  const handleCleanAction = useCallback(() => {
    handleClean(
      selectedMode,
      selectedRooms,
      selectedZone,
      imageDimensions?.width,
      imageDimensions?.height,
      repeatCount
    );
  }, [selectedMode, selectedRooms, selectedZone, imageDimensions, repeatCount, handleClean]);

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
  const handleImageDimensionsChange = useCallback(
    (width: number, height: number) => setImageDimensions({ width, height }),
    []
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

  // Extract entity data
  const entityData = extractEntityData(entity, config);
  if (!entityData) {
    return <div className="dreame-vacuum-card__error">{t('errors.failed_to_load')}</div>;
  }

  const { deviceName, mapEntityId: extractedMapEntityId } = entityData;
  // Use extracted mapEntityId if available, otherwise use the one we computed
  const finalMapEntityId = extractedMapEntityId || mapEntityId;
  const effectiveMode = getEffectiveCleaningMode(entity, selectedMode);

  // Check for shortcuts capability
  const hasShortcuts = (entity.attributes.capabilities ?? []).includes(CAPABILITY.SHORTCUTS);

  return (
    <VacuumCardProvider hass={hass} entity={entity} config={config} language={language as SupportedLanguage}>
      <div
        ref={containerRef}
        className={`dreame-vacuum-card dreame-vacuum-card--${theme.name}`}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="dreame-vacuum-card__container">
          <Header deviceName={deviceName} onSettingsClick={handleSettingsOpen} />

          <MapSelector />

          <VacuumMap
            mapEntityId={finalMapEntityId}
            selectedMode={selectedMode}
            selectedRooms={selectedRooms}
            onRoomToggle={handleRoomToggleWithToast}
            zone={selectedZone}
            onZoneChange={setSelectedZone}
            onImageDimensionsChange={handleImageDimensionsChange}
            isStarted={getAttr(entity.attributes.started, false)}
            defaultRoomView={config.default_room_view}
          />

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

            <ModeTabs selectedMode={effectiveMode} onModeChange={handleModeChange} />

            <ActionButtons
              selectedMode={selectedMode}
              selectedRoomsCount={selectedRooms.size}
              onClean={handleCleanAction}
              onPause={handlePause}
              onResume={handleResume}
              onStop={handleStop}
              onDock={handleDock}
            />
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
