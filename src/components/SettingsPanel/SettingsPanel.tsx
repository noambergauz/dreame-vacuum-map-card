import { Modal, Accordion } from '../common';
import { useTranslation } from '../../hooks/useTranslation';
import type { SupportedLanguage } from '../../i18n/locales';
import { AIDetectionSection } from './sections/AIDetectionSection';
import { CarpetSettingsSection } from './sections/CarpetSettingsSection';
import { ConsumablesSection } from './sections/ConsumablesSection';
import { DeviceInfoSection } from './sections/DeviceInfoSection';
import { MapManagementSection } from './sections/MapManagementSection';
import { QuickSettingsSection } from './sections/QuickSettingsSection';
import { VolumeSection } from './sections/VolumeSection';
import { Brain, Gauge, Info, Layers, Map, Settings2, Volume2 } from 'lucide-react';

import type { Hass, HassEntity, HassConfig } from '../../types/homeassistant';
import './SettingsPanel.scss';

interface SettingsPanelProps {
  opened: boolean;
  onClose: () => void;
  hass: Hass;
  entity: HassEntity;
  config: HassConfig;
  language?: SupportedLanguage;
}

export function SettingsPanel({ opened, onClose, hass, entity, config, language }: SettingsPanelProps) {
  const { t } = useTranslation(language);

  return (
    <Modal opened={opened} onClose={onClose}>
      <div className="settings-panel">
        <h2 className="settings-panel__title">{t('settings.title')}</h2>

        <div className="settings-panel__scroll-wrapper">
          <div className="settings-panel__sections">
            <Accordion title={t('settings.consumables.title')} icon={<Gauge />} defaultOpen>
              <ConsumablesSection hass={hass} entity={entity} language={language} />
            </Accordion>

            <Accordion title={t('settings.device_info.title')} icon={<Info />}>
              <DeviceInfoSection entity={entity} language={language} />
            </Accordion>

            <Accordion title={t('settings.map_management.title')} icon={<Map />}>
              <MapManagementSection hass={hass} entity={entity} config={config} language={language} />
            </Accordion>

            <Accordion title={t('settings.volume.title')} icon={<Volume2 />}>
              <VolumeSection hass={hass} entity={entity} language={language} />
            </Accordion>

            <Accordion title={t('settings.quick_settings.title')} icon={<Settings2 />}>
              <QuickSettingsSection hass={hass} entity={entity} language={language} />
            </Accordion>

            <Accordion title={t('settings.carpet.title')} icon={<Layers />}>
              <CarpetSettingsSection hass={hass} entity={entity} language={language} />
            </Accordion>

            <Accordion title={t('settings.ai_detection.title')} icon={<Brain />}>
              <AIDetectionSection hass={hass} entity={entity} language={language} />
            </Accordion>
          </div>
        </div>
      </div>
    </Modal>
  );
}
