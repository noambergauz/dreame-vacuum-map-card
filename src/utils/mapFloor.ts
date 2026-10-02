export interface LiveMapFloor {
  /** Vacuum `selected_map_id` when it is a finite number. */
  floorId: number | null;
  /**
   * Camera attributes describe the selected floor. A missing selection is a single-floor device.
   * The live map carries its own `map_id` and points at the saved map it was built from through
   * `saved_map_id`; the vacuum's `selected_map_id` is that saved map id, so either may match.
   */
  floorReady: boolean;
  /** Camera `entity_picture`, including its cache-busting query. */
  imageToken: string | null;
  /** The loaded image is the camera's current picture. */
  imageReady: boolean;
}

function finiteMapId(value: unknown): number | null {
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

export function readLiveMapFloor(
  selectedMapId: unknown,
  cameraAttributes: { map_id?: unknown; saved_map_id?: unknown; entity_picture?: unknown } | undefined,
  loadedImageToken: string | null = null
): LiveMapFloor {
  const selected = finiteMapId(selectedMapId);
  const cameraMapId = finiteMapId(cameraAttributes?.map_id);
  const cameraSavedMapId = finiteMapId(cameraAttributes?.saved_map_id);
  const picture = cameraAttributes?.entity_picture;
  const imageToken = typeof picture === 'string' && picture.length > 0 ? picture : null;

  return {
    floorId: selected,
    floorReady: selected === null || cameraSavedMapId === selected || cameraMapId === selected,
    imageToken,
    imageReady: imageToken !== null && imageToken === loadedImageToken,
  };
}

export interface CleaningSelectionUpdate {
  /** Replacement selection. Null leaves the current selection in place. */
  rooms: Map<number, string> | null;
  clearZone: boolean;
  selectRoomMode: boolean;
}

function sameRoomIds(left: Map<number, string>, right: Map<number, string>): boolean {
  if (left.size !== right.size) return false;
  const leftIds = [...left.keys()].sort();
  const rightIds = [...right.keys()].sort();
  return leftIds.every((id, index) => id === rightIds[index]);
}

/**
 * Floor changes clear the selection immediately. Active segments may refill it only after the
 * live camera and its image match that floor, so a stale camera cannot restore the previous rooms.
 */
export function resolveCleaningSelection({
  floorChanged,
  mapReady,
  isSegmentCleaning,
  selectedRooms,
  activeSegments,
}: {
  floorChanged: boolean;
  mapReady: boolean;
  isSegmentCleaning: boolean;
  selectedRooms: Map<number, string>;
  activeSegments: Map<number, string>;
}): CleaningSelectionUpdate {
  if (!mapReady || !isSegmentCleaning || activeSegments.size === 0) {
    return { rooms: floorChanged ? new Map() : null, clearZone: floorChanged, selectRoomMode: false };
  }

  const replace = floorChanged || !sameRoomIds(selectedRooms, activeSegments);
  return {
    rooms: replace ? activeSegments : null,
    clearZone: floorChanged,
    selectRoomMode: replace,
  };
}
