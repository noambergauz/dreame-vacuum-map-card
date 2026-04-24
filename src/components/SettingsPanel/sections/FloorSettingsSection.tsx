import { useCallback } from 'react';
import { Toggle } from '@/components/common';
import { useTranslation, getSwitchState, getSelectState } from '@/hooks';
import { useEntity, useHass } from '@/contexts';
import './FloorSettingsSection.scss';

interface FloorToggle {
  key: string;
  labelKey: string;
  descriptionKey: string;
  switchEntitySuffix: string;
}

const FLOOR_TOGGLES: FloorToggle[] = [
  {
    key: 'obstacle_avoidance',
    labelKey: 'settings.floor.obstacle_avoidance',
    descriptionKey: 'settings.floor.obstacle_avoidance_desc',
    switchEntitySuffix: 'obstacle_avoidance',
  },
  {
    key: 'collision_avoidance',
    labelKey: 'settings.floor.collision_avoidance',
    descriptionKey: 'settings.floor.collision_avoidance_desc',
    switchEntitySuffix: 'collision_avoidance',
  },
  {
    key: 'auto_mount_mop',
    labelKey: 'settings.floor.auto_mount_mop',
    descriptionKey: 'settings.floor.auto_mount_mop_desc',
    switchEntitySuffix: 'auto_mount_mop',
  },
  {
    key: 'stain_avoidance',
    labelKey: 'settings.floor.stain_avoidance',
    descriptionKey: 'settings.floor.stain_avoidance_desc',
    switchEntitySuffix: 'stain_avoidance',
  },
  {
    key: 'floor_direction_cleaning',
    labelKey: 'settings.floor.floor_direction_cleaning',
    descriptionKey: 'settings.floor.floor_direction_cleaning_desc',
    switchEntitySuffix: 'floor_direction_cleaning',
  },
  {
    key: 'large_particles_boost',
    labelKey: 'settings.floor.large_particles_boost',
    descriptionKey: 'settings.floor.large_particles_boost_desc',
    switchEntitySuffix: 'large_particles_boost',
  },
];

const AUTO_RECLEANING_OPTIONS = ['off', 'in_deep_mode', 'in_all_modes'] as const;

export function FloorSettingsSection() {
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

  const handleRecleaningChange = useCallback(
    (value: string) => {
      const selectEntityId = `select.${entityName}_auto_recleaning`;
      hass.callService('select', 'select_option', {
        entity_id: selectEntityId,
        option: value,
      });
    },
    [hass, entityName]
  );

  // Get auto recleaning select entity state
  const recleaningState = getSelectState(hass, entityName, 'auto_recleaning');
  const currentRecleaning = recleaningState.state?.toLowerCase() ?? 'off';

  return (
    <div className="floor-settings-section">
      {/* Toggle switches */}
      {FLOOR_TOGGLES.map((setting) => {
        const switchState = getSwitchState(hass, entityName, setting.switchEntitySuffix);
        if (switchState.disabled) return null;
        return (
          <div key={setting.key} className="floor-settings-section__item">
            <div className="floor-settings-section__info">
              <span className="floor-settings-section__label">{t(setting.labelKey)}</span>
              <span className="floor-settings-section__description">{t(setting.descriptionKey)}</span>
            </div>
            <Toggle
              checked={switchState.isOn}
              disabled={switchState.unavailable}
              onChange={(checked) => handleToggle(setting.switchEntitySuffix, checked)}
            />
          </div>
        );
      })}

      {/* Auto recleaning select */}
      {!recleaningState.disabled && (
        <div className="floor-settings-section__item floor-settings-section__item--select">
          <div className="floor-settings-section__info">
            <span className="floor-settings-section__label">{t('settings.floor.auto_recleaning')}</span>
            <span className="floor-settings-section__description">{t('settings.floor.auto_recleaning_desc')}</span>
          </div>
          <select
            className="floor-settings-section__select"
            value={currentRecleaning}
            disabled={recleaningState.unavailable}
            onChange={(e) => handleRecleaningChange(e.target.value)}
          >
            {AUTO_RECLEANING_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {t(`settings.floor.recleaning_${option}`)}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
