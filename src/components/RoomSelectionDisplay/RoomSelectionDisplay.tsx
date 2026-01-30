import './RoomSelectionDisplay.scss';
import { useTranslation } from '../../hooks/useTranslation';
import type { SupportedLanguage } from '../../i18n/locales';

interface RoomSelectionDisplayProps {
  selectedRooms: Map<number, string>;
  language?: SupportedLanguage;
}

export function RoomSelectionDisplay({ selectedRooms, language }: RoomSelectionDisplayProps) {
  const { t } = useTranslation(language);
  
  if (selectedRooms.size === 0) {
    return null;
  }

  const roomNames = Array.from(selectedRooms.values()).join(', ');

  return (
    <div className="room-selection-display">
      <span className="room-selection-display__label">{t('room_display.selected_label')}</span>
      <span className="room-selection-display__rooms">{roomNames}</span>
    </div>
  );
}
