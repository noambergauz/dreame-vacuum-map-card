import { useTranslation } from '../../../hooks';
import '../ActionButtons.scss';
import { RESUME_CLEANING_ICON_SVG } from '../../../constants/icons';

interface ResumeButtonProps {
  onClick: () => void;
}

export function ResumeButton({ onClick }: ResumeButtonProps) {
  const { t } = useTranslation();

  return (
    <button onClick={onClick} className="action-buttons__resume">
      <span className="action-buttons__icon">{RESUME_CLEANING_ICON_SVG}</span>
      <span>{t('actions.resume')}</span>
    </button>
  );
}
