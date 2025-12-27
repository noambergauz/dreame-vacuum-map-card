import './CleaningModeButton.scss';

interface CleaningModeButtonProps {
  cleaningMode: string;
  cleanGeniusMode: string;
  cleangenius: string;
  onClick: () => void;
  onShortcutsClick?: () => void;
  disabled?: boolean;
}

export function CleaningModeButton({ cleaningMode, cleanGeniusMode, cleangenius, onClick, onShortcutsClick, disabled = false }: CleaningModeButtonProps) {
  const getIcon = (mode: string): string => {
    if (mode.includes('Sweep') && mode.includes('Mop')) return '🔄';
    if (mode.includes('after')) return '➜';
    if (mode.includes('Mop')) return '💧';
    if (mode.includes('Sweep') || mode.includes('Vacuum')) return '🌀';
    return '⚙️';
  };

  const getCleanGeniusFriendlyName = (mode: string): string => {
    if (mode === 'Vacuum and mop') return 'Vac & Mop';
    if (mode === 'Mop after vacuum') return 'Mop after Vac';
    return "";
  };

  const getCustomCleaningFriendlyName = (mode: string): string => {
    if (mode === 'Mopping after sweeping') return 'Mop after Vac';
    if (mode === 'Sweeping and mopping') return 'Vac & Mop';
    if (mode === 'Sweeping') return 'Vacuum';
    if (mode === 'Mopping') return 'Mop';
    return "";
  };

  const getPrefix = (): string => {
    return cleangenius === 'Off' ? 'Custom: ' : 'CleanGenius: ';
  };

  const handleShortcutsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onShortcutsClick?.();
  };

  return (
    <div className="cleaning-mode-button-wrapper">
      <button 
        onClick={onClick} 
        className={`cleaning-mode-button ${disabled ? 'cleaning-mode-button--disabled' : ''}`}
        disabled={disabled}
      >
        <div className="cleaning-mode-button__content">
          <span className="cleaning-mode-button__icon">{getIcon(cleaningMode)}</span>
          <span className="cleaning-mode-button__text">
            {getPrefix()}{cleangenius === "Off" ? getCustomCleaningFriendlyName(cleaningMode) : getCleanGeniusFriendlyName(cleanGeniusMode)}
          </span>
        </div>
        <span className="cleaning-mode-button__arrow">›</span>
      </button>
      {cleangenius === 'Off' && onShortcutsClick && (
        <button
          className="cleaning-mode-button-wrapper__shortcuts"
          onClick={handleShortcutsClick}
          title="View shortcuts"
          disabled={disabled}
        >
          ⚡
        </button>
      )}
    </div>
  );
}
