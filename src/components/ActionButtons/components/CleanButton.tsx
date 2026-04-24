import { START_CLEANING_ICON_SVG } from '@/constants/icons';
import '../ActionButtons.scss';

interface CleanButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
}

export function CleanButton({ onClick, text, disabled = false }: CleanButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`action-buttons__clean ${disabled ? 'action-buttons__clean--disabled' : ''}`}
      disabled={disabled}
    >
      <span className="action-buttons__icon">{START_CLEANING_ICON_SVG}</span>
      <span>{text}</span>
    </button>
  );
}
