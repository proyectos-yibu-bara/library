/**
 * Parses a value as a boolean.
 * @param value - The string value to parse.
 * @returns The boolean value or undefined if invalid.
 */
export function parseValueAsBoolean(value: boolean | string | undefined): boolean | undefined {
  if (value === undefined) return false;
  if (value === true || value === false) return value;

  const valueLowerCase = value.toLowerCase();

  if (valueLowerCase !== 'true' && valueLowerCase !== 'false') return undefined;

  return valueLowerCase === 'true';
}

/**
 * Parses a value as a number.
 * @param value - The string value to parse.
 * @returns The parsed number or undefined if invalid.
 */
export function parseValueAsNumber(value: string | undefined): number | undefined {
  if (value === undefined) return undefined;

  const numberValue = Number(value);
  return isNaN(numberValue) ? undefined : numberValue;
}

/**
 * Parses a value as a non-empty string.
 * @param value - The string value to parse.
 * @returns The string value or undefined if invalid.
 */
export function parseValueAsNotEmptyString(value: string | undefined): string | undefined {
  if (value === undefined || value.trim() === '') {
    return undefined;
  }
  return value;
}

/**
 * Parses a value as a Date object.
 * @param value - The string value to parse.
 * @returns The Date object or undefined if invalid.
 */
export const parseValueAsDate = (value: string): Date | undefined => {
  const date = new Date(value);
  
  if (isNaN(date.getTime())) return undefined;
  
  return date;
};
