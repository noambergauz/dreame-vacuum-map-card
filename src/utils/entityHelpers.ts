import type { HassEntity, HassConfig, RoomPosition, CleaningMode } from '../types/homeassistant';
import { getAttr } from './typeGuards';

export function extractEntityData(entity: HassEntity | undefined, config: HassConfig) {
  if (!entity) {
    return null;
  }

  const deviceName = entity.attributes?.friendly_name || config.title || 'Dreame Vacuum';
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

export function getEffectiveCleaningMode(entity: HassEntity, selectedMode: CleaningMode): CleaningMode {
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
