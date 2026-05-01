import { DataDrivenSection } from '../EntityRenderers';
import { QUICK_SETTINGS_SECTION, QUICK_ACTIONS_SECTION } from '@/config/entity-ui-mapping';
import './QuickSettingsSection.scss';

export function QuickSettingsSection() {
  return (
    <>
      <DataDrivenSection section={QUICK_SETTINGS_SECTION} className="quick-settings-section" />
      <DataDrivenSection
        section={QUICK_ACTIONS_SECTION}
        className="quick-settings-section quick-settings-section--actions"
      />
    </>
  );
}
