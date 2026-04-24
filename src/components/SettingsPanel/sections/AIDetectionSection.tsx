import { useCallback } from 'react';
import { Toggle } from '@/components/common';
import { useTranslation, getSwitchState, getNumberState } from '@/hooks';
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
    key: 'intelligent_recognition',
    labelKey: 'settings.ai_detection.intelligent_recognition',
    descriptionKey: 'settings.ai_detection.intelligent_recognition_desc',
    switchEntitySuffix: 'intelligent_recognition',
  },
  {
    key: 'ai_obstacle_detection',
    labelKey: 'settings.ai_detection.ai_obstacle_detection',
    descriptionKey: 'settings.ai_detection.ai_obstacle_detection_desc',
    switchEntitySuffix: 'ai_obstacle_detection',
  },
  {
    key: 'fuzzy_obstacle_detection',
    labelKey: 'settings.ai_detection.fuzzy_obstacle_detection',
    descriptionKey: 'settings.ai_detection.fuzzy_obstacle_detection_desc',
    switchEntitySuffix: 'fuzzy_obstacle_detection',
  },
  {
    key: 'ai_obstacle_image_upload',
    labelKey: 'settings.ai_detection.ai_obstacle_image_upload',
    descriptionKey: 'settings.ai_detection.ai_obstacle_image_upload_desc',
    switchEntitySuffix: 'ai_obstacle_image_upload',
  },
  {
    key: 'ai_obstacle_picture',
    labelKey: 'settings.ai_detection.ai_obstacle_picture',
    descriptionKey: 'settings.ai_detection.ai_obstacle_picture_desc',
    switchEntitySuffix: 'ai_obstacle_picture',
  },
  {
    key: 'ai_pet_detection',
    labelKey: 'settings.ai_detection.ai_pet_detection',
    descriptionKey: 'settings.ai_detection.ai_pet_detection_desc',
    switchEntitySuffix: 'ai_pet_detection',
  },
  {
    key: 'pet_focused_detection',
    labelKey: 'settings.ai_detection.pet_focused_detection',
    descriptionKey: 'settings.ai_detection.pet_focused_detection_desc',
    switchEntitySuffix: 'pet_focused_detection',
  },
  {
    key: 'pet_picture',
    labelKey: 'settings.ai_detection.pet_picture',
    descriptionKey: 'settings.ai_detection.pet_picture_desc',
    switchEntitySuffix: 'pet_picture',
  },
  {
    key: 'ai_human_detection',
    labelKey: 'settings.ai_detection.ai_human_detection',
    descriptionKey: 'settings.ai_detection.ai_human_detection_desc',
    switchEntitySuffix: 'ai_human_detection',
  },
  {
    key: 'human_follow',
    labelKey: 'settings.ai_detection.human_follow',
    descriptionKey: 'settings.ai_detection.human_follow_desc',
    switchEntitySuffix: 'human_follow',
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
  {
    key: 'camera_light_brightness_auto',
    labelKey: 'settings.ai_detection.camera_light_auto',
    descriptionKey: 'settings.ai_detection.camera_light_auto_desc',
    switchEntitySuffix: 'camera_light_brightness_auto',
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

  const handleBrightnessChange = useCallback(
    (value: number) => {
      const numberEntityId = `number.${entityName}_camera_light_brightness`;
      hass.callService('number', 'set_value', {
        entity_id: numberEntityId,
        value,
      });
    },
    [hass, entityName]
  );

  // Get camera brightness state
  const brightnessState = getNumberState(hass, entityName, 'camera_light_brightness');
  const cameraAutoState = getSwitchState(hass, entityName, 'camera_light_brightness_auto');
  const brightnessEntity = hass.states[`number.${entityName}_camera_light_brightness`];
  const brightnessMin = (brightnessEntity?.attributes?.min as number) ?? 0;
  const brightnessMax = (brightnessEntity?.attributes?.max as number) ?? 100;
  const brightnessStep = (brightnessEntity?.attributes?.step as number) ?? 1;

  return (
    <div className="ai-detection-section">
      {AI_TOGGLES.map((setting) => {
        const switchState = getSwitchState(hass, entityName, setting.switchEntitySuffix);
        if (switchState.disabled) return null;
        return (
          <div key={setting.key} className="ai-detection-section__item">
            <div className="ai-detection-section__info">
              <span className="ai-detection-section__label">{t(setting.labelKey)}</span>
              <span className="ai-detection-section__description">{t(setting.descriptionKey)}</span>
            </div>
            <Toggle
              checked={switchState.isOn}
              disabled={switchState.unavailable}
              onChange={(checked) => handleToggle(setting.switchEntitySuffix, checked)}
            />
          </div>
        );
      })}

      {/* Camera light brightness slider - only shown when auto is off */}
      {!brightnessState.disabled && !cameraAutoState.isOn && (
        <div className="ai-detection-section__item ai-detection-section__item--slider">
          <div className="ai-detection-section__info">
            <span className="ai-detection-section__label">{t('settings.ai_detection.camera_light_brightness')}</span>
            <span className="ai-detection-section__description">
              {t('settings.ai_detection.camera_light_brightness_desc')}
            </span>
          </div>
          <div className="ai-detection-section__slider-container">
            <input
              type="range"
              className="ai-detection-section__slider"
              min={brightnessMin}
              max={brightnessMax}
              step={brightnessStep}
              value={brightnessState.numericValue}
              disabled={brightnessState.unavailable}
              onChange={(e) => handleBrightnessChange(Number(e.target.value))}
            />
            <span className="ai-detection-section__slider-value">{brightnessState.numericValue}%</span>
          </div>
        </div>
      )}
    </div>
  );
}
