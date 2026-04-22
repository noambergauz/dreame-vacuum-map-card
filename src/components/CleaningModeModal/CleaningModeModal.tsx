import { Modal, SegmentedControl } from '@/components/common';
import { CleanGeniusMode } from './CleanGeniusMode';
import { CustomMode } from './CustomMode';
import { CustomizeMode } from './CustomizeMode';
import type { CleanGeniusState } from '@/types/vacuum';
import { useHomeAssistantServices, useVacuumEntityIds } from '@/hooks';
import { useTranslation } from '@/hooks/useTranslation';
import { useEntity, useHass } from '@/contexts';
import { convertCleanGeniusStateToService, extractBaseEntityId, getAttr } from '@/utils';
import { CLEANGENIUS_STATE, UI_MODE_TYPE, DEFAULTS, CLEANING_MODE } from '@/constants';
import { logger } from '@/utils/logger';
import './CleaningModeModal.scss';

interface CleaningModeModalProps {
  opened: boolean;
  onClose: () => void;
  /** When true, disables settings that cannot be changed while cleaning */
  isRunning?: boolean;
}

export function CleaningModeModal({ opened, onClose, isRunning = false }: CleaningModeModalProps) {
  const { t } = useTranslation();
  const entity = useEntity();
  const hass = useHass();
  const baseEntityId = extractBaseEntityId(entity.entity_id);
  const { setSelectOption, setSwitch } = useHomeAssistantServices(hass);
  const entityIds = useVacuumEntityIds(baseEntityId);

  // Read customized_cleaning from entity attributes
  const isCustomizedCleaning = getAttr(entity.attributes.customized_cleaning, false);

  // Helper function for type-safe array attribute access
  const getStringArrayAttr = (key: string, defaultValue: string[]): string[] => {
    const value = entity.attributes[key];
    return Array.isArray(value) ? (value as string[]) : defaultValue;
  };

  const cleangenius = getAttr(entity.attributes.cleangenius, CLEANGENIUS_STATE.OFF);
  const isCleanGenius = cleangenius !== CLEANGENIUS_STATE.OFF;

  const cleaningMode = getAttr(entity.attributes.cleaning_mode, DEFAULTS.CLEANING_MODE);
  const cleangeniusMode = getAttr(entity.attributes.cleangenius_mode, DEFAULTS.CLEANGENIUS_MODE);
  const suctionLevel = getAttr(entity.attributes.suction_level, DEFAULTS.SUCTION_LEVEL);
  const wetnessLevel = getAttr(entity.attributes.wetness_level, DEFAULTS.WETNESS_LEVEL);
  const cleaningRoute = getAttr(entity.attributes.cleaning_route, DEFAULTS.CLEANING_ROUTE);
  const maxSuctionPower = getAttr(entity.attributes.max_suction_power, DEFAULTS.MAX_SUCTION_POWER);
  const selfCleanArea = getAttr(entity.attributes.self_clean_area, DEFAULTS.SELF_CLEAN_AREA);
  const selfCleanFrequency = getAttr(entity.attributes.self_clean_frequency, DEFAULTS.SELF_CLEAN_FREQUENCY);
  const selfCleanFrequencyList = getStringArrayAttr('self_clean_frequency_list', ['By area', 'By time', 'By room']);
  const selfCleanAreaMin = getAttr(entity.attributes.self_clean_area_min, DEFAULTS.SELF_CLEAN_AREA_MIN);
  const selfCleanAreaMax = getAttr(entity.attributes.self_clean_area_max, DEFAULTS.SELF_CLEAN_AREA_MAX);
  const selfCleanTime = getAttr(entity.attributes.previous_self_clean_time, DEFAULTS.SELF_CLEAN_TIME);
  const selfCleanTimeMin = getAttr(entity.attributes.self_clean_time_min, DEFAULTS.SELF_CLEAN_TIME_MIN);
  const selfCleanTimeMax = getAttr(entity.attributes.self_clean_time_max, DEFAULTS.SELF_CLEAN_TIME_MAX);
  const mopPadHumidity = getAttr(entity.attributes.mop_pad_humidity, DEFAULTS.MOP_PAD_HUMIDITY);

  const modeOptions = [
    { value: UI_MODE_TYPE.CLEANGENIUS, label: t('cleaning_mode.clean_genius') },
    { value: UI_MODE_TYPE.CUSTOM, label: t('cleaning_mode.custom') },
  ];

  // Get cleaning mode list and add Customize option
  const baseCleaningModeList = getStringArrayAttr('cleaning_mode_list', [
    'Sweeping',
    'Mopping',
    'Sweeping and mopping',
    'Mopping after sweeping',
  ]);

  // Add "Customize" as the last option
  const cleaningModeList = [...baseCleaningModeList, CLEANING_MODE.CUSTOMIZE];

  const cleangeniusModeList = getStringArrayAttr('cleangenius_mode_list', ['Vacuum and mop', 'Mop after vacuum']);

  const suctionLevelList = getStringArrayAttr('suction_level_list', ['Quiet', 'Standard', 'Strong', 'Turbo']);
  const cleaningRouteList = getStringArrayAttr('cleaning_route_list', ['Quick', 'Standard', 'Intensive', 'Deep']);

  // Entity ID for customized_cleaning switch
  const customizedCleaningSwitch = `switch.${baseEntityId}_customized_cleaning`;

  const handleModeSwitch = (value: string) => {
    const isCleanGeniusMode = value === UI_MODE_TYPE.CLEANGENIUS;

    // Turn off customized cleaning when switching to CleanGenius
    if (isCleanGeniusMode && isCustomizedCleaning) {
      hass.callService('switch', 'turn_off', { entity_id: customizedCleaningSwitch });
    }

    setSwitch(entityIds.customMoppingMode, !isCleanGeniusMode);

    if (isCleanGeniusMode) {
      setSelectOption(
        entityIds.cleangenius,
        convertCleanGeniusStateToService(CLEANGENIUS_STATE.ROUTINE_CLEANING as CleanGeniusState)
      );
    } else {
      setSelectOption(
        entityIds.cleangenius,
        convertCleanGeniusStateToService(CLEANGENIUS_STATE.OFF as CleanGeniusState)
      );
    }
  };

  // Handle cleaning mode selection in CustomMode
  const handleCleaningModeSelect = (entityId: string, value: string) => {
    if (value === CLEANING_MODE.CUSTOMIZE) {
      // Turn on customized_cleaning switch
      logger.debug('CleaningModeModal', 'Enabling customized cleaning');
      hass.callService('switch', 'turn_on', { entity_id: customizedCleaningSwitch });
    } else {
      // Turn off customized_cleaning if it was on
      if (isCustomizedCleaning) {
        logger.debug('CleaningModeModal', 'Disabling customized cleaning');
        hass.callService('switch', 'turn_off', { entity_id: customizedCleaningSwitch });
        // Delay setting the new mode to allow the switch turn-off to complete first
        // (turning off customize reverts to previous mode, then we set the new one)
        setTimeout(() => {
          setSelectOption(entityId, value);
        }, 300);
      } else {
        // Set the cleaning mode immediately if not coming from customize
        setSelectOption(entityId, value);
      }
    }
  };

  // Determine what to show in Custom mode:
  // - If customized_cleaning is true, show CustomizeMode (per-room settings)
  // - Otherwise show normal CustomMode (global settings)
  const showCustomizeMode = !isCleanGenius && isCustomizedCleaning;

  return (
    <Modal opened={opened} onClose={onClose}>
      <div className="cleaning-mode-modal">
        {/* Mode Toggle */}
        <div className="cleaning-mode-modal__header">
          <SegmentedControl
            value={isCleanGenius ? UI_MODE_TYPE.CLEANGENIUS : UI_MODE_TYPE.CUSTOM}
            onChange={handleModeSwitch}
            options={modeOptions}
            disabled={isRunning}
          />
        </div>

        <div className="cleaning-mode-modal__content-wrapper">
          {isCleanGenius ? (
            <CleanGeniusMode
              cleangeniusMode={cleangeniusMode}
              cleangeniusModeList={cleangeniusModeList}
              cleangenius={cleangenius}
              baseEntityId={baseEntityId}
              isRunning={isRunning}
            />
          ) : (
            <>
              {/* Always show CleaningModeSelector at top in Custom mode */}
              <CustomMode
                cleaningMode={isCustomizedCleaning ? CLEANING_MODE.CUSTOMIZE : cleaningMode}
                cleaningModeList={cleaningModeList}
                suctionLevel={suctionLevel}
                suctionLevelList={suctionLevelList}
                wetnessLevel={wetnessLevel}
                mopPadHumidity={mopPadHumidity}
                cleaningRoute={cleaningRoute}
                cleaningRouteList={cleaningRouteList}
                maxSuctionPower={maxSuctionPower}
                selfCleanArea={selfCleanArea}
                selfCleanFrequency={selfCleanFrequency}
                selfCleanFrequencyList={selfCleanFrequencyList}
                selfCleanAreaMin={selfCleanAreaMin}
                selfCleanAreaMax={selfCleanAreaMax}
                selfCleanTime={selfCleanTime}
                selfCleanTimeMin={selfCleanTimeMin}
                selfCleanTimeMax={selfCleanTimeMax}
                baseEntityId={baseEntityId}
                isRunning={isRunning}
                onCleaningModeSelect={handleCleaningModeSelect}
                showOnlyCleaningModeSelector={showCustomizeMode}
              />

              {/* Show per-room settings when customize is enabled */}
              {showCustomizeMode && <CustomizeMode baseEntityId={baseEntityId} />}
            </>
          )}
        </div>
      </div>
    </Modal>
  );
}
