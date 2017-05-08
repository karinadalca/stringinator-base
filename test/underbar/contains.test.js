const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.contains(nums, 4)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.contains(nums, 7)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const nums = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4,
      'e': 5
    };
    expect(_.contains(nums, 4)).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
   const nums = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4,
      'e': 5
    };
    expect(_.contains(nums, 8)).toBe(false);
  });

});