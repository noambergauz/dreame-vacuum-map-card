import { useRef, useState } from 'react';
import type { Hass, RoomPosition, CleaningMode, Zone, CalibrationPoint } from '../../types/homeassistant';
import type { SupportedLanguage } from '../../i18n/locales';
import { useTranslation } from '../../hooks';
import { parseRoomsFromCamera } from '../../utils/roomParser';
import { ZoneSelector } from './ZoneSelector';
import { RoomSegments } from './RoomSegments';
import './VacuumMap.scss';

interface VacuumMapProps {
  hass: Hass;
  mapEntityId: string;
  selectedMode: CleaningMode;
  selectedRooms: Map<number, string>;
  rooms: RoomPosition[];
  onRoomToggle: (roomId: number, roomName: string) => void;
  zone: Zone | null;
  onZoneChange: (zone: Zone | null) => void;
  onImageDimensionsChange?: (width: number, height: number) => void;
  language?: SupportedLanguage;
  isStarted?: boolean;
}

export function VacuumMap({
  hass,
  mapEntityId,
  selectedMode,
  selectedRooms,
  onRoomToggle,
  zone,
  onZoneChange,
  onImageDimensionsChange,
  language = 'en',
  isStarted = false,
}: VacuumMapProps) {
  const { t } = useTranslation(language);
  const mapEntity = hass.states[mapEntityId];
  const mapUrl = mapEntity?.attributes?.entity_picture;
  const mapRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  
  const parsedRooms = parseRoomsFromCamera(hass, mapEntityId);
  const calibrationPoints = (mapEntity?.attributes?.calibration_points as CalibrationPoint[] | undefined) ?? [];
  
  const zoneSelector = ZoneSelector({
    zone,
    onZoneChange,
    clearZoneLabel: t('vacuum_map.clear_zone'),
    isStarted,
  });

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (selectedMode !== 'zone') return;
    if (zoneSelector.isResizing()) return;

    const rect = mapRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    const size = 15;
    const centerX = xPercent;
    const centerY = yPercent;

    const newZone: Zone = {
      x1: Math.max(0, centerX - size / 2),
      y1: Math.max(0, centerY - size / 2),
      x2: Math.min(100, centerX + size / 2),
      y2: Math.min(100, centerY + size / 2),
    };

    onZoneChange(newZone);
  };

  const handleResizeMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = mapRef.current?.getBoundingClientRect();
    if (!rect) return;
    zoneSelector.handleResizeMove(e, rect);
  };


  return (
    <div 
      className="vacuum-map" 
      ref={mapRef} 
      onClick={handleMapClick}
      onMouseMove={handleResizeMove}
      onMouseUp={zoneSelector.handleResizeEnd}
      onMouseLeave={zoneSelector.handleResizeEnd}
      onTouchMove={handleResizeMove}
      onTouchEnd={zoneSelector.handleResizeEnd}
      onTouchCancel={zoneSelector.handleResizeEnd}
    >
      {mapEntity && mapUrl ? (
        <img
          ref={imageRef}
          src={hass.hassUrl(mapUrl)}
          alt="Vacuum Map"
          className="vacuum-map__image"
          onLoad={(e) => {
            const img = e.currentTarget;
            if (img.naturalWidth && img.naturalHeight) {
              setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
              onImageDimensionsChange?.(img.naturalWidth, img.naturalHeight);
            }
          }}
        />
      ) : (
        <div className="vacuum-map__placeholder">
          {t('vacuum_map.no_map')}
          <br />
          <small>{t('vacuum_map.looking_for', { entity: mapEntityId })}</small>
        </div>
      )}

      {selectedMode === 'room' && (
        <>
          <div className="vacuum-map__overlay">
            {t('vacuum_map.room_overlay')}
          </div>

          {imageDimensions.width > 0 && imageDimensions.height > 0 && (
            <RoomSegments
              rooms={parsedRooms}
              selectedRooms={selectedRooms}
              onRoomToggle={onRoomToggle}
              calibrationPoints={calibrationPoints}
              imageWidth={imageDimensions.width}
              imageHeight={imageDimensions.height}
              isStarted={isStarted}
            />
          )}
        </>
      )}

      {selectedMode === 'zone' && (
        <>
          <div className="vacuum-map__overlay">
            {zone ? t('vacuum_map.zone_overlay_resize') : t('vacuum_map.zone_overlay_create')}
          </div>

          {zoneSelector.renderZone()}
        </>
      )}
    </div>
  );
}
