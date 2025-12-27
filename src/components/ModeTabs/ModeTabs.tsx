import type { CleaningMode } from '../../types/homeassistant';
import './ModeTabs.scss';

interface ModeTabsProps {
  selectedMode: CleaningMode;
  onModeChange: (mode: CleaningMode) => void;
  disabled?: boolean;
}

export function ModeTabs({ selectedMode, onModeChange, disabled = false }: ModeTabsProps) {
  const modes: { value: CleaningMode; label: string }[] = [
    { value: 'room', label: 'Room' },
    { value: 'all', label: 'All' },
    { value: 'zone', label: 'Zone' },
  ];

  return (
    <div className={`mode-tabs ${disabled ? 'mode-tabs--disabled' : ''}`}>
      {modes.map((mode) => (
        <button
          key={mode.value}
          onClick={() => onModeChange(mode.value)}
          className={`mode-tabs__button ${
            selectedMode === mode.value ? 'mode-tabs__button--active' : ''
          }`}
          disabled={disabled}
        >
          {mode.label}
        </button>
      ))}
    </div>
  );
}
