import { CircularButton, Toggle } from '@/components/common';
import type { SuctionLevel } from '@/types/vacuum';
import { getSuctionLevelIcon, convertToLowerCase, getSuctionLevelFriendlyName } from '@/utils';

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
}: SuctionPowerSelectorProps) {
  return (
    <>
      <div className="cleaning-mode-modal__power-grid">
        {suctionLevelList.map((level, idx) => (
          <div key={idx} className="cleaning-mode-modal__power-option">
            <CircularButton
              size="small"
              selected={level === suctionLevel}
              onClick={() => onSelectSuctionLevel(suctionLevelEntityId, convertToLowerCase(level))}
              icon={getSuctionLevelIcon(level as SuctionLevel)}
            />
            <span className="cleaning-mode-modal__power-label">
              {getSuctionLevelFriendlyName(level as SuctionLevel, t)}
            </span>
          </div>
        ))}
      </div>

      {/* Max+ toggle */}
      <div className="cleaning-mode-modal__max-plus">
        <div className="cleaning-mode-modal__max-plus-header">
          <span className="cleaning-mode-modal__max-plus-title">Max+</span>
          <Toggle
            checked={maxSuctionPower}
            onChange={(checked) => onToggleMaxPower(maxSuctionPowerEntityId, checked)}
          />
        </div>
        <p className="cleaning-mode-modal__max-plus-description">{maxPlusDescription}</p>
      </div>
    </>
  );
}
