import { useCallback } from 'react';
import { useTranslation } from '@/hooks';
import { useEntity, useHass } from '@/contexts';
import { getAttr } from '@/utils';
import { DREAME_SENSORS, DREAME_SERVICES } from '@/constants';
import './ConsumablesSection.scss';

interface ConsumableItem {
  key: string;
  labelKey: string;
  percentKey: string;
  hoursKey: string;
  consumableKey: string;
}

const CONSUMABLES: ConsumableItem[] = [
  {
    key: 'main_brush',
    labelKey: 'settings.consumables.main_brush',
    percentKey: DREAME_SENSORS.MAIN_BRUSH_LEFT.key,
    hoursKey: DREAME_SENSORS.MAIN_BRUSH_TIME_LEFT.key,
    consumableKey: 'main_brush',
  },
  {
    key: 'side_brush',
    labelKey: 'settings.consumables.side_brush',
    percentKey: DREAME_SENSORS.SIDE_BRUSH_LEFT.key,
    hoursKey: DREAME_SENSORS.SIDE_BRUSH_TIME_LEFT.key,
    consumableKey: 'side_brush',
  },
  {
    key: 'filter',
    labelKey: 'settings.consumables.filter',
    percentKey: DREAME_SENSORS.FILTER_LEFT.key,
    hoursKey: DREAME_SENSORS.FILTER_TIME_LEFT.key,
    consumableKey: 'filter',
  },
  {
    key: 'sensor',
    labelKey: 'settings.consumables.sensor',
    percentKey: DREAME_SENSORS.SENSOR_DIRTY_LEFT.key,
    hoursKey: DREAME_SENSORS.SENSOR_DIRTY_TIME_LEFT.key,
    consumableKey: 'sensor',
  },
];

export function ConsumablesSection() {
  const { t } = useTranslation();
  const entity = useEntity();
  const hass = useHass();
  const attributes = entity.attributes;

  const handleReset = useCallback(
    (consumableKey: string) => {
      hass.callService(DREAME_SERVICES.VACUUM_RESET_CONSUMABLE.domain, DREAME_SERVICES.VACUUM_RESET_CONSUMABLE.key, {
        entity_id: entity.entity_id,
        consumable: consumableKey,
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
              onClick={() => handleReset(consumable.consumableKey)}
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
