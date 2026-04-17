import { useCallback } from 'react';
import { Toggle } from '../../common';
import { useTranslation } from '../../../hooks';
import { useEntity, useHass } from '../../../contexts';
import { isBoolean, isNumber } from '../../../utils';
import './AIDetectionSection.scss';

interface AIToggle {
  key: string;
  labelKey: string;
  descriptionKey: string;
  attributeKey: string;
  switchEntitySuffix: string;
}

const AI_TOGGLES: AIToggle[] = [
  {
    key: 'obstacle_avoidance',
    labelKey: 'settings.ai_detection.obstacle_avoidance',
    descriptionKey: 'settings.ai_detection.obstacle_avoidance_desc',
    attributeKey: 'obstacle_avoidance',
    switchEntitySuffix: 'obstacle_avoidance',
  },
  {
    key: 'ai_obstacle_detection',
    labelKey: 'settings.ai_detection.ai_obstacle_detection',
    descriptionKey: 'settings.ai_detection.ai_obstacle_detection_desc',
    attributeKey: 'ai_obstacle_detection',
    switchEntitySuffix: 'ai_obstacle_detection',
  },
  {
    key: 'ai_obstacle_image_upload',
    labelKey: 'settings.ai_detection.ai_obstacle_image_upload',
    descriptionKey: 'settings.ai_detection.ai_obstacle_image_upload_desc',
    attributeKey: 'ai_obstacle_image_upload',
    switchEntitySuffix: 'ai_obstacle_image_upload',
  },
  {
    key: 'ai_pet_detection',
    labelKey: 'settings.ai_detection.ai_pet_detection',
    descriptionKey: 'settings.ai_detection.ai_pet_detection_desc',
    attributeKey: 'ai_pet_detection',
    switchEntitySuffix: 'ai_pet_detection',
  },
  {
    key: 'ai_human_detection',
    labelKey: 'settings.ai_detection.ai_human_detection',
    descriptionKey: 'settings.ai_detection.ai_human_detection_desc',
    attributeKey: 'ai_human_detection',
    switchEntitySuffix: 'ai_human_detection',
  },
  {
    key: 'ai_furniture_detection',
    labelKey: 'settings.ai_detection.ai_furniture_detection',
    descriptionKey: 'settings.ai_detection.ai_furniture_detection_desc',
    attributeKey: 'ai_furniture_detection',
    switchEntitySuffix: 'ai_furniture_detection',
  },
  {
    key: 'ai_fluid_detection',
    labelKey: 'settings.ai_detection.ai_fluid_detection',
    descriptionKey: 'settings.ai_detection.ai_fluid_detection_desc',
    attributeKey: 'ai_fluid_detection',
    switchEntitySuffix: 'ai_fluid_detection',
  },
  {
    key: 'stain_avoidance',
    labelKey: 'settings.ai_detection.stain_avoidance',
    descriptionKey: 'settings.ai_detection.stain_avoidance_desc',
    attributeKey: 'stain_avoidance',
    switchEntitySuffix: 'stain_avoidance',
  },
  {
    key: 'collision_avoidance',
    labelKey: 'settings.ai_detection.collision_avoidance',
    descriptionKey: 'settings.ai_detection.collision_avoidance_desc',
    attributeKey: 'collision_avoidance',
    switchEntitySuffix: 'collision_avoidance',
  },
  {
    key: 'fill_light',
    labelKey: 'settings.ai_detection.fill_light',
    descriptionKey: 'settings.ai_detection.fill_light_desc',
    attributeKey: 'fill_light',
    switchEntitySuffix: 'fill_light',
  },
];

export function AIDetectionSection() {
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

  const isEnabled = (key: string): boolean => {
    const value = attributes[key];
    if (isBoolean(value)) return value;
    if (isNumber(value)) return value > 0;
    return false;
  };

  return (
    <div className="ai-detection-section">
      {AI_TOGGLES.map((setting) => (
        <div key={setting.key} className="ai-detection-section__item">
          <div className="ai-detection-section__info">
            <span className="ai-detection-section__label">{t(setting.labelKey)}</span>
            <span className="ai-detection-section__description">{t(setting.descriptionKey)}</span>
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
