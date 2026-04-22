import './CircularButton.scss';

interface CircularButtonProps {
  icon: React.ReactNode;
  label?: string;
  selected?: boolean;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  iconStyle?: React.CSSProperties;
  disabled?: boolean;
}

export function CircularButton({
  icon,
  label,
  selected = false,
  onClick,
  size = 'medium',
  iconStyle,
  disabled = false,
}: CircularButtonProps) {
  return (
    <div className={`circular-button ${disabled ? 'circular-button--disabled' : ''}`}>
      <button
        className={`circular-button__circle circular-button__circle--${size} ${
          selected ? 'circular-button__circle--selected' : ''
        }`}
        onClick={onClick}
        disabled={disabled}
      >
        {typeof icon === 'string' ? (
          <span className="circular-button__icon" style={iconStyle}>
            {icon}
          </span>
        ) : (
          icon
        )}
      </button>
      {label && <span className="circular-button__label">{label}</span>}
    </div>
  );
}
