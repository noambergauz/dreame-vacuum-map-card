import { useCallback } from 'react';
import { useTranslation } from '../../../hooks';
import { getAttr } from '../../../utils';
import type { Hass, HassEntity } from '../../../types/homeassistant';
import './ConsumablesSection.scss';

interface ConsumablesSectionProps {
  hass: Hass;
  entity: HassEntity;
}

interface ConsumableItem {
  key: string;
  labelKey: string;
  percentKey: string;
  hoursKey: string;
  resetCommand: string;
}

const CONSUMABLES: ConsumableItem[] = [
  {
    key: 'main_brush',
    labelKey: 'settings.consumables.main_brush',
    percentKey: 'main_brush_left',
    hoursKey: 'main_brush_time_left',
    resetCommand: 'reset_main_brush',
  },
  {
    key: 'side_brush',
    labelKey: 'settings.consumables.side_brush',
    percentKey: 'side_brush_left',
    hoursKey: 'side_brush_time_left',
    resetCommand: 'reset_side_brush',
  },
  {
    key: 'filter',
    labelKey: 'settings.consumables.filter',
    percentKey: 'filter_left',
    hoursKey: 'filter_time_left',
    resetCommand: 'reset_filter',
  },
  {
    key: 'sensor',
    labelKey: 'settings.consumables.sensor',
    percentKey: 'sensor_dirty_left',
    hoursKey: 'sensor_dirty_time_left',
    resetCommand: 'reset_sensor',
  },
];

export function ConsumablesSection({ hass, entity }: ConsumablesSectionProps) {
  const { t } = useTranslation();
  const attributes = entity.attributes;

  const handleReset = useCallback(
    (resetCommand: string) => {
      hass.callService('dreame_vacuum', resetCommand, {
        entity_id: entity.entity_id,
      });
    },
    [hass, entity.entity_id]
  );

  const getProgressColor = (percent: number): string => {
    if (percent >= 50) return 'var(--consumable-good, #34c759)';
    if (percent >= 20) return 'var(--consumable-warning, #ff9500)';
    return 'var(--consumable-critical, #ff3b30)';
  };

  return (
    <div className="consumables-section">
      {CONSUMABLES.map((consumable) => {
        const percent = getAttr(attributes[consumable.percentKey], 0);
        const hours = getAttr(attributes[consumable.hoursKey], 0);
        const progressColor = getProgressColor(percent);

        return (
          <div key={consumable.key} className="consumables-section__item">
            <div className="consumables-section__info">
              <span className="consumables-section__label">{t(consumable.labelKey)}</span>
              <span className="consumables-section__stats">
                {percent}% · {hours}h {t('settings.consumables.remaining')}
              </span>
            </div>
            <div className="consumables-section__progress">
              <div
                className="consumables-section__progress-bar"
                style={{
                  width: `${percent}%`,
                  backgroundColor: progressColor,
                }}
              />
            </div>
            <button
              className="consumables-section__reset"
              onClick={() => handleReset(consumable.resetCommand)}
              type="button"
            >
              {t('settings.consumables.reset')}
            </button>
          </div>
        );
      })}
    </div>
  );
}
