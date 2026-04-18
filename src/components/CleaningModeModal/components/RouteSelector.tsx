import { CircularButton } from '../../common';
import type { CleaningRoute } from '../../../types/vacuum';
import { getCleaningRouteIcon, convertToLowerCase } from '../../../utils';
import { useTranslation } from '../../../hooks';

interface RouteSelectorProps {
  cleaningRoute: string;
  cleaningRouteList: string[];
  onSelect: (entityId: string, value: string) => void;
  entityId: string;
}

/**
 * Get translated route label
 */
function getRouteLabel(route: string, t: (key: string) => string): string {
  const key = `cleaning_routes.${route.toLowerCase()}`;
  const translated = t(key);
  // If translation returns the key itself, fallback to original value
  return translated === key ? route : translated;
}

export function RouteSelector({ cleaningRoute, cleaningRouteList, onSelect, entityId }: RouteSelectorProps) {
  const { t } = useTranslation();

  return (
    <div className="cleaning-mode-modal__route-grid">
      {cleaningRouteList.map((route, idx) => (
        <div key={idx} className="cleaning-mode-modal__route-option">
          <CircularButton
            size="small"
            selected={route === cleaningRoute}
            onClick={() => onSelect(entityId, convertToLowerCase(route))}
            icon={getCleaningRouteIcon(route as CleaningRoute)}
          />
          <span className="cleaning-mode-modal__route-label">{getRouteLabel(route, t)}</span>
        </div>
      ))}
    </div>
  );
}
