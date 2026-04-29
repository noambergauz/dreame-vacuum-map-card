/**
 * Type-safe attribute getters and type guard utilities.
 *
 * These utilities provide a clean way to safely extract typed values
 * from unknown sources (like Home Assistant entity attributes).
 */

import { z } from 'zod';

/**
 * Type-safe attribute getter with overloads for common types.
 * Validates that the value matches the expected type based on the default value.
 *
 * @example
 * // Returns the string value or empty string if not a string
 * getAttr(entity.attributes.status, '')
 *
 * // Returns the number value or 0 if not a number
 * getAttr(entity.attributes.battery, 0)
 *
 * // Returns the boolean value or false if not a boolean
 * getAttr(entity.attributes.started, false)
 */
export function getAttr(value: unknown, defaultValue: string): string;
export function getAttr(value: unknown, defaultValue: number): number;
export function getAttr(value: unknown, defaultValue: boolean): boolean;
export function getAttr<T extends string | number | boolean>(value: unknown, defaultValue: T): T {
  if (typeof value === typeof defaultValue) {
    return value as T;
  }
  return defaultValue;
}

/**
 * Type guard to check if a value is a string.
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * Type guard to check if a value is a number.
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

/**
 * Type guard to check if a value is a boolean.
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

/**
 * Type guard to check if a value is a non-null object.
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

// HA entity ID format: domain.object_id (both alphanumeric with underscores, starts with letter)
const entityIdPattern = /^[a-z][a-z0-9_]*\.[a-z][a-z0-9_]*$/;

const entityIdSchema = z.string().regex(entityIdPattern, 'Invalid entity ID format. Expected: domain.object_id');
const vacuumEntitySchema = entityIdSchema.refine((id) => id.startsWith('vacuum.'), {
  message: 'Expected vacuum.* entity',
});
const cameraEntitySchema = entityIdSchema.refine((id) => id.startsWith('camera.'), {
  message: 'Expected camera.* entity',
});

const buttonConfigSchema = z.object({
  type: z.literal('stop'),
  action: z.enum(['stop', 'stop_and_dock']),
});

const customThemeSchema = z
  .object({
    primary: z.string().optional(),
    accent: z.string().optional(),
    background: z.string().optional(),
    surface: z.string().optional(),
    text: z.string().optional(),
    textSecondary: z.string().optional(),
  })
  .optional();

/**
 * Zod schema for card configuration validation.
 */
export const configSchema = z.object({
  type: z.string(),
  entity: vacuumEntitySchema,
  map_entity: cameraEntitySchema.optional(),
  title: z.string().optional(),
  theme: z.enum(['light', 'dark', 'custom']).optional(),
  custom_theme: customThemeSchema,
  language: z.enum(['en', 'de', 'ru', 'pl', 'it', 'nl', 'es', 'zh', 'he', 'fr_FR', 'ko', 'cs']).optional(),
  default_mode: z.enum(['room', 'all', 'zone']).optional(),
  default_room_view: z.enum(['map', 'list']).optional(),
  buttons: z.array(buttonConfigSchema).optional(),
});

export type ValidatedConfig = z.infer<typeof configSchema>;

export interface ConfigValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  data?: ValidatedConfig;
}

/**
 * Validates card configuration using Zod schema.
 * Returns structured errors and warnings for user feedback.
 */
export function validateConfig(config: unknown): ConfigValidationResult {
  const result = configSchema.safeParse(config);

  if (result.success) {
    return {
      valid: true,
      errors: [],
      warnings: [],
      data: result.data,
    };
  }

  const errors = result.error.issues.map((issue) => {
    const path = issue.path.join('.');
    return path ? `${path}: ${issue.message}` : issue.message;
  });

  return {
    valid: false,
    errors,
    warnings: [],
  };
}

/**
 * Type guards for entity ID validation (kept for backwards compatibility)
 */
export function isValidEntityId(entityId: unknown): entityId is string {
  return entityIdSchema.safeParse(entityId).success;
}

export function isVacuumEntityId(entityId: unknown): entityId is string {
  return vacuumEntitySchema.safeParse(entityId).success;
}

export function isCameraEntityId(entityId: unknown): entityId is string {
  return cameraEntitySchema.safeParse(entityId).success;
}
