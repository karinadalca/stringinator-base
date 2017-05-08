const _ = require('../../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    const array = [1,2,3,4,5];
    expect(_.first(array)).toEqual(1);
  });

  it('returns the first 2 elements of an array', () => {
    const array = [1,2,3,4,5];
    expect(_.first(array, 2)).toEqual([1,2]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const array = [1,2,3,4,5];
    expect(_.first(array, 8)).toEqual([1,2,3,4,5]);
  });
});