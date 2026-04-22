import { useCallback } from 'react';
import type { Hass, CleaningSelectionMode, Zone, StopAction } from '@/types/homeassistant';
import type { RoomCleaningConfig } from '@/types/vacuum';
import { useTranslation } from './useTranslation';
import { convertUIZoneToVacuumZone } from '@/utils/zoneConverter';
import { logger } from '@/utils/logger';

interface VacuumServicesParams {
  hass: Hass;
  entityId: string;
  mapEntityId: string;
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
export function useVacuumServices({ hass, entityId, mapEntityId, onSuccess, onError }: VacuumServicesParams) {
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
    async (zone: Zone, imageWidth: number, imageHeight: number, repeats: number = 1) => {
      const mapEntity = hass.states[mapEntityId];

      logger.debug('Vacuum', 'Clean zone - input:', {
        uiZone: zone,
        imageWidth,
        imageHeight,
        mapEntityId,
        repeats,
        calibrationPoints: mapEntity?.attributes?.calibration_points,
      });

      // Convert UI zone (percentage) to vacuum coordinates
      const vacuumZone = convertUIZoneToVacuumZone(zone, mapEntity, imageWidth, imageHeight);

      logger.debug('Vacuum', 'Clean zone - converted:', vacuumZone);

      const success = await safeCallService(
        hass,
        'dreame_vacuum',
        'vacuum_clean_zone',
        {
          entity_id: entityId,
          zone: [vacuumZone.x1, vacuumZone.y1, vacuumZone.x2, vacuumZone.y2],
          repeats,
        },
        onError,
        t('errors.service_call_failed')
      );
      if (success) {
        onSuccess?.(t('toast.starting_zone_clean'));
      }
    },
    [hass, entityId, mapEntityId, onSuccess, onError, t]
  );

  const handleClean = useCallback(
    (
      mode: CleaningSelectionMode,
      selectedRooms: Map<number, string>,
      selectedZone: Zone | null,
      imageWidth?: number,
      imageHeight?: number,
      repeats: number = 1,
      roomConfigs?: RoomCleaningConfig[]
    ) => {
      logger.debug('Vacuum', 'Handle clean', {
        mode,
        selectedRooms: Array.from(selectedRooms.entries()),
        selectedZone,
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
          if (selectedZone && imageWidth && imageHeight) {
            handleCleanZone(selectedZone, imageWidth, imageHeight, repeats);
          } else if (selectedZone) {
            logger.debug('Vacuum', 'Zone selected but no image dimensions');
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
    handleClean,
  };
}
