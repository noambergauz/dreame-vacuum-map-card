import { CircularButton } from '@/components/common';
import type { VacuumCleaningMode } from '@/types/vacuum';
import { getCleaningModeIcon, convertCleaningModeToService, getCleaningModeFriendlyName } from '@/utils';
import { CLEANING_MODE } from '@/constants';

type TranslateFunction = (key: string, params?: Record<string, string | number>) => string;

interface CleaningModeSelectorProps {
  cleaningMode: string;
  cleaningModeList: string[];
  onSelect: (entityId: string, value: string) => void;
  entityId: string;
  t?: TranslateFunction;
  disabled?: boolean;
  customizeSelected?: boolean;
  /** When true, hides the Customize option (e.g., while vacuum is running) */
  hideCustomize?: boolean;
}

export function CleaningModeSelector({
  cleaningMode,
  cleaningModeList,
  onSelect,
  entityId,
  t,
  disabled = false,
  customizeSelected = false,
  hideCustomize = false,
}: CleaningModeSelectorProps) {
  // Filter out Customize option if hideCustomize is true
  const filteredModeList = hideCustomize
    ? cleaningModeList.filter((mode) => mode !== CLEANING_MODE.CUSTOMIZE)
    : cleaningModeList;

  return (
    <div className={`cleaning-mode-modal__power-grid ${disabled ? 'cleaning-mode-modal__power-grid--disabled' : ''}`}>
      {filteredModeList.map((mode, idx) => {
        const isSelected =
          mode === CLEANING_MODE.CUSTOMIZE ? customizeSelected : mode === cleaningMode && !customizeSelected;

        return (
          <div key={idx} className="cleaning-mode-modal__mode-option">
            <CircularButton
              size="small"
              selected={isSelected}
              onClick={() => {
                if (disabled) return;
                const value =
                  mode === CLEANING_MODE.CUSTOMIZE
                    ? CLEANING_MODE.CUSTOMIZE
                    : convertCleaningModeToService(mode as VacuumCleaningMode);
                onSelect(entityId, value);
              }}
              icon={getCleaningModeIcon(mode as VacuumCleaningMode)}
            />
            <span className="cleaning-mode-modal__mode-option-label">
              {getCleaningModeFriendlyName(mode as VacuumCleaningMode, t)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
