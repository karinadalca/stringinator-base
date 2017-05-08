const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.some(nums, num => num % 2 === 1)).toEqual(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8, 10];
    expect(_.some(nums, num => num % 2 === 1)).toEqual(false);
  });

});