import { useState, useEffect } from 'react';
import { CircularButton, Accordion } from '@/components/common';
import { useTranslation, useRoomSettings, getEntityState } from '@/hooks';
import { useHass, useIsRtl, useConfig, useDeviceEntities } from '@/contexts';
import {
  formatSelectOptionLabel,
  getSuctionLevelFriendlyName,
  getSuctionLevelIcon,
  parseRoomsFromCamera,
  publishedOptionList,
  readLiveMapFloor,
  resolveMapEntityId,
  selectOptionKey,
} from '@/utils';
import { Gauge, Thermometer } from 'lucide-react';
import type { ReactNode } from 'react';
import type { RoomSetting } from '@/hooks';
import './CustomizeMode.scss';

const MOP_PRESSURE_ICONS: Record<string, ReactNode> = {
  light: <Gauge size={18} strokeWidth={1.5} />,
  normal: <Gauge size={18} strokeWidth={2.5} />,
};

// Map mop temperature names to icons
const MOP_TEMPERATURE_ICONS: Record<string, ReactNode> = {
  normal: <Thermometer size={18} strokeWidth={1.5} />,
  warm: <Thermometer size={18} strokeWidth={2.5} />,
};

// Short labels for suction levels
const SUCTION_SHORT: Record<string, string> = {
  quiet: 'Q',
  silent: 'Q',
  standard: 'S',
  strong: 'T',
  turbo: 'T',
  max: 'M',
};

function getSuctionShort(level: string | null): string {
  if (!level) return '-';
  return SUCTION_SHORT[selectOptionKey(level)] ?? level.charAt(0).toUpperCase();
}

function optionLabel(
  t: (key: string, params?: Record<string, string | number>) => string,
  group: string,
  value: string
): string {
  const key = `${group}.${selectOptionKey(value)}`;
  const translated = t(key);
  return translated === key ? formatSelectOptionLabel(value) : translated;
}

function selectNotAccepting(state: { unavailable: boolean; attributes: Record<string, unknown> }): boolean {
  return state.unavailable || publishedOptionList(state.attributes.options).length === 0;
}

function getWetnessShort(level: number | null, min: number, max: number): string {
  if (level === null || !Number.isFinite(level)) return '-';
  const third = (max - min) / 3;
  if (level <= min + third) return 'D';
  if (level <= min + third * 2) return 'M';
  return 'W';
}

interface RoomWetnessSliderProps {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  slightlyDryLabel: string;
  moistLabel: string;
  wetLabel: string;
  disabled?: boolean;
}

