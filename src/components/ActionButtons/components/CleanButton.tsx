import '../ActionButtons.scss';

interface CleanButtonProps {
  onClick: () => void;
  text: string;
}

export function CleanButton({ onClick, text }: CleanButtonProps) {
  return (
    <button onClick={onClick} className="action-buttons__clean">
      <span className="action-buttons__icon">▶️</span>
      <span>{text}</span>
    </button>
  );
}
