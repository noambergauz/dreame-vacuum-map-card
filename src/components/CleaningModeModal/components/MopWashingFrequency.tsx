import { useState, useEffect } from 'react';
import { CircularButton } from '../../common';
import type { SelfCleanFrequency } from '../../../types/vacuum';
import { getSelfCleanFrequencyIcon, convertSelfCleanFrequencyToService } from '../../../utils';

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
}

/**
 * Get translated frequency label
 */
function getFrequencyLabel(freq: string, t?: TranslateFunction): string {
  if (!t) return freq;
  switch (freq) {
    case 'By room':
      return t('mop_washing_frequency.by_room');
    case 'By area':
      return t('mop_washing_frequency.by_area');
    case 'By time':
      return t('mop_washing_frequency.by_time');
    default:
      return freq;
  }
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
}: MopWashingFrequencyProps) {
  const [localFrequency, setLocalFrequency] = useState(selfCleanFrequency);
  const [localArea, setLocalArea] = useState(selfCleanArea);
  const [localTime, setLocalTime] = useState(selfCleanTime);

  useEffect(() => {
    setLocalFrequency(selfCleanFrequency);
  }, [selfCleanFrequency]);

  const selfCleanAreaPercent = ((localArea - selfCleanAreaMin) / (selfCleanAreaMax - selfCleanAreaMin)) * 100;
  const selfCleanTimePercent = ((localTime - selfCleanTimeMin) / (selfCleanTimeMax - selfCleanTimeMin)) * 100;

  // Calculate tooltip position accounting for thumb width (20px = 1.25rem)
  const thumbWidth = 20; // in pixels
  const areaTooltipLeft = `calc(${selfCleanAreaPercent}% + ${thumbWidth / 2 - (selfCleanAreaPercent * thumbWidth) / 100}px)`;
  const timeTooltipLeft = `calc(${selfCleanTimePercent}% + ${thumbWidth / 2 - (selfCleanTimePercent * thumbWidth) / 100}px)`;

  // Get translated unit strings
  const squareMetersUnit = t ? t('units.square_meters') : 'm²';
  const minutesShortUnit = t ? t('units.minutes_short') : 'm';

  const handleFrequencySelect = (freq: string) => {
    setLocalFrequency(freq);
    onSelectFrequency(frequencyEntityId, convertSelfCleanFrequencyToService(freq as SelfCleanFrequency));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (localFrequency === 'By area') {
      setLocalArea(value);
    } else {
      setLocalTime(value);
    }
  };

  const handleCommit = () => {
    if (localFrequency === 'By area' && localArea !== selfCleanArea) {
      onChangeArea(areaEntityId, localArea);
    } else if (localFrequency === 'By time' && localTime !== selfCleanTime) {
      onChangeTime(timeEntityId, localTime);
    }
  };

  return (
    <>
      {/* Frequency type selector */}
      <div className="cleaning-mode-modal__horizontal-scroll">
        {selfCleanFrequencyList.map((freq, idx) => (
          <div key={idx} className="cleaning-mode-modal__mode-option">
            <CircularButton
              size="small"
              selected={freq === localFrequency}
              onClick={() => handleFrequencySelect(freq)}
              icon={getSelfCleanFrequencyIcon(freq as SelfCleanFrequency)}
            />
            <span className="cleaning-mode-modal__mode-option-label">{getFrequencyLabel(freq, t)}</span>
          </div>
        ))}
      </div>

      {/* Slider for By area or By time */}
      {(localFrequency === 'By area' || localFrequency === 'By time') && (
        <div className="cleaning-mode-modal__slider-container" style={{ marginTop: '1rem' }}>
          <div className="cleaning-mode-modal__slider-wrapper">
            <input
              type="range"
              min={localFrequency === 'By area' ? selfCleanAreaMin : selfCleanTimeMin}
              max={localFrequency === 'By area' ? selfCleanAreaMax : selfCleanTimeMax}
              value={localFrequency === 'By area' ? localArea : localTime}
              onChange={handleChange}
              onMouseUp={handleCommit}
              onTouchEnd={handleCommit}
              className="cleaning-mode-modal__slider"
              style={{
                background:
                  localFrequency === 'By area'
                    ? `linear-gradient(to right, var(--accent-bg-secondary) 0%, var(--accent-bg-secondary) ${selfCleanAreaPercent}%, var(--accent-bg-secondary-hover) ${selfCleanAreaPercent}%, var(--accent-bg-secondary-hover) 100%)`
                    : `linear-gradient(to right, var(--accent-bg-secondary) 0%, var(--accent-bg-secondary) ${selfCleanTimePercent}%, var(--accent-bg-secondary-hover) ${selfCleanTimePercent}%, var(--accent-bg-secondary-hover) 100%)`,
              }}
            />
            <div
              className="cleaning-mode-modal__slider-tooltip"
              style={{
                left: localFrequency === 'By area' ? areaTooltipLeft : timeTooltipLeft,
              }}
            >
              {localFrequency === 'By area' ? `${localArea}${squareMetersUnit}` : `${localTime}${minutesShortUnit}`}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
