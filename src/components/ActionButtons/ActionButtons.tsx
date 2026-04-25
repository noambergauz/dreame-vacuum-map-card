import type { CleaningSelectionMode, StopAction } from '@/types/homeassistant';
import { useTranslation, useButtonConfig } from '@/hooks';
import { useMachineState } from '@/contexts';
import { CleanButton, PauseButton, ResumeButton, StopButton, DockButton } from './components';
import './ActionButtons.scss';

interface ActionButtonsProps {
  selectedMode: CleaningSelectionMode;
  selectedRoomsCount: number;
  onClean: () => void;
  onPause: () => void;
  onResume: () => void;
  onStop: (action: StopAction) => void;
  onDock: () => void;
}

export function ActionButtons({
  selectedMode,
  selectedRoomsCount,
  onClean,
  onPause,
  onResume,
  onStop,
  onDock,
}: ActionButtonsProps) {
  const { t, getRoomCountTranslation } = useTranslation();
  const { getStopAction } = useButtonConfig();
  const { phase, controls } = useMachineState();

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

  const handleStop = () => onStop(stopAction);

  if (phase === 'cleaning') {
    return (
      <div className="action-buttons">
        <PauseButton onClick={onPause} disabled={!controls.canPause} />
        <StopButton onClick={handleStop} action={stopAction} disabled={!controls.canStop} />
      </div>
    );
  }

  if (phase === 'paused') {
    return (
      <div className="action-buttons">
        <ResumeButton onClick={onResume} disabled={!controls.canResume} />
        <StopButton onClick={handleStop} action={stopAction} disabled={!controls.canStop} />
      </div>
    );
  }

  return (
    <div className="action-buttons">
      <CleanButton onClick={onClean} text={getCleanButtonText()} disabled={!controls.canStartCleaning} />
      <DockButton onClick={onDock} disabled={!controls.canDock} />
    </div>
  );
}
