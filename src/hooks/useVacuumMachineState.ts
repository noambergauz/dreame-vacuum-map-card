/**
 * Centralized vacuum state machine hook
 *
 * Derives all UI-relevant state from the vacuum entity and sensors.
 * This is the single source of truth for vacuum state in the UI.
 */

import { useMemo } from 'react';
import type { Hass, HassEntity } from '@/types/homeassistant';
import { getEntityState } from './useEntityState';
import { extractBaseEntityId, buildSensorEntityId } from '@/utils/converters';
import {
  STATE_TO_PHASE,
  STATE_TO_TASK,
  VACUUM_STATE_TO_PHASE,
  DEFAULT_PHASE,
  DEFAULT_TASK,
  CLEANING_MODE,
  type VacuumPhase,
  type CleaningTask,
} from '@/constants';

/**
 * Control enablement flags for UI components
 */
export interface VacuumControls {
  canChangeCleaningMode: boolean;
  canChangeSuctionPower: boolean;
  canChangeWetness: boolean;
  canChangeRoute: boolean;
  canChangeMopFrequency: boolean;
  canToggleMaxPower: boolean;
  canStartCleaning: boolean;
  canPause: boolean;
  canResume: boolean;
  canStop: boolean;
  canDock: boolean;
}

/**
 * Complete vacuum machine state
 */
export interface VacuumMachineState {
  /** Broad category of robot activity */
  phase: VacuumPhase;
  /** Specific cleaning task type */
  task: CleaningTask;
  /** Raw state from sensor.{base}_state */
  rawState: string;
  /** Current cleaning mode setting */
  cleaningMode: string;
  /** Whether customized (per-room) cleaning is active */
  isCustomizedCleaning: boolean;
  /** Control enablement flags */
  controls: VacuumControls;
}

/**
 * Derive phase from sensor state, with fallback to vacuum entity state
 */
function derivePhase(sensorState: string | undefined, vacuumState: string | undefined): VacuumPhase {
  if (sensorState && STATE_TO_PHASE[sensorState]) {
    return STATE_TO_PHASE[sensorState];
  }
  if (vacuumState && VACUUM_STATE_TO_PHASE[vacuumState]) {
    return VACUUM_STATE_TO_PHASE[vacuumState];
  }
  return DEFAULT_PHASE;
}

/**
 * Derive cleaning task from sensor state
 */
function deriveTask(sensorState: string | undefined): CleaningTask {
  if (sensorState && STATE_TO_TASK[sensorState]) {
    return STATE_TO_TASK[sensorState];
  }
  return DEFAULT_TASK;
}

/**
 * Derive control enablement from phase, task, and context
 */
function deriveControls(
  phase: VacuumPhase,
  task: CleaningTask,
  cleaningMode: string,
  isCustomizedCleaning: boolean
): VacuumControls {
  const isActivelyCleaning = phase === 'cleaning';
  const isPaused = phase === 'paused';
  const isInCleaningSession = isActivelyCleaning || isPaused;

  const isMoppingTask = task === 'mopping';
  const isMoppingOnlyMode = cleaningMode === CLEANING_MODE.MOPPING;

  return {
    // Cleaning mode: only when idle
    canChangeCleaningMode: phase === 'idle',

    // Suction: disabled when mopping, paused, or customized cleaning active
    canChangeSuctionPower:
      !isMoppingOnlyMode && !isMoppingTask && !isPaused && !(isActivelyCleaning && isCustomizedCleaning),

    // Wetness: only when idle
    canChangeWetness: !isInCleaningSession,

    // Route: only when idle
    canChangeRoute: !isInCleaningSession,

    // Mop frequency buttons: disabled during cleaning (sliders remain enabled)
    canChangeMopFrequency: !isInCleaningSession,

    // Max power toggle: disabled during cleaning
    canToggleMaxPower: !isInCleaningSession,

    // Actions
    canStartCleaning: phase === 'idle',
    canPause: isActivelyCleaning,
    canResume: isPaused,
    canStop: isInCleaningSession,
    canDock: phase !== 'returning' && phase !== 'maintenance',
  };
}

/**
 * Hook to compute vacuum machine state from Home Assistant entities
 *
 * @param hass - Home Assistant object
 * @param entity - Main vacuum entity
 * @returns Complete vacuum machine state with derived controls
 */
export function useVacuumMachineState(hass: Hass, entity: HassEntity): VacuumMachineState {
  return useMemo(() => {
    const baseEntityId = extractBaseEntityId(entity.entity_id);
    const stateSensorId = buildSensorEntityId(baseEntityId, 'state');

    // Get sensor state (primary source)
    const sensorState = getEntityState(hass, stateSensorId);
    const rawState = sensorState.state ?? entity.state ?? 'unknown';

    // Derive phase and task
    const phase = derivePhase(sensorState.state, entity.state);
    const task = deriveTask(sensorState.state);

    // Get cleaning mode from entity attributes
    const cleaningMode = (entity.attributes.cleaning_mode as string) ?? CLEANING_MODE.SWEEPING_AND_MOPPING;

    // Check if customized cleaning is active
    const isCustomizedCleaning = entity.attributes.customized_cleaning === true;

    // Derive control enablement
    const controls = deriveControls(phase, task, cleaningMode, isCustomizedCleaning);

    return {
      phase,
      task,
      rawState,
      cleaningMode,
      isCustomizedCleaning,
      controls,
    };
  }, [hass, entity]);
}
