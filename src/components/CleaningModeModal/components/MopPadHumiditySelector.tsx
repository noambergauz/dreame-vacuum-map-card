import { CircularButton } from '@/components/common';
import { getMopPadHumidityFriendlyName, getMopPadHumidityIcon } from '@/utils';

type TranslateFunction = (key: string, params?: Record<string, string | number>) => string;

interface MopPadHumiditySelectorProps {
  mopPadHumidity: string;
  mopPadHumidityList: string[];
  onSelect: (entityId: string, value: string) => void;
  entityId: string;
  t?: TranslateFunction;
  disabled?: boolean;
}

export function MopPadHumiditySelector({
  mopPadHumidity,
  mopPadHumidityList,
  onSelect,
  entityId,
  t,
  disabled = false,
}: MopPadHumiditySelectorProps) {
  return (
    <div className={`cleaning-mode-modal__power-grid ${disabled ? 'cleaning-mode-modal__power-grid--disabled' : ''}`}>
      {mopPadHumidityList.map((level) => {
        return (
          <div key={level} className="cleaning-mode-modal__power-option">
            <CircularButton
              size="small"
              selected={level === mopPadHumidity}
              onClick={() => !disabled && onSelect(entityId, level)}
              icon={getMopPadHumidityIcon(level)}
              disabled={disabled}
            />
            <span className="cleaning-mode-modal__power-label">{getMopPadHumidityFriendlyName(level, t)}</span>
          </div>
        );
      })}
    </div>
  );
}
