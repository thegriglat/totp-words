/**
 * Typed `filter` version
 * @param item functional parameter
 */
export function isNotNull<T>(item: T): item is NonNullable<T> {
  return item !== null;
}
