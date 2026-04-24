import { useCallback } from 'react';
import { Toggle } from '@/components/common';
import { useTranslation, getSwitchState } from '@/hooks';
import { useEntity, useHass } from '@/contexts';
import './QuickSettingsSection.scss';

interface QuickSetting {
  key: string;
  labelKey: string;
  descriptionKey: string;
  switchEntitySuffix: string;
}

const QUICK_SETTINGS: QuickSetting[] = [
  {
    key: 'child_lock',
    labelKey: 'settings.quick_settings.child_lock',
    descriptionKey: 'settings.quick_settings.child_lock_desc',
    switchEntitySuffix: 'child_lock',
  },
  {
    key: 'carpet_boost',
    labelKey: 'settings.quick_settings.carpet_boost',
    descriptionKey: 'settings.quick_settings.carpet_boost_desc',
    switchEntitySuffix: 'carpet_boost',
  },
  {
    key: 'obstacle_avoidance',
    labelKey: 'settings.quick_settings.obstacle_avoidance',
    descriptionKey: 'settings.quick_settings.obstacle_avoidance_desc',
    switchEntitySuffix: 'obstacle_avoidance',
  },
  {
    key: 'auto_dust_collecting',
    labelKey: 'settings.quick_settings.auto_dust_collecting',
    descriptionKey: 'settings.quick_settings.auto_dust_collecting_desc',
    switchEntitySuffix: 'auto_dust_collecting',
  },
  {
    key: 'auto_drying',
    labelKey: 'settings.quick_settings.auto_drying',
    descriptionKey: 'settings.quick_settings.auto_drying_desc',
    switchEntitySuffix: 'auto_drying',
  },
];

export function QuickSettingsSection() {
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

  return (
    <div className="quick-settings-section">
      {QUICK_SETTINGS.map((setting) => {
        const switchState = getSwitchState(hass, entityName, setting.switchEntitySuffix);
        return (
          <div key={setting.key} className="quick-settings-section__item">
            <div className="quick-settings-section__info">
              <span className="quick-settings-section__label">{t(setting.labelKey)}</span>
              <span className="quick-settings-section__description">{t(setting.descriptionKey)}</span>
            </div>
            <Toggle
              checked={switchState.isOn}
              disabled={switchState.disabled}
              onChange={(checked) => handleToggle(setting.switchEntitySuffix, checked)}
            />
          </div>
        );
      })}
    </div>
  );
}
