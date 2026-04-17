import { Map, List, Plus, Minus, Maximize2 } from 'lucide-react';
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
}

export function MapControls({
  viewMode,
  onViewToggle,
  onZoomIn,
  onZoomOut,
  onZoomReset,
  showViewToggle = false,
  showZoomControls = true,
}: MapControlsProps) {
  const { t } = useTranslation();
  const isMapView = viewMode === 'map';
  const viewLabel = isMapView ? t('vacuum_map.switch_to_list') : t('vacuum_map.switch_to_map');
  const ViewIcon = isMapView ? List : Map;

  return (
    <div className="map-controls">
      {showViewToggle && onViewToggle && (
        <button className="map-controls__button" onClick={onViewToggle} aria-label={viewLabel} title={viewLabel}>
          <ViewIcon size={18} />
        </button>
      )}
      {showZoomControls && (
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
    </div>
  );
}
