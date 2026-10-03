import './CleaningModeButton.scss';
import { useTranslation } from '@/hooks/useTranslation';
import { useMachineState } from '@/contexts';
import { SHORTCUTS_ICON_SVG, VACUUM_MOP_ICON_SVG, CUSTOMIZE_ICON_SVG } from '@/constants/icons';
import type { RepeatCount } from '@/hooks/useCardUIState';
import {
  getCleaningModeIcon,
  getCleaningModeFriendlyName,
  getCleanGeniusModeFriendlyName,
  selectOptionKey,
} from '@/utils';

interface CleaningModeButtonProps {
  cleaningMode: string;
  cleanGeniusMode: string;
  cleangenius: string;
  onClick: () => void;
  onShortcutsClick?: () => void;
  onRepeatClick?: () => void;
  repeatCount?: RepeatCount;
}

export function CleaningModeButton({
  cleaningMode,
  cleanGeniusMode,
  cleangenius,
  onClick,
  onShortcutsClick,
  onRepeatClick,
  repeatCount = 1,
}: CleaningModeButtonProps) {
  const { t } = useTranslation();
  const { phase, isCustomizedCleaning } = useMachineState();

  const isInCleaningSession = phase === 'cleaning' || phase === 'paused';
  const secondaryDisabled = isInCleaningSession || isCustomizedCleaning;
  const isCleanGenius = selectOptionKey(cleangenius) !== 'off';

  const getIcon = (mode: string) => {
    if (isCustomizedCleaning) {
      return CUSTOMIZE_ICON_SVG;
    }
    return getCleaningModeIcon(mode) || VACUUM_MOP_ICON_SVG;
  };

  const getCleanGeniusFriendlyName = (mode: string): string => {
    return getCleanGeniusModeFriendlyName(mode, t);
  };

  const getCustomCleaningFriendlyName = (mode: string): string => {
    if (isCustomizedCleaning) return t('customize.title');
    return getCleaningModeFriendlyName(mode, t);
  };

  const getPrefix = (): string => {
    return isCleanGenius ? t('cleaning_mode_button.prefix_cleangenius') : t('cleaning_mode_button.prefix_custom');
  };

  const handleShortcutsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onShortcutsClick?.();
  };

  const handleRepeatClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRepeatClick?.();
  };

  return (
    <div className="cleaning-mode-button-wrapper">
      <button onClick={onClick} className="cleaning-mode-button">
        <div className="cleaning-mode-button__content">
          <span className="cleaning-mode-button__icon">{getIcon(cleaningMode)}</span>
          <span className="cleaning-mode-button__text">
            {getPrefix()}
            {isCleanGenius ? getCleanGeniusFriendlyName(cleanGeniusMode) : getCustomCleaningFriendlyName(cleaningMode)}
          </span>
        </div>
        <span className="cleaning-mode-button__arrow">›</span>
      </button>
      {onRepeatClick && (
        <button
          className={`cleaning-mode-button-wrapper__repeats ${secondaryDisabled ? 'cleaning-mode-button-wrapper__repeats--disabled' : ''}`}
          onClick={handleRepeatClick}
          title={t('cleaning_mode_button.repeats_tooltip')}
          disabled={secondaryDisabled}
        >
          x{repeatCount}
        </button>
      )}
      {!isCleanGenius && onShortcutsClick && (
        <button
          className={`cleaning-mode-button-wrapper__shortcuts ${secondaryDisabled ? 'cleaning-mode-button-wrapper__shortcuts--disabled' : ''}`}
          onClick={handleShortcutsClick}
          title={t('cleaning_mode_button.view_shortcuts')}
          disabled={secondaryDisabled}
        >
          {SHORTCUTS_ICON_SVG}
        </button>
      )}
    </div>
  );
}
