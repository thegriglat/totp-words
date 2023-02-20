import { getCurrentTimeInterval, hash, PGPEncode } from './lib';

describe('hash', () => {
  it('should return hash of input string', () => {
    const sha512 = hash('test');
    const firstByte = sha512[0];
    const lastByte = sha512[sha512.length - 1];
    expect(firstByte).toEqual(0xee);
    expect(lastByte).toEqual(0xff);
  });
});

describe('time', () => {
  it('should return valid current time for 30 sec interval', () => {
    const now = getCurrentTimeInterval(30);
    expect(now).toBeGreaterThan(0);
  });

  it('should return the same current time for 30 sec interval', async () => {
    const interval = 5;
    const now = getCurrentTimeInterval(interval);
    /** wait 1 sec */
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newvalue = getCurrentTimeInterval(interval);
    expect(now).toEqual(newvalue);
  });

  it('should return different current time for 30 sec interval', async () => {
    const interval = 2;
    const now = getCurrentTimeInterval(interval);
    /** wait 1 sec */
    await new Promise((resolve) => setTimeout(resolve, interval * 2 * 1000));
    const newvalue = getCurrentTimeInterval(interval);
    expect(now).not.toBe(newvalue);
  });
});

describe('PGPEncode', () => {
  it('should return PGP word from byte', () => {
    const word = PGPEncode(0, 'even');
    expect(word).toEqual('aardvark');
  });

  it('should return PGP word from byte', () => {
    const word = PGPEncode(0xc5, 'odd');
    expect(word).toEqual('resistor');
  });

  it('should throw error for invalid byte', () => {
    expect(() => PGPEncode(256, 'even')).toThrowError('Invalid byte value');
  });
});
