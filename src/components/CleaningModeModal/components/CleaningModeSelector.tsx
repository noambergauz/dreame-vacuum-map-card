import { CircularButton } from '@/components/common';
import { getCleaningModeFriendlyName, getCleaningModeIcon } from '@/utils';
import { CUSTOMIZE_MODE_OPTION } from '@/constants';

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
    ? cleaningModeList.filter((mode) => mode !== CUSTOMIZE_MODE_OPTION)
    : cleaningModeList;

  return (
    <div className={`cleaning-mode-modal__power-grid ${disabled ? 'cleaning-mode-modal__power-grid--disabled' : ''}`}>
      {filteredModeList.map((mode) => {
        const isSelected =
          mode === CUSTOMIZE_MODE_OPTION ? customizeSelected : mode === cleaningMode && !customizeSelected;

        return (
          <div key={mode} className="cleaning-mode-modal__mode-option">
            <CircularButton
              size="small"
              selected={isSelected}
              onClick={() => {
                if (disabled) return;
                onSelect(entityId, mode);
              }}
              icon={getCleaningModeIcon(mode)}
            />
            <span className="cleaning-mode-modal__mode-option-label">{getCleaningModeFriendlyName(mode, t)}</span>
          </div>
        );
      })}
    </div>
  );
}
