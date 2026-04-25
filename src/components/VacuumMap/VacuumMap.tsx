import { useRef, useState, useCallback, useEffect, useMemo } from 'react';
import { TransformWrapper, TransformComponent, useControls } from 'react-zoom-pan-pinch';
import type { CleaningSelectionMode, Zone, CalibrationPoint, RoomViewMode } from '@/types/homeassistant';
import { useTranslation } from '@/hooks';
import { useHass, useMachineState } from '@/contexts';
import { parseRoomsFromCamera } from '@/utils/roomParser';
import { STORAGE_KEY } from '@/constants';
import { RoomSegments } from './RoomSegments';
import { MapControls } from './MapControls';
import { RoomListView } from './RoomListView';
import { ZoneOverlay } from './ZoneOverlay';
import './VacuumMap.scss';

interface VacuumMapProps {
  mapEntityId: string;
  selectedMode: CleaningSelectionMode;
  selectedRooms: Map<number, string>;
  onRoomToggle: (roomId: number, roomName: string) => void;
  zone: Zone | null;
  onZoneChange: (zone: Zone | null) => void;
  onImageDimensionsChange?: (width: number, height: number) => void;
  defaultRoomView?: RoomViewMode;
}

// Separate component to access zoom controls via hook
interface MapControlsWrapperProps {
  showViewToggle: boolean;
  showZoomControls: boolean;
  viewMode: RoomViewMode;
  onViewToggle: () => void;
  isMapLocked: boolean;
  onToggleLock: () => void;
  onResetTransformReady: (resetFn: () => void) => void;
}

function MapControlsWrapper({
  showViewToggle,
  showZoomControls,
  viewMode,
  onViewToggle,
  isMapLocked,
  onToggleLock,
  onResetTransformReady,
}: MapControlsWrapperProps) {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  // Pass resetTransform to parent via callback in effect
  useEffect(() => {
    onResetTransformReady(resetTransform);
  }, [resetTransform, onResetTransformReady]);

  return (
    <MapControls
      showViewToggle={showViewToggle}
      showZoomControls={showZoomControls}
      viewMode={viewMode}
      onViewToggle={onViewToggle}
      onZoomIn={() => zoomIn()}
      onZoomOut={() => zoomOut()}
      onZoomReset={() => resetTransform()}
      isMapLocked={isMapLocked}
      onToggleLock={onToggleLock}
    />
  );
}

