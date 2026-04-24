import { useState, useCallback } from 'react';
import { Volume2, VolumeX, MapPin } from 'lucide-react';
import { Toggle } from '@/components/common';
import { useTranslation, getNumberState, getSwitchState, getSelectState } from '@/hooks';
import { useEntity, useHass, useIsRtl } from '@/contexts';
import './VolumeSection.scss';

const VOLUME_MIN = 0;
const VOLUME_MAX = 100;

export function VolumeSection() {
  const { t } = useTranslation();
  const entity = useEntity();
  const hass = useHass();
  const isRtl = useIsRtl();
  const entityName = entity.entity_id.split('.')[1] ?? '';

  // Get volume entity state
  const volumeState = getNumberState(hass, entityName, 'volume');
  const currentVolume = volumeState.exists ? volumeState.numericValue : 50;

  // Get voice assistant states
  const voiceAssistantState = getSwitchState(hass, entityName, 'voice_assistant');
  const streamingVoicePromptState = getSwitchState(hass, entityName, 'streaming_voice_prompt');
  const voiceAssistantLanguageState = getSelectState(hass, entityName, 'voice_assistant_language');

  // Get language options from entity
  const languageOptions =
    (hass.states[`select.${entityName}_voice_assistant_language`]?.attributes?.options as string[]) ?? [];

  const [localValue, setLocalValue] = useState(currentVolume);
  const volumePercent = ((localValue - VOLUME_MIN) / (VOLUME_MAX - VOLUME_MIN)) * 100;

  // Calculate tooltip position accounting for thumb width
  const thumbWidth = 20;
  const tooltipPosition = `calc(${volumePercent}% + ${thumbWidth / 2 - (volumePercent * thumbWidth) / 100}px)`;

  // For RTL, flip the gradient direction
  const gradientDirection = isRtl ? 'to left' : 'to right';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(parseInt(e.target.value));
  };

  const handleCommit = useCallback(() => {
    if (localValue !== currentVolume) {
      const volumeEntityId = `number.${entityName}_volume`;
      hass.callService('number', 'set_value', {
        entity_id: volumeEntityId,
        value: localValue,
      });
    }
  }, [hass, entityName, localValue, currentVolume]);

  const handleTestSound = useCallback(() => {
    // Use vacuum.locate as it plays a sound to help find the vacuum
    // The integration triggers test_sound automatically when volume changes
    hass.callService('vacuum', 'locate', {
      entity_id: entity.entity_id,
    });
  }, [hass, entity.entity_id]);

  const handleToggle = useCallback(
    (switchEntitySuffix: string, newValue: boolean) => {
      const switchEntityId = `switch.${entityName}_${switchEntitySuffix}`;
      hass.callService('switch', newValue ? 'turn_on' : 'turn_off', {
        entity_id: switchEntityId,
      });
    },
    [hass, entityName]
  );

  const handleLanguageChange = useCallback(
    (value: string) => {
      const selectEntityId = `select.${entityName}_voice_assistant_language`;
      hass.callService('select', 'select_option', {
        entity_id: selectEntityId,
        option: value,
      });
    },
    [hass, entityName]
  );

  const isMuted = localValue === 0;
  // Only disable if entity exists but is unavailable
  const isDisabled = volumeState.unavailable;

  return (
    <div className="volume-section">
      <div className="volume-section__row">
        <div className="volume-section__control">
          <div className="volume-section__icon">{isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}</div>
          <div className="volume-section__slider-container">
            <div className="volume-section__slider-wrapper">
              <input
                type="range"
                min={VOLUME_MIN}
                max={VOLUME_MAX}
                value={localValue}
                onChange={handleChange}
                onMouseUp={handleCommit}
                onTouchEnd={handleCommit}
                disabled={isDisabled}
                className="volume-section__slider"
                style={{
                  background: `linear-gradient(${gradientDirection}, var(--accent-color, #007aff) 0%, var(--accent-color, #007aff) ${volumePercent}%, var(--surface-secondary, #e5e5e5) ${volumePercent}%, var(--surface-secondary, #e5e5e5) 100%)`,
                }}
              />
              <div
                className="volume-section__tooltip"
                style={isRtl ? { right: tooltipPosition } : { left: tooltipPosition }}
              >
                {isMuted ? t('settings.volume.muted') : `${localValue}%`}
              </div>
            </div>
          </div>
        </div>

        <button className="volume-section__test-button" onClick={handleTestSound} disabled={isDisabled} type="button">
          <MapPin size={16} />
          <span>{t('settings.volume.test_sound')}</span>
        </button>
      </div>

      {/* Voice Assistant */}
      {!voiceAssistantState.disabled && (
        <div className="volume-section__item">
          <div className="volume-section__info">
            <span className="volume-section__label">{t('settings.volume.voice_assistant')}</span>
            <span className="volume-section__description">{t('settings.volume.voice_assistant_desc')}</span>
          </div>
          <Toggle
            checked={voiceAssistantState.isOn}
            disabled={voiceAssistantState.unavailable}
            onChange={(checked) => handleToggle('voice_assistant', checked)}
          />
        </div>
      )}

      {/* Voice Assistant Language */}
      {!voiceAssistantLanguageState.disabled && voiceAssistantState.isOn && (
        <div className="volume-section__item volume-section__item--select">
          <div className="volume-section__info">
            <span className="volume-section__label">{t('settings.volume.voice_language')}</span>
            <span className="volume-section__description">{t('settings.volume.voice_language_desc')}</span>
          </div>
          <select
            className="volume-section__select"
            value={voiceAssistantLanguageState.state ?? ''}
            disabled={voiceAssistantLanguageState.unavailable}
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            {languageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Streaming Voice Prompt */}
      {!streamingVoicePromptState.disabled && (
        <div className="volume-section__item">
          <div className="volume-section__info">
            <span className="volume-section__label">{t('settings.volume.streaming_voice_prompt')}</span>
            <span className="volume-section__description">{t('settings.volume.streaming_voice_prompt_desc')}</span>
          </div>
          <Toggle
            checked={streamingVoicePromptState.isOn}
            disabled={streamingVoicePromptState.unavailable}
            onChange={(checked) => handleToggle('streaming_voice_prompt', checked)}
          />
        </div>
      )}
    </div>
  );
}
