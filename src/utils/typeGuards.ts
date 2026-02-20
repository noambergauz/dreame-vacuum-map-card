/**
 * Type-safe attribute getters and type guard utilities.
 *
 * These utilities provide a clean way to safely extract typed values
 * from unknown sources (like Home Assistant entity attributes).
 */

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
