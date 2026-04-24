import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { ChevronDown, Check, Map } from 'lucide-react';
import { useTranslation } from '@/hooks';
import { useEntity, useHass, useConfig } from '@/contexts';
import './MapSelector.scss';

interface MapInfo {
  id: number;
  name: string;
  custom_name?: string | null;
}

export function MapSelector() {
  const { t } = useTranslation();
  const entity = useEntity();
  const hass = useHass();
  const config = useConfig();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const attributes = entity.attributes;

  // Get available maps from entity attributes
  const maps = useMemo(() => (attributes.maps as MapInfo[] | undefined) ?? [], [attributes.maps]);
  const selectedMapId = attributes.selected_map_id ?? attributes.selected_map;

  // Check if vacuum is active (can't change maps while running)
  const isVacuumActive = !!attributes.started;

  // Derive the select entity ID for map selection
  const entityName = config.entity?.split('.')[1] ?? '';
  const selectEntityId = `select.${entityName}_selected_map`;

  // Get the currently selected map
  const selectedMap = useMemo(() => maps.find((m) => m.id === selectedMapId), [maps, selectedMapId]);
  const selectedMapName = selectedMap?.custom_name || selectedMap?.name || t('map_selector.unknown');

  // Handle map selection
  const handleMapSelect = useCallback(
    (map: MapInfo) => {
      hass.callService('select', 'select_option', {
        entity_id: selectEntityId,
        option: map.name,
      });
      setIsOpen(false);
    },
    [hass, selectEntityId]
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const path = event.composedPath();
      if (containerRef.current && !path.includes(containerRef.current)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Close dropdown on Escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  return (
    <div className="map-selector" ref={containerRef}>
      <button
        className={`map-selector__button ${isOpen ? 'map-selector__button--open' : ''} ${isVacuumActive ? 'map-selector__button--disabled' : ''}`}
        onClick={() => !isVacuumActive && setIsOpen(!isOpen)}
        type="button"
        disabled={isVacuumActive}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="map-selector__icon">
          <Map size={16} />
        </span>
        <span className="map-selector__label">{selectedMapName}</span>
        <ChevronDown className={`map-selector__chevron ${isOpen ? 'map-selector__chevron--open' : ''}`} />
      </button>

      {isOpen && (
        <div className="map-selector__dropdown" role="listbox">
          {maps.map((map) => {
            const isSelected = map.id === selectedMapId;
            const displayName = map.custom_name || map.name;

            return (
              <button
                key={map.id}
                className={`map-selector__option ${isSelected ? 'map-selector__option--selected' : ''}`}
                onClick={() => handleMapSelect(map)}
                type="button"
                role="option"
                aria-selected={isSelected}
              >
                <span className="map-selector__option-name">{displayName}</span>
                {isSelected && <Check className="map-selector__option-check" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
