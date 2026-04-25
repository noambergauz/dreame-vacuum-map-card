import { useState, useCallback } from 'react';
import type { CleaningSelectionMode, Zone } from '@/types/homeassistant';
import { DEFAULTS } from '@/constants';
import { logger } from '@/utils/logger';

export type RepeatCount = 1 | 2 | 3;

const REPEAT_COUNT_STORAGE_KEY = 'dreame-vacuum-card:repeat_count';

function loadRepeatCount(): RepeatCount {
  try {
    const stored = localStorage.getItem(REPEAT_COUNT_STORAGE_KEY);
    if (stored) {
      const value = parseInt(stored, 10);
      if (value >= 1 && value <= 3) {
        return value as RepeatCount;
      }
    }
  } catch {
    // localStorage not available
  }
  return 1;
}

function saveRepeatCount(count: RepeatCount): void {
  try {
    localStorage.setItem(REPEAT_COUNT_STORAGE_KEY, String(count));
  } catch {
    // localStorage not available
  }
}

function clearRepeatCount(): void {
  try {
    localStorage.removeItem(REPEAT_COUNT_STORAGE_KEY);
  } catch {
    // localStorage not available
  }
}

interface UseCardUIStateOptions {
  defaultMode?: CleaningSelectionMode;
}

export function useCardUIState({ defaultMode = DEFAULTS.MODE }: UseCardUIStateOptions = {}) {
  const [selectedMode, setSelectedMode] = useState<CleaningSelectionMode>(defaultMode);
  const [selectedRooms, setSelectedRooms] = useState<Map<number, string>>(new Map());
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const [modalOpened, setModalOpened] = useState(false);
  const [shortcutsModalOpened, setShortcutsModalOpened] = useState(false);
  const [settingsPanelOpened, setSettingsPanelOpened] = useState(false);
  const [repeatCount, setRepeatCount] = useState<RepeatCount>(loadRepeatCount);

  const handleModeChange = useCallback((mode: CleaningSelectionMode) => {
    logger.debug('UI', 'Mode changed:', mode);
    setSelectedMode(mode);
    setSelectedRooms(new Map());
    setSelectedZone(null);
  }, []);

  const handleRoomToggle = useCallback((roomId: number, roomName: string): void => {
    setSelectedRooms((prevSelected) => {
      const newSelected = new Map(prevSelected);
      if (prevSelected.has(roomId)) {
        logger.debug('UI', 'Room deselected:', { roomId, roomName });
        newSelected.delete(roomId);
      } else {
        logger.debug('UI', 'Room selected:', { roomId, roomName });
        newSelected.set(roomId, roomName);
      }
      return newSelected;
    });
  }, []);

  const handleModalOpen = useCallback((opened: boolean) => {
    logger.debug('UI', 'Cleaning mode modal:', opened ? 'opened' : 'closed');
    setModalOpened(opened);
  }, []);

  const handleShortcutsModalOpen = useCallback((opened: boolean) => {
    logger.debug('UI', 'Shortcuts modal:', opened ? 'opened' : 'closed');
    setShortcutsModalOpened(opened);
  }, []);

  const handleSettingsPanelOpen = useCallback((opened: boolean) => {
    logger.debug('UI', 'Settings panel:', opened ? 'opened' : 'closed');
    setSettingsPanelOpened(opened);
  }, []);

  const handleZoneChange = useCallback((zone: Zone | null) => {
    logger.debug('UI', 'Zone changed:', zone);
    setSelectedZone(zone);
  }, []);

  const cycleRepeatCount = useCallback(() => {
    setRepeatCount((prev) => {
      const next = ((prev % 3) + 1) as RepeatCount;
      saveRepeatCount(next);
      logger.debug('UI', 'Repeat count cycled to', next);
      return next;
    });
  }, []);

  const resetRepeatCount = useCallback(() => {
    setRepeatCount(1);
    clearRepeatCount();
    logger.debug('UI', 'Repeat count reset to 1');
  }, []);

  return {
    selectedMode,
    selectedRooms,
    selectedZone,
    modalOpened,
    shortcutsModalOpened,
    settingsPanelOpened,
    repeatCount,
    setSelectedMode,
    setSelectedRooms,
    setSelectedZone: handleZoneChange,
    setModalOpened: handleModalOpen,
    setShortcutsModalOpened: handleShortcutsModalOpen,
    setSettingsPanelOpened: handleSettingsPanelOpen,
    handleModeChange,
    handleRoomToggle,
    cycleRepeatCount,
    resetRepeatCount,
  };
}
