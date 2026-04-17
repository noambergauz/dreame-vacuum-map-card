import { Check } from 'lucide-react';
import type { Room } from '../../types/homeassistant';
import { useTranslation } from '../../hooks';
import './RoomListView.scss';

interface RoomListViewProps {
  rooms: Room[];
  selectedRooms: Map<number, string>;
  onRoomToggle: (roomId: number, roomName: string) => void;
}

export function RoomListView({ rooms, selectedRooms, onRoomToggle }: RoomListViewProps) {
  const { t } = useTranslation();

  if (rooms.length === 0) {
    return (
      <div className="room-list-view">
        <div className="room-list-view__empty">{t('vacuum_map.no_rooms')}</div>
      </div>
    );
  }

  return (
    <div className="room-list-view">
      <div className="room-list-view__header">{t('vacuum_map.room_list_overlay')}</div>
      <div className="room-list-view__list">
        {rooms.map((room) => {
          const isSelected = selectedRooms.has(room.id);
          return (
            <button
              key={room.id}
              className={`room-list-view__item ${isSelected ? 'room-list-view__item--selected' : ''}`}
              onClick={() => onRoomToggle(room.id, room.name)}
            >
              <span className="room-list-view__item-name">{room.name}</span>
              <span className="room-list-view__item-check">{isSelected && <Check size={18} />}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
