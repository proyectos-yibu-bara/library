/**
 * Parses a query parameter as a boolean.
 * @param value - The query parameter value as a string.
 * @returns The boolean value of the query parameter.
 */
export function parseBooleanQueryParam(value: string | undefined): boolean | undefined {
  if (value === undefined) return false;

  const valueLowerCase = value.toLowerCase();

  if (valueLowerCase !== 'true' && valueLowerCase !== 'false') return undefined;

  return valueLowerCase === 'true';
}

/**
 * Parses a string as a number and returns undefined if the input is invalid.
 * @param value - The string value to parse.
 * @returns The parsed number or undefined if invalid.
 */
export function parseNumberParam(value: string | undefined): number | undefined {
  if (value === undefined) return undefined;

  const numberValue = Number(value);
  return isNaN(numberValue) ? undefined : numberValue;
}
