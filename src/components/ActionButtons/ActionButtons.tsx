import { useState } from 'react';
import type { AreaSelectionMode, CleaningSelectionMode, StopAction } from '@/types/homeassistant';
import { useTranslation, useButtonConfig } from '@/hooks';
import { useMachineState } from '@/contexts';
import { DockPopup } from '@/components/DockPopup';
import { shouldOpenDockPopup } from '@/utils/dockPopup';
import { CleanButton, PauseButton, ResumeButton, StopButton, DockButton } from './components';
import './ActionButtons.scss';

interface ActionButtonsProps {
  selectedMode: CleaningSelectionMode;
  areaSelectionMode: AreaSelectionMode;
  selectedRoomsCount: number;
  selectedSpotsCount: number;
  onClean: () => void;
  onPause: () => void;
  onResume: () => void;
  onStop: (action: StopAction) => void;
  onDock: () => void;
}

export function ActionButtons({
  selectedMode,
  areaSelectionMode,
  selectedRoomsCount,
  selectedSpotsCount,
  onClean,
  onPause,
  onResume,
  onStop,
  onDock,
}: ActionButtonsProps) {
  const { t, getRoomCountTranslation } = useTranslation();
  const { getStopAction } = useButtonConfig();
  const { phase, controls } = useMachineState();
  const [dockPopupOpened, setDockPopupOpened] = useState(false);

  const stopAction = getStopAction();
  const opensDockPopup = shouldOpenDockPopup(phase);

  const getCleanButtonText = (): string => {
    switch (selectedMode) {
      case 'room':
        return getRoomCountTranslation(selectedRoomsCount);
      case 'all':
        return t('actions.clean_all');
      case 'zone':
        return t(areaSelectionMode === 'spot' ? 'actions.spot_clean' : 'actions.zone_clean');
      default:
        return t('actions.clean');
    }
  };

  const handleStop = () => onStop(stopAction);
  const hasRequiredSelection = selectedMode !== 'zone' || areaSelectionMode !== 'spot' || selectedSpotsCount > 0;
  const handleDockClick = (): void => {
    if (opensDockPopup) {
      setDockPopupOpened(true);
      return;
    }
    onDock();
  };

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
    <>
      <div className="action-buttons">
        <CleanButton
          onClick={onClean}
          text={getCleanButtonText()}
          disabled={!controls.canStartCleaning || !hasRequiredSelection}
        />
        <DockButton onClick={handleDockClick} disabled={!controls.canDock && !opensDockPopup} />
      </div>
      <DockPopup opened={dockPopupOpened} onClose={() => setDockPopupOpened(false)} />
    </>
  );
}
