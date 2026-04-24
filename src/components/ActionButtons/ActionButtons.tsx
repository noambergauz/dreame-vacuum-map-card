import type { CleaningSelectionMode, StopAction } from '@/types/homeassistant';
import { useTranslation, useButtonConfig } from '@/hooks';
import { CleanButton, PauseButton, ResumeButton, StopButton, DockButton } from './components';
import './ActionButtons.scss';

interface ActionButtonsProps {
  selectedMode: CleaningSelectionMode;
  selectedRoomsCount: number;
  isCleaning: boolean;
  isPaused: boolean;
  isDocked: boolean;
  onClean: () => void;
  onPause: () => void;
  onResume: () => void;
  onStop: (action: StopAction) => void;
  onDock: () => void;
}

export function ActionButtons({
  selectedMode,
  selectedRoomsCount,
  isCleaning,
  isPaused,
  isDocked,
  onClean,
  onPause,
  onResume,
  onStop,
  onDock,
}: ActionButtonsProps) {
  const { t, getRoomCountTranslation } = useTranslation();
  const { getStopAction } = useButtonConfig();
  const stopAction = getStopAction();

  const getCleanButtonText = (): string => {
    switch (selectedMode) {
      case 'room':
        return getRoomCountTranslation(selectedRoomsCount);
      case 'all':
        return t('actions.clean_all');
      case 'zone':
        return t('actions.zone_clean');
      default:
        return t('actions.clean');
    }
  };

  const cleanButtonText = getCleanButtonText();

  const handleStop = () => onStop(stopAction);

  // Cleaning state - show pause and stop
  if (isCleaning && !isPaused && !isDocked) {
    return (
      <div className="action-buttons">
        <PauseButton onClick={onPause} />
        <StopButton onClick={handleStop} action={stopAction} />
      </div>
    );
  }

  // Paused state - show resume and stop
  if (isPaused) {
    return (
      <div className="action-buttons">
        <ResumeButton onClick={onResume} />
        <StopButton onClick={handleStop} action={stopAction} />
      </div>
    );
  }

  // Idle/docked state - show clean and dock
  return (
    <div className="action-buttons">
      <CleanButton onClick={onClean} text={cleanButtonText} />
      <DockButton onClick={onDock} />
    </div>
  );
}
