import { useCallback } from 'react';
import type { Hass, CleaningSelectionMode, Spot, Zone, StopAction } from '@/types/homeassistant';
import type { RoomCleaningConfig } from '@/types/vacuum';
import type { MapTransform } from '@/utils/mapTransform';
import { useTranslation } from './useTranslation';
import { buildCleanSpotPayload, buildCleanZonePayload } from '@/utils/zoneConverter';
import { logger } from '@/utils/logger';

interface VacuumServicesParams {
  hass: Hass;
  entityId: string;
  mapEntityId: string;
  mapTransform: MapTransform | null;
  onSuccess?: (message: string) => void;
  onError?: (message: string) => void;
}

/**
 * Safely call a Home Assistant service with error handling
 */
async function safeCallService(
  hass: Hass,
  domain: string,
  service: string,
  data: Record<string, unknown>,
  onError?: (message: string) => void,
  errorMessage?: string
): Promise<boolean> {
  try {
    await hass.callService(domain, service, data);
    return true;
  } catch (error) {
    logger.error(`Service call failed: ${domain}.${service}`, error);
    if (onError && errorMessage) {
      onError(errorMessage);
    }
    return false;
  }
}

/**
 * Hook providing vacuum service operations
 */
export function useVacuumServices({
  hass,
  entityId,
  mapEntityId,
  mapTransform,
  onSuccess,
  onError,
}: VacuumServicesParams) {
  const { t } = useTranslation();

  const handleStart = useCallback(async () => {
    logger.debug('Vacuum', 'Start full clean', entityId);
    const success = await safeCallService(
      hass,
      'vacuum',
      'start',
      { entity_id: entityId },
      onError,
      t('errors.service_call_failed')
    );
    if (success) {
      onSuccess?.(t('toast.starting_full_clean'));
    }
  }, [hass, entityId, onSuccess, onError, t]);

  const handlePause = useCallback(async () => {
    logger.debug('Vacuum', 'Pause', entityId);
    const success = await safeCallService(
      hass,
      'vacuum',
      'pause',
      { entity_id: entityId },
      onError,
      t('errors.service_call_failed')
    );
    if (success) {
      onSuccess?.(t('toast.pausing_vacuum'));
    }
  }, [hass, entityId, onSuccess, onError, t]);

  const handleStop = useCallback(
    async (action: StopAction = 'stop') => {
      logger.debug('Vacuum', 'Stop', { action, entityId });
      const success = await safeCallService(
        hass,
        'vacuum',
        'stop',
        { entity_id: entityId },
        onError,
        t('errors.service_call_failed')
      );
      if (success) {
        if (action === 'stop_and_dock') {
          await safeCallService(
            hass,
            'vacuum',
            'return_to_base',
            { entity_id: entityId },
            onError,
            t('errors.service_call_failed')
          );
          onSuccess?.(t('toast.stopping_and_docking'));
        } else {
          onSuccess?.(t('toast.stopping_vacuum'));
        }
      }
    },
    [hass, entityId, onSuccess, onError, t]
  );

  const handleDock = useCallback(async () => {
    logger.debug('Vacuum', 'Return to dock', entityId);
    const success = await safeCallService(
      hass,
      'vacuum',
      'return_to_base',
      { entity_id: entityId },
      onError,
      t('errors.service_call_failed')
    );
    if (success) {
      onSuccess?.(t('toast.vacuum_docking'));
    }
  }, [hass, entityId, onSuccess, onError, t]);

  const handleCleanSegments = useCallback(
    async (segments: number[], count: number, repeats: number = 1) => {
      logger.debug('Vacuum', 'Clean segments', { entityId, segments, count, repeats });
      const success = await safeCallService(
        hass,
        'dreame_vacuum',
        'vacuum_clean_segment',
        {
          entity_id: entityId,
          segments,
          repeats,
        },
        onError,
        t('errors.service_call_failed')
      );
      if (success) {
        const key = count === 1 ? 'toast.starting_room_clean' : 'toast.starting_room_clean_plural';
        onSuccess?.(t(key, { count: String(count) }));
      }
    },
    [hass, entityId, onSuccess, onError, t]
  );

  /**
   * Clean segments with per-room configuration (for Customize mode)
   * Sends arrays of per-room settings to the Dreame vacuum service
   */
  const handleCleanSegmentsCustomized = useCallback(
    async (roomConfigs: RoomCleaningConfig[]) => {
      if (roomConfigs.length === 0) {
        logger.debug('Vacuum', 'No room configs provided');
        return;
      }

      const segments = roomConfigs.map((c) => c.roomId);
      const repeats = roomConfigs.map((c) => c.cycles);
      const suctionLevels = roomConfigs.map((c) => c.suctionLevel);
      const waterVolumes = roomConfigs.map((c) => c.mopWetness);

      logger.debug('Vacuum', 'Clean segments with custom config', {
        entityId,
        segments,
        repeats,
        suctionLevels,
        waterVolumes,
        roomConfigs,
      });

      const success = await safeCallService(
        hass,
        'dreame_vacuum',
        'vacuum_clean_segment',
        {
          entity_id: entityId,
          segments,
          repeats,
          suction_level: suctionLevels,
          water_volume: waterVolumes,
        },
        onError,
        t('errors.service_call_failed')
      );

      if (success) {
        const count = roomConfigs.length;
        const key = count === 1 ? 'toast.starting_room_clean' : 'toast.starting_room_clean_plural';
        onSuccess?.(t(key, { count: String(count) }));
      }
    },
    [hass, entityId, onSuccess, onError, t]
  );

  const handleCleanZone = useCallback(
    async (zones: Zone[], imageWidth: number, imageHeight: number, repeats: number = 1) => {
      logger.debug('Vacuum', 'Clean zones - input:', {
        uiZones: zones,
        imageWidth,
        imageHeight,
        mapEntityId,
        repeats,
        transformSource: mapTransform?.source,
      });

      const conversion = buildCleanZonePayload(zones, mapTransform, imageWidth, imageHeight);
      if (!conversion.ok) {
        logger.warn('Vacuum', 'Zone conversion blocked', {
          reason: conversion.reason,
          mapEntityId,
          transformSource: mapTransform?.source,
        });
        onError?.(t('errors.map_transform_unavailable'));
        return;
      }

      logger.debug('Vacuum', 'Clean zones - converted:', conversion.zones);

      const success = await safeCallService(
        hass,
        'dreame_vacuum',
        'vacuum_clean_zone',
        {
          entity_id: entityId,
          zone: conversion.zones,
          repeats,
        },
        onError,
        t('errors.service_call_failed')
      );
      if (success) {
        onSuccess?.(t('toast.starting_zone_clean'));
      }
    },
    [hass, entityId, mapEntityId, mapTransform, onSuccess, onError, t]
  );

  const handleCleanSpots = useCallback(
    async (spots: Spot[], imageWidth: number, imageHeight: number, repeats: number = 1): Promise<boolean> => {
      if (spots.length === 0) {
        onError?.(t('toast.select_spot_first'));
        return false;
      }

      const conversion = buildCleanSpotPayload(spots, mapTransform, imageWidth, imageHeight);
      if (!conversion.ok) {
        logger.warn('Vacuum', 'Spot conversion blocked', {
          reason: conversion.reason,
          mapEntityId,
          transformSource: mapTransform?.source,
        });
        onError?.(t('errors.map_transform_unavailable'));
        return false;
      }

      const success = await safeCallService(
        hass,
        'dreame_vacuum',
        'vacuum_clean_spot',
        {
          entity_id: entityId,
          points: conversion.points,
          repeats,
        },
        onError,
        t('errors.service_call_failed')
      );
      if (success) {
        onSuccess?.(t('toast.starting_spot_clean'));
      }
      return success;
    },
    [hass, entityId, mapEntityId, mapTransform, onSuccess, onError, t]
  );

  const handleClean = useCallback(
    (
      mode: CleaningSelectionMode,
      selectedRooms: Map<number, string>,
      selectedZones: Zone[],
      imageWidth?: number,
      imageHeight?: number,
      repeats: number = 1,
      roomConfigs?: RoomCleaningConfig[]
    ) => {
      logger.debug('Vacuum', 'Handle clean', {
        mode,
        selectedRooms: Array.from(selectedRooms.entries()),
        selectedZones,
        imageWidth,
        imageHeight,
        repeats,
        customizeMode: !!roomConfigs,
      });

      switch (mode) {
        case 'all':
          // If customize mode with room configs, clean all rooms with customized settings
          if (roomConfigs && roomConfigs.length > 0) {
            handleCleanSegmentsCustomized(roomConfigs);
          } else {
            handleStart();
          }
          break;
        case 'room':
          if (selectedRooms.size > 0) {
            // If customize mode with room configs, use customized settings
            if (roomConfigs && roomConfigs.length > 0) {
              // Filter configs to only selected rooms
              const selectedConfigs = roomConfigs.filter((c) => selectedRooms.has(c.roomId));
              if (selectedConfigs.length > 0) {
                handleCleanSegmentsCustomized(selectedConfigs);
              } else {
                // Fallback to standard cleaning if no configs match
                handleCleanSegments(Array.from(selectedRooms.keys()), selectedRooms.size, repeats);
              }
            } else {
              handleCleanSegments(Array.from(selectedRooms.keys()), selectedRooms.size, repeats);
            }
          } else {
            logger.debug('Vacuum', 'No rooms selected');
            onSuccess?.(t('toast.select_rooms_first'));
          }
          break;
        case 'zone':
          if (selectedZones.length > 0 && imageWidth && imageHeight) {
            handleCleanZone(selectedZones, imageWidth, imageHeight, repeats);
          } else if (selectedZones.length > 0) {
            logger.debug('Vacuum', 'Zones selected but no image dimensions');
            onSuccess?.(t('toast.cannot_determine_map'));
          } else {
            logger.debug('Vacuum', 'No zone selected');
            onSuccess?.(t('toast.select_zone_first'));
          }
          break;
      }
    },
    [handleStart, handleCleanSegments, handleCleanSegmentsCustomized, handleCleanZone, onSuccess, t]
  );

  return {
    handleStart,
    handlePause,
    handleStop,
    handleDock,
    handleCleanSegments,
    handleCleanSegmentsCustomized,
    handleCleanZone,
    handleCleanSpots,
    handleClean,
  };
}
