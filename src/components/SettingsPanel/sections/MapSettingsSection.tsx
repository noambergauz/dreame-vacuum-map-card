import { DataDrivenSection } from '../EntityRenderers';
import { MAP_SETTINGS_SECTION } from '@/config/entity-ui-mapping';
import './MapSettingsSection.scss';

export function MapSettingsSection() {
  return <DataDrivenSection section={MAP_SETTINGS_SECTION} className="map-settings-section" />;
}
