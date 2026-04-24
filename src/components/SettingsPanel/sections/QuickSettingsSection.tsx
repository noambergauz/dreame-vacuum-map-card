import { useCallback } from 'react';
import { Droplets, Wind, Pipette, Sparkles, Waves } from 'lucide-react';
import { Toggle } from '@/components/common';
import { useTranslation, getSwitchState } from '@/hooks';
import { useEntity, useHass } from '@/contexts';
import { STATION_BUTTON_SUFFIX } from '@/constants';
import './QuickSettingsSection.scss';

interface QuickSetting {
  key: string;
  labelKey: string;
  descriptionKey: string;
  switchEntitySuffix: string;
}

interface StationAction {
  key: string;
  labelKey: string;
  descriptionKey: string;
  buttonEntitySuffix: string;
  icon: React.ReactNode;
}

const QUICK_SETTINGS: QuickSetting[] = [
  {
    key: 'child_lock',
    labelKey: 'settings.quick_settings.child_lock',
    descriptionKey: 'settings.quick_settings.child_lock_desc',
    switchEntitySuffix: 'child_lock',
  },
  {
    key: 'dnd',
    labelKey: 'settings.quick_settings.dnd',
    descriptionKey: 'settings.quick_settings.dnd_desc',
    switchEntitySuffix: 'dnd',
  },
];

const STATION_ACTIONS: StationAction[] = [
  {
    key: 'self_clean',
    labelKey: 'settings.station_controls.self_clean',
    descriptionKey: 'settings.station_controls.self_clean_desc',
    buttonEntitySuffix: STATION_BUTTON_SUFFIX.SELF_CLEAN,
    icon: <Droplets size={18} />,
  },
  {
    key: 'manual_drying',
    labelKey: 'settings.station_controls.manual_drying',
    descriptionKey: 'settings.station_controls.manual_drying_desc',
    buttonEntitySuffix: STATION_BUTTON_SUFFIX.MANUAL_DRYING,
    icon: <Wind size={18} />,
  },
  {
    key: 'water_tank_draining',
    labelKey: 'settings.station_controls.water_tank_draining',
    descriptionKey: 'settings.station_controls.water_tank_draining_desc',
    buttonEntitySuffix: STATION_BUTTON_SUFFIX.WATER_TANK_DRAINING,
    icon: <Pipette size={18} />,
  },
  {
    key: 'base_station_cleaning',
    labelKey: 'settings.station_controls.base_station_cleaning',
    descriptionKey: 'settings.station_controls.base_station_cleaning_desc',
    buttonEntitySuffix: STATION_BUTTON_SUFFIX.BASE_STATION_CLEANING,
    icon: <Sparkles size={18} />,
  },
  {
    key: 'empty_water_tank',
    labelKey: 'settings.station_controls.empty_water_tank',
    descriptionKey: 'settings.station_controls.empty_water_tank_desc',
    buttonEntitySuffix: STATION_BUTTON_SUFFIX.EMPTY_WATER_TANK,
    icon: <Waves size={18} />,
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

  const isActionAvailable = (suffix: string): boolean => {
    const buttonEntityId = `button.${entityName}_${suffix}`;
    const buttonEntity = hass.states[buttonEntityId];
    return buttonEntity !== undefined && buttonEntity.state !== 'unavailable';
  };

  const handleAction = useCallback(
    (suffix: string) => {
      const buttonEntityId = `button.${entityName}_${suffix}`;
      hass.callService('button', 'press', {
        entity_id: buttonEntityId,
      });
    },
    [hass, entityName]
  );

  // Filter to only show available actions
  const availableActions = STATION_ACTIONS.filter((action) => isActionAvailable(action.buttonEntitySuffix));

  return (
    <div className="quick-settings-section">
      {/* Toggle switches */}
      {QUICK_SETTINGS.map((setting) => {
        const switchState = getSwitchState(hass, entityName, setting.switchEntitySuffix);
        if (switchState.disabled) return null;
        return (
          <div key={setting.key} className="quick-settings-section__item">
            <div className="quick-settings-section__info">
              <span className="quick-settings-section__label">{t(setting.labelKey)}</span>
              <span className="quick-settings-section__description">{t(setting.descriptionKey)}</span>
            </div>
            <Toggle
              checked={switchState.isOn}
              disabled={switchState.unavailable}
              onChange={(checked) => handleToggle(setting.switchEntitySuffix, checked)}
            />
          </div>
        );
      })}

      {/* Station action buttons */}
      {availableActions.length > 0 && (
        <div className="quick-settings-section__actions">
          <span className="quick-settings-section__actions-label">{t('settings.station_controls.title')}</span>
          <div className="quick-settings-section__actions-grid">
            {availableActions.map((action) => (
              <button
                key={action.key}
                className="quick-settings-section__action-button"
                onClick={() => handleAction(action.buttonEntitySuffix)}
                type="button"
                title={t(action.descriptionKey)}
              >
                <span className="quick-settings-section__action-icon">{action.icon}</span>
                <span className="quick-settings-section__action-label">{t(action.labelKey)}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