function RoomWetnessSlider({
  value,
  min,
  max,
  onChange,
  slightlyDryLabel,
  moistLabel,
  wetLabel,
  disabled = false,
}: RoomWetnessSliderProps) {
  const [localValue, setLocalValue] = useState(value);
  const isRtl = useIsRtl();

  // Sync local state when prop changes (e.g., entity update from HA)
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const percent = ((localValue - min) / (max - min)) * 100;
  const thumbWidth = 20;
  const tooltipPosition = `calc(${percent}% + ${thumbWidth / 2 - (percent * thumbWidth) / 100}px)`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      setLocalValue(parseInt(e.target.value));
    }
  };

  const handleCommit = () => {
    if (!disabled && localValue !== value) {
      onChange(localValue);
    }
  };

  const gradientDirection = isRtl ? 'to left' : 'to right';
  const third = (max - min) / 3;
  const activeLabel = localValue <= min + third ? 'dry' : localValue <= min + third * 2 ? 'moist' : 'wet';

  const labels = [
    { key: 'dry', text: slightlyDryLabel },
    { key: 'moist', text: moistLabel },
    { key: 'wet', text: wetLabel },
  ];

  return (
    <div className={`customize-mode__wetness-slider ${disabled ? 'customize-mode__wetness-slider--disabled' : ''}`}>
      <div className="cleaning-mode-modal__slider-container">
        <div className="cleaning-mode-modal__slider-wrapper">
          <input
            type="range"
            min={min}
            max={max}
            value={localValue}
            onChange={handleChange}
            onMouseUp={handleCommit}
            onTouchEnd={handleCommit}
            disabled={disabled}
            className="cleaning-mode-modal__slider"
            style={{
              background: `linear-gradient(${gradientDirection}, var(--accent-bg-secondary) 0%, var(--accent-bg-secondary) ${percent}%, var(--accent-bg-secondary-hover) ${percent}%, var(--accent-bg-secondary-hover) 100%)`,
            }}
          />
          <div
            className="cleaning-mode-modal__slider-tooltip"
            style={isRtl ? { right: tooltipPosition } : { left: tooltipPosition }}
          >
            {localValue}
          </div>
        </div>
      </div>
      <div className="cleaning-mode-modal__slider-labels">
        {labels.map(({ key, text }) => (
          <span
            key={key}
            className={`cleaning-mode-modal__slider-label cleaning-mode-modal__slider-label--${activeLabel === key ? 'active' : 'inactive'}`}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

interface RoomSettingsContentProps {
  setting: RoomSetting;
  setSuctionLevel: (roomId: number, value: string) => void;
  setWetnessLevel: (roomId: number, value: number) => void;
  setCleaningTimes: (roomId: number, value: string) => void;
  setMopPressure: (roomId: number, value: string) => void;
  setMopTemperature: (roomId: number, value: string) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  suctionDisabled?: boolean;
  wetnessDisabled?: boolean;
  cleaningTimesDisabled?: boolean;
  mopPressureDisabled?: boolean;
  mopTemperatureDisabled?: boolean;
}

function RoomSettingsContent({
  setting,
  setSuctionLevel,
  setWetnessLevel,
  setCleaningTimes,
  setMopPressure,
  setMopTemperature,
  t,
  suctionDisabled = false,
  wetnessDisabled = false,
  cleaningTimesDisabled = false,
  mopPressureDisabled = false,
  mopTemperatureDisabled = false,
}: RoomSettingsContentProps) {
  return (
    <div className="customize-mode__room-settings-content">
      {/* Suction Power */}
      {setting.suctionLevelOptions.length > 0 && (
        <div className="customize-mode__setting-group">
          <span className="customize-mode__setting-label">{t('custom_mode.suction_power_title')}</span>
          <div className={`customize-mode__options ${suctionDisabled ? 'customize-mode__options--disabled' : ''}`}>
            {setting.suctionLevelOptions.map((level: string) => (
              <div key={level} className="customize-mode__option">
                <CircularButton
                  size="small"
                  selected={setting.suctionLevel === level}
                  onClick={() => !suctionDisabled && setSuctionLevel(setting.roomId, level)}
                  icon={getSuctionLevelIcon(level)}
                  disabled={suctionDisabled}
                />
                <span className="customize-mode__option-label">{getSuctionLevelFriendlyName(level, t)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Wetness Slider */}
      {setting.wetnessLevel !== null && Number.isFinite(setting.wetnessLevel) && (
        <div className="customize-mode__setting-group">
          <span className="customize-mode__setting-label">{t('custom_mode.wetness_title')}</span>
          <RoomWetnessSlider
            value={setting.wetnessLevel}
            min={setting.wetnessMin}
            max={setting.wetnessMax}
            onChange={(value) => setWetnessLevel(setting.roomId, value)}
            slightlyDryLabel={t('custom_mode.slightly_dry')}
            moistLabel={t('custom_mode.moist')}
            wetLabel={t('custom_mode.wet')}
            disabled={wetnessDisabled}
          />
        </div>
      )}

      {/* Mop Pressure */}
      {setting.mopPressureOptions.length > 0 && (
        <div className="customize-mode__setting-group">
          <span className="customize-mode__setting-label">{t('custom_mode.mop_pressure_title')}</span>
          <div className={`customize-mode__options ${mopPressureDisabled ? 'customize-mode__options--disabled' : ''}`}>
            {setting.mopPressureOptions.map((pressure: string) => (
              <div key={pressure} className="customize-mode__option">
                <CircularButton
                  size="small"
                  selected={setting.mopPressure === pressure}
                  onClick={() => !mopPressureDisabled && setMopPressure(setting.roomId, pressure)}
                  icon={MOP_PRESSURE_ICONS[selectOptionKey(pressure)] || <Gauge size={18} />}
                  disabled={mopPressureDisabled}
                />
                <span className="customize-mode__option-label">{optionLabel(t, 'mop_pressure', pressure)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mop Temperature */}
      {setting.mopTemperatureOptions.length > 0 && (
        <div className="customize-mode__setting-group">
          <span className="customize-mode__setting-label">{t('custom_mode.mop_temperature_title')}</span>
          <div
            className={`customize-mode__options ${mopTemperatureDisabled ? 'customize-mode__options--disabled' : ''}`}
          >
            {setting.mopTemperatureOptions.map((temp: string) => (
              <div key={temp} className="customize-mode__option">
                <CircularButton
                  size="small"
                  selected={setting.mopTemperature === temp}
                  onClick={() => !mopTemperatureDisabled && setMopTemperature(setting.roomId, temp)}
                  icon={MOP_TEMPERATURE_ICONS[selectOptionKey(temp)] || <Thermometer size={18} />}
                  disabled={mopTemperatureDisabled}
                />
                <span className="customize-mode__option-label">{optionLabel(t, 'mop_temperature', temp)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cycles */}
      {setting.cleaningTimesOptions.length > 0 && (
        <div className="customize-mode__setting-group">
          <span className="customize-mode__setting-label">{t('customize.cycles')}</span>
          <div
            className={`customize-mode__options customize-mode__options--pills ${cleaningTimesDisabled ? 'customize-mode__options--disabled' : ''}`}
          >
            {setting.cleaningTimesOptions.map((times: string) => (
              <button
                key={times}
                className={`customize-mode__pill customize-mode__pill--cycle ${
                  setting.cleaningTimes === times ? 'customize-mode__pill--selected' : ''
                }`}
                onClick={() => !cleaningTimesDisabled && setCleaningTimes(setting.roomId, times)}
                disabled={cleaningTimesDisabled}
              >
                {times}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * CustomizeMode panel shown when "Customize" cleaning mode is selected.
 * Shows accordion-based per-room cleaning settings that read/write to HA entities.
 */
export function CustomizeMode() {
  const { t } = useTranslation();
  const hass = useHass();
  const config = useConfig();
  const { get } = useDeviceEntities();

  const mapEntityId = resolveMapEntityId(config.map_entity, get('camera', 'map'));
  const camera = mapEntityId ? hass.states[mapEntityId] : undefined;
  const mapFloor = readLiveMapFloor(hass.states[config.entity]?.attributes.selected_map_id, camera?.attributes);
  const rooms = mapEntityId && mapFloor.floorReady ? parseRoomsFromCamera(hass, mapEntityId, config.room_names) : [];

  const { roomSettings, setSuctionLevel, setWetnessLevel, setCleaningTimes, setMopPressure, setMopTemperature } =
    useRoomSettings({
      hass,
      rooms: rooms.map((r) => ({ id: r.id, name: r.name })),
    });

  // If no rooms found, show message
  if (rooms.length === 0) {
    return (
      <div className="customize-mode">
        <div className="customize-mode__empty">
          <p>{t('customize.no_rooms')}</p>
        </div>
      </div>
    );
  }

  // Filter rooms that have entities
  const roomsWithEntities = rooms.filter((room) => {
    const setting = roomSettings.get(room.id);
    return setting?.hasEntities;
  });

  if (roomsWithEntities.length === 0) {
    return (
      <div className="customize-mode">
        <div className="customize-mode__empty">
          <p>{t('customize.no_rooms')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="customize-mode">
      <div className="customize-mode__room-accordions">
        {roomsWithEntities.map((room) => {
          const setting = roomSettings.get(room.id);
          if (!setting) return null;

          const suctionState = getEntityState(hass, setting.suctionEntityId);
          const wetnessState = getEntityState(hass, setting.wetnessEntityId);
          const cleaningTimesState = getEntityState(hass, setting.cleaningTimesEntityId);
          const mopPressureState = getEntityState(hass, setting.mopPressureEntityId);
          const mopTemperatureState = getEntityState(hass, setting.mopTemperatureEntityId);

          // Build summary badges for accordion title
          const badges: string[] = [];
          if (setting.suctionLevel) badges.push(getSuctionShort(setting.suctionLevel));
          if (setting.wetnessLevel !== null && Number.isFinite(setting.wetnessLevel)) {
            badges.push(getWetnessShort(setting.wetnessLevel, setting.wetnessMin, setting.wetnessMax));
          }
          if (setting.cleaningTimes) badges.push(`${setting.cleaningTimes}`);

          return (
            <Accordion
              key={room.id}
              title={room.name}
              icon={
                <span className="customize-mode__badges">
                  {badges.map((badge, idx) => (
                    <span key={idx} className="customize-mode__badge">
                      {badge}
                    </span>
                  ))}
                </span>
              }
            >
              <RoomSettingsContent
                setting={setting}
                setSuctionLevel={setSuctionLevel}
                setWetnessLevel={setWetnessLevel}
                setCleaningTimes={setCleaningTimes}
                setMopPressure={setMopPressure}
                setMopTemperature={setMopTemperature}
                t={t}
                suctionDisabled={selectNotAccepting(suctionState)}
                wetnessDisabled={wetnessState.unavailable}
                cleaningTimesDisabled={selectNotAccepting(cleaningTimesState)}
                mopPressureDisabled={selectNotAccepting(mopPressureState)}
                mopTemperatureDisabled={selectNotAccepting(mopTemperatureState)}
              />
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}
