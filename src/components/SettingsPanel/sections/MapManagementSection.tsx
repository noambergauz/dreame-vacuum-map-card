import { useCallback, useMemo } from 'react';
import { useTranslation } from '../../../hooks';
import { useEntity, useHass, useConfig } from '../../../contexts';
import './MapManagementSection.scss';

interface MapInfo {
  id: number;
  name: string;
}

export function MapManagementSection() {
  const { t } = useTranslation();
  const entity = useEntity();
  const hass = useHass();
  const config = useConfig();
  const attributes = entity.attributes;

  // Get available maps from entity attributes
  const maps = useMemo(() => (attributes.maps as MapInfo[] | undefined) ?? [], [attributes.maps]);
  const selectedMapId = attributes.selected_map_id ?? attributes.selected_map;

  // Derive the select entity ID for map selection
  const entityName = config.entity?.split('.')[1] ?? '';
  const selectEntityId = `select.${entityName}_selected_map`;

  const handleMapSelect = useCallback(
    (mapId: number) => {
      // Find the map name to use as the option value
      const map = maps.find((m) => m.id === mapId);
      if (map) {
        hass.callService('select', 'select_option', {
          entity_id: selectEntityId,
          option: map.name,
        });
      }
    },
    [hass, selectEntityId, maps]
  );

  if (maps.length === 0) {
    return (
      <div className="map-management-section">
        <p className="map-management-section__empty">{t('settings.map_management.no_maps')}</p>
      </div>
    );
  }

  return (
    <div className="map-management-section">
      <p className="map-management-section__description">{t('settings.map_management.description')}</p>
      <div className="map-management-section__maps">
        {maps.map((map) => (
          <button
            key={map.id}
            className={`map-management-section__map ${map.id === selectedMapId ? 'map-management-section__map--active' : ''}`}
            onClick={() => handleMapSelect(map.id)}
            type="button"
          >
            {map.name}
          </button>
        ))}
      </div>
    </div>
  );
}
