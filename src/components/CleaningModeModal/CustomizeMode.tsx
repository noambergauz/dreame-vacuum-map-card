import { useState } from 'react';
import { CircularButton, Accordion } from '@/components/common';
import { useTranslation, useRoomSettings } from '@/hooks';
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

// Get short label for suction level (lowercase to match HA entity options)
function getSuctionShort(level: string | null): string {
  if (!level) return '-';
  const map: Record<string, string> = {
    quiet: 'Q',
    silent: 'Q',
    standard: 'S',
    strong: 'T',
    turbo: 'T',
    max: 'M',
  };
  return map[level] ?? level.charAt(0).toUpperCase();
}

// Get short label for wetness level (numeric to display)
function getWetnessShort(level: number | null, min: number, max: number): string {
  if (level === null) return '-';
  const range = max - min;
  const third = range / 3;
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
}

function RoomWetnessSlider({
  value,
  min,
  max,
  onChange,
  slightlyDryLabel,
  moistLabel,
  wetLabel,
}: RoomWetnessSliderProps) {
  const [localValue, setLocalValue] = useState(value);
  const isRtl = useIsRtl();
  const percent = ((localValue - min) / (max - min)) * 100;

  // Calculate tooltip position accounting for thumb width
  const thumbWidth = 20;
  const tooltipPosition = `calc(${percent}% + ${thumbWidth / 2 - (percent * thumbWidth) / 100}px)`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(parseInt(e.target.value));
  };

  const handleCommit = () => {
    if (localValue !== value) {
      onChange(localValue);
    }
  };

  const gradientDirection = isRtl ? 'to left' : 'to right';

  // Determine which label is active based on value position
  const range = max - min;
  const third = range / 3;
  const activeLabel = localValue <= min + third ? 'dry' : localValue <= min + third * 2 ? 'moist' : 'wet';

  return (
    <div className="customize-mode__wetness-slider">
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
        <span
          className={`cleaning-mode-modal__slider-label ${
            activeLabel === 'dry'
              ? 'cleaning-mode-modal__slider-label--active'
              : 'cleaning-mode-modal__slider-label--inactive'
          }`}
        >
          {slightlyDryLabel}
        </span>
        <span
          className={`cleaning-mode-modal__slider-label ${
            activeLabel === 'moist'
              ? 'cleaning-mode-modal__slider-label--active'
              : 'cleaning-mode-modal__slider-label--inactive'
          }`}
        >
          {moistLabel}
        </span>
        <span
          className={`cleaning-mode-modal__slider-label ${
            activeLabel === 'wet'
              ? 'cleaning-mode-modal__slider-label--active'
              : 'cleaning-mode-modal__slider-label--inactive'
          }`}
        >
          {wetLabel}
        </span>
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
}

function RoomSettingsContent({
  setting,
  setSuctionLevel,
  setWetnessLevel,
  setCleaningTimes,
  t,
}: RoomSettingsContentProps) {
  return (
    <div className="customize-mode__room-settings-content">
      {/* Suction Power */}
      {setting.suctionLevelOptions.length > 0 && (
        <div className="customize-mode__setting-group">
          <span className="customize-mode__setting-label">{t('custom_mode.suction_power_title')}</span>
          <div className="customize-mode__options">
            {setting.suctionLevelOptions.map((level: string) => (
              <div key={level} className="customize-mode__option">
                <CircularButton
                  size="small"
                  selected={setting.suctionLevel === level}
                  onClick={() => setSuctionLevel(setting.roomId, level)}
                  icon={SUCTION_ICONS[level] || SUCTION_STANDARD_ICON_SVG}
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
          />
        </div>
      )}

      {/* Cycles */}
      {setting.cleaningTimesOptions.length > 0 && (
        <div className="customize-mode__setting-group">
          <span className="customize-mode__setting-label">{t('customize.cycles')}</span>
          <div className="customize-mode__options customize-mode__options--pills">
            {setting.cleaningTimesOptions.map((times: string) => (
              <button
                key={times}
                className={`customize-mode__pill customize-mode__pill--cycle ${
                  setting.cleaningTimes === times ? 'customize-mode__pill--selected' : ''
                }`}
                onClick={() => setCleaningTimes(setting.roomId, times)}
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
              />
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}
