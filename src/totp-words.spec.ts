import { encode, verify } from './totp-words';

describe('encode', () => {
  it('should return TOTP words', () => {
    const words = encode('test');
    expect(words).toHaveLength(3);
  });

  it(`should returns the same words in interval`, async () => {
    const words = encode('test');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newWords = encode('test');
    expect(words).toEqual(newWords);
  });

  it(`should returns different words in interval`, async () => {
    const words = encode('test', { timeInterval: 2 });
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const newWords = encode('test', { timeInterval: 2 });
    expect(words).not.toEqual(newWords);
  });
});

describe(`verify`, () => {
  it(`should return true for valid words`, () => {
    const words = encode('test');
    const isValid = verify(words, 'test');
    expect(isValid).toBeTruthy();
  });

  it(`should return false for invalid words`, () => {
    const isValid = verify(['foo', 'bar'], 'test');
    expect(isValid).toBeFalsy();
  });
});
