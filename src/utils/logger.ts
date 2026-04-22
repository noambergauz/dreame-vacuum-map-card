/**
 * Simple logger with debug toggle for dev tools control.
 * Debug logging is off by default and resets on page reload.
 *
 * Usage from browser dev tools:
 *   dreameVacuum.enableDebug()   - Turn on debug logging
 *   dreameVacuum.disableDebug()  - Turn off debug logging
 *   dreameVacuum.isDebugEnabled() - Check current state
 */

let debugEnabled = false;

export const logger = {
  /** Enable or disable debug logging */
  setDebug: (enabled: boolean) => {
    debugEnabled = enabled;
  },

  /** Check if debug logging is enabled */
  isDebugEnabled: () => debugEnabled,

  /** Log debug message (only when debug is enabled) */
  debug: (tag: string, ...args: unknown[]) => {
    if (debugEnabled) {
      console.debug(`[Dreame][${tag}]`, ...args);
    }
  },

  /** Log info message (always logged) */
  info: (...args: unknown[]) => {
    console.info('[Dreame]', ...args);
  },

  /** Log warning message (always logged) */
  warn: (...args: unknown[]) => {
    console.warn('[Dreame]', ...args);
  },

  /** Log error message (always logged) */
  error: (...args: unknown[]) => {
    console.error('[Dreame]', ...args);
  },
};

/** Attach logger controls to window for dev tools access */
export function attachLoggerToWindow() {
  const dreameVacuum = {
    enableDebug: () => {
      logger.setDebug(true);
      logger.info('Debug logging enabled');
    },
    disableDebug: () => {
      logger.setDebug(false);
      logger.info('Debug logging disabled');
    },
    isDebugEnabled: () => logger.isDebugEnabled(),
  };

  (window as Window & { dreameVacuum?: typeof dreameVacuum }).dreameVacuum = dreameVacuum;
}
