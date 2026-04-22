import { Droplets, Wind, Pipette, Sparkles, Waves } from 'lucide-react';
import { useTranslation } from '@/hooks';
import { useEntity, useHass } from '@/contexts';
import { STATION_BUTTON_SUFFIX } from '@/constants';
import './StationControlsSection.scss';

interface StationAction {
  key: string;
  labelKey: string;
  descriptionKey: string;
  buttonEntitySuffix: string;
  icon: React.ReactNode;
}

const STATION_ACTIONS: StationAction[] = [
  {
    key: 'self_clean',
    labelKey: 'settings.station_controls.self_clean',
    descriptionKey: 'settings.station_controls.self_clean_desc',
    buttonEntitySuffix: STATION_BUTTON_SUFFIX.SELF_CLEAN,
    icon: <Droplets size={20} />,
  },
  {
    key: 'manual_drying',
    labelKey: 'settings.station_controls.manual_drying',
    descriptionKey: 'settings.station_controls.manual_drying_desc',
    buttonEntitySuffix: STATION_BUTTON_SUFFIX.MANUAL_DRYING,
    icon: <Wind size={20} />,
  },
  {
    key: 'water_tank_draining',
    labelKey: 'settings.station_controls.water_tank_draining',
    descriptionKey: 'settings.station_controls.water_tank_draining_desc',
    buttonEntitySuffix: STATION_BUTTON_SUFFIX.WATER_TANK_DRAINING,
    icon: <Pipette size={20} />,
  },
  {
    key: 'base_station_cleaning',
    labelKey: 'settings.station_controls.base_station_cleaning',
    descriptionKey: 'settings.station_controls.base_station_cleaning_desc',
    buttonEntitySuffix: STATION_BUTTON_SUFFIX.BASE_STATION_CLEANING,
    icon: <Sparkles size={20} />,
  },
  {
    key: 'empty_water_tank',
    labelKey: 'settings.station_controls.empty_water_tank',
    descriptionKey: 'settings.station_controls.empty_water_tank_desc',
    buttonEntitySuffix: STATION_BUTTON_SUFFIX.EMPTY_WATER_TANK,
    icon: <Waves size={20} />,
  },
];

export function StationControlsSection() {
  const { t } = useTranslation();
  const entity = useEntity();
  const hass = useHass();
  const entityName = entity.entity_id.split('.')[1] ?? '';

  const isActionAvailable = (suffix: string): boolean => {
    const buttonEntityId = `button.${entityName}_${suffix}`;
    const buttonEntity = hass.states[buttonEntityId];
    // Entity exists and is not unavailable
    return buttonEntity !== undefined && buttonEntity.state !== 'unavailable';
  };

  const handleAction = (suffix: string) => {
    const buttonEntityId = `button.${entityName}_${suffix}`;
    hass.callService('button', 'press', {
      entity_id: buttonEntityId,
    });
  };

  // Filter to only show available actions
  const availableActions = STATION_ACTIONS.filter((action) => isActionAvailable(action.buttonEntitySuffix));

  if (availableActions.length === 0) {
    return null;
  }

  return (
    <div className="station-controls-section">
      {availableActions.map((action) => (
        <button
          key={action.key}
          className="station-controls-section__button"
          onClick={() => handleAction(action.buttonEntitySuffix)}
          type="button"
        >
          <span className="station-controls-section__icon">{action.icon}</span>
          <div className="station-controls-section__info">
            <span className="station-controls-section__label">{t(action.labelKey)}</span>
            <span className="station-controls-section__description">{t(action.descriptionKey)}</span>
          </div>
        </button>
      ))}
    </div>
  );
}
