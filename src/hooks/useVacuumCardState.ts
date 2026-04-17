import { useState, useCallback } from 'react';
import type { CleaningMode, Zone } from '../types/homeassistant';
import { DEFAULTS } from '../constants';

interface UseVacuumCardStateOptions {
  defaultMode?: CleaningMode;
}

/**
 * Hook to manage vacuum card UI state
 * @param options.defaultMode - Initial tab to display (defaults to 'all')
 */
export function useVacuumCardState({ defaultMode = DEFAULTS.MODE }: UseVacuumCardStateOptions = {}) {
  const [selectedMode, setSelectedMode] = useState<CleaningMode>(defaultMode);
  const [selectedRooms, setSelectedRooms] = useState<Map<number, string>>(new Map());
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const [modalOpened, setModalOpened] = useState(false);
  const [shortcutsModalOpened, setShortcutsModalOpened] = useState(false);
  const [settingsPanelOpened, setSettingsPanelOpened] = useState(false);

  const handleModeChange = useCallback((mode: CleaningMode) => {
    console.debug('[UI] Mode changed:', mode);
    setSelectedMode(mode);
    setSelectedRooms(new Map());
    setSelectedZone(null);
  }, []);

  const handleRoomToggle = useCallback((roomId: number, roomName: string): boolean => {
    let wasSelected = false;
    setSelectedRooms((prevSelected) => {
      wasSelected = prevSelected.has(roomId);
      const newSelected = new Map(prevSelected);
      if (wasSelected) {
        console.debug('[UI] Room deselected:', { roomId, roomName });
        newSelected.delete(roomId);
      } else {
        console.debug('[UI] Room selected:', { roomId, roomName });
        newSelected.set(roomId, roomName);
      }
      return newSelected;
    });
    return wasSelected;
  }, []);

  const handleModalOpen = useCallback((opened: boolean) => {
    console.debug('[UI] Cleaning mode modal:', opened ? 'opened' : 'closed');
    setModalOpened(opened);
  }, []);

  const handleShortcutsModalOpen = useCallback((opened: boolean) => {
    console.debug('[UI] Shortcuts modal:', opened ? 'opened' : 'closed');
    setShortcutsModalOpened(opened);
  }, []);

  const handleSettingsPanelOpen = useCallback((opened: boolean) => {
    console.debug('[UI] Settings panel:', opened ? 'opened' : 'closed');
    setSettingsPanelOpened(opened);
  }, []);

  const handleZoneChange = useCallback((zone: Zone | null) => {
    console.debug('[UI] Zone changed:', zone);
    setSelectedZone(zone);
  }, []);

  return {
    selectedMode,
    selectedRooms,
    selectedZone,
    modalOpened,
    shortcutsModalOpened,
    settingsPanelOpened,
    setSelectedMode,
    setSelectedRooms,
    setSelectedZone: handleZoneChange,
    setModalOpened: handleModalOpen,
    setShortcutsModalOpened: handleShortcutsModalOpen,
    setSettingsPanelOpened: handleSettingsPanelOpen,
    handleModeChange,
    handleRoomToggle,
  };
}
