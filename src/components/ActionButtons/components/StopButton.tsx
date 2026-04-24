import { useTranslation } from '@/hooks';
import type { StopAction } from '@/types/homeassistant';
import '../ActionButtons.scss';
import { STOP_CLEANING_ICON_SVG } from '@/constants/icons';

interface StopButtonProps {
  onClick: () => void;
  action: StopAction;
  disabled?: boolean;
}

export function StopButton({ onClick, action, disabled = false }: StopButtonProps) {
  const { t } = useTranslation();
  const label = action === 'stop_and_dock' ? t('actions.stop_and_dock') : t('actions.stop');

  return (
    <button
      onClick={onClick}
      className={`action-buttons__stop ${disabled ? 'action-buttons__stop--disabled' : ''}`}
      disabled={disabled}
    >
      <span className="action-buttons__icon">{STOP_CLEANING_ICON_SVG}</span>
      <span>{label}</span>
    </button>
  );
}
