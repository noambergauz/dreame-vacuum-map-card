import { useState, useEffect } from 'react';
import { CircularButton, Accordion } from '@/components/common';
import { useTranslation, useRoomSettings, getEntityState } from '@/hooks';
import { useHass, useIsRtl } from '@/contexts';
import { parseRoomsFromCamera } from '@/utils/roomParser';
import {
  SUCTION_QUIET_ICON_SVG,
  SUCTION_STANDARD_ICON_SVG,
  SUCTION_STRONG_ICON_SVG,
  SUCTION_TURBO_ICON_SVG,
} from '@/constants';
import type { ReactNode } from 'react';
import type { RoomSetting } from '@/hooks';
import './CustomizeMode.scss';

interface CustomizeModeProps {
  baseEntityId: string;
}

// Map suction level names to icons (lowercase to match HA entity options)
const SUCTION_ICONS: Record<string, ReactNode> = {
  quiet: SUCTION_QUIET_ICON_SVG,
  silent: SUCTION_QUIET_ICON_SVG,
  standard: SUCTION_STANDARD_ICON_SVG,
  strong: SUCTION_STRONG_ICON_SVG,
  turbo: SUCTION_TURBO_ICON_SVG,
  max: SUCTION_TURBO_ICON_SVG,
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
  return SUCTION_SHORT[level] ?? level.charAt(0).toUpperCase();
}

function getWetnessShort(level: number | null, min: number, max: number): string {
  if (level === null) return '-';
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
  t: (key: string, params?: Record<string, string | number>) => string;
  suctionDisabled?: boolean;
  wetnessDisabled?: boolean;
  cleaningTimesDisabled?: boolean;
}

function RoomSettingsContent({
  setting,
  setSuctionLevel,
  setWetnessLevel,
  setCleaningTimes,
  t,
  suctionDisabled = false,
  wetnessDisabled = false,
  cleaningTimesDisabled = false,
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
                  icon={SUCTION_ICONS[level] || SUCTION_STANDARD_ICON_SVG}
                  disabled={suctionDisabled}
                />
                <span className="customize-mode__option-label">{t(`suction_levels.${level.toLowerCase()}`)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Wetness Slider */}
      {setting.wetnessLevel !== null && (
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
export function CustomizeMode({ baseEntityId }: CustomizeModeProps) {
  const { t } = useTranslation();
  const hass = useHass();

  // Get map entity ID and parse rooms
  const mapEntityId = `camera.${baseEntityId}_map`;
  const rooms = parseRoomsFromCamera(hass, mapEntityId);

  // Use room settings hook to read/write HA entities
  const { roomSettings, setSuctionLevel, setWetnessLevel, setCleaningTimes } = useRoomSettings({
    hass,
    baseEntityId,
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

          // Check entity availability for each room setting
          const suctionEntityId = `select.${baseEntityId}_room_${room.id}_suction_level`;
          const wetnessEntityId = `number.${baseEntityId}_room_${room.id}_wetness_level`;
          const cleaningTimesEntityId = `select.${baseEntityId}_room_${room.id}_cleaning_times`;

          const suctionState = getEntityState(hass, suctionEntityId);
          const wetnessState = getEntityState(hass, wetnessEntityId);
          const cleaningTimesState = getEntityState(hass, cleaningTimesEntityId);

          // Build summary badges for accordion title
          const badges: string[] = [];
          if (setting.suctionLevel) badges.push(getSuctionShort(setting.suctionLevel));
          if (setting.wetnessLevel !== null) {
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
                t={t}
                suctionDisabled={suctionState.unavailable}
                wetnessDisabled={wetnessState.unavailable}
                cleaningTimesDisabled={cleaningTimesState.unavailable}
              />
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}
