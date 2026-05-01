import { DataDrivenSection } from '../EntityRenderers';
import { CARPET_SETTINGS_SECTION } from '@/config/entity-ui-mapping';
import './CarpetSettingsSection.scss';

export function CarpetSettingsSection() {
  return <DataDrivenSection section={CARPET_SETTINGS_SECTION} className="carpet-settings-section" />;
}
