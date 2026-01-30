/// <reference path="../../types/custom-elements.d.ts" />
import type { RoomPosition } from '../../types/homeassistant';
import type { SupportedLanguage } from '../../i18n/locales';
import { useTranslation } from '../../hooks';
import './RoomSelector.scss';
import React from 'react';

interface RoomSelectorProps {
  rooms: RoomPosition[];
  selectedRooms: Map<number, string>;
  onRoomToggle: (roomId: number, roomName: string) => void;
  language?: SupportedLanguage;
}

export function RoomSelector({ rooms, selectedRooms, onRoomToggle, language = 'en' }: RoomSelectorProps) {
  const { t } = useTranslation(language);

  return (
    <div className="room-selector">
      <div className="room-selector__header">
        <span className="room-selector__title">{t('room_selector.title')}</span>
        {selectedRooms.size > 0 && (
          <span className="room-selector__count">{t('room_selector.selected_count', { count: String(selectedRooms.size) })}</span>
        )}
      </div>
      
      <div className="room-selector__list">
        {rooms.map((room) => {
          const isSelected = selectedRooms.has(room.id);
          return (
            <button
              key={room.id}
              className={`room-selector__item ${isSelected ? 'room-selector__item--selected' : ''}`}
              onClick={() => onRoomToggle(room.id, room.name)}
            >
              {room.icon && React.createElement('ha-icon', {
                class: 'room-selector__icon',
                icon: room.icon
              })}
              <span className="room-selector__name">{room.name}</span>
              {isSelected && <span className="room-selector__check">✓</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
