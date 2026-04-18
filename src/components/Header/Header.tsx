import { Settings } from 'lucide-react';
import { useTranslation } from '../../hooks';
import { useAreaUnit, useEntity } from '../../contexts';
import { getAttr, isNumber } from '../../utils';
import './Header.scss';
import {
  BATTERY_EMPTY_ICON_SVG,
  BATTERY_LOW_ICON_SVG,
  BATTERY_MEDIUM_ICON_SVG,
  BATTERY_FULL_ICON_SVG,
  HISTORY_ICON_SVG,
  AREA_ICON_SVG,
} from '../../constants/icons';

interface HeaderProps {
  deviceName: string;
  onSettingsClick?: () => void;
}

export function Header({ deviceName, onSettingsClick }: HeaderProps) {
  const { t } = useTranslation();
  const areaUnit = useAreaUnit();
  const entity = useEntity();
  const statusText = getAttr(entity.attributes.status, entity.state);
  const cleanedArea = getAttr(entity.attributes.cleaned_area, 0);
  const cleaningTime = getAttr(entity.attributes.cleaning_time, 0);
  const batteryLevel = getAttr(entity.attributes.battery, 0);

  const getBatteryLevelIcon = () => {
    const battery = entity.attributes.battery;
    if (!isNumber(battery)) return null;

    if (battery >= 80) return BATTERY_FULL_ICON_SVG;
    if (battery >= 60) return BATTERY_MEDIUM_ICON_SVG;
    if (battery >= 20) return BATTERY_LOW_ICON_SVG;
    return BATTERY_EMPTY_ICON_SVG;
  };

  const progress = getAttr(entity.attributes.cleaning_progress, 0) || getAttr(entity.attributes.drying_progress, 0);

  const status = entity.attributes.status;

  return (
    <div className="header">
      <div className="header__top">
        <div className="header__title-wrapper">
          <h2 className="header__title">{deviceName}</h2>
          <p className="header__status">{statusText}</p>
        </div>
        {onSettingsClick && (
          <button className="header__settings-btn" onClick={onSettingsClick} type="button" aria-label="Settings">
            <Settings />
          </button>
        )}
      </div>

      {status !== 'Sleeping' && progress > 0 && (
        <div className="header__progress">
          <div className="header__progress-bar">
            <div className="header__progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}

      <div className="header__stats">
        <div className="header__stat">
          <span className="header__stat-icon">{AREA_ICON_SVG}</span>
          <span className="header__stat-value">
            {cleanedArea} {areaUnit}
          </span>
        </div>
        <div className="header__stat">
          <span className="header__stat-icon">{HISTORY_ICON_SVG}</span>
          <span className="header__stat-value--cleaning-time">
            {cleaningTime} {t('units.minutes')}
          </span>
        </div>
        <div className="header__stat">
          <span className="header__stat-icon">{getBatteryLevelIcon()}</span>
          <span className="header__stat-value">
            {batteryLevel} {t('units.percent')}
          </span>
        </div>
      </div>
    </div>
  );
}
