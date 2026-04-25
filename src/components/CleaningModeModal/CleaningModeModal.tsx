import { Modal, SegmentedControl } from '@/components/common';
import { CleanGeniusMode } from './CleanGeniusMode';
import { CustomMode } from './CustomMode';
import { CustomizeMode } from './CustomizeMode';
import type { CleanGeniusState } from '@/types/vacuum';
import { useHomeAssistantServices, useVacuumEntityIds, getEntityState, useVacuumCapabilities } from '@/hooks';
import { useTranslation } from '@/hooks/useTranslation';
import { useEntity, useHass, useMachineState } from '@/contexts';
import { convertCleanGeniusStateToService, extractBaseEntityId, getAttr } from '@/utils';
import { CLEANGENIUS_STATE, UI_MODE_TYPE, DEFAULTS, CLEANING_MODE, CAPABILITY } from '@/constants';
import { logger } from '@/utils/logger';
import './CleaningModeModal.scss';

interface CleaningModeModalProps {
  opened: boolean;
  onClose: () => void;
}

export function CleaningModeModal({ opened, onClose }: CleaningModeModalProps) {
  const { t } = useTranslation();
  const entity = useEntity();
  const hass = useHass();
  const { phase, isCustomizedCleaning } = useMachineState();
  const baseEntityId = extractBaseEntityId(entity.entity_id);
  const { setSelectOption, setSwitch } = useHomeAssistantServices(hass);
  const entityIds = useVacuumEntityIds(baseEntityId);
  const capabilities = useVacuumCapabilities();

  const hasCleanGenius = capabilities.has(CAPABILITY.CLEANGENIUS);
  const isInCleaningSession = phase === 'cleaning' || phase === 'paused';

  const customizedCleaningSwitch = `switch.${baseEntityId}_customized_cleaning`;
  const cleangeniusState = getEntityState(hass, entityIds.cleangenius);

  const getStringArrayAttr = (key: string, defaultValue: string[]): string[] => {
    const value = entity.attributes[key];
    return Array.isArray(value) ? (value as string[]) : defaultValue;
  };

  const cleangeniusEntityState = cleangeniusState.state?.toLowerCase();
  const cleangeniusAttrState = getAttr(entity.attributes.cleangenius, CLEANGENIUS_STATE.OFF);
  const isValidEntityState =
    cleangeniusEntityState && cleangeniusEntityState !== 'unavailable' && cleangeniusEntityState !== 'unknown';
  const isCleanGenius = isValidEntityState
    ? cleangeniusEntityState !== 'off'
    : cleangeniusAttrState !== CLEANGENIUS_STATE.OFF;

  const cleangenius = cleangeniusAttrState;
  const cleaningMode = getAttr(entity.attributes.cleaning_mode, DEFAULTS.CLEANING_MODE);
  const cleangeniusMode = getAttr(entity.attributes.cleangenius_mode, DEFAULTS.CLEANGENIUS_MODE);
  const suctionLevel = getAttr(entity.attributes.suction_level, DEFAULTS.SUCTION_LEVEL);
  const wetnessLevel = getAttr(entity.attributes.wetness_level, DEFAULTS.WETNESS_LEVEL);
  const cleaningRoute = getAttr(entity.attributes.cleaning_route, DEFAULTS.CLEANING_ROUTE);
  const maxSuctionPower = getAttr(entity.attributes.max_suction_power, DEFAULTS.MAX_SUCTION_POWER);
  const selfCleanArea = getAttr(entity.attributes.self_clean_area, DEFAULTS.SELF_CLEAN_AREA);
  const selfCleanFrequency = getAttr(entity.attributes.self_clean_frequency, DEFAULTS.SELF_CLEAN_FREQUENCY);
  const mopPadHumidity = getAttr(entity.attributes.mop_pad_humidity, DEFAULTS.MOP_PAD_HUMIDITY);

  const baseSelfCleanFrequencyList = getStringArrayAttr('self_clean_frequency_list', []);
  const selfCleanFrequencyList =
    baseSelfCleanFrequencyList.length > 0 ? baseSelfCleanFrequencyList : ['By area', 'By time', 'By room'];

  const selfCleanAreaMin = getAttr(entity.attributes.self_clean_area_min, DEFAULTS.SELF_CLEAN_AREA_MIN);
  const selfCleanAreaMax = getAttr(entity.attributes.self_clean_area_max, DEFAULTS.SELF_CLEAN_AREA_MAX);
  const selfCleanTime = getAttr(entity.attributes.previous_self_clean_time, DEFAULTS.SELF_CLEAN_TIME);
  const selfCleanTimeMin = getAttr(entity.attributes.self_clean_time_min, DEFAULTS.SELF_CLEAN_TIME_MIN);
  const selfCleanTimeMax = getAttr(entity.attributes.self_clean_time_max, DEFAULTS.SELF_CLEAN_TIME_MAX);

  const modeOptions = [
    { value: UI_MODE_TYPE.CLEANGENIUS, label: t('cleaning_mode.clean_genius') },
    { value: UI_MODE_TYPE.CUSTOM, label: t('cleaning_mode.custom') },
  ];

  const baseCleaningModeList = getStringArrayAttr('cleaning_mode_list', []);
  const effectiveCleaningModeList =
    baseCleaningModeList.length > 0
      ? baseCleaningModeList
      : ['Sweeping', 'Mopping', 'Sweeping and mopping', 'Mopping after sweeping'];
  const cleaningModeList = [...effectiveCleaningModeList, CLEANING_MODE.CUSTOMIZE];

  const cleangeniusModeList = getStringArrayAttr('cleangenius_mode_list', ['Vacuum and mop', 'Mop after vacuum']);

  const baseSuctionLevelList = getStringArrayAttr('suction_level_list', []);
  const suctionLevelList =
    baseSuctionLevelList.length > 0 ? baseSuctionLevelList : ['Quiet', 'Standard', 'Strong', 'Turbo'];

  const baseCleaningRouteList = getStringArrayAttr('cleaning_route_list', []);
  const cleaningRouteList =
    baseCleaningRouteList.length > 0 ? baseCleaningRouteList : ['Quick', 'Standard', 'Intensive', 'Deep'];

  const isModeSwitchDisabled = isInCleaningSession || cleangeniusState.unavailable;
  const effectiveIsCleanGenius = hasCleanGenius && isCleanGenius;

  const handleModeSwitch = (value: string) => {
    const isCleanGeniusMode = value === UI_MODE_TYPE.CLEANGENIUS;

    if (isCleanGeniusMode && isCustomizedCleaning) {
      hass.callService('switch', 'turn_off', { entity_id: customizedCleaningSwitch });
    }

    setSwitch(entityIds.customMoppingMode, !isCleanGeniusMode);

    const state = isCleanGeniusMode ? CLEANGENIUS_STATE.ROUTINE_CLEANING : CLEANGENIUS_STATE.OFF;
    setSelectOption(entityIds.cleangenius, convertCleanGeniusStateToService(state as CleanGeniusState));
  };

  const handleCleaningModeSelect = (entityId: string, value: string) => {
    if (value === CLEANING_MODE.CUSTOMIZE) {
      logger.debug('CleaningModeModal', 'Enabling customized cleaning');
      hass.callService('switch', 'turn_on', { entity_id: customizedCleaningSwitch });
      return;
    }

    if (isCustomizedCleaning) {
      logger.debug('CleaningModeModal', 'Disabling customized cleaning');
      hass.callService('switch', 'turn_off', { entity_id: customizedCleaningSwitch });
      setTimeout(() => setSelectOption(entityId, value), 300);
    } else {
      setSelectOption(entityId, value);
    }
  };

  const showCustomizeMode = !effectiveIsCleanGenius && isCustomizedCleaning;

  return (
    <Modal opened={opened} onClose={onClose}>
      <div className="cleaning-mode-modal">
        {hasCleanGenius && (
          <div className="cleaning-mode-modal__header">
            <SegmentedControl
              value={effectiveIsCleanGenius ? UI_MODE_TYPE.CLEANGENIUS : UI_MODE_TYPE.CUSTOM}
              onChange={handleModeSwitch}
              options={modeOptions}
              disabled={isModeSwitchDisabled}
            />
          </div>
        )}

        <div className="cleaning-mode-modal__content-wrapper">
          {effectiveIsCleanGenius ? (
            <CleanGeniusMode
              cleangeniusMode={cleangeniusMode}
              cleangeniusModeList={cleangeniusModeList}
              cleangenius={cleangenius}
              baseEntityId={baseEntityId}
            />
          ) : (
            <>
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
                onCleaningModeSelect={handleCleaningModeSelect}
                showOnlyCleaningModeSelector={showCustomizeMode}
              />

              {showCustomizeMode && <CustomizeMode baseEntityId={baseEntityId} />}
            </>
          )}
        </div>
      </div>
    </Modal>
  );
}
