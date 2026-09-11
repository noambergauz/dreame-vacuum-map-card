import type { HassEntity, HassConfig, RoomPosition, CleaningSelectionMode, Hass, Room } from '@/types/homeassistant';
import { getAttr } from './typeGuards';
import { resolveRoomName } from './roomParser';

export function resolveMapEntityId(hass: Hass, vacuumEntityId: string, configMapEntity?: string): string {
  if (configMapEntity) {
    return configMapEntity;
  }

  const vacuumBaseName = vacuumEntityId.split('.')[1];
  const conventionalMapEntity = `camera.${vacuumBaseName}_map`;

  if (isDreameMapCamera(hass.states[conventionalMapEntity])) {
    return conventionalMapEntity;
  }

  for (const entityId of Object.keys(hass.states)) {
    if (!entityId.startsWith('camera.') || !entityId.endsWith('_map') || entityId.includes('_map_')) {
      continue;
    }
    if (isDreameMapCamera(hass.states[entityId])) {
      return entityId;
    }
  }

  return conventionalMapEntity;
}

function isDreameMapCamera(entity: HassEntity | undefined): boolean {
  const attrs = entity?.attributes;
  if (!attrs) return false;
  return 'rooms' in attrs || 'vacuum_position' in attrs || 'calibration_points' in attrs || 'charger_position' in attrs;
}

export function extractEntityData(entity: HassEntity | undefined, config: HassConfig, hass?: Hass) {
  if (!entity) {
    return null;
  }

  const deviceName = config.title || entity.attributes?.friendly_name || 'Dreame Vacuum';
  const mapEntityId = hass
    ? resolveMapEntityId(hass, config.entity, config.map_entity)
    : config.map_entity || `camera.${config.entity.split('.')[1]}_map`;

  // Vacuum entity rooms are structured as Record<mapName, Room[]>
  const selectedMap = entity.attributes?.selected_map || '';
  const entityRooms = entity.attributes?.rooms?.[selectedMap];

  // Handle rooms array from vacuum entity
  const rooms: RoomPosition[] = Array.isArray(entityRooms)
    ? entityRooms.map((room: Room) => ({
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
export function getActiveSegments(
  hass: Hass,
  vacuumEntityId: string,
  cameraEntityId: string,
  roomNames?: Record<string, string>
): Map<number, string> {
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
      roomNameById.set(room.room_id, resolveRoomName(room.room_id, room.name, roomNames));
    });
  }

  // Build the selected rooms map
  for (const segmentId of activeSegments) {
    const roomName = roomNameById.get(segmentId) || `Room ${segmentId}`;
    result.set(segmentId, roomName);
  }

  return result;
}
