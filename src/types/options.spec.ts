import { TOTPOptions } from './options';

describe('TOTPOptions', () => {
  it('should use default time interval', () => {
    const options = new TOTPOptions();
    expect(options.timeInterval).toEqual(30);
  });

  it('should use custom time interval', () => {
    const options = new TOTPOptions(60);
    expect(options.timeInterval).toEqual(60);
  });
});
