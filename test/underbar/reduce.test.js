const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    expect( _.reduce(nums, (acc, num) => acc + num, 0)).toEqual(15);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
   const nums = [1, 2, 3, 4, 5];
    expect(_.reduce(nums, (a, b) => a + b)).toEqual(15);
  });

});