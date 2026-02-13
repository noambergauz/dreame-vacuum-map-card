/**
 * SVG icon definitions
 */

import {
    Plus,
    Bookmark,
    ArrowBigRightDash,
    BrushCleaning,
    Droplet,
    SignalLow,
    SignalMedium,
    SignalHigh,
    Signal,
    Zap,
    Route,
    WavesArrowDown,
    Scan,
    Grid2x2Check,
    Timer,
    Shell,
    CirclePlay,
    PanelBottomClose,
    BatteryCharging,
    Battery,
    BatteryLow,
    BatteryMedium,
    BatteryFull,
    History,
    Play,
    Pause,
    StepForward,
    OctagonX
} from "lucide-react";

// Header

export const BATTERY_EMPTY_ICON_SVG = <Battery />;

export const BATTERY_CHARGING_ICON_SVG = <BatteryCharging />;

export const BATTERY_LOW_ICON_SVG = <BatteryLow />;

export const BATTERY_MEDIUM_ICON_SVG = <BatteryMedium />;

export const BATTERY_FULL_ICON_SVG = <BatteryFull />;

export const HISTORY_ICON_SVG = <History />;

export const AREA_ICON_SVG = <Scan />;

// Action buttons

export const START_CLEANING_ICON_SVG = <Play />;

export const PAUSE_CLEANING_ICON_SVG = <Pause />;

export const RESUME_CLEANING_ICON_SVG = <StepForward />;

export const STOP_CLEANING_ICON_SVG = <OctagonX />;

export const DOCK_ICON_SVG = <PanelBottomClose />;

// Shortcuts

export const SHORTCUTS_ICON_SVG = <Bookmark />;

export const SHORTCUT_START_CLEANING_ICON_SVG = <CirclePlay />;

// Vacuum and mop icons
export const VACUUM_ICON_SVG = <BrushCleaning />;

export const MOP_ICON_SVG = <Droplet />;

export const VACUUM_MOP_ICON_SVG = <><BrushCleaning /><Plus /><Droplet /></>;

export const MOP_AFTER_VACUUM_ICON_SVG = <><BrushCleaning /><ArrowBigRightDash /><Droplet /></>;

// Suction level icons
export const SUCTION_QUIET_ICON_SVG = <SignalLow />;

export const SUCTION_STANDARD_ICON_SVG = <SignalMedium />;

export const SUCTION_STRONG_ICON_SVG = <SignalHigh />;

export const SUCTION_TURBO_ICON_SVG = <Signal />;

// Mop washing frequency icons

export const MOP_WASHING_FREQUENCY_BY_AREA_ICON_SVG = <Scan />;

export const MOP_WASHING_FREQUENCY_BY_TIME_ICON_SVG = <Timer />;

export const MOP_WASHING_FREQUENCY_BY_ROOM_ICON_SVG = <Grid2x2Check />;

// Cleaning route icons

export const CLEANING_ROUTE_QUICK_ICON_SVG = <Zap />;

export const CLEANING_ROUTE_STANDARD_ICON_SVG = <Route />;

export const CLEANING_ROUTE_INTENSIVE_ICON_SVG = <Shell />;

export const CLEANING_ROUTE_DEEP_ICON_SVG = <WavesArrowDown />;



