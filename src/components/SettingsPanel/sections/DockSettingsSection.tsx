import { useCallback } from 'react';
import { Toggle, SegmentedControl } from '@/components/common';
import { useTranslation, getSwitchState, getSelectState, getButtonState } from '@/hooks';
import { useEntity, useHass } from '@/contexts';
import './DockSettingsSection.scss';

export function DockSettingsSection() {
  const { t } = useTranslation();
  const entity = useEntity();
  const hass = useHass();
  const entityName = entity.entity_id.split('.')[1] ?? '';

  const handleToggle = useCallback(
    (switchEntitySuffix: string, newValue: boolean) => {
      const switchEntityId = `switch.${entityName}_${switchEntitySuffix}`;
      hass.callService('switch', newValue ? 'turn_on' : 'turn_off', {
        entity_id: switchEntityId,
      });
    },
    [hass, entityName]
  );

  const handleSelectChange = useCallback(
    (selectEntitySuffix: string, value: string) => {
      const selectEntityId = `select.${entityName}_${selectEntitySuffix}`;
      hass.callService('select', 'select_option', {
        entity_id: selectEntityId,
        option: value,
      });
    },
    [hass, entityName]
  );

  const handleButtonPress = useCallback(
    (buttonEntitySuffix: string) => {
      const buttonEntityId = `button.${entityName}_${buttonEntitySuffix}`;
      hass.callService('button', 'press', {
        entity_id: buttonEntityId,
      });
    },
    [hass, entityName]
  );

  // Get switch states
  const selfCleanState = getSwitchState(hass, entityName, 'self_clean');
  const autoAddDetergentState = getSwitchState(hass, entityName, 'auto_add_detergent');
  const smartMopWashingState = getSwitchState(hass, entityName, 'smart_mop_washing');
  const autoDryingState = getSwitchState(hass, entityName, 'auto_drying');
  const offPeakChargingState = getSwitchState(hass, entityName, 'off_peak_charging');

  // Get select states
  const autoEmptyModeState = getSelectState(hass, entityName, 'auto_empty_mode');
  const washingModeState = getSelectState(hass, entityName, 'washing_mode');
  const waterTemperatureState = getSelectState(hass, entityName, 'water_temperature');
  const dryingTimeState = getSelectState(hass, entityName, 'drying_time');
  const autoRewashingState = getSelectState(hass, entityName, 'auto_rewashing');

  // Get button states
  const baseStationCleaningState = getButtonState(hass, entityName, 'base_station_cleaning');
  const baseStationSelfRepairState = getButtonState(hass, entityName, 'base_station_self_repair');

  // Get options from entities with fallbacks
  const autoEmptyOptions = (hass.states[`select.${entityName}_auto_empty_mode`]?.attributes?.options as string[]) ?? [
    'off',
    'standard',
    'high_frequency',
    'low_frequency',
  ];
  const washingModeOptions = (hass.states[`select.${entityName}_washing_mode`]?.attributes?.options as string[]) ?? [
    'light',
    'standard',
    'deep',
  ];
  const waterTempOptions = (hass.states[`select.${entityName}_water_temperature`]?.attributes?.options as string[]) ?? [
    'normal',
    'mild',
    'warm',
    'hot',
  ];
  const dryingTimeOptions = (hass.states[`select.${entityName}_drying_time`]?.attributes?.options as string[]) ?? [
    '2h',
    '3h',
    '4h',
  ];
  const autoRewashingOptions = (hass.states[`select.${entityName}_auto_rewashing`]?.attributes
    ?.options as string[]) ?? ['off', 'in_deep_mode', 'in_all_modes'];

  // Build segmented control options for drying time
  const dryingTimeSegmentOptions = dryingTimeOptions.map((option) => ({
    value: option.toLowerCase(),
    label: option,
  }));

  return (
    <div className="dock-settings-section">
      {/* Self Clean (auto mop washing after cleaning) */}
      {!selfCleanState.disabled && (
        <div className="dock-settings-section__item">
          <div className="dock-settings-section__info">
            <span className="dock-settings-section__label">{t('settings.dock.self_clean')}</span>
            <span className="dock-settings-section__description">{t('settings.dock.self_clean_desc')}</span>
          </div>
          <Toggle
            checked={selfCleanState.isOn}
            disabled={selfCleanState.unavailable}
            onChange={(checked) => handleToggle('self_clean', checked)}
          />
        </div>
      )}

      {/* Auto Empty Mode */}
      {!autoEmptyModeState.disabled && (
        <div className="dock-settings-section__item dock-settings-section__item--select">
          <div className="dock-settings-section__info">
            <span className="dock-settings-section__label">{t('settings.dock.auto_empty_mode')}</span>
            <span className="dock-settings-section__description">{t('settings.dock.auto_empty_mode_desc')}</span>
          </div>
          <select
            className="dock-settings-section__select"
            value={autoEmptyModeState.state?.toLowerCase() ?? 'standard'}
            disabled={autoEmptyModeState.unavailable}
            onChange={(e) => handleSelectChange('auto_empty_mode', e.target.value)}
          >
            {autoEmptyOptions.map((option) => (
              <option key={option} value={option.toLowerCase()}>
                {t(`settings.dock.empty_${option.toLowerCase()}`)}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Auto Add Detergent */}
      {!autoAddDetergentState.disabled && (
        <div className="dock-settings-section__item">
          <div className="dock-settings-section__info">
            <span className="dock-settings-section__label">{t('settings.dock.auto_detergent')}</span>
            <span className="dock-settings-section__description">{t('settings.dock.auto_detergent_desc')}</span>
          </div>
          <Toggle
            checked={autoAddDetergentState.isOn}
            disabled={autoAddDetergentState.unavailable}
            onChange={(checked) => handleToggle('auto_add_detergent', checked)}
          />
        </div>
      )}

      {/* Smart Mop Washing */}
      {!smartMopWashingState.disabled && (
        <div className="dock-settings-section__item">
          <div className="dock-settings-section__info">
            <span className="dock-settings-section__label">{t('settings.dock.smart_washing')}</span>
            <span className="dock-settings-section__description">{t('settings.dock.smart_washing_desc')}</span>
          </div>
          <Toggle
            checked={smartMopWashingState.isOn}
            disabled={smartMopWashingState.unavailable}
            onChange={(checked) => handleToggle('smart_mop_washing', checked)}
          />
        </div>
      )}

      {/* Washing Mode */}
      {!washingModeState.disabled && (
        <div className="dock-settings-section__item dock-settings-section__item--select">
          <div className="dock-settings-section__info">
            <span className="dock-settings-section__label">{t('settings.dock.washing_mode')}</span>
            <span className="dock-settings-section__description">{t('settings.dock.washing_mode_desc')}</span>
          </div>
          <select
            className="dock-settings-section__select"
            value={washingModeState.state?.toLowerCase() ?? 'standard'}
            disabled={washingModeState.unavailable}
            onChange={(e) => handleSelectChange('washing_mode', e.target.value)}
          >
            {washingModeOptions.map((option) => (
              <option key={option} value={option.toLowerCase()}>
                {t(`settings.dock.washing_${option.toLowerCase()}`)}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Water Temperature */}
      {!waterTemperatureState.disabled && (
        <div className="dock-settings-section__item dock-settings-section__item--select">
          <div className="dock-settings-section__info">
            <span className="dock-settings-section__label">{t('settings.dock.water_temperature')}</span>
            <span className="dock-settings-section__description">{t('settings.dock.water_temperature_desc')}</span>
          </div>
          <select
            className="dock-settings-section__select"
            value={waterTemperatureState.state?.toLowerCase() ?? 'normal'}
            disabled={waterTemperatureState.unavailable}
            onChange={(e) => handleSelectChange('water_temperature', e.target.value)}
          >
            {waterTempOptions.map((option) => (
              <option key={option} value={option.toLowerCase()}>
                {t(`settings.dock.temp_${option.toLowerCase()}`)}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Auto Drying */}
      {!autoDryingState.disabled && (
        <div className="dock-settings-section__item">
          <div className="dock-settings-section__info">
            <span className="dock-settings-section__label">{t('settings.dock.auto_drying')}</span>
            <span className="dock-settings-section__description">{t('settings.dock.auto_drying_desc')}</span>
          </div>
          <Toggle
            checked={autoDryingState.isOn}
            disabled={autoDryingState.unavailable}
            onChange={(checked) => handleToggle('auto_drying', checked)}
          />
        </div>
      )}

      {/* Drying Time - Segmented Control */}
      {!dryingTimeState.disabled && (
        <div className="dock-settings-section__item dock-settings-section__item--segmented">
          <div className="dock-settings-section__info">
            <span className="dock-settings-section__label">{t('settings.dock.drying_time')}</span>
            <span className="dock-settings-section__description">{t('settings.dock.drying_time_desc')}</span>
          </div>
          <SegmentedControl
            options={dryingTimeSegmentOptions}
            value={dryingTimeState.state?.toLowerCase() ?? '2h'}
            onChange={(value) => handleSelectChange('drying_time', value)}
            disabled={dryingTimeState.unavailable}
          />
        </div>
      )}

      {/* Auto Rewashing */}
      {!autoRewashingState.disabled && (
        <div className="dock-settings-section__item dock-settings-section__item--select">
          <div className="dock-settings-section__info">
            <span className="dock-settings-section__label">{t('settings.dock.auto_rewashing')}</span>
            <span className="dock-settings-section__description">{t('settings.dock.auto_rewashing_desc')}</span>
          </div>
          <select
            className="dock-settings-section__select"
            value={autoRewashingState.state?.toLowerCase() ?? 'off'}
            disabled={autoRewashingState.unavailable}
            onChange={(e) => handleSelectChange('auto_rewashing', e.target.value)}
          >
            {autoRewashingOptions.map((option) => (
              <option key={option} value={option.toLowerCase()}>
                {t(`settings.dock.rewashing_${option.toLowerCase()}`)}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Off-Peak Charging */}
      {!offPeakChargingState.disabled && (
        <div className="dock-settings-section__item">
          <div className="dock-settings-section__info">
            <span className="dock-settings-section__label">{t('settings.dock.off_peak_charging')}</span>
            <span className="dock-settings-section__description">{t('settings.dock.off_peak_charging_desc')}</span>
          </div>
          <Toggle
            checked={offPeakChargingState.isOn}
            disabled={offPeakChargingState.unavailable}
            onChange={(checked) => handleToggle('off_peak_charging', checked)}
          />
        </div>
      )}

      {/* Base Station Cleaning Button */}
      {!baseStationCleaningState.disabled && (
        <div className="dock-settings-section__item">
          <div className="dock-settings-section__info">
            <span className="dock-settings-section__label">{t('settings.dock.station_cleaning')}</span>
            <span className="dock-settings-section__description">{t('settings.dock.station_cleaning_desc')}</span>
          </div>
          <button
            className="dock-settings-section__button"
            disabled={baseStationCleaningState.unavailable}
            onClick={() => handleButtonPress('base_station_cleaning')}
          >
            {t('settings.dock.clean_now')}
          </button>
        </div>
      )}

      {/* Base Station Self Repair Button */}
      {!baseStationSelfRepairState.disabled && (
        <div className="dock-settings-section__item">
          <div className="dock-settings-section__info">
            <span className="dock-settings-section__label">{t('settings.dock.self_repair')}</span>
            <span className="dock-settings-section__description">{t('settings.dock.self_repair_desc')}</span>
          </div>
          <button
            className="dock-settings-section__button"
            disabled={baseStationSelfRepairState.unavailable}
            onClick={() => handleButtonPress('base_station_self_repair')}
          >
            {t('settings.dock.repair_now')}
          </button>
        </div>
      )}
    </div>
  );
}
