import { useState, useEffect } from 'react';
import { CircularButton } from '../../common';
import type { CleaningMode } from '../../../types/vacuum';
import { getCleaningModeIcon, convertCleaningModeToService, getCleaningModeFriendlyName } from '../../../utils';

type TranslateFunction = (key: string, params?: Record<string, string | number>) => string;

interface CleaningModeSelectorProps {
  cleaningMode: string;
  cleaningModeList: string[];
  onSelect: (entityId: string, value: string) => void;
  entityId: string;
  t?: TranslateFunction;
}

export function CleaningModeSelector({
  cleaningMode,
  cleaningModeList,
  onSelect,
  entityId,
  t,
}: CleaningModeSelectorProps) {
  const [localMode, setLocalMode] = useState(cleaningMode);

  useEffect(() => {
    setLocalMode(cleaningMode);
  }, [cleaningMode]);

  const handleSelect = (mode: string) => {
    setLocalMode(mode);
    onSelect(entityId, convertCleaningModeToService(mode as CleaningMode));
  };

  return (
    <div className="cleaning-mode-modal__power-grid">
      {cleaningModeList.map((mode, idx) => (
        <div key={idx} className="cleaning-mode-modal__mode-option">
          <CircularButton
            size="small"
            selected={mode === localMode}
            onClick={() => handleSelect(mode)}
            icon={getCleaningModeIcon(mode as CleaningMode)}
          />
          <span className="cleaning-mode-modal__mode-option-label">
            {getCleaningModeFriendlyName(mode as CleaningMode, t)}
          </span>
        </div>
      ))}
    </div>
  );
}
