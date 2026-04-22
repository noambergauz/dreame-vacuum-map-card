import { Map, List, Plus, Minus, Maximize2, Lock, LockOpen } from 'lucide-react';
import type { RoomViewMode } from '../../types/homeassistant';
import { useTranslation } from '../../hooks';
import './MapControls.scss';

interface MapControlsProps {
  viewMode?: RoomViewMode;
  onViewToggle?: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onZoomReset: () => void;
  showViewToggle?: boolean;
  showZoomControls?: boolean;
  isMapLocked: boolean;
  onToggleLock: () => void;
}

export function MapControls({
  viewMode,
  onViewToggle,
  onZoomIn,
  onZoomOut,
  onZoomReset,
  showViewToggle = false,
  showZoomControls = true,
  isMapLocked,
  onToggleLock,
}: MapControlsProps) {
  const { t } = useTranslation();
  const isMapView = viewMode === 'map';
  const viewLabel = isMapView ? t('vacuum_map.switch_to_list') : t('vacuum_map.switch_to_map');
  const ViewIcon = isMapView ? List : Map;
  const lockLabel = isMapLocked ? t('vacuum_map.unlock_map') : t('vacuum_map.lock_map');
  const LockIcon = isMapLocked ? Lock : LockOpen;

  return (
    <div className="map-controls">
      {showViewToggle && onViewToggle && (
        <button className="map-controls__button" onClick={onViewToggle} aria-label={viewLabel} title={viewLabel}>
          <ViewIcon size={18} />
        </button>
      )}
      {showZoomControls && !isMapLocked && (
        <>
          <button
            className="map-controls__button"
            onClick={onZoomIn}
            aria-label={t('vacuum_map.zoom_in')}
            title={t('vacuum_map.zoom_in')}
          >
            <Plus size={18} />
          </button>
          <button
            className="map-controls__button"
            onClick={onZoomOut}
            aria-label={t('vacuum_map.zoom_out')}
            title={t('vacuum_map.zoom_out')}
          >
            <Minus size={18} />
          </button>
          <button
            className="map-controls__button"
            onClick={onZoomReset}
            aria-label={t('vacuum_map.zoom_reset')}
            title={t('vacuum_map.zoom_reset')}
          >
            <Maximize2 size={16} />
          </button>
        </>
      )}
      <button
        className={`map-controls__button map-controls__button--lock${isMapLocked ? ' map-controls__button--locked' : ''}`}
        onClick={onToggleLock}
        aria-label={lockLabel}
        title={lockLabel}
      >
        <LockIcon size={16} />
      </button>
    </div>
  );
}
