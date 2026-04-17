import { useState, useCallback } from 'react';
import { useTransformContext } from 'react-zoom-pan-pinch';
import type { Zone } from '../../types/homeassistant';

interface ZoneOverlayProps {
  zone: Zone | null;
  onZoneChange: (zone: Zone | null) => void;
  clearZoneLabel: string;
  isStarted?: boolean;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

type ResizeHandle = 'tl' | 'tr' | 'bl' | 'br' | null;

/**
 * Zone selection overlay that works inside TransformComponent.
 * Handles zone creation (click) and resizing (drag handles).
 * The zone rectangle pans/zooms with the map content.
 */
export function ZoneOverlay({ zone, onZoneChange, clearZoneLabel, isStarted = false, contentRef }: ZoneOverlayProps) {
  const transformContext = useTransformContext();
  const [resizingHandle, setResizingHandle] = useState<ResizeHandle>(null);
  const [resizeStartZone, setResizeStartZone] = useState<Zone | null>(null);

  const getContentCoordinates = useCallback(
    (clientX: number, clientY: number): { x: number; y: number } | null => {
      const content = contentRef.current;
      if (!content) return null;

      const rect = content.getBoundingClientRect();
      const { scale } = transformContext.state;

      // Get position relative to the transformed content
      const x = (clientX - rect.left) / scale;
      const y = (clientY - rect.top) / scale;

      // Convert to percentage of content size
      const contentWidth = rect.width / scale;
      const contentHeight = rect.height / scale;

      const xPercent = Math.max(0, Math.min(100, (x / contentWidth) * 100));
      const yPercent = Math.max(0, Math.min(100, (y / contentHeight) * 100));

      return { x: xPercent, y: yPercent };
    },
    [contentRef, transformContext]
  );

  const handleContentClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (resizingHandle) return;
      e.stopPropagation();

      const coords = getContentCoordinates(e.clientX, e.clientY);
      if (!coords) return;

      const size = 15;
      const newZone: Zone = {
        x1: Math.max(0, coords.x - size / 2),
        y1: Math.max(0, coords.y - size / 2),
        x2: Math.min(100, coords.x + size / 2),
        y2: Math.min(100, coords.y + size / 2),
      };

      console.debug('[Zone] Created at click:', coords, newZone);
      onZoneChange(newZone);
    },
    [getContentCoordinates, onZoneChange, resizingHandle]
  );

  const handleResizeStart = (e: React.MouseEvent | React.TouchEvent, handle: ResizeHandle) => {
    e.stopPropagation();
    e.preventDefault();
    if (!zone) return;

    setResizingHandle(handle);
    setResizeStartZone(zone);
  };

  const getClientPosition = (e: React.MouseEvent | React.TouchEvent) => {
    if ('touches' in e && e.touches.length > 0) {
      return { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY };
    }
    return { clientX: (e as React.MouseEvent).clientX, clientY: (e as React.MouseEvent).clientY };
  };

  const handleResizeMove = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!resizingHandle || !resizeStartZone) return;

      const { clientX, clientY } = getClientPosition(e);
      const coords = getContentCoordinates(clientX, clientY);
      if (!coords) return;

      const newZone: Zone = { ...resizeStartZone };

      switch (resizingHandle) {
        case 'tl':
          newZone.x1 = Math.min(coords.x, resizeStartZone.x2 - 5);
          newZone.y1 = Math.min(coords.y, resizeStartZone.y2 - 5);
          break;
        case 'tr':
          newZone.x2 = Math.max(coords.x, resizeStartZone.x1 + 5);
          newZone.y1 = Math.min(coords.y, resizeStartZone.y2 - 5);
          break;
        case 'bl':
          newZone.x1 = Math.min(coords.x, resizeStartZone.x2 - 5);
          newZone.y2 = Math.max(coords.y, resizeStartZone.y1 + 5);
          break;
        case 'br':
          newZone.x2 = Math.max(coords.x, resizeStartZone.x1 + 5);
          newZone.y2 = Math.max(coords.y, resizeStartZone.y1 + 5);
          break;
      }

      onZoneChange(newZone);
    },
    [resizingHandle, resizeStartZone, getContentCoordinates, onZoneChange]
  );

  const handleResizeEnd = useCallback(() => {
    setResizingHandle(null);
    setResizeStartZone(null);
  }, []);

  const handleClearZone = (e: React.MouseEvent) => {
    e.stopPropagation();
    onZoneChange(null);
    setResizingHandle(null);
    setResizeStartZone(null);
  };

  return (
    <div
      className="vacuum-map__zone-container"
      onClick={handleContentClick}
      onMouseMove={handleResizeMove}
      onMouseUp={handleResizeEnd}
      onMouseLeave={handleResizeEnd}
      onTouchMove={handleResizeMove}
      onTouchEnd={handleResizeEnd}
      onTouchCancel={handleResizeEnd}
    >
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
          {!isStarted && (
            <>
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
              <button className="vacuum-map__zone-clear" onClick={handleClearZone} title={clearZoneLabel}>
                ×
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
