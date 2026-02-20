import { useTranslation } from '../../../hooks';
import { getAttr, isString, isNumber } from '../../../utils';
import type { HassEntity } from '../../../types/homeassistant';
import './DeviceInfoSection.scss';

interface DeviceInfoSectionProps {
  entity: HassEntity;
}

interface InfoItem {
  labelKey: string;
  value: string | number;
  unit?: string;
}

export function DeviceInfoSection({ entity }: DeviceInfoSectionProps) {
  const { t } = useTranslation();
  const attributes = entity.attributes;

  const rawFirmware = attributes.firmware_version;
  const firmwareVersion = isString(rawFirmware) || isNumber(rawFirmware) ? rawFirmware : '-';
  const totalCleanedArea = getAttr(attributes.total_cleaned_area, 0);
  const totalCleaningTime = getAttr(attributes.total_cleaning_time, 0);
  const cleaningCount = getAttr(attributes.cleaning_count, 0);

  // Network info is nested under 'ap' in some implementations
  const apInfo = attributes.ap as { ssid?: string; rssi?: number; ip?: string } | undefined;
  const wifiSsid = apInfo?.ssid ?? '-';
  const wifiRssi = apInfo?.rssi ?? '-';
  const wifiIp = apInfo?.ip ?? '-';

  const infoItems: InfoItem[] = [
    { labelKey: 'settings.device_info.firmware', value: firmwareVersion },
    { labelKey: 'settings.device_info.total_area', value: totalCleanedArea, unit: 'm²' },
    { labelKey: 'settings.device_info.total_time', value: totalCleaningTime, unit: 'min' },
    { labelKey: 'settings.device_info.total_cleans', value: cleaningCount },
    { labelKey: 'settings.device_info.wifi_ssid', value: wifiSsid },
    { labelKey: 'settings.device_info.wifi_signal', value: wifiRssi, unit: 'dBm' },
    { labelKey: 'settings.device_info.ip_address', value: wifiIp },
  ];

  return (
    <div className="device-info-section">
      {infoItems.map((item) => (
        <div key={item.labelKey} className="device-info-section__item">
          <span className="device-info-section__label">{t(item.labelKey)}</span>
          <span className="device-info-section__value">
            {item.value}
            {item.unit && ` ${item.unit}`}
          </span>
        </div>
      ))}
    </div>
  );
}
