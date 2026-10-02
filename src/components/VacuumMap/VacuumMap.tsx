import { useRef, useState, useCallback, useEffect } from 'react';
import { TransformWrapper, TransformComponent, useControls } from 'react-zoom-pan-pinch';
import type {
  AreaSelectionMode,
  CleaningSelectionMode,
  Spot,
  Zone,
  RoomViewMode,
  VacuumPosition,
} from '@/types/homeassistant';
import { useTranslation, type MapGeometry } from '@/hooks';
import { useHass, useMachineState, useConfig } from '@/contexts';
import { STORAGE_KEY } from '@/constants';
import { RoomSegments } from './RoomSegments';
import { MapControls } from './MapControls';
import { RoomListView } from './RoomListView';
import { ZoneOverlay } from './ZoneOverlay';
import { SpotOverlay } from './SpotOverlay';
import { VacuumPositionMarker } from './VacuumPositionMarker';
import { ChargerMarker } from './ChargerMarker';
import { RoomLabels } from './RoomLabels';
import './VacuumMap.scss';

interface VacuumMapProps {
  mapEntityId: string;
  geometry: MapGeometry;
  selectedMode: CleaningSelectionMode;
  areaSelectionMode: AreaSelectionMode;
  selectedRooms: Map<number, string>;
  onRoomToggle: (roomId: number, roomName: string) => void;
  zone: Zone[];
  onZoneChange: (zones: Zone[]) => void;
  spots: Spot[];
  onSpotsChange: (spots: Spot[]) => void;
  onImageDimensionsChange?: (width: number, height: number, imageToken: string) => void;
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
  geometry,
  selectedMode,
  areaSelectionMode,
  selectedRooms,
  onRoomToggle,
  zone,
  onZoneChange,
  spots,
  onSpotsChange,
  onImageDimensionsChange,
  defaultRoomView = 'map',
}: VacuumMapProps) {
  const { t } = useTranslation();
  const hass = useHass();
  const config = useConfig();
  const { phase } = useMachineState();
  const isInCleaningSession = phase === 'cleaning' || phase === 'paused';
  const mapEntity = hass.states[mapEntityId];
  const entityPicture = mapEntity?.attributes?.entity_picture;
  const mapUrl = typeof entityPicture === 'string' ? entityPicture : undefined;
  const mapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const resetTransformRef = useRef<(() => void) | null>(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [loadedMapUrl, setLoadedMapUrl] = useState(mapUrl);
  if (mapUrl !== loadedMapUrl) {
    setLoadedMapUrl(mapUrl);
    setImageDimensions({ width: 0, height: 0 });
  }
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

  const { rooms: parsedRooms, transform } = geometry;

  // Extract vacuum and charger positions from map entity attributes
  const vacuumPosition = mapEntity?.attributes?.vacuum_position as VacuumPosition | undefined;
  const chargerPosition = mapEntity?.attributes?.charger_position as VacuumPosition | undefined;

  // Determine if vacuum is currently cleaning (not docked)
  const isCleaning = phase === 'cleaning';

  const overlays = config.map_overlays ?? [];
  const hasDimensions = imageDimensions.width > 0 && imageDimensions.height > 0;
  const showVacuumMarker = overlays.includes('vacuum') && vacuumPosition && hasDimensions && transform;
  const showChargerMarker = overlays.includes('charger') && chargerPosition && hasDimensions && transform;
  const showRoomLabels = overlays.includes('room_labels') && hasDimensions && transform;

  const handleImageLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      const img = e.currentTarget;
      if (!mapUrl || !img.naturalWidth || !img.naturalHeight) return;
      setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
      onImageDimensionsChange?.(img.naturalWidth, img.naturalHeight, mapUrl);
    },
    [mapUrl, onImageDimensionsChange]
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

              {showChargerMarker && (
                <ChargerMarker
                  position={chargerPosition}
                  transform={transform}
                  imageWidth={imageDimensions.width}
                  imageHeight={imageDimensions.height}
                />
              )}

              {showVacuumMarker && (
                <VacuumPositionMarker
                  position={vacuumPosition}
                  transform={transform}
                  imageWidth={imageDimensions.width}
                  imageHeight={imageDimensions.height}
                  isCleaning={isCleaning}
                />
              )}

              {showRoomLabels && (
                <RoomLabels
                  rooms={parsedRooms}
                  transform={transform}
                  imageWidth={imageDimensions.width}
                  imageHeight={imageDimensions.height}
                  scale={config.room_label_scale}
                />
              )}

              {selectedMode === 'room' &&
                effectiveRoomViewMode === 'map' &&
                !isInCleaningSession &&
                imageDimensions.width > 0 &&
                imageDimensions.height > 0 &&
                transform && (
                  <RoomSegments
                    rooms={parsedRooms}
                    selectedRooms={selectedRooms}
                    onRoomToggle={onRoomToggle}
                    transform={transform}
                    imageWidth={imageDimensions.width}
                    imageHeight={imageDimensions.height}
                  />
                )}

              {selectedMode === 'zone' && areaSelectionMode === 'zone' && (
                <ZoneOverlay
                  zones={zone}
                  onZonesChange={onZoneChange}
                  clearZoneLabel={t('vacuum_map.clear_zone')}
                  contentRef={contentRef}
                />
              )}

              {selectedMode === 'zone' && areaSelectionMode === 'spot' && (
                <SpotOverlay
                  spots={spots}
                  onSpotsChange={onSpotsChange}
                  clearAllLabel={t('vacuum_map.clear_spots')}
                  removeSpotLabel={t('vacuum_map.remove_spot')}
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
          {effectiveRoomViewMode === 'map' && !isInCleaningSession && (
            <div className="vacuum-map__overlay">{t('vacuum_map.room_overlay')}</div>
          )}

          {effectiveRoomViewMode === 'list' && (
            <RoomListView rooms={parsedRooms} selectedRooms={selectedRooms} onRoomToggle={onRoomToggle} />
          )}
        </>
      )}

      {selectedMode === 'zone' && areaSelectionMode === 'zone' && (
        <div className="vacuum-map__overlay">
          {zone.length > 0 ? t('vacuum_map.zone_overlay_resize') : t('vacuum_map.zone_overlay_create')}
        </div>
      )}

      {selectedMode === 'zone' && areaSelectionMode === 'spot' && (
        <div className="vacuum-map__overlay">
          {spots.length > 0 ? t('vacuum_map.spot_overlay_add') : t('vacuum_map.spot_overlay_create')}
        </div>
      )}
    </div>
  );
}
