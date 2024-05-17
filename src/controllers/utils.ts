/**
 * Parses a query parameter as a boolean.
 * @param value - The query parameter value as a string.
 * @returns The boolean value of the query parameter.
 */
export function parseBooleanQueryParam(value: string | undefined): boolean | undefined {
  if (value === undefined) return false;
  return value.toLowerCase() === 'true';
}
