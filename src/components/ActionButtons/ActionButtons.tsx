import { useState } from 'react';
import { Hourglass } from 'lucide-react';
import type { AreaSelectionMode, CleaningSelectionMode, StopAction } from '@/types/homeassistant';
import { useTranslation, useButtonConfig, type DelayedStartState } from '@/hooks';
import type { DelayedStartRequest } from '@/utils/delayedStart';
import { useEntity, useMachineState } from '@/contexts';
import { DockPopup } from '@/components/DockPopup';
import { shouldOpenDockPopup } from '@/utils/dockPopup';
import { CleanButton, PauseButton, ResumeButton, StopButton, DockButton, DelayedStartModal } from './components';

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
  delayedStart?: DelayedStartState;
  onDelayedStart?: (request: DelayedStartRequest) => Promise<boolean>;
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
  delayedStart,
  onDelayedStart,
}: ActionButtonsProps) {
  const { t, getRoomCountTranslation } = useTranslation();
  const { getStopAction } = useButtonConfig();
  const entity = useEntity();
  const { phase, controls } = useMachineState();
  const [dockPopupOpened, setDockPopupOpened] = useState(false);
  const [delayedModalOpened, setDelayedModalOpened] = useState(false);
  const delayedEnabled = Boolean(delayedStart?.enabled && onDelayedStart);

  const pendingBanner = delayedStart?.pending ? (
    <div className="action-buttons__pending" role="status">
      <Hourglass className="action-buttons__pending-icon" aria-hidden="true" />
      <span className="action-buttons__pending-text">
        {delayedStart.pendingLabel
          ? t('delayed_start.pending', { label: delayedStart.pendingLabel })
          : t('delayed_start.pending_generic')}
      </span>
      <button type="button" className="action-buttons__pending-cancel" onClick={() => void delayedStart.cancel()}>
        {t('common.cancel')}
      </button>
    </div>
  ) : null;

  const stopAction = getStopAction();
  const opensDockPopup = shouldOpenDockPopup(phase, entity.state);

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
      <>
        {pendingBanner}
        <div className="action-buttons">
          <PauseButton onClick={onPause} disabled={!controls.canPause} />
          <StopButton onClick={handleStop} action={stopAction} disabled={!controls.canStop} />
        </div>
      </>
    );
  }

  if (phase === 'paused') {
    return (
      <>
        {pendingBanner}
        <div className="action-buttons">
          <ResumeButton onClick={onResume} disabled={!controls.canResume} />
          <StopButton onClick={handleStop} action={stopAction} disabled={!controls.canStop} />
        </div>
      </>
    );
  }

  return (
    <>
      {pendingBanner}
      <div className="action-buttons">
        <CleanButton
          onClick={onClean}
          text={getCleanButtonText()}
          disabled={!controls.canStartCleaning || !hasRequiredSelection}
          onDelayedClick={delayedEnabled ? () => setDelayedModalOpened(true) : undefined}
          delayedLabel={t('delayed_start.title')}
        />
        <DockButton onClick={handleDockClick} disabled={!controls.canDock && !opensDockPopup} />
      </div>
      <DockPopup opened={dockPopupOpened} onClose={() => setDockPopupOpened(false)} />
      {delayedStart && onDelayedStart && (
        <DelayedStartModal
          opened={delayedModalOpened}
          onClose={() => setDelayedModalOpened(false)}
          triggers={delayedStart.triggers}
          allowTime={delayedStart.allowTime}
          script={delayedStart.script}
          scriptAvailable={delayedStart.scriptAvailable}
          onSchedule={onDelayedStart}
        />
      )}
    </>
  );
}
