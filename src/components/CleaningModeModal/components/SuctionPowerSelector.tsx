import { useEffect, useRef } from 'react';
import { CircularButton, Toggle } from '@/components/common';
import { getSuctionLevelFriendlyName, getSuctionLevelIcon } from '@/utils';

type TranslateFunction = (key: string, params?: Record<string, string | number>) => string;

interface SuctionPowerSelectorProps {
  suctionLevel: string;
  suctionLevelList: string[];
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
  const cachedSuctionLevels = useRef<string[]>([]);
  useEffect(() => {
    if (suctionLevelList.length > 0) {
      cachedSuctionLevels.current = suctionLevelList;
    }
  }, [suctionLevelList]);

  // Max+ temporarily replaces the entity options with a placeholder on some devices.
  let displayList = suctionLevelList;
  if (displayList.length === 0) {
    // Entity prop changes drive rendering; the ref only retains the last published options.
    // eslint-disable-next-line react-hooks/refs
    displayList = maxSuctionPower ? cachedSuctionLevels.current : [];
  }

  // Disable suction buttons when Max+ is enabled OR when explicitly disabled
  // Only consider maxSuctionPower if it's not hidden
  const isSuctionDisabled = suctionLevelDisabled || (!hideMaxPower && maxSuctionPower);

  return (
    <>
      <div
        className={`cleaning-mode-modal__power-grid ${isSuctionDisabled ? 'cleaning-mode-modal__power-grid--disabled' : ''}`}
      >
        {displayList.map((level) => (
          <div key={level} className="cleaning-mode-modal__power-option">
            <CircularButton
              size="small"
              selected={!maxSuctionPower && level === suctionLevel}
              onClick={() => !isSuctionDisabled && onSelectSuctionLevel(suctionLevelEntityId, level)}
              icon={getSuctionLevelIcon(level)}
              disabled={isSuctionDisabled}
            />
            <span className="cleaning-mode-modal__power-label">{getSuctionLevelFriendlyName(level, t)}</span>
          </div>
        ))}
      </div>

      {/* Max+ toggle - only show if capability is supported */}
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
