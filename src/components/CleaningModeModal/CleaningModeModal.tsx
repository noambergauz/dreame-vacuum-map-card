import { Modal, SegmentedControl } from '@/components/common';
import { CleanGeniusMode } from './CleanGeniusMode';
import { CustomMode } from './CustomMode';
import { CustomizeMode } from './CustomizeMode';
import { useHomeAssistantServices, useVacuumEntityIds, getEntityState, readSelectEntity } from '@/hooks';
import { useTranslation } from '@/hooks/useTranslation';
import { useEntity, useHass, useMachineState } from '@/contexts';
import { findSelectOption, getAttr, selectOptionKey } from '@/utils';
import { CUSTOMIZE_MODE_OPTION, UI_MODE_TYPE, DEFAULTS } from '@/constants';
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
  const { setSelectOption } = useHomeAssistantServices(hass);
  const entityIds = useVacuumEntityIds();
  const hasCleanGenius = Boolean(entityIds.cleangenius);
  const isInCleaningSession = phase === 'cleaning' || phase === 'paused';
  const customizedCleaningSwitch = entityIds.customizedCleaning;
  const cleangeniusState = getEntityState(hass, entityIds.cleangenius);
  const selectEntity = (entityId: string | undefined) => readSelectEntity(entityId ? hass.states[entityId] : undefined);
  const cleaningModeSelect = selectEntity(entityIds.cleaningMode);
  const cleangeniusModeSelect = selectEntity(entityIds.cleangeniusMode);
  const cleangeniusSelect = selectEntity(entityIds.cleangenius);
  const suctionLevelSelect = selectEntity(entityIds.suctionLevel);
  const waterVolumeSelect = selectEntity(entityIds.waterVolume);
  const mopPadHumiditySelect = selectEntity(entityIds.mopPadHumidity);
  const cleaningRouteSelect = selectEntity(entityIds.cleaningRoute);
  const selfCleanFrequencySelect = selectEntity(entityIds.selfCleanFrequency);

  const cleangeniusEntityState = cleangeniusSelect.value;
  const cleangeniusAttrState = getAttr(entity.attributes.cleangenius, '');
  const isValidEntityState = cleangeniusEntityState !== null;
  const isCleanGenius = isValidEntityState
    ? selectOptionKey(cleangeniusEntityState) !== 'off'
    : Boolean(cleangeniusAttrState) && selectOptionKey(cleangeniusAttrState) !== 'off';

  const cleangenius = cleangeniusSelect.value ?? cleangeniusAttrState;
  const cleaningMode = cleaningModeSelect.value ?? '';
  const cleangeniusMode = cleangeniusModeSelect.value ?? '';
  const suctionLevel = suctionLevelSelect.value ?? '';
  const wetnessLevel = getAttr(entity.attributes.wetness_level, DEFAULTS.WETNESS_LEVEL);
  const waterVolume = waterVolumeSelect.value ?? '';
  const cleaningRoute = cleaningRouteSelect.value ?? '';
  const maxSuctionPower = getAttr(entity.attributes.max_suction_power, DEFAULTS.MAX_SUCTION_POWER);
  const selfCleanArea = getAttr(entity.attributes.self_clean_area, DEFAULTS.SELF_CLEAN_AREA);
  const selfCleanFrequency = selfCleanFrequencySelect.value ?? '';
  const mopPadHumidity = mopPadHumiditySelect.value ?? '';

  const selfCleanAreaMin = getAttr(entity.attributes.self_clean_area_min, DEFAULTS.SELF_CLEAN_AREA_MIN);
  const selfCleanAreaMax = getAttr(entity.attributes.self_clean_area_max, DEFAULTS.SELF_CLEAN_AREA_MAX);
  const selfCleanTime = getAttr(entity.attributes.previous_self_clean_time, DEFAULTS.SELF_CLEAN_TIME);
  const selfCleanTimeMin = getAttr(entity.attributes.self_clean_time_min, DEFAULTS.SELF_CLEAN_TIME_MIN);
  const selfCleanTimeMax = getAttr(entity.attributes.self_clean_time_max, DEFAULTS.SELF_CLEAN_TIME_MAX);

  const modeOptions = [
    { value: UI_MODE_TYPE.CLEANGENIUS, label: t('cleaning_mode.clean_genius') },
    { value: UI_MODE_TYPE.CUSTOM, label: t('cleaning_mode.custom') },
  ];

  const cleaningModeList = [...cleaningModeSelect.options, CUSTOMIZE_MODE_OPTION];

  const isModeSwitchDisabled = isInCleaningSession || cleangeniusState.unavailable;
  const effectiveIsCleanGenius = hasCleanGenius && isCleanGenius;

  const handleModeSwitch = (value: string) => {
    const isCleanGeniusMode = value === UI_MODE_TYPE.CLEANGENIUS;

    if (isCleanGeniusMode && isCustomizedCleaning && customizedCleaningSwitch) {
      hass.callService('switch', 'turn_off', { entity_id: customizedCleaningSwitch });
    }

    if (!entityIds.cleangenius) return;
    const stateKey = isCleanGeniusMode ? 'routine_cleaning' : 'off';
    const state = findSelectOption(cleangeniusSelect.options, stateKey);
    if (state) setSelectOption(entityIds.cleangenius, state);
  };

  const handleCleaningModeSelect = (entityId: string, value: string) => {
    if (value === CUSTOMIZE_MODE_OPTION) {
      if (!customizedCleaningSwitch) return;
      logger.debug('CleaningModeModal', 'Enabling customized cleaning');
      hass.callService('switch', 'turn_on', { entity_id: customizedCleaningSwitch });
      return;
    }

    if (isCustomizedCleaning && customizedCleaningSwitch) {
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
              cleangeniusModeList={cleangeniusModeSelect.options}
              cleangenius={cleangenius}
            />
          ) : (
            <>
              <CustomMode
                cleaningMode={isCustomizedCleaning ? CUSTOMIZE_MODE_OPTION : cleaningMode}
                cleaningModeList={cleaningModeList}
                suctionLevel={suctionLevel}
                suctionLevelList={suctionLevelSelect.options}
                wetnessLevel={wetnessLevel}
                mopPadHumidity={mopPadHumidity}
                mopPadHumidityList={mopPadHumiditySelect.options}
                waterVolume={waterVolume}
                waterVolumeList={waterVolumeSelect.options}
                cleaningRoute={cleaningRoute}
                cleaningRouteList={cleaningRouteSelect.options}
                maxSuctionPower={maxSuctionPower}
                selfCleanArea={selfCleanArea}
                selfCleanFrequency={selfCleanFrequency}
                selfCleanFrequencyList={selfCleanFrequencySelect.options}
                selfCleanAreaMin={selfCleanAreaMin}
                selfCleanAreaMax={selfCleanAreaMax}
                selfCleanTime={selfCleanTime}
                selfCleanTimeMin={selfCleanTimeMin}
                selfCleanTimeMax={selfCleanTimeMax}
                onCleaningModeSelect={handleCleaningModeSelect}
                showOnlyCleaningModeSelector={showCustomizeMode}
              />

              {showCustomizeMode && <CustomizeMode />}
            </>
          )}
        </div>
      </div>
    </Modal>
  );
}
