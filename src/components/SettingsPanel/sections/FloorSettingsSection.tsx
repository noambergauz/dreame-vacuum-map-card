import { DataDrivenSection } from '../EntityRenderers';
import { FLOOR_SETTINGS_SECTION } from '@/config/entity-ui-mapping';
import './FloorSettingsSection.scss';

export function FloorSettingsSection() {
  return <DataDrivenSection section={FLOOR_SETTINGS_SECTION} className="floor-settings-section" />;
}
