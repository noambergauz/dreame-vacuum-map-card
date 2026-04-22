import { useTranslation } from '@/hooks';
import type { StopAction } from '@/types/homeassistant';
import '../ActionButtons.scss';
import { STOP_CLEANING_ICON_SVG } from '@/constants/icons';

interface StopButtonProps {
  onClick: () => void;
  action: StopAction;
}

export function StopButton({ onClick, action }: StopButtonProps) {
  const { t } = useTranslation();
  const label = action === 'stop_and_dock' ? t('actions.stop_and_dock') : t('actions.stop');

  return (
    <button onClick={onClick} className="action-buttons__stop">
      <span className="action-buttons__icon">{STOP_CLEANING_ICON_SVG}</span>
      <span>{label}</span>
    </button>
  );
}
