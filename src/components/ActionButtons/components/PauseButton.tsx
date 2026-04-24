import { useTranslation } from '@/hooks';
import '../ActionButtons.scss';
import { PAUSE_CLEANING_ICON_SVG } from '@/constants/icons';

interface PauseButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export function PauseButton({ onClick, disabled = false }: PauseButtonProps) {
  const { t } = useTranslation();

  return (
    <button
      onClick={onClick}
      className={`action-buttons__pause ${disabled ? 'action-buttons__pause--disabled' : ''}`}
      disabled={disabled}
    >
      <span className="action-buttons__icon">{PAUSE_CLEANING_ICON_SVG}</span>
      <span>{t('actions.pause')}</span>
    </button>
  );
}
