import './CircularButton.scss';

interface CircularButtonProps {
  icon: string | React.ReactNode;
  label?: string;
  selected?: boolean;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  iconStyle?: React.CSSProperties;
}

export function CircularButton({ 
  icon, 
  label, 
  selected = false, 
  onClick,
  size = 'medium',
  iconStyle = {}
}: CircularButtonProps) {
  const isSvg = typeof icon === 'string' && icon.trim().startsWith('<svg');
  
  return (
    <div className="circular-button">
      <button
        className={`circular-button__circle circular-button__circle--${size} ${
          selected ? 'circular-button__circle--selected' : ''
        }`}
        onClick={onClick}
      >
        {typeof icon === 'string' ? (
          isSvg ? (
            <span 
              className="circular-button__icon circular-button__icon--svg" 
              dangerouslySetInnerHTML={{ __html: icon }}
            />
          ) : (
            <span className="circular-button__icon" style={iconStyle}>{icon}</span>
          )
        ) : (
          icon
        )}
      </button>
      {label && <span className="circular-button__label">{label}</span>}
    </div>
  );
}
