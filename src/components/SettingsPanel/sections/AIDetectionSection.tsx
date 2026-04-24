import { useCallback } from 'react';
import { Toggle } from '@/components/common';
import { useTranslation, getSwitchState } from '@/hooks';
import { useEntity, useHass } from '@/contexts';
import './AIDetectionSection.scss';

interface AIToggle {
  key: string;
  labelKey: string;
  descriptionKey: string;
  switchEntitySuffix: string;
}

const AI_TOGGLES: AIToggle[] = [
  {
    key: 'ai_obstacle_detection',
    labelKey: 'settings.ai_detection.ai_obstacle_detection',
    descriptionKey: 'settings.ai_detection.ai_obstacle_detection_desc',
    switchEntitySuffix: 'ai_obstacle_detection',
  },
  {
    key: 'ai_obstacle_image_upload',
    labelKey: 'settings.ai_detection.ai_obstacle_image_upload',
    descriptionKey: 'settings.ai_detection.ai_obstacle_image_upload_desc',
    switchEntitySuffix: 'ai_obstacle_image_upload',
  },
  {
    key: 'ai_pet_detection',
    labelKey: 'settings.ai_detection.ai_pet_detection',
    descriptionKey: 'settings.ai_detection.ai_pet_detection_desc',
    switchEntitySuffix: 'ai_pet_detection',
  },
  {
    key: 'ai_human_detection',
    labelKey: 'settings.ai_detection.ai_human_detection',
    descriptionKey: 'settings.ai_detection.ai_human_detection_desc',
    switchEntitySuffix: 'ai_human_detection',
  },
  {
    key: 'ai_furniture_detection',
    labelKey: 'settings.ai_detection.ai_furniture_detection',
    descriptionKey: 'settings.ai_detection.ai_furniture_detection_desc',
    switchEntitySuffix: 'ai_furniture_detection',
  },
  {
    key: 'ai_fluid_detection',
    labelKey: 'settings.ai_detection.ai_fluid_detection',
    descriptionKey: 'settings.ai_detection.ai_fluid_detection_desc',
    switchEntitySuffix: 'ai_fluid_detection',
  },
  {
    key: 'fill_light',
    labelKey: 'settings.ai_detection.fill_light',
    descriptionKey: 'settings.ai_detection.fill_light_desc',
    switchEntitySuffix: 'fill_light',
  },
];

export function AIDetectionSection() {
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
    <div className="ai-detection-section">
      {AI_TOGGLES.map((setting) => {
        const switchState = getSwitchState(hass, entityName, setting.switchEntitySuffix);
        return (
          <div key={setting.key} className="ai-detection-section__item">
            <div className="ai-detection-section__info">
              <span className="ai-detection-section__label">{t(setting.labelKey)}</span>
              <span className="ai-detection-section__description">{t(setting.descriptionKey)}</span>
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
