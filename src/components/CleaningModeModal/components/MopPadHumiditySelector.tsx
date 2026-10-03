import { CircularButton } from '@/components/common';
import type { MopPadHumidity } from '@/types/vacuum';
import { convertMopPadHumidityToService, getMopPadHumidityFriendlyName, getMopPadHumidityIcon } from '@/utils';

type TranslateFunction = (key: string, params?: Record<string, string | number>) => string;

const DEFAULT_MOP_PAD_HUMIDITY_LEVELS = ['Slightly dry', 'Moist', 'Wet'];

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
  const displayList = mopPadHumidityList.length > 0 ? mopPadHumidityList : DEFAULT_MOP_PAD_HUMIDITY_LEVELS;

  return (
    <div className={`cleaning-mode-modal__power-grid ${disabled ? 'cleaning-mode-modal__power-grid--disabled' : ''}`}>
      {displayList.map((level) => {
        const humidity = level as MopPadHumidity;
        return (
          <div key={level} className="cleaning-mode-modal__power-option">
            <CircularButton
              size="small"
              selected={level === mopPadHumidity}
              onClick={() => !disabled && onSelect(entityId, convertMopPadHumidityToService(humidity))}
              icon={getMopPadHumidityIcon(humidity)}
              disabled={disabled}
            />
            <span className="cleaning-mode-modal__power-label">{getMopPadHumidityFriendlyName(humidity, t)}</span>
          </div>
        );
      })}
    </div>
  );
}
