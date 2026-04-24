import { useTranslation } from '@/hooks';
import '../ActionButtons.scss';
import { DOCK_ICON_SVG } from '@/constants/icons';

interface DockButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export function DockButton({ onClick, disabled = false }: DockButtonProps) {
  const { t } = useTranslation();

  return (
    <button
      onClick={onClick}
      className={`action-buttons__dock ${disabled ? 'action-buttons__dock--disabled' : ''}`}
      disabled={disabled}
    >
      <span className="action-buttons__icon">{DOCK_ICON_SVG}</span>
      <span>{t('actions.dock')}</span>
    </button>
  );
}
