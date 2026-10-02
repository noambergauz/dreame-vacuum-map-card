import { useState, useCallback } from 'react';
import type { AreaSelectionMode, CleaningSelectionMode, Spot, Zone } from '@/types/homeassistant';
import { DEFAULTS, STORAGE_KEY } from '@/constants';
import { logger } from '@/utils/logger';

export type RepeatCount = 1 | 2 | 3;

const REPEAT_COUNT_STORAGE_KEY = 'dreame-vacuum-card:repeat_count';

export function parseAreaSelectionMode(value: string | null): AreaSelectionMode {
  return value === 'spot' ? 'spot' : 'zone';
}

function loadAreaSelectionMode(): AreaSelectionMode {
  try {
    return parseAreaSelectionMode(localStorage.getItem(STORAGE_KEY.AREA_SELECTION_MODE));
  } catch {
    return 'zone';
  }
}

function saveAreaSelectionMode(mode: AreaSelectionMode): void {
  try {
    localStorage.setItem(STORAGE_KEY.AREA_SELECTION_MODE, mode);
  } catch {
    // localStorage not available
  }
}

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
  const [areaSelectionMode, setAreaSelectionMode] = useState<AreaSelectionMode>(loadAreaSelectionMode);
  const [selectedRooms, setSelectedRooms] = useState<Map<number, string>>(new Map());
  const [selectedZones, setSelectedZones] = useState<Zone[]>([]);
  const [selectedSpots, setSelectedSpots] = useState<Spot[]>([]);
  const [modalOpened, setModalOpened] = useState(false);
  const [shortcutsModalOpened, setShortcutsModalOpened] = useState(false);
  const [settingsPanelOpened, setSettingsPanelOpened] = useState(false);
  const [repeatCount, setRepeatCount] = useState<RepeatCount>(loadRepeatCount);

  const handleModeChange = useCallback((mode: CleaningSelectionMode) => {
    logger.debug('UI', 'Mode changed:', mode);
    setSelectedMode(mode);
    setSelectedRooms(new Map());
    setSelectedZones([]);
    setSelectedSpots([]);
  }, []);

  const handleAreaSelectionModeChange = useCallback((mode: AreaSelectionMode) => {
    logger.debug('UI', 'Area selection mode changed:', mode);
    setAreaSelectionMode(mode);
    saveAreaSelectionMode(mode);
    setSelectedZones([]);
    setSelectedSpots([]);
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

  const handleZoneChange = useCallback((zones: Zone[]) => {
    logger.debug('UI', 'Zones changed:', zones);
    setSelectedZones(zones);
  }, []);

  const handleSpotChange = useCallback((spots: Spot[]) => {
    logger.debug('UI', 'Spots changed:', spots);
    setSelectedSpots(spots);
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
    areaSelectionMode,
    selectedRooms,
    selectedZones,
    selectedSpots,
    modalOpened,
    shortcutsModalOpened,
    settingsPanelOpened,
    repeatCount,
    setSelectedMode,
    setSelectedRooms,
    setSelectedZones: handleZoneChange,
    setSelectedSpots: handleSpotChange,
    setModalOpened: handleModalOpen,
    setShortcutsModalOpened: handleShortcutsModalOpen,
    setSettingsPanelOpened: handleSettingsPanelOpen,
    handleModeChange,
    handleAreaSelectionModeChange,
    handleRoomToggle,
    cycleRepeatCount,
    resetRepeatCount,
  };
}
