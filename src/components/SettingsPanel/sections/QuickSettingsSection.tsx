import { useCallback } from 'react';
import { Toggle } from '../../common';
import { useTranslation } from '../../../hooks';
import { isBoolean, isNumber, isObject } from '../../../utils';
import type { Hass, HassEntity } from '../../../types/homeassistant';
import './QuickSettingsSection.scss';

interface QuickSettingsSectionProps {
  hass: Hass;
  entity: HassEntity;
}

interface QuickSetting {
  key: string;
  labelKey: string;
  descriptionKey: string;
  attributeKey: string;
  switchEntitySuffix: string;
}

const QUICK_SETTINGS: QuickSetting[] = [
  {
    key: 'child_lock',
    labelKey: 'settings.quick_settings.child_lock',
    descriptionKey: 'settings.quick_settings.child_lock_desc',
    attributeKey: 'child_lock',
    switchEntitySuffix: 'child_lock',
  },
  {
    key: 'carpet_boost',
    labelKey: 'settings.quick_settings.carpet_boost',
    descriptionKey: 'settings.quick_settings.carpet_boost_desc',
    attributeKey: 'carpet_boost',
    switchEntitySuffix: 'carpet_boost',
  },
  {
    key: 'obstacle_avoidance',
    labelKey: 'settings.quick_settings.obstacle_avoidance',
    descriptionKey: 'settings.quick_settings.obstacle_avoidance_desc',
    attributeKey: 'obstacle_avoidance',
    switchEntitySuffix: 'obstacle_avoidance',
  },
  {
    key: 'auto_dust_collecting',
    labelKey: 'settings.quick_settings.auto_dust_collecting',
    descriptionKey: 'settings.quick_settings.auto_dust_collecting_desc',
    attributeKey: 'auto_dust_collecting',
    switchEntitySuffix: 'auto_dust_collecting',
  },
  {
    key: 'auto_drying',
    labelKey: 'settings.quick_settings.auto_drying',
    descriptionKey: 'settings.quick_settings.auto_drying_desc',
    attributeKey: 'auto_drying',
    switchEntitySuffix: 'auto_drying',
  },
];

export function QuickSettingsSection({ hass, entity }: QuickSettingsSectionProps) {
  const { t } = useTranslation();
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

  const isEnabled = (key: string): boolean => {
    const value = attributes[key];
    // Handle various boolean representations
    if (isBoolean(value)) return value;
    if (isNumber(value)) return value > 0;
    if (isObject(value)) {
      // DND is an object with enabled property
      return (value as { enabled?: boolean }).enabled ?? false;
    }
    return false;
  };

  return (
    <div className="quick-settings-section">
      {QUICK_SETTINGS.map((setting) => (
        <div key={setting.key} className="quick-settings-section__item">
          <div className="quick-settings-section__info">
            <span className="quick-settings-section__label">{t(setting.labelKey)}</span>
            <span className="quick-settings-section__description">{t(setting.descriptionKey)}</span>
          </div>
          <Toggle
            checked={isEnabled(setting.attributeKey)}
            onChange={(checked) => handleToggle(setting.switchEntitySuffix, checked)}
          />
        </div>
      ))}
    </div>
  );
}
