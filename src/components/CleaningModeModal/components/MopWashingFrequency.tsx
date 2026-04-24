import { useState } from 'react';
import { CircularButton } from '@/components/common';
import type { SelfCleanFrequency } from '@/types/vacuum';
import { getSelfCleanFrequencyIcon, convertSelfCleanFrequencyToService } from '@/utils';
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

const FREQUENCY_KEYS: Record<string, string> = {
  'By room': 'mop_washing_frequency.by_room',
  'By area': 'mop_washing_frequency.by_area',
  'By time': 'mop_washing_frequency.by_time',
};

function getFrequencyLabel(freq: string, t?: TranslateFunction): string {
  if (!t) return freq;
  return FREQUENCY_KEYS[freq] ? t(FREQUENCY_KEYS[freq]) : freq;
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

  const isByArea = selfCleanFrequency === 'By area';
  const isByTime = selfCleanFrequency === 'By time';
  const showSlider = isByArea || isByTime;

  const currentValue = isByArea ? localArea : localTime;
  const currentMin = isByArea ? selfCleanAreaMin : selfCleanTimeMin;
  const currentMax = isByArea ? selfCleanAreaMax : selfCleanTimeMax;
  const percent = ((currentValue - currentMin) / (currentMax - currentMin)) * 100;
  const thumbWidth = 20;
  const tooltipPosition = `calc(${percent}% + ${thumbWidth / 2 - (percent * thumbWidth) / 100}px)`;

  const minutesShortUnit = t ? t('units.minutes_short') : 'm';
  const gradientDirection = isRtl ? 'to left' : 'to right';

  const isSliderDisabled = isByArea ? areaDisabled || frequencyDisabled : timeDisabled || frequencyDisabled;

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
        {selfCleanFrequencyList.map((freq, idx) => (
          <div key={idx} className="cleaning-mode-modal__mode-option">
            <CircularButton
              size="small"
              selected={freq === selfCleanFrequency}
              onClick={() =>
                !frequencyDisabled &&
                onSelectFrequency(frequencyEntityId, convertSelfCleanFrequencyToService(freq as SelfCleanFrequency))
              }
              icon={getSelfCleanFrequencyIcon(freq as SelfCleanFrequency)}
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
