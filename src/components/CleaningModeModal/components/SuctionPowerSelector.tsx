import { CircularButton, Toggle } from '@/components/common';
import type { SuctionLevel } from '@/types/vacuum';
import { getSuctionLevelIcon, convertToLowerCase, getSuctionLevelFriendlyName } from '@/utils';

type TranslateFunction = (key: string, params?: Record<string, string | number>) => string;

// Default suction levels to show when list is empty (e.g., when Max+ is enabled)
const DEFAULT_SUCTION_LEVELS = ['Quiet', 'Standard', 'Strong', 'Turbo'];

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
  // Use default list if current list is empty (happens when Max+ is enabled)
  const displayList = suctionLevelList.length > 0 ? suctionLevelList : DEFAULT_SUCTION_LEVELS;

  // Disable suction buttons when Max+ is enabled OR when explicitly disabled
  // Only consider maxSuctionPower if it's not hidden
  const isSuctionDisabled = suctionLevelDisabled || (!hideMaxPower && maxSuctionPower);

  return (
    <>
      <div
        className={`cleaning-mode-modal__power-grid ${isSuctionDisabled ? 'cleaning-mode-modal__power-grid--disabled' : ''}`}
      >
        {displayList.map((level, idx) => (
          <div key={idx} className="cleaning-mode-modal__power-option">
            <CircularButton
              size="small"
              selected={!maxSuctionPower && level === suctionLevel}
              onClick={() =>
                !isSuctionDisabled && onSelectSuctionLevel(suctionLevelEntityId, convertToLowerCase(level))
              }
              icon={getSuctionLevelIcon(level as SuctionLevel)}
              disabled={isSuctionDisabled}
            />
            <span className="cleaning-mode-modal__power-label">
              {getSuctionLevelFriendlyName(level as SuctionLevel, t)}
            </span>
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
