import type { CleaningMode } from '../../types/homeassistant';
import type { SupportedLanguage } from '../../i18n/locales';
import { useTranslation } from '../../hooks';
import './ModeTabs.scss';

interface ModeTabsProps {
  selectedMode: CleaningMode;
  onModeChange: (mode: CleaningMode) => void;
  disabled?: boolean;
  language?: SupportedLanguage;
}

export function ModeTabs({ selectedMode, onModeChange, disabled = false, language = 'en' }: ModeTabsProps) {
  const { t } = useTranslation(language);
  
  const modes: { value: CleaningMode; label: string }[] = [
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
