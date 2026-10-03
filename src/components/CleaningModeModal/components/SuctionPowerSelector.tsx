import { useState } from 'react';
import { CircularButton, Toggle } from '@/components/common';
import { getSuctionLevelFriendlyName, getSuctionLevelIcon, resolveSuctionDisplay, sameStringList } from '@/utils';

type TranslateFunction = (key: string, params?: Record<string, string | number>) => string;

interface SuctionPowerSelectorProps {
  suctionLevel: string;
  suctionLevelList: string[];
  attributeList: string[];
  fanSpeedList: string[];
  fanSpeed: string;
  cleaning: boolean;
  maxSuctionPower: boolean;
  onSelectSuctionLevel: (entityId: string, value: string) => void;
  onToggleMaxPower: (entityId: string, checked: boolean) => void;
  suctionLevelEntityId: string;
  maxSuctionPowerEntityId: string;
  maxPlusDescription: string;
  t?: TranslateFunction;
  /** Disable suction level buttons */
  suctionLevelDisabled?: boolean;
  /** Disable Max+ toggle */
  maxPowerDisabled?: boolean;
  /** Hide Max+ toggle entirely (when capability not supported) */
  hideMaxPower?: boolean;
}

export function SuctionPowerSelector({
  suctionLevel,
  suctionLevelList,
  attributeList,
  fanSpeedList,
  fanSpeed,
  cleaning,
  maxSuctionPower,
  onSelectSuctionLevel,
  onToggleMaxPower,
  suctionLevelEntityId,
  maxSuctionPowerEntityId,
  maxPlusDescription,
  t,
  suctionLevelDisabled = false,
  maxPowerDisabled = false,
  hideMaxPower = false,
}: SuctionPowerSelectorProps) {
  const [rememberedOptions, setRememberedOptions] = useState<string[]>([]);
  const display = resolveSuctionDisplay({
    cleaning,
    selectOptions: suctionLevelList,
    attributeList,
    rememberedOptions,
    fanSpeedList,
    fanSpeed,
    suctionLevel,
    maxSuctionPower: !hideMaxPower && maxSuctionPower,
  });
  if (!sameStringList(rememberedOptions, display.rememberedOptions)) {
    setRememberedOptions(display.rememberedOptions);
  }

  const isSuctionDisabled =
    !display.clicksEnabled || suctionLevelDisabled || (!display.sendFanSpeed && !hideMaxPower && maxSuctionPower);

  return (
    <>
      <div
        className={`cleaning-mode-modal__power-grid ${isSuctionDisabled ? 'cleaning-mode-modal__power-grid--disabled' : ''}`}
      >
        {display.options.map((level) => (
          <div key={level} className="cleaning-mode-modal__power-option">
            <CircularButton
              size="small"
              selected={level === display.highlight}
              onClick={() => !isSuctionDisabled && onSelectSuctionLevel(suctionLevelEntityId, level)}
              icon={getSuctionLevelIcon(level)}
              disabled={isSuctionDisabled}
            />
            <span className="cleaning-mode-modal__power-label">{getSuctionLevelFriendlyName(level, t)}</span>
          </div>
        ))}
      </div>

      {!hideMaxPower && (
        <div className="cleaning-mode-modal__max-plus">
          <div className="cleaning-mode-modal__max-plus-header">
            <span className="cleaning-mode-modal__max-plus-title">Max+</span>
            <Toggle
              checked={maxSuctionPower}
              disabled={maxPowerDisabled}
              onChange={(checked) => onToggleMaxPower(maxSuctionPowerEntityId, checked)}
            />
          </div>
          <p className="cleaning-mode-modal__max-plus-description">{maxPlusDescription}</p>
        </div>
      )}
    </>
  );
}
