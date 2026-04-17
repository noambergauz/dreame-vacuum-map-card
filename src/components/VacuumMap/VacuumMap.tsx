import { useRef, useState, useCallback } from 'react';
import { TransformWrapper, TransformComponent, useControls } from 'react-zoom-pan-pinch';
import type { CleaningMode, Zone, CalibrationPoint, RoomViewMode } from '../../types/homeassistant';
import { useTranslation } from '../../hooks';
import { useHass } from '../../contexts';
import { parseRoomsFromCamera } from '../../utils/roomParser';
import { RoomSegments } from './RoomSegments';
import { MapControls } from './MapControls';
import { RoomListView } from './RoomListView';
import { ZoneOverlay } from './ZoneOverlay';
import './VacuumMap.scss';

interface VacuumMapProps {
  mapEntityId: string;
  selectedMode: CleaningMode;
  selectedRooms: Map<number, string>;
  onRoomToggle: (roomId: number, roomName: string) => void;
  zone: Zone | null;
  onZoneChange: (zone: Zone | null) => void;
  onImageDimensionsChange?: (width: number, height: number) => void;
  isStarted?: boolean;
  defaultRoomView?: RoomViewMode;
}

// Separate component to access zoom controls via hook
interface MapControlsWrapperProps {
  showViewToggle: boolean;
  showZoomControls: boolean;
  viewMode: RoomViewMode;
  onViewToggle: () => void;
}

function MapControlsWrapper({ showViewToggle, showZoomControls, viewMode, onViewToggle }: MapControlsWrapperProps) {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <MapControls
      showViewToggle={showViewToggle}
      showZoomControls={showZoomControls}
      viewMode={viewMode}
      onViewToggle={onViewToggle}
      onZoomIn={() => zoomIn()}
      onZoomOut={() => zoomOut()}
      onZoomReset={() => resetTransform()}
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
  isStarted = false,
  defaultRoomView = 'map',
}: VacuumMapProps) {
  const { t } = useTranslation();
  const hass = useHass();
  const mapEntity = hass.states[mapEntityId];
  const mapUrl = mapEntity?.attributes?.entity_picture;
  const mapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [roomViewMode, setRoomViewMode] = useState<RoomViewMode>(defaultRoomView);

  // Effective view mode: use user selection only in room mode, otherwise default
  const effectiveRoomViewMode = selectedMode === 'room' ? roomViewMode : defaultRoomView;

  const parsedRooms = parseRoomsFromCamera(hass, mapEntityId);
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

  // Determine if panning should be enabled (disabled for zone mode to allow zone creation)
  const isPanningEnabled = selectedMode !== 'zone';

  return (
    <div className="vacuum-map" ref={mapRef}>
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
          }}
          pinch={{
            step: 0.5,
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
                !isStarted &&
                imageDimensions.width > 0 &&
                imageDimensions.height > 0 && (
                  <RoomSegments
                    key={`rooms-${selectedRooms.size}-${Array.from(selectedRooms.keys()).join(',')}`}
                    rooms={parsedRooms}
                    selectedRooms={selectedRooms}
                    onRoomToggle={onRoomToggle}
                    calibrationPoints={calibrationPoints}
                    imageWidth={imageDimensions.width}
                    imageHeight={imageDimensions.height}
                    isStarted={isStarted}
                  />
                )}

              {selectedMode === 'zone' && (
                <ZoneOverlay
                  zone={zone}
                  onZoneChange={onZoneChange}
                  clearZoneLabel={t('vacuum_map.clear_zone')}
                  isStarted={isStarted}
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
          {effectiveRoomViewMode === 'map' && !isStarted && (
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
