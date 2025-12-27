import type { CleaningMode } from '../../types/homeassistant';
import './ActionButtons.scss';

interface ActionButtonsProps {
  selectedMode: CleaningMode;
  selectedRoomsCount: number;
  isRunning: boolean;
  isPaused: boolean;
  onClean: () => void;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
  onDock: () => void;
}

export function ActionButtons({
  selectedMode,
  selectedRoomsCount,
  isRunning,
  isPaused,
  onClean,
  onPause,
  onResume,
  onStop,
  onDock,
}: ActionButtonsProps) {
  const getCleanButtonText = () => {
    switch (selectedMode) {
      case 'room':
        return selectedRoomsCount > 0
          ? `Clean ${selectedRoomsCount} Room${selectedRoomsCount > 1 ? 's' : ''}`
          : 'Select Rooms';
      case 'all':
        return 'Clean All';
      case 'zone':
        return 'Zone Clean';
      default:
        return 'Clean';
    }
  };

  if (isRunning && !isPaused) {
    return (
      <div className="action-buttons">
        <button onClick={onPause} className="action-buttons__pause">
          <span className="action-buttons__icon">⏸️</span>
          <span>Pause</span>
        </button>
        <button onClick={onStop} className="action-buttons__stop">
          <span className="action-buttons__icon">⏹️</span>
          <span>End</span>
        </button>
      </div>
    );
  }

  if (isPaused) {
    return (
      <div className="action-buttons">
        <button onClick={onResume} className="action-buttons__resume">
          <span className="action-buttons__icon">▶️</span>
          <span>Resume</span>
        </button>
        <button onClick={onStop} className="action-buttons__stop">
          <span className="action-buttons__icon">⏹️</span>
          <span>Stop</span>
        </button>
      </div>
    );
  }

  return (
    <div className="action-buttons">
      <button onClick={onClean} className="action-buttons__clean">
        <span className="action-buttons__icon">▶️</span>
        <span>{getCleanButtonText()}</span>
      </button>
      <button onClick={onDock} className="action-buttons__dock">
        <span className="action-buttons__icon">🏠</span>
        <span>Dock</span>
      </button>
    </div>
  );
}
