import { useState, useCallback } from 'react';
import { Volume2, VolumeX, MapPin } from 'lucide-react';
import { useTranslation } from '@/hooks';
import { useEntity, useHass, useIsRtl } from '@/contexts';
import { getAttr } from '@/utils';
import './VolumeSection.scss';

const VOLUME_MIN = 0;
const VOLUME_MAX = 100;

export function VolumeSection() {
  const { t } = useTranslation();
  const entity = useEntity();
  const hass = useHass();
  const isRtl = useIsRtl();
  const entityName = entity.entity_id.split('.')[1] ?? '';
  const currentVolume = getAttr(entity.attributes.volume, 50);

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

  const isMuted = localValue === 0;

  return (
    <div className="volume-section">
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

      <button className="volume-section__test-button" onClick={handleTestSound} type="button">
        <MapPin size={16} />
        <span>{t('settings.volume.test_sound')}</span>
      </button>
    </div>
  );
}
