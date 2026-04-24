import { useState } from 'react';
import { SLIDER_CONFIG, MOP_PAD_HUMIDITY } from '@/constants';
import { useIsRtl } from '@/contexts';

interface WetnessSliderProps {
  wetnessLevel: number;
  mopPadHumidity: string;
  onChangeWetness: (entityId: string, value: number) => void;
  entityId: string;
  slightlyDryLabel: string;
  moistLabel: string;
  wetLabel: string;
  /** Disable the slider */
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
  const wetnessPercent =
    ((localValue - SLIDER_CONFIG.WETNESS.MIN) / (SLIDER_CONFIG.WETNESS.MAX - SLIDER_CONFIG.WETNESS.MIN)) * 100;

  // Calculate tooltip position accounting for thumb width (20px = 1.25rem)
  const thumbWidth = 20; // in pixels
  const tooltipPosition = `calc(${wetnessPercent}% + ${thumbWidth / 2 - (wetnessPercent * thumbWidth) / 100}px)`;

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

  // For RTL, flip the gradient direction
  const gradientDirection = isRtl ? 'to left' : 'to right';

  return (
    <>
      {/* Slider */}
      <div
        className={`cleaning-mode-modal__slider-container ${disabled ? 'cleaning-mode-modal__slider-container--disabled' : ''}`}
      >
        <div className="cleaning-mode-modal__slider-wrapper">
          <input
            type="range"
            min={SLIDER_CONFIG.WETNESS.MIN}
            max={SLIDER_CONFIG.WETNESS.MAX}
            value={localValue}
            onChange={handleChange}
            onMouseUp={handleCommit}
            onTouchEnd={handleCommit}
            disabled={disabled}
            className="cleaning-mode-modal__slider"
            style={{
              background: `linear-gradient(${gradientDirection}, var(--accent-bg-secondary) 0%, var(--accent-bg-secondary) ${wetnessPercent}%, var(--accent-bg-secondary-hover) ${wetnessPercent}%, var(--accent-bg-secondary-hover) 100%)`,
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

      {/* Labels */}
      <div className="cleaning-mode-modal__slider-labels">
        <span
          className={`cleaning-mode-modal__slider-label ${
            mopPadHumidity === MOP_PAD_HUMIDITY.SLIGHTLY_DRY
              ? 'cleaning-mode-modal__slider-label--active'
              : 'cleaning-mode-modal__slider-label--inactive'
          }`}
        >
          {slightlyDryLabel}
        </span>
        <span
          className={`cleaning-mode-modal__slider-label ${
            mopPadHumidity === MOP_PAD_HUMIDITY.MOIST
              ? 'cleaning-mode-modal__slider-label--active'
              : 'cleaning-mode-modal__slider-label--inactive'
          }`}
        >
          {moistLabel}
        </span>
        <span
          className={`cleaning-mode-modal__slider-label ${
            mopPadHumidity === MOP_PAD_HUMIDITY.WET
              ? 'cleaning-mode-modal__slider-label--active'
              : 'cleaning-mode-modal__slider-label--inactive'
          }`}
        >
          {wetLabel}
        </span>
      </div>
    </>
  );
}
