import { Modal, Accordion } from '@/components/common';
import { useTranslation } from '@/hooks';
import { AIDetectionSection } from './sections/AIDetectionSection';
import { CarpetSettingsSection } from './sections/CarpetSettingsSection';
import { ConsumablesSection } from './sections/ConsumablesSection';
import { DeviceInfoSection } from './sections/DeviceInfoSection';
import { DockSettingsSection } from './sections/DockSettingsSection';
import { EdgeCornerSection } from './sections/EdgeCornerSection';
import { FloorSettingsSection } from './sections/FloorSettingsSection';
import { QuickSettingsSection } from './sections/QuickSettingsSection';
import { StationControlsSection } from './sections/StationControlsSection';
import { VolumeSection } from './sections/VolumeSection';
import { Brain, Gauge, Info, Layers, Settings2, Volume2, Home, Footprints, CornerDownRight, Dock } from 'lucide-react';
import './SettingsPanel.scss';

interface SettingsPanelProps {
  opened: boolean;
  onClose: () => void;
}

export function SettingsPanel({ opened, onClose }: SettingsPanelProps) {
  const { t } = useTranslation();

  return (
    <Modal opened={opened} onClose={onClose}>
      <div className="settings-panel">
        <h2 className="settings-panel__title">{t('settings.title')}</h2>

        <div className="settings-panel__scroll-wrapper">
          <div className="settings-panel__sections">
            <Accordion title={t('settings.carpet.title')} icon={<Layers />}>
              <CarpetSettingsSection />
            </Accordion>

            <Accordion title={t('settings.floor.title')} icon={<Footprints />}>
              <FloorSettingsSection />
            </Accordion>

            <Accordion title={t('settings.edge_corner.title')} icon={<CornerDownRight />}>
              <EdgeCornerSection />
            </Accordion>

            <Accordion title={t('settings.dock.title')} icon={<Dock />}>
              <DockSettingsSection />
            </Accordion>

            <Accordion title={t('settings.consumables.title')} icon={<Gauge />}>
              <ConsumablesSection />
            </Accordion>

            <Accordion title={t('settings.device_info.title')} icon={<Info />}>
              <DeviceInfoSection />
            </Accordion>

            <Accordion title={t('settings.volume.title')} icon={<Volume2 />}>
              <VolumeSection />
            </Accordion>

            <Accordion title={t('settings.quick_settings.title')} icon={<Settings2 />}>
              <QuickSettingsSection />
            </Accordion>

            <Accordion title={t('settings.station_controls.title')} icon={<Home />}>
              <StationControlsSection />
            </Accordion>

            <Accordion title={t('settings.ai_detection.title')} icon={<Brain />}>
              <AIDetectionSection />
            </Accordion>
          </div>
        </div>
      </div>
    </Modal>
  );
}
