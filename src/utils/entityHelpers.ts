import type { HassEntity, HassConfig, RoomPosition, CleaningSelectionMode, Hass } from '@/types/homeassistant';
import { getAttr } from './typeGuards';

export function extractEntityData(entity: HassEntity | undefined, config: HassConfig) {
  if (!entity) {
    return null;
  }

  const deviceName = config.title || entity.attributes?.friendly_name || 'Dreame Vacuum';
  const mapEntityId = config.map_entity || `camera.${config.entity.split('.')[1]}_map`;

  const entityRooms = entity.attributes?.rooms?.[entity.attributes?.selected_map || ''];
  const rooms: RoomPosition[] = entityRooms
    ? entityRooms.map((room) => ({
        id: room.id,
        name: room.name,
        x: 50,
        y: 50,
        icon: room.icon,
      }))
    : [];

  return {
    deviceName,
    mapEntityId,
    rooms,
  };
}

export function getEffectiveCleaningMode(
  entity: HassEntity,
  selectedMode: CleaningSelectionMode
): CleaningSelectionMode {
  const vacuumStatus = getAttr(entity.attributes.status, '');
  const isSegmentCleaning = entity.attributes.segment_cleaning || false;
  const isZoneCleaning = entity.attributes.zone_cleaning || false;

  if (entity.attributes.started) {
    if (isSegmentCleaning || vacuumStatus.toLowerCase().includes('room')) {
      return 'room';
    }
    if (isZoneCleaning || vacuumStatus.toLowerCase().includes('zone')) {
      return 'zone';
    }
  }

  return selectedMode;
}

/**
 * Get active segments from vacuum entity when segment cleaning is in progress.
 * Returns a Map of roomId -> roomName for the currently cleaning segments.
 */
export function getActiveSegments(hass: Hass, vacuumEntityId: string, cameraEntityId: string): Map<number, string> {
  const vacuumEntity = hass.states[vacuumEntityId];
  const cameraEntity = hass.states[cameraEntityId];
  const result = new Map<number, string>();

  if (!vacuumEntity) return result;

  const isSegmentCleaning = vacuumEntity.attributes.segment_cleaning === true;
  const activeSegments = vacuumEntity.attributes.active_segments as number[] | null;

  if (!isSegmentCleaning || !activeSegments || !Array.isArray(activeSegments)) {
    return result;
  }

  // Get room names from camera entity
  const roomsData = cameraEntity?.attributes?.rooms as Record<string, { room_id: number; name: string }> | undefined;
  const roomNameById = new Map<number, string>();

  if (roomsData) {
    Object.values(roomsData).forEach((room) => {
      roomNameById.set(room.room_id, room.name);
    });
  }

  // Build the selected rooms map
  for (const segmentId of activeSegments) {
    const roomName = roomNameById.get(segmentId) || `Room ${segmentId}`;
    result.set(segmentId, roomName);
  }

  return result;
}
