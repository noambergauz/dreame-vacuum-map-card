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
import { useVacuumCardState, useVacuumServices, useToast, useTranslation, useTheme } from '@/hooks';
import { extractEntityData, getEffectiveCleaningMode, getAttr } from '@/utils';
import { isRtlLanguage } from '@/i18n';
import { VacuumCardProvider } from '@/contexts';
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
    setSelectedZone,
    setModalOpened,
    setShortcutsModalOpened,
    setSettingsPanelOpened,
    handleModeChange,
    handleRoomToggle,
    cycleRepeatCount,
    resetRepeatCount,
  } = useVacuumCardState({ defaultMode: config.default_mode });

  // Get map entity ID
  const mapEntityId = config.map_entity || `camera.${config.entity.split('.')[1]}_map`;

  // Read customized_cleaning from entity attributes
  const isCustomizedCleaning = entity ? getAttr(entity.attributes.customized_cleaning, false) : false;

  // Reset repeat count when vacuum stops running
  const isRunning = entity ? getAttr(entity.attributes.running, false) : false;
  useEffect(() => {
    if (!isRunning) {
      resetRepeatCount();
    }
  }, [isRunning, resetRepeatCount]);

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
            onShortcutsClick={handleShortcutsOpen}
            onRepeatClick={cycleRepeatCount}
            repeatCount={repeatCount}
            disabled={isRunning}
            customizeModeEnabled={isCustomizedCleaning}
          />

          <div className="dreame-vacuum-card__controls">
            {selectedMode === 'room' && <RoomSelectionDisplay selectedRooms={selectedRooms} />}

            <ModeTabs
              selectedMode={effectiveMode}
              onModeChange={handleModeChange}
              disabled={getAttr(entity.attributes.started, false)}
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
            />
          </div>
        </div>

        <CleaningModeModal opened={modalOpened} onClose={handleModalClose} isRunning={isRunning} />

        <ShortcutsModal opened={shortcutsModalOpened} onClose={handleShortcutsClose} />

        <SettingsPanel opened={settingsPanelOpened} onClose={handleSettingsClose} />

        {toast && <Toast message={toast} onClose={hideToast} />}
      </div>
    </VacuumCardProvider>
  );
}
