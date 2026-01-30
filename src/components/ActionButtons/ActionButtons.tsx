import type { CleaningMode } from '../../types/homeassistant';
import type { SupportedLanguage } from '../../i18n/locales';
import { useTranslation } from '../../hooks';
import { CleanButton, PauseButton, ResumeButton, StopButton, DockButton } from './components';
import './ActionButtons.scss';

interface ActionButtonsProps {
  selectedMode: CleaningMode;
  selectedRoomsCount: number;
  isRunning: boolean;
  isPaused: boolean;
  isDocked: boolean;
  onClean: () => void;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
  onDock: () => void;
  language?: SupportedLanguage;
}

export function ActionButtons({
  selectedMode,
  selectedRoomsCount,
  isRunning,
  isPaused,
  isDocked,
  onClean,
  onPause,
  onResume,
  onStop,
  onDock,
  language = 'en',
}: ActionButtonsProps) {
  const { t, getRoomCountTranslation } = useTranslation(language);

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

  // Running state - show pause and stop
  if (isRunning && !isPaused && !isDocked) {
    return (
      <div className="action-buttons">
        <PauseButton onClick={onPause} language={language} />
        <StopButton onClick={onStop} language={language} />
      </div>
    );
  }

  // Paused state - show resume and stop
  if (isPaused) {
    return (
      <div className="action-buttons">
        <ResumeButton onClick={onResume} language={language} />
        <StopButton onClick={onStop} language={language} />
      </div>
    );
  }

  // Idle/docked state - show clean and dock
  return (
    <div className="action-buttons">
      <CleanButton onClick={onClean} text={cleanButtonText} />
      <DockButton onClick={onDock} language={language} />
    </div>
  );
}
