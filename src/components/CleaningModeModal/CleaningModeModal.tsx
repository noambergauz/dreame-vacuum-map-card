import { useState } from 'react';
import { Modal, SegmentedControl } from '../common';
import { CleanGeniusMode } from './CleanGeniusMode';
import { CustomMode } from './CustomMode';
import type { Hass, HassEntity } from '../../types/homeassistant';
import type { CleanGeniusState } from '../../types/vacuum';
import { useHomeAssistantServices, useVacuumEntityIds } from '../../hooks';
import { useTranslation } from '../../hooks/useTranslation';
import type { SupportedLanguage } from '../../i18n/locales';
import { convertCleanGeniusStateToService, extractBaseEntityId, getAttr } from '../../utils';
import { CLEANGENIUS_STATE, UI_MODE_TYPE, DEFAULTS } from '../../constants';
import './CleaningModeModal.scss';

interface CleaningModeModalProps {
  opened: boolean;
  onClose: () => void;
  entity: HassEntity;
  hass: Hass;
  language?: SupportedLanguage;
}

export function CleaningModeModal({ opened, onClose, entity, hass, language }: CleaningModeModalProps) {
  const { t } = useTranslation(language);
  const baseEntityId = extractBaseEntityId(entity.entity_id);
  const { setSelectOption, setSwitch } = useHomeAssistantServices(hass);
  const entityIds = useVacuumEntityIds(baseEntityId);

  // Helper function for type-safe array attribute access
  const getStringArrayAttr = (key: string, defaultValue: string[]): string[] => {
    const value = entity.attributes[key];
    return Array.isArray(value) ? (value as string[]) : defaultValue;
  };

  const cleangenius = getAttr(entity.attributes.cleangenius, CLEANGENIUS_STATE.OFF);
  const [isCleanGenius, setIsCleanGenius] = useState(cleangenius !== CLEANGENIUS_STATE.OFF);

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

  const cleaningModeList = getStringArrayAttr('cleaning_mode_list', [
    'Sweeping',
    'Mopping',
    'Sweeping and mopping',
    'Mopping after sweeping',
  ]);

  const cleangeniusModeList = getStringArrayAttr('cleangenius_mode_list', ['Vacuum and mop', 'Mop after vacuum']);

  const suctionLevelList = getStringArrayAttr('suction_level_list', ['Quiet', 'Standard', 'Strong', 'Turbo']);
  const cleaningRouteList = getStringArrayAttr('cleaning_route_list', ['Quick', 'Standard', 'Intensive', 'Deep']);

  const handleModeSwitch = (value: string) => {
    const isCleanGeniusMode = value === UI_MODE_TYPE.CLEANGENIUS;
    setIsCleanGenius(isCleanGeniusMode);

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

  return (
    <Modal opened={opened} onClose={onClose}>
      <div className="cleaning-mode-modal">
        {/* Mode Toggle */}
        <div className="cleaning-mode-modal__header">
          <SegmentedControl
            value={isCleanGenius ? UI_MODE_TYPE.CLEANGENIUS : UI_MODE_TYPE.CUSTOM}
            onChange={handleModeSwitch}
            options={modeOptions}
          />
        </div>

        <div className="cleaning-mode-modal__content-wrapper">
          {isCleanGenius ? (
            <CleanGeniusMode
              cleangeniusMode={cleangeniusMode}
              cleangeniusModeList={cleangeniusModeList}
              cleangenius={cleangenius}
              baseEntityId={baseEntityId}
              hass={hass}
              language={language}
            />
          ) : (
            <CustomMode
              cleaningMode={cleaningMode}
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
              hass={hass}
              language={language}
            />
          )}
        </div>
      </div>
    </Modal>
  );
}
