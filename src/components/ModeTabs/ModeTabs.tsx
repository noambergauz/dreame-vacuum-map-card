import type { CleaningSelectionMode } from '@/types/homeassistant';
import { useTranslation } from '@/hooks';
import './ModeTabs.scss';
import type { ReactElement } from 'react';

interface ModeTabsProps {
  selectedMode: CleaningSelectionMode;
  onModeChange: (mode: CleaningSelectionMode) => void;
  disabled?: boolean;
}

export function ModeTabs({ selectedMode, onModeChange, disabled = false }: ModeTabsProps) {
  const { t } = useTranslation();

  const modes: { value: CleaningSelectionMode; label: string; icon?: ReactElement }[] = [
    { value: 'room', label: t('modes.room') },
    { value: 'all', label: t('modes.all') },
    { value: 'zone', label: t('modes.zone') },
  ];

  return (
    <div className={`mode-tabs ${disabled ? 'mode-tabs--disabled' : ''}`}>
      {modes.map((mode) => (
        <button
          key={mode.value}
          onClick={() => onModeChange(mode.value)}
          className={`mode-tabs__button ${selectedMode === mode.value ? 'mode-tabs__button--active' : ''}`}
          disabled={disabled}
        >
          {mode.label}
          {mode.icon && <span className="mode-tabs__button-icon">{mode.icon}</span>}
        </button>
      ))}
    </div>
  );
}
