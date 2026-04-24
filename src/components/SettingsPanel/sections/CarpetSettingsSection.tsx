import { useCallback } from 'react';
import { Toggle } from '@/components/common';
import { useTranslation, getSwitchState, getSelectState } from '@/hooks';
import { useEntity, useHass } from '@/contexts';
import './CarpetSettingsSection.scss';

interface CarpetToggle {
  key: string;
  labelKey: string;
  descriptionKey: string;
  switchEntitySuffix: string;
}

const CARPET_TOGGLES: CarpetToggle[] = [
  {
    key: 'carpet_boost',
    labelKey: 'settings.carpet.carpet_boost',
    descriptionKey: 'settings.carpet.carpet_boost_desc',
    switchEntitySuffix: 'carpet_boost',
  },
  {
    key: 'carpet_recognition',
    labelKey: 'settings.carpet.carpet_recognition',
    descriptionKey: 'settings.carpet.carpet_recognition_desc',
    switchEntitySuffix: 'carpet_recognition',
  },
  {
    key: 'carpet_avoidance',
    labelKey: 'settings.carpet.carpet_avoidance',
    descriptionKey: 'settings.carpet.carpet_avoidance_desc',
    switchEntitySuffix: 'carpet_avoidance',
  },
];

const CARPET_SENSITIVITY_OPTIONS = ['low', 'medium', 'high'] as const;

export function CarpetSettingsSection() {
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

  const handleSensitivityChange = useCallback(
    (value: string) => {
      const selectEntityId = `select.${entityName}_carpet_sensitivity`;
      hass.callService('select', 'select_option', {
        entity_id: selectEntityId,
        option: value,
      });
    },
    [hass, entityName]
  );

  // Get carpet sensitivity select entity state
  const sensitivityState = getSelectState(hass, entityName, 'carpet_sensitivity');
  const currentSensitivity = sensitivityState.state?.toLowerCase() ?? 'medium';

  return (
    <div className="carpet-settings-section">
      {/* Toggle switches */}
      {CARPET_TOGGLES.map((setting) => {
        const switchState = getSwitchState(hass, entityName, setting.switchEntitySuffix);
        return (
          <div key={setting.key} className="carpet-settings-section__item">
            <div className="carpet-settings-section__info">
              <span className="carpet-settings-section__label">{t(setting.labelKey)}</span>
              <span className="carpet-settings-section__description">{t(setting.descriptionKey)}</span>
            </div>
            <Toggle
              checked={switchState.isOn}
              disabled={switchState.disabled}
              onChange={(checked) => handleToggle(setting.switchEntitySuffix, checked)}
            />
          </div>
        );
      })}

      {/* Carpet sensitivity select */}
      <div className="carpet-settings-section__item carpet-settings-section__item--select">
        <div className="carpet-settings-section__info">
          <span className="carpet-settings-section__label">{t('settings.carpet.sensitivity')}</span>
          <span className="carpet-settings-section__description">{t('settings.carpet.sensitivity_desc')}</span>
        </div>
        <select
          className="carpet-settings-section__select"
          value={currentSensitivity}
          disabled={sensitivityState.disabled}
          onChange={(e) => handleSensitivityChange(e.target.value)}
        >
          {CARPET_SENSITIVITY_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {t(`settings.carpet.sensitivity_${option}`)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
