import { Clock } from 'lucide-react';
import { START_CLEANING_ICON_SVG } from '@/constants/icons';

interface CleanButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
  /** When set, a second segment opens the "Start after…" menu. */
  onDelayedClick?: () => void;
  delayedLabel?: string;
}

export function CleanButton({ onClick, text, disabled = false, onDelayedClick, delayedLabel }: CleanButtonProps) {
  const button = (
    <button
      onClick={onClick}
      className={`action-buttons__clean ${disabled ? 'action-buttons__clean--disabled' : ''}`}
      disabled={disabled}
    >
      <span className="action-buttons__icon">{START_CLEANING_ICON_SVG}</span>
      <span>{text}</span>
    </button>
  );

  if (!onDelayedClick) return button;

  return (
    <div className="action-buttons__clean-group">
      {button}
      <button
        type="button"
        onClick={onDelayedClick}
        className="action-buttons__clean-delayed"
        aria-label={delayedLabel}
        title={delayedLabel}
      >
        <Clock aria-hidden="true" />
      </button>
    </div>
  );
}
