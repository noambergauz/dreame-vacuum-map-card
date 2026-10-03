import { useState, useEffect } from 'react';
import { SLIDER_CONFIG } from '@/constants';
import { useIsRtl } from '@/contexts';
import { selectOptionKey } from '@/utils';

interface WetnessSliderProps {
  wetnessLevel: number;
  mopPadHumidity: string;
  onChangeWetness: (entityId: string, value: number) => void;
  entityId: string;
  slightlyDryLabel: string;
  moistLabel: string;
  wetLabel: string;
  disabled?: boolean;
}

export function WetnessSlider({
  wetnessLevel,
  mopPadHumidity,
  onChangeWetness,
  entityId,
  slightlyDryLabel,
  moistLabel,
  wetLabel,
  disabled = false,
}: WetnessSliderProps) {
  const [localValue, setLocalValue] = useState(wetnessLevel);
  const isRtl = useIsRtl();

  // Sync local state when prop changes (e.g., entity update from HA)
  useEffect(() => {
    setLocalValue(wetnessLevel);
  }, [wetnessLevel]);
  const { MIN, MAX } = SLIDER_CONFIG.WETNESS;
  const percent = ((localValue - MIN) / (MAX - MIN)) * 100;
  const thumbWidth = 20;
  const tooltipPosition = `calc(${percent}% + ${thumbWidth / 2 - (percent * thumbWidth) / 100}px)`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      setLocalValue(parseInt(e.target.value));
    }
  };

  const handleCommit = () => {
    if (!disabled && localValue !== wetnessLevel) {
      onChangeWetness(entityId, localValue);
    }
  };

  const gradientDirection = isRtl ? 'to left' : 'to right';

  const labels = [
    { humidity: 'slightly_dry', text: slightlyDryLabel },
    { humidity: 'moist', text: moistLabel },
    { humidity: 'wet', text: wetLabel },
  ];

  return (
    <>
      <div
        className={`cleaning-mode-modal__slider-container ${disabled ? 'cleaning-mode-modal__slider-container--disabled' : ''}`}
      >
        <div className="cleaning-mode-modal__slider-wrapper">
          <input
            type="range"
            min={MIN}
            max={MAX}
            value={localValue}
            onChange={handleChange}
            onMouseUp={handleCommit}
            onTouchEnd={handleCommit}
            disabled={disabled}
            className="cleaning-mode-modal__slider"
            style={{
              background: `linear-gradient(${gradientDirection}, var(--accent-bg-secondary) 0%, var(--accent-bg-secondary) ${percent}%, var(--accent-bg-secondary-hover) ${percent}%, var(--accent-bg-secondary-hover) 100%)`,
            }}
          />
          <div
            className="cleaning-mode-modal__slider-tooltip"
            style={isRtl ? { right: tooltipPosition } : { left: tooltipPosition }}
          >
            {localValue}
          </div>
        </div>
      </div>

      <div className="cleaning-mode-modal__slider-labels">
        {labels.map(({ humidity, text }) => (
          <span
            key={humidity}
            className={`cleaning-mode-modal__slider-label cleaning-mode-modal__slider-label--${selectOptionKey(mopPadHumidity) === humidity ? 'active' : 'inactive'}`}
          >
            {text}
          </span>
        ))}
      </div>
    </>
  );
}
