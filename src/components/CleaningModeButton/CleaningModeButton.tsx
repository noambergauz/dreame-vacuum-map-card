import './CleaningModeButton.scss';
import { useTranslation } from '../../hooks/useTranslation';
import type { SupportedLanguage } from '../../i18n/locales';

interface CleaningModeButtonProps {
  cleaningMode: string;
  cleanGeniusMode: string;
  cleangenius: string;
  onClick: () => void;
  onShortcutsClick?: () => void;
  disabled?: boolean;
  language?: SupportedLanguage;
}

export function CleaningModeButton({ cleaningMode, cleanGeniusMode, cleangenius, onClick, onShortcutsClick, disabled = false, language }: CleaningModeButtonProps) {
  const { t } = useTranslation(language);
  const getIcon = (mode: string): string => {
    if (mode.includes('Sweep') && mode.includes('Mop')) return '🔄';
    if (mode.includes('after')) return '➜';
    if (mode.includes('Mop')) return '💧';
    if (mode.includes('Sweep') || mode.includes('Vacuum')) return '🌀';
    return '⚙️';
  };

  const getCleanGeniusFriendlyName = (mode: string): string => {
    if (mode === 'Vacuum and mop') return t('cleaning_mode_button.vac_and_mop');
    if (mode === 'Mop after vacuum') return t('cleaning_mode_button.mop_after_vac');
    return "";
  };

  const getCustomCleaningFriendlyName = (mode: string): string => {
    if (mode === 'Mopping after sweeping') return t('cleaning_mode_button.mop_after_vac');
    if (mode === 'Sweeping and mopping') return t('cleaning_mode_button.vac_and_mop');
    if (mode === 'Sweeping') return t('cleaning_mode_button.vacuum');
    if (mode === 'Mopping') return t('cleaning_mode_button.mop');
    return "";
  };

  const getPrefix = (): string => {
    return cleangenius === 'Off' ? t('cleaning_mode_button.prefix_custom') : t('cleaning_mode_button.prefix_cleangenius');
  };

  const handleShortcutsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onShortcutsClick?.();
  };

  return (
    <div className="cleaning-mode-button-wrapper">
      <button 
        onClick={onClick} 
        className={`cleaning-mode-button ${disabled ? 'cleaning-mode-button--disabled' : ''}`}
        disabled={disabled}
      >
        <div className="cleaning-mode-button__content">
          <span className="cleaning-mode-button__icon">{getIcon(cleaningMode)}</span>
          <span className="cleaning-mode-button__text">
            {getPrefix()}{cleangenius === "Off" ? getCustomCleaningFriendlyName(cleaningMode) : getCleanGeniusFriendlyName(cleanGeniusMode)}
          </span>
        </div>
        <span className="cleaning-mode-button__arrow">›</span>
      </button>
      {cleangenius === 'Off' && onShortcutsClick && (
        <button
          className="cleaning-mode-button-wrapper__shortcuts"
          onClick={handleShortcutsClick}
          title={t('cleaning_mode_button.view_shortcuts')}
          disabled={disabled}
        >
          ⚡
        </button>
      )}
    </div>
  );
}
