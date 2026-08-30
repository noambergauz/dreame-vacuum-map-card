import { useState, useCallback } from 'react';
import { useTransformContext, useTransformEffect } from 'react-zoom-pan-pinch';
import type { Zone } from '@/types/homeassistant';
import { useMachineState } from '@/contexts';
import { logger } from '@/utils/logger';

interface ZoneOverlayProps {
  zones: Zone[];
  onZonesChange: (zones: Zone[]) => void;
  clearZoneLabel: string;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

type ResizeHandle = 'top' | 'right' | 'bottom' | 'left' | 'move' | null;

/**
 * Zone selection overlay that works inside TransformComponent.
 * Handles zone creation (click) and resizing/moving (drag edge handles/body).
 * The zone rectangles pan/zoom with the map content.
 */
export function ZoneOverlay({ zones, onZonesChange, clearZoneLabel, contentRef }: ZoneOverlayProps) {
  const transformContext = useTransformContext();
  const { phase } = useMachineState();
  const isInCleaningSession = phase === 'cleaning' || phase === 'paused';
  const [resizingHandle, setResizingHandle] = useState<ResizeHandle>(null);
  const [activeZoneIndex, setActiveZoneIndex] = useState<number | null>(null);

  // Track scale reactively to counter-scale handles for consistent visual size
  const [scale, setScale] = useState(transformContext.state.scale);
  useTransformEffect(
    useCallback((state) => {
      setScale(state.state.scale);
    }, [])
  );
  const handleScale = 1 / scale;
  const [resizeStartZone, setResizeStartZone] = useState<Zone | null>(null);
  const [dragStartCoord, setDragStartCoord] = useState<{ x: number; y: number } | null>(null);

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

      logger.debug('Zone', 'Created at click:', coords, newZone);
      onZonesChange([...zones, newZone]);
    },
    [getContentCoordinates, onZonesChange, resizingHandle, zones]
  );

  const getClientPosition = (e: React.MouseEvent | React.TouchEvent) => {
    if ('touches' in e && e.touches.length > 0) {
      return { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY };
    }
    return { clientX: (e as React.MouseEvent).clientX, clientY: (e as React.MouseEvent).clientY };
  };

  const handleResizeStart = (e: React.MouseEvent | React.TouchEvent, index: number, handle: ResizeHandle) => {
    e.stopPropagation();
    e.preventDefault();
    if (!zones[index]) return;

    setResizingHandle(handle);
    setActiveZoneIndex(index);
    setResizeStartZone(zones[index]);

    if (handle === 'move') {
      const { clientX, clientY } = getClientPosition(e);
      const coords = getContentCoordinates(clientX, clientY);
      setDragStartCoord(coords);
    } else {
      setDragStartCoord(null);
    }
  };

  const handleResizeMove = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!resizingHandle || resizeStartZone === null || activeZoneIndex === null) return;

      const { clientX, clientY } = getClientPosition(e);
      const coords = getContentCoordinates(clientX, clientY);
      if (!coords) return;

      const newZone: Zone = { ...resizeStartZone };
      const minSize = 5;

      switch (resizingHandle) {
        case 'top':
          newZone.y1 = Math.min(coords.y, resizeStartZone.y2 - minSize);
          break;
        case 'bottom':
          newZone.y2 = Math.max(coords.y, resizeStartZone.y1 + minSize);
          break;
        case 'left':
          newZone.x1 = Math.min(coords.x, resizeStartZone.x2 - minSize);
          break;
        case 'right':
          newZone.x2 = Math.max(coords.x, resizeStartZone.x1 + minSize);
          break;
        case 'move': {
          if (!dragStartCoord) return;
          const dx = coords.x - dragStartCoord.x;
          const dy = coords.y - dragStartCoord.y;
          const width = resizeStartZone.x2 - resizeStartZone.x1;
          const height = resizeStartZone.y2 - resizeStartZone.y1;

          let newX1 = resizeStartZone.x1 + dx;
          let newY1 = resizeStartZone.y1 + dy;
          let newX2 = resizeStartZone.x2 + dx;
          let newY2 = resizeStartZone.y2 + dy;

          if (newX1 < 0) {
            newX1 = 0;
            newX2 = width;
          }
          if (newY1 < 0) {
            newY1 = 0;
            newY2 = height;
          }
          if (newX2 > 100) {
            newX2 = 100;
            newX1 = 100 - width;
          }
          if (newY2 > 100) {
            newY2 = 100;
            newY1 = 100 - height;
          }

          newZone.x1 = newX1;
          newZone.y1 = newY1;
          newZone.x2 = newX2;
          newZone.y2 = newY2;
          break;
        }
      }

      const newZones = [...zones];
      newZones[activeZoneIndex] = newZone;
      onZonesChange(newZones);
    },
    [resizingHandle, resizeStartZone, activeZoneIndex, dragStartCoord, getContentCoordinates, onZonesChange, zones]
  );

  const handleResizeEnd = useCallback(() => {
    setResizingHandle(null);
    setResizeStartZone(null);
    setActiveZoneIndex(null);
    setDragStartCoord(null);
  }, []);

  const handleClearZone = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    const newZones = [...zones];
    newZones.splice(index, 1);
    onZonesChange(newZones);
    setResizingHandle(null);
    setResizeStartZone(null);
    setActiveZoneIndex(null);
    setDragStartCoord(null);
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
      {zones.map((zone, index) => (
        <div
          key={index}
          className="vacuum-map__zone"
          style={{
            left: `${zone.x1}%`,
            top: `${zone.y1}%`,
            width: `${zone.x2 - zone.x1}%`,
            height: `${zone.y2 - zone.y1}%`,
            cursor: resizingHandle ? 'inherit' : 'move',
          }}
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => {
            if (!isInCleaningSession) handleResizeStart(e, index, 'move');
          }}
          onTouchStart={(e) => {
            if (!isInCleaningSession) handleResizeStart(e, index, 'move');
          }}
        >
          {!isInCleaningSession && (
            <>
              <div
                className="vacuum-map__zone-handle vacuum-map__zone-handle--top"
                style={{ transform: `translateX(-50%) scale(${handleScale})` }}
                onMouseDown={(e) => handleResizeStart(e, index, 'top')}
                onTouchStart={(e) => handleResizeStart(e, index, 'top')}
                title="Resize"
              />
              <div
                className="vacuum-map__zone-handle vacuum-map__zone-handle--right"
                style={{ transform: `translateY(-50%) scale(${handleScale})` }}
                onMouseDown={(e) => handleResizeStart(e, index, 'right')}
                onTouchStart={(e) => handleResizeStart(e, index, 'right')}
                title="Resize"
              />
              <div
                className="vacuum-map__zone-handle vacuum-map__zone-handle--bottom"
                style={{ transform: `translateX(-50%) scale(${handleScale})` }}
                onMouseDown={(e) => handleResizeStart(e, index, 'bottom')}
                onTouchStart={(e) => handleResizeStart(e, index, 'bottom')}
                title="Resize"
              />
              <div
                className="vacuum-map__zone-handle vacuum-map__zone-handle--left"
                style={{ transform: `translateY(-50%) scale(${handleScale})` }}
                onMouseDown={(e) => handleResizeStart(e, index, 'left')}
                onTouchStart={(e) => handleResizeStart(e, index, 'left')}
                title="Resize"
              />
              <button
                className="vacuum-map__zone-clear"
                style={{ transform: `scale(${handleScale})` }}
                onClick={(e) => handleClearZone(e, index)}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                title={clearZoneLabel}
              >
                ×
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
