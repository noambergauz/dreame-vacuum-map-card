import type { HassEntity } from '../../types/homeassistant';
import './Header.scss';

interface HeaderProps {
  entity: HassEntity;
  deviceName: string;
}

export function Header({ entity, deviceName }: HeaderProps) {
  const getStatusText = () => {
    return entity.attributes.status || entity.state;
  };

  const getCleanedArea = () => entity.attributes.cleaned_area || 0;
  const getCleaningTime = () => entity.attributes.cleaning_time || 0;
  const getBatteryLevel = () => entity.attributes.battery || 0;

  const progress = entity.attributes.cleaning_progress || entity.attributes.drying_progress || 0;
  
  return (
    <div className="header">
      <h2 className="header__title">{deviceName}</h2>
      <p className="header__status">{getStatusText()}</p>

      {progress > 0 && (
        <div className="header__progress">
          <div className="header__progress-bar">
            <div
              className="header__progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      <div className="header__stats">
        <div className="header__stat">
          <span className="header__stat-icon">🏠</span>
          <span className="header__stat-value">{getCleanedArea()} m²</span>
        </div>
        <div className="header__stat">
          <span className="header__stat-icon">⏱️</span>
          <span className="header__stat-value">{getCleaningTime()} min</span>
        </div>
        <div className="header__stat">
          <span className="header__stat-icon">🔋</span>
          <span className="header__stat-value">{getBatteryLevel()} %</span>
        </div>
      </div>
    </div>
  );
}
