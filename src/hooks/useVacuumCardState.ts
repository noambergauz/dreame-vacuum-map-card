import { useState, useCallback } from 'react';
import type { CleaningMode, Zone } from '../types/homeassistant';

/**
 * Hook to manage vacuum card UI state
 */
export function useVacuumCardState() {
  const [selectedMode, setSelectedMode] = useState<CleaningMode>('all');
  const [selectedRooms, setSelectedRooms] = useState<Map<number, string>>(new Map());
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const [modalOpened, setModalOpened] = useState(false);
  const [shortcutsModalOpened, setShortcutsModalOpened] = useState(false);

  const handleModeChange = useCallback((mode: CleaningMode) => {
    setSelectedMode(mode);
    setSelectedRooms(new Map());
    setSelectedZone(null);
  }, []);

  const handleRoomToggle = useCallback((roomId: number, roomName: string) => {
    setSelectedRooms((prevSelected) => {
      const newSelected = new Map(prevSelected);
      if (newSelected.has(roomId)) {
        newSelected.delete(roomId);
      } else {
        newSelected.set(roomId, roomName);
      }
      return newSelected;
    });
    return selectedRooms.has(roomId);
  }, [selectedRooms]);

  return {
    selectedMode,
    selectedRooms,
    selectedZone,
    modalOpened,
    shortcutsModalOpened,
    setSelectedMode,
    setSelectedRooms,
    setSelectedZone,
    setModalOpened,
    setShortcutsModalOpened,
    handleModeChange,
    handleRoomToggle,
  };
}
