import { useState, useEffect } from 'react';
import { CircularButton } from '@/components/common';
import { formatSelectOptionLabel, getSelfCleanFrequencyIcon, selectOptionKey } from '@/utils';
import { useAreaUnit, useIsRtl } from '@/contexts';

type TranslateFunction = (key: string, params?: Record<string, string | number>) => string;

interface MopWashingFrequencyProps {
  selfCleanFrequency: string;
  selfCleanFrequencyList: string[];
  selfCleanArea: number;
  selfCleanAreaMin: number;
  selfCleanAreaMax: number;
  selfCleanTime: number;
  selfCleanTimeMin: number;
  selfCleanTimeMax: number;
  onSelectFrequency: (entityId: string, value: string) => void;
  onChangeArea: (entityId: string, value: number) => void;
  onChangeTime: (entityId: string, value: number) => void;
  frequencyEntityId: string;
  areaEntityId: string;
  timeEntityId: string;
  t?: TranslateFunction;
  frequencyDisabled?: boolean;
  areaDisabled?: boolean;
  timeDisabled?: boolean;
}

function getFrequencyLabel(freq: string, t?: TranslateFunction): string {
  if (!t) return formatSelectOptionLabel(freq);
  const key = `mop_washing_frequency.${selectOptionKey(freq)}`;
  const translated = t(key);
  return translated === key ? formatSelectOptionLabel(freq) : translated;
}

export function MopWashingFrequency({
  selfCleanFrequency,
  selfCleanFrequencyList,
  selfCleanArea,
  selfCleanAreaMin,
  selfCleanAreaMax,
  selfCleanTime,
  selfCleanTimeMin,
  selfCleanTimeMax,
  onSelectFrequency,
  onChangeArea,
  onChangeTime,
  frequencyEntityId,
  areaEntityId,
  timeEntityId,
  t,
  frequencyDisabled = false,
  areaDisabled = false,
  timeDisabled = false,
}: MopWashingFrequencyProps) {
  const [localArea, setLocalArea] = useState(selfCleanArea);
  const [localTime, setLocalTime] = useState(selfCleanTime);
  const areaUnit = useAreaUnit();
  const isRtl = useIsRtl();

  // Sync local state when props change (e.g., entity update from HA)
  useEffect(() => {
    setLocalArea(selfCleanArea);
  }, [selfCleanArea]);

  useEffect(() => {
    setLocalTime(selfCleanTime);
  }, [selfCleanTime]);

  const frequencyKey = selectOptionKey(selfCleanFrequency);
  const isByArea = frequencyKey === 'by_area';
  const isByTime = frequencyKey === 'by_time';
  const showSlider = isByArea || isByTime;

  const currentValue = isByArea ? localArea : localTime;
  const currentMin = isByArea ? selfCleanAreaMin : selfCleanTimeMin;
  const currentMax = isByArea ? selfCleanAreaMax : selfCleanTimeMax;
  const percent = ((currentValue - currentMin) / (currentMax - currentMin)) * 100;
  const thumbWidth = 20;
  const tooltipPosition = `calc(${percent}% + ${thumbWidth / 2 - (percent * thumbWidth) / 100}px)`;

  const minutesShortUnit = t ? t('units.minutes_short') : 'm';
  const gradientDirection = isRtl ? 'to left' : 'to right';

  // Slider disabled state is independent of frequency buttons
  const isSliderDisabled = isByArea ? areaDisabled : timeDisabled;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isSliderDisabled) return;
    const value = parseInt(e.target.value);
    if (isByArea) {
      setLocalArea(value);
    } else {
      setLocalTime(value);
    }
  };

  const handleCommit = () => {
    if (isSliderDisabled) return;
    if (isByArea && localArea !== selfCleanArea) {
      onChangeArea(areaEntityId, localArea);
    } else if (isByTime && localTime !== selfCleanTime) {
      onChangeTime(timeEntityId, localTime);
    }
  };

  return (
    <>
      <div
        className={`cleaning-mode-modal__horizontal-scroll ${frequencyDisabled ? 'cleaning-mode-modal__horizontal-scroll--disabled' : ''}`}
      >
        {selfCleanFrequencyList.map((freq) => (
          <div key={freq} className="cleaning-mode-modal__mode-option">
            <CircularButton
              size="small"
              selected={freq === selfCleanFrequency}
              onClick={() => !frequencyDisabled && onSelectFrequency(frequencyEntityId, freq)}
              icon={getSelfCleanFrequencyIcon(freq)}
              disabled={frequencyDisabled}
            />
            <span className="cleaning-mode-modal__mode-option-label">{getFrequencyLabel(freq, t)}</span>
          </div>
        ))}
      </div>

      {showSlider && (
        <div
          className={`cleaning-mode-modal__slider-container ${isSliderDisabled ? 'cleaning-mode-modal__slider-container--disabled' : ''}`}
          style={{ marginTop: '1rem' }}
        >
          <div className="cleaning-mode-modal__slider-wrapper">
            <input
              type="range"
              min={currentMin}
              max={currentMax}
              value={currentValue}
              onChange={handleChange}
              onMouseUp={handleCommit}
              onTouchEnd={handleCommit}
              disabled={isSliderDisabled}
              className="cleaning-mode-modal__slider"
              style={{
                background: `linear-gradient(${gradientDirection}, var(--accent-bg-secondary) 0%, var(--accent-bg-secondary) ${percent}%, var(--accent-bg-secondary-hover) ${percent}%, var(--accent-bg-secondary-hover) 100%)`,
              }}
            />
            <div
              className="cleaning-mode-modal__slider-tooltip"
              style={isRtl ? { right: tooltipPosition } : { left: tooltipPosition }}
            >
              {isByArea ? `${localArea}${areaUnit}` : `${localTime}${minutesShortUnit}`}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
