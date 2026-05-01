import { DataDrivenSection } from '../EntityRenderers';
import { DOCK_SETTINGS_SECTION } from '@/config/entity-ui-mapping';
import './DockSettingsSection.scss';

export function DockSettingsSection() {
  return <DataDrivenSection section={DOCK_SETTINGS_SECTION} className="dock-settings-section" />;
}
