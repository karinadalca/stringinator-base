const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 6, 2, 10];
    expect(_.uniq(nums)).toEqual([2,4,6,10]);
  });
});