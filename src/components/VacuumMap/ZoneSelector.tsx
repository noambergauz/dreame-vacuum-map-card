import { useState } from 'react';
import type { Zone } from '@/types/homeassistant';
import { useMachineState } from '@/contexts';

interface ZoneSelectorProps {
  zone: Zone | null;
  onZoneChange: (zone: Zone | null) => void;
  clearZoneLabel: string;
}

type ResizeHandle = 'tl' | 'tr' | 'bl' | 'br' | null;

export function ZoneSelector({ zone, onZoneChange, clearZoneLabel }: ZoneSelectorProps) {
  const { phase } = useMachineState();
  const isInCleaningSession = phase === 'cleaning' || phase === 'paused';
  const [resizingHandle, setResizingHandle] = useState<ResizeHandle>(null);
  const [resizeStartZone, setResizeStartZone] = useState<Zone | null>(null);

  const handleResizeStart = (e: React.MouseEvent | React.TouchEvent, handle: ResizeHandle) => {
    e.stopPropagation();
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

  const handleResizeMove = (e: React.MouseEvent | React.TouchEvent, rect: DOMRect) => {
    if (!resizingHandle || !resizeStartZone) return;

    const { clientX, clientY } = getClientPosition(e);
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const xPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const yPercent = Math.max(0, Math.min(100, (y / rect.height) * 100));

    const newZone: Zone = { ...resizeStartZone };

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

  const isResizing = () => resizingHandle !== null;

  return {
    resizingHandle,
    handleResizeMove,
    handleResizeEnd,
    isResizing,
    renderZone: () =>
      zone && (
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
          {!isInCleaningSession && (
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
      ),
  };
}
