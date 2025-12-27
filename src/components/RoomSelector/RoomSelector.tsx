/// <reference path="../../types/custom-elements.d.ts" />
import type { RoomPosition } from '../../types/homeassistant';
import './RoomSelector.scss';
import React from 'react';

interface RoomSelectorProps {
  rooms: RoomPosition[];
  selectedRooms: Map<number, string>;
  onRoomToggle: (roomId: number, roomName: string) => void;
}

export function RoomSelector({ rooms, selectedRooms, onRoomToggle }: RoomSelectorProps) {
  return (
    <div className="room-selector">
      <div className="room-selector__header">
        <span className="room-selector__title">Select Rooms</span>
        {selectedRooms.size > 0 && (
          <span className="room-selector__count">{selectedRooms.size} selected</span>
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
