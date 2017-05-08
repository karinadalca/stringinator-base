const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const array = [1,2,3,4,5];
    expect(_.indexOf(array, 1)).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    const array = [1,2,3,4,5];
    expect(_.indexOf(array, 5)).toBe(4);
  });

  it('returns -1 for a missing value', () => {
    const array = [1,2,3,4,5];
    expect(_.indexOf(array, 8)).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const array = [1,2,3,4,2];
    expect(_.indexOf(array, 2)).toBe(1);
  });

  it('starts searching at the given offset', () => {
    const array = [1,2,3,4,2];
    expect(_.indexOf(array, 2, 2)).toBe(4);
  });

});