const _ = require('../../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    const array = [1,2,3,4,5];
    expect(_.last(array)).toEqual(5);
  });

  it('returns the last 2 elements of an array', () => {
    const array = [1,2,3,4,5];
    expect(_.last(array, 2)).toEqual([4,5]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const array = [1,2,3,4,5];
    expect(_.last(array, 8)).toEqual([1,2,3,4,5]);
  });
});