import { isNotNull } from './is-not-null';

describe('isNotNull', () => {
  it('should filter null values', () => {
    const array = [1, 2, null, 3, null, 4];
    const filtered = array.filter(isNotNull);
    expect(filtered).toEqual([1, 2, 3, 4]);
  });
});
