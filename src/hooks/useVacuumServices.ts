import { useCallback } from 'react';
import type { Hass, CleaningMode, Zone } from '../types/homeassistant';
import { convertUIZoneToVacuumZone } from '../utils/zoneConverter';

interface VacuumServicesParams {
  hass: Hass;
  entityId: string;
  mapEntityId: string;
  onSuccess?: (message: string) => void;
}

/**
 * Hook providing vacuum service operations
 */
export function useVacuumServices({ hass, entityId, mapEntityId, onSuccess }: VacuumServicesParams) {
  const handleStart = useCallback(() => {
    hass.callService('vacuum', 'start', { entity_id: entityId });
    onSuccess?.('Starting full house cleaning');
  }, [hass, entityId, onSuccess]);

  const handlePause = useCallback(() => {
    hass.callService('vacuum', 'pause', { entity_id: entityId });
    onSuccess?.('Pausing vacuum');
  }, [hass, entityId, onSuccess]);

  const handleStop = useCallback(() => {
    hass.callService('vacuum', 'stop', { entity_id: entityId });
    hass.callService('vacuum', 'return_to_base', { entity_id: entityId });
    onSuccess?.('Stopping vacuum');
  }, [hass, entityId, onSuccess]);

  const handleDock = useCallback(() => {
    hass.callService('vacuum', 'return_to_base', { entity_id: entityId });
    onSuccess?.('Vacuum returning to dock');
  }, [hass, entityId, onSuccess]);

  const handleCleanSegments = useCallback((segments: number[], count: number) => {
    hass.callService('dreame_vacuum', 'vacuum_clean_segment', {
      entity_id: entityId,
      segments,
    });
    onSuccess?.(`Starting cleaning for ${count} selected room${count > 1 ? 's' : ''}`);
  }, [hass, entityId, onSuccess]);

  const handleCleanZone = useCallback((zone: Zone, imageWidth: number, imageHeight: number) => {
    const mapEntity = hass.states[mapEntityId];
    
    console.log('Zone conversion debug:', {
      uiZone: zone,
      imageWidth,
      imageHeight,
      mapEntity: mapEntity?.attributes,
    });
    
    // Convert UI zone (percentage) to vacuum coordinates
    const vacuumZone = convertUIZoneToVacuumZone(
      zone,
      mapEntity,
      imageWidth,
      imageHeight
    );

    console.log('Converted vacuum zone:', vacuumZone);

    hass.callService('dreame_vacuum', 'vacuum_clean_zone', {
      entity_id: entityId,
      zone: [vacuumZone.x1, vacuumZone.y1, vacuumZone.x2, vacuumZone.y2],
    });
    onSuccess?.('Starting zone cleaning');
  }, [hass, entityId, mapEntityId, onSuccess]);

  const handleClean = useCallback((
    mode: CleaningMode,
    selectedRooms: Map<number, string>,
    selectedZone: Zone | null,
    imageWidth?: number,
    imageHeight?: number
  ) => {
    switch (mode) {
      case 'all':
        handleStart();
        break;
      case 'room':
        if (selectedRooms.size > 0) {
          handleCleanSegments(Array.from(selectedRooms.keys()), selectedRooms.size);
        } else {
          onSuccess?.('Please select rooms to clean first');
        }
        break;
      case 'zone':
        if (selectedZone && imageWidth && imageHeight) {
          handleCleanZone(selectedZone, imageWidth, imageHeight);
        } else if (selectedZone) {
          onSuccess?.('Cannot determine map dimensions');
        } else {
          onSuccess?.('Please select a zone on the map');
        }
        break;
    }
  }, [handleStart, handleCleanSegments, handleCleanZone, onSuccess]);

  return {
    handleStart,
    handlePause,
    handleStop,
    handleDock,
    handleCleanSegments,
    handleCleanZone,
    handleClean,
  };
}
