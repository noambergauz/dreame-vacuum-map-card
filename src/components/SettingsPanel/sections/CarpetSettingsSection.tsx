import { useCallback } from 'react';
import { Toggle } from '@/components/common';
import { useTranslation } from '@/hooks';
import { useEntity, useHass } from '@/contexts';
import { getAttr, isBoolean, isNumber, isString } from '@/utils';
import './CarpetSettingsSection.scss';

interface CarpetToggle {
  key: string;
  labelKey: string;
  descriptionKey: string;
  attributeKey: string;
  switchEntitySuffix: string;
}

const CARPET_TOGGLES: CarpetToggle[] = [
  {
    key: 'carpet_boost',
    labelKey: 'settings.carpet.carpet_boost',
    descriptionKey: 'settings.carpet.carpet_boost_desc',
    attributeKey: 'carpet_boost',
    switchEntitySuffix: 'carpet_boost',
  },
  {
    key: 'carpet_recognition',
    labelKey: 'settings.carpet.carpet_recognition',
    descriptionKey: 'settings.carpet.carpet_recognition_desc',
    attributeKey: 'carpet_recognition',
    switchEntitySuffix: 'carpet_recognition',
  },
  {
    key: 'carpet_avoidance',
    labelKey: 'settings.carpet.carpet_avoidance',
    descriptionKey: 'settings.carpet.carpet_avoidance_desc',
    attributeKey: 'carpet_avoidance',
    switchEntitySuffix: 'carpet_avoidance',
  },
];

const CARPET_SENSITIVITY_OPTIONS = ['low', 'medium', 'high'] as const;

export function CarpetSettingsSection() {
  const { t } = useTranslation();
  const entity = useEntity();
  const hass = useHass();
  const attributes = entity.attributes;
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

  const isEnabled = (key: string): boolean => {
    const value = attributes[key];
    if (isBoolean(value)) return value;
    if (isNumber(value)) return value > 0;
    return false;
  };

  const currentSensitivity = getAttr(attributes.carpet_sensitivity, 'medium');
  const normalizedSensitivity = isString(currentSensitivity) ? currentSensitivity.toLowerCase() : 'medium';

  return (
    <div className="carpet-settings-section">
      {/* Toggle switches */}
      {CARPET_TOGGLES.map((setting) => (
        <div key={setting.key} className="carpet-settings-section__item">
          <div className="carpet-settings-section__info">
            <span className="carpet-settings-section__label">{t(setting.labelKey)}</span>
            <span className="carpet-settings-section__description">{t(setting.descriptionKey)}</span>
          </div>
          <Toggle
            checked={isEnabled(setting.attributeKey)}
            onChange={(checked) => handleToggle(setting.switchEntitySuffix, checked)}
          />
        </div>
      ))}

      {/* Carpet sensitivity select */}
      <div className="carpet-settings-section__item carpet-settings-section__item--select">
        <div className="carpet-settings-section__info">
          <span className="carpet-settings-section__label">{t('settings.carpet.sensitivity')}</span>
          <span className="carpet-settings-section__description">{t('settings.carpet.sensitivity_desc')}</span>
        </div>
        <select
          className="carpet-settings-section__select"
          value={normalizedSensitivity}
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
