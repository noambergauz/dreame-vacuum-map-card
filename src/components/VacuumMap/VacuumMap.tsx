import { useState, useRef } from 'react';
import type { Hass, RoomPosition, CleaningMode, Zone } from '../../types/homeassistant';
import type { SupportedLanguage } from '../../i18n/locales';
import { useTranslation } from '../../hooks';
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
}

type ResizeHandle = 'tl' | 'tr' | 'bl' | 'br' | null;

export function VacuumMap({
  hass,
  mapEntityId,
  selectedMode,
  selectedRooms,
  rooms,
  onRoomToggle,
  zone,
  onZoneChange,
  onImageDimensionsChange,
  language = 'en',
}: VacuumMapProps) {
  const { t } = useTranslation(language);
  const mapEntity = hass.states[mapEntityId];
  const mapUrl = mapEntity?.attributes?.entity_picture;
  const mapRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [resizingHandle, setResizingHandle] = useState<ResizeHandle>(null);
  const [resizeStartZone, setResizeStartZone] = useState<Zone | null>(null);

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (selectedMode !== 'zone') return;
    if (resizingHandle) return;

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

  const handleResizeStart = (e: React.MouseEvent | React.TouchEvent, handle: ResizeHandle) => {
    e.stopPropagation();
    if (!zone) return;
    
    setResizingHandle(handle);
    setResizeStartZone(zone);
  };

  const getClientPosition = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if ('touches' in e && e.touches.length > 0) {
      return { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY };
    }
    return { clientX: (e as React.MouseEvent).clientX, clientY: (e as React.MouseEvent).clientY };
  };

  const handleResizeMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!resizingHandle || !resizeStartZone) return;

    const rect = mapRef.current?.getBoundingClientRect();
    if (!rect) return;

    const { clientX, clientY } = getClientPosition(e);
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const xPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const yPercent = Math.max(0, Math.min(100, (y / rect.height) * 100));

    let newZone: Zone = { ...resizeStartZone };

    switch (resizingHandle) {
      case 'tl':
        newZone.x1 = Math.min(xPercent, resizeStartZone.x2 - 5);
        newZone.y1 = Math.min(yPercent, resizeStartZone.y2 - 5);
        break;
      case 'tr':
        newZone.x2 = Math.max(xPercent, resizeStartZone.x1 + 5);
        newZone.y1 = Math.min(yPercent, resizeStartZone.y2 - 5);
        break;
      case 'bl':
        newZone.x1 = Math.min(xPercent, resizeStartZone.x2 - 5);
        newZone.y2 = Math.max(yPercent, resizeStartZone.y1 + 5);
        break;
      case 'br':
        newZone.x2 = Math.max(xPercent, resizeStartZone.x1 + 5);
        newZone.y2 = Math.max(yPercent, resizeStartZone.y1 + 5);
        break;
    }

    onZoneChange(newZone);
  };

  const handleResizeEnd = () => {
    setResizingHandle(null);
    setResizeStartZone(null);
  };

  const handleClearZone = (e: React.MouseEvent) => {
    e.stopPropagation();
    onZoneChange(null);
    setResizingHandle(null);
    setResizeStartZone(null);
  };

  return (
    <div 
      className="vacuum-map" 
      ref={mapRef} 
      onClick={handleMapClick}
      onMouseMove={handleResizeMove}
      onMouseUp={handleResizeEnd}
      onMouseLeave={handleResizeEnd}
      onTouchMove={handleResizeMove}
      onTouchEnd={handleResizeEnd}
      onTouchCancel={handleResizeEnd}
    >
      {mapUrl ? (
        <img
          ref={imageRef}
          src={hass.hassUrl(mapUrl)}
          alt="Vacuum Map"
          className="vacuum-map__image"
          onLoad={(e) => {
            const img = e.currentTarget;
            if (img.naturalWidth && img.naturalHeight) {
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

          <div className="vacuum-map__rooms">
            {rooms.map((room) => (
              <button
                key={room.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onRoomToggle(room.id, room.name);
                }}
                className={`vacuum-map__room ${
                  selectedRooms.has(room.id) ? 'vacuum-map__room--selected' : ''
                }`}
                style={{
                  left: `${room.x}%`,
                  top: `${room.y}%`,
                }}
                title={room.name}
              >
                {room.id}
              </button>
            ))}
          </div>
        </>
      )}

      {selectedMode === 'zone' && (
        <>
          <div className="vacuum-map__overlay">
            {zone ? t('vacuum_map.zone_overlay_resize') : t('vacuum_map.zone_overlay_create')}
          </div>

          {zone && (
            <div
              className="vacuum-map__zone"
              style={{
                left: `${zone.x1}%`,
                top: `${zone.y1}%`,
                width: `${zone.x2 - zone.x1}%`,
                height: `${zone.y2 - zone.y1}%`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Resize handles */}
              <div
                className="vacuum-map__zone-handle vacuum-map__zone-handle--tl"
                onMouseDown={(e) => handleResizeStart(e, 'tl')}
                onTouchStart={(e) => handleResizeStart(e, 'tl')}
                title="Resize"
              />
              <div
                className="vacuum-map__zone-handle vacuum-map__zone-handle--tr"
                onMouseDown={(e) => handleResizeStart(e, 'tr')}
                onTouchStart={(e) => handleResizeStart(e, 'tr')}
                title="Resize"
              />
              <div
                className="vacuum-map__zone-handle vacuum-map__zone-handle--bl"
                onMouseDown={(e) => handleResizeStart(e, 'bl')}
                onTouchStart={(e) => handleResizeStart(e, 'bl')}
                title="Resize"
              />
              <div
                className="vacuum-map__zone-handle vacuum-map__zone-handle--br"
                onMouseDown={(e) => handleResizeStart(e, 'br')}
                onTouchStart={(e) => handleResizeStart(e, 'br')}
                title="Resize"
              />
              <button
                className="vacuum-map__zone-clear"
                onClick={handleClearZone}
                title={t('vacuum_map.clear_zone')}
              >
                ×
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
