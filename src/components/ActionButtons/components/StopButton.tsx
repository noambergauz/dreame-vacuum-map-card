import { useTranslation } from '../../../hooks';
import '../ActionButtons.scss';
import { STOP_CLEANING_ICON_SVG } from '../../../constants/icons';

interface StopButtonProps {
  onClick: () => void;
}

export function StopButton({ onClick }: StopButtonProps) {
  const { t } = useTranslation();

  return (
    <button onClick={onClick} className="action-buttons__stop">
      <span className="action-buttons__icon">{STOP_CLEANING_ICON_SVG}</span>
      <span>{t('actions.stop')}</span>
    </button>
  );
}
