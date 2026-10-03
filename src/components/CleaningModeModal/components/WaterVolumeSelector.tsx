import { CircularButton } from '@/components/common';
import { getWaterVolumeFriendlyName, getWaterVolumeIcon } from '@/utils';

type TranslateFunction = (key: string, params?: Record<string, string | number>) => string;

interface WaterVolumeSelectorProps {
  waterVolume: string;
  waterVolumeList: string[];
  onSelect: (entityId: string, value: string) => void;
  entityId: string;
  t?: TranslateFunction;
  disabled?: boolean;
}

export function WaterVolumeSelector({
  waterVolume,
  waterVolumeList,
  onSelect,
  entityId,
  t,
  disabled = false,
}: WaterVolumeSelectorProps) {
  return (
    <div className={`cleaning-mode-modal__power-grid ${disabled ? 'cleaning-mode-modal__power-grid--disabled' : ''}`}>
      {waterVolumeList.map((level) => (
        <div key={level} className="cleaning-mode-modal__power-option">
          <CircularButton
            size="small"
            selected={level === waterVolume}
            onClick={() => !disabled && onSelect(entityId, level)}
            icon={getWaterVolumeIcon(level)}
            disabled={disabled}
          />
          <span className="cleaning-mode-modal__power-label">{getWaterVolumeFriendlyName(level, t)}</span>
        </div>
      ))}
    </div>
  );
}
