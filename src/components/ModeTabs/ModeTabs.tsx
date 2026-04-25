import type { CleaningSelectionMode } from '@/types/homeassistant';
import { useTranslation } from '@/hooks';
import { useMachineState } from '@/contexts';
import './ModeTabs.scss';

interface ModeTabsProps {
  selectedMode: CleaningSelectionMode;
  onModeChange: (mode: CleaningSelectionMode) => void;
}

export function ModeTabs({ selectedMode, onModeChange }: ModeTabsProps) {
  const { t } = useTranslation();
  const { phase } = useMachineState();

  const isDisabled = phase === 'cleaning' || phase === 'paused';

  const modes: { value: CleaningSelectionMode; label: string }[] = [
    { value: 'room', label: t('modes.room') },
    { value: 'all', label: t('modes.all') },
    { value: 'zone', label: t('modes.zone') },
  ];

  return (
    <div className={`mode-tabs ${isDisabled ? 'mode-tabs--disabled' : ''}`}>
      {modes.map((mode) => (
        <button
          key={mode.value}
          onClick={() => onModeChange(mode.value)}
          className={`mode-tabs__button ${selectedMode === mode.value ? 'mode-tabs__button--active' : ''}`}
          disabled={isDisabled}
        >
          {mode.label}
        </button>
      ))}
    </div>
  );
}
