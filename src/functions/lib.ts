import jsSHA from 'jssha';

import { PGP_WORD_LIST } from '../data/pgp-word-list';

/**
 * Return SHA-512 hash of input string
 * @param input
 */
export function hash(input: string): number[] {
  const hashed = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });
  hashed.update(input);
  return Array.from(hashed.getHash('UINT8ARRAY'));
}

/**
 * Return current time interval
 * @param interval validity interval in seconds
 */
export function getCurrentTimeInterval(interval: number): number {
  return Math.floor(Date.now() / 1000 / interval);
}

/**
 * Return mixed string from input and time interval
 * @param input
 */
export function mix(input: string, interval: number): string {
  return `${input}:${interval}`;
}

/**
 * Return PGP word from byte
 * @param byte byte value
 * @param type even or odd position of byte
 */
export function PGPEncode(byte: number, type: 'even' | 'odd'): string {
  if (byte < 0 || byte > 255) throw new Error('Invalid byte value');
  const item = PGP_WORD_LIST[byte];
  return type === 'even' ? item.even : item.odd;
}
