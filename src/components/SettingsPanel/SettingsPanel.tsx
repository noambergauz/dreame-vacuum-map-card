import { Modal, Accordion } from '@/components/common';
import { useTranslation, useVacuumCapabilities } from '@/hooks';
import { CAPABILITY } from '@/constants';
import { AIDetectionSection } from './sections/AIDetectionSection';
import { CarpetSettingsSection } from './sections/CarpetSettingsSection';
import { ConsumablesSection } from './sections/ConsumablesSection';
import { DeviceInfoSection } from './sections/DeviceInfoSection';
import { DockSettingsSection } from './sections/DockSettingsSection';
import { EdgeCornerSection } from './sections/EdgeCornerSection';
import { FloorSettingsSection } from './sections/FloorSettingsSection';
import { MapSettingsSection } from './sections/MapSettingsSection';
import { QuickSettingsSection } from './sections/QuickSettingsSection';
import { VolumeSection } from './sections/VolumeSection';
import { Brain, Gauge, Info, Layers, Settings2, Volume2, Footprints, CornerDownRight, Dock, Map } from 'lucide-react';
import './SettingsPanel.scss';

interface SettingsPanelProps {
  opened: boolean;
  onClose: () => void;
}

export function SettingsPanel({ opened, onClose }: SettingsPanelProps) {
  const { t } = useTranslation();
  const capabilities = useVacuumCapabilities();

  // Check capabilities for each section
  const hasCarpetRecognition = capabilities.has(CAPABILITY.CARPET_RECOGNITION);
  const hasAiDetection = capabilities.has(CAPABILITY.AI_DETECTION);
  const hasEdgeCorner = capabilities.hasAny(
    CAPABILITY.MOP_PAD_LIFTING,
    CAPABILITY.SIDE_REACH,
    CAPABILITY.MOP_PAD_SWING
  );
  const hasDockFeatures = capabilities.hasAny(
    CAPABILITY.AUTO_EMPTY_BASE,
    CAPABILITY.SELF_WASH_BASE,
    CAPABILITY.AUTO_ADD_DETERGENT,
    CAPABILITY.SMART_MOP_WASHING,
    CAPABILITY.WASHING_MODE,
    CAPABILITY.HOT_WASHING,
    CAPABILITY.OFF_PEAK_CHARGING,
    CAPABILITY.STATION_CLEANING,
    CAPABILITY.AUTO_REWASHING
  );

  return (
    <Modal opened={opened} onClose={onClose}>
      <div className="settings-panel">
        <h2 className="settings-panel__title">{t('settings.title')}</h2>

        <div className="settings-panel__scroll-wrapper">
          <div className="settings-panel__sections">
            <Accordion title={t('settings.consumables.title')} icon={<Gauge />}>
              <ConsumablesSection />
            </Accordion>

            <Accordion title={t('settings.quick_settings.title')} icon={<Settings2 />}>
              <QuickSettingsSection />
            </Accordion>

            {hasCarpetRecognition && (
              <Accordion title={t('settings.carpet.title')} icon={<Layers />}>
                <CarpetSettingsSection />
              </Accordion>
            )}

            <Accordion title={t('settings.floor.title')} icon={<Footprints />}>
              <FloorSettingsSection />
            </Accordion>

            {hasEdgeCorner && (
              <Accordion title={t('settings.edge_corner.title')} icon={<CornerDownRight />}>
                <EdgeCornerSection />
              </Accordion>
            )}

            <Accordion title={t('settings.volume.title')} icon={<Volume2 />}>
              <VolumeSection />
            </Accordion>

            {hasDockFeatures && (
              <Accordion title={t('settings.dock.title')} icon={<Dock />}>
                <DockSettingsSection />
              </Accordion>
            )}

            {hasAiDetection && (
              <Accordion title={t('settings.ai_detection.title')} icon={<Brain />}>
                <AIDetectionSection />
              </Accordion>
            )}

            <Accordion title={t('settings.map.title')} icon={<Map />}>
              <MapSettingsSection />
            </Accordion>

            <Accordion title={t('settings.device_info.title')} icon={<Info />}>
              <DeviceInfoSection />
            </Accordion>
          </div>
        </div>
      </div>
    </Modal>
  );
}
