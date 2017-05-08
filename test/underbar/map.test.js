const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const array = [1,2,3,4,5];
    expect(_.map(array, element => element * element)).toEqual([1,4,9,16,25]);
  });
});