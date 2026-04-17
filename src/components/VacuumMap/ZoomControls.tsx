import { Plus, Minus, Maximize2 } from 'lucide-react';
import { useTranslation } from '../../hooks';
import './ZoomControls.scss';

interface ZoomControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
}

export function ZoomControls({ onZoomIn, onZoomOut, onReset }: ZoomControlsProps) {
  const { t } = useTranslation();

  return (
    <div className="zoom-controls">
      <button
        className="zoom-controls__button"
        onClick={onZoomIn}
        title={t('vacuum_map.zoom_in')}
        aria-label={t('vacuum_map.zoom_in')}
      >
        <Plus size={18} />
      </button>
      <button
        className="zoom-controls__button"
        onClick={onZoomOut}
        title={t('vacuum_map.zoom_out')}
        aria-label={t('vacuum_map.zoom_out')}
      >
        <Minus size={18} />
      </button>
      <button
        className="zoom-controls__button"
        onClick={onReset}
        title={t('vacuum_map.zoom_reset')}
        aria-label={t('vacuum_map.zoom_reset')}
      >
        <Maximize2 size={16} />
      </button>
    </div>
  );
}
