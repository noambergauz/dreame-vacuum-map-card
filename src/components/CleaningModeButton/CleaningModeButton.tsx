import './CleaningModeButton.scss';
import { useTranslation } from '../../hooks/useTranslation';
import {
  SHORTCUTS_ICON_SVG,
  VACUUM_MOP_ICON_SVG,
  VACUUM_ICON_SVG,
  MOP_ICON_SVG,
  MOP_AFTER_VACUUM_ICON_SVG,
} from '../../constants/icons';
import type { ReactElement } from 'react';
import { CLEANGENIUS_MODE, CLEANING_MODE } from '../../constants';

interface CleaningModeButtonProps {
  cleaningMode: string;
  cleanGeniusMode: string;
  cleangenius: string;
  onClick: () => void;
  onShortcutsClick?: () => void;
  disabled?: boolean;
}

export function CleaningModeButton({
  cleaningMode,
  cleanGeniusMode,
  cleangenius,
  onClick,
  onShortcutsClick,
  disabled = false,
}: CleaningModeButtonProps) {
  const { t } = useTranslation();
  const getIcon = (mode: string): ReactElement => {
    if (mode === CLEANING_MODE.SWEEPING) {
      return VACUUM_ICON_SVG;
    }

    if (mode === CLEANING_MODE.MOPPING) {
      return MOP_ICON_SVG;
    }

    if (mode === CLEANING_MODE.SWEEPING_AND_MOPPING) {
      return VACUUM_MOP_ICON_SVG;
    }

    if (mode === CLEANING_MODE.MOPPING_AFTER_SWEEPING) {
      return MOP_AFTER_VACUUM_ICON_SVG;
    }

    return VACUUM_MOP_ICON_SVG;
  };

  const getCleanGeniusFriendlyName = (mode: string): string => {
    if (mode === CLEANGENIUS_MODE.VACUUM_AND_MOP) return t('cleaning_mode_button.vac_and_mop');
    if (mode === CLEANGENIUS_MODE.MOP_AFTER_VACUUM) return t('cleaning_mode_button.mop_after_vac');
    return '';
  };

  const getCustomCleaningFriendlyName = (mode: string): string => {
    if (mode === CLEANING_MODE.MOPPING_AFTER_SWEEPING) return t('cleaning_mode_button.mop_after_vac');
    if (mode === CLEANING_MODE.SWEEPING_AND_MOPPING) return t('cleaning_mode_button.vac_and_mop');
    if (mode === CLEANING_MODE.SWEEPING) return t('cleaning_mode_button.vacuum');
    if (mode === CLEANING_MODE.MOPPING) return t('cleaning_mode_button.mop');
    return '';
  };

  const getPrefix = (): string => {
    return cleangenius === 'Off'
      ? t('cleaning_mode_button.prefix_custom')
      : t('cleaning_mode_button.prefix_cleangenius');
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
            {getPrefix()}
            {cleangenius === 'Off'
              ? getCustomCleaningFriendlyName(cleaningMode)
              : getCleanGeniusFriendlyName(cleanGeniusMode)}
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
          {SHORTCUTS_ICON_SVG}
        </button>
      )}
    </div>
  );
}
