import { isNotNull } from './functions/is-not-null';
import { getCurrentTimeInterval, hash, mix, PGPEncode } from './functions/lib';
import { TOTPOptions } from './types/options';

/**
 * Encode input data to a TOTP words
 * @param input input data to be encoded
 * @param secretKey secret key to be used for encoding
 */
export function encode(secretKey: string, options?: TOTPOptions): string[] {
  if (!options) options = new TOTPOptions();
  const mixed = mix(secretKey, getCurrentTimeInterval(options.timeInterval));
  const hashed = hash(mixed);
  const firstThreeBytes = hashed.slice(0, 3);
  const encoded = firstThreeBytes
    .map((byte, index) => PGPEncode(byte, index % 2 === 0 ? 'even' : 'odd'))
    .filter(isNotNull);
  return encoded;
}

/**
 * Verify that the words are valid
 * @param words
 * @param secretKey
 */
export function verify(words: string[], secretKey: string, options?: TOTPOptions): boolean {
  const validatedWords = encode(secretKey, options);
  return (
    words.length === validatedWords.length &&
    words.every((item, index) => item === validatedWords[index])
  );
}