export function VacuumMap({
  mapEntityId,
  selectedMode,
  selectedRooms,
  onRoomToggle,
  zone,
  onZoneChange,
  onImageDimensionsChange,
  defaultRoomView = 'map',
}: VacuumMapProps) {
  const { t } = useTranslation();
  const hass = useHass();
  const { phase } = useMachineState();
  const isVacuumActive = phase !== 'idle';
  const mapEntity = hass.states[mapEntityId];
  const mapUrl = mapEntity?.attributes?.entity_picture;
  const mapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const resetTransformRef = useRef<(() => void) | null>(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [roomViewMode, setRoomViewMode] = useState<RoomViewMode>(defaultRoomView);

  // Map lock state - persisted to localStorage, default: locked
  const [isMapLocked, setIsMapLocked] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY.MAP_LOCKED);
      return stored === null ? true : stored === 'true';
    } catch {
      // localStorage not available
      return true;
    }
  });

  // Callback to receive resetTransform from child component
  const handleResetTransformReady = useCallback((resetFn: () => void) => {
    resetTransformRef.current = resetFn;
  }, []);

  // Handle lock toggle - reset transform when locking
  const handleToggleLock = useCallback(() => {
    const newLocked = !isMapLocked;
    if (newLocked && resetTransformRef.current) {
      resetTransformRef.current();
    }
    setIsMapLocked(newLocked);
    try {
      localStorage.setItem(STORAGE_KEY.MAP_LOCKED, String(newLocked));
    } catch {
      // localStorage not available
    }
  }, [isMapLocked]);

  // Effective view mode: use user selection only in room mode, otherwise default
  const effectiveRoomViewMode = selectedMode === 'room' ? roomViewMode : defaultRoomView;

  // Memoize parsed rooms to avoid recalculation on every render
  const parsedRooms = useMemo(
    () => parseRoomsFromCamera(hass, mapEntityId),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hass.states[mapEntityId]?.attributes?.rooms, mapEntityId]
  );
  const calibrationPoints = (mapEntity?.attributes?.calibration_points as CalibrationPoint[] | undefined) ?? [];

  const handleImageLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      const img = e.currentTarget;
      if (img.naturalWidth && img.naturalHeight) {
        setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
        onImageDimensionsChange?.(img.naturalWidth, img.naturalHeight);
      }
    },
    [onImageDimensionsChange]
  );

  // Determine if panning should be enabled (disabled when locked or in zone mode for zone creation)
  const isPanningEnabled = !isMapLocked && selectedMode !== 'zone';

  // Determine map container class
  const mapClassName = `vacuum-map${isMapLocked ? ' vacuum-map--locked' : ''}`;

  return (
    <div className={mapClassName} ref={mapRef}>
      {mapEntity && mapUrl ? (
        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={4}
          centerOnInit={true}
          centerZoomedOut={false}
          limitToBounds={false}
          wheel={{
            step: 0.05,
            disabled: isMapLocked,
          }}
          pinch={{
            step: 0.5,
            disabled: isMapLocked,
          }}
          panning={{
            disabled: !isPanningEnabled,
            velocityDisabled: true,
            excluded: ['vacuum-map__room-segment'],
          }}
          doubleClick={{ disabled: true }}
        >
          <MapControlsWrapper
            showViewToggle={selectedMode === 'room'}
            showZoomControls={selectedMode !== 'room' || effectiveRoomViewMode === 'map'}
            viewMode={effectiveRoomViewMode}
            onViewToggle={() => setRoomViewMode((v) => (v === 'map' ? 'list' : 'map'))}
            isMapLocked={isMapLocked}
            onToggleLock={handleToggleLock}
            onResetTransformReady={handleResetTransformReady}
          />
          <TransformComponent
            wrapperStyle={{
              width: '100%',
              height: '100%',
            }}
            contentStyle={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div className="vacuum-map__content" ref={contentRef}>
              <img
                src={hass.hassUrl(mapUrl)}
                alt="Vacuum Map"
                className="vacuum-map__image"
                onLoad={handleImageLoad}
                draggable={false}
              />

              {selectedMode === 'room' &&
                effectiveRoomViewMode === 'map' &&
                !isVacuumActive &&
                imageDimensions.width > 0 &&
                imageDimensions.height > 0 && (
                  <RoomSegments
                    rooms={parsedRooms}
                    selectedRooms={selectedRooms}
                    onRoomToggle={onRoomToggle}
                    calibrationPoints={calibrationPoints}
                    imageWidth={imageDimensions.width}
                    imageHeight={imageDimensions.height}
                  />
                )}

              {selectedMode === 'zone' && (
                <ZoneOverlay
                  zone={zone}
                  onZoneChange={onZoneChange}
                  clearZoneLabel={t('vacuum_map.clear_zone')}
                  contentRef={contentRef}
                />
              )}
            </div>
          </TransformComponent>
        </TransformWrapper>
      ) : (
        <div className="vacuum-map__placeholder">
          {t('vacuum_map.no_map')}
          <br />
          <small>{t('vacuum_map.looking_for', { entity: mapEntityId })}</small>
        </div>
      )}

      {selectedMode === 'room' && (
        <>
          {effectiveRoomViewMode === 'map' && !isVacuumActive && (
            <div className="vacuum-map__overlay">{t('vacuum_map.room_overlay')}</div>
          )}

          {effectiveRoomViewMode === 'list' && (
            <RoomListView rooms={parsedRooms} selectedRooms={selectedRooms} onRoomToggle={onRoomToggle} />
          )}
        </>
      )}

      {selectedMode === 'zone' && (
        <div className="vacuum-map__overlay">
          {zone ? t('vacuum_map.zone_overlay_resize') : t('vacuum_map.zone_overlay_create')}
        </div>
      )}
    </div>
  );
}
