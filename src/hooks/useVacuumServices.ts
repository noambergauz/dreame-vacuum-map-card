import { useCallback } from 'react';
import type { Hass, CleaningMode, Zone } from '../types/homeassistant';
import type { SupportedLanguage } from '../i18n/locales';
import { useTranslation } from './useTranslation';
import { convertUIZoneToVacuumZone } from '../utils/zoneConverter';

interface VacuumServicesParams {
  hass: Hass;
  entityId: string;
  mapEntityId: string;
  onSuccess?: (message: string) => void;
  language?: SupportedLanguage;
}

/**
 * Hook providing vacuum service operations
 */
export function useVacuumServices({ hass, entityId, mapEntityId, onSuccess, language = 'en' }: VacuumServicesParams) {
  const { t } = useTranslation(language);

  const handleStart = useCallback(() => {
    hass.callService('vacuum', 'start', { entity_id: entityId });
    onSuccess?.(t('toast.starting_full_clean'));
  }, [hass, entityId, onSuccess, t]);

  const handlePause = useCallback(() => {
    hass.callService('vacuum', 'pause', { entity_id: entityId });
    onSuccess?.(t('toast.pausing_vacuum'));
  }, [hass, entityId, onSuccess, t]);

  const handleStop = useCallback(() => {
    hass.callService('vacuum', 'stop', { entity_id: entityId });
    hass.callService('vacuum', 'return_to_base', { entity_id: entityId });
    onSuccess?.(t('toast.stopping_vacuum'));
  }, [hass, entityId, onSuccess, t]);

  const handleDock = useCallback(() => {
    hass.callService('vacuum', 'return_to_base', { entity_id: entityId });
    onSuccess?.(t('toast.vacuum_docking'));
  }, [hass, entityId, onSuccess, t]);

  const handleCleanSegments = useCallback((segments: number[], count: number) => {
    hass.callService('dreame_vacuum', 'vacuum_clean_segment', {
      entity_id: entityId,
      segments,
    });
    const key = count === 1 ? 'toast.starting_room_clean' : 'toast.starting_room_clean_plural';
    onSuccess?.(t(key, { count: String(count) }));
  }, [hass, entityId, onSuccess, t]);

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
    onSuccess?.(t('toast.starting_zone_clean'));
  }, [hass, entityId, mapEntityId, onSuccess, t]);

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
          onSuccess?.(t('toast.select_rooms_first'));
        }
        break;
      case 'zone':
        if (selectedZone && imageWidth && imageHeight) {
          handleCleanZone(selectedZone, imageWidth, imageHeight);
        } else if (selectedZone) {
          onSuccess?.(t('toast.cannot_determine_map'));
        } else {
          onSuccess?.(t('toast.select_zone_first'));
        }
        break;
    }
  }, [handleStart, handleCleanSegments, handleCleanZone, onSuccess, t]);

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
